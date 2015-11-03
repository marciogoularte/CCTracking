/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);
//# sourceMappingURL=underscore-min.map;
(function(t,e){if(typeof define==="function"&&define.amd){define('backbone',["underscore","jquery","exports"],function(i,r,s){t.Backbone=e(t,s,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore");e(t,exports,i)}else{t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}})(this,function(t,e,i,r){var s=t.Backbone;var n=[];var a=n.push;var o=n.slice;var h=n.splice;e.VERSION="1.1.2";e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var u=e.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,r){if(!c(this,"once",t,[e,r])||!e)return this;var s=this;var n=i.once(function(){s.off(t,n);e.apply(this,arguments)});n._callback=e;return this.on(t,n,r)},off:function(t,e,r){var s,n,a,o,h,u,l,f;if(!this._events||!c(this,"off",t,[e,r]))return this;if(!t&&!e&&!r){this._events=void 0;return this}o=t?[t]:i.keys(this._events);for(h=0,u=o.length;h<u;h++){t=o[h];if(a=this._events[t]){this._events[t]=s=[];if(e||r){for(l=0,f=a.length;l<f;l++){n=a[l];if(e&&e!==n.callback&&e!==n.callback._callback||r&&r!==n.context){s.push(n)}}}if(!s.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!c(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)f(i,e);if(r)f(r,arguments);return this},stopListening:function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=!e&&!r;if(!r&&typeof e==="object")r=this;if(t)(s={})[t._listenId]=t;for(var a in s){t=s[a];t.off(e,r,this);if(n||i.isEmpty(t._events))delete this._listeningTo[a]}return this}};var l=/\s+/;var c=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(l.test(i)){var n=i.split(l);for(var a=0,o=n.length;a<o;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var f=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e);return}};var d={listenTo:"on",listenToOnce:"once"};i.each(d,function(t,e){u[e]=function(e,r,s){var n=this._listeningTo||(this._listeningTo={});var a=e._listenId||(e._listenId=i.uniqueId("l"));n[a]=e;if(!s&&typeof r==="object")s=this;e[t](r,s,this);return this}});u.bind=u.on;u.unbind=u.off;i.extend(e,u);var p=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(p.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,r){var s,n,a,o,h,u,l,c;if(t==null)return this;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;a=r.unset;h=r.silent;o=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=i.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in n)this.id=n[this.idAttribute];for(s in n){e=n[s];if(!i.isEqual(c[s],e))o.push(s);if(!i.isEqual(l[s],e)){this.changed[s]=e}else{delete this.changed[s]}a?delete c[s]:c[s]=e}if(!h){if(o.length)this._pending=r;for(var f=0,d=o.length;f<d;f++){this.trigger("change:"+o[f],this,c[o[f]],r)}}if(u)return this;if(!h){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e,r=false;var s=this._changing?this._previousAttributes:this.attributes;for(var n in t){if(i.isEqual(s[n],e=t[n]))continue;(r||(r={}))[n]=e}return r},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var r=t.success;t.success=function(i){if(!e.set(e.parse(i,t),t))return false;if(r)r(e,i,t);e.trigger("sync",e,i,t)};q(this,t);return this.sync("read",this,t)},save:function(t,e,r){var s,n,a,o=this.attributes;if(t==null||typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true},r);if(s&&!r.wait){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}if(s&&r.wait){this.attributes=i.extend({},o,s)}if(r.parse===void 0)r.parse=true;var h=this;var u=r.success;r.success=function(t){h.attributes=o;var e=h.parse(t,r);if(r.wait)e=i.extend(s||{},e);if(i.isObject(e)&&!h.set(e,r)){return false}if(u)u(h,t,r);h.trigger("sync",h,t,r)};q(this,r);n=this.isNew()?"create":r.patch?"patch":"update";if(n==="patch")r.attrs=s;a=this.sync(n,this,r);if(s&&r.wait)this.attributes=o;return a},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(t.wait||e.isNew())s();if(r)r(e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};if(this.isNew()){t.success();return false}q(this,t);var n=this.sync("delete",this,t);if(!t.wait)s();return n},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;return t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var v=["keys","values","pairs","invert","pick","omit"];i.each(v,function(t){p.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.attributes);return i[t].apply(i,e)}});var g=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,remove:false};i.extend(g.prototype,u,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,y))},remove:function(t,e){var r=!i.isArray(t);t=r?[t]:i.clone(t);e||(e={});var s,n,a,o;for(s=0,n=t.length;s<n;s++){o=t[s]=this.get(t[s]);if(!o)continue;delete this._byId[o.id];delete this._byId[o.cid];a=this.indexOf(o);this.models.splice(a,1);this.length--;if(!e.silent){e.index=a;o.trigger("remove",o,this,e)}this._removeReference(o,e)}return r?t[0]:t},set:function(t,e){e=i.defaults({},e,m);if(e.parse)t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:i.clone(t);var s,n,a,o,h,u,l;var c=e.at;var f=this.model;var d=this.comparator&&c==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g=[],y=[],_={};var b=e.add,w=e.merge,x=e.remove;var E=!d&&b&&x?[]:false;for(s=0,n=t.length;s<n;s++){h=t[s]||{};if(h instanceof p){a=o=h}else{a=h[f.prototype.idAttribute||"id"]}if(u=this.get(a)){if(x)_[u.cid]=true;if(w){h=h===o?o.attributes:h;if(e.parse)h=u.parse(h,e);u.set(h,e);if(d&&!l&&u.hasChanged(v))l=true}t[s]=u}else if(b){o=t[s]=this._prepareModel(h,e);if(!o)continue;g.push(o);this._addReference(o,e)}o=u||o;if(E&&(o.isNew()||!_[o.id]))E.push(o);_[o.id]=true}if(x){for(s=0,n=this.length;s<n;++s){if(!_[(o=this.models[s]).cid])y.push(o)}if(y.length)this.remove(y,e)}if(g.length||E&&E.length){if(d)l=true;this.length+=g.length;if(c!=null){for(s=0,n=g.length;s<n;s++){this.models.splice(c+s,0,g[s])}}else{if(E)this.models.length=0;var k=E||g;for(s=0,n=k.length;s<n;s++){this.models.push(k[s])}}}if(l)this.sort({silent:true});if(!e.silent){for(s=0,n=g.length;s<n;s++){(o=g[s]).trigger("add",o,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,s=this.models.length;r<s;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){if(i.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var r=this;t.success=function(i){var s=t.reset?"reset":"set";r[s](i,t);if(e)e(r,i,t);r.trigger("sync",r,i,t)};q(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var r=this;var s=e.success;e.success=function(t,i){if(e.wait)r.add(t,e);if(s)s(t,i,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof p)return t;e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_addReference:function(t,e){this._byId[t.cid]=t;if(t.id!=null)this._byId[t.id]=t;if(!t.collection)t.collection=this;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(_,function(t){g.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.models);return i[t].apply(i,e)}});var b=["groupBy","countBy","sortBy","indexBy"];i.each(b,function(t){g.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var w=e.View=function(t){this.cid=i.uniqueId("view");t||(t={});i.extend(this,i.pick(t,E));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];i.extend(w.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,i){if(this.$el)this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0];if(i!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=i.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[t[e]];if(!r)continue;var s=e.match(x);var n=s[1],a=s[2];r=i.bind(r,this);n+=".delegateEvents"+this.cid;if(a===""){this.$el.on(n,r)}else{this.$el.on(n,a,r)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");var r=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(r,false)}else{this.setElement(i.result(this,"el"),false)}}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:"json"};if(!s.url){a.url=i.result(r,"url")||M()}if(s.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&&(n==="PUT"||n==="DELETE"||n==="PATCH")){a.type="POST";if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!s.emulateJSON){a.processData=false}if(a.type==="PATCH"&&k){a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var h=s.xhr=e.ajax(i.extend(a,s));r.trigger("request",r,h,s);return h};var k=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var H=/(\(\?)?:\w+/g;var A=/\*\w+/g;var I=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=""}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);n.execute(s,a);n.trigger.apply(n,["route:"+r].concat(a));n.trigger("route",r,a);e.history.trigger("route",n,r,a)});return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(S,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var R=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment();var s=document.documentMode;var n=P.exec(navigator.userAgent.toLowerCase())&&(!s||s<=7);this.root=("/"+this.root+"/").replace(O,"/");if(n&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow;this.navigate(r)}if(this._hasPushState){e.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!n){e.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=r;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);this.location.replace(this.root+"#"+this.fragment);return true}else if(this._hasPushState&&this.atRoot()&&o.hash){this.fragment=this.getHash().replace(R,"");this.history.replaceState({},document.title,this.root+this.fragment)}}if(!this.options.silent)return this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&&i.has(t,"constructor")){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};p.extend=g.extend=$.extend=w.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone.min.map
;
(function(root) {
define("marionette", ["underscore","jquery","backbone"], function() {
  return (function() {
// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v1.8.5
//
// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */



var Marionette=function(a,b,c){function d(a,b){var c=new Error(a);throw c.name=b||"Error",c}!function(a,b){var c=a.ChildViewContainer;return a.ChildViewContainer=function(a,b){var c=function(a){this._views={},this._indexByModel={},this._indexByCustom={},this._updateLength(),b.each(a,this.add,this)};b.extend(c.prototype,{add:function(a,b){var c=a.cid;return this._views[c]=a,a.model&&(this._indexByModel[a.model.cid]=c),b&&(this._indexByCustom[b]=c),this._updateLength(),this},findByModel:function(a){return this.findByModelCid(a.cid)},findByModelCid:function(a){var b=this._indexByModel[a];return this.findByCid(b)},findByCustom:function(a){var b=this._indexByCustom[a];return this.findByCid(b)},findByIndex:function(a){return b.values(this._views)[a]},findByCid:function(a){return this._views[a]},remove:function(a){var c=a.cid;return a.model&&delete this._indexByModel[a.model.cid],b.any(this._indexByCustom,function(a,b){return a===c?(delete this._indexByCustom[b],!0):void 0},this),delete this._views[c],this._updateLength(),this},call:function(a){this.apply(a,b.tail(arguments))},apply:function(a,c){b.each(this._views,function(d){b.isFunction(d[a])&&d[a].apply(d,c||[])})},_updateLength:function(){this.length=b.size(this._views)}});var d=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];return b.each(d,function(a){c.prototype[a]=function(){var c=b.values(this._views),d=[c].concat(b.toArray(arguments));return b[a].apply(b,d)}}),c}(a,b),a.ChildViewContainer.VERSION="0.1.4",a.ChildViewContainer.noConflict=function(){return a.ChildViewContainer=c,this},a.ChildViewContainer}(b,c),function(a,b){var c=a.Wreqr,d=a.Wreqr={};return a.Wreqr.VERSION="1.3.1",a.Wreqr.noConflict=function(){return a.Wreqr=c,this},d.Handlers=function(a,b){var c=function(a){this.options=a,this._wreqrHandlers={},b.isFunction(this.initialize)&&this.initialize(a)};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events,{setHandlers:function(a){b.each(a,function(a,c){var d=null;b.isObject(a)&&!b.isFunction(a)&&(d=a.context,a=a.callback),this.setHandler(c,a,d)},this)},setHandler:function(a,b,c){var d={callback:b,context:c};this._wreqrHandlers[a]=d,this.trigger("handler:add",a,b,c)},hasHandler:function(a){return!!this._wreqrHandlers[a]},getHandler:function(a){var b=this._wreqrHandlers[a];if(b)return function(){var a=Array.prototype.slice.apply(arguments);return b.callback.apply(b.context,a)}},removeHandler:function(a){delete this._wreqrHandlers[a]},removeAllHandlers:function(){this._wreqrHandlers={}}}),c}(a,b),d.CommandStorage=function(){var c=function(a){this.options=a,this._commands={},b.isFunction(this.initialize)&&this.initialize(a)};return b.extend(c.prototype,a.Events,{getCommands:function(a){var b=this._commands[a];return b||(b={command:a,instances:[]},this._commands[a]=b),b},addCommand:function(a,b){var c=this.getCommands(a);c.instances.push(b)},clearCommands:function(a){var b=this.getCommands(a);b.instances=[]}}),c}(),d.Commands=function(a){return a.Handlers.extend({storageType:a.CommandStorage,constructor:function(b){this.options=b||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this);var c=Array.prototype.slice.call(arguments);a.Handlers.prototype.constructor.apply(this,c)},execute:function(a,b){a=arguments[0],b=Array.prototype.slice.call(arguments,1),this.hasHandler(a)?this.getHandler(a).apply(this,b):this.storage.addCommand(a,b)},_executeCommands:function(a,c,d){var e=this.storage.getCommands(a);b.each(e.instances,function(a){c.apply(d,a)}),this.storage.clearCommands(a)},_initializeStorage:function(a){var c,d=a.storageType||this.storageType;c=b.isFunction(d)?new d:d,this.storage=c}})}(d),d.RequestResponse=function(a){return a.Handlers.extend({request:function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1);return this.hasHandler(a)?this.getHandler(a).apply(this,b):void 0}})}(d),d.EventAggregator=function(a,b){var c=function(){};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events),c}(a,b),d.Channel=function(){var c=function(b){this.vent=new a.Wreqr.EventAggregator,this.reqres=new a.Wreqr.RequestResponse,this.commands=new a.Wreqr.Commands,this.channelName=b};return b.extend(c.prototype,{reset:function(){return this.vent.off(),this.vent.stopListening(),this.reqres.removeAllHandlers(),this.commands.removeAllHandlers(),this},connectEvents:function(a,b){return this._connect("vent",a,b),this},connectCommands:function(a,b){return this._connect("commands",a,b),this},connectRequests:function(a,b){return this._connect("reqres",a,b),this},_connect:function(a,c,d){if(c){d=d||this;var e="vent"===a?"on":"setHandler";b.each(c,function(c,f){this[a][e](f,b.bind(c,d))},this)}}}),c}(d),d.radio=function(a){var c=function(){this._channels={},this.vent={},this.commands={},this.reqres={},this._proxyMethods()};b.extend(c.prototype,{channel:function(a){if(!a)throw new Error("Channel must receive a name");return this._getChannel(a)},_getChannel:function(b){var c=this._channels[b];return c||(c=new a.Channel(b),this._channels[b]=c),c},_proxyMethods:function(){b.each(["vent","commands","reqres"],function(a){b.each(d[a],function(b){this[a][b]=e(this,a,b)},this)},this)}});var d={vent:["on","off","trigger","once","stopListening","listenTo","listenToOnce"],commands:["execute","setHandler","setHandlers","removeHandler","removeAllHandlers"],reqres:["request","setHandler","setHandlers","removeHandler","removeAllHandlers"]},e=function(a,b,c){return function(d){var e=a._getChannel(d)[b],f=Array.prototype.slice.call(arguments,1);return e[c].apply(e,f)}};return new c}(d),a.Wreqr}(b,c);var e={};b.Marionette=e,e.$=b.$;var f=Array.prototype.slice;return e.extend=b.Model.extend,e.getOption=function(a,b){if(a&&b){var c;return c=a.options&&b in a.options&&void 0!==a.options[b]?a.options[b]:a[b]}},e.normalizeMethods=function(a){var b,d={};return c.each(a,function(a,e){b=a,c.isFunction(b)||(b=this[b]),b&&(d[e]=b)},this),d},e.normalizeUIKeys=function(a,b){return"undefined"!=typeof a?(c.each(c.keys(a),function(c){var d=/@ui.[a-zA-Z_$0-9]*/g;c.match(d)&&(a[c.replace(d,function(a){return b[a.slice(4)]})]=a[c],delete a[c])}),a):void 0},e.actAsCollection=function(a,b){var d=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];c.each(d,function(d){a[d]=function(){var a=c.values(c.result(this,b)),e=[a].concat(c.toArray(arguments));return c[d].apply(c,e)}})},e.triggerMethod=function(){function a(a,b,c){return c.toUpperCase()}var b=/(^|:)(\w)/gi,d=function(d){var e="on"+d.replace(b,a),f=this[e];return c.isFunction(this.trigger)&&this.trigger.apply(this,arguments),c.isFunction(f)?f.apply(this,c.tail(arguments)):void 0};return d}(),e.MonitorDOMRefresh=function(a){function b(a){a._isShown=!0,e(a)}function d(a){a._isRendered=!0,e(a)}function e(a){a._isShown&&a._isRendered&&f(a)&&c.isFunction(a.triggerMethod)&&a.triggerMethod("dom:refresh")}function f(b){return a.contains(b.el)}return function(a){a.listenTo(a,"show",function(){b(a)}),a.listenTo(a,"render",function(){d(a)})}}(document.documentElement),function(a){function b(a,b,e,f){var g=f.split(/\s+/);c.each(g,function(c){var f=a[c];f||d("Method '"+c+"' was configured as an event handler, but does not exist."),a.listenTo(b,e,f)})}function e(a,b,c,d){a.listenTo(b,c,d)}function f(a,b,d,e){var f=e.split(/\s+/);c.each(f,function(c){var e=a[c];a.stopListening(b,d,e)})}function g(a,b,c,d){a.stopListening(b,c,d)}function h(a,b,d,e,f){b&&d&&(c.isFunction(d)&&(d=d.call(a)),c.each(d,function(d,g){c.isFunction(d)?e(a,b,g,d):f(a,b,g,d)}))}a.bindEntityEvents=function(a,c,d){h(a,c,d,e,b)},a.unbindEntityEvents=function(a,b,c){h(a,b,c,g,f)}}(e),e.Callbacks=function(){this._deferred=e.$.Deferred(),this._callbacks=[]},c.extend(e.Callbacks.prototype,{add:function(a,b){this._callbacks.push({cb:a,ctx:b}),this._deferred.done(function(c,d){b&&(c=b),a.call(c,d)})},run:function(a,b){this._deferred.resolve(b,a)},reset:function(){var a=this._callbacks;this._deferred=e.$.Deferred(),this._callbacks=[],c.each(a,function(a){this.add(a.cb,a.ctx)},this)}}),e.Controller=function(a){this.triggerMethod=e.triggerMethod,this.options=a||{},c.isFunction(this.initialize)&&this.initialize(this.options)},e.Controller.extend=e.extend,c.extend(e.Controller.prototype,b.Events,{close:function(){this.stopListening();var a=Array.prototype.slice.call(arguments);this.triggerMethod.apply(this,["close"].concat(a)),this.off()}}),e.Region=function(a){if(this.options=a||{},this.el=e.getOption(this,"el"),this.el||d("An 'el' must be specified for a region.","NoElError"),this.initialize){var b=Array.prototype.slice.apply(arguments);this.initialize.apply(this,b)}},c.extend(e.Region,{buildRegion:function(a,b){var e=c.isString(a),f=c.isString(a.selector),g=c.isUndefined(a.regionType),h=c.isFunction(a);h||e||f||d("Region must be specified as a Region type, a selector string or an object with selector property");var i,j;e&&(i=a),a.selector&&(i=a.selector,delete a.selector),h&&(j=a),!h&&g&&(j=b),a.regionType&&(j=a.regionType,delete a.regionType),(e||h)&&(a={}),a.el=i;var k=new j(a);return a.parentEl&&(k.getEl=function(b){var d=a.parentEl;return c.isFunction(d)&&(d=d()),d.find(b)}),k}}),c.extend(e.Region.prototype,b.Events,{show:function(a,b){this.ensureEl();var d=b||{},f=a.isClosed||c.isUndefined(a.$el),g=a!==this.currentView,h=!!d.preventClose,i=!h&&g;i&&this.close(),a.render(),e.triggerMethod.call(this,"before:show",a),e.triggerMethod.call(a,"before:show"),(g||f)&&this.open(a),this.currentView=a,e.triggerMethod.call(this,"show",a),e.triggerMethod.call(a,"show")},ensureEl:function(){this.$el&&0!==this.$el.length||(this.$el=this.getEl(this.el))},getEl:function(a){return e.$(a)},open:function(a){this.$el.empty().append(a.el)},close:function(){var a=this.currentView;a&&!a.isClosed&&(a.close?a.close():a.remove&&a.remove(),e.triggerMethod.call(this,"close",a),delete this.currentView)},attachView:function(a){this.currentView=a},reset:function(){this.close(),delete this.$el}}),e.Region.extend=e.extend,e.RegionManager=function(a){var b=a.Controller.extend({constructor:function(b){this._regions={},a.Controller.prototype.constructor.call(this,b)},addRegions:function(a,b){var d={};return c.each(a,function(a,e){c.isString(a)&&(a={selector:a}),a.selector&&(a=c.defaults({},a,b));var f=this.addRegion(e,a);d[e]=f},this),d},addRegion:function(b,d){var e,f=c.isObject(d),g=c.isString(d),h=!!d.selector;return e=g||f&&h?a.Region.buildRegion(d,a.Region):c.isFunction(d)?a.Region.buildRegion(d,a.Region):d,this._store(b,e),this.triggerMethod("region:add",b,e),e},get:function(a){return this._regions[a]},removeRegion:function(a){var b=this._regions[a];this._remove(a,b)},removeRegions:function(){c.each(this._regions,function(a,b){this._remove(b,a)},this)},closeRegions:function(){c.each(this._regions,function(a){a.close()},this)},close:function(){this.removeRegions(),a.Controller.prototype.close.apply(this,arguments)},_store:function(a,b){this._regions[a]=b,this._setLength()},_remove:function(a,b){b.close(),b.stopListening(),delete this._regions[a],this._setLength(),this.triggerMethod("region:remove",a,b)},_setLength:function(){this.length=c.size(this._regions)}});return a.actAsCollection(b.prototype,"_regions"),b}(e),e.TemplateCache=function(a){this.templateId=a},c.extend(e.TemplateCache,{templateCaches:{},get:function(a){var b=this.templateCaches[a];return b||(b=new e.TemplateCache(a),this.templateCaches[a]=b),b.load()},clear:function(){var a,b=f.call(arguments),c=b.length;if(c>0)for(a=0;c>a;a++)delete this.templateCaches[b[a]];else this.templateCaches={}}}),c.extend(e.TemplateCache.prototype,{load:function(){if(this.compiledTemplate)return this.compiledTemplate;var a=this.loadTemplate(this.templateId);return this.compiledTemplate=this.compileTemplate(a),this.compiledTemplate},loadTemplate:function(a){var b=e.$(a).html();return b&&0!==b.length||d("Could not find template: '"+a+"'","NoTemplateError"),b},compileTemplate:function(a){return c.template(a)}}),e.Renderer={render:function(a,b){a||d("Cannot render the template since it's false, null or undefined.","TemplateNotFoundError");var c;return(c="function"==typeof a?a:e.TemplateCache.get(a))(b)}},e.View=b.View.extend({constructor:function(a){c.bindAll(this,"render"),this.options=c.extend({},c.result(this,"options"),c.isFunction(a)?a.call(this):a),this.events=this.normalizeUIKeys(c.result(this,"events")),c.isObject(this.behaviors)&&new e.Behaviors(this),b.View.prototype.constructor.apply(this,arguments),e.MonitorDOMRefresh(this),this.listenTo(this,"show",this.onShowCalled)},triggerMethod:e.triggerMethod,normalizeMethods:e.normalizeMethods,getTemplate:function(){return e.getOption(this,"template")},mixinTemplateHelpers:function(a){a=a||{};var b=e.getOption(this,"templateHelpers");return c.isFunction(b)&&(b=b.call(this)),c.extend(a,b)},normalizeUIKeys:function(a){var b=c.result(this,"ui");return e.normalizeUIKeys(a,b)},configureTriggers:function(){if(this.triggers){var a={},b=this.normalizeUIKeys(c.result(this,"triggers"));return c.each(b,function(b,d){var e=c.isObject(b),f=e?b.event:b;a[d]=function(a){if(a){var c=a.preventDefault,d=a.stopPropagation,g=e?b.preventDefault:c,h=e?b.stopPropagation:d;g&&c&&c.apply(a),h&&d&&d.apply(a)}var i={view:this,model:this.model,collection:this.collection};this.triggerMethod(f,i)}},this),a}},delegateEvents:function(a){this._delegateDOMEvents(a),e.bindEntityEvents(this,this.model,e.getOption(this,"modelEvents")),e.bindEntityEvents(this,this.collection,e.getOption(this,"collectionEvents"))},_delegateDOMEvents:function(a){a=a||this.events,c.isFunction(a)&&(a=a.call(this));var d={},e=c.result(this,"behaviorEvents")||{},f=this.configureTriggers();c.extend(d,e,a,f),b.View.prototype.delegateEvents.call(this,d)},undelegateEvents:function(){var a=Array.prototype.slice.call(arguments);b.View.prototype.undelegateEvents.apply(this,a),e.unbindEntityEvents(this,this.model,e.getOption(this,"modelEvents")),e.unbindEntityEvents(this,this.collection,e.getOption(this,"collectionEvents"))},onShowCalled:function(){},close:function(){if(!this.isClosed){var a=Array.prototype.slice.call(arguments),b=this.triggerMethod.apply(this,["before:close"].concat(a));b!==!1&&(this.isClosed=!0,this.triggerMethod.apply(this,["close"].concat(a)),this.unbindUIElements(),this.remove())}},bindUIElements:function(){if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var a=c.result(this,"_uiBindings");this.ui={},c.each(c.keys(a),function(b){var c=a[b];this.ui[b]=this.$(c)},this)}},unbindUIElements:function(){this.ui&&this._uiBindings&&(c.each(this.ui,function(a,b){delete this.ui[b]},this),this.ui=this._uiBindings,delete this._uiBindings)}}),e.ItemView=e.View.extend({constructor:function(){e.View.prototype.constructor.apply(this,arguments)},serializeData:function(){var a={};return this.model?a=this.model.toJSON():this.collection&&(a={items:this.collection.toJSON()}),a},render:function(){this.isClosed=!1,this.triggerMethod("before:render",this),this.triggerMethod("item:before:render",this);var a=this.serializeData();a=this.mixinTemplateHelpers(a);var b=this.getTemplate(),c=e.Renderer.render(b,a);return this.$el.html(c),this.bindUIElements(),this.triggerMethod("render",this),this.triggerMethod("item:rendered",this),this},close:function(){this.isClosed||(this.triggerMethod("item:before:close"),e.View.prototype.close.apply(this,arguments),this.triggerMethod("item:closed"))}}),e.CollectionView=e.View.extend({itemViewEventPrefix:"itemview",constructor:function(){this._initChildViewStorage(),e.View.prototype.constructor.apply(this,arguments),this._initialEvents(),this.initRenderBuffer()},initRenderBuffer:function(){this.elBuffer=document.createDocumentFragment(),this._bufferedChildren=[]},startBuffering:function(){this.initRenderBuffer(),this.isBuffering=!0},endBuffering:function(){this.isBuffering=!1,this.appendBuffer(this,this.elBuffer),this._triggerShowBufferedChildren(),this.initRenderBuffer()},_triggerShowBufferedChildren:function(){this._isShown&&(c.each(this._bufferedChildren,function(a){e.triggerMethod.call(a,"show")}),this._bufferedChildren=[])},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this.addChildView),this.listenTo(this.collection,"remove",this.removeItemView),this.listenTo(this.collection,"reset",this.render))},addChildView:function(a){this.closeEmptyView();var b=this.getItemView(a),c=this.collection.indexOf(a);this.addItemView(a,b,c)},onShowCalled:function(){this.children.each(function(a){e.triggerMethod.call(a,"show")})},triggerBeforeRender:function(){this.triggerMethod("before:render",this),this.triggerMethod("collection:before:render",this)},triggerRendered:function(){this.triggerMethod("render",this),this.triggerMethod("collection:rendered",this)},render:function(){return this.isClosed=!1,this.triggerBeforeRender(),this._renderChildren(),this.triggerRendered(),this},_renderChildren:function(){this.startBuffering(),this.closeEmptyView(),this.closeChildren(),this.isEmpty(this.collection)?this.showEmptyView():this.showCollection(),this.endBuffering()},showCollection:function(){var a;this.collection.each(function(b,c){a=this.getItemView(b),this.addItemView(b,a,c)},this)},showEmptyView:function(){var a=this.getEmptyView();if(a&&!this._showingEmptyView){this._showingEmptyView=!0;var c=new b.Model;this.addItemView(c,a,0)}},closeEmptyView:function(){this._showingEmptyView&&(this.closeChildren(),delete this._showingEmptyView)},getEmptyView:function(){return e.getOption(this,"emptyView")},getItemView:function(){var a=e.getOption(this,"itemView");return a||d("An `itemView` must be specified","NoItemViewError"),a},addItemView:function(a,b,d){var f=e.getOption(this,"itemViewOptions");c.isFunction(f)&&(f=f.call(this,a,d));var g=this.buildItemView(a,b,f);return this.addChildViewEventForwarding(g),this.triggerMethod("before:item:added",g),this.children.add(g),this.renderItemView(g,d),this._isShown&&!this.isBuffering&&e.triggerMethod.call(g,"show"),this.triggerMethod("after:item:added",g),g},addChildViewEventForwarding:function(a){var b=e.getOption(this,"itemViewEventPrefix");this.listenTo(a,"all",function(){var d=f.call(arguments),g=d[0],h=this.normalizeMethods(this.getItemEvents());d[0]=b+":"+g,d.splice(1,0,a),"undefined"!=typeof h&&c.isFunction(h[g])&&h[g].apply(this,d),e.triggerMethod.apply(this,d)},this)},getItemEvents:function(){return c.isFunction(this.itemEvents)?this.itemEvents.call(this):this.itemEvents},renderItemView:function(a,b){a.render(),this.appendHtml(this,a,b)},buildItemView:function(a,b,d){var e=c.extend({model:a},d);return new b(e)},removeItemView:function(a){var b=this.children.findByModel(a);this.removeChildView(b),this.checkEmpty()},removeChildView:function(a){a&&(a.close?a.close():a.remove&&a.remove(),this.stopListening(a),this.children.remove(a)),this.triggerMethod("item:removed",a)},isEmpty:function(){return!this.collection||0===this.collection.length},checkEmpty:function(){this.isEmpty(this.collection)&&this.showEmptyView()},appendBuffer:function(a,b){a.$el.append(b)},appendHtml:function(a,b){a.isBuffering?(a.elBuffer.appendChild(b.el),a._bufferedChildren.push(b)):a.$el.append(b.el)},_initChildViewStorage:function(){this.children=new b.ChildViewContainer},close:function(){this.isClosed||(this.triggerMethod("collection:before:close"),this.closeChildren(),this.triggerMethod("collection:closed"),e.View.prototype.close.apply(this,arguments))},closeChildren:function(){this.children.each(function(a){this.removeChildView(a)},this),this.checkEmpty()}}),e.CompositeView=e.CollectionView.extend({constructor:function(){e.CollectionView.prototype.constructor.apply(this,arguments)},_initialEvents:function(){this.once("render",function(){this.collection&&(this.listenTo(this.collection,"add",this.addChildView),this.listenTo(this.collection,"remove",this.removeItemView),this.listenTo(this.collection,"reset",this._renderChildren))})},getItemView:function(){var a=e.getOption(this,"itemView")||this.constructor;return a||d("An `itemView` must be specified","NoItemViewError"),a},serializeData:function(){var a={};return this.model&&(a=this.model.toJSON()),a},render:function(){this.isRendered=!0,this.isClosed=!1,this.resetItemViewContainer(),this.triggerBeforeRender();var a=this.renderModel();return this.$el.html(a),this.bindUIElements(),this.triggerMethod("composite:model:rendered"),this._renderChildren(),this.triggerMethod("composite:rendered"),this.triggerRendered(),this},_renderChildren:function(){this.isRendered&&(this.triggerMethod("composite:collection:before:render"),e.CollectionView.prototype._renderChildren.call(this),this.triggerMethod("composite:collection:rendered"))},renderModel:function(){var a={};a=this.serializeData(),a=this.mixinTemplateHelpers(a);var b=this.getTemplate();return e.Renderer.render(b,a)},appendBuffer:function(a,b){var c=this.getItemViewContainer(a);c.append(b)},appendHtml:function(a,b){if(a.isBuffering)a.elBuffer.appendChild(b.el),a._bufferedChildren.push(b);else{var c=this.getItemViewContainer(a);c.append(b.el)}},getItemViewContainer:function(a){if("$itemViewContainer"in a)return a.$itemViewContainer;var b,f=e.getOption(a,"itemViewContainer");if(f){var g=c.isFunction(f)?f.call(a):f;b="@"===g.charAt(0)&&a.ui?a.ui[g.substr(4)]:a.$(g),b.length<=0&&d("The specified `itemViewContainer` was not found: "+a.itemViewContainer,"ItemViewContainerMissingError")}else b=a.$el;return a.$itemViewContainer=b,b},resetItemViewContainer:function(){this.$itemViewContainer&&delete this.$itemViewContainer}}),e.Layout=e.ItemView.extend({regionType:e.Region,constructor:function(a){a=a||{},this._firstRender=!0,this._initializeRegions(a),e.ItemView.prototype.constructor.call(this,a)},render:function(){return this.isClosed&&this._initializeRegions(),this._firstRender?this._firstRender=!1:this.isClosed||this._reInitializeRegions(),e.ItemView.prototype.render.apply(this,arguments)},close:function(){this.isClosed||(this.regionManager.close(),e.ItemView.prototype.close.apply(this,arguments))},addRegion:function(a,b){var c={};return c[a]=b,this._buildRegions(c)[a]},addRegions:function(a){return this.regions=c.extend({},this.regions,a),this._buildRegions(a)},removeRegion:function(a){return delete this.regions[a],this.regionManager.removeRegion(a)},getRegion:function(a){return this.regionManager.get(a)},_buildRegions:function(a){var b=this,c={regionType:e.getOption(this,"regionType"),parentEl:function(){return b.$el}};return this.regionManager.addRegions(a,c)},_initializeRegions:function(a){var b;this._initRegionManager(),b=c.isFunction(this.regions)?this.regions(a):this.regions||{},this.addRegions(b)},_reInitializeRegions:function(){this.regionManager.closeRegions(),this.regionManager.each(function(a){a.reset()})},_initRegionManager:function(){this.regionManager=new e.RegionManager,this.listenTo(this.regionManager,"region:add",function(a,b){this[a]=b,this.trigger("region:add",a,b)}),this.listenTo(this.regionManager,"region:remove",function(a,b){delete this[a],this.trigger("region:remove",a,b)})}}),e.Behavior=function(a,b){function c(b,c){this.view=c,this.defaults=a.result(this,"defaults")||{},this.options=a.extend({},this.defaults,b),this.$=function(){return this.view.$.apply(this.view,arguments)},this.initialize.apply(this,arguments)}return a.extend(c.prototype,b.Events,{initialize:function(){},close:function(){this.stopListening()},triggerMethod:e.triggerMethod}),c.extend=e.extend,c}(c,b),e.Behaviors=function(a,b){function c(a){this.behaviors=c.parseBehaviors(a,b.result(a,"behaviors")),c.wrap(a,this.behaviors,["bindUIElements","unbindUIElements","delegateEvents","undelegateEvents","onShow","onClose","behaviorEvents","triggerMethod","setElement","close"])}var d={setElement:function(a,c){a.apply(this,b.tail(arguments,2)),b.each(c,function(a){a.$el=this.$el},this)},close:function(a,c){var d=b.tail(arguments,2);a.apply(this,d),b.invoke(c,"close",d)},onShow:function(c,d){var e=b.tail(arguments,2);b.each(d,function(b){a.triggerMethod.apply(b,["show"].concat(e))}),b.isFunction(c)&&c.apply(this,e)},onClose:function(c,d){var e=b.tail(arguments,2);b.each(d,function(b){a.triggerMethod.apply(b,["close"].concat(e))}),b.isFunction(c)&&c.apply(this,e)},bindUIElements:function(a,c){a.apply(this),b.invoke(c,a)},unbindUIElements:function(a,c){a.apply(this),b.invoke(c,a)},triggerMethod:function(a,c){var d=b.tail(arguments,2);a.apply(this,d),b.each(c,function(b){a.apply(b,d)})},delegateEvents:function(c,d){var e=b.tail(arguments,2);c.apply(this,e),b.each(d,function(b){a.bindEntityEvents(b,this.model,a.getOption(b,"modelEvents")),a.bindEntityEvents(b,this.collection,a.getOption(b,"collectionEvents"))},this)},undelegateEvents:function(c,d){var e=b.tail(arguments,2);c.apply(this,e),b.each(d,function(b){a.unbindEntityEvents(b,this.model,a.getOption(b,"modelEvents")),a.unbindEntityEvents(b,this.collection,a.getOption(b,"collectionEvents"))},this)},behaviorEvents:function(c,d){var e={},f=b.result(this,"ui");return b.each(d,function(c,d){var g={},h=b.result(c,"events")||{},i=b.result(c,"ui"),j=b.extend({},f,i);h=a.normalizeUIKeys(h,j),b.each(b.keys(h),function(a){var e=new Array(d+2).join(" "),f=a+e,i=b.isFunction(h[a])?h[a]:c[h[a]];g[f]=b.bind(i,c)}),e=b.extend(e,g)}),e}};return b.extend(c,{behaviorsLookup:function(){throw new Error("You must define where your behaviors are stored. See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.behaviors.md#behaviorslookup")},getBehaviorClass:function(a,d){return a.behaviorClass?a.behaviorClass:b.isFunction(c.behaviorsLookup)?c.behaviorsLookup.apply(this,arguments)[d]:c.behaviorsLookup[d]},parseBehaviors:function(a,d){return b.map(d,function(b,d){var e=c.getBehaviorClass(b,d);return new e(b,a)})},wrap:function(a,c,e){b.each(e,function(e){a[e]=b.partial(d[e],a[e],c)})}}),c}(e,c),e.AppRouter=b.Router.extend({constructor:function(a){b.Router.prototype.constructor.apply(this,arguments),this.options=a||{};var c=e.getOption(this,"appRoutes"),d=this._getController();this.processAppRoutes(d,c),this.on("route",this._processOnRoute,this)},appRoute:function(a,b){var c=this._getController();this._addAppRoute(c,a,b)},_processOnRoute:function(a,b){var d=c.invert(this.appRoutes)[a];c.isFunction(this.onRoute)&&this.onRoute(a,d,b)},processAppRoutes:function(a,b){if(b){var d=c.keys(b).reverse();c.each(d,function(c){this._addAppRoute(a,c,b[c])},this)}},_getController:function(){return e.getOption(this,"controller")},_addAppRoute:function(a,b,e){var f=a[e];f||d("Method '"+e+"' was not found on the controller"),this.route(b,e,c.bind(f,a))}}),e.Application=function(a){this._initRegionManager(),this._initCallbacks=new e.Callbacks,this.vent=new b.Wreqr.EventAggregator,this.commands=new b.Wreqr.Commands,this.reqres=new b.Wreqr.RequestResponse,this.submodules={},c.extend(this,a),this.triggerMethod=e.triggerMethod},c.extend(e.Application.prototype,b.Events,{execute:function(){this.commands.execute.apply(this.commands,arguments)},request:function(){return this.reqres.request.apply(this.reqres,arguments)},addInitializer:function(a){this._initCallbacks.add(a)},start:function(a){this.triggerMethod("initialize:before",a),this._initCallbacks.run(a,this),this.triggerMethod("initialize:after",a),this.triggerMethod("start",a)},addRegions:function(a){return this._regionManager.addRegions(a)},closeRegions:function(){this._regionManager.closeRegions()},removeRegion:function(a){this._regionManager.removeRegion(a)},getRegion:function(a){return this._regionManager.get(a)},module:function(a,b){var c=e.Module.getClass(b),d=f.call(arguments);return d.unshift(this),c.create.apply(c,d)},_initRegionManager:function(){this._regionManager=new e.RegionManager,this.listenTo(this._regionManager,"region:add",function(a,b){this[a]=b}),this.listenTo(this._regionManager,"region:remove",function(a){delete this[a]})}}),e.Application.extend=e.extend,e.Module=function(a,b,d){this.moduleName=a,this.options=c.extend({},this.options,d),this.initialize=d.initialize||this.initialize,this.submodules={},this._setupInitializersAndFinalizers(),this.app=b,this.startWithParent=!0,this.triggerMethod=e.triggerMethod,c.isFunction(this.initialize)&&this.initialize(this.options,a,b)},e.Module.extend=e.extend,c.extend(e.Module.prototype,b.Events,{initialize:function(){},addInitializer:function(a){this._initializerCallbacks.add(a)},addFinalizer:function(a){this._finalizerCallbacks.add(a)},start:function(a){this._isInitialized||(c.each(this.submodules,function(b){b.startWithParent&&b.start(a)}),this.triggerMethod("before:start",a),this._initializerCallbacks.run(a,this),this._isInitialized=!0,this.triggerMethod("start",a))},stop:function(){this._isInitialized&&(this._isInitialized=!1,e.triggerMethod.call(this,"before:stop"),c.each(this.submodules,function(a){a.stop()}),this._finalizerCallbacks.run(void 0,this),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),e.triggerMethod.call(this,"stop"))},addDefinition:function(a,b){this._runModuleDefinition(a,b)},_runModuleDefinition:function(a,d){if(a){var f=c.flatten([this,this.app,b,e,e.$,c,d]);a.apply(this,f)}},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new e.Callbacks,this._finalizerCallbacks=new e.Callbacks}}),c.extend(e.Module,{create:function(a,b,d){var e=a,g=f.call(arguments);g.splice(0,3),b=b.split(".");var h=b.length,i=[];return i[h-1]=d,c.each(b,function(b,c){var f=e;e=this._getModule(f,b,a,d),this._addModuleDefinition(f,e,i[c],g)},this),e},_getModule:function(a,b,d,e){var f=c.extend({},e),g=this.getClass(e),h=a[b];return h||(h=new g(b,d,f),a[b]=h,a.submodules[b]=h),h},getClass:function(a){var b=e.Module;return a?a.prototype instanceof b?a:a.moduleClass||b:b},_addModuleDefinition:function(a,b,c,d){var e=this._getDefine(c),f=this._getStartWithParent(c,b);e&&b.addDefinition(e,d),this._addStartWithParent(a,b,f)},_getStartWithParent:function(a,b){var d;return c.isFunction(a)&&a.prototype instanceof e.Module?(d=b.constructor.prototype.startWithParent,c.isUndefined(d)?!0:d):c.isObject(a)?(d=a.startWithParent,c.isUndefined(d)?!0:d):!0},_getDefine:function(a){return!c.isFunction(a)||a.prototype instanceof e.Module?c.isObject(a)?a.define:null:a},_addStartWithParent:function(a,b,c){b.startWithParent=b.startWithParent&&c,b.startWithParent&&!b.startWithParentIsConfigured&&(b.startWithParentIsConfigured=!0,a.addInitializer(function(a){b.startWithParent&&b.start(a)}))}}),e}(this,Backbone,_);
//# sourceMappingURL=backbone.marionette.map;
return root.Marionette = Marionette;
  }).apply(root, arguments);
});
}(this));

(function(root) {
define("bootstrap", [], function() {
  return (function() {
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);

  }).apply(root, arguments);
});
}(this));

(function(n){typeof define=="function"&&define.amd?define('jqueryUI',["jquery"],n):n(jQuery)})(function(n){function o(t,i){var r,u,f,e=t.nodeName.toLowerCase();return"area"===e?(r=t.parentNode,u=r.name,!t.href||!u||r.nodeName.toLowerCase()!=="map")?!1:(f=n("img[usemap='#"+u+"']")[0],!!f&&s(f)):(/input|select|textarea|button|object/.test(e)?!t.disabled:"a"===e?t.href||i:i)&&s(t)}function s(t){return n.expr.filters.visible(t)&&!n(t).parents().addBack().filter(function(){return n.css(this,"visibility")==="hidden"}).length}function ut(n){for(var t,i;n.length&&n[0]!==document;){if(t=n.css("position"),(t==="absolute"||t==="relative"||t==="fixed")&&(i=parseInt(n.css("zIndex"),10),!isNaN(i)&&i!==0))return i;n=n.parent()}return 0}function v(){this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._datepickerShowing=!1;this._inDialog=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};n.extend(this._defaults,this.regional[""]);this.regional.en=n.extend(!0,{},this.regional[""]);this.regional["en-US"]=n.extend(!0,{},this.regional.en);this.dpDiv=y(n("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))}function y(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){n(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!==-1&&n(this).removeClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!==-1&&n(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",p)}function p(){n.datepicker._isDisabledDatepicker(r.inline?r.dpDiv.parent()[0]:r.input[0])||(n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),n(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&n(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&n(this).addClass("ui-datepicker-next-hover"))}function u(t,i){n.extend(t,i);for(var r in i)i[r]==null&&(t[r]=i[r]);return t}function t(n){return function(){var t=this.element.val();n.apply(this,arguments);this._refresh();t!==this.element.val()&&this._trigger("change")}}var h,f,k,i,d,g,nt,tt,rt,r;n.ui=n.ui||{};n.extend(n.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});n.fn.extend({scrollParent:function(t){var i=this.css("position"),u=i==="absolute",f=t?/(auto|scroll|hidden)/:/(auto|scroll)/,r=this.parents().filter(function(){var t=n(this);return u&&t.css("position")==="static"?!1:f.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return i==="fixed"||!r.length?n(this[0].ownerDocument||document):r},uniqueId:function(){var n=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&n(this).removeAttr("id")})}});n.extend(n.expr[":"],{data:n.expr.createPseudo?n.expr.createPseudo(function(t){return function(i){return!!n.data(i,t)}}):function(t,i,r){return!!n.data(t,r[3])},focusable:function(t){return o(t,!isNaN(n.attr(t,"tabindex")))},tabbable:function(t){var i=n.attr(t,"tabindex"),r=isNaN(i);return(r||i>=0)&&o(t,!r)}});n("<a>").outerWidth(1).jquery||n.each(["Width","Height"],function(t,i){function f(t,i,r,u){return n.each(e,function(){i-=parseFloat(n.css(t,"padding"+this))||0;r&&(i-=parseFloat(n.css(t,"border"+this+"Width"))||0);u&&(i-=parseFloat(n.css(t,"margin"+this))||0)}),i}var e=i==="Width"?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),u={innerWidth:n.fn.innerWidth,innerHeight:n.fn.innerHeight,outerWidth:n.fn.outerWidth,outerHeight:n.fn.outerHeight};n.fn["inner"+i]=function(t){return t===undefined?u["inner"+i].call(this):this.each(function(){n(this).css(r,f(this,t)+"px")})};n.fn["outer"+i]=function(t,e){return typeof t!="number"?u["outer"+i].call(this,t):this.each(function(){n(this).css(r,f(this,t,!0,e)+"px")})}});n.fn.addBack||(n.fn.addBack=function(n){return this.add(n==null?this.prevObject:this.prevObject.filter(n))});n("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(n.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,n.camelCase(i)):t.call(this)}}(n.fn.removeData));n.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());n.fn.extend({focus:function(t){return function(i,r){return typeof i=="number"?this.each(function(){var t=this;setTimeout(function(){n(t).focus();r&&r.call(t)},i)}):t.apply(this,arguments)}}(n.fn.focus),disableSelection:function(){var n="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(n+".ui-disableSelection",function(n){n.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined)return this.css("zIndex",t);if(this.length)for(var i=n(this[0]),r,u;i.length&&i[0]!==document;){if(r=i.css("position"),(r==="absolute"||r==="relative"||r==="fixed")&&(u=parseInt(i.css("zIndex"),10),!isNaN(u)&&u!==0))return u;i=i.parent()}return 0}});n.ui.plugin={add:function(t,i,r){var u,f=n.ui[t].prototype;for(u in r)f.plugins[u]=f.plugins[u]||[],f.plugins[u].push([i,r[u]])},call:function(n,t,i,r){var u,f=n.plugins[t];if(f&&(r||n.element[0].parentNode&&n.element[0].parentNode.nodeType!==11))for(u=0;u<f.length;u++)n.options[f[u][0]]&&f[u][1].apply(n.element,i)}};h=0;f=Array.prototype.slice;n.cleanData=function(t){return function(i){for(var r,u,f=0;(u=i[f])!=null;f++)try{r=n._data(u,"events");r&&r.remove&&n(u).triggerHandler("remove")}catch(e){}t(i)}}(n.cleanData);n.widget=function(t,i,r){var s,f,u,o,h={},e=t.split(".")[0];return t=t.split(".")[1],s=e+"-"+t,r||(r=i,i=n.Widget),n.expr[":"][s.toLowerCase()]=function(t){return!!n.data(t,s)},n[e]=n[e]||{},f=n[e][t],u=n[e][t]=function(n,t){if(!this._createWidget)return new u(n,t);arguments.length&&this._createWidget(n,t)},n.extend(u,f,{version:r.version,_proto:n.extend({},r),_childConstructors:[]}),o=new i,o.options=n.widget.extend({},o.options),n.each(r,function(t,r){if(!n.isFunction(r)){h[t]=r;return}h[t]=function(){var n=function(){return i.prototype[t].apply(this,arguments)},u=function(n){return i.prototype[t].apply(this,n)};return function(){var i=this._super,f=this._superApply,t;return this._super=n,this._superApply=u,t=r.apply(this,arguments),this._super=i,this._superApply=f,t}}()}),u.prototype=n.widget.extend(o,{widgetEventPrefix:f?o.widgetEventPrefix||t:t},h,{constructor:u,namespace:e,widgetName:t,widgetFullName:s}),f?(n.each(f._childConstructors,function(t,i){var r=i.prototype;n.widget(r.namespace+"."+r.widgetName,u,i._proto)}),delete f._childConstructors):i._childConstructors.push(u),n.widget.bridge(t,u),u};n.widget.extend=function(t){for(var e=f.call(arguments,1),u=0,o=e.length,i,r;u<o;u++)for(i in e[u])r=e[u][i],e[u].hasOwnProperty(i)&&r!==undefined&&(t[i]=n.isPlainObject(r)?n.isPlainObject(t[i])?n.widget.extend({},t[i],r):n.widget.extend({},r):r);return t};n.widget.bridge=function(t,i){var r=i.prototype.widgetFullName||t;n.fn[t]=function(u){var s=typeof u=="string",o=f.call(arguments,1),e=this;return u=!s&&o.length?n.widget.extend.apply(null,[u].concat(o)):u,s?this.each(function(){var i,f=n.data(this,r);return u==="instance"?(e=f,!1):f?!n.isFunction(f[u])||u.charAt(0)==="_"?n.error("no such method '"+u+"' for "+t+" widget instance"):(i=f[u].apply(f,o),i!==f&&i!==undefined?(e=i&&i.jquery?e.pushStack(i.get()):i,!1):void 0):n.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+u+"'")}):this.each(function(){var t=n.data(this,r);t?(t.option(u||{}),t._init&&t._init()):n.data(this,r,new i(u,this))}),e}};n.Widget=function(){};n.Widget._childConstructors=[];n.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=n(i||this.defaultElement||this)[0];this.element=n(i);this.uuid=h++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=n();this.hoverable=n();this.focusable=n();i!==this&&(n.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(n){n.target===i&&this.destroy()}}),this.document=n(i.style?i.ownerDocument:i.document||i),this.window=n(this.document[0].defaultView||this.document[0].parentWindow));this.options=n.widget.extend({},this.options,this._getCreateOptions(),t);this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:n.noop,_getCreateEventData:n.noop,_create:n.noop,_init:n.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:n.noop,widget:function(){return this.element},option:function(t,i){var e=t,r,u,f;if(arguments.length===0)return n.widget.extend({},this.options);if(typeof t=="string")if(e={},r=t.split("."),t=r.shift(),r.length){for(u=e[t]=n.widget.extend({},this.options[t]),f=0;f<r.length-1;f++)u[r[f]]=u[r[f]]||{},u=u[r[f]];if(t=r.pop(),arguments.length===1)return u[t]===undefined?null:u[t];u[t]=i}else{if(arguments.length===1)return this.options[t]===undefined?null:this.options[t];e[t]=i}return this._setOptions(e),this},_setOptions:function(n){for(var t in n)this._setOption(t,n[t]);return this},_setOption:function(n,t){return this.options[n]=t,n==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,r){var f,u=this;typeof t!="boolean"&&(r=i,i=t,t=!1);r?(i=f=n(i),this.bindings=this.bindings.add(i)):(r=i,i=this.element,f=this.widget());n.each(r,function(r,e){function o(){if(t||u.options.disabled!==!0&&!n(this).hasClass("ui-state-disabled"))return(typeof e=="string"?u[e]:e).apply(u,arguments)}typeof e!="string"&&(o.guid=e.guid=e.guid||o.guid||n.guid++);var s=r.match(/^([\w:-]*)\s*(.*)$/),h=s[1]+u.eventNamespace,c=s[2];c?f.delegate(c,h,o):i.bind(h,o)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;t.unbind(i).undelegate(i);this.bindings=n(this.bindings.not(t).get());this.focusable=n(this.focusable.not(t).get());this.hoverable=n(this.hoverable.not(t).get())},_delay:function(n,t){function r(){return(typeof n=="string"?i[n]:n).apply(i,arguments)}var i=this;return setTimeout(r,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t);this._on(t,{mouseenter:function(t){n(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){n(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t);this._on(t,{focusin:function(t){n(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){n(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,r){var u,f,e=this.options[t];if(r=r||{},i=n.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],f=i.originalEvent,f)for(u in f)u in i||(i[u]=f[u]);return this.element.trigger(i,r),!(n.isFunction(e)&&e.apply(this.element[0],[i].concat(r))===!1||i.isDefaultPrevented())}};n.each({show:"fadeIn",hide:"fadeOut"},function(t,i){n.Widget.prototype["_"+t]=function(r,u,f){typeof u=="string"&&(u={effect:u});var o,e=u?u===!0||typeof u=="number"?i:u.effect||i:t;u=u||{};typeof u=="number"&&(u={duration:u});o=!n.isEmptyObject(u);u.complete=f;u.delay&&r.delay(u.delay);o&&n.effects&&n.effects.effect[e]?r[t](u):e!==t&&r[e]?r[e](u.duration,u.easing,f):r.queue(function(i){n(this)[t]();f&&f.call(r[0]);i()})}});k=n.widget;i=!1;n(document).mouseup(function(){i=!1});d=n.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(n){return t._mouseDown(n)}).bind("click."+this.widgetName,function(i){if(!0===n.data(i.target,t.widgetName+".preventClickEvent"))return n.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1});this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!i){this._mouseMoved=!1;this._mouseStarted&&this._mouseUp(t);this._mouseDownEvent=t;var r=this,u=t.which===1,f=typeof this.options.cancel=="string"&&t.target.nodeName?n(t.target).closest(this.options.cancel).length:!1;return!u||f||!this._mouseCapture(t)?!0:(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted))?(t.preventDefault(),!0):(!0===n.data(t.target,this.widgetName+".preventClickEvent")&&n.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(n){return r._mouseMove(n)},this._mouseUpDelegate=function(n){return r._mouseUp(n)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),i=!0,!0)}},_mouseMove:function(t){return this._mouseMoved&&(n.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button||!t.which)?this._mouseUp(t):((t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted)?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&n.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),i=!1,!1},_mouseDistanceMet:function(n){return Math.max(Math.abs(this._mouseDownEvent.pageX-n.pageX),Math.abs(this._mouseDownEvent.pageY-n.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function a(n,t,i){return[parseFloat(n[0])*(l.test(n[0])?t/100:1),parseFloat(n[1])*(l.test(n[1])?i/100:1)]}function r(t,i){return parseInt(n.css(t,i),10)||0}function y(t){var i=t[0];return i.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:n.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}n.ui=n.ui||{};var u,f,i=Math.max,t=Math.abs,e=Math.round,o=/left|center|right/,s=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,l=/%$/,v=n.fn.position;n.position={scrollbarWidth:function(){if(u!==undefined)return u;var r,i,t=n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),f=t.children()[0];return n("body").append(t),r=f.offsetWidth,t.css("overflow","scroll"),i=f.offsetWidth,r===i&&(i=t[0].clientWidth),t.remove(),u=r-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),r=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),u=i==="scroll"||i==="auto"&&t.width<t.element[0].scrollWidth,f=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:f?n.position.scrollbarWidth():0,height:u?n.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=n(t||window),r=n.isWindow(i[0]),u=!!i[0]&&i[0].nodeType===9;return{element:i,isWindow:r,isDocument:u,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:r||u?i.width():i.outerWidth(),height:r||u?i.height():i.outerHeight()}}};n.fn.position=function(u){if(!u||!u.of)return v.apply(this,arguments);u=n.extend({},u);var k,l,p,b,w,g,nt=n(u.of),it=n.position.getWithinInfo(u.within),rt=n.position.getScrollInfo(it),d=(u.collision||"flip").split(" "),tt={};return g=y(nt),nt[0].preventDefault&&(u.at="left top"),l=g.width,p=g.height,b=g.offset,w=n.extend({},b),n.each(["my","at"],function(){var n=(u[this]||"").split(" "),t,i;n.length===1&&(n=o.test(n[0])?n.concat(["center"]):s.test(n[0])?["center"].concat(n):["center","center"]);n[0]=o.test(n[0])?n[0]:"center";n[1]=s.test(n[1])?n[1]:"center";t=h.exec(n[0]);i=h.exec(n[1]);tt[this]=[t?t[0]:0,i?i[0]:0];u[this]=[c.exec(n[0])[0],c.exec(n[1])[0]]}),d.length===1&&(d[1]=d[0]),u.at[0]==="right"?w.left+=l:u.at[0]==="center"&&(w.left+=l/2),u.at[1]==="bottom"?w.top+=p:u.at[1]==="center"&&(w.top+=p/2),k=a(tt.at,l,p),w.left+=k[0],w.top+=k[1],this.each(function(){var y,g,s=n(this),h=s.outerWidth(),c=s.outerHeight(),ut=r(this,"marginLeft"),ft=r(this,"marginTop"),et=h+ut+r(this,"marginRight")+rt.width,ot=c+ft+r(this,"marginBottom")+rt.height,o=n.extend({},w),v=a(tt.my,s.outerWidth(),s.outerHeight());u.my[0]==="right"?o.left-=h:u.my[0]==="center"&&(o.left-=h/2);u.my[1]==="bottom"?o.top-=c:u.my[1]==="center"&&(o.top-=c/2);o.left+=v[0];o.top+=v[1];f||(o.left=e(o.left),o.top=e(o.top));y={marginLeft:ut,marginTop:ft};n.each(["left","top"],function(t,i){n.ui.position[d[t]]&&n.ui.position[d[t]][i](o,{targetWidth:l,targetHeight:p,elemWidth:h,elemHeight:c,collisionPosition:y,collisionWidth:et,collisionHeight:ot,offset:[k[0]+v[0],k[1]+v[1]],my:u.my,at:u.at,within:it,elem:s})});u.using&&(g=function(n){var r=b.left-o.left,a=r+l-h,f=b.top-o.top,v=f+p-c,e={target:{element:nt,left:b.left,top:b.top,width:l,height:p},element:{element:s,left:o.left,top:o.top,width:h,height:c},horizontal:a<0?"left":r>0?"right":"center",vertical:v<0?"top":f>0?"bottom":"middle"};l<h&&t(r+a)<l&&(e.horizontal="center");p<c&&t(f+v)<p&&(e.vertical="middle");e.important=i(t(r),t(a))>i(t(f),t(v))?"horizontal":"vertical";u.using.call(this,n,e)});s.offset(n.extend(o,{using:g}))})};n.ui.position={fit:{left:function(n,t){var e=t.within,u=e.isWindow?e.scrollLeft:e.offset.left,o=e.width,s=n.left-t.collisionPosition.marginLeft,r=u-s,f=s+t.collisionWidth-o-u,h;t.collisionWidth>o?r>0&&f<=0?(h=n.left+r+t.collisionWidth-o-u,n.left+=r-h):n.left=f>0&&r<=0?u:r>f?u+o-t.collisionWidth:u:r>0?n.left+=r:f>0?n.left-=f:n.left=i(n.left-s,n.left)},top:function(n,t){var o=t.within,u=o.isWindow?o.scrollTop:o.offset.top,e=t.within.height,s=n.top-t.collisionPosition.marginTop,r=u-s,f=s+t.collisionHeight-e-u,h;t.collisionHeight>e?r>0&&f<=0?(h=n.top+r+t.collisionHeight-e-u,n.top+=r-h):n.top=f>0&&r<=0?u:r>f?u+e-t.collisionHeight:u:r>0?n.top+=r:f>0?n.top-=f:n.top=i(n.top-s,n.top)}},flip:{left:function(n,i){var r=i.within,y=r.offset.left+r.scrollLeft,c=r.width,o=r.isWindow?r.scrollLeft:r.offset.left,l=n.left-i.collisionPosition.marginLeft,a=l-o,v=l+i.collisionWidth-c-o,u=i.my[0]==="left"?-i.elemWidth:i.my[0]==="right"?i.elemWidth:0,f=i.at[0]==="left"?i.targetWidth:i.at[0]==="right"?-i.targetWidth:0,e=-2*i.offset[0],s,h;a<0?(s=n.left+u+f+e+i.collisionWidth-c-y,(s<0||s<t(a))&&(n.left+=u+f+e)):v>0&&(h=n.left-i.collisionPosition.marginLeft+u+f+e-o,(h>0||t(h)<v)&&(n.left+=u+f+e))},top:function(n,i){var r=i.within,y=r.offset.top+r.scrollTop,a=r.height,o=r.isWindow?r.scrollTop:r.offset.top,v=n.top-i.collisionPosition.marginTop,s=v-o,h=v+i.collisionHeight-a-o,p=i.my[1]==="top",u=p?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,f=i.at[1]==="top"?i.targetHeight:i.at[1]==="bottom"?-i.targetHeight:0,e=-2*i.offset[1],c,l;s<0?(l=n.top+u+f+e+i.collisionHeight-a-y,n.top+u+f+e>s&&(l<0||l<t(s))&&(n.top+=u+f+e)):h>0&&(c=n.top-i.collisionPosition.marginTop+u+f+e-o,n.top+u+f+e>h&&(c>0||t(c)<h)&&(n.top+=u+f+e))}},flipfit:{left:function(){n.ui.position.flip.left.apply(this,arguments);n.ui.position.fit.left.apply(this,arguments)},top:function(){n.ui.position.flip.top.apply(this,arguments);n.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,r,u,e,o=document.getElementsByTagName("body")[0],s=document.createElement("div");t=document.createElement(o?"div":"body");r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};o&&n.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(e in r)t.style[e]=r[e];t.appendChild(s);i=o||document.documentElement;i.insertBefore(t,i.firstChild);s.style.cssText="position: absolute; left: 10.7432222px;";u=n(s).offset().left;f=u>10&&u<11;t.innerHTML="";i.removeChild(t)}()}();g=n.ui.position;n.widget("ui.draggable",n.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&this._setPositionRelative();this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._setHandleClassName();this._mouseInit()},_setOption:function(n,t){this._super(n,t);n==="handle"&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=!0;return}this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._removeHandleClassName();this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return(this._blurActiveElement(t),this.helper||i.disabled||n(t.target).closest(".ui-resizable-handle").length>0)?!1:(this.handle=this._getHandle(t),!this.handle)?!1:(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=n(this);return n("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&i.activeElement.nodeName.toLowerCase()!=="body"&&n(i.activeElement).blur()}catch(r){}},_mouseStart:function(t){var i=this.options;return(this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),n.ui.ddmanager&&(n.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return n(this).css("position")==="fixed"}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1)?(this._clear(),!1):(this._cacheHelperProportions(),n.ui.ddmanager&&!i.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),n.ui.ddmanager&&n.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(n){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:n.pageX-this.offset.left,top:n.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",n.ui.ddmanager&&n.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var r=this,i=!1;return n.ui.ddmanager&&!this.options.dropBehaviour&&(i=n.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),this.options.revert==="invalid"&&!i||this.options.revert==="valid"&&i||this.options.revert===!0||n.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?n(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),n.ui.ddmanager&&n.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),n.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!n(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var r=this.options,u=n.isFunction(r.helper),i=u?n(r.helper.apply(this.element[0],[t])):r.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo(r.appendTo==="parent"?this.element[0].parentNode:r.appendTo),u&&i[0]===this.element[0]&&this._setPositionRelative(),i[0]===this.element[0]||/(fixed|absolute)/.test(i.css("position"))||i.css("position","absolute"),i},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" "));n.isArray(t)&&(t={left:+t[0],top:+t[1]||0});"left"in t&&(this.offset.click.left=t.left+this.margins.left);"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left);"top"in t&&(this.offset.click.top=t.top+this.margins.top);"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(n){return/(html|body)/i.test(n.tagName)||n===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return this.cssPosition==="absolute"&&this.scrollParent[0]!==i&&n.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition!=="relative")return{top:0,left:0};var n=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:n.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:n.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var f,t,i,r=this.options,u=this.document[0];if(this.relativeContainer=null,!r.containment){this.containment=null;return}if(r.containment==="window"){this.containment=[n(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,n(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,n(window).scrollLeft()+n(window).width()-this.helperProportions.width-this.margins.left,n(window).scrollTop()+(n(window).height()||u.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(r.containment==="document"){this.containment=[0,0,n(u).width()-this.helperProportions.width-this.margins.left,(n(u).height()||u.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(r.containment.constructor===Array){this.containment=r.containment;return}(r.containment==="parent"&&(r.containment=this.helper[0].parentNode),t=n(r.containment),i=t[0],i)&&(f=/(scroll|auto)/.test(t.css("overflow")),this.containment=[(parseInt(t.css("borderLeftWidth"),10)||0)+(parseInt(t.css("paddingLeft"),10)||0),(parseInt(t.css("borderTopWidth"),10)||0)+(parseInt(t.css("paddingTop"),10)||0),(f?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(t.css("borderRightWidth"),10)||0)-(parseInt(t.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(t.css("borderBottomWidth"),10)||0)-(parseInt(t.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=t)},_convertPositionTo:function(n,t){t||(t=this.position);var i=n==="absolute"?1:-1,r=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-(this.cssPosition==="fixed"?-this.offset.scroll.top:r?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-(this.cssPosition==="fixed"?-this.offset.scroll.left:r?0:this.offset.scroll.left)*i}},_generatePosition:function(n,t){var i,s,u,f,r=this.options,h=this._isRootNode(this.scrollParent[0]),e=n.pageX,o=n.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,n.pageX-this.offset.click.left<i[0]&&(e=i[0]+this.offset.click.left),n.pageY-this.offset.click.top<i[1]&&(o=i[1]+this.offset.click.top),n.pageX-this.offset.click.left>i[2]&&(e=i[2]+this.offset.click.left),n.pageY-this.offset.click.top>i[3]&&(o=i[3]+this.offset.click.top)),r.grid&&(u=r.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,o=i?u-this.offset.click.top>=i[1]||u-this.offset.click.top>i[3]?u:u-this.offset.click.top>=i[1]?u-r.grid[1]:u+r.grid[1]:u,f=r.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,e=i?f-this.offset.click.left>=i[0]||f-this.offset.click.left>i[2]?f:f-this.offset.click.left>=i[0]?f-r.grid[0]:f+r.grid[0]:f),r.axis==="y"&&(e=this.originalPageX),r.axis==="x"&&(o=this.originalPageY)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove();this.helper=null;this.cancelHelperRemoval=!1;this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){this.options.axis!=="y"&&this.helper.css("right")!=="auto"&&(this.helper.width(this.helper.width()),this.helper.css("right","auto"));this.options.axis!=="x"&&this.helper.css("bottom")!=="auto"&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,r){return r=r||this._uiHash(),n.ui.plugin.call(this,t,[i,r,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),r.offset=this.positionAbs),n.Widget.prototype._trigger.call(this,t,i,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});n.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,r){var u=n.extend({},i,{item:r.element});r.sortables=[];n(r.options.connectToSortable).each(function(){var i=n(this).sortable("instance");i&&!i.options.disabled&&(r.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,u))})},stop:function(t,i,r){var u=n.extend({},i,{item:r.element});r.cancelHelperRemoval=!1;n.each(r.sortables,function(){var n=this;n.isOver?(n.isOver=0,r.cancelHelperRemoval=!0,n.cancelHelperRemoval=!1,n._storedCSS={position:n.placeholder.css("position"),top:n.placeholder.css("top"),left:n.placeholder.css("left")},n._mouseStop(t),n.options.helper=n.options._helper):(n.cancelHelperRemoval=!0,n._trigger("deactivate",t,u))})},drag:function(t,i,r){n.each(r.sortables,function(){var f=!1,u=this;u.positionAbs=r.positionAbs;u.helperProportions=r.helperProportions;u.offset.click=r.offset.click;u._intersectsWith(u.containerCache)&&(f=!0,n.each(r.sortables,function(){return this.positionAbs=r.positionAbs,this.helperProportions=r.helperProportions,this.offset.click=r.offset.click,this!==u&&this._intersectsWith(this.containerCache)&&n.contains(u.element[0],this.element[0])&&(f=!1),f}));f?(u.isOver||(u.isOver=1,u.currentItem=i.helper.appendTo(u.element).data("ui-sortable-item",!0),u.options._helper=u.options.helper,u.options.helper=function(){return i.helper[0]},t.target=u.currentItem[0],u._mouseCapture(t,!0),u._mouseStart(t,!0,!0),u.offset.click.top=r.offset.click.top,u.offset.click.left=r.offset.click.left,u.offset.parent.left-=r.offset.parent.left-u.offset.parent.left,u.offset.parent.top-=r.offset.parent.top-u.offset.parent.top,r._trigger("toSortable",t),r.dropped=u.element,n.each(r.sortables,function(){this.refreshPositions()}),r.currentItem=r.element,u.fromOutside=r),u.currentItem&&(u._mouseDrag(t),i.position=u.position)):u.isOver&&(u.isOver=0,u.cancelHelperRemoval=!0,u.options._revert=u.options.revert,u.options.revert=!1,u._trigger("out",t,u._uiHash(u)),u._mouseStop(t,!0),u.options.revert=u.options._revert,u.options.helper=u.options._helper,u.placeholder&&u.placeholder.remove(),r._refreshOffsets(t),i.position=r._generatePosition(t,!0),r._trigger("fromSortable",t),r.dropped=!1,n.each(r.sortables,function(){this.refreshPositions()}))})}});n.ui.plugin.add("draggable","cursor",{start:function(t,i,r){var u=n("body"),f=r.options;u.css("cursor")&&(f._cursor=u.css("cursor"));u.css("cursor",f.cursor)},stop:function(t,i,r){var u=r.options;u._cursor&&n("body").css("cursor",u._cursor)}});n.ui.plugin.add("draggable","opacity",{start:function(t,i,r){var u=n(i.helper),f=r.options;u.css("opacity")&&(f._opacity=u.css("opacity"));u.css("opacity",f.opacity)},stop:function(t,i,r){var u=r.options;u._opacity&&n(i.helper).css("opacity",u._opacity)}});n.ui.plugin.add("draggable","scroll",{start:function(n,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1));i.scrollParentNotHidden[0]!==i.document[0]&&i.scrollParentNotHidden[0].tagName!=="HTML"&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,r){var u=r.options,o=!1,e=r.scrollParentNotHidden[0],f=r.document[0];e!==f&&e.tagName!=="HTML"?(u.axis&&u.axis==="x"||(r.overflowOffset.top+e.offsetHeight-t.pageY<u.scrollSensitivity?e.scrollTop=o=e.scrollTop+u.scrollSpeed:t.pageY-r.overflowOffset.top<u.scrollSensitivity&&(e.scrollTop=o=e.scrollTop-u.scrollSpeed)),u.axis&&u.axis==="y"||(r.overflowOffset.left+e.offsetWidth-t.pageX<u.scrollSensitivity?e.scrollLeft=o=e.scrollLeft+u.scrollSpeed:t.pageX-r.overflowOffset.left<u.scrollSensitivity&&(e.scrollLeft=o=e.scrollLeft-u.scrollSpeed))):(u.axis&&u.axis==="x"||(t.pageY-n(f).scrollTop()<u.scrollSensitivity?o=n(f).scrollTop(n(f).scrollTop()-u.scrollSpeed):n(window).height()-(t.pageY-n(f).scrollTop())<u.scrollSensitivity&&(o=n(f).scrollTop(n(f).scrollTop()+u.scrollSpeed))),u.axis&&u.axis==="y"||(t.pageX-n(f).scrollLeft()<u.scrollSensitivity?o=n(f).scrollLeft(n(f).scrollLeft()-u.scrollSpeed):n(window).width()-(t.pageX-n(f).scrollLeft())<u.scrollSensitivity&&(o=n(f).scrollLeft(n(f).scrollLeft()+u.scrollSpeed))));o!==!1&&n.ui.ddmanager&&!u.dropBehaviour&&n.ui.ddmanager.prepareOffsets(r,t)}});n.ui.plugin.add("draggable","snap",{start:function(t,i,r){var u=r.options;r.snapElements=[];n(u.snap.constructor!==String?u.snap.items||":data(ui-draggable)":u.snap).each(function(){var t=n(this),i=t.offset();this!==r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,r){for(var e,o,s,h,c,a,l,v,w,b=r.options,f=b.snapTolerance,y=i.offset.left,k=y+r.helperProportions.width,p=i.offset.top,d=p+r.helperProportions.height,u=r.snapElements.length-1;u>=0;u--){if(c=r.snapElements[u].left-r.margins.left,a=c+r.snapElements[u].width,l=r.snapElements[u].top-r.margins.top,v=l+r.snapElements[u].height,k<c-f||y>a+f||d<l-f||p>v+f||!n.contains(r.snapElements[u].item.ownerDocument,r.snapElements[u].item)){r.snapElements[u].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,n.extend(r._uiHash(),{snapItem:r.snapElements[u].item}));r.snapElements[u].snapping=!1;continue}b.snapMode!=="inner"&&(e=Math.abs(l-d)<=f,o=Math.abs(v-p)<=f,s=Math.abs(c-k)<=f,h=Math.abs(a-y)<=f,e&&(i.position.top=r._convertPositionTo("relative",{top:l-r.helperProportions.height,left:0}).top),o&&(i.position.top=r._convertPositionTo("relative",{top:v,left:0}).top),s&&(i.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left),h&&(i.position.left=r._convertPositionTo("relative",{top:0,left:a}).left));w=e||o||s||h;b.snapMode!=="outer"&&(e=Math.abs(l-p)<=f,o=Math.abs(v-d)<=f,s=Math.abs(c-y)<=f,h=Math.abs(a-k)<=f,e&&(i.position.top=r._convertPositionTo("relative",{top:l,left:0}).top),o&&(i.position.top=r._convertPositionTo("relative",{top:v-r.helperProportions.height,left:0}).top),s&&(i.position.left=r._convertPositionTo("relative",{top:0,left:c}).left),h&&(i.position.left=r._convertPositionTo("relative",{top:0,left:a-r.helperProportions.width}).left));!r.snapElements[u].snapping&&(e||o||s||h||w)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,n.extend(r._uiHash(),{snapItem:r.snapElements[u].item}));r.snapElements[u].snapping=e||o||s||h||w}}});n.ui.plugin.add("draggable","stack",{start:function(t,i,r){var f,e=r.options,u=n.makeArray(n(e.stack)).sort(function(t,i){return(parseInt(n(t).css("zIndex"),10)||0)-(parseInt(n(i).css("zIndex"),10)||0)});u.length&&(f=parseInt(n(u[0]).css("zIndex"),10)||0,n(u).each(function(t){n(this).css("zIndex",f+t)}),this.css("zIndex",f+u.length))}});n.ui.plugin.add("draggable","zIndex",{start:function(t,i,r){var u=n(i.helper),f=r.options;u.css("zIndex")&&(f._zIndex=u.css("zIndex"));u.css("zIndex",f.zIndex)},stop:function(t,i,r){var u=r.options;u._zIndex&&n(i.helper).css("zIndex",u._zIndex)}});nt=n.ui.draggable;n.widget("ui.droppable",{version:"1.11.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,r=i.accept;this.isover=!1;this.isout=!0;this.accept=n.isFunction(r)?r:function(n){return n.is(r)};this.proportions=function(){if(arguments.length)t=arguments[0];else return t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}};this._addToManager(i.scope);i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){n.ui.ddmanager.droppables[t]=n.ui.ddmanager.droppables[t]||[];n.ui.ddmanager.droppables[t].push(this)},_splice:function(n){for(var t=0;t<n.length;t++)n[t]===this&&n.splice(t,1)},_destroy:function(){var t=n.ui.ddmanager.droppables[this.options.scope];this._splice(t);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if(t==="accept")this.accept=n.isFunction(i)?i:function(n){return n.is(i)};else if(t==="scope"){var r=n.ui.ddmanager.droppables[this.options.scope];this._splice(r);this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=n.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass);i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=n.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=n.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=n.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var r=i||n.ui.ddmanager.current,u=!1;return!r||(r.currentItem||r.element)[0]===this.element[0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=n(this).droppable("instance");if(i.options.greedy&&!i.options.disabled&&i.options.scope===r.options.scope&&i.accept.call(i.element[0],r.currentItem||r.element)&&n.ui.intersect(r,n.extend(i,{offset:i.element.offset()}),i.options.tolerance,t))return u=!0,!1}),u)?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1},ui:function(n){return{draggable:n.currentItem||n.element,helper:n.helper,position:n.position,offset:n.positionAbs}}});n.ui.intersect=function(){function n(n,t,i){return n>=t&&n<t+i}return function(t,i,r,u){if(!i.offset)return!1;var o=(t.positionAbs||t.position.absolute).left+t.margins.left,s=(t.positionAbs||t.position.absolute).top+t.margins.top,h=o+t.helperProportions.width,c=s+t.helperProportions.height,f=i.offset.left,e=i.offset.top,l=f+i.proportions().width,a=e+i.proportions().height;switch(r){case"fit":return f<=o&&h<=l&&e<=s&&c<=a;case"intersect":return f<o+t.helperProportions.width/2&&h-t.helperProportions.width/2<l&&e<s+t.helperProportions.height/2&&c-t.helperProportions.height/2<a;case"pointer":return n(u.pageY,e,i.proportions().height)&&n(u.pageX,f,i.proportions().width);case"touch":return(s>=e&&s<=a||c>=e&&c<=a||s<e&&c>a)&&(o>=f&&o<=l||h>=f&&h<=l||o<f&&h>l);default:return!1}}}();n.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var r,f,u=n.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,e=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();n:for(r=0;r<u.length;r++)if(!u[r].options.disabled&&(!t||u[r].accept.call(u[r].element[0],t.currentItem||t.element))){for(f=0;f<e.length;f++)if(e[f]===u[r].element[0]){u[r].proportions().height=0;continue n}(u[r].visible=u[r].element.css("display")!=="none",u[r].visible)&&(o==="mousedown"&&u[r]._activate.call(u[r],i),u[r].offset=u[r].element.offset(),u[r].proportions({width:u[r].element[0].offsetWidth,height:u[r].element[0].offsetHeight}))}},drop:function(t,i){var r=!1;return n.each((n.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&n.ui.intersect(t,this,this.options.tolerance,i)&&(r=this._drop.call(this,i)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),r},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||n.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&n.ui.ddmanager.prepareOffsets(t,i);n.each(n.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var r,e,f,o=n.ui.intersect(t,this,this.options.tolerance,i),u=!o&&this.isover?"isout":o&&!this.isover?"isover":null;u&&(this.options.greedy&&(e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return n(this).droppable("instance").options.scope===e}),f.length&&(r=n(f[0]).droppable("instance"),r.greedyChild=u==="isover")),r&&u==="isover"&&(r.isover=!1,r.isout=!0,r._out.call(r,i)),this[u]=!0,this[u==="isout"?"isover":"isout"]=!1,this[u==="isover"?"_over":"_out"].call(this,i),r&&u==="isout"&&(r.isout=!1,r.isover=!0,r._over.call(r,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable");t.options.refreshPositions||n.ui.ddmanager.prepareOffsets(t,i)}};tt=n.ui.droppable;n.widget("ui.resizable",n.ui.mouse,{version:"1.11.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(n){return parseInt(n,10)||0},_isNumber:function(n){return!isNaN(parseInt(n,10))},_hasScroll:function(t,i){if(n(t).css("overflow")==="hidden")return!1;var r=i&&i==="left"?"scrollLeft":"scrollTop",u=!1;return t[r]>0?!0:(t[r]=1,u=t[r]>0,t[r]=0,u)},_create:function(){var e,f,r,i,o,u=this,t=this.options;if(this.element.addClass("ui-resizable"),n.extend(this,{_aspectRatio:!!t.aspectRatio,aspectRatio:t.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:t.helper||t.ghost||t.animate?t.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=t.handles||(n(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for(this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},f=0;f<e.length;f++)r=n.trim(e[f]),o="ui-resizable-"+r,i=n("<div class='ui-resizable-handle "+o+"'><\/div>"),i.css({zIndex:t.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i);this._renderAxis=function(t){var i,r,u,f;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=n(this.handles[i],this.element),f=/sw|ne|nw|se|n|s/.test(i)?r.outerHeight():r.outerWidth(),u=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(u,f),this._proportionallyResize()),!n(this.handles[i]).length};this._renderAxis(this.element);this._handles=n(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){u.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),u.axis=i&&i[1]?i[1]:"se")});t.autoHide&&(this._handles.hide(),n(this.element).addClass("ui-resizable-autohide").mouseenter(function(){t.disabled||(n(this).removeClass("ui-resizable-autohide"),u._handles.show())}).mouseleave(function(){t.disabled||u.resizing||(n(this).addClass("ui-resizable-autohide"),u._handles.hide())}));this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var r,i,u=!1;for(r in this.handles)i=n(this.handles[r])[0],(i===t.target||n.contains(i,t.target))&&(u=!0);return!this.options.disabled&&u},_mouseStart:function(t){var u,f,e,r=this.options,i=this.element;return this.resizing=!0,this._renderProxy(),u=this._num(this.helper.css("left")),f=this._num(this.helper.css("top")),r.containment&&(u+=n(r.containment).scrollLeft()||0,f+=n(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:u,top:f},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:i.width(),height:i.height()},this.originalSize=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()},this.sizeDiff={width:i.outerWidth()-i.width(),height:i.outerHeight()-i.height()},this.originalPosition={left:u,top:f},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof r.aspectRatio=="number"?r.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=n(".ui-resizable-"+this.axis).css("cursor"),n("body").css("cursor",e==="auto"?this.axis+"-resize":e),i.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,r,u=this.originalMousePosition,e=this.axis,o=t.pageX-u.left||0,s=t.pageY-u.top||0,f=this._change[e];return(this._updatePrevProperties(),!f)?!1:(i=f.apply(this,[t,o,s]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),r=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),n.isEmptyObject(r)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1)},_mouseStop:function(t){this.resizing=!1;var r,u,f,e,o,s,h,c=this.options,i=this;return this._helper&&(r=this._proportionallyResizeElements,u=r.length&&/textarea/i.test(r[0].nodeName),f=u&&this._hasScroll(r[0],"left")?0:i.sizeDiff.height,e=u?0:i.sizeDiff.width,o={width:i.helper.width()-e,height:i.helper.height()-f},s=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,h=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null,c.animate||this.element.css(n.extend(o,{top:h,left:s})),i.helper.height(i.size.height),i.helper.width(i.size.width),this._helper&&!c.animate&&this._proportionallyResize()),n("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var n={};return this.position.top!==this.prevPosition.top&&(n.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(n.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(n.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(n.height=this.size.height+"px"),this.helper.css(n),n},_updateVirtualBoundaries:function(n){var r,u,f,e,t,i=this.options;t={minWidth:this._isNumber(i.minWidth)?i.minWidth:0,maxWidth:this._isNumber(i.maxWidth)?i.maxWidth:Infinity,minHeight:this._isNumber(i.minHeight)?i.minHeight:0,maxHeight:this._isNumber(i.maxHeight)?i.maxHeight:Infinity};(this._aspectRatio||n)&&(r=t.minHeight*this.aspectRatio,f=t.minWidth/this.aspectRatio,u=t.maxHeight*this.aspectRatio,e=t.maxWidth/this.aspectRatio,r>t.minWidth&&(t.minWidth=r),f>t.minHeight&&(t.minHeight=f),u<t.maxWidth&&(t.maxWidth=u),e<t.maxHeight&&(t.maxHeight=e));this._vBoundaries=t},_updateCache:function(n){this.offset=this.helper.offset();this._isNumber(n.left)&&(this.position.left=n.left);this._isNumber(n.top)&&(this.position.top=n.top);this._isNumber(n.height)&&(this.size.height=n.height);this._isNumber(n.width)&&(this.size.width=n.width)},_updateRatio:function(n){var t=this.position,i=this.size,r=this.axis;return this._isNumber(n.height)?n.width=n.height*this.aspectRatio:this._isNumber(n.width)&&(n.height=n.width/this.aspectRatio),r==="sw"&&(n.left=t.left+(i.width-n.width),n.top=null),r==="nw"&&(n.top=t.top+(i.height-n.height),n.left=t.left+(i.width-n.width)),n},_respectSize:function(n){var t=this._vBoundaries,i=this.axis,r=this._isNumber(n.width)&&t.maxWidth&&t.maxWidth<n.width,u=this._isNumber(n.height)&&t.maxHeight&&t.maxHeight<n.height,f=this._isNumber(n.width)&&t.minWidth&&t.minWidth>n.width,e=this._isNumber(n.height)&&t.minHeight&&t.minHeight>n.height,o=this.originalPosition.left+this.originalSize.width,s=this.position.top+this.size.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return f&&(n.width=t.minWidth),e&&(n.height=t.minHeight),r&&(n.width=t.maxWidth),u&&(n.height=t.maxHeight),f&&h&&(n.left=o-t.minWidth),r&&h&&(n.left=o-t.maxWidth),e&&c&&(n.top=s-t.minHeight),u&&c&&(n.top=s-t.maxHeight),n.width||n.height||n.left||!n.top?n.width||n.height||n.top||!n.left||(n.left=null):n.top=null,n},_getPaddingPlusBorderDimensions:function(n){for(var t=0,i=[],r=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],u=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")];t<4;t++)i[t]=parseInt(r[t],10)||0,i[t]+=parseInt(u[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var n,t=0,i=this.helper||this.element;t<this._proportionallyResizeElements.length;t++)n=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(n)),n.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset();this._helper?(this.helper=this.helper||n("<div style='overflow:hidden;'><\/div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(n,t){return{width:this.originalSize.width+t}},w:function(n,t){var i=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:i.width-t}},n:function(n,t,i){var r=this.originalSize,u=this.originalPosition;return{top:u.top+i,height:r.height-i}},s:function(n,t,i){return{height:this.originalSize.height+i}},se:function(t,i,r){return n.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,r]))},sw:function(t,i,r){return n.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,r]))},ne:function(t,i,r){return n.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,r]))},nw:function(t,i,r){return n.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,r]))}},_propagate:function(t,i){n.ui.plugin.call(this,t,[i,this.ui()]);t!=="resize"&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});n.ui.plugin.add("resizable","animate",{stop:function(t){var i=n(this).resizable("instance"),u=i.options,r=i._proportionallyResizeElements,f=r.length&&/textarea/i.test(r[0].nodeName),s=f&&i._hasScroll(r[0],"left")?0:i.sizeDiff.height,h=f?0:i.sizeDiff.width,c={width:i.size.width-h,height:i.size.height-s},e=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,o=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(n.extend(c,o&&e?{top:o,left:e}:{}),{duration:u.animateDuration,easing:u.animateEasing,step:function(){var u={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};r&&r.length&&n(r[0]).css({width:u.width,height:u.height});i._updateCache(u);i._propagate("resize",t)}})}});n.ui.plugin.add("resizable","containment",{start:function(){var r,f,e,o,s,h,c,t=n(this).resizable("instance"),l=t.options,a=t.element,u=l.containment,i=u instanceof n?u.get(0):/parent/.test(u)?a.parent().get(0):u;i&&(t.containerElement=n(i),/document/.test(u)||u===document?(t.containerOffset={left:0,top:0},t.containerPosition={left:0,top:0},t.parentData={element:n(document),left:0,top:0,width:n(document).width(),height:n(document).height()||document.body.parentNode.scrollHeight}):(r=n(i),f=[],n(["Top","Right","Left","Bottom"]).each(function(n,i){f[n]=t._num(r.css("padding"+i))}),t.containerOffset=r.offset(),t.containerPosition=r.position(),t.containerSize={height:r.innerHeight()-f[3],width:r.innerWidth()-f[1]},e=t.containerOffset,o=t.containerSize.height,s=t.containerSize.width,h=t._hasScroll(i,"left")?i.scrollWidth:s,c=t._hasScroll(i)?i.scrollHeight:o,t.parentData={element:i,left:e.left,top:e.top,width:h,height:c}))},resize:function(t){var o,s,h,c,i=n(this).resizable("instance"),v=i.options,r=i.containerOffset,l=i.position,f=i._aspectRatio||t.shiftKey,e={top:0,left:0},a=i.containerElement,u=!0;a[0]!==document&&/static/.test(a.css("position"))&&(e=r);l.left<(i._helper?r.left:0)&&(i.size.width=i.size.width+(i._helper?i.position.left-r.left:i.position.left-e.left),f&&(i.size.height=i.size.width/i.aspectRatio,u=!1),i.position.left=v.helper?r.left:0);l.top<(i._helper?r.top:0)&&(i.size.height=i.size.height+(i._helper?i.position.top-r.top:i.position.top),f&&(i.size.width=i.size.height*i.aspectRatio,u=!1),i.position.top=i._helper?r.top:0);h=i.containerElement.get(0)===i.element.parent().get(0);c=/relative|absolute/.test(i.containerElement.css("position"));h&&c?(i.offset.left=i.parentData.left+i.position.left,i.offset.top=i.parentData.top+i.position.top):(i.offset.left=i.element.offset().left,i.offset.top=i.element.offset().top);o=Math.abs(i.sizeDiff.width+(i._helper?i.offset.left-e.left:i.offset.left-r.left));s=Math.abs(i.sizeDiff.height+(i._helper?i.offset.top-e.top:i.offset.top-r.top));o+i.size.width>=i.parentData.width&&(i.size.width=i.parentData.width-o,f&&(i.size.height=i.size.width/i.aspectRatio,u=!1));s+i.size.height>=i.parentData.height&&(i.size.height=i.parentData.height-s,f&&(i.size.width=i.size.height*i.aspectRatio,u=!1));u||(i.position.left=i.prevPosition.left,i.position.top=i.prevPosition.top,i.size.width=i.prevSize.width,i.size.height=i.prevSize.height)},stop:function(){var t=n(this).resizable("instance"),r=t.options,u=t.containerOffset,f=t.containerPosition,e=t.containerElement,i=n(t.helper),o=i.offset(),s=i.outerWidth()-t.sizeDiff.width,h=i.outerHeight()-t.sizeDiff.height;t._helper&&!r.animate&&/relative/.test(e.css("position"))&&n(this).css({left:o.left-f.left-u.left,width:s,height:h});t._helper&&!r.animate&&/static/.test(e.css("position"))&&n(this).css({left:o.left-f.left-u.left,width:s,height:h})}});n.ui.plugin.add("resizable","alsoResize",{start:function(){var r=n(this).resizable("instance"),t=r.options,i=function(t){n(t).each(function(){var t=n(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof t.alsoResize!="object"||t.alsoResize.parentNode?i(t.alsoResize):t.alsoResize.length?(t.alsoResize=t.alsoResize[0],i(t.alsoResize)):n.each(t.alsoResize,function(n){i(n)})},resize:function(t,i){var r=n(this).resizable("instance"),u=r.options,f=r.originalSize,e=r.originalPosition,s={height:r.size.height-f.height||0,width:r.size.width-f.width||0,top:r.position.top-e.top||0,left:r.position.left-e.left||0},o=function(t,r){n(t).each(function(){var t=n(this),f=n(this).data("ui-resizable-alsoresize"),u={},e=r&&r.length?r:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];n.each(e,function(n,t){var i=(f[t]||0)+(s[t]||0);i&&i>=0&&(u[t]=i||null)});t.css(u)})};typeof u.alsoResize!="object"||u.alsoResize.nodeType?o(u.alsoResize):n.each(u.alsoResize,function(n,t){o(n,t)})},stop:function(){n(this).removeData("resizable-alsoresize")}});n.ui.plugin.add("resizable","ghost",{start:function(){var t=n(this).resizable("instance"),i=t.options,r=t.size;t.ghost=t.originalElement.clone();t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:"");t.ghost.appendTo(t.helper)},resize:function(){var t=n(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=n(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}});n.ui.plugin.add("resizable","grid",{resize:function(){var h,t=n(this).resizable("instance"),i=t.options,y=t.size,e=t.originalSize,o=t.originalPosition,c=t.axis,l=typeof i.grid=="number"?[i.grid,i.grid]:i.grid,s=l[0]||1,f=l[1]||1,a=Math.round((y.width-e.width)/s)*s,v=Math.round((y.height-e.height)/f)*f,r=e.width+a,u=e.height+v,p=i.maxWidth&&i.maxWidth<r,w=i.maxHeight&&i.maxHeight<u,b=i.minWidth&&i.minWidth>r,k=i.minHeight&&i.minHeight>u;i.grid=l;b&&(r+=s);k&&(u+=f);p&&(r-=s);w&&(u-=f);/^(se|s|e)$/.test(c)?(t.size.width=r,t.size.height=u):/^(ne)$/.test(c)?(t.size.width=r,t.size.height=u,t.position.top=o.top-v):/^(sw)$/.test(c)?(t.size.width=r,t.size.height=u,t.position.left=o.left-a):((u-f<=0||r-s<=0)&&(h=t._getPaddingPlusBorderDimensions(this)),u-f>0?(t.size.height=u,t.position.top=o.top-v):(u=f-h.height,t.size.height=u,t.position.top=o.top+e.height-u),r-s>0?(t.size.width=r,t.position.left=o.left-a):(r=f-h.height,t.size.width=r,t.position.left=o.left+e.width-r))}});var ft=n.ui.resizable,et=n.widget("ui.selectable",n.ui.mouse,{version:"1.11.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable");this.dragged=!1;this.refresh=function(){t=n(i.options.filter,i.element[0]);t.addClass("ui-selectee");t.each(function(){var t=n(this),i=t.offset();n.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})};this.refresh();this.selectees=t.addClass("ui-selectee");this._mouseInit();this.helper=n("<div class='ui-selectable-helper'><\/div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()},_mouseStart:function(t){var i=this,r=this.options;(this.opos=[t.pageX,t.pageY],this.options.disabled)||(this.selectees=n(r.filter,this.element[0]),this._trigger("start",t),n(r.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=n.data(this,"selectable-item");r.startselected=!0;t.metaKey||t.ctrlKey||(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,i._trigger("unselecting",t,{unselecting:r.element}))}),n(t.target).parents().addBack().each(function(){var u,r=n.data(this,"selectable-item");if(r)return u=!t.metaKey&&!t.ctrlKey||!r.$element.hasClass("ui-selected"),r.$element.removeClass(u?"ui-unselecting":"ui-selected").addClass(u?"ui-selecting":"ui-unselecting"),r.unselecting=!u,r.selecting=u,r.selected=u,u?i._trigger("selecting",t,{selecting:r.element}):i._trigger("unselecting",t,{unselecting:r.element}),!1}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var e,o=this,s=this.options,i=this.opos[0],r=this.opos[1],u=t.pageX,f=t.pageY;return i>u&&(e=u,u=i,i=e),r>f&&(e=f,f=r,r=e),this.helper.css({left:i,top:r,width:u-i,height:f-r}),this.selectees.each(function(){var e=n.data(this,"selectable-item"),h=!1;e&&e.element!==o.element[0]&&(s.tolerance==="touch"?h=!(e.left>u||e.right<i||e.top>f||e.bottom<r):s.tolerance==="fit"&&(h=e.left>i&&e.right<u&&e.top>r&&e.bottom<f),h?(e.selected&&(e.$element.removeClass("ui-selected"),e.selected=!1),e.unselecting&&(e.$element.removeClass("ui-unselecting"),e.unselecting=!1),e.selecting||(e.$element.addClass("ui-selecting"),e.selecting=!0,o._trigger("selecting",t,{selecting:e.element}))):(e.selecting&&((t.metaKey||t.ctrlKey)&&e.startselected?(e.$element.removeClass("ui-selecting"),e.selecting=!1,e.$element.addClass("ui-selected"),e.selected=!0):(e.$element.removeClass("ui-selecting"),e.selecting=!1,e.startselected&&(e.$element.addClass("ui-unselecting"),e.unselecting=!0),o._trigger("unselecting",t,{unselecting:e.element}))),e.selected&&(t.metaKey||t.ctrlKey||e.startselected||(e.$element.removeClass("ui-selected"),e.selected=!1,e.$element.addClass("ui-unselecting"),e.unselecting=!0,o._trigger("unselecting",t,{unselecting:e.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,n(".ui-unselecting",this.element[0]).each(function(){var r=n.data(this,"selectable-item");r.$element.removeClass("ui-unselecting");r.unselecting=!1;r.startselected=!1;i._trigger("unselected",t,{unselected:r.element})}),n(".ui-selecting",this.element[0]).each(function(){var r=n.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected");r.selecting=!1;r.selected=!0;r.startselected=!0;i._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),ot=n.widget("ui.sortable",n.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(n,t,i){return n>=t&&n<t+i},_isFloating:function(n){return/left|right/.test(n.css("float"))||/inline|table-cell/.test(n.css("display"))},_create:function(){var n=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?n.axis==="x"||this._isFloating(this.items[0].item):!1;this.offset=this.element.offset();this._mouseInit();this._setHandleClassName();this.ready=!0},_setOption:function(n,t){this._super(n,t);n==="handle"&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");n.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");this._mouseDestroy();for(var n=this.items.length-1;n>=0;n--)this.items[n].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var r=null,f=!1,u=this;return this.reverting?!1:this.options.disabled||this.options.type==="static"?!1:(this._refreshItems(t),n(t.target).parents().each(function(){if(n.data(this,u.widgetName+"-item")===u)return r=n(this),!1}),n.data(t.target,u.widgetName+"-item")===u&&(r=n(t.target)),!r)?!1:this.options.handle&&!i&&(n(this.options.handle,r).find("*").addBack().each(function(){this===t.target&&(f=!0)}),!f)?!1:(this.currentItem=r,this._removeCurrentsFromItems(),!0)},_mouseStart:function(t,i,r){var f,e,u=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},n.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,u.cursorAt&&this._adjustOffsetFromHelper(u.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),u.containment&&this._setContainment(),u.cursor&&u.cursor!=="auto"&&(e=this.document.find("body"),this.storedCursor=e.css("cursor"),e.css("cursor",u.cursor),this.storedStylesheet=n("<style>*{ cursor: "+u.cursor+" !important; }<\/style>").appendTo(e)),u.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",u.opacity)),u.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",u.zIndex)),this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!r)for(f=this.containers.length-1;f>=0;f--)this.containers[f]._trigger("activate",t,this._uiHash(this));return n.ui.ddmanager&&(n.ui.ddmanager.current=this),n.ui.ddmanager&&!u.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var e,u,f,o,i=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-this.overflowOffset.top<i.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-i.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-this.overflowOffset.left<i.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-i.scrollSpeed)):(t.pageY-n(document).scrollTop()<i.scrollSensitivity?r=n(document).scrollTop(n(document).scrollTop()-i.scrollSpeed):n(window).height()-(t.pageY-n(document).scrollTop())<i.scrollSensitivity&&(r=n(document).scrollTop(n(document).scrollTop()+i.scrollSpeed)),t.pageX-n(document).scrollLeft()<i.scrollSensitivity?r=n(document).scrollLeft(n(document).scrollLeft()-i.scrollSpeed):n(window).width()-(t.pageX-n(document).scrollLeft())<i.scrollSensitivity&&(r=n(document).scrollLeft(n(document).scrollLeft()+i.scrollSpeed))),r!==!1&&n.ui.ddmanager&&!i.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&this.options.axis==="y"||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&this.options.axis==="x"||(this.helper[0].style.top=this.position.top+"px"),e=this.items.length-1;e>=0;e--)if((u=this.items[e],f=u.item[0],o=this._intersectsWithPointer(u),o)&&u.instance===this.currentContainer&&f!==this.currentItem[0]&&this.placeholder[o===1?"next":"prev"]()[0]!==f&&!n.contains(this.placeholder[0],f)&&(this.options.type==="semi-dynamic"?!n.contains(this.element[0],f):!0)){if(this.direction=o===1?"down":"up",this.options.tolerance==="pointer"||this._intersectsWithSides(u))this._rearrange(t,u);else break;this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),n.ui.ddmanager&&n.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(n.ui.ddmanager&&!this.options.dropBehaviour&&n.ui.ddmanager.drop(this,t),this.options.revert){var e=this,f=this.placeholder.offset(),r=this.options.axis,u={};r&&r!=="x"||(u.left=f.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft));r&&r!=="y"||(u.top=f.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop));this.reverting=!0;n(this.helper).animate(u,parseInt(this.options.revert,10)||500,function(){e._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null});this.options.helper==="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),n.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?n(this.domPosition.prev).after(this.currentItem):n(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var r=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},n(r).each(function(){var r=(n(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);r&&i.push((t.key||r[1]+"[]")+"="+(t.key&&t.expression?r[1]:r[2]))}),!i.length&&t.key&&i.push(t.key+"="),i.join("&")},toArray:function(t){var r=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},r.each(function(){i.push(n(t.item||this).attr(t.attribute||"id")||"")}),i},_intersectsWith:function(n){var t=this.positionAbs.left,h=t+this.helperProportions.width,i=this.positionAbs.top,c=i+this.helperProportions.height,r=n.left,f=r+n.width,u=n.top,e=u+n.height,o=this.offset.click.top,s=this.offset.click.left,l=this.options.axis==="x"||i+o>u&&i+o<e,a=this.options.axis==="y"||t+s>r&&t+s<f,v=l&&a;return this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>n[this.floating?"width":"height"]?v:r<t+this.helperProportions.width/2&&h-this.helperProportions.width/2<f&&u<i+this.helperProportions.height/2&&c-this.helperProportions.height/2<e},_intersectsWithPointer:function(n){var r=this.options.axis==="x"||this._isOverAxis(this.positionAbs.top+this.offset.click.top,n.top,n.height),u=this.options.axis==="y"||this._isOverAxis(this.positionAbs.left+this.offset.click.left,n.left,n.width),f=r&&u,t=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection();return f?this.floating?i&&i==="right"||t==="down"?2:1:t&&(t==="down"?2:1):!1},_intersectsWithSides:function(n){var r=this._isOverAxis(this.positionAbs.top+this.offset.click.top,n.top+n.height/2,n.height),u=this._isOverAxis(this.positionAbs.left+this.offset.click.left,n.left+n.width/2,n.width),t=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection();return this.floating&&i?i==="right"&&u||i==="left"&&!u:t&&(t==="down"&&r||t==="up"&&!r)},_getDragVerticalDirection:function(){var n=this.positionAbs.top-this.lastPositionAbs.top;return n!==0&&(n>0?"down":"up")},_getDragHorizontalDirection:function(){var n=this.positionAbs.left-this.lastPositionAbs.left;return n!==0&&(n>0?"right":"left")},refresh:function(n){return this._refreshItems(n),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var n=this.options;return n.connectWith.constructor===String?[n.connectWith]:n.connectWith},_getItemsAsjQuery:function(t){function h(){s.push(this)}var r,u,e,i,s=[],f=[],o=this._connectWith();if(o&&t)for(r=o.length-1;r>=0;r--)for(e=n(o[r]),u=e.length-1;u>=0;u--)i=n.data(e[u],this.widgetFullName),i&&i!==this&&!i.options.disabled&&f.push([n.isFunction(i.options.items)?i.options.items.call(i.element):n(i.options.items,i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),i]);for(f.push([n.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):n(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),r=f.length-1;r>=0;r--)f[r][0].each(h);return n(s)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=n.grep(this.items,function(n){for(var i=0;i<t.length;i++)if(t[i]===n.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[];this.containers=[this];var r,u,e,i,o,s,h,l,a=this.items,f=[[n.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):n(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(r=c.length-1;r>=0;r--)for(e=n(c[r]),u=e.length-1;u>=0;u--)i=n.data(e[u],this.widgetFullName),i&&i!==this&&!i.options.disabled&&(f.push([n.isFunction(i.options.items)?i.options.items.call(i.element[0],t,{item:this.currentItem}):n(i.options.items,i.element),i]),this.containers.push(i));for(r=f.length-1;r>=0;r--)for(o=f[r][1],s=f[r][0],u=0,l=s.length;u<l;u++)h=n(s[u]),h.data(this.widgetName+"-item",o),a.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var r,f,u,i=this.items.length-1;i>=0;i--)(r=this.items[i],r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0])||(f=this.options.toleranceElement?n(this.options.toleranceElement,r.item):r.item,t||(r.width=f.outerWidth(),r.height=f.outerHeight()),u=f.offset(),r.left=u.left,r.top=u.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)u=this.containers[i].element.offset(),this.containers[i].containerCache.left=u.left,this.containers[i].containerCache.top=u.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var r,i=t.options;i.placeholder&&i.placeholder.constructor!==String||(r=i.placeholder,i.placeholder={element:function(){var u=t.currentItem[0].nodeName.toLowerCase(),i=n("<"+u+">",t.document[0]).addClass(r||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return u==="tr"?t.currentItem.children().each(function(){n("<td>&#160;<\/td>",t.document[0]).attr("colspan",n(this).attr("colspan")||1).appendTo(i)}):u==="img"&&i.attr("src",t.currentItem.attr("src")),r||i.css("visibility","hidden"),i},update:function(n,u){(!r||i.forcePlaceholderSize)&&(u.height()||u.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),u.width()||u.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}});t.placeholder=n(i.placeholder.element.call(t.element,t.currentItem));t.currentItem.after(t.placeholder);i.placeholder.update(t,t.placeholder)},_contactContainers:function(t){for(var u,c,f,a,v,o,l,s,h,e=null,i=null,r=this.containers.length-1;r>=0;r--)if(!n.contains(this.currentItem[0],this.containers[r].element[0]))if(this._intersectsWith(this.containers[r].containerCache)){if(e&&n.contains(this.containers[r].element[0],e.element[0]))continue;e=this.containers[r];i=r}else this.containers[r].containerCache.over&&(this.containers[r]._trigger("out",t,this._uiHash(this)),this.containers[r].containerCache.over=0);if(e)if(this.containers.length===1)this.containers[i].containerCache.over||(this.containers[i]._trigger("over",t,this._uiHash(this)),this.containers[i].containerCache.over=1);else{for(c=1e4,f=null,s=e.floating||this._isFloating(this.currentItem),a=s?"left":"top",v=s?"width":"height",h=s?"clientX":"clientY",u=this.items.length-1;u>=0;u--)n.contains(this.containers[i].element[0],this.items[u].item[0])&&this.items[u].item[0]!==this.currentItem[0]&&(o=this.items[u].item.offset()[a],l=!1,t[h]-o>this.items[u][v]/2&&(l=!0),Math.abs(t[h]-o)<c&&(c=Math.abs(t[h]-o),f=this.items[u],this.direction=l?"up":"down"));if(!f&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[i]){this.currentContainer.containerCache.over||(this.containers[i]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1);return}f?this._rearrange(t,f,null,!0):this._rearrange(t,null,this.containers[i].element,!0);this._trigger("change",t,this._uiHash());this.containers[i]._trigger("change",t,this._uiHash(this));this.currentContainer=this.containers[i];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[i]._trigger("over",t,this._uiHash(this));this.containers[i].containerCache.over=1}},_createHelper:function(t){var r=this.options,i=n.isFunction(r.helper)?n(r.helper.apply(this.element[0],[t,this.currentItem])):r.helper==="clone"?this.currentItem.clone():this.currentItem;return i.parents("body").length||n(r.appendTo!=="parent"?r.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0]),i[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!i[0].style.width||r.forceHelperSize)&&i.width(this.currentItem.width()),(!i[0].style.height||r.forceHelperSize)&&i.height(this.currentItem.height()),i},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" "));n.isArray(t)&&(t={left:+t[0],top:+t[1]||0});"left"in t&&(this.offset.click.left=t.left+this.margins.left);"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left);"top"in t&&(this.offset.click.top=t.top+this.margins.top);"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&n.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var n=this.currentItem.position();return{top:n.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:n.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,r,u,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);(i.containment==="document"||i.containment==="window")&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,n(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(n(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]);/^(document|window|parent)$/.test(i.containment)||(t=n(i.containment)[0],r=n(i.containment).offset(),u=n(t).css("overflow")!=="hidden",this.containment=[r.left+(parseInt(n(t).css("borderLeftWidth"),10)||0)+(parseInt(n(t).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(n(t).css("borderTopWidth"),10)||0)+(parseInt(n(t).css("paddingTop"),10)||0)-this.margins.top,r.left+(u?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(n(t).css("borderLeftWidth"),10)||0)-(parseInt(n(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,r.top+(u?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(n(t).css("borderTopWidth"),10)||0)-(parseInt(n(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var r=t==="absolute"?1:-1,u=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(u[0].tagName);return{top:i.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():f?0:u.scrollTop())*r,left:i.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():f?0:u.scrollLeft())*r}},_generatePosition:function(t){var r,u,i=this.options,f=t.pageX,e=t.pageY,o=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,s=/(html|body)/i.test(o[0].tagName);return this.cssPosition!=="relative"||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(e=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(e=this.containment[3]+this.offset.click.top)),i.grid&&(r=this.originalPageY+Math.round((e-this.originalPageY)/i.grid[1])*i.grid[1],e=this.containment?r-this.offset.click.top>=this.containment[1]&&r-this.offset.click.top<=this.containment[3]?r:r-this.offset.click.top>=this.containment[1]?r-i.grid[1]:r+i.grid[1]:r,u=this.originalPageX+Math.round((f-this.originalPageX)/i.grid[0])*i.grid[0],f=this.containment?u-this.offset.click.left>=this.containment[0]&&u-this.offset.click.left<=this.containment[2]?u:u-this.offset.click.left>=this.containment[0]?u-i.grid[0]:u+i.grid[0]:u)),{top:e-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:o.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:o.scrollLeft())}},_rearrange:function(n,t,i,r){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var u=this.counter;this._delay(function(){u===this.counter&&this.refreshPositions(!r)})},_clear:function(n,t){function u(n,t,i){return function(r){i._trigger(n,r,t._uiHash(t))}}this.reverting=!1;var i,r=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static")&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&r.push(function(n){this._trigger("receive",n,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!t&&r.push(function(n){this._trigger("update",n,this._uiHash())}),this!==this.currentContainer&&(t||(r.push(function(n){this._trigger("remove",n,this._uiHash())}),r.push(function(n){return function(t){n._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(n){return function(t){n._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)t||r.push(u("deactivate",this,this.containers[i])),this.containers[i].containerCache.over&&(r.push(u("out",this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",n,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(i=0;i<r.length;i++)r[i].call(this,n);this._trigger("stop",n,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){n.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||n([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),st=n.widget("ui.accordion",{version:"1.11.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=n();this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");t.collapsible||t.active!==!1&&t.active!=null||(t.active=0);this._processPanels();t.active<0&&(t.active+=this.headers.length);this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():n()}},_createIcons:function(){var t=this.options.icons;t&&(n("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var n;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();this._destroyIcons();n=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();this.options.heightStyle!=="content"&&n.css("height","")},_setOption:function(n,t){if(n==="active"){this._activate(t);return}n==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t));this._super(n,t);n!=="collapsible"||t||this.options.active!==!1||this._activate(0);n==="icons"&&(this._destroyIcons(),t&&this._createIcons());n==="disabled"&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t))},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=n.ui.keyCode,u=this.headers.length,f=this.headers.index(t.target),r=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:r=this.headers[(f+1)%u];break;case i.LEFT:case i.UP:r=this.headers[(f-1+u)%u];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:r=this.headers[0];break;case i.END:r=this.headers[u-1]}r&&(n(t.target).attr("tabIndex",-1),n(r).attr("tabIndex",0),r.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===n.ui.keyCode.UP&&t.ctrlKey&&n(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels();(t.active!==!1||t.collapsible!==!0)&&this.headers.length?t.active===!1?this._activate(0):this.active.length&&!n.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=n()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active):(t.active=!1,this.active=n());this._destroyIcons();this._refresh()},_processPanels:function(){var t=this.headers,n=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();n&&(this._off(t.not(this.headers)),this._off(n.not(this.panels)))},_refresh:function(){var t,i=this.options,r=i.heightStyle,u=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");this.active.next().addClass("ui-accordion-content-active").show();this.headers.attr("role","tab").each(function(){var t=n(this),r=t.uniqueId().attr("id"),i=t.next(),u=i.uniqueId().attr("id");t.attr("aria-controls",u);i.attr("aria-labelledby",r)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0);this._createIcons();this._setupEvents(i.event);r==="fill"?(t=u.height(),this.element.siblings(":visible").each(function(){var i=n(this),r=i.css("position");r!=="absolute"&&r!=="fixed"&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=n(this).outerHeight(!0)}),this.headers.next().each(function(){n(this).height(Math.max(0,t-n(this).innerHeight()+n(this).height()))}).css("overflow","auto")):r==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,n(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:n.noop}))},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):n()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&n.each(t.split(" "),function(n,t){i[t]="_eventHandler"});this._off(this.headers.add(this.headers.next()));this._on(this.headers,i);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,u=this.active,r=n(t.currentTarget),f=r[0]===u[0],e=f&&i.collapsible,s=e?n():r.next(),h=u.next(),o={oldHeader:u,oldPanel:h,newHeader:e?n():r,newPanel:s};(t.preventDefault(),(!f||i.collapsible)&&this._trigger("beforeActivate",t,o)!==!1)&&(i.active=e?!1:this.headers.index(r),this.active=f?n():r,this._toggle(o),u.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),f||(r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),r.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var r=t.newPanel,i=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0);this.prevShow=r;this.prevHide=i;this.options.animate?this._animate(r,i,t):(i.hide(),r.show(),this._toggleComplete(t));i.attr({"aria-hidden":"true"});i.prev().attr("aria-selected","false");r.length&&i.length?i.prev().attr({tabIndex:-1,"aria-expanded":"false"}):r.length&&this.headers.filter(function(){return n(this).attr("tabIndex")===0}).attr("tabIndex",-1);r.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(n,t,i){var h,r,u,c=this,o=0,l=n.length&&(!t.length||n.index()<t.index()),e=this.options.animate||{},f=l&&e.down||e,s=function(){c._toggleComplete(i)};if(typeof f=="number"&&(u=f),typeof f=="string"&&(r=f),r=r||f.easing||e.easing,u=u||f.duration||e.duration,!t.length)return n.animate(this.showProps,u,r,s);if(!n.length)return t.animate(this.hideProps,u,r,s);h=n.show().outerHeight();t.animate(this.hideProps,{duration:u,easing:r,step:function(n,t){t.now=Math.round(n)}});n.hide().animate(this.showProps,{duration:u,easing:r,complete:s,step:function(n,i){i.now=Math.round(n);i.prop!=="height"?o+=i.now:c.options.heightStyle!=="content"&&(i.now=Math.round(h-t.outerHeight()-o),o=0)}})},_toggleComplete:function(n){var t=n.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");t.length&&(t.parent()[0].className=t.parent()[0].className);this._trigger("activate",null,n)}}),ht=n.widget("ui.menu",{version:"1.11.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=!1;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0});this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true");this._on({"mousedown .ui-menu-item":function(n){n.preventDefault()},"click .ui-menu-item":function(t){var i=n(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&n(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=n(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active");this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(n,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(n,i)},blur:function(t){this._delay(function(){n.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(n){this._closeOnDocumentClick(n)&&this.collapseAll(n);this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=n(this);t.data("ui-menu-submenu-carat")&&t.remove()});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,u,r,f,e=!0;switch(t.keyCode){case n.ui.keyCode.PAGE_UP:this.previousPage(t);break;case n.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case n.ui.keyCode.HOME:this._move("first","first",t);break;case n.ui.keyCode.END:this._move("last","last",t);break;case n.ui.keyCode.UP:this.previous(t);break;case n.ui.keyCode.DOWN:this.next(t);break;case n.ui.keyCode.LEFT:this.collapse(t);break;case n.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case n.ui.keyCode.ENTER:case n.ui.keyCode.SPACE:this._activate(t);break;case n.ui.keyCode.ESCAPE:this.collapse(t);break;default:e=!1;u=this.previousFilter||"";r=String.fromCharCode(t.keyCode);f=!1;clearTimeout(this.filterTimer);r===u?f=!0:r=u+r;i=this._filterMenuItems(r);i=f&&i.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):i;i.length||(r=String.fromCharCode(t.keyCode),i=this._filterMenuItems(r));i.length?(this.focus(t,i),this.previousFilter=r,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}e&&t.preventDefault()},_activate:function(n){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(n):this.select(n))},refresh:function(){var i,t,u=this,f=this.options.icons.submenu,r=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=n(this),i=t.parent(),r=n("<span>").addClass("ui-menu-icon ui-icon "+f).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(r);t.attr("aria-labelledby",i.attr("id"))});i=r.add(this.element);t=i.find(this.options.items);t.not(".ui-menu-item").each(function(){var t=n(this);u._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")});t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()});t.filter(".ui-state-disabled").attr("aria-disabled","true");this.active&&!n.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(n,t){n==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);n==="disabled"&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t);this._super(n,t)},focus:function(n,t){var i,r;this.blur(n,n&&n.type==="focus");this._scrollIntoView(t);this.active=t.first();r=this.active.addClass("ui-state-focus").removeClass("ui-state-active");this.options.role&&this.element.attr("aria-activedescendant",r.attr("id"));this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");n&&n.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay);i=t.children(".ui-menu");i.length&&n&&/^mouse/.test(n.type)&&this._startOpening(i);this.activeMenu=t.parent();this._trigger("focus",n,{item:t})},_scrollIntoView:function(t){var e,o,i,r,u,f;this._hasScroll()&&(e=parseFloat(n.css(this.activeMenu[0],"borderTopWidth"))||0,o=parseFloat(n.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-e-o,r=this.activeMenu.scrollTop(),u=this.activeMenu.height(),f=t.outerHeight(),i<0?this.activeMenu.scrollTop(r+i):i+f>u&&this.activeMenu.scrollTop(r+i-u+f))},blur:function(n,t){(t||clearTimeout(this.timer),this.active)&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",n,{item:this.active}))},_startOpening:function(n){(clearTimeout(this.timer),n.attr("aria-hidden")==="true")&&(this.timer=this._delay(function(){this._close();this._open(n)},this.delay))},_open:function(t){var i=n.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true");t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer);this.timer=this._delay(function(){var r=i?this.element:n(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element);this._close(r);this.blur(t);this.activeMenu=r},this.delay)},_close:function(n){n||(n=this.active?this.active.parent():this.element);n.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!n(t.target).closest(".ui-menu").length},_isDivider:function(n){return!/[^\-\u2014\u2013\s]/.test(n.text())},collapse:function(n){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(n,t))},expand:function(n){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(n,t)}))},next:function(n){this._move("next","first",n)},previous:function(n){this._move("prev","last",n)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(n,t,i){var r;this.active&&(r=n==="first"||n==="last"?this.active[n==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[n+"All"](".ui-menu-item").eq(0));r&&r.length&&this.active||(r=this.activeMenu.find(this.options.items)[t]());this.focus(i,r)},nextPage:function(t){var i,r,u;if(!this.active){this.next(t);return}this.isLastItem()||(this._hasScroll()?(r=this.active.offset().top,u=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=n(this),i.offset().top-r-u<0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))},previousPage:function(t){var i,r,u;if(!this.active){this.next(t);return}this.isFirstItem()||(this._hasScroll()?(r=this.active.offset().top,u=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=n(this),i.offset().top-r+u>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first()))},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||n(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0);this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),r=new RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return r.test(n.trim(n(this).text()))})}});n.widget("ui.autocomplete",{version:"1.11.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,r,u=this.element[0].nodeName.toLowerCase(),f=u==="textarea",e=u==="input";this.isMultiLine=f?!0:e?!1:this.element.prop("isContentEditable");this.valueMethod=this.element[f||e?"val":"text"];this.isNewMenu=!0;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(u){if(this.element.prop("readOnly")){t=!0;r=!0;i=!0;return}t=!1;r=!1;i=!1;var f=n.ui.keyCode;switch(u.keyCode){case f.PAGE_UP:t=!0;this._move("previousPage",u);break;case f.PAGE_DOWN:t=!0;this._move("nextPage",u);break;case f.UP:t=!0;this._keyEvent("previous",u);break;case f.DOWN:t=!0;this._keyEvent("next",u);break;case f.ENTER:this.menu.active&&(t=!0,u.preventDefault(),this.menu.select(u));break;case f.TAB:this.menu.active&&this.menu.select(u);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(u),u.preventDefault());break;default:i=!0;this._searchTimeout(u)}},keypress:function(r){if(t){t=!1;(!this.isMultiLine||this.menu.element.is(":visible"))&&r.preventDefault();return}if(!i){var u=n.ui.keyCode;switch(r.keyCode){case u.PAGE_UP:this._move("previousPage",r);break;case u.PAGE_DOWN:this._move("nextPage",r);break;case u.UP:this._keyEvent("previous",r);break;case u.DOWN:this._keyEvent("next",r)}}},input:function(n){if(r){r=!1;n.preventDefault();return}this._searchTimeout(n)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(n){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching);this.close(n);this._change(n)}});this._initSource();this.menu=n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");this._on(this.menu.element,{mousedown:function(t){t.preventDefault();this.cancelBlur=!0;this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];n(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target===t.element[0]||r.target===i||n.contains(i,r.target)||t.close()})})},menufocus:function(t,i){var r,u;if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))){this.menu.blur();this.document.one("mousemove",function(){n(t.target).trigger(t.originalEvent)});return}u=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:u})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(u.value);r=i.item.attr("aria-label")||u.value;r&&n.trim(r).length&&(this.liveRegion.children().hide(),n("<div>").text(r).appendTo(this.liveRegion))},menuselect:function(n,t){var i=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r;this.selectedItem=i}));!1!==this._trigger("select",n,{item:i})&&this._value(i.value);this.term=this._value();this.close(n);this.selectedItem=i}});this.liveRegion=n("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(n,t){this._super(n,t);n==="source"&&this._initSource();n==="appendTo"&&this.menu.element.appendTo(this._appendTo());n==="disabled"&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?n(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var i,r,t=this;n.isArray(this.options.source)?(i=this.options.source,this.source=function(t,r){r(n.ui.autocomplete.filter(i,t.term))}):typeof this.options.source=="string"?(r=this.options.source,this.source=function(i,u){t.xhr&&t.xhr.abort();t.xhr=n.ajax({url:r,data:i,dataType:"json",success:function(n){u(n)},error:function(){u([])}})}):this.source=this.options.source},_searchTimeout:function(n){clearTimeout(this.searching);this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),r=n.altKey||n.ctrlKey||n.metaKey||n.shiftKey;t&&(!t||i||r)||(this.selectedItem=null,this.search(null,n))},this.options.delay)},search:function(n,t){return(n=n!=null?n:this._value(),this.term=this._value(),n.length<this.options.minLength)?this.close(t):this._trigger("search",t)===!1?void 0:this._search(n)},_search:function(n){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=!1;this.source({term:n},this._response())},_response:function(){var t=++this.requestIndex;return n.proxy(function(n){t===this.requestIndex&&this.__response(n);this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(n){n&&(n=this._normalize(n));this._trigger("response",null,{content:n});!this.options.disabled&&n&&n.length&&!this.cancelSearch?(this._suggest(n),this._trigger("open")):this._close()},close:function(n){this.cancelSearch=!0;this._close(n)},_close:function(n){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",n))},_change:function(n){this.previous!==this._value()&&this._trigger("change",n,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:n.map(t,function(t){return typeof t=="string"?{label:t,value:t}:n.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t);this.isNewMenu=!0;this.menu.refresh();i.show();this._resizeMenu();i.position(n.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var n=this.menu.element;n.outerWidth(Math.max(n.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var r=this;n.each(i,function(n,i){r._renderItemData(t,i)})},_renderItemData:function(n,t){return this._renderItem(n,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return n("<li>").text(i.label).appendTo(t)},_move:function(n,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(n)||this.menu.isLastItem()&&/^next/.test(n)){this.isMultiLine||this._value(this.term);this.menu.blur();return}this.menu[n](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(n,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(n,t),t.preventDefault())}});n.extend(n.ui.autocomplete,{escapeRegex:function(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var r=new RegExp(n.ui.autocomplete.escapeRegex(i),"i");return n.grep(t,function(n){return r.test(n.label||n.value||n)})}});n.widget("ui.autocomplete",n.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(n){return n+(n>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;(this._superApply(arguments),this.options.disabled||this.cancelSearch)||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),n("<div>").text(i).appendTo(this.liveRegion))}});var ct=n.ui.autocomplete,e,c="ui-button ui-widget ui-state-default ui-corner-all",l="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",it=function(){var t=n(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},a=function(t){var i=t.name,r=t.form,u=n([]);return i&&(i=i.replace(/'/g,"\\'"),u=r?n(r).find("[name='"+i+"'][type=radio]"):n("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),u};n.widget("ui.button",{version:"1.11.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,it);typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled);this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var i=this,t=this.options,r=this.type==="checkbox"||this.type==="radio",u=r?"":"ui-state-active";t.label===null&&(t.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html());this._hoverable(this.buttonElement);this.buttonElement.addClass(c).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){t.disabled||this===e&&n(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){t.disabled||n(this).removeClass(u)}).bind("click"+this.eventNamespace,function(n){t.disabled&&(n.preventDefault(),n.stopImmediatePropagation())});this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}});r&&this.element.bind("change"+this.eventNamespace,function(){i.refresh()});this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(t.disabled)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(t.disabled)return!1;n(this).addClass("ui-state-active");i.buttonElement.attr("aria-pressed","true");var r=i.element[0];a(r).not(r).map(function(){return n(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(t.disabled)return!1;n(this).addClass("ui-state-active");e=this;i.document.one("mouseup",function(){e=null})}).bind("mouseup"+this.eventNamespace,function(){if(t.disabled)return!1;n(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(i){if(t.disabled)return!1;(i.keyCode===n.ui.keyCode.SPACE||i.keyCode===n.ui.keyCode.ENTER)&&n(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){n(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===n.ui.keyCode.SPACE&&n(this).click()}));this._setOption("disabled",t.disabled);this._resetButton()},_determineButtonType:function(){var n,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button";this.type==="checkbox"||this.type==="radio"?(n=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=n.find(t),this.buttonElement.length||(n=n.length?n.siblings():this.element.siblings(),this.buttonElement=n.filter(t),this.buttonElement.length||(this.buttonElement=n.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(c+" ui-state-active "+l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(n,t){if(this._super(n,t),n==="disabled"){this.widget().toggleClass("ui-state-disabled",!!t);this.element.prop("disabled",!!t);t&&(this.type==="checkbox"||this.type==="radio"?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active"));return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t);this.type==="radio"?a(this.element[0]).each(function(){n(this).is(":checked")?n(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var i=this.buttonElement.removeClass(l),f=n("<span><\/span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),t=this.options.icons,u=t.primary&&t.secondary,r=[];t.primary||t.secondary?(this.options.text&&r.push("ui-button-text-icon"+(u?"s":t.primary?"-primary":"-secondary")),t.primary&&i.prepend("<span class='ui-button-icon-primary ui-icon "+t.primary+"'><\/span>"),t.secondary&&i.append("<span class='ui-button-icon-secondary ui-icon "+t.secondary+"'><\/span>"),this.options.text||(r.push(u?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||i.attr("title",n.trim(f)))):r.push("ui-button-text-only");i.addClass(r.join(" "))}});n.widget("ui.buttonset",{version:"1.11.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(n,t){n==="disabled"&&this.buttons.button("option",n,t);this._super(n,t)},refresh:function(){var i=this.element.css("direction")==="rtl",t=this.element.find(this.options.items),r=t.filter(":ui-button");t.not(":ui-button").button();r.button("refresh");this.buttons=t.map(function(){return n(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(i?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(i?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return n(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}});rt=n.ui.button;n.extend(n.ui,{datepicker:{version:"1.11.2"}});n.extend(v.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(n){return u(this._defaults,n||{}),this},_attachDatepicker:function(t,i){var r,f,u;r=t.nodeName.toLowerCase();f=r==="div"||r==="span";t.id||(this.uuid+=1,t.id="dp"+this.uuid);u=this._newInst(n(t),f);u.settings=n.extend({},i||{});r==="input"?this._connectDatepicker(t,u):f&&this._inlineDatepicker(t,u)},_newInst:function(t,i){var r=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:r,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?y(n("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")):this.dpDiv}},_connectDatepicker:function(t,i){var r=n(t);(i.append=n([]),i.trigger=n([]),r.hasClass(this.markerClassName))||(this._attachments(r,i),r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),n.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var u,r,f,e=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove();e&&(i.append=n("<span class='"+this._appendClass+"'>"+e+"<\/span>"),t[o?"before":"after"](i.append));t.unbind("focus",this._showDatepicker);i.trigger&&i.trigger.remove();u=this._get(i,"showOn");(u==="focus"||u==="both")&&t.focus(this._showDatepicker);(u==="button"||u==="both")&&(r=this._get(i,"buttonText"),f=this._get(i,"buttonImage"),i.trigger=n(this._get(i,"buttonImageOnly")?n("<img/>").addClass(this._triggerClass).attr({src:f,alt:r,title:r}):n("<button type='button'><\/button>").addClass(this._triggerClass).html(f?n("<img/>").attr({src:f,alt:r,title:r}):r)),t[o?"before":"after"](i.trigger),i.trigger.click(function(){return n.datepicker._datepickerShowing&&n.datepicker._lastInput===t[0]?n.datepicker._hideDatepicker():n.datepicker._datepickerShowing&&n.datepicker._lastInput!==t[0]?(n.datepicker._hideDatepicker(),n.datepicker._showDatepicker(t[0])):n.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(n){if(this._get(n,"autoSize")&&!n.inline){var r,u,f,t,i=new Date(2009,11,20),e=this._get(n,"dateFormat");e.match(/[DM]/)&&(r=function(n){for(u=0,f=0,t=0;t<n.length;t++)n[t].length>u&&(u=n[t].length,f=t);return f},i.setMonth(r(this._get(n,e.match(/MM/)?"monthNames":"monthNamesShort"))),i.setDate(r(this._get(n,e.match(/DD/)?"dayNames":"dayNamesShort"))+20-i.getDay()));n.input.attr("size",this._formatDate(n,i).length)}},_inlineDatepicker:function(t,i){var r=n(t);r.hasClass(this.markerClassName)||(r.addClass(this.markerClassName).append(i.dpDiv),n.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,r,f,e){var s,h,c,l,a,o=this._dialogInst;return o||(this.uuid+=1,s="dp"+this.uuid,this._dialogInput=n("<input type='text' id='"+s+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),n("body").append(this._dialogInput),o=this._dialogInst=this._newInst(this._dialogInput,!1),o.settings={},n.data(this._dialogInput[0],"datepicker",o)),u(o.settings,f||{}),i=i&&i.constructor===Date?this._formatDate(o,i):i,this._dialogInput.val(i),this._pos=e?e.length?e:[e.pageX,e.pageY]:null,this._pos||(h=document.documentElement.clientWidth,c=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,a=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+l,c/2-150+a]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),o.settings.onSelect=r,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),n.blockUI&&n.blockUI(this.dpDiv),n.data(this._dialogInput[0],"datepicker",o),this},_destroyDatepicker:function(t){var i,r=n(t),u=n.data(t,"datepicker");r.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),n.removeData(t,"datepicker"),i==="input"?(u.append.remove(),u.trigger.remove(),r.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(i==="div"||i==="span")&&r.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,r,u=n(t),f=n.data(t,"datepicker");u.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),i==="input"?(t.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):(i==="div"||i==="span")&&(r=u.children("."+this._inlineClass),r.children().removeClass("ui-state-disabled"),r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=n.map(this._disabledInputs,function(n){return n===t?null:n}))},_disableDatepicker:function(t){var i,r,u=n(t),f=n.data(t,"datepicker");u.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),i==="input"?(t.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):(i==="div"||i==="span")&&(r=u.children("."+this._inlineClass),r.children().addClass("ui-state-disabled"),r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=n.map(this._disabledInputs,function(n){return n===t?null:n}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(n){if(!n)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===n)return!0;return!1},_getInst:function(t){try{return n.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(t,i,r){var e,h,o,s,f=this._getInst(t);if(arguments.length===2&&typeof i=="string")return i==="defaults"?n.extend({},n.datepicker._defaults):f?i==="all"?n.extend({},f.settings):this._get(f,i):null;e=i||{};typeof i=="string"&&(e={},e[i]=r);f&&(this._curInst===f&&this._hideDatepicker(),h=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(f,"min"),s=this._getMinMaxDate(f,"max"),u(f.settings,e),o!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(f.settings.minDate=this._formatDate(f,o)),s!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(f.settings.maxDate=this._formatDate(f,s)),"disabled"in e&&(e.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(n(t),f),this._autoSize(f),this._setDate(f,h),this._updateAlternate(f),this._updateDatepicker(f))},_changeDatepicker:function(n,t,i){this._optionDatepicker(n,t,i)},_refreshDatepicker:function(n){var t=this._getInst(n);t&&this._updateDatepicker(t)},_setDateDatepicker:function(n,t){var i=this._getInst(n);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(n,t){var i=this._getInst(n);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var u,e,f,i=n.datepicker._getInst(t.target),r=!0,o=i.dpDiv.is(".ui-datepicker-rtl");if(i._keyEvent=!0,n.datepicker._datepickerShowing)switch(t.keyCode){case 9:n.datepicker._hideDatepicker();r=!1;break;case 13:return f=n("td."+n.datepicker._dayOverClass+":not(."+n.datepicker._currentClass+")",i.dpDiv),f[0]&&n.datepicker._selectDay(t.target,i.selectedMonth,i.selectedYear,f[0]),u=n.datepicker._get(i,"onSelect"),u?(e=n.datepicker._formatDate(i),u.apply(i.input?i.input[0]:null,[e,i])):n.datepicker._hideDatepicker(),!1;case 27:n.datepicker._hideDatepicker();break;case 33:n.datepicker._adjustDate(t.target,t.ctrlKey?-n.datepicker._get(i,"stepBigMonths"):-n.datepicker._get(i,"stepMonths"),"M");break;case 34:n.datepicker._adjustDate(t.target,t.ctrlKey?+n.datepicker._get(i,"stepBigMonths"):+n.datepicker._get(i,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&n.datepicker._clearDate(t.target);r=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&n.datepicker._gotoToday(t.target);r=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&n.datepicker._adjustDate(t.target,o?1:-1,"D");r=t.ctrlKey||t.metaKey;t.originalEvent.altKey&&n.datepicker._adjustDate(t.target,t.ctrlKey?-n.datepicker._get(i,"stepBigMonths"):-n.datepicker._get(i,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&n.datepicker._adjustDate(t.target,-7,"D");r=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&n.datepicker._adjustDate(t.target,o?-1:1,"D");r=t.ctrlKey||t.metaKey;t.originalEvent.altKey&&n.datepicker._adjustDate(t.target,t.ctrlKey?+n.datepicker._get(i,"stepBigMonths"):+n.datepicker._get(i,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&n.datepicker._adjustDate(t.target,7,"D");r=t.ctrlKey||t.metaKey;break;default:r=!1}else t.keyCode===36&&t.ctrlKey?n.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,r,u=n.datepicker._getInst(t.target);if(n.datepicker._get(u,"constrainInput"))return i=n.datepicker._possibleChars(n.datepicker._get(u,"dateFormat")),r=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||r<" "||!i||i.indexOf(r)>-1},_doKeyUp:function(t){var r,i=n.datepicker._getInst(t.target);if(i.input.val()!==i.lastVal)try{r=n.datepicker.parseDate(n.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,n.datepicker._getFormatConfig(i));r&&(n.datepicker._setDateFromField(i),n.datepicker._updateAlternate(i),n.datepicker._updateDatepicker(i))}catch(u){}return!0},_showDatepicker:function(t){if(t=t.target||t,t.nodeName.toLowerCase()!=="input"&&(t=n("input",t.parentNode)[0]),!n.datepicker._isDisabledDatepicker(t)&&n.datepicker._lastInput!==t){var i,o,s,r,f,e,h;(i=n.datepicker._getInst(t),n.datepicker._curInst&&n.datepicker._curInst!==i&&(n.datepicker._curInst.dpDiv.stop(!0,!0),i&&n.datepicker._datepickerShowing&&n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])),o=n.datepicker._get(i,"beforeShow"),s=o?o.apply(t,[t,i]):{},s!==!1)&&(u(i.settings,s),i.lastVal=null,n.datepicker._lastInput=t,n.datepicker._setDateFromField(i),n.datepicker._inDialog&&(t.value=""),n.datepicker._pos||(n.datepicker._pos=n.datepicker._findPos(t),n.datepicker._pos[1]+=t.offsetHeight),r=!1,n(t).parents().each(function(){return r|=n(this).css("position")==="fixed",!r}),f={left:n.datepicker._pos[0],top:n.datepicker._pos[1]},n.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),n.datepicker._updateDatepicker(i),f=n.datepicker._checkOffset(i,f,r),i.dpDiv.css({position:n.datepicker._inDialog&&n.blockUI?"static":r?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"}),i.inline||(e=n.datepicker._get(i,"showAnim"),h=n.datepicker._get(i,"duration"),i.dpDiv.css("z-index",ut(n(t))+1),n.datepicker._datepickerShowing=!0,n.effects&&n.effects.effect[e]?i.dpDiv.show(e,n.datepicker._get(i,"showOptions"),h):i.dpDiv[e||"show"](e?h:null),n.datepicker._shouldFocusInput(i)&&i.input.focus(),n.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4;r=t;t.dpDiv.empty().append(this._generateHTML(t));this._attachHandlers(t);var i,u=this._getNumberOfMonths(t),f=u[1],e=t.dpDiv.find("."+this._dayOverClass+" a");e.length>0&&p.apply(e.get(0));t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");f>1&&t.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",17*f+"em");t.dpDiv[(u[0]!==1||u[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");t===n.datepicker._curInst&&n.datepicker._datepickerShowing&&n.datepicker._shouldFocusInput(t)&&t.input.focus();t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);i=t.yearshtml=null},0))},_shouldFocusInput:function(n){return n.input&&n.input.is(":visible")&&!n.input.is(":disabled")&&!n.input.is(":focus")},_checkOffset:function(t,i,r){var u=t.dpDiv.outerWidth(),f=t.dpDiv.outerHeight(),h=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,e=document.documentElement.clientWidth+(r?0:n(document).scrollLeft()),s=document.documentElement.clientHeight+(r?0:n(document).scrollTop());return i.left-=this._get(t,"isRTL")?u-h:0,i.left-=r&&i.left===t.input.offset().left?n(document).scrollLeft():0,i.top-=r&&i.top===t.input.offset().top+o?n(document).scrollTop():0,i.left-=Math.min(i.left,i.left+u>e&&e>u?Math.abs(i.left+u-e):0),i.top-=Math.min(i.top,i.top+f>s&&s>f?Math.abs(f+o):0),i},_findPos:function(t){for(var i,r=this._getInst(t),u=this._get(r,"isRTL");t&&(t.type==="hidden"||t.nodeType!==1||n.expr.filters.hidden(t));)t=t[u?"previousSibling":"nextSibling"];return i=n(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var r,f,u,e,i=this._curInst;i&&(!t||i===n.data(t,"datepicker"))&&this._datepickerShowing&&(r=this._get(i,"showAnim"),f=this._get(i,"duration"),u=function(){n.datepicker._tidyDialog(i)},n.effects&&(n.effects.effect[r]||n.effects[r])?i.dpDiv.hide(r,n.datepicker._get(i,"showOptions"),f,u):i.dpDiv[r==="slideDown"?"slideUp":r==="fadeIn"?"fadeOut":"hide"](r?f:null,u),r||u(),this._datepickerShowing=!1,e=this._get(i,"onClose"),e&&e.apply(i.input?i.input[0]:null,[i.input?i.input.val():"",i]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),n.blockUI&&(n.unblockUI(),n("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(n){n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(n.datepicker._curInst){var i=n(t.target),r=n.datepicker._getInst(i[0]);(i[0].id===n.datepicker._mainDivId||i.parents("#"+n.datepicker._mainDivId).length!==0||i.hasClass(n.datepicker.markerClassName)||i.closest("."+n.datepicker._triggerClass).length||!n.datepicker._datepickerShowing||n.datepicker._inDialog&&n.blockUI)&&(!i.hasClass(n.datepicker.markerClassName)||n.datepicker._curInst===r)||n.datepicker._hideDatepicker()}},_adjustDate:function(t,i,r){var f=n(t),u=this._getInst(f[0]);this._isDisabledDatepicker(f[0])||(this._adjustInstDate(u,i+(r==="M"?this._get(u,"showCurrentAtPos"):0),r),this._updateDatepicker(u))},_gotoToday:function(t){var r,u=n(t),i=this._getInst(u[0]);this._get(i,"gotoCurrent")&&i.currentDay?(i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear):(r=new Date,i.selectedDay=r.getDate(),i.drawMonth=i.selectedMonth=r.getMonth(),i.drawYear=i.selectedYear=r.getFullYear());this._notifyChange(i);this._adjustDate(u)},_selectMonthYear:function(t,i,r){var f=n(t),u=this._getInst(f[0]);u["selected"+(r==="M"?"Month":"Year")]=u["draw"+(r==="M"?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10);this._notifyChange(u);this._adjustDate(f)},_selectDay:function(t,i,r,u){var f,e=n(t);n(u).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0])||(f=this._getInst(e[0]),f.selectedDay=f.currentDay=n("a",u).html(),f.selectedMonth=f.currentMonth=i,f.selectedYear=f.currentYear=r,this._selectDate(t,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(t){var i=n(t);this._selectDate(i,"")},_selectDate:function(t,i){var u,f=n(t),r=this._getInst(f[0]);i=i!=null?i:this._formatDate(r);r.input&&r.input.val(i);this._updateAlternate(r);u=this._get(r,"onSelect");u?u.apply(r.input?r.input[0]:null,[i,r]):r.input&&r.input.trigger("change");r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],typeof r.input[0]!="object"&&r.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,r,u,f=this._get(t,"altField");f&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),r=this._getDate(t),u=this.formatDate(i,r,this._getFormatConfig(t)),n(f).each(function(){n(this).val(u)}))},noWeekends:function(n){var t=n.getDay();return[t>0&&t<6,""]},iso8601Week:function(n){var i,t=new Date(n.getTime());return t.setDate(t.getDate()+4-(t.getDay()||7)),i=t.getTime(),t.setMonth(0),t.setDate(1),Math.floor(Math.round((i-t)/864e5)/7)+1},parseDate:function(t,i,r){if(t==null||i==null)throw"Invalid arguments";if(i=typeof i=="object"?i.toString():i+"",i==="")return null;for(var a,v,f=0,y=(r?r.shortYearCutoff:null)||this._defaults.shortYearCutoff,d=typeof y!="string"?y:(new Date).getFullYear()%100+parseInt(y,10),g=(r?r.dayNamesShort:null)||this._defaults.dayNamesShort,nt=(r?r.dayNames:null)||this._defaults.dayNames,tt=(r?r.monthNamesShort:null)||this._defaults.monthNamesShort,it=(r?r.monthNames:null)||this._defaults.monthNames,e=-1,s=-1,h=-1,p=-1,w=!1,u,l=function(n){var i=o+1<t.length&&t.charAt(o+1)===n;return i&&o++,i},c=function(n){var u=l(n),r=n==="@"?14:n==="!"?20:n==="y"&&u?4:n==="o"?3:2,e=n==="y"?r:1,o=new RegExp("^\\d{"+e+","+r+"}"),t=i.substring(f).match(o);if(!t)throw"Missing number at position "+f;return f+=t[0].length,parseInt(t[0],10)},k=function(t,r,u){var e=-1,o=n.map(l(t)?u:r,function(n,t){return[[t,n]]}).sort(function(n,t){return-(n[1].length-t[1].length)});if(n.each(o,function(n,t){var r=t[1];if(i.substr(f,r.length).toLowerCase()===r.toLowerCase())return e=t[0],f+=r.length,!1}),e!==-1)return e+1;throw"Unknown name at position "+f;},b=function(){if(i.charAt(f)!==t.charAt(o))throw"Unexpected literal at position "+f;f++},o=0;o<t.length;o++)if(w)t.charAt(o)!=="'"||l("'")?b():w=!1;else switch(t.charAt(o)){case"d":h=c("d");break;case"D":k("D",g,nt);break;case"o":p=c("o");break;case"m":s=c("m");break;case"M":s=k("M",tt,it);break;case"y":e=c("y");break;case"@":u=new Date(c("@"));e=u.getFullYear();s=u.getMonth()+1;h=u.getDate();break;case"!":u=new Date((c("!")-this._ticksTo1970)/1e4);e=u.getFullYear();s=u.getMonth()+1;h=u.getDate();break;case"'":l("'")?b():w=!0;break;default:b()}if(f<i.length&&(v=i.substr(f),!/^\s+/.test(v)))throw"Extra/unparsed characters found in date: "+v;if(e===-1?e=(new Date).getFullYear():e<100&&(e+=(new Date).getFullYear()-(new Date).getFullYear()%100+(e<=d?0:-100)),p>-1){s=1;h=p;do{if(a=this._getDaysInMonth(e,s-1),h<=a)break;s++;h-=a}while(1)}if(u=this._daylightSavingAdjust(new Date(e,s-1,h)),u.getFullYear()!==e||u.getMonth()+1!==s||u.getDate()!==h)throw"Invalid date";return u},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*864e9,formatDate:function(n,t,i){if(!t)return"";var u,h=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,c=(i?i.dayNames:null)||this._defaults.dayNames,l=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,a=(i?i.monthNames:null)||this._defaults.monthNames,f=function(t){var i=u+1<n.length&&n.charAt(u+1)===t;return i&&u++,i},e=function(n,t,i){var r=""+t;if(f(n))while(r.length<i)r="0"+r;return r},s=function(n,t,i,r){return f(n)?r[t]:i[t]},r="",o=!1;if(t)for(u=0;u<n.length;u++)if(o)n.charAt(u)!=="'"||f("'")?r+=n.charAt(u):o=!1;else switch(n.charAt(u)){case"d":r+=e("d",t.getDate(),2);break;case"D":r+=s("D",t.getDay(),h,c);break;case"o":r+=e("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":r+=e("m",t.getMonth()+1,2);break;case"M":r+=s("M",t.getMonth(),l,a);break;case"y":r+=f("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":r+=t.getTime();break;case"!":r+=t.getTime()*1e4+this._ticksTo1970;break;case"'":f("'")?r+="'":o=!0;break;default:r+=n.charAt(u)}return r},_possibleChars:function(n){for(var i="",r=!1,u=function(i){var r=t+1<n.length&&n.charAt(t+1)===i;return r&&t++,r},t=0;t<n.length;t++)if(r)n.charAt(t)!=="'"||u("'")?i+=n.charAt(t):r=!1;else switch(n.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":u("'")?i+="'":r=!0;break;default:i+=n.charAt(t)}return i},_get:function(n,t){return n.settings[t]!==undefined?n.settings[t]:this._defaults[t]},_setDateFromField:function(n,t){if(n.input.val()!==n.lastVal){var f=this._get(n,"dateFormat"),r=n.lastVal=n.input?n.input.val():null,u=this._getDefaultDate(n),i=u,e=this._getFormatConfig(n);try{i=this.parseDate(f,r,e)||u}catch(o){r=t?"":r}n.selectedDay=i.getDate();n.drawMonth=n.selectedMonth=i.getMonth();n.drawYear=n.selectedYear=i.getFullYear();n.currentDay=r?i.getDate():0;n.currentMonth=r?i.getMonth():0;n.currentYear=r?i.getFullYear():0;this._adjustInstDate(n)}},_getDefaultDate:function(n){return this._restrictMinMax(n,this._determineDate(n,this._get(n,"defaultDate"),new Date))},_determineDate:function(t,i,r){var f=function(n){var t=new Date;return t.setDate(t.getDate()+n),t},e=function(i){try{return n.datepicker.parseDate(n.datepicker._get(t,"dateFormat"),i,n.datepicker._getFormatConfig(t))}catch(h){}for(var o=(i.toLowerCase().match(/^c/)?n.datepicker._getDate(t):null)||new Date,f=o.getFullYear(),e=o.getMonth(),r=o.getDate(),s=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,u=s.exec(i);u;){switch(u[2]||"d"){case"d":case"D":r+=parseInt(u[1],10);break;case"w":case"W":r+=parseInt(u[1],10)*7;break;case"m":case"M":e+=parseInt(u[1],10);r=Math.min(r,n.datepicker._getDaysInMonth(f,e));break;case"y":case"Y":f+=parseInt(u[1],10);r=Math.min(r,n.datepicker._getDaysInMonth(f,e))}u=s.exec(i)}return new Date(f,e,r)},u=i==null||i===""?r:typeof i=="string"?e(i):typeof i=="number"?isNaN(i)?r:f(i):new Date(i.getTime());return u=u&&u.toString()==="Invalid Date"?r:u,u&&(u.setHours(0),u.setMinutes(0),u.setSeconds(0),u.setMilliseconds(0)),this._daylightSavingAdjust(u)},_daylightSavingAdjust:function(n){return n?(n.setHours(n.getHours()>12?n.getHours()+2:0),n):null},_setDate:function(n,t,i){var u=!t,f=n.selectedMonth,e=n.selectedYear,r=this._restrictMinMax(n,this._determineDate(n,t,new Date));n.selectedDay=n.currentDay=r.getDate();n.drawMonth=n.selectedMonth=n.currentMonth=r.getMonth();n.drawYear=n.selectedYear=n.currentYear=r.getFullYear();f===n.selectedMonth&&e===n.selectedYear||i||this._notifyChange(n);this._adjustInstDate(n);n.input&&n.input.val(u?"":this._formatDate(n))},_getDate:function(n){return!n.currentYear||n.input&&n.input.val()===""?null:this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay))},_attachHandlers:function(t){var r=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){n.datepicker._adjustDate(i,-r,"M")},next:function(){n.datepicker._adjustDate(i,+r,"M")},hide:function(){n.datepicker._hideDatepicker()},today:function(){n.datepicker._gotoToday(i)},selectDay:function(){return n.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return n.datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return n.datepicker._selectMonthYear(i,this,"Y"),!1}};n(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(n){var b,s,rt,h,ut,k,ft,et,ri,c,ot,ui,fi,ei,oi,st,g,si,ht,nt,f,y,ct,p,lt,l,u,at,vt,yt,pt,tt,wt,i,bt,kt,d,a,it,dt=new Date,gt=this._daylightSavingAdjust(new Date(dt.getFullYear(),dt.getMonth(),dt.getDate())),e=this._get(n,"isRTL"),li=this._get(n,"showButtonPanel"),hi=this._get(n,"hideIfNoPrevNext"),ni=this._get(n,"navigationAsDateFormat"),o=this._getNumberOfMonths(n),ai=this._get(n,"showCurrentAtPos"),ci=this._get(n,"stepMonths"),ti=o[0]!==1||o[1]!==1,ii=this._daylightSavingAdjust(n.currentDay?new Date(n.currentYear,n.currentMonth,n.currentDay):new Date(9999,9,9)),w=this._getMinMaxDate(n,"min"),v=this._getMinMaxDate(n,"max"),t=n.drawMonth-ai,r=n.drawYear;if(t<0&&(t+=12,r--),v)for(b=this._daylightSavingAdjust(new Date(v.getFullYear(),v.getMonth()-o[0]*o[1]+1,v.getDate())),b=w&&b<w?w:b;this._daylightSavingAdjust(new Date(r,t,1))>b;)t--,t<0&&(t=11,r--);for(n.drawMonth=t,n.drawYear=r,s=this._get(n,"prevText"),s=ni?this.formatDate(s,this._daylightSavingAdjust(new Date(r,t-ci,1)),this._getFormatConfig(n)):s,rt=this._canAdjustMonth(n,-1,r,t)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(e?"e":"w")+"'>"+s+"<\/span><\/a>":hi?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(e?"e":"w")+"'>"+s+"<\/span><\/a>",h=this._get(n,"nextText"),h=ni?this.formatDate(h,this._daylightSavingAdjust(new Date(r,t+ci,1)),this._getFormatConfig(n)):h,ut=this._canAdjustMonth(n,1,r,t)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+h+"'><span class='ui-icon ui-icon-circle-triangle-"+(e?"w":"e")+"'>"+h+"<\/span><\/a>":hi?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+h+"'><span class='ui-icon ui-icon-circle-triangle-"+(e?"w":"e")+"'>"+h+"<\/span><\/a>",k=this._get(n,"currentText"),ft=this._get(n,"gotoCurrent")&&n.currentDay?ii:gt,k=ni?this.formatDate(k,ft,this._getFormatConfig(n)):k,et=n.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(n,"closeText")+"<\/button>",ri=li?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(e?et:"")+(this._isInRange(n,ft)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+k+"<\/button>":"")+(e?"":et)+"<\/div>":"",c=parseInt(this._get(n,"firstDay"),10),c=isNaN(c)?0:c,ot=this._get(n,"showWeek"),ui=this._get(n,"dayNames"),fi=this._get(n,"dayNamesMin"),ei=this._get(n,"monthNames"),oi=this._get(n,"monthNamesShort"),st=this._get(n,"beforeShowDay"),g=this._get(n,"showOtherMonths"),si=this._get(n,"selectOtherMonths"),ht=this._getDefaultDate(n),nt="",f,y=0;y<o[0];y++){for(ct="",this.maxRows=4,p=0;p<o[1];p++){if(lt=this._daylightSavingAdjust(new Date(r,t,n.selectedDay)),l=" ui-corner-all",u="",ti){if(u+="<div class='ui-datepicker-group",o[1]>1)switch(p){case 0:u+=" ui-datepicker-group-first";l=" ui-corner-"+(e?"right":"left");break;case o[1]-1:u+=" ui-datepicker-group-last";l=" ui-corner-"+(e?"left":"right");break;default:u+=" ui-datepicker-group-middle";l=""}u+="'>"}for(u+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+l+"'>"+(/all|left/.test(l)&&y===0?e?ut:rt:"")+(/all|right/.test(l)&&y===0?e?rt:ut:"")+this._generateMonthYearHeader(n,t,r,w,v,y>0||p>0,ei,oi)+"<\/div><table class='ui-datepicker-calendar'><thead><tr>",at=ot?"<th class='ui-datepicker-week-col'>"+this._get(n,"weekHeader")+"<\/th>":"",f=0;f<7;f++)vt=(f+c)%7,at+="<th scope='col'"+((f+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+ui[vt]+"'>"+fi[vt]+"<\/span><\/th>";for(u+=at+"<\/tr><\/thead><tbody>",yt=this._getDaysInMonth(r,t),r===n.selectedYear&&t===n.selectedMonth&&(n.selectedDay=Math.min(n.selectedDay,yt)),pt=(this._getFirstDayOfMonth(r,t)-c+7)%7,tt=Math.ceil((pt+yt)/7),wt=ti?this.maxRows>tt?this.maxRows:tt:tt,this.maxRows=wt,i=this._daylightSavingAdjust(new Date(r,t,1-pt)),bt=0;bt<wt;bt++){for(u+="<tr>",kt=ot?"<td class='ui-datepicker-week-col'>"+this._get(n,"calculateWeek")(i)+"<\/td>":"",f=0;f<7;f++)d=st?st.apply(n.input?n.input[0]:null,[i]):[!0,""],a=i.getMonth()!==t,it=a&&!si||!d[0]||w&&i<w||v&&i>v,kt+="<td class='"+((f+c+6)%7>=5?" ui-datepicker-week-end":"")+(a?" ui-datepicker-other-month":"")+(i.getTime()===lt.getTime()&&t===n.selectedMonth&&n._keyEvent||ht.getTime()===i.getTime()&&ht.getTime()===lt.getTime()?" "+this._dayOverClass:"")+(it?" "+this._unselectableClass+" ui-state-disabled":"")+(a&&!g?"":" "+d[1]+(i.getTime()===ii.getTime()?" "+this._currentClass:"")+(i.getTime()===gt.getTime()?" ui-datepicker-today":""))+"'"+((!a||g)&&d[2]?" title='"+d[2].replace(/'/g,"&#39;")+"'":"")+(it?"":" data-handler='selectDay' data-event='click' data-month='"+i.getMonth()+"' data-year='"+i.getFullYear()+"'")+">"+(a&&!g?"&#xa0;":it?"<span class='ui-state-default'>"+i.getDate()+"<\/span>":"<a class='ui-state-default"+(i.getTime()===gt.getTime()?" ui-state-highlight":"")+(i.getTime()===ii.getTime()?" ui-state-active":"")+(a?" ui-priority-secondary":"")+"' href='#'>"+i.getDate()+"<\/a>")+"<\/td>",i.setDate(i.getDate()+1),i=this._daylightSavingAdjust(i);u+=kt+"<\/tr>"}t++;t>11&&(t=0,r++);u+="<\/tbody><\/table>"+(ti?"<\/div>"+(o[0]>0&&p===o[1]-1?"<div class='ui-datepicker-row-break'><\/div>":""):"");ct+=u}nt+=ct}return nt+=ri,n._keyEvent=!1,nt},_generateMonthYearHeader:function(n,t,i,r,u,f,e,o){var k,d,h,v,y,p,s,a,w=this._get(n,"changeMonth"),b=this._get(n,"changeYear"),g=this._get(n,"showMonthAfterYear"),c="<div class='ui-datepicker-title'>",l="";if(f||!w)l+="<span class='ui-datepicker-month'>"+e[t]+"<\/span>";else{for(k=r&&r.getFullYear()===i,d=u&&u.getFullYear()===i,l+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",h=0;h<12;h++)(!k||h>=r.getMonth())&&(!d||h<=u.getMonth())&&(l+="<option value='"+h+"'"+(h===t?" selected='selected'":"")+">"+o[h]+"<\/option>");l+="<\/select>"}if(g||(c+=l+(f||!(w&&b)?"&#xa0;":"")),!n.yearshtml)if(n.yearshtml="",f||!b)c+="<span class='ui-datepicker-year'>"+i+"<\/span>";else{for(v=this._get(n,"yearRange").split(":"),y=(new Date).getFullYear(),p=function(n){var t=n.match(/c[+\-].*/)?i+parseInt(n.substring(1),10):n.match(/[+\-].*/)?y+parseInt(n,10):parseInt(n,10);return isNaN(t)?y:t},s=p(v[0]),a=Math.max(s,p(v[1]||"")),s=r?Math.max(s,r.getFullYear()):s,a=u?Math.min(a,u.getFullYear()):a,n.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";s<=a;s++)n.yearshtml+="<option value='"+s+"'"+(s===i?" selected='selected'":"")+">"+s+"<\/option>";n.yearshtml+="<\/select>";c+=n.yearshtml;n.yearshtml=null}return c+=this._get(n,"yearSuffix"),g&&(c+=(f||!(w&&b)?"&#xa0;":"")+l),c+"<\/div>"},_adjustInstDate:function(n,t,i){var u=n.drawYear+(i==="Y"?t:0),f=n.drawMonth+(i==="M"?t:0),e=Math.min(n.selectedDay,this._getDaysInMonth(u,f))+(i==="D"?t:0),r=this._restrictMinMax(n,this._daylightSavingAdjust(new Date(u,f,e)));n.selectedDay=r.getDate();n.drawMonth=n.selectedMonth=r.getMonth();n.drawYear=n.selectedYear=r.getFullYear();(i==="M"||i==="Y")&&this._notifyChange(n)},_restrictMinMax:function(n,t){var i=this._getMinMaxDate(n,"min"),r=this._getMinMaxDate(n,"max"),u=i&&t<i?i:t;return r&&u>r?r:u},_notifyChange:function(n){var t=this._get(n,"onChangeMonthYear");t&&t.apply(n.input?n.input[0]:null,[n.selectedYear,n.selectedMonth+1,n])},_getNumberOfMonths:function(n){var t=this._get(n,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(n,t){return this._determineDate(n,this._get(n,t+"Date"),null)},_getDaysInMonth:function(n,t){return 32-this._daylightSavingAdjust(new Date(n,t,32)).getDate()},_getFirstDayOfMonth:function(n,t){return new Date(n,t,1).getDay()},_canAdjustMonth:function(n,t,i,r){var f=this._getNumberOfMonths(n),u=this._daylightSavingAdjust(new Date(i,r+(t<0?t:f[0]*f[1]),1));return t<0&&u.setDate(this._getDaysInMonth(u.getFullYear(),u.getMonth())),this._isInRange(n,u)},_isInRange:function(n,t){var i,f,e=this._getMinMaxDate(n,"min"),o=this._getMinMaxDate(n,"max"),r=null,u=null,s=this._get(n,"yearRange");return s&&(i=s.split(":"),f=(new Date).getFullYear(),r=parseInt(i[0],10),u=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=f),i[1].match(/[+\-].*/)&&(u+=f)),(!e||t.getTime()>=e.getTime())&&(!o||t.getTime()<=o.getTime())&&(!r||t.getFullYear()>=r)&&(!u||t.getFullYear()<=u)},_getFormatConfig:function(n){var t=this._get(n,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(n,"dayNamesShort"),dayNames:this._get(n,"dayNames"),monthNamesShort:this._get(n,"monthNamesShort"),monthNames:this._get(n,"monthNames")}},_formatDate:function(n,t,i,r){t||(n.currentDay=n.selectedDay,n.currentMonth=n.selectedMonth,n.currentYear=n.selectedYear);var u=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,i,t)):this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay));return this.formatDate(this._get(n,"dateFormat"),u,this._getFormatConfig(n))}});n.fn.datepicker=function(t){if(!this.length)return this;n.datepicker.initialized||(n(document).mousedown(n.datepicker._checkExternalClick),n.datepicker.initialized=!0);n("#"+n.datepicker._mainDivId).length===0&&n("body").append(n.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return typeof t=="string"&&(t==="isDisabled"||t==="getDate"||t==="widget")?n.datepicker["_"+t+"Datepicker"].apply(n.datepicker,[this[0]].concat(i)):t==="option"&&arguments.length===2&&typeof arguments[1]=="string"?n.datepicker["_"+t+"Datepicker"].apply(n.datepicker,[this[0]].concat(i)):this.each(function(){typeof t=="string"?n.datepicker["_"+t+"Datepicker"].apply(n.datepicker,[this].concat(i)):n.datepicker._attachDatepicker(this,t)})};n.datepicker=new v;n.datepicker.initialized=!1;n.datepicker.uuid=(new Date).getTime();n.datepicker.version="1.11.2";var lt=n.datepicker,at=n.widget("ui.dialog",{version:"1.11.2",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=n(this).css(t).offset().top;i<0&&n(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");this.options.title=this.options.title||this.originalTitle;this._createWrapper();this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);this._createTitlebar();this._createButtonPane();this.options.draggable&&n.fn.draggable&&this._makeDraggable();this.options.resizable&&n.fn.resizable&&this._makeResizable();this._isOpen=!1;this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?n(t):this.document.find(t||"body").eq(0)},_destroy:function(){var n,t=this.originalPosition;this._destroyOverlay();this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();this.uiDialog.stop(!0,!0).remove();this.originalTitle&&this.element.attr("title",this.originalTitle);n=t.parent.children().eq(t.index);n.length&&n[0]!==this.element[0]?n.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:n.noop,enable:n.noop,close:function(t){var i,r=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement;i&&i.nodeName.toLowerCase()!=="body"&&n(i).blur()}catch(u){}this._hide(this.uiDialog,this.options.hide,function(){r._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var r=!1,f=this.uiDialog.siblings(".ui-front:visible").map(function(){return+n(this).css("z-index")}).get(),u=Math.max.apply(null,f);return u>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",u+1),r=!0),r&&!i&&this._trigger("focus",t),r},open:function(){var t=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0;this.opener=n(this.document[0].activeElement);this._size();this._position();this._createOverlay();this._moveToTop(null,!0);this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1);this._show(this.uiDialog,this.options.show,function(){t._focusTabbable();t._trigger("focus")});this._makeFocusTarget();this._trigger("open")},_focusTabbable:function(){var n=this._focusedElement;n||(n=this.element.find("[autofocus]"));n.length||(n=this.element.find(":tabbable"));n.length||(n=this.uiDialogButtonPane.find(":tabbable"));n.length||(n=this.uiDialogTitlebarClose.filter(":tabbable"));n.length||(n=this.uiDialog);n.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||n.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault();i.call(this);this._delay(i)},_createWrapper:function(){this.uiDialog=n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===n.ui.keyCode.ESCAPE){t.preventDefault();this.close(t);return}if(t.keyCode===n.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),r=i.filter(":first"),u=i.filter(":last");t.target!==u[0]&&t.target!==this.uiDialog[0]||t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(this._delay(function(){u.focus()}),t.preventDefault()):(this._delay(function(){r.focus()}),t.preventDefault())}},mousedown:function(n){this._moveToTop(n)&&this._focusTabbable()}});this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);this._on(this.uiDialogTitlebar,{mousedown:function(t){n(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}});this.uiDialogTitlebarClose=n("<button type='button'><\/button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);this._on(this.uiDialogTitlebarClose,{click:function(n){n.preventDefault();this.close(n)}});t=n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);this._title(t);this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(n){this.options.title||n.html("&#160;");n.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiButtonSet=n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);this._createButtons()},_createButtons:function(){var i=this,t=this.options.buttons;if(this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),n.isEmptyObject(t)||n.isArray(t)&&!t.length){this.uiDialog.removeClass("ui-dialog-buttons");return}n.each(t,function(t,r){var u,f;r=n.isFunction(r)?{click:r,text:t}:r;r=n.extend({type:"button"},r);u=r.click;r.click=function(){u.apply(i.element[0],arguments)};f={icons:r.icons,text:r.showText};delete r.icons;delete r.showText;n("<button><\/button>",r).button(f).appendTo(i.uiButtonSet)});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function i(n){return{position:n.position,offset:n.offset}}var t=this,r=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(r,u){n(this).addClass("ui-dialog-dragging");t._blockFrames();t._trigger("dragStart",r,i(u))},drag:function(n,r){t._trigger("drag",n,i(r))},stop:function(u,f){var e=f.offset.left-t.document.scrollLeft(),o=f.offset.top-t.document.scrollTop();r.position={my:"left top",at:"left"+(e>=0?"+":"")+e+" top"+(o>=0?"+":"")+o,of:t.window};n(this).removeClass("ui-dialog-dragging");t._unblockFrames();t._trigger("dragStop",u,i(f))}})},_makeResizable:function(){function r(n){return{originalPosition:n.originalPosition,originalSize:n.originalSize,position:n.position,size:n.size}}var t=this,i=this.options,u=i.resizable,f=this.uiDialog.css("position"),e=typeof u=="string"?u:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:e,start:function(i,u){n(this).addClass("ui-dialog-resizing");t._blockFrames();t._trigger("resizeStart",i,r(u))},resize:function(n,i){t._trigger("resize",n,r(i))},stop:function(u,f){var e=t.uiDialog.offset(),o=e.left-t.document.scrollLeft(),s=e.top-t.document.scrollTop();i.height=t.uiDialog.height();i.width=t.uiDialog.width();i.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" top"+(s>=0?"+":"")+s,of:t.window};n(this).removeClass("ui-dialog-resizing");t._unblockFrames();t._trigger("resizeStop",u,r(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget();this._focusedElement=n(t.target)}})},_makeFocusTarget:function(){this._untrackInstance();this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=n.inArray(this,t);i!==-1&&t.splice(i,1)},_trackingInstances:function(){var n=this.document.data("ui-dialog-instances");return n||(n=[],this.document.data("ui-dialog-instances",n)),n},_minHeight:function(){var n=this.options;return n.height==="auto"?n.minHeight:Math.min(n.minHeight,n.height)},_position:function(){var n=this.uiDialog.is(":visible");n||this.uiDialog.show();this.uiDialog.position(this.options.position);n||this.uiDialog.hide()},_setOptions:function(t){var i=this,r=!1,u={};n.each(t,function(n,t){i._setOption(n,t);n in i.sizeRelatedOptions&&(r=!0);n in i.resizableRelatedOptions&&(u[n]=t)});r&&(this._size(),this._position());this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",u)},_setOption:function(n,t){var u,r,i=this.uiDialog;(n==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t),n!=="disabled")&&(this._super(n,t),n==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),n==="buttons"&&this._createButtons(),n==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),n==="draggable"&&(u=i.is(":data(ui-draggable)"),u&&!t&&i.draggable("destroy"),!u&&t&&this._makeDraggable()),n==="position"&&this._position(),n==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),r||t===!1||this._makeResizable()),n==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,i,r,n=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});n.minWidth>n.width&&(n.width=n.minWidth);t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight();i=Math.max(0,n.minHeight-t);r=typeof n.maxHeight=="number"?Math.max(0,n.maxHeight-t):"none";n.height==="auto"?this.element.css({minHeight:i,maxHeight:r,height:"auto"}):this.element.height(Math.max(0,n.height-t));this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=n(this);return n("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return n(t.target).closest(".ui-dialog").length?!0:!!n(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1});this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(n){t||this._allowInteraction(n)||(n.preventDefault(),this._trackingInstances()[0]._focusTabbable())}});this.overlay=n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());this._on(this.overlay,{mousedown:"_keepFocus"});this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var n=this.document.data("ui-dialog-overlays")-1;n?this.document.data("ui-dialog-overlays",n):this.document.unbind("focusin").removeData("ui-dialog-overlays");this.overlay.remove();this.overlay=null}}}),vt=n.widget("ui.progressbar",{version:"1.11.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});this.valueDiv=n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(n){if(n===undefined)return this.options.value;this.options.value=this._constrainedValue(n);this._refreshValue()},_constrainedValue:function(n){return n===undefined&&(n=this.options.value),this.indeterminate=n===!1,typeof n!="number"&&(n=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,n))},_setOptions:function(n){var t=n.value;delete n.value;this._super(n);this.options.value=this._constrainedValue(t);this._refreshValue()},_setOption:function(n,t){n==="max"&&(t=Math.max(this.min,t));n==="disabled"&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t);this._super(n,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%");this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null));this.oldValue!==t&&(this.oldValue=t,this._trigger("change"));t===this.options.max&&this._trigger("complete")}}),yt=n.widget("ui.selectmenu",{version:"1.11.2",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var n=this.element.uniqueId().attr("id");this.ids={element:n,button:n+"-button",menu:n+"-menu"};this._drawButton();this._drawMenu();this.options.disabled&&this.disable()},_drawButton:function(){var t=this,i=this.element.attr("tabindex");this.label=n("label[for='"+this.ids.element+"']").attr("for",this.ids.button);this._on(this.label,{click:function(n){this.button.focus();n.preventDefault()}});this.element.hide();this.button=n("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:i||this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element);n("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button);this.buttonText=n("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button);this._setText(this.buttonText,this.element.find("option:selected").text());this._resizeButton();this._on(this.button,this._buttonEvents);this.button.one("focusin",function(){t.menuItems||t._refreshMenu()});this._hoverable(this.button);this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=n("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu});this.menuWrap=n("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo());this.menuInstance=this.menu.menu({role:"listbox",select:function(n,i){n.preventDefault();t._setSelection();t._select(i.item.data("ui-selectmenu-item"),n)},focus:function(n,i){var r=i.item.data("ui-selectmenu-item");t.focusIndex!=null&&r.index!==t.focusIndex&&(t._trigger("focus",n,{item:r}),t.isOpen||t._select(r,n));t.focusIndex=r.index;t.button.attr("aria-activedescendant",t.menuItems.eq(r.index).attr("id"))}}).menu("instance");this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");this.menuInstance._off(this.menu,"mouseleave");this.menuInstance._closeOnDocumentClick=function(){return!1};this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu();this._setText(this.buttonText,this._getSelectedItem().text());this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var n,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),n=this._getSelectedItem(),this.menuInstance.focus(null,n),this._setAria(n.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(n){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",n))},_position:function(){this.menuWrap.position(n.extend({of:this.button},this.options.position))},close:function(n){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",n))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var u=this,r="";n.each(i,function(i,f){f.optgroup!==r&&(n("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(f.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:f.optgroup}).appendTo(t),r=f.optgroup);u._renderItemData(t,f)})},_renderItemData:function(n,t){return this._renderItem(n,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var r=n("<li>");return i.disabled&&r.addClass("ui-state-disabled"),this._setText(r,i.label),r.appendTo(t)},_setText:function(n,t){t?n.text(t):n.html("&#160;")},_move:function(n,t){var i,r,u=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),u+=":not(.ui-state-disabled)");r=n==="first"||n==="last"?i[n==="first"?"prevAll":"nextAll"](u).eq(-1):i[n+"All"](u).eq(0);r.length&&this.menuInstance.focus(t,r)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(n){this[this.isOpen?"close":"open"](n)},_setSelection:function(){var n;this.range&&(window.getSelection?(n=window.getSelection(),n.removeAllRanges(),n.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(n(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var n;window.getSelection?(n=window.getSelection(),n.rangeCount&&(this.range=n.getRangeAt(0))):this.range=document.selection.createRange()},click:function(n){this._setSelection();this._toggle(n)},keydown:function(t){var i=!0;switch(t.keyCode){case n.ui.keyCode.TAB:case n.ui.keyCode.ESCAPE:this.close(t);i=!1;break;case n.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case n.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case n.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case n.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case n.ui.keyCode.LEFT:this._move("prev",t);break;case n.ui.keyCode.RIGHT:this._move("next",t);break;case n.ui.keyCode.HOME:case n.ui.keyCode.PAGE_UP:this._move("first",t);break;case n.ui.keyCode.END:case n.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t);i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(n){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),n)},_select:function(n,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=n.index;this._setText(this.buttonText,n.label);this._setAria(n);this._trigger("select",t,{item:n});n.index!==i&&this._trigger("change",t,{item:n});this.close(t)},_setAria:function(n){var t=this.menuItems.eq(n.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t});this.menu.attr("aria-activedescendant",t)},_setOption:function(n,t){n==="icons"&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button);this._super(n,t);n==="appendTo"&&this.menuWrap.appendTo(this._appendTo());n==="disabled"&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0));n==="width"&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?n(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen);this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen);this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var n=this.options.width;n||(n=this.element.show().outerWidth(),this.element.hide());this.button.outerWidth(n)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,r){var u=n(r),f=u.parent("optgroup");i.push({element:u,index:t,value:u.attr("value"),label:u.text(),optgroup:f.attr("label")||"",disabled:f.prop("disabled")||u.prop("disabled")})});this.items=i},_destroy:function(){this.menuWrap.remove();this.button.remove();this.element.show();this.element.removeUniqueId();this.label.attr("for",this.ids.element)}}),pt=n.widget("ui.slider",n.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1;this._mouseSliding=!1;this._animateOff=!0;this._handleIndex=null;this._detectOrientation();this._mouseInit();this._calculateNewMax();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=!1},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue()},_createHandles:function(){var r,i,u=this.options,t=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f=[];for(i=u.values&&u.values.length||1,t.length>i&&(t.slice(i).remove(),t=t.slice(0,i)),r=t.length;r<i;r++)f.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'><\/span>");this.handles=t.add(n(f.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.each(function(t){n(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&t.values.length!==2?t.values=[t.values[0],t.values[0]]:n.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=n("<div><\/div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles);this._on(this.handles,this._handleEvents);this._hoverable(this.handles);this._focusable(this.handles)},_destroy:function(){this.handles.remove();this.range&&this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");this._mouseDestroy()},_mouseCapture:function(t){var s,f,r,i,u,h,e,c,o=this,l=this.options;return l.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),s={x:t.pageX,y:t.pageY},f=this._normValueFromMouse(s),r=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var e=Math.abs(f-o.values(t));(r>e||r===e&&(t===o._lastChangedValue||o.values(t)===l.min))&&(r=e,i=n(this),u=t)}),h=this._start(t,u),h===!1)?!1:(this._mouseSliding=!0,this._handleIndex=u,i.addClass("ui-state-active").focus(),e=i.offset(),c=!n(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=c?{left:0,top:0}:{left:t.pageX-e.left-i.width()/2,top:t.pageY-e.top-i.height()/2-(parseInt(i.css("borderTopWidth"),10)||0)-(parseInt(i.css("borderBottomWidth"),10)||0)+(parseInt(i.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,u,f),this._animateOff=!0,!0)},_mouseStart:function(){return!0},_mouseDrag:function(n){var t={x:n.pageX,y:n.pageY},i=this._normValueFromMouse(t);return this._slide(n,this._handleIndex,i),!1},_mouseStop:function(n){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(n,this._handleIndex),this._change(n,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(n){var i,r,t,u,f;return this.orientation==="horizontal"?(i=this.elementSize.width,r=n.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(i=this.elementSize.height,r=n.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),t=r/i,t>1&&(t=1),t<0&&(t=0),this.orientation==="vertical"&&(t=1-t),u=this._valueMax()-this._valueMin(),f=this._valueMin()+t*u,this._trimAlignValue(f)},_start:function(n,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",n,i)},_slide:function(n,t,i){var r,f,u;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&i>r||t===1&&i<r)&&(i=r),i!==this.values(t)&&(f=this.values(),f[t]=i,u=this._trigger("slide",n,{handle:this.handles[t],value:i,values:f}),r=this.values(t?0:1),u!==!1&&this.values(t,i))):i!==this.value()&&(u=this._trigger("slide",n,{handle:this.handles[t],value:i}),u!==!1&&this.value(i))},_stop:function(n,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values());this._trigger("stop",n,i)},_change:function(n,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values());this._lastChangedValue=t;this._trigger("change",n,i)}},value:function(n){if(arguments.length){this.options.value=this._trimAlignValue(n);this._refreshValue();this._change(null,0);return}return this._value()},values:function(t,i){var u,f,r;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(i);this._refreshValue();this._change(null,t);return}if(arguments.length)if(n.isArray(arguments[0])){for(u=this.options.values,f=arguments[0],r=0;r<u.length;r+=1)u[r]=this._trimAlignValue(f[r]),this._change(null,r);this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(t):this.value();else return this._values()},_setOption:function(t,i){var r,u=0;t==="range"&&this.options.range===!0&&(i==="min"?(this.options.value=this._values(0),this.options.values=null):i==="max"&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null));n.isArray(this.options.values)&&(u=this.options.values.length);t==="disabled"&&this.element.toggleClass("ui-state-disabled",!!i);this._super(t,i);switch(t){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();this.handles.css(i==="horizontal"?"bottom":"left","");break;case"value":this._animateOff=!0;this._refreshValue();this._change(null,0);this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),r=0;r<u;r+=1)this._change(null,r);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0;this._calculateNewMax();this._refreshValue();this._animateOff=!1;break;case"range":this._animateOff=!0;this._refresh();this._animateOff=!1}},_value:function(){var n=this.options.value;return this._trimAlignValue(n)},_values:function(n){var r,t,i;if(arguments.length)return r=this.options.values[n],this._trimAlignValue(r);if(this.options.values&&this.options.values.length){for(t=this.options.values.slice(),i=0;i<t.length;i+=1)t[i]=this._trimAlignValue(t[i]);return t}return[]},_trimAlignValue:function(n){if(n<=this._valueMin())return this._valueMin();if(n>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(n-this._valueMin())%t,r=n-i;return Math.abs(i)*2>=t&&(r+=i>0?t:-t),parseFloat(r.toFixed(5))},_calculateNewMax:function(){var n=(this.options.max-this._valueMin())%this.options.step;this.max=this.options.max-n},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var s,t,c,f,h,e=this.options.range,i=this.options,r=this,u=this._animateOff?!1:i.animate,o={};this.options.values&&this.options.values.length?this.handles.each(function(f){t=(r.values(f)-r._valueMin())/(r._valueMax()-r._valueMin())*100;o[r.orientation==="horizontal"?"left":"bottom"]=t+"%";n(this).stop(1,1)[u?"animate":"css"](o,i.animate);r.options.range===!0&&(r.orientation==="horizontal"?(f===0&&r.range.stop(1,1)[u?"animate":"css"]({left:t+"%"},i.animate),f===1&&r.range[u?"animate":"css"]({width:t-s+"%"},{queue:!1,duration:i.animate})):(f===0&&r.range.stop(1,1)[u?"animate":"css"]({bottom:t+"%"},i.animate),f===1&&r.range[u?"animate":"css"]({height:t-s+"%"},{queue:!1,duration:i.animate})));s=t}):(c=this.value(),f=this._valueMin(),h=this._valueMax(),t=h!==f?(c-f)/(h-f)*100:0,o[this.orientation==="horizontal"?"left":"bottom"]=t+"%",this.handle.stop(1,1)[u?"animate":"css"](o,i.animate),e==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[u?"animate":"css"]({width:t+"%"},i.animate),e==="max"&&this.orientation==="horizontal"&&this.range[u?"animate":"css"]({width:100-t+"%"},{queue:!1,duration:i.animate}),e==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[u?"animate":"css"]({height:t+"%"},i.animate),e==="max"&&this.orientation==="vertical"&&this.range[u?"animate":"css"]({height:100-t+"%"},{queue:!1,duration:i.animate}))},_handleEvents:{keydown:function(t){var e,r,i,u,f=n(t.target).data("ui-slider-handle-index");switch(t.keyCode){case n.ui.keyCode.HOME:case n.ui.keyCode.END:case n.ui.keyCode.PAGE_UP:case n.ui.keyCode.PAGE_DOWN:case n.ui.keyCode.UP:case n.ui.keyCode.RIGHT:case n.ui.keyCode.DOWN:case n.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,n(t.target).addClass("ui-state-active"),e=this._start(t,f),e===!1))return}u=this.options.step;r=this.options.values&&this.options.values.length?i=this.values(f):i=this.value();switch(t.keyCode){case n.ui.keyCode.HOME:i=this._valueMin();break;case n.ui.keyCode.END:i=this._valueMax();break;case n.ui.keyCode.PAGE_UP:i=this._trimAlignValue(r+(this._valueMax()-this._valueMin())/this.numPages);break;case n.ui.keyCode.PAGE_DOWN:i=this._trimAlignValue(r-(this._valueMax()-this._valueMin())/this.numPages);break;case n.ui.keyCode.UP:case n.ui.keyCode.RIGHT:if(r===this._valueMax())return;i=this._trimAlignValue(r+u);break;case n.ui.keyCode.DOWN:case n.ui.keyCode.LEFT:if(r===this._valueMin())return;i=this._trimAlignValue(r-u)}this._slide(t,f,i)},keyup:function(t){var i=n(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),n(t.target).removeClass("ui-state-active"))}}});var wt=n.widget("ui.spinner",{version:"1.11.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);this.value()!==""&&this._value(this.element.val(),!0);this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return n.each(["min","max","step"],function(n,r){var u=i.attr(r);u!==undefined&&u.length&&(t[r]=u)}),t},_events:{keydown:function(n){this._start(n)&&this._keydown(n)&&n.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(n){if(this.cancelBlur){delete this.cancelBlur;return}this._stop();this._refresh();this.previous!==this.element.val()&&this._trigger("change",n)},mousewheel:function(n,t){if(t){if(!this.spinning&&!this._start(n))return!1;this._spin((t>0?1:-1)*this.options.step,n);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(n)},100);n.preventDefault()}},"mousedown .ui-spinner-button":function(t){function r(){var n=this.element[0]===this.document[0].activeElement;n||(this.element.focus(),this.previous=i,this._delay(function(){this.previous=i}))}var i;(i=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),r.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur;r.call(this)}),this._start(t)!==!1)&&this._repeat(null,n(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(n(t.currentTarget).hasClass("ui-state-active")){if(this._start(t)===!1)return!1;this._repeat(null,n(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)}},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var n=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=n.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");this.buttons.height()>Math.ceil(n.height()*.5)&&n.height()>0&&n.height(n.height());this.options.disabled&&this.disable()},_keydown:function(t){var r=this.options,i=n.ui.keyCode;switch(t.keyCode){case i.UP:return this._repeat(null,1,t),!0;case i.DOWN:return this._repeat(null,-1,t),!0;case i.PAGE_UP:return this._repeat(null,r.page,t),!0;case i.PAGE_DOWN:return this._repeat(null,-r.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;<\/span><\/a>"},_start:function(n){return!this.spinning&&this._trigger("start",n)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(n,t,i){n=n||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,t,i)},n);this._spin(t*this.options.step,i)},_spin:function(n,t){var i=this.value()||0;this.counter||(this.counter=1);i=this._adjustValue(i+n*this._increment(this.counter));this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?n.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var n=this._precisionOf(this.options.step);return this.options.min!==null&&(n=Math.max(n,this._precisionOf(this.options.min))),n},_precisionOf:function(n){var t=n.toString(),i=t.indexOf(".");return i===-1?0:t.length-i-1},_adjustValue:function(n){var r,i,t=this.options;return(r=t.min!==null?t.min:0,i=n-r,i=Math.round(i/t.step)*t.step,n=r+i,n=parseFloat(n.toFixed(this._precision())),t.max!==null&&n>t.max)?t.max:t.min!==null&&n<t.min?t.min:n},_stop:function(n){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",n))},_setOption:function(n,t){if(n==="culture"||n==="numberFormat"){var i=this._parse(this.element.val());this.options[n]=t;this.element.val(this._format(i));return}(n==="max"||n==="min"||n==="step")&&typeof t=="string"&&(t=this._parse(t));n==="icons"&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));this._super(n,t);n==="disabled"&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:t(function(n){this._super(n)}),_parse:function(n){return typeof n=="string"&&n!==""&&(n=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(n,10,this.options.culture):+n),n===""||isNaN(n)?null:n},_format:function(n){return n===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(n,this.options.numberFormat,this.options.culture):n},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var n=this.value();return n===null?!1:n===this._adjustValue(n)},_value:function(n,t){var i;n!==""&&(i=this._parse(n),i!==null&&(t||(i=this._adjustValue(i)),n=this._format(i)));this.element.val(n);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:t(function(n){this._stepUp(n)}),_stepUp:function(n){this._start()&&(this._spin((n||1)*this.options.step),this._stop())},stepDown:t(function(n){this._stepDown(n)}),_stepDown:function(n){this._start()&&(this._spin((n||1)*-this.options.step),this._stop())},pageUp:t(function(n){this._stepUp((n||1)*this.options.page)}),pageDown:t(function(n){this._stepDown((n||1)*this.options.page)}),value:function(n){if(!arguments.length)return this._parse(this.element.val());t(this._value).call(this,n)},widget:function(){return this.uiSpinner}}),bt=n.widget("ui.tabs",{version:"1.11.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var n=/#.*$/;return function(t){var i,r;t=t.cloneNode(!1);i=t.href.replace(n,"");r=location.href.replace(n,"");try{i=decodeURIComponent(i)}catch(u){}try{r=decodeURIComponent(r)}catch(u){}return t.hash.length>1&&i===r}}(),_create:function(){var i=this,t=this.options;this.running=!1;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",t.collapsible);this._processTabs();t.active=this._initialActive();n.isArray(t.disabled)&&(t.disabled=n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"),function(n){return i.tabs.index(n)}))).sort());this.active=this.options.active!==!1&&this.anchors.length?this._findActive(t.active):n();this._refresh();this.active.length&&this.load(t.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,r=location.hash.substring(1);return t===null&&(r&&this.tabs.each(function(i,u){if(n(u).attr("aria-controls")===r)return t=i,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(t===null||t===-1)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):n()}},_tabKeydown:function(t){var r=n(this.document[0].activeElement).closest("li"),i=this.tabs.index(r),u=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case n.ui.keyCode.RIGHT:case n.ui.keyCode.DOWN:i++;break;case n.ui.keyCode.UP:case n.ui.keyCode.LEFT:u=!1;i--;break;case n.ui.keyCode.END:i=this.anchors.length-1;break;case n.ui.keyCode.HOME:i=0;break;case n.ui.keyCode.SPACE:t.preventDefault();clearTimeout(this.activating);this._activate(i);return;case n.ui.keyCode.ENTER:t.preventDefault();clearTimeout(this.activating);this._activate(i===this.options.active?!1:i);return;default:return}t.preventDefault();clearTimeout(this.activating);i=this._focusNextTab(i,u);t.ctrlKey||(r.attr("aria-selected","false"),this.tabs.eq(i).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",i)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===n.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===n.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===n.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function u(){return t>r&&(t=0),t<0&&(t=r),t}for(var r=this.tabs.length-1;n.inArray(u(),this.options.disabled)!==-1;)t=i?t+1:t-1;return t},_focusNextTab:function(n,t){return n=this._findNextTab(n,t),this.tabs.eq(n).focus(),n},_setOption:function(n,t){if(n==="active"){this._activate(t);return}if(n==="disabled"){this._setupDisabled(t);return}this._super(n,t);n==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0));n==="event"&&this._setupEvents(t);n==="heightStyle"&&this._setupHeightStyle(t)},_sanitizeSelector:function(n){return n?n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=n.map(i.filter(".ui-state-disabled"),function(n){return i.index(n)});this._processTabs();t.active!==!1&&this.anchors.length?this.active.length&&!n.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=n()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=n());this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,r=this.anchors,u=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){n(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){n(this).closest("li").is(".ui-state-disabled")&&this.blur()});this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return n("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=n();this.anchors.each(function(i,r){var f,u,e,s=n(r).uniqueId().attr("id"),o=n(r).closest("li"),h=o.attr("aria-controls");t._isLocal(r)?(f=r.hash,e=f.substring(1),u=t.element.find(t._sanitizeSelector(f))):(e=o.attr("aria-controls")||n({}).uniqueId()[0].id,f="#"+e,u=t.element.find(f),u.length||(u=t._createPanel(e),u.insertAfter(t.panels[i-1]||t.tablist)),u.attr("aria-live","polite"));u.length&&(t.panels=t.panels.add(u));h&&o.data("ui-tabs-aria-controls",h);o.attr({"aria-controls":e,"aria-labelledby":s});u.attr("aria-labelledby",s)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel");i&&(this._off(i.not(this.tabs)),this._off(r.not(this.anchors)),this._off(u.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return n("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){n.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i=0,r;r=this.tabs[i];i++)t===!0||n.inArray(i,t)!==-1?n(r).addClass("ui-state-disabled").attr("aria-disabled","true"):n(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&n.each(t.split(" "),function(n,t){i[t]="_eventHandler"});this._off(this.anchors.add(this.tabs).add(this.panels));this._on(!0,this.anchors,{click:function(n){n.preventDefault()}});this._on(this.anchors,i);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,r=this.element.parent();t==="fill"?(i=r.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=n(this),r=t.css("position");r!=="absolute"&&r!=="fixed"&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=n(this).outerHeight(!0)}),this.panels.each(function(){n(this).height(Math.max(0,i-n(this).innerHeight()+n(this).height()))}).css("overflow","auto")):t==="auto"&&(i=0,this.panels.each(function(){i=Math.max(i,n(this).height("").height())}).height(i))},_eventHandler:function(t){var u=this.options,r=this.active,c=n(t.currentTarget),i=c.closest("li"),f=i[0]===r[0],e=f&&u.collapsible,o=e?n():this._getPanelForTab(i),s=r.length?this._getPanelForTab(r):n(),h={oldTab:r,oldPanel:s,newTab:e?n():i,newPanel:o};(t.preventDefault(),i.hasClass("ui-state-disabled")||i.hasClass("ui-tabs-loading")||this.running||f&&!u.collapsible||this._trigger("beforeActivate",t,h)===!1)||(u.active=e?!1:this.tabs.index(i),this.active=f?n():i,this.xhr&&this.xhr.abort(),s.length||o.length||n.error("jQuery UI Tabs: Mismatching fragment identifier."),o.length&&this.load(this.tabs.index(i),t),this._toggle(t,h))},_toggle:function(t,i){function e(){u.running=!1;u._trigger("activate",t,i)}function o(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");r.length&&u.options.show?u._show(r,u.options.show,e):(r.show(),e())}var u=this,r=i.newPanel,f=i.oldPanel;this.running=!0;f.length&&this.options.hide?this._hide(f,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");o()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),f.hide(),o());f.attr("aria-hidden","true");i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});r.length&&f.length?i.oldTab.attr("tabIndex",-1):r.length&&this.tabs.filter(function(){return n(this).attr("tabIndex")===0}).attr("tabIndex",-1);r.attr("aria-hidden","false");i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var r,i=this._findActive(t);i[0]!==this.active[0]&&(i.length||(i=this.active),r=i.find(".ui-tabs-anchor")[0],this._eventHandler({target:r,currentTarget:r,preventDefault:n.noop}))},_findActive:function(t){return t===!1?n():this.tabs.eq(t)},_getIndex:function(n){return typeof n=="string"&&(n=this.anchors.index(this.anchors.filter("[href$='"+n+"']"))),n},_destroy:function(){this.xhr&&this.xhr.abort();this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();this.tablist.unbind(this.eventNamespace);this.tabs.add(this.panels).each(function(){n.data(this,"ui-tabs-destroy")?n(this).remove():n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")});this.tabs.each(function(){var t=n(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")});this.panels.show();this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(t===undefined?i=!1:(t=this._getIndex(t),i=n.isArray(i)?n.map(i,function(n){return n!==t?n:null}):n.map(this.tabs,function(n,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(t===undefined)i=!0;else{if(t=this._getIndex(t),n.inArray(t,i)!==-1)return;i=n.isArray(i)?n.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var u=this,r=this.tabs.eq(t),e=r.find(".ui-tabs-anchor"),f=this._getPanelForTab(r),o={tab:r,panel:f};this._isLocal(e[0])||(this.xhr=n.ajax(this._ajaxSettings(e,i,o)),this.xhr&&this.xhr.statusText!=="canceled"&&(r.addClass("ui-tabs-loading"),f.attr("aria-busy","true"),this.xhr.success(function(n){setTimeout(function(){f.html(n);u._trigger("load",i,o)},1)}).complete(function(n,t){setTimeout(function(){t==="abort"&&u.panels.stop(!1,!0);r.removeClass("ui-tabs-loading");f.removeAttr("aria-busy");n===u.xhr&&delete u.xhr},1)})))},_ajaxSettings:function(t,i,r){var u=this;return{url:t.attr("href"),beforeSend:function(t,f){return u._trigger("beforeLoad",i,n.extend({jqXHR:t,ajaxSettings:f},r))}}},_getPanelForTab:function(t){var i=n(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),kt=n.widget("ui.tooltip",{version:"1.11.2",options:{content:function(){var t=n(this).attr("title")||"";return n("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(i);t.data("ui-tooltip-id",i).attr("aria-describedby",n.trim(r.join(" ")))},_removeDescribedBy:function(t){var u=t.data("ui-tooltip-id"),i=(t.attr("aria-describedby")||"").split(/\s+/),r=n.inArray(u,i);r!==-1&&i.splice(r,1);t.removeData("ui-tooltip-id");i=n.trim(i.join(" "));i?t.attr("aria-describedby",i):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};this.options.disabled&&this._disable();this.liveRegion=n("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var r=this;if(t==="disabled"){this[i?"_disable":"_enable"]();this.options[t]=i;return}this._super(t,i);t==="content"&&n.each(this.tooltips,function(n,t){r._updateContent(t.element)})},_disable:function(){var t=this;n.each(this.tooltips,function(i,r){var u=n.Event("blur");u.target=u.currentTarget=r.element[0];t.close(u,!0)});this.element.find(this.options.items).addBack().each(function(){var t=n(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=n(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var r=this,i=n(t?t.target:this.element).closest(this.options.items);i.length&&!i.data("ui-tooltip-id")&&(i.attr("title")&&i.data("ui-tooltip-title",i.attr("title")),i.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&i.parents().each(function(){var t=n(this),i;t.data("ui-tooltip-open")&&(i=n.Event("blur"),i.target=i.currentTarget=this,r.close(i,!0));t.attr("title")&&(t.uniqueId(),r.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(i,t))},_updateContent:function(n,t){var i,r=this.options.content,u=this,f=t?t.type:null;if(typeof r=="string")return this._open(t,n,r);i=r.call(n[0],function(i){n.data("ui-tooltip-open")&&u._delay(function(){t&&(t.type=f);this._open(t,n,i)})});i&&this._open(t,n,i)},_open:function(t,i,r){function h(n){(s.of=n,u.is(":hidden"))||u.position(s)}var f,u,e,c,o,s=n.extend({},this.options.position);if(r){if(f=this._find(i),f){f.tooltip.find(".ui-tooltip-content").html(r);return}i.is("[title]")&&(t&&t.type==="mouseover"?i.attr("title",""):i.removeAttr("title"));f=this._tooltip(i);u=f.tooltip;this._addDescribedBy(i,u.attr("id"));u.find(".ui-tooltip-content").html(r);this.liveRegion.children().hide();r.clone?(o=r.clone(),o.removeAttr("id").find("[id]").removeAttr("id")):o=r;n("<div>").html(o).appendTo(this.liveRegion);this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:h}),h(t)):u.position(n.extend({of:i},this.options.position));u.hide();this._show(u,this.options.show);this.options.show&&this.options.show.delay&&(c=this.delayedShow=setInterval(function(){u.is(":visible")&&(h(s.of),clearInterval(c))},n.fx.interval));this._trigger("open",t,{tooltip:u});e={keyup:function(t){if(t.keyCode===n.ui.keyCode.ESCAPE){var r=n.Event(t);r.currentTarget=i[0];this.close(r,!0)}}};i[0]!==this.element[0]&&(e.remove=function(){this._removeTooltip(u)});t&&t.type!=="mouseover"||(e.mouseleave="close");t&&t.type!=="focusin"||(e.focusout="close");this._on(!0,i,e)}},close:function(t){var u,f=this,i=n(t?t.currentTarget:this.element),r=this._find(i);r&&((u=r.tooltip,r.closing)||(clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&!i.attr("title")&&i.attr("title",i.data("ui-tooltip-title")),this._removeDescribedBy(i),r.hiding=!0,u.stop(!0),this._hide(u,this.options.hide,function(){f._removeTooltip(n(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&n.each(this.parents,function(t,i){n(i.element).attr("title",i.title);delete f.parents[t]}),r.closing=!0,this._trigger("close",t,{tooltip:u}),r.hiding||(r.closing=!1)))},_tooltip:function(t){var i=n("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),r=i.uniqueId().attr("id");return n("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[r]={element:t,tooltip:i}},_find:function(n){var t=n.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(n){n.remove();delete this.tooltips[n.attr("id")]},_destroy:function(){var t=this;n.each(this.tooltips,function(i,r){var f=n.Event("blur"),u=r.element;f.target=f.currentTarget=u[0];t.close(f,!0);n("#"+i).remove();u.data("ui-tooltip-title")&&(u.attr("title")||u.attr("title",u.data("ui-tooltip-title")),u.removeData("ui-tooltip-title"))});this.liveRegion.remove()}}),w="ui-effects-",b=n;n.effects={effect:{}},function(n,t){function e(n,t,i){var r=s[t.type]||{};return n==null?i||!t.def?null:t.def:(n=r.floor?~~n:parseFloat(n),isNaN(n))?t.def:r.mod?(n+r.mod)%r.mod:0>n?0:r.max<n?r.max:n}function l(t){var e=i(),o=e._rgba=[];return(t=t.toLowerCase(),r(v,function(n,i){var r,s=i.re.exec(t),h=s&&i.parse(s),f=i.space||"rgba";if(h)return r=e[f](h),e[u[f].cache]=r[u[f].cache],o=e._rgba=r._rgba,!1}),o.length)?(o.join()==="0,0,0,0"&&n.extend(o,f.transparent),e):f[t]}function o(n,t,i){return(i=(i+1)%1,i*6<1)?n+(t-n)*i*6:i*2<1?t:i*3<2?n+(t-n)*(2/3-i)*6:n}var a=/^([\-+])=\s*(\d+\.?\d*)/,v=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(n){return[n[1],n[2],n[3],n[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(n){return[n[1]*2.55,n[2]*2.55,n[3]*2.55,n[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(n){return[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(n){return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(n){return[n[1],n[2]/100,n[3]/100,n[4]]}}],i=n.Color=function(t,i,r,u){return new n.Color.fn.parse(t,i,r,u)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},s={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=i.support={},c=n("<p>")[0],f,r=n.each;c.style.cssText="background-color:rgba(1,1,1,.5)";h.rgba=c.style.backgroundColor.indexOf("rgba")>-1;r(u,function(n,t){t.cache="_"+n;t.props.alpha={idx:3,type:"percent",def:1}});i.fn=n.extend(i.prototype,{parse:function(o,s,h,c){if(o===t)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=n(o).css(s),s=t);var a=this,v=n.type(o),y=this._rgba=[];return(s!==t&&(o=[o,s,h,c],v="array"),v==="string")?this.parse(l(o)||f._default):v==="array"?(r(u.rgba.props,function(n,t){y[t.idx]=e(o[t.idx],t)}),this):v==="object"?(o instanceof i?r(u,function(n,t){o[t.cache]&&(a[t.cache]=o[t.cache].slice())}):r(u,function(t,i){var u=i.cache;r(i.props,function(n,t){if(!a[u]&&i.to){if(n==="alpha"||o[n]==null)return;a[u]=i.to(a._rgba)}a[u][t.idx]=e(o[n],t,!0)});a[u]&&n.inArray(null,a[u].slice(0,3))<0&&(a[u][3]=1,i.from&&(a._rgba=i.from(a[u])))}),this):void 0},is:function(n){var e=i(n),t=!0,f=this;return r(u,function(n,i){var o,u=e[i.cache];return u&&(o=f[i.cache]||i.to&&i.to(f._rgba)||[],r(i.props,function(n,i){if(u[i.idx]!=null)return t=u[i.idx]===o[i.idx]})),t}),t},_space:function(){var n=[],t=this;return r(u,function(i,r){t[r.cache]&&n.push(i)}),n.pop()},transition:function(n,t){var f=i(n),c=f._space(),o=u[c],l=this.alpha()===0?i("transparent"):this,a=l[o.cache]||o.to(l._rgba),h=a.slice();return f=f[o.cache],r(o.props,function(n,i){var c=i.idx,r=a[c],u=f[c],o=s[i.type]||{};u!==null&&(r===null?h[c]=u:(o.mod&&(u-r>o.mod/2?r+=o.mod:r-u>o.mod/2&&(r-=o.mod)),h[c]=e((u-r)*t+r,i)))}),this[c](h)},blend:function(t){if(this._rgba[3]===1)return this;var r=this._rgba.slice(),u=r.pop(),f=i(t)._rgba;return i(n.map(r,function(n,t){return(1-u)*f[t]+u*n}))},toRgbaString:function(){var i="rgba(",t=n.map(this._rgba,function(n,t){return n==null?t>2?1:0:n});return t[3]===1&&(t.pop(),i="rgb("),i+t.join()+")"},toHslaString:function(){var i="hsla(",t=n.map(this.hsla(),function(n,t){return n==null&&(n=t>2?1:0),t&&t<3&&(n=Math.round(n*100)+"%"),n});return t[3]===1&&(t.pop(),i="hsl("),i+t.join()+")"},toHexString:function(t){var i=this._rgba.slice(),r=i.pop();return t&&i.push(~~(r*255)),"#"+n.map(i,function(n){return n=(n||0).toString(16),n.length===1?"0"+n:n}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});i.fn.parse.prototype=i.fn;u.hsla.to=function(n){if(n[0]==null||n[1]==null||n[2]==null)return[null,null,null,n[3]];var i=n[0]/255,r=n[1]/255,f=n[2]/255,s=n[3],u=Math.max(i,r,f),e=Math.min(i,r,f),t=u-e,o=u+e,h=o*.5,c,l;return c=e===u?0:i===u?60*(r-f)/t+360:r===u?60*(f-i)/t+120:60*(i-r)/t+240,l=t===0?0:h<=.5?t/o:t/(2-o),[Math.round(c)%360,l,h,s==null?1:s]};u.hsla.from=function(n){if(n[0]==null||n[1]==null||n[2]==null)return[null,null,null,n[3]];var r=n[0]/360,u=n[1],t=n[2],e=n[3],i=t<=.5?t*(1+u):t+u-t*u,f=2*t-i;return[Math.round(o(f,i,r+1/3)*255),Math.round(o(f,i,r)*255),Math.round(o(f,i,r-1/3)*255),e]};r(u,function(u,f){var s=f.props,o=f.cache,h=f.to,c=f.from;i.fn[u]=function(u){if(h&&!this[o]&&(this[o]=h(this._rgba)),u===t)return this[o].slice();var l,a=n.type(u),v=a==="array"||a==="object"?u:arguments,f=this[o].slice();return r(s,function(n,t){var i=v[a==="object"?n:t.idx];i==null&&(i=f[t.idx]);f[t.idx]=e(i,t)}),c?(l=i(c(f)),l[o]=f,l):i(f)};r(s,function(t,r){i.fn[t]||(i.fn[t]=function(i){var f=n.type(i),h=t==="alpha"?this._hsla?"hsla":"rgba":u,o=this[h](),s=o[r.idx],e;return f==="undefined"?s:(f==="function"&&(i=i.call(this,s),f=n.type(i)),i==null&&r.empty)?this:(f==="string"&&(e=a.exec(i),e&&(i=s+parseFloat(e[2])*(e[1]==="+"?1:-1))),o[r.idx]=i,this[h](o))})})});i.hook=function(t){var u=t.split(" ");r(u,function(t,r){n.cssHooks[r]={set:function(t,u){var o,f,e="";if(u!=="transparent"&&(n.type(u)!=="string"||(o=l(u)))){if(u=i(o||u),!h.rgba&&u._rgba[3]!==1){for(f=r==="backgroundColor"?t.parentNode:t;(e===""||e==="transparent")&&f&&f.style;)try{e=n.css(f,"backgroundColor");f=f.parentNode}catch(s){}u=u.blend(e&&e!=="transparent"?e:"_default")}u=u.toRgbaString()}try{t.style[r]=u}catch(s){}}};n.fx.step[r]=function(t){t.colorInit||(t.start=i(t.elem,r),t.end=i(t.end),t.colorInit=!0);n.cssHooks[r].set(t.elem,t.start.transition(t.end,t.pos))}})};i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");n.cssHooks.borderColor={expand:function(n){var t={};return r(["Top","Right","Bottom","Left"],function(i,r){t["border"+r+"Color"]=n}),t}};f=n.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var r,u,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,f={};if(i&&i.length&&i[0]&&i[i[0]])for(u=i.length;u--;)r=i[u],typeof i[r]=="string"&&(f[n.camelCase(r)]=i[r]);else for(r in i)typeof i[r]=="string"&&(f[r]=i[r]);return f}function u(t,i){var e={},u,f;for(u in i)f=i[u],t[u]!==f&&(r[u]||(n.fx.step[u]||!isNaN(parseFloat(f)))&&(e[u]=f));return e}var i=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};n.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){n.fx.step[i]=function(n){(n.end==="none"||n.setAttr)&&(n.pos!==1||n.setAttr)||(b.style(n.elem,i,n.end),n.setAttr=!0)}});n.fn.addBack||(n.fn.addBack=function(n){return this.add(n==null?this.prevObject:this.prevObject.filter(n))});n.effects.animateClass=function(r,f,e,o){var s=n.speed(f,e,o);return this.queue(function(){var e=n(this),h=e.attr("class")||"",o,f=s.children?e.find("*").addBack():e;f=f.map(function(){var i=n(this);return{el:i,start:t(this)}});o=function(){n.each(i,function(n,t){r[t]&&e[t+"Class"](r[t])})};o();f=f.map(function(){return this.end=t(this.el[0]),this.diff=u(this.start,this.end),this});e.attr("class",h);f=f.map(function(){var i=this,t=n.Deferred(),r=n.extend({},s,{queue:!1,complete:function(){t.resolve(i)}});return this.el.animate(this.diff,r),t.promise()});n.when.apply(n,f.get()).done(function(){o();n.each(arguments,function(){var t=this.el;n.each(this.diff,function(n){t.css(n,"")})});s.complete.call(e[0])})})};n.fn.extend({addClass:function(t){return function(i,r,u,f){return r?n.effects.animateClass.call(this,{add:i},r,u,f):t.apply(this,arguments)}}(n.fn.addClass),removeClass:function(t){return function(i,r,u,f){return arguments.length>1?n.effects.animateClass.call(this,{remove:i},r,u,f):t.apply(this,arguments)}}(n.fn.removeClass),toggleClass:function(t){return function(i,r,u,f,e){return typeof r=="boolean"||r===undefined?u?n.effects.animateClass.call(this,r?{add:i}:{remove:i},u,f,e):t.apply(this,arguments):n.effects.animateClass.call(this,{toggle:i},r,u,f)}}(n.fn.toggleClass),switchClass:function(t,i,r,u,f){return n.effects.animateClass.call(this,{add:i,remove:t},r,u,f)}})}(),function(){function t(t,i,r,u){return n.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},i==null&&(i={}),n.isFunction(i)&&(u=i,r=null,i={}),(typeof i=="number"||n.fx.speeds[i])&&(u=r,r=i,i={}),n.isFunction(r)&&(u=r,r=null),i&&n.extend(t,i),r=r||i.duration,t.duration=n.fx.off?0:typeof r=="number"?r:r in n.fx.speeds?n.fx.speeds[r]:n.fx.speeds._default,t.complete=u||i.complete,t}function i(t){return!t||typeof t=="number"||n.fx.speeds[t]?!0:typeof t=="string"&&!n.effects.effect[t]?!0:n.isFunction(t)?!0:typeof t=="object"&&!t.effect?!0:!1}n.extend(n.effects,{version:"1.11.2",save:function(n,t){for(var i=0;i<t.length;i++)t[i]!==null&&n.data(w+t[i],n[0].style[t[i]])},restore:function(n,t){for(var r,i=0;i<t.length;i++)t[i]!==null&&(r=n.data(w+t[i]),r===undefined&&(r=""),n.css(t[i],r))},setMode:function(n,t){return t==="toggle"&&(t=n.is(":hidden")?"show":"hide"),t},getBaseline:function(n,t){var i,r;switch(n[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=n[0]/t.height}switch(n[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=n[1]/t.width}return{x:r,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),float:t.css("float")},u=n("<div><\/div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),f={width:t.width(),height:t.height()},r=document.activeElement;try{r.id}catch(e){r=document.body}return t.wrap(u),(t[0]===r||n.contains(t[0],r))&&n(r).focus(),u=t.parent(),t.css("position")==="static"?(u.css({position:"relative"}),t.css({position:"relative"})):(n.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),n.each(["top","left","bottom","right"],function(n,r){i[r]=t.css(r);isNaN(parseInt(i[r],10))&&(i[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(f),u.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||n.contains(t[0],i))&&n(i).focus()),t},setTransition:function(t,i,r,u){return u=u||{},n.each(i,function(n,i){var f=t.cssUnit(i);f[0]>0&&(u[i]=f[0]*r+f[1])}),u}});n.fn.extend({effect:function(){function e(t){function o(){n.isFunction(e)&&e.call(r[0]);n.isFunction(t)&&t()}var r=n(this),e=i.complete,u=i.mode;(r.is(":hidden")?u==="hide":u==="show")?(r[u](),o()):f.call(r[0],i,o)}var i=t.apply(this,arguments),r=i.mode,u=i.queue,f=n.effects.effect[i.effect];return n.fx.off||!f?r?this[r](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):u===!1?this.each(e):this.queue(u||"fx",e)},show:function(n){return function(r){if(i(r))return n.apply(this,arguments);var u=t.apply(this,arguments);return u.mode="show",this.effect.call(this,u)}}(n.fn.show),hide:function(n){return function(r){if(i(r))return n.apply(this,arguments);var u=t.apply(this,arguments);return u.mode="hide",this.effect.call(this,u)}}(n.fn.hide),toggle:function(n){return function(r){if(i(r)||typeof r=="boolean")return n.apply(this,arguments);var u=t.apply(this,arguments);return u.mode="toggle",this.effect.call(this,u)}}(n.fn.toggle),cssUnit:function(t){var i=this.css(t),r=[];return n.each(["em","px","%","pt"],function(n,t){i.indexOf(t)>0&&(r=[parseFloat(i),t])}),r}})}(),function(){var t={};n.each(["Quad","Cubic","Quart","Quint","Expo"],function(n,i){t[i]=function(t){return Math.pow(t,n+2)}});n.extend(t,{Sine:function(n){return 1-Math.cos(n*Math.PI/2)},Circ:function(n){return 1-Math.sqrt(1-n*n)},Elastic:function(n){return n===0||n===1?n:-Math.pow(2,8*(n-1))*Math.sin(((n-1)*80-7.5)*Math.PI/15)},Back:function(n){return n*n*(3*n-2)},Bounce:function(n){for(var t,i=4;n<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((t*3-2)/22-n,2)}});n.each(t,function(t,i){n.easing["easeIn"+t]=i;n.easing["easeOut"+t]=function(n){return 1-i(1-n)};n.easing["easeInOut"+t]=function(n){return n<.5?i(n*2)/2:1-i(n*-2+2)/2}})}();var dt=n.effects,gt=n.effects.effect.blind=function(t,i){var r=n(this),s=["position","top","bottom","left","right","height","width"],v=n.effects.setMode(r,t.mode||"hide"),y=t.direction||"up",f=/up|down|vertical/.test(y),h=f?"height":"width",c=f?"top":"left",p=/up|left|vertical|horizontal/.test(y),l={},a=v==="show",u,e,o;r.parent().is(".ui-effects-wrapper")?n.effects.save(r.parent(),s):n.effects.save(r,s);r.show();u=n.effects.createWrapper(r).css({overflow:"hidden"});e=u[h]();o=parseFloat(u.css(c))||0;l[h]=a?e:0;p||(r.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"}),l[c]=a?o:e+o);a&&(u.css(h,0),p||u.css(c,o+e));u.animate(l,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){v==="hide"&&r.hide();n.effects.restore(r,s);n.effects.removeWrapper(r);i()}})},ni=n.effects.effect.bounce=function(t,i){var r=n(this),v=["position","top","bottom","left","right","height","width"],k=n.effects.setMode(r,t.mode||"effect"),f=k==="hide",y=k==="show",h=t.direction||"up",u=t.distance,p=t.times||5,d=p*2+(y||f?1:0),c=t.duration/d,l=t.easing,e=h==="up"||h==="down"?"top":"left",w=h==="up"||h==="left",b,o,s,a=r.queue(),g=a.length;for((y||f)&&v.push("opacity"),n.effects.save(r,v),r.show(),n.effects.createWrapper(r),u||(u=r[e==="top"?"outerHeight":"outerWidth"]()/3),y&&(s={opacity:1},s[e]=0,r.css("opacity",0).css(e,w?-u*2:u*2).animate(s,c,l)),f&&(u=u/Math.pow(2,p-1)),s={},s[e]=0,b=0;b<p;b++)o={},o[e]=(w?"-=":"+=")+u,r.animate(o,c,l).animate(s,c,l),u=f?u*2:u/2;f&&(o={opacity:0},o[e]=(w?"-=":"+=")+u,r.animate(o,c,l));r.queue(function(){f&&r.hide();n.effects.restore(r,v);n.effects.removeWrapper(r);i()});g>1&&a.splice.apply(a,[1,0].concat(a.splice(g,d+1)));r.dequeue()},ti=n.effects.effect.clip=function(t,i){var r=n(this),h=["position","top","bottom","left","right","height","width"],v=n.effects.setMode(r,t.mode||"hide"),f=v==="show",y=t.direction||"vertical",c=y==="vertical",o=c?"height":"width",l=c?"top":"left",s={},a,u,e;n.effects.save(r,h);r.show();a=n.effects.createWrapper(r).css({overflow:"hidden"});u=r[0].tagName==="IMG"?a:r;e=u[o]();f&&(u.css(o,0),u.css(l,e/2));s[o]=f?e:0;s[l]=f?0:e/2;u.animate(s,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){f||r.hide();n.effects.restore(r,h);n.effects.removeWrapper(r);i()}})},ii=n.effects.effect.drop=function(t,i){var r=n(this),h=["position","top","bottom","left","right","opacity","height","width"],c=n.effects.setMode(r,t.mode||"hide"),e=c==="show",u=t.direction||"left",o=u==="up"||u==="down"?"top":"left",s=u==="up"||u==="left"?"pos":"neg",l={opacity:e?1:0},f;n.effects.save(r,h);r.show();n.effects.createWrapper(r);f=t.distance||r[o==="top"?"outerHeight":"outerWidth"](!0)/2;e&&r.css("opacity",0).css(o,s==="pos"?-f:f);l[o]=(e?s==="pos"?"+=":"-=":s==="pos"?"-=":"+=")+f;r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){c==="hide"&&r.hide();n.effects.restore(r,h);n.effects.removeWrapper(r);i()}})},ri=n.effects.effect.explode=function(t,i){function k(){l.push(this);l.length===o*c&&d()}function d(){r.css({visibility:"visible"});n(l).remove();u||r.hide();i()}for(var o=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=o,r=n(this),b=n.effects.setMode(r,t.mode||"hide"),u=b==="show",w=r.show().css("visibility","hidden").offset(),s=Math.ceil(r.outerWidth()/c),h=Math.ceil(r.outerHeight()/o),l=[],e,a,v,y,p,f=0;f<o;f++)for(v=w.top+f*h,p=f-(o-1)/2,e=0;e<c;e++)a=w.left+e*s,y=e-(c-1)/2,r.clone().appendTo("body").wrap("<div><\/div>").css({position:"absolute",visibility:"visible",left:-e*s,top:-f*h}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:s,height:h,left:a+(u?y*s:0),top:v+(u?p*h:0),opacity:u?0:1}).animate({left:a+(u?0:y*s),top:v+(u?0:p*h),opacity:u?1:0},t.duration||500,t.easing,k)},ui=n.effects.effect.fade=function(t,i){var r=n(this),u=n.effects.setMode(r,t.mode||"toggle");r.animate({opacity:u},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},fi=n.effects.effect.fold=function(t,i){var r=n(this),s=["position","top","bottom","left","right","height","width"],h=n.effects.setMode(r,t.mode||"hide"),e=h==="show",c=h==="hide",f=t.size||15,l=/([0-9]+)%/.exec(f),a=!!t.horizFirst,v=e!==a,y=v?["width","height"]:["height","width"],p=t.duration/2,u,o,w={},b={};n.effects.save(r,s);r.show();u=n.effects.createWrapper(r).css({overflow:"hidden"});o=v?[u.width(),u.height()]:[u.height(),u.width()];l&&(f=parseInt(l[1],10)/100*o[c?0:1]);e&&u.css(a?{height:0,width:f}:{height:f,width:0});w[y[0]]=e?o[0]:f;b[y[1]]=e?o[1]:0;u.animate(w,p,t.easing).animate(b,p,t.easing,function(){c&&r.hide();n.effects.restore(r,s);n.effects.removeWrapper(r);i()})},ei=n.effects.effect.highlight=function(t,i){var r=n(this),u=["backgroundImage","backgroundColor","opacity"],f=n.effects.setMode(r,t.mode||"show"),e={backgroundColor:r.css("backgroundColor")};f==="hide"&&(e.opacity=0);n.effects.save(r,u);r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(e,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){f==="hide"&&r.hide();n.effects.restore(r,u);i()}})},oi=n.effects.effect.size=function(t,i){var f,l,u,r=n(this),w=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["width","height","overflow"],v=["fontSize"],e=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],o=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],h=n.effects.setMode(r,t.mode||"effect"),y=t.restore||h!=="effect",c=t.scale||"both",b=t.origin||["middle","center"],k=r.css("position"),s=y?w:["position","top","bottom","left","right","overflow","opacity"],p={height:0,width:0,outerHeight:0,outerWidth:0};h==="show"&&r.show();f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};t.mode==="toggle"&&h==="show"?(r.from=t.to||p,r.to=t.from||f):(r.from=t.from||(h==="show"?p:f),r.to=t.to||(h==="hide"?p:f));u={from:{y:r.from.height/f.height,x:r.from.width/f.width},to:{y:r.to.height/f.height,x:r.to.width/f.width}};(c==="box"||c==="both")&&(u.from.y!==u.to.y&&(s=s.concat(e),r.from=n.effects.setTransition(r,e,u.from.y,r.from),r.to=n.effects.setTransition(r,e,u.to.y,r.to)),u.from.x!==u.to.x&&(s=s.concat(o),r.from=n.effects.setTransition(r,o,u.from.x,r.from),r.to=n.effects.setTransition(r,o,u.to.x,r.to)));(c==="content"||c==="both")&&u.from.y!==u.to.y&&(s=s.concat(v).concat(a),r.from=n.effects.setTransition(r,v,u.from.y,r.from),r.to=n.effects.setTransition(r,v,u.to.y,r.to));n.effects.save(r,s);r.show();n.effects.createWrapper(r);r.css("overflow","hidden").css(r.from);b&&(l=n.effects.getBaseline(b,f),r.from.top=(f.outerHeight-r.outerHeight())*l.y,r.from.left=(f.outerWidth-r.outerWidth())*l.x,r.to.top=(f.outerHeight-r.to.outerHeight)*l.y,r.to.left=(f.outerWidth-r.to.outerWidth)*l.x);r.css(r.from);(c==="content"||c==="both")&&(e=e.concat(["marginTop","marginBottom"]).concat(v),o=o.concat(["marginLeft","marginRight"]),a=w.concat(e).concat(o),r.find("*[width]").each(function(){var i=n(this),r={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};y&&n.effects.save(i,a);i.from={height:r.height*u.from.y,width:r.width*u.from.x,outerHeight:r.outerHeight*u.from.y,outerWidth:r.outerWidth*u.from.x};i.to={height:r.height*u.to.y,width:r.width*u.to.x,outerHeight:r.height*u.to.y,outerWidth:r.width*u.to.x};u.from.y!==u.to.y&&(i.from=n.effects.setTransition(i,e,u.from.y,i.from),i.to=n.effects.setTransition(i,e,u.to.y,i.to));u.from.x!==u.to.x&&(i.from=n.effects.setTransition(i,o,u.from.x,i.from),i.to=n.effects.setTransition(i,o,u.to.x,i.to));i.css(i.from);i.animate(i.to,t.duration,t.easing,function(){y&&n.effects.restore(i,a)})}));r.animate(r.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){r.to.opacity===0&&r.css("opacity",r.from.opacity);h==="hide"&&r.hide();n.effects.restore(r,s);y||(k==="static"?r.css({position:"relative",top:r.to.top,left:r.to.left}):n.each(["top","left"],function(n,t){r.css(t,function(t,i){var f=parseInt(i,10),u=n?r.to.left:r.to.top;return i==="auto"?u+"px":f+u+"px"})}));n.effects.removeWrapper(r);i()}})},si=n.effects.effect.scale=function(t,i){var u=n(this),r=n.extend(!0,{},t),f=n.effects.setMode(u,t.mode||"effect"),s=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:f==="hide"?0:100),h=t.direction||"both",c=t.origin,e={height:u.height(),width:u.width(),outerHeight:u.outerHeight(),outerWidth:u.outerWidth()},o={y:h!=="horizontal"?s/100:1,x:h!=="vertical"?s/100:1};r.effect="size";r.queue=!1;r.complete=i;f!=="effect"&&(r.origin=c||["middle","center"],r.restore=!0);r.from=t.from||(f==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:e);r.to={height:e.height*o.y,width:e.width*o.x,outerHeight:e.outerHeight*o.y,outerWidth:e.outerWidth*o.x};r.fade&&(f==="show"&&(r.from.opacity=0,r.to.opacity=1),f==="hide"&&(r.from.opacity=1,r.to.opacity=0));u.effect(r)},hi=n.effects.effect.puff=function(t,i){var r=n(this),e=n.effects.setMode(r,t.mode||"hide"),o=e==="hide",s=parseInt(t.percent,10)||150,f=s/100,u={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};n.extend(t,{effect:"scale",queue:!1,fade:!0,mode:e,complete:i,percent:o?s:100,from:o?u:{height:u.height*f,width:u.width*f,outerHeight:u.outerHeight*f,outerWidth:u.outerWidth*f}});r.effect(t)},ci=n.effects.effect.pulsate=function(t,i){var r=n(this),e=n.effects.setMode(r,t.mode||"show"),h=e==="show",a=e==="hide",v=h||e==="hide",o=(t.times||5)*2+(v?1:0),c=t.duration/o,u=0,f=r.queue(),l=f.length,s;for((h||!r.is(":visible"))&&(r.css("opacity",0).show(),u=1),s=1;s<o;s++)r.animate({opacity:u},c,t.easing),u=1-u;r.animate({opacity:u},c,t.easing);r.queue(function(){a&&r.hide();i()});l>1&&f.splice.apply(f,[1,0].concat(f.splice(l,o+1)));r.dequeue()},li=n.effects.effect.shake=function(t,i){var r=n(this),v=["position","top","bottom","left","right","height","width"],k=n.effects.setMode(r,t.mode||"effect"),f=t.direction||"left",o=t.distance||20,y=t.times||3,p=y*2+1,u=Math.round(t.duration/p),s=f==="up"||f==="down"?"top":"left",h=f==="up"||f==="left",c={},l={},w={},a,e=r.queue(),b=e.length;for(n.effects.save(r,v),r.show(),n.effects.createWrapper(r),c[s]=(h?"-=":"+=")+o,l[s]=(h?"+=":"-=")+o*2,w[s]=(h?"-=":"+=")+o*2,r.animate(c,u,t.easing),a=1;a<y;a++)r.animate(l,u,t.easing).animate(w,u,t.easing);r.animate(l,u,t.easing).animate(c,u/2,t.easing).queue(function(){k==="hide"&&r.hide();n.effects.restore(r,v);n.effects.removeWrapper(r);i()});b>1&&e.splice.apply(e,[1,0].concat(e.splice(b,p+1)));r.dequeue()},ai=n.effects.effect.slide=function(t,i){var r=n(this),s=["position","top","bottom","left","right","width","height"],h=n.effects.setMode(r,t.mode||"show"),c=h==="show",f=t.direction||"left",e=f==="up"||f==="down"?"top":"left",o=f==="up"||f==="left",u,l={};n.effects.save(r,s);r.show();u=t.distance||r[e==="top"?"outerHeight":"outerWidth"](!0);n.effects.createWrapper(r).css({overflow:"hidden"});c&&r.css(e,o?isNaN(u)?"-"+u:-u:u);l[e]=(c?o?"+=":"-=":o?"-=":"+=")+u;r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){h==="hide"&&r.hide();n.effects.restore(r,s);n.effects.removeWrapper(r);i()}})},vi=n.effects.effect.transfer=function(t,i){var u=n(this),r=n(t.to),f=r.css("position")==="fixed",e=n("body"),o=f?e.scrollTop():0,s=f?e.scrollLeft():0,h=r.offset(),l={top:h.top-o,left:h.left-s,height:r.innerHeight(),width:r.innerWidth()},c=u.offset(),a=n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({top:c.top-o,left:c.left-s,height:u.innerHeight(),width:u.innerWidth(),position:f?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){a.remove();i()})}});
/*
//# sourceMappingURL=jquery-ui.min.js.map
*/;
/*!
 * accounting.js v0.4.1, copyright 2014 Open Exchange Rates, MIT license, http://openexchangerates.github.io/accounting.js
 */
(function (p, z) { function q(a) { return !!("" === a || a && a.charCodeAt && a.substr) } function m(a) { return u ? u(a) : "[object Array]" === v.call(a) } function r(a) { return "[object Object]" === v.call(a) } function s(a, b) { var d, a = a || {}, b = b || {}; for (d in b) b.hasOwnProperty(d) && null == a[d] && (a[d] = b[d]); return a } function j(a, b, d) { var c = [], e, h; if (!a) return c; if (w && a.map === w) return a.map(b, d); for (e = 0, h = a.length; e < h; e++) c[e] = b.call(d, a[e], e, a); return c } function n(a, b) { a = Math.round(Math.abs(a)); return isNaN(a) ? b : a } function x(a) { var b = c.settings.currency.format; "function" === typeof a && (a = a()); return q(a) && a.match("%v") ? { pos: a, neg: a.replace("-", "").replace("%v", "-%v"), zero: a } : !a || !a.pos || !a.pos.match("%v") ? !q(b) ? b : c.settings.currency.format = { pos: b, neg: b.replace("%v", "-%v"), zero: b } : a } var c = { version: "0.4.1", settings: { currency: { symbol: "$", format: "%s%v", decimal: ".", thousand: ",", precision: 2, grouping: 3 }, number: { precision: 0, grouping: 3, thousand: ",", decimal: "." } } }, w = Array.prototype.map, u = Array.isArray, v = Object.prototype.toString, o = c.unformat = c.parse = function (a, b) { if (m(a)) return j(a, function (a) { return o(a, b) }); a = a || 0; if ("number" === typeof a) return a; var b = b || ".", c = RegExp("[^0-9-" + b + "]", ["g"]), c = parseFloat(("" + a).replace(/\((.*)\)/, "-$1").replace(c, "").replace(b, ".")); return !isNaN(c) ? c : 0 }, y = c.toFixed = function (a, b) { var b = n(b, c.settings.number.precision), d = Math.pow(10, b); return (Math.round(c.unformat(a) * d) / d).toFixed(b) }, t = c.formatNumber = c.format = function (a, b, d, i) { if (m(a)) return j(a, function (a) { return t(a, b, d, i) }); var a = o(a), e = s(r(b) ? b : { precision: b, thousand: d, decimal: i }, c.settings.number), h = n(e.precision), f = 0 > a ? "-" : "", g = parseInt(y(Math.abs(a || 0), h), 10) + "", l = 3 < g.length ? g.length % 3 : 0; return f + (l ? g.substr(0, l) + e.thousand : "") + g.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + e.thousand) + (h ? e.decimal + y(Math.abs(a), h).split(".")[1] : "") }, A = c.formatMoney = function (a, b, d, i, e, h) { if (m(a)) return j(a, function (a) { return A(a, b, d, i, e, h) }); var a = o(a), f = s(r(b) ? b : { symbol: b, precision: d, thousand: i, decimal: e, format: h }, c.settings.currency), g = x(f.format); return (0 < a ? g.pos : 0 > a ? g.neg : g.zero).replace("%s", f.symbol).replace("%v", t(Math.abs(a), n(f.precision), f.thousand, f.decimal)) }; c.formatColumn = function (a, b, d, i, e, h) { if (!a) return []; var f = s(r(b) ? b : { symbol: b, precision: d, thousand: i, decimal: e, format: h }, c.settings.currency), g = x(f.format), l = g.pos.indexOf("%s") < g.pos.indexOf("%v") ? !0 : !1, k = 0, a = j(a, function (a) { if (m(a)) return c.formatColumn(a, f); a = o(a); a = (0 < a ? g.pos : 0 > a ? g.neg : g.zero).replace("%s", f.symbol).replace("%v", t(Math.abs(a), n(f.precision), f.thousand, f.decimal)); if (a.length > k) k = a.length; return a }); return j(a, function (a) { return q(a) && a.length < k ? l ? a.replace(f.symbol, f.symbol + Array(k - a.length + 1).join(" ")) : Array(k - a.length + 1).join(" ") + a : a }) }; if ("undefined" !== typeof exports) { if ("undefined" !== typeof module && module.exports) exports = module.exports = c; exports.accounting = c } else "function" === typeof define && define.amd ? define('accounting',[], function () { return c }) : (c.noConflict = function (a) { return function () { p.accounting = a; c.noConflict = z; return c } }(p.accounting), p.accounting = c) })(this);

(function(n,t){typeof define=="function"&&define.amd?define("sifter",t):typeof exports=="object"?module.exports=t():n.Sifter=t()})(this,function(){var n=function(n,t){this.items=n;this.settings=t||{diacritics:!0}};n.prototype.tokenize=function(n){if(n=f(String(n||"").toLowerCase()),!n||!n.length)return[];for(var r,u,h=[],o=n.split(/ +/),t=0,s=o.length;t<s;t++){if(r=e(o[t]),this.settings.diacritics)for(u in i)i.hasOwnProperty(u)&&(r=r.replace(new RegExp(u,"g"),i[u]));h.push({string:o[t],regex:new RegExp(r,"i")})}return h};n.prototype.iterator=function(n,i){var r;r=t(n)?Array.prototype.forEach||function(n){for(var t=0,i=this.length;t<i;t++)n(this[t],t,this)}:function(n){for(var t in this)this.hasOwnProperty(t)&&n(this[t],t,this)};r.apply(n,[i])};n.prototype.getScoreFunction=function(n,t){var o,u,r,i,e,f;return(o=this,n=o.prepareSearch(n,t),r=n.tokens,u=n.options.fields,i=r.length,e=function(n,t){var i,r;return n?(n=String(n||""),r=n.search(t.regex),r===-1)?0:(i=t.string.length/n.length,r===0&&(i+=.5),i):0},f=function(){var n=u.length;return n?n===1?function(n,t){return e(t[u[0]],n)}:function(t,i){for(var r=0,f=0;r<n;r++)f+=e(i[u[r]],t);return f/n}:function(){return 0}}(),!i)?function(){return 0}:i===1?function(n){return f(r[0],n)}:n.options.conjunction==="and"?function(n){for(var t,u=0,e=0;u<i;u++){if(t=f(r[u],n),t<=0)return 0;e+=t}return e/i}:function(n){for(var t=0,u=0;t<i;t++)u+=f(r[t],n);return u/i}};n.prototype.getSortFunction=function(n,t){var i,f,c,l,u,s,v,h,e,a,o;if(c=this,n=c.prepareSearch(n,t),o=!n.query&&t.sort_empty||t.sort,e=function(n,t){return n==="$score"?t.score:c.items[t.id][n]},u=[],o)for(i=0,f=o.length;i<f;i++)(n.query||o[i].field!=="$score")&&u.push(o[i]);if(n.query){for(a=!0,i=0,f=u.length;i<f;i++)if(u[i].field==="$score"){a=!1;break}a&&u.unshift({field:"$score",direction:"desc"})}else for(i=0,f=u.length;i<f;i++)if(u[i].field==="$score"){u.splice(i,1);break}for(h=[],i=0,f=u.length;i<f;i++)h.push(u[i].direction==="desc"?-1:1);return s=u.length,s?s===1?(l=u[0].field,v=h[0],function(n,t){return v*r(e(l,n),e(l,t))}):function(n,t){for(var f,o,i=0;i<s;i++)if(o=u[i].field,f=h[i]*r(e(o,n),e(o,t)),f)return f;return 0}:null};n.prototype.prepareSearch=function(n,i){if(typeof n=="object")return n;i=u({},i);var r=i.fields,f=i.sort,e=i.sort_empty;return r&&!t(r)&&(i.fields=[r]),f&&!t(f)&&(i.sort=[f]),e&&!t(e)&&(i.sort_empty=[e]),{options:i,query:String(n||"").toLowerCase(),tokens:this.tokenize(n),total:0,items:[]}};n.prototype.search=function(n,t){var r=this,u,i,f,e;return i=this.prepareSearch(n,t),t=i.options,n=i.query,e=t.score||r.getScoreFunction(i),n.length?r.iterator(r.items,function(n,r){u=e(n);(t.filter===!1||u>0)&&i.items.push({score:u,id:r})}):r.iterator(r.items,function(n,t){i.items.push({score:1,id:t})}),f=r.getSortFunction(i,t),f&&i.items.sort(f),i.total=i.items.length,typeof t.limit=="number"&&(i.items=i.items.slice(0,t.limit)),i};var r=function(n,t){return typeof n=="number"&&typeof t=="number"?n>t?1:n<t?-1:0:(n=String(n||"").toLowerCase(),t=String(t||"").toLowerCase(),n>t)?1:t>n?-1:0},u=function(n){for(var r,t,i=1,u=arguments.length;i<u;i++)if(t=arguments[i],t)for(r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n},f=function(n){return(n+"").replace(/^\s+|\s+$|/g,"")},e=function(n){return(n+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},t=Array.isArray||$&&$.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"},i={a:"[aÀÁÂÃÄÅàáâãäåĀā]",c:"[cÇçćĆčČ]",d:"[dđĐďĎ]",e:"[eÈÉÊËèéêëěĚĒē]",i:"[iÌÍÎÏìíîïĪī]",n:"[nÑñňŇ]",o:"[oÒÓÔÕÕÖØòóôõöøŌō]",r:"[rřŘ]",s:"[sŠš]",t:"[tťŤ]",u:"[uÙÚÛÜùúûüůŮŪū]",y:"[yŸÿýÝ]",z:"[zŽž]"};return n}),function(n,t){typeof define=="function"&&define.amd?define("microplugin",t):typeof exports=="object"?module.exports=t():n.MicroPlugin=t()}(this,function(){var n={},t;return n.mixin=function(n){n.plugins={};n.prototype.initializePlugins=function(n){var i,e,r,f=this,u=[];if(f.plugins={names:[],settings:{},requested:{},loaded:{}},t.isArray(n))for(i=0,e=n.length;i<e;i++)typeof n[i]=="string"?u.push(n[i]):(f.plugins.settings[n[i].name]=n[i].options,u.push(n[i].name));else if(n)for(r in n)n.hasOwnProperty(r)&&(f.plugins.settings[r]=n[r],u.push(r));while(u.length)f.require(u.shift())};n.prototype.loadPlugin=function(t){var i=this,r=i.plugins,u=n.plugins[t];if(!n.plugins.hasOwnProperty(t))throw new Error('Unable to find "'+t+'" plugin');r.requested[t]=!0;r.loaded[t]=u.fn.apply(i,[i.plugins.settings[t]||{}]);r.names.push(t)};n.prototype.require=function(n){var t=this,i=t.plugins;if(!t.plugins.loaded.hasOwnProperty(n)){if(i.requested[n])throw new Error('Plugin has circular dependency ("'+n+'")');t.loadPlugin(n)}return i.loaded[n]};n.define=function(t,i){n.plugins[t]={name:t,fn:i}}},t={isArray:Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"}},n}),function(n,t){typeof define=="function"&&define.amd?define("selectize",["jquery","sifter","microplugin"],t):typeof exports=="object"?module.exports=t(require("jquery"),require("sifter"),require("microplugin")):n.Selectize=t(n.jQuery,n.Sifter,n.MicroPlugin)}(this,function(n,t,i){var g=function(n,t){if(typeof t!="string"||t.length){var i=typeof t=="string"?new RegExp(t,"i"):t,r=function(n){var o=0,e,s,u,t;if(n.nodeType===3){if(e=n.data.search(i),e>=0&&n.data.length>0){s=n.data.match(i);u=document.createElement("span");u.className="highlight";var f=n.splitText(e),c=f.splitText(s[0].length),h=f.cloneNode(!0);u.appendChild(h);f.parentNode.replaceChild(u,f);o=1}}else if(n.nodeType===1&&n.childNodes&&!/(script|style)/i.test(n.tagName))for(t=0;t<n.childNodes.length;++t)t+=r(n.childNodes[t]);return o};return n.each(function(){r(this)})}},s=function(){};s.prototype={on:function(n,t){this._events=this._events||{};this._events[n]=this._events[n]||[];this._events[n].push(t)},off:function(n,t){var i=arguments.length;if(i===0)return delete this._events;if(i===1)return delete this._events[n];(this._events=this._events||{},n in this._events!=!1)&&this._events[n].splice(this._events[n].indexOf(t),1)},trigger:function(n){if(this._events=this._events||{},n in this._events!=!1)for(var t=0;t<this._events[n].length;t++)this._events[n][t].apply(this,Array.prototype.slice.call(arguments,1))}};s.mixin=function(n){for(var i=["on","off","trigger"],t=0;t<i.length;t++)n.prototype[i[t]]=s.prototype[i[t]]};var f=/Mac/.test(navigator.userAgent),nt=65,tt=13,it=27,l=37,rt=38,ut=80,y=39,ft=40,et=78,e=8,a=46,ot=16,st=f?91:17,ht=f?18:17,p=9,h=1,ct=2,w=function(n){return typeof n!="undefined"},u=function(n){return typeof n=="undefined"||n===null?null:typeof n=="boolean"?n?"1":"0":n+""},o=function(n){return(n+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},b=function(n){return(n+"").replace(/\$/g,"$$$$")},c={};c.before=function(n,t,i){var r=n[t];n[t]=function(){return i.apply(n,arguments),r.apply(n,arguments)}};c.after=function(n,t,i){var r=n[t];n[t]=function(){var t=r.apply(n,arguments);return i.apply(n,arguments),t}};var k=function(t,i){if(!n.isArray(i))return i;for(var f={},r=0,u=i.length;r<u;r++)i[r].hasOwnProperty(t)&&(f[i[r][t]]=i[r]);return f},lt=function(n){var t=!1;return function(){t||(t=!0,n.apply(this,arguments))}},at=function(n,t){var i;return function(){var r=this,u=arguments;window.clearTimeout(i);i=window.setTimeout(function(){n.apply(r,u)},t)}},d=function(n,t,i){var u,f=n.trigger,r={};n.trigger=function(){var i=arguments[0];if(t.indexOf(i)!==-1)r[i]=arguments;else return f.apply(n,arguments)};i.apply(n,[]);n.trigger=f;for(u in r)r.hasOwnProperty(u)&&f.apply(n,r[u])},vt=function(n,t,i,r){n.on(t,i,function(t){for(var i=t.target;i&&i.parentNode!==n[0];)i=i.parentNode;return t.currentTarget=i,r.apply(this,[t])})},v=function(n){var t={},i,r;return"selectionStart"in n?(t.start=n.selectionStart,t.length=n.selectionEnd-t.start):document.selection&&(n.focus(),i=document.selection.createRange(),r=document.selection.createRange().text.length,i.moveStart("character",-n.value.length),t.start=i.text.length-r,t.length=r),t},yt=function(n,t,i){var r,f,u={};if(i)for(r=0,f=i.length;r<f;r++)u[i[r]]=n.css(i[r]);else u=n.css();t.css(u)},pt=function(t,i){var r,u;return t?(r=n("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(t).appendTo("body"),yt(i,r,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]),u=r.width(),r.remove(),u):0},wt=function(n){var t=null,i=function(i,r){var u,f,l,c,h,y,s,o;(i=i||window.event||{},r=r||{},i.metaKey||i.altKey)||(r.force||n.data("grow")!==!1)&&(u=n.val(),i.type&&i.type.toLowerCase()==="keydown"&&(f=i.keyCode,l=f>=97&&f<=122||f>=65&&f<=90||f>=48&&f<=57||f===32,f===a||f===e?(o=v(n[0]),o.length?u=u.substring(0,o.start)+u.substring(o.start+o.length):f===e&&o.start?u=u.substring(0,o.start-1)+u.substring(o.start+1):f===a&&typeof o.start!="undefined"&&(u=u.substring(0,o.start)+u.substring(o.start+1))):l&&(y=i.shiftKey,s=String.fromCharCode(i.keyCode),s=y?s.toUpperCase():s.toLowerCase(),u+=s)),c=n.attr("placeholder"),!u&&c&&(u=c),h=pt(u,n)+4,h!==t&&(t=h,n.width(h),n.triggerHandler("resize")))};n.on("keydown keyup update blur",i);i()},r=function(i,u){var o,e,f=this,s;e=i[0];e.selectize=f;s=window.getComputedStyle&&window.getComputedStyle(e,null);o=s?s.getPropertyValue("direction"):e.currentStyle&&e.currentStyle.direction;o=o||i.parents("[dir]:first").attr("dir")||"";n.extend(f,{settings:u,$input:i,tagType:e.tagName.toLowerCase()==="select"?h:ct,rtl:/rtl/i.test(o),eventNS:".selectize"+ ++r.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:i.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:u.loadThrottle===null?f.onSearchChange:at(f.onSearchChange,u.loadThrottle)});f.sifter=new t(this.options,{diacritics:u.diacritics});n.extend(f.options,k(u.valueField,u.options));delete f.settings.options;n.extend(f.optgroups,k(u.optgroupValueField,u.optgroups));delete f.settings.optgroups;f.settings.mode=f.settings.mode||(f.settings.maxItems===1?"single":"multi");typeof f.settings.hideSelected!="boolean"&&(f.settings.hideSelected=f.settings.mode==="multi");f.initializePlugins(f.settings.plugins);f.setupCallbacks();f.setupTemplates();f.setup()};return s.mixin(r),i.mixin(r),n.extend(r.prototype,{setup:function(){var t=this,r=t.settings,u=t.eventNS,p=n(window),l=n(document),i=t.$input,s,c,e,o,w,b,a,k,v,y;a=t.settings.mode;k=i.attr("tabindex")||"";v=i.attr("class")||"";s=n("<div>").addClass(r.wrapperClass).addClass(v).addClass(a);c=n("<div>").addClass(r.inputClass).addClass("items").appendTo(s);e=n('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex",k);b=n(r.dropdownParent||s);o=n("<div>").addClass(r.dropdownClass).addClass(a).hide().appendTo(b);w=n("<div>").addClass(r.dropdownContentClass).appendTo(o);t.settings.copyClassesToDropdown&&o.addClass(v);s.css({width:i[0].style.width});t.plugins.names.length&&(y="plugin-"+t.plugins.names.join(" plugin-"),s.addClass(y),o.addClass(y));(r.maxItems===null||r.maxItems>1)&&t.tagType===h&&i.attr("multiple","multiple");t.settings.placeholder&&e.attr("placeholder",r.placeholder);i.attr("autocorrect")&&e.attr("autocorrect",i.attr("autocorrect"));i.attr("autocapitalize")&&e.attr("autocapitalize",i.attr("autocapitalize"));t.$wrapper=s;t.$control=c;t.$control_input=e;t.$dropdown=o;t.$dropdown_content=w;o.on("mouseenter","[data-selectable]",function(){return t.onOptionHover.apply(t,arguments)});o.on("mousedown","[data-selectable]",function(){return t.onOptionSelect.apply(t,arguments)});vt(c,"mousedown","*:not(input)",function(){return t.onItemSelect.apply(t,arguments)});wt(e);c.on({mousedown:function(){return t.onMouseDown.apply(t,arguments)},click:function(){return t.onClick.apply(t,arguments)}});e.on({mousedown:function(n){n.stopPropagation()},keydown:function(){return t.onKeyDown.apply(t,arguments)},keyup:function(){return t.onKeyUp.apply(t,arguments)},keypress:function(){return t.onKeyPress.apply(t,arguments)},resize:function(){t.positionDropdown.apply(t,[])},blur:function(){return t.onBlur.apply(t,arguments)},focus:function(){return t.ignoreBlur=!1,t.onFocus.apply(t,arguments)},paste:function(){return t.onPaste.apply(t,arguments)}});l.on("keydown"+u,function(n){t.isCmdDown=n[f?"metaKey":"ctrlKey"];t.isCtrlDown=n[f?"altKey":"ctrlKey"];t.isShiftDown=n.shiftKey});l.on("keyup"+u,function(n){n.keyCode===ht&&(t.isCtrlDown=!1);n.keyCode===ot&&(t.isShiftDown=!1);n.keyCode===st&&(t.isCmdDown=!1)});l.on("mousedown"+u,function(n){if(t.isFocused){if(n.target===t.$dropdown[0]||n.target.parentNode===t.$dropdown[0])return!1;t.$control.has(n.target).length||n.target===t.$control[0]||t.blur()}});p.on(["scroll"+u,"resize"+u].join(" "),function(){t.isOpen&&t.positionDropdown.apply(t,arguments)});p.on("mousemove"+u,function(){t.ignoreHover=!1});if(this.revertSettings={$children:i.children().detach(),tabindex:i.attr("tabindex")},i.attr("tabindex",-1).hide().after(t.$wrapper),n.isArray(r.items)&&(t.setValue(r.items),delete r.items),i[0].validity)i.on("invalid"+u,function(n){n.preventDefault();t.isInvalid=!0;t.refreshState()});t.updateOriginalInput();t.refreshItems();t.refreshState();t.updatePlaceholder();t.isSetup=!0;i.is(":disabled")&&t.disable();t.on("change",this.onChange);if(i.data("selectize",t),i.addClass("selectized"),t.trigger("initialize"),r.preload===!0)t.onSearchChange("")},setupTemplates:function(){var t=this,i=t.settings.labelField,r=t.settings.optgroupLabelField,u={optgroup:function(n){return'<div class="optgroup">'+n.html+"<\/div>"},optgroup_header:function(n,t){return'<div class="optgroup-header">'+t(n[r])+"<\/div>"},option:function(n,t){return'<div class="option">'+t(n[i])+"<\/div>"},item:function(n,t){return'<div class="item">'+t(n[i])+"<\/div>"},option_create:function(n,t){return'<div class="create">Add <strong>'+t(n.input)+"<\/strong>&hellip;<\/div>"}};t.settings.render=n.extend({},u,t.settings.render)},setupCallbacks:function(){var n,t,i={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad"};for(n in i)if(i.hasOwnProperty(n)&&(t=this.settings[i[n]],t))this.on(n,t)},onClick:function(n){var t=this;t.isFocused||(t.focus(),n.preventDefault())},onMouseDown:function(t){var i=this,r=t.isDefaultPrevented(),u=n(t.target);if(i.isFocused){if(t.target!==i.$control_input[0])return i.settings.mode==="single"?i.isOpen?i.close():i.open():r||i.setActiveItem(null),!1}else r||window.setTimeout(function(){i.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(n){var t=this;(t.isFull()||t.isInputHidden||t.isLocked)&&n.preventDefault()},onKeyPress:function(n){if(this.isLocked)return n&&n.preventDefault();var t=String.fromCharCode(n.keyCode||n.which);if(this.settings.create&&t===this.settings.delimiter)return this.createItem(),n.preventDefault(),!1},onKeyDown:function(n){var u=n.target===this.$control_input[0],t=this,i,r;if(t.isLocked){n.keyCode!==p&&n.preventDefault();return}switch(n.keyCode){case nt:if(t.isCmdDown){t.selectAll();return}break;case it:t.close();return;case et:if(!n.ctrlKey||n.altKey)break;case ft:!t.isOpen&&t.hasOptions?t.open():t.$activeOption&&(t.ignoreHover=!0,i=t.getAdjacentOption(t.$activeOption,1),i.length&&t.setActiveOption(i,!0,!0));n.preventDefault();return;case ut:if(!n.ctrlKey||n.altKey)break;case rt:t.$activeOption&&(t.ignoreHover=!0,r=t.getAdjacentOption(t.$activeOption,-1),r.length&&t.setActiveOption(r,!0,!0));n.preventDefault();return;case tt:if(t.isOpen&&t.$activeOption)t.onOptionSelect({currentTarget:t.$activeOption});n.preventDefault();return;case l:t.advanceSelection(-1,n);return;case y:t.advanceSelection(1,n);return;case p:if(t.settings.selectOnTab&&t.isOpen&&t.$activeOption){t.onOptionSelect({currentTarget:t.$activeOption});n.preventDefault()}t.settings.create&&t.createItem()&&n.preventDefault();return;case e:case a:t.deleteSelection(n);return}if((t.isFull()||t.isInputHidden)&&!(f?n.metaKey:n.ctrlKey)){n.preventDefault();return}},onKeyUp:function(n){var t=this,i;if(t.isLocked)return n&&n.preventDefault();if(i=t.$control_input.val()||"",t.lastValue!==i){t.lastValue=i;t.onSearchChange(i);t.refreshOptions();t.trigger("type",i)}},onSearchChange:function(n){var t=this,i=t.settings.load;i&&(t.loadedSearches.hasOwnProperty(n)||(t.loadedSearches[n]=!0,t.load(function(r){i.apply(t,[n,r])})))},onFocus:function(n){var t=this;if(t.isFocused=!0,t.isDisabled)return t.blur(),n&&n.preventDefault(),!1;if(!t.ignoreFocus){if(t.settings.preload==="focus")t.onSearchChange("");t.$activeItems.length||(t.showInput(),t.setActiveItem(null),t.refreshOptions(!!t.settings.openOnFocus));t.refreshState()}},onBlur:function(n){var t=this;if(t.isFocused=!1,!t.ignoreFocus){if(!t.ignoreBlur&&document.activeElement===t.$dropdown_content[0]){t.ignoreBlur=!0;t.onFocus(n);return}t.settings.create&&t.settings.createOnBlur&&t.createItem(!1);t.close();t.setTextboxValue("");t.setActiveItem(null);t.setActiveOption(null);t.setCaret(t.items.length);t.refreshState()}},onOptionHover:function(n){this.ignoreHover||this.setActiveOption(n.currentTarget,!1)},onOptionSelect:function(t){var r,u,i=this;t.preventDefault&&(t.preventDefault(),t.stopPropagation());u=n(t.currentTarget);u.hasClass("create")?i.createItem():(r=u.attr("data-value"),typeof r!="undefined"&&(i.lastQuery=null,i.setTextboxValue(""),i.addItem(r),!i.settings.hideSelected&&t.type&&/mouse/.test(t.type)&&i.setActiveOption(i.getOption(r))))},onItemSelect:function(n){var t=this;t.isLocked||t.settings.mode==="multi"&&(n.preventDefault(),t.setActiveItem(n.currentTarget,n))},load:function(n){var t=this,i=t.$wrapper.addClass("loading");t.loading++;n.apply(t,[function(n){t.loading=Math.max(t.loading-1,0);n&&n.length&&(t.addOption(n),t.refreshOptions(t.isFocused&&!t.isInputHidden));t.loading||i.removeClass("loading");t.trigger("load",n)}])},setTextboxValue:function(n){var t=this.$control_input,i=t.val()!==n;i&&(t.val(n).triggerHandler("update"),this.lastValue=n)},getValue:function(){return this.tagType===h&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(n){d(this,["change"],function(){this.clear();this.addItems(n)})},setActiveItem:function(t,i){var r=this,e,o,h,u,f,s,c,l;if(r.settings.mode!=="single"){if(t=n(t),!t.length){n(r.$activeItems).removeClass("active");r.$activeItems=[];r.isFocused&&r.showInput();return}if(e=i&&i.type.toLowerCase(),e==="mousedown"&&r.isShiftDown&&r.$activeItems.length){for(l=r.$control.children(".active:last"),u=Array.prototype.indexOf.apply(r.$control[0].childNodes,[l[0]]),f=Array.prototype.indexOf.apply(r.$control[0].childNodes,[t[0]]),u>f&&(c=u,u=f,f=c),o=u;o<=f;o++)s=r.$control[0].childNodes[o],r.$activeItems.indexOf(s)===-1&&(n(s).addClass("active"),r.$activeItems.push(s));i.preventDefault()}else e==="mousedown"&&r.isCtrlDown||e==="keydown"&&this.isShiftDown?t.hasClass("active")?(h=r.$activeItems.indexOf(t[0]),r.$activeItems.splice(h,1),t.removeClass("active")):r.$activeItems.push(t.addClass("active")[0]):(n(r.$activeItems).removeClass("active"),r.$activeItems=[t.addClass("active")[0]]);r.hideInput();this.isFocused||r.focus()}},setActiveOption:function(t,i,r){var e,o,f,s,h,u=this;(u.$activeOption&&u.$activeOption.removeClass("active"),u.$activeOption=null,t=n(t),t.length)&&(u.$activeOption=t.addClass("active"),(i||!w(i))&&(e=u.$dropdown_content.height(),o=u.$activeOption.outerHeight(!0),i=u.$dropdown_content.scrollTop()||0,f=u.$activeOption.offset().top-u.$dropdown_content.offset().top+i,s=f,h=f-e+o,f+o>e+i?u.$dropdown_content.stop().animate({scrollTop:h},r?u.settings.scrollDuration:0):f<i&&u.$dropdown_content.stop().animate({scrollTop:s},r?u.settings.scrollDuration:0)))},selectAll:function(){var n=this;n.settings.mode!=="single"&&(n.$activeItems=Array.prototype.slice.apply(n.$control.children(":not(input)").addClass("active")),n.$activeItems.length&&(n.hideInput(),n.close()),n.focus())},hideInput:function(){var n=this;n.setTextboxValue("");n.$control_input.css({opacity:0,position:"absolute",left:n.rtl?1e4:-1e4});n.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0});this.isInputHidden=!1},focus:function(){var n=this;n.isDisabled||(n.ignoreFocus=!0,n.$control_input[0].focus(),window.setTimeout(function(){n.ignoreFocus=!1;n.onFocus()},0))},blur:function(){this.$control_input.trigger("blur")},getScoreFunction:function(n){return this.sifter.getScoreFunction(n,this.getSearchOptions())},getSearchOptions:function(){var t=this.settings,n=t.sortField;return typeof n=="string"&&(n={field:n}),{fields:t.searchField,conjunction:t.searchConjunction,sort:n}},search:function(t){var f,r,e,i=this,o=i.settings,s=this.getSearchOptions();if(o.score&&(e=i.settings.score.apply(this,[t]),typeof e!="function"))throw new Error('Selectize "score" setting must be a function that returns a function');if(t!==i.lastQuery?(i.lastQuery=t,r=i.sifter.search(t,n.extend(s,{score:e})),i.currentResults=r):r=n.extend(!0,{},i.currentResults),o.hideSelected)for(f=r.items.length-1;f>=0;f--)i.items.indexOf(u(r.items[f].id))!==-1&&r.items.splice(f,1);return r},refreshOptions:function(t){var r,a,tt,e,o,h,b,it,f,v,y,k,d,c,p,w;typeof t=="undefined"&&(t=!0);var i=this,nt=n.trim(i.$control_input.val()),s=i.search(nt),l=i.$dropdown_content,rt=i.$activeOption&&u(i.$activeOption.attr("data-value"));if(e=s.items.length,typeof i.settings.maxOptions=="number"&&(e=Math.min(e,i.settings.maxOptions)),o={},i.settings.optgroupOrder)for(h=i.settings.optgroupOrder,r=0;r<h.length;r++)o[h[r]]=[];else h=[];for(r=0;r<e;r++)for(b=i.options[s.items[r].id],it=i.render("option",b),f=b[i.settings.optgroupField]||"",v=n.isArray(f)?f:[f],a=0,tt=v&&v.length;a<tt;a++)f=v[a],i.optgroups.hasOwnProperty(f)||(f=""),o.hasOwnProperty(f)||(o[f]=[],h.push(f)),o[f].push(it);for(y=[],r=0,e=h.length;r<e;r++)f=h[r],i.optgroups.hasOwnProperty(f)&&o[f].length?(k=i.render("optgroup_header",i.optgroups[f])||"",k+=o[f].join(""),y.push(i.render("optgroup",n.extend({},i.optgroups[f],{html:k})))):y.push(o[f].join(""));if(l.html(y.join("")),i.settings.highlight&&s.query.length&&s.tokens.length)for(r=0,e=s.tokens.length;r<e;r++)g(l,s.tokens[r].regex);if(!i.settings.hideSelected)for(r=0,e=i.items.length;r<e;r++)i.getOption(i.items[r]).addClass("selected");d=i.canCreate(nt);d&&(l.prepend(i.render("option_create",{input:nt})),w=n(l[0].childNodes[0]));i.hasOptions=s.items.length>0||d;i.hasOptions?(s.items.length>0?(p=rt&&i.getOption(rt),p&&p.length?c=p:i.settings.mode==="single"&&i.items.length&&(c=i.getOption(i.items[0])),c&&c.length||(c=w&&!i.settings.addPrecedence?i.getAdjacentOption(w,1):l.find("[data-selectable]:first"))):c=w,i.setActiveOption(c),t&&!i.isOpen&&i.open()):(i.setActiveOption(null),t&&i.isOpen&&i.close())},addOption:function(t){var f,e,r,i=this;if(n.isArray(t)){for(f=0,e=t.length;f<e;f++)i.addOption(t[f]);return}(r=u(t[i.settings.valueField]),typeof r!="string"||i.options.hasOwnProperty(r))||(i.userOptions[r]=!0,i.options[r]=t,i.lastQuery=null,i.trigger("option_add",r,t))},addOptionGroup:function(n,t){this.optgroups[n]=t;this.trigger("optgroup_add",n,t)},updateOption:function(t,i){var r=this,s,h,f,c,e,o;if((t=u(t),f=u(i[r.settings.valueField]),t!==null)&&r.options.hasOwnProperty(t)){if(typeof f!="string")throw new Error("Value must be set in option data");f!==t&&(delete r.options[t],c=r.items.indexOf(t),c!==-1&&r.items.splice(c,1,f));r.options[f]=i;e=r.renderCache.item;o=r.renderCache.option;e&&(delete e[t],delete e[f]);o&&(delete o[t],delete o[f]);r.items.indexOf(f)!==-1&&(s=r.getItem(t),h=n(r.render("item",i)),s.hasClass("active")&&h.addClass("active"),s.replaceWith(h));r.lastQuery=null;r.isOpen&&r.refreshOptions(!1)}},removeOption:function(n){var t=this,i,r;n=u(n);i=t.renderCache.item;r=t.renderCache.option;i&&delete i[n];r&&delete r[n];delete t.userOptions[n];delete t.options[n];t.lastQuery=null;t.trigger("option_remove",n);t.removeItem(n)},clearOptions:function(){var n=this;n.loadedSearches={};n.userOptions={};n.renderCache={};n.options=n.sifter.items={};n.lastQuery=null;n.trigger("option_clear");n.clear()},getOption:function(n){return this.getElementWithValue(n,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(t,i){var r=this.$dropdown.find("[data-selectable]"),u=r.index(t)+i;return u>=0&&u<r.length?r.eq(u):n()},getElementWithValue:function(t,i){if(t=u(t),typeof t!="undefined"&&t!==null)for(var r=0,f=i.length;r<f;r++)if(i[r].getAttribute("data-value")===t)return n(i[r]);return n()},getItem:function(n){return this.getElementWithValue(n,this.$control.children())},addItems:function(t){for(var r=n.isArray(t)?t:[t],i=0,u=r.length;i<u;i++)this.isPending=i<u-1,this.addItem(r[i])},addItem:function(t){d(this,["change"],function(){var f,o,s,i=this,r=i.settings.mode,e,h;if(t=u(t),i.items.indexOf(t)!==-1){r==="single"&&i.close();return}i.options.hasOwnProperty(t)&&((r==="single"&&i.clear(),r==="multi"&&i.isFull())||(f=n(i.render("item",i.options[t])),h=i.isFull(),i.items.splice(i.caretPos,0,t),i.insertAtCaret(f),i.isPending&&(h||!i.isFull())||i.refreshState(),i.isSetup&&(s=i.$dropdown_content.find("[data-selectable]"),i.isPending||(o=i.getOption(t),e=i.getAdjacentOption(o,1).attr("data-value"),i.refreshOptions(i.isFocused&&r!=="single"),e&&i.setActiveOption(i.getOption(e))),!s.length||i.isFull()?i.close():i.positionDropdown(),i.updatePlaceholder(),i.trigger("item_add",t,f),i.updateOriginalInput())))})},removeItem:function(n){var t=this,i,r,f;i=typeof n=="object"?n:t.getItem(n);n=u(i.attr("data-value"));r=t.items.indexOf(n);r!==-1&&(i.remove(),i.hasClass("active")&&(f=t.$activeItems.indexOf(i[0]),t.$activeItems.splice(f,1)),t.items.splice(r,1),t.lastQuery=null,!t.settings.persist&&t.userOptions.hasOwnProperty(n)&&t.removeOption(n),r<t.caretPos&&t.setCaret(t.caretPos-1),t.refreshState(),t.updatePlaceholder(),t.updateOriginalInput(),t.positionDropdown(),t.trigger("item_remove",n))},createItem:function(t){var i=this,r=n.trim(i.$control_input.val()||""),o=i.caretPos;if(!i.canCreate(r))return!1;i.lock();typeof t=="undefined"&&(t=!0);var s=typeof i.settings.create=="function"?this.settings.create:function(n){var t={};return t[i.settings.labelField]=n,t[i.settings.valueField]=n,t},f=lt(function(n){if(i.unlock(),n&&typeof n=="object"){var r=u(n[i.settings.valueField]);typeof r=="string"&&(i.setTextboxValue(""),i.addOption(n),i.setCaret(o),i.addItem(r),i.refreshOptions(t&&i.settings.mode!=="single"))}}),e=s.apply(this,[r,f]);return typeof e!="undefined"&&f(e),!0},refreshItems:function(){if(this.lastQuery=null,this.isSetup)for(var n=0;n<this.items.length;n++)this.addItem(this.items);this.refreshState();this.updateOriginalInput()},refreshState:function(){var t,n=this;n.isRequired&&(n.items.length&&(n.isInvalid=!1),n.$control_input.prop("required",t));n.refreshClasses()},refreshClasses:function(){var t=this,i=t.isFull(),r=t.isLocked;t.$wrapper.toggleClass("rtl",t.rtl);t.$control.toggleClass("focus",t.isFocused).toggleClass("disabled",t.isDisabled).toggleClass("required",t.isRequired).toggleClass("invalid",t.isInvalid).toggleClass("locked",r).toggleClass("full",i).toggleClass("not-full",!i).toggleClass("input-active",t.isFocused&&!t.isInputHidden).toggleClass("dropdown-active",t.isOpen).toggleClass("has-options",!n.isEmptyObject(t.options)).toggleClass("has-items",t.items.length>0);t.$control_input.data("grow",!i&&!r)},isFull:function(){return this.settings.maxItems!==null&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(){var i,r,t,n=this;if(n.tagType===h){for(t=[],i=0,r=n.items.length;i<r;i++)t.push('<option value="'+o(n.items[i])+'" selected="selected"><\/option>');t.length||this.$input.attr("multiple")||t.push('<option value="" selected="selected"><\/option>');n.$input.html(t.join(""))}else n.$input.val(n.getValue()),n.$input.attr("value",n.$input.val());n.isSetup&&n.trigger("change",n.$input.val())},updatePlaceholder:function(){if(this.settings.placeholder){var n=this.$control_input;this.items.length?n.removeAttr("placeholder"):n.attr("placeholder",this.settings.placeholder);n.triggerHandler("update",{force:!0})}},open:function(){var n=this;n.isLocked||n.isOpen||n.settings.mode==="multi"&&n.isFull()||(n.focus(),n.isOpen=!0,n.refreshState(),n.$dropdown.css({visibility:"hidden",display:"block"}),n.positionDropdown(),n.$dropdown.css({visibility:"visible"}),n.trigger("dropdown_open",n.$dropdown))},close:function(){var n=this,t=n.isOpen;n.settings.mode==="single"&&n.items.length&&n.hideInput();n.isOpen=!1;n.$dropdown.hide();n.setActiveOption(null);n.refreshState();t&&n.trigger("dropdown_close",n.$dropdown)},positionDropdown:function(){var n=this.$control,t=this.settings.dropdownParent==="body"?n.offset():n.position();t.top+=n.outerHeight(!0);this.$dropdown.css({width:n.outerWidth(),top:t.top,left:t.left})},clear:function(){var n=this;n.items.length&&(n.$control.children(":not(input)").remove(),n.items=[],n.lastQuery=null,n.setCaret(0),n.setActiveItem(null),n.updatePlaceholder(),n.updateOriginalInput(),n.refreshState(),n.showInput(),n.trigger("clear"))},insertAtCaret:function(t){var i=Math.min(this.caretPos,this.items.length);i===0?this.$control.prepend(t):n(this.$control[0].childNodes[i]).before(t);this.setCaret(i+1)},deleteSelection:function(t){var f,l,u,o,r,s,h,c,a,i=this;if(u=t&&t.keyCode===e?-1:1,o=v(i.$control_input[0]),i.$activeOption&&!i.settings.hideSelected&&(h=i.getAdjacentOption(i.$activeOption,-1).attr("data-value")),r=[],i.$activeItems.length){for(a=i.$control.children(".active:"+(u>0?"last":"first")),s=i.$control.children(":not(input)").index(a),u>0&&s++,f=0,l=i.$activeItems.length;f<l;f++)r.push(n(i.$activeItems[f]).attr("data-value"));t&&(t.preventDefault(),t.stopPropagation())}else(i.isFocused||i.settings.mode==="single")&&i.items.length&&(u<0&&o.start===0&&o.length===0?r.push(i.items[i.caretPos-1]):u>0&&o.start===i.$control_input.val().length&&r.push(i.items[i.caretPos]));if(!r.length||typeof i.settings.onDelete=="function"&&i.settings.onDelete.apply(i,[r])===!1)return!1;for(typeof s!="undefined"&&i.setCaret(s);r.length;)i.removeItem(r.pop());return i.showInput(),i.positionDropdown(),i.refreshOptions(!0),h&&(c=i.getOption(h),c.length&&i.setActiveOption(c)),!0},advanceSelection:function(n,t){var o,r,u,f,s,e,i=this;n!==0&&(i.rtl&&(n*=-1),o=n>0?"last":"first",r=v(i.$control_input[0]),i.isFocused&&!i.isInputHidden?(f=i.$control_input.val().length,s=n<0?r.start===0&&r.length===0:r.start===f,s&&!f&&i.advanceCaret(n,t)):(e=i.$control.children(".active:"+o),e.length&&(u=i.$control.children(":not(input)").index(e),i.setActiveItem(null),i.setCaret(n>0?u+1:u))))},advanceCaret:function(n,t){var i=this,u,r;n!==0&&(u=n>0?"next":"prev",i.isShiftDown?(r=i.$control_input[u](),r.length&&(i.hideInput(),i.setActiveItem(r),t&&t.preventDefault())):i.setCaret(i.caretPos+n))},setCaret:function(t){var i=this,r,e,u,f;if(t=i.settings.mode==="single"?i.items.length:Math.max(0,Math.min(i.items.length,t)),!i.isPending)for(u=i.$control.children(":not(input)"),r=0,e=u.length;r<e;r++)f=n(u[r]).detach(),r<t?i.$control_input.before(f):i.$control.append(f);i.caretPos=t},lock:function(){this.close();this.isLocked=!0;this.refreshState()},unlock:function(){this.isLocked=!1;this.refreshState()},disable:function(){var n=this;n.$input.prop("disabled",!0);n.isDisabled=!0;n.lock()},enable:function(){var n=this;n.$input.prop("disabled",!1);n.isDisabled=!1;n.unlock()},destroy:function(){var t=this,i=t.eventNS,r=t.revertSettings;t.trigger("destroy");t.off();t.$wrapper.remove();t.$dropdown.remove();t.$input.html("").append(r.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:r.tabindex}).show();t.$control_input.removeData("grow");t.$input.removeData("selectize");n(window).off(i);n(document).off(i);n(document.body).off(i);delete t.$input[0].selectize},render:function(n,t){var f,h,i="",e=!1,r=this,s=/^[\t ]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;return((n==="option"||n==="item")&&(f=u(t[r.settings.valueField]),e=!!f),e&&(w(r.renderCache[n])||(r.renderCache[n]={}),r.renderCache[n].hasOwnProperty(f)))?r.renderCache[n][f]:(i=r.settings.render[n].apply(this,[t,o]),(n==="option"||n==="option_create")&&(i=i.replace(s,"<$1 data-selectable")),n==="optgroup"&&(h=t[r.settings.optgroupValueField]||"",i=i.replace(s,'<$1 data-group="'+b(o(h))+'"')),(n==="option"||n==="item")&&(i=i.replace(s,'<$1 data-value="'+b(o(f||""))+'"')),e&&(r.renderCache[n][f]=i),i)},clearCache:function(n){var t=this;typeof n=="undefined"?t.renderCache={}:delete t.renderCache[n]},canCreate:function(n){var i=this,t;return i.settings.create?(t=i.settings.createFilter,n.length&&(typeof t!="function"||t.apply(i,[n]))&&(typeof t!="string"||new RegExp(t).test(n))&&(!(t instanceof RegExp)||t.test(n))):!1}}),r.count=0,r.defaults={plugins:[],delimiter:",",persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,scrollDuration:60,loadThrottle:300,dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",optgroupOrder:null,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},n.fn.selectize=function(t){var e=n.fn.selectize.defaults,i=n.extend({},e,t),o=i.dataAttr,u=i.labelField,f=i.valueField,s=i.optgroupField,h=i.optgroupLabelField,c=i.optgroupValueField,l=function(t,r){var e,h,o,s,c=n.trim(t.val()||"");if(i.allowEmptyOption||c.length){for(o=c.split(i.delimiter),e=0,h=o.length;e<h;e++)s={},s[u]=o[e],s[f]=o[e],r.options[o[e]]=s;r.items=o}},a=function(t,r){var l,y,v,a,b=0,e=r.options,p=function(n){var t=o&&n.attr(o);return typeof t=="string"&&t.length?JSON.parse(t):null},w=function(t,o){var h,c;if(t=n(t),h=t.attr("value")||"",h.length||i.allowEmptyOption){if(e.hasOwnProperty(h)){o&&(e[h].optgroup?n.isArray(e[h].optgroup)?e[h].optgroup.push(o):e[h].optgroup=[e[h].optgroup,o]:e[h].optgroup=o);return}c=p(t)||{};c[u]=c[u]||t.text();c[f]=c[f]||h;c[s]=c[s]||o;c.$order=++b;e[h]=c;t.is(":selected")&&r.items.push(h)}},k=function(t){var u,o,i,f,e;for(t=n(t),i=t.attr("label"),i&&(f=p(t)||{},f[h]=i,f[c]=i,r.optgroups[i]=f),e=n("option",t),u=0,o=e.length;u<o;u++)w(e[u],i)};for(r.maxItems=t.attr("multiple")?null:1,a=t.children(),l=0,y=a.length;l<y;l++)v=a[l].tagName.toLowerCase(),v==="optgroup"?k(a[l]):v==="option"&&w(a[l])};return this.each(function(){var f;if(!this.selectize){var s,u=n(this),h=this.tagName.toLowerCase(),o=u.attr("placeholder")||u.attr("data-placeholder");o||i.allowEmptyOption||(o=u.children('option[value=""]').text());f={placeholder:o,options:{},optgroups:{},items:[]};h==="select"?a(u,f):l(u,f);s=new r(u,n.extend(!0,{},e,f,t))}})},n.fn.selectize.defaults=r.defaults,r.define("drag_drop",function(){if(!n.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if(this.settings.mode==="multi"){var t=this;t.lock=function(){var n=t.lock;return function(){var i=t.$control.data("sortable");return i&&i.disable(),n.apply(t,arguments)}}();t.unlock=function(){var n=t.unlock;return function(){var i=t.$control.data("sortable");return i&&i.enable(),n.apply(t,arguments)}}();t.setup=function(){var i=t.setup;return function(){i.apply(this,arguments);var r=t.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:t.isLocked,start:function(n,t){t.placeholder.css("width",t.helper.css("width"));r.css({overflow:"visible"})},stop:function(){r.css({overflow:"hidden"});var u=t.$activeItems?t.$activeItems.slice():null,i=[];r.children("[data-value]").each(function(){i.push(n(this).attr("data-value"))});t.setValue(i);t.setActiveItem(u)}})}}()}}),r.define("dropdown_header",function(t){var i=this;t=n.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(n){return'<div class="'+n.headerClass+'"><div class="'+n.titleRowClass+'"><span class="'+n.labelClass+'">'+n.title+'<\/span><a href="javascript:void(0)" class="'+n.closeClass+'">&times;<\/a><\/div><\/div>'}},t);i.setup=function(){var r=i.setup;return function(){r.apply(i,arguments);i.$dropdown_header=n(t.html(t));i.$dropdown.prepend(i.$dropdown_header)}}()}),r.define("optgroup_columns",function(t){var i=this,r,u;t=n.extend({equalizeWidth:!0,equalizeHeight:!0},t);this.getAdjacentOption=function(t,i){var r=t.closest("[data-group]").find("[data-selectable]"),u=r.index(t)+i;return u>=0&&u<r.length?r.eq(u):n()};this.onKeyDown=function(){var n=i.onKeyDown;return function(t){var e,u,f,r;if(this.isOpen&&(t.keyCode===l||t.keyCode===y)){i.ignoreHover=!0;r=this.$activeOption.closest("[data-group]");e=r.find("[data-selectable]").index(this.$activeOption);r=t.keyCode===l?r.prev("[data-group]"):r.next("[data-group]");f=r.find("[data-selectable]");u=f.eq(Math.min(f.length-1,e));u.length&&this.setActiveOption(u);return}return n.apply(this,arguments)}}();r=function(){var n,t=r.width,i=document;return typeof t=="undefined"&&(n=i.createElement("div"),n.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"><\/div><\/div>',n=n.firstChild,i.body.appendChild(n),t=r.width=n.offsetWidth-n.clientWidth,i.body.removeChild(n)),t};u=function(){var e,u,o,s,c,h,f;if(f=n("[data-group]",i.$dropdown_content),u=f.length,u&&i.$dropdown_content.width()){if(t.equalizeHeight){for(o=0,e=0;e<u;e++)o=Math.max(o,f.eq(e).height());f.css({height:o})}t.equalizeWidth&&(h=i.$dropdown_content.innerWidth()-r(),s=Math.round(h/u),f.css({width:s}),u>1&&(c=h-s*(u-1),f.eq(u-1).css({width:c})))}};(t.equalizeHeight||t.equalizeWidth)&&(c.after(this,"positionDropdown",u),c.after(this,"refreshOptions",u))}),r.define("remove_button",function(t){if(this.settings.mode!=="single"){t=n.extend({label:"&times;",title:"Remove",className:"remove",append:!0},t);var i=this,r='<a href="javascript:void(0)" class="'+t.className+'" tabindex="-1" title="'+o(t.title)+'">'+t.label+"<\/a>",u=function(n,t){var i=n.search(/(<\/[^>]+>\s*)$/);return n.substring(0,i)+t+n.substring(i)};this.setup=function(){var f=i.setup;return function(){if(t.append){var e=i.settings.render.item;i.settings.render.item=function(){return u(e.apply(this,arguments),r)}}f.apply(this,arguments);this.$control.on("click","."+t.className,function(t){if(t.preventDefault(),!i.isLocked){var r=n(t.currentTarget).parent();i.setActiveItem(r);i.deleteSelection()&&i.setCaret(i.items.length)}})}}()}}),r.define("restore_on_backspace",function(n){var t=this;n.text=n.text||function(n){return n[this.settings.labelField]};this.onKeyDown=function(){var i=t.onKeyDown;return function(t){var r,u;if(t.keyCode===e&&this.$control_input.val()===""&&!this.$activeItems.length&&(r=this.caretPos-1,r>=0&&r<this.items.length)){u=this.options[this.items[r]];this.deleteSelection(t)&&(this.setTextboxValue(n.text.apply(this,[u])),this.refreshOptions(!0));t.preventDefault();return}return i.apply(this,arguments)}}()}),r});
/*
//# sourceMappingURL=selectize.min.js.map
*/;
(function(root) {
define("printArea", ["jquery","jqueryUI"], function() {
  return (function() {
/**
 *  Version 2.4.0 Copyright (C) 2013
 *  Tested in IE 11, FF 28.0 and Chrome 33.0.1750.154
 *  No official support for other browsers, but will TRY to accommodate challenges in other browsers.
 *  Example:
 *      Print Button: <div id="print_button">Print</div>
 *      Print Area  : <div class="PrintArea" id="MyId" class="MyClass"> ... html ... </div>
 *      Javascript  : <script>
 *                       $("div#print_button").click(function(){
 *                           $("div.PrintArea").printArea( [OPTIONS] );
 *                       });
 *                     </script>
 *  options are passed as json (example: {mode: "popup", popClose: false})
 *
 *  {OPTIONS}   | [type]     | (default), values      | Explanation
 *  ---------   | ---------  | ---------------------- | -----------
 *  @mode       | [string]   | (iframe),popup         | printable window is either iframe or browser popup
 *  @popHt      | [number]   | (500)                  | popup window height
 *  @popWd      | [number]   | (400)                  | popup window width
 *  @popX       | [number]   | (500)                  | popup window screen X position
 *  @popY       | [number]   | (500)                  | popup window screen Y position
 *  @popTitle   | [string]   | ('')                   | popup window title element
 *  @popClose   | [boolean]  | (false),true           | popup window close after printing
 *  @extraCss   | [string]   | ('')                   | comma separated list of extra css to include
 *  @retainAttr | [string[]] | ["id","class","style"] | string array of attributes to retain for the containment area. (ie: id, style, class)
 *  @standard   | [string]   | strict, loose, (html5) | Only for popup. For html 4.01, strict or loose document standard, or html 5 standard
 *  @extraHead  | [string]   | ('')                   | comma separated list of extra elements to be appended to the head tag
 */
(function($) {
    var counter = 0;
    var modes = { iframe : "iframe", popup : "popup" };
    var standards = { strict : "strict", loose : "loose", html5 : "html5" };
    var defaults = { mode       : modes.iframe,
                     standard   : standards.html5,
                     popHt      : 500,
                     popWd      : 400,
                     popX       : 200,
                     popY       : 200,
                     popTitle   : '',
                     popClose   : false,
                     extraCss   : '',
                     extraHead  : '',
                     retainAttr : ["id","class","style"] };

    var settings = {};//global settings

    $.fn.printArea = function( options )
    {
        $.extend( settings, defaults, options );

        counter++;
        var idPrefix = "printArea_";
        $( "[id^=" + idPrefix + "]" ).remove();

        settings.id = idPrefix + counter;

        var $printSource = $(this);

        var PrintAreaWindow = PrintArea.getPrintWindow();

        PrintArea.write( PrintAreaWindow.doc, $printSource );

        setTimeout( function () { PrintArea.print( PrintAreaWindow ); }, 1000 );
    };

    var PrintArea = {
        print : function( PAWindow ) {
            var paWindow = PAWindow.win;

            $(PAWindow.doc).ready(function(){
                paWindow.focus();
                paWindow.print();

                if ( settings.mode == modes.popup && settings.popClose )
                    setTimeout(function() { paWindow.close(); }, 2000);
            });
        },
        write : function ( PADocument, $ele ) {
            PADocument.open();
            PADocument.write( PrintArea.docType() + "<html>" + PrintArea.getHead() + PrintArea.getBody( $ele ) + "</html>" );
            PADocument.close();
        },
        docType : function() {
            if ( settings.mode == modes.iframe ) return "";

            if ( settings.standard == standards.html5 ) return "<!DOCTYPE html>";

            var transitional = settings.standard == standards.loose ? " Transitional" : "";
            var dtd = settings.standard == standards.loose ? "loose" : "strict";

            return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01' + transitional + '//EN" "http://www.w3.org/TR/html4/' + dtd +  '.dtd">';
        },
        getHead : function() {
            var extraHead = "";
            var links = "";

            if ( settings.extraHead ) settings.extraHead.replace( /([^,]+)/g, function(m){ extraHead += m });

            $(document).find("link")
                .filter(function(){ // Requirement: <link> element MUST have rel="stylesheet" to be considered in print document
                        var relAttr = $(this).attr("rel");
                        return ($.type(relAttr) === 'undefined') == false && relAttr.toLowerCase() == 'stylesheet';
                    })
                .filter(function(){ // Include if media is undefined, empty, print or all
                        var mediaAttr = $(this).attr("media");
                        return $.type(mediaAttr) === 'undefined' || mediaAttr == "" || mediaAttr.toLowerCase() == 'print' || mediaAttr.toLowerCase() == 'all'
                    })
                .each(function(){
                        links += '<link type="text/css" rel="stylesheet" href="' + $(this).attr("href") + '" >';
                    });
            if ( settings.extraCss ) settings.extraCss.replace( /([^,\s]+)/g, function(m){ links += '<link type="text/css" rel="stylesheet" href="' + m + '">' });

            return "<head><title>" + settings.popTitle + "</title>" + extraHead + links + "</head>";
        },
        getBody : function ( elements ) {
            var htm = "";
            var attrs = settings.retainAttr;
            elements.each(function() {
                var ele = PrintArea.getFormData( $(this) );

                var attributes = ""
                for ( var x = 0; x < attrs.length; x++ )
                {
                    var eleAttr = $(ele).attr( attrs[x] );
                    if ( eleAttr ) attributes += (attributes.length > 0 ? " ":"") + attrs[x] + "='" + eleAttr + "'";
                }

                htm += '<div ' + attributes + '>' + $(ele).html() + '</div>';
            });

            return "<body>" + htm + "</body>";
        },
        getFormData : function ( ele ) {
            var copy = ele.clone();
            var copiedInputs = $("input,select,textarea", copy);
            $("input,select,textarea", ele).each(function( i ){
                var typeInput = $(this).attr("type");
                if ($.type(typeInput) === 'undefined') typeInput = $(this).is("select") ? "select" : $(this).is("textarea") ? "textarea" : "";
                var copiedInput = copiedInputs.eq( i );

                if ( typeInput == "radio" || typeInput == "checkbox" ) copiedInput.attr( "checked", $(this).is(":checked") );
                else if ( typeInput == "text" ) copiedInput.attr( "value", $(this).val() );
                else if ( typeInput == "select" )
                    $(this).find( "option" ).each( function( i ) {
                        if ( $(this).is(":selected") ) $("option", copiedInput).eq( i ).attr( "selected", true );
                    });
                else if ( typeInput == "textarea" ) copiedInput.text( $(this).val() );
            });
            return copy;
        },
        getPrintWindow : function () {
            switch ( settings.mode )
            {
                case modes.iframe :
                    var f = new PrintArea.Iframe();
                    return { win : f.contentWindow || f, doc : f.doc };
                case modes.popup :
                    var p = new PrintArea.Popup();
                    return { win : p, doc : p.doc };
            }
        },
        Iframe : function () {
            var frameId = settings.id;
            var iframeStyle = 'border:0;position:absolute;width:0px;height:0px;right:0px;top:0px;';
            var iframe;

            try
            {
                iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
                $(iframe).attr({ style: iframeStyle, id: frameId, src: "#" + new Date().getTime() });
                iframe.doc = null;
                iframe.doc = iframe.contentDocument ? iframe.contentDocument : ( iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
            }
            catch( e ) { throw e + ". iframes may not be supported in this browser."; }

            if ( iframe.doc == null ) throw "Cannot find document.";

            return iframe;
        },
        Popup : function () {
            var windowAttr = "location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";
            windowAttr += ",width=" + settings.popWd + ",height=" + settings.popHt;
            windowAttr += ",resizable=yes,screenX=" + settings.popX + ",screenY=" + settings.popY + ",personalbar=no,scrollbars=yes";

            var newWin = window.open( "", "_blank",  windowAttr );

            newWin.doc = newWin.document;

            return newWin;
        }
    };
})(jQuery);

  }).apply(root, arguments);
});
}(this));

// Knockout JavaScript library v3.1.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function() {(function(p){var A=this||(0,eval)("this"),w=A.document,K=A.navigator,t=A.jQuery,C=A.JSON;(function(p){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports):"function"===typeof define&&define.amd?define('knockout',["exports"],p):p(A.ko={})})(function(z){function G(a,c){return null===a||typeof a in M?a===c:!1}function N(a,c){var d;return function(){d||(d=setTimeout(function(){d=p;a()},c))}}function O(a,c){var d;return function(){clearTimeout(d);d=setTimeout(a,
c)}}function H(b,c,d,e){a.d[b]={init:function(b,h,g,k,l){var n,r;a.ba(function(){var g=a.a.c(h()),k=!d!==!g,s=!r;if(s||c||k!==n)s&&a.ca.fa()&&(r=a.a.lb(a.e.childNodes(b),!0)),k?(s||a.e.U(b,a.a.lb(r)),a.gb(e?e(l,g):l,b)):a.e.da(b),n=k},null,{G:b});return{controlsDescendantBindings:!0}}};a.g.aa[b]=!1;a.e.Q[b]=!0}var a="undefined"!==typeof z?z:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.s=function(a,c,d){a[c]=d};a.version="3.1.0";a.b("version",
a.version);a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}var e={__proto__:[]}instanceof Array,f={},h={};f[K&&/Firefox\/2/i.test(K.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];f.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(f,function(a,b){if(b.length)for(var c=0,
d=b.length;c<d;c++)h[b[c]]=a});var g={propertychange:!0},k=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:p}();return{mb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],r:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},l:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===
b)return c;return-1},hb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d))return a[d];return null},ma:function(b,c){var d=a.a.l(b,c);0<d?b.splice(d,1):0===d&&b.shift()},ib:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<e;d++)0>a.a.l(c,b[d])&&c.push(b[d]);return c},ya:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)c.push(b(a[d],d));return c},la:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c},$:function(a,b){if(b instanceof Array)a.push.apply(a,
b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Y:function(b,c,d){var e=a.a.l(a.a.Sa(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},na:e,extend:c,ra:d,sa:e?d:c,A:b,Oa:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},Fa:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},ec:function(b){b=a.a.R(b);for(var c=w.createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.M(b[d]));return c},lb:function(b,c){for(var d=0,e=b.length,g=[];d<
e;d++){var k=b[d].cloneNode(!0);g.push(c?a.M(k):k)}return g},U:function(b,c){a.a.Fa(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Bb:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],g=e.parentNode,k=0,h=c.length;k<h;k++)g.insertBefore(c[k],e);k=0;for(h=d.length;k<h;k++)a.removeNode(d[k])}},ea:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.shift();if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)if(a.push(c),
c=c.nextSibling,!c)return;a.push(d)}}return a},Db:function(a,b){7>k?a.setAttribute("selected",b):a.selected=b},ta:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},oc:function(b,c){for(var d=[],e=(b||"").split(c),g=0,k=e.length;g<k;g++){var h=a.a.ta(e[g]);""!==h&&d.push(h)}return d},kc:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Sb:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===
a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Ea:function(b){return a.a.Sb(b,b.ownerDocument.documentElement)},eb:function(b){return!!a.a.hb(b,a.a.Ea)},B:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},q:function(b,c,d){var e=k&&g[c];if(!e&&t)t(b).bind(c,d);else if(e||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var h=function(a){d.call(b,a)},f="on"+c;b.attachEvent(f,
h);a.a.u.ja(b,function(){b.detachEvent(f,h)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,d,!1)},ha:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.B(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(t&&!d)t(b).trigger(c);else if("function"==typeof w.createEvent)if("function"==typeof b.dispatchEvent)d=w.createEvent(h[c]||"HTMLEvents"),
d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.v(b)?b():b},Sa:function(b){return a.v(b)?b.o():b},ua:function(b,c,d){if(c){var e=/\S+/g,g=b.className.match(e)||[];a.a.r(c.match(e),function(b){a.a.Y(g,b,d)});b.className=g.join(" ")}},Xa:function(b,
c){var d=a.a.c(c);if(null===d||d===p)d="";var e=a.e.firstChild(b);!e||3!=e.nodeType||a.e.nextSibling(e)?a.e.U(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Vb(b)},Cb:function(a,b){a.name=b;if(7>=k)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},Vb:function(a){9<=k&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Tb:function(a){if(k){var b=a.style.width;a.style.width=0;a.style.width=b}},ic:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=
[],e=b;e<=c;e++)d.push(e);return d},R:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},mc:6===k,nc:7===k,oa:k,ob:function(b,c){for(var d=a.a.R(b.getElementsByTagName("input")).concat(a.a.R(b.getElementsByTagName("textarea"))),e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},g=[],k=d.length-1;0<=k;k--)e(d[k])&&g.push(d[k]);return g},fc:function(b){return"string"==typeof b&&(b=a.a.ta(b))?C&&C.parse?C.parse(b):(new Function("return "+b))():
null},Ya:function(b,c,d){if(!C||!C.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return C.stringify(a.a.c(b),c,d)},gc:function(c,d,e){e=e||{};var g=e.params||{},k=e.includeFields||this.mb,h=c;if("object"==typeof c&&"form"===a.a.B(c))for(var h=c.action,f=k.length-1;0<=f;f--)for(var u=a.a.ob(c,k[f]),D=u.length-1;0<=D;D--)g[u[D].name]=
u[D].value;d=a.a.c(d);var y=w.createElement("form");y.style.display="none";y.action=h;y.method="post";for(var p in d)c=w.createElement("input"),c.name=p,c.value=a.a.Ya(a.a.c(d[p])),y.appendChild(c);b(g,function(a,b){var c=w.createElement("input");c.name=a;c.value=b;y.appendChild(c)});w.body.appendChild(y);e.submitter?e.submitter(y):y.submit();setTimeout(function(){y.parentNode.removeChild(y)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.r);a.b("utils.arrayFirst",a.a.hb);a.b("utils.arrayFilter",
a.a.la);a.b("utils.arrayGetDistinctValues",a.a.ib);a.b("utils.arrayIndexOf",a.a.l);a.b("utils.arrayMap",a.a.ya);a.b("utils.arrayPushAll",a.a.$);a.b("utils.arrayRemoveItem",a.a.ma);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.mb);a.b("utils.getFormFields",a.a.ob);a.b("utils.peekObservable",a.a.Sa);a.b("utils.postJson",a.a.gc);a.b("utils.parseJson",a.a.fc);a.b("utils.registerEventHandler",a.a.q);a.b("utils.stringifyJson",a.a.Ya);a.b("utils.range",a.a.ic);a.b("utils.toggleDomNodeCssClass",
a.a.ua);a.b("utils.triggerEvent",a.a.ha);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.A);a.b("utils.addOrRemoveItem",a.a.Y);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments);a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){function a(b,h){var g=b[d];if(!g||"null"===g||!e[g]){if(!h)return p;g=b[d]="ko"+c++;e[g]={}}return e[g]}
var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===p?p:e[d]},set:function(c,d,e){if(e!==p||a(c,!1)!==p)a(c,!0)[d]=e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},L:function(){return c++ +d}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.u=new function(){function b(b,c){var e=a.a.f.get(b,d);e===p&&c&&(e=[],a.a.f.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](d);
a.a.f.clear(d);a.a.u.cleanExternalData(d);if(f[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.f.L(),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};return{ja:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},Ab:function(c,e){var k=b(c,!1);k&&(a.a.ma(k,e),0==k.length&&a.a.f.set(c,d,p))},M:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];a.a.$(d,b.getElementsByTagName("*"));for(var k=0,l=d.length;k<l;k++)c(d[k])}return b},
removeNode:function(b){a.M(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){t&&"function"==typeof t.cleanData&&t.cleanData([a])}}};a.M=a.a.u.M;a.removeNode=a.a.u.removeNode;a.b("cleanNode",a.M);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.u);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.u.ja);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.u.Ab);(function(){a.a.Qa=function(b){var c;if(t)if(t.parseHTML)c=t.parseHTML(b)||[];else{if((c=t.clean([b]))&&
c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var d=a.a.ta(b).toLowerCase();c=w.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof A.innerShiv?c.appendChild(A.innerShiv(b)):
c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.R(c.lastChild.childNodes)}return c};a.a.Va=function(b,c){a.a.Fa(b);c=a.a.c(c);if(null!==c&&c!==p)if("string"!=typeof c&&(c=c.toString()),t)t(b).html(c);else for(var d=a.a.Qa(c),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.Qa);a.b("utils.setHtml",a.a.Va);a.w=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.w.xb(c.nodeValue);null!=f&&e.push({Rb:c,cc:f})}else if(1==c.nodeType)for(var f=0,h=c.childNodes,g=h.length;f<g;f++)b(h[f],
e)}var c={};return{Na:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},Hb:function(a,b){var f=c[a];if(f===p)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a]}},Ib:function(c,e){var f=
[];b(c,f);for(var h=0,g=f.length;h<g;h++){var k=f[h].Rb,l=[k];e&&a.a.$(l,e);a.w.Hb(f[h].cc,l);k.nodeValue="";k.parentNode&&k.parentNode.removeChild(k)}},xb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.w);a.b("memoization.memoize",a.w.Na);a.b("memoization.unmemoize",a.w.Hb);a.b("memoization.parseMemoText",a.w.xb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.w.Ib);a.Ga={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.h({read:b,write:function(a){clearTimeout(d);
d=setTimeout(function(){b(a)},c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);f="notifyWhenChangesStop"==e?O:N;a.Ma(function(a){return f(a,d)})},notify:function(a,c){a.equalityComparer="always"==c?null:G}};var M={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ga);a.Fb=function(b,c,d){this.target=b;this.za=c;this.Qb=d;this.sb=!1;a.s(this,"dispose",this.F)};a.Fb.prototype.F=function(){this.sb=!0;this.Qb()};a.N=function(){a.a.sa(this,a.N.fn);this.H=
{}};var F="change";z={V:function(b,c,d){var e=this;d=d||F;var f=new a.Fb(e,c?b.bind(c):b,function(){a.a.ma(e.H[d],f)});e.o&&e.o();e.H[d]||(e.H[d]=[]);e.H[d].push(f);return f},notifySubscribers:function(b,c){c=c||F;if(this.qb(c))try{a.k.jb();for(var d=this.H[c].slice(0),e=0,f;f=d[e];++e)f.sb||f.za(b)}finally{a.k.end()}},Ma:function(b){var c=this,d=a.v(c),e,f,h;c.ia||(c.ia=c.notifySubscribers,c.notifySubscribers=function(a,b){b&&b!==F?"beforeChange"===b?c.bb(a):c.ia(a,b):c.cb(a)});var g=b(function(){d&&
h===c&&(h=c());e=!1;c.Ka(f,h)&&c.ia(f=h)});c.cb=function(a){e=!0;h=a;g()};c.bb=function(a){e||(f=a,c.ia(a,"beforeChange"))}},qb:function(a){return this.H[a]&&this.H[a].length},Wb:function(){var b=0;a.a.A(this.H,function(a,d){b+=d.length});return b},Ka:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},extend:function(b){var c=this;b&&a.a.A(b,function(b,e){var f=a.Ga[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.s(z,"subscribe",z.V);a.s(z,"extend",z.extend);a.s(z,"getSubscriptionsCount",
z.Wb);a.a.na&&a.a.ra(z,Function.prototype);a.N.fn=z;a.tb=function(a){return null!=a&&"function"==typeof a.V&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.N);a.b("isSubscribable",a.tb);a.ca=a.k=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{jb:b,end:c,zb:function(b){if(e){if(!a.tb(b))throw Error("Only subscribable things can act as dependencies");e.za(b,b.Kb||(b.Kb=++f))}},t:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},fa:function(){if(e)return e.ba.fa()},
pa:function(){if(e)return e.pa}}}();a.b("computedContext",a.ca);a.b("computedContext.getDependenciesCount",a.ca.fa);a.b("computedContext.isInitial",a.ca.pa);a.m=function(b){function c(){if(0<arguments.length)return c.Ka(d,arguments[0])&&(c.P(),d=arguments[0],c.O()),this;a.k.zb(c);return d}var d=b;a.N.call(c);a.a.sa(c,a.m.fn);c.o=function(){return d};c.O=function(){c.notifySubscribers(d)};c.P=function(){c.notifySubscribers(d,"beforeChange")};a.s(c,"peek",c.o);a.s(c,"valueHasMutated",c.O);a.s(c,"valueWillMutate",
c.P);return c};a.m.fn={equalityComparer:G};var E=a.m.hc="__ko_proto__";a.m.fn[E]=a.m;a.a.na&&a.a.ra(a.m.fn,a.N.fn);a.Ha=function(b,c){return null===b||b===p||b[E]===p?!1:b[E]===c?!0:a.Ha(b[E],c)};a.v=function(b){return a.Ha(b,a.m)};a.ub=function(b){return"function"==typeof b&&b[E]===a.m||"function"==typeof b&&b[E]===a.h&&b.Yb?!0:!1};a.b("observable",a.m);a.b("isObservable",a.v);a.b("isWriteableObservable",a.ub);a.T=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
b=a.m(b);a.a.sa(b,a.T.fn);return b.extend({trackArrayChanges:!0})};a.T.fn={remove:function(b){for(var c=this.o(),d=[],e="function"!=typeof b||a.v(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var h=c[f];e(h)&&(0===d.length&&this.P(),d.push(h),c.splice(f,1),f--)}d.length&&this.O();return d},removeAll:function(b){if(b===p){var c=this.o(),d=c.slice(0);this.P();c.splice(0,c.length);this.O();return d}return b?this.remove(function(c){return 0<=a.a.l(b,c)}):[]},destroy:function(b){var c=this.o(),d=
"function"!=typeof b||a.v(b)?function(a){return a===b}:b;this.P();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.O()},destroyAll:function(b){return b===p?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.l(b,c)}):[]},indexOf:function(b){var c=this();return a.a.l(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.P(),this.o()[d]=c,this.O())}};a.a.r("pop push reverse shift sort splice unshift".split(" "),function(b){a.T.fn[b]=function(){var a=this.o();
this.P();this.kb(a,b,arguments);a=a[b].apply(a,arguments);this.O();return a}});a.a.r(["slice"],function(b){a.T.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.a.na&&a.a.ra(a.T.fn,a.m.fn);a.b("observableArray",a.T);var I="arrayChange";a.Ga.trackArrayChanges=function(b){function c(){if(!d){d=!0;var c=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==F||++f;return c.apply(this,arguments)};var k=[].concat(b.o()||[]);e=null;b.V(function(c){c=[].concat(c||[]);if(b.qb(I)){var d;
if(!e||1<f)e=a.a.Aa(k,c,{sparse:!0});d=e;d.length&&b.notifySubscribers(d,I)}k=c;e=null;f=0})}}if(!b.kb){var d=!1,e=null,f=0,h=b.V;b.V=b.subscribe=function(a,b,d){d===I&&c();return h.apply(this,arguments)};b.kb=function(b,c,l){function h(a,b,c){return r[r.length]={status:a,value:b,index:c}}if(d&&!f){var r=[],m=b.length,q=l.length,s=0;switch(c){case "push":s=m;case "unshift":for(c=0;c<q;c++)h("added",l[c],s+c);break;case "pop":s=m-1;case "shift":m&&h("deleted",b[s],s);break;case "splice":c=Math.min(Math.max(0,
0>l[0]?m+l[0]:l[0]),m);for(var m=1===q?m:Math.min(c+(l[1]||0),m),q=c+q-2,s=Math.max(m,q),B=[],u=[],D=2;c<s;++c,++D)c<m&&u.push(h("deleted",b[c],c)),c<q&&B.push(h("added",l[D],c));a.a.nb(u,B);break;default:return}e=r}}}};a.ba=a.h=function(b,c,d){function e(){q=!0;a.a.A(v,function(a,b){b.F()});v={};x=0;n=!1}function f(){var a=g.throttleEvaluation;a&&0<=a?(clearTimeout(t),t=setTimeout(h,a)):g.wa?g.wa():h()}function h(){if(!r&&!q){if(y&&y()){if(!m){p();return}}else m=!1;r=!0;try{var b=v,d=x;a.k.jb({za:function(a,
c){q||(d&&b[c]?(v[c]=b[c],++x,delete b[c],--d):v[c]||(v[c]=a.V(f),++x))},ba:g,pa:!x});v={};x=0;try{var e=c?s.call(c):s()}finally{a.k.end(),d&&a.a.A(b,function(a,b){b.F()}),n=!1}g.Ka(l,e)&&(g.notifySubscribers(l,"beforeChange"),l=e,g.wa&&!g.throttleEvaluation||g.notifySubscribers(l))}finally{r=!1}x||p()}}function g(){if(0<arguments.length){if("function"===typeof B)B.apply(c,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}n&&h();a.k.zb(g);return l}function k(){return n||0<x}var l,n=!0,r=!1,m=!1,q=!1,s=b;s&&"object"==typeof s?(d=s,s=d.read):(d=d||{},s||(s=d.read));if("function"!=typeof s)throw Error("Pass a function that returns the value of the ko.computed");var B=d.write,u=d.disposeWhenNodeIsRemoved||d.G||null,D=d.disposeWhen||d.Da,y=D,p=e,v={},x=0,t=null;c||(c=d.owner);a.N.call(g);a.a.sa(g,a.h.fn);g.o=function(){n&&!x&&h();return l};g.fa=function(){return x};g.Yb="function"===typeof d.write;g.F=function(){p()};
g.ga=k;var w=g.Ma;g.Ma=function(a){w.call(g,a);g.wa=function(){g.bb(l);n=!0;g.cb(g)}};a.s(g,"peek",g.o);a.s(g,"dispose",g.F);a.s(g,"isActive",g.ga);a.s(g,"getDependenciesCount",g.fa);u&&(m=!0,u.nodeType&&(y=function(){return!a.a.Ea(u)||D&&D()}));!0!==d.deferEvaluation&&h();u&&k()&&u.nodeType&&(p=function(){a.a.u.Ab(u,p);e()},a.a.u.ja(u,p));return g};a.$b=function(b){return a.Ha(b,a.h)};z=a.m.hc;a.h[z]=a.m;a.h.fn={equalityComparer:G};a.h.fn[z]=a.h;a.a.na&&a.a.ra(a.h.fn,a.N.fn);a.b("dependentObservable",
a.h);a.b("computed",a.h);a.b("isComputed",a.$b);(function(){function b(a,f,h){h=h||new d;a=f(a);if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var g=a instanceof Array?[]:{};h.save(a,g);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":g[c]=d;break;case "object":case "undefined":var n=h.get(d);g[c]=n!==p?n:b(d,f,h)}});return g}function c(a,b){if(a instanceof Array){for(var c=
0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.ab=[]}a.Gb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.v(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Gb(b);return a.a.Ya(b,c,d)};d.prototype={save:function(b,c){var d=a.a.l(this.keys,b);0<=d?this.ab[d]=c:(this.keys.push(b),this.ab.push(c))},get:function(b){b=a.a.l(this.keys,
b);return 0<=b?this.ab[b]:p}}})();a.b("toJS",a.Gb);a.b("toJSON",a.toJSON);(function(){a.i={p:function(b){switch(a.a.B(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.Pa):7>=a.a.oa?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.i.p(b.options[b.selectedIndex]):p;default:return b.value}},X:function(b,c,d){switch(a.a.B(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.d.options.Pa,
p);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.d.options.Pa,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""}break;case "select":if(""===c||null===c)c=p;for(var e=-1,f=0,h=b.options.length,g;f<h;++f)if(g=a.i.p(b.options[f]),g==c||""==g&&c===p){e=f;break}if(d||0<=e||c===p&&1<b.size)b.selectedIndex=e;break;default:if(null===c||c===p)c="";b.value=c}}}})();a.b("selectExtensions",a.i);a.b("selectExtensions.readValue",
a.i.p);a.b("selectExtensions.writeValue",a.i.X);a.g=function(){function b(b){b=a.a.ta(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),g,m,q=0;if(d){d.push(",");for(var s=0,B;B=d[s];++s){var u=B.charCodeAt(0);if(44===u){if(0>=q){g&&c.push(m?{key:g,value:m.join("")}:{unknown:g});g=m=q=0;continue}}else if(58===u){if(!m)continue}else if(47===u&&s&&1<B.length)(u=d[s-1].match(f))&&!h[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),d.push(","),s=-1,B="/");else if(40===u||123===u||91===
u)++q;else if(41===u||125===u||93===u)--q;else if(!g&&!m){g=34===u||39===u?B.slice(1,-1):B;continue}m?m.push(B):m=[B]}}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},g={};return{aa:[],W:g,Ra:b,qa:function(e,l){function f(b,e){var l,k=a.getBindingHandler(b);
if(k&&k.preprocess?e=k.preprocess(e,b,f):1){if(k=g[b])l=e,0<=a.a.l(c,l)?l=!1:(k=l.match(d),l=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:l),k=l;k&&m.push("'"+b+"':function(_z){"+l+"=_z}");q&&(e="function(){return "+e+" }");h.push("'"+b+"':"+e)}}l=l||{};var h=[],m=[],q=l.valueAccessors,s="string"===typeof e?b(e):e;a.a.r(s,function(a){f(a.key||a.unknown,a.value)});m.length&&f("_ko_property_writers","{"+m.join(",")+" }");return h.join(",")},bc:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;
return!1},va:function(b,c,d,e,g){if(b&&a.v(b))!a.ub(b)||g&&b.o()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.g);a.b("expressionRewriting.bindingRewriteValidators",a.g.aa);a.b("expressionRewriting.parseObjectLiteral",a.g.Ra);a.b("expressionRewriting.preProcessBindings",a.g.qa);a.b("expressionRewriting._twoWayBindings",a.g.W);a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.qa);(function(){function b(a){return 8==
a.nodeType&&h.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function d(a,d){for(var e=a,g=1,k=[];e=e.nextSibling;){if(c(e)&&(g--,0===g))return k;k.push(e);b(e)&&g++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,h=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,
g=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,k={ul:!0,ol:!0};a.e={Q:{},childNodes:function(a){return b(a)?d(a):a.childNodes},da:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Fa(c)},U:function(c,d){if(b(c)){a.e.da(c);for(var e=c.nextSibling,g=0,k=d.length;g<k;g++)e.parentNode.insertBefore(d[g],e)}else a.a.U(c,d)},yb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},rb:function(c,
d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.e.yb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Xb:b,lc:function(a){return(a=(f?a.text:a.nodeValue).match(h))?a[1]:null},wb:function(d){if(k[a.a.B(d)]){var g=d.firstChild;if(g){do if(1===g.nodeType){var f;f=g.firstChild;
var h=null;if(f){do if(h)h.push(f);else if(b(f)){var q=e(f,!0);q?f=q:h=[f]}else c(f)&&(h=[f]);while(f=f.nextSibling)}if(f=h)for(h=g.nextSibling,q=0;q<f.length;q++)h?d.insertBefore(f[q],h):d.appendChild(f[q])}while(g=g.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.Q);a.b("virtualElements.emptyNode",a.e.da);a.b("virtualElements.insertAfter",a.e.rb);a.b("virtualElements.prepend",a.e.yb);a.b("virtualElements.setDomNodeChildren",a.e.U);(function(){a.J=function(){this.Nb=
{}};a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind");case 8:return a.e.Xb(b);default:return!1}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a):null},getBindingAccessors:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a,{valueAccessors:!0}):null},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");
case 8:return a.e.lc(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var f=this.Nb,h=b+(e&&e.valueAccessors||""),g;if(!(g=f[h])){var k,l="with($context){with($data||{}){return{"+a.g.qa(b,e)+"}}}";k=new Function("$context","$element",l);g=f[h]=k}return g(c,d)}catch(n){throw n.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+n.message,n;}}});a.J.instance=new a.J})();a.b("bindingProvider",a.J);(function(){function b(a){return function(){return a}}function c(a){return a()}
function d(b){return a.a.Oa(a.k.t(b),function(a,c){return function(){return b()[c]}})}function e(a,b){return d(this.getBindings.bind(this,a,b))}function f(b,c,d){var e,g=a.e.firstChild(c),k=a.J.instance,f=k.preprocessNode;if(f){for(;e=g;)g=a.e.nextSibling(e),f.call(k,e);g=a.e.firstChild(c)}for(;e=g;)g=a.e.nextSibling(e),h(b,e,d)}function h(b,c,d){var e=!0,g=1===c.nodeType;g&&a.e.wb(c);if(g&&d||a.J.instance.nodeHasBindings(c))e=k(c,null,b,d).shouldBindDescendants;e&&!n[a.a.B(c)]&&f(b,c,!g)}function g(b){var c=
[],d={},e=[];a.a.A(b,function y(g){if(!d[g]){var k=a.getBindingHandler(g);k&&(k.after&&(e.push(g),a.a.r(k.after,function(c){if(b[c]){if(-1!==a.a.l(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));y(c)}}),e.length--),c.push({key:g,pb:k}));d[g]=!0}});return c}function k(b,d,k,f){var h=a.a.f.get(b,r);if(!d){if(h)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,r,!0)}!h&&f&&a.Eb(b,k);var l;if(d&&"function"!==
typeof d)l=d;else{var n=a.J.instance,m=n.getBindingAccessors||e,x=a.h(function(){(l=d?d(k,b):m.call(n,b,k))&&k.D&&k.D();return l},null,{G:b});l&&x.ga()||(x=null)}var t;if(l){var w=x?function(a){return function(){return c(x()[a])}}:function(a){return l[a]},z=function(){return a.a.Oa(x?x():l,c)};z.get=function(a){return l[a]&&c(w(a))};z.has=function(a){return a in l};f=g(l);a.a.r(f,function(c){var d=c.pb.init,e=c.pb.update,g=c.key;if(8===b.nodeType&&!a.e.Q[g])throw Error("The binding '"+g+"' cannot be used with virtual elements");
try{"function"==typeof d&&a.k.t(function(){var a=d(b,w(g),z,k.$data,k);if(a&&a.controlsDescendantBindings){if(t!==p)throw Error("Multiple bindings ("+t+" and "+g+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");t=g}}),"function"==typeof e&&a.h(function(){e(b,w(g),z,k.$data,k)},null,{G:b})}catch(f){throw f.message='Unable to process binding "'+g+": "+l[g]+'"\nMessage: '+f.message,f;}})}return{shouldBindDescendants:t===p}}
function l(b){return b&&b instanceof a.I?b:new a.I(b)}a.d={};var n={script:!0};a.getBindingHandler=function(b){return a.d[b]};a.I=function(b,c,d,e){var g=this,k="function"==typeof b&&!a.v(b),f,h=a.h(function(){var f=k?b():b,l=a.a.c(f);c?(c.D&&c.D(),a.a.extend(g,c),h&&(g.D=h)):(g.$parents=[],g.$root=l,g.ko=a);g.$rawData=f;g.$data=l;d&&(g[d]=l);e&&e(g,c,l);return g.$data},null,{Da:function(){return f&&!a.a.eb(f)},G:!0});h.ga()&&(g.D=h,h.equalityComparer=null,f=[],h.Jb=function(b){f.push(b);a.a.u.ja(b,
function(b){a.a.ma(f,b);f.length||(h.F(),g.D=h=p)})})};a.I.prototype.createChildContext=function(b,c,d){return new a.I(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.I.prototype.extend=function(b){return new a.I(this.D||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var r=a.a.f.L(),m=a.a.f.L();a.Eb=function(b,c){if(2==arguments.length)a.a.f.set(b,m,c),
c.D&&c.D.Jb(b);else return a.a.f.get(b,m)};a.xa=function(b,c,d){1===b.nodeType&&a.e.wb(b);return k(b,c,l(d),!0)};a.Lb=function(c,e,g){g=l(g);return a.xa(c,"function"===typeof e?d(e.bind(null,g,c)):a.a.Oa(e,b),g)};a.gb=function(a,b){1!==b.nodeType&&8!==b.nodeType||f(l(a),b,!0)};a.fb=function(a,b){!t&&A.jQuery&&(t=A.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||A.document.body;h(l(a),
b,!0)};a.Ca=function(b){switch(b.nodeType){case 1:case 8:var c=a.Eb(b);if(c)return c;if(b.parentNode)return a.Ca(b.parentNode)}return p};a.Pb=function(b){return(b=a.Ca(b))?b.$data:p};a.b("bindingHandlers",a.d);a.b("applyBindings",a.fb);a.b("applyBindingsToDescendants",a.gb);a.b("applyBindingAccessorsToNode",a.xa);a.b("applyBindingsToNode",a.Lb);a.b("contextFor",a.Ca);a.b("dataFor",a.Pb)})();var L={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.A(d,function(c,
d){d=a.a.c(d);var h=!1===d||null===d||d===p;h&&b.removeAttribute(c);8>=a.a.oa&&c in L?(c=L[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,d.toString());"name"===c&&a.a.Cb(b,h?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):b.value}function f(){var g=b.checked,f=r?e():g;if(!a.ca.pa()&&(!k||g)){var h=a.k.t(c);l?n!==f?(g&&(a.a.Y(h,f,!0),a.a.Y(h,n,!1)),n=f):a.a.Y(h,f,g):a.g.va(h,d,"checked",
f,!0)}}function h(){var d=a.a.c(c());b.checked=l?0<=a.a.l(d,e()):g?d:e()===d}var g="checkbox"==b.type,k="radio"==b.type;if(g||k){var l=g&&a.a.c(c())instanceof Array,n=l?e():p,r=k||l;k&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.ba(f,null,{G:b});a.a.q(b,"click",f);a.ba(h,null,{G:b})}}};a.g.W.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());"object"==typeof d?a.a.A(d,function(c,d){d=a.a.c(d);a.a.ua(b,c,d)}):(d=String(d||
""),a.a.ua(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.ua(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,f){var h=c()||{};a.a.A(h,function(g){"string"==typeof g&&a.a.q(b,g,function(b){var h,n=c()[g];if(n){try{var r=a.a.R(arguments);e=f.$data;r.unshift(e);h=n.apply(e,r)}finally{!0!==h&&(b.preventDefault?
b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={vb:function(b){return function(){var c=b(),d=a.a.Sa(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.K.Ja};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.K.Ja}}},init:function(b,
c){return a.d.template.init(b,a.d.foreach.vb(c))},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.vb(c),d,e,f)}};a.g.aa.foreach=!1;a.e.Q.foreach=!0;a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var k=b.ownerDocument;if("activeElement"in k){var f;try{f=k.activeElement}catch(h){f=k.body}e=f===b}k=c();a.g.va(k,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),h=e.bind(null,!1);a.a.q(b,"focus",f);a.a.q(b,"focusin",
f);a.a.q(b,"blur",h);a.a.q(b,"focusout",h)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.k.t(a.a.ha,null,[b,d?"focusin":"focusout"]))}};a.g.W.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.g.W.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Va(b,c())}};H("if");H("ifnot",!1,!0);H("with",!0,!1,function(a,c){return a.createChildContext(c)});var J={};a.d.options={init:function(b){if("select"!==
a.a.B(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.la(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function h(c,d){if(r.length){var e=0<=a.a.l(r,a.i.p(d[0]));a.a.Db(d[0],e);m&&!e&&a.k.t(a.a.ha,null,[b,"change"])}}var g=0!=b.length&&b.multiple?b.scrollTop:null,k=a.a.c(c()),l=d.get("optionsIncludeDestroyed");
c={};var n,r;r=b.multiple?a.a.ya(e(),a.i.p):0<=b.selectedIndex?[a.i.p(b.options[b.selectedIndex])]:[];k&&("undefined"==typeof k.length&&(k=[k]),n=a.a.la(k,function(b){return l||b===p||null===b||!a.a.c(b._destroy)}),d.has("optionsCaption")&&(k=a.a.c(d.get("optionsCaption")),null!==k&&k!==p&&n.unshift(J)));var m=!1;c.beforeRemove=function(a){b.removeChild(a)};k=h;d.has("optionsAfterRender")&&(k=function(b,c){h(0,c);a.k.t(d.get("optionsAfterRender"),null,[c[0],b!==J?b:p])});a.a.Ua(b,n,function(c,e,g){g.length&&
(r=g[0].selected?[a.i.p(g[0])]:[],m=!0);e=b.ownerDocument.createElement("option");c===J?(a.a.Xa(e,d.get("optionsCaption")),a.i.X(e,p)):(g=f(c,d.get("optionsValue"),c),a.i.X(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.Xa(e,c));return[e]},c,k);a.k.t(function(){d.get("valueAllowUnset")&&d.has("value")?a.i.X(b,a.a.c(d.get("value")),!0):(b.multiple?r.length&&e().length<r.length:r.length&&0<=b.selectedIndex?a.i.p(b.options[b.selectedIndex])!==r[0]:r.length||0<=b.selectedIndex)&&a.a.ha(b,"change")});a.a.Tb(b);
g&&20<Math.abs(g-b.scrollTop)&&(b.scrollTop=g)}};a.d.options.Pa=a.a.f.L();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.q(b,"change",function(){var e=c(),f=[];a.a.r(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.i.p(b))});a.g.va(e,d,"selectedOptions",f)})},update:function(b,c){if("select"!=a.a.B(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c());d&&"number"==typeof d.length&&a.a.r(b.getElementsByTagName("option"),function(b){var c=
0<=a.a.l(d,a.i.p(b));a.a.Db(b,c)})}};a.g.W.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.A(d,function(c,d){d=a.a.c(d);b.style[c]=d||""})}};a.d.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.q(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},
update:function(b,c){a.a.Xa(b,c())}};a.e.Q.text=!0;a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Ob;a.a.Cb(b,d)}}};a.d.uniqueName.Ob=0;a.d.value={after:["options","foreach"],init:function(b,c,d){function e(){g=!1;var e=c(),f=a.i.p(b);a.g.va(e,d,"value",f)}var f=["change"],h=d.get("valueUpdate"),g=!1;h&&("string"==typeof h&&(h=[h]),a.a.$(f,h),f=a.a.ib(f));!a.a.oa||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||
-1!=a.a.l(f,"propertychange")||(a.a.q(b,"propertychange",function(){g=!0}),a.a.q(b,"focus",function(){g=!1}),a.a.q(b,"blur",function(){g&&e()}));a.a.r(f,function(c){var d=e;a.a.kc(c,"after")&&(d=function(){setTimeout(e,0)},c=c.substring(5));a.a.q(b,c,d)})},update:function(b,c,d){var e=a.a.c(c());c=a.i.p(b);if(e!==c)if("select"===a.a.B(b)){var f=d.get("valueAllowUnset");d=function(){a.i.X(b,e,f)};d();f||e===a.i.p(b)?setTimeout(d,0):a.k.t(a.a.ha,null,[b,"change"])}else a.i.X(b,e)}};a.g.W.value=!0;a.d.visible=
{update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,f,h){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,h)}}})("click");a.C=function(){};a.C.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.C.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.C.prototype.makeTemplateSource=
function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.n.j(d)}if(1==b.nodeType||8==b.nodeType)return new a.n.Z(b);throw Error("Unknown template type: "+b);};a.C.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d)};a.C.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.C.prototype.rewriteTemplate=
function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.C);a.Za=function(){function b(b,c,d,g){b=a.g.Ra(b);for(var k=a.g.aa,l=0;l<b.length;l++){var n=b[l].key;if(k.hasOwnProperty(n)){var r=k[n];if("function"===typeof r){if(n=r(b[l].value))throw Error(n);}else if(!r)throw Error("This template engine does not support the '"+n+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.qa(b,
{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return g.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Ub:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Za.dc(b,c)},d)},dc:function(a,f){return a.replace(c,function(a,c,d,e,n){return b(n,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e",
"#comment",f)})},Mb:function(b,c){return a.w.Na(function(d,g){var k=d.nextSibling;k&&k.nodeName.toLowerCase()===c&&a.xa(k,b,g)})}}}();a.b("__tr_ambtns",a.Za.Mb);(function(){a.n={};a.n.j=function(a){this.j=a};a.n.j.prototype.text=function(){var b=a.a.B(this.j),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.j[b];var c=arguments[0];"innerHTML"===b?a.a.Va(this.j,c):this.j[b]=c};var b=a.a.f.L()+"_";a.n.j.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.j,
b+c);a.a.f.set(this.j,b+c,arguments[1])};var c=a.a.f.L();a.n.Z=function(a){this.j=a};a.n.Z.prototype=new a.n.j;a.n.Z.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.j,c)||{};b.$a===p&&b.Ba&&(b.$a=b.Ba.innerHTML);return b.$a}a.a.f.set(this.j,c,{$a:arguments[0]})};a.n.j.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.j,c)||{}).Ba;a.a.f.set(this.j,c,{Ba:arguments[0]})};a.b("templateSources",a.n);a.b("templateSources.domElement",a.n.j);a.b("templateSources.anonymousTemplate",
a.n.Z)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],h=e.parentNode,m=a.J.instance,q=m.preprocessNode;if(q){b(e,f,function(a,b){var c=a.previousSibling,d=q.call(m,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.ea(c,h))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.fb(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==
b.nodeType||a.w.Ib(b,[d])});a.a.ea(c,h)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,h,n,r){r=r||{};var m=b&&d(b),m=m&&m.ownerDocument,q=r.templateEngine||f;a.Za.Ub(h,q,m);h=q.renderTemplate(h,n,r,m);if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");m=!1;switch(e){case "replaceChildren":a.e.U(b,h);m=!0;break;case "replaceNode":a.a.Bb(b,h);m=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+
e);}m&&(c(h,n),r.afterRender&&a.k.t(r.afterRender,null,[h,n.$data]));return h}var f;a.Wa=function(b){if(b!=p&&!(b instanceof a.C))throw Error("templateEngine must inherit from ko.templateEngine");f=b};a.Ta=function(b,c,h,n,r){h=h||{};if((h.templateEngine||f)==p)throw Error("Set a template engine before calling renderTemplate");r=r||"replaceChildren";if(n){var m=d(n);return a.h(function(){var f=c&&c instanceof a.I?c:new a.I(a.a.c(c)),p=a.v(b)?b():"function"==typeof b?b(f.$data,f):b,f=e(n,r,p,f,h);
"replaceNode"==r&&(n=f,m=d(n))},null,{Da:function(){return!m||!a.a.Ea(m)},G:m&&"replaceNode"==r?m.parentNode:m})}return a.w.Na(function(d){a.Ta(b,c,h,d,"replaceNode")})};a.jc=function(b,d,f,h,r){function m(a,b){c(b,s);f.afterRender&&f.afterRender(b,a)}function q(a,c){s=r.createChildContext(a,f.as,function(a){a.$index=c});var d="function"==typeof b?b(a,s):b;return e(null,"ignoreTargetNode",d,s,f)}var s;return a.h(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.la(b,function(b){return f.includeDestroyed||
b===p||null===b||!a.a.c(b._destroy)});a.k.t(a.a.Ua,null,[h,b,q,f,m])},null,{G:h})};var h=a.a.f.L();a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||d.name?a.e.da(b):(d=a.e.childNodes(b),d=a.a.ec(d),(new a.n.Z(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var m=c(),q;c=a.a.c(m);d=!0;e=null;"string"==typeof c?c={}:(m=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)),q=a.a.c(c.data));"foreach"in c?e=a.jc(m||b,d&&c.foreach||
[],c,b,f):d?(f="data"in c?f.createChildContext(q,c.as):f,e=a.Ta(m||b,f,c,b)):a.e.da(b);f=e;(q=a.a.f.get(b,h))&&"function"==typeof q.F&&q.F();a.a.f.set(b,h,f&&f.ga()?f:p)}};a.g.aa.template=function(b){b=a.g.Ra(b);return 1==b.length&&b[0].unknown||a.g.bc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.e.Q.template=!0})();a.b("setTemplateEngine",a.Wa);a.b("renderTemplate",a.Ta);a.a.nb=function(a,c,d){if(a.length&&c.length){var e,f,h,g,k;for(e=
f=0;(!d||e<d)&&(g=a[f]);++f){for(h=0;k=c[h];++h)if(g.value===k.value){g.moved=k.index;k.moved=g.index;c.splice(h,1);e=h=0;break}e+=h}}};a.a.Aa=function(){function b(b,d,e,f,h){var g=Math.min,k=Math.max,l=[],n,p=b.length,m,q=d.length,s=q-p||1,t=p+q+1,u,w,y;for(n=0;n<=p;n++)for(w=u,l.push(u=[]),y=g(q,n+s),m=k(0,n-1);m<=y;m++)u[m]=m?n?b[n-1]===d[m-1]?w[m-1]:g(w[m]||t,u[m-1]||t)+1:m+1:n+1;g=[];k=[];s=[];n=p;for(m=q;n||m;)q=l[n][m]-1,m&&q===l[n][m-1]?k.push(g[g.length]={status:e,value:d[--m],index:m}):
n&&q===l[n-1][m]?s.push(g[g.length]={status:f,value:b[--n],index:n}):(--m,--n,h.sparse||g.push({status:"retained",value:d[m]}));a.a.nb(k,s,10*p);return g.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<=d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Aa);(function(){function b(b,c,f,h,g){var k=[],l=a.h(function(){var l=c(f,g,a.a.ea(k,b))||[];0<k.length&&(a.a.Bb(k,l),h&&a.k.t(h,null,[f,
l,g]));k.length=0;a.a.$(k,l)},null,{G:b,Da:function(){return!a.a.eb(k)}});return{S:k,h:l.ga()?l:p}}var c=a.a.f.L();a.a.Ua=function(d,e,f,h,g){function k(b,c){v=r[c];u!==c&&(z[b]=v);v.Ia(u++);a.a.ea(v.S,d);s.push(v);y.push(v)}function l(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.r(c[d].S,function(a){b(a,d,c[d].ka)})}e=e||[];h=h||{};var n=a.a.f.get(d,c)===p,r=a.a.f.get(d,c)||[],m=a.a.ya(r,function(a){return a.ka}),q=a.a.Aa(m,e,h.dontLimitMoves),s=[],t=0,u=0,w=[],y=[];e=[];for(var z=[],m=[],
v,x=0,A,C;A=q[x];x++)switch(C=A.moved,A.status){case "deleted":C===p&&(v=r[t],v.h&&v.h.F(),w.push.apply(w,a.a.ea(v.S,d)),h.beforeRemove&&(e[x]=v,y.push(v)));t++;break;case "retained":k(x,t++);break;case "added":C!==p?k(x,C):(v={ka:A.value,Ia:a.m(u++)},s.push(v),y.push(v),n||(m[x]=v))}l(h.beforeMove,z);a.a.r(w,h.beforeRemove?a.M:a.removeNode);for(var x=0,n=a.e.firstChild(d),E;v=y[x];x++){v.S||a.a.extend(v,b(d,f,v.ka,g,v.Ia));for(t=0;q=v.S[t];n=q.nextSibling,E=q,t++)q!==n&&a.e.rb(d,q,E);!v.Zb&&g&&(g(v.ka,
v.S,v.Ia),v.Zb=!0)}l(h.beforeRemove,e);l(h.afterMove,z);l(h.afterAdd,m);a.a.f.set(d,c,s)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Ua);a.K=function(){this.allowTemplateRewriting=!1};a.K.prototype=new a.C;a.K.prototype.renderTemplateSource=function(b){var c=(9>a.a.oa?0:b.nodes)?b.nodes():null;if(c)return a.a.R(c.cloneNode(!0).childNodes);b=b.text();return a.a.Qa(b)};a.K.Ja=new a.K;a.Wa(a.K.Ja);a.b("nativeTemplateEngine",a.K);(function(){a.La=function(){var a=this.ac=function(){if(!t||
!t.tmpl)return 0;try{if(0<=t.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f){f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=t.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=t.extend({koBindingContext:e},f.templateOptions);e=t.tmpl(h,b,e);e.appendTo(w.createElement("div"));
t.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(t.tmpl.tag.ko_code={open:"__.push($1 || '');"},t.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.La.prototype=new a.C;var b=new a.La;0<b.ac&&a.Wa(b);a.b("jqueryTmplTemplateEngine",a.La)})()})})();})();

/*!
 * jQuery UI Widget 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( 'Scripts/jqueryUI/widget',[ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			try {
				$( elem ).triggerHandler( "remove" );
			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

return $.widget;

}));

/*global define*/
define(

    'Scripts/KnockoutJqueryUI/bindingHandler',[
        'jquery',
        'knockout',
        '../jqueryUI/widget'
    ],

    function ($, ko) {

        

        var domDataKey, filterAndUnwrapProperties, subscribeToRefreshOn, BindingHandler;

        domDataKey = '__kojqui_options';

        filterAndUnwrapProperties = function (source, properties) {
            /// <summary>Filters and unwraps the properties of an object.</summary>
            /// <param name='source' type='Object'></param>
            /// <param name='properties' type='Array' elementType='String'></param>
            /// <returns type='Object'>A new object with the specified properties copied
            /// and unwrapped from source.</returns>

            var result = {};

            ko.utils.arrayForEach(properties, function (property) {
                if (source[property] !== undefined) {
                    result[property] = ko.utils.unwrapObservable(source[property]);
                }
            });

            return result;
        };

        subscribeToRefreshOn = function (widgetName, element, bindingValue) {
            /// <summary>Creates a subscription to the refreshOn observable.</summary>
            /// <param name='widgetName' type='String'>The widget's name.</param>
            /// <param name='element' type='DOMNode'></param>
            /// <param name='bindingValue' type='Object'></param>

            if (ko.isObservable(bindingValue.refreshOn)) {
                ko.computed({
                    read: function () {
                        bindingValue.refreshOn();
                        $(element)[widgetName]('refresh');
                    },
                    disposeWhenNodeIsRemoved: element
                });
            }
        };

        BindingHandler = function (widgetName) {
            /// <summary>Constructor.</summary>
            /// <param name='widgetName' type='String'>The jQuery UI widget's
            /// name.</param>

            this.widgetName = widgetName;
            this.widgetEventPrefix = widgetName;
            this.options = [];
            this.events = [];
            this.hasRefresh = false;
        };

        /*jslint unparam:true*/
        BindingHandler.prototype.init = function (element, valueAccessor,
            allBindingsAccessor, viewModel, bindingContext) {

            var widgetName, value, unwrappedOptions, unwrappedEvents;

            widgetName = this.widgetName;
            value = valueAccessor();
            unwrappedOptions = filterAndUnwrapProperties(value, this.options);
            unwrappedEvents = filterAndUnwrapProperties(value, this.events);

            // allow inner elements' bindings to finish before initializing the widget
            ko.applyBindingsToDescendants(bindingContext, element);

            // store the options' values so they can be checked for changes in the
            // update() method
            ko.utils.domData.set(element, domDataKey, unwrappedOptions);

            // bind the widget events to the viewmodel
            $.each(unwrappedEvents, function (key, value) {
                unwrappedEvents[key] = value.bind(viewModel);
            });

            // initialize the widget
            $(element)[widgetName](ko.utils.extend(unwrappedOptions, unwrappedEvents));

            if (this.hasRefresh) {
                subscribeToRefreshOn(widgetName, element, value);
            }

            // store the element in the widget observable
            if (ko.isWriteableObservable(value.widget)) {
                value.widget($(element));
            }

            // handle disposal
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element)[widgetName]('destroy');
            });

            // the inner elements have already been taken care of
            return { controlsDescendantBindings: true };
        };
        /*jslint unparam:false*/

        BindingHandler.prototype.update = function (element, valueAccessor) {

            var widgetName, value, oldOptions, newOptions;

            widgetName = this.widgetName;
            value = valueAccessor();
            oldOptions = ko.utils.domData.get(element, domDataKey);
            newOptions = filterAndUnwrapProperties(value, this.options);

            // set only the changed options
            $.each(newOptions, function (prop, val) {
                if (val !== oldOptions[prop]) {
                    $(element)[widgetName]('option', prop, newOptions[prop]);
                }
            });

            // store the options' values so they can be checked for changes in the next
            // update() method
            ko.utils.domData.set(element, domDataKey, newOptions);
        };

        BindingHandler.prototype.on = function (element, type, callback) {
            /// <summary>Attaches callback to a widget event.</summary>
            /// <param name='element' type='DOMElement'></param>
            /// <param name='type' type='String'></param>
            /// <param name='callback' type='Function'></param>

            var eventName;

            // the same algorithm as in widget._trigger()
            if (type === this.widgetEventPrefix) {
                eventName = type;
            } else {
                eventName = this.widgetEventPrefix + type;
            }
            eventName = [eventName.toLowerCase(), '.', this.widgetName].join('');

            $(element).on(eventName, callback);

            // handle disposal
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element).off(eventName);
            });
        };

        return BindingHandler;
    }
);

/*!
 * jQuery UI Core 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( 'Scripts/jqueryUI/core',[ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "1.11.0",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	scrollParent: function() {
		var position = this.css( "position" ),
			excludeStaticParent = position === "absolute",
			scrollParent = this.parents().filter( function() {
				var parent = $( this );
				if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
					return false;
				}
				return (/(auto|scroll)/).test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
			}).eq( 0 );

		return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
	},

	uniqueId: (function() {
		var uuid = 0;

		return function() {
			return this.each(function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			});
		};
	})(),

	removeUniqueId: function() {
		return this.each(function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}

// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	disableSelection: (function() {
		var eventType = "onselectstart" in document.createElement( "div" ) ?
			"selectstart" :
			"mousedown";

		return function() {
			return this.bind( eventType + ".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
		};
	})(),

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	}
});

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
$.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};

}));

/*global define*/
define(

    'Scripts/KnockoutJqueryUI/utils',[
        'jquery',
        'knockout',
        '../jqueryUI/core'
    ],

    function ($, ko) {

        

        var match, uiVersion, createObject, register;

        /*jslint regexp:true*/
        match = ($.ui.version || '').match(/^(\d)\.(\d+)/);
        /*jslint regexp:false*/

        if (!match) {
            uiVersion = null;
        } else {
            uiVersion = {
                major: parseInt(match[1], 10),
                minor: parseInt(match[2], 10)
            };
        }

        createObject = Object.create || function (prototype) {
            /// <summary>Simple (incomplete) shim for Object.create().</summary>
            /// <param name='prototype' type='Object' mayBeNull='true'></param>
            /// <returns type='Object'></returns>

            function Type() { }
            Type.prototype = prototype;
            return new Type();
        };

        register = function (Constructor) {
            /// <summary>Registers a binding.</summary>
            /// <param name='Constructor' type='BindingHandler'>The binding handler's
            /// constructor function.</param>

            var handler = new Constructor();

            ko.bindingHandlers[handler.widgetName] = {
                init: handler.init.bind(handler),
                update: handler.update.bind(handler)
            };
        };

        return {
            uiVersion: uiVersion,
            createObject: createObject,
            register: register
        };
    }
);

/*!
 * jQuery UI Datepicker 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define('Scripts/jqueryUI/datepicker',[
			"jquery",
			"./core"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.ui, { datepicker: { version: "1.11.0" } });

var datepicker_instActive;

function datepicker_getZindex( elem ) {
	var position, value;
	while ( elem.length && elem[ 0 ] !== document ) {
		// Ignore z-index if position is set to a value where z-index is ignored by the browser
		// This makes behavior of this function consistent across browsers
		// WebKit always returns auto if the element is positioned
		position = elem.css( "position" );
		if ( position === "absolute" || position === "relative" || position === "fixed" ) {
			// IE returns 0 when zIndex is not specified
			// other browsers return a string
			// we ignore the case of nested elements with an explicit value of 0
			// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
			value = parseInt( elem.css( "zIndex" ), 10 );
			if ( !isNaN( value ) && value !== 0 ) {
				return value;
			}
		}
		elem = elem.parent();
	}

	return 0;
}
/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
	this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
	this._appendClass = "ui-datepicker-append"; // The name of the append marker class
	this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
	this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
	this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
	this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
	this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
	this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[""] = { // Default regional settings
		closeText: "Done", // Display text for close link
		prevText: "Prev", // Display text for previous month link
		nextText: "Next", // Display text for next month link
		currentText: "Today", // Display text for current month link
		monthNames: ["January","February","March","April","May","June",
			"July","August","September","October","November","December"], // Names of months for drop-down and formatting
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
		dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
		dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], // Column headings for days starting at Sunday
		weekHeader: "Wk", // Column header for week of the year
		dateFormat: "mm/dd/yy", // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: "" // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: "focus", // "focus" for popup on focus,
			// "button" for trigger button, or "both" for either
		showAnim: "fadeIn", // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: "", // Display text following the input box, e.g. showing the format
		buttonText: "...", // Text for trigger button
		buttonImage: "", // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: "c-10:c+10", // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: "+10", // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with "+" for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: "fast", // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: "", // Selector for an alternate field to store selected dates into
		altFormat: "", // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false, // True to size the input for the date format, false to leave as is
		disabled: false // The initial disabled state
	};
	$.extend(this._defaults, this.regional[""]);
	this.regional.en = $.extend( true, {}, this.regional[ "" ]);
	this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
	this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: "hasDatepicker",

	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
	setDefaults: function(settings) {
		datepicker_extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
	_attachDatepicker: function(target, settings) {
		var nodeName, inline, inst;
		nodeName = target.nodeName.toLowerCase();
		inline = (nodeName === "div" || nodeName === "span");
		if (!target.id) {
			this.uuid += 1;
			target.id = "dp" + this.uuid;
		}
		inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {});
		if (nodeName === "input") {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName)) {
			return;
		}
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp);
		this._autoSize(inst);
		$.data(target, "datepicker", inst);
		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var showOn, buttonText, buttonImage,
			appendText = this._get(inst, "appendText"),
			isRTL = this._get(inst, "isRTL");

		if (inst.append) {
			inst.append.remove();
		}
		if (appendText) {
			inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
			input[isRTL ? "before" : "after"](inst.append);
		}

		input.unbind("focus", this._showDatepicker);

		if (inst.trigger) {
			inst.trigger.remove();
		}

		showOn = this._get(inst, "showOn");
		if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		}
		if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
			buttonText = this._get(inst, "buttonText");
			buttonImage = this._get(inst, "buttonImage");
			inst.trigger = $(this._get(inst, "buttonImageOnly") ?
				$("<img/>").addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$("<button type='button'></button>").addClass(this._triggerClass).
					html(!buttonImage ? buttonText : $("<img/>").attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? "before" : "after"](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
					$.datepicker._hideDatepicker();
				} else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
					$.datepicker._hideDatepicker();
					$.datepicker._showDatepicker(input[0]);
				} else {
					$.datepicker._showDatepicker(input[0]);
				}
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, "autoSize") && !inst.inline) {
			var findMax, max, maxI, i,
				date = new Date(2009, 12 - 1, 20), // Ensure double digits
				dateFormat = this._get(inst, "dateFormat");

			if (dateFormat.match(/[DM]/)) {
				findMax = function(names) {
					max = 0;
					maxI = 0;
					for (i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					"monthNames" : "monthNamesShort"))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					"dayNames" : "dayNamesShort"))) + 20 - date.getDay());
			}
			inst.input.attr("size", this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName)) {
			return;
		}
		divSpan.addClass(this.markerClassName).append(inst.dpDiv);
		$.data(target, "datepicker", inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
		inst.dpDiv.css( "display", "block" );
	},

	/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var id, browserWidth, browserHeight, scrollX, scrollY,
			inst = this._dialogInst; // internal instance

		if (!inst) {
			this.uuid += 1;
			id = "dp" + this.uuid;
			this._dialogInput = $("<input type='text' id='" + id +
				"' style='position: absolute; top: -100px; width: 0px;'/>");
			this._dialogInput.keydown(this._doKeyDown);
			$("body").append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], "datepicker", inst);
		}
		datepicker_extendRemove(inst.settings, settings || {});
		date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			browserWidth = document.documentElement.clientWidth;
			browserHeight = document.documentElement.clientHeight;
			scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI) {
			$.blockUI(this.dpDiv);
		}
		$.data(this._dialogInput[0], "datepicker", inst);
		return this;
	},

	/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
	_destroyDatepicker: function(target) {
		var nodeName,
			$target = $(target),
			inst = $.data(target, "datepicker");

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		$.removeData(target, "datepicker");
		if (nodeName === "input") {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind("focus", this._showDatepicker).
				unbind("keydown", this._doKeyDown).
				unbind("keypress", this._doKeyPress).
				unbind("keyup", this._doKeyUp);
		} else if (nodeName === "div" || nodeName === "span") {
			$target.removeClass(this.markerClassName).empty();
		}
	},

	/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_enableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, "datepicker");

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = false;
			inst.trigger.filter("button").
				each(function() { this.disabled = false; }).end().
				filter("img").css({opacity: "1.0", cursor: ""});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().removeClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", false);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_disableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, "datepicker");

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = true;
			inst.trigger.filter("button").
				each(function() { this.disabled = true; }).end().
				filter("img").css({opacity: "0.5", cursor: "default"});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().addClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", true);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] === target) {
				return true;
			}
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
	_getInst: function(target) {
		try {
			return $.data(target, "datepicker");
		}
		catch (err) {
			throw "Missing instance data for this datepicker";
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
	_optionDatepicker: function(target, name, value) {
		var settings, date, minDate, maxDate,
			inst = this._getInst(target);

		if (arguments.length === 2 && typeof name === "string") {
			return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name === "all" ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}

		settings = name || {};
		if (typeof name === "string") {
			settings = {};
			settings[name] = value;
		}

		if (inst) {
			if (this._curInst === inst) {
				this._hideDatepicker();
			}

			date = this._getDateDatepicker(target, true);
			minDate = this._getMinMaxDate(inst, "min");
			maxDate = this._getMinMaxDate(inst, "max");
			datepicker_extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
				inst.settings.minDate = this._formatDate(inst, minDate);
			}
			if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			}
			if ( "disabled" in settings ) {
				if ( settings.disabled ) {
					this._disableDatepicker(target);
				} else {
					this._enableDatepicker(target);
				}
			}
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDate(inst, date);
			this._updateAlternate(inst);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline) {
			this._setDateFromField(inst, noDefault);
		}
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var onSelect, dateStr, sel,
			inst = $.datepicker._getInst(event.target),
			handled = true,
			isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing) {
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
									$.datepicker._currentClass + ")", inst.dpDiv);
						if (sel[0]) {
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						}

						onSelect = $.datepicker._get(inst, "onSelect");
						if (onSelect) {
							dateStr = $.datepicker._formatDate(inst);

							// trigger custom callback
							onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
						} else {
							$.datepicker._hideDatepicker();
						}

						return false; // don't submit the form
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, "stepBigMonths") :
							-$.datepicker._get(inst, "stepMonths")), "M");
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, "stepBigMonths") :
							+$.datepicker._get(inst, "stepMonths")), "M");
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) {
							$.datepicker._clearDate(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) {
							$.datepicker._gotoToday(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								-$.datepicker._get(inst, "stepBigMonths") :
								-$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, -7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								+$.datepicker._get(inst, "stepBigMonths") :
								+$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, +7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		} else if (event.keyCode === 36 && event.ctrlKey) { // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		} else {
			handled = false;
		}

		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var chars, chr,
			inst = $.datepicker._getInst(event.target);

		if ($.datepicker._get(inst, "constrainInput")) {
			chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
			chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var date,
			inst = $.datepicker._getInst(event.target);

		if (inst.input.val() !== inst.lastVal) {
			try {
				date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));

				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (err) {
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
			input = $("input", input.parentNode)[0];
		}

		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
			return;
		}

		var inst, beforeShow, beforeShowSettings, isFixed,
			offset, showAnim, duration;

		inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
			if ( inst && $.datepicker._datepickerShowing ) {
				$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
			}
		}

		beforeShow = $.datepicker._get(inst, "beforeShow");
		beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
		if(beforeShowSettings === false){
			return;
		}
		datepicker_extendRemove(inst.settings, beforeShowSettings);

		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);

		if ($.datepicker._inDialog) { // hide cursor
			input.value = "";
		}
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}

		isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css("position") === "fixed";
			return !isFixed;
		});

		offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			"static" : (isFixed ? "fixed" : "absolute")), display: "none",
			left: offset.left + "px", top: offset.top + "px"});

		if (!inst.inline) {
			showAnim = $.datepicker._get(inst, "showAnim");
			duration = $.datepicker._get(inst, "duration");
			inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
			$.datepicker._datepickerShowing = true;

			if ( $.effects && $.effects.effect[ showAnim ] ) {
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
			} else {
				inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
			}

			if ( $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.focus();
			}

			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		datepicker_instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append(this._generateHTML(inst));
		this._attachHandlers(inst);
		inst.dpDiv.find("." + this._dayOverClass + " a");

		var origyearshtml,
			numMonths = this._getNumberOfMonths(inst),
			cols = numMonths[1],
			width = 17;

		inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
		if (cols > 1) {
			inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
		}
		inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
			"Class"]("ui-datepicker-multi");
		inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
			"Class"]("ui-datepicker-rtl");

		if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
			inst.input.focus();
		}

		// deffered render of the years select (to avoid flashes on Firefox)
		if( inst.yearshtml ){
			origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml && inst.yearshtml ){
					inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	// #6694 - don't focus the input if it's already focused
	// this breaks the change event in IE
	// Support: IE and jQuery <1.9
	_shouldFocusInput: function( inst ) {
		return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth(),
			dpHeight = inst.dpDiv.outerHeight(),
			inputWidth = inst.input ? inst.input.outerWidth() : 0,
			inputHeight = inst.input ? inst.input.outerHeight() : 0,
			viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
			viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

		offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var position,
			inst = this._getInst(obj),
			isRTL = this._get(inst, "isRTL");

		while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
			obj = obj[isRTL ? "previousSibling" : "nextSibling"];
		}

		position = $(obj).offset();
		return [position.left, position.top];
	},

	/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
	_hideDatepicker: function(input) {
		var showAnim, duration, postProcess, onClose,
			inst = this._curInst;

		if (!inst || (input && inst !== $.data(input, "datepicker"))) {
			return;
		}

		if (this._datepickerShowing) {
			showAnim = this._get(inst, "showAnim");
			duration = this._get(inst, "duration");
			postProcess = function() {
				$.datepicker._tidyDialog(inst);
			};

			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
			} else {
				inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
					(showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
			}

			if (!showAnim) {
				postProcess();
			}
			this._datepickerShowing = false;

			onClose = this._get(inst, "onClose");
			if (onClose) {
				onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
			}

			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
				if ($.blockUI) {
					$.unblockUI();
					$("body").append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst) {
			return;
		}

		var $target = $(event.target),
			inst = $.datepicker._getInst($target[0]);

		if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
				$target.parents("#" + $.datepicker._mainDivId).length === 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.closest("." + $.datepicker._triggerClass).length &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
			( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
				$.datepicker._hideDatepicker();
		}
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var date,
			target = $(id),
			inst = this._getInst(target[0]);

		if (this._get(inst, "gotoCurrent") && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		} else {
			date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		inst["selected" + (period === "M" ? "Month" : "Year")] =
		inst["draw" + (period === "M" ? "Month" : "Year")] =
			parseInt(select.options[select.selectedIndex].value,10);

		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var inst,
			target = $(id);

		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}

		inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $("a", td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		this._selectDate(target, "");
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var onSelect,
			target = $(id),
			inst = this._getInst(target[0]);

		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input) {
			inst.input.val(dateStr);
		}
		this._updateAlternate(inst);

		onSelect = this._get(inst, "onSelect");
		if (onSelect) {
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		} else if (inst.input) {
			inst.input.trigger("change"); // fire the change event
		}

		if (inst.inline){
			this._updateDatepicker(inst);
		} else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) !== "object") {
				inst.input.focus(); // restore focus
			}
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altFormat, date, dateStr,
			altField = this._get(inst, "altField");

		if (altField) { // update alternate field too
			altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
			date = this._getDate(inst);
			dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ""];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
	iso8601Week: function(date) {
		var time,
			checkDate = new Date(date.getTime());

		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

		time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
	parseDate: function (format, value, settings) {
		if (format == null || value == null) {
			throw "Invalid arguments";
		}

		value = (typeof value === "object" ? value.toString() : value + "");
		if (value === "") {
			return null;
		}

		var iFormat, dim, extra,
			iValue = 0,
			shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
			shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			year = -1,
			month = -1,
			day = -1,
			doy = -1,
			literal = false,
			date,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Extract a number from the string value
			getNumber = function(match) {
				var isDoubled = lookAhead(match),
					size = (match === "@" ? 14 : (match === "!" ? 20 :
					(match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
					digits = new RegExp("^\\d{1," + size + "}"),
					num = value.substring(iValue).match(digits);
				if (!num) {
					throw "Missing number at position " + iValue;
				}
				iValue += num[0].length;
				return parseInt(num[0], 10);
			},
			// Extract a name from the string value and convert to an index
			getName = function(match, shortNames, longNames) {
				var index = -1,
					names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
						return [ [k, v] ];
					}).sort(function (a, b) {
						return -(a[1].length - b[1].length);
					});

				$.each(names, function (i, pair) {
					var name = pair[1];
					if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
						index = pair[0];
						iValue += name.length;
						return false;
					}
				});
				if (index !== -1) {
					return index + 1;
				} else {
					throw "Unknown name at position " + iValue;
				}
			},
			// Confirm that a literal character matches the string value
			checkLiteral = function() {
				if (value.charAt(iValue) !== format.charAt(iFormat)) {
					throw "Unexpected literal at position " + iValue;
				}
				iValue++;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					checkLiteral();
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d":
						day = getNumber("d");
						break;
					case "D":
						getName("D", dayNamesShort, dayNames);
						break;
					case "o":
						doy = getNumber("o");
						break;
					case "m":
						month = getNumber("m");
						break;
					case "M":
						month = getName("M", monthNamesShort, monthNames);
						break;
					case "y":
						year = getNumber("y");
						break;
					case "@":
						date = new Date(getNumber("@"));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'")){
							checkLiteral();
						} else {
							literal = true;
						}
						break;
					default:
						checkLiteral();
				}
			}
		}

		if (iValue < value.length){
			extra = value.substr(iValue);
			if (!/^\s+/.test(extra)) {
				throw "Extra/unparsed characters found in date: " + extra;
			}
		}

		if (year === -1) {
			year = new Date().getFullYear();
		} else if (year < 100) {
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		}

		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim) {
					break;
				}
				month++;
				day -= dim;
			} while (true);
		}

		date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
			throw "Invalid date"; // E.g. 31/02/00
		}
		return date;
	},

	/* Standard date formats. */
	ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
	COOKIE: "D, dd M yy",
	ISO_8601: "yy-mm-dd",
	RFC_822: "D, d M y",
	RFC_850: "DD, dd-M-y",
	RFC_1036: "D, d M y",
	RFC_1123: "D, d M yy",
	RFC_2822: "D, d M yy",
	RSS: "D, d M y", // RFC 822
	TICKS: "!",
	TIMESTAMP: "@",
	W3C: "yy-mm-dd", // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
	formatDate: function (format, date, settings) {
		if (!date) {
			return "";
		}

		var iFormat,
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Format a number, with leading zero if necessary
			formatNumber = function(match, value, len) {
				var num = "" + value;
				if (lookAhead(match)) {
					while (num.length < len) {
						num = "0" + num;
					}
				}
				return num;
			},
			// Format a name, short or long as requested
			formatName = function(match, value, shortNames, longNames) {
				return (lookAhead(match) ? longNames[value] : shortNames[value]);
			},
			output = "",
			literal = false;

		if (date) {
			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						output += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							output += formatNumber("d", date.getDate(), 2);
							break;
						case "D":
							output += formatName("D", date.getDay(), dayNamesShort, dayNames);
							break;
						case "o":
							output += formatNumber("o",
								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case "m":
							output += formatNumber("m", date.getMonth() + 1, 2);
							break;
						case "M":
							output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
							break;
						case "y":
							output += (lookAhead("y") ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'")) {
								output += "'";
							} else {
								literal = true;
							}
							break;
						default:
							output += format.charAt(iFormat);
					}
				}
			}
		}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var iFormat,
			chars = "",
			literal = false,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					chars += format.charAt(iFormat);
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d": case "m": case "y": case "@":
						chars += "0123456789";
						break;
					case "D": case "M":
						return null; // Accept anything
					case "'":
						if (lookAhead("'")) {
							chars += "'";
						} else {
							literal = true;
						}
						break;
					default:
						chars += format.charAt(iFormat);
				}
			}
		}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() === inst.lastVal) {
			return;
		}

		var dateFormat = this._get(inst, "dateFormat"),
			dates = inst.lastVal = inst.input ? inst.input.val() : null,
			defaultDate = this._getDefaultDate(inst),
			date = defaultDate,
			settings = this._getFormatConfig(inst);

		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			dates = (noDefault ? "" : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
				var date = new Date();
				date.setDate(date.getDate() + offset);
				return date;
			},
			offsetString = function(offset) {
				try {
					return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
						offset, $.datepicker._getFormatConfig(inst));
				}
				catch (e) {
					// Ignore
				}

				var date = (offset.toLowerCase().match(/^c/) ?
					$.datepicker._getDate(inst) : null) || new Date(),
					year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate(),
					pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
					matches = pattern.exec(offset);

				while (matches) {
					switch (matches[2] || "d") {
						case "d" : case "D" :
							day += parseInt(matches[1],10); break;
						case "w" : case "W" :
							day += parseInt(matches[1],10) * 7; break;
						case "m" : case "M" :
							month += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
						case "y": case "Y" :
							year += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
					}
					matches = pattern.exec(offset);
				}
				return new Date(year, month, day);
			},
			newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
				(typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

		newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
	_daylightSavingAdjust: function(date) {
		if (!date) {
			return null;
		}
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date,
			origMonth = inst.selectedMonth,
			origYear = inst.selectedYear,
			newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
			this._notifyChange(inst);
		}
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? "" : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
	_attachHandlers: function(inst) {
		var stepMonths = this._get(inst, "stepMonths"),
			id = "#" + inst.id.replace( /\\\\/g, "\\" );
		inst.dpDiv.find("[data-handler]").map(function () {
			var handler = {
				prev: function () {
					$.datepicker._adjustDate(id, -stepMonths, "M");
				},
				next: function () {
					$.datepicker._adjustDate(id, +stepMonths, "M");
				},
				hide: function () {
					$.datepicker._hideDatepicker();
				},
				today: function () {
					$.datepicker._gotoToday(id);
				},
				selectDay: function () {
					$.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
					return false;
				},
				selectMonth: function () {
					$.datepicker._selectMonthYear(id, this, "M");
					return false;
				},
				selectYear: function () {
					$.datepicker._selectMonthYear(id, this, "Y");
					return false;
				}
			};
			$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
		});
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
			controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
			monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
			selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
			cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
			printDate, dRow, tbody, daySettings, otherMonth, unselectable,
			tempDate = new Date(),
			today = this._daylightSavingAdjust(
				new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
			isRTL = this._get(inst, "isRTL"),
			showButtonPanel = this._get(inst, "showButtonPanel"),
			hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
			navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
			numMonths = this._getNumberOfMonths(inst),
			showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
			stepMonths = this._get(inst, "stepMonths"),
			isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
			currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
				new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			drawMonth = inst.drawMonth - showCurrentAtPos,
			drawYear = inst.drawYear;

		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;

		prevText = this._get(inst, "prevText");
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));

		prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
			" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ prevText +"'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

		nextText = this._get(inst, "nextText");
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));

		next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
			" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

		currentText = this._get(inst, "currentText");
		gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

		controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
			this._get(inst, "closeText") + "</button>" : "");

		buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
			(this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
			">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

		firstDay = parseInt(this._get(inst, "firstDay"),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);

		showWeek = this._get(inst, "showWeek");
		dayNames = this._get(inst, "dayNames");
		dayNamesMin = this._get(inst, "dayNamesMin");
		monthNames = this._get(inst, "monthNames");
		monthNamesShort = this._get(inst, "monthNamesShort");
		beforeShowDay = this._get(inst, "beforeShowDay");
		showOtherMonths = this._get(inst, "showOtherMonths");
		selectOtherMonths = this._get(inst, "selectOtherMonths");
		defaultDate = this._getDefaultDate(inst);
		html = "";
		dow;
		for (row = 0; row < numMonths[0]; row++) {
			group = "";
			this.maxRows = 4;
			for (col = 0; col < numMonths[1]; col++) {
				selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				cornerClass = " ui-corner-all";
				calender = "";
				if (isMultiMonth) {
					calender += "<div class='ui-datepicker-group";
					if (numMonths[1] > 1) {
						switch (col) {
							case 0: calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
							case numMonths[1]-1: calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
							default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
						}
					}
					calender += "'>";
				}
				calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
					(/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
					(/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					"</div><table class='ui-datepicker-calendar'><thead>" +
					"<tr>";
				thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
				for (dow = 0; dow < 7; dow++) { // days of the week
					day = (dow + firstDay) % 7;
					thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
						"<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
				}
				calender += thead + "</tr></thead><tbody>";
				daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				}
				leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
				numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += "<tr>";
					tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
						this._get(inst, "calculateWeek")(printDate) + "</td>");
					for (dow = 0; dow < 7; dow++) { // create date picker days
						daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
						otherMonth = (printDate.getMonth() !== drawMonth);
						unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += "<td class='" +
							((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
							(otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
							((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							" " + this._dayOverClass : "") + // highlight selected day
							(unselectable ? " " + this._unselectableClass + " ui-state-disabled": "") +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
							(printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
							(printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
							(unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
							(otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
							(unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
							(printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
							(printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
							(otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
							"' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + "</tr>";
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
							((numMonths[0] > 0 && col === numMonths[1]-1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
				group += calender;
			}
			html += group;
		}
		html += buttonPanel;
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {

		var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
			changeMonth = this._get(inst, "changeMonth"),
			changeYear = this._get(inst, "changeYear"),
			showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
			html = "<div class='ui-datepicker-title'>",
			monthHtml = "";

		// month selection
		if (secondary || !changeMonth) {
			monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
		} else {
			inMinYear = (minDate && minDate.getFullYear() === drawYear);
			inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
			monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
			for ( month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
					monthHtml += "<option value='" + month + "'" +
						(month === drawMonth ? " selected='selected'" : "") +
						">" + monthNamesShort[month] + "</option>";
				}
			}
			monthHtml += "</select>";
		}

		if (!showMonthAfterYear) {
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
		}

		// year selection
		if ( !inst.yearshtml ) {
			inst.yearshtml = "";
			if (secondary || !changeYear) {
				html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
			} else {
				// determine range of years to display
				years = this._get(inst, "yearRange").split(":");
				thisYear = new Date().getFullYear();
				determineYear = function(value) {
					var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
						(value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
						parseInt(value, 10)));
					return (isNaN(year) ? thisYear : year);
				};
				year = determineYear(years[0]);
				endYear = Math.max(year, determineYear(years[1] || ""));
				year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
				endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
				inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
				for (; year <= endYear; year++) {
					inst.yearshtml += "<option value='" + year + "'" +
						(year === drawYear ? " selected='selected'" : "") +
						">" + year + "</option>";
				}
				inst.yearshtml += "</select>";

				html += inst.yearshtml;
				inst.yearshtml = null;
			}
		}

		html += this._get(inst, "yearSuffix");
		if (showMonthAfterYear) {
			html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
		}
		html += "</div>"; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period === "Y" ? offset : 0),
			month = inst.drawMonth + (period === "M" ? offset : 0),
			day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
			date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period === "M" || period === "Y") {
			this._notifyChange(inst);
		}
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			newDate = (minDate && date < minDate ? minDate : date);
		return (maxDate && newDate > maxDate ? maxDate : newDate);
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, "onChangeMonthYear");
		if (onChange) {
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
		}
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, "numberOfMonths");
		return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst),
			date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

		if (offset < 0) {
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		}
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var yearSplit, currentYear,
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			minYear = null,
			maxYear = null,
			years = this._get(inst, "yearRange");
			if (years){
				yearSplit = years.split(":");
				currentYear = new Date().getFullYear();
				minYear = parseInt(yearSplit[0], 10);
				maxYear = parseInt(yearSplit[1], 10);
				if ( yearSplit[0].match(/[+\-].*/) ) {
					minYear += currentYear;
				}
				if ( yearSplit[1].match(/[+\-].*/) ) {
					maxYear += currentYear;
				}
			}

		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()) &&
			(!minYear || date.getFullYear() >= minYear) &&
			(!maxYear || date.getFullYear() <= maxYear));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, "shortYearCutoff");
		shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
			monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day === "object" ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
	}
});

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function datepicker_bindHover(dpDiv) {
	var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
	return dpDiv.delegate(selector, "mouseout", function() {
			$(this).removeClass("ui-state-hover");
			if (this.className.indexOf("ui-datepicker-prev") !== -1) {
				$(this).removeClass("ui-datepicker-prev-hover");
			}
			if (this.className.indexOf("ui-datepicker-next") !== -1) {
				$(this).removeClass("ui-datepicker-next-hover");
			}
		})
		.delegate(selector, "mouseover", function(){
			if (!$.datepicker._isDisabledDatepicker( datepicker_instActive.inline ? dpDiv.parent()[0] : datepicker_instActive.input[0])) {
				$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
				$(this).addClass("ui-state-hover");
				if (this.className.indexOf("ui-datepicker-prev") !== -1) {
					$(this).addClass("ui-datepicker-prev-hover");
				}
				if (this.className.indexOf("ui-datepicker-next") !== -1) {
					$(this).addClass("ui-datepicker-next-hover");
				}
			}
		});
}

/* jQuery extend now ignores nulls! */
function datepicker_extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props) {
		if (props[name] == null) {
			target[name] = props[name];
		}
	}
	return target;
}

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){

	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}

	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick);
		$.datepicker.initialized = true;
	}

	/* Append datepicker main container to body if not exist. */
	if ($("#"+$.datepicker._mainDivId).length === 0) {
		$("body").append($.datepicker.dpDiv);
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		typeof options === "string" ?
			$.datepicker["_" + options + "Datepicker"].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.11.0";

return $.datepicker;

}));

/*global define*/
define(

    'knockoutJqueryuiDatepicker',[
        'jquery',
        'knockout',
        'Scripts/KnockoutJqueryUI/bindingHandler',
        'Scripts/KnockoutJqueryUI/utils',
        'Scripts/jqueryUI/datepicker'
    ],

    function ($, ko, BindingHandler, utils) {

        

        var Datepicker = function () {
            /// <summary>Constructor.</summary>

            BindingHandler.call(this, 'datepicker');

            this.options = ['altField', 'altFormat', 'appendText', 'autoSize',
                'buttonImage', 'buttonImageOnly', 'buttonText', 'calculateWeek',
                'changeMonth', 'changeYear', 'closeText', 'constrainInput', 'currentText',
                'dateFormat', 'dayNames', 'dayNamesMin', 'dayNamesShort', 'defaultDate',
                'duration', 'firstDay', 'gotoCurrent', 'hideIfNoPrevNext', 'isRTL',
                'maxDate', 'minDate', 'monthNames', 'monthNamesShort',
                'navigationAsDateFormat', 'nextText', 'numberOfMonths', 'prevText',
                'selectOtherMonths', 'shortYearCutoff', 'showAnim', 'showButtonPanel',
                'showCurrentAtPos', 'showMonthAfterYear', 'showOn', 'showOptions',
                'showOtherMonths', 'showWeek', 'stepMonths', 'weekHeader', 'yearRange',
                'yearSuffix', 'beforeShow', 'beforeShowDay', 'onChangeMonthYear',
                'onClose', 'onSelect'];
            this.hasRefresh = true;
        };

        Datepicker.prototype = utils.createObject(BindingHandler.prototype);
        Datepicker.prototype.constructor = Datepicker;

        Datepicker.prototype.init = function (element, valueAccessor) {
            /// <summary>Keeps the value binding property in sync with the widget's state.
            /// </summary>
            /// <param name='element' type='DOMNode'></param>
            /// <param name='valueAccessor' type='Function'></param>
            /// <returns type='Object'></returns>

            var widgetName, options, value, subscription, origOnSelect;

            BindingHandler.prototype.init.apply(this, arguments);

            widgetName = this.widgetName;
            options = valueAccessor();
            value = ko.utils.unwrapObservable(options.value);

            if (value) {
                $(element)[widgetName]('setDate', value);
            }

            if (ko.isObservable(options.value)) {
                subscription = options.value.subscribe(function (newValue) {
                    $(element)[widgetName]('setDate', newValue);
                });

                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    subscription.dispose();
                });
            }

            if (ko.isWriteableObservable(options.value)) {
                origOnSelect = $(element)[widgetName]('option', 'onSelect');
                $(element)[widgetName]('option', 'onSelect', function (selectedText) {
                    var format, date;

                    format = $(element)[widgetName]('option', 'dateFormat');
                    date = $.datepicker.parseDate(format, selectedText);
                    options.value(date);

                    if (typeof origOnSelect === 'function') {
                        origOnSelect.apply(this, Array.prototype.slice.call(arguments));
                    }
                });
            }

            // the inner elements have already been taken care of
            return { controlsDescendantBindings: true };
        };

        utils.register(Datepicker);

        return Datepicker;
    }
);

/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="backbone"/>
/// <amd-dependency path="marionette"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('CCTracking.WebClient/ModalHelper',["require", "exports", "backbone", "marionette"], function(require, exports) {
    //export function GetModalRegion() {
    //    var ModalRegion = Marionette.Region.extend({
    //        constructor: function () {
    //            Marionette.Region.prototype.constructor.apply(this, arguments);
    //            this.ensureEl();
    //            this.$el.on('hidden', { region: this }, function (event) {
    //                event.data.region.close();
    //            });
    //        },
    //        onShow: function () {
    //            this.$el.modal('show');
    //        },
    //        onClose: function () {
    //            this.$el.modal('hide');
    //        }
    //    });
    //    return ModalRegion;
    //}
    var ModalRegion = (function (_super) {
        __extends(ModalRegion, _super);
        function ModalRegion(options) {
            Marionette.Region.prototype.constructor.apply(this, arguments);

            this.ensureEl();
            this.$el.on('hidden', { region: this }, function (event) {
                event.data.region.close();
            });
            _super.call(this);
        }
        ModalRegion.prototype.onShow = function () {
            this.$el.modal('show');
        };
        ModalRegion.prototype.onClose = function () {
            this.$el.modal('hide');
        };
        return ModalRegion;
    })(Marionette.Region);
    exports.ModalRegion = ModalRegion;
});
//# sourceMappingURL=ModalHelper.js.map
;
/*! DataTables 1.10.0
 * ©2008-2014 SpryMedia Ltd - datatables.net/license
 */
(function(za,N,l){var M=function(g){function S(a){var b,c,d={};g.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),d[c]=e,"o"===b[1]&&S(a[e])});a._hungarianMap=d}function G(a,b,c){a._hungarianMap||S(a);var d;g.each(b,function(e){d=a._hungarianMap[e];if(d!==l&&(c||b[d]===l))"o"===d.charAt(0)?(b[d]||(b[d]={}),g.extend(!0,b[d],b[e]),G(a[d],b[d],c)):b[d]=b[e]})}function M(a){var b=p.defaults.oLanguage,c=a.sZeroRecords;
!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&D(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&D(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&bb(a)}function cb(a){w(a,"ordering","bSort");w(a,"orderMulti","bSortMulti");w(a,"orderClasses","bSortClasses");w(a,"orderCellsTop","bSortCellsTop");w(a,"order","aaSorting");w(a,"orderFixed","aaSortingFixed");w(a,"paging","bPaginate");
w(a,"pagingType","sPaginationType");w(a,"pageLength","iDisplayLength");w(a,"searching","bFilter")}function db(a){w(a,"orderable","bSortable");w(a,"orderData","aDataSort");w(a,"orderSequence","asSorting");w(a,"orderDataType","sortDataType")}function eb(a){var a=a.oBrowser,b=g("<div/>").css({position:"absolute",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(g("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(g('<div class="test"/>').css({width:"100%",height:10}))).appendTo("body"),
c=b.find(".test");a.bScrollOversize=100===c[0].offsetWidth;a.bScrollbarLeft=1!==c.offset().left;b.remove()}function fb(a,b,c,d,e,f){var h,i=!1;c!==l&&(h=c,i=!0);for(;d!==e;)a.hasOwnProperty(d)&&(h=i?b(h,a[d],d,a):a[d],i=!0,d+=f);return h}function Aa(a,b){var c=p.defaults.column,d=a.aoColumns.length,c=g.extend({},p.models.oColumn,c,{nTh:b?b:N.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;
c[d]=g.extend({},p.models.oSearch,c[d]);fa(a,d,null)}function fa(a,b,c){var d=a.aoColumns[b],b=a.oClasses,e=g(d.nTh);if(!d.sWidthOrig){d.sWidthOrig=e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%])/);f&&(d.sWidthOrig=f[1])}c!==l&&null!==c&&(db(c),G(p.defaults.column,c),c.mDataProp!==l&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(d._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),g.extend(d,c),D(d,c,"sWidth","sWidthOrig"),"number"===typeof c.iDataSort&&
(d.aDataSort=[c.iDataSort]),D(d,c,"aDataSort"));var c=d.mData,h=T(c),i=d.mRender?T(d.mRender):null,f=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};d._bAttrSrc=g.isPlainObject(c)&&(f(c.sort)||f(c.type)||f(c.filter));d.fnGetData=function(a,b){var c=h(a,b);return d.mRender&&b&&""!==b?i(c,b,a):c};d.fnSetData=Ba(c);a.oFeatures.bSort||(d.bSortable=!1,e.addClass(b.sSortableNone));a=-1!==g.inArray("asc",d.asSorting);e=-1!==g.inArray("desc",d.asSorting);!d.bSortable||!a&&!e?(d.sSortingClass=
b.sSortableNone,d.sSortingClassJUI=""):a&&!e?(d.sSortingClass=b.sSortableAsc,d.sSortingClassJUI=b.sSortJUIAscAllowed):!a&&e?(d.sSortingClass=b.sSortableDesc,d.sSortingClassJUI=b.sSortJUIDescAllowed):(d.sSortingClass=b.sSortable,d.sSortingClassJUI=b.sSortJUI)}function U(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ca(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&V(a);t(a,null,"column-sizing",[a])}function ga(a,b){var c=W(a,"bVisible");
return"number"===typeof c[b]?c[b]:null}function X(a,b){var c=W(a,"bVisible"),c=g.inArray(b,c);return-1!==c?c:null}function Y(a){return W(a,"bVisible").length}function W(a,b){var c=[];g.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Da(a){var b=a.aoColumns,c=a.aoData,d=p.ext.type.detect,e,f,h,i,j,g,m,o,k;e=0;for(f=b.length;e<f;e++)if(m=b[e],k=[],!m.sType&&m._sManualType)m.sType=m._sManualType;else if(!m.sType){h=0;for(i=d.length;h<i;h++){j=0;for(g=c.length;j<g&&!(k[j]===l&&(k[j]=
A(a,j,e,"type")),o=d[h](k[j],a),!o||"html"===o);j++);if(o){m.sType=o;break}}m.sType||(m.sType="string")}}function gb(a,b,c,d){var e,f,h,i,j,n,m=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var o=n.targets!==l?n.targets:n.aTargets;g.isArray(o)||(o=[o]);f=0;for(h=o.length;f<h;f++)if("number"===typeof o[f]&&0<=o[f]){for(;m.length<=o[f];)Aa(a);d(o[f],n)}else if("number"===typeof o[f]&&0>o[f])d(m.length+o[f],n);else if("string"===typeof o[f]){i=0;for(j=m.length;i<j;i++)("_all"==o[f]||g(m[i].nTh).hasClass(o[f]))&&
d(i,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function H(a,b,c,d){var e=a.aoData.length,f=g.extend(!0,{},p.models.oRow,{src:c?"dom":"data"});f._aData=b;a.aoData.push(f);for(var b=a.aoColumns,f=0,h=b.length;f<h;f++)c&&Ea(a,e,f,A(a,e,f)),b[f].sType=null;a.aiDisplayMaster.push(e);a.oFeatures.bDeferRender||Fa(a,e,c,d);return e}function ha(a,b){var c;b instanceof g||(b=g(b));return b.map(function(b,e){c=ia(a,e);return H(a,c.data,e,c.cells)})}function A(a,b,c,d){var c=a.aoColumns[c],e=a.aoData[b]._aData,
f=c.fnGetData(e,d);if(f===l)return a.iDrawError!=a.iDraw&&null===c.sDefaultContent&&(O(a,0,"Requested unknown parameter "+("function"==typeof c.mData?"{function}":"'"+c.mData+"'")+" for row "+b,4),a.iDrawError=a.iDraw),c.sDefaultContent;if((f===e||null===f)&&null!==c.sDefaultContent)f=c.sDefaultContent;else if("function"===typeof f)return f();return null===f&&"display"==d?"":f}function Ea(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d)}function Ga(a){return g.map(a.match(/(\\.|[^\.])+/g),
function(a){return a.replace("\\.",".")})}function T(a){if(g.isPlainObject(a)){var b={};g.each(a,function(a,c){c&&(b[a]=T(c))});return function(a,c,f){var h=b[c]||b._;return h!==l?h(a,c,f):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f){return a(b,c,f)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var h,i;if(""!==f){i=Ga(f);for(var j=0,g=i.length;j<g;j++){f=i[j].match(Z);h=i[j].match(P);if(f){i[j]=
i[j].replace(Z,"");""!==i[j]&&(a=a[i[j]]);h=[];i.splice(0,j+1);i=i.join(".");j=0;for(g=a.length;j<g;j++)h.push(c(a[j],b,i));a=f[0].substring(1,f[0].length-1);a=""===a?h:h.join(a);break}else if(h){i[j]=i[j].replace(P,"");a=a[i[j]]();continue}if(null===a||a[i[j]]===l)return l;a=a[i[j]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function Ba(a){if(g.isPlainObject(a))return Ba(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d){a(b,"set",
d)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=Ga(e),f;f=e[e.length-1];for(var h,i,j=0,g=e.length-1;j<g;j++){h=e[j].match(Z);i=e[j].match(P);if(h){e[j]=e[j].replace(Z,"");a[e[j]]=[];f=e.slice();f.splice(0,j+1);h=f.join(".");i=0;for(g=d.length;i<g;i++)f={},b(f,d[i],h),a[e[j]].push(f);return}i&&(e[j]=e[j].replace(P,""),a=a[e[j]](d));if(null===a[e[j]]||a[e[j]]===l)a[e[j]]={};a=a[e[j]]}if(f.match(P))a[f.replace(P,"")](d);else a[f.replace(Z,
"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ha(a){return B(a.aoData,"_aData")}function ja(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0}function ka(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===l&&a.splice(d,1)}function la(a,b,c,d){var e=a.aoData[b],f;if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=ia(a,e).data;else{var h=e.anCells;if(h){c=0;for(f=h.length;c<f;c++)h[c].innerHTML=A(a,b,c,"display")}}e._aSortData=
null;e._aFilterData=null;a=a.aoColumns;if(d!==l)a[d].sType=null;else{c=0;for(f=a.length;c<f;c++)a[c].sType=null}Ia(e)}function ia(a,b){var c=[],d=[],e=b.firstChild,f,h,i,j=0,n,m=a.aoColumns,o=function(a,b,c){"string"===typeof a&&(b=a.indexOf("@"),-1!==b&&(a=a.substring(b+1),i["@"+a]=c.getAttribute(a)))},k=function(a){h=m[j];n=g.trim(a.innerHTML);h&&h._bAttrSrc?(i={display:n},o(h.mData.sort,i,a),o(h.mData.type,i,a),o(h.mData.filter,i,a),c.push(i)):c.push(n);d.push(a);j++};if(e)for(;e;)f=e.nodeName.toUpperCase(),
("TD"==f||"TH"==f)&&k(e),e=e.nextSibling;else{d=b.anCells;e=0;for(f=d.length;e<f;e++)k(d[e])}return{data:c,cells:d}}function Fa(a,b,c,d){var e=a.aoData[b],f=e._aData,h=[],i,j,g,m,o;if(null===e.nTr){i=c||N.createElement("tr");e.nTr=i;e.anCells=h;i._DT_RowIndex=b;Ia(e);m=0;for(o=a.aoColumns.length;m<o;m++){g=a.aoColumns[m];j=c?d[m]:N.createElement(g.sCellType);h.push(j);if(!c||g.mRender||g.mData!==m)j.innerHTML=A(a,b,m,"display");g.sClass&&(j.className+=" "+g.sClass);g.bVisible&&!c?i.appendChild(j):
!g.bVisible&&c&&j.parentNode.removeChild(j);g.fnCreatedCell&&g.fnCreatedCell.call(a.oInstance,j,A(a,b,m,"display"),f,b,m)}t(a,"aoRowCreatedCallback",null,[i,f,b])}e.nTr.setAttribute("role","row")}function Ia(a){var b=a.nTr,c=a._aData;if(b){c.DT_RowId&&(b.id=c.DT_RowId);if(c.DT_RowClass){var d=c.DT_RowClass.split(" ");a.__rowc=a.__rowc?Ja(a.__rowc.concat(d)):d;g(b).removeClass(a.__rowc.join(" ")).addClass(c.DT_RowClass)}c.DT_RowData&&g(b).data(c.DT_RowData)}}function hb(a){var b,c,d,e,f,h=a.nTHead,
i=a.nTFoot,j=0===g("th, td",h).length,n=a.oClasses,m=a.aoColumns;j&&(e=g("<tr/>").appendTo(h));b=0;for(c=m.length;b<c;b++)f=m[b],d=g(f.nTh).addClass(f.sClass),j&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Ka(a,f.nTh,b))),f.sTitle!=d.html()&&d.html(f.sTitle),La(a,"header")(a,d,f,n);j&&$(a.aoHeader,h);g(h).find(">tr").attr("role","row");g(h).find(">tr>th, >tr>td").addClass(n.sHeaderTH);g(i).find(">tr>th, >tr>td").addClass(n.sFooterTH);
if(null!==i){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=m[b],f.nTf=a[b].cell,f.sClass&&g(f.nTf).addClass(f.sClass)}}function I(a,b,c){var d,e,f,h=[],i=[],j=a.aoColumns.length,n;if(b){c===l&&(c=!1);d=0;for(e=b.length;d<e;d++){h[d]=b[d].slice();h[d].nTr=b[d].nTr;for(f=j-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&h[d].splice(f,1);i.push([])}d=0;for(e=h.length;d<e;d++){if(a=h[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=h[d].length;f<b;f++)if(n=j=1,i[d][f]===l){a.appendChild(h[d][f].cell);for(i[d][f]=
1;h[d+j]!==l&&h[d][f].cell==h[d+j][f].cell;)i[d+j][f]=1,j++;for(;h[d][f+n]!==l&&h[d][f].cell==h[d][f+n].cell;){for(c=0;c<j;c++)i[d+c][f+n]=1;n++}g(h[d][f].cell).attr("rowspan",j).attr("colspan",n)}}}}function J(a){var b=t(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==g.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,h=a.iInitDisplayStart,i="ssp"==z(a),j=a.aiDisplay;a.bDrawing=!0;h!==l&&-1!==h&&(a._iDisplayStart=i?h:h>=a.fnRecordsDisplay()?0:h,a.iInitDisplayStart=
-1);var h=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(i){if(!a.bDestroying&&!ib(a))return}else a.iDraw++;if(0!==j.length){f=i?a.aoData.length:n;for(i=i?0:h;i<f;i++){var m=j[i],o=a.aoData[m];null===o.nTr&&Fa(a,m);m=o.nTr;if(0!==e){var k=d[c%e];o._sRowStripe!=k&&(g(m).removeClass(o._sRowStripe).addClass(k),o._sRowStripe=k)}t(a,"aoRowCallback",null,[m,o._aData,c,i]);b.push(m);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==z(a)?c=f.sLoadingRecords:
f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=g("<tr/>",{"class":e?d[0]:""}).append(g("<td />",{valign:"top",colSpan:Y(a),"class":a.oClasses.sRowEmpty}).html(c))[0];t(a,"aoHeaderCallback","header",[g(a.nTHead).children("tr")[0],Ha(a),h,n,j]);t(a,"aoFooterCallback","footer",[g(a.nTFoot).children("tr")[0],Ha(a),h,n,j]);d=g(a.nTBody);d.children().detach();d.append(g(b));t(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function K(a,b){var c=a.oFeatures,d=c.bFilter;
c.bSort&&jb(a);d?aa(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);J(a)}function kb(a){var b=a.oClasses,c=g(a.nTable),c=g("<div/>").insertBefore(c),d=a.oFeatures,e=g("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),h,i,j,n,m,o,k=0;k<f.length;k++){h=null;i=f[k];if("<"==i){j=g("<div/>")[0];n=f[k+1];if("'"==n||'"'==n){m=
"";for(o=2;f[k+o]!=n;)m+=f[k+o],o++;"H"==m?m=b.sJUIHeader:"F"==m&&(m=b.sJUIFooter);-1!=m.indexOf(".")?(n=m.split("."),j.id=n[0].substr(1,n[0].length-1),j.className=n[1]):"#"==m.charAt(0)?j.id=m.substr(1,m.length-1):j.className=m;k+=o}e.append(j);e=g(j)}else if(">"==i)e=e.parent();else if("l"==i&&d.bPaginate&&d.bLengthChange)h=lb(a);else if("f"==i&&d.bFilter)h=mb(a);else if("r"==i&&d.bProcessing)h=nb(a);else if("t"==i)h=ob(a);else if("i"==i&&d.bInfo)h=pb(a);else if("p"==i&&d.bPaginate)h=qb(a);else if(0!==
p.ext.feature.length){j=p.ext.feature;o=0;for(n=j.length;o<n;o++)if(i==j[o].cFeature){h=j[o].fnInit(a);break}}h&&(j=a.aanFeatures,j[i]||(j[i]=[]),j[i].push(h),e.append(h))}c.replaceWith(e)}function $(a,b){var c=g(b).children("tr"),d,e,f,h,i,j,n,m,o,k;a.splice(0,a.length);f=0;for(j=c.length;f<j;f++)a.push([]);f=0;for(j=c.length;f<j;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){m=1*e.getAttribute("colspan");o=1*e.getAttribute("rowspan");m=!m||
0===m||1===m?1:m;o=!o||0===o||1===o?1:o;h=0;for(i=a[f];i[h];)h++;n=h;k=1===m?!0:!1;for(i=0;i<m;i++)for(h=0;h<o;h++)a[f+h][n+i]={cell:e,unique:k},a[f+h].nTr=d}e=e.nextSibling}}}function ma(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],$(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,h=c[b].length;f<h;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function na(a,b,c){t(a,"aoServerParams","serverParams",[b]);if(b&&g.isArray(b)){var d={},e=/(.*?)\[\]$/;g.each(b,function(a,b){var c=
b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,h=a.ajax,i=a.oInstance;if(g.isPlainObject(h)&&h.data){f=h.data;var j=g.isFunction(f)?f(b):f,b=g.isFunction(f)&&j?j:g.extend(!0,b,j);delete h.data}j={data:b,success:function(b){var d=b.error||b.sError;d&&a.oApi._fnLog(a,0,d);a.json=b;t(a,null,"xhr",[a,b]);c(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=a.oApi._fnLog;"parsererror"==c?d(a,0,"Invalid JSON response",1):4===b.readyState&&
d(a,0,"Ajax error",7);C(a,!1)}};a.oAjaxData=b;t(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(i,a.sAjaxSource,g.map(b,function(a,b){return{name:b,value:a}}),c,a):a.sAjaxSource||"string"===typeof h?a.jqXHR=g.ajax(g.extend(j,{url:h||a.sAjaxSource})):g.isFunction(h)?a.jqXHR=h.call(i,b,c,a):(a.jqXHR=g.ajax(g.extend(j,h)),h.data=f)}function ib(a){if(a.bAjaxDataGet){a.iDraw++;C(a,!0);var b=rb(a);na(a,b,function(b){sb(a,b)},a);return!1}return!0}function rb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,
e=a.oPreviousSearch,f=a.aoPreSearchCols,h,i=[],j,n,m,o=Q(a);h=a._iDisplayStart;j=!1!==d.bPaginate?a._iDisplayLength:-1;var k=function(a,b){i.push({name:a,value:b})};k("sEcho",a.iDraw);k("iColumns",c);k("sColumns",B(b,"sName").join(","));k("iDisplayStart",h);k("iDisplayLength",j);var l={draw:a.iDraw,columns:[],order:[],start:h,length:j,search:{value:e.sSearch,regex:e.bRegex}};for(h=0;h<c;h++)n=b[h],m=f[h],j="function"==typeof n.mData?"function":n.mData,l.columns.push({data:j,name:n.sName,searchable:n.bSearchable,
orderable:n.bSortable,search:{value:m.sSearch,regex:m.bRegex}}),k("mDataProp_"+h,j),d.bFilter&&(k("sSearch_"+h,m.sSearch),k("bRegex_"+h,m.bRegex),k("bSearchable_"+h,n.bSearchable)),d.bSort&&k("bSortable_"+h,n.bSortable);d.bFilter&&(k("sSearch",e.sSearch),k("bRegex",e.bRegex));d.bSort&&(g.each(o,function(a,b){l.order.push({column:b.col,dir:b.dir});k("iSortCol_"+a,b.col);k("sSortDir_"+a,b.dir)}),k("iSortingCols",o.length));b=p.ext.legacy.ajax;return null===b?a.sAjaxSource?i:l:b?i:l}function sb(a,b){var c=
b.sEcho!==l?b.sEcho:b.draw,d=b.iTotalRecords!==l?b.iTotalRecords:b.recordsTotal,e=b.iTotalDisplayRecords!==l?b.iTotalDisplayRecords:b.recordsFiltered;if(c){if(1*c<a.iDraw)return;a.iDraw=1*c}ja(a);a._iRecordsTotal=parseInt(d,10);a._iRecordsDisplay=parseInt(e,10);c=oa(a,b);d=0;for(e=c.length;d<e;d++)H(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;J(a);a._bInitComplete||pa(a,b);a.bAjaxDataGet=!0;C(a,!1)}function oa(a,b){var c=g.isPlainObject(a.ajax)&&a.ajax.dataSrc!==l?a.ajax.dataSrc:
a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?T(c)(b):b}function mb(a){var b=a.oClasses,c=a.sTableId,d=a.oPreviousSearch,e=a.aanFeatures,f='<input type="search" class="'+b.sFilterInput+'"/>',h=a.oLanguage.sSearch,h=h.match(/_INPUT_/)?h.replace("_INPUT_",f):h+f,b=g("<div/>",{id:!e.f?c+"_filter":null,"class":b.sFilter}).append(g("<label/>").append(h)),e=function(){var b=!this.value?"":this.value;b!=d.sSearch&&(aa(a,{sSearch:b,bRegex:d.bRegex,bSmart:d.bSmart,bCaseInsensitive:d.bCaseInsensitive}),
a._iDisplayStart=0,J(a))},i=g("input",b).val(d.sSearch.replace('"',"&quot;")).bind("keyup.DT search.DT input.DT paste.DT cut.DT","ssp"===z(a)?Ma(e,400):e).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);g(a.nTable).on("filter.DT",function(){try{i[0]!==N.activeElement&&i.val(d.sSearch)}catch(a){}});return b[0]}function aa(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};
Da(a);if("ssp"!=z(a)){tb(a,b.sSearch,c,b.bEscapeRegex!==l?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)ub(a,e[b].sSearch,b,e[b].bEscapeRegex!==l?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);vb(a)}else f(b);a.bFiltered=!0;t(a,null,"search",[a])}function vb(a){for(var b=p.ext.search,c=a.aiDisplay,d,e,f=0,h=b.length;f<h;f++)for(var i=c.length-1;0<=i;i--)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData)||c.splice(i,1)}function ub(a,b,c,d,
e,f){if(""!==b)for(var h=a.aiDisplay,d=Na(b,d,e,f),e=h.length-1;0<=e;e--)b=a.aoData[h[e]]._aFilterData[c],d.test(b)||h.splice(e,1)}function tb(a,b,c,d,e,f){var d=Na(b,d,e,f),e=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,h;0!==p.ext.search.length&&(c=!0);h=wb(a);if(0>=b.length)a.aiDisplay=f.slice();else{if(h||c||e.length>b.length||0!==b.indexOf(e)||a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=c;c--)d.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Na(a,b,c,d){a=b?a:
Oa(a);c&&(a="^(?=.*?"+g.map(a.match(/"[^"]+"|[^ ]+/g)||"",function(a){return'"'===a.charAt(0)?a.match(/^"(.*)"$/)[1]:a}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Oa(a){return a.replace(Sb,"\\$1")}function wb(a){var b=a.aoColumns,c,d,e,f,h,i,j,g,m=p.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(g=a.aoData[d],!g._aFilterData){i=[];e=0;for(h=b.length;e<h;e++)c=b[e],c.bSearchable?(j=A(a,d,e,"filter"),j=m[c.sType]?m[c.sType](j):null!==j?j:""):j="",j.indexOf&&-1!==j.indexOf("&")&&
(qa.innerHTML=j,j=Tb?qa.textContent:qa.innerText),j.replace&&(j=j.replace(/[\r\n]/g,"")),i.push(j);g._aFilterData=i;g._sFilterRow=i.join("  ");c=!0}return c}function pb(a){var b=a.sTableId,c=a.aanFeatures.i,d=g("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:xb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),g(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function xb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,
d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),h=a.fnRecordsDisplay(),i=h?c.sInfo:c.sInfoEmpty;h!==f&&(i+=" "+c.sInfoFiltered);i+=c.sInfoPostFix;i=yb(a,i);c=c.fnInfoCallback;null!==c&&(i=c.call(a.oInstance,a,d,e,f,h,i));g(b).html(i)}}function yb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),h=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,
c.call(a,f)).replace(/_PAGE_/g,c.call(a,h?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,h?1:Math.ceil(f/e)))}function ra(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;if(a.bInitialised){kb(a);hb(a);I(a,a.aoHeader);I(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ca(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=s(f.sWidth));K(a);e=z(a);"ssp"!=e&&("ajax"==e?na(a,[],function(c){var f=oa(a,c);for(b=0;b<f.length;b++)H(a,f[b]);a.iInitDisplayStart=d;K(a);C(a,!1);pa(a,c)},a):(C(a,
!1),pa(a)))}else setTimeout(function(){ra(a)},200)}function pa(a,b){a._bInitComplete=!0;b&&U(a);t(a,"aoInitComplete","init",[a,b])}function Pa(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Qa(a);t(a,null,"length",[a,c])}function lb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=g.isArray(d[0]),f=e?d[0]:d,e=e?d[1]:d,d=g("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),h=0,i=f.length;h<i;h++)d[0][h]=new Option(e[h],f[h]);var j=g("<div><label/></div>").addClass(b.sLength);
a.aanFeatures.l||(j[0].id=c+"_length");b=a.oLanguage.sLengthMenu.split(/(_MENU_)/);j.children().append(1<b.length?[b[0],d,b[2]]:b[0]);g("select",j).val(a._iDisplayLength).bind("change.DT",function(){Pa(a,g(this).val());J(a)});g(a.nTable).bind("length.dt.DT",function(a,b,c){g("select",j).val(c)});return j[0]}function qb(a){var b=a.sPaginationType,c=p.ext.pager[b],d="function"===typeof c,e=function(a){J(a)},b=g("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=
a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,j=a._iDisplayLength,g=a.fnRecordsDisplay(),m=-1===j,b=m?0:Math.ceil(b/j),j=m?1:Math.ceil(g/j),g=c(b,j),o,m=0;for(o=f.p.length;m<o;m++)La(a,"pageButton")(a,f.p[m],m,g,b,j)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Ra(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>
d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:O(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(t(a,null,"page",[a]),c&&J(a));return b}function nb(a){return g("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&g(a.aanFeatures.r).css("display",b?"block":"none");t(a,null,"processing",[a,b])}function ob(a){var b=
g(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,h=b.children("caption"),i=h.length?h[0]._captionSide:null,j=g(b[0].cloneNode(!1)),n=g(b[0].cloneNode(!1)),m=b.children("tfoot");c.sX&&"100%"===b.attr("width")&&b.removeAttr("width");m.length||(m=null);c=g("<div/>",{"class":f.sScrollWrapper}).append(g("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:s(d):"100%"}).append(g("<div/>",
{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(j.removeAttr("id").css("margin-left",0).append(b.children("thead")))).append("top"===i?h:null)).append(g("<div/>",{"class":f.sScrollBody}).css({overflow:"auto",height:!e?null:s(e),width:!d?null:s(d)}).append(b));m&&c.append(g("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:s(d):"100%"}).append(g("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
0).append(b.children("tfoot")))).append("bottom"===i?h:null));var b=c.children(),o=b[0],f=b[1],k=m?b[2]:null;d&&g(f).scroll(function(){var a=this.scrollLeft;o.scrollLeft=a;m&&(k.scrollLeft=a)});a.nScrollHead=o;a.nScrollBody=f;a.nScrollFoot=k;a.aoDrawCallback.push({fn:V,sName:"scrolling"});return c[0]}function V(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,f=b.iBarWidth,h=g(a.nScrollHead),i=h[0].style,j=h.children("div"),n=j[0].style,m=j.children("table"),j=a.nScrollBody,o=g(j),k=j.style,l=g(a.nScrollFoot).children("div"),
p=l.children("table"),r=g(a.nTHead),q=g(a.nTable),ba=q[0],L=ba.style,t=a.nTFoot?g(a.nTFoot):null,ca=a.oBrowser,v=ca.bScrollOversize,x,u,y,w,z,A=[],B=[],C=[],D,E=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};q.children("thead, tfoot").remove();z=r.clone().prependTo(q);x=r.find("tr");y=z.find("tr");z.find("th, td").removeAttr("tabindex");t&&(w=t.clone().prependTo(q),u=t.find("tr"),w=w.find("tr"));c||(k.width="100%",h[0].style.width=
"100%");g.each(ma(a,z),function(b,c){D=ga(a,b);c.style.width=a.aoColumns[D].sWidth});t&&F(function(a){a.style.width=""},w);b.bCollapse&&""!==e&&(k.height=o[0].offsetHeight+r[0].offsetHeight+"px");h=q.outerWidth();if(""===c){if(L.width="100%",v&&(q.find("tbody").height()>j.offsetHeight||"scroll"==o.css("overflow-y")))L.width=s(q.outerWidth()-f)}else""!==d?L.width=s(d):h==o.width()&&o.height()<q.height()?(L.width=s(h-f),q.outerWidth()>h-f&&(L.width=s(h))):L.width=s(h);h=q.outerWidth();F(E,y);F(function(a){C.push(a.innerHTML);
A.push(s(g(a).css("width")))},y);F(function(a,b){a.style.width=A[b]},x);g(y).height(0);t&&(F(E,w),F(function(a){B.push(s(g(a).css("width")))},w),F(function(a,b){a.style.width=B[b]},u),g(w).height(0));F(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+C[b]+"</div>";a.style.width=A[b]},y);t&&F(function(a,b){a.innerHTML="";a.style.width=B[b]},w);if(q.outerWidth()<h){u=j.scrollHeight>j.offsetHeight||"scroll"==o.css("overflow-y")?h+f:h;if(v&&(j.scrollHeight>
j.offsetHeight||"scroll"==o.css("overflow-y")))L.width=s(u-f);(""===c||""!==d)&&O(a,1,"Possible column misalignment",6)}else u="100%";k.width=s(u);i.width=s(u);t&&(a.nScrollFoot.style.width=s(u));!e&&v&&(k.height=s(ba.offsetHeight+f));e&&b.bCollapse&&(k.height=s(e),b=c&&ba.offsetWidth>j.offsetWidth?f:0,ba.offsetHeight<j.offsetHeight&&(k.height=s(ba.offsetHeight+b)));b=q.outerWidth();m[0].style.width=s(b);n.width=s(b);m=q.height()>j.clientHeight||"scroll"==o.css("overflow-y");ca="padding"+(ca.bScrollbarLeft?
"Left":"Right");n[ca]=m?f+"px":"0px";t&&(p[0].style.width=s(b),l[0].style.width=s(b),l[0].style[ca]=m?f+"px":"0px");o.scroll();if(a.bSorted||a.bFiltered)j.scrollTop=0}function F(a,b,c){for(var d=0,e=0,f=b.length,h,i;e<f;){h=b[e].firstChild;for(i=c?c[e].firstChild:null;h;)1===h.nodeType&&(c?a(h,i,d):a(h,d),d++),h=h.nextSibling,i=c?i.nextSibling:null;e++}}function Ca(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,h=d.sXInner,i=c.length,d=W(a,"bVisible"),j=g("th",a.nTHead),n=b.getAttribute("width"),
m=b.parentNode,o=!1,k,l;for(k=0;k<d.length;k++)l=c[d[k]],null!==l.sWidth&&(l.sWidth=zb(l.sWidthOrig,m),o=!0);if(!o&&!f&&!e&&i==Y(a)&&i==j.length)for(k=0;k<i;k++)c[k].sWidth=s(j.eq(k).width());else{i=g(b.cloneNode(!1)).css("visibility","hidden").removeAttr("id").append(g(a.nTHead).clone(!1)).append(g(a.nTFoot).clone(!1)).append(g("<tbody><tr/></tbody>"));i.find("tfoot th, tfoot td").css("width","");var p=i.find("tbody tr"),j=ma(a,i.find("thead")[0]);for(k=0;k<d.length;k++)l=c[d[k]],j[k].style.width=
null!==l.sWidthOrig&&""!==l.sWidthOrig?s(l.sWidthOrig):"";if(a.aoData.length)for(k=0;k<d.length;k++)o=d[k],l=c[o],g(Ab(a,o)).clone(!1).append(l.sContentPadding).appendTo(p);i.appendTo(m);f&&h?i.width(h):f?(i.css("width","auto"),i.width()<m.offsetWidth&&i.width(m.offsetWidth)):e?i.width(m.offsetWidth):n&&i.width(n);Bb(a,i[0]);if(f){for(k=h=0;k<d.length;k++)l=c[d[k]],e=g(j[k]).outerWidth(),h+=null===l.sWidthOrig?e:parseInt(l.sWidth,10)+e-g(j[k]).width();i.width(s(h));b.style.width=s(h)}for(k=0;k<d.length;k++)if(l=
c[d[k]],e=g(j[k]).width())l.sWidth=s(e);b.style.width=s(i.css("width"));i.remove()}n&&(b.style.width=s(n));if((n||f)&&!a._reszEvt)g(za).bind("resize.DT-"+a.sInstance,Ma(function(){U(a)})),a._reszEvt=!0}function Ma(a,b){var c=b||200,d,e;return function(){var b=this,h=+new Date,i=arguments;d&&h<d+c?(clearTimeout(e),e=setTimeout(function(){d=l;a.apply(b,i)},c)):d?(d=h,a.apply(b,i)):d=h}}function zb(a,b){if(!a)return 0;var c=g("<div/>").css("width",s(a)).appendTo(b||N.body),d=c[0].offsetWidth;c.remove();
return d}function Bb(a,b){var c=a.oScroll;if(c.sX||c.sY)c=!c.sX?c.iBarWidth:0,b.style.width=s(g(b).outerWidth()-c)}function Ab(a,b){var c=Cb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?g("<td/>").html(A(a,c,b,"display"))[0]:d.anCells[b]}function Cb(a,b){for(var c,d=-1,e=-1,f=0,h=a.aoData.length;f<h;f++)c=A(a,f,b,"display")+"",c=c.replace(Ub,""),c.length>d&&(d=c.length,e=f);return e}function s(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function Db(){if(!p.__scrollbarWidth){var a=
g("<p/>").css({width:"100%",height:200,padding:0})[0],b=g("<div/>").css({position:"absolute",top:0,left:0,width:200,height:150,padding:0,overflow:"hidden",visibility:"hidden"}).append(a).appendTo("body"),c=a.offsetWidth;b.css("overflow","scroll");a=a.offsetWidth;c===a&&(a=b[0].clientWidth);b.remove();p.__scrollbarWidth=c-a}return p.__scrollbarWidth}function Q(a){var b,c,d=[],e=a.aoColumns,f,h,i,j;b=a.aaSortingFixed;c=g.isPlainObject(b);var n=[];f=function(a){a.length&&!g.isArray(a[0])?n.push(a):n.push.apply(n,
a)};g.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){j=n[a][0];f=e[j].aDataSort;b=0;for(c=f.length;b<c;b++)h=f[b],i=e[h].sType||"string",d.push({src:j,col:h,dir:n[a][1],index:n[a][2],type:i,formatter:p.ext.type.order[i+"-pre"]})}return d}function jb(a){var b,c,d=[],e=p.ext.type.order,f=a.aoData,h=0,i,g=a.aiDisplayMaster,n;Da(a);n=Q(a);b=0;for(c=n.length;b<c;b++)i=n[b],i.formatter&&h++,Eb(a,i.col);if("ssp"!=z(a)&&0!==n.length){b=0;for(c=g.length;b<c;b++)d[g[b]]=
b;h===n.length?g.sort(function(a,b){var c,e,h,g,i=n.length,j=f[a]._aSortData,l=f[b]._aSortData;for(h=0;h<i;h++)if(g=n[h],c=j[g.col],e=l[g.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===g.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):g.sort(function(a,b){var c,h,g,i,j=n.length,l=f[a]._aSortData,p=f[b]._aSortData;for(g=0;g<j;g++)if(i=n[g],c=l[i.col],h=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,h),0!==c)return c;c=d[a];h=d[b];return c<h?-1:c>h?1:0})}a.bSorted=!0}function Fb(a){for(var b,c,
d=a.aoColumns,e=Q(a),a=a.oLanguage.oAria,f=0,h=d.length;f<h;f++){c=d[f];var i=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var g=c.nTh;g.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(g.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=i[e[0].index+1]||i[0]):c=i[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);g.setAttribute("aria-label",b)}}function Sa(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,h=function(a){var b=a._idx;b===l&&(b=g.inArray(a[1],
f));return b+1>=f.length?0:b+1};c&&a.oFeatures.bSortMulti?(c=g.inArray(b,B(e,"0")),-1!==c?(b=h(e[c]),e[c][1]=f[b],e[c]._idx=b):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=h(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);K(a);"function"==typeof d&&d(a)}function Ka(a,b,c,d){var e=a.aoColumns[c];Ta(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Sa(a,c,b.shiftKey,d);"ssp"!==z(a)&&C(a,!1)},0)):Sa(a,
c,b.shiftKey,d))})}function sa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=Q(a),e=a.oFeatures,f,h;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)h=b[e].src,g(B(a.aoData,"anCells",h)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)h=d[e].src,g(B(a.aoData,"anCells",h)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Eb(a,b){var c=a.aoColumns[b],d=p.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,X(a,b)));for(var f,h=p.ext.type.order[c.sType+"-pre"],g=0,j=a.aoData.length;g<
j;g++)if(c=a.aoData[g],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[g]:A(a,g,b,"sort"),c._aSortData[b]=h?h(f):f}function ta(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={iCreate:+new Date,iStart:a._iDisplayStart,iLength:a._iDisplayLength,aaSorting:g.extend(!0,[],a.aaSorting),oSearch:g.extend(!0,{},a.oPreviousSearch),aoSearchCols:g.extend(!0,[],a.aoPreSearchCols),abVisCols:B(a.aoColumns,"bVisible")};t(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.fnStateSaveCallback.call(a.oInstance,
a,b)}}function Gb(a){var b,c,d=a.aoColumns;if(a.oFeatures.bStateSave){var e=a.fnStateLoadCallback.call(a.oInstance,a);if(e&&(b=t(a,"aoStateLoadParams","stateLoadParams",[a,e]),-1===g.inArray(!1,b)&&(b=a.iStateDuration,!(0<b&&e.iCreate<+new Date-1E3*b)&&d.length===e.aoSearchCols.length))){a.oLoadedState=g.extend(!0,{},e);a._iDisplayStart=e.iStart;a.iInitDisplayStart=e.iStart;a._iDisplayLength=e.iLength;a.aaSorting=g.map(e.aaSorting,function(a){return a[0]>=d.length?[0,a[1]]:a});g.extend(a.oPreviousSearch,
e.oSearch);g.extend(!0,a.aoPreSearchCols,e.aoSearchCols);var f=e.abVisCols;b=0;for(c=f.length;b<c;b++)d[b].bVisible=f[b];t(a,"aoStateLoaded","stateLoaded",[a,e])}}}function ua(a){var b=p.settings,a=g.inArray(a,B(b,"nTable"));return-1!==a?b[a]:null}function O(a,b,c,d){c="DataTables warning: "+(null!==a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)za.console&&console.log&&console.log(c);else if(a=p.ext,"alert"==(a.sErrMode||
a.errMode))alert(c);else throw Error(c);}function D(a,b,c,d){g.isArray(c)?g.each(c,function(c,d){g.isArray(d)?D(a,b,d[0],d[1]):D(a,b,d)}):(d===l&&(d=c),b[c]!==l&&(a[d]=b[c]))}function Hb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],g.isPlainObject(d)?(g.isPlainObject(a[e])||(a[e]={}),g.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&g.isArray(d)?d.slice():d);return a}function Ta(a,b,c){g(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",b,function(a){13===a.which&&
(a.preventDefault(),c(a))}).bind("selectstart.DT",function(){return!1})}function y(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function t(a,b,c,d){var e=[];b&&(e=g.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&g(a.nTable).trigger(c+".dt",d);return e}function Qa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;c===a.fnRecordsDisplay()&&(b=c-d);if(-1===d||0>b)b=0;a._iDisplayStart=b}function La(a,b){var c=a.renderer,d=p.ext.renderer[b];return g.isPlainObject(c)&&
c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function z(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Ua(a,b){var c=[],c=Ib.numbers_length,d=Math.floor(c/2);b<=c?c=R(0,b):a<=d?(c=R(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=R(b-(c-2),b):(c=R(a-1,a+2),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function bb(a){g.each({num:function(b){return va(b,a)},"num-fmt":function(b){return va(b,a,Va)},"html-num":function(b){return va(b,
a,wa)},"html-num-fmt":function(b){return va(b,a,wa,Va)}},function(b,c){u.type.order[b+a+"-pre"]=c})}function Jb(a){return function(){var b=[ua(this[p.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return p.ext.internal[a].apply(this,b)}}var p,u,q,r,x,Wa={},Kb=/[\r\n]/g,wa=/<.*?>/g,Vb=/^[\d\+\-a-zA-Z]/,Sb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Va=/[',$\u00a3\u20ac\u00a5%\u2009\u202F]/g,da=function(a){return!a||"-"===a?!0:!1},Lb=function(a){var b=
parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Mb=function(a,b){Wa[b]||(Wa[b]=RegExp(Oa(b),"g"));return"string"===typeof a?a.replace(/\./g,"").replace(Wa[b],"."):a},Xa=function(a,b,c){var d="string"===typeof a;b&&d&&(a=Mb(a,b));c&&d&&(a=a.replace(Va,""));return!a||"-"===a||!isNaN(parseFloat(a))&&isFinite(a)},Nb=function(a,b,c){return da(a)?!0:a&&"string"!==typeof a?null:Xa(a.replace(wa,""),b,c)?!0:null},B=function(a,b,c){var d=[],e=0,f=a.length;if(c!==l)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);
else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},xa=function(a,b,c,d){var e=[],f=0,h=b.length;if(d!==l)for(;f<h;f++)e.push(a[b[f]][c][d]);else for(;f<h;f++)e.push(a[b[f]][c]);return e},R=function(a,b){var c=[],d;b===l?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Ja=function(a){var b=[],c,d,e=a.length,f,h=0;d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<h;f++)if(b[f]===c)continue a;b.push(c);h++}return b},w=function(a,b,c){a[b]!==l&&(a[c]=a[b])},Z=/\[.*?\]$/,P=/\(\)$/,qa=g("<div>")[0],Tb=qa.textContent!==
l,Ub=/<.*?>/g;p=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new q(ua(this[u.iApiIndex])):new q(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=g.isArray(a)&&(g.isArray(a[0])||g.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===l||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===l||
a?b.draw(!1):(""!==d.sX||""!==d.sY)&&V(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===l||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],g=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,g);(c===l||c)&&d.draw();return g};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(!a)};this.fnFilter=function(a,b,c,d,e,g){e=this.api(!0);null===
b||b===l?e.search(a,c,d,g):e.column(b).search(a,c,d,g);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==l){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==l||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==l?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==
c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===l||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===l||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return ua(this[u.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};
this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var g=this.api(!0);c===l||null===c?g.row(b).data(a):g.cell(b,c).data(a);(e===l||e)&&g.columns.adjust();(d===l||d)&&g.draw();return 0};this.fnVersionCheck=u.fnVersionCheck;var b=this,c=a===l,d=this.length;c&&(a={});this.oApi=this.internal=u.internal;for(var e in p.ext.internal)e&&(this[e]=Jb(e));this.each(function(){var e={},h=1<d?Hb(e,a,!0):a,i=0,j,n=this.getAttribute("id"),e=!1,m=p.defaults;
if("table"!=this.nodeName.toLowerCase())O(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{cb(m);db(m.column);G(m,m,!0);G(m.column,m.column,!0);G(m,h);var o=p.settings,i=0;for(j=o.length;i<j;i++){if(o[i].nTable==this){j=h.bRetrieve!==l?h.bRetrieve:m.bRetrieve;if(c||j)return o[i].oInstance;if(h.bDestroy!==l?h.bDestroy:m.bDestroy){o[i].oInstance.fnDestroy();break}else{O(o[i],0,"Cannot reinitialise DataTable",3);return}}if(o[i].sTableId==this.id){o.splice(i,1);break}}if(null===n||""===
n)this.id=n="DataTables_Table_"+p.ext._unique++;var k=g.extend(!0,{},p.models.oSettings,{nTable:this,oApi:b.internal,oInit:h,sDestroyWidth:g(this)[0].style.width,sInstance:n,sTableId:n});o.push(k);k.oInstance=1===b.length?b:g(this).dataTable();cb(h);h.oLanguage&&M(h.oLanguage);h.aLengthMenu&&!h.iDisplayLength&&(h.iDisplayLength=g.isArray(h.aLengthMenu[0])?h.aLengthMenu[0][0]:h.aLengthMenu[0]);h=Hb(g.extend(!0,{},m),h);D(k.oFeatures,h,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
D(k,h,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);D(k.oScroll,h,[["sScrollX","sX"],["sScrollXInner","sXInner"],
["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);D(k.oLanguage,h,"fnInfoCallback");y(k,"aoDrawCallback",h.fnDrawCallback,"user");y(k,"aoServerParams",h.fnServerParams,"user");y(k,"aoStateSaveParams",h.fnStateSaveParams,"user");y(k,"aoStateLoadParams",h.fnStateLoadParams,"user");y(k,"aoStateLoaded",h.fnStateLoaded,"user");y(k,"aoRowCallback",h.fnRowCallback,"user");y(k,"aoRowCreatedCallback",h.fnCreatedRow,"user");y(k,"aoHeaderCallback",h.fnHeaderCallback,"user");y(k,"aoFooterCallback",h.fnFooterCallback,
"user");y(k,"aoInitComplete",h.fnInitComplete,"user");y(k,"aoPreDrawCallback",h.fnPreDrawCallback,"user");n=k.oClasses;h.bJQueryUI?(g.extend(n,p.ext.oJUIClasses,h.oClasses),h.sDom===m.sDom&&"lfrtip"===m.sDom&&(k.sDom='<"H"lfr>t<"F"ip>'),k.renderer)?g.isPlainObject(k.renderer)&&!k.renderer.header&&(k.renderer.header="jqueryui"):k.renderer="jqueryui":g.extend(n,p.ext.classes,h.oClasses);g(this).addClass(n.sTable);if(""!==k.oScroll.sX||""!==k.oScroll.sY)k.oScroll.iBarWidth=Db();!0===k.oScroll.sX&&(k.oScroll.sX=
"100%");k.iInitDisplayStart===l&&(k.iInitDisplayStart=h.iDisplayStart,k._iDisplayStart=h.iDisplayStart);null!==h.iDeferLoading&&(k.bDeferLoading=!0,i=g.isArray(h.iDeferLoading),k._iRecordsDisplay=i?h.iDeferLoading[0]:h.iDeferLoading,k._iRecordsTotal=i?h.iDeferLoading[1]:h.iDeferLoading);""!==h.oLanguage.sUrl?(k.oLanguage.sUrl=h.oLanguage.sUrl,g.getJSON(k.oLanguage.sUrl,null,function(a){M(a);G(m.oLanguage,a);g.extend(true,k.oLanguage,h.oLanguage,a);ra(k)}),e=!0):g.extend(!0,k.oLanguage,h.oLanguage);
null===h.asStripeClasses&&(k.asStripeClasses=[n.sStripeOdd,n.sStripeEven]);var i=k.asStripeClasses,r=g("tbody tr:eq(0)",this);-1!==g.inArray(!0,g.map(i,function(a){return r.hasClass(a)}))&&(g("tbody tr",this).removeClass(i.join(" ")),k.asDestroyStripes=i.slice());var o=[],q,i=this.getElementsByTagName("thead");0!==i.length&&($(k.aoHeader,i[0]),o=ma(k));if(null===h.aoColumns){q=[];i=0;for(j=o.length;i<j;i++)q.push(null)}else q=h.aoColumns;i=0;for(j=q.length;i<j;i++)Aa(k,o?o[i]:null);gb(k,h.aoColumnDefs,
q,function(a,b){fa(k,a,b)});if(r.length){var s=function(a,b){return a.getAttribute("data-"+b)?b:null};g.each(ia(k,r[0]).cells,function(a,b){var c=k.aoColumns[a];if(c.mData===a){var d=s(b,"sort")||s(b,"order"),e=s(b,"filter")||s(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:l,type:d!==null?a+".@data-"+d:l,filter:e!==null?a+".@data-"+e:l};fa(k,a)}}})}var u=k.oFeatures;h.bStateSave&&(u.bStateSave=!0,Gb(k,h),y(k,"aoDrawCallback",ta,"state_save"));if(h.aaSorting===
l){o=k.aaSorting;i=0;for(j=o.length;i<j;i++)o[i][1]=k.aoColumns[i].asSorting[0]}sa(k);u.bSort&&y(k,"aoDrawCallback",function(){if(k.bSorted){var a=Q(k),b={};g.each(a,function(a,c){b[c.src]=c.dir});t(k,null,"order",[k,a,b]);Fb(k)}});y(k,"aoDrawCallback",function(){(k.bSorted||z(k)==="ssp"||u.bDeferRender)&&sa(k)},"sc");eb(k);i=g(this).children("caption").each(function(){this._captionSide=g(this).css("caption-side")});j=g(this).children("thead");0===j.length&&(j=g("<thead/>").appendTo(this));k.nTHead=
j[0];j=g(this).children("tbody");0===j.length&&(j=g("<tbody/>").appendTo(this));k.nTBody=j[0];j=g(this).children("tfoot");if(0===j.length&&0<i.length&&(""!==k.oScroll.sX||""!==k.oScroll.sY))j=g("<tfoot/>").appendTo(this);0===j.length||0===j.children().length?g(this).addClass(n.sNoFooter):0<j.length&&(k.nTFoot=j[0],$(k.aoFooter,k.nTFoot));if(h.aaData)for(i=0;i<h.aaData.length;i++)H(k,h.aaData[i]);else(k.bDeferLoading||"dom"==z(k))&&ha(k,g(k.nTBody).children("tr"));k.aiDisplay=k.aiDisplayMaster.slice();
k.bInitialised=!0;!1===e&&ra(k)}});b=null;return this};var Ob=[],v=Array.prototype,Wb=function(a){var b,c,d=p.settings,e=g.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=g.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=g(a):a instanceof g&&(c=a)}else return[];if(c)return c.map(function(){b=g.inArray(this,e);return-1!==b?d[b]:null}).toArray()};
p.Api=q=function(a,b){if(!this instanceof q)throw"DT API must be constructed as a new object";var c=[],d=function(a){(a=Wb(a))&&c.push.apply(c,a)};if(g.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=Ja(c);b&&this.push.apply(this,b.toArray?b.toArray():b);this.selector={rows:null,cols:null,opts:null};q.extend(this,this,Ob)};q.prototype={concat:v.concat,context:[],each:function(a){if(v.forEach)v.forEach.call(this,a,this);else for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],
b,this);return this},eq:function(a){var b=this.context;return b.length>a?new q(b[a],this[a]):null},filter:function(a){var b=[];if(v.filter)b=v.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new q(this.context,b)},flatten:function(){var a=[];return new q(this.context,a.concat.apply(a,this.toArray()))},join:v.join,indexOf:v.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,
b,c){var d=[],e,f,h,g,j,n=this.context,m,o,k=this.selector;"string"===typeof a&&(c=b,b=a,a=!1);f=0;for(h=n.length;f<h;f++)if("table"===b)e=c(n[f],f),e!==l&&d.push(e);else if("columns"===b||"rows"===b)e=c(n[f],this[f],f),e!==l&&d.push(e);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[f];"column-rows"===b&&(m=Ya(n[f],k.opts));g=0;for(j=o.length;g<j;g++)e=o[g],e="cell"===b?c(n[f],e.row,e.column,f,g):c(n[f],e,f,g,m),e!==l&&d.push(e)}return d.length?(a=new q(n,a?d.concat.apply([],
d):d),b=a.selector,b.rows=k.rows,b.cols=k.cols,b.opts=k.opts,a):this},lastIndexOf:v.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(v.map)b=v.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new q(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:v.pop,push:v.push,reduce:v.reduce||function(a,b){return fb(this,a,b,0,this.length,1)},reduceRight:v.reduceRight||
function(a,b){return fb(this,a,b,this.length-1,-1,-1)},reverse:v.reverse,selector:null,shift:v.shift,sort:v.sort,splice:v.splice,toArray:function(){return v.slice.call(this)},to$:function(){return g(this)},toJQuery:function(){return g(this)},unique:function(){return new q(this.context,Ja(this))},unshift:v.unshift};q.extend=function(a,b,c){if(b&&(b instanceof q||b.__dt_wrapper)){var d,e,f,h=function(b,c){return function(){var d=b.apply(a,arguments);q.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<
e;d++)f=c[d],b[f.name]="function"===typeof f.val?h(f.val,f):g.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,q.extend(a,b[f.name],f.propExt)}};q.register=r=function(a,b){if(g.isArray(a))for(var c=0,d=a.length;c<d;c++)q.register(a[c],b);else{for(var e=a.split("."),f=Ob,h,i,c=0,d=e.length;c<d;c++){h=(i=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var j;a:{j=0;for(var n=f.length;j<n;j++)if(f[j].name===h){j=f[j];break a}j=null}j||(j={name:h,val:{},methodExt:[],propExt:[]},f.push(j));c===
d-1?j.val=b:f=i?j.methodExt:j.propExt}q.ready&&p.api.build()}};q.registerPlural=x=function(a,b,c){q.register(a,c);q.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof q?a.length?g.isArray(a[0])?new q(a.context,a[0]):a[0]:l:a})};r("tables()",function(a){var b;if(a){b=q;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=g.map(c,function(a){return a.nTable}),a=g(d).filter(a).map(function(){var a=g.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=
this;return b});r("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new q(b[0]):a});x("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable})});x("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody})});x("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead})});x("tables().footer()","table().footer()",function(){return this.iterator("table",
function(a){return a.nTFoot})});r("draw()",function(a){return this.iterator("table",function(b){K(b,!1===a)})});r("page()",function(a){return a===l?this.page.info().page:this.iterator("table",function(b){Ra(b,a)})});r("page.info()",function(){if(0===this.context.length)return l;var a=this.context[0],b=a._iDisplayStart,c=a._iDisplayLength,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d}});
r("page.len()",function(a){return a===l?0!==this.context.length?this.context[0]._iDisplayLength:l:this.iterator("table",function(b){Pa(b,a)})});var Pb=function(a,b,c){"ssp"==z(a)?K(a,b):(C(a,!0),na(a,[],function(c){ja(a);for(var c=oa(a,c),d=0,h=c.length;d<h;d++)H(a,c[d]);K(a,b);C(a,!1)}));if(c){var d=new q(a);d.one("draw",function(){c(d.ajax.json())})}};r("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});r("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});
r("ajax.reload()",function(a,b){return this.iterator("table",function(c){Pb(c,!1===b,a)})});r("ajax.url()",function(a){var b=this.context;if(a===l){if(0===b.length)return l;b=b[0];return b.ajax?g.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){g.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});r("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Pb(c,!1===b,a)})});var Za=function(a,b){var c=[],d,e,f,h,i,j;if(!a||"string"===typeof a||
a.length===l)a=[a];f=0;for(h=a.length;f<h;f++){e=a[f]&&a[f].split?a[f].split(","):[a[f]];i=0;for(j=e.length;i<j;i++)(d=b("string"===typeof e[i]?g.trim(e[i]):e[i]))&&d.length&&c.push.apply(c,d)}return c},$a=function(a){a||(a={});a.filter&&!a.search&&(a.search=a.filter);return{search:a.search||"none",order:a.order||"current",page:a.page||"all"}},ab=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Ya=function(a,b){var c,
d,e,f=[],h=a.aiDisplay;c=a.aiDisplayMaster;var i=b.search;d=b.order;e=b.page;if("ssp"==z(a))return"removed"===i?[]:R(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(h[c])}else if("current"==d||"applied"==d)f="none"==i?c.slice():"applied"==i?h.slice():g.map(c,function(a){return-1===g.inArray(a,h)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==i?f.push(c):(e=g.inArray(c,h),(-1===e&&"removed"==i||1===e&&"applied"==i)&&f.push(c))}return f};
r("rows()",function(a,b){a===l?a="":g.isPlainObject(a)&&(b=a,a="");var b=$a(b),c=this.iterator("table",function(c){var e=b;return Za(a,function(a){var b=Lb(a);if(b!==null&&!e)return[b];var i=Ya(c,e);if(b!==null&&g.inArray(b,i)!==-1)return[b];if(!a)return i;for(var b=[],j=0,n=i.length;j<n;j++)b.push(c.aoData[i[j]].nTr);return a.nodeName&&g.inArray(a,b)!==-1?[a._DT_RowIndex]:g(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()})});c.selector.rows=a;c.selector.opts=b;return c});r("rows().nodes()",
function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||l})});r("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return xa(a.aoData,b,"_aData")})});x("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData})});x("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){la(b,c,a)})});x("rows().indexes()","row().index()",function(){return this.iterator("row",
function(a,b){return b})});x("rows().remove()","row().remove()",function(){var a=this;return this.iterator("row",function(b,c,d){var e=b.aoData;e.splice(c,1);for(var f=0,h=e.length;f<h;f++)null!==e[f].nTr&&(e[f].nTr._DT_RowIndex=f);g.inArray(c,b.aiDisplay);ka(b.aiDisplayMaster,c);ka(b.aiDisplay,c);ka(a[d],c,!1);Qa(b)})});r("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,h,g=[];f=0;for(h=a.length;f<h;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?g.push(ha(b,c)[0]):
g.push(H(b,c));return g}),c=this.rows(-1);c.pop();c.push.apply(c,b.toArray());return c});r("row()",function(a,b){return ab(this.rows(a,b))});r("row().data()",function(a){var b=this.context;if(a===l)return b.length&&this.length?b[0].aoData[this[0]]._aData:l;b[0].aoData[this[0]]._aData=a;la(b[0],this[0],"data");return this});r("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});r("row.add()",function(a){a instanceof g&&a.length&&(a=a[0]);var b=
this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ha(b,a)[0]:H(b,a)});return this.row(b[0])});var Qb=function(a){var b=this.context;if(b.length&&this.length){var c=b[0].aoData[this[0]];if(c._details){(c._detailsShow=a)?c._details.insertAfter(c.nTr):c._details.remove();var d=b[0],e=new q(d);e.off("draw.dt.DT_details column-visibility.dt.DT_details");0<B(d.aoData,"_details").length&&(e.on("draw.dt.DT_details",function(){e.rows({page:"current"}).eq(0).each(function(a){a=
d.aoData[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),e.on("column-visibility.dt.DT_details",function(a,b){for(var c,d=Y(b),e=0,g=b.aoData.length;e<g;e++)c=b.aoData[e],c._details&&c._details.children("td[colspan]").attr("colspan",d)}))}}return this};r("row().child()",function(a,b){var c=this.context;if(a===l)return c.length&&this.length?c[0].aoData[this[0]]._details:l;if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(a.nodeName&&"tr"===a.nodeName.toLowerCase())e.push(a);
else{var c=g("<tr><td/></tr>");g("td",c).addClass(b).html(a)[0].colSpan=Y(d);e.push(c[0])}};if(g.isArray(a)||a instanceof g)for(var h=0,i=a.length;h<i;h++)f(a[h],b);else f(a,b);c._details&&c._details.remove();c._details=g(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});r(["row().child.show()","row().child().show()"],function(){Qb.call(this,!0);return this});r(["row().child.hide()","row().child().hide()"],function(){Qb.call(this,!1);return this});r("row().child.isShown()",function(){var a=
this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var Xb=/^(.*):(name|visIdx|visible)$/;r("columns()",function(a,b){a===l?a="":g.isPlainObject(a)&&(b=a,a="");var b=$a(b),c=this.iterator("table",function(b){var c=a,f=b.aoColumns,h=B(f,"sName"),i=B(f,"nTh");return Za(c,function(a){var c=Lb(a);if(a==="")return R(f.length);if(c!==null)return[c>=0?c:f.length+c];var e=typeof a==="string"?a.match(Xb):"";if(e)switch(e[2]){case "visIdx":case "visible":a=parseInt(e[1],10);
if(a<0){c=g.map(f,function(a,b){return a.bVisible?b:null});return[c[c.length+a]]}return[ga(b,a)];case "name":return g.map(h,function(a,b){return a===e[1]?b:null})}else return g(i).filter(a).map(function(){return g.inArray(this,i)}).toArray()})});c.selector.cols=a;c.selector.opts=b;return c});x("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh})});x("columns().footer()","column().footer()",function(){return this.iterator("column",
function(a,b){return a.aoColumns[b].nTf})});x("columns().data()","column().data()",function(){return this.iterator("column-rows",function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(A(a,e[d],b,""));return c})});x("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return xa(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)})});x("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,
e){return xa(a.aoData,e,"anCells",b)})});x("columns().visible()","column().visible()",function(a){return this.iterator("column",function(b,c){var d;if(a===l)d=b.aoColumns[c].bVisible;else{var e=b.aoColumns;d=e[c];var f=b.aoData,h,i,j;if(a===l)d=d.bVisible;else{if(d.bVisible!==a){if(a){var n=g.inArray(!0,B(e,"bVisible"),c+1);h=0;for(i=f.length;h<i;h++)j=f[h].nTr,e=f[h].anCells,j&&j.insertBefore(e[c],e[n]||null)}else g(B(b.aoData,"anCells",c)).detach(),d.bVisible=!1,I(b,b.aoHeader),I(b,b.aoFooter),
ta(b);d.bVisible=a;I(b,b.aoHeader);I(b,b.aoFooter);U(b);(b.oScroll.sX||b.oScroll.sY)&&V(b);t(b,null,"column-visibility",[b,c,a]);ta(b)}d=void 0}}return d})});x("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?X(b,c):c})});r("columns.adjust()",function(){return this.iterator("table",function(a){U(a)})});r("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return ga(c,
b);if("fromData"===a||"toVisible"===a)return X(c,b)}});r("column()",function(a,b){return ab(this.columns(a,b))});r("cells()",function(a,b,c){g.isPlainObject(a)&&(a.row?(c=b,b=null):(c=a,a=null));g.isPlainObject(b)&&(c=b,b=null);if(null===b||b===l)return this.iterator("table",function(b){var d=a,e=$a(c),f=b.aoData,h=Ya(b,e),e=xa(f,h,"anCells"),i=g([].concat.apply([],e)),j,m=b.aoColumns.length,n,l,p,r;return Za(d,function(a){if(a){if(g.isPlainObject(a))return[a]}else{n=[];l=0;for(p=h.length;l<p;l++){j=
h[l];for(r=0;r<m;r++)n.push({row:j,column:r})}return n}return i.filter(a).map(function(a,b){j=b.parentNode._DT_RowIndex;return{row:j,column:g.inArray(b,f[j].anCells)}}).toArray()})});var d=this.columns(b,c),e=this.rows(a,c),f,h,i,j,n,m=this.iterator("table",function(a,b){f=[];h=0;for(i=e[b].length;h<i;h++){j=0;for(n=d[b].length;j<n;j++)f.push({row:e[b][h],column:d[b][j]})}return f});g.extend(m.selector,{cols:b,rows:a,opts:c});return m});x("cells().nodes()","cell().node()",function(){return this.iterator("cell",
function(a,b,c){return a.aoData[b].anCells[c]})});r("cells().data()",function(){return this.iterator("cell",function(a,b,c){return A(a,b,c)})});x("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]})});x("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:X(a,c)}})});r(["cells().invalidate()","cell().invalidate()"],function(a){var b=
this.selector;this.rows(b.rows,b.opts).invalidate(a);return this});r("cell()",function(a,b,c){return ab(this.cells(a,b,c))});r("cell().data()",function(a){var b=this.context,c=this[0];if(a===l)return b.length&&c.length?A(b[0],c[0].row,c[0].column):l;Ea(b[0],c[0].row,c[0].column,a);la(b[0],c[0].row,"data",c[0].column);return this});r("order()",function(a,b){var c=this.context;if(a===l)return 0!==c.length?c[0].aaSorting:l;"number"===typeof a?a=[[a,b]]:g.isArray(a[0])||(a=Array.prototype.slice.call(arguments));
return this.iterator("table",function(b){b.aaSorting=a.slice()})});r("order.listener()",function(a,b,c){return this.iterator("table",function(d){Ka(d,a,b,c)})});r(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];g.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});r("search()",function(a,b,c,d){var e=this.context;return a===l?0!==e.length?e[0].oPreviousSearch.sSearch:l:this.iterator("table",function(e){e.oFeatures.bFilter&&
aa(e,g.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});r(["columns().search()","column().search()"],function(a,b,c,d){return this.iterator("column",function(e,f){var h=e.aoPreSearchCols;if(a===l)return h[f].sSearch;e.oFeatures.bFilter&&(g.extend(h[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),aa(e,e.oPreviousSearch,1))})});p.versionCheck=p.fnVersionCheck=function(a){for(var b=
p.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};p.isDataTable=p.fnIsDataTable=function(a){var b=g(a).get(0),c=!1;g.each(p.settings,function(a,e){if(e.nTable===b||e.nScrollHead===b||e.nScrollFoot===b)c=!0});return c};p.tables=p.fnTables=function(a){return jQuery.map(p.settings,function(b){if(!a||a&&g(b.nTable).is(":visible"))return b.nTable})};p.camelToHungarian=G;r("$()",function(a,b){var c=this.rows(b).nodes(),
c=g(c);return g([].concat(c.filter(a).toArray(),c.find(a).toArray()))});g.each(["on","one","off"],function(a,b){r(b+"()",function(){var a=Array.prototype.slice.call(arguments);-1===a[0].indexOf(".dt")&&(a[0]+=".dt");var d=g(this.tables().nodes());d[b].apply(d,a);return this})});r("clear()",function(){return this.iterator("table",function(a){ja(a)})});r("settings()",function(){return new q(this.context,this.context)});r("data()",function(){return this.iterator("table",function(a){return B(a.aoData,
"_aData")}).flatten()});r("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,h=b.nTHead,i=b.nTFoot,j=g(e),f=g(f),n=g(b.nTableWrapper),m=g.map(b.aoData,function(a){return a.nTr}),l;b.bDestroying=!0;t(b,"aoDestroyCallback","destroy",[b]);a||(new q(b)).columns().visible(!0);n.unbind(".DT").find(":not(tbody *)").unbind(".DT");g(za).unbind(".DT-"+b.sInstance);e!=h.parentNode&&(j.children("thead").detach(),j.append(h));
i&&e!=i.parentNode&&(j.children("tfoot").detach(),j.append(i));j.detach();n.detach();b.aaSorting=[];b.aaSortingFixed=[];sa(b);g(m).removeClass(b.asStripeClasses.join(" "));g("th, td",h).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(g("th span."+d.sSortIcon+", td span."+d.sSortIcon,h).detach(),g("th, td",h).each(function(){var a=g("div."+d.sSortJUIWrapper,this);g(this).append(a.contents());a.detach()}));!a&&c&&c.insertBefore(e,b.nTableReinsertBefore);
f.children().detach();f.append(m);j.css("width",b.sDestroyWidth).removeClass(d.sTable);(l=b.asDestroyStripes.length)&&f.children().each(function(a){g(this).addClass(b.asDestroyStripes[a%l])});c=g.inArray(b,p.settings);-1!==c&&p.settings.splice(c,1)})});p.version="1.10.0";p.settings=[];p.models={};p.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};p.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null};p.models.oColumn=
{idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};p.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,
aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,
fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,
iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",
sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sUrl:"",sZeroRecords:"No matching records found"},oSearch:g.extend({},p.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null};S(p.defaults);p.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,
mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};S(p.defaults.column);p.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,
bScrollbarLeft:!1},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,
nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:l,oAjaxData:l,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,
oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==z(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==z(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,
nScrollFoot:null,aLastSort:[],oPlugins:{}};p.ext=u={classes:{},errMode:"alert",feature:[],search:[],internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:p.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:p.version};g.extend(u,{afnFiltering:u.search,aTypes:u.type.detect,ofnSearch:u.type.search,oSort:u.type.order,afnSortData:u.order,aoFeatures:u.feature,oApi:u.internal,oStdClasses:u.classes,oPagination:u.pager});
g.extend(p.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",
sJUIHeader:"",sJUIFooter:""});var ya="",ya="",E=ya+"ui-state-default",ea=ya+"css_right ui-icon ui-icon-",Rb=ya+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";g.extend(p.ext.oJUIClasses,p.ext.classes,{sPageButton:"fg-button ui-button "+E,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:E+" sorting_asc",sSortDesc:E+" sorting_desc",sSortable:E+" sorting",
sSortableAsc:E+" sorting_asc_disabled",sSortableDesc:E+" sorting_desc_disabled",sSortableNone:E+" sorting_disabled",sSortJUIAsc:ea+"triangle-1-n",sSortJUIDesc:ea+"triangle-1-s",sSortJUI:ea+"carat-2-n-s",sSortJUIAscAllowed:ea+"carat-1-n",sSortJUIDescAllowed:ea+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+E,sScrollFoot:"dataTables_scrollFoot "+E,sHeaderTH:E,sFooterTH:E,sJUIHeader:Rb+" ui-corner-tl ui-corner-tr",sJUIFooter:Rb+
" ui-corner-bl ui-corner-br"});var Ib=p.ext.pager;g.extend(Ib,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},simple_numbers:function(a,b){return["previous",Ua(a,b),"next"]},full_numbers:function(a,b){return["first","previous",Ua(a,b),"next","last"]},_numbers:Ua,numbers_length:7});g.extend(!0,p.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var h=a.oClasses,i=a.oLanguage.oPaginate,j,l,m=0,o=function(b,d){var k,p,r,q,s=function(b){Ra(a,b.data.action,
true)};k=0;for(p=d.length;k<p;k++){q=d[k];if(g.isArray(q)){r=g("<"+(q.DT_el||"div")+"/>").appendTo(b);o(r,q)}else{l=j="";switch(q){case "ellipsis":b.append("<span>&hellip;</span>");break;case "first":j=i.sFirst;l=q+(e>0?"":" "+h.sPageButtonDisabled);break;case "previous":j=i.sPrevious;l=q+(e>0?"":" "+h.sPageButtonDisabled);break;case "next":j=i.sNext;l=q+(e<f-1?"":" "+h.sPageButtonDisabled);break;case "last":j=i.sLast;l=q+(e<f-1?"":" "+h.sPageButtonDisabled);break;default:j=q+1;l=e===q?h.sPageButtonActive:
""}if(j){r=g("<a>",{"class":h.sPageButton+" "+l,"aria-controls":a.sTableId,"data-dt-idx":m,tabindex:a.iTabIndex,id:c===0&&typeof q==="string"?a.sTableId+"_"+q:null}).html(j).appendTo(b);Ta(r,{action:q},s);m++}}}},k=g(N.activeElement).data("dt-idx");o(g(b).empty(),d);k!==null&&g(b).find("[data-dt-idx="+k+"]").focus()}}});var va=function(a,b,c,d){if(!a||"-"===a)return-Infinity;b&&(a=Mb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};g.extend(u.type.order,{"date-pre":function(a){return Date.parse(a)||
0},"html-pre":function(a){return!a?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return"string"===typeof a?a.toLowerCase():!a||!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});bb("");g.extend(p.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return Xa(a,c)?"num"+c:null},function(a){if(a&&!Vb.test(a))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||da(a)?"date":
null},function(a,b){var c=b.oLanguage.sDecimal;return Xa(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Nb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Nb(a,c,!0)?"html-num-fmt"+c:null},function(a){return da(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);g.extend(p.ext.type.search,{html:function(a){return da(a)?"":"string"===typeof a?a.replace(Kb," ").replace(wa,""):""},string:function(a){return da(a)?"":"string"===typeof a?a.replace(Kb,
" "):a}});g.extend(!0,p.ext.renderer,{header:{_:function(a,b,c,d){g(a.nTable).on("order.dt.DT",function(a,f,g,i){a=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(i[a]=="asc"?d.sSortAsc:i[a]=="desc"?d.sSortDesc:c.sSortingClass)})},jqueryui:function(a,b,c,d){var e=c.idx;g("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(g("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);g(a.nTable).on("order.dt.DT",function(a,g,i,j){b.removeClass(d.sSortAsc+
" "+d.sSortDesc).addClass(j[e]=="asc"?d.sSortAsc:j[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(j[e]=="asc"?d.sSortJUIAsc:j[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)})}}});p.render={number:function(a,b,c,d){return{display:function(e){var e=parseFloat(e),f=parseInt(e,10),e=c?(b+(e-f).toFixed(c)).substring(2):"";return(d||"")+f.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
a)+e}}}};g.extend(p.ext.internal,{_fnExternApiFunc:Jb,_fnBuildAjax:na,_fnAjaxUpdate:ib,_fnAjaxParameters:rb,_fnAjaxUpdateDraw:sb,_fnAjaxDataSrc:oa,_fnAddColumn:Aa,_fnColumnOptions:fa,_fnAdjustColumnSizing:U,_fnVisibleToColumnIndex:ga,_fnColumnIndexToVisible:X,_fnVisbleColumns:Y,_fnGetColumns:W,_fnColumnTypes:Da,_fnApplyColumnDefs:gb,_fnHungarianMap:S,_fnCamelToHungarian:G,_fnLanguageCompat:M,_fnBrowserDetect:eb,_fnAddData:H,_fnAddTr:ha,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==l?b._DT_RowIndex:
null},_fnNodeToColumnIndex:function(a,b,c){return g.inArray(c,a.aoData[b].anCells)},_fnGetCellData:A,_fnSetCellData:Ea,_fnSplitObjNotation:Ga,_fnGetObjectDataFn:T,_fnSetObjectDataFn:Ba,_fnGetDataMaster:Ha,_fnClearTable:ja,_fnDeleteIndex:ka,_fnInvalidateRow:la,_fnGetRowElements:ia,_fnCreateTr:Fa,_fnBuildHead:hb,_fnDrawHead:I,_fnDraw:J,_fnReDraw:K,_fnAddOptionsHtml:kb,_fnDetectHeader:$,_fnGetUniqueThs:ma,_fnFeatureHtmlFilter:mb,_fnFilterComplete:aa,_fnFilterCustom:vb,_fnFilterColumn:ub,_fnFilter:tb,
_fnFilterCreateSearch:Na,_fnEscapeRegex:Oa,_fnFilterData:wb,_fnFeatureHtmlInfo:pb,_fnUpdateInfo:xb,_fnInfoMacros:yb,_fnInitialise:ra,_fnInitComplete:pa,_fnLengthChange:Pa,_fnFeatureHtmlLength:lb,_fnFeatureHtmlPaginate:qb,_fnPageChange:Ra,_fnFeatureHtmlProcessing:nb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:ob,_fnScrollDraw:V,_fnApplyToChildren:F,_fnCalculateColumnWidths:Ca,_fnThrottle:Ma,_fnConvertToWidth:zb,_fnScrollingWidthAdjust:Bb,_fnGetWidestNode:Ab,_fnGetMaxLenString:Cb,_fnStringToCss:s,_fnScrollBarWidth:Db,
_fnSortFlatten:Q,_fnSort:jb,_fnSortAria:Fb,_fnSortListener:Sa,_fnSortAttachListener:Ka,_fnSortingClasses:sa,_fnSortData:Eb,_fnSaveState:ta,_fnLoadState:Gb,_fnSettingsFromNode:ua,_fnLog:O,_fnMap:D,_fnBindAction:Ta,_fnCallbackReg:y,_fnCallbackFire:t,_fnLengthOverflow:Qa,_fnRenderer:La,_fnDataSource:z,_fnRowAttributes:Ia,_fnCalculateEnd:function(){}});g.fn.dataTable=p;g.fn.dataTableSettings=p.settings;g.fn.dataTableExt=p.ext;g.fn.DataTable=function(a){return g(this).dataTable(a).api()};g.each(p,function(a,
b){g.fn.DataTable[a]=b});return g.fn.dataTable};"function"===typeof define&&define.amd?define("datatables",["jquery"],M):"object"===typeof exports?M(require("jquery")):jQuery&&!jQuery.fn.dataTable&&M(jQuery)})(window,document);

(function(root) {
define("datatablesBootstrap", ["datatables"], function() {
  return (function() {
/* Set the defaults for DataTables initialisation */
$.extend( true, $.fn.dataTable.defaults, {
	"sDom": "<'row'<'col-xs-6'l><'col-xs-6'f>r>t<'row'<'col-xs-6'i><'col-xs-6'p>>",
	"sPaginationType": "bootstrap",
	"oLanguage": {
		"sLengthMenu": "_MENU_ records per page"
	}
} );




/* Default class modification */
$.extend( $.fn.dataTableExt.oStdClasses, {
	"sWrapper": "dataTables_wrapper form-inline",
	"sFilterInput": "form-control input-sm",
	"sLengthSelect": "form-control input-sm"
} );


/* API method to get paging information */
$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
{
	return {
		"iStart":         oSettings._iDisplayStart,
		"iEnd":           oSettings.fnDisplayEnd(),
		"iLength":        oSettings._iDisplayLength,
		"iTotal":         oSettings.fnRecordsTotal(),
		"iFilteredTotal": oSettings.fnRecordsDisplay(),
		"iPage":          oSettings._iDisplayLength === -1 ?
			0 : Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
		"iTotalPages":    oSettings._iDisplayLength === -1 ?
			0 : Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
	};
};


/* Bootstrap style pagination control */
$.extend( $.fn.dataTableExt.oPagination, {
	"bootstrap": {
		"fnInit": function( oSettings, nPaging, fnDraw ) {
			var oLang = oSettings.oLanguage.oPaginate;
			var fnClickHandler = function ( e ) {
				e.preventDefault();
				if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
					fnDraw( oSettings );
				}
			};

			$(nPaging).append(
				'<ul class="pagination">'+
					'<li class="prev disabled"><a href="#">&larr; '+oLang.sPrevious+'</a></li>'+
					'<li class="next disabled"><a href="#">'+oLang.sNext+' &rarr; </a></li>'+
				'</ul>'
			);
			var els = $('a', nPaging);
			$(els[0]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
			$(els[1]).bind( 'click.DT', { action: "next" }, fnClickHandler );
		},

		"fnUpdate": function ( oSettings, fnDraw ) {
			var iListLength = 5;
			var oPaging = oSettings.oInstance.fnPagingInfo();
			var an = oSettings.aanFeatures.p;
			var i, ien, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

			if ( oPaging.iTotalPages < iListLength) {
				iStart = 1;
				iEnd = oPaging.iTotalPages;
			}
			else if ( oPaging.iPage <= iHalf ) {
				iStart = 1;
				iEnd = iListLength;
			} else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
				iStart = oPaging.iTotalPages - iListLength + 1;
				iEnd = oPaging.iTotalPages;
			} else {
				iStart = oPaging.iPage - iHalf + 1;
				iEnd = iStart + iListLength - 1;
			}

			for ( i=0, ien=an.length ; i<ien ; i++ ) {
				// Remove the middle elements
				$('li:gt(0)', an[i]).filter(':not(:last)').remove();

				// Add the new list items and their event handlers
				for ( j=iStart ; j<=iEnd ; j++ ) {
					sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
					$('<li '+sClass+'><a href="#">'+j+'</a></li>')
						.insertBefore( $('li:last', an[i])[0] )
						.bind('click', function (e) {
							e.preventDefault();
							oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
							fnDraw( oSettings );
						} );
				}

				// Add / remove disabled classes from the static elements
				if ( oPaging.iPage === 0 ) {
					$('li:first', an[i]).addClass('disabled');
				} else {
					$('li:first', an[i]).removeClass('disabled');
				}

				if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
					$('li:last', an[i]).addClass('disabled');
				} else {
					$('li:last', an[i]).removeClass('disabled');
				}
			}
		}
	}
} );


/*
 * TableTools Bootstrap compatibility
 * Required TableTools 2.1+
 */
if ( $.fn.DataTable.TableTools ) {
	// Set the classes that TableTools uses to something suitable for Bootstrap
	$.extend( true, $.fn.DataTable.TableTools.classes, {
		"container": "DTTT btn-group",
		"buttons": {
			"normal": "btn btn-default",
			"disabled": "disabled"
		},
		"collection": {
			"container": "DTTT_dropdown dropdown-menu",
			"buttons": {
				"normal": "",
				"disabled": "disabled"
			}
		},
		"print": {
			"info": "DTTT_print_info modal"
		},
		"select": {
			"row": "active"
		}
	} );

	// Have the collection use a bootstrap compatible dropdown
	$.extend( true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
		"collection": {
			"container": "ul",
			"button": "li",
			"liner": "a"
		}
	} );
}

;

  }).apply(root, arguments);
});
}(this));

/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="datatablesBootstrap"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('CCTracking.WebClient/App',["require", "exports", "./ModalHelper", "marionette", "datatablesBootstrap"], function(require, exports, modalHelper) {
    var datatablesBootstrap = require("datatablesBootstrap");

    var Application = (function (_super) {
        __extends(Application, _super);
        function Application() {
            _super.call(this);
            if (Application._instance) {
                throw new Error("Error: Creating Application object.");
            }
            Application._instance = this;

            this.on('initialize:after', this.initializeAfter);

            this.addRegions({
                ContainerRegion: '#ContainerRegion',
                ModalRegion: '#ModalPopup',
                ModalAlertRegion: "#ModalAlertPopup"
            });

            //alert('constructor');
            var layout = Marionette.Layout.extend({
                template: "#AppLayout",
                regions: {
                    LoginRegion: '#LoginRegion',
                    HeaderRegion: '#HeaderRegion',
                    LeftRegion: '#LeftRegion',
                    AdminLeftRegion: '#AdminLeftRegion',
                    RightRegion: '#RightRegion',
                    MainRegion: '#MainRegion',
                    DetailRegion: '#DetailRegion',
                    SubRegion: '#SubRegion',
                    BusAvailabilityRegion: '#BusAvailabilityRegion'
                }
            });
            this.AppLayout = new layout();

            this.LoginRegion = this.AppLayout.LoginRegion;
            this.HeaderRegion = this.AppLayout.HeaderRegion;
            this.LeftRegion = this.AppLayout.LeftRegion;
            this.AdminLeftRegion = this.AppLayout.AdminLeftRegion;
            this.RightRegion = this.AppLayout.RightRegion;
            this.MainRegion = this.AppLayout.MainRegion;
            this.DetailRegion = this.AppLayout.DetailRegion;
            this.SubRegion = this.AppLayout.SubRegion;
            this.BusAvailabilityRegion = this.AppLayout.BusAvailabilityRegion;

            //this.applyRouting(this);
            //start history...
            if (Backbone.history) {
                Backbone.history.start();
            }
        }
        Application.prototype.initializeAfter = function () {
            //console.log('Initalize after called..');
            this.ContainerRegion.reset();

            //this.initalizeLocalStorage();
            //var loginView = new login.LoginItemView();
            var layout = this.AppLayout;

            this.ContainerRegion.show(layout);

            //var loginCtrl = new loginController.LoginCtrl();
            //loginCtrl.Load();
            this.initalizeLocalStorage();
            //this.applyRouting(this,layout);
        };

        Application.prototype.applyRouting = function (self, layout) {
            var router = Backbone.Router.extend({
                routes: {
                    'user': 'goUser',
                    'viewUser': 'goViewUser',
                    'bus': 'goBus',
                    'addBooking': 'goAddBooking',
                    'editBooking': 'goEditBooking',
                    'viewHome': 'goViewHome',
                    'viewBooking': 'goViewBooking',
                    'editPayment': 'goPayment',
                    'alkhidmatCentre': 'goStation',
                    'viewAlkhidmatCentre': 'goViewStation',
                    'editRefund': 'goCancel',
                    'busVisit': 'gobusVisit',
                    'editBusVisit': 'goEditBusVisit',
                    'viewBusVisit': 'goViewBusVisit',
                    'busMilageReport': 'goBusMilageReport',
                    'adminBus': 'goAdminBus',
                    'viewAdminBus': 'goViewAdminBus',
                    'searchBooking': 'goSearchBooking',
                    'adminSearchBooking': 'goAdminSearchBooking',
                    'driver': 'goDriver',
                    'viewDriver': 'goViewDriver',
                    'graveyard': 'goGraveyard',
                    'viewGraveyard': 'goViewGraveyard',
                    'town': 'goTown',
                    'viewTown': 'goViewTown',
                    'unionCouncil': 'goUnionCouncil',
                    'viewUnionCouncil': 'goViewUnionCouncil',
                    'landmark': 'goLandmark',
                    'viewLandmark': 'goViewLandmark',
                    'paymentType': 'goPaymentType',
                    'viewPaymentType': 'goViewPaymentType',
                    'refundType': 'goRefundType',
                    'viewRefundType': 'goViewRefundType',
                    'visitType': 'goVisitType',
                    'viewVisitType': 'goViewVisitType',
                    'causeOfDeath': 'goCauseOfDeath',
                    'viewCauseOfDeath': 'goViewCauseOfDeath',
                    'viewTest': 'goViewTest',
                    'trackingDevice': 'goTrackingDevice',
                    'viewTrackingDevice': 'goViewTrackingDevice',
                    'nearestCentreSetup': 'goNearestCentreSetup',
                    'viewNearestCentreSetup': 'goViewNearestCentreSetup',
                    'driverSummary': 'goDriverSummary',
                    'busVisitSummary': 'goBusVisitSummary',
                    'busVisitMilageSummary': 'goBusVisitMilageSummary',
                    'driverDetail': '',
                    'busVisitDetail': '',
                    'busVisitMilageDetail': '',
                    'changePassword': 'goChangePassword',
                    'editExtraCharge': 'goExtraCharge',
                    'auditBooking': 'goAuditBooking',
                    'auditBusVisit': 'goAuditBusVisit',
                    'auditPayment': 'goAuditPayment',
                    'auditRefundBooking': 'goAuditRefundBooking',
                    'busCentreReport': 'goBusCentreReport',
                    'busFuelingReport': 'goBusFuelingReport',
                    'login': 'defaultRoute',
                    'logout': 'goLogout',
                    '*other': 'defaultRoute'
                },
                goUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().Show();
                    });
                },
                goViewUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().GetAll();
                    });
                },
                goBus: function () {
                    require(['./Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                },
                goAddBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().Show();
                    });
                },
                goEditBooking: function () {
                    //require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
                },
                goViewHome: function () {
                    require(['./Home/HomeCtrl'], function (p) {
                        new p.HomeCtrl().Show();
                    });
                },
                goViewBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().GetAll(1);
                    });
                    //this.appRoute.navigate("viewBooking");
                    //routes.navigate("viewBooking");
                },
                goPayment: function () {
                    //require(['./Payment/PaymentCtrl'], (p) => { new p.PaymentCtrl().Show(); });
                },
                goStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().Show();
                    });
                },
                goViewStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().GetAll();
                    });
                },
                goCancel: function () {
                    //require(['./RefundBooking/RefundBookingCtrl'], (p) => { new p.RefundBookingCtrl().Show(); });
                },
                goViewBusVisit: function () {
                    require(['./Bus/BusVisit/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().SimpleLoad();
                    });
                },
                gobusVisit: function () {
                    require(['./Bus/BusVisit/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().Load();
                    });
                },
                goEditBusVisit: function () {
                    //require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Show(); });
                },
                goAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                },
                goViewAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().GetAll();
                    });
                },
                goSearchBooking: function () {
                    require(['./Search/SearchCtrl'], function (p) {
                        new p.SearchCtrl().Show();
                    });
                },
                goAdminSearchBooking: function () {
                    require(['./Admin/AdminSearchBooking/AdminSearchBookingCtrl'], function (p) {
                        new p.AdminSearchBookingCtrl().Show();
                    });
                },
                goDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().Show();
                    });
                },
                goViewDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().GetAll();
                    });
                },
                goGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().Show();
                    });
                },
                goViewGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().GetAll();
                    });
                },
                goTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().Show();
                    });
                },
                goViewTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().GetAll();
                    });
                },
                goUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().Show();
                    });
                },
                goViewUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().GetAll();
                    });
                },
                goLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().Show();
                    });
                },
                goViewLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().GetAll();
                    });
                },
                goPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().Show();
                    });
                },
                goViewPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().GetAll();
                    });
                },
                goRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().Show();
                    });
                },
                goViewRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().GetAll();
                    });
                },
                goVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().Show();
                    });
                },
                goViewVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().GetAll();
                    });
                },
                goCauseOfDeath: function () {
                    require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], function (p) {
                        new p.CauseOfDeathCtrl().Show();
                    });
                },
                goViewCauseOfDeath: function () {
                    require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], function (p) {
                        new p.CauseOfDeathCtrl().GetAll();
                    });
                },
                goViewTest: function () {
                    // new koBindingController.KoBindingCtrl().Show();
                },
                goTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().Show();
                    });
                },
                goViewTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().GetAll();
                    });
                },
                goNearestCentreSetup: function () {
                    require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], function (p) {
                        new p.NearestCentreSetupCtrl().Show();
                    });
                },
                goViewNearestCentreSetup: function () {
                    require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], function (p) {
                        new p.NearestCentreSetupCtrl().GetAll();
                    });
                },
                goChangePassword: function () {
                    require(['./ChangePassword/ChangePasswordCtrl'], function (p) {
                        new p.ChangePasswordCtrl().Load();
                    });
                },
                goExtraCharge: function () {
                    //require(['./ExtraCharge/ExtraChargeCtrl'], (p) => { new p.ExtraChargeCtrl().Show(); });
                },
                goDriverSummary: function () {
                    require(['./Admin/Reports/Driver/DriverSummaryCtrl'], function (p) {
                        new p.DriverSummaryCtrl().Show();
                    });
                },
                goBusVisitSummary: function () {
                    require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], function (p) {
                        new p.BusVisitSummaryCtrl().ShowVisit();
                    });
                },
                goBusVisitMilageSummary: function () {
                    require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], function (p) {
                        new p.BusVisitSummaryCtrl().ShowMilage();
                    });
                },
                goAuditBooking: function () {
                    require(['./Admin/Reports/Audit/Booking/AuditBookingCtrl'], function (p) {
                        new p.AuditBookingCtrl().Show();
                    });
                },
                goAuditBusVisit: function () {
                    require(['./Admin/Reports/Audit/BusVisit/AuditBusVisitCtrl'], function (p) {
                        new p.AuditBusVisitCtrl().Show();
                    });
                },
                goAuditPayment: function () {
                    require(['./Admin/Reports/Audit/Payment/AuditPaymentCtrl'], function (p) {
                        new p.AuditPaymentCtrl().Show();
                    });
                },
                goAuditRefundBooking: function () {
                    require(['./Admin/Reports/Audit/Refund/AuditRefundBookingCtrl'], function (p) {
                        new p.AuditRefundBookingCtrl().Show();
                    });
                },
                goBusCentreReport: function () {
                    require(['./Admin/Reports/Centre/BusCentreReport/BusCentreReportCtrl'], function (p) {
                        new p.BusCentreReportCtrl().Show();
                    });
                },
                goBusMilageReport: function () {
                    require(['./Admin/Reports/Bus/BusMilage/BusMilageCtrl'], function (p) {
                        new p.BusMilageCtrl().Show();
                    });
                },
                goBusFuelingReport: function () {
                    require(['./Admin/Reports/BusFueling/BusFuelingReportCtrl'], function (p) {
                        new p.BusFuelingReportCtrl().Show();
                    });
                },
                goLogout: function () {
                    var appInstance = Application.getInstance();
                    appInstance.vent.trigger("Event-BackToLogin", false);
                },
                defaultRoute: function () {
                    self.ContainerRegion.reset();
                    self.ContainerRegion.show(layout);
                    require(['./Login/LoginCtrl'], function (p) {
                        new p.LoginCtrl().Load();
                    });
                }
            });

            //debugger;
            this.AppRoutes = new router();
        };

        Application.prototype.applyRoutingForOperator = function (self, layout) {
            var router = Backbone.Router.extend({
                routes: {
                    'addBooking': 'goAddBooking',
                    'editBooking': 'goEditBooking',
                    'viewBooking': 'goViewBooking',
                    'editPayment': 'goPayment',
                    'alkhidmatCentre': 'goStation',
                    'editRefund': 'goCancel',
                    'busVisit': 'gobusVisit',
                    'editBusVisit': 'goEditBusVisit',
                    'viewBusVisit': 'goViewBusVisit',
                    'searchBooking': 'goSearchBooking',
                    'changePassword': 'goChangePassword',
                    'editExtraCharge': 'goExtraCharge',
                    'login': 'defaultRoute',
                    'logout': 'goLogout',
                    '*other': 'defaultRoute'
                },
                goUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().Show();
                    });
                },
                goViewUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().GetAll();
                    });
                },
                goBus: function () {
                    require(['./Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                },
                goAddBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().Show();
                    });
                },
                goEditBooking: function () {
                    //require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
                },
                goViewHome: function () {
                    require(['./Home/HomeCtrl'], function (p) {
                        new p.HomeCtrl().Show();
                    });
                },
                goViewBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().GetAll(1);
                    });
                    //this.appRoute.navigate("viewBooking");
                    //routes.navigate("viewBooking");
                },
                goPayment: function () {
                    //require(['./Payment/PaymentCtrl'], (p) => { new p.PaymentCtrl().Show(); });
                },
                goStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().Show();
                    });
                },
                goViewStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().GetAll();
                    });
                },
                goCancel: function () {
                    //require(['./RefundBooking/RefundBookingCtrl'], (p) => { new p.RefundBookingCtrl().Show(); });
                },
                goViewBusVisit: function () {
                    require(['./Bus/BusVisit/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().SimpleLoad();
                    });
                },
                gobusVisit: function () {
                    require(['./Bus/BusVisit/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().Load();
                    });
                },
                goEditBusVisit: function () {
                    //require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Show(); });
                },
                goAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                },
                goViewAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().GetAll();
                    });
                },
                goSearchBooking: function () {
                    require(['./Search/SearchCtrl'], function (p) {
                        new p.SearchCtrl().Show();
                    });
                },
                goAdminSearchBooking: function () {
                    require(['./Admin/AdminSearchBooking/AdminSearchBookingCtrl'], function (p) {
                        new p.AdminSearchBookingCtrl().Show();
                    });
                },
                goDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().Show();
                    });
                },
                goViewDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().GetAll();
                    });
                },
                goGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().Show();
                    });
                },
                goViewGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().GetAll();
                    });
                },
                goTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().Show();
                    });
                },
                goViewTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().GetAll();
                    });
                },
                goUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().Show();
                    });
                },
                goViewUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().GetAll();
                    });
                },
                goLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().Show();
                    });
                },
                goViewLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().GetAll();
                    });
                },
                goPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().Show();
                    });
                },
                goViewPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().GetAll();
                    });
                },
                goRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().Show();
                    });
                },
                goViewRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().GetAll();
                    });
                },
                goVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().Show();
                    });
                },
                goViewVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().GetAll();
                    });
                },
                goCauseOfDeath: function () {
                    require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], function (p) {
                        new p.CauseOfDeathCtrl().Show();
                    });
                },
                goViewCauseOfDeath: function () {
                    require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], function (p) {
                        new p.CauseOfDeathCtrl().GetAll();
                    });
                },
                goViewTest: function () {
                    // new koBindingController.KoBindingCtrl().Show();
                },
                goTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().Show();
                    });
                },
                goViewTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().GetAll();
                    });
                },
                goNearestCentreSetup: function () {
                    require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], function (p) {
                        new p.NearestCentreSetupCtrl().Show();
                    });
                },
                goViewNearestCentreSetup: function () {
                    require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], function (p) {
                        new p.NearestCentreSetupCtrl().GetAll();
                    });
                },
                goChangePassword: function () {
                    require(['./ChangePassword/ChangePasswordCtrl'], function (p) {
                        new p.ChangePasswordCtrl().Load();
                    });
                },
                goExtraCharge: function () {
                    //require(['./ExtraCharge/ExtraChargeCtrl'], (p) => { new p.ExtraChargeCtrl().Show(); });
                },
                goDriverSummary: function () {
                    require(['./Admin/Reports/Driver/DriverSummaryCtrl'], function (p) {
                        new p.DriverSummaryCtrl().Show();
                    });
                },
                goBusVisitSummary: function () {
                    require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], function (p) {
                        new p.BusVisitSummaryCtrl().ShowVisit();
                    });
                },
                goBusVisitMilageSummary: function () {
                    require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], function (p) {
                        new p.BusVisitSummaryCtrl().ShowMilage();
                    });
                },
                goAuditBooking: function () {
                    require(['./Admin/Reports/Audit/Booking/AuditBookingCtrl'], function (p) {
                        new p.AuditBookingCtrl().Show();
                    });
                },
                goAuditBusVisit: function () {
                    require(['./Admin/Reports/Audit/BusVisit/AuditBusVisitCtrl'], function (p) {
                        new p.AuditBusVisitCtrl().Show();
                    });
                },
                goAuditPayment: function () {
                    require(['./Admin/Reports/Audit/Payment/AuditPaymentCtrl'], function (p) {
                        new p.AuditPaymentCtrl().Show();
                    });
                },
                goAuditRefundBooking: function () {
                    require(['./Admin/Reports/Audit/Refund/AuditRefundBookingCtrl'], function (p) {
                        new p.AuditRefundBookingCtrl().Show();
                    });
                },
                goBusCentreReport: function () {
                    require(['./Admin/Reports/Centre/BusCentreReport/BusCentreReportCtrl'], function (p) {
                        new p.BusCentreReportCtrl().Show();
                    });
                },
                goBusMilageReport: function () {
                    require(['./Admin/Reports/Bus/BusMilage/BusMilageCtrl'], function (p) {
                        new p.BusMilageCtrl().Show();
                    });
                },
                goBusFuelingReport: function () {
                    require(['./Admin/Reports/BusFueling/BusFuelingReportCtrl'], function (p) {
                        new p.BusFuelingReportCtrl().Show();
                    });
                },
                goLogout: function () {
                    var appInstance = Application.getInstance();
                    appInstance.vent.trigger("Event-BackToLogin", false);
                },
                defaultRoute: function () {
                    self.ContainerRegion.reset();
                    self.ContainerRegion.show(layout);
                    require(['./Login/LoginCtrl'], function (p) {
                        new p.LoginCtrl().Load();
                    });
                }
            });

            //debugger;
            this.AppRoutes = new router();
        };

        Application.prototype.goViewBooking = function () {
            require(['./Booking/BookingCtrl'], function (p) {
                new p.BookingCtrl().GetAll(1);
            });
            this.AppRoutes.navigate("viewBooking");
        };

        Application.prototype.initalizeLocalStorage = function () {
            var deferred = $.Deferred();
            if (localStorage.getItem('lookupResponse') == null || localStorage.getItem('lookupResponse') == "undefined") {
                require(['./DAL/Lookup'], function (p) {
                    deferred = p.Load();
                    deferred.done(function (p) {
                        localStorage.setItem('lookupResponse', JSON.stringify(p));
                        require(['./Login/LoginCtrl'], function (p) {
                            new p.LoginCtrl().Load();
                        });
                    });
                    return deferred;
                });
            } else {
                require(['./Login/LoginCtrl'], function (p) {
                    new p.LoginCtrl().Load();
                });
            }
        };

        Application.prototype.initalizeLocalStorage1 = function () {
            if (localStorage.getItem('lookupResponse') != null) {
                localStorage.removeItem('lookupResponse');
            }
            require(['./DAL/Lookup'], function (p) {
                var deferred = p.Load();
                deferred.done(function (p) {
                    localStorage.setItem('lookupResponse', JSON.stringify(p));
                });
            });
        };

        Application.getInstance = function () {
            if (Application._instance === null) {
                //alert("new instance");
                Application._instance = new Application();
            }
            return Application._instance;
        };
        Application._instance = null;
        return Application;
    })(Marionette.Application);
    exports.Application = Application;

    //on load call initialize application
    $(function () {
        var app = Application.getInstance();
        app.start();

        //var rgnModal = modalHelper.GetModalRegion();
        var rgnModal = new modalHelper.ModalRegion({ el: '#ModalPopup' });
        var rgnModalAlert = new modalHelper.ModalRegion({ el: '#ModalAlertPopup' });

        //var modal = new rgnModal({ el: '#ModalPopup' });
        //app.ModalRegion = modal;
        app.ModalRegion = rgnModal;
        app.ModalAlertRegion = rgnModalAlert;
    });
});
//aaa
//# sourceMappingURL=App.js.map
;
/// <reference path="../Scripts/typings/require/require.d.ts" />
// Set the require.js configuration
require.config({
    enforceDefine: false,
    //By default load  any module IDs from js/lib
    baseUrl: './',
    waitSeconds: 0,
    //urlArgs: "bust=" + "V3",
    // If no baseUrl is explicitly set in the configuration, the default value
    // will be the location of the HTML page that loads require.js.
    // If a data-main attribute is used, that path will become the baseUrl.
    // Path mappings for module names not found directly under baseUrl.
    // The path settings are assumed to be relative to baseUrl, unless the paths
    // setting starts with a "/" or has a URL protocol in it ("like http:").
    // In those cases, the path is determined relative to baseUrl.
    paths: {
        // JavaScript folders
        // Libraries
        jquery: "Scripts/jquery-2.1.1.min",
        jqueryUI: "Scripts/jquery-ui.min",
        underscore: "Scripts/underscore-min",
        backbone: "Scripts/backbone.min",
        //backbone: "Scripts/backboneamd",
        //backboneValidation: "Scripts/backbone-validation-amd-min",
        //router: "Vendor/gladstone/backbonerouter",
        marionette: "Scripts/backbone.marionette.min",
        bootstrap: "Scripts/bootstrap.min",
        bootstrapPopover: "Scripts/bootstrap-popover",
        bootstrapTooltip: "Scripts/bootstrap-tooltip",
        //datepicker: "Scripts/bootstrap-datepicker",
        knockout: "Scripts/knockout-3.1.0",
        //knockoutvalidation: "Scripts/knockout.validation",
        knockback: "Scripts/knockback.min",
        //bindings: "Vendor/Gladstone/KnockoutBindings",
        // Require plugins
        text: "Scripts/text",
        datatables: "Scripts/DataTables/jquery.dataTables.min",
        datatablesBootstrap: "Scripts/DataTables/dataTables.bootstrap",
        jqueryValidate: "Scripts/jquery.validate.min",
        jqueryUnobtrusive: "Scripts/jquery.validate.unobtrusive.min",
        jqueryUnobtrusiveAjax: "Scripts/jquery.unobtrusive-ajax.min",
        //knockoutJqueryuiUtils: 'Scripts/KnockoutJqueryUI/utils',
        //knockoutJqueryuiHandler: 'Scripts/KnockoutJqueryUI/bindingHandler',z
        knockoutJqueryuiDatepicker: 'Scripts/KnockoutJqueryUI/datepicker',
        highcharts: 'Scripts/HighCharts/highcharts.min',
        highcharts3d: 'Scripts/HighCharts/highcharts-3d.min',
        highchartsExport: 'Scripts/HighCharts/exporting.min',
        accounting: 'Scripts/AccountingJS/accounting.min',
        selectize: 'Scripts/Selectize/selectize.min',
        printArea: 'Scripts/PrintArea/jquery.PrintArea'
    },
    // Configure the dependencies and exports for older, traditional "browser globals"
    // scripts that do not use define() to declare the dependencies and set a module value.
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        //'backboneValidation': {
        //    deps: ['backbone'],
        //    exports: 'Backbone'
        //},
        "marionette": {
            deps: ["underscore", "jquery", "backbone"],
            exports: "Marionette"
        },
        //"router": ["underscore", "jquery"],
        "bootstrap": ["jquery"],
        "bootstrapPopover": ["jquery", "bootstrap"],
        "bootstrapTooltip": ["jquery", "bootstrap"],
        //"datepicker": ["jquery", "bootstrap"],
        "knockout": {
            exports: "ko"
        },
        "knockback": {
            deps: ["knockout"],
            exports: "kb"
        },
        "datatablesBootstrap": {
            deps: ["datatables"]
        },
        //"knockoutvalidation": {
        //    deps: ["knockout"]
        //},
        //"jquery-ui": ["jquery","bootstrap"],
        "jqueryUI": ["jquery"],
        "jqueryValidate": ["jquery"],
        "jqueryUnobtrusive": ["jquery", "jqueryValidate"],
        "jqueryUnobtrusiveAjax": ["jquery"],
        "knockoutJqueryuiDatepicker": {
            depts: ["jquery", "knockout", "jqueryUI"]
        },
        "highcharts": {
            deps: ["jquery"],
            exports: "highcharts"
        },
        "highcharts3d": {
            deps: ["jquery", "highcharts"]
        },
        "highchartsExport": {
            deps: ["jquery", "highcharts"]
        },
        "accounting": {
            deps: ["jquery"]
        },
        "selectize": {
            deps: ["jquery"]
        },
        "printArea": {
            deps: ["jquery", "jqueryUI"]
        }
    }
});

require([
    "jquery",
    "underscore",
    "backbone",
    "marionette",
    "bootstrap",
    "jqueryUI",
    "accounting",
    "selectize",
    "printArea",
    "knockoutJqueryuiDatepicker",
    "CCTracking.WebClient/App"
], //function ($, Backbone, _, Marionette) {
//    //console.log('ddddd');
//}
function () {
});
//aaa
//# sourceMappingURL=Main.js.map
;
define("CCTracking.WebClient/Main", function(){});

