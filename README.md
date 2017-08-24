# workspace-lib-js
A Workspace API client library for Node.js.

# Examples
The following Workspace API tutorials demonstrate some ways you can use this client library:

* [Changing agent state](https://github.com/GenesysPureEngage/tutorials/tree/master/voice-ready-workspace-nodejs)
* [Basic call control](https://github.com/GenesysPureEngage/tutorials/tree/master/basic-call-control-workspace-nodejs)
* [Conferences](https://github.com/GenesysPureEngage/tutorials/tree/master/conference-call-workspace-nodejs)
* [Transfers](https://github.com/GenesysPureEngage/tutorials/tree/master/transfer-call-workspace-nodejs)
* [Alternating calls](https://github.com/GenesysPureEngage/tutorials/tree/master/alternate-calls-workspace-nodejs)

You can also test and play with the API using the [Console Sample](https://github.com/GenesysPureEngage/console-agent-app-js).

# Related Links
* [Provisioning API client library for Node.js](https://github.com/GenesysPureEngage/provisioning-client-js)
* [Authorization API client library for Node.js](https://github.com/GenesysPureEngage/authorization-client-js)


# Quick Start

## Initialization

```javascript
let WorkspaceApi = require('genesys-workspace-client-js');

// Create a new instance providing the URL and API key.
let api = new WorkspaceApi(baseUrl, apiKey);

// Register handlers to run on DN and call-related events
api.on('CallStateChanged', msg => { console.log('CallStateChanged!', msg.call); });
api.on('DnStateChanged', msg => { console.log('DnStateChanged!', msg.dn); });

// Initialize the API providing the authCode. See the OAuth2 section for more details.
await api.initialize({code: authCode, redirectUri: redirectUri});

// After the API is initialized, user details are available.
let agentLogin = api.user.agentLogin;
let defaultPlace = api.user.defaultPlace;

```

## Activating the Voice Channel

After initializing the API, next activate the voice channel. 

```javascript
// Activate the voice channel providing the agentId
// and dn to be used for login.
api.activateChannels(agentId, dn);

// After the process completes, the API publishes a DnStateChanged message.

```

## Agent State

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


## Basic Call Control

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

## Conference and Transfers

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

## UserData

You can use the API to manipulate user data for the call.

```javascript
// Attach
api.voice.attachUserData(connId, userData);

// Update
api.voice.updateUserData(connId, userData);

// Delete a key
api.voice.deleteUserDataPair(connId, key);
```

## Call Recording

You can use the API to record voice calls.

```javascript
// Start and stop
api.voice.startRecording(connId);
api.voice.stopRecording(connId);

// Pause and resume
api.voice.pauseRecording(connId);
api.voice.resumeRecording(connId);
  
```

# OAuth2

The Workspace API uses OAuth2 for authentication and authorization. If you're creating a web-based agent application, Genesys recommends following the [OAuth2 authorization code grant type flow](https://tools.ietf.org/html/rfc6749#section-4.1). This means you need to provide an autorization code and redirect URI when you initialize the Workspace API. 

If your web app includes a server side, the UI should send the agent to:

```
https://<host>/auth/v3/oauth/authorize?response_type=code&client_id=<client_id>&redirect_uri=http://<agent ui location>
```

The `<host>` and `<client_id>` are provided by Genesys and the `<agent ui location>` should point back to the requesting application.

The Genesys authorization service redirects the agent to the login page to enter credentials. After the agent is authenticated, the service redirects the agent back to the provided URI and includes the authorization code as a URL parameter (ex. http://my-agent-desktop/index.html?code=12345). You can then provide this code to your server side and pass it on to the `initialize()` method of the Workspace API. 

**Note:** The redirect URI provided to `/authorize` and to the Workspace API `initialize()` method must match or an error will be returned.

### Samples

The non-UI samples mentioned in the "Examples" section above implement the authorization code grant flow by including a basic authentication header with the username and password, which returns a code without going through the login pages. This is convenient for demonstration purposes but should not be used in production and does not support environments where Security Assertion Markup Language (SAML) is configured. 

# DN and Calls

There are two main resources used in the voice channel part of the Workspace API: DNs and calls. Their respective properties are outlined below. 

## DN 

The DN, or directory number, is the phone number the agent uses for their session. The DN is specified as a parameter to the `actviateChannels()` method - either directly or by giving the name of the place. After `activateChannels()` is called, the API publishes events whenever there is a change in the state of the DN. This occurs when the agent moves from Ready to NotReady, turns do-not-disturb on/off or sets call forwarding.

The DN has the following properties:

| Name          | Description                   |
| --------------|------------------------------ |
| number        | The DN number (phone number).  |
| agentId       | The agent ID used to login.    |
| agentState    | The current state - one of LoggedOut, LoggedIn, Ready, or NotReady. |
| workMode      | The current workmode - one of AuxWork, AfterCallWork (NotReady) or AutoIn, ManualIn (Ready). |
| forwardTo     | The call forwarding destination, if call forwarding is set. |
| dnd           | A flag specifying whether do-not-disturb is turned on. |

### DN Events

When there are changes to the DN state, the Workspace API publishes a DnStateChanged message. It also keeps the current state of the DN and makes it available as a property on the message.

## Calls 

The call resource provides information relating to active phone calls. It has the following properties:

| Name          | Description                   |
| --------------|------------------------------ |
| id            | This is the Genesys `connectionId` or `connId` and can be provided to other methods as a parameter to identify the call you want to manipulate.            |
| callUuid      | The universally unique identifier associated with the call. This is a separate identifier that is specifically required by some requests.  |
| state         | The state of the call - one of Ringing, Dialing, Established, Held, Released, or Completed. Unless specifically configured, calls are automatically completed upon release. |
| parentConnId  | The parent connection ID is present on consult calls and identifies the call from which the conference or transfer was initiated.
| previousConnId | The previous connection ID is present if the ID has changed, as would be the case if an agent is the target of a two-step conference or transfer.
| ani            | The ANI from the call. |
| dnis           | The DNIS from the call. |
| recordingState | The call recording state, one of Stopped, Recording, Paused. If the recording was never started for a call this property is absent. |
| participant    | A list of call participants - i.e. the phone numbers of those currently on the call. |
| userData      | Data associated with the call. |

### Call Events

As with the DN, when there are changes to the call state the Workspace API publishes a CallStateChanged message. This message includes the updated call object along with some supporting details that help identify what has changed. The `notificationType` property is included for this purpose and can have the following values:

| NotificationType          | Description                   |
| --------------|------------------------------ |
| StateChange  | The state of the call changed. For example, Dialing -> Established |
| ParticipantsUpdated | The list of participants was updated. For example, a new party added completion of a conference. |
| AttachedDataChanged | The userData property was updated. |
| CallRecovered | Any calls in progress are recovered and published when first connecting or reconnecting. |

**Note:** In addition to publishing the CallStateChanged message, the Workspace API keeps track of all active calls and makes them available as a property.

#### Call ID Changes

In some scenarios, the ID of the call can change. For example, when an agent is the target of a two-step conference. When the call rings for the agent, the consult call is assigned a new ID that is separate from the original call where conference was initiated. When the conference is completed and all parties
are brought together, the consult call is released and the ID is changed for the target agent. The Workspace API detects this scenario and will include the `previousConnId` property in CallStateChanged.

If you index calls based on ID, this is a hint that you need to update that index.
