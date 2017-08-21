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

  _onCallStateChanged(cometdMsg) {
    let call = cometdMsg.data.call;

    let connIdChanged = false;
    if (call.previousConnId && this.calls.has(call.previousConnId)) {
      this.calls.delete(call.previousConnId);
      this.calls.set(call.id, call);
      connIdChanged = true;
    }

    switch (call.state) {
      case 'Ringing':
      case 'Dialing':
        this._log(`Call [${call.id}] added...`);
        this.calls.set(call.id, call);
        break;

      case 'Released':
        this._log(`Call [${call.id}] removed...`);
        this.calls.delete(call.id);
        break;

      default:
        this._log(`Call [${call.id}] updated...`);
        this.calls.set(call.id, call);
        break;
    }

    let msg = { call };
    if (connIdChanged) {
      msg.previousConnId = call.previousConnId;
    }

    this._eventEmitter.emit('CallStateChanged', msg);
  }

  _onDnStateChanged(msg) {
    let dn = msg.data.dn;
    this.dn = dn;
    this._eventEmitter.emit('DnStateChanged', {dn});
  }

  async ready() {
    this._log('Sending ready...');
    let response = await this._api.setAgentStateReady();
    return response;
  }

  async notReady(workMode, reasonCode) {
    let msg = `Sending not-ready`;
    let data = { notReadyData: {} };

    if (workMode || reasonCode) {
      data.notReadyData.data = {};
    }

    if (workMode) {
      msg += ` with workMode [${workMode}]`;
      data.notReadyData.data.agentWorkMode = workMode;
    }

    if (reasonCode) {
      msg += ` reasonCode [${reasonCode}]...`;
      data.notReadyData.reasonCode = reasonCode;
    }
    
    this._log(msg);
    let response = await this._api.setAgentStateNotReady(data);
    return response;
  }

  async dndOn() {
    this._log('Sending dnd-on...');
    let response = await this._api.setDNDOn();
    return response;
  }

  async dndOff() {
    this._log('Sending dnd-off...');
    let response = await this._api.setDNDOff();
    return response;
  }

  async login() {
    this._log('Sending voice login...');
    let response = await this._api.loginVoice();
    return response;
  }

  async logout() {
    this._log('Sending voice logout...');
    let response = await this._api.logoutVoice();
    return response;
  }

  async setForward(forwardTo) {
    this._log(`Sending set-forward with forwardTo [${forwardTo}]...`);
    let response = await this._api.forward({
      data: {
        forwardTo: forwardTo
      }
    });

    return response;
  }

  async cancelForward() {
    this._log('Sending cancel-forward...');
    let response = await this._api.cancelForward();
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

  async clearCall(connId) {
    this._log(`Sending clear for call [${connId}]...`);
    let response = await this._api.clear(connId);
    return response;
  }

  async redirectCall(connId, destination) {
    this._log(`Sending redirect for call [${connId}] with destination [${destination}]...`);
    let response = await this._api.redirect(connId, {
      data: {
        destination: destination
      }
    });

    return destination;
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

  async deleteFromConference(connId, dnToDrop) {
    this._log(`Sending delete-from-conference for call [${connId}] with dnToDrop [${dnToDrop}]...`);
    let response = await this._api.deleteFromConference(connId, {
      data: {
        dnToDrop: dnToDrop
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
    let response = await this._api.alternate(connId, {
      data: {
        heldConnId: heldConnId
      }
    });

    return response;
  }

  async mergeCalls(connId, otherConnId) {
    this._log(`Sending merge for call [${connId}] and otherConnId [${otherConnId}]...`);
    let response = await this._api.merge(connId, {
      data: {
        otherConnId: otherConnId
      }
    });

    return response;
  }

  async reconnectCall(connId, heldConnId) {
    this._log(`Sending reconnect for call [${connId}] and heldConnId [${heldConnId}]...`);
    let response = await this._api.reconnect(connId, {
      data: {
        heldConnId: heldConnId
      }
    });

    return response;
  }

  async singleStepConference(connId, destination) {
    this._log(`Sending single-step-conference to destination [${destination}] for call [${connId}]...`);
    let response = await this._api.singleStepConference(connId, {
      data: {
        destination: destination
      }
    });

    return response;
  }

  async singleStepTransfer(connId, destination) {
    this._log(`Sending single-step-transfer to destination [${destination}] for call [${connId}]...`);
    let response = await this._api.singleStepTransfer(connId, {
      data: {
        destination: destination
      }
    });

    return response;
  }

  async attachUserData(connId, userData) {
    this._log(`Sending attach-user-data for call [${connId}: ${JSON.stringify(data)}...`);
    let response = await this._api.attachUserData(connId, {
      data: {
        userData: userData
      }
    });
    return response;
  }

  async updateUserData(connId, userData) {
    this._log(`Sending update-user-data for call [${connId}: ${JSON.stringify(data)}...`);
    let response = await this._api.updateUserData(connId, {
      data: {
        userData: userData
      }
    });
    return response;
  }

  async deleteUserDataPair(connId, key) {
    this._log(`Sending delete-user-data-pair for call [${connId}] with key [${key}]...`);
    let response = await this._api.deleteUserDataPair(connId, {
      data: {
        key: key
      }
    });

    return response;
  }

  async sendDtmf(connId, digits) {
    this._log(`Sending send-dtmf for call [${connId}] with dtmfDigits [${digits}]...`);
    let response = await this._api.sendDtmf(connId, {
      data: {
        dtmfDigits: digits
      }
    });

    return response;
  }

  async sendUserEvent(data, callUuid) {
    this._log(`Sending send-user-event with data [${JSON.stringify(data)}] and callUuid [${callUuid}]...`);
    let response = await this._api.sendUserEvent({
      data: {
        userData: data,
        callUuid: callUuid
      }
    });

    return response;
  }

  async startRecording(connId) {
    this._log(`Sending start-recording for call [${connId}]...`);
    let response = await this._api.startRecording(connId);
    return response;
  }

  async pauseRecording(connId) {
    this._log(`Sending pause-recording for call [${connId}]...`);
    let response = await this._api.pauseRecording(connId);
    return response;
  }

  async resumeRecording(connId) {
    this._log(`Sending resume-recording for call [${connId}]...`);
    let response = await this._api.resumeRecording(connId);
    return response;
  }

  async stopRecording(connId) {
    this._log(`Sending stop-recording for call [${connId}]...`);
    let response = await this._api.stopRecording(connId);
    return response;
  }
}

module.exports = VoiceApi;
