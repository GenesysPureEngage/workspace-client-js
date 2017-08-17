/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActivatechannelsData', 'model/AgentHistoryData', 'model/AlternateData', 'model/AnswerData', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/AssignInteractionToContactData', 'model/Call', 'model/CallCompletedData', 'model/CallNoteData', 'model/CallParticipants', 'model/ChannelsData', 'model/ClearData', 'model/CompleteConferenceData', 'model/CompleteTransferData', 'model/ConfigResponse', 'model/ConfigResponseData', 'model/ConfigResponseDataActionCodes', 'model/ConfigResponseDataBusinessAttributes', 'model/ConfigResponseDataTransactions', 'model/ConfigResponseDataValues', 'model/ContactDetailsData', 'model/ContactHistoryData', 'model/CurrentSession', 'model/CurrentSessionData', 'model/CurrentSessionDataPendingloginasync', 'model/CurrentSessionDataUser', 'model/CurrentSessionDataUserActiveSession', 'model/CurrentSessionDataUserActiveSessionDn', 'model/CurrentSessionStatus', 'model/DeleteContactData', 'model/DeleteFromConferenceData', 'model/ForwardData', 'model/GetContactsData', 'model/HoldData', 'model/IdentifyContactData', 'model/InitiateConferenceData', 'model/InitiateTransferData', 'model/InlineResponse200', 'model/InlineResponse200Data', 'model/InlineResponse200Status', 'model/InteractionContentData', 'model/KeyData', 'model/Kvpair', 'model/LuceneSearchData', 'model/LuceneSearchInteractionData', 'model/MakeCallData', 'model/MergeData', 'model/MonitoringScopeData', 'model/MonitoringScopeDataData', 'model/NotReadyData', 'model/PersonalFavoriteData', 'model/PhoneCallData', 'model/ReadyData', 'model/RecentData', 'model/RecentTargetData', 'model/ReconnectData', 'model/RedirectData', 'model/ReleaseData', 'model/ReportingunsubscribeData', 'model/RetrieveData', 'model/SendDTMFData', 'model/SendUserEventData', 'model/SendUserEventDataData', 'model/SingleStepConferenceData', 'model/SingleStepTransferData', 'model/StartMonitoringData', 'model/StatisticsRegisterData', 'model/StatisticsRegisterDataData', 'model/StatisticsSubscribeData', 'model/StatisticsSubscribeDataData', 'model/StopMonitoringData', 'model/Target', 'model/TargetInformation', 'model/TargetsResponse', 'model/TargetsResponseData', 'model/TargetspersonalfavoritessaveData', 'model/TargetsrecentsaddData', 'model/UcsassigninteractiontocontactData', 'model/UcsdeletecontactData', 'model/UcsfindorcreatephonecallData', 'model/UcsgetagenthistoryData', 'model/UcsgetcontactdetailsData', 'model/UcsgetcontacthistoryData', 'model/UcsgetcontactsData', 'model/UcsgetinteractioncontentData', 'model/UcsidentifycontactData', 'model/UcslucenesearchData', 'model/UcslucenesearchinteractionData', 'model/UcssetcallcompletedData', 'model/UcssetcallnoteData', 'model/UcsupdatecontactData', 'model/UnsubscribeData', 'model/UpdateContactData', 'model/UserData', 'model/UserData1', 'model/VoicecallsidalternateData', 'model/VoicecallsidcompleteData', 'model/VoicecallsidcompletetransferData', 'model/VoicecallsiddeletefromconferenceData', 'model/VoicecallsiddeleteuserdatapairData', 'model/VoicecallsidholdData', 'model/VoicecallsidinitiateconferenceData', 'model/VoicecallsidinitiatetransferData', 'model/VoicecallsidmergeData', 'model/VoicecallsidreconnectData', 'model/VoicecallsidredirectData', 'model/VoicecallsidsenddtmfData', 'model/VoicecallsidsinglestepconferenceData', 'model/VoicecallsidsinglesteptransferData', 'model/VoicemakecallData', 'model/VoicenotreadyData', 'model/VoicesetforwardData', 'model/VoicestartmonitoringData', 'model/VoicestopmonitoringData', 'api/DocumentationApi', 'api/NotificationsApi', 'api/ReportingApi', 'api/SessionApi', 'api/TargetsApi', 'api/UcsApi', 'api/VoiceApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ActivatechannelsData'), require('./model/AgentHistoryData'), require('./model/AlternateData'), require('./model/AnswerData'), require('./model/ApiErrorResponse'), require('./model/ApiSuccessResponse'), require('./model/AssignInteractionToContactData'), require('./model/Call'), require('./model/CallCompletedData'), require('./model/CallNoteData'), require('./model/CallParticipants'), require('./model/ChannelsData'), require('./model/ClearData'), require('./model/CompleteConferenceData'), require('./model/CompleteTransferData'), require('./model/ConfigResponse'), require('./model/ConfigResponseData'), require('./model/ConfigResponseDataActionCodes'), require('./model/ConfigResponseDataBusinessAttributes'), require('./model/ConfigResponseDataTransactions'), require('./model/ConfigResponseDataValues'), require('./model/ContactDetailsData'), require('./model/ContactHistoryData'), require('./model/CurrentSession'), require('./model/CurrentSessionData'), require('./model/CurrentSessionDataPendingloginasync'), require('./model/CurrentSessionDataUser'), require('./model/CurrentSessionDataUserActiveSession'), require('./model/CurrentSessionDataUserActiveSessionDn'), require('./model/CurrentSessionStatus'), require('./model/DeleteContactData'), require('./model/DeleteFromConferenceData'), require('./model/ForwardData'), require('./model/GetContactsData'), require('./model/HoldData'), require('./model/IdentifyContactData'), require('./model/InitiateConferenceData'), require('./model/InitiateTransferData'), require('./model/InlineResponse200'), require('./model/InlineResponse200Data'), require('./model/InlineResponse200Status'), require('./model/InteractionContentData'), require('./model/KeyData'), require('./model/Kvpair'), require('./model/LuceneSearchData'), require('./model/LuceneSearchInteractionData'), require('./model/MakeCallData'), require('./model/MergeData'), require('./model/MonitoringScopeData'), require('./model/MonitoringScopeDataData'), require('./model/NotReadyData'), require('./model/PersonalFavoriteData'), require('./model/PhoneCallData'), require('./model/ReadyData'), require('./model/RecentData'), require('./model/RecentTargetData'), require('./model/ReconnectData'), require('./model/RedirectData'), require('./model/ReleaseData'), require('./model/ReportingunsubscribeData'), require('./model/RetrieveData'), require('./model/SendDTMFData'), require('./model/SendUserEventData'), require('./model/SendUserEventDataData'), require('./model/SingleStepConferenceData'), require('./model/SingleStepTransferData'), require('./model/StartMonitoringData'), require('./model/StatisticsRegisterData'), require('./model/StatisticsRegisterDataData'), require('./model/StatisticsSubscribeData'), require('./model/StatisticsSubscribeDataData'), require('./model/StopMonitoringData'), require('./model/Target'), require('./model/TargetInformation'), require('./model/TargetsResponse'), require('./model/TargetsResponseData'), require('./model/TargetspersonalfavoritessaveData'), require('./model/TargetsrecentsaddData'), require('./model/UcsassigninteractiontocontactData'), require('./model/UcsdeletecontactData'), require('./model/UcsfindorcreatephonecallData'), require('./model/UcsgetagenthistoryData'), require('./model/UcsgetcontactdetailsData'), require('./model/UcsgetcontacthistoryData'), require('./model/UcsgetcontactsData'), require('./model/UcsgetinteractioncontentData'), require('./model/UcsidentifycontactData'), require('./model/UcslucenesearchData'), require('./model/UcslucenesearchinteractionData'), require('./model/UcssetcallcompletedData'), require('./model/UcssetcallnoteData'), require('./model/UcsupdatecontactData'), require('./model/UnsubscribeData'), require('./model/UpdateContactData'), require('./model/UserData'), require('./model/UserData1'), require('./model/VoicecallsidalternateData'), require('./model/VoicecallsidcompleteData'), require('./model/VoicecallsidcompletetransferData'), require('./model/VoicecallsiddeletefromconferenceData'), require('./model/VoicecallsiddeleteuserdatapairData'), require('./model/VoicecallsidholdData'), require('./model/VoicecallsidinitiateconferenceData'), require('./model/VoicecallsidinitiatetransferData'), require('./model/VoicecallsidmergeData'), require('./model/VoicecallsidreconnectData'), require('./model/VoicecallsidredirectData'), require('./model/VoicecallsidsenddtmfData'), require('./model/VoicecallsidsinglestepconferenceData'), require('./model/VoicecallsidsinglesteptransferData'), require('./model/VoicemakecallData'), require('./model/VoicenotreadyData'), require('./model/VoicesetforwardData'), require('./model/VoicestartmonitoringData'), require('./model/VoicestopmonitoringData'), require('./api/DocumentationApi'), require('./api/NotificationsApi'), require('./api/ReportingApi'), require('./api/SessionApi'), require('./api/TargetsApi'), require('./api/UcsApi'), require('./api/VoiceApi'));
  }
}(function(ApiClient, ActivatechannelsData, AgentHistoryData, AlternateData, AnswerData, ApiErrorResponse, ApiSuccessResponse, AssignInteractionToContactData, Call, CallCompletedData, CallNoteData, CallParticipants, ChannelsData, ClearData, CompleteConferenceData, CompleteTransferData, ConfigResponse, ConfigResponseData, ConfigResponseDataActionCodes, ConfigResponseDataBusinessAttributes, ConfigResponseDataTransactions, ConfigResponseDataValues, ContactDetailsData, ContactHistoryData, CurrentSession, CurrentSessionData, CurrentSessionDataPendingloginasync, CurrentSessionDataUser, CurrentSessionDataUserActiveSession, CurrentSessionDataUserActiveSessionDn, CurrentSessionStatus, DeleteContactData, DeleteFromConferenceData, ForwardData, GetContactsData, HoldData, IdentifyContactData, InitiateConferenceData, InitiateTransferData, InlineResponse200, InlineResponse200Data, InlineResponse200Status, InteractionContentData, KeyData, Kvpair, LuceneSearchData, LuceneSearchInteractionData, MakeCallData, MergeData, MonitoringScopeData, MonitoringScopeDataData, NotReadyData, PersonalFavoriteData, PhoneCallData, ReadyData, RecentData, RecentTargetData, ReconnectData, RedirectData, ReleaseData, ReportingunsubscribeData, RetrieveData, SendDTMFData, SendUserEventData, SendUserEventDataData, SingleStepConferenceData, SingleStepTransferData, StartMonitoringData, StatisticsRegisterData, StatisticsRegisterDataData, StatisticsSubscribeData, StatisticsSubscribeDataData, StopMonitoringData, Target, TargetInformation, TargetsResponse, TargetsResponseData, TargetspersonalfavoritessaveData, TargetsrecentsaddData, UcsassigninteractiontocontactData, UcsdeletecontactData, UcsfindorcreatephonecallData, UcsgetagenthistoryData, UcsgetcontactdetailsData, UcsgetcontacthistoryData, UcsgetcontactsData, UcsgetinteractioncontentData, UcsidentifycontactData, UcslucenesearchData, UcslucenesearchinteractionData, UcssetcallcompletedData, UcssetcallnoteData, UcsupdatecontactData, UnsubscribeData, UpdateContactData, UserData, UserData1, VoicecallsidalternateData, VoicecallsidcompleteData, VoicecallsidcompletetransferData, VoicecallsiddeletefromconferenceData, VoicecallsiddeleteuserdatapairData, VoicecallsidholdData, VoicecallsidinitiateconferenceData, VoicecallsidinitiatetransferData, VoicecallsidmergeData, VoicecallsidreconnectData, VoicecallsidredirectData, VoicecallsidsenddtmfData, VoicecallsidsinglestepconferenceData, VoicecallsidsinglesteptransferData, VoicemakecallData, VoicenotreadyData, VoicesetforwardData, VoicestartmonitoringData, VoicestopmonitoringData, DocumentationApi, NotificationsApi, ReportingApi, SessionApi, TargetsApi, UcsApi, VoiceApi) {
  'use strict';

  /**
   * Application_API_used_by_Workspace_Web_Edition.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var WorkspaceApi = require('index'); // See note below*.
   * var xxxSvc = new WorkspaceApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new WorkspaceApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new WorkspaceApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new WorkspaceApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ActivatechannelsData model constructor.
     * @property {module:model/ActivatechannelsData}
     */
    ActivatechannelsData: ActivatechannelsData,
    /**
     * The AgentHistoryData model constructor.
     * @property {module:model/AgentHistoryData}
     */
    AgentHistoryData: AgentHistoryData,
    /**
     * The AlternateData model constructor.
     * @property {module:model/AlternateData}
     */
    AlternateData: AlternateData,
    /**
     * The AnswerData model constructor.
     * @property {module:model/AnswerData}
     */
    AnswerData: AnswerData,
    /**
     * The ApiErrorResponse model constructor.
     * @property {module:model/ApiErrorResponse}
     */
    ApiErrorResponse: ApiErrorResponse,
    /**
     * The ApiSuccessResponse model constructor.
     * @property {module:model/ApiSuccessResponse}
     */
    ApiSuccessResponse: ApiSuccessResponse,
    /**
     * The AssignInteractionToContactData model constructor.
     * @property {module:model/AssignInteractionToContactData}
     */
    AssignInteractionToContactData: AssignInteractionToContactData,
    /**
     * The Call model constructor.
     * @property {module:model/Call}
     */
    Call: Call,
    /**
     * The CallCompletedData model constructor.
     * @property {module:model/CallCompletedData}
     */
    CallCompletedData: CallCompletedData,
    /**
     * The CallNoteData model constructor.
     * @property {module:model/CallNoteData}
     */
    CallNoteData: CallNoteData,
    /**
     * The CallParticipants model constructor.
     * @property {module:model/CallParticipants}
     */
    CallParticipants: CallParticipants,
    /**
     * The ChannelsData model constructor.
     * @property {module:model/ChannelsData}
     */
    ChannelsData: ChannelsData,
    /**
     * The ClearData model constructor.
     * @property {module:model/ClearData}
     */
    ClearData: ClearData,
    /**
     * The CompleteConferenceData model constructor.
     * @property {module:model/CompleteConferenceData}
     */
    CompleteConferenceData: CompleteConferenceData,
    /**
     * The CompleteTransferData model constructor.
     * @property {module:model/CompleteTransferData}
     */
    CompleteTransferData: CompleteTransferData,
    /**
     * The ConfigResponse model constructor.
     * @property {module:model/ConfigResponse}
     */
    ConfigResponse: ConfigResponse,
    /**
     * The ConfigResponseData model constructor.
     * @property {module:model/ConfigResponseData}
     */
    ConfigResponseData: ConfigResponseData,
    /**
     * The ConfigResponseDataActionCodes model constructor.
     * @property {module:model/ConfigResponseDataActionCodes}
     */
    ConfigResponseDataActionCodes: ConfigResponseDataActionCodes,
    /**
     * The ConfigResponseDataBusinessAttributes model constructor.
     * @property {module:model/ConfigResponseDataBusinessAttributes}
     */
    ConfigResponseDataBusinessAttributes: ConfigResponseDataBusinessAttributes,
    /**
     * The ConfigResponseDataTransactions model constructor.
     * @property {module:model/ConfigResponseDataTransactions}
     */
    ConfigResponseDataTransactions: ConfigResponseDataTransactions,
    /**
     * The ConfigResponseDataValues model constructor.
     * @property {module:model/ConfigResponseDataValues}
     */
    ConfigResponseDataValues: ConfigResponseDataValues,
    /**
     * The ContactDetailsData model constructor.
     * @property {module:model/ContactDetailsData}
     */
    ContactDetailsData: ContactDetailsData,
    /**
     * The ContactHistoryData model constructor.
     * @property {module:model/ContactHistoryData}
     */
    ContactHistoryData: ContactHistoryData,
    /**
     * The CurrentSession model constructor.
     * @property {module:model/CurrentSession}
     */
    CurrentSession: CurrentSession,
    /**
     * The CurrentSessionData model constructor.
     * @property {module:model/CurrentSessionData}
     */
    CurrentSessionData: CurrentSessionData,
    /**
     * The CurrentSessionDataPendingloginasync model constructor.
     * @property {module:model/CurrentSessionDataPendingloginasync}
     */
    CurrentSessionDataPendingloginasync: CurrentSessionDataPendingloginasync,
    /**
     * The CurrentSessionDataUser model constructor.
     * @property {module:model/CurrentSessionDataUser}
     */
    CurrentSessionDataUser: CurrentSessionDataUser,
    /**
     * The CurrentSessionDataUserActiveSession model constructor.
     * @property {module:model/CurrentSessionDataUserActiveSession}
     */
    CurrentSessionDataUserActiveSession: CurrentSessionDataUserActiveSession,
    /**
     * The CurrentSessionDataUserActiveSessionDn model constructor.
     * @property {module:model/CurrentSessionDataUserActiveSessionDn}
     */
    CurrentSessionDataUserActiveSessionDn: CurrentSessionDataUserActiveSessionDn,
    /**
     * The CurrentSessionStatus model constructor.
     * @property {module:model/CurrentSessionStatus}
     */
    CurrentSessionStatus: CurrentSessionStatus,
    /**
     * The DeleteContactData model constructor.
     * @property {module:model/DeleteContactData}
     */
    DeleteContactData: DeleteContactData,
    /**
     * The DeleteFromConferenceData model constructor.
     * @property {module:model/DeleteFromConferenceData}
     */
    DeleteFromConferenceData: DeleteFromConferenceData,
    /**
     * The ForwardData model constructor.
     * @property {module:model/ForwardData}
     */
    ForwardData: ForwardData,
    /**
     * The GetContactsData model constructor.
     * @property {module:model/GetContactsData}
     */
    GetContactsData: GetContactsData,
    /**
     * The HoldData model constructor.
     * @property {module:model/HoldData}
     */
    HoldData: HoldData,
    /**
     * The IdentifyContactData model constructor.
     * @property {module:model/IdentifyContactData}
     */
    IdentifyContactData: IdentifyContactData,
    /**
     * The InitiateConferenceData model constructor.
     * @property {module:model/InitiateConferenceData}
     */
    InitiateConferenceData: InitiateConferenceData,
    /**
     * The InitiateTransferData model constructor.
     * @property {module:model/InitiateTransferData}
     */
    InitiateTransferData: InitiateTransferData,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse200Data model constructor.
     * @property {module:model/InlineResponse200Data}
     */
    InlineResponse200Data: InlineResponse200Data,
    /**
     * The InlineResponse200Status model constructor.
     * @property {module:model/InlineResponse200Status}
     */
    InlineResponse200Status: InlineResponse200Status,
    /**
     * The InteractionContentData model constructor.
     * @property {module:model/InteractionContentData}
     */
    InteractionContentData: InteractionContentData,
    /**
     * The KeyData model constructor.
     * @property {module:model/KeyData}
     */
    KeyData: KeyData,
    /**
     * The Kvpair model constructor.
     * @property {module:model/Kvpair}
     */
    Kvpair: Kvpair,
    /**
     * The LuceneSearchData model constructor.
     * @property {module:model/LuceneSearchData}
     */
    LuceneSearchData: LuceneSearchData,
    /**
     * The LuceneSearchInteractionData model constructor.
     * @property {module:model/LuceneSearchInteractionData}
     */
    LuceneSearchInteractionData: LuceneSearchInteractionData,
    /**
     * The MakeCallData model constructor.
     * @property {module:model/MakeCallData}
     */
    MakeCallData: MakeCallData,
    /**
     * The MergeData model constructor.
     * @property {module:model/MergeData}
     */
    MergeData: MergeData,
    /**
     * The MonitoringScopeData model constructor.
     * @property {module:model/MonitoringScopeData}
     */
    MonitoringScopeData: MonitoringScopeData,
    /**
     * The MonitoringScopeDataData model constructor.
     * @property {module:model/MonitoringScopeDataData}
     */
    MonitoringScopeDataData: MonitoringScopeDataData,
    /**
     * The NotReadyData model constructor.
     * @property {module:model/NotReadyData}
     */
    NotReadyData: NotReadyData,
    /**
     * The PersonalFavoriteData model constructor.
     * @property {module:model/PersonalFavoriteData}
     */
    PersonalFavoriteData: PersonalFavoriteData,
    /**
     * The PhoneCallData model constructor.
     * @property {module:model/PhoneCallData}
     */
    PhoneCallData: PhoneCallData,
    /**
     * The ReadyData model constructor.
     * @property {module:model/ReadyData}
     */
    ReadyData: ReadyData,
    /**
     * The RecentData model constructor.
     * @property {module:model/RecentData}
     */
    RecentData: RecentData,
    /**
     * The RecentTargetData model constructor.
     * @property {module:model/RecentTargetData}
     */
    RecentTargetData: RecentTargetData,
    /**
     * The ReconnectData model constructor.
     * @property {module:model/ReconnectData}
     */
    ReconnectData: ReconnectData,
    /**
     * The RedirectData model constructor.
     * @property {module:model/RedirectData}
     */
    RedirectData: RedirectData,
    /**
     * The ReleaseData model constructor.
     * @property {module:model/ReleaseData}
     */
    ReleaseData: ReleaseData,
    /**
     * The ReportingunsubscribeData model constructor.
     * @property {module:model/ReportingunsubscribeData}
     */
    ReportingunsubscribeData: ReportingunsubscribeData,
    /**
     * The RetrieveData model constructor.
     * @property {module:model/RetrieveData}
     */
    RetrieveData: RetrieveData,
    /**
     * The SendDTMFData model constructor.
     * @property {module:model/SendDTMFData}
     */
    SendDTMFData: SendDTMFData,
    /**
     * The SendUserEventData model constructor.
     * @property {module:model/SendUserEventData}
     */
    SendUserEventData: SendUserEventData,
    /**
     * The SendUserEventDataData model constructor.
     * @property {module:model/SendUserEventDataData}
     */
    SendUserEventDataData: SendUserEventDataData,
    /**
     * The SingleStepConferenceData model constructor.
     * @property {module:model/SingleStepConferenceData}
     */
    SingleStepConferenceData: SingleStepConferenceData,
    /**
     * The SingleStepTransferData model constructor.
     * @property {module:model/SingleStepTransferData}
     */
    SingleStepTransferData: SingleStepTransferData,
    /**
     * The StartMonitoringData model constructor.
     * @property {module:model/StartMonitoringData}
     */
    StartMonitoringData: StartMonitoringData,
    /**
     * The StatisticsRegisterData model constructor.
     * @property {module:model/StatisticsRegisterData}
     */
    StatisticsRegisterData: StatisticsRegisterData,
    /**
     * The StatisticsRegisterDataData model constructor.
     * @property {module:model/StatisticsRegisterDataData}
     */
    StatisticsRegisterDataData: StatisticsRegisterDataData,
    /**
     * The StatisticsSubscribeData model constructor.
     * @property {module:model/StatisticsSubscribeData}
     */
    StatisticsSubscribeData: StatisticsSubscribeData,
    /**
     * The StatisticsSubscribeDataData model constructor.
     * @property {module:model/StatisticsSubscribeDataData}
     */
    StatisticsSubscribeDataData: StatisticsSubscribeDataData,
    /**
     * The StopMonitoringData model constructor.
     * @property {module:model/StopMonitoringData}
     */
    StopMonitoringData: StopMonitoringData,
    /**
     * The Target model constructor.
     * @property {module:model/Target}
     */
    Target: Target,
    /**
     * The TargetInformation model constructor.
     * @property {module:model/TargetInformation}
     */
    TargetInformation: TargetInformation,
    /**
     * The TargetsResponse model constructor.
     * @property {module:model/TargetsResponse}
     */
    TargetsResponse: TargetsResponse,
    /**
     * The TargetsResponseData model constructor.
     * @property {module:model/TargetsResponseData}
     */
    TargetsResponseData: TargetsResponseData,
    /**
     * The TargetspersonalfavoritessaveData model constructor.
     * @property {module:model/TargetspersonalfavoritessaveData}
     */
    TargetspersonalfavoritessaveData: TargetspersonalfavoritessaveData,
    /**
     * The TargetsrecentsaddData model constructor.
     * @property {module:model/TargetsrecentsaddData}
     */
    TargetsrecentsaddData: TargetsrecentsaddData,
    /**
     * The UcsassigninteractiontocontactData model constructor.
     * @property {module:model/UcsassigninteractiontocontactData}
     */
    UcsassigninteractiontocontactData: UcsassigninteractiontocontactData,
    /**
     * The UcsdeletecontactData model constructor.
     * @property {module:model/UcsdeletecontactData}
     */
    UcsdeletecontactData: UcsdeletecontactData,
    /**
     * The UcsfindorcreatephonecallData model constructor.
     * @property {module:model/UcsfindorcreatephonecallData}
     */
    UcsfindorcreatephonecallData: UcsfindorcreatephonecallData,
    /**
     * The UcsgetagenthistoryData model constructor.
     * @property {module:model/UcsgetagenthistoryData}
     */
    UcsgetagenthistoryData: UcsgetagenthistoryData,
    /**
     * The UcsgetcontactdetailsData model constructor.
     * @property {module:model/UcsgetcontactdetailsData}
     */
    UcsgetcontactdetailsData: UcsgetcontactdetailsData,
    /**
     * The UcsgetcontacthistoryData model constructor.
     * @property {module:model/UcsgetcontacthistoryData}
     */
    UcsgetcontacthistoryData: UcsgetcontacthistoryData,
    /**
     * The UcsgetcontactsData model constructor.
     * @property {module:model/UcsgetcontactsData}
     */
    UcsgetcontactsData: UcsgetcontactsData,
    /**
     * The UcsgetinteractioncontentData model constructor.
     * @property {module:model/UcsgetinteractioncontentData}
     */
    UcsgetinteractioncontentData: UcsgetinteractioncontentData,
    /**
     * The UcsidentifycontactData model constructor.
     * @property {module:model/UcsidentifycontactData}
     */
    UcsidentifycontactData: UcsidentifycontactData,
    /**
     * The UcslucenesearchData model constructor.
     * @property {module:model/UcslucenesearchData}
     */
    UcslucenesearchData: UcslucenesearchData,
    /**
     * The UcslucenesearchinteractionData model constructor.
     * @property {module:model/UcslucenesearchinteractionData}
     */
    UcslucenesearchinteractionData: UcslucenesearchinteractionData,
    /**
     * The UcssetcallcompletedData model constructor.
     * @property {module:model/UcssetcallcompletedData}
     */
    UcssetcallcompletedData: UcssetcallcompletedData,
    /**
     * The UcssetcallnoteData model constructor.
     * @property {module:model/UcssetcallnoteData}
     */
    UcssetcallnoteData: UcssetcallnoteData,
    /**
     * The UcsupdatecontactData model constructor.
     * @property {module:model/UcsupdatecontactData}
     */
    UcsupdatecontactData: UcsupdatecontactData,
    /**
     * The UnsubscribeData model constructor.
     * @property {module:model/UnsubscribeData}
     */
    UnsubscribeData: UnsubscribeData,
    /**
     * The UpdateContactData model constructor.
     * @property {module:model/UpdateContactData}
     */
    UpdateContactData: UpdateContactData,
    /**
     * The UserData model constructor.
     * @property {module:model/UserData}
     */
    UserData: UserData,
    /**
     * The UserData1 model constructor.
     * @property {module:model/UserData1}
     */
    UserData1: UserData1,
    /**
     * The VoicecallsidalternateData model constructor.
     * @property {module:model/VoicecallsidalternateData}
     */
    VoicecallsidalternateData: VoicecallsidalternateData,
    /**
     * The VoicecallsidcompleteData model constructor.
     * @property {module:model/VoicecallsidcompleteData}
     */
    VoicecallsidcompleteData: VoicecallsidcompleteData,
    /**
     * The VoicecallsidcompletetransferData model constructor.
     * @property {module:model/VoicecallsidcompletetransferData}
     */
    VoicecallsidcompletetransferData: VoicecallsidcompletetransferData,
    /**
     * The VoicecallsiddeletefromconferenceData model constructor.
     * @property {module:model/VoicecallsiddeletefromconferenceData}
     */
    VoicecallsiddeletefromconferenceData: VoicecallsiddeletefromconferenceData,
    /**
     * The VoicecallsiddeleteuserdatapairData model constructor.
     * @property {module:model/VoicecallsiddeleteuserdatapairData}
     */
    VoicecallsiddeleteuserdatapairData: VoicecallsiddeleteuserdatapairData,
    /**
     * The VoicecallsidholdData model constructor.
     * @property {module:model/VoicecallsidholdData}
     */
    VoicecallsidholdData: VoicecallsidholdData,
    /**
     * The VoicecallsidinitiateconferenceData model constructor.
     * @property {module:model/VoicecallsidinitiateconferenceData}
     */
    VoicecallsidinitiateconferenceData: VoicecallsidinitiateconferenceData,
    /**
     * The VoicecallsidinitiatetransferData model constructor.
     * @property {module:model/VoicecallsidinitiatetransferData}
     */
    VoicecallsidinitiatetransferData: VoicecallsidinitiatetransferData,
    /**
     * The VoicecallsidmergeData model constructor.
     * @property {module:model/VoicecallsidmergeData}
     */
    VoicecallsidmergeData: VoicecallsidmergeData,
    /**
     * The VoicecallsidreconnectData model constructor.
     * @property {module:model/VoicecallsidreconnectData}
     */
    VoicecallsidreconnectData: VoicecallsidreconnectData,
    /**
     * The VoicecallsidredirectData model constructor.
     * @property {module:model/VoicecallsidredirectData}
     */
    VoicecallsidredirectData: VoicecallsidredirectData,
    /**
     * The VoicecallsidsenddtmfData model constructor.
     * @property {module:model/VoicecallsidsenddtmfData}
     */
    VoicecallsidsenddtmfData: VoicecallsidsenddtmfData,
    /**
     * The VoicecallsidsinglestepconferenceData model constructor.
     * @property {module:model/VoicecallsidsinglestepconferenceData}
     */
    VoicecallsidsinglestepconferenceData: VoicecallsidsinglestepconferenceData,
    /**
     * The VoicecallsidsinglesteptransferData model constructor.
     * @property {module:model/VoicecallsidsinglesteptransferData}
     */
    VoicecallsidsinglesteptransferData: VoicecallsidsinglesteptransferData,
    /**
     * The VoicemakecallData model constructor.
     * @property {module:model/VoicemakecallData}
     */
    VoicemakecallData: VoicemakecallData,
    /**
     * The VoicenotreadyData model constructor.
     * @property {module:model/VoicenotreadyData}
     */
    VoicenotreadyData: VoicenotreadyData,
    /**
     * The VoicesetforwardData model constructor.
     * @property {module:model/VoicesetforwardData}
     */
    VoicesetforwardData: VoicesetforwardData,
    /**
     * The VoicestartmonitoringData model constructor.
     * @property {module:model/VoicestartmonitoringData}
     */
    VoicestartmonitoringData: VoicestartmonitoringData,
    /**
     * The VoicestopmonitoringData model constructor.
     * @property {module:model/VoicestopmonitoringData}
     */
    VoicestopmonitoringData: VoicestopmonitoringData,
    /**
     * The DocumentationApi service constructor.
     * @property {module:api/DocumentationApi}
     */
    DocumentationApi: DocumentationApi,
    /**
     * The NotificationsApi service constructor.
     * @property {module:api/NotificationsApi}
     */
    NotificationsApi: NotificationsApi,
    /**
     * The ReportingApi service constructor.
     * @property {module:api/ReportingApi}
     */
    ReportingApi: ReportingApi,
    /**
     * The SessionApi service constructor.
     * @property {module:api/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The TargetsApi service constructor.
     * @property {module:api/TargetsApi}
     */
    TargetsApi: TargetsApi,
    /**
     * The UcsApi service constructor.
     * @property {module:api/UcsApi}
     */
    UcsApi: UcsApi,
    /**
     * The VoiceApi service constructor.
     * @property {module:api/VoiceApi}
     */
    VoiceApi: VoiceApi
  };

  return exports;
}));