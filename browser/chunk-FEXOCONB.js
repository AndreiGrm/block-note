import{$ as ii,A as xe,B as Gn,C as Be,D as Un,E as Qn,F as St,G as te,H as Ie,I as Et,J as qn,K as pn,L as Kn,M as Zn,N as _e,O as mn,P as Yn,Q as Xn,R as Jn,S as ei,T as Ae,U as ne,V as Bt,W as hn,X as Rt,Y as ti,Z as ae,_ as ni,a as dn,aa as oi,b as de,ba as ri,c as yt,ca as De,d as ue,da as $,e as pe,ea as ai,f as me,fa as Z,g as Hn,h as ee,ha as L,i as re,ia as be,ja as jt,ka as se,l as Bn,n as Ct,o as xt,q as et,r as Oe,s as Ze,t as wt,u as Le,v as un,w as Tt,x as Rn,y as jn,z as Wn}from"./chunk-RJLGVO5U.js";import{$ as zt,$a as $n,Ab as Te,Bb as Pn,Ca as Ge,Cb as ze,Da as _t,Db as ye,Eb as k,Fa as c,Fb as M,Gb as X,Ha as Mn,Hb as bt,Ib as Me,Ja as ln,Jb as Ve,Ka as j,Kb as Fe,Lb as U,M as We,Ma as Vn,Mb as Se,N,Nb as Q,O as R,Ob as $e,Pb as Ln,Q as it,Qa as S,Ra as W,Rb as vt,S as T,Sa as Y,Sb as cn,Ta as Fn,Tb as Nn,Ua as x,Ub as Ee,Va as m,X as v,Xa as E,Y as y,Ya as rt,Yb as Je,Z as ce,Zb as Ce,_b as Ht,a as B,ac as Ke,b as oe,bc as zn,db as g,ea as ie,eb as Ue,fb as Qe,fc as f,gb as On,gc as K,ha as ve,hb as An,i as Sn,ia as C,ib as s,jb as d,ka as gt,kb as u,kc as He,l as En,lb as h,lc as he,mb as V,nb as F,nc as fe,oa as ot,ob as G,oc as It,pb as P,pc as ge,q as Dn,qc as at,sb as b,sc as st,tb as l,ub as qe,vb as ke,w as kn,wb as D,xb as le,yb as I,zb as w}from"./chunk-X5MNNN4Y.js";var Dt=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var a=0;a<i.length;a++){if(i[a]==e)return r;i[a].attributes&&i[a].attributes[n]&&i[a].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=Nt=>{if(Nt)return getComputedStyle(Nt).getPropertyValue("position")==="relative"?Nt:r(Nt.parentElement)},a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),p=n.offsetHeight,_=n.getBoundingClientRect(),O=this.getWindowScrollTop(),A=this.getWindowScrollLeft(),H=this.getViewport(),q=r(e)?.getBoundingClientRect()||{top:-1*O,left:-1*A},we,je;_.top+p+a.height>H.height?(we=_.top-q.top-a.height,e.style.transformOrigin="bottom",_.top+we<0&&(we=-1*_.top)):(we=p+_.top-q.top,e.style.transformOrigin="top");let Tn=_.left+a.width-H.width,uo=_.left-q.left;a.width>H.width?je=(_.left-q.left)*-1:Tn>0?je=uo-Tn:je=_.left-q.left,e.style.top=we+"px",e.style.left=je+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=r.height,p=r.width,_=n.offsetHeight,O=n.offsetWidth,A=n.getBoundingClientRect(),H=this.getWindowScrollTop(),J=this.getWindowScrollLeft(),q=this.getViewport(),we,je;A.top+_+a>q.height?(we=A.top+H-a,e.style.transformOrigin="bottom",we<0&&(we=H)):(we=_+A.top+H,e.style.transformOrigin="top"),A.left+p>q.width?je=Math.max(0,A.left+J+O-p):je=A.left+J,e.style.top=we+"px",e.style.left=je+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,a=p=>{let _=window.getComputedStyle(p,null);return r.test(_.getPropertyValue("overflow"))||r.test(_.getPropertyValue("overflowX"))||r.test(_.getPropertyValue("overflowY"))};for(let p of i){let _=p.nodeType===1&&p.dataset.scrollselectors;if(_){let O=_.split(",");for(let A of O){let H=this.findSingle(p,A);H&&a(H)&&n.push(H)}}p.nodeType!==9&&a(p)&&n.push(p)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,a=getComputedStyle(e).getPropertyValue("paddingTop"),p=a?parseFloat(a):0,_=e.getBoundingClientRect(),A=n.getBoundingClientRect().top+document.body.scrollTop-(_.top+document.body.scrollTop)-r-p,H=e.scrollTop,J=e.clientHeight,q=this.getOuterHeight(n);A<0?e.scrollTop=H+A:A+q>J&&(e.scrollTop=H+A-J+q)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,a=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(e,n){var i=1,r=50,a=n,p=r/a;let _=setInterval(()=>{i=i-p,i<=0&&(i=0,clearInterval(_)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],a=e.innerWidth||i.clientWidth||r.clientWidth,p=e.innerHeight||i.clientHeight||r.clientHeight;return{width:a,height:p}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var a=e.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let a of i){let p=getComputedStyle(a);this.isVisible(a)&&p.display!="none"&&p.visibility!="hidden"&&r.push(a)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let a=i.indexOf(i[0].ownerDocument.activeElement);n?a==-1||a===0?r=i.length-1:r=a-1:a!=-1&&a!==i.length-1&&(r=a+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let a=(p=>!!(p&&p.constructor&&p.call&&p.apply))(e)?e():e;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,a)=>{let p=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[a].flat().reduce((_,O)=>{if(O!=null){let A=typeof O;if(A==="string"||A==="number")_.push(O);else if(A==="object"){let H=Array.isArray(O)?i(r,O):Object.entries(O).map(([J,q])=>r==="style"&&(q||q===0)?`${J.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${q}`:q?J:void 0);_=H.length?_.concat(H.filter(J=>!!J)):_}}return _},p)};Object.entries(n).forEach(([r,a])=>{if(a!=null){let p=r.match(/^on(.+)/);p?e.addEventListener(p[1].toLowerCase(),a):r==="pBind"?this.setAttributes(e,a):(a=r==="class"?[...new Set(i("class",a))].join(" ").trim():r==="style"?i("style",a).join(";").trim():a,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=a),e.setAttribute(r,a))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),lt=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=Dt.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var si=(()=>{class t extends L{autofocus=!1;_autofocus=!1;focused=!1;platformId=T(ot);document=T(zt);host=T(gt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){re(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Dt.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=Y({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",f],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[x]})}return t})();var po=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,mo={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":ne(t.value)&&String(t.value).length===1,"p-badge-dot":Ae(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},li=(()=>{class t extends Z{name="badge";theme=po;classes=mo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var kt=(()=>{class t extends L{styleClass=Ke();style=Ke();badgeSize=Ke();size=Ke();severity=Ke();value=Ke();badgeDisabled=Ke(!1,{transform:f});_componentStyle=T(li);containerClass=Ce(()=>{let e="p-badge p-component";return ne(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),Ae(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,i){n&2&&(ye(i.style()),k(i.containerClass()),Pn("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[U([li]),x],decls:1,vars:1,template:function(n,i){n&1&&M(0),n&2&&X(i.value())},dependencies:[ee,$],encapsulation:2,changeDetection:0})}return t})(),Mt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({imports:[kt,$,$]})}return t})();var di=(()=>{class t extends be{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["AngleDownIcon"]],features:[x],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,i){n&1&&(ce(),d(0,"svg",0),h(1,"path",1),u()),n&2&&(k(i.getClassNames()),g("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var ui=(()=>{class t extends be{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["AngleRightIcon"]],features:[x],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,i){n&1&&(ce(),d(0,"svg",0),h(1,"path",1),u()),n&2&&(k(i.getClassNames()),g("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var pi=(()=>{class t extends be{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["ChevronDownIcon"]],features:[x],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,i){n&1&&(ce(),d(0,"svg",0),h(1,"path",1),u()),n&2&&(k(i.getClassNames()),g("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var mi=(()=>{class t extends be{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["ChevronRightIcon"]],features:[x],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,i){n&1&&(ce(),d(0,"svg",0),h(1,"path",1),u()),n&2&&(k(i.getClassNames()),g("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var hi=(()=>{class t extends be{pathId;ngOnInit(){this.pathId="url(#"+ae()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["SpinnerIcon"]],features:[x],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ce(),d(0,"svg",0)(1,"g"),h(2,"path",1),u(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),u()()()),n&2&&(k(i.getClassNames()),g("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),c(),g("clip-path",i.pathId),c(3),s("id",i.pathId))},encapsulation:2})}return t})();var fi=(()=>{class t extends be{pathId;ngOnInit(){this.pathId="url(#"+ae()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["WindowMaximizeIcon"]],features:[x],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ce(),d(0,"svg",0)(1,"g"),h(2,"path",1),u(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),u()()()),n&2&&(k(i.getClassNames()),g("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),c(),g("clip-path",i.pathId),c(3),s("id",i.pathId))},encapsulation:2})}return t})();var gi=(()=>{class t extends be{pathId;ngOnInit(){this.pathId="url(#"+ae()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["WindowMinimizeIcon"]],features:[x],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ce(),d(0,"svg",0)(1,"g"),h(2,"path",1),u(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),u()()()),n&2&&(k(i.getClassNames()),g("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),c(),g("clip-path",i.pathId),c(3),s("id",i.pathId))},encapsulation:2})}return t})();var ho=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,fo={root:"p-ink"},_i=(()=>{class t extends Z{name="ripple";theme=ho;classes=fo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Wt=(()=>{class t extends L{zone=T(rt);_componentStyle=T(_i);animationListener;mouseDownListener;timeout;constructor(){super(),Ht(()=>{re(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Le(n,"p-ink-active"),!pn(n)&&!mn(n)){let p=Math.max(xe(this.el.nativeElement),_e(this.el.nativeElement));n.style.height=p+"px",n.style.width=p+"px"}let i=Zn(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-mn(n)/2,a=e.pageY-i.top+this.document.body.scrollLeft-pn(n)/2;this.renderer.setStyle(n,"top",a+"px"),this.renderer.setStyle(n,"left",r+"px"),Ze(n,"p-ink-active"),this.timeout=setTimeout(()=>{let p=this.getInk();p&&Le(p,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Le(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Le(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Xn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Y({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[U([_i]),x]})}return t})();var go=["content"],_o=["loadingicon"],bo=["icon"],vo=["*"],vi=t=>({class:t});function yo(t,o){t&1&&G(0)}function Co(t,o){if(t&1&&h(0,"span",8),t&2){let e=l(3);s("ngClass",e.iconClass()),g("aria-hidden",!0)("data-pc-section","loadingicon")}}function xo(t,o){if(t&1&&h(0,"SpinnerIcon",9),t&2){let e=l(3);s("styleClass",e.spinnerIconClass())("spin",!0),g("aria-hidden",!0)("data-pc-section","loadingicon")}}function Io(t,o){if(t&1&&(V(0),m(1,Co,1,3,"span",6)(2,xo,1,4,"SpinnerIcon",7),F()),t&2){let e=l(2);c(),s("ngIf",e.loadingIcon),c(),s("ngIf",!e.loadingIcon)}}function wo(t,o){}function To(t,o){if(t&1&&m(0,wo,0,0,"ng-template",10),t&2){let e=l(2);s("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function So(t,o){if(t&1&&(V(0),m(1,Io,3,2,"ng-container",2)(2,To,1,1,null,5),F()),t&2){let e=l();c(),s("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),c(),s("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Q(3,vi,e.iconClass()))}}function Eo(t,o){if(t&1&&h(0,"span",8),t&2){let e=l(2);k(e.icon),s("ngClass",e.iconClass()),g("data-pc-section","icon")}}function Do(t,o){}function ko(t,o){if(t&1&&m(0,Do,0,0,"ng-template",10),t&2){let e=l(2);s("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Mo(t,o){if(t&1&&(V(0),m(1,Eo,1,4,"span",11)(2,ko,1,1,null,5),F()),t&2){let e=l();c(),s("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),c(),s("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Q(3,vi,e.iconClass()))}}function Vo(t,o){if(t&1&&(d(0,"span",12),M(1),u()),t&2){let e=l();g("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),c(),X(e.label)}}function Fo(t,o){if(t&1&&h(0,"p-badge",13),t&2){let e=l();s("value",e.badge)("severity",e.badgeSeverity)}}var $o=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Oo={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},bi=(()=>{class t extends Z{name="button";theme=$o;classes=Oo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Pe=(()=>{class t extends L{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new E;onFocus=new E;onBlur=new E;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Ae(this.fluid)?!!n:this.fluid}_componentStyle=T(bi);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(D(r,go,5),D(r,_o,5),D(r,bo,5),D(r,De,4)),n&2){let a;I(a=w())&&(i.contentTemplate=a.first),I(a=w())&&(i.loadingIconTemplate=a.first),I(a=w())&&(i.iconTemplate=a.first),I(a=w())&&(i.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",f],loading:[2,"loading","loading",f],loadingIcon:"loadingIcon",raised:[2,"raised","raised",f],rounded:[2,"rounded","rounded",f],text:[2,"text","text",f],plain:[2,"plain","plain",f],severity:"severity",outlined:[2,"outlined","outlined",f],link:[2,"link","link",f],tabindex:[2,"tabindex","tabindex",K],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",f],fluid:[2,"fluid","fluid",f],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[U([bi]),x,ve],ngContentSelectors:vo,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,i){n&1&&(qe(),d(0,"button",0),b("click",function(a){return i.onClick.emit(a)})("focus",function(a){return i.onFocus.emit(a)})("blur",function(a){return i.onBlur.emit(a)}),ke(1),m(2,yo,1,0,"ng-container",1)(3,So,3,5,"ng-container",2)(4,Mo,3,5,"ng-container",2)(5,Vo,2,3,"span",3)(6,Fo,1,2,"p-badge",4),u()),n&2&&(s("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),g("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),c(2),s("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),c(),s("ngIf",i.loading),c(),s("ngIf",!i.loading),c(),s("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),c(),s("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[ee,de,ue,me,pe,Wt,si,hi,Mt,kt,$],encapsulation:2,changeDetection:0})}return t})(),Ye=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({imports:[ee,Pe,$,$]})}return t})();var Ao=["maskRef"],Po=["container"],Lo=["closeButton"],No=["*"],zo=(t,o)=>({transform:t,transition:o}),Ho=t=>({value:"visible",params:t});function Bo(t,o){t&1&&G(0)}function Ro(t,o){if(t&1&&m(0,Bo,1,0,"ng-container",4),t&2){let e=l(2);s("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function jo(t,o){t&1&&G(0)}function Wo(t,o){t&1&&h(0,"TimesIcon"),t&2&&g("data-pc-section","closeicon")}function Go(t,o){}function Uo(t,o){t&1&&m(0,Go,0,0,"ng-template")}function Qo(t,o){if(t&1&&(d(0,"span",10),m(1,Uo,1,0,null,4),u()),t&2){let e=l(4);g("data-pc-section","closeicon"),c(),s("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function qo(t,o){if(t&1){let e=P();d(0,"p-button",8),b("onClick",function(i){v(e);let r=l(3);return y(r.close(i))})("keydown.enter",function(i){v(e);let r=l(3);return y(r.close(i))}),m(1,Wo,1,1,"TimesIcon",7)(2,Qo,2,2,"span",9),u()}if(t&2){let e=l(3);s("ngClass",e.cx("closeButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),g("data-pc-section","closebutton")("data-pc-group-section","iconcontainer"),c(),s("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),c(),s("ngIf",e.closeIconTemplate||e._closeIconTemplate)}}function Ko(t,o){t&1&&G(0)}function Zo(t,o){t&1&&G(0)}function Yo(t,o){if(t&1&&(V(0),d(1,"div",5),m(2,Zo,1,0,"ng-container",4),u(),F()),t&2){let e=l(3);c(),s("ngClass",e.cx("footer")),g("data-pc-section","footer"),c(),s("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Xo(t,o){if(t&1&&(d(0,"div",5),m(1,jo,1,0,"ng-container",4)(2,qo,3,7,"p-button",6),u(),d(3,"div",5),ke(4),m(5,Ko,1,0,"ng-container",4),u(),m(6,Yo,3,3,"ng-container",7)),t&2){let e=l(2);s("ngClass",e.cx("header")),g("data-pc-section","header"),c(),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),c(),s("ngIf",e.showCloseIcon),c(),s("ngClass",e.cx("content")),g("data-pc-section","content"),c(2),s("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),c(),s("ngIf",e.footerTemplate||e._footerTemplate)}}function Jo(t,o){if(t&1){let e=P();d(0,"div",2,0),b("@panelState.start",function(i){v(e);let r=l();return y(r.onAnimationStart(i))})("@panelState.done",function(i){v(e);let r=l();return y(r.onAnimationEnd(i))})("click",function(i){v(e);let r=l();return y(r.maskClickListener(i))}),d(2,"div",3),b("keydown",function(i){v(e);let r=l();return y(r.onKeyDown(i))}),Ue(3,Ro,1,1,"ng-container")(4,Xo,7,8),u()()}if(t&2){let e=l();ye(e.maskStyle),s("ngClass",e.cx("mask"))("ngStyle",e.sx("mask"))("@panelState",Q(15,Ho,$e(12,zo,e.transformOptions,e.transitionOptions))),g("data-pc-name","mask")("data-pc-section","mask"),c(2),k(e.styleClass),s("ngClass",e.cx("root")),g("data-pc-section","root"),c(),Qe(e.headlessTemplate||e._headlessTemplate?3:4)}}var er=({dt:t})=>`

.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: ${t("drawer.background")};
    color: ${t("drawer.color")};
    border: 1px solid ${t("drawer.border.color")};
    box-shadow: ${t("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${t("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${t("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${t("drawer.title.font.weight")};
    font-size: ${t("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

/* PrimeVue animations

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
*/

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {

    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}
`,tr={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"})},nr={mask:({instance:t})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen,[`p-drawer-${t.position}`]:!!t.position}),root:({instance:t})=>({"p-drawer p-component":!0,"p-drawer-full":t.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},yi=(()=>{class t extends Z{name="drawer";theme=er;classes=nr;inlineStyles=tr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),ir=at([fe({transform:"{{transform}}",opacity:0}),he("{{transition}}")]),or=at([he("{{transition}}",fe({transform:"{{transform}}",opacity:0}))]),rr=(()=>{class t extends L{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps;dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){switch(this._position=e,e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}maskStyle;onShow=new E;onHide=new E;visibleChange=new E;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;documentEscapeListener;_componentStyle=T(yi);headerTemplate;footerTemplate;closeIconTemplate;headlessTemplate;contentTemplate;templates;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let n=Object.keys(e).find(i=>i.includes("Template"));n&&(this[`_${n}`]=e[n].currentValue)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&se.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({})}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}maskClickListener(e){this.dismissible&&this.close(e),this.blockScroll&&wt()}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),se.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){if(this.appendTo)return this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Be(this.appendTo,this.container)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===se.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindGlobalListeners(){this.unbindDocumentEscapeListener()}ngOnDestroy(){this.initialized=!1,this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&se.clear(this.container),this.container=null,this.unbindGlobalListeners(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["p-sidebar"]],contentQueries:function(n,i,r){if(n&1&&D(r,De,4),n&2){let a;I(a=w())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&(le(Ao,5),le(Po,5),le(Lo,5)),n&2){let r;I(r=w())&&(i.maskRef=r.first),I(r=w())&&(i.containerViewChild=r.first),I(r=w())&&(i.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",f],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",f],baseZIndex:[2,"baseZIndex","baseZIndex",K],modal:[2,"modal","modal",f],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",f],showCloseIcon:[2,"showCloseIcon","showCloseIcon",f],closeOnEscape:[2,"closeOnEscape","closeOnEscape",f],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",maskStyle:"maskStyle",headerTemplate:"headerTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",headlessTemplate:"headlessTemplate",contentTemplate:"contentTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[U([yi]),x,ve],ngContentSelectors:No,decls:1,vars:1,consts:[["maskRef",""],[3,"ngClass","ngStyle","style","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],[3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["class","p-sidebar-close-icon",4,"ngIf"],[1,"p-sidebar-close-icon"]],template:function(n,i){n&1&&(qe(),m(0,Jo,5,17,"div",1)),n&2&&s("ngIf",i.visible)},dependencies:[ee,de,ue,me,pe,$,jt,Ye,Pe],encapsulation:2,data:{animation:[He("panelState",[ge("void => visible",[st(ir)]),ge("visible => void",[st(or)])])]},changeDetection:0})}return t})(),Ci=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({imports:[rr,$,$]})}return t})();var ar=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,sr={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},xi=(()=>{class t extends Z{name="tooltip";theme=ar;classes=sr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Ft=(()=>{class t extends L{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:ae("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=T(xi);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),re(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=B(B({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Oe(e.relatedTarget,"p-tooltip")||Oe(e.relatedTarget,"p-tooltip-text")||Oe(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Be(this.container,this.el.nativeElement):Be(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Qn(this.container,250),this.getOption("tooltipZIndex")==="auto"?se.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&se.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof Mn){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[i,r]of n[e].entries())if(i===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+Rn(),i=e.top+jn();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?te(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=xe(e),i=(_e(e)-_e(this.container))/2;this.alignTooltip(n,i)}alignLeft(){this.preAlign("left");let e=xe(this.container),n=(_e(this.el.nativeElement)-_e(this.container))/2;this.alignTooltip(-e,n)}alignTop(){this.preAlign("top");let e=(xe(this.el.nativeElement)-xe(this.container))/2,n=_e(this.container);this.alignTooltip(e,-n)}alignBottom(){this.preAlign("bottom");let e=(xe(this.el.nativeElement)-xe(this.container))/2,n=_e(this.el.nativeElement);this.alignTooltip(e,n)}alignTooltip(e,n){let i=this.getHostOffset(),r=i.left+e,a=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=a+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=B(B({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Oe(e,"p-inputwrapper")?te(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,r=xe(this.container),a=_e(this.container),p=Tt();return i+r>p.width||i<0||n<0||n+a>p.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new lt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Jn(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&se.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(j(rt),j(Vn))};static \u0275dir=Y({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",f],showDelay:[2,"showDelay","showDelay",K],hideDelay:[2,"hideDelay","hideDelay",K],life:[2,"life","life",K],positionTop:[2,"positionTop","positionTop",K],positionLeft:[2,"positionLeft","positionLeft",K],autoHide:[2,"autoHide","autoHide",f],fitContent:[2,"fitContent","fitContent",f],hideOnEscape:[2,"hideOnEscape","hideOnEscape",f],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[U([xi]),x,ve]})}return t})(),tt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({})}return t})();var cr=["pMenuItemContent",""],Ti=t=>({"p-disabled":t}),Ut=t=>({$implicit:t}),dr=()=>({exact:!1});function ur(t,o){t&1&&G(0)}function pr(t,o){if(t&1&&(d(0,"a",6),m(1,ur,1,0,"ng-container",7),u()),t&2){let e=l(2),n=Te(4);s("target",e.item.target)("ngClass",Q(9,Ti,e.item.disabled)),g("title",e.item.title)("href",e.item.url||null,_t)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),c(),s("ngTemplateOutlet",n)("ngTemplateOutletContext",Q(11,Ut,e.item))}}function mr(t,o){t&1&&G(0)}function hr(t,o){if(t&1&&(d(0,"a",8),m(1,mr,1,0,"ng-container",7),u()),t&2){let e=l(2),n=Te(4);s("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||Se(17,dr))("target",e.item.target)("ngClass",Q(18,Ti,e.item.disabled))("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),g("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),c(),s("ngTemplateOutlet",n)("ngTemplateOutletContext",Q(20,Ut,e.item))}}function fr(t,o){if(t&1&&(V(0),m(1,pr,2,13,"a",4)(2,hr,2,22,"a",5),F()),t&2){let e=l();c(),s("ngIf",!(e.item!=null&&e.item.routerLink)),c(),s("ngIf",e.item==null?null:e.item.routerLink)}}function gr(t,o){}function _r(t,o){t&1&&m(0,gr,0,0,"ng-template")}function br(t,o){if(t&1&&(V(0),m(1,_r,1,0,null,7),F()),t&2){let e=l();c(),s("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",Q(2,Ut,e.item))}}function vr(t,o){if(t&1&&h(0,"span",12),t&2){let e=l(2);k(e.item.iconClass),s("ngClass",e.item.icon)("ngStyle",e.item.iconStyle)}}function yr(t,o){if(t&1&&(d(0,"span",13),M(1),u()),t&2){let e=l(2);c(),X(e.item.label)}}function Cr(t,o){if(t&1&&(h(0,"span",14),vt(1,"safeHtml")),t&2){let e=l(2);s("innerHTML",cn(1,1,e.item.label),Ge)}}function xr(t,o){if(t&1&&h(0,"p-badge",15),t&2){let e=l(2);s("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function Ir(t,o){if(t&1&&m(0,vr,1,4,"span",9)(1,yr,2,1,"span",10)(2,Cr,2,3,"ng-template",null,1,Ee)(4,xr,1,2,"p-badge",11),t&2){let e=Te(3),n=l();s("ngIf",n.item.icon),c(),s("ngIf",n.item.escape!==!1)("ngIfElse",e),c(3),s("ngIf",n.item.badge)}}var wr=["start"],Tr=["end"],Sr=["header"],Er=["item"],Dr=["submenuheader"],kr=["list"],Mr=["container"],Vr=t=>({"p-menu p-component":!0,"p-menu-overlay":t}),Fr=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),$r=t=>({value:"visible",params:t}),Or=(t,o)=>({"p-hidden":t,flex:o}),Si=(t,o)=>({"p-focus":t,"p-disabled":o});function Ar(t,o){t&1&&G(0)}function Pr(t,o){if(t&1&&(d(0,"div",9),m(1,Ar,1,0,"ng-container",10),u()),t&2){let e=l(2);g("data-pc-section","start"),c(),s("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function Lr(t,o){t&1&&h(0,"li",14)}function Nr(t,o){if(t&1&&(d(0,"span"),M(1),u()),t&2){let e=l(3).$implicit;c(),X(e.label)}}function zr(t,o){if(t&1&&(h(0,"span",18),vt(1,"safeHtml")),t&2){let e=l(3).$implicit;s("innerHTML",cn(1,1,e.label),Ge)}}function Hr(t,o){if(t&1&&(V(0),m(1,Nr,2,1,"span",17)(2,zr,2,3,"ng-template",null,2,Ee),F()),t&2){let e=Te(3),n=l(2).$implicit;c(),s("ngIf",n.escape!==!1)("ngIfElse",e)}}function Br(t,o){t&1&&G(0)}function Rr(t,o){if(t&1&&(d(0,"li",15),m(1,Hr,4,2,"ng-container",7)(2,Br,1,0,"ng-container",16),u()),t&2){let e=l(),n=e.$implicit,i=e.index,r=l(3);s("ngClass",$e(7,Or,n.visible===!1,n.visible))("tooltipOptions",n.tooltipOptions),g("data-automationid",n.automationId)("id",r.menuitemId(n,r.id,i)),c(),s("ngIf",!r.submenuHeaderTemplate&&!r._submenuHeaderTemplate),c(),s("ngTemplateOutlet",r.submenuHeaderTemplate??r._submenuHeaderTemplate)("ngTemplateOutletContext",Q(10,Ut,n))}}function jr(t,o){t&1&&h(0,"li",14)}function Wr(t,o){if(t&1){let e=P();d(0,"li",20),b("onMenuItemClick",function(i){v(e);let r=l(),a=r.$implicit,p=r.index,_=l().index,O=l(3);return y(O.itemClick(i,O.menuitemId(a,O.id,_,p)))}),u()}if(t&2){let e=l(),n=e.$implicit,i=e.index,r=l().index,a=l(3);k(n.styleClass),s("pMenuItemContent",n)("itemTemplate",a.itemTemplate??a._itemTemplate)("ngClass",$e(13,Si,a.focusedOptionId()&&a.menuitemId(n,a.id,r,i)===a.focusedOptionId(),a.disabled(n.disabled)))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),g("data-pc-section","menuitem")("aria-label",a.label(n.label))("data-p-focused",a.isItemFocused(a.menuitemId(n,a.id,r,i)))("data-p-disabled",a.disabled(n.disabled))("aria-disabled",a.disabled(n.disabled))("id",a.menuitemId(n,a.id,r,i))}}function Gr(t,o){if(t&1&&m(0,jr,1,0,"li",12)(1,Wr,1,16,"li",19),t&2){let e=o.$implicit,n=l().$implicit;s("ngIf",e.separator&&(e.visible!==!1||n.visible!==!1)),c(),s("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||n.visible!==!1))}}function Ur(t,o){if(t&1&&m(0,Lr,1,0,"li",12)(1,Rr,3,12,"li",13)(2,Gr,2,2,"ng-template",11),t&2){let e=o.$implicit;s("ngIf",e.separator&&e.visible!==!1),c(),s("ngIf",!e.separator),c(),s("ngForOf",e.items)}}function Qr(t,o){if(t&1&&m(0,Ur,3,3,"ng-template",11),t&2){let e=l(2);s("ngForOf",e.model)}}function qr(t,o){t&1&&h(0,"li",14)}function Kr(t,o){if(t&1){let e=P();d(0,"li",20),b("onMenuItemClick",function(i){v(e);let r=l(),a=r.$implicit,p=r.index,_=l(3);return y(_.itemClick(i,_.menuitemId(a,_.id,p)))}),u()}if(t&2){let e=l(),n=e.$implicit,i=e.index,r=l(3);k(n.styleClass),s("pMenuItemContent",n)("itemTemplate",r.itemTemplate??r._itemTemplate)("ngClass",$e(13,Si,r.focusedOptionId()&&r.menuitemId(n,r.id,i)===r.focusedOptionId(),r.disabled(n.disabled)))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),g("data-pc-section","menuitem")("aria-label",r.label(n.label))("data-p-focused",r.isItemFocused(r.menuitemId(n,r.id,i)))("data-p-disabled",r.disabled(n.disabled))("aria-disabled",r.disabled(n.disabled))("id",r.menuitemId(n,r.id,i))}}function Zr(t,o){if(t&1&&m(0,qr,1,0,"li",12)(1,Kr,1,16,"li",19),t&2){let e=o.$implicit;s("ngIf",e.separator&&e.visible!==!1),c(),s("ngIf",!e.separator&&e.visible!==!1)}}function Yr(t,o){if(t&1&&m(0,Zr,2,2,"ng-template",11),t&2){let e=l(2);s("ngForOf",e.model)}}function Xr(t,o){t&1&&G(0)}function Jr(t,o){if(t&1&&(d(0,"div",21),m(1,Xr,1,0,"ng-container",10),u()),t&2){let e=l(2);g("data-pc-section","end"),c(),s("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function ea(t,o){if(t&1){let e=P();d(0,"div",4,0),b("click",function(i){v(e);let r=l();return y(r.onOverlayClick(i))})("@overlayAnimation.start",function(i){v(e);let r=l();return y(r.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){v(e);let r=l();return y(r.onOverlayAnimationEnd(i))}),m(2,Pr,2,2,"div",5),d(3,"ul",6,1),b("focus",function(i){v(e);let r=l();return y(r.onListFocus(i))})("blur",function(i){v(e);let r=l();return y(r.onListBlur(i))})("keydown",function(i){v(e);let r=l();return y(r.onListKeyDown(i))}),m(5,Qr,1,1,null,7)(6,Yr,1,1,null,7),u(),m(7,Jr,2,2,"div",8),u()}if(t&2){let e=l();k(e.styleClass),s("ngClass",Q(18,Vr,e.popup))("ngStyle",e.style)("@overlayAnimation",Q(23,$r,$e(20,Fr,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),g("data-pc-name","menu")("id",e.id),c(2),s("ngIf",e.startTemplate??e._startTemplate),c(),g("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),c(2),s("ngIf",e.hasSubMenu()),c(),s("ngIf",!e.hasSubMenu()),c(),s("ngIf",e.endTemplate??e._endTemplate)}}var ta=({dt:t})=>`
.p-menu {
    background: ${t("menu.background")};
    color: ${t("menu.color")};
    border: 1px solid ${t("menu.border.color")};
    border-radius: ${t("menu.border.radius")};
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: ${t("menu.list.padding")};
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${t("menu.list.gap")};
}

.p-menu-item-content {
    transition: background ${t("menu.transition.duration")}, color ${t("menu.transition.duration")};
    border-radius: ${t("menu.item.border.radius")};
    color: ${t("menu.item.color")};
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("menu.item.padding")};
    gap: ${t("menu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: ${t("menu.item.icon.color")};
}

.p-menu-item.p-focus .p-menu-item-content {
    color: ${t("menu.item.focus.color")};
    background: ${t("menu.item.focus.background")};
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: ${t("menu.item.icon.focus.color")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: ${t("menu.item.focus.color")};
    background: ${t("menu.item.focus.background")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: ${t("menu.item.icon.focus.color")};
}

.p-menu-overlay {
    box-shadow: ${t("menu.shadow")};
}

.p-menu-submenu-label {
    background: ${t("menu.submenu.label.background")};
    padding: ${t("menu.submenu.label.padding")};
    color: ${t("menu.submenu.label.color")};
    font-weight: ${t("menu.submenu.label.font.weight")};
}

.p-menu-separator {
    border-top: 1px solid ${t("menu.separator.border.color")};
}

/* For PrimeNG */
.p-menu-overlay {
    position: absolute;
}
`,na={root:({props:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t})=>["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},wi=(()=>{class t extends Z{name="menu";theme=ta;classes=na;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Ei=(()=>{class t{platformId;sanitizer;constructor(e,n){this.platformId=e,this.sanitizer=n}transform(e){return!e||!re(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(n){return new(n||t)(j(ot,16),j(Bn,16))};static \u0275pipe=Fn({name:"safeHtml",type:t,pure:!0})}return t})(),ia=(()=>{class t{item;itemTemplate;onMenuItemClick=new E;menu;constructor(e){this.menu=e}onItemClick(e,n){this.onMenuItemClick.emit({originalEvent:e,item:n})}static \u0275fac=function(n){return new(n||t)(j(We(()=>Di)))};static \u0275cmp=S({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},attrs:cr,decls:5,vars:3,consts:[["itemContent",""],["htmlLabel",""],[1,"p-menu-item-content",3,"click"],[4,"ngIf"],["class","p-menu-item-link","pRipple","",3,"target","ngClass",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","class","p-menu-item-link","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",1,"p-menu-item-link",3,"target","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",1,"p-menu-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menu-item-icon",3,"ngClass","class","ngStyle",4,"ngIf"],["class","p-menu-item-label",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-icon",3,"ngClass","ngStyle"],[1,"p-menu-item-label"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,i){if(n&1){let r=P();d(0,"div",2),b("click",function(p){return v(r),y(i.onItemClick(p,i.item))}),m(1,fr,3,2,"ng-container",3)(2,br,2,4,"ng-container",3)(3,Ir,5,4,"ng-template",null,0,Ee),u()}n&2&&(g("data-pc-section","content"),c(),s("ngIf",!i.itemTemplate),c(),s("ngIf",i.itemTemplate))},dependencies:[ee,de,ue,me,pe,et,Ct,xt,Wt,tt,Mt,kt,$,Ei],encapsulation:2})}return t})(),Di=(()=>{class t extends L{overlayService;model;popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;onShow=new E;onHide=new E;onBlur=new E;onFocus=new E;listViewChild;containerViewChild;container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=Ce(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=ie(-1);selectedOptionIndex=ie(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=T(wi);constructor(e){super(),this.overlayService=e,this.id=this.id||ae("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),Ie(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&se.clear(e.element);break}}alignOverlay(){this.relativeAlign?Gn(this.container,this.target):Wn(this.container,this.target)}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Be(this.appendTo,this.container))}restoreOverlayAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&se.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!Yn()&&this.hide()}menuitemId(e,n,i,r){return e?.id??`${n}_${i}${r!==void 0?"_"+r:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(Ie(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)Ie(this.target),this.hide(),e.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(St(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let n=te(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&te(n,'a[data-pc-section="action"]');this.popup&&Ie(this.target),i?i.click():n&&n.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...St(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...St(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let n=St(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let i=e>=n.length?n.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(e,n){let{originalEvent:i,item:r}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),r.disabled){i.preventDefault();return}!r.url&&!r.routerLink&&i.preventDefault(),r.command&&r.command({originalEvent:i,item:r}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&re(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",n=>{let i=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),r=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&r&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&r&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&re(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&re(this.platformId)&&(this.scrollHandler=new lt(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&se.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(n=>n.visible!==!1):e.visible===!1}static \u0275fac=function(n){return new(n||t)(j(ii))};static \u0275cmp=S({type:t,selectors:[["p-menu"]],contentQueries:function(n,i,r){if(n&1&&(D(r,wr,4),D(r,Tr,4),D(r,Sr,4),D(r,Er,4),D(r,Dr,4),D(r,De,4)),n&2){let a;I(a=w())&&(i.startTemplate=a.first),I(a=w())&&(i.endTemplate=a.first),I(a=w())&&(i.headerTemplate=a.first),I(a=w())&&(i.itemTemplate=a.first),I(a=w())&&(i.submenuHeaderTemplate=a.first),I(a=w())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&(le(kr,5),le(Mr,5)),n&2){let r;I(r=w())&&(i.listViewChild=r.first),I(r=w())&&(i.containerViewChild=r.first)}},inputs:{model:"model",popup:[2,"popup","popup",f],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",f],baseZIndex:[2,"baseZIndex","baseZIndex",K],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",K]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[U([wi]),x],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"ngClass","class","ngStyle","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],["class","p-menu-start",4,"ngIf"],["role","menu",1,"p-menu-list","p-reset",3,"focus","blur","keydown"],[4,"ngIf"],["class","p-menu-end",4,"ngIf"],[1,"p-menu-start"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["class","p-menu-separator","role","separator",4,"ngIf"],["class","p-menu-submenu-label","pTooltip","","role","none",3,"ngClass","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menu-separator"],["pTooltip","","role","none",1,"p-menu-submenu-label",3,"ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["class","p-menu-item","pTooltip","","role","menuitem",3,"pMenuItemContent","itemTemplate","ngClass","ngStyle","class","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",1,"p-menu-item",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngClass","ngStyle","tooltipOptions"],[1,"p-menu-end"]],template:function(n,i){n&1&&m(0,ea,8,25,"div",3),n&2&&s("ngIf",!i.popup||i.visible)},dependencies:[ee,de,yt,ue,me,pe,et,ia,tt,Ft,Mt,$,Ei],encapsulation:2,data:{animation:[He("overlayAnimation",[ge(":enter",[fe({opacity:0,transform:"scaleY(0.8)"}),he("{{showTransitionParams}}")]),ge(":leave",[he("{{hideTransitionParams}}",fe({opacity:0}))])])]},changeDetection:0})}return t})(),ki=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({imports:[Di,$,$]})}return t})();var oa=["list"],ra=()=>({"p-panelmenu-submenu":!0}),Vi=t=>({"p-disabled":t}),Fi=()=>({exact:!1}),$i=t=>({$implicit:t});function aa(t,o){t&1&&h(0,"li",7)}function sa(t,o){if(t&1&&h(0,"AngleDownIcon",21),t&2){let e=l(6).$implicit,n=l();s("styleClass","p-panelmenu-submenu-icon")("ngStyle",n.getItemProp(e,"iconStyle"))}}function la(t,o){if(t&1&&h(0,"AngleRightIcon",21),t&2){let e=l(6).$implicit,n=l();s("styleClass","p-panelmenu-submenu-icon")("ngStyle",n.getItemProp(e,"iconStyle"))}}function ca(t,o){if(t&1&&(V(0),m(1,sa,1,2,"AngleDownIcon",20)(2,la,1,2,"AngleRightIcon",20),F()),t&2){let e=l(5).$implicit,n=l();c(),s("ngIf",n.isItemActive(e)),c(),s("ngIf",!n.isItemActive(e))}}function da(t,o){}function ua(t,o){t&1&&m(0,da,0,0,"ng-template")}function pa(t,o){if(t&1&&(V(0),m(1,ca,3,2,"ng-container",10)(2,ua,1,0,null,19),F()),t&2){let e=l(5);c(),s("ngIf",!e.panelMenu.submenuIconTemplate&&!e.panelMenu._submenuIconTemplate),c(),s("ngTemplateOutlet",e.panelMenu.submenuIconTemplate||e.panelMenu._submenuIconTemplate)}}function ma(t,o){if(t&1&&h(0,"span",22),t&2){let e=l(4).$implicit,n=l();s("ngClass",e.icon)("ngStyle",n.getItemProp(e,"iconStyle"))}}function ha(t,o){if(t&1&&(d(0,"span",23),M(1),u()),t&2){let e=l(4).$implicit,n=l();c(),X(n.getItemProp(e,"label"))}}function fa(t,o){if(t&1&&h(0,"span",24),t&2){let e=l(4).$implicit,n=l();s("innerHTML",n.getItemProp(e,"label"),Ge)}}function ga(t,o){if(t&1&&(d(0,"span",25),M(1),u()),t&2){let e=l(4).$implicit;s("ngClass",e.badgeStyleClass),c(),X(e.badge)}}function _a(t,o){if(t&1&&(d(0,"a",15),m(1,pa,3,2,"ng-container",10)(2,ma,1,2,"span",16)(3,ha,2,1,"span",17)(4,fa,1,1,"ng-template",null,1,Ee)(6,ga,2,2,"span",18),u()),t&2){let e=Te(5),n=l(3).$implicit,i=l();s("ngClass",Q(10,Vi,i.getItemProp(n,"disabled")))("target",i.getItemProp(n,"target")),g("href",i.getItemProp(n,"url"),_t)("data-pc-section","action")("tabindex",i.parentExpanded?"0":"-1"),c(),s("ngIf",i.isItemGroup(n)),c(),s("ngIf",n.icon),c(),s("ngIf",(n.item==null?null:n.item.escape)!==!1)("ngIfElse",e),c(3),s("ngIf",n.badge)}}function ba(t,o){if(t&1&&h(0,"AngleDownIcon",21),t&2){let e=l(6).$implicit,n=l();s("styleClass","p-panelmenu-submenu-icon")("ngStyle",n.getItemProp(e,"iconStyle"))}}function va(t,o){if(t&1&&h(0,"AngleRightIcon",21),t&2){let e=l(6).$implicit,n=l();s("styleClass","p-panelmenu-submenu-icon")("ngStyle",n.getItemProp(e,"iconStyle"))}}function ya(t,o){if(t&1&&(V(0),m(1,ba,1,2,"AngleDownIcon",20)(2,va,1,2,"AngleRightIcon",20),F()),t&2){let e=l(5).$implicit,n=l();c(),s("ngIf",n.isItemActive(e)),c(),s("ngIf",!n.isItemActive(e))}}function Ca(t,o){}function xa(t,o){t&1&&m(0,Ca,0,0,"ng-template")}function Ia(t,o){if(t&1&&(V(0),m(1,ya,3,2,"ng-container",10)(2,xa,1,0,null,19),F()),t&2){let e=l(5);c(),s("ngIf",!e.panelMenu.submenuIconTemplate&&!e.panelMenu._submenuIconTemplate),c(),s("ngTemplateOutlet",e.panelMenu.submenuIconTemplate&&e.panelMenu._submenuIconTemplate)}}function wa(t,o){if(t&1&&h(0,"span",22),t&2){let e=l(4).$implicit,n=l();s("ngClass",e.icon)("ngStyle",n.getItemProp(e,"iconStyle"))}}function Ta(t,o){if(t&1&&(d(0,"span",23),M(1),u()),t&2){let e=l(4).$implicit,n=l();c(),X(n.getItemProp(e,"label"))}}function Sa(t,o){if(t&1&&h(0,"span",24),t&2){let e=l(4).$implicit,n=l();s("innerHTML",n.getItemProp(e,"label"),Ge)}}function Ea(t,o){if(t&1&&(d(0,"span",25),M(1),u()),t&2){let e=l(4).$implicit,n=l();s("ngClass",n.getItemProp(e,"badgeStyleClass")),c(),X(n.getItemProp(e,"badge"))}}function Da(t,o){if(t&1&&(d(0,"a",26),m(1,Ia,3,2,"ng-container",10)(2,wa,1,2,"span",16)(3,Ta,2,1,"span",17)(4,Sa,1,1,"ng-template",null,2,Ee)(6,Ea,2,2,"span",18),u()),t&2){let e=Te(5),n=l(3).$implicit,i=l();s("routerLink",i.getItemProp(n,"routerLink"))("queryParams",i.getItemProp(n,"queryParams"))("routerLinkActive","p-panelmenu-item-link-active")("routerLinkActiveOptions",i.getItemProp(n,"routerLinkActiveOptions")||Se(20,Fi))("ngClass",Q(21,Vi,i.getItemProp(n,"disabled")))("target",i.getItemProp(n,"target"))("fragment",i.getItemProp(n,"fragment"))("queryParamsHandling",i.getItemProp(n,"queryParamsHandling"))("preserveFragment",i.getItemProp(n,"preserveFragment"))("skipLocationChange",i.getItemProp(n,"skipLocationChange"))("replaceUrl",i.getItemProp(n,"replaceUrl"))("state",i.getItemProp(n,"state")),g("title",i.getItemProp(n,"title"))("data-pc-section","action")("tabindex",i.parentExpanded?"0":"-1"),c(),s("ngIf",i.isItemGroup(n)),c(),s("ngIf",n.icon),c(),s("ngIf",i.getItemProp(n,"escape")!==!1)("ngIfElse",e),c(3),s("ngIf",n.badge)}}function ka(t,o){if(t&1&&(V(0),m(1,_a,7,12,"a",13)(2,Da,7,23,"a",14),F()),t&2){let e=l(2).$implicit,n=l();c(),s("ngIf",!n.getItemProp(e,"routerLink")),c(),s("ngIf",n.getItemProp(e,"routerLink"))}}function Ma(t,o){}function Va(t,o){t&1&&m(0,Ma,0,0,"ng-template")}function Fa(t,o){if(t&1&&(V(0),m(1,Va,1,0,null,27),F()),t&2){let e=l(2).$implicit,n=l();c(),s("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",Q(2,$i,e.item))}}function $a(t,o){if(t&1){let e=P();d(0,"p-panelmenu-sub",28),b("itemToggle",function(i){v(e);let r=l(3);return y(r.onItemToggle(i))}),u()}if(t&2){let e=l(2).$implicit,n=l();s("id",n.getItemId(e)+"_list")("panelId",n.panelId)("items",e==null?null:e.items)("itemTemplate",n.itemTemplate)("transitionOptions",n.transitionOptions)("focusedItemId",n.focusedItemId)("activeItemPath",n.activeItemPath)("level",n.level+1)("parentExpanded",!!n.parentExpanded&&n.isItemExpanded(e))}}function Oa(t,o){if(t&1){let e=P();d(0,"li",8)(1,"div",9),b("click",function(i){v(e);let r=l().$implicit,a=l();return y(a.onItemClick(i,r))}),m(2,ka,3,2,"ng-container",10)(3,Fa,2,4,"ng-container",10),u(),d(4,"div",11),m(5,$a,1,9,"p-panelmenu-sub",12),u()()}if(t&2){let e=l(),n=e.$implicit,i=e.index,r=l();k(r.getItemProp(n,"styleClass")),ze("p-hidden",n.visible===!1)("p-focus",r.isItemFocused(n)&&!r.isItemDisabled(n)),s("ngClass",r.getItemClass(n))("ngStyle",r.getItemProp(n,"style"))("pTooltip",r.getItemProp(n,"tooltip"))("tooltipOptions",r.getItemProp(n,"tooltipOptions")),g("id",r.getItemId(n))("aria-label",r.getItemProp(n,"label"))("aria-expanded",r.isItemGroup(n)?r.isItemActive(n):void 0)("aria-level",r.level+1)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(i))("data-p-disabled",r.isItemDisabled(n)),c(2),s("ngIf",!r.itemTemplate),c(),s("ngIf",r.itemTemplate),c(),s("@submenu",r.getAnimation(n)),c(),s("ngIf",r.isItemVisible(n)&&r.isItemGroup(n)&&r.isItemExpanded(n))}}function Aa(t,o){if(t&1&&m(0,aa,1,0,"li",5)(1,Oa,6,21,"li",6),t&2){let e=o.$implicit,n=l();s("ngIf",e.separator),c(),s("ngIf",!e.separator&&n.isItemVisible(e))}}var Pa=["submenu"],La=["submenuicon"],Na=["item"],za=["container"],Ha=(t,o)=>({"p-component p-panelmenu-header":!0,"p-panelmenu-header-active":t,"p-disabled":o}),Ba=t=>({"p-panelmenu-expanded":t});function Ra(t,o){t&1&&h(0,"ChevronDownIcon",20),t&2&&s("styleClass","p-panelmenu-submenu-icon")}function ja(t,o){t&1&&h(0,"ChevronRightIcon",20),t&2&&s("styleClass","p-panelmenu-submenu-icon")}function Wa(t,o){if(t&1&&(V(0),m(1,Ra,1,1,"ChevronDownIcon",19)(2,ja,1,1,"ChevronRightIcon",19),F()),t&2){let e=l(5).$implicit,n=l();c(),s("ngIf",n.isItemActive(e)),c(),s("ngIf",!n.isItemActive(e))}}function Ga(t,o){}function Ua(t,o){t&1&&m(0,Ga,0,0,"ng-template")}function Qa(t,o){if(t&1&&(V(0),m(1,Wa,3,2,"ng-container",9)(2,Ua,1,0,null,18),F()),t&2){let e=l(5);c(),s("ngIf",!e.submenuIconTemplate&&!e._submenuIconTemplate),c(),s("ngTemplateOutlet",e.submenuIconTemplate||e._submenuIconTemplate)}}function qa(t,o){if(t&1&&h(0,"span",21),t&2){let e=l(4).$implicit,n=l();s("ngClass",e.icon)("ngStyle",n.getItemProp(e,"iconStyle"))}}function Ka(t,o){if(t&1&&(d(0,"span",22),M(1),u()),t&2){let e=l(4).$implicit,n=l();c(),X(n.getItemProp(e,"label"))}}function Za(t,o){if(t&1&&h(0,"span",23),t&2){let e=l(4).$implicit,n=l();s("innerHTML",n.getItemProp(e,"label"),Ge)}}function Ya(t,o){if(t&1&&(d(0,"span",24),M(1),u()),t&2){let e=l(4).$implicit,n=l();s("ngClass",n.getItemProp(e,"badgeStyleClass")),c(),X(n.getItemProp(e,"badge"))}}function Xa(t,o){if(t&1&&(d(0,"a",14),m(1,Qa,3,2,"ng-container",9)(2,qa,1,2,"span",15)(3,Ka,2,1,"span",16)(4,Za,1,1,"ng-template",null,1,Ee)(6,Ya,2,2,"span",17),u()),t&2){let e=Te(5),n=l(3).$implicit,i=l();s("target",i.getItemProp(n,"target")),g("href",i.getItemProp(n,"url"),_t)("tabindex",-1)("title",i.getItemProp(n,"title"))("data-pc-section","headeraction"),c(),s("ngIf",i.isItemGroup(n)),c(),s("ngIf",n.icon),c(),s("ngIf",i.getItemProp(n,"escape")!==!1)("ngIfElse",e),c(3),s("ngIf",i.getItemProp(n,"badge"))}}function Ja(t,o){if(t&1&&(V(0),m(1,Xa,7,10,"a",13),F()),t&2){let e=l(2).$implicit,n=l();c(),s("ngIf",!n.getItemProp(e,"routerLink"))}}function es(t,o){t&1&&G(0)}function ts(t,o){t&1&&h(0,"ChevronDownIcon",20),t&2&&s("styleClass","p-panelmenu-submenu-icon")}function ns(t,o){t&1&&h(0,"ChevronRightIcon",20),t&2&&s("styleClass","p-panelmenu-submenu-icon")}function is(t,o){if(t&1&&(V(0),m(1,ts,1,1,"ChevronDownIcon",19)(2,ns,1,1,"ChevronRightIcon",19),F()),t&2){let e=l(4).$implicit,n=l();c(),s("ngIf",n.isItemActive(e)),c(),s("ngIf",!n.isItemActive(e))}}function os(t,o){}function rs(t,o){t&1&&m(0,os,0,0,"ng-template")}function as(t,o){if(t&1&&(V(0),m(1,is,3,2,"ng-container",9)(2,rs,1,0,null,18),F()),t&2){let e=l(4);c(),s("ngIf",!e.submenuIconTemplate&&!e._submenuIconTemplate),c(),s("ngTemplateOutlet",e.submenuIconTemplate||e._submenuIconTemplate)}}function ss(t,o){if(t&1&&h(0,"span",21),t&2){let e=l(3).$implicit,n=l();s("ngClass",e.icon)("ngStyle",n.getItemProp(e,"iconStyle"))}}function ls(t,o){if(t&1&&(d(0,"span",22),M(1),u()),t&2){let e=l(3).$implicit,n=l();c(),X(n.getItemProp(e,"label"))}}function cs(t,o){if(t&1&&h(0,"span",23),t&2){let e=l(3).$implicit,n=l();s("innerHTML",n.getItemProp(e,"label"),Ge)}}function ds(t,o){if(t&1&&(d(0,"span",24),M(1),u()),t&2){let e=l(3).$implicit,n=l();s("ngClass",n.getItemProp(e,"badgeStyleClass")),c(),X(n.getItemProp(e,"badge"))}}function us(t,o){if(t&1&&(d(0,"a",25),m(1,as,3,2,"ng-container",9)(2,ss,1,2,"span",15)(3,ls,2,1,"span",16)(4,cs,1,1,"ng-template",null,2,Ee)(6,ds,2,2,"span",17),u()),t&2){let e=Te(5),n=l(2).$implicit,i=l();s("routerLink",i.getItemProp(n,"routerLink"))("queryParams",i.getItemProp(n,"queryParams"))("routerLinkActive","p-panelmenu-item-link-active")("routerLinkActiveOptions",i.getItemProp(n,"routerLinkActiveOptions")||Se(18,Fi))("target",i.getItemProp(n,"target"))("fragment",i.getItemProp(n,"fragment"))("queryParamsHandling",i.getItemProp(n,"queryParamsHandling"))("preserveFragment",i.getItemProp(n,"preserveFragment"))("skipLocationChange",i.getItemProp(n,"skipLocationChange"))("replaceUrl",i.getItemProp(n,"replaceUrl"))("state",i.getItemProp(n,"state")),g("tabindex",-1)("data-pc-section","headeraction"),c(),s("ngIf",i.isItemGroup(n)),c(),s("ngIf",n.icon),c(),s("ngIf",i.getItemProp(n,"escape")!==!1)("ngIfElse",e),c(3),s("ngIf",i.getItemProp(n,"badge"))}}function ps(t,o){if(t&1){let e=P();d(0,"div",26),b("@rootItem.done",function(){v(e);let i=l(3);return y(i.onToggleDone())}),d(1,"div",27)(2,"p-panelMenuList",28),b("headerFocus",function(i){v(e);let r=l(3);return y(r.updateFocusedHeader(i))}),u()()()}if(t&2){let e=l(2),n=e.$implicit,i=e.index,r=l();s("@rootItem",r.getAnimation(n))("ngClass",Q(14,Ba,r.isItemActive(n))),g("id",r.getContentId(n,i))("aria-labelledby",r.getHeaderId(n,i))("data-pc-section","toggleablecontent"),c(),g("data-pc-section","menucontent"),c(),s("panelId",r.getPanelId(i,n))("items",r.getItemProp(n,"items"))("itemTemplate",r.itemTemplate||r._itemTemplate)("transitionOptions",r.transitionOptions)("root",!0)("activeItem",r.activeItem())("tabindex",r.tabindex)("parentExpanded",r.isItemActive(n))}}function ms(t,o){if(t&1){let e=P();d(0,"div",6)(1,"div",7),b("click",function(i){v(e);let r=l(),a=r.$implicit,p=r.index,_=l();return y(_.onHeaderClick(i,a,p))})("keydown",function(i){v(e);let r=l(),a=r.$implicit,p=r.index,_=l();return y(_.onHeaderKeyDown(i,a,p))}),d(2,"div",8),m(3,Ja,2,1,"ng-container",9)(4,es,1,0,"ng-container",10)(5,us,7,19,"a",11),u()(),m(6,ps,3,16,"div",12),u()}if(t&2){let e=l(),n=e.$implicit,i=e.index,r=l();s("ngClass",r.getItemProp(n,"headerClass"))("ngStyle",r.getItemProp(n,"style")),g("data-pc-section","panel"),c(),k(r.getItemProp(n,"styleClass")),s("ngClass",$e(23,Ha,r.isItemActive(n)&&!!n.items,r.isItemDisabled(n)))("ngStyle",r.getItemProp(n,"style"))("pTooltip",r.getItemProp(n,"tooltip"))("tabindex",0)("tooltipOptions",r.getItemProp(n,"tooltipOptions")),g("id",r.getHeaderId(n,i))("aria-expanded",r.isItemActive(n))("aria-label",r.getItemProp(n,"label"))("aria-controls",r.getContentId(n,i))("aria-disabled",r.isItemDisabled(n))("data-p-highlight",r.isItemActive(n))("data-p-disabled",r.isItemDisabled(n))("data-pc-section","header"),c(2),s("ngIf",!r.itemTemplate&&!r._itemTemplate),c(),s("ngTemplateOutlet",r.itemTemplate)("ngTemplateOutletContext",Q(26,$i,n)),c(),s("ngIf",r.getItemProp(n,"routerLink")),c(),s("ngIf",r.isItemGroup(n))}}function hs(t,o){if(t&1&&(V(0),m(1,ms,7,28,"div",5),F()),t&2){let e=o.$implicit,n=l();c(),s("ngIf",n.isItemVisible(e))}}var fs=({dt:t})=>`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: ${t("panelmenu.gap")};
}

.p-panelmenu-panel {
    background: ${t("panelmenu.panel.background")};
    border-width: ${t("panelmenu.panel.border.width")};
    border-style: solid;
    border-color: ${t("panelmenu.panel.border.color")};
    color: ${t("panelmenu.panel.color")};
    border-radius: ${t("panelmenu.panel.border.radius")};
    padding: ${t("panelmenu.panel.padding")};
}

.p-panelmenu-panel:first-child {
    border-width: ${t("panelmenu.panel.first.border.width")};
    border-start-start-radius: ${t("panelmenu.panel.first.top.border.radius")};
    border-start-end-radius: ${t("panelmenu.panel.first.top.border.radius")};
}

.p-panelmenu-panel:last-child {
    border-width: ${t("panelmenu.panel.last.border.width")};
    border-end-start-radius: ${t("panelmenu.panel.last.bottom.border.radius")};
    border-end-end-radius: ${t("panelmenu.panel.last.bottom.border.radius")};
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: ${t("panelmenu.item.border.radius")};
    transition: background ${t("panelmenu.transition.duration")}, color ${t("panelmenu.transition.duration")}, outline-color ${t("panelmenu.transition.duration")}, box-shadow ${t("panelmenu.transition.duration")};
    outline-color: transparent;
    color: ${t("panelmenu.item.color")};
}

.p-panelmenu-header-link {
    display: flex;
    gap: ${t("panelmenu.item.gap")};
    padding: ${t("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: ${t("panelmenu.item.icon.color")};
}

.p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.color")};
}

.p-panelmenu-header:not(.p-panelmenu-header-active)  .p-panelmenu-header-content .p-panelmenu-submenu-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: ${t("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: ${t("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 ${t("panelmenu.submenu.indent")};
    outline: 0;
    list-style: none;
}

.p-panelmenu-submenu:dir(rtl) {
    padding: 0 ${t("panelmenu.submenu.indent")} 0 0;
}

.p-panelmenu-item-link {
    display: flex;
    gap: ${t("panelmenu.item.gap")};
    padding: ${t("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: ${t("panelmenu.item.border.radius")};
    transition: background ${t("panelmenu.transition.duration")}, color ${t("panelmenu.transition.duration")}, outline-color ${t("panelmenu.transition.duration")}, box-shadow ${t("panelmenu.transition.duration")};
    color: ${t("panelmenu.item.color")};
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: ${t("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}


/*For PrimeNG*/

.p-panelmenu-item:not(.ng-animating) {
    overflow: hidden;
}

.p-panelmenu-panel {
    overflow: hidden;
}

`,gs={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:({instance:t,item:o})=>["p-panelmenu-header",{"p-panelmenu-header-active":t.isItemActive(o)&&!!o.items,"p-disabled":t.isItemDisabled(o)}],headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:({instance:t,processedItem:o})=>["p-panelmenu-item",{"p-focus":t.isItemFocused(o),"p-disabled":t.isItemDisabled(o)}],itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},Mi=(()=>{class t extends Z{name="panelmenu";theme=fs;classes=gs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var _s=(()=>{class t extends L{panelId;focusedItemId;items;itemTemplate;level=0;activeItemPath;root;tabindex;transitionOptions;parentExpanded;itemToggle=new E;menuFocus=new E;menuBlur=new E;menuKeyDown=new E;listViewChild;panelMenu=T(We(()=>Oi));getItemId(e){return e.item?.id??`${this.panelId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemClass(e){return{"p-panelmenu-item":!0,"p-disabled":this.isItemDisabled(e),"p-focus":this.isItemFocused(e)}}getItemProp(e,n,i){return e&&e.item?Rt(e.item[n],i):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isItemExpanded(e){return e.expanded}isItemActive(e){return this.isItemExpanded(e)||this.activeItemPath.some(n=>n&&n.key===e.key)}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return ne(e.items)}getAnimation(e){return this.isItemActive(e)?{value:"visible",params:{transitionParams:this.transitionOptions,height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemClick(e,n){this.isItemDisabled(n)||(this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.itemToggle.emit({processedItem:n,expanded:!this.isItemActive(n)}))}onItemToggle(e){this.itemToggle.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["p-panelMenuSub"],["p-panelmenu-sub"]],viewQuery:function(n,i){if(n&1&&le(oa,5),n&2){let r;I(r=w())&&(i.listViewChild=r.first)}},inputs:{panelId:"panelId",focusedItemId:"focusedItemId",items:"items",itemTemplate:"itemTemplate",level:[2,"level","level",K],activeItemPath:"activeItemPath",root:[2,"root","root",f],tabindex:[2,"tabindex","tabindex",K],transitionOptions:"transitionOptions",parentExpanded:[2,"parentExpanded","parentExpanded",f]},outputs:{itemToggle:"itemToggle",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeyDown:"menuKeyDown"},features:[x],decls:3,vars:7,consts:[["list",""],["htmlLabel",""],["htmlRouteLabel",""],["role","tree",3,"focusin","focusout","keydown","ngClass","tabindex"],["ngFor","",3,"ngForOf"],["class","p-menuitem-separator","role","separator",4,"ngIf"],["role","treeitem",3,"ngClass","class","p-hidden","p-focus","ngStyle","pTooltip","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menuitem-separator"],["role","treeitem",3,"ngClass","ngStyle","pTooltip","tooltipOptions"],[1,"p-panelmenu-item-content",3,"click"],[4,"ngIf"],[1,"p-toggleable-content"],[3,"id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded","itemToggle",4,"ngIf"],["class","p-panelmenu-item-link",3,"ngClass","target",4,"ngIf"],["class","p-panelmenu-item-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],[1,"p-panelmenu-item-link",3,"ngClass","target"],["class","p-panelmenu-submenu-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-panelmenu-item-label",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"styleClass","ngStyle"],[1,"p-panelmenu-submenu-icon",3,"ngClass","ngStyle"],[1,"p-panelmenu-item-label"],[1,"p-panelmenu-item-label",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-item-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemToggle","id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded"]],template:function(n,i){if(n&1){let r=P();d(0,"ul",3,0),b("focusin",function(p){return v(r),y(i.menuFocus.emit(p))})("focusout",function(p){return v(r),y(i.menuBlur.emit(p))})("keydown",function(p){return v(r),y(i.menuKeyDown.emit(p))}),m(2,Aa,2,2,"ng-template",4),u()}n&2&&(s("ngClass",Se(6,ra))("tabindex",-1),g("aria-activedescendant",i.focusedItemId)("data-pc-section","menu")("aria-hidden",!i.parentExpanded),c(2),s("ngForOf",i.items))},dependencies:[t,ee,de,yt,ue,me,pe,et,Ct,xt,tt,Ft,di,ui,$],encapsulation:2,data:{animation:[He("submenu",[It("hidden",fe({height:"0"})),It("visible",fe({height:"*"})),ge("visible <=> hidden",[he("{{transitionParams}}")]),ge("void => *",he(0))])]}})}return t})(),bs=(()=>{class t extends L{panelId;id;items;itemTemplate;parentExpanded;expanded;transitionOptions;root;tabindex;activeItem;itemToggle=new E;headerFocus=new E;subMenuViewChild;searchTimeout;searchValue;focused;focusedItem=ie(null);activeItemPath=ie([]);processedItems=ie([]);visibleItems=Ce(()=>{let e=this.processedItems();return this.flatItems(e)});get focusedItemId(){let e=this.focusedItem();return e&&e.item?.id?e.item.id:ne(this.focusedItem())?`${this.panelId}_${this.focusedItem().key}`:void 0}ngOnChanges(e){this.processedItems.set(this.createProcessedItems(e?.items?.currentValue||this.items||[]))}getItemProp(e,n){return e&&e.item?Rt(e.item[n]):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemActive(e){return this.activeItemPath().some(n=>n.key===e.parentKey)}isItemGroup(e){return ne(e.items)}isElementInPanel(e,n){let i=e.currentTarget.closest('[data-pc-section="panel"]');return i&&i.contains(n)}isItemMatched(e){return this.isValidItem(e)&&this.getItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isVisibleItem(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e)&&!e.separator}findFirstItem(){return this.visibleItems().find(e=>this.isValidItem(e))}findLastItem(){return hn(this.visibleItems(),e=>this.isValidItem(e))}findItemByEventTarget(e){let n=e;for(;n&&n.tagName?.toLowerCase()!=="li";)n=n?.parentNode;return n?.id&&this.visibleItems().find(i=>this.isValidItem(i)&&`${this.panelId}_${i.key}`===n.id)}createProcessedItems(e,n=0,i={},r=""){let a=[];return e&&e.forEach((p,_)=>{let O=(r!==""?r+"_":"")+_,A={icon:p.icon,expanded:p.expanded,separator:p.separator,item:p,index:_,level:n,key:O,parent:i,parentKey:r};A.items=this.createProcessedItems(p.items,n+1,A,O),a.push(A)}),a}findProcessedItemByItemKey(e,n,i=0){if(n=n||this.processedItems(),n&&n.length)for(let r=0;r<n.length;r++){let a=n[r];if(this.getItemProp(a,"key")===e)return a;let p=this.findProcessedItemByItemKey(e,a.items,i+1);if(p)return p}}flatItems(e,n=[]){return e&&e.forEach(i=>{this.isVisibleItem(i)&&(n.push(i),this.flatItems(i.items,n))}),n}changeFocusedItem(e){let{originalEvent:n,processedItem:i,focusOnNext:r,selfCheck:a,allowHeaderFocus:p=!0}=e;ne(this.focusedItem())&&this.focusedItem().key!==i.key?(this.focusedItem.set(i),this.scrollInView()):p&&this.headerFocus.emit({originalEvent:n,focusOnNext:r,selfCheck:a})}scrollInView(){let e=te(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`);e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"nearest"})}onFocus(e){if(!this.focused){this.focused=!0;let n=this.focusedItem()||(this.isElementInPanel(e,e.relatedTarget)?this.findItemByEventTarget(e.target)||this.findFirstItem():this.findLastItem());e.relatedTarget!==null&&this.focusedItem.set(n)}}onBlur(e){let n=e.relatedTarget;this.focused&&!this.el.nativeElement.contains(n)&&(this.focused=!1,this.focusedItem.set(null),this.searchValue="")}onItemToggle(e){let{processedItem:n,expanded:i}=e;n.item&&(n.item.expanded=!n.item.expanded),this.processedItems.set(this.createProcessedItems(this.items||[],0,{},""));let r=this.activeItemPath().filter(a=>a.parentKey!==n.parentKey);i&&r.push(n),this.activeItemPath.set(r),this.focusedItem.set(n)}onKeyDown(e){let n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&ti(e.key)&&this.searchItems(e,e.key);break}}onArrowDownKey(e){let n=ne(this.focusedItem())?this.findNextItem(this.focusedItem()):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:n,focusOnNext:!0}),e.preventDefault()}onArrowUpKey(e){let n=ne(this.focusedItem())?this.findPrevItem(this.focusedItem()):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:n,selfCheck:!0}),e.preventDefault()}onArrowLeftKey(e){if(ne(this.focusedItem())){if(this.activeItemPath().some(i=>i.key===this.focusedItem().key)){let i=this.activeItemPath().filter(r=>r.key!==this.focusedItem().key);this.activeItemPath.set(i)}else{let i=ne(this.focusedItem().parent)?this.focusedItem().parent:this.focusedItem();this.focusedItem.set(i)}e.preventDefault()}}onArrowRightKey(e){if(ne(this.focusedItem())){if(this.isItemGroup(this.focusedItem()))if(this.activeItemPath().some(r=>r.key===this.focusedItem().key))this.onArrowDownKey(e);else{let r=this.activeItemPath().filter(a=>a.parentKey!==this.focusedItem().parentKey);r.push(this.focusedItem()),this.activeItemPath.set(r)}e.preventDefault()}}onHomeKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()}onEndKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()}onEnterKey(e){if(ne(this.focusedItem())){let n=te(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=n&&(te(n,'[data-pc-section="action"]')||te(n,"a,button"));i?i.click():n&&n.click()}e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextItem(e){let n=this.visibleItems().findIndex(r=>r.key===e.key);return(n<this.visibleItems().length-1?this.visibleItems().slice(n+1).find(r=>this.isValidItem(r)):void 0)||e}findPrevItem(e){let n=this.visibleItems().findIndex(r=>r.key===e.key);return(n>0?hn(this.visibleItems().slice(0,n),r=>this.isValidItem(r)):void 0)||e}searchItems(e,n){this.searchValue=(this.searchValue||"")+n;let i=null,r=!1;if(ne(this.focusedItem())){let a=this.visibleItems().findIndex(p=>p.key===this.focusedItem().key);i=this.visibleItems().slice(a).find(p=>this.isItemMatched(p)),i=Ae(i)?this.visibleItems().slice(0,a).find(p=>this.isItemMatched(p)):i}else i=this.visibleItems().find(a=>this.isItemMatched(a));return ne(i)&&(r=!0),Ae(i)&&Ae(this.focusedItem())&&(i=this.findFirstItem()),ne(i)&&this.changeFocusedItem({originalEvent:e,processedItem:i,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["p-panelMenuList"],["p-panel-menu-list"]],viewQuery:function(n,i){if(n&1&&le(Pa,5),n&2){let r;I(r=w())&&(i.subMenuViewChild=r.first)}},inputs:{panelId:"panelId",id:"id",items:"items",itemTemplate:"itemTemplate",parentExpanded:[2,"parentExpanded","parentExpanded",f],expanded:[2,"expanded","expanded",f],transitionOptions:"transitionOptions",root:[2,"root","root",f],tabindex:[2,"tabindex","tabindex",K],activeItem:"activeItem"},outputs:{itemToggle:"itemToggle",headerFocus:"headerFocus"},features:[x,ve],decls:2,vars:10,consts:[["submenu",""],[3,"itemToggle","keydown","menuFocus","menuBlur","root","id","panelId","tabindex","itemTemplate","focusedItemId","activeItemPath","transitionOptions","items","parentExpanded"]],template:function(n,i){if(n&1){let r=P();d(0,"p-panelmenu-sub",1,0),b("itemToggle",function(p){return v(r),y(i.onItemToggle(p))})("keydown",function(p){return v(r),y(i.onKeyDown(p))})("menuFocus",function(p){return v(r),y(i.onFocus(p))})("menuBlur",function(p){return v(r),y(i.onBlur(p))}),u()}n&2&&s("root",!0)("id",i.panelId+"_list")("panelId",i.panelId)("tabindex",i.tabindex)("itemTemplate",i.itemTemplate)("focusedItemId",i.focused?i.focusedItemId:void 0)("activeItemPath",i.activeItemPath())("transitionOptions",i.transitionOptions)("items",i.processedItems())("parentExpanded",i.parentExpanded)},dependencies:[ee,_s,et,tt,$],encapsulation:2,changeDetection:0})}return t})(),Oi=(()=>{class t extends L{model;style;styleClass;multiple=!1;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";id;tabindex=0;containerViewChild;submenuIconTemplate;itemTemplate;templates;_submenuIconTemplate;_itemTemplate;animating;activeItem=ie(null);_componentStyle=T(Mi);ngOnInit(){super.ngOnInit(),this.id=this.id||ae("pn_id_")}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}collapseAll(){for(let e of this.model)e.expanded&&(e.expanded=!1);this.cd.detectChanges()}onToggleDone(){this.animating=!1,this.cd.markForCheck()}changeActiveItem(e,n,i,r=!1){if(!this.isItemDisabled(n)){let a=r?n:this.activeItem&&Bt(n,this.activeItem)?null:n;this.activeItem.set(a)}}getAnimation(e){return e.expanded?{value:"visible",params:{transitionParams:this.animating?this.transitionOptions:"0ms",height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getItemProp(e,n){return e?Rt(e[n]):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isItemActive(e){return e.expanded}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemGroup(e){return ne(e.items)}getPanelId(e,n){return n&&n.id?n.id:`${this.id}_${e}`}getHeaderId(e,n){return e.id?e.id+"_header":`${this.getPanelId(n)}_header`}getContentId(e,n){return e.id?e.id+"_content":`${this.getPanelId(n)}_content`}updateFocusedHeader(e){let{originalEvent:n,focusOnNext:i,selfCheck:r}=e,a=n.currentTarget.closest('[data-pc-section="panel"]'),p=r?te(a,'[data-pc-section="header"]'):i?this.findNextHeader(a):this.findPrevHeader(a);p?this.changeFocusedHeader(n,p):i?this.onHeaderHomeKey(n):this.onHeaderEndKey(n)}changeFocusedHeader(e,n){n&&Ie(n)}findNextHeader(e,n=!1){let i=n?e:e.nextElementSibling,r=te(i,'[data-pc-section="header"]');return r?Et(r,"data-p-disabled")?this.findNextHeader(r.parentElement):r:null}findPrevHeader(e,n=!1){let i=n?e:e.previousElementSibling,r=te(i,'[data-pc-section="header"]');return r?Et(r,"data-p-disabled")?this.findPrevHeader(r.parentElement):r:null}findFirstHeader(){return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild,!0)}findLastHeader(){return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild,!0)}onHeaderClick(e,n,i){if(this.isItemDisabled(n)){e.preventDefault();return}if(n.command&&n.command({originalEvent:e,item:n}),!this.multiple)for(let r of this.model)n!==r&&r.expanded&&(r.expanded=!1);n.expanded=!n.expanded,this.changeActiveItem(e,n,i),this.animating=!0,Ie(e.currentTarget)}onHeaderKeyDown(e,n,i){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"Space":this.onHeaderEnterKey(e,n,i);break;default:break}}onHeaderArrowDownKey(e){let n=Et(e.currentTarget,"data-p-highlight")===!0?te(e.currentTarget.nextElementSibling,'[data-pc-section="menu"]'):null;n?Ie(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()}onHeaderArrowUpKey(e){let n=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),i=Et(n,"data-p-highlight")===!0?te(n.nextElementSibling,'[data-pc-section="menu"]'):null;i?Ie(i):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()}onHeaderHomeKey(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()}onHeaderEndKey(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()}onHeaderEnterKey(e,n,i){let r=te(e.currentTarget,'[data-pc-section="headeraction"]');r?r.click():this.onHeaderClick(e,n,i),e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["p-panelMenu"],["p-panelmenu"],["p-panel-menu"]],contentQueries:function(n,i,r){if(n&1&&(D(r,La,4),D(r,Na,4),D(r,De,4)),n&2){let a;I(a=w())&&(i.submenuIconTemplate=a.first),I(a=w())&&(i.itemTemplate=a.first),I(a=w())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&le(za,5),n&2){let r;I(r=w())&&(i.containerViewChild=r.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",multiple:[2,"multiple","multiple",f],transitionOptions:"transitionOptions",id:"id",tabindex:[2,"tabindex","tabindex",K]},features:[U([Mi]),x],decls:3,vars:5,consts:[["container",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle","ngClass"],[4,"ngFor","ngForOf"],["class","p-panelmenu-panel",3,"ngClass","ngStyle",4,"ngIf"],[1,"p-panelmenu-panel",3,"ngClass","ngStyle"],["role","button",3,"click","keydown","ngClass","ngStyle","pTooltip","tabindex","tooltipOptions"],[1,"p-panelmenu-header-content"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["class","p-panelmenu-content-container","role","region",3,"ngClass",4,"ngIf"],["class","p-panelmenu-header-link",3,"target",4,"ngIf"],[1,"p-panelmenu-header-link",3,"target"],["class","p-panelmenu-submenu-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-panelmenu-header-label",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-panelmenu-submenu-icon",3,"ngClass","ngStyle"],[1,"p-panelmenu-header-label"],[1,"p-panelmenu-header-label",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["role","region",1,"p-panelmenu-content-container",3,"ngClass"],[1,"p-panelmenu-content"],[3,"headerFocus","panelId","items","itemTemplate","transitionOptions","root","activeItem","tabindex","parentExpanded"]],template:function(n,i){n&1&&(d(0,"div",3,0),m(2,hs,2,1,"ng-container",4),u()),n&2&&(k(i.styleClass),s("ngStyle",i.style)("ngClass","p-panelmenu p-component"),c(2),s("ngForOf",i.model))},dependencies:[ee,de,yt,ue,me,pe,bs,et,Ct,xt,tt,Ft,pi,mi,$],encapsulation:2,data:{animation:[He("rootItem",[It("hidden",fe({height:"0",visibility:"hidden"})),It("visible",fe({height:"*",visibility:"*"})),ge("visible <=> hidden",[he("{{transitionParams}}")]),ge("void => *",he(0))])]},changeDetection:0})}return t})(),Ai=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({imports:[Oi,$,$]})}return t})();var vs=["header"],ys=["title"],Cs=["subtitle"],xs=["content"],Is=["footer"],ws=["*",[["p-header"]],[["p-footer"]]],Ts=["*","p-header","p-footer"];function Ss(t,o){t&1&&G(0)}function Es(t,o){if(t&1&&(d(0,"div",8),ke(1,1),m(2,Ss,1,0,"ng-container",6),u()),t&2){let e=l();c(2),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Ds(t,o){if(t&1&&(V(0),M(1),F()),t&2){let e=l(2);c(),X(e.header)}}function ks(t,o){t&1&&G(0)}function Ms(t,o){if(t&1&&(d(0,"div",9),m(1,Ds,2,1,"ng-container",10)(2,ks,1,0,"ng-container",6),u()),t&2){let e=l();c(),s("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),c(),s("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function Vs(t,o){if(t&1&&(V(0),M(1),F()),t&2){let e=l(2);c(),X(e.subheader)}}function Fs(t,o){t&1&&G(0)}function $s(t,o){if(t&1&&(d(0,"div",11),m(1,Vs,2,1,"ng-container",10)(2,Fs,1,0,"ng-container",6),u()),t&2){let e=l();c(),s("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),c(),s("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function Os(t,o){t&1&&G(0)}function As(t,o){t&1&&G(0)}function Ps(t,o){if(t&1&&(d(0,"div",12),ke(1,2),m(2,As,1,0,"ng-container",6),u()),t&2){let e=l();c(2),s("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var Ls=({dt:t})=>`
.p-card {
    background: ${t("card.background")};
    color: ${t("card.color")};
    box-shadow: ${t("card.shadow")};
    border-radius: ${t("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${t("card.caption.gap")};
}

.p-card-body {
    padding: ${t("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("card.body.gap")};
}

.p-card-title {
    font-size: ${t("card.title.font.size")};
    font-weight: ${t("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${t("card.subtitle.color")};
}
`,Ns={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Pi=(()=>{class t extends Z{name="card";theme=Ls;classes=Ns;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var fn=(()=>{class t extends L{header;subheader;set style(e){Bt(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=ie(null);_componentStyle=T(Pi);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["p-card"]],contentQueries:function(n,i,r){if(n&1&&(D(r,oi,5),D(r,ri,5),D(r,vs,4),D(r,ys,4),D(r,Cs,4),D(r,xs,4),D(r,Is,4),D(r,De,4)),n&2){let a;I(a=w())&&(i.headerFacet=a.first),I(a=w())&&(i.footerFacet=a.first),I(a=w())&&(i.headerTemplate=a.first),I(a=w())&&(i.titleTemplate=a.first),I(a=w())&&(i.subtitleTemplate=a.first),I(a=w())&&(i.contentTemplate=a.first),I(a=w())&&(i.footerTemplate=a.first),I(a=w())&&(i.templates=a)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[U([Pi]),x],ngContentSelectors:Ts,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(n,i){n&1&&(qe(ws),d(0,"div",0),m(1,Es,3,1,"div",1),d(2,"div",2),m(3,Ms,3,2,"div",3)(4,$s,3,2,"div",4),d(5,"div",5),ke(6),m(7,Os,1,0,"ng-container",6),u(),m(8,Ps,3,1,"div",7),u()()),n&2&&(k(i.styleClass),s("ngClass","p-card p-component")("ngStyle",i._style()),g("data-pc-name","card"),c(),s("ngIf",i.headerFacet||i.headerTemplate||i._headerTemplate),c(2),s("ngIf",i.header||i.titleTemplate||i._titleTemplate),c(),s("ngIf",i.subheader||i.subtitleTemplate||i._subtitleTemplate),c(3),s("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),c(),s("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[ee,de,ue,me,pe,$],encapsulation:2,changeDetection:0})}return t})(),Li=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({imports:[fn,$,$]})}return t})();var Gi=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(j(ln),j(gt))};static \u0275dir=Y({type:t})}return t})(),Ui=(()=>{class t extends Gi{static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=Y({type:t,features:[x]})}return t})(),yn=new it("");var Hs={provide:yn,useExisting:We(()=>pt),multi:!0};function Bs(){let t=dn()?dn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Rs=new it(""),pt=(()=>{class t extends Gi{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Bs())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(j(ln),j(gt),j(Rs,8))};static \u0275dir=Y({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&b("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[U([Hs]),x]})}return t})();var js=new it(""),Ws=new it("");function Qi(t){return t!=null}function qi(t){return $n(t)?En(t):t}function Ki(t){let o={};return t.forEach(e=>{o=e!=null?B(B({},o),e):o}),Object.keys(o).length===0?null:o}function Zi(t,o){return o.map(e=>e(t))}function Gs(t){return!t.validate}function Yi(t){return t.map(o=>Gs(o)?o:e=>o.validate(e))}function Us(t){if(!t)return null;let o=t.filter(Qi);return o.length==0?null:function(e){return Ki(Zi(e,o))}}function Xi(t){return t!=null?Us(Yi(t)):null}function Qs(t){if(!t)return null;let o=t.filter(Qi);return o.length==0?null:function(e){let n=Zi(e,o).map(qi);return kn(n).pipe(Dn(Ki))}}function Ji(t){return t!=null?Qs(Yi(t)):null}function Ni(t,o){return t===null?[o]:Array.isArray(t)?[...t,o]:[t,o]}function qs(t){return t._rawValidators}function Ks(t){return t._rawAsyncValidators}function gn(t){return t?Array.isArray(t)?t:[t]:[]}function qt(t,o){return Array.isArray(t)?t.includes(o):t===o}function zi(t,o){let e=gn(o);return gn(t).forEach(i=>{qt(e,i)||e.push(i)}),e}function Hi(t,o){return gn(o).filter(e=>!qt(t,e))}var Kt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=Xi(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=Ji(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},_n=class extends Kt{name;get formDirective(){return null}get path(){return null}},nt=class extends Kt{_parent=null;name=null;valueAccessor=null},bn=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Zs={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Up=oe(B({},Zs),{"[class.ng-submitted]":"isSubmitted"}),Yt=(()=>{class t extends bn{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(j(nt,2))};static \u0275dir=Y({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&ze("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[x]})}return t})();var $t="VALID",Qt="INVALID",ct="PENDING",Ot="DISABLED",ut=class{},Zt=class extends ut{value;source;constructor(o,e){super(),this.value=o,this.source=e}},At=class extends ut{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},Pt=class extends ut{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},dt=class extends ut{status;source;constructor(o,e){super(),this.status=o,this.source=e}};function Ys(t){return(Xt(t)?t.validators:t)||null}function Xs(t){return Array.isArray(t)?Xi(t):t||null}function Js(t,o){return(Xt(o)?o.asyncValidators:t)||null}function el(t){return Array.isArray(t)?Ji(t):t||null}function Xt(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var vn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return Je(this.statusReactive)}set status(o){Je(()=>this.statusReactive.set(o))}_status=Ce(()=>this.statusReactive());statusReactive=ie(void 0);get valid(){return this.status===$t}get invalid(){return this.status===Qt}get pending(){return this.status==ct}get disabled(){return this.status===Ot}get enabled(){return this.status!==Ot}errors;get pristine(){return Je(this.pristineReactive)}set pristine(o){Je(()=>this.pristineReactive.set(o))}_pristine=Ce(()=>this.pristineReactive());pristineReactive=ie(!0);get dirty(){return!this.pristine}get touched(){return Je(this.touchedReactive)}set touched(o){Je(()=>this.touchedReactive.set(o))}_touched=Ce(()=>this.touchedReactive());touchedReactive=ie(!1);get untouched(){return!this.touched}_events=new Sn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(zi(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(zi(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Hi(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Hi(o,this._rawAsyncValidators))}hasValidator(o){return qt(this._rawValidators,o)}hasAsyncValidator(o){return qt(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(oe(B({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new Pt(!0,n))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:n})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,n),e&&o.emitEvent!==!1&&this._events.next(new Pt(!1,n))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(oe(B({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new At(!1,n))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,n),e&&o.emitEvent!==!1&&this._events.next(new At(!0,n))}markAsPending(o={}){this.status=ct;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new dt(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(oe(B({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Ot,this.errors=null,this._forEachChild(i=>{i.disable(oe(B({},o),{onlySelf:!0}))}),this._updateValue();let n=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Zt(this.value,n)),this._events.next(new dt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(oe(B({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=$t,this._forEachChild(n=>{n.enable(oe(B({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(oe(B({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o,e){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===$t||this.status===ct)&&this._runAsyncValidator(n,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Zt(this.value,e)),this._events.next(new dt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(oe(B({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ot:$t}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=ct,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:o!==!1};let n=qi(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(o,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,n){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||n)&&this._events.next(new dt(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,n)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?Ot:this.errors?Qt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ct)?ct:this._anyControlsHaveStatus(Qt)?Qt:$t}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,e),i&&this._events.next(new At(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new Pt(this.touched,e)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Xt(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let e=this._parent&&this._parent.dirty;return!o&&!!e&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=Xs(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=el(this._rawAsyncValidators)}};var eo=new it("",{providedIn:"root",factory:()=>Cn}),Cn="always";function tl(t,o){return[...o.path,t]}function nl(t,o,e=Cn){ol(t,o),o.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(t.disabled),rl(t,o),sl(t,o),al(t,o),il(t,o)}function Bi(t,o){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function il(t,o){if(o.valueAccessor.setDisabledState){let e=n=>{o.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),o._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function ol(t,o){let e=qs(t);o.validator!==null?t.setValidators(Ni(e,o.validator)):typeof e=="function"&&t.setValidators([e]);let n=Ks(t);o.asyncValidator!==null?t.setAsyncValidators(Ni(n,o.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Bi(o._rawValidators,i),Bi(o._rawAsyncValidators,i)}function rl(t,o){o.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&to(t,o)})}function al(t,o){o.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&to(t,o),t.updateOn!=="submit"&&t.markAsTouched()})}function to(t,o){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function sl(t,o){let e=(n,i)=>{o.valueAccessor.writeValue(n),i&&o.viewToModelUpdate(n)};t.registerOnChange(e),o._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function ll(t,o){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function cl(t){return Object.getPrototypeOf(t.constructor)===Ui}function dl(t,o){if(!o)return null;Array.isArray(o);let e,n,i;return o.forEach(r=>{r.constructor===pt?e=r:cl(r)?n=r:i=r}),i||n||e||null}function Ri(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function ji(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ul=class extends vn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,n){super(Ys(e),Js(n,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Xt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ji(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Ri(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Ri(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){ji(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var pl={provide:nt,useExisting:We(()=>Re)},Wi=Promise.resolve(),Re=(()=>{class t extends nt{_changeDetectorRef;callSetDisabledState;control=new ul;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new E;constructor(e,n,i,r,a,p){super(),this._changeDetectorRef=a,this.callSetDisabledState=p,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=dl(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ll(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){nl(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Wi.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,i=n!==0&&f(n);Wi.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?tl(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(j(_n,9),j(js,10),j(Ws,10),j(yn,10),j(zn,8),j(eo,8))};static \u0275dir=Y({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[U([pl]),x,ve]})}return t})();var ml={provide:yn,useExisting:We(()=>xn),multi:!0},xn=(()=>{class t extends Ui{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=Y({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,i){n&1&&b("input",function(a){return i.onChange(a.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[U([ml]),x]})}return t})();var hl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({})}return t})();var mt=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:eo,useValue:e.callSetDisabledState??Cn}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({imports:[hl]})}return t})();var fl=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${t("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,gl={root:({instance:t,props:o})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant==="filled","p-inputtext-fluid":o.fluid}]},no=(()=>{class t extends Z{name="inputtext";theme=fl;classes=gl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var ht=(()=>{class t extends L{ngModel;variant;fluid;pSize;filled;_componentStyle=T(no);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Ae(this.fluid)?!!n:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||t)(j(Re,8))};static \u0275dir=Y({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,i){n&1&&b("input",function(a){return i.onInput(a)}),n&2&&ze("p-filled",i.filled)("p-variant-filled",(i.variant??(i.config.inputStyle()||i.config.inputVariant()))==="filled")("p-inputtext-fluid",i.hasFluid)("p-inputtext-sm",i.pSize==="small")("p-inputfield-sm",i.pSize==="small")("p-inputtext-lg",i.pSize==="large")("p-inputfield-lg",i.pSize==="large")},inputs:{variant:"variant",fluid:[2,"fluid","fluid",f],pSize:"pSize"},features:[U([no]),x]})}return t})(),Xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({})}return t})();var en=class t{messageService=T(ni);load(o){try{let e=localStorage.getItem(o);return e?{status:200,data:JSON.parse(e)}:(localStorage.setItem(o,"[]"),{status:200,data:[]})}catch(e){return console.error("Error:",e),{status:404,data:null}}}save(o,e){try{let n=this.load(o).data;return n.push(e),localStorage.setItem(o,JSON.stringify(n)),this.messageService.add({severity:"success",summary:"Success",detail:"Record added"}),{status:200,data:e}}catch(n){return console.error("Error:",n),this.messageService.add({severity:"error",summary:"Error",detail:"Error while adding record"}),{status:404,data:null}}}update(o,e,n=!1){try{let i=this.load(o).data;if(Array.isArray(i)){let r=i.map(a=>a.id===e.id?e:a);localStorage.setItem(o,JSON.stringify(r))}return n||this.messageService.add({severity:"success",summary:"Success",detail:"Record sucesfully updated"}),{status:200,data:e}}catch(i){return console.error("Error:",i),this.messageService.add({severity:"error",summary:"Error",detail:"Error while updating record"}),{status:404,data:null}}}delete(o,e){try{let n=this.load(o).data;return Array.isArray(n)&&localStorage.setItem(o,JSON.stringify(n.filter(i=>i.id!==e))),this.messageService.add({severity:"success",summary:"Success",detail:"Record sucesfully deleted"}),{status:200,data:null}}catch{return this.messageService.add({severity:"error",summary:"Error",detail:"Error while deleting record"}),{status:404,data:null}}}getById(o,e,n){try{let i=this.load(o).data;if(n)this.isValidId(o,n)?localStorage.setItem(e,n.toString()):localStorage.setItem(e,"");else{let r=localStorage.getItem(e);r&&r!==""&&this.isValidId(o,Number(r))?localStorage.setItem(e,r):localStorage.setItem(e,"")}return Array.isArray(i)?{status:200,data:i.find(r=>r.id===Number(localStorage.getItem(e)))}:{status:200,data:null}}catch(i){return console.error("Error:",i),{status:404,data:null}}}isValidId(o,e){if(!e)return!1;let n=this.load(o);if(Array.isArray(n.data)){let i=n.data.find(r=>r.id===e);return!!(i&&i.id)}else return!1}getBy(o,e,n){try{let i=this.load(o).data,r=[];return Array.isArray(i)&&(r=i.filter(a=>typeof a[e]=="string"&&a[e].toLowerCase().includes(n.toLowerCase()))),{status:200,data:r}}catch(i){return console.error("Error:",i),{status:404,data:[]}}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ne=class t{notes=ie([]);localstorage=T(en);selected=ie(void 0);load(){let o=this.localstorage.load("notes").data;Array.isArray(o)&&(this.notes.set(o),this.notes().length||this.addNotes()),this.selectNote(null)}selectNote(o){this.selected()?.isLocked&&this.updateNote("canSee",!1,!0),this.selected.set(this.localstorage.getById("notes","selected-note",o).data)}addNotes(){let o=new Date,e={id:o.getTime(),title:"New note",content:"Write...",lastModified:o,creationDate:o,isLocked:!1,canSee:!0,passward:void 0},n=this.localstorage.save("notes",e).data;n&&(this.notes.update(i=>[...i,n]),this.selectNote(n.id))}search(o){let e=this.localstorage.getBy("notes","title",o.value).data;this.notes.set(e)}updateNote(o,e,n=!1){let i=this.selected();if(!i)return;let r=oe(B({},i),{[o]:e,lastModified:new Date}),a=this.localstorage.update("notes",r,n).data;this.notes.update(p=>p.map(_=>_.id===a.id?a:_)),this.selected.set(a)}updateAllNote(o){let e=this.localstorage.update("notes",o).data;this.notes.update(n=>n.map(i=>i.id===e.id?e:i)),this.selected.set(e)}deleteNote(o){this.localstorage.delete("notes",o.id),this.notes.update(e=>e.filter(n=>n.id!==o.id)),this.selectNote(null)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})};var _l=({dt:t})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("textarea.color")};
    background: ${t("textarea.background")};
    padding: ${t("textarea.padding.y")} ${t("textarea.padding.x")};
    border: 1px solid ${t("textarea.border.color")};
    transition: background ${t("textarea.transition.duration")}, color ${t("textarea.transition.duration")}, border-color ${t("textarea.transition.duration")}, outline-color ${t("textarea.transition.duration")}, box-shadow ${t("textarea.transition.duration")};
    appearance: none;
    border-radius: ${t("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${t("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${t("textarea.focus.border.color")};
    box-shadow: ${t("textarea.focus.ring.shadow")};
    outline: ${t("textarea.focus.ring.width")} ${t("textarea.focus.ring.style")} ${t("textarea.focus.ring.color")};
    outline-offset: ${t("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${t("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${t("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${t("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${t("textarea.disabled.background")};
    color: ${t("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${t("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${t("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${t("textarea.sm.font.size")};
    padding-block: ${t("textarea.sm.padding.y")};
    padding-inline: ${t("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${t("textarea.lg.font.size")};
    padding-block: ${t("textarea.lg.padding.y")};
    padding-inline: ${t("textarea.lg.padding.x")};
}
`,bl={root:({instance:t,props:o})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":o.autoResize,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":o.fluid}]},io=(()=>{class t extends Z{name="textarea";theme=_l;classes=bl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var oo=(()=>{class t extends L{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new E;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=T(io);constructor(e,n){super(),this.ngModel=e,this.control=n}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(j(Re,8),j(nt,8))};static \u0275dir=Y({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(n,i){n&1&&b("input",function(a){return i.onInput(a)}),n&2&&ze("p-filled",i.filled)("p-textarea-resizable",i.autoResize)("p-variant-filled",i.variant==="filled"||i.config.inputStyle()==="filled"||i.config.inputVariant()==="filled")("p-textarea-fluid",i.hasFluid)("p-textarea-sm",i.pSize==="small")("p-inputfield-sm",i.pSize==="small")("p-textarea-lg",i.pSize==="large")("p-inputfield-lg",i.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",f],variant:"variant",fluid:[2,"fluid","fluid",f],pSize:"pSize"},outputs:{onResize:"onResize"},features:[U([io]),x]})}return t})(),ft=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({})}return t})();var ro=(()=>{class t extends L{pFocusTrapDisabled=!1;platformId=T(ot);document=T(zt);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),re(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(e){super.ngOnChanges(e),e.pFocusTrapDisabled&&re(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let e="0",n=i=>Un("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:e,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:i?.bind(this)});this.firstHiddenFocusableElement=n(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=n(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:n,relatedTarget:i}=e,r=i===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(i)?qn(n.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;Ie(r)}onLastHiddenElementFocus(e){let{currentTarget:n,relatedTarget:i}=e,r=i===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(i)?Kn(n.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;Ie(r)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275dir=Y({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",f]},features:[x,ve]})}return t})();var yl=["header"],ao=["content"],so=["footer"],Cl=["closeicon"],xl=["maximizeicon"],Il=["minimizeicon"],wl=["headless"],Tl=["titlebar"],Sl=["*",[["p-footer"]]],El=["*","p-footer"],Dl=(t,o,e)=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex","justify-content":t,"align-items":o,"pointer-events":e}),kl=t=>({"p-dialog p-component":!0,"p-dialog-maximized":t}),Ml=()=>({display:"flex","flex-direction":"column","pointer-events":"auto"}),Vl=(t,o)=>({transform:t,transition:o}),Fl=t=>({value:"visible",params:t});function $l(t,o){t&1&&G(0)}function Ol(t,o){if(t&1&&(V(0),m(1,$l,1,0,"ng-container",11),F()),t&2){let e=l(3);c(),s("ngTemplateOutlet",e._headlessTemplate||e.headlessTemplate||e.headlessT)}}function Al(t,o){if(t&1){let e=P();d(0,"div",15),b("mousedown",function(i){v(e);let r=l(4);return y(r.initResize(i))}),u()}if(t&2){let e=l(4);s("ngClass",e.cx("resizeHandle"))}}function Pl(t,o){if(t&1&&(d(0,"span",21),M(1),u()),t&2){let e=l(5);s("id",e.ariaLabelledBy)("ngClass",e.cx("title")),c(),X(e.header)}}function Ll(t,o){t&1&&G(0)}function Nl(t,o){if(t&1&&h(0,"span",18),t&2){let e=l(6);s("ngClass",e.maximized?e.minimizeIcon:e.maximizeIcon)}}function zl(t,o){t&1&&h(0,"WindowMaximizeIcon")}function Hl(t,o){t&1&&h(0,"WindowMinimizeIcon")}function Bl(t,o){if(t&1&&(V(0),m(1,zl,1,0,"WindowMaximizeIcon",23)(2,Hl,1,0,"WindowMinimizeIcon",23),F()),t&2){let e=l(6);c(),s("ngIf",!e.maximized&&!e._maximizeiconTemplate&&!e.maximizeIconTemplate&&!e.maximizeIconT),c(),s("ngIf",e.maximized&&!e._minimizeiconTemplate&&!e.minimizeIconTemplate&&!e.minimizeIconT)}}function Rl(t,o){}function jl(t,o){t&1&&m(0,Rl,0,0,"ng-template")}function Wl(t,o){if(t&1&&(V(0),m(1,jl,1,0,null,11),F()),t&2){let e=l(6);c(),s("ngTemplateOutlet",e._maximizeiconTemplate||e.maximizeIconTemplate||e.maximizeIconT)}}function Gl(t,o){}function Ul(t,o){t&1&&m(0,Gl,0,0,"ng-template")}function Ql(t,o){if(t&1&&(V(0),m(1,Ul,1,0,null,11),F()),t&2){let e=l(6);c(),s("ngTemplateOutlet",e._minimizeiconTemplate||e.minimizeIconTemplate||e.minimizeIconT)}}function ql(t,o){if(t&1){let e=P();d(0,"p-button",22),b("onClick",function(){v(e);let i=l(5);return y(i.maximize())})("keydown.enter",function(){v(e);let i=l(5);return y(i.maximize())}),m(1,Nl,1,1,"span",14)(2,Bl,3,2,"ng-container",23)(3,Wl,2,1,"ng-container",23)(4,Ql,2,1,"ng-container",23),u()}if(t&2){let e=l(5);s("styleClass",e.cx("pcMaximizeButton"))("tabindex",e.maximizable?"0":"-1")("ariaLabel",e.maximizeLabel)("buttonProps",e.maximizeButtonProps),c(),s("ngIf",e.maximizeIcon&&!e._maximizeiconTemplate&&!e._minimizeiconTemplate),c(),s("ngIf",!e.maximizeIcon&&!(e.maximizeButtonProps!=null&&e.maximizeButtonProps.icon)),c(),s("ngIf",!e.maximized),c(),s("ngIf",e.maximized)}}function Kl(t,o){if(t&1&&h(0,"span",18),t&2){let e=l(8);s("ngClass",e.closeIcon)}}function Zl(t,o){t&1&&h(0,"TimesIcon")}function Yl(t,o){if(t&1&&(V(0),m(1,Kl,1,1,"span",14)(2,Zl,1,0,"TimesIcon",23),F()),t&2){let e=l(7);c(),s("ngIf",e.closeIcon),c(),s("ngIf",!e.closeIcon)}}function Xl(t,o){}function Jl(t,o){t&1&&m(0,Xl,0,0,"ng-template")}function ec(t,o){if(t&1&&(d(0,"span"),m(1,Jl,1,0,null,11),u()),t&2){let e=l(7);c(),s("ngTemplateOutlet",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function tc(t,o){if(t&1&&m(0,Yl,3,2,"ng-container",23)(1,ec,2,1,"span",23),t&2){let e=l(6);s("ngIf",!e._closeiconTemplate&&!e.closeIconTemplate&&!e.closeIconT&&!(e.closeButtonProps!=null&&e.closeButtonProps.icon)),c(),s("ngIf",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function nc(t,o){if(t&1){let e=P();d(0,"p-button",24),b("onClick",function(i){v(e);let r=l(5);return y(r.close(i))})("keydown.enter",function(i){v(e);let r=l(5);return y(r.close(i))}),m(1,tc,2,2,"ng-template",null,4,Ee),u()}if(t&2){let e=l(5);s("styleClass",e.cx("pcCloseButton"))("ariaLabel",e.closeAriaLabel)("tabindex",e.closeTabindex)("buttonProps",e.closeButtonProps)}}function ic(t,o){if(t&1){let e=P();d(0,"div",16,3),b("mousedown",function(i){v(e);let r=l(4);return y(r.initDrag(i))}),m(2,Pl,2,3,"span",17)(3,Ll,1,0,"ng-container",11),d(4,"div",18),m(5,ql,5,8,"p-button",19)(6,nc,3,4,"p-button",20),u()()}if(t&2){let e=l(4);s("ngClass",e.cx("header")),c(2),s("ngIf",!e._headerTemplate&&!e.headerTemplate&&!e.headerT),c(),s("ngTemplateOutlet",e._headerTemplate||e.headerTemplate||e.headerT),c(),s("ngClass",e.cx("headerActions")),c(),s("ngIf",e.maximizable),c(),s("ngIf",e.closable)}}function oc(t,o){t&1&&G(0)}function rc(t,o){t&1&&G(0)}function ac(t,o){if(t&1&&(d(0,"div",18,5),ke(2,1),m(3,rc,1,0,"ng-container",11),u()),t&2){let e=l(4);s("ngClass",e.cx("footer")),c(3),s("ngTemplateOutlet",e._footerTemplate||e.footerTemplate||e.footerT)}}function sc(t,o){if(t&1&&(m(0,Al,1,1,"div",12)(1,ic,7,6,"div",13),d(2,"div",7,2),ke(4),m(5,oc,1,0,"ng-container",11),u(),m(6,ac,4,2,"div",14)),t&2){let e=l(3);s("ngIf",e.resizable),c(),s("ngIf",e.showHeader),c(),k(e.contentStyleClass),s("ngClass",e.cx("content"))("ngStyle",e.contentStyle),g("data-pc-section","content"),c(3),s("ngTemplateOutlet",e._contentTemplate||e.contentTemplate||e.contentT),c(),s("ngIf",e._footerTemplate||e.footerTemplate||e.footerT)}}function lc(t,o){if(t&1){let e=P();d(0,"div",9,0),b("@animation.start",function(i){v(e);let r=l(2);return y(r.onAnimationStart(i))})("@animation.done",function(i){v(e);let r=l(2);return y(r.onAnimationEnd(i))}),m(2,Ol,2,1,"ng-container",10)(3,sc,7,9,"ng-template",null,1,Ee),u()}if(t&2){let e=Te(4),n=l(2);ye(n.style),k(n.styleClass),s("ngClass",Q(13,kl,n.maximizable&&n.maximized))("ngStyle",Se(15,Ml))("pFocusTrapDisabled",n.focusTrap===!1)("@animation",Q(19,Fl,$e(16,Vl,n.transformOptions,n.transitionOptions))),g("role",n.role)("aria-labelledby",n.ariaLabelledBy)("aria-modal",!0),c(2),s("ngIf",n._headlessTemplate||n.headlessTemplate||n.headlessT)("ngIfElse",e)}}function cc(t,o){if(t&1&&(d(0,"div",7),m(1,lc,5,21,"div",8),u()),t&2){let e=l();ye(e.maskStyle),k(e.maskStyleClass),s("ngClass",e.maskClass)("ngStyle",Ln(7,Dl,e.position==="left"||e.position==="topleft"||e.position==="bottomleft"?"flex-start":e.position==="right"||e.position==="topright"||e.position==="bottomright"?"flex-end":"center",e.position==="top"||e.position==="topleft"||e.position==="topright"?"flex-start":e.position==="bottom"||e.position==="bottomleft"||e.position==="bottomright"?"flex-end":"center",e.modal?"auto":"none")),c(),s("ngIf",e.visible)}}var dc=({dt:t})=>`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: ${t("dialog.border.radius")};
    box-shadow: ${t("dialog.shadow")};
    background: ${t("dialog.background")};
    border: 1px solid ${t("dialog.border.color")};
    color: ${t("dialog.color")};
    display: flex;
    flex-direction: column;
    pointer-events: auto
}

.p-dialog-content {
    overflow-y: auto;
    padding: ${t("dialog.content.padding")};
    flex-grow: 1;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("dialog.header.padding")};
}

.p-dialog-title {
    font-weight: ${t("dialog.title.font.weight")};
    font-size: ${t("dialog.title.font.size")};
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: ${t("dialog.footer.padding")};
    display: flex;
    justify-content: flex-end;
    gap: ${t("dialog.footer.gap")};
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: ${t("dialog.header.gap")};
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

/* For PrimeNG */

.p-dialog .p-resizable-handle {
    position: absolute;
    font-size: 0.1px;
    display: block;
    cursor: se-resize;
    width: 12px;
    height: 12px;
    right: 1px;
    bottom: 1px;
}

.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`,uc={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},pc={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===t.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,[`p-dialog-${e}`]:e}},root:({instance:t})=>({"p-dialog p-component":!0,"p-dialog-maximized":t.maximizable&&t.maximized}),header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},lo=(()=>{class t extends Z{name="dialog";theme=dc;classes=pc;inlineStyles=uc;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var mc=at([fe({transform:"{{transform}}",opacity:0}),he("{{transition}}")]),hc=at([he("{{transition}}",fe({transform:"{{transform}}",opacity:0}))]),Lt=(()=>{class t extends L{header;draggable=!0;resizable=!0;get positionLeft(){return 0}set positionLeft(e){console.log("positionLeft property is deprecated.")}get positionTop(){return 0}set positionTop(e){console.log("positionTop property is deprecated.")}contentStyle;contentStyleClass;modal=!1;closeOnEscape=!0;dismissableMask=!1;rtl=!1;closable=!0;get responsive(){return!1}set responsive(e){console.log("Responsive property is deprecated.")}appendTo;breakpoints;styleClass;maskStyleClass;maskStyle;showHeader=!0;get breakpoint(){return 649}set breakpoint(e){console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.")}blockScroll=!1;autoZIndex=!0;baseZIndex=0;minX=0;minY=0;focusOnShow=!0;maximizable=!1;keepInViewport=!0;focusTrap=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";closeIcon;closeAriaLabel;closeTabindex="0";minimizeIcon;maximizeIcon;closeButtonProps={severity:"secondary",text:!0,rounded:!0};maximizeButtonProps={severity:"secondary",text:!0,rounded:!0};get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}get style(){return this._style}set style(e){e&&(this._style=B({},e),this.originalStyle=e)}get position(){return this._position}set position(e){switch(this._position=e,e){case"topleft":case"bottomleft":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"topright":case"bottomright":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)";break}}role="dialog";onShow=new E;onHide=new E;visibleChange=new E;onResizeInit=new E;onResizeEnd=new E;onDragEnd=new E;onMaximize=new E;headerViewChild;contentViewChild;footerViewChild;headerTemplate;contentTemplate;footerTemplate;closeIconTemplate;maximizeIconTemplate;minimizeIconTemplate;headlessTemplate;_headerTemplate;_contentTemplate;_footerTemplate;_closeiconTemplate;_maximizeiconTemplate;_minimizeiconTemplate;_headlessTemplate;_visible=!1;maskVisible;container;wrapper;dragging;ariaLabelledBy=this.getAriaLabelledBy();documentDragListener;documentDragEndListener;resizing;documentResizeListener;documentResizeEndListener;documentEscapeListener;maskClickListener;lastPageX;lastPageY;preventVisibleChangePropagation;maximized;preMaximizeContentHeight;preMaximizeContainerWidth;preMaximizeContainerHeight;preMaximizePageX;preMaximizePageY;id=ae("pn_id_");_style={};_position="center";originalStyle;transformOptions="scale(0.7)";styleElement;window;_componentStyle=T(lo);headerT;contentT;footerT;closeIconT;maximizeIconT;minimizeIconT;headlessT;get maximizeLabel(){return this.config.getTranslation(ai.ARIA).maximizeLabel}zone=T(rt);get maskClass(){let n=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":this.modal||this.dismissableMask,[`p-dialog-${n}`]:n}}ngOnInit(){super.ngOnInit(),this.breakpoints&&this.createStyle()}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerT=e.template;break;case"content":this.contentT=e.template;break;case"footer":this.footerT=e.template;break;case"closeicon":this.closeIconT=e.template;break;case"maximizeicon":this.maximizeIconT=e.template;break;case"minimizeicon":this.minimizeIconT=e.template;break;case"headless":this.headlessT=e.template;break;default:this.contentT=e.template;break}})}getAriaLabelledBy(){return this.header!==null?ae("pn_id_")+"_header":null}parseDurationToMilliseconds(e){let n=/([\d\.]+)(ms|s)\b/g,i=0,r;for(;(r=n.exec(e))!==null;){let a=parseFloat(r[1]),p=r[2];p==="ms"?i+=a:p==="s"&&(i+=a*1e3)}if(i!==0)return i}_focus(e){if(e){let n=this.parseDurationToMilliseconds(this.transitionOptions),i=Dt.getFocusableElements(e);if(i&&i.length>0)return this.zone.runOutsideAngular(()=>{setTimeout(()=>i[0].focus(),n||5)}),!0}return!1}focus(e){let n=this._focus(e);n||(n=this._focus(this.footerViewChild?.nativeElement),n||(n=this._focus(this.headerViewChild?.nativeElement),n||this._focus(this.contentViewChild?.nativeElement)))}close(e){this.visibleChange.emit(!1),e.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.close(e)})),this.modal&&wt()}disableModality(){if(this.wrapper){this.dismissableMask&&this.unbindMaskClickListener();let e=document.querySelectorAll(".p-dialog-mask-scrollblocker");this.modal&&e&&e.length==1&&un(),this.cd.destroyed||this.cd.detectChanges()}}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?wt():un()),this.onMaximize.emit({maximized:this.maximized})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex&&(se.set("modal",this.container,this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}createStyle(){if(re(this.platformId)&&!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints)e+=`
                        @media screen and (max-width: ${n}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),ei(this.styleElement,"nonce",this.config?.csp()?.nonce)}}initDrag(e){Oe(e.target,"p-dialog-maximize-icon")||Oe(e.target,"p-dialog-header-close-icon")||Oe(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",Ze(this.document.body,"p-unselectable-text"))}onDrag(e){if(this.dragging){let n=xe(this.container),i=_e(this.container),r=e.pageX-this.lastPageX,a=e.pageY-this.lastPageY,p=this.container.getBoundingClientRect(),_=getComputedStyle(this.container),O=parseFloat(_.marginLeft),A=parseFloat(_.marginTop),H=p.left+r-O,J=p.top+a-A,q=Tt();this.container.style.position="fixed",this.keepInViewport?(H>=this.minX&&H+n<q.width&&(this._style.left=`${H}px`,this.lastPageX=e.pageX,this.container.style.left=`${H}px`),J>=this.minY&&J+i<q.height&&(this._style.top=`${J}px`,this.lastPageY=e.pageY,this.container.style.top=`${J}px`)):(this.lastPageX=e.pageX,this.container.style.left=`${H}px`,this.lastPageY=e.pageY,this.container.style.top=`${J}px`)}}endDrag(e){this.dragging&&(this.dragging=!1,Le(this.document.body,"p-unselectable-text"),this.cd.detectChanges(),this.onDragEnd.emit(e))}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}center(){this.resetPosition()}initResize(e){this.resizable&&(this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,Ze(this.document.body,"p-unselectable-text"),this.onResizeInit.emit(e))}onResize(e){if(this.resizing){let n=e.pageX-this.lastPageX,i=e.pageY-this.lastPageY,r=xe(this.container),a=_e(this.container),p=_e(this.contentViewChild?.nativeElement),_=r+n,O=a+i,A=this.container.style.minWidth,H=this.container.style.minHeight,J=this.container.getBoundingClientRect(),q=Tt();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(_+=n,O+=i),(!A||_>parseInt(A))&&J.left+_<q.width&&(this._style.width=_+"px",this.container.style.width=this._style.width),(!H||O>parseInt(H))&&J.top+O<q.height&&(this.contentViewChild.nativeElement.style.height=p+O-a+"px",this._style.height&&(this._style.height=O+"px",this.container.style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,Le(this.document.body,"p-unselectable-text"),this.onResizeEnd.emit(e))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.documentDragListener||this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onDrag.bind(this))})}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentDragEndListener(){this.documentDragEndListener||this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}bindDocumentResizeListeners(){!this.documentResizeListener&&!this.documentResizeEndListener&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.key=="Escape"&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.wrapper):Be(this.appendTo,this.wrapper))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.wrapper)}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container?.parentElement,this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container?.setAttribute(this.id,""),this.modal&&this.enableModality(),this.focusOnShow&&this.focus();break;case"void":this.wrapper&&this.modal&&Ze(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy(),this.onHide.emit({}),this.cd.markForCheck(),this.maskVisible!==this.visible&&(this.maskVisible=this.visible);break;case"visible":this.onShow.emit({});break}}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maskVisible=!1,this.maximized&&(this.document.body.style.removeProperty("--scrollbar;-width"),this.maximized=!1),this.modal&&this.disableModality(),Oe(this.document.body,"p-overflow-hidden")&&Le(this.document.body,"p-overflow-hidden"),this.container&&this.autoZIndex&&se.clear(this.container),this.container=null,this.wrapper=null,this._style=this.originalStyle?B({},this.originalStyle):{}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["p-dialog"]],contentQueries:function(n,i,r){if(n&1&&(D(r,yl,4),D(r,ao,4),D(r,so,4),D(r,Cl,4),D(r,xl,4),D(r,Il,4),D(r,wl,4),D(r,De,4)),n&2){let a;I(a=w())&&(i._headerTemplate=a.first),I(a=w())&&(i._contentTemplate=a.first),I(a=w())&&(i._footerTemplate=a.first),I(a=w())&&(i._closeiconTemplate=a.first),I(a=w())&&(i._maximizeiconTemplate=a.first),I(a=w())&&(i._minimizeiconTemplate=a.first),I(a=w())&&(i._headlessTemplate=a.first),I(a=w())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&(le(Tl,5),le(ao,5),le(so,5)),n&2){let r;I(r=w())&&(i.headerViewChild=r.first),I(r=w())&&(i.contentViewChild=r.first),I(r=w())&&(i.footerViewChild=r.first)}},inputs:{header:"header",draggable:[2,"draggable","draggable",f],resizable:[2,"resizable","resizable",f],positionLeft:"positionLeft",positionTop:"positionTop",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:[2,"modal","modal",f],closeOnEscape:[2,"closeOnEscape","closeOnEscape",f],dismissableMask:[2,"dismissableMask","dismissableMask",f],rtl:[2,"rtl","rtl",f],closable:[2,"closable","closable",f],responsive:"responsive",appendTo:"appendTo",breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",maskStyle:"maskStyle",showHeader:[2,"showHeader","showHeader",f],breakpoint:"breakpoint",blockScroll:[2,"blockScroll","blockScroll",f],autoZIndex:[2,"autoZIndex","autoZIndex",f],baseZIndex:[2,"baseZIndex","baseZIndex",K],minX:[2,"minX","minX",K],minY:[2,"minY","minY",K],focusOnShow:[2,"focusOnShow","focusOnShow",f],maximizable:[2,"maximizable","maximizable",f],keepInViewport:[2,"keepInViewport","keepInViewport",f],focusTrap:[2,"focusTrap","focusTrap",f],transitionOptions:"transitionOptions",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",closeButtonProps:"closeButtonProps",maximizeButtonProps:"maximizeButtonProps",visible:"visible",style:"style",position:"position",role:"role",headerTemplate:[0,"content","headerTemplate"],contentTemplate:"contentTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",maximizeIconTemplate:"maximizeIconTemplate",minimizeIconTemplate:"minimizeIconTemplate",headlessTemplate:"headlessTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},features:[U([lo]),x],ngContentSelectors:El,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"ngClass","class","ngStyle","style",4,"ngIf"],[3,"ngClass","ngStyle"],["pFocusTrap","",3,"class","ngClass","ngStyle","style","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["style","z-index: 90;",3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass",4,"ngIf"],[2,"z-index","90",3,"mousedown","ngClass"],[3,"mousedown","ngClass"],[3,"id","ngClass",4,"ngIf"],[3,"ngClass"],[3,"styleClass","tabindex","ariaLabel","buttonProps","onClick","keydown.enter",4,"ngIf"],[3,"styleClass","ariaLabel","tabindex","buttonProps","onClick","keydown.enter",4,"ngIf"],[3,"id","ngClass"],[3,"onClick","keydown.enter","styleClass","tabindex","ariaLabel","buttonProps"],[4,"ngIf"],[3,"onClick","keydown.enter","styleClass","ariaLabel","tabindex","buttonProps"]],template:function(n,i){n&1&&(qe(Sl),m(0,cc,2,11,"div",6)),n&2&&s("ngIf",i.maskVisible)},dependencies:[ee,de,ue,me,pe,Pe,ro,jt,fi,gi,$],encapsulation:2,data:{animation:[He("animation",[ge("void => visible",[st(mc)]),ge("visible => void",[st(hc)])])]},changeDetection:0})}return t})(),tn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=R({imports:[Lt,$,$]})}return t})();var fc=()=>({width:"25rem"});function gc(t,o){if(t&1){let e=P();d(0,"p-button",11),b("click",function(){v(e);let i=l();return y(i.lockEvent("lock"))}),u()}}var nn=class t{notesService=T(Ne);pin;locked=!1;visible=!1;visibleChange=new E;toggleDialog(){this.visibleChange.emit(!this.visible)}lockEvent(o){let e,n=this.notesService.selected();switch(o){case"lock":this.pin&&n&&(e=oe(B({},n),{passward:this.pin,isLocked:!0}),this.notesService.updateAllNote(e));break;case"unlock":this.haveAuth()&&n&&(e=oe(B({},n),{passward:void 0,isLocked:!1,canSee:!0}),this.notesService.updateAllNote(e));break;case"show":this.haveAuth()&&n&&(e=oe(B({},n),{canSee:!0}),this.notesService.updateAllNote(e));break;case"delete":this.haveAuth()&&n&&this.notesService.deleteNote(n);break;default:break}this.pin=void 0,this.haveAuth()&&this.toggleDialog()}haveAuth(){return this.pin===this.notesService.selected()?.passward}onDialogHide(){this.visibleChange.emit(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-lock-dialog"]],inputs:{locked:"locked",visible:"visible"},outputs:{visibleChange:"visibleChange"},decls:13,vars:7,consts:[[3,"visibleChange","onHide","visible","modal"],[1,"p-text-secondary","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["type","number","pInputText","","id","username","autocomplete","off",1,"flex-auto",3,"ngModelChange","ngModel"],[1,"flex","justify-end","gap-2"],["label","Cancel","severity","secondary",3,"click"],["label","Lock"],["label","Unlock",3,"click"],["label","Show",3,"click"],["severity","danger","label","Delete",3,"click"],["label","Lock",3,"click"]],template:function(e,n){if(e&1&&(d(0,"p-dialog",0),Fe("visibleChange",function(r){return Ve(n.visible,r)||(n.visible=r),r}),b("onHide",function(){return n.onDialogHide()}),d(1,"span",1),M(2,"Insert pin."),u(),d(3,"div",2)(4,"label",3),M(5,"Pin"),u(),d(6,"input",4),Fe("ngModelChange",function(r){return Ve(n.pin,r)||(n.pin=r),r}),u()(),d(7,"div",5)(8,"p-button",6),b("click",function(){return n.toggleDialog()}),u(),Ue(9,gc,1,0,"p-button",7),d(10,"p-button",8),b("click",function(){return n.lockEvent("unlock")}),u(),d(11,"p-button",9),b("click",function(){return n.lockEvent("show")}),u(),d(12,"p-button",10),b("click",function(){return n.lockEvent("delete")}),u()()()),e&2){let i;ye(Se(6,fc)),Me("visible",n.visible),s("modal",!0),c(6),Me("ngModel",n.pin),c(3),Qe((i=n.notesService.selected())!=null&&i.isLocked?-1:9)}},dependencies:[Xe,ht,ft,Ye,Pe,tn,Lt,mt,pt,xn,Yt,Re],encapsulation:2})};var _c=()=>({width:"25rem"}),rn=class t{notesService=T(Ne);visible=!1;visibleChange=new E;toggleDialog(){this.visibleChange.emit(!this.visible)}onDialogHide(){this.visibleChange.emit(!1)}onDelete(){let o=this.notesService.selected();o&&this.notesService.deleteNote(o),this.toggleDialog()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-delete-confirmation"]],inputs:{visible:"visible"},outputs:{visibleChange:"visibleChange"},decls:6,vars:5,consts:[[3,"visibleChange","onHide","visible","modal"],[1,"p-text-secondary","block","mb-8"],[1,"flex","justify-end","gap-2"],["label","Cancel","severity","secondary",3,"click"],["severity","danger","label","Confirm",3,"click"]],template:function(e,n){e&1&&(d(0,"p-dialog",0),Fe("visibleChange",function(r){return Ve(n.visible,r)||(n.visible=r),r}),b("onHide",function(){return n.onDialogHide()}),d(1,"span",1),M(2,"Confirm deletion."),u(),d(3,"div",2)(4,"p-button",3),b("click",function(){return n.toggleDialog()}),u(),d(5,"p-button",4),b("click",function(){return n.onDelete()}),u()()()),e&2&&(ye(Se(4,_c)),Me("visible",n.visible),s("modal",!0))},dependencies:[Xe,ft,Ye,Pe,tn,Lt,mt],encapsulation:2})};var bc=t=>({"background-color":"#121212",color:"#ffffff",border:t}),vc=(t,o)=>o.id;function yc(t,o){if(t&1){let e=P();d(0,"p-button",13),b("click",function(){v(e);let i=l(2);return y(i.deleteDialog=!0)}),M(1," Delete "),u()}}function Cc(t,o){if(t&1){let e=P();d(0,"div",4)(1,"p-card",7),b("click",function(){let i=v(e).$implicit,r=l();return y(r.notesService.selectNote(i.id))}),d(2,"div",8)(3,"p",9),M(4),h(5,"br"),M(6),vt(7,"date"),u(),d(8,"div",10),Ue(9,yc,2,0,"p-button",11),d(10,"p-button",12),b("click",function(){v(e);let i=l();return y(i.visible=!0)}),M(11," Manage "),u()()()()()}if(t&2){let e,n=o.$implicit,i=l();c(),ye(Q(8,bc,((e=i.notesService.selected())==null?null:e.id)===n.id?"solid 1px #34d399":"")),c(3),bt(" ",n.title," "),c(2),bt(" ",Nn(7,5,n.lastModified,"dd/MM/yy HH:mm")," "),c(3),Qe(n.isLocked?-1:9)}}var an=class t{visible=!1;deleteDialog=!1;notesService=T(Ne);ngOnInit(){this.notesService.load()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-note-list"]],decls:9,vars:3,consts:[[1,"w-full","mb-6"],["fluid","",3,"click"],[1,"card","flex","justify-center","mb-6"],["type","text","pInputText","","placeholder","Search...","fluid","","variant","filled","pSize","large",3,"keyup"],[1,"mb-6"],[3,"visibleChange","visible","locked"],[3,"visibleChange","visible"],[3,"click"],[1,"flex"],[1,"m-0","flex-5"],[1,"flex-1","flex","flex-col"],["severity","danger","title","Elimina"],["severity","info","title","Blocca/Sblocca",3,"click"],["severity","danger","title","Elimina",3,"click"]],template:function(e,n){if(e&1&&(d(0,"div",0)(1,"p-button",1),b("click",function(){return n.notesService.addNotes()}),M(2,"+ Add note"),u()(),d(3,"div",2)(4,"input",3),b("keyup",function(r){return n.notesService.search(r.target)}),u()(),On(5,Cc,12,10,"div",4,vc),d(7,"app-lock-dialog",5),Fe("visibleChange",function(r){return Ve(n.visible,r)||(n.visible=r),r}),u(),d(8,"app-delete-confirmation",6),Fe("visibleChange",function(r){return Ve(n.deleteDialog,r)||(n.deleteDialog=r),r}),u()),e&2){let i;c(5),An(n.notesService.notes()),c(2),Me("visible",n.visible),s("locked",(i=n.notesService.selected())==null?null:i.isLocked),c(),Me("visible",n.deleteDialog)}},dependencies:[Ci,Li,fn,ki,Ye,Pe,Ai,Xe,ht,Hn,nn,rn],encapsulation:2})};function xc(t,o){if(t&1){let e=P();d(0,"div",0)(1,"div"),M(2),u(),d(3,"input",1),Fe("ngModelChange",function(i){v(e);let r=l();return Ve(r.title,i)||(r.title=i),y(i)}),b("blur",function(){v(e);let i=l();return y(i.onBlurTitle())}),u(),d(4,"textarea",2),Fe("ngModelChange",function(i){v(e);let r=l();return Ve(r.content,i)||(r.content=i),y(i)}),b("blur",function(){v(e);let i=l();return y(i.onBlurContent())}),u()()}if(t&2){let e,n=l();c(2),bt("Selezionata: ",((e=n.selectedNote())==null?null:e.title)||"Nessuna nota selezionata"),c(),Me("ngModel",n.title),c(),Me("ngModel",n.content)}}function Ic(t,o){t&1&&(d(0,"div"),M(1,"Note is locked"),u())}var sn=class t{notesService=T(Ne);selectedNote=Ce(()=>this.notesService.selected());title="";content="";constructor(){Ht(()=>{let o=this.selectedNote();this.title=o?.title||"",this.content=o?.content||""})}onBlurTitle(){this.selectedNote()&&this.notesService.updateNote("title",this.title)}onBlurContent(){this.selectedNote()&&this.notesService.updateNote("content",this.content)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-note"]],decls:2,vars:1,consts:[[1,"flex","flex-col","gap-4",2,"color","white"],["type","text","pInputText","",3,"ngModelChange","blur","ngModel"],["rows","5","cols","30","pTextarea","",3,"ngModelChange","blur","ngModel"]],template:function(e,n){if(e&1&&Ue(0,xc,5,3,"div",0)(1,Ic,2,0,"div"),e&2){let i;Qe((i=n.notesService.selected())!=null&&i.canSee?0:1)}},dependencies:[Xe,ht,ft,oo,mt,pt,Yt,Re],encapsulation:2})};var wn=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-home"]],decls:5,vars:0,consts:[[1,"layout"],[1,"sidebar"],[1,"content"]],template:function(e,n){e&1&&(d(0,"div",0)(1,"aside",1),h(2,"app-note-list"),u(),d(3,"main",2),h(4,"app-note"),u()())},dependencies:[an,sn],styles:[".layout[_ngcontent-%COMP%]{display:flex;height:100vh}.sidebar[_ngcontent-%COMP%]{width:350px;background-color:#181818;padding:1rem;box-shadow:2px 0 5px #0000001a;overflow-y:auto}.main[_ngcontent-%COMP%]{background-color:#1f1f1f}.content[_ngcontent-%COMP%]{flex:1;color:#fff;padding:2rem;overflow-y:auto}"]})};export{wn as default};
