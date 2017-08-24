# workspace-lib-js
A Workspace API client library for Node.js.

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

// Initialize the API providing authCode. See the OAuth2 section for more details.
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

# OAuth2

The workspace API uses OAuth2 for authentication and authorization. When initializing the API, you can provide either an authorization code and redirect uri or an access token.

The recommended flow for web based agent applications is the authorization code grant type. For web apps that include a server side, the UI should redirect the agent to:

```
https://<host>/auth/v3/oauth/authorize?response_type=code&client_id=<client_id>&redirect_uri=http://<agent ui location>
```

The host and client id are provided by Genesys and the agent ui location should point back to the requesting application.

The Genesys auth service will redirect the agent to the login page to enter credentials. Upon completion and authentication, the auth service will redirect the agent back to the provided uri and include the auth code as a url parameter (ex. http://my-agent-desktop/index.html?code=12345). This code can then be provided to your server side and passed on to the initialize() method of the workspace api. 

Note that the redirect uri provided to /authorize and to the workspace api initialize() method must match or an error will be returned.

### Samples

Non-UI samples implement the code grant flow by including a basic authentication header with the username and password which results in a code being returned without going through the login pages. This is convenient for demonstration purposes but should not be used in production and does not support environments where saml is configured. 

For more details on OAuth2 and the authorization code grant flow refer to the [RFC](https://tools.ietf.org/html/rfc6749#section-4.1).

# DN and Calls

The two main resources used in the voice portion of the workspace API and calls and DNs. Their respective properties are outlined below. 

## DN 

The DN or directory number is the phone number the agent is using for their session. The DN to be used is specified as a parameter to the actviateChannels() method - either directly or by giving the name of the place. After activateChannels() has been called, the api will publish events whenever there is a change in the state of the DN. This occurs when the agent moves from ready to not-ready, turns dnd on/off or sets call forwarding.

The DN has the following properties:

| Name          | Description                   |
| --------------|------------------------------ |
| number        | the dn number (phone number)  |
| agentId       | the agent id used to login    |
| agentState    | the current state - one of LoggedOut, LoggedIn, Ready, or NotReady |
| workMode      | the current workmode -one of AuxWork, AfterCallWork (NotReady) or AutoIn, ManualIn (Ready) |
| forwardTo     | the call forwarding destination, if call forwarding is set |
| dnd           | flag denoting whether do-not-disturb is turned on |

### DN Events

Changes to the DN state will result in a DnStateChanged message being published. In addition to publishing this event the API keeps the current state of the DN and makes it available as a property.

## Calls 

The call resource provides information relating to active phone calls. It has the following properties:

| Name          | Description                   |
| --------------|------------------------------ |
| id            | the id of the call. this is the Genesys connectionId or connId and can be provided to other methods as a parameter to identify the call you want to manipulate            |
| callUuid      | UUID of the call. This is a separate identifier that is specifically required by some requests  |
| state         | state of the call - one of Ringing, Dialing, Established, Held, Released, or Completed. Unless specifically configured, calls are automatically completed upon release. |
| parentConnId  | parent conn id. this is present on consult calls and identifies the call from which the conference or transfer was initiated.
| previousConnId | previousConnId if the id has changed (as would be the case if an agent is the target of a two-step conference or transfer)
| ani            | ani from the call |
| dnis           | dnis from the call |
| recordingState | call recording state, one of Stopped, Recording, Paused. If recording was never started for a call this property will be absent. |
| participant    | a list of call participants - i.e. the phone numbers of those currently on the call |
| userData.      | data associated with the call |

### Call Events

As with the DN, changes to call state result in publication of a CallStateChanged message. This message includes the updated call object along with some supporting details that help identify what has changed. The notificationType property is included for this purpose and can have the following values:

| NotificationType          | Description                   |
| --------------|------------------------------ |
| StateChange  | the state of the call changed. ex. Dialing -> Established |
| ParticipantsUpdated | the list of participants was updated. ex. new party adding on completion of a conference |
| AttachedDataChanged | the userData property was updated |
| CallRecovered | when first connecting or reconnecting, if there are any calls in progress, they are recovered and published with this type |

Note that in addition to publishing the CallStateChanged message the workspace API keeps track of all active calls and makes them available as a property.

#### Call Id Changes

In some scenarios, the id of the call can change. An example of this would be when an agent is the target of a two-step conference. When the call is first ringing for the agent, the consult call is assigned a new id and is separate from the original call that the conference was initiated from. When the conference is completed and all parties
are brought together, the consult call is released and the id is changed for the target agent. The workspace API detects this scenario and will include the previousConnId property in CallStateChanged.

If you are indexing calls based on id this is a hint that you need to update that index.
