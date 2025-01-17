import { APIFramework, CreativeAttribute, IQGMediaRating, Protocol } from '../common/enums';
/**
 * A SeatBid object contains one or more Bid objects, each of which relates to a specific impression
 * in the bid request via the impid attribute and constitutes an offer to buy that impression for a given price.
 */
export declare type Bid = {
    /**
     * Bidder generated bid ID to assist with logging/tracking.
     */
    id: string;
    /**
     * ID of the Imp object in the related bid request.
     */
    impid: string;
    /**
     * Bid price expressed as CPM although the actual transaction is for a unit impression only.
     * Note that while the type indicates float, integer math is highly recommended when handling currencies (e.g., BigDecimal in Java).
     */
    price: number;
    /**
     * Win notice URL called by the exchange if the bid wins (not necessarily indicative of a delivered, viewed, or billable ad); optional means of serving ad markup.
     * Substitution macros (Section 4.4) may be included in both the URL and optionally returned markup.
     */
    nurl?: string;
    /**
     * Billing notice URL called by the exchange when a winning bid becomes billable based on exchange-specific business policy (e.g., typically delivered, viewed, etc.).
     * Substitution macros (Section 4.4) may be included.
     */
    burl?: string;
    /**
     * Loss notice URL called by the exchange when a bid is known to have been lost.
     * Substitution macros (Section 4.4) may be included.
     * Exchange-specific policy may preclude support for loss notices or the disclosure of winning clearing prices resulting in ${AUCTION_PRICE} macros being removed (i.e., replaced with a zero-length string).
     */
    lurl?: string;
    /**
     * Optional means of conveying ad markup in case the bid wins; supersedes the win notice if markup is included in both.
     * Substitution macros (Section 4.4) may be included.
     */
    adm?: string;
    /**
     * ID of a preloaded ad to be served if the bid wins.
     */
    adid?: string;
    /**
     * Advertiser domain for block list checking (e.g., "ford.com").
     * This can be an array of for the case of rotating creatives.
     * Exchanges can mandate that only one domain is allowed.
     */
    adomain?: string[];
    /**
     * A platform-specific application identifier intended to be unique to the app and independent of the exchange.
     * On Android, this should be a bundle or package name (e.g., com.foo.mygame).
     * On iOS, it is a numeric ID.
     */
    bundle?: string;
    /**
     * URL without cache-busting to an image that is representative of the content of the campaign for ad quality/safety checking.
     */
    iurl?: string;
    /**
     * Campaign ID to assist with ad quality checking; the collection of creatives for which iurl should be representative.
     */
    cid?: string;
    /**
     * Creative ID to assist with ad quality checking.
     */
    crid?: string;
    /**
     * Tactic ID to enable buyers to label bids for reporting to the exchange the tactic through which their bid was submitted.
     * The specific usage and meaning of the tactic ID should be communicated between buyer and exchanges a priori.
     */
    tactic?: string;
    /**
     * IAB content categories of the creative.
     * Refer to List 5.1.
     */
    cat?: string[];
    /**
     * Set of attributes describing the creative.
     * Refer to List 5.3.
     */
    attr?: CreativeAttribute[];
    /**
     * API required by the markup if applicable.
     * Refer to List 5.6.
     */
    api?: APIFramework;
    /**
     * Video response protocol of the markup if applicable.
     * Refer to List 5.8.
     */
    protocol?: Protocol;
    /**
     * Creative media rating per IQG guidelines.
     * Refer to List 5.19.
     */
    qagmediarating?: IQGMediaRating;
    /**
     * Language of the creative using ISO-639-1-alpha-2.
     * The nonstandard code “xx” may also be used if the creative has no linguistic content (e.g., a banner with just a company logo).
     */
    language?: string;
    /**
     * Reference to the deal.id from the bid request if this bid pertains to a private marketplace direct deal.
     */
    dealid?: string;
    /**
     * Width of the creative in device independent pixels (DIPS).
     */
    w?: number;
    /**
     * Height of the creative in device independent pixels (DIPS).
     */
    h?: number;
    /**
     * Relative width of the creative when expressing size as a ratio.
     * Required for Flex Ads.
     */
    wratio?: number;
    /**
     * Relative height of the creative when expressing size as a ratio.
     * Required for Flex Ads.
     */
    hratio?: number;
    /**
     * Advisory as to the number of seconds the bidder is willing to wait between the auction and the actual impression.
     */
    exp?: number;
    /**
     * Placeholder for bidder-specific extensions to OpenRTB.
     */
    ext?: any;
};
