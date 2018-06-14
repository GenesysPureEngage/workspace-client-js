const VoiceApi =require('../../src/internal/voice-api');
const EventEmitter = require('events');
const sinon = require('sinon');
const expect = require('expect.js');

const codeGen = require('../../src/internal/code-gen/workspace-api');

describe('VoiceApi', ()=>{
    const successAsyncRequest =  sinon.fake.returns('RESPONSE');
    let eventEmitter, api, workspaceClient, _VoiceApi;

    function FakeVoiceApi (){}
    FakeVoiceApi.prototype = {
        setAgentStateReady: successAsyncRequest,
        setAgentStateNotReady: successAsyncRequest,
        setDNDOn: successAsyncRequest,
        setDNDOff: successAsyncRequest,
        loginVoice: successAsyncRequest,
        logoutVoice: successAsyncRequest,
        forward: successAsyncRequest,
        cancelForward: successAsyncRequest
    };

    const expectApiCalled = (methodName) =>{
        return expect(FakeVoiceApi.prototype[methodName].called).to.be.ok();
    };

    const expectApiCalledWith = (methodName, calledWith) =>{
        if(Array.isArray(calledWith))
            return expect(FakeVoiceApi.prototype[methodName].calledWith(...calledWith)).to.be.ok();
        return expect(FakeVoiceApi.prototype[methodName].calledWith(calledWith)).to.be.ok();
    };

    before(()=>{
        _VoiceApi = codeGen.VoiceApi;
        codeGen.VoiceApi = FakeVoiceApi;
    });

    after(()=>{
        codeGen.VoiceApi = _VoiceApi;
    });

    beforeEach(()=>{
        eventEmitter = new EventEmitter();
        workspaceClient = {};
        api = new VoiceApi(eventEmitter, workspaceClient, false);
    });

    it('has calls map', ()=>{
        expect(api.calls).to.eql(new Map());
    });

    describe('ready()', ()=>{
        it('set agent state to Ready', async ()=>{
            await api.ready();
            expect(FakeVoiceApi.prototype.setAgentStateReady.called).to.be(true);
            return true;
        });

        it('returns api-call result', async ()=>{
            const result = await api.ready();
            expect(result).to.be('RESPONSE');
            return true;
        });
    });

    describe('notReady(workMode, reasonCode)', ()=>{
        it('set agent state to not ready', async ()=>{
            await api.notReady('mode', 'code');
            expect(FakeVoiceApi.prototype.setAgentStateNotReady.called).to.be.ok();
            return true;
        });

        it('can be used without any arguments', async ()=>{
            const expectedData = { notReadyData: {} };
            await api.notReady();
            expect(
                FakeVoiceApi.prototype.setAgentStateNotReady.calledWith(expectedData)
            ).to.be.ok();
            return true;
        });

        it('pass workMode to api-call', async ()=>{
            const expectedData = { notReadyData: { data: { agentWorkMode: 'WORK_MODE'}} };
            await api.notReady('WORK_MODE');
            expect(
                FakeVoiceApi.prototype.setAgentStateNotReady.calledWith(expectedData)
            ).to.be.ok();
            return true;
        });

        it('pass reasonCode to api-call', async ()=>{
            const expectedData = {
                notReadyData: {
                    reasonCode: 'REASON_CODE',
                    data: { agentWorkMode: 'WORK_MODE'}
                }
            };
            await api.notReady('WORK_MODE', 'REASON_CODE');
            expect(
                FakeVoiceApi.prototype.setAgentStateNotReady.calledWith(expectedData)
            ).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.setAgentStateNotReady = sinon.fake.returns('RESULT');
            const result = await api.notReady('WORK_MODE', 'REASON_CODE');
            expect(result).to.be('RESULT');
            return true;
        });
    });

    describe('dndOn()', ()=>{
        it('enables DND', async ()=>{
            await api.dndOn();
            expect(FakeVoiceApi.prototype.setDNDOn.called).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.setDNDOn = sinon.fake.returns('RESULT');
            expect(
                await api.dndOn()
            ).to.be('RESULT');
            return true;
        });
    });

    describe('dndOff()', ()=>{
        it('disables DND', async ()=>{
            await api.dndOff();
            expect(FakeVoiceApi.prototype.setDNDOff.called).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.setDNDOff = sinon.fake.returns('OFF_RESULT');
            expect(
                await api.dndOff()
            ).to.be('OFF_RESULT');
            return true;
        });
    });

    describe('login()', ()=>{
        it('sends login request', async ()=>{
            await api.login();
            expect(FakeVoiceApi.prototype.loginVoice.called).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.loginVoice = sinon.fake.returns('LV_RESULT');
            expect(
                await api.login()
            ).to.be('LV_RESULT');
            return true;
        });
    });

    describe('logout()', ()=>{
        it('sends logout request', async ()=>{
            await api.logout();
            expect(FakeVoiceApi.prototype.logoutVoice.called).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.logoutVoice = sinon.fake.returns('RESULT');
            expect(
                await api.logout()
            ).to.be('RESULT');
            return true;
        });
    });

    describe('setForward(forwardTo)', ()=>{
        it('sends forward request', async ()=>{
            await api.setForward('FORWARD_TO');
            expectApiCalledWith('forward', {
                data: {
                    forwardTo: 'FORWARD_TO'
                }
            });
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.forward = sinon.fake.returns('ANY');
            expect(
                await api.setForward('FORWARD_TO')
            ).to.be('ANY');
            return true;
        });
    });

    describe('cancelForward()', ()=>{
        it('sends cancel-forward request', async ()=>{
            await api.cancelForward();
            expectApiCalled('cancelForward');
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.cancelForward = sinon.fake.returns('ANY');
            expect(
                await api.cancelForward()
            ).to.be('ANY');
            return true;
        });
    });

    describe('makeCall(destination, optional)', ()=>{
        before(() =>{
            FakeVoiceApi.prototype.makeCall = successAsyncRequest;
        });

        it('sends make-call request', async ()=>{
            const expectedData = {
                data: {
                    destination: 'destination'
                }
            };
            await api.makeCall('destination', {});
            expectApiCalledWith('makeCall', expectedData);
            return true;
        });

        it('pass optional parameters', async ()=>{
            const optional = { foo: 'bar'};
            const expectedData = {
                data: Object.assign({destination: 'destination'}, optional)
            };
            await api.makeCall('destination', optional);
            expectApiCalledWith('makeCall', expectedData);
            return true;
        });
        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.makeCall = sinon.fake.returns('ANY');
            expect(
                await api.makeCall('dest', {})
            ).to.be('ANY');
            return true;
        });
    });

    describe('answerCall(connectionId, optional)', ()=>{
        before(() =>{
            FakeVoiceApi.prototype.answer = successAsyncRequest;
        });

        it('sends answer-call request', async ()=>{
            const expectedData = {
                answerData: { data: {} }
            };
            await api.answerCall('CONNECTION_ID', {});
            expect(FakeVoiceApi.prototype.answer.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('pass optional parameters', async ()=>{
            const optional = { foo: 'bar'};
            const expectedData = {
                answerData: { data: optional }
            };
            await api.answerCall('CONNECTION_ID', optional);
            expect(FakeVoiceApi.prototype.answer.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.answer = sinon.fake.returns('FAKE');
            expect(
                await api.answerCall('CONNECTION_ID', {})
            ).to.be('FAKE');
            return true;
        });
    });

    describe('holdCall(connectionId, optional)', ()=>{
        before(() =>{
            FakeVoiceApi.prototype.hold = successAsyncRequest;
        });

        it('sends hold-call request', async ()=>{
            const expectedData = {
                holdData: { data: {} }
            };
            await api.holdCall('CONNECTION_ID', {});
            expect(FakeVoiceApi.prototype.hold.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('pass optional parameters', async ()=>{
            const optional = { foo: 'bar'};
            const expectedData = {
                holdData: { data: optional }
            };
            await api.holdCall('CONNECTION_ID', optional);
            expect(FakeVoiceApi.prototype.hold.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.hold = sinon.fake.returns('FAKE');
            expect(
                await api.holdCall('CONNECTION_ID', {})
            ).to.be('FAKE');
            return true;
        });
    });

    describe('retrieveCall(connectionId, optional)', ()=>{
        before(() =>{
            FakeVoiceApi.prototype.retrieve = successAsyncRequest;
        });

        it('sends retrieve-call request', async ()=>{
            const expectedData = {
                retrieveData: { data: {} }
            };
            await api.retrieveCall('CONNECTION_ID', {});
            expect(FakeVoiceApi.prototype.retrieve.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('pass optional parameters', async ()=>{
            const optional = { foo: 'bar'};
            const expectedData = {
                retrieveData: { data: optional }
            };
            await api.retrieveCall('CONNECTION_ID', optional);
            expect(FakeVoiceApi.prototype.retrieve.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.retrieve = sinon.fake.returns('FAKE');
            expect(
                await api.retrieveCall('CONNECTION_ID', {})
            ).to.be('FAKE');
            return true;
        });
    });

    describe('releaseCall(connectionId, optional)', ()=>{
        before(() =>{
            FakeVoiceApi.prototype.release = successAsyncRequest;
        });

        it('sends release-call request', async ()=>{
            const expectedData = {
                releaseData: { data: {} }
            };
            await api.releaseCall('CONNECTION_ID', {});
            expect(FakeVoiceApi.prototype.release.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('pass optional parameters', async ()=>{
            const optional = { foo: 'bar'};
            const expectedData = {
                releaseData: { data: optional }
            };
            await api.releaseCall('CONNECTION_ID', optional);
            expect(FakeVoiceApi.prototype.release.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.release = sinon.fake.returns('FAKE');
            expect(
                await api.releaseCall('CONNECTION_ID', {})
            ).to.be('FAKE');
            return true;
        });
    });

    describe('clearCall(connectionId, optional)', ()=>{
        before(() =>{
            FakeVoiceApi.prototype.clear = successAsyncRequest;
        });

        it('sends clear-call request', async ()=>{
            const expectedData = {
                data: {}
            };
            await api.clearCall('CONNECTION_ID', {});
            expect(FakeVoiceApi.prototype.clear.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('pass optional parameters', async ()=>{
            const optional = { foo: 'bar'};
            const expectedData = { data: optional };
            await api.clearCall('CONNECTION_ID', optional);
            expect(FakeVoiceApi.prototype.clear.calledWith('CONNECTION_ID', expectedData)).to.be.ok();
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.clear = sinon.fake.returns('FAKE');
            expect(
                await api.clearCall('CONNECTION_ID', {})
            ).to.be('FAKE');
            return true;
        });
    });

    describe('redirectCall(connectionId, destination, optional)', ()=>{
        before(() =>{
            FakeVoiceApi.prototype.redirect = successAsyncRequest;
        });

        it('sends redirect-call request', async ()=>{
            const expectedData = {
                data: {
                    destination: 'DESTINATION'
                }
            };
            await api.redirectCall('CONN','DESTINATION', {});
            expectApiCalledWith('redirect', ['CONN', expectedData]);
            return true;
        });
        it('pass optional parameters', async ()=>{
            const optional = { foo: 'bar'};
            const expectedData = {
                data: Object.assign({ destination: 'DEST' }, optional)};
            await api.redirectCall('CONN','DEST', optional);
            expectApiCalledWith('redirect', ['CONN', expectedData]);
            return true;
        });

        it('returns api-call result', async ()=>{
            FakeVoiceApi.prototype.redirect = sinon.fake.returns('REDIR');
            expect(
                await api.redirectCall('CONNECTION_ID','dest', {})
            ).to.be('REDIR');
            return true;
        });
    });
});