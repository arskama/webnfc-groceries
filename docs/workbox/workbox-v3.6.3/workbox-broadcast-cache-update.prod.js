this.workbox=this.workbox||{},this.workbox.broadcastUpdate=function(r){"use strict";try{self.workbox.v["workbox:broadcast-cache-update:3.6.3"]=1}catch(e){}const d=(e,s,t)=>!t.some(a=>e.headers.has(a)&&s.headers.has(a))||t.every(a=>{const n=e.headers.has(a)===s.headers.has(a),i=e.headers.get(a)===s.headers.get(a);return n&&i});var h={CACHE_UPDATED:"CACHE_UPDATED"};const c=(e,s,t,a)=>{"BroadcastChannel"in self&&e&&e.postMessage({type:h.CACHE_UPDATED,meta:a,payload:{cacheName:s,updatedUrl:t}})};class o{constructor(e,{headersToCheck:s,source:t}={}){this.t=e,this.e=s||["content-length","etag","last-modified"],this.s=t||"workbox-broadcast-cache-update"}a(){return"BroadcastChannel"in self&&!this.n&&(this.n=new BroadcastChannel(this.t)),this.n}notifyIfUpdated(e,s,t,a){d(e,s,this.e)||c(this.a(),a,t,this.s)}}return r.BroadcastCacheUpdate=o,r.Plugin=class{constructor(e,s){this.c=new o(e,s)}cacheDidUpdate({cacheName:e,oldResponse:s,newResponse:t,request:a}){s&&this.c.notifyIfUpdated(s,t,a.url,e)}},r.broadcastUpdate=c,r.messageTypes=h,r}({});
