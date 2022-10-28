"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95544],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93917:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"workflow",keywords:["APISIX","Plugin","workflow","\u6d41\u91cf\u63a7\u5236"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `workflow` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e\u6b64\u63d2\u4ef6\u8fdb\u884c\u590d\u6742\u7684\u6d41\u91cf\u64cd\u4f5c\u3002"},i=void 0,o={unversionedId:"plugins/workflow",id:"plugins/workflow",isDocsHomePage:!1,title:"workflow",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `workflow` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e\u6b64\u63d2\u4ef6\u8fdb\u884c\u590d\u6742\u7684\u6d41\u91cf\u64cd\u4f5c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/workflow.md",sourceDirName:"plugins",slug:"/plugins/workflow",permalink:"/zh/docs/apisix/next/plugins/workflow",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/workflow.md",tags:[],version:"current",frontMatter:{title:"workflow",keywords:["APISIX","Plugin","workflow","\u6d41\u91cf\u63a7\u5236"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `workflow` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e\u6b64\u63d2\u4ef6\u8fdb\u884c\u590d\u6742\u7684\u6d41\u91cf\u64cd\u4f5c\u3002"},sidebar:"docs",previous:{title:"aws-lambda",permalink:"/zh/docs/apisix/next/plugins/aws-lambda"},next:{title:"openfunction",permalink:"/zh/docs/apisix/next/plugins/openfunction"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"<code>actions</code> \u5c5e\u6027",id:"actions-\u5c5e\u6027",children:[]}]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"workflow")," \u63d2\u4ef6\u5f15\u5165 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr")," \u6765\u63d0\u4f9b\u590d\u6742\u7684\u6d41\u91cf\u63a7\u5236\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.case"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[array]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'\u7531\u4e00\u4e2a\u6216\u591a\u4e2a{var, operator, val}\u5143\u7d20\u7ec4\u6210\u7684\u5217\u8868\uff0c\u7c7b\u4f3c\u8fd9\u6837\uff1a{{var, operator, val}, {var, operator, val}, ...}}\u3002\u4f8b\u5982\uff1a{"arg_name", "==", "json"}\uff0c\u8868\u793a\u5f53\u524d\u8bf7\u6c42\u53c2\u6570 name \u662f json\u3002\u8fd9\u91cc\u7684 var \u4e0e NGINX \u5185\u90e8\u81ea\u8eab\u53d8\u91cf\u547d\u540d\u4fdd\u6301\u4e00\u81f4\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u4f7f\u7528 request_uri\u3001host \u7b49\uff1b\u5bf9\u4e8e operator \u90e8\u5206\uff0c\u76ee\u524d\u5df2\u652f\u6301\u7684\u8fd0\u7b97\u7b26\u6709 ==\u3001~=\u3001~~\u3001>\u3001<\u3001in\u3001has \u548c ! \u3002\u5173\u4e8e\u64cd\u4f5c\u7b26\u7684\u5177\u4f53\u7528\u6cd5\u8bf7\u53c2\u8003 ',(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"operator-list")," \u90e8\u5206\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rules.actions"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"case")," \u6210\u529f\u5339\u914d\u65f6\u8981\u6267\u884c\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"actions"),"\u3002\u76ee\u524d\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"actions")," \u4e2d\u53ea\u652f\u6301\u4e00\u4e2a\u5143\u7d20\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"actions")," \u7684\u552f\u4e00\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20\u53ef\u4ee5\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"return")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"limit-count"),"\u3002")))),(0,r.kt)("h3",{id:"actions-\u5c5e\u6027"},(0,r.kt)("inlineCode",{parentName:"h3"},"actions")," \u5c5e\u6027"),(0,r.kt)("h4",{id:"return"},"return"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actions","[1]",".return"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u8fd4\u56de\u5230\u5ba2\u6237\u7aef\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actions","[1]",".","[2]",".code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684 HTTP \u72b6\u6001\u7801\u3002")))),(0,r.kt)("h4",{id:"limit-count"},"limit-count"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actions","[1]",".limit-count"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"td"},"limit-count")," \u63d2\u4ef6\u7684\u529f\u80fd\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actions","[1]",".","[2]"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limit-count")," \u63d2\u4ef6\u7684\u914d\u7f6e\u3002")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"rules")," \u4e2d\uff0c\u6309\u7167 ",(0,r.kt)("inlineCode",{parentName:"p"},"rules")," \u7684\u6570\u7ec4\u4e0b\u6807\u987a\u5e8f\u4f9d\u6b21\u5339\u914d ",(0,r.kt)("inlineCode",{parentName:"p"},"case"),"\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," \u5339\u914d\u6210\u529f\uff0c\u5219\u76f4\u63a5\u6267\u884c\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),"\u3002"))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u8def\u7531\u4e2d\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/hello/*",\n    "plugins":{\n        "workflow":{\n            "rules":[\n                {\n                    "case":[\n                        ["uri", "==", "/hello/rejected"]\n                    ],\n                    "actions":[\n                        [\n                            "return",\n                            {"code": 403}\n                        ]\n                    ]\n                },\n                {\n                    "case":[\n                        ["uri", "==", "/hello/v2/appid"]\n                    ],\n                    "actions":[\n                        [\n                            "limit-count",\n                            {\n                                "count":2,\n                                "time_window":60,\n                                "rejected_code":429\n                            }\n                        ]\n                    ]\n                }\n            ]\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5982\u4e0a\uff0c\u6211\u4eec\u542f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow")," \u63d2\u4ef6\uff0c\u5982\u679c\u8bf7\u6c42\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"rules")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," \u5339\u914d\uff0c\u5219\u4f1a\u6267\u884c\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1: \u5982\u679c\u8bf7\u6c42\u7684 uri \u662f ",(0,r.kt)("inlineCode",{parentName:"strong"},"/hello/rejected"),"\uff0c\u5219\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u72b6\u6001\u7801 ",(0,r.kt)("inlineCode",{parentName:"strong"},"403"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/hello/rejected -i\nHTTP/1.1 403 Forbidden\n......\n\n{"error_msg":"rejected by workflow"}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2: \u5982\u679c\u8bf7\u6c42\u7684 uri \u662f ",(0,r.kt)("inlineCode",{parentName:"strong"},"/hello/v2/appid"),"\uff0c\u5219\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"strong"},"limit-count")," \u63d2\u4ef6\uff0c\u9650\u5236\u8bf7\u6c42\u7684\u6570\u91cf\u4e3a 2\uff0c\u65f6\u95f4\u7a97\u53e3\u4e3a 60 \u79d2\uff0c\u5982\u679c\u8d85\u8fc7\u9650\u5236\u6570\u91cf\uff0c\u5219\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u72b6\u6001\u7801 ",(0,r.kt)("inlineCode",{parentName:"strong"},"429"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:0080/hello/v2/appid -i\nHTTP/1.1 200 OK\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:0080/hello/v2/appid -i\nHTTP/1.1 200 OK\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:0080/hello/v2/appid -i\nHTTP/1.1 429 Too Many Requests\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3: \u5982\u679c\u8bf7\u6c42\u4e0d\u80fd\u88ab\u4efb\u4f55 ",(0,r.kt)("inlineCode",{parentName:"strong"},"case")," \u5339\u914d\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"strong"},"workflow")," \u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u64cd\u4f5c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:0080/hello/fake -i\nHTTP/1.1 200 OK\n")),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/hello/*",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);