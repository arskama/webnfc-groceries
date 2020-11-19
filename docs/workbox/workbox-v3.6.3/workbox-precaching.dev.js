this.workbox=this.workbox||{},this.workbox.precaching=function(U,s,b,p,L,w,f,g){"use strict";try{self.workbox.v["workbox:precaching:3.6.3"]=1}catch(e){}class v{constructor(e,r,t,n){this._originalInput=e,this._entryId=r,this._revision=t;const a=new Request(r,{credentials:"same-origin"});this._cacheRequest=a,this._networkRequest=n?this._cacheBustRequest(a):a}_cacheBustRequest(e){let r=e.url;const t={credentials:"same-origin"};if("cache"in Request.prototype)t.cache="reload";else{const n=new URL(r,location),a=encodeURIComponent;n.search+=(n.search?"&":"")+a("_workbox-cache-bust")+"="+a(this._revision),r=n.toString()}return new Request(r,t)}}const E="revision",q="url",d="precached-details-models";class M{constructor(e){const r=e.replace(/[^\w-]/g,"_");this._db=new U.DBWrapper(r,2,{onupgradeneeded:this._handleUpgrade})}_handleUpgrade(e){const r=e.target.result;e.oldVersion<2&&(r.objectStoreNames.contains("workbox-precaching")&&r.deleteObjectStore("workbox-precaching"),r.objectStoreNames.contains(d)&&r.deleteObjectStore(d)),r.createObjectStore(d)}_isEntryCached(e,r){var t=this;return babelHelpers.asyncToGenerator(function*(){const n=yield t._getRevision(r._entryId);if(n!==r._revision)return!1;const a=yield caches.open(e),o=yield a.match(r._cacheRequest);return!!o})()}_getAllEntries(){var e=this;return babelHelpers.asyncToGenerator(function*(){return yield e._db.getAllMatching(d,{includeKeys:!0})})()}_getRevision(e){var r=this;return babelHelpers.asyncToGenerator(function*(){const t=yield r._db.get(d,e);return t?t[E]:null})()}_addEntry(e){var r=this;return babelHelpers.asyncToGenerator(function*(){yield r._db.put(d,{[E]:e._revision,[q]:e._cacheRequest.url},e._entryId)})()}_deleteEntry(e){var r=this;return babelHelpers.asyncToGenerator(function*(){yield r._db.delete(d,e)})()}}var P=e=>{const r=[];if(e.forEach(n=>{(typeof n=="string"||!n._originalInput.revision)&&r.push(n._originalInput)}),r.length===0)return;s.logger.groupCollapsed("Are your precached assets revisioned?");const t=r.map(n=>`    - ${JSON.stringify(n)}`).join(`
`);s.logger.warn(`The following precache entries might not be revisioned:

`+t+`

`),s.logger.unprefixed.warn("You can learn more about why this might be a problem here: https://developers.google.com/web/tools/workbox/modules/workbox-precaching"),s.logger.groupEnd()};const R=(e,r)=>{if(r.length===0)return;s.logger.groupCollapsed(e),r.forEach(t=>{s.logger.log(t._originalInput)}),s.logger.groupEnd()};var I=(e,r)=>{const t=e.length,n=r.length;let a=`Precaching ${t} file${t===1?"":"s"}.`;n>0&&(a+=` ${n} file${n===1?" is":"s are"} already cached.`),s.logger.groupCollapsed(a),R("View precached URLs.",e),R("View URLs that were already precached.",r),s.logger.groupEnd()};const x=(e,r)=>{s.logger.groupCollapsed(e),r.forEach(t=>{s.logger.log(t)}),s.logger.groupEnd()};var $=(e,r)=>{if(e.length===0&&r.length===0)return;const t=e.length,n=r.length,a=`${t} cached request${t===1?" was":"s were"} deleted`,o=`${n} ${n===1?"entry":"entries"} ${n===1?"was":"were"} deleted from IndexedDB.`;s.logger.groupCollapsed(`During precaching cleanup, ${a} and ${o}`),x("Deleted Cache Requests",e),x("Revision Details Deleted from DB",r),s.logger.groupEnd()};const D=(()=>{var e=babelHelpers.asyncToGenerator(function*(r){const t=r.clone(),n="body"in t?Promise.resolve(t.body):t.blob(),a=yield n;return new Response(a,{headers:t.headers,status:t.status,statusText:t.statusText})});return function(r){return e.apply(this,arguments)}})();class C{constructor(e){this._cacheName=b.cacheNames.getPrecacheName(e),this._entriesToCacheMap=new Map,this._precacheDetailsModel=new M(this._cacheName)}addToCacheList(e){f.assert.isArray(e,{moduleName:"workbox-precaching",className:"PrecacheController",funcName:"addToCacheList",paramName:"entries"}),e.map(r=>{this._addEntryToCacheList(this._parseEntry(r))})}_parseEntry(e){switch(typeof e){case"string":{if(e.length===0)throw new p.WorkboxError("add-to-cache-list-unexpected-type",{entry:e});return new v(e,e,e)}case"object":{if(!e||!e.url)throw new p.WorkboxError("add-to-cache-list-unexpected-type",{entry:e});return new v(e,e.url,e.revision||e.url,!!e.revision)}default:throw new p.WorkboxError("add-to-cache-list-unexpected-type",{entry:e})}}_addEntryToCacheList(e){const r=this._entriesToCacheMap.get(e._entryId);if(!r){this._entriesToCacheMap.set(e._entryId,e);return}if(r._revision!==e._revision)throw new p.WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:r._originalInput,secondEntry:e._originalInput})}install({suppressWarnings:e=!1,event:r,plugins:t}={}){var n=this;return babelHelpers.asyncToGenerator(function*(){e!==!0&&P(n._entriesToCacheMap),t&&f.assert.isArray(t,{moduleName:"workbox-precaching",className:"PrecacheController",funcName:"install",paramName:"plugins"});const a=yield caches.open(n._getTempCacheName()),o=yield a.keys();yield Promise.all(o.map(function(c){return a.delete(c)}));const u=[],l=[];for(const c of n._entriesToCacheMap.values())(yield n._precacheDetailsModel._isEntryCached(n._cacheName,c))?l.push(c):u.push(c);return yield Promise.all(u.map(function(c){return n._cacheEntryInTemp({event:r,plugins:t,precacheEntry:c})})),I(u,l),{updatedEntries:u,notUpdatedEntries:l}})()}activate(e={}){var r=this;return babelHelpers.asyncToGenerator(function*(){const t=yield caches.open(r._getTempCacheName()),n=yield t.keys();for(const a of n){const o=yield t.match(a);yield w.cacheWrapper.put({cacheName:r._cacheName,request:a,response:o,plugins:e.plugins}),yield t.delete(a)}return r._cleanup()})()}_getTempCacheName(){return`${this._cacheName}-temp`}_cacheEntryInTemp({precacheEntry:e,event:r,plugins:t}){var n=this;return babelHelpers.asyncToGenerator(function*(){let a=yield L.fetchWrapper.fetch({request:e._networkRequest,event:r,fetchOptions:null,plugins:t});return a.redirected&&(a=yield D(a)),yield w.cacheWrapper.put({cacheName:n._getTempCacheName(),request:e._cacheRequest,response:a,event:r,plugins:t}),yield n._precacheDetailsModel._addEntry(e),!0})()}_cleanup(){var e=this;return babelHelpers.asyncToGenerator(function*(){const r=[];e._entriesToCacheMap.forEach(function(a){const o=new URL(a._cacheRequest.url,location).toString();r.push(o)});const[t,n]=yield Promise.all([e._cleanupCache(r),e._cleanupDetailsModel(r)]);return $(t,n),{deletedCacheRequests:t,deletedRevisionDetails:n}})()}_cleanupCache(e){var r=this;return babelHelpers.asyncToGenerator(function*(){if(!(yield caches.has(r._cacheName)))return[];const t=yield caches.open(r._cacheName),n=yield t.keys(),a=n.filter(function(o){return!e.includes(new URL(o.url,location).toString())});return yield Promise.all(a.map(function(o){return t.delete(o)})),a.map(function(o){return o.url})})()}_cleanupDetailsModel(e){var r=this;return babelHelpers.asyncToGenerator(function*(){const t=yield r._precacheDetailsModel._getAllEntries(),n=t.filter(function(a){const o=new URL(a.value.url,location).toString();return!e.includes(o)});return yield Promise.all(n.map(function(a){return r._precacheDetailsModel._deleteEntry(a.primaryKey)})),n.map(function(a){return a.value.url})})()}getCachedUrls(){return Array.from(this._entriesToCacheMap.keys()).map(e=>new URL(e,location).href)}}var S=Object.freeze({PrecacheController:C});f.assert.isSwEnv("workbox-precaching");let T=!1,k=!1,N=!1,y=[];const m=b.cacheNames.getPrecacheName(),_=new C(m),W=(e,r)=>{const t=e.search.slice(1),n=t.split("&"),a=n.map(c=>c.split("=")),o=a.filter(c=>r.every(i=>!i.test(c[0]))),u=o.map(c=>c.join("=")),l=new URL(e);return l.search=u.join("&"),l},G=(e,{ignoreUrlParametersMatching:r=[/^utm_/],directoryIndex:t="index.html",cleanUrls:n=!0,urlManipulation:a=null}={})=>{const o=new URL(e,location);o.hash="";const u=W(o,r);let l=[o,u];if(t&&u.pathname.endsWith("/")){const i=new URL(u);i.pathname+=t,l.push(i)}if(n){const i=new URL(u);i.pathname+=".html",l.push(i)}if(a){const i=a({url:o});l=l.concat(i)}const c=_.getCachedUrls();for(const i of l)if(c.indexOf(i.href)!==-1)return s.logger.debug("Precaching found a match for "+g.getFriendlyURL(i.toString())),i.href;return null},h={};h.precache=e=>{if(_.addToCacheList(e),T||e.length<=0)return;T=!0,self.addEventListener("install",r=>{r.waitUntil(_.install({event:r,plugins:y,suppressWarnings:N}))}),self.addEventListener("activate",r=>{r.waitUntil(_.activate({event:r,plugins:y}))})},h.addRoute=e=>{if(k)return;k=!0,self.addEventListener("fetch",r=>{const t=G(r.request.url,e);if(!t){s.logger.debug("Precaching found no match for "+g.getFriendlyURL(r.request.url));return}let n=caches.open(m).then(a=>a.match(t)).then(a=>a||(s.logger.debug(`The precached response for ${g.getFriendlyURL(t)} in ${m} was not found. Falling back to the network instead.`),fetch(t)));n=n.then(a=>(s.logger.groupCollapsed("Precaching is responding to: "+g.getFriendlyURL(r.request.url)),s.logger.log(`Serving the precached url: ${t}`),s.logger.groupCollapsed("View request details here."),s.logger.unprefixed.log(r.request),s.logger.groupEnd(),s.logger.groupCollapsed("View response details here."),s.logger.unprefixed.log(a),s.logger.groupEnd(),s.logger.groupEnd(),a)),r.respondWith(n)})},h.precacheAndRoute=(e,r)=>{h.precache(e),h.addRoute(r)},h.suppressWarnings=e=>{N=e},h.addPlugins=e=>{y=y.concat(e)};const H=Object.assign(h,S);return H}(workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private);
