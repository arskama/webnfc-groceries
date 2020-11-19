import{d as r,A as h,P as d}from"../../common/lit-html-e7095b40.js";/**
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
 */class m{constructor(s){this.classes=new Set,this.changed=!1,this.element=s;const t=(s.getAttribute("class")||"").split(/\s+/);for(const a of t)this.classes.add(a)}add(s){this.classes.add(s),this.changed=!0}remove(s){this.classes.delete(s),this.changed=!0}commit(){if(this.changed){let s="";this.classes.forEach(t=>s+=t+" "),this.element.setAttribute("class",s)}}}const l=new WeakMap,f=r(s=>t=>{if(!(t instanceof h)||t instanceof d||t.committer.name!=="class"||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:a}=t,{element:o}=a;let i=l.get(t);i===void 0&&(o.setAttribute("class",a.strings.join(" ")),l.set(t,i=new Set));const c=o.classList||new m(o);i.forEach(e=>{e in s||(c.remove(e),i.delete(e))});for(const e in s){const n=s[e];n!=i.has(e)&&(n?(c.add(e),i.add(e)):(c.remove(e),i.delete(e)))}typeof c.commit=="function"&&c.commit()});export{f as classMap};
