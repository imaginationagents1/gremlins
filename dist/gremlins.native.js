/*!gremlins.js 0.8.2 - (c) 2013-2015 Andreas Wehr - https://github.com/grmlin/gremlins - Licensed under MIT license*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.gremlins=e()}}(function(){return function e(n,t,r){function o(c,u){if(!t[c]){if(!n[c]){var a="function"==typeof require&&require;if(!u&&a)return a(c,!0);if(i)return i(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var f=t[c]={exports:{}};n[c][0].call(f.exports,function(e){var t=n[c][1][e];return o(t?t:e)},f,f.exports,e,n,t,r)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,n,t){"use strict";var r=e("./uuid"),o="gremlins_"+r(),i={},c=function(){var e=1;return function(){return e++}}(),u=function(e){return void 0!==e[o]},a=function(e){return e[o]=c()},s=function(e){return u(e)?e[o]:a(e)};n.exports={addGremlin:function(e,n){var t=s(n);void 0!==i[t]?console.warn("You can't add another gremlin to this element, it already uses one!",n):i[t]=e},getGremlin:function(e){var n=s(e),t=i[n];return void 0===t&&console.warn("This dom element does not use any gremlins!",e),t}}},{"./uuid":8}],2:[function(e,n,t){"use strict";function r(e,n){function t(){this.el=n,this.initialize()}t.call(e)}n.exports={createInstance:function(e,n){var t=Object.create(n);return r(t,e),t}}},{}],3:[function(e,n,t){"use strict";var r=e("object-assign"),o=e("./Mixins"),i=e("./GremlinElement"),c={},u=function(e,n){return c[e]=n},a=function(e){return void 0!==c[e]},s={initialize:function(){},destroy:function(){},create:function(e){var n=this,t=Object.create(n),c=e.name;if("string"!=typeof c)throw new Error("A gremlin spec needs a »name« property! It can't be found otherwise");if(a(c))throw new Error("Trying to add new Gremlin spec, but a spec for "+c+" already exists.");return void 0!==e.create&&console.warn("You are replacing the original create method for the spec "+c+". You know what you're doing, right?"),r(t,e),o.mixinProps(t),u(c,t),i.register(t),t}};n.exports=s},{"./GremlinElement":4,"./Mixins":5,"object-assign":10}],4:[function(e,n,t){"use strict";var r=e("./Factory"),o=e("./Data"),i="function"==typeof document.registerElement;if(!i)throw new Error("registerElement not available. Did you include the polyfill for older browsers?");var c=function(e,n){var t=r.createInstance(e,n);o.addGremlin(t,e)},u=function(e){o.getGremlin(e).destroy()};n.exports={register:function(e){var n=e.name,t=e.tagName,r="string"==typeof t,o={attachedCallback:{value:function(){c(this,e)}},detachedCallback:{value:function(){u(this)}}};t=r?t:n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+"-gremlin";var i=document.registerElement(t,{name:t,prototype:Object.create(HTMLElement.prototype,o)});return i}}},{"./Data":1,"./Factory":2}],5:[function(e,n,t){"use strict";function r(e,n){Object.keys(n).forEach(function(t){var r=n[t];void 0===e[t]?e[t]=r:o(e,t,r)})}function o(e,n,t){var r=e[n],o=t,i=typeof r,c=typeof o,u=i===c;u&&"function"===c?e[n]=function(){return[o.apply(this,arguments),r.apply(this,arguments)]}:console.warn("Can't decorate gremlin property »"+e.name+"#"+n+":"+i+"« with »Module#"+n+":"+c+"«.\n		Only functions can be decorated!")}var i=function(e){return Array.isArray(e.mixins)?e.mixins:e.mixins?[e.mixins]:[]};n.exports={mixinProps:function(e){var n=i(e);n.reverse().forEach(function(n){return r(e,n)})}}},{}],6:[function(e,n,t){(function(e){"use strict";var t=function(){},r=["log","info","warn"];n.exports={create:function(){void 0===console&&(e.console={}),r.forEach(function(e){"function"!=typeof console[e]&&(console[e]=t())})}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,n,t){"use strict";var r=e("./consoleShim"),o=e("./Gremlin"),i="gremlins_connected";if(document.documentElement[i])throw new Error("You tried to include gremlin.js multiple times. This will not work");r.create(),document.documentElement[i]=!0,n.exports={create:o.create.bind(o)}},{"./Gremlin":3,"./consoleShim":6}],8:[function(e,n,t){"use strict";n.exports=function r(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,r)}},{}],9:[function(e,n,t){"use strict";n.exports=e("./lib/gremlins")},{"./lib/gremlins":7}],10:[function(e,n,t){"use strict";function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(e){var n=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e))),n.filter(function(n){return i.call(e,n)})}var i=Object.prototype.propertyIsEnumerable;n.exports=Object.assign||function(e,n){for(var t,i,c=r(e),u=1;u<arguments.length;u++){t=arguments[u],i=o(Object(t));for(var a=0;a<i.length;a++)c[i[a]]=t[i[a]]}return c}},{}]},{},[9])(9)});