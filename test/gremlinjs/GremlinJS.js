/*! GremlinJS - v0.4.0 - 2013-04-13 */(function(t,n){n.gremlin=t;var e=e||{},r={event:{}};r.event.Event=function(){function t(){this._events={}}return t.prototype.on=function(t,n){return this._events[t]=this._events[t]||[],this._events[t].push(n)},t.prototype.off=function(t,n){return!1!=t in this._events?this._events[t].splice(this._events[t].indexOf(n),1):void 0},t.prototype.emit=function(t){var n,e;if(this._events=this._events||{},!1!=t in this._events){for(n=0,e=[];this._events[t].length>n;)this._events[t][n].apply(this,Array.prototype.slice.call(arguments,1)),e.push(n++);return e}},t}(),r.conf={},r.conf.Configuration=function(){function t(){}var n,e;return n=null,e={autoload:!0},t=function(){function t(t){this._options=t}return t.prototype.set=function(t,n){return this._options[t]=n},t}(),t.options={AUTOLOAD:"autoload"},t.get=function(){return null!=n?n:n=new t(e)},t}(),r.util={},r.util.ready=function(){var t,n,e,r,i,o,s,u,l,a,c,f,p,m,h,d,v;if(m=function(t){var n;if(!a.body)return u(m);for(n=[];t=s.shift();)n.push(u(t));return n},e=function(){return d?(a.removeEventListener(n,e,r),m()):a[o]===t?(a.detachEvent(i,e),m()):void 0},u=function(t,n){return setTimeout(t,+n>=0?n:1)},p=function(t){return f?u(t):s.push(t)},v=window,a=v.document,c=a.documentElement,r=!1,t="complete",o="readyState",n="DOMContentLoaded",i="onreadystatechange",d="addEventListener"in a,f=h=r,s=[],a[o]===t)u(m);else if(d)a.addEventListener(n,e,r),v.addEventListener("load",m,r);else{a.attachEvent(i,e),v.attachEvent("onload",m);try{h=null==v.frameElement&&c}catch(y){}h&&h.doScroll&&(l=function(){if(!f){try{h.doScroll("left")}catch(t){return u(l,50)}return m()}})()}return p.version="1.2",p}(),r.util.polyfill={},"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.filter||(Array.prototype.filter=function(t,n){var e,r,i,o,s;if(this===void 0||null===this)throw new TypeError;if(o=Object(this),r=o.length>>>0,"function"!=typeof t)throw new TypeError;for(i=[],e=0;r>e;)e in o&&(s=o[e],t.call(n,s,e,o)&&i.push(s)),e++;return i}),r.gremlinDefinitions={},r.gremlinDefinitions.AbstractGremlin=function(){function t(t,n,e){this.el=t,this.data=n,this.id=e}return t.prototype.initialize=function(){},t}();var i={}.hasOwnProperty;r.util.Helper=function(){function t(){}var n;return n=function(t,n){var e,r;for(e in n)i.call(n,e)&&(r=n[e],t[e]=r);return t},t.mixin=function(t,e){return n(t.prototype,e)},t.clone=function(t){var n,e;if(null==t||"object"!=typeof t)return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return n="",null!=t.global&&(n+="g"),null!=t.ignoreCase&&(n+="i"),null!=t.multiline&&(n+="m"),null!=t.sticky&&(n+="y"),RegExp(t.source,n);e=new t.constructor;for(n in t)e[n]=r.util.Helper.clone(t[n]);return e},t.hasClass=function(t,n){return t.className.match(RegExp("(\\s|^)"+n+"(\\s|$)"))},t.addClass=function(t,n){return r.util.Helper.hasClass(t,n)||(t.className+=" "+n),t.className=t.className.trim()},t.removeClass=function(t,n){var e;return r.util.Helper.hasClass(t,n)?(e=RegExp("(\\s|^)"+n+"(\\s|$)"),t.className=t.className.replace(e," "),t.className=t.className.trim()):void 0},t}();var i={}.hasOwnProperty,o=function(t,n){function e(){this.constructor=t}for(var r in n)i.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t};r.gremlinDefinitions.Pool=function(){function t(){}var n,e;return e=null,n={},t=function(){function t(){}return t.prototype.get=function(t){var e;return null!=(e=n[t])?e:null},t.prototype.set=function(t,e){if(n[t]!==void 0)throw Error("Trying to add new Gremlin definition, but a definition for "+t+" already exists.");return n[t]=e},t.prototype.define=function(t,n){var e,i;return e=function(t){function n(){return i=n.__super__.constructor.apply(this,arguments)}return o(n,t),n}(r.gremlinDefinitions.AbstractGremlin),r.util.Helper.mixin(e,n),this.set(t,e)},t}(),t.getInstance=function(){return null!=e?e:e=new t},t}(),r.util.FeatureDetector=function(){function t(){}return t.hasQuerySelectorAll=document.querySelectorAll!==void 0,t.hasMutationObserver=!(!window.MutationObserver&&!window.WebKitMutationObserver&&!window.MozMutationObserver),t.hasGetClientRect=void 0!==document.documentElement.getBoundingClientRect,t.hasCssAnimations=function(){var t,n,e,r;if(e=document.documentElement,t=!1,n=["Webkit","Moz","O","ms","Khtml"],e.style.animationName&&(t=!0),!1===t)for(r=0;n.length>r;){if(void 0!==e.style[n[r]+"AnimationName"]){t=n[r],t.toLowerCase(),t=!0;break}r++}return t}(),t}(),r.gremlins={},r.gremlins.NameProvider=function(){function t(){}var n;return n=function(t,n){var e;return"function"==typeof t.hasAttribute?t.hasAttribute(n):(e=t.getAttributeNode(n),!(!e||!e.specified&&!e.nodeValue))},t.DATA_NAME_ATTR="data-gremlin-name",t.isGremlin=function(t){return n(t,"data-gremlin-name")},t.getNames=function(t){var n,e,i;e=t.getAttribute("data-gremlin-name");try{if(""===e)throw Error("No gremlin names available, 'data-gremlin-name' is empty!");var o,s,u,l;for(u=e.split(","),l=[],o=0,s=u.length;s>o;o++)n=u[o],l.push(n.trim());return l}catch(a){return n=null!=(i=t.outerHTML)?i:"",r.gremlins.NameProvider.flagBrokenElement(t),"undefined"!=typeof console&&null!==console&&"function"==typeof console.warn&&console.warn("Couldn't process gremlin element, "+a.message+"\n"+n),[]}},t.flagBrokenElement=function(t){return r.util.Helper.addClass(t,"gremlin-error"),r.gremlins.NameProvider.flagProcessedElement(t)},t.flagProcessedElement=function(t){return t.removeAttribute("data-gremlin-name")},t}(),r.domObserver={},r.domObserver.ElementList=function(){function t(t){this._attributeName=t}var n,e,i;return e=function(){function t(){}return t.get=function(t){var n,e,i,o;for(n=document.body.querySelectorAll("["+r.gremlins.NameProvider.DATA_NAME_ATTR+"]"),o=[],e=0,i=n.length;i>e;e++)t=n[e],o.push(t);return o},t}(),n=function(){function t(){}return t.get=function(t){var n,e,i,o;for(n=document.body.getElementsByTagName("*"),o=[],e=0,i=n.length;i>e;e++)t=n[e],r.gremlins.NameProvider.isGremlin(t)&&o.push(t);return o},t}(),i=r.util.FeatureDetector.hasQuerySelectorAll?e:n,t.prototype.getList=function(){return i.get(this._attributeName)},t}.call(this);var s=function(t,n){return function(){return t.apply(n,arguments)}};r.domObserver.clocks={},r.domObserver.clocks.MutationObserverClock=function(){function t(){if(this._onMutation=s(this._onMutation,this),null===n)throw Error("Mutation Observer not available")}var n;return n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver||null,t.prototype.observe=function(){return new n(this._onMutation).observe(document.body,{childList:!0,subtree:!0})},t.prototype._onMutation=function(t){var n,e,r,i;for(i=[],e=0,r=t.length;r>e;e++){if(n=t[e],"childList"===n.type){this.onMutation();break}i.push(void 0)}return i},t.prototype.onMutation=function(){},t}(),s=function(t,n){return function(){return t.apply(n,arguments)}},r.domObserver.clocks.LegacyTimeoutClock=function(){function t(){this._onInterval=s(this._onInterval,this)}return t.prototype.observe=function(){return this._initiateInterval()},t.prototype._initiateInterval=function(){return this._interval=window.setTimeout(this._onInterval,500)},t.prototype._onInterval=function(){return this.onMutation(),this._initiateInterval()},t.prototype.onMutation=function(){},t}(),r.domObserver.clocks.cssAnimationStyle=function(t){return t="@keyframes {{ANIMATION_NAME}} {\n  0%   { opacity: 0.9; }\n  100% { opacity: 1; }\n}\n\n@-moz-keyframes {{ANIMATION_NAME}} {\n  0%   { opacity: 0.9; }\n  100% { opacity: 1; }\n}\n\n@-webkit-keyframes {{ANIMATION_NAME}} {\n  0%   { opacity: 0.9; }\n  100% { opacity: 1; }\n}\n\n@-o-keyframes {{ANIMATION_NAME}} {\n  0%   { opacity: 0.9; }\n  100% { opacity: 1; }\n}\n\n*[{{GREMLIN_ATTRIBUTE}}] {\n  animation-duration: 1ms;\n  -o-animation-duration: 1ms;\n  -moz-animation-duration: 1ms;\n  -webkit-animation-duration: 1ms;\n  animation-name: {{ANIMATION_NAME}};\n  -o-animation-name: {{ANIMATION_NAME}};\n  -moz-animation-name: {{ANIMATION_NAME}};\n  -webkit-animation-name: {{ANIMATION_NAME}};\n}".replace(/{{ANIMATION_NAME}}/g,t),t.replace(/{{GREMLIN_ATTRIBUTE}}/g,r.gremlins.NameProvider.DATA_NAME_ATTR)},s=function(t,n){return function(){return t.apply(n,arguments)}},r.domObserver.clocks.CssAnimationClock=function(){function t(){this._onAnimation=s(this._onAnimation,this);var t,e,i;e=document.getElementsByTagName("head")[0],i=document.createElement("style"),i.type="text/css",t=r.domObserver.clocks.cssAnimationStyle(n),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t)),e.appendChild(i)}var n,e;return n="gremlinInserted",e=["animationend","webkitAnimationEnd","oanimationend"],t.prototype.observe=function(){var t,n,r,i;for(i=[],n=0,r=e.length;r>n;n++)t=e[n],i.push(document.body.addEventListener(t,this._onAnimation,!1));return i},t.prototype._onAnimation=function(t){return t.animationName===n?this.onMutation():void 0},t.prototype.onMutation=function(){},t}(),r.domObserver.clocks.ClockFactory=function(){function t(){}var n,e;return n=r.util.FeatureDetector.hasCssAnimations,e=r.util.FeatureDetector.hasMutationObserver,t.createClock=function(){return new(n?r.domObserver.clocks.CssAnimationClock:e?r.domObserver.clocks.MutationObserverClock:r.domObserver.clocks.LegacyTimeoutClock)},t}(),s=function(t,n){return function(){return t.apply(n,arguments)}},i={}.hasOwnProperty,o=function(t,n){function e(){this.constructor=t}for(var r in n)i.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},r.MutationObserverShim=function(){function t(){}var n;return n=null,t=function(t){function n(){this._onMutation=s(this._onMutation,this),n.__super__.constructor.apply(this,arguments),this._clock=r.domObserver.clocks.ClockFactory.createClock(),this._clock.onMutation=this._onMutation}return o(n,t),n.RESCAN_INTERVAL=500,n.prototype._onMutation=function(){return this.emit(r.MutationObserverShim.ON_MUTATION)},n.prototype.observe=function(){return this._clock.observe(),this._onMutation()},n}(r.event.Event),t.ON_MUTATION="ON_MUTATION",t.get=function(){return null!=n?n:n=new t},t}.call(this),s=function(t,n){return function(){return t.apply(n,arguments)}},r.domObserver.DomObserver=function(){function t(){this._handleMutation=s(this._handleMutation,this),this._elementList=new r.domObserver.ElementList}return t.prototype._bindMutations=function(){var t;return t=r.MutationObserverShim.get(),t.on(r.MutationObserverShim.ON_MUTATION,this._handleMutation),t.observe()},t.prototype._handleMutation=function(){var t;return t=this._elementList.getList(),t.length>0?this.onNewElements(t):void 0},t.prototype.observe=function(){return this._bindMutations()},t.prototype.onNewElements=function(){},t}(),r.util.ElementData={},r.util.ElementData.DataValue=function(){function t(t){this._dataString=t}return t.prototype.parse=function(){var t,n;if(n=t=this._dataString,"string"==typeof this._dataString)try{n="true"===t?!0:"false"===t?!1:"null"===t?null:+t+""===t?+t:JSON.parse(t)}catch(e){}return n},t}(),i={}.hasOwnProperty,r.util.ElementData.ElementData=function(){function t(t){this._el=t,this._obj=e(this._el)}var n,e;return n=function(t){return t.toLowerCase().replace(/-(.)/g,function(t,n){return n.toUpperCase()})},e=function(t){var e,o,s,u;u={},void 0!==t.dataset?e=t.dataset:(e={},[].filter.call(t.attributes,function(r){var i;return(i=/^data-/.test(r.name))&&(e[n(r.name.substring(5))]=t.getAttribute(r.name)),i}));for(s in e)i.call(e,s)&&(o=e[s],o=new r.util.ElementData.DataValue(o),u[s]=o.parse());return u},t.prototype.get=function(t){var n;return null!=(n=this._obj[t])?n:null},t.prototype.toObject=function(){return r.util.Helper.clone(this._obj)},t}(),r.gremlinDefinitions.extensions={},r.gremlinDefinitions.extensions.Interests=function(){function t(){}var n,e;return n=function(){function t(){}var n;return n={},t.registerHandler=function(t,e,r){var i;return n[t]=null!=(i=n[t])?i:[],n[t].push({handler:e,ctx:r})},t.dispatch=function(t,e){var r,i,o,s,u;if(void 0!==n[t]){for(s=n[t],u=[],i=0,o=s.length;o>i;i++)r=s[i],u.push(r.handler.call(r.ctx,e));return u}},t}(),e=function(){var t,e,r,i;this.interests=null!=(t=this.interests)?t:{},this.emit=function(t,e){return n.dispatch(t,e)},r=this.interests,i=[];for(e in r)t=r[e],i.push(n.registerHandler(e,this[t],this));return i},t.test=function(){return!0},t.bind=function(t){return e.call(t)},t}.call(this),i={}.hasOwnProperty,r.gremlinDefinitions.extensions.DomElements=function(){function t(){}var n,e;return e=r.util.FeatureDetector.hasQuerySelectorAll,n=function(){var t,n,e,r;if("object"==typeof this.elements){e=this.elements,r=[];for(n in e)if(i.call(e,n)){if(t=e[n],this[t]!==void 0)throw new TypeError("Element member "+t+" already defined!");if("string"!=typeof n)throw new TypeError("Element selector have to be referenced by strings!");r.push(this[t]=this.el.querySelectorAll(n))}return r}},t.test=function(){return e},t.bind=function(t){return n.call(t)},t}(),i={}.hasOwnProperty,r.gremlinDefinitions.extensions.JQuery=function(){function t(){}var n,e,r;return r="function"==typeof window.jQuery||"function"==typeof window.Zepto,n=function(){var t,n,e,r;if("object"==typeof this.elements){e=this.elements,r=[];for(n in e)if(i.call(e,n)){if(t=e[n],"string"!=typeof n)throw new TypeError("Element selector have to be referenced by strings!");r.push(this["$"+t]=this.$el.find(n))}return r}},e=function(){var t,n,e,r,o=this;if("object"==typeof this.events){r=this.events,e=function(t,n){var e,r,i,s;if("string"!=typeof n)throw new TypeError("Event selectors have to be referenced by strings!");if("function"!=typeof o[t])throw new TypeError("Event '"+n+"' can't be bound to '"+o.name+"."+t+"', as the type is "+typeof o[t]);return i=o[t],r=n.indexOf(" "),e=(s=-1!==r)?n.substr(0,r):n,r=s?n.substr(r+1):null,o.$el.on(e,r,function(){return i.apply(o,arguments),!0})};for(t in r)i.call(r,t)&&(n=r[t],e(n,t));return!0}},t.test=function(){return r},t.bind=function(t){return t.$el=$(t.el),n.call(t),e.call(t)},t}(),i={}.hasOwnProperty,r.gremlins.GremlinFactory=function(){function t(){}var n,e;return e=function(){var t;return t=0,function(){return t++}}(),n=function(t){var n,e,o,s;o=r.gremlinDefinitions.extensions,s=[];for(e in o)i.call(o,e)&&(n=o[e],n.test()&&s.push(n.bind(t)));return s},t.getInstance=function(t,i,o){return t=r.gremlinDefinitions.Pool.getInstance().get(t),"function"==typeof t?(i=new t(i,o.toObject(),e()),n(i),i):null},t}();var u;u=r.util.FeatureDetector.hasGetClientRect,r.gremlins.GremlinDomElement=function(){function t(t,i){this._el=t,this._name=i,this._data=new r.util.ElementData.ElementData(this._el),this._isLazy=!0===this._data.get(e)?!0:!1,r.util.Helper.addClass(this._el,n)}var n,e;return e="gremlinLazy",n="gremlin-loading",t.prototype._gremlinInstance=null,t.prototype.check=function(){return this._isInViewport()?this._create():void 0},t.prototype._isInViewport=function(){var t;return this._isLazy&&u?(t=document.documentElement.clientHeight,300>this._el.getBoundingClientRect().top-t):!0},t.prototype._create=function(){return this._gremlinInstance=r.gremlins.GremlinFactory.getInstance(this._name,this._el,this._data),this.hasGremlin()?(this._gremlinInstance.initialize(),r.util.Helper.removeClass(this._el,n),r.util.Helper.addClass(this._el,"gremlin-ready")):void 0},t.prototype.hasGremlin=function(){return null!==this._gremlinInstance},t}(),s=function(t,n){return function(){return t.apply(n,arguments)}},r.gremlins.GremlinCollection=function(){function t(){this._scrollHandler=s(this._scrollHandler,this),this._queue=[],this._bindScroll(),this._scrollTimer=this._didScroll=!1}return t.prototype._queue=null,t.prototype._bindScroll=function(){return window.addEventListener?window.addEventListener("scroll",this._scrollHandler,!1):window.attachEvent?window.attachEvent("onscroll",this._scrollHandler):void 0},t.prototype.add=function(t){var n,e,r;for(e=0,r=t.length;r>e;e++)n=t[e],this._addGremlinElements(n);return this._processQueue()},t.prototype._addGremlinElements=function(t){var n,e,i,o,s;for(e=r.gremlins.NameProvider.getNames(t),r.gremlins.NameProvider.flagProcessedElement(t),s=[],i=0,o=e.length;o>i;i++)n=e[i],s.push(this._queue.push(new r.gremlins.GremlinDomElement(t,n)));return s},t.prototype._processQueue=function(){var t,n,e,r,i;for(console.log("processing gremlin queue"),n=[],i=this._queue,e=0,r=i.length;r>e;e++)t=i[e],t.check(),t.hasGremlin()||n.push(t);return this._queue=n,console.log("processing gremlins finished, remaining: "),console.dir(this._queue)},t.prototype.process=function(){return this._processQueue()},t.prototype._scrollHandler=function(){var t=this;return this._didScroll||(this._scrollTimer=setInterval(function(){return t._didScroll?(t._didScroll=!1,clearTimeout(t._scrollTimer),t.process()):void 0},250)),this._didScroll=!0},t}(),s=function(t,n){return function(){return t.apply(n,arguments)}},r.Application=function(){function t(){}var n;return n=null,t=function(){function t(){this._onNew=s(this._onNew,this),this._conf=r.conf.Configuration.get(),this._observer=new r.domObserver.DomObserver,this._observer.onNewElements=this._onNew,this._coll=new r.gremlins.GremlinCollection}return t.prototype._observer=null,t.prototype._coll=null,t.prototype._onNew=function(t){return this._coll.add(t)},t.prototype.start=function(){return this._observer.observe()},t.prototype.config=function(t,n){this._conf.set(t,n)},t.prototype.refresh=function(){return this._coll.process()},t}(),t.get=function(){return null!=n?n:n=new t},t}.call(this);var l;l=function(){function t(){}return r.util.ready(function(){return r.Application.get().start()}),t.options=r.conf.Configuration.options,t.config=function(t,n){return r.Application.get().config(t,n)},t.define=function(t,n){return r.gremlinDefinitions.Pool.getInstance().define(t,n)},t}(),window.GremlinJS=l,"function"==typeof window.define&&window.define.amd&&define("GremlinJS",[],function(){return l}),t.goog=e,t.gremlin=r,t.__hasProp=i,t.__extends=o,t.__bind=s,t.isModern=u,t.GremlinJS=l})({},function(){return this}());