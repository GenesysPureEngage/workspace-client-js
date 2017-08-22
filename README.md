# workspace-lib-js
A Javascript wrapper around the Workspace API 

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
  await api.activateChannels(agentId, dn);

  // After the process completes a DnStateChanged message will be published.

```


## Agent State

```javascript
  // Set the agent state to ready, which will result in
  // a DnStateChanged message.
  await api.voice.ready();

  // Set the agent state to not-ready. This will also result
  // in a DnStateChanged message.
  await api.voice.notReady();

```


## Basic Call Control

```javascript
  // Make a new call to DN 5001. This will result in a CallStateChange message
  // being published.
  await api.voice.makeCall('5001');


```
