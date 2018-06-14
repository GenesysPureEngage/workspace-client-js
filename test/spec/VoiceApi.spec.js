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
        forward: successAsyncRequest
    };

    const expectApiCalled = (methodName) =>{
        return expect(FakeVoiceApi.prototype[methodName].called).to.be.ok();
    };

    const expectApiCalledWith = (methodName, calledWith) =>{
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


});