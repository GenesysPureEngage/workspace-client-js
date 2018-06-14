const VoiceApi =require('../../src/internal/voice-api');
const EventEmitter = require('events');
const sinon = require('sinon');
const expect = require('expect.js');

const codeGen = require('../../src/internal/code-gen/workspace-api');

describe('VoiceApi', ()=>{
    function FakeVoiceApi (){};
    FakeVoiceApi.prototype = {
        setAgentStateReady: sinon.fake.returns('RESPONSE')
    };

    let eventEmitter, api, workspaceClient, _VoiceApi;

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
});