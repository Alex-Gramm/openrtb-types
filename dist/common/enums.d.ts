export declare enum Currency {
}
export declare enum MimeType {
    GIF = "image/gif",
    JPG = "image/jpg",
    JPEG = "image/jpeg",
    PNG = "image/png",
    SVG = "image/svg+xml",
    WAVE = "audio/wave",
    WAV = "audio/wav",
    X_WAV = "audio/x-wav",
    X_PN_WAV = "audio/x-pn-wav",
    WEBM_AUDIO = "audio/webm",
    WEBM_VIDEO = "video/webm",
    OGG_AUDIO = "audio/ogg",
    OGG_VIDEO = "video/ogg",
    OGG_APPLICATION = "application/ogg",
    X_SHOCKWAVE_FLASH = "application/x-shockwave-flash",
    X_MS_WMV = "video/x-ms-wmv",
    MP4 = "video/mp4"
}
export declare enum BannerAdType {
    XHTML_TEXT = 1,
    XHTML_BANNER = 2,
    JAVASCRIPT = 3,
    IFRAME = 4
}
export declare enum CreativeAttribute {
    AUDIO_AD_AUTOPLAY = 1,
    AUDIO_AD_USER_INITIATED = 2,
    EXPANDABLE_AUTOMATIC = 3,
    EXPANDABLE_USER_INITIATED_CLICK = 4,
    EXPANDABLE_USER_INITIATED_ROLLOVER = 5,
    INBANNER_VIDEO_AD_AUTOPLAY = 6,
    INBANNER_VIDEO_AD_USER_INITIATED = 7,
    POP = 8,
    PROVOCATIVE_OR_SUGGESTIVE_IMAGERY = 9,
    SHAKY_FLASHING_FLICKERING_EXTREME_ANIMATION_SMILEYS = 10,
    SURVEYS = 11,
    TEXT_ONLY = 12,
    USER_INTERACTIVE = 13,
    WINDOWS_DIALOG_OR_ALERT_STYLE = 14,
    HAS_AUDIO_ON_OFF_BUTTON = 15,
    AD_PROVIDES_SKIP_BUTTON = 16,
    ADOBE_FLASH = 17
}
export declare enum AdPosition {
    UNKNOWN = 0,
    ABOVE_THE_FOLD = 1,
    BELOW_THE_FOLD = 3,
    HEADER = 4,
    FOOTER = 5,
    SIDEBAR = 6,
    FULL_SCREEN = 7
}
export declare enum ExpandableDirection {
    LEFT = 1,
    RIGHT = 2,
    UP = 3,
    DOWN = 4,
    FULL_SCREEN = 5
}
export declare enum APIFramework {
    VPAID_1 = 0,
    VPAID_2 = 1,
    MRAID_1 = 2,
    ORMMA = 3,
    MRAID_2 = 4,
    MRAID_3 = 5
}
export declare enum VideoLinearity {
    LINEAR_OR_IN_STREAM = 0,
    NON_LINEAR_OR_OVERLAY = 1
}
export declare enum Protocol {
    VAST_1 = 1,
    VAST_2 = 2,
    VAST_3 = 3,
    VAST_1_WRAPPER = 4,
    VAST_2_WRAPPER = 5,
    VAST_3_WRAPPER = 6,
    VAST_4 = 7,
    VAST_4_WRAPPER = 8,
    DAAST_1 = 9,
    DAAST_1_WRAPPER = 10
}
export declare enum VideoPlacementType {
    IN_STREAM = 1,
    IN_BANNER = 2,
    IN_ARTICLE = 3,
    IN_FEED = 4,
    INTERSTITIAL_SLIDER_FLOATING = 5
}
export declare enum PlaybackMethod {
    PAGE_LOAD_WITH_SOUND_ON = 0,
    PAGE_LOAD_WITH_SOUND_OFF_BY_DEFAULT = 1,
    CLICK_WITH_SOUND_ON = 2,
    MOUSEOVER_WITH_SOUND_ON = 3,
    ENTERING_VIEWPORT_WITH_SOUND_ON = 4,
    ENTERING_VIEWPORT_WITH_SOUND_OFF_BY_DEFAULT = 5
}
export declare enum PlaybackCessationMode {
    VIDEO_COMPLETION = 0,
    LEAVING_VIEWPORT = 1,
    LEAVING_VIEWPORT_CONTINUES_AS_A_FLOATING_SLIDER_UNIT = 2
}
export declare enum StartDelay {
    GENERIC_POSTROLL = -2,
    GENERIC_MIDROLL = -1,
    PREROLL = 0
}
export declare enum ProductionQuality {
    UNKNOWN = 0,
    PROFESSIONALLY_PRODUCED = 1,
    PROSUMER = 2,
    USER_GENERATED_UGC = 3
}
export declare enum CompanionType {
    STATIC_RESOURCE = 1,
    HTML_RESOURCE = 2,
    IFRAME_RESOURCE = 3
}
export declare enum ContentDeliveryMethod {
    STREAMING = 1,
    PROGRESSIVE = 2,
    DOWNLOAD = 3
}
export declare enum FeedType {
    MUSIC_SERVICE = 1,
    FM_AM_BROADCAST = 2,
    PODCAST = 3
}
export declare enum VolumeNormalizationMode {
    NONE = 0,
    AD_VOLUME_AVERAGE_NORMALIZED_TO_CONTENT = 1,
    AD_VOLUME_PEAK_NORMALIZED_TO_CONTENT = 2,
    AD_LOUDNESS_NORMALIZED_TO_CONTENT = 3,
    CUSTOM_VOLUME_NORMALIZATION = 4
}
export declare enum ContentContext {
    VIDEO = 1,
    GAME = 2,
    MUSIC = 3,
    APPLICATION = 4,
    TEXT = 5,
    OTHER = 6,
    UNKNOWN = 7
}
export declare enum IQGMediaRating {
    ALL_AUDIENCES = 1,
    EVERYONE_OVER_12 = 2,
    MATURE_AUDIENCES = 3
}
export declare enum LocationType {
    GPS_LOCATION_SERVICES = 1,
    IP_ADDRESS = 2,
    USER_PROVIDED = 3
}
export declare enum DeviceType {
    MOBILE_TABLET = 1,
    PERSONAL_COMPUTER = 2,
    CONNECTED_TV = 3,
    PHONE = 4,
    TABLET = 5,
    CONNECTED_DEVICE = 6,
    SET_TOP_BOX = 7
}
export declare enum ConnectionType {
    UNKNOWN = 0,
    ETHERNET = 1,
    WIFI = 2,
    CELLULAR_NETWORK_UNKNOWN_GENERATION = 3,
    CELLULAR_NETWORK_2G = 4,
    CELLULAR_NETWORK_3G = 5,
    CELLULAR_NETWORK_4G = 6
}
export declare enum IPLocationService {
    IP2LOCATION = 0,
    NEUSTAR = 1,
    MAXMIND = 2,
    NETACUITY = 3
}
export declare enum NoBidReasonCode {
    UNKNOWN_ERROR = 0,
    TECHNICAL_ERROR = 1,
    INVALID_REQUEST = 2,
    KNOWN_WEB_SPIDER = 3,
    SUSPECTED_NON_HUMAN_TRAFFIC = 4,
    CLOUD_DATA_CENTER_OR_PROXY_IP = 5,
    UNSUPPORTED_DEVICE = 6,
    BLOCKED_PUBLISHER_OR_SITE = 7,
    UNMATCHED_USER = 8,
    DAILY_READER_CAP_MET = 9,
    DAILY_DOMAIN_CAP_MET = 10
}
export declare enum LossReasonCodes {
    BID_WON = 0,
    INTERNAL_ERROR = 1,
    IMPRESSION_OPPORTUNITY_EXPIRED = 2,
    INVALID_BID_RESPONSE = 3,
    INVALID_DEAL_ID = 4,
    INVALID_AUCTION_ID = 5,
    INVALID_ADVERTISER_DOMAIN = 6,
    MISSING_MARKUP = 7,
    MISSING_CREATIVE_ID = 8,
    MISSING_BID_PRICE = 9,
    _MISSING_MINIMUM_CREATIVE_APPROVAL_DATA = 10,
    BID_WAS_BELOW_AUCTION_FLOOR = 11,
    BID_WAS_BELOW_DEAL_FLOOR = 12,
    LOST_TO_HIGHER_BID = 13,
    LOST_TO_A_BID_FOR_A_PMP_DEAL = 14,
    BUYER_SEAT_BLOCKED = 15,
    CREATIVE_FILTERED_GENERAL_REASON_UNKNOWN = 16,
    CREATIVE_FILTERED_PENDING_PROCESSING_BY_EXCHANGE = 17,
    CREATIVE_FILTERED_DISAPPROVED_BY_EXCHANGE = 18,
    CREATIVE_FILTERED_SIZE_NOT_ALLOWED = 19,
    CREATIVE_FILTERED_INCORRECT_CREATIVE_FORMAT = 20,
    CREATIVE_FILTERED_ADVERTISER_EXCLUSIONS = 21,
    CREATIVE_FILTERED_APP_BUNDLE_EXCLUSIONS = 22,
    CREATIVE_FILTERED_NOT_SECURE = 23,
    CREATIVE_FILTERED_LANGUAGE_EXCLUSIONS = 24,
    CREATIVE_FILTERED_CATEGORY_EXCLUSIONS = 25,
    CREATIVE_FILTERED_CREATIVE_ATTRIBUTE_EXCLUSIONS = 26,
    CREATIVE_FILTERED_AD_TYPE_EXCLUSIONS = 27,
    CREATIVE_FILTERED_ANIMATION_TOO_LONG = 28,
    CREATIVE_FILTERED_NOT_ALLOWED_IN_PMP_DEAL = 29
}
