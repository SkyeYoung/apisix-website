"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[39527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=u(n),s=l,m=g["".concat(p,".").concat(s)]||g[s]||c[s]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25066:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={title:"udp-logger"},i=void 0,o={unversionedId:"plugins/udp-logger",id:"version-2.14/plugins/udp-logger",isDocsHomePage:!1,title:"udp-logger",description:"udp-logger \u662f\u7528\u4e8e\u5c06\u65e5\u5fd7\u6570\u636e\u53d1\u9001\u5230 UDP \u670d\u52a1\u7684\u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.14/plugins/udp-logger.md",sourceDirName:"plugins",slug:"/plugins/udp-logger",permalink:"/zh/docs/apisix/2.14/plugins/udp-logger",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"udp-logger"},sidebar:"version-2.14/docs",previous:{title:"rocketmq-logger",permalink:"/zh/docs/apisix/2.14/plugins/rocketmq-logger"},next:{title:"clickhouse-logger",permalink:"/zh/docs/apisix/2.14/plugins/clickhouse-logger"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u5f00\u542f",id:"\u5982\u4f55\u5f00\u542f",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"udp-logger")," \u662f\u7528\u4e8e\u5c06\u65e5\u5fd7\u6570\u636e\u53d1\u9001\u5230 UDP \u670d\u52a1\u7684\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u4ee5\u5b9e\u73b0\u5c06\u65e5\u5fd7\u6570\u636e\u4ee5 JSON \u683c\u5f0f\u53d1\u9001\u5230\u76d1\u63a7\u5de5\u5177\u6216\u5176\u5b83 UDP \u670d\u52a1\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u6b64\u63d2\u4ef6\u63d0\u4f9b\u4e86\u5c06\u6279\u5904\u7406\u6570\u636e\u6279\u91cf\u63a8\u9001\u5230\u5916\u90e8 UDP \u670d\u52a1\u5668\u7684\u529f\u80fd\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u65e5\u5fd7\u6570\u636e\uff0c\u8bf7\u7b49\u5f85\u4e00\u4e9b\u65f6\u95f4\uff0c\u5b83\u4f1a\u5728\u6211\u4eec\u7684\u6279\u5904\u7406\u5904\u7406\u5668\u4e2d\u7684\u8ba1\u65f6\u5668\u529f\u80fd\u5230\u671f\u540e\u81ea\u52a8\u53d1\u9001\u65e5\u5fd7"),(0,l.kt)("p",null,"\u6709\u5173 Apache APISIX \u4e2d Batch-Processor \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.14/batch-processor"},"Batch-Processor")),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"UDP \u670d\u52a1\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6570\u636e\u8d85\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"udp logger"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8bc6\u522b\u6279\u5904\u7406\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5305\u62ec\u8bf7\u6c42 body")))),(0,l.kt)("p",null,"\u672c\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6216\u81ea\u5b9a\u4e49\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.14/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor")," \u914d\u7f6e\u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f"},"\u5982\u4f55\u5f00\u542f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4e3a\u6307\u5b9a\u8def\u7531\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"li"},"udp-logger")," \u63d2\u4ef6\u7684\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "udp-logger": {\n                 "host": "127.0.0.1",\n                 "port": 3000,\n                 "batch_max_size": 1,\n                 "name": "udp logger"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6210\u529f\u7684\u60c5\u51b5\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u60f3\u8981\u7981\u7528\u201cudp-logger\u201d\u63d2\u4ef6\uff0c\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u5c06\u5bf9\u5e94\u7684\u63d2\u4ef6\u914d\u7f6e\u4ece json \u914d\u7f6e\u5220\u9664\uff0c\u5c31\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);