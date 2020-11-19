import{i as V,m as x,T as N,r as O,N as D,a as L}from"./lit-html-e7095b40.js";import"../lit-element/lib/decorators.js";/**
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
 */const w=133;function I(e,t){const{element:{content:s},parts:r}=e,n=document.createTreeWalker(s,w,null,!1);let o=u(r),i=r[o],a=-1,c=0;const d=[];let l=null;for(;n.nextNode();){a++;const p=n.currentNode;for(p.previousSibling===l&&(l=null),t.has(p)&&(d.push(p),l===null&&(l=p)),l!==null&&c++;i!==void 0&&i.index===a;)i.index=l!==null?-1:i.index-c,o=u(r,o),i=r[o]}d.forEach(p=>p.parentNode.removeChild(p))}const B=e=>{let t=e.nodeType===11?0:1;const s=document.createTreeWalker(e,w,null,!1);for(;s.nextNode();)t++;return t},u=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const r=e[s];if(V(r))return s}return-1};function J(e,t,s=null){const{element:{content:r},parts:n}=e;if(s==null){r.appendChild(t);return}const o=document.createTreeWalker(r,w,null,!1);let i=u(n),a=0,c=-1;for(;o.nextNode();){c++;const d=o.currentNode;for(d===s&&(a=B(t),s.parentNode.insertBefore(t,s));i!==-1&&n[i].index===c;){if(a>0){for(;i!==-1;)n[i].index+=a,i=u(n,i);return}i=u(n,i)}}}/**
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
 */function v(e){let t=f.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},f.set(e.type,t));let s=t.stringsArray.get(e.strings);if(s!==void 0)return s;const r=e.strings.join(x);return s=t.keyString.get(r),s===void 0&&(s=new N(e,e.getTemplateElement()),t.keyString.set(r,s)),t.stringsArray.set(e.strings,s),s}const f=new Map;/**
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
 */const h=new WeakMap,W=(e,t,s)=>{let r=h.get(t);r===void 0&&(O(t,t.firstChild),h.set(t,r=new D(Object.assign({templateFactory:v},s))),r.appendInto(t)),r.setValue(e),r.commit()};/**
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
 */const q=(e,t)=>`${e}--${t}`;let S=!0;typeof window.ShadyCSS=="undefined"?S=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),S=!1);const $=e=>t=>{const s=q(t.type,e);let r=f.get(s);r===void 0&&(r={stringsArray:new WeakMap,keyString:new Map},f.set(s,r));let n=r.stringsArray.get(t.strings);if(n!==void 0)return n;const o=t.strings.join(x);if(n=r.keyString.get(o),n===void 0){const i=t.getTemplateElement();S&&window.ShadyCSS.prepareTemplateDom(i,e),n=new N(t,i),r.keyString.set(o,n)}return r.stringsArray.set(t.strings,n),n},H=["html","svg"],K=e=>{H.forEach(t=>{const s=f.get(q(t,e));s!==void 0&&s.keyString.forEach(r=>{const{element:{content:n}}=r,o=new Set;Array.from(n.querySelectorAll("style")).forEach(i=>{o.add(i)}),I(r,o)})})},j=new Set,G=(e,t,s)=>{j.add(e);const r=s?s.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:o}=n;if(o===0){window.ShadyCSS.prepareTemplateStyles(r,e);return}const i=document.createElement("style");for(let d=0;d<o;d++){const l=n[d];l.parentNode.removeChild(l),i.textContent+=l.textContent}K(e);const a=r.content;s?J(s,i,a.firstChild):a.insertBefore(i,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(i,a.firstChild);const d=new Set;d.add(i),I(s,d)}},Y=(e,t,s)=>{if(!s||typeof s!="object"||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,n=h.has(t),o=S&&t.nodeType===11&&!!t.host,i=o&&!j.has(r),a=i?document.createDocumentFragment():t;if(W(e,a,Object.assign({templateFactory:$(r)},s)),i){const c=h.get(a);h.delete(a);const d=c.value instanceof L?c.value.template:void 0;G(r,a,d),O(t,t.firstChild),t.appendChild(a),h.set(t,c)}!n&&o&&window.ShadyCSS.styleElement(t.host)};/**
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
 */var F;window.JSCompiler_renameProperty=(e,t)=>e;const y={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},g=(e,t)=>t!==e&&(t===t||e===e),P={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:g},C=1,b=1<<2,T=1<<3,A=1<<4,E="finalized";class U extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const r=this._attributeNameForProperty(s,t);r!==void 0&&(this._attributeToPropertyMap.set(r,s),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=P){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdateInternal(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||P}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(E)||e.finalize(),this[E]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const r of s)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=g){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,r=t.converter||y,n=typeof r=="function"?r:r.fromAttribute;return n?n(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,r=t.converter,n=r&&r.toAttribute||y.toAttribute;return n(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=P){const r=this.constructor,n=r._attributeNameForProperty(e,s);if(n!==void 0){const o=r._propertyValueToAttribute(t,s);if(o===void 0)return;this._updateState=this._updateState|T,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._updateState=this._updateState&~T}}_attributeToProperty(e,t){if(this._updateState&T)return;const s=this.constructor,r=s._attributeToPropertyMap.get(e);if(r!==void 0){const n=s.getPropertyOptions(r);this._updateState=this._updateState|A,this[r]=s._propertyValueFromAttribute(t,n),this._updateState=this._updateState&~A}}requestUpdateInternal(e,t,s){let r=!0;if(e!==void 0){const n=this.constructor;s=s||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&A)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|b;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&b}get hasUpdated(){return this._updateState&C}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&C||(this._updateState=this._updateState|C,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~b}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}F=E,U[F]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const _=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol();class m{constructor(e,t){if(t!==R)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(_?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const M=e=>new m(String(e),R),Q=e=>{if(e instanceof m)return e.cssText;if(typeof e=="number")return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},X=(e,...t)=>{const s=t.reduce((r,n,o)=>r+Q(n)+e[o+1],e[0]);return new m(s,R)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const z={};class k extends U{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(n,o)=>n.reduceRight((i,a)=>Array.isArray(a)?t(a,i):(i.add(a),i),o),s=t(e,new Set),r=[];s.forEach(n=>r.unshift(n)),this._styles=r}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!_){const s=Array.prototype.slice.call(t.cssRules).reduce((r,n)=>r+n.cssText,"");return M(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;if(e.length===0)return;window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):_?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==z&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const r=document.createElement("style");r.textContent=s.cssText,this.renderRoot.appendChild(r)}))}render(){return z}}k.finalized=!0,k.render=Y;export{m as C,k as L,U,X as c,y as d,g as n,_ as s,v as t,M as u};
