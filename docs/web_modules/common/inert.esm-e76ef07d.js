/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{var E,g,N;const l=Symbol(),m=Symbol(),I=Symbol(),v=Symbol(),S=Symbol(),M=Symbol(),u=Symbol(),t=Symbol(),e=Symbol(),s=Symbol(),r=Symbol(),d=Symbol(),f=Symbol();class _{constructor(){this[E]=[],this[g]=[],this[N]=new Set}destructor(){this[e](this[I]);const n=this;n[l]=null,n[I]=null,n[m]=null}get top(){const n=this[l];return n[n.length-1]||null}push(n){if(!n||n===this.top)return;this.remove(n),this[M](n),this[l].push(n)}remove(n){const o=this[l].indexOf(n);return o===-1?!1:(this[l].splice(o,1),o===this[l].length&&this[M](this.top),!0)}pop(){const n=this.top;return n&&this.remove(n),n}has(n){return this[l].indexOf(n)!==-1}[(E=l,g=I,N=m,M)](n){const o=this[m],i=this[I];if(!n){this[e](i),o.clear(),this[I]=[];return}const a=this[s](n);if(a[a.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[I]=a;const b=this[r](n);if(!i.length){this[t](a,b,o);return}let c=i.length-1,h=a.length-1;for(;c>0&&h>0&&i[c]===a[h];)c--,h--;i[c]!==a[h]&&this[u](i[c],a[h]),c>0&&this[e](i.slice(0,c)),h>0&&this[t](a.slice(0,h),b,null)}[u](n,o){const i=n[v];this[d](n)&&!n.inert&&(n.inert=!0,i.add(n)),i.has(o)&&(o.inert=!1,i.delete(o)),o[S]=n[S],o[v]=i,n[S]=void 0,n[v]=void 0}[e](n){for(const o of n){const i=o[S];i.disconnect(),o[S]=void 0;const a=o[v];for(const b of a)b.inert=!1;o[v]=void 0}}[t](n,o,i){for(const a of n){const b=a.parentNode,c=b.children,h=new Set;for(let R=0;R<c.length;R++){const w=c[R];if(w===a||!this[d](w)||o&&o.has(w))continue;i&&w.inert?i.add(w):(w.inert=!0,h.add(w))}a[v]=h;const k=new MutationObserver(this[f].bind(this));a[S]=k;let p=b;const y=p;y.__shady&&y.host&&(p=y.host),k.observe(p,{childList:!0})}}[f](n){const o=this[I],i=this[m];for(const a of n){const b=a.target.host||a.target,c=b===document.body?o.length:o.indexOf(b),h=o[c-1],k=h[v];for(let p=0;p<a.removedNodes.length;p++){const y=a.removedNodes[p];if(y===h){console.info("Detected removal of the top Blocking Element."),this.pop();return}k.has(y)&&(y.inert=!1,k.delete(y))}for(let p=0;p<a.addedNodes.length;p++){const y=a.addedNodes[p];if(!this[d](y))continue;i&&y.inert?i.add(y):(y.inert=!0,k.add(y))}}}[d](n){return/^(style|template|script)$/.test(n.localName)===!1}[s](n){const o=[];let i=n;for(;i&&i!==document.body;){if(i.nodeType===Node.ELEMENT_NODE&&o.push(i),i.assignedSlot){for(;i=i.assignedSlot;)o.push(i);i=o.pop();continue}i=i.parentNode||i.host}return o}[r](n){const o=n.shadowRoot;if(!o)return null;const i=new Set;let a,b,c;const h=o.querySelectorAll("slot");if(h.length&&h[0].assignedNodes)for(a=0;a<h.length;a++)for(c=h[a].assignedNodes({flatten:!0}),b=0;b<c.length;b++)c[b].nodeType===Node.ELEMENT_NODE&&i.add(c[b]);return i}}document.$blockingElements=new _})();var _createClass=function(){function E(g,N){for(var l=0;l<N.length;l++){var m=N[l];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(g,m.key,m)}}return function(g,N,l){return N&&E(g.prototype,N),l&&E(g,l),g}}();function _classCallCheck(E,g){if(!(E instanceof g))throw new TypeError("Cannot call a class as a function")}(function(){if(typeof window=="undefined")return;var E=Array.prototype.slice,g=Element.prototype.matches||Element.prototype.msMatchesSelector,N=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),l=function(){function u(t,e){_classCallCheck(this,u),this._inertManager=e,this._rootElement=t,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return _createClass(u,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(this._savedAriaHidden!==null?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(e){this._unmanageNode(e.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var s=this;v(e,function(_){return s._visitNode(_)});var r=document.activeElement;if(!document.body.contains(e)){for(var d=e,f=void 0;d;){if(d.nodeType===Node.DOCUMENT_FRAGMENT_NODE){f=d;break}d=d.parentNode}f&&(r=f.activeElement)}e.contains(r)&&(r.blur(),r===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){if(e.nodeType!==Node.ELEMENT_NODE)return;var s=e;s!==this._rootElement&&s.hasAttribute("inert")&&this._adoptInertRoot(s),(g.call(s,N)||s.hasAttribute("tabindex"))&&this._manageNode(s)}},{key:"_manageNode",value:function(e){var s=this._inertManager.register(e,this);this._managedNodes.add(s)}},{key:"_unmanageNode",value:function(e){var s=this._inertManager.deregister(e,this);s&&this._managedNodes.delete(s)}},{key:"_unmanageSubtree",value:function(e){var s=this;v(e,function(r){return s._unmanageNode(r)})}},{key:"_adoptInertRoot",value:function(e){var s=this._inertManager.getInertRoot(e);s||(this._inertManager.setInert(e,!0),s=this._inertManager.getInertRoot(e)),s.managedNodes.forEach(function(r){this._manageNode(r.node)},this)}},{key:"_onMutation",value:function(e,s){e.forEach(function(r){var d=r.target;if(r.type==="childList")E.call(r.addedNodes).forEach(function(_){this._makeSubtreeUnfocusable(_)},this),E.call(r.removedNodes).forEach(function(_){this._unmanageSubtree(_)},this);else if(r.type==="attributes"){if(r.attributeName==="tabindex")this._manageNode(d);else if(d!==this._rootElement&&r.attributeName==="inert"&&d.hasAttribute("inert")){this._adoptInertRoot(d);var f=this._inertManager.getInertRoot(d);this._managedNodes.forEach(function(_){d.contains(_.node)&&f._manageNode(_.node)})}}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),u}(),m=function(){function u(t,e){_classCallCheck(this,u),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([e]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return _createClass(u,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var e=this._node;this._savedTabIndex!==null?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType!==Node.ELEMENT_NODE)return;var e=this.node;if(g.call(e,N)){if(e.tabIndex===-1&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),this._inertRoots.size===0&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return this._savedTabIndex!==null}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),u}(),I=function(){function u(t){if(_classCallCheck(this,u),!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),S(t.head||t.body||t.documentElement),t.readyState==="loading"?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return _createClass(u,[{key:"setInert",value:function(e,s){if(s){if(this._inertRoots.has(e))return;var r=new l(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,r),!this._document.body.contains(e))for(var d=e.parentNode;d;)d.nodeType===11&&S(d),d=d.parentNode}else{if(!this._inertRoots.has(e))return;var f=this._inertRoots.get(e);f.destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,s){var r=this._managedNodes.get(e);return r!==void 0?r.addInertRoot(s):r=new m(e,s),this._managedNodes.set(e,r),r}},{key:"deregister",value:function(e,s){var r=this._managedNodes.get(e);return r?(r.removeInertRoot(s),r.destroyed&&this._managedNodes.delete(e),r):null}},{key:"_onDocumentLoaded",value:function(){var e=E.call(this._document.querySelectorAll("[inert]"));e.forEach(function(s){this.setInert(s,!0)},this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(e,s){var r=this;e.forEach(function(d){switch(d.type){case"childList":E.call(d.addedNodes).forEach(function(n){if(n.nodeType!==Node.ELEMENT_NODE)return;var o=E.call(n.querySelectorAll("[inert]"));g.call(n,"[inert]")&&o.unshift(n),o.forEach(function(i){this.setInert(i,!0)},r)},r);break;case"attributes":if(d.attributeName!=="inert")return;var f=d.target,_=f.hasAttribute("inert");r.setInert(f,_);break}},this)}}]),u}();function v(u,t,e){if(u.nodeType==Node.ELEMENT_NODE){var s=u;t&&t(s);var r=s.shadowRoot;if(r){v(r,t);return}if(s.localName=="content"){for(var d=s,f=d.getDistributedNodes?d.getDistributedNodes():[],_=0;_<f.length;_++)v(f[_],t);return}if(s.localName=="slot"){for(var n=s,o=n.assignedNodes?n.assignedNodes({flatten:!0}):[],i=0;i<o.length;i++)v(o[i],t);return}}for(var a=u.firstChild;a!=null;)v(a,t),a=a.nextSibling}function S(u){if(u.querySelector("style#inert-style, link#inert-style"))return;var t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent=`
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`,u.appendChild(t)}var M=new I(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(t){M.setInert(this,t)}})})();
