this.workbox=this.workbox||{},this.workbox.routing=function(n,s,g,m,b){"use strict";try{self.workbox.v["workbox:routing:3.6.3"]=1}catch(e){}const R="GET",x=["DELETE","GET","HEAD","PATCH","POST","PUT"];var d=e=>e&&typeof e=="object"?(n.assert.hasMethod(e,"handle",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),e):(n.assert.isType(e,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),{handle:e});class h{constructor(e,t,o){n.assert.isType(e,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"match"}),o&&n.assert.isOneOf(o,x,{paramName:"method"}),this.handler=d(t),this.match=e,this.method=o||R}}class p extends h{constructor(e,t,o){n.assert.isInstance(e,RegExp,{moduleName:"workbox-routing",className:"RegExpRoute",funcName:"constructor",paramName:"pattern"});const r=({url:a})=>{const i=e.exec(a.href);return i?a.origin!==location.origin&&i.index!==0?(s.logger.debug(`The regular expression '${e}' only partially matched against the cross-origin URL '${a}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`),null):i.slice(1):null};super(r,t,o)}}class f{constructor(){this._routes=new Map}handleRequest(e){n.assert.isInstance(e,FetchEvent,{moduleName:"workbox-routing",className:"Router",funcName:"handleRequest",paramName:"event"});const t=new URL(e.request.url);if(!t.protocol.startsWith("http")){s.logger.debug("Workbox Router only supports URLs that start with 'http'.");return}let o=null,r=null,a=null,i=[];const u=this._findHandlerAndParams(e,t);if(r=u.handler,a=u.params,o=u.route,r&&(i.push(["Found a route to handle this request:",o]),a&&i.push(["Passing the following params to the route's handler:",a])),!r&&this._defaultHandler&&(i.push("Failed to find a matching route. Falling back to the default handler."),o="[Default Handler]",r=this._defaultHandler),!r){s.logger.debug(`No route found for: ${m.getFriendlyURL(t)}`);return}s.logger.groupCollapsed(`Router is responding to: ${m.getFriendlyURL(t)}`),i.forEach(c=>{Array.isArray(c)?s.logger.log(...c):s.logger.log(c)}),s.logger.groupCollapsed("View request details here."),s.logger.unprefixed.log(e.request),s.logger.groupEnd(),s.logger.groupEnd();let l;try{l=r.handle({url:t,event:e,params:a})}catch(c){l=Promise.reject(c)}return l&&this._catchHandler&&(l=l.catch(c=>(s.logger.groupCollapsed(`Error thrown when responding to:  ${m.getFriendlyURL(t)}. Falling back to Catch Handler.`),s.logger.unprefixed.error("Error thrown by:",o),s.logger.unprefixed.error(c),s.logger.groupEnd(),this._catchHandler.handle({url:t,event:e,err:c})))),l}_findHandlerAndParams(e,t){const o=this._routes.get(e.request.method)||[];for(const r of o){let a=r.match({url:t,event:e});if(a)return(Array.isArray(a)&&a.length===0||a.constructor===Object&&Object.keys(a).length===0||a===!0)&&(a=void 0),{route:r,params:a,handler:r.handler}}return{handler:void 0,params:void 0}}setDefaultHandler(e){this._defaultHandler=d(e)}setCatchHandler(e){this._catchHandler=d(e)}registerRoute(e){n.assert.isType(e,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),n.assert.hasMethod(e,"match",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),n.assert.isType(e.handler,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),n.assert.hasMethod(e.handler,"handle",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.handler"}),n.assert.isType(e.method,"string",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.method"}),this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new g.WorkboxError("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new g.WorkboxError("unregister-route-route-not-registered")}}class N extends h{constructor(e,{whitelist:t=[/./],blacklist:o=[]}={}){n.assert.isArrayOfClass(t,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.whitelist"}),n.assert.isArrayOfClass(o,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.blacklist"}),super((...r)=>this._match(...r),e),this._whitelist=t,this._blacklist=o}_match({event:e,url:t}){if(e.request.mode!=="navigate")return!1;const o=t.pathname+t.search;return this._blacklist.some(r=>r.test(o))?(s.logger.debug("The navigation route is not being used, since the request URL matches both the whitelist and blacklist."),!1):this._whitelist.some(r=>r.test(o))?(s.logger.debug("The navigation route is being used."),!0):(s.logger.debug("The navigation route is not being used, since the URL being navigated to doesn't match the whitelist."),!1)}}var k=Object.freeze({RegExpRoute:p,Route:h,Router:f,NavigationRoute:N});n.assert.isSwEnv("workbox-routing");class y extends f{registerRoute(e,t,o="GET"){let r;if(typeof e=="string"){const a=new URL(e,location);{if(!(e.startsWith("/")||e.startsWith("http")))throw new g.WorkboxError("invalid-string",{moduleName:"workbox-routing",className:"DefaultRouter",funcName:"registerRoute",paramName:"capture"});const u=e.startsWith("http")?a.pathname:e,l="[*:?+]";u.match(new RegExp(`${l}`))&&s.logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${l}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`)}const i=({url:u})=>(u.pathname===a.pathname&&u.origin!==a.origin&&s.logger.debug(`${e} only partially matches the cross-origin URL ${u}. This route will only handle cross-origin requests if they match the entire URL.`),u.href===a.href);r=new h(i,t,o)}else if(e instanceof RegExp)r=new p(e,t,o);else if(typeof e=="function")r=new h(e,t,o);else if(e instanceof h)r=e;else throw new g.WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",className:"DefaultRouter",funcName:"registerRoute",paramName:"capture"});return super.registerRoute(r),r}registerNavigationRoute(e,t={}){n.assert.isType(e,"string",{moduleName:"workbox-routing",className:"[default export]",funcName:"registerNavigationRoute",paramName:"cachedAssetUrl"});const o=b.cacheNames.getPrecacheName(t.cacheName),r=()=>caches.match(e,{cacheName:o}).then(i=>{if(i)return i;throw new Error(`The cache ${o} did not have an entry for ${e}.`)}).catch(i=>(s.logger.debug(`Unable to respond to navigation request with cached response: ${i.message}. Falling back to network.`),fetch(e))),a=new N(r,{whitelist:t.whitelist,blacklist:t.blacklist});return super.registerRoute(a),a}}const w=new y;self.addEventListener("fetch",e=>{const t=w.handleRequest(e);t&&e.respondWith(t)});const v=Object.assign(w,k);return v}(workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private);
