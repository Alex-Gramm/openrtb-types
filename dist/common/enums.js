"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Currency;
(function (Currency) {
})(Currency = exports.Currency || (exports.Currency = {}));
var MimeType;
(function (MimeType) {
    MimeType["GIF"] = "image/gif";
    MimeType["JPG"] = "image/jpg";
    MimeType["JPEG"] = "image/jpeg";
    MimeType["PNG"] = "image/png";
    MimeType["SVG"] = "image/svg+xml";
    MimeType["WAVE"] = "audio/wave";
    MimeType["WAV"] = "audio/wav";
    MimeType["X_WAV"] = "audio/x-wav";
    MimeType["X_PN_WAV"] = "audio/x-pn-wav";
    MimeType["WEBM_AUDIO"] = "audio/webm";
    MimeType["WEBM_VIDEO"] = "video/webm";
    MimeType["OGG_AUDIO"] = "audio/ogg";
    MimeType["OGG_VIDEO"] = "video/ogg";
    MimeType["OGG_APPLICATION"] = "application/ogg";
    MimeType["X_SHOCKWAVE_FLASH"] = "application/x-shockwave-flash";
    MimeType["X_MS_WMV"] = "video/x-ms-wmv";
    MimeType["MP4"] = "video/mp4";
})(MimeType = exports.MimeType || (exports.MimeType = {}));
// 5.2
var BannerAdType;
(function (BannerAdType) {
    BannerAdType[BannerAdType["XHTML_TEXT"] = 1] = "XHTML_TEXT";
    BannerAdType[BannerAdType["XHTML_BANNER"] = 2] = "XHTML_BANNER";
    BannerAdType[BannerAdType["JAVASCRIPT"] = 3] = "JAVASCRIPT";
    BannerAdType[BannerAdType["IFRAME"] = 4] = "IFRAME";
})(BannerAdType = exports.BannerAdType || (exports.BannerAdType = {}));
// 5.3
var CreativeAttribute;
(function (CreativeAttribute) {
    CreativeAttribute[CreativeAttribute["AUDIO_AD_AUTOPLAY"] = 1] = "AUDIO_AD_AUTOPLAY";
    CreativeAttribute[CreativeAttribute["AUDIO_AD_USER_INITIATED"] = 2] = "AUDIO_AD_USER_INITIATED";
    CreativeAttribute[CreativeAttribute["EXPANDABLE_AUTOMATIC"] = 3] = "EXPANDABLE_AUTOMATIC";
    CreativeAttribute[CreativeAttribute["EXPANDABLE_USER_INITIATED_CLICK"] = 4] = "EXPANDABLE_USER_INITIATED_CLICK";
    CreativeAttribute[CreativeAttribute["EXPANDABLE_USER_INITIATED_ROLLOVER"] = 5] = "EXPANDABLE_USER_INITIATED_ROLLOVER";
    CreativeAttribute[CreativeAttribute["INBANNER_VIDEO_AD_AUTOPLAY"] = 6] = "INBANNER_VIDEO_AD_AUTOPLAY";
    CreativeAttribute[CreativeAttribute["INBANNER_VIDEO_AD_USER_INITIATED"] = 7] = "INBANNER_VIDEO_AD_USER_INITIATED";
    CreativeAttribute[CreativeAttribute["POP"] = 8] = "POP";
    CreativeAttribute[CreativeAttribute["PROVOCATIVE_OR_SUGGESTIVE_IMAGERY"] = 9] = "PROVOCATIVE_OR_SUGGESTIVE_IMAGERY";
    CreativeAttribute[CreativeAttribute["SHAKY_FLASHING_FLICKERING_EXTREME_ANIMATION_SMILEYS"] = 10] = "SHAKY_FLASHING_FLICKERING_EXTREME_ANIMATION_SMILEYS";
    CreativeAttribute[CreativeAttribute["SURVEYS"] = 11] = "SURVEYS";
    CreativeAttribute[CreativeAttribute["TEXT_ONLY"] = 12] = "TEXT_ONLY";
    CreativeAttribute[CreativeAttribute["USER_INTERACTIVE"] = 13] = "USER_INTERACTIVE";
    CreativeAttribute[CreativeAttribute["WINDOWS_DIALOG_OR_ALERT_STYLE"] = 14] = "WINDOWS_DIALOG_OR_ALERT_STYLE";
    CreativeAttribute[CreativeAttribute["HAS_AUDIO_ON_OFF_BUTTON"] = 15] = "HAS_AUDIO_ON_OFF_BUTTON";
    CreativeAttribute[CreativeAttribute["AD_PROVIDES_SKIP_BUTTON"] = 16] = "AD_PROVIDES_SKIP_BUTTON";
    CreativeAttribute[CreativeAttribute["ADOBE_FLASH"] = 17] = "ADOBE_FLASH";
})(CreativeAttribute = exports.CreativeAttribute || (exports.CreativeAttribute = {}));
// 5.4
var AdPosition;
(function (AdPosition) {
    AdPosition[AdPosition["UNKNOWN"] = 0] = "UNKNOWN";
    AdPosition[AdPosition["ABOVE_THE_FOLD"] = 1] = "ABOVE_THE_FOLD";
    AdPosition[AdPosition["BELOW_THE_FOLD"] = 3] = "BELOW_THE_FOLD";
    AdPosition[AdPosition["HEADER"] = 4] = "HEADER";
    AdPosition[AdPosition["FOOTER"] = 5] = "FOOTER";
    AdPosition[AdPosition["SIDEBAR"] = 6] = "SIDEBAR";
    AdPosition[AdPosition["FULL_SCREEN"] = 7] = "FULL_SCREEN";
})(AdPosition = exports.AdPosition || (exports.AdPosition = {}));
// 5.5
var ExpandableDirection;
(function (ExpandableDirection) {
    ExpandableDirection[ExpandableDirection["LEFT"] = 1] = "LEFT";
    ExpandableDirection[ExpandableDirection["RIGHT"] = 2] = "RIGHT";
    ExpandableDirection[ExpandableDirection["UP"] = 3] = "UP";
    ExpandableDirection[ExpandableDirection["DOWN"] = 4] = "DOWN";
    ExpandableDirection[ExpandableDirection["FULL_SCREEN"] = 5] = "FULL_SCREEN";
})(ExpandableDirection = exports.ExpandableDirection || (exports.ExpandableDirection = {}));
// 5.6
var APIFramework;
(function (APIFramework) {
    APIFramework[APIFramework["VPAID_1"] = 0] = "VPAID_1";
    APIFramework[APIFramework["VPAID_2"] = 1] = "VPAID_2";
    APIFramework[APIFramework["MRAID_1"] = 2] = "MRAID_1";
    APIFramework[APIFramework["ORMMA"] = 3] = "ORMMA";
    APIFramework[APIFramework["MRAID_2"] = 4] = "MRAID_2";
    APIFramework[APIFramework["MRAID_3"] = 5] = "MRAID_3";
})(APIFramework = exports.APIFramework || (exports.APIFramework = {}));
// 5.7
var VideoLinearity;
(function (VideoLinearity) {
    VideoLinearity[VideoLinearity["LINEAR_OR_IN_STREAM"] = 0] = "LINEAR_OR_IN_STREAM";
    VideoLinearity[VideoLinearity["NON_LINEAR_OR_OVERLAY"] = 1] = "NON_LINEAR_OR_OVERLAY";
})(VideoLinearity = exports.VideoLinearity || (exports.VideoLinearity = {}));
// 5.8
var Protocol;
(function (Protocol) {
    Protocol[Protocol["VAST_1"] = 1] = "VAST_1";
    Protocol[Protocol["VAST_2"] = 2] = "VAST_2";
    Protocol[Protocol["VAST_3"] = 3] = "VAST_3";
    Protocol[Protocol["VAST_1_WRAPPER"] = 4] = "VAST_1_WRAPPER";
    Protocol[Protocol["VAST_2_WRAPPER"] = 5] = "VAST_2_WRAPPER";
    Protocol[Protocol["VAST_3_WRAPPER"] = 6] = "VAST_3_WRAPPER";
    Protocol[Protocol["VAST_4"] = 7] = "VAST_4";
    Protocol[Protocol["VAST_4_WRAPPER"] = 8] = "VAST_4_WRAPPER";
    Protocol[Protocol["DAAST_1"] = 9] = "DAAST_1";
    Protocol[Protocol["DAAST_1_WRAPPER"] = 10] = "DAAST_1_WRAPPER";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
// 5.9
var VideoPlacementType;
(function (VideoPlacementType) {
    VideoPlacementType[VideoPlacementType["IN_STREAM"] = 1] = "IN_STREAM";
    VideoPlacementType[VideoPlacementType["IN_BANNER"] = 2] = "IN_BANNER";
    VideoPlacementType[VideoPlacementType["IN_ARTICLE"] = 3] = "IN_ARTICLE";
    VideoPlacementType[VideoPlacementType["IN_FEED"] = 4] = "IN_FEED";
    VideoPlacementType[VideoPlacementType["INTERSTITIAL_SLIDER_FLOATING"] = 5] = "INTERSTITIAL_SLIDER_FLOATING";
})(VideoPlacementType = exports.VideoPlacementType || (exports.VideoPlacementType = {}));
// 5.10
var PlaybackMethod;
(function (PlaybackMethod) {
    PlaybackMethod[PlaybackMethod["PAGE_LOAD_WITH_SOUND_ON"] = 0] = "PAGE_LOAD_WITH_SOUND_ON";
    PlaybackMethod[PlaybackMethod["PAGE_LOAD_WITH_SOUND_OFF_BY_DEFAULT"] = 1] = "PAGE_LOAD_WITH_SOUND_OFF_BY_DEFAULT";
    PlaybackMethod[PlaybackMethod["CLICK_WITH_SOUND_ON"] = 2] = "CLICK_WITH_SOUND_ON";
    PlaybackMethod[PlaybackMethod["MOUSEOVER_WITH_SOUND_ON"] = 3] = "MOUSEOVER_WITH_SOUND_ON";
    PlaybackMethod[PlaybackMethod["ENTERING_VIEWPORT_WITH_SOUND_ON"] = 4] = "ENTERING_VIEWPORT_WITH_SOUND_ON";
    PlaybackMethod[PlaybackMethod["ENTERING_VIEWPORT_WITH_SOUND_OFF_BY_DEFAULT"] = 5] = "ENTERING_VIEWPORT_WITH_SOUND_OFF_BY_DEFAULT";
})(PlaybackMethod = exports.PlaybackMethod || (exports.PlaybackMethod = {}));
// 5.11
var PlaybackCessationMode;
(function (PlaybackCessationMode) {
    PlaybackCessationMode[PlaybackCessationMode["VIDEO_COMPLETION"] = 0] = "VIDEO_COMPLETION";
    PlaybackCessationMode[PlaybackCessationMode["LEAVING_VIEWPORT"] = 1] = "LEAVING_VIEWPORT";
    PlaybackCessationMode[PlaybackCessationMode["LEAVING_VIEWPORT_CONTINUES_AS_A_FLOATING_SLIDER_UNIT"] = 2] = "LEAVING_VIEWPORT_CONTINUES_AS_A_FLOATING_SLIDER_UNIT";
})(PlaybackCessationMode = exports.PlaybackCessationMode || (exports.PlaybackCessationMode = {}));
// 5.12
var StartDelay;
(function (StartDelay) {
    StartDelay[StartDelay["GENERIC_POSTROLL"] = -2] = "GENERIC_POSTROLL";
    StartDelay[StartDelay["GENERIC_MIDROLL"] = -1] = "GENERIC_MIDROLL";
    StartDelay[StartDelay["PREROLL"] = 0] = "PREROLL";
})(StartDelay = exports.StartDelay || (exports.StartDelay = {}));
// 5.13
var ProductionQuality;
(function (ProductionQuality) {
    ProductionQuality[ProductionQuality["UNKNOWN"] = 0] = "UNKNOWN";
    ProductionQuality[ProductionQuality["PROFESSIONALLY_PRODUCED"] = 1] = "PROFESSIONALLY_PRODUCED";
    ProductionQuality[ProductionQuality["PROSUMER"] = 2] = "PROSUMER";
    ProductionQuality[ProductionQuality["USER_GENERATED_UGC"] = 3] = "USER_GENERATED_UGC";
})(ProductionQuality = exports.ProductionQuality || (exports.ProductionQuality = {}));
// 5.14
var CompanionType;
(function (CompanionType) {
    CompanionType[CompanionType["STATIC_RESOURCE"] = 1] = "STATIC_RESOURCE";
    CompanionType[CompanionType["HTML_RESOURCE"] = 2] = "HTML_RESOURCE";
    CompanionType[CompanionType["IFRAME_RESOURCE"] = 3] = "IFRAME_RESOURCE";
})(CompanionType = exports.CompanionType || (exports.CompanionType = {}));
// 5.15
var ContentDeliveryMethod;
(function (ContentDeliveryMethod) {
    ContentDeliveryMethod[ContentDeliveryMethod["STREAMING"] = 1] = "STREAMING";
    ContentDeliveryMethod[ContentDeliveryMethod["PROGRESSIVE"] = 2] = "PROGRESSIVE";
    ContentDeliveryMethod[ContentDeliveryMethod["DOWNLOAD"] = 3] = "DOWNLOAD";
})(ContentDeliveryMethod = exports.ContentDeliveryMethod || (exports.ContentDeliveryMethod = {}));
// 5.16
var FeedType;
(function (FeedType) {
    FeedType[FeedType["MUSIC_SERVICE"] = 1] = "MUSIC_SERVICE";
    FeedType[FeedType["FM_AM_BROADCAST"] = 2] = "FM_AM_BROADCAST";
    FeedType[FeedType["PODCAST"] = 3] = "PODCAST";
})(FeedType = exports.FeedType || (exports.FeedType = {}));
// 5.17
var VolumeNormalizationMode;
(function (VolumeNormalizationMode) {
    VolumeNormalizationMode[VolumeNormalizationMode["NONE"] = 0] = "NONE";
    VolumeNormalizationMode[VolumeNormalizationMode["AD_VOLUME_AVERAGE_NORMALIZED_TO_CONTENT"] = 1] = "AD_VOLUME_AVERAGE_NORMALIZED_TO_CONTENT";
    VolumeNormalizationMode[VolumeNormalizationMode["AD_VOLUME_PEAK_NORMALIZED_TO_CONTENT"] = 2] = "AD_VOLUME_PEAK_NORMALIZED_TO_CONTENT";
    VolumeNormalizationMode[VolumeNormalizationMode["AD_LOUDNESS_NORMALIZED_TO_CONTENT"] = 3] = "AD_LOUDNESS_NORMALIZED_TO_CONTENT";
    VolumeNormalizationMode[VolumeNormalizationMode["CUSTOM_VOLUME_NORMALIZATION"] = 4] = "CUSTOM_VOLUME_NORMALIZATION";
})(VolumeNormalizationMode = exports.VolumeNormalizationMode || (exports.VolumeNormalizationMode = {}));
// 5.18
var ContentContext;
(function (ContentContext) {
    ContentContext[ContentContext["VIDEO"] = 1] = "VIDEO";
    ContentContext[ContentContext["GAME"] = 2] = "GAME";
    ContentContext[ContentContext["MUSIC"] = 3] = "MUSIC";
    ContentContext[ContentContext["APPLICATION"] = 4] = "APPLICATION";
    ContentContext[ContentContext["TEXT"] = 5] = "TEXT";
    ContentContext[ContentContext["OTHER"] = 6] = "OTHER";
    ContentContext[ContentContext["UNKNOWN"] = 7] = "UNKNOWN";
})(ContentContext = exports.ContentContext || (exports.ContentContext = {}));
// 5.19
var IQGMediaRating;
(function (IQGMediaRating) {
    IQGMediaRating[IQGMediaRating["ALL_AUDIENCES"] = 1] = "ALL_AUDIENCES";
    IQGMediaRating[IQGMediaRating["EVERYONE_OVER_12"] = 2] = "EVERYONE_OVER_12";
    IQGMediaRating[IQGMediaRating["MATURE_AUDIENCES"] = 3] = "MATURE_AUDIENCES";
})(IQGMediaRating = exports.IQGMediaRating || (exports.IQGMediaRating = {}));
// 5.20
var LocationType;
(function (LocationType) {
    LocationType[LocationType["GPS_LOCATION_SERVICES"] = 1] = "GPS_LOCATION_SERVICES";
    LocationType[LocationType["IP_ADDRESS"] = 2] = "IP_ADDRESS";
    LocationType[LocationType["USER_PROVIDED"] = 3] = "USER_PROVIDED";
})(LocationType = exports.LocationType || (exports.LocationType = {}));
// 5.21
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["MOBILE_TABLET"] = 1] = "MOBILE_TABLET";
    DeviceType[DeviceType["PERSONAL_COMPUTER"] = 2] = "PERSONAL_COMPUTER";
    DeviceType[DeviceType["CONNECTED_TV"] = 3] = "CONNECTED_TV";
    DeviceType[DeviceType["PHONE"] = 4] = "PHONE";
    DeviceType[DeviceType["TABLET"] = 5] = "TABLET";
    DeviceType[DeviceType["CONNECTED_DEVICE"] = 6] = "CONNECTED_DEVICE";
    DeviceType[DeviceType["SET_TOP_BOX"] = 7] = "SET_TOP_BOX";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
// 5.22
var ConnectionType;
(function (ConnectionType) {
    ConnectionType[ConnectionType["UNKNOWN"] = 0] = "UNKNOWN";
    ConnectionType[ConnectionType["ETHERNET"] = 1] = "ETHERNET";
    ConnectionType[ConnectionType["WIFI"] = 2] = "WIFI";
    ConnectionType[ConnectionType["CELLULAR_NETWORK_UNKNOWN_GENERATION"] = 3] = "CELLULAR_NETWORK_UNKNOWN_GENERATION";
    ConnectionType[ConnectionType["CELLULAR_NETWORK_2G"] = 4] = "CELLULAR_NETWORK_2G";
    ConnectionType[ConnectionType["CELLULAR_NETWORK_3G"] = 5] = "CELLULAR_NETWORK_3G";
    ConnectionType[ConnectionType["CELLULAR_NETWORK_4G"] = 6] = "CELLULAR_NETWORK_4G";
})(ConnectionType = exports.ConnectionType || (exports.ConnectionType = {}));
// 5.23
var IPLocationService;
(function (IPLocationService) {
    IPLocationService[IPLocationService["IP2LOCATION"] = 0] = "IP2LOCATION";
    IPLocationService[IPLocationService["NEUSTAR"] = 1] = "NEUSTAR";
    IPLocationService[IPLocationService["MAXMIND"] = 2] = "MAXMIND";
    IPLocationService[IPLocationService["NETACUITY"] = 3] = "NETACUITY";
})(IPLocationService = exports.IPLocationService || (exports.IPLocationService = {}));
// 5.24
var NoBidReasonCode;
(function (NoBidReasonCode) {
    NoBidReasonCode[NoBidReasonCode["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    NoBidReasonCode[NoBidReasonCode["TECHNICAL_ERROR"] = 1] = "TECHNICAL_ERROR";
    NoBidReasonCode[NoBidReasonCode["INVALID_REQUEST"] = 2] = "INVALID_REQUEST";
    NoBidReasonCode[NoBidReasonCode["KNOWN_WEB_SPIDER"] = 3] = "KNOWN_WEB_SPIDER";
    NoBidReasonCode[NoBidReasonCode["SUSPECTED_NON_HUMAN_TRAFFIC"] = 4] = "SUSPECTED_NON_HUMAN_TRAFFIC";
    NoBidReasonCode[NoBidReasonCode["CLOUD_DATA_CENTER_OR_PROXY_IP"] = 5] = "CLOUD_DATA_CENTER_OR_PROXY_IP";
    NoBidReasonCode[NoBidReasonCode["UNSUPPORTED_DEVICE"] = 6] = "UNSUPPORTED_DEVICE";
    NoBidReasonCode[NoBidReasonCode["BLOCKED_PUBLISHER_OR_SITE"] = 7] = "BLOCKED_PUBLISHER_OR_SITE";
    NoBidReasonCode[NoBidReasonCode["UNMATCHED_USER"] = 8] = "UNMATCHED_USER";
    NoBidReasonCode[NoBidReasonCode["DAILY_READER_CAP_MET"] = 9] = "DAILY_READER_CAP_MET";
    NoBidReasonCode[NoBidReasonCode["DAILY_DOMAIN_CAP_MET"] = 10] = "DAILY_DOMAIN_CAP_MET";
})(NoBidReasonCode = exports.NoBidReasonCode || (exports.NoBidReasonCode = {}));
// 5.25
var LossReasonCodes;
(function (LossReasonCodes) {
    LossReasonCodes[LossReasonCodes["BID_WON"] = 0] = "BID_WON";
    LossReasonCodes[LossReasonCodes["INTERNAL_ERROR"] = 1] = "INTERNAL_ERROR";
    LossReasonCodes[LossReasonCodes["IMPRESSION_OPPORTUNITY_EXPIRED"] = 2] = "IMPRESSION_OPPORTUNITY_EXPIRED";
    LossReasonCodes[LossReasonCodes["INVALID_BID_RESPONSE"] = 3] = "INVALID_BID_RESPONSE";
    LossReasonCodes[LossReasonCodes["INVALID_DEAL_ID"] = 4] = "INVALID_DEAL_ID";
    LossReasonCodes[LossReasonCodes["INVALID_AUCTION_ID"] = 5] = "INVALID_AUCTION_ID";
    LossReasonCodes[LossReasonCodes["INVALID_ADVERTISER_DOMAIN"] = 6] = "INVALID_ADVERTISER_DOMAIN";
    LossReasonCodes[LossReasonCodes["MISSING_MARKUP"] = 7] = "MISSING_MARKUP";
    LossReasonCodes[LossReasonCodes["MISSING_CREATIVE_ID"] = 8] = "MISSING_CREATIVE_ID";
    LossReasonCodes[LossReasonCodes["MISSING_BID_PRICE"] = 9] = "MISSING_BID_PRICE";
    LossReasonCodes[LossReasonCodes["_MISSING_MINIMUM_CREATIVE_APPROVAL_DATA"] = 10] = "_MISSING_MINIMUM_CREATIVE_APPROVAL_DATA";
    LossReasonCodes[LossReasonCodes["BID_WAS_BELOW_AUCTION_FLOOR"] = 11] = "BID_WAS_BELOW_AUCTION_FLOOR";
    LossReasonCodes[LossReasonCodes["BID_WAS_BELOW_DEAL_FLOOR"] = 12] = "BID_WAS_BELOW_DEAL_FLOOR";
    LossReasonCodes[LossReasonCodes["LOST_TO_HIGHER_BID"] = 13] = "LOST_TO_HIGHER_BID";
    LossReasonCodes[LossReasonCodes["LOST_TO_A_BID_FOR_A_PMP_DEAL"] = 14] = "LOST_TO_A_BID_FOR_A_PMP_DEAL";
    LossReasonCodes[LossReasonCodes["BUYER_SEAT_BLOCKED"] = 15] = "BUYER_SEAT_BLOCKED";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_GENERAL_REASON_UNKNOWN"] = 16] = "CREATIVE_FILTERED_GENERAL_REASON_UNKNOWN";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_PENDING_PROCESSING_BY_EXCHANGE"] = 17] = "CREATIVE_FILTERED_PENDING_PROCESSING_BY_EXCHANGE";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_DISAPPROVED_BY_EXCHANGE"] = 18] = "CREATIVE_FILTERED_DISAPPROVED_BY_EXCHANGE";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_SIZE_NOT_ALLOWED"] = 19] = "CREATIVE_FILTERED_SIZE_NOT_ALLOWED";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_INCORRECT_CREATIVE_FORMAT"] = 20] = "CREATIVE_FILTERED_INCORRECT_CREATIVE_FORMAT";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_ADVERTISER_EXCLUSIONS"] = 21] = "CREATIVE_FILTERED_ADVERTISER_EXCLUSIONS";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_APP_BUNDLE_EXCLUSIONS"] = 22] = "CREATIVE_FILTERED_APP_BUNDLE_EXCLUSIONS";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_NOT_SECURE"] = 23] = "CREATIVE_FILTERED_NOT_SECURE";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_LANGUAGE_EXCLUSIONS"] = 24] = "CREATIVE_FILTERED_LANGUAGE_EXCLUSIONS";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_CATEGORY_EXCLUSIONS"] = 25] = "CREATIVE_FILTERED_CATEGORY_EXCLUSIONS";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_CREATIVE_ATTRIBUTE_EXCLUSIONS"] = 26] = "CREATIVE_FILTERED_CREATIVE_ATTRIBUTE_EXCLUSIONS";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_AD_TYPE_EXCLUSIONS"] = 27] = "CREATIVE_FILTERED_AD_TYPE_EXCLUSIONS";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_ANIMATION_TOO_LONG"] = 28] = "CREATIVE_FILTERED_ANIMATION_TOO_LONG";
    LossReasonCodes[LossReasonCodes["CREATIVE_FILTERED_NOT_ALLOWED_IN_PMP_DEAL"] = 29] = "CREATIVE_FILTERED_NOT_ALLOWED_IN_PMP_DEAL";
})(LossReasonCodes = exports.LossReasonCodes || (exports.LossReasonCodes = {}));
