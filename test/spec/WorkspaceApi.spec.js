const EventEmitter = require('events');
const WorkspaceApi = require('../../src/index');
const expect = require('expect.js');
const sinon = require('sinon');

const API_KEY = 'FAKE';
const BASE_URL = 'localhost:8000';
const DEBUG_ENABLED = 'false';

describe('WorkspaceApi', ()=>{
  let api;

  beforeEach(()=>{
     api = new WorkspaceApi(API_KEY, BASE_URL, DEBUG_ENABLED);
  });

  it('extends EventEmitter', ()=>{
    expect(api instanceof EventEmitter ).to.be(true);
  });

  describe('isDebugEnabled()', ()=>{
    it('returns false by default', ()=>{
      expect(new WorkspaceApi(API_KEY, BASE_URL).isDebugEnabled()).to.be(false);
    });

    it('returns boolean false if it was set in constructor', ()=>{
        expect(
          new WorkspaceApi(API_KEY, BASE_URL, 'false').isDebugEnabled()
        ).to.be(false);
    });

    it('returns boolean true if it was set in constructor', ()=>{
      expect(
        new WorkspaceApi(API_KEY, BASE_URL, 'true').isDebugEnabled()
      ).to.be(true);
    });

  });

  describe('setDebugEnabled()', ()=>{
    beforeEach(() =>{
      api.voice = { setDebugEnabled:  sinon.fake() };
      api.targets = { setDebugEnabled:  sinon.fake() };
    });

    it('is chainable', ()=>{
      expect(api.setDebugEnabled(true)).to.be(api);
    });

    it('calls setDebugEnabled of voiceApi', ()=>{
      api.setDebugEnabled(1);
      expect(api.voice.setDebugEnabled.calledWith(true)).to.be.ok();
    });

    it('calls setDebigEnabled of targetsApi', ()=>{
      api.setDebugEnabled(false);
      expect(api.targets.setDebugEnabled.calledWith(false)).to.be.ok();
    });

    it('applicable for isDebugEnabled()', ()=>{
      api.setDebugEnabled(false);
      expect(api.isDebugEnabled()).to.be(false);
    });
  });
});