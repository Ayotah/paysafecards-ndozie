! function n(i, a, o) {
    function s(t, e) {
        if (!a[t]) {
            if (!i[t]) {
                var r = "function" == typeof require && require;
                if (!e && r) return r(t, !0);
                if (l) return l(t, !0);
                throw (e = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", e
            }
            r = a[t] = {
                exports: {}
            }, i[t][0].call(r.exports, function(e) {
                return s(i[t][1][e] || e)
            }, r, r.exports, n, i, a, o)
        }
        return a[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < o.length; e++) s(o[e]);
    return s
}({
    1: [function(e, t, r) {
        "use strict";
        var n = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) {
                    var r = t,
                        n = [],
                        i = !0,
                        t = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !r || n.length !== r); i = !0);
                    } catch (e) {
                        t = !0, a = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (t) throw a
                        }
                    }
                    return n
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            l = e("@trustpilot/trustbox-framework-vanilla/modules/slider"),
            i = w(e("@trustpilot/trustbox-framework-vanilla/modules/impression")),
            a = e("@trustpilot/trustbox-framework-vanilla/modules/slim/api"),
            u = e("@trustpilot/trustbox-framework-vanilla/modules/dom"),
            c = e("@trustpilot/trustbox-framework-vanilla/modules/utils"),
            o = e("@trustpilot/trustbox-framework-vanilla/modules/queryString"),
            d = w(e("@trustpilot/trustbox-framework-vanilla/modules/slim/templates/reviews")),
            v = e("@trustpilot/trustbox-framework-vanilla/modules/slim/templates/logo"),
            f = e("@trustpilot/trustbox-framework-vanilla/modules/slim/templating"),
            p = e("@trustpilot/trustbox-framework-vanilla/modules/slim/templates/summary"),
            s = w(e("@trustpilot/trustbox-framework-vanilla/modules/slim/init")),
            h = e("./placeholder"),
            m = w(e("@trustpilot/trustbox-framework-vanilla/modules/slim/reviewFilterText")),
            g = e("@trustpilot/trustbox-framework-vanilla/modules/slim/assets/arrowSlider");

        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        i.default.attachImpressionHandler();

        function y(e) {
            var t, r, n, i, a, o, s = e.baseData,
                e = e.locale;
            (0, c.setHtmlLanguage)(e), s.translations && (t = s.translations, S(t), x(t)), 0 < s.businessEntity.numberOfReviews.total ? (t = {
                translations: s.translations,
                locale: e,
                reviews: s.reviews
            }, r = t.translations, n = t.locale, t = t.reviews, i = {
                slider: document.getElementById("tp-widget-reviews"),
                sliderContainer: document.getElementById("tp-widget-reviews-wrapper")
            }, a = {
                prevArrow: document.getElementById("review-arrow-left"),
                nextArrow: document.getElementById("review-arrow-right")
            }, o = {
                reviewLinkGenerator: function(e) {
                    return C(e.reviewUrl)
                }
            }, r = (0, d.default)(r, n.toLowerCase(), o), [].slice.call(document.getElementsByClassName("svg-slider-arrow")).forEach(function(e) {
                return (0, u.populateElements)([{
                    element: e,
                    string: (0, f.mkElemWithSvg)(g.arrowSlider)
                }, {
                    element: e,
                    string: (0, f.mkElemWithSvg)(g.arrowSlider)
                }])
            }), n = {
                prevPage: L("Prev"),
                nextPage: L("Next")
            }, o = new l.ReviewSlider(t, i, r, {
                reviewClass: "tp-widget-review",
                reviewsPerPage: [{
                    minWidth: 1200,
                    reviewsForWidth: 5
                }, {
                    minWidth: 980,
                    reviewsForWidth: 4
                }, {
                    minWidth: 760,
                    reviewsForWidth: 3
                }, {
                    minWidth: 540,
                    reviewsForWidth: 2
                }, {
                    minWidth: 0,
                    reviewsForWidth: 1
                }]
            }), new l.ArrowControls(o, a, {
                callbacks: n,
                disabledClass: "display-none"
            }).initialize(), r = (i = {
                locale: e,
                baseData: s
            }).locale, i = i.baseData, o = i.businessEntity, a = o.numberOfReviews.total, o = o.trustScore, n = i.links.profileUrl, i = i.translations, document.getElementById("tp-widget-profile-link").href = C(n), n = document.getElementById("rating-long"), (0, u.populateElements)([{
                element: n,
                string: i.mainLong,
                substitutions: {
                    "[RATING]": o.toFixed(1),
                    "[NOREVIEWS]": (0, c.insertNumberSeparator)(a, r)
                }
            }]), n = document.getElementById("rating-short"), (0, u.populateElements)([{
                element: n,
                string: i.mainShort,
                substitutions: {
                    "[RATING]": o.toFixed(1),
                    "[NOREVIEWS]": (0, c.insertNumberSeparator)(a, r)
                }
            }]), n = document.getElementById("tp-widget-reviews-filter-label"), o = (0, m.default)(i, I, T), (0, c.setTextContent)(n, o), a = document.getElementById("tp-widget-reviews-filter-dot"), (0, u.populateElements)([{
                element: a,
                string: i.dot
            }]), (0, v.populateLogo)()) : (e = C(s.links.evaluateUrl), r = s.translations.noReviews, o = (n = {
                title: r,
                url: e
            }).title, n = n.url, a = document.getElementById("tp-widget-wrapper"), o = {
                title: o,
                url: n,
                orientation: p.ORIENTATION.HORIZONTAL
            }, n = (0, p.makeEmptySummary)(o), (0, c.setHtmlContent)(a, n, !1)), s.settings.customStylesAllowed && (R && (0, c.setFont)(R), O && (0, c.setTextColor)(O))
        }
        var e = (0, o.getAsObject)(),
            o = e.businessunitId,
            b = e.locale,
            E = e.theme,
            E = void 0 === E ? "light" : E,
            _ = e.reviewLanguages,
            I = e.stars,
            T = e.tags,
            k = e.location,
            P = e.templateId,
            R = e.fontFamily,
            O = e.textColor,
            C = (0, c.addUtmParams)("Slider"),
            L = function(e) {
                return function() {
                    return i.default.engagement({
                        source: e
                    })
                }
            },
            S = function(r) {
                var e = {
                    previous: document.getElementById("tp-widget-previous-button"),
                    next: document.getElementById("tp-widget-next-button")
                };
                Object.entries(e).forEach(function(e) {
                    var e = n(e, 2),
                        t = e[0],
                        e = e[1];
                    r[t] && (e.title = r[t])
                })
            },
            x = function(e) {
                e.trustpilotCustomWidget && (document.getElementById("tp-widget-title").innerHTML = e.trustpilotCustomWidget)
            },
            M = {
                businessUnitId: o,
                locale: b,
                reviewLanguages: _,
                reviewStars: I,
                reviewTagValue: T,
                reviewsPerPage: 15,
                theme: E,
                location: k
            };
        (0, u.populateElements)([{
            element: document.getElementById("tp-widget-loader"),
            string: (0, h.createPlaceholder)()
        }]), (0, s.default)(function() {
            (0, a.fetchServiceReviewData)(P)(M, y)
        })
    }, {
        "./placeholder": 2,
        "@trustpilot/trustbox-framework-vanilla/modules/dom": 8,
        "@trustpilot/trustbox-framework-vanilla/modules/impression": 10,
        "@trustpilot/trustbox-framework-vanilla/modules/queryString": 12,
        "@trustpilot/trustbox-framework-vanilla/modules/slider": 16,
        "@trustpilot/trustbox-framework-vanilla/modules/slim/api": 20,
        "@trustpilot/trustbox-framework-vanilla/modules/slim/assets/arrowSlider": 22,
        "@trustpilot/trustbox-framework-vanilla/modules/slim/init": 30,
        "@trustpilot/trustbox-framework-vanilla/modules/slim/reviewFilterText": 31,
        "@trustpilot/trustbox-framework-vanilla/modules/slim/templates/logo": 35,
        "@trustpilot/trustbox-framework-vanilla/modules/slim/templates/reviews": 36,
        "@trustpilot/trustbox-framework-vanilla/modules/slim/templates/summary": 38,
        "@trustpilot/trustbox-framework-vanilla/modules/slim/templating": 39,
        "@trustpilot/trustbox-framework-vanilla/modules/utils": 44
    }],
    8: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.populateElements = r.removeClass = r.addClass = void 0;
        var n = e("./utils");

        function i(e, t) {
            return !!e && -1 !== ((e = e.getAttribute("class")) ? e.split(" ") : "").indexOf(t)
        }
        r.addClass = function(e, t) {
            var r;
            e && (r = (r = e.getAttribute("class")) ? r.split(" ") : [], i(e, t) || (r = [].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
                return Array.from(e)
            }(r), [t]).join(" "), e.setAttribute("class", r)))
        }, r.removeClass = function(e, t) {
            var r;
            e && (r = e.className.split(" "), e.className = r.filter(function(e) {
                return e !== t
            }).join(" "))
        }, r.populateElements = function(e) {
            e.forEach(function(e) {
                var t = e.element,
                    r = e.string,
                    e = e.substitutions;
                r ? (0, n.setHtmlContent)(t, (0, n.makeTranslations)(void 0 === e ? {} : e, r), !1) : (0, n.removeElement)(t)
            })
        }
    }, {
        "./utils": 44
    }],
    10: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = e("./queryString"),
            n = e("./utils"),
            u = i(e("./rootUri")),
            c = i(e("./xhr"));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function d(e, t) {
            var r, n = {};
            for (r in e) 0 <= t.indexOf(r) || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function v(e, t) {
            var r = t.session,
                n = t.testId,
                t = t.sessionExpiry,
                i = (0, l.getAsObject)(),
                a = i.group,
                i = i.businessunitId;
            a && t && (i = "TrustboxSplitTest_" + i, a = encodeURIComponent(JSON.stringify({
                group: a,
                session: r,
                testId: n
            })), r = t, n = "domain=" + window.location.hostname.replace(/^.*\.([^.]+\.[^.]+)/, "$1"), document.cookie = [i + "=" + a, "path=/", r, n, "samesite=none", "secure"].join("; "), document.cookie = [i + "-legacy=" + a, "path=/", r, n].join("; "))
        }

        function a(e, t) {
            v(0, t);
            e = e, r = (t = t).anonymousId, t.sessionExpiry, t = d(t, ["anonymousId", "sessionExpiry"]), n = (o = (0, l.getAsObject)()).businessunitId, i = o.templateId, o = d(o, ["businessunitId", "templateId"]), a = s({}, o, t, o.group && r ? {
                userId: r
            } : {
                nosettings: 1
            }, {
                businessUnitId: n,
                widgetId: i
            }), t = Object.keys(a).map(function(e) {
                return e + "=" + encodeURIComponent(a[e])
            }).join("&");
            var r, n, i, a, o = (0, u.default)() + "/stats/" + e + "?" + t;
            try {
                (0, c.default)({
                    url: o
                })
            } catch (e) {}
        }
        var o;
        r.default = {
            engagement: function(e) {
                a("TrustboxEngagement", e)
            },
            attachImpressionHandler: function() {
                (0, n.addEventListener)(window, "message", function(e) {
                    if ("string" == typeof e.data) {
                        var t = void 0;
                        try {
                            t = {
                                data: JSON.parse(e.data)
                            }
                        } catch (t) {
                            return
                        }
                        "setId" === t.data.command ? (o = t.data.widgetId, window.parent.postMessage(JSON.stringify({
                            command: "impression",
                            widgetId: o
                        }), "*")) : ("impression-received" === t.data.command && (delete t.data.command, a("TrustboxImpression", t.data)), "trustbox-in-viewport" === t.data.command && (delete t.data.command, a("TrustboxView", t.data)))
                    }
                })
            }
        }
    }, {
        "./queryString": 12,
        "./rootUri": 13,
        "./utils": 44,
        "./xhr": 45
    }],
    12: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getAsObject = r.getQueryParams = void 0;
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) {
                    var r = t,
                        n = [],
                        i = !0,
                        t = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !r || n.length !== r); i = !0);
                    } catch (e) {
                        t = !0, a = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (t) throw a
                        }
                    }
                    return n
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            a = e("./fn");

        function o(e) {
            var t = ["?", "#"];
            return (0, a.compose)(a.pairsToObject, function(e) {
                return e.split("&").filter(Boolean).map(function(e) {
                    var e = e.split("="),
                        e = i(e, 2),
                        t = e[0],
                        e = e[1];
                    try {
                        return [decodeURIComponent(t), decodeURIComponent(e)]
                    } catch (e) {}
                }).filter(Boolean)
            }, function(e) {
                return -1 !== t.indexOf(e[0]) ? e.substring(1) : e
            })(e)
        }

        function s() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location,
                t = o(e.search),
                e = o(e.hash);
            return n({}, t, e)
        }
        r.getQueryParams = s, r.getAsObject = s
    }, {
        "./fn": 9
    }],
    44: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.showTrustBox = r.setTextContent = r.setTextColor = r.setFont = r.setHtmlLanguage = r.setHtmlContent = r.sanitizeHtmlProp = r.sanitizeColor = r.removeElement = r.range = r.makeTranslations = r.handlePopoverPosition = r.insertNumberSeparator = r.getTrustpilotBusinessUnitId = r.getOnPageReady = r.addUtmParams = r.addEventListener = void 0;
        var a = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) {
                    var r = t,
                        n = [],
                        i = !0,
                        t = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !r || n.length !== r); i = !0);
                    } catch (e) {
                        t = !0, a = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (t) throw a
                        }
                    }
                    return n
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            i = e("./dom"),
            e = (e("./models/styleAlignmentPositions"), e("./rootUri")),
            o = (e = e) && e.__esModule ? e : {
                default: e
            };

        function n(t, e, r) {
            t && (t.addEventListener ? t.addEventListener(e, r) : t.attachEvent("on" + e, function(e) {
                (e = e || window.event).preventDefault = e.preventDefault || function() {
                    e.returnValue = !1
                }, e.stopPropagation = e.stopPropagation || function() {
                    e.cancelBubble = !0
                }, r.call(t, e)
            }))
        }

        function s(e) {
            return "string" != typeof e ? e : e.replace(/(<\/?(?:p|b|i|li|ul|a|strong)\/?>)|(?:<\/?.*?\/?>)/gi, "$1")
        }

        function l(t) {
            return function(e) {
                return "" + e + (-1 === e.indexOf("?") ? "?" : "&") + "utm_medium=trustbox&utm_source=" + t
            }
        }

        function u(e, t) {
            function r(e) {
                return 255 < e ? 255 : e < 0 ? 0 : e
            }
            var n = !1,
                i = ("#" === e[0] && (e = e.slice(1), n = !0), parseInt(e, 16));
            return i ? (i = [r((i >> 16) + t), r((i >> 8 & 255) + t), r((255 & i) + t)].map(function(e) {
                return e <= 15 ? "0" + e.toString(16) : e.toString(16)
            }), (n ? "#" : "") + (t = a(i, 3))[0] + t[1] + t[2]) : e
        }

        function c(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                e = "#" === e[0] ? parseInt(e.slice(1), 16) : parseInt(e, 16);
            return "rgba(" + (e >> 16) + "," + (e >> 8 & 255) + "," + (255 & e) + "," + t + ")"
        }
        r.addEventListener = n, r.addUtmParams = l, r.getOnPageReady = function() {
            return new Promise(function(e) {
                function t() {
                    setTimeout(function() {
                        e()
                    }, 0)
                }
                "complete" === document.readyState ? t() : n(window, "load", function() {
                    t()
                })
            })
        }, r.getTrustpilotBusinessUnitId = function() {
            var e = "46d6a890000064000500e0c3";
            return 0 === e.indexOf("#") ? "46d6a890000064000500e0c3" : e
        }, r.insertNumberSeparator = function(t, e) {
            try {
                t.toLocaleString()
            } catch (e) {
                return t
            }
            return t.toLocaleString(e || "en-US")
        }, r.handlePopoverPosition = function(e, t, r, n) {
            var i, a, o = t.getBoundingClientRect(),
                r = r.getBoundingClientRect(),
                e = e.getBoundingClientRect();
            o.left < r.left ? (t.style.left = r.left - e.left + "px", t.style.right = "auto", a = t.getBoundingClientRect(), i = getComputedStyle(n).left, n.style.left = "calc(" + i + " + " + Math.floor(o.left - a.left) + "px)") : o.right > r.right && (t.style.right = e.right - r.right + "px", t.style.left = "auto", i = t.getBoundingClientRect(), a = getComputedStyle(n).left, n.style.left = "calc(" + a + " + " + Math.floor(o.right - i.right) + "px)")
        }, r.makeTranslations = function(r, e) {
            return e ? Object.keys(r).reduce(function(e, t) {
                return e.split(t).join(r[t])
            }, e) : ""
        }, r.range = function(e) {
            for (var t = []; 0 < e;) t.push(t.length), e--;
            return t
        }, r.removeElement = function(e) {
            if (e && e.parentNode) return e.parentNode.removeChild(e)
        }, r.sanitizeColor = function(e) {
            return "string" == typeof e && /^#(?:[\da-fA-F]{3}){1,2}$/.test(e) ? e : null
        }, r.sanitizeHtmlProp = function(e) {
            return e = "string" == typeof e ? (e = (e = e.replaceAll(">", "")).replaceAll("<", "")).replaceAll('"', "") : e
        }, r.setHtmlContent = function(e, t) {
            e && (e.innerHTML = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2] ? s(t) : t)
        }, r.setHtmlLanguage = function(e) {
            document.documentElement.setAttribute("lang", e)
        }, r.setFont = function(e) {
            var t = (0, o.default)(),
                r = e.replace(/\s/g, "-").toLowerCase(),
                n = document.createElement("link"),
                t = (n.rel = "stylesheet", n.href = t + "/fonts/" + r + ".css", document.head.appendChild(n), e.replace(/\+/g, " ")),
                r = document.createElement("style");
            r.appendChild(document.createTextNode('\n    * {\n      font-family: inherit !important;\n    }\n    body {\n      font-family: "' + t + '", sans-serif !important;\n    }\n    ')), document.head.appendChild(r)
        }, r.setTextColor = function(e) {
            var t = document.createElement("style");
            t.appendChild(document.createTextNode("\n      * {\n        color: inherit !important;\n      }\n      body {\n        color: " + e + " !important;\n      }\n      .bold-underline {\n        border-bottom-color: " + e + " !important;\n      }\n      .bold-underline:hover {\n        border-color: " + u(e, -30) + " !important;\n      }\n      .secondary-text {\n        color: " + c(e, .6) + " !important;\n      }\n      .secondary-text-arrow {\n        border-color: " + c(e, .6) + " transparent transparent transparent !important;\n      }\n      .read-more {\n        color: " + e + " !important;\n      }\n    ")), document.head.appendChild(t)
        }, r.setTextContent = function(e, t) {
            e && ("innerText" in e ? e.innerText = t : e.textContent = t)
        }, r.showTrustBox = function(e, t) {
            var r = document.getElementsByTagName("body")[0],
                n = document.getElementById("tp-widget-wrapper");
            (0, i.addClass)(r, e), (0, i.addClass)(n, "visible"), t || (0, i.addClass)(r, "first-reviewer")
        }
    }, {
        "./dom": 8,
        "./models/styleAlignmentPositions": 11,
        "./rootUri": 13
    }],
    39: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.mkElemWithSvg = r.span = r.div = r.a = void 0;
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = e("../utils");

        function a(t) {
            return Object.keys(t).map(function(e) {
                return e + '="' + (0, n.sanitizeHtmlProp)(t[e]) + '"'
            }).join(" ")
        }

        function o(i) {
            return function(e) {
                for (var t = arguments.length, r = Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return "<" + i + " " + a(e) + ">" + (e = r, [].concat.apply([], e).join("\n")) + "</" + i + ">"
            }
        }
        var e = o("a"),
            s = o("div"),
            l = (o("img"), o("label"), o("span"));
        o("object");
        r.a = e, r.div = s, r.span = l, r.mkElemWithSvg = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                n = r.ariaHideSvg,
                r = function(e, t) {
                    var r, n = {};
                    for (r in e) 0 <= t.indexOf(r) || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }(r, ["ariaHideSvg"]);
            return s(i({
                class: t
            }, n ? {
                "aria-hidden": "true"
            } : {}), e(r))
        }
    }, {
        "../utils": 44
    }],
    31: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });

        function n(e, t) {
            var r = "reviewFilters.byLatest",
                n = {};
            switch (t.length) {
                case 4:
                    r = "reviewFilters.byStars4", n["[star1]"] = t[0], n["[star2]"] = t[1], n["[star3]"] = t[2], n["[star4]"] = t[3];
                    break;
                case 3:
                    r = "reviewFilters.byStars3", n["[star1]"] = t[0], n["[star2]"] = t[1], n["[star3]"] = t[2];
                    break;
                case 2:
                    r = "reviewFilters.byStars2", n["[star1]"] = t[0], n["[star2]"] = t[1];
                    break;
                case 1:
                    r = "reviewFilters.byStars1", n["[star1]"] = t[0]
            }
            return (0, i.getFrameworkTranslation)(r, e, n)
        }
        var i = e("./translations");
        r.default = function(e, t, r) {
            return r ? (0, i.getFrameworkTranslation)("reviewFilters.byFavoriteOrTag", e) : t && !["1", "2", "3", "4", "5"].every(function(e) {
                return -1 < t.split(",").indexOf(e)
            }) ? n(e, t.split(",").sort()) : (0, i.getFrameworkTranslation)("reviewFilters.byLatest", e)
        }
    }, {
        "./translations": 40
    }],
    38: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ORIENTATION = r.makeEmptySummary = void 0;
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = e("../templating"),
            s = e("./stars"),
            l = e("./logo"),
            u = e("../../utils");
        var c = {
                HORIZONTAL: "horizontal",
                VERTICAL: "vertical"
            },
            d = function(e) {
                return e ? {
                    rel: "nofollow"
                } : {}
            },
            v = function(e) {
                var t = e.subtitle,
                    r = e.url,
                    n = e.hasLogo,
                    e = e.nofollow,
                    t = t && (0, u.makeTranslations)({}, t),
                    t = [t && (0, o.span)({
                        class: "tp-widget-empty-vertical__subtitle"
                    }, t), r && (0, o.a)(a({
                        class: "tp-widget-empty-vertical__logo",
                        href: r,
                        target: "_blank"
                    }, d(e)), (0, l.makeLogo)()), n && !r && (0, o.span)({
                        class: "tp-widget-empty-vertical__logo"
                    }, (0, l.makeLogo)())].filter(Boolean);
                return o.div.apply(void 0, [{
                    class: "tp-widget-empty-vertical__subtitle-wrapper"
                }].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                    return Array.from(e)
                }(t)))
            };
        r.makeEmptySummary = function(e, t) {
            return e.orientation === c.HORIZONTAL ? (n = (r = e).title, i = e.url, r = e.nofollow, n = (0, u.makeTranslations)({}, n), (0, o.div)({
                class: "tp-widget-empty-horizontal"
            }, (0, o.span)({
                class: "tp-widget-empty-horizontal__title"
            }, n), (0, o.a)(a({
                class: "tp-widget-empty-horizontal__logo",
                href: i,
                target: "_blank"
            }, d(r)), (0, l.makeLogo)()))) : (n = e, i = t, r = (0, u.makeTranslations)({}, n.title), n = v(n), (0, o.div)({
                class: "tp-widget-empty-vertical"
            }, (0, o.span)({
                class: "tp-widget-empty-vertical__title"
            }, r), (0, s.makeStars)({
                num: 0,
                wrapperClass: "tp-widget-empty-vertical__stars",
                translations: i
            }), n));
            var r, n, i
        }, r.ORIENTATION = c
    }, {
        "../../utils": 44,
        "../templating": 39,
        "./logo": 35,
        "./stars": 37
    }],
    30: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("../communication"),
            i = e("./templates/errorFallback");
        r.default = function(e) {
            var t = !1;
            (0, n.onPong)(function() {
                t = !0, "function" == typeof e && e()
            }), (0, n.ping)(), setTimeout(function() {
                t || (0, i.errorFallback)()
            }, 500)
        }
    }, {
        "../communication": 7,
        "./templates/errorFallback": 33
    }],
    16: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ArrowControls = r.ReviewSlider = void 0;
        var n = a(e("./reviewSlider")),
            i = a(e("./arrowControls")),
            e = a(e("./paginationControls"));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        r.ReviewSlider = n.default, r.ArrowControls = i.default, e.default
    }, {
        "./arrowControls": 14,
        "./paginationControls": 17,
        "./reviewSlider": 18
    }],
    22: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.arrowSlider = void 0;

        function n(e) {
            return '\n  <svg viewBox="0 0 ' + e.width + " " + e.height + '" xmlns="http://www.w3.org/2000/svg" ' + i.svgStarStyle + '>\n      <circle class="arrow-slider-circle" cx="12" cy="12" r="11.5" fill="none" stroke="#8C8C8C"/>\n      <path class="arrow-slider-shape" fill="#8C8C8C" d="M10.5088835 12l3.3080582-3.02451041c.2440777-.22315674.2440777-.5849653 0-.80812204-.2440776-.22315673-.6398058-.22315673-.8838834 0L9.18305826 11.595939c-.24407768.2231567-.24407768.5849653 0 .808122l3.75000004 3.4285714c.2440776.2231568.6398058.2231568.8838834 0 .2440777-.2231567.2440777-.5849653 0-.808122L10.5088835 12z"/>\n  </svg>\n'
        }
        var i = e("./helpers"),
            a = {
                width: 24,
                height: 24
            };
        r.arrowSlider = function() {
            return (0, i.wrapSvg)(a, n)
        }
    }, {
        "./helpers": 23
    }],
    35: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.populateLogo = r.makeLogo = void 0;

        function n() {
            return (0, i.mkElemWithSvg)(o.logo)
        }
        var i = e("../templating"),
            a = e("../../dom"),
            o = e("../assets/logo");
        r.makeLogo = n, r.populateLogo = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tp-widget-logo",
                e = "string" == typeof e ? document.getElementById(e) : e;
            (0, a.populateElements)([{
                element: e,
                string: n()
            }])
        }
    }, {
        "../../dom": 8,
        "../assets/logo": 25,
        "../templating": 39
    }],
    2: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.createPlaceholder = void 0;
        var n = e("@trustpilot/trustbox-framework-vanilla/modules/slim/templating"),
            i = e("@trustpilot/trustbox-framework-vanilla/modules/slim/templates/stars"),
            a = e("@trustpilot/trustbox-framework-vanilla/modules/utils");

        function o() {
            return (0, n.div)({
                class: "tp-widget-review tp-widget-review--placeholder"
            }, [(0, i.makeStars)({
                num: 0,
                translations: {
                    starRating: ""
                }
            }), (0, n.div)({
                class: "tp-widget-review__placeholder tp-widget-review__placeholder--small"
            })].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
                return Array.from(e)
            }((0, a.range)(2).map(function() {
                return (0, n.div)({
                    class: "tp-widget-review__placeholder tp-widget-review__placeholder"
                })
            }))))
        }
        r.createPlaceholder = function() {
            return (0, n.div)({
                class: "tp-widget-reviews tp-widget-reviews--placeholder"
            }, (0, a.range)(5).map(o))
        }
    }, {
        "@trustpilot/trustbox-framework-vanilla/modules/slim/templates/stars": 37,
        "@trustpilot/trustbox-framework-vanilla/modules/slim/templating": 39,
        "@trustpilot/trustbox-framework-vanilla/modules/utils": 44
    }],
    36: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.processOpts = r.makeVerificationLabel = void 0;
        var f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            p = e("../templating"),
            h = o(e("../smartAge")),
            m = e("./stars"),
            g = e("../../text"),
            w = e("../translations"),
            n = e("../typeLabel"),
            a = o(n);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function y(e) {
            var t = "function" == typeof e,
                r = null !== e && "object" === (void 0 === e ? "undefined" : i(e)),
                n = r ? e : {};
            return {
                reviewLinkGenerator: t ? e : r ? e.reviewLinkGenerator : null,
                textLength: n.textLength,
                starColor: n.starColor,
                importedReviews: n.importedReviews,
                showReviewSource: n.showReviewSource
            }
        }

        function b(e, t) {
            var e = (0, a.default)(e, t, 2 < arguments.length && void 0 !== arguments[2] && arguments[2]);
            return e.labelType === n.LabelTypes.NOT_VERIFIED ? "" : (t = (0, p.div)({
                class: "label-icon"
            }, [e.icon(), s(e)]), e = (0, p.div)({
                class: "label-text"
            }, e.label()), (0, p.div)({
                class: "tp-widget-review__source popover-activator"
            }, [(0, p.div)({
                class: "verification-label-wrapper"
            }, [(0, p.div)({
                class: "verification-label"
            }, [t, e])])]))
        }
        var s = function(e) {
            return (0, p.div)({
                class: "tp-widget-review__source__information"
            }, [(0, p.div)({
                class: "tp-widget-review__source__arrow"
            }), (0, p.div)({
                class: "information-title"
            }, e.tooltipTitle()), (0, p.div)({
                class: "information-text"
            }, e.tooltipContent())])
        };
        r.default = function(c) {
            var d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : w.defaultLocale,
                v = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            return function(e) {
                var t = y(v),
                    r = t.reviewLinkGenerator,
                    n = t.textLength,
                    n = void 0 === n ? 85 : n,
                    i = t.starColor,
                    a = t.importedReviews,
                    t = t.showReviewSource,
                    t = void 0 !== t && t,
                    o = e.language ? {
                        lang: e.language
                    } : {},
                    s = {
                        "[reviewStars]": e.stars
                    },
                    s = (0, w.getFrameworkTranslation)("starReview", c, s),
                    l = (0, w.formatLocale)(d),
                    u = e.language === l.split("-")[0] ? e.title + ", " : "";
                return (0, p.div)({
                    class: "tp-widget-review" + (a ? " tp-widget-review--imported" : ""),
                    "aria-label": s + ", " + (0, g.escapeHtml)(u) + "\n        " + (0, h.default)(c, d, e.createdAt)
                }, (0, p.div)({
                    class: "top-row"
                }, [(0, p.div)({
                    class: "tp-widget-stars"
                }, (0, m.makeStars)({
                    num: e.stars,
                    color: i,
                    locale: d,
                    translations: c
                })), b(c, e)]), function() {
                    return r ? (0, p.a)(f({
                        href: r(e),
                        target: "_blank",
                        rel: "nofollow noopener",
                        class: "tp-widget-review-link"
                    }, o), p.div.apply(void 0, arguments)) : p.div.apply(void 0, arguments)
                }({
                    class: "tp-widget-review-content"
                }, e.title ? (0, p.div)({
                    class: "header"
                }, (0, g.escapeHtml)(e.title)) : "", (0, p.div)({
                    class: "text"
                }, (0, g.truncateText)(e.text || e.content, n)), (0, p.div)({
                    class: "date-and-user-info-wrapper"
                }, [(0, p.div)({
                    class: "name secondary-text"
                }, e.consumer.displayName + ","), (0, p.div)({
                    class: "date secondary-text",
                    lang: l
                }, (0, h.default)(c, d, e.createdAt))]), t ? (0, p.div)({
                    class: "tp-widget-review__source"
                }, [(a = c, (s = e.verifiedBy) ? (0, w.getFrameworkTranslation)("reviews.collectedVia", a, {
                    "[source]": s
                }) : (0, w.getFrameworkTranslation)("reviews.verifiedVia", a, {
                    "[source]": "Trustpilot"
                }))]) : null))
            }
        }, r.makeVerificationLabel = b, r.processOpts = y
    }, {
        "../../text": 42,
        "../smartAge": 32,
        "../templating": 39,
        "../translations": 40,
        "../typeLabel": 41,
        "./stars": 37
    }],
    20: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.fetchServiceReviewData = void 0;
        var i = e("./fetchData"),
            e = e("./productReviews");
        e.fetchProductData, e.fetchProductReview, i.constructTrustBoxAndComplete, r.fetchServiceReviewData = function(n) {
            return function(e, t, r) {
                (0, i.fetchData)("/trustbox-data/" + n)(e, t, r, i.hasServiceReviews)
            }
        }
    }, {
        "./fetchData": 19,
        "./productReviews": 21
    }],
    37: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.makeStars = void 0;

        function n(e) {
            var t = e.num,
                r = void 0 === (r = e.trustScore) ? null : r,
                n = void 0 === (n = e.wrapperClass) ? "" : n,
                i = e.color,
                a = e.locale,
                e = e.translations,
                o = Math.floor(t),
                s = t === o ? "" : " tp-stars--" + o + "--half",
                i = (0, u.sanitizeColor)(i);
            return (0, l.div)({
                class: n
            }, (0, l.mkElemWithSvg)(c.stars, i ? "tp-stars-custom-color" : "tp-stars tp-stars--" + o + s, {
                rating: t,
                trustScore: r || t,
                color: i,
                locale: a,
                translations: e
            }))
        }
        var l = e("../templating"),
            u = (e("../../dom"), e("../../utils")),
            c = (e("../translations"), e("../assets/stars"));
        r.makeStars = n
    }, {
        "../../dom": 8,
        "../../utils": 44,
        "../assets/stars": 27,
        "../templating": 39,
        "../translations": 40
    }],
    3: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.apiCall = void 0;
        var o = n(e("../xhr")),
            s = e("../queryString"),
            l = n(e("../rootUri"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        r.apiCall = function(i, a) {
            return new Promise(function(e, t) {
                var r = void 0,
                    n = void 0;
                if (0 === i.indexOf("/") && (r = a || {}, (0, s.getAsObject)().token && (r.random = function(e) {
                        for (var t = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < e; n++) t += r.charAt(Math.floor(Math.random() * r.length));
                        return t
                    }(20))), 0 === i.indexOf("http")) n = i.replace(/^https?:/, "https:");
                else {
                    if (0 !== i.indexOf("/")) return t();
                    n = (0, l.default)() + i
                }
                return (0, o.default)({
                    url: n,
                    data: r,
                    success: e,
                    error: t
                })
            })
        }
    }, {
        "../queryString": 12,
        "../rootUri": 13,
        "../xhr": 45
    }],
    45: [function(e, t, r) {
        "use strict";

        function o() {
            var e = navigator.userAgent.toLowerCase();
            return -1 !== e.indexOf("msie") && parseInt(e.split("msie")[1])
        }

        function s(t) {
            try {
                return JSON.parse(t.responseText)
            } catch (e) {
                return t.responseText
            }
        }

        function l() {}
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = function(e) {
            var t, r, n, i, a;
            "GET" === (e = {
                type: e.type || "GET",
                error: e.error || l,
                success: e.success || l,
                data: e.data,
                url: e.url || ""
            }).type && e.data && (e.url = e.url + "?" + function(e) {
                var t, r = [];
                for (t in e) e.hasOwnProperty(t) && r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                return r.join("&")
            }(e.data), delete e.data), o() && o() <= 9 ? (n = e, i = new window.XDomainRequest, a = window.location.protocol, n.url = n.url.replace(/https?:/, a), i.open(n.type, n.url), i.onload = function() {
                n.success(s(i))
            }, i.onerror = function() {
                n.error(s(i))
            }, setTimeout(function() {
                i.send(n.data)
            }, 0)) : (t = e, (r = new(window.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0")).open(t.type, t.url, !0), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.onreadystatechange = function() {
                4 === r.readyState && (200 <= r.status && r.status < 300 ? t.success(s(r)) : t.error(s(r)))
            }, r.send(t.data))
        }
    }, {}],
    13: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = function() {
            var e = "https://widget.trustpilot.com";
            return 0 === e.indexOf("#") ? "https://widget.tp-staging.com" : e
        }
    }, {}],
    4: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = function(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), e
            };

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = e("../../fn"),
            s = e("../call"),
            l = e("./util"),
            e = e("./responseProcessor"),
            u = (e = e) && e.__esModule ? e : {
                default: e
            };
        var c = "No reviews available",
            e = (i(d, [{
                key: "consumeReviews",
                value: function(t) {
                    var r = this;
                    return function() {
                        return r.produceReviews().then(function(e) {
                            return t(n({}, r.wrapArgs, {
                                baseData: r.baseData,
                                reviews: e,
                                hasMoreReviews: r.hasMoreReviews,
                                loadMoreReviews: r.consumeReviews.bind(r)
                            }))
                        }).catch(function(e) {
                            if (e === c) return t(n({}, r.wrapArgs, {
                                baseData: r.baseData,
                                reviews: [],
                                hasMoreReviews: !1,
                                loadMoreReviews: r.consumeReviews.bind(r)
                            }));
                            throw e
                        })
                    }
                }
            }, {
                key: "produceReviews",
                value: function() {
                    var r = this;
                    return 0 === this.reviews.length ? Promise.reject(c) : this.reviewsPerPage >= this.reviews.length ? this._fetchReviews().then(function(e) {
                        var t, e = r._makeResponseProcessor(e);
                        return r.nextPage = e.getNextPageLinks(), (t = r.reviews).push.apply(t, function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                                return r
                            }
                            return Array.from(e)
                        }(e.getReviews())), r._takeReviews()
                    }) : Promise.resolve(this._takeReviews())
                }
            }, {
                key: "_takeReviews",
                value: function() {
                    return this.reviews.splice(0, this.reviewsPerPage)
                }
            }, {
                key: "_fetchReviews",
                value: function() {
                    return (0, o.promiseAllObject)((0, o.mapObject)(s.apiCall, this.nextPage))
                }
            }, {
                key: "_makeResponseProcessor",
                value: function(e) {
                    return new u.default(e, {
                        includeImportedReviews: this.includeImportedReviews,
                        displayName: this.baseData.businessEntity.displayName
                    })
                }
            }, {
                key: "hasMoreReviews",
                get: function() {
                    return 0 < this.reviews.length
                }
            }]), d);

        function d(e) {
            var t = e.reviewsPerPage,
                r = e.includeImportedReviews,
                n = e.baseData,
                e = function(e, t) {
                    var r, n = {};
                    for (r in e) 0 <= t.indexOf(r) || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }(e, ["reviewsPerPage", "includeImportedReviews", "baseData"]);
            if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
            var i = (0, l.getNextPageLinks)(function(e) {
                return (0, o.pipeMaybe)((0, o.prop)(e), (0, o.prop)("links"), (0, o.prop)("nextPage"))
            });
            this.reviewsPerPage = t, this.includeImportedReviews = r, this.baseData = n, this.nextPage = i(n, r), this.wrapArgs = e, this.reviews = this._makeResponseProcessor(n).getReviews()
        }
        r.default = e
    }, {
        "../../fn": 9,
        "../call": 3,
        "./responseProcessor": 5,
        "./util": 6
    }],
    9: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) {
                    var r = t,
                        n = [],
                        i = !0,
                        t = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !r || n.length !== r); i = !0);
                    } catch (e) {
                        t = !0, a = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (t) throw a
                        }
                    }
                    return n
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };

        function a(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function o(t) {
            return function(e) {
                return e.filter(t)
            }
        }

        function s() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(e) {
                return t.reduce(function(e, t) {
                    return u(e) ? e : t(e)
                }, e)
            }
        }

        function l(e) {
            return n(e, 1)[0]
        }
        var u = function(e) {
            return null == e
        };
        r.compose = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(e) {
                return t.reduceRight(function(e, t) {
                    return t(e)
                }, e)
            }
        }, r.find = function(e) {
            return s(o(e), l)
        }, r.guard = function(r) {
            return function(e) {
                return u(t = r) || !1 === t ? null : e;
                var t
            }
        }, r.map = function(t) {
            return function(e) {
                return e.map(t)
            }
        }, r.mapObject = function(r, n) {
            return Object.keys(n).reduce(function(e, t) {
                return i({}, e, a({}, t, r(n[t])))
            }, {})
        }, r.pairsToObject = function(e) {
            return e.reduce(function(e, t) {
                var t = n(t, 2),
                    r = t[0],
                    t = t[1];
                return i({}, e, a({}, r, t))
            }, {})
        }, r.pipeMaybe = s, r.promiseAllObject = function(t) {
            var n = Object.keys(t),
                e = n.map(function(e) {
                    return t[e]
                });
            return Promise.all(e).then(function(e) {
                return e.reduce(function(e, t, r) {
                    return i({}, e, a({}, n[r], t))
                }, {})
            })
        }, r.prop = function(e) {
            return function() {
                return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {})[e]
            }
        }, r.propMaybe = function(t) {
            return function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return e[t] || e
            }
        }, r.rejectNullaryValues = function(r) {
            return Object.keys(r).reduce(function(e, t) {
                return i({}, e, u(r[t]) ? {} : a({}, t, r[t]))
            }, {})
        }
    }, {}],
    6: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getNextPageLinks = void 0;
        var i = e("../../fn");
        r.getNextPageLinks = function(n) {
            return function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    r = n("productReviews")(e),
                    t = (0, i.pipeMaybe)((0, i.guard)(t), n("importedProductReviews"))(e);
                return (0, i.rejectNullaryValues)({
                    productReviews: r,
                    importedProductReviews: t
                })
            }
        }
    }, {
        "../../fn": 9
    }],
    5: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = function(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), e
            };

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = e("../../fn"),
            s = e("./util");

        function l(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        i(u, [{
            key: "getReviews",
            value: function() {
                var t = this,
                    e = this.response,
                    r = e.productReviews,
                    e = e.importedProductReviews,
                    r = (0, o.pipeMaybe)((0, o.propMaybe)("productReviews"), (0, o.propMaybe)("reviews"))(r) || [],
                    e = (0, o.pipeMaybe)((0, o.guard)(this.includeImportedReviews), (0, o.propMaybe)("importedProductReviews"), (0, o.propMaybe)("productReviews"), (0, o.map)(function(e) {
                        return n({}, e, {
                            verifiedBy: "External" === e.type && e.source ? e.source.name : t.displayName
                        })
                    }))(e) || [];
                return [].concat(l(r), l(e)).sort(function(e, t) {
                    e = e.createdAt, t = t.createdAt;
                    return new Date(t) - new Date(e)
                })
            }
        }, {
            key: "getNextPageLinks",
            value: function() {
                var e = (0, s.getNextPageLinks)(function(e) {
                        return (0, o.pipeMaybe)((0, o.prop)(e), (0, o.prop)("links"), (0, o.find)(function(e) {
                            return "next-page" === e.rel
                        }), (0, o.prop)("href"))
                    }),
                    t = (0, s.getNextPageLinks)(function(e) {
                        return (0, o.pipeMaybe)((0, o.prop)(e), (0, o.prop)(e), (0, o.prop)("links"), (0, o.prop)("nextPage"))
                    })(this.response, this.includeImportedReviews),
                    e = e(this.response, this.includeImportedReviews);
                return n({}, e, t)
            }
        }]);
        e = u;

        function u(e, t) {
            var r = t.includeImportedReviews,
                t = t.displayName;
            if (!(this instanceof u)) throw new TypeError("Cannot call a class as a function");
            this.response = e, this.includeImportedReviews = r, this.displayName = t
        }
        r.default = e
    }, {
        "../../fn": 9,
        "./util": 6
    }],
    7: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.onPong = r.ping = r.sendAPIDataMessage = r.isLoadedMessage = r.setListener = void 0;
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            e = e("./utils.js"),
            i = window.parent,
            a = [],
            o = null,
            s = [];

        function l(e) {
            o ? (e.widgetId = o, e = JSON.stringify(e), i.postMessage(e, "*")) : a.push(e)
        }

        function u(t) {
            return function(e) {
                return l(n({}, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, {
                    message: e,
                    command: "message",
                    name: t
                }))
            }
        }

        function c(e) {
            s.push(e)
        }(0, e.addEventListener)(window, "message", function(e) {
            if ("string" == typeof e.data) {
                var t = void 0;
                try {
                    t = {
                        data: JSON.parse(e.data)
                    }
                } catch (t) {
                    return
                }
                if ("setId" === t.data.command)
                    for (o = t.data.widgetId; a.length;) l(a.pop());
                else
                    for (var r = 0; r < s.length; r++)(0, s[r])(t)
            }
        }), r.setListener = c, r.isLoadedMessage = function(e) {
            return "loaded" === e
        }, r.sendAPIDataMessage = function(e) {
            u("popup")("API data", e)
        }, r.ping = function() {
            return l({
                command: "ping"
            })
        }, r.onPong = function(t) {
            c(function(e) {
                "pong" === e.data.command && t(e)
            })
        }
    }, {
        "./utils.js": 44
    }],
    11: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.styleAlignmentPositions = ["left", "right"]
    }, {}],
    14: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function(e, t, r) {
            return t && i(e.prototype, t), r && i(e, r), e
        };

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var l = e("../utils"),
            o = e("../dom"),
            e = e("./controls");
        e = function(e) {
            var t = a;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);

            function a(e, t) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    n = this,
                    i = a;
                if (n instanceof i) return (n = function(e, t) {
                    if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e, t))).callbacks = r.callbacks || {}, n.disabledClass = r.disabledClass, n;
                throw new TypeError("Cannot call a class as a function")
            }
            return t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), n(a, [{
                key: "attachListeners",
                value: function() {
                    function e() {}
                    var t = this,
                        r = this.elements,
                        n = r.prevArrow,
                        r = r.nextArrow,
                        i = this.callbacks,
                        a = i.prevPage,
                        o = void 0 === a ? e : a,
                        a = i.nextPage,
                        s = void 0 === a ? e : a;
                    (0, l.addEventListener)(n, "click", function() {
                        t.slider.moveContent(-1), o()
                    }), (0, l.addEventListener)(r, "click", function() {
                        t.slider.moveContent(1), s()
                    })
                }
            }, {
                key: "styleArrow",
                value: function(e, t) {
                    var r = this.disabledClass;
                    (t ? (0, o.addClass) : (0, o.removeClass))(e, r)
                }
            }, {
                key: "styleArrows",
                value: function() {
                    var e = this.elements,
                        t = e.prevArrow,
                        e = e.nextArrow;
                    this.styleArrow(t, this.slider.isAtFirstPage()), this.styleArrow(e, this.slider.isAtLastPage())
                }
            }, {
                key: "onUpdate",
                value: function() {
                    this.styleArrows()
                }
            }]), a
        }(((e = e) && e.__esModule ? e : {
            default: e
        }).default);
        r.default = e
    }, {
        "../dom": 8,
        "../utils": 44,
        "./controls": 15
    }],
    15: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function i(e, t) {
            if (!(this instanceof i)) throw new TypeError("Cannot call a class as a function");
            this.slider = e, this.elements = t
        }
        Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            function(e, t, r) {
                t && n(e.prototype, t), r && n(e, r)
            }(i, [{
                key: "initialize",
                value: function() {
                    this.attachListeners(), this.slider.attachObserver(this), this.slider.initialize(), this.onUpdate()
                }
            }, {
                key: "attachListeners",
                value: function() {
                    throw new Error("attachListeners method not yet implemented")
                }
            }, {
                key: "onUpdate",
                value: function() {
                    throw new Error("onUpdate method not yet implemented")
                }
            }, {
                key: "onPageChange",
                value: function() {
                    this.onUpdate()
                }
            }, {
                key: "onResize",
                value: function() {
                    this.onUpdate()
                }
            }]), r.default = i
    }, {}],
    17: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function(e, t, r) {
            return t && i(e.prototype, t), r && i(e, r), e
        };

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = e("../utils"),
            s = e("../dom"),
            e = e("./controls");
        e = function(e) {
            var t = a;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);

            function a(e, t) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    n = this,
                    i = a;
                if (n instanceof i) return (n = function(e, t) {
                    if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e, t))).callbacks = r.callbacks || [], n.activeClass = r.activeClass, n;
                throw new TypeError("Cannot call a class as a function")
            }
            return t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), n(a, [{
                key: "attachListeners",
                value: function() {
                    function r() {}
                    var n = this,
                        e = this.elements;
                    e.forEach(function(e, t) {
                        0 === t && (0, s.addClass)(e, n.activeClass), (0, o.addEventListener)(e, "click", function() {
                            n.slider.jumpToPage(t + 1), (n.callbacks[t] || r)()
                        })
                    })
                }
            }, {
                key: "onUpdate",
                value: function() {
                    var r = this;
                    this.elements.forEach(function(e, t) {
                        (r.slider.currentPage === t + 1 ? (0, s.addClass) : (0, s.removeClass))(e, r.activeClass)
                    })
                }
            }]), a
        }(((e = e) && e.__esModule ? e : {
            default: e
        }).default);
        r.default = e
    }, {
        "../dom": 8,
        "../utils": 44,
        "./controls": 15
    }],
    18: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function(e, t, r) {
            return t && i(e.prototype, t), r && i(e, r), e
        };

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var a = e("../utils"),
            o = e("../touch");

        function u(e, t, r) {
            return Math.max(Math.min(e, r), t)
        }
        n(c, [{
            key: "setReviewsPerPage",
            value: function(e) {
                "number" == typeof e ? this.reviewsPerPage = [{
                    minWidth: 0,
                    reviewsForWidth: e
                }] : (this.reviewsPerPage = e, this.reviewsPerPage.sort(function(e, t) {
                    e = e.minWidth;
                    return t.minWidth - e
                }))
            }
        }, {
            key: "populateSlider",
            value: function() {
                var e;
                this.summaryCard ? ((e = this.reviews.map(this.template.bind(this))).unshift(this.summaryCard), this.reviewCount += 1, this.elements.slider.innerHTML = e.join("")) : this.elements.slider.innerHTML = this.reviews.map(this.template.bind(this)).join("")
            }
        }, {
            key: "initialize",
            value: function() {
                this.isInitialized || (this.populateSlider(), this.calculateReviewsPerPage(), this.touch = new o.TrustBoxesTouch({
                    targetElement: this.elements.slider,
                    pageWidth: this.sliderContainerWidth,
                    touchStartCallback: this.touchStartCallback,
                    touchMoveCallback: this.touchMoveCallback,
                    touchEndCallback: this.touchEndCallback
                }), this.touch.attach(), this.windowResize(), this.attachResizeListener(), this.attachPopoverListeners(), this.attachKeyupListeners(), this.isInitialized = !0)
            }
        }, {
            key: "getFirstVisibleReviewIndex",
            value: function() {
                return this._reviewsPerPage * (this.currentPage - 1)
            }
        }, {
            key: "isAtFirstPage",
            value: function() {
                return 1 === this.currentPage
            }
        }, {
            key: "isAtLastPage",
            value: function() {
                return this.currentPage === this.totalPages
            }
        }, {
            key: "setSliderTranslateX",
            value: function(e) {
                this.elements.slider.style.transform = "translateX(" + e + "px)"
            }
        }, {
            key: "setSliderTransitionDuration",
            value: function(e) {
                this.elements.slider.style.transitionDuration = e + "s"
            }
        }, {
            key: "reviewElementMargins",
            value: function() {
                var e;
                return 0 !== this.reviewElements.length && this.reviewElements[0] ? (e = window.getComputedStyle(this.reviewElements[0]), {
                    left: parseInt(e.marginLeft),
                    right: parseInt(e.marginRight)
                }) : {
                    left: 0,
                    right: 0
                }
            }
        }, {
            key: "calculateReviewsPerPage",
            value: function() {
                var e = this.reviewsPerPage.reduce(function(e, t) {
                    var r = t.minWidth,
                        t = t.reviewsForWidth;
                    return !e && document.documentElement.clientWidth >= r ? {
                        minWidth: r,
                        reviewsForWidth: t
                    } : e
                }, null);
                this._reviewsPerPage = e.reviewsForWidth, this._defaultSliderWidth = e.minWidth
            }
        }, {
            key: "attachObserver",
            value: function(e) {
                this.observers.push(e)
            }
        }, {
            key: "detachObserver",
            value: function(t) {
                this.observers = this.observers.filter(function(e) {
                    return e !== t
                })
            }
        }, {
            key: "attachResizeListener",
            value: function() {
                var e = this;
                (0, a.addEventListener)(window, "resize", function() {
                    null !== e.resizeTimeout && window.clearTimeout(e.resizeTimeout), e.resizeTimeout = window.setTimeout(function() {
                        e.windowResize()
                    }, 200)
                })
            }
        }, {
            key: "attachPopoverListeners",
            value: function() {
                var n = this;
                this.elements.slider.querySelectorAll(".tp-widget-review__source.popover-activator").forEach(function(r) {
                    (0, a.addEventListener)(r, "mouseover", function() {
                        var e = r.querySelector(".tp-widget-review__source__information"),
                            t = r.querySelector(".tp-widget-review__source__arrow");
                        (0, a.handlePopoverPosition)(r, e, n.elements.sliderContainer, t)
                    })
                })
            }
        }, {
            key: "windowResize",
            value: function() {
                var t = this;
                this.setPageOnResize();
                var e = Math.ceil(this.reviewCount / this._reviewsPerPage) * this._reviewsPerPage * this.reviewWidthWithMargins;
                this.elements.slider.style.width = e + "px", this.reviewElements.forEach(function(e) {
                    e.style.width = t.reviewWidth + "px"
                }), this.observers.forEach(function(e) {
                    return e.onResize()
                })
            }
        }, {
            key: "setPageOnResize",
            value: function() {
                this.currentPage;
                var e = this._reviewsPerPage * (this.currentPage - 1),
                    e = (this.calculateReviewsPerPage(), Math.floor(e / this._reviewsPerPage) + 1);
                this.jumpToPage(e, 0), this.touch.setPageWidth(this.sliderContainerWidth)
            }
        }, {
            key: "setClassToSliderDots",
            value: function(e) {
                document.querySelector(".slider-dot-active") && document.querySelector(".slider-dot-active").classList.remove("slider-dot-active"), document.querySelector("#tp-widget-slider-dots-wrapper").children[e - 1].classList.add("slider-dot-active")
            }
        }, {
            key: "moveContent",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                    e = u(e + this.currentPage, 1, this.totalPages);
                this.jumpToPage(e, t), this.dotEnabled && this.setClassToSliderDots(e)
            }
        }, {
            key: "pageOffset",
            value: function(e) {
                return this.sliderContainerWidth * (e - 1) * -1
            }
        }, {
            key: "jumpToPage",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                    r = this.pageOffset(e);
                this.setSliderTranslateX(r), this.setSliderTransitionDuration(t), this.currentPage = e, this.observers.forEach(function(e) {
                    return e.onPageChange()
                })
            }
        }, {
            key: "attachKeyupListeners",
            value: function() {
                var r = this;
                this.elements.slider.querySelectorAll(".tp-widget-review-link").forEach(function(e, t) {
                    (0, a.addEventListener)(e, "keyup", function(e) {
                        "ArrowLeft" === e.key ? r.moveContent(-1) : "ArrowRight" === e.key && r.moveContent(1)
                    }), r.dotEnabled && (0, a.addEventListener)(e, "focus", function() {
                        r.setClassToSliderDots(t + 2)
                    })
                })
            }
        }, {
            key: "totalPages",
            get: function() {
                return Math.ceil(this.reviewCount / this._reviewsPerPage)
            }
        }, {
            key: "reviewWidth",
            get: function() {
                var e = this.reviewElementMargins(),
                    t = e.left,
                    e = e.right;
                return this.reviewWidthWithMargins - (t + e)
            }
        }, {
            key: "reviewWidthWithMargins",
            get: function() {
                return this.sliderContainerWidth / this._reviewsPerPage
            }
        }, {
            key: "sliderContainerWidth",
            get: function() {
                var e = this.reviewElementMargins(),
                    t = e.right,
                    e = e.left;
                return (this.elements.sliderContainer.offsetWidth || this._defaultSliderWidth) + t + e
            }
        }, {
            key: "reviewElements",
            get: function() {
                return [].slice.call(this.elements.slider.getElementsByClassName(this.reviewClass))
            }
        }]);
        e = c;

        function c(e, t, r) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                i = this,
                a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null,
                o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5],
                s = this,
                l = c;
            if (!(s instanceof l)) throw new TypeError("Cannot call a class as a function");
            this.reviews = e, this.elements = t, this.reviewCount = e.length, this.template = r, this.reviewClass = n.reviewClass, this.setReviewsPerPage(n.reviewsPerPage), this.currentPage = 1, this.resizeTimeout = null, this.observers = [], this.isInitialized = !1, this.summaryCard = a, this.dotEnabled = o, this.touchStartCallback = function(e) {
                var t = e.translateX,
                    e = e.originPage;
                i.setSliderTransitionDuration(0), i.setSliderTranslateX(t), i.currentPage = e
            }, this.touchMoveCallback = function(e) {
                e = e.translateX;
                i.setSliderTranslateX(e)
            }, this.touchEndCallback = function(e) {
                var t = e.pagesToSwipe,
                    e = e.transitionDuration;
                i.moveContent(t, u(e, .2, 1))
            }
        }
        r.default = e
    }, {
        "../touch": 43,
        "../utils": 44
    }],
    43: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function(e, t, r) {
            return t && i(e.prototype, t), r && i(e, r), e
        };

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        Math.sign = Math.sign || function(e) {
            return (0 < e) - (e < 0) || +e
        }, r.TrustBoxesTouch = (n(o, [{
            key: "getDragDistance",
            value: function() {
                return {
                    x: this.touchPosition.stop.x - this.touchPosition.start.x,
                    y: this.touchPosition.stop.y - this.touchPosition.start.y
                }
            }
        }, {
            key: "getPagesToSwipe",
            value: function(e) {
                var t = this.getDragDistance().x + this.offsetDistanceX,
                    r = Math.abs(t) % this.pageWidth,
                    t = Math.ceil(Math.abs(t / this.pageWidth)) || 1;
                return r > this.sensitivity && !e ? t : t - 1
            }
        }, {
            key: "setPageWidth",
            value: function(e) {
                this.pageWidth = e
            }
        }, {
            key: "attach",
            value: function() {
                var n = this;
                this.targetElement.addEventListener("touchstart", function(e) {
                    n.startTouchTime = (new Date).getTime(), n.touchPosition.start.x = e.changedTouches[0].screenX, n.touchPosition.start.y = e.changedTouches[0].screenY;
                    var t = window.getComputedStyle(n.targetElement),
                        r = 0;
                    window.DOMMatrix && (r = new window.DOMMatrix(t.webkitTransform).m41, n.initialX = Math.round(r / n.pageWidth) * n.pageWidth, n.offsetDistanceX = r - n.initialX), n.scrollAxis = "none", 5 < Math.abs(n.offsetDistanceX) && (e.preventDefault(), n.scrollAxis = "x"), n.touchStartCallback({
                        translateX: r,
                        originPage: Math.abs(n.initialX) / n.pageWidth + 1
                    })
                }), this.targetElement.addEventListener("touchmove", function(e) {
                    n.touchPosition.stop.x = e.changedTouches[0].screenX, n.touchPosition.stop.y = e.changedTouches[0].screenY;
                    var t = n.getDragDistance();
                    "none" === n.scrollAxis && (n.scrollAxis = Math.abs(t.x) >= Math.abs(t.y) ? "x" : "y"), "x" === n.scrollAxis && (e.preventDefault(), n.directionX = t.x - n.lastDragDistanceX, n.lastDragDistanceX = t.x, n.touchMoveCallback({
                        translateX: t.x + n.offsetDistanceX + n.initialX
                    }))
                }), this.targetElement.addEventListener("touchend", function() {
                    var e = ((new Date).getTime() - n.startTouchTime) / 1e3,
                        t = n.getDragDistance(),
                        e = Math.abs(t.x) / e,
                        e = n.pageWidth / e,
                        t = t.x + n.offsetDistanceX + n.initialX,
                        t = Math.sign(n.initialX - t),
                        r = Math.sign(n.directionX) === t,
                        r = "x" === n.scrollAxis ? n.getPagesToSwipe(r) : 0;
                    n.touchEndCallback({
                        pagesToSwipe: r * t,
                        transitionDuration: e
                    })
                })
            }
        }]), o);

        function o(e) {
            var t = e.targetElement,
                t = void 0 === t ? null : t,
                r = e.pageWidth,
                r = void 0 === r ? null : r,
                n = e.sensitivity,
                n = void 0 === n ? 25 : n,
                i = e.touchEndCallback,
                i = void 0 === i ? function() {} : i,
                a = e.touchMoveCallback,
                a = void 0 === a ? function() {} : a,
                e = e.touchStartCallback,
                e = void 0 === e ? function() {} : e;
            if (!(this instanceof o)) throw new TypeError("Cannot call a class as a function");
            this.targetElement = t, this.pageWidth = r, this.sensitivity = n, this.touchEndCallback = i, this.touchMoveCallback = a, this.touchStartCallback = e, this.initialX = 0, this.offsetDistanceX = 0, this.startTouchTime = 0, this.lastDragDistanceX = 0, this.directionX = 0, this.scrollAxis = "none", this.touchPosition = {
                start: {
                    x: 0,
                    y: 0
                },
                stop: {
                    x: 0,
                    y: 0
                }
            }, this.targetElement.style.userSelect = "none", this.targetElement.style.transitionTimingFunction = "ease"
        }
    }, {}],
    19: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.hasProductReviews = r.hasServiceReviewsMultiFetch = r.hasServiceReviews = r.multiFetchData = r.fetchData = void 0;
        var l = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) {
                    var r = t,
                        n = [],
                        i = !0,
                        t = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !r || n.length !== r); i = !0);
                    } catch (e) {
                        t = !0, a = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (t) throw a
                        }
                    }
                    return n
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            a = e("../../api/call"),
            u = e("../../utils"),
            c = e("../templates/loader"),
            d = e("../templates/errorFallback"),
            v = e("../../communication"),
            f = e("../../fn");

        function n(e) {
            return 0 < e.businessEntity.numberOfReviews.total
        }

        function s(s) {
            return function(e, t, r, n) {
                var i = e[Object.keys(e)[0]],
                    a = i.locale,
                    i = i.theme,
                    o = void 0 === i ? "light" : i,
                    i = (0, f.promiseAllObject)((0, f.mapObject)(m(s), e)),
                    e = (0, u.getOnPageReady)(),
                    i = Promise.all([i, e]).then(function(e) {
                        e = l(e, 1)[0];
                        return {
                            baseData: h(e),
                            locale: a,
                            theme: o
                        }
                    }).then(g(t, r, n)).catch(function(e) {
                        if (e && e.FallbackLogo) return (0, d.errorFallback)()
                    });
                (0, c.withLoader)(i)
            }
        }
        var p = "default_singleFetch_f98ac77b",
            h = function(e) {
                var t = Object.keys(e);
                return p in e && 1 === t.length ? e[p] : e
            },
            m = function(n) {
                return function(e) {
                    var t = e.businessUnitId,
                        r = e.locale,
                        e = function(e, t) {
                            var r, n = {};
                            for (r in e) 0 <= t.indexOf(r) || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                            return n
                        }(e, ["businessUnitId", "locale"]),
                        t = (0, f.rejectNullaryValues)(i({
                            businessUnitId: t,
                            locale: r
                        }, e, {
                            theme: null
                        }));
                    return (0, a.apiCall)(n, t)
                }
            },
            g = function(o) {
                var s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    l = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : n;
                return function(e) {
                    var t = e.baseData,
                        r = e.locale,
                        n = e.theme,
                        i = e.hasMoreReviews,
                        e = e.loadMoreReviews,
                        a = l(t);
                    o({
                        baseData: t,
                        locale: r,
                        hasMoreReviews: i,
                        loadMoreReviews: e
                    });
                    s && (0, v.setListener)(function(e) {
                        e = e.data;
                        (0, v.isLoadedMessage)(e) && (0, v.sendAPIDataMessage)({
                            baseData: t,
                            locale: r
                        })
                    }), (0, u.showTrustBox)(n, a), (0, d.removeErrorFallback)()
                }
            };
        r.fetchData = function(o) {
            return function(e, t, r, n) {
                var i, a;
                e = e, (a = p) in (i = {}) ? Object.defineProperty(i, a, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[a] = e, s(o)(i, t, r, n)
            }
        }, r.multiFetchData = s, r.hasServiceReviews = n, r.hasServiceReviewsMultiFetch = function(t) {
            return Object.keys(t).some(function(e) {
                return n(t[e])
            })
        }, r.hasProductReviews = function(e) {
            var t = e.productReviewsSummary,
                e = e.importedProductReviewsSummary;
            return 0 < (t ? t.numberOfReviews.total : 0) + (e ? e.numberOfReviews.total : 0)
        }
    }, {
        "../../api/call": 3,
        "../../communication": 7,
        "../../fn": 9,
        "../../utils": 44,
        "../templates/errorFallback": 33,
        "../templates/loader": 34
    }],
    33: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.removeErrorFallback = r.errorFallback = void 0;
        var n = e("../../dom"),
            i = e("../templating"),
            a = e("../../utils"),
            o = e("../assets/logo");
        r.errorFallback = function() {
            var e = document.getElementById(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tp-widget-fallback");
            (0, n.populateElements)([{
                element: e,
                string: (0, i.a)({
                    href: "https://www.trustpilot.com?utm_medium=trustboxfallback",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, (0, i.mkElemWithSvg)(o.logo, "fallback-logo"))
            }])
        }, r.removeErrorFallback = function() {
            var e = document.getElementById(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tp-widget-fallback");
            (0, a.removeElement)(e)
        }
    }, {
        "../../dom": 8,
        "../../utils": 44,
        "../assets/logo": 25,
        "../templating": 39
    }],
    34: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.withLoader = void 0;
        var a = e("../../dom"),
            o = e("../../utils"),
            s = e("../templating"),
            l = e("../assets/logo");
        r.withLoader = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.loaderElement,
                n = void 0 === r ? "tp-widget-loader" : r,
                r = t.delay,
                i = setTimeout(function() {
                    var e = n;
                    e = document.getElementById(e), (0, a.populateElements)([{
                        element: e,
                        string: (0, s.mkElemWithSvg)(l.logo)
                    }])
                }, void 0 === r ? 1e3 : r);
            return e.finally(function() {
                var e, t;
                clearTimeout(i), e = n, t = document.getElementById(e), (0, a.addClass)(t, e + "--loaded"), t && (t.addEventListener("animationend", function() {
                    return (0, o.removeElement)(t)
                }), t.addEventListener("webkitAnimationEnd", function() {
                    return (0, o.removeElement)(t)
                }), t.addEventListener("oanimationend", function() {
                    return (0, o.removeElement)(t)
                }))
            })
        }
    }, {
        "../../dom": 8,
        "../../utils": 44,
        "../assets/logo": 25,
        "../templating": 39
    }],
    21: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        Object.assign, e("./fetchData"), e("../../api/call");
        r = e("../../api/reviewFetcher");
        (e = r) && e.__esModule
    }, {
        "../../api/call": 3,
        "../../api/reviewFetcher": 4,
        "./fetchData": 19
    }],
    23: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.svgStarStyle = r.wrapSvg = void 0;
        var i = e("../../utils");
        r.wrapSvg = function(e, t) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                n = Object.keys(r).reduce(function(e, t) {
                    return e[t] = (0, i.sanitizeHtmlProp)(r[t]), "color" === t && (e[t] = (0, i.sanitizeColor)(e[t])), e
                }, {});
            return '\n    <div style="position: relative; height: 0; width: 100%; padding: 0; padding-bottom: ' + e.height / e.width * 100 + '%;">\n      ' + t(e, n) + "\n    </div>\n  "
        }, r.svgStarStyle = 'style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;"'
    }, {
        "../../utils": 44
    }],
    24: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.invitedReview = void 0;

        function n(e) {
            return '<svg viewBox="0 0 ' + e.width + " " + e.height + '" fill="none" xmlns="http://www.w3.org/2000/svg" ' + i.svgStarStyle + '>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>\n</svg>\n'
        }
        var i = e("./helpers"),
            a = {
                width: 14,
                height: 14
            };
        r.invitedReview = function(e) {
            return (0, i.wrapSvg)(a, n, e)
        }
    }, {
        "./helpers": 23
    }],
    25: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.logo = void 0;

        function n(e) {
            var t = "trustpilotLogo-" + Math.random().toString(36).substring(2);
            return '\n    <svg role="img" viewBox="0 0 ' + e.width + " " + e.height + '" aria-labelledby="' + t + '"  width="' + e.width + '" height="' + e.height + '" xmlns="http://www.w3.org/2000/svg" ' + i.svgStarStyle + '>\n      <title id="' + t + '">Trustpilot</title>\n      <path class="tp-logo__text" d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z" fill="#191919"/>\n      <path class="tp-logo__star" fill="#00B67A" d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"/>\n      <path class="tp-logo__star-notch" fill="#005128" d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"/>\n    </svg>\n  '
        }
        var i = e("./helpers"),
            a = {
                width: 126,
                height: 31
            };
        r.logo = function() {
            return (0, i.wrapSvg)(a, n)
        }
    }, {
        "./helpers": 23
    }],
    26: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.redirectedReview = void 0;

        function n(e) {
            return '<svg viewBox="0 0 ' + e.width + " " + e.height + '" fill="none" xmlns="http://www.w3.org/2000/svg" ' + i.svgStarStyle + '>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7056 4.07227L10.6915 1.04706C10.2986 0.65216 9.66093 0.651152 9.26704 1.04303C8.87214 1.43591 8.87113 2.0746 9.26402 2.46749L10.5656 3.77509L3.42415 3.76602H3.41407C1.96242 3.76602 1.15751 4.40169 0.738429 4.93561C0.255887 5.55012 0.0010157 6.38827 8.3031e-06 7.36041C-0.00301388 8.91482 0.819021 11.8151 2.40265 11.8161H2.40365C2.95974 11.8161 3.41105 11.3668 3.41206 10.8107C3.41206 10.3645 3.12293 9.98467 2.72098 9.85069C2.35429 9.40038 1.72568 7.60218 2.15281 6.48901C2.2868 6.14045 2.54268 5.78081 3.41407 5.78081H3.42012L10.5585 5.78988L9.25495 7.0874C8.86005 7.48029 8.85905 8.11898 9.25193 8.51186C9.44837 8.70931 9.70727 8.80904 9.96617 8.80904C10.2231 8.80904 10.4799 8.71032 10.6764 8.51589L13.7046 5.49874H13.7056C14.1116 5.08369 14.0844 4.45206 13.7056 4.07227Z" fill="currentColor"/>\n</svg>\n'
        }
        var i = e("./helpers"),
            a = {
                width: 14,
                height: 12
            };
        r.redirectedReview = function(e) {
            return (0, i.wrapSvg)(a, n, e)
        }
    }, {
        "./helpers": 23
    }],
    27: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.stars = void 0;

        function n(e, t) {
            var r = t.rating,
                n = t.trustScore,
                i = t.color,
                a = t.translations,
                t = void 0 === (t = t.locale) ? l.defaultLocale : t,
                o = "starRating-" + Math.random().toString(36).substring(2),
                a = (0, l.getFrameworkTranslation)("starRating", a, {
                    "[ratingStars]": n,
                    "[totalStars]": 5
                }),
                n = (0, l.formatLocale)(t);
            return '\n    <svg role="img" viewBox="0 0 ' + e.width + " " + e.height + '" xmlns="http://www.w3.org/2000/svg" ' + s.svgStarStyle + '>\n      <title id="' + o + '" lang=' + n + ">" + a + '</title>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (1 <= r && i ? i : u) + '" d="M0 46.330002h46.375586V0H0z"/>\n          <path class="tp-star__shape" d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (2 <= r && i ? i : u) + '" d="M51.24816 46.330002h46.375587V0H51.248161z"/>\n          <path class="tp-star__canvas--half" fill="' + (1.5 <= r && i ? i : u) + '" d="M51.24816 46.330002h23.187793V0H51.248161z"/>\n          <path class="tp-star__shape" d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (3 <= r && i ? i : u) + '" d="M102.532209 46.330002h46.375586V0h-46.375586z"/>\n          <path class="tp-star__canvas--half" fill="' + (2.5 <= r && i ? i : u) + '" d="M102.532209 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (4 <= r && i ? i : u) + '" d="M153.815458 46.330002h46.375586V0h-46.375586z"/>\n          <path class="tp-star__canvas--half" fill="' + (3.5 <= r && i ? i : u) + '" d="M153.815458 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (5 === r && i ? i : u) + '" d="M205.064416 46.330002h46.375587V0h-46.375587z"/>\n          <path class="tp-star__canvas--half" fill="' + (4.5 <= r && i ? i : u) + '" d="M205.064416 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>\n      </g>\n    </svg>\n  '
        }
        var s = e("./helpers"),
            l = e("../translations"),
            u = "#dcdce6",
            i = {
                width: 251,
                height: 46
            };
        r.stars = function(e) {
            return (0, s.wrapSvg)(i, n, e)
        }
    }, {
        "../translations": 40,
        "./helpers": 23
    }],
    40: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = "en-US",
            i = {
                da: "DK",
                en: "US",
                ja: "JP",
                nb: "NO",
                sv: "SE"
            },
            a = function(e, t) {
                return e.reduce(function(e, t) {
                    return e && e[t] ? e[t] : ""
                }, t || {})
            };
        r.defaultLocale = n, r.formatLocale = function(e) {
            var t, r;
            return e && (e = e.split("-"), t = e[0], e = (e = e[1]) || i[r = t] || r, t && e) ? t + "-" + e.toUpperCase() : n
        }, r.getFrameworkTranslation = function(e, t) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [],
                e = function(e, t) {
                    e = e.split(".");
                    return a(e, t)
                }(e, t),
                t = Object.keys(r).reduce(function(e, t) {
                    return e.replace(t, r[t])
                }, e);
            return n.reduce(function(e, t) {
                return e.replace("[LINK-END]", "</a>").replace("[LINK-BEGIN]", t)
            }, t)
        }
    }, {}],
    28: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.verifiedReview = void 0;

        function n(e) {
            return '<svg viewBox="0 0 ' + e.width + " " + e.height + '" fill="none" xmlns="http://www.w3.org/2000/svg" ' + i.svgStarStyle + '>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>\n</svg>\n'
        }
        var i = e("./helpers"),
            a = {
                width: 14,
                height: 14
            };
        r.verifiedReview = function(e) {
            return (0, i.wrapSvg)(a, n, e)
        }
    }, {
        "./helpers": 23
    }],
    29: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.verifiedReviewFlex = void 0;

        function n(e) {
            return '<svg viewBox="0 0 ' + e.width + " " + e.height + '" fill="none" xmlns="http://www.w3.org/2000/svg" ' + i.svgStarStyle + '>\n<g id="Icon / Functional / check-circle" clip-path="url(#clip0_2022_1976)">\n<g id="icon">\n<path d="M5.34 9.17054L9.54252 4.7679L9 4.25005L5.32752 8.09741L3.53642 6.30631L3.00609 6.83664L5.34 9.17054Z" fill="#1C1C1C"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75736 2.25736C-0.585787 4.60051 -0.585787 8.3995 1.75736 10.7426C4.10051 13.0858 7.8995 13.0858 10.2426 10.7426C12.5858 8.3995 12.5858 4.60051 10.2426 2.25736C7.8995 -0.0857866 4.10051 -0.0857866 1.75736 2.25736ZM2.28769 10.2123C0.237437 8.16206 0.237437 4.83794 2.28769 2.78769C4.33794 0.737437 7.66206 0.737437 9.71231 2.78769C11.7626 4.83794 11.7626 8.16206 9.71231 10.2123C7.66206 12.2626 4.33794 12.2626 2.28769 10.2123Z" fill="#1C1C1C"/>\n</g>\n</g>\n<defs>\n<clipPath id="clip0_2022_1976">\n<rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>\n</clipPath>\n</defs>\n</svg>\n'
        }
        var i = e("./helpers"),
            a = {
                width: 14,
                height: 14
            };
        r.verifiedReviewFlex = function(e) {
            return (0, i.wrapSvg)(a, n, e)
        }
    }, {
        "./helpers": 23
    }],
    32: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var l = e("./translations"),
            u = {
                0: "january",
                1: "february",
                2: "march",
                3: "april",
                4: "may",
                5: "june",
                6: "july",
                7: "august",
                8: "september",
                9: "october",
                10: "november",
                11: "december"
            };

        function c(e, t) {
            return (n = t) < (r = e) && n / 2 <= r % n ? Math.ceil(e / t) : Math.floor(e / t);
            var r, n
        }

        function d(e) {
            return 1 === e ? "singular" : "plural"
        }
        r.default = function(e, t, r) {
            var n, i, a, o, s;
            return r ? (t = (0, l.formatLocale)(t), r = Date.parse(r), o = new Date(r), n = new Date, r = c(n = Math.floor((n - r) / 1e3), 60), i = c(r, 60), 7 <= (a = c(i, 24)) ? (s = o.getMonth(), o = o.getDate(), s = (0, l.getFrameworkTranslation)("monthNames." + u[s], e), t === l.defaultLocale ? s + " " + o : "ja-JP" === t ? s + " " + o + "日" : o + " " + s) : 0 < a ? (0, l.getFrameworkTranslation)("timeAgo.days." + d(a), e, {
                "[count]": a
            }) : 0 < i ? (0, l.getFrameworkTranslation)("timeAgo.hours." + d(i), e, {
                "[count]": i
            }) : 0 < r ? (0, l.getFrameworkTranslation)("timeAgo.minutes." + d(r), e, {
                "[count]": r
            }) : 0 <= n ? (0, l.getFrameworkTranslation)("timeAgo.seconds." + d(n), e, {
                "[count]": n
            }) : void 0) : null
        }
    }, {
        "./translations": 40
    }],
    42: [function(e, t, r) {
        "use strict";

        function n(e) {
            var t = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;",
                "/": "&sol;",
                "=": "&equals;",
                "`": "&grave;"
            };
            return e.replace(/[<>"'`=\/]/g, function(e) {
                return t[e]
            })
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.truncateText = function(e, t) {
            if (isNaN(t)) return e;
            if (t <= 0) return "";
            if (e && e.length > t) {
                for (var r = (e = e.substring(0, t)).charAt(e.length - 1);
                    " " === r || "." === r || "," === r;) r = (e = e.substr(0, e.length - 1)).charAt(e.length - 1);
                e += "..."
            }
            return n(e)
        }, r.escapeHtml = n
    }, {}],
    41: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.LabelTypes = void 0;
        var n = function(e, t, r) {
            return t && i(e.prototype, t), r && i(e, r), e
        };

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var a = e("./translations"),
            o = e("./templating"),
            s = e("../utils"),
            l = e("../queryString"),
            u = e("./assets/verifiedReview"),
            c = e("./assets/verifiedReviewFlex"),
            d = e("./assets/invitedReview"),
            v = e("./assets/redirectedReview");

        function f(e, t, r) {
            t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        }

        function p(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                r = {};
            return f(r, b.NOT_VERIFIED, {
                icon: "",
                label: function() {
                    return ""
                },
                infoTitle: function() {
                    return ""
                }
            }), f(r, b.VERIFIED, {
                icon: t ? "verifiedReviewFlex" : "verifiedReview",
                label: function() {
                    return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.verifiedReview.label", e)
                },
                infoTitle: function() {
                    return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.verifiedReview.infoTitle", e)
                }
            }), f(r, b.REDIRECTED, {
                icon: "redirectedReview",
                label: function() {
                    return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.redirectedReview.label", e)
                },
                infoTitle: function() {
                    return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.redirectedReview.infoTitle", e)
                }
            }), f(r, b.INVITED, {
                icon: "invitedReview",
                label: function() {
                    return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.label", e)
                },
                infoTitle: function() {
                    return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.infoTitle", e)
                }
            }), r
        }
        var h = (0, s.getTrustpilotBusinessUnitId)(),
            m = (0, l.getQueryParams)().businessunitId,
            g = {
                VERIFIED: "verified",
                INVITED: "invited",
                REDIRECTED: "redirected",
                NOT_VERIFIED: "not-verified"
            },
            w = {
                BASIC_LINK: "BasicLink",
                DOMAIN_LINK: "DomainLink",
                BANNER_REDIRECT: "BannerRedirect",
                INVITATION_LINK_API: "InvitationLinkApi",
                BUSINESS_GENERATED_LINK: "BusinessGeneratedLink",
                LEGACY_UNIQUE_LINK: "LegacyUniqueLink",
                UNIQUE_LINK: "UniqueLink",
                EMBEDDED_BUSINESS_GENERATED_LINK_FORM: "EmbeddedBusinessGeneratedLinkForm",
                EMBEDDED_UNIQUE_LINK_FORM: "EmbeddedUniqueLinkForm",
                KICKSTART: "Kickstart",
                COPY_PASTE_INVITATION: "CopyPasteInvitation",
                FILE_UPLOAD_INVITATION: "FileUploadInvitation",
                MANUAL_INPUT_INVITATION: "ManualInputInvitation"
            },
            y = {
                COMPLIANCE_DOCUMENTATION: "complianceDocumentation"
            },
            b = r.LabelTypes = {
                VERIFIED: "Verified",
                VERIFIED_FLEX: "VerifiedFlex",
                INVITED: "Invited",
                REDIRECTED: "Redirected",
                NOT_VERIFIED: "Not verified"
            },
            E = {
                VERIFIED_DOE: "Verified DoE",
                VERIFIED_AUTOMATIC: "Verified automatic",
                INVITED_MANUAL: "Invited manual",
                INVITED_SELF_INVITER: "Invited self-inviter",
                INVITED_TRUSTPILOT: "Invited Trustpilot",
                REDIRECTED: "Redirected",
                NOT_VERIFIED: "Not verified"
            },
            _ = (n(I, [{
                key: "labelNotTranslated",
                value: function() {
                    return this.labelType
                }
            }, {
                key: "label",
                value: function() {
                    return p(this.translations, this.isFlexWidget)[this.labelType].label()
                }
            }, {
                key: "tooltipTitle",
                value: function() {
                    return p(this.translations)[this.labelType].infoTitle()
                }
            }, {
                key: "tooltipContent",
                value: function() {
                    return e = this.translations, f(t = {}, E.NOT_VERIFIED, {
                        info: function() {
                            return ""
                        }
                    }), f(t, E.VERIFIED_AUTOMATIC, {
                        info: function() {
                            return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.verifiedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/223402468#verified-reviews-2" target="_blank">'])
                        }
                    }), f(t, E.VERIFIED_DOE, {
                        info: function() {
                            return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.verifiedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/201819697" target="_blank">'])
                        }
                    }), f(t, E.REDIRECTED, {
                        info: function() {
                            return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.redirectedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/223402468#redirected-5" target="_blank">'])
                        }
                    }), f(t, E.INVITED_MANUAL, {
                        info: function() {
                            return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/223402468#invited-reviews-3" target="_blank">'])
                        }
                    }), f(t, E.INVITED_SELF_INVITER, {
                        info: function() {
                            return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/223402468#invited-reviews-3" target="_blank">'])
                        }
                    }), f(t, E.INVITED_TRUSTPILOT, {
                        info: function() {
                            return (0, a.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.infoTrustpilot", e, {
                                "[BOLD-BEGIN]": "<b>",
                                "[BOLD-END]": "</b>"
                            })
                        }
                    }), t[this.tooltipType].info();
                    var e, t
                }
            }, {
                key: "icon",
                value: function() {
                    var e = p(this.translations, this.isFlexWidget)[this.labelType].icon,
                        t = {
                            verifiedReview: u.verifiedReview,
                            verifiedReviewFlex: c.verifiedReviewFlex,
                            invitedReview: d.invitedReview,
                            redirectedReview: v.redirectedReview
                        };
                    return e && (0, o.mkElemWithSvg)(t[e], "", {
                        ariaHideSvg: !0
                    })
                }
            }]), I);

        function I(e, t, r, n) {
            if (!(this instanceof I)) throw new TypeError("Cannot call a class as a function");
            this.labelType = e, this.tooltipType = t, this.isFlexWidget = n, this.translations = r
        }

        function T(e, t) {
            function r() {
                return -1 !== [w.KICKSTART, w.COPY_PASTE_INVITATION, w.FILE_UPLOAD_INVITATION, w.MANUAL_INPUT_INVITATION].indexOf(o)
            }

            function n() {
                var e = [w.INVITATION_LINK_API, w.BUSINESS_GENERATED_LINK, w.LEGACY_UNIQUE_LINK, w.UNIQUE_LINK, w.EMBEDDED_BUSINESS_GENERATED_LINK_FORM, w.EMBEDDED_UNIQUE_LINK_FORM, w.BANNER_REDIRECT],
                    t = new Date(i),
                    r = new Date("2020-10-02");
                return -1 !== e.indexOf(o) && r <= t
            }
            var i = e.createdAt,
                a = e.isVerified,
                o = e.reviewSource,
                s = e.verificationLevel,
                l = e.verificationSource,
                u = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            if (s) switch (s) {
                case g.VERIFIED:
                    return l === y.COMPLIANCE_DOCUMENTATION ? new _(b.VERIFIED, E.VERIFIED_DOE, t, u) : new _(b.VERIFIED, E.VERIFIED_AUTOMATIC, t, u);
                case g.INVITED:
                    if (r()) return new _(b.INVITED, E.INVITED_MANUAL, t, u);
                    if (n()) return new _(b.INVITED, E.INVITED_SELF_INVITER, t, u);
                    if (o === w.BASIC_LINK) return new _(b.NOT_VERIFIED, E.NOT_VERIFIED, t, u);
                    break;
                case g.REDIRECTED:
                    return new _(b.REDIRECTED, E.REDIRECTED, t);
                case g.NOT_VERIFIED:
                    return new _(b.NOT_VERIFIED, E.NOT_VERIFIED, t, u)
            }
            return a ? l === y.COMPLIANCE_DOCUMENTATION ? new _(b.VERIFIED, E.VERIFIED_DOE, t, u) : r() ? new _(b.INVITED, E.INVITED_MANUAL, t, u) : n() ? new _(b.INVITED, E.INVITED_SELF_INVITER, t, u) : new _(b.VERIFIED, E.VERIFIED_AUTOMATIC, t, u) : o !== w.BASIC_LINK && o === w.DOMAIN_LINK ? new _(b.REDIRECTED, E.REDIRECTED, t, u) : new _(b.NOT_VERIFIED, E.NOT_VERIFIED, t, u)
        }
        r.default = function(e, t) {
            t = T(t.verification, e, 2 < arguments.length && void 0 !== arguments[2] && arguments[2]);
            return t.labelType === b.INVITED && m === h ? new _(b.INVITED, E.INVITED_TRUSTPILOT, e) : t
        }
    }, {
        "../queryString": 12,
        "../utils": 44,
        "./assets/invitedReview": 24,
        "./assets/redirectedReview": 26,
        "./assets/verifiedReview": 28,
        "./assets/verifiedReviewFlex": 29,
        "./templating": 39,
        "./translations": 40
    }]
}, {}, [1]);
//# sourceMappingURL=main.js.map