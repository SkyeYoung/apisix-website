"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1221],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,y=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},83567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u793e\u533a\u53cc\u5468\u62a5 6.16 - 6.30",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7\u3001\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 plugin_metadata\u3001`kafka` \u63d2\u4ef6\u65b0\u589e\u76f8\u5173\u53c2\u6570\u652f\u6301\u7b49\u529f\u80fd\u3002",tags:["Community"]},c=void 0,i={permalink:"/zh/blog/2022/07/07/weekly-report-0630",source:"@site/blog/2022/07/07/weekly-report-0630.md",title:"\u793e\u533a\u53cc\u5468\u62a5 6.16 - 6.30",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7\u3001\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 plugin_metadata\u3001`kafka` \u63d2\u4ef6\u65b0\u589e\u76f8\u5173\u53c2\u6570\u652f\u6301\u7b49\u529f\u80fd\u3002",date:"2022-07-07T00:00:00.000Z",formattedDate:"2022\u5e747\u67087\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:3.14,truncated:!0,authors:[],prevItem:{title:"\u4f7f\u7528 Prometheus \u76d1\u63a7\u4e91\u539f\u751f API \u7f51\u5173 APISIX",permalink:"/zh/blog/2022/07/13/monitor-api-gateway-apisix-with-prometheus"},nextItem:{title:"\u4f7f\u7528 Keycloak \u4e0e API \u7f51\u5173\u4fdd\u62a4\u4f60\u7684 API",permalink:"/zh/blog/2022/07/06/use-keycloak-with-api-gateway-to-secure-apis"}},l={authorsImageUrls:[]},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ece 6.16 - 6.30\uff0c\u6709 29 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 98 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")))}m.isMDXComponent=!0}}]);