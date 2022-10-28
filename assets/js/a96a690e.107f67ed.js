"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[16268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20095:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"proxy-mirror"},i=void 0,o={unversionedId:"plugins/proxy-mirror",id:"version-2.13/plugins/proxy-mirror",isDocsHomePage:!1,title:"proxy-mirror",description:"The proxy-mirror plugin, which provides the ability to mirror client requests.",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/proxy-mirror.md",sourceDirName:"plugins",slug:"/plugins/proxy-mirror",permalink:"/docs/apisix/2.13/plugins/proxy-mirror",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"proxy-mirror"},sidebar:"version-2.13/docs",previous:{title:"request-validation",permalink:"/docs/apisix/2.13/plugins/request-validation"},next:{title:"api-breaker",permalink:"/docs/apisix/2.13/plugins/api-breaker"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Customize proxy timeouts for mirrored sub-request",id:"customize-proxy-timeouts-for-mirrored-sub-request",children:[]}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The proxy-mirror plugin, which provides the ability to mirror client requests."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),": The response returned by the mirror request is ignored."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"host"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Specify a mirror service address, e.g. ",(0,a.kt)("a",{parentName:"td",href:"http://127.0.0.1:9797"},"http://127.0.0.1:9797")," (address needs to contain scheme: http or https, and without the path part)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the mirror request's path part. Without it the current path will be used.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sample_ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"[0.00001, 1]"),(0,a.kt)("td",{parentName:"tr",align:null},"the sample ratio that requests will be mirrored.")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"enable-the-plugin"},"Enable the plugin"),(0,a.kt)("p",null,"example 1:  enable the proxy-mirror plugin for a specific route :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-mirror": {\n           "host": "http://127.0.0.1:9797"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("p",null,"Test plugin\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 12\nConnection: keep-alive\nServer: APISIX web server\nDate: Wed, 18 Mar 2020 13:01:11 GMT\nLast-Modified: Thu, 20 Feb 2020 14:21:41 GMT\n\nhello world\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since the specified mirror address is 127.0.0.1:9797, so to verify whether this plugin is in effect, we need to confirm on the service with port 9797.\nFor example, we can start a simple server:  python -m SimpleHTTPServer 9797")),(0,a.kt)("h4",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"Remove the corresponding JSON in the plugin configuration to disable the plugin immediately without restarting the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1999": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"The plugin has been disabled now."),(0,a.kt)("h2",{id:"customize-proxy-timeouts-for-mirrored-sub-request"},"Customize proxy timeouts for mirrored sub-request"),(0,a.kt)("p",null,"We can customize proxy timeouts for the mirrored sub-request in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin_attr")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),". This is useful while mirroring traffic to a slow backend in a long connection scenario."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connect"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"60s"),(0,a.kt)("td",{parentName:"tr",align:null},"connect timeout to the mirrored upstream")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"read"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"60s"),(0,a.kt)("td",{parentName:"tr",align:null},"read timeout to the mirrored upstream")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"send"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"60s"),(0,a.kt)("td",{parentName:"tr",align:null},"send timeout to the mirrored upstream")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  proxy-mirror:\n    timeout:\n      connect: 2000ms\n      read: 2000ms\n      send: 2000ms\n")))}s.isMDXComponent=!0}}]);