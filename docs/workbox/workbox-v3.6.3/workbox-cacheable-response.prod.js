this.workbox=this.workbox||{},this.workbox.cacheableResponse=function(t){"use strict";try{self.workbox.v["workbox:cacheable-response:3.6.3"]=1}catch(s){}class o{constructor(s={}){this.t=s.statuses,this.s=s.headers}isResponseCacheable(s){let e=!0;return this.t&&(e=this.t.includes(s.status)),this.s&&e&&(e=Object.keys(this.s).some(c=>s.headers.get(c)===this.s[c])),e}}return t.CacheableResponse=o,t.Plugin=class{constructor(s){this.e=new o(s)}cacheWillUpdate({response:s}){return this.e.isResponseCacheable(s)?s:null}},t}({});