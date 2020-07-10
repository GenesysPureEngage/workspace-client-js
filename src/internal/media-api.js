const workspace = require('./code-gen/workspace-api');

class MediaApi {
    /**
     * Implements Media API interaction methods. There is no need to call this constructor explicitly, it is initialized
     * internally by WorkspaceAPI object. Use WorkspaceAPI.media to access it
     * @param eventEmitter reference to WorkspaceApi object
     * @param workspaceClient reference to ApiClient with low level workspace API
     * @param debugEnabled set to true to enable extended debug output
     */
    constructor(eventEmitter, workspaceClient, debugEnabled) {
        this._eventEmitter = eventEmitter;
        this._api = new workspace.MediaApi(workspaceClient);
        this.channels = new Map();
        this._debugEnabled = debugEnabled;
    }

    _log(msg) {
        if (this._debugEnabled) {
            console.log(msg);
        }
    }

    _onCometdMessage(msg) {
        this._log('Cometd message received on /workspace/v3/media:\n' + JSON.stringify(msg, null, 2));
        switch (msg.data.messageType) {
            case 'ChannelStateChanged':
                this._onChannelStateChanged(msg);
                break;
            default:
                this._log('Unhandled message type:' + msg.messageType);
        }
    }

    /**
     * Example
     *
     * {
     *    "media":{
     *       "channels":[
     *          {
     *             "name":"chat",
     *             "state":"NotReady",
     *             "dnd":false
     *          }
     *       ]
     *    },
     *    "messageType":"ChannelStateChanged"
     * }
     *
     */
    _onChannelStateChanged(cometdMsg) {
        const mediaData = cometdMsg.data.media;
        const channels = mediaData.channels;
        let updatedChannels = [];

        if (channels) {
            channels.forEach((channel) => {
                const channelName = channel.name;
                updatedChannels.push(channelName);

                // Add or update channel info
                this.channels[channelName] = channel;
            });
        }

        let msg = {
            channels: this.channels,
            updated: updatedChannels};

        this._eventEmitter.emit('ChannelStateChanged', msg);
    }



    /**
     * Accept an interaction
     * Accept the specified interaction.
     * @param {String} mediatype The media channel.
     * @param {String} id The ID of the interaction to accept.
     * @param {Object} optional Optional parameters
     * @param {Array.<Object>} optional.extension A collection of key/value pairs.
     */
    async accept(mediatype, id, optional) {
        this._log(`Accepting interaction [${id}]...`);
        return await this._api.accept(mediatype, id, {acceptData: {data: optional}});
    }

    /**
     * Reject an interaction
     * Reject the specified interaction.
     * @param {String} mediatype The media channel.
     * @param {String} id The ID of the interaction to reject.
     * @param {Object} optional Optional parameters
     * @param {Array.<Object>} optional.extension A collection of key/type/value pairs.
     */
    async reject(mediatype, id, optional) {
        this._log(`Rejecting interaction [${id}]...`);
        return await this._api.reject(mediatype, id, {rejectData: {data: optional}});
    }

    /**
     * Complete an interaction
     * Marks the specified interaction as complete.
     * @param {String} mediatype The media channel.
     * @param {String} id The ID of the interaction to complete.
     */
    async complete(mediatype, id) {
        this._log(`Complete interaction [${id}]...`);
        return await this._api.complete(mediatype, id);
    }

    /**
     * Set the agent state to Not Ready
     * Set the current agent&#39;s state to Not Ready on the specified media channel.
     * @param {String} mediatype The media channel.
     * @param {Object} optional Optional parameters
     * @param {String} optional.reasonCode Reason message
     * @param {Object} optional.ixnReasonCode Reason code
     * @param {String} optional.ixnReasonCode.reasonSystemName System name
     * @param {String} optional.ixnReasonCode.reasonDescription Description
     * @param {Integer} optional.ixnReasonCode.reason Code
     * @param {Array.<Object>} optional.extension A collection of key/type/value pairs.
     */
    async notReadyForMedia(mediatype, optional) {
        this._log(`Set agent state to Not Ready for media [${mediatype}]...`);
        return await this._api.notReadyForMedia(mediatype, {NotReadyForMediaData: {data: optional}});
    }

    /**
     * Set the agent state to Ready
     * Set the current agent&#39;s state to Ready on the specified media channel.
     * @param {String} mediatype The media channel.
     * @param {Object} optional Optional parameters
     * @param {Object} optional.ixnReasonCode Reason code
     * @param {String} optional.ixnReasonCode.reasonSystemName System name
     * @param {String} optional.ixnReasonCode.reasonDescription Description
     * @param {Integer} optional.ixnReasonCode.reason Code
     * @param {Array.<Object>} optional.extension A collection of key/type/value pairs.
     */
    async readyForMedia(mediatype, optional) {
        this._log(`Set agent state to Ready for media [${mediatype}]...`);
        return await this._api.readyForMedia(mediatype, {ReadyForMediaData: {data: optional}});
    }
    /*
    	To Be Implemented:
    	addAttachment
    	addContent
    	addDocument
    	assignContact
    	asyncPutOnHold
    	attachMediaUserData
    	attachments
    	deleteMediaUserData
    	mediaStartMonitoring
    	mediaStopMonitoring
    	mediaSwicthToBargeIn
    	mediaSwicthToCoachCall
    	mediaSwicthToMonitor
    	placeInQueue
    	removeAttachment
    	removeMedia
    	setComment
    	transferAgent
    	updateMediaUserData
    */

}

module.exports = MediaApi;
