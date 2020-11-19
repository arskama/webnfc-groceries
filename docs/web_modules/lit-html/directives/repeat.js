import{d as C,N as I,e as K,f as H,r as L}from"../../common/lit-html-e7095b40.js";/**
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
 */const k=(o,l)=>{const f=o.startNode.parentNode,a=l===void 0?o.endNode:l.startNode,t=f.insertBefore(K(),a);f.insertBefore(K(),a);const e=new I(o.options);return e.insertAfterNode(t),e},h=(o,l)=>(o.setValue(l),o.commit(),o),m=(o,l,f)=>{const a=o.startNode.parentNode,t=f?f.startNode:o.endNode,e=l.endNode.nextSibling;e!==t&&H(a,l.startNode,e,t)},M=o=>{L(o.startNode.parentNode,o.startNode,o.endNode.nextSibling)},v=(o,l,f)=>{const a=new Map;for(let t=l;t<=f;t++)a.set(o[t],t);return a},B=new WeakMap,A=new WeakMap,S=C((o,l,f)=>{let a;return f===void 0?f=l:l!==void 0&&(a=l),t=>{if(!(t instanceof I))throw new Error("repeat can only be used in text bindings");const e=B.get(t)||[],w=A.get(t)||[],c=[],N=[],u=[];let g=0;for(const r of o)u[g]=a?a(r,g):g,N[g]=f(r,g),g++;let p,b,n=0,d=e.length-1,s=0,i=N.length-1;for(;n<=d&&s<=i;)if(e[n]===null)n++;else if(e[d]===null)d--;else if(w[n]===u[s])c[s]=h(e[n],N[s]),n++,s++;else if(w[d]===u[i])c[i]=h(e[d],N[i]),d--,i--;else if(w[n]===u[i])c[i]=h(e[n],N[i]),m(t,e[n],c[i+1]),n++,i--;else if(w[d]===u[s])c[s]=h(e[d],N[s]),m(t,e[d],e[n]),d--,s++;else if(p===void 0&&(p=v(u,s,i),b=v(w,n,d)),!p.has(w[n]))M(e[n]),n++;else if(!p.has(w[d]))M(e[d]),d--;else{const r=b.get(u[s]),x=r!==void 0?e[r]:null;if(x===null){const y=k(t,e[n]);h(y,N[s]),c[s]=y}else c[s]=h(x,N[s]),m(t,x,e[n]),e[r]=null;s++}for(;s<=i;){const r=k(t,c[i+1]);h(r,N[s]),c[s++]=r}for(;n<=d;){const r=e[n++];r!==null&&M(r)}B.set(t,c),A.set(t,u)}});export{S as repeat};
