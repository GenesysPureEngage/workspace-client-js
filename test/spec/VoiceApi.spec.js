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
        setAgentStateNotReady: successAsyncRequest
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
});