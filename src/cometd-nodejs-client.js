module.exports = {
    adapt: function() {
        var url = require('url');
        var httpc = require('http');
        var https = require('https');

        const CookieJar = require('cookiejar').CookieJar;
        const CookieAccess = require('cookiejar').CookieAccessInfo;
        const parse = require('url').parse;

        global.window = {};

        window.setTimeout = setTimeout;
        window.clearTimeout = clearTimeout;

        window.console = console;
        window.console.debug = window.console.log;

        // Fields shared by all XMLHttpRequest instances.
        var _agentc = new httpc.Agent({
            keepAlive: true
        });
        var _agents = new https.Agent({
            keepAlive: true
        });
        var _cookieJar = new CookieJar();

        function _secure(uri) {
            return /^https/i.test(uri.protocol);
        }

        // Bare minimum XMLHttpRequest implementation that works with CometD.
        window.XMLHttpRequest = function() {
            var _config;
            var _request;

            this.status = 0;
            this.statusText = '';
            this.readyState = window.XMLHttpRequest.UNSENT;
            this.responseText = '';

            this.open = function(method, uri) {
                _config = url.parse(uri);
                _config.method = method;
                _config.agent = _secure(_config) ? _agents : _agentc;
                _config.headers = {};
                this.readyState = window.XMLHttpRequest.OPENED;
            };

            this.setRequestHeader = function(name, value) {
                _config.headers[name] = value;
            };

            this.send = function(data) {
                var cookieJar = this.context && this.context.cookieJar;
                if (!cookieJar) {
                    cookieJar = _cookieJar;
                }
                
                const access = CookieAccess(
                    _config.hostname,
                    _config.pathname,
                    'https:' == _config.protocol
                    );
                const cookies = cookieJar.getCookies(access).toValueString();

                if (cookies) {
                    _config.headers['Cookie'] = cookies;
                }

                var self = this;
                var http = _secure(_config) ? https : httpc;
                _request = http.request(_config, function(response) {
                    var success = false;
                    self.status = response.statusCode;
                    self.statusText = response.statusMessage;
                    self.readyState = window.XMLHttpRequest.HEADERS_RECEIVED;
                    const cookies = response.headers['set-cookie'];
                    if (cookies) {
                        cookieJar.setCookies(cookies);
                    }

                    response.on('data', function(chunk) {
                        self.readyState = window.XMLHttpRequest.LOADING;
                        self.responseText += chunk;
                    });
                    response.on('end', function() {
                        success = true;
                        self.readyState = window.XMLHttpRequest.DONE;
                        if (self.onload) {
                            self.onload();
                        }
                    });
                    response.on('close', function() {
                        if (!success) {
                            self.readyState = window.XMLHttpRequest.DONE;
                            if (self.onerror) {
                                self.onerror();
                            }
                        }
                    });
                });
                ['abort', 'aborted', 'error'].forEach(function(event) {
                    _request.on(event, function(x) {
                        self.readyState = window.XMLHttpRequest.DONE;
                        if (x) {
                            var error = x.message;
                            if (error) {
                                self.statusText = error;
                            }
                        }
                        if (self.onerror) {
                            self.onerror(x);
                        }
                    });
                });
                if (data) {
                    _request.write(data);
                }
                _request.end();
            };

            this.abort = function() {
                if (_request) {
                    _request.abort();
                }
            };

            this._config = function() {
                return _config;
            };
        };
        window.XMLHttpRequest.UNSENT = 0;
        window.XMLHttpRequest.OPENED = 1;
        window.XMLHttpRequest.HEADERS_RECEIVED = 2;
        window.XMLHttpRequest.LOADING = 3;
        window.XMLHttpRequest.DONE = 4;
    }
};
