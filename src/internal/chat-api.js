const workspace = require('./code-gen/workspace-api');

class ChatApi {
    /**
     * Implements Chat API interaction methods. There is no need to call this constructor explicitly, it is initialized
     * internally by WorkspaceAPI object. Use WorkspaceAPI.chat to access it
     * @param eventEmitter reference to WorkspaceApi object
     * @param workspaceClient reference to ApiClient with low level workspace API
     * @param debugEnabled set to true to enable extended debug output
     */
    constructor(eventEmitter, workspaceClient, debugEnabled) {
        this._eventEmitter = eventEmitter;
        this._chatApi = new workspace.ChatApi(workspaceClient);
        this._mediaApi = new workspace.MediaApi(workspaceClient); //NOTE: Required for completeChat call
        this.chats = new Map();
        this._debugEnabled = debugEnabled;
    }

    _log(msg) {
        if (this._debugEnabled) {
            console.log(msg);
        }
    }

    _onCometdMessage(msg) {
        this._log('Cometd message received on /workspace/v3/media/chat:\n' + JSON.stringify(msg, null, 2));
        switch (msg.data.messageType) {
            case 'InteractionStateChanged':
                this._onInteractionStateChanged(msg);
                break;
            case 'MessageLogUpdated':
                this._onMessageLogUpdated(msg);
                break;
            case 'EventError':
                // just log
                break;
            default:
                this._log('Unhandled message type:' + msg.messageType);
        }
    }

    /**
     * Example
     {
       "interaction":{
          "capabilities":[
             "accept",
             "reject"
          ],
          "ticketId":1,
          "outQueues":[],
          "proxyClientId":9,
          "submittedToRouterAt":"2018-05-17T13:49:31Z",
          "inQueues":[
             {
                "key":"MyFirstQueue",
                "type":"str",
                "value":""
             }
          ],
          "interactionType":"Inbound",
          "id":"022AKaDEME4A000K",
          "receivedAt":"2018-05-17T13:46:36Z",
          "isHeld":false,
          "submittedBy":"esv_chat_srv",
          "mediatype":"chat",
          "tenantId":1,
          "queue":"MySecondQueue",
          "submitSeq":"15007843",
          "movedToQueueAt":"2018-05-17T13:46:37Z",
          "submittedAt":"2018-05-17T13:46:37Z",
          "placedInQueueAt":"2018-05-17T13:49:27Z",
          "userData":[
             {
                "key":"LastName",
                "type":"str",
                "value":"Smith"
             },
             {
                "key":"FirstName",
                "type":"str",
                "value":"John"
             }
          ],
          "interactionSubtype":"InboundNew",
          "isLocked":false,
          "isOnline":true,
          "placeInQueueSeq":"15007887",
          "chat":{
             "participants":[

             ]
          },
          "state":"Invited",
          "isInWorkflow":false
       },
       "notificationType":"StatusChange",
       "messageType":"InteractionStateChanged"
    }
     */
    // TODO: Handle event to remove chat from a list when chat is terminated
    _onInteractionStateChanged(cometdMsg) {
        let interactionData = cometdMsg.data.interaction;
        let chatId = interactionData.id;

        // Add chat information
        this.chats[chatId] = interactionData;

        let msg = {
            id: chatId,
            data: interactionData,
            notificationType: cometdMsg.data.notificationType};

        this._eventEmitter.emit('InteractionStateChanged', msg);
    }

    /**
     * Example:
        {
           "id":"022AKaDEME4A000X",
           "messages":[
              {
                 "type":"ParticipantJoined",
                 "index":1,
                 "from":{
                    "participantId":"00935AFD8ACE0006",
                    "type":"Customer",
                    "nickname":"John Smith",
                    "visibility":"All"
                 },
                 "visibility":"All",
                 "userData":{
                    "_data_id":"155-1a67959f-4901-441c-93c6-4bed8da51564",
                    "_genesys_referrer":"",
                    "FirstName":"John",
                    "_genesys_source":"web",
                    "GCTI_LanguageCode":"en",
                    "_genesys_pageTitle":"Widgets Project",
                    "EmailAddress":"John.Smith@genesys.com",
                    "_genesys_browser":"Chrome",
                    "IdentifyCreateContact":"3",
                    "TimeZone":"120",
                    "_genesys_OS":"Mac OS X",
                    "MediaType":"chat",
                    "_genesys_url":"http://fce-u0021.us.int.genesyslab.com/",
                    "LastName":"Smith"
                 }
              },
              {
                 "type":"ParticipantJoined",
                 "index":2,
                 "from":{
                    "participantId":"00935AFD8AD10008",
                    "type":"External",
                    "nickname":"PoD service",
                    "visibility":"All"
                 },
                 "visibility":"All",
                 "timestamp":"2018-05-17T13:59:45.000Z",
                 "timestampSeconds":1526565585
              },
              {
                 "type":"Text",
                 "index":3,
                 "from":{
                    "participantId":"00935AFD8AD10008",
                    "type":"External",
                    "nickname":"PoD service",
                    "visibility":"All"
                 },
                 "visibility":"All",
                 "timestamp":"2018-05-17T13:59:45.000Z",
                 "timestampSeconds":1526565585,
                 "text":"agent will be with you shortly ..."
              }
           ],
           "notificationType":"NewMessages",
           "messageType":"MessageLogUpdated"
        }
         */
    _onMessageLogUpdated(cometdMsg) {
        // TODO: Verify cometdMsg.data.id
        let chatId = cometdMsg.data.interactionId;
        let notificationType = cometdMsg.data.notificationType;
        let messages = cometdMsg.data.messages;

        if (this.chats.has(chatId) && messages) {
            this.chats[chatId].chat.messages = (this.chats[chatId].chat.messages || []).concat(messages);
        }

        let msg = {
            id: chatId,
            chat: this.chats[chatId],
            messages: messages,
            notificationType: cometdMsg.data.notificationType
        };

        this._eventEmitter.emit('MessageLogUpdated', msg);
    }


    /**
     * Accept a chat
     * Accept the specified chat interaction.
     * @param {String} chatId The ID of the chat interaction.
     * @param {Object} optional Optional parameters
     * @param {String} optional.nickname The agent's nickname, as displayed to the chat participants.
     */
    async acceptChat(chatId, optional) {
        this._log(`Accepting chat [${chatId}]...`);
        return await this._chatApi.acceptChat(chatId, {acceptData: {data: optional}});
    }

    /**
     * Leave a chat
     * Leave the specified chat or conference. If the agent is in a conference, the chat session stays open for the customer. If the agent is not in a conference, the chat ends for the customer but the agent can still update user data and set disposition.
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {Object} optional Optional parameters
     * @param {('CloseIfNoAgents'|'ForceClose'|'KeepAlive')} optional.afterAction - The allowed type of the shape optional.afterAction The action to take after the agent leaves.
     * @param {String} optional.message - The message to send to the chat participants.
     * @param {String} optional.messageType - The type of message.
     * @param {('Normal'|'System'} optional.treatAs - Specifies how the message should be treated.
     */
    async leaveChat(chatId, mediaType, optional) {
        this._log(`Leaving chat [${chatId}] on [${mediaType}] channel...`);
        return await this._chatApi.leaveChat(mediaType, chatId, {leaveData: {data: optional}});
    }

    /**
     * Complete chat interaction
     * Marks the specified interaction as complete.
     * @param {String} chatId The ID of the chat interaction.
     */
    async completeChat(chatId) {
        this._log(`Completing chat [${chatId}]...`);
        return await this._mediaApi.complete('chat', chatId);
    }

    /**
     * Cancel a chat consultation request
     * Cancel a chat consultation request that was initialized by calling consultByQueue(). If the agent has already accepted the invitation, the Workspace API can&#39;t cancel the consultation.
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     */
    async cancelConsultationChat(chatId, mediaType) {
        this._log(`Canceling consultation chat [${chatId}]...`);
        return await this._chatApi.cancelConsultationChat(chatId, mediaType);
    }

    /**
     * Consult with another agent
     * A consult occurs in the context of the specified chat, but the customer is not aware of the consulting agent. Messages and notifications from the consulting agent are only visible to other agents in the chat, not to the customer. After the consulting agent accepts the consultation, the originating agent can either transfer the chat to the consulting agent ([/media/{mediatype}/interactions/{id}/transfer-agent](/reference/workspace/Media/index.html#transferAgent)), add them in a conference ([/media/chat/interactions/{id}/invite](/reference/workspace/Media/index.html#invite)) or the consulting agent can leave the chat ([/media/chat/interactions/{id}/leave](/reference/workspace/Media/index.html#leaveChat)).
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {String} agentId - The unique ID of the consulting agent
     */
    async consult(chatId, mediaType, agentId) {
        this._log(`Starting consult with agent [${agentId}] chat [${chatId}]...`);
        return await this._chatApi.consult(chatId, mediaType, {consultData: {data: {agentId: agentId}}});
    }

    /**
     * Consult with another agent via a queue
     * Consult with another agent during a chat by sending an consult invitation to the specified queue. A consult occurs in the context of the specified chat, but the customer is not aware of the consulting agent. Messages and notifications from the consulting agent are only visible to other agents in the cat, not to the customer. After the consulting agent accepts the consultation, the originating agent can either transfer the chat to the consulting agent ([/media/{mediatype}/interactions/{id}/transfer-agent](/reference/workspace/Media/index.html#transferAgent)), add them in a conference ([/media/chat/interactions/{id}/invite](/reference/workspace/Media/index.html#invite)) or the consulting agent can leave the chat ([/media/chat/interactions/{id}/leave](/reference/workspace/Media/index.html#leaveChat)).
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {String} queue - The name of the queue where the Workspace API should send the consult invite.
     */
    async consultByQueue(chatId, mediaType, queue) {
        this._log(`Starting consult chat via a queue [${queue}] [${chatId}]...`);
        return await this._chatApi.consultByQueue(mediaType, chatId, {consultData: {data: {queue: queue}}});
    }


    /**
     * Send notification that the agent is typing
     * Send notification that the agent is typing to the other participants in the specified chat.
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {Object} optional Optional parameters
     * @param {String} optional.message - The message to send to the chat participants. For example, "Agent typing".
     * @param {('All'|'Agent'|'Supervisor'} optional.visibility - Defines which participants in the chat can see the message.
     */
    async sendTypingStarted(chatId, mediaType, optional) {
        this._log(`Sending start typing notification for chat [${chatId}]...`);
        return await this._chatApi.sendTypingStarted(chatId, mediaType, {typingStartedData: {data: optional}});
    }

    /**
     * Send notification that the agent stopped typing
     * Send notification that the agent stopped typing to the other participants in the specified chat.
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {Object} optional Optional parameters
     * @param {String} optional.message - The message to send to the chat participants. For example, "Agent typing".
     * @param {('All'|'Agent'|'Supervisor'} optional.visibility - Defines which participants in the chat can see the message.
     */
    async sendTypingStopped(chatId, mediaType, optional) {
        this._log(`Sending stop typing notification for chat [${chatId}]...`);
        return await this._chatApi.sendTypingStopped(chatId, mediaType, {typingStoppedData: {data: optional}});
    }

    /**
     * Send a custom notification
     * Send a custom notification to the specified chat. The notification is typically used as a trigger for some custom behavior on the recipient&#39;s end.
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {String} message The message to send to the chat participants.
     * @param {Object} optional Optional parameters
     * @param {('All'|'Agent'|'Supervisor'} optional.visibility - Defines which participants in the chat can see the message.
     * @param {Array.<Object>} optional.userData - The data of custom notification. This is an array of objects with the properties key, type, and value.
     */
    async sendCustomNotification(chatId, mediaType, message, optional) {
        let data = {
            message: message
        };
        data = Object.assign(data, optional);

        this._log(`Sending custom notification [${message}] for chat [${chatId}]...`);
        return await this._chatApi.sendCustomNotification(mediaType, chatId, {customNotificationData: {data: data}});
    }

    /**
     * Send a message
     * Send a message to participants in the specified chat.
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {String} message The message to send to the chat participants.
     * @param {Object} optional Optional parameters
     * @param {String} optional.message - The message to send to the chat participants.
     * @param {('All'|'Agent'|'Supervisor'} optional.visibility - Defines which participants in the chat can see the message.
     * @param {('Normal'|'System'} optional.treatAs - Specifies how the message should be treated.
     */
    async sendMessage(chatId, mediaType, message, optional) {
        let data = {
            message: message
        };
        data = Object.assign(data, optional);

        this._log(`Sending message [${message}] for chat [${chatId}] members...`);
        return await this._chatApi.sendMessage(chatId, mediaType, {acceptData: {data: data}});
    }

    /**
     * Send a URL
     * Send a URL to participants in the specified chat.
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {String} url The URL to send to the chat participants.
     * @param {Object} optional Optional parameters
     * @param {String} optional.message - The message to send to the chat participants.
     * @param {('All'|'Agent'|'Supervisor'} optional.visibility - Defines which participants in the chat can see the URL.
     */
    async sendUrlData(chatId, mediaType, url, optional) {
        let data = {
            url: url
        };
        data = Object.assign(data, optional);

        this._log(`Sending url [${url}] for chat [${chatId}] members...`);
        return await this._chatApi.sendUrlData(chatId, mediaType, {acceptData: {data: data}});
    }

    /**
     * Invite another agent to a chat
     * Invite another agent to join the specified chat conference. The customer is notified when the invited agent joins the chat. The agents can communicate with the customer or they can communicate with each other without the customer seeing their messages, depending on the value you set for the **visibility** parameter when you call [/media/chat/interactions/{id}/send-message](/reference/workspace/Media/index.html#sendMessage).
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {String} agentId The unique ID of the agent.
     */
    async invite(chatId, mediaType, agentId) {
        this._log(`Inviting agent [${agentId}] to chat [${chatId}]...`);
        return await this._chatApi.invite(chatId, mediaType, {inviteData: {data: {agentId: agentId}}});
    }

    /**
     * Invite another agent to a chat via a queue
     * Invite another agent to the chat conference by sending an invitation to the specified queue. The next available agent in the queue is then sent an invite to join the chat. The customer is notified when the invited agent joins the chat. The agents can communicate with the customer or they can communicate with each other without the customer seeing their messages, depending on the value you set for the **visibility** parameter when you call [/media/chat/interactions/{id}/send-message](/reference/workspace/Media/index.html#sendMessage).
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {String} queue The name of the queue where the Workspace API should send the chat invite.
     */
    async inviteByQueue(chatId, mediaType, queue) {
        this._log(`Inviting agent to a chat via a queue [${queue}] to chat [${chatId}]...`);
        return await this._chatApi.inviteByQueue(chatId, mediaType, {inviteData: {data: {queue: queue}}});
    }

    /**
     * Remove an agent from a chat conference
     * Remove the specified agent from the chat conference.
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @param {String} agentId The unique ID of the agent to remove from the conference.
     */
    async removeFromConference(chatId, mediaType, agentId) {
        this._log(`Removing agent [${agentId}] from chat conference [${chatId}]...`);
        return await this._chatApi.removeFromConference(chatId, mediaType, {removeFromConferenceData: {data: {agentId: agentId}}});
    }


    /**
     * Get chat transcript
     * Get a transcript for the specified chat interaction.
     * @param {String} chatId The ID of the chat interaction.
     * @param {String} mediaType The chat media channel.
     * @return A list of chat messages
     */
    async chatMessages(chatId, mediaType) {
        this._log(`Getting chat transcript [${chatId}]...`);

        const response = await this._chatApi.chatMessages(mediaType, chatId);
        return response.data.messages;
    }


    setDebugEnabled(isEnabled) {
        this._debugEnabled = !!isEnabled;
        return this;
    }
}

module.exports = ChatApi;
