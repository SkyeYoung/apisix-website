"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4245],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(25773),o=(n(27378),n(35318));const a={title:"APISIX Architecture: How to Dynamically Manage NGINX Cluster?",author:"Hui Tao",keywords:["API Gateway","Apache APISIX","Nginx","Lua","Dynamic Management"],date:"2021-08-10",description:"This article mainly introduces the principle of APISIX to implement REST API remote control of Nginx cluster based on APISIX 2.8, OpenResty 1.19.3.2 and Nginx 1.19.3.",tags:["Ecosystem"]},i=void 0,c={permalink:"/blog/2021/08/10/apisix-nginx",source:"@site/blog/2021/08/10/apisix-nginx.md",title:"APISIX Architecture: How to Dynamically Manage NGINX Cluster?",description:"This article mainly introduces the principle of APISIX to implement REST API remote control of Nginx cluster based on APISIX 2.8, OpenResty 1.19.3.2 and Nginx 1.19.3.",date:"2021-08-10T00:00:00.000Z",formattedDate:"August 10, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:16.665,truncated:!0,authors:[{name:"Hui Tao"}],prevItem:{title:"My first PR in the Apache APISIX community",permalink:"/blog/2021/08/11/interview-tuzhengsong"},nextItem:{title:"Hyperchain Technology implements BaaS platform with APISIX",permalink:"/blog/2021/08/09/apache-apisix-in-quliankeji"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article is re-posted from Tao Hui's personal blog, and introduces the principles of Apache APISIX for REST API remote control of Nginx clusters based on APISIX version 2.8, OpenResty version 1.19.3.2, and Nginx version 1.19.3.")))}u.isMDXComponent=!0}}]);