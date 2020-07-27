(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icons-icons-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js ***!
  \**********************************************************************/
/*! exports provided: CKD_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, Clipboard, ClipboardModule, PendingCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKD_COPY_TO_CLIPBOARD_CONFIG", function() { return CKD_COPY_TO_CLIPBOARD_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCopyToClipboard", function() { return CdkCopyToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingCopy", function() { return PendingCopy; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/pending-copy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a relayout. This relayout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * relayout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */

class PendingCopy {
    /**
     * @param {?} text
     * @param {?} _document
     */
    constructor(text, _document) {
        this._document = _document;
        /** @type {?} */
        const textarea = this._textarea = this._document.createElement('textarea');
        /** @type {?} */
        const styles = textarea.style;
        // Hide the element for display and accessibility. Set an
        // absolute position so the page layout isn't affected.
        styles.opacity = '0';
        styles.position = 'absolute';
        styles.left = styles.top = '-999em';
        textarea.setAttribute('aria-hidden', 'true');
        textarea.value = text;
        this._document.body.appendChild(textarea);
    }
    /**
     * Finishes copying the text.
     * @return {?}
     */
    copy() {
        /** @type {?} */
        const textarea = this._textarea;
        /** @type {?} */
        let successful = false;
        try { // Older browsers could throw if copy is not supported.
            if (textarea) {
                /** @type {?} */
                const currentFocus = (/** @type {?} */ (this._document.activeElement));
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);
                successful = this._document.execCommand('copy');
                if (currentFocus) {
                    currentFocus.focus();
                }
            }
        }
        catch (_a) {
            // Discard error.
            // Initial setting of {@code successful} will represent failure here.
        }
        return successful;
    }
    /**
     * Cleans up DOM changes used to perform the copy operation.
     * @return {?}
     */
    destroy() {
        /** @type {?} */
        const textarea = this._textarea;
        if (textarea) {
            if (textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
            }
            this._textarea = undefined;
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for copying text to the clipboard.
 */
class Clipboard {
    /**
     * @param {?} document
     */
    constructor(document) {
        this._document = document;
    }
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param {?} text The string to copy.
     * @return {?} Whether the operation was successful.
     */
    copy(text) {
        /** @type {?} */
        const pendingCopy = this.beginCopy(text);
        /** @type {?} */
        const successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
    }
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param {?} text The string to copy.
     * @return {?} the pending copy operation.
     */
    beginCopy(text) {
        return new PendingCopy(text, this._document);
    }
}
Clipboard.ɵfac = function Clipboard_Factory(t) { return new (t || Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
/** @nocollapse */
Clipboard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
/** @nocollapse */ Clipboard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Clipboard_Factory() { return new Clipboard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: Clipboard, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Clipboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/copy-to-clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object that can be used to configure the default options for `CdkCopyToClipboard`.
 * @record
 */
function CdkCopyToClipboardConfig() { }
if (false) {}
/**
 * Injection token that can be used to provide the default options to `CdkCopyToClipboard`.
 * @type {?}
 */
const CKD_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CKD_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
    /**
     * @param {?} _clipboard
     * @param {?=} _ngZone
     * @param {?=} config
     */
    constructor(_clipboard, _ngZone, config) {
        this._clipboard = _clipboard;
        this._ngZone = _ngZone;
        /**
         * Content to be copied.
         */
        this.text = '';
        /**
         * How many times to attempt to copy the text. This may be necessary for longer text, because
         * the browser needs time to fill an intermediate textarea element and copy the content.
         */
        this.attempts = 1;
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         */
        this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         * @deprecated Use `cdkCopyToClipboardCopied` instead.
         * \@breaking-change 10.0.0
         */
        this._deprecatedCopied = this.copied;
        /**
         * Copies that are currently being attempted.
         */
        this._pending = new Set();
        if (config && config.attempts != null) {
            this.attempts = config.attempts;
        }
    }
    /**
     * Copies the current text to the clipboard.
     * @param {?=} attempts
     * @return {?}
     */
    copy(attempts = this.attempts) {
        if (attempts > 1) {
            /** @type {?} */
            let remainingAttempts = attempts;
            /** @type {?} */
            const pending = this._clipboard.beginCopy(this.text);
            this._pending.add(pending);
            /** @type {?} */
            const attempt = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const successful = pending.copy();
                if (!successful && --remainingAttempts && !this._destroyed) {
                    // @breaking-change 10.0.0 Remove null check for `_ngZone`.
                    if (this._ngZone) {
                        this._currentTimeout = this._ngZone.runOutsideAngular((/**
                         * @return {?}
                         */
                        () => setTimeout(attempt, 1)));
                    }
                    else {
                        // We use 1 for the timeout since it's more predictable when flushing in unit tests.
                        this._currentTimeout = setTimeout(attempt, 1);
                    }
                }
                else {
                    this._currentTimeout = null;
                    this._pending.delete(pending);
                    pending.destroy();
                    this.copied.emit(successful);
                }
            });
            attempt();
        }
        else {
            this.copied.emit(this._clipboard.copy(this.text));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._currentTimeout) {
            clearTimeout(this._currentTimeout);
        }
        this._pending.forEach((/**
         * @param {?} copy
         * @return {?}
         */
        copy => copy.destroy()));
        this._pending.clear();
        this._destroyed = true;
    }
}
CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) { return new (t || CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CKD_COPY_TO_CLIPBOARD_CONFIG, 8)); };
CdkCopyToClipboard.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkCopyToClipboard, selectors: [["", "cdkCopyToClipboard", ""]], hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() { return ctx.copy(); });
    } }, inputs: { text: ["cdkCopyToClipboard", "text"], attempts: ["cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied", _deprecatedCopied: "copied" } });
/** @nocollapse */
CdkCopyToClipboard.ctorParameters = () => [
    { type: Clipboard },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CKD_COPY_TO_CLIPBOARD_CONFIG,] }] }
];
CdkCopyToClipboard.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkCopyToClipboard',] }],
    attempts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkCopyToClipboardAttempts',] }],
    copied: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cdkCopyToClipboardCopied',] }],
    _deprecatedCopied: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['copied',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkCopyToClipboard]',
                host: {
                    '(click)': 'copy()'
                }
            }]
    }], function () { return [{ type: Clipboard }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [CKD_COPY_TO_CLIPBOARD_CONFIG]
            }] }]; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboard']
        }], attempts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboardAttempts']
        }], copied: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkCopyToClipboardCopied']
        }], _deprecatedCopied: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['copied']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/clipboard-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClipboardModule {
}
ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClipboardModule });
ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClipboardModule, { declarations: [CdkCopyToClipboard], exports: [CdkCopyToClipboard] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CdkCopyToClipboard],
                exports: [CdkCopyToClipboard]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js ***!
  \********************************************************************/
/*! exports provided: HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpErrorResponse, HttpEventType, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpUrlEncodingCodec, HttpXhrBackend, HttpXsrfTokenExtractor, JsonpClientBackend, JsonpInterceptor, XhrFactory, ɵHttpInterceptingHandler, ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/backend.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@publicApi
 * @abstract
 */

class HttpHandler {
}
if (false) {}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@publicApi
 * @abstract
 */
class HttpBackend {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/headers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @record
 */
function Update() { }
if (false) {}
/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * \@publicApi
 */
class HttpHeaders {
    /**
     * Constructs a new HTTP header object with the given values.
     * @param {?=} headers
     */
    constructor(headers) {
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = (/**
             * @return {?}
             */
            () => {
                this.headers = new Map();
                headers.split('\n').forEach((/**
                 * @param {?} line
                 * @return {?}
                 */
                line => {
                    /** @type {?} */
                    const index = line.indexOf(':');
                    if (index > 0) {
                        /** @type {?} */
                        const name = line.slice(0, index);
                        /** @type {?} */
                        const key = name.toLowerCase();
                        /** @type {?} */
                        const value = line.slice(index + 1).trim();
                        this.maybeSetNormalizedName(name, key);
                        if (this.headers.has(key)) {
                            (/** @type {?} */ (this.headers.get(key))).push(value);
                        }
                        else {
                            this.headers.set(key, [value]);
                        }
                    }
                }));
            });
        }
        else {
            this.lazyInit = (/**
             * @return {?}
             */
            () => {
                this.headers = new Map();
                Object.keys(headers).forEach((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => {
                    /** @type {?} */
                    let values = headers[name];
                    /** @type {?} */
                    const key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        this.headers.set(key, values);
                        this.maybeSetNormalizedName(name, key);
                    }
                }));
            });
        }
    }
    /**
     * Checks for existence of a given header.
     *
     * @param {?} name The header name to check for existence.
     *
     * @return {?} True if the header exists, false otherwise.
     */
    has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first value of a given header.
     *
     * @param {?} name The header name.
     *
     * @return {?} The value string if the header exists, null otherwise
     */
    get(name) {
        this.init();
        /** @type {?} */
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @return {?} A list of header names.
     */
    keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of values for a given header.
     *
     * @param {?} name The header name from which to retrieve values.
     *
     * @return {?} A string of values if the header exists, null otherwise.
     */
    getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param {?} name The header name for which to append the values.
     * @param {?} value The value to append.
     *
     * @return {?} A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name, value) {
        return this.clone({ name, value, op: 'a' });
    }
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param {?} name The header name.
     * @param {?} value The value or values to set or overide for the given header.
     *
     * @return {?} A clone of the HTTP headers object with the newly set header value.
     */
    set(name, value) {
        return this.clone({ name, value, op: 's' });
    }
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param {?} name The header name.
     * @param {?=} value The value or values to delete for the given header.
     *
     * @return {?} A clone of the HTTP headers object with the given value deleted.
     */
    delete(name, value) {
        return this.clone({ name, value, op: 'd' });
    }
    /**
     * @private
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach((/**
                 * @param {?} update
                 * @return {?}
                 */
                update => this.applyUpdate(update)));
                this.lazyUpdate = null;
            }
        }
    }
    /**
     * @private
     * @param {?} other
     * @return {?}
     */
    copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.headers.set(key, (/** @type {?} */ (other.headers.get(key))));
            this.normalizedNames.set(key, (/** @type {?} */ (other.normalizedNames.get(key))));
        }));
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    clone(update) {
        /** @type {?} */
        const clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    applyUpdate(update) {
        /** @type {?} */
        const key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                /** @type {?} */
                let value = (/** @type {?} */ (update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                /** @type {?} */
                const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push(...value);
                this.headers.set(key, base);
                break;
            case 'd':
                /** @type {?} */
                const toDelete = (/** @type {?} */ (update.value));
                if (!toDelete) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    /** @type {?} */
                    let existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter((/**
                     * @param {?} value
                     * @return {?}
                     */
                    value => toDelete.indexOf(value) === -1));
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    }
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => fn((/** @type {?} */ (this.normalizedNames.get(key))), (/** @type {?} */ (this.headers.get(key))))));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/params.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * \@publicApi
 *
 * @record
 */
function HttpParameterCodec() { }
if (false) {}
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * \@publicApi
 */
class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param {?} key The key name.
     * @return {?} The encoded key name.
     */
    encodeKey(key) {
        return standardEncoding(key);
    }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param {?} value The value.
     * @return {?} The encoded value.
     */
    encodeValue(value) {
        return standardEncoding(value);
    }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param {?} key The encoded key name.
     * @return {?} The decoded key name.
     */
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param {?} value The encoded value.
     * @return {?} The decoded value.
     */
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    /** @type {?} */
    const map = new Map();
    if (rawParams.length > 0) {
        /** @type {?} */
        const params = rawParams.split('&');
        params.forEach((/**
         * @param {?} param
         * @return {?}
         */
        (param) => {
            /** @type {?} */
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            /** @type {?} */
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        }));
    }
    return map;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * @record
 */
function Update$1() { }
if (false) {}
/**
 * Options used to construct an `HttpParams` instance.
 *
 * \@publicApi
 * @record
 */
function HttpParamsOptions() { }
if (false) {}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * \@publicApi
 */
class HttpParams {
    /**
     * @param {?=} options
     */
    constructor(options = (/** @type {?} */ ({}))) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const value = ((/** @type {?} */ (options.fromObject)))[key];
                (/** @type {?} */ (this.map)).set(key, Array.isArray(value) ? value : [value]);
            }));
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param {?} param The parameter name.
     * @return {?} True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return (/** @type {?} */ (this.map)).has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param {?} param The parameter name.
     * @return {?} The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        /** @type {?} */
        const res = (/** @type {?} */ (this.map)).get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param {?} param The parameter name.
     * @return {?} All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return (/** @type {?} */ (this.map)).get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @return {?} The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from((/** @type {?} */ (this.map)).keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value to add.
     * @return {?} A new body with the appended value.
     */
    append(param, value) {
        return this.clone({ param, value, op: 'a' });
    }
    /**
     * Replaces the value for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value.
     * @return {?} A new body with the new value.
     */
    set(param, value) {
        return this.clone({ param, value, op: 's' });
    }
    /**
     * Removes a given value or all values from a parameter.
     * @param {?} param The parameter name.
     * @param {?=} value The value to remove, if provided.
     * @return {?} A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) {
        return this.clone({ param, value, op: 'd' });
    }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    toString() {
        this.init();
        return this.keys()
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const eKey = this.encoder.encodeKey(key);
            // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`
            return (/** @type {?} */ ((/** @type {?} */ (this.map)).get(key))).map((/**
             * @param {?} value
             * @return {?}
             */
            value => eKey + '=' + this.encoder.encodeValue(value)))
                .join('&');
        }))
            // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter((/**
         * @param {?} param
         * @return {?}
         */
        param => param !== ''))
            .join('&');
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    clone(update) {
        /** @type {?} */
        const clone = new HttpParams((/** @type {?} */ ({ encoder: this.encoder })));
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (/** @type {?} */ (this.map)).set(key, (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.cloneFrom)).map)).get(key))))));
            (/** @type {?} */ (this.updates)).forEach((/**
             * @param {?} update
             * @return {?}
             */
            update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        /** @type {?} */
                        const base = (update.op === 'a' ? (/** @type {?} */ (this.map)).get(update.param) : undefined) || [];
                        base.push((/** @type {?} */ (update.value)));
                        (/** @type {?} */ (this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            /** @type {?} */
                            let base = (/** @type {?} */ (this.map)).get(update.param) || [];
                            /** @type {?} */
                            const idx = base.indexOf(update.value);
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                (/** @type {?} */ (this.map)).set(update.param, base);
                            }
                            else {
                                (/** @type {?} */ (this.map)).delete(update.param);
                            }
                        }
                        else {
                            (/** @type {?} */ (this.map)).delete(update.param);
                            break;
                        }
                }
            }));
            this.cloneFrom = this.updates = null;
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/request.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Construction interface for `HttpRequest`s.
 *
 * All values are optional and will override default values if provided.
 * @record
 */
function HttpRequestInit() { }
if (false) {}
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@publicApi
 * @template T
 */
class HttpRequest {
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} third
     * @param {?=} fourth
     */
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        /** @type {?} */
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? (/** @type {?} */ (third)) : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = (/** @type {?} */ (third));
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            /** @type {?} */
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                /** @type {?} */
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                /** @type {?} */
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return ((/** @type {?} */ (this.body))).toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        /** @type {?} */
        const method = update.method || this.method;
        /** @type {?} */
        const url = update.url || this.url;
        /** @type {?} */
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        /** @type {?} */
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        /** @type {?} */
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        /** @type {?} */
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        /** @type {?} */
        let headers = update.headers || this.headers;
        /** @type {?} */
        let params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((/**
                 * @param {?} headers
                 * @param {?} name
                 * @return {?}
                 */
                (headers, name) => headers.set(name, (/** @type {?} */ (update.setHeaders))[name])), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((/**
             * @param {?} params
             * @param {?} param
             * @return {?}
             */
            (params, param) => params.set(param, (/** @type {?} */ (update.setParams))[param])), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params,
            headers,
            reportProgress,
            responseType,
            withCredentials,
        });
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/response.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const HttpEventType = {
    /**
     * The request was sent out over the wire.
     */
    Sent: 0,
    /**
     * An upload progress event was received.
     */
    UploadProgress: 1,
    /**
     * The response status code and headers were received.
     */
    ResponseHeader: 2,
    /**
     * A download progress event was received.
     */
    DownloadProgress: 3,
    /**
     * The full response including the body was received.
     */
    Response: 4,
    /**
     * A custom event from an interceptor or a backend.
     */
    User: 5,
};
HttpEventType[HttpEventType.Sent] = 'Sent';
HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
HttpEventType[HttpEventType.Response] = 'Response';
HttpEventType[HttpEventType.User] = 'User';
/**
 * Base interface for progress events.
 *
 * \@publicApi
 * @record
 */
function HttpProgressEvent() { }
if (false) {}
/**
 * A download progress event.
 *
 * \@publicApi
 * @record
 */
function HttpDownloadProgressEvent() { }
if (false) {}
/**
 * An upload progress event.
 *
 * \@publicApi
 * @record
 */
function HttpUploadProgressEvent() { }
if (false) {}
/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * \@publicApi
 * @record
 */
function HttpSentEvent() { }
if (false) {}
/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * \@publicApi
 * @record
 * @template T
 */
function HttpUserEvent() { }
if (false) {}
/**
 * An error that represents a failed attempt to JSON.parse text coming back
 * from the server.
 *
 * It bundles the Error object with the actual response body that failed to parse.
 *
 *
 * @record
 */
function HttpJsonParseError() { }
if (false) {}
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@publicApi
 * @abstract
 */
class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
if (false) {}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
if (false) {}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@publicApi
 * @template T
 */
class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
if (false) {}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
    /**
     * @param {?} init
     */
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/client.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 * \@usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * \@publicApi
 */
class HttpClient {
    /**
     * @param {?} handler
     */
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    request(first, url, options = {}) {
        /** @type {?} */
        let req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            /** @type {?} */
            let headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            /** @type {?} */
            let params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams((/** @type {?} */ ({ fromObject: options.params })));
                }
            }
            // Construct the request.
            req = new HttpRequest(first, (/** @type {?} */ (url)), (options.body !== undefined ? options.body : null), {
                headers,
                params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        /** @type {?} */
        const events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((/**
         * @param {?} req
         * @return {?}
         */
        (req) => this.handler.handle(req))));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        /** @type {?} */
        const res$ = (/** @type {?} */ (events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event instanceof HttpResponse)))));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        })));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        })));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        })));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => res.body)));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
        }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param {?} url     The endpoint URL.
     * @param {?=} options The HTTP options to send with the request.
     *
     * @return {?}
     */
    delete(url, options = {}) {
        return this.request('DELETE', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    get(url, options = {}) {
        return this.request('GET', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    head(url, options = {}) {
        return this.request('HEAD', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @template T
     * @param {?} url The resource URL.
     * @param {?} callbackParam The callback function name.
     *
     * @return {?}
     */
    jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    options(url, options = {}) {
        return this.request('OPTIONS', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    patch(url, body, options = {}) {
        return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    post(url, body, options = {}) {
        return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    put(url, body, options = {}) {
        return this.request('PUT', url, addBody(options, body));
    }
}
HttpClient.ɵfac = function HttpClient_Factory(t) { return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpHandler)); };
HttpClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpClient, factory: HttpClient.ɵfac });
/** @nocollapse */
HttpClient.ctorParameters = () => [
    { type: HttpHandler }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: HttpHandler }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Intercepts and handles an `HttpRequest` or `HttpResponse`.
 *
 * Most interceptors transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 * An interceptor may transform the
 * response event stream as well, by applying additional RxJS operators on the stream
 * returned by `next.handle()`.
 *
 * More rarely, an interceptor may handle the request entirely,
 * and compose a new event stream instead of invoking `next.handle()`. This is an
 * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
 *
 * It is also rare but valid for an interceptor to return multiple responses on the
 * event stream for a single request.
 *
 * \@publicApi
 *
 * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
 *
 * \@usageNotes
 *
 * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
 * only in your `AppModule`, and add the interceptors to the root application injector .
 * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
 * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the
 * interceptors provided in the root module.
 *
 * @record
 */
function HttpInterceptor() { }
if (false) {}
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
class HttpInterceptorHandler {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
if (false) {}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * \@publicApi
 * @type {?}
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
class NoopInterceptor {
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) { return new (t || NoopInterceptor)(); };
NoopInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoopInterceptor, factory: NoopInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoopInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/jsonp.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
/** @type {?} */
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
/** @type {?} */
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
/** @type {?} */
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
/** @type {?} */
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 * @abstract
 */
class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * \@publicApi
 */
class JsonpClientBackend {
    /**
     * @param {?} callbackMap
     * @param {?} document
     */
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @private
     * @return {?}
     */
    nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
    }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            /** @type {?} */
            const callback = this.nextCallback();
            /** @type {?} */
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            /** @type {?} */
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            /** @type {?} */
            let body = null;
            // Whether the response callback has been called.
            /** @type {?} */
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            /** @type {?} */
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (/**
             * @param {?=} data
             * @return {?}
             */
            (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            });
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            /** @type {?} */
            const cleanup = (/**
             * @return {?}
             */
            () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            });
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            /** @type {?} */
            const onLoad = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body,
                    status: 200,
                    statusText: 'OK',
                    url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            });
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            /** @type {?} */
            const onError = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error',
                    url,
                }));
            });
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return (/**
             * @return {?}
             */
            () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            });
        }));
    }
}
JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) { return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
JsonpClientBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JsonpClientBackend, factory: JsonpClientBackend.ɵfac });
/** @nocollapse */
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonpClientBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: JsonpCallbackContext }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * \@publicApi
 */
class JsonpInterceptor {
    /**
     * @param {?} jsonp
     */
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param {?} req The outgoing request object to handle.
     * @param {?} next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @return {?} An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle((/** @type {?} */ (req)));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) { return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JsonpClientBackend)); };
JsonpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JsonpInterceptor, factory: JsonpInterceptor.ɵfac });
/** @nocollapse */
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: JsonpClientBackend }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/xhr.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@publicApi
 * @abstract
 */
class XhrFactory {
}
if (false) {}
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
class BrowserXhr {
    constructor() { }
    /**
     * @return {?}
     */
    build() {
        return (/** @type {?} */ ((new XMLHttpRequest())));
    }
}
BrowserXhr.ɵfac = function BrowserXhr_Factory(t) { return new (t || BrowserXhr)(); };
BrowserXhr.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserXhr, factory: BrowserXhr.ɵfac });
/** @nocollapse */
BrowserXhr.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserXhr, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
/**
 * Tracks a response from the server that does not yet have a body.
 * @record
 */
function PartialResponse() { }
if (false) {}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * \@publicApi
 */
class HttpXhrBackend {
    /**
     * @param {?} xhrFactory
     */
    constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     */
    handle(req) {
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error(`Attempted to construct Jsonp request without JsonpClientModule installed.`);
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            /** @type {?} */
            const xhr = this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach((/**
             * @param {?} name
             * @param {?} values
             * @return {?}
             */
            (name, values) => xhr.setRequestHeader(name, values.join(','))));
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                /** @type {?} */
                const detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                /** @type {?} */
                const responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = (/** @type {?} */ (((responseType !== 'json') ? responseType : 'text')));
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            /** @type {?} */
            const reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            /** @type {?} */
            let headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            /** @type {?} */
            const partialFromXhr = (/**
             * @return {?}
             */
            () => {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                /** @type {?} */
                const status = xhr.status === 1223 ? 204 : xhr.status;
                /** @type {?} */
                const statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                /** @type {?} */
                const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                /** @type {?} */
                const url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                return headerResponse;
            });
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            /** @type {?} */
            const onLoad = (/**
             * @return {?}
             */
            () => {
                // Read response state from the memoized partial data.
                let { headers, status, statusText, url } = partialFromXhr();
                // The body will be read out if present.
                /** @type {?} */
                let body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                /** @type {?} */
                let ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    /** @type {?} */
                    const originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = (/** @type {?} */ ({ error, text: body }));
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                }
            });
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            /** @type {?} */
            const onError = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                const { url } = partialFromXhr();
                /** @type {?} */
                const res = new HttpErrorResponse({
                    error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            });
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            /** @type {?} */
            let sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            /** @type {?} */
            const onDownProgress = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                /** @type {?} */
                let progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            });
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            /** @type {?} */
            const onUpProgress = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Upload progress events are simpler. Begin building the progress
                // event.
                /** @type {?} */
                let progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            });
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send((/** @type {?} */ (reqBody)));
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return (/**
             * @return {?}
             */
            () => {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            });
        }));
    }
}
HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) { return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](XhrFactory)); };
HttpXhrBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpXhrBackend, factory: HttpXhrBackend.ɵfac });
/** @nocollapse */
HttpXhrBackend.ctorParameters = () => [
    { type: XhrFactory }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpXhrBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: XhrFactory }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/xsrf.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
/** @type {?} */
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@publicApi
 * @abstract
 */
class HttpXsrfTokenExtractor {
}
if (false) {}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
    /**
     * @param {?} doc
     * @param {?} platform
     * @param {?} cookieName
     */
    constructor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    getToken() {
        if (this.platform === 'server') {
            return null;
        }
        /** @type {?} */
        const cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    }
}
HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) { return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](XSRF_COOKIE_NAME)); };
HttpXsrfCookieExtractor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpXsrfCookieExtractor, factory: HttpXsrfCookieExtractor.ɵfac });
/** @nocollapse */
HttpXsrfCookieExtractor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [XSRF_COOKIE_NAME]
            }] }]; }, null); })();
if (false) {}
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
    /**
     * @param {?} tokenService
     * @param {?} headerName
     */
    constructor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        /** @type {?} */
        const token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    }
}
HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) { return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](XSRF_HEADER_NAME)); };
HttpXsrfInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpXsrfInterceptor, factory: HttpXsrfInterceptor.ɵfac });
/** @nocollapse */
HttpXsrfInterceptor.ctorParameters = () => [
    { type: HttpXsrfTokenExtractor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: HttpXsrfTokenExtractor }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [XSRF_HEADER_NAME]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/src/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
class HttpInterceptingHandler {
    /**
     * @param {?} backend
     * @param {?} injector
     */
    constructor(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        if (this.chain === null) {
            /** @type {?} */
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight((/**
             * @param {?} next
             * @param {?} interceptor
             * @return {?}
             */
            (next, interceptor) => new HttpInterceptorHandler(next, interceptor)), this.backend);
        }
        return this.chain.handle(req);
    }
}
HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) { return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
HttpInterceptingHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpInterceptingHandler, factory: HttpInterceptingHandler.ɵfac });
/** @nocollapse */
HttpInterceptingHandler.ctorParameters = () => [
    { type: HttpBackend },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: HttpBackend }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();
if (false) {}
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */
function interceptingHandler(backend, interceptors = []) {
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight((/**
     * @param {?} next
     * @param {?} interceptor
     * @return {?}
     */
    (next, interceptor) => new HttpInterceptorHandler(next, interceptor)), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * \@publicApi
 */
class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param {?=} options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     * @return {?}
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    }
}
HttpClientXsrfModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpClientXsrfModule });
HttpClientXsrfModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HttpClientXsrfModule_Factory(t) { return new (t || HttpClientXsrfModule)(); }, providers: [
        HttpXsrfInterceptor,
        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
        { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
        { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ]
            }]
    }], null, null); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */
class HttpClientModule {
}
HttpClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpClientModule });
HttpClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HttpClientModule_Factory(t) { return new (t || HttpClientModule)(); }, providers: [
        HttpClient,
        { provide: HttpHandler, useClass: HttpInterceptingHandler },
        HttpXhrBackend,
        { provide: HttpBackend, useExisting: HttpXhrBackend },
        BrowserXhr,
        { provide: XhrFactory, useExisting: BrowserXhr },
    ], imports: [[
            HttpClientXsrfModule.withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-XSRF-TOKEN'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HttpClientModule, { imports: [HttpClientXsrfModule] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN'
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ]
            }]
    }], null, null); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */
class HttpClientJsonpModule {
}
HttpClientJsonpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpClientJsonpModule });
HttpClientJsonpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HttpClientJsonpModule_Factory(t) { return new (t || HttpClientJsonpModule)(); }, providers: [
        JsonpClientBackend,
        { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/http/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=http.js.map

/***/ }),

/***/ "./src/app/icons/icons-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/icons/icons-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IconsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsRoutingModule", function() { return IconsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.component */ "./src/app/icons/icons.component.ts");





const routes = [{ path: '', component: _icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"] }];
class IconsRoutingModule {
}
IconsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsRoutingModule });
IconsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsRoutingModule_Factory(t) { return new (t || IconsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_icons_icon_list_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/icon-list.json */ "./src/assets/icons/icon-list.json");
var _assets_icons_icon_list_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icon-list.json */ "./src/assets/icons/icon-list.json", 1);
/* harmony import */ var _assets_icons_icons8_categories_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/icons8/categories.json */ "./src/assets/icons/icons8/categories.json");
var _assets_icons_icons8_categories_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icons8/categories.json */ "./src/assets/icons/icons8/categories.json", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");






function IconsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconsComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const category_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleCategory(category_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.showCategory(category_r2.name) ? "bg-green-800 border-green-400 text-green-400 hover:border-green-600 hover:text-green-600" : "hover:border-green-400 hover:text-green-400 hover:bg-green-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.name, " ");
} }
function IconsComponent_div_10_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("cdkCopyToClipboard", "https://img.icons8.com/ios/100/ffffff/", icon_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://img.icons8.com/ios/100/ffffff/", icon_r8, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", icon_r8);
} }
function IconsComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IconsComponent_div_10_div_1_div_4_Template, 2, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r5.icons);
} }
function IconsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconsComponent_div_10_div_1_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showCategory(category_r5.name));
} }
class IconsComponent {
    constructor() {
        this.lineIcons = _assets_icons_icon_list_json__WEBPACK_IMPORTED_MODULE_1__;
        this.icons8 = _assets_icons_icons8_categories_json__WEBPACK_IMPORTED_MODULE_2__;
        this.hostname = window.location.host;
    }
    ngOnInit() {
        this.visibleCategory = {};
        this.icons8.forEach((icon) => {
            this.visibleCategory[icon.name] = false;
        });
        this.visibleCategory[Object.keys(this.visibleCategory)[0]] = true;
        this.visibleCategoryName = Object.keys(this.visibleCategory)[0];
    }
    showCategory(category) {
        return this.visibleCategory[category];
    }
    toggleCategory(category) {
        if (this.visibleCategory[category]) {
            return;
        }
        this.visibleCategory[category] = true;
        this.visibleCategory[this.visibleCategoryName] = false;
        this.visibleCategoryName = category;
    }
}
IconsComponent.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(); };
IconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsComponent, selectors: [["app-icons"]], decls: 11, vars: 2, consts: [[1, "bg-discord-light", "text-2xl", "text-white", "pl-8", "py-3", "shadow-sm"], [1, "bg-discord-dark", "p-10", "pt-16", "justify-center", "flex", "min-h-full"], [1, "rounded-md", "bg-discord-light", "max-w-1024px", "flex", "flex-wrap", "p-4", "justify-center"], [1, "w-full", "justify-center"], [1, "text-4xl", "text-white", "p-6"], [1, "flex", "flex-wrap", "w-full", "justify-center"], [1, "flex", "flex-wrap", "justify-center"], ["class", "rounded-full border border-white text-white text-center cursor-pointer m-1 py-1 px-4 select-none", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "px-6 w-full", 4, "ngFor", "ngForOf"], [1, "rounded-full", "border", "border-white", "text-white", "text-center", "cursor-pointer", "m-1", "py-1", "px-4", "select-none", 3, "ngClass", "click"], [1, "px-6", "w-full"], [4, "ngIf"], [1, "text-3xl", "text-white", "p-6"], [1, "rounded-md", "w-full", "flex", "flex-wrap", "p-4"], ["class", "flex w-10 h-10 m-2 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110", 4, "ngFor", "ngForOf"], [1, "flex", "w-10", "h-10", "m-2", "cursor-pointer", "transition", "duration-500", "ease-in-out", "transform", "hover:scale-110"], [3, "cdkCopyToClipboard", "src", "alt"]], template: function IconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " rattie icons\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IconsComponent_div_9_Template, 2, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IconsComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons8);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["CdkCopyToClipboard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icons',
                templateUrl: './icons.component.html',
                styleUrls: ['./icons.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/icons/icons.module.ts":
/*!***************************************!*\
  !*** ./src/app/icons/icons.module.ts ***!
  \***************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons-routing.module */ "./src/app/icons/icons-routing.module.ts");
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");







class IconsModule {
}
IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__["IconsRoutingModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, { declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__["IconsRoutingModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__["IconsRoutingModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/assets/icons/icon-list.json":
/*!*****************************************!*\
  !*** ./src/assets/icons/icon-list.json ***!
  \*****************************************/
/*! exports provided: iconList, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"iconList\":[\"500px.png\",\"accessible-icon.png\",\"accusoft.png\",\"acquisitions-incorporated.png\",\"ad-solid.png\",\"address-book-solid.png\",\"address-book.png\",\"address-card-solid.png\",\"address-card.png\",\"adjust-solid.png\",\"adn.png\",\"adobe.png\",\"adversal.png\",\"affiliatetheme.png\",\"air-freshener-solid.png\",\"airbnb.png\",\"algolia.png\",\"align-center-solid.png\",\"align-justify-solid.png\",\"align-left-solid.png\",\"align-right-solid.png\",\"alipay.png\",\"allergies-solid.png\",\"amazon-pay.png\",\"amazon.png\",\"ambulance-solid.png\",\"american-sign-language-interpreting-solid.png\",\"amilia.png\",\"anchor-solid.png\",\"android.png\",\"angellist.png\",\"angle-double-down-solid.png\",\"angle-double-left-solid.png\",\"angle-double-right-solid.png\",\"angle-double-up-solid.png\",\"angle-down-solid.png\",\"angle-left-solid.png\",\"angle-right-solid.png\",\"angle-up-solid.png\",\"angry-solid.png\",\"angry.png\",\"angrycreative.png\",\"angular.png\",\"ankh-solid.png\",\"app-store-ios.png\",\"app-store.png\",\"apper.png\",\"apple-alt-solid.png\",\"apple-pay.png\",\"apple.png\",\"archive-solid.png\",\"archway-solid.png\",\"arrow-alt-circle-down-solid.png\",\"arrow-alt-circle-down.png\",\"arrow-alt-circle-left-solid.png\",\"arrow-alt-circle-left.png\",\"arrow-alt-circle-right-solid.png\",\"arrow-alt-circle-right.png\",\"arrow-alt-circle-up-solid.png\",\"arrow-alt-circle-up.png\",\"arrow-circle-down-solid.png\",\"arrow-circle-left-solid.png\",\"arrow-circle-right-solid.png\",\"arrow-circle-up-solid.png\",\"arrow-down-solid.png\",\"arrow-left-solid.png\",\"arrow-right-solid.png\",\"arrow-up-solid.png\",\"arrows-alt-h-solid.png\",\"arrows-alt-solid.png\",\"arrows-alt-v-solid.png\",\"artstation.png\",\"assistive-listening-systems-solid.png\",\"asterisk-solid.png\",\"asymmetrik.png\",\"at-solid.png\",\"atlas-solid.png\",\"atlassian.png\",\"atom-solid.png\",\"audible.png\",\"audio-description-solid.png\",\"autoprefixer.png\",\"avianex.png\",\"aviato.png\",\"award-solid.png\",\"aws.png\",\"baby-carriage-solid.png\",\"baby-solid.png\",\"backspace-solid.png\",\"backward-solid.png\",\"bacon-solid.png\",\"balance-scale-left-solid.png\",\"balance-scale-right-solid.png\",\"balance-scale-solid.png\",\"ban-solid.png\",\"band-aid-solid.png\",\"bandcamp.png\",\"barcode-solid.png\",\"bars-solid.png\",\"baseball-ball-solid.png\",\"basketball-ball-solid.png\",\"bath-solid.png\",\"battery-empty-solid.png\",\"battery-full-solid.png\",\"battery-half-solid.png\",\"battery-quarter-solid.png\",\"battery-three-quarters-solid.png\",\"battle-net.png\",\"bed-solid.png\",\"beer-solid.png\",\"behance-square.png\",\"behance.png\",\"bell-slash-solid.png\",\"bell-slash.png\",\"bell-solid.png\",\"bell.png\",\"bezier-curve-solid.png\",\"bible-solid.png\",\"bicycle-solid.png\",\"biking-solid.png\",\"bimobject.png\",\"binoculars-solid.png\",\"biohazard-solid.png\",\"birthday-cake-solid.png\",\"bitbucket.png\",\"bitcoin.png\",\"bity.png\",\"black-tie.png\",\"blackberry.png\",\"blender-phone-solid.png\",\"blender-solid.png\",\"blind-solid.png\",\"blog-solid.png\",\"blogger-b.png\",\"blogger.png\",\"bluetooth-b.png\",\"bluetooth.png\",\"bold-solid.png\",\"bolt-solid.png\",\"bomb-solid.png\",\"bone-solid.png\",\"bong-solid.png\",\"book-dead-solid.png\",\"book-medical-solid.png\",\"book-open-solid.png\",\"book-reader-solid.png\",\"book-solid.png\",\"bookmark-solid.png\",\"bookmark.png\",\"bootstrap.png\",\"border-all-solid.png\",\"border-none-solid.png\",\"border-style-solid.png\",\"bowling-ball-solid.png\",\"box-open-solid.png\",\"box-solid.png\",\"boxes-solid.png\",\"braille-solid.png\",\"brain-solid.png\",\"bread-slice-solid.png\",\"briefcase-medical-solid.png\",\"briefcase-solid.png\",\"broadcast-tower-solid.png\",\"broom-solid.png\",\"brush-solid.png\",\"btc.png\",\"buffer.png\",\"bug-solid.png\",\"building-solid.png\",\"building.png\",\"bullhorn-solid.png\",\"bullseye-solid.png\",\"burn-solid.png\",\"buromobelexperte.png\",\"bus-alt-solid.png\",\"bus-solid.png\",\"business-time-solid.png\",\"buy-n-large.png\",\"buysellads.png\",\"calculator-solid.png\",\"calendar-alt-solid.png\",\"calendar-alt.png\",\"calendar-check-solid.png\",\"calendar-check.png\",\"calendar-day-solid.png\",\"calendar-minus-solid.png\",\"calendar-minus.png\",\"calendar-plus-solid.png\",\"calendar-plus.png\",\"calendar-solid.png\",\"calendar-times-solid.png\",\"calendar-times.png\",\"calendar-week-solid.png\",\"calendar.png\",\"camera-retro-solid.png\",\"camera-solid.png\",\"campground-solid.png\",\"canadian-maple-leaf.png\",\"candy-cane-solid.png\",\"cannabis-solid.png\",\"capsules-solid.png\",\"car-alt-solid.png\",\"car-battery-solid.png\",\"car-crash-solid.png\",\"car-side-solid.png\",\"car-solid.png\",\"caret-down-solid.png\",\"caret-left-solid.png\",\"caret-right-solid.png\",\"caret-square-down-solid.png\",\"caret-square-down.png\",\"caret-square-left-solid.png\",\"caret-square-left.png\",\"caret-square-right-solid.png\",\"caret-square-right.png\",\"caret-square-up-solid.png\",\"caret-square-up.png\",\"caret-up-solid.png\",\"carrot-solid.png\",\"cart-arrow-down-solid.png\",\"cart-plus-solid.png\",\"cash-register-solid.png\",\"cat-solid.png\",\"cc-amazon-pay.png\",\"cc-amex.png\",\"cc-apple-pay.png\",\"cc-diners-club.png\",\"cc-discover.png\",\"cc-jcb.png\",\"cc-mastercard.png\",\"cc-paypal.png\",\"cc-stripe.png\",\"cc-visa.png\",\"centercode.png\",\"centos.png\",\"certificate-solid.png\",\"chair-solid.png\",\"chalkboard-solid.png\",\"chalkboard-teacher-solid.png\",\"charging-station-solid.png\",\"chart-area-solid.png\",\"chart-bar-solid.png\",\"chart-bar.png\",\"chart-line-solid.png\",\"chart-pie-solid.png\",\"check-circle-solid.png\",\"check-circle.png\",\"check-double-solid.png\",\"check-solid.png\",\"check-square-solid.png\",\"check-square.png\",\"cheese-solid.png\",\"chess-bishop-solid.png\",\"chess-board-solid.png\",\"chess-king-solid.png\",\"chess-knight-solid.png\",\"chess-pawn-solid.png\",\"chess-queen-solid.png\",\"chess-rook-solid.png\",\"chess-solid.png\",\"chevron-circle-down-solid.png\",\"chevron-circle-left-solid.png\",\"chevron-circle-right-solid.png\",\"chevron-circle-up-solid.png\",\"chevron-down-solid.png\",\"chevron-left-solid.png\",\"chevron-right-solid.png\",\"chevron-up-solid.png\",\"child-solid.png\",\"chrome.png\",\"chromecast.png\",\"church-solid.png\",\"circle-notch-solid.png\",\"circle-solid.png\",\"circle.png\",\"city-solid.png\",\"clinic-medical-solid.png\",\"clipboard-check-solid.png\",\"clipboard-list-solid.png\",\"clipboard-solid.png\",\"clipboard.png\",\"clock-solid.png\",\"clock.png\",\"clone-solid.png\",\"clone.png\",\"closed-captioning-solid.png\",\"closed-captioning.png\",\"cloud-download-alt-solid.png\",\"cloud-meatball-solid.png\",\"cloud-moon-rain-solid.png\",\"cloud-moon-solid.png\",\"cloud-rain-solid.png\",\"cloud-showers-heavy-solid.png\",\"cloud-solid.png\",\"cloud-sun-rain-solid.png\",\"cloud-sun-solid.png\",\"cloud-upload-alt-solid.png\",\"cloudscale.png\",\"cloudsmith.png\",\"cloudversify.png\",\"cocktail-solid.png\",\"code-branch-solid.png\",\"code-solid.png\",\"codepen.png\",\"codiepie.png\",\"coffee-solid.png\",\"cog-solid.png\",\"cogs-solid.png\",\"coins-solid.png\",\"columns-solid.png\",\"comment-alt-solid.png\",\"comment-alt.png\",\"comment-dollar-solid.png\",\"comment-dots-solid.png\",\"comment-dots.png\",\"comment-medical-solid.png\",\"comment-slash-solid.png\",\"comment-solid.png\",\"comment.png\",\"comments-dollar-solid.png\",\"comments-solid.png\",\"comments.png\",\"compact-disc-solid.png\",\"compass-solid.png\",\"compass.png\",\"compress-arrows-alt-solid.png\",\"compress-solid.png\",\"concierge-bell-solid.png\",\"confluence.png\",\"connectdevelop.png\",\"contao.png\",\"cookie-bite-solid.png\",\"cookie-solid.png\",\"copy-solid.png\",\"copy.png\",\"copyright-solid.png\",\"copyright.png\",\"cotton-bureau.png\",\"couch-solid.png\",\"cpanel.png\",\"creative-commons-by.png\",\"creative-commons-nc-eu.png\",\"creative-commons-nc-jp.png\",\"creative-commons-nc.png\",\"creative-commons-nd.png\",\"creative-commons-pd-alt.png\",\"creative-commons-pd.png\",\"creative-commons-remix.png\",\"creative-commons-sa.png\",\"creative-commons-sampling-plus.png\",\"creative-commons-sampling.png\",\"creative-commons-share.png\",\"creative-commons-zero.png\",\"creative-commons.png\",\"credit-card-solid.png\",\"credit-card.png\",\"critical-role.png\",\"crop-alt-solid.png\",\"crop-solid.png\",\"cross-solid.png\",\"crosshairs-solid.png\",\"crow-solid.png\",\"crown-solid.png\",\"crutch-solid.png\",\"css3-alt.png\",\"css3.png\",\"cube-solid.png\",\"cubes-solid.png\",\"cut-solid.png\",\"cuttlefish.png\",\"d-and-d-beyond.png\",\"d-and-d.png\",\"dashcube.png\",\"database-solid.png\",\"deaf-solid.png\",\"delicious.png\",\"democrat-solid.png\",\"deploydog.png\",\"deskpro.png\",\"desktop-solid.png\",\"dev.png\",\"deviantart.png\",\"dharmachakra-solid.png\",\"dhl.png\",\"diagnoses-solid.png\",\"diaspora.png\",\"dice-d20-solid.png\",\"dice-d6-solid.png\",\"dice-five-solid.png\",\"dice-four-solid.png\",\"dice-one-solid.png\",\"dice-six-solid.png\",\"dice-solid.png\",\"dice-three-solid.png\",\"dice-two-solid.png\",\"digg.png\",\"digital-ocean.png\",\"digital-tachograph-solid.png\",\"directions-solid.png\",\"discord.png\",\"discourse.png\",\"divide-solid.png\",\"dizzy-solid.png\",\"dizzy.png\",\"dna-solid.png\",\"dochub.png\",\"docker.png\",\"dog-solid.png\",\"dollar-sign-solid.png\",\"dolly-flatbed-solid.png\",\"dolly-solid.png\",\"donate-solid.png\",\"door-closed-solid.png\",\"door-open-solid.png\",\"dot-circle-solid.png\",\"dot-circle.png\",\"dove-solid.png\",\"download-solid.png\",\"draft2digital.png\",\"drafting-compass-solid.png\",\"dragon-solid.png\",\"draw-polygon-solid.png\",\"dribbble-square.png\",\"dribbble.png\",\"dropbox.png\",\"drum-solid.png\",\"drum-steelpan-solid.png\",\"drumstick-bite-solid.png\",\"drupal.png\",\"dumbbell-solid.png\",\"dumpster-fire-solid.png\",\"dumpster-solid.png\",\"dungeon-solid.png\",\"dyalog.png\",\"earlybirds.png\",\"ebay.png\",\"edge.png\",\"edit-solid.png\",\"edit.png\",\"egg-solid.png\",\"eject-solid.png\",\"elementor.png\",\"ellipsis-h-solid.png\",\"ellipsis-v-solid.png\",\"ello.png\",\"ember.png\",\"empire.png\",\"envelope-open-solid.png\",\"envelope-open-text-solid.png\",\"envelope-open.png\",\"envelope-solid.png\",\"envelope-square-solid.png\",\"envelope.png\",\"envira.png\",\"equals-solid.png\",\"eraser-solid.png\",\"erlang.png\",\"ethereum.png\",\"ethernet-solid.png\",\"etsy.png\",\"euro-sign-solid.png\",\"evernote.png\",\"exchange-alt-solid.png\",\"exclamation-circle-solid.png\",\"exclamation-solid.png\",\"exclamation-triangle-solid.png\",\"expand-arrows-alt-solid.png\",\"expand-solid.png\",\"expeditedssl.png\",\"external-link-alt-solid.png\",\"external-link-square-alt-solid.png\",\"eye-dropper-solid.png\",\"eye-slash-solid.png\",\"eye-slash.png\",\"eye-solid.png\",\"eye.png\",\"facebook-f.png\",\"facebook-messenger.png\",\"facebook-square.png\",\"facebook.png\",\"fan-solid.png\",\"fantasy-flight-games.png\",\"fast-backward-solid.png\",\"fast-forward-solid.png\",\"fax-solid.png\",\"feather-alt-solid.png\",\"feather-solid.png\",\"fedex.png\",\"fedora.png\",\"female-solid.png\",\"fighter-jet-solid.png\",\"figma.png\",\"file-alt-solid.png\",\"file-alt.png\",\"file-archive-solid.png\",\"file-archive.png\",\"file-audio-solid.png\",\"file-audio.png\",\"file-code-solid.png\",\"file-code.png\",\"file-contract-solid.png\",\"file-csv-solid.png\",\"file-download-solid.png\",\"file-excel-solid.png\",\"file-excel.png\",\"file-export-solid.png\",\"file-image-solid.png\",\"file-image.png\",\"file-import-solid.png\",\"file-invoice-dollar-solid.png\",\"file-invoice-solid.png\",\"file-medical-alt-solid.png\",\"file-medical-solid.png\",\"file-pdf-solid.png\",\"file-pdf.png\",\"file-powerpoint-solid.png\",\"file-powerpoint.png\",\"file-prescription-solid.png\",\"file-signature-solid.png\",\"file-solid.png\",\"file-upload-solid.png\",\"file-video-solid.png\",\"file-video.png\",\"file-word-solid.png\",\"file-word.png\",\"file.png\",\"fill-drip-solid.png\",\"fill-solid.png\",\"film-solid.png\",\"filter-solid.png\",\"fingerprint-solid.png\",\"fire-alt-solid.png\",\"fire-extinguisher-solid.png\",\"fire-solid.png\",\"firefox.png\",\"first-aid-solid.png\",\"first-order-alt.png\",\"first-order.png\",\"firstdraft.png\",\"fish-solid.png\",\"fist-raised-solid.png\",\"flag-checkered-solid.png\",\"flag-solid.png\",\"flag-usa-solid.png\",\"flag.png\",\"flask-solid.png\",\"flickr.png\",\"flipboard.png\",\"flushed-solid.png\",\"flushed.png\",\"fly.png\",\"folder-minus-solid.png\",\"folder-open-solid.png\",\"folder-open.png\",\"folder-plus-solid.png\",\"folder-solid.png\",\"folder.png\",\"font-awesome-alt.png\",\"font-awesome-flag.png\",\"font-awesome.png\",\"font-solid.png\",\"fonticons-fi.png\",\"fonticons.png\",\"football-ball-solid.png\",\"fort-awesome-alt.png\",\"fort-awesome.png\",\"forumbee.png\",\"forward-solid.png\",\"foursquare.png\",\"free-code-camp.png\",\"freebsd.png\",\"frog-solid.png\",\"frown-open-solid.png\",\"frown-open.png\",\"frown-solid.png\",\"frown.png\",\"fulcrum.png\",\"funnel-dollar-solid.png\",\"futbol-solid.png\",\"futbol.png\",\"galactic-republic.png\",\"galactic-senate.png\",\"gamepad-solid.png\",\"gas-pump-solid.png\",\"gavel-solid.png\",\"gem-solid.png\",\"gem.png\",\"genderless-solid.png\",\"get-pocket.png\",\"gg-circle.png\",\"gg.png\",\"ghost-solid.png\",\"gift-solid.png\",\"gifts-solid.png\",\"git-alt.png\",\"git-square.png\",\"git.png\",\"github-alt.png\",\"github-square.png\",\"github.png\",\"gitkraken.png\",\"gitlab.png\",\"gitter.png\",\"glass-cheers-solid.png\",\"glass-martini-alt-solid.png\",\"glass-martini-solid.png\",\"glass-whiskey-solid.png\",\"glasses-solid.png\",\"glide-g.png\",\"glide.png\",\"globe-africa-solid.png\",\"globe-americas-solid.png\",\"globe-asia-solid.png\",\"globe-europe-solid.png\",\"globe-solid.png\",\"gofore.png\",\"golf-ball-solid.png\",\"goodreads-g.png\",\"goodreads.png\",\"google-drive.png\",\"google-play.png\",\"google-plus-g.png\",\"google-plus-square.png\",\"google-plus.png\",\"google-wallet.png\",\"google.png\",\"gopuram-solid.png\",\"graduation-cap-solid.png\",\"gratipay.png\",\"grav.png\",\"greater-than-equal-solid.png\",\"greater-than-solid.png\",\"grimace-solid.png\",\"grimace.png\",\"grin-alt-solid.png\",\"grin-alt.png\",\"grin-beam-solid.png\",\"grin-beam-sweat-solid.png\",\"grin-beam-sweat.png\",\"grin-beam.png\",\"grin-hearts-solid.png\",\"grin-hearts.png\",\"grin-solid.png\",\"grin-squint-solid.png\",\"grin-squint-tears-solid.png\",\"grin-squint-tears.png\",\"grin-squint.png\",\"grin-stars-solid.png\",\"grin-stars.png\",\"grin-tears-solid.png\",\"grin-tears.png\",\"grin-tongue-solid.png\",\"grin-tongue-squint-solid.png\",\"grin-tongue-squint.png\",\"grin-tongue-wink-solid.png\",\"grin-tongue-wink.png\",\"grin-tongue.png\",\"grin-wink-solid.png\",\"grin-wink.png\",\"grin.png\",\"grip-horizontal-solid.png\",\"grip-lines-solid.png\",\"grip-lines-vertical-solid.png\",\"grip-vertical-solid.png\",\"gripfire.png\",\"grunt.png\",\"guitar-solid.png\",\"gulp.png\",\"h-square-solid.png\",\"hacker-news-square.png\",\"hacker-news.png\",\"hackerrank.png\",\"hamburger-solid.png\",\"hammer-solid.png\",\"hamsa-solid.png\",\"hand-holding-heart-solid.png\",\"hand-holding-solid.png\",\"hand-holding-usd-solid.png\",\"hand-lizard-solid.png\",\"hand-lizard.png\",\"hand-middle-finger-solid.png\",\"hand-paper-solid.png\",\"hand-paper.png\",\"hand-peace-solid.png\",\"hand-peace.png\",\"hand-point-down-solid.png\",\"hand-point-down.png\",\"hand-point-left-solid.png\",\"hand-point-left.png\",\"hand-point-right-solid.png\",\"hand-point-right.png\",\"hand-point-up-solid.png\",\"hand-point-up.png\",\"hand-pointer-solid.png\",\"hand-pointer.png\",\"hand-rock-solid.png\",\"hand-rock.png\",\"hand-scissors-solid.png\",\"hand-scissors.png\",\"hand-spock-solid.png\",\"hand-spock.png\",\"hands-helping-solid.png\",\"hands-solid.png\",\"handshake-solid.png\",\"handshake.png\",\"hanukiah-solid.png\",\"hard-hat-solid.png\",\"hashtag-solid.png\",\"hat-cowboy-side-solid.png\",\"hat-cowboy-solid.png\",\"hat-wizard-solid.png\",\"haykal-solid.png\",\"hdd-solid.png\",\"hdd.png\",\"heading-solid.png\",\"headphones-alt-solid.png\",\"headphones-solid.png\",\"headset-solid.png\",\"heart-broken-solid.png\",\"heart-solid.png\",\"heart.png\",\"heartbeat-solid.png\",\"helicopter-solid.png\",\"highlighter-solid.png\",\"hiking-solid.png\",\"hippo-solid.png\",\"hips.png\",\"hire-a-helper.png\",\"history-solid.png\",\"hockey-puck-solid.png\",\"holly-berry-solid.png\",\"home-solid.png\",\"hooli.png\",\"hornbill.png\",\"horse-head-solid.png\",\"horse-solid.png\",\"hospital-alt-solid.png\",\"hospital-solid.png\",\"hospital-symbol-solid.png\",\"hospital.png\",\"hot-tub-solid.png\",\"hotdog-solid.png\",\"hotel-solid.png\",\"hotjar.png\",\"hourglass-end-solid.png\",\"hourglass-half-solid.png\",\"hourglass-solid.png\",\"hourglass-start-solid.png\",\"hourglass.png\",\"house-damage-solid.png\",\"houzz.png\",\"hryvnia-solid.png\",\"html5.png\",\"hubspot.png\",\"i-cursor-solid.png\",\"ice-cream-solid.png\",\"icicles-solid.png\",\"icons-solid.png\",\"id-badge-solid.png\",\"id-badge.png\",\"id-card-alt-solid.png\",\"id-card-solid.png\",\"id-card.png\",\"igloo-solid.png\",\"image-solid.png\",\"image.png\",\"images-solid.png\",\"images.png\",\"imdb.png\",\"inbox-solid.png\",\"indent-solid.png\",\"industry-solid.png\",\"infinity-solid.png\",\"info-circle-solid.png\",\"info-solid.png\",\"instagram.png\",\"intercom.png\",\"internet-explorer.png\",\"invision.png\",\"ioxhost.png\",\"italic-solid.png\",\"itch-io.png\",\"itunes-note.png\",\"itunes.png\",\"java.png\",\"jedi-order.png\",\"jedi-solid.png\",\"jenkins.png\",\"jira.png\",\"joget.png\",\"joint-solid.png\",\"joomla.png\",\"journal-whills-solid.png\",\"js-square.png\",\"js.png\",\"jsfiddle.png\",\"kaaba-solid.png\",\"kaggle.png\",\"key-solid.png\",\"keybase.png\",\"keyboard-solid.png\",\"keyboard.png\",\"keycdn.png\",\"khanda-solid.png\",\"kickstarter-k.png\",\"kickstarter.png\",\"kiss-beam-solid.png\",\"kiss-beam.png\",\"kiss-solid.png\",\"kiss-wink-heart-solid.png\",\"kiss-wink-heart.png\",\"kiss.png\",\"kiwi-bird-solid.png\",\"korvue.png\",\"landmark-solid.png\",\"language-solid.png\",\"laptop-code-solid.png\",\"laptop-medical-solid.png\",\"laptop-solid.png\",\"laravel.png\",\"lastfm-square.png\",\"lastfm.png\",\"laugh-beam-solid.png\",\"laugh-beam.png\",\"laugh-solid.png\",\"laugh-squint-solid.png\",\"laugh-squint.png\",\"laugh-wink-solid.png\",\"laugh-wink.png\",\"laugh.png\",\"layer-group-solid.png\",\"leaf-solid.png\",\"leanpub.png\",\"lemon-solid.png\",\"lemon.png\",\"less-than-equal-solid.png\",\"less-than-solid.png\",\"less.png\",\"level-down-alt-solid.png\",\"level-up-alt-solid.png\",\"life-ring-solid.png\",\"life-ring.png\",\"lightbulb-solid.png\",\"lightbulb.png\",\"line.png\",\"link-solid.png\",\"linkedin-in.png\",\"linkedin.png\",\"linode.png\",\"linux.png\",\"lira-sign-solid.png\",\"list-alt-solid.png\",\"list-alt.png\",\"list-ol-solid.png\",\"list-solid.png\",\"list-ul-solid.png\",\"location-arrow-solid.png\",\"lock-open-solid.png\",\"lock-solid.png\",\"long-arrow-alt-down-solid.png\",\"long-arrow-alt-left-solid.png\",\"long-arrow-alt-right-solid.png\",\"long-arrow-alt-up-solid.png\",\"low-vision-solid.png\",\"luggage-cart-solid.png\",\"lyft.png\",\"magento.png\",\"magic-solid.png\",\"magnet-solid.png\",\"mail-bulk-solid.png\",\"mailchimp.png\",\"male-solid.png\",\"mandalorian.png\",\"map-marked-alt-solid.png\",\"map-marked-solid.png\",\"map-marker-alt-solid.png\",\"map-marker-solid.png\",\"map-pin-solid.png\",\"map-signs-solid.png\",\"map-solid.png\",\"map.png\",\"markdown.png\",\"marker-solid.png\",\"mars-double-solid.png\",\"mars-solid.png\",\"mars-stroke-h-solid.png\",\"mars-stroke-solid.png\",\"mars-stroke-v-solid.png\",\"mask-solid.png\",\"mastodon.png\",\"maxcdn.png\",\"mdb.png\",\"medal-solid.png\",\"medapps.png\",\"medium-m.png\",\"medium.png\",\"medkit-solid.png\",\"medrt.png\",\"meetup.png\",\"megaport.png\",\"meh-blank-solid.png\",\"meh-blank.png\",\"meh-rolling-eyes-solid.png\",\"meh-rolling-eyes.png\",\"meh-solid.png\",\"meh.png\",\"memory-solid.png\",\"mendeley.png\",\"menorah-solid.png\",\"mercury-solid.png\",\"meteor-solid.png\",\"microchip-solid.png\",\"microphone-alt-slash-solid.png\",\"microphone-alt-solid.png\",\"microphone-slash-solid.png\",\"microphone-solid.png\",\"microscope-solid.png\",\"microsoft.png\",\"minus-circle-solid.png\",\"minus-solid.png\",\"minus-square-solid.png\",\"minus-square.png\",\"mitten-solid.png\",\"mix.png\",\"mixcloud.png\",\"mizuni.png\",\"mobile-alt-solid.png\",\"mobile-solid.png\",\"modx.png\",\"monero.png\",\"money-bill-alt-solid.png\",\"money-bill-alt.png\",\"money-bill-solid.png\",\"money-bill-wave-alt-solid.png\",\"money-bill-wave-solid.png\",\"money-check-alt-solid.png\",\"money-check-solid.png\",\"monument-solid.png\",\"moon-solid.png\",\"moon.png\",\"mortar-pestle-solid.png\",\"mosque-solid.png\",\"motorcycle-solid.png\",\"mountain-solid.png\",\"mouse-pointer-solid.png\",\"mouse-solid.png\",\"mug-hot-solid.png\",\"music-solid.png\",\"napster.png\",\"neos.png\",\"network-wired-solid.png\",\"neuter-solid.png\",\"newspaper-solid.png\",\"newspaper.png\",\"nimblr.png\",\"node-js.png\",\"node.png\",\"not-equal-solid.png\",\"notes-medical-solid.png\",\"npm.png\",\"ns8.png\",\"nutritionix.png\",\"object-group-solid.png\",\"object-group.png\",\"object-ungroup-solid.png\",\"object-ungroup.png\",\"odnoklassniki-square.png\",\"odnoklassniki.png\",\"oil-can-solid.png\",\"old-republic.png\",\"om-solid.png\",\"opencart.png\",\"openid.png\",\"opera.png\",\"optin-monster.png\",\"orcid.png\",\"osi.png\",\"otter-solid.png\",\"outdent-solid.png\",\"page4.png\",\"pagelines.png\",\"pager-solid.png\",\"paint-brush-solid.png\",\"paint-roller-solid.png\",\"palette-solid.png\",\"palfed.png\",\"pallet-solid.png\",\"paper-plane-solid.png\",\"paper-plane.png\",\"paperclip-solid.png\",\"parachute-box-solid.png\",\"paragraph-solid.png\",\"parking-solid.png\",\"passport-solid.png\",\"pastafarianism-solid.png\",\"paste-solid.png\",\"patreon.png\",\"pause-circle-solid.png\",\"pause-circle.png\",\"pause-solid.png\",\"paw-solid.png\",\"paypal.png\",\"peace-solid.png\",\"pen-alt-solid.png\",\"pen-fancy-solid.png\",\"pen-nib-solid.png\",\"pen-solid.png\",\"pen-square-solid.png\",\"pencil-alt-solid.png\",\"pencil-ruler-solid.png\",\"penny-arcade.png\",\"people-carry-solid.png\",\"pepper-hot-solid.png\",\"percent-solid.png\",\"percentage-solid.png\",\"periscope.png\",\"person-booth-solid.png\",\"phabricator.png\",\"phoenix-framework.png\",\"phoenix-squadron.png\",\"phone-alt-solid.png\",\"phone-slash-solid.png\",\"phone-solid.png\",\"phone-square-alt-solid.png\",\"phone-square-solid.png\",\"phone-volume-solid.png\",\"photo-video-solid.png\",\"php.png\",\"pied-piper-alt.png\",\"pied-piper-hat.png\",\"pied-piper-pp.png\",\"pied-piper.png\",\"piggy-bank-solid.png\",\"pills-solid.png\",\"pinterest-p.png\",\"pinterest-square.png\",\"pinterest.png\",\"pizza-slice-solid.png\",\"place-of-worship-solid.png\",\"plane-arrival-solid.png\",\"plane-departure-solid.png\",\"plane-solid.png\",\"play-circle-solid.png\",\"play-circle.png\",\"play-solid.png\",\"playstation.png\",\"plug-solid.png\",\"plus-circle-solid.png\",\"plus-solid.png\",\"plus-square-solid.png\",\"plus-square.png\",\"podcast-solid.png\",\"poll-h-solid.png\",\"poll-solid.png\",\"poo-solid.png\",\"poo-storm-solid.png\",\"poop-solid.png\",\"portrait-solid.png\",\"pound-sign-solid.png\",\"power-off-solid.png\",\"pray-solid.png\",\"praying-hands-solid.png\",\"prescription-bottle-alt-solid.png\",\"prescription-bottle-solid.png\",\"prescription-solid.png\",\"print-solid.png\",\"procedures-solid.png\",\"product-hunt.png\",\"project-diagram-solid.png\",\"pushed.png\",\"puzzle-piece-solid.png\",\"python.png\",\"qq.png\",\"qrcode-solid.png\",\"question-circle-solid.png\",\"question-circle.png\",\"question-solid.png\",\"quidditch-solid.png\",\"quinscape.png\",\"quora.png\",\"quote-left-solid.png\",\"quote-right-solid.png\",\"quran-solid.png\",\"r-project.png\",\"radiation-alt-solid.png\",\"radiation-solid.png\",\"rainbow-solid.png\",\"random-solid.png\",\"raspberry-pi.png\",\"ravelry.png\",\"react.png\",\"reacteurope.png\",\"readme.png\",\"rebel.png\",\"receipt-solid.png\",\"record-vinyl-solid.png\",\"recycle-solid.png\",\"red-river.png\",\"reddit-alien.png\",\"reddit-square.png\",\"reddit.png\",\"redhat.png\",\"redo-alt-solid.png\",\"redo-solid.png\",\"registered-solid.png\",\"registered.png\",\"remove-format-solid.png\",\"renren.png\",\"reply-all-solid.png\",\"reply-solid.png\",\"replyd.png\",\"republican-solid.png\",\"researchgate.png\",\"resolving.png\",\"restroom-solid.png\",\"retweet-solid.png\",\"rev.png\",\"ribbon-solid.png\",\"ring-solid.png\",\"road-solid.png\",\"robot-solid.png\",\"rocket-solid.png\",\"rocketchat.png\",\"rockrms.png\",\"route-solid.png\",\"rss-solid.png\",\"rss-square-solid.png\",\"ruble-sign-solid.png\",\"ruler-combined-solid.png\",\"ruler-horizontal-solid.png\",\"ruler-solid.png\",\"ruler-vertical-solid.png\",\"running-solid.png\",\"rupee-sign-solid.png\",\"sad-cry-solid.png\",\"sad-cry.png\",\"sad-tear-solid.png\",\"sad-tear.png\",\"safari.png\",\"salesforce.png\",\"sass.png\",\"satellite-dish-solid.png\",\"satellite-solid.png\",\"save-solid.png\",\"save.png\",\"schlix.png\",\"school-solid.png\",\"screwdriver-solid.png\",\"scribd.png\",\"scroll-solid.png\",\"sd-card-solid.png\",\"search-dollar-solid.png\",\"search-location-solid.png\",\"search-minus-solid.png\",\"search-plus-solid.png\",\"search-solid.png\",\"searchengin.png\",\"seedling-solid.png\",\"sellcast.png\",\"sellsy.png\",\"server-solid.png\",\"servicestack.png\",\"shapes-solid.png\",\"share-alt-solid.png\",\"share-alt-square-solid.png\",\"share-solid.png\",\"share-square-solid.png\",\"share-square.png\",\"shekel-sign-solid.png\",\"shield-alt-solid.png\",\"ship-solid.png\",\"shipping-fast-solid.png\",\"shirtsinbulk.png\",\"shoe-prints-solid.png\",\"shopping-bag-solid.png\",\"shopping-basket-solid.png\",\"shopping-cart-solid.png\",\"shopware.png\",\"shower-solid.png\",\"shuttle-van-solid.png\",\"sign-in-alt-solid.png\",\"sign-language-solid.png\",\"sign-out-alt-solid.png\",\"sign-solid.png\",\"signal-solid.png\",\"signature-solid.png\",\"sim-card-solid.png\",\"simplybuilt.png\",\"sistrix.png\",\"sitemap-solid.png\",\"sith.png\",\"skating-solid.png\",\"sketch.png\",\"skiing-nordic-solid.png\",\"skiing-solid.png\",\"skull-crossbones-solid.png\",\"skull-solid.png\",\"skyatlas.png\",\"skype.png\",\"slack-hash.png\",\"slack.png\",\"slash-solid.png\",\"sleigh-solid.png\",\"sliders-h-solid.png\",\"slideshare.png\",\"smile-beam-solid.png\",\"smile-beam.png\",\"smile-solid.png\",\"smile-wink-solid.png\",\"smile-wink.png\",\"smile.png\",\"smog-solid.png\",\"smoking-ban-solid.png\",\"smoking-solid.png\",\"sms-solid.png\",\"snapchat-ghost.png\",\"snapchat-square.png\",\"snapchat.png\",\"snowboarding-solid.png\",\"snowflake-solid.png\",\"snowflake.png\",\"snowman-solid.png\",\"snowplow-solid.png\",\"socks-solid.png\",\"solar-panel-solid.png\",\"sort-alpha-down-alt-solid.png\",\"sort-alpha-down-solid.png\",\"sort-alpha-up-alt-solid.png\",\"sort-alpha-up-solid.png\",\"sort-amount-down-alt-solid.png\",\"sort-amount-down-solid.png\",\"sort-amount-up-alt-solid.png\",\"sort-amount-up-solid.png\",\"sort-down-solid.png\",\"sort-numeric-down-alt-solid.png\",\"sort-numeric-down-solid.png\",\"sort-numeric-up-alt-solid.png\",\"sort-numeric-up-solid.png\",\"sort-solid.png\",\"sort-up-solid.png\",\"soundcloud.png\",\"sourcetree.png\",\"spa-solid.png\",\"space-shuttle-solid.png\",\"speakap.png\",\"speaker-deck.png\",\"spell-check-solid.png\",\"spider-solid.png\",\"spinner-solid.png\",\"splotch-solid.png\",\"spotify.png\",\"spray-can-solid.png\",\"square-full-solid.png\",\"square-root-alt-solid.png\",\"square-solid.png\",\"square.png\",\"squarespace.png\",\"stack-exchange.png\",\"stack-overflow.png\",\"stackpath.png\",\"stamp-solid.png\",\"star-and-crescent-solid.png\",\"star-half-alt-solid.png\",\"star-half-solid.png\",\"star-half.png\",\"star-of-david-solid.png\",\"star-of-life-solid.png\",\"star-solid.png\",\"star.png\",\"staylinked.png\",\"steam-square.png\",\"steam-symbol.png\",\"steam.png\",\"step-backward-solid.png\",\"step-forward-solid.png\",\"stethoscope-solid.png\",\"sticker-mule.png\",\"sticky-note-solid.png\",\"sticky-note.png\",\"stop-circle-solid.png\",\"stop-circle.png\",\"stop-solid.png\",\"stopwatch-solid.png\",\"store-alt-solid.png\",\"store-solid.png\",\"strava.png\",\"stream-solid.png\",\"street-view-solid.png\",\"strikethrough-solid.png\",\"stripe-s.png\",\"stripe.png\",\"stroopwafel-solid.png\",\"studiovinari.png\",\"stumbleupon-circle.png\",\"stumbleupon.png\",\"subscript-solid.png\",\"subway-solid.png\",\"suitcase-rolling-solid.png\",\"suitcase-solid.png\",\"sun-solid.png\",\"sun.png\",\"superpowers.png\",\"superscript-solid.png\",\"supple.png\",\"surprise-solid.png\",\"surprise.png\",\"suse.png\",\"swatchbook-solid.png\",\"swift.png\",\"swimmer-solid.png\",\"swimming-pool-solid.png\",\"symfony.png\",\"synagogue-solid.png\",\"sync-alt-solid.png\",\"sync-solid.png\",\"syringe-solid.png\",\"table-solid.png\",\"table-tennis-solid.png\",\"tablet-alt-solid.png\",\"tablet-solid.png\",\"tablets-solid.png\",\"tachometer-alt-solid.png\",\"tag-solid.png\",\"tags-solid.png\",\"tape-solid.png\",\"tasks-solid.png\",\"taxi-solid.png\",\"teamspeak.png\",\"teeth-open-solid.png\",\"teeth-solid.png\",\"telegram-plane.png\",\"telegram.png\",\"temperature-high-solid.png\",\"temperature-low-solid.png\",\"tencent-weibo.png\",\"tenge-solid.png\",\"terminal-solid.png\",\"text-height-solid.png\",\"text-width-solid.png\",\"th-large-solid.png\",\"th-list-solid.png\",\"th-solid.png\",\"the-red-yeti.png\",\"theater-masks-solid.png\",\"themeco.png\",\"themeisle.png\",\"thermometer-empty-solid.png\",\"thermometer-full-solid.png\",\"thermometer-half-solid.png\",\"thermometer-quarter-solid.png\",\"thermometer-solid.png\",\"thermometer-three-quarters-solid.png\",\"think-peaks.png\",\"thumbs-down-solid.png\",\"thumbs-down.png\",\"thumbs-up-solid.png\",\"thumbs-up.png\",\"thumbtack-solid.png\",\"ticket-alt-solid.png\",\"times-circle-solid.png\",\"times-circle.png\",\"times-solid.png\",\"tint-slash-solid.png\",\"tint-solid.png\",\"tired-solid.png\",\"tired.png\",\"toggle-off-solid.png\",\"toggle-on-solid.png\",\"toilet-paper-solid.png\",\"toilet-solid.png\",\"toolbox-solid.png\",\"tools-solid.png\",\"tooth-solid.png\",\"torah-solid.png\",\"torii-gate-solid.png\",\"tractor-solid.png\",\"trade-federation.png\",\"trademark-solid.png\",\"traffic-light-solid.png\",\"train-solid.png\",\"tram-solid.png\",\"transgender-alt-solid.png\",\"transgender-solid.png\",\"trash-alt-solid.png\",\"trash-alt.png\",\"trash-restore-alt-solid.png\",\"trash-restore-solid.png\",\"trash-solid.png\",\"tree-solid.png\",\"trello.png\",\"tripadvisor.png\",\"trophy-solid.png\",\"truck-loading-solid.png\",\"truck-monster-solid.png\",\"truck-moving-solid.png\",\"truck-pickup-solid.png\",\"truck-solid.png\",\"tshirt-solid.png\",\"tty-solid.png\",\"tumblr-square.png\",\"tumblr.png\",\"tv-solid.png\",\"twitch.png\",\"twitter-square.png\",\"twitter.png\",\"typo3.png\",\"uber.png\",\"ubuntu.png\",\"uikit.png\",\"umbraco.png\",\"umbrella-beach-solid.png\",\"umbrella-solid.png\",\"underline-solid.png\",\"undo-alt-solid.png\",\"undo-solid.png\",\"uniregistry.png\",\"universal-access-solid.png\",\"university-solid.png\",\"unlink-solid.png\",\"unlock-alt-solid.png\",\"unlock-solid.png\",\"untappd.png\",\"upload-solid.png\",\"ups.png\",\"usb.png\",\"user-alt-slash-solid.png\",\"user-alt-solid.png\",\"user-astronaut-solid.png\",\"user-check-solid.png\",\"user-circle-solid.png\",\"user-circle.png\",\"user-clock-solid.png\",\"user-cog-solid.png\",\"user-edit-solid.png\",\"user-friends-solid.png\",\"user-graduate-solid.png\",\"user-injured-solid.png\",\"user-lock-solid.png\",\"user-md-solid.png\",\"user-minus-solid.png\",\"user-ninja-solid.png\",\"user-nurse-solid.png\",\"user-plus-solid.png\",\"user-secret-solid.png\",\"user-shield-solid.png\",\"user-slash-solid.png\",\"user-solid.png\",\"user-tag-solid.png\",\"user-tie-solid.png\",\"user-times-solid.png\",\"user.png\",\"users-cog-solid.png\",\"users-solid.png\",\"usps.png\",\"ussunnah.png\",\"utensil-spoon-solid.png\",\"utensils-solid.png\",\"vaadin.png\",\"vector-square-solid.png\",\"venus-double-solid.png\",\"venus-mars-solid.png\",\"venus-solid.png\",\"viacoin.png\",\"viadeo-square.png\",\"viadeo.png\",\"vial-solid.png\",\"vials-solid.png\",\"viber.png\",\"video-slash-solid.png\",\"video-solid.png\",\"vihara-solid.png\",\"vimeo-square.png\",\"vimeo-v.png\",\"vimeo.png\",\"vine.png\",\"vk.png\",\"vnv.png\",\"voicemail-solid.png\",\"volleyball-ball-solid.png\",\"volume-down-solid.png\",\"volume-mute-solid.png\",\"volume-off-solid.png\",\"volume-up-solid.png\",\"vote-yea-solid.png\",\"vr-cardboard-solid.png\",\"vuejs.png\",\"walking-solid.png\",\"wallet-solid.png\",\"warehouse-solid.png\",\"water-solid.png\",\"wave-square-solid.png\",\"waze.png\",\"weebly.png\",\"weibo.png\",\"weight-hanging-solid.png\",\"weight-solid.png\",\"weixin.png\",\"whatsapp-square.png\",\"whatsapp.png\",\"wheelchair-solid.png\",\"whmcs.png\",\"wifi-solid.png\",\"wikipedia-w.png\",\"wind-solid.png\",\"window-close-solid.png\",\"window-close.png\",\"window-maximize-solid.png\",\"window-maximize.png\",\"window-minimize-solid.png\",\"window-minimize.png\",\"window-restore-solid.png\",\"window-restore.png\",\"windows.png\",\"wine-bottle-solid.png\",\"wine-glass-alt-solid.png\",\"wine-glass-solid.png\",\"wix.png\",\"wizards-of-the-coast.png\",\"wolf-pack-battalion.png\",\"won-sign-solid.png\",\"wordpress-simple.png\",\"wordpress.png\",\"wpbeginner.png\",\"wpexplorer.png\",\"wpforms.png\",\"wpressr.png\",\"wrench-solid.png\",\"x-ray-solid.png\",\"xbox.png\",\"xing-square.png\",\"xing.png\",\"y-combinator.png\",\"yahoo.png\",\"yammer.png\",\"yandex-international.png\",\"yandex.png\",\"yarn.png\",\"yelp.png\",\"yen-sign-solid.png\",\"yin-yang-solid.png\",\"yoast.png\",\"youtube-square.png\",\"youtube.png\",\"zhihu.png\"]}");

/***/ }),

/***/ "./src/assets/icons/icons8/categories.json":
/*!*************************************************!*\
  !*** ./src/assets/icons/icons8/categories.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Popular\",\"link\":\"free-icons\",\"icons\":[\"add-bookmark\",\"bookmark-ribbon\",\"bookmark\",\"share-2\",\"delete-sign\",\"delete-bookmark\",\"download-2\",\"edit\",\"favorites\",\"no-synchronize\",\"plus\",\"refresh\",\"remove-bookmark\",\"restart\",\"search--v1\",\"share\",\"share-3\",\"synchronize\",\"trash\",\"delete\",\"undelete\",\"upload-2\",\"document\",\"file\",\"folder-invoices--v2\",\"folder-invoices--v1\",\"image-file\",\"opened-folder\",\"picture\",\"puzzle\",\"services\",\"settings\",\"support\",\"bebo\",\"dribbble\",\"facebook-new\",\"facebook\",\"google-plus\",\"instagram-new\",\"instagram\",\"linkedin\",\"myspace\",\"myspace-squared-outlined\",\"myspace-squared\",\"pinterest\",\"reddit\",\"stumbleupon\",\"--tinder\",\"tumblr--v2\",\"tumblr--v1\",\"twitter\",\"cancel\",\"checked\",\"clock\",\"lock\",\"unlock\",\"checked-2\",\"cancel-2\",\"about\",\"box\",\"briefcase\",\"contacts\",\"external-link\",\"home\",\"info\",\"menu\",\"news\",\"binoculars\",\"calendar\",\"check-all\",\"checkmark\",\"cursor\",\"user-female\",\"for-you\",\"hand-cursor\",\"icons8-new-logo\",\"idea\",\"key\",\"mailbox-closed-flag-down\",\"music\",\"ok\",\"unchecked-circle\",\"speech-bubble\",\"sun\",\"toolbox\",\"uncheck-all\",\"user-male\",\"x2\"]},{\"name\":\"Alphabet\",\"link\":\"alphabet\",\"icons\":[\"alpha\",\"beta\",\"gamma\",\"lambda\",\"mu\",\"omega\",\"pi\",\"sigma\",\"hiragana-chi\",\"hiragana-e\",\"hiragana-fu\",\"hiragana-ha\",\"hiragana-he\",\"hiragana-hi\",\"hiragana-ho\",\"hiragana-i\",\"hiragana-ka\",\"hiragana-ke\",\"hiragana-ki\",\"hiragana-ko\",\"hiragana-ku\",\"hiragana-ma\",\"hiragana-me\",\"hiragana-mi\",\"hiragana-mo\",\"hiragana-mu\",\"hiragana-n\",\"hiragana-na\",\"hiragana-ne\",\"hiragana-ni\",\"hiragana-no\",\"hiragana-nu\",\"hiragana-o\",\"hiragana-ra\",\"hiragana-re\",\"hiragana-ri\",\"hiragana-ro\",\"hiragana-ru\",\"hiragana-sa\",\"hiragana-se\",\"hiragana-shi\",\"hiragana-so\",\"hiragana-su\",\"hiragana-ta\",\"hiragana-te\",\"hiragana-tsu\",\"hiragana-u\",\"hiragana-wa\",\"hiragana-we\",\"hiragana-wi\",\"hiragana-wo\",\"hiragana-ya\",\"hiragana-yo\",\"hiragana-yu\",\"hiragana-a\",\"hiragana-to\",\"katakana-chi\",\"katakana-e\",\"katakana-fu\",\"katakana-he\",\"katakana-hi\",\"katakana-ho\",\"katakana-i\",\"katakana-ka\",\"katakana-ke\",\"katakana-ki\",\"katakana-ko\",\"katakana-ku\",\"katakana-ma\",\"katakana-me\",\"katakana-mi\",\"katakana-mo\",\"katakana-mu\",\"katakana-n\",\"katakana-ne\",\"katakana-ni\",\"katakana-no\",\"katakana-nu\",\"katakana-o\",\"katakana-ra\",\"katakana-re\",\"katakana-ri\",\"katakana-ro\",\"katakana-ru\",\"katakana-sa\",\"katakana-se\",\"katakana-shi\",\"katakana-so\",\"katakana-su\",\"katakana-ta\",\"katakana-te\",\"katakana-tsu\",\"katakana-u\",\"katakana-wa\",\"katakana-we\",\"katakana-wi\",\"katakana-wo\"]},{\"name\":\"Animals\",\"link\":\"animals\",\"icons\":[\"bird\",\"birdhouse\",\"crow\",\"dove\",\"duck\",\"falcon\",\"flamingo\",\"flying-stork\",\"flying-stork-with-bundle\",\"hummingbird\",\"kiwi-bird\",\"nest\",\"osprey\",\"ostrich-head-in-sand\",\"owl\",\"parrot\",\"parrot-speaking\",\"peacock\",\"pelican\",\"pinguin\",\"puffin-bird\",\"sparrowhawk\",\"stork\",\"stork-with-bundle\",\"swan\",\"top-view-bird\",\"cute-termite\",\"dragon\",\"moosebear\",\"pig-with-lipstick\",\"reading-unicorn\",\"stoned-bat\",\"unicorn\",\"funny-zebra\",\"ant\",\"bee\",\"beehive\",\"bug\",\"bumblebee\",\"butterfly\",\"caterpillar\",\"cockroach\",\"dragonfly\",\"earth-worm\",\"fly\",\"grasshopper\",\"hornet-hive\",\"honeycombs\",\"hornet\",\"insect\",\"ladybird\",\"mite\",\"mosquito\",\"spider\",\"tiger-butterfly\",\"wasp\",\"bull\",\"chicken\",\"chicken-ladder\",\"cow\",\"donkey\",\"henhouse--v2\",\"henhouse--v1\",\"horse\",\"sheep2\",\"pig\",\"sheep\",\"sheep-on-bike\",\"aquarium\",\"black-cat\",\"cat\",\"cat-butt\"]},{\"name\":\"Arrows\",\"link\":\"arrows\",\"icons\":[\"advance\",\"forward-arrow\",\"rotate-right-1-1-1\",\"redo\",\"reply-all-arrow\",\"reply-arrow\",\"return\",\"rotate\",\"rotate-left\",\"rotate-right\",\"swap\",\"u-turn-to-left\",\"u-turn-to-right\",\"undo\",\"arrow\",\"long-arrow-down\",\"left-up2--v2\",\"curly-arrow\",\"down\",\"down-left-arrow\",\"down-left--v1\",\"down-right-arrow\",\"down-right--v1\",\"left\",\"left-down2\",\"long-arrow-left\",\"long-arrow-up\",\"right\",\"long-arrow-right\",\"right-up2\",\"right-down2\",\"up\",\"up-left-arrow\",\"up-left\",\"up-right-arrow\",\"up-right\",\"back--v1\",\"collapse-arrow--v2\",\"collapse-arrow--v1\",\"expand-arrow--v2\",\"expand-arrow--v1\",\"forward--v1\",\"circled-chevron-left\",\"chevron\",\"chevron-down\",\"chevron-left\",\"chevron-right\",\"chevron-up\",\"circled-chevron-down\",\"circled-chevron-right\",\"circled-chevron-up\",\"circled-left-2\",\"circled-down\",\"circled-down-left\",\"circled-down-left-2\",\"circled-down-right\",\"circled-down-right-2\",\"circled-right\",\"circled-up-left\",\"circled-up-right\",\"circled-up-right-2\",\"circled-up-left-2\",\"circled-right-2\",\"circled-left\",\"circled-down-2\",\"circled-up-2\",\"circled-up\",\"right3\",\"down3\",\"down2\",\"left2\",\"left3\",\"right2\",\"u-turn\",\"up2\",\"up3\",\"sorting-arrows-horizontal\",\"double-down\",\"double-left\",\"double-right\",\"double-up\",\"sorting-arrows\",\"compress\",\"resize-four-directions\",\"resize-diagonal\",\"resize-horizontal\",\"resize-vertical\",\"split-horizontal\",\"merge-horizontal\",\"merge-vertical\",\"split-vertical\",\"down-squared--v2\",\"down-squared--v1\",\"left-squared--v2\",\"left-squared--v1\",\"right-squared--v2\",\"right-squared--v1\"]},{\"name\":\"Astrology\",\"link\":\"astrology\",\"icons\":[\"year-of-monkey\",\"year-of-rat\",\"year-of-pig\",\"year-of-dog\",\"year-of-dragon\",\"year-of-goat\",\"year-of-horse\",\"year-of-ox\",\"year-of-rabbit\",\"year-of-rooster\",\"year-of-snake\",\"year-of-tiger\",\"air-element\",\"earth-element\",\"fire-element\",\"water-element\",\"crescent-moon\",\"first-quarter\",\"full-moon\",\"last-quarter\",\"moon\",\"bright-moon\",\"new-moon\",\"waning-crescent\",\"waning-gibbous\",\"waxing-crescent\",\"waxing-gibbous\",\"earth-symbol\",\"jupiter-symbol\",\"mars-symbol\",\"mercury\",\"moon-symbol\",\"neptune-symbol\",\"saturn-symbol\",\"sun-symbol\",\"uranus-symbol\",\"venus-symbol\",\"crystal-ball\",\"fortune-teller\",\"star\",\"autumn\",\"spring\",\"summer\",\"winter\",\"aquarius\",\"aries\",\"cancer\",\"capricorn\",\"gemini\",\"leo\",\"libra\",\"pisces\",\"sagittarius\",\"scorpio\",\"taurus\",\"virgo\"]},{\"name\":\"Baby\",\"link\":\"baby\",\"icons\":[\"baby-bottle\",\"baby-car-seat\",\"baby-feet\",\"baby-footprints-path\",\"babys-room\",\"bib\",\"breastfeeding\",\"-chair\",\"crib\",\"crying-baby\",\"day-care\",\"fairytale\",\"infant-massage\",\"keep-away-from-children\",\"mommy-and-me-classes\",\"moms\",\"nanny\",\"napping\",\"nappy\",\"not-suitable-for-children-under-age-x\",\"pacifier\",\"powder\",\"preschool\",\"radio-nanny\",\"romper\",\"sleep\",\"sleeping-baby\",\"stroller--v1\",\"baby\",\"children-faces\",\"boy\",\"children--v2\",\"children--v1\",\"family\",\"father\",\"girl\",\"mother\",\"old-man\",\"old-woman\",\"parenting\",\"pregnant\",\"date\",\"working-mom\",\"flying-stork\",\"flying-stork-with-bundle\",\"stork\",\"stork-with-bundle\",\"animation\",\"brick\",\"cheburashka\",\"pokemon\",\"float\",\"heart-balloon\",\"kite\",\"lego-head\",\"nerf-gun\",\"paper-plane\",\"party-baloon\",\"party-baloons\",\"paper-windmill\",\"pokeball--v1\",\"rattle\",\"sandbox2\",\"swingset\",\"teddy-bear\",\"tricycle\",\"bicycle-trailer\"]},{\"name\":\"Beauty\",\"link\":\"beauty\",\"icons\":[\"barber-brush\",\"blade\",\"electric-shaver\",\"modern-razor\",\"shaving-cream\",\"straight-razor\",\"cosmetic-brush\",\"deodorant-stick\",\"face-powder\",\"foundation-makeup\",\"lip-gloss\",\"lipstick\",\"eye-shadows--v2\",\"eye-shadows--v1\",\"mascara\",\"mirror\",\"nail-polish\",\"perfume\",\"perfume-bottle--v1\",\"shampoo\",\"cosmetic-soap\",\"deodorant-spray\",\"cream-tube\",\"cleansing\",\"peeling\",\"waxing\",\"long-beard\",\"goatee\",\"mustache\",\"short-beard\",\"sideburns\",\"stubble\",\"van-dyke\",\"barber-chair\",\"barber-clippers\",\"barber-pole\",\"barber-scissors\",\"barbershop\",\"comb\",\"hair-brush\",\"hair-clip\",\"hair-dryer\",\"hair-washing-sink\",\"hair-band\",\"pigtails-haircut\",\"scrunchy\",\"womans-hair\",\"chaplin-mustache\",\"chevron-mustache\",\"dali-mustache\",\"dupont-mustache\",\"einstein-mustache\",\"english-mustache\",\"frank-zappa-mustache\",\"fu-manchu-mustache\",\"george-michael-mustache-----\",\"ghandhi-mustache\",\"handlebar-mustache\",\"hercule-poirot-mustache\",\"horseshoe-mustache\",\"imperial-mustache\",\"jose-bove-mustache\",\"lampshade-mustache\",\"lars-the-viking-mustache\",\"mario-mustache\",\"motorhead-mustache\",\"asterix-mustache\",\"painters-mustache\",\"pencil-mustache\",\"pyramidal-mustache\",\"stalin-mustache\",\"walrus-mustache\",\"wario-mustache\",\"manicure\",\"nails\",\"pedicure\",\"aromatic-stick\",\"alluminium-massagetable\",\"spa-candle\",\"spa-flower\",\"stones\",\"wooden-massagetable\",\"eyebrow\",\"lips\",\"person-in-a-mirror\",\"smiling-mouth\",\"try-and-buy\"]},{\"name\":\"Business\",\"link\":\"business\",\"icons\":[\"bonds\",\"collectibles\",\"commodity\",\"dividends\",\"equity-security\",\"stock-share\",\"banner\",\"branding\",\"logo\",\"accuracy\",\"address-book\",\"answers\",\"attach-resume-female\",\"attach-resume-male\",\"brainstorm\",\"business-network\",\"butting-in\",\"client-management\",\"cloud-business\",\"collaboration\",\"communication\",\"conference\",\"conflict\",\"business-contact\",\"add-contact-to-company\",\"customer-insight\",\"customer-insights-manager\",\"demand\",\"diamond-care-1\",\"engage\",\"exhibitor\",\"expand-influence\",\"faq\",\"no-hidden-fee\",\"feedback\",\"group-task\",\"idea-bank\",\"inspection\",\"internet\",\"invite\",\"mail-advertising\",\"mail-contact\",\"meeting-room\",\"sales-channels\",\"new-contact\",\"no-hidden-fee-british-pound\",\"omnichannel-1\",\"omnichannel\",\"organization-chart-people\",\"conference-call\",\"people-working-together\",\"phone-contact\",\"privacy\",\"question-group\",\"questions\",\"requirement\",\"reseller\",\"search-client\",\"sorting-answers\",\"speaker-notes\",\"speaker-notes-off\",\"teamwork\",\"trust\",\"u-shaped-style\",\"video-conference\",\"businessman\",\"businesswoman\",\"collaboration-female-male\",\"landlord\",\"manager\",\"employee-card\",\"name-tag-woman\",\"name-tag-woman-horizontal\",\"online-support\",\"person-growth\",\"personal-growth\",\"purposeful-man\",\"purposeful-woman\",\"salary-female\",\"salary-male\",\"security-pass\",\"supplier\",\"technical-support\",\"vip\",\"add-reminder\",\"alarms\",\"appointment-scheduling\",\"approval\",\"bad-idea\",\"collect\",\"enterprise-resource-planning\",\"estimates\",\"expired\"]},{\"name\":\"Characters\",\"link\":\"characters\",\"icons\":[\"blackblood\",\"hummerstein\",\"joe-pineapples\",\"mek-quake\",\"mongrol\",\"finn\",\"ice-king\",\"jake\",\"lumpy-space-princess\",\"marceline\",\"princess-bubblegum\",\"bill-cipher\",\"brave\",\"brutus\",\"cheburashka\",\"doraemon\",\"genie\",\"madagaskar\",\"minion-1\",\"minion-2\",\"mokona\",\"moon-man\",\"ninja-turtle\",\"olive-oyl\",\"popeye\",\"rick-sanchez\",\"sailor-moon\",\"saitama\",\"woody-woodpecker\",\"batman-old\",\"one-ring\",\"pixar-lamp\",\"pixar-lamp-2\",\"roll-no-21\",\"spiderman-new\",\"superman\",\"the-flash-sign\",\"x-men\",\"joker-suicide-squad\",\"doctor-fate-helmet\",\"day-of-the-tentacle\",\"jetpack-joyride\",\"sonic-the-hedgehog-1\",\"super-mario\",\"waluigi\",\"arryn-house\",\"baratheon-house\",\"greyjoy-house\",\"house-lannister\",\"house-stark\",\"martell-house\",\"targaryen-house\",\"tully-house\",\"tyrell-house\",\"black-panther-mask\",\"captain-america\",\"hawkeye\",\"hawkeye-symbol\",\"hulk\",\"iron-man\",\"anonymous-mask\",\"asterix\",\"fsociety-mask\",\"lamp-of-alladin\",\"grey\",\"indiana-jones\",\"jason-voorhees\",\"magic-lamp\",\"martian\",\"mummy\",\"pennywise\",\"predator\",\"scream\",\"victoria-secret-angel\",\"walter-white\",\"naruto\",\"darth-vader\",\"empire\",\"lightsaber\",\"r2-d2\",\"rebel\",\"bart-simpson\",\"homer-simpson\",\"lisa-simpson\",\"maggie-simpson\",\"marge-simpson\"]},{\"name\":\"Cinema\",\"link\":\"cinema\",\"icons\":[\"blackblood\",\"hummerstein\",\"joe-pineapples\",\"mek-quake\",\"mongrol\",\"finn\",\"ice-king\",\"jake\",\"lumpy-space-princess\",\"marceline\",\"princess-bubblegum\",\"eyes-cartoon\",\"happy-eyes\",\"bill-cipher\",\"brave\",\"brutus\",\"cheburashka\",\"doraemon\",\"madagaskar\",\"minion-1\",\"minion-2\",\"mokona\",\"ninja-turtle\",\"olive-oyl\",\"popeye\",\"rick-sanchez\",\"sailor-moon\",\"saitama\",\"woody-woodpecker\",\"recent-celebrity\",\"red-carpet\",\"anonymous-mask\",\"cartoon-boy\",\"dwarf\",\"fsociety-mask\",\"genie\",\"lamp-of-alladin\",\"magic-lamp\",\"martian\",\"moon-man\",\"mummy\",\"pirate\",\"scary-tree\",\"unicorn\",\"victoria-secret-angel\",\"action\",\"adventures\",\"spy-female\",\"animation\",\"action2\",\"comedy\",\"comedy2\",\"crime\",\"detective\",\"documentary\",\"drama\",\"fantasy\",\"film-noir\",\"historical\",\"horror\",\"musical\",\"novel\",\"sci-fi\",\"short\",\"sport\",\"spy-male\",\"thriller\",\"western\",\"bam\",\"boom\",\"kaboom\",\"pow\",\"joker-suicide-squad\",\"doctor-fate-helmet\",\"bottom\",\"breast\",\"penis\",\"female-back\",\"panties\",\"vagina\",\"arryn-house\",\"baratheon-house\",\"greyjoy-house\",\"house-lannister\",\"house-stark\",\"martell-house\",\"targaryen-house\"]},{\"name\":\"City\",\"link\":\"city\",\"icons\":[\"big-drop\",\"party-hat-with-stars\",\"bumper-boat\",\"electric-bumper-car\",\"carousel\",\"circus-tent\",\"confetti\",\"cotton-candy\",\"ferris-wheel\",\"fountain\",\"heart-balloon\",\"trampoline-park\",\"rabbit-in-hat\",\"swing-ride\",\"party-baloon\",\"party-baloons\",\"party-hat\",\"playground\",\"roller-coaster\",\"roller-coaster-car\",\"seesaw\",\"skeeball\",\"park-concert-shell\",\"swinging-boat\",\"swingset\",\"telescope\",\"theme-park\",\"water-park\",\"bank-building\",\"building-with-rooftop-terrace\",\"castle\",\"cinema-\",\"city\",\"city-buildings\",\"company\",\"environmental-planning\",\"non-profit-organisation\",\"palace\",\"parking-and-1st-floor\",\"parking-and-2nd-floor\",\"parking-and-3rd-floor\",\"parking-and-4th-floor\",\"parking-and-5th-floor\",\"parking-and-penthouse\",\"shopping-mall\",\"skyscrapers\",\"storey\",\"autonomous-vehicles\",\"bus-stop\",\"city-railway-station\",\"electric-bike\",\"segway\",\"tourniquet\",\"turnstile\",\"wharf\",\"cosh-weapon\",\"fat-cop\",\"bar\",\"cafe\",\"restaurant-membership-card\",\"fast-food-drive-thru\",\"restaurant-pickup\",\"meal\",\"poolside-bar\",\"reservation\",\"reservation-2\",\"restaurant\",\"restaurant-building\",\"restaurant-menu\",\"restaurant-table\"]},{\"name\":\"Clothing\",\"link\":\"clothing\",\"icons\":[\"arm-bracer\",\"fan-2\",\"christmas-mitten\",\"mittens\",\"scarf\",\"socks\",\"umbrella\",\"bag-front-view\",\"bag-brand\",\"bag-interior\",\"bag-back-view\",\"bag-diagonal-view\",\"purse-back-view\",\"purse-front-view\",\"purse-interior\",\"warranty-card\",\"red-purse\",\"bag-side-view\",\"zipper-details\",\"basketball-jersey\",\"bulletproof-vest\",\"clothes-tag\",\"coat\",\"clothes-material\",\"fireman-coat\",\"jacket\",\"jeans\",\"jumper\",\"kimono\",\"doctors-laboratory-coat\",\"lederhosen\",\"mens-pajama\",\"romper\",\"shirt\",\"shorts\",\"skirt\",\"suit\",\"t-shirt--v1\",\"tights\",\"trousers\",\"vest\",\"womens-pajama\",\"womens-suit--v1\",\"womens-t-shirt\",\"dress-front-view\",\"dress-back-view\",\"little-black-dress\",\"modelled-dress\",\"slip-dress\",\"wedding-dress\",\"glasses\",\"monocle\",\"sun-glasses\",\"vintage-glasses\",\"air-pilot-hat\",\"anzac-slouch-hat\",\"asian-hat\",\"baseball-cap\",\"beanie\",\"beret\",\"black-hat\",\"bowler-hat\",\"chef-hat\",\"german-hat\",\"trilby\",\"helmet\",\"kokoshnik\",\"motorbike-helmet\",\"panama-hat\",\"recent-celebrity\",\"safari-hat\",\"santas-hat\",\"sombrero\",\"swimming-cap\",\"ushanka\",\"viking-helmet\",\"witch\",\"wizard\",\"bangles\",\"diamond--v1\",\"diamond-ring\",\"earring\"]},{\"name\":\"Computer Hardware\",\"link\":\"computer-hardware\",\"icons\":[\"arduino-uno-board\",\"motherboard\",\"rev-robotics-expansion-hub\",\"video-card\",\"dvi\",\"ethernet-off\",\"ethernet-on\",\"firewire\",\"hdmi-cable\",\"input-component\",\"pc-docking-station\",\"power-over-ethernet\",\"rca\",\"rs-232-female\",\"rs-232-male\",\"s-video\",\"scart\",\"thunderbolt\",\"toslink\",\"usb-connector\",\"usb-micro-a\",\"usb-micro-b\",\"usb-mini-a\",\"usb-mini-b\",\"vga\",\"c-drive\",\"c-drive-2\",\"hdd\",\"master\",\"memory-slot\",\"micro-sd\",\"network-drive\",\"sd\",\"ssd\",\"slave\",\"tape-drive\",\"usb-memory-stick\",\"blu-ray\",\"burn-cd\",\"cd\",\"cd-logo\",\"dvd-logo\",\"region-code\",\"0-key\",\"1-key\",\"2-key\",\"3-key\",\"4-key\",\"5-key\",\"6-key\",\"7-key\",\"8-key\",\"9-key\",\"alt\",\"altgr\",\"asterisk-key\",\"backspace\",\"cmd\",\"ctrl\",\"enter-key\",\"esc\",\"hashtag-key\",\"phone-keys\",\"shift\",\"ten-keys\",\"caps-lock\",\"command\",\"control\",\"delete-key\",\"enter-mac-key\",\"esc-mac\",\"function-mac\",\"option\",\"shift-mac\",\"tab-mac\"]},{\"name\":\"Crime\",\"link\":\"crime\",\"icons\":[\"burglary\",\"car-theft\",\"fat-cop\",\"fraud\",\"hacking\",\"identity-theft\",\"phishing\",\"pickpocket\",\"prisoner\",\"racism\",\"bank-robbery\",\"slender-man\",\"tied-hands\",\"stick-fighting\",\"kicking\",\"punching\",\"jail-cell-door--v2\",\"jail-cell-door--v1\",\"jail-door\",\"jail-doors-with-bars\",\"cosh-weapon\",\"detective\",\"hand-held-metal-detector\",\"handcuffs\",\"police-badge\",\"siren\",\"broken-bottle\",\"crime\",\"horror\",\"evidence\"]},{\"name\":\"Culture\",\"link\":\"cultures\",\"icons\":[\"aztec-warpaint\",\"american-indians-aztec\",\"aztec-headdress\",\"balance-symbol\",\"bandoneon\",\"billie-holiday\",\"brazil-nut\",\"chicago\",\"chichen-itza\",\"chili-pepper\",\"dreamcatcher\",\"feather\",\"golden-fever\",\"grand-canyon\",\"maracas\",\"mardi-gras-mask\",\"mate\",\"new-york\",\"peace-pipe\",\"powwow-drum\",\"american-indians-seminole\",\"seminole-headdress\",\"seminole-warpaint\",\"sombrero\",\"south-dakota-state-bird\",\"the-washington-post-pinocchio\",\"tomahawk\",\"us-capitol\",\"us-music\",\"virgin-of-quito\",\"collectibles\",\"da-vinci\",\"dali\",\"easel\",\"edgar-allan-poe\",\"edvard-munch\",\"frida-kahlo\",\"lettering\",\"magritte\",\"mark-twain\",\"modern-art\",\"neil-gaiman\",\"oscar-wilde\",\"picasso\",\"stephen-king\",\"tribal-symbols\",\"william-shakespeare\",\"asian-hat\",\"calligraphy-brush\",\"gong\",\"great-wall\",\"fan-2\",\"lantern\",\"origami\",\"pagoda\",\"shanghai-pearl-tower\",\"beijing\",\"yin-yang\",\"zen-symbol\",\"cross\",\"lilith-symbol\",\"lucifer-sigil\",\"star-crescent\",\"koran--v1\",\"ramadan\",\"seed-of-life\",\"solar-cross\",\"third-eye-symbol\",\"ankh\",\"anubis\",\"pyramids\",\"baguette\",\"beret\",\"croissant\",\"eiffel-tower\",\"french-music\",\"louvre-pyramid\",\"notre-dame\",\"triumphal-arch\",\"autobahn\",\"bavarian-beer-mug\",\"berlin-tv-tower\",\"brandenburg-gate\",\"bavarian-pretzel\",\"cologne-cathedral\"]},{\"name\":\"DIY\",\"link\":\"diy\",\"icons\":[\"garden-shears\",\"pitchfork\",\"plow\",\"scythe\",\"sickle\",\"spade\",\"garden-gloves\",\"deadly-spray\",\"lawn-mower\",\"mosquito-coil\",\"paper-bag-with-seeds\",\"hand-planting\",\"water-hose\",\"watering-can\",\"well\",\"wheelbarrow\",\"yard-work\",\"air-staple-gun\",\"chainsaw\",\"circular-saw\",\"construction-carpenter-ruler\",\"construction-trowel\",\"craft-work\",\"crowbar\",\"dowel\",\"drill\",\"full-tool-storage-box-\",\"grinding-machine\",\"hacksaw\",\"hammer\",\"hand-plane\",\"hatchet\",\"jig-saw\",\"nail\",\"nailer\",\"pliers\",\"putty-knife\",\"saw\",\"saw-blade\",\"screw\",\"screwdriver\",\"shpatel\",\"sledgehammer\",\"staple-gun\",\"tape-measure\",\"toolbox\",\"trowel\",\"vise\",\"wide-shpatel\",\"wooden-hand-plane\",\"clew\",\"knitted-frog\",\"knitting\",\"ball-winder\",\"stitch-marker\",\"umbrella-swift\",\"knitting-ball\",\"color-palette\",\"no-paint\",\"paint-brush\",\"paint-bucket\",\"paint-bucket-with-label\",\"paint-bucket-with-qr\",\"roller-brush\",\"solid-paint\",\"metallic-paint\",\"bobbin\",\"sewing-scissors\",\"tailoring-for-men\",\"needle\",\"overlock-machine\",\"pin-cushion\",\"button--v1\",\"sewing-machine\",\"tape-measure-sewing\",\"tailor-shirt-pattern\",\"tailoring-for-women\",\"thimble\",\"branding-iron\",\"cement-bag\",\"potters-wheel\",\"pottery\",\"reel\"]},{\"name\":\"Data\",\"link\":\"data\",\"icons\":[\"positive-dynamic\",\"area-chart\",\"bar-chart\",\"average-value\",\"blockchain-technology\",\"combo-chart\",\"negative-dynamic\",\"doughnut-chart\",\"flow-chart\",\"genealogy\",\"heat-map\",\"maximum-value\",\"improvement\",\"line-chart\",\"maslow-pyramid\",\"mind-map\",\"minimum-value\",\"normal-distribution-histogram\",\"pie-chart\",\"radar-plot\",\"scatter-plot\",\"timeline\",\"venn-diagram\",\"vertical-timeline\",\"web-analystics\",\"workflow\",\"activity-history\",\"broadcasting\",\"change\",\"connected-no-data\",\"data-in-both-directions\",\"transfer-between-users\",\"idea-sharing\",\"incoming-data\",\"logic-data-types\",\"many-to-many\",\"multicast\",\"one-to-many\",\"one-to-one\",\"outgoing-data\",\"unicast\",\"add-database\",\"big-data\",\"data-backup\",\"data-encryption\",\"data-protection\",\"data-provider\",\"data-recovery\",\"database\",\"data-configuration\",\"database-backup\",\"database-import\",\"database-restore\",\"accept-database\",\"delete-database\",\"0-degrees\",\"120-degrees--v1\",\"135-degrees\",\"150-degrees\",\"180-degrees--v1\",\"210-degrees\",\"225-degrees\",\"240-degrees\",\"270-degrees--v1\",\"30-degrees\",\"300-degrees\",\"315-degrees\",\"330-degrees\",\"360-degrees\",\"45-degrees\",\"60-degrees\",\"90-degrees\",\"cloud-storage\",\"hdd\",\"master\",\"micro-sd\",\"sd\",\"ssd\",\"private-cloud-storage\",\"slave\",\"tape-drive\",\"blu-ray\",\"burn-cd\",\"cd\",\"abridged-edition--v2\",\"abridged-edition--v1\"]},{\"name\":\"Drinks\",\"link\":\"drinks\",\"icons\":[\"bar\",\"champagne\",\"champagne-bottle\",\"cocktail\",\"coconut-cocktail\",\"poolside-bar\",\"vodka\",\"vodka-shot\",\"wine\",\"wine-bottle\",\"wine-glass\",\"beer\",\"beer-bottle\",\"beer-can\",\"beer-glass\",\"beer-keg\",\"bavarian-beer-mug\",\"beer-pump\",\"beer-bottle-cap\",\"guinness-beer--v1\",\"bavarian-wheat-beer\",\"wooden-beer-keg\",\"cafe\",\"coffee\",\"coffee-pot\",\"coffee-to-go\",\"crumpled-coffee-cup\",\"espresso-cup\",\"french-press\",\"mate\",\"moka-pot\",\"tea\",\"tea-cup\",\"big-milkshake\",\"milk\",\"milk-bottle\",\"milkshake\",\"bottle-of-water\",\"orange-juice\",\"soda-cup\",\"soda-bottle\",\"sport-bottle\"]},{\"name\":\"Ecommerce\",\"link\":\"ecommerce\",\"icons\":[\"bank-cards--v1\",\"card-exchange\",\"card-security\",\"card-security-code\",\"card-verification-value\",\"bank-card-back-side\",\"bank-card-front-side\",\"token-card-code\",\"check\",\"invoice\",\"order-history\",\"purchase-order\",\"add-shopping-cart\",\"auction\",\"shopping-basket-2\",\"budget\",\"buy\",\"buy-upgrade\",\"shopping-cart-loaded\",\"old-cash-register\",\"cash-register\",\"checkout\",\"clear-shopping-cart\",\"click-and-collect\",\"e-commerce\",\"face-id\",\"handshake\",\"move-stock\",\"online-money-transfer\",\"online-payment-\",\"out-of-stock\",\"pos-terminal\",\"paid\",\"pay-wall\",\"procurement\",\"product\",\"receipt\",\"redeem\",\"return-merchandise-authorization\",\"return-purchase\",\"scan-stock\",\"sell\",\"sell-stock\",\"shop\",\"shopping-bag\",\"shopping-basket\",\"shopping-cart\",\"supply-chain\",\"try-and-buy\",\"barcode\",\"barcode-scanner-2\",\"barcode-scanner\",\"data-matrix-code\",\"no-barcode\",\"qr-code\",\"refresh-barcode\",\"peso-symbol\",\"adr\",\"do-not-drop\",\"cash-on-delivery\",\"delivery\",\"do-not-stack\",\"do-not-tilt\",\"drop-shipping\",\"fragile\",\"free-shipping\",\"handle-with-care\"]},{\"name\":\"Editing\",\"link\":\"editing\",\"icons\":[\"3d-scale\",\"3d-select--v1\",\"3d-rotate\",\"left-view\",\"front-view\",\"mesh\",\"orthogonal-view\",\"sphere\",\"top-view\",\"align-bottom\",\"align-center\",\"align-justify\",\"align-left\",\"align-right\",\"align-top\",\"baseline\",\"bring-forward\",\"bring-to-front\",\"front-sorting\",\"send-backward\",\"send-to-back\",\"back-sorting\",\"parse-from-clipboard\",\"compare\",\"multi-edit\",\"copy\",\"copy-2\",\"create-new\",\"delete-forever\",\"document-header\",\"edit\",\"email-document\",\"fold\",\"document-footer\",\"header\",\"insert-page\",\"open-document\",\"paste\",\"paste-special\",\"project-setup\",\"redo\",\"restore-page\",\"separate-document\",\"sign-up\",\"submit-document\",\"title\",\"delete\",\"undo\",\"unfold\",\"circled\",\"circled-notch\",\"circle-thin--v1\",\"ellipse\",\"filled-circle\",\"hexagon\",\"impossible-shapes\",\"kite-shape\",\"metamorphose\",\"octagon\",\"ellipse-stroked--v1\",\"penrose-square\",\"pentagon\",\"polygone\",\"polyline\",\"rectangle\",\"rectangle-stroked\",\"rhomboid-shape\",\"rhombus\",\"rounded-rectangle-stroked\",\"rounded-rectangle\",\"starburst-shape\",\"triangle-stroked\",\"automatic-brightness\",\"automatic-contrast\",\"ball-point-pen\",\"black-and-white\"]},{\"name\":\"Emoji\",\"link\":\"emoji\",\"icons\":[\"alien\",\"check-inbox--v1\",\"crazy\",\"diamond--v1\",\"eggplant\",\"fingers-crossed\",\"heart-with-mouse\",\"swearing-male\",\"flex-biceps\",\"nerd\",\"png\",\"sword\",\"table\",\"tongue-out\",\"unicorn\"]},{\"name\":\"Files\",\"link\":\"files\",\"icons\":[\"7zip\",\"archive\",\"create-archive\",\"delete-archive\",\"open-archive\",\"rar\",\"save-archive\",\"tar\",\"zip\",\"aac\",\"mp3\",\"ogg\",\"wav\",\"wma\",\"audio-book\",\"cbr\",\"cbz\",\"epub\",\"fb2--v2\",\"fb2--v1\",\"mobi\",\"read\",\"3fr\",\"cr2\",\"dng\",\"fff\",\"nef\",\"raw\",\"12c\",\"db-2--v2\",\"db-2--v1\",\"mysql\",\"rrp\",\"sql\",\"apk\",\"dmg\",\"exe\",\"audio-file\",\"code-file\",\"document-1\",\"document\",\"hot-article\",\"image-file\",\"policy-document\",\"video-file\",\"otf\",\"ttf\",\"woff\",\"gis\",\"gpx\",\"kml\",\"kmz\",\"nmea\",\"osm\",\"ai\",\"eps\",\"gif\",\"j2k\",\"jp2\",\"jpg\",\"png\",\"ps\",\"psd\",\"tif\",\"webp\",\"pdf-2--v1\",\"pdf\",\"ppt\",\"word\",\"xls\",\"add-file\",\"add-list\",\"favourite-file\",\"check-file\",\"compare\",\"copy\",\"create-new\",\"delete-file\",\"diff-files\",\"edit-file\",\"export-csv\",\"export-pdf\",\"file-delete\",\"file-preview\",\"import-csv\",\"mark-as-favorite\",\"merge-files\",\"new-by-copy--v1\",\"new-file\",\"project-setup\",\"restore-page\",\"split-files\",\"submit-document\"]},{\"name\":\"Finance\",\"link\":\"finance\",\"icons\":[\"bonds\",\"collectibles\",\"commodity\",\"dividends\",\"equity-security\",\"stock-share\",\"bank-card-missing\",\"bank-cards--v1\",\"card-exchange\",\"card-in-use\",\"card-security\",\"card-security-code\",\"card-verification-value\",\"certificate\",\"bank-card-back-side\",\"credit-control\",\"bank-card-front-side\",\"insert-card\",\"insert-credit-card\",\"mastercard-credit-card\",\"token-card-code\",\"bill\",\"billing\",\"bounced-check\",\"check-book\",\"invoice\",\"paid-bill\",\"paid-bill-stamp\",\"paycheque\",\"payment-history\",\"proforma-invoice\",\"purchase-order\",\"receipt\",\"receipt-and-change\",\"tax\",\"money-bag-franc\",\"cash\",\"cash-\",\"cash-in-hand\",\"coins\",\"money-bag-euro\",\"money\",\"money-bag\",\"money-box\",\"money-bag-pound\",\"money-yours\",\"banknotes\",\"money-bag-yen\",\"purse\",\"stack-of-money\",\"wallet\",\"withdrawal-limit\",\"bitcoin\",\"cardano\",\"bitcoin-exchange--v1\"]},{\"name\":\"Flags\",\"link\":\"flags\",\"icons\":[\"brazil\",\"cyprus\",\"flag-of-afghanistan\",\"great-britain\",\"japan\",\"empty-flag\",\"flag\",\"flag-2\",\"horizontal-flag\",\"orienteering-control-flag\",\"cross-flag\",\"vertical-flag\",\"brazilian-imperia\",\"flag-of-europe\"]},{\"name\":\"Folders\",\"link\":\"folders\",\"icons\":[\"add-folder\",\"delete-folder\",\"file-submodule\",\"folder-invoices--v2\",\"folder-invoices--v1\",\"opened-folder\",\"archive-folder\",\"browse-folder\",\"burn-folder\",\"documents-folder\",\"downloads-folder\",\"extensions-folder--v1\",\"likes-folder\",\"images-folder\",\"internet-folder--v1\",\"movies-folder--v2\",\"movies-folder--v1\",\"photos-folder\",\"pictures-folder\",\"porn-folder--v1\",\"symlink-directory\",\"user-folder--v3\",\"battelefied\",\"binders-folder\",\"moleskine\",\"my-computer\",\"shared-folder\"]},{\"name\":\"Food\",\"link\":\"food\",\"icons\":[\"kawaii-bread-1\",\"kawaii-coffee\",\"kawaii-cupcake\",\"kawaii-egg\",\"kawaii-french-fries\",\"kawaii-ice-cream\",\"kawaii-pizza\",\"kawaii-soda\",\"kawaii-steak\",\"kawaii-sushi\",\"kawaii-taco\",\"baguette\",\"bread\",\"bread-loaf\",\"bavarian-pretzel\",\"gingerbread-house\",\"merry-pie\",\"pretzel\",\"cherry\",\"grapes\",\"raspberry\",\"strawberry\",\"banana-split\",\"candy\",\"chocolate-bar\",\"cotton-candy\",\"ice-cream-cone\",\"ice-cream-bowl\",\"nonya-kueh\",\"burger-dip\",\"bento\",\"cheese\",\"dim-sum\",\"dolmades\",\"food-and-wine\",\"guacamole\",\"noodles\",\"omlette\",\"paella\",\"pancake\",\"porridge\",\"rice-bowl\",\"salad\",\"salmon-sushi\",\"sauce\",\"seafood\",\"spaghetti\",\"spam-can\",\"sunny-side-up-eggs\",\"sushi\",\"tapas\",\"tiffin\",\"tin-can\",\"toast\",\"milk-bottle\",\"box-of-cereal\",\"burrito\",\"french-fries\",\"fried-chicken\",\"hamburger\",\"hot-dog\",\"nachos\"]},{\"name\":\"Gaming\",\"link\":\"gaming\",\"icons\":[\"armored-boot\",\"armored-breastplate\",\"knight-shield\",\"armored-gauntlet\",\"shield\",\"armored-helmet\",\"10-of-clubs\",\"10-of-diamonds\",\"10-of-hearts\",\"10-of-spades\",\"2-of-clubs\",\"2-of-diamonds\",\"2-of-hearts\",\"2-of-spades\",\"3-of-clubs\",\"3-of-diamonds\",\"3-of-hearts\",\"3-of-spades\",\"4-of-clubs\",\"4-of-diamonds\",\"4-of-hearts\",\"4-of-spades\",\"5-of-clubs\",\"5-of-diamonds\",\"5-of-hearts\",\"5-of-spades\",\"6-of-clubs\",\"6-of-diamonds\",\"6-of-hearts\",\"6-of-spades\",\"7-of-clubs\",\"7-of-diamonds\",\"7-of-hearts\",\"7-of-spades\",\"8-of-clubs\",\"8-of-diamonds\",\"8-of-hearts\",\"8-of-spades\",\"9-of-clubs\",\"9-of-diamonds\",\"9-of-hearts\",\"9-of-spades\",\"ace-of-clubs\",\"ace-of-diamonds\",\"ace-of-hearts\",\"ace-of-spades\",\"jack-of-clubs\",\"jack-of-diamonds\",\"jack-of-hearts\",\"jack-of-spades\",\"joker-card\",\"king-of-clubs\",\"king-of-diamonds\",\"king-of-hearts\",\"king-of-spades\",\"queen-of-clubs\",\"queen-of-diamonds\",\"queen-of-hearts\",\"queen-of-spades\",\"clubs\",\"diamonds\",\"hearts\",\"joker\",\"spades\",\"cards\",\"chip--v1\",\"clover\",\"horseshoe\",\"magnet\",\"put-in-motion\",\"roulette\",\"slot-machine\",\"three-leaf-clover\",\"trigger-mode\",\"triggering\",\"win\",\"bishop\",\"king\",\"knight\",\"pawn\",\"queen\",\"rook\",\"ahri\",\"bad-piggies\",\"battelefied\",\"bendy\",\"brawl-stars\",\"clash-of-clans\",\"crash-bandicoot\",\"cuphead\",\"day-of-the-tentacle\",\"dota\",\"ds3-tool\",\"ea-sports\"]},{\"name\":\"Hands\",\"link\":\"hands\",\"icons\":[\"call-me\",\"clenched-fist\",\"connectivity-and-help\",\"do-not-touch\",\"easy\",\"facebook-like\",\"finger-and-thumb\",\"fingers-crossed\",\"angry-fist\",\"four-fingers\",\"hand\",\"hand-down\",\"hand-left\",\"hand-lizard\",\"hand-peace\",\"hand-right\",\"hand-rock\",\"hand-scissors\",\"hand-up\",\"handshake\",\"hang-10\",\"hang-ten\",\"helping-hand\",\"high-five\",\"middle-finger\",\"ok-hand\",\"one-finger\",\"pray\",\"promise\",\"forward-punch\",\"reminder\",\"scout-sign\",\"so-so\",\"star-trek-gesture\",\"three-fingers\",\"thumbs-down\",\"thumb-up\",\"thumbs-up-down\",\"two-fingers\",\"two-hands\",\"volunteering\",\"sign-language-interpretation\",\"sign-language-a\",\"sign-language-b\",\"sign-language-c\",\"sign-language-d\",\"sign-language-e\",\"sign-language-f\",\"sign-language-g\",\"sign-language-h\",\"sign-language-i\",\"sign-language-j\",\"sign-language-k\",\"sign-language-l\",\"sign-language-m\",\"sign-language-n\",\"sign-language-o\",\"sign-language-p\",\"sign-language-q\",\"sign-language-r\",\"sign-language-s\",\"sign-language-t\",\"sign-language-u\",\"sign-language-v\",\"sign-language-w\",\"sign-language-x\",\"sign-language-y\",\"sign-language-z\",\"fingerprint\",\"foam-fingers\",\"handshake-heart\"]},{\"name\":\"Healthcare\",\"link\":\"healthcare\",\"icons\":[\"death\",\"suicide-risk\",\"dental-braces\",\"dental-crown\",\"dental-filling\",\"dental-floss\",\"dental-implant\",\"dental-machine\",\"dental-mirror\",\"dentist-female\",\"electric-toothbrush\",\"tooth-caries\",\"tooth-cracked\",\"toothbrush\",\"deceleration-of-runner\",\"foot-angle\",\"foot-landing-impact\",\"posture\",\"pronation-of-foot\",\"step-length\",\"autism\",\"mental-state\",\"coronavirus\",\"coughing\",\"diabetes\",\"diarrhea\",\"ear-ache\",\"fever\",\"headache\",\"hypertension\",\"runny-nose\",\"nose\",\"sneeze\",\"virus\",\"amnesty-international\",\"doctors-without-borders\",\"heart-health\",\"save-the-children\",\"unhcr\",\"unicef\",\"world-health-organization\",\"counselor\",\"medical-doctor\",\"nurse-female\",\"nurse-male\",\"pharmacist\",\"brain\",\"cervix\",\"large-intestine\",\"gastrointestinal-tract\",\"kidney\",\"liver\",\"lungs\",\"medical-heart\",\"stomach\",\"uterus\",\"arm-massage-area\",\"back-massage-area\",\"general-massage-area\",\"head-massage-area\"]},{\"name\":\"Holidays\",\"link\":\"holidays\",\"icons\":[\"bell\",\"christmas-candle\",\"candy-cane\",\"christmas-ball\",\"christmas-candy\",\"christmas-gift\",\"christmas-penguin\",\"christmas-star\",\"christmas-stocking\",\"christmas-tree\",\"cinnamon-sticks\",\"confetti\",\"elf\",\"fireplace\",\"firework\",\"firework-explosion\",\"gingerbread-house\",\"gingerbread-man\",\"holy-bible\",\"ice-skate\",\"jingle-bell\",\"merry-pie\",\"christmas-mitten\",\"nativity\",\"reindeer\",\"santa\",\"santas-hat\",\"sled\",\"sleigh\",\"snowflake\",\"snowman\",\"sparkler\",\"star-of-bethlehem\",\"easter-cake\",\"easter-egg\",\"easter-eggs\",\"easter-rabbit\",\"pussy-willow\",\"bat\",\"black-cat\",\"coffin\",\"crystal-ball\",\"fantasy\",\"frankensteins-monster\",\"ghost\",\"grim-reaper\",\"halloween-candy\",\"headstone\",\"jason-voorhees\",\"mage-staff\",\"monster-mouth\",\"mummy\",\"poison-bottle\",\"pumpkin\",\"scary-tree\",\"scream\",\"slender-man\",\"spider\",\"spiderweb\",\"staff-stick\",\"thriller\",\"vampire\",\"werewolf\",\"witch\",\"wizard\",\"zombie\",\"cruse\",\"dreidel\",\"hanukkah-donut\",\"hanukkah-gelt\",\"hanukkah-glass\",\"bride\",\"--broken-heart\",\"champagne\",\"diamond-ring\",\"engagement-ring\",\"bridal-bouquet\",\"groom\",\"heart-border\",\"heart-puzzle\",\"heart-with-arrow\",\"honeymoon\",\"invitation\"]},{\"name\":\"Household\",\"link\":\"household\",\"icons\":[\"bath\",\"bath-fan\",\"bath-light\",\"bathroom-sound\",\"shower-and-tub\",\"shampoo-dispenser\",\"electric-toothbrush\",\"jacuzzi\",\"sauna\",\"shampoo\",\"shower\",\"soap\",\"cosmetic-soap\",\"soap-dispenser\",\"spa\",\"toothbrush\",\"toothpaste\",\"towel\",\"wash-your-hands\",\"water-pipe\",\"bed\",\"being-sick\",\"die-in-bed\",\"double-bed\",\"empty-bed\",\"four-beds\",\"undergo-insomnia\",\"make-love\",\"call-in-bed\",\"occupied-bed\",\"read-in-bed\",\"single-bed\",\"sleeping-in-bed\",\"three-beds\",\"two-beds\",\"watch-tv-in-bed\",\"work-in-bed\",\"japanese-knife\",\"cleaver\",\"cutlery\",\"fork\",\"ice-cream-scoop\",\"knife\",\"ladle\",\"spoon\",\"tongs\",\"door-handle\",\"latch\",\"armchair\",\"bed-size\",\"book-shelf\",\"buffet\",\"kids-bedroom\",\"bureau\",\"chair\",\"closet\",\"crib\",\"dishes-shelf\",\"sliding-door-closet\",\"sofa\",\"sofa-with-buttons\",\"table\",\"wardrobe\",\"interior-accesories\",\"close-garage-door\",\"garage-open--v2\",\"garage-open--v1\",\"garage\",\"garage-door\",\"garage-door-part-open\",\"open-garage-door\",\"transportation\",\"garage-closed\",\"warehouse\",\"central-heating\"]},{\"name\":\"Industry\",\"link\":\"industry\",\"icons\":[\"automotive\",\"dam\",\"deployment\",\"factory\",\"factory-breakdown\",\"gear\",\"manufacturing\",\"nuclear-power-plant\",\"overhead-crane\",\"power-plant\",\"manhole-cover\",\"capacitor-symbol\",\"ac-dc-converter\",\"electrical-threshold\",\"electricity\",\"energy-meter\",\"ground-symbol\",\"light-switch\",\"outlet-switch\",\"electrical-sensor\",\"stepper-motor\",\"substation\",\"transmission-tower\",\"electro-devices\",\"capacitor\",\"circuit\",\"display\",\"electronics\",\"heater-resistor\",\"integrated-circuit\",\"lcd\",\"led-diode\",\"crystal-oscillator\",\"potentiometer\",\"processor\",\"relay\",\"resistor\",\"transistor\",\"alcoholic-beverage-licensing\",\"coffee-roaster\",\"whisky-still\",\"gas-industry\",\"gas-rig\",\"oil-industry\",\"oil-offshore-rig\",\"oil-pump-jack\",\"oil-rig\",\"oil-storage-tank\",\"oil-transportation\",\"petrol\",\"biomass\",\"biotech\",\"geothermal\",\"greentech\",\"hydroelectric\",\"recycling\",\"reuse\",\"solar-panel\",\"sustainability\",\"wind-turbine\",\"automatic\",\"settings-3\",\"bot\",\"engineering\",\"laser-beam\",\"manual\",\"microscope\",\"motion-detector\"]},{\"name\":\"Logos\",\"link\":\"logos\",\"icons\":[\"adobe-after-effects\",\"adobe-bridge\",\"adobe-creative-cloud\",\"adobe-dreamweaver\",\"adobe-fireworks\",\"adobe-flash\",\"adobe-framemaker\",\"adobe-illustrator\",\"adobe-indesign\",\"adobe-lightroom\",\"adobe-logo\",\"adobe-photoshop\",\"adobe-premiere-pro\",\"airdrop\",\"apple-app-store--v1\",\"mac-os\",\"apple-map\",\"apple-pay\",\"apple-seed\",\"imovie\",\"launchpad\",\"mac-logo\",\"siri\",\"wwdc-2017\",\"xcode\",\"ios-10\",\"ios-logo\",\"itunes\",\"chrome\",\"firefox\",\"internet-explorer\",\"maxthon\",\"ms-edge\",\"opera\",\"safari\",\"sitecore\",\"uc-browser\",\"vivaldi-web-browser\",\"dell\",\"fujitsu--v1\",\"general-electrics\",\"hp--v1\",\"ibm\",\"lego\",\"mts\",\"meizu\",\"nl-logo\",\"oracle-logo\",\"sap\",\"yammer\",\"007-logo\",\"bbc-logo\",\"breaking-bad\",\"cbs-logo\",\"dish-tv\",\"disney-movies-\",\"doctor-who\",\"fsociety-qr\",\"hbo\",\"hbo-go\",\"hooli\",\"james-bond\",\"pied-piper\",\"pied-piper-2\",\"pied-piper-season-3\",\"pied-piper-5\",\"pirates-of-the-caribbean\",\"pixar\",\"reliance-digital-tv\",\"roll-no-21\",\"showtime\",\"sparkk-tv\",\"star-wars\",\"syfy\",\"the-cw\",\"twilight\",\"gucci\",\"logan-paul-maverick\",\"palace-skateboards\",\"supreme\",\"amazon-s3\",\"bluelock\",\"box-logo\",\"cloudshot\",\"digitalocean\",\"dropbox\",\"heroku\",\"joyent\"]},{\"name\":\"Maps\",\"link\":\"maps\",\"icons\":[\"map\",\"map-editing\",\"map-marker\",\"quest\",\"treasure-map\",\"waypoint-map\",\"world-map\",\"east-direction\",\"north-direction\",\"south-direction\",\"west-direction\",\"africa\",\"argentina-map\",\"australia-country\",\"austria-map\",\"belarus-map\",\"brazil-map\",\"brittany-map\",\"cambodgia\",\"canada-map\",\"china-and-taiwan-map\",\"china-map\",\"czech-republic-map\",\"denmark-map\",\"egypt-map\",\"finland-map\",\"france-map\",\"georgia-map\",\"germany-map\",\"greece-map\",\"iceland-map\",\"india-map\",\"ireland-map\",\"israel-map\",\"italy-map\",\"japan-map\",\"latvia-country\",\"luxembourg-map\",\"madagascar-map\",\"malta-map\",\"mexico-map\",\"mongolia-map\",\"morocco-map\",\"netherlands-map\",\"new-zealand-country\",\"new-zealand-north-island\",\"new-zealand-south-island\",\"norway-map\",\"poland-map\",\"portugal-map\",\"russia-map\",\"singapore-territory\",\"south-africa-map\",\"south-korea-map\",\"spain-map\",\"sweden-map\",\"switzerland-map\",\"taiwan-map\",\"thailand-map\",\"turkey-map\",\"uae-map\",\"usa-map\",\"ukraine-territory\",\"ukraine-territory-with-crimea\",\"ukraine-territory-with-crimea-and-donbass\",\"united-kingdom-map\",\"venezuela-map\",\"point-objects\",\"marker\",\"marker-a\",\"marker-b\",\"marker-off\",\"place-marker\",\"tesla-supercharger-pin\",\"visit\",\"america\",\"globe-asia\",\"europe\",\"globe\",\"globe-earth\",\"latitude\",\"worldwide-location\",\"longitude\",\"map-grid\"]},{\"name\":\"Media Controls\",\"link\":\"media-controls\",\"icons\":[\"circled-play\",\"circled-pause\",\"eject\",\"end\",\"fast-forward\",\"pause\",\"play\",\"record\",\"repeat\",\"repeat-one\",\"resume-button\",\"rewind\",\"shuffle\",\"skip-to-start\",\"stop\",\"high-volume\",\"block-microphone\",\"foreign-language-sound\",\"low-volume\",\"mute\",\"no-audio\",\"play-record\",\"sound-speaker\",\"sports-video-intersound\",\"medium-volume\",\"first\",\"last\",\"next\",\"pause-squared\",\"previous\",\"start--v2\",\"start--v1\",\"stop-squared\",\"fiber-smart-record\",\"forward-10\",\"forward-30\",\"forward-5\",\"replay\",\"replay-10\",\"replay-30\",\"replay-5\",\"skip-15-seconds-back\",\"skip-ahead-15-seconds\"]},{\"name\":\"Men\",\"link\":\"men\",\"icons\":[]},{\"name\":\"Messaging\",\"link\":\"messaging\",\"icons\":[\"add-to-chat\",\"ask-question\",\"chat\",\"speech-bubble-with-dots\",\"chat-message\",\"chat-message-sent\",\"filled-chat\",\"chat-settings\",\"closed-topic\",\"comments\",\"computer-chat\",\"delete-chat\",\"delete-message\",\"comment-discussion\",\"edit-chat-history\",\"favorite-chat\",\"high-priority-message\",\"message-preview\",\"multiple-messages\",\"my-topic\",\"no-chat\",\"no-chat-message\",\"poll-topic\",\"popular-topic\",\"quote\",\"refuse\",\"response\",\"search-chat\",\"send-comment\",\"speaker-notes\",\"speaker-notes-off\",\"speech-bubble\",\"stack-of-tweets\",\"thinking-bubble\",\"topic\",\"moved-topic--v1\",\"topic-push-notification\",\"filled-speech-bubble-with-dots\",\"very-popular-topic\",\"video-message\",\"attach\",\"cancel-last-digit\",\"quote-right\",\"hashtag-large\",\"more\",\"note\",\"ok\",\"ok-message\",\"cancel-4-digits\",\"quote-left\",\"send-file\",\"sent\",\"filled-note\",\"dizzy-person-2\",\"angel\",\"angry\",\"anime-emoji\",\"bored\",\"boring\",\"confused\",\"cool\",\"crazy\",\"crying\",\"dance-with-devil\",\"disappointed\",\"drooling-face\",\"dizzy-person\",\"embarrassed\",\"evil\",\"facepalm\",\"fat-emoji\",\"happy\",\"head-in-sand\",\"heart-lock\",\"in-love\",\"kiss\",\"kiss-panda\",\"lol\",\"swearing-male\",\"monster-mouth\",\"nerd\",\"neutral-emoticon--v1\",\"oppression\",\"poker-face\",\"question\",\"quiet\",\"sad\",\"savouring-delicious-food-face\"]},{\"name\":\"Military\",\"link\":\"military\",\"icons\":[\"armored-boot\",\"armored-breastplate\",\"knight-shield\",\"armored-gauntlet\",\"infinity-gauntlet\",\"legs-greaves\",\"shield\",\"armored-helmet\",\"bullet-2\",\"infantry-knife\",\"assault-rifle\",\"bullet\",\"cannon\",\"catapult-firing\",\"cosh-weapon\",\"firing-gun\",\"gatling-gun\",\"gun\",\"minigun\",\"mortar\",\"blunderbuss\",\"paintball-gun\",\"rpg\",\"rifle-magazine\",\"sniper-rifle\",\"submachine-gun\",\"sword\",\"command-sergeant-major-csm\",\"corporal-cpl\",\"first-sergeant-1sg\",\"master-sergeant-msg\",\"private-first-class-pfc\",\"private-pv2\",\"sergeant-first-class-sfc\",\"sergeant-major-sgt\",\"sergeant-major-of-army-sma\",\"sergeant-sgt\",\"staff-sergeant-ssg\",\"bomb\",\"flash-bang\",\"bomb-with-timer\",\"explosion\",\"grenade\",\"incendiary-grenade\",\"land-mine\",\"missile\",\"mushroom-cloud\",\"naval-mine\",\"self-destruct-button\",\"smoke-explosion\",\"tank-mine\",\"torpedo\",\"stick-fighting\",\"sparring\",\"kicking\",\"punching\",\"binoculars\",\"boots\",\"bulletproof-vest\",\"camo-cream\",\"dog-tag\",\"hangar\",\"helmet\",\"marine-radio\",\"military-backpack-radio\",\"night-vision\",\"rucksack\",\"ammo-tin\",\"wwi-german-helmet\",\"walkie-talkie-radio\",\"webbing\",\"army-star\",\"us-coast-guard\",\"us-airborne\",\"eod-badge\",\"israel-mossad\",\"us-marines-ega\",\"medal\",\"russian-vdv\",\"us-army\",\"military-helicopter\",\"battleship\",\"space-fighter\",\"fighter-jet\",\"tank\",\"battle\",\"crusader\",\"defensive-wood-wall\",\"knight\",\"noble-knight\",\"roman-soldier\",\"soldier\",\"thruster\"]},{\"name\":\"Mobile\",\"link\":\"mobile\",\"icons\":[\"android-l-battery\",\"many-batteries\",\"battery-alert\",\"medium-battery\",\"battery-unknown\",\"high-battery\",\"charge-battery\",\"empty-battery\",\"full-battery\",\"low-battery\",\"no-battery\",\"remove-battery\",\"add-phone\",\"phone-disconnected\",\"call-forwarding--v1\",\"call-transfer\",\"callback\",\"end-call\",\"missed-call\",\"no-phones\",\"phone\",\"phone-ringing\",\"phone-off-the-hook\",\"ringer-volume\",\"ringing-phone\",\"silent-call\",\"sip-dialer\",\"phone-not-being-used\",\"low-connection\",\"no-connection\",\"medium-connection\",\"high-connection\",\"android\",\"android-tablet\",\"apple-watch\",\"blackberry\",\"broken-phone\",\"cell-phone\",\"e-magazine\",\"earbud-headphones\",\"headset\",\"kindle\",\"two-smartphones\",\"motorola-s10-headphones\",\"multiple-devices\",\"nokia-3310\",\"nook\",\"apple-watch-apps\",\"smartphone-tablet\",\"multiple-smartphones\",\"touchscreen-smartphone\",\"windows8-tablet\",\"ipad\",\"ipad-mini\",\"iphone\",\"iphone-x\",\"sms-token\",\"email\",\"email-sign\",\"high-priority-message\",\"mms\",\"notification-center\",\"phone-message\",\"push-notifications\",\"sms\",\"voicemail\",\"aspect-ratio\",\"block-microphone\",\"data-setting\",\"device-information\",\"duplicate-contacts\",\"chrome-reader-mode\",\"home-button\",\"invert-colors\",\"inverts-color-off\",\"no-synchronize\",\"no-video\"]},{\"name\":\"Music\",\"link\":\"music\",\"icons\":[\"am-radio\",\"browse-podcasts\",\"cloud-media\",\"fm-radio\",\"podcast\",\"radio-waves\",\"satellite-radio\",\"streaming-media\",\"xm-music\",\"accordion\",\"bandoneon\",\"grand-piano\",\"piano\",\"pipe-organ\",\"russian-accordion\",\"00s-music\",\"60s-music\",\"70s-music\",\"80s-music\",\"90s-music\",\"apple-homepod\",\"boombox\",\"earbud-headphones\",\"guitar-amp\",\"jukebox\",\"metronome\",\"motorola-s10-headphones\",\"philips-hue-go\",\"radio\",\"radio-2\",\"tabletop-radio\",\"sonos-speaker\",\"theremin\",\"tuning-fork\",\"ipod-old\",\"alternative\",\"blues\",\"lo-fi\",\"child-music\",\"contemporary-christian-music\",\"classic-music\",\"country-music\",\"hardcore\",\"easy-listening\",\"electronic-music\",\"enka\",\"folk-music\",\"french-music\",\"goth\",\"hip-hop-music\",\"international-music\",\"jazz\",\"lullaby\",\"metal-music\",\"middle-east-music\",\"progressive-rock\",\"punk\",\"rnb\",\"rap\",\"reggae\",\"musical-stories\",\"rock-music\",\"ska\",\"swing\",\"tex-mex\",\"us-music\",\"underground-music\",\"bass-clef\",\"half-rest\",\"music-transcript\",\"musical\",\"musical-notes\",\"sheet-music\",\"time-signature\",\"treble-clef\",\"whole-rest\",\"bass-drum\",\"bell-lyre\",\"cymbals\",\"drum-set\",\"drums\",\"maracas\",\"powwow-drum\",\"snare-drum\",\"snare-drum-top\",\"tabal\",\"timpani\",\"xylophone\",\"applause\",\"autograph\",\"bandmasters-mace\",\"choir--v1\",\"dj\"]},{\"name\":\"Nature\",\"link\":\"nature\",\"icons\":[\"tropics\",\"alps\",\"beach\",\"cave\",\"creek\",\"ditch\",\"forest\",\"glacier\",\"grand-canyon\",\"ground\",\"iceberg\",\"lake\",\"ski-resort\",\"soil\",\"top-of-a-hill\",\"waterfall\",\"wildlife\"]},{\"name\":\"Network\",\"link\":\"network\",\"icons\":[\"linux-client\",\"mac-client\",\"thin-client\",\"windows-client\",\"cloud\",\"cloud-backup-restore--v1\",\"cloud-business\",\"cloud-checked\",\"cloud-cross\",\"cloud-link\",\"cloud-storage\",\"cloud-sync\",\"dashed-cloud\",\"dotted-cloud\",\"download-from-cloud\",\"error-cloud\",\"happy-cloud\",\"remote-working\",\"sad-cloud\",\"search-in-cloud\",\"private-cloud-storage\",\"unavailable-cloud\",\"upload-to-cloud\",\"connection-status-on\",\"connection-to-account\",\"low-connection\",\"no-connection\",\"personal-hotspot\",\"medium-connection\",\"high-connection\",\"connection-sync\",\"connection-status-off\",\"blockchain-technology\",\"broadcasting\",\"connected-no-data\",\"data-in-both-directions\",\"transfer-between-users\",\"incoming-data\",\"multicast\",\"outgoing-data\",\"torrent\",\"unicast\",\"download-from-ftp\",\"ftp\",\"ftp-server\",\"upload-to-ftp\",\"dns\",\"internet\",\"vpn\",\"vpn-status-bar-icon\",\"ip-address\",\"domain\",\"whois\",\"cisco-router\",\"computer\",\"hub\",\"individual-server\",\"iot-sensor\",\"nas\",\"network-card\",\"root-server\",\"router\",\"server\"]},{\"name\":\"People\",\"link\":\"users\",\"icons\":[\"baby\",\"women-age-group-4\",\"elderly-person\",\"men-age-group-5\",\"men-age-group-6\",\"women-age-group-1\",\"women-age-group-2\",\"men-age-group-4\",\"millennial\",\"women-age-group-6\",\"men-age-group-1\",\"women-age-group-3\",\"men-age-group-3\",\"men-age-group-2\",\"women-age-group-5\",\"adam-sandler\",\"bill-gates\",\"billie-holiday\",\"dona-sarkar\",\"donald-trump\",\"edgar-allan-poe\",\"einstein\",\"frida-kahlo\",\"kim-kardashian\",\"kylie-jenner\",\"mark-twain\",\"neil-gaiman\",\"oscar-wilde\",\"stephen-king\",\"william-shakespeare\",\"cartoon-boy\",\"face\",\"female\",\"user-female-circle\",\"user-female\",\"gender\",\"male\",\"user-male-circle\",\"multicultural-people\",\"old-man\",\"old-woman\",\"genderqueer\",\"user-male\",\"compare-heights\",\"tall-person\",\"date-man-man\",\"lgbt-men\",\"granny-lesbian\",\"date-woman-woman\",\"lgbt-women\",\"guest-male\",\"administrator-male--v1\",\"spy-female\",\"bad-taxi-driver\",\"bandit\",\"businessman\",\"businesswoman\"]},{\"name\":\"Photo and Video\",\"link\":\"photo-video\",\"icons\":[\"camera-addon\",\"camera-addon-identification\",\"drone\",\"photo-reel\",\"large-lens\",\"drone-with-camera\",\"slr-large-lens\",\"slr-small-lens\",\"small-lens\",\"cable-release\",\"camcorder\",\"camera\",\"camera-enhance\",\"camera-identification\",\"camera-microphone\",\"multiple-cameras\",\"compact-camera\",\"gopro\",\"rotate-camera\",\"slr-camera-body\",\"slr-back-side\",\"slr-camera\",\"switch-camera\",\"camcorder-pro\",\"old-time-camera\",\"flash-auto\",\"flash-off\",\"flash-on\",\"add-image\",\"edit-image\",\"gallery\",\"image\",\"image-gallery\",\"image-not-avialable\",\"stack-of-photos\",\"portrait\",\"remove-image\",\"steganographie\",\"webcam-man\",\"video-gallery\",\"webcam-woman\",\"480p\",\"4k\",\"hd\",\"hd-1080p\",\"hd-720p\",\"resolution\",\"close-up-mode\",\"exposure-value\",\"focal-length\",\"iso\",\"landscape\",\"night-landscape\",\"night-portrait\",\"panorama\",\"portrait-mode-female\",\"portrait-mode-male\",\"selfie\",\"sports-mode\",\"video-record\",\"camera-on-tripod\",\"clapperboard\",\"film-reel\",\"memories\",\"movie\",\"movie-projector\",\"selfie-booth\",\"time-slider\",\"video\",\"video-editing\",\"video-trimming\",\"video-wall\"]},{\"name\":\"Plants\",\"link\":\"plants\",\"icons\":[\"cherry\",\"grapes\",\"raspberry\",\"strawberry\",\"barley\",\"farm\",\"farm-2\",\"farmer-male\",\"field\",\"ground\",\"hay\",\"hay-bale\",\"soil\",\"wheat\",\"windmill\",\"camellia\",\"flower\",\"bunch-flowers\",\"pollen\",\"rose\",\"spa-flower\",\"spring\",\"apple\",\"avocado\",\"banana\",\"citrus--v1\",\"dragon-fruit\",\"durian\",\"kiwi\",\"melon\",\"orange\",\"papaya\",\"peach\",\"pear\",\"pineapple\",\"plum\",\"pomegranate\",\"soursop\",\"tangelo\",\"watermelon\",\"compost-heap\",\"garden-gloves\",\"hops\",\"deadly-spray\",\"lotus\",\"potted-plant\",\"paper-bag-with-seeds\",\"seeding\",\"sod\",\"hand-planting\",\"water-hose\",\"watering-can\",\"wheelbarrow\",\"autumn\",\"marijuana-leaf\",\"clover\",\"plant-under-rain\",\"leaf\",\"maple-leaf\",\"oak-leaf\",\"plant-under-sun\",\"three-leaf-clover\",\"algae\",\"cactus\",\"grass\",\"sprout\",\"succulent\",\"tumbleweed\",\"western\",\"almond\",\"brazil-nut\",\"hazelnut\",\"nut\",\"nutshell\",\"peanuts\",\"coniferous-tree\",\"deciduous-tree\",\"palm-tree\",\"asparagus\",\"beet\",\"broccoli\",\"cabbage\",\"carrot\"]},{\"name\":\"Printing\",\"link\":\"printing\",\"icons\":[\"ball-point-pen\",\"chisel-tip-marker\",\"drafting-compass\",\"drafting-compass2\",\"edit\",\"erase\",\"eraser\",\"glue\",\"hole-punch\",\"marker-pen\",\"paint\",\"paper-clamp\",\"pen\",\"pencil\",\"pencil-sharpener\",\"quill-with-ink\",\"ruler\",\"sticky-tape\",\"shredder\",\"stanley-knife\",\"stapler\",\"stationery\",\"cut-paper\",\"feed-paper\",\"flat-mailer\",\"gloss-paper\",\"matt-paper\",\"one-pocket-folder\",\"paper\",\"sheet-of-paper\",\"two-pocket-folder\",\"c-fold-leaflet\",\"e-magazine\",\"folded-booklet\",\"magazine\",\"notepad\",\"saddle-stitched-booklet\",\"spiral-bound-booklet\",\"sticker\",\"z-fold-leaflet\",\"3d-printer\",\"cnc-machine\",\"copy-machine\",\"label-printer\",\"multifunction-printer\",\"print\",\"printer-door-open\",\"printer-error\",\"printer-maintenance\",\"printer-out-of-paper\",\"fine-print\",\"deskew-image-automatically\",\"auto-rotate-based-on-text\",\"automatic-contrast\",\"color-detection\",\"contrast\",\"fit-vertical\",\"fit-to-page\",\"fit-to-width\",\"general-ocr\",\"handwritten-ocr\",\"lasso-ocr\",\"manual-page-rotation\",\"printed-ocr\",\"one-page\",\"page-setup\",\"portrait-mode-scanning\",\"print-message\",\"remove-borders\",\"rescan-document\",\"separate-every-n-sheets\",\"separate-using-a-bar-code\",\"separate-using-a-key-word\",\"separate-using-a-patch-code\",\"separate-by-using-blank-sheets\",\"separate-for-every-new-imported-file\",\"single-sided-scanning\",\"thicken-text\",\"two-pages\",\"two-sided-scanning\",\"typewriter-with-paper\",\"typewriter-with-screen\",\"typewriter-with-tablet\",\"typewriter-without-paper\",\"user-typing-using-typewriter\",\"candy-cane-pattern\"]},{\"name\":\"Profile\",\"link\":\"profile\",\"icons\":[\"add-administrator\",\"admin-settings-male\",\"administrator-male--v1\",\"edit-administrator\",\"remove-administrator\",\"test-account\",\"user-female-circle\",\"user-male-circle\",\"gender-neutral-user\",\"why-us-male\",\"lifecycle--v1\",\"about-us-male\",\"name\",\"person-female--v1\",\"user\",\"user-menu-female\",\"user-menu-male\",\"view-as-different-user\",\"add-user-group-man-man--v2\",\"add-user-group-man-man--v1\",\"conference\",\"conference-foreground-selected\",\"group-foreground-selected\",\"group-background-selected\",\"conference-call\",\"remove-user-group-man-man\",\"conference-background-selected\",\"user-group-man-man\",\"groups\",\"add-user-male\",\"reviewer-male\",\"change-user-male\",\"checked-user-male\",\"talk-male\",\"delete-user-male\",\"remove-user-male\",\"find-user-male\",\"edit-user-male\",\"unfriend-female\",\"unfriend-male\",\"user-engagement-female\",\"user-engagement-male\",\"birth-date\",\"cat-profile\",\"transfer-between-users\",\"login-as-user\",\"user-location\",\"user-rights\",\"username\"]},{\"name\":\"Programming\",\"link\":\"programming\",\"icons\":[\"adware-free\",\"spyware-free\",\"virus-free\",\"application-window\",\"bug\",\"code\",\"code-fork\",\"developer-mode\",\"goto\",\"laravel\",\"module\",\"outline\",\"plugin\",\"programming\",\"registry-editor\",\"media-queries\",\"source-code\",\"template\",\"test-account\",\"variable\",\"command-line\",\"console\",\"run-command\",\"ssh\",\"commit-git\",\"compare-git\",\"merge-git\",\"pull-request\",\"repository\",\"pin\",\"pin-2\",\"pin3\",\"unpin\",\"unpin-2\",\"full-version\",\"software-box\",\"trial-version\",\"uninstall-programs\",\"web-design\",\"add-property\",\"delete-property\",\"edit-property\",\"important-property\",\"play-property\",\"property-script\",\"remove-property\",\"search-property\",\"show-property\",\"stop-property\",\"property-with-timer\",\"property-time\",\"urgent-property\",\"api\",\"app-symbol\"]},{\"name\":\"Science\",\"link\":\"science\",\"icons\":[\"approximately-equal\",\"approximately-not-equal\",\"average-math\",\"congruent-symbol\",\"divide\",\"equal-sign\",\"hashtag\",\"less-than\",\"less-or-equal\",\"more-than\",\"more-or-equal\",\"multiply\",\"not-equal\",\"percentage\",\"plus-math\",\"plus-minus\",\"square-root\",\"minus-math\",\"plus-2-math\",\"approximately-equal-2\",\"approximately-not-equal-2\",\"divide-2\",\"equal-sign-2\",\"more-or-equal-2\",\"more-than-2\",\"hashtag-2\",\"less-than-2\",\"less-or-equal-2\",\"minus\",\"multiply-2\",\"plus-minus-2\",\"percentage2--v1\",\"minus-2-math\",\"square-root-2\",\"not-equal-2\",\"book\",\"book-stack\",\"books\",\"borrow-book\",\"courses\",\"dictionary\",\"elective\",\"law-book\",\"open-book\",\"return-book\",\"wordbook\",\"coordinate-system\",\"cosine\",\"sine\",\"tangent\",\"x-coordinate\",\"y-coordinate\",\"z-coordinate\",\"contract\",\"diploma\",\"attendance-mark\",\"batch-assign\",\"class\",\"classroom\",\"communication\",\"course-assign\",\"critical-thinking\",\"curriculum\",\"e-learning\",\"e-learning-2\",\"education\",\"exam\",\"flashcards\",\"file-2\",\"flip-chart\",\"flipboard\",\"flying-motarboard\",\"grades\",\"graduation-cap\",\"graduation-scroll\",\"idea-sharing\"]},{\"name\":\"Security\",\"link\":\"security\",\"icons\":[\"user-credentials\",\"antivirus-scanner\",\"block\",\"firewall\",\"hips\",\"id-verified\",\"id-not-verified\",\"kensington-lock\",\"behavior-blocker\",\"adware-free\",\"realtime-protection\",\"sandbox\",\"spyware-free\",\"virus-free\",\"yubikey\",\"add-key\",\"forgot-password\",\"one-time-password\",\"password--v1\",\"password1\",\"remove-key\",\"show-password\",\"password-check\",\"cancel-last-digit\",\"good-pincode\",\"re-enter-pincode\",\"cancel-4-digits\",\"enter-pin\",\"pincode-keyboard\",\"wrong-pincode\",\"fire-alarm-button\",\"brick-wall\",\"door-sensor\",\"door-sensor-alarmed\",\"defensive-wood-wall\",\"fire-alarm-box\",\"secured-by-alarm-system\",\"key-security\",\"lock-2\",\"restrict\",\"unlock-2\",\"vehicle-security\",\"restriction-shield\",\"application-shield\",\"autopilot\",\"delete-shield\",\"microsoft-admin\",\"security-checked\",\"question-shield\",\"refresh-shield\",\"security-aes\",\"keyhole-shield\",\"security-ssl\",\"user-shield\",\"warning-shield\",\"web-shield\",\"business-card-scanner\",\"captcha\",\"face-id\",\"facial-recognition-scan\",\"fingerprint\",\"fingerprint-scan\",\"iris-scan\",\"palm-scan\"]},{\"name\":\"Shopping\",\"link\":\"shopping\",\"icons\":[\"add-shopping-cart\",\"buy\",\"shopping-cart-loaded\",\"cash-register\",\"check\",\"paid\",\"product\",\"return-purchase\",\"shopping-bag\",\"shopping-basket\",\"shopping-cart\",\"budget\",\"coins\",\"money\",\"money-bag\",\"banknotes\",\"purse\",\"wallet\",\"cent\",\"peso-symbol\",\"average\",\"average-2\",\"cheap\",\"cheap-2\",\"expensive\",\"expensive-2\",\"low-price\",\"low-price-euro\",\"low-price-pound\",\"price-comparison\",\"add-tag\",\"price-tag-euro\",\"price-tag\",\"price-tag-pound\",\"price-tag-usd\",\"remove-tag\",\"tags\",\"update-tag\",\"cigar\",\"clothes\",\"confectionery\",\"electronic-cigarette\",\"home-decorations\",\"iqos\",\"jewelry\",\"kitchenwares\",\"technology-items\",\"new-product\",\"packaging\",\"plush\",\"similar-items\",\"souvenirs\",\"stationery\",\"tetra-pak\",\"used-product\",\"cutting-coupon\",\"discount\",\"gift\",\"loyalty-card\",\"new\",\"one-free\",\"sale\",\"delivery\",\"self-service-kiosk\",\"shop\",\"vending-machine\",\"credit-note\",\"mobile-order\",\"online-store\"]},{\"name\":\"Social Media\",\"link\":\"social-networks\",\"icons\":[\"facebook-new\",\"facebook\",\"instagram-new\",\"youtube-play\",\"tiktok\",\"twitter\",\"twitter-squared\",\"anti-wechat\",\"line-me\",\"renren\",\"tencent-weibo\",\"weixing\",\"weibo\",\"medium-logo\",\"medium-monogram\",\"medium-new\",\"medium\",\"tumblr--v2\",\"tumblr--v1\",\"wordpress\",\"linkedin\",\"xing\",\"dribbble-circled\",\"facebook-circled\",\"linkedin-circled\",\"myspace-circled\",\"odnoklassniki-circled\",\"play-button-circled\",\"twitter-circled\",\"vk-circled\",\"vkontakte-circled\",\"foursquare\",\"google-maps\",\"yelp\",\"behance\",\"devianart\",\"dribbble\",\"flickr\",\"pinterest\",\"angry-face-meme\",\"doge\",\"salt-bae\",\"waluigi\",\"facebook-messenger\",\"whatsapp\",\"github\",\"github-2\",\"stackexchange\",\"stackoverflow\",\"bebo\",\"google-plus\",\"google-plus-circled\",\"instagram\",\"myspace\",\"myspace-squared-outlined\",\"myspace-squared\",\"youtube\",\"youtube-squared\",\"odnoklassniki\",\"vk-com\",\"vkontakte\",\"delicious\",\"digg\",\"stumbleupon\",\"comments\",\"share-2\",\"dislike\",\"facebook-like\",\"follow\",\"like\",\"hearts\",\"filled-like\",\"retweet\",\"share\",\"feedly\",\"forrst\",\"hatena-bookmark\",\"reddit\",\"stack-of-tweets\"]},{\"name\":\"Sports\",\"link\":\"sports\",\"icons\":[\"hammer-throw\",\"high-jump\",\"javelin-throw\",\"long-jump\",\"pole-vault\",\"shot-put\",\"track-and-field\",\"discus-throw\",\"athlete\",\"championship-belt\",\"laurel-wreath\",\"leaderboard\",\"medal2\",\"medal-second-place\",\"medal2-third-place\",\"trophy\",\"uefa-euro-trophy\",\"world-cup\",\"basketball\",\"basketball-field\",\"basketball-jersey\",\"basketball-2\",\"cycling-bmx\",\"cycling-road--v1\",\"cycling-mountain-bike\",\"cycling-track\",\"dirt-bike\",\"tricycle\",\"bench-press\",\"crossfit\",\"curls-with-dumbbells\",\"deadlift\",\"exercise\",\"bench-press-with-dumbbells\",\"mommy-fitness\",\"nordic-walking\",\"personal-trainer\",\"pilates\",\"plank\",\"pullups\",\"push\",\"pushups\",\"rowing\",\"running\",\"spinning\",\"squats\",\"wakeup-hill-on-stairs\",\"trainers\",\"treadmill\",\"walking\",\"functional-training\",\"woman-athlete\",\"bench-over-head\",\"acrobatics\",\"gymnastics\",\"horseback-riding\",\"stick-fighting\",\"fencing\",\"sparring\",\"wrestling\",\"olympic-medal-bronze\",\"gold-medal\",\"olympic-rings\",\"olympic-torch\",\"olympic-medal-silver\",\"billiards\",\"bocce\",\"bowling\",\"bowling-ball\",\"bowling-pin\",\"bowling-pins\",\"bowling-spare\",\"bowling-turkey\",\"bungee-jumping\",\"canyoning\",\"dancing\",\"fishing\",\"frisbee\",\"in-air\",\"trampoline-park\",\"parachute\",\"paragliding\",\"pony-trekking\",\"roller-skating\"]},{\"name\":\"Time And Date\",\"link\":\"time-and-date\",\"icons\":[\"age\",\"calendar\",\"crossed-out-date\",\"tear-off-calendar\",\"quaterly\",\"today\",\"calendar-delete\",\"calendar-minus\",\"calendar-plus\",\"event-accepted\",\"event-accepted-tentatively\",\"event-declined\",\"sign-up-in-calendar\",\"view-shedule\",\"day-view\",\"month-view\",\"week-view\",\"year-view\",\"alarm\",\"alarm-add\",\"alarm-clock\",\"alarm-off\",\"alarm-on\",\"clock\",\"alarm-snooze\",\"stopwatch\",\"timer\",\"watch\",\"watches-front-view\",\"date-from\",\"date-span\",\"date-to\",\"calendar-1\",\"calendar-10\",\"calendar-11\",\"calendar-12\",\"calendar-13\",\"calendar-14\",\"calendar-15\",\"calendar-16\",\"calendar-17\",\"calendar-18\",\"calendar-19\",\"calendar-2\",\"calendar-20\",\"calendar-21\",\"calendar-22\",\"calendar-23\",\"calendar-24\",\"calendar-25\",\"calendar-26\",\"calendar-27\",\"calendar-28\",\"calendar-29\",\"calendar-3\",\"calendar-30\",\"calendar-31\",\"calendar-4\",\"calendar-5\",\"calendar-6\",\"calendar-7\",\"calendar-8\",\"calendar-9\",\"birthday\",\"birthday-presents\",\"female-meeting\",\"meeting\",\"date\",\"deadline\",\"deadline-icon\",\"hourglass\",\"empty-hourglass\",\"hourglass-sand-bottom\",\"hourglass-sand-top--v1\"]},{\"name\":\"Transport\",\"link\":\"transport\",\"icons\":[\"air-traffic-control-tower\",\"prop-plane\",\"airplane-front-view\",\"airplane-landing\",\"airplane-mode-off\",\"airplane-mode-on\",\"airplane-take-off\",\"airplane-window-closed\",\"airplane-window-open\",\"airport\",\"dirigible\",\"drone\",\"helicopter\",\"hot-air-balloon\",\"jet-engine\",\"jet-engine-transportation-cradle\",\"launched-rocket\",\"drone-with-camera\",\"rocket\",\"runway\",\"scissor-lift\",\"space-shuttle\",\"atv\",\"quad-bike\",\"utv\",\"bicycle-trailer\",\"dirt-bike\",\"electric-bicycle\",\"electric-bike\",\"3-wheel-scooter\",\"motorbike-helmet\",\"motorcycle\",\"scooter\",\"tricycle\",\"bicycle\",\"abs\",\"airbag-on\",\"break--v2\",\"break--v1\",\"car-service\",\"airbag-off\",\"door-ajar\",\"driving\",\"engine-coolant\",\"engine-oil-level\",\"fog-lamp\",\"headlight\",\"service-reminder-indicator\",\"tire-pressure\",\"traction-control\",\"washer-fluid\"]},{\"name\":\"Travel\",\"link\":\"travel\",\"icons\":[\"beach\",\"beach-ball\",\"beach-umbrella\",\"coconut-cocktail\",\"flip-flops\",\"flippers\",\"float\",\"sunbathe\",\"buoyancy-compensator\",\"no-scuba-diving\",\"palm-tree\",\"scuba-computer\",\"scuba-diving\",\"scuba-mask\",\"scuba-pressure-gauge\",\"scuba-tank\",\"sea-waves\",\"mask-snorkel\",\"summer\",\"sun-lounger\",\"camping-gas-burner\",\"campfire\",\"camping-tent\",\"can-soup\",\"drinking-fountain\",\"fishing-pole\",\"flash-light\",\"gaiters\",\"guitar\",\"hammock\",\"hex-burner\",\"signal-horn\",\"matches\",\"survival-bag\",\"mess-tin\",\"mexican-hammock\",\"mosquito-coil\",\"no-open-fire\",\"park-bench\",\"rucksack\",\"scout-knot\",\"sleeping-bag\",\"small-axe\",\"spade\",\"swiss-army-knife\",\"trangia-stove\",\"water-bottle\",\"sleeping-mat\",\"baby-feet\",\"baby-footprints-path\",\"bear-footprint\",\"cat-footprint\",\"dog-footprint\",\"right-footprint\",\"human-footprints\",\"left-footprint\",\"left-shoe\",\"shoes\",\"right-shoe\",\"bed-size\",\"hotel-changing-room\",\"door-hanger\",\"elevator\",\"escalator\",\"escalator-down\",\"escalator-up\",\"front-desk\",\"hostel\",\"hotel-information\",\"4-star-hotel--v2\",\"4-star-hotel--v1\",\"hotel-check-in\",\"hotel-chekc-out\",\"hotel-star\",\"3-star-hotel\",\"hotel-upgrade\",\"indoor-swimming-pool\",\"mini-bar\",\"outdoor-swimming-pool\",\"poolside-bar\",\"check-in-desk\",\"service-bell\",\"travelator\",\"valet\"]},{\"name\":\"User Interface\",\"link\":\"user-interface\",\"icons\":[\"application-window\",\"energy-window-\",\"favorite-window\",\"idea-window\",\"microsoft-word-window-\",\"music-window\",\"pdf-window\",\"password-window\",\"promotion-window\",\"medal-window\",\"sort-window\",\"web-analystics\",\"window-cloud\",\"window-color\",\"window-favorite\",\"window-other\",\"window-search\",\"window-secured\",\"window-settings\",\"deviation\",\"discrepancy\",\"diversity\",\"inconsistency\",\"variation\",\"add\",\"add-to-favorites\",\"address-book\",\"vertical-settings-mixer\",\"alarms\",\"all-out\",\"apps-tab\",\"automatic-brightness\",\"available-updates\",\"brightness-settings\",\"button2\",\"change-theme\",\"clear-symbol\",\"comments\",\"delete-sign\",\"delete-forever\",\"delete-widget\",\"desktop-download\",\"download\",\"downloading-updates\",\"email\",\"email-sign\",\"enter-2\",\"error\",\"exit\",\"facebook-like\",\"features-list\",\"find-and-replace\",\"form\",\"gear\",\"hint\",\"home-page\",\"multiple-inputs\",\"installing-updates\",\"keypad\",\"level-up\",\"list\",\"loading-bar\",\"mail-filter\",\"move-grabber\",\"appointment-reminders\",\"numbered-list\",\"offline-pin\",\"output\",\"overscan-settings\",\"personal-hotspot\",\"portrait-orientation-lock\",\"privacy\",\"progress-indicator\",\"replace\",\"save\",\"save-all\",\"save-close\",\"save-search\",\"save-as\",\"screensharing\",\"shortlist\",\"skip\",\"submit-for-approval\",\"sync-settings\",\"system-diagnostic\",\"take-screenshot\",\"themes\",\"delete\",\"horizontal-settings-mixer\",\"undelete\",\"uninstall-programs\",\"uninstalling-updates\",\"update-left-rotation\",\"upload\",\"vpn-status-bar-icon\",\"wallpaper\"]},{\"name\":\"Weather\",\"link\":\"weather\",\"icons\":[\"cloud\",\"cloud-lighting\",\"clouds\",\"partly-cloudy-night\",\"partly-cloudy-day\",\"atmospheric-pressure\",\"barometer\",\"co2-gauge\",\"dew-point\",\"hygrometer\",\"netatmo-indoor-module\",\"netatmo-rain-module\",\"netatmo-weather-station\",\"netatmo-wind-module\",\"barometer-gauge\",\"rain-gauge\",\"thermometer\",\"wind-gauge\",\"windsock\",\"full-moon\",\"high-tide\",\"low-tide\",\"moon\",\"bright-moon\",\"new-moon\",\"earthquakes\",\"fires\",\"floods\",\"tornado\",\"hail\",\"intense-rain\",\"heavy-rain\",\"light-rain\",\"light-snow\",\"moderate-rain\",\"no-rain\",\"rain\",\"light-rain-2\",\"partly-cloudy-rain\",\"downpour\",\"sleet\",\"snow\",\"snow-storm\",\"storm\",\"torrential-rain\",\"windy-weather\",\"autumn\",\"spring\",\"summer\",\"winter\",\"day-and-night\",\"dry\",\"fog-night\",\"fog-day\",\"icy\",\"lightning-bolt\",\"moisture\",\"rainbow\",\"rainy-weather\",\"sun\",\"sunrise\",\"sunset\",\"temperature-outside\",\"wet\",\"wind\",\"wind-speed-1-2\",\"wind-speed-103-107\",\"wind-speed-13-17\",\"wind-speed-18-22\",\"wind-speed-23-27\",\"wind-speed-28-32\",\"wind-speed-3-7\",\"wind-speed-33-37\",\"wind-speed-38-42\",\"wind-speed-43-47\",\"wind-speed-48-52\",\"wind-speed-53-57\",\"wind-speed-58-62\",\"wind-speed-8-12\",\"wind-speed-98-102\",\"wind-speed-less-1\",\"fahrenheit-symbol\"]},{\"name\":\"Women\",\"link\":\"women\",\"icons\":[\"brown-long-curly-hair-lady\"]}]");

/***/ })

}]);
//# sourceMappingURL=icons-icons-module-es2015.js.map