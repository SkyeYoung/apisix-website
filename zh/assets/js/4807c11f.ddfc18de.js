"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14989:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"server-info",keywords:["APISIX","Plugin","Server info","server-info"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `server-info` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,o={unversionedId:"plugins/server-info",id:"version-2.15/plugins/server-info",isDocsHomePage:!1,title:"server-info",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `server-info` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/plugins/server-info.md",sourceDirName:"plugins",slug:"/plugins/server-info",permalink:"/zh/docs/apisix/plugins/server-info",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"server-info",keywords:["APISIX","Plugin","Server info","server-info"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `server-info` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-2.15/docs",previous:{title:"real-ip",permalink:"/zh/docs/apisix/plugins/real-ip"},next:{title:"ext-plugin-pre-req",permalink:"/zh/docs/apisix/plugins/ext-plugin-pre-req"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u63d2\u4ef6\u63a5\u53e3",id:"\u63d2\u4ef6\u63a5\u53e3",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u81ea\u5b9a\u4e49\u670d\u52a1\u4fe1\u606f\u4e0a\u62a5\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u670d\u52a1\u4fe1\u606f\u4e0a\u62a5\u914d\u7f6e",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"server-info")," \u63d2\u4ef6\u53ef\u4ee5\u5b9a\u671f\u5c06\u670d\u52a1\u57fa\u672c\u4fe1\u606f\u4e0a\u62a5\u81f3 etcd\u3002"),(0,a.kt)("p",null,"\u670d\u52a1\u4fe1\u606f\u4e2d\u6bcf\u4e00\u9879\u7684\u542b\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"boot_time"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"APISIX \u670d\u52a1\u5b9e\u4f8b\u7684\u542f\u52a8\u65f6\u95f4\uff08UNIX \u65f6\u95f4\u6233\uff09\uff0c\u5982\u679c\u5bf9 APISIX \u8fdb\u884c\u70ed\u66f4\u65b0\u64cd\u4f5c\uff0c\u8be5\u503c\u5c06\u88ab\u91cd\u7f6e\u3002\u666e\u901a\u7684 reload \u64cd\u4f5c\u4e0d\u4f1a\u5f71\u54cd\u8be5\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"APISIX \u670d\u52a1\u5b9e\u4f8b id\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"etcd_version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"etcd \u96c6\u7fa4\u7684\u7248\u672c\u4fe1\u606f\uff0c\u5982\u679c APISIX \u548c etcd \u96c6\u7fa4\u4e4b\u95f4\u5b58\u5728\u7f51\u7edc\u5206\u533a\uff0c\u8be5\u503c\u5c06\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},'"unknown"'),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"APISIX \u7248\u672c\u4fe1\u606f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hostname"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u90e8\u7f72 APISIX \u7684\u4e3b\u673a\u6216 Pod \u7684\u4e3b\u673a\u540d\u4fe1\u606f\u3002")))),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("p",null,"\u65e0\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u63a5\u53e3"},"\u63d2\u4ef6\u63a5\u53e3"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/control-api"},"Control API")," \u4e0b\u66b4\u9732\u4e86\u4e00\u4e2a API \u63a5\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/server_info"),"\u3002"),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u9ed8\u8ba4\u662f\u7981\u7528\u72b6\u6001\uff0c\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml"),"\uff09\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"server-info")," \u63d2\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:                          # plugin list\n  - ...\n  - server-info\n")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u670d\u52a1\u4fe1\u606f\u4e0a\u62a5\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u670d\u52a1\u4fe1\u606f\u4e0a\u62a5\u914d\u7f6e"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml")," \u6587\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin_attr")," \u90e8\u5206\u4fee\u6539\u4e0a\u62a5\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u4e0b\u8868\u662f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"report_ttl"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"36"),(0,a.kt)("td",{parentName:"tr",align:null},"etcd \u4e2d\u670d\u52a1\u4fe1\u606f\u4fdd\u5b58\u7684 TTL\uff08\u5355\u4f4d\uff1a\u79d2\uff0c\u6700\u5927\u503c\uff1a86400\uff0c\u6700\u5c0f\u503c\uff1a3\uff09\u3002")))),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u793a\u4f8b\u662f\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"\uff09\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin_attr")," \u90e8\u5206\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"report_ttl")," \u8bbe\u7f6e\u4e3a 1 \u5206\u949f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugin_attr:\n  server-info:\n    report_ttl: 60\n")),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5728\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"server-info")," \u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u7684 Control API \u6765\u8bbf\u95ee\u5230\u8fd9\u4e9b\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9090/v1/server_info -s | jq .\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "etcd_version": "3.5.0",\n  "id": "b7ce1c5c-b1aa-4df7-888a-cbe403f3e948",\n  "hostname": "fedora32",\n  "version": "2.1",\n  "boot_time": 1608522102\n}\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"/docs/dashboard/USER_GUIDE"},"APISIX Dashboard")," \u67e5\u770b\u670d\u52a1\u4fe1\u606f\u62a5\u544a\u3002"))),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u7981\u7528\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"server-info")," \u4ece\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u63d2\u4ef6\u5217\u8868\u5220\u9664\uff0c\u91cd\u65b0\u52a0\u8f7d APISIX \u540e\u5373\u53ef\u751f\u6548\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:    # plugin list\n  - ...\n")))}d.isMDXComponent=!0}}]);