"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40664],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?i.createElement(g,c(c({ref:n},s),{},{components:t})):i.createElement(g,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37419:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(87462),r=(t(67294),t(3905));const o={title:"Plugin Config"},c=void 0,a={unversionedId:"architecture-design/plugin-config",id:"version-2.15/architecture-design/plugin-config",isDocsHomePage:!1,title:"Plugin Config",description:"Plugin Configs are used to extract commonly used Plugin configurations and can be bound directly to a Route.",source:"@site/docs-apisix_versioned_docs/version-2.15/architecture-design/plugin-config.md",sourceDirName:"architecture-design",slug:"/architecture-design/plugin-config",permalink:"/docs/apisix/architecture-design/plugin-config",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"Plugin Config"},sidebar:"version-2.15/docs",previous:{title:"APISIX",permalink:"/docs/apisix/architecture-design/apisix"},next:{title:"Debug Mode",permalink:"/docs/apisix/architecture-design/debug-mode"}},l=[],u={toc:l};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Plugin Configs are used to extract commonly used ",(0,r.kt)("a",{parentName:"p",href:"./plugin.md"},"Plugin")," configurations and can be bound directly to a ",(0,r.kt)("a",{parentName:"p",href:"./route.md"},"Route"),"."),(0,r.kt)("p",null,"The example below illustrates how this can be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# create a plugin config\n$ curl http://127.0.0.1:9080/apisix/admin/plugin_configs/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "desc": "blah",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\'\n\n# bind it to route\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"When APISIX can't find the Plugin Config with the ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", the requests reaching this Route are terminated with a status code of 503."),(0,r.kt)("p",null,"If a Route already has the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," field configured, the plugins in the Plugin Config will effectively be merged to it. The same plugin in the Plugin Config will override the ones configured directly in the Route."),(0,r.kt)("p",null,"For example, if we configure a Plugin Config as shown below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "desc": "I am plugin_config 1",\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')),(0,r.kt)("p",null,"to a Route as shown below,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 20,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"the effective configuration will be as the one shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')))}s.isMDXComponent=!0}}]);