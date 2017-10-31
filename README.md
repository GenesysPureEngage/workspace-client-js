# Workspace Client Library

The Workspace Client Library is a Node.js wrapper for the [Workspace API](https://developer.genhtcc.com/api/reference/workspace/index.html) that makes it easier to code against the API. The library provides much of the supporting code needed to make HTTP requests, process HTTP responses, and enable [CometD](https://cometd.org/) messaging.

The library is hosted on [GitHub](https://github.com/GenesysPureEngage/workspace-client-js) and Genesys welcomes pull requests for corrections.

## Install

Genesys recommends that you install the Workspace Client Library for Node.js with [NPM](https://npmjs.org/). Run the following command to install the library:

```
npm i genesys-workspace-client-js
```

## Related links

* The following Workspace API tutorials demonstrate some ways you can use this library:
  * [Changing agent state](https://developer.genhtcc.com/tutorials/voice-ready-workspace-nodejs/)
  * [Basic call control](https://developer.genhtcc.com/tutorials/basic-call-control-workspace-nodejs/)
  * [Conferences](https://developer.genhtcc.com/tutorials/conference-call-workspace-nodejs/)
  * [Transfers](https://developer.genhtcc.com/tutorials/transfer-call-workspace-nodejs/)
  * [Alternating calls](https://developer.genhtcc.com/tutorials/alternate-calls-workspace-nodejs/)
  * [Initialize Workspace](https://developer.genhtcc.com/tutorials/initialize-workspace-nodejs/)
  * [Search for targets](https://developer.genhtcc.com/tutorials/targets-workspace-nodejs/)
* Test and play with the API using the [Console Sample](https://github.com/GenesysPureEngage/console-agent-app-js).
* Learn more about the [Workspace API](https://developer.genhtcc.com/api/reference/workspace/).
* Learn more about the [Workspace Client Library](https://developer.genhtcc.com/api/client-libraries/workspace/).

## Classes

The Workspace Client Library includes two main classes: [VoiceApi](https://developer.genhtcc.com/api/client-libraries/workspace/js/VoiceApi/index.html) and [WorkspaceApi](https://developer.genhtcc.com/api/client-libraries/workspace/js/WorkspaceApi/index.html). These classes represent the resources and events that are part of the Workspace API, along with all the methods you need to access the API functionality.

## Authentication

In order to initialize and use the Workspace Client Library, you first need to authenticate with the [Authentication Client Library](https://developer.genhtcc.com/api/client-libraries/authentication/index.html) (or the [Authentication API](https://developer.genhtcc.com/api/reference/authentication/)).

If you're creating a web-based agent application, Genesys recommends following the [Authorization Code Grant](https://tools.ietf.org/html/rfc6749#section-4.1) flow. Then you provide the authorization code and redirect URI when you call the Workspace Client Library's `initialize()` method.

If you follow the [Resource Owner Password Credentials Grant](https://tools.ietf.org/html/rfc6749#section-4.3) flow, you need to provide the access token when you call the Workspace Client Library's `initialize()` method.

## Examples

### Initialization

```javascript
let WorkspaceApi = require('genesys-workspace-client-js');

// Create a new instance providing the URL and API key.
let api = new WorkspaceApi(apiKey, baseUrl);

// Register handlers to run on DN and call-related events
api.on('CallStateChanged', msg => { console.log('CallStateChanged!', msg.call); });
api.on('DnStateChanged', msg => { console.log('DnStateChanged!', msg.dn); });

// Initialize the API providing the authCode. See the OAuth2 section for more details.
await api.initialize({code: authCode, redirectUri: redirectUri});

// After the API is initialized, user details are available.
let agentLogin = api.user.agentLogin;
let defaultPlace = api.user.defaultPlace;
```

### Activating the Voice Channel

After initializing the API, next activate the voice channel.

```javascript
// Activate the voice channel providing the agentId
// and dn to be used for login.
api.activateChannels(agentId, dn);

// After the process completes, the API publishes a DnStateChanged message.
```

### Agent State

Set the agent's state on the voice channel. The API includes the standard Genesys states: Ready, NotReady, NotReady with workmode and do-not-disturb.

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

### Basic Call Control

The Workspace API offers the typical Genesys call control capabilities.

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

### Conference and Transfers

The API includes both single-step and two-step conferences and transfers.

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

### UserData

You can use the API to manipulate user data for the call.

```javascript
// Attach
api.voice.attachUserData(connId, userData);

// Update
api.voice.updateUserData(connId, userData);

// Delete a key
api.voice.deleteUserDataPair(connId, key);
```

### Call Recording

You can use the API to record voice calls.

```javascript
// Start and stop
api.voice.startRecording(connId);
api.voice.stopRecording(connId);

// Pause and resume
api.voice.pauseRecording(connId);
api.voice.resumeRecording(connId);
```
