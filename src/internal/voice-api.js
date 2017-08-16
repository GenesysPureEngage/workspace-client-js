const workspace = require('./code-gen/workspace-api');

class VoiceApi {
  constructor(eventEmitter, workspaceClient, debugEnabled) {
    this._eventEmitter = eventEmitter;
    this._api = new workspace.VoiceApi(workspaceClient);
    this.calls = new Map();

    this._debugEnabled = debugEnabled;
  }

  _log(msg) {
    if (this._debugEnabled) {
      console.log(msg);
    }
  }

  _onCometdMessage(msg) {
    this._log('Cometd message received on /workspace/v3/voice:\n' + JSON.stringify(msg, null ,2));
    if (msg.data.messageType === 'CallStateChanged') {
      this._onCallStateChanged(msg);
    } else if (msg.data.messageType == 'DnStateChanged') {
      this._onDnStateChanged(msg);
    } else if (msg.data.messageType == 'EventError') {
      // just log
    } else {
      this._log('Unhandled message type:' + msg.messageType);
    }
  }

  _onCallStateChanged(msg) {
    let call = msg.data.call;

    if (call.previousConnId && this.calls.has(call.previousConnId)) {
      this.calls.delete(call.previousConnId);
      this.calls.set(call.id, call);
      this._eventEmitter.emit('voice.call.id-changed', call);
      return;
    }

    switch (call.state) {
      case 'Ringing':
      case 'Dialing':
        this._log(`Call [${call.id}] added...`);
        this.calls.set(call.id, call);
        this._eventEmitter.emit('voice.call.added', call);
        break;

      case 'Released':
        this._log(`Call [${call.id}] removed...`);
        this.calls.delete(call.id);
        this._eventEmitter.emit('voice.call.removed', call);
        break;

      default:
        this._log(`Call [${call.id}] updated...`);
        this.calls.set(call.id, call);
        this._eventEmitter.emit('voice.call.updated', call);
        break;
    }
  }

  _onDnStateChanged(msg) {
    let dn = msg.data.dn;
    this.dn = dn;
    this._eventEmitter.emit('voice.dn.updated', dn);
  }

  async ready() {
    this._log('Sending ready...');
    let response = await this._api.setAgentStateReady();
    return response;
  }

  async notReady(workMode, reasonCode) {
    this._log(`Sending not-ready with workMode [${workMode}] and reasonCode [${reasonCode}]...`);
    let data = {};

    if (workMode || reasonCode) {
      data.data = {};
    }

    if (workMode) {
      data.data.agentWorkMode = workMode;
    }

    if (reasonCode) {
      data.data.reasonCode = reasonCode;
    }

    let response = await this._api.setAgentStateNotReady(data);
    return response;
  }

  async makeCall(destination) {
    this._log(`Sending make-call to destination [${destination}]...`);
    let response = await this._api.makeCall(
      { 
        data: {
          destination: destination
        }
      }
    );
    return response;
  }

  async answerCall(connId) {
    this._log(`Sending answer for call [${connId}]...`);
    let response = await this._api.answer(connId);
    return response;
  }

  async holdCall(connId) {
    this._log(`Sending hold for call [${connId}]...`);
    let response = await this._api.hold(connId);
    return response;
  }

  async retrieveCall(connId) {
    this._log(`Sending retrieve for call [${connId}]...`);
    let response = await this._api.retrieve(connId);
    return response;
  }

  async releaseCall(connId) {
    this._log(`Sending release for call [${connId}]...`);
    let response = await this._api.release(connId);
    return response;
  }

  async initiateConference(connId, destination) {
    this._log(`Sending initiate-conference to destination [${destination}] for call [${connId}]...`);
    let response = await this._api.initiateConference(connId, {
      data: {
        destination: destination
      }
    });

    return response;
  }

  async completeConference(connId, parentConnId) {
    this._log(`Sending complete-conference for call [${connId}] and parentConnId [${parentConnId}]...`);
    let response = await this._api.completeConference(connId, {
      data: {
        parentConnId: parentConnId
      }
    });

    return response;
  }

  async initiateTransfer(connId, destination) {
    this._log(`Sending initiate-transfer to destination [${destination}] for call [${connId}]...`);
    let response = await this._api.initiateTransfer(connId, {
      data: {
        destination: destination
      }
    });

    return response;
  }

  async completeTransfer(connId, parentConnId) {
    this._log(`Sending complete-transfer for call [${connId}] and parentConnId [${parentConnId}]...`);
    let response = await this._api.completeTransfer(connId, {
      data: {
        parentConnId: parentConnId
      }
    });

    return response;
  }

  async alternateCalls(connId, heldConnId) {
    this._log(`Sending alternate for call [${connId}] and heldConnId [${heldConnId}]...`);
    let response = await this._api.alternate(callId, {
      data: {
        heldConnId: heldConnId
      }
    });

    return response;
  }
}

module.exports = VoiceApi;
