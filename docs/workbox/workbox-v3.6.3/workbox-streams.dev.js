this.workbox=this.workbox||{},this.workbox.streams=function(i,c,w){"use strict";try{self.workbox.v["workbox:streams:3.6.3"]=1}catch(e){}function y(e){return e.body&&e.body.getReader?e.body.getReader():e.getReader?e.getReader():new Response(e).body.getReader()}function m(e){w.assert.isArray(e,{moduleName:"workbox-streams",funcName:"concatenate",paramName:"sourcePromises"});const t=e.map(n=>Promise.resolve(n).then(r=>y(r)));let l,o;const u=new Promise((n,r)=>{l=n,o=r});let s=0;const d=[],p=new ReadableStream({pull(n){return t[s].then(r=>r.read()).then(r=>{if(r.done){if(d.push(["Reached the end of source:",e[s]]),s++,s>=t.length){{c.logger.groupCollapsed(`Concatenating ${t.length} sources.`);for(const a of d)Array.isArray(a)?c.logger.log(...a):c.logger.log(a);c.logger.log("Finished reading all sources."),c.logger.groupEnd()}n.close(),l();return}return this.pull(n)}else n.enqueue(r.value)}).catch(r=>{throw c.logger.error("An error occurred:",r),o(r),r})},cancel(){c.logger.warn("The ReadableStream was cancelled."),l()}});return{done:u,stream:p}}function h(e={}){const t=new Headers(e);return t.has("content-type")||t.set("content-type","text/html"),t}function b(e,t){const{done:l,stream:o}=m(e),u=h(t),s=new Response(o,{headers:u});return{done:l,response:s}}let g;function f(){if(g===void 0)try{new ReadableStream({start(){}}),g=!0}catch(e){g=!1}return g}function R(e,t){return(()=>{var l=babelHelpers.asyncToGenerator(function*({event:o,url:u,params:s}){if(f()){const{done:n,response:r}=b(e.map(function(a){return a({event:o,url:u,params:s})}),t);return o.waitUntil(n),r}c.logger.log("The current browser doesn't support creating response streams. Falling back to non-streaming response instead.");const d=yield Promise.all(e.map(function(n){return n({event:o,url:u,params:s})}).map((()=>{var n=babelHelpers.asyncToGenerator(function*(r){const a=yield r;return a instanceof Response?a.blob():a});return function(r){return n.apply(this,arguments)}})())),p=h(t);return new Response(new Blob(d),{headers:p})});return function(o){return l.apply(this,arguments)}})()}return i.concatenate=m,i.concatenateToResponse=b,i.isSupported=f,i.strategy=R,i}({},workbox.core._private,workbox.core._private);