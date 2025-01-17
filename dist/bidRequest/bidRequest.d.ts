import { Imp } from './imp';
import { Site } from './site';
import { App } from './app';
import { Device } from './device';
import { User } from './user';
import { Source } from './source';
import { Regs } from './regs';
/**
 * The top-level bid request object contains a globally unique bid request or auction ID.
 * This id attribute is required as is at least one impression object (Section 3.2.4).
 * Other attributes in this top-level object establish rules and restrictions that apply to all impressions being offered.
 * There are also several subordinate objects that provide detailed data to potential buyers.
 * Among these are the Site and App objects, which describe the type of published media in which the impression(s) appear.
 * These objects are highly recommended, but only one applies to a given bid request depending on whether the media is browser-based web content or a non-browser application, respectively.
 */
export declare type BidRequest = {
    /**
     * Unique ID of the bid request, provided by the exchange.
     */
    id: string;
    /**
     * Array of Imp objects (Section 3.2.4) representing the impressions offered.
     * At least 1 Imp object is required.
     */
    imp: Imp[];
    /**
     * Details via a Site object (Section 3.2.13) about the publisher’s website.
     * Only applicable and recommended for websites.
     */
    site?: Site;
    /**
     * Details via an App object (Section 3.2.14) about the publisher’s app (i.e., non-browser applications).
     * Only applicable and recommended for apps.
     */
    app?: App;
    /**
     * Details via a Device object (Section 3.2.18) about the user’s device to which the impression will be delivered.
     */
    device?: Device;
    /**
     * Details via a User object (Section 3.2.20) about the human user of the device; the advertising audience.
     */
    user?: User;
    /**
     * Indicator of test mode in which auctions are not billable, where 0 = live mode, 1 = test mode.
     * Default is 0.
     */
    test?: number;
    /**
     * Auction type, where 1 = First Price, 2 = Second Price Plus.
     * Exchange-specific auction types can be defined using values greater than 500.
     * Default is 2.
     */
    at?: number;
    /**
     * Maximum time in milliseconds the exchange allows for bids to be received including Internet latency to avoid timeout.
     * This value supersedes any a priori guidance from the exchange.
     */
    tmax?: number;
    /**
     * White list of buyer seats (e.g., advertisers, agencies) allowed to bid on this impression.
     * IDs of seats and knowledge of the buyer’s customers to which they refer must be coordinated between bidders and the exchange a priori.
     * At most, only one of wseat and bseat should be used in the same request.
     * Omission of both implies no seat restrictions.
     */
    wseat?: string[];
    /**
     * Block list of buyer seats (e.g., advertisers, agencies) restricted from bidding on this impression.
     * IDs of seats and knowledge of the buyer’s customers to which they refer must be coordinated between bidders and the exchange a priori.
     * At most, only one of wseat and bseat should be used in the same request.
     * Omission of both implies no seat restrictions.
     */
    bseat?: string[];
    /**
     * Flag to indicate if Exchange can verify that the impressions offered represent all of the impressions available in context
     * (e.g., all on the web page, all video spots such as pre/mid/postroll) to support road-blocking.
     * 0 = no or unknown, 1 = yes, the impressions offered represent all that are available.
     */
    allimps?: number;
    /**
     * Array of allowed currencies for bids on this bid request using ISO-4217 alpha codes.
     * Recommended only if the exchange accepts multiple currencies.
     */
    cur?: string[];
    /**
     * White list of languages for creatives using ISO-639-1-alpha-2.
     * Omission implies no specific restrictions, but buyers would be advised to consider language attribute in the Device and/or Content objects if available.
     */
    wlang?: string[];
    /**
     * Blocked advertiser categories using the IAB content categories.
     * Refer to List 5.1.
     */
    bcat?: string[];
    /**
     * Block list of advertisers by their domains (e.g., "ford.com").
     */
    badv?: string[];
    /**
     * Block list of applications by their platform-specific exchangeindependent application identifiers.
     * On Android, these should be bundle or package names (e.g., com.foo.mygame).
     * On iOS, these are numeric IDs.
     */
    bapp?: string[];
    /**
     * A Source object (Section 3.2.2) that provides data about the inventory source and which entity makes the final decision.
     */
    source?: Source;
    /**
     * A Regs object (Section 3.2.3) that specifies any industry, legal, or governmental regulations in force for this request.
     */
    regs?: Regs;
    /**
     * Placeholder for exchange-specific extensions to OpenRTB.
     */
    ext?: any;
};
