this.workbox=this.workbox||{},this.workbox.googleAnalytics=function(u,b,h,l,y,w,d){"use strict";try{self.workbox.v["workbox:google-analytics:3.6.3"]=1}catch(t){}const p=/^\/(\w+\/)?collect/,f=(m=babelHelpers.asyncToGenerator(function*(t){return yield new Promise(function(i,r){const e=new FileReader;e.onloadend=function(){return i(e.result)},e.onerror=function(){return r(e.error)},e.readAsText(t)})}),function(t){return m.apply(this,arguments)});var m;const k=t=>(g=babelHelpers.asyncToGenerator(function*(i){let r,{url:e,requestInit:o,timestamp:n}=i;if(e=new URL(e),o.body){const c=o.body instanceof Blob?yield f(o.body):o.body;r=new URLSearchParams(c)}else r=e.searchParams;const a=n-(Number(r.get("qt"))||0),s=Date.now()-a;if(r.set("qt",s),t.parameterOverrides)for(const c of Object.keys(t.parameterOverrides)){const x=t.parameterOverrides[c];r.set(c,x)}typeof t.hitFilter=="function"&&t.hitFilter.call(null,r),o.body=r.toString(),o.method="POST",o.mode="cors",o.credentials="omit",o.headers={"Content-Type":"text/plain"},i.url=`${e.origin}${e.pathname}`}),function(i){return g.apply(this,arguments)});var g;return u.initialize=(t={})=>{const i=h.cacheNames.getGoogleAnalyticsName(t.cacheName),r=new b.Plugin("workbox-google-analytics",{maxRetentionTime:2880,callbacks:{requestWillReplay:k(t)}}),e=[(n=>{const a=new w.NetworkFirst({cacheName:n});return new l.Route(({url:s})=>s.hostname==="www.google-analytics.com"&&s.pathname==="/analytics.js",a,"GET")})(i),(n=>{const a=new w.NetworkFirst({cacheName:n});return new l.Route(({url:s})=>s.hostname==="www.googletagmanager.com"&&s.pathname==="/gtag/js",a,"GET")})(i),...(n=>{const a=({url:c})=>c.hostname==="www.google-analytics.com"&&p.test(c.pathname),s=new d.NetworkOnly({plugins:[n]});return[new l.Route(a,s,"GET"),new l.Route(a,s,"POST")]})(r)],o=new y.Router;for(const n of e)o.registerRoute(n);self.addEventListener("fetch",n=>{const a=o.handleRequest(n);a&&n.respondWith(a)})},u}({},workbox.backgroundSync,workbox.core._private,workbox.routing,workbox.routing,workbox.strategies,workbox.strategies);