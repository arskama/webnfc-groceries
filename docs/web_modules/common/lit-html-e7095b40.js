/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,M=(e,t,s=null,n=null)=>{for(;t!==s;){const i=t.nextSibling;e.insertBefore(t,n),t=i}},k=(e,t,s=null)=>{for(;t!==s;){const n=t.nextSibling;e.removeChild(t),t=n}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const m=`{{lit-${String(Math.random()).slice(2)}}}`,I=`<!--${m}-->`,H=new RegExp(`${m}|${I}`),v="$lit$";class K{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let a=0,o=-1,l=0;const{strings:w,values:{length:J}}=e;for(;l<J;){const r=i.nextNode();if(r===null){i.currentNode=n.pop();continue}if(o++,r.nodeType===1){if(r.hasAttributes()){const h=r.attributes,{length:y}=h;let f=0;for(let d=0;d<y;d++)B(h[d].name,v)&&f++;for(;f-- >0;){const d=w[l],g=T.exec(d)[2],x=g.toLowerCase()+v,_=r.getAttribute(x);r.removeAttribute(x);const u=_.split(H);this.parts.push({type:"attribute",index:o,name:g,strings:u}),l+=u.length-1}}r.tagName==="TEMPLATE"&&(n.push(r),i.currentNode=r.content)}else if(r.nodeType===3){const h=r.data;if(h.indexOf(m)>=0){const y=r.parentNode,f=h.split(H),d=f.length-1;for(let g=0;g<d;g++){let x,_=f[g];if(_==="")x=p();else{const u=T.exec(_);u!==null&&B(u[2],v)&&(_=_.slice(0,u.index)+u[1]+u[2].slice(0,-v.length)+u[3]),x=document.createTextNode(_)}y.insertBefore(x,r),this.parts.push({type:"node",index:++o})}f[d]===""?(y.insertBefore(p(),r),s.push(r)):r.data=f[d],l+=d}}else if(r.nodeType===8)if(r.data===m){const h=r.parentNode;(r.previousSibling===null||o===a)&&(o++,h.insertBefore(p(),r)),a=o,this.parts.push({type:"node",index:o}),r.nextSibling===null?r.data="":(s.push(r),o--),l++}else{let h=-1;for(;(h=r.data.indexOf(m,h+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(const r of s)r.parentNode.removeChild(r)}}const B=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},R=e=>e.index!==-1,p=()=>document.createComment(""),T=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=new WeakMap,Q=e=>(...t)=>{const s=e(...t);return $.set(s,!0),s},N=e=>typeof e=="function"&&$.has(e);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const c={},V={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class E{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const e=C?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i=0,a=0,o,l=n.nextNode();for(;i<s.length;){if(o=s[i],!R(o)){this.__parts.push(void 0),i++;continue}for(;a<o.index;)a++,l.nodeName==="TEMPLATE"&&(t.push(l),n.currentNode=l.content),(l=n.nextNode())===null&&(n.currentNode=t.pop(),l=n.nextNode());if(o.type==="node"){const w=this.processor.handleTextExpression(this.options);w.insertAfterNode(l.previousSibling),this.__parts.push(w)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));i++}return C&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),U=` ${m} `;class b{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const i=this.strings[n],a=i.lastIndexOf("<!--");s=(a>-1||s)&&i.indexOf("-->",a+1)===-1;const o=T.exec(i);o===null?t+=i+(s?U:I):t+=i.substr(0,o.index)+o[1]+o[2]+v+o[3]+m}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return O!==void 0&&(t=O.createHTML(t)),e.innerHTML=t,e}}class F extends b{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,s=t.firstChild;return t.removeChild(s),M(t,s.firstChild),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const A=e=>e===null||!(typeof e=="object"||typeof e=="function"),P=e=>Array.isArray(e)||!!(e&&e[Symbol.iterator]);class W{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let n=0;n<s.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(t===1&&e[0]===""&&e[1]===""){const i=s[0].value;if(typeof i=="symbol")return String(i);if(typeof i=="string"||!P(i))return i}let n="";for(let i=0;i<t;i++){n+=e[i];const a=s[i];if(a!==void 0){const o=a.value;if(A(o)||!P(o))n+=typeof o=="string"?o:String(o);else for(const l of o)n+=typeof l=="string"?l:String(l)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==c&&(!A(e)||e!==this.value)&&(this.value=e,N(e)||(this.committer.dirty=!0))}commit(){for(;N(this.value);){const e=this.value;this.value=c,e(this)}if(this.value===c)return;this.committer.commit()}}class L{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}const e=this.__pendingValue;if(e===c)return;A(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):P(e)?this.__commitIterable(e):e===V?(this.value=V,this.clear()):this.__commitText(e)}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){if(this.value===e)return;this.clear(),this.__insert(e),this.value=e}__commitText(e){const t=this.startNode.nextSibling;e=e??"";const s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof E&&this.value.template===t)this.value.update(e.values);else{const s=new E(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s=0,n;for(const i of e)n=t[s],n===void 0&&(n=new L(this.options),t.push(n),s===0?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){k(this.startNode.parentNode,e.nextSibling,this.endNode)}}class D{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}if(this.__pendingValue===c)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=c}}class X extends W{constructor(e,t,s){super(e,t,s);this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends S{}let G=!1;(()=>{try{const e={get capture(){return G=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class q{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(e){this.__pendingValue=e}commit(){for(;N(this.__pendingValue);){const i=this.__pendingValue;this.__pendingValue=c,i(this)}if(this.__pendingValue===c)return;const e=this.__pendingValue,t=this.value,s=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=e!=null&&(t==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Y(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=c}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Y=e=>e&&(G?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Z{handleAttributeExpressions(e,t,s,n){const i=t[0];if(i==="."){const o=new X(e,t.slice(1),s);return o.parts}if(i==="@")return[new q(e,t.slice(1),n.eventContext)];if(i==="?")return[new D(e,t.slice(1),s)];const a=new W(e,t,s);return a.parts}handleTextExpression(e){return new L(e)}}const z=new Z;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const ee=(e,...t)=>new b(e,t,"html",z),te=(e,...t)=>new F(e,t,"svg",z);export{S as A,D as B,q as E,L as N,j as P,F as S,K as T,E as a,b,V as c,Q as d,p as e,M as f,ee as h,R as i,m,c as n,k as r,te as s};
