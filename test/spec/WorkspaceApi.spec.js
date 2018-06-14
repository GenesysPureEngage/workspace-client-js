const EventEmitter = require('events');
const WorkspaceApi = require('../../src/index');
const expect = require('expect.js');
const sinon = require('sinon');

const cometDLib = require('cometd');

const API_KEY = 'FAKE';
const BASE_URL = 'localhost:8000';
const DEBUG_ENABLED = 'false';

const codeGen = require('../../src/internal/code-gen/workspace-api');

describe('WorkspaceApi', () => {
    let api;

    beforeEach(() => {
        api = new WorkspaceApi(API_KEY, BASE_URL, DEBUG_ENABLED);
    });

    it('extends EventEmitter', () => {
        expect(api instanceof EventEmitter).to.be(true);
    });

    it('is not initialized by default', () => {
        expect(api.initialized).to.be(false);
    });

    it('stores apiKey', () => {
        expect(api.apiKey).to.be(API_KEY);
    });

    it('stores baseUrl', () => {
        expect(api.baseUrl).to.be(BASE_URL);
    });

    describe('isDebugEnabled()', () => {
        it('returns false by default', () => {
            expect(new WorkspaceApi(API_KEY, BASE_URL).isDebugEnabled()).to.be(false);
        });

        it('returns boolean false if it was set in constructor', () => {
            expect(
                new WorkspaceApi(API_KEY, BASE_URL, 'false').isDebugEnabled()
            ).to.be(false);
        });

        it('returns boolean true if it was set in constructor', () => {
            expect(
                new WorkspaceApi(API_KEY, BASE_URL, 'true').isDebugEnabled()
            ).to.be(true);
        });
    });

    describe('setDebugEnabled(bool)', () => {
        beforeEach(() => {
            api.voice = {setDebugEnabled: sinon.fake()};
            api.targets = {setDebugEnabled: sinon.fake()};
        });

        it('is chainable', () => {
            expect(api.setDebugEnabled(true)).to.be(api);
        });

        it('calls setDebugEnabled of voiceApi', () => {
            api.setDebugEnabled(1);
            expect(api.voice.setDebugEnabled.calledWith(true)).to.be.ok();
        });

        it('calls setDebugEnabled of targetsApi', () => {
            api.setDebugEnabled(false);
            expect(api.targets.setDebugEnabled.calledWith(false)).to.be.ok();
        });

        it('applicable for isDebugEnabled()', () => {
            api.setDebugEnabled(false);
            expect(api.isDebugEnabled()).to.be(false);
            api.setDebugEnabled(true);
            expect(api.isDebugEnabled()).to.be(true);
        });
    });

    describe('initialize({code, redirectUri, token})', () => {
        let originalSessionApi, originalInitializeCometD, fakeInitializeWorkspaceWithHttpInfo;

        before(() => {
            originalInitializeCometD = api._initializeCometd;
            const fakeResponse = {
                response: {
                    header: {
                        'set-cookie': ['WORKSPACE_SESSIONID=sessionID;']
                    }
                }
            };

            fakeInitializeWorkspaceWithHttpInfo = sinon.fake.returns(fakeResponse);

            originalSessionApi = codeGen.SessionApi;
            codeGen.SessionApi = function FakeSessionApi() {
                this.initializeWorkspaceWithHttpInfo = fakeInitializeWorkspaceWithHttpInfo;
            };

        });

        after(() => {
            codeGen.SessionApi = originalSessionApi;
        });

        beforeEach(() => {
            api._initializeCometd = sinon.fake.returns({ });
        });

        it('has no agent by default', () => {
            expect(api.agent).to.be(undefined);
        });

        it('creates ApiClient', async () => {
            await api.initialize({code: 'CODE', redirectUri: 'RURI', token: 'TOKEN'});
            expect(api.agent instanceof codeGen.ApiClient).to.be(true);
            return true;
        });

        it('can initialize the agent with oauth code / redirectUri', async () => {
            await api.initialize({code: 'CODE', redirectUri: 'RURI'});
            expect(
                fakeInitializeWorkspaceWithHttpInfo.calledWith({code: 'CODE', redirectUri: 'RURI'})
            ).to.be.ok();
            return true;
        });

        it('can initialize the agent with oauth token', async () => {
            await api.initialize({token: 'TOKEN'});
            expect(
                fakeInitializeWorkspaceWithHttpInfo.calledWith({authorization: 'Bearer TOKEN'})
            ).to.be.ok();
            return true;
        });

        it('initializes cometD client ', async ()=>{
            await api.initialize({token: 'TOKEN'});
            expect(api._initializeCometd.called).to.be.ok();
            return true;
        });

        it('stores cometD configuration', async ()=>{
            api._initializeCometd = sinon.fake.returns({ configuration: 'CONFIGURATION'});
            await api.initialize({token: 'TOKEN'});
            expect(api.configuration).to.be('CONFIGURATION');
            return true;
        });

        it('stores cometD user data', async ()=>{
            api._initializeCometd = sinon.fake.returns({ user: 'USER'});
            await api.initialize({token: 'TOKEN'});
            expect(api.user).to.be('USER');
            return true;
        });

        it('set state to initialized', async () =>{
            await api.initialize({token: 'TOKEN'});
            expect(api.initialized).to.be(true);
            return true;
        });

        describe('cometD initialization', ()=> {
            let OriginalCometD, fakeCometD;
            before(() =>{
                OriginalCometD = cometDLib.CometD;
                fakeCometD = function FakeCometD (){};
                fakeCometD.prototype  = {
                    findTransport: sinon.fake.returns({}),
                    configure: sinon.fake.returns({}),
                    handshake: sinon.fake(cb =>{
                        cb({ successful: true })
                    }),
                    subscribe: sinon.fake((channel, onMessage, onSubscribe) =>{
                        onMessage({
                            data: {
                                state: 'Complete',
                                data: {
                                    user: 'USER',
                                    configuration: 'CONFIGURATION'
                                }
                            }
                        });
                        onSubscribe({success: true});
                    })
                };

                cometDLib.CometD = fakeCometD
            });

            after(() =>{
                cometDLib.CometD = OriginalCometD;
            });

            beforeEach(() =>{
                api._initializeCometd = originalInitializeCometD;
            });

            it('ensures long-pooling transport', async ()=>{
                await api.initialize({token: 'TOKEN'});
                expect(
                    fakeCometD.prototype.findTransport.calledWith('long-polling')
                ).to.be.ok();
                return true;
            });

            it('set cookie context to the transport', async ()=>{
                const transport = {};
                fakeCometD.prototype.findTransport = sinon.fake.returns(transport);
                await api.initialize({token: 'TOKEN'});
                expect(transport).to.eql({
                    context: {
                        cookieJar: api.cookieJar
                    }
                });
                return true;
            });

            it('configures cometD with apiKey + workspaceUrl', async ()=>{
                await api.initialize({token: 'TOKEN'});
                expect(
                    fakeCometD.prototype.configure.calledWith(
                        {
                            url: `${BASE_URL}/workspace/v3/notifications`,
                            requestHeaders: {
                                'x-api-key': API_KEY,
                            }
                        }
                    )
                ).to.be.ok();
                return true;
            });

            it('establish  handshake', async ()=>{
                await api.initialize({token: 'TOKEN'});
                expect(fakeCometD.prototype.handshake.called).to.be.ok();
                return true;
            });

            it('throws when handshake is failed', async () =>{
                fakeCometD.prototype.handshake = sinon.fake(cb => cb({ successful: false }));

                return api
                    .initialize({token: 'TOKEN'})
                    .catch(e =>{
                        expect(e).to.eql({ successful : false});
                    });
            });

            it('subscribes to /workspace/v3/initialization', async ()=>{
                fakeCometD.prototype.handshake = sinon.fake(cb => cb({ successful: true }));
                await api.initialize({token: 'TOKEN'});
                expect(
                    fakeCometD.prototype.subscribe.calledWith(
                        '/workspace/v3/initialization',
                        sinon.match.func,
                        sinon.match.func
                    )
                ).to.be.ok();
                return true;
            });

            it('subscribes to /workspace/v3/voice', async ()=>{
                fakeCometD.prototype.handshake = sinon.fake(cb => cb({ successful: true }));
                await api.initialize({token: 'TOKEN'});
                expect(
                    fakeCometD.prototype.subscribe.calledWith(
                        '/workspace/v3/voice',
                        sinon.match.func,
                        sinon.match.func
                    )
                ).to.be.ok();
                return true;
            });
        });
    });

    describe('destroy', ()=>{
        let SessionApi, logout;

        before(() => {
            const fakeResponse = {
                response: {
                    header: {
                        'set-cookie': ['WORKSPACE_SESSIONID=sessionID;']
                    }
                }
            };
            SessionApi = codeGen.SessionApi;
            logout = sinon.fake();
            codeGen.SessionApi = function (){
                this.initializeWorkspaceWithHttpInfo = sinon.fake.returns(fakeResponse);
                this.logout = logout
            };

        });

        after(() => {
            codeGen.SessionApi = SessionApi;
        });

        beforeEach(async () => {
            api._initializeCometd = sinon.fake.returns({});
            api['_cometd'] = { disconnect: sinon.fake() };
            await api.initialize({token: 'TOKEN'});
            return true;
        });

        describe('when initialized', ()=>{
            it('close cometD connection', async ()=>{
                await api.destroy();
                expect(api['_cometd'].disconnect.called).to.be(true);
                return true;
            });

            it('logout from sessionApi', async ()=>{
                await api.destroy();
                expect(logout.called).to.be(true);
                return true;
            });

            it('changes `initialized` to false', async ()=>{
                expect(api.initialized).to.be.ok();
                await api.destroy();
                expect(api.initialized).to.be(false);
                return true;
            });
        });
    })
});