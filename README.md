# workspace-lib-js
A Javascript wrapper around the Workspace API for nodejs

# Examples
There are several examples available for nodejs:

* [Changing agent state](https://github.com/GenesysPureEngage/tutorials/tree/master/voice-ready-workspace-nodejs)
* [Basic call control](https://github.com/GenesysPureEngage/tutorials/tree/master/basic-call-control-workspace-nodejs)
* [Conferences](https://github.com/GenesysPureEngage/tutorials/tree/master/conference-call-workspace-nodejs)
* [Transfers](https://github.com/GenesysPureEngage/tutorials/tree/master/transfer-call-workspace-nodejs)
* [Alternating calls](https://github.com/GenesysPureEngage/tutorials/tree/master/alternate-calls-workspace-nodejs)

There is also a [Console Sample](https://github.com/GenesysPureEngage/console-agent-app-js) that provides a command line to test and play with the API.

# Related Links
* [Provisioning API](https://github.com/GenesysPureEngage/provisioning-client-js)
* [Authorization API](https://github.com/GenesysPureEngage/authorization-client-js)


# Quick Start

## Initialization

```javascript
  let WorkspaceApi = require('genesys-workspace-client-js');

  // Create a new instance providing the url and api key.
  let api = new WorkspaceApi(baseUrl, apiKey);
  
  // Register handlers to run on DN and call related events
  api.on('CallStateChanged', msg => { console.log('CallStateChanged!', msg.call); });
  api.on('DnStateChanged', msg => { console.log('DnStateChanged!', msg.dn); });

  // Initialize the API providing authCode. How to obtain an auth code 
  // is explained separately.
  await api.initialize({code: authCode, redirectUri: redirectUri});

  // After the API is initialized, user details are available.
  let agentLogin = api.user.agentLogin;
  let defaultPlace = api.user.defaultPlace;

```

## Activating the Voice Channel

After the API has been initialized, the next step is to activate the voice channel. 

```javascript
  // Activate the voice channel providing the agentId
  // and dn to be used for login.
  api.activateChannels(agentId, dn);

  // After the process completes a DnStateChanged message will be published.

```

## Agent State

```javascript
  // Ready
  api.voice.ready();
  
  // NotReady with optional workmode and reason
  api.voice.notReady();
  api.voice.notReady(workMode);
  api.voice.notReady(workMode, reasonCode);
  
  // DND
  api.voice.dndOn();
  api.voice.dndOff();
```


## Basic Call Control

```javascript
  // Make a new call
  api.voice.makeCall(destination);
  
  // Answer
  api.voice.answerCall(connId);
  
  // Hold and retrieve
  api.voice.holdCall(connId);
  api.voice.retrieveCall(connId);
  
  // Release
  api.voice.releaseCall(connId);
  
  // Send DTMF tones
  api.voice.sendDTMF(connId, digits);
```

## Conference and Transfers

```javascript
  // Two-step transfer
  api.voice.initiateTransfer(connId, destination);
  api.voice.completerTransfer(connId, parentConnId);
  
  // Two-step conference
  api.voice.initiateConference(connId, destination);
  api.voice.completeConference(connId, parentConnId);
  
  // Delete a participant
  api.voice.deleteFromConference(connId, dnToDrop);
  
  // Single-step versions
  api.voice.singleStepTransfer(connId, destination);
  api.voice.singleStepConference(connId, destination);
```

## UserData

```javascript
  // Attach
  api.voice.attachUserData(connId, userData);
  
  // Update
  api.voice.updateUserData(connId, userData);
  
  // Delete a key
  api.voice.deleteUserDataPair(connId, key);
```

## Call Recording

```javascript
  // Start and stop
  api.voice.startRecording(connId);
  api.voice.stopRecording(connId);
  
  // Pause and resume
  api.voice.pauseRecording(connId);
  api.voice.resumeRecording(connId);
  
```

