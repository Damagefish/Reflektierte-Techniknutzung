if(!self.define){let o,l={};const i=(i,n)=>(i=new URL(i+".js",n).href,l[i]||new Promise((l=>{if("document"in self){const o=document.createElement("script");o.src=i,o.onload=l,document.head.appendChild(o)}else o=i,importScripts(i),l()})).then((()=>{let o=l[i];if(!o)throw new Error(`Module ${i} didn’t register its module`);return o})));self.define=(n,r)=>{const t=o||("document"in self?document.currentScript.src:"")||location.href;if(l[t])return;let e={};const s=o=>i(o,t),f={module:{uri:t},exports:e,require:s};l[t]=Promise.all(n.map((o=>f[o]||s(o)))).then((o=>(r(...o),e)))}}define(["./workbox-6567b62a"],(function(o){"use strict";o.setCacheNameDetails({prefix:"tests"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/css/app.13563b2f.css",revision:null},{url:"/css/chunk-vendors.efa3b8f0.css",revision:null},{url:"/fonts/roboto-cyrillic-400-italic.54700075.woff",revision:null},{url:"/fonts/roboto-cyrillic-400-italic.b4cf25ee.woff2",revision:null},{url:"/fonts/roboto-cyrillic-400-normal.19f93502.woff",revision:null},{url:"/fonts/roboto-cyrillic-400-normal.2d9c9d60.woff2",revision:null},{url:"/fonts/roboto-cyrillic-ext-400-italic.778367cb.woff2",revision:null},{url:"/fonts/roboto-cyrillic-ext-400-italic.fb4c26f4.woff",revision:null},{url:"/fonts/roboto-cyrillic-ext-400-normal.02e18372.woff",revision:null},{url:"/fonts/roboto-cyrillic-ext-400-normal.d7827ae3.woff2",revision:null},{url:"/fonts/roboto-latin-400-italic.002b6fe3.woff",revision:null},{url:"/fonts/roboto-latin-400-italic.8ed3d75f.woff2",revision:null},{url:"/fonts/roboto-latin-400-normal.d6d4cf7b.woff",revision:null},{url:"/fonts/roboto-latin-400-normal.f2894edc.woff2",revision:null},{url:"/fonts/roboto-latin-ext-400-italic.55e00447.woff2",revision:null},{url:"/fonts/roboto-latin-ext-400-italic.d6d0c193.woff",revision:null},{url:"/fonts/roboto-latin-ext-400-normal.21abc8c8.woff2",revision:null},{url:"/fonts/roboto-latin-ext-400-normal.9600b4a6.woff",revision:null},{url:"/index.html",revision:"95f7703ee876c6b47633a25792c51332"},{url:"/js/app.f62d1e3d.js",revision:null},{url:"/js/chunk-vendors.5f5ec320.js",revision:null},{url:"/manifest.json",revision:"14b07612eddd8b3a83dbb0504e0a2f9d"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
