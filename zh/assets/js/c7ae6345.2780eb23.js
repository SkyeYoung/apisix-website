"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[19375],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53654:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const p={title:"Upstream"},o=void 0,i={unversionedId:"terminology/upstream",id:"terminology/upstream",isDocsHomePage:!1,title:"Upstream",description:"Upstream \u662f\u865a\u62df\u4e3b\u673a\u62bd\u8c61\uff0c\u5bf9\u7ed9\u5b9a\u7684\u591a\u4e2a\u670d\u52a1\u8282\u70b9\u6309\u7167\u914d\u7f6e\u89c4\u5219\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002Upstream \u7684\u5730\u5740\u4fe1\u606f\u53ef\u4ee5\u76f4\u63a5\u914d\u7f6e\u5230 Route\uff08\u6216 Service) \u4e0a\uff0c\u5f53 Upstream \u6709\u91cd\u590d\u65f6\uff0c\u5c31\u9700\u8981\u7528\u201c\u5f15\u7528\u201d\u65b9\u5f0f\u907f\u514d\u91cd\u590d\u4e86\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/terminology/upstream.md",sourceDirName:"terminology",slug:"/terminology/upstream",permalink:"/zh/docs/apisix/next/terminology/upstream",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/terminology/upstream.md",tags:[],version:"current",frontMatter:{title:"Upstream"},sidebar:"docs",previous:{title:"Service",permalink:"/zh/docs/apisix/next/terminology/service"},next:{title:"batch-requests",permalink:"/zh/docs/apisix/next/plugins/batch-requests"}},l=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",children:[]}],s={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Upstream \u662f\u865a\u62df\u4e3b\u673a\u62bd\u8c61\uff0c\u5bf9\u7ed9\u5b9a\u7684\u591a\u4e2a\u670d\u52a1\u8282\u70b9\u6309\u7167\u914d\u7f6e\u89c4\u5219\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002Upstream \u7684\u5730\u5740\u4fe1\u606f\u53ef\u4ee5\u76f4\u63a5\u914d\u7f6e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Route"),"\uff08\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),") \u4e0a\uff0c\u5f53 Upstream \u6709\u91cd\u590d\u65f6\uff0c\u5c31\u9700\u8981\u7528\u201c\u5f15\u7528\u201d\u65b9\u5f0f\u907f\u514d\u91cd\u590d\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/upstream-example.png",alt:"Upstream \u793a\u4f8b"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u901a\u8fc7\u521b\u5efa Upstream \u5bf9\u8c61\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u7528 ID \u65b9\u5f0f\u5f15\u7528\uff0c\u5c31\u53ef\u4ee5\u786e\u4fdd\u53ea\u7ef4\u62a4\u4e00\u4e2a\u5bf9\u8c61\u7684\u503c\u4e86\u3002"),(0,r.kt)("p",null,"Upstream \u7684\u914d\u7f6e\u53ef\u4ee5\u88ab\u76f4\u63a5\u7ed1\u5b9a\u5728\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u4e2d\uff0c\u4e5f\u53ef\u4ee5\u88ab\u7ed1\u5b9a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," \u4e2d\uff0c\u4e0d\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u4e2d\u7684\u914d\u7f6e\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002\u8fd9\u91cc\u7684\u4f18\u5148\u7ea7\u884c\u4e3a\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin")," \u975e\u5e38\u76f8\u4f3c\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("p",null,"APISIX \u7684 Upstream \u9664\u4e86\u57fa\u672c\u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\u9009\u62e9\u5916\uff0c\u8fd8\u652f\u6301\u5bf9\u4e0a\u6e38\u505a\u4e3b\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5\u3001\u91cd\u8bd5\u7b49\u903b\u8f91\uff0c\u5177\u4f53\u770b\u8fd9\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api#upstream"},"\u94fe\u63a5"),"\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u4e0a\u6e38\u5bf9\u8c61\u7528\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/upstreams/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "type": "chash",\n    "key": "remote_addr",\n    "nodes": {\n        "127.0.0.1:80": 1,\n        "foo.com:80": 2\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4e0a\u6e38\u5bf9\u8c61\u521b\u5efa\u540e\uff0c\u5747\u53ef\u4ee5\u88ab\u5177\u4f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," \u5f15\u7528\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream_id": 1\n}\'\n')),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u628a\u4e0a\u6e38\u5730\u5740\u76f4\u63a5\u7ed1\u5230\u67d0\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," \uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u914d\u7f6e\u4e86\u5065\u5eb7\u68c0\u67e5\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "127.0.0.1:1980": 1\n        }\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"../health-check.md"},"\u5065\u5eb7\u68c0\u67e5\u7684\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u51e0\u4e2a\u4f7f\u7528\u4e0d\u540c ",(0,r.kt)("inlineCode",{parentName:"p"},"hash_on")," \u7c7b\u578b\u7684\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,r.kt)("h4",{id:"consumer"},"Consumer"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a consumer \u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n    "key-auth": {\n           "key": "auth-jack"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u65b0\u5efa\u8def\u7531\uff0c\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u8ba4\u8bc1\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"upstream")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"hash_on")," \u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        },\n        "type": "chash",\n        "hash_on": "consumer"\n    },\n    "uri": "/server_port"\n}\'\n')),(0,r.kt)("p",null,"\u6d4b\u8bd5\u8bf7\u6c42\uff0c\u8ba4\u8bc1\u901a\u8fc7\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer_name")," \u5c06\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u54c8\u5e0c\u7b97\u6cd5\u7684\u54c8\u5e0c\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/server_port -H "apikey: auth-jack"\n')),(0,r.kt)("h5",{id:"cookie"},"Cookie"),(0,r.kt)("p",null,"\u65b0\u5efa\u8def\u7531\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Upstream"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"hash_on")," \u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"cookie"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hash_on_cookie",\n    "upstream": {\n        "key": "sid",\n        "type": "chash",\n        "hash_on": "cookie",\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u8bf7\u6c42\u643a\u5e26 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," curl http://127.0.0.1:9080/hash_on_cookie -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -H \"Cookie: sid=3c183a30cffcda1408daf1c61d47b274\"\n")),(0,r.kt)("h5",{id:"header"},"Header"),(0,r.kt)("p",null,"\u65b0\u5efa\u8def\u7531\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Upstream"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"hash_on")," \u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hash_on_header",\n    "upstream": {\n        "key": "content-type",\n        "type": "chash",\n        "hash_on": "header",\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u8bf7\u6c42\u643a\u5e26 ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," curl http://127.0.0.1:9080/hash_on_header -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -H \"Content-Type: application/json\"\n")))}c.isMDXComponent=!0}}]);