import { APIFramework, CreativeAttribute } from '../common/enums';
/**
 * This object represents a native type impression.
 * Native ad units are intended to blend seamlessly into the surrounding content (e.g., a sponsored Twitter or Facebook post).
 * As such, the response must be well-structured to afford the publisher fine-grained control over rendering.
 *
 * The Native Subcommittee has developed a companion specification to OpenRTB called the Dynamic Native Ads API.
 * It defines the request parameters and response markup structure of native ad units.
 * This object provides the means of transporting request parameters as an opaque string so that the specific parameters can evolve separately under the auspices of the Dynamic Native Ads API.
 * Similarly, the ad markup served will be structured according to that specification.
 *
 * The presence of a Native as a subordinate of the Imp object indicates that this impression is offered as a native type impression.
 * At the publisher’s discretion, that same impression may also be offered as banner, video, and/or audio by also including as Imp subordinates objects of those types.
 * However, any given bid for the impression must conform to one of the offered types.
 */
export declare type Native = {
    /**
     * Request payload complying with the Native Ad Specification.
     */
    request: string;
    /**
     * Version of the Dynamic Native Ads API to which request complies; highly recommended for efficient parsing.
     */
    ver?: string;
    /**
     * List of supported API frameworks for this impression.
     * Refer to List 5.6.
     * If an API is not explicitly listed, it is assumed not to be supported.
     */
    api?: APIFramework;
    /**
     * Blocked creative attributes.
     * Refer to List 5.3
     */
    battr?: CreativeAttribute[];
    /**
     * Placeholder for exchange-specific extensions to OpenRTB.
     */
    ext?: any;
};
