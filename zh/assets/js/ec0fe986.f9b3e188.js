"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[57251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93499:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"The internal of apisix java plugin runner"},o=void 0,l={unversionedId:"the-internal-of-apisix-java-plugin-runner",id:"version-0.1/the-internal-of-apisix-java-plugin-runner",isDocsHomePage:!1,title:"The internal of apisix java plugin runner",description:"This article explains the internal design of apisix-java-plugin-runner.",source:"@site/docs-apisix-java-plugin-runner_versioned_docs/version-0.1/the-internal-of-apisix-java-plugin-runner.md",sourceDirName:".",slug:"/the-internal-of-apisix-java-plugin-runner",permalink:"/zh/docs/java-plugin-runner/0.1/the-internal-of-apisix-java-plugin-runner",editUrl:null,tags:[],version:"0.1",frontMatter:{title:"The internal of apisix java plugin runner"},sidebar:"version-0.1/docs",previous:{title:"How it works",permalink:"/zh/docs/java-plugin-runner/0.1/how-it-works"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Serialization",id:"serialization",children:[]},{value:"Codec",id:"codec",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article explains the internal design of apisix-java-plugin-runner."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#communication"},"Communication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#serialization"},"Serialization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#codec"},"Codec"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The apisix-java-plugin-runner designed as a TCP server built using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reactor/reactor-netty"},"reactor-netty"),",\nit provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginFilter")," interface for users to implement."),(0,a.kt)("p",null,"Users only need to focus on their business logic, not on the details of how the apisix java plugin runner communicates with APISIX."),(0,a.kt)("p",null,"The inter-process communication between them is depicted by the following diagram."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-java-plugin-runner/release/0.1/docs/assets/images/the-internal-of-apisix-java-plugin-runner.png",alt:"the-internal-of-apisix-java-plugin-runner"})),(0,a.kt)("h2",{id:"communication"},"Communication"),(0,a.kt)("p",null,"apisix-java-plugin-runner and APISIX use the Unix Domain Socket for inter-process communication,\nso they need to be deployed in the same instance."),(0,a.kt)("p",null,"apisix-java-plugin-runner is managed by APISIX. APISIX starts the apisix-java-plugin-runner when it starts and ends it when it\nends. if the apisix-java-plugin-runner quits in the middle, APISIX will restart it automatically."),(0,a.kt)("h2",{id:"serialization"},"Serialization"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/flatbuffers"},"flatbuffers")),(0,a.kt)("p",null,"FlatBuffers is a cross platform serialization library architected for maximum memory efficiency.\nIt allows you to directly access serialized data without parsing/unpacking it first, while still having great forward/backward compatibility."),(0,a.kt)("p",null,"You can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/ext-plugin-proto/blob/main/ext-plugin.fbs"},"ext-plugin.fbs"),"\nschema file to see how Lua and Java layout the serialized objects."),(0,a.kt)("h2",{id:"codec"},"Codec"),(0,a.kt)("p",null,"apisix-java-plugin-runner and APISIX use a private binary protocol for coding and decoding.\nThe protocol format is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 byte of type + 3 bytes of length + data\n")),(0,a.kt)("p",null,"The type can be 0 ~ 7, and the length can be [0, 8M). The length of data is determined by length."),(0,a.kt)("p",null,"The current type takes the following values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 means error"),(0,a.kt)("li",{parentName:"ul"},"1 means prepare_conf"),(0,a.kt)("li",{parentName:"ul"},"2 means http_req_call")),(0,a.kt)("p",null,"The binary data generated by the flatbuffer serialization is placed in the data segment."))}s.isMDXComponent=!0}}]);