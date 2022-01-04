/**
 * This object contains any legal, governmental, or industry regulations that apply to the request.
 *
 * The coppa flag signals whether or not the request falls under the United States Federal Trade Commission’s
 * regulations for the United States Children’s Online Privacy Protection Act ("COPPA").
 */
export declare type Regs = {
    /**
     * Flag indicating if this request is subject to the COPPA regulations established by the USA FTC,
     * where 0 = no, 1 = yes.
     * Refer to Section 7.5 for more information.
     */
    coppa?: number;
    /**
     * Placeholder for exchange-specific extensions to OpenRTB
     */
    ext?: any;
};
