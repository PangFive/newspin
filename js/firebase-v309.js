"use strict";(globalThis["webpackChunkwheel_of_names_quasar"]=globalThis["webpackChunkwheel_of_names_quasar"]||[]).push([[7708],{9979:(e,t,n)=>{var i=n(9845),r=n(1074),s=n(1976),a=n(8373),o=n(8674),c=n(118);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registered for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is incorrect, malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend.",["unsupported-password-policy-schema-version"]:"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",["password-does-not-meet-requirements"]:"The password does not meet the requirements."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new s.FA("auth","Firebase",d()),g=new a.Vy("@firebase/auth");function v(e,...t){g.logLevel<=a.$b.WARN&&g.warn(`Auth (${r.SDK_VERSION}): ${e}`,...t)}function y(e,...t){g.logLevel<=a.$b.ERROR&&g.error(`Auth (${r.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,...t){throw E(e,...t)}function w(e,...t){return E(e,...t)}function I(e,t,n){const i=Object.assign(Object.assign({},p()),{[t]:n}),r=new s.FA("auth","Firebase",i);return r.create(t,{appName:e.name})}function _(e){return I(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function S(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&b(e,"argument-error"),I(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function E(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return m.create(e,...t)}function T(e,t,...n){if(!e)throw E(t,...n)}function k(e){const t="INTERNAL ASSERTION FAILED: "+e;throw y(t),new Error(t)}function C(e,t){e||k(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function N(){return"http:"===R()||"https:"===R()}function R(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(N()||(0,s.sr)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,s.jZ)()||(0,s.lV)()}get(){return D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){C(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void k("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void k("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void k("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},F=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,i,r={}){return B(e,r,(async()=>{let r={},a={};i&&("GET"===t?a=i:r={body:JSON.stringify(i)});const o=(0,s.Am)(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},r);return(0,s.c1)()||(u.referrerPolicy="no-referrer"),L.fetch()(q(e,e.config.apiHost,n,o),u)}))}async function B(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),t);try{const t=new G(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw z(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw z(e,"user-disabled",s);const o=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw I(e,o,a);b(e,o)}}catch(r){if(r instanceof s.g)throw r;b(e,"network-request-failed",{message:String(r)})}}async function j(e,t,n,i,r={}){const s=await V(e,t,n,i,r);return"mfaPendingCredential"in s&&b(e,"multi-factor-auth-required",{_serverResponse:s}),s}function q(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?O(e.config,r):`${e.config.apiScheme}://${r}`}function K(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class G{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"network-request-failed"))),F.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=w(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return void 0!==e&&void 0!==e.getResponse}function W(e){return void 0!==e&&void 0!==e.enterprise}class H{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return K(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Y(e,t){return V(e,"GET","/v2/recaptchaConfig",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function X(e,t){return V(e,"POST","/v1/accounts:update",t)}async function Z(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e,t=!1){const n=(0,s.Ku)(e),i=await n.getIdToken(t),r=ie(i);T(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const a="object"===typeof r.firebase?r.firebase:void 0,o=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:r,token:i,authTime:ee(ne(r.auth_time)),issuedAtTime:ee(ne(r.iat)),expirationTime:ee(ne(r.exp)),signInProvider:o||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function ne(e){return 1e3*Number(e)}function ie(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return y("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,s.u)(n);return e?JSON.parse(e):(y("Failed to decode base64 JWT payload"),null)}catch(r){return y("Caught error parsing JWT payload as JSON",null===r||void 0===r?void 0:r.toString()),null}}function re(e){const t=ie(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof s.g&&ae(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ae({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ee(this.lastLoginAt),this.creationTime=ee(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(e){var t;const n=e.auth,i=await e.getIdToken(),r=await se(e,Z(n,{idToken:i}));T(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?de(s.providerUserInfo):[],o=he(e.providerData,a),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===o||void 0===o?void 0:o.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ce(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function le(e){const t=(0,s.Ku)(e);await ue(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function he(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function de(e){return e.map((e=>{var{providerId:t}=e,n=(0,o.Tt)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(e,t){const n=await B(e,{},(async()=>{const n=(0,s.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,a=q(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",L.fetch()(a,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pe(e,t){return V(e,"POST","/v2/accounts:revokeToken",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):re(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){T(0!==e.length,"internal-error");const t=re(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(T(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await fe(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new me;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(T("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(T("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new me,this.toJSON())}_performRefresh(){return k("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ve{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=(0,o.Tt)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ce(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await se(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return te(this,e)}reload(){return le(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ve(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ue(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r._isFirebaseServerApp)(this.auth.app))return Promise.reject(_(this.auth));const e=await this.getIdToken();return await se(this,J(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,a,o,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:_}=t;T(y&&_,e,"internal-error");const S=me.fromJSON(this.name,_);T("string"===typeof y,e,"internal-error"),ge(l,e.name),ge(h,e.name),T("boolean"===typeof b,e,"internal-error"),T("boolean"===typeof w,e,"internal-error"),ge(d,e.name),ge(f,e.name),ge(p,e.name),ge(m,e.name),ge(g,e.name),ge(v,e.name);const E=new ve({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return I&&Array.isArray(I)&&(E.providerData=I.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new me;i.updateFromServerResponse(t);const r=new ve({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ue(r),r}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];T(void 0!==i.localId,"internal-error");const r=void 0!==i.providerUserInfo?de(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length),a=new me;a.updateFromIdToken(n);const o=new ve({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ce(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length)};return Object.assign(o,c),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Map;function be(e){C(e instanceof Function,"Expected a class definition");let t=ye.get(e);return t?(C(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ye.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}we.type="NONE";const Ie=we;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t,n){return`firebase:${e}:${t}:${n}`}class Se{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=_e(this.userKey,i.apiKey,r),this.fullPersistenceKey=_e("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ve._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Se(be(Ie),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||be(Ie);const s=_e(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ve._fromJSON(e,t);u!==r&&(a=n),r=u;break}}catch(c){}const o=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(c){}}))),new Se(r,e,n)):new Se(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ae(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Te(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Re(t))return"Blackberry";if(De(t))return"Webos";if(ke(t))return"Safari";if((t.includes("chrome/")||Ce(t))&&!t.includes("edge/"))return"Chrome";if(Ne(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Te(e=(0,s.ZQ)()){return/firefox\//i.test(e)}function ke(e=(0,s.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ce(e=(0,s.ZQ)()){return/crios\//i.test(e)}function Ae(e=(0,s.ZQ)()){return/iemobile/i.test(e)}function Ne(e=(0,s.ZQ)()){return/android/i.test(e)}function Re(e=(0,s.ZQ)()){return/blackberry/i.test(e)}function De(e=(0,s.ZQ)()){return/webos/i.test(e)}function xe(e=(0,s.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Pe(e=(0,s.ZQ)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Oe(e=(0,s.ZQ)()){var t;return xe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Le(){return(0,s.lT)()&&10===document.documentMode}function Me(e=(0,s.ZQ)()){return xe(e)||Ne(e)||De(e)||Re(e)||/windows phone/i.test(e)||Ae(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e,t=[]){let n;switch(e){case"Browser":n=Ee((0,s.ZQ)());break;case"Worker":n=`${Ee((0,s.ZQ)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t={}){return V(e,"GET","/v2/passwordPolicy",U(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=6;class je{constructor(e){var t,n,i,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Be,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,s,a;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(i=o.containsLowercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(r=o.containsUppercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ge(this),this.idTokenSubscription=new Ge(this),this.beforeStateQueue=new Ue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=be(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Se.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Z(this,{idToken:e}),n=await ve._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r._isFirebaseServerApp)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==r||!(null===a||void 0===a?void 0:a.user)||(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(a)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ue(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r._isFirebaseServerApp)(this.app))return Promise.reject(_(this));const t=e?(0,s.Ku)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r._isFirebaseServerApp)(this.app)?Promise.reject(_(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r._isFirebaseServerApp)(this.app)?Promise.reject(_(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(be(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ve(this),t=new je(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new s.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await pe(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&be(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await Se.create(this,[be(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(a,this,"internal-error"),a.then((()=>{s||r(this.currentUser)})),"function"===typeof t){const r=e.addObserver(t,n,i);return()=>{s=!0,r()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&v(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ke(e){return(0,s.Ku)(e)}class Ge{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,s.tD)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ze={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $e(e){ze=e}function We(e){return ze.loadJS(e)}function He(){return ze.recaptchaV2Script}function Qe(){return ze.recaptchaEnterpriseScript}function Ye(){return ze.gapiScript}function Je(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Xe="recaptcha-enterprise",Ze="NO_RECAPTCHA";class et{constructor(e){this.type=Xe,this.auth=Ke(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Y(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new H(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function i(t,n,i){const r=window.grecaptcha;W(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ze)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{n(this.auth).then((n=>{if(!t&&W(window.grecaptcha))i(n,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=Qe();0!==t.length&&(t+=n),We(t).then((()=>{i(n,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function tt(e,t,n,i=!1){const r=new et(e);let s;try{s=await r.verify(n)}catch(o){s=await r.verify(n,!0)}const a=Object.assign({},t);return i?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function nt(e,t,n,i){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await tt(e,t,n,"getOobCode"===n);return i(e,r)}return i(e,t).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await tt(e,t,n,"getOobCode"===n);return i(e,r)}return Promise.reject(r)}))}function it(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(be);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}function rt(e,t,n){const i=Ke(e);T(i._canInitEmulator,i,"emulator-config-failed"),T(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=st(t),{host:a,port:o}=at(t),c=null===o?"":`:${o}`;i.config.emulator={url:`${s}//${a}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ct()}function st(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function at(e){const t=st(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:ot(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:ot(t)}}}function ot(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ct(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return k("not implemented")}_getIdTokenResponse(e){return k("not implemented")}_linkToIdToken(e,t){return k("not implemented")}_getReauthenticationResolver(e){return k("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return V(e,"POST","/v1/accounts:resetPassword",U(e,t))}async function ht(e,t){return V(e,"POST","/v1/accounts:update",t)}async function dt(e,t){return V(e,"POST","/v1/accounts:signUp",t)}async function ft(e,t){return V(e,"POST","/v1/accounts:update",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",U(e,t))}async function mt(e,t){return V(e,"POST","/v1/accounts:sendOobCode",U(e,t))}async function gt(e,t){return mt(e,t)}async function vt(e,t){return mt(e,t)}async function yt(e,t){return mt(e,t)}async function bt(e,t){return mt(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}async function It(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ut{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new _t(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new _t(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nt(e,t,"signInWithPassword",pt);case"emailLink":return wt(e,{email:this._email,oobCode:this._password});default:b(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nt(e,n,"signUpPassword",dt);case"emailLink":return It(e,{idToken:t,email:this._email,oobCode:this._password});default:b(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="http://localhost";class Tt extends ut{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):b("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=(0,o.Tt)(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Tt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return St(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,St(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,St(e,t)}buildRequest(){const e={requestUri:Et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,s.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",U(e,t))}async function Ct(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t))}async function At(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}const Nt={["USER_NOT_FOUND"]:"user-not-found"};async function Rt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,n),Nt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends ut{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Dt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Dt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ct(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return At(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Rt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Dt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pt(e){const t=(0,s.I9)((0,s.hp)(e))["link"],n=t?(0,s.I9)((0,s.hp)(t))["deep_link_id"]:null,i=(0,s.I9)((0,s.hp)(e))["deep_link_id"],r=i?(0,s.I9)((0,s.hp)(i))["link"]:null;return r||i||n||t||e}class Ot{constructor(e){var t,n,i,r,a,o;const c=(0,s.I9)((0,s.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=xt(null!==(i=c["mode"])&&void 0!==i?i:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(r=c["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(a=c["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(o=c["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=Pt(e);try{return new Ot(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{constructor(){this.providerId=Lt.PROVIDER_ID}static credential(e,t){return _t._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ot.parseLink(t);return T(n,"argument-error"),_t._fromEmailAndCode(e,n.code,n.tenantId)}}Lt.PROVIDER_ID="password",Lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Mt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ut extends Ft{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),Tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),Tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ut.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ut.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:a}=e;if(!n&&!i&&!t&&!r)return null;if(!a)return null;try{return new Ut(a)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(o){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ft{constructor(){super("facebook.com")}static credential(e){return Tt._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch(t){return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Vt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt extends Ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tt._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Bt.credential(t,n)}catch(i){return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com",Bt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt extends Ft{constructor(){super("github.com")}static credential(e){return Tt._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch(t){return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com",jt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qt="http://localhost";class Kt extends ut{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return St(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,St(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,St(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new Kt(n,r):null}static _create(e,t){return new Kt(e,t)}buildRequest(){return{requestUri:qt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="saml.";class zt extends Mt{constructor(e){T(e.startsWith(Gt),"argument-error"),super(e)}static credentialFromResult(e){return zt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return zt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Kt.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Kt._create(n,t)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ft{constructor(){super("twitter.com")}static credential(e,t){return Tt._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return $t.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wt(e,t){return j(e,"POST","/v1/accounts:signUp",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.TWITTER_SIGN_IN_METHOD="twitter.com",$t.PROVIDER_ID="twitter.com";class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ve._fromIdTokenResponse(e,n,i),s=Qt(n),a=new Ht({user:r,providerId:s,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Qt(n);return new Ht({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Qt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e){var t;if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(_(e));const n=Ke(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ht({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Wt(n,{returnSecureToken:!0}),s=await Ht._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends s.g{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Jt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Jt(e,t,n,i)}}function Xt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Jt._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){const n=(0,s.Ku)(e);await nn(!0,n,t);const{providerUserInfo:i}=await X(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),r=Zt(i||[]);return n.providerData=n.providerData.filter((e=>r.has(e.providerId))),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function tn(e,t,n=!1){const i=await se(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ht._forOperation(e,"link",i)}async function nn(e,t,n){await ue(t);const i=Zt(t.providerData),r=!1===e?"provider-already-linked":"no-such-provider";T(i.has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t,n=!1){const{auth:i}=e;if((0,r._isFirebaseServerApp)(i.app))return Promise.reject(_(i));const s="reauthenticate";try{const r=await se(e,Xt(i,s,t,e),n);T(r.idToken,i,"internal-error");const a=ie(r.idToken);T(a,i,"internal-error");const{sub:o}=a;return T(e.uid===o,i,"user-mismatch"),Ht._forOperation(e,s,r)}catch(a){throw"auth/user-not-found"===(null===a||void 0===a?void 0:a.code)&&b(i,"user-mismatch"),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t,n=!1){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(_(e));const i="signIn",s=await Xt(e,i,t),a=await Ht._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(a.user),a}async function an(e,t){return sn(Ke(e),t)}async function on(e,t){const n=(0,s.Ku)(e);return await nn(!1,n,t.providerId),tn(n,t)}async function cn(e,t){return rn((0,s.Ku)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(e,t){return j(e,"POST","/v1/accounts:signInWithCustomToken",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(e,t){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(_(e));const n=Ke(e),i=await un(n,{token:t,returnSecureToken:!0}),s=await Ht._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?dn._fromServerResponse(e,t):"totpInfo"in t?fn._fromServerResponse(e,t):b(e,"internal-error")}}class dn extends hn{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new dn(t)}}class fn extends hn{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new fn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(e,t,n){var i;T((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e){const t=Ke(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function gn(e,t,n){const i=Ke(e),r={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&pn(i,r,n),await nt(i,r,"getOobCode",vt)}async function vn(e,t,n){await lt((0,s.Ku)(e),{oobCode:t,newPassword:n}).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&mn(e),t}))}async function yn(e,t){await ft((0,s.Ku)(e),{oobCode:t})}async function bn(e,t){const n=(0,s.Ku)(e),i=await lt(n,{oobCode:t}),r=i.requestType;switch(T(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(i.mfaInfo,n,"internal-error");default:T(i.email,n,"internal-error")}let a=null;return i.mfaInfo&&(a=hn._fromServerResponse(Ke(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:a},operation:r}}async function wn(e,t){const{data:n}=await bn((0,s.Ku)(e),t);return n.email}async function In(e,t,n){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(_(e));const i=Ke(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},a=nt(i,s,"signUpPassword",Wt),o=await a.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&mn(e),t})),c=await Ht._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function _n(e,t,n){return(0,r._isFirebaseServerApp)(e.app)?Promise.reject(_(e)):an((0,s.Ku)(e),Lt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&mn(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(e,t,n){const i=Ke(e),r={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function s(e,t){T(t.handleCodeInApp,i,"argument-error"),t&&pn(i,e,t)}s(r,n),await nt(i,r,"getOobCode",yt)}function En(e,t){const n=Ot.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Tn(e,t,n){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(_(e));const i=(0,s.Ku)(e),a=Lt.credentialWithLink(t,n||A());return T(a._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),an(i,a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t){return V(e,"POST","/v1/accounts:createAuthUri",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t){const n=N()?A():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:r}=await kn((0,s.Ku)(e),i);return r||[]}async function An(e,t){const n=(0,s.Ku)(e),i=await e.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};t&&pn(n.auth,r,t);const{email:a}=await gt(n.auth,r);a!==e.email&&await e.reload()}async function Nn(e,t,n){const i=(0,s.Ku)(e),r=await e.getIdToken(),a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:t};n&&pn(i.auth,a,n);const{email:o}=await bt(i.auth,a);o!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,s.Ku)(e),r=await i.getIdToken(),a={idToken:r,displayName:t,photoUrl:n,returnSecureToken:!0},o=await se(i,Rn(i.auth,a));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function xn(e,t){const n=(0,s.Ku)(e);return(0,r._isFirebaseServerApp)(n.auth.app)?Promise.reject(_(n.auth)):On(n,t,null)}function Pn(e,t){return On((0,s.Ku)(e),null,t)}async function On(e,t,n){const{auth:i}=e,r=await e.getIdToken(),s={idToken:r,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const a=await se(e,ht(i,s));await e._updateTokensIfNecessary(a,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null===e||void 0===e?void 0:e.idToken)){const i=null===(n=null===(t=ie(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const e="anonymous"!==i&&"custom"!==i?i:null;return new Mn(s,e)}}if(!i)return null;switch(i){case"facebook.com":return new Un(s,r);case"github.com":return new Vn(s,r);case"google.com":return new Bn(s,r);case"twitter.com":return new jn(s,r,e.screenName||null);case"custom":case"anonymous":return new Mn(s,null);default:return new Mn(s,i,r)}}class Mn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Fn extends Mn{constructor(e,t,n,i){super(e,t,n),this.username=i}}class Un extends Mn{constructor(e,t){super(e,"facebook.com",t)}}class Vn extends Fn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class Bn extends Mn{constructor(e,t){super(e,"google.com",t)}}class jn extends Fn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function qn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Ln(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new Kn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Kn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Kn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Kn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ke(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>hn._fromServerResponse(n,e)));T(i.mfaPendingCredential,n,"internal-error");const s=Kn._fromMfaPendingCredential(i.mfaPendingCredential);return new Gn(s,r,(async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const a=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Ht._fromIdTokenResponse(n,t.operationType,a);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Ht._forOperation(t.user,t.operationType,a);default:b(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function zn(e,t){var n;const i=(0,s.Ku)(e),r=t;return T(t.customData.operationType,i,"argument-error"),T(null===(n=r.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Gn._fromError(i,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}function Wn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}function Hn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}function Qn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}function Yn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",U(e,t))}class Jn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>hn._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Jn(e)}async getSession(){return Kn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,i=await this.getSession(),r=await se(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await se(this.user,Yn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(i){throw i}}}const Xn=new WeakMap;function Zn(e){const t=(0,s.Ku)(e);return Xn.has(t)||Xn.set(t,Jn._fromUser(t)),Xn.get(t)}const ei="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ei,"1"),this.storage.removeItem(ei),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=1e3,ii=10;class ri extends ti{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Me(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Le()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ii):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),ni)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ri.type="LOCAL";const si=ri;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends ti{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ai.type="SESSION";const oi=ai;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ui(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(s).map((async e=>e(t.origin,r))),o=await ci(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function li(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ui.receivers=[];class hi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((a,o)=>{const c=li("",20);i.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(u),clearTimeout(r),o(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return window}function fi(e){di().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){return"undefined"!==typeof di()["WorkerGlobalScope"]&&"function"===typeof di()["importScripts"]}async function mi(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function gi(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function vi(){return pi()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="firebaseLocalStorageDb",bi=1,wi="firebaseLocalStorage",Ii="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Si(e,t){return e.transaction([wi],t?"readwrite":"readonly").objectStore(wi)}function Ei(){const e=indexedDB.deleteDatabase(yi);return new _i(e).toPromise()}function Ti(){const e=indexedDB.open(yi,bi);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(wi,{keyPath:Ii})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(wi)?t(n):(n.close(),await Ei(),t(await Ti()))}))}))}async function ki(e,t,n){const i=Si(e,!0).put({[Ii]:t,value:n});return new _i(i).toPromise()}async function Ci(e,t){const n=Si(e,!1).get(t),i=await new _i(n).toPromise();return void 0===i?null:i.value}function Ai(e,t){const n=Si(e,!0).delete(t);return new _i(n).toPromise()}const Ni=800,Ri=3;class Di{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ti()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Ri)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ui._getInstance(vi()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await mi(),!this.activeServiceWorker)return;this.sender=new hi(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&gi()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ti();return await ki(e,ei,"1"),await Ai(e,ei),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ki(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Ci(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ai(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Si(e,!1).getAll();return new _i(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ni)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Di.type="LOCAL";const xi=Di;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",U(e,t))}function Oi(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}function Li(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=500,Fi=6e4,Ui=1e12;class Vi{constructor(e){this.auth=e,this.counter=Ui,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Bi(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Ui;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Ui;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Ui;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Bi{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof e?document.getElementById(e):e;T(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=ji(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Fi)}),Mi))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ji(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=Je("rcb"),Ki=new P(3e4,6e4);class Gi{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=di().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return T(zi(t),e,"argument-error"),this.shouldResolveImmediately(t)&&$(di().grecaptcha)?Promise.resolve(di().grecaptcha):new Promise(((n,i)=>{const r=di().setTimeout((()=>{i(w(e,"network-request-failed"))}),Ki.get());di()[qi]=()=>{di().clearTimeout(r),delete di()[qi];const s=di().grecaptcha;if(!s||!$(s))return void i(w(e,"internal-error"));const a=s.render;s.render=(e,t)=>{const n=a(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};const a=`${He()}?${(0,s.Am)({onload:qi,render:"explicit",hl:t})}`;We(a).catch((()=>{clearTimeout(r),i(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=di().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zi(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class $i{async load(e){return new Vi(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="recaptcha",Hi={theme:"light",type:"image"};class Qi{constructor(e,t,n=Object.assign({},Hi)){this.parameters=n,this.type=Wi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ke(e),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof t?document.getElementById(t):t;T(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new $i:new Gi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=di()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(N()&&!pi(),this.auth,"internal-error"),await Yi(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Q(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Yi(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Dt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Xi(e,t,n){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(_(e));const i=Ke(e),a=await tr(i,t,(0,s.Ku)(n));return new Ji(a,(e=>an(i,e)))}async function Zi(e,t,n){const i=(0,s.Ku)(e);await nn(!1,i,"phone");const r=await tr(i.auth,t,(0,s.Ku)(n));return new Ji(r,(e=>on(i,e)))}async function er(e,t,n){const i=(0,s.Ku)(e);if((0,r._isFirebaseServerApp)(i.auth.app))return Promise.reject(_(i.auth));const a=await tr(i.auth,t,(0,s.Ku)(n));return new Ji(a,(e=>cn(i,e)))}async function tr(e,t,n){var i;const r=await n.verify();try{let s;if(T("string"===typeof r,e,"argument-error"),T(n.type===Wi,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await $n(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const a=await Pi(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await kt(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}async function nr(e,t){const n=(0,s.Ku)(e);if((0,r._isFirebaseServerApp)(n.auth.app))return Promise.reject(_(n.auth));await tn(n,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.providerId=ir.PROVIDER_ID,this.auth=Ke(e)}verifyPhoneNumber(e,t){return tr(this.auth,e,(0,s.Ku)(t))}static credential(e,t){return Dt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ir.credentialFromTaggedObject(t)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Dt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rr(e,t){return t?be(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir.PROVIDER_ID="phone",ir.PHONE_SIGN_IN_METHOD="phone";class sr extends ut{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return St(e,this._buildIdpRequest())}_linkToIdToken(e,t){return St(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return St(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ar(e){return sn(e.auth,new sr(e),e.bypassAuthState)}function or(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),rn(n,new sr(e),e.bypassAuthState)}async function cr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),tn(n,new sr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ar;case"linkViaPopup":case"linkViaRedirect":return cr;case"reauthViaPopup":case"reauthViaRedirect":return or;default:b(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new P(2e3,1e4);async function hr(e,t,n){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(w(e,"operation-not-supported-in-this-environment"));const i=Ke(e);S(e,t,Mt);const s=rr(i,n),a=new pr(i,"signInViaPopup",t,s);return a.executeNotNull()}async function dr(e,t,n){const i=(0,s.Ku)(e);if((0,r._isFirebaseServerApp)(i.auth.app))return Promise.reject(w(i.auth,"operation-not-supported-in-this-environment"));S(i.auth,t,Mt);const a=rr(i.auth,n),o=new pr(i.auth,"reauthViaPopup",t,a,i);return o.executeNotNull()}async function fr(e,t,n){const i=(0,s.Ku)(e);S(i.auth,t,Mt);const r=rr(i.auth,n),a=new pr(i.auth,"linkViaPopup",t,r,i);return a.executeNotNull()}class pr extends ur{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=li();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,lr.get())};e()}}pr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mr="pendingRedirect",gr=new Map;class vr extends ur{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=gr.get(this.auth._key());if(!e){try{const t=await yr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}gr.set(this.auth._key(),e)}return this.bypassAuthState||gr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function yr(e,t){const n=Sr(t),i=_r(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function br(e,t){return _r(e)._set(Sr(t),"true")}function wr(){gr.clear()}function Ir(e,t){gr.set(e._key(),t)}function _r(e){return be(e._redirectPersistence)}function Sr(e){return _e(mr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t,n){return Tr(e,t,n)}async function Tr(e,t,n){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(_(e));const i=Ke(e);S(e,t,Mt),await i._initializationPromise;const s=rr(i,n);return await br(s,i),s._openRedirect(i,t,"signInViaRedirect")}function kr(e,t,n){return Cr(e,t,n)}async function Cr(e,t,n){const i=(0,s.Ku)(e);if(S(i.auth,t,Mt),(0,r._isFirebaseServerApp)(i.auth.app))return Promise.reject(_(i.auth));await i.auth._initializationPromise;const a=rr(i.auth,n);await br(a,i.auth);const o=await xr(i);return a._openRedirect(i.auth,t,"reauthViaRedirect",o)}function Ar(e,t,n){return Nr(e,t,n)}async function Nr(e,t,n){const i=(0,s.Ku)(e);S(i.auth,t,Mt),await i.auth._initializationPromise;const r=rr(i.auth,n);await nn(!1,i,t.providerId),await br(r,i.auth);const a=await xr(i);return r._openRedirect(i.auth,t,"linkViaRedirect",a)}async function Rr(e,t){return await Ke(e)._initializationPromise,Dr(e,t,!1)}async function Dr(e,t,n=!1){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(_(e));const i=Ke(e),s=rr(i,t),a=new vr(i,s,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function xr(e){const t=li(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=6e5;class Or{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Fr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Mr(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pr&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lr(e))}saveEventToCache(e){this.cachedEventUids.add(Lr(e)),this.lastProcessedEventTime=Date.now()}}function Lr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Mr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Fr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Br=/^https?/;async function jr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ur(e);for(const i of t)try{if(qr(i))return}catch(n){}b(e,"unauthorized-domain")}function qr(e){const t=A(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Br.test(n))return!1;if(Vr.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new P(3e4,6e4);function Gr(){const e=di().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function zr(e){return new Promise(((t,n)=>{var i,r,s;function a(){Gr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gr(),n(w(e,"network-request-failed"))},timeout:Kr.get()})}if(null===(r=null===(i=di().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=di().gapi)||void 0===s?void 0:s.load)){const t=Je("iframefcb");return di()[t]=()=>{gapi.load?a():n(w(e,"network-request-failed"))},We(`${Ye()}?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw $r=null,e}))}let $r=null;function Wr(e){return $r=$r||zr(e),$r}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new P(5e3,15e3),Qr="__/auth/iframe",Yr="emulator/auth/iframe",Jr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zr(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Yr):`https://${e.config.authDomain}/${Qr}`,i={apiKey:t.apiKey,appName:e.name,v:r.SDK_VERSION},a=Xr.get(e.config.apiHost);a&&(i.eid=a);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${(0,s.Am)(i).slice(1)}`}async function es(e){const t=await Wr(e),n=di().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:Zr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jr,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=w(e,"network-request-failed"),s=di().setTimeout((()=>{i(r)}),Hr.get());function a(){di().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ns=500,is=600,rs="_blank",ss="http://localhost";class as{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function os(e,t,n,i=ns,r=is){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ts),{width:i.toString(),height:r.toString(),top:a,left:o}),l=(0,s.ZQ)().toLowerCase();n&&(c=Ce(l)?rs:n),Te(l)&&(t=t||ss,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Oe(l)&&"_self"!==c)return cs(t||"",c),new as(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new as(d)}function cs(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="__/auth/handler",ls="emulator/auth/handler",hs=encodeURIComponent("fac");async function ds(e,t,n,i,a,o){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:r.SDK_VERSION,eventId:a};if(t instanceof Mt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,s.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))c[e]=t}if(t instanceof Ft){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${hs}=${encodeURIComponent(l)}`:"";return`${fs(e)}?${(0,s.Am)(u).slice(1)}${h}`}function fs({config:e}){return e.emulator?O(e,ls):`https://${e.authDomain}/${us}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="webStorageSupport";class ms{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oi,this._completeRedirectFn=Dr,this._overrideRedirectResult=Ir}async _openPopup(e,t,n,i){var r;C(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await ds(e,t,n,A(),i);return os(e,s,li())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await ds(e,t,n,A(),i);return fi(r),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await es(e),n=new Or(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ps,{type:ps},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[ps];void 0!==r&&t(!!r),b(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Me()||ke()||xe()}}const gs=ms;class vs{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return k("unexpected MultiFactorSessionType")}}}class ys extends vs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ys(e)}_finalizeEnroll(e,t,n){return Wn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Oi(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bs{constructor(){}static assertion(e){return ys._fromCredential(e)}}bs.FACTOR_ID="phone";class ws{static assertionForEnrollment(e,t){return Is._fromSecret(e,t)}static assertionForSignIn(e,t){return Is._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;T("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const i=await Hn(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return _s._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}ws.FACTOR_ID="totp";class Is extends vs{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Is(t,void 0,e)}static _fromEnrollmentId(e,t){return new Is(t,e)}async _finalizeEnroll(e,t,n){return T("undefined"!==typeof this.secret,e,"argument-error"),Qn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){T(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Li(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class _s{constructor(e,t,n,i,r,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new _s(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(Ss(e)||Ss(t))&&(i=!0),i&&(Ss(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ss(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ss(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Es="@firebase/auth",Ts="1.7.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function As(e){(0,r._registerComponent)(new c.uA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;T(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fe(e)},u=new qe(i,r,s,c);return it(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,r._registerComponent)(new c.uA("auth-internal",(e=>{const t=Ke(e.getProvider("auth").getImmediate());return(e=>new ks(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(Es,Ts,Cs(e)),(0,r.registerVersion)(Es,Ts,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=300;(0,s.XA)("authIdTokenMaxAge");function Rs(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ds(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e({loadJS(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Rs().appendChild(i)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),As("Browser");const xs=2e3;async function Ps(e,t,n){var i;const{BuildInfo:r}=Ds();C(t.sessionId,"AuthEvent did not contain a session ID");const s=await Us(t.sessionId),a={};return xe()?a["ibi"]=r.packageName:Ne()?a["apn"]=r.packageName:b(e,"operation-not-supported-in-this-environment"),r.displayName&&(a["appDisplayName"]=r.displayName),a["sessionId"]=s,ds(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,a)}async function Os(e){const{BuildInfo:t}=Ds(),n={};xe()?n.iosBundleId=t.packageName:Ne()?n.androidPackageName=t.packageName:b(e,"operation-not-supported-in-this-environment"),await Ur(e,n)}function Ls(e){const{cordova:t}=Ds();return new Promise((n=>{t.plugins.browsertab.isAvailable((i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,Pe()?"_blank":"_system","location=yes"),n(r)}))}))}async function Ms(e,t,n){const{cordova:i}=Ds();let r=()=>{};try{await new Promise(((s,a)=>{let o=null;function c(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){o||(o=window.setTimeout((()=>{a(w(e,"redirect-cancelled-by-user"))}),xs))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),Ne()&&document.addEventListener("visibilitychange",l,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),o&&window.clearTimeout(o)}}))}finally{r()}}function Fs(e){var t,n,i,r,s,a,o,c,u,l;const h=Ds();T("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T("function"===typeof(null===(s=null===(r=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(c=null===(o=null===(a=null===h||void 0===h?void 0:h.cordova)||void 0===a?void 0:a.plugins)||void 0===o?void 0:o.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Us(e){const t=Vs(e),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return i.map((e=>e.toString(16).padStart(2,"0"))).join("")}function Vs(e){if(C(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=20;class js extends Or{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInitialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function qs(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:$s(),postBody:null,tenantId:e.tenantId,error:w(e,"no-auth-event")}}function Ks(e,t){return Ws()._set(Hs(e),t)}async function Gs(e){const t=await Ws()._get(Hs(e));return t&&await Ws()._remove(Hs(e)),t}function zs(e,t){var n,i;const r=Ys(t);if(r.includes("/__/auth/callback")){const t=Js(r),s=t["firebaseError"]?Qs(decodeURIComponent(t["firebaseError"])):null,a=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],o=a?w(a):null;return o?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:o,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function $s(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Bs;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Ws(){return be(si)}function Hs(e){return _e("authEvent",e.config.apiKey,e.name)}function Qs(e){try{return JSON.parse(e)}catch(t){return null}}function Ys(e){const t=Js(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,i=Js(n)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Js(r)["link"];return s||r||i||n||e}function Js(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,s.I9)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=500;class Zs{constructor(){this._redirectPersistence=oi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Dr,this._overrideRedirectResult=Ir}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new js(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){b(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){Fs(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),wr(),await this._originValidation(e);const s=qs(e,n,i);await Ks(e,s);const a=await Ps(e,s,t),o=await Ls(a);return Ms(e,r,o)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Os(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Ds(),s=setTimeout((async()=>{await Gs(e),t.onEvent(ta())}),Xs),a=async n=>{clearTimeout(s);const i=await Gs(e);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=zs(i,n["url"])),t.onEvent(r||ta())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,a);const o=i,c=`${r.packageName.toLowerCase()}://`;Ds().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&a({url:e}),"function"===typeof o)try{o(e)}catch(t){console.error(t)}}}}const ea=Zs;function ta(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:w("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e,t){Ke(e)._logFramework(t)}var ia="@firebase/auth-compat",ra="0.5.14";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sa=1e3;function aa(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function oa(){return"http:"===aa()||"https:"===aa()}function ca(e=(0,s.ZQ)()){return!("file:"!==aa()&&"ionic:"!==aa()&&"capacitor:"!==aa()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function ua(){return(0,s.lV)()||(0,s.Ll)()}function la(){return(0,s.lT)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function ha(e=(0,s.ZQ)()){return/Edge\/\d+/.test(e)}function da(e=(0,s.ZQ)()){return la()||ha(e)}function fa(){try{const e=self.localStorage,t=li();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!da()||(0,s.zW)()}catch(e){return pa()&&(0,s.zW)()}return!1}function pa(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function ma(){return(oa()||(0,s.sr)()||ca())&&!ua()&&fa()&&!pa()}function ga(){return ca()&&"undefined"!==typeof document}async function va(){return!!ga()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),sa);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function ya(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba={LOCAL:"local",NONE:"none",SESSION:"session"},wa=T,Ia="persistence";function _a(e,t){wa(Object.values(ba).includes(t),e,"invalid-persistence-type"),(0,s.lV)()?wa(t!==ba.SESSION,e,"unsupported-persistence-type"):(0,s.Ll)()?wa(t===ba.NONE,e,"unsupported-persistence-type"):pa()?wa(t===ba.NONE||t===ba.LOCAL&&(0,s.zW)(),e,"unsupported-persistence-type"):wa(t===ba.NONE||fa(),e,"unsupported-persistence-type")}async function Sa(e){await e._initializationPromise;const t=Ta(),n=_e(Ia,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Ea(e,t){const n=Ta();if(!n)return[];const i=_e(Ia,e,t),r=n.getItem(i);switch(r){case ba.NONE:return[Ie];case ba.LOCAL:return[xi,oi];case ba.SESSION:return[oi];default:return[]}}function Ta(){var e;try{return(null===(e=ya())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=T;class Ca{constructor(){this.browserResolver=be(gs),this.cordovaResolver=be(ea),this.underlyingResolver=null,this._redirectPersistence=oi,this._completeRedirectFn=Dr,this._overrideRedirectResult=Ir}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ga()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ka(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await va();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(e){return e.unwrap()}function Na(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e){return xa(e)}function Da(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new La(e,zn(e,t))}else if(i){const e=xa(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function xa(e){const{_tokenResponse:t}=e instanceof s.g?e.customData:e;if(!t)return null;if(!(e instanceof s.g)&&"temporaryProof"in t&&"phoneNumber"in t)return ir.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let i;switch(n){case u.GOOGLE:i=Bt;break;case u.FACEBOOK:i=Vt;break;case u.GITHUB:i=jt;break;case u.TWITTER:i=$t;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:a,nonce:o}=t;return r||s||e||a?a?n.startsWith("saml.")?Kt._create(n,a):Tt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:r}):new Ut(n).credential({idToken:e,accessToken:r,rawNonce:o}):null}return e instanceof s.g?i.credentialFromError(e):i.credentialFromResult(e)}function Pa(e,t){return t.catch((t=>{throw t instanceof s.g&&Da(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:Ra(e),additionalUserInfo:qn(e),user:Ma.getOrCreate(n)}}))}async function Oa(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>Pa(e,n.confirm(t))}}class La{constructor(e,t){this.resolver=t,this.auth=Na(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Pa(Aa(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this._delegate=e,this.multiFactor=Zn(e)}static getOrCreate(e){return Ma.USER_MAP.has(e)||Ma.USER_MAP.set(e,new Ma(e)),Ma.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Pa(this.auth,on(this._delegate,e))}async linkWithPhoneNumber(e,t){return Oa(this.auth,Zi(this._delegate,e,t))}async linkWithPopup(e){return Pa(this.auth,fr(this._delegate,e,Ca))}async linkWithRedirect(e){return await Sa(Ke(this.auth)),Ar(this._delegate,e,Ca)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Pa(this.auth,cn(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Oa(this.auth,er(this._delegate,e,t))}reauthenticateWithPopup(e){return Pa(this.auth,dr(this._delegate,e,Ca))}async reauthenticateWithRedirect(e){return await Sa(Ke(this.auth)),kr(this._delegate,e,Ca)}sendEmailVerification(e){return An(this._delegate,e)}async unlink(e){return await en(this._delegate,e),this}updateEmail(e){return xn(this._delegate,e)}updatePassword(e){return Pn(this._delegate,e)}updatePhoneNumber(e){return nr(this._delegate,e)}updateProfile(e){return Dn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Nn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ma.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fa=T;class Ua{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Fa(n,"invalid-api-key",{appName:e.name}),Fa(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?Ca:void 0;this._delegate=t.initialize({options:{persistence:Ba(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ma.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){rt(this._delegate,e,t)}applyActionCode(e){return yn(this._delegate,e)}checkActionCode(e){return bn(this._delegate,e)}confirmPasswordReset(e,t){return vn(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Pa(this._delegate,In(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Cn(this._delegate,e)}isSignInWithEmailLink(e){return En(this._delegate,e)}async getRedirectResult(){Fa(ma(),this._delegate,"operation-not-supported-in-this-environment");const e=await Rr(this._delegate,Ca);return e?Pa(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){na(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=Va(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=Va(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return Sn(this._delegate,e,t)}sendPasswordResetEmail(e,t){return gn(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(_a(this._delegate,e),e){case ba.SESSION:t=oi;break;case ba.LOCAL:const e=await be(xi)._isAvailable();t=e?xi:si;break;case ba.NONE:t=Ie;break;default:return b("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Pa(this._delegate,Yt(this._delegate))}signInWithCredential(e){return Pa(this._delegate,an(this._delegate,e))}signInWithCustomToken(e){return Pa(this._delegate,ln(this._delegate,e))}signInWithEmailAndPassword(e,t){return Pa(this._delegate,_n(this._delegate,e,t))}signInWithEmailLink(e,t){return Pa(this._delegate,Tn(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Oa(this._delegate,Xi(this._delegate,e,t))}async signInWithPopup(e){return Fa(ma(),this._delegate,"operation-not-supported-in-this-environment"),Pa(this._delegate,hr(this._delegate,e,Ca))}async signInWithRedirect(e){return Fa(ma(),this._delegate,"operation-not-supported-in-this-environment"),await Sa(this._delegate),Er(this._delegate,e,Ca)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return wn(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Va(e,t,n){let i=e;"function"!==typeof e&&({next:i,error:t,complete:n}=e);const r=i,s=e=>r(e&&Ma.getOrCreate(e));return{next:s,error:t,complete:n}}function Ba(e,t){const n=Ea(e,t);if("undefined"===typeof self||n.includes(xi)||n.push(xi),"undefined"!==typeof window)for(const i of[si,oi])n.includes(i)||n.push(i);return n.includes(Ie)||n.push(Ie),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ua.Persistence=ba;class ja{constructor(){this.providerId="phone",this._delegate=new ir(Aa(i.A.auth()))}static credential(e,t){return ir.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ja.PHONE_SIGN_IN_METHOD=ir.PHONE_SIGN_IN_METHOD,ja.PROVIDER_ID=ir.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qa=T;class Ka{constructor(e,t,n=i.A.app()){var r;qa(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Qi(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="auth-compat";function za(e){e.INTERNAL.registerComponent(new c.uA(Ga,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Ua(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:Lt,FacebookAuthProvider:Vt,GithubAuthProvider:jt,GoogleAuthProvider:Bt,OAuthProvider:Ut,SAMLAuthProvider:zt,PhoneAuthProvider:ja,PhoneMultiFactorGenerator:bs,RecaptchaVerifier:Ka,TwitterAuthProvider:$t,Auth:Ua,AuthCredential:ut,Error:s.g}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(ia,ra)}za(i.A)},4753:(e,t,n)=>{var i=n(9845),r=n(1074),s=n(118),a=n(8373),o=n(1976),c=n(8890),u=n(1214);const l="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let d="10.13.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new a.Vy("@firebase/firestore");function p(){return f.logLevel}function m(e){f.setLogLevel(e)}function g(e,...t){if(f.logLevel<=a.$b.DEBUG){const n=t.map(b);f.debug(`Firestore (${d}): ${e}`,...n)}}function v(e,...t){if(f.logLevel<=a.$b.ERROR){const n=t.map(b);f.error(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=a.$b.WARN){const n=t.map(b);f.warn(`Firestore (${d}): ${e}`,...n)}}function b(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e="Unexpected state"){const t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw v(t),new Error(t)}function I(e,t){e||w()}function _(e,t){e||w()}function S(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends o.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(h.UNAUTHENTICATED)))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class R{constructor(e){this.t=e,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new k;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new k,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new k)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(I("string"==typeof t.accessToken),new C(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return I(null===e||"string"==typeof e),new h(e)}}class D{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=h.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class x{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new D(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(h.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class P{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,g("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?i(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(I("string"==typeof e.token),this.R=e.token,new P(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=L(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function F(e,t){return e<t?-1:e>t?1:0}function U(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}function V(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return B.fromMillis(Date.now())}static fromDate(e){return B.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new B(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new B(0,0))}static max(){return new j(new B(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&w(),void 0===n?n=e.length-t:n>e.length-t&&w(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class K extends q{construct(e,t,n){return new K(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new K(t)}static emptyPath(){return new K([])}}const G=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends q{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return G.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(K.fromString(e))}static fromName(e){return new $(K.fromString(e).popFirst(5))}static empty(){return new $(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===K.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return K.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new K(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function H(e){return e.fields.find((e=>2===e.kind))}function Q(e){return e.fields.filter((e=>2!==e.kind))}W.UNKNOWN_ID=-1;class Y{constructor(e,t){this.fieldPath=e,this.kind=t}}class J{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new J(0,ee.min())}}function X(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=j.fromTimestamp(1e9===i?new B(n+1,0):new B(n,i));return new ee(r,$.empty(),t)}function Z(e){return new ee(e.readTime,e.key,-1)}class ee{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ee(j.min(),$.empty(),-1)}static max(){return new ee(j.max(),$.empty(),-1)}}function te(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=$.comparator(e.documentKey,t.documentKey),0!==n?n:F(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ne="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ie{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==ne)throw e;g("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new se(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof se?t:se.resolve(t)}catch(e){return se.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):se.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):se.reject(t)}static resolve(e){return new se(((t,n)=>{t(e)}))}static reject(e){return new se(((t,n)=>{n(e)}))}static waitFor(e){return new se(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=se.resolve(!1);for(const n of e)t=t.next((e=>e?se.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new se(((n,i)=>{const r=e.length,s=new Array(r);let a=0;for(let o=0;o<r;o++){const c=o;t(e[c]).next((e=>{s[c]=e,++a,a===r&&n(s)}),(e=>i(e)))}}))}static doWhile(e,t){return new se(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new k,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new le(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=me(t.target.error);this.V.reject(new le(e,n))}}static open(e,t,n,i){try{return new ae(t,e.transaction(i,n))}catch(e){throw new le(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(g("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new de(t)}}class oe{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===oe.S((0,o.ZQ)())&&v("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return g("SimpleDb","Removing database:",e),fe(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,o.zW)())return!1;if(oe.v())return!0;const e=(0,o.ZQ)(),t=oe.S(e),n=0<t&&t<10,i=ce(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||r)}static v(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.C)}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new le(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new T(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new T(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new le(e,i))},i.onupgradeneeded=e=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.O(t,i.transaction,e.oldVersion,this.version).next((()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const r="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.M(e);const t=ae.open(this.db,e,r?"readonly":"readwrite",n),s=i(t).next((e=>(t.g(),e))).catch((e=>(t.abort(e),se.reject(e)))).toPromise();return s.catch((()=>{})),await t.m,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(g("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ce(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class ue{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return fe(this.B.delete())}}class le extends T{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function he(e){return"IndexedDbTransactionError"===e.name}class de{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(g("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),fe(n)}add(e){return g("SimpleDb","ADD",this.store.name,e,e),fe(this.store.add(e))}get(e){return fe(this.store.get(e)).next((t=>(void 0===t&&(t=null),g("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return g("SimpleDb","DELETE",this.store.name,e),fe(this.store.delete(e))}count(){return g("SimpleDb","COUNT",this.store.name),fe(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if("function"==typeof i.getAll){const e=i.getAll(n.range);return new se(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}{const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}}G(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new se(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}j(e,t){g("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,((e,t,n)=>n.delete()))}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new se(((n,i)=>{t.onerror=e=>{const t=me(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next((e=>{e?i.continue():n()})):n()}}))}W(e,t){const n=[];return new se(((i,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{const r=e.target.result;if(!r)return void i();const s=new ue(r),a=t(r.primaryKey,r.value,s);if(a instanceof se){const e=a.catch((e=>(s.done(),se.reject(e))));n.push(e)}s.isDone?i():null===s.K?r.continue():r.continue(s.K)}})).next((()=>se.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function fe(e){return new se(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=me(e.target.error);n(t)}}))}let pe=!1;function me(e){const t=oe.S((0,o.ZQ)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return pe||(pe=!0,setTimeout((()=>{throw e}),0)),e}}return e}class ge{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}X(e){g("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{g("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){he(e)?g("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await re(e)}await this.X(6e4)}))}}class ve{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.te(t,e)))}te(e,t){const n=new Set;let i=t,r=!0;return se.doWhile((()=>!0===r&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return g("IndexBackfiller",`Processing collection: ${t}`),this.ne(e,t,i).next((e=>{i-=e,n.add(t)}));r=!1})))).next((()=>t-i))}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next((n=>{const r=n.changes;return this.localStore.indexManager.updateIndexEntries(e,r).next((()=>this.re(i,n))).next((n=>(g("IndexBackfiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>r.size))}))))}re(e,t){let n=e;return t.changes.forEach(((e,t)=>{const i=Z(t);te(i,n)>0&&(n=i)})),new ee(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function be(e){return null==e}function we(e){return 0===e&&1/e==-1/0}function Ie(e){return"number"==typeof e&&Number.isInteger(e)&&!we(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ee(t)),t=Se(e.get(n),t);return Ee(t)}function Se(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const t=e.charAt(r);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Ee(e){return e+""}function Te(e){const t=e.length;if(I(t>=2),2===t)return I(""===e.charAt(0)&&""===e.charAt(1)),K.emptyPath();const n=t-2,i=[];let r="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&w(),e.charAt(t+1)){case"":const n=e.substring(s,t);let a;0===r.length?a=n:(r+=n,a=r,r=""),i.push(a);break;case"":r+=e.substring(s,t),r+="\0";break;case"":r+=e.substring(s,t+1);break;default:w()}s=t+2}return new K(i)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.oe=-1;const ke=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t){return[e,_e(t)]}function Ae(e,t,n){return[e,_e(t),n]}const Ne={},Re=["prefixPath","collectionGroup","readTime","documentId"],De=["prefixPath","collectionGroup","documentId"],xe=["collectionGroup","readTime","prefixPath","documentId"],Pe=["canonicalId","targetId"],Oe=["targetId","path"],Le=["path","targetId"],Me=["collectionId","parent"],Fe=["indexId","uid"],Ue=["uid","sequenceNumber"],Ve=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Be=["indexId","uid","orderedDocumentKey"],je=["userId","collectionPath","documentId"],qe=["userId","collectionPath","largestBatchId"],Ke=["userId","collectionGroup","largestBatchId"],Ge=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ze=[...Ge,"documentOverlays"],$e=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],We=$e,He=[...We,"indexConfiguration","indexState","indexEntries"],Qe=He,Ye=[...He,"globals"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends ie{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Xe(e,t){const n=S(e);return oe.F(n._e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function et(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function tt(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||rt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new it(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new it(this.root,e,this.comparator,!1)}getReverseIterator(){return new it(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new it(this.root,e,this.comparator,!0)}}class it{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:rt.RED,this.left=null!=i?i:rt.EMPTY,this.right=null!=r?r:rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new rt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return rt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw w();if(this.right.isRed())throw w();const e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1,rt.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,n,i,r){return this}insert(e,t,n){return new rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new at(this.data.getIterator())}getIteratorFrom(e){return new at(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof st))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new st(this.comparator);return t.data=e,t}}class at{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ot(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new ct([])}unionWith(e){let t=new st(z.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return U(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ut("Invalid base64 string: "+e):e}}(e);return new ht(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ht(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const dt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(e){if(I(!!e),"string"==typeof e){let t=0;const n=dt.exec(e);if(I(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:pt(e.seconds),nanos:pt(e.nanos)}}function pt(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function mt(e){return"string"==typeof e?ht.fromBase64String(e):ht.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function vt(e){const t=e.mapValue.fields.__previous_value__;return gt(t)?vt(t):t}function yt(e){const t=ft(e.mapValue.fields.__local_write_time__.timestampValue);return new B(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,n,i,r,s,a,o,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=c}}class wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new wt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof wt&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},_t={nullValue:"NULL_VALUE"};function St(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?gt(e)?4:Vt(e)?9007199254740991:Ft(e)?10:11:w()}function Et(e,t){if(e===t)return!0;const n=St(e);if(n!==St(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return yt(e).isEqual(yt(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ft(e.timestampValue),i=ft(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return mt(e.bytesValue).isEqual(mt(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return pt(e.geoPointValue.latitude)===pt(t.geoPointValue.latitude)&&pt(e.geoPointValue.longitude)===pt(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return pt(e.integerValue)===pt(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=pt(e.doubleValue),i=pt(t.doubleValue);return n===i?we(n)===we(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return U(e.arrayValue.values||[],t.arrayValue.values||[],Et);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Ze(n)!==Ze(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Et(n[r],i[r])))return!1;return!0}(e,t);default:return w()}}function Tt(e,t){return void 0!==(e.values||[]).find((e=>Et(e,t)))}function kt(e,t){if(e===t)return 0;const n=St(e),i=St(t);if(n!==i)return F(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=pt(e.integerValue||e.doubleValue),i=pt(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Ct(e.timestampValue,t.timestampValue);case 4:return Ct(yt(e),yt(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(e,t){const n=mt(e),i=mt(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=F(n[r],i[r]);if(0!==e)return e}return F(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=F(pt(e.latitude),pt(t.latitude));return 0!==n?n:F(pt(e.longitude),pt(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return At(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,i,r,s;const a=e.fields||{},o=t.fields||{},c=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=null===(i=o.value)||void 0===i?void 0:i.arrayValue,l=F((null===(r=null==c?void 0:c.values)||void 0===r?void 0:r.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:At(c,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===It.mapValue&&t===It.mapValue)return 0;if(e===It.mapValue)return 1;if(t===It.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let a=0;a<i.length&&a<s.length;++a){const e=F(i[a],s[a]);if(0!==e)return e;const t=kt(n[i[a]],r[s[a]]);if(0!==t)return t}return F(i.length,s.length)}(e.mapValue,t.mapValue);default:throw w()}}function Ct(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t);const n=ft(e),i=ft(t),r=F(n.seconds,i.seconds);return 0!==r?r:F(n.nanos,i.nanos)}function At(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=kt(n[r],i[r]);if(e)return e}return F(n.length,i.length)}function Nt(e){return Rt(e)}function Rt(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ft(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return mt(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return $.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Rt(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Rt(e.fields[r])}`;return n+"}"}(e.mapValue):w()}function Dt(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function xt(e){return!!e&&"integerValue"in e}function Pt(e){return!!e&&"arrayValue"in e}function Ot(e){return!!e&&"nullValue"in e}function Lt(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Mt(e){return!!e&&"mapValue"in e}function Ft(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ut(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return et(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ut(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ut(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Vt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}const Bt={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function jt(e){return"nullValue"in e?_t:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Dt(wt.empty(),$.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?Ft(e)?Bt:{mapValue:{}}:w()}function qt(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Dt(wt.empty(),$.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?Bt:"mapValue"in e?Ft(e)?{mapValue:{}}:It:w()}function Kt(e,t){const n=kt(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Gt(e,t){const n=kt(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Mt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ut(t)}setAll(e){let t=z.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Ut(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Mt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Mt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){et(t,((t,n)=>e[t]=n));for(const i of n)delete e[i]}clone(){return new zt(Ut(this.value))}}function $t(e){const t=[];return et(e.fields,((e,n)=>{const i=new z([e]);if(Mt(n)){const e=$t(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new ct(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Wt{constructor(e,t,n,i,r,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Wt(e,0,j.min(),j.min(),j.min(),zt.empty(),0)}static newFoundDocument(e,t,n,i){return new Wt(e,1,t,j.min(),n,i,0)}static newNoDocument(e,t){return new Wt(e,2,t,j.min(),j.min(),zt.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,j.min(),j.min(),zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this.position=e,this.inclusive=t}}function Qt(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],a=e.position[r];if(i=s.field.isKeyField()?$.comparator($.fromName(a.referenceValue),n.key):kt(a,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Yt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Et(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t="asc"){this.field=e,this.dir=t}}function Xt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{}class en extends Zt{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new hn(e,t,n):"array-contains"===t?new mn(e,n):"in"===t?new gn(e,n):"not-in"===t?new vn(e,n):"array-contains-any"===t?new yn(e,n):new en(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new dn(e,n):new fn(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(kt(t,this.value)):null!==t&&St(this.value)===St(t)&&this.matchesComparison(kt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends Zt{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new tn(e,t)}matches(e){return nn(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nn(e){return"and"===e.op}function rn(e){return"or"===e.op}function sn(e){return an(e)&&nn(e)}function an(e){for(const t of e.filters)if(t instanceof tn)return!1;return!0}function on(e){if(e instanceof en)return e.field.canonicalString()+e.op.toString()+Nt(e.value);if(sn(e))return e.filters.map((e=>on(e))).join(",");{const t=e.filters.map((e=>on(e))).join(",");return`${e.op}(${t})`}}function cn(e,t){return e instanceof en?function(e,t){return t instanceof en&&e.op===t.op&&e.field.isEqual(t.field)&&Et(e.value,t.value)}(e,t):e instanceof tn?function(e,t){return t instanceof tn&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&cn(n,t.filters[i])),!0)}(e,t):void w()}function un(e,t){const n=e.filters.concat(t);return tn.create(n,e.op)}function ln(e){return e instanceof en?function(e){return`${e.field.canonicalString()} ${e.op} ${Nt(e.value)}`}(e):e instanceof tn?function(e){return e.op.toString()+" {"+e.getFilters().map(ln).join(" ,")+"}"}(e):"Filter"}class hn extends en{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class dn extends en{constructor(e,t){super(e,"in",t),this.keys=pn("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class fn extends en{constructor(e,t){super(e,"not-in",t),this.keys=pn("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function pn(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>$.fromName(e.referenceValue)))}class mn extends en{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pt(t)&&Tt(t.arrayValue,this.value)}}class gn extends en{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Tt(this.value.arrayValue,t)}}class vn extends en{constructor(e,t){super(e,"not-in",t)}matches(e){if(Tt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Tt(this.value.arrayValue,t)}}class yn extends en{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pt(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Tt(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t=null,n=[],i=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.ue=null}}function wn(e,t=null,n=[],i=[],r=null,s=null,a=null){return new bn(e,t,n,i,r,s,a)}function In(e){const t=S(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>on(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),be(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Nt(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Nt(e))).join(",")),t.ue=e}return t.ue}function _n(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Xt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!cn(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Yt(e.startAt,t.startAt)&&Yt(e.endAt,t.endAt)}function Sn(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function En(e,t){return e.filters.filter((e=>e instanceof en&&e.field.isEqual(t)))}function Tn(e,t,n){let i=_t,r=!0;for(const s of En(e,t)){let e=_t,t=!0;switch(s.op){case"<":case"<=":e=jt(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=_t}Kt({value:i,inclusive:r},{value:e,inclusive:t})<0&&(i=e,r=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Kt({value:i,inclusive:r},{value:e,inclusive:n.inclusive})<0&&(i=e,r=n.inclusive);break}return{value:i,inclusive:r}}function kn(e,t,n){let i=It,r=!0;for(const s of En(e,t)){let e=It,t=!0;switch(s.op){case">=":case">":e=qt(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=It}Gt({value:i,inclusive:r},{value:e,inclusive:t})>0&&(i=e,r=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Gt({value:i,inclusive:r},{value:e,inclusive:n.inclusive})>0&&(i=e,r=n.inclusive);break}return{value:i,inclusive:r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function An(e,t,n,i,r,s,a,o){return new Cn(e,t,n,i,r,s,a,o)}function Nn(e){return new Cn(e)}function Rn(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Dn(e){return null!==e.collectionGroup}function xn(e){const t=S(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",i=function(e){let t=new st(z.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);i.forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new Jt(i,n))})),e.has(z.keyField().canonicalString())||t.ce.push(new Jt(z.keyField(),n))}return t.ce}function Pn(e){const t=S(e);return t.le||(t.le=On(t,xn(e))),t.le}function On(e,t){if("F"===e.limitType)return wn(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Jt(e.field,t)}));const n=e.endAt?new Ht(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ht(e.startAt.position,e.startAt.inclusive):null;return wn(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Ln(e,t){const n=e.filters.concat([t]);return new Cn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Mn(e,t,n){return new Cn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Fn(e,t){return _n(Pn(e),Pn(t))&&e.limitType===t.limitType}function Un(e){return`${In(Pn(e))}|lt:${e.limitType}`}function Vn(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ln(e))).join(", ")}]`),be(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Nt(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Nt(e))).join(",")),`Target(${t})`}(Pn(e))}; limitType=${e.limitType})`}function Bn(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of xn(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Qt(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,xn(e),t))&&!(e.endAt&&!function(e,t,n){const i=Qt(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,xn(e),t))}(e,t)}function jn(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qn(e){return(t,n)=>{let i=!1;for(const r of xn(e)){const e=Kn(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function Kn(e,t,n){const i=e.field.isKeyField()?$.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?kt(i,r):w()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return w()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){et(this.inner,((t,n)=>{for(const[i,r]of n)e(i,r)}))}isEmpty(){return tt(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new nt($.comparator);function $n(){return zn}const Wn=new nt($.comparator);function Hn(...e){let t=Wn;for(const n of e)t=t.insert(n.key,n);return t}function Qn(e){let t=Wn;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Yn(){return Xn()}function Jn(){return Xn()}function Xn(){return new Gn((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Zn=new nt($.comparator),ei=new st($.comparator);function ti(...e){let t=ei;for(const n of e)t=t.add(n);return t}const ni=new st(F);function ii(){return ni}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:we(t)?"-0":t}}function si(e){return{integerValue:""+e}}function ai(e,t){return Ie(t)?si(t):ri(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this._=void 0}}function ci(e,t,n){return e instanceof hi?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&gt(t)&&(t=vt(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof di?fi(e,t):e instanceof pi?mi(e,t):function(e,t){const n=li(e,t),i=vi(n)+vi(e.Pe);return xt(n)&&xt(e.Pe)?si(i):ri(e.serializer,i)}(e,t)}function ui(e,t,n){return e instanceof di?fi(e,t):e instanceof pi?mi(e,t):n}function li(e,t){return e instanceof gi?function(e){return xt(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class hi extends oi{}class di extends oi{constructor(e){super(),this.elements=e}}function fi(e,t){const n=yi(t);for(const i of e.elements)n.some((e=>Et(e,i)))||n.push(i);return{arrayValue:{values:n}}}class pi extends oi{constructor(e){super(),this.elements=e}}function mi(e,t){let n=yi(t);for(const i of e.elements)n=n.filter((e=>!Et(e,i)));return{arrayValue:{values:n}}}class gi extends oi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function vi(e){return pt(e.integerValue||e.doubleValue)}function yi(e){return Pt(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.field=e,this.transform=t}}function wi(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof di&&t instanceof di||e instanceof pi&&t instanceof pi?U(e.elements,t.elements,Et):e instanceof gi&&t instanceof gi?Et(e.Pe,t.Pe):e instanceof hi&&t instanceof hi}(e.transform,t.transform)}class Ii{constructor(e,t){this.version=e,this.transformResults=t}}class _i{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _i}static exists(e){return new _i(void 0,e)}static updateTime(e){return new _i(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Si(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ei{}function Ti(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Li(e.key,_i.none()):new Ri(e.key,e.data,_i.none());{const n=e.data,i=zt.empty();let r=new st(z.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new Di(e.key,i,new ct(r.toArray()),_i.none())}}function ki(e,t,n){e instanceof Ri?function(e,t,n){const i=e.value.clone(),r=Pi(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Di?function(e,t,n){if(!Si(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Pi(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(xi(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ci(e,t,n,i){return e instanceof Ri?function(e,t,n,i){if(!Si(e.precondition,t))return n;const r=e.value.clone(),s=Oi(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof Di?function(e,t,n,i){if(!Si(e.precondition,t))return n;const r=Oi(e.fieldTransforms,i,t),s=t.data;return s.setAll(xi(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return Si(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Ai(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=li(i.transform,e||null);null!=r&&(null===n&&(n=zt.empty()),n.set(i.field,r))}return n||null}function Ni(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&U(e,t,((e,t)=>wi(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ri extends Ei{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Di extends Ei{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function xi(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Pi(e,t,n){const i=new Map;I(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],a=s.transform,o=t.data.field(s.field);i.set(s.field,ui(a,o,n[r]))}return i}function Oi(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,ci(e,s,t))}return i}class Li extends Ei{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mi extends Ei{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&ki(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ci(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ci(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Jn();return this.mutations.forEach((i=>{const r=e.get(i.key),s=r.overlayedDocument;let a=this.applyToLocalView(s,r.mutatedFields);a=t.has(i.key)?null:a;const o=Ti(s,a);null!==o&&n.set(i.key,o),s.isValidDocument()||s.convertToNoDocument(j.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ti())}isEqual(e){return this.batchId===e.batchId&&U(this.mutations,e.mutations,((e,t)=>Ni(e,t)))&&U(this.baseMutations,e.baseMutations,((e,t)=>Ni(e,t)))}}class Ui{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){I(e.mutations.length===n.length);let i=function(){return Zn}();const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new Ui(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ji,qi;function Ki(e){switch(e){default:return w();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Gi(e){if(void 0===e)return v("GRPC error has no .code"),E.UNKNOWN;switch(e){case ji.OK:return E.OK;case ji.CANCELLED:return E.CANCELLED;case ji.UNKNOWN:return E.UNKNOWN;case ji.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ji.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ji.INTERNAL:return E.INTERNAL;case ji.UNAVAILABLE:return E.UNAVAILABLE;case ji.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ji.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ji.NOT_FOUND:return E.NOT_FOUND;case ji.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ji.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ji.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ji.ABORTED:return E.ABORTED;case ji.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ji.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ji.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(qi=ji||(ji={}))[qi.OK=0]="OK",qi[qi.CANCELLED=1]="CANCELLED",qi[qi.UNKNOWN=2]="UNKNOWN",qi[qi.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qi[qi.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qi[qi.NOT_FOUND=5]="NOT_FOUND",qi[qi.ALREADY_EXISTS=6]="ALREADY_EXISTS",qi[qi.PERMISSION_DENIED=7]="PERMISSION_DENIED",qi[qi.UNAUTHENTICATED=16]="UNAUTHENTICATED",qi[qi.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qi[qi.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qi[qi.ABORTED=10]="ABORTED",qi[qi.OUT_OF_RANGE=11]="OUT_OF_RANGE",qi[qi.UNIMPLEMENTED=12]="UNIMPLEMENTED",qi[qi.INTERNAL=13]="INTERNAL",qi[qi.UNAVAILABLE=14]="UNAVAILABLE",qi[qi.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let zi=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new c.jz([4294967295,4294967295],0);function Hi(e){const t=$i().encode(e),n=new c.VV;return n.update(t),new Uint8Array(n.digest())}function Qi(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c.jz([n,i],0),new c.jz([r,s],0)]}class Yi{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ji(`Invalid padding: ${t}`);if(n<0)throw new Ji(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Ji(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Ji(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=c.jz.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(c.jz.fromNumber(n)));return 1===i.compare(Wi)&&(i=new c.jz([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=Hi(e),[n,i]=Qi(t);for(let r=0;r<this.hashCount;r++){const e=this.Ee(n,i,r);if(!this.de(e))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),s=new Yi(r,i,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=Hi(e),[n,i]=Qi(t);for(let r=0;r<this.hashCount;r++){const e=this.Ee(n,i,r);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Xi(j.min(),i,new nt(F),$n(),ti())}}class Zi{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Zi(n,t,ti(),ti(),ti())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class tr{constructor(e,t){this.targetId=e,this.me=t}}class nr{constructor(e,t,n=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class ir{constructor(){this.fe=0,this.ge=ar(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ti(),t=ti(),n=ti();return this.ge.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:w()}})),new Zi(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=ar()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,I(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rr{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=sr(),this.Qe=new nt(F)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:w()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const r=i.target;if(Sn(r))if(0===n){const e=new $(r.path);this.Ue(t,e,Wt.newNoDocument(e,j.min()))}else I(1===n);else{const i=this.Ye(t);if(i!==n){const n=this.Ze(e),r=n?this.Xe(n,e,i):1;if(0!==r){this.je(t);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==zi||zi.et(function(e,t,n,i,r){var s,a,o,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===r,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(o=null===(a=null==d?void 0:d.bits)||void 0===a?void 0:a.bitmap)||void 0===o?void 0:o.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==i?void 0:i.mightContain(e))&&void 0!==t&&t}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,e.me,this.Le.tt(),n,r))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=t;let s,a;try{s=mt(n).toUint8Array()}catch(e){if(e instanceof ut)return y("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{a=new Yi(s,i,r)}catch(e){return y(e instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===a.Ie?null:a}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach((n=>{const r=this.Le.tt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),i++)})),i}rt(e){const t=new Map;this.Be.forEach(((n,i)=>{const r=this.Je(i);if(r){if(n.current&&Sn(r.target)){const t=new $(r.target.path);null!==this.ke.get(t)||this.it(i,t)||this.Ue(i,t,Wt.newNoDocument(t,e))}n.be&&(t.set(i,n.ve()),n.Ce())}}));let n=ti();this.qe.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const i=new Xi(e,t,this.Qe,this.ke,n);return this.ke=$n(),this.qe=sr(),this.Qe=new nt(F),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ir,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new st(F),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ir),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function sr(){return new nt($.comparator)}function ar(){return new nt($.comparator)}const or=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),cr=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),ur=(()=>{const e={and:"AND",or:"OR"};return e})();class lr{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hr(e,t){return e.useProto3Json||be(t)?t:{value:t}}function dr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function pr(e,t){return dr(e,t.toTimestamp())}function mr(e){return I(!!e),j.fromTimestamp(function(e){const t=ft(e);return new B(t.seconds,t.nanos)}(e))}function gr(e,t){return vr(e,t).canonicalString()}function vr(e,t){const n=function(e){return new K(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function yr(e){const t=K.fromString(e);return I(Gr(t)),t}function br(e,t){return gr(e.databaseId,t.path)}function wr(e,t){const n=yr(t);if(n.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $(Er(n))}function Ir(e,t){return gr(e.databaseId,t)}function _r(e){const t=yr(e);return 4===t.length?K.emptyPath():Er(t)}function Sr(e){return new K(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Er(e){return I(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Tr(e,t,n){return{name:br(e,t),fields:n.value.mapValue.fields}}function kr(e,t,n){const i=wr(e,t.name),r=mr(t.updateTime),s=t.createTime?mr(t.createTime):j.min(),a=new zt({mapValue:{fields:t.fields}}),o=Wt.newFoundDocument(i,r,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Cr(e,t){return"found"in t?function(e,t){I(!!t.found),t.found.name,t.found.updateTime;const n=wr(e,t.found.name),i=mr(t.found.updateTime),r=t.found.createTime?mr(t.found.createTime):j.min(),s=new zt({mapValue:{fields:t.found.fields}});return Wt.newFoundDocument(n,i,r,s)}(e,t):"missing"in t?function(e,t){I(!!t.missing),I(!!t.readTime);const n=wr(e,t.missing),i=mr(t.readTime);return Wt.newNoDocument(n,i)}(e,t):w()}function Ar(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:w()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(I(void 0===t||"string"==typeof t),ht.fromBase64String(t||"")):(I(void 0===t||t instanceof Buffer||t instanceof Uint8Array),ht.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,o=a&&function(e){const t=void 0===e.code?E.UNKNOWN:Gi(e.code);return new T(t,e.message||"")}(a);n=new nr(i,r,s,o||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=wr(e,i.document.name),s=mr(i.document.updateTime),a=i.document.createTime?mr(i.document.createTime):j.min(),o=new zt({mapValue:{fields:i.document.fields}}),c=Wt.newFoundDocument(r,s,a,o),u=i.targetIds||[],l=i.removedTargetIds||[];n=new er(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=wr(e,i.document),s=i.readTime?mr(i.readTime):j.min(),a=Wt.newNoDocument(r,s),o=i.removedTargetIds||[];n=new er([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=wr(e,i.document),s=i.removedTargetIds||[];n=new er([],s,r,null)}else{if(!("filter"in t))return w();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:r}=e,s=new Bi(i,r),a=e.targetId;n=new tr(a,s)}}return n}function Nr(e,t){let n;if(t instanceof Ri)n={update:Tr(e,t.key,t.value)};else if(t instanceof Li)n={delete:br(e,t.key)};else if(t instanceof Di)n={update:Tr(e,t.key,t.data),updateMask:Kr(t.fieldMask)};else{if(!(t instanceof Mi))return w();n={verify:br(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof hi)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof di)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof pi)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof gi)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw w()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:pr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:w()}(e,t.precondition)),n}function Rr(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?_i.updateTime(mr(e.updateTime)):void 0!==e.exists?_i.exists(e.exists):_i.none()}(t.currentDocument):_i.none(),i=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)I("REQUEST_TIME"===t.setToServerValue),n=new hi;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new di(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new pi(e)}else"increment"in t?n=new gi(e,t.increment):w();const i=z.fromServerFormat(t.fieldPath);return new bi(i,n)}(e,t))):[];if(t.update){t.update.name;const r=wr(e,t.update.name),s=new zt({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new ct(t.map((e=>z.fromServerFormat(e))))}(t.updateMask);return new Di(r,s,e,n,i)}return new Ri(r,s,n,i)}if(t.delete){const i=wr(e,t.delete);return new Li(i,n)}if(t.verify){const i=wr(e,t.verify);return new Mi(i,n)}return w()}function Dr(e,t){return e&&e.length>0?(I(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?mr(e.updateTime):mr(t);return n.isEqual(j.min())&&(n=mr(t)),new Ii(n,e.transformResults||[])}(e,t)))):[]}function xr(e,t){return{documents:[Ir(e,t.path)]}}function Pr(e,t){const n={structuredQuery:{}},i=t.path;let r;null!==t.collectionGroup?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Ir(e,r);const s=function(e){if(0!==e.length)return qr(tn.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Br(e.field),direction:Fr(e.dir)}}(e)))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=hr(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:r}}function Or(e){let t=_r(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){I(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Mr(e);return t instanceof tn&&sn(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=function(e){return e.map((e=>function(e){return new Jt(jr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,be(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ht(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ht(n,t)}(n.endAt)),An(t,r,a,s,o,"F",c,u)}function Lr(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Mr(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=jr(e.unaryFilter.field);return en.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=jr(e.unaryFilter.field);return en.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(e.unaryFilter.field);return en.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=jr(e.unaryFilter.field);return en.create(r,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(e):void 0!==e.fieldFilter?function(e){return en.create(jr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return tn.create(e.compositeFilter.filters.map((e=>Mr(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return w()}}(e.compositeFilter.op))}(e):w()}function Fr(e){return or[e]}function Ur(e){return cr[e]}function Vr(e){return ur[e]}function Br(e){return{fieldPath:e.canonicalString()}}function jr(e){return z.fromServerFormat(e.fieldPath)}function qr(e){return e instanceof en?function(e){if("=="===e.op){if(Lt(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NAN"}};if(Ot(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Lt(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NOT_NAN"}};if(Ot(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(e.field),op:Ur(e.op),value:e.value}}}(e):e instanceof tn?function(e){const t=e.getFilters().map((e=>qr(e)));return 1===t.length?t[0]:{compositeFilter:{op:Vr(e.op),filters:t}}}(e):w()}function Kr(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Gr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t,n,i,r=j.min(),s=j.min(),a=ht.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.ct=e}}function Wr(e,t){let n;if(t.document)n=kr(e.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=$.fromSegments(t.noDocument.path),i=Jr(t.noDocument.readTime);n=Wt.newNoDocument(e,i),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return w();{const e=$.fromSegments(t.unknownDocument.path),i=Jr(t.unknownDocument.version);n=Wt.newUnknownDocument(e,i)}}return t.readTime&&n.setReadTime(function(e){const t=new B(e[0],e[1]);return j.fromTimestamp(t)}(t.readTime)),n}function Hr(e,t){const n=t.key,i={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Qr(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())i.document=function(e,t){return{name:br(e,t.key),fields:t.data.value.mapValue.fields,updateTime:dr(e,t.version.toTimestamp()),createTime:dr(e,t.createTime.toTimestamp())}}(e.ct,t);else if(t.isNoDocument())i.noDocument={path:n.path.toArray(),readTime:Yr(t.version)};else{if(!t.isUnknownDocument())return w();i.unknownDocument={path:n.path.toArray(),version:Yr(t.version)}}return i}function Qr(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Yr(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Jr(e){const t=new B(e.seconds,e.nanoseconds);return j.fromTimestamp(t)}function Xr(e,t){const n=(t.baseMutations||[]).map((t=>Rr(e.ct,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const i=t.mutations.map((t=>Rr(e.ct,t))),r=B.fromMillis(t.localWriteTimeMs);return new Fi(t.batchId,r,n,i)}function Zr(e){const t=Jr(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Jr(e.lastLimboFreeSnapshotVersion):j.min();let i;return i=function(e){return void 0!==e.documents}(e.query)?function(e){return I(1===e.documents.length),Pn(Nn(_r(e.documents[0])))}(e.query):function(e){return Pn(Or(e))}(e.query),new zr(i,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,ht.fromBase64String(e.resumeToken))}function es(e,t){const n=Yr(t.snapshotVersion),i=Yr(t.lastLimboFreeSnapshotVersion);let r;r=Sn(t.target)?xr(e.ct,t.target):Pr(e.ct,t.target)._t;const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:In(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function ts(e){const t=Or({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Mn(t,t.limit,"L"):t}function ns(e,t){return new Vi(t.largestBatchId,Rr(e.ct,t.overlayMutation))}function is(e,t){const n=t.path.lastSegment();return[e,_e(t.path.popLast()),n]}function rs(e,t,n,i){return{indexId:e,uid:t,sequenceNumber:n,readTime:Yr(i.readTime),documentKey:_e(i.documentKey.path),largestBatchId:i.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{getBundleMetadata(e,t){return as(e).get(t).next((e=>{if(e)return function(e){return{id:e.bundleId,createTime:Jr(e.createTime),version:e.version}}(e)}))}saveBundleMetadata(e,t){return as(e).put(function(e){return{bundleId:e.id,createTime:Yr(mr(e.createTime)),version:e.version}}(t))}getNamedQuery(e,t){return os(e).get(t).next((e=>{if(e)return function(e){return{name:e.name,query:ts(e.bundledQuery),readTime:Jr(e.readTime)}}(e)}))}saveNamedQuery(e,t){return os(e).put(function(e){return{name:e.name,readTime:Yr(mr(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function as(e){return Xe(e,"bundles")}function os(e){return Xe(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new cs(e,n)}getOverlay(e,t){return us(e).get(is(this.userId,t)).next((e=>e?ns(this.serializer,e):null))}getOverlays(e,t){const n=Yn();return se.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const i=[];return n.forEach(((n,r)=>{const s=new Vi(t,r);i.push(this.ht(e,s))})),se.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach((e=>i.add(_e(e.getCollectionPath()))));const r=[];return i.forEach((t=>{const i=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);r.push(us(e).j("collectionPathOverlayIndex",i))})),se.waitFor(r)}getOverlaysForCollection(e,t,n){const i=Yn(),r=_e(t),s=IDBKeyRange.bound([this.userId,r,n],[this.userId,r,Number.POSITIVE_INFINITY],!0);return us(e).U("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=ns(this.serializer,t);i.set(e.getKey(),e)}return i}))}getOverlaysForCollectionGroup(e,t,n,i){const r=Yn();let s;const a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return us(e).J({index:"collectionGroupOverlayIndex",range:a},((e,t,n)=>{const a=ns(this.serializer,t);r.size()<i||a.largestBatchId===s?(r.set(a.getKey(),a),s=a.largestBatchId):n.done()})).next((()=>r))}ht(e,t){return us(e).put(function(e,t,n){const[i,r,s]=is(t,n.mutation.key);return{userId:t,collectionPath:r,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Nr(e.ct,n.mutation)}}(this.serializer,this.userId,t))}}function us(e){return Xe(e,"documentOverlays")}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{Pt(e){return Xe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next((e=>{const t=null==e?void 0:e.value;return t?ht.fromUint8Array(t):ht.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(pt(e.integerValue));else if("doubleValue"in e){const n=pt(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),we(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=ft(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(mt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Vt(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ft(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):w()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}wt(e,t){var n,i;const r=e.fields||{};this.dt(t,53);const s="value",a=(null===(i=null===(n=r[s].arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.length)||0;this.dt(t,15),t.At(pt(a)),this.Vt(s,t),this.Tt(r[s],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),$.fromName(e).path.forEach((e=>{this.dt(t,60),this.Dt(e,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}function ds(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function fs(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const i=ds(255&e[n]);if(t+=i,8!==i)break}return t}(e);return Math.ceil(t/8)}hs.vt=new hs;class ps{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ft(e);else if(e<2048)this.Ft(960|e>>>6),this.Ft(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ft(480|e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e);else{const e=t.codePointAt(0);this.Ft(240|e>>>18),this.Ft(128|63&e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e)}}this.Mt()}Bt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ot(e);else if(e<2048)this.Ot(960|e>>>6),this.Ot(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ot(480|e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e);else{const e=t.codePointAt(0);this.Ot(240|e>>>18),this.Ot(128|63&e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e)}}this.Nt()}kt(e){const t=this.qt(e),n=fs(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),n=fs(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ft(e){const t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;0===t?(this.Gt(0),this.Gt(255)):255===t?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class ms{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class gs{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class vs{constructor(){this.jt=new ps,this.Ht=new ms(this.jt),this.Jt=new gs(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return 0===e?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new ys(this.indexId,this.documentKey,this.arrayValue,n)}}function bs(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=ws(e.arrayValue,t.arrayValue),0!==n?n:(n=ws(e.directionalValue,t.directionalValue),0!==n?n:$.comparator(e.documentKey,t.documentKey)))}function ws(e,t){for(let n=0;n<e.length&&n<t.length;++n){const i=e[n]-t[n];if(0!==i)return i}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.Xt=new st(((e,t)=>z.comparator(e.field,t.field))),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const e=t;e.isInequality()?this.Xt=this.Xt.add(e):this.tn.push(e)}}get nn(){return this.Xt.size>1}rn(e){if(I(e.collectionGroup===this.collectionId),this.nn)return!1;const t=H(e);if(void 0!==t&&!this.sn(t))return!1;const n=Q(e);let i=new Set,r=0,s=0;for(;r<n.length&&this.sn(n[r]);++r)i=i.add(n[r].fieldPath.canonicalString());if(r===n.length)return!0;if(this.Xt.size>0){const e=this.Xt.getIterator().getNext();if(!i.has(e.field.canonicalString())){const t=n[r];if(!this.on(e,t)||!this._n(this.en[s++],t))return!1}++r}for(;r<n.length;++r){const e=n[r];if(s>=this.en.length||!this._n(this.en[s++],e))return!1}return!0}an(){if(this.nn)return null;let e=new st(z.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Y(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Y(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Y(n.field,"asc"===n.dir?0:1)));return new W(W.UNKNOWN_ID,this.collectionId,t,J.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(e){var t,n;if(I(e instanceof en||e instanceof tn),e instanceof en){if(e instanceof gn){const i=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>en.create(e.field,"==",t))))||[];return tn.create(i,"or")}return e}const i=e.filters.map((e=>_s(e)));return tn.create(i,e.op)}function Ss(e){if(0===e.getFilters().length)return[];const t=Cs(_s(e));return I(ks(t)),Es(t)||Ts(t)?[t]:t.getFilters()}function Es(e){return e instanceof en}function Ts(e){return e instanceof tn&&sn(e)}function ks(e){return Es(e)||Ts(e)||function(e){if(e instanceof tn&&rn(e)){for(const t of e.getFilters())if(!Es(t)&&!Ts(t))return!1;return!0}return!1}(e)}function Cs(e){if(I(e instanceof en||e instanceof tn),e instanceof en)return e;if(1===e.filters.length)return Cs(e.filters[0]);const t=e.filters.map((e=>Cs(e)));let n=tn.create(t,e.op);return n=Rs(n),ks(n)?n:(I(n instanceof tn),I(nn(n)),I(n.filters.length>1),n.filters.reduce(((e,t)=>As(e,t))))}function As(e,t){let n;return I(e instanceof en||e instanceof tn),I(t instanceof en||t instanceof tn),n=e instanceof en?t instanceof en?function(e,t){return tn.create([e,t],"and")}(e,t):Ns(e,t):t instanceof en?Ns(t,e):function(e,t){if(I(e.filters.length>0&&t.filters.length>0),nn(e)&&nn(t))return un(e,t.getFilters());const n=rn(e)?e:t,i=rn(e)?t:e,r=n.filters.map((e=>As(e,i)));return tn.create(r,"or")}(e,t),Rs(n)}function Ns(e,t){if(nn(t))return un(t,e.getFilters());{const n=t.filters.map((t=>As(e,t)));return tn.create(n,"or")}}function Rs(e){if(I(e instanceof en||e instanceof tn),e instanceof en)return e;const t=e.getFilters();if(1===t.length)return Rs(t[0]);if(an(e))return e;const n=t.map((e=>Rs(e))),i=[];return n.forEach((t=>{t instanceof en?i.push(t):t instanceof tn&&(t.op===e.op?i.push(...t.filters):i.push(t))})),1===i.length?i[0]:tn.create(i,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ds{constructor(){this.un=new xs}addToCollectionParentIndex(e,t){return this.un.add(t),se.resolve()}getCollectionParents(e,t){return se.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return se.resolve()}deleteFieldIndex(e,t){return se.resolve()}deleteAllFieldIndexes(e){return se.resolve()}createTargetIndexes(e,t){return se.resolve()}getDocumentsMatchingTarget(e,t){return se.resolve(null)}getIndexType(e,t){return se.resolve(0)}getFieldIndexes(e,t){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,t){return se.resolve(ee.min())}getMinOffsetFromCollectionGroup(e,t){return se.resolve(ee.min())}updateCollectionGroup(e,t,n){return se.resolve()}updateIndexEntries(e,t){return se.resolve()}}class xs{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new st(K.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new st(K.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Uint8Array(0);class Os{constructor(e,t){this.databaseId=t,this.cn=new xs,this.ln=new Gn((e=>In(e)),((e,t)=>_n(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.cn.add(t)}));const r={collectionId:n,parent:_e(i)};return Ls(e).put(r)}return se.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[V(t),""],!1,!0);return Ls(e).U(i).next((e=>{for(const i of e){if(i.collectionId!==t)break;n.push(Te(i.parent))}return n}))}addFieldIndex(e,t){const n=Fs(e),i=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete i.indexId;const r=n.add(i);if(t.indexState){const n=Us(e);return r.next((e=>{n.put(rs(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return r.next()}deleteFieldIndex(e,t){const n=Fs(e),i=Us(e),r=Ms(e);return n.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Fs(e),n=Ms(e),i=Us(e);return t.j().next((()=>n.j())).next((()=>i.j()))}createTargetIndexes(e,t){return se.forEach(this.hn(t),(t=>this.getIndexType(e,t).next((n=>{if(0===n||1===n){const n=new Is(t).an();if(null!=n)return this.addFieldIndex(e,n)}}))))}getDocumentsMatchingTarget(e,t){const n=Ms(e);let i=!0;const r=new Map;return se.forEach(this.hn(t),(t=>this.Pn(e,t).next((e=>{i&&(i=!!e),r.set(t,e)})))).next((()=>{if(i){let e=ti();const i=[];return se.forEach(r,((r,s)=>{g("IndexedDbIndexManager",`Using index ${function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`}(r)} to execute ${In(t)}`);const a=function(e,t){const n=H(t);if(void 0===n)return null;for(const i of En(e,n.fieldPath))switch(i.op){case"array-contains-any":return i.value.arrayValue.values||[];case"array-contains":return[i.value]}return null}(s,r),o=function(e,t){const n=new Map;for(const i of Q(t))for(const t of En(e,i.fieldPath))switch(t.op){case"==":case"in":n.set(i.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(i.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,r),c=function(e,t){const n=[];let i=!0;for(const r of Q(t)){const t=0===r.kind?Tn(e,r.fieldPath,e.startAt):kn(e,r.fieldPath,e.startAt);n.push(t.value),i&&(i=t.inclusive)}return new Ht(n,i)}(s,r),u=function(e,t){const n=[];let i=!0;for(const r of Q(t)){const t=0===r.kind?kn(e,r.fieldPath,e.endAt):Tn(e,r.fieldPath,e.endAt);n.push(t.value),i&&(i=t.inclusive)}return new Ht(n,i)}(s,r),l=this.In(r,s,c),h=this.In(r,s,u),d=this.Tn(r,s,o),f=this.En(r.indexId,a,l,c.inclusive,h,u.inclusive,d);return se.forEach(f,(r=>n.G(r,t.limit).next((t=>{t.forEach((t=>{const n=$.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),i.push(n))}))}))))})).next((()=>i))}return se.resolve(null)}))}hn(e){let t=this.ln.get(e);return t||(t=0===e.filters.length?[e]:Ss(tn.create(e.filters,"and")).map((t=>wn(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.ln.set(e,t),t)}En(e,t,n,i,r,s,a){const o=(null!=t?t.length:1)*Math.max(n.length,r.length),c=o/(null!=t?t.length:1),u=[];for(let l=0;l<o;++l){const o=t?this.dn(t[l/c]):Ps,h=this.An(e,o,n[l%c],i),d=this.Rn(e,o,r[l%c],s),f=a.map((t=>this.An(e,o,t,!0)));u.push(...this.createRange(h,d,f))}return u}An(e,t,n,i){const r=new ys(e,$.empty(),t,n);return i?r:r.Zt()}Rn(e,t,n,i){const r=new ys(e,$.empty(),t,n);return i?r.Zt():r}Pn(e,t){const n=new Is(t),i=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((e=>{let t=null;for(const i of e)n.rn(i)&&(!t||i.fields.length>t.fields.length)&&(t=i);return t}))}getIndexType(e,t){let n=2;const i=this.hn(t);return se.forEach(i,(t=>this.Pn(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new st(z.comparator),n=!1;for(const i of e.filters)for(const e of i.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const i of e.orderBy)i.field.isKeyField()||(t=t.add(i.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&i.length>1&&2===n?1:n))}Vn(e,t){const n=new vs;for(const i of Q(e)){const e=t.data.field(i.fieldPath);if(null==e)return null;const r=n.Yt(i.kind);hs.vt.It(e,r)}return n.zt()}dn(e){const t=new vs;return hs.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new vs;return hs.vt.It(Dt(this.databaseId,t),n.Yt(function(e){const t=Q(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(null===n)return[];let i=[];i.push(new vs);let r=0;for(const s of Q(e)){const e=n[r++];for(const n of i)if(this.fn(t,s.fieldPath)&&Pt(e))i=this.gn(i,s,e);else{const t=n.Yt(s.kind);hs.vt.It(e,t)}}return this.pn(i)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const i=[...e],r=[];for(const s of n.arrayValue.values||[])for(const e of i){const n=new vs;n.seed(e.zt()),hs.vt.It(s,n.Yt(t.kind)),r.push(n)}return r}fn(e,t){return!!e.filters.find((e=>e instanceof en&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=Fs(e),i=Us(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next((e=>{const t=[];return se.forEach(e,(e=>i.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new J(t.sequenceNumber,new ee(Jr(t.readTime),new $(Te(t.documentKey)),t.largestBatchId)):J.empty(),i=e.fields.map((([e,t])=>new Y(z.fromServerFormat(e),t)));return new W(e.indexId,e.collectionGroup,i,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:F(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const i=Fs(e),r=Us(e);return this.yn(e).next((e=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>se.forEach(t,(t=>r.put(rs(t.indexId,this.uid,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return se.forEach(t,((t,i)=>{const r=n.get(t.collectionGroup);return(r?se.resolve(r):this.getFieldIndexes(e,t.collectionGroup)).next((r=>(n.set(t.collectionGroup,r),se.forEach(r,(n=>this.wn(e,t,n).next((t=>{const r=this.Sn(i,n);return t.isEqual(r)?se.resolve():this.bn(e,i,n,t,r)})))))))}))}Dn(e,t,n,i){return Ms(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,i){return Ms(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=Ms(e);let r=new st(bs);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},((e,i)=>{r=r.add(new ys(n.indexId,t,i.arrayValue,i.directionalValue))})).next((()=>r))}Sn(e,t){let n=new st(bs);const i=this.Vn(t,e);if(null==i)return n;const r=H(t);if(null!=r){const s=e.data.field(r.fieldPath);if(Pt(s))for(const r of s.arrayValue.values||[])n=n.add(new ys(t.indexId,e.key,this.dn(r),i))}else n=n.add(new ys(t.indexId,e.key,Ps,i));return n}bn(e,t,n,i,r){g("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,i,r){const s=e.getIterator(),a=t.getIterator();let o=ot(s),c=ot(a);for(;o||c;){let e=!1,t=!1;if(o&&c){const i=n(o,c);i<0?t=!0:i>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(i(c),c=ot(a)):t?(r(o),o=ot(s)):(o=ot(s),c=ot(a))}}(i,r,bs,(i=>{s.push(this.Dn(e,t,n,i))}),(i=>{s.push(this.vn(e,t,n,i))})),se.waitFor(s)}yn(e){let t=1;return Us(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,i)=>{i.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>bs(e,t))).filter(((e,t,n)=>!t||0!==bs(e,n[t-1])));const i=[];i.push(e);for(const s of n){const n=bs(s,e),r=bs(s,t);if(0===n)i[0]=e.Zt();else if(n>0&&r<0)i.push(s),i.push(s.Zt());else if(r>0)break}i.push(t);const r=[];for(let s=0;s<i.length;s+=2){if(this.Cn(i[s],i[s+1]))return[];const e=[i[s].indexId,this.uid,i[s].arrayValue,i[s].directionalValue,Ps,[]],t=[i[s+1].indexId,this.uid,i[s+1].arrayValue,i[s+1].directionalValue,Ps,[]];r.push(IDBKeyRange.bound(e,t))}return r}Cn(e,t){return bs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Vs)}getMinOffset(e,t){return se.mapArray(this.hn(t),(t=>this.Pn(e,t).next((e=>e||w())))).next(Vs)}}function Ls(e){return Xe(e,"collectionParents")}function Ms(e){return Xe(e,"indexEntries")}function Fs(e){return Xe(e,"indexConfiguration")}function Us(e){return Xe(e,"indexState")}function Vs(e){I(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let i=1;i<e.length;i++){const r=e[i].indexState.offset;te(r,t)<0&&(t=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new ee(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class js{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new js(e,js.DEFAULT_COLLECTION_PERCENTILE,js.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e,t,n){const i=e.store("mutations"),r=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId);let o=0;const c=i.J({range:a},((e,t,n)=>(o++,n.delete())));s.push(c.next((()=>{I(1===o)})));const u=[];for(const l of n.mutations){const e=Ae(t,l.key.path,n.batchId);s.push(r.delete(e)),u.push(l.key)}return se.waitFor(s).next((()=>u))}function Ks(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw w();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */js.DEFAULT_COLLECTION_PERCENTILE=10,js.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,js.DEFAULT=new js(41943040,js.DEFAULT_COLLECTION_PERCENTILE,js.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),js.DISABLED=new js(-1,0,0);class Gs{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(e,t,n,i){I(""!==e.uid);const r=e.isAuthenticated()?e.uid:"";return new Gs(r,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $s(e).J({index:"userMutationsIndex",range:n},((e,n,i)=>{t=!1,i.done()})).next((()=>t))}addMutationBatch(e,t,n,i){const r=Ws(e),s=$s(e);return s.add({}).next((a=>{I("number"==typeof a);const o=new Fi(a,t,n,i),c=function(e,t,n){const i=n.baseMutations.map((t=>Nr(e.ct,t))),r=n.mutations.map((t=>Nr(e.ct,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:i,mutations:r}}(this.serializer,this.userId,o),u=[];let l=new st(((e,t)=>F(e.canonicalString(),t.canonicalString())));for(const e of i){const t=Ae(this.userId,e.key.path,a);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(r.put(t,Ne))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Fn[a]=o.keys()})),se.waitFor(u).next((()=>o))}))}lookupMutationBatch(e,t){return $s(e).get(t).next((e=>e?(I(e.userId===this.userId),Xr(this.serializer,e)):null))}Mn(e,t){return this.Fn[t]?se.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Fn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return $s(e).J({index:"userMutationsIndex",range:i},((e,t,i)=>{t.userId===this.userId&&(I(t.batchId>=n),r=Xr(this.serializer,t)),i.done()})).next((()=>r))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return $s(e).J({index:"userMutationsIndex",range:t,reverse:!0},((e,t,i)=>{n=t.batchId,i.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return $s(e).U("userMutationsIndex",t).next((e=>e.map((e=>Xr(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ce(this.userId,t.path),i=IDBKeyRange.lowerBound(n),r=[];return Ws(e).J({range:i},((n,i,s)=>{const[a,o,c]=n,u=Te(o);if(a===this.userId&&t.path.isEqual(u))return $s(e).get(c).next((e=>{if(!e)throw w();I(e.userId===this.userId),r.push(Xr(this.serializer,e))}));s.done()})).next((()=>r))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new st(F);const i=[];return t.forEach((t=>{const r=Ce(this.userId,t.path),s=IDBKeyRange.lowerBound(r),a=Ws(e).J({range:s},((e,i,r)=>{const[s,a,o]=e,c=Te(a);s===this.userId&&t.path.isEqual(c)?n=n.add(o):r.done()}));i.push(a)})),se.waitFor(i).next((()=>this.xn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,r=Ce(this.userId,n),s=IDBKeyRange.lowerBound(r);let a=new st(F);return Ws(e).J({range:s},((e,t,r)=>{const[s,o,c]=e,u=Te(o);s===this.userId&&n.isPrefixOf(u)?u.length===i&&(a=a.add(c)):r.done()})).next((()=>this.xn(e,a)))}xn(e,t){const n=[],i=[];return t.forEach((t=>{i.push($s(e).get(t).next((e=>{if(null===e)throw w();I(e.userId===this.userId),n.push(Xr(this.serializer,e))})))})),se.waitFor(i).next((()=>n))}removeMutationBatch(e,t){return qs(e._e,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.On(t.batchId)})),se.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return se.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),i=[];return Ws(e).J({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Te(e[1]);i.push(t)}else n.done()})).next((()=>{I(0===i.length)}))}))}containsKey(e,t){return zs(e,this.userId,t)}Nn(e){return Hs(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function zs(e,t,n){const i=Ce(t,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let a=!1;return Ws(e).J({range:s,H:!0},((e,n,i)=>{const[s,o,c]=e;s===t&&o===r&&(a=!0),i.done()})).next((()=>a))}function $s(e){return Xe(e,"mutations")}function Ws(e){return Xe(e,"documentMutations")}function Hs(e){return Xe(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qs(0)}static kn(){return new Qs(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next((t=>{const n=new Qs(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.qn(e).next((e=>j.fromTimestamp(new B(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.qn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.qn(e).next((i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i))))}addTargetData(e,t){return this.Kn(e,t).next((()=>this.qn(e).next((n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Js(e).delete(t.targetId))).next((()=>this.qn(e))).next((t=>(I(t.targetCount>0),t.targetCount-=1,this.Qn(e,t))))}removeTargets(e,t,n){let i=0;const r=[];return Js(e).J(((s,a)=>{const o=Zr(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(i++,r.push(this.removeTargetData(e,o)))})).next((()=>se.waitFor(r))).next((()=>i))}forEachTarget(e,t){return Js(e).J(((e,n)=>{const i=Zr(n);t(i)}))}qn(e){return Xs(e).get("targetGlobalKey").next((e=>(I(null!==e),e)))}Qn(e,t){return Xs(e).put("targetGlobalKey",t)}Kn(e,t){return Js(e).put(es(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=In(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return Js(e).J({range:i,index:"queryTargetsIndex"},((e,n,i)=>{const s=Zr(n);_n(t,s.target)&&(r=s,i.done())})).next((()=>r))}addMatchingKeys(e,t,n){const i=[],r=Zs(e);return t.forEach((t=>{const s=_e(t.path);i.push(r.put({targetId:n,path:s})),i.push(this.referenceDelegate.addReference(e,n,t))})),se.waitFor(i)}removeMatchingKeys(e,t,n){const i=Zs(e);return se.forEach(t,(t=>{const r=_e(t.path);return se.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Zs(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Zs(e);let r=ti();return i.J({range:n,H:!0},((e,t,n)=>{const i=Te(e[1]),s=new $(i);r=r.add(s)})).next((()=>r))}containsKey(e,t){const n=_e(t.path),i=IDBKeyRange.bound([n],[V(n)],!1,!0);let r=0;return Zs(e).J({index:"documentTargetsIndex",H:!0,range:i},(([e,t],n,i)=>{0!==e&&(r++,i.done())})).next((()=>r>0))}ot(e,t){return Js(e).get(t).next((e=>e?Zr(e):null))}}function Js(e){return Xe(e,"targets")}function Xs(e){return Xe(e,"targetGlobal")}function Zs(e){return Xe(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea([e,t],[n,i]){const r=F(e,n);return 0===r?F(t,i):r}class ta{constructor(e){this.Un=e,this.buffer=new st(ea),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ea(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class na{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return null!==this.jn}Hn(e){g("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){he(e)?g("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await re(e)}await this.Hn(3e5)}))}}class ia{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return se.resolve(ye.oe);const n=new ta(t);return this.Jn.forEachTarget(e,(e=>n.zn(e.sequenceNumber))).next((()=>this.Jn.Zn(e,(e=>n.zn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector","Garbage collection skipped; disabled"),se.resolve(Bs)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bs):this.Xn(e,t)))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,i,r,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(g("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,s=Date.now(),this.nthSequenceNumber(e,i)))).next((i=>(n=i,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(r=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),p()<=a.$b.DEBUG&&g("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${i} in `+(o-s)+"ms\n"+`\tRemoved ${r} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),se.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:e}))))}}function ra(e,t){return new ia(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t){this.db=e,this.garbageCollector=ra(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}er(e){let t=0;return this.Zn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,((e,n)=>t(n)))}addReference(e,t,n){return aa(e,n)}removeReference(e,t,n){return aa(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return aa(e,t)}nr(e,t){return function(e,t){let n=!1;return Hs(e).Y((i=>zs(e,i,t).next((e=>(e&&(n=!0),se.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.tr(e,((s,a)=>{if(a<=t){const t=this.nr(e,s).next((t=>{if(!t)return r++,n.getEntry(e,s).next((()=>(n.removeEntry(s,j.min()),Zs(e).delete(function(e){return[0,_e(e.path)]}(s)))))}));i.push(t)}})).next((()=>se.waitFor(i))).next((()=>n.apply(e))).next((()=>r))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return aa(e,t)}tr(e,t){const n=Zs(e);let i,r=ye.oe;return n.J({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:a})=>{0===e?(r!==ye.oe&&t(new $(Te(i)),r),r=a,i=s):r=ye.oe})).next((()=>{r!==ye.oe&&t(new $(Te(i)),r)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function aa(e,t){return Zs(e).put(function(e,t){return{targetId:0,path:_e(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.changes=new Gn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?se.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return da(e).put(n)}removeEntry(e,t,n){return da(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Qr(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.rr(e,n))))}getEntry(e,t){let n=Wt.newInvalidDocument(t);return da(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(fa(t))},((e,i)=>{n=this.ir(t,i)})).next((()=>n))}sr(e,t){let n={size:0,document:Wt.newInvalidDocument(t)};return da(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(fa(t))},((e,i)=>{n={document:this.ir(t,i),size:Ks(i)}})).next((()=>n))}getEntries(e,t){let n=$n();return this._r(e,t,((e,t)=>{const i=this.ir(e,t);n=n.insert(e,i)})).next((()=>n))}ar(e,t){let n=$n(),i=new nt($.comparator);return this._r(e,t,((e,t)=>{const r=this.ir(e,t);n=n.insert(e,r),i=i.insert(e,Ks(t))})).next((()=>({documents:n,ur:i})))}_r(e,t,n){if(t.isEmpty())return se.resolve();let i=new st(ma);t.forEach((e=>i=i.add(e)));const r=IDBKeyRange.bound(fa(i.first()),fa(i.last())),s=i.getIterator();let a=s.getNext();return da(e).J({index:"documentKeyIndex",range:r},((e,t,i)=>{const r=$.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&ma(a,r)<0;)n(a,null),a=s.getNext();a&&a.isEqual(r)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?i.$(fa(a)):i.done()})).next((()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,i,r){const s=t.path,a=[s.popLast().toArray(),s.lastSegment(),Qr(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return da(e).U(IDBKeyRange.bound(a,o,!0)).next((e=>{null==r||r.incrementDocumentReadCount(e.length);let n=$n();for(const r of e){const e=this.ir($.fromSegments(r.prefixPath.concat(r.collectionGroup,r.documentId)),r);e.isFoundDocument()&&(Bn(t,e)||i.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,i){let r=$n();const s=pa(t,n),a=pa(t,ee.max());return da(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},((e,t,n)=>{const s=this.ir($.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);r=r.insert(s.key,s),r.size===i&&n.done()})).next((()=>r))}newChangeBuffer(e){return new la(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return ha(e).get("remoteDocumentGlobalKey").next((e=>(I(!!e),e)))}rr(e,t){return ha(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const e=Wr(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(j.min()))return e}return Wt.newInvalidDocument(e)}}function ua(e){return new ca(e)}class la extends oa{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Gn((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,i=new st(((e,t)=>F(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((r,s)=>{const a=this.lr.get(r);if(t.push(this.cr.removeEntry(e,r,a.readTime)),s.isValidDocument()){const o=Hr(this.cr.serializer,s);i=i.add(r.path.popLast());const c=Ks(o);n+=c-a.size,t.push(this.cr.addEntry(e,r,o))}else if(n-=a.size,this.trackRemovals){const n=Hr(this.cr.serializer,s.convertToNoDocument(j.min()));t.push(this.cr.addEntry(e,r,n))}})),i.forEach((n=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.cr.updateMetadata(e,n)),se.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next((e=>(this.lr.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.cr.ar(e,t).next((({documents:e,ur:t})=>(t.forEach(((t,n)=>{this.lr.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function ha(e){return Xe(e,"remoteDocumentGlobal")}function da(e){return Xe(e,"remoteDocumentsV14")}function fa(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function pa(e,t){const n=t.documentKey.path.toArray();return[e,Qr(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function ma(e,t){const n=e.path.toArray(),i=t.path.toArray();let r=0;for(let s=0;s<n.length-2&&s<i.length-2;++s)if(r=F(n[s],i[s]),r)return r;return r=F(n.length,i.length),r||(r=F(n[n.length-2],i[i.length-2]),r||F(n[n.length-1],i[i.length-1])
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class ga{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ci(n.mutation,e,ct.empty(),B.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,ti()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=ti()){const i=Yn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=Hn();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Yn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ti())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=$n();const s=Xn(),a=function(){return Xn()}();return t.forEach(((e,t)=>{const a=n.get(t.key);i.has(t.key)&&(void 0===a||a.mutation instanceof Di)?r=r.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),Ci(a.mutation,t,a.mutation.getFieldMask(),B.now())):s.set(t.key,ct.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new ga(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Xn();let i=new nt(((e,t)=>e-t)),r=ti();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let a=n.get(e)||ct.empty();a=r.applyToLocalView(s,a),n.set(e,a);const o=(i.get(r.batchId)||ti()).add(e);i=i.insert(r.batchId,o)}))})).next((()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const i=a.getNext(),o=i.key,c=i.value,u=Jn();c.forEach((e=>{if(!r.has(e)){const i=Ti(t.get(e),n.get(e));null!==i&&u.set(e,i),r=r.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return se.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,i){return function(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dn(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):se.resolve(Yn());let a=-1,o=r;return s.next((t=>se.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(t)?se.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{o=o.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,o,t,ti()))).next((e=>({batchId:a,changes:Qn(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next((e=>{let t=Hn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const r=t.collectionGroup;let s=Hn();return this.indexManager.getCollectionParents(e,r).next((a=>se.forEach(a,(a=>{const o=function(e,t){return new Cn(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n,i).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i)))).next((e=>{r.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,Wt.newInvalidDocument(i)))}));let n=Hn();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&Ci(s.mutation,i,ct.empty(),B.now()),Bn(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return se.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:mr(e.createTime)}}(t)),se.resolve()}getNamedQuery(e,t){return se.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(e){return{name:e.name,query:ts(e.bundledQuery),readTime:mr(e.readTime)}}(t)),se.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.overlays=new nt($.comparator),this.Ir=new Map}getOverlay(e,t){return se.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Yn();return se.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.ht(e,t,i)})),se.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),se.resolve()}getOverlaysForCollection(e,t,n){const i=Yn(),r=t.length+1,s=new $(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return se.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new nt(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=Yn(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Yn(),o=r.getIterator();for(;o.hasNext();)if(o.getNext().value.forEach(((e,t)=>a.set(e,t))),a.size()>=i)break;return se.resolve(a)}ht(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Vi(t,n));let r=this.Ir.get(t);void 0===r&&(r=ti(),this.Ir.set(t,r)),this.Ir.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return se.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,se.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.Tr=new st(_a.Er),this.dr=new st(_a.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new _a(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new _a(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new $(new K([])),n=new _a(t,e),i=new _a(t,e+1),r=[];return this.dr.forEachInRange([n,i],(e=>{this.Vr(e),r.push(e.key)})),r}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new K([])),n=new _a(t,e),i=new _a(t,e+1);let r=ti();return this.dr.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new _a(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class _a{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||F(e.wr,t.wr)}static Ar(e,t){return F(e.wr,t.wr)||$.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new st(_a.Er)}checkEmpty(e){return se.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Fi(r,t,n,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new _a(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return se.resolve(s)}lookupMutationBatch(e,t){return se.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),r=i<0?0:i;return se.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new _a(t,0),i=new _a(t,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([n,i],(e=>{const t=this.Dr(e.wr);r.push(t)})),se.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new st(F);return t.forEach((e=>{const t=new _a(e,0),i=new _a(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,i],(e=>{n=n.add(e.wr)}))})),se.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;$.isDocumentKey(r)||(r=r.child(""));const s=new _a(new $(r),0);let a=new st(F);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(a=a.add(e.wr)),!0)}),s),se.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){I(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return se.forEach(t.mutations,(i=>{const r=new _a(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new _a(t,0),i=this.br.firstAfterOrEqual(n);return se.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.Mr=e,this.docs=function(){return new nt($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return se.resolve(n?n.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let n=$n();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Wt.newInvalidDocument(e))})),se.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=$n();const s=t.path,a=new $(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||te(Z(a),n)<=0||(i.has(a.key)||Bn(t,a))&&(r=r.insert(a.key,a.mutableCopy()))}return se.resolve(r)}getAllFromCollectionGroup(e,t,n,i){w()}Or(e,t){return se.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ta(this)}getSize(e){return se.resolve(this.size)}}class Ta extends oa{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)})),se.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.persistence=e,this.Nr=new Gn((e=>In(e)),_n),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ia,this.targetCount=0,this.kr=Qs.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),se.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Qs(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,se.resolve()}updateTargetData(e,t){return this.Kn(t),se.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Nr.forEach(((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Nr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)})),se.waitFor(r).next((()=>i))}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return se.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),se.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),se.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),se.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return se.resolve(n)}containsKey(e,t){return se.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ye(0),this.Kr=!1,this.Kr=!0,this.$r=new wa,this.referenceDelegate=e(this),this.Ur=new ka(this),this.indexManager=new Ds,this.remoteDocumentCache=function(e){return new Ea(e)}((e=>this.referenceDelegate.Wr(e))),this.serializer=new $r(t),this.Gr=new ya(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ba,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Sa(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);const i=new Aa(this.Qr.next());return this.referenceDelegate.zr(),n(i).next((e=>this.referenceDelegate.jr(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Hr(e,t){return se.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class Aa extends ie{constructor(e){super(),this.currentSequenceNumber=e}}class Na{constructor(e){this.persistence=e,this.Jr=new Ia,this.Yr=null}static Zr(e){return new Na(e)}get Xr(){if(this.Yr)return this.Yr;throw w()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),se.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),se.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),se.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.Xr,(n=>{const i=$.fromPath(n);return this.ei(e,i).next((e=>{e||t.removeEntry(i,j.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return se.or([()=>se.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.serializer=e}O(e,t,n,i){const r=new ae("createOrUpgrade",t);n<1&&i>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ke,{unique:!0}),e.createObjectStore("documentMutations")}(e),Da(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=se.resolve();return n<3&&i>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Da(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(r)))),n<4&&i>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").U().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ke,{unique:!0});const i=t.store("mutations"),r=n.map((e=>i.put(e)));return se.waitFor(r)}))}(e,r)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&i>=5&&(s=s.next((()=>this.ni(r)))),n<6&&i>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.ri(r))))),n<7&&i>=7&&(s=s.next((()=>this.ii(r)))),n<8&&i>=8&&(s=s.next((()=>this.si(e,r)))),n<9&&i>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&i>=10&&(s=s.next((()=>this.oi(r)))),n<11&&i>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&i>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:je});t.createIndex("collectionPathOverlayIndex",qe,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Ke,{unique:!1})}(e)}))),n<13&&i>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Re});t.createIndex("documentKeyIndex",De),t.createIndex("collectionGroupIndex",xe)}(e))).next((()=>this._i(e,r))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&i>=14&&(s=s.next((()=>this.ai(e,r)))),n<15&&i>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Fe}).createIndex("sequenceNumberIndex",Ue,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Ve}).createIndex("documentKeyIndex",Be,{unique:!1})}(e)))),n<16&&i>=16&&(s=s.next((()=>{t.objectStore("indexState").clear()})).next((()=>{t.objectStore("indexEntries").clear()}))),n<17&&i>=17&&(s=s.next((()=>{!function(e){e.createObjectStore("globals",{keyPath:"name"})}(e)}))),s}ri(e){let t=0;return e.store("remoteDocuments").J(((e,n)=>{t+=Ks(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next((t=>se.forEach(t,(t=>{const i=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",i).next((n=>se.forEach(n,(n=>{I(n.userId===t.userId);const i=Xr(this.serializer,n);return qs(e,t.userId,i).next((()=>{}))}))))}))))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const i=[];return n.J(((n,r)=>{const s=new K(n),a=function(e){return[0,_e(e)]}(s);i.push(t.get(a).next((n=>n?se.resolve():(n=>t.put({targetId:0,path:_e(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>se.waitFor(i)))}))}si(e,t){e.createObjectStore("collectionParents",{keyPath:Me});const n=t.store("collectionParents"),i=new xs,r=e=>{if(i.add(e)){const t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:_e(i)})}};return t.store("remoteDocuments").J({H:!0},((e,t)=>{const n=new K(e);return r(n.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([e,t,n],i)=>{const s=Te(t);return r(s.popLast())}))))}oi(e){const t=e.store("targets");return t.J(((e,n)=>{const i=Zr(n),r=es(this.serializer,i);return t.put(r)}))}_i(e,t){const n=t.store("remoteDocuments"),i=[];return n.J(((e,n)=>{const r=t.store("remoteDocumentsV14"),s=function(e){return e.document?new $(K.fromString(e.document.name).popFirst(5)):e.noDocument?$.fromSegments(e.noDocument.path):e.unknownDocument?$.fromSegments(e.unknownDocument.path):w()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};i.push(r.put(a))})).next((()=>se.waitFor(i)))}ai(e,t){const n=t.store("mutations"),i=ua(this.serializer),r=new Ca(Na.Zr,this.serializer.ct);return n.U().next((e=>{const n=new Map;return e.forEach((e=>{var t;let i=null!==(t=n.get(e.userId))&&void 0!==t?t:ti();Xr(this.serializer,e).keys().forEach((e=>i=i.add(e))),n.set(e.userId,i)})),se.forEach(n,((e,n)=>{const s=new h(n),a=cs.lt(this.serializer,s),o=r.getIndexManager(s),c=Gs.lt(s,this.serializer,o,r.referenceDelegate);return new va(i,c,a,o).recalculateAndSaveOverlaysForDocumentKeys(new Je(t,ye.oe),e).next()}))}))}}function Da(e){e.createObjectStore("targetDocuments",{keyPath:Oe}).createIndex("documentTargetsIndex",Le,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Pe,{unique:!0}),e.createObjectStore("targetGlobal")}const xa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Pa{constructor(e,t,n,i,r,s,a,o,c,u,l=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=r,this.window=s,this.document=a,this.ci=c,this.li=u,this.hi=l,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=e=>Promise.resolve(),!Pa.D())throw new T(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sa(this,i),this.Ai=t+"main",this.serializer=new $r(o),this.Ri=new oe(this.Ai,this.hi,new Ra(this.serializer)),this.$r=new ls,this.Ur=new Ys(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ua(this.serializer),this.Gr=new ss,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,!1===u&&v("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,xa);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Ur.getHighestSequenceNumber(e)))})).then((e=>{this.Qr=new ye(e,this.ci)})).then((()=>{this.Kr=!0})).catch((e=>(this.Ri&&this.Ri.close(),Promise.reject(e))))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget((async()=>{this.started&&await this.mi()})))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>La(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.wi(e).next((e=>{e||(this.isPrimary=!1,this.ui.enqueueRetryable((()=>this.di(!1))))}))})).next((()=>this.Si(e))).next((t=>this.isPrimary&&!t?this.bi(e).next((()=>!1)):!!t&&this.Di(e).next((()=>!0)))))).catch((e=>{if(he(e))return g("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return g("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.ui.enqueueRetryable((()=>this.di(e))),this.isPrimary=e}))}wi(e){return Oa(e).get("owner").next((e=>se.resolve(this.vi(e))))}Ci(e){return La(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Xe(e,"clientMetadata");return t.U().next((e=>{const n=this.xi(e,18e5),i=e.filter((e=>-1===n.indexOf(e)));return se.forEach(i,(e=>t.delete(e.clientId))).next((()=>i))}))})).catch((()=>[]));if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.mi().then((()=>this.Fi())).then((()=>this.pi()))))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?se.resolve(!0):Oa(e).get("owner").next((t=>{if(null!==t&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,xa);return!1}}return!(!this.networkEnabled||!this.inForeground)||La(e).U().next((e=>void 0===this.xi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,i=this.networkEnabled===e.networkEnabled;if(t||n&&i)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&g("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Je(e,ye.oe);return this.bi(t).next((()=>this.Ci(t)))})),this.Ri.close(),this.qi()}xi(e,t){return e.filter((e=>this.Mi(e.updateTimeMs,t)&&!this.Ni(e.clientId)))}Qi(){return this.runTransaction("getActiveClients","readonly",(e=>La(e).U().next((e=>this.xi(e,18e5).map((e=>e.clientId))))))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Gs.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Os(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return cs.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){g("IndexedDbPersistence","Starting transaction:",e);const i="readonly"===t?"readonly":"readwrite",r=function(e){return 17===e?Ye:16===e?Qe:15===e?He:14===e?We:13===e?$e:12===e?ze:11===e?Ge:void w()}(this.hi);let s;return this.Ri.runTransaction(e,i,r,(i=>(s=new Je(i,this.Qr?this.Qr.next():ye.oe),"readwrite-primary"===t?this.wi(s).next((e=>!!e||this.Si(s))).next((t=>{if(!t)throw v(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable((()=>this.di(!1))),new T(E.FAILED_PRECONDITION,ne);return n(s)})).next((e=>this.Di(s).next((()=>e)))):this.Ki(s).next((()=>n(s)))))).then((e=>(s.raiseOnCommittedEvent(),e)))}Ki(e){return Oa(e).get("owner").next((e=>{if(null!==e&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)&&!this.vi(e)&&!(this.li||this.allowTabSynchronization&&e.allowTabSynchronization))throw new T(E.FAILED_PRECONDITION,xa)}))}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Oa(e).put("owner",t)}static D(){return oe.D()}bi(e){const t=Oa(e);return t.get("owner").next((e=>this.vi(e)?(g("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):se.resolve()))}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(v(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ii=()=>{this.ui.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.mi())))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground="visible"===this.document.visibilityState)}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Pi=()=>{this.Li();const e=/(?:Version|Mobile)\/1[456]/;(0,o.nr)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=null!==(null===(t=this.Vi)||void 0===t?void 0:t.getItem(this.Oi(e)));return g("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return v("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){v("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch(e){}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Oa(e){return Xe(e,"owner")}function La(e){return Xe(e,"clientMetadata")}function Ma(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Fa{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=ti(),i=ti();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fa(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,o.nr)()?8:ce((0,o.ZQ)())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const r={result:null};return this.Yi(e,t).next((e=>{r.result=e})).next((()=>{if(!r.result)return this.Zi(e,t,i,n).next((e=>{r.result=e}))})).next((()=>{if(r.result)return;const n=new Ua;return this.Xi(e,t,n).next((i=>{if(r.result=i,this.zi)return this.es(e,t,n,i.size)}))})).next((()=>r.result))}es(e,t,n,i){return n.documentReadCount<this.ji?(p()<=a.$b.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",Vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),se.resolve()):(p()<=a.$b.DEBUG&&g("QueryEngine","Query:",Vn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(p()<=a.$b.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",Vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(t))):se.resolve())}Yi(e,t){if(Rn(t))return se.resolve(null);let n=Pn(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Mn(t,null,"F"),n=Pn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=ti(...i);return this.Ji.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ts(t,i);return this.ns(t,s,r,n.readTime)?this.Yi(e,Mn(t,null,"F")):this.rs(e,s,t,n)}))))})))))}Zi(e,t,n,i){return Rn(t)||i.isEqual(j.min())?se.resolve(null):this.Ji.getDocuments(e,n).next((r=>{const s=this.ts(t,r);return this.ns(t,s,n,i)?se.resolve(null):(p()<=a.$b.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vn(t)),this.rs(e,s,t,X(i,-1)).next((e=>e)))}))}ts(e,t){let n=new st(qn(e));return t.forEach(((t,i)=>{Bn(e,i)&&(n=n.add(i))})),n}ns(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(e,t,n){return p()<=a.$b.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",Vn(t)),this.Ji.getDocumentsMatchingQuery(e,t,ee.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new nt(F),this._s=new Gn((e=>In(e)),_n),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new va(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function ja(e,t,n,i){return new Ba(e,t,n,i)}async function qa(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let a=ti();for(const e of i){r.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({hs:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function Ka(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let a=se.resolve();return s.forEach((e=>{a=a.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);I(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ti();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}function Ga(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function za(e,t){const n=S(e),i=t.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const a=[];t.targetChanges.forEach(((s,o)=>{const c=r.get(o);if(!c)return;a.push(n.Ur.removeMatchingKeys(e,s.removedDocuments,o).next((()=>n.Ur.addMatchingKeys(e,s.addedDocuments,o))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(o)?u=u.withResumeToken(ht.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,i)),r=r.insert(o,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&a.push(n.Ur.updateTargetData(e,u))}));let o=$n(),c=ti();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),a.push($a(e,s,t.documentUpdates).next((e=>{o=e.Ps,c=e.Is}))),!i.isEqual(j.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,i)));a.push(t)}return se.waitFor(a).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,o,c))).next((()=>o))})).then((e=>(n.os=r,e)))}function $a(e,t,n){let i=ti(),r=ti();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=$n();return n.forEach(((n,s)=>{const a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(j.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)})),{Ps:i,Is:r}}))}function Wa(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ha(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Ur.getTargetData(e,t).next((r=>r?(i=r,se.resolve(i)):n.Ur.allocateTargetId(e).next((r=>(i=new zr(t,r,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.os.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}async function Qa(e,t,n){const i=S(e),r=i.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!he(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.os=i.os.remove(t),i._s.delete(r.target)}function Ya(e,t,n){const i=S(e);let r=j.min(),s=ti();return i.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const i=S(e),r=i._s.get(n);return void 0!==r?se.resolve(i.os.get(r)):i.Ur.getTargetData(t,n)}(i,e,Pn(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>i.ss.getDocumentsMatchingQuery(e,t,n?r:j.min(),n?s:ti()))).next((e=>(Za(i,jn(t),e),{documents:e,Ts:s})))))}function Ja(e,t){const n=S(e),i=S(n.Ur),r=n.os.get(t);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",(e=>i.ot(e,t).next((e=>e?e.target:null))))}function Xa(e,t){const n=S(e),i=n.us.get(t)||j.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.cs.getAllFromCollectionGroup(e,t,X(i,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Za(n,t,e),e)))}function Za(e,t,n){let i=e.us.get(t)||j.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.us.set(t,i)}async function eo(e,t,n,i){const r=S(e);let s=ti(),a=$n();for(const u of n){const e=t.Es(u.metadata.name);u.document&&(s=s.add(e));const n=t.ds(u);n.setReadTime(t.As(u.metadata.readTime)),a=a.insert(e,n)}const o=r.cs.newChangeBuffer({trackRemovals:!0}),c=await Ha(r,function(e){return Pn(Nn(K.fromString(`__bundle__/docs/${e}`)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",(e=>$a(e,o,a).next((t=>(o.apply(e),t))).next((t=>r.Ur.removeMatchingKeysForTargetId(e,c.targetId).next((()=>r.Ur.addMatchingKeys(e,s,c.targetId))).next((()=>r.localDocuments.getLocalViewOfDocuments(e,t.Ps,t.Is))).next((()=>t.Ps))))))}async function to(e,t,n=ti()){const i=await Ha(e,Pn(ts(t.bundledQuery))),r=S(e);return r.persistence.runTransaction("Save named query","readwrite",(e=>{const s=mr(t.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.Gr.saveNamedQuery(e,t);const a=i.withResumeToken(ht.EMPTY_BYTE_STRING,s);return r.os=r.os.insert(a.targetId,a),r.Ur.updateTargetData(e,a).next((()=>r.Ur.removeMatchingKeysForTargetId(e,i.targetId))).next((()=>r.Ur.addMatchingKeys(e,n,i.targetId))).next((()=>r.Gr.saveNamedQuery(e,t)))}))}function no(e,t){return`firestore_clients_${e}_${t}`}function io(e,t,n){let i=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(i+=`_${t.uid}`),i}function ro(e,t){return`firestore_targets_${e}_${t}`}class so{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Rs(e,t,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new T(i.error.code,i.error.message))),s?new so(e,t,i.state,r):(v("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ao{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new T(n.error.code,n.error.message))),r?new ao(e,n.state,i):(v("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class oo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=ii();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=Ie(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new oo(e,r):(v("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class co{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new co(t.clientId,t.onlineState):(v("SharedClientState",`Failed to parse online state: ${e}`),null)}}class uo{constructor(){this.activeTargetIds=ii()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lo{constructor(e,t,n,i,r){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new nt(F),this.started=!1,this.bs=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.Ds=no(this.persistenceKey,this.ps),this.vs=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new uo),this.Cs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.xs=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Os=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const e=this.getItem(no(this.persistenceKey,n));if(e){const t=oo.Rs(n,e);t&&(this.Ss=this.Ss.insert(t.clientId,t))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const e=this.Ls(t);e&&this.Bs(e)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach(((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const t=this.storage.getItem(ro(this.persistenceKey,e));if(t){const i=ao.Rs(e,t);i&&(n=i.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ro(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Qs(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return g("SharedClientState","READ",e,t),t}setItem(e,t){g("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){g("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(g("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void v("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Cs.test(t.key)){if(null==t.newValue){const e=this.Gs(t.key);return this.zs(e,null)}{const e=this.js(t.key,t.newValue);if(e)return this.zs(e.clientId,e)}}else if(this.Fs.test(t.key)){if(null!==t.newValue){const e=this.Hs(t.key,t.newValue);if(e)return this.Js(e)}}else if(this.Ms.test(t.key)){if(null!==t.newValue){const e=this.Ys(t.key,t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.xs){if(null!==t.newValue){const e=this.Ls(t.newValue);if(e)return this.Bs(e)}}else if(t.key===this.vs){const e=function(e){let t=ye.oe;if(null!=e)try{const n=JSON.parse(e);I("number"==typeof n),t=n}catch(e){v("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ye.oe&&this.sequenceNumberHandler(e)}else if(t.key===this.Os){const e=this.Xs(t.newValue);await Promise.all(e.map((e=>this.syncEngine.eo(e))))}}else this.bs.push(t)}))}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const i=new so(this.currentUser,e,t,n),r=io(this.persistenceKey,this.currentUser,e);this.setItem(r,i.Vs())}Qs(e){const t=io(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const i=ro(this.persistenceKey,e),r=new ao(e,t,n);this.setItem(i,r.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return oo.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return so.Rs(new h(r),i,t)}Ys(e,t){const n=this.Ms.exec(e),i=Number(n[1]);return ao.Rs(i,t)}Ls(e){return co.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);g("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),r=this.ks(n),s=[],a=[];return r.forEach((e=>{i.has(e)||s.push(e)})),i.forEach((e=>{r.has(e)||a.push(e)})),this.syncEngine.io(s,a).then((()=>{this.Ss=n}))}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=ii();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class ho{constructor(){this.so=new uo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new uo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo=null;function go(){return null===mo?mo=function(){return 268435456+Math.round(2147483648*Math.random())}():mo++,"0x"+mo.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const vo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="WebChannelConnection";class wo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${i}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Fo(){return!1}Mo(e,t,n,i,r){const s=go(),a=this.xo(e,t.toUriEncodedString());g("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);const o={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(o,i,r),this.No(e,a,o,n).then((t=>(g("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw y("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t}))}Lo(e,t,n,i,r,s){return this.Mo(e,t,n,i,r)}Oo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+d}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=vo[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const r=go();return new Promise(((s,a)=>{const o=new u.ZS;o.setWithCredentials(!0),o.listenOnce(u.Bx.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case u.O4.NO_ERROR:const t=o.getResponseJson();g(bo,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case u.O4.TIMEOUT:g(bo,`RPC '${e}' ${r} timed out`),a(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.O4.HTTP_ERROR:const n=o.getStatus();if(g(bo,`RPC '${e}' ${r} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new T(e,t.message))}else a(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g(bo,`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(i);g(bo,`RPC '${e}' ${r} sending request:`,i),o.send(t,"POST",c,n,15)}))}Bo(e,t,n){const i=go(),r=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=(0,u.fF)(),a=(0,u.Ao)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(o.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(o.xmlHttpFactory=new u._L({})),this.Oo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const l=r.join("");g(bo,`Creating RPC '${e}' stream ${i}: ${l}`,o);const h=s.createWebChannel(l,o);let d=!1,f=!1;const p=new yo({Io:t=>{f?g(bo,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(g(bo,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),g(bo,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},To:()=>h.close()}),m=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return m(h,u.iO.EventType.OPEN,(()=>{f||(g(bo,`RPC '${e}' stream ${i} transport opened.`),p.yo())})),m(h,u.iO.EventType.CLOSE,(()=>{f||(f=!0,g(bo,`RPC '${e}' stream ${i} transport closed`),p.So())})),m(h,u.iO.EventType.ERROR,(t=>{f||(f=!0,y(bo,`RPC '${e}' stream ${i} transport errored:`,t),p.So(new T(E.UNAVAILABLE,"The operation could not be completed")))})),m(h,u.iO.EventType.MESSAGE,(t=>{var n;if(!f){const r=t.data[0];I(!!r);const s=r,a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){g(bo,`RPC '${e}' stream ${i} received error:`,a);const t=a.status;let n=function(e){const t=ji[e];if(void 0!==t)return Gi(t)}(t),r=a.message;void 0===n&&(n=E.INTERNAL,r="Unknown error status: "+t+" with message "+a.message),f=!0,p.So(new T(n,r)),h.close()}else g(bo,`RPC '${e}' stream ${i} received:`,r),p.bo(r)}})),m(a,u.Jh.STAT_EVENT,(t=>{t.stat===u.ro.PROXY?g(bo,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.ro.NOPROXY&&g(bo,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{p.wo()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(){return"undefined"!=typeof window?window:null}function _o(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e){return new lr(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,n=1e3,i=1.5,r=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&g("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t,n,i,r,s,a,o){this.ui=e,this.Ho=n,this.Jo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Eo(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(v(t.toString()),v("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ko extends To{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Ar(this.serializer,e),n=function(e){if(!("targetChange"in e))return j.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?j.min():t.readTime?mr(t.readTime):j.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Sr(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=Sn(i)?{documents:xr(e,i)}:{query:Pr(e,i)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=fr(e,t.resumeToken);const i=hr(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(j.min())>0){n.readTime=dr(e,t.snapshotVersion.toTimestamp());const i=hr(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=Lr(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Sr(this.serializer),t.removeTarget=e,this.a_(t)}}class Co extends To{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return I(!!e.streamToken),this.lastStreamToken=e.streamToken,I(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){I(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Dr(e.writeResults,e.commitTime),n=mr(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Sr(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Nr(this.serializer,e)))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Mo(e,vr(t,n),i,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())}))}Lo(e,t,n,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Lo(e,vr(t,n),i,s,a,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class No{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(v(t),this.D_=!1):g("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o((e=>{n.enqueueAndForget((async()=>{Vo(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=S(e);t.L_.add(4),await xo(t),t.q_.set("Unknown"),t.L_.delete(4),await Do(t)}(this))}))})),this.q_=new No(n,i)}}async function Do(e){if(Vo(e))for(const t of e.B_)await t(!0)}async function xo(e){for(const t of e.B_)await t(!1)}function Po(e,t){const n=S(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),Uo(n)?Fo(n):rc(n).r_()&&Lo(n,t))}function Oo(e,t){const n=S(e),i=rc(n);n.N_.delete(t),i.r_()&&Mo(n,t),0===n.N_.size&&(i.r_()?i.o_():Vo(n)&&n.q_.set("Unknown"))}function Lo(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rc(e).A_(t)}function Mo(e,t){e.Q_.xe(t),rc(e).R_(t)}function Fo(e){e.Q_=new rr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),rc(e).start(),e.q_.v_()}function Uo(e){return Vo(e)&&!rc(e).n_()&&e.N_.size>0}function Vo(e){return 0===S(e).L_.size}function Bo(e){e.Q_=void 0}async function jo(e){e.q_.set("Online")}async function qo(e){e.N_.forEach(((t,n)=>{Lo(e,t)}))}async function Ko(e,t){Bo(e),Uo(e)?(e.q_.M_(t),Fo(e)):e.q_.set("Unknown")}async function Go(e,t,n){if(e.q_.set("Online"),t instanceof nr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.N_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.N_.delete(i),e.Q_.removeTarget(i))}(e,t)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await zo(e,n)}else if(t instanceof er?e.Q_.Ke(t):t instanceof tr?e.Q_.He(t):e.Q_.We(t),!n.isEqual(j.min()))try{const t=await Ga(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.N_.get(i);r&&e.N_.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.N_.get(t);if(!i)return;e.N_.set(t,i.withResumeToken(ht.EMPTY_BYTE_STRING,i.snapshotVersion)),Mo(e,t);const r=new zr(i.target,t,n,i.sequenceNumber);Lo(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await zo(e,t)}}async function zo(e,t,n){if(!he(t))throw t;e.L_.add(1),await xo(e),e.q_.set("Offline"),n||(n=()=>Ga(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Do(e)}))}function $o(e,t){return t().catch((n=>zo(e,n,t)))}async function Wo(e){const t=S(e),n=sc(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Ho(t);)try{const e=await Wa(t.localStore,i);if(null===e){0===t.O_.length&&n.o_();break}i=e.batchId,Qo(t,e)}catch(e){await zo(t,e)}Yo(t)&&Jo(t)}function Ho(e){return Vo(e)&&e.O_.length<10}function Qo(e,t){e.O_.push(t);const n=sc(e);n.r_()&&n.V_&&n.m_(t.mutations)}function Yo(e){return Vo(e)&&!sc(e).n_()&&e.O_.length>0}function Jo(e){sc(e).start()}async function Xo(e){sc(e).p_()}async function Zo(e){const t=sc(e);for(const n of e.O_)t.m_(n.mutations)}async function ec(e,t,n){const i=e.O_.shift(),r=Ui.from(i,t,n);await $o(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Wo(e)}async function tc(e,t){t&&sc(e).V_&&await async function(e,t){if(function(e){return Ki(e)&&e!==E.ABORTED}(t.code)){const n=e.O_.shift();sc(e).s_(),await $o(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Wo(e)}}(e,t),Yo(e)&&Jo(e)}async function nc(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const i=Vo(n);n.L_.add(3),await xo(n),i&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Do(n)}async function ic(e,t){const n=S(e);t?(n.L_.delete(2),await Do(n)):t||(n.L_.add(2),await xo(n),n.q_.set("Unknown"))}function rc(e){return e.K_||(e.K_=function(e,t,n){const i=S(e);return i.w_(),new ko(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Eo:jo.bind(null,e),Ro:qo.bind(null,e),mo:Ko.bind(null,e),d_:Go.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),Uo(e)?Fo(e):e.q_.set("Unknown")):(await e.K_.stop(),Bo(e))}))),e.K_}function sc(e){return e.U_||(e.U_=function(e,t,n){const i=S(e);return i.w_(),new Co(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Xo.bind(null,e),mo:tc.bind(null,e),f_:Zo.bind(null,e),g_:ec.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await Wo(e)):(await e.U_.stop(),e.O_.length>0&&(g("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ac{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new k,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,a=new ac(e,t,s,i,r);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oc(e,t){if(v("AsyncQueue",`${t}: ${e}`),he(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(e,t)=>$.comparator(e.key,t.key),this.keyedMap=Hn(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new cc(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cc))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new cc;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.W_=new nt($.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):w():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class lc{constructor(e,t,n,i,r,s,a,o,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,i,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new lc(e,t,cc.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class dc{constructor(){this.queries=fc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=S(e),i=n.queries;n.queries=fc(),i.forEach(((e,n)=>{for(const i of n.j_)i.onError(t)}))}(this,new T(E.ABORTED,"Firestore shutting down"))}}function fc(){return new Gn((e=>Un(e)),Fn)}async function pc(e,t){const n=S(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.H_()&&t.J_()&&(i=2):(s=new hc,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await n.onListen(r,!0);break;case 1:s.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(e){const n=oc(e,`Initialization of query '${Vn(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&yc(n)}async function mc(e,t){const n=S(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const e=s.j_.indexOf(t);e>=0&&(s.j_.splice(e,1),0===s.j_.length?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function gc(e,t){const n=S(e);let i=!1;for(const r of t){const e=r.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(r)&&(i=!0);t.z_=r}}i&&yc(n)}function vc(e,t,n){const i=S(e),r=i.queries.get(t);if(r)for(const s of r.j_)s.onError(n);i.queries.delete(t)}function yc(e){e.Y_.forEach((e=>{e.next()}))}var bc,wc;(wc=bc||(bc={})).ea="default",wc.Cache="cache";class Ic{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new lc(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=lc.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bc.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.serializer=e}Es(e){return wr(this.serializer,e)}ds(e){return e.metadata.exists?kr(this.serializer,e.document,!1):Wt.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return mr(e)}}class Ec{constructor(e,t,n){this.ca=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Tc(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const n=K.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,n=new Sc(this.serializer);for(const i of e)if(i.metadata.queries){const e=n.Es(i.metadata.name);for(const n of i.metadata.queries){const i=(t.get(n)||ti()).add(e);t.set(n,i)}}return t}async complete(){const e=await eo(this.localStore,new Sc(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const n of this.queries)await to(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function Tc(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.key=e}}class Cc{constructor(e){this.key=e}}class Ac{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ti(),this.mutatedKeys=ti(),this.Aa=qn(e),this.Ra=new cc(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new uc,i=t?t.Ra:this.Ra;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,a=!1;const o="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const u=i.get(e),l=Bn(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ga(u,l)||(n.track({type:2,doc:l}),f=!0,(o&&this.Aa(l,o)>0||c&&this.Aa(l,c)<0)&&(a=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(o||c)&&(a=!0)),f&&(l?(s=s.add(l),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:a,mutatedKeys:r}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const r=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),i=null!=i&&i;const a=t&&!i?this.ya():[],o=0===this.da.size&&this.current&&!i?1:0,c=o!==this.Ea;return this.Ea=o,0!==s.length||c?{snapshot:new lc(this.query,e.Ra,r,s,e.mutatedKeys,0===o,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new uc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ti(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new Cc(e))})),this.da.forEach((n=>{e.has(n)||t.push(new kc(n))})),t}ba(e){this.Ta=e.Ts,this.da=ti();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return lc.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Nc{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Rc{constructor(e){this.key=e,this.va=!1}}class Dc{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Gn((e=>Un(e)),Fn),this.Ma=new Map,this.xa=new Set,this.Oa=new nt($.comparator),this.Na=new Map,this.La=new Ia,this.Ba={},this.ka=new Map,this.qa=Qs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function xc(e,t,n=!0){const i=lu(e);let r;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await Oc(i,t,n,!0),r}async function Pc(e,t){const n=lu(e);await Oc(n,t,!0,!1)}async function Oc(e,t,n,i){const r=await Ha(e.localStore,Pn(t)),s=r.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let o;return i&&(o=await Lc(e,t,s,"current"===a,r.resumeToken)),e.isPrimaryClient&&n&&Po(e.remoteStore,r),o}async function Lc(e,t,n,i,r){e.Ka=(t,n,i)=>async function(e,t,n,i){let r=t.view.ma(n);r.ns&&(r=await Ya(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,r))));const s=i&&i.targetChanges.get(t.targetId),a=i&&null!=i.targetMismatches.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s,a);return Qc(e,t.targetId,o.wa),o.snapshot}(e,t,n,i);const s=await Ya(e.localStore,t,!0),a=new Ac(t,s.Ts),o=a.ma(s.documents),c=Zi.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),u=a.applyChanges(o,e.isPrimaryClient,c);Qc(e,n,u.wa);const l=new Nc(t,n,a);return e.Fa.set(t,l),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function Mc(e,t,n){const i=S(e),r=i.Fa.get(t),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter((e=>!Fn(e,t)))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Qa(i.localStore,r.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(r.targetId),n&&Oo(i.remoteStore,r.targetId),Wc(i,r.targetId)})).catch(re)):(Wc(i,r.targetId),await Qa(i.localStore,r.targetId,!0))}async function Fc(e,t){const n=S(e),i=n.Fa.get(t),r=n.Ma.get(i.targetId);n.isPrimaryClient&&1===r.length&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Oo(n.remoteStore,i.targetId))}async function Uc(e,t,n){const i=hu(e);try{const e=await function(e,t){const n=S(e),i=B.now(),r=t.reduce(((e,t)=>e.add(t.key)),ti());let s,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let o=$n(),c=ti();return n.cs.getEntries(e,r).next((e=>{o=e,o.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,o))).next((r=>{s=r;const a=[];for(const e of t){const t=Ai(e,s.get(e.key).overlayedDocument);null!=t&&a.push(new Di(e.key,t,$t(t.value.mapValue),_i.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,a,t)})).next((t=>{a=t;const i=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:a.batchId,changes:Qn(s)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Ba[e.currentUser.toKey()];i||(i=new nt(F)),i=i.insert(t,n),e.Ba[e.currentUser.toKey()]=i}(i,e.batchId,n),await Xc(i,e.changes),await Wo(i.remoteStore)}catch(e){const t=oc(e,"Failed to persist write");n.reject(t)}}async function Vc(e,t){const n=S(e);try{const e=await za(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.Na.get(t);i&&(I(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.va=!0:e.modifiedDocuments.size>0?I(i.va):e.removedDocuments.size>0&&(I(i.va),i.va=!1))})),await Xc(n,e,t)}catch(e){await re(e)}}function Bc(e,t,n){const i=S(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Fa.forEach(((n,i)=>{const r=i.view.Z_(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=S(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const r of n.j_)r.Z_(t)&&(i=!0)})),i&&yc(n)}(i.eventManager,t),e.length&&i.Ca.d_(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function jc(e,t,n){const i=S(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Na.get(t),s=r&&r.key;if(s){let e=new nt($.comparator);e=e.insert(s,Wt.newNoDocument(s,j.min()));const n=ti().add(s),r=new Xi(j.min(),new Map,new nt(F),e,n);await Vc(i,r),i.Oa=i.Oa.remove(s),i.Na.delete(t),Jc(i)}else await Qa(i.localStore,t,!1).then((()=>Wc(i,t,n))).catch(re)}async function qc(e,t){const n=S(e),i=t.batch.batchId;try{const e=await Ka(n.localStore,t);$c(n,i,null),zc(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Xc(n,e)}catch(e){await re(e)}}async function Kc(e,t,n){const i=S(e);try{const e=await function(e,t){const n=S(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(I(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);$c(i,t,n),zc(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Xc(i,e)}catch(n){await re(n)}}async function Gc(e,t){const n=S(e);Vo(n.remoteStore)||g("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=S(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const i=n.ka.get(e)||[];i.push(t),n.ka.set(e,i)}catch(e){const n=oc(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function zc(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function $c(e,t,n){const i=S(e);let r=i.Ba[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.Ba[i.currentUser.toKey()]=r}}function Wc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Ma.get(t))e.Fa.delete(i),n&&e.Ca.$a(i,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||Hc(e,t)}))}function Hc(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(Oo(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),Jc(e))}function Qc(e,t,n){for(const i of n)i instanceof kc?(e.La.addReference(i.key,t),Yc(e,i)):i instanceof Cc?(g("SyncEngine","Document no longer in limbo: "+i.key),e.La.removeReference(i.key,t),e.La.containsKey(i.key)||Hc(e,i.key)):w()}function Yc(e,t){const n=t.key,i=n.path.canonicalString();e.Oa.get(n)||e.xa.has(i)||(g("SyncEngine","New document in limbo: "+n),e.xa.add(i),Jc(e))}function Jc(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new $(K.fromString(t)),i=e.qa.next();e.Na.set(i,new Rc(n)),e.Oa=e.Oa.insert(n,i),Po(e.remoteStore,new zr(Pn(Nn(n.path)),i,"TargetPurposeLimboResolution",ye.oe))}}async function Xc(e,t,n){const i=S(e),r=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach(((e,o)=>{a.push(i.Ka(o,t,n).then((e=>{var t;if((e||n)&&i.isPrimaryClient){const r=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===t?void 0:t.current;i.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(e){r.push(e);const t=Fa.Wi(o.targetId,e);s.push(t)}})))})),await Promise.all(a),i.Ca.d_(r),await async function(e,t){const n=S(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>se.forEach(t,(t=>se.forEach(t.$i,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>se.forEach(t.Ui,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!he(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.os.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.os=n.os.insert(e,r)}}}(i.localStore,s))}async function Zc(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());const e=await qa(n.localStore,t);n.currentUser=t,function(e,t){e.ka.forEach((e=>{e.forEach((e=>{e.reject(new T(E.CANCELLED,t))}))})),e.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Xc(n,e.hs)}}function eu(e,t){const n=S(e),i=n.Na.get(t);if(i&&i.va)return ti().add(i.key);{let e=ti();const i=n.Ma.get(t);if(!i)return e;for(const t of i){const i=n.Fa.get(t);e=e.unionWith(i.view.Va)}return e}}async function tu(e,t){const n=S(e),i=await Ya(n.localStore,t.query,!0),r=t.view.ba(i);return n.isPrimaryClient&&Qc(n,t.targetId,r.wa),r}async function nu(e,t){const n=S(e);return Xa(n.localStore,t).then((e=>Xc(n,e)))}async function iu(e,t,n,i){const r=S(e),s=await function(e,t){const n=S(e),i=S(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>i.Mn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):se.resolve(null)))))}(r.localStore,t);null!==s?("pending"===n?await Wo(r.remoteStore):"acknowledged"===n||"rejected"===n?($c(r,t,i||null),zc(r,t),function(e,t){S(S(e).mutationQueue).On(t)}(r.localStore,t)):w(),await Xc(r,s)):g("SyncEngine","Cannot apply mutation batch with id: "+t)}async function ru(e,t){const n=S(e);if(lu(n),hu(n),!0===t&&!0!==n.Qa){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await su(n,e.toArray());n.Qa=!0,await ic(n.remoteStore,!0);for(const i of t)Po(n.remoteStore,i)}else if(!1===t&&!1!==n.Qa){const e=[];let t=Promise.resolve();n.Ma.forEach(((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?e.push(r):t=t.then((()=>(Wc(n,r),Qa(n.localStore,r,!0)))),Oo(n.remoteStore,r)})),await t,await su(n,e),function(e){const t=S(e);t.Na.forEach(((e,n)=>{Oo(t.remoteStore,n)})),t.La.pr(),t.Na=new Map,t.Oa=new nt($.comparator)}(n),n.Qa=!1,await ic(n.remoteStore,!1)}}async function su(e,t,n){const i=S(e),r=[],s=[];for(const a of t){let e;const t=i.Ma.get(a);if(t&&0!==t.length){e=await Ha(i.localStore,Pn(t[0]));for(const e of t){const t=i.Fa.get(e),n=await tu(i,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Ja(i.localStore,a);e=await Ha(i.localStore,t),await Lc(i,au(t),a,!1,e.resumeToken)}r.push(e)}return i.Ca.d_(s),r}function au(e){return An(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function ou(e){return function(e){return S(S(e).persistence).Qi()}(S(e).localStore)}async function cu(e,t,n,i){const r=S(e);if(r.Qa)return void g("SyncEngine","Ignoring unexpected query state notification.");const s=r.Ma.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Xa(r.localStore,jn(s[0])),i=Xi.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,ht.EMPTY_BYTE_STRING);await Xc(r,e,i);break}case"rejected":await Qa(r.localStore,t,!0),Wc(r,t,i);break;default:w()}}async function uu(e,t,n){const i=lu(e);if(i.Qa){for(const e of t){if(i.Ma.has(e)&&i.sharedClientState.isActiveQueryTarget(e)){g("SyncEngine","Adding an already active target "+e);continue}const t=await Ja(i.localStore,e),n=await Ha(i.localStore,t);await Lc(i,au(t),n.targetId,!1,n.resumeToken),Po(i.remoteStore,n)}for(const e of n)i.Ma.has(e)&&await Qa(i.localStore,e,!1).then((()=>{Oo(i.remoteStore,e),Wc(i,e)})).catch(re)}}function lu(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Vc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=eu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jc.bind(null,t),t.Ca.d_=gc.bind(null,t.eventManager),t.Ca.$a=vc.bind(null,t.eventManager),t}function hu(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Kc.bind(null,t),t}function du(e,t,n){const i=S(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=S(e),i=mr(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Gr.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(i)>=0))}(e.localStore,i))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(i)),Promise.resolve(new Set);n._updateProgress(Tc(i));const r=new Ec(i,e.localStore,t.serializer);let s=await t.Ua();for(;s;){const e=await r.la(s);e&&n._updateProgress(e),s=await t.Ua()}const a=await r.complete();return await Xc(e,a.Ia,void 0),await function(e,t){const n=S(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Gr.saveBundleMetadata(e,t)))}(e.localStore,i),n._completeWith(a.progress),Promise.resolve(a.Pa)}catch(e){return y("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i,t,n).then((e=>{i.sharedClientState.notifyBundleLoaded(e)}))}class fu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=So(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return ja(this.persistence,new Va,e.initialUser,this.serializer)}createPersistence(e){return new Ca(Na.Zr,this.serializer)}createSharedClientState(e){return new ho}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pu extends fu{constructor(e,t,n){super(),this.Wa=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Wa.initialize(this,e),await hu(this.Wa.syncEngine),await Wo(this.Wa.remoteStore),await this.persistence.yi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return ja(this.persistence,new Va,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new na(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new ve(t,this.persistence);return new ge(e.asyncQueue,n)}createPersistence(e){const t=Ma(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?js.withCacheSize(this.cacheSizeBytes):js.DEFAULT;return new Pa(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Io(),_o(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new ho}}class mu extends pu{constructor(e,t){super(e,t,!1),this.Wa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Wa.syncEngine;this.sharedClientState instanceof lo&&(this.sharedClientState.syncEngine={no:iu.bind(null,t),ro:cu.bind(null,t),io:uu.bind(null,t),Qi:ou.bind(null,t),eo:nu.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi((async e=>{await ru(this.Wa.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Io();if(!lo.D(t))throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Ma(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new lo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class gu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Bc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zc.bind(null,this.syncEngine),await ic(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dc}()}createDatastore(e){const t=So(e.databaseInfo.databaseId),n=function(e){return new wo(e)}(e.databaseInfo);return function(e,t,n,i){return new Ao(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,i,r){return new Ro(e,t,n,i,r)}(this.localStore,this.datastore,e.asyncQueue,(e=>Bc(this.syncEngine,e,0)),function(){return po.D()?new po:new fo}())}createSyncEngine(e,t){return function(e,t,n,i,r,s,a){const o=new Dc(e,t,n,i,r,s);return a&&(o.Qa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=S(e);g("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await xo(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const i={value:e.slice(n,n+t),done:!1};return n+=t,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):v("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.ja=e,this.serializer=t,this.metadata=new k,this.buffer=new Uint8Array,this.Ha=function(){return new TextDecoder("utf-8")}(),this.Ja().then((e=>{e&&e.ua()?this.metadata.resolve(e.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.aa)}`))}),(e=>this.metadata.reject(e)))}close(){return this.ja.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.Ja()}async Ja(){const e=await this.Ya();if(null===e)return null;const t=this.Ha.decode(e),n=Number(t);isNaN(n)&&this.Za(`length string (${t}) is not valid number`);const i=await this.Xa(n);return new _c(JSON.parse(i),e.length+n)}eu(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Ya(){for(;this.eu()<0;)if(await this.tu())break;if(0===this.buffer.length)return null;const e=this.eu();e<0&&this.Za("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Xa(e){for(;this.buffer.length<e;)await this.tu()&&this.Za("Reached the end of bundle when more is expected.");const t=this.Ha.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Za(e){throw this.ja.cancel(),new Error(`Invalid bundle format: ${e}`)}async tu(){const e=await this.ja.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(e,t){const n=S(e),i={documents:t.map((e=>br(n.serializer,e)))},r=await n.Lo("BatchGetDocuments",n.serializer.databaseId,K.emptyPath(),i,t.length),s=new Map;r.forEach((e=>{const t=Cr(n.serializer,e);s.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=s.get(e.toString());I(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Li(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=$.fromPath(t);this.mutations.push(new Mi(n,this.precondition(n)))})),await async function(e,t){const n=S(e),i={writes:t.map((e=>Nr(n.serializer,e)))};await n.Mo("Commit",n.serializer.databaseId,K.emptyPath(),i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw w();t=j.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(j.min())?_i.exists(!1):_i.updateTime(t):_i.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(j.min()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _i.updateTime(t)}return _i.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,n,i,r){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=r,this.nu=n.maxAttempts,this.t_=new Eo(this.asyncQueue,"transaction_retry")}ru(){this.nu-=1,this.iu()}iu(){this.t_.Go((async()=>{const e=new wu(this.datastore),t=this.su(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.ou(e)}))))})).catch((e=>{this.ou(e)}))}))}su(e){try{const t=this.updateFunction(e);return!be(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ou(e){this.nu>0&&this._u(e)?(this.nu-=1,this.asyncQueue.enqueueAndForget((()=>(this.iu(),Promise.resolve())))):this.deferred.reject(e)}_u(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Ki(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=h.UNAUTHENTICATED,this.clientId=M.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new k;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=oc(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Su(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await qa(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Eu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ku(e);g("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>nc(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>nc(t.remoteStore,n))),e._onlineComponents=t}function Tu(e){return"FirebaseError"===e.name?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function ku(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await Su(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Tu(n))throw n;y("Error using user provided cache. Falling back to memory cache: "+n),await Su(e,new fu)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await Su(e,new fu);return e._offlineComponents}async function Cu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await Eu(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await Eu(e,new gu))),e._onlineComponents}function Au(e){return ku(e).then((e=>e.persistence))}function Nu(e){return ku(e).then((e=>e.localStore))}function Ru(e){return Cu(e).then((e=>e.remoteStore))}function Du(e){return Cu(e).then((e=>e.syncEngine))}function xu(e){return Cu(e).then((e=>e.datastore))}async function Pu(e){const t=await Cu(e),n=t.eventManager;return n.onListen=xc.bind(null,t.syncEngine),n.onUnlisten=Mc.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Pc.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Fc.bind(null,t.syncEngine),n}function Ou(e){return e.asyncQueue.enqueue((async()=>{const t=await Au(e),n=await Ru(e);return t.setNetworkEnabled(!0),function(e){const t=S(e);return t.L_.delete(0),Do(t)}(n)}))}function Lu(e){return e.asyncQueue.enqueue((async()=>{const t=await Au(e),n=await Ru(e);return t.setNetworkEnabled(!1),async function(e){const t=S(e);t.L_.add(0),await xo(t),t.q_.set("Offline")}(n)}))}function Mu(e,t){const n=new k;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const i=await function(e,t){const n=S(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new T(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const i=oc(e,`Failed to get document '${t} from cache`);n.reject(i)}}(await Nu(e),t,n))),n.promise}function Fu(e,t,n={}){const i=new k;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new yu({next:s=>{t.enqueueAndForget((()=>mc(e,a)));const o=s.docs.has(n);!o&&s.fromCache?r.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&i&&"server"===i.source?r.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:e=>r.reject(e)}),a=new Ic(Nn(n.path),s,{includeMetadataChanges:!0,_a:!0});return pc(e,a)}(await Pu(e),e.asyncQueue,t,n,i))),i.promise}function Uu(e,t){const n=new k;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const i=await Ya(e,t,!0),r=new Ac(t,i.Ts),s=r.ma(i.documents),a=r.applyChanges(s,!1);n.resolve(a.snapshot)}catch(e){const i=oc(e,`Failed to execute query '${t} against cache`);n.reject(i)}}(await Nu(e),t,n))),n.promise}function Vu(e,t,n={}){const i=new k;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new yu({next:n=>{t.enqueueAndForget((()=>mc(e,a))),n.fromCache&&"server"===i.source?r.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),a=new Ic(n,s,{includeMetadataChanges:!0,_a:!0});return pc(e,a)}(await Pu(e),e.asyncQueue,t,n,i))),i.promise}function Bu(e,t){const n=new yu(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){S(e).Y_.add(t),t.next()}(await Pu(e),n))),()=>{n.za(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){S(e).Y_.delete(t)}(await Pu(e),n)))}}function ju(e,t,n,i){const r=function(e,t){let n;return n="string"==typeof e?$i().encode(e):e,function(e,t){return new bu(e,t)}(function(e,t){if(e instanceof Uint8Array)return vu(e,t);if(e instanceof ArrayBuffer)return vu(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,So(t));e.asyncQueue.enqueueAndForget((async()=>{du(await Du(e),r,i)}))}function qu(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=S(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Gr.getNamedQuery(e,t)))}(await Nu(e),t)))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ku(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Gu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function $u(e,t,n,i){if(!0===t&&!0===i)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Wu(e){if(!$.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Hu(e){if($.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Qu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":w()}function Yu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qu(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Ju(e,t){if(t<=0)throw new T(E.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$u("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ku(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zu{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new A;switch(e.type){case"firstParty":return new x(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Gu.get(e);t&&(g("ComponentProvider","Removing Datastore"),Gu.delete(e),t.terminate())}(this),Promise.resolve()}}function el(e,t,n,i={}){var r;const s=(e=Yu(e,Zu))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&y("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=h.MOCK_USER;else{t=(0,o.Fy)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new h(s)}e._authCredentials=new N(new C(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new tl(this.firestore,e,this._query)}}class nl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new il(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nl(this.firestore,e,this._key)}}class il extends tl{constructor(e,t,n){super(e,t,Nn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nl(this.firestore,null,new $(e))}withConverter(e){return new il(this.firestore,e,this._path)}}function rl(e,t,...n){if(e=(0,o.Ku)(e),zu("collection","path",t),e instanceof Zu){const i=K.fromString(t,...n);return Hu(i),new il(e,null,i)}{if(!(e instanceof nl||e instanceof il))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(K.fromString(t,...n));return Hu(i),new il(e.firestore,null,i)}}function sl(e,t){if(e=Yu(e,Zu),zu("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new tl(e,null,function(e){return new Cn(K.emptyPath(),e)}(t))}function al(e,t,...n){if(e=(0,o.Ku)(e),1===arguments.length&&(t=M.newId()),zu("doc","path",t),e instanceof Zu){const i=K.fromString(t,...n);return Wu(i),new nl(e,null,new $(i))}{if(!(e instanceof nl||e instanceof il))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(K.fromString(t,...n));return Wu(i),new nl(e.firestore,e instanceof il?e.converter:null,new $(i))}}function ol(e,t){return e=(0,o.Ku)(e),t=(0,o.Ku)(t),(e instanceof nl||e instanceof il)&&(t instanceof nl||t instanceof il)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function cl(e,t){return e=(0,o.Ku)(e),t=(0,o.Ku)(t),e instanceof tl&&t instanceof tl&&e.firestore===t.firestore&&Fn(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ul{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Eo(this,"async_queue_retry"),this.Eu=()=>{const e=_o();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const e=_o();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=_o();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise((()=>{}));const t=new k;return this.Au((()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.uu.push(e),this.Ru())))}async Ru(){if(0!==this.uu.length){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!he(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go((()=>this.Ru()))}}Au(e){const t=this.au.then((()=>(this.Pu=!0,e().catch((e=>{this.hu=e,this.Pu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw v("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Pu=!1,e))))));return this.au=t,t}enqueueAfterDelay(e,t,n){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const i=ac.createAndSchedule(this,e,t,n,(e=>this.Vu(e)));return this.lu.push(i),i}du(){this.hu&&w()}verifyOperationInProgress(){}async mu(){let e;do{e=this.au,await e}while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then((()=>{this.lu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.lu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.mu()}))}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}function ll(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class hl{constructor(){this._progressObserver={},this._taskCompletionResolver=new k,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=-1;class fl extends Zu{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=function(){return new ul}(),this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ml(this),this._firestoreClient.terminate()}}function pl(e){return e._firestoreClient||ml(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ml(e){var t,n,i;const r=e._freezeSettings(),s=function(e,t,n,i){return new bt(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Ku(i.experimentalLongPollingOptions),i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new _u(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}function gl(e,t){Tl(e=Yu(e,fl));const n=pl(e);if(n._uninitializedComponentsProvider)throw new T(E.FAILED_PRECONDITION,"SDK cache is already specified.");y("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const i=e._freezeSettings(),r=new gu;return yl(n,r,new pu(r,i.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function vl(e){Tl(e=Yu(e,fl));const t=pl(e);if(t._uninitializedComponentsProvider)throw new T(E.FAILED_PRECONDITION,"SDK cache is already specified.");y("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),i=new gu;return yl(t,i,new mu(i,n.cacheSizeBytes))}function yl(e,t,n){const i=new k;return e.asyncQueue.enqueue((async()=>{try{await Su(e,n),await Eu(e,t),i.resolve()}catch(e){const n=e;if(!Tu(n))throw n;y("Error enabling indexeddb cache. Falling back to memory cache: "+n),i.reject(n)}})).then((()=>i.promise))}function bl(e){if(e._initialized&&!e._terminated)throw new T(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new k;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!oe.D())return Promise.resolve();const t=e+"main";await oe.delete(t)}(Ma(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function wl(e){return function(e){const t=new k;return e.asyncQueue.enqueueAndForget((async()=>Gc(await Du(e),t))),t.promise}(pl(e=Yu(e,fl)))}function Il(e){return Ou(pl(e=Yu(e,fl)))}function _l(e){return Lu(pl(e=Yu(e,fl)))}function Sl(e,t){const n=pl(e=Yu(e,fl)),i=new hl;return ju(n,e._databaseId,t,i),i}function El(e,t){return qu(pl(e=Yu(e,fl)),t).then((t=>t?new tl(e,null,t.query):null))}function Tl(e){if(e._initialized||e._terminated)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kl(ht.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new kl(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Al{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=/^__.*__$/;class xl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Di(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ri(e,this.data,t,this.fieldTransforms)}}class Pl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Di(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ol(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class Ll{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.yu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Ll(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Su({path:n,Du:!1});return i.vu(e),i}Cu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Su({path:n,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return th(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(0===e.length)throw this.Mu("Document fields must not be empty");if(Ol(this.wu)&&Dl.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class Ml{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||So(e)}Nu(e,t,n,i=!1){return new Ll({wu:e,methodName:t,Ou:n,path:z.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fl(e){const t=e._freezeSettings(),n=So(e._databaseId);return new Ml(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ul(e,t,n,i,r,s={}){const a=e.Nu(s.merge||s.mergeFields?2:0,t,n,r);Jl("Data must be an object, but it was:",a,i);const o=Ql(i,a);let c,u;if(s.merge)c=new ct(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Xl(t,i,n);if(!a.contains(r))throw new T(E.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);nh(e,r)||e.push(r)}c=new ct(e),u=a.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=a.fieldTransforms;return new xl(new zt(o),c,u)}class Vl extends Al{_toFieldTransform(e){if(2!==e.wu)throw 1===e.wu?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vl}}function Bl(e,t,n){return new Ll({wu:3,Ou:t.settings.Ou,methodName:e._methodName,Du:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class jl extends Al{_toFieldTransform(e){return new bi(e.path,new hi)}isEqual(e){return e instanceof jl}}class ql extends Al{constructor(e,t){super(e),this.Lu=t}_toFieldTransform(e){const t=Bl(this,e,!0),n=this.Lu.map((e=>Hl(e,t))),i=new di(n);return new bi(e.path,i)}isEqual(e){return e instanceof ql&&(0,o.bD)(this.Lu,e.Lu)}}class Kl extends Al{constructor(e,t){super(e),this.Lu=t}_toFieldTransform(e){const t=Bl(this,e,!0),n=this.Lu.map((e=>Hl(e,t))),i=new pi(n);return new bi(e.path,i)}isEqual(e){return e instanceof Kl&&(0,o.bD)(this.Lu,e.Lu)}}class Gl extends Al{constructor(e,t){super(e),this.Bu=t}_toFieldTransform(e){const t=new gi(e.serializer,ai(e.serializer,this.Bu));return new bi(e.path,t)}isEqual(e){return e instanceof Gl&&this.Bu===e.Bu}}function zl(e,t,n,i){const r=e.Nu(1,t,n);Jl("Data must be an object, but it was:",r,i);const s=[],a=zt.empty();et(i,((e,i)=>{const c=eh(t,e,n);i=(0,o.Ku)(i);const u=r.Cu(c);if(i instanceof Vl)s.push(c);else{const e=Hl(i,u);null!=e&&(s.push(c),a.set(c,e))}}));const c=new ct(s);return new Pl(a,c,r.fieldTransforms)}function $l(e,t,n,i,r,s){const a=e.Nu(1,t,n),c=[Xl(t,i,n)],u=[r];if(s.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Xl(t,s[o])),u.push(s[o+1]);const l=[],h=zt.empty();for(let f=c.length-1;f>=0;--f)if(!nh(l,c[f])){const e=c[f];let t=u[f];t=(0,o.Ku)(t);const n=a.Cu(e);if(t instanceof Vl)l.push(e);else{const i=Hl(t,n);null!=i&&(l.push(e),h.set(e,i))}}const d=new ct(l);return new Pl(h,d,a.fieldTransforms)}function Wl(e,t,n,i=!1){return Hl(n,e.Nu(i?4:3,t))}function Hl(e,t){if(Yl(e=(0,o.Ku)(e)))return Jl("Unsupported field value:",t,e),Ql(e,t);if(e instanceof Al)return function(e,t){if(!Ol(t.wu))throw t.Mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Mu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Du&&4!==t.wu)throw t.Mu("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Hl(r,t.Fu(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,o.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ai(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=B.fromDate(e);return{timestampValue:dr(t.serializer,n)}}if(e instanceof B){const n=new B(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:dr(t.serializer,n)}}if(e instanceof Nl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof kl)return{bytesValue:fr(t.serializer,e._byteString)};if(e instanceof nl){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Mu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:gr(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Rl)return function(e,t){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw t.Mu("VectorValues must only contain numeric values.");return ri(t.serializer,e)}))}}}}}}(e,t);throw t.Mu(`Unsupported field value: ${Qu(e)}`)}(e,t)}function Ql(e,t){const n={};return tt(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):et(e,((e,i)=>{const r=Hl(i,t.bu(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function Yl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof B||e instanceof Nl||e instanceof kl||e instanceof nl||e instanceof Al||e instanceof Rl)}function Jl(e,t,n){if(!Yl(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Qu(n);throw"an object"===i?t.Mu(e+" a custom object"):t.Mu(e+" "+i)}}function Xl(e,t,n){if((t=(0,o.Ku)(t))instanceof Cl)return t._internalPath;if("string"==typeof t)return eh(e,t);throw th("Field path arguments must be of type string or ",e,!1,void 0,n)}const Zl=new RegExp("[~\\*/\\[\\]]");function eh(e,t,n){if(t.search(Zl)>=0)throw th(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Cl(...t.split("."))._internalPath}catch(i){throw th(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function th(e,t,n,i,r){const s=i&&!i.isEmpty(),a=void 0!==r;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${i}`),a&&(c+=` in document ${r}`),c+=")"),new T(E.INVALID_ARGUMENT,o+e+c)}function nh(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new rh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class rh extends ih{data(){return super.data()}}function sh(e,t){return"string"==typeof t?eh(e,t):t instanceof Cl?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oh{}class ch extends oh{}function uh(e,t,...n){let i=[];t instanceof oh&&i.push(t),i=i.concat(n),function(e){const t=e.filter((e=>e instanceof dh)).length,n=e.filter((e=>e instanceof lh)).length;if(t>1||t>0&&n>0)throw new T(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i);for(const r of i)e=r._apply(e);return e}class lh extends ch{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lh(e,t,n)}_apply(e){const t=this._parse(e);return Ch(e._query,t),new tl(e.firestore,e.converter,Ln(e._query,t))}_parse(e){const t=Fl(e.firestore),n=function(e,t,n,i,r,s,a){let o;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){kh(a,s);const t=[];for(const n of a)t.push(Th(i,e,n));o={arrayValue:{values:t}}}else o=Th(i,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||kh(a,s),o=Wl(n,t,a,"in"===s||"not-in"===s);return en.create(r,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function hh(e,t,n){const i=t,r=sh("where",e);return lh._create(r,i,n)}class dh extends oh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dh(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:tn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const i=t.getFlattenedFilters();for(const r of i)Ch(n,r),n=Ln(n,r)}(e._query,t),new tl(e.firestore,e.converter,Ln(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class fh extends ch{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fh(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Jt(t,n)}(e._query,this._field,this._direction);return new tl(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Cn(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ph(e,t="asc"){const n=t,i=sh("orderBy",e);return fh._create(i,n)}class mh extends ch{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new mh(e,t,n)}_apply(e){return new tl(e.firestore,e.converter,Mn(e._query,this._limit,this._limitType))}}function gh(e){return Ju("limit",e),mh._create("limit",e,"F")}function vh(e){return Ju("limitToLast",e),mh._create("limitToLast",e,"L")}class yh extends ch{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new yh(e,t,n)}_apply(e){const t=Eh(e,this.type,this._docOrFields,this._inclusive);return new tl(e.firestore,e.converter,function(e,t){return new Cn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function bh(...e){return yh._create("startAt",e,!0)}function wh(...e){return yh._create("startAfter",e,!1)}class Ih extends ch{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ih(e,t,n)}_apply(e){const t=Eh(e,this.type,this._docOrFields,this._inclusive);return new tl(e.firestore,e.converter,function(e,t){return new Cn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function _h(...e){return Ih._create("endBefore",e,!1)}function Sh(...e){return Ih._create("endAt",e,!0)}function Eh(e,t,n,i){if(n[0]=(0,o.Ku)(n[0]),n[0]instanceof ih)return function(e,t,n,i,r){if(!i)throw new T(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const a of xn(e))if(a.field.isKeyField())s.push(Dt(t,i.key));else{const e=i.data.field(a.field);if(gt(e))throw new T(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=a.field.canonicalString();throw new T(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ht(s,r)}(e._query,e.firestore._databaseId,t,n[0]._document,i);{const r=Fl(e.firestore);return function(e,t,n,i,r,s){const a=e.explicitOrderBy;if(r.length>a.length)throw new T(E.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const o=[];for(let c=0;c<r.length;c++){const s=r[c];if(a[c].field.isKeyField()){if("string"!=typeof s)throw new T(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!Dn(e)&&-1!==s.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(K.fromString(s));if(!$.isDocumentKey(n))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new $(n);o.push(Dt(t,r))}else{const e=Wl(n,i,s);o.push(e)}}return new Ht(o,s)}(e._query,e.firestore._databaseId,r,t,n,i)}}function Th(e,t,n){if("string"==typeof(n=(0,o.Ku)(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dn(t)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(K.fromString(n));if(!$.isDocumentKey(i))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Dt(e,new $(i))}if(n instanceof nl)return Dt(e,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qu(n)}.`)}function kh(e,t){if(!Array.isArray(e)||0===e.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ch(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Ah{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw w()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return et(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertVectorValue(e){var t,n,i;const r=null===(i=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.map((e=>pt(e.doubleValue)));return new Rl(r)}convertGeoPoint(e){return new Nl(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=vt(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(yt(e));default:return null}}convertTimestamp(e){const t=ft(e);return new B(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=K.fromString(e);I(Gr(n));const i=new wt(n.get(1),n.get(3)),r=new $(n.popFirst(5));return i.isEqual(t)||v(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Rh extends Ah{constructor(e){super(),this.firestore=e}convertBytes(e){return new kl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nl(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xh extends ih{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ph(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(sh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ph extends xh{data(e={}){return super.data(e)}}class Oh{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Dh(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ph(this._firestore,this._userDataWriter,n.key,n,new Dh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new Ph(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Dh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Ph(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Dh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Lh(t.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Lh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}function Mh(e,t){return e instanceof xh&&t instanceof xh?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Oh&&t instanceof Oh&&e._firestore===t._firestore&&cl(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(e){e=Yu(e,nl);const t=Yu(e.firestore,fl);return Fu(pl(t),e._key).then((n=>Jh(t,e,n)))}class Uh extends Ah{constructor(e){super(),this.firestore=e}convertBytes(e){return new kl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nl(this.firestore,null,t)}}function Vh(e){e=Yu(e,nl);const t=Yu(e.firestore,fl),n=pl(t),i=new Uh(t);return Mu(n,e._key).then((n=>new xh(t,i,e._key,n,new Dh(null!==n&&n.hasLocalMutations,!0),e.converter)))}function Bh(e){e=Yu(e,nl);const t=Yu(e.firestore,fl);return Fu(pl(t),e._key,{source:"server"}).then((n=>Jh(t,e,n)))}function jh(e){e=Yu(e,tl);const t=Yu(e.firestore,fl),n=pl(t),i=new Uh(t);return ah(e._query),Vu(n,e._query).then((n=>new Oh(t,i,e,n)))}function qh(e){e=Yu(e,tl);const t=Yu(e.firestore,fl),n=pl(t),i=new Uh(t);return Uu(n,e._query).then((n=>new Oh(t,i,e,n)))}function Kh(e){e=Yu(e,tl);const t=Yu(e.firestore,fl),n=pl(t),i=new Uh(t);return Vu(n,e._query,{source:"server"}).then((n=>new Oh(t,i,e,n)))}function Gh(e,t,n){e=Yu(e,nl);const i=Yu(e.firestore,fl),r=Nh(e.converter,t,n);return Yh(i,[Ul(Fl(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,_i.none())])}function zh(e,t,n,...i){e=Yu(e,nl);const r=Yu(e.firestore,fl),s=Fl(r);let a;return a="string"==typeof(t=(0,o.Ku)(t))||t instanceof Cl?$l(s,"updateDoc",e._key,t,n,i):zl(s,"updateDoc",e._key,t),Yh(r,[a.toMutation(e._key,_i.exists(!0))])}function $h(e){return Yh(Yu(e.firestore,fl),[new Li(e._key,_i.none())])}function Wh(e,t){const n=Yu(e.firestore,fl),i=al(e),r=Nh(e.converter,t);return Yh(n,[Ul(Fl(e.firestore),"addDoc",i._key,r,null!==e.converter,{}).toMutation(i._key,_i.exists(!1))]).then((()=>i))}function Hh(e,...t){var n,i,r;e=(0,o.Ku)(e);let s={includeMetadataChanges:!1,source:"default"},a=0;"object"!=typeof t[a]||ll(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ll(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[a+2]=null===(r=e.complete)||void 0===r?void 0:r.bind(e)}let u,l,h;if(e instanceof nl)l=Yu(e.firestore,fl),h=Nn(e._key.path),u={next:n=>{t[a]&&t[a](Jh(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Yu(e,tl);l=Yu(n.firestore,fl),h=n._query;const i=new Uh(l);u={next:e=>{t[a]&&t[a](new Oh(l,i,n,e))},error:t[a+1],complete:t[a+2]},ah(e._query)}return function(e,t,n,i){const r=new yu(i),s=new Ic(t,r,n);return e.asyncQueue.enqueueAndForget((async()=>pc(await Pu(e),s))),()=>{r.za(),e.asyncQueue.enqueueAndForget((async()=>mc(await Pu(e),s)))}}(pl(l),h,c,u)}function Qh(e,t){return Bu(pl(e=Yu(e,fl)),ll(t)?t:{next:t})}function Yh(e,t){return function(e,t){const n=new k;return e.asyncQueue.enqueueAndForget((async()=>Uc(await Du(e),t,n))),n.promise}(pl(e),t)}function Jh(e,t,n){const i=n.docs.get(t._key),r=new Uh(e);return new xh(e,r,t._key,i,new Dh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xh={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Fl(e)}set(e,t,n){this._verifyNotCommitted();const i=ed(e,this._firestore),r=Nh(i.converter,t,n),s=Ul(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,_i.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const r=ed(e,this._firestore);let s;return s="string"==typeof(t=(0,o.Ku)(t))||t instanceof Cl?$l(this._dataReader,"WriteBatch.update",r._key,t,n,i):zl(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(s.toMutation(r._key,_i.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ed(e,this._firestore);return this._mutations=this._mutations.concat(new Li(t._key,_i.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ed(e,t){if((e=(0,o.Ku)(e)).firestore!==t)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Fl(e)}get(e){const t=ed(e,this._firestore),n=new Rh(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return w();const i=e[0];if(i.isFoundDocument())return new ih(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new ih(this._firestore,n,t._key,null,t.converter);throw w()}))}set(e,t,n){const i=ed(e,this._firestore),r=Nh(i.converter,t,n),s=Ul(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(e,t,n,...i){const r=ed(e,this._firestore);let s;return s="string"==typeof(t=(0,o.Ku)(t))||t instanceof Cl?$l(this._dataReader,"Transaction.update",r._key,t,n,i):zl(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,s),this}delete(e){const t=ed(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ed(e,this._firestore),n=new Uh(this._firestore);return super.get(e).then((e=>new xh(this._firestore,n,t._key,e._document,new Dh(!1,!1),t.converter)))}}function nd(e,t,n){e=Yu(e,fl);const i=Object.assign(Object.assign({},Xh),n);return function(e){if(e.maxAttempts<1)throw new T(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(e,t,n){const i=new k;return e.asyncQueue.enqueueAndForget((async()=>{const r=await xu(e);new Iu(e.asyncQueue,r,n,t,i).ru()})),i.promise}(pl(e),(n=>t(new td(e,n))),i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(){return new Vl("deleteField")}function rd(){return new jl("serverTimestamp")}function sd(...e){return new ql("arrayUnion",e)}function ad(...e){return new Kl("arrayRemove",e)}function od(e){return new Gl("increment",e)}new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){d=e}(r.SDK_VERSION),(0,r._registerComponent)(new s.uA("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new fl(new R(e.getProvider("auth-internal")),new O(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wt(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(l,"4.7.2",e),(0,r.registerVersion)(l,"4.7.2","esm2017")}();const cd="@firebase/firestore-compat",ud="0.3.37";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ld(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new T("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(){if("undefined"===typeof Uint8Array)throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function dd(){if(!lt())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class fd{constructor(e){this._delegate=e}static fromBase64String(e){return dd(),new fd(kl.fromBase64String(e))}static fromUint8Array(e){return hd(),new fd(kl.fromUint8Array(e))}toBase64(){return dd(),this._delegate.toBase64()}toUint8Array(){return hd(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(e){return md(e,["next","error","complete"])}function md(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{enableIndexedDbPersistence(e,t){return gl(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return vl(e._delegate)}clearIndexedDbPersistence(e){return bl(e._delegate)}}class vd{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof wt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||y("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){el(this._delegate,e,t,n)}enableNetwork(){return Il(this._delegate)}disableNetwork(){return _l(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,$u("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return wl(this._delegate)}onSnapshotsInSync(e){return Qh(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new xd(this,rl(this._delegate,e))}catch(t){throw Ed(t,"collection()","Firestore.collection()")}}doc(e){try{return new Sd(this,al(this._delegate,e))}catch(t){throw Ed(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nd(this,sl(this._delegate,e))}catch(t){throw Ed(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return nd(this._delegate,(t=>e(new wd(this,t))))}batch(){return pl(this._delegate),new Id(new Zh(this._delegate,(e=>Yh(this._delegate,e))))}loadBundle(e){return Sl(this._delegate,e)}namedQuery(e){return El(this._delegate,e).then((e=>e?new Nd(this,e):null))}}class yd extends Ah{constructor(e){super(),this.firestore=e}convertBytes(e){return new fd(new kl(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Sd.forKey(t,this.firestore,null)}}function bd(e){m(e)}class wd{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new yd(e)}get(e){const t=Pd(e);return this._delegate.get(t).then((e=>new Cd(this._firestore,new xh(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const i=Pd(e);return n?(ld("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=Pd(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=Pd(e);return this._delegate.delete(t),this}}class Id{constructor(e){this._delegate=e}set(e,t,n){const i=Pd(e);return n?(ld("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=Pd(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=Pd(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _d{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Ph(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ad(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_d.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let r=i.get(t);return r||(r=new _d(e,new yd(e),t),i.set(t,r)),r}}_d.INSTANCES=new WeakMap;class Sd{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new yd(e)}static forPath(e,t,n){if(e.length%2!==0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Sd(t,new nl(t._delegate,n,new $(e)))}static forKey(e,t,n){return new Sd(t,new nl(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new xd(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new xd(this.firestore,rl(this._delegate,e))}catch(t){throw Ed(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,o.Ku)(e),e instanceof nl&&ol(this._delegate,e)}set(e,t){t=ld("DocumentReference.set",t);try{return t?Gh(this._delegate,e,t):Gh(this._delegate,e)}catch(n){throw Ed(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?zh(this._delegate,e):zh(this._delegate,e,t,...n)}catch(i){throw Ed(i,"updateDoc()","DocumentReference.update()")}}delete(){return $h(this._delegate)}onSnapshot(...e){const t=Td(e),n=kd(e,(e=>new Cd(this.firestore,new xh(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return Hh(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Vh(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Bh(this._delegate):Fh(this._delegate),t.then((e=>new Cd(this.firestore,new xh(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Sd(this.firestore,e?this._delegate.withConverter(_d.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ed(e,t,n){return e.message=e.message.replace(t,n),e}function Td(e){for(const t of e)if("object"===typeof t&&!pd(t))return t;return{}}function kd(e,t){var n,i;let r;return r=pd(e[0])?e[0]:pd(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{r.next&&r.next(t(e))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class Cd{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Sd(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Mh(this._delegate,e._delegate)}}class Ad extends Cd{data(e){const t=this._delegate.data(e);return this._delegate._converter||_(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Nd{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new yd(e)}where(e,t,n){try{return new Nd(this.firestore,uh(this._delegate,hh(e,t,n)))}catch(i){throw Ed(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nd(this.firestore,uh(this._delegate,ph(e,t)))}catch(n){throw Ed(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nd(this.firestore,uh(this._delegate,gh(e)))}catch(t){throw Ed(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nd(this.firestore,uh(this._delegate,vh(e)))}catch(t){throw Ed(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nd(this.firestore,uh(this._delegate,bh(...e)))}catch(t){throw Ed(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nd(this.firestore,uh(this._delegate,wh(...e)))}catch(t){throw Ed(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nd(this.firestore,uh(this._delegate,_h(...e)))}catch(t){throw Ed(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nd(this.firestore,uh(this._delegate,Sh(...e)))}catch(t){throw Ed(t,"endAt()","Query.endAt()")}}isEqual(e){return cl(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?qh(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Kh(this._delegate):jh(this._delegate),t.then((e=>new Dd(this.firestore,new Oh(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Td(e),n=kd(e,(e=>new Dd(this.firestore,new Oh(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return Hh(this._delegate,t,n)}withConverter(e){return new Nd(this.firestore,e?this._delegate.withConverter(_d.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Rd{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ad(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Dd{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nd(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Ad(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Rd(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Ad(this._firestore,n))}))}isEqual(e){return Mh(this._delegate,e._delegate)}}class xd extends Nd{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Sd(this.firestore,e):null}doc(e){try{return new Sd(this.firestore,void 0===e?al(this._delegate):al(this._delegate,e))}catch(t){throw Ed(t,"doc()","CollectionReference.doc()")}}add(e){return Wh(this._delegate,e).then((e=>new Sd(this.firestore,e)))}isEqual(e){return ol(this._delegate,e._delegate)}withConverter(e){return new xd(this.firestore,e?this._delegate.withConverter(_d.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Pd(e){return Yu(e,nl)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(...e){this._delegate=new Cl(...e)}static documentId(){return new Od(z.keyField().canonicalString())}isEqual(e){return e=(0,o.Ku)(e),e instanceof Cl&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this._delegate=e}static serverTimestamp(){const e=rd();return e._methodName="FieldValue.serverTimestamp",new Ld(e)}static delete(){const e=id();return e._methodName="FieldValue.delete",new Ld(e)}static arrayUnion(...e){const t=sd(...e);return t._methodName="FieldValue.arrayUnion",new Ld(t)}static arrayRemove(...e){const t=ad(...e);return t._methodName="FieldValue.arrayRemove",new Ld(t)}static increment(e){const t=od(e);return t._methodName="FieldValue.increment",new Ld(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md={Firestore:vd,GeoPoint:Nl,Timestamp:B,Blob:fd,Transaction:wd,WriteBatch:Id,DocumentReference:Sd,DocumentSnapshot:Cd,Query:Nd,QueryDocumentSnapshot:Ad,QuerySnapshot:Dd,CollectionReference:xd,FieldPath:Od,FieldValue:Ld,setLogLevel:bd,CACHE_SIZE_UNLIMITED:dl};function Fd(e,t){e.INTERNAL.registerComponent(new s.uA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("firestore").getImmediate();return t(n,i)}),"PUBLIC").setServiceProps(Object.assign({},Md)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(e){Fd(e,((e,t)=>new vd(e,t,new gd))),e.registerVersion(cd,ud)}Ud(i.A)},2879:(e,t,n)=>{n.r(t),n.d(t,{auth:()=>a});var i=n(7251),r=(n(8944),n(4240)),s=n.n(r);n(8510),n(2425),n(9359),n(459),n(2095);(function(){(function(){var e,t,r="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var s;e:{var a={xb:!0},o={};try{o.__proto__=a,s=o.xb;break e}catch(Sf){}s=!1}t=s?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var c=t;function u(e,t){if(e.prototype=r(t.prototype),e.prototype.constructor=e,c)c(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}else e[n]=t[n];e.K=t.prototype}var l="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof n.g&&null!=n.g?n.g:this;function d(e,t){if(t){var n=h;e=e.split(".");for(var i=0;i<e.length-1;i++){var r=e[i];r in n||(n[r]={}),n=n[r]}e=e[e.length-1],i=n[e],t=t(i),t!=i&&null!=t&&l(n,e,{configurable:!0,writable:!0,value:t})}}d("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}})),d("Array.prototype.includes",(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(t=t||0,0>t&&(t=Math.max(t+i,0));t<i;t++){var r=n[t];if(r===e||Object.is(r,e))return!0}return!1}}));var f=this;function p(e){return void 0!==e}function m(e){return"string"==typeof e}var g=/^[\w+/_-]+[=]{0,2}$/,v=null;function y(){}function b(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function w(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var n=Object.prototype.toString.call(e);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof e.length&&"undefined"!=typeof e.splice&&"undefined"!=typeof e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||"undefined"!=typeof e.call&&"undefined"!=typeof e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&"undefined"==typeof e.call)return"object";return t}function I(e){return"array"==w(e)}function _(e){var t=w(e);return"array"==t||"object"==t&&"number"==typeof e.length}function S(e){return"function"==w(e)}function E(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var T="closure_uid_"+(1e9*Math.random()>>>0),k=0;function C(e,t,n){return e.call.apply(e.bind,arguments)}function A(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function N(e,t,n){return N=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C:A,N.apply(null,arguments)}function R(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function D(e,t){for(var n in t)e[n]=t[n]}var x,P=Date.now||function(){return+new Date};function O(e,t){e=e.split(".");var n,i=f;e[0]in i||"undefined"==typeof i.execScript||i.execScript("var "+e[0]);for(;e.length&&(n=e.shift());)!e.length&&p(t)?i[n]=t:i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}}function L(e,t){function n(){}n.prototype=t.prototype,e.K=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.vc=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function M(e){if(Error.captureStackTrace)Error.captureStackTrace(this,M);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function F(e,t){e=e.split("%s");for(var n="",i=e.length-1,r=0;r<i;r++)n+=e[r]+(r<t.length?t[r]:"%s");M.call(this,n+e[i])}function U(e,t){throw new F("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}L(M,Error),M.prototype.name="CustomError",L(F,M),F.prototype.name="AssertionError";var V=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(m(e))return m(t)&&1==t.length?e.indexOf(t,0):-1;for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},B=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var i=e.length,r=m(e)?e.split(""):e,s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function j(e,t){for(var n=m(e)?e.split(""):e,i=e.length-1;0<=i;--i)i in n&&t.call(void 0,n[i],i,e)}var q=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=[],r=0,s=m(e)?e.split(""):e,a=0;a<n;a++)if(a in s){var o=s[a];t.call(void 0,o,a,e)&&(i[r++]=o)}return i},K=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=Array(n),r=m(e)?e.split(""):e,s=0;s<n;s++)s in r&&(i[s]=t.call(void 0,r[s],s,e));return i},G=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=m(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e))return!0;return!1};function z(e,t){return 0<=V(e,t)}function $(e,t){var n;return t=V(e,t),(n=0<=t)&&W(e,t),n}function W(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function H(e,t){e:{for(var n=e.length,i=m(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}0<=t&&W(e,t)}function Q(e,t){j(e,(function(n,i){t.call(void 0,n,i,e)&&W(e,i)&&0}))}function Y(e){return Array.prototype.concat.apply([],arguments)}function J(e){var t=e.length;if(0<t){for(var n=Array(t),i=0;i<t;i++)n[i]=e[i];return n}return[]}function X(e,t,n){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,n)}var Z=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},ee=/&/g,te=/</g,ne=/>/g,ie=/"/g,re=/'/g,se=/\x00/g,ae=/[\x00&<>"']/;function oe(e,t){return e<t?-1:e>t?1:0}function ce(e){return ae.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(ee,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(te,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(ne,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(ie,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(re,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(se,"&#0;"))),e}function ue(e,t,n){for(var i in e)t.call(n,e[i],i,e)}function le(e){var t,n={};for(t in e)n[t]=e[t];return n}var he="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(e,t){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(var s=0;s<he.length;s++)n=he[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}var fe="StopIteration"in f?f.StopIteration:{message:"StopIteration",stack:""};function pe(){}function me(e){if(e instanceof pe)return e;if("function"==typeof e.ha)return e.ha(!1);if(_(e)){var t=0,n=new pe;return n.next=function(){for(;;){if(t>=e.length)throw fe;if(t in e)return e[t++];t++}},n}throw Error("Not implemented")}function ge(e,t){if(_(e))try{B(e,t,void 0)}catch(n){if(n!==fe)throw n}else{e=me(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(i){if(i!==fe)throw i}}}function ve(e){if(_(e))return J(e);e=me(e);var t=[];return ge(e,(function(e){t.push(e)})),t}function ye(e,t){this.g={},this.a=[],this.j=this.h=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof ye)for(n=e.ja(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function be(e){if(e.h!=e.a.length){for(var t=0,n=0;t<e.a.length;){var i=e.a[t];we(e.g,i)&&(e.a[n++]=i),t++}e.a.length=n}if(e.h!=e.a.length){var r={};for(n=t=0;t<e.a.length;)i=e.a[t],we(r,i)||(e.a[n++]=i,r[i]=1),t++;e.a.length=n}}function we(e,t){return Object.prototype.hasOwnProperty.call(e,t)}pe.prototype.next=function(){throw fe},pe.prototype.ha=function(){return this},e=ye.prototype,e.la=function(){be(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},e.ja=function(){return be(this),this.a.concat()},e.clear=function(){this.g={},this.j=this.h=this.a.length=0},e.get=function(e,t){return we(this.g,e)?this.g[e]:t},e.set=function(e,t){we(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},e.forEach=function(e,t){for(var n=this.ja(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}},e.ha=function(e){be(this);var t=0,n=this.j,i=this,r=new pe;return r.next=function(){if(n!=i.j)throw Error("The map has changed since the iterator was created");if(t>=i.a.length)throw fe;var r=i.a[t++];return e?r:i.g[r]},r};var Ie=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function _e(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Se(e,t,n,i){for(var r=n.length;0<=(t=e.indexOf(n,t))&&t<i;){var s=e.charCodeAt(t-1);if((38==s||63==s)&&(s=e.charCodeAt(t+r),!s||61==s||38==s||35==s))return t;t+=r+1}return-1}var Ee=/#|$/;function Te(e,t){var n=e.search(Ee),i=Se(e,0,t,n);if(0>i)return null;var r=e.indexOf("&",i);return(0>r||r>n)&&(r=n),i+=t.length+1,decodeURIComponent(e.substr(i,r-i).replace(/\+/g," "))}var ke=/[?&]($|#)/;function Ce(e,t){var n;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof Ce?(this.i=p(t)?t:e.i,Ae(this,e.j),this.A=e.A,this.h=e.h,Ne(this,e.C),this.g=e.g,Re(this,Ge(e.a)),this.s=e.s):e&&(n=String(e).match(Ie))?(this.i=!!t,Ae(this,n[1]||"",!0),this.A=xe(n[2]||""),this.h=xe(n[3]||"",!0),Ne(this,n[4]),this.g=xe(n[5]||"",!0),Re(this,n[6]||"",!0),this.s=xe(n[7]||"")):(this.i=!!t,this.a=new Be(null,this.i))}function Ae(e,t,n){e.j=n?xe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ne(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function Re(e,t,n){t instanceof Be?(e.a=t,$e(e.a,e.i)):(n||(t=Pe(t,Ue)),e.a=new Be(t,e.i))}function De(e){return e instanceof Ce?new Ce(e):new Ce(e,void 0)}function xe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pe(e,t,n){return m(e)?(e=encodeURI(e).replace(t,Oe),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Oe(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ce.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pe(t,Le,!0),":");var n=this.h;return(n||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Pe(t,Le,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.C,null!=n&&e.push(":",String(n))),(n=this.g)&&(this.h&&"/"!=n.charAt(0)&&e.push("/"),e.push(Pe(n,"/"==n.charAt(0)?Fe:Me,!0))),(n=this.a.toString())&&e.push("?",n),(n=this.s)&&e.push("#",Pe(n,Ve)),e.join("")};var Le=/[#\/\?@]/g,Me=/[#\?:]/g,Fe=/[#\?]/g,Ue=/[#\?@]/g,Ve=/#/g;function Be(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function je(e){e.a||(e.a=new ye,e.g=0,e.h&&_e(e.h,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function qe(e,t){je(e),t=ze(e,t),we(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,e=e.a,we(e.g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&be(e)))}function Ke(e,t){return je(e),t=ze(e,t),we(e.a.g,t)}function Ge(e){var t=new Be;return t.h=e.h,e.a&&(t.a=new ye(e.a),t.g=e.g),t}function ze(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function $e(e,t){t&&!e.j&&(je(e),e.h=null,e.a.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(qe(this,t),qe(this,n),0<e.length&&(this.h=null,this.a.set(ze(this,n),J(e)),this.g+=e.length))}),e)),e.j=t}function We(e){this.a=De(e)}function He(e,t){t?e.a.a.set(Ze.Sa,t):qe(e.a.a,Ze.Sa)}function Qe(e,t){null!==t?e.a.a.set(Ze.Qa,t?"1":"0"):qe(e.a.a,Ze.Qa)}function Ye(e){return e.a.a.get(Ze.Pa)||null}function Je(e,t){t?e.a.a.set(Ze.PROVIDER_ID,t):qe(e.a.a,Ze.PROVIDER_ID)}e=Be.prototype,e.add=function(e,t){je(this),this.h=null,e=ze(this,e);var n=this.a.get(e);return n||this.a.set(e,n=[]),n.push(t),this.g+=1,this},e.clear=function(){this.a=this.h=null,this.g=0},e.forEach=function(e,t){je(this),this.a.forEach((function(n,i){B(n,(function(n){e.call(t,n,i,this)}),this)}),this)},e.ja=function(){je(this);for(var e=this.a.la(),t=this.a.ja(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},e.la=function(e){je(this);var t=[];if(m(e))Ke(this,e)&&(t=Y(t,this.a.get(ze(this,e))));else{e=this.a.la();for(var n=0;n<e.length;n++)t=Y(t,e[n])}return t},e.set=function(e,t){return je(this),this.h=null,e=ze(this,e),Ke(this,e)&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},e.get=function(e,t){return e?(e=this.la(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.la(i);for(var s=0;s<i.length;s++){var a=r;""!==i[s]&&(a+="="+encodeURIComponent(String(i[s]))),e.push(a)}}return this.h=e.join("&")},We.prototype.toString=function(){return this.a.toString()};var Xe,Ze={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var et=f.navigator;if(et){var tt=et.userAgent;if(tt){Xe=tt;break e}}Xe=""}function nt(e){return-1!=Xe.indexOf(e)}function it(){return(nt("Chrome")||nt("CriOS"))&&!nt("Edge")}function rt(e){return rt[" "](e),e}function st(e,t){var n=wt;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}rt[" "]=y;var at,ot=nt("Opera"),ct=nt("Trident")||nt("MSIE"),ut=nt("Edge"),lt=ut||ct,ht=nt("Gecko")&&!(-1!=Xe.toLowerCase().indexOf("webkit")&&!nt("Edge"))&&!(nt("Trident")||nt("MSIE"))&&!nt("Edge"),dt=-1!=Xe.toLowerCase().indexOf("webkit")&&!nt("Edge"),ft=dt&&nt("Mobile"),pt=nt("Macintosh");function mt(){var e=f.document;return e?e.documentMode:void 0}e:{var gt="",vt=function(){var e=Xe;return ht?/rv:([^\);]+)(\)|;)/.exec(e):ut?/Edge\/([\d\.]+)/.exec(e):ct?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):dt?/WebKit\/(\S+)/.exec(e):ot?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(vt&&(gt=vt?vt[1]:""),ct){var yt=mt();if(null!=yt&&yt>parseFloat(gt)){at=String(yt);break e}}at=gt}var bt,wt={};function It(e){return st(e,(function(){for(var t=0,n=Z(String(at)).split("."),i=Z(String(e)).split("."),r=Math.max(n.length,i.length),s=0;0==t&&s<r;s++){var a=n[s]||"",o=i[s]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;t=oe(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||oe(0==a[2].length,0==o[2].length)||oe(a[2],o[2]),a=a[3],o=o[3]}while(0==t)}return 0<=t}))}var _t=f.document;function St(e,t){this.a=e===Tt&&t||"",this.g=Et}bt=_t&&ct?mt()||("CSS1Compat"==_t.compatMode?parseInt(at,10):5):void 0,St.prototype.ma=!0,St.prototype.ka=function(){return this.a},St.prototype.toString=function(){return"Const{"+this.a+"}"};var Et={},Tt={};function kt(){this.a="",this.h=Nt}function Ct(e){return e instanceof kt&&e.constructor===kt&&e.h===Nt?e.a:(U("expected object of type TrustedResourceUrl, got '"+e+"' of type "+w(e)),"type_error:TrustedResourceUrl")}function At(){var e=Yr;e instanceof St&&e.constructor===St&&e.g===Et?e=e.a:(U("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new kt;return t.a=e,t}kt.prototype.ma=!0,kt.prototype.ka=function(){return this.a.toString()},kt.prototype.g=function(){return 1},kt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var Nt={};function Rt(){this.a="",this.h=Lt}function Dt(e){return e instanceof Rt&&e.constructor===Rt&&e.h===Lt?e.a:(U("expected object of type SafeUrl, got '"+e+"' of type "+w(e)),"type_error:SafeUrl")}Rt.prototype.ma=!0,Rt.prototype.ka=function(){return this.a.toString()},Rt.prototype.g=function(){return 1},Rt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var xt=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Pt(e){return e instanceof Rt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),xt.test(e)||(e="about:invalid#zClosurez"),Mt(e))}function Ot(e){return e instanceof Rt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),xt.test(e)||(e="about:invalid#zClosurez"),Mt(e))}var Lt={};function Mt(e){var t=new Rt;return t.a=e,t}function Ft(){this.a="",this.g=Ut}Mt("about:blank"),Ft.prototype.ma=!0;var Ut={};function Vt(){this.a="",this.j=jt,this.h=null}function Bt(e){return e instanceof Vt&&e.constructor===Vt&&e.j===jt?e.a:(U("expected object of type SafeHtml, got '"+e+"' of type "+w(e)),"type_error:SafeHtml")}Ft.prototype.ka=function(){return this.a},Ft.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},Vt.prototype.g=function(){return this.h},Vt.prototype.ma=!0,Vt.prototype.ka=function(){return this.a.toString()},Vt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var jt={};function qt(e,t){var n=new Vt;return n.a=e,n.h=t,n}qt("<!DOCTYPE html>",0);var Kt=qt("",0);qt("<br>",0);var Gt=function(e){var t,n=!1;return function(){return n||(t=e(),n=!0),t}}((function(){if("undefined"===typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=Bt(Kt),!t.parentElement)}));function zt(e,t){e.src=Ct(t),null===v&&(t=f.document,v=(t=t.querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&g.test(t)?t:""),t=v,t&&e.setAttribute("nonce",t)}function $t(e,t){t=t instanceof Rt?t:Ot(t),e.assign(Dt(t))}function Wt(e,t){this.a=p(e)?e:0,this.g=p(t)?t:0}function Ht(e,t){this.width=e,this.height=t}function Qt(e){return e?new cn(rn(e)):x||(x=new cn)}function Yt(e,t){var n=t||document;return n.querySelectorAll&&n.querySelector?n.querySelectorAll("."+e):Xt(document,e,t)}function Jt(e,t){var n=t||document;if(n.getElementsByClassName)e=n.getElementsByClassName(e)[0];else{n=document;var i=t||n;e=i.querySelectorAll&&i.querySelector&&e?i.querySelector(e?"."+e:""):Xt(n,e,t)[0]||null}return e||null}function Xt(e,t,n){var i;if(e=n||e,e.querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var s={};for(n=i=0;e=r[n];n++){var a=e.className;"function"==typeof a.split&&z(a.split(/\s+/),t)&&(s[i++]=e)}return s.length=i,s}return r}function Zt(e,t){ue(t,(function(t,n){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==n?e.style.cssText=t:"class"==n?e.className=t:"for"==n?e.htmlFor=t:en.hasOwnProperty(n)?e.setAttribute(en[n],t):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?e.setAttribute(n,t):e[n]=t}))}Wt.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Wt.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Wt.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Wt.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},e=Ht.prototype,e.toString=function(){return"("+this.width+" x "+this.height+")"},e.aspectRatio=function(){return this.width/this.height},e.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},e.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},e.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var en={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function tn(e){return e.scrollingElement?e.scrollingElement:(dt||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function nn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function rn(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function sn(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var n;n=e.firstChild;)e.removeChild(n);e.appendChild(rn(e).createTextNode(String(t)))}}function an(e,t){return t?on(e,(function(e){return!t||m(e.className)&&z(e.className.split(/\s+/),t)})):null}function on(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}function cn(e){this.a=e||f.document||document}cn.prototype.N=function(){return m(void 0)?this.a.getElementById(void 0):void 0};var un={Fc:!0},ln={Hc:!0},hn={Ec:!0},dn={Gc:!0};function fn(){throw Error("Do not instantiate directly")}function pn(e,t,n,i){if(e=e(t||vn,void 0,n),i=(i||Qt()).a.createElement("DIV"),e=mn(e),e.match(gn),e=qt(e,null),Gt())for(;i.lastChild;)i.removeChild(i.lastChild);return i.innerHTML=Bt(e),1==i.childNodes.length&&(e=i.firstChild,1==e.nodeType&&(i=e)),i}function mn(e){if(!E(e))return ce(String(e));if(e instanceof fn){if(e.fa===un)return e.content;if(e.fa===dn)return ce(e.content)}return U("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}fn.prototype.va=null,fn.prototype.toString=function(){return this.content};var gn=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,vn={};function yn(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}function bn(){fn.call(this)}function wn(e){return null!=e&&e.fa===un?e:e instanceof Vt?En(Bt(e).toString(),e.g()):En(ce(String(String(e))),yn(e))}function In(){fn.call(this)}function _n(e,t){this.content=String(e),this.va=null!=t?t:null}function Sn(e){return new _n(e,void 0)}L(bn,fn),bn.prototype.fa=un,L(In,fn),In.prototype.fa=ln,In.prototype.va=1,L(_n,fn),_n.prototype.fa=dn;var En=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return e=new t(String(e)),void 0!==n&&(e.va=n),e}}(bn),Tn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(In);function kn(e){function t(){}var n={label:Cn("New password")};for(var i in t.prototype=e,e=new t,n)e[i]=n[i];return e}function Cn(e){return(e=String(e))?new _n(e,void 0):""}var An=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return e=String(e),e?(e=new t(e),void 0!==n&&(e.va=n),e):""}}(bn);function Nn(e){return null!=e&&e.fa===un?String(String(e.content).replace(Bn,"").replace(jn,"&lt;")).replace(Mn,Pn):ce(String(e))}function Rn(e){return null!=e&&e.fa===ln?e=String(e).replace(Fn,Ln):e instanceof Rt?e=String(Dt(e).toString()).replace(Fn,Ln):(e=String(e),Vn.test(e)?e=e.replace(Fn,Ln):(U("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function Dn(e){return null!=e&&e.fa===hn?e=e.content:null==e?e="":e instanceof Ft?e instanceof Ft&&e.constructor===Ft&&e.g===Ut?e=e.a:(U("expected object of type SafeStyle, got '"+e+"' of type "+w(e)),e="type_error:SafeStyle"):(e=String(e),Un.test(e)||(U("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var xn={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Pn(e){return xn[e]}var On={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function Ln(e){return On[e]}var Mn=/[\x00\x22\x27\x3c\x3e]/g,Fn=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Un=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Vn=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,Bn=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,jn=/</g;function qn(){return Sn("Enter a valid phone number")}function Kn(){return Sn("Unable to send password reset code to specified email")}function Gn(){return Sn("Something went wrong. Please try again.")}function zn(){return Sn("This email already exists without any means of sign-in. Please reset the password to recover.")}function $n(e){e=e||{};var t="";switch(e.code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return Sn(t)}function Wn(){return Sn("Please login again to perform this operation")}function Hn(e,t,n){var i=Error.call(this);if(this.message=i.message,"stack"in i&&(this.stack=i.stack),this.code=Qn+e,!(e=t)){switch(e="",this.code){case"firebaseui/merge-conflict":e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";break;default:e+=Gn()}e=Sn(e).toString()}this.message=e||"",this.credential=n||null}u(Hn,Error),Hn.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Qn="firebaseui/";function Yn(){0!=Jn&&(Xn[this[T]||(this[T]=++k)]=this),this.T=this.T,this.C=this.C}var Jn=0,Xn={};function Zn(e,t){e.T?p(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(p(void 0)?N(t,void 0):t))}function ei(e){e&&"function"==typeof e.m&&e.m()}Yn.prototype.T=!1,Yn.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Jn)){var e=this[T]||(this[T]=++k);if(0!=Jn&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Xn[e]}},Yn.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var ti=Object.freeze||function(e){return e},ni=!ct||9<=Number(bt),ii=ct&&!It("9"),ri=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{f.addEventListener("test",y,t),f.removeEventListener("test",y,t)}catch(n){}return e}();function si(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function ai(e,t){if(si.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ht){e:{try{rt(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==n?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=m(e.pointerType)?e.pointerType:oi[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}si.prototype.stopPropagation=function(){this.h=!0},si.prototype.preventDefault=function(){this.qb=!1},L(ai,si);var oi=ti({2:"touch",3:"pen",4:"mouse"});ai.prototype.stopPropagation=function(){ai.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},ai.prototype.preventDefault=function(){ai.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,ii)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(t){}};var ci="closure_listenable_"+(1e6*Math.random()|0),ui=0;function li(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.La=r,this.key=++ui,this.sa=this.Ia=!1}function hi(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function di(e){this.src=e,this.a={},this.g=0}function fi(e,t){var n=t.type;n in e.a&&$(e.a[n],t)&&(hi(t),0==e.a[n].length&&(delete e.a[n],e.g--))}function pi(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.sa&&s.listener==t&&s.capture==!!n&&s.La==i)return r}return-1}di.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.a[s],e||(e=this.a[s]=[],this.g++);var a=pi(e,t,i,r);return-1<a?(t=e[a],n||(t.Ia=!1)):(t=new li(t,this.src,s,!!i,r),t.Ia=n,e.push(t)),t};var mi="closure_lm_"+(1e6*Math.random()|0),gi={};function vi(e,t,n,i,r){if(i&&i.once)return wi(e,t,n,i,r);if(I(t)){for(var s=0;s<t.length;s++)vi(e,t[s],n,i,r);return null}return n=Ni(n),e&&e[ci]?e.J.add(String(t),n,!1,E(i)?!!i.capture:!!i,r):yi(e,t,n,!1,i,r)}function yi(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var a=E(r)?!!r.capture:!!r,o=Ci(e);if(o||(e[mi]=o=new di(e)),n=o.add(t,n,i,a,s),n.proxy)return n;if(i=bi(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)ri||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(Si(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function bi(){var e=ki,t=ni?function(n){return e.call(t.src,t.listener,n)}:function(n){if(n=e.call(t.src,t.listener,n),!n)return n};return t}function wi(e,t,n,i,r){if(I(t)){for(var s=0;s<t.length;s++)wi(e,t[s],n,i,r);return null}return n=Ni(n),e&&e[ci]?e.J.add(String(t),n,!0,E(i)?!!i.capture:!!i,r):yi(e,t,n,!0,i,r)}function Ii(e,t,n,i,r){if(I(t))for(var s=0;s<t.length;s++)Ii(e,t[s],n,i,r);else i=E(i)?!!i.capture:!!i,n=Ni(n),e&&e[ci]?(e=e.J,t=String(t).toString(),t in e.a&&(s=e.a[t],n=pi(s,n,i,r),-1<n&&(hi(s[n]),W(s,n),0==s.length&&(delete e.a[t],e.g--)))):e&&(e=Ci(e))&&(t=e.a[t.toString()],e=-1,t&&(e=pi(t,n,i,r)),(n=-1<e?t[e]:null)&&_i(n))}function _i(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[ci])fi(t.J,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Si(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ci(t))?(fi(n,e),0==n.g&&(n.src=null,t[mi]=null)):hi(e)}}}function Si(e){return e in gi?gi[e]:gi[e]="on"+e}function Ei(e,t,n,i){var r=!0;if((e=Ci(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var s=t[e];s&&s.capture==n&&!s.sa&&(s=Ti(s,i),r=r&&!1!==s)}return r}function Ti(e,t){var n=e.listener,i=e.La||e.src;return e.Ia&&_i(e),n.call(i,t)}function ki(e,t){if(e.sa)return!0;if(!ni){if(!t)e:{t=["window","event"];for(var n=f,i=0;i<t.length;i++)if(n=n[t[i]],null==n){t=null;break e}t=n}if(i=t,t=new ai(i,this),n=!0,!(0>i.keyCode||void 0!=i.returnValue)){e:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break e}catch(a){r=!0}(r||void 0==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=t.g;r;r=r.parentNode)i.push(r);for(e=e.type,r=i.length-1;!t.h&&0<=r;r--){t.g=i[r];var s=Ei(i[r],e,!0,t);n=n&&s}for(r=0;!t.h&&r<i.length;r++)t.g=i[r],s=Ei(i[r],e,!1,t),n=n&&s}return n}return Ti(e,new ai(t,this))}function Ci(e){return e=e[mi],e instanceof di?e:null}var Ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ni(e){return S(e)?e:(e[Ai]||(e[Ai]=function(t){return e.handleEvent(t)}),e[Ai])}function Ri(){Yn.call(this),this.J=new di(this),this.wb=this,this.Ha=null}function Di(e,t){var n,i=e.Ha;if(i)for(n=[];i;i=i.Ha)n.push(i);if(e=e.wb,i=t.type||t,m(t))t=new si(t,e);else if(t instanceof si)t.target=t.target||e;else{var r=t;t=new si(i,e),de(t,r)}if(r=!0,n)for(var s=n.length-1;!t.h&&0<=s;s--){var a=t.g=n[s];r=xi(a,i,!0,t)&&r}if(t.h||(a=t.g=e,r=xi(a,i,!0,t)&&r,t.h||(r=xi(a,i,!1,t)&&r)),n)for(s=0;!t.h&&s<n.length;s++)a=t.g=n[s],r=xi(a,i,!1,t)&&r;return r}function xi(e,t,n,i){if(t=e.J.a[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.sa&&a.capture==n){var o=a.listener,c=a.La||a.src;a.Ia&&fi(e.J,a),r=!1!==o.call(c,i)&&r}}return r&&0!=i.qb}L(Ri,Yn),Ri.prototype[ci]=!0,Ri.prototype.Za=function(e){this.Ha=e},Ri.prototype.removeEventListener=function(e,t,n,i){Ii(this,e,t,n,i)},Ri.prototype.o=function(){if(Ri.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var n=t.a[e],i=0;i<n.length;i++)hi(n[i]);delete t.a[e],t.g--}}this.Ha=null};var Pi={},Oi=0;function Li(e,t){if(!e)throw Error("Event target element must be provided!");if(e=Fi(e),Pi[e]&&Pi[e].length)for(var n=0;n<Pi[e].length;n++)Di(Pi[e][n],t)}function Mi(e){var t=Fi(e.N());Pi[t]&&Pi[t].length&&(H(Pi[t],(function(t){return t==e})),Pi[t].length||delete Pi[t])}function Fi(e){return"undefined"===typeof e.a&&(e.a=Oi,Oi++),e.a}function Ui(e){if(!e)throw Error("Event target element must be provided!");Ri.call(this),this.a=e}function Vi(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(t){return!1}}function Bi(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function ji(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function qi(){this.g=this.a=null}u(Ui,Ri),Ui.prototype.N=function(){return this.a},Ui.prototype.register=function(){var e=Fi(this.N());Pi[e]?z(Pi[e],this)||Pi[e].push(this):Pi[e]=[this]},Bi.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var Ki,Gi,zi=new Bi((function(){return new Wi}),(function(e){e.reset()}));function $i(){var e=Zi,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Wi(){this.next=this.g=this.a=null}function Hi(e){f.setTimeout((function(){throw e}),0)}function Qi(){var e=f.MessageChannel;if("undefined"===typeof e&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!nt("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;e=t.document,e.open(),e.write(""),e.close();var n="callImmediate"+Math.random(),i="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=N((function(e){"*"!=i&&e.origin!=i||e.data!=n||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(n,i)}}}),"undefined"!==typeof e&&!nt("Trident")&&!nt("MSIE")){var t=new e,n={},i=n;return t.port1.onmessage=function(){if(p(n.next)){n=n.next;var e=n.gb;n.gb=null,e()}},function(e){i.next={gb:e},i=i.next,t.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){f.setTimeout(e,0)}}function Yi(e,t){Gi||Ji(),Xi||(Gi(),Xi=!0),Zi.add(e,t)}function Ji(){if(f.Promise&&f.Promise.resolve){var e=f.Promise.resolve(void 0);Gi=function(){e.then(er)}}else Gi=function(){var e=er;!S(f.setImmediate)||f.Window&&f.Window.prototype&&!nt("Edge")&&f.Window.prototype.setImmediate==f.setImmediate?(Ki||(Ki=Qi()),Ki(e)):f.setImmediate(e)}}qi.prototype.add=function(e,t){var n=zi.get();n.set(e,t),this.g?this.g.next=n:this.a=n,this.g=n},Wi.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Wi.prototype.reset=function(){this.next=this.g=this.a=null};var Xi=!1,Zi=new qi;function er(){for(var e;e=$i();){try{e.a.call(e.g)}catch(t){Hi(t)}ji(zi,e)}Xi=!1}function tr(e){if(this.a=nr,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=y)try{var t=this;e.call(void 0,(function(e){fr(t,ir,e)}),(function(e){if(!(e instanceof Ir))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(n){}fr(t,rr,e)}))}catch(n){fr(this,rr,n)}}var nr=0,ir=2,rr=3;function sr(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}sr.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var ar=new Bi((function(){return new sr}),(function(e){e.reset()}));function or(e,t,n){var i=ar.get();return i.s=e,i.g=t,i.j=n,i}function cr(e){if(e instanceof tr)return e;var t=new tr(y);return fr(t,ir,e),t}function ur(e){return new tr((function(t,n){n(e)}))}function lr(e,t){if(e.a==nr)if(e.h){var n=e.h;if(n.g){for(var i=0,r=null,s=null,a=n.g;a&&(a.h||(i++,a.a==e&&(r=a),!(r&&1<i)));a=a.next)r||(s=a);r&&(n.a==nr&&1==i?lr(n,t):(s?(i=s,i.next==n.j&&(n.j=i),i.next=i.next.next):gr(n),vr(n,r,rr,t)))}e.h=null}else fr(e,rr,t)}function hr(e,t){e.g||e.a!=ir&&e.a!=rr||mr(e),e.j?e.j.next=t:e.g=t,e.j=t}function dr(e,t,n,i){var r=or(null,null,null);return r.a=new tr((function(e,s){r.s=t?function(n){try{var r=t.call(i,n);e(r)}catch(a){s(a)}}:e,r.g=n?function(t){try{var r=n.call(i,t);!p(r)&&t instanceof Ir?s(t):e(r)}catch(a){s(a)}}:s})),r.a.h=e,hr(e,r),r.a}function fr(e,t,n){if(e.a==nr){e===n&&(t=rr,n=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var i=n,r=e.hc,s=e.ic;if(i instanceof tr){hr(i,or(r||y,s||null,e));var a=!0}else if(Vi(i))i.then(r,s,e),a=!0;else{if(E(i))try{var o=i.then;if(S(o)){pr(i,o,r,s,e),a=!0;break e}}catch(c){s.call(e,c),a=!0;break e}a=!1}}a||(e.A=n,e.a=t,e.h=null,mr(e),t!=rr||n instanceof Ir||br(e,n))}}function pr(e,t,n,i,r){function s(e){o||(o=!0,i.call(r,e))}function a(e){o||(o=!0,n.call(r,e))}var o=!1;try{t.call(e,a,s)}catch(c){s(c)}}function mr(e){e.i||(e.i=!0,Yi(e.Hb,e))}function gr(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function vr(e,t,n,i){if(n==rr&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,yr(t,n,i);else try{t.h?t.s.call(t.j):yr(t,n,i)}catch(r){wr.call(null,r)}ji(ar,t)}function yr(e,t,n){t==ir?e.s.call(e.j,n):e.g&&e.g.call(e.j,n)}function br(e,t){e.s=!0,Yi((function(){e.s&&wr.call(null,t)}))}tr.prototype.then=function(e,t,n){return dr(this,S(e)?e:null,S(t)?t:null,n)},tr.prototype.$goog_Thenable=!0,e=tr.prototype,e.fc=function(e,t){return e=or(e,e,t),e.h=!0,hr(this,e),this},e.Ca=function(e,t){return dr(this,null,e,t)},e.cancel=function(e){this.a==nr&&Yi((function(){var t=new Ir(e);lr(this,t)}),this)},e.hc=function(e){this.a=nr,fr(this,ir,e)},e.ic=function(e){this.a=nr,fr(this,rr,e)},e.Hb=function(){for(var e;e=gr(this);)vr(this,e,this.a,this.A);this.i=!1};var wr=Hi;function Ir(e){M.call(this,e)}function _r(e,t,n){t||(t={}),n=n||window;var i=e instanceof Rt?e:Pt("undefined"!=typeof e.href?e.href:String(e));e=t.target||e.target;var r=[];for(s in t)switch(s){case"width":case"height":case"top":case"left":r.push(s+"="+t[s]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(s+"="+(t[s]?1:0))}var s=r.join(",");return(nt("iPhone")&&!nt("iPod")&&!nt("iPad")||nt("iPad")||nt("iPod"))&&n.navigator&&n.navigator.standalone&&e&&"_self"!=e?(s=n.document.createElement("A"),i=i instanceof Rt?i:Ot(i),s.href=Dt(i),s.setAttribute("target",e),t.noreferrer&&s.setAttribute("rel","noreferrer"),t=document.createEvent("MouseEvent"),t.initMouseEvent("click",!0,!0,n,1),s.dispatchEvent(t),n={}):t.noreferrer?(n=n.open("",e,s),t=Dt(i).toString(),n&&(lt&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),n.opener=null,t=qt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+ce(t)+'">',null),n.document.write(Bt(t)),n.document.close())):(n=n.open(Dt(i).toString(),e,s))&&t.noopener&&(n.opener=null),n}function Sr(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function Er(e){_r(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function Tr(e,t){if(e=E(e)&&1==e.nodeType?e:document.querySelector(String(e)),null==e)throw Error(t||"Cannot find element.");return e}function kr(){return window.location.href}function Cr(){var e=null;return new tr((function(t){"complete"==f.document.readyState?t():(e=function(){t()},wi(window,"load",e))})).Ca((function(t){throw Ii(window,"load",e),t}))}function Ar(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}function Nr(e,t,n){return n=void 0===n?{}:n,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),n)}function Rr(e){var t=qr;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function Dr(e,t,n){e.a=!0,e.h=n,e.j=!t,Lr(e)}function xr(e){if(e.a){if(!e.J)throw new Mr(e);e.J=!1}}function Pr(e,t,n){e.s.push([t,n,void 0]),e.a&&Lr(e)}function Or(e){return G(e.s,(function(e){return S(e[1])}))}function Lr(e){if(e.i&&e.a&&Or(e)){var t=e.i,n=Vr[t];n&&(f.clearTimeout(n.a),delete Vr[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var i=n=!1;e.s.length&&!e.A;){var r=e.s.shift(),s=r[0],a=r[1];if(r=r[2],s=e.j?a:s)try{var o=s.call(r||e.O,t);p(o)&&(e.j=e.j&&(o==t||o instanceof Error),e.h=t=o),(Vi(t)||"function"===typeof f.Promise&&t instanceof f.Promise)&&(i=!0,e.A=!0)}catch(c){t=c,e.j=!0,Or(e)||(n=!0)}}e.h=t,i&&(o=N(e.L,e,!0),i=N(e.L,e,!1),t instanceof Rr?(Pr(t,o,i),t.l=!0):t.then(o,i)),n&&(t=new Ur(t),Vr[t.a]=t,e.i=t.a)}function Mr(){M.call(this)}function Fr(){M.call(this)}function Ur(e){this.a=f.setTimeout(N(this.h,this),0),this.g=e}L(Ir,M),Ir.prototype.name="cancel",Rr.prototype.cancel=function(e){if(this.a)this.h instanceof Rr&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new Fr(this),xr(this),Dr(this,!1,e))}},Rr.prototype.L=function(e,t){this.A=!1,Dr(this,e,t)},Rr.prototype.callback=function(e){xr(this),Dr(this,!0,e)},Rr.prototype.then=function(e,t,n){var i,r,s=new tr((function(e,t){i=e,r=t}));return Pr(this,i,(function(e){e instanceof Fr?s.cancel():r(e)})),s.then(e,t,n)},Rr.prototype.$goog_Thenable=!0,L(Mr,M),Mr.prototype.message="Deferred has already fired",Mr.prototype.name="AlreadyCalledError",L(Fr,M),Fr.prototype.message="Deferred was canceled",Fr.prototype.name="CanceledError",Ur.prototype.h=function(){throw delete Vr[this.a],this.g};var Vr={};function Br(e){var t={},n=t.document||document,i=Ct(e).toString(),r=document.createElement("SCRIPT"),s={rb:r,sb:void 0},a=new Rr(s),o=null,c=null!=t.timeout?t.timeout:5e3;return 0<c&&(o=window.setTimeout((function(){Kr(r,!0);var e=new $r(zr,"Timeout reached for loading script "+i);xr(a),Dr(a,!1,e)}),c),s.sb=o),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(Kr(r,t.xc||!1,o),a.callback(null))},r.onerror=function(){Kr(r,!0,o);var e=new $r(Gr,"Error while loading script "+i);xr(a),Dr(a,!1,e)},s=t.attributes||{},de(s,{type:"text/javascript",charset:"UTF-8"}),Zt(r,s),zt(r,e),jr(n).appendChild(r),a}function jr(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}function qr(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&Kr(e,!0,this.sb)}}function Kr(e,t,n){null!=n&&f.clearTimeout(n),e.onload=y,e.onerror=y,e.onreadystatechange=y,t&&window.setTimeout((function(){nn(e)}),0)}var Gr=0,zr=1;function $r(e,t){var n="Jsloader error (code #"+e+")";t&&(n+=": "+t),M.call(this,n),this.code=e}function Wr(){return f.google&&f.google.accounts&&f.google.accounts.id||null}function Hr(e){this.a=e||Wr(),this.h=!1,this.g=null}function Qr(e,t,n){if(e.a&&t)return function(){return e.h=!0,new tr((function(i){e.g=i,e.a.initialize({client_id:t,callback:i,auto_select:!n}),e.a.prompt()}))}();if(t){var i=Jr.Xa().load().then((function(){return e.a=Wr(),Qr(e,t,n)})).Ca((function(){return null}));return cr(i)}return cr(null)}L($r,M),Hr.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},b(Hr);var Yr=new St(Tt,"https://accounts.google.com/gsi/client");function Jr(){this.a=null}function Xr(e,t){this.a=e,this.g=t||function(e){throw e}}function Zr(e,t,n){this.reset(e,t,n,void 0,void 0)}Jr.prototype.load=function(){var e=this;if(this.a)return this.a;var t=At();return Wr()?cr():this.a=Cr().then((function(){if(!Wr())return new tr((function(n,i){var r=setTimeout((function(){e.a=null,i(Error("Network error!"))}),1e4);f.onGoogleLibraryLoad=function(){clearTimeout(r),n()},cr(Br(t)).then((function(){Wr()&&n()})).Ca((function(t){clearTimeout(r),e.a=null,i(t)}))}))}))},b(Jr),Xr.prototype.confirm=function(e){return cr(this.a.confirm(e)).Ca(this.g)},Zr.prototype.a=null;function es(e){this.s=e,this.a=this.h=this.j=this.g=null}function ts(e,t){this.name=e,this.value=t}Zr.prototype.reset=function(e,t,n,i,r){"number"==typeof r||0,this.h=i||P(),this.j=e,this.s=t,this.g=n,delete this.a},ts.prototype.toString=function(){return this.name};var ns=new ts("SEVERE",1e3),is=new ts("WARNING",900),rs=new ts("CONFIG",700);function ss(e){return e.j?e.j:e.g?ss(e.g):(U("Root logger has no level set."),null)}es.prototype.log=function(e,t,n){if(e.value>=ss(this).value)for(S(t)&&(t=t()),e=new Zr(e,String(t),this.s),n&&(e.a=n),n=this;n;){var i=n,r=e;if(i.a)for(var s=0;t=i.a[s];s++)t(r);n=n.g}};var as={},os=null;function cs(){os||(os=new es(""),as[""]=os,os.j=rs)}function us(e){var t;if(cs(),!(t=as[e])){t=new es(e);var n=e.lastIndexOf("."),i=e.substr(n+1);n=us(e.substr(0,n)),n.h||(n.h={}),n.h[i]=t,t.g=n,as[e]=t}return t}function ls(){this.a=P()}var hs=null;function ds(e){this.j=e||"",hs||(hs=new ls),this.s=hs}function fs(e){return 10>e?"0"+e:String(e)}function ps(e,t){e=(e.h-t)/1e3,t=e.toFixed(3);var n=0;if(1>e)n=2;else for(;100>e;)n++,e*=10;for(;0<n--;)t=" "+t;return t}function ms(e){ds.call(this,e)}function gs(e,t){var n=[];if(n.push(e.j," "),e.g){var i=new Date(t.h);n.push("[",fs(i.getFullYear()-2e3)+fs(i.getMonth()+1)+fs(i.getDate())+" "+fs(i.getHours())+":"+fs(i.getMinutes())+":"+fs(i.getSeconds())+"."+fs(Math.floor(i.getMilliseconds()/10)),"] ")}return n.push("[",ps(t,e.s.get()),"s] "),n.push("[",t.g,"] "),n.push(t.s),e.h&&(t=t.a)&&n.push("\n",t instanceof Error?t.message:t.toString()),e.a&&n.push("\n"),n.join("")}function vs(){this.s=N(this.h,this),this.a=new ms,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}ls.prototype.set=function(e){this.a=e},ls.prototype.reset=function(){this.set(P())},ls.prototype.get=function(){return this.a},ds.prototype.a=!0,ds.prototype.g=!0,ds.prototype.h=!1,L(ms,ds),vs.prototype.h=function(e){function t(e){if(e){if(e.value>=ns.value)return"error";if(e.value>=is.value)return"warn";if(e.value>=rs.value)return"log"}return"debug"}if(!this.j[e.g]){var n=gs(this.a,e),i=bs;if(i){var r=t(e.j);ws(i,r,n,e.a)}}};var ys,bs=f.console;function ws(e,t,n,i){e[t]?e[t](n,i||""):e.log(n,i||"")}function Is(e,t){var n=ys;n&&n.log(ns,e,t)}ys=us("firebaseui");var _s=new vs;if(1!=_s.g){var Ss;cs(),Ss=os;var Es=_s.s;Ss.a||(Ss.a=[]),Ss.a.push(Es),_s.g=!0}function Ts(e){var t=ys;t&&t.log(is,e,void 0)}function ks(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function Cs(e){e=(e.a.cookie||"").split(";");for(var t,n,i=[],r=[],s=0;s<e.length;s++)n=Z(e[s]),t=n.indexOf("="),-1==t?(i.push(""),r.push(n)):(i.push(n.substring(0,t)),r.push(n.substring(t+1)));return{keys:i,values:r}}e=ks.prototype,e.set=function(e,t,n,i,r,s){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');p(n)||(n=-1),r=r?";domain="+r:"",i=i?";path="+i:"",s=s?";secure":"",n=0>n?"":0==n?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(P()+1e3*n).toUTCString(),this.a.cookie=e+"="+t+r+i+n+s},e.get=function(e,t){for(var n,i=e+"=",r=(this.a.cookie||"").split(";"),s=0;s<r.length;s++){if(n=Z(r[s]),0==n.lastIndexOf(i,0))return n.substr(i.length);if(n==e)return""}return t},e.ja=function(){return Cs(this).keys},e.la=function(){return Cs(this).values},e.clear=function(){for(var e=Cs(this).keys,t=e.length-1;0<=t;t--){var n=e[t];this.get(n),this.set(n,"",0,void 0,void 0)}};var As=new ks;function Ns(){}function Rs(e,t,n,i){this.h="undefined"!==typeof e&&null!==e?e:-1,this.g=t||null,this.a=n||null,this.j=!!i}function Ds(e,t){this.g=e,this.a=t||null}function xs(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function Ps(e){if(e&&e.email){var t=e.credential&&i["default"].auth.AuthCredential.fromJSON(e.credential);return new Ds(e.email,t)}return null}function Os(e){this.a=e||null}function Ls(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);255<r&&(t[n++]=255&r,r>>=8),t[n++]=r}return t}function Ms(e){return K(e,(function(e){return e=e.toString(16),1<e.length?e:"0"+e})).join("")}function Fs(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(Us*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<Us*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var n=t,i=n[0];n[0]=n[1],n[1]=n[2],n[2]=n[3],n[3]=i,zs(t),t[0]^=Hs[e/this.g][0],t[1]^=Hs[e/this.g][1],t[2]^=Hs[e/this.g][2],t[3]^=Hs[e/this.g][3]}else 6<this.g&&4==e%this.g&&zs(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}u(Rs,Ns),Rs.prototype.set=function(e,t){As.set(e,t,this.h,this.g,this.a,this.j)},Rs.prototype.get=function(e){return As.get(e)||null},Rs.prototype.ra=function(e){var t=this.g,n=this.a;As.get(e),As.set(e,"",0,t,n)},Fs.prototype.A=16;var Us=Fs.prototype.A/4;function Vs(e,t){for(var n,i=0;i<Us;i++)for(var r=0;4>r;r++)n=4*r+i,n=t[n],e.h[i][r]=n}function Bs(e){for(var t=[],n=0;n<Us;n++)for(var i=0;4>i;i++)t[4*i+n]=e.h[n][i];return t}function js(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]^=e.a[4*t+i][n]}function qs(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]=t[e.h[n][i]]}function Ks(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][n]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][(n+t)%Us]}function Gs(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][(n+t)%Us]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][n]}function zs(e){e[0]=$s[e[0]],e[1]=$s[e[1]],e[2]=$s[e[2]],e[3]=$s[e[3]]}var $s=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Ws=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],Hs=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Qs=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Ys=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Js=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Xs=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Zs=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],ea=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function ta(e,t){e=new Fs(ia(e)),t=Ls(t);for(var n,i=t.splice(0,16),r="";i.length;){n=16-i.length;for(var s=0;s<n;s++)i.push(0);for(n=e,Vs(n,i),js(n,0),i=1;i<n.j;++i){qs(n,$s),Ks(n),s=n.h;for(var a=n.s[0],o=0;4>o;o++)a[0]=s[0][o],a[1]=s[1][o],a[2]=s[2][o],a[3]=s[3][o],s[0][o]=Qs[a[0]]^Ys[a[1]]^a[2]^a[3],s[1][o]=a[0]^Qs[a[1]]^Ys[a[2]]^a[3],s[2][o]=a[0]^a[1]^Qs[a[2]]^Ys[a[3]],s[3][o]=Ys[a[0]]^a[1]^a[2]^Qs[a[3]];js(n,i)}qs(n,$s),Ks(n),js(n,n.j),r+=Ms(Bs(n)),i=t.splice(0,16)}return r}function na(e,t){e=new Fs(ia(e));for(var n=[],i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));var r=n.splice(0,16);for(t="";r.length;){for(i=e,Vs(i,r),js(i,i.j),r=1;r<i.j;++r){Gs(i),qs(i,Ws),js(i,i.j-r);for(var s=i.h,a=i.s[0],o=0;4>o;o++)a[0]=s[0][o],a[1]=s[1][o],a[2]=s[2][o],a[3]=s[3][o],s[0][o]=ea[a[0]]^Xs[a[1]]^Zs[a[2]]^Js[a[3]],s[1][o]=Js[a[0]]^ea[a[1]]^Xs[a[2]]^Zs[a[3]],s[2][o]=Zs[a[0]]^Js[a[1]]^ea[a[2]]^Xs[a[3]],s[3][o]=Xs[a[0]]^Zs[a[1]]^Js[a[2]]^ea[a[3]]}if(Gs(i),qs(i,Ws),js(i,0),i=Bs(i),8192>=i.length)i=String.fromCharCode.apply(null,i);else{for(r="",s=0;s<i.length;s+=8192)r+=String.fromCharCode.apply(null,X(i,s,s+8192));i=r}t+=i,r=n.splice(0,16)}return t.replace(/(\x00)+$/,"")}function ia(e){e=Ls(e.substring(0,32));for(var t=32-e.length,n=0;n<t;n++)e.push(0);return e}function ra(e){var t=[];return aa(new sa,e,t),t.join("")}function sa(){}function aa(e,t,n){if(null==t)n.push("null");else{if("object"==typeof t){if(I(t)){var i=t;t=i.length,n.push("[");for(var r="",s=0;s<t;s++)n.push(r),aa(e,i[s],n),r=",";return void n.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(i in n.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,i)&&(s=t[i],"function"!=typeof s&&(n.push(r),ua(i,n),n.push(":"),aa(e,s,n),r=","));return void n.push("}")}t=t.valueOf()}switch(typeof t){case"string":ua(t,n);break;case"number":n.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":n.push(String(t));break;case"function":n.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var oa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ca=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ua(e,t){t.push('"',e.replace(ca,(function(e){var t=oa[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),oa[e]=t),t})),'"')}function la(e){this.a=e}function ha(){}function da(e){this.a=e}function fa(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(t){return!1}}function pa(){var e=null;try{e=window.localStorage||null}catch(t){}this.a=e}function ma(){var e=null;try{e=window.sessionStorage||null}catch(t){}this.a=e}function ga(e,t){this.g=e,this.a=t+"::"}la.prototype.set=function(e,t){p(t)?this.a.set(e,ra(t)):this.a.ra(e)},la.prototype.get=function(e){try{var t=this.a.get(e)}catch(n){return}if(null!==t)try{return JSON.parse(t)}catch(i){throw"Storage: Invalid value was encountered"}},L(ha,Ns),ha.prototype.clear=function(){var e=ve(this.ha(!0)),t=this;B(e,(function(e){t.ra(e)}))},L(da,ha),e=da.prototype,e.set=function(e,t){try{this.a.setItem(e,t)}catch(n){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},e.get=function(e){if(e=this.a.getItem(e),!m(e)&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},e.ra=function(e){this.a.removeItem(e)},e.ha=function(e){var t=0,n=this.a,i=new pe;return i.next=function(){if(t>=n.length)throw fe;var i=n.key(t++);if(e)return i;if(i=n.getItem(i),!m(i))throw"Storage mechanism: Invalid value was encountered";return i},i},e.clear=function(){this.a.clear()},e.key=function(e){return this.a.key(e)},L(pa,da),L(ma,da),L(ga,ha),ga.prototype.set=function(e,t){this.g.set(this.a+e,t)},ga.prototype.get=function(e){return this.g.get(this.a+e)},ga.prototype.ra=function(e){this.g.ra(this.a+e)},ga.prototype.ha=function(e){var t=this.g.ha(!0),n=this,i=new pe;return i.next=function(){for(var i=t.next();i.substr(0,n.a.length)!=n.a;)i=t.next();return e?i.substr(n.a.length):n.g.get(i)},i},fa(new pa);var va,ya=new ma;va=fa(ya)?new ga(ya,"firebaseui"):null;var ba=new la(va),wa={name:"pendingEmailCredential",storage:ba},Ia={name:"redirectStatus",storage:ba},_a={name:"redirectUrl",storage:ba},Sa={name:"emailForSignIn",storage:new la(new Rs(3600,"/"))},Ea={name:"pendingEncryptedCredential",storage:new la(new Rs(3600,"/"))};function Ta(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function ka(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function Ca(e,t,n){e.storage.set(n?e.name+":"+n:e.name,t)}function Aa(e){return Ta(_a,e)||null}function Na(e){return e=Ta(wa,e)||null,Ps(e)}function Ra(e){ka(wa,e)}function Da(e,t){Ca(wa,xs(e),t)}function xa(e){return(e=Ta(Ia,e)||null)&&"undefined"!==typeof e.tenantId?new Os(e.tenantId):null}function Pa(e,t){Ca(Ia,{tenantId:e.a},t)}function Oa(e,t){t=Ta(Sa,t);var n=null;if(t)try{var i=na(e,t),r=JSON.parse(i);n=r&&r.email||null}catch(s){}return n}function La(e,t){t=Ta(Ea,t);var n=null;if(t)try{var i=na(e,t);n=JSON.parse(i)}catch(r){}return Ps(n||null)}function Ma(e,t,n){Ca(Ea,ta(e,JSON.stringify(xs(t))),n)}function Fa(){this.W={}}function Ua(e,t,n){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=n}function Va(e,t,n){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=n}function Ba(e,t){if(e=e.get(t),!e)throw Error("Configuration "+t+" is required.");return e}function ja(){this.g=void 0,this.a={}}function qa(e,t,n,i){for(var r=0;r<t.length;r++){var s=t.charAt(r);e.a[s]||(e.a[s]=new ja),e=e.a[s]}if(i&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=n}function Ka(e,t){for(var n in void 0!==e.g&&t.push(e.g),e.a)Ka(e.a[n],t)}function Ga(e,t,n){for(var i in void 0!==e.g&&n.push(t),e.a)Ga(e.a[i],t+i,n)}function za(e){for(this.a=e,this.g=new ja,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function $a(e,t){e=e.g;var n={},i=0;for(void 0!==e.g&&(n[i]=e.g);i<t.length;i++){var r=t.charAt(i);if(!(r in e.a))break;e=e.a[r],void 0!==e.g&&(n[i]=e.g)}for(var s in n)if(n.hasOwnProperty(s))return n[s];return[]}function Wa(e){for(var t=0;t<Ja.length;t++)if(Ja[t].c===e)return Ja[t];return null}function Ha(e){e=e.toUpperCase();for(var t=[],n=0;n<Ja.length;n++)Ja[n].f===e&&t.push(Ja[n]);return t}function Qa(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],n=0;n<Ja.length;n++)Ja[n].b==e&&t.push(Ja[n]);e=t}else e=Ha(e);return e}function Ya(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}Fa.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},e=ja.prototype,e.set=function(e,t){qa(this,e,t,!1)},e.add=function(e,t){qa(this,e,t,!0)},e.get=function(e){e:{for(var t=this,n=0;n<e.length;n++)if(t=t.a[e.charAt(n)],!t){e=void 0;break e}e=t}return e?e.g:void 0},e.la=function(){var e=[];return Ka(this,e),e},e.ja=function(){var e=[];return Ga(this,"",e),e},e.clear=function(){this.a={},this.g=void 0};var Ja=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];Ya(Ja);var Xa=new za(Ja);function Za(e,t){this.a=e,this.Aa=t}function eo(e){e=Z(e);var t=$a(Xa,e);return 0<t.length?new Za("1"==t[0].b?"1-US-0":t[0].c,Z(e.substr(t[0].b.length+1))):null}function to(e){var t=Wa(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function no(e,t){for(var n=0;n<e.length;n++)if(!z(io,e[n])&&(null!==ro&&e[n]in ro||z(t,e[n])))return e[n];return null}var io=["emailLink","password","phone"],ro={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function so(){this.a=new Fa,Ua(this.a,"autoUpgradeAnonymousUsers"),Ua(this.a,"callbacks"),Ua(this.a,"credentialHelper",Go),Ua(this.a,"immediateFederatedRedirect",!1),Ua(this.a,"popupMode",!1),Ua(this.a,"privacyPolicyUrl"),Ua(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),Ua(this.a,"queryParameterForWidgetMode","mode"),Ua(this.a,"signInFlow"),Ua(this.a,"signInOptions"),Ua(this.a,"signInSuccessUrl"),Ua(this.a,"siteName"),Ua(this.a,"tosUrl"),Ua(this.a,"widgetUrl"),Ua(this.a,"adminRestrictedOperation")}function ao(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!Fo(e)&&Is('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function oo(e){e=e.a.get("signInOptions")||[];for(var t=[],n=0;n<e.length;n++){var i=e[n];i=E(i)?i:{provider:i},i.provider&&t.push(i)}return t}function co(e,t){e=oo(e);for(var n=0;n<e.length;n++)if(e[n].provider===t)return e[n];return null}function uo(e){return oo(e).map((function(e){return e.provider}))}function lo(e,t){e=ho(e);for(var n=0;n<e.length;n++)if(e[n].providerId===t)return e[n];return null}function ho(e){return oo(e).map((function(e){if(ro[e.provider]||z(Qo,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?Dt(Pt(e.iconUrl)).toString():null},e)null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?Dt(Pt(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function fo(e){var t,n=co(e,i["default"].auth.GoogleAuthProvider.PROVIDER_ID);if(t=n&&n.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(r in e=e.a.get("credentialHelper"),zo)if(zo[r]===e){var r=zo[r];break e}r=Go}t=r===Ko}return t&&n.clientId||null}function po(e){return e=co(e,i["default"].auth.EmailAuthProvider.PROVIDER_ID),!!(e&&e.disableSignUp&&e.disableSignUp.status)}function mo(e){return e=e.a.get("adminRestrictedOperation")||null,!(!e||!e.status)}function go(e){var t=null;if(oo(e).forEach((function(e){e.provider==i["default"].auth.PhoneAuthProvider.PROVIDER_ID&&E(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=le(e.recaptchaParameters))})),t){var n=[];Yo.forEach((function(e){"undefined"!==typeof t[e]&&(n.push(e),delete t[e])})),n.length&&Ts('The following provided "recaptchaParameters" keys are not allowed: '+n.join(", "))}return t}function vo(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}function yo(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"===typeof t)return function(){Er(t)}}return null}function bo(e){return(e=co(e,i["default"].auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}function wo(e){if((e=co(e,i["default"].auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"===typeof t)return function(){Er(t)}}return null}function Io(e,t){return e=(e=co(e,t))&&e.scopes,Array.isArray(e)?e:[]}function _o(e,t){return e=(e=co(e,t))&&e.customParameters,E(e)?(e=le(e),t===i["default"].auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===i["default"].auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function So(e){e=co(e,i["default"].auth.PhoneAuthProvider.PROVIDER_ID);var t=null;return e&&"string"===typeof e.loginHint&&(t=eo(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}function Eo(e){var t=(e=co(e,i["default"].auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&Ha(t);var n=null;return e&&"string"===typeof e.loginHint&&(n=eo(e.loginHint)),t&&t[0]||n&&Wa(n.a)||null}function To(e){if(e=co(e,i["default"].auth.PhoneAuthProvider.PROVIDER_ID),!e)return null;var t=e.whitelistedCountries,n=e.blacklistedCountries;if("undefined"!==typeof t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if("undefined"!==typeof n&&!Array.isArray(n))throw Error("BlacklistedCountries must be an array.");if(t&&n)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!n)return Ja;if(e=[],t){n={};for(var r=0;r<t.length;r++)for(var s=Qa(t[r]),a=0;a<s.length;a++)n[s[a].c]=s[a];for(var o in n)n.hasOwnProperty(o)&&e.push(n[o])}else{for(o={},t=0;t<n.length;t++)for(s=Qa(n[t]),r=0;r<s.length;r++)o[s[r].c]=s[r];for(s=0;s<Ja.length;s++)null!==o&&Ja[s].c in o||e.push(Ja[s])}return e}function ko(e){return Ba(e.a,"queryParameterForWidgetMode")}function Co(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Ts("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"===typeof t)return t;if("string"===typeof t)return function(){Er(t)}}return null}function Ao(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Ts("Term of Service URL is missing, the link will not be displayed."),t&&n){if("function"===typeof n)return n;if("string"===typeof n)return function(){Er(n)}}return null}function No(e){return!(e=co(e,i["default"].auth.EmailAuthProvider.PROVIDER_ID))||"undefined"===typeof e.requireDisplayName||!!e.requireDisplayName}function Ro(e){return e=co(e,i["default"].auth.EmailAuthProvider.PROVIDER_ID),!(!e||e.signInMethod!==i["default"].auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function Do(e){return e=co(e,i["default"].auth.EmailAuthProvider.PROVIDER_ID),!(!e||!e.forceSameDevice)}function xo(e){if(Ro(e)){var t={url:kr(),handleCodeInApp:!0};(e=co(e,i["default"].auth.EmailAuthProvider.PROVIDER_ID))&&"function"===typeof e.emailLinkSignIn&&de(t,e.emailLinkSignIn()),e=t.url;var n=kr();n instanceof Ce||(n=De(n)),e instanceof Ce||(e=De(e));var r=n;n=new Ce(r);var s=!!e.j;s?Ae(n,e.j):s=!!e.A,s?n.A=e.A:s=!!e.h,s?n.h=e.h:s=null!=e.C;var a=e.g;if(s)Ne(n,e.C);else if(s=!!e.g)if("/"!=a.charAt(0)&&(r.h&&!r.g?a="/"+a:(r=n.g.lastIndexOf("/"),-1!=r&&(a=n.g.substr(0,r+1)+a))),".."==a||"."==a)a="";else if(-1!=a.indexOf("./")||-1!=a.indexOf("/.")){r=0==a.lastIndexOf("/",0),a=a.split("/");for(var o=[],c=0;c<a.length;){var u=a[c++];"."==u?r&&c==a.length&&o.push(""):".."==u?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),r&&c==a.length&&o.push("")):(o.push(u),r=!0)}a=o.join("/")}return s?n.g=a:s=""!==e.a.toString(),s?Re(n,Ge(e.a)):s=!!e.s,s&&(n.s=e.s),t.url=n.toString(),t}return null}function Po(e){var t=!!e.a.get("immediateFederatedRedirect"),n=uo(e);return e=Oo(e),t&&1==n.length&&!z(io,n[0])&&e==$o}function Oo(e){for(var t in e=e.a.get("signInFlow"),Wo)if(Wo[t]==e)return Wo[t];return $o}function Lo(e){return Uo(e).signInSuccess||null}function Mo(e){return Uo(e).signInSuccessWithAuthResult||null}function Fo(e){return Uo(e).signInFailure||null}function Uo(e){return e.a.get("callbacks")||{}}var Vo,Bo,jo,qo,Ko="googleyolo",Go="none",zo={nc:Ko,NONE:Go},$o="redirect",Wo={qc:"popup",rc:$o},Ho={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},Qo=["anonymous"],Yo=["sitekey","tabindex","callback","expired-callback"],Jo={};function Xo(e,t,n,i){Jo[e].apply(null,Array.prototype.slice.call(arguments,1))}function Zo(e){return e.classList?e.classList:(e=e.className,m(e)&&e.match(/\S+/g)||[])}function ec(e,t){return e.classList?e.classList.contains(t):z(Zo(e),t)}function tc(e,t){e.classList?e.classList.add(t):ec(e,t)||(e.className+=0<e.className.length?" "+t:t)}function nc(e,t){e.classList?e.classList.remove(t):ec(e,t)&&(e.className=q(Zo(e),(function(e){return e!=t})).join(" "))}function ic(e){var t=e.type;switch(m(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return t=e.selectedIndex,0<=t?e.options[t].value:null;case"select-multiple":t=[];for(var n,i=0;n=e.options[i];i++)n.selected&&t.push(n.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function rc(e,t){var n=e.type;switch(m(n)&&n.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,m(t))for(var i=0;n=e.options[i];i++)if(n.value==t){n.selected=!0;break}break;case"select-multiple":for(m(t)&&(t=[t]),i=0;n=e.options[i];i++)if(n.selected=!1,t)for(var r,s=0;r=t[s];s++)n.value==r&&(n.selected=!0);break;default:e.value=null!=t?t:""}}function sc(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(oc(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!ht;default:return 166>e.keyCode||183<e.keyCode}}function ac(e,t,n,i,r,s){if(dt&&!It("525"))return!0;if(pt&&r)return oc(e);if(r&&!i)return!1;if(!ht){"number"==typeof t&&(t=cc(t));var a=17==t||18==t||pt&&91==t;if((!n||pt)&&a||pt&&16==t&&(i||s))return!1}if((dt||ut)&&i&&n)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(ct&&i&&t==e)return!1;switch(e){case 13:return!ht||!s&&!r&&!(n&&i);case 27:return!(dt||ut||ht)}return(!ht||!(i||r||s))&&oc(e)}function oc(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(dt||ut)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return ht;default:return!1}}function cc(e){if(ht)e=uc(e);else if(pt&&dt)switch(e){case 93:e=91}return e}function uc(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}function lc(e){Ri.call(this),this.a=e,vi(e,"keydown",this.g,!1,this),vi(e,"click",this.h,!1,this)}function hc(e,t){var n=new fc(t);if(Di(e,n)){n=new dc(t);try{Di(e,n)}finally{t.stopPropagation()}}}function dc(e){ai.call(this,e.a),this.type="action"}function fc(e){ai.call(this,e.a),this.type="beforeaction"}function pc(e){Ri.call(this),this.a=e,e=ct?"focusout":"blur",this.g=vi(this.a,ct?"focusin":"focus",this,!ct),this.h=vi(this.a,e,this,!ct)}function mc(e,t){Ri.call(this),this.g=e||1,this.a=t||f,this.h=N(this.gc,this),this.j=P()}function gc(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function vc(e,t){if(S(e))t&&(e=N(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=N(e.handleEvent,e)}return 2147483647<Number(0)?-1:f.setTimeout(e,0)}function yc(e){Yn.call(this),this.g=e,this.a={}}L(lc,Ri),lc.prototype.g=function(e){(13==e.keyCode||dt&&3==e.keyCode)&&hc(this,e)},lc.prototype.h=function(e){hc(this,e)},lc.prototype.o=function(){lc.K.o.call(this),Ii(this.a,"keydown",this.g,!1,this),Ii(this.a,"click",this.h,!1,this),delete this.a},L(dc,ai),L(fc,ai),L(pc,Ri),pc.prototype.handleEvent=function(e){var t=new ai(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",Di(this,t)},pc.prototype.o=function(){pc.K.o.call(this),_i(this.g),_i(this.h),delete this.a},L(mc,Ri),e=mc.prototype,e.Ka=!1,e.aa=null,e.gc=function(){if(this.Ka){var e=P()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),Di(this,"tick"),this.Ka&&(gc(this),this.start()))}},e.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=P())},e.o=function(){mc.K.o.call(this),gc(this),delete this.a},L(yc,Yn);var bc=[];function wc(e,t,n,i){I(n)||(n&&(bc[0]=n.toString()),n=bc);for(var r=0;r<n.length;r++){var s=vi(t,n[r],i||e.handleEvent,!1,e.g||e);if(!s)break;e.a[s.key]=s}}function Ic(e){ue(e.a,(function(e,t){this.a.hasOwnProperty(t)&&_i(e)}),e),e.a={}}function _c(e){Ri.call(this),this.a=null,this.g=e,e=ct||ut||dt&&!It("531")&&"TEXTAREA"==e.tagName,this.h=new yc(this),wc(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function Sc(e){null!=e.a&&(f.clearTimeout(e.a),e.a=null)}function Ec(e){return e=new ai(e.a),e.type="input",e}function Tc(e,t){Ri.call(this),e&&(this.Oa&&Rc(this),this.qa=e,this.Na=vi(this.qa,"keypress",this,t),this.Ya=vi(this.qa,"keydown",this.Jb,t,this),this.Oa=vi(this.qa,"keyup",this.Kb,t,this))}yc.prototype.o=function(){yc.K.o.call(this),Ic(this)},yc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},L(_c,Ri),_c.prototype.handleEvent=function(e){if("input"==e.type)ct&&It(10)&&0==e.keyCode&&0==e.j||(Sc(this),Di(this,Ec(e)));else if("keydown"!=e.type||sc(e)){var t="keydown"==e.type?this.g.value:null;ct&&229==e.keyCode&&(t=null);var n=Ec(e);Sc(this),this.a=vc((function(){this.a=null,this.g.value!=t&&Di(this,n)}),this)}},_c.prototype.o=function(){_c.K.o.call(this),this.h.m(),Sc(this),delete this.g},L(Tc,Ri),e=Tc.prototype,e.qa=null,e.Na=null,e.Ya=null,e.Oa=null,e.R=-1,e.X=-1,e.Ua=!1;var kc={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Cc={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Ac=!dt||It("525"),Nc=pt&&ht;function Rc(e){e.Na&&(_i(e.Na),_i(e.Ya),_i(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function Dc(e,t,n,i){ai.call(this,i),this.type="key",this.keyCode=e,this.j=t,this.repeat=n}function xc(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i}function Pc(e,t){var n=rn(e);return n.defaultView&&n.defaultView.getComputedStyle&&(e=n.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function Oc(e){try{var t=e.getBoundingClientRect()}catch(n){return{left:0,top:0,right:0,bottom:0}}return ct&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function Lc(e,t){t=t||tn(document);var n=t||tn(document),i=Mc(e),r=Mc(n);if(!ct||9<=Number(bt)){a=Pc(n,"borderLeftWidth");var s=Pc(n,"borderRightWidth");o=Pc(n,"borderTopWidth"),c=Pc(n,"borderBottomWidth"),s=new xc(parseFloat(o),parseFloat(s),parseFloat(c),parseFloat(a))}else{var a=Uc(n,"borderLeft");s=Uc(n,"borderRight");var o=Uc(n,"borderTop"),c=Uc(n,"borderBottom");s=new xc(o,s,c,a)}n==tn(document)?(a=i.a-n.scrollLeft,i=i.g-n.scrollTop,!ct||10<=Number(bt)||(a+=s.left,i+=s.top)):(a=i.a-r.a-s.left,i=i.g-r.g-s.top),r=e.offsetWidth,s=e.offsetHeight,o=dt&&!r&&!s,p(r)&&!o||!e.getBoundingClientRect?e=new Ht(r,s):(e=Oc(e),e=new Ht(e.right-e.left,e.bottom-e.top)),r=n.clientHeight-e.height,s=n.scrollLeft,o=n.scrollTop,s+=Math.min(a,Math.max(a-(n.clientWidth-e.width),0)),o+=Math.min(i,Math.max(i-r,0)),n=new Wt(s,o),t.scrollLeft=n.a,t.scrollTop=n.g}function Mc(e){var t=rn(e),n=new Wt(0,0),i=t?rn(t):document;return i=!ct||9<=Number(bt)||"CSS1Compat"==Qt(i).a.compatMode?i.documentElement:i.body,e==i||(e=Oc(e),i=Qt(t).a,t=tn(i),i=i.parentWindow||i.defaultView,t=ct&&It("10")&&i.pageYOffset!=t.scrollTop?new Wt(t.scrollLeft,t.scrollTop):new Wt(i.pageXOffset||t.scrollLeft,i.pageYOffset||t.scrollTop),n.a=e.left+t.a,n.g=e.top+t.g),n}e=Tc.prototype,e.Jb=function(e){(dt||ut)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||pt&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),Ac&&!ac(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=cc(e.keyCode),Nc&&(this.Ua=e.altKey))},e.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},e.handleEvent=function(e){var t=e.a,n=t.altKey;if(ct&&"keypress"==e.type)var i=this.X,r=13!=i&&27!=i?t.keyCode:0;else(dt||ut)&&"keypress"==e.type?(i=this.X,r=0<=t.charCode&&63232>t.charCode&&oc(i)?t.charCode:0):ot&&!dt?(i=this.X,r=oc(i)?t.keyCode:0):("keypress"==e.type?(Nc&&(n=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(i=t.keyCode,r=0):(i=this.X,r=t.charCode):(i=t.keyCode||this.X,r=t.charCode||0)):(i=t.keyCode||this.X,r=t.charCode||0),pt&&63==r&&224==i&&(i=191));var s=i=cc(i);i?63232<=i&&i in kc?s=kc[i]:25==i&&e.shiftKey&&(s=9):t.keyIdentifier&&t.keyIdentifier in Cc&&(s=Cc[t.keyIdentifier]),ht&&Ac&&"keypress"==e.type&&!ac(s,this.R,e.shiftKey,e.ctrlKey,n,e.metaKey)||(e=s==this.R,this.R=s,t=new Dc(s,r,e,t),t.altKey=n,Di(this,t))},e.N=function(){return this.qa},e.o=function(){Tc.K.o.call(this),Rc(this)},L(Dc,ai),xc.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},xc.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},xc.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},xc.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var Fc={thin:2,medium:4,thick:6};function Uc(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var n=e.currentStyle?e.currentStyle[t+"Width"]:null;if(n in Fc)e=Fc[n];else if(/^\d+px?$/.test(n))e=parseInt(n,10);else{t=e.style.left;var i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=n,n=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=i,e=+n}return e}function Vc(){}function Bc(e){Ri.call(this),this.s=e||Qt(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function jc(e,t){return e.g?Jt(t,e.g||e.s.a):null}function qc(e){return e.L||(e.L=new yc(e)),e.L}function Kc(e,t){e.Ea&&B(e.Ea,t,void 0)}function Gc(e,t){var n=an(e,"firebaseui-textfield");t?(nc(e,"firebaseui-input-invalid"),tc(e,"firebaseui-input"),n&&nc(n,"firebaseui-textfield-invalid")):(nc(e,"firebaseui-input"),tc(e,"firebaseui-input-invalid"),n&&tc(n,"firebaseui-textfield-invalid"))}function zc(e,t,n){t=new _c(t),Zn(e,R(ei,t)),wc(qc(e),t,"input",n)}function $c(e,t,n){t=new Tc(t),Zn(e,R(ei,t)),wc(qc(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),n(e))}))}function Wc(e,t,n){t=new pc(t),Zn(e,R(ei,t)),wc(qc(e),t,"focusin",n)}function Hc(e,t,n){t=new pc(t),Zn(e,R(ei,t)),wc(qc(e),t,"focusout",n)}function Qc(e,t,n){t=new lc(t),Zn(e,R(ei,t)),wc(qc(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),n(e)}))}function Yc(e){tc(e,"firebaseui-hidden")}function Jc(e,t){t&&sn(e,t),nc(e,"firebaseui-hidden")}function Xc(e){return!ec(e,"firebaseui-hidden")&&"none"!=e.style.display}function Zc(e){e=e||{};var t=e.email,n=e.disabled,i='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return i=e.wc?i+"Enter new email address":i+"Email",i+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+Nn(null!=t?t:"")+'"'+(n?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',En(i)}function eu(e){e=e||{},e=e.label;var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=e?t+wn(e):t+"Next",En(t+"</button>")}function tu(){var e=""+eu({label:Cn("Sign In")});return En(e)}function nu(){var e=""+eu({label:Cn("Save")});return En(e)}function iu(){var e=""+eu({label:Cn("Continue")});return En(e)}function ru(e){e=e||{},e=e.label;var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=e?t+wn(e):t+"Choose password",En(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function su(){var e={},t='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return t=e.current?t+"Current password":t+"Password",En(t+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function au(){return En('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function ou(e){e=e||{},e=e.label;var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=e?t+wn(e):t+"Cancel",En(t+"</button>")}function cu(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),En(t)}function uu(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),En(t)}function lu(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+wn(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',En(e)}function hu(e){var t=e.content;return e=e.Ab,En('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+Nn(e):"")+'">'+wn(t)+"</dialog>")}function du(e){var t=e.message;return En(hu({content:An('<div class="firebaseui-dialog-icon-wrapper"><div class="'+Nn(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+wn(t)+"</div>")}))}function fu(e){var t='<div class="firebaseui-list-box-actions">';e=e.items;for(var n=e.length,i=0;i<n;i++){var r=e[i];t+='<button type="button" data-listboxid="'+Nn(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+Nn(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+wn(r.label)+"</div></button>"}return t=""+hu({Ab:Cn("firebaseui-list-box-dialog"),content:An(t+"</div>")}),En(t)}function pu(e){return e=e||{},En(e.tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function mu(e,t){return e=e||{},e=e.ga,Sn(e.S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function gu(e){bu(e,"upgradeElement")}function vu(e){bu(e,"downgradeElements")}b(Vc),Vc.prototype.a=0,L(Bc,Ri),e=Bc.prototype,e.Lb=Vc.Xa(),e.N=function(){return this.g},e.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Bc.K.Za.call(this,e)},e.kb=function(){this.g=this.s.a.createElement("DIV")},e.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},e.v=function(){this.na=!0,Kc(this,(function(e){!e.na&&e.N()&&e.v()}))},e.ya=function(){Kc(this,(function(e){e.na&&e.ya()})),this.L&&Ic(this.L),this.na=!1},e.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Kc(this,(function(e){e.m()})),this.g&&nn(this.g),this.Y=this.g=this.oa=this.Ea=null,Bc.K.o.call(this)},e.removeChild=function(e,t){if(e){var n=m(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&n?(e=this.oa,e=(null!==e&&n in e?e[n]:void 0)||null):e=null,n&&e){var i=this.oa;if(n in i&&delete i[n],$(this.Ea,e),t&&(e.ya(),e.g&&nn(e.g)),t=e,null==t)throw Error("Unable to set parent component");t.Y=null,Bc.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},lu.a="firebaseui.auth.soy2.element.infoBar",du.a="firebaseui.auth.soy2.element.progressDialog",fu.a="firebaseui.auth.soy2.element.listBoxDialog",pu.a="firebaseui.auth.soy2.element.busyIndicator";var yu=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function bu(e,t){e&&window.componentHandler&&window.componentHandler[t]&&yu.forEach((function(n){ec(e,n)&&window.componentHandler[t](e),B(Yt(n,e),(function(e){window.componentHandler[t](e)}))}))}function wu(e,t,n){if(Iu.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),gu(e),t&&Qc(this,e,(function(t){var n=e.getBoundingClientRect();(t.clientX<n.left||n.left+n.width<t.clientX||t.clientY<n.top||n.top+n.height<t.clientY)&&Iu.call(this)})),!n){var i=this.N().parentElement||this.N().parentNode;if(i){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,n=i.getBoundingClientRect().height,s=i.getBoundingClientRect().top-document.body.getBoundingClientRect().top,a=i.getBoundingClientRect().left-document.body.getBoundingClientRect().left,o=e.getBoundingClientRect().width,c=i.getBoundingClientRect().width;e.style.top=(s+(n-t)/2).toString()+"px",t=a+(c-o)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-o).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Iu(){var e=_u.call(this);e&&(vu(e),e.open&&e.close(),nn(e),this.da&&window.removeEventListener("resize",this.da))}function _u(){return Jt("firebaseui-id-dialog")}function Su(){nn(Eu.call(this))}function Eu(){return jc(this,"firebaseui-id-info-bar")}function Tu(){return jc(this,"firebaseui-id-dismiss-info-bar")}var ku={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Cu(e,t,n){for(var i in si.call(this,e,t),n)this[i]=n[i]}function Au(e,t,n,i,r){Bc.call(this,n),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=i||null,this.A=this.ca=null,this.Z=le(ku),de(this.Z,r||{})}function Nu(e){e.Fa=!0;var t=ec(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=pn(pu,{tb:t},null,e.s),e.N().appendChild(e.A),gu(e.A))}),500)}function Ru(e){return e.N().parentElement||e.N().parentNode}function Du(e,t,n){$c(e,t,(function(){n.focus()}))}function xu(e,t,n){$c(e,t,(function(){n()}))}function Pu(e,t,n){e=e||{},t=e.Va;var i=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Zc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?ou(null):"")+eu(null)+'</div></div><div class="firebaseui-card-footer">'+(i?uu(n):cu(n))+"</div></form></div>",En(e)}function Ou(e,t,n){return e=e||{},t=e.ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+Zc(e)+su()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+au()+'</div><div class="firebaseui-form-actions">'+tu()+'</div></div><div class="firebaseui-card-footer">'+(t?uu(n):cu(n))+"</div></form></div>",En(e)}function Lu(e,t,n){e=e||{};var i=e.Tb;t=e.Ta;var r=e.ia,s='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+Zc(e);return i?(e=e||{},e=e.name,e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+Nn(null!=e?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=En(e)):e="",n=s+e+ru(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?ou(null):"")+nu()+'</div></div><div class="firebaseui-card-footer">'+(r?uu(n):cu(n))+"</div></form></div>",En(n)}function Mu(e,t,n){return e=e||{},t=e.Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+Zc(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?ou(null):"")+eu({label:Cn("Send")})+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(e)}function Fu(e,t,n){t=e.G;var i="";return e="Follow the instructions sent to <strong>"+wn(e.email)+"</strong> to recover your password",i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+'</p></div><div class="firebaseui-card-actions">',t&&(i+='<div class="firebaseui-form-actions">'+eu({label:Cn("Done")})+"</div>"),i+='</div><div class="firebaseui-card-footer">'+cu(n)+"</div></div>",En(i)}function Uu(e,t,n){return En('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+pu(null,null,n)+"</div></div>")}function Vu(e,t,n){return En('<div class="firebaseui-container firebaseui-id-page-spinner">'+pu({tb:!0},null,n)+"</div>")}function Bu(){return En('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function ju(e,t,n){t="",e="A sign-in email with additional instructions was sent to <strong>"+wn(e.email)+"</strong>. Check your email to complete sign-in.";var i=En('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+e+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+i+'</div><div class="firebaseui-form-actions">'+ou({label:Cn("Back")})+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(t)}function qu(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+En('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+ou({label:Cn("Back")})+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(e)}function Ku(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+Zc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ou(null)+eu(null)+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(e)}function Gu(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ou({label:Cn("Dismiss")})+"</div></div></div>";return En(e)}function zu(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ou({label:Cn("Dismiss")})+"</div></div></div>";return En(e)}function $u(e,t,n){return t="",e="You’ve already used <strong>"+wn(e.email)+"</strong> to sign in. Enter your password for that account.",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+e+"</p>"+su()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+au()+'</div><div class="firebaseui-form-actions">'+tu()+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(t)}function Wu(e,t,n){var i=e.email;return t="",e=""+mu(e,n),e=Cn(e),i="You’ve already used <strong>"+wn(i)+"</strong>. You can connect your <strong>"+wn(e)+"</strong> account with <strong>"+wn(i)+"</strong> by signing in with email link below.",e="For this flow to successfully connect your "+wn(e)+" account with this email, you have to open the link on the same device or browser.",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+i+'<p class="firebaseui-text firebaseui-text-justify">'+e+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+tu()+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(t)}function Hu(e,t,n){t="";var i=""+mu(e,n);return i=Cn(i),e="You originally intended to connect <strong>"+wn(i)+"</strong> to your email account but have opened the link on a different device where you are not signed in.",i="If you still want to connect your <strong>"+wn(i)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+e+'</p><p class="firebaseui-text firebaseui-text-justify">'+i+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+iu()+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(t)}function Qu(e,t,n){var i=e.email;return t="",e=""+mu(e,n),e=Cn(e),i="You’ve already used <strong>"+wn(i)+"</strong>. Sign in with "+wn(e)+" to continue.",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+i+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+eu({label:Cn("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(t)}function Yu(e,t,n){e=e||{};var i=e.kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return i?(i="<strong>"+wn(i)+"</strong> is not authorized to view the requested page.",r+=i):r+="User is not authorized to view the requested page.",r+="</p>",t&&(t="Please contact <strong>"+wn(t)+"</strong> for authorization.",r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+t+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+ou({label:Cn("Back")})+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(r)}function Ju(e,t,n){return t="",e="To continue sign in with <strong>"+wn(e.email)+"</strong> on this device, you have to recover the password.",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ou(null)+eu({label:Cn("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(t)}function Xu(e){var t="",n='<p class="firebaseui-text">for <strong>'+wn(e.email)+"</strong></p>";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+n+ru(kn(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+nu()+"</div></div></form></div>",En(t)}function Zu(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></div>",En(e)}function el(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></div>",En(e)}function tl(e){var t=e.G,n="";return e="Your sign-in email address has been changed back to <strong>"+wn(e.email)+"</strong>.",n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></form></div>",En(n)}function nl(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></div>",En(e)}function il(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></div>",En(e)}function rl(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></div>",En(e)}function sl(e){var t=e.G,n="";return e="You can now sign in with your new email <strong>"+wn(e.email)+"</strong>.",n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></div>",En(n)}function al(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></div>",En(e)}function ol(e){var t=e.factorId,n=e.phoneNumber;e=e.G;var i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';switch(t){case"phone":t="The <strong>"+wn(t)+" "+wn(n)+"</strong> was removed as a second authentication step.",i+=t;break;default:i+="The device or app was removed as a second authentication step."}return i+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></form></div>",En(i)}function cl(e){return e=e||{},e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+(e.G?'<div class="firebaseui-form-actions">'+iu()+"</div>":"")+"</div></div>",En(e)}function ul(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+wn(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=eu({label:Cn("Retry")})),En(e+"</div></div></div>")}function ll(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+wn(e.errorMessage)+"</p></div></div>",En(e)}function hl(e,t,n){var i=e.Qb;return t="",e="Continue with "+wn(e.jc)+"?",i="You originally wanted to sign in with "+wn(i),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+e+'</h2><p class="firebaseui-text">'+i+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ou(null)+eu({label:Cn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form></div>",En(t)}function dl(e,t,n){var i='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';e=e.Sb,t=e.length;for(var r=0;r<t;r++){var s={ga:e[r]},a=n;s=s||{};var o=s.ga,c=s;c=c||{};var u="";switch(c.ga.providerId){case"google.com":u+="firebaseui-idp-google";break;case"github.com":u+="firebaseui-idp-github";break;case"facebook.com":u+="firebaseui-idp-facebook";break;case"twitter.com":u+="firebaseui-idp-twitter";break;case"phone":u+="firebaseui-idp-phone";break;case"anonymous":u+="firebaseui-idp-anonymous";break;case"password":u+="firebaseui-idp-password";break;default:u+="firebaseui-idp-generic"}c='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+Nn(Sn(u))+' firebaseui-id-idp-button" data-provider-id="'+Nn(o.providerId)+'" style="background-color:',u=(u=s)||{},u=u.ga,c=c+Nn(Dn(Sn(u.ta?u.ta:a.wa[u.providerId]?""+a.wa[u.providerId]:0==u.providerId.indexOf("saml.")?""+a.wa.saml:0==u.providerId.indexOf("oidc.")?""+a.wa.oidc:""+a.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var l=s;u=a,l=l||{},l=l.ga,u=Tn(l.za?Rn(l.za):u.xa[l.providerId]?Rn(u.xa[l.providerId]):0==l.providerId.indexOf("saml.")?Rn(u.xa.saml):0==l.providerId.indexOf("oidc.")?Rn(u.xa.oidc):Rn(u.xa.password)),c=c+Nn(Rn(u))+'"></span>',"password"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=wn(o.V):o.S?(s="Sign in with "+wn(mu(s,a)),c+=s):c+="Sign in with email",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+wn(o.S):c+"Email",c+="</span>"):"phone"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=wn(o.V):o.S?(s="Sign in with "+wn(mu(s,a)),c+=s):c+="Sign in with phone",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+wn(o.S):c+"Phone",c+="</span>"):"anonymous"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=wn(o.V):o.S?(s="Sign in with "+wn(mu(s,a)),c+=s):c+="Continue as guest",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+wn(o.S):c+"Guest",c+="</span>"):(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=wn(o.V):(u="Sign in with "+wn(mu(s,a)),c+=u),c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(o.S?wn(o.S):wn(mu(s,a)))+"</span>"),o=En(c+"</button>"),i+='<li class="firebaseui-list-item">'+o+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+uu(n)+"</div></div>",En(i)}function fl(e,t,n){e=e||{};var i,r=e.Gb,s=e.Va;return t=e.ia,e=e||{},e=e.Aa,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+Nn(null!=e?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+En(e),i=r?En('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"",i=e+i+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?ou(null):"")+eu({label:Cn("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=n.F&&n.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",n=En(t+"</p>")):n=En('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+cu(n),En(i+n+"</div></form></div>")}function pl(e,t,n){e=e||{},t=e.phoneNumber;var i="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+wn(t)+"</a>",wn(t),t=i,i=En('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'),n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+i+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ou(null)+eu({label:Cn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+cu(n)+"</div></form>",e=En('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),En(t+(n+e+"</div>"))}function ml(){return En('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function gl(e,t,n){var i='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';e=e.ec,t=e.length;for(var r=0;r<t;r++){var s=e[r],a="",o=wn(s.displayName),c=s.tenantId?s.tenantId:"top-level-project";c=Cn(c),a+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+Nn(c)+' firebaseui-id-tenant-selection-button"'+(s.tenantId?'data-tenant-id="'+Nn(s.tenantId)+'"':"")+'style="background-color:'+Nn(Dn(s.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+Nn(Rn(s.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?a+=wn(s.V):(s="Sign in to "+wn(s.displayName),a+=s),a=En(a+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+o+"</span></button>"),i+='<li class="firebaseui-list-item">'+a+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+uu(n)+"</div></div>",En(i)}function vl(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Zc(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+eu(null)+'</div></div><div class="firebaseui-card-footer">'+uu(n)+"</div></form></div>",En(e)}function yl(){return jc(this,"firebaseui-id-submit")}function bl(){return jc(this,"firebaseui-id-secondary-link")}function wl(e,t){Qc(this,yl.call(this),(function(t){e(t)}));var n=bl.call(this);n&&t&&Qc(this,n,(function(e){t(e)}))}function Il(){return jc(this,"firebaseui-id-password")}function _l(){return jc(this,"firebaseui-id-password-error")}function Sl(){var e=Il.call(this),t=_l.call(this);zc(this,e,(function(){Xc(t)&&(Gc(e,!0),Yc(t))}))}function El(){var e=Il.call(this),t=_l.call(this);return ic(e)?(Gc(e,!0),Yc(t),t=!0):(Gc(e,!1),Jc(t,Sn("Enter your password").toString()),t=!1),t?ic(e):null}function Tl(e,t,n,i,r,s){Au.call(this,$u,{email:e},s,"passwordLinking",{F:i,D:r}),this.w=t,this.H=n}L(Cu,si),L(Au,Bc),e=Au.prototype,e.kb=function(){var e=pn(this.fb,this.eb,this.Z,this.s);gu(e),this.g=e},e.v=function(){if(Au.K.v.call(this),Li(Ru(this),new Cu("pageEnter",Ru(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;Qc(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;Qc(this,this.ab(),(function(){t()}))}},e.ya=function(){Li(Ru(this),new Cu("pageExit",Ru(this),{pageId:this.Ga})),Au.K.ya.call(this)},e.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,vu(this.N()),Au.K.o.call(this)},e.I=function(e,t,n,i){function r(){if(s.T)return null;s.Fa=!1,window.clearTimeout(s.ca),s.ca=null,s.A&&(vu(s.A),nn(s.A),s.A=null)}var s=this;return s.Fa?null:(Nu(s),e.apply(null,t).then(n,i).then(r,r))},D(Au.prototype,{a:function(e){Su.call(this);var t=pn(lu,{message:e},null,this.s);this.N().appendChild(t),Qc(this,Tu.call(this),(function(){nn(t)}))},yc:Su,Ac:Eu,zc:Tu,$:function(e,t){e=pn(du,{Ma:e,message:t},null,this.s),wu.call(this,e)},h:Iu,Cb:_u,Cc:function(){return jc(this,"firebaseui-tos")},bb:function(){return jc(this,"firebaseui-tos-link")},ab:function(){return jc(this,"firebaseui-pp-link")},Dc:function(){return jc(this,"firebaseui-tos-list")}}),Pu.a="firebaseui.auth.soy2.page.signIn",Ou.a="firebaseui.auth.soy2.page.passwordSignIn",Lu.a="firebaseui.auth.soy2.page.passwordSignUp",Mu.a="firebaseui.auth.soy2.page.passwordRecovery",Fu.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",Uu.a="firebaseui.auth.soy2.page.callback",Vu.a="firebaseui.auth.soy2.page.spinner",Bu.a="firebaseui.auth.soy2.page.blank",ju.a="firebaseui.auth.soy2.page.emailLinkSignInSent",qu.a="firebaseui.auth.soy2.page.emailNotReceived",Ku.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Gu.a="firebaseui.auth.soy2.page.differentDeviceError",zu.a="firebaseui.auth.soy2.page.anonymousUserMismatch",$u.a="firebaseui.auth.soy2.page.passwordLinking",Wu.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",Hu.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",Qu.a="firebaseui.auth.soy2.page.federatedLinking",Yu.a="firebaseui.auth.soy2.page.unauthorizedUser",Ju.a="firebaseui.auth.soy2.page.unsupportedProvider",Xu.a="firebaseui.auth.soy2.page.passwordReset",Zu.a="firebaseui.auth.soy2.page.passwordResetSuccess",el.a="firebaseui.auth.soy2.page.passwordResetFailure",tl.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",nl.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",il.a="firebaseui.auth.soy2.page.emailVerificationSuccess",rl.a="firebaseui.auth.soy2.page.emailVerificationFailure",sl.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",al.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",ol.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",cl.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",ul.a="firebaseui.auth.soy2.page.recoverableError",ll.a="firebaseui.auth.soy2.page.unrecoverableError",hl.a="firebaseui.auth.soy2.page.emailMismatch",dl.a="firebaseui.auth.soy2.page.providerSignIn",fl.a="firebaseui.auth.soy2.page.phoneSignInStart",pl.a="firebaseui.auth.soy2.page.phoneSignInFinish",ml.a="firebaseui.auth.soy2.page.signOut",gl.a="firebaseui.auth.soy2.page.selectTenant",vl.a="firebaseui.auth.soy2.page.providerMatchByEmail",u(Tl,Au),Tl.prototype.v=function(){this.P(),this.M(this.w,this.H),xu(this,this.i(),this.w),this.i().focus(),Au.prototype.v.call(this)},Tl.prototype.o=function(){this.w=null,Au.prototype.o.call(this)},Tl.prototype.j=function(){return ic(jc(this,"firebaseui-id-email"))},D(Tl.prototype,{i:Il,B:_l,P:Sl,u:El,ea:yl,ba:bl,M:wl});var kl=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Cl(){return jc(this,"firebaseui-id-email")}function Al(){return jc(this,"firebaseui-id-email-error")}function Nl(e){var t=Cl.call(this),n=Al.call(this);zc(this,t,(function(){Xc(n)&&(Gc(t,!0),Yc(n))})),e&&$c(this,t,(function(){e()}))}function Rl(){return Z(ic(Cl.call(this))||"")}function Dl(){var e=Cl.call(this),t=Al.call(this),n=ic(e)||"";return n?kl.test(n)?(Gc(e,!0),Yc(t),t=!0):(Gc(e,!1),Jc(t,Sn("That email address isn't correct").toString()),t=!1):(Gc(e,!1),Jc(t,Sn("Enter your email address to continue").toString()),t=!1),t?Z(ic(e)):null}function xl(e,t,n,i,r,s,a){Au.call(this,Ou,{email:n,ia:!!s},a,"passwordSignIn",{F:i,D:r}),this.w=e,this.H=t}function Pl(e,t,n,i,r,s){Au.call(this,e,t,i,r||"notice",s),this.i=n||null}function Ol(e,t,n,i,r){Pl.call(this,Fu,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:n,D:i})}function Ll(e,t){Pl.call(this,il,{G:!!e},e,t,"emailVerificationSuccess")}function Ml(e,t){Pl.call(this,rl,{G:!!e},e,t,"emailVerificationFailure")}function Fl(e,t,n){Pl.call(this,sl,{email:e,G:!!t},t,n,"verifyAndChangeEmailSuccess")}function Ul(e,t){Pl.call(this,al,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function Vl(e,t){Pl.call(this,cl,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function Bl(e){Pl.call(this,ml,void 0,void 0,e,"signOut")}function jl(e,t){Pl.call(this,Zu,{G:!!e},e,t,"passwordResetSuccess")}function ql(e,t){Pl.call(this,el,{G:!!e},e,t,"passwordResetFailure")}function Kl(e,t){Pl.call(this,nl,{G:!!e},e,t,"emailChangeRevokeFailure")}function Gl(e,t,n){Pl.call(this,ul,{errorMessage:e,zb:!!t},t,n,"recoverableError")}function zl(e,t){Pl.call(this,ll,{errorMessage:e},void 0,t,"unrecoverableError")}function $l(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function Wl(e,t,n,i){function r(n){if(!n.name||"cancel"!=n.name){e:{var i=n.message;try{var r=((JSON.parse(i).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var s=!0;break e}}catch(a){}s=!1}if(s)n=Ru(t),t.m(),rh(e,n,void 0,Sn("Your sign-in session has expired. Please try again.").toString());else{if(s=n&&n.message||"",n.code){if("auth/email-already-in-use"==n.code||"auth/credential-already-in-use"==n.code)return;s=Yl(n)}t.a(s)}}}if(Kd(e),i)return Hl(e,n),cr();if(!n.credential)throw Error("No credential found!");if(!xd(e).currentUser&&!n.user)throw Error("User not logged in.");try{var s=ef(e,n)}catch(a){return Is(a.code||a.message,a),t.a(a.code||a.message),cr()}return n=s.then((function(t){Hl(e,t)}),r).then(void 0,r),jd(e,s),cr(n)}function Hl(e,t){if(!t.user)throw Error("No user found");var n=Mo($d(e));if(Lo($d(e))&&n&&Ts("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),n){n=Mo($d(e));var i=Aa(Od(e))||void 0;ka(_a,Od(e));var r=!1;Sr()?(n&&!n(t,i)||(r=!0,$t(window.opener.location,Ql(e,i))),n||window.close()):n&&!n(t,i)||(r=!0,$t(window.location,Ql(e,i))),r||e.reset()}else{n=t.user,t=t.credential,i=Lo($d(e)),r=Aa(Od(e))||void 0,ka(_a,Od(e));var s=!1;Sr()?(i&&!i(n,t,r)||(s=!0,$t(window.opener.location,Ql(e,r))),i||window.close()):i&&!i(n,t,r)||(s=!0,$t(window.location,Ql(e,r))),s||e.reset()}}function Ql(e,t){if(e=t||$d(e).a.get("signInSuccessUrl"),!e)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function Yl(e){var t={code:e.code};t=t||{};var n="";switch(t.code){case"auth/email-already-in-use":n+="The email address is already used by another account";break;case"auth/requires-recent-login":n+=Wn();break;case"auth/too-many-requests":n+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":n+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":n+="That email address doesn't match an existing account";break;case"auth/user-token-expired":n+=Wn();break;case"auth/weak-password":n+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":n+="The email and password you entered don't match";break;case"auth/network-request-failed":n+="A network error has occurred";break;case"auth/invalid-phone-number":n+=qn();break;case"auth/invalid-verification-code":n+=Sn("Wrong code. Try again.");break;case"auth/code-expired":n+="This code is no longer valid";break;case"auth/expired-action-code":n+="This code has expired.";break;case"auth/invalid-action-code":n+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=Sn(n).toString())return t;try{return JSON.parse(e.message),Is("Internal error: "+e.message,void 0),Gn().toString()}catch(i){return e.message}}function Jl(e,t,n){var r=ro[t]&&i["default"].auth[ro[t]]?new i["default"].auth[ro[t]]:0==t.indexOf("saml.")?new i["default"].auth.SAMLAuthProvider(t):new i["default"].auth.OAuthProvider(t);if(!r)throw Error("Invalid Firebase Auth provider!");var s=Io($d(e),t);if(r.addScope)for(var a=0;a<s.length;a++)r.addScope(s[a]);return s=_o($d(e),t)||{},n&&(e=t==i["default"].auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==i["default"].auth.GithubAuthProvider.PROVIDER_ID?"login":(e=lo($d(e),t))&&e.Ob,e&&(s[e]=n)),r.setCustomParameters&&r.setCustomParameters(s),r}function Xl(e,t,n,i){function r(){Pa(new Os(e.h.tenantId||null),Od(e)),jd(e,t.I(N(e.dc,e),[c],(function(){if("file:"===(window.location&&window.location.protocol))return jd(e,Nd(e).then((function(n){t.m(),ka(Ia,Od(e)),Xo("callback",e,o,cr(n))}),s))}),a))}function s(i){if(ka(Ia,Od(e)),!i.name||"cancel"!=i.name)switch(i=$l(i),i.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":break;case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(Yl(i));break;case"auth/admin-restricted-operation":t.m(),mo($d(e))?Xo("handleUnauthorizedUser",e,o,null,n):Xo("callback",e,o,ur(i));break;default:t.m(),Xo("callback",e,o,ur(i))}}function a(n){ka(Ia,Od(e)),n.name&&"cancel"==n.name||(Is("signInWithRedirect: "+n.code,void 0),n=Yl(n),"blank"==t.Ga&&Po($d(e))?(t.m(),Xo("providerSignIn",e,o,n)):t.a(n))}var o=Ru(t),c=Jl(e,n,i);Oo($d(e))==$o?r():jd(e,Zd(e,c).then((function(n){t.m(),Xo("callback",e,o,cr(n))}),s))}function Zl(e,t){jd(e,t.I(N(e.$b,e),[],(function(n){return t.m(),Wl(e,t,n,!0)}),(function(e){e.name&&"cancel"==e.name||(Is("ContinueAsGuest: "+e.code,void 0),e=Yl(e),t.a(e))})))}function eh(e,t,n){function r(n){var r=!1;return n=t.I(N(e.ac,e),[n],(function(n){var i=Ru(t);t.m(),Xo("callback",e,i,cr(n)),r=!0}),(function(n){if((!n.name||"cancel"!=n.name)&&(!n||"auth/credential-already-in-use"!=n.code))if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential){var r=Ru(t);t.m(),Xo("callback",e,r,ur(n))}else n&&"auth/admin-restricted-operation"==n.code&&mo($d(e))?(n=Ru(t),t.m(),Xo("handleUnauthorizedUser",e,n,null,i["default"].auth.GoogleAuthProvider.PROVIDER_ID)):(n=Yl(n),t.a(n))})),jd(e,n),n.then((function(){return r}),(function(){return!1}))}if(n&&n.credential&&n.clientId===fo($d(e))){if(Io($d(e),i["default"].auth.GoogleAuthProvider.PROVIDER_ID).length){try{var s=JSON.parse(atob(n.credential.split(".")[1])).email}catch(a){}return Xl(e,t,i["default"].auth.GoogleAuthProvider.PROVIDER_ID,s),cr(!0)}return r(i["default"].auth.GoogleAuthProvider.credential(n.credential))}return n&&t.a(Sn("The selected credential for the authentication provider is not supported!").toString()),cr(!1)}function th(e,t){var n=t.j(),r=t.u();if(n)if(r){var s=i["default"].auth.EmailAuthProvider.credential(n,r);jd(e,t.I(N(e.bc,e),[n,r],(function(n){return Wl(e,t,{user:n.user,credential:s,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":Gc(t.l(),!1),Jc(t.U(),Yl(e));break;case"auth/too-many-requests":case"auth/wrong-password":Gc(t.i(),!1),Jc(t.B(),Yl(e));break;default:Is("verifyPassword: "+e.message,void 0),t.a(Yl(e))}})))}else t.i().focus();else t.l().focus()}function nh(e){return e=uo($d(e)),1==e.length&&e[0]==i["default"].auth.EmailAuthProvider.PROVIDER_ID}function ih(e){return e=uo($d(e)),1==e.length&&e[0]==i["default"].auth.PhoneAuthProvider.PROVIDER_ID}function rh(e,t,n,i){nh(e)?i?Xo("signIn",e,t,n,i):ch(e,t,n):e&&ih(e)&&!i?Xo("phoneSignInStart",e,t):e&&Po($d(e))&&!i?Xo("federatedRedirect",e,t,n):Xo("providerSignIn",e,t,i,n)}function sh(e,t,n,i){var r=Ru(t);jd(e,t.I(N(xd(e).fetchSignInMethodsForEmail,xd(e)),[n],(function(s){t.m(),ah(e,r,s,n,i)}),(function(e){e=Yl(e),t.a(e)})))}function ah(e,t,n,r,s,a){n.length||Ro($d(e))&&!Ro($d(e))?z(n,i["default"].auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?Xo("passwordSignIn",e,t,r,a):1==n.length&&n[0]===i["default"].auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Ro($d(e))?Xo("sendEmailLinkForSignIn",e,t,r,(function(){Xo("signIn",e,t)})):Xo("unsupportedProvider",e,t,r):(n=no(n,uo($d(e))))?(Da(new Ds(r),Od(e)),Xo("federatedSignIn",e,t,r,n,s)):Xo("unsupportedProvider",e,t,r):po($d(e))?Xo("handleUnauthorizedUser",e,t,r,i["default"].auth.EmailAuthProvider.PROVIDER_ID):Ro($d(e))?Xo("sendEmailLinkForSignIn",e,t,r,(function(){Xo("signIn",e,t)})):Xo("passwordSignUp",e,t,r,void 0,void 0,a)}function oh(e,t,n,i,r,s){var a=Ru(t);jd(e,t.I(N(e.Ib,e),[n,s],(function(){t.m(),Xo("emailLinkSignInSent",e,a,n,i,s)}),r))}function ch(e,t,n){n?Xo("prefilledEmailSignIn",e,t,n):Xo("signIn",e,t)}function uh(){return Te(kr(),"oobCode")}function lh(){var e=Te(kr(),"continueUrl");return e?function(){$t(window.location,e)}:null}function hh(e,t){Au.call(this,zu,void 0,t,"anonymousUserMismatch"),this.i=e}function dh(e){Au.call(this,Uu,void 0,e,"callback")}function fh(e,t,n){if(n.user){var i={user:n.user,credential:n.credential,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},r=Na(Od(e)),s=r&&r.g;if(s&&!yh(n.user,s))vh(e,t,i);else{var a=r&&r.a;a?jd(e,n.user.linkWithCredential(a).then((function(n){i={user:n.user,credential:a,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},ph(e,t,i)}),(function(n){mh(e,t,n)}))):ph(e,t,i)}}else n=Ru(t),t.m(),Ra(Od(e)),rh(e,n)}function ph(e,t,n){Ra(Od(e)),Wl(e,t,n)}function mh(e,t,n){var i=Ru(t);Ra(Od(e)),n=Yl(n),t.m(),rh(e,i,void 0,n)}function gh(e,t,n,r){var s=Ru(t);jd(e,xd(e).fetchSignInMethodsForEmail(n).then((function(a){t.m(),a.length?z(a,i["default"].auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?Xo("passwordLinking",e,s,n):1==a.length&&a[0]===i["default"].auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Xo("emailLinkSignInLinking",e,s,n):(a=no(a,uo($d(e))))?Xo("federatedLinking",e,s,n,a,r):(Ra(Od(e)),Xo("unsupportedProvider",e,s,n)):(Ra(Od(e)),Xo("passwordRecovery",e,s,n,!1,zn().toString()))}),(function(n){mh(e,t,n)})))}function vh(e,t,n){var i=Ru(t);jd(e,tf(e).then((function(){t.m(),Xo("emailMismatch",e,i,n)}),(function(e){e.name&&"cancel"==e.name||(e=Yl(e.code),t.a(e))})))}function yh(e,t){if(t==e.email)return!0;if(e.providerData)for(var n=0;n<e.providerData.length;n++)if(t==e.providerData[n].email)return!0;return!1}function bh(e,t){Au.call(this,Gu,void 0,t,"differentDeviceError"),this.i=e}function wh(e,t,n,i){Au.call(this,tl,{email:e,G:!!n},i,"emailChangeRevoke"),this.l=t,this.i=n||null}function Ih(){return jc(this,"firebaseui-id-new-password")}function _h(){return jc(this,"firebaseui-id-password-toggle")}function Sh(){this.Ra=!this.Ra;var e=_h.call(this),t=Ih.call(this);this.Ra?(t.type="text",tc(e,"firebaseui-input-toggle-off"),nc(e,"firebaseui-input-toggle-on")):(t.type="password",tc(e,"firebaseui-input-toggle-on"),nc(e,"firebaseui-input-toggle-off")),t.focus()}function Eh(){return jc(this,"firebaseui-id-new-password-error")}function Th(){this.Ra=!1;var e=Ih.call(this);e.type="password";var t=Eh.call(this);zc(this,e,(function(){Xc(t)&&(Gc(e,!0),Yc(t))}));var n=_h.call(this);tc(n,"firebaseui-input-toggle-on"),nc(n,"firebaseui-input-toggle-off"),Wc(this,e,(function(){tc(n,"firebaseui-input-toggle-focus"),nc(n,"firebaseui-input-toggle-blur")})),Hc(this,e,(function(){tc(n,"firebaseui-input-toggle-blur"),nc(n,"firebaseui-input-toggle-focus")})),Qc(this,n,N(Sh,this))}function kh(){var e=Ih.call(this),t=Eh.call(this);return ic(e)?(Gc(e,!0),Yc(t),t=!0):(Gc(e,!1),Jc(t,Sn("Enter your password").toString()),t=!1),t?ic(e):null}function Ch(e,t,n){Au.call(this,Xu,{email:e},n,"passwordReset"),this.l=t}function Ah(e,t,n,i,r){Au.call(this,ol,{factorId:e,phoneNumber:n||null,G:!!i},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=i||null}function Nh(e,t,n,i,r){var s=n.u();s&&jd(e,n.I(N(xd(e).confirmPasswordReset,xd(e)),[i,s],(function(){n.m();var i=new jl(r);i.render(t),Rd(e,i)}),(function(i){Rh(e,t,n,i)})))}function Rh(e,t,n,i){"auth/weak-password"==(i&&i.code)?(e=Yl(i),Gc(n.i(),!1),Jc(n.w(),e),n.i().focus()):(n&&n.m(),n=new ql,n.render(t),Rd(e,n))}function Dh(e,t,n){var i=new wh(n,(function(){jd(e,i.I(N(xd(e).sendPasswordResetEmail,xd(e)),[n],(function(){i.m(),i=new Ol(n,void 0,Co($d(e)),Ao($d(e))),i.render(t),Rd(e,i)}),(function(){i.a(Kn().toString())})))}));i.render(t),Rd(e,i)}function xh(e,t,n,i){var r=new Ah(i.factorId,(function(){r.I(N(xd(e).sendPasswordResetEmail,xd(e)),[n],(function(){r.m(),r=new Ol(n,void 0,Co($d(e)),Ao($d(e))),r.render(t),Rd(e,r)}),(function(){r.a(Kn().toString())}))}),i.phoneNumber);r.render(t),Rd(e,r)}function Ph(e,t){try{var n="number"==typeof e.selectionStart}catch(i){n=!1}n?(e.selectionStart=t,e.selectionEnd=t):ct&&!It("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),e=e.createTextRange(),e.collapse(!0),e.move("character",t),e.select())}function Oh(e,t,n,i,r,s){Au.call(this,Ku,{email:n},s,"emailLinkSignInConfirmation",{F:i,D:r}),this.l=e,this.u=t}function Lh(e,t,n,i,r){Au.call(this,Hu,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:n,D:i}),this.i=t}function Mh(e){Au.call(this,Bu,void 0,e,"blank")}function Fh(e,t,n,i,r){var s=new Mh,a=new We(n),o=a.a.a.get(Ze.$a)||"",c=a.a.a.get(Ze.Sa)||"",u="1"===a.a.a.get(Ze.Qa),l=Ye(a),h=a.a.a.get(Ze.PROVIDER_ID)||null;a=a.a.a.get(Ze.vb)||null,Gd(e,a);var d=!Ta(Sa,Od(e)),f=i||Oa(c,Od(e)),p=(i=La(c,Od(e)))&&i.a;h&&p&&p.providerId!==h&&(p=null),s.render(t),Rd(e,s),jd(e,s.I((function(){var t=cr(null);t=l&&d||d&&u?ur(Error("anonymous-user-not-found")):Qd(e,n).then((function(e){if(h&&!p)throw Error("pending-credential-not-found");return e}));var i=null;return t.then((function(t){return i=t,r?null:xd(e).checkActionCode(o)})).then((function(){return i}))}),[],(function(i){f?Bh(e,s,f,n,p,i):u?(s.m(),Xo("differentDeviceError",e,t)):(s.m(),Xo("emailLinkConfirmation",e,t,n,Uh))}),(function(i){var r=void 0;if(!i||!i.name||"cancel"!=i.name)switch(s.m(),i&&i.message){case"anonymous-user-not-found":Xo("differentDeviceError",e,t);break;case"anonymous-user-mismatch":Xo("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":Xo("emailLinkNewDeviceLinking",e,t,n,Vh);break;default:i&&(r=Yl(i)),rh(e,t,void 0,r)}})))}function Uh(e,t,n,i){Fh(e,t,i,n,!0)}function Vh(e,t,n){Fh(e,t,n)}function Bh(e,t,n,i,r,s){var a=Ru(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",Sn("Signing in...").toString());var o=null;r=(s?Yd(e,s,n,i,r):Jd(e,n,i,r)).then((function(n){ka(Ea,Od(e)),ka(Sa,Od(e)),t.h(),t.$("firebaseui-icon-done",Sn("Signed in!").toString()),o=setTimeout((function(){t.h(),Wl(e,t,n,!0)}),1e3),jd(e,(function(){t&&(t.h(),t.m()),clearTimeout(o)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){r=$l(r);var s=Yl(r);"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(ka(Ea,Od(e)),ka(Sa,Od(e))):"auth/invalid-email"==r.code?(s=Sn("The email provided does not match the current sign-in session.").toString(),Xo("emailLinkConfirmation",e,a,i,Uh,null,s)):rh(e,a,n,s)}})),jd(e,r)}function jh(e,t,n,i,r,s){Au.call(this,Wu,{email:e,ga:t},s,"emailLinkSignInLinking",{F:i,D:r}),this.i=n}function qh(e,t,n,i){var r=Ru(t);oh(e,t,n,(function(){rh(e,r,n)}),(function(i){if(!i.name||"cancel"!=i.name){var s=Yl(i);i&&"auth/network-request-failed"==i.code?t.a(s):(t.m(),rh(e,r,n,s))}}),i)}function Kh(e,t,n,i,r,s){Au.call(this,ju,{email:e},s,"emailLinkSignInSent",{F:i,D:r}),this.u=t,this.i=n}function Gh(e,t,n,i,r,s,a){Au.call(this,hl,{jc:e,Qb:t},a,"emailMismatch",{F:r,D:s}),this.l=n,this.i=i}function zh(e,t,n,i,r){Au.call(this,qu,void 0,r,"emailNotReceived",{F:n,D:i}),this.l=e,this.i=t}function $h(e,t,n,i,r,s){Au.call(this,Qu,{email:e,ga:t},s,"federatedLinking",{F:i,D:r}),this.i=n}function Wh(e,t,n,i){var r=t.u();r?jd(e,t.I(N(e.Xb,e),[n,r],(function(n){return n=n.user.linkWithCredential(i).then((function(n){return Wl(e,t,{user:n.user,credential:i,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})})),jd(e,n),n}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":Gc(t.i(),!1),Jc(t.B(),Yl(e));break;case"auth/too-many-requests":t.a(Yl(e));break;default:Is("signInWithEmailAndPassword: "+e.message,void 0),t.a(Yl(e))}}))):t.i().focus()}function Hh(e,t,n,i,r,s){Au.call(this,Mu,{email:n,Ta:!!t},s,"passwordRecovery",{F:i,D:r}),this.l=e,this.u=t}function Qh(e,t){var n=t.j();if(n){var i=Ru(t);jd(e,t.I(N(xd(e).sendPasswordResetEmail,xd(e)),[n],(function(){t.m();var r=new Ol(n,(function(){r.m(),rh(e,i)}),Co($d(e)),Ao($d(e)));r.render(i),Rd(e,r)}),(function(e){Gc(t.i(),!1),Jc(t.w(),Yl(e))})))}else t.i().focus()}function Yh(){return jc(this,"firebaseui-id-name")}function Jh(){return jc(this,"firebaseui-id-name-error")}function Xh(e,t,n,i,r,s,a,o,c){Au.call(this,Lu,{email:i,Tb:e,name:r,Ta:!!n,ia:!!o},c,"passwordSignUp",{F:s,D:a}),this.w=t,this.H=n,this.B=e}function Zh(e,t){var n=No($d(e)),r=t.j(),s=null;n&&(s=t.M());var a=t.P();if(r){if(n){if(!s)return void t.u().focus();s=ce(s)}if(a){var o=i["default"].auth.EmailAuthProvider.credential(r,a);jd(e,t.I(N(e.Yb,e),[r,a],(function(i){var r={user:i.user,credential:o,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};return n?(i=i.user.updateProfile({displayName:s}).then((function(){return Wl(e,t,r)})),jd(e,i),i):Wl(e,t,r)}),(function(n){if(!n.name||"cancel"!=n.name){var s=$l(n);switch(n=Yl(s),s.code){case"auth/email-already-in-use":return ed(e,t,r,s);case"auth/too-many-requests":n=Sn("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Gc(t.l(),!1),Jc(t.ba(),n);break;case"auth/admin-restricted-operation":mo($d(e))?(n=Ru(t),t.m(),Xo("handleUnauthorizedUser",e,n,r,i["default"].auth.EmailAuthProvider.PROVIDER_ID)):t.a(n);break;default:s="setAccountInfo: "+ra(s),Is(s,void 0),t.a(n)}}})))}else t.l().focus()}else t.i().focus()}function ed(e,t,n,i){function r(){var e=Yl(i);Gc(t.i(),!1),Jc(t.U(),e),t.i().focus()}var s=xd(e).fetchSignInMethodsForEmail(n).then((function(i){i.length?r():(i=Ru(t),t.m(),Xo("passwordRecovery",e,i,n,!1,zn().toString()))}),(function(){r()}));return jd(e,s),s}function td(){return jc(this,"firebaseui-id-phone-confirmation-code")}function nd(){return jc(this,"firebaseui-id-phone-confirmation-code-error")}function id(){return jc(this,"firebaseui-id-resend-countdown")}function rd(e,t,n,i,r,s,a,o,c){Au.call(this,pl,{phoneNumber:r},c,"phoneSignInFinish",{F:a,D:o}),this.jb=s,this.i=new mc(1e3),this.B=s,this.P=e,this.l=t,this.H=n,this.M=i}function sd(e,t,n,i){function r(e){t.u().focus(),Gc(t.u(),!1),Jc(t.pa(),e)}var s=t.ba();s?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",Sn("Verifying...").toString()),jd(e,t.I(N(i.confirm,i),[s],(function(n){t.h(),t.$("firebaseui-icon-done",Sn("Verified!").toString());var i=setTimeout((function(){t.h(),t.m();var i={user:Pd(e).currentUser,credential:null,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};Wl(e,t,i,!0)}),1e3);jd(e,(function(){t&&t.h(),clearTimeout(i)}))}),(function(i){if(i.name&&"cancel"==i.name)t.h();else{var s=$l(i);switch(i=Yl(s),s.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":s=Ru(t),t.h(),t.m(),Xo("phoneSignInStart",e,s,n,i);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(i);break;default:t.h(),t.a(i)}}})))):r(Sn("Wrong code. Try again.").toString())}u(xl,Au),xl.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Du(this,this.l(),this.i()),xu(this,this.i(),this.w),ic(this.l())?this.i().focus():this.l().focus(),Au.prototype.v.call(this)},xl.prototype.o=function(){this.H=this.w=null,Au.prototype.o.call(this)},D(xl.prototype,{l:Cl,U:Al,P:Nl,M:Rl,j:Dl,i:Il,B:_l,ea:Sl,u:El,ua:yl,pa:bl,ba:wl}),L(Pl,Au),Pl.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Pl.K.v.call(this)},Pl.prototype.o=function(){this.i=null,Pl.K.o.call(this)},D(Pl.prototype,{l:yl,w:bl,u:wl}),L(Ol,Pl),L(Ll,Pl),L(Ml,Pl),L(Fl,Pl),L(Ul,Pl),L(Vl,Pl),L(Bl,Pl),L(jl,Pl),L(ql,Pl),L(Kl,Pl),L(Gl,Pl),L(zl,Pl),u(hh,Au),hh.prototype.v=function(){var e=this;Qc(this,this.l(),(function(){e.i()})),this.l().focus(),Au.prototype.v.call(this)},hh.prototype.o=function(){this.i=null,Au.prototype.o.call(this)},D(hh.prototype,{l:bl}),Jo.anonymousUserMismatch=function(e,t){var n=new hh((function(){n.m(),rh(e,t)}));n.render(t),Rd(e,n)},u(dh,Au),dh.prototype.I=function(e,t,n,i){return e.apply(null,t).then(n,i)},Jo.callback=function(e,t,n){var i=new dh;i.render(t),Rd(e,i),n=n||Nd(e),jd(e,n.then((function(t){fh(e,i,t)}),(function(n){if((n=$l(n))&&("auth/account-exists-with-different-credential"==n.code||"auth/email-already-in-use"==n.code)&&n.email&&n.credential)Da(new Ds(n.email,n.credential),Od(e)),gh(e,i,n.email);else if(n&&"auth/user-cancelled"==n.code){var r=Na(Od(e)),s=Yl(n);r&&r.a?gh(e,i,r.g,s):r?sh(e,i,r.g,s):mh(e,i,n)}else n&&"auth/credential-already-in-use"==n.code||(n&&"auth/operation-not-supported-in-this-environment"==n.code&&nh(e)?fh(e,i,{user:null,credential:null}):n&&"auth/admin-restricted-operation"==n.code&&mo($d(e))?(i.m(),Ra(Od(e)),Xo("handleUnauthorizedUser",e,t,null,null)):mh(e,i,n))})))},u(bh,Au),bh.prototype.v=function(){var e=this;Qc(this,this.l(),(function(){e.i()})),this.l().focus(),Au.prototype.v.call(this)},bh.prototype.o=function(){this.i=null,Au.prototype.o.call(this)},D(bh.prototype,{l:bl}),Jo.differentDeviceError=function(e,t){var n=new bh((function(){n.m(),rh(e,t)}));n.render(t),Rd(e,n)},u(wh,Au),wh.prototype.v=function(){var e=this;Qc(this,jc(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Au.prototype.v.call(this)},wh.prototype.o=function(){this.l=this.i=null,Au.prototype.o.call(this)},D(wh.prototype,{u:yl,B:bl,w:wl}),u(Ch,Au),Ch.prototype.v=function(){this.H(),this.B(this.l),xu(this,this.i(),this.l),this.i().focus(),Au.prototype.v.call(this)},Ch.prototype.o=function(){this.l=null,Au.prototype.o.call(this)},D(Ch.prototype,{i:Ih,w:Eh,M:_h,H:Th,u:kh,U:yl,P:bl,B:wl}),u(Ah,Au),Ah.prototype.v=function(){var e=this;Qc(this,jc(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Au.prototype.v.call(this)},Ah.prototype.o=function(){this.l=this.i=null,Au.prototype.o.call(this)},D(Ah.prototype,{u:yl,B:bl,w:wl}),Jo.passwordReset=function(e,t,n,i){jd(e,xd(e).verifyPasswordResetCode(n).then((function(r){var s=new Ch(r,(function(){Nh(e,t,s,n,i)}));s.render(t),Rd(e,s)}),(function(){Rh(e,t)})))},Jo.emailChangeRevocation=function(e,t,n){var i=null;jd(e,xd(e).checkActionCode(n).then((function(t){return i=t.data.email,xd(e).applyActionCode(n)})).then((function(){Dh(e,t,i)}),(function(){var n=new Kl;n.render(t),Rd(e,n)})))},Jo.emailVerification=function(e,t,n,i){jd(e,xd(e).applyActionCode(n).then((function(){var n=new Ll(i);n.render(t),Rd(e,n)}),(function(){var n=new Ml;n.render(t),Rd(e,n)})))},Jo.revertSecondFactorAddition=function(e,t,n){var i=null,r=null;jd(e,xd(e).checkActionCode(n).then((function(t){return i=t.data.email,r=t.data.multiFactorInfo,xd(e).applyActionCode(n)})).then((function(){xh(e,t,i,r)}),(function(){var n=new Vl;n.render(t),Rd(e,n)})))},Jo.verifyAndChangeEmail=function(e,t,n,i){var r=null;jd(e,xd(e).checkActionCode(n).then((function(t){return r=t.data.email,xd(e).applyActionCode(n)})).then((function(){var n=new Fl(r,i);n.render(t),Rd(e,n)}),(function(){var n=new Ul;n.render(t),Rd(e,n)})))},u(Oh,Au),Oh.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Ph(this.i(),(this.i().value||"").length),Au.prototype.v.call(this)},Oh.prototype.o=function(){this.u=this.l=null,Au.prototype.o.call(this)},D(Oh.prototype,{i:Cl,M:Al,w:Nl,H:Rl,j:Dl,U:yl,P:bl,B:wl}),Jo.emailLinkConfirmation=function(e,t,n,i,r,s){var a=new Oh((function(){var r=a.j();r?(a.m(),i(e,t,r,n)):a.i().focus()}),(function(){a.m(),rh(e,t,r||void 0)}),r||void 0,Co($d(e)),Ao($d(e)));a.render(t),Rd(e,a),s&&a.a(s)},u(Lh,Au),Lh.prototype.v=function(){this.u(this.i),this.l().focus(),Au.prototype.v.call(this)},Lh.prototype.o=function(){this.i=null,Au.prototype.o.call(this)},D(Lh.prototype,{l:yl,u:wl}),Jo.emailLinkNewDeviceLinking=function(e,t,n,i){var r=new We(n);if(n=r.a.a.get(Ze.PROVIDER_ID)||null,Je(r,null),n){var s=new Lh(lo($d(e),n),(function(){s.m(),i(e,t,r.toString())}),Co($d(e)),Ao($d(e)));s.render(t),Rd(e,s)}else rh(e,t)},u(Mh,Au),Jo.emailLinkSignInCallback=Fh,u(jh,Au),jh.prototype.v=function(){this.u(this.i),this.l().focus(),Au.prototype.v.call(this)},jh.prototype.o=function(){this.i=null,Au.prototype.o.call(this)},D(jh.prototype,{l:yl,u:wl}),Jo.emailLinkSignInLinking=function(e,t,n){var i=Na(Od(e));if(Ra(Od(e)),i){var r=i.a.providerId,s=new jh(n,lo($d(e),r),(function(){qh(e,s,n,i)}),Co($d(e)),Ao($d(e)));s.render(t),Rd(e,s)}else rh(e,t)},u(Kh,Au),Kh.prototype.v=function(){var e=this;Qc(this,this.l(),(function(){e.i()})),Qc(this,jc(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Au.prototype.v.call(this)},Kh.prototype.o=function(){this.i=this.u=null,Au.prototype.o.call(this)},D(Kh.prototype,{l:bl}),Jo.emailLinkSignInSent=function(e,t,n,i,r){var s=new Kh(n,(function(){s.m(),Xo("emailNotReceived",e,t,n,i,r)}),(function(){s.m(),i()}),Co($d(e)),Ao($d(e)));s.render(t),Rd(e,s)},u(Gh,Au),Gh.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Au.prototype.v.call(this)},Gh.prototype.o=function(){this.i=null,Au.prototype.o.call(this)},D(Gh.prototype,{u:yl,B:bl,w:wl}),Jo.emailMismatch=function(e,t,n){var i=Na(Od(e));if(i){var r=new Gh(n.user.email,i.g,(function(){var t=r;Ra(Od(e)),Wl(e,t,n)}),(function(){var t=n.credential.providerId,s=Ru(r);r.m(),i.a?Xo("federatedLinking",e,s,i.g,t):Xo("federatedSignIn",e,s,i.g,t)}),Co($d(e)),Ao($d(e)));r.render(t),Rd(e,r)}else rh(e,t)},u(zh,Au),zh.prototype.v=function(){var e=this;Qc(this,this.u(),(function(){e.i()})),Qc(this,this.Da(),(function(){e.l()})),this.u().focus(),Au.prototype.v.call(this)},zh.prototype.Da=function(){return jc(this,"firebaseui-id-resend-email-link")},zh.prototype.o=function(){this.i=this.l=null,Au.prototype.o.call(this)},D(zh.prototype,{u:bl}),Jo.emailNotReceived=function(e,t,n,i,r){var s=new zh((function(){oh(e,s,n,i,(function(e){e=Yl(e),s.a(e)}),r)}),(function(){s.m(),rh(e,t,n)}),Co($d(e)),Ao($d(e)));s.render(t),Rd(e,s)},u($h,Au),$h.prototype.v=function(){this.u(this.i),this.l().focus(),Au.prototype.v.call(this)},$h.prototype.o=function(){this.i=null,Au.prototype.o.call(this)},D($h.prototype,{l:yl,u:wl}),Jo.federatedLinking=function(e,t,n,i,r){var s=Na(Od(e));if(s&&s.a){var a=new $h(n,lo($d(e),i),(function(){Xl(e,a,i,n)}),Co($d(e)),Ao($d(e)));a.render(t),Rd(e,a),r&&a.a(r)}else rh(e,t)},Jo.federatedRedirect=function(e,t,n){var i=new Mh;i.render(t),Rd(e,i),t=uo($d(e))[0],Xl(e,i,t,n)},Jo.federatedSignIn=function(e,t,n,i,r){var s=new $h(n,lo($d(e),i),(function(){Xl(e,s,i,n)}),Co($d(e)),Ao($d(e)));s.render(t),Rd(e,s),r&&s.a(r)},Jo.passwordLinking=function(e,t,n){var i=Na(Od(e));Ra(Od(e));var r=i&&i.a;if(r){var s=new Tl(n,(function(){Wh(e,s,n,r)}),(function(){s.m(),Xo("passwordRecovery",e,t,n)}),Co($d(e)),Ao($d(e)));s.render(t),Rd(e,s)}else rh(e,t)},u(Hh,Au),Hh.prototype.v=function(){this.B(),this.H(this.l,this.u),ic(this.i())||this.i().focus(),xu(this,this.i(),this.l),Au.prototype.v.call(this)},Hh.prototype.o=function(){this.u=this.l=null,Au.prototype.o.call(this)},D(Hh.prototype,{i:Cl,w:Al,B:Nl,M:Rl,j:Dl,U:yl,P:bl,H:wl}),Jo.passwordRecovery=function(e,t,n,i,r){var s=new Hh((function(){Qh(e,s)}),i?void 0:function(){s.m(),rh(e,t)},n,Co($d(e)),Ao($d(e)));s.render(t),Rd(e,s),r&&s.a(r)},Jo.passwordSignIn=function(e,t,n,i){var r=new xl((function(){th(e,r)}),(function(){var n=r.M();r.m(),Xo("passwordRecovery",e,t,n)}),n,Co($d(e)),Ao($d(e)),i);r.render(t),Rd(e,r)},u(Xh,Au),Xh.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Du(this,this.i(),this.u()),Du(this,this.u(),this.l())):Du(this,this.i(),this.l()),this.w&&xu(this,this.l(),this.w),ic(this.i())?this.B&&!ic(this.u())?this.u().focus():this.l().focus():this.i().focus(),Au.prototype.v.call(this)},Xh.prototype.o=function(){this.H=this.w=null,Au.prototype.o.call(this)},D(Xh.prototype,{i:Cl,U:Al,ea:Nl,jb:Rl,j:Dl,u:Yh,Bc:Jh,Ja:function(){var e=Yh.call(this),t=Jh.call(this);zc(this,e,(function(){Xc(t)&&(Gc(e,!0),Yc(t))}))},M:function(){var e=Yh.call(this),t=Jh.call(this),n=ic(e);return n=!/^[\s\xa0]*$/.test(null==n?"":String(n)),Gc(e,n),n?(Yc(t),t=!0):(Jc(t,Sn("Enter your account name").toString()),t=!1),t?Z(ic(e)):null},l:Ih,ba:Eh,lb:_h,ua:Th,P:kh,Nb:yl,Mb:bl,pa:wl}),Jo.passwordSignUp=function(e,t,n,i,r,s){function a(){o.m(),rh(e,t)}var o=new Xh(No($d(e)),(function(){Zh(e,o)}),r?void 0:a,n,i,Co($d(e)),Ao($d(e)),s);o.render(t),Rd(e,o)},u(rd,Au),rd.prototype.v=function(){var e=this;this.U(this.jb),vi(this.i,"tick",this.w,!1,this),this.i.start(),Qc(this,jc(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),Qc(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Au.prototype.v.call(this)},rd.prototype.o=function(){this.M=this.H=this.l=this.P=null,gc(this.i),Ii(this.i,"tick",this.w),this.i=null,Au.prototype.o.call(this)},rd.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(gc(this.i),Ii(this.i,"tick",this.w),this.ua(),this.lb())},D(rd.prototype,{u:td,pa:nd,Ja:function(e){var t=td.call(this),n=nd.call(this);zc(this,t,(function(){Xc(n)&&(Gc(t,!0),Yc(n))})),e&&$c(this,t,(function(){e()}))},ba:function(){var e=Z(ic(td.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:id,U:function(e){sn(id.call(this),Sn("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){Yc(this.Fb())},Da:function(){return jc(this,"firebaseui-id-resend-link")},lb:function(){Jc(this.Da())},Nb:yl,Mb:bl,ea:wl}),Jo.phoneSignInFinish=function(e,t,n,i,r,s){var a=new rd((function(){a.m(),Xo("phoneSignInStart",e,t,n)}),(function(){sd(e,a,n,r)}),(function(){a.m(),rh(e,t)}),(function(){a.m(),Xo("phoneSignInStart",e,t,n)}),to(n),i,Co($d(e)),Ao($d(e)));a.render(t),Rd(e,a),s&&a.a(s)};var ad=!ct&&!(nt("Safari")&&!(it()||nt("Coast")||nt("Opera")||nt("Edge")||nt("Firefox")||nt("FxiOS")||nt("Silk")||nt("Android")));function od(e,t){return/-[a-z]/.test(t)?null:ad&&e.dataset?!nt("Android")||it()||nt("Firefox")||nt("FxiOS")||nt("Opera")||nt("Silk")||t in e.dataset?(e=e.dataset[t],void 0===e?null:e):null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function cd(e,t,n){var i=this;e=pn(fu,{items:e},null,this.s),wu.call(this,e,!0,!0),n&&(n=ud(e,n))&&(n.focus(),Lc(n,e)),Qc(this,e,(function(e){(e=(e=an(e.target,"firebaseui-id-list-box-dialog-button"))&&od(e,"listboxid"))&&(Iu.call(i),t(e))}))}function ud(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var n=0;n<e.length;n++)if(od(e[n],"listboxid")===t)return e[n];return null}function ld(){return jc(this,"firebaseui-id-phone-number")}function hd(){return jc(this,"firebaseui-id-country-selector")}function dd(){return jc(this,"firebaseui-id-phone-number-error")}function fd(e,t){var n=e.a,i=pd("1-US-0",n),r=null;if(r=t&&pd(t,n)?t:i?"1-US-0":0<n.length?n[0].c:null,!r)throw Error("No available default country");yd.call(this,r,e)}function pd(e,t){return e=Wa(e),!(!e||!z(t,e))}function md(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+gd(e),label:e.name+" ‎+"+e.b}}))}function gd(e){return"firebaseui-flag-"+e.f}function vd(e){var t=this;cd.call(this,md(e.a),(function(n){yd.call(t,n,e,!0),t.O().focus()}),this.Ba)}function yd(e,t,n){var i=Wa(e);i&&(n&&(n=Z(ic(ld.call(this))||""),t=$a(t,n),t.length&&t[0].b!=i.b&&(n="+"+i.b+n.substr(t[0].b.length+1),rc(ld.call(this),n))),t=Wa(this.Ba),this.Ba=e,e=jc(this,"firebaseui-id-country-selector-flag"),t&&nc(e,gd(t)),tc(e,gd(i)),sn(jc(this,"firebaseui-id-country-selector-code"),"‎+"+i.b))}function bd(e,t,n,i,r,s,a,o,c,u){Au.call(this,fl,{Gb:t,Aa:c||null,Va:!!n,ia:!!s},u,"phoneSignInStart",{F:i,D:r}),this.H=o||null,this.M=t,this.l=e,this.w=n||null,this.pa=a||null}function wd(e,t,n,r){try{var s=t.U(jo)}catch(a){return}s?Vo?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",Sn("Verifying...").toString()),jd(e,t.I(N(e.cc,e),[to(s),n],(function(n){var i=Ru(t);t.$("firebaseui-icon-done",Sn("Code sent!").toString());var r=setTimeout((function(){t.h(),t.m(),Xo("phoneSignInFinish",e,i,s,15,n)}),1e3);jd(e,(function(){t&&t.h(),clearTimeout(r)}))}),(function(n){if(t.h(),!n.name||"cancel"!=n.name){grecaptcha.reset(qo),Vo=null;var r=n&&n.message||"";if(n.code)switch(n.code){case"auth/too-many-requests":r=Sn("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void Jc(t.B(),qn().toString());case"auth/admin-restricted-operation":if(mo($d(e)))return n=Ru(t),t.m(),void Xo("handleUnauthorizedUser",e,n,to(s),i["default"].auth.PhoneAuthProvider.PROVIDER_ID);r=Yl(n);break;default:r=Yl(n)}t.a(r)}})))):Bo?Jc(t.u(),Sn("Solve the reCAPTCHA").toString()):!Bo&&r&&t.i().click():(t.O().focus(),Jc(t.B(),qn().toString()))}function Id(e,t,n,i,r){Au.call(this,dl,{Sb:t},r,"providerSignIn",{F:n,D:i}),this.i=e}function _d(e,t,n,i,r,s,a){Au.call(this,Pu,{email:n,Va:!!t,ia:!!s},a,"signIn",{F:i,D:r}),this.i=e,this.u=t}function Sd(e,t,n,i,r,s,a){Au.call(this,Yu,{kc:e,yb:n,Eb:!!i},a,"unauthorizedUser",{F:r,D:s}),this.l=t,this.i=i}function Ed(e,t,n,i,r,s){Au.call(this,Ju,{email:e},s,"unsupportedProvider",{F:i,D:r}),this.l=t,this.i=n}function Td(e,t){this.$=!1;var n=Ad(t);if(Cd[n])throw Error('An AuthUI instance already exists for the key "'+n+'"');Cd[n]=this,this.a=e,this.u=null,this.Y=!1,kd(this.a),this.h=i["default"].initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(n=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===n?"":":"+n),e.options)),kd(this.h),this.h.setPersistence&&this.h.setPersistence(i["default"].auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new so,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Hr.Xa(),this.j=this.C=null,this.da=this.A=!1}function kd(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}u(bd,Au),bd.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Du(this,this.O(),this.i()),xu(this,this.i(),this.l),this.O().focus(),Ph(this.O(),(this.O().value||"").length),Au.prototype.v.call(this)},bd.prototype.o=function(){this.w=this.l=null,Au.prototype.o.call(this)},D(bd.prototype,{Cb:_u,O:ld,B:dd,ea:function(e,t,n){var i=this,r=ld.call(this),s=hd.call(this),a=dd.call(this),o=e||Xa,c=o.a;if(0==c.length)throw Error("No available countries provided.");fd.call(i,o,t),Qc(this,s,(function(){vd.call(i,o)})),zc(this,r,(function(){Xc(a)&&(Gc(r,!0),Yc(a));var e=Z(ic(r)||""),t=Wa(this.Ba),n=$a(o,e);e=pd("1-US-0",c),n.length&&n[0].b!=t.b&&(t=n[0],yd.call(i,"1"==t.b&&e?"1-US-0":t.c,o))})),n&&$c(this,r,(function(){n()}))},U:function(e){var t=Z(ic(ld.call(this))||"");e=e||Xa;var n=e.a,i=$a(Xa,t);if(i.length&&!z(n,i[0]))throw rc(ld.call(this)),ld.call(this).focus(),Jc(dd.call(this),Sn("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return n=Wa(this.Ba),i.length&&i[0].b!=n.b&&yd.call(this,i[0].c,e),i.length&&(t=t.substr(i[0].b.length+1)),t?new Za(this.Ba,t):null},Ja:hd,ba:function(){return jc(this,"firebaseui-recaptcha-container")},u:function(){return jc(this,"firebaseui-id-recaptcha-error")},i:yl,ua:bl,P:wl}),Jo.phoneSignInStart=function(e,t,n,r){var s=go($d(e))||{};Vo=null,Bo=!(s&&"invisible"===s.size);var a=ih(e),o=Eo($d(e)),c=a?So($d(e)):null;o=n&&n.a||o&&o.c||null,n=n&&n.Aa||c,(c=To($d(e)))&&Ya(c),jo=c?new za(To($d(e))):Xa;var u=new bd((function(t){wd(e,u,l,!(!t||!t.keyCode))}),Bo,a?null:function(){l.clear(),u.m(),rh(e,t)},Co($d(e)),Ao($d(e)),a,jo,o,n);u.render(t),Rd(e,u),r&&u.a(r),s.callback=function(t){u.u()&&Yc(u.u()),Vo=t,Bo||wd(e,u,l)},s["expired-callback"]=function(){Vo=null};var l=new i["default"].auth.RecaptchaVerifier(Bo?u.ba():u.i(),s,Pd(e).app);jd(e,u.I(N(l.render,l),[],(function(e){qo=e}),(function(n){n.name&&"cancel"==n.name||(n=Yl(n),u.m(),rh(e,t,void 0,n))})))},Jo.prefilledEmailSignIn=function(e,t,n){var i=new Mh;i.render(t),Rd(e,i),jd(e,i.I(N(xd(e).fetchSignInMethodsForEmail,xd(e)),[n],(function(r){i.m();var s=!(!nh(e)||!Ld(e));ah(e,t,r,n,void 0,s)}),(function(r){r=Yl(r),i.m(),Xo("signIn",e,t,n,r)})))},u(Id,Au),Id.prototype.v=function(){this.l(this.i),Au.prototype.v.call(this)},Id.prototype.o=function(){this.i=null,Au.prototype.o.call(this)},D(Id.prototype,{l:function(e){function t(t){e(t)}for(var n=this.g?Yt("firebaseui-id-idp-button",this.g||this.s.a):[],i=0;i<n.length;i++){var r=n[i],s=od(r,"providerId");Qc(this,r,R(t,s))}}}),Jo.providerSignIn=function(e,t,n,r){var s=new Id((function(n){n==i["default"].auth.EmailAuthProvider.PROVIDER_ID?(s.m(),ch(e,t,r)):n==i["default"].auth.PhoneAuthProvider.PROVIDER_ID?(s.m(),Xo("phoneSignInStart",e,t)):"anonymous"==n?Zl(e,s):Xl(e,s,n,r),Wd(e),e.l.cancel()}),ho($d(e)),Co($d(e)),Ao($d(e)));s.render(t),Rd(e,s),n&&s.a(n),Hd(e)},Jo.sendEmailLinkForSignIn=function(e,t,n,r){var s=new dh;s.render(t),Rd(e,s),oh(e,s,n,r,(function(r){s.m(),r&&"auth/admin-restricted-operation"==r.code&&mo($d(e))?Xo("handleUnauthorizedUser",e,t,n,i["default"].auth.EmailAuthProvider.PROVIDER_ID):(r=Yl(r),Xo("signIn",e,t,n,r))}))},u(_d,Au),_d.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Ph(this.l(),(this.l().value||"").length),Au.prototype.v.call(this)},_d.prototype.o=function(){this.u=this.i=null,Au.prototype.o.call(this)},D(_d.prototype,{l:Cl,M:Al,w:Nl,H:Rl,j:Dl,U:yl,P:bl,B:wl}),Jo.signIn=function(e,t,n,i){var r=nh(e),s=new _d((function(){var t=s,n=t.j()||"";n&&sh(e,t,n)}),r?null:function(){s.m(),rh(e,t,n)},n,Co($d(e)),Ao($d(e)),r);s.render(t),Rd(e,s),i&&s.a(i)},u(Sd,Au),Sd.prototype.v=function(){var e=this,t=jc(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&Qc(this,t,(function(){e.i()})),Qc(this,this.u(),(function(){e.l()})),this.u().focus(),Au.prototype.v.call(this)},Sd.prototype.o=function(){this.i=this.l=null,Au.prototype.o.call(this)},D(Sd.prototype,{u:bl}),Jo.handleUnauthorizedUser=function(e,t,n,r){function s(){rh(e,t)}r===i["default"].auth.EmailAuthProvider.PROVIDER_ID?s=function(){ch(e,t)}:r===i["default"].auth.PhoneAuthProvider.PROVIDER_ID&&(s=function(){Xo("phoneSignInStart",e,t)});var a=null,o=null;r===i["default"].auth.EmailAuthProvider.PROVIDER_ID&&po($d(e))?(a=bo($d(e)),o=wo($d(e))):mo($d(e))&&(a=vo($d(e)),o=yo($d(e)));var c=new Sd(n,(function(){c.m(),s()}),a,o,Co($d(e)),Ao($d(e)));c.render(t),Rd(e,c)},u(Ed,Au),Ed.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Au.prototype.v.call(this)},Ed.prototype.o=function(){this.i=this.l=null,Au.prototype.o.call(this)},D(Ed.prototype,{u:yl,B:bl,w:wl}),Jo.unsupportedProvider=function(e,t,n){var i=new Ed(n,(function(){i.m(),Xo("passwordRecovery",e,t,n)}),(function(){i.m(),rh(e,t,n)}),Co($d(e)),Ao($d(e)));i.render(t),Rd(e,i)};var Cd={};function Ad(e){return e||"[DEFAULT]"}function Nd(e){return Wd(e),e.i||(e.i=Vd(e,(function(t){return t&&!Na(Od(e))?cr(Pd(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return nf(e,t)}))):cr(xd(e).getRedirectResult().then((function(t){return ao($d(e))&&!t.user&&e.j&&!e.j.isAnonymous?Pd(e).getRedirectResult():t})))}))),e.i}function Rd(e,t){Wd(e),e.g=t}var Dd=null;function xd(e){return Wd(e),e.h}function Pd(e){return Wd(e),e.a}function Od(e){return Wd(e),e.oa}function Ld(e){return Wd(e),e.O?e.O.emailHint:void 0}function Md(e){return e=new We(e),"signIn"===(e.a.a.get(Ze.ub)||null)&&!!e.a.a.get(Ze.$a)}function Fd(e,t,n,i){Wd(e),"undefined"!==typeof e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,"undefined"!==typeof e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(n),e.O=i||null;var s=f.document;e.C?e.C.then((function(){"complete"==s.readyState?Ud(e,t):wi(window,"load",(function(){Ud(e,t)}))})):"complete"==s.readyState?Ud(e,t):wi(window,"load",(function(){Ud(e,t)}))}function Ud(e,t){var n=Tr(t,"Could not find the FirebaseUI widget element on the page.");if(n.setAttribute("lang","en".replace(/_/g,"-")),Dd){var i=Dd;Wd(i),Na(Od(i))&&Ts("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),Dd.reset()}if(Dd=e,e.T=n,zd(e,n),fa(new pa)&&fa(new ma)){t=Tr(t,"Could not find the FirebaseUI widget element on the page."),n=kr(),i=Ba($d(e).a,"queryParameterForSignInSuccessUrl"),n=(n=Te(n,i))?Dt(Pt(n)).toString():null;e:{i=kr();var r=ko($d(e));for(s in i=Te(i,r)||"",Ho)if(Ho[s].toLowerCase()==i.toLowerCase()){var s=Ho[s];break e}s="callback"}switch(s){case"callback":n&&(s=Od(e),Ca(_a,n,s)),e.nb()?Xo("callback",e,t):rh(e,t,Ld(e));break;case"resetPassword":Xo("passwordReset",e,t,uh(),lh());break;case"recoverEmail":Xo("emailChangeRevocation",e,t,uh());break;case"revertSecondFactorAddition":Xo("revertSecondFactorAddition",e,t,uh());break;case"verifyEmail":Xo("emailVerification",e,t,uh(),lh());break;case"verifyAndChangeEmail":Xo("verifyAndChangeEmail",e,t,uh(),lh());break;case"signIn":Xo("emailLinkSignInCallback",e,t,kr()),Xd();break;case"select":n&&(s=Od(e),Ca(_a,n,s)),rh(e,t);break;default:throw Error("Unhandled widget operation.")}t=$d(e),(t=Uo(t).uiShown||null)&&t()}else t=Tr(t,"Could not find the FirebaseUI widget element on the page."),s=new zl(Sn("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),s.render(t),Rd(e,s);t=e.g&&"blank"==e.g.Ga&&Po($d(e)),xa(Od(e))&&!t&&(t=xa(Od(e)),Gd(e,t.a),ka(Ia,Od(e)))}function Vd(e,t){if(e.A)return t(Bd(e));if(jd(e,(function(){e.A=!1})),ao($d(e))){var n=new tr((function(n){jd(e,e.a.onAuthStateChanged((function(i){e.j=i,e.A||(e.A=!0,n(t(Bd(e))))})))}));return jd(e,n),n}return e.A=!0,t(null)}function Bd(e){return Wd(e),ao($d(e))&&e.j&&e.j.isAnonymous?e.j:null}function jd(e,t){if(Wd(e),t){e.s.push(t);var n=function(){Q(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(n,n)}}function qd(e){var t;return Wd(e),(t=e.Z)||(e=$d(e),e=_o(e,i["default"].auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}function Kd(e){"undefined"!==typeof e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Gd(e,t){e.a.tenantId=t,e.h.tenantId=t}function zd(e,t){e.L=null,e.J=new Ui(t),e.J.register(),vi(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var n=$d(e);(n=Uo(n).uiChanged||null)&&n(e.L,t),e.L=t}}))}function $d(e){return Wd(e),e.ca}function Wd(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Hd(e){Wd(e);try{Qr(e.l,fo($d(e)),qd(e)).then((function(t){return!!e.g&&eh(e,e.g,t)}))}catch(t){}}function Qd(e,t){var n=Ye(new We(t));return n?(t=new tr((function(t,i){var r=Pd(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===n?t(e):e&&e.isAnonymous&&e.uid!==n?i(Error("anonymous-user-mismatch")):i(Error("anonymous-user-not-found"))}));jd(e,r)})),jd(e,t),t):cr(null)}function Yd(e,t,n,r,s){Wd(e);var a=s||null,o=i["default"].auth.EmailAuthProvider.credentialWithLink(n,r);return n=a?xd(e).signInWithEmailLink(n,r).then((function(e){return e.user.linkWithCredential(a)})).then((function(){return tf(e)})).then((function(){return nf(e,{code:"auth/email-already-in-use"},a)})):xd(e).fetchSignInMethodsForEmail(n).then((function(n){return n.length?nf(e,{code:"auth/email-already-in-use"},o):t.linkWithCredential(o)})),jd(e,n),n}function Jd(e,t,n,i){Wd(e);var r,s=i||null;return t=xd(e).signInWithEmailLink(t,n).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},s)return e.user.linkWithCredential(s).then((function(e){r={user:e.user,credential:s,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){tf(e)})).then((function(){return Pd(e).updateCurrentUser(r.user)})).then((function(){return r.user=Pd(e).currentUser,r})),jd(e,t),t}function Xd(){var e=kr();if(Md(e)){for(var t in e=new We(e),Ze)Ze.hasOwnProperty(t)&&qe(e.a.a,Ze[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var n=f.document.title;f.history&&f.history.replaceState&&f.history.replaceState(t,n,e.toString())}}function Zd(e,t){return Wd(e),Vd(e,(function(n){return n&&!Na(Od(e))?n.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return nf(e,t)})):xd(e).signInWithPopup(t)}))}function ef(e,t){return Wd(e),Vd(e,(function(n){if(e.j&&!e.j.isAnonymous&&ao($d(e))&&!xd(e).currentUser)return tf(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(n)return tf(e).then((function(){return n.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return nf(e,n,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return tf(e).then((function(){return Pd(e).updateCurrentUser(t.user)})).then((function(){return t.user=Pd(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}function tf(e){return Wd(e),xd(e).signOut()}function nf(e,t,n){if(Wd(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var i=Fo($d(e));return cr().then((function(){return i(new Hn("anonymous-upgrade-merge-conflict",null,n||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return ur(t)}function rf(e,t,n,i){Au.call(this,vl,void 0,i,"providerMatchByEmail",{F:t,D:n}),this.i=e}function sf(e,t,n,i,r){Au.call(this,gl,{ec:t},r,"selectTenant",{F:n,D:i}),this.i=e}function af(e,t){function n(e){t(e)}for(var i=e.g?Yt("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<i.length;r++){var s=i[r],a=od(s,"tenantId");Qc(e,s,R(n,a))}}function of(e){Au.call(this,Vu,void 0,e,"spinner")}function cf(e){for(var t in this.a=new Fa,Ua(this.a,"authDomain"),Ua(this.a,"displayMode",yf),Ua(this.a,"tenants"),Ua(this.a,"callbacks"),Ua(this.a,"tosUrl"),Ua(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{Va(this.a,t,e[t])}catch(n){Is('Invalid config: "'+t+'"',void 0)}}function uf(e){for(var t in e=e.a.get("displayMode"),bf)if(bf[t]===e)return bf[t];return yf}function lf(e){return e.a.get("callbacks")||{}}function hf(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Ts("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"===typeof t)return t;if("string"===typeof t)return function(){Er(t)}}return null}function df(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Ts("Terms of Service URL is missing, the link will not be displayed."),t&&n){if("function"===typeof n)return n;if("string"===typeof n)return function(){Er(n)}}return null}function ff(e,t){if(e=e.a.get("tenants"),!e||!e.hasOwnProperty(t)&&!e.hasOwnProperty(wf))throw Error("Invalid tenant configuration!")}function pf(e,t,n){if(e=e.a.get("tenants"),!e)throw Error("Invalid tenant configuration!");var i=[];if(e=e[t]||e[wf],!e)return Is("Invalid tenant configuration: "+t+" is not configured!",void 0),i;if(t=e.signInOptions,!t)throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"===typeof e)i.push(e);else if("string"===typeof e.provider){var t=e.hd;t&&n?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(n)&&i.push(e.provider):i.push(e.provider)}else e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",Is(e,void 0)})),i}function mf(e,t,n){return e=gf(e,t),(t=e.signInOptions)&&n&&(t=t.filter((function(e){return"string"===typeof e?n.includes(e):n.includes(e.provider)})),e.signInOptions=t),e}function gf(e,t){var n=vf,i=void 0===i?{}:i;return ff(e,t),e=e.a.get("tenants"),Nr(e[t]||e[wf],n,i)}e=Td.prototype,e.nb=function(){return Wd(this),!!xa(Od(this))||Md(kr())},e.start=function(e,t){Fd(this,e,t)},e.Db=function(){Wd(this),this.Z=!0},e.reset=function(){Wd(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&Mi(this.J),Kd(this),this.O=null,Xd(),ka(Ia,Od(this)),Wd(this),this.l.cancel(),this.i=cr({user:null,credential:null}),Dd==this&&(Dd=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],Ra(Od(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=tf(this).then((function(){e.C=null}),(function(){e.C=null})))},e.ib=function(e){Wd(this);var t,n=this.ca;for(t in e)try{Va(n.a,t,e[t])}catch(i){Is('Invalid config: "'+t+'"',void 0)}ft&&Va(n.a,"popupMode",!1),To(n),!this.da&&Lo($d(this))&&(Ts("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},e.Wb=function(){Wd(this);var e=$d(this),t=Ba(e.a,"widgetUrl");e=ko(e);for(var n,i=t.search(Ee),r=0,s=[];0<=(n=Se(t,r,e,i));)s.push(t.substring(r,n)),r=Math.min(t.indexOf("&",n)+1||i,i);s.push(t.substr(r)),t=s.join("").replace(ke,"$1"),i="="+encodeURIComponent("select"),(e+=i)?(i=t.indexOf("#"),0>i&&(i=t.length),r=t.indexOf("?"),0>r||r>i?(r=i,n=""):n=t.substring(r+1,i),t=[t.substr(0,r),n,t.substr(i)],i=t[1],t[1]=e?i?i+"&"+e:e:i,i=t[0]+(t[1]?"?"+t[1]:"")+t[2]):i=t,$d(this).a.get("popupMode")?(e=(window.screen.availHeight-600)/2,t=(window.screen.availWidth-500)/2,i=i||"about:blank",e={width:500,height:600,top:0<e?e:0,left:0<t?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},e.target=e.target||i.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=_r(i,e))&&e.focus()):$t(window.location,i)},e.Wa=function(){var e=this;return Wd(this),this.h.app.delete().then((function(){var t=Ad(Od(e));delete Cd[t],e.reset(),e.$=!0}))},e.Ib=function(e,t){Wd(this);var n=this,i=Ar();if(!Ro($d(this)))return ur(Error("Email link sign-in should be enabled to trigger email sending."));var r=xo($d(this)),s=new We(r.url);return He(s,i),t&&t.a&&(Ma(i,t,Od(this)),Je(s,t.a.providerId)),Qe(s,Do($d(this))),Vd(this,(function(t){return t&&((t=t.uid)?s.a.a.set(Ze.Pa,t):qe(s.a.a,Ze.Pa)),r.url=s.toString(),xd(n).sendSignInLinkToEmail(e,r)})).then((function(){var t=Od(n),r={};r.email=e,Ca(Sa,ta(i,JSON.stringify(r)),t)}),(function(e){throw ka(Ea,Od(n)),ka(Sa,Od(n)),e}))},e.bc=function(e,t){Wd(this);var n=this;return xd(this).signInWithEmailAndPassword(e,t).then((function(r){return Vd(n,(function(s){return s?tf(n).then((function(){return nf(n,{code:"auth/email-already-in-use"},i["default"].auth.EmailAuthProvider.credential(e,t))})):r}))}))},e.Yb=function(e,t){Wd(this);var n=this;return Vd(this,(function(r){if(r){var s=i["default"].auth.EmailAuthProvider.credential(e,t);return r.linkWithCredential(s)}return xd(n).createUserWithEmailAndPassword(e,t)}))},e.ac=function(e){Wd(this);var t=this;return Vd(this,(function(n){return n?n.linkWithCredential(e).then((function(e){return e}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return nf(t,n,e)})):xd(t).signInWithCredential(e)}))},e.dc=function(e){Wd(this);var t=this,n=this.i;return this.i=null,Vd(this,(function(n){return n&&!Na(Od(t))?n.linkWithRedirect(e):xd(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=n,e}))},e.cc=function(e,t){Wd(this);var n=this;return Vd(this,(function(i){return i?i.linkWithPhoneNumber(e,t).then((function(e){return new Xr(e,(function(e){if("auth/credential-already-in-use"==e.code)return nf(n,e);throw e}))})):Pd(n).signInWithPhoneNumber(e,t).then((function(e){return new Xr(e)}))}))},e.$b=function(){return Wd(this),Pd(this).signInAnonymously()},e.Xb=function(e,t){return Wd(this),xd(this).signInWithEmailAndPassword(e,t)},u(rf,Au),rf.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Ph(this.l(),(this.l().value||"").length),Au.prototype.v.call(this)},rf.prototype.o=function(){this.i=null,Au.prototype.o.call(this)},D(rf.prototype,{l:Cl,H:Al,u:Nl,B:Rl,j:Dl,M:yl,w:wl}),u(sf,Au),sf.prototype.v=function(){af(this,this.i),Au.prototype.v.call(this)},sf.prototype.o=function(){this.i=null,Au.prototype.o.call(this)},u(of,Au);var vf=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],yf="optionFirst",bf={pc:yf,oc:"identifierFirst"},wf="*";function If(e,t){var n=this;this.s=Tr(e),this.a={},Object.keys(t).forEach((function(e){n.a[e]=new cf(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function _f(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}e=If.prototype,e.Ub=function(e,t){var n=this;_f(this);var i=e.apiKey;return new tr((function(e,r){if(n.a.hasOwnProperty(i)){var s=lf(n.a[i]).selectTenantUiHidden||null;if(uf(n.a[i])===yf){var a=[];t.forEach((function(e){e=e||"_";var t=n.a[i].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[wf])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Is("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&a.push(e)}));var o=function(t){t={tenantId:t,providerIds:pf(n.a[i],t||"_")},e(t)};if(1===a.length)return void o(a[0].tenantId);n.g=new sf((function(e){_f(n),s&&s(),o(e)}),a,hf(n.a[i]),df(n.a[i]))}else n.g=new rf((function(){var r=n.g.j();if(r){for(var a=0;a<t.length;a++){var o=pf(n.a[i],t[a]||"_",r);if(0!==o.length)return r={tenantId:t[a],providerIds:o,email:r},_f(n),s&&s(),void e(r)}n.g.a($n({code:"no-matching-tenant-for-email"}).toString())}}),hf(n.a[i]),df(n.a[i]));n.g.render(n.s),(r=lf(n.a[i]).selectTenantUiShown||null)&&r()}else{var c=Error("Invalid project configuration: API key is invalid!");c.code="invalid-configuration",n.pb(c),r(c)}}))},e.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var n=t||void 0;ff(this.a[e],t||"_");try{this.i=i["default"].app(n).auth()}catch(s){var r=this.a[e].a.get("authDomain");if(!r)throw Error("Invalid project configuration: authDomain is required!");e=i["default"].initializeApp({apiKey:e,authDomain:r},n),e.auth().tenantId=t,this.i=e.auth()}return this.i},e.Zb=function(e,t){var n=this;return new tr((function(i,r){function s(t,i){n.j=new Td(e),Fd(n.j,n.s,t,i)}var a=e.app.options.apiKey;n.a.hasOwnProperty(a)||r(Error("Invalid project configuration: API key is invalid!"));var o=mf(n.a[a],e.tenantId||"_",t&&t.providerIds);_f(n),r={signInSuccessWithAuthResult:function(e){return i(e),!1}};var c,u=lf(n.a[a]).signInUiShown||null,l=!1;r.uiChanged=function(t,i){null===t&&"callback"===i?((t=Jt("firebaseui-id-page-callback",n.s))&&Yc(t),n.h=new of,n.h.render(n.s)):l||null===t&&"spinner"===i||"blank"===i||(n.h&&(n.h.m(),n.h=null),l=!0,u&&u(e.tenantId))},o.callbacks=r,o.credentialHelper="none",t&&t.email&&(c={emailHint:t.email}),n.j?n.j.Wa().then((function(){s(o,c)})):s(o,c)}))},e.reset=function(){var e=this;return cr().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,_f(e)}))},e.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){_f(e),e.h=new of,e.g=e.h,e.h.render(e.s),e.A=null}),500))},e.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},e.Bb=function(){return _f(this),this.g=new Bl,this.g.render(this.s),cr()},e.pb=function(e){var t,n=this,i=$n({code:e.code}).toString()||e.message;_f(this),e.retry&&"function"===typeof e.retry&&(t=function(){n.reset(),e.retry()}),this.g=new Gl(i,t),this.g.render(this.s)},e.Rb=function(e){var t=this;return cr().then((function(){var n=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(n))throw Error("Invalid project configuration: API key is invalid!");if(ff(t.a[n],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(n=lf(t.a[n]).beforeSignInSuccess||null)?n(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},O("firebaseui.auth.FirebaseUiHandler",If),O("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",If.prototype.Ub),O("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",If.prototype.Pb),O("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",If.prototype.Zb),O("firebaseui.auth.FirebaseUiHandler.prototype.reset",If.prototype.reset),O("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",If.prototype.Vb),O("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",If.prototype.mb),O("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",If.prototype.Bb),O("firebaseui.auth.FirebaseUiHandler.prototype.handleError",If.prototype.pb),O("firebaseui.auth.FirebaseUiHandler.prototype.processUser",If.prototype.Rb),O("firebaseui.auth.AuthUI",Td),O("firebaseui.auth.AuthUI.getInstance",(function(e){return e=Ad(e),Cd[e]?Cd[e]:null})),O("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",Td.prototype.Db),O("firebaseui.auth.AuthUI.prototype.start",Td.prototype.start),O("firebaseui.auth.AuthUI.prototype.setConfig",Td.prototype.ib),O("firebaseui.auth.AuthUI.prototype.signIn",Td.prototype.Wb),O("firebaseui.auth.AuthUI.prototype.reset",Td.prototype.reset),O("firebaseui.auth.AuthUI.prototype.delete",Td.prototype.Wa),O("firebaseui.auth.AuthUI.prototype.isPendingRedirect",Td.prototype.nb),O("firebaseui.auth.AuthUIError",Hn),O("firebaseui.auth.AuthUIError.prototype.toJSON",Hn.prototype.toJSON),O("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",Ko),O("firebaseui.auth.CredentialHelper.NONE",Go),O("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),tr.prototype["catch"]=tr.prototype.Ca,tr.prototype["finally"]=tr.prototype.fc}).apply("undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:window)}).apply("undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:window),"undefined"!==typeof window&&(window.dialogPolyfill=s());var a=firebaseui.auth},9845:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(1976),r=n(118),s=n(1074),a=n(8373);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new r.uA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new i.FA("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:o,app:a,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:r,useAsService:h,modularAPIs:s}};function r(e){delete t[e]}function a(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,i.gR)(t,e))throw u.create("no-app",{appName:e});return t[e]}function o(r,a={}){const o=s.initializeApp(r,a);if((0,i.gR)(t,o.name))return t[o.name];const c=new e(o,n);return t[o.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const r=t.name,o=r.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=a())=>{if("function"!==typeof e[o])throw u.create("invalid-app-argument",{appName:r});return e[o]()};void 0!==t.serviceProps&&(0,i.zw)(s,t.serviceProps),n[o]=s,e.prototype[o]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),a["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(o);function t(t){(0,i.zw)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:i.tD,ErrorFactory:i.FA,deepExtend:i.zw}),e}const d=h(),f=new a.Vy("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.41";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const e=(0,i.mS)();if(void 0!==e.firebase){f.warn("\n      Warning: Firebase is already defined in the global scope. Please make sure\n      Firebase library is only loaded once.\n    ");const t=e.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n        Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n        ")}}catch(y){}const v=d;g()},1074:(e,t,n)=>{n.r(t),n.d(t,{FirebaseError:()=>s.g,SDK_VERSION:()=>te,_DEFAULT_ENTRY_NAME:()=>U,_addComponent:()=>K,_addOrOverwriteComponent:()=>G,_apps:()=>B,_clearComponents:()=>Y,_components:()=>q,_getProvider:()=>$,_isFirebaseApp:()=>H,_isFirebaseServerApp:()=>Q,_registerComponent:()=>z,_removeServiceInstance:()=>W,_serverApps:()=>j,deleteApp:()=>ae,getApp:()=>re,getApps:()=>se,initializeApp:()=>ne,initializeServerApp:()=>ie,onLog:()=>ce,registerVersion:()=>oe,setLogLevel:()=>ue});var i=n(118),r=n(8373),s=n(1976),a=n(4933);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const u="@firebase/app",l="0.10.11",h=new r.Vy("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",m="@firebase/app-check-compat",g="@firebase/app-check",v="@firebase/auth",y="@firebase/auth-compat",b="@firebase/database",w="@firebase/database-compat",I="@firebase/functions",_="@firebase/functions-compat",S="@firebase/installations",E="@firebase/installations-compat",T="@firebase/messaging",k="@firebase/messaging-compat",C="@firebase/performance",A="@firebase/performance-compat",N="@firebase/remote-config",R="@firebase/remote-config-compat",D="@firebase/storage",x="@firebase/storage-compat",P="@firebase/firestore",O="@firebase/vertexai-preview",L="@firebase/firestore-compat",M="firebase",F="10.13.2",U="[DEFAULT]",V={[u]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[m]:"fire-app-check-compat",[v]:"fire-auth",[y]:"fire-auth-compat",[b]:"fire-rtdb",[w]:"fire-rtdb-compat",[I]:"fire-fn",[_]:"fire-fn-compat",[S]:"fire-iid",[E]:"fire-iid-compat",[T]:"fire-fcm",[k]:"fire-fcm-compat",[C]:"fire-perf",[A]:"fire-perf-compat",[N]:"fire-rc",[R]:"fire-rc-compat",[D]:"fire-gcs",[x]:"fire-gcs-compat",[P]:"fire-fst",[L]:"fire-fst-compat",[O]:"fire-vertex","fire-js":"fire-js",[M]:"fire-js-all"},B=new Map,j=new Map,q=new Map;function K(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function G(e,t){e.container.addOrOverwriteComponent(t)}function z(e){const t=e.name;if(q.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;q.set(t,e);for(const n of B.values())K(n,e);for(const n of j.values())K(n,e);return!0}function $(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function W(e,t,n=U){$(e,t).clearInstance(n)}function H(e){return void 0!==e.options}function Q(e){return void 0!==e.settings}function Y(){q.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},X=new s.FA("app","Firebase",J);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw X.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends Z{constructor(e,t,n,i){const r=void 0!==t.automaticDataCollectionEnabled&&t.automaticDataCollectionEnabled,s={name:n,automaticDataCollectionEnabled:r};if(void 0!==e.apiKey)super(e,s,i);else{const t=e;super(t.options,s,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:r},t),this._finalizationRegistry=null,"undefined"!==typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry((()=>{this.automaticCleanup()}))),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,oe(u,l,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){ae(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw X.create("server-app-deleted")}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=F;function ne(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:U,automaticDataCollectionEnabled:!1},t),a=r.name;if("string"!==typeof a||!a)throw X.create("bad-app-name",{appName:String(a)});if(n||(n=(0,s.T9)()),!n)throw X.create("no-options");const o=B.get(a);if(o){if((0,s.bD)(n,o.options)&&(0,s.bD)(r,o.config))return o;throw X.create("duplicate-app",{appName:a})}const c=new i.h1(a);for(const i of q.values())c.addComponent(i);const u=new Z(n,r,c);return B.set(a,u),u}function ie(e,t){if((0,s.Bd)()&&!(0,s.p7)())throw X.create("invalid-server-app-environment");let n;void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1),n=H(e)?e.options:e;const r=Object.assign(Object.assign({},t),n);void 0!==r.releaseOnDeref&&delete r.releaseOnDeref;const a=e=>[...e].reduce(((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0),0);if(void 0!==t.releaseOnDeref&&"undefined"===typeof FinalizationRegistry)throw X.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),c=j.get(o);if(c)return c.incRefCount(t.releaseOnDeref),c;const u=new i.h1(o);for(const i of q.values())u.addComponent(i);const l=new ee(n,t,o,u);return j.set(o,l),l}function re(e=U){const t=B.get(e);if(!t&&e===U&&(0,s.T9)())return ne();if(!t)throw X.create("no-app",{appName:e});return t}function se(){return Array.from(B.values())}async function ae(e){let t=!1;const n=e.name;if(B.has(n))t=!0,B.delete(n);else if(j.has(n)){const i=e;i.decRefCount()<=0&&(j.delete(n),t=!0)}t&&(await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function oe(e,t,n){var r;let s=null!==(r=V[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const e=[`Unable to register library "${s}" with version "${t}":`];return a&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}z(new i.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function ce(e,t){if(null!==e&&"function"!==typeof e)throw X.create("invalid-log-argument");(0,r.Ey)(e,t)}function ue(e){(0,r.He)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="firebase-heartbeat-database",he=1,de="firebase-heartbeat-store";let fe=null;function pe(){return fe||(fe=(0,a.P2)(le,he,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(de)}catch(n){console.warn(n)}}}}).catch((e=>{throw X.create("idb-open",{originalErrorMessage:e.message})}))),fe}async function me(e){try{const t=await pe(),n=t.transaction(de),i=await n.objectStore(de).get(ve(e));return await n.done,i}catch(t){if(t instanceof s.g)h.warn(t.message);else{const e=X.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});h.warn(e.message)}}}async function ge(e,t){try{const n=await pe(),i=n.transaction(de,"readwrite"),r=i.objectStore(de);await r.put(t,ve(e)),await i.done}catch(n){if(n instanceof s.g)h.warn(n.message);else{const e=X.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(e.message)}}}function ve(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=1024,be=2592e6;class we{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Se(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=Ie();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=be})),this._storage.overwrite(this._heartbeatsCache)}catch(n){h.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ie(),{heartbeatsToSend:n,unsentEntries:i}=_e(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return h.warn(t),""}}}function Ie(){const e=new Date;return e.toISOString().substring(0,10)}function _e(e,t=ye){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Ee(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ee(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Se{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await me(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ge(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ge(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ee(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){z(new i.uA("platform-logger",(e=>new o(e)),"PRIVATE")),z(new i.uA("heartbeat",(e=>new we(e)),"PRIVATE")),oe(u,l,e),oe(u,l,"esm2017"),oe("fire-js","")}Te("")}}]);