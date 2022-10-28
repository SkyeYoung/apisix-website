"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[31912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8047:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"referer-restriction",keywords:["APISIX","API \u7f51\u5173","Referer restriction"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX referer-restriction \u63d2\u4ef6\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u901a\u8fc7\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06 referer \u8bf7\u6c42\u5934\u4e2d\u7684\u57df\u540d\u52a0\u5165\u9ed1\u540d\u5355\u6216\u8005\u767d\u540d\u5355\u6765\u9650\u5236\u5176\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee\u3002"},i=void 0,p={unversionedId:"plugins/referer-restriction",id:"plugins/referer-restriction",isDocsHomePage:!1,title:"referer-restriction",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX referer-restriction \u63d2\u4ef6\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u901a\u8fc7\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06 referer \u8bf7\u6c42\u5934\u4e2d\u7684\u57df\u540d\u52a0\u5165\u9ed1\u540d\u5355\u6216\u8005\u767d\u540d\u5355\u6765\u9650\u5236\u5176\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/referer-restriction.md",sourceDirName:"plugins",slug:"/plugins/referer-restriction",permalink:"/zh/docs/apisix/next/plugins/referer-restriction",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/referer-restriction.md",tags:[],version:"current",frontMatter:{title:"referer-restriction",keywords:["APISIX","API \u7f51\u5173","Referer restriction"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX referer-restriction \u63d2\u4ef6\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u901a\u8fc7\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06 referer \u8bf7\u6c42\u5934\u4e2d\u7684\u57df\u540d\u52a0\u5165\u9ed1\u540d\u5355\u6216\u8005\u767d\u540d\u5355\u6765\u9650\u5236\u5176\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee\u3002"},sidebar:"docs",previous:{title:"ua-restriction",permalink:"/zh/docs/apisix/next/plugins/ua-restriction"},next:{title:"consumer-restriction",permalink:"/zh/docs/apisix/next/plugins/consumer-restriction"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],s={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"referer-restriction")," \u63d2\u4ef6\u5141\u8bb8\u7528\u6237\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Referer")," \u8bf7\u6c42\u5934\u4e2d\u7684\u57df\u540d\u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u6765\u9650\u5236\u8be5\u57df\u540d\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u767d\u540d\u5355\u57df\u540d\u5217\u8868\u3002\u57df\u540d\u5f00\u5934\u53ef\u4ee5\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"*")," \u4f5c\u4e3a\u901a\u914d\u7b26\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blacklist"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u57df\u540d\u5217\u8868\u3002\u57df\u540d\u5f00\u5934\u53ef\u4ee5\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"*")," \u4f5c\u4e3a\u901a\u914d\u7b26\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},'"Your referer host is not allowed"'),(0,a.kt)("td",{parentName:"tr",align:null},"[1, 1024]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u672a\u5141\u8bb8\u8bbf\u95ee\u7684\u60c5\u51b5\u4e0b\u8fd4\u56de\u7684\u4fe1\u606f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bypass_missing"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"td"},"Referer")," \u8bf7\u6c42\u5934\u4e0d\u5b58\u5728\u6216\u683c\u5f0f\u6709\u8bef\uff0c\u5c06\u7ed5\u8fc7\u68c0\u67e5\u3002")))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"whitelist")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"blacklist")," \u5c5e\u6027\u65e0\u6cd5\u540c\u65f6\u5728\u540c\u4e00\u4e2a\u670d\u52a1\u6216\u8def\u7531\u4e0a\u4f7f\u7528\uff0c\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d\u4e4b\u4e00\u3002"))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u7279\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"referer-restriction")," \u63d2\u4ef6\uff0c\u5e76\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"whitelist")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"bypass_missing")," \u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "referer-restriction": {\n            "bypass_missing": true,\n            "whitelist": [\n                "xx.com",\n                "*.xx.com"\n            ]\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u8bf7\u6c42\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Referer: http://xx.com/x")," \u6d4b\u8bd5\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -H 'Referer: http://xx.com/x'\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u5934\u4e2d\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," \u72b6\u6001\u7801\u5219\u8868\u793a\u8bbf\u95ee\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5c06\u8bf7\u6c42\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Referer: http://yy.com/x"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -H 'Referer: http://yy.com/x'\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u5934\u4e2d\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"403")," \u72b6\u6001\u7801\uff0c\u5e76\u5728\u54cd\u5e94\u4f53\u4e2d\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," \u5c5e\u6027\u503c\uff0c\u4ee3\u8868\u8bbf\u95ee\u88ab\u963b\u6b62\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 403 Forbidden\n...\n{"message":"Your referer host is not allowed"}\n')),(0,a.kt)("p",null,"\u56e0\u4e3a\u542f\u7528\u63d2\u4ef6\u65f6\u4f1a\u5c06\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},"bypass_missing")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u6240\u4ee5\u672a\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"Refer")," \u8bf7\u6c42\u5934\u7684\u8bf7\u6c42\u5c06\u8df3\u8fc7\u68c0\u67e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u5934\u4e2d\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," \u72b6\u6001\u7801\uff0c\u4ee3\u8868\u8bbf\u95ee\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);