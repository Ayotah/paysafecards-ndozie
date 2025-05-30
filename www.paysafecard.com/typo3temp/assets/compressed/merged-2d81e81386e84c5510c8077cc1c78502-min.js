! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.SlimSelect = t() : e.SlimSelect = t()
}(window, function() {
    return n = {}, s.m = i = [function(e, t, i) {
        "use strict";

        function n(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
        }
        t.__esModule = !0, t.kebabCase = t.highlight = t.isValueInArrayOfObjects = t.debounce = t.putContent = t.ensureElementInView = t.hasClassInTree = void 0, t.hasClassInTree = function(e, t) {
            function n(e, t) {
                return t && e && e.classList && e.classList.contains(t) ? e : null
            }
            return n(e, t) || function e(t, i) {
                return t && t !== document ? n(t, i) ? t : e(t.parentNode, i) : null
            }(e, t)
        }, t.ensureElementInView = function(e, t) {
            var i = e.scrollTop + e.offsetTop,
                n = i + e.clientHeight,
                s = t.offsetTop,
                t = s + t.clientHeight;
            s < i ? e.scrollTop -= i - s : n < t && (e.scrollTop += t - n)
        }, t.putContent = function(e, t, i) {
            var n = e.offsetHeight,
                s = e.getBoundingClientRect(),
                e = i ? s.top : s.top - n,
                n = i ? s.bottom : s.bottom + n;
            return e <= 0 ? "below" : n >= window.innerHeight ? "above" : i ? t : "below"
        }, t.debounce = function(s, a, o) {
            var l;
            return void 0 === a && (a = 100), void 0 === o && (o = !1),
                function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var i = self,
                        n = o && !l;
                    clearTimeout(l), l = setTimeout(function() {
                        l = null, o || s.apply(i, e)
                    }, a), n && s.apply(i, e)
                }
        }, t.isValueInArrayOfObjects = function(e, t, i) {
            if (!Array.isArray(e)) return e[t] === i;
            for (var n = 0, s = e; n < s.length; n++) {
                var a = s[n];
                if (a && a[t] && a[t] === i) return !0
            }
            return !1
        }, t.highlight = function(e, t, i) {
            var n = e,
                s = new RegExp("(" + t.trim() + ")(?![^<]*>[^<>]*</)", "i");
            if (!e.match(s)) return e;
            var a = e.match(s).index,
                t = a + e.match(s)[0].toString().length,
                t = e.substring(a, t);
            return n = n.replace(s, '<mark class="'.concat(i, '">').concat(t, "</mark>"))
        }, t.kebabCase = function(e) {
            var t = e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function(e) {
                return "-" + e.toLowerCase()
            });
            return e[0] === e[0].toUpperCase() ? t.substring(1) : t
        }, "function" != typeof(t = window).CustomEvent && (n.prototype = t.Event.prototype, t.CustomEvent = n)
    }, function(e, t, i) {
        "use strict";
        t.__esModule = !0, t.validateOption = t.validateData = t.Data = void 0;
        var n = (s.prototype.newOption = function(e) {
            return {
                id: e.id || String(Math.floor(1e8 * Math.random())),
                value: e.value || "",
                text: e.text || "",
                innerHTML: e.innerHTML || "",
                selected: e.selected || !1,
                display: void 0 === e.display || e.display,
                disabled: e.disabled || !1,
                placeholder: e.placeholder || !1,
                class: e.class || void 0,
                data: e.data || {},
                mandatory: e.mandatory || !1
            }
        }, s.prototype.add = function(e) {
            this.data.push({
                id: String(Math.floor(1e8 * Math.random())),
                value: e.value,
                text: e.text,
                innerHTML: "",
                selected: !1,
                display: !0,
                disabled: !1,
                placeholder: !1,
                class: void 0,
                mandatory: e.mandatory,
                data: {}
            })
        }, s.prototype.parseSelectData = function() {
            this.data = [];
            for (var e = 0, t = this.main.select.element.childNodes; e < t.length; e++) {
                var i = t[e];
                if ("OPTGROUP" === i.nodeName) {
                    for (var n = {
                            label: i.label,
                            options: []
                        }, s = 0, a = i.childNodes; s < a.length; s++) {
                        var o, l = a[s];
                        "OPTION" === l.nodeName && (o = this.pullOptionData(l), n.options.push(o), o.placeholder && "" !== o.text.trim() && (this.main.config.placeholderText = o.text))
                    }
                    this.data.push(n)
                } else "OPTION" === i.nodeName && (o = this.pullOptionData(i), this.data.push(o), o.placeholder && "" !== o.text.trim() && (this.main.config.placeholderText = o.text))
            }
        }, s.prototype.pullOptionData = function(e) {
            return {
                id: !!e.dataset && e.dataset.id || String(Math.floor(1e8 * Math.random())),
                value: e.value,
                text: e.text,
                innerHTML: e.innerHTML,
                selected: e.selected,
                disabled: e.disabled,
                placeholder: "true" === e.dataset.placeholder,
                class: e.className,
                style: e.style.cssText,
                data: e.dataset,
                mandatory: !!e.dataset && "true" === e.dataset.mandatory
            }
        }, s.prototype.setSelectedFromSelect = function() {
            if (this.main.config.isMultiple) {
                for (var e = [], t = 0, i = this.main.select.element.options; t < i.length; t++) {
                    var n = i[t];
                    !n.selected || (n = this.getObjectFromData(n.value, "value")) && n.id && e.push(n.id)
                }
                this.setSelected(e, "id")
            } else {
                var s = this.main.select.element; - 1 !== s.selectedIndex && (s = s.options[s.selectedIndex].value, this.setSelected(s, "value"))
            }
        }, s.prototype.setSelected = function(e, t) {
            void 0 === t && (t = "id");
            for (var i = 0, n = this.data; i < n.length; i++) {
                var s = n[i];
                if (s.hasOwnProperty("label")) {
                    if (s.hasOwnProperty("options")) {
                        var a = s.options;
                        if (a)
                            for (var o = 0, l = a; o < l.length; o++) {
                                var r = l[o];
                                r.placeholder || (r.selected = this.shouldBeSelected(r, e, t))
                            }
                    }
                } else s.selected = this.shouldBeSelected(s, e, t)
            }
        }, s.prototype.shouldBeSelected = function(e, t, i) {
            if (void 0 === i && (i = "id"), Array.isArray(t))
                for (var n = 0, s = t; n < s.length; n++) {
                    var a = s[n];
                    if (i in e && String(e[i]) === String(a)) return !0
                } else if (i in e && String(e[i]) === String(t)) return !0;
            return !1
        }, s.prototype.getSelected = function() {
            for (var e = {
                    text: "",
                    placeholder: this.main.config.placeholderText
                }, t = [], i = 0, n = this.data; i < n.length; i++) {
                var s = n[i];
                if (s.hasOwnProperty("label")) {
                    if (s.hasOwnProperty("options")) {
                        var a = s.options;
                        if (a)
                            for (var o = 0, l = a; o < l.length; o++) {
                                var r = l[o];
                                r.selected && (this.main.config.isMultiple ? t.push(r) : e = r)
                            }
                    }
                } else s.selected && (this.main.config.isMultiple ? t.push(s) : e = s)
            }
            return this.main.config.isMultiple ? t : e
        }, s.prototype.addToSelected = function(e, t) {
            if (void 0 === t && (t = "id"), this.main.config.isMultiple) {
                var i = [],
                    n = this.getSelected();
                if (Array.isArray(n))
                    for (var s = 0, a = n; s < a.length; s++) {
                        var o = a[s];
                        i.push(o[t])
                    }
                i.push(e), this.setSelected(i, t)
            }
        }, s.prototype.removeFromSelected = function(e, t) {
            if (void 0 === t && (t = "id"), this.main.config.isMultiple) {
                for (var i = [], n = 0, s = this.getSelected(); n < s.length; n++) {
                    var a = s[n];
                    String(a[t]) !== String(e) && i.push(a[t])
                }
                this.setSelected(i, t)
            }
        }, s.prototype.onDataChange = function() {
            this.main.onChange && this.isOnChangeEnabled && this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())))
        }, s.prototype.getObjectFromData = function(e, t) {
            void 0 === t && (t = "id");
            for (var i = 0, n = this.data; i < n.length; i++) {
                var s = n[i];
                if (t in s && String(s[t]) === String(e)) return s;
                if (s.hasOwnProperty("options"))
                    if (s.options)
                        for (var a = 0, o = s.options; a < o.length; a++) {
                            var l = o[a];
                            if (String(l[t]) === String(e)) return l
                        }
            }
            return null
        }, s.prototype.search = function(n) {
            var s, e;
            "" !== (this.searchValue = n).trim() ? (s = this.main.config.searchFilter, e = this.data.slice(0), n = n.trim(), e = e.map(function(e) {
                if (e.hasOwnProperty("options")) {
                    var t = e,
                        i = [];
                    if (0 !== (i = t.options ? t.options.filter(function(e) {
                            return s(e, n)
                        }) : i).length) {
                        t = Object.assign({}, t);
                        return t.options = i, t
                    }
                }
                if (e.hasOwnProperty("text") && s(e, n)) return e;
                return null
            }), this.filtered = e.filter(function(e) {
                return e
            })) : this.filtered = null
        }, s);

        function s(e) {
            this.contentOpen = !1, this.contentPosition = "below", this.isOnChangeEnabled = !0, this.main = e.main, this.searchValue = "", this.data = [], this.filtered = null, this.parseSelectData(), this.setSelectedFromSelect()
        }

        function r(e) {
            return void 0 !== e.text || (console.error("Data object option must have at least have a text value. Check object: " + JSON.stringify(e)), !1)
        }
        t.Data = n, t.validateData = function(e) {
            if (!e) return console.error("Data must be an array of objects"), !1;
            for (var t = 0, i = 0, n = e; i < n.length; i++) {
                var s = n[i];
                if (s.hasOwnProperty("label")) {
                    if (s.hasOwnProperty("options")) {
                        var a = s.options;
                        if (a)
                            for (var o = 0, l = a; o < l.length; o++) r(l[o]) || t++
                    }
                } else r(s) || t++
            }
            return 0 === t
        }, t.validateOption = r
    }, function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = i(3),
            s = i(4),
            a = i(5),
            r = i(1),
            o = i(0),
            i = (l.prototype.validate = function(e) {
                e = "string" == typeof e.select ? document.querySelector(e.select) : e.select;
                if (!e) throw new Error("Could not find select element");
                if ("SELECT" !== e.tagName) throw new Error("Element isnt of type select");
                return e
            }, l.prototype.selected = function() {
                if (this.config.isMultiple) {
                    for (var e = [], t = 0, i = s = this.data.getSelected(); t < i.length; t++) {
                        var n = i[t];
                        e.push(n.value)
                    }
                    return e
                }
                var s;
                return (s = this.data.getSelected()) ? s.value : ""
            }, l.prototype.set = function(e, t, i, n) {
                void 0 === t && (t = "value"), void 0 === i && (i = !0), void 0 === n && (n = !0), this.config.isMultiple && !Array.isArray(e) ? this.data.addToSelected(e, t) : this.data.setSelected(e, t), this.select.setValue(), this.data.onDataChange(), this.render(), (i = this.config.hideSelectedOption && this.config.isMultiple && this.data.getSelected().length === this.data.data.length ? !0 : i) && this.close()
            }, l.prototype.setSelected = function(e, t, i, n) {
                this.set(e, t = void 0 === t ? "value" : t, i = void 0 === i ? !0 : i, n = void 0 === n ? !0 : n)
            }, l.prototype.setData = function(e) {
                if ((0, r.validateData)(e)) {
                    for (var t = JSON.parse(JSON.stringify(e)), i = this.data.getSelected(), n = 0; n < t.length; n++) t[n].value || t[n].placeholder || (t[n].value = t[n].text);
                    if (this.config.isAjax && i)
                        if (this.config.isMultiple)
                            for (var s = 0, a = i.reverse(); s < a.length; s++) {
                                var o = a[s];
                                t.unshift(o)
                            } else {
                                t.unshift(i);
                                for (n = 0; n < t.length; n++) t[n].placeholder || t[n].value !== i.value || t[n].text !== i.text || t.splice(n, 1);
                                for (var l = !1, n = 0; n < t.length; n++) t[n].placeholder && (l = !0);
                                l || t.unshift({
                                    text: "",
                                    placeholder: !0
                                })
                            }
                    this.select.create(t), this.data.parseSelectData(), this.data.setSelectedFromSelect()
                } else console.error("Validation problem on: #" + this.select.element.id)
            }, l.prototype.addData = function(e) {
                (0, r.validateData)([e]) ? (this.data.add(this.data.newOption(e)), this.select.create(this.data.data), this.data.parseSelectData(), this.data.setSelectedFromSelect(), this.render()) : console.error("Validation problem on: #" + this.select.element.id)
            }, l.prototype.open = function() {
                var e, t = this;
                this.config.isEnabled && (this.data.contentOpen || this.config.hideSelectedOption && this.config.isMultiple && this.data.getSelected().length === this.data.data.length || (this.beforeOpen && this.beforeOpen(), this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.plus.classList.add("ss-cross") : this.slim.singleSelected && (this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"), this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")), this.slim[this.config.isMultiple ? "multiSelected" : "singleSelected"].container.classList.add("above" === this.data.contentPosition ? this.config.openAbove : this.config.openBelow), this.config.addToBody && (e = this.slim.container.getBoundingClientRect(), this.slim.content.style.top = e.top + e.height + window.scrollY + "px", this.slim.content.style.left = e.left + window.scrollX + "px", this.slim.content.style.width = e.width + "px"), this.slim.content.classList.add(this.config.open), "up" === this.config.showContent.toLowerCase() || "down" !== this.config.showContent.toLowerCase() && "above" === (0, o.putContent)(this.slim.content, this.data.contentPosition, this.data.contentOpen) ? this.moveContentAbove() : this.moveContentBelow(), this.config.isMultiple || (e = this.data.getSelected()) && (e = e.id, (e = this.slim.list.querySelector('[data-id="' + e + '"]')) && (0, o.ensureElementInView)(this.slim.list, e)), setTimeout(function() {
                    t.data.contentOpen = !0, t.config.searchFocus && t.slim.search.input.focus(), t.afterOpen && t.afterOpen()
                }, this.config.timeoutDelay)))
            }, l.prototype.close = function() {
                var e = this;
                this.data.contentOpen && (this.beforeClose && this.beforeClose(), this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove), this.slim.multiSelected.container.classList.remove(this.config.openBelow), this.slim.multiSelected.plus.classList.remove("ss-cross")) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openAbove), this.slim.singleSelected.container.classList.remove(this.config.openBelow), this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"), this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")), this.slim.content.classList.remove(this.config.open), this.data.contentOpen = !1, this.search(""), setTimeout(function() {
                    e.slim.content.removeAttribute("style"), e.data.contentPosition = "below", e.config.isMultiple && e.slim.multiSelected ? (e.slim.multiSelected.container.classList.remove(e.config.openAbove), e.slim.multiSelected.container.classList.remove(e.config.openBelow)) : e.slim.singleSelected && (e.slim.singleSelected.container.classList.remove(e.config.openAbove), e.slim.singleSelected.container.classList.remove(e.config.openBelow)), e.slim.search.input.blur(), e.afterClose && e.afterClose()
                }, this.config.timeoutDelay))
            }, l.prototype.moveContentAbove = function() {
                var e = 0;
                this.config.isMultiple && this.slim.multiSelected ? e = this.slim.multiSelected.container.offsetHeight : this.slim.singleSelected && (e = this.slim.singleSelected.container.offsetHeight);
                var t = e + this.slim.content.offsetHeight - 1;
                this.slim.content.style.margin = "-" + t + "px 0 0 0", this.slim.content.style.height = t - e + 1 + "px", this.slim.content.style.transformOrigin = "center bottom", this.data.contentPosition = "above", this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openBelow), this.slim.multiSelected.container.classList.add(this.config.openAbove)) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openBelow), this.slim.singleSelected.container.classList.add(this.config.openAbove))
            }, l.prototype.moveContentBelow = function() {
                this.data.contentPosition = "below", this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove), this.slim.multiSelected.container.classList.add(this.config.openBelow)) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openAbove), this.slim.singleSelected.container.classList.add(this.config.openBelow))
            }, l.prototype.enable = function() {
                this.config.isEnabled = !0, this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.container.classList.remove(this.config.disabled) : this.slim.singleSelected && this.slim.singleSelected.container.classList.remove(this.config.disabled), this.select.triggerMutationObserver = !1, this.select.element.disabled = !1, this.slim.search.input.disabled = !1, this.select.triggerMutationObserver = !0
            }, l.prototype.disable = function() {
                this.config.isEnabled = !1, this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.container.classList.add(this.config.disabled) : this.slim.singleSelected && this.slim.singleSelected.container.classList.add(this.config.disabled), this.select.triggerMutationObserver = !1, this.select.element.disabled = !0, this.slim.search.input.disabled = !0, this.select.triggerMutationObserver = !0
            }, l.prototype.search = function(t) {
                var i;
                this.data.searchValue !== t && (this.slim.search.input.value = t, this.config.isAjax ? ((i = this).config.isSearching = !0, this.render(), this.ajax && this.ajax(t, function(e) {
                    i.config.isSearching = !1, Array.isArray(e) ? (e.unshift({
                        text: "",
                        placeholder: !0
                    }), i.setData(e), i.data.search(t), i.render()) : "string" == typeof e ? i.slim.options(e) : i.render()
                })) : (this.data.search(t), this.render()))
            }, l.prototype.setSearchText = function(e) {
                this.config.searchText = e
            }, l.prototype.render = function() {
                this.config.isMultiple ? this.slim.values() : (this.slim.placeholder(), this.slim.deselect()), this.slim.options()
            }, l.prototype.destroy = function(e) {
                var t = (e = void 0 === e ? null : e) ? document.querySelector("." + e + ".ss-main") : this.slim.container,
                    i = e ? document.querySelector("[data-ssid=".concat(e, "]")) : this.select.element;
                t && i && (document.removeEventListener("click", this.documentClick), "auto" === this.config.showContent && window.removeEventListener("scroll", this.windowScroll, !1), i.style.display = "", delete i.dataset.ssid, i.slim = null, t.parentElement && t.parentElement.removeChild(t), !this.config.addToBody || (e = e ? document.querySelector("." + e + ".ss-content") : this.slim.content) && document.body.removeChild(e))
            }, l);

        function l(e) {
            var t = this;
            this.ajax = null, this.addable = null, this.beforeOnChange = null, this.onChange = null, this.beforeOpen = null, this.afterOpen = null, this.beforeClose = null, this.afterClose = null, this.windowScroll = (0, o.debounce)(function(e) {
                t.data.contentOpen && ("above" === (0, o.putContent)(t.slim.content, t.data.contentPosition, t.data.contentOpen) ? t.moveContentAbove() : t.moveContentBelow())
            }), this.documentClick = function(e) {
                e.target && !(0, o.hasClassInTree)(e.target, t.config.id) && t.close()
            };
            var i = this.validate(e);
            i.dataset.ssid && this.destroy(i.dataset.ssid), e.ajax && (this.ajax = e.ajax), e.addable && (this.addable = e.addable), this.config = new n.Config({
                select: i,
                isAjax: !!e.ajax,
                showSearch: e.showSearch,
                searchPlaceholder: e.searchPlaceholder,
                searchText: e.searchText,
                searchingText: e.searchingText,
                searchFocus: e.searchFocus,
                searchHighlight: e.searchHighlight,
                searchFilter: e.searchFilter,
                closeOnSelect: e.closeOnSelect,
                showContent: e.showContent,
                placeholderText: e.placeholder,
                allowDeselect: e.allowDeselect,
                allowDeselectOption: e.allowDeselectOption,
                hideSelectedOption: e.hideSelectedOption,
                deselectLabel: e.deselectLabel,
                isEnabled: e.isEnabled,
                valuesUseText: e.valuesUseText,
                showOptionTooltips: e.showOptionTooltips,
                selectByGroup: e.selectByGroup,
                limit: e.limit,
                timeoutDelay: e.timeoutDelay,
                addToBody: e.addToBody
            }), this.select = new s.Select({
                select: i,
                main: this
            }), this.data = new r.Data({
                main: this
            }), this.slim = new a.Slim({
                main: this
            }), this.select.element.parentNode && this.select.element.parentNode.insertBefore(this.slim.container, this.select.element.nextSibling), e.data ? this.setData(e.data) : this.render(), document.addEventListener("click", this.documentClick), "auto" === this.config.showContent && window.addEventListener("scroll", this.windowScroll, !1), e.beforeOnChange && (this.beforeOnChange = e.beforeOnChange), e.onChange && (this.onChange = e.onChange), e.beforeOpen && (this.beforeOpen = e.beforeOpen), e.afterOpen && (this.afterOpen = e.afterOpen), e.beforeClose && (this.beforeClose = e.beforeClose), e.afterClose && (this.afterClose = e.afterClose), this.config.isEnabled || this.disable()
        }
        t.default = i
    }, function(e, t, i) {
        "use strict";
        t.__esModule = !0, t.Config = void 0;
        var n = (s.prototype.searchFilter = function(e, t) {
            return -1 !== e.text.toLowerCase().indexOf(t.toLowerCase())
        }, s);

        function s(e) {
            this.id = "", this.isMultiple = !1, this.isAjax = !1, this.isSearching = !1, this.showSearch = !0, this.searchFocus = !0, this.searchHighlight = !1, this.closeOnSelect = !0, this.showContent = "auto", this.searchPlaceholder = "Search", this.searchText = "No Results", this.searchingText = "Searching...", this.placeholderText = "Select Value", this.allowDeselect = !1, this.allowDeselectOption = !1, this.hideSelectedOption = !1, this.deselectLabel = "x", this.isEnabled = !0, this.valuesUseText = !1, this.showOptionTooltips = !1, this.selectByGroup = !1, this.limit = 0, this.timeoutDelay = 200, this.addToBody = !1, this.main = "ss-main", this.singleSelected = "ss-single-selected", this.arrow = "ss-arrow", this.multiSelected = "ss-multi-selected", this.add = "ss-add", this.plus = "ss-plus", this.values = "ss-values", this.value = "ss-value", this.valueText = "ss-value-text", this.valueDelete = "ss-value-delete", this.content = "ss-content", this.open = "ss-open", this.openAbove = "ss-open-above", this.openBelow = "ss-open-below", this.search = "ss-search", this.searchHighlighter = "ss-search-highlight", this.addable = "ss-addable", this.list = "ss-list", this.optgroup = "ss-optgroup", this.optgroupLabel = "ss-optgroup-label", this.optgroupLabelSelectable = "ss-optgroup-label-selectable", this.option = "ss-option", this.optionSelected = "ss-option-selected", this.highlighted = "ss-highlighted", this.disabled = "ss-disabled", this.hide = "ss-hide", this.id = "ss-" + Math.floor(1e5 * Math.random()), this.style = e.select.style.cssText, this.class = e.select.className.split(" "), this.isMultiple = e.select.multiple, this.isAjax = e.isAjax, this.showSearch = !1 !== e.showSearch, this.searchFocus = !1 !== e.searchFocus, this.searchHighlight = !0 === e.searchHighlight, this.closeOnSelect = !1 !== e.closeOnSelect, e.showContent && (this.showContent = e.showContent), this.isEnabled = !1 !== e.isEnabled, e.searchPlaceholder && (this.searchPlaceholder = e.searchPlaceholder), e.searchText && (this.searchText = e.searchText), e.searchingText && (this.searchingText = e.searchingText), e.placeholderText && (this.placeholderText = e.placeholderText), this.allowDeselect = !0 === e.allowDeselect, this.allowDeselectOption = !0 === e.allowDeselectOption, this.hideSelectedOption = !0 === e.hideSelectedOption, e.deselectLabel && (this.deselectLabel = e.deselectLabel), e.valuesUseText && (this.valuesUseText = e.valuesUseText), e.showOptionTooltips && (this.showOptionTooltips = e.showOptionTooltips), e.selectByGroup && (this.selectByGroup = e.selectByGroup), e.limit && (this.limit = e.limit), e.searchFilter && (this.searchFilter = e.searchFilter), null != e.timeoutDelay && (this.timeoutDelay = e.timeoutDelay), this.addToBody = !0 === e.addToBody
        }
        t.Config = n
    }, function(e, t, i) {
        "use strict";
        t.__esModule = !0, t.Select = void 0;
        var n = i(0),
            i = (s.prototype.setValue = function() {
                if (this.main.data.getSelected()) {
                    if (this.main.config.isMultiple)
                        for (var e = this.main.data.getSelected(), t = 0, i = this.element.options; t < i.length; t++) {
                            var n = i[t];
                            n.selected = !1;
                            for (var s = 0, a = e; s < a.length; s++) a[s].value === n.value && (n.selected = !0)
                        } else {
                            e = this.main.data.getSelected();
                            this.element.value = e ? e.value : ""
                        }
                    this.main.data.isOnChangeEnabled = !1, this.element.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0
                    })), this.main.data.isOnChangeEnabled = !0
                }
            }, s.prototype.addAttributes = function() {
                this.element.tabIndex = -1, this.element.style.display = "none", this.element.dataset.ssid = this.main.config.id, this.element.setAttribute("aria-hidden", "true")
            }, s.prototype.addEventListeners = function() {
                var t = this;
                this.element.addEventListener("change", function(e) {
                    t.main.data.setSelectedFromSelect(), t.main.render()
                })
            }, s.prototype.addMutationObserver = function() {
                var t = this;
                this.main.config.isAjax || (this.mutationObserver = new MutationObserver(function(e) {
                    t.triggerMutationObserver && (t.main.data.parseSelectData(), t.main.data.setSelectedFromSelect(), t.main.render(), e.forEach(function(e) {
                        "class" === e.attributeName && t.main.slim.updateContainerDivClass(t.main.slim.container)
                    }))
                }), this.observeMutationObserver())
            }, s.prototype.observeMutationObserver = function() {
                this.mutationObserver && this.mutationObserver.observe(this.element, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0
                })
            }, s.prototype.disconnectMutationObserver = function() {
                this.mutationObserver && this.mutationObserver.disconnect()
            }, s.prototype.create = function(e) {
                this.element.innerHTML = "";
                for (var t = 0, i = e; t < i.length; t++) {
                    var n = i[t];
                    if (n.hasOwnProperty("options")) {
                        var s = n,
                            a = document.createElement("optgroup");
                        if (a.label = s.label, s.options)
                            for (var o = 0, l = s.options; o < l.length; o++) {
                                var r = l[o];
                                a.appendChild(this.createOption(r))
                            }
                        this.element.appendChild(a)
                    } else this.element.appendChild(this.createOption(n))
                }
            }, s.prototype.createOption = function(t) {
                var i = document.createElement("option");
                return i.value = "" !== t.value ? t.value : t.text, i.innerHTML = t.innerHTML || t.text, t.selected && (i.selected = t.selected), !1 === t.display && (i.style.display = "none"), t.disabled && (i.disabled = !0), t.placeholder && i.setAttribute("data-placeholder", "true"), t.mandatory && i.setAttribute("data-mandatory", "true"), t.class && t.class.split(" ").forEach(function(e) {
                    i.classList.add(e)
                }), t.data && "object" == typeof t.data && Object.keys(t.data).forEach(function(e) {
                    i.setAttribute("data-" + (0, n.kebabCase)(e), t.data[e])
                }), i
            }, s);

        function s(e) {
            this.triggerMutationObserver = !0, this.element = e.select, this.main = e.main, this.element.disabled && (this.main.config.isEnabled = !1), this.addAttributes(), this.addEventListeners(), this.mutationObserver = null, this.addMutationObserver(), this.element.slim = e.main
        }
        t.Select = i
    }, function(e, t, i) {
        "use strict";
        t.__esModule = !0, t.Slim = void 0;
        var n = i(0),
            o = i(1),
            i = (s.prototype.containerDiv = function() {
                var e = document.createElement("div");
                return e.style.cssText = this.main.config.style, this.updateContainerDivClass(e), e
            }, s.prototype.updateContainerDivClass = function(e) {
                this.main.config.class = this.main.select.element.className.split(" "), e.className = "", e.classList.add(this.main.config.id), e.classList.add(this.main.config.main);
                for (var t = 0, i = this.main.config.class; t < i.length; t++) {
                    var n = i[t];
                    "" !== n.trim() && e.classList.add(n)
                }
            }, s.prototype.singleSelectedDiv = function() {
                var t = this,
                    e = document.createElement("div");
                e.classList.add(this.main.config.singleSelected);
                var i = document.createElement("span");
                i.classList.add("placeholder"), e.appendChild(i);
                var n = document.createElement("span");
                n.innerHTML = this.main.config.deselectLabel, n.classList.add("ss-deselect"), n.onclick = function(e) {
                    e.stopPropagation(), t.main.config.isEnabled && t.main.set("")
                }, e.appendChild(n);
                var s = document.createElement("span");
                s.classList.add(this.main.config.arrow);
                var a = document.createElement("span");
                return a.classList.add("arrow-down"), s.appendChild(a), e.appendChild(s), e.onclick = function() {
                    t.main.config.isEnabled && (t.main.data.contentOpen ? t.main.close() : t.main.open())
                }, {
                    container: e,
                    placeholder: i,
                    deselect: n,
                    arrowIcon: {
                        container: s,
                        arrow: a
                    }
                }
            }, s.prototype.placeholder = function() {
                var e, t = this.main.data.getSelected();
                null === t || t && t.placeholder ? ((e = document.createElement("span")).classList.add(this.main.config.disabled), e.innerHTML = this.main.config.placeholderText, this.singleSelected && (this.singleSelected.placeholder.innerHTML = e.outerHTML)) : (e = "", t && (e = t.innerHTML && !0 !== this.main.config.valuesUseText ? t.innerHTML : t.text), this.singleSelected && (this.singleSelected.placeholder.innerHTML = t ? e : ""))
            }, s.prototype.deselect = function() {
                this.singleSelected && (!this.main.config.allowDeselect || "" === this.main.selected() ? this.singleSelected.deselect.classList.add("ss-hide") : this.singleSelected.deselect.classList.remove("ss-hide"))
            }, s.prototype.multiSelectedDiv = function() {
                var t = this,
                    e = document.createElement("div");
                e.classList.add(this.main.config.multiSelected);
                var i = document.createElement("div");
                i.classList.add(this.main.config.values), e.appendChild(i);
                var n = document.createElement("div");
                n.classList.add(this.main.config.add);
                var s = document.createElement("span");
                return s.classList.add(this.main.config.plus), s.onclick = function(e) {
                    t.main.data.contentOpen && (t.main.close(), e.stopPropagation())
                }, n.appendChild(s), e.appendChild(n), e.onclick = function(e) {
                    t.main.config.isEnabled && (e.target.classList.contains(t.main.config.valueDelete) || (t.main.data.contentOpen ? t.main.close() : t.main.open()))
                }, {
                    container: e,
                    values: i,
                    add: n,
                    plus: s
                }
            }, s.prototype.values = function() {
                if (this.multiSelected) {
                    for (var e = this.multiSelected.values.childNodes, t = this.main.data.getSelected(), i = [], n = 0, s = e; n < s.length; n++) {
                        for (var a = s[n], o = !0, l = 0, r = t; l < r.length; l++) {
                            var c = r[l];
                            String(c.id) === String(a.dataset.id) && (o = !1)
                        }
                        o && i.push(a)
                    }
                    for (var d = 0, h = i; d < h.length; d++) {
                        var u = h[d];
                        u.classList.add("ss-out"), this.multiSelected.values.removeChild(u)
                    }
                    for (var p, e = this.multiSelected.values.childNodes, c = 0; c < t.length; c++) {
                        o = !1;
                        for (var m = 0, f = e; m < f.length; m++) {
                            a = f[m];
                            String(t[c].id) === String(a.dataset.id) && (o = !0)
                        }
                        o || (0 !== e.length && HTMLElement.prototype.insertAdjacentElement ? 0 === c ? this.multiSelected.values.insertBefore(this.valueDiv(t[c]), e[c]) : e[c - 1].insertAdjacentElement("afterend", this.valueDiv(t[c])) : this.multiSelected.values.appendChild(this.valueDiv(t[c])))
                    }
                    0 === t.length && ((p = document.createElement("span")).classList.add(this.main.config.disabled), p.innerHTML = this.main.config.placeholderText, this.multiSelected.values.innerHTML = p.outerHTML)
                }
            }, s.prototype.valueDiv = function(s) {
                var a = this,
                    e = document.createElement("div");
                e.classList.add(this.main.config.value), e.dataset.id = s.id;
                var t = document.createElement("span");
                return t.classList.add(this.main.config.valueText), t.innerHTML = s.innerHTML && !0 !== this.main.config.valuesUseText ? s.innerHTML : s.text, e.appendChild(t), s.mandatory || ((t = document.createElement("span")).classList.add(this.main.config.valueDelete), t.innerHTML = this.main.config.deselectLabel, t.onclick = function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = !1;
                    if (a.main.beforeOnChange || (t = !0), a.main.beforeOnChange) {
                        for (var e = a.main.data.getSelected(), i = JSON.parse(JSON.stringify(e)), n = 0; n < i.length; n++) i[n].id === s.id && i.splice(n, 1);
                        !1 !== a.main.beforeOnChange(i) && (t = !0)
                    }
                    t && (a.main.data.removeFromSelected(s.id, "id"), a.main.render(), a.main.select.setValue(), a.main.data.onDataChange())
                }, e.appendChild(t)), e
            }, s.prototype.contentDiv = function() {
                var e = document.createElement("div");
                return e.classList.add(this.main.config.content), e
            }, s.prototype.searchDiv = function() {
                var n = this,
                    e = document.createElement("div"),
                    s = document.createElement("input"),
                    a = document.createElement("div");
                e.classList.add(this.main.config.search);
                var t = {
                    container: e,
                    input: s
                };
                return this.main.config.showSearch || (e.classList.add(this.main.config.hide), s.readOnly = !0), s.type = "search", s.placeholder = this.main.config.searchPlaceholder, s.tabIndex = 0, s.setAttribute("aria-label", this.main.config.searchPlaceholder), s.setAttribute("autocapitalize", "off"), s.setAttribute("autocomplete", "off"), s.setAttribute("autocorrect", "off"), s.onclick = function(e) {
                    setTimeout(function() {
                        "" === e.target.value && n.main.search("")
                    }, 10)
                }, s.onkeydown = function(e) {
                    "ArrowUp" === e.key ? (n.main.open(), n.highlightUp(), e.preventDefault()) : "ArrowDown" === e.key ? (n.main.open(), n.highlightDown(), e.preventDefault()) : "Tab" === e.key ? n.main.data.contentOpen ? n.main.close() : setTimeout(function() {
                        n.main.close()
                    }, n.main.config.timeoutDelay) : "Enter" === e.key && e.preventDefault()
                }, s.onkeyup = function(e) {
                    var t = e.target;
                    if ("Enter" === e.key) {
                        if (n.main.addable && e.ctrlKey) return a.click(), e.preventDefault(), void e.stopPropagation();
                        var i = n.list.querySelector("." + n.main.config.highlighted);
                        i && i.click()
                    } else "ArrowUp" === e.key || "ArrowDown" === e.key || ("Escape" === e.key ? n.main.close() : n.main.config.showSearch && n.main.data.contentOpen ? n.main.search(t.value) : s.value = "");
                    e.preventDefault(), e.stopPropagation()
                }, s.onfocus = function() {
                    n.main.open()
                }, e.appendChild(s), this.main.addable && (a.classList.add(this.main.config.addable), a.innerHTML = "+", a.onclick = function(e) {
                    var t;
                    n.main.addable && (e.preventDefault(), e.stopPropagation(), "" !== (e = n.search.input.value).trim() ? (e = n.main.addable(e), t = "", e && ("object" == typeof e ? (0, o.validateOption)(e) && (n.main.addData(e), t = e.value || e.text) : (n.main.addData(n.main.data.newOption({
                        text: e,
                        value: e
                    })), t = e), n.main.search(""), setTimeout(function() {
                        n.main.set(t, "value", !1, !1)
                    }, 100), n.main.config.closeOnSelect && setTimeout(function() {
                        n.main.close()
                    }, 100))) : n.search.input.focus())
                }, e.appendChild(a), t.addable = a), t
            }, s.prototype.highlightUp = function() {
                var e = this.list.querySelector("." + this.main.config.highlighted),
                    t = null;
                if (e)
                    for (t = e.previousSibling; null !== t && t.classList.contains(this.main.config.disabled);) t = t.previousSibling;
                else var i = this.list.querySelectorAll("." + this.main.config.option + ":not(." + this.main.config.disabled + ")"),
                    t = i[i.length - 1];
                null !== (t = t && t.classList.contains(this.main.config.optgroupLabel) ? null : t) || (i = e.parentNode).classList.contains(this.main.config.optgroup) && (!i.previousSibling || (i = i.previousSibling.querySelectorAll("." + this.main.config.option + ":not(." + this.main.config.disabled + ")")).length && (t = i[i.length - 1])), t && (e && e.classList.remove(this.main.config.highlighted), t.classList.add(this.main.config.highlighted), (0, n.ensureElementInView)(this.list, t))
            }, s.prototype.highlightDown = function() {
                var e, t = this.list.querySelector("." + this.main.config.highlighted),
                    i = null;
                if (t)
                    for (i = t.nextSibling; null !== i && i.classList.contains(this.main.config.disabled);) i = i.nextSibling;
                else i = this.list.querySelector("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");
                null !== i || null === t || (e = t.parentNode).classList.contains(this.main.config.optgroup) && e.nextSibling && (i = e.nextSibling.querySelector("." + this.main.config.option + ":not(." + this.main.config.disabled + ")")), i && (t && t.classList.remove(this.main.config.highlighted), i.classList.add(this.main.config.highlighted), (0, n.ensureElementInView)(this.list, i))
            }, s.prototype.listDiv = function() {
                var e = document.createElement("div");
                return e.classList.add(this.main.config.list), e.setAttribute("role", "listbox"), e
            }, s.prototype.options = function(e) {
                void 0 === e && (e = "");
                var t = this.main.data.filtered || this.main.data.data;
                if ((this.list.innerHTML = "") !== e) return (i = document.createElement("div")).classList.add(this.main.config.option), i.classList.add(this.main.config.disabled), i.innerHTML = e, void this.list.appendChild(i);
                if (this.main.config.isAjax && this.main.config.isSearching) return (i = document.createElement("div")).classList.add(this.main.config.option), i.classList.add(this.main.config.disabled), i.innerHTML = this.main.config.searchingText, void this.list.appendChild(i);
                if (0 === t.length) {
                    var i = document.createElement("div");
                    return i.classList.add(this.main.config.option), i.classList.add(this.main.config.disabled), i.innerHTML = this.main.config.searchText, void this.list.appendChild(i)
                }
                for (var r = this, n = 0, s = t; n < s.length; n++) ! function(e) {
                    if (e.hasOwnProperty("label")) {
                        var t = e,
                            s = document.createElement("div");
                        s.classList.add(r.main.config.optgroup);
                        var i = document.createElement("div");
                        i.classList.add(r.main.config.optgroupLabel), r.main.config.selectByGroup && r.main.config.isMultiple && i.classList.add(r.main.config.optgroupLabelSelectable), i.innerHTML = t.label, s.appendChild(i);
                        t = t.options;
                        if (t) {
                            for (var a, n = 0, o = t; n < o.length; n++) {
                                var l = o[n];
                                s.appendChild(r.option(l))
                            }
                            r.main.config.selectByGroup && r.main.config.isMultiple && (a = r, i.addEventListener("click", function(e) {
                                e.preventDefault(), e.stopPropagation();
                                for (var t = 0, i = s.children; t < i.length; t++) {
                                    var n = i[t]; - 1 !== n.className.indexOf(a.main.config.option) && n.click()
                                }
                            }))
                        }
                        r.list.appendChild(s)
                    } else r.list.appendChild(r.option(e))
                }(s[n])
            }, s.prototype.option = function(o) {
                if (o.placeholder) {
                    var e = document.createElement("div");
                    return e.classList.add(this.main.config.option), e.classList.add(this.main.config.hide), e
                }
                var t = document.createElement("div");
                t.classList.add(this.main.config.option), t.setAttribute("role", "option"), o.class && o.class.split(" ").forEach(function(e) {
                    t.classList.add(e)
                }), o.style && (t.style.cssText = o.style);
                var l = this.main.data.getSelected();
                t.dataset.id = o.id, this.main.config.searchHighlight && this.main.slim && o.innerHTML && "" !== this.main.slim.search.input.value.trim() ? t.innerHTML = (0, n.highlight)(o.innerHTML, this.main.slim.search.input.value, this.main.config.searchHighlighter) : o.innerHTML && (t.innerHTML = o.innerHTML), this.main.config.showOptionTooltips && t.textContent && t.setAttribute("title", t.textContent);
                var r = this;
                t.addEventListener("click", function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = this.dataset.id;
                    if (!0 === o.selected && r.main.config.allowDeselectOption) {
                        var i = !1;
                        if (r.main.beforeOnChange && r.main.config.isMultiple || (i = !0), r.main.beforeOnChange && r.main.config.isMultiple) {
                            for (var n = r.main.data.getSelected(), s = JSON.parse(JSON.stringify(n)), a = 0; a < s.length; a++) s[a].id === t && s.splice(a, 1);
                            !1 !== r.main.beforeOnChange(s) && (i = !0)
                        }
                        i && (r.main.config.isMultiple ? (r.main.data.removeFromSelected(t, "id"), r.main.render(), r.main.select.setValue(), r.main.data.onDataChange()) : r.main.set(""))
                    } else o.disabled || o.selected || r.main.config.limit && Array.isArray(l) && r.main.config.limit <= l.length || (r.main.beforeOnChange ? (n = void 0, (i = JSON.parse(JSON.stringify(r.main.data.getObjectFromData(t)))).selected = !0, r.main.config.isMultiple ? (n = JSON.parse(JSON.stringify(l))).push(i) : n = JSON.parse(JSON.stringify(i)), !1 !== r.main.beforeOnChange(n) && r.main.set(t, "id", r.main.config.closeOnSelect)) : r.main.set(t, "id", r.main.config.closeOnSelect))
                });
                e = l && (0, n.isValueInArrayOfObjects)(l, "id", o.id);
                return (o.disabled || e) && (t.onclick = null, r.main.config.allowDeselectOption || t.classList.add(this.main.config.disabled), r.main.config.hideSelectedOption && t.classList.add(this.main.config.hide)), e ? t.classList.add(this.main.config.optionSelected) : t.classList.remove(this.main.config.optionSelected), t
            }, s);

        function s(e) {
            this.main = e.main, this.container = this.containerDiv(), this.content = this.contentDiv(), this.search = this.searchDiv(), this.list = this.listDiv(), this.options(), this.singleSelected = null, this.multiSelected = null, this.main.config.isMultiple ? (this.multiSelected = this.multiSelectedDiv(), this.multiSelected && this.container.appendChild(this.multiSelected.container)) : (this.singleSelected = this.singleSelectedDiv(), this.container.appendChild(this.singleSelected.container)), this.main.config.addToBody ? (this.content.classList.add(this.main.config.id), document.body.appendChild(this.content)) : this.container.appendChild(this.content), this.content.appendChild(this.search.container), this.content.appendChild(this.list)
        }
        t.Slim = i
    }], s.c = n, s.d = function(e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) s.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "", s(s.s = 2).default;

    function s(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, s), t.l = !0, t.exports
    }
    var i, n
});
document.addEventListener('DOMContentLoaded', function(event) {
    var filetypes = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i;
    document.querySelector('a').addEventListener('click', function(event) {
        var track = !0,
            href = this.href,
            isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
        if (!href.match(/^javascript:/i)) {
            var elEv = [];
            elEv.value = 0, elEv.non_i = !1;
            if (href.match(/^mailto\:/i)) {
                elEv.category = "email";
                elEv.action = "click";
                elEv.label = href.replace(/^mailto\:/i, '');
                elEv.loc = href
            } else if (href.match(filetypes)) {
                var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                elEv.category = "download";
                elEv.action = "click-" + extension[0];
                elEv.label = href.replace(/ /g, "-");
                elEv.loc = href
            } else if (href.match(/^https?\:/i) && !isThisDomain) {
                elEv.category = "external";
                elEv.action = "click";
                elEv.label = href.replace(/^https?\:\/\//i, '');
                elEv.non_i = !0;
                elEv.loc = href
            } else if (href.match(/^tel\:/i)) {
                elEv.category = "telephone";
                elEv.action = "click";
                elEv.label = href.replace(/^tel\:/i, '');
                elEv.loc = href
            } else track = !1;
            if (track) {
                ga('send', 'event', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, {
                    'nonInteraction': elEv.non_i
                })
            }
        }
    })
});
var autoComplete = function(e) {
    if (document.querySelector) {
        var t = {
            selector: 0,
            source: 0,
            minChars: 3,
            delay: 150,
            offsetLeft: 0,
            offsetTop: 1,
            cache: 1,
            menuClass: "",
            renderItem: function(e, t) {
                t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                var o = new RegExp("(" + t.split(" ").join("|") + ")", "gi");
                return '<div class="autocomplete-suggestion" data-val="' + e + '">' + e.replace(o, "<b>$1</b>") + "</div>"
            },
            onSelect: function(e, t, o) {}
        };
        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        for (var n = "object" == typeof t.selector ? [t.selector] : document.querySelectorAll(t.selector), s = 0; s < n.length; s++) {
            var l = n[s];
            l.sc = document.createElement("div"), l.sc.className = "autocomplete-suggestions " + t.menuClass, l.autocompleteAttr = l.getAttribute("autocomplete"), l.setAttribute("autocomplete", "off"), l.cache = {}, l.last_val = "", l.updateSC = function(e, o) {
                var n = l.getBoundingClientRect();
                if (l.sc.style.left = Math.round(n.left + (window.pageXOffset || document.documentElement.scrollLeft) + t.offsetLeft) + "px", l.sc.style.top = Math.round(n.bottom + (window.pageYOffset || document.documentElement.scrollTop) + t.offsetTop) + "px", l.sc.style.width = Math.round(n.right - n.left) + "px", !e && (l.sc.style.display = "block", l.sc.maxHeight || (l.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(l.sc, null) : l.sc.currentStyle).maxHeight)), l.sc.suggestionHeight || (l.sc.suggestionHeight = l.sc.querySelector(".autocomplete-suggestion").offsetHeight), l.sc.suggestionHeight))
                    if (o) {
                        var s = l.sc.scrollTop,
                            a = o.getBoundingClientRect().top - l.sc.getBoundingClientRect().top;
                        a + l.sc.suggestionHeight - l.sc.maxHeight > 0 ? l.sc.scrollTop = a + l.sc.suggestionHeight + s - l.sc.maxHeight : a < 0 && (l.sc.scrollTop = a + s)
                    } else l.sc.scrollTop = 0
            }, u(window, "resize", l.updateSC), document.body.appendChild(l.sc), i("autocomplete-suggestion", "mouseleave", (function(e) {
                var t = l.sc.querySelector(".autocomplete-suggestion.selected");
                t && setTimeout((function() {
                    t.className = t.className.replace("selected", "")
                }), 20)
            }), l.sc), i("autocomplete-suggestion", "mouseover", (function(e) {
                var t = l.sc.querySelector(".autocomplete-suggestion.selected");
                t && (t.className = t.className.replace("selected", "")), this.className += " selected"
            }), l.sc), i("autocomplete-suggestion", "mousedown", (function(e) {
                if (c(this, "autocomplete-suggestion")) {
                    var o = this.getAttribute("data-val");
                    l.value = o, t.onSelect(e, o, this);
                    var n = new URL(location.href).searchParams.get("country");
                    if (null == n) null != (s = JSON.parse(sessionStorage.getItem("skrillFeesParams"))) && void 0 !== s.country ? (n = s.country, null != document.getElementById("countryCode") && "" == document.getElementById("countryCode").value && (document.getElementById("countryCode").value = n)) : n = "";
                    var s, a = new URL(location.href).searchParams.get("inapp");
                    if (null == a) null != (s = JSON.parse(sessionStorage.getItem("skrillFeesParams"))) && void 0 !== s.inapp ? (a = s.inapp, null != document.getElementById("inappParam") && "" == document.getElementById("inappParam").value && (document.getElementById("inappParam").value = a)) : a = "";
                    var u = document.getElementById("autocomplete-href").getAttribute("data-reseturl") + "?tx_kesearch_pi1[sword]=" + o + "&tx_kesearch_pi1[page]=1&country=" + n + "&inapp=" + a;
                    window.location.href = u, l.sc.style.display = "none"
                }
            }), l.sc), l.blurHandler = function() {
                try {
                    var e = document.querySelector(".autocomplete-suggestions:hover")
                } catch (t) {
                    e = 0
                }
                e ? l !== document.activeElement && setTimeout((function() {
                    l.focus()
                }), 20) : (l.last_val = l.value, l.sc.style.display = "none", setTimeout((function() {
                    l.sc.style.display = "none"
                }), 350))
            }, u(l, "blur", l.blurHandler);
            var a = function(e) {
                var o = l.value;
                if (l.cache[o] = e, e.length && o.length >= t.minChars) {
                    for (var n = "", s = 0; s < e.length; s++) n += t.renderItem(e[s], o);
                    l.sc.innerHTML = n, l.updateSC(0)
                } else l.sc.style.display = "none"
            };
            l.keydownHandler = function(e) {
                var o, n = window.event ? e.keyCode : e.which;
                if ((40 == n || 38 == n) && l.sc.innerHTML) return (s = l.sc.querySelector(".autocomplete-suggestion.selected")) ? (o = 40 == n ? s.nextSibling : s.previousSibling) ? (s.className = s.className.replace("selected", ""), o.className += " selected", l.value = o.getAttribute("data-val")) : (s.className = s.className.replace("selected", ""), l.value = l.last_val, o = 0) : ((o = 40 == n ? l.sc.querySelector(".autocomplete-suggestion") : l.sc.childNodes[l.sc.childNodes.length - 1]).className += " selected", l.value = o.getAttribute("data-val")), l.updateSC(0, o), !1;
                if (27 == n) l.value = l.last_val, l.sc.style.display = "none";
                else if (13 == n || 9 == n) {
                    var s;
                    (s = l.sc.querySelector(".autocomplete-suggestion.selected")) && "none" != l.sc.style.display && (t.onSelect(e, s.getAttribute("data-val"), s), setTimeout((function() {
                        l.sc.style.display = "none"
                    }), 20))
                }
            }, u(l, "keydown", l.keydownHandler), l.keyupHandler = function(e) {
                var o = window.event ? e.keyCode : e.which;
                if (!o || (o < 35 || o > 40) && 13 != o && 27 != o) {
                    var n = l.value;
                    if (n.length >= t.minChars) {
                        if (n != l.last_val) {
                            if (l.last_val = n, clearTimeout(l.timer), t.cache) {
                                if (n in l.cache) return void a(l.cache[n]);
                                for (var s = 1; s < n.length - t.minChars; s++) {
                                    var c = n.slice(0, n.length - s);
                                    if (c in l.cache && !l.cache[c].length) return void a([])
                                }
                            }
                            l.timer = setTimeout((function() {
                                t.source(n, a)
                            }), t.delay)
                        }
                    } else l.last_val = n, l.sc.style.display = "none"
                }
            }, u(l, "keyup", l.keyupHandler), l.focusHandler = function(e) {
                l.last_val = "\n", l.keyupHandler(e)
            }, t.minChars || u(l, "focus", l.focusHandler)
        }
        this.destroy = function() {
            for (var e = 0; e < n.length; e++) {
                var t = n[e];
                r(window, "resize", t.updateSC), r(t, "blur", t.blurHandler), r(t, "focus", t.focusHandler), r(t, "keydown", t.keydownHandler), r(t, "keyup", t.keyupHandler), t.autocompleteAttr ? t.setAttribute("autocomplete", t.autocompleteAttr) : t.removeAttribute("autocomplete"), document.body.removeChild(t.sc), t = null
            }
        }
    }

    function c(e, t) {
        return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
    }

    function u(e, t, o) {
        e.attachEvent ? e.attachEvent("on" + t, o) : e.addEventListener(t, o)
    }

    function r(e, t, o) {
        e.detachEvent ? e.detachEvent("on" + t, o) : e.removeEventListener(t, o)
    }

    function i(e, t, o, n) {
        u(n || document, t, (function(t) {
            for (var n, s = t.target || t.srcElement; s && !(n = c(s, e));) s = s.parentElement;
            n && o.call(s, t)
        }))
    }
};
"function" == typeof define && define.amd ? define("autoComplete", (function() {
    return autoComplete
})) : "undefined" != typeof module && module.exports ? module.exports = autoComplete : window.autoComplete = autoComplete;
let xhr;
let keSearchPremiumAutocomplete = new autoComplete({
    selector: 'input[id="faq-search-input"]',
    minChars: 2,
    autocompleteTimer: null,
    source: function(term, response) {
        this.scheduleAutocomplete(term, response)
    },
    scheduleAutocomplete: function(term, response) {
        if (term.length < this.minChars) {
            return
        }
        clearTimeout(this.autocompleteTimer);
        this.autocompleteTimer = setTimeout(function() {
            this.doAutocomplete(term, response)
        }.bind(this), 500)
    },
    doAutocomplete: function(term, response) {
        term = term.toLowerCase();
        let httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            console.error('Giving up :( Cannot create an XMLHTTP instance');
            return !1
        }
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                response(JSON.parse(httpRequest.responseText))
            }
        };
        let countryCode = new URL(location.href).searchParams.get('country');
        if (countryCode == null) {
            countryCode = '';
            let countryCodeJson = JSON.parse(sessionStorage.getItem('skrillFeesParams'))
            if (countryCodeJson != null && typeof(countryCodeJson.country) != 'undefined') {
                countryCode = countryCodeJson.country;
                let countryCodeElement = document.getElementById("countryCode");
                if (countryCodeElement != null && countryCodeElement.value === '') {
                    countryCodeElement.value = countryCode
                }
            }
        }
        let inappParam = new URL(location.href).searchParams.get('inapp');
        if (inappParam == null) {
            inappParam = '';
            let inappParamJson = JSON.parse(sessionStorage.getItem('skrillFeesParams'))
            if (inappParamJson != null && typeof(inappParamJson.inapp) != 'undefined') {
                inappParam = inappParamJson.inapp;
                let inappParamElement = document.getElementById("inappParam");
                if (inappParamElement != null && inappParamElement.value === '') {
                    inappParamElement.value = inappParam
                }
            }
        }
        httpRequest.open('POST', document.getElementById("autocomplete-href").href.split('&cHash')[0] + '&wordStartsWith=' + term + '&country=' + countryCode + '&inappParam=' + inappParam);
        httpRequest.send()
    }
})