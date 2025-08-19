function Dj(e,n){for(var r=0;r<n.length;r++){const o=n[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const c=Object.getOwnPropertyDescriptor(o,s);c&&Object.defineProperty(e,s,c.get?c:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();function el(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Gb(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var n=e.default;if(typeof n=="function"){var r=function o(){var s=!1;try{s=this instanceof o}catch{}return s?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}),r}var lm={exports:{}},Ns={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy;function Aj(){if(Wy)return Ns;Wy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(o,s,c){var d=null;if(c!==void 0&&(d=""+c),s.key!==void 0&&(d=""+s.key),"key"in s){c={};for(var h in s)h!=="key"&&(c[h]=s[h])}else c=s;return s=c.ref,{$$typeof:e,type:o,key:d,ref:s!==void 0?s:null,props:c}}return Ns.Fragment=n,Ns.jsx=r,Ns.jsxs=r,Ns}var Jy;function Mj(){return Jy||(Jy=1,lm.exports=Aj()),lm.exports}var u=Mj(),cm={exports:{}},Be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function kj(){if(ev)return Be;ev=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function b(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function E(A,Y,se){this.props=A,this.context=Y,this.refs=R,this.updater=se||S}E.prototype.isReactComponent={},E.prototype.setState=function(A,Y){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Y,"setState")},E.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function N(){}N.prototype=E.prototype;function _(A,Y,se){this.props=A,this.context=Y,this.refs=R,this.updater=se||S}var O=_.prototype=new N;O.constructor=_,w(O,E.prototype),O.isPureReactComponent=!0;var M=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},T=Object.prototype.hasOwnProperty;function k(A,Y,se,ne,ce,Ee){return se=Ee.ref,{$$typeof:e,type:A,key:Y,ref:se!==void 0?se:null,props:Ee}}function L(A,Y){return k(A.type,Y,void 0,void 0,void 0,A.props)}function H(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function G(A){var Y={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(se){return Y[se]})}var W=/\/+/g;function te(A,Y){return typeof A=="object"&&A!==null&&A.key!=null?G(""+A.key):Y.toString(36)}function le(){}function de(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(le,le):(A.status="pending",A.then(function(Y){A.status==="pending"&&(A.status="fulfilled",A.value=Y)},function(Y){A.status==="pending"&&(A.status="rejected",A.reason=Y)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function re(A,Y,se,ne,ce){var Ee=typeof A;(Ee==="undefined"||Ee==="boolean")&&(A=null);var fe=!1;if(A===null)fe=!0;else switch(Ee){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(A.$$typeof){case e:case n:fe=!0;break;case g:return fe=A._init,re(fe(A._payload),Y,se,ne,ce)}}if(fe)return ce=ce(A),fe=ne===""?"."+te(A,0):ne,M(ce)?(se="",fe!=null&&(se=fe.replace(W,"$&/")+"/"),re(ce,Y,se,"",function(Rt){return Rt})):ce!=null&&(H(ce)&&(ce=L(ce,se+(ce.key==null||A&&A.key===ce.key?"":(""+ce.key).replace(W,"$&/")+"/")+fe)),Y.push(ce)),1;fe=0;var nt=ne===""?".":ne+":";if(M(A))for(var $e=0;$e<A.length;$e++)ne=A[$e],Ee=nt+te(ne,$e),fe+=re(ne,Y,se,Ee,ce);else if($e=b(A),typeof $e=="function")for(A=$e.call(A),$e=0;!(ne=A.next()).done;)ne=ne.value,Ee=nt+te(ne,$e++),fe+=re(ne,Y,se,Ee,ce);else if(Ee==="object"){if(typeof A.then=="function")return re(de(A),Y,se,ne,ce);throw Y=String(A),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return fe}function U(A,Y,se){if(A==null)return A;var ne=[],ce=0;return re(A,ne,"","",function(Ee){return Y.call(se,Ee,ce++)}),ne}function X(A){if(A._status===-1){var Y=A._result;Y=Y(),Y.then(function(se){(A._status===0||A._status===-1)&&(A._status=1,A._result=se)},function(se){(A._status===0||A._status===-1)&&(A._status=2,A._result=se)}),A._status===-1&&(A._status=0,A._result=Y)}if(A._status===1)return A._result.default;throw A._result}var J=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function me(){}return Be.Children={map:U,forEach:function(A,Y,se){U(A,function(){Y.apply(this,arguments)},se)},count:function(A){var Y=0;return U(A,function(){Y++}),Y},toArray:function(A){return U(A,function(Y){return Y})||[]},only:function(A){if(!H(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Be.Component=E,Be.Fragment=r,Be.Profiler=s,Be.PureComponent=_,Be.StrictMode=o,Be.Suspense=f,Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Be.__COMPILER_RUNTIME={__proto__:null,c:function(A){return D.H.useMemoCache(A)}},Be.cache=function(A){return function(){return A.apply(null,arguments)}},Be.cloneElement=function(A,Y,se){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ne=w({},A.props),ce=A.key,Ee=void 0;if(Y!=null)for(fe in Y.ref!==void 0&&(Ee=void 0),Y.key!==void 0&&(ce=""+Y.key),Y)!T.call(Y,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&Y.ref===void 0||(ne[fe]=Y[fe]);var fe=arguments.length-2;if(fe===1)ne.children=se;else if(1<fe){for(var nt=Array(fe),$e=0;$e<fe;$e++)nt[$e]=arguments[$e+2];ne.children=nt}return k(A.type,ce,void 0,void 0,Ee,ne)},Be.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:c,_context:A},A},Be.createElement=function(A,Y,se){var ne,ce={},Ee=null;if(Y!=null)for(ne in Y.key!==void 0&&(Ee=""+Y.key),Y)T.call(Y,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(ce[ne]=Y[ne]);var fe=arguments.length-2;if(fe===1)ce.children=se;else if(1<fe){for(var nt=Array(fe),$e=0;$e<fe;$e++)nt[$e]=arguments[$e+2];ce.children=nt}if(A&&A.defaultProps)for(ne in fe=A.defaultProps,fe)ce[ne]===void 0&&(ce[ne]=fe[ne]);return k(A,Ee,void 0,void 0,null,ce)},Be.createRef=function(){return{current:null}},Be.forwardRef=function(A){return{$$typeof:h,render:A}},Be.isValidElement=H,Be.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:X}},Be.memo=function(A,Y){return{$$typeof:p,type:A,compare:Y===void 0?null:Y}},Be.startTransition=function(A){var Y=D.T,se={};D.T=se;try{var ne=A(),ce=D.S;ce!==null&&ce(se,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(me,J)}catch(Ee){J(Ee)}finally{D.T=Y}},Be.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Be.use=function(A){return D.H.use(A)},Be.useActionState=function(A,Y,se){return D.H.useActionState(A,Y,se)},Be.useCallback=function(A,Y){return D.H.useCallback(A,Y)},Be.useContext=function(A){return D.H.useContext(A)},Be.useDebugValue=function(){},Be.useDeferredValue=function(A,Y){return D.H.useDeferredValue(A,Y)},Be.useEffect=function(A,Y,se){var ne=D.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ne.useEffect(A,Y)},Be.useId=function(){return D.H.useId()},Be.useImperativeHandle=function(A,Y,se){return D.H.useImperativeHandle(A,Y,se)},Be.useInsertionEffect=function(A,Y){return D.H.useInsertionEffect(A,Y)},Be.useLayoutEffect=function(A,Y){return D.H.useLayoutEffect(A,Y)},Be.useMemo=function(A,Y){return D.H.useMemo(A,Y)},Be.useOptimistic=function(A,Y){return D.H.useOptimistic(A,Y)},Be.useReducer=function(A,Y,se){return D.H.useReducer(A,Y,se)},Be.useRef=function(A){return D.H.useRef(A)},Be.useState=function(A){return D.H.useState(A)},Be.useSyncExternalStore=function(A,Y,se){return D.H.useSyncExternalStore(A,Y,se)},Be.useTransition=function(){return D.H.useTransition()},Be.version="19.1.1",Be}var tv;function vu(){return tv||(tv=1,cm.exports=kj()),cm.exports}var v=vu();const Ne=el(v),Lj=Dj({__proto__:null,default:Ne},[v]);var um={exports:{}},Ts={},dm={exports:{}},fm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function zj(){return av||(av=1,function(e){function n(U,X){var J=U.length;U.push(X);e:for(;0<J;){var me=J-1>>>1,A=U[me];if(0<s(A,X))U[me]=X,U[J]=A,J=me;else break e}}function r(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var X=U[0],J=U.pop();if(J!==X){U[0]=J;e:for(var me=0,A=U.length,Y=A>>>1;me<Y;){var se=2*(me+1)-1,ne=U[se],ce=se+1,Ee=U[ce];if(0>s(ne,J))ce<A&&0>s(Ee,ne)?(U[me]=Ee,U[ce]=J,me=ce):(U[me]=ne,U[se]=J,me=se);else if(ce<A&&0>s(Ee,J))U[me]=Ee,U[ce]=J,me=ce;else break e}}return X}function s(U,X){var J=U.sortIndex-X.sortIndex;return J!==0?J:U.id-X.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var f=[],p=[],g=1,x=null,b=3,S=!1,w=!1,R=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function M(U){for(var X=r(p);X!==null;){if(X.callback===null)o(p);else if(X.startTime<=U)o(p),X.sortIndex=X.expirationTime,n(f,X);else break;X=r(p)}}function D(U){if(R=!1,M(U),!w)if(r(f)!==null)w=!0,T||(T=!0,te());else{var X=r(p);X!==null&&re(D,X.startTime-U)}}var T=!1,k=-1,L=5,H=-1;function G(){return E?!0:!(e.unstable_now()-H<L)}function W(){if(E=!1,T){var U=e.unstable_now();H=U;var X=!0;try{e:{w=!1,R&&(R=!1,_(k),k=-1),S=!0;var J=b;try{t:{for(M(U),x=r(f);x!==null&&!(x.expirationTime>U&&G());){var me=x.callback;if(typeof me=="function"){x.callback=null,b=x.priorityLevel;var A=me(x.expirationTime<=U);if(U=e.unstable_now(),typeof A=="function"){x.callback=A,M(U),X=!0;break t}x===r(f)&&o(f),M(U)}else o(f);x=r(f)}if(x!==null)X=!0;else{var Y=r(p);Y!==null&&re(D,Y.startTime-U),X=!1}}break e}finally{x=null,b=J,S=!1}X=void 0}}finally{X?te():T=!1}}}var te;if(typeof O=="function")te=function(){O(W)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,de=le.port2;le.port1.onmessage=W,te=function(){de.postMessage(null)}}else te=function(){N(W,0)};function re(U,X){k=N(function(){U(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(U){switch(b){case 1:case 2:case 3:var X=3;break;default:X=b}var J=b;b=X;try{return U()}finally{b=J}},e.unstable_requestPaint=function(){E=!0},e.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=b;b=U;try{return X()}finally{b=J}},e.unstable_scheduleCallback=function(U,X,J){var me=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,U){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=J+A,U={id:g++,callback:X,priorityLevel:U,startTime:J,expirationTime:A,sortIndex:-1},J>me?(U.sortIndex=J,n(p,U),r(f)===null&&U===r(p)&&(R?(_(k),k=-1):R=!0,re(D,J-me))):(U.sortIndex=A,n(f,U),w||S||(w=!0,T||(T=!0,te()))),U},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(U){var X=b;return function(){var J=b;b=X;try{return U.apply(this,arguments)}finally{b=J}}}}(fm)),fm}var nv;function Uj(){return nv||(nv=1,dm.exports=zj()),dm.exports}var mm={exports:{}},Vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function Hj(){if(rv)return Vt;rv=1;var e=vu();function n(f){var p="https://react.dev/errors/"+f;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+f+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(f,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:x==null?null:""+x,children:f,containerInfo:p,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,p){if(f==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Vt.createPortal=function(f,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return c(f,p,null,g)},Vt.flushSync=function(f){var p=d.T,g=o.p;try{if(d.T=null,o.p=2,f)return f()}finally{d.T=p,o.p=g,o.d.f()}},Vt.preconnect=function(f,p){typeof f=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(f,p))},Vt.prefetchDNS=function(f){typeof f=="string"&&o.d.D(f)},Vt.preinit=function(f,p){if(typeof f=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?o.d.S(f,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:S}):g==="script"&&o.d.X(f,{crossOrigin:x,integrity:b,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Vt.preinitModule=function(f,p){if(typeof f=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);o.d.M(f,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(f)},Vt.preload=function(f,p){if(typeof f=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);o.d.L(f,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Vt.preloadModule=function(f,p){if(typeof f=="string")if(p){var g=h(p.as,p.crossOrigin);o.d.m(f,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(f)},Vt.requestFormReset=function(f){o.d.r(f)},Vt.unstable_batchedUpdates=function(f,p){return f(p)},Vt.useFormState=function(f,p,g){return d.H.useFormState(f,p,g)},Vt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Vt.version="19.1.1",Vt}var iv;function Xb(){if(iv)return mm.exports;iv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),mm.exports=Hj(),mm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function Bj(){if(ov)return Ts;ov=1;var e=Uj(),n=vu(),r=Xb();function o(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)a+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var a=t,i=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(i=a.return),t=a.return;while(t)}return a.tag===3?i:null}function d(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(o(188))}function f(t){var a=t.alternate;if(!a){if(a=c(t),a===null)throw Error(o(188));return a!==t?null:t}for(var i=t,l=a;;){var m=i.return;if(m===null)break;var y=m.alternate;if(y===null){if(l=m.return,l!==null){i=l;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===i)return h(m),t;if(y===l)return h(m),a;y=y.sibling}throw Error(o(188))}if(i.return!==l.return)i=m,l=y;else{for(var j=!1,C=m.child;C;){if(C===i){j=!0,i=m,l=y;break}if(C===l){j=!0,l=m,i=y;break}C=C.sibling}if(!j){for(C=y.child;C;){if(C===i){j=!0,i=y,l=m;break}if(C===l){j=!0,l=y,i=m;break}C=C.sibling}if(!j)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:a}function p(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=p(t),a!==null)return a;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),_=Symbol.for("react.consumer"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),G=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case E:return"Profiler";case R:return"StrictMode";case D:return"Suspense";case T:return"SuspenseList";case H:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case O:return(t.displayName||"Context")+".Provider";case _:return(t._context.displayName||"Context")+".Consumer";case M:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return a=t.displayName||null,a!==null?a:de(t.type)||"Memo";case L:a=t._payload,t=t._init;try{return de(t(a))}catch{}}return null}var re=Array.isArray,U=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},me=[],A=-1;function Y(t){return{current:t}}function se(t){0>A||(t.current=me[A],me[A]=null,A--)}function ne(t,a){A++,me[A]=t.current,t.current=a}var ce=Y(null),Ee=Y(null),fe=Y(null),nt=Y(null);function $e(t,a){switch(ne(fe,a),ne(Ee,t),ne(ce,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?Ny(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=Ny(a),t=Ty(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(ce),ne(ce,t)}function Rt(){se(ce),se(Ee),se(fe)}function Je(t){t.memoizedState!==null&&ne(nt,t);var a=ce.current,i=Ty(a,t.type);a!==i&&(ne(Ee,t),ne(ce,i))}function Nt(t){Ee.current===t&&(se(ce),se(Ee)),nt.current===t&&(se(nt),ws._currentValue=J)}var ea=Object.prototype.hasOwnProperty,oa=e.unstable_scheduleCallback,Tt=e.unstable_cancelCallback,We=e.unstable_shouldYield,Qa=e.unstable_requestPaint,gt=e.unstable_now,Yr=e.unstable_getCurrentPriorityLevel,Zn=e.unstable_ImmediatePriority,sa=e.unstable_UserBlockingPriority,Sa=e.unstable_NormalPriority,la=e.unstable_LowPriority,Ea=e.unstable_IdlePriority,Ka=e.log,rn=e.unstable_setDisableYieldValue,Me=null,Ve=null;function Yt(t){if(typeof Ka=="function"&&rn(t),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Me,t)}catch{}}var Ft=Math.clz32?Math.clz32:Sl,nd=Math.log,on=Math.LN2;function Sl(t){return t>>>=0,t===0?32:31-(nd(t)/on|0)|0}var Fr=256,qr=4194304;function wn(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ir(t,a,i){var l=t.pendingLanes;if(l===0)return 0;var m=0,y=t.suspendedLanes,j=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~y,l!==0?m=wn(l):(j&=C,j!==0?m=wn(j):i||(i=C&~t,i!==0&&(m=wn(i))))):(C=l&~y,C!==0?m=wn(C):j!==0?m=wn(j):i||(i=l&~t,i!==0&&(m=wn(i)))),m===0?0:a!==0&&a!==m&&(a&y)===0&&(y=m&-m,i=a&-a,y>=i||y===32&&(i&4194048)!==0)?a:m}function sn(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function El(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ri(){var t=Fr;return Fr<<=1,(Fr&4194048)===0&&(Fr=256),t}function jl(){var t=qr;return qr<<=1,(qr&62914560)===0&&(qr=4194304),t}function Ni(t){for(var a=[],i=0;31>i;i++)a.push(t);return a}function Gr(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Rl(t,a,i,l,m,y){var j=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var C=t.entanglements,z=t.expirationTimes,I=t.hiddenUpdates;for(i=j&~i;0<i;){var ee=31-Ft(i),ie=1<<ee;C[ee]=0,z[ee]=-1;var V=I[ee];if(V!==null)for(I[ee]=null,ee=0;ee<V.length;ee++){var Q=V[ee];Q!==null&&(Q.lane&=-536870913)}i&=~ie}l!==0&&Xr(t,l,0),y!==0&&m===0&&t.tag!==0&&(t.suspendedLanes|=y&~(j&~a))}function Xr(t,a,i){t.pendingLanes|=a,t.suspendedLanes&=~a;var l=31-Ft(a);t.entangledLanes|=a,t.entanglements[l]=t.entanglements[l]|1073741824|i&4194090}function Vr(t,a){var i=t.entangledLanes|=a;for(t=t.entanglements;i;){var l=31-Ft(i),m=1<<l;m&a|t[l]&a&&(t[l]|=a),i&=~m}}function Ao(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function B(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Gy(t.type))}function F(t,a){var i=X.p;try{return X.p=t,a()}finally{X.p=i}}var K=Math.random().toString(36).slice(2),oe="__reactFiber$"+K,ue="__reactProps$"+K,ye="__reactContainer$"+K,je="__reactEvents$"+K,be="__reactListeners$"+K,Ce="__reactHandles$"+K,Oe="__reactResources$"+K,xe="__reactMarker$"+K;function Re(t){delete t[oe],delete t[ue],delete t[je],delete t[be],delete t[Ce]}function Pe(t){var a=t[oe];if(a)return a;for(var i=t.parentNode;i;){if(a=i[ye]||i[oe]){if(i=a.alternate,a.child!==null||i!==null&&i.child!==null)for(t=Dy(t);t!==null;){if(i=t[oe])return i;t=Dy(t)}return a}t=i,i=t.parentNode}return null}function et(t){if(t=t[oe]||t[ye]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function yt(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(o(33))}function vt(t){var a=t[Oe];return a||(a=t[Oe]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ue(t){t[xe]=!0}var rt=new Set,ln={};function ja(t,a){ta(t,a),ta(t+"Capture",a)}function ta(t,a){for(ln[t]=a,t=0;t<a.length;t++)rt.add(a[t])}var ka=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ti={},Wn={};function Sn(t){return ea.call(Wn,t)?!0:ea.call(Ti,t)?!1:ka.test(t)?Wn[t]=!0:(Ti[t]=!0,!1)}function En(t,a,i){if(Sn(a))if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+i)}}function jn(t,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+i)}}function Ye(t,a,i,l){if(l===null)t.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(a,i,""+l)}}var Ct,Qr;function La(t){if(Ct===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);Ct=a&&a[1]||"",Qr=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+Qr}var ht=!1;function Jn(t,a){if(!t||ht)return"";ht=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(Q){var V=Q}Reflect.construct(t,[],ie)}else{try{ie.call()}catch(Q){V=Q}t.call(ie.prototype)}}else{try{throw Error()}catch(Q){V=Q}(ie=t())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(Q){if(Q&&V&&typeof Q.stack=="string")return[Q.stack,V.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var m=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");m&&m.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var y=l.DetermineComponentFrameRoot(),j=y[0],C=y[1];if(j&&C){var z=j.split(`
`),I=C.split(`
`);for(m=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;m<I.length&&!I[m].includes("DetermineComponentFrameRoot");)m++;if(l===z.length||m===I.length)for(l=z.length-1,m=I.length-1;1<=l&&0<=m&&z[l]!==I[m];)m--;for(;1<=l&&0<=m;l--,m--)if(z[l]!==I[m]){if(l!==1||m!==1)do if(l--,m--,0>m||z[l]!==I[m]){var ee=`
`+z[l].replace(" at new "," at ");return t.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",t.displayName)),ee}while(1<=l&&0<=m);break}}}finally{ht=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?La(i):""}function Nl(t){switch(t.tag){case 26:case 27:case 5:return La(t.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return Jn(t.type,!1);case 11:return Jn(t.type.render,!1);case 1:return Jn(t.type,!0);case 31:return La("Activity");default:return""}}function Tl(t){try{var a="";do a+=Nl(t),t=t.return;while(t);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function za(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wp(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function NE(t){var a=wp(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),l=""+t[a];if(!t.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var m=i.get,y=i.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return m.call(this)},set:function(j){l=""+j,y.call(this,j)}}),Object.defineProperty(t,a,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(j){l=""+j},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Cl(t){t._valueTracker||(t._valueTracker=NE(t))}function Sp(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var i=a.getValue(),l="";return t&&(l=wp(t)?t.checked?"true":"false":t.value),t=l,t!==i?(a.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var TE=/[\n"\\]/g;function Ua(t){return t.replace(TE,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function rd(t,a,i,l,m,y,j,C){t.name="",j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?t.type=j:t.removeAttribute("type"),a!=null?j==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+za(a)):t.value!==""+za(a)&&(t.value=""+za(a)):j!=="submit"&&j!=="reset"||t.removeAttribute("value"),a!=null?id(t,j,za(a)):i!=null?id(t,j,za(i)):l!=null&&t.removeAttribute("value"),m==null&&y!=null&&(t.defaultChecked=!!y),m!=null&&(t.checked=m&&typeof m!="function"&&typeof m!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+za(C):t.removeAttribute("name")}function Ep(t,a,i,l,m,y,j,C){if(y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.type=y),a!=null||i!=null){if(!(y!=="submit"&&y!=="reset"||a!=null))return;i=i!=null?""+za(i):"",a=a!=null?""+za(a):i,C||a===t.value||(t.value=a),t.defaultValue=a}l=l??m,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"&&(t.name=j)}function id(t,a,i){a==="number"&&_l(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Ci(t,a,i,l){if(t=t.options,a){a={};for(var m=0;m<i.length;m++)a["$"+i[m]]=!0;for(i=0;i<t.length;i++)m=a.hasOwnProperty("$"+t[i].value),t[i].selected!==m&&(t[i].selected=m),m&&l&&(t[i].defaultSelected=!0)}else{for(i=""+za(i),a=null,m=0;m<t.length;m++){if(t[m].value===i){t[m].selected=!0,l&&(t[m].defaultSelected=!0);return}a!==null||t[m].disabled||(a=t[m])}a!==null&&(a.selected=!0)}}function jp(t,a,i){if(a!=null&&(a=""+za(a),a!==t.value&&(t.value=a),i==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=i!=null?""+za(i):""}function Rp(t,a,i,l){if(a==null){if(l!=null){if(i!=null)throw Error(o(92));if(re(l)){if(1<l.length)throw Error(o(93));l=l[0]}i=l}i==null&&(i=""),a=i}i=za(a),t.defaultValue=i,l=t.textContent,l===i&&l!==""&&l!==null&&(t.value=l)}function _i(t,a){if(a){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=a;return}}t.textContent=a}var CE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Np(t,a,i){var l=a.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":l?t.setProperty(a,i):typeof i!="number"||i===0||CE.has(a)?a==="float"?t.cssFloat=i:t[a]=(""+i).trim():t[a]=i+"px"}function Tp(t,a,i){if(a!=null&&typeof a!="object")throw Error(o(62));if(t=t.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var m in a)l=a[m],a.hasOwnProperty(m)&&i[m]!==l&&Np(t,m,l)}else for(var y in a)a.hasOwnProperty(y)&&Np(t,y,a[y])}function od(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _E=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),OE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(t){return OE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var sd=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oi=null,Di=null;function Cp(t){var a=et(t);if(a&&(t=a.stateNode)){var i=t[ue]||null;e:switch(t=a.stateNode,a.type){case"input":if(rd(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),a=i.name,i.type==="radio"&&a!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Ua(""+a)+'"][type="radio"]'),a=0;a<i.length;a++){var l=i[a];if(l!==t&&l.form===t.form){var m=l[ue]||null;if(!m)throw Error(o(90));rd(l,m.value,m.defaultValue,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name)}}for(a=0;a<i.length;a++)l=i[a],l.form===t.form&&Sp(l)}break e;case"textarea":jp(t,i.value,i.defaultValue);break e;case"select":a=i.value,a!=null&&Ci(t,!!i.multiple,a,!1)}}}var cd=!1;function _p(t,a,i){if(cd)return t(a,i);cd=!0;try{var l=t(a);return l}finally{if(cd=!1,(Oi!==null||Di!==null)&&(pc(),Oi&&(a=Oi,t=Di,Di=Oi=null,Cp(a),t)))for(a=0;a<t.length;a++)Cp(t[a])}}function ko(t,a){var i=t.stateNode;if(i===null)return null;var l=i[ue]||null;if(l===null)return null;i=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,a,typeof i));return i}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=!1;if(Rn)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{ud=!1}var er=null,dd=null,Dl=null;function Op(){if(Dl)return Dl;var t,a=dd,i=a.length,l,m="value"in er?er.value:er.textContent,y=m.length;for(t=0;t<i&&a[t]===m[t];t++);var j=i-t;for(l=1;l<=j&&a[i-l]===m[y-l];l++);return Dl=m.slice(t,1<l?1-l:void 0)}function Al(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function Dp(){return!1}function ca(t){function a(i,l,m,y,j){this._reactName=i,this._targetInst=m,this.type=l,this.nativeEvent=y,this.target=j,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(i=t[C],this[C]=i?i(y):y[C]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Ml:Dp,this.isPropagationStopped=Dp,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),a}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=ca(Kr),zo=g({},Kr,{view:0,detail:0}),DE=ca(zo),fd,md,Uo,Ll=g({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(fd=t.screenX-Uo.screenX,md=t.screenY-Uo.screenY):md=fd=0,Uo=t),fd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),Ap=ca(Ll),AE=g({},Ll,{dataTransfer:0}),ME=ca(AE),kE=g({},zo,{relatedTarget:0}),hd=ca(kE),LE=g({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),zE=ca(LE),UE=g({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HE=ca(UE),BE=g({},Kr,{data:0}),Mp=ca(BE),$E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FE(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=YE[t])?!!a[t]:!1}function pd(){return FE}var qE=g({},zo,{key:function(t){if(t.key){var a=$E[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pd,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),IE=ca(qE),GE=g({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=ca(GE),XE=g({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pd}),VE=ca(XE),QE=g({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),KE=ca(QE),ZE=g({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WE=ca(ZE),JE=g({},Kr,{newState:0,oldState:0}),e2=ca(JE),t2=[9,13,27,32],gd=Rn&&"CompositionEvent"in window,Ho=null;Rn&&"documentMode"in document&&(Ho=document.documentMode);var a2=Rn&&"TextEvent"in window&&!Ho,Lp=Rn&&(!gd||Ho&&8<Ho&&11>=Ho),zp=" ",Up=!1;function Hp(t,a){switch(t){case"keyup":return t2.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function n2(t,a){switch(t){case"compositionend":return Bp(a);case"keypress":return a.which!==32?null:(Up=!0,zp);case"textInput":return t=a.data,t===zp&&Up?null:t;default:return null}}function r2(t,a){if(Ai)return t==="compositionend"||!gd&&Hp(t,a)?(t=Op(),Dl=dd=er=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Lp&&a.locale!=="ko"?null:a.data;default:return null}}var i2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!i2[t.type]:a==="textarea"}function Pp(t,a,i,l){Oi?Di?Di.push(l):Di=[l]:Oi=l,a=wc(a,"onChange"),0<a.length&&(i=new kl("onChange","change",null,i,l),t.push({event:i,listeners:a}))}var Bo=null,$o=null;function o2(t){wy(t,0)}function zl(t){var a=yt(t);if(Sp(a))return t}function Yp(t,a){if(t==="change")return a}var Fp=!1;if(Rn){var yd;if(Rn){var vd="oninput"in document;if(!vd){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),vd=typeof qp.oninput=="function"}yd=vd}else yd=!1;Fp=yd&&(!document.documentMode||9<document.documentMode)}function Ip(){Bo&&(Bo.detachEvent("onpropertychange",Gp),$o=Bo=null)}function Gp(t){if(t.propertyName==="value"&&zl($o)){var a=[];Pp(a,$o,t,ld(t)),_p(o2,a)}}function s2(t,a,i){t==="focusin"?(Ip(),Bo=a,$o=i,Bo.attachEvent("onpropertychange",Gp)):t==="focusout"&&Ip()}function l2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl($o)}function c2(t,a){if(t==="click")return zl(a)}function u2(t,a){if(t==="input"||t==="change")return zl(a)}function d2(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Ra=typeof Object.is=="function"?Object.is:d2;function Po(t,a){if(Ra(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var i=Object.keys(t),l=Object.keys(a);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var m=i[l];if(!ea.call(a,m)||!Ra(t[m],a[m]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vp(t,a){var i=Xp(t);t=0;for(var l;i;){if(i.nodeType===3){if(l=t+i.textContent.length,t<=a&&l>=a)return{node:i,offset:a-t};t=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Xp(i)}}function Qp(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Qp(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=_l(t.document);a instanceof t.HTMLIFrameElement;){try{var i=typeof a.contentWindow.location.href=="string"}catch{i=!1}if(i)t=a.contentWindow;else break;a=_l(t.document)}return a}function bd(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var f2=Rn&&"documentMode"in document&&11>=document.documentMode,Mi=null,xd=null,Yo=null,wd=!1;function Zp(t,a,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;wd||Mi==null||Mi!==_l(l)||(l=Mi,"selectionStart"in l&&bd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yo&&Po(Yo,l)||(Yo=l,l=wc(xd,"onSelect"),0<l.length&&(a=new kl("onSelect","select",null,a,i),t.push({event:a,listeners:l}),a.target=Mi)))}function Zr(t,a){var i={};return i[t.toLowerCase()]=a.toLowerCase(),i["Webkit"+t]="webkit"+a,i["Moz"+t]="moz"+a,i}var ki={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionrun:Zr("Transition","TransitionRun"),transitionstart:Zr("Transition","TransitionStart"),transitioncancel:Zr("Transition","TransitionCancel"),transitionend:Zr("Transition","TransitionEnd")},Sd={},Wp={};Rn&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function Wr(t){if(Sd[t])return Sd[t];if(!ki[t])return t;var a=ki[t],i;for(i in a)if(a.hasOwnProperty(i)&&i in Wp)return Sd[t]=a[i];return t}var Jp=Wr("animationend"),e0=Wr("animationiteration"),t0=Wr("animationstart"),m2=Wr("transitionrun"),h2=Wr("transitionstart"),p2=Wr("transitioncancel"),a0=Wr("transitionend"),n0=new Map,Ed="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ed.push("scrollEnd");function Za(t,a){n0.set(t,a),ja(a,[t])}var r0=new WeakMap;function Ha(t,a){if(typeof t=="object"&&t!==null){var i=r0.get(t);return i!==void 0?i:(a={value:t,source:a,stack:Tl(a)},r0.set(t,a),a)}return{value:t,source:a,stack:Tl(a)}}var Ba=[],Li=0,jd=0;function Ul(){for(var t=Li,a=jd=Li=0;a<t;){var i=Ba[a];Ba[a++]=null;var l=Ba[a];Ba[a++]=null;var m=Ba[a];Ba[a++]=null;var y=Ba[a];if(Ba[a++]=null,l!==null&&m!==null){var j=l.pending;j===null?m.next=m:(m.next=j.next,j.next=m),l.pending=m}y!==0&&i0(i,m,y)}}function Hl(t,a,i,l){Ba[Li++]=t,Ba[Li++]=a,Ba[Li++]=i,Ba[Li++]=l,jd|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Rd(t,a,i,l){return Hl(t,a,i,l),Bl(t)}function zi(t,a){return Hl(t,null,null,a),Bl(t)}function i0(t,a,i){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i);for(var m=!1,y=t.return;y!==null;)y.childLanes|=i,l=y.alternate,l!==null&&(l.childLanes|=i),y.tag===22&&(t=y.stateNode,t===null||t._visibility&1||(m=!0)),t=y,y=y.return;return t.tag===3?(y=t.stateNode,m&&a!==null&&(m=31-Ft(i),t=y.hiddenUpdates,l=t[m],l===null?t[m]=[a]:l.push(a),a.lane=i|536870912),y):null}function Bl(t){if(50<ms)throw ms=0,Af=null,Error(o(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Ui={};function g2(t,a,i,l){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Na(t,a,i,l){return new g2(t,a,i,l)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nn(t,a){var i=t.alternate;return i===null?(i=Na(t.tag,a,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=a,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,a=t.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function o0(t,a){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,a=i.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function $l(t,a,i,l,m,y){var j=0;if(l=t,typeof t=="function")Nd(t)&&(j=1);else if(typeof t=="string")j=vj(t,i,ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case H:return t=Na(31,i,a,m),t.elementType=H,t.lanes=y,t;case w:return Jr(i.children,m,y,a);case R:j=8,m|=24;break;case E:return t=Na(12,i,a,m|2),t.elementType=E,t.lanes=y,t;case D:return t=Na(13,i,a,m),t.elementType=D,t.lanes=y,t;case T:return t=Na(19,i,a,m),t.elementType=T,t.lanes=y,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:case O:j=10;break e;case _:j=9;break e;case M:j=11;break e;case k:j=14;break e;case L:j=16,l=null;break e}j=29,i=Error(o(130,t===null?"null":typeof t,"")),l=null}return a=Na(j,i,a,m),a.elementType=t,a.type=l,a.lanes=y,a}function Jr(t,a,i,l){return t=Na(7,t,l,a),t.lanes=i,t}function Td(t,a,i){return t=Na(6,t,null,a),t.lanes=i,t}function Cd(t,a,i){return a=Na(4,t.children!==null?t.children:[],t.key,a),a.lanes=i,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Hi=[],Bi=0,Pl=null,Yl=0,$a=[],Pa=0,ei=null,Tn=1,Cn="";function ti(t,a){Hi[Bi++]=Yl,Hi[Bi++]=Pl,Pl=t,Yl=a}function s0(t,a,i){$a[Pa++]=Tn,$a[Pa++]=Cn,$a[Pa++]=ei,ei=t;var l=Tn;t=Cn;var m=32-Ft(l)-1;l&=~(1<<m),i+=1;var y=32-Ft(a)+m;if(30<y){var j=m-m%5;y=(l&(1<<j)-1).toString(32),l>>=j,m-=j,Tn=1<<32-Ft(a)+m|i<<m|l,Cn=y+t}else Tn=1<<y|i<<m|l,Cn=t}function _d(t){t.return!==null&&(ti(t,1),s0(t,1,0))}function Od(t){for(;t===Pl;)Pl=Hi[--Bi],Hi[Bi]=null,Yl=Hi[--Bi],Hi[Bi]=null;for(;t===ei;)ei=$a[--Pa],$a[Pa]=null,Cn=$a[--Pa],$a[Pa]=null,Tn=$a[--Pa],$a[Pa]=null}var aa=null,bt=null,Ze=!1,ai=null,cn=!1,Dd=Error(o(519));function ni(t){var a=Error(o(418,""));throw Io(Ha(a,t)),Dd}function l0(t){var a=t.stateNode,i=t.type,l=t.memoizedProps;switch(a[oe]=t,a[ue]=l,i){case"dialog":Ge("cancel",a),Ge("close",a);break;case"iframe":case"object":case"embed":Ge("load",a);break;case"video":case"audio":for(i=0;i<ps.length;i++)Ge(ps[i],a);break;case"source":Ge("error",a);break;case"img":case"image":case"link":Ge("error",a),Ge("load",a);break;case"details":Ge("toggle",a);break;case"input":Ge("invalid",a),Ep(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Cl(a);break;case"select":Ge("invalid",a);break;case"textarea":Ge("invalid",a),Rp(a,l.value,l.defaultValue,l.children),Cl(a)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||a.textContent===""+i||l.suppressHydrationWarning===!0||Ry(a.textContent,i)?(l.popover!=null&&(Ge("beforetoggle",a),Ge("toggle",a)),l.onScroll!=null&&Ge("scroll",a),l.onScrollEnd!=null&&Ge("scrollend",a),l.onClick!=null&&(a.onclick=Sc),a=!0):a=!1,a||ni(t)}function c0(t){for(aa=t.return;aa;)switch(aa.tag){case 5:case 13:cn=!1;return;case 27:case 3:cn=!0;return;default:aa=aa.return}}function Fo(t){if(t!==aa)return!1;if(!Ze)return c0(t),Ze=!0,!1;var a=t.tag,i;if((i=a!==3&&a!==27)&&((i=a===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Vf(t.type,t.memoizedProps)),i=!i),i&&bt&&ni(t),c0(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(i=t.data,i==="/$"){if(a===0){bt=Ja(t.nextSibling);break e}a--}else i!=="$"&&i!=="$!"&&i!=="$?"||a++;t=t.nextSibling}bt=null}}else a===27?(a=bt,gr(t.type)?(t=Wf,Wf=null,bt=t):bt=a):bt=aa?Ja(t.stateNode.nextSibling):null;return!0}function qo(){bt=aa=null,Ze=!1}function u0(){var t=ai;return t!==null&&(fa===null?fa=t:fa.push.apply(fa,t),ai=null),t}function Io(t){ai===null?ai=[t]:ai.push(t)}var Ad=Y(null),ri=null,_n=null;function tr(t,a,i){ne(Ad,a._currentValue),a._currentValue=i}function On(t){t._currentValue=Ad.current,se(Ad)}function Md(t,a,i){for(;t!==null;){var l=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),t===i)break;t=t.return}}function kd(t,a,i,l){var m=t.child;for(m!==null&&(m.return=t);m!==null;){var y=m.dependencies;if(y!==null){var j=m.child;y=y.firstContext;e:for(;y!==null;){var C=y;y=m;for(var z=0;z<a.length;z++)if(C.context===a[z]){y.lanes|=i,C=y.alternate,C!==null&&(C.lanes|=i),Md(y.return,i,t),l||(j=null);break e}y=C.next}}else if(m.tag===18){if(j=m.return,j===null)throw Error(o(341));j.lanes|=i,y=j.alternate,y!==null&&(y.lanes|=i),Md(j,i,t),j=null}else j=m.child;if(j!==null)j.return=m;else for(j=m;j!==null;){if(j===t){j=null;break}if(m=j.sibling,m!==null){m.return=j.return,j=m;break}j=j.return}m=j}}function Go(t,a,i,l){t=null;for(var m=a,y=!1;m!==null;){if(!y){if((m.flags&524288)!==0)y=!0;else if((m.flags&262144)!==0)break}if(m.tag===10){var j=m.alternate;if(j===null)throw Error(o(387));if(j=j.memoizedProps,j!==null){var C=m.type;Ra(m.pendingProps.value,j.value)||(t!==null?t.push(C):t=[C])}}else if(m===nt.current){if(j=m.alternate,j===null)throw Error(o(387));j.memoizedState.memoizedState!==m.memoizedState.memoizedState&&(t!==null?t.push(ws):t=[ws])}m=m.return}t!==null&&kd(a,t,i,l),a.flags|=262144}function Fl(t){for(t=t.firstContext;t!==null;){if(!Ra(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ii(t){ri=t,_n=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xt(t){return d0(ri,t)}function ql(t,a){return ri===null&&ii(t),d0(t,a)}function d0(t,a){var i=a._currentValue;if(a={context:a,memoizedValue:i,next:null},_n===null){if(t===null)throw Error(o(308));_n=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else _n=_n.next=a;return i}var y2=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(i,l){t.push(l)}};this.abort=function(){a.aborted=!0,t.forEach(function(i){return i()})}},v2=e.unstable_scheduleCallback,b2=e.unstable_NormalPriority,Mt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ld(){return{controller:new y2,data:new Map,refCount:0}}function Xo(t){t.refCount--,t.refCount===0&&v2(b2,function(){t.controller.abort()})}var Vo=null,zd=0,$i=0,Pi=null;function x2(t,a){if(Vo===null){var i=Vo=[];zd=0,$i=Bf(),Pi={status:"pending",value:void 0,then:function(l){i.push(l)}}}return zd++,a.then(f0,f0),a}function f0(){if(--zd===0&&Vo!==null){Pi!==null&&(Pi.status="fulfilled");var t=Vo;Vo=null,$i=0,Pi=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function w2(t,a){var i=[],l={status:"pending",value:null,reason:null,then:function(m){i.push(m)}};return t.then(function(){l.status="fulfilled",l.value=a;for(var m=0;m<i.length;m++)(0,i[m])(a)},function(m){for(l.status="rejected",l.reason=m,m=0;m<i.length;m++)(0,i[m])(void 0)}),l}var m0=U.S;U.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&x2(t,a),m0!==null&&m0(t,a)};var oi=Y(null);function Ud(){var t=oi.current;return t!==null?t:ut.pooledCache}function Il(t,a){a===null?ne(oi,oi.current):ne(oi,a.pool)}function h0(){var t=Ud();return t===null?null:{parent:Mt._currentValue,pool:t}}var Qo=Error(o(460)),p0=Error(o(474)),Gl=Error(o(542)),Hd={then:function(){}};function g0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xl(){}function y0(t,a,i){switch(i=t[i],i===void 0?t.push(a):i!==a&&(a.then(Xl,Xl),a=i),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,b0(t),t;default:if(typeof a.status=="string")a.then(Xl,Xl);else{if(t=ut,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=a,t.status="pending",t.then(function(l){if(a.status==="pending"){var m=a;m.status="fulfilled",m.value=l}},function(l){if(a.status==="pending"){var m=a;m.status="rejected",m.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,b0(t),t}throw Ko=a,Qo}}var Ko=null;function v0(){if(Ko===null)throw Error(o(459));var t=Ko;return Ko=null,t}function b0(t){if(t===Qo||t===Gl)throw Error(o(483))}var ar=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $d(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function nr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rr(t,a,i){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(tt&2)!==0){var m=l.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),l.pending=a,a=Bl(t),i0(t,null,i),a}return Hl(t,l,a,i),Bl(t)}function Zo(t,a,i){if(a=a.updateQueue,a!==null&&(a=a.shared,(i&4194048)!==0)){var l=a.lanes;l&=t.pendingLanes,i|=l,a.lanes=i,Vr(t,i)}}function Pd(t,a){var i=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var m=null,y=null;if(i=i.firstBaseUpdate,i!==null){do{var j={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};y===null?m=y=j:y=y.next=j,i=i.next}while(i!==null);y===null?m=y=a:y=y.next=a}else m=y=a;i={baseState:l.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:l.shared,callbacks:l.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=a:t.next=a,i.lastBaseUpdate=a}var Yd=!1;function Wo(){if(Yd){var t=Pi;if(t!==null)throw t}}function Jo(t,a,i,l){Yd=!1;var m=t.updateQueue;ar=!1;var y=m.firstBaseUpdate,j=m.lastBaseUpdate,C=m.shared.pending;if(C!==null){m.shared.pending=null;var z=C,I=z.next;z.next=null,j===null?y=I:j.next=I,j=z;var ee=t.alternate;ee!==null&&(ee=ee.updateQueue,C=ee.lastBaseUpdate,C!==j&&(C===null?ee.firstBaseUpdate=I:C.next=I,ee.lastBaseUpdate=z))}if(y!==null){var ie=m.baseState;j=0,ee=I=z=null,C=y;do{var V=C.lane&-536870913,Q=V!==C.lane;if(Q?(Xe&V)===V:(l&V)===V){V!==0&&V===$i&&(Yd=!0),ee!==null&&(ee=ee.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var ke=t,De=C;V=a;var st=i;switch(De.tag){case 1:if(ke=De.payload,typeof ke=="function"){ie=ke.call(st,ie,V);break e}ie=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=De.payload,V=typeof ke=="function"?ke.call(st,ie,V):ke,V==null)break e;ie=g({},ie,V);break e;case 2:ar=!0}}V=C.callback,V!==null&&(t.flags|=64,Q&&(t.flags|=8192),Q=m.callbacks,Q===null?m.callbacks=[V]:Q.push(V))}else Q={lane:V,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ee===null?(I=ee=Q,z=ie):ee=ee.next=Q,j|=V;if(C=C.next,C===null){if(C=m.shared.pending,C===null)break;Q=C,C=Q.next,Q.next=null,m.lastBaseUpdate=Q,m.shared.pending=null}}while(!0);ee===null&&(z=ie),m.baseState=z,m.firstBaseUpdate=I,m.lastBaseUpdate=ee,y===null&&(m.shared.lanes=0),fr|=j,t.lanes=j,t.memoizedState=ie}}function x0(t,a){if(typeof t!="function")throw Error(o(191,t));t.call(a)}function w0(t,a){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)x0(i[t],a)}var Yi=Y(null),Vl=Y(0);function S0(t,a){t=Un,ne(Vl,t),ne(Yi,a),Un=t|a.baseLanes}function Fd(){ne(Vl,Un),ne(Yi,Yi.current)}function qd(){Un=Vl.current,se(Yi),se(Vl)}var ir=0,Fe=null,it=null,_t=null,Ql=!1,Fi=!1,si=!1,Kl=0,es=0,qi=null,S2=0;function wt(){throw Error(o(321))}function Id(t,a){if(a===null)return!1;for(var i=0;i<a.length&&i<t.length;i++)if(!Ra(t[i],a[i]))return!1;return!0}function Gd(t,a,i,l,m,y){return ir=y,Fe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,U.H=t===null||t.memoizedState===null?ig:og,si=!1,y=i(l,m),si=!1,Fi&&(y=j0(a,i,l,m)),E0(t),y}function E0(t){U.H=ac;var a=it!==null&&it.next!==null;if(ir=0,_t=it=Fe=null,Ql=!1,es=0,qi=null,a)throw Error(o(300));t===null||zt||(t=t.dependencies,t!==null&&Fl(t)&&(zt=!0))}function j0(t,a,i,l){Fe=t;var m=0;do{if(Fi&&(qi=null),es=0,Fi=!1,25<=m)throw Error(o(301));if(m+=1,_t=it=null,t.updateQueue!=null){var y=t.updateQueue;y.lastEffect=null,y.events=null,y.stores=null,y.memoCache!=null&&(y.memoCache.index=0)}U.H=_2,y=a(i,l)}while(Fi);return y}function E2(){var t=U.H,a=t.useState()[0];return a=typeof a.then=="function"?ts(a):a,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(Fe.flags|=1024),a}function Xd(){var t=Kl!==0;return Kl=0,t}function Vd(t,a,i){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~i}function Qd(t){if(Ql){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Ql=!1}ir=0,_t=it=Fe=null,Fi=!1,es=Kl=0,qi=null}function ua(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Fe.memoizedState=_t=t:_t=_t.next=t,_t}function Ot(){if(it===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var a=_t===null?Fe.memoizedState:_t.next;if(a!==null)_t=a,it=t;else{if(t===null)throw Fe.alternate===null?Error(o(467)):Error(o(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},_t===null?Fe.memoizedState=_t=t:_t=_t.next=t}return _t}function Kd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(t){var a=es;return es+=1,qi===null&&(qi=[]),t=y0(qi,t,a),a=Fe,(_t===null?a.memoizedState:_t.next)===null&&(a=a.alternate,U.H=a===null||a.memoizedState===null?ig:og),t}function Zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ts(t);if(t.$$typeof===O)return Xt(t)}throw Error(o(438,String(t)))}function Zd(t){var a=null,i=Fe.updateQueue;if(i!==null&&(a=i.memoCache),a==null){var l=Fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(m){return m.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),i===null&&(i=Kd(),Fe.updateQueue=i),i.memoCache=a,i=a.data[a.index],i===void 0)for(i=a.data[a.index]=Array(t),l=0;l<t;l++)i[l]=G;return a.index++,i}function Dn(t,a){return typeof a=="function"?a(t):a}function Wl(t){var a=Ot();return Wd(a,it,t)}function Wd(t,a,i){var l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=i;var m=t.baseQueue,y=l.pending;if(y!==null){if(m!==null){var j=m.next;m.next=y.next,y.next=j}a.baseQueue=m=y,l.pending=null}if(y=t.baseState,m===null)t.memoizedState=y;else{a=m.next;var C=j=null,z=null,I=a,ee=!1;do{var ie=I.lane&-536870913;if(ie!==I.lane?(Xe&ie)===ie:(ir&ie)===ie){var V=I.revertLane;if(V===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),ie===$i&&(ee=!0);else if((ir&V)===V){I=I.next,V===$i&&(ee=!0);continue}else ie={lane:0,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},z===null?(C=z=ie,j=y):z=z.next=ie,Fe.lanes|=V,fr|=V;ie=I.action,si&&i(y,ie),y=I.hasEagerState?I.eagerState:i(y,ie)}else V={lane:ie,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},z===null?(C=z=V,j=y):z=z.next=V,Fe.lanes|=ie,fr|=ie;I=I.next}while(I!==null&&I!==a);if(z===null?j=y:z.next=C,!Ra(y,t.memoizedState)&&(zt=!0,ee&&(i=Pi,i!==null)))throw i;t.memoizedState=y,t.baseState=j,t.baseQueue=z,l.lastRenderedState=y}return m===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Jd(t){var a=Ot(),i=a.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var l=i.dispatch,m=i.pending,y=a.memoizedState;if(m!==null){i.pending=null;var j=m=m.next;do y=t(y,j.action),j=j.next;while(j!==m);Ra(y,a.memoizedState)||(zt=!0),a.memoizedState=y,a.baseQueue===null&&(a.baseState=y),i.lastRenderedState=y}return[y,l]}function R0(t,a,i){var l=Fe,m=Ot(),y=Ze;if(y){if(i===void 0)throw Error(o(407));i=i()}else i=a();var j=!Ra((it||m).memoizedState,i);j&&(m.memoizedState=i,zt=!0),m=m.queue;var C=C0.bind(null,l,m,t);if(as(2048,8,C,[t]),m.getSnapshot!==a||j||_t!==null&&_t.memoizedState.tag&1){if(l.flags|=2048,Ii(9,Jl(),T0.bind(null,l,m,i,a),null),ut===null)throw Error(o(349));y||(ir&124)!==0||N0(l,a,i)}return i}function N0(t,a,i){t.flags|=16384,t={getSnapshot:a,value:i},a=Fe.updateQueue,a===null?(a=Kd(),Fe.updateQueue=a,a.stores=[t]):(i=a.stores,i===null?a.stores=[t]:i.push(t))}function T0(t,a,i,l){a.value=i,a.getSnapshot=l,_0(a)&&O0(t)}function C0(t,a,i){return i(function(){_0(a)&&O0(t)})}function _0(t){var a=t.getSnapshot;t=t.value;try{var i=a();return!Ra(t,i)}catch{return!0}}function O0(t){var a=zi(t,2);a!==null&&Da(a,t,2)}function ef(t){var a=ua();if(typeof t=="function"){var i=t;if(t=i(),si){Yt(!0);try{i()}finally{Yt(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:t},a}function D0(t,a,i,l){return t.baseState=i,Wd(t,it,typeof l=="function"?l:Dn)}function j2(t,a,i,l,m){if(tc(t))throw Error(o(485));if(t=a.action,t!==null){var y={payload:m,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(j){y.listeners.push(j)}};U.T!==null?i(!0):y.isTransition=!1,l(y),i=a.pending,i===null?(y.next=a.pending=y,A0(a,y)):(y.next=i.next,a.pending=i.next=y)}}function A0(t,a){var i=a.action,l=a.payload,m=t.state;if(a.isTransition){var y=U.T,j={};U.T=j;try{var C=i(m,l),z=U.S;z!==null&&z(j,C),M0(t,a,C)}catch(I){tf(t,a,I)}finally{U.T=y}}else try{y=i(m,l),M0(t,a,y)}catch(I){tf(t,a,I)}}function M0(t,a,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){k0(t,a,l)},function(l){return tf(t,a,l)}):k0(t,a,i)}function k0(t,a,i){a.status="fulfilled",a.value=i,L0(a),t.state=i,a=t.pending,a!==null&&(i=a.next,i===a?t.pending=null:(i=i.next,a.next=i,A0(t,i)))}function tf(t,a,i){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=i,L0(a),a=a.next;while(a!==l)}t.action=null}function L0(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function z0(t,a){return a}function U0(t,a){if(Ze){var i=ut.formState;if(i!==null){e:{var l=Fe;if(Ze){if(bt){t:{for(var m=bt,y=cn;m.nodeType!==8;){if(!y){m=null;break t}if(m=Ja(m.nextSibling),m===null){m=null;break t}}y=m.data,m=y==="F!"||y==="F"?m:null}if(m){bt=Ja(m.nextSibling),l=m.data==="F!";break e}}ni(l)}l=!1}l&&(a=i[0])}}return i=ua(),i.memoizedState=i.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z0,lastRenderedState:a},i.queue=l,i=ag.bind(null,Fe,l),l.dispatch=i,l=ef(!1),y=sf.bind(null,Fe,!1,l.queue),l=ua(),m={state:a,dispatch:null,action:t,pending:null},l.queue=m,i=j2.bind(null,Fe,m,y,i),m.dispatch=i,l.memoizedState=t,[a,i,!1]}function H0(t){var a=Ot();return B0(a,it,t)}function B0(t,a,i){if(a=Wd(t,a,z0)[0],t=Wl(Dn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=ts(a)}catch(j){throw j===Qo?Gl:j}else l=a;a=Ot();var m=a.queue,y=m.dispatch;return i!==a.memoizedState&&(Fe.flags|=2048,Ii(9,Jl(),R2.bind(null,m,i),null)),[l,y,t]}function R2(t,a){t.action=a}function $0(t){var a=Ot(),i=it;if(i!==null)return B0(a,i,t);Ot(),a=a.memoizedState,i=Ot();var l=i.queue.dispatch;return i.memoizedState=t,[a,l,!1]}function Ii(t,a,i,l){return t={tag:t,create:i,deps:l,inst:a,next:null},a=Fe.updateQueue,a===null&&(a=Kd(),Fe.updateQueue=a),i=a.lastEffect,i===null?a.lastEffect=t.next=t:(l=i.next,i.next=t,t.next=l,a.lastEffect=t),t}function Jl(){return{destroy:void 0,resource:void 0}}function P0(){return Ot().memoizedState}function ec(t,a,i,l){var m=ua();l=l===void 0?null:l,Fe.flags|=t,m.memoizedState=Ii(1|a,Jl(),i,l)}function as(t,a,i,l){var m=Ot();l=l===void 0?null:l;var y=m.memoizedState.inst;it!==null&&l!==null&&Id(l,it.memoizedState.deps)?m.memoizedState=Ii(a,y,i,l):(Fe.flags|=t,m.memoizedState=Ii(1|a,y,i,l))}function Y0(t,a){ec(8390656,8,t,a)}function F0(t,a){as(2048,8,t,a)}function q0(t,a){return as(4,2,t,a)}function I0(t,a){return as(4,4,t,a)}function G0(t,a){if(typeof a=="function"){t=t();var i=a(t);return function(){typeof i=="function"?i():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function X0(t,a,i){i=i!=null?i.concat([t]):null,as(4,4,G0.bind(null,a,t),i)}function af(){}function V0(t,a){var i=Ot();a=a===void 0?null:a;var l=i.memoizedState;return a!==null&&Id(a,l[1])?l[0]:(i.memoizedState=[t,a],t)}function Q0(t,a){var i=Ot();a=a===void 0?null:a;var l=i.memoizedState;if(a!==null&&Id(a,l[1]))return l[0];if(l=t(),si){Yt(!0);try{t()}finally{Yt(!1)}}return i.memoizedState=[l,a],l}function nf(t,a,i){return i===void 0||(ir&1073741824)!==0?t.memoizedState=a:(t.memoizedState=i,t=Wg(),Fe.lanes|=t,fr|=t,i)}function K0(t,a,i,l){return Ra(i,a)?i:Yi.current!==null?(t=nf(t,i,l),Ra(t,a)||(zt=!0),t):(ir&42)===0?(zt=!0,t.memoizedState=i):(t=Wg(),Fe.lanes|=t,fr|=t,a)}function Z0(t,a,i,l,m){var y=X.p;X.p=y!==0&&8>y?y:8;var j=U.T,C={};U.T=C,sf(t,!1,a,i);try{var z=m(),I=U.S;if(I!==null&&I(C,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=w2(z,l);ns(t,a,ee,Oa(t))}else ns(t,a,l,Oa(t))}catch(ie){ns(t,a,{then:function(){},status:"rejected",reason:ie},Oa())}finally{X.p=y,U.T=j}}function N2(){}function rf(t,a,i,l){if(t.tag!==5)throw Error(o(476));var m=W0(t).queue;Z0(t,m,a,J,i===null?N2:function(){return J0(t),i(l)})}function W0(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:J},next:null};var i={};return a.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:i},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function J0(t){var a=W0(t).next.queue;ns(t,a,{},Oa())}function of(){return Xt(ws)}function eg(){return Ot().memoizedState}function tg(){return Ot().memoizedState}function T2(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var i=Oa();t=nr(i);var l=rr(a,t,i);l!==null&&(Da(l,a,i),Zo(l,a,i)),a={cache:Ld()},t.payload=a;return}a=a.return}}function C2(t,a,i){var l=Oa();i={lane:l,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},tc(t)?ng(a,i):(i=Rd(t,a,i,l),i!==null&&(Da(i,t,l),rg(i,a,l)))}function ag(t,a,i){var l=Oa();ns(t,a,i,l)}function ns(t,a,i,l){var m={lane:l,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(tc(t))ng(a,m);else{var y=t.alternate;if(t.lanes===0&&(y===null||y.lanes===0)&&(y=a.lastRenderedReducer,y!==null))try{var j=a.lastRenderedState,C=y(j,i);if(m.hasEagerState=!0,m.eagerState=C,Ra(C,j))return Hl(t,a,m,0),ut===null&&Ul(),!1}catch{}finally{}if(i=Rd(t,a,m,l),i!==null)return Da(i,t,l),rg(i,a,l),!0}return!1}function sf(t,a,i,l){if(l={lane:2,revertLane:Bf(),action:l,hasEagerState:!1,eagerState:null,next:null},tc(t)){if(a)throw Error(o(479))}else a=Rd(t,i,l,2),a!==null&&Da(a,t,2)}function tc(t){var a=t.alternate;return t===Fe||a!==null&&a===Fe}function ng(t,a){Fi=Ql=!0;var i=t.pending;i===null?a.next=a:(a.next=i.next,i.next=a),t.pending=a}function rg(t,a,i){if((i&4194048)!==0){var l=a.lanes;l&=t.pendingLanes,i|=l,a.lanes=i,Vr(t,i)}}var ac={readContext:Xt,use:Zl,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt},ig={readContext:Xt,use:Zl,useCallback:function(t,a){return ua().memoizedState=[t,a===void 0?null:a],t},useContext:Xt,useEffect:Y0,useImperativeHandle:function(t,a,i){i=i!=null?i.concat([t]):null,ec(4194308,4,G0.bind(null,a,t),i)},useLayoutEffect:function(t,a){return ec(4194308,4,t,a)},useInsertionEffect:function(t,a){ec(4,2,t,a)},useMemo:function(t,a){var i=ua();a=a===void 0?null:a;var l=t();if(si){Yt(!0);try{t()}finally{Yt(!1)}}return i.memoizedState=[l,a],l},useReducer:function(t,a,i){var l=ua();if(i!==void 0){var m=i(a);if(si){Yt(!0);try{i(a)}finally{Yt(!1)}}}else m=a;return l.memoizedState=l.baseState=m,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:m},l.queue=t,t=t.dispatch=C2.bind(null,Fe,t),[l.memoizedState,t]},useRef:function(t){var a=ua();return t={current:t},a.memoizedState=t},useState:function(t){t=ef(t);var a=t.queue,i=ag.bind(null,Fe,a);return a.dispatch=i,[t.memoizedState,i]},useDebugValue:af,useDeferredValue:function(t,a){var i=ua();return nf(i,t,a)},useTransition:function(){var t=ef(!1);return t=Z0.bind(null,Fe,t.queue,!0,!1),ua().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,i){var l=Fe,m=ua();if(Ze){if(i===void 0)throw Error(o(407));i=i()}else{if(i=a(),ut===null)throw Error(o(349));(Xe&124)!==0||N0(l,a,i)}m.memoizedState=i;var y={value:i,getSnapshot:a};return m.queue=y,Y0(C0.bind(null,l,y,t),[t]),l.flags|=2048,Ii(9,Jl(),T0.bind(null,l,y,i,a),null),i},useId:function(){var t=ua(),a=ut.identifierPrefix;if(Ze){var i=Cn,l=Tn;i=(l&~(1<<32-Ft(l)-1)).toString(32)+i,a="«"+a+"R"+i,i=Kl++,0<i&&(a+="H"+i.toString(32)),a+="»"}else i=S2++,a="«"+a+"r"+i.toString(32)+"»";return t.memoizedState=a},useHostTransitionStatus:of,useFormState:U0,useActionState:U0,useOptimistic:function(t){var a=ua();a.memoizedState=a.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=i,a=sf.bind(null,Fe,!0,i),i.dispatch=a,[t,a]},useMemoCache:Zd,useCacheRefresh:function(){return ua().memoizedState=T2.bind(null,Fe)}},og={readContext:Xt,use:Zl,useCallback:V0,useContext:Xt,useEffect:F0,useImperativeHandle:X0,useInsertionEffect:q0,useLayoutEffect:I0,useMemo:Q0,useReducer:Wl,useRef:P0,useState:function(){return Wl(Dn)},useDebugValue:af,useDeferredValue:function(t,a){var i=Ot();return K0(i,it.memoizedState,t,a)},useTransition:function(){var t=Wl(Dn)[0],a=Ot().memoizedState;return[typeof t=="boolean"?t:ts(t),a]},useSyncExternalStore:R0,useId:eg,useHostTransitionStatus:of,useFormState:H0,useActionState:H0,useOptimistic:function(t,a){var i=Ot();return D0(i,it,t,a)},useMemoCache:Zd,useCacheRefresh:tg},_2={readContext:Xt,use:Zl,useCallback:V0,useContext:Xt,useEffect:F0,useImperativeHandle:X0,useInsertionEffect:q0,useLayoutEffect:I0,useMemo:Q0,useReducer:Jd,useRef:P0,useState:function(){return Jd(Dn)},useDebugValue:af,useDeferredValue:function(t,a){var i=Ot();return it===null?nf(i,t,a):K0(i,it.memoizedState,t,a)},useTransition:function(){var t=Jd(Dn)[0],a=Ot().memoizedState;return[typeof t=="boolean"?t:ts(t),a]},useSyncExternalStore:R0,useId:eg,useHostTransitionStatus:of,useFormState:$0,useActionState:$0,useOptimistic:function(t,a){var i=Ot();return it!==null?D0(i,it,t,a):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Zd,useCacheRefresh:tg},Gi=null,rs=0;function nc(t){var a=rs;return rs+=1,Gi===null&&(Gi=[]),y0(Gi,t,a)}function is(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function rc(t,a){throw a.$$typeof===x?Error(o(525)):(t=Object.prototype.toString.call(a),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function sg(t){var a=t._init;return a(t._payload)}function lg(t){function a(P,$){if(t){var q=P.deletions;q===null?(P.deletions=[$],P.flags|=16):q.push($)}}function i(P,$){if(!t)return null;for(;$!==null;)a(P,$),$=$.sibling;return null}function l(P){for(var $=new Map;P!==null;)P.key!==null?$.set(P.key,P):$.set(P.index,P),P=P.sibling;return $}function m(P,$){return P=Nn(P,$),P.index=0,P.sibling=null,P}function y(P,$,q){return P.index=q,t?(q=P.alternate,q!==null?(q=q.index,q<$?(P.flags|=67108866,$):q):(P.flags|=67108866,$)):(P.flags|=1048576,$)}function j(P){return t&&P.alternate===null&&(P.flags|=67108866),P}function C(P,$,q,ae){return $===null||$.tag!==6?($=Td(q,P.mode,ae),$.return=P,$):($=m($,q),$.return=P,$)}function z(P,$,q,ae){var ge=q.type;return ge===w?ee(P,$,q.props.children,ae,q.key):$!==null&&($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===L&&sg(ge)===$.type)?($=m($,q.props),is($,q),$.return=P,$):($=$l(q.type,q.key,q.props,null,P.mode,ae),is($,q),$.return=P,$)}function I(P,$,q,ae){return $===null||$.tag!==4||$.stateNode.containerInfo!==q.containerInfo||$.stateNode.implementation!==q.implementation?($=Cd(q,P.mode,ae),$.return=P,$):($=m($,q.children||[]),$.return=P,$)}function ee(P,$,q,ae,ge){return $===null||$.tag!==7?($=Jr(q,P.mode,ae,ge),$.return=P,$):($=m($,q),$.return=P,$)}function ie(P,$,q){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Td(""+$,P.mode,q),$.return=P,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return q=$l($.type,$.key,$.props,null,P.mode,q),is(q,$),q.return=P,q;case S:return $=Cd($,P.mode,q),$.return=P,$;case L:var ae=$._init;return $=ae($._payload),ie(P,$,q)}if(re($)||te($))return $=Jr($,P.mode,q,null),$.return=P,$;if(typeof $.then=="function")return ie(P,nc($),q);if($.$$typeof===O)return ie(P,ql(P,$),q);rc(P,$)}return null}function V(P,$,q,ae){var ge=$!==null?$.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ge!==null?null:C(P,$,""+q,ae);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case b:return q.key===ge?z(P,$,q,ae):null;case S:return q.key===ge?I(P,$,q,ae):null;case L:return ge=q._init,q=ge(q._payload),V(P,$,q,ae)}if(re(q)||te(q))return ge!==null?null:ee(P,$,q,ae,null);if(typeof q.then=="function")return V(P,$,nc(q),ae);if(q.$$typeof===O)return V(P,$,ql(P,q),ae);rc(P,q)}return null}function Q(P,$,q,ae,ge){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return P=P.get(q)||null,C($,P,""+ae,ge);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case b:return P=P.get(ae.key===null?q:ae.key)||null,z($,P,ae,ge);case S:return P=P.get(ae.key===null?q:ae.key)||null,I($,P,ae,ge);case L:var qe=ae._init;return ae=qe(ae._payload),Q(P,$,q,ae,ge)}if(re(ae)||te(ae))return P=P.get(q)||null,ee($,P,ae,ge,null);if(typeof ae.then=="function")return Q(P,$,q,nc(ae),ge);if(ae.$$typeof===O)return Q(P,$,q,ql($,ae),ge);rc($,ae)}return null}function ke(P,$,q,ae){for(var ge=null,qe=null,Te=$,Ae=$=0,Ht=null;Te!==null&&Ae<q.length;Ae++){Te.index>Ae?(Ht=Te,Te=null):Ht=Te.sibling;var Qe=V(P,Te,q[Ae],ae);if(Qe===null){Te===null&&(Te=Ht);break}t&&Te&&Qe.alternate===null&&a(P,Te),$=y(Qe,$,Ae),qe===null?ge=Qe:qe.sibling=Qe,qe=Qe,Te=Ht}if(Ae===q.length)return i(P,Te),Ze&&ti(P,Ae),ge;if(Te===null){for(;Ae<q.length;Ae++)Te=ie(P,q[Ae],ae),Te!==null&&($=y(Te,$,Ae),qe===null?ge=Te:qe.sibling=Te,qe=Te);return Ze&&ti(P,Ae),ge}for(Te=l(Te);Ae<q.length;Ae++)Ht=Q(Te,P,Ae,q[Ae],ae),Ht!==null&&(t&&Ht.alternate!==null&&Te.delete(Ht.key===null?Ae:Ht.key),$=y(Ht,$,Ae),qe===null?ge=Ht:qe.sibling=Ht,qe=Ht);return t&&Te.forEach(function(wr){return a(P,wr)}),Ze&&ti(P,Ae),ge}function De(P,$,q,ae){if(q==null)throw Error(o(151));for(var ge=null,qe=null,Te=$,Ae=$=0,Ht=null,Qe=q.next();Te!==null&&!Qe.done;Ae++,Qe=q.next()){Te.index>Ae?(Ht=Te,Te=null):Ht=Te.sibling;var wr=V(P,Te,Qe.value,ae);if(wr===null){Te===null&&(Te=Ht);break}t&&Te&&wr.alternate===null&&a(P,Te),$=y(wr,$,Ae),qe===null?ge=wr:qe.sibling=wr,qe=wr,Te=Ht}if(Qe.done)return i(P,Te),Ze&&ti(P,Ae),ge;if(Te===null){for(;!Qe.done;Ae++,Qe=q.next())Qe=ie(P,Qe.value,ae),Qe!==null&&($=y(Qe,$,Ae),qe===null?ge=Qe:qe.sibling=Qe,qe=Qe);return Ze&&ti(P,Ae),ge}for(Te=l(Te);!Qe.done;Ae++,Qe=q.next())Qe=Q(Te,P,Ae,Qe.value,ae),Qe!==null&&(t&&Qe.alternate!==null&&Te.delete(Qe.key===null?Ae:Qe.key),$=y(Qe,$,Ae),qe===null?ge=Qe:qe.sibling=Qe,qe=Qe);return t&&Te.forEach(function(Oj){return a(P,Oj)}),Ze&&ti(P,Ae),ge}function st(P,$,q,ae){if(typeof q=="object"&&q!==null&&q.type===w&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case b:e:{for(var ge=q.key;$!==null;){if($.key===ge){if(ge=q.type,ge===w){if($.tag===7){i(P,$.sibling),ae=m($,q.props.children),ae.return=P,P=ae;break e}}else if($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===L&&sg(ge)===$.type){i(P,$.sibling),ae=m($,q.props),is(ae,q),ae.return=P,P=ae;break e}i(P,$);break}else a(P,$);$=$.sibling}q.type===w?(ae=Jr(q.props.children,P.mode,ae,q.key),ae.return=P,P=ae):(ae=$l(q.type,q.key,q.props,null,P.mode,ae),is(ae,q),ae.return=P,P=ae)}return j(P);case S:e:{for(ge=q.key;$!==null;){if($.key===ge)if($.tag===4&&$.stateNode.containerInfo===q.containerInfo&&$.stateNode.implementation===q.implementation){i(P,$.sibling),ae=m($,q.children||[]),ae.return=P,P=ae;break e}else{i(P,$);break}else a(P,$);$=$.sibling}ae=Cd(q,P.mode,ae),ae.return=P,P=ae}return j(P);case L:return ge=q._init,q=ge(q._payload),st(P,$,q,ae)}if(re(q))return ke(P,$,q,ae);if(te(q)){if(ge=te(q),typeof ge!="function")throw Error(o(150));return q=ge.call(q),De(P,$,q,ae)}if(typeof q.then=="function")return st(P,$,nc(q),ae);if(q.$$typeof===O)return st(P,$,ql(P,q),ae);rc(P,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,$!==null&&$.tag===6?(i(P,$.sibling),ae=m($,q),ae.return=P,P=ae):(i(P,$),ae=Td(q,P.mode,ae),ae.return=P,P=ae),j(P)):i(P,$)}return function(P,$,q,ae){try{rs=0;var ge=st(P,$,q,ae);return Gi=null,ge}catch(Te){if(Te===Qo||Te===Gl)throw Te;var qe=Na(29,Te,null,P.mode);return qe.lanes=ae,qe.return=P,qe}finally{}}}var Xi=lg(!0),cg=lg(!1),Ya=Y(null),un=null;function or(t){var a=t.alternate;ne(kt,kt.current&1),ne(Ya,t),un===null&&(a===null||Yi.current!==null||a.memoizedState!==null)&&(un=t)}function ug(t){if(t.tag===22){if(ne(kt,kt.current),ne(Ya,t),un===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(un=t)}}else sr()}function sr(){ne(kt,kt.current),ne(Ya,Ya.current)}function An(t){se(Ya),un===t&&(un=null),se(kt)}var kt=Y(0);function ic(t){for(var a=t;a!==null;){if(a.tag===13){var i=a.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||Zf(i)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function lf(t,a,i,l){a=t.memoizedState,i=i(l,a),i=i==null?a:g({},a,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var cf={enqueueSetState:function(t,a,i){t=t._reactInternals;var l=Oa(),m=nr(l);m.payload=a,i!=null&&(m.callback=i),a=rr(t,m,l),a!==null&&(Da(a,t,l),Zo(a,t,l))},enqueueReplaceState:function(t,a,i){t=t._reactInternals;var l=Oa(),m=nr(l);m.tag=1,m.payload=a,i!=null&&(m.callback=i),a=rr(t,m,l),a!==null&&(Da(a,t,l),Zo(a,t,l))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var i=Oa(),l=nr(i);l.tag=2,a!=null&&(l.callback=a),a=rr(t,l,i),a!==null&&(Da(a,t,i),Zo(a,t,i))}};function dg(t,a,i,l,m,y,j){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,y,j):a.prototype&&a.prototype.isPureReactComponent?!Po(i,l)||!Po(m,y):!0}function fg(t,a,i,l){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,l),a.state!==t&&cf.enqueueReplaceState(a,a.state,null)}function li(t,a){var i=a;if("ref"in a){i={};for(var l in a)l!=="ref"&&(i[l]=a[l])}if(t=t.defaultProps){i===a&&(i=g({},i));for(var m in t)i[m]===void 0&&(i[m]=t[m])}return i}var oc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function mg(t){oc(t)}function hg(t){console.error(t)}function pg(t){oc(t)}function sc(t,a){try{var i=t.onUncaughtError;i(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function gg(t,a,i){try{var l=t.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(m){setTimeout(function(){throw m})}}function uf(t,a,i){return i=nr(i),i.tag=3,i.payload={element:null},i.callback=function(){sc(t,a)},i}function yg(t){return t=nr(t),t.tag=3,t}function vg(t,a,i,l){var m=i.type.getDerivedStateFromError;if(typeof m=="function"){var y=l.value;t.payload=function(){return m(y)},t.callback=function(){gg(a,i,l)}}var j=i.stateNode;j!==null&&typeof j.componentDidCatch=="function"&&(t.callback=function(){gg(a,i,l),typeof m!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function O2(t,a,i,l,m){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=i.alternate,a!==null&&Go(a,i,m,!0),i=Ya.current,i!==null){switch(i.tag){case 13:return un===null?kf():i.alternate===null&&xt===0&&(xt=3),i.flags&=-257,i.flags|=65536,i.lanes=m,l===Hd?i.flags|=16384:(a=i.updateQueue,a===null?i.updateQueue=new Set([l]):a.add(l),zf(t,l,m)),!1;case 22:return i.flags|=65536,l===Hd?i.flags|=16384:(a=i.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=a):(i=a.retryQueue,i===null?a.retryQueue=new Set([l]):i.add(l)),zf(t,l,m)),!1}throw Error(o(435,i.tag))}return zf(t,l,m),kf(),!1}if(Ze)return a=Ya.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=m,l!==Dd&&(t=Error(o(422),{cause:l}),Io(Ha(t,i)))):(l!==Dd&&(a=Error(o(423),{cause:l}),Io(Ha(a,i))),t=t.current.alternate,t.flags|=65536,m&=-m,t.lanes|=m,l=Ha(l,i),m=uf(t.stateNode,l,m),Pd(t,m),xt!==4&&(xt=2)),!1;var y=Error(o(520),{cause:l});if(y=Ha(y,i),fs===null?fs=[y]:fs.push(y),xt!==4&&(xt=2),a===null)return!0;l=Ha(l,i),i=a;do{switch(i.tag){case 3:return i.flags|=65536,t=m&-m,i.lanes|=t,t=uf(i.stateNode,l,t),Pd(i,t),!1;case 1:if(a=i.type,y=i.stateNode,(i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(mr===null||!mr.has(y))))return i.flags|=65536,m&=-m,i.lanes|=m,m=yg(m),vg(m,t,i,l),Pd(i,m),!1}i=i.return}while(i!==null);return!1}var bg=Error(o(461)),zt=!1;function qt(t,a,i,l){a.child=t===null?cg(a,null,i,l):Xi(a,t.child,i,l)}function xg(t,a,i,l,m){i=i.render;var y=a.ref;if("ref"in l){var j={};for(var C in l)C!=="ref"&&(j[C]=l[C])}else j=l;return ii(a),l=Gd(t,a,i,j,y,m),C=Xd(),t!==null&&!zt?(Vd(t,a,m),Mn(t,a,m)):(Ze&&C&&_d(a),a.flags|=1,qt(t,a,l,m),a.child)}function wg(t,a,i,l,m){if(t===null){var y=i.type;return typeof y=="function"&&!Nd(y)&&y.defaultProps===void 0&&i.compare===null?(a.tag=15,a.type=y,Sg(t,a,y,l,m)):(t=$l(i.type,null,l,a,a.mode,m),t.ref=a.ref,t.return=a,a.child=t)}if(y=t.child,!vf(t,m)){var j=y.memoizedProps;if(i=i.compare,i=i!==null?i:Po,i(j,l)&&t.ref===a.ref)return Mn(t,a,m)}return a.flags|=1,t=Nn(y,l),t.ref=a.ref,t.return=a,a.child=t}function Sg(t,a,i,l,m){if(t!==null){var y=t.memoizedProps;if(Po(y,l)&&t.ref===a.ref)if(zt=!1,a.pendingProps=l=y,vf(t,m))(t.flags&131072)!==0&&(zt=!0);else return a.lanes=t.lanes,Mn(t,a,m)}return df(t,a,i,l,m)}function Eg(t,a,i){var l=a.pendingProps,m=l.children,y=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=y!==null?y.baseLanes|i:i,t!==null){for(m=a.child=t.child,y=0;m!==null;)y=y|m.lanes|m.childLanes,m=m.sibling;a.childLanes=y&~l}else a.childLanes=0,a.child=null;return jg(t,a,l,i)}if((i&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Il(a,y!==null?y.cachePool:null),y!==null?S0(a,y):Fd(),ug(a);else return a.lanes=a.childLanes=536870912,jg(t,a,y!==null?y.baseLanes|i:i,i)}else y!==null?(Il(a,y.cachePool),S0(a,y),sr(),a.memoizedState=null):(t!==null&&Il(a,null),Fd(),sr());return qt(t,a,m,i),a.child}function jg(t,a,i,l){var m=Ud();return m=m===null?null:{parent:Mt._currentValue,pool:m},a.memoizedState={baseLanes:i,cachePool:m},t!==null&&Il(a,null),Fd(),ug(a),t!==null&&Go(t,a,l,!0),null}function lc(t,a){var i=a.ref;if(i===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(a.flags|=4194816)}}function df(t,a,i,l,m){return ii(a),i=Gd(t,a,i,l,void 0,m),l=Xd(),t!==null&&!zt?(Vd(t,a,m),Mn(t,a,m)):(Ze&&l&&_d(a),a.flags|=1,qt(t,a,i,m),a.child)}function Rg(t,a,i,l,m,y){return ii(a),a.updateQueue=null,i=j0(a,l,i,m),E0(t),l=Xd(),t!==null&&!zt?(Vd(t,a,y),Mn(t,a,y)):(Ze&&l&&_d(a),a.flags|=1,qt(t,a,i,y),a.child)}function Ng(t,a,i,l,m){if(ii(a),a.stateNode===null){var y=Ui,j=i.contextType;typeof j=="object"&&j!==null&&(y=Xt(j)),y=new i(l,y),a.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,y.updater=cf,a.stateNode=y,y._reactInternals=a,y=a.stateNode,y.props=l,y.state=a.memoizedState,y.refs={},Bd(a),j=i.contextType,y.context=typeof j=="object"&&j!==null?Xt(j):Ui,y.state=a.memoizedState,j=i.getDerivedStateFromProps,typeof j=="function"&&(lf(a,i,j,l),y.state=a.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(j=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),j!==y.state&&cf.enqueueReplaceState(y,y.state,null),Jo(a,l,y,m),Wo(),y.state=a.memoizedState),typeof y.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(t===null){y=a.stateNode;var C=a.memoizedProps,z=li(i,C);y.props=z;var I=y.context,ee=i.contextType;j=Ui,typeof ee=="object"&&ee!==null&&(j=Xt(ee));var ie=i.getDerivedStateFromProps;ee=typeof ie=="function"||typeof y.getSnapshotBeforeUpdate=="function",C=a.pendingProps!==C,ee||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(C||I!==j)&&fg(a,y,l,j),ar=!1;var V=a.memoizedState;y.state=V,Jo(a,l,y,m),Wo(),I=a.memoizedState,C||V!==I||ar?(typeof ie=="function"&&(lf(a,i,ie,l),I=a.memoizedState),(z=ar||dg(a,i,z,l,V,I,j))?(ee||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(a.flags|=4194308)):(typeof y.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=I),y.props=l,y.state=I,y.context=j,l=z):(typeof y.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{y=a.stateNode,$d(t,a),j=a.memoizedProps,ee=li(i,j),y.props=ee,ie=a.pendingProps,V=y.context,I=i.contextType,z=Ui,typeof I=="object"&&I!==null&&(z=Xt(I)),C=i.getDerivedStateFromProps,(I=typeof C=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(j!==ie||V!==z)&&fg(a,y,l,z),ar=!1,V=a.memoizedState,y.state=V,Jo(a,l,y,m),Wo();var Q=a.memoizedState;j!==ie||V!==Q||ar||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof C=="function"&&(lf(a,i,C,l),Q=a.memoizedState),(ee=ar||dg(a,i,ee,l,V,Q,z)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(I||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(l,Q,z),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(l,Q,z)),typeof y.componentDidUpdate=="function"&&(a.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof y.componentDidUpdate!="function"||j===t.memoizedProps&&V===t.memoizedState||(a.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||j===t.memoizedProps&&V===t.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=Q),y.props=l,y.state=Q,y.context=z,l=ee):(typeof y.componentDidUpdate!="function"||j===t.memoizedProps&&V===t.memoizedState||(a.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||j===t.memoizedProps&&V===t.memoizedState||(a.flags|=1024),l=!1)}return y=l,lc(t,a),l=(a.flags&128)!==0,y||l?(y=a.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:y.render(),a.flags|=1,t!==null&&l?(a.child=Xi(a,t.child,null,m),a.child=Xi(a,null,i,m)):qt(t,a,i,m),a.memoizedState=y.state,t=a.child):t=Mn(t,a,m),t}function Tg(t,a,i,l){return qo(),a.flags|=256,qt(t,a,i,l),a.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(t){return{baseLanes:t,cachePool:h0()}}function hf(t,a,i){return t=t!==null?t.childLanes&~i:0,a&&(t|=Fa),t}function Cg(t,a,i){var l=a.pendingProps,m=!1,y=(a.flags&128)!==0,j;if((j=y)||(j=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),j&&(m=!0,a.flags&=-129),j=(a.flags&32)!==0,a.flags&=-33,t===null){if(Ze){if(m?or(a):sr(),Ze){var C=bt,z;if(z=C){e:{for(z=C,C=cn;z.nodeType!==8;){if(!C){C=null;break e}if(z=Ja(z.nextSibling),z===null){C=null;break e}}C=z}C!==null?(a.memoizedState={dehydrated:C,treeContext:ei!==null?{id:Tn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},z=Na(18,null,null,0),z.stateNode=C,z.return=a,a.child=z,aa=a,bt=null,z=!0):z=!1}z||ni(a)}if(C=a.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return Zf(C)?a.lanes=32:a.lanes=536870912,null;An(a)}return C=l.children,l=l.fallback,m?(sr(),m=a.mode,C=cc({mode:"hidden",children:C},m),l=Jr(l,m,i,null),C.return=a,l.return=a,C.sibling=l,a.child=C,m=a.child,m.memoizedState=mf(i),m.childLanes=hf(t,j,i),a.memoizedState=ff,l):(or(a),pf(a,C))}if(z=t.memoizedState,z!==null&&(C=z.dehydrated,C!==null)){if(y)a.flags&256?(or(a),a.flags&=-257,a=gf(t,a,i)):a.memoizedState!==null?(sr(),a.child=t.child,a.flags|=128,a=null):(sr(),m=l.fallback,C=a.mode,l=cc({mode:"visible",children:l.children},C),m=Jr(m,C,i,null),m.flags|=2,l.return=a,m.return=a,l.sibling=m,a.child=l,Xi(a,t.child,null,i),l=a.child,l.memoizedState=mf(i),l.childLanes=hf(t,j,i),a.memoizedState=ff,a=m);else if(or(a),Zf(C)){if(j=C.nextSibling&&C.nextSibling.dataset,j)var I=j.dgst;j=I,l=Error(o(419)),l.stack="",l.digest=j,Io({value:l,source:null,stack:null}),a=gf(t,a,i)}else if(zt||Go(t,a,i,!1),j=(i&t.childLanes)!==0,zt||j){if(j=ut,j!==null&&(l=i&-i,l=(l&42)!==0?1:Ao(l),l=(l&(j.suspendedLanes|i))!==0?0:l,l!==0&&l!==z.retryLane))throw z.retryLane=l,zi(t,l),Da(j,t,l),bg;C.data==="$?"||kf(),a=gf(t,a,i)}else C.data==="$?"?(a.flags|=192,a.child=t.child,a=null):(t=z.treeContext,bt=Ja(C.nextSibling),aa=a,Ze=!0,ai=null,cn=!1,t!==null&&($a[Pa++]=Tn,$a[Pa++]=Cn,$a[Pa++]=ei,Tn=t.id,Cn=t.overflow,ei=a),a=pf(a,l.children),a.flags|=4096);return a}return m?(sr(),m=l.fallback,C=a.mode,z=t.child,I=z.sibling,l=Nn(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,I!==null?m=Nn(I,m):(m=Jr(m,C,i,null),m.flags|=2),m.return=a,l.return=a,l.sibling=m,a.child=l,l=m,m=a.child,C=t.child.memoizedState,C===null?C=mf(i):(z=C.cachePool,z!==null?(I=Mt._currentValue,z=z.parent!==I?{parent:I,pool:I}:z):z=h0(),C={baseLanes:C.baseLanes|i,cachePool:z}),m.memoizedState=C,m.childLanes=hf(t,j,i),a.memoizedState=ff,l):(or(a),i=t.child,t=i.sibling,i=Nn(i,{mode:"visible",children:l.children}),i.return=a,i.sibling=null,t!==null&&(j=a.deletions,j===null?(a.deletions=[t],a.flags|=16):j.push(t)),a.child=i,a.memoizedState=null,i)}function pf(t,a){return a=cc({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function cc(t,a){return t=Na(22,t,null,a),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function gf(t,a,i){return Xi(a,t.child,null,i),t=pf(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function _g(t,a,i){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a),Md(t.return,a,i)}function yf(t,a,i,l,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:m}:(y.isBackwards=a,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=i,y.tailMode=m)}function Og(t,a,i){var l=a.pendingProps,m=l.revealOrder,y=l.tail;if(qt(t,a,l.children,i),l=kt.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_g(t,i,a);else if(t.tag===19)_g(t,i,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ne(kt,l),m){case"forwards":for(i=a.child,m=null;i!==null;)t=i.alternate,t!==null&&ic(t)===null&&(m=i),i=i.sibling;i=m,i===null?(m=a.child,a.child=null):(m=i.sibling,i.sibling=null),yf(a,!1,m,i,y);break;case"backwards":for(i=null,m=a.child,a.child=null;m!==null;){if(t=m.alternate,t!==null&&ic(t)===null){a.child=m;break}t=m.sibling,m.sibling=i,i=m,m=t}yf(a,!0,i,null,y);break;case"together":yf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Mn(t,a,i){if(t!==null&&(a.dependencies=t.dependencies),fr|=a.lanes,(i&a.childLanes)===0)if(t!==null){if(Go(t,a,i,!1),(i&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(o(153));if(a.child!==null){for(t=a.child,i=Nn(t,t.pendingProps),a.child=i,i.return=a;t.sibling!==null;)t=t.sibling,i=i.sibling=Nn(t,t.pendingProps),i.return=a;i.sibling=null}return a.child}function vf(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function D2(t,a,i){switch(a.tag){case 3:$e(a,a.stateNode.containerInfo),tr(a,Mt,t.memoizedState.cache),qo();break;case 27:case 5:Je(a);break;case 4:$e(a,a.stateNode.containerInfo);break;case 10:tr(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(or(a),a.flags|=128,null):(i&a.child.childLanes)!==0?Cg(t,a,i):(or(a),t=Mn(t,a,i),t!==null?t.sibling:null);or(a);break;case 19:var m=(t.flags&128)!==0;if(l=(i&a.childLanes)!==0,l||(Go(t,a,i,!1),l=(i&a.childLanes)!==0),m){if(l)return Og(t,a,i);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),ne(kt,kt.current),l)break;return null;case 22:case 23:return a.lanes=0,Eg(t,a,i);case 24:tr(a,Mt,t.memoizedState.cache)}return Mn(t,a,i)}function Dg(t,a,i){if(t!==null)if(t.memoizedProps!==a.pendingProps)zt=!0;else{if(!vf(t,i)&&(a.flags&128)===0)return zt=!1,D2(t,a,i);zt=(t.flags&131072)!==0}else zt=!1,Ze&&(a.flags&1048576)!==0&&s0(a,Yl,a.index);switch(a.lanes=0,a.tag){case 16:e:{t=a.pendingProps;var l=a.elementType,m=l._init;if(l=m(l._payload),a.type=l,typeof l=="function")Nd(l)?(t=li(l,t),a.tag=1,a=Ng(null,a,l,t,i)):(a.tag=0,a=df(null,a,l,t,i));else{if(l!=null){if(m=l.$$typeof,m===M){a.tag=11,a=xg(null,a,l,t,i);break e}else if(m===k){a.tag=14,a=wg(null,a,l,t,i);break e}}throw a=de(l)||l,Error(o(306,a,""))}}return a;case 0:return df(t,a,a.type,a.pendingProps,i);case 1:return l=a.type,m=li(l,a.pendingProps),Ng(t,a,l,m,i);case 3:e:{if($e(a,a.stateNode.containerInfo),t===null)throw Error(o(387));l=a.pendingProps;var y=a.memoizedState;m=y.element,$d(t,a),Jo(a,l,null,i);var j=a.memoizedState;if(l=j.cache,tr(a,Mt,l),l!==y.cache&&kd(a,[Mt],i,!0),Wo(),l=j.element,y.isDehydrated)if(y={element:l,isDehydrated:!1,cache:j.cache},a.updateQueue.baseState=y,a.memoizedState=y,a.flags&256){a=Tg(t,a,l,i);break e}else if(l!==m){m=Ha(Error(o(424)),a),Io(m),a=Tg(t,a,l,i);break e}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(bt=Ja(t.firstChild),aa=a,Ze=!0,ai=null,cn=!0,i=cg(a,null,l,i),a.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(qo(),l===m){a=Mn(t,a,i);break e}qt(t,a,l,i)}a=a.child}return a;case 26:return lc(t,a),t===null?(i=Ly(a.type,null,a.pendingProps,null))?a.memoizedState=i:Ze||(i=a.type,t=a.pendingProps,l=Ec(fe.current).createElement(i),l[oe]=a,l[ue]=t,Gt(l,i,t),Ue(l),a.stateNode=l):a.memoizedState=Ly(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Je(a),t===null&&Ze&&(l=a.stateNode=Ay(a.type,a.pendingProps,fe.current),aa=a,cn=!0,m=bt,gr(a.type)?(Wf=m,bt=Ja(l.firstChild)):bt=m),qt(t,a,a.pendingProps.children,i),lc(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Ze&&((m=l=bt)&&(l=ij(l,a.type,a.pendingProps,cn),l!==null?(a.stateNode=l,aa=a,bt=Ja(l.firstChild),cn=!1,m=!0):m=!1),m||ni(a)),Je(a),m=a.type,y=a.pendingProps,j=t!==null?t.memoizedProps:null,l=y.children,Vf(m,y)?l=null:j!==null&&Vf(m,j)&&(a.flags|=32),a.memoizedState!==null&&(m=Gd(t,a,E2,null,null,i),ws._currentValue=m),lc(t,a),qt(t,a,l,i),a.child;case 6:return t===null&&Ze&&((t=i=bt)&&(i=oj(i,a.pendingProps,cn),i!==null?(a.stateNode=i,aa=a,bt=null,t=!0):t=!1),t||ni(a)),null;case 13:return Cg(t,a,i);case 4:return $e(a,a.stateNode.containerInfo),l=a.pendingProps,t===null?a.child=Xi(a,null,l,i):qt(t,a,l,i),a.child;case 11:return xg(t,a,a.type,a.pendingProps,i);case 7:return qt(t,a,a.pendingProps,i),a.child;case 8:return qt(t,a,a.pendingProps.children,i),a.child;case 12:return qt(t,a,a.pendingProps.children,i),a.child;case 10:return l=a.pendingProps,tr(a,a.type,l.value),qt(t,a,l.children,i),a.child;case 9:return m=a.type._context,l=a.pendingProps.children,ii(a),m=Xt(m),l=l(m),a.flags|=1,qt(t,a,l,i),a.child;case 14:return wg(t,a,a.type,a.pendingProps,i);case 15:return Sg(t,a,a.type,a.pendingProps,i);case 19:return Og(t,a,i);case 31:return l=a.pendingProps,i=a.mode,l={mode:l.mode,children:l.children},t===null?(i=cc(l,i),i.ref=a.ref,a.child=i,i.return=a,a=i):(i=Nn(t.child,l),i.ref=a.ref,a.child=i,i.return=a,a=i),a;case 22:return Eg(t,a,i);case 24:return ii(a),l=Xt(Mt),t===null?(m=Ud(),m===null&&(m=ut,y=Ld(),m.pooledCache=y,y.refCount++,y!==null&&(m.pooledCacheLanes|=i),m=y),a.memoizedState={parent:l,cache:m},Bd(a),tr(a,Mt,m)):((t.lanes&i)!==0&&($d(t,a),Jo(a,null,null,i),Wo()),m=t.memoizedState,y=a.memoizedState,m.parent!==l?(m={parent:l,cache:l},a.memoizedState=m,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=m),tr(a,Mt,l)):(l=y.cache,tr(a,Mt,l),l!==m.cache&&kd(a,[Mt],i,!0))),qt(t,a,a.pendingProps.children,i),a.child;case 29:throw a.pendingProps}throw Error(o(156,a.tag))}function kn(t){t.flags|=4}function Ag(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$y(a)){if(a=Ya.current,a!==null&&((Xe&4194048)===Xe?un!==null:(Xe&62914560)!==Xe&&(Xe&536870912)===0||a!==un))throw Ko=Hd,p0;t.flags|=8192}}function uc(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?jl():536870912,t.lanes|=a,Zi|=a)}function os(t,a){if(!Ze)switch(t.tailMode){case"hidden":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pt(t){var a=t.alternate!==null&&t.alternate.child===t.child,i=0,l=0;if(a)for(var m=t.child;m!==null;)i|=m.lanes|m.childLanes,l|=m.subtreeFlags&65011712,l|=m.flags&65011712,m.return=t,m=m.sibling;else for(m=t.child;m!==null;)i|=m.lanes|m.childLanes,l|=m.subtreeFlags,l|=m.flags,m.return=t,m=m.sibling;return t.subtreeFlags|=l,t.childLanes=i,a}function A2(t,a,i){var l=a.pendingProps;switch(Od(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(a),null;case 1:return pt(a),null;case 3:return i=a.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),On(Mt),Rt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fo(a)?kn(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,u0())),pt(a),null;case 26:return i=a.memoizedState,t===null?(kn(a),i!==null?(pt(a),Ag(a,i)):(pt(a),a.flags&=-16777217)):i?i!==t.memoizedState?(kn(a),pt(a),Ag(a,i)):(pt(a),a.flags&=-16777217):(t.memoizedProps!==l&&kn(a),pt(a),a.flags&=-16777217),null;case 27:Nt(a),i=fe.current;var m=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==l&&kn(a);else{if(!l){if(a.stateNode===null)throw Error(o(166));return pt(a),null}t=ce.current,Fo(a)?l0(a):(t=Ay(m,l,i),a.stateNode=t,kn(a))}return pt(a),null;case 5:if(Nt(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&kn(a);else{if(!l){if(a.stateNode===null)throw Error(o(166));return pt(a),null}if(t=ce.current,Fo(a))l0(a);else{switch(m=Ec(fe.current),t){case 1:t=m.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:t=m.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":t=m.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":t=m.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?m.createElement(i,{is:l.is}):m.createElement(i)}}t[oe]=a,t[ue]=l;e:for(m=a.child;m!==null;){if(m.tag===5||m.tag===6)t.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===a)break e;for(;m.sibling===null;){if(m.return===null||m.return===a)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}a.stateNode=t;e:switch(Gt(t,i,l),i){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&kn(a)}}return pt(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==l&&kn(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(o(166));if(t=fe.current,Fo(a)){if(t=a.stateNode,i=a.memoizedProps,l=null,m=aa,m!==null)switch(m.tag){case 27:case 5:l=m.memoizedProps}t[oe]=a,t=!!(t.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||Ry(t.nodeValue,i)),t||ni(a)}else t=Ec(t).createTextNode(l),t[oe]=a,a.stateNode=t}return pt(a),null;case 13:if(l=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(m=Fo(a),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(o(318));if(m=a.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(o(317));m[oe]=a}else qo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;pt(a),m=!1}else m=u0(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=m),m=!0;if(!m)return a.flags&256?(An(a),a):(An(a),null)}if(An(a),(a.flags&128)!==0)return a.lanes=i,a;if(i=l!==null,t=t!==null&&t.memoizedState!==null,i){l=a.child,m=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(m=l.alternate.memoizedState.cachePool.pool);var y=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(y=l.memoizedState.cachePool.pool),y!==m&&(l.flags|=2048)}return i!==t&&i&&(a.child.flags|=8192),uc(a,a.updateQueue),pt(a),null;case 4:return Rt(),t===null&&Ff(a.stateNode.containerInfo),pt(a),null;case 10:return On(a.type),pt(a),null;case 19:if(se(kt),m=a.memoizedState,m===null)return pt(a),null;if(l=(a.flags&128)!==0,y=m.rendering,y===null)if(l)os(m,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(y=ic(t),y!==null){for(a.flags|=128,os(m,!1),t=y.updateQueue,a.updateQueue=t,uc(a,t),a.subtreeFlags=0,t=i,i=a.child;i!==null;)o0(i,t),i=i.sibling;return ne(kt,kt.current&1|2),a.child}t=t.sibling}m.tail!==null&&gt()>mc&&(a.flags|=128,l=!0,os(m,!1),a.lanes=4194304)}else{if(!l)if(t=ic(y),t!==null){if(a.flags|=128,l=!0,t=t.updateQueue,a.updateQueue=t,uc(a,t),os(m,!0),m.tail===null&&m.tailMode==="hidden"&&!y.alternate&&!Ze)return pt(a),null}else 2*gt()-m.renderingStartTime>mc&&i!==536870912&&(a.flags|=128,l=!0,os(m,!1),a.lanes=4194304);m.isBackwards?(y.sibling=a.child,a.child=y):(t=m.last,t!==null?t.sibling=y:a.child=y,m.last=y)}return m.tail!==null?(a=m.tail,m.rendering=a,m.tail=a.sibling,m.renderingStartTime=gt(),a.sibling=null,t=kt.current,ne(kt,l?t&1|2:t&1),a):(pt(a),null);case 22:case 23:return An(a),qd(),l=a.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(i&536870912)!==0&&(a.flags&128)===0&&(pt(a),a.subtreeFlags&6&&(a.flags|=8192)):pt(a),i=a.updateQueue,i!==null&&uc(a,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048),t!==null&&se(oi),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),On(Mt),pt(a),null;case 25:return null;case 30:return null}throw Error(o(156,a.tag))}function M2(t,a){switch(Od(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return On(Mt),Rt(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Nt(a),null;case 13:if(An(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(o(340));qo()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return se(kt),null;case 4:return Rt(),null;case 10:return On(a.type),null;case 22:case 23:return An(a),qd(),t!==null&&se(oi),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return On(Mt),null;case 25:return null;default:return null}}function Mg(t,a){switch(Od(a),a.tag){case 3:On(Mt),Rt();break;case 26:case 27:case 5:Nt(a);break;case 4:Rt();break;case 13:An(a);break;case 19:se(kt);break;case 10:On(a.type);break;case 22:case 23:An(a),qd(),t!==null&&se(oi);break;case 24:On(Mt)}}function ss(t,a){try{var i=a.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var m=l.next;i=m;do{if((i.tag&t)===t){l=void 0;var y=i.create,j=i.inst;l=y(),j.destroy=l}i=i.next}while(i!==m)}}catch(C){lt(a,a.return,C)}}function lr(t,a,i){try{var l=a.updateQueue,m=l!==null?l.lastEffect:null;if(m!==null){var y=m.next;l=y;do{if((l.tag&t)===t){var j=l.inst,C=j.destroy;if(C!==void 0){j.destroy=void 0,m=a;var z=i,I=C;try{I()}catch(ee){lt(m,z,ee)}}}l=l.next}while(l!==y)}}catch(ee){lt(a,a.return,ee)}}function kg(t){var a=t.updateQueue;if(a!==null){var i=t.stateNode;try{w0(a,i)}catch(l){lt(t,t.return,l)}}}function Lg(t,a,i){i.props=li(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(l){lt(t,a,l)}}function ls(t,a){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof i=="function"?t.refCleanup=i(l):i.current=l}}catch(m){lt(t,a,m)}}function dn(t,a){var i=t.ref,l=t.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(m){lt(t,a,m)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(m){lt(t,a,m)}else i.current=null}function zg(t){var a=t.type,i=t.memoizedProps,l=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(m){lt(t,t.return,m)}}function bf(t,a,i){try{var l=t.stateNode;ej(l,t.type,i,a),l[ue]=a}catch(m){lt(t,t.return,m)}}function Ug(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gr(t.type)||t.tag===4}function xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,a,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,a):(a=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,a.appendChild(t),i=i._reactRootContainer,i!=null||a.onclick!==null||(a.onclick=Sc));else if(l!==4&&(l===27&&gr(t.type)&&(i=t.stateNode,a=null),t=t.child,t!==null))for(wf(t,a,i),t=t.sibling;t!==null;)wf(t,a,i),t=t.sibling}function dc(t,a,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?i.insertBefore(t,a):i.appendChild(t);else if(l!==4&&(l===27&&gr(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(dc(t,a,i),t=t.sibling;t!==null;)dc(t,a,i),t=t.sibling}function Hg(t){var a=t.stateNode,i=t.memoizedProps;try{for(var l=t.type,m=a.attributes;m.length;)a.removeAttributeNode(m[0]);Gt(a,l,i),a[oe]=t,a[ue]=i}catch(y){lt(t,t.return,y)}}var Ln=!1,St=!1,Sf=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,Ut=null;function k2(t,a){if(t=t.containerInfo,Gf=_c,t=Kp(t),bd(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var m=l.anchorOffset,y=l.focusNode;l=l.focusOffset;try{i.nodeType,y.nodeType}catch{i=null;break e}var j=0,C=-1,z=-1,I=0,ee=0,ie=t,V=null;t:for(;;){for(var Q;ie!==i||m!==0&&ie.nodeType!==3||(C=j+m),ie!==y||l!==0&&ie.nodeType!==3||(z=j+l),ie.nodeType===3&&(j+=ie.nodeValue.length),(Q=ie.firstChild)!==null;)V=ie,ie=Q;for(;;){if(ie===t)break t;if(V===i&&++I===m&&(C=j),V===y&&++ee===l&&(z=j),(Q=ie.nextSibling)!==null)break;ie=V,V=ie.parentNode}ie=Q}i=C===-1||z===-1?null:{start:C,end:z}}else i=null}i=i||{start:0,end:0}}else i=null;for(Xf={focusedElem:t,selectionRange:i},_c=!1,Ut=a;Ut!==null;)if(a=Ut,t=a.child,(a.subtreeFlags&1024)!==0&&t!==null)t.return=a,Ut=t;else for(;Ut!==null;){switch(a=Ut,y=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&y!==null){t=void 0,i=a,m=y.memoizedProps,y=y.memoizedState,l=i.stateNode;try{var ke=li(i.type,m,i.elementType===i.type);t=l.getSnapshotBeforeUpdate(ke,y),l.__reactInternalSnapshotBeforeUpdate=t}catch(De){lt(i,i.return,De)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,i=t.nodeType,i===9)Kf(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=a.sibling,t!==null){t.return=a.return,Ut=t;break}Ut=a.return}}function $g(t,a,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:cr(t,i),l&4&&ss(5,i);break;case 1:if(cr(t,i),l&4)if(t=i.stateNode,a===null)try{t.componentDidMount()}catch(j){lt(i,i.return,j)}else{var m=li(i.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(m,a,t.__reactInternalSnapshotBeforeUpdate)}catch(j){lt(i,i.return,j)}}l&64&&kg(i),l&512&&ls(i,i.return);break;case 3:if(cr(t,i),l&64&&(t=i.updateQueue,t!==null)){if(a=null,i.child!==null)switch(i.child.tag){case 27:case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}try{w0(t,a)}catch(j){lt(i,i.return,j)}}break;case 27:a===null&&l&4&&Hg(i);case 26:case 5:cr(t,i),a===null&&l&4&&zg(i),l&512&&ls(i,i.return);break;case 12:cr(t,i);break;case 13:cr(t,i),l&4&&Fg(t,i),l&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=F2.bind(null,i),sj(t,i))));break;case 22:if(l=i.memoizedState!==null||Ln,!l){a=a!==null&&a.memoizedState!==null||St,m=Ln;var y=St;Ln=l,(St=a)&&!y?ur(t,i,(i.subtreeFlags&8772)!==0):cr(t,i),Ln=m,St=y}break;case 30:break;default:cr(t,i)}}function Pg(t){var a=t.alternate;a!==null&&(t.alternate=null,Pg(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&Re(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dt=null,da=!1;function zn(t,a,i){for(i=i.child;i!==null;)Yg(t,a,i),i=i.sibling}function Yg(t,a,i){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Me,i)}catch{}switch(i.tag){case 26:St||dn(i,a),zn(t,a,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:St||dn(i,a);var l=dt,m=da;gr(i.type)&&(dt=i.stateNode,da=!1),zn(t,a,i),ys(i.stateNode),dt=l,da=m;break;case 5:St||dn(i,a);case 6:if(l=dt,m=da,dt=null,zn(t,a,i),dt=l,da=m,dt!==null)if(da)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(i.stateNode)}catch(y){lt(i,a,y)}else try{dt.removeChild(i.stateNode)}catch(y){lt(i,a,y)}break;case 18:dt!==null&&(da?(t=dt,Oy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Rs(t)):Oy(dt,i.stateNode));break;case 4:l=dt,m=da,dt=i.stateNode.containerInfo,da=!0,zn(t,a,i),dt=l,da=m;break;case 0:case 11:case 14:case 15:St||lr(2,i,a),St||lr(4,i,a),zn(t,a,i);break;case 1:St||(dn(i,a),l=i.stateNode,typeof l.componentWillUnmount=="function"&&Lg(i,a,l)),zn(t,a,i);break;case 21:zn(t,a,i);break;case 22:St=(l=St)||i.memoizedState!==null,zn(t,a,i),St=l;break;default:zn(t,a,i)}}function Fg(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rs(t)}catch(i){lt(a,a.return,i)}}function L2(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Bg),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Bg),a;default:throw Error(o(435,t.tag))}}function Ef(t,a){var i=L2(t);a.forEach(function(l){var m=q2.bind(null,t,l);i.has(l)||(i.add(l),l.then(m,m))})}function Ta(t,a){var i=a.deletions;if(i!==null)for(var l=0;l<i.length;l++){var m=i[l],y=t,j=a,C=j;e:for(;C!==null;){switch(C.tag){case 27:if(gr(C.type)){dt=C.stateNode,da=!1;break e}break;case 5:dt=C.stateNode,da=!1;break e;case 3:case 4:dt=C.stateNode.containerInfo,da=!0;break e}C=C.return}if(dt===null)throw Error(o(160));Yg(y,j,m),dt=null,da=!1,y=m.alternate,y!==null&&(y.return=null),m.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)qg(a,t),a=a.sibling}var Wa=null;function qg(t,a){var i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ta(a,t),Ca(t),l&4&&(lr(3,t,t.return),ss(3,t),lr(5,t,t.return));break;case 1:Ta(a,t),Ca(t),l&512&&(St||i===null||dn(i,i.return)),l&64&&Ln&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var m=Wa;if(Ta(a,t),Ca(t),l&512&&(St||i===null||dn(i,i.return)),l&4){var y=i!==null?i.memoizedState:null;if(l=t.memoizedState,i===null)if(l===null)if(t.stateNode===null){e:{l=t.type,i=t.memoizedProps,m=m.ownerDocument||m;t:switch(l){case"title":y=m.getElementsByTagName("title")[0],(!y||y[xe]||y[oe]||y.namespaceURI==="http://www.w3.org/2000/svg"||y.hasAttribute("itemprop"))&&(y=m.createElement(l),m.head.insertBefore(y,m.querySelector("head > title"))),Gt(y,l,i),y[oe]=t,Ue(y),l=y;break e;case"link":var j=Hy("link","href",m).get(l+(i.href||""));if(j){for(var C=0;C<j.length;C++)if(y=j[C],y.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&y.getAttribute("rel")===(i.rel==null?null:i.rel)&&y.getAttribute("title")===(i.title==null?null:i.title)&&y.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){j.splice(C,1);break t}}y=m.createElement(l),Gt(y,l,i),m.head.appendChild(y);break;case"meta":if(j=Hy("meta","content",m).get(l+(i.content||""))){for(C=0;C<j.length;C++)if(y=j[C],y.getAttribute("content")===(i.content==null?null:""+i.content)&&y.getAttribute("name")===(i.name==null?null:i.name)&&y.getAttribute("property")===(i.property==null?null:i.property)&&y.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&y.getAttribute("charset")===(i.charSet==null?null:i.charSet)){j.splice(C,1);break t}}y=m.createElement(l),Gt(y,l,i),m.head.appendChild(y);break;default:throw Error(o(468,l))}y[oe]=t,Ue(y),l=y}t.stateNode=l}else By(m,t.type,t.stateNode);else t.stateNode=Uy(m,l,t.memoizedProps);else y!==l?(y===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):y.count--,l===null?By(m,t.type,t.stateNode):Uy(m,l,t.memoizedProps)):l===null&&t.stateNode!==null&&bf(t,t.memoizedProps,i.memoizedProps)}break;case 27:Ta(a,t),Ca(t),l&512&&(St||i===null||dn(i,i.return)),i!==null&&l&4&&bf(t,t.memoizedProps,i.memoizedProps);break;case 5:if(Ta(a,t),Ca(t),l&512&&(St||i===null||dn(i,i.return)),t.flags&32){m=t.stateNode;try{_i(m,"")}catch(Q){lt(t,t.return,Q)}}l&4&&t.stateNode!=null&&(m=t.memoizedProps,bf(t,m,i!==null?i.memoizedProps:m)),l&1024&&(Sf=!0);break;case 6:if(Ta(a,t),Ca(t),l&4){if(t.stateNode===null)throw Error(o(162));l=t.memoizedProps,i=t.stateNode;try{i.nodeValue=l}catch(Q){lt(t,t.return,Q)}}break;case 3:if(Nc=null,m=Wa,Wa=jc(a.containerInfo),Ta(a,t),Wa=m,Ca(t),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Rs(a.containerInfo)}catch(Q){lt(t,t.return,Q)}Sf&&(Sf=!1,Ig(t));break;case 4:l=Wa,Wa=jc(t.stateNode.containerInfo),Ta(a,t),Ca(t),Wa=l;break;case 12:Ta(a,t),Ca(t);break;case 13:Ta(a,t),Ca(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(_f=gt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ef(t,l)));break;case 22:m=t.memoizedState!==null;var z=i!==null&&i.memoizedState!==null,I=Ln,ee=St;if(Ln=I||m,St=ee||z,Ta(a,t),St=ee,Ln=I,Ca(t),l&8192)e:for(a=t.stateNode,a._visibility=m?a._visibility&-2:a._visibility|1,m&&(i===null||z||Ln||St||ci(t)),i=null,a=t;;){if(a.tag===5||a.tag===26){if(i===null){z=i=a;try{if(y=z.stateNode,m)j=y.style,typeof j.setProperty=="function"?j.setProperty("display","none","important"):j.display="none";else{C=z.stateNode;var ie=z.memoizedProps.style,V=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;C.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(Q){lt(z,z.return,Q)}}}else if(a.tag===6){if(i===null){z=a;try{z.stateNode.nodeValue=m?"":z.memoizedProps}catch(Q){lt(z,z.return,Q)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;i===a&&(i=null),a=a.return}i===a&&(i=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=t.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,Ef(t,i))));break;case 19:Ta(a,t),Ca(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ef(t,l)));break;case 30:break;case 21:break;default:Ta(a,t),Ca(t)}}function Ca(t){var a=t.flags;if(a&2){try{for(var i,l=t.return;l!==null;){if(Ug(l)){i=l;break}l=l.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var m=i.stateNode,y=xf(t);dc(t,y,m);break;case 5:var j=i.stateNode;i.flags&32&&(_i(j,""),i.flags&=-33);var C=xf(t);dc(t,C,j);break;case 3:case 4:var z=i.stateNode.containerInfo,I=xf(t);wf(t,I,z);break;default:throw Error(o(161))}}catch(ee){lt(t,t.return,ee)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Ig(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Ig(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function cr(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)$g(t,a.alternate,a),a=a.sibling}function ci(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:lr(4,a,a.return),ci(a);break;case 1:dn(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&Lg(a,a.return,i),ci(a);break;case 27:ys(a.stateNode);case 26:case 5:dn(a,a.return),ci(a);break;case 22:a.memoizedState===null&&ci(a);break;case 30:ci(a);break;default:ci(a)}t=t.sibling}}function ur(t,a,i){for(i=i&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,m=t,y=a,j=y.flags;switch(y.tag){case 0:case 11:case 15:ur(m,y,i),ss(4,y);break;case 1:if(ur(m,y,i),l=y,m=l.stateNode,typeof m.componentDidMount=="function")try{m.componentDidMount()}catch(I){lt(l,l.return,I)}if(l=y,m=l.updateQueue,m!==null){var C=l.stateNode;try{var z=m.shared.hiddenCallbacks;if(z!==null)for(m.shared.hiddenCallbacks=null,m=0;m<z.length;m++)x0(z[m],C)}catch(I){lt(l,l.return,I)}}i&&j&64&&kg(y),ls(y,y.return);break;case 27:Hg(y);case 26:case 5:ur(m,y,i),i&&l===null&&j&4&&zg(y),ls(y,y.return);break;case 12:ur(m,y,i);break;case 13:ur(m,y,i),i&&j&4&&Fg(m,y);break;case 22:y.memoizedState===null&&ur(m,y,i),ls(y,y.return);break;case 30:break;default:ur(m,y,i)}a=a.sibling}}function jf(t,a){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Xo(i))}function Rf(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Xo(t))}function fn(t,a,i,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Gg(t,a,i,l),a=a.sibling}function Gg(t,a,i,l){var m=a.flags;switch(a.tag){case 0:case 11:case 15:fn(t,a,i,l),m&2048&&ss(9,a);break;case 1:fn(t,a,i,l);break;case 3:fn(t,a,i,l),m&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Xo(t)));break;case 12:if(m&2048){fn(t,a,i,l),t=a.stateNode;try{var y=a.memoizedProps,j=y.id,C=y.onPostCommit;typeof C=="function"&&C(j,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){lt(a,a.return,z)}}else fn(t,a,i,l);break;case 13:fn(t,a,i,l);break;case 23:break;case 22:y=a.stateNode,j=a.alternate,a.memoizedState!==null?y._visibility&2?fn(t,a,i,l):cs(t,a):y._visibility&2?fn(t,a,i,l):(y._visibility|=2,Vi(t,a,i,l,(a.subtreeFlags&10256)!==0)),m&2048&&jf(j,a);break;case 24:fn(t,a,i,l),m&2048&&Rf(a.alternate,a);break;default:fn(t,a,i,l)}}function Vi(t,a,i,l,m){for(m=m&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var y=t,j=a,C=i,z=l,I=j.flags;switch(j.tag){case 0:case 11:case 15:Vi(y,j,C,z,m),ss(8,j);break;case 23:break;case 22:var ee=j.stateNode;j.memoizedState!==null?ee._visibility&2?Vi(y,j,C,z,m):cs(y,j):(ee._visibility|=2,Vi(y,j,C,z,m)),m&&I&2048&&jf(j.alternate,j);break;case 24:Vi(y,j,C,z,m),m&&I&2048&&Rf(j.alternate,j);break;default:Vi(y,j,C,z,m)}a=a.sibling}}function cs(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var i=t,l=a,m=l.flags;switch(l.tag){case 22:cs(i,l),m&2048&&jf(l.alternate,l);break;case 24:cs(i,l),m&2048&&Rf(l.alternate,l);break;default:cs(i,l)}a=a.sibling}}var us=8192;function Qi(t){if(t.subtreeFlags&us)for(t=t.child;t!==null;)Xg(t),t=t.sibling}function Xg(t){switch(t.tag){case 26:Qi(t),t.flags&us&&t.memoizedState!==null&&xj(Wa,t.memoizedState,t.memoizedProps);break;case 5:Qi(t);break;case 3:case 4:var a=Wa;Wa=jc(t.stateNode.containerInfo),Qi(t),Wa=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=us,us=16777216,Qi(t),us=a):Qi(t));break;default:Qi(t)}}function Vg(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function ds(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var l=a[i];Ut=l,Kg(l,t)}Vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qg(t),t=t.sibling}function Qg(t){switch(t.tag){case 0:case 11:case 15:ds(t),t.flags&2048&&lr(9,t,t.return);break;case 3:ds(t);break;case 12:ds(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,fc(t)):ds(t);break;default:ds(t)}}function fc(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var l=a[i];Ut=l,Kg(l,t)}Vg(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:lr(8,a,a.return),fc(a);break;case 22:i=a.stateNode,i._visibility&2&&(i._visibility&=-3,fc(a));break;default:fc(a)}t=t.sibling}}function Kg(t,a){for(;Ut!==null;){var i=Ut;switch(i.tag){case 0:case 11:case 15:lr(8,i,a);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xo(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,Ut=l;else e:for(i=t;Ut!==null;){l=Ut;var m=l.sibling,y=l.return;if(Pg(l),l===i){Ut=null;break e}if(m!==null){m.return=y,Ut=m;break e}Ut=y}}}var z2={getCacheForType:function(t){var a=Xt(Mt),i=a.data.get(t);return i===void 0&&(i=t(),a.data.set(t,i)),i}},U2=typeof WeakMap=="function"?WeakMap:Map,tt=0,ut=null,Ie=null,Xe=0,at=0,_a=null,dr=!1,Ki=!1,Nf=!1,Un=0,xt=0,fr=0,ui=0,Tf=0,Fa=0,Zi=0,fs=null,fa=null,Cf=!1,_f=0,mc=1/0,hc=null,mr=null,It=0,hr=null,Wi=null,Ji=0,Of=0,Df=null,Zg=null,ms=0,Af=null;function Oa(){if((tt&2)!==0&&Xe!==0)return Xe&-Xe;if(U.T!==null){var t=$i;return t!==0?t:Bf()}return B()}function Wg(){Fa===0&&(Fa=(Xe&536870912)===0||Ze?Ri():536870912);var t=Ya.current;return t!==null&&(t.flags|=32),Fa}function Da(t,a,i){(t===ut&&(at===2||at===9)||t.cancelPendingCommit!==null)&&(eo(t,0),pr(t,Xe,Fa,!1)),Gr(t,i),((tt&2)===0||t!==ut)&&(t===ut&&((tt&2)===0&&(ui|=i),xt===4&&pr(t,Xe,Fa,!1)),mn(t))}function Jg(t,a,i){if((tt&6)!==0)throw Error(o(327));var l=!i&&(a&124)===0&&(a&t.expiredLanes)===0||sn(t,a),m=l?$2(t,a):Lf(t,a,!0),y=l;do{if(m===0){Ki&&!l&&pr(t,a,0,!1);break}else{if(i=t.current.alternate,y&&!H2(i)){m=Lf(t,a,!1),y=!1;continue}if(m===2){if(y=a,t.errorRecoveryDisabledLanes&y)var j=0;else j=t.pendingLanes&-536870913,j=j!==0?j:j&536870912?536870912:0;if(j!==0){a=j;e:{var C=t;m=fs;var z=C.current.memoizedState.isDehydrated;if(z&&(eo(C,j).flags|=256),j=Lf(C,j,!1),j!==2){if(Nf&&!z){C.errorRecoveryDisabledLanes|=y,ui|=y,m=4;break e}y=fa,fa=m,y!==null&&(fa===null?fa=y:fa.push.apply(fa,y))}m=j}if(y=!1,m!==2)continue}}if(m===1){eo(t,0),pr(t,a,0,!0);break}e:{switch(l=t,y=m,y){case 0:case 1:throw Error(o(345));case 4:if((a&4194048)!==a)break;case 6:pr(l,a,Fa,!dr);break e;case 2:fa=null;break;case 3:case 5:break;default:throw Error(o(329))}if((a&62914560)===a&&(m=_f+300-gt(),10<m)){if(pr(l,a,Fa,!dr),Ir(l,0,!0)!==0)break e;l.timeoutHandle=Cy(ey.bind(null,l,i,fa,hc,Cf,a,Fa,ui,Zi,dr,y,2,-0,0),m);break e}ey(l,i,fa,hc,Cf,a,Fa,ui,Zi,dr,y,0,-0,0)}}break}while(!0);mn(t)}function ey(t,a,i,l,m,y,j,C,z,I,ee,ie,V,Q){if(t.timeoutHandle=-1,ie=a.subtreeFlags,(ie&8192||(ie&16785408)===16785408)&&(xs={stylesheets:null,count:0,unsuspend:bj},Xg(a),ie=wj(),ie!==null)){t.cancelPendingCommit=ie(sy.bind(null,t,a,y,i,l,m,j,C,z,ee,1,V,Q)),pr(t,y,j,!I);return}sy(t,a,y,i,l,m,j,C,z)}function H2(t){for(var a=t;;){var i=a.tag;if((i===0||i===11||i===15)&&a.flags&16384&&(i=a.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var m=i[l],y=m.getSnapshot;m=m.value;try{if(!Ra(y(),m))return!1}catch{return!1}}if(i=a.child,a.subtreeFlags&16384&&i!==null)i.return=a,a=i;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function pr(t,a,i,l){a&=~Tf,a&=~ui,t.suspendedLanes|=a,t.pingedLanes&=~a,l&&(t.warmLanes|=a),l=t.expirationTimes;for(var m=a;0<m;){var y=31-Ft(m),j=1<<y;l[y]=-1,m&=~j}i!==0&&Xr(t,i,a)}function pc(){return(tt&6)===0?(hs(0),!1):!0}function Mf(){if(Ie!==null){if(at===0)var t=Ie.return;else t=Ie,_n=ri=null,Qd(t),Gi=null,rs=0,t=Ie;for(;t!==null;)Mg(t.alternate,t),t=t.return;Ie=null}}function eo(t,a){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,aj(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Mf(),ut=t,Ie=i=Nn(t.current,null),Xe=a,at=0,_a=null,dr=!1,Ki=sn(t,a),Nf=!1,Zi=Fa=Tf=ui=fr=xt=0,fa=fs=null,Cf=!1,(a&8)!==0&&(a|=a&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=a;0<l;){var m=31-Ft(l),y=1<<m;a|=t[m],l&=~y}return Un=a,Ul(),i}function ty(t,a){Fe=null,U.H=ac,a===Qo||a===Gl?(a=v0(),at=3):a===p0?(a=v0(),at=4):at=a===bg?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,_a=a,Ie===null&&(xt=1,sc(t,Ha(a,t.current)))}function ay(){var t=U.H;return U.H=ac,t===null?ac:t}function ny(){var t=U.A;return U.A=z2,t}function kf(){xt=4,dr||(Xe&4194048)!==Xe&&Ya.current!==null||(Ki=!0),(fr&134217727)===0&&(ui&134217727)===0||ut===null||pr(ut,Xe,Fa,!1)}function Lf(t,a,i){var l=tt;tt|=2;var m=ay(),y=ny();(ut!==t||Xe!==a)&&(hc=null,eo(t,a)),a=!1;var j=xt;e:do try{if(at!==0&&Ie!==null){var C=Ie,z=_a;switch(at){case 8:Mf(),j=6;break e;case 3:case 2:case 9:case 6:Ya.current===null&&(a=!0);var I=at;if(at=0,_a=null,to(t,C,z,I),i&&Ki){j=0;break e}break;default:I=at,at=0,_a=null,to(t,C,z,I)}}B2(),j=xt;break}catch(ee){ty(t,ee)}while(!0);return a&&t.shellSuspendCounter++,_n=ri=null,tt=l,U.H=m,U.A=y,Ie===null&&(ut=null,Xe=0,Ul()),j}function B2(){for(;Ie!==null;)ry(Ie)}function $2(t,a){var i=tt;tt|=2;var l=ay(),m=ny();ut!==t||Xe!==a?(hc=null,mc=gt()+500,eo(t,a)):Ki=sn(t,a);e:do try{if(at!==0&&Ie!==null){a=Ie;var y=_a;t:switch(at){case 1:at=0,_a=null,to(t,a,y,1);break;case 2:case 9:if(g0(y)){at=0,_a=null,iy(a);break}a=function(){at!==2&&at!==9||ut!==t||(at=7),mn(t)},y.then(a,a);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:g0(y)?(at=0,_a=null,iy(a)):(at=0,_a=null,to(t,a,y,7));break;case 5:var j=null;switch(Ie.tag){case 26:j=Ie.memoizedState;case 5:case 27:var C=Ie;if(!j||$y(j)){at=0,_a=null;var z=C.sibling;if(z!==null)Ie=z;else{var I=C.return;I!==null?(Ie=I,gc(I)):Ie=null}break t}}at=0,_a=null,to(t,a,y,5);break;case 6:at=0,_a=null,to(t,a,y,6);break;case 8:Mf(),xt=6;break e;default:throw Error(o(462))}}P2();break}catch(ee){ty(t,ee)}while(!0);return _n=ri=null,U.H=l,U.A=m,tt=i,Ie!==null?0:(ut=null,Xe=0,Ul(),xt)}function P2(){for(;Ie!==null&&!We();)ry(Ie)}function ry(t){var a=Dg(t.alternate,t,Un);t.memoizedProps=t.pendingProps,a===null?gc(t):Ie=a}function iy(t){var a=t,i=a.alternate;switch(a.tag){case 15:case 0:a=Rg(i,a,a.pendingProps,a.type,void 0,Xe);break;case 11:a=Rg(i,a,a.pendingProps,a.type.render,a.ref,Xe);break;case 5:Qd(a);default:Mg(i,a),a=Ie=o0(a,Un),a=Dg(i,a,Un)}t.memoizedProps=t.pendingProps,a===null?gc(t):Ie=a}function to(t,a,i,l){_n=ri=null,Qd(a),Gi=null,rs=0;var m=a.return;try{if(O2(t,m,a,i,Xe)){xt=1,sc(t,Ha(i,t.current)),Ie=null;return}}catch(y){if(m!==null)throw Ie=m,y;xt=1,sc(t,Ha(i,t.current)),Ie=null;return}a.flags&32768?(Ze||l===1?t=!0:Ki||(Xe&536870912)!==0?t=!1:(dr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ya.current,l!==null&&l.tag===13&&(l.flags|=16384))),oy(a,t)):gc(a)}function gc(t){var a=t;do{if((a.flags&32768)!==0){oy(a,dr);return}t=a.return;var i=A2(a.alternate,a,Un);if(i!==null){Ie=i;return}if(a=a.sibling,a!==null){Ie=a;return}Ie=a=t}while(a!==null);xt===0&&(xt=5)}function oy(t,a){do{var i=M2(t.alternate,t);if(i!==null){i.flags&=32767,Ie=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!a&&(t=t.sibling,t!==null)){Ie=t;return}Ie=t=i}while(t!==null);xt=6,Ie=null}function sy(t,a,i,l,m,y,j,C,z){t.cancelPendingCommit=null;do yc();while(It!==0);if((tt&6)!==0)throw Error(o(327));if(a!==null){if(a===t.current)throw Error(o(177));if(y=a.lanes|a.childLanes,y|=jd,Rl(t,i,y,j,C,z),t===ut&&(Ie=ut=null,Xe=0),Wi=a,hr=t,Ji=i,Of=y,Df=m,Zg=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,I2(Sa,function(){return fy(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,m=X.p,X.p=2,j=tt,tt|=4;try{k2(t,a,i)}finally{tt=j,X.p=m,U.T=l}}It=1,ly(),cy(),uy()}}function ly(){if(It===1){It=0;var t=hr,a=Wi,i=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||i){i=U.T,U.T=null;var l=X.p;X.p=2;var m=tt;tt|=4;try{qg(a,t);var y=Xf,j=Kp(t.containerInfo),C=y.focusedElem,z=y.selectionRange;if(j!==C&&C&&C.ownerDocument&&Qp(C.ownerDocument.documentElement,C)){if(z!==null&&bd(C)){var I=z.start,ee=z.end;if(ee===void 0&&(ee=I),"selectionStart"in C)C.selectionStart=I,C.selectionEnd=Math.min(ee,C.value.length);else{var ie=C.ownerDocument||document,V=ie&&ie.defaultView||window;if(V.getSelection){var Q=V.getSelection(),ke=C.textContent.length,De=Math.min(z.start,ke),st=z.end===void 0?De:Math.min(z.end,ke);!Q.extend&&De>st&&(j=st,st=De,De=j);var P=Vp(C,De),$=Vp(C,st);if(P&&$&&(Q.rangeCount!==1||Q.anchorNode!==P.node||Q.anchorOffset!==P.offset||Q.focusNode!==$.node||Q.focusOffset!==$.offset)){var q=ie.createRange();q.setStart(P.node,P.offset),Q.removeAllRanges(),De>st?(Q.addRange(q),Q.extend($.node,$.offset)):(q.setEnd($.node,$.offset),Q.addRange(q))}}}}for(ie=[],Q=C;Q=Q.parentNode;)Q.nodeType===1&&ie.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ie.length;C++){var ae=ie[C];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}_c=!!Gf,Xf=Gf=null}finally{tt=m,X.p=l,U.T=i}}t.current=a,It=2}}function cy(){if(It===2){It=0;var t=hr,a=Wi,i=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||i){i=U.T,U.T=null;var l=X.p;X.p=2;var m=tt;tt|=4;try{$g(t,a.alternate,a)}finally{tt=m,X.p=l,U.T=i}}It=3}}function uy(){if(It===4||It===3){It=0,Qa();var t=hr,a=Wi,i=Ji,l=Zg;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?It=5:(It=0,Wi=hr=null,dy(t,t.pendingLanes));var m=t.pendingLanes;if(m===0&&(mr=null),Mo(i),a=a.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Me,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=U.T,m=X.p,X.p=2,U.T=null;try{for(var y=t.onRecoverableError,j=0;j<l.length;j++){var C=l[j];y(C.value,{componentStack:C.stack})}}finally{U.T=a,X.p=m}}(Ji&3)!==0&&yc(),mn(t),m=t.pendingLanes,(i&4194090)!==0&&(m&42)!==0?t===Af?ms++:(ms=0,Af=t):ms=0,hs(0)}}function dy(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Xo(a)))}function yc(t){return ly(),cy(),uy(),fy()}function fy(){if(It!==5)return!1;var t=hr,a=Of;Of=0;var i=Mo(Ji),l=U.T,m=X.p;try{X.p=32>i?32:i,U.T=null,i=Df,Df=null;var y=hr,j=Ji;if(It=0,Wi=hr=null,Ji=0,(tt&6)!==0)throw Error(o(331));var C=tt;if(tt|=4,Qg(y.current),Gg(y,y.current,j,i),tt=C,hs(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Me,y)}catch{}return!0}finally{X.p=m,U.T=l,dy(t,a)}}function my(t,a,i){a=Ha(i,a),a=uf(t.stateNode,a,2),t=rr(t,a,2),t!==null&&(Gr(t,2),mn(t))}function lt(t,a,i){if(t.tag===3)my(t,t,i);else for(;a!==null;){if(a.tag===3){my(a,t,i);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mr===null||!mr.has(l))){t=Ha(i,t),i=yg(2),l=rr(a,i,2),l!==null&&(vg(i,l,a,t),Gr(l,2),mn(l));break}}a=a.return}}function zf(t,a,i){var l=t.pingCache;if(l===null){l=t.pingCache=new U2;var m=new Set;l.set(a,m)}else m=l.get(a),m===void 0&&(m=new Set,l.set(a,m));m.has(i)||(Nf=!0,m.add(i),t=Y2.bind(null,t,a,i),a.then(t,t))}function Y2(t,a,i){var l=t.pingCache;l!==null&&l.delete(a),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,ut===t&&(Xe&i)===i&&(xt===4||xt===3&&(Xe&62914560)===Xe&&300>gt()-_f?(tt&2)===0&&eo(t,0):Tf|=i,Zi===Xe&&(Zi=0)),mn(t)}function hy(t,a){a===0&&(a=jl()),t=zi(t,a),t!==null&&(Gr(t,a),mn(t))}function F2(t){var a=t.memoizedState,i=0;a!==null&&(i=a.retryLane),hy(t,i)}function q2(t,a){var i=0;switch(t.tag){case 13:var l=t.stateNode,m=t.memoizedState;m!==null&&(i=m.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(a),hy(t,i)}function I2(t,a){return oa(t,a)}var vc=null,ao=null,Uf=!1,bc=!1,Hf=!1,di=0;function mn(t){t!==ao&&t.next===null&&(ao===null?vc=ao=t:ao=ao.next=t),bc=!0,Uf||(Uf=!0,X2())}function hs(t,a){if(!Hf&&bc){Hf=!0;do for(var i=!1,l=vc;l!==null;){if(t!==0){var m=l.pendingLanes;if(m===0)var y=0;else{var j=l.suspendedLanes,C=l.pingedLanes;y=(1<<31-Ft(42|t)+1)-1,y&=m&~(j&~C),y=y&201326741?y&201326741|1:y?y|2:0}y!==0&&(i=!0,vy(l,y))}else y=Xe,y=Ir(l,l===ut?y:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(y&3)===0||sn(l,y)||(i=!0,vy(l,y));l=l.next}while(i);Hf=!1}}function G2(){py()}function py(){bc=Uf=!1;var t=0;di!==0&&(tj()&&(t=di),di=0);for(var a=gt(),i=null,l=vc;l!==null;){var m=l.next,y=gy(l,a);y===0?(l.next=null,i===null?vc=m:i.next=m,m===null&&(ao=i)):(i=l,(t!==0||(y&3)!==0)&&(bc=!0)),l=m}hs(t)}function gy(t,a){for(var i=t.suspendedLanes,l=t.pingedLanes,m=t.expirationTimes,y=t.pendingLanes&-62914561;0<y;){var j=31-Ft(y),C=1<<j,z=m[j];z===-1?((C&i)===0||(C&l)!==0)&&(m[j]=El(C,a)):z<=a&&(t.expiredLanes|=C),y&=~C}if(a=ut,i=Xe,i=Ir(t,t===a?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,i===0||t===a&&(at===2||at===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Tt(l),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||sn(t,i)){if(a=i&-i,a===t.callbackPriority)return a;switch(l!==null&&Tt(l),Mo(i)){case 2:case 8:i=sa;break;case 32:i=Sa;break;case 268435456:i=Ea;break;default:i=Sa}return l=yy.bind(null,t),i=oa(i,l),t.callbackPriority=a,t.callbackNode=i,a}return l!==null&&l!==null&&Tt(l),t.callbackPriority=2,t.callbackNode=null,2}function yy(t,a){if(It!==0&&It!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(yc()&&t.callbackNode!==i)return null;var l=Xe;return l=Ir(t,t===ut?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Jg(t,l,a),gy(t,gt()),t.callbackNode!=null&&t.callbackNode===i?yy.bind(null,t):null)}function vy(t,a){if(yc())return null;Jg(t,a,!0)}function X2(){nj(function(){(tt&6)!==0?oa(Zn,G2):py()})}function Bf(){return di===0&&(di=Ri()),di}function by(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ol(""+t)}function xy(t,a){var i=a.ownerDocument.createElement("input");return i.name=a.name,i.value=a.value,t.id&&i.setAttribute("form",t.id),a.parentNode.insertBefore(i,a),t=new FormData(t),i.parentNode.removeChild(i),t}function V2(t,a,i,l,m){if(a==="submit"&&i&&i.stateNode===m){var y=by((m[ue]||null).action),j=l.submitter;j&&(a=(a=j[ue]||null)?by(a.formAction):j.getAttribute("formAction"),a!==null&&(y=a,j=null));var C=new kl("action","action",null,l,m);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(di!==0){var z=j?xy(m,j):new FormData(m);rf(i,{pending:!0,data:z,method:m.method,action:y},null,z)}}else typeof y=="function"&&(C.preventDefault(),z=j?xy(m,j):new FormData(m),rf(i,{pending:!0,data:z,method:m.method,action:y},y,z))},currentTarget:m}]})}}for(var $f=0;$f<Ed.length;$f++){var Pf=Ed[$f],Q2=Pf.toLowerCase(),K2=Pf[0].toUpperCase()+Pf.slice(1);Za(Q2,"on"+K2)}Za(Jp,"onAnimationEnd"),Za(e0,"onAnimationIteration"),Za(t0,"onAnimationStart"),Za("dblclick","onDoubleClick"),Za("focusin","onFocus"),Za("focusout","onBlur"),Za(m2,"onTransitionRun"),Za(h2,"onTransitionStart"),Za(p2,"onTransitionCancel"),Za(a0,"onTransitionEnd"),ta("onMouseEnter",["mouseout","mouseover"]),ta("onMouseLeave",["mouseout","mouseover"]),ta("onPointerEnter",["pointerout","pointerover"]),ta("onPointerLeave",["pointerout","pointerover"]),ja("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ja("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ja("onBeforeInput",["compositionend","keypress","textInput","paste"]),ja("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ja("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ps));function wy(t,a){a=(a&4)!==0;for(var i=0;i<t.length;i++){var l=t[i],m=l.event;l=l.listeners;e:{var y=void 0;if(a)for(var j=l.length-1;0<=j;j--){var C=l[j],z=C.instance,I=C.currentTarget;if(C=C.listener,z!==y&&m.isPropagationStopped())break e;y=C,m.currentTarget=I;try{y(m)}catch(ee){oc(ee)}m.currentTarget=null,y=z}else for(j=0;j<l.length;j++){if(C=l[j],z=C.instance,I=C.currentTarget,C=C.listener,z!==y&&m.isPropagationStopped())break e;y=C,m.currentTarget=I;try{y(m)}catch(ee){oc(ee)}m.currentTarget=null,y=z}}}}function Ge(t,a){var i=a[je];i===void 0&&(i=a[je]=new Set);var l=t+"__bubble";i.has(l)||(Sy(a,t,2,!1),i.add(l))}function Yf(t,a,i){var l=0;a&&(l|=4),Sy(i,t,l,a)}var xc="_reactListening"+Math.random().toString(36).slice(2);function Ff(t){if(!t[xc]){t[xc]=!0,rt.forEach(function(i){i!=="selectionchange"&&(Z2.has(i)||Yf(i,!1,t),Yf(i,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[xc]||(a[xc]=!0,Yf("selectionchange",!1,a))}}function Sy(t,a,i,l){switch(Gy(a)){case 2:var m=jj;break;case 8:m=Rj;break;default:m=nm}i=m.bind(null,a,i,t),m=void 0,!ud||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),l?m!==void 0?t.addEventListener(a,i,{capture:!0,passive:m}):t.addEventListener(a,i,!0):m!==void 0?t.addEventListener(a,i,{passive:m}):t.addEventListener(a,i,!1)}function qf(t,a,i,l,m){var y=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var j=l.tag;if(j===3||j===4){var C=l.stateNode.containerInfo;if(C===m)break;if(j===4)for(j=l.return;j!==null;){var z=j.tag;if((z===3||z===4)&&j.stateNode.containerInfo===m)return;j=j.return}for(;C!==null;){if(j=Pe(C),j===null)return;if(z=j.tag,z===5||z===6||z===26||z===27){l=y=j;continue e}C=C.parentNode}}l=l.return}_p(function(){var I=y,ee=ld(i),ie=[];e:{var V=n0.get(t);if(V!==void 0){var Q=kl,ke=t;switch(t){case"keypress":if(Al(i)===0)break e;case"keydown":case"keyup":Q=IE;break;case"focusin":ke="focus",Q=hd;break;case"focusout":ke="blur",Q=hd;break;case"beforeblur":case"afterblur":Q=hd;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=ME;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=VE;break;case Jp:case e0:case t0:Q=zE;break;case a0:Q=KE;break;case"scroll":case"scrollend":Q=DE;break;case"wheel":Q=WE;break;case"copy":case"cut":case"paste":Q=HE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=kp;break;case"toggle":case"beforetoggle":Q=e2}var De=(a&4)!==0,st=!De&&(t==="scroll"||t==="scrollend"),P=De?V!==null?V+"Capture":null:V;De=[];for(var $=I,q;$!==null;){var ae=$;if(q=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||q===null||P===null||(ae=ko($,P),ae!=null&&De.push(gs($,ae,q))),st)break;$=$.return}0<De.length&&(V=new Q(V,ke,null,i,ee),ie.push({event:V,listeners:De}))}}if((a&7)===0){e:{if(V=t==="mouseover"||t==="pointerover",Q=t==="mouseout"||t==="pointerout",V&&i!==sd&&(ke=i.relatedTarget||i.fromElement)&&(Pe(ke)||ke[ye]))break e;if((Q||V)&&(V=ee.window===ee?ee:(V=ee.ownerDocument)?V.defaultView||V.parentWindow:window,Q?(ke=i.relatedTarget||i.toElement,Q=I,ke=ke?Pe(ke):null,ke!==null&&(st=c(ke),De=ke.tag,ke!==st||De!==5&&De!==27&&De!==6)&&(ke=null)):(Q=null,ke=I),Q!==ke)){if(De=Ap,ae="onMouseLeave",P="onMouseEnter",$="mouse",(t==="pointerout"||t==="pointerover")&&(De=kp,ae="onPointerLeave",P="onPointerEnter",$="pointer"),st=Q==null?V:yt(Q),q=ke==null?V:yt(ke),V=new De(ae,$+"leave",Q,i,ee),V.target=st,V.relatedTarget=q,ae=null,Pe(ee)===I&&(De=new De(P,$+"enter",ke,i,ee),De.target=q,De.relatedTarget=st,ae=De),st=ae,Q&&ke)t:{for(De=Q,P=ke,$=0,q=De;q;q=no(q))$++;for(q=0,ae=P;ae;ae=no(ae))q++;for(;0<$-q;)De=no(De),$--;for(;0<q-$;)P=no(P),q--;for(;$--;){if(De===P||P!==null&&De===P.alternate)break t;De=no(De),P=no(P)}De=null}else De=null;Q!==null&&Ey(ie,V,Q,De,!1),ke!==null&&st!==null&&Ey(ie,st,ke,De,!0)}}e:{if(V=I?yt(I):window,Q=V.nodeName&&V.nodeName.toLowerCase(),Q==="select"||Q==="input"&&V.type==="file")var ge=Yp;else if($p(V))if(Fp)ge=u2;else{ge=l2;var qe=s2}else Q=V.nodeName,!Q||Q.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?I&&od(I.elementType)&&(ge=Yp):ge=c2;if(ge&&(ge=ge(t,I))){Pp(ie,ge,i,ee);break e}qe&&qe(t,V,I),t==="focusout"&&I&&V.type==="number"&&I.memoizedProps.value!=null&&id(V,"number",V.value)}switch(qe=I?yt(I):window,t){case"focusin":($p(qe)||qe.contentEditable==="true")&&(Mi=qe,xd=I,Yo=null);break;case"focusout":Yo=xd=Mi=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,Zp(ie,i,ee);break;case"selectionchange":if(f2)break;case"keydown":case"keyup":Zp(ie,i,ee)}var Te;if(gd)e:{switch(t){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Ai?Hp(t,i)&&(Ae="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Ae="onCompositionStart");Ae&&(Lp&&i.locale!=="ko"&&(Ai||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ai&&(Te=Op()):(er=ee,dd="value"in er?er.value:er.textContent,Ai=!0)),qe=wc(I,Ae),0<qe.length&&(Ae=new Mp(Ae,t,null,i,ee),ie.push({event:Ae,listeners:qe}),Te?Ae.data=Te:(Te=Bp(i),Te!==null&&(Ae.data=Te)))),(Te=a2?n2(t,i):r2(t,i))&&(Ae=wc(I,"onBeforeInput"),0<Ae.length&&(qe=new Mp("onBeforeInput","beforeinput",null,i,ee),ie.push({event:qe,listeners:Ae}),qe.data=Te)),V2(ie,t,I,i,ee)}wy(ie,a)})}function gs(t,a,i){return{instance:t,listener:a,currentTarget:i}}function wc(t,a){for(var i=a+"Capture",l=[];t!==null;){var m=t,y=m.stateNode;if(m=m.tag,m!==5&&m!==26&&m!==27||y===null||(m=ko(t,i),m!=null&&l.unshift(gs(t,m,y)),m=ko(t,a),m!=null&&l.push(gs(t,m,y))),t.tag===3)return l;t=t.return}return[]}function no(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ey(t,a,i,l,m){for(var y=a._reactName,j=[];i!==null&&i!==l;){var C=i,z=C.alternate,I=C.stateNode;if(C=C.tag,z!==null&&z===l)break;C!==5&&C!==26&&C!==27||I===null||(z=I,m?(I=ko(i,y),I!=null&&j.unshift(gs(i,I,z))):m||(I=ko(i,y),I!=null&&j.push(gs(i,I,z)))),i=i.return}j.length!==0&&t.push({event:a,listeners:j})}var W2=/\r\n?/g,J2=/\u0000|\uFFFD/g;function jy(t){return(typeof t=="string"?t:""+t).replace(W2,`
`).replace(J2,"")}function Ry(t,a){return a=jy(a),jy(t)===a}function Sc(){}function ot(t,a,i,l,m,y){switch(i){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||_i(t,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&_i(t,""+l);break;case"className":jn(t,"class",l);break;case"tabIndex":jn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":jn(t,i,l);break;case"style":Tp(t,l,y);break;case"data":if(a!=="object"){jn(t,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||i!=="href")){t.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=Ol(""+l),t.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof y=="function"&&(i==="formAction"?(a!=="input"&&ot(t,a,"name",m.name,m,null),ot(t,a,"formEncType",m.formEncType,m,null),ot(t,a,"formMethod",m.formMethod,m,null),ot(t,a,"formTarget",m.formTarget,m,null)):(ot(t,a,"encType",m.encType,m,null),ot(t,a,"method",m.method,m,null),ot(t,a,"target",m.target,m,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=Ol(""+l),t.setAttribute(i,l);break;case"onClick":l!=null&&(t.onclick=Sc);break;case"onScroll":l!=null&&Ge("scroll",t);break;case"onScrollEnd":l!=null&&Ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(m.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}i=Ol(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""+l):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":l===!0?t.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,l):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(i,l):t.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(i):t.setAttribute(i,l);break;case"popover":Ge("beforetoggle",t),Ge("toggle",t),En(t,"popover",l);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":En(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=_E.get(i)||i,En(t,i,l))}}function If(t,a,i,l,m,y){switch(i){case"style":Tp(t,l,y);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(m.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof l=="string"?_i(t,l):(typeof l=="number"||typeof l=="bigint")&&_i(t,""+l);break;case"onScroll":l!=null&&Ge("scroll",t);break;case"onScrollEnd":l!=null&&Ge("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Sc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ln.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(m=i.endsWith("Capture"),a=i.slice(2,m?i.length-7:void 0),y=t[ue]||null,y=y!=null?y[i]:null,typeof y=="function"&&t.removeEventListener(a,y,m),typeof l=="function")){typeof y!="function"&&y!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(a,l,m);break e}i in t?t[i]=l:l===!0?t.setAttribute(i,""):En(t,i,l)}}}function Gt(t,a,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",t),Ge("load",t);var l=!1,m=!1,y;for(y in i)if(i.hasOwnProperty(y)){var j=i[y];if(j!=null)switch(y){case"src":l=!0;break;case"srcSet":m=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:ot(t,a,y,j,i,null)}}m&&ot(t,a,"srcSet",i.srcSet,i,null),l&&ot(t,a,"src",i.src,i,null);return;case"input":Ge("invalid",t);var C=y=j=m=null,z=null,I=null;for(l in i)if(i.hasOwnProperty(l)){var ee=i[l];if(ee!=null)switch(l){case"name":m=ee;break;case"type":j=ee;break;case"checked":z=ee;break;case"defaultChecked":I=ee;break;case"value":y=ee;break;case"defaultValue":C=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(o(137,a));break;default:ot(t,a,l,ee,i,null)}}Ep(t,y,C,z,I,j,m,!1),Cl(t);return;case"select":Ge("invalid",t),l=j=y=null;for(m in i)if(i.hasOwnProperty(m)&&(C=i[m],C!=null))switch(m){case"value":y=C;break;case"defaultValue":j=C;break;case"multiple":l=C;default:ot(t,a,m,C,i,null)}a=y,i=j,t.multiple=!!l,a!=null?Ci(t,!!l,a,!1):i!=null&&Ci(t,!!l,i,!0);return;case"textarea":Ge("invalid",t),y=m=l=null;for(j in i)if(i.hasOwnProperty(j)&&(C=i[j],C!=null))switch(j){case"value":l=C;break;case"defaultValue":m=C;break;case"children":y=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(91));break;default:ot(t,a,j,C,i,null)}Rp(t,l,m,y),Cl(t);return;case"option":for(z in i)if(i.hasOwnProperty(z)&&(l=i[z],l!=null))switch(z){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ot(t,a,z,l,i,null)}return;case"dialog":Ge("beforetoggle",t),Ge("toggle",t),Ge("cancel",t),Ge("close",t);break;case"iframe":case"object":Ge("load",t);break;case"video":case"audio":for(l=0;l<ps.length;l++)Ge(ps[l],t);break;case"image":Ge("error",t),Ge("load",t);break;case"details":Ge("toggle",t);break;case"embed":case"source":case"link":Ge("error",t),Ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in i)if(i.hasOwnProperty(I)&&(l=i[I],l!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));default:ot(t,a,I,l,i,null)}return;default:if(od(a)){for(ee in i)i.hasOwnProperty(ee)&&(l=i[ee],l!==void 0&&If(t,a,ee,l,i,void 0));return}}for(C in i)i.hasOwnProperty(C)&&(l=i[C],l!=null&&ot(t,a,C,l,i,null))}function ej(t,a,i,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var m=null,y=null,j=null,C=null,z=null,I=null,ee=null;for(Q in i){var ie=i[Q];if(i.hasOwnProperty(Q)&&ie!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":z=ie;default:l.hasOwnProperty(Q)||ot(t,a,Q,null,l,ie)}}for(var V in l){var Q=l[V];if(ie=i[V],l.hasOwnProperty(V)&&(Q!=null||ie!=null))switch(V){case"type":y=Q;break;case"name":m=Q;break;case"checked":I=Q;break;case"defaultChecked":ee=Q;break;case"value":j=Q;break;case"defaultValue":C=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,a));break;default:Q!==ie&&ot(t,a,V,Q,l,ie)}}rd(t,j,C,z,I,ee,y,m);return;case"select":Q=j=C=V=null;for(y in i)if(z=i[y],i.hasOwnProperty(y)&&z!=null)switch(y){case"value":break;case"multiple":Q=z;default:l.hasOwnProperty(y)||ot(t,a,y,null,l,z)}for(m in l)if(y=l[m],z=i[m],l.hasOwnProperty(m)&&(y!=null||z!=null))switch(m){case"value":V=y;break;case"defaultValue":C=y;break;case"multiple":j=y;default:y!==z&&ot(t,a,m,y,l,z)}a=C,i=j,l=Q,V!=null?Ci(t,!!i,V,!1):!!l!=!!i&&(a!=null?Ci(t,!!i,a,!0):Ci(t,!!i,i?[]:"",!1));return;case"textarea":Q=V=null;for(C in i)if(m=i[C],i.hasOwnProperty(C)&&m!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:ot(t,a,C,null,l,m)}for(j in l)if(m=l[j],y=i[j],l.hasOwnProperty(j)&&(m!=null||y!=null))switch(j){case"value":V=m;break;case"defaultValue":Q=m;break;case"children":break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:m!==y&&ot(t,a,j,m,l,y)}jp(t,V,Q);return;case"option":for(var ke in i)if(V=i[ke],i.hasOwnProperty(ke)&&V!=null&&!l.hasOwnProperty(ke))switch(ke){case"selected":t.selected=!1;break;default:ot(t,a,ke,null,l,V)}for(z in l)if(V=l[z],Q=i[z],l.hasOwnProperty(z)&&V!==Q&&(V!=null||Q!=null))switch(z){case"selected":t.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:ot(t,a,z,V,l,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in i)V=i[De],i.hasOwnProperty(De)&&V!=null&&!l.hasOwnProperty(De)&&ot(t,a,De,null,l,V);for(I in l)if(V=l[I],Q=i[I],l.hasOwnProperty(I)&&V!==Q&&(V!=null||Q!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,a));break;default:ot(t,a,I,V,l,Q)}return;default:if(od(a)){for(var st in i)V=i[st],i.hasOwnProperty(st)&&V!==void 0&&!l.hasOwnProperty(st)&&If(t,a,st,void 0,l,V);for(ee in l)V=l[ee],Q=i[ee],!l.hasOwnProperty(ee)||V===Q||V===void 0&&Q===void 0||If(t,a,ee,V,l,Q);return}}for(var P in i)V=i[P],i.hasOwnProperty(P)&&V!=null&&!l.hasOwnProperty(P)&&ot(t,a,P,null,l,V);for(ie in l)V=l[ie],Q=i[ie],!l.hasOwnProperty(ie)||V===Q||V==null&&Q==null||ot(t,a,ie,V,l,Q)}var Gf=null,Xf=null;function Ec(t){return t.nodeType===9?t:t.ownerDocument}function Ny(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ty(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Vf(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Qf=null;function tj(){var t=window.event;return t&&t.type==="popstate"?t===Qf?!1:(Qf=t,!0):(Qf=null,!1)}var Cy=typeof setTimeout=="function"?setTimeout:void 0,aj=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,nj=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(t){return _y.resolve(null).then(t).catch(rj)}:Cy;function rj(t){setTimeout(function(){throw t})}function gr(t){return t==="head"}function Oy(t,a){var i=a,l=0,m=0;do{var y=i.nextSibling;if(t.removeChild(i),y&&y.nodeType===8)if(i=y.data,i==="/$"){if(0<l&&8>l){i=l;var j=t.ownerDocument;if(i&1&&ys(j.documentElement),i&2&&ys(j.body),i&4)for(i=j.head,ys(i),j=i.firstChild;j;){var C=j.nextSibling,z=j.nodeName;j[xe]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&j.rel.toLowerCase()==="stylesheet"||i.removeChild(j),j=C}}if(m===0){t.removeChild(y),Rs(a);return}m--}else i==="$"||i==="$?"||i==="$!"?m++:l=i.charCodeAt(0)-48;else l=0;i=y}while(i);Rs(a)}function Kf(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var i=a;switch(a=a.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Kf(i),Re(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function ij(t,a,i,l){for(;t.nodeType===1;){var m=i;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[xe])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(y=t.getAttribute("rel"),y==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(y!==m.rel||t.getAttribute("href")!==(m.href==null||m.href===""?null:m.href)||t.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin)||t.getAttribute("title")!==(m.title==null?null:m.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(y=t.getAttribute("src"),(y!==(m.src==null?null:m.src)||t.getAttribute("type")!==(m.type==null?null:m.type)||t.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin))&&y&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var y=m.name==null?null:""+m.name;if(m.type==="hidden"&&t.getAttribute("name")===y)return t}else return t;if(t=Ja(t.nextSibling),t===null)break}return null}function oj(t,a,i){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ja(t.nextSibling),t===null))return null;return t}function Zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function sj(t,a){var i=t.ownerDocument;if(t.data!=="$?"||i.readyState==="complete")a();else{var l=function(){a(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ja(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}var Wf=null;function Dy(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(a===0)return t;a--}else i==="/$"&&a++}t=t.previousSibling}return null}function Ay(t,a,i){switch(a=Ec(i),t){case"html":if(t=a.documentElement,!t)throw Error(o(452));return t;case"head":if(t=a.head,!t)throw Error(o(453));return t;case"body":if(t=a.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function ys(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Re(t)}var qa=new Map,My=new Set;function jc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Hn=X.d;X.d={f:lj,r:cj,D:uj,C:dj,L:fj,m:mj,X:pj,S:hj,M:gj};function lj(){var t=Hn.f(),a=pc();return t||a}function cj(t){var a=et(t);a!==null&&a.tag===5&&a.type==="form"?J0(a):Hn.r(t)}var ro=typeof document>"u"?null:document;function ky(t,a,i){var l=ro;if(l&&typeof a=="string"&&a){var m=Ua(a);m='link[rel="'+t+'"][href="'+m+'"]',typeof i=="string"&&(m+='[crossorigin="'+i+'"]'),My.has(m)||(My.add(m),t={rel:t,crossOrigin:i,href:a},l.querySelector(m)===null&&(a=l.createElement("link"),Gt(a,"link",t),Ue(a),l.head.appendChild(a)))}}function uj(t){Hn.D(t),ky("dns-prefetch",t,null)}function dj(t,a){Hn.C(t,a),ky("preconnect",t,a)}function fj(t,a,i){Hn.L(t,a,i);var l=ro;if(l&&t&&a){var m='link[rel="preload"][as="'+Ua(a)+'"]';a==="image"&&i&&i.imageSrcSet?(m+='[imagesrcset="'+Ua(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(m+='[imagesizes="'+Ua(i.imageSizes)+'"]')):m+='[href="'+Ua(t)+'"]';var y=m;switch(a){case"style":y=io(t);break;case"script":y=oo(t)}qa.has(y)||(t=g({rel:"preload",href:a==="image"&&i&&i.imageSrcSet?void 0:t,as:a},i),qa.set(y,t),l.querySelector(m)!==null||a==="style"&&l.querySelector(vs(y))||a==="script"&&l.querySelector(bs(y))||(a=l.createElement("link"),Gt(a,"link",t),Ue(a),l.head.appendChild(a)))}}function mj(t,a){Hn.m(t,a);var i=ro;if(i&&t){var l=a&&typeof a.as=="string"?a.as:"script",m='link[rel="modulepreload"][as="'+Ua(l)+'"][href="'+Ua(t)+'"]',y=m;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":y=oo(t)}if(!qa.has(y)&&(t=g({rel:"modulepreload",href:t},a),qa.set(y,t),i.querySelector(m)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(bs(y)))return}l=i.createElement("link"),Gt(l,"link",t),Ue(l),i.head.appendChild(l)}}}function hj(t,a,i){Hn.S(t,a,i);var l=ro;if(l&&t){var m=vt(l).hoistableStyles,y=io(t);a=a||"default";var j=m.get(y);if(!j){var C={loading:0,preload:null};if(j=l.querySelector(vs(y)))C.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":a},i),(i=qa.get(y))&&Jf(t,i);var z=j=l.createElement("link");Ue(z),Gt(z,"link",t),z._p=new Promise(function(I,ee){z.onload=I,z.onerror=ee}),z.addEventListener("load",function(){C.loading|=1}),z.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Rc(j,a,l)}j={type:"stylesheet",instance:j,count:1,state:C},m.set(y,j)}}}function pj(t,a){Hn.X(t,a);var i=ro;if(i&&t){var l=vt(i).hoistableScripts,m=oo(t),y=l.get(m);y||(y=i.querySelector(bs(m)),y||(t=g({src:t,async:!0},a),(a=qa.get(m))&&em(t,a),y=i.createElement("script"),Ue(y),Gt(y,"link",t),i.head.appendChild(y)),y={type:"script",instance:y,count:1,state:null},l.set(m,y))}}function gj(t,a){Hn.M(t,a);var i=ro;if(i&&t){var l=vt(i).hoistableScripts,m=oo(t),y=l.get(m);y||(y=i.querySelector(bs(m)),y||(t=g({src:t,async:!0,type:"module"},a),(a=qa.get(m))&&em(t,a),y=i.createElement("script"),Ue(y),Gt(y,"link",t),i.head.appendChild(y)),y={type:"script",instance:y,count:1,state:null},l.set(m,y))}}function Ly(t,a,i,l){var m=(m=fe.current)?jc(m):null;if(!m)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(a=io(i.href),i=vt(m).hoistableStyles,l=i.get(a),l||(l={type:"style",instance:null,count:0,state:null},i.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=io(i.href);var y=vt(m).hoistableStyles,j=y.get(t);if(j||(m=m.ownerDocument||m,j={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},y.set(t,j),(y=m.querySelector(vs(t)))&&!y._p&&(j.instance=y,j.state.loading=5),qa.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},qa.set(t,i),y||yj(m,t,i,j.state))),a&&l===null)throw Error(o(528,""));return j}if(a&&l!==null)throw Error(o(529,""));return null;case"script":return a=i.async,i=i.src,typeof i=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=oo(i),i=vt(m).hoistableScripts,l=i.get(a),l||(l={type:"script",instance:null,count:0,state:null},i.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function io(t){return'href="'+Ua(t)+'"'}function vs(t){return'link[rel="stylesheet"]['+t+"]"}function zy(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function yj(t,a,i,l){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=t.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Gt(a,"link",i),Ue(a),t.head.appendChild(a))}function oo(t){return'[src="'+Ua(t)+'"]'}function bs(t){return"script[async]"+t}function Uy(t,a,i){if(a.count++,a.instance===null)switch(a.type){case"style":var l=t.querySelector('style[data-href~="'+Ua(i.href)+'"]');if(l)return a.instance=l,Ue(l),l;var m=g({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ue(l),Gt(l,"style",m),Rc(l,i.precedence,t),a.instance=l;case"stylesheet":m=io(i.href);var y=t.querySelector(vs(m));if(y)return a.state.loading|=4,a.instance=y,Ue(y),y;l=zy(i),(m=qa.get(m))&&Jf(l,m),y=(t.ownerDocument||t).createElement("link"),Ue(y);var j=y;return j._p=new Promise(function(C,z){j.onload=C,j.onerror=z}),Gt(y,"link",l),a.state.loading|=4,Rc(y,i.precedence,t),a.instance=y;case"script":return y=oo(i.src),(m=t.querySelector(bs(y)))?(a.instance=m,Ue(m),m):(l=i,(m=qa.get(y))&&(l=g({},i),em(l,m)),t=t.ownerDocument||t,m=t.createElement("script"),Ue(m),Gt(m,"link",l),t.head.appendChild(m),a.instance=m);case"void":return null;default:throw Error(o(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Rc(l,i.precedence,t));return a.instance}function Rc(t,a,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),m=l.length?l[l.length-1]:null,y=m,j=0;j<l.length;j++){var C=l[j];if(C.dataset.precedence===a)y=C;else if(y!==m)break}y?y.parentNode.insertBefore(t,y.nextSibling):(a=i.nodeType===9?i.head:i,a.insertBefore(t,a.firstChild))}function Jf(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function em(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Nc=null;function Hy(t,a,i){if(Nc===null){var l=new Map,m=Nc=new Map;m.set(i,l)}else m=Nc,l=m.get(i),l||(l=new Map,m.set(i,l));if(l.has(t))return l;for(l.set(t,null),i=i.getElementsByTagName(t),m=0;m<i.length;m++){var y=i[m];if(!(y[xe]||y[oe]||t==="link"&&y.getAttribute("rel")==="stylesheet")&&y.namespaceURI!=="http://www.w3.org/2000/svg"){var j=y.getAttribute(a)||"";j=t+j;var C=l.get(j);C?C.push(y):l.set(j,[y])}}return l}function By(t,a,i){t=t.ownerDocument||t,t.head.insertBefore(i,a==="title"?t.querySelector("head > title"):null)}function vj(t,a,i){if(i===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function $y(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var xs=null;function bj(){}function xj(t,a,i){if(xs===null)throw Error(o(475));var l=xs;if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var m=io(i.href),y=t.querySelector(vs(m));if(y){t=y._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Tc.bind(l),t.then(l,l)),a.state.loading|=4,a.instance=y,Ue(y);return}y=t.ownerDocument||t,i=zy(i),(m=qa.get(m))&&Jf(i,m),y=y.createElement("link"),Ue(y);var j=y;j._p=new Promise(function(C,z){j.onload=C,j.onerror=z}),Gt(y,"link",i),a.instance=y}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Tc.bind(l),t.addEventListener("load",a),t.addEventListener("error",a))}}function wj(){if(xs===null)throw Error(o(475));var t=xs;return t.stylesheets&&t.count===0&&tm(t,t.stylesheets),0<t.count?function(a){var i=setTimeout(function(){if(t.stylesheets&&tm(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i)}}:null}function Tc(){if(this.count--,this.count===0){if(this.stylesheets)tm(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Cc=null;function tm(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Cc=new Map,a.forEach(Sj,t),Cc=null,Tc.call(t))}function Sj(t,a){if(!(a.state.loading&4)){var i=Cc.get(t);if(i)var l=i.get(null);else{i=new Map,Cc.set(t,i);for(var m=t.querySelectorAll("link[data-precedence],style[data-precedence]"),y=0;y<m.length;y++){var j=m[y];(j.nodeName==="LINK"||j.getAttribute("media")!=="not all")&&(i.set(j.dataset.precedence,j),l=j)}l&&i.set(null,l)}m=a.instance,j=m.getAttribute("data-precedence"),y=i.get(j)||l,y===l&&i.set(null,m),i.set(j,m),this.count++,l=Tc.bind(this),m.addEventListener("load",l),m.addEventListener("error",l),y?y.parentNode.insertBefore(m,y.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(m,t.firstChild)),a.state.loading|=4}}var ws={$$typeof:O,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Ej(t,a,i,l,m,y,j,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ni(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.hiddenUpdates=Ni(null),this.identifierPrefix=l,this.onUncaughtError=m,this.onCaughtError=y,this.onRecoverableError=j,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Py(t,a,i,l,m,y,j,C,z,I,ee,ie){return t=new Ej(t,a,i,j,C,z,I,ie),a=1,y===!0&&(a|=24),y=Na(3,null,null,a),t.current=y,y.stateNode=t,a=Ld(),a.refCount++,t.pooledCache=a,a.refCount++,y.memoizedState={element:l,isDehydrated:i,cache:a},Bd(y),t}function Yy(t){return t?(t=Ui,t):Ui}function Fy(t,a,i,l,m,y){m=Yy(m),l.context===null?l.context=m:l.pendingContext=m,l=nr(a),l.payload={element:i},y=y===void 0?null:y,y!==null&&(l.callback=y),i=rr(t,l,a),i!==null&&(Da(i,t,a),Zo(i,t,a))}function qy(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<a?i:a}}function am(t,a){qy(t,a),(t=t.alternate)&&qy(t,a)}function Iy(t){if(t.tag===13){var a=zi(t,67108864);a!==null&&Da(a,t,67108864),am(t,67108864)}}var _c=!0;function jj(t,a,i,l){var m=U.T;U.T=null;var y=X.p;try{X.p=2,nm(t,a,i,l)}finally{X.p=y,U.T=m}}function Rj(t,a,i,l){var m=U.T;U.T=null;var y=X.p;try{X.p=8,nm(t,a,i,l)}finally{X.p=y,U.T=m}}function nm(t,a,i,l){if(_c){var m=rm(l);if(m===null)qf(t,a,l,Oc,i),Xy(t,l);else if(Tj(m,t,a,i,l))l.stopPropagation();else if(Xy(t,l),a&4&&-1<Nj.indexOf(t)){for(;m!==null;){var y=et(m);if(y!==null)switch(y.tag){case 3:if(y=y.stateNode,y.current.memoizedState.isDehydrated){var j=wn(y.pendingLanes);if(j!==0){var C=y;for(C.pendingLanes|=2,C.entangledLanes|=2;j;){var z=1<<31-Ft(j);C.entanglements[1]|=z,j&=~z}mn(y),(tt&6)===0&&(mc=gt()+500,hs(0))}}break;case 13:C=zi(y,2),C!==null&&Da(C,y,2),pc(),am(y,2)}if(y=rm(l),y===null&&qf(t,a,l,Oc,i),y===m)break;m=y}m!==null&&l.stopPropagation()}else qf(t,a,l,null,i)}}function rm(t){return t=ld(t),im(t)}var Oc=null;function im(t){if(Oc=null,t=Pe(t),t!==null){var a=c(t);if(a===null)t=null;else{var i=a.tag;if(i===13){if(t=d(a),t!==null)return t;t=null}else if(i===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Oc=t,null}function Gy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yr()){case Zn:return 2;case sa:return 8;case Sa:case la:return 32;case Ea:return 268435456;default:return 32}default:return 32}}var om=!1,yr=null,vr=null,br=null,Ss=new Map,Es=new Map,xr=[],Nj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xy(t,a){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ss.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(a.pointerId)}}function js(t,a,i,l,m,y){return t===null||t.nativeEvent!==y?(t={blockedOn:a,domEventName:i,eventSystemFlags:l,nativeEvent:y,targetContainers:[m]},a!==null&&(a=et(a),a!==null&&Iy(a)),t):(t.eventSystemFlags|=l,a=t.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),t)}function Tj(t,a,i,l,m){switch(a){case"focusin":return yr=js(yr,t,a,i,l,m),!0;case"dragenter":return vr=js(vr,t,a,i,l,m),!0;case"mouseover":return br=js(br,t,a,i,l,m),!0;case"pointerover":var y=m.pointerId;return Ss.set(y,js(Ss.get(y)||null,t,a,i,l,m)),!0;case"gotpointercapture":return y=m.pointerId,Es.set(y,js(Es.get(y)||null,t,a,i,l,m)),!0}return!1}function Vy(t){var a=Pe(t.target);if(a!==null){var i=c(a);if(i!==null){if(a=i.tag,a===13){if(a=d(i),a!==null){t.blockedOn=a,F(t.priority,function(){if(i.tag===13){var l=Oa();l=Ao(l);var m=zi(i,l);m!==null&&Da(m,i,l),am(i,l)}});return}}else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var i=rm(t.nativeEvent);if(i===null){i=t.nativeEvent;var l=new i.constructor(i.type,i);sd=l,i.target.dispatchEvent(l),sd=null}else return a=et(i),a!==null&&Iy(a),t.blockedOn=i,!1;a.shift()}return!0}function Qy(t,a,i){Dc(t)&&i.delete(a)}function Cj(){om=!1,yr!==null&&Dc(yr)&&(yr=null),vr!==null&&Dc(vr)&&(vr=null),br!==null&&Dc(br)&&(br=null),Ss.forEach(Qy),Es.forEach(Qy)}function Ac(t,a){t.blockedOn===a&&(t.blockedOn=null,om||(om=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cj)))}var Mc=null;function Ky(t){Mc!==t&&(Mc=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Mc===t&&(Mc=null);for(var a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],m=t[a+2];if(typeof l!="function"){if(im(l||i)===null)continue;break}var y=et(i);y!==null&&(t.splice(a,3),a-=3,rf(y,{pending:!0,data:m,method:i.method,action:l},l,m))}}))}function Rs(t){function a(z){return Ac(z,t)}yr!==null&&Ac(yr,t),vr!==null&&Ac(vr,t),br!==null&&Ac(br,t),Ss.forEach(a),Es.forEach(a);for(var i=0;i<xr.length;i++){var l=xr[i];l.blockedOn===t&&(l.blockedOn=null)}for(;0<xr.length&&(i=xr[0],i.blockedOn===null);)Vy(i),i.blockedOn===null&&xr.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var m=i[l],y=i[l+1],j=m[ue]||null;if(typeof y=="function")j||Ky(i);else if(j){var C=null;if(y&&y.hasAttribute("formAction")){if(m=y,j=y[ue]||null)C=j.formAction;else if(im(m)!==null)continue}else C=j.action;typeof C=="function"?i[l+1]=C:(i.splice(l,3),l-=3),Ky(i)}}}function sm(t){this._internalRoot=t}kc.prototype.render=sm.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(o(409));var i=a.current,l=Oa();Fy(i,l,t,a,null,null)},kc.prototype.unmount=sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Fy(t.current,2,null,t,null,null),pc(),a[ye]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var a=B();t={blockedOn:null,target:t,priority:a};for(var i=0;i<xr.length&&a!==0&&a<xr[i].priority;i++);xr.splice(i,0,t),i===0&&Vy(t)}};var Zy=n.version;if(Zy!=="19.1.1")throw Error(o(527,Zy,"19.1.1"));X.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=f(a),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var _j={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{Me=Lc.inject(_j),Ve=Lc}catch{}}return Ts.createRoot=function(t,a){if(!s(t))throw Error(o(299));var i=!1,l="",m=mg,y=hg,j=pg,C=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(j=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks)),a=Py(t,1,!1,null,null,i,l,m,y,j,C,null),t[ye]=a.current,Ff(t),new sm(a)},Ts.hydrateRoot=function(t,a,i){if(!s(t))throw Error(o(299));var l=!1,m="",y=mg,j=hg,C=pg,z=null,I=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(m=i.identifierPrefix),i.onUncaughtError!==void 0&&(y=i.onUncaughtError),i.onCaughtError!==void 0&&(j=i.onCaughtError),i.onRecoverableError!==void 0&&(C=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(z=i.unstable_transitionCallbacks),i.formState!==void 0&&(I=i.formState)),a=Py(t,1,!0,a,i??null,l,m,y,j,C,z,I),a.context=Yy(null),i=a.current,l=Oa(),l=Ao(l),m=nr(l),m.callback=null,rr(i,m,l),i=l,a.current.lanes=i,Gr(a,i),mn(a),t[ye]=a.current,Ff(t),new kc(a)},Ts.version="19.1.1",Ts}var sv;function $j(){if(sv)return um.exports;sv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),um.exports=Bj(),um.exports}var Pj=$j();/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vb=e=>{throw TypeError(e)},Yj=(e,n,r)=>n.has(e)||Vb("Cannot "+r),hm=(e,n,r)=>(Yj(e,n,"read from private field"),r?r.call(e):n.get(e)),Fj=(e,n,r)=>n.has(e)?Vb("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,r),Qb=(e=>(e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE",e))(Qb||{}),lv="popstate";function Kb(e={}){let{initialEntries:n=["/"],initialIndex:r,v5Compat:o=!1}=e,s;s=n.map((S,w)=>g(S,typeof S=="string"?null:S.state,w===0?"default":void 0));let c=f(r??s.length-1),d="POP",h=null;function f(S){return Math.min(Math.max(S,0),s.length-1)}function p(){return s[c]}function g(S,w=null,R){let E=In(s?p().pathname:"/",S,w,R);return ct(E.pathname.charAt(0)==="/",`relative pathnames are not supported in memory history: ${JSON.stringify(S)}`),E}function x(S){return typeof S=="string"?S:ia(S)}return{get index(){return c},get action(){return d},get location(){return p()},createHref:x,createURL(S){return new URL(x(S),"http://localhost")},encodeLocation(S){let w=typeof S=="string"?Ma(S):S;return{pathname:w.pathname||"",search:w.search||"",hash:w.hash||""}},push(S,w){d="PUSH";let R=g(S,w);c+=1,s.splice(c,s.length,R),o&&h&&h({action:d,location:R,delta:1})},replace(S,w){d="REPLACE";let R=g(S,w);s[c]=R,o&&h&&h({action:d,location:R,delta:0})},go(S){d="POP";let w=f(c+S),R=s[w];c=w,h&&h({action:d,location:R,delta:S})},listen(S){return h=S,()=>{h=null}}}}function tl(e={}){function n(o,s){let{pathname:c,search:d,hash:h}=o.location;return In("",{pathname:c,search:d,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){return typeof s=="string"?s:ia(s)}return Wb(n,r,null,e)}function Zb(e={}){function n(s,c){let{pathname:d="/",search:h="",hash:f=""}=Ma(s.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),In("",{pathname:d,search:h,hash:f},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(s,c){let d=s.document.querySelector("base"),h="";if(d&&d.getAttribute("href")){let f=s.location.href,p=f.indexOf("#");h=p===-1?f:f.slice(0,p)}return h+"#"+(typeof c=="string"?c:ia(c))}function o(s,c){ct(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Wb(n,r,o,e)}function ve(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ct(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function qj(){return Math.random().toString(36).substring(2,10)}function cv(e,n){return{usr:e.state,key:e.key,idx:n}}function In(e,n,r=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?Ma(n):n,state:r,key:n&&n.key||o||qj()}}function ia({pathname:e="/",search:n="",hash:r=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ma(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substring(r),e=e.substring(0,r));let o=e.indexOf("?");o>=0&&(n.search=e.substring(o),e=e.substring(0,o)),e&&(n.pathname=e)}return n}function Wb(e,n,r,o={}){let{window:s=document.defaultView,v5Compat:c=!1}=o,d=s.history,h="POP",f=null,p=g();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function g(){return(d.state||{idx:null}).idx}function x(){h="POP";let E=g(),N=E==null?null:E-p;p=E,f&&f({action:h,location:R.location,delta:N})}function b(E,N){h="PUSH";let _=In(R.location,E,N);r&&r(_,E),p=g()+1;let O=cv(_,p),M=R.createHref(_);try{d.pushState(O,"",M)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;s.location.assign(M)}c&&f&&f({action:h,location:R.location,delta:1})}function S(E,N){h="REPLACE";let _=In(R.location,E,N);r&&r(_,E),p=g();let O=cv(_,p),M=R.createHref(_);d.replaceState(O,"",M),c&&f&&f({action:h,location:R.location,delta:0})}function w(E){return Jb(E)}let R={get action(){return h},get location(){return e(s,d)},listen(E){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(lv,x),f=E,()=>{s.removeEventListener(lv,x),f=null}},createHref(E){return n(s,E)},createURL:w,encodeLocation(E){let N=w(E);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:b,replace:S,go(E){return d.go(E)}};return R}function Jb(e,n=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),ve(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:ia(e);return o=o.replace(/ $/,"%20"),!n&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function ex(e){return{defaultValue:e}}var Ls,gn=class{constructor(e){if(Fj(this,Ls,new Map),e)for(let[n,r]of e)this.set(n,r)}get(e){if(hm(this,Ls).has(e))return hm(this,Ls).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,n){hm(this,Ls).set(e,n)}};Ls=new WeakMap;var Ij=new Set(["lazy","caseSensitive","path","id","index","children"]);function Gj(e){return Ij.has(e)}var Xj=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function Vj(e){return Xj.has(e)}function Qj(e){return e.index===!0}function Ar(e,n,r=[],o={},s=!1){return e.map((c,d)=>{let h=[...r,String(d)],f=typeof c.id=="string"?c.id:h.join("-");if(ve(c.index!==!0||!c.children,"Cannot specify children on an index route"),ve(s||!o[f],`Found a route id collision on id "${f}".  Route id's must be globally unique within Data Router usages`),Qj(c)){let p={...c,...n(c),id:f};return o[f]=p,p}else{let p={...c,...n(c),id:f,children:void 0};return o[f]=p,c.children&&(p.children=Ar(c.children,n,h,o,s)),p}})}function ma(e,n,r="/"){return Gc(e,n,r,!1)}function Gc(e,n,r,o){let s=typeof n=="string"?Ma(n):n,c=Pt(s.pathname||"/",r);if(c==null)return null;let d=ax(e);Kj(d);let h=null;for(let f=0;h==null&&f<d.length;++f){let p=ix(c);h=iR(d[f],p,o)}return h}function tx(e,n){let{route:r,pathname:o,params:s}=e;return{id:r.id,pathname:o,params:s,data:n[r.id],loaderData:n[r.id],handle:r.handle}}function ax(e,n=[],r=[],o=""){let s=(c,d,h)=>{let f={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};f.relativePath.startsWith("/")&&(ve(f.relativePath.startsWith(o),`Absolute route path "${f.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(o.length));let p=yn([o,f.relativePath]),g=r.concat(f);c.children&&c.children.length>0&&(ve(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),ax(c.children,n,g,p)),!(c.path==null&&!c.index)&&n.push({path:p,score:nR(p,c.index),routesMeta:g})};return e.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))s(c,d);else for(let h of nx(c.path))s(c,d,h)}),n}function nx(e){let n=e.split("/");if(n.length===0)return[];let[r,...o]=n,s=r.endsWith("?"),c=r.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let d=nx(o.join("/")),h=[];return h.push(...d.map(f=>f===""?c:[c,f].join("/"))),s&&h.push(...d),h.map(f=>e.startsWith("/")&&f===""?"/":f)}function Kj(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:rR(n.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var Zj=/^:[\w-]+$/,Wj=3,Jj=2,eR=1,tR=10,aR=-2,uv=e=>e==="*";function nR(e,n){let r=e.split("/"),o=r.length;return r.some(uv)&&(o+=aR),n&&(o+=Jj),r.filter(s=>!uv(s)).reduce((s,c)=>s+(Zj.test(c)?Wj:c===""?eR:tR),o)}function rR(e,n){return e.length===n.length&&e.slice(0,-1).every((o,s)=>o===n[s])?e[e.length-1]-n[n.length-1]:0}function iR(e,n,r=!1){let{routesMeta:o}=e,s={},c="/",d=[];for(let h=0;h<o.length;++h){let f=o[h],p=h===o.length-1,g=c==="/"?n:n.slice(c.length)||"/",x=yo({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},g),b=f.route;if(!x&&p&&r&&!o[o.length-1].route.index&&(x=yo({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!x)return null;Object.assign(s,x.params),d.push({params:s,pathname:yn([c,x.pathname]),pathnameBase:cR(yn([c,x.pathnameBase])),route:b}),x.pathnameBase!=="/"&&(c=yn([c,x.pathnameBase]))}return d}function oR(e,n={}){let r=e;r.endsWith("*")&&r!=="*"&&!r.endsWith("/*")&&(ct(!1,`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`),r=r.replace(/\*$/,"/*"));const o=r.startsWith("/")?"/":"",s=d=>d==null?"":typeof d=="string"?d:String(d),c=r.split(/\/+/).map((d,h,f)=>{if(h===f.length-1&&d==="*")return s(n["*"]);const g=d.match(/^:([\w-]+)(\??)$/);if(g){const[,x,b]=g;let S=n[x];return ve(b==="?"||S!=null,`Missing ":${x}" param`),s(S)}return d.replace(/\?$/g,"")}).filter(d=>!!d);return o+c.join("/")}function yo(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=rx(e.path,e.caseSensitive,e.end),s=n.match(r);if(!s)return null;let c=s[0],d=c.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:o.reduce((p,{paramName:g,isOptional:x},b)=>{if(g==="*"){let w=h[b]||"";d=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const S=h[b];return x&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:d,pattern:e}}function rx(e,n=!1,r=!0){ct(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,f)=>(o.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),o]}function ix(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ct(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function Pt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function sR({basename:e,pathname:n}){return n==="/"?e:yn([e,n])}function ox(e,n="/"){let{pathname:r,search:o="",hash:s=""}=typeof e=="string"?Ma(e):e;return{pathname:r?r.startsWith("/")?r:lR(r,n):n,search:uR(o),hash:dR(s)}}function lR(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function pm(e,n,r,o){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sx(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function bu(e){let n=sx(e);return n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase)}function xu(e,n,r,o=!1){let s;typeof e=="string"?s=Ma(e):(s={...e},ve(!s.pathname||!s.pathname.includes("?"),pm("?","pathname","search",s)),ve(!s.pathname||!s.pathname.includes("#"),pm("#","pathname","hash",s)),ve(!s.search||!s.search.includes("#"),pm("#","search","hash",s)));let c=e===""||s.pathname==="",d=c?"/":s.pathname,h;if(d==null)h=r;else{let x=n.length-1;if(!o&&d.startsWith("..")){let b=d.split("/");for(;b[0]==="..";)b.shift(),x-=1;s.pathname=b.join("/")}h=x>=0?n[x]:"/"}let f=ox(s,h),p=d&&d!=="/"&&d.endsWith("/"),g=(c||d===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(p||g)&&(f.pathname+="/"),f}var yn=e=>e.join("/").replace(/\/\/+/g,"/"),cR=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dR=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,fR=class{constructor(e,n){this.type="DataWithResponseInit",this.data=e,this.init=n||null}};function lx(e,n){return new fR(e,typeof n=="number"?{status:n}:n)}var al=(e,n=302)=>{let r=n;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let o=new Headers(r.headers);return o.set("Location",e),new Response(null,{...r,headers:o})},cx=(e,n)=>{let r=al(e,n);return r.headers.set("X-Remix-Reload-Document","true"),r},ux=(e,n)=>{let r=al(e,n);return r.headers.set("X-Remix-Replace","true"),r},Jt=class{constructor(e,n,r,o=!1){this.status=e,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Et(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var dx=["POST","PUT","PATCH","DELETE"],mR=new Set(dx),hR=["GET",...dx],pR=new Set(hR),fx=new Set([301,302,303,307,308]),gR=new Set([307,308]),Us={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},wu={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Nr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},yR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wh=e=>yR.test(e),mx=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),hx="remix-router-transitions",px=Symbol("ResetLoaderData");function Eo(e){const n=e.window?e.window:typeof window<"u"?window:void 0,r=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u";ve(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o=e.hydrationRouteProperties||[],s=e.mapRouteProperties||mx,c={},d=Ar(e.routes,s,void 0,c),h,f=e.basename||"/",p=e.dataStrategy||ER,g={unstable_middleware:!1,...e.future},x=null,b=new Set,S=null,w=null,R=null,E=e.hydrationData!=null,N=ma(d,e.history.location,f),_=!1,O=null,M;if(N==null&&!e.patchRoutesOnNavigation){let B=Dt(404,{pathname:e.history.location.pathname}),{matches:F,route:K}=iu(d);M=!0,N=F,O={[K.id]:B}}else if(N&&!e.hydrationData&&Xr(N,d,e.history.location.pathname).active&&(N=null),N)if(N.some(B=>B.route.lazy))M=!1;else if(!N.some(B=>B.route.loader))M=!0;else{let B=e.hydrationData?e.hydrationData.loaderData:null,F=e.hydrationData?e.hydrationData.errors:null;if(F){let K=N.findIndex(oe=>F[oe.route.id]!==void 0);M=N.slice(0,K+1).every(oe=>!Ym(oe.route,B,F))}else M=N.every(K=>!Ym(K.route,B,F))}else{M=!1,N=[];let B=Xr(null,d,e.history.location.pathname);B.active&&B.matches&&(_=!0,N=B.matches)}let D,T={historyAction:e.history.action,location:e.history.location,matches:N,initialized:M,navigation:Us,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||O,fetchers:new Map,blockers:new Map},k="POP",L=!1,H,G=!1,W=new Map,te=null,le=!1,de=!1,re=new Set,U=new Map,X=0,J=-1,me=new Map,A=new Set,Y=new Map,se=new Map,ne=new Set,ce=new Map,Ee,fe=null;function nt(){if(x=e.history.listen(({action:B,location:F,delta:K})=>{if(Ee){Ee(),Ee=void 0;return}ct(ce.size===0||K!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let oe=El({currentLocation:T.location,nextLocation:F,historyAction:B});if(oe&&K!=null){let ue=new Promise(ye=>{Ee=ye});e.history.go(K*-1),sn(oe,{state:"blocked",location:F,proceed(){sn(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),ue.then(()=>e.history.go(K))},reset(){let ye=new Map(T.blockers);ye.set(oe,Nr),Je({blockers:ye})}});return}return Tt(B,F)}),r){OR(n,W);let B=()=>DR(n,W);n.addEventListener("pagehide",B),te=()=>n.removeEventListener("pagehide",B)}return T.initialized||Tt("POP",T.location,{initialHydration:!0}),D}function $e(){x&&x(),te&&te(),b.clear(),H&&H.abort(),T.fetchers.forEach((B,F)=>Ft(F)),T.blockers.forEach((B,F)=>Ir(F))}function Rt(B){return b.add(B),()=>b.delete(B)}function Je(B,F={}){B.matches&&(B.matches=B.matches.map(ue=>{let ye=c[ue.route.id],je=ue.route;return je.element!==ye.element||je.errorElement!==ye.errorElement||je.hydrateFallbackElement!==ye.hydrateFallbackElement?{...ue,route:ye}:ue})),T={...T,...B};let K=[],oe=[];T.fetchers.forEach((ue,ye)=>{ue.state==="idle"&&(ne.has(ye)?K.push(ye):oe.push(ye))}),ne.forEach(ue=>{!T.fetchers.has(ue)&&!U.has(ue)&&K.push(ue)}),[...b].forEach(ue=>ue(T,{deletedFetchers:K,viewTransitionOpts:F.viewTransitionOpts,flushSync:F.flushSync===!0})),K.forEach(ue=>Ft(ue)),oe.forEach(ue=>T.fetchers.delete(ue))}function Nt(B,F,{flushSync:K}={}){let oe=T.actionData!=null&&T.navigation.formMethod!=null&&Qt(T.navigation.formMethod)&&T.navigation.state==="loading"&&B.state?._isRedirect!==!0,ue;F.actionData?Object.keys(F.actionData).length>0?ue=F.actionData:ue=null:oe?ue=T.actionData:ue=null;let ye=F.loaderData?Sv(T.loaderData,F.loaderData,F.matches||[],F.errors):T.loaderData,je=T.blockers;je.size>0&&(je=new Map(je),je.forEach((xe,Re)=>je.set(Re,Nr)));let be=le?!1:Rl(B,F.matches||T.matches),Ce=L===!0||T.navigation.formMethod!=null&&Qt(T.navigation.formMethod)&&B.state?._isRedirect!==!0;h&&(d=h,h=void 0),le||k==="POP"||(k==="PUSH"?e.history.push(B,B.state):k==="REPLACE"&&e.history.replace(B,B.state));let Oe;if(k==="POP"){let xe=W.get(T.location.pathname);xe&&xe.has(B.pathname)?Oe={currentLocation:T.location,nextLocation:B}:W.has(B.pathname)&&(Oe={currentLocation:B,nextLocation:T.location})}else if(G){let xe=W.get(T.location.pathname);xe?xe.add(B.pathname):(xe=new Set([B.pathname]),W.set(T.location.pathname,xe)),Oe={currentLocation:T.location,nextLocation:B}}Je({...F,actionData:ue,loaderData:ye,historyAction:k,location:B,initialized:!0,navigation:Us,revalidation:"idle",restoreScrollPosition:be,preventScrollReset:Ce,blockers:je},{viewTransitionOpts:Oe,flushSync:K===!0}),k="POP",L=!1,G=!1,le=!1,de=!1,fe?.resolve(),fe=null}async function ea(B,F){if(typeof B=="number"){e.history.go(B);return}let K=Pm(T.location,T.matches,f,B,F?.fromRouteId,F?.relative),{path:oe,submission:ue,error:ye}=fv(!1,K,F),je=T.location,be=In(T.location,oe,F&&F.state);be={...be,...e.history.encodeLocation(be)};let Ce=F&&F.replace!=null?F.replace:void 0,Oe="PUSH";Ce===!0?Oe="REPLACE":Ce===!1||ue!=null&&Qt(ue.formMethod)&&ue.formAction===T.location.pathname+T.location.search&&(Oe="REPLACE");let xe=F&&"preventScrollReset"in F?F.preventScrollReset===!0:void 0,Re=(F&&F.flushSync)===!0,Pe=El({currentLocation:je,nextLocation:be,historyAction:Oe});if(Pe){sn(Pe,{state:"blocked",location:be,proceed(){sn(Pe,{state:"proceeding",proceed:void 0,reset:void 0,location:be}),ea(B,F)},reset(){let et=new Map(T.blockers);et.set(Pe,Nr),Je({blockers:et})}});return}await Tt(Oe,be,{submission:ue,pendingError:ye,preventScrollReset:xe,replace:F&&F.replace,enableViewTransition:F&&F.viewTransition,flushSync:Re})}function oa(){fe||(fe=AR()),rn(),Je({revalidation:"loading"});let B=fe.promise;return T.navigation.state==="submitting"?B:T.navigation.state==="idle"?(Tt(T.historyAction,T.location,{startUninterruptedRevalidation:!0}),B):(Tt(k||T.historyAction,T.navigation.location,{overrideNavigation:T.navigation,enableViewTransition:G===!0}),B)}async function Tt(B,F,K){H&&H.abort(),H=null,k=B,le=(K&&K.startUninterruptedRevalidation)===!0,Gr(T.location,T.matches),L=(K&&K.preventScrollReset)===!0,G=(K&&K.enableViewTransition)===!0;let oe=h||d,ue=K&&K.overrideNavigation,ye=K?.initialHydration&&T.matches&&T.matches.length>0&&!_?T.matches:ma(oe,F,f),je=(K&&K.flushSync)===!0;if(ye&&T.initialized&&!de&&RR(T.location,F)&&!(K&&K.submission&&Qt(K.submission.formMethod))){Nt(F,{matches:ye},{flushSync:je});return}let be=Xr(ye,oe,F.pathname);if(be.active&&be.matches&&(ye=be.matches),!ye){let{error:vt,notFoundMatches:Ue,route:rt}=Ri(F.pathname);Nt(F,{matches:Ue,loaderData:{},errors:{[rt.id]:vt}},{flushSync:je});return}H=new AbortController;let Ce=uo(e.history,F,H.signal,K&&K.submission),Oe=e.unstable_getContext?await e.unstable_getContext():new gn,xe;if(K&&K.pendingError)xe=[Ga(ye).route.id,{type:"error",error:K.pendingError}];else if(K&&K.submission&&Qt(K.submission.formMethod)){let vt=await We(Ce,F,K.submission,ye,Oe,be.active,K&&K.initialHydration===!0,{replace:K.replace,flushSync:je});if(vt.shortCircuited)return;if(vt.pendingActionResult){let[Ue,rt]=vt.pendingActionResult;if(Bt(rt)&&Et(rt.error)&&rt.error.status===404){H=null,Nt(F,{matches:vt.matches,loaderData:{},errors:{[Ue]:rt.error}});return}}ye=vt.matches||ye,xe=vt.pendingActionResult,ue=gm(F,K.submission),je=!1,be.active=!1,Ce=uo(e.history,Ce.url,Ce.signal)}let{shortCircuited:Re,matches:Pe,loaderData:et,errors:yt}=await Qa(Ce,F,ye,Oe,be.active,ue,K&&K.submission,K&&K.fetcherSubmission,K&&K.replace,K&&K.initialHydration===!0,je,xe);Re||(H=null,Nt(F,{matches:Pe||ye,...Ev(xe),loaderData:et,errors:yt}))}async function We(B,F,K,oe,ue,ye,je,be={}){rn();let Ce=CR(F,K);if(Je({navigation:Ce},{flushSync:be.flushSync===!0}),ye){let Re=await Vr(oe,F.pathname,B.signal);if(Re.type==="aborted")return{shortCircuited:!0};if(Re.type==="error"){let Pe=Ga(Re.partialMatches).route.id;return{matches:Re.partialMatches,pendingActionResult:[Pe,{type:"error",error:Re.error}]}}else if(Re.matches)oe=Re.matches;else{let{notFoundMatches:Pe,error:et,route:yt}=Ri(F.pathname);return{matches:Pe,pendingActionResult:[yt.id,{type:"error",error:et}]}}}let Oe,xe=ho(oe,F);if(!xe.route.action&&!xe.route.lazy)Oe={type:"error",error:Dt(405,{method:B.method,pathname:F.pathname,routeId:xe.route.id})};else{let Re=Dr(s,c,B,oe,xe,je?[]:o,ue),Pe=await Ea(B,Re,ue,null);if(Oe=Pe[xe.route.id],!Oe){for(let et of oe)if(Pe[et.route.id]){Oe=Pe[et.route.id];break}}if(B.signal.aborted)return{shortCircuited:!0}}if(Tr(Oe)){let Re;return be&&be.replace!=null?Re=be.replace:Re=bv(Oe.response.headers.get("Location"),new URL(B.url),f)===T.location.pathname+T.location.search,await la(B,Oe,!0,{submission:K,replace:Re}),{shortCircuited:!0}}if(Bt(Oe)){let Re=Ga(oe,xe.route.id);return(be&&be.replace)!==!0&&(k="PUSH"),{matches:oe,pendingActionResult:[Re.route.id,Oe,xe.route.id]}}return{matches:oe,pendingActionResult:[xe.route.id,Oe]}}async function Qa(B,F,K,oe,ue,ye,je,be,Ce,Oe,xe,Re){let Pe=ye||gm(F,je),et=je||be||Nv(Pe),yt=!le&&!Oe;if(ue){if(yt){let Ct=gt(Re);Je({navigation:Pe,...Ct!==void 0?{actionData:Ct}:{}},{flushSync:xe})}let Ye=await Vr(K,F.pathname,B.signal);if(Ye.type==="aborted")return{shortCircuited:!0};if(Ye.type==="error"){let Ct=Ga(Ye.partialMatches).route.id;return{matches:Ye.partialMatches,loaderData:{},errors:{[Ct]:Ye.error}}}else if(Ye.matches)K=Ye.matches;else{let{error:Ct,notFoundMatches:Qr,route:La}=Ri(F.pathname);return{matches:Qr,loaderData:{},errors:{[La.id]:Ct}}}}let vt=h||d,{dsMatches:Ue,revalidatingFetchers:rt}=mv(B,oe,s,c,e.history,T,K,et,F,Oe?[]:o,Oe===!0,de,re,ne,Y,A,vt,f,e.patchRoutesOnNavigation!=null,Re);if(J=++X,!e.dataStrategy&&!Ue.some(Ye=>Ye.shouldLoad)&&!Ue.some(Ye=>Ye.route.unstable_middleware)&&rt.length===0){let Ye=Fr();return Nt(F,{matches:K,loaderData:{},errors:Re&&Bt(Re[1])?{[Re[0]]:Re[1].error}:null,...Ev(Re),...Ye?{fetchers:new Map(T.fetchers)}:{}},{flushSync:xe}),{shortCircuited:!0}}if(yt){let Ye={};if(!ue){Ye.navigation=Pe;let Ct=gt(Re);Ct!==void 0&&(Ye.actionData=Ct)}rt.length>0&&(Ye.fetchers=Yr(rt)),Je(Ye,{flushSync:xe})}rt.forEach(Ye=>{on(Ye.key),Ye.controller&&U.set(Ye.key,Ye.controller)});let ln=()=>rt.forEach(Ye=>on(Ye.key));H&&H.signal.addEventListener("abort",ln);let{loaderResults:ja,fetcherResults:ta}=await Ka(Ue,rt,B,oe);if(B.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",ln),rt.forEach(Ye=>U.delete(Ye.key));let ka=zc(ja);if(ka)return await la(B,ka.result,!0,{replace:Ce}),{shortCircuited:!0};if(ka=zc(ta),ka)return A.add(ka.key),await la(B,ka.result,!0,{replace:Ce}),{shortCircuited:!0};let{loaderData:Ti,errors:Wn}=wv(T,K,ja,Re,rt,ta);Oe&&T.errors&&(Wn={...T.errors,...Wn});let Sn=Fr(),En=qr(J),jn=Sn||En||rt.length>0;return{matches:K,loaderData:Ti,errors:Wn,...jn?{fetchers:new Map(T.fetchers)}:{}}}function gt(B){if(B&&!Bt(B[1]))return{[B[0]]:B[1].data};if(T.actionData)return Object.keys(T.actionData).length===0?null:T.actionData}function Yr(B){return B.forEach(F=>{let K=T.fetchers.get(F.key),oe=Cs(void 0,K?K.data:void 0);T.fetchers.set(F.key,oe)}),new Map(T.fetchers)}async function Zn(B,F,K,oe){on(B);let ue=(oe&&oe.flushSync)===!0,ye=h||d,je=Pm(T.location,T.matches,f,K,F,oe?.relative),be=ma(ye,je,f),Ce=Xr(be,ye,je);if(Ce.active&&Ce.matches&&(be=Ce.matches),!be){Ve(B,F,Dt(404,{pathname:je}),{flushSync:ue});return}let{path:Oe,submission:xe,error:Re}=fv(!0,je,oe);if(Re){Ve(B,F,Re,{flushSync:ue});return}let Pe=e.unstable_getContext?await e.unstable_getContext():new gn,et=(oe&&oe.preventScrollReset)===!0;if(xe&&Qt(xe.formMethod)){await sa(B,F,Oe,be,Pe,Ce.active,ue,et,xe);return}Y.set(B,{routeId:F,path:Oe}),await Sa(B,F,Oe,be,Pe,Ce.active,ue,et,xe)}async function sa(B,F,K,oe,ue,ye,je,be,Ce){rn(),Y.delete(B);let Oe=T.fetchers.get(B);Me(B,_R(Ce,Oe),{flushSync:je});let xe=new AbortController,Re=uo(e.history,K,xe.signal,Ce);if(ye){let ht=await Vr(oe,new URL(Re.url).pathname,Re.signal,B);if(ht.type==="aborted")return;if(ht.type==="error"){Ve(B,F,ht.error,{flushSync:je});return}else if(ht.matches)oe=ht.matches;else{Ve(B,F,Dt(404,{pathname:K}),{flushSync:je});return}}let Pe=ho(oe,K);if(!Pe.route.action&&!Pe.route.lazy){let ht=Dt(405,{method:Ce.formMethod,pathname:K,routeId:F});Ve(B,F,ht,{flushSync:je});return}U.set(B,xe);let et=X,yt=Dr(s,c,Re,oe,Pe,o,ue),Ue=(await Ea(Re,yt,ue,B))[Pe.route.id];if(Re.signal.aborted){U.get(B)===xe&&U.delete(B);return}if(ne.has(B)){if(Tr(Ue)||Bt(Ue)){Me(B,jr(void 0));return}}else{if(Tr(Ue))if(U.delete(B),J>et){Me(B,jr(void 0));return}else return A.add(B),Me(B,Cs(Ce)),la(Re,Ue,!1,{fetcherSubmission:Ce,preventScrollReset:be});if(Bt(Ue)){Ve(B,F,Ue.error);return}}let rt=T.navigation.location||T.location,ln=uo(e.history,rt,xe.signal),ja=h||d,ta=T.navigation.state!=="idle"?ma(ja,T.navigation.location,f):T.matches;ve(ta,"Didn't find any matches after fetcher action");let ka=++X;me.set(B,ka);let Ti=Cs(Ce,Ue.data);T.fetchers.set(B,Ti);let{dsMatches:Wn,revalidatingFetchers:Sn}=mv(ln,ue,s,c,e.history,T,ta,Ce,rt,o,!1,de,re,ne,Y,A,ja,f,e.patchRoutesOnNavigation!=null,[Pe.route.id,Ue]);Sn.filter(ht=>ht.key!==B).forEach(ht=>{let Jn=ht.key,Nl=T.fetchers.get(Jn),Tl=Cs(void 0,Nl?Nl.data:void 0);T.fetchers.set(Jn,Tl),on(Jn),ht.controller&&U.set(Jn,ht.controller)}),Je({fetchers:new Map(T.fetchers)});let En=()=>Sn.forEach(ht=>on(ht.key));xe.signal.addEventListener("abort",En);let{loaderResults:jn,fetcherResults:Ye}=await Ka(Wn,Sn,ln,ue);if(xe.signal.aborted)return;if(xe.signal.removeEventListener("abort",En),me.delete(B),U.delete(B),Sn.forEach(ht=>U.delete(ht.key)),T.fetchers.has(B)){let ht=jr(Ue.data);T.fetchers.set(B,ht)}let Ct=zc(jn);if(Ct)return la(ln,Ct.result,!1,{preventScrollReset:be});if(Ct=zc(Ye),Ct)return A.add(Ct.key),la(ln,Ct.result,!1,{preventScrollReset:be});let{loaderData:Qr,errors:La}=wv(T,ta,jn,void 0,Sn,Ye);qr(ka),T.navigation.state==="loading"&&ka>J?(ve(k,"Expected pending action"),H&&H.abort(),Nt(T.navigation.location,{matches:ta,loaderData:Qr,errors:La,fetchers:new Map(T.fetchers)})):(Je({errors:La,loaderData:Sv(T.loaderData,Qr,ta,La),fetchers:new Map(T.fetchers)}),de=!1)}async function Sa(B,F,K,oe,ue,ye,je,be,Ce){let Oe=T.fetchers.get(B);Me(B,Cs(Ce,Oe?Oe.data:void 0),{flushSync:je});let xe=new AbortController,Re=uo(e.history,K,xe.signal);if(ye){let rt=await Vr(oe,new URL(Re.url).pathname,Re.signal,B);if(rt.type==="aborted")return;if(rt.type==="error"){Ve(B,F,rt.error,{flushSync:je});return}else if(rt.matches)oe=rt.matches;else{Ve(B,F,Dt(404,{pathname:K}),{flushSync:je});return}}let Pe=ho(oe,K);U.set(B,xe);let et=X,yt=Dr(s,c,Re,oe,Pe,o,ue),Ue=(await Ea(Re,yt,ue,B))[Pe.route.id];if(U.get(B)===xe&&U.delete(B),!Re.signal.aborted){if(ne.has(B)){Me(B,jr(void 0));return}if(Tr(Ue))if(J>et){Me(B,jr(void 0));return}else{A.add(B),await la(Re,Ue,!1,{preventScrollReset:be});return}if(Bt(Ue)){Ve(B,F,Ue.error);return}Me(B,jr(Ue.data))}}async function la(B,F,K,{submission:oe,fetcherSubmission:ue,preventScrollReset:ye,replace:je}={}){F.response.headers.has("X-Remix-Revalidate")&&(de=!0);let be=F.response.headers.get("Location");ve(be,"Expected a Location header on the redirect Response"),be=bv(be,new URL(B.url),f);let Ce=In(T.location,be,{_isRedirect:!0});if(r){let yt=!1;if(F.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(wh(be)){const vt=Jb(be,!0);yt=vt.origin!==n.location.origin||Pt(vt.pathname,f)==null}if(yt){je?n.location.replace(be):n.location.assign(be);return}}H=null;let Oe=je===!0||F.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:xe,formAction:Re,formEncType:Pe}=T.navigation;!oe&&!ue&&xe&&Re&&Pe&&(oe=Nv(T.navigation));let et=oe||ue;if(gR.has(F.response.status)&&et&&Qt(et.formMethod))await Tt(Oe,Ce,{submission:{...et,formAction:be},preventScrollReset:ye||L,enableViewTransition:K?G:void 0});else{let yt=gm(Ce,oe);await Tt(Oe,Ce,{overrideNavigation:yt,fetcherSubmission:ue,preventScrollReset:ye||L,enableViewTransition:K?G:void 0})}}async function Ea(B,F,K,oe){let ue,ye={};try{ue=await jx(p,B,F,oe,K,!1)}catch(je){return F.filter(be=>be.shouldLoad).forEach(be=>{ye[be.route.id]={type:"error",error:je}}),ye}if(B.signal.aborted)return ye;for(let[je,be]of Object.entries(ue))if(_x(be)){let Ce=be.result;ye[je]={type:"redirect",response:Nx(Ce,B,je,F,f)}}else ye[je]=await Rx(be);return ye}async function Ka(B,F,K,oe){let ue=Ea(K,B,oe,null),ye=Promise.all(F.map(async Ce=>{if(Ce.matches&&Ce.match&&Ce.request&&Ce.controller){let xe=(await Ea(Ce.request,Ce.matches,oe,Ce.key))[Ce.match.route.id];return{[Ce.key]:xe}}else return Promise.resolve({[Ce.key]:{type:"error",error:Dt(404,{pathname:Ce.path})}})})),je=await ue,be=(await ye).reduce((Ce,Oe)=>Object.assign(Ce,Oe),{});return{loaderResults:je,fetcherResults:be}}function rn(){de=!0,Y.forEach((B,F)=>{U.has(F)&&re.add(F),on(F)})}function Me(B,F,K={}){T.fetchers.set(B,F),Je({fetchers:new Map(T.fetchers)},{flushSync:(K&&K.flushSync)===!0})}function Ve(B,F,K,oe={}){let ue=Ga(T.matches,F);Ft(B),Je({errors:{[ue.route.id]:K},fetchers:new Map(T.fetchers)},{flushSync:(oe&&oe.flushSync)===!0})}function Yt(B){return se.set(B,(se.get(B)||0)+1),ne.has(B)&&ne.delete(B),T.fetchers.get(B)||wu}function Ft(B){let F=T.fetchers.get(B);U.has(B)&&!(F&&F.state==="loading"&&me.has(B))&&on(B),Y.delete(B),me.delete(B),A.delete(B),ne.delete(B),re.delete(B),T.fetchers.delete(B)}function nd(B){let F=(se.get(B)||0)-1;F<=0?(se.delete(B),ne.add(B)):se.set(B,F),Je({fetchers:new Map(T.fetchers)})}function on(B){let F=U.get(B);F&&(F.abort(),U.delete(B))}function Sl(B){for(let F of B){let K=Yt(F),oe=jr(K.data);T.fetchers.set(F,oe)}}function Fr(){let B=[],F=!1;for(let K of A){let oe=T.fetchers.get(K);ve(oe,`Expected fetcher: ${K}`),oe.state==="loading"&&(A.delete(K),B.push(K),F=!0)}return Sl(B),F}function qr(B){let F=[];for(let[K,oe]of me)if(oe<B){let ue=T.fetchers.get(K);ve(ue,`Expected fetcher: ${K}`),ue.state==="loading"&&(on(K),me.delete(K),F.push(K))}return Sl(F),F.length>0}function wn(B,F){let K=T.blockers.get(B)||Nr;return ce.get(B)!==F&&ce.set(B,F),K}function Ir(B){T.blockers.delete(B),ce.delete(B)}function sn(B,F){let K=T.blockers.get(B)||Nr;ve(K.state==="unblocked"&&F.state==="blocked"||K.state==="blocked"&&F.state==="blocked"||K.state==="blocked"&&F.state==="proceeding"||K.state==="blocked"&&F.state==="unblocked"||K.state==="proceeding"&&F.state==="unblocked",`Invalid blocker state transition: ${K.state} -> ${F.state}`);let oe=new Map(T.blockers);oe.set(B,F),Je({blockers:oe})}function El({currentLocation:B,nextLocation:F,historyAction:K}){if(ce.size===0)return;ce.size>1&&ct(!1,"A router only supports one blocker at a time");let oe=Array.from(ce.entries()),[ue,ye]=oe[oe.length-1],je=T.blockers.get(ue);if(!(je&&je.state==="proceeding")&&ye({currentLocation:B,nextLocation:F,historyAction:K}))return ue}function Ri(B){let F=Dt(404,{pathname:B}),K=h||d,{matches:oe,route:ue}=iu(K);return{notFoundMatches:oe,route:ue,error:F}}function jl(B,F,K){if(S=B,R=F,w=K||null,!E&&T.navigation===Us){E=!0;let oe=Rl(T.location,T.matches);oe!=null&&Je({restoreScrollPosition:oe})}return()=>{S=null,R=null,w=null}}function Ni(B,F){return w&&w(B,F.map(oe=>tx(oe,T.loaderData)))||B.key}function Gr(B,F){if(S&&R){let K=Ni(B,F);S[K]=R()}}function Rl(B,F){if(S){let K=Ni(B,F),oe=S[K];if(typeof oe=="number")return oe}return null}function Xr(B,F,K){if(e.patchRoutesOnNavigation)if(B){if(Object.keys(B[0].params).length>0)return{active:!0,matches:Gc(F,K,f,!0)}}else return{active:!0,matches:Gc(F,K,f,!0)||[]};return{active:!1,matches:null}}async function Vr(B,F,K,oe){if(!e.patchRoutesOnNavigation)return{type:"success",matches:B};let ue=B;for(;;){let ye=h==null,je=h||d,be=c;try{await e.patchRoutesOnNavigation({signal:K,path:F,matches:ue,fetcherKey:oe,patch:(xe,Re)=>{K.aborted||hv(xe,Re,je,be,s,!1)}})}catch(xe){return{type:"error",error:xe,partialMatches:ue}}finally{ye&&!K.aborted&&(d=[...d])}if(K.aborted)return{type:"aborted"};let Ce=ma(je,F,f);if(Ce)return{type:"success",matches:Ce};let Oe=Gc(je,F,f,!0);if(!Oe||ue.length===Oe.length&&ue.every((xe,Re)=>xe.route.id===Oe[Re].route.id))return{type:"success",matches:null};ue=Oe}}function Ao(B){c={},h=Ar(B,s,void 0,c)}function Mo(B,F,K=!1){let oe=h==null;hv(B,F,h||d,c,s,K),oe&&(d=[...d],Je({}))}return D={get basename(){return f},get future(){return g},get state(){return T},get routes(){return d},get window(){return n},initialize:nt,subscribe:Rt,enableScrollRestoration:jl,navigate:ea,fetch:Zn,revalidate:oa,createHref:B=>e.history.createHref(B),encodeLocation:B=>e.history.encodeLocation(B),getFetcher:Yt,deleteFetcher:nd,dispose:$e,getBlocker:wn,deleteBlocker:Ir,patchRoutes:Mo,_internalFetchControllers:U,_internalSetRoutes:Ao,_internalSetStateDoNotUseOrYouWillBreakYourApp(B){Je(B)}},D}function gx(e,n){ve(e.length>0,"You must provide a non-empty routes array to createStaticHandler");let r={},o=(n?n.basename:null)||"/",s=n?.mapRouteProperties||mx,c=Ar(e,s,void 0,r);async function d(b,{requestContext:S,filterMatchesToLoad:w,skipLoaderErrorBubbling:R,skipRevalidation:E,dataStrategy:N,unstable_generateMiddlewareResponse:_}={}){let O=new URL(b.url),M=b.method,D=In("",ia(O),null,"default"),T=ma(c,D,o);if(S=S??new gn,!Im(M)&&M!=="HEAD"){let L=Dt(405,{method:M}),{matches:H,route:G}=iu(c),W={basename:o,location:D,matches:H,loaderData:{},actionData:null,errors:{[G.id]:L},statusCode:L.status,loaderHeaders:{},actionHeaders:{}};return _?_(()=>Promise.resolve(W)):W}else if(!T){let L=Dt(404,{pathname:D.pathname}),{matches:H,route:G}=iu(c),W={basename:o,location:D,matches:H,loaderData:{},actionData:null,errors:{[G.id]:L},statusCode:L.status,loaderHeaders:{},actionHeaders:{}};return _?_(()=>Promise.resolve(W)):W}if(_){ve(S instanceof gn,"When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`");try{await yv(T,r,s);let L,H=await vv({request:b,matches:T,params:T[0].params,context:S},async()=>await _(async W=>{let te=await f(W,D,T,S,N||null,R===!0,null,w||null,E===!0);return ft(te)?te:(L={location:D,basename:o,...te},L)}),async(G,W)=>{if(ft(G))return G;if(L){W in L.loaderData&&(L.loaderData[W]=void 0);let te=yx(c,L,G,R?W:Ga(T,W).route.id);return _(()=>Promise.resolve(te))}else{let te=R?W:Ga(T,T.find(de=>de.route.id===W||de.route.loader)?.route.id||W).route.id,le={matches:T,location:D,basename:o,loaderData:{},actionData:null,errors:{[te]:G},statusCode:Et(G)?G.status:500,actionHeaders:{},loaderHeaders:{}};return _(()=>Promise.resolve(le))}});return ve(ft(H),"Expected a response in query()"),H}catch(L){if(ft(L))return L;throw L}}let k=await f(b,D,T,S,N||null,R===!0,null,w||null,E===!0);return ft(k)?k:{location:D,basename:o,...k}}async function h(b,{routeId:S,requestContext:w,dataStrategy:R,unstable_generateMiddlewareResponse:E}={}){let N=new URL(b.url),_=b.method,O=In("",ia(N),null,"default"),M=ma(c,O,o);if(w=w??new gn,!Im(_)&&_!=="HEAD"&&_!=="OPTIONS")throw Dt(405,{method:_});if(!M)throw Dt(404,{pathname:O.pathname});let D=S?M.find(L=>L.route.id===S):ho(M,O);if(S&&!D)throw Dt(403,{pathname:O.pathname,routeId:S});if(!D)throw Dt(404,{pathname:O.pathname});if(E)return ve(w instanceof gn,"When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`"),await yv(M,r,s),await vv({request:b,matches:M,params:M[0].params,context:w},async()=>await E(async G=>{let W=await f(G,O,M,w,R||null,!1,D,null,!1),te=k(W);return ft(te)?te:typeof te=="string"?new Response(te):Response.json(te)}),H=>{if(Et(H))return Promise.resolve(NR(H));if(ft(H))return Promise.resolve(H);throw H});let T=await f(b,O,M,w,R||null,!1,D,null,!1);return k(T);function k(L){if(ft(L))return L;let H=L.errors?Object.values(L.errors)[0]:void 0;if(H!==void 0)throw H;if(L.actionData)return Object.values(L.actionData)[0];if(L.loaderData)return Object.values(L.loaderData)[0]}}async function f(b,S,w,R,E,N,_,O,M){ve(b.signal,"query()/queryRoute() requests must contain an AbortController signal");try{if(Qt(b.method))return await p(b,w,_||ho(w,S),R,E,N,_!=null,O,M);let D=await g(b,w,R,E,N,_,O);return ft(D)?D:{...D,actionData:null,actionHeaders:{}}}catch(D){if(TR(D)&&ft(D.result)){if(D.type==="error")throw D.result;return D.result}if(Eu(D))return D;throw D}}async function p(b,S,w,R,E,N,_,O,M){let D;if(!w.route.action&&!w.route.lazy){let L=Dt(405,{method:b.method,pathname:new URL(b.url).pathname,routeId:w.route.id});if(_)throw L;D={type:"error",error:L}}else{let L=Dr(s,r,b,S,w,[],R);D=(await x(b,L,_,R,E))[w.route.id],b.signal.aborted&&dv(b,_)}if(Tr(D))throw new Response(null,{status:D.response.status,headers:{Location:D.response.headers.get("Location")}});if(_){if(Bt(D))throw D.error;return{matches:[w],loaderData:{},actionData:{[w.route.id]:D.data},errors:null,statusCode:200,loaderHeaders:{},actionHeaders:{}}}if(M)if(Bt(D)){let L=N?w:Ga(S,w.route.id);return{statusCode:Et(D.error)?D.error.status:D.statusCode!=null?D.statusCode:500,actionData:null,actionHeaders:{...D.headers?{[w.route.id]:D.headers}:{}},matches:S,loaderData:{},errors:{[L.route.id]:D.error},loaderHeaders:{}}}else return{actionData:{[w.route.id]:D.data},actionHeaders:D.headers?{[w.route.id]:D.headers}:{},matches:S,loaderData:{},errors:null,statusCode:D.statusCode||200,loaderHeaders:{}};let T=new Request(b.url,{headers:b.headers,redirect:b.redirect,signal:b.signal});if(Bt(D)){let L=N?w:Ga(S,w.route.id);return{...await g(T,S,R,E,N,null,O,[L.route.id,D]),statusCode:Et(D.error)?D.error.status:D.statusCode!=null?D.statusCode:500,actionData:null,actionHeaders:{...D.headers?{[w.route.id]:D.headers}:{}}}}return{...await g(T,S,R,E,N,null,O),actionData:{[w.route.id]:D.data},...D.statusCode?{statusCode:D.statusCode}:{},actionHeaders:D.headers?{[w.route.id]:D.headers}:{}}}async function g(b,S,w,R,E,N,_,O){let M=N!=null;if(M&&!N?.route.loader&&!N?.route.lazy)throw Dt(400,{method:b.method,pathname:new URL(b.url).pathname,routeId:N?.route.id});let D;if(N)D=Dr(s,r,b,S,N,[],w);else{let L=O&&Bt(O[1])?S.findIndex(H=>H.route.id===O[0])-1:void 0;D=S.map((H,G)=>L!=null&&G>L?Ps(s,r,b,H,[],w,!1):Ps(s,r,b,H,[],w,(H.route.loader||H.route.lazy)!=null&&(!_||_(H))))}if(!R&&!D.some(L=>L.shouldLoad))return{matches:S,loaderData:{},errors:O&&Bt(O[1])?{[O[0]]:O[1].error}:null,statusCode:200,loaderHeaders:{}};let T=await x(b,D,M,w,R);return b.signal.aborted&&dv(b,M),{...Tx(S,T,O,!0,E),matches:S}}async function x(b,S,w,R,E){let N=await jx(E||Fm,b,S,null,R,!0),_={};return await Promise.all(S.map(async O=>{if(!(O.route.id in N))return;let M=N[O.route.id];if(_x(M)){let D=M.result;throw Nx(D,b,O.route.id,S,o)}if(ft(M.result)&&w)throw M;_[O.route.id]=await Rx(M)})),_}return{dataRoutes:c,query:d,queryRoute:h}}function yx(e,n,r,o){let s=o||n._deepestRenderedBoundaryId||e[0].id;return{...n,statusCode:Et(r)?r.status:500,errors:{[s]:r}}}function dv(e,n){if(e.signal.reason!==void 0)throw e.signal.reason;let r=n?"queryRoute":"query";throw new Error(`${r}() call aborted without an \`AbortSignal.reason\`: ${e.method} ${e.url}`)}function vR(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Pm(e,n,r,o,s,c){let d,h;if(s){d=[];for(let p of n)if(d.push(p),p.route.id===s){h=p;break}}else d=n,h=n[n.length-1];let f=xu(o||".",bu(d),Pt(e.pathname,r)||e.pathname,c==="path");if(o==null&&(f.search=e.search,f.hash=e.hash),(o==null||o===""||o===".")&&h){let p=Eh(f.search);if(h.route.index&&!p)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&p){let g=new URLSearchParams(f.search),x=g.getAll("index");g.delete("index"),x.filter(S=>S).forEach(S=>g.append("index",S));let b=g.toString();f.search=b?`?${b}`:""}}return r!=="/"&&(f.pathname=sR({basename:r,pathname:f.pathname})),ia(f)}function fv(e,n,r){if(!r||!vR(r))return{path:n};if(r.formMethod&&!Im(r.formMethod))return{path:n,error:Dt(405,{method:r.formMethod})};let o=()=>({path:n,error:Dt(400,{type:"invalid-body"})}),c=(r.formMethod||"get").toUpperCase(),d=Cx(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Qt(c))return o();let x=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((b,[S,w])=>`${b}${S}=${w}
`,""):String(r.body);return{path:n,submission:{formMethod:c,formAction:d,formEncType:r.formEncType,formData:void 0,json:void 0,text:x}}}else if(r.formEncType==="application/json"){if(!Qt(c))return o();try{let x=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:c,formAction:d,formEncType:r.formEncType,formData:void 0,json:x,text:void 0}}}catch{return o()}}}ve(typeof FormData=="function","FormData is not available in this environment");let h,f;if(r.formData)h=qm(r.formData),f=r.formData;else if(r.body instanceof FormData)h=qm(r.body),f=r.body;else if(r.body instanceof URLSearchParams)h=r.body,f=xv(h);else if(r.body==null)h=new URLSearchParams,f=new FormData;else try{h=new URLSearchParams(r.body),f=xv(h)}catch{return o()}let p={formMethod:c,formAction:d,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:f,json:void 0,text:void 0};if(Qt(p.formMethod))return{path:n,submission:p};let g=Ma(n);return e&&g.search&&Eh(g.search)&&h.append("index",""),g.search=`?${h}`,{path:ia(g),submission:p}}function mv(e,n,r,o,s,c,d,h,f,p,g,x,b,S,w,R,E,N,_,O){let M=O?Bt(O[1])?O[1].error:O[1].data:void 0,D=s.createURL(c.location),T=s.createURL(f),k;if(g&&c.errors){let le=Object.keys(c.errors)[0];k=d.findIndex(de=>de.route.id===le)}else if(O&&Bt(O[1])){let le=O[0];k=d.findIndex(de=>de.route.id===le)-1}let L=O?O[1].statusCode:void 0,H=L&&L>=400,G={currentUrl:D,currentParams:c.matches[0]?.params||{},nextUrl:T,nextParams:d[0].params,...h,actionResult:M,actionStatus:L},W=d.map((le,de)=>{let{route:re}=le,U=null;if(k!=null&&de>k?U=!1:re.lazy?U=!0:re.loader==null?U=!1:g?U=Ym(re,c.loaderData,c.errors):bR(c.loaderData,c.matches[de],le)&&(U=!0),U!==null)return Ps(r,o,e,le,p,n,U);let X=H?!1:x||D.pathname+D.search===T.pathname+T.search||D.search!==T.search||xR(c.matches[de],le),J={...G,defaultShouldRevalidate:X},me=ru(le,J);return Ps(r,o,e,le,p,n,me,J)}),te=[];return w.forEach((le,de)=>{if(g||!d.some(se=>se.route.id===le.routeId)||S.has(de))return;let re=c.fetchers.get(de),U=re&&re.state!=="idle"&&re.data===void 0,X=ma(E,le.path,N);if(!X){if(_&&U)return;te.push({key:de,routeId:le.routeId,path:le.path,matches:null,match:null,request:null,controller:null});return}if(R.has(de))return;let J=ho(X,le.path),me=new AbortController,A=uo(s,le.path,me.signal),Y=null;if(b.has(de))b.delete(de),Y=Dr(r,o,A,X,J,p,n);else if(U)x&&(Y=Dr(r,o,A,X,J,p,n));else{let se={...G,defaultShouldRevalidate:H?!1:x};ru(J,se)&&(Y=Dr(r,o,A,X,J,p,n,se))}Y&&te.push({key:de,routeId:le.routeId,path:le.path,matches:Y,match:J,request:A,controller:me})}),{dsMatches:W,revalidatingFetchers:te}}function Ym(e,n,r){if(e.lazy)return!0;if(!e.loader)return!1;let o=n!=null&&e.id in n,s=r!=null&&r[e.id]!==void 0;return!o&&s?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!o&&!s}function bR(e,n,r){let o=!n||r.route.id!==n.route.id,s=!e.hasOwnProperty(r.route.id);return o||s}function xR(e,n){let r=e.route.path;return e.pathname!==n.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==n.params["*"]}function ru(e,n){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(n);if(typeof r=="boolean")return r}return n.defaultShouldRevalidate}function hv(e,n,r,o,s,c){let d;if(e){let p=o[e];ve(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),d=p.children}else d=r;let h=[],f=[];if(n.forEach(p=>{let g=d.find(x=>vx(p,x));g?f.push({existingRoute:g,newRoute:p}):h.push(p)}),h.length>0){let p=Ar(h,s,[e||"_","patch",String(d?.length||"0")],o);d.push(...p)}if(c&&f.length>0)for(let p=0;p<f.length;p++){let{existingRoute:g,newRoute:x}=f[p],b=g,[S]=Ar([x],s,[],{},!0);Object.assign(b,{element:S.element?S.element:b.element,errorElement:S.errorElement?S.errorElement:b.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:b.hydrateFallbackElement})}}function vx(e,n){return"id"in e&&"id"in n&&e.id===n.id?!0:e.index===n.index&&e.path===n.path&&e.caseSensitive===n.caseSensitive?(!e.children||e.children.length===0)&&(!n.children||n.children.length===0)?!0:e.children.every((r,o)=>n.children?.some(s=>vx(r,s))):!1}var pv=new WeakMap,Sh=({key:e,route:n,manifest:r,mapRouteProperties:o})=>{let s=r[n.id];if(ve(s,"No route found in manifest"),!s.lazy||typeof s.lazy!="object")return;let c=s.lazy[e];if(!c)return;let d=pv.get(s);d||(d={},pv.set(s,d));let h=d[e];if(h)return h;let f=(async()=>{let p=Gj(e),x=s[e]!==void 0&&e!=="hasErrorBoundary";if(p)ct(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),d[e]=Promise.resolve();else if(x)ct(!1,`Route "${s.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let b=await c();b!=null&&(Object.assign(s,{[e]:b}),Object.assign(s,o(s)))}typeof s.lazy=="object"&&(s.lazy[e]=void 0,Object.values(s.lazy).every(b=>b===void 0)&&(s.lazy=void 0))})();return d[e]=f,f},gv=new WeakMap;function wR(e,n,r,o,s){let c=r[e.id];if(ve(c,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let g=gv.get(c);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let x=(async()=>{ve(typeof e.lazy=="function","No lazy route function found");let b=await e.lazy(),S={};for(let w in b){let R=b[w];if(R===void 0)continue;let E=Vj(w),_=c[w]!==void 0&&w!=="hasErrorBoundary";E?ct(!E,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):_?ct(!_,`Route "${c.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):S[w]=R}Object.assign(c,S),Object.assign(c,{...o(c),lazy:void 0})})();return gv.set(c,x),x.catch(()=>{}),{lazyRoutePromise:x,lazyHandlerPromise:x}}let d=Object.keys(e.lazy),h=[],f;for(let g of d){if(s&&s.includes(g))continue;let x=Sh({key:g,route:e,manifest:r,mapRouteProperties:o});x&&(h.push(x),g===n&&(f=x))}let p=h.length>0?Promise.all(h).then(()=>{}):void 0;return p?.catch(()=>{}),f?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:f}}function SR(e){return e!==void 0}function yv(e,n,r){let o=e.map(({route:s})=>{if(!(typeof s.lazy!="object"||!s.lazy.unstable_middleware))return Sh({key:"unstable_middleware",route:s,manifest:n,mapRouteProperties:r})}).filter(SR);return o.length>0?Promise.all(o):void 0}async function Fm(e){let n=e.matches.filter(s=>s.shouldLoad),r={};return(await Promise.all(n.map(s=>s.resolve()))).forEach((s,c)=>{r[n[c].route.id]=s}),r}async function ER(e){if(!e.matches.some(r=>r.route.unstable_middleware))return Fm(e);let n=!1;return wx(e,()=>(n=!0,Fm(e)),(r,o)=>bx(r,o,e.matches,n))}function bx(e,n,r,o){return o?{[n]:{type:"error",result:e}}:{[Ga(r,r.find(c=>c.route.id===n||c.route.loader)?.route.id||n).route.id]:{type:"error",result:e}}}async function vv(e,n,r){let{matches:o,request:s,params:c,context:d}=e,h=o.flatMap(p=>p.route.unstable_middleware?p.route.unstable_middleware.map(g=>[p.route.id,g]):[]),f=await xx({request:s,params:c,context:d},h,n,r);if(ft(f))return f;ve(!1,"Expected a Response to be returned from route middleware")}async function xx(e,n,r,o,s=0){let{request:c}=e;if(c.signal.aborted)throw c.signal.reason?c.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${c.method} ${c.url}`);let d=n[s];if(!d)return await r();let[h,f]=d,p=!1,g,x=async()=>{if(p)throw new Error("You may only call `next()` once per middleware");p=!0;try{let b=await xx(e,n,r,o,s+1);return Cr(b)&&(b=jv(b)),g=b,g}catch(b){return g=await o(Cr(b)?Rv(b):b,h),g}};try{let b=await f({request:e.request,params:e.params,context:e.context},x);return Cr(b)&&(b=jv(b)),p?typeof b>"u"?g:b:ft(b)?b:(g=await x(),g)}catch(b){return await o(Cr(b)?Rv(b):b,h)}}async function wx(e,n,r){let{matches:o,request:s,params:c,context:d}=e,h=o.flatMap(p=>p.route.unstable_middleware?p.route.unstable_middleware.map(g=>[p.route.id,g]):[]),f={};return await Sx({request:s,params:c,context:d},h,n,r,f),f}async function Sx(e,n,r,o,s={},c=0){let{request:d}=e;if(d.signal.aborted)throw d.signal.reason?d.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${d.method} ${d.url}`);let h=n[c];if(!h){let b=await r();Object.assign(s,b);return}let[f,p]=h,g=!1,x=async()=>{if(g)throw new Error("You may only call `next()` once per middleware");g=!0;try{let b=await Sx(e,n,r,o,s,c+1);Object.assign(s,b)}catch(b){let S=await o(b,f);Object.assign(s,S)}};try{let b=await p({request:e.request,params:e.params,context:e.context},x);typeof b<"u"&&console.warn("client middlewares are not intended to return values, the value will be ignored",b),g||await x()}catch(b){let S=await o(b,f);Object.assign(s,S)}}function Ex(e,n,r,o,s){let c=Sh({key:"unstable_middleware",route:o.route,manifest:n,mapRouteProperties:e}),d=wR(o.route,Qt(r.method)?"action":"loader",n,e,s);return{middleware:c,route:d.lazyRoutePromise,handler:d.lazyHandlerPromise}}function Ps(e,n,r,o,s,c,d,h=null){let f=!1,p=Ex(e,n,r,o,s);return{...o,_lazyPromises:p,shouldLoad:d,unstable_shouldRevalidateArgs:h,unstable_shouldCallHandler(g){return f=!0,h?typeof g=="boolean"?ru(o,{...h,defaultShouldRevalidate:g}):ru(o,h):d},resolve(g){return f||d||g&&!Qt(r.method)&&(o.route.lazy||o.route.loader)?jR({request:r,match:o,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:g,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function Dr(e,n,r,o,s,c,d,h=null){return o.map(f=>f.route.id!==s.route.id?{...f,shouldLoad:!1,unstable_shouldRevalidateArgs:h,unstable_shouldCallHandler:()=>!1,_lazyPromises:Ex(e,n,r,f,c),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Ps(e,n,r,f,c,d,!0,h))}async function jx(e,n,r,o,s,c){r.some(p=>p._lazyPromises?.middleware)&&await Promise.all(r.map(p=>p._lazyPromises?.middleware));let d={request:n,params:r[0].params,context:s,matches:r},f=await e({...d,fetcherKey:o,unstable_runClientMiddleware:c?()=>{throw new Error("You cannot call `unstable_runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`")}:p=>{let g=d,x=!1;return wx(g,()=>(x=!0,p({...g,fetcherKey:o,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}})),(b,S)=>bx(b,S,r,x))}});try{await Promise.all(r.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return f}async function jR({request:e,match:n,lazyHandlerPromise:r,lazyRoutePromise:o,handlerOverride:s,scopedContext:c}){let d,h,f=Qt(e.method),p=f?"action":"loader",g=x=>{let b,S=new Promise((E,N)=>b=N);h=()=>b(),e.signal.addEventListener("abort",h);let w=E=>typeof x!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${n.route.id}]`)):x({request:e,params:n.params,context:c},...E!==void 0?[E]:[]),R=(async()=>{try{return{type:"data",result:await(s?s(N=>w(N)):w())}}catch(E){return{type:"error",result:E}}})();return Promise.race([R,S])};try{let x=f?n.route.action:n.route.loader;if(r||o)if(x){let b,[S]=await Promise.all([g(x).catch(w=>{b=w}),r,o]);if(b!==void 0)throw b;d=S}else{await r;let b=f?n.route.action:n.route.loader;if(b)[d]=await Promise.all([g(b),o]);else if(p==="action"){let S=new URL(e.url),w=S.pathname+S.search;throw Dt(405,{method:e.method,pathname:w,routeId:n.route.id})}else return{type:"data",result:void 0}}else if(x)d=await g(x);else{let b=new URL(e.url),S=b.pathname+b.search;throw Dt(404,{pathname:S})}}catch(x){return{type:"error",result:x}}finally{h&&e.signal.removeEventListener("abort",h)}return d}async function Rx(e){let{result:n,type:r}=e;if(ft(n)){let o;try{let s=n.headers.get("Content-Type");s&&/\bapplication\/json\b/.test(s)?n.body==null?o=null:o=await n.json():o=await n.text()}catch(s){return{type:"error",error:s}}return r==="error"?{type:"error",error:new Jt(n.status,n.statusText,o),statusCode:n.status,headers:n.headers}:{type:"data",data:o,statusCode:n.status,headers:n.headers}}return r==="error"?Cr(n)?n.data instanceof Error?{type:"error",error:n.data,statusCode:n.init?.status,headers:n.init?.headers?new Headers(n.init.headers):void 0}:{type:"error",error:new Jt(n.init?.status||500,void 0,n.data),statusCode:Et(n)?n.status:void 0,headers:n.init?.headers?new Headers(n.init.headers):void 0}:{type:"error",error:n,statusCode:Et(n)?n.status:void 0}:Cr(n)?{type:"data",data:n.data,statusCode:n.init?.status,headers:n.init?.headers?new Headers(n.init.headers):void 0}:{type:"data",data:n}}function Nx(e,n,r,o,s){let c=e.headers.get("Location");if(ve(c,"Redirects returned/thrown from loaders/actions must have a Location header"),!wh(c)){let d=o.slice(0,o.findIndex(h=>h.route.id===r)+1);c=Pm(new URL(n.url),d,s,c),e.headers.set("Location",c)}return e}function bv(e,n,r){if(wh(e)){let o=e,s=o.startsWith("//")?new URL(n.protocol+o):new URL(o),c=Pt(s.pathname,r)!=null;if(s.origin===n.origin&&c)return s.pathname+s.search+s.hash}return e}function uo(e,n,r,o){let s=e.createURL(Cx(n)).toString(),c={signal:r};if(o&&Qt(o.formMethod)){let{formMethod:d,formEncType:h}=o;c.method=d.toUpperCase(),h==="application/json"?(c.headers=new Headers({"Content-Type":h}),c.body=JSON.stringify(o.json)):h==="text/plain"?c.body=o.text:h==="application/x-www-form-urlencoded"&&o.formData?c.body=qm(o.formData):c.body=o.formData}return new Request(s,c)}function qm(e){let n=new URLSearchParams;for(let[r,o]of e.entries())n.append(r,typeof o=="string"?o:o.name);return n}function xv(e){let n=new FormData;for(let[r,o]of e.entries())n.append(r,o);return n}function Tx(e,n,r,o=!1,s=!1){let c={},d=null,h,f=!1,p={},g=r&&Bt(r[1])?r[1].error:void 0;return e.forEach(x=>{if(!(x.route.id in n))return;let b=x.route.id,S=n[b];if(ve(!Tr(S),"Cannot handle redirect results in processLoaderData"),Bt(S)){let w=S.error;if(g!==void 0&&(w=g,g=void 0),d=d||{},s)d[b]=w;else{let R=Ga(e,b);d[R.route.id]==null&&(d[R.route.id]=w)}o||(c[b]=px),f||(f=!0,h=Et(S.error)?S.error.status:500),S.headers&&(p[b]=S.headers)}else c[b]=S.data,S.statusCode&&S.statusCode!==200&&!f&&(h=S.statusCode),S.headers&&(p[b]=S.headers)}),g!==void 0&&r&&(d={[r[0]]:g},r[2]&&(c[r[2]]=void 0)),{loaderData:c,errors:d,statusCode:h||200,loaderHeaders:p}}function wv(e,n,r,o,s,c){let{loaderData:d,errors:h}=Tx(n,r,o);return s.filter(f=>!f.matches||f.matches.some(p=>p.shouldLoad)).forEach(f=>{let{key:p,match:g,controller:x}=f;if(x&&x.signal.aborted)return;let b=c[p];if(ve(b,"Did not find corresponding fetcher result"),Bt(b)){let S=Ga(e.matches,g?.route.id);h&&h[S.route.id]||(h={...h,[S.route.id]:b.error}),e.fetchers.delete(p)}else if(Tr(b))ve(!1,"Unhandled fetcher revalidation redirect");else{let S=jr(b.data);e.fetchers.set(p,S)}}),{loaderData:d,errors:h}}function Sv(e,n,r,o){let s=Object.entries(n).filter(([,c])=>c!==px).reduce((c,[d,h])=>(c[d]=h,c),{});for(let c of r){let d=c.route.id;if(!n.hasOwnProperty(d)&&e.hasOwnProperty(d)&&c.route.loader&&(s[d]=e[d]),o&&o.hasOwnProperty(d))break}return s}function Ev(e){return e?Bt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ga(e,n){return(n?e.slice(0,e.findIndex(o=>o.route.id===n)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function iu(e){let n=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function Dt(e,{pathname:n,routeId:r,method:o,type:s,message:c}={}){let d="Unknown Server Error",h="Unknown @remix-run/router error";return e===400?(d="Bad Request",o&&n&&r?h=`You made a ${o} request to "${n}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`:s==="invalid-body"&&(h="Unable to encode submission body")):e===403?(d="Forbidden",h=`Route "${r}" does not match URL "${n}"`):e===404?(d="Not Found",h=`No route matches URL "${n}"`):e===405&&(d="Method Not Allowed",o&&n&&r?h=`You made a ${o.toUpperCase()} request to "${n}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`:o&&(h=`Invalid request method "${o.toUpperCase()}"`)),new Jt(e||500,d,new Error(h),!0)}function zc(e){let n=Object.entries(e);for(let r=n.length-1;r>=0;r--){let[o,s]=n[r];if(Tr(s))return{key:o,result:s}}}function Cx(e){let n=typeof e=="string"?Ma(e):e;return ia({...n,hash:""})}function RR(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function jv(e){return new Response(typeof e.data=="string"?e.data:JSON.stringify(e.data),e.init||void 0)}function Rv(e){return new Jt(e.init?.status??500,e.init?.statusText??"Internal Server Error",e.data)}function NR(e){return new Response(typeof e.data=="string"?e.data:JSON.stringify(e.data),{status:e.status,statusText:e.statusText})}function TR(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function _x(e){return ft(e.result)&&fx.has(e.result.status)}function Bt(e){return e.type==="error"}function Tr(e){return(e&&e.type)==="redirect"}function Cr(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function ft(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Su(e){return fx.has(e)}function Eu(e){return ft(e)&&Su(e.status)&&e.headers.has("Location")}function Im(e){return pR.has(e.toUpperCase())}function Qt(e){return mR.has(e.toUpperCase())}function Eh(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function ho(e,n){let r=typeof n=="string"?Ma(n).search:n.search;if(e[e.length-1].route.index&&Eh(r||""))return e[e.length-1];let o=sx(e);return o[o.length-1]}function Nv(e){let{formMethod:n,formAction:r,formEncType:o,text:s,formData:c,json:d}=e;if(!(!n||!r||!o)){if(s!=null)return{formMethod:n,formAction:r,formEncType:o,formData:void 0,json:void 0,text:s};if(c!=null)return{formMethod:n,formAction:r,formEncType:o,formData:c,json:void 0,text:void 0};if(d!==void 0)return{formMethod:n,formAction:r,formEncType:o,formData:void 0,json:d,text:void 0}}}function gm(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function CR(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Cs(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function _R(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function jr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function OR(e,n){try{let r=e.sessionStorage.getItem(hx);if(r){let o=JSON.parse(r);for(let[s,c]of Object.entries(o||{}))c&&Array.isArray(c)&&n.set(s,new Set(c||[]))}}catch{}}function DR(e,n){if(n.size>0){let r={};for(let[o,s]of n)r[o]=[...s];try{e.sessionStorage.setItem(hx,JSON.stringify(r))}catch(o){ct(!1,`Failed to save applied view transitions in sessionStorage (${o}).`)}}}function AR(){let e,n,r=new Promise((o,s)=>{e=async c=>{o(c);try{await r}catch{}},n=async c=>{s(c);try{await r}catch{}}});return{promise:r,resolve:e,reject:n}}var Qn=v.createContext(null);Qn.displayName="DataRouter";var Lr=v.createContext(null);Lr.displayName="DataRouterState";var jh=v.createContext(!1);function MR(){return v.useContext(jh)}var nl=v.createContext({isTransitioning:!1});nl.displayName="ViewTransition";var rl=v.createContext(new Map);rl.displayName="Fetchers";var Ys=v.createContext(null);Ys.displayName="Await";var ba=v.createContext(null);ba.displayName="Navigation";var Si=v.createContext(null);Si.displayName="Location";var xa=v.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var Rh=v.createContext(null);Rh.displayName="RouteError";function Ox(e,{relative:n}={}){ve(zr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=v.useContext(ba),{hash:s,pathname:c,search:d}=jo(e,{relative:n}),h=c;return r!=="/"&&(h=c==="/"?r:yn([r,c])),o.createHref({pathname:h,search:d,hash:s})}function zr(){return v.useContext(Si)!=null}function wa(){return ve(zr(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Si).location}function kR(){return v.useContext(Si).navigationType}function LR(e){ve(zr(),"useMatch() may be used only in the context of a <Router> component.");let{pathname:n}=wa();return v.useMemo(()=>yo(e,ix(n)),[n,e])}var Dx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ax(e){v.useContext(ba).static||v.useLayoutEffect(e)}function Ur(){let{isDataRoute:e}=v.useContext(xa);return e?VR():zR()}function zR(){ve(zr(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(Qn),{basename:n,navigator:r}=v.useContext(ba),{matches:o}=v.useContext(xa),{pathname:s}=wa(),c=JSON.stringify(bu(o)),d=v.useRef(!1);return Ax(()=>{d.current=!0}),v.useCallback((f,p={})=>{if(ct(d.current,Dx),!d.current)return;if(typeof f=="number"){r.go(f);return}let g=xu(f,JSON.parse(c),s,p.relative==="path");e==null&&n!=="/"&&(g.pathname=g.pathname==="/"?n:yn([n,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[n,r,c,s,e])}var Mx=v.createContext(null);function UR(){return v.useContext(Mx)}function kx(e){let n=v.useContext(xa).outlet;return n&&v.createElement(Mx.Provider,{value:e},n)}function ju(){let{matches:e}=v.useContext(xa),n=e[e.length-1];return n?n.params:{}}function jo(e,{relative:n}={}){let{matches:r}=v.useContext(xa),{pathname:o}=wa(),s=JSON.stringify(bu(r));return v.useMemo(()=>xu(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Lx(e,n){return Nh(e,n)}function Nh(e,n,r,o){ve(zr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=v.useContext(ba),{matches:c}=v.useContext(xa),d=c[c.length-1],h=d?d.params:{},f=d?d.pathname:"/",p=d?d.pathnameBase:"/",g=d&&d.route;{let N=g&&g.path||"";$x(f,!g||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let x=wa(),b;if(n){let N=typeof n=="string"?Ma(n):n;ve(p==="/"||N.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${N.pathname}" was given in the \`location\` prop.`),b=N}else b=x;let S=b.pathname||"/",w=S;if(p!=="/"){let N=p.replace(/^\//,"").split("/");w="/"+S.replace(/^\//,"").split("/").slice(N.length).join("/")}let R=ma(e,{pathname:w});ct(g||R!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),ct(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=zx(R&&R.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:yn([p,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?p:yn([p,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),c,r,o);return n&&E?v.createElement(Si.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},E):E}function HR(){let e=ol(),n=Et(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:c},"ErrorBoundary")," or"," ",v.createElement("code",{style:c},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),r?v.createElement("pre",{style:s},r):null,d)}var BR=v.createElement(HR,null),$R=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?v.createElement(xa.Provider,{value:this.props.routeContext},v.createElement(Rh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function PR({routeContext:e,match:n,children:r}){let o=v.useContext(Qn);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(xa.Provider,{value:e},r)}function zx(e,n=[],r=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(n.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,c=r?.errors;if(c!=null){let f=s.findIndex(p=>p.route.id&&c?.[p.route.id]!==void 0);ve(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let d=!1,h=-1;if(r)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:g,errors:x}=r,b=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||b){d=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((f,p,g)=>{let x,b=!1,S=null,w=null;r&&(x=c&&p.route.id?c[p.route.id]:void 0,S=p.route.errorElement||BR,d&&(h<0&&g===0?($x("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,w=null):h===g&&(b=!0,w=p.route.hydrateFallbackElement||null)));let R=n.concat(s.slice(0,g+1)),E=()=>{let N;return x?N=S:b?N=w:p.route.Component?N=v.createElement(p.route.Component,null):p.route.element?N=p.route.element:N=f,v.createElement(PR,{match:p,routeContext:{outlet:f,matches:R,isDataRoute:r!=null},children:N})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?v.createElement($R,{location:r.location,revalidation:r.revalidation,component:S,error:x,children:E(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):E()},null)}function Th(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ch(e){let n=v.useContext(Qn);return ve(n,Th(e)),n}function Hr(e){let n=v.useContext(Lr);return ve(n,Th(e)),n}function YR(e){let n=v.useContext(xa);return ve(n,Th(e)),n}function il(e){let n=YR(e),r=n.matches[n.matches.length-1];return ve(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function FR(){return il("useRouteId")}function Ux(){return Hr("useNavigation").navigation}function qR(){let e=Ch("useRevalidator"),n=Hr("useRevalidator"),r=v.useCallback(async()=>{await e.router.revalidate()},[e.router]);return v.useMemo(()=>({revalidate:r,state:n.revalidation}),[r,n.revalidation])}function Ru(){let{matches:e,loaderData:n}=Hr("useMatches");return v.useMemo(()=>e.map(r=>tx(r,n)),[e,n])}function Nu(){let e=Hr("useLoaderData"),n=il("useLoaderData");return e.loaderData[n]}function IR(e){return Hr("useRouteLoaderData").loaderData[e]}function Tu(){let e=Hr("useActionData"),n=il("useLoaderData");return e.actionData?e.actionData[n]:void 0}function ol(){let e=v.useContext(Rh),n=Hr("useRouteError"),r=il("useRouteError");return e!==void 0?e:n.errors?.[r]}function Hx(){return v.useContext(Ys)?._data}function GR(){return v.useContext(Ys)?._error}var XR=0;function Bx(e){let{router:n,basename:r}=Ch("useBlocker"),o=Hr("useBlocker"),[s,c]=v.useState(""),d=v.useCallback(h=>{if(typeof e!="function")return!!e;if(r==="/")return e(h);let{currentLocation:f,nextLocation:p,historyAction:g}=h;return e({currentLocation:{...f,pathname:Pt(f.pathname,r)||f.pathname},nextLocation:{...p,pathname:Pt(p.pathname,r)||p.pathname},historyAction:g})},[r,e]);return v.useEffect(()=>{let h=String(++XR);return c(h),()=>n.deleteBlocker(h)},[n]),v.useEffect(()=>{s!==""&&n.getBlocker(s,d)},[n,s,d]),s&&o.blockers.has(s)?o.blockers.get(s):Nr}function VR(){let{router:e}=Ch("useNavigate"),n=il("useNavigate"),r=v.useRef(!1);return Ax(()=>{r.current=!0}),v.useCallback(async(s,c={})=>{ct(r.current,Dx),r.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:n,...c}))},[e,n])}var Tv={};function $x(e,n,r){!n&&!Tv[e]&&(Tv[e]=!0,ct(!1,r))}var Cv={};function Fs(e,n){!e&&!Cv[n]&&(Cv[n]=!0,console.warn(n))}function Ei(e){let n={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&ct(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(n,{element:v.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&ct(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(n,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&ct(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(n,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),n}var sl=["HydrateFallback","hydrateFallbackElement"];function Px(e,n){return Eo({basename:n?.basename,unstable_getContext:n?.unstable_getContext,future:n?.future,history:Kb({initialEntries:n?.initialEntries,initialIndex:n?.initialIndex}),hydrationData:n?.hydrationData,routes:e,hydrationRouteProperties:sl,mapRouteProperties:Ei,dataStrategy:n?.dataStrategy,patchRoutesOnNavigation:n?.patchRoutesOnNavigation}).initialize()}var QR=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function Cu({router:e,flushSync:n}){let[r,o]=v.useState(e.state),[s,c]=v.useState(),[d,h]=v.useState({isTransitioning:!1}),[f,p]=v.useState(),[g,x]=v.useState(),[b,S]=v.useState(),w=v.useRef(new Map),R=v.useCallback((O,{deletedFetchers:M,flushSync:D,viewTransitionOpts:T})=>{O.fetchers.forEach((L,H)=>{L.data!==void 0&&w.current.set(H,L.data)}),M.forEach(L=>w.current.delete(L)),Fs(D===!1||n!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let k=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(Fs(T==null||k,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!T||!k){n&&D?n(()=>o(O)):v.startTransition(()=>o(O));return}if(n&&D){n(()=>{g&&(f&&f.resolve(),g.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:T.currentLocation,nextLocation:T.nextLocation})});let L=e.window.document.startViewTransition(()=>{n(()=>o(O))});L.finished.finally(()=>{n(()=>{p(void 0),x(void 0),c(void 0),h({isTransitioning:!1})})}),n(()=>x(L));return}g?(f&&f.resolve(),g.skipTransition(),S({state:O,currentLocation:T.currentLocation,nextLocation:T.nextLocation})):(c(O),h({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}))},[e.window,n,g,f]);v.useLayoutEffect(()=>e.subscribe(R),[e,R]),v.useEffect(()=>{d.isTransitioning&&!d.flushSync&&p(new QR)},[d]),v.useEffect(()=>{if(f&&s&&e.window){let O=s,M=f.promise,D=e.window.document.startViewTransition(async()=>{v.startTransition(()=>o(O)),await M});D.finished.finally(()=>{p(void 0),x(void 0),c(void 0),h({isTransitioning:!1})}),x(D)}},[s,f,e.window]),v.useEffect(()=>{f&&s&&r.location.key===s.location.key&&f.resolve()},[f,g,r.location,s]),v.useEffect(()=>{!d.isTransitioning&&b&&(c(b.state),h({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),S(void 0))},[d.isTransitioning,b]);let E=v.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:O=>e.navigate(O),push:(O,M,D)=>e.navigate(O,{state:M,preventScrollReset:D?.preventScrollReset}),replace:(O,M,D)=>e.navigate(O,{replace:!0,state:M,preventScrollReset:D?.preventScrollReset})}),[e]),N=e.basename||"/",_=v.useMemo(()=>({router:e,navigator:E,static:!1,basename:N}),[e,E,N]);return v.createElement(v.Fragment,null,v.createElement(Qn.Provider,{value:_},v.createElement(Lr.Provider,{value:r},v.createElement(rl.Provider,{value:w.current},v.createElement(nl.Provider,{value:d},v.createElement(Br,{basename:N,location:r.location,navigationType:r.historyAction,navigator:E},v.createElement(KR,{routes:e.routes,future:e.future,state:r})))))),null)}var KR=v.memo(ZR);function ZR({routes:e,future:n,state:r}){return Nh(e,void 0,r,n)}function WR({basename:e,children:n,initialEntries:r,initialIndex:o}){let s=v.useRef();s.current==null&&(s.current=Kb({initialEntries:r,initialIndex:o,v5Compat:!0}));let c=s.current,[d,h]=v.useState({action:c.action,location:c.location}),f=v.useCallback(p=>{v.startTransition(()=>h(p))},[h]);return v.useLayoutEffect(()=>c.listen(f),[c,f]),v.createElement(Br,{basename:e,children:n,location:d.location,navigationType:d.action,navigator:c})}function Yx({to:e,replace:n,state:r,relative:o}){ve(zr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=v.useContext(ba);ct(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=v.useContext(xa),{pathname:d}=wa(),h=Ur(),f=xu(e,bu(c),d,o==="path"),p=JSON.stringify(f);return v.useEffect(()=>{h(JSON.parse(p),{replace:n,state:r,relative:o})},[h,p,o,n,r]),null}function Fx(e){return kx(e.context)}function Bn(e){ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Br({basename:e="/",children:n=null,location:r,navigationType:o="POP",navigator:s,static:c=!1}){ve(!zr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),h=v.useMemo(()=>({basename:d,navigator:s,static:c,future:{}}),[d,s,c]);typeof r=="string"&&(r=Ma(r));let{pathname:f="/",search:p="",hash:g="",state:x=null,key:b="default"}=r,S=v.useMemo(()=>{let w=Pt(f,d);return w==null?null:{location:{pathname:w,search:p,hash:g,state:x,key:b},navigationType:o}},[d,f,p,g,x,b,o]);return ct(S!=null,`<Router basename="${d}"> is not able to match the URL "${f}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:v.createElement(ba.Provider,{value:h},v.createElement(Si.Provider,{children:n,value:S}))}function qx({children:e,location:n}){return Lx(qs(e),n)}function JR({children:e,errorElement:n,resolve:r}){return v.createElement(eN,{resolve:r,errorElement:n},v.createElement(tN,null,e))}var eN=class extends v.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){console.error("<Await> caught the following error during render",e,n)}render(){let{children:e,errorElement:n,resolve:r}=this.props,o=null,s=0;if(!(r instanceof Promise))s=1,o=Promise.resolve(),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_data",{get:()=>r});else if(this.state.error){s=2;let c=this.state.error;o=Promise.reject().catch(()=>{}),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_error",{get:()=>c})}else r._tracked?(o=r,s="_error"in o?2:"_data"in o?1:0):(s=0,Object.defineProperty(r,"_tracked",{get:()=>!0}),o=r.then(c=>Object.defineProperty(r,"_data",{get:()=>c}),c=>Object.defineProperty(r,"_error",{get:()=>c})));if(s===2&&!n)throw o._error;if(s===2)return v.createElement(Ys.Provider,{value:o,children:n});if(s===1)return v.createElement(Ys.Provider,{value:o,children:e});throw o}};function tN({children:e}){let n=Hx(),r=typeof e=="function"?e(n):e;return v.createElement(v.Fragment,null,r)}function qs(e,n=[]){let r=[];return v.Children.forEach(e,(o,s)=>{if(!v.isValidElement(o))return;let c=[...n,s];if(o.type===v.Fragment){r.push.apply(r,qs(o.props.children,c));return}ve(o.type===Bn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ve(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=qs(o.props.children,c)),r.push(d)}),r}var aN=qs;function nN(e){return zx(e)}function Ix(){return{params:ju(),loaderData:Nu(),actionData:Tu(),matches:Ru()}}function rN({children:e}){const n=Ix();return v.cloneElement(e,n)}function Gx(e){return function(){const r=Ix();return v.createElement(e,r)}}function Xx(){return{params:ju(),loaderData:Nu(),actionData:Tu()}}function iN({children:e}){const n=Xx();return v.cloneElement(e,n)}function Vx(e){return function(){const r=Xx();return v.createElement(e,r)}}function Qx(){return{params:ju(),loaderData:Nu(),actionData:Tu(),error:ol()}}function oN({children:e}){const n=Qx();return v.cloneElement(e,n)}function Kx(e){return function(){const r=Qx();return v.createElement(e,r)}}var Xc="get",Vc="application/x-www-form-urlencoded";function _u(e){return e!=null&&typeof e.tagName=="string"}function sN(e){return _u(e)&&e.tagName.toLowerCase()==="button"}function lN(e){return _u(e)&&e.tagName.toLowerCase()==="form"}function cN(e){return _u(e)&&e.tagName.toLowerCase()==="input"}function uN(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dN(e,n){return e.button===0&&(!n||n==="_self")&&!uN(e)}function ou(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,r)=>{let o=e[r];return n.concat(Array.isArray(o)?o.map(s=>[r,s]):[[r,o]])},[]))}function fN(e,n){let r=ou(e);return n&&n.forEach((o,s)=>{r.has(s)||n.getAll(s).forEach(c=>{r.append(s,c)})}),r}var Uc=null;function mN(){if(Uc===null)try{new FormData(document.createElement("form"),0),Uc=!1}catch{Uc=!0}return Uc}var hN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ym(e){return e!=null&&!hN.has(e)?(ct(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vc}"`),null):e}function pN(e,n){let r,o,s,c,d;if(lN(e)){let h=e.getAttribute("action");o=h?Pt(h,n):null,r=e.getAttribute("method")||Xc,s=ym(e.getAttribute("enctype"))||Vc,c=new FormData(e)}else if(sN(e)||cN(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||h.getAttribute("action");if(o=f?Pt(f,n):null,r=e.getAttribute("formmethod")||h.getAttribute("method")||Xc,s=ym(e.getAttribute("formenctype"))||ym(h.getAttribute("enctype"))||Vc,c=new FormData(h,e),!mN()){let{name:p,type:g,value:x}=e;if(g==="image"){let b=p?`${p}.`:"";c.append(`${b}x`,"0"),c.append(`${b}y`,"0")}else p&&c.append(p,x)}}else{if(_u(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Xc,o=null,s=Vc,d=e}return c&&s==="text/plain"&&(d=c,c=void 0),{action:o,method:r.toLowerCase(),encType:s,formData:c,body:d}}var Zx=-1,Wx=-2,Jx=-3,ew=-4,_h=-5,tw=-6,aw=-7,nw="B",rw="D",po="E",Gm="M",iw="N",go="P",ow="R",Xm="S",sw="Y",lw="U",Vm="Z",cw=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};function gN(){const e=new TextDecoder;let n="";return new TransformStream({transform(r,o){const s=e.decode(r,{stream:!0}),c=(n+s).split(`
`);n=c.pop()||"";for(const d of c)o.enqueue(d)},flush(r){n&&r.enqueue(n)}})}function Ia(e){const{indices:n}=this,r=n.get(e);if(r)return[r];if(e===void 0)return aw;if(e===null)return _h;if(Number.isNaN(e))return Wx;if(e===Number.POSITIVE_INFINITY)return tw;if(e===Number.NEGATIVE_INFINITY)return Jx;if(e===0&&1/e<0)return ew;const o=this.index++;return n.set(e,o),yN.call(this,e,o),o}function yN(e,n){const{deferred:r,plugins:o,postPlugins:s}=this,c=this.stringified,d=[[e,n]];for(;d.length>0;){const[h,f]=d.pop(),p=x=>Object.keys(x).map(b=>`"_${Ia.call(this,b)}":${Ia.call(this,x[b])}`).join(",");let g=null;switch(typeof h){case"boolean":case"number":case"string":c[f]=JSON.stringify(h);break;case"bigint":c[f]=`["${nw}","${h}"]`;break;case"symbol":{const x=Symbol.keyFor(h);x?c[f]=`["${sw}",${JSON.stringify(x)}]`:g=new Error("Cannot encode symbol unless created with Symbol.for()");break}case"object":{if(!h){c[f]=`${_h}`;break}const x=Array.isArray(h);let b=!1;if(!x&&o)for(const S of o){const w=S(h);if(Array.isArray(w)){b=!0;const[R,...E]=w;c[f]=`[${JSON.stringify(R)}`,E.length>0&&(c[f]+=`,${E.map(N=>Ia.call(this,N)).join(",")}`),c[f]+="]";break}}if(!b){let S=x?"[":"{";if(x){for(let w=0;w<h.length;w++)S+=(w?",":"")+(w in h?Ia.call(this,h[w]):Zx);c[f]=`${S}]`}else if(h instanceof Date){const w=h.getTime();c[f]=`["${rw}",${Number.isNaN(w)?JSON.stringify("invalid"):w}]`}else h instanceof URL?c[f]=`["${lw}",${JSON.stringify(h.href)}]`:h instanceof RegExp?c[f]=`["${ow}",${JSON.stringify(h.source)},${JSON.stringify(h.flags)}]`:h instanceof Set?h.size>0?c[f]=`["${Xm}",${[...h].map(w=>Ia.call(this,w)).join(",")}]`:c[f]=`["${Xm}"]`:h instanceof Map?h.size>0?c[f]=`["${Gm}",${[...h].flatMap(([w,R])=>[Ia.call(this,w),Ia.call(this,R)]).join(",")}]`:c[f]=`["${Gm}"]`:h instanceof Promise?(c[f]=`["${go}",${f}]`,r[f]=h):h instanceof Error?(c[f]=`["${po}",${JSON.stringify(h.message)}`,h.name!=="Error"&&(c[f]+=`,${JSON.stringify(h.name)}`),c[f]+="]"):Object.getPrototypeOf(h)===null?c[f]=`["${iw}",{${p(h)}}]`:bN(h)?c[f]=`{${p(h)}}`:g=new Error("Cannot encode object with prototype")}break}default:{const x=Array.isArray(h);let b=!1;if(!x&&o)for(const S of o){const w=S(h);if(Array.isArray(w)){b=!0;const[R,...E]=w;c[f]=`[${JSON.stringify(R)}`,E.length>0&&(c[f]+=`,${E.map(N=>Ia.call(this,N)).join(",")}`),c[f]+="]";break}}b||(g=new Error("Cannot encode function or unexpected type"))}}if(g){let x=!1;if(s)for(const b of s){const S=b(h);if(Array.isArray(S)){x=!0;const[w,...R]=S;c[f]=`[${JSON.stringify(w)}`,R.length>0&&(c[f]+=`,${R.map(E=>Ia.call(this,E)).join(",")}`),c[f]+="]";break}}if(!x)throw g}}}var vN=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bN(e){const n=Object.getPrototypeOf(e);return n===Object.prototype||n===null||Object.getOwnPropertyNames(n).sort().join("\0")===vN}var vm=typeof window<"u"?window:typeof globalThis<"u"?globalThis:void 0;function Qm(e){const{hydrated:n,values:r}=this;if(typeof e=="number")return _v.call(this,e);if(!Array.isArray(e)||!e.length)throw new SyntaxError;const o=r.length;for(const s of e)r.push(s);return n.length=r.length,_v.call(this,o)}function _v(e){const{hydrated:n,values:r,deferred:o,plugins:s}=this;let c;const d=[[e,f=>{c=f}]];let h=[];for(;d.length>0;){const[f,p]=d.pop();switch(f){case aw:p(void 0);continue;case _h:p(null);continue;case Wx:p(NaN);continue;case tw:p(1/0);continue;case Jx:p(-1/0);continue;case ew:p(-0);continue}if(n[f]){p(n[f]);continue}const g=r[f];if(!g||typeof g!="object"){n[f]=g,p(g);continue}if(Array.isArray(g))if(typeof g[0]=="string"){const[x,b,S]=g;switch(x){case rw:p(n[f]=new Date(b));continue;case lw:p(n[f]=new URL(b));continue;case nw:p(n[f]=BigInt(b));continue;case ow:p(n[f]=new RegExp(b,S));continue;case sw:p(n[f]=Symbol.for(b));continue;case Xm:const w=new Set;n[f]=w;for(let M=g.length-1;M>0;M--)d.push([g[M],D=>{w.add(D)}]);p(w);continue;case Gm:const R=new Map;n[f]=R;for(let M=g.length-2;M>0;M-=2){const D=[];d.push([g[M+1],T=>{D[1]=T}]),d.push([g[M],T=>{D[0]=T}]),h.push(()=>{R.set(D[0],D[1])})}p(R);continue;case iw:const E=Object.create(null);n[f]=E;for(const M of Object.keys(b).reverse()){const D=[];d.push([b[M],T=>{D[1]=T}]),d.push([Number(M.slice(1)),T=>{D[0]=T}]),h.push(()=>{E[D[0]]=D[1]})}p(E);continue;case go:if(n[b])p(n[f]=n[b]);else{const M=new cw;o[b]=M,p(n[f]=M.promise)}continue;case po:const[,N,_]=g;let O=_&&vm&&vm[_]?new vm[_](N):new Error(N);n[f]=O,p(O);continue;case Vm:p(n[f]=n[b]);continue;default:if(Array.isArray(s)){const M=[],D=g.slice(1);for(let T=0;T<D.length;T++){const k=D[T];d.push([k,L=>{M[T]=L}])}h.push(()=>{for(const T of s){const k=T(g[0],...M);if(k){p(n[f]=k.value);return}}throw new SyntaxError});continue}throw new SyntaxError}}else{const x=[];n[f]=x;for(let b=0;b<g.length;b++){const S=g[b];S!==Zx&&d.push([S,w=>{x[b]=w}])}p(x);continue}else{const x={};n[f]=x;for(const b of Object.keys(g).reverse()){const S=[];d.push([g[b],w=>{S[1]=w}]),d.push([Number(b.slice(1)),w=>{S[0]=w}]),h.push(()=>{x[S[0]]=S[1]})}p(x);continue}}for(;h.length>0;)h.pop()();return c}async function xN(e,n){const{plugins:r}=n??{},o=new cw,s=e.pipeThrough(gN()).getReader(),c={values:[],hydrated:[],deferred:{},plugins:r},d=await wN.call(c,s);let h=o.promise;return d.done?o.resolve():h=SN.call(c,s).then(o.resolve).catch(f=>{for(const p of Object.values(c.deferred))p.reject(f);o.reject(f)}),{done:h.then(()=>s.closed),value:d.value}}async function wN(e){const n=await e.read();if(!n.value)throw new SyntaxError;let r;try{r=JSON.parse(n.value)}catch{throw new SyntaxError}return{done:n.done,value:Qm.call(this,r)}}async function SN(e){let n=await e.read();for(;!n.done;){if(!n.value)continue;const r=n.value;switch(r[0]){case go:{const o=r.indexOf(":"),s=Number(r.slice(1,o)),c=this.deferred[s];if(!c)throw new Error(`Deferred ID ${s} not found in stream`);const d=r.slice(o+1);let h;try{h=JSON.parse(d)}catch{throw new SyntaxError}const f=Qm.call(this,h);c.resolve(f);break}case po:{const o=r.indexOf(":"),s=Number(r.slice(1,o)),c=this.deferred[s];if(!c)throw new Error(`Deferred ID ${s} not found in stream`);const d=r.slice(o+1);let h;try{h=JSON.parse(d)}catch{throw new SyntaxError}const f=Qm.call(this,h);c.reject(f);break}default:throw new SyntaxError}n=await e.read()}}function EN(e,n){const{plugins:r,postPlugins:o,signal:s}=n??{},c={deferred:{},index:0,indices:new Map,stringified:[],plugins:r,postPlugins:o,signal:s},d=new TextEncoder;let h=0;return new ReadableStream({async start(p){const g=Ia.call(c,e);if(Array.isArray(g))throw new Error("This should never happen");g<0?p.enqueue(d.encode(`${g}
`)):(p.enqueue(d.encode(`[${c.stringified.join(",")}]
`)),h=c.stringified.length-1);const x=new WeakSet;if(Object.keys(c.deferred).length){let b;const S=new Promise((w,R)=>{if(b=w,s){const E=()=>R(s.reason||new Error("Signal was aborted."));s.aborted?E():s.addEventListener("abort",N=>{E()})}});for(;Object.keys(c.deferred).length>0;){for(const[w,R]of Object.entries(c.deferred))x.has(R)||x.add(c.deferred[Number(w)]=Promise.race([S,R]).then(E=>{const N=Ia.call(c,E);if(Array.isArray(N))p.enqueue(d.encode(`${go}${w}:[["${Vm}",${N[0]}]]
`)),c.index++,h++;else if(N<0)p.enqueue(d.encode(`${go}${w}:${N}
`));else{const _=c.stringified.slice(h+1).join(",");p.enqueue(d.encode(`${go}${w}:[${_}]
`)),h=c.stringified.length-1}},E=>{(!E||typeof E!="object"||!(E instanceof Error))&&(E=new Error("An unknown error occurred"));const N=Ia.call(c,E);if(Array.isArray(N))p.enqueue(d.encode(`${po}${w}:[["${Vm}",${N[0]}]]
`)),c.index++,h++;else if(N<0)p.enqueue(d.encode(`${po}${w}:${N}
`));else{const _=c.stringified.slice(h+1).join(",");p.enqueue(d.encode(`${po}${w}:[${_}]
`)),h=c.stringified.length-1}}).finally(()=>{delete c.deferred[Number(w)]}));await Promise.race(Object.values(c.deferred))}b()}await Promise.all(Object.values(c.deferred)),p.close()}})}async function uw(e){let n={signal:e.signal};if(e.method!=="GET"){n.method=e.method;let r=e.headers.get("Content-Type");r&&/\bapplication\/json\b/.test(r)?(n.headers={"Content-Type":r},n.body=JSON.stringify(await e.json())):r&&/\btext\/plain\b/.test(r)?(n.headers={"Content-Type":r},n.body=await e.text()):r&&/\bapplication\/x-www-form-urlencoded\b/.test(r)?n.body=new URLSearchParams(await e.text()):n.body=await e.formData()}return n}var jN={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},RN=/[&><\u2028\u2029]/g;function NN(e){return e.replace(RN,n=>jN[n])}function Ov(e){return{__html:e}}function Kt(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}var an=Symbol("SingleFetchRedirect"),dw=class extends Error{},yi=202,fw=new Set([100,101,204,205]);function mw({context:e,identifier:n,reader:r,textDecoder:o,nonce:s}){if(!e.renderMeta||!e.renderMeta.didRenderScripts)return null;e.renderMeta.streamCache||(e.renderMeta.streamCache={});let{streamCache:c}=e.renderMeta,d=c[n];if(d||(d=c[n]=r.read().then(g=>{c[n].result={done:g.done,value:o.decode(g.value,{stream:!0})}}).catch(g=>{c[n].error=g})),d.error)throw d.error;if(d.result===void 0)throw d;let{done:h,value:f}=d.result,p=f?v.createElement("script",{nonce:s,dangerouslySetInnerHTML:{__html:`window.__reactRouterContext.streamController.enqueue(${NN(JSON.stringify(f))});`}}):null;return h?v.createElement(v.Fragment,null,p,v.createElement("script",{nonce:s,dangerouslySetInnerHTML:{__html:"window.__reactRouterContext.streamController.close();"}})):v.createElement(v.Fragment,null,p,v.createElement(v.Suspense,null,v.createElement(mw,{context:e,identifier:n+1,reader:r,textDecoder:o,nonce:s})))}function hw(e,n,r,o,s){let c=pw(e,d=>{let h=n.routes[d.route.id];Kt(h,"Route not found in manifest");let f=r[d.route.id];return{hasLoader:h.hasLoader,hasClientLoader:h.hasClientLoader,hasShouldRevalidate:!!f?.shouldRevalidate}},AN,o,s);return async d=>d.unstable_runClientMiddleware(c)}function pw(e,n,r,o,s,c=()=>!0){return async d=>{let{request:h,matches:f,fetcherKey:p}=d,g=e();if(h.method!=="GET")return TN(d,r,s);let x=f.some(b=>{let{hasLoader:S,hasClientLoader:w}=n(b);return b.unstable_shouldCallHandler()&&S&&!w});return!o&&!x?CN(d,n,r,s):p?DN(d,r,s):_N(d,g,n,r,o,s,c)}}async function TN(e,n,r){let o=e.matches.find(d=>d.unstable_shouldCallHandler());Kt(o,"No action match found");let s,c=await o.resolve(async d=>await d(async()=>{let{data:f,status:p}=await n(e,r,[o.route.id]);return s=p,Is(f,o.route.id)}));return ft(c.result)||Et(c.result)||Cr(c.result)?{[o.route.id]:c}:{[o.route.id]:{type:c.type,result:lx(c.result,s)}}}async function CN(e,n,r,o){let s=e.matches.filter(d=>d.unstable_shouldCallHandler()),c={};return await Promise.all(s.map(d=>d.resolve(async h=>{try{let{hasClientLoader:f}=n(d),p=d.route.id,g=f?await h(async()=>{let{data:x}=await r(e,o,[p]);return Is(x,p)}):await h();c[d.route.id]={type:"data",result:g}}catch(f){c[d.route.id]={type:"error",result:f}}}))),c}async function _N(e,n,r,o,s,c,d=()=>!0){let h=new Set,f=!1,p=e.matches.map(()=>Dv()),g=Dv(),x={},b=Promise.all(e.matches.map(async(w,R)=>w.resolve(async E=>{p[R].resolve();let N=w.route.id,{hasLoader:_,hasClientLoader:O,hasShouldRevalidate:M}=r(w),D=!w.unstable_shouldRevalidateArgs||w.unstable_shouldRevalidateArgs.actionStatus==null||w.unstable_shouldRevalidateArgs.actionStatus<400;if(!w.unstable_shouldCallHandler(D)){f||(f=w.unstable_shouldRevalidateArgs!=null&&_&&M===!0);return}if(d(w)&&O){_&&(f=!0);try{let k=await E(async()=>{let{data:L}=await o(e,c,[N]);return Is(L,N)});x[N]={type:"data",result:k}}catch(k){x[N]={type:"error",result:k}}return}_&&h.add(N);try{let k=await E(async()=>{let L=await g.promise;return Is(L,N)});x[N]={type:"data",result:k}}catch(k){x[N]={type:"error",result:k}}})));if(await Promise.all(p.map(w=>w.promise)),(!n.state.initialized&&n.state.navigation.state==="idle"||h.size===0)&&!window.__reactRouterHdrActive)g.resolve({routes:{}});else{let w=s&&f&&h.size>0?[...h.keys()]:void 0;try{let R=await o(e,c,w);g.resolve(R.data)}catch(R){g.reject(R)}}return await b,await ON(g.promise,e.matches,h,x),x}async function ON(e,n,r,o){try{let s,c=await e;if("routes"in c){for(let d of n)if(d.route.id in c.routes){let h=c.routes[d.route.id];if("error"in h){s=h.error,o[d.route.id]?.result==null&&(o[d.route.id]={type:"error",result:s});break}}}s!==void 0&&Array.from(r.values()).forEach(d=>{o[d].result instanceof dw&&(o[d].result=s)})}catch{}}async function DN(e,n,r){let o=e.matches.find(d=>d.unstable_shouldCallHandler());Kt(o,"No fetcher match found");let s=o.route.id,c=await o.resolve(async d=>d(async()=>{let{data:h}=await n(e,r,[s]);return Is(h,s)}));return{[o.route.id]:c}}function gw(e){let n=e.searchParams.getAll("index");e.searchParams.delete("index");let r=[];for(let o of n)o&&r.push(o);for(let o of r)e.searchParams.append("index",o);return e}function Oh(e,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return o.pathname==="/"?o.pathname=`_root.${r}`:n&&Pt(o.pathname,n)==="/"?o.pathname=`${n.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function AN(e,n,r){let{request:o}=e,s=Oh(o.url,n,"data");o.method==="GET"&&(s=gw(s),r&&s.searchParams.set("_routes",r.join(",")));let c=await fetch(s,await uw(o));if(c.status===404&&!c.headers.has("X-Remix-Response"))throw new Jt(404,"Not Found",!0);if(c.status===204&&c.headers.has("X-Remix-Redirect"))return{status:yi,data:{redirect:{redirect:c.headers.get("X-Remix-Redirect"),status:Number(c.headers.get("X-Remix-Status")||"302"),revalidate:c.headers.get("X-Remix-Revalidate")==="true",reload:c.headers.get("X-Remix-Reload-Document")==="true",replace:c.headers.get("X-Remix-Replace")==="true"}}};if(fw.has(c.status)){let d={};return r&&o.method!=="GET"&&(d[r[0]]={data:void 0}),{status:c.status,data:{routes:d}}}Kt(c.body,"No response body to decode");try{let d=await Ou(c.body,window),h;if(o.method==="GET"){let f=d.value;an in f?h={redirect:f[an]}:h={routes:f}}else{let f=d.value,p=r?.[0];Kt(p,"No routeId found for single fetch call decoding"),"redirect"in f?h={redirect:f}:h={routes:{[p]:f}}}return{status:c.status,data:h}}catch{throw new Error("Unable to decode turbo-stream response")}}function Ou(e,n){return xN(e,{plugins:[(r,...o)=>{if(r==="SanitizedError"){let[s,c,d]=o,h=Error;s&&s in n&&typeof n[s]=="function"&&(h=n[s]);let f=new h(c);return f.stack=d,{value:f}}if(r==="ErrorResponse"){let[s,c,d]=o;return{value:new Jt(c,d,s)}}if(r==="SingleFetchRedirect")return{value:{[an]:o[0]}};if(r==="SingleFetchClassInstance")return{value:o[0]};if(r==="SingleFetchFallback")return{value:void 0}}]})}function Is(e,n){if("redirect"in e){let{redirect:o,revalidate:s,reload:c,replace:d,status:h}=e.redirect;throw al(o,{status:h,headers:{...s?{"X-Remix-Revalidate":"yes"}:null,...c?{"X-Remix-Reload-Document":"yes"}:null,...d?{"X-Remix-Replace":"yes"}:null}})}let r=e.routes[n];if(r==null)throw new dw(`No result found for routeId "${n}"`);if("error"in r)throw r.error;if("data"in r)return r.data;throw new Error(`Invalid response found for routeId "${n}"`)}function Dv(){let e,n,r=new Promise((o,s)=>{e=async c=>{o(c);try{await r}catch{}},n=async c=>{s(c);try{await r}catch{}}});return{promise:r,resolve:e,reject:n}}async function yw(e,n){if(e.id in n)return n[e.id];try{let r=await import(e.module);return n[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function MN(e,n,r){let o=e.map(c=>{let d=n[c.route.id],h=r.routes[c.route.id];return[h&&h.css?h.css.map(f=>({rel:"stylesheet",href:f})):[],d?.links?.()||[]]}).flat(2),s=Ah(e,r);return ww(o,s)}function vw(e){return e.css?e.css.map(n=>({rel:"stylesheet",href:n})):[]}async function kN(e){if(!e.css)return;let n=vw(e);await Promise.all(n.map(xw))}async function bw(e,n){if(!e.css&&!n.links||!BN())return;let r=[];if(e.css&&r.push(...vw(e)),n.links&&r.push(...n.links()),r.length===0)return;let o=[];for(let s of r)!Dh(s)&&s.rel==="stylesheet"&&o.push({...s,rel:"preload",as:"style"});await Promise.all(o.map(xw))}async function xw(e){return new Promise(n=>{if(e.media&&!window.matchMedia(e.media).matches||document.querySelector(`link[rel="stylesheet"][href="${e.href}"]`))return n();let r=document.createElement("link");Object.assign(r,e);function o(){document.head.contains(r)&&document.head.removeChild(r)}r.onload=()=>{o(),n()},r.onerror=()=>{o(),n()},document.head.appendChild(r)})}function Dh(e){return e!=null&&typeof e.page=="string"}function LN(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function zN(e,n,r){let o=await Promise.all(e.map(async s=>{let c=n.routes[s.route.id];if(c){let d=await yw(c,r);return d.links?d.links():[]}return[]}));return ww(o.flat(1).filter(LN).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Av(e,n,r,o,s,c){let d=(f,p)=>r[p]?f.route.id!==r[p].route.id:!0,h=(f,p)=>r[p].pathname!==f.pathname||r[p].route.path?.endsWith("*")&&r[p].params["*"]!==f.params["*"];return c==="assets"?n.filter((f,p)=>d(f,p)||h(f,p)):c==="data"?n.filter((f,p)=>{let g=o.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(d(f,p)||h(f,p))return!0;if(f.route.shouldRevalidate){let x=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Ah(e,n,{includeHydrateFallback:r}={}){return UN(e.map(o=>{let s=n.routes[o.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function UN(e){return[...new Set(e)]}function HN(e){let n={},r=Object.keys(e).sort();for(let o of r)n[o]=e[o];return n}function ww(e,n){let r=new Set,o=new Set(n);return e.reduce((s,c)=>{if(n&&!Dh(c)&&c.as==="script"&&c.href&&o.has(c.href))return s;let h=JSON.stringify(HN(c));return r.has(h)||(r.add(h),s.push({key:h,link:c})),s},[])}var Hc;function BN(){if(Hc!==void 0)return Hc;let e=document.createElement("link");return Hc=e.relList.supports("preload"),e=null,Hc}function $N(){return v.createElement(Km,{title:"Loading...",renderScripts:!0},v.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `}}))}function Mh(e){let n={};return Object.values(e).forEach(r=>{if(r){let o=r.parentId||"";n[o]||(n[o]=[]),n[o].push(r)}}),n}function Sw(e,n,r){let o=Rw(n),s=n.HydrateFallback&&(!r||e.id==="root")?n.HydrateFallback:e.id==="root"?$N:void 0,c=n.ErrorBoundary?n.ErrorBoundary:e.id==="root"?()=>v.createElement(Dw,{error:ol()}):void 0;return e.id==="root"&&n.Layout?{...o?{element:v.createElement(n.Layout,null,v.createElement(o,null))}:{Component:o},...c?{errorElement:v.createElement(n.Layout,null,v.createElement(c,null))}:{ErrorBoundary:c},...s?{hydrateFallbackElement:v.createElement(n.Layout,null,v.createElement(s,null))}:{HydrateFallback:s}}:{Component:o,ErrorBoundary:c,HydrateFallback:s}}function Ew(e,n,r,o,s="",c=Mh(e),d=Promise.resolve({Component:()=>null})){return(c[s]||[]).map(h=>{let f=n[h.id];Kt(f,"No `routeModule` available to create server routes");let p={...Sw(h,f,o),caseSensitive:h.caseSensitive,id:h.id,index:h.index,path:h.path,handle:f.handle,lazy:o?()=>d:void 0,loader:h.hasLoader||h.hasClientLoader?()=>null:void 0},g=Ew(e,n,r,o,h.id,c,d);return g.length>0&&(p.children=g),p})}function jw(e,n,r,o,s,c){return ll(n,r,o,s,c,"",Mh(n),e)}function Bc(e,n){if(e==="loader"&&!n.hasLoader||e==="action"&&!n.hasAction){let o=`You are trying to call ${e==="action"?"serverAction()":"serverLoader()"} on a route that does not have a server ${e} (routeId: "${n.id}")`;throw console.error(o),new Jt(400,"Bad Request",new Error(o),!0)}}function Qc(e,n){let r=e==="clientAction"?"a":"an",o=`Route "${n}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;throw console.error(o),new Jt(405,"Method Not Allowed",new Error(o),!0)}function ll(e,n,r,o,s,c="",d=Mh(e),h){return(d[c]||[]).map(f=>{let p=n[f.id];function g(_){return Kt(typeof _=="function","No single fetch function available for route handler"),_()}function x(_){return f.hasLoader?g(_):Promise.resolve(null)}function b(_){if(!f.hasAction)throw Qc("action",f.id);return g(_)}function S(_){import(_)}function w(_){_.clientActionModule&&S(_.clientActionModule),_.clientLoaderModule&&S(_.clientLoaderModule)}async function R(_){let O=n[f.id],M=O?bw(f,O):Promise.resolve();try{return _()}finally{await M}}let E={id:f.id,index:f.index,path:f.path};if(p){Object.assign(E,{...E,...Sw(f,p,s),unstable_middleware:p.unstable_clientMiddleware,handle:p.handle,shouldRevalidate:Mv(E.path,p,f,o,h)});let _=r&&r.loaderData&&f.id in r.loaderData,O=_?r?.loaderData?.[f.id]:void 0,M=r&&r.errors&&f.id in r.errors,D=M?r?.errors?.[f.id]:void 0,T=h==null&&(p.clientLoader?.hydrate===!0||!f.hasLoader);E.loader=async({request:k,params:L,context:H},G)=>{try{return await R(async()=>(Kt(p,"No `routeModule` available for critical-route loader"),p.clientLoader?p.clientLoader({request:k,params:L,context:H,async serverLoader(){if(Bc("loader",f),T){if(_)return O;if(M)throw D}return x(G)}}):x(G)))}finally{T=!1}},E.loader.hydrate=Ro(f.id,p.clientLoader,f.hasLoader,s),E.action=({request:k,params:L,context:H},G)=>R(async()=>{if(Kt(p,"No `routeModule` available for critical-route action"),!p.clientAction){if(s)throw Qc("clientAction",f.id);return b(G)}return p.clientAction({request:k,params:L,context:H,async serverAction(){return Bc("action",f),b(G)}})})}else{f.hasClientLoader||(E.loader=(M,D)=>R(()=>x(D))),f.hasClientAction||(E.action=(M,D)=>R(()=>{if(s)throw Qc("clientAction",f.id);return b(D)}));let _;async function O(){return _?await _:(_=(async()=>{(f.clientLoaderModule||f.clientActionModule)&&await new Promise(D=>setTimeout(D,0));let M=YN(f,n);return w(f),await M})(),await _)}E.lazy={loader:f.hasClientLoader?async()=>{let{clientLoader:M}=f.clientLoaderModule?await import(f.clientLoaderModule):await O();return Kt(M,"No `clientLoader` export found"),(D,T)=>M({...D,async serverLoader(){return Bc("loader",f),x(T)}})}:void 0,action:f.hasClientAction?async()=>{let M=f.clientActionModule?import(f.clientActionModule):O();w(f);let{clientAction:D}=await M;return Kt(D,"No `clientAction` export found"),(T,k)=>D({...T,async serverAction(){return Bc("action",f),b(k)}})}:void 0,unstable_middleware:f.hasClientMiddleware?async()=>{let{unstable_clientMiddleware:M}=f.clientMiddlewareModule?await import(f.clientMiddlewareModule):await O();return Kt(M,"No `unstable_clientMiddleware` export found"),M}:void 0,shouldRevalidate:async()=>{let M=await O();return Mv(E.path,M,f,o,h)},handle:async()=>(await O()).handle,Component:async()=>(await O()).Component,ErrorBoundary:f.hasErrorBoundary?async()=>(await O()).ErrorBoundary:void 0}}let N=ll(e,n,r,o,s,f.id,d,h);return N.length>0&&(E.children=N),E})}function Mv(e,n,r,o,s){if(s)return PN(r.id,n.shouldRevalidate,s);if(!o&&r.hasLoader&&!r.hasClientLoader){let c=e?rx(e)[1].map(h=>h.paramName):[];const d=h=>c.some(f=>h.currentParams[f]!==h.nextParams[f]);if(n.shouldRevalidate){let h=n.shouldRevalidate;return f=>h({...f,defaultShouldRevalidate:d(f)})}else return h=>d(h)}if(o&&n.shouldRevalidate){let c=n.shouldRevalidate;return d=>c({...d,defaultShouldRevalidate:!0})}return n.shouldRevalidate}function PN(e,n,r){let o=!1;return s=>o?n?n(s):s.defaultShouldRevalidate:(o=!0,r.has(e))}async function YN(e,n){let r=yw(e,n),o=kN(e),s=await r;return await Promise.all([o,bw(e,s)]),{Component:Rw(s),ErrorBoundary:s.ErrorBoundary,unstable_clientMiddleware:s.unstable_clientMiddleware,clientAction:s.clientAction,clientLoader:s.clientLoader,handle:s.handle,links:s.links,meta:s.meta,shouldRevalidate:s.shouldRevalidate}}function Rw(e){if(e.default==null)return;if(!(typeof e.default=="object"&&Object.keys(e.default).length===0))return e.default}function Ro(e,n,r,o){return o&&e!=="root"||n!=null&&(n.hydrate===!0||r!==!0)}var Kc=new Set,FN=1e3,su=new Set,qN=7680;function kh(e,n){return e.mode==="lazy"&&n===!0}function IN({sri:e,...n},r){let o=new Set(r.state.matches.map(h=>h.route.id)),s=r.state.location.pathname.split("/").filter(Boolean),c=["/"];for(s.pop();s.length>0;)c.push(`/${s.join("/")}`),s.pop();c.forEach(h=>{let f=ma(r.routes,h,r.basename);f&&f.forEach(p=>o.add(p.route.id))});let d=[...o].reduce((h,f)=>Object.assign(h,{[f]:n.routes[f]}),{});return{...n,routes:d,sri:e?!0:void 0}}function Nw(e,n,r,o,s,c){if(kh(o,r))return async({path:d,patch:h,signal:f,fetcherKey:p})=>{su.has(d)||await _w([d],p?window.location.href:d,e,n,r,s,c,o.manifestPath,h,f)}}function Tw(e,n,r,o,s,c){v.useEffect(()=>{if(!kh(s,o)||window.navigator?.connection?.saveData===!0)return;function d(g){let x=g.tagName==="FORM"?g.getAttribute("action"):g.getAttribute("href");if(!x)return;let b=g.tagName==="A"?g.pathname:new URL(x,window.location.origin).pathname;su.has(b)||Kc.add(b)}async function h(){document.querySelectorAll("a[data-discover], form[data-discover]").forEach(d);let g=Array.from(Kc.keys()).filter(x=>su.has(x)?(Kc.delete(x),!1):!0);if(g.length!==0)try{await _w(g,null,n,r,o,c,e.basename,s.manifestPath,e.patchRoutes)}catch(x){console.error("Failed to fetch manifest patches",x)}}let f=XN(h,100);h();let p=new MutationObserver(()=>f());return p.observe(document.documentElement,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["data-discover","href","action"]}),()=>p.disconnect()},[o,c,n,r,e,s])}function Cw(e,n){let r=e||"/__manifest";return n==null?r:`${n}${r}`.replace(/\/+/g,"/")}var bm="react-router-manifest-version";async function _w(e,n,r,o,s,c,d,h,f,p){const g=new URLSearchParams;e.sort().forEach(E=>g.append("p",E)),g.set("version",r.version);let x=new URL(Cw(h,d),window.location.origin);if(x.search=g.toString(),x.toString().length>qN){Kc.clear();return}let b;try{let E=await fetch(x,{signal:p});if(E.ok){if(E.status===204&&E.headers.has("X-Remix-Reload-Document")){if(!n){console.warn("Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.");return}if(sessionStorage.getItem(bm)===r.version){console.error("Unable to discover routes due to manifest version mismatch.");return}sessionStorage.setItem(bm,r.version),window.location.href=n,console.warn("Detected manifest version mismatch, reloading..."),await new Promise(()=>{})}else if(E.status>=400)throw new Error(await E.text())}else throw new Error(`${E.status} ${E.statusText}`);sessionStorage.removeItem(bm),b=await E.json()}catch(E){if(p?.aborted)return;throw E}let S=new Set(Object.keys(r.routes)),w=Object.values(b).reduce((E,N)=>(N&&!S.has(N.id)&&(E[N.id]=N),E),{});Object.assign(r.routes,w),e.forEach(E=>GN(E,su));let R=new Set;Object.values(w).forEach(E=>{E&&(!E.parentId||!w[E.parentId])&&R.add(E.parentId)}),R.forEach(E=>f(E||null,ll(w,o,null,s,c,E)))}function GN(e,n){if(n.size>=FN){let r=n.values().next().value;n.delete(r)}n.add(e)}function XN(e,n){let r;return(...o)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...o),n)}}function Lh(){let e=v.useContext(Qn);return Kt(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Du(){let e=v.useContext(Lr);return Kt(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var xn=v.createContext(void 0);xn.displayName="FrameworkContext";function No(){let e=v.useContext(xn);return Kt(e,"You must render this element inside a <HydratedRouter> element"),e}function VN(e,n){let r=v.useContext(xn),[o,s]=v.useState(!1),[c,d]=v.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=n,b=v.useRef(null);v.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let R=N=>{N.forEach(_=>{d(_.isIntersecting)})},E=new IntersectionObserver(R,{threshold:.5});return b.current&&E.observe(b.current),()=>{E.disconnect()}}},[e]),v.useEffect(()=>{if(o){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[o]);let S=()=>{s(!0)},w=()=>{s(!1),d(!1)};return r?e!=="intent"?[c,b,{}]:[c,b,{onFocus:_s(h,S),onBlur:_s(f,w),onMouseEnter:_s(p,S),onMouseLeave:_s(g,w),onTouchStart:_s(x,S)}]:[!1,b,{}]}function _s(e,n){return r=>{e&&e(r),r.defaultPrevented||n(r)}}function zh(e,n,r){if(r&&!Zc)return[e[0]];if(n){let o=e.findIndex(s=>n[s.route.id]!==void 0);return e.slice(0,o+1)}return e}var kv="data-react-router-critical-css";function QN({nonce:e}){let{isSpaMode:n,manifest:r,routeModules:o,criticalCss:s}=No(),{errors:c,matches:d}=Du(),h=zh(d,c,n),f=v.useMemo(()=>MN(h,o,r),[h,o,r]);return v.createElement(v.Fragment,null,typeof s=="string"?v.createElement("style",{[kv]:"",dangerouslySetInnerHTML:{__html:s}}):null,typeof s=="object"?v.createElement("link",{[kv]:"",rel:"stylesheet",href:s.href,nonce:e}):null,f.map(({key:p,link:g})=>Dh(g)?v.createElement(Uh,{key:p,nonce:e,...g}):v.createElement("link",{key:p,nonce:e,...g})))}function Uh({page:e,...n}){let{router:r}=Lh(),o=v.useMemo(()=>ma(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?v.createElement(ZN,{page:e,matches:o,...n}):null}function KN(e){let{manifest:n,routeModules:r}=No(),[o,s]=v.useState([]);return v.useEffect(()=>{let c=!1;return zN(e,n,r).then(d=>{c||s(d)}),()=>{c=!0}},[e,n,r]),o}function ZN({page:e,matches:n,...r}){let o=wa(),{manifest:s,routeModules:c}=No(),{basename:d}=Lh(),{loaderData:h,matches:f}=Du(),p=v.useMemo(()=>Av(e,n,f,s,o,"data"),[e,n,f,s,o]),g=v.useMemo(()=>Av(e,n,f,s,o,"assets"),[e,n,f,s,o]),x=v.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let w=new Set,R=!1;if(n.forEach(N=>{let _=s.routes[N.route.id];!_||!_.hasLoader||(!p.some(O=>O.route.id===N.route.id)&&N.route.id in h&&c[N.route.id]?.shouldRevalidate||_.hasClientLoader?R=!0:w.add(N.route.id))}),w.size===0)return[];let E=Oh(e,d,"data");return R&&w.size>0&&E.searchParams.set("_routes",n.filter(N=>w.has(N.route.id)).map(N=>N.route.id).join(",")),[E.pathname+E.search]},[d,h,o,s,p,n,e,c]),b=v.useMemo(()=>Ah(g,s),[g,s]),S=KN(g);return v.createElement(v.Fragment,null,x.map(w=>v.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),b.map(w=>v.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),S.map(({key:w,link:R})=>v.createElement("link",{key:w,nonce:r.nonce,...R})))}function WN(){let{isSpaMode:e,routeModules:n}=No(),{errors:r,matches:o,loaderData:s}=Du(),c=wa(),d=zh(o,r,e),h=null;r&&(h=r[d[d.length-1].route.id]);let f=[],p=null,g=[];for(let x=0;x<d.length;x++){let b=d[x],S=b.route.id,w=s[S],R=b.params,E=n[S],N=[],_={id:S,data:w,loaderData:w,meta:[],params:b.params,pathname:b.pathname,handle:b.route.handle,error:h};if(g[x]=_,E?.meta?N=typeof E.meta=="function"?E.meta({data:w,loaderData:w,params:R,location:c,matches:g,error:h}):Array.isArray(E.meta)?[...E.meta]:E.meta:p&&(N=[...p]),N=N||[],!Array.isArray(N))throw new Error("The route at "+b.route.path+` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);_.meta=N,g[x]=_,f=[...N],p=f}return v.createElement(v.Fragment,null,f.flat().map(x=>{if(!x)return null;if("tagName"in x){let{tagName:b,...S}=x;if(!JN(b))return console.warn(`A meta object uses an invalid tagName: ${b}. Expected either 'link' or 'meta'`),null;let w=b;return v.createElement(w,{key:JSON.stringify(S),...S})}if("title"in x)return v.createElement("title",{key:"title"},String(x.title));if("charset"in x&&(x.charSet??(x.charSet=x.charset),delete x.charset),"charSet"in x&&x.charSet!=null)return typeof x.charSet=="string"?v.createElement("meta",{key:"charSet",charSet:x.charSet}):null;if("script:ld+json"in x)try{let b=JSON.stringify(x["script:ld+json"]);return v.createElement("script",{key:`script:ld+json:${b}`,type:"application/ld+json",dangerouslySetInnerHTML:{__html:b}})}catch{return null}return v.createElement("meta",{key:JSON.stringify(x),...x})}))}function JN(e){return typeof e=="string"&&/^(meta|link)$/.test(e)}var Zc=!1;function Ow(e){let{manifest:n,serverHandoffString:r,isSpaMode:o,renderMeta:s,routeDiscovery:c,ssr:d}=No(),{router:h,static:f,staticContext:p}=Lh(),{matches:g}=Du(),x=MR(),b=kh(c,d);s&&(s.didRenderScripts=!0);let S=zh(g,null,o);v.useEffect(()=>{Zc=!0},[]);let w=v.useMemo(()=>{if(x)return null;let _=p?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",O=f?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${b?"":`import ${JSON.stringify(n.url)}`};
${S.map((M,D)=>{let T=`route${D}`,k=n.routes[M.route.id];Kt(k,`Route ${M.route.id} not found in manifest`);let{clientActionModule:L,clientLoaderModule:H,clientMiddlewareModule:G,hydrateFallbackModule:W,module:te}=k,le=[...L?[{module:L,varName:`${T}_clientAction`}]:[],...H?[{module:H,varName:`${T}_clientLoader`}]:[],...G?[{module:G,varName:`${T}_clientMiddleware`}]:[],...W?[{module:W,varName:`${T}_HydrateFallback`}]:[],{module:te,varName:`${T}_main`}];if(le.length===1)return`import * as ${T} from ${JSON.stringify(te)};`;let de=le.map(U=>`import * as ${U.varName} from "${U.module}";`).join(`
`),re=`const ${T} = {${le.map(U=>`...${U.varName}`).join(",")}};`;return[de,re].join(`
`)}).join(`
`)}
  ${b?`window.__reactRouterManifest = ${JSON.stringify(IN(n,h),null,2)};`:""}
  window.__reactRouterRouteModules = {${S.map((M,D)=>`${JSON.stringify(M.route.id)}:route${D}`).join(",")}};

import(${JSON.stringify(n.entry.module)});`:" ";return v.createElement(v.Fragment,null,v.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Ov(_),type:void 0}),v.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Ov(O),type:"module",async:!0}))},[]),R=Zc||x?[]:e5(n.entry.imports.concat(Ah(S,n,{includeHydrateFallback:!0}))),E=typeof n.sri=="object"?n.sri:{};return Fs(!x,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),Zc||x?null:v.createElement(v.Fragment,null,typeof n.sri=="object"?v.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:E})}}):null,b?null:v.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:e.crossOrigin,integrity:E[n.url],suppressHydrationWarning:!0}),v.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:e.crossOrigin,integrity:E[n.entry.module],suppressHydrationWarning:!0}),R.map(N=>v.createElement("link",{key:N,rel:"modulepreload",href:N,crossOrigin:e.crossOrigin,integrity:E[N],suppressHydrationWarning:!0})),w)}function e5(e){return[...new Set(e)]}function t5(...e){return n=>{e.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})}}var Hh=class extends v.Component{constructor(e){super(e),this.state={error:e.error||null,location:e.location}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error||null,location:e.location}:{error:e.error||n.error,location:n.location}}render(){return this.state.error?v.createElement(Dw,{error:this.state.error,isOutsideRemixApp:!0}):this.props.children}};function Dw({error:e,isOutsideRemixApp:n}){console.error(e);let r=v.createElement("script",{dangerouslySetInnerHTML:{__html:`
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `}});if(Et(e))return v.createElement(Km,{title:"Unhandled Thrown Response!"},v.createElement("h1",{style:{fontSize:"24px"}},e.status," ",e.statusText),r);let o;if(e instanceof Error)o=e;else{let s=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);o=new Error(s)}return v.createElement(Km,{title:"Application Error!",isOutsideRemixApp:n},v.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),v.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),r)}function Km({title:e,renderScripts:n,isOutsideRemixApp:r,children:o}){let{routeModules:s}=No();return s.root?.Layout&&!r?o:v.createElement("html",{lang:"en"},v.createElement("head",null,v.createElement("meta",{charSet:"utf-8"}),v.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),v.createElement("title",null,e)),v.createElement("body",null,v.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,n?v.createElement(Ow,null):null)))}var Aw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Aw&&(window.__reactRouterVersion="7.8.0")}catch{}function a5(e,n){return Eo({basename:n?.basename,unstable_getContext:n?.unstable_getContext,future:n?.future,history:tl({window:n?.window}),hydrationData:n?.hydrationData||Mw(),routes:e,mapRouteProperties:Ei,hydrationRouteProperties:sl,dataStrategy:n?.dataStrategy,patchRoutesOnNavigation:n?.patchRoutesOnNavigation,window:n?.window}).initialize()}function n5(e,n){return Eo({basename:n?.basename,unstable_getContext:n?.unstable_getContext,future:n?.future,history:Zb({window:n?.window}),hydrationData:n?.hydrationData||Mw(),routes:e,mapRouteProperties:Ei,hydrationRouteProperties:sl,dataStrategy:n?.dataStrategy,patchRoutesOnNavigation:n?.patchRoutesOnNavigation,window:n?.window}).initialize()}function Mw(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:r5(e.errors)}),e}function r5(e){if(!e)return null;let n=Object.entries(e),r={};for(let[o,s]of n)if(s&&s.__type==="RouteErrorResponse")r[o]=new Jt(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let c=window[s.__subType];if(typeof c=="function")try{let d=new c(s.message);d.stack="",r[o]=d}catch{}}if(r[o]==null){let c=new Error(s.message);c.stack="",r[o]=c}}else r[o]=s;return r}function kw({basename:e,children:n,window:r}){let o=v.useRef();o.current==null&&(o.current=tl({window:r,v5Compat:!0}));let s=o.current,[c,d]=v.useState({action:s.action,location:s.location}),h=v.useCallback(f=>{v.startTransition(()=>d(f))},[d]);return v.useLayoutEffect(()=>s.listen(h),[s,h]),v.createElement(Br,{basename:e,children:n,location:c.location,navigationType:c.action,navigator:s})}function i5({basename:e,children:n,window:r}){let o=v.useRef();o.current==null&&(o.current=Zb({window:r,v5Compat:!0}));let s=o.current,[c,d]=v.useState({action:s.action,location:s.location}),h=v.useCallback(f=>{v.startTransition(()=>d(f))},[d]);return v.useLayoutEffect(()=>s.listen(h),[s,h]),v.createElement(Br,{basename:e,children:n,location:c.location,navigationType:c.action,navigator:s})}function Lw({basename:e,children:n,history:r}){let[o,s]=v.useState({action:r.action,location:r.location}),c=v.useCallback(d=>{v.startTransition(()=>s(d))},[s]);return v.useLayoutEffect(()=>r.listen(c),[r,c]),v.createElement(Br,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:r})}Lw.displayName="unstable_HistoryRouter";var zw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tn=v.forwardRef(function({onClick:n,discover:r="render",prefetch:o="none",relative:s,reloadDocument:c,replace:d,state:h,target:f,to:p,preventScrollReset:g,viewTransition:x,...b},S){let{basename:w}=v.useContext(ba),R=typeof p=="string"&&zw.test(p),E,N=!1;if(typeof p=="string"&&R&&(E=p,Aw))try{let H=new URL(window.location.href),G=p.startsWith("//")?new URL(H.protocol+p):new URL(p),W=Pt(G.pathname,w);G.origin===H.origin&&W!=null?p=W+G.search+G.hash:N=!0}catch{ct(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=Ox(p,{relative:s}),[O,M,D]=VN(o,b),T=$w(p,{replace:d,state:h,target:f,preventScrollReset:g,relative:s,viewTransition:x});function k(H){n&&n(H),H.defaultPrevented||T(H)}let L=v.createElement("a",{...b,...D,href:E||_,onClick:N||c?n:k,ref:t5(S,M),target:f,"data-discover":!R&&r==="render"?"true":void 0});return O&&!R?v.createElement(v.Fragment,null,L,v.createElement(Uh,{page:_})):L});tn.displayName="Link";var Uw=v.forwardRef(function({"aria-current":n="page",caseSensitive:r=!1,className:o="",end:s=!1,style:c,to:d,viewTransition:h,children:f,...p},g){let x=jo(d,{relative:p.relative}),b=wa(),S=v.useContext(Lr),{navigator:w,basename:R}=v.useContext(ba),E=S!=null&&Fw(x)&&h===!0,N=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,_=b.pathname,O=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(_=_.toLowerCase(),O=O?O.toLowerCase():null,N=N.toLowerCase()),O&&R&&(O=Pt(O,R)||O);const M=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let D=_===N||!s&&_.startsWith(N)&&_.charAt(M)==="/",T=O!=null&&(O===N||!s&&O.startsWith(N)&&O.charAt(N.length)==="/"),k={isActive:D,isPending:T,isTransitioning:E},L=D?n:void 0,H;typeof o=="function"?H=o(k):H=[o,D?"active":null,T?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let G=typeof c=="function"?c(k):c;return v.createElement(tn,{...p,"aria-current":L,className:H,ref:g,style:G,to:d,viewTransition:h},typeof f=="function"?f(k):f)});Uw.displayName="NavLink";var Bh=v.forwardRef(({discover:e="render",fetcherKey:n,navigate:r,reloadDocument:o,replace:s,state:c,method:d=Xc,action:h,onSubmit:f,relative:p,preventScrollReset:g,viewTransition:x,...b},S)=>{let w=Ph(),R=Pw(h,{relative:p}),E=d.toLowerCase()==="get"?"get":"post",N=typeof h=="string"&&zw.test(h),_=O=>{if(f&&f(O),O.defaultPrevented)return;O.preventDefault();let M=O.nativeEvent.submitter,D=M?.getAttribute("formmethod")||d;w(M||O.currentTarget,{fetcherKey:n,method:D,navigate:r,replace:s,state:c,relative:p,preventScrollReset:g,viewTransition:x})};return v.createElement("form",{ref:S,method:E,action:R,onSubmit:o?f:_,...b,"data-discover":!N&&e==="render"?"true":void 0})});Bh.displayName="Form";function Hw({getKey:e,storageKey:n,...r}){let o=v.useContext(xn),{basename:s}=v.useContext(ba),c=wa(),d=Ru();Yw({getKey:e,storageKey:n});let h=v.useMemo(()=>{if(!o||!e)return null;let p=Wm(c,d,s,e);return p!==c.key?p:null},[]);if(!o||o.isSpaMode)return null;let f=((p,g)=>{if(!window.history.state||!window.history.state.key){let x=Math.random().toString(32).slice(2);window.history.replaceState({key:x},"")}try{let b=JSON.parse(sessionStorage.getItem(p)||"{}")[g||window.history.state.key];typeof b=="number"&&window.scrollTo(0,b)}catch(x){console.error(x),sessionStorage.removeItem(p)}}).toString();return v.createElement("script",{...r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${f})(${JSON.stringify(n||Zm)}, ${JSON.stringify(h)})`}})}Hw.displayName="ScrollRestoration";function Bw(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Au(e){let n=v.useContext(Qn);return ve(n,Bw(e)),n}function $h(e){let n=v.useContext(Lr);return ve(n,Bw(e)),n}function $w(e,{target:n,replace:r,state:o,preventScrollReset:s,relative:c,viewTransition:d}={}){let h=Ur(),f=wa(),p=jo(e,{relative:c});return v.useCallback(g=>{if(dN(g,n)){g.preventDefault();let x=r!==void 0?r:ia(f)===ia(p);h(e,{replace:x,state:o,preventScrollReset:s,relative:c,viewTransition:d})}},[f,h,p,r,o,n,e,s,c,d])}function o5(e){ct(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let n=v.useRef(ou(e)),r=v.useRef(!1),o=wa(),s=v.useMemo(()=>fN(o.search,r.current?null:n.current),[o.search]),c=Ur(),d=v.useCallback((h,f)=>{const p=ou(typeof h=="function"?h(new URLSearchParams(s)):h);r.current=!0,c("?"+p,f)},[c,s]);return[s,d]}var s5=0,l5=()=>`__${String(++s5)}__`;function Ph(){let{router:e}=Au("useSubmit"),{basename:n}=v.useContext(ba),r=FR();return v.useCallback(async(o,s={})=>{let{action:c,method:d,encType:h,formData:f,body:p}=pN(o,n);if(s.navigate===!1){let g=s.fetcherKey||l5();await e.fetch(g,r,s.action||c,{preventScrollReset:s.preventScrollReset,formData:f,body:p,formMethod:s.method||d,formEncType:s.encType||h,flushSync:s.flushSync})}else await e.navigate(s.action||c,{preventScrollReset:s.preventScrollReset,formData:f,body:p,formMethod:s.method||d,formEncType:s.encType||h,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,n,r])}function Pw(e,{relative:n}={}){let{basename:r}=v.useContext(ba),o=v.useContext(xa);ve(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),c={...jo(e||".",{relative:n})},d=wa();if(e==null){c.search=d.search;let h=new URLSearchParams(c.search),f=h.getAll("index");if(f.some(g=>g==="")){h.delete("index"),f.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();c.search=g?`?${g}`:""}}return(!e||e===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:yn([r,c.pathname])),ia(c)}function c5({key:e}={}){let{router:n}=Au("useFetcher"),r=$h("useFetcher"),o=v.useContext(rl),s=v.useContext(xa),c=s.matches[s.matches.length-1]?.route.id;ve(o,"useFetcher must be used inside a FetchersContext"),ve(s,"useFetcher must be used inside a RouteContext"),ve(c!=null,'useFetcher can only be used on routes that contain a unique "id"');let d=v.useId(),[h,f]=v.useState(e||d);e&&e!==h&&f(e),v.useEffect(()=>(n.getFetcher(h),()=>n.deleteFetcher(h)),[n,h]);let p=v.useCallback(async(E,N)=>{ve(c,"No routeId available for fetcher.load()"),await n.fetch(h,c,E,N)},[h,c,n]),g=Ph(),x=v.useCallback(async(E,N)=>{await g(E,{...N,navigate:!1,fetcherKey:h})},[h,g]),b=v.useMemo(()=>{let E=v.forwardRef((N,_)=>v.createElement(Bh,{...N,navigate:!1,fetcherKey:h,ref:_}));return E.displayName="fetcher.Form",E},[h]),S=r.fetchers.get(h)||wu,w=o.get(h);return v.useMemo(()=>({Form:b,submit:x,load:p,...S,data:w}),[b,x,p,S,w])}function u5(){let e=$h("useFetchers");return Array.from(e.fetchers.entries()).map(([n,r])=>({...r,key:n}))}var Zm="react-router-scroll-positions",$c={};function Wm(e,n,r,o){let s=null;return o&&(r!=="/"?s=o({...e,pathname:Pt(e.pathname,r)||e.pathname},n):s=o(e,n)),s==null&&(s=e.key),s}function Yw({getKey:e,storageKey:n}={}){let{router:r}=Au("useScrollRestoration"),{restoreScrollPosition:o,preventScrollReset:s}=$h("useScrollRestoration"),{basename:c}=v.useContext(ba),d=wa(),h=Ru(),f=Ux();v.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),f5(v.useCallback(()=>{if(f.state==="idle"){let p=Wm(d,h,c,e);$c[p]=window.scrollY}try{sessionStorage.setItem(n||Zm,JSON.stringify($c))}catch(p){ct(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${p}).`)}window.history.scrollRestoration="auto"},[f.state,e,c,d,h,n])),typeof document<"u"&&(v.useLayoutEffect(()=>{try{let p=sessionStorage.getItem(n||Zm);p&&($c=JSON.parse(p))}catch{}},[n]),v.useLayoutEffect(()=>{let p=r?.enableScrollRestoration($c,()=>window.scrollY,e?(g,x)=>Wm(g,x,c,e):void 0);return()=>p&&p()},[r,c,e]),v.useLayoutEffect(()=>{if(o!==!1){if(typeof o=="number"){window.scrollTo(0,o);return}try{if(d.hash){let p=document.getElementById(decodeURIComponent(d.hash.slice(1)));if(p){p.scrollIntoView();return}}}catch{ct(!1,`"${d.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}s!==!0&&window.scrollTo(0,0)}},[d,o,s]))}function d5(e,n){let{capture:r}=n||{};v.useEffect(()=>{let o=r!=null?{capture:r}:void 0;return window.addEventListener("beforeunload",e,o),()=>{window.removeEventListener("beforeunload",e,o)}},[e,r])}function f5(e,n){let{capture:r}={};v.useEffect(()=>{let o=r!=null?{capture:r}:void 0;return window.addEventListener("pagehide",e,o),()=>{window.removeEventListener("pagehide",e,o)}},[e,r])}function m5({when:e,message:n}){let r=Bx(e);v.useEffect(()=>{r.state==="blocked"&&(window.confirm(n)?setTimeout(r.proceed,0):r.reset())},[r,n]),v.useEffect(()=>{r.state==="blocked"&&!e&&r.reset()},[r,e])}function Fw(e,{relative:n}={}){let r=v.useContext(nl);ve(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Au("useViewTransitionState"),s=jo(e,{relative:n});if(!r.isTransitioning)return!1;let c=Pt(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=Pt(r.nextLocation.pathname,o)||r.nextLocation.pathname;return yo(s.pathname,d)!=null||yo(s.pathname,c)!=null}function h5({basename:e,children:n,location:r="/"}){typeof r=="string"&&(r=Ma(r));let o="POP",s={pathname:r.pathname||"/",search:r.search||"",hash:r.hash||"",state:r.state!=null?r.state:null,key:r.key||"default"},c=qw();return v.createElement(Br,{basename:e,children:n,location:s,navigationType:o,navigator:c,static:!0})}function Yh({context:e,router:n,hydrate:r=!0,nonce:o}){ve(n&&e,"You must provide `router` and `context` to <StaticRouterProvider>");let s={router:n,navigator:qw(),static:!0,staticContext:e,basename:e.basename||"/"},c=new Map,d="";if(r!==!1){let f={loaderData:e.loaderData,actionData:e.actionData,errors:g5(e.errors)};d=`window.__staticRouterHydrationData = JSON.parse(${w5(JSON.stringify(JSON.stringify(f)))});`}let{state:h}=s.router;return v.createElement(v.Fragment,null,v.createElement(Qn.Provider,{value:s},v.createElement(Lr.Provider,{value:h},v.createElement(rl.Provider,{value:c},v.createElement(nl.Provider,{value:{isTransitioning:!1}},v.createElement(Br,{basename:s.basename,location:h.location,navigationType:h.historyAction,navigator:s.navigator,static:s.static},v.createElement(p5,{routes:n.routes,future:n.future,state:h})))))),d?v.createElement("script",{suppressHydrationWarning:!0,nonce:o,dangerouslySetInnerHTML:{__html:d}}):null)}function p5({routes:e,future:n,state:r}){return Nh(e,void 0,r,n)}function g5(e){if(!e)return null;let n=Object.entries(e),r={};for(let[o,s]of n)Et(s)?r[o]={...s,__type:"RouteErrorResponse"}:s instanceof Error?r[o]={message:s.message,__type:"Error",...s.name!=="Error"?{__subType:s.name}:{}}:r[o]=s;return r}function qw(){return{createHref:Iw,encodeLocation:Gw,push(e){throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)})\` somewhere in your app.`)},replace(e){throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)}, { replace: true })\` somewhere in your app.`)},go(e){throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`)},back(){throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.")},forward(){throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.")}}}function y5(e,n){return gx(e,{...n,mapRouteProperties:Ei})}function Fh(e,n,r={}){let o={},s=Ar(e,Ei,void 0,o),c=n.matches.map(h=>{let f=o[h.route.id]||h.route;return{...h,route:f}}),d=h=>`You cannot use router.${h}() on the server because it is a stateless environment`;return{get basename(){return n.basename},get future(){return{unstable_middleware:!1,...r?.future}},get state(){return{historyAction:"POP",location:n.location,matches:c,loaderData:n.loaderData,actionData:n.actionData,errors:n.errors,initialized:!0,navigation:Us,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",fetchers:new Map,blockers:new Map}},get routes(){return s},get window(){},initialize(){throw d("initialize")},subscribe(){throw d("subscribe")},enableScrollRestoration(){throw d("enableScrollRestoration")},navigate(){throw d("navigate")},fetch(){throw d("fetch")},revalidate(){throw d("revalidate")},createHref:Iw,encodeLocation:Gw,getFetcher(){return wu},deleteFetcher(){throw d("deleteFetcher")},dispose(){throw d("dispose")},getBlocker(){return Nr},deleteBlocker(){throw d("deleteBlocker")},patchRoutes(){throw d("patchRoutes")},_internalFetchControllers:new Map,_internalSetRoutes(){throw d("_internalSetRoutes")},_internalSetStateDoNotUseOrYouWillBreakYourApp(){throw d("_internalSetStateDoNotUseOrYouWillBreakYourApp")}}}function Iw(e){return typeof e=="string"?e:ia(e)}function Gw(e){let n=typeof e=="string"?e:ia(e);n=n.replace(/ $/,"%20");let r=v5.test(n)?new URL(n):new URL(n,"http://localhost");return{pathname:r.pathname,search:r.search,hash:r.hash}}var v5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b5={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},x5=/[&><\u2028\u2029]/g;function w5(e){return e.replace(x5,n=>b5[n])}var Os={},Lv;function S5(){if(Lv)return Os;Lv=1,Object.defineProperty(Os,"__esModule",{value:!0}),Os.parse=d,Os.serialize=p;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,c=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function d(b,S){const w=new c,R=b.length;if(R<2)return w;const E=S?.decode||g;let N=0;do{const _=b.indexOf("=",N);if(_===-1)break;const O=b.indexOf(";",N),M=O===-1?R:O;if(_>M){N=b.lastIndexOf(";",_-1)+1;continue}const D=h(b,N,_),T=f(b,_,D),k=b.slice(D,T);if(w[k]===void 0){let L=h(b,_+1,M),H=f(b,M,L);const G=E(b.slice(L,H));w[k]=G}N=M+1}while(N<R);return w}function h(b,S,w){do{const R=b.charCodeAt(S);if(R!==32&&R!==9)return S}while(++S<w);return w}function f(b,S,w){for(;S>w;){const R=b.charCodeAt(--S);if(R!==32&&R!==9)return S+1}return w}function p(b,S,w){const R=w?.encode||encodeURIComponent;if(!e.test(b))throw new TypeError(`argument name is invalid: ${b}`);const E=R(S);if(!n.test(E))throw new TypeError(`argument val is invalid: ${S}`);let N=b+"="+E;if(!w)return N;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);N+="; Max-Age="+w.maxAge}if(w.domain){if(!r.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);N+="; Domain="+w.domain}if(w.path){if(!o.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);N+="; Path="+w.path}if(w.expires){if(!x(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);N+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(N+="; HttpOnly"),w.secure&&(N+="; Secure"),w.partitioned&&(N+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":N+="; Priority=Low";break;case"medium":N+="; Priority=Medium";break;case"high":N+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":N+="; SameSite=Strict";break;case"lax":N+="; SameSite=Lax";break;case"none":N+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return N}function g(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function x(b){return s.call(b)==="[object Date]"}return Os}var zv=S5(),so={exports:{}},Uv;function E5(){if(Uv)return so.exports;Uv=1;var e={decodeValues:!0,map:!1,silent:!1};function n(d){return typeof d=="string"&&!!d.trim()}function r(d,h){var f=d.split(";").filter(n),p=f.shift(),g=o(p),x=g.name,b=g.value;h=h?Object.assign({},e,h):e;try{b=h.decodeValues?decodeURIComponent(b):b}catch(w){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+b+"'. Set options.decodeValues to false to disable this feature.",w)}var S={name:x,value:b};return f.forEach(function(w){var R=w.split("="),E=R.shift().trimLeft().toLowerCase(),N=R.join("=");E==="expires"?S.expires=new Date(N):E==="max-age"?S.maxAge=parseInt(N,10):E==="secure"?S.secure=!0:E==="httponly"?S.httpOnly=!0:E==="samesite"?S.sameSite=N:E==="partitioned"?S.partitioned=!0:S[E]=N}),S}function o(d){var h="",f="",p=d.split("=");return p.length>1?(h=p.shift(),f=p.join("=")):f=d,{name:h,value:f}}function s(d,h){if(h=h?Object.assign({},e,h):e,!d)return h.map?{}:[];if(d.headers)if(typeof d.headers.getSetCookie=="function")d=d.headers.getSetCookie();else if(d.headers["set-cookie"])d=d.headers["set-cookie"];else{var f=d.headers[Object.keys(d.headers).find(function(g){return g.toLowerCase()==="set-cookie"})];!f&&d.headers.cookie&&!h.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),d=f}if(Array.isArray(d)||(d=[d]),h.map){var p={};return d.filter(n).reduce(function(g,x){var b=r(x,h);return g[b.name]=b,g},p)}else return d.filter(n).map(function(g){return r(g,h)})}function c(d){if(Array.isArray(d))return d;if(typeof d!="string")return[];var h=[],f=0,p,g,x,b,S;function w(){for(;f<d.length&&/\s/.test(d.charAt(f));)f+=1;return f<d.length}function R(){return g=d.charAt(f),g!=="="&&g!==";"&&g!==","}for(;f<d.length;){for(p=f,S=!1;w();)if(g=d.charAt(f),g===","){for(x=f,f+=1,w(),b=f;f<d.length&&R();)f+=1;f<d.length&&d.charAt(f)==="="?(S=!0,f=b,h.push(d.substring(p,x)),p=f):f=x+1}else f+=1;(!S||f>=d.length)&&h.push(d.substring(p,d.length))}return h}return so.exports=s,so.exports.parse=s,so.exports.parseString=r,so.exports.splitCookiesString=c,so.exports}var j5=E5(),qh=Xb();const fo=el(qh);var R5={};function N5({context:e,url:n,nonce:r}){typeof n=="string"&&(n=new URL(n));let{manifest:o,routeModules:s,criticalCss:c,serverHandoffString:d}=e,h=Ew(o.routes,s,e.future,e.isSpaMode);e.staticHandlerContext.loaderData={...e.staticHandlerContext.loaderData};for(let p of e.staticHandlerContext.matches){let g=p.route.id,x=s[g],b=e.manifest.routes[g];x&&b&&Ro(g,x.clientLoader,b.hasLoader,e.isSpaMode)&&(x.HydrateFallback||!b.hasLoader)&&delete e.staticHandlerContext.loaderData[g]}let f=Fh(h,e.staticHandlerContext);return v.createElement(v.Fragment,null,v.createElement(xn.Provider,{value:{manifest:o,routeModules:s,criticalCss:c,serverHandoffString:d,future:e.future,ssr:e.ssr,isSpaMode:e.isSpaMode,routeDiscovery:e.routeDiscovery,serializeError:e.serializeError,renderMeta:e.renderMeta}},v.createElement(Hh,{location:f.state.location},v.createElement(Yh,{router:f,context:e.staticHandlerContext,hydrate:!1}))),e.serverHandoffStream?v.createElement(v.Suspense,null,v.createElement(mw,{context:e,identifier:0,reader:e.serverHandoffStream.getReader(),textDecoder:new TextDecoder,nonce:r})):null)}function T5(e,n){return function({initialEntries:o,initialIndex:s,hydrationData:c,future:d}){let h=v.useRef(),f=v.useRef();if(h.current==null){f.current={future:{unstable_subResourceIntegrity:d?.unstable_subResourceIntegrity===!0,unstable_middleware:d?.unstable_middleware===!0},manifest:{routes:{},entry:{imports:[],module:""},url:"",version:""},routeModules:{},ssr:!1,isSpaMode:!1,routeDiscovery:{mode:"lazy",manifestPath:"/__manifest"}};let p=Xw(Ar(e,g=>g),n!==void 0?n:d?.unstable_middleware?new gn:{},f.current.manifest,f.current.routeModules);h.current=Px(p,{initialEntries:o,initialIndex:s,hydrationData:c})}return v.createElement(xn.Provider,{value:f.current},v.createElement(Cu,{router:h.current}))}}function Xw(e,n,r,o,s){return e.map(c=>{if(!c.id)throw new Error("Expected a route.id in react-router processRoutes() function");let d={id:c.id,path:c.path,index:c.index,Component:c.Component?Gx(c.Component):void 0,HydrateFallback:c.HydrateFallback?Vx(c.HydrateFallback):void 0,ErrorBoundary:c.ErrorBoundary?Kx(c.ErrorBoundary):void 0,action:c.action?f=>c.action({...f,context:n}):void 0,loader:c.loader?f=>c.loader({...f,context:n}):void 0,handle:c.handle,shouldRevalidate:c.shouldRevalidate},h={id:c.id,path:c.path,index:c.index,parentId:s,hasAction:c.action!=null,hasLoader:c.loader!=null,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:c.ErrorBoundary!=null,module:"build/stub-path-to-module.js",clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0};return r.routes[d.id]=h,o[c.id]={default:d.Component||Fx,ErrorBoundary:d.ErrorBoundary||void 0,handle:c.handle,links:c.links,meta:c.meta,shouldRevalidate:c.shouldRevalidate},c.children&&(d.children=Xw(c.children,n,r,o,d.id)),d})}var Ih=new TextEncoder,C5=async(e,n)=>{let r=Ih.encode(e),o=await Vw(n,["sign"]),s=await crypto.subtle.sign("HMAC",o,r),c=btoa(String.fromCharCode(...new Uint8Array(s))).replace(/=+$/,"");return e+"."+c},_5=async(e,n)=>{let r=e.lastIndexOf("."),o=e.slice(0,r),s=e.slice(r+1),c=Ih.encode(o),d=await Vw(n,["verify"]);try{let h=O5(atob(s));return await crypto.subtle.verify("HMAC",d,h,c)?o:!1}catch{return!1}},Vw=async(e,n)=>crypto.subtle.importKey("raw",Ih.encode(e),{name:"HMAC",hash:"SHA-256"},!1,n);function O5(e){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}var Gh=(e,n={})=>{let{secrets:r=[],...o}={path:"/",sameSite:"lax",...n};return z5(e,o.expires),{get name(){return e},get isSigned(){return r.length>0},get expires(){return typeof o.maxAge<"u"?new Date(Date.now()+o.maxAge*1e3):o.expires},async parse(s,c){if(!s)return null;let d=zv.parse(s,{...o,...c});if(e in d){let h=d[e];return typeof h=="string"&&h!==""?await A5(h,r):""}else return null},async serialize(s,c){return zv.serialize(e,s===""?"":await D5(s,r),{...o,...c})}}},Xh=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function D5(e,n){let r=M5(e);return n.length>0&&(r=await C5(r,n[0])),r}async function A5(e,n){if(n.length>0){for(let r of n){let o=await _5(e,r);if(o!==!1)return Hv(o)}return null}return Hv(e)}function M5(e){return btoa(L5(encodeURIComponent(JSON.stringify(e))))}function Hv(e){try{return JSON.parse(decodeURIComponent(k5(atob(e))))}catch{return{}}}function k5(e){let n=e.toString(),r="",o=0,s,c;for(;o<n.length;)s=n.charAt(o++),/[\w*+\-./@]/.exec(s)?r+=s:(c=s.charCodeAt(0),c<256?r+="%"+Bv(c,2):r+="%u"+Bv(c,4).toUpperCase());return r}function Bv(e,n){let r=e.toString(16);for(;r.length<n;)r="0"+r;return r}function L5(e){let n=e.toString(),r="",o=0,s,c;for(;o<n.length;){if(s=n.charAt(o++),s==="%"){if(n.charAt(o)==="u"){if(c=n.slice(o+1,o+5),/^[\da-f]{4}$/i.exec(c)){r+=String.fromCharCode(parseInt(c,16)),o+=5;continue}}else if(c=n.slice(o,o+2),/^[\da-f]{2}$/i.exec(c)){r+=String.fromCharCode(parseInt(c,16)),o+=2;continue}}r+=s}return r}function z5(e,n){Fs(!n,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function U5(e){return Object.keys(e).reduce((n,r)=>{let o=e[r];return o&&(n[r]=o.module),n},{})}var Qw=(e=>(e.Development="development",e.Production="production",e.Test="test",e))(Qw||{});function H5(e){return e==="development"||e==="production"||e==="test"}function Mu(e,n){if(e instanceof Error&&n!=="development"){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function lu(e,n){return Object.entries(e).reduce((r,[o,s])=>Object.assign(r,{[o]:Mu(s,n)}),{})}function Kw(e,n){let r=Mu(e,n);return{message:r.message,stack:r.stack}}function $v(e,n){if(!e)return null;let r=Object.entries(e),o={};for(let[s,c]of r)if(Et(c))o[s]={...c,__type:"RouteErrorResponse"};else if(c instanceof Error){let d=Mu(c,n);o[s]={message:d.message,stack:d.stack,__type:"Error",...d.name!=="Error"?{__subType:d.name}:{}}}else o[s]=c;return o}function Jm(e,n,r){let o=ma(e,n,r);return o?o.map(s=>({params:s.params,pathname:s.pathname,route:s.route})):null}async function Pv(e,n){let r=await e({request:$5(B5(n.request)),params:n.params,context:n.context});if(Cr(r)&&r.init&&r.init.status&&Su(r.init.status))throw new Response(null,r.init);return r}function B5(e){let n=new URL(e.url),r=n.searchParams.getAll("index");n.searchParams.delete("index");let o=[];for(let c of r)c&&o.push(c);for(let c of o)n.searchParams.append("index",c);let s={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return s.body&&(s.duplex="half"),new Request(n.href,s)}function $5(e){let n=new URL(e.url);n.searchParams.delete("_routes");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(n.href,r)}function Wc(e,n){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"),new Error(n)}var Zw="__reactRouterDevServerHooks";function P5(e){globalThis[Zw]=e}function xm(){return globalThis[Zw]}function Ww(e,n){if(typeof process<"u")try{if(R5?.IS_RR_BUILD_REQUEST==="yes")return e.headers.get(n)}catch{}return null}function Jw(e){let n={};return Object.values(e).forEach(r=>{if(r){let o=r.parentId||"";n[o]||(n[o]=[]),n[o].push(r)}}),n}function e1(e,n="",r=Jw(e)){return(r[n]||[]).map(o=>({...o,children:e1(e,o.id,r)}))}function t1(e,n,r="",o=Jw(e)){return(o[r]||[]).map(s=>{let c={hasErrorBoundary:s.id==="root"||s.module.ErrorBoundary!=null,id:s.id,path:s.path,unstable_middleware:s.module.unstable_middleware,loader:s.module.loader?async d=>{let h=Ww(d.request,"X-React-Router-Prerender-Data");if(h!=null){let p=h&&decodeURI(h);Wc(p,"Missing prerendered data for route");let g=new TextEncoder().encode(p),x=new ReadableStream({start(w){w.enqueue(g),w.close()}}),S=(await Ou(x,global)).value;if(S&&an in S){let w=S[an],R={status:w.status};throw w.reload?cx(w.redirect,R):w.replace?ux(w.redirect,R):al(w.redirect,R)}else{Wc(S&&s.id in S,"Unable to decode prerendered data");let w=S[s.id];return Wc("data"in w,"Unable to process prerendered data"),w.data}}return await Pv(s.module.loader,d)}:void 0,action:s.module.action?d=>Pv(s.module.action,d):void 0,handle:s.module.handle};return s.index?{index:!0,...c}:{caseSensitive:s.caseSensitive,children:t1(e,n,s.id,o),...c}})}var Y5={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},F5=/[&><\u2028\u2029]/g;function q5(e){return e.replace(F5,n=>Y5[n])}function Yv(e){return q5(JSON.stringify(e))}function Vh(e,n){return I5(e,r=>{let o=n.routes[r.route.id];return Wc(o,`Route with id "${r.route.id}" not found in build`),o.module.headers})}function I5(e,n,r){let o=e.errors?e.matches.findIndex(h=>e.errors[h.route.id]):-1,s=o>=0?e.matches.slice(0,o+1):e.matches,c;if(o>=0){let{actionHeaders:h,actionData:f,loaderHeaders:p,loaderData:g}=e;e.matches.slice(o).some(x=>{let b=x.route.id;return h[b]&&(!f||!f.hasOwnProperty(b))?c=h[b]:p[b]&&!g.hasOwnProperty(b)&&(c=p[b]),c!=null})}const d=new Headers(r);return s.reduce((h,f,p)=>{let{id:g}=f.route,x=e.loaderHeaders[g]||new Headers,b=e.actionHeaders[g]||new Headers,S=c!=null&&p===s.length-1,w=S&&c!==x&&c!==b,R=n(f);if(R==null){let N=new Headers(h);return w&&fi(c,N),fi(b,N),fi(x,N),N}let E=new Headers(typeof R=="function"?R({loaderHeaders:x,parentHeaders:h,actionHeaders:b,errorHeaders:S?c:void 0}):R);return w&&fi(c,E),fi(b,E),fi(x,E),fi(h,E),E},new Headers(d))}function fi(e,n){let r=e.get("Set-Cookie");if(r){let o=j5.splitCookiesString(r),s=new Set(n.getSetCookie());o.forEach(c=>{s.has(c)||n.append("Set-Cookie",c)})}}var a1=new Set([...fw,304]);async function G5(e,n,r,o,s,c,d){try{let g=new Request(s,{method:o.method,body:o.body,headers:o.headers,signal:o.signal,...o.body?{duplex:"half"}:void 0}),x=await r.query(g,{requestContext:c,skipLoaderErrorBubbling:!0,skipRevalidation:!0,unstable_generateMiddlewareResponse:e.future.unstable_middleware?async b=>{try{let S=await b(g);return h(S)}catch(S){return f(S)}}:void 0});return h(x)}catch(g){return f(g)}function h(g){return ft(g)||(g=p(g)),Eu(g)?_r(o,e,n,{result:Gs(g.status,g.headers,e.basename),headers:g.headers,status:yi}):g}function f(g){return d(g),_r(o,e,n,{result:{error:g},headers:new Headers,status:500})}function p(g){let x=Vh(g,e);if(Su(g.statusCode)&&x.has("Location"))return _r(o,e,n,{result:Gs(g.statusCode,x,e.basename),headers:x,status:yi});g.errors&&(Object.values(g.errors).forEach(S=>{(!Et(S)||S.error)&&d(S)}),g.errors=lu(g.errors,n));let b;return g.errors?b={error:Object.values(g.errors)[0]}:b={data:Object.values(g.actionData||{})[0]},_r(o,e,n,{result:b,headers:x,status:g.statusCode})}}async function X5(e,n,r,o,s,c,d){let h=new URL(o.url).searchParams.get("_routes"),f=h?new Set(h.split(",")):null;try{let b=new Request(s,{headers:o.headers,signal:o.signal}),S=await r.query(b,{requestContext:c,filterMatchesToLoad:w=>!f||f.has(w.route.id),skipLoaderErrorBubbling:!0,unstable_generateMiddlewareResponse:e.future.unstable_middleware?async w=>{try{let R=await w(b);return p(R)}catch(R){return g(R)}}:void 0});return p(S)}catch(b){return g(b)}function p(b){let S=ft(b)?b:x(b);return Eu(S)?_r(o,e,n,{result:{[an]:Gs(S.status,S.headers,e.basename)},headers:S.headers,status:yi}):S}function g(b){return d(b),_r(o,e,n,{result:{error:b},headers:new Headers,status:500})}function x(b){let S=Vh(b,e);if(Su(b.statusCode)&&S.has("Location"))return _r(o,e,n,{result:{[an]:Gs(b.statusCode,S,e.basename)},headers:S,status:yi});b.errors&&(Object.values(b.errors).forEach(E=>{(!Et(E)||E.error)&&d(E)}),b.errors=lu(b.errors,n));let w={},R=new Set(b.matches.filter(E=>f?f.has(E.route.id):E.route.loader!=null).map(E=>E.route.id));if(b.errors)for(let[E,N]of Object.entries(b.errors))w[E]={error:N};for(let[E,N]of Object.entries(b.loaderData))!(E in w)&&R.has(E)&&(w[E]={data:N});return _r(o,e,n,{result:w,headers:S,status:b.statusCode})}}function _r(e,n,r,{result:o,headers:s,status:c}){let d=new Headers(s);return d.set("X-Remix-Response","yes"),a1.has(c)?new Response(null,{status:c,headers:d}):(d.set("Content-Type","text/x-script"),d.delete("Content-Length"),new Response(cu(o,e.signal,n.entry.module.streamTimeout,r),{status:c||200,headers:d}))}function Gs(e,n,r){let o=n.get("Location");return r&&(o=Pt(o,r)||o),{redirect:o,status:e,revalidate:n.has("X-Remix-Revalidate")||n.has("Set-Cookie"),reload:n.has("X-Remix-Reload-Document"),replace:n.has("X-Remix-Replace")}}function cu(e,n,r,o){let s=new AbortController,c=setTimeout(()=>s.abort(new Error("Server Timeout")),typeof r=="number"?r:4950);return n.addEventListener("abort",()=>clearTimeout(c)),EN(e,{signal:s.signal,plugins:[d=>{if(d instanceof Error){let{name:h,message:f,stack:p}=o==="production"?Mu(d,o):d;return["SanitizedError",h,f,p]}if(d instanceof Jt){let{data:h,status:f,statusText:p}=d;return["ErrorResponse",h,f,p]}if(d&&typeof d=="object"&&an in d)return["SingleFetchRedirect",d[an]]}],postPlugins:[d=>{if(d&&typeof d=="object")return["SingleFetchClassInstance",Object.fromEntries(Object.entries(d))]},()=>["SingleFetchFallback"]]})}function Fv(e,n){let r=e1(e.routes),o=t1(e.routes,e.future),s=H5(n)?n:"production",c=gx(o,{basename:e.basename}),d=e.entry.module.handleError||((h,{request:f})=>{s!=="test"&&!f.signal.aborted&&console.error(Et(h)&&h.error?h.error:h)});return{routes:r,dataRoutes:o,serverMode:s,staticHandler:c,errorHandler:d}}var V5=(e,n)=>{let r,o,s,c,d;return async function(f,p){if(r=typeof e=="function"?await e():e,typeof e=="function"){let M=Fv(r,n);o=M.routes,s=M.serverMode,c=M.staticHandler,d=M.errorHandler}else if(!o||!s||!c||!d){let M=Fv(r,n);o=M.routes,s=M.serverMode,c=M.staticHandler,d=M.errorHandler}let g={},x,b=M=>{n==="development"&&xm()?.processRequestError?.(M),d(M,{context:x,params:g,request:f})};if(r.future.unstable_middleware){if(p&&!(p instanceof gn)){let M=new Error("Invalid `context` value provided to `handleRequest`. When middleware is enabled you must return an instance of `unstable_RouterContextProvider` from your `getLoadContext` function.");return b(M),uu(M,s)}x=p||new gn}else x=p||{};let S=new URL(f.url),w=r.basename||"/",R=S.pathname;Pt(R,w)==="/_root.data"?R=w:R.endsWith(".data")&&(R=R.replace(/\.data$/,"")),Pt(R,w)!=="/"&&R.endsWith("/")&&(R=R.slice(0,-1));let E=Ww(f,"X-React-Router-SPA-Mode")==="yes";if(!r.ssr){let M=decodeURI(R);if(r.prerender.length===0)E=!0;else if(!r.prerender.includes(M)&&!r.prerender.includes(M+"/")){if(S.pathname.endsWith(".data"))return d(new Jt(404,"Not Found",`Refusing to SSR the path \`${M}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`),{context:x,params:g,request:f}),new Response("Not Found",{status:404,statusText:"Not Found"});E=!0}}let N=Cw(r.routeDiscovery.manifestPath,w);if(S.pathname===N)try{return await Q5(r,o,S)}catch(M){return b(M),new Response("Unknown Server Error",{status:500})}let _=Jm(o,R,r.basename);_&&_.length>0&&Object.assign(g,_[0].params);let O;if(S.pathname.endsWith(".data")){let M=new URL(f.url);M.pathname=R;let D=Jm(o,M.pathname,r.basename);if(O=await K5(s,r,c,f,M,x,b),r.entry.module.handleDataRequest&&(O=await r.entry.module.handleDataRequest(O,{context:x,params:D?D[0].params:{},request:f}),Eu(O))){let T=Gs(O.status,O.headers,r.basename);f.method==="GET"&&(T={[an]:T});let k=new Headers(O.headers);return k.set("Content-Type","text/x-script"),new Response(cu(T,f.signal,r.entry.module.streamTimeout,s),{status:yi,headers:k})}}else if(!E&&_&&_[_.length-1].route.module.default==null&&_[_.length-1].route.module.ErrorBoundary==null)O=await W5(s,r,c,_.slice(-1)[0].route.id,f,x,b);else{let{pathname:M}=S,D;r.unstable_getCriticalCss?D=await r.unstable_getCriticalCss({pathname:M}):n==="development"&&xm()?.getCriticalCss&&(D=await xm()?.getCriticalCss?.(M)),O=await Z5(s,r,c,f,x,b,E,D)}return f.method==="HEAD"?new Response(null,{headers:O.headers,status:O.status,statusText:O.statusText}):O}};async function Q5(e,n,r){if(e.assets.version!==r.searchParams.get("version"))return new Response(null,{status:204,headers:{"X-Remix-Reload-Document":"true"}});let o={};if(r.searchParams.has("p")){let s=new Set;r.searchParams.getAll("p").forEach(c=>{c.startsWith("/")||(c=`/${c}`);let d=c.split("/").slice(1);d.forEach((h,f)=>{let p=d.slice(0,f+1).join("/");s.add(`/${p}`)})});for(let c of s){let d=Jm(n,c,e.basename);if(d)for(let h of d){let f=h.route.id,p=e.assets.routes[f];p&&(o[f]=p)}}return Response.json(o,{headers:{"Cache-Control":"public, max-age=31536000, immutable"}})}return new Response("Invalid Request",{status:400})}async function K5(e,n,r,o,s,c,d){return o.method!=="GET"?await G5(n,e,r,o,s,c,d):await X5(n,e,r,o,s,c,d)}async function Z5(e,n,r,o,s,c,d,h){try{let p=await r.query(o,{requestContext:s,unstable_generateMiddlewareResponse:n.future.unstable_middleware?async g=>{try{let x=await g(o);return ft(x)||(x=await f(x,d)),x}catch(x){return c(x),new Response(null,{status:500})}}:void 0});return ft(p)||(p=await f(p,d)),p}catch(p){return c(p),new Response(null,{status:500})}async function f(p,g){let x=Vh(p,n);if(a1.has(p.statusCode))return new Response(null,{status:p.statusCode,headers:x});p.errors&&(Object.values(p.errors).forEach(E=>{(!Et(E)||E.error)&&c(E)}),p.errors=lu(p.errors,e));let b={loaderData:p.loaderData,actionData:p.actionData,errors:$v(p.errors,e)},S={basename:n.basename,future:n.future,routeDiscovery:n.routeDiscovery,ssr:n.ssr,isSpaMode:g},w={manifest:n.assets,routeModules:U5(n.routes),staticHandlerContext:p,criticalCss:h,serverHandoffString:Yv({...S,criticalCss:h}),serverHandoffStream:cu(b,o.signal,n.entry.module.streamTimeout,e),renderMeta:{},future:n.future,ssr:n.ssr,routeDiscovery:n.routeDiscovery,isSpaMode:g,serializeError:E=>Kw(E,e)},R=n.entry.module.default;try{return await R(o,p.statusCode,x,w,s)}catch(E){c(E);let N=E;if(ft(E))try{let O=await eT(E);N=new Jt(E.status,E.statusText,O)}catch{}p=yx(r.dataRoutes,p,N),p.errors&&(p.errors=lu(p.errors,e));let _={loaderData:p.loaderData,actionData:p.actionData,errors:$v(p.errors,e)};w={...w,staticHandlerContext:p,serverHandoffString:Yv(S),serverHandoffStream:cu(_,o.signal,n.entry.module.streamTimeout,e),renderMeta:{}};try{return await R(o,p.statusCode,x,w,s)}catch(O){return c(O),uu(O,e)}}}}async function W5(e,n,r,o,s,c,d){try{let p=await r.queryRoute(s,{routeId:o,requestContext:c,unstable_generateMiddlewareResponse:n.future.unstable_middleware?async g=>{try{let x=await g(s);return h(x)}catch(x){return f(x)}}:void 0});return h(p)}catch(p){return f(p)}function h(p){return ft(p)?p:typeof p=="string"?new Response(p):Response.json(p)}function f(p){if(ft(p))return p.headers.set("X-Remix-Catch","yes"),p;if(Et(p))return d(p),J5(p,e);if(p instanceof Error&&p.message==="Expected a response from queryRoute"){let g=new Error("Expected a Response to be returned from resource route handler");return d(g),uu(g,e)}return d(p),uu(p,e)}}function J5(e,n){return Response.json(Kw(e.error||new Error("Unexpected Server Error"),n),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function uu(e,n){let r="Unexpected Server Error";return n!=="production"&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}function eT(e){let n=e.headers.get("Content-Type");return n&&/\bapplication\/json\b/.test(n)?e.body==null?null:e.json():e.text()}function wm(e){return`__flash_${e}__`}var Qh=(e={},n="")=>{let r=new Map(Object.entries(e));return{get id(){return n},get data(){return Object.fromEntries(r)},has(o){return r.has(o)||r.has(wm(o))},get(o){if(r.has(o))return r.get(o);let s=wm(o);if(r.has(s)){let c=r.get(s);return r.delete(s),c}},set(o,s){r.set(o,s)},flash(o,s){r.set(wm(o),s)},unset(o){r.delete(o)}}},tT=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function";function n1({cookie:e,createData:n,readData:r,updateData:o,deleteData:s}){let c=Xh(e)?e:Gh(e?.name||"__session",e);return r1(c),{async getSession(d,h){let f=d&&await c.parse(d,h),p=f&&await r(f);return Qh(p||{},f||"")},async commitSession(d,h){let{id:f,data:p}=d,g=h?.maxAge!=null?new Date(Date.now()+h.maxAge*1e3):h?.expires!=null?h.expires:c.expires;return f?await o(f,p,g):f=await n(p,g),c.serialize(f,h)},async destroySession(d,h){return await s(d.id),c.serialize("",{...h,maxAge:void 0,expires:new Date(0)})}}}function r1(e){Fs(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information.`)}function aT({cookie:e}={}){let n=Xh(e)?e:Gh(e?.name||"__session",e);return r1(n),{async getSession(r,o){return Qh(r&&await n.parse(r,o)||{})},async commitSession(r,o){let s=await n.serialize(r.data,o);if(s.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+s.length);return s},async destroySession(r,o){return n.serialize("",{...o,maxAge:void 0,expires:new Date(0)})}}}function nT({cookie:e}={}){let n=new Map;return n1({cookie:e,async createData(r,o){let s=Math.random().toString(36).substring(2,10);return n.set(s,{data:r,expires:o}),s},async readData(r){if(n.has(r)){let{data:o,expires:s}=n.get(r);if(!s||s>new Date)return o;s&&n.delete(r)}return null},async updateData(r,o,s){n.set(r,{data:o,expires:s})},async deleteData(r){n.delete(r)}})}function rT(e,...n){let r=n[0];return e.split("/").map(o=>{if(o==="*")return r?r["*"]:void 0;const s=o.match(/^:([\w-]+)(\?)?/);if(!s)return o;const c=s[1],d=r?r[c]:void 0;if(s[2]===void 0&&d===void 0)throw Error(`Path '${e}' requires param '${c}' but it was not provided`);return d}).filter(o=>o!==void 0).join("/")}function Kh(e,n,r,o,s,c){let d={...e,loaderData:{...e.loaderData}},h=ma(n,o,s);if(h)for(let f of h){let p=f.route.id,g=r(p);Ro(p,g.clientLoader,g.hasLoader,c)&&(g.hasHydrateFallback||!g.hasLoader)?delete d.loaderData[p]:g.hasLoader||(d.loaderData[p]=null)}return d}var i1=class extends Ne.Component{constructor(e){super(e),this.state={error:null,location:e.location}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:null,location:e.location}:{error:n.error,location:n.location}}render(){return this.state.error?Ne.createElement(o1,{error:this.state.error,renderAppShell:!0}):this.props.children}};function qv({renderAppShell:e,title:n,children:r}){return e?Ne.createElement("html",{lang:"en"},Ne.createElement("head",null,Ne.createElement("meta",{charSet:"utf-8"}),Ne.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),Ne.createElement("title",null,n)),Ne.createElement("body",null,Ne.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},r))):r}function o1({error:e,renderAppShell:n}){console.error(e);let r=Ne.createElement("script",{dangerouslySetInnerHTML:{__html:`
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `}});if(Et(e))return Ne.createElement(qv,{renderAppShell:n,title:"Unhandled Thrown Response!"},Ne.createElement("h1",{style:{fontSize:"24px"}},e.status," ",e.statusText),r);let o;if(e instanceof Error)o=e;else{let s=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);o=new Error(s)}return Ne.createElement(qv,{renderAppShell:n,title:"Application Error!"},Ne.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),Ne.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),r)}function iT({hasRootLayout:e}){let n=ol();if(e===void 0)throw new Error("Missing 'hasRootLayout' prop");return Ne.createElement(o1,{renderAppShell:!e,error:n})}function oT({createFromReadableStream:e,createTemporaryReferenceSet:n,encodeReply:r,fetch:o=fetch}){const s=window;let c=0;return async(d,h)=>{let f=s.__routerActionID=(s.__routerActionID??(s.__routerActionID=0))+1;const p=n(),g=await o(new Request(location.href,{body:await r(h,{temporaryReferences:p}),method:"POST",headers:{Accept:"text/x-component","rsc-action-id":d}}));if(!g.body)throw new Error("No response body");const x=await e(g.body,{temporaryReferences:p});if(x.type==="redirect"){if(x.reload){window.location.href=x.location;return}return s.__router.navigate(x.location,{replace:x.replace}),x.actionResult}if(x.type!=="action")throw new Error("Unexpected payload type");return x.rerender&&v.startTransition(async()=>{const b=await x.rerender;if(b&&c<f&&s.__routerActionID<=f){if(c=f,b.type==="redirect"){if(b.reload){window.location.href=b.location;return}s.__router.navigate(b.location,{replace:b.replace});return}let S;for(const w of b.matches)s.__router.patchRoutes(S?.id??null,[Xs(w)],!0),S=w;window.__router._internalSetStateDoNotUseOrYouWillBreakYourApp({}),v.startTransition(()=>{window.__router._internalSetStateDoNotUseOrYouWillBreakYourApp({loaderData:Object.assign({},s.__router.state.loaderData,b.loaderData),errors:b.errors?Object.assign({},s.__router.state.errors,b.errors):null})})}}),x.actionResult}}function sT({fetchImplementation:e,createFromReadableStream:n,unstable_getContext:r,payload:o}){const s=window;if(s.__router)return s.__router;if(o.type!=="render")throw new Error("Invalid payload type");let c=new Map;o.patches?.forEach(f=>{ve(f.parentId,"Invalid patch parentId"),c.has(f.parentId)||c.set(f.parentId,[]),c.get(f.parentId)?.push(f)});let d=o.matches.reduceRight((f,p)=>{const g=Xs(p,o);if(f.length>0){g.children=f;let x=c.get(p.id);x&&g.children.push(...x.map(b=>Xs(b)))}return[g]},[]);s.__router=Eo({routes:d,unstable_getContext:r,basename:o.basename,history:tl(),hydrationData:Kh({loaderData:o.loaderData,actionData:o.actionData,errors:o.errors},d,f=>{let p=o.matches.find(g=>g.id===f);return ve(p,"Route not found in payload"),{clientLoader:p.clientLoader,hasLoader:p.hasLoader,hasHydrateFallback:p.hydrateFallbackElement!=null}},o.location,void 0,!1),async patchRoutesOnNavigation({path:f,signal:p}){du.has(f)||await s1([f],n,e,p)},dataStrategy:lT(()=>s.__router,!0,o.basename,n,e)}),s.__router.state.initialized?(s.__routerInitialized=!0,s.__router.initialize()):s.__routerInitialized=!1;let h;return s.__router.subscribe(({loaderData:f,actionData:p})=>{h!==f&&(s.__routerActionID=(s.__routerActionID??(s.__routerActionID=0))+1)}),s.__router}var eh=ex();function lT(e,n,r,o,s){let c=pw(e,d=>{let h=d;return{hasLoader:h.route.hasLoader,hasClientLoader:h.route.hasClientLoader,hasComponent:h.route.hasComponent,hasAction:h.route.hasAction,hasClientAction:h.route.hasClientAction,hasShouldRevalidate:h.route.hasShouldRevalidate}},cT(o,s),n,r,d=>{let h=d;return h.route.hasComponent&&!h.route.element});return async d=>d.unstable_runClientMiddleware(async()=>{let h=d.context;h.set(eh,[]);let f=await c(d);const p=new Map;for(const g of h.get(eh))p.has(g.id)||p.set(g.id,[]),p.get(g.id).push(g);for(const g of d.matches){const x=p.get(g.route.id);if(x)for(const b of x)window.__router.patchRoutes(b.parentId??null,[Xs(b)],!0)}return f})}function cT(e,n){return async(r,o,s)=>{let{request:c,context:d}=r,h=Oh(c.url,o,"rsc");c.method==="GET"&&(h=gw(h),s&&h.searchParams.set("_routes",s.join(",")));let f=await n(new Request(h,await uw(c)));if(f.status===404&&!f.headers.has("X-Remix-Response"))throw new Jt(404,"Not Found",!0);ve(f.body,"No response body to decode");try{const p=await e(f.body,{temporaryReferences:void 0});if(p.type==="redirect")return{status:f.status,data:{redirect:{redirect:p.location,reload:p.reload,replace:p.replace,revalidate:!1,status:p.status}}};if(p.type!=="render")throw new Error("Unexpected payload type");d.get(eh).push(...p.matches);let g={routes:{}};const x=Qt(c.method)?"actionData":"loaderData";for(let[b,S]of Object.entries(p[x]||{}))g.routes[b]={data:S};if(p.errors)for(let[b,S]of Object.entries(p.errors))g.routes[b]={error:S};return{status:f.status,data:g}}catch{throw new Error("Unable to decode RSC response")}}}function uT({createFromReadableStream:e,fetch:n=fetch,payload:r,routeDiscovery:o="eager",unstable_getContext:s}){if(r.type!=="render")throw new Error("Invalid payload type");let c=v.useMemo(()=>sT({payload:r,fetchImplementation:n,unstable_getContext:s,createFromReadableStream:e}),[e,r,n,s]);v.useLayoutEffect(()=>{const p=window;p.__routerInitialized||(p.__routerInitialized=!0,p.__router.initialize())},[]);let[d,h]=v.useState(c.state.location);v.useLayoutEffect(()=>c.subscribe(p=>{p.location!==d&&h(p.location)}),[c,d]),v.useEffect(()=>{if(o==="lazy"||window.navigator?.connection?.saveData===!0)return;function p(S){let w=S.tagName==="FORM"?S.getAttribute("action"):S.getAttribute("href");if(!w)return;let R=S.tagName==="A"?S.pathname:new URL(w,window.location.origin).pathname;du.has(R)||Jc.add(R)}async function g(){document.querySelectorAll("a[data-discover], form[data-discover]").forEach(p);let S=Array.from(Jc.keys()).filter(w=>du.has(w)?(Jc.delete(w),!1):!0);if(S.length!==0)try{await s1(S,e,n)}catch(w){console.error("Failed to fetch manifest patches",w)}}let x=pT(g,100);g(),new MutationObserver(()=>x()).observe(document.documentElement,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["data-discover","href","action"]})},[o,e,n]);const f={future:{unstable_middleware:!1,unstable_subResourceIntegrity:!1},isSpaMode:!0,ssr:!0,criticalCss:"",manifest:{routes:{},version:"1",url:"",entry:{module:"",imports:[]}},routeDiscovery:{mode:"lazy",manifestPath:"/__manifest"},routeModules:{}};return v.createElement(jh.Provider,{value:!0},v.createElement(i1,{location:d},v.createElement(xn.Provider,{value:f},v.createElement(Cu,{router:c,flushSync:qh.flushSync}))))}function Xs(e,n){let r=n&&e.id in n.loaderData,o=n?.loaderData[e.id],s=n?.errors&&e.id in n.errors,c=n?.errors?.[e.id],d=e.clientLoader?.hydrate===!0||!e.hasLoader||e.hasComponent&&!e.element,h={id:e.id,element:e.element,errorElement:e.errorElement,handle:e.handle,hasErrorBoundary:e.hasErrorBoundary,hydrateFallbackElement:e.hydrateFallbackElement,index:e.index,loader:e.clientLoader?async(f,p)=>{try{return await e.clientLoader({...f,serverLoader:()=>{if(Iv("loader",e.id,e.hasLoader),d){if(r)return o;if(s)throw c}return Pc(p)}})}finally{d=!1}}:(f,p)=>Pc(p),action:e.clientAction?(f,p)=>e.clientAction({...f,serverAction:async()=>(Iv("action",e.id,e.hasLoader),await Pc(p))}):e.hasAction?(f,p)=>Pc(p):()=>{throw Qc("action",e.id)},path:e.path,shouldRevalidate:e.shouldRevalidate,hasLoader:!0,hasClientLoader:e.clientLoader!=null,hasAction:e.hasAction,hasClientAction:e.clientAction!=null,hasShouldRevalidate:e.shouldRevalidate!=null};return typeof h.loader=="function"&&(h.loader.hydrate=Ro(e.id,e.clientLoader,e.hasLoader,!1)),h}function Pc(e){return ve(typeof e=="function","Invalid singleFetch parameter"),e()}function Iv(e,n,r){if(!r){let s=`You are trying to call ${e==="action"?"serverAction()":"serverLoader()"} on a route that does not have a server ${e} (routeId: "${n}")`;throw console.error(s),new Jt(400,"Bad Request",new Error(s),!0)}}var Jc=new Set,dT=1e3,du=new Set,fT=7680;function mT(e){if(e.length===0)return null;if(e.length===1)return new URL(`${e[0]}.manifest`,window.location.origin);let r=(window.__router.basename??"").replace(/^\/|\/$/g,""),o=new URL(`${r}/.manifest`,window.location.origin);return e.sort().forEach(s=>o.searchParams.append("p",s)),o}async function s1(e,n,r,o){let s=mT(e);if(s==null)return;if(s.toString().length>fT){Jc.clear();return}let c=await r(new Request(s,{signal:o}));if(!c.body||c.status<200||c.status>=300)throw new Error("Unable to fetch new route matches from the server");let d=await n(c.body,{temporaryReferences:void 0});if(d.type!=="manifest")throw new Error("Failed to patch routes");e.forEach(h=>hT(h,du)),d.patches.forEach(h=>{window.__router.patchRoutes(h.parentId??null,[Xs(h)])})}function hT(e,n){if(n.size>=dT){let r=n.values().next().value;n.delete(r)}n.add(e)}function pT(e,n){let r;return(...o)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...o),n)}}var th=new TextEncoder,Gv="</body></html>";function gT(e){let n=new TextDecoder,r,o=new Promise(f=>r=f),s=!1,c=[],d=null;function h(f){for(let p of c){let g=n.decode(p,{stream:!0});g.endsWith(Gv)&&(g=g.slice(0,-Gv.length)),f.enqueue(th.encode(g))}c.length=0,d=null}return new TransformStream({transform(f,p){c.push(f),!d&&(d=setTimeout(async()=>{h(p),s||(s=!0,yT(e,p).catch(g=>p.error(g)).then(r))},0))},async flush(f){await o,d&&(clearTimeout(d),h(f)),f.enqueue(th.encode("</body></html>"))}})}async function yT(e,n){let r=new TextDecoder("utf-8",{fatal:!0});const o=e.getReader();try{let c;for(;(c=await o.read())&&!c.done;){const d=c.value;try{Sm(JSON.stringify(r.decode(d,{stream:!0})),n)}catch{let f=JSON.stringify(btoa(String.fromCodePoint(...d)));Sm(`Uint8Array.from(atob(${f}), m => m.codePointAt(0))`,n)}}}finally{o.releaseLock()}let s=r.decode();s.length&&Sm(JSON.stringify(s),n)}function Sm(e,n){n.enqueue(th.encode(`<script>${vT(`(self.__FLIGHT_DATA||=[]).push(${e})`)}<\/script>`))}function vT(e){return e.replace(/<!--/g,"<\\!--").replace(/<\/(script)/gi,"</\\$1")}var bT="use",Xv=Lj[bT];function xT(e){if(Xv)return Xv(e);throw new Error("React Router v7 requires React 19+ for RSC features.")}async function wT({request:e,fetchServer:n,createFromReadableStream:r,renderHTML:o,hydrate:s=!0}){const c=new URL(e.url),h=ET(c)||jT(c)||e.headers.has("rsc-action-id"),f=await n(e);if(h||f.headers.get("React-Router-Resource")==="true")return f;if(!f.body)throw new Error("Missing body in server response");let p=null;s&&(p=f.clone());const g=f.body;let x;const b=async()=>x||(x=r(g),x);try{const S=await b();if(f.status===yi&&S.type==="redirect"){const N=new Headers(f.headers);return N.delete("Content-Encoding"),N.delete("Content-Length"),N.delete("Content-Type"),N.delete("x-remix-response"),N.set("Location",S.location),new Response(p?.body||"",{headers:N,status:S.status,statusText:f.statusText})}const w=await o(b),R=new Headers(f.headers);if(R.set("Content-Type","text/html"),!s)return new Response(w,{status:f.status,headers:R});if(!p?.body)throw new Error("Failed to clone server response");const E=w.pipeThrough(gT(p.body));return new Response(E,{status:f.status,headers:R})}catch(S){if(S instanceof Response)return S;throw S}}function ST({getPayload:e}){const n=xT(e());if(n.type==="redirect")throw new Response(null,{status:n.status,headers:{Location:n.location}});if(n.type!=="render")return null;let r={...n.loaderData};for(const d of n.matches)Ro(d.id,d.clientLoader,d.hasLoader,!1)&&(d.hydrateFallbackElement||!d.hasLoader)&&delete r[d.id];const o={actionData:n.actionData,actionHeaders:{},basename:n.basename,errors:n.errors,loaderData:r,loaderHeaders:{},location:n.location,statusCode:200,matches:n.matches.map(d=>({params:d.params,pathname:d.pathname,pathnameBase:d.pathnameBase,route:{id:d.id,action:d.hasAction||!!d.clientAction,handle:d.handle,hasErrorBoundary:d.hasErrorBoundary,loader:d.hasLoader||!!d.clientLoader,index:d.index,path:d.path,shouldRevalidate:d.shouldRevalidate}}))},s=Fh(n.matches.reduceRight((d,h)=>{const f={id:h.id,action:h.hasAction||!!h.clientAction,element:h.element,errorElement:h.errorElement,handle:h.handle,hasErrorBoundary:!!h.errorElement,hydrateFallbackElement:h.hydrateFallbackElement,index:h.index,loader:h.hasLoader||!!h.clientLoader,path:h.path,shouldRevalidate:h.shouldRevalidate};return d.length>0&&(f.children=d),[f]},[]),o),c={future:{unstable_middleware:!1,unstable_subResourceIntegrity:!1},isSpaMode:!1,ssr:!0,criticalCss:"",manifest:{routes:{},version:"1",url:"",entry:{module:"",imports:[]}},routeDiscovery:{mode:"lazy",manifestPath:"/__manifest"},routeModules:{}};return v.createElement(jh.Provider,{value:!0},v.createElement(i1,{location:n.location},v.createElement(xn.Provider,{value:c},v.createElement(Yh,{context:o,router:s,hydrate:!1,nonce:n.nonce}))))}function ET(e){return e.pathname.endsWith(".rsc")}function jT(e){return e.pathname.endsWith(".manifest")}function RT(){let e=new TextEncoder,n=null,r=new ReadableStream({start(o){if(typeof window>"u")return;let s=c=>{typeof c=="string"?o.enqueue(e.encode(c)):o.enqueue(c)};window.__FLIGHT_DATA||(window.__FLIGHT_DATA=[]),window.__FLIGHT_DATA.forEach(s),window.__FLIGHT_DATA.push=c=>(s(c),0),n=o}});return typeof document<"u"&&document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{n?.close()}):n?.close(),r}function l1(e){if(!e)return null;let n=Object.entries(e),r={};for(let[o,s]of n)if(s&&s.__type==="RouteErrorResponse")r[o]=new Jt(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let c=window[s.__subType];if(typeof c=="function")try{let d=new c(s.message);d.stack=s.stack,r[o]=d}catch{}}if(r[o]==null){let c=new Error(s.message);c.stack=s.stack,r[o]=c}}else r[o]=s;return r}function c1(e){return v.createElement(Cu,{flushSync:qh.flushSync,...e})}var Se=null,Ds=null;function NT(){if(!Se&&window.__reactRouterContext&&window.__reactRouterManifest&&window.__reactRouterRouteModules){if(window.__reactRouterManifest.sri===!0){const e=document.querySelector("script[rr-importmap]");if(e?.textContent)try{window.__reactRouterManifest.sri=JSON.parse(e.textContent).integrity}catch(n){console.error("Failed to parse import map",n)}}Se={context:window.__reactRouterContext,manifest:window.__reactRouterManifest,routeModules:window.__reactRouterRouteModules,stateDecodingPromise:void 0,router:void 0,routerInitialized:!1}}}function TT({unstable_getContext:e}){if(NT(),!Se)throw new Error("You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`");let n=Se;if(!Se.stateDecodingPromise){let c=Se.context.stream;ve(c,"No stream found for single fetch decoding"),Se.context.stream=void 0,Se.stateDecodingPromise=Ou(c,window).then(d=>{Se.context.state=d.value,n.stateDecodingPromise.value=!0}).catch(d=>{n.stateDecodingPromise.error=d})}if(Se.stateDecodingPromise.error)throw Se.stateDecodingPromise.error;if(!Se.stateDecodingPromise.value)throw Se.stateDecodingPromise;let r=ll(Se.manifest.routes,Se.routeModules,Se.context.state,Se.context.ssr,Se.context.isSpaMode),o;if(Se.context.isSpaMode){let{loaderData:c}=Se.context.state;Se.manifest.routes.root?.hasLoader&&c&&"root"in c&&(o={loaderData:{root:c.root}})}else o=Kh(Se.context.state,r,c=>({clientLoader:Se.routeModules[c]?.clientLoader,hasLoader:Se.manifest.routes[c]?.hasLoader===!0,hasHydrateFallback:Se.routeModules[c]?.HydrateFallback!=null}),window.location,window.__reactRouterContext?.basename,Se.context.isSpaMode),o&&o.errors&&(o.errors=l1(o.errors));let s=Eo({routes:r,history:tl(),basename:Se.context.basename,unstable_getContext:e,hydrationData:o,hydrationRouteProperties:sl,mapRouteProperties:Ei,future:{unstable_middleware:Se.context.future.unstable_middleware},dataStrategy:hw(()=>s,Se.manifest,Se.routeModules,Se.context.ssr,Se.context.basename),patchRoutesOnNavigation:Nw(Se.manifest,Se.routeModules,Se.context.ssr,Se.context.routeDiscovery,Se.context.isSpaMode,Se.context.basename)});return Se.router=s,s.state.initialized&&(Se.routerInitialized=!0,s.initialize()),s.createRoutesForHMR=jw,window.__reactRouterDataRouter=s,s}function CT(e){Ds||(Ds=TT({unstable_getContext:e.unstable_getContext}));let[n,r]=v.useState(void 0);v.useEffect(()=>{},[]),v.useEffect(()=>{},[n]);let[o,s]=v.useState(Ds.state.location);return v.useLayoutEffect(()=>{Se&&Se.router&&!Se.routerInitialized&&(Se.routerInitialized=!0,Se.router.initialize())},[]),v.useLayoutEffect(()=>{if(Se&&Se.router)return Se.router.subscribe(c=>{c.location!==o&&s(c.location)})},[o]),ve(Se,"ssrInfo unavailable for HydratedRouter"),Tw(Ds,Se.manifest,Se.routeModules,Se.context.ssr,Se.context.routeDiscovery,Se.context.isSpaMode),v.createElement(v.Fragment,null,v.createElement(xn.Provider,{value:{manifest:Se.manifest,routeModules:Se.routeModules,future:Se.context.future,criticalCss:n,ssr:Se.context.ssr,isSpaMode:Se.context.isSpaMode,routeDiscovery:Se.context.routeDiscovery}},v.createElement(Hh,{location:o},v.createElement(c1,{router:Ds}))),v.createElement(v.Fragment,null))}const _T=Object.freeze(Object.defineProperty({__proto__:null,HydratedRouter:CT,RouterProvider:c1},Symbol.toStringTag,{value:"Module"}));/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const OT=Object.freeze(Object.defineProperty({__proto__:null,Await:JR,BrowserRouter:kw,Form:Bh,HashRouter:i5,IDLE_BLOCKER:Nr,IDLE_FETCHER:wu,IDLE_NAVIGATION:Us,Link:tn,Links:QN,MemoryRouter:WR,Meta:WN,NavLink:Uw,Navigate:Yx,NavigationType:Qb,Outlet:Fx,PrefetchPageLinks:Uh,Route:Bn,Router:Br,RouterProvider:Cu,Routes:qx,Scripts:Ow,ScrollRestoration:Hw,ServerRouter:N5,StaticRouter:h5,StaticRouterProvider:Yh,UNSAFE_DataRouterContext:Qn,UNSAFE_DataRouterStateContext:Lr,UNSAFE_ErrorResponseImpl:Jt,UNSAFE_FetchersContext:rl,UNSAFE_FrameworkContext:xn,UNSAFE_LocationContext:Si,UNSAFE_NavigationContext:ba,UNSAFE_RSCDefaultRootErrorBoundary:iT,UNSAFE_RemixErrorBoundary:Hh,UNSAFE_RouteContext:xa,UNSAFE_ServerMode:Qw,UNSAFE_SingleFetchRedirectSymbol:an,UNSAFE_ViewTransitionContext:nl,UNSAFE_WithComponentProps:rN,UNSAFE_WithErrorBoundaryProps:oN,UNSAFE_WithHydrateFallbackProps:iN,UNSAFE_createBrowserHistory:tl,UNSAFE_createClientRoutes:ll,UNSAFE_createClientRoutesWithHMRRevalidationOptOut:jw,UNSAFE_createRouter:Eo,UNSAFE_decodeViaTurboStream:Ou,UNSAFE_deserializeErrors:l1,UNSAFE_getHydrationData:Kh,UNSAFE_getPatchRoutesOnNavigationFunction:Nw,UNSAFE_getTurboStreamSingleFetchDataStrategy:hw,UNSAFE_hydrationRouteProperties:sl,UNSAFE_invariant:ve,UNSAFE_mapRouteProperties:Ei,UNSAFE_shouldHydrateRouteLoader:Ro,UNSAFE_useFogOFWarDiscovery:Tw,UNSAFE_useScrollRestoration:Yw,UNSAFE_withComponentProps:Gx,UNSAFE_withErrorBoundaryProps:Kx,UNSAFE_withHydrateFallbackProps:Vx,createBrowserRouter:a5,createCookie:Gh,createCookieSessionStorage:aT,createHashRouter:n5,createMemoryRouter:Px,createMemorySessionStorage:nT,createPath:ia,createRequestHandler:V5,createRoutesFromChildren:qs,createRoutesFromElements:aN,createRoutesStub:T5,createSearchParams:ou,createSession:Qh,createSessionStorage:n1,createStaticHandler:y5,createStaticRouter:Fh,data:lx,generatePath:oR,href:rT,isCookie:Xh,isRouteErrorResponse:Et,isSession:tT,matchPath:yo,matchRoutes:ma,parsePath:Ma,redirect:al,redirectDocument:cx,renderMatches:nN,replace:ux,resolvePath:ox,unstable_HistoryRouter:Lw,unstable_RSCHydratedRouter:uT,unstable_RSCStaticRouter:ST,unstable_RouterContextProvider:gn,unstable_createCallServer:oT,unstable_createContext:ex,unstable_getRSCStream:RT,unstable_routeRSCServerRequest:wT,unstable_setDevServerHooks:P5,unstable_usePrompt:m5,useActionData:Tu,useAsyncError:GR,useAsyncValue:Hx,useBeforeUnload:d5,useBlocker:Bx,useFetcher:c5,useFetchers:u5,useFormAction:Pw,useHref:Ox,useInRouterContext:zr,useLinkClickHandler:$w,useLoaderData:Nu,useLocation:wa,useMatch:LR,useMatches:Ru,useNavigate:Ur,useNavigation:Ux,useNavigationType:kR,useOutlet:kx,useOutletContext:UR,useParams:ju,useResolvedPath:jo,useRevalidator:qR,useRouteError:ol,useRouteLoaderData:IR,useRoutes:Lx,useSearchParams:o5,useSubmit:Ph,useViewTransitionState:Fw},Symbol.toStringTag,{value:"Module"}));function u1(e){var n,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(r=u1(e[n]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function hi(){for(var e,n,r=0,o="",s=arguments.length;r<s;r++)(e=arguments[r])&&(n=u1(e))&&(o&&(o+=" "),o+=n);return o}function DT(e){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}DT(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var cl=e=>typeof e=="number"&&!isNaN(e),vi=e=>typeof e=="string",Gn=e=>typeof e=="function",AT=e=>vi(e)||cl(e),ah=e=>vi(e)||Gn(e)?e:null,MT=(e,n)=>e===!1||cl(e)&&e>0?e:n,nh=e=>v.isValidElement(e)||vi(e)||Gn(e)||cl(e);function kT(e,n,r=300){let{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${r}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(n,r)})})}function LT({enter:e,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:s=300}){return function({children:c,position:d,preventExitTransition:h,done:f,nodeRef:p,isIn:g,playToast:x}){let b=r?`${e}--${d}`:e,S=r?`${n}--${d}`:n,w=v.useRef(0);return v.useLayoutEffect(()=>{let R=p.current,E=b.split(" "),N=_=>{_.target===p.current&&(x(),R.removeEventListener("animationend",N),R.removeEventListener("animationcancel",N),w.current===0&&_.type!=="animationcancel"&&R.classList.remove(...E))};R.classList.add(...E),R.addEventListener("animationend",N),R.addEventListener("animationcancel",N)},[]),v.useEffect(()=>{let R=p.current,E=()=>{R.removeEventListener("animationend",E),o?kT(R,f,s):f()};g||(h?E():(w.current=1,R.className+=` ${S}`,R.addEventListener("animationend",E)))},[g]),Ne.createElement(Ne.Fragment,null,c)}}function Vv(e,n){return{content:d1(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:n}}function d1(e,n,r=!1){return v.isValidElement(e)&&!vi(e.type)?v.cloneElement(e,{closeToast:n.closeToast,toastProps:n,data:n.data,isPaused:r}):Gn(e)?e({closeToast:n.closeToast,toastProps:n,data:n.data,isPaused:r}):e}function zT({closeToast:e,theme:n,ariaLabel:r="close"}){return Ne.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),e(!0)},"aria-label":r},Ne.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Ne.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function UT({delay:e,isRunning:n,closeToast:r,type:o="default",hide:s,className:c,controlledProgress:d,progress:h,rtl:f,isIn:p,theme:g}){let x=s||d&&h===0,b={animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};d&&(b.transform=`scaleX(${h})`);let S=hi("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":f}),w=Gn(c)?c({rtl:f,type:o,defaultClassName:S}):hi(S,c),R={[d&&h>=1?"onTransitionEnd":"onAnimationEnd"]:d&&h<1?null:()=>{p&&r()}};return Ne.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":x},Ne.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${o}`}),Ne.createElement("div",{role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer",className:w,style:b,...R}))}var HT=1,f1=()=>`${HT++}`;function BT(e,n,r){let o=1,s=0,c=[],d=[],h=n,f=new Map,p=new Set,g=_=>(p.add(_),()=>p.delete(_)),x=()=>{d=Array.from(f.values()),p.forEach(_=>_())},b=({containerId:_,toastId:O,updateId:M})=>{let D=_?_!==e:e!==1,T=f.has(O)&&M==null;return D||T},S=(_,O)=>{f.forEach(M=>{var D;(O==null||O===M.props.toastId)&&((D=M.toggle)==null||D.call(M,_))})},w=_=>{var O,M;(M=(O=_.props)==null?void 0:O.onClose)==null||M.call(O,_.removalReason),_.isActive=!1},R=_=>{if(_==null)f.forEach(w);else{let O=f.get(_);O&&w(O)}x()},E=()=>{s-=c.length,c=[]},N=_=>{var O,M;let{toastId:D,updateId:T}=_.props,k=T==null;_.staleId&&f.delete(_.staleId),_.isActive=!0,f.set(D,_),x(),r(Vv(_,k?"added":"updated")),k&&((M=(O=_.props).onOpen)==null||M.call(O))};return{id:e,props:h,observe:g,toggle:S,removeToast:R,toasts:f,clearQueue:E,buildToast:(_,O)=>{if(b(O))return;let{toastId:M,updateId:D,data:T,staleId:k,delay:L}=O,H=D==null;H&&s++;let G={...h,style:h.toastStyle,key:o++,...Object.fromEntries(Object.entries(O).filter(([te,le])=>le!=null)),toastId:M,updateId:D,data:T,isIn:!1,className:ah(O.className||h.toastClassName),progressClassName:ah(O.progressClassName||h.progressClassName),autoClose:O.isLoading?!1:MT(O.autoClose,h.autoClose),closeToast(te){f.get(M).removalReason=te,R(M)},deleteToast(){let te=f.get(M);if(te!=null){if(r(Vv(te,"removed")),f.delete(M),s--,s<0&&(s=0),c.length>0){N(c.shift());return}x()}}};G.closeButton=h.closeButton,O.closeButton===!1||nh(O.closeButton)?G.closeButton=O.closeButton:O.closeButton===!0&&(G.closeButton=nh(h.closeButton)?h.closeButton:!0);let W={content:_,props:G,staleId:k};h.limit&&h.limit>0&&s>h.limit&&H?c.push(W):cl(L)?setTimeout(()=>{N(W)},L):N(W)},setProps(_){h=_},setToggle:(_,O)=>{let M=f.get(_);M&&(M.toggle=O)},isToastActive:_=>{var O;return(O=f.get(_))==null?void 0:O.isActive},getSnapshot:()=>d}}var na=new Map,Vs=[],rh=new Set,$T=e=>rh.forEach(n=>n(e)),m1=()=>na.size>0;function PT(){Vs.forEach(e=>p1(e.content,e.options)),Vs=[]}var YT=(e,{containerId:n})=>{var r;return(r=na.get(n||1))==null?void 0:r.toasts.get(e)};function h1(e,n){var r;if(n)return!!((r=na.get(n))!=null&&r.isToastActive(e));let o=!1;return na.forEach(s=>{s.isToastActive(e)&&(o=!0)}),o}function FT(e){if(!m1()){Vs=Vs.filter(n=>e!=null&&n.options.toastId!==e);return}if(e==null||AT(e))na.forEach(n=>{n.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let n=na.get(e.containerId);n?n.removeToast(e.id):na.forEach(r=>{r.removeToast(e.id)})}}var qT=(e={})=>{na.forEach(n=>{n.props.limit&&(!e.containerId||n.id===e.containerId)&&n.clearQueue()})};function p1(e,n){nh(e)&&(m1()||Vs.push({content:e,options:n}),na.forEach(r=>{r.buildToast(e,n)}))}function IT(e){var n;(n=na.get(e.containerId||1))==null||n.setToggle(e.id,e.fn)}function g1(e,n){na.forEach(r=>{(n==null||!(n!=null&&n.containerId)||n?.containerId===r.id)&&r.toggle(e,n?.id)})}function GT(e){let n=e.containerId||1;return{subscribe(r){let o=BT(n,e,$T);na.set(n,o);let s=o.observe(r);return PT(),()=>{s(),na.delete(n)}},setProps(r){var o;(o=na.get(n))==null||o.setProps(r)},getSnapshot(){var r;return(r=na.get(n))==null?void 0:r.getSnapshot()}}}function XT(e){return rh.add(e),()=>{rh.delete(e)}}function VT(e){return e&&(vi(e.toastId)||cl(e.toastId))?e.toastId:f1()}function ul(e,n){return p1(e,n),n.toastId}function ku(e,n){return{...n,type:n&&n.type||e,toastId:VT(n)}}function Lu(e){return(n,r)=>ul(n,ku(e,r))}function he(e,n){return ul(e,ku("default",n))}he.loading=(e,n)=>ul(e,ku("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...n}));function QT(e,{pending:n,error:r,success:o},s){let c;n&&(c=vi(n)?he.loading(n,s):he.loading(n.render,{...s,...n}));let d={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(p,g,x)=>{if(g==null){he.dismiss(c);return}let b={type:p,...d,...s,data:x},S=vi(g)?{render:g}:g;return c?he.update(c,{...b,...S}):he(S.render,{...b,...S}),x},f=Gn(e)?e():e;return f.then(p=>h("success",o,p)).catch(p=>h("error",r,p)),f}he.promise=QT;he.success=Lu("success");he.info=Lu("info");he.error=Lu("error");he.warning=Lu("warning");he.warn=he.warning;he.dark=(e,n)=>ul(e,ku("default",{theme:"dark",...n}));function KT(e){FT(e)}he.dismiss=KT;he.clearWaitingQueue=qT;he.isActive=h1;he.update=(e,n={})=>{let r=YT(e,n);if(r){let{props:o,content:s}=r,c={delay:100,...o,...n,toastId:n.toastId||e,updateId:f1()};c.toastId!==e&&(c.staleId=e);let d=c.render||s;delete c.render,ul(d,c)}};he.done=e=>{he.update(e,{progress:1})};he.onChange=XT;he.play=e=>g1(!0,e);he.pause=e=>g1(!1,e);function ZT(e){var n;let{subscribe:r,getSnapshot:o,setProps:s}=v.useRef(GT(e)).current;s(e);let c=(n=v.useSyncExternalStore(r,o,o))==null?void 0:n.slice();function d(h){if(!c)return[];let f=new Map;return e.newestOnTop&&c.reverse(),c.forEach(p=>{let{position:g}=p.props;f.has(g)||f.set(g,[]),f.get(g).push(p)}),Array.from(f,p=>h(p[0],p[1]))}return{getToastToRender:d,isToastActive:h1,count:c?.length}}function WT(e){let[n,r]=v.useState(!1),[o,s]=v.useState(!1),c=v.useRef(null),d=v.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:f,closeToast:p,onClick:g,closeOnClick:x}=e;IT({id:e.toastId,containerId:e.containerId,fn:r}),v.useEffect(()=>{if(e.pauseOnFocusLoss)return b(),()=>{S()}},[e.pauseOnFocusLoss]);function b(){document.hasFocus()||N(),window.addEventListener("focus",E),window.addEventListener("blur",N)}function S(){window.removeEventListener("focus",E),window.removeEventListener("blur",N)}function w(k){if(e.draggable===!0||e.draggable===k.pointerType){_();let L=c.current;d.canCloseOnClick=!0,d.canDrag=!0,L.style.transition="none",e.draggableDirection==="x"?(d.start=k.clientX,d.removalDistance=L.offsetWidth*(e.draggablePercent/100)):(d.start=k.clientY,d.removalDistance=L.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function R(k){let{top:L,bottom:H,left:G,right:W}=c.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&k.clientX>=G&&k.clientX<=W&&k.clientY>=L&&k.clientY<=H?N():E()}function E(){r(!0)}function N(){r(!1)}function _(){d.didMove=!1,document.addEventListener("pointermove",M),document.addEventListener("pointerup",D)}function O(){document.removeEventListener("pointermove",M),document.removeEventListener("pointerup",D)}function M(k){let L=c.current;if(d.canDrag&&L){d.didMove=!0,n&&N(),e.draggableDirection==="x"?d.delta=k.clientX-d.start:d.delta=k.clientY-d.start,d.start!==k.clientX&&(d.canCloseOnClick=!1);let H=e.draggableDirection==="x"?`${d.delta}px, var(--y)`:`0, calc(${d.delta}px + var(--y))`;L.style.transform=`translate3d(${H},0)`,L.style.opacity=`${1-Math.abs(d.delta/d.removalDistance)}`}}function D(){O();let k=c.current;if(d.canDrag&&d.didMove&&k){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance){s(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let T={onPointerDown:w,onPointerUp:R};return h&&f&&(T.onMouseEnter=N,e.stacked||(T.onMouseLeave=E)),x&&(T.onClick=k=>{g&&g(k),d.canCloseOnClick&&p(!0)}),{playToast:E,pauseToast:N,isRunning:n,preventExitTransition:o,toastRef:c,eventHandlers:T}}var JT=typeof window<"u"?v.useLayoutEffect:v.useEffect,zu=({theme:e,type:n,isLoading:r,...o})=>Ne.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o});function eC(e){return Ne.createElement(zu,{...e},Ne.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function tC(e){return Ne.createElement(zu,{...e},Ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function aC(e){return Ne.createElement(zu,{...e},Ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function nC(e){return Ne.createElement(zu,{...e},Ne.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function rC(){return Ne.createElement("div",{className:"Toastify__spinner"})}var ih={info:tC,warning:eC,success:aC,error:nC,spinner:rC},iC=e=>e in ih;function oC({theme:e,type:n,isLoading:r,icon:o}){let s=null,c={theme:e,type:n};return o===!1||(Gn(o)?s=o({...c,isLoading:r}):v.isValidElement(o)?s=v.cloneElement(o,c):r?s=ih.spinner():iC(n)&&(s=ih[n](c))),s}var sC=e=>{let{isRunning:n,preventExitTransition:r,toastRef:o,eventHandlers:s,playToast:c}=WT(e),{closeButton:d,children:h,autoClose:f,onClick:p,type:g,hideProgressBar:x,closeToast:b,transition:S,position:w,className:R,style:E,progressClassName:N,updateId:_,role:O,progress:M,rtl:D,toastId:T,deleteToast:k,isIn:L,isLoading:H,closeOnClick:G,theme:W,ariaLabel:te}=e,le=hi("Toastify__toast",`Toastify__toast-theme--${W}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":D},{"Toastify__toast--close-on-click":G}),de=Gn(R)?R({rtl:D,position:w,type:g,defaultClassName:le}):hi(le,R),re=oC(e),U=!!M||!f,X={closeToast:b,type:g,theme:W},J=null;return d===!1||(Gn(d)?J=d(X):v.isValidElement(d)?J=v.cloneElement(d,X):J=zT(X)),Ne.createElement(S,{isIn:L,done:k,position:w,preventExitTransition:r,nodeRef:o,playToast:c},Ne.createElement("div",{id:T,tabIndex:0,onClick:p,"data-in":L,className:de,...s,style:E,ref:o,...L&&{role:O,"aria-label":te}},re!=null&&Ne.createElement("div",{className:hi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!H})},re),d1(h,e,!n),J,!e.customProgressBar&&Ne.createElement(UT,{..._&&!U?{key:`p-${_}`}:{},rtl:D,theme:W,delay:f,isRunning:n,isIn:L,closeToast:b,hide:x,type:g,className:N,controlledProgress:U,progress:M||0})))},lC=(e,n=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:n}),cC=LT(lC("bounce",!0)),uC={position:"top-right",transition:cC,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function dC(e){let n={...uC,...e},r=e.stacked,[o,s]=v.useState(!0),c=v.useRef(null),{getToastToRender:d,isToastActive:h,count:f}=ZT(n),{className:p,style:g,rtl:x,containerId:b,hotKeys:S}=n;function w(E){let N=hi("Toastify__toast-container",`Toastify__toast-container--${E}`,{"Toastify__toast-container--rtl":x});return Gn(p)?p({position:E,rtl:x,defaultClassName:N}):hi(N,ah(p))}function R(){r&&(s(!0),he.play())}return JT(()=>{var E;if(r){let N=c.current.querySelectorAll('[data-in="true"]'),_=12,O=(E=n.position)==null?void 0:E.includes("top"),M=0,D=0;Array.from(N).reverse().forEach((T,k)=>{let L=T;L.classList.add("Toastify__toast--stacked"),k>0&&(L.dataset.collapsed=`${o}`),L.dataset.pos||(L.dataset.pos=O?"top":"bot");let H=M*(o?.2:1)+(o?0:_*k);L.style.setProperty("--y",`${O?H:H*-1}px`),L.style.setProperty("--g",`${_}`),L.style.setProperty("--s",`${1-(o?D:0)}`),M+=L.offsetHeight,D+=.025})}},[o,f,r]),v.useEffect(()=>{function E(N){var _;let O=c.current;S(N)&&((_=O.querySelector('[tabIndex="0"]'))==null||_.focus(),s(!1),he.pause()),N.key==="Escape"&&(document.activeElement===O||O!=null&&O.contains(document.activeElement))&&(s(!0),he.play())}return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[S]),Ne.createElement("section",{ref:c,className:"Toastify",id:b,onMouseEnter:()=>{r&&(s(!1),he.pause())},onMouseLeave:R,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":n["aria-label"]},d((E,N)=>{let _=N.length?{...g}:{...g,pointerEvents:"none"};return Ne.createElement("div",{tabIndex:-1,className:w(E),"data-stacked":r,style:_,key:`c-${E}`},N.map(({content:O,props:M})=>Ne.createElement(sC,{...M,stacked:r,collapseAll:R,isIn:h(M.toastId,M.containerId),key:`t-${M.key}`},O)))}))}function y1(e,n){return function(){return e.apply(n,arguments)}}const{toString:fC}=Object.prototype,{getPrototypeOf:Zh}=Object,{iterator:Uu,toStringTag:v1}=Symbol,Hu=(e=>n=>{const r=fC.call(n);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),nn=e=>(e=e.toLowerCase(),n=>Hu(n)===e),Bu=e=>n=>typeof n===e,{isArray:To}=Array,Qs=Bu("undefined");function dl(e){return e!==null&&!Qs(e)&&e.constructor!==null&&!Qs(e.constructor)&&pa(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const b1=nn("ArrayBuffer");function mC(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&b1(e.buffer),n}const hC=Bu("string"),pa=Bu("function"),x1=Bu("number"),fl=e=>e!==null&&typeof e=="object",pC=e=>e===!0||e===!1,eu=e=>{if(Hu(e)!=="object")return!1;const n=Zh(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(v1 in e)&&!(Uu in e)},gC=e=>{if(!fl(e)||dl(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},yC=nn("Date"),vC=nn("File"),bC=nn("Blob"),xC=nn("FileList"),wC=e=>fl(e)&&pa(e.pipe),SC=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||pa(e.append)&&((n=Hu(e))==="formdata"||n==="object"&&pa(e.toString)&&e.toString()==="[object FormData]"))},EC=nn("URLSearchParams"),[jC,RC,NC,TC]=["ReadableStream","Request","Response","Headers"].map(nn),CC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ml(e,n,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let o,s;if(typeof e!="object"&&(e=[e]),To(e))for(o=0,s=e.length;o<s;o++)n.call(null,e[o],o,e);else{if(dl(e))return;const c=r?Object.getOwnPropertyNames(e):Object.keys(e),d=c.length;let h;for(o=0;o<d;o++)h=c[o],n.call(null,e[h],h,e)}}function w1(e,n){if(dl(e))return null;n=n.toLowerCase();const r=Object.keys(e);let o=r.length,s;for(;o-- >0;)if(s=r[o],n===s.toLowerCase())return s;return null}const mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,S1=e=>!Qs(e)&&e!==mi;function oh(){const{caseless:e}=S1(this)&&this||{},n={},r=(o,s)=>{const c=e&&w1(n,s)||s;eu(n[c])&&eu(o)?n[c]=oh(n[c],o):eu(o)?n[c]=oh({},o):To(o)?n[c]=o.slice():n[c]=o};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&ml(arguments[o],r);return n}const _C=(e,n,r,{allOwnKeys:o}={})=>(ml(n,(s,c)=>{r&&pa(s)?e[c]=y1(s,r):e[c]=s},{allOwnKeys:o}),e),OC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),DC=(e,n,r,o)=>{e.prototype=Object.create(n.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),r&&Object.assign(e.prototype,r)},AC=(e,n,r,o)=>{let s,c,d;const h={};if(n=n||{},e==null)return n;do{for(s=Object.getOwnPropertyNames(e),c=s.length;c-- >0;)d=s[c],(!o||o(d,e,n))&&!h[d]&&(n[d]=e[d],h[d]=!0);e=r!==!1&&Zh(e)}while(e&&(!r||r(e,n))&&e!==Object.prototype);return n},MC=(e,n,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=n.length;const o=e.indexOf(n,r);return o!==-1&&o===r},kC=e=>{if(!e)return null;if(To(e))return e;let n=e.length;if(!x1(n))return null;const r=new Array(n);for(;n-- >0;)r[n]=e[n];return r},LC=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Zh(Uint8Array)),zC=(e,n)=>{const o=(e&&e[Uu]).call(e);let s;for(;(s=o.next())&&!s.done;){const c=s.value;n.call(e,c[0],c[1])}},UC=(e,n)=>{let r;const o=[];for(;(r=e.exec(n))!==null;)o.push(r);return o},HC=nn("HTMLFormElement"),BC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,s){return o.toUpperCase()+s}),Qv=(({hasOwnProperty:e})=>(n,r)=>e.call(n,r))(Object.prototype),$C=nn("RegExp"),E1=(e,n)=>{const r=Object.getOwnPropertyDescriptors(e),o={};ml(r,(s,c)=>{let d;(d=n(s,c,e))!==!1&&(o[c]=d||s)}),Object.defineProperties(e,o)},PC=e=>{E1(e,(n,r)=>{if(pa(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const o=e[r];if(pa(o)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},YC=(e,n)=>{const r={},o=s=>{s.forEach(c=>{r[c]=!0})};return To(e)?o(e):o(String(e).split(n)),r},FC=()=>{},qC=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function IC(e){return!!(e&&pa(e.append)&&e[v1]==="FormData"&&e[Uu])}const GC=e=>{const n=new Array(10),r=(o,s)=>{if(fl(o)){if(n.indexOf(o)>=0)return;if(dl(o))return o;if(!("toJSON"in o)){n[s]=o;const c=To(o)?[]:{};return ml(o,(d,h)=>{const f=r(d,s+1);!Qs(f)&&(c[h]=f)}),n[s]=void 0,c}}return o};return r(e,0)},XC=nn("AsyncFunction"),VC=e=>e&&(fl(e)||pa(e))&&pa(e.then)&&pa(e.catch),j1=((e,n)=>e?setImmediate:n?((r,o)=>(mi.addEventListener("message",({source:s,data:c})=>{s===mi&&c===r&&o.length&&o.shift()()},!1),s=>{o.push(s),mi.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",pa(mi.postMessage)),QC=typeof queueMicrotask<"u"?queueMicrotask.bind(mi):typeof process<"u"&&process.nextTick||j1,KC=e=>e!=null&&pa(e[Uu]),Z={isArray:To,isArrayBuffer:b1,isBuffer:dl,isFormData:SC,isArrayBufferView:mC,isString:hC,isNumber:x1,isBoolean:pC,isObject:fl,isPlainObject:eu,isEmptyObject:gC,isReadableStream:jC,isRequest:RC,isResponse:NC,isHeaders:TC,isUndefined:Qs,isDate:yC,isFile:vC,isBlob:bC,isRegExp:$C,isFunction:pa,isStream:wC,isURLSearchParams:EC,isTypedArray:LC,isFileList:xC,forEach:ml,merge:oh,extend:_C,trim:CC,stripBOM:OC,inherits:DC,toFlatObject:AC,kindOf:Hu,kindOfTest:nn,endsWith:MC,toArray:kC,forEachEntry:zC,matchAll:UC,isHTMLForm:HC,hasOwnProperty:Qv,hasOwnProp:Qv,reduceDescriptors:E1,freezeMethods:PC,toObjectSet:YC,toCamelCase:BC,noop:FC,toFiniteNumber:qC,findKey:w1,global:mi,isContextDefined:S1,isSpecCompliantForm:IC,toJSONObject:GC,isAsyncFn:XC,isThenable:VC,setImmediate:j1,asap:QC,isIterable:KC};function He(e,n,r,o,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),s&&(this.response=s,this.status=s.status?s.status:null)}Z.inherits(He,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.status}}});const R1=He.prototype,N1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{N1[e]={value:e}});Object.defineProperties(He,N1);Object.defineProperty(R1,"isAxiosError",{value:!0});He.from=(e,n,r,o,s,c)=>{const d=Object.create(R1);return Z.toFlatObject(e,d,function(f){return f!==Error.prototype},h=>h!=="isAxiosError"),He.call(d,e.message,n,r,o,s),d.cause=e,d.name=e.name,c&&Object.assign(d,c),d};const ZC=null;function sh(e){return Z.isPlainObject(e)||Z.isArray(e)}function T1(e){return Z.endsWith(e,"[]")?e.slice(0,-2):e}function Kv(e,n,r){return e?e.concat(n).map(function(s,c){return s=T1(s),!r&&c?"["+s+"]":s}).join(r?".":""):n}function WC(e){return Z.isArray(e)&&!e.some(sh)}const JC=Z.toFlatObject(Z,{},null,function(n){return/^is[A-Z]/.test(n)});function $u(e,n,r){if(!Z.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,r=Z.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,E){return!Z.isUndefined(E[R])});const o=r.metaTokens,s=r.visitor||g,c=r.dots,d=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(n);if(!Z.isFunction(s))throw new TypeError("visitor must be a function");function p(w){if(w===null)return"";if(Z.isDate(w))return w.toISOString();if(Z.isBoolean(w))return w.toString();if(!f&&Z.isBlob(w))throw new He("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(w)||Z.isTypedArray(w)?f&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function g(w,R,E){let N=w;if(w&&!E&&typeof w=="object"){if(Z.endsWith(R,"{}"))R=o?R:R.slice(0,-2),w=JSON.stringify(w);else if(Z.isArray(w)&&WC(w)||(Z.isFileList(w)||Z.endsWith(R,"[]"))&&(N=Z.toArray(w)))return R=T1(R),N.forEach(function(O,M){!(Z.isUndefined(O)||O===null)&&n.append(d===!0?Kv([R],M,c):d===null?R:R+"[]",p(O))}),!1}return sh(w)?!0:(n.append(Kv(E,R,c),p(w)),!1)}const x=[],b=Object.assign(JC,{defaultVisitor:g,convertValue:p,isVisitable:sh});function S(w,R){if(!Z.isUndefined(w)){if(x.indexOf(w)!==-1)throw Error("Circular reference detected in "+R.join("."));x.push(w),Z.forEach(w,function(N,_){(!(Z.isUndefined(N)||N===null)&&s.call(n,N,Z.isString(_)?_.trim():_,R,b))===!0&&S(N,R?R.concat(_):[_])}),x.pop()}}if(!Z.isObject(e))throw new TypeError("data must be an object");return S(e),n}function Zv(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return n[o]})}function Wh(e,n){this._pairs=[],e&&$u(e,this,n)}const C1=Wh.prototype;C1.append=function(n,r){this._pairs.push([n,r])};C1.toString=function(n){const r=n?function(o){return n.call(this,o,Zv)}:Zv;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function e_(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _1(e,n,r){if(!n)return e;const o=r&&r.encode||e_;Z.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let c;if(s?c=s(n,r):c=Z.isURLSearchParams(n)?n.toString():new Wh(n,r).toString(o),c){const d=e.indexOf("#");d!==-1&&(e=e.slice(0,d)),e+=(e.indexOf("?")===-1?"?":"&")+c}return e}class Wv{constructor(){this.handlers=[]}use(n,r,o){return this.handlers.push({fulfilled:n,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){Z.forEach(this.handlers,function(o){o!==null&&n(o)})}}const O1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},t_=typeof URLSearchParams<"u"?URLSearchParams:Wh,a_=typeof FormData<"u"?FormData:null,n_=typeof Blob<"u"?Blob:null,r_={isBrowser:!0,classes:{URLSearchParams:t_,FormData:a_,Blob:n_},protocols:["http","https","file","blob","url","data"]},Jh=typeof window<"u"&&typeof document<"u",lh=typeof navigator=="object"&&navigator||void 0,i_=Jh&&(!lh||["ReactNative","NativeScript","NS"].indexOf(lh.product)<0),o_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",s_=Jh&&window.location.href||"http://localhost",l_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Jh,hasStandardBrowserEnv:i_,hasStandardBrowserWebWorkerEnv:o_,navigator:lh,origin:s_},Symbol.toStringTag,{value:"Module"})),Zt={...l_,...r_};function c_(e,n){return $u(e,new Zt.classes.URLSearchParams,{visitor:function(r,o,s,c){return Zt.isNode&&Z.isBuffer(r)?(this.append(o,r.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)},...n})}function u_(e){return Z.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function d_(e){const n={},r=Object.keys(e);let o;const s=r.length;let c;for(o=0;o<s;o++)c=r[o],n[c]=e[c];return n}function D1(e){function n(r,o,s,c){let d=r[c++];if(d==="__proto__")return!0;const h=Number.isFinite(+d),f=c>=r.length;return d=!d&&Z.isArray(s)?s.length:d,f?(Z.hasOwnProp(s,d)?s[d]=[s[d],o]:s[d]=o,!h):((!s[d]||!Z.isObject(s[d]))&&(s[d]=[]),n(r,o,s[d],c)&&Z.isArray(s[d])&&(s[d]=d_(s[d])),!h)}if(Z.isFormData(e)&&Z.isFunction(e.entries)){const r={};return Z.forEachEntry(e,(o,s)=>{n(u_(o),s,r,0)}),r}return null}function f_(e,n,r){if(Z.isString(e))try{return(n||JSON.parse)(e),Z.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(e)}const hl={transitional:O1,adapter:["xhr","http","fetch"],transformRequest:[function(n,r){const o=r.getContentType()||"",s=o.indexOf("application/json")>-1,c=Z.isObject(n);if(c&&Z.isHTMLForm(n)&&(n=new FormData(n)),Z.isFormData(n))return s?JSON.stringify(D1(n)):n;if(Z.isArrayBuffer(n)||Z.isBuffer(n)||Z.isStream(n)||Z.isFile(n)||Z.isBlob(n)||Z.isReadableStream(n))return n;if(Z.isArrayBufferView(n))return n.buffer;if(Z.isURLSearchParams(n))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let h;if(c){if(o.indexOf("application/x-www-form-urlencoded")>-1)return c_(n,this.formSerializer).toString();if((h=Z.isFileList(n))||o.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return $u(h?{"files[]":n}:n,f&&new f,this.formSerializer)}}return c||s?(r.setContentType("application/json",!1),f_(n)):n}],transformResponse:[function(n){const r=this.transitional||hl.transitional,o=r&&r.forcedJSONParsing,s=this.responseType==="json";if(Z.isResponse(n)||Z.isReadableStream(n))return n;if(n&&Z.isString(n)&&(o&&!this.responseType||s)){const d=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(n)}catch(h){if(d)throw h.name==="SyntaxError"?He.from(h,He.ERR_BAD_RESPONSE,this,null,this.response):h}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zt.classes.FormData,Blob:Zt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],e=>{hl.headers[e]={}});const m_=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),h_=e=>{const n={};let r,o,s;return e&&e.split(`
`).forEach(function(d){s=d.indexOf(":"),r=d.substring(0,s).trim().toLowerCase(),o=d.substring(s+1).trim(),!(!r||n[r]&&m_[r])&&(r==="set-cookie"?n[r]?n[r].push(o):n[r]=[o]:n[r]=n[r]?n[r]+", "+o:o)}),n},Jv=Symbol("internals");function As(e){return e&&String(e).trim().toLowerCase()}function tu(e){return e===!1||e==null?e:Z.isArray(e)?e.map(tu):String(e)}function p_(e){const n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(e);)n[o[1]]=o[2];return n}const g_=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Em(e,n,r,o,s){if(Z.isFunction(o))return o.call(this,n,r);if(s&&(n=r),!!Z.isString(n)){if(Z.isString(o))return n.indexOf(o)!==-1;if(Z.isRegExp(o))return o.test(n)}}function y_(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,r,o)=>r.toUpperCase()+o)}function v_(e,n){const r=Z.toCamelCase(" "+n);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+r,{value:function(s,c,d){return this[o].call(this,n,s,c,d)},configurable:!0})})}let ga=class{constructor(n){n&&this.set(n)}set(n,r,o){const s=this;function c(h,f,p){const g=As(f);if(!g)throw new Error("header name must be a non-empty string");const x=Z.findKey(s,g);(!x||s[x]===void 0||p===!0||p===void 0&&s[x]!==!1)&&(s[x||f]=tu(h))}const d=(h,f)=>Z.forEach(h,(p,g)=>c(p,g,f));if(Z.isPlainObject(n)||n instanceof this.constructor)d(n,r);else if(Z.isString(n)&&(n=n.trim())&&!g_(n))d(h_(n),r);else if(Z.isObject(n)&&Z.isIterable(n)){let h={},f,p;for(const g of n){if(!Z.isArray(g))throw TypeError("Object iterator must return a key-value pair");h[p=g[0]]=(f=h[p])?Z.isArray(f)?[...f,g[1]]:[f,g[1]]:g[1]}d(h,r)}else n!=null&&c(r,n,o);return this}get(n,r){if(n=As(n),n){const o=Z.findKey(this,n);if(o){const s=this[o];if(!r)return s;if(r===!0)return p_(s);if(Z.isFunction(r))return r.call(this,s,o);if(Z.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,r){if(n=As(n),n){const o=Z.findKey(this,n);return!!(o&&this[o]!==void 0&&(!r||Em(this,this[o],o,r)))}return!1}delete(n,r){const o=this;let s=!1;function c(d){if(d=As(d),d){const h=Z.findKey(o,d);h&&(!r||Em(o,o[h],h,r))&&(delete o[h],s=!0)}}return Z.isArray(n)?n.forEach(c):c(n),s}clear(n){const r=Object.keys(this);let o=r.length,s=!1;for(;o--;){const c=r[o];(!n||Em(this,this[c],c,n,!0))&&(delete this[c],s=!0)}return s}normalize(n){const r=this,o={};return Z.forEach(this,(s,c)=>{const d=Z.findKey(o,c);if(d){r[d]=tu(s),delete r[c];return}const h=n?y_(c):String(c).trim();h!==c&&delete r[c],r[h]=tu(s),o[h]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const r=Object.create(null);return Z.forEach(this,(o,s)=>{o!=null&&o!==!1&&(r[s]=n&&Z.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,r])=>n+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...r){const o=new this(n);return r.forEach(s=>o.set(s)),o}static accessor(n){const o=(this[Jv]=this[Jv]={accessors:{}}).accessors,s=this.prototype;function c(d){const h=As(d);o[h]||(v_(s,d),o[h]=!0)}return Z.isArray(n)?n.forEach(c):c(n),this}};ga.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(ga.prototype,({value:e},n)=>{let r=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(o){this[r]=o}}});Z.freezeMethods(ga);function jm(e,n){const r=this||hl,o=n||r,s=ga.from(o.headers);let c=o.data;return Z.forEach(e,function(h){c=h.call(r,c,s.normalize(),n?n.status:void 0)}),s.normalize(),c}function A1(e){return!!(e&&e.__CANCEL__)}function Co(e,n,r){He.call(this,e??"canceled",He.ERR_CANCELED,n,r),this.name="CanceledError"}Z.inherits(Co,He,{__CANCEL__:!0});function M1(e,n,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?e(r):n(new He("Request failed with status code "+r.status,[He.ERR_BAD_REQUEST,He.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function b_(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function x_(e,n){e=e||10;const r=new Array(e),o=new Array(e);let s=0,c=0,d;return n=n!==void 0?n:1e3,function(f){const p=Date.now(),g=o[c];d||(d=p),r[s]=f,o[s]=p;let x=c,b=0;for(;x!==s;)b+=r[x++],x=x%e;if(s=(s+1)%e,s===c&&(c=(c+1)%e),p-d<n)return;const S=g&&p-g;return S?Math.round(b*1e3/S):void 0}}function w_(e,n){let r=0,o=1e3/n,s,c;const d=(p,g=Date.now())=>{r=g,s=null,c&&(clearTimeout(c),c=null),e(...p)};return[(...p)=>{const g=Date.now(),x=g-r;x>=o?d(p,g):(s=p,c||(c=setTimeout(()=>{c=null,d(s)},o-x)))},()=>s&&d(s)]}const fu=(e,n,r=3)=>{let o=0;const s=x_(50,250);return w_(c=>{const d=c.loaded,h=c.lengthComputable?c.total:void 0,f=d-o,p=s(f),g=d<=h;o=d;const x={loaded:d,total:h,progress:h?d/h:void 0,bytes:f,rate:p||void 0,estimated:p&&h&&g?(h-d)/p:void 0,event:c,lengthComputable:h!=null,[n?"download":"upload"]:!0};e(x)},r)},eb=(e,n)=>{const r=e!=null;return[o=>n[0]({lengthComputable:r,total:e,loaded:o}),n[1]]},tb=e=>(...n)=>Z.asap(()=>e(...n)),S_=Zt.hasStandardBrowserEnv?((e,n)=>r=>(r=new URL(r,Zt.origin),e.protocol===r.protocol&&e.host===r.host&&(n||e.port===r.port)))(new URL(Zt.origin),Zt.navigator&&/(msie|trident)/i.test(Zt.navigator.userAgent)):()=>!0,E_=Zt.hasStandardBrowserEnv?{write(e,n,r,o,s,c){const d=[e+"="+encodeURIComponent(n)];Z.isNumber(r)&&d.push("expires="+new Date(r).toGMTString()),Z.isString(o)&&d.push("path="+o),Z.isString(s)&&d.push("domain="+s),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function j_(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function R_(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function k1(e,n,r){let o=!j_(n);return e&&(o||r==!1)?R_(e,n):n}const ab=e=>e instanceof ga?{...e}:e;function bi(e,n){n=n||{};const r={};function o(p,g,x,b){return Z.isPlainObject(p)&&Z.isPlainObject(g)?Z.merge.call({caseless:b},p,g):Z.isPlainObject(g)?Z.merge({},g):Z.isArray(g)?g.slice():g}function s(p,g,x,b){if(Z.isUndefined(g)){if(!Z.isUndefined(p))return o(void 0,p,x,b)}else return o(p,g,x,b)}function c(p,g){if(!Z.isUndefined(g))return o(void 0,g)}function d(p,g){if(Z.isUndefined(g)){if(!Z.isUndefined(p))return o(void 0,p)}else return o(void 0,g)}function h(p,g,x){if(x in n)return o(p,g);if(x in e)return o(void 0,p)}const f={url:c,method:c,data:c,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:h,headers:(p,g,x)=>s(ab(p),ab(g),x,!0)};return Z.forEach(Object.keys({...e,...n}),function(g){const x=f[g]||s,b=x(e[g],n[g],g);Z.isUndefined(b)&&x!==h||(r[g]=b)}),r}const L1=e=>{const n=bi({},e);let{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:c,headers:d,auth:h}=n;n.headers=d=ga.from(d),n.url=_1(k1(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),h&&d.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):"")));let f;if(Z.isFormData(r)){if(Zt.hasStandardBrowserEnv||Zt.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((f=d.getContentType())!==!1){const[p,...g]=f?f.split(";").map(x=>x.trim()).filter(Boolean):[];d.setContentType([p||"multipart/form-data",...g].join("; "))}}if(Zt.hasStandardBrowserEnv&&(o&&Z.isFunction(o)&&(o=o(n)),o||o!==!1&&S_(n.url))){const p=s&&c&&E_.read(c);p&&d.set(s,p)}return n},N_=typeof XMLHttpRequest<"u",T_=N_&&function(e){return new Promise(function(r,o){const s=L1(e);let c=s.data;const d=ga.from(s.headers).normalize();let{responseType:h,onUploadProgress:f,onDownloadProgress:p}=s,g,x,b,S,w;function R(){S&&S(),w&&w(),s.cancelToken&&s.cancelToken.unsubscribe(g),s.signal&&s.signal.removeEventListener("abort",g)}let E=new XMLHttpRequest;E.open(s.method.toUpperCase(),s.url,!0),E.timeout=s.timeout;function N(){if(!E)return;const O=ga.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),D={data:!h||h==="text"||h==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:O,config:e,request:E};M1(function(k){r(k),R()},function(k){o(k),R()},D),E=null}"onloadend"in E?E.onloadend=N:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(N)},E.onabort=function(){E&&(o(new He("Request aborted",He.ECONNABORTED,e,E)),E=null)},E.onerror=function(){o(new He("Network Error",He.ERR_NETWORK,e,E)),E=null},E.ontimeout=function(){let M=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const D=s.transitional||O1;s.timeoutErrorMessage&&(M=s.timeoutErrorMessage),o(new He(M,D.clarifyTimeoutError?He.ETIMEDOUT:He.ECONNABORTED,e,E)),E=null},c===void 0&&d.setContentType(null),"setRequestHeader"in E&&Z.forEach(d.toJSON(),function(M,D){E.setRequestHeader(D,M)}),Z.isUndefined(s.withCredentials)||(E.withCredentials=!!s.withCredentials),h&&h!=="json"&&(E.responseType=s.responseType),p&&([b,w]=fu(p,!0),E.addEventListener("progress",b)),f&&E.upload&&([x,S]=fu(f),E.upload.addEventListener("progress",x),E.upload.addEventListener("loadend",S)),(s.cancelToken||s.signal)&&(g=O=>{E&&(o(!O||O.type?new Co(null,e,E):O),E.abort(),E=null)},s.cancelToken&&s.cancelToken.subscribe(g),s.signal&&(s.signal.aborted?g():s.signal.addEventListener("abort",g)));const _=b_(s.url);if(_&&Zt.protocols.indexOf(_)===-1){o(new He("Unsupported protocol "+_+":",He.ERR_BAD_REQUEST,e));return}E.send(c||null)})},C_=(e,n)=>{const{length:r}=e=e?e.filter(Boolean):[];if(n||r){let o=new AbortController,s;const c=function(p){if(!s){s=!0,h();const g=p instanceof Error?p:this.reason;o.abort(g instanceof He?g:new Co(g instanceof Error?g.message:g))}};let d=n&&setTimeout(()=>{d=null,c(new He(`timeout ${n} of ms exceeded`,He.ETIMEDOUT))},n);const h=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(c):p.removeEventListener("abort",c)}),e=null)};e.forEach(p=>p.addEventListener("abort",c));const{signal:f}=o;return f.unsubscribe=()=>Z.asap(h),f}},__=function*(e,n){let r=e.byteLength;if(r<n){yield e;return}let o=0,s;for(;o<r;)s=o+n,yield e.slice(o,s),o=s},O_=async function*(e,n){for await(const r of D_(e))yield*__(r,n)},D_=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:r,value:o}=await n.read();if(r)break;yield o}}finally{await n.cancel()}},nb=(e,n,r,o)=>{const s=O_(e,n);let c=0,d,h=f=>{d||(d=!0,o&&o(f))};return new ReadableStream({async pull(f){try{const{done:p,value:g}=await s.next();if(p){h(),f.close();return}let x=g.byteLength;if(r){let b=c+=x;r(b)}f.enqueue(new Uint8Array(g))}catch(p){throw h(p),p}},cancel(f){return h(f),s.return()}},{highWaterMark:2})},Pu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",z1=Pu&&typeof ReadableStream=="function",A_=Pu&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),U1=(e,...n)=>{try{return!!e(...n)}catch{return!1}},M_=z1&&U1(()=>{let e=!1;const n=new Request(Zt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),rb=64*1024,ch=z1&&U1(()=>Z.isReadableStream(new Response("").body)),mu={stream:ch&&(e=>e.body)};Pu&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!mu[n]&&(mu[n]=Z.isFunction(e[n])?r=>r[n]():(r,o)=>{throw new He(`Response type '${n}' is not supported`,He.ERR_NOT_SUPPORT,o)})})})(new Response);const k_=async e=>{if(e==null)return 0;if(Z.isBlob(e))return e.size;if(Z.isSpecCompliantForm(e))return(await new Request(Zt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(e)||Z.isArrayBuffer(e))return e.byteLength;if(Z.isURLSearchParams(e)&&(e=e+""),Z.isString(e))return(await A_(e)).byteLength},L_=async(e,n)=>{const r=Z.toFiniteNumber(e.getContentLength());return r??k_(n)},z_=Pu&&(async e=>{let{url:n,method:r,data:o,signal:s,cancelToken:c,timeout:d,onDownloadProgress:h,onUploadProgress:f,responseType:p,headers:g,withCredentials:x="same-origin",fetchOptions:b}=L1(e);p=p?(p+"").toLowerCase():"text";let S=C_([s,c&&c.toAbortSignal()],d),w;const R=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let E;try{if(f&&M_&&r!=="get"&&r!=="head"&&(E=await L_(g,o))!==0){let D=new Request(n,{method:"POST",body:o,duplex:"half"}),T;if(Z.isFormData(o)&&(T=D.headers.get("content-type"))&&g.setContentType(T),D.body){const[k,L]=eb(E,fu(tb(f)));o=nb(D.body,rb,k,L)}}Z.isString(x)||(x=x?"include":"omit");const N="credentials"in Request.prototype;w=new Request(n,{...b,signal:S,method:r.toUpperCase(),headers:g.normalize().toJSON(),body:o,duplex:"half",credentials:N?x:void 0});let _=await fetch(w,b);const O=ch&&(p==="stream"||p==="response");if(ch&&(h||O&&R)){const D={};["status","statusText","headers"].forEach(H=>{D[H]=_[H]});const T=Z.toFiniteNumber(_.headers.get("content-length")),[k,L]=h&&eb(T,fu(tb(h),!0))||[];_=new Response(nb(_.body,rb,k,()=>{L&&L(),R&&R()}),D)}p=p||"text";let M=await mu[Z.findKey(mu,p)||"text"](_,e);return!O&&R&&R(),await new Promise((D,T)=>{M1(D,T,{data:M,headers:ga.from(_.headers),status:_.status,statusText:_.statusText,config:e,request:w})})}catch(N){throw R&&R(),N&&N.name==="TypeError"&&/Load failed|fetch/i.test(N.message)?Object.assign(new He("Network Error",He.ERR_NETWORK,e,w),{cause:N.cause||N}):He.from(N,N&&N.code,e,w)}}),uh={http:ZC,xhr:T_,fetch:z_};Z.forEach(uh,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const ib=e=>`- ${e}`,U_=e=>Z.isFunction(e)||e===null||e===!1,H1={getAdapter:e=>{e=Z.isArray(e)?e:[e];const{length:n}=e;let r,o;const s={};for(let c=0;c<n;c++){r=e[c];let d;if(o=r,!U_(r)&&(o=uh[(d=String(r)).toLowerCase()],o===void 0))throw new He(`Unknown adapter '${d}'`);if(o)break;s[d||"#"+c]=o}if(!o){const c=Object.entries(s).map(([h,f])=>`adapter ${h} `+(f===!1?"is not supported by the environment":"is not available in the build"));let d=n?c.length>1?`since :
`+c.map(ib).join(`
`):" "+ib(c[0]):"as no adapter specified";throw new He("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return o},adapters:uh};function Rm(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Co(null,e)}function ob(e){return Rm(e),e.headers=ga.from(e.headers),e.data=jm.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),H1.getAdapter(e.adapter||hl.adapter)(e).then(function(o){return Rm(e),o.data=jm.call(e,e.transformResponse,o),o.headers=ga.from(o.headers),o},function(o){return A1(o)||(Rm(e),o&&o.response&&(o.response.data=jm.call(e,e.transformResponse,o.response),o.response.headers=ga.from(o.response.headers))),Promise.reject(o)})}const B1="1.11.0",Yu={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Yu[e]=function(o){return typeof o===e||"a"+(n<1?"n ":" ")+e}});const sb={};Yu.transitional=function(n,r,o){function s(c,d){return"[Axios v"+B1+"] Transitional option '"+c+"'"+d+(o?". "+o:"")}return(c,d,h)=>{if(n===!1)throw new He(s(d," has been removed"+(r?" in "+r:"")),He.ERR_DEPRECATED);return r&&!sb[d]&&(sb[d]=!0,console.warn(s(d," has been deprecated since v"+r+" and will be removed in the near future"))),n?n(c,d,h):!0}};Yu.spelling=function(n){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${n}`),!0)};function H_(e,n,r){if(typeof e!="object")throw new He("options must be an object",He.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let s=o.length;for(;s-- >0;){const c=o[s],d=n[c];if(d){const h=e[c],f=h===void 0||d(h,c,e);if(f!==!0)throw new He("option "+c+" must be "+f,He.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new He("Unknown option "+c,He.ERR_BAD_OPTION)}}const au={assertOptions:H_,validators:Yu},hn=au.validators;let pi=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Wv,response:new Wv}}async request(n,r){try{return await this._request(n,r)}catch(o){if(o instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const c=s.stack?s.stack.replace(/^.+\n/,""):"";try{o.stack?c&&!String(o.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+c):o.stack=c}catch{}}throw o}}_request(n,r){typeof n=="string"?(r=r||{},r.url=n):r=n||{},r=bi(this.defaults,r);const{transitional:o,paramsSerializer:s,headers:c}=r;o!==void 0&&au.assertOptions(o,{silentJSONParsing:hn.transitional(hn.boolean),forcedJSONParsing:hn.transitional(hn.boolean),clarifyTimeoutError:hn.transitional(hn.boolean)},!1),s!=null&&(Z.isFunction(s)?r.paramsSerializer={serialize:s}:au.assertOptions(s,{encode:hn.function,serialize:hn.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),au.assertOptions(r,{baseUrl:hn.spelling("baseURL"),withXsrfToken:hn.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let d=c&&Z.merge(c.common,c[r.method]);c&&Z.forEach(["delete","get","head","post","put","patch","common"],w=>{delete c[w]}),r.headers=ga.concat(d,c);const h=[];let f=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(r)===!1||(f=f&&R.synchronous,h.unshift(R.fulfilled,R.rejected))});const p=[];this.interceptors.response.forEach(function(R){p.push(R.fulfilled,R.rejected)});let g,x=0,b;if(!f){const w=[ob.bind(this),void 0];for(w.unshift(...h),w.push(...p),b=w.length,g=Promise.resolve(r);x<b;)g=g.then(w[x++],w[x++]);return g}b=h.length;let S=r;for(x=0;x<b;){const w=h[x++],R=h[x++];try{S=w(S)}catch(E){R.call(this,E);break}}try{g=ob.call(this,S)}catch(w){return Promise.reject(w)}for(x=0,b=p.length;x<b;)g=g.then(p[x++],p[x++]);return g}getUri(n){n=bi(this.defaults,n);const r=k1(n.baseURL,n.url,n.allowAbsoluteUrls);return _1(r,n.params,n.paramsSerializer)}};Z.forEach(["delete","get","head","options"],function(n){pi.prototype[n]=function(r,o){return this.request(bi(o||{},{method:n,url:r,data:(o||{}).data}))}});Z.forEach(["post","put","patch"],function(n){function r(o){return function(c,d,h){return this.request(bi(h||{},{method:n,headers:o?{"Content-Type":"multipart/form-data"}:{},url:c,data:d}))}}pi.prototype[n]=r(),pi.prototype[n+"Form"]=r(!0)});let B_=class $1{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(c){r=c});const o=this;this.promise.then(s=>{if(!o._listeners)return;let c=o._listeners.length;for(;c-- >0;)o._listeners[c](s);o._listeners=null}),this.promise.then=s=>{let c;const d=new Promise(h=>{o.subscribe(h),c=h}).then(s);return d.cancel=function(){o.unsubscribe(c)},d},n(function(c,d,h){o.reason||(o.reason=new Co(c,d,h),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const r=this._listeners.indexOf(n);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const n=new AbortController,r=o=>{n.abort(o)};return this.subscribe(r),n.signal.unsubscribe=()=>this.unsubscribe(r),n.signal}static source(){let n;return{token:new $1(function(s){n=s}),cancel:n}}};function $_(e){return function(r){return e.apply(null,r)}}function P_(e){return Z.isObject(e)&&e.isAxiosError===!0}const dh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(dh).forEach(([e,n])=>{dh[n]=e});function P1(e){const n=new pi(e),r=y1(pi.prototype.request,n);return Z.extend(r,pi.prototype,n,{allOwnKeys:!0}),Z.extend(r,n,null,{allOwnKeys:!0}),r.create=function(s){return P1(bi(e,s))},r}const jt=P1(hl);jt.Axios=pi;jt.CanceledError=Co;jt.CancelToken=B_;jt.isCancel=A1;jt.VERSION=B1;jt.toFormData=$u;jt.AxiosError=He;jt.Cancel=jt.CanceledError;jt.all=function(n){return Promise.all(n)};jt.spread=$_;jt.isAxiosError=P_;jt.mergeConfig=bi;jt.AxiosHeaders=ga;jt.formToJSON=e=>D1(Z.isHTMLForm(e)?new FormData(e):e);jt.getAdapter=H1.getAdapter;jt.HttpStatusCode=dh;jt.default=jt;const{Axios:HA,AxiosError:BA,CanceledError:$A,isCancel:PA,CancelToken:YA,VERSION:FA,all:qA,Cancel:IA,isAxiosError:GA,spread:XA,toFormData:VA,AxiosHeaders:QA,HttpStatusCode:KA,formToJSON:ZA,getAdapter:WA,mergeConfig:JA}=jt,Y_="https://xeriwo-backend-2.onrender.com/api",mt=jt.create({baseURL:Y_,headers:{"Content-Type":"application/json"},timeout:3e4}),F_=e=>new Promise(n=>setTimeout(n,e));mt.interceptors.request.use(async e=>{const n=localStorage.getItem("token");return n&&(e.headers.Authorization=`Bearer ${n}`),console.log("📤 API Request:",e.method?.toUpperCase(),e.url),e},e=>(console.error("❌ Request error:",e),Promise.reject(e)));mt.interceptors.response.use(e=>(console.log(`📥 API Response: ${e.status} ✅`),e),async e=>(console.error("❌ API Response error:",{status:e.response?.status,message:e.response?.data?.message||e.message,url:e.config?.url}),e.response?.status===429&&!e.config._retried?(e.config._retried=!0,console.log("⏳ Rate limited. Waiting 3 seconds and retrying once..."),await F_(3e3),mt(e.config)):(e.response?.status===401&&(localStorage.removeItem("token"),window.location.pathname!=="/login"&&(window.location.href="/login")),Promise.reject(e))));const Y1=v.createContext(),q_={user:null,token:localStorage.getItem("token"),pendingUserId:localStorage.getItem("pendingUserId"),isAuthenticated:!1,loading:!0},I_=(e,n)=>{switch(n.type){case"USER_LOADED":return{...e,isAuthenticated:!0,loading:!1,user:n.payload.user};case"SET_PENDING_USER":return localStorage.setItem("pendingUserId",n.payload),{...e,pendingUserId:n.payload};case"CLEAR_PENDING_USER":return localStorage.removeItem("pendingUserId"),{...e,pendingUserId:null};case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",n.payload.token),localStorage.removeItem("pendingUserId"),{...e,token:n.payload.token,user:n.payload.user,isAuthenticated:!0,loading:!1,pendingUserId:null};case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("token"),localStorage.removeItem("pendingUserId"),{...e,token:null,isAuthenticated:!1,loading:!1,user:null,pendingUserId:null};case"SET_LOADING":return{...e,loading:n.payload};default:return e}},G_=({children:e})=>{const[n,r]=v.useReducer(I_,q_),o=async()=>{if(!localStorage.getItem("token")){r({type:"AUTH_ERROR"});return}try{const x=await mt.get("/auth/me");r({type:"USER_LOADED",payload:x.data})}catch(x){console.error("Load user error:",x),r({type:"AUTH_ERROR"})}},s=async g=>{try{console.log("🔄 Registering user:",g.email);const x=await mt.post("/auth/register",g);return console.log("✅ Registration response:",x.data),x.data.success&&x.data.userId&&r({type:"SET_PENDING_USER",payload:x.data.userId}),x.data}catch(x){throw console.error("❌ Registration error:",x.response?.data||x.message),x.response?.data||{message:"Registration failed"}}},c=async g=>{try{const x=n.pendingUserId||localStorage.getItem("pendingUserId");if(!x)throw{message:"No pending user ID found. Please register again."};console.log("🔄 Verifying OTP:",{userId:x,otp:g});const b={userId:String(x).trim(),otp:String(g).trim()},S=await mt.post("/auth/verify-otp",b);return console.log("✅ OTP verification response:",S.data),S.data.success&&S.data.token&&(r({type:"LOGIN_SUCCESS",payload:{token:S.data.token,user:S.data.user}}),r({type:"CLEAR_PENDING_USER"})),S.data}catch(x){throw console.error("❌ OTP verification error:",x.response?.data||x.message),x.response?.data||{message:"OTP verification failed"}}},d=async g=>{try{console.log("🔄 Logging in user:",{email:g.email});const x=await mt.post("/auth/login",g);return console.log("✅ Login response:",x.data),x.data.success&&x.data.token&&r({type:"LOGIN_SUCCESS",payload:{token:x.data.token,user:x.data.user}}),x.data}catch(x){throw console.error("❌ Login error:",x.response?.data||x.message),r({type:"LOGIN_FAIL"}),x.response?.data||{message:"Login failed"}}},h=()=>{console.log("👋 User logged out"),r({type:"LOGOUT"})},f=async()=>{try{return(await mt.post("/auth/test-email")).data}catch(g){throw g.response?.data||{message:"Email test failed"}}},p=async g=>{try{return(await mt.post("/auth/generate-test-otp",{userId:g})).data}catch(x){throw x.response?.data||{message:"Failed to generate test OTP"}}};return v.useEffect(()=>{o()},[]),u.jsx(Y1.Provider,{value:{token:n.token,isAuthenticated:n.isAuthenticated,loading:n.loading,user:n.user,pendingUserId:n.pendingUserId,register:s,verifyOTP:c,login:d,logout:h,loadUser:o,testEmail:f,generateTestOTP:p},children:e})},$r=()=>{const e=v.useContext(Y1);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e};var Nm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var lb;function X_(){return lb||(lb=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var c="",d=0;d<arguments.length;d++){var h=arguments[d];h&&(c=s(c,o(h)))}return c}function o(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return r.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var d="";for(var h in c)n.call(c,h)&&c[h]&&(d=s(d,h));return d}function s(c,d){return d?c?c+" "+d:c+d:c}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Nm)),Nm.exports}var V_=X_();const pe=el(V_);function fh(){return fh=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},fh.apply(null,arguments)}function F1(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;r[o]=e[o]}return r}function cb(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Q_(e){var n=K_(e,"string");return typeof n=="symbol"?n:String(n)}function K_(e,n){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,n);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Z_(e,n,r){var o=v.useRef(e!==void 0),s=v.useState(n),c=s[0],d=s[1],h=e!==void 0,f=o.current;return o.current=h,!h&&f&&c!==n&&d(n),[h?e:c,v.useCallback(function(p){for(var g=arguments.length,x=new Array(g>1?g-1:0),b=1;b<g;b++)x[b-1]=arguments[b];r&&r.apply(void 0,[p].concat(x)),d(p)},[r])]}function Fu(e,n){return Object.keys(n).reduce(function(r,o){var s,c=r,d=c[cb(o)],h=c[o],f=F1(c,[cb(o),o].map(Q_)),p=n[o],g=Z_(h,d,e[p]),x=g[0],b=g[1];return fh({},f,(s={},s[o]=x,s[p]=b,s))},e)}function mh(e,n){return mh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},mh(e,n)}function W_(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,mh(e,n)}const J_=["xxl","xl","lg","md","sm","xs"],e3="xs",pl=v.createContext({prefixes:{},breakpoints:J_,minBreakpoint:e3}),{Consumer:e4,Provider:t4}=pl;function we(e,n){const{prefixes:r}=v.useContext(pl);return e||r[n]||n}function q1(){const{breakpoints:e}=v.useContext(pl);return e}function I1(){const{minBreakpoint:e}=v.useContext(pl);return e}function G1(){const{dir:e}=v.useContext(pl);return e==="rtl"}function gl(e){return e&&e.ownerDocument||document}function t3(e){var n=gl(e);return n&&n.defaultView||window}function a3(e,n){return t3(e).getComputedStyle(e,n)}var n3=/([A-Z])/g;function r3(e){return e.replace(n3,"-$1").toLowerCase()}var i3=/^ms-/;function Yc(e){return r3(e).replace(i3,"-ms-")}var o3=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function s3(e){return!!(e&&o3.test(e))}function qn(e,n){var r="",o="";if(typeof n=="string")return e.style.getPropertyValue(Yc(n))||a3(e).getPropertyValue(Yc(n));Object.keys(n).forEach(function(s){var c=n[s];!c&&c!==0?e.style.removeProperty(Yc(s)):s3(s)?o+=s+"("+c+") ":r+=Yc(s)+": "+c+";"}),o&&(r+="transform: "+o+";"),e.style.cssText+=";"+r}var Tm={exports:{}},Cm,ub;function l3(){if(ub)return Cm;ub=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Cm=e,Cm}var _m,db;function c3(){if(db)return _m;db=1;var e=l3();function n(){}function r(){}return r.resetWarningCache=n,_m=function(){function o(d,h,f,p,g,x){if(x!==e){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}o.isRequired=o;function s(){return o}var c={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:s,element:o,elementType:o,instanceOf:s,node:o,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:n};return c.PropTypes=c,c},_m}var fb;function X1(){return fb||(fb=1,Tm.exports=c3()()),Tm.exports}var u3=X1();const ha=el(u3),mb={disabled:!1},V1=Ne.createContext(null);var d3=function(n){return n.scrollTop},zs="unmounted",Rr="exited",en="entering",Fn="entered",Ks="exiting",Kn=function(e){W_(n,e);function n(o,s){var c;c=e.call(this,o,s)||this;var d=s,h=d&&!d.isMounting?o.enter:o.appear,f;return c.appearStatus=null,o.in?h?(f=Rr,c.appearStatus=en):f=Fn:o.unmountOnExit||o.mountOnEnter?f=zs:f=Rr,c.state={status:f},c.nextCallback=null,c}n.getDerivedStateFromProps=function(s,c){var d=s.in;return d&&c.status===zs?{status:Rr}:null};var r=n.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(s){var c=null;if(s!==this.props){var d=this.state.status;this.props.in?d!==en&&d!==Fn&&(c=en):(d===en||d===Fn)&&(c=Ks)}this.updateStatus(!1,c)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var s=this.props.timeout,c,d,h;return c=d=h=s,s!=null&&typeof s!="number"&&(c=s.exit,d=s.enter,h=s.appear!==void 0?s.appear:d),{exit:c,enter:d,appear:h}},r.updateStatus=function(s,c){if(s===void 0&&(s=!1),c!==null)if(this.cancelNextCallback(),c===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var d=this.props.nodeRef?this.props.nodeRef.current:fo.findDOMNode(this);d&&d3(d)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Rr&&this.setState({status:zs})},r.performEnter=function(s){var c=this,d=this.props.enter,h=this.context?this.context.isMounting:s,f=this.props.nodeRef?[h]:[fo.findDOMNode(this),h],p=f[0],g=f[1],x=this.getTimeouts(),b=h?x.appear:x.enter;if(!s&&!d||mb.disabled){this.safeSetState({status:Fn},function(){c.props.onEntered(p)});return}this.props.onEnter(p,g),this.safeSetState({status:en},function(){c.props.onEntering(p,g),c.onTransitionEnd(b,function(){c.safeSetState({status:Fn},function(){c.props.onEntered(p,g)})})})},r.performExit=function(){var s=this,c=this.props.exit,d=this.getTimeouts(),h=this.props.nodeRef?void 0:fo.findDOMNode(this);if(!c||mb.disabled){this.safeSetState({status:Rr},function(){s.props.onExited(h)});return}this.props.onExit(h),this.safeSetState({status:Ks},function(){s.props.onExiting(h),s.onTransitionEnd(d.exit,function(){s.safeSetState({status:Rr},function(){s.props.onExited(h)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(s,c){c=this.setNextCallback(c),this.setState(s,c)},r.setNextCallback=function(s){var c=this,d=!0;return this.nextCallback=function(h){d&&(d=!1,c.nextCallback=null,s(h))},this.nextCallback.cancel=function(){d=!1},this.nextCallback},r.onTransitionEnd=function(s,c){this.setNextCallback(c);var d=this.props.nodeRef?this.props.nodeRef.current:fo.findDOMNode(this),h=s==null&&!this.props.addEndListener;if(!d||h){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[d,this.nextCallback],p=f[0],g=f[1];this.props.addEndListener(p,g)}s!=null&&setTimeout(this.nextCallback,s)},r.render=function(){var s=this.state.status;if(s===zs)return null;var c=this.props,d=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var h=F1(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ne.createElement(V1.Provider,{value:null},typeof d=="function"?d(s,h):Ne.cloneElement(Ne.Children.only(d),h))},n}(Ne.Component);Kn.contextType=V1;Kn.propTypes={};function lo(){}Kn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:lo,onEntering:lo,onEntered:lo,onExit:lo,onExiting:lo,onExited:lo};Kn.UNMOUNTED=zs;Kn.EXITED=Rr;Kn.ENTERING=en;Kn.ENTERED=Fn;Kn.EXITING=Ks;function f3(e){return e.code==="Escape"||e.keyCode===27}function m3(){const e=v.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}function _o(e){if(!e||typeof e=="function")return null;const{major:n}=m3();return n>=19?e.props.ref:e.ref}const Oo=!!(typeof window<"u"&&window.document&&window.document.createElement);var hh=!1,ph=!1;try{var Om={get passive(){return hh=!0},get once(){return ph=hh=!0}};Oo&&(window.addEventListener("test",Om,Om),window.removeEventListener("test",Om,!0))}catch{}function ep(e,n,r,o){if(o&&typeof o!="boolean"&&!ph){var s=o.once,c=o.capture,d=r;!ph&&s&&(d=r.__once||function h(f){this.removeEventListener(n,h,c),r.call(this,f)},r.__once=d),e.addEventListener(n,d,hh?o:c)}e.addEventListener(n,r,o)}function gh(e,n,r,o){var s=o&&typeof o!="boolean"?o.capture:o;e.removeEventListener(n,r,s),r.__once&&e.removeEventListener(n,r.__once,s)}function Or(e,n,r,o){return ep(e,n,r,o),function(){gh(e,n,r,o)}}function h3(e,n,r,o){if(o===void 0&&(o=!0),e){var s=document.createEvent("HTMLEvents");s.initEvent(n,r,o),e.dispatchEvent(s)}}function p3(e){var n=qn(e,"transitionDuration")||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function g3(e,n,r){r===void 0&&(r=5);var o=!1,s=setTimeout(function(){o||h3(e,"transitionend",!0)},n+r),c=Or(e,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(s),c()}}function Q1(e,n,r,o){r==null&&(r=p3(e)||0);var s=g3(e,r,o),c=Or(e,"transitionend",n);return function(){s(),c()}}function hb(e,n){const r=qn(e,n)||"",o=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*o}function tp(e,n){const r=hb(e,"transitionDuration"),o=hb(e,"transitionDelay"),s=Q1(e,c=>{c.target===e&&(s(),n(c))},r+o)}function Ms(...e){return e.filter(n=>n!=null).reduce((n,r)=>{if(typeof r!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return n===null?r:function(...s){n.apply(this,s),r.apply(this,s)}},null)}function K1(e){e.offsetHeight}const pb=e=>!e||typeof e=="function"?e:n=>{e.current=n};function y3(e,n){const r=pb(e),o=pb(n);return s=>{r&&r(s),o&&o(s)}}function qu(e,n){return v.useMemo(()=>y3(e,n),[e,n])}function v3(e){return e&&"setState"in e?fo.findDOMNode(e):e??null}const Iu=Ne.forwardRef(({onEnter:e,onEntering:n,onEntered:r,onExit:o,onExiting:s,onExited:c,addEndListener:d,children:h,childRef:f,...p},g)=>{const x=v.useRef(null),b=qu(x,f),S=T=>{b(v3(T))},w=T=>k=>{T&&x.current&&T(x.current,k)},R=v.useCallback(w(e),[e]),E=v.useCallback(w(n),[n]),N=v.useCallback(w(r),[r]),_=v.useCallback(w(o),[o]),O=v.useCallback(w(s),[s]),M=v.useCallback(w(c),[c]),D=v.useCallback(w(d),[d]);return u.jsx(Kn,{ref:g,...p,onEnter:R,onEntered:N,onEntering:E,onExit:_,onExited:M,onExiting:O,addEndListener:D,nodeRef:x,children:typeof h=="function"?(T,k)=>h(T,{...k,ref:S}):Ne.cloneElement(h,{ref:S})})});Iu.displayName="TransitionWrapper";const b3={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function x3(e,n){const r=`offset${e[0].toUpperCase()}${e.slice(1)}`,o=n[r],s=b3[e];return o+parseInt(qn(n,s[0]),10)+parseInt(qn(n,s[1]),10)}const w3={[Rr]:"collapse",[Ks]:"collapsing",[en]:"collapsing",[Fn]:"collapse show"},Z1=Ne.forwardRef(({onEnter:e,onEntering:n,onEntered:r,onExit:o,onExiting:s,className:c,children:d,dimension:h="height",in:f=!1,timeout:p=300,mountOnEnter:g=!1,unmountOnExit:x=!1,appear:b=!1,getDimensionValue:S=x3,...w},R)=>{const E=typeof h=="function"?h():h,N=v.useMemo(()=>Ms(T=>{T.style[E]="0"},e),[E,e]),_=v.useMemo(()=>Ms(T=>{const k=`scroll${E[0].toUpperCase()}${E.slice(1)}`;T.style[E]=`${T[k]}px`},n),[E,n]),O=v.useMemo(()=>Ms(T=>{T.style[E]=null},r),[E,r]),M=v.useMemo(()=>Ms(T=>{T.style[E]=`${S(E,T)}px`,K1(T)},o),[o,S,E]),D=v.useMemo(()=>Ms(T=>{T.style[E]=null},s),[E,s]);return u.jsx(Iu,{ref:R,addEndListener:tp,...w,"aria-expanded":w.role?f:null,onEnter:N,onEntering:_,onEntered:O,onExit:M,onExiting:D,childRef:_o(d),in:f,timeout:p,mountOnEnter:g,unmountOnExit:x,appear:b,children:(T,k)=>Ne.cloneElement(d,{...k,className:pe(c,d.props.className,w3[T],E==="width"&&"collapse-horizontal")})})});Z1.displayName="Collapse";function S3(e){const n=v.useRef(e);return v.useEffect(()=>{n.current=e},[e]),n}function Mr(e){const n=S3(e);return v.useCallback(function(...r){return n.current&&n.current(...r)},[n])}const yl=e=>v.forwardRef((n,r)=>u.jsx("div",{...n,ref:r,className:pe(n.className,e)})),W1=yl("h4");W1.displayName="DivStyledAsH4";const J1=v.forwardRef(({className:e,bsPrefix:n,as:r=W1,...o},s)=>(n=we(n,"alert-heading"),u.jsx(r,{ref:s,className:pe(e,n),...o})));J1.displayName="AlertHeading";function E3(){return v.useState(null)}function j3(e){const n=v.useRef(e);return v.useEffect(()=>{n.current=e},[e]),n}function Wt(e){const n=j3(e);return v.useCallback(function(...r){return n.current&&n.current(...r)},[n])}function R3(e,n,r,o=!1){const s=Wt(r);v.useEffect(()=>{const c=typeof e=="function"?e():e;return c.addEventListener(n,s,o),()=>c.removeEventListener(n,s,o)},[e])}function eS(){const e=v.useRef(!0),n=v.useRef(()=>e.current);return v.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),n.current}function tS(e){const n=v.useRef(null);return v.useEffect(()=>{n.current=e}),n.current}const N3=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",T3=typeof document<"u",gb=T3||N3?v.useLayoutEffect:v.useEffect,C3=["as","disabled"];function _3(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}function O3(e){return!e||e.trim()==="#"}function ap({tagName:e,disabled:n,href:r,target:o,rel:s,role:c,onClick:d,tabIndex:h=0,type:f}){e||(r!=null||o!=null||s!=null?e="a":e="button");const p={tagName:e};if(e==="button")return[{type:f||"button",disabled:n},p];const g=b=>{if((n||e==="a"&&O3(r))&&b.preventDefault(),n){b.stopPropagation();return}d?.(b)},x=b=>{b.key===" "&&(b.preventDefault(),g(b))};return e==="a"&&(r||(r="#"),n&&(r=void 0)),[{role:c??"button",disabled:void 0,tabIndex:n?void 0:h,href:r,target:e==="a"?o:void 0,"aria-disabled":n||void 0,rel:e==="a"?s:void 0,onClick:g,onKeyDown:x},p]}const np=v.forwardRef((e,n)=>{let{as:r,disabled:o}=e,s=_3(e,C3);const[c,{tagName:d}]=ap(Object.assign({tagName:r,disabled:o},s));return u.jsx(d,Object.assign({},s,c,{ref:n}))});np.displayName="Button";const D3=["onKeyDown"];function A3(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}function M3(e){return!e||e.trim()==="#"}const Gu=v.forwardRef((e,n)=>{let{onKeyDown:r}=e,o=A3(e,D3);const[s]=ap(Object.assign({tagName:"a"},o)),c=Wt(d=>{s.onKeyDown(d),r?.(d)});return M3(o.href)||o.role==="button"?u.jsx("a",Object.assign({ref:n},o,s,{onKeyDown:c})):u.jsx("a",Object.assign({ref:n},o,{onKeyDown:r}))});Gu.displayName="Anchor";const aS=v.forwardRef(({className:e,bsPrefix:n,as:r=Gu,...o},s)=>(n=we(n,"alert-link"),u.jsx(r,{ref:s,className:pe(e,n),...o})));aS.displayName="AlertLink";const k3={[en]:"show",[Fn]:"show"},vo=v.forwardRef(({className:e,children:n,transitionClasses:r={},onEnter:o,...s},c)=>{const d={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},h=v.useCallback((f,p)=>{K1(f),o?.(f,p)},[o]);return u.jsx(Iu,{ref:c,addEndListener:tp,...d,onEnter:h,childRef:_o(n),children:(f,p)=>v.cloneElement(n,{...p,className:pe("fade",e,n.props.className,k3[f],r[f])})})});vo.displayName="Fade";const L3={"aria-label":ha.string,onClick:ha.func,variant:ha.oneOf(["white"])},Xu=v.forwardRef(({className:e,variant:n,"aria-label":r="Close",...o},s)=>u.jsx("button",{ref:s,type:"button",className:pe("btn-close",n&&`btn-close-${n}`,e),"aria-label":r,...o}));Xu.displayName="CloseButton";Xu.propTypes=L3;const nS=v.forwardRef((e,n)=>{const{bsPrefix:r,show:o=!0,closeLabel:s="Close alert",closeVariant:c,className:d,children:h,variant:f="primary",onClose:p,dismissible:g,transition:x=vo,...b}=Fu(e,{show:"onClose"}),S=we(r,"alert"),w=Mr(N=>{p&&p(!1,N)}),R=x===!0?vo:x,E=u.jsxs("div",{role:"alert",...R?void 0:b,ref:n,className:pe(d,S,f&&`${S}-${f}`,g&&`${S}-dismissible`),children:[g&&u.jsx(Xu,{onClick:w,"aria-label":s,variant:c}),h]});return R?u.jsx(R,{unmountOnExit:!0,...b,ref:void 0,in:o,children:E}):o?E:null});nS.displayName="Alert";const $n=Object.assign(nS,{Link:aS,Heading:J1}),ra=v.forwardRef(({bsPrefix:e,bg:n="primary",pill:r=!1,text:o,className:s,as:c="span",...d},h)=>{const f=we(e,"badge");return u.jsx(c,{ref:h,...d,className:pe(s,f,r&&"rounded-pill",o&&`text-${o}`,n&&`bg-${n}`)})});ra.displayName="Badge";const ze=v.forwardRef(({as:e,bsPrefix:n,variant:r="primary",size:o,active:s=!1,disabled:c=!1,className:d,...h},f)=>{const p=we(n,"btn"),[g,{tagName:x}]=ap({tagName:e,disabled:c,...h}),b=x;return u.jsx(b,{...g,...h,ref:f,disabled:c,className:pe(d,p,s&&"active",r&&`${p}-${r}`,o&&`${p}-${o}`,h.href&&c&&"disabled")})});ze.displayName="Button";const rp=v.forwardRef(({className:e,bsPrefix:n,as:r="div",...o},s)=>(n=we(n,"card-body"),u.jsx(r,{ref:s,className:pe(e,n),...o})));rp.displayName="CardBody";const rS=v.forwardRef(({className:e,bsPrefix:n,as:r="div",...o},s)=>(n=we(n,"card-footer"),u.jsx(r,{ref:s,className:pe(e,n),...o})));rS.displayName="CardFooter";const ip=v.createContext(null);ip.displayName="CardHeaderContext";const iS=v.forwardRef(({bsPrefix:e,className:n,as:r="div",...o},s)=>{const c=we(e,"card-header"),d=v.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return u.jsx(ip.Provider,{value:d,children:u.jsx(r,{ref:s,...o,className:pe(n,c)})})});iS.displayName="CardHeader";const oS=v.forwardRef(({bsPrefix:e,className:n,variant:r,as:o="img",...s},c)=>{const d=we(e,"card-img");return u.jsx(o,{ref:c,className:pe(r?`${d}-${r}`:d,n),...s})});oS.displayName="CardImg";const sS=v.forwardRef(({className:e,bsPrefix:n,as:r="div",...o},s)=>(n=we(n,"card-img-overlay"),u.jsx(r,{ref:s,className:pe(e,n),...o})));sS.displayName="CardImgOverlay";const lS=v.forwardRef(({className:e,bsPrefix:n,as:r="a",...o},s)=>(n=we(n,"card-link"),u.jsx(r,{ref:s,className:pe(e,n),...o})));lS.displayName="CardLink";const z3=yl("h6"),cS=v.forwardRef(({className:e,bsPrefix:n,as:r=z3,...o},s)=>(n=we(n,"card-subtitle"),u.jsx(r,{ref:s,className:pe(e,n),...o})));cS.displayName="CardSubtitle";const uS=v.forwardRef(({className:e,bsPrefix:n,as:r="p",...o},s)=>(n=we(n,"card-text"),u.jsx(r,{ref:s,className:pe(e,n),...o})));uS.displayName="CardText";const U3=yl("h5"),dS=v.forwardRef(({className:e,bsPrefix:n,as:r=U3,...o},s)=>(n=we(n,"card-title"),u.jsx(r,{ref:s,className:pe(e,n),...o})));dS.displayName="CardTitle";const fS=v.forwardRef(({bsPrefix:e,className:n,bg:r,text:o,border:s,body:c=!1,children:d,as:h="div",...f},p)=>{const g=we(e,"card");return u.jsx(h,{ref:p,...f,className:pe(n,g,r&&`bg-${r}`,o&&`text-${o}`,s&&`border-${s}`),children:c?u.jsx(rp,{children:d}):d})});fS.displayName="Card";const Le=Object.assign(fS,{Img:oS,Title:dS,Subtitle:cS,Body:rp,Link:lS,Text:uS,Header:iS,Footer:rS,ImgOverlay:sS});function H3(e){const n=v.useRef(e);return n.current=e,n}function B3(e){const n=H3(e);v.useEffect(()=>()=>n.current(),[])}function $3(e,n){let r=0;return v.Children.map(e,o=>v.isValidElement(o)?n(o,r++):o)}function P3(e,n){return v.Children.toArray(e).some(r=>v.isValidElement(r)&&r.type===n)}function Y3({as:e,bsPrefix:n,className:r,...o}){n=we(n,"col");const s=q1(),c=I1(),d=[],h=[];return s.forEach(f=>{const p=o[f];delete o[f];let g,x,b;typeof p=="object"&&p!=null?{span:g,offset:x,order:b}=p:g=p;const S=f!==c?`-${f}`:"";g&&d.push(g===!0?`${n}${S}`:`${n}${S}-${g}`),b!=null&&h.push(`order${S}-${b}`),x!=null&&h.push(`offset${S}-${x}`)}),[{...o,className:pe(r,...d,...h)},{as:e,bsPrefix:n,spans:d}]}const Ke=v.forwardRef((e,n)=>{const[{className:r,...o},{as:s="div",bsPrefix:c,spans:d}]=Y3(e);return u.jsx(s,{...o,ref:n,className:pe(r,!d.length&&c)})});Ke.displayName="Col";const At=v.forwardRef(({bsPrefix:e,fluid:n=!1,as:r="div",className:o,...s},c)=>{const d=we(e,"container"),h=typeof n=="string"?`-${n}`:"-fluid";return u.jsx(r,{ref:c,...s,className:pe(o,n?`${d}${h}`:d)})});At.displayName="Container";var F3=Function.prototype.bind.call(Function.prototype.call,[].slice);function Pn(e,n){return F3(e.querySelectorAll(n))}function q3(e,n,r){const o=v.useRef(e!==void 0),[s,c]=v.useState(n),d=e!==void 0,h=o.current;return o.current=d,!d&&h&&s!==n&&c(n),[d?e:s,v.useCallback((...f)=>{const[p,...g]=f;let x=r?.(p,...g);return c(p),x},[r])]}function mS(){const[,e]=v.useReducer(n=>n+1,0);return e}const Vu=v.createContext(null);var yb=Object.prototype.hasOwnProperty;function vb(e,n,r){for(r of e.keys())if(Hs(r,n))return r}function Hs(e,n){var r,o,s;if(e===n)return!0;if(e&&n&&(r=e.constructor)===n.constructor){if(r===Date)return e.getTime()===n.getTime();if(r===RegExp)return e.toString()===n.toString();if(r===Array){if((o=e.length)===n.length)for(;o--&&Hs(e[o],n[o]););return o===-1}if(r===Set){if(e.size!==n.size)return!1;for(o of e)if(s=o,s&&typeof s=="object"&&(s=vb(n,s),!s)||!n.has(s))return!1;return!0}if(r===Map){if(e.size!==n.size)return!1;for(o of e)if(s=o[0],s&&typeof s=="object"&&(s=vb(n,s),!s)||!Hs(o[1],n.get(s)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),n=new Uint8Array(n);else if(r===DataView){if((o=e.byteLength)===n.byteLength)for(;o--&&e.getInt8(o)===n.getInt8(o););return o===-1}if(ArrayBuffer.isView(e)){if((o=e.byteLength)===n.byteLength)for(;o--&&e[o]===n[o];);return o===-1}if(!r||typeof e=="object"){o=0;for(r in e)if(yb.call(e,r)&&++o&&!yb.call(n,r)||!(r in n)||!Hs(e[r],n[r]))return!1;return Object.keys(n).length===o}}return e!==e&&n!==n}function I3(e){const n=eS();return[e[0],v.useCallback(r=>{if(n())return e[1](r)},[n,e[1]])]}var ya="top",Xa="bottom",Va="right",va="left",op="auto",vl=[ya,Xa,Va,va],bo="start",Zs="end",G3="clippingParents",hS="viewport",ks="popper",X3="reference",bb=vl.reduce(function(e,n){return e.concat([n+"-"+bo,n+"-"+Zs])},[]),pS=[].concat(vl,[op]).reduce(function(e,n){return e.concat([n,n+"-"+bo,n+"-"+Zs])},[]),V3="beforeRead",Q3="read",K3="afterRead",Z3="beforeMain",W3="main",J3="afterMain",eO="beforeWrite",tO="write",aO="afterWrite",nO=[V3,Q3,K3,Z3,W3,J3,eO,tO,aO];function vn(e){return e.split("-")[0]}function Aa(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var n=e.ownerDocument;return n&&n.defaultView||window}return e}function xi(e){var n=Aa(e).Element;return e instanceof n||e instanceof Element}function bn(e){var n=Aa(e).HTMLElement;return e instanceof n||e instanceof HTMLElement}function sp(e){if(typeof ShadowRoot>"u")return!1;var n=Aa(e).ShadowRoot;return e instanceof n||e instanceof ShadowRoot}var gi=Math.max,hu=Math.min,xo=Math.round;function yh(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(n){return n.brand+"/"+n.version}).join(" "):navigator.userAgent}function gS(){return!/^((?!chrome|android).)*safari/i.test(yh())}function wo(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),s=1,c=1;n&&bn(e)&&(s=e.offsetWidth>0&&xo(o.width)/e.offsetWidth||1,c=e.offsetHeight>0&&xo(o.height)/e.offsetHeight||1);var d=xi(e)?Aa(e):window,h=d.visualViewport,f=!gS()&&r,p=(o.left+(f&&h?h.offsetLeft:0))/s,g=(o.top+(f&&h?h.offsetTop:0))/c,x=o.width/s,b=o.height/c;return{width:x,height:b,top:g,right:p+x,bottom:g+b,left:p,x:p,y:g}}function lp(e){var n=wo(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(n.width-r)<=1&&(r=n.width),Math.abs(n.height-o)<=1&&(o=n.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function yS(e,n){var r=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(r&&sp(r)){var o=n;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function kr(e){return e?(e.nodeName||"").toLowerCase():null}function Xn(e){return Aa(e).getComputedStyle(e)}function rO(e){return["table","td","th"].indexOf(kr(e))>=0}function Pr(e){return((xi(e)?e.ownerDocument:e.document)||window.document).documentElement}function Qu(e){return kr(e)==="html"?e:e.assignedSlot||e.parentNode||(sp(e)?e.host:null)||Pr(e)}function xb(e){return!bn(e)||Xn(e).position==="fixed"?null:e.offsetParent}function iO(e){var n=/firefox/i.test(yh()),r=/Trident/i.test(yh());if(r&&bn(e)){var o=Xn(e);if(o.position==="fixed")return null}var s=Qu(e);for(sp(s)&&(s=s.host);bn(s)&&["html","body"].indexOf(kr(s))<0;){var c=Xn(s);if(c.transform!=="none"||c.perspective!=="none"||c.contain==="paint"||["transform","perspective"].indexOf(c.willChange)!==-1||n&&c.willChange==="filter"||n&&c.filter&&c.filter!=="none")return s;s=s.parentNode}return null}function bl(e){for(var n=Aa(e),r=xb(e);r&&rO(r)&&Xn(r).position==="static";)r=xb(r);return r&&(kr(r)==="html"||kr(r)==="body"&&Xn(r).position==="static")?n:r||iO(e)||n}function cp(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Bs(e,n,r){return gi(e,hu(n,r))}function oO(e,n,r){var o=Bs(e,n,r);return o>r?r:o}function vS(){return{top:0,right:0,bottom:0,left:0}}function bS(e){return Object.assign({},vS(),e)}function xS(e,n){return n.reduce(function(r,o){return r[o]=e,r},{})}var sO=function(n,r){return n=typeof n=="function"?n(Object.assign({},r.rects,{placement:r.placement})):n,bS(typeof n!="number"?n:xS(n,vl))};function lO(e){var n,r=e.state,o=e.name,s=e.options,c=r.elements.arrow,d=r.modifiersData.popperOffsets,h=vn(r.placement),f=cp(h),p=[va,Va].indexOf(h)>=0,g=p?"height":"width";if(!(!c||!d)){var x=sO(s.padding,r),b=lp(c),S=f==="y"?ya:va,w=f==="y"?Xa:Va,R=r.rects.reference[g]+r.rects.reference[f]-d[f]-r.rects.popper[g],E=d[f]-r.rects.reference[f],N=bl(c),_=N?f==="y"?N.clientHeight||0:N.clientWidth||0:0,O=R/2-E/2,M=x[S],D=_-b[g]-x[w],T=_/2-b[g]/2+O,k=Bs(M,T,D),L=f;r.modifiersData[o]=(n={},n[L]=k,n.centerOffset=k-T,n)}}function cO(e){var n=e.state,r=e.options,o=r.element,s=o===void 0?"[data-popper-arrow]":o;s!=null&&(typeof s=="string"&&(s=n.elements.popper.querySelector(s),!s)||yS(n.elements.popper,s)&&(n.elements.arrow=s))}const uO={name:"arrow",enabled:!0,phase:"main",fn:lO,effect:cO,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function So(e){return e.split("-")[1]}var dO={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fO(e,n){var r=e.x,o=e.y,s=n.devicePixelRatio||1;return{x:xo(r*s)/s||0,y:xo(o*s)/s||0}}function wb(e){var n,r=e.popper,o=e.popperRect,s=e.placement,c=e.variation,d=e.offsets,h=e.position,f=e.gpuAcceleration,p=e.adaptive,g=e.roundOffsets,x=e.isFixed,b=d.x,S=b===void 0?0:b,w=d.y,R=w===void 0?0:w,E=typeof g=="function"?g({x:S,y:R}):{x:S,y:R};S=E.x,R=E.y;var N=d.hasOwnProperty("x"),_=d.hasOwnProperty("y"),O=va,M=ya,D=window;if(p){var T=bl(r),k="clientHeight",L="clientWidth";if(T===Aa(r)&&(T=Pr(r),Xn(T).position!=="static"&&h==="absolute"&&(k="scrollHeight",L="scrollWidth")),T=T,s===ya||(s===va||s===Va)&&c===Zs){M=Xa;var H=x&&T===D&&D.visualViewport?D.visualViewport.height:T[k];R-=H-o.height,R*=f?1:-1}if(s===va||(s===ya||s===Xa)&&c===Zs){O=Va;var G=x&&T===D&&D.visualViewport?D.visualViewport.width:T[L];S-=G-o.width,S*=f?1:-1}}var W=Object.assign({position:h},p&&dO),te=g===!0?fO({x:S,y:R},Aa(r)):{x:S,y:R};if(S=te.x,R=te.y,f){var le;return Object.assign({},W,(le={},le[M]=_?"0":"",le[O]=N?"0":"",le.transform=(D.devicePixelRatio||1)<=1?"translate("+S+"px, "+R+"px)":"translate3d("+S+"px, "+R+"px, 0)",le))}return Object.assign({},W,(n={},n[M]=_?R+"px":"",n[O]=N?S+"px":"",n.transform="",n))}function mO(e){var n=e.state,r=e.options,o=r.gpuAcceleration,s=o===void 0?!0:o,c=r.adaptive,d=c===void 0?!0:c,h=r.roundOffsets,f=h===void 0?!0:h,p={placement:vn(n.placement),variation:So(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:s,isFixed:n.options.strategy==="fixed"};n.modifiersData.popperOffsets!=null&&(n.styles.popper=Object.assign({},n.styles.popper,wb(Object.assign({},p,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:d,roundOffsets:f})))),n.modifiersData.arrow!=null&&(n.styles.arrow=Object.assign({},n.styles.arrow,wb(Object.assign({},p,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}const hO={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mO,data:{}};var Fc={passive:!0};function pO(e){var n=e.state,r=e.instance,o=e.options,s=o.scroll,c=s===void 0?!0:s,d=o.resize,h=d===void 0?!0:d,f=Aa(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return c&&p.forEach(function(g){g.addEventListener("scroll",r.update,Fc)}),h&&f.addEventListener("resize",r.update,Fc),function(){c&&p.forEach(function(g){g.removeEventListener("scroll",r.update,Fc)}),h&&f.removeEventListener("resize",r.update,Fc)}}const gO={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:pO,data:{}};var yO={left:"right",right:"left",bottom:"top",top:"bottom"};function nu(e){return e.replace(/left|right|bottom|top/g,function(n){return yO[n]})}var vO={start:"end",end:"start"};function Sb(e){return e.replace(/start|end/g,function(n){return vO[n]})}function up(e){var n=Aa(e),r=n.pageXOffset,o=n.pageYOffset;return{scrollLeft:r,scrollTop:o}}function dp(e){return wo(Pr(e)).left+up(e).scrollLeft}function bO(e,n){var r=Aa(e),o=Pr(e),s=r.visualViewport,c=o.clientWidth,d=o.clientHeight,h=0,f=0;if(s){c=s.width,d=s.height;var p=gS();(p||!p&&n==="fixed")&&(h=s.offsetLeft,f=s.offsetTop)}return{width:c,height:d,x:h+dp(e),y:f}}function xO(e){var n,r=Pr(e),o=up(e),s=(n=e.ownerDocument)==null?void 0:n.body,c=gi(r.scrollWidth,r.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),d=gi(r.scrollHeight,r.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),h=-o.scrollLeft+dp(e),f=-o.scrollTop;return Xn(s||r).direction==="rtl"&&(h+=gi(r.clientWidth,s?s.clientWidth:0)-c),{width:c,height:d,x:h,y:f}}function fp(e){var n=Xn(e),r=n.overflow,o=n.overflowX,s=n.overflowY;return/auto|scroll|overlay|hidden/.test(r+s+o)}function wS(e){return["html","body","#document"].indexOf(kr(e))>=0?e.ownerDocument.body:bn(e)&&fp(e)?e:wS(Qu(e))}function $s(e,n){var r;n===void 0&&(n=[]);var o=wS(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),c=Aa(o),d=s?[c].concat(c.visualViewport||[],fp(o)?o:[]):o,h=n.concat(d);return s?h:h.concat($s(Qu(d)))}function vh(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function wO(e,n){var r=wo(e,!1,n==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Eb(e,n,r){return n===hS?vh(bO(e,r)):xi(n)?wO(n,r):vh(xO(Pr(e)))}function SO(e){var n=$s(Qu(e)),r=["absolute","fixed"].indexOf(Xn(e).position)>=0,o=r&&bn(e)?bl(e):e;return xi(o)?n.filter(function(s){return xi(s)&&yS(s,o)&&kr(s)!=="body"}):[]}function EO(e,n,r,o){var s=n==="clippingParents"?SO(e):[].concat(n),c=[].concat(s,[r]),d=c[0],h=c.reduce(function(f,p){var g=Eb(e,p,o);return f.top=gi(g.top,f.top),f.right=hu(g.right,f.right),f.bottom=hu(g.bottom,f.bottom),f.left=gi(g.left,f.left),f},Eb(e,d,o));return h.width=h.right-h.left,h.height=h.bottom-h.top,h.x=h.left,h.y=h.top,h}function SS(e){var n=e.reference,r=e.element,o=e.placement,s=o?vn(o):null,c=o?So(o):null,d=n.x+n.width/2-r.width/2,h=n.y+n.height/2-r.height/2,f;switch(s){case ya:f={x:d,y:n.y-r.height};break;case Xa:f={x:d,y:n.y+n.height};break;case Va:f={x:n.x+n.width,y:h};break;case va:f={x:n.x-r.width,y:h};break;default:f={x:n.x,y:n.y}}var p=s?cp(s):null;if(p!=null){var g=p==="y"?"height":"width";switch(c){case bo:f[p]=f[p]-(n[g]/2-r[g]/2);break;case Zs:f[p]=f[p]+(n[g]/2-r[g]/2);break}}return f}function Ws(e,n){n===void 0&&(n={});var r=n,o=r.placement,s=o===void 0?e.placement:o,c=r.strategy,d=c===void 0?e.strategy:c,h=r.boundary,f=h===void 0?G3:h,p=r.rootBoundary,g=p===void 0?hS:p,x=r.elementContext,b=x===void 0?ks:x,S=r.altBoundary,w=S===void 0?!1:S,R=r.padding,E=R===void 0?0:R,N=bS(typeof E!="number"?E:xS(E,vl)),_=b===ks?X3:ks,O=e.rects.popper,M=e.elements[w?_:b],D=EO(xi(M)?M:M.contextElement||Pr(e.elements.popper),f,g,d),T=wo(e.elements.reference),k=SS({reference:T,element:O,placement:s}),L=vh(Object.assign({},O,k)),H=b===ks?L:T,G={top:D.top-H.top+N.top,bottom:H.bottom-D.bottom+N.bottom,left:D.left-H.left+N.left,right:H.right-D.right+N.right},W=e.modifiersData.offset;if(b===ks&&W){var te=W[s];Object.keys(G).forEach(function(le){var de=[Va,Xa].indexOf(le)>=0?1:-1,re=[ya,Xa].indexOf(le)>=0?"y":"x";G[le]+=te[re]*de})}return G}function jO(e,n){n===void 0&&(n={});var r=n,o=r.placement,s=r.boundary,c=r.rootBoundary,d=r.padding,h=r.flipVariations,f=r.allowedAutoPlacements,p=f===void 0?pS:f,g=So(o),x=g?h?bb:bb.filter(function(w){return So(w)===g}):vl,b=x.filter(function(w){return p.indexOf(w)>=0});b.length===0&&(b=x);var S=b.reduce(function(w,R){return w[R]=Ws(e,{placement:R,boundary:s,rootBoundary:c,padding:d})[vn(R)],w},{});return Object.keys(S).sort(function(w,R){return S[w]-S[R]})}function RO(e){if(vn(e)===op)return[];var n=nu(e);return[Sb(e),n,Sb(n)]}function NO(e){var n=e.state,r=e.options,o=e.name;if(!n.modifiersData[o]._skip){for(var s=r.mainAxis,c=s===void 0?!0:s,d=r.altAxis,h=d===void 0?!0:d,f=r.fallbackPlacements,p=r.padding,g=r.boundary,x=r.rootBoundary,b=r.altBoundary,S=r.flipVariations,w=S===void 0?!0:S,R=r.allowedAutoPlacements,E=n.options.placement,N=vn(E),_=N===E,O=f||(_||!w?[nu(E)]:RO(E)),M=[E].concat(O).reduce(function(ce,Ee){return ce.concat(vn(Ee)===op?jO(n,{placement:Ee,boundary:g,rootBoundary:x,padding:p,flipVariations:w,allowedAutoPlacements:R}):Ee)},[]),D=n.rects.reference,T=n.rects.popper,k=new Map,L=!0,H=M[0],G=0;G<M.length;G++){var W=M[G],te=vn(W),le=So(W)===bo,de=[ya,Xa].indexOf(te)>=0,re=de?"width":"height",U=Ws(n,{placement:W,boundary:g,rootBoundary:x,altBoundary:b,padding:p}),X=de?le?Va:va:le?Xa:ya;D[re]>T[re]&&(X=nu(X));var J=nu(X),me=[];if(c&&me.push(U[te]<=0),h&&me.push(U[X]<=0,U[J]<=0),me.every(function(ce){return ce})){H=W,L=!1;break}k.set(W,me)}if(L)for(var A=w?3:1,Y=function(Ee){var fe=M.find(function(nt){var $e=k.get(nt);if($e)return $e.slice(0,Ee).every(function(Rt){return Rt})});if(fe)return H=fe,"break"},se=A;se>0;se--){var ne=Y(se);if(ne==="break")break}n.placement!==H&&(n.modifiersData[o]._skip=!0,n.placement=H,n.reset=!0)}}const TO={name:"flip",enabled:!0,phase:"main",fn:NO,requiresIfExists:["offset"],data:{_skip:!1}};function jb(e,n,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-n.height-r.y,right:e.right-n.width+r.x,bottom:e.bottom-n.height+r.y,left:e.left-n.width-r.x}}function Rb(e){return[ya,Va,Xa,va].some(function(n){return e[n]>=0})}function CO(e){var n=e.state,r=e.name,o=n.rects.reference,s=n.rects.popper,c=n.modifiersData.preventOverflow,d=Ws(n,{elementContext:"reference"}),h=Ws(n,{altBoundary:!0}),f=jb(d,o),p=jb(h,s,c),g=Rb(f),x=Rb(p);n.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:p,isReferenceHidden:g,hasPopperEscaped:x},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":g,"data-popper-escaped":x})}const _O={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:CO};function OO(e,n,r){var o=vn(e),s=[va,ya].indexOf(o)>=0?-1:1,c=typeof r=="function"?r(Object.assign({},n,{placement:e})):r,d=c[0],h=c[1];return d=d||0,h=(h||0)*s,[va,Va].indexOf(o)>=0?{x:h,y:d}:{x:d,y:h}}function DO(e){var n=e.state,r=e.options,o=e.name,s=r.offset,c=s===void 0?[0,0]:s,d=pS.reduce(function(g,x){return g[x]=OO(x,n.rects,c),g},{}),h=d[n.placement],f=h.x,p=h.y;n.modifiersData.popperOffsets!=null&&(n.modifiersData.popperOffsets.x+=f,n.modifiersData.popperOffsets.y+=p),n.modifiersData[o]=d}const AO={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:DO};function MO(e){var n=e.state,r=e.name;n.modifiersData[r]=SS({reference:n.rects.reference,element:n.rects.popper,placement:n.placement})}const kO={name:"popperOffsets",enabled:!0,phase:"read",fn:MO,data:{}};function LO(e){return e==="x"?"y":"x"}function zO(e){var n=e.state,r=e.options,o=e.name,s=r.mainAxis,c=s===void 0?!0:s,d=r.altAxis,h=d===void 0?!1:d,f=r.boundary,p=r.rootBoundary,g=r.altBoundary,x=r.padding,b=r.tether,S=b===void 0?!0:b,w=r.tetherOffset,R=w===void 0?0:w,E=Ws(n,{boundary:f,rootBoundary:p,padding:x,altBoundary:g}),N=vn(n.placement),_=So(n.placement),O=!_,M=cp(N),D=LO(M),T=n.modifiersData.popperOffsets,k=n.rects.reference,L=n.rects.popper,H=typeof R=="function"?R(Object.assign({},n.rects,{placement:n.placement})):R,G=typeof H=="number"?{mainAxis:H,altAxis:H}:Object.assign({mainAxis:0,altAxis:0},H),W=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,te={x:0,y:0};if(T){if(c){var le,de=M==="y"?ya:va,re=M==="y"?Xa:Va,U=M==="y"?"height":"width",X=T[M],J=X+E[de],me=X-E[re],A=S?-L[U]/2:0,Y=_===bo?k[U]:L[U],se=_===bo?-L[U]:-k[U],ne=n.elements.arrow,ce=S&&ne?lp(ne):{width:0,height:0},Ee=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:vS(),fe=Ee[de],nt=Ee[re],$e=Bs(0,k[U],ce[U]),Rt=O?k[U]/2-A-$e-fe-G.mainAxis:Y-$e-fe-G.mainAxis,Je=O?-k[U]/2+A+$e+nt+G.mainAxis:se+$e+nt+G.mainAxis,Nt=n.elements.arrow&&bl(n.elements.arrow),ea=Nt?M==="y"?Nt.clientTop||0:Nt.clientLeft||0:0,oa=(le=W?.[M])!=null?le:0,Tt=X+Rt-oa-ea,We=X+Je-oa,Qa=Bs(S?hu(J,Tt):J,X,S?gi(me,We):me);T[M]=Qa,te[M]=Qa-X}if(h){var gt,Yr=M==="x"?ya:va,Zn=M==="x"?Xa:Va,sa=T[D],Sa=D==="y"?"height":"width",la=sa+E[Yr],Ea=sa-E[Zn],Ka=[ya,va].indexOf(N)!==-1,rn=(gt=W?.[D])!=null?gt:0,Me=Ka?la:sa-k[Sa]-L[Sa]-rn+G.altAxis,Ve=Ka?sa+k[Sa]+L[Sa]-rn-G.altAxis:Ea,Yt=S&&Ka?oO(Me,sa,Ve):Bs(S?Me:la,sa,S?Ve:Ea);T[D]=Yt,te[D]=Yt-sa}n.modifiersData[o]=te}}const UO={name:"preventOverflow",enabled:!0,phase:"main",fn:zO,requiresIfExists:["offset"]};function HO(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function BO(e){return e===Aa(e)||!bn(e)?up(e):HO(e)}function $O(e){var n=e.getBoundingClientRect(),r=xo(n.width)/e.offsetWidth||1,o=xo(n.height)/e.offsetHeight||1;return r!==1||o!==1}function PO(e,n,r){r===void 0&&(r=!1);var o=bn(n),s=bn(n)&&$O(n),c=Pr(n),d=wo(e,s,r),h={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(o||!o&&!r)&&((kr(n)!=="body"||fp(c))&&(h=BO(n)),bn(n)?(f=wo(n,!0),f.x+=n.clientLeft,f.y+=n.clientTop):c&&(f.x=dp(c))),{x:d.left+h.scrollLeft-f.x,y:d.top+h.scrollTop-f.y,width:d.width,height:d.height}}function YO(e){var n=new Map,r=new Set,o=[];e.forEach(function(c){n.set(c.name,c)});function s(c){r.add(c.name);var d=[].concat(c.requires||[],c.requiresIfExists||[]);d.forEach(function(h){if(!r.has(h)){var f=n.get(h);f&&s(f)}}),o.push(c)}return e.forEach(function(c){r.has(c.name)||s(c)}),o}function FO(e){var n=YO(e);return nO.reduce(function(r,o){return r.concat(n.filter(function(s){return s.phase===o}))},[])}function qO(e){var n;return function(){return n||(n=new Promise(function(r){Promise.resolve().then(function(){n=void 0,r(e())})})),n}}function IO(e){var n=e.reduce(function(r,o){var s=r[o.name];return r[o.name]=s?Object.assign({},s,o,{options:Object.assign({},s.options,o.options),data:Object.assign({},s.data,o.data)}):o,r},{});return Object.keys(n).map(function(r){return n[r]})}var Nb={placement:"bottom",modifiers:[],strategy:"absolute"};function Tb(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return!n.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function GO(e){e===void 0&&(e={});var n=e,r=n.defaultModifiers,o=r===void 0?[]:r,s=n.defaultOptions,c=s===void 0?Nb:s;return function(h,f,p){p===void 0&&(p=c);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},Nb,c),modifiersData:{},elements:{reference:h,popper:f},attributes:{},styles:{}},x=[],b=!1,S={state:g,setOptions:function(N){var _=typeof N=="function"?N(g.options):N;R(),g.options=Object.assign({},c,g.options,_),g.scrollParents={reference:xi(h)?$s(h):h.contextElement?$s(h.contextElement):[],popper:$s(f)};var O=FO(IO([].concat(o,g.options.modifiers)));return g.orderedModifiers=O.filter(function(M){return M.enabled}),w(),S.update()},forceUpdate:function(){if(!b){var N=g.elements,_=N.reference,O=N.popper;if(Tb(_,O)){g.rects={reference:PO(_,bl(O),g.options.strategy==="fixed"),popper:lp(O)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(G){return g.modifiersData[G.name]=Object.assign({},G.data)});for(var M=0;M<g.orderedModifiers.length;M++){if(g.reset===!0){g.reset=!1,M=-1;continue}var D=g.orderedModifiers[M],T=D.fn,k=D.options,L=k===void 0?{}:k,H=D.name;typeof T=="function"&&(g=T({state:g,options:L,name:H,instance:S})||g)}}}},update:qO(function(){return new Promise(function(E){S.forceUpdate(),E(g)})}),destroy:function(){R(),b=!0}};if(!Tb(h,f))return S;S.setOptions(p).then(function(E){!b&&p.onFirstUpdate&&p.onFirstUpdate(E)});function w(){g.orderedModifiers.forEach(function(E){var N=E.name,_=E.options,O=_===void 0?{}:_,M=E.effect;if(typeof M=="function"){var D=M({state:g,name:N,instance:S,options:O}),T=function(){};x.push(D||T)}})}function R(){x.forEach(function(E){return E()}),x=[]}return S}}const XO=GO({defaultModifiers:[_O,kO,hO,gO,AO,TO,UO,uO]}),VO=["enabled","placement","strategy","modifiers"];function QO(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}const KO={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},ZO={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:n,popper:r}=e.elements;if("removeAttribute"in n){const o=(n.getAttribute("aria-describedby")||"").split(",").filter(s=>s.trim()!==r.id);o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}},fn:({state:e})=>{var n;const{popper:r,reference:o}=e.elements,s=(n=r.getAttribute("role"))==null?void 0:n.toLowerCase();if(r.id&&s==="tooltip"&&"setAttribute"in o){const c=o.getAttribute("aria-describedby");if(c&&c.split(",").indexOf(r.id)!==-1)return;o.setAttribute("aria-describedby",c?`${c},${r.id}`:r.id)}}},WO=[];function JO(e,n,r={}){let{enabled:o=!0,placement:s="bottom",strategy:c="absolute",modifiers:d=WO}=r,h=QO(r,VO);const f=v.useRef(d),p=v.useRef(),g=v.useCallback(()=>{var E;(E=p.current)==null||E.update()},[]),x=v.useCallback(()=>{var E;(E=p.current)==null||E.forceUpdate()},[]),[b,S]=I3(v.useState({placement:s,update:g,forceUpdate:x,attributes:{},styles:{popper:{},arrow:{}}})),w=v.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:E})=>{const N={},_={};Object.keys(E.elements).forEach(O=>{N[O]=E.styles[O],_[O]=E.attributes[O]}),S({state:E,styles:N,attributes:_,update:g,forceUpdate:x,placement:E.placement})}}),[g,x,S]),R=v.useMemo(()=>(Hs(f.current,d)||(f.current=d),f.current),[d]);return v.useEffect(()=>{!p.current||!o||p.current.setOptions({placement:s,strategy:c,modifiers:[...R,w,KO]})},[c,s,w,o,R]),v.useEffect(()=>{if(!(!o||e==null||n==null))return p.current=XO(e,n,Object.assign({},h,{placement:s,strategy:c,modifiers:[...R,ZO,w]})),()=>{p.current!=null&&(p.current.destroy(),p.current=void 0,S(E=>Object.assign({},E,{attributes:{},styles:{popper:{}}})))}},[o,e,n]),b}function pu(e,n){if(e.contains)return e.contains(n);if(e.compareDocumentPosition)return e===n||!!(e.compareDocumentPosition(n)&16)}var Dm,Cb;function eD(){if(Cb)return Dm;Cb=1;var e=function(){};return Dm=e,Dm}var tD=eD();const aD=el(tD),_b=()=>{};function nD(e){return e.button===0}function rD(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Am=e=>e&&("current"in e?e.current:e),Ob={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function iD(e,n=_b,{disabled:r,clickTrigger:o="click"}={}){const s=v.useRef(!1),c=v.useRef(!1),d=v.useCallback(p=>{const g=Am(e);aD(!!g,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),s.current=!g||rD(p)||!nD(p)||!!pu(g,p.target)||c.current,c.current=!1},[e]),h=Wt(p=>{const g=Am(e);g&&pu(g,p.target)?c.current=!0:c.current=!1}),f=Wt(p=>{s.current||n(p)});v.useEffect(()=>{var p,g;if(r||e==null)return;const x=gl(Am(e)),b=x.defaultView||window;let S=(p=b.event)!=null?p:(g=b.parent)==null?void 0:g.event,w=null;Ob[o]&&(w=Or(x,Ob[o],h,!0));const R=Or(x,o,d,!0),E=Or(x,o,_=>{if(_===S){S=void 0;return}f(_)});let N=[];return"ontouchstart"in x.documentElement&&(N=[].slice.call(x.body.children).map(_=>Or(_,"mousemove",_b))),()=>{w?.(),R(),E(),N.forEach(_=>_())}},[e,r,o,d,h,f])}function oD(e){const n={};return Array.isArray(e)?(e?.forEach(r=>{n[r.name]=r}),n):e||n}function sD(e={}){return Array.isArray(e)?e:Object.keys(e).map(n=>(e[n].name=n,e[n]))}function lD({enabled:e,enableEvents:n,placement:r,flip:o,offset:s,fixed:c,containerPadding:d,arrowElement:h,popperConfig:f={}}){var p,g,x,b,S;const w=oD(f.modifiers);return Object.assign({},f,{placement:r,enabled:e,strategy:c?"fixed":f.strategy,modifiers:sD(Object.assign({},w,{eventListeners:{enabled:n,options:(p=w.eventListeners)==null?void 0:p.options},preventOverflow:Object.assign({},w.preventOverflow,{options:d?Object.assign({padding:d},(g=w.preventOverflow)==null?void 0:g.options):(x=w.preventOverflow)==null?void 0:x.options}),offset:{options:Object.assign({offset:s},(b=w.offset)==null?void 0:b.options)},arrow:Object.assign({},w.arrow,{enabled:!!h,options:Object.assign({},(S=w.arrow)==null?void 0:S.options,{element:h})}),flip:Object.assign({enabled:!!o},w.flip)}))})}const cD=["children","usePopper"];function uD(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}const dD=()=>{};function ES(e={}){const n=v.useContext(Vu),[r,o]=E3(),s=v.useRef(!1),{flip:c,offset:d,rootCloseEvent:h,fixed:f=!1,placement:p,popperConfig:g={},enableEventListeners:x=!0,usePopper:b=!!n}=e,S=n?.show==null?!!e.show:n.show;S&&!s.current&&(s.current=!0);const w=T=>{n?.toggle(!1,T)},{placement:R,setMenu:E,menuElement:N,toggleElement:_}=n||{},O=JO(_,N,lD({placement:p||R||"bottom-start",enabled:b,enableEvents:x??S,offset:d,flip:c,fixed:f,arrowElement:r,popperConfig:g})),M=Object.assign({ref:E||dD,"aria-labelledby":_?.id},O.attributes.popper,{style:O.styles.popper}),D={show:S,placement:R,hasShown:s.current,toggle:n?.toggle,popper:b?O:null,arrowProps:b?Object.assign({ref:o},O.attributes.arrow,{style:O.styles.arrow}):{}};return iD(N,w,{clickTrigger:h,disabled:!S}),[M,D]}function jS(e){let{children:n,usePopper:r=!0}=e,o=uD(e,cD);const[s,c]=ES(Object.assign({},o,{usePopper:r}));return u.jsx(u.Fragment,{children:n(s,c)})}jS.displayName="DropdownMenu";const RS={prefix:String(Math.round(Math.random()*1e10)),current:0},NS=Ne.createContext(RS),fD=Ne.createContext(!1);let Mm=new WeakMap;function mD(e=!1){let n=v.useContext(NS),r=v.useRef(null);if(r.current===null&&!e){var o,s;let c=(s=Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||s===void 0||(o=s.ReactCurrentOwner)===null||o===void 0?void 0:o.current;if(c){let d=Mm.get(c);d==null?Mm.set(c,{id:n.current,state:c.memoizedState}):c.memoizedState!==d.state&&(n.current=d.id,Mm.delete(c))}r.current=++n.current}return r.current}function hD(e){let n=v.useContext(NS),r=mD(!!e),o=`react-aria${n.prefix}`;return e||`${o}-${r}`}function pD(e){let n=Ne.useId(),[r]=v.useState(xD()),o=r?"react-aria":`react-aria${RS.prefix}`;return e||`${o}-${n}`}const gD=typeof Ne.useId=="function"?pD:hD;function yD(){return!1}function vD(){return!0}function bD(e){return()=>{}}function xD(){return typeof Ne.useSyncExternalStore=="function"?Ne.useSyncExternalStore(bD,yD,vD):v.useContext(fD)}const TS=e=>{var n;return((n=e.getAttribute("role"))==null?void 0:n.toLowerCase())==="menu"},Db=()=>{};function CS(){const e=gD(),{show:n=!1,toggle:r=Db,setToggle:o,menuElement:s}=v.useContext(Vu)||{},c=v.useCallback(h=>{r(!n,h)},[n,r]),d={id:e,ref:o||Db,onClick:c,"aria-expanded":!!n};return s&&TS(s)&&(d["aria-haspopup"]=!0),[d,{show:n,toggle:r}]}function _S({children:e}){const[n,r]=CS();return u.jsx(u.Fragment,{children:e(n,r)})}_S.displayName="DropdownToggle";const wi=v.createContext(null),Js=(e,n=null)=>e!=null?String(e):n||null,Ku=v.createContext(null);Ku.displayName="NavContext";const wD="data-rr-ui-",SD="rrUi";function Do(e){return`${wD}${e}`}function ED(e){return`${SD}${e}`}const jD=["eventKey","disabled","onClick","active","as"];function RD(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}function OS({key:e,href:n,active:r,disabled:o,onClick:s}){const c=v.useContext(wi),d=v.useContext(Ku),{activeKey:h}=d||{},f=Js(e,n),p=r==null&&e!=null?Js(h)===f:r;return[{onClick:Wt(x=>{o||(s?.(x),c&&!x.isPropagationStopped()&&c(f,x))}),"aria-disabled":o||void 0,"aria-selected":p,[Do("dropdown-item")]:""},{isActive:p}]}const DS=v.forwardRef((e,n)=>{let{eventKey:r,disabled:o,onClick:s,active:c,as:d=np}=e,h=RD(e,jD);const[f]=OS({key:r,href:h.href,disabled:o,onClick:s,active:c});return u.jsx(d,Object.assign({},h,{ref:n},f))});DS.displayName="DropdownItem";const AS=v.createContext(Oo?window:void 0);AS.Provider;function Zu(){return v.useContext(AS)}function Ab(){const e=mS(),n=v.useRef(null),r=v.useCallback(o=>{n.current=o,e()},[e]);return[n,r]}function xl({defaultShow:e,show:n,onSelect:r,onToggle:o,itemSelector:s=`* [${Do("dropdown-item")}]`,focusFirstItemOnShow:c,placement:d="bottom-start",children:h}){const f=Zu(),[p,g]=q3(n,e,o),[x,b]=Ab(),S=x.current,[w,R]=Ab(),E=w.current,N=tS(p),_=v.useRef(null),O=v.useRef(!1),M=v.useContext(wi),D=v.useCallback((W,te,le=te?.type)=>{g(W,{originalEvent:te,source:le})},[g]),T=Wt((W,te)=>{r?.(W,te),D(!1,te,"select"),te.isPropagationStopped()||M?.(W,te)}),k=v.useMemo(()=>({toggle:D,placement:d,show:p,menuElement:S,toggleElement:E,setMenu:b,setToggle:R}),[D,d,p,S,E,b,R]);S&&N&&!p&&(O.current=S.contains(S.ownerDocument.activeElement));const L=Wt(()=>{E&&E.focus&&E.focus()}),H=Wt(()=>{const W=_.current;let te=c;if(te==null&&(te=x.current&&TS(x.current)?"keyboard":!1),te===!1||te==="keyboard"&&!/^key.+$/.test(W))return;const le=Pn(x.current,s)[0];le&&le.focus&&le.focus()});v.useEffect(()=>{p?H():O.current&&(O.current=!1,L())},[p,O,L,H]),v.useEffect(()=>{_.current=null});const G=(W,te)=>{if(!x.current)return null;const le=Pn(x.current,s);let de=le.indexOf(W)+te;return de=Math.max(0,Math.min(de,le.length)),le[de]};return R3(v.useCallback(()=>f.document,[f]),"keydown",W=>{var te,le;const{key:de}=W,re=W.target,U=(te=x.current)==null?void 0:te.contains(re),X=(le=w.current)==null?void 0:le.contains(re);if(/input|textarea/i.test(re.tagName)&&(de===" "||de!=="Escape"&&U||de==="Escape"&&re.type==="search")||!U&&!X||de==="Tab"&&(!x.current||!p))return;_.current=W.type;const me={originalEvent:W,source:W.type};switch(de){case"ArrowUp":{const A=G(re,-1);A&&A.focus&&A.focus(),W.preventDefault();return}case"ArrowDown":if(W.preventDefault(),!p)g(!0,me);else{const A=G(re,1);A&&A.focus&&A.focus()}return;case"Tab":ep(re.ownerDocument,"keyup",A=>{var Y;(A.key==="Tab"&&!A.target||!((Y=x.current)!=null&&Y.contains(A.target)))&&g(!1,me)},{once:!0});break;case"Escape":de==="Escape"&&(W.preventDefault(),W.stopPropagation()),g(!1,me);break}}),u.jsx(wi.Provider,{value:T,children:u.jsx(Vu.Provider,{value:k,children:h})})}xl.displayName="Dropdown";xl.Menu=jS;xl.Toggle=_S;xl.Item=DS;const mp=v.createContext({});mp.displayName="DropdownContext";const MS=v.forwardRef(({className:e,bsPrefix:n,as:r="hr",role:o="separator",...s},c)=>(n=we(n,"dropdown-divider"),u.jsx(r,{ref:c,className:pe(e,n),role:o,...s})));MS.displayName="DropdownDivider";const kS=v.forwardRef(({className:e,bsPrefix:n,as:r="div",role:o="heading",...s},c)=>(n=we(n,"dropdown-header"),u.jsx(r,{ref:c,className:pe(e,n),role:o,...s})));kS.displayName="DropdownHeader";const LS=v.forwardRef(({bsPrefix:e,className:n,eventKey:r,disabled:o=!1,onClick:s,active:c,as:d=Gu,...h},f)=>{const p=we(e,"dropdown-item"),[g,x]=OS({key:r,href:h.href,disabled:o,onClick:s,active:c});return u.jsx(d,{...h,...g,ref:f,className:pe(n,p,x.isActive&&"active",o&&"disabled")})});LS.displayName="DropdownItem";const zS=v.forwardRef(({className:e,bsPrefix:n,as:r="span",...o},s)=>(n=we(n,"dropdown-item-text"),u.jsx(r,{ref:s,className:pe(e,n),...o})));zS.displayName="DropdownItemText";const ND=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",TD=typeof document<"u",US=TD||ND?v.useLayoutEffect:v.useEffect,Wu=v.createContext(null);Wu.displayName="InputGroupContext";const ji=v.createContext(null);ji.displayName="NavbarContext";function HS(e,n){return e}function BS(e,n,r){const o=r?"top-end":"top-start",s=r?"top-start":"top-end",c=r?"bottom-end":"bottom-start",d=r?"bottom-start":"bottom-end",h=r?"right-start":"left-start",f=r?"right-end":"left-end",p=r?"left-start":"right-start",g=r?"left-end":"right-end";let x=e?d:c;return n==="up"?x=e?s:o:n==="end"?x=e?g:p:n==="start"?x=e?f:h:n==="down-centered"?x="bottom":n==="up-centered"&&(x="top"),x}const $S=v.forwardRef(({bsPrefix:e,className:n,align:r,rootCloseEvent:o,flip:s=!0,show:c,renderOnMount:d,as:h="div",popperConfig:f,variant:p,...g},x)=>{let b=!1;const S=v.useContext(ji),w=we(e,"dropdown-menu"),{align:R,drop:E,isRTL:N}=v.useContext(mp);r=r||R;const _=v.useContext(Wu),O=[];if(r)if(typeof r=="object"){const W=Object.keys(r);if(W.length){const te=W[0],le=r[te];b=le==="start",O.push(`${w}-${te}-${le}`)}}else r==="end"&&(b=!0);const M=BS(b,E,N),[D,{hasShown:T,popper:k,show:L,toggle:H}]=ES({flip:s,rootCloseEvent:o,show:c,usePopper:!S&&O.length===0,offset:[0,2],popperConfig:f,placement:M});if(D.ref=qu(HS(x),D.ref),US(()=>{L&&k?.update()},[L]),!T&&!d&&!_)return null;typeof h!="string"&&(D.show=L,D.close=()=>H?.(!1),D.align=r);let G=g.style;return k!=null&&k.placement&&(G={...g.style,...D.style},g["x-placement"]=k.placement),u.jsx(h,{...g,...D,style:G,...(O.length||S)&&{"data-bs-popper":"static"},className:pe(n,w,L&&"show",b&&`${w}-end`,p&&`${w}-${p}`,...O)})});$S.displayName="DropdownMenu";const PS=v.forwardRef(({bsPrefix:e,split:n,className:r,childBsPrefix:o,as:s=ze,...c},d)=>{const h=we(e,"dropdown-toggle"),f=v.useContext(Vu);o!==void 0&&(c.bsPrefix=o);const[p]=CS();return p.ref=qu(p.ref,HS(d)),u.jsx(s,{className:pe(r,h,n&&`${h}-split`,f?.show&&"show"),...p,...c})});PS.displayName="DropdownToggle";const YS=v.forwardRef((e,n)=>{const{bsPrefix:r,drop:o="down",show:s,className:c,align:d="start",onSelect:h,onToggle:f,focusFirstItemOnShow:p,as:g="div",navbar:x,autoClose:b=!0,...S}=Fu(e,{show:"onToggle"}),w=v.useContext(Wu),R=we(r,"dropdown"),E=G1(),N=k=>b===!1?k==="click":b==="inside"?k!=="rootClose":b==="outside"?k!=="select":!0,_=Mr((k,L)=>{var H;!((H=L.originalEvent)==null||(H=H.target)==null)&&H.classList.contains("dropdown-toggle")&&L.source==="mousedown"||(L.originalEvent.currentTarget===document&&(L.source!=="keydown"||L.originalEvent.key==="Escape")&&(L.source="rootClose"),N(L.source)&&f?.(k,L))}),M=BS(d==="end",o,E),D=v.useMemo(()=>({align:d,drop:o,isRTL:E}),[d,o,E]),T={down:R,"down-centered":`${R}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return u.jsx(mp.Provider,{value:D,children:u.jsx(xl,{placement:M,show:s,onSelect:h,onToggle:_,focusFirstItemOnShow:p,itemSelector:`.${R}-item:not(.disabled):not(:disabled)`,children:w?S.children:u.jsx(g,{...S,ref:n,className:pe(c,s&&"show",T[o])})})})});YS.displayName="Dropdown";const Sr=Object.assign(YS,{Toggle:PS,Menu:$S,Item:LS,ItemText:zS,Divider:MS,Header:kS});ha.string,ha.bool,ha.bool,ha.bool,ha.bool;const bh=v.forwardRef(({bsPrefix:e,className:n,fluid:r=!1,rounded:o=!1,roundedCircle:s=!1,thumbnail:c=!1,...d},h)=>(e=we(e,"img"),u.jsx("img",{ref:h,...d,className:pe(n,r&&`${e}-fluid`,o&&"rounded",s&&"rounded-circle",c&&`${e}-thumbnail`)})));bh.displayName="Image";const CD={type:ha.string,tooltip:ha.bool,as:ha.elementType},Ju=v.forwardRef(({as:e="div",className:n,type:r="valid",tooltip:o=!1,...s},c)=>u.jsx(e,{...s,ref:c,className:pe(n,`${r}-${o?"tooltip":"feedback"}`)}));Ju.displayName="Feedback";Ju.propTypes=CD;const Vn=v.createContext({}),wl=v.forwardRef(({id:e,bsPrefix:n,className:r,type:o="checkbox",isValid:s=!1,isInvalid:c=!1,as:d="input",...h},f)=>{const{controlId:p}=v.useContext(Vn);return n=we(n,"form-check-input"),u.jsx(d,{...h,ref:f,type:o,id:e||p,className:pe(r,n,s&&"is-valid",c&&"is-invalid")})});wl.displayName="FormCheckInput";const gu=v.forwardRef(({bsPrefix:e,className:n,htmlFor:r,...o},s)=>{const{controlId:c}=v.useContext(Vn);return e=we(e,"form-check-label"),u.jsx("label",{...o,ref:s,htmlFor:r||c,className:pe(n,e)})});gu.displayName="FormCheckLabel";const FS=v.forwardRef(({id:e,bsPrefix:n,bsSwitchPrefix:r,inline:o=!1,reverse:s=!1,disabled:c=!1,isValid:d=!1,isInvalid:h=!1,feedbackTooltip:f=!1,feedback:p,feedbackType:g,className:x,style:b,title:S="",type:w="checkbox",label:R,children:E,as:N="input",..._},O)=>{n=we(n,"form-check"),r=we(r,"form-switch");const{controlId:M}=v.useContext(Vn),D=v.useMemo(()=>({controlId:e||M}),[M,e]),T=!E&&R!=null&&R!==!1||P3(E,gu),k=u.jsx(wl,{..._,type:w==="switch"?"checkbox":w,ref:O,isValid:d,isInvalid:h,disabled:c,as:N});return u.jsx(Vn.Provider,{value:D,children:u.jsx("div",{style:b,className:pe(x,T&&n,o&&`${n}-inline`,s&&`${n}-reverse`,w==="switch"&&r),children:E||u.jsxs(u.Fragment,{children:[k,T&&u.jsx(gu,{title:S,children:R}),p&&u.jsx(Ju,{type:g,tooltip:f,children:p})]})})})});FS.displayName="FormCheck";const yu=Object.assign(FS,{Input:wl,Label:gu}),qS=v.forwardRef(({bsPrefix:e,type:n,size:r,htmlSize:o,id:s,className:c,isValid:d=!1,isInvalid:h=!1,plaintext:f,readOnly:p,as:g="input",...x},b)=>{const{controlId:S}=v.useContext(Vn);return e=we(e,"form-control"),u.jsx(g,{...x,type:n,size:o,ref:b,readOnly:p,id:s||S,className:pe(c,f?`${e}-plaintext`:e,r&&`${e}-${r}`,n==="color"&&`${e}-color`,d&&"is-valid",h&&"is-invalid")})});qS.displayName="FormControl";const _D=Object.assign(qS,{Feedback:Ju}),IS=v.forwardRef(({className:e,bsPrefix:n,as:r="div",...o},s)=>(n=we(n,"form-floating"),u.jsx(r,{ref:s,className:pe(e,n),...o})));IS.displayName="FormFloating";const hp=v.forwardRef(({controlId:e,as:n="div",...r},o)=>{const s=v.useMemo(()=>({controlId:e}),[e]);return u.jsx(Vn.Provider,{value:s,children:u.jsx(n,{...r,ref:o})})});hp.displayName="FormGroup";const GS=v.forwardRef(({as:e="label",bsPrefix:n,column:r=!1,visuallyHidden:o=!1,className:s,htmlFor:c,...d},h)=>{const{controlId:f}=v.useContext(Vn);n=we(n,"form-label");let p="col-form-label";typeof r=="string"&&(p=`${p} ${p}-${r}`);const g=pe(s,n,o&&"visually-hidden",r&&p);return c=c||f,r?u.jsx(Ke,{ref:h,as:"label",className:g,htmlFor:c,...d}):u.jsx(e,{ref:h,className:g,htmlFor:c,...d})});GS.displayName="FormLabel";const XS=v.forwardRef(({bsPrefix:e,className:n,id:r,...o},s)=>{const{controlId:c}=v.useContext(Vn);return e=we(e,"form-range"),u.jsx("input",{...o,type:"range",ref:s,className:pe(n,e),id:r||c})});XS.displayName="FormRange";const VS=v.forwardRef(({bsPrefix:e,size:n,htmlSize:r,className:o,isValid:s=!1,isInvalid:c=!1,id:d,...h},f)=>{const{controlId:p}=v.useContext(Vn);return e=we(e,"form-select"),u.jsx("select",{...h,size:r,ref:f,className:pe(o,e,n&&`${e}-${n}`,s&&"is-valid",c&&"is-invalid"),id:d||p})});VS.displayName="FormSelect";const QS=v.forwardRef(({bsPrefix:e,className:n,as:r="small",muted:o,...s},c)=>(e=we(e,"form-text"),u.jsx(r,{...s,ref:c,className:pe(n,e,o&&"text-muted")})));QS.displayName="FormText";const KS=v.forwardRef((e,n)=>u.jsx(yu,{...e,ref:n,type:"switch"}));KS.displayName="Switch";const OD=Object.assign(KS,{Input:yu.Input,Label:yu.Label}),ZS=v.forwardRef(({bsPrefix:e,className:n,children:r,controlId:o,label:s,...c},d)=>(e=we(e,"form-floating"),u.jsxs(hp,{ref:d,className:pe(n,e),controlId:o,...c,children:[r,u.jsx("label",{htmlFor:o,children:s})]})));ZS.displayName="FloatingLabel";const DD={_ref:ha.any,validated:ha.bool,as:ha.elementType},pp=v.forwardRef(({className:e,validated:n,as:r="form",...o},s)=>u.jsx(r,{...o,ref:s,className:pe(e,n&&"was-validated")}));pp.displayName="Form";pp.propTypes=DD;const _e=Object.assign(pp,{Group:hp,Control:_D,Floating:IS,Check:yu,Switch:OD,Label:GS,Text:QS,Range:XS,Select:VS,FloatingLabel:ZS}),ed=v.forwardRef(({className:e,bsPrefix:n,as:r="span",...o},s)=>(n=we(n,"input-group-text"),u.jsx(r,{ref:s,className:pe(e,n),...o})));ed.displayName="InputGroupText";const AD=e=>u.jsx(ed,{children:u.jsx(wl,{type:"checkbox",...e})}),MD=e=>u.jsx(ed,{children:u.jsx(wl,{type:"radio",...e})}),WS=v.forwardRef(({bsPrefix:e,size:n,hasValidation:r,className:o,as:s="div",...c},d)=>{e=we(e,"input-group");const h=v.useMemo(()=>({}),[]);return u.jsx(Wu.Provider,{value:h,children:u.jsx(s,{ref:d,...c,className:pe(o,e,n&&`${e}-${n}`,r&&"has-validation")})})});WS.displayName="InputGroup";const kD=Object.assign(WS,{Text:ed,Radio:MD,Checkbox:AD}),Mb=e=>!e||typeof e=="function"?e:n=>{e.current=n};function LD(e,n){const r=Mb(e),o=Mb(n);return s=>{r&&r(s),o&&o(s)}}function td(e,n){return v.useMemo(()=>LD(e,n),[e,n])}const JS=v.createContext(null),zD=["as","active","eventKey"];function UD(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}function eE({key:e,onClick:n,active:r,id:o,role:s,disabled:c}){const d=v.useContext(wi),h=v.useContext(Ku),f=v.useContext(JS);let p=r;const g={role:s};if(h){!s&&h.role==="tablist"&&(g.role="tab");const x=h.getControllerId(e??null),b=h.getControlledId(e??null);g[Do("event-key")]=e,g.id=x||o,p=r==null&&e!=null?h.activeKey===e:r,(p||!(f!=null&&f.unmountOnExit)&&!(f!=null&&f.mountOnEnter))&&(g["aria-controls"]=b)}return g.role==="tab"&&(g["aria-selected"]=p,p||(g.tabIndex=-1),c&&(g.tabIndex=-1,g["aria-disabled"]=!0)),g.onClick=Wt(x=>{c||(n?.(x),e!=null&&d&&!x.isPropagationStopped()&&d(e,x))}),[g,{isActive:p}]}const tE=v.forwardRef((e,n)=>{let{as:r=np,active:o,eventKey:s}=e,c=UD(e,zD);const[d,h]=eE(Object.assign({key:Js(s,c.href),active:o},c));return d[Do("active")]=h.isActive,u.jsx(r,Object.assign({},c,d,{ref:n}))});tE.displayName="NavItem";const HD=["as","onSelect","activeKey","role","onKeyDown"];function BD(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}const kb=()=>{},Lb=Do("event-key"),aE=v.forwardRef((e,n)=>{let{as:r="div",onSelect:o,activeKey:s,role:c,onKeyDown:d}=e,h=BD(e,HD);const f=mS(),p=v.useRef(!1),g=v.useContext(wi),x=v.useContext(JS);let b,S;x&&(c=c||"tablist",s=x.activeKey,b=x.getControlledId,S=x.getControllerId);const w=v.useRef(null),R=O=>{const M=w.current;if(!M)return null;const D=Pn(M,`[${Lb}]:not([aria-disabled=true])`),T=M.querySelector("[aria-selected=true]");if(!T||T!==document.activeElement)return null;const k=D.indexOf(T);if(k===-1)return null;let L=k+O;return L>=D.length&&(L=0),L<0&&(L=D.length-1),D[L]},E=(O,M)=>{O!=null&&(o?.(O,M),g?.(O,M))},N=O=>{if(d?.(O),!x)return;let M;switch(O.key){case"ArrowLeft":case"ArrowUp":M=R(-1);break;case"ArrowRight":case"ArrowDown":M=R(1);break;default:return}M&&(O.preventDefault(),E(M.dataset[ED("EventKey")]||null,O),p.current=!0,f())};v.useEffect(()=>{if(w.current&&p.current){const O=w.current.querySelector(`[${Lb}][aria-selected=true]`);O?.focus()}p.current=!1});const _=td(n,w);return u.jsx(wi.Provider,{value:E,children:u.jsx(Ku.Provider,{value:{role:c,activeKey:Js(s),getControlledId:b||kb,getControllerId:S||kb},children:u.jsx(r,Object.assign({},h,{onKeyDown:N,ref:_,role:c}))})})});aE.displayName="Nav";const $D=Object.assign(aE,{Item:tE});var qc;function zb(e){if((!qc&&qc!==0||e)&&Oo){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),qc=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return qc}function PD(){return v.useState(null)}function km(e){e===void 0&&(e=gl());try{var n=e.activeElement;return!n||!n.nodeName?null:n}catch{return e.body}}function YD(e){const n=v.useRef(e);return n.current=e,n}function FD(e){const n=YD(e);v.useEffect(()=>()=>n.current(),[])}function qD(e=document){const n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}const Ub=Do("modal-open");class gp{constructor({ownerDocument:n,handleContainerOverflow:r=!0,isRTL:o=!1}={}){this.handleContainerOverflow=r,this.isRTL=o,this.modals=[],this.ownerDocument=n}getScrollbarWidth(){return qD(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(n){}removeModalAttributes(n){}setContainerStyle(n){const r={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",s=this.getElement();n.style={overflow:s.style.overflow,[o]:s.style[o]},n.scrollBarWidth&&(r[o]=`${parseInt(qn(s,o)||"0",10)+n.scrollBarWidth}px`),s.setAttribute(Ub,""),qn(s,r)}reset(){[...this.modals].forEach(n=>this.remove(n))}removeContainerStyle(n){const r=this.getElement();r.removeAttribute(Ub),Object.assign(r.style,n.style)}add(n){let r=this.modals.indexOf(n);return r!==-1||(r=this.modals.length,this.modals.push(n),this.setModalAttributes(n),r!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),r}remove(n){const r=this.modals.indexOf(n);r!==-1&&(this.modals.splice(r,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(n))}isTopModal(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n}}const Lm=(e,n)=>Oo?e==null?(n||gl()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function ID(e,n){const r=Zu(),[o,s]=v.useState(()=>Lm(e,r?.document));if(!o){const c=Lm(e);c&&s(c)}return v.useEffect(()=>{},[n,o]),v.useEffect(()=>{const c=Lm(e);c!==o&&s(c)},[e,o]),o}function GD({children:e,in:n,onExited:r,mountOnEnter:o,unmountOnExit:s}){const c=v.useRef(null),d=v.useRef(n),h=Wt(r);v.useEffect(()=>{n?d.current=!0:h(c.current)},[n,h]);const f=td(c,_o(e)),p=v.cloneElement(e,{ref:f});return n?p:s||!d.current&&o?null:p}const XD=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function VD(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}function QD(e){let{onEnter:n,onEntering:r,onEntered:o,onExit:s,onExiting:c,onExited:d,addEndListener:h,children:f}=e,p=VD(e,XD);const g=v.useRef(null),x=td(g,_o(f)),b=M=>D=>{M&&g.current&&M(g.current,D)},S=v.useCallback(b(n),[n]),w=v.useCallback(b(r),[r]),R=v.useCallback(b(o),[o]),E=v.useCallback(b(s),[s]),N=v.useCallback(b(c),[c]),_=v.useCallback(b(d),[d]),O=v.useCallback(b(h),[h]);return Object.assign({},p,{nodeRef:g},n&&{onEnter:S},r&&{onEntering:w},o&&{onEntered:R},s&&{onExit:E},c&&{onExiting:N},d&&{onExited:_},h&&{addEndListener:O},{children:typeof f=="function"?(M,D)=>f(M,Object.assign({},D,{ref:x})):v.cloneElement(f,{ref:x})})}const KD=["component"];function ZD(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}const WD=v.forwardRef((e,n)=>{let{component:r}=e,o=ZD(e,KD);const s=QD(o);return u.jsx(r,Object.assign({ref:n},s))});function JD({in:e,onTransition:n}){const r=v.useRef(null),o=v.useRef(!0),s=Wt(n);return gb(()=>{if(!r.current)return;let c=!1;return s({in:e,element:r.current,initial:o.current,isStale:()=>c}),()=>{c=!0}},[e,s]),gb(()=>(o.current=!1,()=>{o.current=!0}),[]),r}function eA({children:e,in:n,onExited:r,onEntered:o,transition:s}){const[c,d]=v.useState(!n);n&&c&&d(!1);const h=JD({in:!!n,onTransition:p=>{const g=()=>{p.isStale()||(p.in?o?.(p.element,p.initial):(d(!0),r?.(p.element)))};Promise.resolve(s(p)).then(g,x=>{throw p.in||d(!0),x})}}),f=td(h,_o(e));return c&&!n?null:v.cloneElement(e,{ref:f})}function Hb(e,n,r){return e?u.jsx(WD,Object.assign({},r,{component:e})):n?u.jsx(eA,Object.assign({},r,{transition:n})):u.jsx(GD,Object.assign({},r))}const tA=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function aA(e,n){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;r[o]=e[o]}return r}let zm;function nA(e){return zm||(zm=new gp({ownerDocument:e?.document})),zm}function rA(e){const n=Zu(),r=e||nA(n),o=v.useRef({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>r.add(o.current),remove:()=>r.remove(o.current),isTopModal:()=>r.isTopModal(o.current),setDialogRef:v.useCallback(s=>{o.current.dialog=s},[]),setBackdropRef:v.useCallback(s=>{o.current.backdrop=s},[])})}const nE=v.forwardRef((e,n)=>{let{show:r=!1,role:o="dialog",className:s,style:c,children:d,backdrop:h=!0,keyboard:f=!0,onBackdropClick:p,onEscapeKeyDown:g,transition:x,runTransition:b,backdropTransition:S,runBackdropTransition:w,autoFocus:R=!0,enforceFocus:E=!0,restoreFocus:N=!0,restoreFocusOptions:_,renderDialog:O,renderBackdrop:M=We=>u.jsx("div",Object.assign({},We)),manager:D,container:T,onShow:k,onHide:L=()=>{},onExit:H,onExited:G,onExiting:W,onEnter:te,onEntering:le,onEntered:de}=e,re=aA(e,tA);const U=Zu(),X=ID(T),J=rA(D),me=eS(),A=tS(r),[Y,se]=v.useState(!r),ne=v.useRef(null);v.useImperativeHandle(n,()=>J,[J]),Oo&&!A&&r&&(ne.current=km(U?.document)),r&&Y&&se(!1);const ce=Wt(()=>{if(J.add(),Je.current=Or(document,"keydown",$e),Rt.current=Or(document,"focus",()=>setTimeout(fe),!0),k&&k(),R){var We,Qa;const gt=km((We=(Qa=J.dialog)==null?void 0:Qa.ownerDocument)!=null?We:U?.document);J.dialog&&gt&&!pu(J.dialog,gt)&&(ne.current=gt,J.dialog.focus())}}),Ee=Wt(()=>{if(J.remove(),Je.current==null||Je.current(),Rt.current==null||Rt.current(),N){var We;(We=ne.current)==null||We.focus==null||We.focus(_),ne.current=null}});v.useEffect(()=>{!r||!X||ce()},[r,X,ce]),v.useEffect(()=>{Y&&Ee()},[Y,Ee]),FD(()=>{Ee()});const fe=Wt(()=>{if(!E||!me()||!J.isTopModal())return;const We=km(U?.document);J.dialog&&We&&!pu(J.dialog,We)&&J.dialog.focus()}),nt=Wt(We=>{We.target===We.currentTarget&&(p?.(We),h===!0&&L())}),$e=Wt(We=>{f&&f3(We)&&J.isTopModal()&&(g?.(We),We.defaultPrevented||L())}),Rt=v.useRef(),Je=v.useRef(),Nt=(...We)=>{se(!0),G?.(...We)};if(!X)return null;const ea=Object.assign({role:o,ref:J.setDialogRef,"aria-modal":o==="dialog"?!0:void 0},re,{style:c,className:s,tabIndex:-1});let oa=O?O(ea):u.jsx("div",Object.assign({},ea,{children:v.cloneElement(d,{role:"document"})}));oa=Hb(x,b,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:H,onExiting:W,onExited:Nt,onEnter:te,onEntering:le,onEntered:de,children:oa});let Tt=null;return h&&(Tt=M({ref:J.setBackdropRef,onClick:nt}),Tt=Hb(S,w,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Tt})),u.jsx(u.Fragment,{children:fo.createPortal(u.jsxs(u.Fragment,{children:[Tt,oa]}),X)})});nE.displayName="Modal";const rE=Object.assign(nE,{Manager:gp});function iA(e,n){return e.classList?e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}function oA(e,n){e.classList?e.classList.add(n):iA(e,n)||(typeof e.className=="string"?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function Bb(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function sA(e,n){e.classList?e.classList.remove(n):typeof e.className=="string"?e.className=Bb(e.className,n):e.setAttribute("class",Bb(e.className&&e.className.baseVal||"",n))}const co={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class iE extends gp{adjustAndStore(n,r,o){const s=r.style[n];r.dataset[n]=s,qn(r,{[n]:`${parseFloat(qn(r,n))+o}px`})}restore(n,r){const o=r.dataset[n];o!==void 0&&(delete r.dataset[n],qn(r,{[n]:o}))}setContainerStyle(n){super.setContainerStyle(n);const r=this.getElement();if(oA(r,"modal-open"),!n.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";Pn(r,co.FIXED_CONTENT).forEach(c=>this.adjustAndStore(o,c,n.scrollBarWidth)),Pn(r,co.STICKY_CONTENT).forEach(c=>this.adjustAndStore(s,c,-n.scrollBarWidth)),Pn(r,co.NAVBAR_TOGGLER).forEach(c=>this.adjustAndStore(s,c,n.scrollBarWidth))}removeContainerStyle(n){super.removeContainerStyle(n);const r=this.getElement();sA(r,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";Pn(r,co.FIXED_CONTENT).forEach(c=>this.restore(o,c)),Pn(r,co.STICKY_CONTENT).forEach(c=>this.restore(s,c)),Pn(r,co.NAVBAR_TOGGLER).forEach(c=>this.restore(s,c))}}let Um;function oE(e){return Um||(Um=new iE(e)),Um}const sE=v.forwardRef(({className:e,bsPrefix:n,as:r="div",...o},s)=>(n=we(n,"modal-body"),u.jsx(r,{ref:s,className:pe(e,n),...o})));sE.displayName="ModalBody";const yp=v.createContext({onHide(){}}),vp=v.forwardRef(({bsPrefix:e,className:n,contentClassName:r,centered:o,size:s,fullscreen:c,children:d,scrollable:h,...f},p)=>{e=we(e,"modal");const g=`${e}-dialog`,x=typeof c=="string"?`${e}-fullscreen-${c}`:`${e}-fullscreen`;return u.jsx("div",{...f,ref:p,className:pe(g,n,s&&`${e}-${s}`,o&&`${g}-centered`,h&&`${g}-scrollable`,c&&x),children:u.jsx("div",{className:pe(`${e}-content`,r),children:d})})});vp.displayName="ModalDialog";const lE=v.forwardRef(({className:e,bsPrefix:n,as:r="div",...o},s)=>(n=we(n,"modal-footer"),u.jsx(r,{ref:s,className:pe(e,n),...o})));lE.displayName="ModalFooter";const bp=v.forwardRef(({closeLabel:e="Close",closeVariant:n,closeButton:r=!1,onHide:o,children:s,...c},d)=>{const h=v.useContext(yp),f=Mr(()=>{h?.onHide(),o?.()});return u.jsxs("div",{ref:d,...c,children:[s,r&&u.jsx(Xu,{"aria-label":e,variant:n,onClick:f})]})});bp.displayName="AbstractModalHeader";const cE=v.forwardRef(({bsPrefix:e,className:n,closeLabel:r="Close",closeButton:o=!1,...s},c)=>(e=we(e,"modal-header"),u.jsx(bp,{ref:c,...s,className:pe(n,e),closeLabel:r,closeButton:o})));cE.displayName="ModalHeader";const lA=yl("h4"),uE=v.forwardRef(({className:e,bsPrefix:n,as:r=lA,...o},s)=>(n=we(n,"modal-title"),u.jsx(r,{ref:s,className:pe(e,n),...o})));uE.displayName="ModalTitle";function cA(e){return u.jsx(vo,{...e,timeout:null})}function uA(e){return u.jsx(vo,{...e,timeout:null})}const dE=v.forwardRef(({bsPrefix:e,className:n,style:r,dialogClassName:o,contentClassName:s,children:c,dialogAs:d=vp,"data-bs-theme":h,"aria-labelledby":f,"aria-describedby":p,"aria-label":g,show:x=!1,animation:b=!0,backdrop:S=!0,keyboard:w=!0,onEscapeKeyDown:R,onShow:E,onHide:N,container:_,autoFocus:O=!0,enforceFocus:M=!0,restoreFocus:D=!0,restoreFocusOptions:T,onEntered:k,onExit:L,onExiting:H,onEnter:G,onEntering:W,onExited:te,backdropClassName:le,manager:de,...re},U)=>{const[X,J]=v.useState({}),[me,A]=v.useState(!1),Y=v.useRef(!1),se=v.useRef(!1),ne=v.useRef(null),[ce,Ee]=PD(),fe=qu(U,Ee),nt=Mr(N),$e=G1();e=we(e,"modal");const Rt=v.useMemo(()=>({onHide:nt}),[nt]);function Je(){return de||oE({isRTL:$e})}function Nt(Me){if(!Oo)return;const Ve=Je().getScrollbarWidth()>0,Yt=Me.scrollHeight>gl(Me).documentElement.clientHeight;J({paddingRight:Ve&&!Yt?zb():void 0,paddingLeft:!Ve&&Yt?zb():void 0})}const ea=Mr(()=>{ce&&Nt(ce.dialog)});B3(()=>{gh(window,"resize",ea),ne.current==null||ne.current()});const oa=()=>{Y.current=!0},Tt=Me=>{Y.current&&ce&&Me.target===ce.dialog&&(se.current=!0),Y.current=!1},We=()=>{A(!0),ne.current=Q1(ce.dialog,()=>{A(!1)})},Qa=Me=>{Me.target===Me.currentTarget&&We()},gt=Me=>{if(S==="static"){Qa(Me);return}if(se.current||Me.target!==Me.currentTarget){se.current=!1;return}N?.()},Yr=Me=>{w?R?.(Me):(Me.preventDefault(),S==="static"&&We())},Zn=(Me,Ve)=>{Me&&Nt(Me),G?.(Me,Ve)},sa=Me=>{ne.current==null||ne.current(),L?.(Me)},Sa=(Me,Ve)=>{W?.(Me,Ve),ep(window,"resize",ea)},la=Me=>{Me&&(Me.style.display=""),te?.(Me),gh(window,"resize",ea)},Ea=v.useCallback(Me=>u.jsx("div",{...Me,className:pe(`${e}-backdrop`,le,!b&&"show")}),[b,le,e]),Ka={...r,...X};Ka.display="block";const rn=Me=>u.jsx("div",{role:"dialog",...Me,style:Ka,className:pe(n,e,me&&`${e}-static`,!b&&"show"),onClick:S?gt:void 0,onMouseUp:Tt,"data-bs-theme":h,"aria-label":g,"aria-labelledby":f,"aria-describedby":p,children:u.jsx(d,{...re,onMouseDown:oa,className:o,contentClassName:s,children:c})});return u.jsx(yp.Provider,{value:Rt,children:u.jsx(rE,{show:x,ref:fe,backdrop:S,container:_,keyboard:!0,autoFocus:O,enforceFocus:M,restoreFocus:D,restoreFocusOptions:T,onEscapeKeyDown:Yr,onShow:E,onHide:N,onEnter:Zn,onEntering:Sa,onEntered:k,onExit:sa,onExiting:H,onExited:la,manager:Je(),transition:b?cA:void 0,backdropTransition:b?uA:void 0,renderBackdrop:Ea,renderDialog:rn})})});dE.displayName="Modal";const $t=Object.assign(dE,{Body:sE,Header:cE,Title:uE,Footer:lE,Dialog:vp,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),fE=v.forwardRef(({className:e,bsPrefix:n,as:r="div",...o},s)=>(n=we(n,"nav-item"),u.jsx(r,{ref:s,className:pe(e,n),...o})));fE.displayName="NavItem";const mE=v.forwardRef(({bsPrefix:e,className:n,as:r=Gu,active:o,eventKey:s,disabled:c=!1,...d},h)=>{e=we(e,"nav-link");const[f,p]=eE({key:Js(s,d.href),active:o,disabled:c,...d});return u.jsx(r,{...d,...f,ref:h,disabled:c,className:pe(n,e,c&&"disabled",p.isActive&&"active")})});mE.displayName="NavLink";const hE=v.forwardRef((e,n)=>{const{as:r="div",bsPrefix:o,variant:s,fill:c=!1,justify:d=!1,navbar:h,navbarScroll:f,className:p,activeKey:g,...x}=Fu(e,{activeKey:"onSelect"}),b=we(o,"nav");let S,w,R=!1;const E=v.useContext(ji),N=v.useContext(ip);return E?(S=E.bsPrefix,R=h??!0):N&&({cardHeaderBsPrefix:w}=N),u.jsx($D,{as:r,ref:n,activeKey:g,className:pe(p,{[b]:!R,[`${S}-nav`]:R,[`${S}-nav-scroll`]:R&&f,[`${w}-${s}`]:!!w,[`${b}-${s}`]:!!s,[`${b}-fill`]:c,[`${b}-justified`]:d}),...x})});hE.displayName="Nav";const Yn=Object.assign(hE,{Item:fE,Link:mE}),pE=v.forwardRef(({bsPrefix:e,className:n,as:r,...o},s)=>{e=we(e,"navbar-brand");const c=r||(o.href?"a":"span");return u.jsx(c,{...o,ref:s,className:pe(n,e)})});pE.displayName="NavbarBrand";const gE=v.forwardRef(({children:e,bsPrefix:n,...r},o)=>{n=we(n,"navbar-collapse");const s=v.useContext(ji);return u.jsx(Z1,{in:!!(s&&s.expanded),...r,children:u.jsx("div",{ref:o,className:n,children:e})})});gE.displayName="NavbarCollapse";const yE=v.forwardRef(({bsPrefix:e,className:n,children:r,label:o="Toggle navigation",as:s="button",onClick:c,...d},h)=>{e=we(e,"navbar-toggler");const{onToggle:f,expanded:p}=v.useContext(ji)||{},g=Mr(x=>{c&&c(x),f&&f()});return s==="button"&&(d.type="button"),u.jsx(s,{...d,ref:h,onClick:g,"aria-label":o,className:pe(n,e,!p&&"collapsed"),children:r||u.jsx("span",{className:`${e}-icon`})})});yE.displayName="NavbarToggle";const xh=new WeakMap,$b=(e,n)=>{if(!e||!n)return;const r=xh.get(n)||new Map;xh.set(n,r);let o=r.get(e);return o||(o=n.matchMedia(e),o.refCount=0,r.set(o.media,o)),o};function dA(e,n=typeof window>"u"?void 0:window){const r=$b(e,n),[o,s]=v.useState(()=>r?r.matches:!1);return US(()=>{let c=$b(e,n);if(!c)return s(!1);let d=xh.get(n);const h=()=>{s(c.matches)};return c.refCount++,c.addListener(h),h(),()=>{c.removeListener(h),c.refCount--,c.refCount<=0&&d?.delete(c.media),c=void 0}},[e]),o}function fA(e){const n=Object.keys(e);function r(h,f){return h===f?f:h?`${h} and ${f}`:f}function o(h){return n[Math.min(n.indexOf(h)+1,n.length-1)]}function s(h){const f=o(h);let p=e[f];return typeof p=="number"?p=`${p-.2}px`:p=`calc(${p} - 0.2px)`,`(max-width: ${p})`}function c(h){let f=e[h];return typeof f=="number"&&(f=`${f}px`),`(min-width: ${f})`}function d(h,f,p){let g;typeof h=="object"?(g=h,p=f,f=!0):(f=f||!0,g={[h]:f});let x=v.useMemo(()=>Object.entries(g).reduce((b,[S,w])=>((w==="up"||w===!0)&&(b=r(b,c(S))),(w==="down"||w===!0)&&(b=r(b,s(S))),b),""),[JSON.stringify(g)]);return dA(x,p)}return d}const mA=fA({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),vE=v.forwardRef(({className:e,bsPrefix:n,as:r="div",...o},s)=>(n=we(n,"offcanvas-body"),u.jsx(r,{ref:s,className:pe(e,n),...o})));vE.displayName="OffcanvasBody";const hA={[en]:"show",[Fn]:"show"},bE=v.forwardRef(({bsPrefix:e,className:n,children:r,in:o=!1,mountOnEnter:s=!1,unmountOnExit:c=!1,appear:d=!1,...h},f)=>(e=we(e,"offcanvas"),u.jsx(Iu,{ref:f,addEndListener:tp,in:o,mountOnEnter:s,unmountOnExit:c,appear:d,...h,childRef:_o(r),children:(p,g)=>v.cloneElement(r,{...g,className:pe(n,r.props.className,(p===en||p===Ks)&&`${e}-toggling`,hA[p])})})));bE.displayName="OffcanvasToggling";const xE=v.forwardRef(({bsPrefix:e,className:n,closeLabel:r="Close",closeButton:o=!1,...s},c)=>(e=we(e,"offcanvas-header"),u.jsx(bp,{ref:c,...s,className:pe(n,e),closeLabel:r,closeButton:o})));xE.displayName="OffcanvasHeader";const pA=yl("h5"),wE=v.forwardRef(({className:e,bsPrefix:n,as:r=pA,...o},s)=>(n=we(n,"offcanvas-title"),u.jsx(r,{ref:s,className:pe(e,n),...o})));wE.displayName="OffcanvasTitle";function gA(e){return u.jsx(bE,{...e})}function yA(e){return u.jsx(vo,{...e})}const SE=v.forwardRef(({bsPrefix:e,className:n,children:r,"aria-labelledby":o,placement:s="start",responsive:c,show:d=!1,backdrop:h=!0,keyboard:f=!0,scroll:p=!1,onEscapeKeyDown:g,onShow:x,onHide:b,container:S,autoFocus:w=!0,enforceFocus:R=!0,restoreFocus:E=!0,restoreFocusOptions:N,onEntered:_,onExit:O,onExiting:M,onEnter:D,onEntering:T,onExited:k,backdropClassName:L,manager:H,renderStaticNode:G=!1,...W},te)=>{const le=v.useRef();e=we(e,"offcanvas");const[de,re]=v.useState(!1),U=Mr(b),X=mA(c||"xs","up");v.useEffect(()=>{re(c?d&&!X:d)},[d,c,X]);const J=v.useMemo(()=>({onHide:U}),[U]);function me(){return H||(p?(le.current||(le.current=new iE({handleContainerOverflow:!1})),le.current):oE())}const A=(ce,...Ee)=>{ce&&(ce.style.visibility="visible"),D?.(ce,...Ee)},Y=(ce,...Ee)=>{ce&&(ce.style.visibility=""),k?.(...Ee)},se=v.useCallback(ce=>u.jsx("div",{...ce,className:pe(`${e}-backdrop`,L)}),[L,e]),ne=ce=>u.jsx("div",{...ce,...W,className:pe(n,c?`${e}-${c}`:e,`${e}-${s}`),"aria-labelledby":o,children:r});return u.jsxs(u.Fragment,{children:[!de&&(c||G)&&ne({}),u.jsx(yp.Provider,{value:J,children:u.jsx(rE,{show:de,ref:te,backdrop:h,container:S,keyboard:f,autoFocus:w,enforceFocus:R&&!p,restoreFocus:E,restoreFocusOptions:N,onEscapeKeyDown:g,onShow:x,onHide:U,onEnter:A,onEntering:T,onEntered:_,onExit:O,onExiting:M,onExited:Y,manager:me(),transition:gA,backdropTransition:yA,renderBackdrop:se,renderDialog:ne})})]})});SE.displayName="Offcanvas";const vA=Object.assign(SE,{Body:vE,Header:xE,Title:wE}),EE=v.forwardRef(({onHide:e,...n},r)=>{const o=v.useContext(ji),s=Mr(()=>{o==null||o.onToggle==null||o.onToggle(),e?.()});return u.jsx(vA,{ref:r,show:!!(o!=null&&o.expanded),...n,renderStaticNode:!0,onHide:s})});EE.displayName="NavbarOffcanvas";const jE=v.forwardRef(({className:e,bsPrefix:n,as:r="span",...o},s)=>(n=we(n,"navbar-text"),u.jsx(r,{ref:s,className:pe(e,n),...o})));jE.displayName="NavbarText";const RE=v.forwardRef((e,n)=>{const{bsPrefix:r,expand:o=!0,variant:s="light",bg:c,fixed:d,sticky:h,className:f,as:p="nav",expanded:g,onToggle:x,onSelect:b,collapseOnSelect:S=!1,...w}=Fu(e,{expanded:"onToggle"}),R=we(r,"navbar"),E=v.useCallback((...O)=>{b?.(...O),S&&g&&x?.(!1)},[b,S,g,x]);w.role===void 0&&p!=="nav"&&(w.role="navigation");let N=`${R}-expand`;typeof o=="string"&&(N=`${N}-${o}`);const _=v.useMemo(()=>({onToggle:()=>x?.(!g),bsPrefix:R,expanded:!!g,expand:o}),[R,g,o,x]);return u.jsx(ji.Provider,{value:_,children:u.jsx(wi.Provider,{value:E,children:u.jsx(p,{ref:n,...w,className:pe(f,R,o&&N,s&&`${R}-${s}`,c&&`bg-${c}`,h&&`sticky-${h}`,d&&`fixed-${d}`)})})})});RE.displayName="Navbar";const Ic=Object.assign(RE,{Brand:pE,Collapse:gE,Offcanvas:EE,Text:jE,Toggle:yE}),Pb=1e3;function bA(e,n,r){const o=(e-n)/(r-n)*100;return Math.round(o*Pb)/Pb}function Yb({min:e,now:n,max:r,label:o,visuallyHidden:s,striped:c,animated:d,className:h,style:f,variant:p,bsPrefix:g,...x},b){return u.jsx("div",{ref:b,...x,role:"progressbar",className:pe(h,`${g}-bar`,{[`bg-${p}`]:p,[`${g}-bar-animated`]:d,[`${g}-bar-striped`]:d||c}),style:{width:`${bA(n,e,r)}%`,...f},"aria-valuenow":n,"aria-valuemin":e,"aria-valuemax":r,children:s?u.jsx("span",{className:"visually-hidden",children:o}):o})}const mo=v.forwardRef(({isChild:e=!1,...n},r)=>{const o={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(o.bsPrefix=we(o.bsPrefix,"progress"),e)return Yb(o,r);const{min:s,now:c,max:d,label:h,visuallyHidden:f,striped:p,animated:g,bsPrefix:x,variant:b,className:S,children:w,...R}=o;return u.jsx("div",{ref:r,...R,className:pe(S,x),children:w?$3(w,E=>v.cloneElement(E,{isChild:!0})):Yb({min:s,now:c,max:d,label:h,visuallyHidden:f,striped:p,animated:g,bsPrefix:x,variant:b},r)})});mo.displayName="ProgressBar";const Lt=v.forwardRef(({bsPrefix:e,className:n,as:r="div",...o},s)=>{const c=we(e,"row"),d=q1(),h=I1(),f=`${c}-cols`,p=[];return d.forEach(g=>{const x=o[g];delete o[g];let b;x!=null&&typeof x=="object"?{cols:b}=x:b=x;const S=g!==h?`-${g}`:"";b!=null&&p.push(`${f}${S}-${b}`)}),u.jsx(r,{ref:s,...o,className:pe(n,c,...p)})});Lt.displayName="Row";const ad=v.forwardRef(({bsPrefix:e,variant:n,animation:r="border",size:o,as:s="div",className:c,...d},h)=>{e=we(e,"spinner");const f=`${e}-${r}`;return u.jsx(s,{ref:h,...d,className:pe(c,f,o&&`${f}-${o}`,n&&`text-${n}`)})});ad.displayName="Spinner";const xp=v.forwardRef(({bsPrefix:e,className:n,striped:r,bordered:o,borderless:s,hover:c,size:d,variant:h,responsive:f,...p},g)=>{const x=we(e,"table"),b=pe(n,x,h&&`${x}-${h}`,d&&`${x}-${d}`,r&&`${x}-${typeof r=="string"?`striped-${r}`:"striped"}`,o&&`${x}-bordered`,s&&`${x}-borderless`,c&&`${x}-hover`),S=u.jsx("table",{...p,className:b,ref:g});if(f){let w=`${x}-responsive`;return typeof f=="string"&&(w=`${w}-${f}`),u.jsx("div",{className:w,children:S})}return S});xp.displayName="Table";var Hm={},Bm={},$m={exports:{}};const xA=Gb(_T),wA=Gb(OT);/**
 * react-router-dom v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fb;function SA(){return Fb||(Fb=1,function(e){var n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,c=(x,b)=>{for(var S in b)n(x,S,{get:b[S],enumerable:!0})},d=(x,b,S,w)=>{if(b&&typeof b=="object"||typeof b=="function")for(let R of o(b))!s.call(x,R)&&R!==S&&n(x,R,{get:()=>b[R],enumerable:!(w=r(b,R))||w.enumerable});return x},h=(x,b,S)=>(d(x,b,"default"),S&&d(S,b,"default")),f=x=>d(n({},"__esModule",{value:!0}),x),p={};c(p,{HydratedRouter:()=>g.HydratedRouter,RouterProvider:()=>g.RouterProvider}),e.exports=f(p);var g=xA;h(p,wA,e.exports)}($m)),$m.exports}var qb;function EA(){return qb||(qb=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(vu()),r=c(X1()),o=SA(),s=["children","onClick","replace","to","state","activeClassName","className","activeStyle","style","isActive"];function c(R){return R&&R.__esModule?R:{default:R}}function d(R,E){var N=Object.keys(R);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(R);E&&(_=_.filter(function(O){return Object.getOwnPropertyDescriptor(R,O).enumerable})),N.push.apply(N,_)}return N}function h(R){for(var E=1;E<arguments.length;E++){var N=arguments[E]!=null?arguments[E]:{};E%2?d(Object(N),!0).forEach(function(_){f(R,_,N[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(N)):d(Object(N)).forEach(function(_){Object.defineProperty(R,_,Object.getOwnPropertyDescriptor(N,_))})}return R}function f(R,E,N){return E in R?Object.defineProperty(R,E,{value:N,enumerable:!0,configurable:!0,writable:!0}):R[E]=N,R}function p(R){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},p(R)}function g(R,E){if(R==null)return{};var N=x(R,E),_,O;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(R);for(O=0;O<M.length;O++)_=M[O],!(E.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(R,_)&&(N[_]=R[_])}return N}function x(R,E){if(R==null)return{};var N={},_=Object.keys(R),O,M;for(M=0;M<_.length;M++)O=_[M],!(E.indexOf(O)>=0)&&(N[O]=R[O]);return N}var b=function(E){return!!(E.metaKey||E.altKey||E.ctrlKey||E.shiftKey)},S=function(E){var N=E.children,_=E.onClick,O=E.replace,M=O===void 0?!1:O,D=E.to,T=E.state,k=E.activeClassName,L=k===void 0?"active":k,H=E.className,G=E.activeStyle,W=E.style,te=E.isActive,le=g(E,s),de=p(D)==="object"?D.pathname||"":D,re=(0,o.useNavigate)(),U=(0,o.useHref)(typeof D=="string"?{pathname:D}:D),X=(0,o.useMatch)(de),J=(0,o.useLocation)(),me=n.default.Children.only(N),A=!!(te?typeof te=="function"?te(X,J):te:X),Y=function(ne){N.props.onClick&&N.props.onClick(ne),_&&_(ne),!ne.defaultPrevented&&ne.button===0&&!b(ne)&&(ne.preventDefault(),re(D,{replace:M,state:T}))};return n.default.cloneElement(me,h(h({},le),{},{className:[H,me.props.className,A?L:null].join(" ").trim(),style:A?h(h({},W),G):W,href:U,onClick:Y}))};S.propTypes={children:r.default.element.isRequired,onClick:r.default.func,replace:r.default.bool,to:r.default.oneOfType([r.default.string,r.default.object]).isRequired,state:r.default.object,className:r.default.string,activeClassName:r.default.string,style:r.default.objectOf(r.default.oneOfType([r.default.string,r.default.number])),activeStyle:r.default.objectOf(r.default.oneOfType([r.default.string,r.default.number])),isActive:r.default.oneOfType([r.default.func,r.default.bool])};var w=S;e.default=w}(Bm)),Bm}var Ib;function jA(){return Ib||(Ib=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"LinkContainer",{enumerable:!0,get:function(){return n.default}});var n=r(EA());function r(o){return o&&o.__esModule?o:{default:o}}}(Hm)),Hm}var Er=jA();const RA=()=>{const{isAuthenticated:e,user:n,logout:r}=$r(),[o,s]=v.useState(!1),c=()=>{r(),s(!1)},d={navbar:{backgroundColor:"#000000",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 2px 20px rgba(0, 0, 0, 0.8)",padding:"16px 0",position:"sticky",top:0,zIndex:1e3},brand:{fontSize:"1.75rem",fontWeight:"800",color:"#ffffff",textDecoration:"none",letterSpacing:"0.5px",display:"flex",alignItems:"center",gap:"10px"},navLink:{color:"#ffffff !important",fontWeight:"600",margin:"0 8px",padding:"10px 20px",borderRadius:"8px",transition:"all 0.3s ease",textDecoration:"none",fontSize:"0.95rem",cursor:"pointer",border:"1px solid transparent"},userSection:{display:"flex",alignItems:"center",gap:"15px"},userDropdown:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#ffffff",padding:"8px 16px",borderRadius:"8px",fontWeight:"600",fontSize:"0.9rem",transition:"all 0.3s ease",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},authButtons:{display:"flex",gap:"12px",alignItems:"center"},loginBtn:{background:"transparent",border:"2px solid #ffffff",color:"#ffffff",padding:"10px 24px",borderRadius:"8px",fontWeight:"600",fontSize:"0.9rem",transition:"all 0.3s ease"},registerBtn:{background:"#ffffff",border:"2px solid #ffffff",color:"#000000",padding:"10px 24px",borderRadius:"8px",fontWeight:"600",fontSize:"0.9rem",transition:"all 0.3s ease"},premiumBadge:{background:"#ffc107",color:"#000000",fontSize:"0.7rem",padding:"3px 8px",borderRadius:"4px",fontWeight:"700",marginLeft:"8px"},adminBadge:{background:"#dc3545",color:"#ffffff",fontSize:"0.7rem",padding:"3px 8px",borderRadius:"4px",fontWeight:"700",marginLeft:"8px"},logo:{fontSize:"1.5rem",color:"#ffffff"}},h=()=>{s(!1)};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
          /* Global navbar styles */
          .navbar-nav .nav-link {
            color: #ffffff !important;
          }
          
          .navbar-nav .nav-link:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
            color: #ffffff !important;
            transform: translateY(-1px);
          }
          
          .navbar-nav .nav-link:focus,
          .navbar-nav .nav-link:active {
            color: #ffffff !important;
          }
          
          /* Navbar toggler */
          .navbar-toggler {
            border: 1px solid rgba(255, 255, 255, 0.3) !important;
            outline: none !important;
            box-shadow: none !important;
            padding: 6px 10px !important;
          }
          
          .navbar-toggler:focus {
            box-shadow: none !important;
            border-color: rgba(255, 255, 255, 0.5) !important;
          }
          
          .navbar-toggler-icon {
            background-3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          }
          
          /* Dropdown styles */
          .dropdown-menu {
            background: #000000 !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            border-radius: 8px !important;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.8) !important;
            min-width: 200px !important;
          }
          
          .dropdown-item {
            color: #ffffff !important;
            padding: 12px 20px !important;
            border-radius: 0 !important;
            transition: all 0.3s ease !important;
            font-weight: 500 !important;
          }
          
          .dropdown-item:hover,
          .dropdown-item:focus {
            background-color: rgba(255, 255, 255, 0.1) !important;
            color: #ffffff !important;
          }
          
          .dropdown-divider {
            border-color: rgba(255, 255, 255, 0.2) !important;
            margin: 8px 0 !important;
          }
          
          /* Brand hover effect */
          .navbar-brand:hover {
            color: #ffffff !important;
            text-decoration: none !important;
          }
          
          /* Responsive text */
          @media (max-width: 991.98px) {
            .navbar-nav {
              padding-top: 15px;
            }
            
            .navbar-nav .nav-link {
              padding: 12px 20px !important;
              margin: 2px 0 !important;
            }
            
            .auth-buttons-mobile {
              padding-top: 15px;
              border-top: 1px solid rgba(255, 255, 255, 0.2);
              margin-top: 15px;
            }
          }
        `}),u.jsx(Ic,{style:d.navbar,expand:"lg",expanded:o,onToggle:s,className:"mb-0",variant:"dark",children:u.jsxs(At,{children:[u.jsx(Er.LinkContainer,{to:"/",onClick:h,children:u.jsxs(Ic.Brand,{style:d.brand,children:[u.jsx("span",{style:d.logo,children:"⚙️"}),"XeriwoTools"]})}),u.jsx(Ic.Toggle,{"aria-controls":"basic-navbar-nav"}),u.jsxs(Ic.Collapse,{id:"basic-navbar-nav",children:[u.jsxs(Yn,{className:"me-auto",children:[u.jsx(Er.LinkContainer,{to:"/",onClick:h,children:u.jsxs(Yn.Link,{style:d.navLink,children:[u.jsx("i",{className:"fas fa-home me-2"}),"Home"]})}),u.jsx(Er.LinkContainer,{to:"/products",onClick:h,children:u.jsxs(Yn.Link,{style:d.navLink,children:[u.jsx("i",{className:"fas fa-box me-2"}),"Products"]})})]}),u.jsx(Yn,{className:"ms-auto",children:e?u.jsxs("div",{style:d.userSection,className:"d-flex align-items-center",children:[u.jsx(Er.LinkContainer,{to:"/dashboard",onClick:h,children:u.jsxs(Yn.Link,{style:d.navLink,children:[u.jsx("i",{className:"fas fa-tachometer-alt me-2"}),"Dashboard",n?.subscription==="premium"&&u.jsxs(ra,{style:d.premiumBadge,children:[u.jsx("i",{className:"fas fa-crown me-1"}),"PRO"]})]})}),n?.role==="admin"&&u.jsx(Er.LinkContainer,{to:"/admin",onClick:h,children:u.jsxs(Yn.Link,{style:d.navLink,children:[u.jsx("i",{className:"fas fa-shield-alt me-2"}),"Admin",u.jsxs(ra,{style:d.adminBadge,children:[u.jsx("i",{className:"fas fa-user-shield me-1"}),"ADMIN"]})]})}),u.jsxs(Sr,{align:"end",children:[u.jsx(Sr.Toggle,{as:"div",style:d.userDropdown,children:u.jsxs("div",{className:"d-flex align-items-center",children:[u.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"10px",color:"#ffffff",fontSize:"0.9rem",fontWeight:"bold",border:"1px solid rgba(255, 255, 255, 0.3)"},children:n?.name?.charAt(0).toUpperCase()||"U"}),u.jsxs("div",{className:"d-none d-md-block",children:[u.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#ffffff"},children:n?.name||"User"}),u.jsx("div",{style:{fontSize:"0.75rem",color:"rgba(255, 255, 255, 0.7)"},children:n?.subscription?.toUpperCase()||"FREE"})]}),u.jsx("i",{className:"fas fa-chevron-down ms-2",style:{fontSize:"0.8rem",color:"#ffffff"}})]})}),u.jsxs(Sr.Menu,{children:[u.jsx(Sr.Item,{children:u.jsxs("div",{className:"d-flex align-items-center",children:[u.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"10px",color:"#ffffff",fontSize:"0.8rem",fontWeight:"bold"},children:n?.name?.charAt(0).toUpperCase()||"U"}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"600"},children:n?.name||"User"}),u.jsx("div",{style:{fontSize:"0.75rem",opacity:.7},children:n?.email||"user@example.com"})]})]})}),u.jsx(Sr.Divider,{}),u.jsx(Er.LinkContainer,{to:"/dashboard",onClick:h,children:u.jsxs(Sr.Item,{children:[u.jsx("i",{className:"fas fa-chart-bar me-2"}),"Dashboard"]})}),u.jsx(Sr.Divider,{}),u.jsxs(Sr.Item,{onClick:c,children:[u.jsx("i",{className:"fas fa-sign-out-alt me-2"}),"Sign Out"]})]})]})]}):u.jsxs("div",{style:d.authButtons,className:`${o?"auth-buttons-mobile":""}`,children:[u.jsx(Er.LinkContainer,{to:"/login",onClick:h,children:u.jsxs(ze,{style:d.loginBtn,onMouseEnter:f=>{f.target.style.backgroundColor="rgba(255, 255, 255, 0.1)",f.target.style.color="#ffffff"},onMouseLeave:f=>{f.target.style.backgroundColor="transparent",f.target.style.color="#ffffff"},children:[u.jsx("i",{className:"fas fa-sign-in-alt me-2"}),"Login"]})}),u.jsx(Er.LinkContainer,{to:"/register",onClick:h,children:u.jsxs(ze,{style:d.registerBtn,onMouseEnter:f=>{f.target.style.backgroundColor="rgba(255, 255, 255, 0.9)",f.target.style.color="#000000"},onMouseLeave:f=>{f.target.style.backgroundColor="#ffffff",f.target.style.color="#000000"},children:[u.jsx("i",{className:"fas fa-user-plus me-2"}),"Register"]})})]})})]})]})})]})},NA=()=>{const[e,n]=v.useState([]),[r,o]=v.useState({totalProducts:0,totalDownloads:0,totalUsers:0,avgRating:0}),[s,c]=v.useState(!0),[d,h]=v.useState({}),[f,p]=v.useState(""),[g,x]=v.useState(0),[b,S]=v.useState(0),[w,R]=v.useState({x:0,y:0}),[E,N]=v.useState({}),[_,O]=v.useState(0),[M,D]=v.useState(!1),[T,k]=v.useState("standard"),{user:L}=$r(),H=["Premium","Professional","Modern","Creative","Responsive"],G=[{id:"standard",name:"Standard",price:799,period:"month",downloads:15,features:["15 Downloads per day","All premium content","Advanced AI chatbot","Priority support"],popular:!0,gradient:"linear-gradient(135deg, #000000 0%, #434343 100%)"}],W=[{id:"easypaisa",name:"EasyPaisa",icon:"💳",description:"Pay with EasyPaisa wallet",color:"#00a86b"},{id:"jazzcash",name:"JazzCash",icon:"📱",description:"Quick payment via JazzCash",color:"#ff6b35"},{id:"bank",name:"Bank Transfer",icon:"🏦",description:"Direct bank transfer",color:"#4a90e2"},{id:"card",name:"Credit Card",icon:"💳",description:"Visa, Mastercard accepted",color:"#6c5ce7"}],te=[{id:1,name:"Alex Thompson",role:"Full Stack Developer",company:"TechInnovate",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",rating:5,text:"XeriwoTools revolutionized my development workflow. The AI assistant is incredibly smart and the product quality is unmatched!",plan:"Premium"},{id:2,name:"Sarah Kim",role:"UI/UX Designer",company:"DesignStudio Pro",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",rating:5,text:"Best marketplace for WordPress assets! The download process is seamless and the AI chatbot saves me hours of searching.",plan:"Standard"},{id:3,name:"Marcus Johnson",role:"Agency Owner",company:"Digital Nexus",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",rating:5,text:"Outstanding platform! Our agency productivity increased 300% since we started using XeriwoTools. Highly recommended!",plan:"Premium"}],le=[{icon:"🚀",title:"Lightning Speed",description:"Ultra-fast search and instant downloads with optimized performance",details:"Sub-second response time",gradient:"linear-gradient(135deg, #000000 0%, #434343 100%)"},{icon:"🤖",title:"AI Assistant",description:"Intelligent chatbot that understands your needs perfectly",details:"24/7 smart assistance",gradient:"linear-gradient(135deg, #434343 0%, #000000 100%)"},{icon:"🛡️",title:"Enterprise Security",description:"Military-grade security for all your downloads and data",details:"99.99% uptime guaranteed",gradient:"linear-gradient(135deg, #000000 0%, #434343 100%)"},{icon:"💎",title:"Premium Quality",description:"Hand-curated themes and plugins from top developers",details:"Quality guaranteed",gradient:"linear-gradient(135deg, #434343 0%, #000000 100%)"}],de=[{number:"2019",label:"Founded",icon:"🚀"},{number:"50K+",label:"Happy Customers",icon:"😊"},{number:"99.9%",label:"Uptime",icon:"⚡"},{number:"24/7",label:"Support",icon:"🛟"}],re=[{question:"How do downloads work?",answer:"Simply choose your plan, browse our collection, and click download. You get instant access to premium WordPress themes and plugins with lifetime updates."},{question:"What payment methods do you accept?",answer:"We accept EasyPaisa, JazzCash, bank transfers, and all major credit cards. All payments are secured with enterprise-grade encryption."},{question:"Can I upgrade my plan anytime?",answer:"Yes! You can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle."},{question:"Do you offer refunds?",answer:"We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact our support team for a full refund."},{question:"How does the AI assistant work?",answer:"Our AI chatbot helps you find the perfect themes and plugins based on your requirements. It can understand natural language and provide personalized recommendations."}];v.useEffect(()=>{U();const A=fe=>{R({x:fe.clientX/window.innerWidth*2-1,y:fe.clientY/window.innerHeight*2-1})};window.addEventListener("mousemove",A);const Y=setInterval(()=>{S(fe=>(fe+1)%te.length)},4e3),se=setInterval(()=>{x(fe=>(fe+1)%le.length)},3500),ne=setInterval(()=>{O(fe=>(fe+1)%H.length)},2e3),ce=new IntersectionObserver(fe=>{fe.forEach(nt=>{nt.isIntersecting&&N($e=>({...$e,[nt.target.id]:!0}))})},{threshold:.1});return document.querySelectorAll("[data-animate]").forEach(fe=>ce.observe(fe)),()=>{window.removeEventListener("mousemove",A),clearInterval(Y),clearInterval(se),clearInterval(ne),ce.disconnect()}},[]);const U=async()=>{try{c(!0);const[A,Y]=await Promise.all([mt.get("/products/featured"),mt.get("/products/stats")]);A.data.success&&n(A.data.products||[]),Y.data&&Y.data.success&&Y.data.stats&&o({totalProducts:Y.data.stats.totalProducts||500,totalDownloads:Y.data.stats.totalDownloads||25e3,totalUsers:18500,avgRating:4.9})}catch(A){console.error("Home data error:",A),o({totalProducts:500,totalDownloads:25e3,totalUsers:18500,avgRating:4.9})}finally{c(!1)}},X=A=>{h(Y=>({...Y,[A]:!0}))},J=A=>d[A._id]?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmOGY5ZmEiLz48cGF0aCBkPSJNMTUwIDEwMGMtMTMuODA3IDAtMjUtMTEuMTkzLTI1LTI1czExLjE5My0yNSAyNS0yNSAyNSAxMS4xOTMgMjUgMjUtMTEuMTkzIDI1LTI1IDI1ek0xMDAgMTUwaDEwMGwtMjAtMzBjLTMuMzMzLTUtOC4zMzMtNS0xMS42NjcgMEwxNDAgMTQwbC0xNi42NjctMjBjLTMuMzMzLTUtOC4zMzMtNS0xMS42NjcgMEwxMDAgMTUweiIgZmlsbD0iI2VkZjJmNyIvPjwvc3ZnPg==":A.image,me=A=>{A.preventDefault(),f.trim()&&(window.location.href=`/products?search=${encodeURIComponent(f)}`)};return u.jsxs("div",{className:"xeriwo-home",children:[u.jsx("div",{className:"animated-bg",children:u.jsx("div",{className:"floating-particles",children:[...Array(20)].map((A,Y)=>u.jsx("div",{className:"particle",style:{"--delay":`${Y*.5}s`,"--duration":`${8+Y%4*2}s`,"--size":`${2+Y%3}px`}},Y))})}),u.jsx("section",{id:"hero",className:"hero-section","data-animate":!0,children:u.jsx(At,{children:u.jsxs(Lt,{className:"align-items-center min-vh-100",children:[u.jsx(Ke,{lg:6,children:u.jsxs("div",{className:`hero-content ${E.hero?"animate-in":""}`,children:[u.jsxs("div",{className:"brand-badge",children:[u.jsx("div",{className:"badge-icon",children:"⚡"}),u.jsx("span",{children:"XeriwoTools - WordPress Marketplace"}),u.jsx("div",{className:"badge-shine"})]}),u.jsxs("h1",{className:"hero-title",children:["Build ",u.jsx("span",{className:"dynamic-word",children:H[_]}),u.jsx("br",{}),"WordPress Sites with",u.jsx("span",{className:"brand-highlight",children:" XeriwoTools"})]}),u.jsx("p",{className:"hero-subtitle",children:"Discover premium themes, plugins, and tools with our AI-powered assistant. Transform your WordPress experience with professional-grade assets."}),u.jsx("div",{className:"hero-search",children:u.jsx(_e,{onSubmit:me,children:u.jsxs("div",{className:"search-wrapper",children:[u.jsxs("div",{className:"search-input-container",children:[u.jsx("i",{className:"search-icon fas fa-search"}),u.jsx(_e.Control,{type:"text",placeholder:"What are you looking for today?",value:f,onChange:A=>p(A.target.value),className:"search-input"}),u.jsxs("div",{className:"ai-indicator",children:[u.jsx("i",{className:"fas fa-robot"}),u.jsx("span",{children:"AI"})]})]}),u.jsxs(ze,{type:"submit",className:"search-button",children:[u.jsx("span",{children:"Search"}),u.jsx("i",{className:"fas fa-arrow-right"})]})]})})}),u.jsxs("div",{className:"hero-stats",children:[u.jsxs("div",{className:"stat-card",children:[u.jsxs("div",{className:"stat-number",children:[r.totalProducts.toLocaleString(),"+"]}),u.jsx("div",{className:"stat-label",children:"Premium Products"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsxs("div",{className:"stat-number",children:[r.totalDownloads.toLocaleString(),"+"]}),u.jsx("div",{className:"stat-label",children:"Downloads"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsxs("div",{className:"stat-number",children:[r.totalUsers.toLocaleString(),"+"]}),u.jsx("div",{className:"stat-label",children:"Happy Users"})]})]}),u.jsxs("div",{className:"hero-actions",children:[u.jsxs(ze,{as:tn,to:"/products",className:"btn-primary-hero",children:[u.jsx("span",{children:"Explore Products"}),u.jsx("div",{className:"btn-ripple"})]}),u.jsxs(ze,{className:"btn-secondary-hero",onClick:()=>D(!0),children:[u.jsx("i",{className:"fas fa-play"}),u.jsx("span",{children:"Watch Demo"})]})]})]})}),u.jsx(Ke,{lg:6,children:u.jsx("div",{className:`hero-visual ${E.hero?"animate-in":""}`,children:u.jsxs("div",{className:"visual-container",children:[u.jsxs("div",{className:"main-screen",children:[u.jsxs("div",{className:"screen-header",children:[u.jsxs("div",{className:"window-controls",children:[u.jsx("span",{className:"control close"}),u.jsx("span",{className:"control minimize"}),u.jsx("span",{className:"control maximize"})]}),u.jsxs("div",{className:"screen-title",children:[u.jsx("i",{className:"fab fa-wordpress-simple"}),u.jsx("span",{children:"XeriwoTools Dashboard"})]})]}),u.jsx("div",{className:"screen-content",children:u.jsx("div",{className:"content-grid",children:e.slice(0,6).map((A,Y)=>u.jsxs("div",{className:"content-item",style:{"--delay":`${Y*.1}s`},children:[u.jsx("img",{src:J(A),alt:A.title,onError:()=>X(A._id)}),u.jsx("div",{className:"item-overlay",children:u.jsx("i",{className:"fas fa-download"})})]},A._id))})})]}),u.jsxs("div",{className:"floating-ui-elements",children:[u.jsxs("div",{className:"ui-element notification",children:[u.jsx("i",{className:"fas fa-bell"}),u.jsx("span",{children:"New premium theme available!"})]}),u.jsxs("div",{className:"ui-element download",children:[u.jsx("i",{className:"fas fa-download"}),u.jsx("span",{children:"Download Complete"})]}),u.jsxs("div",{className:"ui-element ai-chat",children:[u.jsx("i",{className:"fas fa-robot"}),u.jsx("span",{children:"AI: How can I help?"})]})]})]})})})]})})}),u.jsx("section",{id:"about",className:"about-section","data-animate":!0,children:u.jsx(At,{children:u.jsxs(Lt,{className:"align-items-center",children:[u.jsx(Ke,{lg:6,children:u.jsxs("div",{className:`about-content ${E.about?"animate-in":""}`,children:[u.jsxs("div",{className:"section-badge",children:[u.jsx("span",{className:"badge-text",children:"About XeriwoTools"}),u.jsx("div",{className:"badge-glow"})]}),u.jsxs("h2",{className:"section-title",children:["Empowering ",u.jsx("span",{className:"highlight",children:"WordPress Developers"})," Since 2019"]}),u.jsx("p",{className:"about-text",children:"Founded with a vision to revolutionize WordPress development, XeriwoTools has become the trusted platform for developers, designers, and agencies worldwide. We combine cutting-edge AI technology with premium quality assets to deliver an unmatched experience."}),u.jsxs("div",{className:"about-highlights",children:[u.jsxs("div",{className:"highlight-item",children:[u.jsx("i",{className:"fas fa-check-circle"}),u.jsx("span",{children:"Hand-curated premium content"})]}),u.jsxs("div",{className:"highlight-item",children:[u.jsx("i",{className:"fas fa-check-circle"}),u.jsx("span",{children:"AI-powered intelligent assistance"})]}),u.jsxs("div",{className:"highlight-item",children:[u.jsx("i",{className:"fas fa-check-circle"}),u.jsx("span",{children:"24/7 dedicated support team"})]})]})]})}),u.jsx(Ke,{lg:6,children:u.jsx("div",{className:`company-stats-grid ${E.about?"animate-in":""}`,children:de.map((A,Y)=>u.jsxs("div",{className:"company-stat-card",style:{"--delay":`${Y*.2}s`},children:[u.jsx("div",{className:"stat-icon",children:A.icon}),u.jsxs("div",{className:"stat-info",children:[u.jsx("div",{className:"stat-number",children:A.number}),u.jsx("div",{className:"stat-label",children:A.label})]})]},Y))})})]})})}),u.jsx("section",{id:"features",className:"features-section","data-animate":!0,children:u.jsxs(At,{children:[u.jsxs("div",{className:`section-header ${E.features?"animate-in":""}`,children:[u.jsxs("div",{className:"section-badge",children:[u.jsx("span",{className:"badge-text",children:"Why Choose XeriwoTools"}),u.jsx("div",{className:"badge-glow"})]}),u.jsxs("h2",{className:"section-title",children:["Powerful Features for",u.jsx("span",{className:"highlight",children:" Modern Developers"})]})]}),u.jsx("div",{className:"features-grid",children:u.jsx(Lt,{children:le.map((A,Y)=>u.jsx(Ke,{lg:3,md:6,children:u.jsxs("div",{className:`feature-card ${g===Y?"active":""} ${E.features?"animate-in":""}`,style:{"--delay":`${Y*.2}s`},onMouseEnter:()=>x(Y),children:[u.jsx("div",{className:"feature-icon",children:A.icon}),u.jsx("h4",{className:"feature-title",children:A.title}),u.jsx("p",{className:"feature-description",children:A.description}),u.jsx("div",{className:"feature-details",children:A.details})]})},Y))})})]})}),u.jsx("section",{id:"pricing",className:"pricing-section","data-animate":!0,children:u.jsxs(At,{children:[u.jsxs("div",{className:`section-header ${E.pricing?"animate-in":""}`,children:[u.jsxs("div",{className:"section-badge",children:[u.jsx("span",{className:"badge-text",children:"Flexible Pricing"}),u.jsx("div",{className:"badge-glow"})]}),u.jsxs("h2",{className:"section-title",children:["Choose Your ",u.jsx("span",{className:"highlight",children:"Perfect Plan"})]}),u.jsx("p",{className:"section-subtitle",children:"Start with any plan and upgrade as you grow. All plans include lifetime access."})]}),u.jsx(Lt,{className:"pricing-cards",children:G.map((A,Y)=>u.jsx(Ke,{lg:4,md:6,children:u.jsxs("div",{className:`pricing-card ${A.popular?"popular":""} ${T===A.id?"active":""} ${E.pricing?"animate-in":""}`,style:{"--delay":`${Y*.2}s`},onClick:()=>k(A.id),children:[A.popular&&u.jsxs("div",{className:"popular-badge",children:[u.jsx("i",{className:"fas fa-crown"}),"Most Popular"]}),u.jsxs("div",{className:"plan-header",children:[u.jsx("h3",{className:"plan-name",children:A.name}),u.jsxs("div",{className:"plan-price",children:[u.jsx("span",{className:"currency",children:"PKR"}),u.jsx("span",{className:"amount",children:A.price.toLocaleString()}),u.jsxs("span",{className:"period",children:["/",A.period]})]}),u.jsxs("div",{className:"plan-download-limit",children:[u.jsx("strong",{children:A.downloads})," downloads per day"]})]}),u.jsx("div",{className:"plan-features",children:A.features.map((se,ne)=>u.jsxs("div",{className:"feature-item",children:[u.jsx("i",{className:"fas fa-check"}),u.jsx("span",{children:se})]},ne))}),u.jsx(ze,{className:"plan-btn",children:A.popular?"Get Started Now":"Choose Plan"})]})},A.id))})]})}),u.jsx("section",{id:"payment",className:"payment-section","data-animate":!0,children:u.jsxs(At,{children:[u.jsxs("div",{className:`section-header ${E.payment?"animate-in":""}`,children:[u.jsxs("div",{className:"section-badge",children:[u.jsx("span",{className:"badge-text",children:"Payment Options"}),u.jsx("div",{className:"badge-glow"})]}),u.jsxs("h2",{className:"section-title",children:["Multiple ",u.jsx("span",{className:"highlight",children:"Payment Methods"})]}),u.jsx("p",{className:"section-subtitle",children:"Pay securely with your preferred method. All transactions are encrypted and protected."})]}),u.jsx(Lt,{className:"payment-methods",children:W.map((A,Y)=>u.jsx(Ke,{lg:3,md:6,children:u.jsxs("div",{className:`payment-card ${E.payment?"animate-in":""}`,style:{"--delay":`${Y*.15}s`},children:[u.jsx("div",{className:"payment-icon",style:{backgroundColor:A.color},children:u.jsx("span",{children:A.icon})}),u.jsx("h4",{className:"payment-name",children:A.name}),u.jsx("p",{className:"payment-description",children:A.description}),u.jsxs("div",{className:"payment-secure",children:[u.jsx("i",{className:"fas fa-shield-check"}),u.jsx("span",{children:"Secure & Encrypted"})]})]})},A.id))})]})}),u.jsx("section",{id:"faq",className:"faq-section","data-animate":!0,children:u.jsxs(At,{children:[u.jsxs("div",{className:`section-header ${E.faq?"animate-in":""}`,children:[u.jsxs("div",{className:"section-badge",children:[u.jsx("span",{className:"badge-text",children:"Frequently Asked"}),u.jsx("div",{className:"badge-glow"})]}),u.jsxs("h2",{className:"section-title",children:["Questions & ",u.jsx("span",{className:"highlight",children:"Answers"})]})]}),u.jsx(Lt,{children:u.jsx(Ke,{lg:8,className:"mx-auto",children:u.jsx("div",{className:"faq-list",children:re.map((A,Y)=>u.jsxs("div",{className:`faq-item ${E.faq?"animate-in":""}`,style:{"--delay":`${Y*.1}s`},children:[u.jsxs("div",{className:"faq-question",children:[u.jsx("h5",{children:A.question}),u.jsx("i",{className:"fas fa-plus"})]}),u.jsx("div",{className:"faq-answer",children:u.jsx("p",{children:A.answer})})]},Y))})})})]})}),u.jsx("section",{id:"cta",className:"cta-section","data-animate":!0,children:u.jsx(At,{children:u.jsxs("div",{className:`cta-content ${E.cta?"animate-in":""}`,children:[u.jsx("div",{className:"cta-icon",children:"🚀"}),u.jsx("h2",{children:"Ready to Transform Your WordPress Experience?"}),u.jsx("p",{children:"Join thousands of developers who trust XeriwoTools for their projects"}),u.jsx("div",{className:"cta-actions",children:L?u.jsx(ze,{as:tn,to:"/products",className:"btn-cta-primary",children:"Start Downloading"}):u.jsxs(u.Fragment,{children:[u.jsx(ze,{as:tn,to:"/register",className:"btn-cta-primary",children:"Get Started Free"}),u.jsx(ze,{className:"btn-cta-secondary",children:"Talk to AI Assistant"})]})}),u.jsxs("div",{className:"trust-badges",children:[u.jsxs("div",{className:"trust-item",children:[u.jsx("i",{className:"fas fa-shield-check"}),u.jsx("span",{children:"Secure & Trusted"})]}),u.jsxs("div",{className:"trust-item",children:[u.jsx("i",{className:"fas fa-infinity"}),u.jsx("span",{children:"Lifetime Access"})]}),u.jsxs("div",{className:"trust-item",children:[u.jsx("i",{className:"fas fa-headset"}),u.jsx("span",{children:"24/7 Support"})]})]})]})})}),u.jsxs($t,{show:M,onHide:()=>D(!1),size:"lg",centered:!0,children:[u.jsx($t.Header,{closeButton:!0,children:u.jsx($t.Title,{children:"XeriwoTools Demo"})}),u.jsx($t.Body,{children:u.jsx("div",{className:"video-container",children:u.jsx("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"XeriwoTools Demo",frameBorder:"0",allowFullScreen:!0})})})]}),u.jsx("style",{jsx:!0,children:`
        .xeriwo-home {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #ffffff;
          color: #000000;
          overflow-x: hidden;
          position: relative;
        }
 .products-section {
    padding: 120px 0;
    background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;
  }

  .products-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  /* Products Showcase */
  .products-showcase {
    margin: 4rem 0;
    position: relative;
    padding: 0 20px;
  }

  .products-track {
    display: grid;
    grid-template-columns: repeat(8, minmax(280px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .products-track::-webkit-scrollbar {
    display: none;
  }

  .product-showcase-item {
    min-width: 280px;
    opacity: 0;
    transform: translateY(30px);
    animation: productSlideIn 0.6s ease-out forwards;
    animation-delay: var(--delay);
  }

  @keyframes productSlideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .product-showcase-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 2px solid transparent;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .product-showcase-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, transparent 100%);
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
    border-radius: 20px;
  }

  .product-showcase-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    border-color: #000000;
  }

  .product-showcase-card:hover::before {
    opacity: 1;
  }

  /* Product Image */
  .product-image-wrapper {
    position: relative;
    height: 200px;
    overflow: hidden;
    background: linear-gradient(135deg, #f8f8f8, #e9ecef);
  }

  .product-showcase-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
  }

  .product-showcase-card:hover .product-showcase-image {
    transform: scale(1.1);
    filter: brightness(1.1);
  }

  /* Hover Overlay */
  .product-hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
    backdrop-filter: blur(2px);
  }

  .product-showcase-card:hover .product-hover-overlay {
    opacity: 1;
  }

  .overlay-buttons {
    display: flex;
    gap: 12px;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }

  .product-showcase-card:hover .overlay-buttons {
    transform: translateY(0);
  }

  .overlay-action-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .overlay-action-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  .overlay-action-btn:hover::before {
    width: 100%;
    height: 100%;
  }

  .overlay-action-btn.preview {
    background: rgba(255, 255, 255, 0.9);
    color: #000000;
  }

  .overlay-action-btn.download {
    background: #000000;
    color: white;
  }

  .overlay-action-btn.favorite {
    background: rgba(220, 53, 69, 0.9);
    color: white;
  }

  .overlay-action-btn:hover {
    transform: scale(1.1);
  }

  /* Product Badges and Info */
  .product-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
  }

  .type-badge {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .type-badge.themes {
    background: rgba(52, 152, 219, 0.9);
    color: white;
  }

  .type-badge.plugins {
    background: rgba(155, 89, 182, 0.9);
    color: white;
  }

  .product-rating {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 6px 10px;
    border-radius: 15px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 4px;
    backdrop-filter: blur(10px);
  }

  .stars-small {
    display: flex;
    gap: 2px;
  }

  .stars-small i {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .stars-small i.filled {
    color: #ffc107;
  }

  .rating-text {
    font-weight: 600;
    margin-left: 2px;
  }

  .download-counter {
    position: absolute;
    bottom: 12px;
    right: 12px;
    background: rgba(40, 167, 69, 0.9);
    color: white;
    padding: 6px 10px;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
    backdrop-filter: blur(10px);
  }

  /* Product Content */
  .product-showcase-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .product-showcase-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: #000000;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .product-showcase-description {
    font-size: 0.9rem;
    color: #666666;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex: 1;
  }

  .product-showcase-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  .product-price {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .price-label {
    font-size: 0.75rem;
    color: #999999;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .price-badge {
    background: linear-gradient(135deg, #28a745, #20c997);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
  }

  .quick-download-btn {
    background: #000000;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 25px;
    font-size: 0.85rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s ease;
  }

  .quick-download-btn:hover {
    background: #434343;
    transform: translateX(4px);
  }

  /* Products CTA Section */
  .products-cta {
    text-align: center;
    margin-top: 5rem;
    padding: 3rem 2rem;
    background: white;
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    border: 2px solid #f0f0f0;
    position: relative;
    overflow: hidden;
  }

  .products-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #000000, #434343, #000000);
  }

  .products-stats {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .products-stats .stat-item {
    text-align: center;
  }

  .products-stats .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 900;
    color: #000000;
    margin-bottom: 0.5rem;
  }

  .products-stats .stat-text {
    color: #666666;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .view-all-products-btn {
    background: #000000;
    color: white;
    border: none;
    padding: 20px 40px;
    border-radius: 60px;
    font-size: 1.2rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 16px;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .btn-bg-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }

  .view-all-products-btn:hover .btn-bg-effect {
    left: 100%;
  }

  .view-all-products-btn:hover {
    background: #434343;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .btn-icon {
    background: rgba(255, 255, 255, 0.2);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .view-all-products-btn:hover .btn-icon {
    background: white;
    color: #000000;
    transform: rotate(45deg);
  }

  .products-note {
    color: #666666;
    font-size: 0.95rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .products-note i {
    color: #007bff;
  }

  /* Empty State */
  .empty-products-state {
    text-align: center;
    padding: 5rem 2rem;
  }

  .empty-illustration {
    position: relative;
    margin-bottom: 2rem;
  }

  .empty-illustration i {
    font-size: 6rem;
    color: #e9ecef;
    margin-bottom: 1rem;
  }

  .empty-particles {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .empty-particles span {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #dee2e6;
    border-radius: 50%;
    animation: emptyFloat 3s ease-in-out infinite;
  }

  .empty-particles span:nth-child(1) {
    left: -40px;
    animation-delay: 0s;
  }

  .empty-particles span:nth-child(2) {
    left: 0;
    animation-delay: 1s;
  }

  .empty-particles span:nth-child(3) {
    left: 40px;
    animation-delay: 2s;
  }

  @keyframes emptyFloat {
    0%, 100% { transform: translateY(0); opacity: 0.7; }
    50% { transform: translateY(-20px); opacity: 1; }
  }

  .empty-products-state h4 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #000000;
    margin-bottom: 1rem;
  }

  .empty-products-state p {
    color: #666666;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .notify-btn {
    background: transparent;
    color: #000000;
    border: 2px solid #000000;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .notify-btn:hover {
    background: #000000;
    color: white;
  }

  /* Responsive Design for Products */
  @media (max-width: 1400px) {
    .products-track {
      grid-template-columns: repeat(6, minmax(280px, 1fr));
    }
  }

  @media (max-width: 1200px) {
    .products-track {
      grid-template-columns: repeat(4, minmax(280px, 1fr));
    }
  }

  @media (max-width: 992px) {
    .products-track {
      grid-template-columns: repeat(3, minmax(260px, 1fr));
      gap: 1.5rem;
    }

    .product-showcase-item {
      min-width: 260px;
    }

    .products-stats {
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .products-track {
      grid-template-columns: repeat(2, minmax(240px, 1fr));
      gap: 1rem;
      padding: 1rem 0;
    }

    .product-showcase-item {
      min-width: 240px;
    }

    .products-showcase {
      padding: 0 10px;
    }

    .products-stats {
      flex-direction: column;
      gap: 1.5rem;
    }

    .view-all-products-btn {
      padding: 16px 32px;
      font-size: 1rem;
    }

    .products-cta {
      padding: 2rem 1rem;
    }
  }

  @media (max-width: 576px) {
    .products-track {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }

    .product-showcase-item {
      min-width: 280px;
      max-width: 100%;
    }

    .overlay-buttons {
      gap: 8px;
    }

    .overlay-action-btn {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }

    .view-all-products-btn {
      width: 100%;
      max-width: 300px;
      justify-content: center;
    }
  }

  /* Scroll Indicators for Mobile */
  @media (max-width: 992px) {
    .products-showcase::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, transparent, #000000, transparent);
      border-radius: 2px;
    }
  }
        /* Animated Background */
        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          background: linear-gradient(135deg, #000000, #434343);
          border-radius: 50%;
          width: var(--size);
          height: var(--size);
          animation: float var(--duration) ease-in-out infinite var(--delay);
          opacity: 0.1;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-100px) rotate(90deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-200px) rotate(180deg);
            opacity: 0.1;
          }
          75% {
            transform: translateY(-100px) rotate(270deg);
            opacity: 0.3;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: var(--delay, 0s);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
          position: relative;
          display: flex;
          align-items: center;
          padding: 80px 0;
        }

        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #000000;
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .badge-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: shimmer 2s ease-in-out infinite;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 2rem;
          color: #000000;
        }

        .dynamic-word {
          color: #434343;
          position: relative;
          display: inline-block;
          animation: fadeInUp 0.5s ease-out;
        }

        .brand-highlight {
          background: linear-gradient(135deg, #000000 0%, #434343 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .brand-highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, #000000 0%, #434343 100%);
          border-radius: 2px;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #666666;
          line-height: 1.7;
          margin-bottom: 3rem;
          max-width: 500px;
        }

        /* Enhanced Search */
        .hero-search {
          margin-bottom: 3rem;
        }

        .search-wrapper {
          display: flex;
          background: #ffffff;
          border: 2px solid #f0f0f0;
          border-radius: 60px;
          padding: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          transition: all 0.3s ease;
        }

        .search-wrapper:focus-within {
          border-color: #000000;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .search-input-container {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 24px;
          color: #999999;
          font-size: 1.1rem;
          z-index: 2;
        }

        .search-input {
          flex: 1;
          border: none;
          background: none;
          padding: 20px 24px 20px 60px;
          font-size: 1.1rem;
          outline: none;
          color: #000000;
          font-weight: 500;
        }

        .search-input::placeholder {
          color: #999999;
        }

        .ai-indicator {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: #000000;
          color: white;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .search-button {
          background: #000000;
          color: white;
          border: none;
          padding: 18px 32px;
          border-radius: 50px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
        }

        .search-button:hover {
          background: #434343;
          transform: translateX(4px);
        }

        /* Hero Stats */
        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .stat-card {
          text-align: center;
          padding: 1.5rem;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          min-width: 120px;
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: #000000;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666666;
          font-weight: 600;
        }

        /* Hero Actions */
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .btn-primary-hero {
          background: #000000;
          color: white;
          border: none;
          padding: 20px 40px;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary-hero:hover {
          background: #434343;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .btn-secondary-hero {
          background: transparent;
          color: #000000;
          border: 2px solid #000000;
          padding: 18px 36px;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
        }

        .btn-secondary-hero:hover {
          background: #000000;
          color: white;
          transform: translateY(-3px);
        }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          z-index: 2;
        }

        .visual-container {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .main-screen {
          background: #1a1a1a;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
          border: 1px solid #333333;
          transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
          transition: all 0.3s ease;
        }

        .main-screen:hover {
          transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
        }

        .screen-header {
          background: #2a2a2a;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid #333333;
        }

        .window-controls {
          display: flex;
          gap: 8px;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control:hover {
          transform: scale(1.3);
        }

        .control.close { background: #ff5f57; }
        .control.minimize { background: #ffbd2e; }
        .control.maximize { background: #28ca42; }

        .screen-title {
          color: #ffffff;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }

        .screen-content {
          padding: 30px;
          background: #f8f8f8;
          min-height: 300px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          height: 100%;
        }

        .content-item {
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          position: relative;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out forwards var(--delay);
        }

        .content-item:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .content-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .content-item:hover .item-overlay {
          opacity: 1;
        }

        /* Floating UI Elements */
        .floating-ui-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .ui-element {
          position: absolute;
          background: white;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #000000;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border: 1px solid #f0f0f0;
          animation: float 6s ease-in-out infinite;
        }

        .ui-element.notification {
          top: 20%;
          left: -40px;
          animation-delay: 0s;
        }

        .ui-element.download {
          top: 50%;
          right: -60px;
          animation-delay: 2s;
        }

        .ui-element.ai-chat {
          bottom: 30%;
          left: -50px;
          animation-delay: 4s;
        }

        /* About Section */
        .about-section {
          padding: 120px 0;
          background: white;
        }

        .about-content {
          padding-right: 2rem;
        }

        .about-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #666666;
          margin-bottom: 2.5rem;
        }

        .about-highlights {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #000000;
        }

        .highlight-item i {
          color: #28a745;
          font-size: 1.2rem;
        }

        .company-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          padding: 2rem;
        }

        .company-stat-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border: 2px solid #f0f0f0;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s ease;
        }

        .company-stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: #000000;
        }

        .stat-icon {
          font-size: 3rem;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f8f8;
          border-radius: 16px;
        }

        /* Sections */
        .features-section,
        .pricing-section,
        .payment-section,
        .products-section,
        .testimonials-section,
        .faq-section {
          padding: 120px 0;
        }

        .features-section {
          background: #f8f8f8;
        }

        .pricing-section {
          background: white;
        }

        .payment-section {
          background: #f8f8f8;
        }

        .products-section {
          background: white;
        }

        .testimonials-section {
          background: #f8f8f8;
        }

        .faq-section {
          background: white;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          background: #000000;
          color: white;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .badge-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #000000;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .highlight {
          background: linear-gradient(135deg, #434343 0%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #666666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Features Grid */
        .features-grid {
          margin-top: 4rem;
        }

        .feature-card {
          background: white;
          border-radius: 24px;
          padding: 3rem 2rem;
          height: 100%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border: 2px solid #f0f0f0;
          transition: all 0.4s ease;
          margin-bottom: 2rem;
          text-align: center;
        }

        .feature-card:hover,
        .feature-card.active {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
          border-color: #000000;
        }

        .feature-icon {
          font-size: 4rem;
          margin-bottom: 2rem;
          display: block;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 1rem;
        }

        .feature-description {
          color: #666666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .feature-details {
          font-size: 0.9rem;
          color: #999999;
          font-weight: 600;
        }

        /* Pricing Cards */
        .pricing-cards {
          margin-top: 4rem;
        }

        .pricing-card {
          background: white;
          border-radius: 24px;
          padding: 3rem 2rem;
          border: 2px solid #f0f0f0;
          position: relative;
          cursor: pointer;
          transition: all 0.4s ease;
          margin-bottom: 2rem;
          height: 100%;
        }

        .pricing-card:hover,
        .pricing-card.active {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
          border-color: #000000;
        }

        .pricing-card.popular {
          border-color: #000000;
          background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #000000;
          color: white;
          padding: 8px 24px;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .plan-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .plan-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 1rem;
        }

        .plan-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 4px;
          margin-bottom: 1rem;
        }

        .currency {
          font-size: 1.2rem;
          color: #666666;
          font-weight: 600;
        }

        .amount {
          font-size: 3.5rem;
          font-weight: 900;
          color: #000000;
        }

        .period {
          font-size: 1.2rem;
          color: #666666;
          font-weight: 600;
        }

        .plan-download-limit {
          background: #f8f8f8;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 1rem;
          color: #666666;
        }

        .plan-features {
          margin-bottom: 3rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .feature-item:last-child {
          border-bottom: none;
        }

        .feature-item i {
          color: #28a745;
          font-size: 1rem;
        }

        .plan-btn {
          width: 100%;
          background: #000000;
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .plan-btn:hover {
          background: #434343;
          transform: translateY(-2px);
        }

        /* Payment Methods */
        .payment-methods {
          margin-top: 4rem;
        }

        .payment-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          border: 2px solid #f0f0f0;
          transition: all 0.3s ease;
          height: 100%;
          margin-bottom: 2rem;
        }

        .payment-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          border-color: #000000;
        }

        .payment-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1.5rem;
          color: white;
        }

        .payment-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 1rem;
        }

        .payment-description {
          color: #666666;
          margin-bottom: 1.5rem;
        }

        .payment-secure {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #28a745;
          font-weight: 600;
        }

        /* Products */
        .loading-container {
          text-align: center;
          padding: 4rem 0;
        }

        .loading-spinner {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 2rem;
        }

        .spinner-ring {
          width: 16px;
          height: 16px;
          border: 3px solid #f0f0f0;
          border-top: 3px solid #000000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .spinner-ring:nth-child(2) { animation-delay: 0.1s; }
        .spinner-ring:nth-child(3) { animation-delay: 0.2s; }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .products-grid {
          margin-top: 4rem;
        }

        .product-card {
          border: none;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s ease;
          background: white;
          height: 100%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 2px solid #f0f0f0;
          margin-bottom: 2rem;
        }

        .product-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
          border-color: #000000;
        }

        .product-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #f8f8f8;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .overlay-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .preview-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .download-btn {
          background: white;
          color: #000000;
        }

        .overlay-btn:hover {
          transform: scale(1.15);
        }

        .product-body {
          padding: 2rem 1.5rem;
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .category-badge {
          padding: 6px 16px;
          border-radius: 25px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .category-badge.themes {
          background: #f0f0f0;
          color: #000000;
        }

        .category-badge.plugins {
          background: #434343;
          color: white;
        }

        .download-count {
          font-size: 0.8rem;
          color: #666666;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .product-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .product-description {
          font-size: 0.95rem;
          color: #666666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .product-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-preview {
          flex: 1;
          background: transparent;
          color: #000000;
          border: 2px solid #f0f0f0;
          padding: 12px 16px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .btn-preview:hover {
          border-color: #000000;
          background: #000000;
          color: white;
        }

        .btn-download {
          flex: 1;
          background: #000000;
          color: white;
          border: none;
          padding: 12px 16px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .btn-download:hover {
          background: #434343;
          transform: translateY(-2px);
        }

        .section-footer {
          text-align: center;
          margin-top: 4rem;
        }

        .btn-view-all {
          background: #000000;
          color: white;
          border: none;
          padding: 20px 40px;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .btn-view-all:hover {
          background: #434343;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        /* Testimonials */
        .testimonial-carousel {
          max-width: 900px;
          margin: 0 auto;
        }

        .testimonial-card {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          text-align: center;
          border: 2px solid #f0f0f0;
        }

        .stars {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 2rem;
        }

        .stars i {
          color: #ffc107;
          font-size: 1.3rem;
        }

        .testimonial-text {
          font-size: 1.3rem;
          line-height: 1.7;
          color: #000000;
          margin-bottom: 2.5rem;
          font-weight: 500;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .author-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #f0f0f0;
        }

        .author-info {
          text-align: left;
        }

        .author-info h5 {
          font-size: 1.3rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 0.5rem;
        }

        .author-info p {
          font-size: 1rem;
          color: #666666;
          margin: 0 0 0.5rem 0;
        }

        .plan-badge {
          background: #000000;
          color: white;
          font-size: 0.75rem;
          padding: 4px 12px;
          border-radius: 15px;
        }

        .testimonial-navigation {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 3rem;
        }

        .nav-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: none;
          background: #f0f0f0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot.active {
          background: #000000;
          transform: scale(1.3);
        }

        /* FAQ Section */
        .faq-list {
          margin-top: 3rem;
        }

        .faq-item {
          background: white;
          border-radius: 16px;
          margin-bottom: 1.5rem;
          border: 2px solid #f0f0f0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #000000;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background: white;
        }

        .faq-question h5 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 700;
          color: #000000;
        }

        .faq-question i {
          color: #666666;
          transition: all 0.3s ease;
        }

        .faq-answer {
          padding: 0 2rem 2rem;
          background: #f8f8f8;
        }

        .faq-answer p {
          margin: 0;
          color: #666666;
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 0;
          background: #000000;
          color: white;
          text-align: center;
        }

        .cta-icon {
          width: 120px;
          height: 120px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
          margin: 0 auto 2.5rem;
        }

        .cta-content h2 {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .cta-content p {
          font-size: 1.4rem;
          opacity: 0.9;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .btn-cta-primary {
          background: white;
          color: #000000;
          border: none;
          padding: 20px 40px;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .btn-cta-primary:hover {
          background: #f0f0f0;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
        }

        .btn-cta-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 18px 36px;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .btn-cta-secondary:hover {
          background: white;
          color: #000000;
          transform: translateY(-3px);
        }

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          font-size: 1rem;
        }

        .trust-item i {
          font-size: 1.5rem;
          color: white;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: #666666;
        }

        .empty-icon {
          font-size: 5rem;
          margin-bottom: 2rem;
          opacity: 0.5;
        }

        /* Video Modal */
        .video-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 3.8rem;
          }
          
          .section-title {
            font-size: 3rem;
          }
          
          .visual-container {
            margin-top: 3rem;
          }

          .main-screen {
            transform: none;
          }

          .company-stats-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 3.2rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .hero-content {
            margin-bottom: 3rem;
          }

          .floating-ui-elements {
            display: none;
          }

          .testimonial-author {
            flex-direction: column;
          }

          .author-info {
            text-align: center;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .about-content {
            padding-right: 0;
            margin-bottom: 3rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .search-wrapper {
            flex-direction: column;
            gap: 12px;
            border-radius: 20px;
          }

          .search-button {
            justify-content: center;
            border-radius: 12px;
          }

          .ai-indicator {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            margin-top: 8px;
            align-self: flex-start;
          }

          .hero-stats {
            justify-content: center;
          }

          .trust-badges {
            gap: 1.5rem;
          }

          .trust-item {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .cta-content h2 {
            font-size: 2.5rem;
          }

          .btn-cta-primary,
          .btn-cta-secondary {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }

          .company-stats-grid {
            grid-template-columns: 1fr;
          }

          .company-stat-card {
            flex-direction: column;
            text-align: center;
          }

          .plan-price .amount {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-stats {
            flex-direction: column;
            align-items: center;
          }

          .stat-card {
            width: 100%;
            max-width: 200px;
          }

          .testimonial-card {
            padding: 2rem;
          }

          .testimonial-text {
            font-size: 1.1rem;
          }

          .trust-badges {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .content-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .plan-price .amount {
            font-size: 2rem;
          }

          .faq-question {
            padding: 1.5rem;
          }

          .faq-answer {
            padding: 0 1.5rem 1.5rem;
          }
        }
      `})]})},TA=()=>{const[e,n]=v.useState({email:"",password:""}),[r,o]=v.useState(!1),[s,c]=v.useState(!1),[d,h]=v.useState(!1),[f,p]=v.useState(!1),[g,x]=v.useState({x:0,y:0}),[b,S]=v.useState("normal"),{login:w}=$r(),R=Ur(),{email:E,password:N}=e;v.useEffect(()=>{h(!0)},[]),v.useEffect(()=>{const D=T=>{const k=document.querySelector(".login-panda-svg")?.getBoundingClientRect();if(k){const L=k.left+k.width/2,H=k.top+k.height/2,G=T.clientX-L,W=T.clientY-H,te=3,le=Math.max(-te,Math.min(te,G/50)),de=Math.max(-te,Math.min(te,W/50));x({x:le,y:de})}};return window.addEventListener("mousemove",D),()=>window.removeEventListener("mousemove",D)},[]),v.useEffect(()=>{E&&N&&!r?S("excited"):N.length>0&&!s?S("closed"):s&&N.length>0?S("surprised"):E.length>0?S("thinking"):S("normal")},[E,N,s,r]);const _=D=>{n({...e,[D.target.name]:D.target.value}),D.target.name==="password"&&p(D.target.value.length>0)},O=async D=>{if(D.preventDefault(),!E||!N){he.error("Please fill in all fields"),S("worried");return}o(!0),S("loading");try{(await w(e)).success&&(S("success"),he.success("Welcome back! Login successful!"),setTimeout(()=>{R("/dashboard")},1e3))}catch(T){S("error"),T.requiresVerification?(he.error("Account not verified. Please complete OTP verification first."),R("/register")):he.error(T.message||"Invalid credentials. Please try again.")}finally{setTimeout(()=>{o(!1),b==="error"&&S("normal")},2e3)}},M=()=>{switch(b){case"closed":return"Your password is safe with me! 🔐";case"surprised":return"I can see your password now! 👀";case"thinking":return"Great! Now enter your password 🤔";case"excited":return"Ready to log in! Let's go! 🚀";case"loading":return"Checking your credentials... ⏳";case"success":return"Welcome back! Success! 🎉";case"error":return"Oops! Something went wrong 😅";case"worried":return"Please fill in all fields! 😟";default:return"Welcome back to XeriwoTools! 👋"}};return u.jsxs("div",{className:"login-page",children:[u.jsx("div",{className:"login-bg",children:u.jsx("div",{className:"floating-shapes",children:[...Array(12)].map((D,T)=>u.jsx("div",{className:"floating-shape",style:{"--delay":`${T*.5}s`,"--duration":`${8+T%4*2}s`,"--size":`${15+T%3*8}px`}},T))})}),u.jsx(At,{fluid:!0,className:"login-container",children:u.jsxs(Lt,{className:"login-row",children:[u.jsx(Ke,{lg:6,className:"d-none d-lg-flex brand-side",children:u.jsxs("div",{className:`login-branding ${d?"animate-in":""}`,children:[u.jsxs("div",{className:"brand-logo",children:[u.jsx("div",{className:"logo-icon",children:u.jsx("i",{className:"fab fa-wordpress-simple"})}),u.jsx("h1",{className:"brand-name",children:"XeriwoTools"})]}),u.jsxs("div",{className:"brand-tagline",children:[u.jsx("h2",{children:"Welcome Back!"}),u.jsx("p",{children:"Continue your WordPress journey with premium themes and plugins"})]}),u.jsxs("div",{className:"brand-features",children:[u.jsxs("div",{className:"feature-item",children:[u.jsx("div",{className:"feature-icon",children:u.jsx("i",{className:"fas fa-rocket"})}),u.jsxs("div",{className:"feature-text",children:[u.jsx("h4",{children:"Lightning Fast"}),u.jsx("p",{children:"Instant access to premium assets"})]})]}),u.jsxs("div",{className:"feature-item",children:[u.jsx("div",{className:"feature-icon",children:u.jsx("i",{className:"fas fa-shield-alt"})}),u.jsxs("div",{className:"feature-text",children:[u.jsx("h4",{children:"Secure Platform"}),u.jsx("p",{children:"Enterprise-grade security"})]})]}),u.jsxs("div",{className:"feature-item",children:[u.jsx("div",{className:"feature-icon",children:u.jsx("i",{className:"fas fa-crown"})}),u.jsxs("div",{className:"feature-text",children:[u.jsx("h4",{children:"Premium Quality"}),u.jsx("p",{children:"Hand-curated WordPress assets"})]})]})]}),u.jsxs("div",{className:"brand-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"500+"}),u.jsx("span",{className:"stat-label",children:"Premium Assets"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"25K+"}),u.jsx("span",{className:"stat-label",children:"Downloads"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"4.9★"}),u.jsx("span",{className:"stat-label",children:"Rating"})]})]})]})}),u.jsx(Ke,{lg:6,className:"form-side",children:u.jsx("div",{className:`login-form-container ${d?"animate-in-right":""}`,children:u.jsxs("div",{className:"form-content",children:[u.jsx("div",{className:"panda-container",children:u.jsxs("div",{className:"panda-wrapper",children:[u.jsxs("svg",{className:"login-panda-svg",xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",viewBox:"0 0 200 200",children:[u.jsx("circle",{cx:"100",cy:"100",r:"75",fill:"#ffffff",stroke:"#000000",strokeWidth:"4"}),u.jsx("circle",{cx:"60",cy:"55",r:"18",fill:"#000000"}),u.jsx("circle",{cx:"140",cy:"55",r:"18",fill:"#000000"}),u.jsx("circle",{cx:"62",cy:"57",r:"8",fill:"#ffffff"}),u.jsx("circle",{cx:"138",cy:"57",r:"8",fill:"#ffffff"}),u.jsx("ellipse",{cx:"80",cy:"85",rx:"14",ry:"20",fill:"#000000"}),u.jsx("ellipse",{cx:"120",cy:"85",rx:"14",ry:"20",fill:"#000000"}),b==="closed"?u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M70 85 Q80 80 90 85",stroke:"#000000",strokeWidth:"2",fill:"none"}),u.jsx("path",{d:"M110 85 Q120 80 130 85",stroke:"#000000",strokeWidth:"2",fill:"none"})]}):b==="loading"?u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"80",cy:"85",r:"7",fill:"#ffffff"}),u.jsx("circle",{cx:"120",cy:"85",r:"7",fill:"#ffffff"}),u.jsx("circle",{cx:80,cy:85,r:"3",fill:"#000000",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 80 85;360 80 85",dur:"1s",repeatCount:"indefinite"})}),u.jsx("circle",{cx:120,cy:85,r:"3",fill:"#000000",children:u.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 120 85;360 120 85",dur:"1s",repeatCount:"indefinite"})})]}):u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"80",cy:"85",r:"7",fill:"#ffffff"}),u.jsx("circle",{cx:"120",cy:"85",r:"7",fill:"#ffffff"}),u.jsx("circle",{cx:80+g.x,cy:85+g.y,r:b==="surprised"?"4":b==="excited"?"3.5":"3",fill:"#000000",style:{transition:"all 0.1s ease"}}),u.jsx("circle",{cx:120+g.x,cy:85+g.y,r:b==="surprised"?"4":b==="excited"?"3.5":"3",fill:"#000000",style:{transition:"all 0.1s ease"}}),u.jsx("circle",{cx:80+g.x+1,cy:85+g.y-1,r:"1",fill:"#ffffff"}),u.jsx("circle",{cx:120+g.x+1,cy:85+g.y-1,r:"1",fill:"#ffffff"}),(b==="excited"||b==="success")&&u.jsxs(u.Fragment,{children:[u.jsx("text",{x:"65",y:"75",fontSize:"10",fill:"#ffd700",children:"✨"}),u.jsx("text",{x:"125",y:"75",fontSize:"10",fill:"#ffd700",children:"✨"})]})]}),u.jsx("ellipse",{cx:"100",cy:"105",rx:"3",ry:"2",fill:"#000000"}),b==="worried"||b==="error"?u.jsx("path",{d:"M90 120 Q100 115 110 120",stroke:"#000000",strokeWidth:"2",fill:"none"}):b==="excited"||b==="success"?u.jsx("path",{d:"M85 120 Q100 132 115 120",stroke:"#000000",strokeWidth:"2",fill:"none"}):b==="surprised"?u.jsx("ellipse",{cx:"100",cy:"120",rx:"4",ry:"6",fill:"#000000"}):b==="thinking"?u.jsx("path",{d:"M95 120 Q100 125 105 120",stroke:"#000000",strokeWidth:"2",fill:"none"}):u.jsx("path",{d:"M92 120 Q100 125 108 120",stroke:"#000000",strokeWidth:"2",fill:"none"}),(b==="excited"||b==="success")&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"55",cy:"95",r:"5",fill:"#ff69b4",opacity:"0.4"}),u.jsx("circle",{cx:"145",cy:"95",r:"5",fill:"#ff69b4",opacity:"0.4"})]})]}),u.jsxs("div",{className:"speech-bubble",children:[u.jsx("div",{className:"bubble-content",children:M()}),u.jsx("div",{className:"bubble-arrow"})]})]})}),u.jsxs("div",{className:"login-header",children:[u.jsx("h2",{className:"login-title",children:"Sign In"}),u.jsx("p",{className:"login-subtitle",children:"Access your XeriwoTools account"})]}),u.jsx(Le,{className:"login-card",children:u.jsx(Le.Body,{children:u.jsxs(_e,{onSubmit:O,className:"login-form",children:[u.jsx(_e.Group,{className:"form-group-custom",children:u.jsxs("div",{className:"input-wrapper",children:[u.jsx("div",{className:"input-icon",children:u.jsx("i",{className:"fas fa-envelope"})}),u.jsx(_e.Control,{type:"email",name:"email",value:E,onChange:_,required:!0,placeholder:"Email Address",disabled:r,className:"form-input-custom"}),u.jsx("div",{className:"input-border"})]})}),u.jsx(_e.Group,{className:"form-group-custom",children:u.jsxs("div",{className:"input-wrapper",children:[u.jsx("div",{className:"input-icon",children:u.jsx("i",{className:"fas fa-lock"})}),u.jsx(_e.Control,{type:s?"text":"password",name:"password",value:N,onChange:_,required:!0,placeholder:"Password",disabled:r,className:"form-input-custom"}),u.jsx("button",{type:"button",className:"password-toggle",onClick:()=>c(!s),children:u.jsx("i",{className:`fas ${s?"fa-eye-slash":"fa-eye"}`})}),u.jsx("div",{className:"input-border"})]})}),u.jsxs("div",{className:"form-options",children:[u.jsx(_e.Check,{type:"checkbox",id:"remember-me",label:"Remember me",className:"remember-checkbox"}),u.jsxs(tn,{to:"/forgot-password",className:"forgot-link",children:[u.jsx("i",{className:"fas fa-key"}),"Forgot password?"]})]}),u.jsxs(ze,{type:"submit",className:"login-btn",disabled:r,children:[r?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("span",{children:"Signing In..."})]}):u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-sign-in-alt"}),u.jsx("span",{children:"Sign In"}),u.jsx("i",{className:"fas fa-arrow-right"})]}),u.jsx("div",{className:"btn-ripple"})]}),u.jsx(Le.Footer,{className:"login-footer",children:u.jsxs("p",{children:[u.jsx("i",{className:"fas fa-user-plus"}),"Don't have an account?",u.jsx(tn,{to:"/register",className:"register-link",children:"Create one here"})]})})]})})}),u.jsxs("div",{className:"trust-indicators",children:[u.jsxs("div",{className:"trust-item",children:[u.jsx("i",{className:"fas fa-shield-check"}),u.jsx("span",{children:"SSL Secured"})]}),u.jsxs("div",{className:"trust-item",children:[u.jsx("i",{className:"fas fa-user-shield"}),u.jsx("span",{children:"Privacy Protected"})]}),u.jsxs("div",{className:"trust-item",children:[u.jsx("i",{className:"fas fa-clock"}),u.jsx("span",{children:"24/7 Support"})]})]})]})})})]})}),u.jsx("style",{jsx:!0,children:`
        .login-page {
          min-height: 100vh;
          max-height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
          position: relative;
          overflow: hidden;
        }

        /* Animated Background */
        .login-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-shape {
          position: absolute;
          background: linear-gradient(135deg, #000000, #434343);
          border-radius: 50%;
          width: var(--size);
          height: var(--size);
          opacity: 0.03;
          animation: floatShape var(--duration) ease-in-out infinite var(--delay);
        }

        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-80px) rotate(90deg); }
          50% { transform: translateY(-160px) rotate(180deg); }
          75% { transform: translateY(-80px) rotate(270deg); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-in { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-in-right { animation: slideInRight 0.8s ease-out forwards; }

        /* Container */
        .login-container {
          padding: 0;
          height: 100vh;
        }

        .login-row {
          height: 100vh;
          margin: 0;
        }

        /* Brand Side */
        .brand-side {
          background: linear-gradient(135deg, #000000 0%, #434343 100%);
          color: white;
          padding: 2rem;
          display: flex;
          align-items: center;
          position: relative;
          overflow-y: auto;
        }

        .brand-side::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          opacity: 0.3;
        }

        .login-branding {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .logo-icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }

        .brand-name {
          font-size: 2rem;
          font-weight: 900;
          margin: 0;
        }

        .brand-tagline {
          margin-bottom: 2rem;
        }

        .brand-tagline h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .brand-tagline p {
          font-size: 1rem;
          opacity: 0.9;
          line-height: 1.5;
        }

        .brand-features {
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(8px);
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .feature-text h4 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          font-weight: 700;
        }

        .feature-text p {
          margin: 0;
          opacity: 0.8;
          font-size: 0.85rem;
        }

        .brand-stats {
          display: flex;
          gap: 1.5rem;
        }

        .stat-item {
          text-align: center;
          flex: 1;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.75rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Form Side */
        .form-side {
          padding: 0;
          display: flex;
          align-items: center;
          height: 100vh;
          overflow-y: auto;
        }

        .login-form-container {
          width: 100%;
          padding: 1rem;
        }

        .form-content {
          max-width: 400px;
          margin: 0 auto;
        }

        /* Panda Container */
        .panda-container {
          text-align: center;
          margin-bottom: 1rem;
        }

        .panda-wrapper {
          position: relative;
          display: inline-block;
        }

        .login-panda-svg {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
          transition: all 0.3s ease;
        }

        .speech-bubble {
          position: absolute;
          top: -10px;
          right: -55px;
          background: #000000;
          color: white;
          padding: 0.4rem 0.7rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }

        .bubble-arrow {
          position: absolute;
          left: -5px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-right: 5px solid #000000;
        }

        /* Login Header */
        .login-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .login-title {
          font-size: 2rem;
          font-weight: 900;
          color: #000000;
          margin-bottom: 0.25rem;
        }

        .login-subtitle {
          color: #666666;
          font-size: 1rem;
        }

        /* Login Card */
        .login-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 2px solid #f0f0f0;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .login-card .card-body {
          padding: 2rem;
        }

        /* Form Groups */
        .form-group-custom {
          margin-bottom: 1.25rem;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #999999;
          font-size: 1rem;
          z-index: 2;
        }

        .form-input-custom {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 2.75rem;
          border: 2px solid #f0f0f0;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 500;
          background: white;
          transition: all 0.3s ease;
          color: #000000;
        }

        .form-input-custom:focus {
          border-color: #000000;
          box-shadow: 0 0 0 0.15rem rgba(0, 0, 0, 0.1);
          outline: none;
        }

        .input-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, #000000, #434343);
          transition: all 0.3s ease;
          border-radius: 0 0 10px 10px;
        }

        .form-input-custom:focus ~ .input-border {
          width: 100%;
        }

        .password-toggle {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #666666;
          padding: 0.5rem;
          border-radius: 6px;
          transition: all 0.3s ease;
          z-index: 5;
        }

        .password-toggle:hover {
          background: #f0f0f0;
          color: #000000;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .remember-checkbox .form-check-input {
          border-radius: 4px;
          border: 2px solid #f0f0f0;
          width: 1.1rem;
          height: 1.1rem;
        }

        .remember-checkbox .form-check-input:checked {
          background-color: #000000;
          border-color: #000000;
        }

        .forgot-link {
          color: #666666;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.375rem;
          transition: all 0.3s ease;
        }

        .forgot-link:hover {
          color: #000000;
          text-decoration: underline;
        }

        .login-btn {
          width: 100%;
          background: #000000;
          color: white;
          border: none;
          padding: 0.875rem 1.5rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .login-btn:hover {
          background: #434343;
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: all 0.6s ease;
        }

        .login-btn:active .btn-ripple {
          width: 300px;
          height: 300px;
        }

        .loading-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .login-divider {
          text-align: center;
          position: relative;
          margin-bottom: 1.5rem;
        }

        .login-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #f0f0f0;
        }

        .login-divider span {
          background: white;
          padding: 0 1rem;
          color: #666666;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .social-login {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          border: 2px solid #f0f0f0;
          background: white;
          color: #333333;
        }

        .social-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .social-btn.google:hover {
          border-color: #db4437;
          color: #db4437;
        }

        .social-btn.github:hover {
          border-color: #333333;
          color: #333333;
        }

        .login-footer {
          background: #f8f8f8;
          border: none;
          padding: 1.25rem 2rem;
          text-align: center;
        }

        .login-footer p {
          margin: 0;
          color: #666666;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
        }

        .register-link {
          color: #000000;
          font-weight: 700;
          text-decoration: none;
          margin-left: 0.25rem;
        }

        .register-link:hover {
          text-decoration: underline;
        }

        .trust-indicators {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: #666666;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .trust-item i {
          color: #28a745;
          font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .login-row {
            height: auto;
            min-height: 100vh;
          }

          .brand-side {
            display: none;
          }
          
          .form-side {
            height: auto;
            min-height: 100vh;
            padding: 1rem 0;
          }

          .speech-bubble {
            position: relative;
            top: 0.5rem;
            right: 0;
            margin: 0 auto;
            display: inline-block;
          }

          .bubble-arrow {
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid #000000;
            border-top: none;
          }
        }

        @media (max-width: 768px) {
          .login-form-container {
            padding: 0.75rem;
          }

          .login-card .card-body {
            padding: 1.5rem;
          }

          .login-title {
            font-size: 1.75rem;
          }

          .social-login {
            flex-direction: column;
          }

          .trust-indicators {
            gap: 1rem;
          }

          .trust-item {
            font-size: 0.75rem;
          }

          .login-panda-svg {
            width: 70px;
            height: 70px;
          }

          .speech-bubble {
            font-size: 0.65rem;
            padding: 0.3rem 0.5rem;
          }
        }

        @media (max-width: 576px) {
          .login-form-container {
            padding: 0.5rem;
          }

          .login-card .card-body {
            padding: 1.25rem;
          }

          .trust-indicators {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }

          .login-panda-svg {
            width: 60px;
            height: 60px;
          }
        }

        /* Scroll optimizations */
        .form-side {
          -webkit-overflow-scrolling: touch;
        }

        .form-side::-webkit-scrollbar {
          width: 4px;
        }

        .form-side::-webkit-scrollbar-track {
          background: transparent;
        }

        .form-side::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 2px;
        }
      `})]})},CA=()=>{const[e,n]=v.useState({name:"",email:"",password:"",confirmPassword:""}),[r,o]=v.useState(!1),[s,c]=v.useState(!1),[d,h]=v.useState(""),[f,p]=v.useState(!1),[g,x]=v.useState(!1),[b,S]=v.useState(!1),[w,R]=v.useState({x:0,y:0}),[E,N]=v.useState("normal"),[_,O]=v.useState({x:0,y:0}),{register:M,verifyOTP:D,pendingUserId:T}=$r(),k=Ur(),{name:L,email:H,password:G,confirmPassword:W}=e;v.useEffect(()=>{const X=J=>{O({x:J.clientX,y:J.clientY});const me=document.querySelector(".panda-svg")?.getBoundingClientRect();if(me){const A=me.left+me.width/2,Y=me.top+me.height/2,se=J.clientX-A,ne=J.clientY-Y,ce=3,Ee=Math.max(-ce,Math.min(ce,se/50)),fe=Math.max(-ce,Math.min(ce,ne/50));R({x:Ee,y:fe})}};return window.addEventListener("mousemove",X),()=>window.removeEventListener("mousemove",X)},[]),v.useEffect(()=>{G.length===0?N("normal"):b&&!g?N("closed"):g?N("surprised"):G.length<6?N("worried"):N("happy")},[G,g,b]);const te=X=>{n({...e,[X.target.name]:X.target.value}),X.target.name==="password"&&S(X.target.value.length>0)},le=async X=>{if(X.preventDefault(),G!==W){he.error("Passwords do not match");return}if(G.length<6){he.error("Password must be at least 6 characters");return}o(!0);try{(await M({name:L,email:H,password:G})).success&&(c(!0),he.success("Registration successful! Please wait for OTP from admin."),n({name:"",email:"",password:"",confirmPassword:""}))}catch(J){he.error(J.message||"Registration failed")}finally{o(!1)}},de=async X=>{if(X.preventDefault(),!d||d.length!==6){he.error("Please enter a valid 6-digit OTP");return}p(!0);try{(await D(d)).success&&(he.success("Account verified successfully! You are now logged in."),c(!1),k("/login"))}catch(J){he.error(J.message||"Invalid OTP. Please try again.")}finally{p(!1)}},re=()=>{c(!1),h("")},U=()=>{switch(E){case"closed":return"I can't see your password! 🤫";case"surprised":return"Oh! I can see it now! 😮";case"worried":return"Make it stronger please! 😟";case"happy":return"Great password! 😊";default:return"Hi! Ready to join XeriwoTools? 👋"}};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"register-page",children:[u.jsx("div",{className:"animated-background",children:u.jsx("div",{className:"floating-shapes",children:[...Array(12)].map((X,J)=>u.jsx("div",{className:"floating-shape",style:{"--delay":`${J*.5}s`,"--duration":`${10+J%4*2}s`,"--size":`${15+J%3*10}px`}},J))})}),u.jsx(At,{fluid:!0,className:"register-container",children:u.jsxs(Lt,{className:"register-row",children:[u.jsx(Ke,{lg:6,className:"d-none d-lg-flex brand-side",children:u.jsxs("div",{className:"brand-content",children:[u.jsxs("div",{className:"brand-header",children:[u.jsx("div",{className:"brand-logo",children:u.jsx("i",{className:"fab fa-wordpress-simple"})}),u.jsx("h1",{className:"brand-title",children:"XeriwoTools"})]}),u.jsxs("div",{className:"brand-message",children:[u.jsx("h2",{children:"Join Our Community!"}),u.jsx("p",{children:"Create your account and unlock access to premium WordPress themes, plugins, and AI-powered tools."})]}),u.jsxs("div",{className:"features-list",children:[u.jsxs("div",{className:"feature-item",children:[u.jsx("div",{className:"feature-icon",children:"🎨"}),u.jsxs("div",{children:[u.jsx("h4",{children:"500+ Premium Themes"}),u.jsx("p",{children:"Professional designs for every need"})]})]}),u.jsxs("div",{className:"feature-item",children:[u.jsx("div",{className:"feature-icon",children:"🔌"}),u.jsxs("div",{children:[u.jsx("h4",{children:"Powerful Plugins"}),u.jsx("p",{children:"Extend your website functionality"})]})]}),u.jsxs("div",{className:"feature-item",children:[u.jsx("div",{className:"feature-icon",children:"🤖"}),u.jsxs("div",{children:[u.jsx("h4",{children:"AI Assistant"}),u.jsx("p",{children:"Smart recommendations for you"})]})]})]}),u.jsxs("div",{className:"stats-row",children:[u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"18K+"}),u.jsx("span",{className:"stat-label",children:"Users"})]}),u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"4.9★"}),u.jsx("span",{className:"stat-label",children:"Rating"})]}),u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"99.9%"}),u.jsx("span",{className:"stat-label",children:"Uptime"})]})]})]})}),u.jsx(Ke,{lg:6,className:"form-side",children:u.jsx("div",{className:"form-container",children:u.jsxs("div",{className:"form-content",children:[u.jsx("div",{className:"panda-container",children:u.jsxs("div",{className:"panda-wrapper",children:[u.jsxs("svg",{className:"panda-svg",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 200 200",children:[u.jsx("circle",{cx:"100",cy:"100",r:"80",fill:"#ffffff",stroke:"#000000",strokeWidth:"4"}),u.jsx("circle",{cx:"55",cy:"50",r:"20",fill:"#000000"}),u.jsx("circle",{cx:"145",cy:"50",r:"20",fill:"#000000"}),u.jsx("circle",{cx:"57",cy:"52",r:"10",fill:"#ffffff"}),u.jsx("circle",{cx:"143",cy:"52",r:"10",fill:"#ffffff"}),u.jsx("ellipse",{cx:"75",cy:"85",rx:"16",ry:"22",fill:"#000000"}),u.jsx("ellipse",{cx:"125",cy:"85",rx:"16",ry:"22",fill:"#000000"}),E==="closed"?u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M65 85 Q75 80 85 85",stroke:"#000000",strokeWidth:"3",fill:"none"}),u.jsx("path",{d:"M115 85 Q125 80 135 85",stroke:"#000000",strokeWidth:"3",fill:"none"})]}):u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"75",cy:"85",r:"8",fill:"#ffffff"}),u.jsx("circle",{cx:"125",cy:"85",r:"8",fill:"#ffffff"}),u.jsx("circle",{cx:75+w.x,cy:85+w.y,r:E==="surprised"?"5":"3",fill:"#000000",style:{transition:"all 0.1s ease"}}),u.jsx("circle",{cx:125+w.x,cy:85+w.y,r:E==="surprised"?"5":"3",fill:"#000000",style:{transition:"all 0.1s ease"}}),u.jsx("circle",{cx:75+w.x+1,cy:85+w.y-1,r:"1",fill:"#ffffff"}),u.jsx("circle",{cx:125+w.x+1,cy:85+w.y-1,r:"1",fill:"#ffffff"})]}),u.jsx("ellipse",{cx:"100",cy:"110",rx:"3",ry:"2",fill:"#000000"}),E==="worried"?u.jsx("path",{d:"M90 125 Q100 120 110 125",stroke:"#000000",strokeWidth:"2",fill:"none"}):E==="happy"?u.jsx("path",{d:"M90 125 Q100 135 110 125",stroke:"#000000",strokeWidth:"2",fill:"none"}):E==="surprised"?u.jsx("ellipse",{cx:"100",cy:"125",rx:"4",ry:"6",fill:"#000000"}):u.jsx("path",{d:"M95 125 Q100 130 105 125",stroke:"#000000",strokeWidth:"2",fill:"none"}),E==="happy"&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"50",cy:"95",r:"6",fill:"#ff69b4",opacity:"0.3"}),u.jsx("circle",{cx:"150",cy:"95",r:"6",fill:"#ff69b4",opacity:"0.3"})]})]}),u.jsxs("div",{className:"speech-bubble",children:[u.jsx("div",{className:"bubble-content",children:U()}),u.jsx("div",{className:"bubble-arrow"})]})]})}),u.jsxs(Le,{className:"register-card",children:[u.jsxs(Le.Body,{className:"card-body-custom",children:[u.jsxs("div",{className:"form-header",children:[u.jsx("h2",{className:"form-title",children:"Create Account"}),u.jsx("p",{className:"form-subtitle",children:"Join XeriwoTools community"})]}),u.jsxs(_e,{onSubmit:le,className:"register-form",children:[u.jsx(_e.Group,{className:"form-group-modern",children:u.jsxs("div",{className:"input-container",children:[u.jsx("i",{className:"input-icon fas fa-user"}),u.jsx(_e.Control,{type:"text",name:"name",value:L,onChange:te,required:!0,placeholder:"Full Name",disabled:r,className:"form-input-modern"})]})}),u.jsx(_e.Group,{className:"form-group-modern",children:u.jsxs("div",{className:"input-container",children:[u.jsx("i",{className:"input-icon fas fa-envelope"}),u.jsx(_e.Control,{type:"email",name:"email",value:H,onChange:te,required:!0,placeholder:"Email Address",disabled:r,className:"form-input-modern"})]})}),u.jsx(_e.Group,{className:"form-group-modern",children:u.jsxs("div",{className:"input-container",children:[u.jsx("i",{className:"input-icon fas fa-lock"}),u.jsx(_e.Control,{type:g?"text":"password",name:"password",value:G,onChange:te,required:!0,minLength:"6",placeholder:"Password",disabled:r,className:"form-input-modern"}),u.jsx("button",{type:"button",className:"password-toggle-btn",onClick:()=>x(!g),children:u.jsx("i",{className:`fas ${g?"fa-eye-slash":"fa-eye"}`})})]})}),u.jsxs(_e.Group,{className:"form-group-modern",children:[u.jsxs("div",{className:"input-container",children:[u.jsx("i",{className:"input-icon fas fa-check-circle"}),u.jsx(_e.Control,{type:"password",name:"confirmPassword",value:W,onChange:te,required:!0,placeholder:"Confirm Password",disabled:r,className:"form-input-modern"})]}),W&&u.jsx("div",{className:"password-match",children:G===W?u.jsxs("span",{className:"match-success",children:[u.jsx("i",{className:"fas fa-check"})," Passwords match!"]}):u.jsxs("span",{className:"match-error",children:[u.jsx("i",{className:"fas fa-times"})," Passwords don't match"]})})]}),u.jsx(_e.Group,{className:"form-check-modern",children:u.jsx(_e.Check,{type:"checkbox",required:!0,id:"terms-check",className:"custom-checkbox",label:u.jsxs("span",{children:["I agree to the ",u.jsx(tn,{to:"/terms",children:"Terms"})," and ",u.jsx(tn,{to:"/privacy",children:"Privacy Policy"})]})})}),u.jsx(ze,{type:"submit",className:"submit-button",disabled:r,children:r?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"loading-spinner"}),"Creating Account..."]}):u.jsxs(u.Fragment,{children:["Create Account",u.jsx("i",{className:"fas fa-arrow-right"})]})})]})]}),u.jsx(Le.Footer,{className:"card-footer-custom",children:u.jsxs("p",{children:["Already have an account?",u.jsx(tn,{to:"/login",className:"login-link",children:"Sign in here"})]})})]}),u.jsxs("div",{className:"security-badges",children:[u.jsxs("div",{className:"security-badge",children:[u.jsx("i",{className:"fas fa-shield-alt"}),u.jsx("span",{children:"SSL Secured"})]}),u.jsxs("div",{className:"security-badge",children:[u.jsx("i",{className:"fas fa-lock"}),u.jsx("span",{children:"Encrypted"})]}),u.jsxs("div",{className:"security-badge",children:[u.jsx("i",{className:"fas fa-user-shield"}),u.jsx("span",{children:"Privacy Protected"})]})]})]})})})]})})]}),u.jsxs($t,{show:s,onHide:re,centered:!0,backdrop:"static",className:"otp-modal",children:[u.jsx($t.Header,{closeButton:!0,className:"modal-header-custom",children:u.jsxs($t.Title,{className:"modal-title-custom",children:[u.jsx("i",{className:"fas fa-envelope-open"}),"Email Verification"]})}),u.jsxs($t.Body,{className:"modal-body-custom",children:[u.jsx("div",{className:"modal-panda",children:u.jsxs("svg",{width:"60",height:"60",viewBox:"0 0 100 100",children:[u.jsx("circle",{cx:"50",cy:"50",r:"35",fill:"#ffffff",stroke:"#000000",strokeWidth:"2"}),u.jsx("circle",{cx:"32",cy:"28",r:"8",fill:"#000000"}),u.jsx("circle",{cx:"68",cy:"28",r:"8",fill:"#000000"}),u.jsx("ellipse",{cx:"40",cy:"42",rx:"6",ry:"8",fill:"#000000"}),u.jsx("ellipse",{cx:"60",cy:"42",rx:"6",ry:"8",fill:"#000000"}),u.jsx("circle",{cx:"40",cy:"42",r:"3",fill:"#ffffff"}),u.jsx("circle",{cx:"60",cy:"42",r:"3",fill:"#ffffff"}),u.jsx("circle",{cx:"40",cy:"42",r:"1.5",fill:"#000000"}),u.jsx("circle",{cx:"60",cy:"42",r:"1.5",fill:"#000000"}),u.jsx("ellipse",{cx:"50",cy:"52",rx:"1.5",ry:"1",fill:"#000000"}),u.jsx("path",{d:"M45 58 Q50 62 55 58",stroke:"#000000",strokeWidth:"1.5",fill:"none"})]})}),u.jsxs("div",{className:"verification-text",children:[u.jsx("h5",{children:"Check Your Email!"}),u.jsxs("p",{children:["We've sent a verification code to ",u.jsx("strong",{children:H})]})]}),u.jsx($n,{variant:"info",className:"otp-alert",children:"Please contact the admin to get your verification code."}),u.jsxs(_e,{onSubmit:de,children:[u.jsx(_e.Control,{type:"text",value:d,onChange:X=>h(X.target.value.replace(/\D/g,"").slice(0,6)),placeholder:"Enter 6-digit OTP",maxLength:"6",required:!0,disabled:f,className:"otp-input"}),u.jsxs("div",{className:"modal-actions",children:[u.jsx(ze,{variant:"outline-secondary",onClick:re,disabled:f,className:"cancel-btn",children:"Cancel"}),u.jsx(ze,{type:"submit",className:"verify-btn",disabled:f||d.length!==6,children:f?"Verifying...":"Verify OTP"})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .register-page {
          min-height: 100vh;
          max-height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
          position: relative;
          overflow: hidden;
        }

        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-shape {
          position: absolute;
          background: linear-gradient(135deg, #000000, #434343);
          border-radius: 50%;
          width: var(--size);
          height: var(--size);
          opacity: 0.03;
          animation: float var(--duration) ease-in-out infinite var(--delay);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-80px) rotate(90deg); }
          50% { transform: translateY(-160px) rotate(180deg); }
          75% { transform: translateY(-80px) rotate(270deg); }
        }

        .register-container {
          padding: 0;
          height: 100vh;
        }

        .register-row {
          height: 100vh;
          margin: 0;
        }

        /* Brand Side */
        .brand-side {
          background: linear-gradient(135deg, #000000 0%, #434343 100%);
          color: white;
          padding: 2rem;
          display: flex;
          align-items: center;
          position: relative;
          overflow-y: auto;
        }

        .brand-side::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          opacity: 0.3;
        }

        .brand-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .brand-logo {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }

        .brand-title {
          font-size: 2rem;
          font-weight: 900;
          margin: 0;
        }

        .brand-message {
          margin-bottom: 2rem;
        }

        .brand-message h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .brand-message p {
          font-size: 1rem;
          opacity: 0.9;
          line-height: 1.5;
        }

        .features-list {
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(8px);
        }

        .feature-icon {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
          flex-shrink: 0;
        }

        .feature-item h4 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          font-weight: 700;
        }

        .feature-item p {
          margin: 0;
          opacity: 0.8;
          font-size: 0.85rem;
        }

        .stats-row {
          display: flex;
          gap: 1.5rem;
        }

        .stat {
          text-align: center;
          flex: 1;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.75rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Form Side */
        .form-side {
          padding: 0;
          display: flex;
          align-items: center;
          height: 100vh;
          overflow-y: auto;
        }

        .form-container {
          width: 100%;
          padding: 1rem;
        }

        .form-content {
          max-width: 450px;
          margin: 0 auto;
        }

        /* Panda Container */
        .panda-container {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .panda-wrapper {
          position: relative;
          display: inline-block;
        }

        .panda-svg {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
          transition: all 0.3s ease;
        }

        .speech-bubble {
          position: absolute;
          top: -15px;
          right: -60px;
          background: #000000;
          color: white;
          padding: 0.5rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }

        .bubble-arrow {
          position: absolute;
          left: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-right: 6px solid #000000;
        }

        /* Register Card */
        .register-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 2px solid #f0f0f0;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .card-body-custom {
          padding: 2rem;
        }

        .form-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .form-title {
          font-size: 2rem;
          font-weight: 900;
          color: #000000;
          margin-bottom: 0.25rem;
        }

        .form-subtitle {
          color: #666666;
          font-size: 1rem;
        }

        /* Form Styling */
        .form-group-modern {
          margin-bottom: 1.25rem;
        }

        .input-container {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #999999;
          font-size: 1rem;
          z-index: 2;
        }

        .form-input-modern {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 2.75rem;
          border: 2px solid #f0f0f0;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 500;
          background: white;
          transition: all 0.3s ease;
          color: #000000;
        }

        .form-input-modern:focus {
          border-color: #000000;
          box-shadow: 0 0 0 0.15rem rgba(0, 0, 0, 0.1);
          outline: none;
        }

        .password-toggle-btn {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #666666;
          padding: 0.5rem;
          border-radius: 6px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .password-toggle-btn:hover {
          background: #f0f0f0;
          color: #000000;
        }

        .password-match {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .match-success {
          color: #28a745;
        }

        .match-error {
          color: #dc3545;
        }

        .form-check-modern {
          margin-bottom: 1.5rem;
        }

        .custom-checkbox .form-check-input {
          border-radius: 4px;
          border: 2px solid #f0f0f0;
          width: 1.1rem;
          height: 1.1rem;
        }

        .custom-checkbox .form-check-input:checked {
          background-color: #000000;
          border-color: #000000;
        }

        .custom-checkbox .form-check-label {
          margin-left: 0.5rem;
          color: #666666;
          font-size: 0.9rem;
        }

        .custom-checkbox .form-check-label a {
          color: #000000;
          font-weight: 600;
          text-decoration: none;
        }

        .custom-checkbox .form-check-label a:hover {
          text-decoration: underline;
        }

        .submit-button {
          width: 100%;
          background: #000000;
          color: white;
          border: none;
          padding: 0.875rem 1.5rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          margin-bottom: 0.75rem;
        }

        .submit-button:hover {
          background: #434343;
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .card-footer-custom {
          background: #f8f8f8;
          border: none;
          padding: 1.25rem 2rem;
          text-align: center;
        }

        .card-footer-custom p {
          margin: 0;
          color: #666666;
          font-size: 0.9rem;
        }

        .login-link {
          color: #000000;
          font-weight: 700;
          text-decoration: none;
          margin-left: 0.25rem;
        }

        .login-link:hover {
          text-decoration: underline;
        }

        .security-badges {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .security-badge {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: #666666;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .security-badge i {
          color: #28a745;
          font-size: 0.9rem;
        }

        /* OTP Modal */
        .otp-modal .modal-content {
          border-radius: 16px;
          border: none;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .modal-header-custom {
          background: linear-gradient(135deg, #f8f8f8, #ffffff);
          border: none;
          padding: 1.5rem;
        }

        .modal-title-custom {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          font-weight: 800;
          color: #000000;
        }

        .modal-body-custom {
          padding: 1.5rem;
          text-align: center;
        }

        .modal-panda {
          margin-bottom: 1.5rem;
        }

        .verification-text h5 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 0.75rem;
        }

        .verification-text p {
          color: #666666;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .otp-alert {
          background: linear-gradient(135deg, #fff3cd, #ffeaa7);
          border: 1px solid #ffeaa7;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
        }

        .otp-input {
          text-align: center;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 2px;
          padding: 0.875rem;
          border: 2px solid #f0f0f0;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }

        .otp-input:focus {
          border-color: #000000;
          box-shadow: 0 0 0 0.15rem rgba(0, 0, 0, 0.1);
          outline: none;
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
        }

        .cancel-btn {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .verify-btn {
          flex: 2;
          background: #000000;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .verify-btn:hover {
          background: #434343;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .register-row {
            height: auto;
            min-height: 100vh;
          }

          .brand-side {
            display: none;
          }
          
          .form-side {
            height: auto;
            min-height: 100vh;
            padding: 1rem 0;
          }

          .speech-bubble {
            position: relative;
            top: 0.75rem;
            right: 0;
            margin: 0 auto;
            display: inline-block;
          }

          .bubble-arrow {
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #000000;
            border-top: none;
          }
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 0.75rem;
          }

          .card-body-custom {
            padding: 1.5rem;
          }

          .form-title {
            font-size: 1.75rem;
          }

          .security-badges {
            gap: 1rem;
          }

          .security-badge {
            font-size: 0.75rem;
          }

          .modal-actions {
            flex-direction: column;
          }

          .panda-svg {
            width: 80px;
            height: 80px;
          }

          .speech-bubble {
            font-size: 0.7rem;
            padding: 0.375rem 0.5rem;
          }
        }

        @media (max-width: 576px) {
          .form-container {
            padding: 0.5rem;
          }

          .card-body-custom {
            padding: 1.25rem;
          }

          .security-badges {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }

          .panda-svg {
            width: 70px;
            height: 70px;
          }
        }

        /* Scroll optimizations */
        .form-side {
          -webkit-overflow-scrolling: touch;
        }

        .form-side::-webkit-scrollbar {
          width: 4px;
        }

        .form-side::-webkit-scrollbar-track {
          background: transparent;
        }

        .form-side::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 2px;
        }
      `})]})},_A=()=>{const[e,n]=v.useState([]),[r,o]=v.useState([]),[s,c]=v.useState(!0),[d,h]=v.useState(""),[f,p]=v.useState("all"),[g,x]=v.useState(1),[b,S]=v.useState(1),[w,R]=v.useState({}),[E,N]=v.useState({}),[_,O]=v.useState({}),{user:M}=$r(),D=[{value:"all",label:"All Categories",icon:"🎯"},{value:"themes",label:"WordPress Themes",icon:"🎨"},{value:"plugins",label:"WordPress Plugins",icon:"⚡"},{value:"templates",label:"HTML Templates",icon:"📄"},{value:"graphics",label:"Graphics & UI",icon:"🎭"}];v.useEffect(()=>{T()},[g,f]),v.useEffect(()=>{k()},[e,d]);const T=async()=>{try{c(!0);const re={page:g,limit:20};f!=="all"&&(re.category=f);const U=await mt.get("/products",{params:re});U.data.success?(n(U.data.products||[]),R(U.data.pagination||{}),S(U.data.pagination?.totalPages||1),N({})):(n([]),R({}),S(1))}catch(re){console.error("Error loading products:",re),he.error("Failed to load products"),n([])}finally{c(!1)}},k=()=>{if(!d.trim()){o(e);return}const re=e.filter(U=>U.title?.toLowerCase().includes(d.toLowerCase())||U.category?.toLowerCase().includes(d.toLowerCase()));o(re)},L=async re=>{try{if(!M){he.error("🔒 Please login to download products");return}O(X=>({...X,[re._id]:!0}));const U=await mt.post(`/download/${re._id}`);U.data.success&&(U.data.isRedownload?he.info(U.data.message):he.success(U.data.message),U.data.downloadUrl&&window.open(U.data.downloadUrl,"_blank"),n(X=>X.map(J=>J._id===re._id?{...J,downloads:(J.downloads||0)+1}:J)))}catch(U){if(console.error("Download error:",U),U.response?.status===429){const X=U.response.data;if(X.limits){const{daily:J,monthly:me}=X.limits;J.remaining<=0?he.error(`📅 Daily limit reached! Used ${J.used}/${J.limit}. Try tomorrow!`):me.remaining<=0&&he.error(`📊 Monthly limit reached! Used ${me.used}/${me.limit}.`)}else he.error("⏱️ Download limit reached. Please wait and try again.")}else U.response?.status===401?he.error("🔒 Please login to download products"):U.response?.status===403?he.error("📧 Please verify your email to download products"):U.response?.status===404?he.error("❌ Product not found"):he.error("❌ Download failed. Please try again.")}finally{O(U=>({...U,[re._id]:!1}))}},H=re=>{N(U=>({...U,[re]:!0}))},G=re=>{N(U=>{const X={...U};return delete X[re],X})},W=()=>"64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmOGY5ZmEiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMDAiIHI9IjMwIiBmaWxsPSIjZGVlMmU2Ii8+PHBhdGggZD0ibTE4MCA4MCAyMC0yMCAxMCAxMCAyMC0yMCAxMCAxMHY0MEgxODBWODBaIiBmaWxsPSIjOWNhM2FmIi8+PHRleHQgeD0iMjAwIiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2Yjc0ODAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWkiIGZvbnQtc2l6ZT0iMTQiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==",te=re=>{x(re),window.scrollTo({top:0,behavior:"smooth"})},le=()=>{h(""),p("all"),x(1)};if(s)return u.jsx("div",{className:"products-loading",children:u.jsx(At,{children:u.jsxs("div",{className:"loading-container",children:[u.jsx("div",{className:"loading-spinner",children:u.jsx("div",{className:"spinner"})}),u.jsx("h4",{children:"Loading Premium Products..."}),u.jsx("p",{children:"Discovering amazing WordPress assets for you"})]})})});const de=d?r:e;return u.jsxs("div",{className:"products-page",children:[u.jsx("section",{className:"products-hero",children:u.jsx(At,{children:u.jsxs("div",{className:"hero-content",children:[u.jsxs("h1",{className:"hero-title",children:["Premium ",u.jsx("span",{className:"highlight",children:"WordPress"})," Collection"]}),u.jsx("p",{className:"hero-subtitle",children:"Discover hand-picked themes, plugins, and templates from top developers"}),M&&u.jsxs("div",{className:"hero-stats",children:[u.jsxs(ra,{bg:"light",text:"dark",className:"me-2 px-3 py-2",children:[u.jsx("i",{className:"fas fa-download me-1"}),"15 downloads per day"]}),u.jsxs(ra,{bg:"primary",className:"px-3 py-2",children:[u.jsx("i",{className:"fas fa-calendar me-1"}),"350 downloads per month"]})]})]})})}),u.jsx("section",{className:"search-section",children:u.jsx(At,{children:u.jsxs("div",{className:"search-container",children:[u.jsx("div",{className:"search-bar",children:u.jsxs("div",{className:"search-input-group",children:[u.jsx("div",{className:"search-icon",children:u.jsx("i",{className:"fas fa-search"})}),u.jsx(_e.Control,{type:"text",placeholder:"Search for themes, plugins, or templates...",value:d,onChange:re=>h(re.target.value),className:"search-input"}),d&&u.jsx("button",{className:"clear-btn",onClick:()=>h(""),children:u.jsx("i",{className:"fas fa-times"})})]})}),u.jsx("div",{className:"category-filter",children:u.jsx("div",{className:"category-tabs",children:D.map(re=>u.jsxs("button",{className:`category-tab ${f===re.value?"active":""}`,onClick:()=>{p(re.value),x(1)},children:[u.jsx("span",{className:"tab-icon",children:re.icon}),u.jsx("span",{className:"tab-label",children:re.label})]},re.value))})}),u.jsxs("div",{className:"results-info",children:[u.jsxs("div",{className:"results-text",children:[u.jsx("strong",{children:de.length})," products found",d&&u.jsxs("span",{children:[' for "',u.jsx("em",{children:d}),'"']}),f!=="all"&&u.jsx(ra,{bg:"primary",className:"ms-2",children:D.find(re=>re.value===f)?.label})]}),(d||f!=="all")&&u.jsxs(ze,{variant:"outline-secondary",size:"sm",onClick:le,className:"reset-btn",children:[u.jsx("i",{className:"fas fa-refresh me-1"}),"Reset"]})]})]})})}),u.jsx("section",{className:"products-section",children:u.jsx(At,{children:de.length>0?u.jsxs(u.Fragment,{children:[u.jsx(Lt,{className:"products-grid",children:de.map((re,U)=>u.jsx(Ke,{xl:3,lg:4,md:6,className:"mb-4",children:u.jsxs(Le,{className:"product-card",style:{"--delay":`${U*.05}s`},children:[u.jsxs("div",{className:"product-image-container",children:[u.jsx("img",{src:E[re._id]?W():re.imageUrl||re.image||W(),alt:re.title||"Product Image",className:"product-image",onError:()=>H(re._id),onLoad:()=>G(re._id),loading:"lazy"}),u.jsx("div",{className:"image-overlay",children:u.jsx("div",{className:"overlay-content",children:u.jsx(ze,{variant:"light",className:"overlay-btn preview-btn",onClick:()=>window.open(re.previewUrl||"#","_blank"),title:"Preview",children:u.jsx("i",{className:"fas fa-eye"})})})}),u.jsx("div",{className:"category-badge-overlay",children:u.jsx(ra,{className:`category-badge ${re.category||"default"}`,children:re.category||"Product"})})]}),u.jsxs(Le.Body,{className:"product-body",children:[u.jsx("h5",{className:"product-title",title:re.title,children:re.title&&re.title.length>50?`${re.title.substring(0,50)}...`:re.title||"Untitled Product"}),u.jsxs("div",{className:"product-actions",children:[u.jsxs(ze,{variant:"outline-primary",className:"action-btn preview-btn-main",onClick:()=>window.open(re.previewUrl||"#","_blank"),children:[u.jsx("i",{className:"fas fa-external-link-alt me-2"}),"Preview"]}),u.jsx(ze,{variant:"primary",className:"action-btn download-btn",onClick:()=>L(re),disabled:_[re._id],children:_[re._id]?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Downloading..."]}):u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-download me-2"}),"Download"]})})]}),!M&&u.jsxs("div",{className:"login-notice",children:[u.jsx("i",{className:"fas fa-lock me-1"}),"Login required for download"]})]})]})},re._id))}),!d&&b>1&&u.jsxs("div",{className:"pagination-container",children:[u.jsxs("div",{className:"pagination-info",children:["Showing ",(g-1)*20+1," to ",Math.min(g*20,w.totalProducts||0)," of ",w.totalProducts||0," products"]}),u.jsxs("div",{className:"pagination-controls",children:[u.jsxs(ze,{variant:"outline-primary",onClick:()=>te(g-1),disabled:g===1,className:"pagination-btn",children:[u.jsx("i",{className:"fas fa-chevron-left me-1"}),"Previous"]}),u.jsx("div",{className:"page-numbers",children:[...Array(b)].map((re,U)=>{const X=U+1;return X===1||X===b||X>=g-2&&X<=g+2?u.jsx("button",{className:`page-number ${g===X?"active":""}`,onClick:()=>te(X),children:X},X):X===g-3||X===g+3?u.jsx("span",{className:"page-dots",children:"..."},X):null})}),u.jsxs(ze,{variant:"outline-primary",onClick:()=>te(g+1),disabled:g===b,className:"pagination-btn",children:["Next",u.jsx("i",{className:"fas fa-chevron-right ms-1"})]})]})]})]}):u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:u.jsx("i",{className:"fas fa-search"})}),u.jsx("h3",{children:"No products found"}),u.jsx("p",{children:d||f!=="all"?"Try adjusting your search or browse all categories":"No products available at the moment"}),(d||f!=="all")&&u.jsxs(ze,{variant:"primary",onClick:le,children:[u.jsx("i",{className:"fas fa-refresh me-2"}),"Show All Products"]})]})})}),u.jsx("style",{jsx:!0,children:`
        .products-page {
          background: #f8f9fa;
          min-height: 100vh;
        }

        /* Loading */
        .products-loading {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .loading-container {
          text-align: center;
        }

        .loading-spinner {
          margin-bottom: 2rem;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Hero Section */
        .products-hero {
          background: linear-gradient(135deg, #000000 0%, #434343 100%);
          color: white;
          padding: 5rem 0 3rem;
          position: relative;
          overflow: hidden;
        }

        .products-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .highlight {
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .hero-stats {
          margin-top: 2rem;
        }

        /* Search Section */
        .search-section {
          background: white;
          padding: 3rem 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .search-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .search-bar {
          margin-bottom: 2.5rem;
        }

        .search-input-group {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #6c757d;
          z-index: 2;
        }

        .search-input {
          padding: 16px 24px 16px 55px;
          font-size: 1.1rem;
          border: 2px solid #e9ecef;
          border-radius: 50px;
          background: #f8f9fa;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: #000000;
          background: white;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
        }

        .clear-btn {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #6c757d;
          padding: 8px;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .clear-btn:hover {
          background: #f8f9fa;
          color: #000000;
        }

        /* Category Filter */
        .category-filter {
          margin-bottom: 2rem;
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .category-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border: 2px solid #e9ecef;
          border-radius: 30px;
          background: white;
          color: #495057;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-tab:hover {
          border-color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .category-tab.active {
          background: #000000;
          color: white;
          border-color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        /* Results Info */
        .results-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          border-top: 1px solid #e9ecef;
        }

        .results-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #495057;
        }

        .reset-btn {
          border-radius: 20px;
          font-weight: 600;
        }

        /* Products Section */
        .products-section {
          padding: 4rem 0 5rem;
        }

        .products-grid {
          margin-bottom: 3rem;
        }

        .product-card {
          border: none;
          border-radius: 20px;
          overflow: hidden;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          height: 100%;
          animation: fadeInUp 0.6s ease-out forwards var(--delay);
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .product-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .product-image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
          background: #f8f9fa;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .product-card:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          gap: 12px;
        }

        .overlay-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          border: none;
        }

        .overlay-btn:hover {
          transform: scale(1.1);
        }

        .category-badge-overlay {
          position: absolute;
          top: 16px;
          left: 16px;
        }

        .category-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 20px;
          text-transform: capitalize;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .category-badge.themes {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge.plugins {
          background: linear-gradient(135deg, #f093fb, #f5576c);
          color: white;
        }

        .category-badge.templates {
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          color: white;
        }

        .category-badge.graphics {
          background: linear-gradient(135deg, #43e97b, #38f9d7);
          color: #000000;
        }

        .category-badge.default {
          background: #6c757d;
          color: white;
        }

        .product-body {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .product-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1.5rem;
          line-height: 1.4;
          min-height: 60px;
          display: flex;
          align-items: center;
        }

        .product-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 1rem;
        }

        .action-btn {
          flex: 1;
          border-radius: 12px;
          font-weight: 600;
          padding: 12px 16px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .preview-btn-main {
          border-color: #0066cc;
          color: #0066cc;
        }

        .preview-btn-main:hover {
          background: #0066cc;
          border-color: #0066cc;
          color: white;
          transform: translateY(-2px);
        }

        .download-btn {
          background: linear-gradient(135deg, #000000, #434343);
          border: none;
        }

        .download-btn:hover {
          background: linear-gradient(135deg, #434343, #000000);
          transform: translateY(-2px);
        }

        .download-btn:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }

        .login-notice {
          text-align: center;
          padding: 12px;
          background: linear-gradient(135deg, #fff3cd, #ffeaa7);
          color: #856404;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid #ffeaa7;
        }

        /* Pagination */
        .pagination-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          margin-top: 4rem;
          padding: 3rem 2rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .pagination-info {
          color: #6c757d;
          font-weight: 500;
          text-align: center;
        }

        .pagination-controls {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pagination-btn {
          border-radius: 12px;
          font-weight: 600;
          padding: 12px 20px;
          transition: all 0.3s ease;
        }

        .pagination-btn:hover {
          transform: translateY(-2px);
        }

        .page-numbers {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .page-number {
          min-width: 45px;
          height: 45px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          background: white;
          color: #495057;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .page-number:hover {
          border-color: #000000;
          background: #f8f9fa;
          transform: translateY(-2px);
        }

        .page-number.active {
          background: #000000;
          color: white;
          border-color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .page-dots {
          padding: 0 12px;
          color: #6c757d;
          font-weight: bold;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 6rem 2rem;
          color: #6c757d;
        }

        .empty-icon {
          font-size: 6rem;
          color: #dee2e6;
          margin-bottom: 2rem;
        }

        .empty-state h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #495057;
        }

        .empty-state p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .category-tabs {
            justify-content: center;
          }

          .results-info {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .pagination-controls {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .products-hero {
            padding: 3rem 0 2rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .search-section {
            padding: 2rem 0;
          }

          .search-input {
            font-size: 1rem;
            padding: 14px 20px 14px 50px;
          }

          .category-tabs {
            gap: 8px;
          }

          .category-tab {
            padding: 10px 18px;
            font-size: 0.9rem;
          }

          .product-image-container {
            height: 200px;
          }

          .product-body {
            padding: 1.5rem 1rem;
          }

          .product-title {
            font-size: 1.1rem;
            min-height: 50px;
          }

          .action-btn {
            padding: 10px 12px;
            font-size: 0.85rem;
          }

          .pagination-container {
            padding: 2rem 1rem;
          }

          .page-number {
            min-width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.75rem;
          }

          .category-tabs {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }

          .category-tab {
            justify-content: center;
          }

          .product-actions {
            flex-direction: column;
          }

          .page-numbers {
            justify-content: center;
          }
        }
      `})]})},pn={mainContainer:{background:"linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",minHeight:"100vh",paddingTop:"20px",color:"#ffffff"},card:{backgroundColor:"#ffffff",color:"#1a1a1a",border:"none",borderRadius:"15px",boxShadow:"0 10px 30px rgba(0,0,0,0.3)"},darkCard:{backgroundColor:"#1a1a1a",color:"#ffffff",border:"1px solid #333",borderRadius:"15px",boxShadow:"0 10px 30px rgba(255,255,255,0.1)"},headerCard:{background:"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",color:"#1a1a1a",border:"none",borderRadius:"20px",boxShadow:"0 15px 35px rgba(0,0,0,0.2)"},blackButton:{backgroundColor:"#1a1a1a",borderColor:"#1a1a1a",color:"#ffffff",borderRadius:"25px",padding:"10px 25px",fontWeight:"600"}},OA=()=>{const{user:e}=$r(),[n,r]=v.useState([]),[o,s]=v.useState(null),[c,d]=v.useState(!0),[h,f]=v.useState("overview"),[p,g]=v.useState(!1),[x,b]=v.useState(null),S=v.useCallback(async()=>{if(e)try{d(!0),b(null),console.log("🔄 Fetching dashboard data..."),await new Promise(L=>setTimeout(L,500));const[T,k]=await Promise.allSettled([mt.get("/download/status"),mt.get("/download/history")]);T.status==="fulfilled"&&T.value.data.success?(s(T.value.data.status),console.log("✅ Status loaded")):console.warn("⚠️ Status fetch failed"),k.status==="fulfilled"&&k.value.data.success?(r(k.value.data.downloads||[]),console.log("✅ History loaded:",k.value.data.downloads?.length||0),T.status==="rejected"&&k.value.data.downloadLimits&&s(k.value.data.downloadLimits)):(console.warn("⚠️ History fetch failed"),r([])),T.status==="rejected"&&(k.status==="rejected"||!k.value.data.downloadLimits)&&s({subscription:"free",daily:{used:0,limit:15,remaining:15},monthly:{used:0,limit:350,remaining:350},subscriptionStatus:{active:!1,daysLeft:0},canDownload:!0,total:0})}catch(T){console.error("❌ Dashboard error:",T),b("Failed to load dashboard data"),s({subscription:"free",daily:{used:0,limit:15,remaining:15},monthly:{used:0,limit:350,remaining:350},subscriptionStatus:{active:!1,daysLeft:0},canDownload:!0,total:0})}finally{d(!1)}},[e]);v.useEffect(()=>{e&&S()},[e]);const w=v.useCallback(()=>{e&&S()},[e,S]),R=async T=>{try{const k=await mt.post(`/download/${T}`);k.data.success&&(he.success(k.data.message),k.data.downloadUrl&&window.open(k.data.downloadUrl,"_blank"),setTimeout(()=>{w()},1e3))}catch(k){if(k.response?.status===429){const L=k.response.data;if(L.limits){const{daily:H,monthly:G}=L.limits;H.remaining<=0?he.error(`📅 Daily limit reached! Used ${H.used}/${H.limit}. Try tomorrow!`):G.remaining<=0&&he.error(`📊 Monthly limit reached! Used ${G.used}/${G.limit}.`)}}else he.error("Download failed")}},E=o?.subscription||"free",N=o?.subscriptionStatus||{active:!1},_=o?.daily||{used:0,limit:15,remaining:15},O=o?.monthly||{used:0,limit:350,remaining:350},M=o?.canDownload!==!1,D=o?.total||n.length;return c?u.jsx("div",{style:pn.mainContainer,children:u.jsx(At,{className:"mt-5",children:u.jsx("div",{className:"text-center",children:u.jsxs("div",{style:{backgroundColor:"#ffffff",borderRadius:"50px",padding:"40px",display:"inline-block",boxShadow:"0 20px 40px rgba(0,0,0,0.3)"},children:[u.jsx(ad,{animation:"border",variant:"dark",size:"lg"}),u.jsx("h4",{className:"mt-3",style:{color:"#1a1a1a"},children:"Loading your dashboard..."})]})})})}):u.jsxs("div",{style:pn.mainContainer,children:[u.jsxs(At,{className:"mt-4",children:[u.jsx("div",{className:"mb-5",children:u.jsx(Le,{style:pn.headerCard,children:u.jsx(Le.Body,{className:"p-5",children:u.jsxs(Lt,{className:"align-items-center",children:[u.jsxs(Ke,{lg:8,children:[u.jsxs("h1",{className:"display-6 fw-bold mb-2",children:["Welcome back, ",e?.name||"User","! 👋"]}),u.jsx("div",{className:"d-flex gap-2 flex-wrap",children:u.jsxs(ra,{bg:N.active?"dark":"secondary",className:"px-3 py-2",style:{fontSize:"0.9rem",borderRadius:"20px",fontWeight:"600"},children:[u.jsx("i",{className:"fas fa-crown me-2"}),E.toUpperCase()," MEMBER"]})})]}),u.jsx(Ke,{lg:4,className:"text-lg-end",children:u.jsxs(Lt,{children:[u.jsx(Ke,{md:6,className:"mb-3",children:u.jsx(Le,{style:{backgroundColor:"#000",color:"#fff",borderRadius:"15px"},children:u.jsxs(Le.Body,{className:"text-center p-3",children:[u.jsxs("h5",{className:"mb-1",children:[_.used,"/",_.limit]}),u.jsx("p",{className:"mb-2 opacity-75",style:{fontSize:"0.8rem"},children:"Daily"}),u.jsx(mo,{now:_.used/_.limit*100,variant:_.used>=_.limit?"danger":"light",style:{height:"4px",borderRadius:"10px"}}),u.jsxs("small",{className:"mt-1 d-block opacity-75",style:{fontSize:"0.7rem"},children:[_.remaining," left"]})]})})}),u.jsx(Ke,{md:6,className:"mb-3",children:u.jsx(Le,{style:{backgroundColor:"#333",color:"#fff",borderRadius:"15px"},children:u.jsxs(Le.Body,{className:"text-center p-3",children:[u.jsxs("h5",{className:"mb-1",children:[O.used,"/",O.limit]}),u.jsx("p",{className:"mb-2 opacity-75",style:{fontSize:"0.8rem"},children:"Monthly"}),u.jsx(mo,{now:O.used/O.limit*100,variant:O.used>=O.limit?"danger":"light",style:{height:"4px",borderRadius:"10px"}}),u.jsxs("small",{className:"mt-1 d-block opacity-75",style:{fontSize:"0.7rem"},children:[O.remaining," left"]})]})})})]})})]})})})}),u.jsxs("div",{className:"mb-4",children:[_.used>=_.limit&&u.jsxs($n,{variant:"danger",style:{borderRadius:"15px"},children:[u.jsx($n.Heading,{children:"Daily Limit Reached"}),u.jsxs("p",{children:["You've used all ",_.limit," daily downloads. Come back tomorrow!"]})]}),O.used>=O.limit&&_.used<_.limit&&u.jsxs($n,{variant:"danger",style:{borderRadius:"15px"},children:[u.jsx($n.Heading,{children:"Monthly Limit Reached"}),u.jsxs("p",{children:["You've used all ",O.limit," monthly downloads."]})]}),_.used>=_.limit*.8&&_.used<_.limit&&u.jsxs($n,{variant:"warning",style:{borderRadius:"15px"},children:[u.jsx($n.Heading,{children:"Approaching Daily Limit"}),u.jsxs("p",{children:["You've used ",_.used," of ",_.limit," daily downloads. Only ",_.remaining," left today."]})]})]}),u.jsxs(Le,{style:pn.card,children:[u.jsx(Le.Header,{className:"border-0",children:u.jsx(Yn,{variant:"pills",activeKey:h,onSelect:f,children:["overview","downloads","subscription"].map(T=>u.jsx(Yn.Item,{children:u.jsxs(Yn.Link,{eventKey:T,style:{backgroundColor:h===T?"#1a1a1a":"transparent",color:h===T?"#ffffff":"#1a1a1a",borderRadius:"25px",margin:"0 5px",fontWeight:"600"},children:[u.jsx("i",{className:`fas fa-${T==="overview"?"chart-pie":T==="downloads"?"download":"crown"} me-2`}),T.charAt(0).toUpperCase()+T.slice(1),T==="downloads"&&` (${n.length})`]})},T))})}),u.jsxs(Le.Body,{style:{minHeight:"500px"},children:[h==="overview"&&u.jsxs("div",{children:[u.jsx("h4",{className:"mb-4",children:"Your Download Statistics"}),u.jsx(Lt,{className:"mb-4",children:[{title:"Daily Downloads",value:_.used,subtitle:`out of ${_.limit}`,color:_.used>=_.limit?"#dc3545":"#1a1a1a"},{title:"Daily Remaining",value:_.remaining,subtitle:"downloads left today",color:_.remaining<=3?"#ffc107":"#28a745"},{title:"Monthly Downloads",value:O.used,subtitle:`out of ${O.limit}`,color:O.used>=O.limit?"#dc3545":"#007bff"},{title:"Monthly Remaining",value:O.remaining,subtitle:"downloads left this month",color:O.remaining<=50?"#ffc107":"#28a745"},{title:"Total Downloads",value:D,subtitle:"all time",color:"#6c757d"}].map((T,k)=>u.jsx(Ke,{lg:2,md:4,sm:6,className:"mb-4",children:u.jsx(Le,{style:{backgroundColor:T.color,color:"#ffffff",borderRadius:"15px",border:"none"},className:"h-100",children:u.jsxs(Le.Body,{className:"text-center p-3",children:[u.jsx("h3",{className:"mb-2",style:{fontWeight:"bold"},children:T.value}),u.jsx("p",{className:"mb-1 fw-semibold",style:{fontSize:"0.9rem"},children:T.title}),u.jsx("small",{className:"opacity-75",style:{fontSize:"0.8rem"},children:T.subtitle})]})})},k))}),u.jsxs(Lt,{children:[u.jsx(Ke,{md:6,children:u.jsx(Le,{style:pn.darkCard,children:u.jsxs(Le.Body,{className:"p-4",children:[u.jsx("h5",{className:"mb-3",children:"Daily Usage"}),u.jsxs("div",{className:"d-flex justify-content-between mb-3",children:[u.jsxs("span",{children:["Used: ",u.jsx("strong",{children:_.used})]}),u.jsxs("span",{children:["Left: ",u.jsx("strong",{children:_.remaining})]})]}),u.jsx(mo,{now:_.used/_.limit*100,variant:_.used>=_.limit*.9?"danger":"light",style:{height:"15px",borderRadius:"10px"}}),u.jsxs("small",{className:"mt-2 d-block opacity-75",children:["Daily Limit: ",_.limit," downloads"]})]})})}),u.jsx(Ke,{md:6,children:u.jsx(Le,{style:pn.darkCard,children:u.jsxs(Le.Body,{className:"p-4",children:[u.jsx("h5",{className:"mb-3",children:"Monthly Usage"}),u.jsxs("div",{className:"d-flex justify-content-between mb-3",children:[u.jsxs("span",{children:["Used: ",u.jsx("strong",{children:O.used})]}),u.jsxs("span",{children:["Left: ",u.jsx("strong",{children:O.remaining})]})]}),u.jsx(mo,{now:O.used/O.limit*100,variant:O.used>=O.limit*.9?"danger":"light",style:{height:"15px",borderRadius:"10px"}}),u.jsxs("small",{className:"mt-2 d-block opacity-75",children:["Monthly Limit: ",O.limit," downloads"]})]})})})]})]}),h==="downloads"&&u.jsxs("div",{children:[u.jsx("h4",{className:"mb-4",children:"Your Download History"}),n.length>0?u.jsx("div",{className:"table-responsive",children:u.jsxs(xp,{hover:!0,children:[u.jsx("thead",{style:{backgroundColor:"#1a1a1a",color:"#ffffff"},children:u.jsxs("tr",{children:[u.jsx("th",{style:{padding:"15px"},children:"Product"}),u.jsx("th",{style:{padding:"15px"},children:"Category"}),u.jsx("th",{style:{padding:"15px"},children:"Downloaded"}),u.jsx("th",{style:{padding:"15px"},children:"Actions"})]})}),u.jsx("tbody",{children:n.map((T,k)=>u.jsxs("tr",{children:[u.jsx("td",{style:{padding:"20px"},children:u.jsx("h6",{className:"mb-1 fw-bold",children:T.productId?.title||"Product Unavailable"})}),u.jsx("td",{style:{padding:"20px"},children:u.jsx(ra,{bg:"primary",style:{borderRadius:"20px",padding:"8px 15px"},children:T.productId?.category||"Unknown"})}),u.jsx("td",{style:{padding:"20px"},children:u.jsxs("div",{children:[u.jsx("div",{className:"fw-bold",children:new Date(T.downloadDate).toLocaleDateString()}),u.jsx("small",{className:"text-muted",children:new Date(T.downloadDate).toLocaleTimeString()})]})}),u.jsx("td",{style:{padding:"20px"},children:u.jsx(ze,{size:"sm",variant:M&&_.remaining>0&&O.remaining>0?"outline-success":"outline-danger",style:{borderRadius:"25px"},onClick:()=>R(T.productId?._id),disabled:!M||_.remaining<=0||O.remaining<=0,title:M?"Download again":"Download limit reached",children:u.jsx("i",{className:"fas fa-download"})})})]},T._id))})]})}):u.jsxs("div",{className:"text-center py-5",children:[u.jsx("h4",{className:"mb-3",children:"No downloads yet"}),u.jsx("p",{className:"text-muted mb-4",children:"Start exploring our collection!"}),u.jsxs(ze,{style:pn.blackButton,href:"/products",children:[u.jsx("i",{className:"fas fa-search me-2"}),"Browse Products"]})]})]}),h==="subscription"&&u.jsxs("div",{children:[u.jsx("h4",{className:"mb-4",children:"Your Subscription"}),u.jsx(Le,{style:pn.darkCard,children:u.jsxs(Le.Body,{children:[u.jsxs("div",{className:"d-flex align-items-center mb-4",children:[u.jsx("div",{style:{width:"80px",height:"80px",backgroundColor:E==="premium"?"#ffc107":"#6c757d",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"20px"},children:u.jsx("i",{className:`fas fa-${E==="premium"?"crown":"user"} text-white`,style:{fontSize:"2rem"}})}),u.jsxs("div",{children:[u.jsxs("h3",{className:"mb-1 text-capitalize",children:[E," Plan"]}),u.jsx("p",{className:"text-muted mb-0",children:E==="premium"?"500 downloads per month":"15 daily, 350 monthly downloads"})]})]}),E==="free"&&u.jsxs($n,{variant:"light",style:{borderRadius:"15px"},children:[u.jsx("h6",{children:"Free Plan Features:"}),u.jsxs("ul",{className:"mb-3",children:[u.jsx("li",{children:"15 downloads per day"}),u.jsx("li",{children:"350 downloads per month"}),u.jsx("li",{children:"Access to free products"}),u.jsx("li",{children:"Basic support"})]}),u.jsx(ze,{style:pn.blackButton,onClick:()=>g(!0),children:"Upgrade to Premium"})]})]})})]})]})]}),u.jsx("div",{className:"text-center mt-4 mb-4",children:u.jsxs(ze,{variant:"outline-light",onClick:w,style:{borderRadius:"25px",padding:"12px 30px"},children:[u.jsx("i",{className:"fas fa-sync-alt me-2"}),"Refresh Dashboard"]})})]}),u.jsxs($t,{show:p,onHide:()=>g(!1),centered:!0,children:[u.jsx($t.Header,{closeButton:!0,style:{backgroundColor:"#1a1a1a",color:"#ffffff"},children:u.jsx($t.Title,{children:"Upgrade to Premium"})}),u.jsxs($t.Body,{children:[u.jsxs("div",{className:"text-center mb-4",children:[u.jsx("h3",{children:"Unlock More Downloads!"}),u.jsx("p",{className:"text-muted",children:"Get 500 downloads per month with premium"})]}),u.jsxs(Lt,{children:[u.jsx(Ke,{md:6,children:u.jsxs("div",{className:"p-3 text-center",style:{backgroundColor:"#f8f9fa",borderRadius:"10px"},children:[u.jsx("h5",{children:"Free Plan"}),u.jsxs("ul",{className:"text-start",children:[u.jsx("li",{children:"15 downloads/day"}),u.jsx("li",{children:"350 downloads/month"})]}),u.jsx("h4",{children:"$0/month"})]})}),u.jsx(Ke,{md:6,children:u.jsxs("div",{className:"p-3 text-center",style:{backgroundColor:"#1a1a1a",color:"#fff",borderRadius:"10px"},children:[u.jsx("h5",{className:"text-warning",children:"Premium Plan"}),u.jsxs("ul",{className:"text-start",children:[u.jsx("li",{children:"15 downloads/day"}),u.jsx("li",{children:u.jsx("strong",{children:"500 downloads/month"})}),u.jsx("li",{children:"Priority support"})]}),u.jsx("h4",{className:"text-warning",children:"$9.99/month"})]})})]})]}),u.jsxs($t.Footer,{children:[u.jsx(ze,{variant:"outline-secondary",onClick:()=>g(!1),children:"Maybe Later"}),u.jsx(ze,{style:pn.blackButton,href:"mailto:admin@example.com",children:"Contact Admin"})]})]})]})},DA=()=>{const[e,n]=v.useState({username:"",password:""}),[r,o]=v.useState(!1),[s,c]=v.useState(!1),d=Ur(),{username:h,password:f}=e;v.useEffect(()=>{localStorage.getItem("adminToken")&&d("/admin")},[d]);const p=x=>{n({...e,[x.target.name]:x.target.value})},g=async x=>{if(x.preventDefault(),h!=="admin"||f!=="admin123"){he.error("Invalid admin credentials");return}o(!0);try{const b="admin_"+Date.now(),S={username:"admin",name:"System Administrator",role:"admin",loginTime:new Date().toISOString()};localStorage.setItem("adminToken",b),localStorage.setItem("adminData",JSON.stringify(S)),he.success("Admin login successful!"),d("/admin")}catch(b){console.error("❌ Admin login error:",b),he.error("Login failed")}finally{o(!1)}};return u.jsx("div",{style:{background:"linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",minHeight:"100vh",padding:"20px 0"},children:u.jsx(At,{children:u.jsx(Lt,{className:"justify-content-center align-items-center",style:{minHeight:"100vh"},children:u.jsx(Ke,{md:6,lg:5,xl:4,children:u.jsxs(Le,{className:"shadow-lg",style:{borderRadius:"20px",border:"none"},children:[u.jsxs(Le.Header,{className:"text-center text-white",style:{background:"linear-gradient(135deg, #dc3545, #c82333)",padding:"30px 20px",borderRadius:"20px 20px 0 0"},children:[u.jsx("div",{style:{fontSize:"3rem",marginBottom:"15px"},children:u.jsx("i",{className:"fas fa-shield-alt"})}),u.jsx("h2",{className:"mb-0",children:"Admin Portal"}),u.jsx("p",{className:"mb-0",children:"Secure Administrative Access"})]}),u.jsxs(Le.Body,{className:"p-4",children:[u.jsx($n,{variant:"info",className:"small mb-4",children:u.jsxs("div",{className:"d-flex align-items-center",children:[u.jsx("i",{className:"fas fa-info-circle me-2"}),u.jsxs("div",{children:[u.jsx("strong",{children:"Admin Credentials:"}),u.jsx("br",{}),"Username: ",u.jsx("code",{children:"admin"}),u.jsx("br",{}),"Password: ",u.jsx("code",{children:"admin123"})]})]})}),u.jsxs(_e,{onSubmit:g,children:[u.jsxs(_e.Group,{className:"mb-3",children:[u.jsxs(_e.Label,{children:[u.jsx("i",{className:"fas fa-user me-2"}),"Username"]}),u.jsx(_e.Control,{type:"text",name:"username",value:h,onChange:p,placeholder:"Enter admin username",disabled:r,style:{borderRadius:"10px",padding:"12px 15px"},required:!0})]}),u.jsxs(_e.Group,{className:"mb-4",children:[u.jsxs(_e.Label,{children:[u.jsx("i",{className:"fas fa-lock me-2"}),"Password"]}),u.jsxs(kD,{children:[u.jsx(_e.Control,{type:s?"text":"password",name:"password",value:f,onChange:p,placeholder:"Enter admin password",disabled:r,style:{borderRadius:"10px 0 0 10px",padding:"12px 15px"},required:!0}),u.jsx(ze,{variant:"outline-secondary",type:"button",onClick:()=>c(!s),disabled:r,style:{borderRadius:"0 10px 10px 0"},children:u.jsx("i",{className:`fas ${s?"fa-eye-slash":"fa-eye"}`})})]})]}),u.jsx("div",{className:"d-grid",children:u.jsx(ze,{type:"submit",variant:"danger",size:"lg",disabled:r,style:{borderRadius:"10px",padding:"12px",fontWeight:"600",background:"linear-gradient(135deg, #dc3545, #c82333)",border:"none"},children:r?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status"}),"Authenticating..."]}):u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-sign-in-alt me-2"}),"Admin Login"]})})})]})]}),u.jsx(Le.Footer,{className:"text-center",style:{background:"#f8f9fa",padding:"15px"},children:u.jsxs("small",{className:"text-muted",children:[u.jsx("i",{className:"fas fa-shield-alt me-1"}),"Secure Admin Authentication System"]})})]})})})})})},AA=()=>{const[e,n]=v.useState(!0),[r,o]=v.useState([]),[s,c]=v.useState({totalProducts:0,totalDownloads:0}),[d,h]=v.useState(!1),[f,p]=v.useState(null),[g,x]=v.useState({title:"",category:"themes",imageUrl:"",previewUrl:"",downloadUrl:"",featured:!1}),[b,S]=v.useState(""),w=Ur();v.useEffect(()=>{const H=localStorage.getItem("adminToken");if(!H){w("/admin/login");return}mt.interceptors.request.use(G=>((G.url.includes("/admin")||G.url.includes("/products/admin")||G.method==="post"&&G.url.includes("/products")||G.method==="put"&&G.url.includes("/products")||G.method==="delete"&&G.url.includes("/products"))&&(G.headers.Authorization=H),G)),R()},[w]);const R=async()=>{try{n(!0);const[H,G]=await Promise.all([mt.get("/products/admin"),mt.get("/products/stats")]);H.data.success&&o(H.data.products||[]),G.data.success&&c(G.data.stats||{totalProducts:0,totalDownloads:0})}catch(H){console.error("❌ Dashboard error:",H),H.response?.status===401?(localStorage.removeItem("adminToken"),w("/admin/login")):(he.error("Failed to load dashboard data"),o([]),c({totalProducts:0,totalDownloads:0}))}finally{n(!1)}},E=()=>{localStorage.removeItem("adminToken"),localStorage.removeItem("adminData"),he.success("Admin logged out successfully"),w("/admin/login")},N=async H=>{H.preventDefault();try{if(n(!0),!g.title.trim()||!g.imageUrl.trim()||!g.previewUrl.trim()||!g.downloadUrl.trim()){he.error("Please fill in all required fields");return}if(!T(g.imageUrl)){he.error("Please provide a valid image URL (jpg, jpeg, png, gif, webp)");return}const G=f?`/products/${f._id}`:"/products";(await mt[f?"put":"post"](G,g)).data.success&&(he.success(`Product ${f?"updated":"created"} successfully!`),h(!1),p(null),M(),R())}catch(G){console.error("❌ Product submit error:",G),he.error(G.response?.data?.message||"Failed to save product")}finally{n(!1)}},_=H=>{p(H),x({title:H.title,category:H.category,imageUrl:H.imageUrl,previewUrl:H.previewUrl,downloadUrl:H.downloadUrl,featured:H.featured||!1}),S(H.imageUrl),h(!0)},O=async H=>{if(window.confirm("Are you sure you want to delete this product?"))try{(await mt.delete(`/products/${H}`)).data.success&&(he.success("Product deleted successfully"),R())}catch(G){he.error(G.response?.data?.message||"Failed to delete product")}},M=()=>{x({title:"",category:"themes",imageUrl:"",previewUrl:"",downloadUrl:"",featured:!1}),S("")},D=H=>{const{name:G,value:W,type:te,checked:le}=H.target;x(de=>({...de,[G]:te==="checkbox"?le:W})),G==="imageUrl"&&S(W)},T=H=>/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(H),k=H=>new Date(H).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),L={totalProducts:s?.totalProducts||0,totalDownloads:s?.totalDownloads||0};return e&&r.length===0?u.jsx(At,{className:"mt-5",children:u.jsxs("div",{className:"text-center",children:[u.jsx(ad,{animation:"border",variant:"danger",size:"lg"}),u.jsx("h4",{className:"mt-3",children:"Loading Admin Dashboard..."})]})}):u.jsxs("div",{style:{background:"#f8f9fa",minHeight:"100vh"},children:[u.jsxs(At,{fluid:!0,className:"py-4",children:[u.jsx(Lt,{className:"mb-4",children:u.jsx(Ke,{children:u.jsx(Le,{className:"border-0 shadow-sm",children:u.jsx(Le.Body,{children:u.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[u.jsxs("div",{children:[u.jsxs("h2",{className:"mb-1",children:[u.jsx("i",{className:"fas fa-tachometer-alt me-2 text-danger"}),"Admin Dashboard"]}),u.jsx("p",{className:"text-muted mb-0",children:"Manage your digital marketplace"})]}),u.jsxs("div",{children:[u.jsxs(ze,{variant:"success",className:"me-2",onClick:()=>{M(),p(null),h(!0)},children:[u.jsx("i",{className:"fas fa-plus me-2"}),"Add Product"]}),u.jsxs(ze,{variant:"outline-danger",onClick:E,children:[u.jsx("i",{className:"fas fa-sign-out-alt me-2"}),"Logout"]})]})]})})})})}),u.jsxs(Lt,{className:"mb-4",children:[u.jsx(Ke,{lg:3,md:6,className:"mb-3",children:u.jsx(Le,{className:"border-0 shadow-sm h-100",children:u.jsxs(Le.Body,{className:"text-center",children:[u.jsx("div",{style:{fontSize:"2.5rem",color:"#007bff",marginBottom:"10px"},children:u.jsx("i",{className:"fas fa-box"})}),u.jsx("h3",{className:"mb-1",children:L.totalProducts}),u.jsx("p",{className:"text-muted mb-0",children:"Total Products"})]})})}),u.jsx(Ke,{lg:3,md:6,className:"mb-3",children:u.jsx(Le,{className:"border-0 shadow-sm h-100",children:u.jsxs(Le.Body,{className:"text-center",children:[u.jsx("div",{style:{fontSize:"2.5rem",color:"#28a745",marginBottom:"10px"},children:u.jsx("i",{className:"fas fa-download"})}),u.jsx("h3",{className:"mb-1",children:L.totalDownloads}),u.jsx("p",{className:"text-muted mb-0",children:"Total Downloads"})]})})}),u.jsx(Ke,{lg:3,md:6,className:"mb-3",children:u.jsx(Le,{className:"border-0 shadow-sm h-100",children:u.jsxs(Le.Body,{className:"text-center",children:[u.jsx("div",{style:{fontSize:"2.5rem",color:"#ffc107",marginBottom:"10px"},children:u.jsx("i",{className:"fas fa-star"})}),u.jsx("h3",{className:"mb-1",children:r.filter(H=>H.featured).length}),u.jsx("p",{className:"text-muted mb-0",children:"Featured Products"})]})})}),u.jsx(Ke,{lg:3,md:6,className:"mb-3",children:u.jsx(Le,{className:"border-0 shadow-sm h-100",children:u.jsxs(Le.Body,{className:"text-center",children:[u.jsx("div",{style:{fontSize:"2.5rem",color:"#17a2b8",marginBottom:"10px"},children:u.jsx("i",{className:"fas fa-palette"})}),u.jsx("h3",{className:"mb-1",children:r.filter(H=>H.category==="themes").length}),u.jsx("p",{className:"text-muted mb-0",children:"Themes"})]})})})]}),u.jsxs(Le,{className:"border-0 shadow-sm",children:[u.jsx(Le.Header,{className:"bg-white",children:u.jsxs("h5",{className:"mb-0",children:[u.jsx("i",{className:"fas fa-box me-2"}),"Products Management (",r.length,")"]})}),u.jsx(Le.Body,{className:"p-0",children:r.length>0?u.jsx("div",{className:"table-responsive",children:u.jsxs(xp,{hover:!0,className:"mb-0",children:[u.jsx("thead",{className:"table-light",children:u.jsxs("tr",{children:[u.jsx("th",{style:{width:"40px"},children:"#"}),u.jsx("th",{style:{width:"80px"},children:"Image"}),u.jsx("th",{children:"Title"}),u.jsx("th",{children:"Category"}),u.jsx("th",{children:"Status"}),u.jsx("th",{children:"Downloads"}),u.jsx("th",{children:"Created"}),u.jsx("th",{style:{width:"200px"},children:"Actions"})]})}),u.jsx("tbody",{children:r.map((H,G)=>u.jsxs("tr",{children:[u.jsx("td",{children:G+1}),u.jsx("td",{children:u.jsx(bh,{src:H.imageUrl,alt:H.title,width:60,height:45,rounded:!0,style:{objectFit:"cover"},onError:W=>{W.target.src="https://via.placeholder.com/60x45?text=No+Image"}})}),u.jsx("td",{children:u.jsxs("div",{children:[u.jsx("h6",{className:"mb-1",children:H.title}),u.jsxs("small",{className:"text-muted",children:["ID: ",H._id.slice(-6)]})]})}),u.jsx("td",{children:u.jsx(ra,{bg:H.category==="themes"?"primary":"success",className:"text-capitalize",children:H.category})}),u.jsx("td",{children:u.jsxs("div",{children:[H.featured&&u.jsxs(ra,{bg:"warning",className:"me-1",children:[u.jsx("i",{className:"fas fa-star me-1"}),"Featured"]}),u.jsx(ra,{bg:H.isActive?"success":"secondary",children:H.isActive?"Active":"Inactive"})]})}),u.jsx("td",{children:u.jsx("span",{className:"fw-bold",children:H.downloads||0})}),u.jsx("td",{children:u.jsx("small",{className:"text-muted",children:k(H.createdAt)})}),u.jsx("td",{children:u.jsxs("div",{className:"btn-group",role:"group",children:[u.jsx(ze,{size:"sm",variant:"outline-primary",onClick:()=>window.open(H.previewUrl,"_blank"),title:"Preview",children:u.jsx("i",{className:"fas fa-eye"})}),u.jsx(ze,{size:"sm",variant:"outline-success",onClick:()=>_(H),title:"Edit",children:u.jsx("i",{className:"fas fa-edit"})}),u.jsx(ze,{size:"sm",variant:"outline-danger",onClick:()=>O(H._id),title:"Delete",children:u.jsx("i",{className:"fas fa-trash"})})]})})]},H._id))})]})}):u.jsxs("div",{className:"text-center py-5",children:[u.jsx("div",{style:{fontSize:"4rem",color:"#dee2e6",marginBottom:"20px"},children:u.jsx("i",{className:"fas fa-box-open"})}),u.jsx("h5",{className:"text-muted mb-3",children:"No products yet"}),u.jsxs(ze,{variant:"primary",onClick:()=>{M(),p(null),h(!0)},children:[u.jsx("i",{className:"fas fa-plus me-2"}),"Add Your First Product"]})]})})]})]}),u.jsxs($t,{show:d,onHide:()=>h(!1),size:"lg",centered:!0,children:[u.jsx($t.Header,{closeButton:!0,children:u.jsxs($t.Title,{children:[u.jsx("i",{className:"fas fa-box me-2"}),f?"Edit Product":"Add New Product"]})}),u.jsxs(_e,{onSubmit:N,children:[u.jsxs($t.Body,{children:[u.jsxs(Lt,{children:[u.jsxs(Ke,{md:6,children:[u.jsxs(_e.Group,{className:"mb-3",children:[u.jsxs(_e.Label,{children:["Product Title ",u.jsx("span",{className:"text-danger",children:"*"})]}),u.jsx(_e.Control,{type:"text",name:"title",value:g.title,onChange:D,placeholder:"Enter product title",required:!0})]}),u.jsxs(_e.Group,{className:"mb-3",children:[u.jsxs(_e.Label,{children:["Category ",u.jsx("span",{className:"text-danger",children:"*"})]}),u.jsxs(_e.Select,{name:"category",value:g.category,onChange:D,required:!0,children:[u.jsx("option",{value:"themes",children:"Themes"}),u.jsx("option",{value:"plugins",children:"Plugins"})]})]}),u.jsxs(_e.Group,{className:"mb-3",children:[u.jsxs(_e.Label,{children:["Image URL ",u.jsx("span",{className:"text-danger",children:"*"})]}),u.jsx(_e.Control,{type:"url",name:"imageUrl",value:g.imageUrl,onChange:D,placeholder:"https://example.com/image.jpg",required:!0}),u.jsx(_e.Text,{className:"text-muted",children:"Supported formats: JPG, JPEG, PNG, GIF, WebP"})]}),u.jsxs(_e.Group,{className:"mb-3",children:[u.jsxs(_e.Label,{children:["Preview URL ",u.jsx("span",{className:"text-danger",children:"*"})]}),u.jsx(_e.Control,{type:"url",name:"previewUrl",value:g.previewUrl,onChange:D,placeholder:"https://example.com/preview",required:!0}),u.jsx(_e.Text,{className:"text-muted",children:"URL where users can preview the product"})]})]}),u.jsx(Ke,{md:6,children:u.jsxs("div",{className:"mb-3",children:[u.jsx(_e.Label,{children:"Image Preview"}),u.jsx("div",{className:"border rounded p-2 bg-light",style:{minHeight:"120px"},children:b&&T(b)?u.jsx(bh,{src:b,alt:"Preview",fluid:!0,rounded:!0,style:{maxHeight:"200px",width:"100%",objectFit:"cover"},onError:H=>{H.target.src="https://via.placeholder.com/300x200?text=Invalid+Image+URL"}}):u.jsx("div",{className:"d-flex align-items-center justify-content-center h-100 text-muted",children:u.jsxs("div",{className:"text-center",children:[u.jsx("i",{className:"fas fa-image fa-2x mb-2"}),u.jsx("p",{children:"Image preview will appear here"})]})})})]})})]}),u.jsxs(_e.Group,{className:"mb-3",children:[u.jsxs(_e.Label,{children:["Download URL ",u.jsx("span",{className:"text-danger",children:"*"})]}),u.jsx(_e.Control,{type:"url",name:"downloadUrl",value:g.downloadUrl,onChange:D,placeholder:"https://example.com/download",required:!0}),u.jsx(_e.Text,{className:"text-muted",children:"Direct download link for the product file"})]}),u.jsx(_e.Check,{type:"checkbox",name:"featured",label:"Featured Product",checked:g.featured,onChange:D,className:"mb-3"})]}),u.jsxs($t.Footer,{children:[u.jsx(ze,{variant:"secondary",onClick:()=>h(!1),disabled:e,children:"Cancel"}),u.jsx(ze,{type:"submit",variant:"primary",disabled:e,children:e?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-save me-2"}),f?"Update Product":"Create Product"]})})]})]})]})]})},MA=({children:e})=>{const{isAuthenticated:n,loading:r}=$r();return r?u.jsx("div",{className:"text-center py-5",children:u.jsx("div",{className:"spinner-border text-primary",role:"status",children:u.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):n?e:u.jsx(Yx,{to:"/login"})},kA=()=>{const[e,n]=v.useState(!1),[r,o]=v.useState(""),[s,c]=v.useState([]),[d,h]=v.useState(!1),[f,p]=v.useState(null),[g,x]=v.useState(0),{user:b}=$r(),S=v.useRef(null),w=()=>{S.current?.scrollIntoView({behavior:"smooth"})};v.useEffect(()=>{w()},[s]),v.useEffect(()=>{e&&s.length===0&&R()},[e]),v.useEffect(()=>{b&&e&&E()},[b,e]);const R=()=>{const k={id:Date.now(),type:"bot",text:b?`👋 Welcome back, ${b.name}! I'm your personal WordPress product assistant. I can help you discover amazing themes and plugins!`:"👋 Hi there! I'm your WordPress product assistant. I can help you discover amazing themes and plugins! Please login to download products.",timestamp:new Date,quickActions:[{text:"🎨 Browse Themes",action:"show_themes"},{text:"🔌 Browse Plugins",action:"show_plugins"},{text:"⭐ Featured Products",action:"show_featured"},...b?[{text:"📊 My Download Stats",action:"show_stats"}]:[]]};c([k])},E=async()=>{if(b)try{const k=await mt.get("/chatbot/stats");k.data.success&&p(k.data.stats)}catch(k){console.error("Error fetching stats:",k)}},N=k=>{c(L=>[...L,{...k,id:Date.now()+Math.random()}])},_=async(k=null)=>{const L=k||r.trim();if(!L)return;N({type:"user",text:L,timestamp:new Date}),o(""),h(!0);try{const G=await mt.post("/chatbot/chat",{message:L,context:{isLoggedIn:!!b,userId:b?.id}});setTimeout(()=>{if(G.data.success){const W={type:"bot",...G.data.response,timestamp:new Date};N(W),e||x(te=>te+1)}h(!1)},800+Math.random()*1200)}catch(G){console.error("Chat error:",G),N({type:"bot",text:"😅 Sorry, I'm experiencing some technical difficulties. Please try again in a moment!",timestamp:new Date,isError:!0}),h(!1),he.error("Chat service temporarily unavailable")}},O=async k=>{const L={show_themes:"Show me all WordPress themes",show_plugins:"Show me all WordPress plugins",show_featured:"Show me featured products",show_stats:"Show my download statistics",show_latest:"Show me latest products",help:"I need help"};if(k==="show_stats"){if(!b){N({type:"bot",text:"🔐 Please login to view your download statistics.",timestamp:new Date,requiresLogin:!0});return}await E(),N({type:"bot",text:"📊 Here are your current download statistics:",showStats:!0,stats:f,timestamp:new Date})}else _(L[k]||k)},M=async k=>{if(!b){N({type:"bot",text:"🔐 Please login to download products. Registration is free and takes just a minute!",timestamp:new Date,requiresLogin:!0}),he.warning("Please login to download products");return}try{const L=await mt.post(`/chatbot/download/${k._id}`);if(L.data.success){const H={type:"bot",text:L.data.message,timestamp:new Date,downloadSuccess:!0,downloadData:{productTitle:k.title,downloadUrl:L.data.downloadUrl,remainingDownloads:L.data.remainingDownloads}};N(H),await E(),window.open(L.data.downloadUrl,"_blank"),he.success(`🎉 ${k.title} download started!`)}}catch(L){const H=L.response?.data;if(H?.limitReached){const G={type:"bot",text:H.message,timestamp:new Date,limitReached:!0,resetTime:H.nextResetTime};N(G),he.error("⏰ Daily download limit reached!")}else{const G={type:"bot",text:`❌ Sorry, couldn't download "${k.title}". ${H?.message||"Please try again later."}`,timestamp:new Date,isError:!0};N(G),he.error(H?.message||"Download failed")}}},D=k=>{if(k.previewUrl){window.open(k.previewUrl,"_blank");const L={type:"bot",text:`🔍 Opening preview for "${k.title}" in a new tab!`,timestamp:new Date};N(L)}else he.info("Preview not available for this product")},T=k=>{const L=new Date,H=new Date(k),G=Math.max(0,H-L),W=Math.floor(G/(1e3*60*60)),te=Math.floor(G%(1e3*60*60)/(1e3*60));return W>0?`${W}h ${te}m`:`${te}m`};return e?u.jsxs("div",{className:"chatbot-container",style:{position:"fixed",bottom:"20px",right:"20px",width:"420px",height:"650px",zIndex:1e3,maxWidth:"90vw",maxHeight:"90vh"},children:[u.jsxs(Le,{className:"chatbot-card shadow-lg",style:{height:"100%",borderRadius:"20px",overflow:"hidden",border:"none",background:"#ffffff"},children:[u.jsxs(Le.Header,{className:"chatbot-header text-white d-flex justify-content-between align-items-center",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"16px 20px",minHeight:"70px"},children:[u.jsxs("div",{className:"d-flex align-items-center",children:[u.jsx("div",{className:"online-indicator me-3",style:{width:"12px",height:"12px",backgroundColor:"#4ade80",borderRadius:"50%",boxShadow:"0 0 0 3px rgba(74, 222, 128, 0.3)",animation:"pulse 2s infinite"}}),u.jsxs("div",{children:[u.jsx("h6",{className:"mb-0 fw-bold",children:"WordPress Assistant"}),u.jsx("small",{className:"opacity-75",children:b?`${f?.remainingDownloads||0} downloads left today`:"Login to download"})]})]}),u.jsx(ze,{variant:"link",className:"text-white p-1",onClick:()=>n(!1),style:{fontSize:"1.2rem",textDecoration:"none",lineHeight:1,minWidth:"auto"},children:"✕"})]}),f&&b&&u.jsxs("div",{className:"download-stats-bar px-3 py-2",style:{background:"linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)",borderBottom:"1px solid #dee2e6"},children:[u.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[u.jsx("small",{className:"fw-semibold text-muted",children:"Daily Downloads"}),u.jsxs("small",{className:"fw-bold",style:{color:f.remainingDownloads>3?"#28a745":f.remainingDownloads>0?"#ffc107":"#dc3545"},children:[f.todayDownloads,"/",f.dailyLimit]})]}),u.jsx(mo,{now:f.todayDownloads/f.dailyLimit*100,style:{height:"6px"},variant:f.remainingDownloads>3?"success":f.remainingDownloads>0?"warning":"danger",animated:f.remainingDownloads>0}),u.jsx("div",{className:"text-end mt-1",children:u.jsxs("small",{className:"text-muted",children:[f.remainingDownloads," remaining",f.remainingDownloads===0&&f.nextResetTime&&u.jsxs("span",{className:"ms-2 text-warning",children:["• Resets in ",T(f.nextResetTime)]})]})})]}),u.jsxs(Le.Body,{className:"chat-messages p-0",style:{height:f&&b?"450px":"500px",overflowY:"auto",background:"#f8f9fa"},children:[u.jsxs("div",{className:"p-3",children:[s.map(k=>u.jsxs("div",{className:`message-wrapper mb-4 ${k.type==="user"?"text-end":"text-start"}`,children:[u.jsxs("div",{className:`message-bubble d-inline-block p-3 ${k.type==="user"?"user-message text-white":"bot-message bg-white shadow-sm"}`,style:{maxWidth:"85%",borderRadius:k.type==="user"?"20px 20px 5px 20px":"20px 20px 20px 5px",wordBreak:"break-word",background:k.type==="user"?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":k.isError?"linear-gradient(135deg, #ff9a9a 0%, #ffd4d4 100%)":"#ffffff"},children:[u.jsx("div",{className:"message-text",style:{fontSize:"0.95rem",lineHeight:"1.5"},children:k.text}),k.quickActions&&u.jsx("div",{className:"quick-actions mt-3",children:u.jsx("div",{className:"d-flex flex-wrap gap-2",children:k.quickActions.map((L,H)=>u.jsx(ze,{size:"sm",variant:"outline-primary",className:"quick-action-btn",onClick:()=>O(L.action),style:{borderRadius:"20px",padding:"6px 16px",fontSize:"0.8rem",transition:"all 0.3s ease"},children:L.text},H))})}),k.products&&k.products.length>0&&u.jsx("div",{className:"products-grid mt-3",children:k.products.map(L=>u.jsxs("div",{className:"product-card mb-3 p-3 bg-light rounded-3 border",children:[u.jsx("div",{className:"product-header d-flex justify-content-between align-items-start mb-2",children:u.jsxs("div",{className:"flex-grow-1",children:[u.jsx("h6",{className:"product-title fw-bold text-primary mb-1",style:{fontSize:"0.9rem"},children:L.title}),u.jsxs("div",{className:"product-meta d-flex align-items-center gap-2 mb-2",children:[u.jsxs(ra,{bg:L.category==="themes"?"primary":"success",className:"category-badge",style:{fontSize:"0.7rem"},children:[L.category==="themes"?"🎨":"🔌"," ",L.category]}),L.featured&&u.jsx(ra,{bg:"warning",style:{fontSize:"0.7rem"},children:"⭐ Featured"})]}),u.jsxs("div",{className:"product-stats text-muted",style:{fontSize:"0.75rem"},children:[u.jsx("i",{className:"fas fa-download me-1"}),(L.downloads||0).toLocaleString()," downloads",L.version&&u.jsxs("span",{className:"ms-2",children:[u.jsx("i",{className:"fas fa-code-branch me-1"}),"v",L.version]})]})]})}),L.description&&u.jsx("p",{className:"product-description text-muted mb-3",style:{fontSize:"0.8rem"},children:L.description.length>100?`${L.description.substring(0,100)}...`:L.description}),u.jsxs("div",{className:"product-actions d-flex gap-2",children:[L.previewUrl&&u.jsx(ze,{size:"sm",variant:"outline-info",className:"flex-fill",onClick:()=>D(L),style:{fontSize:"0.75rem"},children:"👁️ Preview"}),u.jsx(ze,{size:"sm",variant:b&&f?.remainingDownloads>0?"primary":"outline-secondary",className:"flex-fill",onClick:()=>M(L),disabled:b&&f?.remainingDownloads<=0,style:{fontSize:"0.75rem"},children:b?f?.remainingDownloads>0?"📥 Download":"⏰ Limit Reached":"🔐 Login Required"})]})]},L._id))}),k.noResults&&u.jsxs("div",{className:"no-results mt-3 p-3 bg-light rounded text-center",children:[u.jsx("div",{className:"mb-2",style:{fontSize:"2rem"},children:"🔍"}),u.jsx("div",{className:"fw-bold text-muted mb-2",children:"No products found"}),k.suggestions&&u.jsxs("div",{children:[u.jsx("small",{className:"text-muted d-block mb-2",children:"Try searching for:"}),u.jsx("div",{className:"d-flex flex-wrap gap-1 justify-content-center",children:k.suggestions.map((L,H)=>u.jsx(ze,{size:"sm",variant:"outline-secondary",onClick:()=>_(L),style:{borderRadius:"15px",padding:"4px 12px",fontSize:"0.75rem"},children:L},H))})]})]}),k.downloadSuccess&&u.jsxs("div",{className:"download-success mt-3 p-3 rounded",style:{background:"linear-gradient(135deg, #d4edda 0%, #f8f9fa 100%)"},children:[u.jsx("div",{className:"text-success fw-bold mb-2",children:"🎉 Download Ready!"}),u.jsx("div",{className:"small text-success mb-2",children:k.downloadData.productTitle}),u.jsxs("div",{className:"small text-muted",children:[k.downloadData.remainingDownloads," downloads remaining today"]})]}),k.limitReached&&u.jsxs("div",{className:"limit-reached mt-3 p-3 rounded",style:{background:"linear-gradient(135deg, #fff3cd 0%, #f8f9fa 100%)"},children:[u.jsx("div",{className:"text-warning fw-bold mb-2",children:"⏰ Daily Limit Reached"}),u.jsxs("div",{className:"small text-muted",children:["Downloads reset in: ",T(k.resetTime)]})]}),k.showStats&&f&&u.jsxs("div",{className:"download-stats mt-3 p-3 bg-light rounded",children:[u.jsx("div",{className:"fw-bold mb-3 text-center",children:"📊 Your Download Statistics"}),u.jsxs("div",{className:"row text-center",children:[u.jsx("div",{className:"col-4",children:u.jsxs("div",{className:"stat-item",children:[u.jsx("div",{className:"fw-bold text-primary fs-5",children:f.totalDownloads}),u.jsx("small",{className:"text-muted",children:"Total Downloads"})]})}),u.jsx("div",{className:"col-4",children:u.jsxs("div",{className:"stat-item",children:[u.jsx("div",{className:"fw-bold text-success fs-5",children:f.todayDownloads}),u.jsx("small",{className:"text-muted",children:"Today"})]})}),u.jsx("div",{className:"col-4",children:u.jsxs("div",{className:"stat-item",children:[u.jsx("div",{className:"fw-bold text-info fs-5",children:f.remainingDownloads}),u.jsx("small",{className:"text-muted",children:"Remaining"})]})})]})]}),k.requiresLogin&&u.jsx("div",{className:"login-required mt-3 p-3 rounded",style:{background:"linear-gradient(135deg, #cce5ff 0%, #f8f9fa 100%)"},children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"mb-2",children:"🔐"}),u.jsx("div",{className:"fw-bold text-primary mb-2",children:"Login Required"}),u.jsx("div",{className:"small text-muted",children:"Create a free account to download amazing WordPress products!"})]})})]}),u.jsx("div",{className:`message-time mt-1 ${k.type==="user"?"text-end":"text-start"}`,children:u.jsx("small",{className:"text-muted opacity-75",style:{fontSize:"0.7rem"},children:k.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})})]},k.id)),d&&u.jsx("div",{className:"typing-wrapper text-start mb-3",children:u.jsx("div",{className:"typing-bubble d-inline-block p-3 bg-white shadow-sm",style:{maxWidth:"85%",borderRadius:"20px 20px 20px 5px"},children:u.jsxs("div",{className:"typing-indicator d-flex align-items-center gap-1",children:[u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("small",{className:"ms-2 text-muted",children:"Assistant is typing..."})]})})})]}),u.jsx("div",{ref:S})]}),u.jsx(Le.Footer,{className:"p-3 bg-white border-0",children:u.jsx(_e,{onSubmit:k=>{k.preventDefault(),_()},children:u.jsxs("div",{className:"d-flex gap-2 align-items-end",children:[u.jsx(_e.Control,{type:"text",value:r,onChange:k=>o(k.target.value),placeholder:"Type your message... (e.g., 'blog themes', 'SEO plugins')",className:"border-0 bg-light message-input",disabled:d,style:{borderRadius:"25px",padding:"12px 20px",resize:"none",minHeight:"45px"},onKeyPress:k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),_())}}),u.jsx(ze,{type:"submit",disabled:!r.trim()||d,className:"send-button",style:{borderRadius:"50%",width:"45px",height:"45px",minWidth:"45px",background:r.trim()&&!d?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"#dee2e6",border:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:d?u.jsx(ad,{size:"sm"}):"📤"})]})})})]}),u.jsx("style",{jsx:!0,children:`
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.05);
          }
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        .chat-toggle-btn:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6) !important;
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.05);
          border-radius: 10px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #667eea;
          animation: typing 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        .quick-action-btn:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          color: white !important;
          border-color: transparent !important;
          transform: translateY(-1px);
        }

        .product-card {
          transition: all 0.3s ease;
          border: 1px solid #e9ecef !important;
        }

        .product-card:hover {
          border-color: #667eea !important;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15) !important;
          transform: translateY(-2px);
        }

        .message-input:focus {
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
          border-color: #667eea !important;
        }

        .send-button:hover:not(:disabled) {
          transform: scale(1.1);
        }

        .user-message {
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }

        .bot-message {
          border: 1px solid rgba(0,0,0,0.05);
        }

        @media (max-width: 768px) {
          .chatbot-container {
            width: 100vw !important;
            height: 100vh !important;
            bottom: 0 !important;
            right: 0 !important;
            border-radius: 0 !important;
          }
          
          .chatbot-card {
            border-radius: 0 !important;
            height: 100vh !important;
          }
        }
      `})]}):u.jsx("div",{className:"chatbot-toggle",style:{position:"fixed",bottom:"20px",right:"20px",zIndex:1e3},children:u.jsxs("div",{className:"position-relative",children:[u.jsx(ze,{onClick:()=>{n(!0),x(0)},className:"chat-toggle-btn shadow-lg",style:{width:"70px",height:"70px",borderRadius:"50%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",fontSize:"1.8rem",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",animation:"pulse 2s infinite"},children:"💬"}),g>0&&u.jsx(ra,{bg:"danger",pill:!0,className:"position-absolute",style:{top:"-8px",right:"-8px",minWidth:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:"bold"},children:g>99?"99+":g})]})})};function LA(){return u.jsx(G_,{children:u.jsx(kw,{children:u.jsxs("div",{className:"App",children:[u.jsx(RA,{}),u.jsxs(qx,{children:[u.jsx(Bn,{path:"/",element:u.jsx(NA,{})}),u.jsx(Bn,{path:"/login",element:u.jsx(TA,{})}),u.jsx(Bn,{path:"/register",element:u.jsx(CA,{})}),u.jsx(Bn,{path:"/products",element:u.jsx(_A,{})}),u.jsx(Bn,{path:"/dashboard",element:u.jsx(MA,{children:u.jsx(OA,{})})}),u.jsx(Bn,{path:"/admin/login",element:u.jsx(DA,{})}),u.jsx(Bn,{path:"/admin",element:u.jsx(AA,{})})]}),u.jsx(kA,{}),u.jsx(dC,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})})}Pj.createRoot(document.getElementById("root")).render(u.jsx(v.StrictMode,{children:u.jsx(LA,{})}));
