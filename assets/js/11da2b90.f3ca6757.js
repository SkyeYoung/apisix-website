"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97252:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"node-status"},l=void 0,o={unversionedId:"plugins/node-status",id:"version-2.13/plugins/node-status",isDocsHomePage:!1,title:"node-status",description:"node-status is a plugin which we could get request status information through it's API.",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/node-status.md",sourceDirName:"plugins",slug:"/plugins/node-status",permalink:"/docs/apisix/2.13/plugins/node-status",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"node-status"},sidebar:"version-2.13/docs",previous:{title:"prometheus",permalink:"/docs/apisix/2.13/plugins/prometheus"},next:{title:"datadog",permalink:"/docs/apisix/2.13/plugins/datadog"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node-status")," is a plugin which we could get request status information through it's API."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"This plugin will add ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/status")," to get status information.\nYou may need to use ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugins/public-api"},"public-api")," plugin to expose it."),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),",\nthen you can add this plugin in any route.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - node-status\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Setup the route for the status API, which will use the ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/2.13/plugins/public-api"},"public-api")," plugin.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/ns -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/status",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Request with uri ",(0,i.kt)("inlineCode",{parentName:"li"},"/apisix/status"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl localhost:9080/apisix/status -i\nHTTP/1.1 200 OK\nDate: Tue, 03 Nov 2020 11:12:55 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"status":{"total":"23","waiting":"0","accepted":"22","writing":"1","handled":"22","active":"1","reading":"0"},"id":"6790a064-8f61-44ba-a6d3-5df42f2b1bb3"}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Parameter Description")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},"status information")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"total"),(0,i.kt)("td",{parentName:"tr",align:null},"the total number of client requests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"waiting"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of idle client connections waiting for a request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accepted"),(0,i.kt)("td",{parentName:"tr",align:null},"the total number of accepted client connections")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"writing"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is writing the response back to the client")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"handled"),(0,i.kt)("td",{parentName:"tr",align:null},"the total number of handled connections. Generally, the parameter value is the same as accepted unless some resource limits have been reached")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"active"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of active client connections including waiting connections")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reading"),(0,i.kt)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is reading the request header")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"APISIX's uid which is saved in apisix/conf/apisix.uid")))),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can delete ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix/conf/config.yaml"),",\nthen you can not add this plugin in any route.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"li"},"node-status")," plugin in the route, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/route1",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "192.168.1.100:80": 1\n        }\n    },\n    "plugins": {}\n}\'\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"You can also remove the route on ",(0,i.kt)("inlineCode",{parentName:"li"},"/apisix/status"),", no one can access the API.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl http://127.0.0.1:9080/apisix/admin/routes/ns -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")))}p.isMDXComponent=!0}}]);