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
   * Set the agent's state to Ready.
   */
  async ready() {
    this._log('Sending ready...');
    let response = await this._api.setAgentStateReady();
    return response;
  }

  /**
   * Set the agent's state to NotReady, with an optional workmode or reason code.
   * @param {String} workMode Possible values are AuxWork and AfterCallWork. (optional)
   * @param {String} reasonCode The reason code to use in the request. (optional)
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
   * Turn on do-not-disturb for the voice channel. 
   */
  async dndOn() {
    this._log('Sending dnd-on...');
    let response = await this._api.setDNDOn();
    return response;
  }

  /**
   * Turn off do-not-disturb off for the voice channel.
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
   * Set call forwarding on the DN to the specified destination.
   * @param {String} forwardTo The number where Workspace should forward calls.
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
   * Cancel call forwarding for a DN.
   */
  async cancelForward() {
    this._log('Sending cancel-forward...');
    let response = await this._api.cancelForward();
    return response;
  }

  /**
   * Make a new call to the specified destination.
   * @param {String} destination The number to be dialed.
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
   * Answer a call.
   * @param {String} connId The connection ID of the call.
   * @param {Object} optional Optional parameters
   */
  async answerCall(connId, optional) {
    this._log(`Sending answer for call [${connId}]...`);
    
    let response = await this._api.answer(connId, {answerData: {data: optional}});
    return response;
  }

  /**
   * Place a call on hold.
   * @param {String} connId The connection ID of the call. 
   * @param {Object} optional Optional parameters
   */
  async holdCall(connId, optional) {
    this._log(`Sending hold for call [${connId}]...`);
    let response = await this._api.hold(connId, {holdData: {data: optional}});
    return response;
  }

  /**
   * Retrieve a call from hold.
   * @param {String} connId The connection ID of the call. 
   * @param {Object} optional Optional parameters
   */
  async retrieveCall(connId, optional) {
    this._log(`Sending retrieve for call [${connId}]...`);
    let response = await this._api.retrieve(connId, {retrieveData: {data: optional}});
    return response;
  }

  /**
   * Release a call.
   * @param {String} connId The connection ID of the call.
   * @param {Object} optional Optional parameters
   */
  async releaseCall(connId, optional) {
    this._log(`Sending release for call [${connId}]...`);
    let response = await this._api.release(connId, {releaseData: {data: optional}});
    return response;
  }

  /**
   * End the conference call for all parties. This can be performed by any agent participating in the conference.
   * @param {String} connId The connection ID of the call to clear.
   * @param {Object} optional Optional parameters
   */
  async clearCall(connId, optional) {
    this._log(`Sending clear for call [${connId}]...`);
    let response = await this._api.clear(connId, {data: optional});
    return response;
  }

  /**
   * Redirect a call to the specified destination.
   * @param {String} connId The connection ID of the call to redirect.
   * @param {String} destination The number where Workspace should redirect the call.
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
   * Initiates a two-step conference to the specified destination. This places the existing call on
   * hold and creates a new call in the dialing state. After initiating the conference you can use 
   * completeConference to complete the conference and bring all parties into the same call.
   * @param {String} connId The connection ID of the call to start the conference from.
   * @param {String} destination The number to be dialed.
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
   * Complete a previously initiated conference identified by the provided IDs. Once completed, the 
   * two separate calls are brought together so that all three parties are participating in the same call.
   * @param {String} connId The ID of the consult call (established).
   * @param {String} parentConnId The ID of the parent call (held).
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
   * Delete the specified DN from the conference call. 
   * @param {String} connId The connection ID of the conference.
   * @param {String} dnToDrop The DN number to drop from the conference.
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
   * Initiates a two-step transfer to the specified destination. After initiating the transfer, you can 
   * use completeTransfer to complete the transfer.
   * @param {String} connId The connection ID of the call to be transferred.
   * @param {String} destination The number to be dialed.
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
   * Complete a previously initiated transfer using the provided IDs.
   * @param {String} connId The connection ID of the consult call (established).
   * @param {String} parentConnId The ID of the parent call (held).
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
   * Alternate two calls so that you retrieve a call on hold and place the established call on hold instead. 
   * This is a shortcut for doing hold and retrieve separately.
   * @param {String} connId The connection ID of the established call.
   * @param {String} heldConnId The ID of the held call.
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
   * @param {String} connId The connection ID of the first call to be merged.
   * @param {String} otherConnId The connection ID of the second call to be merged.
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
   * Reconnect the specified call. This releases the established call and retrieves the held call
   * in one step.
   * @param {String} connId The connection ID of the established call (will be released).
   * @param {String} heldConnId The ID of the held call (will be retrieved).
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
   * Perform a single-step conference to the specified destination. This adds the destination to the 
   * existing call, creating a conference if necessary.
   * @param {String} connId The connection ID of the call to conference.
   * @param {String} destination The number to be added to the call.
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
   * @param {String} connId The connection ID of the call to transfer.
   * @param {String} destination The number where the call should be transferred.
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
   * @param {String} connId The connection ID of the call.
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
   * Update call data with the provided key/value pairs. This will replace any existing key/value pairs with the same keys.
   * @param {String} connId The connection ID of the call.
   * @param {Object} userData The data to update. This is an array of objects with the properties key, type, and value.
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
   * @param {String} connId The connection ID of the call. 
   * @param {String} key The key of the data to remove.
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
   * Send DTMF digits to the specified call.
   * @param {String} connId The connection ID of the call.
   * @param {String} digits The DTMF digits to send to the call.
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
   * Send EventUserEvent with the provided data for the specified call. 
   * @param {Object} data The data to be sent. This is an array of objects with the properties key, type, and value.
   * @param {String} callUuid The universally unique identifier for the call that the event will be associated with.
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
   * Start recording the specified call. Recording stops when the call is completed or you send stopRecording 
   * on either the call or the DN.
   * @param {String} connId The connection ID of the call. 
   */
  async startRecording(connId) {
    this._log(`Sending start-recording for call [${connId}]...`);
    let response = await this._api.startRecording(connId);
    return response;
  }

  /**
   * Pause recording on the specified call.
   * @param {String} connId The connection ID of the call. 
   */
  async pauseRecording(connId) {
    this._log(`Sending pause-recording for call [${connId}]...`);
    let response = await this._api.pauseRecording(connId);
    return response;
  }

  /**
   * Resume recording the specified call.
   * @param {String} connId The connection ID of the call.
   */
  async resumeRecording(connId) {
    this._log(`Sending resume-recording for call [${connId}]...`);
    let response = await this._api.resumeRecording(connId);
    return response;
  }

  /**
   * Stop recording the specified call.
   * @param {String} connId The connection ID of the call.
   */
  async stopRecording(connId) {
    this._log(`Sending stop-recording for call [${connId}]...`);
    let response = await this._api.stopRecording(connId);
    return response;
  }
}

module.exports = VoiceApi;
