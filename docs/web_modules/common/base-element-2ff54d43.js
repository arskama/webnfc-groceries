import{m as a}from"./foundation-0785b26f.js";import{L as d}from"./lit-element-f25bd23a.js";/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const c=s=>s.nodeType===Node.ELEMENT_NODE;function r(s,t){for(const e of s.assignedNodes({flatten:!0}))if(c(e)){const n=e;if(a(n,t))return n}return null}function u(s){return{addClass:t=>{s.classList.add(t)},removeClass:t=>{s.classList.remove(t)},hasClass:t=>s.classList.contains(t)}}let o=!1;const i=()=>{},l={get passive(){return o=!0,!1}};document.addEventListener("x",i,l),document.removeEventListener("x",i);const m=o;/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class f extends d{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}export{f as B,u as a,r as f,m as s};
