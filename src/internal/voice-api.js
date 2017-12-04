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

    let msg = { call, notificationType: cometdMsg.data.notificationType };
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

  /**
   * Set the agent state to ready.
   */
  async ready() {
    this._log('Sending ready...');
    let response = await this._api.setAgentStateReady();
    return response;
  }

  /**
   * Set the agent state to not ready.
   * @param {String} workMode - optional workMode to use in the request.
   * @param {String} reasonCode - optional reasonCode to use in the request.
   */
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

  /**
   * Set do-not-disturb on for voice.
   */
  async dndOn() {
    this._log('Sending dnd-on...');
    let response = await this._api.setDNDOn();
    return response;
  }

  /**
   * Set do-not-disturb off for voice.
   */
  async dndOff() {
    this._log('Sending dnd-off...');
    let response = await this._api.setDNDOff();
    return response;
  }

  /**
   * Login the voice channel.
   */
  async login() {
    this._log('Sending voice login...');
    let response = await this._api.loginVoice();
    return response;
  }

  /**
   * Logout the voice channel.
   */
  async logout() {
    this._log('Sending voice logout...');
    let response = await this._api.logoutVoice();
    return response;
  }

  /**
   * Set call forwarding to the specififed destination.
   * @param {String} forwardTo - destination to forward calls to.
   */
  async setForward(forwardTo) {
    this._log(`Sending set-forward with forwardTo [${forwardTo}]...`);
    let response = await this._api.forward({
      data: {
        forwardTo: forwardTo
      }
    });

    return response;
  }

  /**
   * Cancel call forwarding.
   */
  async cancelForward() {
    this._log('Sending cancel-forward...');
    let response = await this._api.cancelForward();
    return response;
  }

  /**
   * Make a new call to the specified destination.
   * @param {String} destination The destination to call
   * @param {Object} optional Optional parameters
   */
  async makeCall(destination, optional) {
    this._log(`Sending make-call to destination [${destination}]...`);
    let data = {
        destination: destination
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.makeCall({data: data });
    return response;
  }

  /**
   * Answer call.
   * @param {String} connId The connId of the call to answer.
   * @param {Object} optional Optional parameters
   */
  async answerCall(connId, optional) {
    this._log(`Sending answer for call [${connId}]...`);
    
    let response = await this._api.answer(connId, {answerData: {data: optional}});
    return response;
  }

  /**
   * Place call on hold.
   * @param {String} connId The connId of the call to place on hold. 
   * @param {Object} optional Optional parameters
   */
  async holdCall(connId, optional) {
    this._log(`Sending hold for call [${connId}]...`);
    let response = await this._api.hold(connId, {holdData: {data: optional}});
    return response;
  }

  /**
   * Retrieve call from hold.
   * @param {String} connId The connId of the call to retrieve. 
   * @param {Object} optional Optional parameters
   */
  async retrieveCall(connId, optional) {
    this._log(`Sending retrieve for call [${connId}]...`);
    let response = await this._api.retrieve(connId, {retrieveData: {data: optional}});
    return response;
  }

  /**
   * Release call.
   * @param {String} connId The connId of the call to release 
   * @param {Object} optional Optional parameters
   */
  async releaseCall(connId, optional) {
    this._log(`Sending release for call [${connId}]...`);
    let response = await this._api.release(connId, {releaseData: {data: optional}});
    return response;
  }

  /**
   * Clear call.
   * @param {String} connId The connId of the call to clear 
   * @param {Object} optional Optional parameters
   */
  async clearCall(connId, optional) {
    this._log(`Sending clear for call [${connId}]...`);
    let response = await this._api.clear(connId, {data: optional});
    return response;
  }

  /**
   * Redirect call to the specified destination
   * @param {String} connId The connId of the call to redirect.
   * @param {String} destination The destination to redirect the call to.
   * @param {Object} optional Optional parameters
   */
  async redirectCall(connId, destination, optional) {
    this._log(`Sending redirect for call [${connId}] with destination [${destination}]...`);
    let data = {
        destination: destination
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.redirect(connId, {data: data});
    return response;
  }

  /**
   * Initiate a conference to the specified destination.
   * @param {String} connId The connId of the call to start the conference from.
   * @param {String} destination The destination
   * @param {Object} optional Optional parameters
   */
  async initiateConference(connId, destination, optional) {
    this._log(`Sending initiate-conference to destination [${destination}] for call [${connId}]...`);
    let data = {
        destination: destination
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.initiateConference(connId, {data: data});
    return response;
  }

  /**
   * Complete a previously initiated conference identified by the provided ids.
   * @param {String} connId The id of the consule call (established)
   * @param {String} parentConnId The id of the parent call (held).
   * @param {Object} optional Optional parameters
   */
  async completeConference(connId, parentConnId, optional) {
    this._log(`Sending complete-conference for call [${connId}] and parentConnId [${parentConnId}]...`);
    let data = {
        parentConnId: parentConnId
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.completeConference(connId, {data: data});
    return response;
  }

  /**
   * Delete a dn from a conference call
   * @param {String} connId The connId of the conference
   * @param {String} dnToDrop The dn number to drop from the conference.
   * @param {Object} optional Optional parameters
   */
  async deleteFromConference(connId, dnToDrop, optional) {
    this._log(`Sending delete-from-conference for call [${connId}] with dnToDrop [${dnToDrop}]...`);
    let data = {
        dnToDrop: dnToDrop
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.deleteFromConference(connId, {data: data});
    return response;
  }

  /**
   * Initiate a transfer to the specified destination.
   * @param {String} connId The connId of the call to be transfered.
   * @param {String} destination The destination of the transfer.
   * @param {Object} optional Optional parameters
   */
  async initiateTransfer(connId, destination, optional) {
    this._log(`Sending initiate-transfer to destination [${destination}] for call [${connId}]...`);
    let data = {
        destination: destination
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.initiateTransfer(connId, {data: data});
    return response;
  }
  
  /**
   * Complete a previously initiated transfer using the provided ids.
   * @param {String} connId The id of the consult call (established)
   * @param {String} parentConnId The id of the parent call (held)
   * @param {Object} optional Optional parameters
   */
  async completeTransfer(connId, parentConnId, optional) {
    this._log(`Sending complete-transfer for call [${connId}] and parentConnId [${parentConnId}]...`);
    let data = {
        parentConnId: parentConnId
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.completeTransfer(connId, {data: data});
    return response;
  }

  /**
   * Alternate two calls retrieving the held call and placing the established call on hold. This is a 
   * shortcut for doing hold and retrieve separately.
   * @param {String} connId The id of the established call.
   * @param {String} heldConnId The id of the held call.
   * @param {Object} optional Optional parameters
   */
  async alternateCalls(connId, heldConnId, optional) {
    this._log(`Sending alternate for call [${connId}] and heldConnId [${heldConnId}]...`);
    let data = {
        heldConnId: heldConnId
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.alternate(connId, {data: data});
    return response;
  }

  /**
   * Merge the two specified calls.
   * @param {String} connId The id of the first call to be merged.
   * @param {String} otherConnId The id of the second call to be merged.
   * @param {Object} optional Optional parameters
   */
  async mergeCalls(connId, otherConnId, optional) {
    this._log(`Sending merge for call [${connId}] and otherConnId [${otherConnId}]...`);
    let data = {
        otherConnId: otherConnId
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.merge(connId, {data: data});
    return response;
  }

  /**
   * Reconnect the specified call. Reconnect releases the established call and retrieves the held call
   * in one step.
   * @param {String} connId The id of the established call (will be released)
   * @param {String} heldConnId The id of the held call (will be retrieved)
   * @param {Object} optional Optional parameters
   */
  async reconnectCall(connId, heldConnId, optional) {
    this._log(`Sending reconnect for call [${connId}] and heldConnId [${heldConnId}]...`);
    let data = {
        heldConnId: heldConnId
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.reconnect(connId, {data: data});
    return response;
  }

  /**
   * Perform a single-step conference to the specififed destination. This will effectively add the
   * destination to the existing call, creating a conference if necessary.
   * @param {String} connId The id of the call to conference.
   * @param {String} destination The destination to be added to the call.
   * @param {Object} optional Optional parameters
   */
  async singleStepConference(connId, destination, optional) {
    this._log(`Sending single-step-conference to destination [${destination}] for call [${connId}]...`);
    let data = {
        destination: destination
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.singleStepConference(connId, {data: data});
    return response;
  }

  /**
   * Perform a single-step transfer to the specified destination.
   * @param {String} connId The id of the call to transfer.
   * @param {String} destination The destination to transfer the call to.
   * @param {Object} optional Optional parameters
   */
  async singleStepTransfer(connId, destination, optional) {
    this._log(`Sending single-step-transfer to destination [${destination}] for call [${connId}]...`);
    let data = {
        destination: destination
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.singleStepTransfer(connId, {data: data});
    return response;
  }

  /**
   * Attach the provided data to the call. This adds the data to the call even if data already exists 
   * with the provided keys.
   * @param {String} connId The id of the call to attach data to.
   * @param {Object} userData The data to attach to the call. This is an array of objects with the properties key, type, and value.
   */
  async attachUserData(connId, userData) {
    this._log(`Sending attach-user-data for call [${connId}: ${JSON.stringify(userData)}...`);
    let response = await this._api.attachUserData(connId, {
      data: {
        userData: userData
      }
    });
    return response;
  }

  /**
   * Update call data with the provided key/value pairs. This will replace any existing kvpairs with the same keys.
   * @param {String} connId The id of the call to update data for.
   * @param {Object} userData The data to update. This is an array of objecvts with the properties key, type, and value.
   */
  async updateUserData(connId, userData) {
    this._log(`Sending update-user-data for call [${connId}: ${JSON.stringify(userData)}...`);
    let response = await this._api.updateUserData(connId, {
      data: {
        userData: userData
      }
    });
    return response;
  }

  /**
   * Delete data with the specified key from the call.
   * @param {String} connId The call to remove data from.
   * @param {String} key The key to remove.
   */
  async deleteUserDataPair(connId, key) {
    this._log(`Sending delete-user-data-pair for call [${connId}] with key [${key}]...`);
    let response = await this._api.deleteUserDataPair(connId, {
      data: {
        key: key
      }
    });

    return response;
  }

  /**
   * Send DTMF digits to the specififed call.
   * @param {String} connId The call to send DTMF digits to.
   * @param {String} digits The DTMF digits to send.
   * @param {Object} optional Optional parameters
   */
  async sendDTMF(connId, digits, optional) {
    this._log(`Sending send-dtmf for call [${connId}] with dtmfDigits [${digits}]...`);
    let data = {
        dtmfDigits: digits
    };
    data = Object.assign(data, optional);
    
    let response = await this._api.sendDTMF(connId, {data: data});
    return response;
  }

  /**
   * Send EventUserEvent with the provided data. 
   * @param {Object} data The data to be sent. This is an array of objects with the properties key, type, and value.
   * @param {String} callUuid The callUuid that the event will be associated with.
   */
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

  /**
   * Start call recording
   * @param {String} connId The id of the call to start recording. 
   */
  async startRecording(connId) {
    this._log(`Sending start-recording for call [${connId}]...`);
    let response = await this._api.startRecording(connId);
    return response;
  }

  /**
   * Pause call recording.
   * @param {String} connId The id of the call to pause recording on. 
   */
  async pauseRecording(connId) {
    this._log(`Sending pause-recording for call [${connId}]...`);
    let response = await this._api.pauseRecording(connId);
    return response;
  }

  /**
   * Resume call recording.
   * @param {String} connId The id of the call to resume recording.
   */
  async resumeRecording(connId) {
    this._log(`Sending resume-recording for call [${connId}]...`);
    let response = await this._api.resumeRecording(connId);
    return response;
  }

  /**
   * Stop call recording
   * @param {String} connId The id of the call to stop recording.
   */
  async stopRecording(connId) {
    this._log(`Sending stop-recording for call [${connId}]...`);
    let response = await this._api.stopRecording(connId);
    return response;
  }
}

module.exports = VoiceApi;
