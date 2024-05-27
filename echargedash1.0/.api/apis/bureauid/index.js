import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'bureauid/1.0.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * API to retrive details around IP address.
     *
     *
     * @summary IP Address Intelligence
     * @throws FetchError<400, types.IPAttributesResponse400> Bad Request
     * @throws FetchError<401, types.IPAttributesResponse401> Unauthorised
     * @throws FetchError<422, types.IPAttributesResponse422> No Record Found
     * @throws FetchError<500, types.IPAttributesResponse500> Internal Server Error
     * @throws FetchError<503, types.IPAttributesResponse503> Internal Service Unavailable
     */
    iPAttributes(body) {
        return this.core.fetch('/v1/suppliers/ip-attributes', 'post', body);
    }
    /**
     * Unleash the power of due diligence with our Anti-Money Laundering (AML) and Politically
     * Exposed Persons (PEPs) API. Our API delivers detailed, real-time profiles that include
     * biographical information, connections, past and present positions, negative news
     * mentions, and sanction list details. This empowers informed decision-making and enhances
     * risk assessments.<br><br>Enhance your onboarding process with our AML/PEP API for more
     * effective risk assessments and Know Your Customer (KYC) checks.
     *
     *
     * @summary Global Watchlists (v1)
     * @throws FetchError<400, types.AmlPepSanctionsScreeningV1Response400> Bad Request
     * @throws FetchError<401, types.AmlPepSanctionsScreeningV1Response401> Unauthorised
     * @throws FetchError<422, types.AmlPepSanctionsScreeningV1Response422> No Record Found
     * @throws FetchError<500, types.AmlPepSanctionsScreeningV1Response500> Internal Server Error
     * @throws FetchError<503, types.AmlPepSanctionsScreeningV1Response503> Internal Service Unavailable
     */
    aml_pep_sanctions_screening_v1(body) {
        return this.core.fetch('/v1/suppliers/pep-check', 'post', body);
    }
    /**
     * Unleash the power of due diligence with our Anti-Money Laundering (AML) and Politically
     * Exposed Persons (PEPs) API. Our API delivers detailed, real-time profiles that include
     * biographical information, connections, past and present positions, negative news
     * mentions, and sanction list details. This empowers informed decision-making and enhances
     * risk assessments.<br><br>Enhance your onboarding process with our AML/PEP API for more
     * effective risk assessments and Know Your Customer (KYC) checks.
     *
     *
     * @summary Global Watchlists (v2)
     * @throws FetchError<400, types.AmlPepSanctionsScreeningV2Response400> Bad Request
     * @throws FetchError<401, types.AmlPepSanctionsScreeningV2Response401> Unauthorised
     * @throws FetchError<422, types.AmlPepSanctionsScreeningV2Response422> No Record Found
     * @throws FetchError<500, types.AmlPepSanctionsScreeningV2Response500> Internal Server Error
     * @throws FetchError<503, types.AmlPepSanctionsScreeningV2Response503> Internal Service Unavailable
     */
    aml_pep_sanctions_screening_v2(body) {
        return this.core.fetch('/v2/services/pep-check', 'post', body);
    }
    /**
     * API to perform compliance screening against a company.
     *
     *
     * @summary Compliance Check
     * @throws FetchError<400, types.ComplianceScreeningResponse400> Bad Request
     * @throws FetchError<401, types.ComplianceScreeningResponse401> Unauthorised
     * @throws FetchError<422, types.ComplianceScreeningResponse422> No Record Found
     * @throws FetchError<500, types.ComplianceScreeningResponse500> Internal Server Error
     * @throws FetchError<503, types.ComplianceScreeningResponse503> Internal Service Unavailable
     */
    complianceScreening(body) {
        return this.core.fetch('/v2/services/compliance-check', 'post', body);
    }
    /**
     * As per government regulations, all entities, regulated or otherwise, can only store
     * masked versions of Aadhaar cards. Use this API to generate a masked version of an
     * Aadhaar card. You have the option to mask either the first 8 digits or all 12 digits of
     * the Aadhaar number.
     *
     *
     * @summary Mask Aadhaar Number
     * @throws FetchError<400, types.MaskAadhaarNumberResponse400> Bad Request
     * @throws FetchError<401, types.MaskAadhaarNumberResponse401> Unauthorised
     * @throws FetchError<422, types.MaskAadhaarNumberResponse422> No Record Found
     * @throws FetchError<500, types.MaskAadhaarNumberResponse500> Internal Server Error
     * @throws FetchError<503, types.MaskAadhaarNumberResponse503> Internal Service Unavailable
     */
    mask_aadhaar_number(body) {
        return this.core.fetch('/v1/suppliers/mask-aadhaar-number', 'post', body);
    }
    /**
     * As per government regulations, all entities, regulated or otherwise, can only store
     * masked versions of Aadhaar cards. Use this API to generate a masked version of an
     * Aadhaar card. This API masks the first 8 digits of the Aadhaar and leaves the last 4
     * digits unmasked.
     *
     *
     * @summary Mask Aadhaar Number and QR
     * @throws FetchError<400, types.MaskAadhaarNumberQrResponse400> Bad Request
     * @throws FetchError<401, types.MaskAadhaarNumberQrResponse401> Unauthorised
     * @throws FetchError<422, types.MaskAadhaarNumberQrResponse422> No Record Found
     * @throws FetchError<500, types.MaskAadhaarNumberQrResponse500> Internal Server Error
     * @throws FetchError<503, types.MaskAadhaarNumberQrResponse503> Internal Service Unavailable
     */
    mask_aadhaar_number_qr(body) {
        return this.core.fetch('/v2/services/mask-aadhaar', 'post', body);
    }
    /**
     * Initiate a request for Aadhaar Esign
     *
     *
     * @summary Esigned Session
     * @throws FetchError<400, types.EsignedSessionResponse400> Bad Request
     * @throws FetchError<401, types.EsignedSessionResponse401> Unauthorised
     * @throws FetchError<422, types.EsignedSessionResponse422> No Record Found
     * @throws FetchError<500, types.EsignedSessionResponse500> Internal Server Error
     * @throws FetchError<503, types.EsignedSessionResponse503> Internal Service Unavailable
     */
    esignedSession(body) {
        return this.core.fetch('/v1/suppliers/esign-session', 'post', body);
    }
    /**
     * Fetch a signed document
     *
     *
     * @summary Get signed document
     * @throws FetchError<400, types.AadhaarEsignFetchResponse400> Bad Request
     * @throws FetchError<401, types.AadhaarEsignFetchResponse401> Unauthorised
     * @throws FetchError<422, types.AadhaarEsignFetchResponse422> No Record Found
     * @throws FetchError<500, types.AadhaarEsignFetchResponse500> Internal Server Error
     * @throws FetchError<503, types.AadhaarEsignFetchResponse503> Internal Service Unavailable
     */
    aadhaarEsignFetch(body) {
        return this.core.fetch('/v1/suppliers/esign-get-signed-document', 'post', body);
    }
    /**
     * Fetch a signed document
     *
     *
     * @summary Aadhaar Esign Redirect
     * @throws FetchError<400, types.AadhaarEsignRedirectResponse400> Bad Request
     * @throws FetchError<401, types.AadhaarEsignRedirectResponse401> Unauthorised
     * @throws FetchError<422, types.AadhaarEsignRedirectResponse422> No Record Found
     * @throws FetchError<500, types.AadhaarEsignRedirectResponse500> Internal Server Error
     * @throws FetchError<503, types.AadhaarEsignRedirectResponse503> Internal Service Unavailable
     */
    aadhaarEsignRedirect(body) {
        return this.core.fetch('/v1/suppliers/esign-redirect-url', 'post', body);
    }
    /**
     * Fetch a signed document
     *
     *
     * @summary Delete a signed document
     * @throws FetchError<400, types.AadhaarEsignDeleteResponse400> Bad Request
     * @throws FetchError<401, types.AadhaarEsignDeleteResponse401> Unauthorised
     * @throws FetchError<422, types.AadhaarEsignDeleteResponse422> No Record Found
     * @throws FetchError<500, types.AadhaarEsignDeleteResponse500> Internal Server Error
     * @throws FetchError<503, types.AadhaarEsignDeleteResponse503> Internal Service Unavailable
     */
    aadhaarEsignDelete(body) {
        return this.core.fetch('/v1/suppliers/esign-delete-signed-document', 'post', body);
    }
    /**
     * Bureau’s Bank Account Verification (Penny Drop) API enables you to confirm the
     * authenticity and validity of a bank account before initiating any financial transfers to
     * it. Pass the account number and IFSC in the API request and get the account details as
     * per bank records in the response.
     *
     *
     * @summary Bank Account Verification (Penny Drop)
     * @throws FetchError<400, types.AccountNumberVerificationResponse400> Bad Request
     * @throws FetchError<401, types.AccountNumberVerificationResponse401> Unauthorised
     * @throws FetchError<422, types.AccountNumberVerificationResponse422> No Record Found
     * @throws FetchError<433, types.AccountNumberVerificationResponse433> Max Requests Per Hour Exceeded
     * @throws FetchError<500, types.AccountNumberVerificationResponse500> Internal Server Error
     */
    accountNumberVerification(body) {
        return this.core.fetch('/v1/suppliers/bank-verification', 'post', body);
    }
    /**
     * This API enables you to instantly verify the validity and ownership of a Virtual Payment
     * Address (VPA) or a Unified Payments Interface (UPI) ID. Pass the VPA or UPI ID you want
     * to verify in the request and get information about the name and bank associated with the
     * VPA or UPI ID. This API can also match an individual's or entity's name with the name
     * associated with a VPA or UPI ID.<br><br>Our VPA Verification API can help you ensure
     * funds are transferred to the right person, reduce the risk of fraud, and streamline
     * onboarding. bank account.
     *
     *
     * @summary VPA Verification (v2)
     * @throws FetchError<400, types.VpaVerificationV2Response400> Bad Request
     * @throws FetchError<401, types.VpaVerificationV2Response401> Unauthorised
     * @throws FetchError<422, types.VpaVerificationV2Response422> No Record Found
     * @throws FetchError<500, types.VpaVerificationV2Response500> Internal Server Error
     */
    vpa_verification_v2(body) {
        return this.core.fetch('/v2/services/vpa-verification', 'post', body);
    }
    /**
     * This API enables you to instantly verify the validity and ownership of a Virtual Payment
     * Address (VPA) or a Unified Payments Interface (UPI) ID. Pass the VPA or UPI ID you want
     * to verify in the request and get information about the name and bank associated with the
     * VPA or UPI ID. This API can also match an individual's or entity's name with the name
     * associated with a VPA or UPI ID.<br><br>Our VPA Verification API can help you ensure
     * funds are transferred to the right person, reduce the risk of fraud, and streamline
     * onboarding.
     *
     *
     * @summary VPA Validation (v1)
     * @throws FetchError<400, types.VpaVerificationV1Response400> Bad Request
     * @throws FetchError<401, types.VpaVerificationV1Response401> Unauthorised
     * @throws FetchError<422, types.VpaVerificationV1Response422> No Record Found
     * @throws FetchError<500, types.VpaVerificationV1Response500> Internal Server Error
     */
    vpa_verification_v1(body) {
        return this.core.fetch('/v1/suppliers/upi-check', 'post', body);
    }
    /**
     * Enter an IFSC and get comprehensive information about any bank branch in India. This API
     * enables you to quickly retrieve the bank name, branch name, phone number, and address
     * for any IFSC.
     *
     *
     * @summary Get IFSC Details
     * @throws FetchError<400, types.GetIfscDetailsResponse400> Bad Request
     * @throws FetchError<401, types.GetIfscDetailsResponse401> Unauthorised
     * @throws FetchError<422, types.GetIfscDetailsResponse422> No Record Found
     * @throws FetchError<500, types.GetIfscDetailsResponse500> Internal Server Error
     */
    get_ifsc_details(body) {
        return this.core.fetch('/v2/services/ifsc-details', 'post', body);
    }
    /**
     * The API to identify the Universal Account Number (UAN) linked to a given Mobile Number.
     *
     *
     * @summary EPF UAN LookUp
     * @throws FetchError<400, types.EPfuanLookupResponse400> Bad Request
     * @throws FetchError<401, types.EPfuanLookupResponse401> Unauthorised
     * @throws FetchError<422, types.EPfuanLookupResponse422> No Record Found
     * @throws FetchError<500, types.EPfuanLookupResponse500> Internal Server Error
     */
    ePFUANLookup(body) {
        return this.core.fetch('/v1/suppliers/fetch-epf-uan', 'post', body);
    }
    /**
     * The API that authenticates the Universal Account Number (UAN) issued by Employees
     * Provident Fund Office (EPFO) in India using a six-digit OTP-based consent of the Account
     * Holder.
     *
     *
     * @summary EPF Authentication (Consent Based) (Part1)
     * @throws FetchError<400, types.EPfAuthenticationRequestOtpResponse400> Bad Request
     * @throws FetchError<401, types.EPfAuthenticationRequestOtpResponse401> Unauthorised
     * @throws FetchError<422, types.EPfAuthenticationRequestOtpResponse422> No Record Found
     * @throws FetchError<500, types.EPfAuthenticationRequestOtpResponse500> Internal Server Error
     */
    ePFAuthenticationRequestOTP(body) {
        return this.core.fetch('/v1/suppliers/epf-send-otp', 'post', body);
    }
    /**
     * The API that authenticates the Universal Account Number (UAN) issued by Employees
     * Provident Fund Office (EPFO) in India using a six-digit OTP-based consent of the Account
     * Holder.
     *
     *
     * @summary EPF Authentication (Consent Based) (Part2)
     * @throws FetchError<400, types.EPfAuthenticationRequestDetailsResponse400> Bad Request
     * @throws FetchError<401, types.EPfAuthenticationRequestDetailsResponse401> Unauthorised
     * @throws FetchError<422, types.EPfAuthenticationRequestDetailsResponse422> No Record Found
     * @throws FetchError<500, types.EPfAuthenticationRequestDetailsResponse500> Internal Server Error
     */
    ePFAuthenticationRequestDetails(body) {
        return this.core.fetch('/v1/suppliers/epf-get-details', 'post', body);
    }
    /**
     * Streamline credit checks with our secure and easy-to-use credit report API. Get
     * comprehensive reports quickly using a Permanent Account Number (PAN) and the PAN
     * holder's consent, which is verified via a one-time password (OTP).<br><br>This API sends
     * an OTP to the provided phone number.
     *
     *
     * @summary 1. Credit Report - Send OTP
     * @throws FetchError<400, types.CreditReportSendOtpResponse400> Bad Request
     * @throws FetchError<401, types.CreditReportSendOtpResponse401> Unauthorised
     * @throws FetchError<422, types.CreditReportSendOtpResponse422> No Record Found
     * @throws FetchError<500, types.CreditReportSendOtpResponse500> Internal Server Error
     */
    credit_report_send_otp(body) {
        return this.core.fetch('/v1/consents', 'post', body);
    }
    /**
     * Streamline credit checks with our secure and easy-to-use credit report API. Get
     * comprehensive reports quickly using a Permanent Account Number (PAN) and the PAN
     * holder's consent, which is verified via a one-time password (OTP).<br><br>This API
     * verifies the OTP entered by your customer.
     *
     *
     * @summary 2. Credit Report - Verify OTP
     * @throws FetchError<400, types.CreditReportVerifyOtpResponse400> Bad Request
     * @throws FetchError<401, types.CreditReportVerifyOtpResponse401> Unauthorised
     * @throws FetchError<403, types.CreditReportVerifyOtpResponse403> Consent Already Granted
     * @throws FetchError<422, types.CreditReportVerifyOtpResponse422> No Record Found
     * @throws FetchError<500, types.CreditReportVerifyOtpResponse500> Internal Server Error
     */
    credit_report_verify_otp(body, metadata) {
        return this.core.fetch('/v1/consents/{consentID}/verify', 'patch', body, metadata);
    }
    /**
     * Streamline credit checks with our secure and easy-to-use credit report API. Get
     * comprehensive reports quickly using a Permanent Account Number (PAN) and the PAN
     * holder's consent, which is verified via a one-time password (OTP).<br><br>This API gets
     * the credit report for the individual.
     *
     *
     * @summary 3. Credit Report - Get Credit Report
     * @throws FetchError<400, types.CreditReportGetCreditReportResponse400> Bad Request
     * @throws FetchError<401, types.CreditReportGetCreditReportResponse401> Unauthorised
     * @throws FetchError<422, types.CreditReportGetCreditReportResponse422> No Record Found
     * @throws FetchError<500, types.CreditReportGetCreditReportResponse500> Internal Server Error
     */
    credit_report_get_credit_report(body) {
        return this.core.fetch('/v1/suppliers/fetch-credit-report', 'post', body);
    }
    /**
     * This API empowers you to generate comprehensive credit reports swiftly using just a
     * Permanent Account Number (PAN).
     *
     *
     * @summary Credit Report
     * @throws FetchError<400, types.CreditReportWithoutConsentResponse400> Bad Request
     * @throws FetchError<401, types.CreditReportWithoutConsentResponse401> Unauthorised
     * @throws FetchError<422, types.CreditReportWithoutConsentResponse422> No Record Found
     * @throws FetchError<500, types.CreditReportWithoutConsentResponse500> Internal Server Error
     */
    credit_report_without_consent(body) {
        return this.core.fetch('/v2/services/credit-report-generation', 'post', body);
    }
    /**
     * Credit Prefill API provides the personal identity data associated with a person's Phone
     * and Name for the purpose of acceleration as part of the onboarding flow.
     *
     *
     * @summary Credit Prefill API
     * @throws FetchError<400, types.CreditPrefillResponse400> Bad Request
     * @throws FetchError<401, types.CreditPrefillResponse401> Unauthorised
     * @throws FetchError<422, types.CreditPrefillResponse422> No Record Found
     * @throws FetchError<500, types.CreditPrefillResponse500> Internal Server Error
     */
    creditPrefill(body) {
        return this.core.fetch('/v2/services/credit-prefill', 'post', body);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
