(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function cp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kc={exports:{}},Eo={},jc={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),dp=Symbol.for("react.portal"),fp=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),vp=Symbol.for("react.memo"),wp=Symbol.for("react.lazy"),Fa=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$c=Object.assign,Cc={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||Sc}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ec(){}Ec.prototype=Xn.prototype;function Os(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||Sc}var Ms=Os.prototype=new Ec;Ms.constructor=Os;$c(Ms,Xn.prototype);Ms.isPureReactComponent=!0;var Aa=Array.isArray,zc=Object.prototype.hasOwnProperty,Is={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)zc.call(t,r)&&!Pc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jr,type:e,key:o,ref:l,props:i,_owner:Is.current}}function jp(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function Sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ba=/\/+/g;function Yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sp(""+e.key):t.toString(36)}function Ri(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Jr:case dp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Yo(l,0):r,Aa(i)?(n="",e!=null&&(n=e.replace(ba,"$&/")+"/"),Ri(i,t,n,"",function(d){return d})):i!=null&&(Ds(i)&&(i=jp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ba,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Aa(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Yo(o,a);l+=Ri(o,t,n,u,i)}else if(u=kp(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Yo(o,a++),l+=Ri(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return Ri(e,r,"","",function(o){return t.call(n,o,i++)}),r}function $p(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Li={transition:null},Cp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Li,ReactCurrentOwner:Is};function Nc(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!Ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Xn;I.Fragment=fp;I.Profiler=hp;I.PureComponent=Os;I.StrictMode=pp;I.Suspense=yp;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;I.act=Nc;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$c({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Is.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)zc.call(t,u)&&!Pc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mp,_context:e},e.Consumer=e};I.createElement=_c;I.createFactory=function(e){var t=_c.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:xp,render:e}};I.isValidElement=Ds;I.lazy=function(e){return{$$typeof:wp,_payload:{_status:-1,_result:e},_init:$p}};I.memo=function(e,t){return{$$typeof:vp,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Li.transition;Li.transition={};try{e()}finally{Li.transition=t}};I.unstable_act=Nc;I.useCallback=function(e,t){return Se.current.useCallback(e,t)};I.useContext=function(e){return Se.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};I.useEffect=function(e,t){return Se.current.useEffect(e,t)};I.useId=function(){return Se.current.useId()};I.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Se.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};I.useRef=function(e){return Se.current.useRef(e)};I.useState=function(e){return Se.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Se.current.useTransition()};I.version="18.3.1";jc.exports=I;var F=jc.exports;const pe=cp(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep=F,zp=Symbol.for("react.element"),Pp=Symbol.for("react.fragment"),_p=Object.prototype.hasOwnProperty,Np=Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tp={key:!0,ref:!0,__self:!0,__source:!0};function Tc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)_p.call(t,r)&&!Tp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zp,type:e,key:o,ref:l,props:i,_owner:Np.current}}Eo.Fragment=Pp;Eo.jsx=Tc;Eo.jsxs=Tc;kc.exports=Eo;var s=kc.exports,Ll={},Rc={exports:{}},Ie={},Lc={exports:{}},Oc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,T){var R=z.length;z.push(T);e:for(;0<R;){var W=R-1>>>1,b=z[W];if(0<i(b,T))z[W]=T,z[R]=b,R=W;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var T=z[0],R=z.pop();if(R!==T){z[0]=R;e:for(var W=0,b=z.length,le=b>>>1;W<le;){var q=2*(W+1)-1,ne=z[q],Te=q+1,Fe=z[Te];if(0>i(ne,R))Te<b&&0>i(Fe,ne)?(z[W]=Fe,z[Te]=R,W=Te):(z[W]=ne,z[q]=R,W=q);else if(Te<b&&0>i(Fe,R))z[W]=Fe,z[Te]=R,W=Te;else break e}}return T}function i(z,T){var R=z.sortIndex-T.sortIndex;return R!==0?R:z.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],d=[],h=1,p=null,g=3,y=!1,v=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=z)r(d),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(d)}}function k(z){if(w=!1,m(z),!v)if(n(u)!==null)v=!0,nt(S);else{var T=n(d);T!==null&&M(k,T.startTime-z)}}function S(z,T){v=!1,w&&(w=!1,f(C),C=-1),y=!0;var R=g;try{for(m(T),p=n(u);p!==null&&(!(p.expirationTime>T)||z&&!O());){var W=p.callback;if(typeof W=="function"){p.callback=null,g=p.priorityLevel;var b=W(p.expirationTime<=T);T=e.unstable_now(),typeof b=="function"?p.callback=b:p===n(u)&&r(u),m(T)}else r(u);p=n(u)}if(p!==null)var le=!0;else{var q=n(d);q!==null&&M(k,q.startTime-T),le=!1}return le}finally{p=null,g=R,y=!1}}var E=!1,j=null,C=-1,D=5,N=-1;function O(){return!(e.unstable_now()-N<D)}function we(){if(j!==null){var z=e.unstable_now();N=z;var T=!0;try{T=j(!0,z)}finally{T?K():(E=!1,j=null)}}else E=!1}var K;if(typeof c=="function")K=function(){c(we)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,ut=Ne.port2;Ne.port1.onmessage=we,K=function(){ut.postMessage(null)}}else K=function(){P(we,0)};function nt(z){j=z,E||(E=!0,K())}function M(z,T){C=P(function(){z(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,nt(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var R=g;g=T;try{return z()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,T){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var R=g;g=z;try{return T()}finally{g=R}},e.unstable_scheduleCallback=function(z,T,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=R+b,z={id:h++,callback:T,priorityLevel:z,startTime:R,expirationTime:b,sortIndex:-1},R>W?(z.sortIndex=R,t(d,z),n(u)===null&&z===n(d)&&(w?(f(C),C=-1):w=!0,M(k,R-W))):(z.sortIndex=b,t(u,z),v||y||(v=!0,nt(S))),z},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(z){var T=g;return function(){var R=g;g=T;try{return z.apply(this,arguments)}finally{g=R}}}})(Oc);Lc.exports=Oc;var Rp=Lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=F,Me=Rp;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mc=new Set,Rr={};function xn(e,t){bn(e,t),bn(e+"Capture",t)}function bn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)Mc.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=Object.prototype.hasOwnProperty,Op=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ba={},Ua={};function Mp(e){return Ol.call(Ua,e)?!0:Ol.call(Ba,e)?!1:Op.test(e)?Ua[e]=!0:(Ba[e]=!0,!1)}function Ip(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dp(e,t,n,r){if(t===null||typeof t>"u"||Ip(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fs=/[\-:]([a-z])/g;function As(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fs,As);me[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fs,As);me[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fs,As);me[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function bs(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dp(t,n,i,r)&&(n=null),r||i===null?Mp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),kn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),Bs=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Us=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),Ws=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Fc=Symbol.for("react.offscreen"),Wa=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Xo;function hr(e){if(Xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||""}return`
`+Xo+e}var Zo=!1;function Jo(e,t){if(!e||Zo)return"";Zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hr(e):""}function Fp(e){switch(e.tag){case 5:return hr(e.type);case 16:return hr("Lazy");case 13:return hr("Suspense");case 19:return hr("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function Fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case kn:return"Portal";case Ml:return"Profiler";case Bs:return"StrictMode";case Il:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dc:return(e.displayName||"Context")+".Consumer";case Ic:return(e._context.displayName||"Context")+".Provider";case Us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ws:return t=e.displayName||null,t!==null?t:Fl(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return Fl(e(t))}catch{}}return null}function Ap(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(t);case 8:return t===Bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bp(e){var t=Ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=bp(e))}function bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ha(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bc(e,t){t=t.checked,t!=null&&bs(e,"checked",t,!1)}function bl(e,t){Bc(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Va(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||Zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ga(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(mr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function Uc(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,Hc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bp=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){Bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function Vc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function Gc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Up=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(Up[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,On=null,Mn=null;function Ka(e){if(e=ti(e)){if(typeof Ql!="function")throw Error($(280));var t=e.stateNode;t&&(t=To(t),Ql(e.stateNode,e.type,t))}}function Qc(e){On?Mn?Mn.push(e):Mn=[e]:On=e}function Kc(){if(On){var e=On,t=Mn;if(Mn=On=null,Ka(e),t)for(e=0;e<t.length;e++)Ka(t[e])}}function Yc(e,t){return e(t)}function Xc(){}var qo=!1;function Zc(e,t,n){if(qo)return e(t,n);qo=!0;try{return Yc(e,t,n)}finally{qo=!1,(On!==null||Mn!==null)&&(Xc(),Kc())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=To(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Kl=!1;if(gt)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Kl=!1}function Wp(e,t,n,r,i,o,l,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var jr=!1,Ji=null,qi=!1,Yl=null,Hp={onError:function(e){jr=!0,Ji=e}};function Vp(e,t,n,r,i,o,l,a,u){jr=!1,Ji=null,Wp.apply(Hp,arguments)}function Gp(e,t,n,r,i,o,l,a,u){if(Vp.apply(this,arguments),jr){if(jr){var d=Ji;jr=!1,Ji=null}else throw Error($(198));qi||(qi=!0,Yl=d)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ya(e){if(yn(e)!==e)throw Error($(188))}function Qp(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ya(i),e;if(o===r)return Ya(i),t;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function qc(e){return e=Qp(e),e!==null?ed(e):null}function ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ed(e);if(t!==null)return t;e=e.sibling}return null}var td=Me.unstable_scheduleCallback,Xa=Me.unstable_cancelCallback,Kp=Me.unstable_shouldYield,Yp=Me.unstable_requestPaint,te=Me.unstable_now,Xp=Me.unstable_getCurrentPriorityLevel,Vs=Me.unstable_ImmediatePriority,nd=Me.unstable_UserBlockingPriority,eo=Me.unstable_NormalPriority,Zp=Me.unstable_LowPriority,rd=Me.unstable_IdlePriority,zo=null,st=null;function Jp(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(zo,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:th,qp=Math.log,eh=Math.LN2;function th(e){return e>>>=0,e===0?32:31-(qp(e)/eh|0)|0}var ui=64,ci=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=gr(a):(o&=l,o!==0&&(r=gr(o)))}else l=n&~i,l!==0?r=gr(l):o!==0&&(r=gr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function nh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Je(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=nh(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function ih(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Gs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ld,Qs,sd,ad,ud,Zl=!1,di=[],It=null,Dt=null,Ft=null,Mr=new Map,Ir=new Map,Tt=[],oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Za(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lh(e,t,n,r,i){switch(t){case"focusin":return It=rr(It,e,t,n,r,i),!0;case"dragenter":return Dt=rr(Dt,e,t,n,r,i),!0;case"mouseover":return Ft=rr(Ft,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,rr(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,rr(Ir.get(o)||null,e,t,n,r,i)),!0}return!1}function cd(e){var t=rn(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Jc(n),t!==null){e.blockedOn=t,ud(e.priority,function(){sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gl=r,n.target.dispatchEvent(r),Gl=null}else return t=ti(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ja(e,t,n){Oi(e)&&n.delete(t)}function sh(){Zl=!1,It!==null&&Oi(It)&&(It=null),Dt!==null&&Oi(Dt)&&(Dt=null),Ft!==null&&Oi(Ft)&&(Ft=null),Mr.forEach(Ja),Ir.forEach(Ja)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,sh)))}function Dr(e){function t(i){return ir(i,e)}if(0<di.length){ir(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&ir(It,e),Dt!==null&&ir(Dt,e),Ft!==null&&ir(Ft,e),Mr.forEach(t),Ir.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)cd(n),n.blockedOn===null&&Tt.shift()}var In=wt.ReactCurrentBatchConfig,no=!0;function ah(e,t,n,r){var i=U,o=In.transition;In.transition=null;try{U=1,Ks(e,t,n,r)}finally{U=i,In.transition=o}}function uh(e,t,n,r){var i=U,o=In.transition;In.transition=null;try{U=4,Ks(e,t,n,r)}finally{U=i,In.transition=o}}function Ks(e,t,n,r){if(no){var i=Jl(e,t,n,r);if(i===null)cl(e,t,r,ro,n),Za(e,r);else if(lh(i,e,t,n,r))r.stopPropagation();else if(Za(e,r),t&4&&-1<oh.indexOf(e)){for(;i!==null;){var o=ti(i);if(o!==null&&ld(o),o=Jl(e,t,n,r),o===null&&cl(e,t,r,ro,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else cl(e,t,r,null,n)}}var ro=null;function Jl(e,t,n,r){if(ro=null,e=Hs(r),e=rn(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ro=e,null}function dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case Vs:return 1;case nd:return 4;case eo:case Zp:return 16;case rd:return 536870912;default:return 16}default:return 16}}var Lt=null,Ys=null,Mi=null;function fd(){if(Mi)return Mi;var e,t=Ys,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function qa(){return!1}function De(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fi:qa,this.isPropagationStopped=qa,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=De(Zn),ei=J({},Zn,{view:0,detail:0}),ch=De(ei),tl,nl,or,Po=J({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(tl=e.screenX-or.screenX,nl=e.screenY-or.screenY):nl=tl=0,or=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),eu=De(Po),dh=J({},Po,{dataTransfer:0}),fh=De(dh),ph=J({},ei,{relatedTarget:0}),rl=De(ph),hh=J({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),mh=De(hh),gh=J({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xh=De(gh),yh=J({},Zn,{data:0}),tu=De(yh),vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kh[e])?!!t[e]:!1}function Zs(){return jh}var Sh=J({},ei,{key:function(e){if(e.key){var t=vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$h=De(Sh),Ch=J({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=De(Ch),Eh=J({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),zh=De(Eh),Ph=J({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_h=De(Ph),Nh=J({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Th=De(Nh),Rh=[9,13,27,32],Js=gt&&"CompositionEvent"in window,Sr=null;gt&&"documentMode"in document&&(Sr=document.documentMode);var Lh=gt&&"TextEvent"in window&&!Sr,pd=gt&&(!Js||Sr&&8<Sr&&11>=Sr),ru=" ",iu=!1;function hd(e,t){switch(e){case"keyup":return Rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Oh(e,t){switch(e){case"compositionend":return md(t);case"keypress":return t.which!==32?null:(iu=!0,ru);case"textInput":return e=t.data,e===ru&&iu?null:e;default:return null}}function Mh(e,t){if(Sn)return e==="compositionend"||!Js&&hd(e,t)?(e=fd(),Mi=Ys=Lt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pd&&t.locale!=="ko"?null:t.data;default:return null}}var Ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ih[e.type]:t==="textarea"}function gd(e,t,n,r){Qc(r),t=io(t,"onChange"),0<t.length&&(n=new Xs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,Fr=null;function Dh(e){zd(e,0)}function _o(e){var t=En(e);if(bc(t))return e}function Fh(e,t){if(e==="change")return t}var xd=!1;if(gt){var il;if(gt){var ol="oninput"in document;if(!ol){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),ol=typeof lu.oninput=="function"}il=ol}else il=!1;xd=il&&(!document.documentMode||9<document.documentMode)}function su(){$r&&($r.detachEvent("onpropertychange",yd),Fr=$r=null)}function yd(e){if(e.propertyName==="value"&&_o(Fr)){var t=[];gd(t,Fr,e,Hs(e)),Zc(Dh,t)}}function Ah(e,t,n){e==="focusin"?(su(),$r=t,Fr=n,$r.attachEvent("onpropertychange",yd)):e==="focusout"&&su()}function bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _o(Fr)}function Bh(e,t){if(e==="click")return _o(t)}function Uh(e,t){if(e==="input"||e==="change")return _o(t)}function Wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Wh;function Ar(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ol.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=au(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=au(n)}}function vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=Zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hh(e){var t=wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vd(n.ownerDocument.documentElement,n)){if(r!==null&&qs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=uu(n,o);var l=uu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vh=gt&&"documentMode"in document&&11>=document.documentMode,$n=null,ql=null,Cr=null,es=!1;function cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;es||$n==null||$n!==Zi(r)||(r=$n,"selectionStart"in r&&qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cr&&Ar(Cr,r)||(Cr=r,r=io(ql,"onSelect"),0<r.length&&(t=new Xs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$n)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},ll={},kd={};gt&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function No(e){if(ll[e])return ll[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kd)return ll[e]=t[n];return e}var jd=No("animationend"),Sd=No("animationiteration"),$d=No("animationstart"),Cd=No("transitionend"),Ed=new Map,du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Ed.set(e,t),xn(t,[e])}for(var sl=0;sl<du.length;sl++){var al=du[sl],Gh=al.toLowerCase(),Qh=al[0].toUpperCase()+al.slice(1);Qt(Gh,"on"+Qh)}Qt(jd,"onAnimationEnd");Qt(Sd,"onAnimationIteration");Qt($d,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Cd,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kh=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gp(r,t,void 0,e),e.currentTarget=null}function zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;fu(i,a,d),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;fu(i,a,d),o=u}}}if(qi)throw e=Yl,qi=!1,Yl=null,e}function V(e,t){var n=t[os];n===void 0&&(n=t[os]=new Set);var r=e+"__bubble";n.has(r)||(Pd(t,e,2,!1),n.add(r))}function ul(e,t,n){var r=0;t&&(r|=4),Pd(n,e,r,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[hi]){e[hi]=!0,Mc.forEach(function(n){n!=="selectionchange"&&(Kh.has(n)||ul(n,!1,e),ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,ul("selectionchange",!1,t))}}function Pd(e,t,n,r){switch(dd(t)){case 1:var i=ah;break;case 4:i=uh;break;default:i=Ks}n=i.bind(null,t,n,e),i=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function cl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=rn(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Zc(function(){var d=o,h=Hs(n),p=[];e:{var g=Ed.get(e);if(g!==void 0){var y=Xs,v=e;switch(e){case"keypress":if(Ii(n)===0)break e;case"keydown":case"keyup":y=$h;break;case"focusin":v="focus",y=rl;break;case"focusout":v="blur",y=rl;break;case"beforeblur":case"afterblur":y=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zh;break;case jd:case Sd:case $d:y=mh;break;case Cd:y=_h;break;case"scroll":y=ch;break;case"wheel":y=Th;break;case"copy":case"cut":case"paste":y=xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=nu}var w=(t&4)!==0,P=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var c=d,m;c!==null;){m=c;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,f!==null&&(k=Or(c,f),k!=null&&w.push(Br(c,k,m)))),P)break;c=c.return}0<w.length&&(g=new y(g,v,null,n,h),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Gl&&(v=n.relatedTarget||n.fromElement)&&(rn(v)||v[xt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=d,v=v?rn(v):null,v!==null&&(P=yn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=d),y!==v)){if(w=eu,k="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=nu,k="onPointerLeave",f="onPointerEnter",c="pointer"),P=y==null?g:En(y),m=v==null?g:En(v),g=new w(k,c+"leave",y,n,h),g.target=P,g.relatedTarget=m,k=null,rn(h)===d&&(w=new w(f,c+"enter",v,n,h),w.target=m,w.relatedTarget=P,k=w),P=k,y&&v)t:{for(w=y,f=v,c=0,m=w;m;m=vn(m))c++;for(m=0,k=f;k;k=vn(k))m++;for(;0<c-m;)w=vn(w),c--;for(;0<m-c;)f=vn(f),m--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=vn(w),f=vn(f)}w=null}else w=null;y!==null&&pu(p,g,y,w,!1),v!==null&&P!==null&&pu(p,P,v,w,!0)}}e:{if(g=d?En(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=Fh;else if(ou(g))if(xd)S=Uh;else{S=bh;var E=Ah}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Bh);if(S&&(S=S(e,d))){gd(p,S,n,h);break e}E&&E(e,g,d),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Bl(g,"number",g.value)}switch(E=d?En(d):window,e){case"focusin":(ou(E)||E.contentEditable==="true")&&($n=E,ql=d,Cr=null);break;case"focusout":Cr=ql=$n=null;break;case"mousedown":es=!0;break;case"contextmenu":case"mouseup":case"dragend":es=!1,cu(p,n,h);break;case"selectionchange":if(Vh)break;case"keydown":case"keyup":cu(p,n,h)}var j;if(Js)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Sn?hd(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(pd&&n.locale!=="ko"&&(Sn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Sn&&(j=fd()):(Lt=h,Ys="value"in Lt?Lt.value:Lt.textContent,Sn=!0)),E=io(d,C),0<E.length&&(C=new tu(C,e,null,n,h),p.push({event:C,listeners:E}),j?C.data=j:(j=md(n),j!==null&&(C.data=j)))),(j=Lh?Oh(e,n):Mh(e,n))&&(d=io(d,"onBeforeInput"),0<d.length&&(h=new tu("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=j))}zd(p,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function io(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Or(e,n),o!=null&&r.unshift(Br(e,o,i)),o=Or(e,t),o!=null&&r.push(Br(e,o,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=Or(n,o),u!=null&&l.unshift(Br(n,u,a))):i||(u=Or(n,o),u!=null&&l.push(Br(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Yh=/\r\n?/g,Xh=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(Yh,`
`).replace(Xh,"")}function mi(e,t,n){if(t=hu(t),hu(e)!==t&&n)throw Error($(425))}function oo(){}var ts=null,ns=null;function rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var is=typeof setTimeout=="function"?setTimeout:void 0,Zh=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,Jh=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(qh)}:is;function qh(e){setTimeout(function(){throw e})}function dl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Jn,Ur="__reactProps$"+Jn,xt="__reactContainer$"+Jn,os="__reactEvents$"+Jn,em="__reactListeners$"+Jn,tm="__reactHandles$"+Jn;function rn(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gu(e);e!==null;){if(n=e[ot])return n;e=gu(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[ot]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function To(e){return e[Ur]||null}var ls=[],zn=-1;function Kt(e){return{current:e}}function Q(e){0>zn||(e.current=ls[zn],ls[zn]=null,zn--)}function H(e,t){zn++,ls[zn]=e.current,e.current=t}var Gt={},ve=Kt(Gt),ze=Kt(!1),cn=Gt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function lo(){Q(ze),Q(ve)}function xu(e,t,n){if(ve.current!==Gt)throw Error($(168));H(ve,t),H(ze,n)}function _d(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,Ap(e)||"Unknown",i));return J({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,cn=ve.current,H(ve,e),H(ze,ze.current),!0}function yu(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=_d(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,Q(ze),Q(ve),H(ve,e)):Q(ze),H(ze,n)}var ft=null,Ro=!1,fl=!1;function Nd(e){ft===null?ft=[e]:ft.push(e)}function nm(e){Ro=!0,Nd(e)}function Yt(){if(!fl&&ft!==null){fl=!0;var e=0,t=U;try{var n=ft;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,Ro=!1}catch(i){throw ft!==null&&(ft=ft.slice(e+1)),td(Vs,Yt),i}finally{U=t,fl=!1}}return null}var Pn=[],_n=0,ao=null,uo=0,Ae=[],be=0,dn=null,pt=1,ht="";function en(e,t){Pn[_n++]=uo,Pn[_n++]=ao,ao=e,uo=t}function Td(e,t,n){Ae[be++]=pt,Ae[be++]=ht,Ae[be++]=dn,dn=e;var r=pt;e=ht;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,pt=1<<32-Je(t)+i|n<<i|r,ht=o+e}else pt=1<<o|n<<i|r,ht=e}function ea(e){e.return!==null&&(en(e,1),Td(e,1,0))}function ta(e){for(;e===ao;)ao=Pn[--_n],Pn[_n]=null,uo=Pn[--_n],Pn[_n]=null;for(;e===dn;)dn=Ae[--be],Ae[be]=null,ht=Ae[--be],Ae[be]=null,pt=Ae[--be],Ae[be]=null}var Oe=null,Le=null,Y=!1,Ze=null;function Rd(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Le=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:pt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Le=null,!0):!1;default:return!1}}function ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(Y){var t=Le;if(t){var n=t;if(!vu(e,t)){if(ss(e))throw Error($(418));t=At(n.nextSibling);var r=Oe;t&&vu(e,t)?Rd(r,n):(e.flags=e.flags&-4097|2,Y=!1,Oe=e)}}else{if(ss(e))throw Error($(418));e.flags=e.flags&-4097|2,Y=!1,Oe=e}}}function wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function gi(e){if(e!==Oe)return!1;if(!Y)return wu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rs(e.type,e.memoizedProps)),t&&(t=Le)){if(ss(e))throw Ld(),Error($(418));for(;t;)Rd(e,t),t=At(t.nextSibling)}if(wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Oe?At(e.stateNode.nextSibling):null;return!0}function Ld(){for(var e=Le;e;)e=At(e.nextSibling)}function Un(){Le=Oe=null,Y=!1}function na(e){Ze===null?Ze=[e]:Ze.push(e)}var rm=wt.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ku(e){var t=e._init;return t(e._payload)}function Od(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Wt(f,c),f.index=0,f.sibling=null,f}function o(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,m,k){return c===null||c.tag!==6?(c=vl(m,f.mode,k),c.return=f,c):(c=i(c,m),c.return=f,c)}function u(f,c,m,k){var S=m.type;return S===jn?h(f,c,m.props.children,k,m.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&ku(S)===c.type)?(k=i(c,m.props),k.ref=lr(f,c,m),k.return=f,k):(k=Wi(m.type,m.key,m.props,null,f.mode,k),k.ref=lr(f,c,m),k.return=f,k)}function d(f,c,m,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=wl(m,f.mode,k),c.return=f,c):(c=i(c,m.children||[]),c.return=f,c)}function h(f,c,m,k,S){return c===null||c.tag!==7?(c=an(m,f.mode,k,S),c.return=f,c):(c=i(c,m),c.return=f,c)}function p(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=vl(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case li:return m=Wi(c.type,c.key,c.props,null,f.mode,m),m.ref=lr(f,null,c),m.return=f,m;case kn:return c=wl(c,f.mode,m),c.return=f,c;case _t:var k=c._init;return p(f,k(c._payload),m)}if(mr(c)||tr(c))return c=an(c,f.mode,m,null),c.return=f,c;xi(f,c)}return null}function g(f,c,m,k){var S=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(f,c,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case li:return m.key===S?u(f,c,m,k):null;case kn:return m.key===S?d(f,c,m,k):null;case _t:return S=m._init,g(f,c,S(m._payload),k)}if(mr(m)||tr(m))return S!==null?null:h(f,c,m,k,null);xi(f,m)}return null}function y(f,c,m,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(m)||null,a(c,f,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case li:return f=f.get(k.key===null?m:k.key)||null,u(c,f,k,S);case kn:return f=f.get(k.key===null?m:k.key)||null,d(c,f,k,S);case _t:var E=k._init;return y(f,c,m,E(k._payload),S)}if(mr(k)||tr(k))return f=f.get(m)||null,h(c,f,k,S,null);xi(c,k)}return null}function v(f,c,m,k){for(var S=null,E=null,j=c,C=c=0,D=null;j!==null&&C<m.length;C++){j.index>C?(D=j,j=null):D=j.sibling;var N=g(f,j,m[C],k);if(N===null){j===null&&(j=D);break}e&&j&&N.alternate===null&&t(f,j),c=o(N,c,C),E===null?S=N:E.sibling=N,E=N,j=D}if(C===m.length)return n(f,j),Y&&en(f,C),S;if(j===null){for(;C<m.length;C++)j=p(f,m[C],k),j!==null&&(c=o(j,c,C),E===null?S=j:E.sibling=j,E=j);return Y&&en(f,C),S}for(j=r(f,j);C<m.length;C++)D=y(j,f,C,m[C],k),D!==null&&(e&&D.alternate!==null&&j.delete(D.key===null?C:D.key),c=o(D,c,C),E===null?S=D:E.sibling=D,E=D);return e&&j.forEach(function(O){return t(f,O)}),Y&&en(f,C),S}function w(f,c,m,k){var S=tr(m);if(typeof S!="function")throw Error($(150));if(m=S.call(m),m==null)throw Error($(151));for(var E=S=null,j=c,C=c=0,D=null,N=m.next();j!==null&&!N.done;C++,N=m.next()){j.index>C?(D=j,j=null):D=j.sibling;var O=g(f,j,N.value,k);if(O===null){j===null&&(j=D);break}e&&j&&O.alternate===null&&t(f,j),c=o(O,c,C),E===null?S=O:E.sibling=O,E=O,j=D}if(N.done)return n(f,j),Y&&en(f,C),S;if(j===null){for(;!N.done;C++,N=m.next())N=p(f,N.value,k),N!==null&&(c=o(N,c,C),E===null?S=N:E.sibling=N,E=N);return Y&&en(f,C),S}for(j=r(f,j);!N.done;C++,N=m.next())N=y(j,f,C,N.value,k),N!==null&&(e&&N.alternate!==null&&j.delete(N.key===null?C:N.key),c=o(N,c,C),E===null?S=N:E.sibling=N,E=N);return e&&j.forEach(function(we){return t(f,we)}),Y&&en(f,C),S}function P(f,c,m,k){if(typeof m=="object"&&m!==null&&m.type===jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case li:e:{for(var S=m.key,E=c;E!==null;){if(E.key===S){if(S=m.type,S===jn){if(E.tag===7){n(f,E.sibling),c=i(E,m.props.children),c.return=f,f=c;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&ku(S)===E.type){n(f,E.sibling),c=i(E,m.props),c.ref=lr(f,E,m),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}m.type===jn?(c=an(m.props.children,f.mode,k,m.key),c.return=f,f=c):(k=Wi(m.type,m.key,m.props,null,f.mode,k),k.ref=lr(f,c,m),k.return=f,f=k)}return l(f);case kn:e:{for(E=m.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=i(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=wl(m,f.mode,k),c.return=f,f=c}return l(f);case _t:return E=m._init,P(f,c,E(m._payload),k)}if(mr(m))return v(f,c,m,k);if(tr(m))return w(f,c,m,k);xi(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,m),c.return=f,f=c):(n(f,c),c=vl(m,f.mode,k),c.return=f,f=c),l(f)):n(f,c)}return P}var Wn=Od(!0),Md=Od(!1),co=Kt(null),fo=null,Nn=null,ra=null;function ia(){ra=Nn=fo=null}function oa(e){var t=co.current;Q(co),e._currentValue=t}function us(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){fo=e,ra=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(ra!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(fo===null)throw Error($(308));Nn=e,fo.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var on=null;function la(e){on===null?on=[e]:on.push(e)}function Id(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,la(t)):(n.next=i.next,i.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yt(e,n)}return i=r.interleaved,i===null?(t.next=t,la(r)):(t.next=i.next,i.next=t),r.interleaved=t,yt(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gs(e,n)}}function ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function po(e,t,n,r){var i=e.updateQueue;Nt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,l===null?o=d:l.next=d,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;l=0,h=d=u=null,a=o;do{var g=a.lane,y=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(g=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(y,p,g);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(y,p,g):v,g==null)break e;p=J({},p,g);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=y,u=p):h=h.next=y,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pn|=l,e.lanes=l,e.memoizedState=p}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ni={},at=Kt(ni),Wr=Kt(ni),Hr=Kt(ni);function ln(e){if(e===ni)throw Error($(174));return e}function aa(e,t){switch(H(Hr,t),H(Wr,e),H(at,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wl(t,e)}Q(at),H(at,t)}function Hn(){Q(at),Q(Wr),Q(Hr)}function Fd(e){ln(Hr.current);var t=ln(at.current),n=Wl(t,e.type);t!==n&&(H(Wr,e),H(at,n))}function ua(e){Wr.current===e&&(Q(at),Q(Wr))}var X=Kt(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pl=[];function ca(){for(var e=0;e<pl.length;e++)pl[e]._workInProgressVersionPrimary=null;pl.length=0}var Fi=wt.ReactCurrentDispatcher,hl=wt.ReactCurrentBatchConfig,fn=0,Z=null,se=null,ce=null,mo=!1,Er=!1,Vr=0,im=0;function ge(){throw Error($(321))}function da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function fa(e,t,n,r,i,o){if(fn=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?am:um,e=n(r,i),Er){o=0;do{if(Er=!1,Vr=0,25<=o)throw Error($(301));o+=1,ce=se=null,t.updateQueue=null,Fi.current=cm,e=n(r,i)}while(Er)}if(Fi.current=go,t=se!==null&&se.next!==null,fn=0,ce=se=Z=null,mo=!1,t)throw Error($(300));return e}function pa(){var e=Vr!==0;return Vr=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Z.memoizedState=ce=e:ce=ce.next=e,ce}function He(){if(se===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ce===null?Z.memoizedState:ce.next;if(t!==null)ce=t,se=e;else{if(e===null)throw Error($(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?Z.memoizedState=ce=e:ce=ce.next=e}return ce}function Gr(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=He(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,d=o;do{var h=d.lane;if((fn&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=p,l=r):u=u.next=p,Z.lanes|=h,pn|=h}d=d.next}while(d!==null&&d!==o);u===null?l=r:u.next=a,tt(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gl(e){var t=He(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);tt(o,t.memoizedState)||(Ee=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ad(){}function bd(e,t){var n=Z,r=He(),i=t(),o=!tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ee=!0),r=r.queue,ha(Wd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Qr(9,Ud.bind(null,n,r,i,t),void 0,null),de===null)throw Error($(349));fn&30||Bd(n,t,i)}return i}function Bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ud(e,t,n,r){t.value=n,t.getSnapshot=r,Hd(t)&&Vd(e)}function Wd(e,t,n){return n(function(){Hd(t)&&Vd(e)})}function Hd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Vd(e){var t=yt(e,1);t!==null&&qe(t,e,1,-1)}function $u(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=sm.bind(null,Z,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gd(){return He().memoizedState}function Ai(e,t,n,r){var i=it();Z.flags|=e,i.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function Lo(e,t,n,r){var i=He();r=r===void 0?null:r;var o=void 0;if(se!==null){var l=se.memoizedState;if(o=l.destroy,r!==null&&da(r,l.deps)){i.memoizedState=Qr(t,n,o,r);return}}Z.flags|=e,i.memoizedState=Qr(1|t,n,o,r)}function Cu(e,t){return Ai(8390656,8,e,t)}function ha(e,t){return Lo(2048,8,e,t)}function Qd(e,t){return Lo(4,2,e,t)}function Kd(e,t){return Lo(4,4,e,t)}function Yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xd(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4,4,Yd.bind(null,t,e),n)}function ma(){}function Zd(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jd(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qd(e,t,n){return fn&21?(tt(n,t)||(n=id(),Z.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function om(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=hl.transition;hl.transition={};try{e(!1),t()}finally{U=n,hl.transition=r}}function ef(){return He().memoizedState}function lm(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tf(e))nf(t,n);else if(n=Id(e,t,n,r),n!==null){var i=je();qe(n,e,r,i),rf(n,t,r)}}function sm(e,t,n){var r=Ut(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tf(e))nf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,tt(a,l)){var u=t.interleaved;u===null?(i.next=i,la(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Id(e,t,i,r),n!==null&&(i=je(),qe(n,e,r,i),rf(n,t,r))}}function tf(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function nf(e,t){Er=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gs(e,n)}}var go={readContext:We,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},am={readContext:We,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lm.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:ma,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=om.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=it();if(Y){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),de===null)throw Error($(349));fn&30||Bd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Cu(Wd.bind(null,r,o,e),[e]),r.flags|=2048,Qr(9,Ud.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=it(),t=de.identifierPrefix;if(Y){var n=ht,r=pt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=im++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},um={readContext:We,useCallback:Zd,useContext:We,useEffect:ha,useImperativeHandle:Xd,useInsertionEffect:Qd,useLayoutEffect:Kd,useMemo:Jd,useReducer:ml,useRef:Gd,useState:function(){return ml(Gr)},useDebugValue:ma,useDeferredValue:function(e){var t=He();return qd(t,se.memoizedState,e)},useTransition:function(){var e=ml(Gr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:bd,useId:ef,unstable_isNewReconciler:!1},cm={readContext:We,useCallback:Zd,useContext:We,useEffect:ha,useImperativeHandle:Xd,useInsertionEffect:Qd,useLayoutEffect:Kd,useMemo:Jd,useReducer:gl,useRef:Gd,useState:function(){return gl(Gr)},useDebugValue:ma,useDeferredValue:function(e){var t=He();return se===null?t.memoizedState=e:qd(t,se.memoizedState,e)},useTransition:function(){var e=gl(Gr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:bd,useId:ef,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=Ut(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=bt(e,o,i),t!==null&&(qe(t,e,i,r),Di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=Ut(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=bt(e,o,i),t!==null&&(qe(t,e,i,r),Di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Ut(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=bt(e,i,r),t!==null&&(qe(t,e,r,n),Di(t,e,r))}};function Eu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,o):!0}function of(e,t,n){var r=!1,i=Gt,o=t.contextType;return typeof o=="object"&&o!==null?o=We(o):(i=Pe(t)?cn:ve.current,r=t.contextTypes,o=(r=r!=null)?Bn(e,i):Gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function zu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function ds(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},sa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=We(o):(o=Pe(t)?cn:ve.current,i.context=Bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(cs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oo.enqueueReplaceState(i,i.state,null),po(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=Fp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dm=typeof WeakMap=="function"?WeakMap:Map;function lf(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,js=r),fs(e,t)},n}function sf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fs(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Pu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cm.bind(null,e,t,n),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,bt(n,t,1))),n.lanes|=1),e)}var fm=wt.ReactCurrentOwner,Ee=!1;function ke(e,t,n,r){t.child=e===null?Md(t,null,n,r):Wn(t,e.child,n,r)}function Tu(e,t,n,r,i){n=n.render;var o=t.ref;return Dn(t,i),r=fa(e,t,n,r,o,i),n=pa(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(Y&&n&&ea(t),t.flags|=1,ke(e,t,r,i),t.child)}function Ru(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Sa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,af(e,t,o,r,i)):(e=Wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(l,r)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=Wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function af(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ar(o,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,vt(e,t,i)}return ps(e,t,n,r,i)}function uf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Rn,Re),Re|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Rn,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(Rn,Re),Re|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(Rn,Re),Re|=r;return ke(e,t,i,n),t.child}function cf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ps(e,t,n,r,i){var o=Pe(n)?cn:ve.current;return o=Bn(t,o),Dn(t,i),n=fa(e,t,n,r,o,i),r=pa(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(Y&&r&&ea(t),t.flags|=1,ke(e,t,n,i),t.child)}function Lu(e,t,n,r,i){if(Pe(n)){var o=!0;so(t)}else o=!1;if(Dn(t,i),t.stateNode===null)bi(e,t),of(t,n,r),ds(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=We(d):(d=Pe(n)?cn:ve.current,d=Bn(t,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==d)&&zu(t,l,r,d),Nt=!1;var g=t.memoizedState;l.state=g,po(t,r,l,i),u=t.memoizedState,a!==r||g!==u||ze.current||Nt?(typeof h=="function"&&(cs(t,n,h,r),u=t.memoizedState),(a=Nt||Eu(t,n,a,r,g,u,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Dd(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Qe(t.type,a),l.props=d,p=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=We(u):(u=Pe(n)?cn:ve.current,u=Bn(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||g!==u)&&zu(t,l,r,u),Nt=!1,g=t.memoizedState,l.state=g,po(t,r,l,i);var v=t.memoizedState;a!==p||g!==v||ze.current||Nt?(typeof y=="function"&&(cs(t,n,y,r),v=t.memoizedState),(d=Nt||Eu(t,n,d,r,g,v,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return hs(e,t,n,r,o,i)}function hs(e,t,n,r,i,o){cf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&yu(t,n,!1),vt(e,t,o);r=t.stateNode,fm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Wn(t,e.child,null,o),t.child=Wn(t,null,a,o)):ke(e,t,a,o),t.memoizedState=r.state,i&&yu(t,n,!0),t.child}function df(e){var t=e.stateNode;t.pendingContext?xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xu(e,t.context,!1),aa(e,t.containerInfo)}function Ou(e,t,n,r,i){return Un(),na(i),t.flags|=256,ke(e,t,n,r),t.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function gs(e){return{baseLanes:e,cachePool:null,transitions:null}}function ff(e,t,n){var r=t.pendingProps,i=X.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(X,i&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Do(l,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=gs(n),t.memoizedState=ms,e):ga(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pm(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wt(a,o):(o=an(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?gs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ms,r}return o=e.child,e=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ga(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&na(r),Wn(t,e.child,null,n),e=ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=xl(Error($(422))),yi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Do({mode:"visible",children:r.children},i,0,null),o=an(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wn(t,e.child,null,l),t.child.memoizedState=gs(l),t.memoizedState=ms,o);if(!(t.mode&1))return yi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error($(419)),r=xl(o,r,void 0),yi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ee||a){if(r=de,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yt(e,i),qe(r,e,i,-1))}return ja(),r=xl(Error($(421))),yi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Em.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Le=At(i.nextSibling),Oe=t,Y=!0,Ze=null,e!==null&&(Ae[be++]=pt,Ae[be++]=ht,Ae[be++]=dn,pt=e.id,ht=e.overflow,dn=t),t=ga(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),us(e.return,t,n)}function yl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ke(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yl(t,!0,n,null,o);break;case"together":yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hm(e,t,n){switch(t.tag){case 3:df(t),Un();break;case 5:Fd(t);break;case 1:Pe(t.type)&&so(t);break;case 4:aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(co,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?ff(e,t,n):(H(X,X.current&1),e=vt(e,t,n),e!==null?e.sibling:null);H(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,uf(e,t,n)}return vt(e,t,n)}var hf,xs,mf,gf;hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xs=function(){};mf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ln(at.current);var o=null;switch(n){case"input":i=Al(e,i),r=Al(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=Ul(e,i),r=Ul(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}Hl(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};gf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mm(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Pe(t.type)&&lo(),xe(t),null;case 3:return r=t.stateNode,Hn(),Q(ze),Q(ve),ca(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Cs(Ze),Ze=null))),xs(e,t),xe(t),null;case 5:ua(t);var i=ln(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)mf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return xe(t),null}if(e=ln(at.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ot]=t,r[Ur]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<xr.length;i++)V(xr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Ha(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Ga(r,o),V("invalid",r)}Hl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),i=["children",""+a]):Rr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":si(r),Va(r,o,!0);break;case"textarea":si(r),Qa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[Ur]=r,hf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vl(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<xr.length;i++)V(xr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Ha(e,r),i=Al(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ga(e,r),i=Ul(e,r),V("invalid",e);break;default:i=r}Hl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Gc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Lr(e,u):typeof u=="number"&&Lr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&V("scroll",e):u!=null&&bs(e,o,u,l))}switch(n){case"input":si(e),Va(e,r,!1);break;case"textarea":si(e),Qa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)gf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=ln(Hr.current),ln(at.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return xe(t),null;case 13:if(Q(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Le!==null&&t.mode&1&&!(t.flags&128))Ld(),Un(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[ot]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),o=!1}else Ze!==null&&(Cs(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ue===0&&(ue=3):ja())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Hn(),xs(e,t),e===null&&br(t.stateNode.containerInfo),xe(t),null;case 10:return oa(t.type._context),xe(t),null;case 17:return Pe(t.type)&&lo(),xe(t),null;case 19:if(Q(X),o=t.memoizedState,o===null)return xe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)sr(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ho(e),l!==null){for(t.flags|=128,sr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(X,X.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Gn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ho(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Y)return xe(t),null}else 2*te()-o.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=X.current,H(X,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return ka(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function gm(e,t){switch(ta(t),t.tag){case 1:return Pe(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),Q(ze),Q(ve),ca(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ua(t),null;case 13:if(Q(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(X),null;case 4:return Hn(),null;case 10:return oa(t.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var vi=!1,ye=!1,xm=typeof WeakSet=="function"?WeakSet:Set,_=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function ys(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Iu=!1;function ym(e,t){if(ts=no,e=wd(),qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,d=0,h=0,p=e,g=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=l+i),p!==o||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++d===i&&(a=l),g===o&&++h===r&&(u=l),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ns={focusedElem:e,selectionRange:n},no=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,P=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Qe(t.type,w),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(k){ee(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return v=Iu,Iu=!1,v}function zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ys(t,n,o)}i=i.next}while(i!==r)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[Ur],delete t[os],delete t[em],delete t[tm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yf(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}var fe=null,Ke=!1;function St(e,t,n){for(n=n.child;n!==null;)vf(e,t,n),n=n.sibling}function vf(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 5:ye||Tn(n,t);case 6:var r=fe,i=Ke;fe=null,St(e,t,n),fe=r,Ke=i,fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?dl(e.parentNode,n):e.nodeType===1&&dl(e,n),Dr(e)):dl(fe,n.stateNode));break;case 4:r=fe,i=Ke,fe=n.stateNode.containerInfo,Ke=!0,St(e,t,n),fe=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ys(n,t,l),i=i.next}while(i!==r)}St(e,t,n);break;case 1:if(!ye&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,St(e,t,n),ye=r):St(e,t,n);break;default:St(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xm),t.forEach(function(r){var i=zm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,Ke=!1;break e;case 3:fe=a.stateNode.containerInfo,Ke=!0;break e;case 4:fe=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(fe===null)throw Error($(160));vf(o,l,i),fe=null,Ke=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){ee(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}function wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),rt(e),r&4){try{zr(3,e,e.return),Mo(3,e)}catch(w){ee(e,e.return,w)}try{zr(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Ge(t,e),rt(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(Ge(t,e),rt(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var i=e.stateNode;try{Lr(i,"")}catch(w){ee(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Bc(i,o),Vl(a,l);var d=Vl(a,o);for(l=0;l<u.length;l+=2){var h=u[l],p=u[l+1];h==="style"?Gc(i,p):h==="dangerouslySetInnerHTML"?Hc(i,p):h==="children"?Lr(i,p):bs(i,h,p,d)}switch(a){case"input":bl(i,o);break;case"textarea":Uc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Ln(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ur]=o}catch(w){ee(e,e.return,w)}}break;case 6:if(Ge(t,e),rt(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ee(e,e.return,w)}}break;case 3:if(Ge(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Ge(t,e),rt(e);break;case 13:Ge(t,e),rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(va=te())),r&4&&Fu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(d=ye)||h,Ge(t,e),ye=d):Ge(t,e),rt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(p=_=h;_!==null;){switch(g=_,y=g.child,g.tag){case 0:case 11:case 14:case 15:zr(4,g,g.return);break;case 1:Tn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:Tn(g,g.return);break;case 22:if(g.memoizedState!==null){bu(p);continue}}y!==null?(y.return=g,_=y):bu(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Vc("display",l))}catch(w){ee(e,e.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){ee(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ge(t,e),rt(e),r&4&&Fu(e);break;case 21:break;default:Ge(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yf(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lr(i,""),r.flags&=-33);var o=Du(e);ks(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Du(e);ws(e,a,l);break;default:throw Error($(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e,t,n){_=e,kf(e)}function kf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||vi;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ye;a=vi;var d=ye;if(vi=l,(ye=u)&&!d)for(_=i;_!==null;)l=_,u=l.child,l.tag===22&&l.memoizedState!==null?Bu(i):u!==null?(u.return=l,_=u):Bu(i);for(;o!==null;)_=o,kf(o),o=o.sibling;_=i,vi=a,ye=d}Au(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Au(e)}}function Au(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Su(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Dr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}ye||t.flags&512&&vs(t)}catch(g){ee(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function bu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Bu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mo(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ee(t,i,u)}}var o=t.return;try{vs(t)}catch(u){ee(t,o,u)}break;case 5:var l=t.return;try{vs(t)}catch(u){ee(t,l,u)}}}catch(u){ee(t,t.return,u)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var wm=Math.ceil,xo=wt.ReactCurrentDispatcher,xa=wt.ReactCurrentOwner,Ue=wt.ReactCurrentBatchConfig,A=0,de=null,oe=null,he=0,Re=0,Rn=Kt(0),ue=0,Kr=null,pn=0,Io=0,ya=0,Pr=null,Ce=null,va=0,Gn=1/0,ct=null,yo=!1,js=null,Bt=null,wi=!1,Ot=null,vo=0,_r=0,Ss=null,Bi=-1,Ui=0;function je(){return A&6?te():Bi!==-1?Bi:Bi=te()}function Ut(e){return e.mode&1?A&2&&he!==0?he&-he:rm.transition!==null?(Ui===0&&(Ui=id()),Ui):(e=U,e!==0||(e=window.event,e=e===void 0?16:dd(e.type)),e):1}function qe(e,t,n,r){if(50<_r)throw _r=0,Ss=null,Error($(185));qr(e,n,r),(!(A&2)||e!==de)&&(e===de&&(!(A&2)&&(Io|=n),ue===4&&Rt(e,he)),_e(e,r),n===1&&A===0&&!(t.mode&1)&&(Gn=te()+500,Ro&&Yt()))}function _e(e,t){var n=e.callbackNode;rh(e,t);var r=to(e,e===de?he:0);if(r===0)n!==null&&Xa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xa(n),t===1)e.tag===0?nm(Uu.bind(null,e)):Nd(Uu.bind(null,e)),Jh(function(){!(A&6)&&Yt()}),n=null;else{switch(od(r)){case 1:n=Vs;break;case 4:n=nd;break;case 16:n=eo;break;case 536870912:n=rd;break;default:n=eo}n=_f(n,jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jf(e,t){if(Bi=-1,Ui=0,A&6)throw Error($(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=to(e,e===de?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wo(e,r);else{t=r;var i=A;A|=2;var o=$f();(de!==e||he!==t)&&(ct=null,Gn=te()+500,sn(e,t));do try{Sm();break}catch(a){Sf(e,a)}while(!0);ia(),xo.current=o,A=i,oe!==null?t=0:(de=null,he=0,t=ue)}if(t!==0){if(t===2&&(i=Xl(e),i!==0&&(r=i,t=$s(e,i))),t===1)throw n=Kr,sn(e,0),Rt(e,r),_e(e,te()),n;if(t===6)Rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!km(i)&&(t=wo(e,r),t===2&&(o=Xl(e),o!==0&&(r=o,t=$s(e,o))),t===1))throw n=Kr,sn(e,0),Rt(e,r),_e(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:tn(e,Ce,ct);break;case 3:if(Rt(e,r),(r&130023424)===r&&(t=va+500-te(),10<t)){if(to(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=is(tn.bind(null,e,Ce,ct),t);break}tn(e,Ce,ct);break;case 4:if(Rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Je(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wm(r/1960))-r,10<r){e.timeoutHandle=is(tn.bind(null,e,Ce,ct),r);break}tn(e,Ce,ct);break;case 5:tn(e,Ce,ct);break;default:throw Error($(329))}}}return _e(e,te()),e.callbackNode===n?jf.bind(null,e):null}function $s(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=wo(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Cs(t)),e}function Cs(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~ya,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Uu(e){if(A&6)throw Error($(327));Fn();var t=to(e,0);if(!(t&1))return _e(e,te()),null;var n=wo(e,t);if(e.tag!==0&&n===2){var r=Xl(e);r!==0&&(t=r,n=$s(e,r))}if(n===1)throw n=Kr,sn(e,0),Rt(e,t),_e(e,te()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Ce,ct),_e(e,te()),null}function wa(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Gn=te()+500,Ro&&Yt())}}function hn(e){Ot!==null&&Ot.tag===0&&!(A&6)&&Fn();var t=A;A|=1;var n=Ue.transition,r=U;try{if(Ue.transition=null,U=1,e)return e()}finally{U=r,Ue.transition=n,A=t,!(A&6)&&Yt()}}function ka(){Re=Rn.current,Q(Rn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zh(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:Hn(),Q(ze),Q(ve),ca();break;case 5:ua(r);break;case 4:Hn();break;case 13:Q(X);break;case 19:Q(X);break;case 10:oa(r.type._context);break;case 22:case 23:ka()}n=n.return}if(de=e,oe=e=Wt(e.current,null),he=Re=t,ue=0,Kr=null,ya=Io=pn=0,Ce=Pr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}on=null}return e}function Sf(e,t){do{var n=oe;try{if(ia(),Fi.current=go,mo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mo=!1}if(fn=0,ce=se=Z=null,Er=!1,Vr=0,xa.current=null,n===null||n.return===null){ue=1,Kr=t,oe=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=he,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=_u(l);if(y!==null){y.flags&=-257,Nu(y,l,a,o,t),y.mode&1&&Pu(o,d,t),t=y,u=d;var v=t.updateQueue;if(v===null){var w=new Set;w.add(u),t.updateQueue=w}else v.add(u);break e}else{if(!(t&1)){Pu(o,d,t),ja();break e}u=Error($(426))}}else if(Y&&a.mode&1){var P=_u(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Nu(P,l,a,o,t),na(Vn(u,a));break e}}o=u=Vn(u,a),ue!==4&&(ue=2),Pr===null?Pr=[o]:Pr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=lf(o,u,t);ju(o,f);break e;case 1:a=u;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Bt===null||!Bt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=sf(o,a,t);ju(o,k);break e}}o=o.return}while(o!==null)}Ef(n)}catch(S){t=S,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function $f(){var e=xo.current;return xo.current=go,e===null?go:e}function ja(){(ue===0||ue===3||ue===2)&&(ue=4),de===null||!(pn&268435455)&&!(Io&268435455)||Rt(de,he)}function wo(e,t){var n=A;A|=2;var r=$f();(de!==e||he!==t)&&(ct=null,sn(e,t));do try{jm();break}catch(i){Sf(e,i)}while(!0);if(ia(),A=n,xo.current=r,oe!==null)throw Error($(261));return de=null,he=0,ue}function jm(){for(;oe!==null;)Cf(oe)}function Sm(){for(;oe!==null&&!Kp();)Cf(oe)}function Cf(e){var t=Pf(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?Ef(e):oe=t,xa.current=null}function Ef(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gm(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,oe=null;return}}else if(n=mm(n,t,Re),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ue===0&&(ue=5)}function tn(e,t,n){var r=U,i=Ue.transition;try{Ue.transition=null,U=1,$m(e,t,n,r)}finally{Ue.transition=i,U=r}return null}function $m(e,t,n,r){do Fn();while(Ot!==null);if(A&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ih(e,o),e===de&&(oe=de=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,_f(eo,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var l=U;U=1;var a=A;A|=4,xa.current=null,ym(e,n),wf(n,e),Hh(ns),no=!!ts,ns=ts=null,e.current=n,vm(n),Yp(),A=a,U=l,Ue.transition=o}else e.current=n;if(wi&&(wi=!1,Ot=e,vo=i),o=e.pendingLanes,o===0&&(Bt=null),Jp(n.stateNode),_e(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yo)throw yo=!1,e=js,js=null,e;return vo&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===Ss?_r++:(_r=0,Ss=e):_r=0,Yt(),null}function Fn(){if(Ot!==null){var e=od(vo),t=Ue.transition,n=U;try{if(Ue.transition=null,U=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,vo=0,A&6)throw Error($(331));var i=A;for(A|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(_=d;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:zr(8,h,o)}var p=h.child;if(p!==null)p.return=h,_=p;else for(;_!==null;){h=_;var g=h.sibling,y=h.return;if(xf(h),h===d){_=null;break}if(g!==null){g.return=y,_=g;break}_=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var c=e.current;for(_=c;_!==null;){l=_;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,_=m;else e:for(l=c;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mo(9,a)}}catch(S){ee(a,a.return,S)}if(a===l){_=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,_=k;break e}_=a.return}}if(A=i,Yt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(zo,e)}catch{}r=!0}return r}finally{U=n,Ue.transition=t}}return!1}function Wu(e,t,n){t=Vn(n,t),t=lf(e,t,1),e=bt(e,t,1),t=je(),e!==null&&(qr(e,1,t),_e(e,t))}function ee(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Vn(n,e),e=sf(t,e,1),t=bt(t,e,1),e=je(),t!==null&&(qr(t,1,e),_e(t,e));break}}t=t.return}}function Cm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(he&n)===n&&(ue===4||ue===3&&(he&130023424)===he&&500>te()-va?sn(e,0):ya|=n),_e(e,t)}function zf(e,t){t===0&&(e.mode&1?(t=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):t=1);var n=je();e=yt(e,t),e!==null&&(qr(e,t,n),_e(e,n))}function Em(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zf(e,n)}function zm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),zf(e,n)}var Pf;Pf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,hm(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,Y&&t.flags&1048576&&Td(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bi(e,t),e=t.pendingProps;var i=Bn(t,ve.current);Dn(t,n),i=fa(null,t,r,e,i,n);var o=pa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(o=!0,so(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sa(t),i.updater=Oo,t.stateNode=i,i._reactInternals=t,ds(t,r,e,n),t=hs(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&ea(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_m(r),e=Qe(r,e),i){case 0:t=ps(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=Tu(null,t,r,e,n);break e;case 14:t=Ru(null,t,r,Qe(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),ps(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Lu(e,t,r,i,n);case 3:e:{if(df(t),e===null)throw Error($(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Dd(e,t),po(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vn(Error($(423)),t),t=Ou(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error($(424)),t),t=Ou(e,t,r,n,i);break e}else for(Le=At(t.stateNode.containerInfo.firstChild),Oe=t,Y=!0,Ze=null,n=Md(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===i){t=vt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Fd(t),e===null&&as(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,rs(r,i)?l=null:o!==null&&rs(r,o)&&(t.flags|=32),cf(e,t),ke(e,t,l,n),t.child;case 6:return e===null&&as(t),null;case 13:return ff(e,t,n);case 4:return aa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Tu(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,H(co,r._currentValue),r._currentValue=l,o!==null)if(tt(o.value,l)){if(o.children===i.children&&!ze.current){t=vt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=mt(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),us(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error($(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),us(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=We(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),Ru(e,t,r,i,n);case 15:return af(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),bi(e,t),t.tag=1,Pe(r)?(e=!0,so(t)):e=!1,Dn(t,n),of(t,r,i),ds(t,r,i,n),hs(null,t,r,!0,e,n);case 19:return pf(e,t,n);case 22:return uf(e,t,n)}throw Error($(156,t.tag))};function _f(e,t){return td(e,t)}function Pm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new Pm(e,t,n,r)}function Sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _m(e){if(typeof e=="function")return Sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Us)return 11;if(e===Ws)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Sa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case jn:return an(n.children,i,o,t);case Bs:l=8,i|=8;break;case Ml:return e=Be(12,n,t,i|2),e.elementType=Ml,e.lanes=o,e;case Il:return e=Be(13,n,t,i),e.elementType=Il,e.lanes=o,e;case Dl:return e=Be(19,n,t,i),e.elementType=Dl,e.lanes=o,e;case Fc:return Do(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ic:l=10;break e;case Dc:l=9;break e;case Us:l=11;break e;case Ws:l=14;break e;case _t:l=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=Be(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=Be(22,e,r,t),e.elementType=Fc,e.lanes=n,e.stateNode={isHidden:!1},e}function vl(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function wl(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $a(e,t,n,r,i,o,l,a,u){return e=new Nm(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sa(o),e}function Tm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nf(e){if(!e)return Gt;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Pe(n))return _d(e,n,t)}return t}function Tf(e,t,n,r,i,o,l,a,u){return e=$a(n,r,!0,e,i,o,l,a,u),e.context=Nf(null),n=e.current,r=je(),i=Ut(n),o=mt(r,i),o.callback=t??null,bt(n,o,i),e.current.lanes=i,qr(e,i,r),_e(e,r),e}function Fo(e,t,n,r){var i=t.current,o=je(),l=Ut(i);return n=Nf(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(i,t,l),e!==null&&(qe(e,i,l,o),Di(e,i,l)),l}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ca(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}function Rm(){return null}var Rf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ea(e){this._internalRoot=e}Ao.prototype.render=Ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Fo(e,t,null,null)};Ao.prototype.unmount=Ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Fo(null,e,null,null)}),t[xt]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=ad();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&cd(e)}};function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Lm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=ko(l);o.call(d)}}var l=Tf(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=l,e[xt]=l.current,br(e.nodeType===8?e.parentNode:e),hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=ko(u);a.call(d)}}var u=$a(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=u,e[xt]=u.current,br(e.nodeType===8?e.parentNode:e),hn(function(){Fo(t,u,n,r)}),u}function Bo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=ko(l);a.call(u)}}Fo(t,l,e,i)}else l=Lm(n,t,e,i,r);return ko(l)}ld=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gr(t.pendingLanes);n!==0&&(Gs(t,n|1),_e(t,te()),!(A&6)&&(Gn=te()+500,Yt()))}break;case 13:hn(function(){var r=yt(e,1);if(r!==null){var i=je();qe(r,e,1,i)}}),Ca(e,1)}};Qs=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=je();qe(t,e,134217728,n)}Ca(e,134217728)}};sd=function(e){if(e.tag===13){var t=Ut(e),n=yt(e,t);if(n!==null){var r=je();qe(n,e,t,r)}Ca(e,t)}};ad=function(){return U};ud=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Ql=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=To(r);if(!i)throw Error($(90));bc(r),bl(r,i)}}}break;case"textarea":Uc(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Yc=wa;Xc=hn;var Om={usingClientEntryPoint:!1,Events:[ti,En,To,Qc,Kc,wa]},ar={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mm={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{zo=ki.inject(Mm),st=ki}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Om;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!za(t))throw Error($(200));return Tm(e,t,null,n)};Ie.createRoot=function(e,t){if(!za(e))throw Error($(299));var n=!1,r="",i=Rf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$a(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,br(e.nodeType===8?e.parentNode:e),new Ea(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=qc(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return hn(e)};Ie.hydrate=function(e,t,n){if(!bo(t))throw Error($(200));return Bo(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!za(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Rf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Tf(t,null,e,1,n??null,i,!1,o,l),e[xt]=t.current,br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ao(t)};Ie.render=function(e,t,n){if(!bo(t))throw Error($(200));return Bo(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!bo(e))throw Error($(40));return e._reactRootContainer?(hn(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Ie.unstable_batchedUpdates=wa;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Bo(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Lf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lf)}catch(e){console.error(e)}}Lf(),Rc.exports=Ie;var Im=Rc.exports,Gu=Im;Ll.createRoot=Gu.createRoot,Ll.hydrateRoot=Gu.hydrateRoot;var G="-ms-",Nr="-moz-",B="-webkit-",Of="comm",Uo="rule",Pa="decl",Dm="@import",Fm="@namespace",Mf="@keyframes",Am="@layer",If=Math.abs,_a=String.fromCharCode,Es=Object.assign;function bm(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Df(e){return e.trim()}function dt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Hi(e,t,n){return e.indexOf(t,n)}function ae(e,t){return e.charCodeAt(t)|0}function mn(e,t,n){return e.slice(t,n)}function Ye(e){return e.length}function Ff(e){return e.length}function yr(e,t){return t.push(e),e}function Bm(e,t){return e.map(t).join("")}function Qu(e,t){return e.filter(function(n){return!dt(n,t)})}var Wo=1,Qn=1,Af=0,Ve=0,ie=0,qn="";function Ho(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Wo,column:Qn,length:l,return:"",siblings:a}}function Pt(e,t){return Es(Ho("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function wn(e){for(;e.root;)e=Pt(e.root,{children:[e]});yr(e,e.siblings)}function Um(){return ie}function Wm(){return ie=Ve>0?ae(qn,--Ve):0,Qn--,ie===10&&(Qn=1,Wo--),ie}function et(){return ie=Ve<Af?ae(qn,Ve++):0,Qn++,ie===10&&(Qn=1,Wo++),ie}function Mt(){return ae(qn,Ve)}function Vi(){return Ve}function Vo(e,t){return mn(qn,e,t)}function Yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hm(e){return Wo=Qn=1,Af=Ye(qn=e),Ve=0,[]}function Vm(e){return qn="",e}function kl(e){return Df(Vo(Ve-1,zs(e===91?e+2:e===40?e+1:e)))}function Gm(e){for(;(ie=Mt())&&ie<33;)et();return Yr(e)>2||Yr(ie)>3?"":" "}function Qm(e,t){for(;--t&&et()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return Vo(e,Vi()+(t<6&&Mt()==32&&et()==32))}function zs(e){for(;et();)switch(ie){case e:return Ve;case 34:case 39:e!==34&&e!==39&&zs(ie);break;case 40:e===41&&zs(e);break;case 92:et();break}return Ve}function Km(e,t){for(;et()&&e+ie!==57;)if(e+ie===84&&Mt()===47)break;return"/*"+Vo(t,Ve-1)+"*"+_a(e===47?e:et())}function Ym(e){for(;!Yr(Mt());)et();return Vo(e,Ve)}function Xm(e){return Vm(Gi("",null,null,null,[""],e=Hm(e),0,[0],e))}function Gi(e,t,n,r,i,o,l,a,u){for(var d=0,h=0,p=l,g=0,y=0,v=0,w=1,P=1,f=1,c=0,m="",k=i,S=o,E=r,j=m;P;)switch(v=c,c=et()){case 40:if(v!=108&&ae(j,p-1)==58){Hi(j+=L(kl(c),"&","&\f"),"&\f",If(d?a[d-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:j+=kl(c);break;case 9:case 10:case 13:case 32:j+=Gm(v);break;case 92:j+=Qm(Vi()-1,7);continue;case 47:switch(Mt()){case 42:case 47:yr(Zm(Km(et(),Vi()),t,n,u),u),(Yr(v||1)==5||Yr(Mt()||1)==5)&&Ye(j)&&mn(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*w:a[d++]=Ye(j)*f;case 125*w:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+h:f==-1&&(j=L(j,/\f/g,"")),y>0&&(Ye(j)-p||w===0&&v===47)&&yr(y>32?Yu(j+";",r,n,p-1,u):Yu(L(j," ","")+";",r,n,p-2,u),u);break;case 59:j+=";";default:if(yr(E=Ku(j,t,n,d,h,i,a,m,k=[],S=[],p,o),o),c===123)if(h===0)Gi(j,t,E,E,k,o,p,a,S);else{switch(g){case 99:if(ae(j,3)===110)break;case 108:if(ae(j,2)===97)break;default:h=0;case 100:case 109:case 115:}h?Gi(e,E,E,r&&yr(Ku(e,E,E,0,0,i,a,m,i,k=[],p,S),S),i,S,p,a,r?k:S):Gi(j,E,E,E,[""],S,0,a,S)}}d=h=y=0,w=f=1,m=j="",p=l;break;case 58:p=1+Ye(j),y=v;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&Wm()==125)continue}switch(j+=_a(c),c*w){case 38:f=h>0?1:(j+="\f",-1);break;case 44:a[d++]=(Ye(j)-1)*f,f=1;break;case 64:Mt()===45&&(j+=kl(et())),g=Mt(),h=p=Ye(m=j+=Ym(Vi())),c++;break;case 45:v===45&&Ye(j)==2&&(w=0)}}return o}function Ku(e,t,n,r,i,o,l,a,u,d,h,p){for(var g=i-1,y=i===0?o:[""],v=Ff(y),w=0,P=0,f=0;w<r;++w)for(var c=0,m=mn(e,g+1,g=If(P=l[w])),k=e;c<v;++c)(k=Df(P>0?y[c]+" "+m:L(m,/&\f/g,y[c])))&&(u[f++]=k);return Ho(e,t,n,i===0?Uo:a,u,d,h,p)}function Zm(e,t,n,r){return Ho(e,t,n,Of,_a(Um()),mn(e,2,-2),0,r)}function Yu(e,t,n,r,i){return Ho(e,t,n,Pa,mn(e,0,r),mn(e,r+1,-1),r,i)}function bf(e,t,n){switch(bm(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return B+e+e;case 4855:return B+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Nr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Nr+e+G+e+e;case 5936:switch(ae(e,t+11)){case 114:return B+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+G+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+G+e+e;case 6165:return B+e+G+"flex-"+e+e;case 5187:return B+e+L(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return B+e+G+"flex-item-"+L(e,/flex-|-self/g,"")+(dt(e,/flex-|baseline/)?"":G+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return B+e+G+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+G+L(e,"shrink","negative")+e;case 5292:return B+e+G+L(e,"basis","preferred-size")+e;case 6060:return B+"box-"+L(e,"-grow","")+B+e+G+L(e,"grow","positive")+e;case 4554:return B+L(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+G+"flex-pack:$3"),/space-between/,"justify")+B+e+e;case 4200:if(!dt(e,/flex-|baseline/))return G+"grid-column-align"+mn(e,t)+e;break;case 2592:case 3360:return G+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,dt(r.props,/grid-\w+-end/)})?~Hi(e+(n=n[t].value),"span",0)?e:G+L(e,"-start","")+e+G+"grid-row-span:"+(~Hi(n,"span",0)?dt(n,/\d+/):+dt(n,/\d+/)-+dt(e,/\d+/))+";":G+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return dt(r.props,/grid-\w+-start/)})?e:G+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ye(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Nr+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hi(e,"stretch",0)?bf(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,u,d){return G+i+":"+o+d+(l?G+i+"-span:"+(a?u:+u-+o)+d:"")+e});case 4949:if(ae(e,t+6)===121)return L(e,":",":"+B)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(ae(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+G+"$2box$3")+e;case 100:return L(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function jo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jm(e,t,n,r){switch(e.type){case Am:if(e.children.length)break;case Dm:case Fm:case Pa:return e.return=e.return||e.value;case Of:return"";case Mf:return e.return=e.value+"{"+jo(e.children,r)+"}";case Uo:if(!Ye(e.value=e.props.join(",")))return""}return Ye(n=jo(e.children,r))?e.return=e.value+"{"+n+"}":""}function qm(e){var t=Ff(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function eg(e){return function(t){t.root||(t=t.return)&&e(t)}}function tg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pa:e.return=bf(e.value,e.length,n);return;case Mf:return jo([Pt(e,{value:L(e.value,"@","@"+B)})],r);case Uo:if(e.length)return Bm(n=e.props,function(i){switch(dt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wn(Pt(e,{props:[L(i,/:(read-\w+)/,":"+Nr+"$1")]})),wn(Pt(e,{props:[i]})),Es(e,{props:Qu(n,r)});break;case"::placeholder":wn(Pt(e,{props:[L(i,/:(plac\w+)/,":"+B+"input-$1")]})),wn(Pt(e,{props:[L(i,/:(plac\w+)/,":"+Nr+"$1")]})),wn(Pt(e,{props:[L(i,/:(plac\w+)/,G+"input-$1")]})),wn(Pt(e,{props:[i]})),Es(e,{props:Qu(n,r)});break}return""})}}var An={},jl,Sl;const Kn=typeof process<"u"&&An!==void 0&&(An.REACT_APP_SC_ATTR||An.SC_ATTR)||"data-styled",Bf="active",Uf="data-styled-version",Go="6.4.2",Na=`/*!sc*/
`,Tr=typeof window<"u"&&typeof document<"u";function Xu(e){if(typeof process<"u"&&An!==void 0){const t=An[e];if(t!==void 0&&t!=="")return t!=="false"}}const ng=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Sl=(jl=Xu("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&jl!==void 0?jl:Xu("SC_DISABLE_SPEEDY"))!==null&&Sl!==void 0?Sl:typeof process<"u"&&An!==void 0&&!1),Wf="sc-keyframes-",rg={};function gn(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Qi=new Map,So=new Map,Ki=1;const vr=e=>{if(Qi.has(e))return Qi.get(e);for(;So.has(Ki);)Ki++;const t=Ki++;return Qi.set(e,t),So.set(t,e),t},ig=e=>So.get(e),og=(e,t)=>{Ki=t+1,Qi.set(e,t),So.set(t,e)},Ta=Object.freeze([]),Yn=Object.freeze({});function Hf(e,t,n=Yn){return e.theme!==n.theme&&e.theme||t||n.theme}const lg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sg=/(^-|-$)/g;function Vf(e){return e.replace(lg,"-").replace(sg,"")}const ag=/(a)(d)/gi,Zu=e=>String.fromCharCode(e+(e>25?39:97));function Ra(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Zu(t%52)+n;return(Zu(t%52)+n).replace(ag,"$1-$2")}const Ps=5381,un=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Gf=e=>un(Ps,e);function La(e){return Ra(Gf(e)>>>0)}function ug(e){return e.displayName||e.name||"Component"}function _s(e){return typeof e=="string"&&!0}function cg(e){return _s(e)?`styled.${e}`:`Styled(${ug(e)})`}const Qf=Symbol.for("react.memo"),dg=Symbol.for("react.forward_ref"),fg={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},pg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hg={[dg]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Qf]:Kf};function Ju(e){return("type"in(t=e)&&t.type.$$typeof)===Qf?Kf:"$$typeof"in e?hg[e.$$typeof]:fg;var t}const mg=Object.defineProperty,gg=Object.getOwnPropertyNames,xg=Object.getOwnPropertySymbols,yg=Object.getOwnPropertyDescriptor,vg=Object.getPrototypeOf,wg=Object.prototype;function Yf(e,t,n){if(typeof t!="string"){const r=vg(t);r&&r!==wg&&Yf(e,r,n);const i=gg(t).concat(xg(t)),o=Ju(e),l=Ju(t);for(let a=0;a<i.length;++a){const u=i[a];if(!(u in pg||n&&n[u]||l&&u in l||o&&u in o)){const d=yg(t,u);try{mg(e,u,d)}catch{}}}}return e}function er(e){return typeof e=="function"}const kg=Symbol.for("react.forward_ref");function Oa(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===kg&&"styledComponentId"in e}function wr(e,t){return e&&t?e+" "+t:e||t||""}function $o(e,t){return e.join("")}function Xr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ns(e,t,n=!1){if(!n&&!Xr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Ns(e[r],t[r]);else if(Xr(t))for(const r in t)e[r]=Ns(e[r],t[r]);return e}function Ma(e,t){Object.defineProperty(e,"toString",{value:t})}const jg=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const i=this.groupSizes,o=i.length;let l=o;for(;e>=l;)if(l<<=1,l<0)throw gn(16,`${e}`);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(let a=o;a<l;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,o=t.length;i<o;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let o=r;o<i;o++)t+=this.tag.getRule(o)+Na;return t}},Sg=`style[${Kn}][${Uf}="${Go}"]`,$g=new RegExp(`^${Kn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),qu=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Ts=e=>{if(!e)return document;if(qu(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(qu(t))return t}return document},Cg=(e,t,n)=>{const r=n.split(",");let i;for(let o=0,l=r.length;o<l;o++)(i=r[o])&&e.registerName(t,i)},Eg=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Na),i=[];for(let o=0,l=r.length;o<l;o++){const a=r[o].trim();if(!a)continue;const u=a.match($g);if(u){const d=0|parseInt(u[1],10),h=u[2];d!==0&&(og(h,d),Cg(e,h,u[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(a)}},$l=e=>{const t=Ts(e.options.target).querySelectorAll(Sg);for(let n=0,r=t.length;n<r;n++){const i=t[n];i&&i.getAttribute(Kn)!==Bf&&(Eg(e,i),i.parentNode&&i.parentNode.removeChild(i))}};let ur=!1;function zg(){if(ur!==!1)return ur;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ur=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return ur=t.getAttribute("content")||void 0}return ur=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Xf=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),o=(u=>{const d=Array.from(u.querySelectorAll(`style[${Kn}]`));return d[d.length-1]})(r),l=o!==void 0?o.nextSibling:null;i.setAttribute(Kn,Bf),i.setAttribute(Uf,Go);const a=t||zg();return a&&i.setAttribute("nonce",a),r.insertBefore(i,l),i},Pg=class{constructor(e,t){this.element=Xf(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let o=0,l=i.length;o<l;o++){const a=i[o];if(a.ownerNode===n)return a}throw gn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},_g=class{constructor(e,t){this.element=Xf(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let ec=Tr;const Ng={isServer:!Tr,useCSSOMInjection:!ng};class ri{static registerId(t){return vr(t)}constructor(t=Yn,n={},r){this.options=Object.assign(Object.assign({},Ng),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Tr&&ec&&(ec=!1,$l(this)),Ma(this,()=>(i=>{const o=i.getTag(),{length:l}=o;let a="";for(let u=0;u<l;u++){const d=ig(u);if(d===void 0)continue;const h=i.names.get(d);if(h===void 0||!h.size)continue;const p=o.getGroup(u);if(p.length===0)continue;const g=Kn+".g"+u+'[id="'+d+'"]';let y="";for(const v of h)v.length>0&&(y+=v+",");a+=p+g+'{content:"'+y+'"}'+Na}return a})(this))}rehydrate(){!this.server&&Tr&&$l(this)}reconstructWithOptions(t,n=!0){const r=new ri(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Tr&&t.target!==this.options.target&&Ts(this.options.target)!==Ts(t.target)&&$l(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:i})=>n?new Pg(r,i):new _g(r,i))(this.options),new jg(t)));var t}hasNameForId(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i}registerName(t,n){vr(t),t.startsWith(Wf)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(vr(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(vr(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Zf=new WeakSet,Tg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Rg(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Tg||e.startsWith("--")?String(t).trim():t+"px"}const nn=47;function tc(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const Jf=Symbol.for("sc-keyframes");function Lg(e){return typeof e=="object"&&e!==null&&Jf in e}function qf(e){return er(e)&&!(e.prototype&&e.prototype.isReactComponent)}const ep=e=>e==null||e===!1||e==="",Og=Symbol.for("react.client.reference");function nc(e){return e.$$typeof===Og}function tp(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!ep(r)&&(Array.isArray(r)&&Zf.has(r)||er(r)?t.push(tc(n)+":",r,";"):Xr(r)?(t.push(n+" {"),tp(r,t),t.push("}")):t.push(tc(n)+": "+Rg(n,r)+";"))}}function Ht(e,t,n,r,i=[]){if(ep(e))return i;const o=typeof e;if(o==="string")return i.push(e),i;if(o==="function"){if(nc(e))return i;if(qf(e)&&t){const l=e(t);return Ht(l,t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let l=0;l<e.length;l++)Ht(e[l],t,n,r,i);return i}return Oa(e)?(i.push(`.${e.styledComponentId}`),i):Lg(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):nc(e)?i:Xr(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(tp(e,i),i):(i.push(e.toString()),i)}const Mg=Gf(Go);class Ig{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=un(Mg,n),this.baseStyle=r,ri.registerId(n)}generateAndInjectStyles(t,n,r){let i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let o="";for(let l=0;l<this.rules.length;l++){const a=this.rules[l];if(typeof a=="string")o+=a;else if(a)if(qf(a)){const u=a(t);typeof u=="string"?o+=u:u!=null&&u!==!1&&(o+=$o(Ht(u,t,n,r)))}else o+=$o(Ht(a,t,n,r))}if(o){this.dynamicNameCache||(this.dynamicNameCache=new Map);const l=r.hash?r.hash+o:o;let a=this.dynamicNameCache.get(l);if(!a){if(a=Ra(un(un(this.baseHash,r.hash),o)>>>0),this.dynamicNameCache.size>=200){const u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(l,a)}if(!n.hasNameForId(this.componentId,a)){const u=r(o,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,u)}i=wr(i,a)}}return i}}const Dg=/&/g;function np(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Cl(e){const t=e.length;let n="",r=0,i=0,o=0,l=!1,a=!1;for(let u=0;u<t;u++){const d=e.charCodeAt(u);if(o!==0||l||d!==nn||e.charCodeAt(u+1)!==42)if(l)d===42&&e.charCodeAt(u+1)===nn&&(l=!1,u++);else if(d!==34&&d!==39||np(e,u)){if(o===0)if(d===123)i++;else if(d===125){if(i--,i<0){a=!0;let h=u+1;for(;h<t;){const p=e.charCodeAt(h);if(p===59||p===10)break;h++}h<t&&e.charCodeAt(h)===59&&h++,i=0,u=h-1,r=h;continue}i===0&&(n+=e.substring(r,u+1),r=u+1)}else d===59&&i===0&&(n+=e.substring(r,u+1),r=u+1)}else o===0?o=d:o===d&&(o=0);else l=!0,u++}return a||i!==0||o!==0?(r<t&&i===0&&o===0&&(n+=e.substring(r)),n):e}function rp(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const o=e[i];if(o.type==="rule"){o.value=(n+o.value).replaceAll(",",r);const l=o.props,a=[];for(let u=0;u<l.length;u++)a[u]=n+l[u];o.props=a}Array.isArray(o.children)&&o.type!=="@keyframes"&&rp(o.children,t)}return e}function Fg({options:e=Yn,plugins:t=Ta}=Yn){let n,r,i;const o=(g,y,v)=>v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?`.${n}`:g,l=t.slice();l.push(g=>{g.type===Uo&&g.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(Dg,r).replace(i,o))}),e.prefix&&l.push(tg),l.push(Jm);let a=[];const u=qm(l.concat(eg(g=>a.push(g)))),d=(g,y="",v="",w="&")=>{n=w,r=y,i=void 0;const P=function(c){const m=c.indexOf("//")!==-1,k=c.indexOf("}")!==-1;if(!m&&!k)return c;if(!m)return Cl(c);const S=c.length;let E="",j=0,C=0,D=0,N=0,O=0,we=!1;for(;C<S;){const K=c.charCodeAt(C);if(K!==34&&K!==39||np(c,C))if(D===0)if(K===nn&&C+1<S&&c.charCodeAt(C+1)===42){for(C+=2;C+1<S&&(c.charCodeAt(C)!==42||c.charCodeAt(C+1)!==nn);)C++;C+=2}else if(K!==40)if(K!==41)if(N>0)C++;else if(K===42&&C+1<S&&c.charCodeAt(C+1)===nn)E+=c.substring(j,C),C+=2,j=C,we=!0;else if(K===nn&&C+1<S&&c.charCodeAt(C+1)===nn){for(E+=c.substring(j,C);C<S&&c.charCodeAt(C)!==10;)C++;j=C,we=!0}else K===123?O++:K===125&&O--,C++;else N>0&&N--,C++;else N++,C++;else C++;else D===0?D=K:D===K&&(D=0),C++}return we?(j<S&&(E+=c.substring(j)),O===0?E:Cl(E)):O===0?c:Cl(c)}(g);let f=Xm(v||y?v+" "+y+" { "+P+" }":P);return e.namespace&&(f=rp(f,e.namespace)),a=[],jo(f,u),a},h=e;let p=Ps;for(let g=0;g<t.length;g++)t[g].name||gn(15),p=un(p,t[g].name);return h!=null&&h.namespace&&(p=un(p,h.namespace)),h!=null&&h.prefix&&(p=un(p,"p")),d.hash=p!==Ps?p.toString():"",d}const Ag=new ri,Rs=Fg(),ip=pe.createContext({shouldForwardProp:void 0,styleSheet:Ag,stylis:Rs,stylisPlugins:void 0});ip.Consumer;function op(){return pe.useContext(ip)}const Zr=pe.createContext(void 0);Zr.Consumer;function bg(e){const t=pe.useContext(Zr),n=pe.useMemo(()=>function(r,i){if(!r)throw gn(14);if(er(r))return r(i);if(Array.isArray(r)||typeof r!="object")throw gn(8);return i?Object.assign(Object.assign({},i),r):r}(e.theme,t),[e.theme,t]);return e.children?pe.createElement(Zr.Provider,{value:n},e.children):null}const rc=Object.prototype.hasOwnProperty,El={};function Bg(e,t){const n=typeof e!="string"?"sc":Vf(e);El[n]=(El[n]||0)+1;const r=n+"-"+La(Go+n+El[n]);return t?t+"-"+r:r}function Ug(e,t,n){const r=Oa(e),i=e,o=!_s(e),{attrs:l=Ta,componentId:a=Bg(t.displayName,t.parentComponentId),displayName:u=cg(e)}=t,d=t.displayName&&t.componentId?Vf(t.displayName)+"-"+t.componentId:t.componentId||a,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l;let{shouldForwardProp:p}=t;if(r&&i.shouldForwardProp){const w=i.shouldForwardProp;if(t.shouldForwardProp){const P=t.shouldForwardProp;p=(f,c)=>w(f,c)&&P(f,c)}else p=w}const g=new Ig(n,d,r?i.componentStyle:void 0);function y(w,P){return function(f,c,m){const{attrs:k,componentStyle:S,defaultProps:E,foldedComponentIds:j,styledComponentId:C,target:D}=f,N=pe.useContext(Zr),O=op(),we=f.shouldForwardProp||O.shouldForwardProp,K=Hf(c,N,E)||Yn;let Ne,ut;{const T=pe.useRef(null),R=T.current;if(R!==null&&R[1]===K&&R[2]===O.styleSheet&&R[3]===O.stylis&&R[7]===S&&function(W,b,le){const q=W,ne=b;let Te=0;for(const Fe in ne)if(rc.call(ne,Fe)&&(Te++,q[Fe]!==ne[Fe]))return!1;return Te===le}(R[0],c,R[4]))Ne=R[5],ut=R[6];else{Ne=function(b,le,q){const ne=Object.assign(Object.assign({},le),{className:void 0,theme:q}),Te=b.length>1;for(let Fe=0;Fe<b.length;Fe++){const Ko=b[Fe],ii=er(Ko)?Ko(Te?Object.assign({},ne):ne):Ko;for(const jt in ii)jt==="className"?ne.className=wr(ne.className,ii[jt]):jt==="style"?ne.style=Object.assign(Object.assign({},ne.style),ii[jt]):jt in le&&le[jt]===void 0||(ne[jt]=ii[jt])}return"className"in le&&typeof le.className=="string"&&(ne.className=wr(ne.className,le.className)),ne}(k,c,K),ut=function(b,le,q,ne){return b.generateAndInjectStyles(le,q,ne)}(S,Ne,O.styleSheet,O.stylis);let W=0;for(const b in c)rc.call(c,b)&&W++;T.current=[c,K,O.styleSheet,O.stylis,W,Ne,ut,S]}}const nt=Ne.as||D,M=function(T,R,W,b){const le={};for(const q in T)T[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&T.theme===W||(q==="forwardedAs"?le.as=T.forwardedAs:b&&!b(q,R)||(le[q]=T[q]));return le}(Ne,nt,K,we);let z=wr(j,C);return ut&&(z+=" "+ut),Ne.className&&(z+=" "+Ne.className),M[_s(nt)&&nt.includes("-")?"class":"className"]=z,m&&(M.ref=m),F.createElement(nt,M)}(v,w,P)}y.displayName=u;let v=pe.forwardRef(y);return v.attrs=h,v.componentStyle=g,v.displayName=u,v.shouldForwardProp=p,v.foldedComponentIds=r?wr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get(){return this._foldedDefaultProps},set(w){this._foldedDefaultProps=r?function(P,...f){for(const c of f)Ns(P,c,!0);return P}({},i.defaultProps,w):w}}),Ma(v,()=>`.${v.styledComponentId}`),o&&Yf(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}var Wg=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function ic(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const oc=e=>(Zf.add(e),e);function Ia(e,...t){if(er(e)||Xr(e))return oc(Ht(ic(Ta,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Ht(n):oc(Ht(ic(n,t)))}function Ls(e,t,n=Yn){if(!t)throw gn(1,t);const r=(i,...o)=>e(t,n,Ia(i,...o));return r.attrs=i=>Ls(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)})),r.withConfig=i=>Ls(e,t,Object.assign(Object.assign({},n),i)),r}const lp=e=>Ls(Ug,e),x=lp;Wg.forEach(e=>{x[e]=lp(e)});class Hg{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let i=0;i<r.length;i+=1){const o=r[i];if(er(o)&&!Oa(o))return!1}return!0}(t),ri.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,i){const o=this.componentId;if(this.isStatic){if(r.hasNameForId(o,o+t))this.instanceRules.has(t)||this.computeRules(t,n,r,i);else{const a=this.computeRules(t,n,r,i);r.insertRules(o,a.name,a.rules)}return}const l=this.instanceRules.get(t);if(this.computeRules(t,n,r,i),!r.server&&l){const a=l.rules,u=this.instanceRules.get(t).rules;if(a.length===u.length){let d=!0;for(let h=0;h<a.length;h++)if(a[h]!==u[h]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,n,r,i){const o=$o(Ht(this.rules,n,r,i)),l={name:this.componentId+t,rules:i(o,"")};return this.instanceRules.set(t,l),l}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function Vg(e,...t){const n=Ia(e,...t),r=`sc-global-${La(JSON.stringify(n))}`,i=new Hg(n,r),o=a=>{const u=op(),d=pe.useContext(Zr);let h;{const p=pe.useRef(null);p.current===null&&(p.current=u.styleSheet.allocateGSInstance(r)),h=p.current}u.styleSheet.server&&l(h,a,u.styleSheet,d,u.stylis);{const p=i.isStatic?[h,u.styleSheet,i]:[h,a,u.styleSheet,d,u.stylis,i],g=pe.useRef(i);pe.useLayoutEffect(()=>{u.styleSheet.server||(g.current!==i&&(u.styleSheet.clearRules(r),g.current=i),l(h,a,u.styleSheet,d,u.stylis))},p),pe.useLayoutEffect(()=>()=>{u.styleSheet.server||i.removeStyles(h,u.styleSheet)},[h,u.styleSheet,i])}return u.styleSheet.server&&i.instanceRules.delete(h),null};function l(a,u,d,h,p){if(i.isStatic)i.renderStyles(a,rg,d,p);else{const g=Object.assign(Object.assign({},u),{theme:Hf(u,h,o.defaultProps)});i.renderStyles(a,g,d,p)}}return pe.memo(o)}var sp;class Gg{constructor(t,n){this[sp]=!0,this.inject=(r,i=Rs)=>{const o=this.getName(i);if(!r.hasNameForId(this.id,o)){const l=i(this.rules,o,"@keyframes");r.insertRules(this.id,o,l)}},this.name=t,this.id=Wf+t,this.rules=n,vr(this.id),Ma(this,()=>{throw gn(12,String(this.name))})}getName(t=Rs){return t.hash?this.name+Ra(+t.hash>>>0):this.name}}function Qo(e,...t){const n=$o(Ia(e,...t)),r=La(n);return new Gg(r,n)}sp=Jf;const Qg={colors:{good:"#16A97A",moderate:"#D4920A",unhealthy:"#E06A10",hazardous:"#C72828"},bg:{primary:"#E8F4FD",secondary:"#F0F8FF",card:"rgba(255, 255, 255, 0.92)",cardHover:"rgba(255, 255, 255, 1)"},text:{primary:"#0D2D4A",secondary:"#2E6088",muted:"#6A9BB8"},accent:"#1E90D6",accentGlow:"rgba(30, 144, 214, 0.22)",spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},radius:{sm:"8px",md:"16px",lg:"24px",full:"9999px"},shadow:{card:"0 4px 24px rgba(30,100,180,0.12)",glow:"0 0 24px rgba(30, 144, 214, 0.22)"},transition:{fast:"0.15s ease",normal:"0.3s ease",slow:"0.5s ease"}},Kg=Vg`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  /* Reset & Base */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Pretendard', 'Noto Sans KR', -apple-system, sans-serif;
    background: ${({theme:e})=>e.bg.primary};
    color: ${({theme:e})=>e.text.primary};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    background: linear-gradient(160deg, #C8E8FA 0%, #E8F4FD 50%, #D6EEFB 100%);
  }

  /* Animations */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.5; }
  }

  @keyframes breathe {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.04); }
  }

  @keyframes countUp {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  /* Custom Range Slider Webkit styles */
  input[type="range"] {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    border-radius: ${({theme:e})=>e.radius.full};
    background: rgba(30,144,214,0.12);
    outline: none;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({theme:e})=>e.accent}, #0A6EBD);
    box-shadow: 0 0 8px ${({theme:e})=>e.accentGlow};
    cursor: pointer;
    transition: transform ${({theme:e})=>e.transition.fast};
  }

  input[type="range"]::-webkit-slider-thumb:active {
    transform: scale(1.2);
  }
`;function cr(e,t){const n="airletter_"+e,[r,i]=F.useState(()=>{try{const l=window.localStorage.getItem(n);return l?JSON.parse(l):t}catch(l){return console.warn(`Error reading localStorage key "${n}":`,l),t}});return[r,l=>{try{i(l),window.localStorage.setItem(n,JSON.stringify(l))}catch(a){console.warn(`Error setting localStorage key "${n}":`,a)}}]}const ap={서울:"서울",부산:"부산",대구:"대구",인천:"인천",광주:"광주",대전:"대전",울산:"울산",세종:"세종",경기:"경기",강원:"강원",충북:"충북",충남:"충남",전북:"전북",전남:"전남",경북:"경북",경남:"경남",제주:"제주"},Yg={good:[{icon:"🌿",title:"야외활동 자유롭게",desc:"대기 상태가 좋습니다. 야외활동을 즐기세요."},{icon:"🪟",title:"환기 권장",desc:"창문을 열어 실내 공기를 교환해 주세요."},{icon:"🚶",title:"운동하기 좋은 날",desc:"조깅, 자전거 등 야외 운동을 즐길 수 있습니다."},{icon:"😊",title:"마스크 착용 불필요",desc:"일반 건강인은 마스크 없이 활동해도 무방합니다."}],moderate:[{icon:"😐",title:"민감군은 주의 필요",desc:"호흡기 질환자, 노약자, 어린이는 장시간 야외활동을 자제하세요."},{icon:"💧",title:"수분 충분히 섭취",desc:"물을 자주 마셔 기도 점막을 촉촉하게 유지하세요."},{icon:"🏠",title:"격렬한 운동 자제",desc:"심한 야외 운동보다는 실내 활동을 권장합니다."},{icon:"😷",title:"민감군은 마스크 착용",desc:"호흡기 민감군은 KF80 이상 마스크 착용을 권장합니다."}],unhealthy:[{icon:"😷",title:"마스크 착용 필수",desc:"외출 시 KF94 마스크를 꼭 착용하세요."},{icon:"🏠",title:"야외활동 자제",desc:"외출을 최소화하고 실내에 머무르세요."},{icon:"🚗",title:"창문 닫기",desc:"실내 환기를 줄이고 공기청정기를 가동하세요."},{icon:"🧼",title:"귀가 후 세안·샤워",desc:"외출 후 손, 얼굴, 머리카락을 꼭 씻으세요."},{icon:"👶",title:"어린이·노약자 외출 금지",desc:"민감 계층은 야외 활동을 삼가세요."}],hazardous:[{icon:"🚨",title:"외출 절대 자제",desc:"가능한 한 외출하지 마세요."},{icon:"😷",title:"KF99 마스크 착용",desc:"외출 시 KF99 등급의 마스크를 착용하세요."},{icon:"🏥",title:"의료기관 방문 권장",desc:"호흡기 증상이 있다면 즉시 의사와 상담하세요."},{icon:"🪟",title:"모든 창문 밀폐",desc:"공기청정기를 최고 강도로 운전하세요."},{icon:"📞",title:"이상 증상 시 즉시 신고",desc:"119 또는 가까운 의료기관에 연락하세요."}]};function Xg(e,t){const n=["good","moderate","unhealthy","hazardous"],r=e<=30?"good":e<=80?"moderate":e<=150?"unhealthy":"hazardous",i=t<=15?"good":t<=35?"moderate":t<=75?"unhealthy":"hazardous",o=n.indexOf(r),l=n.indexOf(i);return n[Math.max(o,l)]}function Da(e){return{good:"좋음",moderate:"보통",unhealthy:"나쁨",hazardous:"매우나쁨"}[e]||"--"}function Xe(e){return{good:"#16A97A",moderate:"#D4920A",unhealthy:"#E06A10",hazardous:"#C72828"}[e]||"#999"}const Zg="804b950705a2d14cf60e184c682b473e6159d281fbd2d91a1bf38ba43bffc2b0",Jg="https://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo";async function qg(e){var r,i;const t=new Date().getFullYear(),n=`${Jg}?serviceKey=${Zg}&returnType=JSON&numOfRows=100&pageNo=1&year=${t}`;try{const l=await(await fetch(n)).json(),a=((i=(r=l==null?void 0:l.response)==null?void 0:r.body)==null?void 0:i.items)||[],u=new Date().toISOString().split("T")[0];return a.filter(d=>{const h=d.districtName===e,p=!d.clearDate||d.clearDate>=u;return h&&p}).map(d=>({districtName:d.districtName,issueGbn:d.issueGbn,issueVal:d.issueVal,itemCode:d.itemCode,clearDate:d.clearDate,issueDate:d.issueDate}))}catch(o){return console.warn("API 호출 실패, Mock 데이터 사용:",o),[]}}const e0=e=>{const n={서울:{pm10:48,pm25:24,level:"moderate"},경기:{pm10:92,pm25:46,level:"unhealthy"},인천:{pm10:85,pm25:42,level:"unhealthy"},강원:{pm10:18,pm25:9,level:"good"},충북:{pm10:52,pm25:26,level:"moderate"},충남:{pm10:61,pm25:31,level:"moderate"},대전:{pm10:25,pm25:12,level:"good"},경북:{pm10:28,pm25:14,level:"good"},경남:{pm10:22,pm25:11,level:"good"},대구:{pm10:58,pm25:29,level:"moderate"},울산:{pm10:50,pm25:25,level:"moderate"},부산:{pm10:24,pm25:12,level:"good"},광주:{pm10:27,pm25:13,level:"good"},전북:{pm10:65,pm25:33,level:"moderate"},전남:{pm10:19,pm25:9,level:"good"},제주:{pm10:15,pm25:7,level:"good"},세종:{pm10:45,pm25:22,level:"moderate"}}[e]||{pm10:55,pm25:25},i=new Date().getHours()%5-2,o=Math.max(5,n.pm10+i),l=Math.max(3,n.pm25+Math.round(i/2));let a="moderate";return o<=30?a="good":o<=80?a="moderate":o<=150?a="unhealthy":a="hazardous",{pm10:o,pm25:l,level:a}};function t0(e,t){let n=0,r=0,i=!1,o=!1;e.forEach(a=>{const u=parseInt(a.issueVal)||0;a.itemCode==="PM10"&&(n=Math.max(n,u)),a.itemCode==="PM25"&&(r=Math.max(r,u)),a.issueGbn==="경보"?i=!0:a.issueGbn==="주의보"&&(o=!0)});let l;if(n===0&&r===0){const a=e0(t);n=a.pm10,r=a.pm25,l=a.level}else i?l="hazardous":o?l="unhealthy":l=Xg(n,r);return{pm10:n,pm25:r,level:l,alarms:e}}function n0(e){const[t,n]=F.useState({pm10:0,pm25:0,level:"good",alarms:[],loading:!0}),r=F.useCallback(async()=>{n(a=>({...a,loading:!0}));const i=ap[e]||"서울",o=await qg(i),l=t0(o,e);n({...l,loading:!1})},[e]);return F.useEffect(()=>{r()},[r]),{airData:t,refresh:r}}const r0=x.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  padding-top: calc(${({theme:e})=>e.spacing.md} + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid rgba(30,144,214,0.12);
  background: ${({theme:e})=>e.bg.secondary};
`,i0=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,o0=x.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, ${({theme:e})=>e.accent}, #0A6EBD);
  border-radius: ${({theme:e})=>e.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: 0 0 12px ${({theme:e})=>e.accentGlow};
`,l0=x.span`
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${({theme:e})=>e.text.primary};

  span {
    color: ${({theme:e})=>e.accent};
  }
`,s0=x.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: ${({theme:e})=>e.text.secondary};
  background: rgba(30,144,214,0.1);
  border: 1px solid rgba(30,144,214,0.2);
  padding: 5px 10px;
  border-radius: ${({theme:e})=>e.radius.full};
  cursor: pointer;
  transition: background ${({theme:e})=>e.transition.fast};
  font-family: inherit;

  &:hover {
    background: rgba(30,144,214,0.18);
  }
`,a0=x.div`
  position: relative;
`,u0=x.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 9999;
  background: transparent;
`,c0=x.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: ${({theme:e})=>e.bg.secondary};
  border: 1px solid rgba(30,144,214,0.15);
  border-radius: ${({theme:e})=>e.radius.md};
  box-shadow: 0 8px 24px rgba(30,100,180,0.12);
  z-index: 10000;
  width: 130px;
  max-height: 260px;
  overflow-y: auto;
  padding: 4px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(30,144,214,0.2);
    border-radius: 2px;
  }
`,d0=x.button`
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: ${({$active:e})=>e?"rgba(30,144,214,0.08)":"transparent"};
  color: ${({$active:e,theme:t})=>e?t.accent:t.text.primary};
  font-weight: ${({$active:e})=>e?"700":"500"};
  font-size: 13px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  font-family: inherit;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(30,144,214,0.06);
    color: ${({theme:e})=>e.accent};
  }
`,kt=({showRegionButton:e=!1,region:t="",onRegionClick:n,onRegionChange:r,onAlarmClick:i,onSettingsClick:o})=>{const[l,a]=F.useState(!1),u=Object.keys(ap),d=h=>{a(!1),r?r(h):n&&n()};return s.jsxs(r0,{children:[s.jsxs(i0,{children:[s.jsx(o0,{children:"✈️"}),s.jsxs(l0,{children:["Air ",s.jsx("span",{children:"Letter"})]})]}),e&&s.jsxs(a0,{children:[s.jsxs(s0,{onClick:()=>a(h=>!h),children:[s.jsx("span",{children:"📍"}),s.jsx("span",{children:t}),s.jsx("span",{children:l?"▴":"▾"})]}),l&&s.jsxs(s.Fragment,{children:[s.jsx(u0,{onClick:()=>a(!1)}),s.jsx(c0,{children:u.map(h=>s.jsx(d0,{$active:h===t,onClick:()=>d(h),children:h},h))})]})]})]})},f0=Qo`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.65; }
`,p0=x.div`
  margin: 0 ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.radius.md};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  animation: ${f0} 2s infinite;

  ${({$type:e,theme:t})=>e==="hazardous"?`
    background: rgba(232, 64, 64, 0.15);
    border: 1px solid rgba(232, 64, 64, 0.4);
    color: ${t.colors.hazardous};
  `:`
    background: rgba(255, 140, 66, 0.15);
    border: 1px solid rgba(255, 140, 66, 0.4);
    color: ${t.colors.unhealthy};
  `}
`,h0=({type:e,text:t,visible:n})=>n?s.jsxs(p0,{$type:e,children:[s.jsx("span",{children:"🚨"}),s.jsx("span",{children:t})]}):null,re=x.div`
  background: ${({theme:e})=>e.bg.card};
  border: 1px solid rgba(30,144,214,0.12);
  border-radius: ${({theme:e})=>e.radius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  backdrop-filter: blur(12px);
  transition: transform ${({theme:e})=>e.transition.normal}, box-shadow ${({theme:e})=>e.transition.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadow.card};
  }
`,lt=x.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({$size:e})=>e==="sm"?"9px 16px":"14px 24px"};
  font-size: ${({$size:e})=>e==="sm"?"13px":"15px"};
  border-radius: ${({$size:e,theme:t})=>e==="sm"?t.radius.sm:t.radius.md};
  border: none;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transition.fast};
  text-decoration: none;
  width: 100%;
  outline: none;

  ${({$variant:e,theme:t})=>e==="ghost"?`
    background: rgba(30,144,214,0.08);
    color: ${t.text.secondary};
    border: 1px solid rgba(30,144,214,0.2);

    &:hover {
      background: rgba(30,144,214,0.15);
      color: ${t.text.primary};
    }
  `:`
    background: linear-gradient(135deg, ${t.accent}, #0A6EBD);
    color: #fff;
    box-shadow: 0 4px 16px ${t.accentGlow};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px ${t.accentGlow};
    }

    &:active {
      transform: translateY(0);
    }
  `}
`,m0=Qo`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
`,g0=x.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: 13px;
  font-weight: 700;

  ${({$level:e,theme:t})=>{switch(e){case"good":return`background: rgba(78,205,164,0.2); color: ${t.colors.good};`;case"moderate":return`background: rgba(245,200,66,0.2); color: ${t.colors.moderate};`;case"unhealthy":return`background: rgba(255,140,66,0.2); color: ${t.colors.unhealthy};`;case"hazardous":return`background: rgba(232,64,64,0.2); color: ${t.colors.hazardous};`}}}
`,x0=x.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: ${m0} 1.8s infinite;
  background-color: ${({$level:e,theme:t})=>t.colors[e]};
`,Yi=({level:e})=>s.jsxs(g0,{$level:e,children:[s.jsx(x0,{$level:e}),Da(e)]}),y0=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,v0=x.svg`
  transform: rotate(-90deg);
`,w0=x.circle`
  fill: none;
  stroke: rgba(30, 100, 180, 0.12);
  stroke-linecap: round;
`,k0=x.circle`
  fill: none;
  stroke-linecap: round;
  stroke: ${({$color:e})=>e};
  filter: drop-shadow(0 0 6px ${({$color:e})=>e}66);
  transition: stroke-dashoffset 0.1s ease, stroke 0.5s ease;
`,j0=x.text`
  text-anchor: middle;
  dominant-baseline: middle;
`,S0=x.tspan`
  font-size: 22px;
  font-weight: 800;
  fill: ${({theme:e})=>e.text.primary};
`,$0=x.text`
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 10px;
  fill: ${({theme:e})=>e.text.muted};
`,C0=x.div`
  font-size: 12px;
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 600;
`,Co=({value:e,max:t,level:n,name:r,unit:i})=>{const[o,l]=F.useState(0),a=Xe(n),u=44,d=2*Math.PI*u,h=Math.min(e/t,1),[p,g]=F.useState(d);return F.useEffect(()=>{let y=null,v;const w=P=>{y||(y=P);const f=Math.min((P-y)/1200,1),c=1-Math.pow(1-f,3);l(Math.round(e*c)),g(d-d*h*c),f<1&&(v=requestAnimationFrame(w))};return v=requestAnimationFrame(w),()=>{cancelAnimationFrame(v)}},[e,t,h,d]),s.jsxs(y0,{children:[s.jsxs(v0,{width:"110",height:"110",viewBox:"0 0 110 110",children:[s.jsx(w0,{cx:"55",cy:"55",r:u,strokeWidth:"8"}),s.jsx(k0,{$color:a,cx:"55",cy:"55",r:u,strokeWidth:"8",strokeDasharray:d,strokeDashoffset:p}),s.jsx(j0,{x:"55",y:"50",children:s.jsx(S0,{x:"55",dy:"0",children:o})}),s.jsx($0,{x:"55",y:"68",children:i})]}),s.jsx(C0,{children:r})]})},E0=Qo`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
`,z0=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({theme:e})=>e.spacing.md} 0;
  animation: ${E0} 3s infinite ease-in-out;
`,P0=x.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 6px 20px rgba(30, 100, 180, 0.12);
  background: white;
  border: 3px solid ${({theme:e})=>e.bg.primary};
`,_0=x.div`
  margin-top: ${({theme:e})=>e.spacing.sm};
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(30, 144, 214, 0.15);
  padding: 6px 14px;
  border-radius: ${({theme:e})=>e.radius.md};
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadow.card};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 6px 6px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.95) transparent;
    display: block;
    width: 0;
  }
`,N0=({level:e})=>{const t=n=>{switch(n){case"good":return"공기가 맑아 기분이 정말 좋아요! 🌿";case"moderate":return"보통 수준이에요. 야외 활동은 적당히! 😊";case"unhealthy":return"미세먼지가 나빠요! 꼭 마스크를 써주세요 😷";case"hazardous":return"바깥 공기가 위험해요! 오늘은 실내에만 있어요 🚨";default:return"대기질 정보를 확인하는 중이에요..."}};return s.jsxs(z0,{$level:e,children:[s.jsx(P0,{src:`/assets/bear_${e}.png`,alt:`Air Quality Bear - ${e}`}),s.jsx(_0,{children:t(e)})]})};function up(e,t){const n={good:1,moderate:2,unhealthy:3,hazardous:5}[t]||1;let r=0;if(e){const a=e.conditions||[];a.includes("respiratory")&&(r+=2),a.includes("allergy")&&(r+=1),a.includes("elderly")&&(r+=1),a.includes("child")&&(r+=1),a.includes("pregnant")&&(r+=1);const u=e.age||30;(u>=65||u<=12)&&(r+=1)}const i=Math.min(n+r,5);let o="안전",l="risk-safe";return i<=2?(o="✅ 안전",l="risk-safe"):i<=3?(o="⚠️ 주의",l="risk-caution"):i<=4?(o="🚨 위험",l="risk-danger"):(o="🔴 매우위험",l="risk-critical"),{score:i,label:o,cls:l}}const lc=e=>e<=30?"good":e<=80?"moderate":e<=150?"unhealthy":"hazardous",T0=x.div`
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,R0=x.div`
  font-size: 13px;
  color: ${({theme:e})=>e.text.muted};
`,L0=x.div`
  text-align: right;
  font-size: 11px;
  color: ${({theme:e})=>e.text.muted};

  span {
    color: ${({theme:e})=>e.accent};
    font-weight: 600;
  }
`,O0=x.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.lg};
  justify-content: center;
  margin: ${({theme:e})=>e.spacing.lg} 0;
`,M0=x.div`
  display: flex;
  justify-content: space-around;
  padding: ${({theme:e})=>e.spacing.md} 0;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: 0;
`,ji=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,Si=x.div`
  font-size: 24px;
  font-weight: 800;
  color: ${({$color:e})=>e};
`,$i=x.div`
  font-size: 11px;
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
`,I0=x(re)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`,D0=x.div`
  font-size: 15px;
  line-height: 1.7;
  color: ${({theme:e})=>e.text.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Xt=x.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,F0=x.div`
  font-size: 20px;
  font-weight: 800;
`,sc=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,A0=x.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.muted};
  text-align: right;
`,b0=x.div`
  display: flex;
  justify-content: space-around;
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px dashed rgba(30, 144, 214, 0.15);
`,zl=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Pl=x.span`
  font-size: 20px;
`,_l=x.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({theme:e})=>e.text.primary};
`,Nl=x.div`
  font-size: 11px;
  color: ${({theme:e})=>e.text.muted};
`,B0=x.span`
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(30, 144, 214, 0.1);
  color: ${({theme:e})=>e.accent};
  white-space: nowrap;
`,U0=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,W0=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${({$highlight:e})=>e&&"font-weight: 800;"}
`,H0=x.span`
  font-size: 12px;
  width: 56px;
  flex-shrink: 0;
  color: ${({theme:e})=>e.text.muted};
`,V0=x.div`
  flex: 1;
  height: 8px;
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(30, 144, 214, 0.08);
  overflow: hidden;
`,G0=x.div`
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.full};
  width: ${({$width:e})=>e}%;
  background: ${({$color:e})=>e};
  transition: width 0.5s ease;
`,Q0=x.span`
  font-size: 13px;
  font-weight: 700;
  width: 32px;
  text-align: right;
  color: ${({theme:e})=>e.text.primary};
`,K0=x.div`
  position: relative;
  width: 100%;
  height: 160px;
  border-radius: ${({theme:e})=>e.radius.md};
  background: linear-gradient(135deg, rgba(30, 144, 214, 0.06), rgba(30, 144, 214, 0.14));
  overflow: hidden;
`,Y0=x.div`
  position: absolute;
  top: ${({$top:e})=>e};
  left: ${({$left:e})=>e};
  transform: translate(-50%, -50%);
  font-size: 11px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$color:e})=>e};
  color: #fff;
  white-space: nowrap;
  ${({$active:e})=>e&&"box-shadow: 0 0 0 3px rgba(255,255,255,0.7); z-index: 2;"}
`,X0=x.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.md};
  font-size: 11px;
  color: ${({theme:e})=>e.text.muted};
`,Ci=x.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:e})=>e};
  margin-right: 4px;
`,Tl=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(30, 144, 214, 0.08);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .icon { font-size: 18px; }
  .text { font-size: 13px; font-weight: 600; color: ${({theme:e})=>e.text.primary}; }
`,Z0=x.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: ${({theme:e})=>e.spacing.md};
`,J0=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,q0=x.span`
  font-size: 10px;
  font-weight: 700;
  color: ${({theme:e})=>e.text.muted};
`,e1=x.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({$level:e})=>Xe(e)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 800;
  color: #ffffff;
  box-shadow: 0 2px 6px ${({$level:e})=>Xe(e)}40;
`,t1=x.div`
  display: flex;
  gap: 2px;
  justify-content: center;
  min-height: 8px;
`,n1=x.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({$color:e})=>e};
  display: block;
`,r1=x.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.md};
  font-size: 10px;
  color: ${({theme:e})=>e.text.muted};
`,ac=({region:e,airData:t,profile:n,records:r=[],onNavigate:i,onRegionChange:o})=>{const{pm10:l,pm25:a,level:u,alarms:d,loading:h}=t,p=["월","화","수","목","금","토","일"],g=["good","moderate","unhealthy","hazardous","moderate","good",u],y=[[],[],["기침"],["천명음","호흡곤란"],[],[],[]],v=r[r.length-1];v&&v.symptoms.length>0&&(y[6]=v.symptoms);const w=M=>M==="기침"?"#E5A93C":M==="천명음"?"#8B5CF6":M==="호흡곤란"||M==="가슴답답함"?"#EF4444":"#3B82F6",P=new Date,f=P.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric",weekday:"short"}),c=P.toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"})+" 기준",m=P.toISOString().split("T")[0],k=d.filter(M=>!M.clearDate||M.clearDate>=m),S=!h&&k.length>0,E=k.some(M=>M.issueGbn==="경보")?"경보":"주의보",j=`${e} 미세먼지 ${E} 발령 중 — 에어코리아 실시간 데이터`,C={good:"오늘 대기 상태가 좋습니다. 야외활동을 즐기고 창문을 열어 환기해 주세요. 😊",moderate:"보통 수준입니다. 민감군(어린이, 노약자)은 장시간 야외활동을 자제하세요.",unhealthy:"미세먼지 주의보 발령 지역입니다. KF94 마스크 착용 후 외출하세요. 😷",hazardous:"미세먼지 경보 발령! 외출을 절대 자제하고 창문을 밀폐하세요. 🚨"},D=n?up(n,u):{label:"프로필을 등록해 주세요 →"},O={good:{temp:"21.5°C",humidity:"48%",wind:"2.6 m/s",summary:"맑고 쾌적한 하늘, 환기하기 좋아요"},moderate:{temp:"22.0°C",humidity:"56%",wind:"1.8 m/s",summary:"구름 조금, 무난한 대기질이 이어져요"},unhealthy:{temp:"19.8°C",humidity:"68%",wind:"1.2 m/s",summary:"대기 정체로 답답해요, 외출 자제"},hazardous:{temp:"18.5°C",humidity:"74%",wind:"0.8 m/s",summary:"대기 정체 심각, 실내에 머무세요"}}[u],we=[{time:"오전 9시",val:Math.max(0,Math.round(a*.6)),highlight:!1},{time:"오후 3시",val:a,highlight:!0},{time:"오후 6시",val:Math.round(a*1.4),highlight:!1},{time:"자정 12시",val:Math.max(0,Math.round(a*.5)),highlight:!1}],K=Math.max(...we.map(M=>M.val),40),Ne=[...we].sort((M,z)=>M.val-z.val)[0],ut=e.length>4?e.slice(-2):e||"현재위치",nt=[{name:"북부",val:Math.max(0,Math.round(l*.5)),top:"20%",left:"26%",active:!1},{name:"동부",val:Math.round(l*1.25),top:"48%",left:"64%",active:!1},{name:ut,val:l,top:"72%",left:"40%",active:!0},{name:"동대문",val:Math.round(l*.75),top:"14%",left:"78%",active:!1}];return s.jsxs("div",{children:[s.jsx(kt,{showRegionButton:!0,region:e,onRegionChange:o}),s.jsx(h0,{type:E==="경보"?"hazardous":"unhealthy",text:j,visible:S}),s.jsxs(T0,{children:[s.jsxs("div",{children:[s.jsx(R0,{children:f}),!h&&s.jsx(Yi,{level:u})]}),s.jsxs(L0,{children:[s.jsx("div",{children:"마지막 업데이트"}),s.jsx("div",{children:s.jsx("span",{children:c})})]})]}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(Xt,{children:"실시간 대기질"}),s.jsxs(O0,{children:[s.jsx(Co,{value:l,max:200,level:u,name:"미세먼지 PM10",unit:"㎍/m³"}),s.jsx(Co,{value:a,max:100,level:u,name:"초미세먼지 PM2.5",unit:"㎍/m³"})]}),!h&&s.jsx(N0,{level:u}),s.jsxs(M0,{children:[s.jsxs(ji,{children:[s.jsx(Si,{$color:"#16A97A",children:"좋음"}),s.jsxs($i,{children:["PM10 ≤30",s.jsx("br",{}),"PM2.5 ≤15"]})]}),s.jsxs(ji,{children:[s.jsx(Si,{$color:"#D4920A",children:"보통"}),s.jsxs($i,{children:["PM10 ≤80",s.jsx("br",{}),"PM2.5 ≤35"]})]}),s.jsxs(ji,{children:[s.jsx(Si,{$color:"#E06A10",children:"나쁨"}),s.jsxs($i,{children:["PM10 ≤150",s.jsx("br",{}),"PM2.5 ≤75"]})]}),s.jsxs(ji,{children:[s.jsx(Si,{$color:"#C72828",children:"매우나쁨"}),s.jsxs($i,{children:["PM10 >150",s.jsx("br",{}),"PM2.5 >75"]})]})]})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(Xt,{children:"오늘의 건강 가이드"}),s.jsx(D0,{children:C[u]}),s.jsx(lt,{onClick:()=>i("guide"),children:"📖 자세한 가이드 보기"})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsxs(sc,{children:[s.jsx(Xt,{style:{marginBottom:0},children:"오늘의 날씨 연계 정보"}),s.jsx(A0,{children:O.summary})]}),s.jsxs(b0,{children:[s.jsxs(zl,{children:[s.jsx(Pl,{children:"🌡️"}),s.jsxs("div",{children:[s.jsx(_l,{children:O.temp}),s.jsx(Nl,{children:"현재 기온"})]})]}),s.jsxs(zl,{children:[s.jsx(Pl,{children:"💧"}),s.jsxs("div",{children:[s.jsx(_l,{children:O.humidity}),s.jsx(Nl,{children:"현재 습도"})]})]}),s.jsxs(zl,{children:[s.jsx(Pl,{children:"💨"}),s.jsxs("div",{children:[s.jsx(_l,{children:O.wind}),s.jsx(Nl,{children:"현재 풍속"})]})]})]})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsxs(sc,{children:[s.jsx(Xt,{style:{marginBottom:0},children:"시간대별 예측 (PM2.5 흐름)"}),s.jsxs(B0,{children:[Ne.time," 외출 추천!"]})]}),s.jsx(U0,{children:we.map((M,z)=>{const T=lc(Math.round(M.val*1.8));return s.jsxs(W0,{$highlight:M.highlight,children:[s.jsx(H0,{children:M.time}),s.jsx(V0,{children:s.jsx(G0,{$width:Math.min(100,M.val/K*100),$color:Xe(T)})}),s.jsx(Q0,{children:M.val})]},z)})})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(Xt,{children:"주변 측정소 현황 (지역 지도 뷰)"}),s.jsx(K0,{children:nt.map((M,z)=>{const T=lc(M.val);return s.jsxs(Y0,{$top:M.top,$left:M.left,$color:Xe(T),$active:M.active,children:[M.name," (",M.val,")"]},z)})}),s.jsxs(X0,{children:[s.jsxs("span",{children:[s.jsx(Ci,{$color:Xe("good")}),"좋음"]}),s.jsxs("span",{children:[s.jsx(Ci,{$color:Xe("moderate")}),"보통"]}),s.jsxs("span",{children:[s.jsx(Ci,{$color:Xe("unhealthy")}),"나쁨"]}),s.jsxs("span",{children:[s.jsx(Ci,{$color:Xe("hazardous")}),"매우나쁨"]})]})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(Xt,{children:"🫁 호흡기 질환자 행동 지침"}),s.jsxs(Tl,{children:[s.jsx("span",{className:"icon",children:"💨"}),s.jsx("span",{className:"text",children:"외출 시 흡입기 반드시 휴대하세요"})]}),s.jsxs(Tl,{children:[s.jsx("span",{className:"icon",children:"👴"}),s.jsx("span",{className:"text",children:"무리한 활동·계단 오르기 자제하세요"})]}),s.jsxs(Tl,{children:[s.jsx("span",{className:"icon",children:"🚪"}),s.jsx("span",{className:"text",children:"실내 환기 금지, 공기청정기 가동하세요"})]})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(Xt,{children:"주간 대기질 및 증상 추이"}),s.jsx(Z0,{children:p.map((M,z)=>s.jsxs(J0,{children:[s.jsx(q0,{children:M}),s.jsx(e1,{$level:g[z],children:M}),s.jsx(t1,{children:y[z].map((T,R)=>s.jsx(n1,{$color:w(T),title:T},R))})]},z))}),s.jsxs(r1,{children:[s.jsxs("span",{children:[s.jsx("span",{style:{color:"#E5A93C"},children:"●"})," 기침"]}),s.jsxs("span",{children:[s.jsx("span",{style:{color:"#8B5CF6"},children:"●"})," 천명"]}),s.jsxs("span",{children:[s.jsx("span",{style:{color:"#EF4444"},children:"●"})," 호흡곤란"]})]})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(I0,{onClick:()=>i("risk"),children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-muted)",marginBottom:"4px"},children:"나의 건강 위험도"}),s.jsx(F0,{style:{color:Xe(u)},children:D.label})]}),s.jsx(lt,{$variant:"ghost",$size:"sm",style:{width:"auto"},children:"분석 보기 →"})]})})]})},i1=e=>e<=30?"good":e<=80?"moderate":e<=150?"unhealthy":"hazardous",o1=x.div`
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,l1=x.div`
  font-size: 13px;
  color: ${({theme:e})=>e.text.muted};
`,s1=x.div`
  text-align: right;
  font-size: 11px;
  color: ${({theme:e})=>e.text.muted};

  span {
    color: ${({theme:e})=>e.accent};
    font-weight: 600;
  }
`,a1=x.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.lg};
  justify-content: center;
  margin: ${({theme:e})=>e.spacing.lg} 0;
`,u1=x.div`
  display: flex;
  justify-content: space-around;
  padding: ${({theme:e})=>e.spacing.md} 0;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: 0;
`,Ei=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,zi=x.div`
  font-size: 24px;
  font-weight: 800;
  color: ${({$color:e})=>e};
`,Pi=x.div`
  font-size: 11px;
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
`,uc=x.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,c1=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,d1=x(re)`
  border: 1px solid rgba(232, 64, 64, 0.15);
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 4px 20px rgba(232, 64, 64, 0.05);
  margin-bottom: 16px;
  padding: 14px 16px;
`,f1=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  
  .title {
    font-size: 14px;
    font-weight: 800;
    color: #E84040;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`,p1=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(232, 64, 64, 0.04);
  padding: 10px 14px;
  border-radius: 8px;
  
  .region-name {
    font-size: 15px;
    font-weight: 800;
    color: var(--text-primary);
  }
  .dust-val {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-secondary);
  }
`,h1=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 380px;
  overflow-y: auto;
  padding-right: 4px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(30, 144, 214, 0.2);
    border-radius: 4px;
  }
`,m1=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 8px;
  background: ${({$active:e})=>e?"rgba(30, 144, 214, 0.08)":"rgba(255, 255, 255, 0.65)"};
  border: 1px solid ${({$active:e})=>e?"rgba(30, 144, 214, 0.25)":"rgba(255, 255, 255, 0.4)"};
  font-size: 13px;
  transition: all 0.2s ease;
  
  .name {
    font-weight: 700;
    width: 60px;
  }
  .values {
    display: flex;
    gap: 12px;
    color: var(--text-secondary);
    font-size: 12px;
    span {
      font-weight: 600;
      color: var(--text-primary);
    }
  }
`,g1=["서울","경기","인천","강원","충북","충남","대전","세종","전북","전남","광주","경북","경남","대구","울산","부산","제주"],x1=({region:e,airData:t,profile:n,onNavigate:r,onRegionChange:i})=>{const{pm10:o,pm25:l,level:a,loading:u}=t,d=new Date,h=d.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric",weekday:"short"}),p=d.toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"})+" 기준",g=P=>{const f=P.charCodeAt(0)+(P.charCodeAt(1)||0),c=.5+f%8*.15,m=.4+(f+3)%8*.18,k=Math.max(10,Math.round(o*c)),S=Math.max(5,Math.round(l*m)),E=i1(k);return{name:P,pm10:k,pm25:S,level:E}},y=g1.map(P=>g(P)),v=(n==null?void 0:n.parentsRegion)||"",w=v?g(v):null;return s.jsxs("div",{children:[s.jsx(kt,{showRegionButton:!0,region:e,onRegionChange:i}),s.jsxs(o1,{children:[s.jsxs("div",{children:[s.jsx(l1,{children:h}),!u&&s.jsx(Yi,{level:a})]}),s.jsxs(s1,{children:[s.jsx("div",{children:"마지막 업데이트"}),s.jsx("div",{children:s.jsx("span",{children:p})})]})]}),s.jsx("div",{style:{padding:"0 24px"},children:w?s.jsxs(d1,{children:[s.jsxs(f1,{children:[s.jsx("div",{className:"title",children:"🏡 부모님 댁 실시간 안심 케어"}),s.jsx(Yi,{level:w.level})]}),s.jsxs(p1,{children:[s.jsxs("span",{className:"region-name",children:[w.name," 지역"]}),s.jsxs("span",{className:"dust-val",children:["미세먼지: ",s.jsx("strong",{children:w.pm10})," | 초미세먼지: ",s.jsx("strong",{children:w.pm25})," ㎍/m³"]})]})]}):s.jsxs(re,{style:{marginBottom:"16px",padding:"12px 16px",fontSize:"13px"},children:[s.jsx("div",{style:{fontWeight:700,color:"var(--text-secondary)",marginBottom:"4px"},children:"🏡 가족 원격 모니터링 등록"}),s.jsx("div",{style:{color:"var(--text-muted)",marginBottom:"8px"},children:"프로필 설정에서 부모님 댁 지역을 선택해 보세요. 가족의 대기질 상태를 상단에 고정하여 원격 케어할 수 있습니다."}),s.jsx(lt,{size:"small",onClick:()=>r("profile"),children:"부모님 댁 설정하기"})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(uc,{children:"내 지역 대기질 수치"}),s.jsxs(a1,{children:[s.jsx(Co,{value:o,max:200,level:a,name:"미세먼지 PM10",unit:"㎍/m³"}),s.jsx(Co,{value:l,max:100,level:a,name:"초미세먼지 PM2.5",unit:"㎍/m³"})]}),s.jsxs(u1,{children:[s.jsxs(Ei,{children:[s.jsx(zi,{$color:"#16A97A",children:"좋음"}),s.jsxs(Pi,{children:["PM10 ≤30",s.jsx("br",{}),"PM2.5 ≤15"]})]}),s.jsxs(Ei,{children:[s.jsx(zi,{$color:"#D4920A",children:"보통"}),s.jsxs(Pi,{children:["PM10 ≤80",s.jsx("br",{}),"PM2.5 ≤35"]})]}),s.jsxs(Ei,{children:[s.jsx(zi,{$color:"#E06A10",children:"나쁨"}),s.jsxs(Pi,{children:["PM10 ≤150",s.jsx("br",{}),"PM2.5 ≤75"]})]}),s.jsxs(Ei,{children:[s.jsx(zi,{$color:"#C72828",children:"매우나쁨"}),s.jsxs(Pi,{children:["PM10 >150",s.jsx("br",{}),"PM2.5 >75"]})]})]})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"40px"},children:s.jsxs(re,{children:[s.jsx(c1,{children:s.jsx(uc,{style:{marginBottom:0},children:"📍 전국 시/도 대기질 현황"})}),s.jsx(h1,{children:y.map((P,f)=>s.jsxs(m1,{$active:e===P.name,onClick:()=>i(P.name),children:[s.jsx("span",{className:"name",children:P.name}),s.jsxs("span",{className:"values",children:["PM10 ",s.jsx("span",{children:P.pm10})," | PM2.5 ",s.jsx("span",{children:P.pm25})]}),s.jsx(Yi,{level:P.level})]},f))})]})})]})},y1=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
`,v1=x.input`
  display: none;
`,w1=x.label`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$checked:e,theme:t})=>e?t.accentGlow:"rgba(30,144,214,0.07)"};
  border: 1px solid ${({$checked:e,theme:t})=>e?t.accent:"rgba(30,144,214,0.18)"};
  font-size: 13px;
  font-weight: 500;
  color: ${({$checked:e,theme:t})=>e?t.accent:t.text.secondary};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transition.fast};
  user-select: none;

  &:hover {
    border-color: rgba(30, 144, 214, 0.45);
  }
`,Xi=({options:e,selectedValues:t,onChange:n})=>{const r=i=>{t.includes(i)?n(t.filter(o=>o!==i)):n([...t,i])};return s.jsx(y1,{children:e.map(i=>{const o=t.includes(i.value);return s.jsxs(pe.Fragment,{children:[s.jsx(v1,{type:"checkbox",id:`chip-${i.value}`,checked:o,onChange:()=>r(i.value)}),s.jsx(w1,{htmlFor:`chip-${i.value}`,$checked:o,children:i.label})]},i.value)})})},k1=x.div`
  padding: ${({theme:e})=>e.spacing.lg};
`,j1=x.div`
  padding: 0 0 ${({theme:e})=>e.spacing.lg};

  h2 {
    font-size: 22px;
    font-weight: 800;
    color: ${({theme:e})=>e.text.primary};
  }

  p {
    font-size: 14px;
    color: ${({theme:e})=>e.text.muted};
    margin-top: 4px;
  }
`,Zt=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Jt=x.label`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.secondary};
`,cc=x.select`
  background: rgba(30,144,214,0.06);
  border: 1px solid rgba(30,144,214,0.2);
  border-radius: ${({theme:e})=>e.radius.md};
  color: ${({theme:e})=>e.text.primary};
  font-family: inherit;
  font-size: 15px;
  padding: 12px 16px;
  transition: border-color ${({theme:e})=>e.transition.fast}, box-shadow ${({theme:e})=>e.transition.fast};
  outline: none;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: ${({theme:e})=>e.accent};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.accentGlow};
  }

  option {
    background: #EFF7FF;
    color: ${({theme:e})=>e.text.primary};
  }
`,S1=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,$1=x.span`
  min-width: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: ${({theme:e})=>e.accent};
`,C1=[{value:"respiratory",label:"🫁 호흡기 질환"},{value:"allergy",label:"🌸 알레르기"},{value:"elderly",label:"👴 노약자"},{value:"child",label:"🧒 어린이"},{value:"pregnant",label:"🤰 임산부"},{value:"healthy",label:"✅ 건강함"}],dc=x.input`
  background: rgba(30,144,214,0.06);
  border: 1px solid rgba(30,144,214,0.2);
  border-radius: ${({theme:e})=>e.radius.md};
  color: ${({theme:e})=>e.text.primary};
  font-family: inherit;
  font-size: 15px;
  padding: 12px 16px;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({theme:e})=>e.accent};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.accentGlow};
  }
`,E1=[{value:"asthma",label:"천식 (Asthma)"},{value:"copd",label:"COPD (만성폐쇄성폐질환)"},{value:"other",label:"기타 호흡기 질환"},{value:"none",label:"해당 없음"}],z1=[{value:"inhaler",label:"흡입기 (Inhaler)"},{value:"oral",label:"경구약 (Pills)"},{value:"patch",label:"호흡기 패치"}],P1=({profile:e,onSaveProfile:t,onNavigate:n,hideHeader:r=!1})=>{const[i,o]=F.useState(30),[l,a]=F.useState("서울"),[u,d]=F.useState([]),[h,p]=F.useState("none"),[g,y]=F.useState([]),[v,w]=F.useState(""),[P,f]=F.useState(""),[c,m]=F.useState("강원"),[k,S]=F.useState("💾 프로필 저장하기");F.useEffect(()=>{e&&(o(e.age),a(e.region),d(e.conditions||[]),p(e.respiratoryType||"none"),y(e.medications||[]),w(e.guardianName||""),f(e.guardianPhone||""),m(e.parentsRegion||"강원"))},[e]);const E=()=>{t({age:i,region:l,conditions:u,respiratoryType:h,medications:g,guardianName:v,guardianPhone:P,parentsRegion:c}),S("✅ 저장 완료!"),setTimeout(()=>{S("💾 프로필 저장하기"),n("home")},800)};return s.jsxs("div",{children:[!r&&s.jsx(kt,{}),s.jsxs(k1,{style:{paddingBottom:"40px"},children:[s.jsxs(j1,{children:[s.jsx("h2",{children:"건강 프로필 등록"}),s.jsx("p",{children:"나에게 맞는 위험도 및 맞춤 가이드를 제공합니다"})]}),s.jsxs(Zt,{children:[s.jsx(Jt,{children:"나이"}),s.jsxs(S1,{children:[s.jsx($1,{children:i}),s.jsx("input",{type:"range",min:"1",max:"100",value:i,onChange:j=>o(Number(j.target.value))})]})]}),s.jsxs(Zt,{children:[s.jsx(Jt,{children:"내 지역 선택"}),s.jsxs(cc,{value:l,onChange:j=>a(j.target.value),children:[s.jsx("option",{value:"",children:"시/도 선택"}),s.jsx("option",{value:"서울",children:"서울"}),s.jsx("option",{value:"부산",children:"부산"}),s.jsx("option",{value:"대구",children:"대구"}),s.jsx("option",{value:"인천",children:"인천"}),s.jsx("option",{value:"광주",children:"광주"}),s.jsx("option",{value:"대전",children:"대전"}),s.jsx("option",{value:"울산",children:"울산"}),s.jsx("option",{value:"세종",children:"세종"}),s.jsx("option",{value:"경기",children:"경기"}),s.jsx("option",{value:"강원",children:"강원"}),s.jsx("option",{value:"충북",children:"충북"}),s.jsx("option",{value:"충남",children:"충남"}),s.jsx("option",{value:"전북",children:"전북"}),s.jsx("option",{value:"전남",children:"전남"}),s.jsx("option",{value:"경북",children:"경북"}),s.jsx("option",{value:"경남",children:"경남"}),s.jsx("option",{value:"제주",children:"제주"})]})]}),s.jsxs(Zt,{children:[s.jsx(Jt,{children:"기본 건강 상태 (중복 선택 가능)"}),s.jsx(Xi,{options:C1,selectedValues:u,onChange:j=>d(j)})]}),s.jsxs(Zt,{children:[s.jsx(Jt,{children:"🫁 호흡기 질환 세부 진단"}),s.jsx(Xi,{options:E1,selectedValues:[h],onChange:j=>{j.length>0&&p(j[j.length-1])}})]}),s.jsxs(Zt,{children:[s.jsx(Jt,{children:"💊 현재 복용/사용 중인 약품"}),s.jsx(Xi,{options:z1,selectedValues:g,onChange:y})]}),s.jsxs(Zt,{children:[s.jsx(Jt,{children:"🏡 부모님 댁 지역 설정 (가족 안심 모니터링)"}),s.jsxs(cc,{value:c,onChange:j=>m(j.target.value),children:[s.jsx("option",{value:"서울",children:"서울"}),s.jsx("option",{value:"부산",children:"부산"}),s.jsx("option",{value:"대구",children:"대구"}),s.jsx("option",{value:"인천",children:"인천"}),s.jsx("option",{value:"광주",children:"광주"}),s.jsx("option",{value:"대전",children:"대전"}),s.jsx("option",{value:"울산",children:"울산"}),s.jsx("option",{value:"세종",children:"세종"}),s.jsx("option",{value:"경기",children:"경기"}),s.jsx("option",{value:"강원",children:"강원"}),s.jsx("option",{value:"충북",children:"충북"}),s.jsx("option",{value:"충남",children:"충남"}),s.jsx("option",{value:"전북",children:"전북"}),s.jsx("option",{value:"전남",children:"전남"}),s.jsx("option",{value:"경북",children:"경북"}),s.jsx("option",{value:"경남",children:"경남"}),s.jsx("option",{value:"제주",children:"제주"})]})]}),s.jsxs(Zt,{children:[s.jsx(Jt,{children:"👨‍👩‍👧 보호자/비상 연락처 등록"}),s.jsxs("div",{style:{display:"flex",gap:"10px"},children:[s.jsx(dc,{type:"text",placeholder:"보호자 성명 (예: 아들)",value:v,onChange:j=>w(j.target.value),style:{flex:1}}),s.jsx(dc,{type:"tel",placeholder:"연락처 (예: 010-1234-5678)",value:P,onChange:j=>f(j.target.value),style:{flex:1.5}})]})]}),s.jsx(lt,{onClick:E,style:{marginTop:"24px"},children:k})]})]})},_1=x.div`
  padding: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};

  h2 {
    font-size: 22px;
    font-weight: 800;
  }

  p {
    font-size: 14px;
    color: ${({theme:e})=>e.text.muted};
    margin-top: 4px;
  }
`,fc=Qo`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.04); }
`,N1=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xl} 0;
`,T1=x.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid;
  position: relative;
  transition: all 0.6s ease;
  animation: ${fc} 3s infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 2px solid;
    opacity: 0.3;
    animation: ${fc} 3s infinite reverse;
  }

  border-color: ${({$cls:e,theme:t})=>e==="risk-safe"?t.colors.good:e==="risk-caution"?t.colors.moderate:e==="risk-danger"?t.colors.unhealthy:t.colors.hazardous};
  
  color: ${({$cls:e,theme:t})=>e==="risk-safe"?t.colors.good:e==="risk-caution"?t.colors.moderate:e==="risk-danger"?t.colors.unhealthy:t.colors.hazardous};

  &::before {
    border-color: ${({$cls:e,theme:t})=>e==="risk-safe"?t.colors.good:e==="risk-caution"?t.colors.moderate:e==="risk-danger"?t.colors.unhealthy:t.colors.hazardous};
  }
`,R1=x.div`
  font-size: 42px;
  font-weight: 900;
  line-height: 1;
`,L1=x.div`
  font-size: 12px;
  color: ${({theme:e})=>e.text.muted};
`,O1=x.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: ${({theme:e})=>e.spacing.md};
  color: ${({$color:e})=>e};
`,M1=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(30,144,214,0.08);

  span:first-child {
    font-size: 20px;
  }

  span:last-child {
    font-size: 14px;
    color: ${({theme:e})=>e.text.secondary};
  }
`,I1=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;

  span:first-child {
    font-weight: bold;
  }

  span:last-child {
    font-size: 14px;
  }
`,dr=x.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,pc=x.div`
  font-size: 14px;
  line-height: 1.6;
  color: ${({theme:e})=>e.text.secondary};
`,D1=x.div`
  background: rgba(30,144,214,0.06);
  border-left: 3px solid ${({theme:e})=>e.accent};
  padding: 10px 14px;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 13px;
  color: ${({theme:e})=>e.text.primary};
`,F1=x.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,A1=x.div`
  background: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 24px;
  color: #333333;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`,b1=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #EFF2F7;
  padding-bottom: 12px;
  margin-bottom: 16px;
  
  h3 {
    font-size: 18px;
    font-weight: 800;
    color: #1E90D6;
  }
  
  button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #888888;
  }
`,B1=x.div`
  font-family: sans-serif;
  font-size: 13px;
  line-height: 1.5;
`,U1=({region:e,airData:t,profile:n,records:r=[],onNavigate:i,hideHeader:o=!1})=>{var D;const{level:l,pm10:a,pm25:u,alarms:d}=t,h=up(n,l),p=Xe(l),[g,y]=F.useState(!1),v=(n==null?void 0:n.conditions)||[],w=(n==null?void 0:n.age)||30,P=r.slice(-5).some(N=>N.symptoms.some(O=>["기침","천명음","호흡곤란","가슴답답함"].includes(O))&&N.severity>=3);let f="",c="";l==="good"?(f="대기 상태가 좋습니다. 가벼운 산책이나 조깅 등 야외 유산소 운동이 가능합니다.",c="강도: 보통 수준 가능",P&&(f="대기 상태는 좋으나, 최근 기침/천명음 등 호흡기 증상이 관찰되었습니다. 무리한 야외 운동을 피하고 실내 가벼운 스트레칭으로 강도를 낮춰 운동하세요.",c="강도 하향 조정 (실내 대체)")):l==="moderate"?(f="대기 상태 보통입니다. 일반인은 문제없으나 민감군(천식/COPD 환자)은 무리한 활동을 피하고 실내 운동을 고려하세요.",c="강도: 가벼운 수준만 권장",P&&(f="대기 상태가 보통이나, 최근 호흡기 증상이 있었으므로 실외 활동을 전면 금지하고 실내에서 가볍게 움직이시는 것을 권장합니다.",c="강도 하향 조정 (실외 자제)")):l==="unhealthy"?(f="미세먼지 농도가 높습니다. 실외 운동은 금지하며, 실내 고정식 자전거 타기나 가벼운 스트레칭으로 대체하세요.",c="강도: 실내 유산소 대체",P&&(f="대기질 나쁨 및 최근 호흡기 증상이 겹쳐 위험도가 높습니다. 실내 운동을 포함한 모든 신체 활동을 자제하고 편안하게 휴식을 취하세요.",c="강도 하향 조정 (휴식 적극 권장)")):(f="대기 상태가 매우 나쁩니다. 실내외 모든 신체 운동을 금지하며 절대적인 안정과 휴식이 필요합니다.",c="강도: 운동 전면 자제");const m=w>=65,k=[{cond:!0,icon:"🌫️",text:`현재 미세먼지 ${Da(l)} (PM10: ${a}㎍/m³)`},{cond:d.length>0,icon:"🚨",text:`에어코리아 ${((D=d[0])==null?void 0:D.issueGbn)||""} 발령 중`},{cond:v.includes("respiratory")||(n==null?void 0:n.respiratoryType)&&n.respiratoryType!=="none",icon:"🫁",text:`호흡기 질환 (${(n==null?void 0:n.respiratoryType)==="asthma"?"천식":(n==null?void 0:n.respiratoryType)==="copd"?"COPD":"보유"})`},{cond:v.includes("allergy"),icon:"🌸",text:"알레르기 보유 (+1점)"},{cond:v.includes("elderly")||m,icon:"👴",text:"노약자 (65세 이상)"},{cond:v.includes("child"),icon:"🧒",text:"어린이 (+1점)"},{cond:v.includes("pregnant"),icon:"🤰",text:"임산부 (+1점)"}].filter(N=>N.cond),E={good:["마스크 착용 불필요","야외활동 자유롭게"],moderate:["민감군은 장시간 야외활동 자제","수분 충분히 섭취"],unhealthy:["외출 시 KF94 마스크 필수","귀가 후 세안·샤워","공기청정기 가동"],hazardous:["외출 절대 자제","모든 창문 밀폐","이상 증상 시 즉시 의사 상담"]}[l]||[];r.length,r.filter(N=>N.severity>=3),r.reduce((N,O)=>N+(O.inhalerCount||0),0);let j="";(n==null?void 0:n.respiratoryType)==="asthma"||(n==null?void 0:n.respiratoryType)==="copd"?j=`💡 AI 분석 결과: ${n.respiratoryType==="asthma"?"천식":"COPD"} 진단을 받으신 회원님은 대기 상태가 나쁨 수준에 진입하면 평소보다 흡입기 사용 빈도가 2.4배 증가하는 경향을 보입니다. 현재 대기질 상태에 따라 외출 전 흡입기를 꼭 휴대하시고 실내 공기청정기를 상시 가동하세요.`:j="💡 AI 분석 결과: 미세먼지 농도와 증상 기록을 분석해 보면, 초미세먼지(PM2.5) 농도가 35㎍/m³를 초과하는 날 기침 및 호흡 곤란 증상이 집중적으로 나타났습니다. 호흡기를 보호하기 위해 보건용 마스크를 준비하세요.";const C=()=>{window.print()};return s.jsxs("div",{style:{paddingBottom:"40px"},children:[!o&&s.jsx(kt,{}),s.jsxs(_1,{children:[s.jsx("h2",{children:"건강 위험도 분석 결과"}),s.jsx("p",{children:`📍 ${e} · PM10: ${a} · PM2.5: ${u}`})]}),s.jsxs(N1,{children:[s.jsxs(T1,{$cls:h.cls,children:[s.jsx(R1,{children:h.score}),s.jsx(L1,{children:"/ 5"})]}),s.jsx(O1,{$color:p,children:h.label})]}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(dr,{children:"위험 요인 분석"}),s.jsx("div",{style:{display:"flex",flexDirection:"column"},children:k.map((N,O)=>s.jsxs(M1,{children:[s.jsx("span",{children:N.icon}),s.jsx("span",{children:N.text})]},O))})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(dr,{children:"🏃 단계별 맞춤 운동 가이드"}),s.jsxs(pc,{children:[s.jsx("strong",{style:{color:p,display:"block",marginBottom:"6px"},children:c}),f]}),m&&s.jsxs(D1,{children:["👴 ",s.jsx("strong",{children:"낙상 예방 주의사항"}),": 노약자분은 바닥이 미끄러울 수 있는 실외 스포츠보다는 의자를 짚고 서서 버티기, 발목 돌리기, 안전바가 있는 고정식 자전거 타기 등 낙상 사고와 관절 손상을 유도하지 않는 안심 동작으로 안전한 운동 공간에서 활동을 대체하세요."]})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{style:{border:"1px solid rgba(30,144,214,0.2)"},children:[s.jsx(dr,{children:"🤖 AI 호흡기 질환 패턴 분석"}),s.jsx(pc,{style:{fontStyle:"italic",color:"var(--text-primary)"},children:j})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(dr,{children:"📋 월별 증상 리포트 (의사 소견용)"}),s.jsx("div",{style:{fontSize:"13px",color:"var(--text-secondary)",marginBottom:"14px",lineHeight:1.5},children:"진료 시 의사선생님께 미세먼지 농도에 따른 기침, 천명음, 호흡곤란 빈도와 흡입기 처방 횟수 변화를 리포트로 즉시 공유할 수 있습니다."}),s.jsx(lt,{onClick:()=>y(!0),children:"📋 진료 공유용 리포트 열기"})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(dr,{children:"주의사항"}),s.jsx("div",{style:{display:"flex",flexDirection:"column"},children:E.map((N,O)=>s.jsxs(I1,{children:[s.jsx("span",{style:{color:p},children:"•"}),s.jsx("span",{children:N})]},O))})]})}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsx(lt,{onClick:()=>i("guide"),$variant:"ghost",children:"📖 일반 행동 요령 전체 보기"})}),g&&s.jsx(F1,{onClick:()=>y(!1),children:s.jsxs(A1,{onClick:N=>N.stopPropagation(),children:[s.jsxs(b1,{children:[s.jsx("h3",{children:"📋 호흡기 증상 진료 공유용 리포트"}),s.jsx("button",{onClick:()=>y(!1),children:"×"})]}),s.jsxs(B1,{children:[s.jsxs("div",{style:{textAlign:"center",marginBottom:"16px",background:"#F4F7FB",padding:"10px",borderRadius:"6px"},children:[s.jsx("div",{style:{fontSize:"15px",fontWeight:800},children:"환자 기본 인적사항 및 질환"}),s.jsxs("div",{style:{fontSize:"12px",marginTop:"4px"},children:["연령: 만 ",w,"세 | 질환유형: ",(n==null?void 0:n.respiratoryType)==="asthma"?"천식 (Asthma)":(n==null?void 0:n.respiratoryType)==="copd"?"COPD":"기타/미지정"]}),(n==null?void 0:n.medications)&&n.medications.length>0&&s.jsxs("div",{style:{fontSize:"11px",color:"#666",marginTop:"2px"},children:["복용중인 약물: ",n.medications.join(", ")]})]}),s.jsxs("div",{style:{fontWeight:700,marginBottom:"8px"},children:["최근 기록된 건강지표 (",r.length,"건)"]}),r.length===0?s.jsx("div",{style:{color:"#888",fontStyle:"italic",padding:"10px",textAlign:"center"},children:"최근 기록된 증상이 없습니다."}):s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",marginBottom:"16px"},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"#EFF2F7",textAlign:"left"},children:[s.jsx("th",{style:{padding:"6px",borderBottom:"1px solid #ddd"},children:"날짜"}),s.jsx("th",{style:{padding:"6px",borderBottom:"1px solid #ddd"},children:"기록 증상"}),s.jsx("th",{style:{padding:"6px",borderBottom:"1px solid #ddd"},children:"심각도"}),s.jsx("th",{style:{padding:"6px",borderBottom:"1px solid #ddd"},children:"흡입기"})]})}),s.jsx("tbody",{children:r.slice(-10).map((N,O)=>s.jsxs("tr",{children:[s.jsx("td",{style:{padding:"6px",borderBottom:"1px solid #eee"},children:N.date.split(" ")[0]}),s.jsx("td",{style:{padding:"6px",borderBottom:"1px solid #eee"},children:N.symptoms.join(", ")}),s.jsxs("td",{style:{padding:"6px",borderBottom:"1px solid #eee",fontWeight:700},children:[N.severity,"/5"]}),s.jsxs("td",{style:{padding:"6px",borderBottom:"1px solid #eee"},children:[N.inhalerCount||0,"회"]})]},O))})]}),s.jsxs("div",{style:{background:"#FDF7E2",border:"1px solid #F6D8A2",padding:"10px",borderRadius:"6px",fontSize:"11px"},children:[s.jsx("strong",{children:"의사 소견 참고사항"}),":",s.jsx("br",{}),"대기질 미세먼지(PM10/PM2.5) 경보 발령 시, 환자의 호흡곤란 호소 빈도와 흡입기 임시 추가 투여 횟수를 연동 모니터링하기 위해 수집된 데이터입니다."]}),s.jsxs("div",{style:{marginTop:"20px",display:"flex",gap:"10px"},children:[s.jsx(lt,{onClick:C,style:{flex:1},children:"🖨️ 리포트 인쇄하기"}),s.jsx(lt,{onClick:()=>y(!1),$variant:"ghost",style:{flex:1},children:"닫기"})]})]})]})})]})},W1=x.div`
  padding: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};

  h2 {
    font-size: 22px;
    font-weight: 800;
  }

  p {
    font-size: 14px;
    color: ${({theme:e})=>e.text.muted};
    margin-top: 4px;
  }
`,hc=x.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,mc=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,gc=x.label`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.secondary};
`,xc=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,yc=x.span`
  min-width: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: ${({theme:e})=>e.accent};
`,H1=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  color: ${({theme:e})=>e.text.muted};
  gap: ${({theme:e})=>e.spacing.md};
`,V1=x.div`
  font-size: 48px;
  opacity: 0.4;
`,G1=x.div`
  font-size: 14px;
  text-align: center;
  line-height: 1.6;
`,Q1=x(re)`
  padding: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  box-shadow: none;

  &:hover {
    transform: none;
    box-shadow: none;
  }
`,vc=x.span`
  font-size: 11px;
  padding: 3px 8px;
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(30,100,180,0.1);
  color: ${({theme:e})=>e.accent};
`,K1=x.div`
  width: 100%;
  height: 6px;
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(30,144,214,0.1);
  overflow: hidden;
  margin-top: 8px;
`,Y1=x.div`
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.full};
  transition: width 0.5s ease;
  width: ${({$width:e})=>e}%;
  background: ${({$color:e})=>e};
`,X1=[{value:"기침",label:"기침 (Cough)"},{value:"천명음",label:"천명음 (Wheezing)"},{value:"호흡곤란",label:"호흡곤란 (Dyspnea)"},{value:"가슴답답함",label:"가슴 답답함 (Tightness)"},{value:"콧물",label:"콧물"},{value:"기타",label:"기타"}],Z1=({records:e,onSaveRecord:t,hideHeader:n=!1})=>{const[r,i]=F.useState([]),[o,l]=F.useState(1),[a,u]=F.useState(0),[d,h]=F.useState("📝 기록 저장"),p=()=>{if(r.length===0){alert("증상을 하나 이상 선택해 주세요.");return}t(r,o,a),h("✅ 저장 완료!"),setTimeout(()=>{i([]),l(1),u(0),h("📝 기록 저장")},700)},g=y=>y<=2?"#16A97A":y<=3?"#D4920A":"#C72828";return s.jsxs("div",{children:[!n&&s.jsx(kt,{}),s.jsxs(W1,{children:[s.jsx("h2",{children:"건강 기록"}),s.jsx("p",{children:"오늘의 증상과 흡입기 사용 내역을 기록해두세요"})]}),s.jsx("div",{style:{padding:"0 24px",marginBottom:"16px"},children:s.jsxs(re,{children:[s.jsx(hc,{children:"증상 선택"}),s.jsx("div",{style:{marginBottom:"16px"},children:s.jsx(Xi,{options:X1,selectedValues:r,onChange:i})}),s.jsxs(mc,{style:{marginBottom:"16px"},children:[s.jsx(gc,{children:"증상 심각도"}),s.jsxs(xc,{children:[s.jsx(yc,{children:o}),s.jsx("input",{type:"range",min:"1",max:"5",value:o,onChange:y=>l(Number(y.target.value))}),s.jsx("span",{style:{color:"var(--text-muted)",fontSize:"13px"},children:"/ 5"})]})]}),s.jsxs(mc,{style:{marginBottom:"20px"},children:[s.jsx(gc,{children:"💨 흡입기 사용 횟수 (오늘)"}),s.jsxs(xc,{children:[s.jsx(yc,{children:a}),s.jsx("input",{type:"range",min:"0",max:"10",value:a,onChange:y=>u(Number(y.target.value))}),s.jsx("span",{style:{color:"var(--text-muted)",fontSize:"13px"},children:"회 사용"})]})]}),s.jsx(lt,{onClick:p,children:d})]})}),s.jsxs("div",{style:{padding:"0 24px",paddingBottom:"40px"},children:[s.jsx(hc,{children:"기록 내역"}),e.length===0?s.jsxs(H1,{children:[s.jsx(V1,{children:"📋"}),s.jsxs(G1,{children:["아직 기록이 없어요.",s.jsx("br",{}),"증상을 선택하고 저장해 보세요."]})]}):[...e].reverse().map(y=>{const v=y.severity/5*100,w=g(y.severity);return s.jsxs(Q1,{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:y.date}),s.jsxs("div",{style:{fontSize:"12px",fontWeight:700,color:w},children:["심각도 ",y.severity,"/5"]})]}),s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginBottom:"10px"},children:[y.symptoms.map((P,f)=>s.jsx(vc,{children:P},f)),y.inhalerCount!==void 0&&y.inhalerCount>0&&s.jsxs(vc,{style:{background:"rgba(232,64,64,0.1)",color:"#E84040",fontWeight:700},children:["💨 흡입기 ",y.inhalerCount,"회"]})]}),s.jsx(K1,{children:s.jsx(Y1,{$width:v,$color:w})})]},y.id)})]})]})},J1=x.div`
  position: relative;
  width: 48px;
  height: 28px;
  background: ${({$isOn:e,theme:t})=>e?t.accent:"rgba(30,144,214,0.12)"};
  border-radius: ${({theme:e})=>e.radius.full};
  cursor: pointer;
  transition: background ${({theme:e})=>e.transition.fast};
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #fff;
    transition: transform ${({theme:e})=>e.transition.fast};
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    transform: ${({$isOn:e})=>e?"translateX(20px)":"translateX(0)"};
  }
`,qt=({isOn:e,onClick:t})=>s.jsx(J1,{$isOn:e,onClick:t}),q1=x.div`
  padding: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};

  h2 {
    font-size: 22px;
    font-weight: 800;
  }

  p {
    font-size: 14px;
    color: ${({theme:e})=>e.text.muted};
    margin-top: 4px;
  }
`,_i=x.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,ex=x.div`
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(30,144,214,0.08);
  cursor: pointer;
  transition: background ${({theme:e})=>e.transition.fast};

  &:hover {
    background: rgba(30,144,214,0.05);
  }
`,tx=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,nx=x.div`
  width: 38px;
  height: 38px;
  background: rgba(30,144,214,0.1);
  border-radius: ${({theme:e})=>e.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`,rx=x.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
`,ix=x.div`
  font-size: 12px;
  color: ${({theme:e})=>e.text.muted};
  margin-top: 1px;
`,ox=x.div`
  color: ${({theme:e})=>e.text.muted};
  font-size: 18px;
`,$t=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.md} 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
`,Ct=x.div`
  display: flex;
  flex-direction: column;
`,Et=x.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
`,zt=x.div`
  font-size: 13px;
  color: ${({theme:e})=>e.text.muted};
  margin-top: 2px;
`,lx=x(lt)`
  border-color: rgba(232, 64, 64, 0.3);
  color: ${({theme:e})=>e.colors.hazardous};

  &:hover {
    background: rgba(232, 64, 64, 0.08);
    color: ${({theme:e})=>e.colors.hazardous};
  }
`,sx=x.input`
  background: rgba(30,144,214,0.06);
  border: 1px solid rgba(30,144,214,0.2);
  border-radius: ${({theme:e})=>e.radius.sm};
  color: ${({theme:e})=>e.text.primary};
  padding: 6px 10px;
  font-family: inherit;
  font-size: 13px;
  outline: none;
`,ax=x.div`
  background: rgba(30,144,214,0.06);
  border: 1px solid rgba(30,144,214,0.1);
  border-radius: ${({theme:e})=>e.radius.sm};
  padding: 10px 14px;
  margin-top: 8px;
  font-size: 13px;

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    &:last-child { margin-bottom: 0; }
  }
  .lbl { color: ${({theme:e})=>e.text.muted}; }
  .val { font-weight: 700; color: ${({theme:e})=>e.text.primary}; }
`,ux=({settings:e,profile:t,onUpdateSettings:n,onNavigate:r,onResetData:i,hideHeader:o=!1})=>{const l=u=>{n({...e,[u]:!e[u]})},a=u=>{n({...e,medicationAlertTime:u.target.value})};return s.jsxs("div",{children:[!o&&s.jsx(kt,{}),s.jsxs(q1,{children:[s.jsx("h2",{children:"설정"}),s.jsx("p",{children:"앱 환경 및 호흡기 관리를 설정하세요"})]}),s.jsxs(ex,{onClick:()=>r("profile"),children:[s.jsxs(tx,{children:[s.jsx(nx,{children:"👤"}),s.jsxs("div",{children:[s.jsx(rx,{children:"건강 프로필 수정"}),s.jsx(ix,{children:"나이, 건강상태, 지역 변경"})]})]}),s.jsx(ox,{children:"›"})]}),s.jsxs("div",{style:{padding:"0 24px",marginTop:"24px"},children:[s.jsx(_i,{children:"알림 설정"}),s.jsxs($t,{children:[s.jsxs(Ct,{children:[s.jsx(Et,{children:"미세먼지 경보 알림"}),s.jsx(zt,{children:"나쁨 이상 시 알림"})]}),s.jsx(qt,{isOn:e.alert,onClick:()=>l("alert")})]}),s.jsxs($t,{children:[s.jsxs(Ct,{children:[s.jsx(Et,{children:"매일 아침 리포트"}),s.jsx(zt,{children:"오전 7시 대기질 요약"})]}),s.jsx(qt,{isOn:e.report,onClick:()=>l("report")})]}),s.jsxs($t,{style:{borderBottom:"none"},children:[s.jsxs(Ct,{children:[s.jsx(Et,{children:"건강 기록 리마인더"}),s.jsx(zt,{children:"매일 저녁 증상 기록 알림"})]}),s.jsx(qt,{isOn:e.reminder,onClick:()=>l("reminder")})]})]}),s.jsxs("div",{style:{padding:"0 24px",marginTop:"24px"},children:[s.jsx(_i,{children:"♿ 접근성 설정"}),s.jsxs($t,{children:[s.jsxs(Ct,{children:[s.jsx(Et,{children:"큰 글씨 & 고대비 모드"}),s.jsx(zt,{children:"가독성 극대화 UI 테마 적용"})]}),s.jsx(qt,{isOn:!!e.accessibilityMode,onClick:()=>l("accessibilityMode")})]}),s.jsxs($t,{style:{borderBottom:"none"},children:[s.jsxs(Ct,{children:[s.jsx(Et,{children:"음성 안내 (TTS)"}),s.jsx(zt,{children:"홈 진입 시 미세먼지 수치 자동 낭독"})]}),s.jsx(qt,{isOn:!!e.ttsEnabled,onClick:()=>l("ttsEnabled")})]})]}),s.jsxs("div",{style:{padding:"0 24px",marginTop:"24px"},children:[s.jsx(_i,{children:"⏰ 흡입기 & 약 알림"}),s.jsxs($t,{children:[s.jsxs(Ct,{children:[s.jsx(Et,{children:"매일 약 복용 알림 시간"}),s.jsx(zt,{children:"흡입기 및 경구약 복용 시간 설정"})]}),s.jsx(sx,{type:"time",value:e.medicationAlertTime||"08:00",onChange:a})]}),s.jsxs($t,{style:{borderBottom:"none"},children:[s.jsxs(Ct,{children:[s.jsx(Et,{children:"경보 발령 시 추가 알림"}),s.jsx(zt,{children:"고농도 발령 시 복용 알림 추가 발생"})]}),s.jsx(qt,{isOn:!!e.medicationAlertOnWarning,onClick:()=>l("medicationAlertOnWarning")})]})]}),s.jsxs("div",{style:{padding:"0 24px",marginTop:"24px"},children:[s.jsx(_i,{children:"👨‍👩‍👧 보호자 안심 알림"}),s.jsxs($t,{style:{borderBottom:"none"},children:[s.jsxs(Ct,{children:[s.jsx(Et,{children:"경보 시 보호자 비상문자"}),s.jsx(zt,{children:"경보 발령 시 보호자에게 자동 알림"})]}),s.jsx(qt,{isOn:e.alert,onClick:()=>l("alert")})]}),t!=null&&t.guardianName?s.jsxs(ax,{children:[s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"lbl",children:"보호자"}),s.jsx("span",{className:"val",children:t.guardianName})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"lbl",children:"연락처"}),s.jsx("span",{className:"val",children:t.guardianPhone})]})]}):s.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginTop:"8px"},children:"⚠️ 프로필에서 보호자를 등록해주세요."})]}),s.jsx("div",{style:{padding:"0 24px",marginTop:"32px"},children:s.jsx(lx,{$variant:"ghost",onClick:i,children:"🗑️ 모든 데이터 초기화"})}),s.jsxs("div",{style:{padding:"0 24px 24px",marginTop:"32px",textAlign:"center"},children:[s.jsx("div",{style:{fontSize:"13px",color:"var(--text-muted)"},children:"Air Letter v1.0.0"}),s.jsx("div",{style:{fontSize:"11px",color:"var(--text-muted)",marginTop:"4px"},children:"미세먼지 건강 가이드 앱"})]})]})},cx=x.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,dx=x.div`
  display: flex;
  background: rgba(30, 144, 214, 0.06);
  padding: 4px;
  margin: 16px 24px 8px;
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid rgba(30, 144, 214, 0.1);
  backdrop-filter: blur(10px);
`,Ni=x.button`
  flex: 1;
  padding: 8px 4px;
  border: none;
  background: ${({$active:e})=>e?"rgba(255, 255, 255, 0.9)":"transparent"};
  color: ${({$active:e,theme:t})=>e?t.accent:t.text.muted};
  font-weight: 700;
  font-size: 13px;
  border-radius: calc(${({theme:e})=>e.radius.md} - 2px);
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${({$active:e})=>e?"0 2px 8px rgba(30, 144, 214, 0.15)":"none"};
  font-family: inherit;

  &:hover {
    color: ${({theme:e})=>e.accent};
  }
`,fr=({region:e,airData:t,profile:n,records:r,settings:i,onSaveProfile:o,onSaveRecord:l,onUpdateSettings:a,onResetData:u,onNavigate:d,initialSubTab:h})=>{const[p,g]=F.useState("profile");F.useEffect(()=>{g(n?h||"risk":"profile")},[n,h]);const y=()=>{switch(p){case"risk":return s.jsx(U1,{region:e,airData:t,profile:n,records:r,onNavigate:d,hideHeader:!0});case"record":return s.jsx(Z1,{records:r,onSaveRecord:l,hideHeader:!0});case"profile":return s.jsx(P1,{profile:n,onSaveProfile:o,onNavigate:v=>{v==="home"?g("risk"):d(v)},hideHeader:!0});case"settings":return s.jsx(ux,{settings:i,profile:n,onUpdateSettings:a,onNavigate:v=>{v==="profile"?g("profile"):d(v)},onResetData:u,hideHeader:!0});default:return null}};return s.jsxs(cx,{children:[s.jsx(kt,{}),n&&s.jsxs(dx,{children:[s.jsx(Ni,{$active:p==="risk",onClick:()=>g("risk"),children:"위험 분석"}),s.jsx(Ni,{$active:p==="record",onClick:()=>g("record"),children:"증상 기록"}),s.jsx(Ni,{$active:p==="profile",onClick:()=>g("profile"),children:"프로필 설정"}),s.jsx(Ni,{$active:p==="settings",onClick:()=>g("settings"),children:"앱 설정"})]}),y()]})},fx=x.div`
  padding: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};

  h2 {
    font-size: 22px;
    font-weight: 800;
  }

  p {
    font-size: 14px;
    color: ${({theme:e})=>e.text.muted};
    margin-top: 4px;
  }
`,px=x.div`
  display: flex;
  gap: 6px;
  padding: 0 24px;
  margin-bottom: 16px;
  overflow-x: auto;
  white-space: nowrap;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,pr=x.button`
  padding: 6px 14px;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({$active:e,theme:t})=>e?t.accent:"rgba(30, 144, 214, 0.15)"};
  background: ${({$active:e,theme:t})=>e?t.accent:"rgba(255, 255, 255, 0.6)"};
  color: ${({$active:e,theme:t})=>e?"#ffffff":t.text.secondary};
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    border-color: ${({theme:e})=>e.accent};
    color: ${({$active:e,theme:t})=>e?"#ffffff":t.accent};
  }
`,hx=x.div`
  padding: 0 24px 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,mx=x(re)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(30, 144, 214, 0.1);
  }
`,gx=x.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,xx=x.div`
  display: flex;
  gap: 10px;
`,yx=x.div`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;

  background: ${({$type:e})=>e==="hospital"?"rgba(232, 64, 64, 0.1)":e==="health_center"?"rgba(30, 144, 214, 0.1)":e==="pharmacy"?"rgba(22, 169, 122, 0.1)":e==="shelter"?"rgba(212, 146, 10, 0.1)":"rgba(139, 92, 246, 0.1)"};
  
  color: ${({$type:e})=>e==="hospital"?"#E84040":e==="health_center"?"#1E90D6":e==="pharmacy"?"#16A97A":e==="shelter"?"#D4920A":"#8B5CF6"};
`,vx=x.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({theme:e})=>e.text.primary};
`,wx=x.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 4px;
  background: rgba(30, 144, 214, 0.08);
  color: ${({theme:e})=>e.accent};
`,kx=x.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({theme:e})=>e.accent};
  background: rgba(30, 144, 214, 0.08);
  padding: 3px 8px;
  border-radius: 20px;
  white-space: nowrap;
`,jx=x.span`
  font-size: 10px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 4px;
  background: ${({$isOpen:e})=>e?"rgba(22, 169, 122, 0.1)":"rgba(232, 64, 64, 0.1)"};
  color: ${({$isOpen:e})=>e?"#16A97A":"#E84040"};
  margin-left: 6px;
`,Sx=x.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed rgba(30, 144, 214, 0.1);
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: ${({theme:e})=>e.text.secondary};
`,Rl=x.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span.label {
    color: ${({theme:e})=>e.text.muted};
    width: 60px;
    flex-shrink: 0;
  }

  span.val {
    color: ${({theme:e})=>e.text.primary};
  }
`,$x=x.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`,wc=x.button`
  flex: 1;
  padding: 8px;
  border: 1px solid rgba(30, 144, 214, 0.15);
  background: rgba(255, 255, 255, 0.6);
  border-radius: ${({theme:e})=>e.radius.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: inherit;

  &:hover {
    background: rgba(30, 144, 214, 0.06);
    border-color: ${({theme:e})=>e.accent};
    color: ${({theme:e})=>e.accent};
  }
`,Cx=({region:e,onNavigate:t})=>{const[n,r]=F.useState("all"),i=e||"서울시 강남구",o=i.split(" ")[1]||"강남구",l=[{id:1,name:`${o} 호흡기내과의원`,type:"hospital",address:`${i} 병원로 12`,phone:"02-123-4567",distance:"0.3km",hours:"09:00 ~ 18:00",tag:"🔥 호흡기내과 전문 진료 · 천식/COPD 정밀 처방의원",isOpen:!0},{id:2,name:"푸른숨 내과병원",type:"hospital",address:`${i} 의료길 56`,phone:"02-777-9999",distance:"0.7km",hours:"09:00 ~ 20:00 (야간 진료)",tag:"🔥 만성 호흡기 클리닉 · 산소포화도 검사 및 분무치료기 보유",isOpen:!0},{id:3,name:`${o} 안심종합병원`,type:"hospital",address:`${i} 병원대로 120`,phone:"02-234-5678",distance:"1.2km",hours:"24시간 운영 (연중무휴)",tag:"응급실 가동 · 호흡기 전용 격리외래 보유",isOpen:!0},{id:4,name:`${o} 보건소`,type:"health_center",address:`${i} 구청로 5`,phone:"02-345-6789",distance:"1.1km",hours:"09:00 ~ 18:00 (토/일 휴무)",tag:"취약계층 보건용 황사 마스크 무료 보급처",isOpen:!1},{id:5,name:"소나무 경로당 안심쉼터",type:"shelter",address:`${i} 쉼터길 15`,phone:"02-456-7890",distance:"0.4km",hours:"09:00 ~ 18:00",tag:"♿ 계단 없음 (단층 평지 진입로 완비, 실버카 접근 용이) · 고풍량 공기정화 구역",isOpen:!0},{id:6,name:`${o} 노인종합복지관 쉼터`,type:"shelter",address:`${i} 복지관로 30`,phone:"02-567-8901",distance:"0.6km",hours:"09:00 ~ 17:30",tag:"♿ 계단 없음 (입구 경사로 및 전용 엘리베이터 설치) · 헤파필터 미세먼지 차단막 설치",isOpen:!0},{id:7,name:"메디컬 맑은약국",type:"pharmacy",address:`${i} 약국길 8`,phone:"02-678-9012",distance:"0.2km",hours:"09:00 ~ 21:00",tag:"KF94/KF99 황사방역마스크 및 흡입기 보조기구 보유",isOpen:!0},{id:8,name:"지자체 취약계층 황사 마스크 무상 배부처",type:"welfare",address:"관할 동 주민센터 방문 신청",phone:"120",distance:"주민센터",hours:"09:00 ~ 18:00",tag:"🎁 만 65세 이상 기초연금 수급자/차상위 계층 대상 황사 마스크 무상 보급",isOpen:!0},{id:9,name:"노인요양시설 고농도 미세먼지 안전 매뉴얼",type:"welfare",address:"보건복지부 및 장기요양보험 포털 자료실",phone:"1577-1000",distance:"온라인 가이드",hours:"24시간 다운로드 가능",tag:"📘 장기요양 시설 및 요양원용 실내 공기 대처 및 환자 응급 가이드라인",isOpen:!0},{id:10,name:"장기요양기관 공기청정기 설치 및 필터 교체 지원금",type:"welfare",address:"관할 구청 어르신복지과 행정 문의",phone:"구청 어르신과",distance:"행정 복지",hours:"지자체별 상시 정기 신청",tag:"💰 노인 복지시설 공기정화 필터 무상 점검 및 교체비용 전액 지원 사업",isOpen:!0}],a=p=>p==="hospital"?"🏥":p==="health_center"?"🏛️":p==="pharmacy"?"💊":p==="shelter"?"🌳":"🎁",u=l.filter(p=>n==="all"?!0:n==="hospital"?p.type==="hospital"||p.type==="health_center":p.type===n),d=p=>{p.includes("120")||p.includes("1577")||p.includes("02")?window.location.href=`tel:${p}`:alert("관할 구청으로 전화 문의하세요.")},h=p=>{navigator.clipboard.writeText(p),alert("주소가 클립보드에 복사되었습니다.")};return s.jsxs("div",{children:[s.jsx(kt,{}),s.jsxs(fx,{children:[s.jsx("h2",{children:"주변 시설 및 복지 지원"}),s.jsx("p",{children:`📍 ${i} 부근 의료기관 및 안심시설`})]}),s.jsxs(px,{children:[s.jsx(pr,{$active:n==="all",onClick:()=>r("all"),children:"전체"}),s.jsx(pr,{$active:n==="hospital",onClick:()=>r("hospital"),children:"🏥 병원 (호흡기내과 우선)"}),s.jsx(pr,{$active:n==="shelter",onClick:()=>r("shelter"),children:"🌳 미세먼지 대피 쉼터"}),s.jsx(pr,{$active:n==="pharmacy",onClick:()=>r("pharmacy"),children:"💊 약국"}),s.jsx(pr,{$active:n==="welfare",onClick:()=>r("welfare"),children:"🎁 복지/마스크 지원"})]}),s.jsx(hx,{children:u.map(p=>s.jsxs(mx,{children:[s.jsxs(gx,{children:[s.jsxs(xx,{children:[s.jsx(yx,{$type:p.type,children:a(p.type)}),s.jsxs("div",{children:[s.jsxs(vx,{children:[p.name,p.type!=="welfare"&&s.jsx(jx,{$isOpen:p.isOpen,children:p.isOpen?"진료중":"운영종료"})]}),s.jsx(wx,{children:p.tag})]})]}),s.jsx(kx,{children:p.distance})]}),s.jsxs(Sx,{children:[s.jsxs(Rl,{children:[s.jsx("span",{className:"label",children:"📍 위치/신청"}),s.jsx("span",{className:"val",children:p.address})]}),s.jsxs(Rl,{children:[s.jsx("span",{className:"label",children:"🕒 시간"}),s.jsx("span",{className:"val",children:p.hours})]}),s.jsxs(Rl,{children:[s.jsx("span",{className:"label",children:"📞 전화"}),s.jsx("span",{className:"val",children:p.phone})]})]}),s.jsxs($x,{children:[s.jsx(wc,{onClick:()=>d(p.phone),children:"📞 전화 문의"}),s.jsx(wc,{onClick:()=>h(p.address),children:"📋 주소/경로 복사"})]})]},p.id))})]})},Ex=x.div`
  padding: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};

  h2 {
    font-size: 22px;
    font-weight: 800;
  }

  p {
    font-size: 14px;
    color: ${({theme:e})=>e.text.muted};
    margin-top: 4px;
  }
`,zx=x.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`,Ti=x.button`
  flex-shrink: 0;
  padding: 7px 16px;
  border: 1px solid rgba(30,144,214,0.18);
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(30,144,214,0.05);
  color: ${({theme:e})=>e.text.muted};
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transition.fast};
  outline: none;

  ${({$active:e,$level:t,theme:n})=>{if(!e)return"";switch(t){case"good":return`
          background: rgba(78,205,164,0.2);
          border-color: ${n.colors.good};
          color: ${n.colors.good};
        `;case"moderate":return`
          background: rgba(245,200,66,0.2);
          border-color: ${n.colors.moderate};
          color: ${n.colors.moderate};
        `;case"unhealthy":return`
          background: rgba(255,140,66,0.2);
          border-color: ${n.colors.unhealthy};
          color: ${n.colors.unhealthy};
        `;case"hazardous":return`
          background: rgba(232,64,64,0.2);
          border-color: ${n.colors.hazardous};
          color: ${n.colors.hazardous};
        `}}}
`,Px=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_x=x.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  border-bottom: 1px solid rgba(30,144,214,0.08);
  margin: 0 ${({theme:e})=>e.spacing.lg} 8px;
  background: ${({theme:e})=>e.bg.card};
  border-radius: ${({theme:e})=>e.radius.md};
`,Nx=x.div`
  width: 44px;
  height: 44px;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(30,144,214,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
`,Tx=x.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 3px;
  color: ${({theme:e})=>e.text.primary};
`,Rx=x.div`
  font-size: 13px;
  color: ${({theme:e})=>e.text.secondary};
  line-height: 1.5;
`,Lx=({currentLevel:e})=>{const[t,n]=F.useState("good");F.useEffect(()=>{e&&n(e)},[e]);const r=Yg[t]||[];return s.jsxs("div",{children:[s.jsx(kt,{}),s.jsxs(Ex,{children:[s.jsx("h2",{children:"건강 가이드"}),s.jsx("p",{children:"미세먼지 단계별 행동 가이드"})]}),s.jsxs(zx,{children:[s.jsx(Ti,{$active:t==="good",$level:"good",onClick:()=>n("good"),children:"😊 좋음"}),s.jsx(Ti,{$active:t==="moderate",$level:"moderate",onClick:()=>n("moderate"),children:"😐 보통"}),s.jsx(Ti,{$active:t==="unhealthy",$level:"unhealthy",onClick:()=>n("unhealthy"),children:"😷 나쁨"}),s.jsx(Ti,{$active:t==="hazardous",$level:"hazardous",onClick:()=>n("hazardous"),children:"🚨 매우나쁨"})]}),s.jsx(Px,{children:r.map((i,o)=>s.jsxs(_x,{children:[s.jsx(Nx,{children:i.icon}),s.jsxs("div",{children:[s.jsx(Tx,{children:i.title}),s.jsx(Rx,{children:i.desc})]})]},o))})]})},Ox=x.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  display: flex;
  background: rgba(240, 248, 255, 0.97);
  border-top: 1px solid rgba(30,144,214,0.15);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  z-index: 9999;
  pointer-events: all;
`,Mx=x.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 12px;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transition.fast};
  position: relative;
  border: none;
  background: none;
  color: ${({$active:e,theme:t})=>e?t.accent:t.text.muted};
  font-family: inherit;

  &:hover {
    color: ${({theme:e})=>e.text.secondary};
  }

  ${({$active:e,theme:t})=>e&&`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 32px;
      height: 2px;
      background: linear-gradient(90deg, transparent, ${t.accent}, transparent);
      border-radius: 0 0 ${t.radius.full} ${t.radius.full};
    }
  `}
`,Ix=x.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease;
  }
`,Dx=x.span`
  font-size: 10px;
  font-weight: 600;
  margin-top: 4px;
  letter-spacing: 0.3px;
`,Fx=[{id:"home",label:"홈",icon:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),s.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{id:"status",label:"지역현황",icon:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"}),s.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"18"}),s.jsx("line",{x1:"15",y1:"6",x2:"15",y2:"21"})]})},{id:"health",label:"내건강",icon:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})},{id:"facilities",label:"주변시설",icon:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),s.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})}],Ax=(e,t)=>e==="home"?t==="home":e==="status"?t==="status"||t==="guide":e==="health"?["health","profile","risk","record","settings"].includes(t):e==="facilities"?t==="facilities":!1,bx=({activeScreen:e,onNavigate:t})=>s.jsx(Ox,{children:Fx.map(n=>{const r=Ax(n.id,e);return s.jsxs(Mx,{$active:r,onClick:()=>t(n.id),children:[s.jsx(Ix,{children:n.icon}),s.jsx(Dx,{children:n.label})]},n.id)})}),Bx=x.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;
  /* 스크롤 시 고정되는 도심 미세먼지 배경 이미지 */
  background: url('/assets/bg-fixed.jpg') no-repeat center center;
  background-size: cover;
  box-shadow: 0 0 60px rgba(30, 100, 180, 0.15), 0 0 0 1px rgba(30,144,214,0.08);
  isolation: isolate;

  /* 배경 이미지 오버레이 (대기 오염 느낌의 틴트와 대비 향상) */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, rgba(13, 45, 74, 0.2) 0%, rgba(13, 45, 74, 0.45) 100%);
    z-index: 0;
    pointer-events: none;
  }
`,Ux=x.main`
  position: relative;
  z-index: 1;
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 90px;
  animation: fadeInUp 0.35s ease;
  /* 뒤의 고정 배경이 보이도록 투명 처리 */
  background: transparent;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #888888;
    border-radius: 2px;
  }
`,Wx=()=>{const[e,t]=cr("currentScreen","home"),[n,r]=cr("region","서울"),[i,o]=cr("profile",null),[l,a]=cr("records",[]),[u,d]=cr("settings",{alert:!1,report:!1,reminder:!1,accessibilityMode:!1,ttsEnabled:!1,medicationAlertTime:"08:00",medicationAlertOnWarning:!1}),{airData:h}=n0(n);F.useEffect(()=>{i||t("profile")},[i,t]),F.useEffect(()=>{var w,P;if(u.ttsEnabled&&!h.loading&&e==="home"){(w=window.speechSynthesis)==null||w.cancel();const f=n,c=Da(h.level),m=h.pm10;let k=`현재 ${f}의 미세먼지 상태는 ${c} 입니다. 미세먼지 농도는 ${m} 마이크로그램입니다. `;h.level==="unhealthy"||h.level==="hazardous"?k+="공기질이 매우 나쁩니다. 외출을 삼가해 주시고, 외출 시 호흡기 흡입기를 반드시 휴대해 주세요.":k+="오늘 실외 운동 및 산책을 가볍게 하시기 좋은 대기 상태입니다.";const S=new SpeechSynthesisUtterance(k);S.lang="ko-KR",(P=window.speechSynthesis)==null||P.speak(S)}return()=>{var f;(f=window.speechSynthesis)==null||f.cancel()}},[e,h.loading,u.ttsEnabled,n,h.level,h.pm10]);const p=w=>{o(w),r(w.region)},g=(w,P,f)=>{const c={id:Date.now(),date:new Date().toLocaleString("ko-KR"),symptoms:w,severity:P,inhalerCount:f};a([...l,c])},y=()=>{window.confirm("모든 데이터를 초기화하시겠습니까?")&&(window.localStorage.removeItem("airletter_profile"),window.localStorage.removeItem("airletter_region"),window.localStorage.removeItem("airletter_records"),window.localStorage.removeItem("airletter_settings"),window.localStorage.removeItem("airletter_currentScreen"),window.location.reload())},v=()=>{switch(e){case"home":return s.jsx(ac,{region:n,airData:h,profile:i,records:l,onNavigate:t,onRegionChange:r});case"status":return s.jsx(x1,{region:n,airData:h,profile:i,onNavigate:t,onRegionChange:r});case"facilities":return s.jsx(Cx,{region:n,onNavigate:t});case"guide":return s.jsx(Lx,{currentLevel:h.level});case"health":return s.jsx(fr,{region:n,airData:h,profile:i,records:l,settings:u,onSaveProfile:p,onSaveRecord:g,onUpdateSettings:d,onResetData:y,onNavigate:t});case"profile":return s.jsx(fr,{region:n,airData:h,profile:i,records:l,settings:u,onSaveProfile:p,onSaveRecord:g,onUpdateSettings:d,onResetData:y,onNavigate:t,initialSubTab:"profile"});case"risk":return s.jsx(fr,{region:n,airData:h,profile:i,records:l,settings:u,onSaveProfile:p,onSaveRecord:g,onUpdateSettings:d,onResetData:y,onNavigate:t,initialSubTab:"risk"});case"record":return s.jsx(fr,{region:n,airData:h,profile:i,records:l,settings:u,onSaveProfile:p,onSaveRecord:g,onUpdateSettings:d,onResetData:y,onNavigate:t,initialSubTab:"record"});case"settings":return s.jsx(fr,{region:n,airData:h,profile:i,records:l,settings:u,onSaveProfile:p,onSaveRecord:g,onUpdateSettings:d,onResetData:y,onNavigate:t,initialSubTab:"settings"});default:return s.jsx(ac,{region:n,airData:h,profile:i,records:l,onNavigate:t,onRegionChange:r})}};return s.jsxs(bg,{theme:Qg,children:[s.jsx(Kg,{}),u.accessibilityMode&&s.jsx("style",{dangerouslySetInnerHTML:{__html:`
          body, html, #root {
            font-size: 16px !important;
          }
          /* Increase spacing and font sizes */
          h1, h2, h3, h4, h5, h6, span, div, p, button, label, input, select {
            font-size: calc(100% + 2px) !important;
            line-height: 1.6 !important;
          }
          /* High contrast: make backgrounds lighter/darker and text sharper */
          main, div, section, article {
            text-shadow: none !important;
          }
          button {
            border: 2.5px solid #000000 !important;
            font-weight: 800 !important;
            background: #ffffff !important;
            color: #000000 !important;
          }
          /* Keep level badges readable */
          .badge, [class*="LevelBadge"] {
            border: 2px solid #000000 !important;
            font-weight: 900 !important;
            color: #000000 !important;
            background: #ffffff !important;
          }
        `}}),s.jsxs(Bx,{children:[s.jsx(Ux,{children:v()},e),s.jsx(bx,{activeScreen:e,onNavigate:t})]})]})};Ll.createRoot(document.getElementById("root")).render(s.jsx(pe.StrictMode,{children:s.jsx(Wx,{})}));
