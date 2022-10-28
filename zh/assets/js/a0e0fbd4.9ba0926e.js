"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5873],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,g=m["".concat(l,".").concat(b)]||m[b]||s[b]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const i={title:"API \u7f51\u5173 APISIX Public API \u5904\u7406\u80fd\u529b\u518d\u589e\u5f3a",authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API \u7f51\u5173","Security","\u63d2\u4ef6"],description:"\u4f60\u53ef\u4ee5\u901a\u8fc7 API \u7f51\u5173 Apache APISIX \u7684 public-api \u63d2\u4ef6\u4fdd\u62a4 APISIX \u63d2\u4ef6\u4e2d\u7684\u81ea\u5b9a\u4e49 API\uff0c\u672c\u6587\u7740\u91cd\u4ecb\u7ecd\u4e86 `public-api` \u63d2\u4ef6\u4e24\u79cd\u4f7f\u7528\u65b9\u6cd5\u548c\u4e00\u79cd\u573a\u666f\u793a\u4f8b\u3002",tags:["Plugins","Ecosystem"]},o=void 0,c={permalink:"/zh/blog/2022/03/01/apisix-integration-public-api-plugin",source:"@site/blog/2022/03/01/apisix-integration-public-api-plugin.md",title:"API \u7f51\u5173 APISIX Public API \u5904\u7406\u80fd\u529b\u518d\u589e\u5f3a",description:"\u4f60\u53ef\u4ee5\u901a\u8fc7 API \u7f51\u5173 Apache APISIX \u7684 public-api \u63d2\u4ef6\u4fdd\u62a4 APISIX \u63d2\u4ef6\u4e2d\u7684\u81ea\u5b9a\u4e49 API\uff0c\u672c\u6587\u7740\u91cd\u4ecb\u7ecd\u4e86 `public-api` \u63d2\u4ef6\u4e24\u79cd\u4f7f\u7528\u65b9\u6cd5\u548c\u4e00\u79cd\u573a\u666f\u793a\u4f8b\u3002",date:"2022-03-01T00:00:00.000Z",formattedDate:"2022\u5e743\u67081\u65e5",tags:[{label:"Plugins",permalink:"/zh/blog/tags/plugins"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:11,truncated:!0,authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"APISIX \u5728\u4f17\u5b89\u4fdd\u9669\u7684\u5e94\u7528\u5b9e\u8df5",permalink:"/zh/blog/2022/03/02/zhongan-usercase-with-apache-apisix"},nextItem:{title:"\u53ef\u89c2\u6d4b\u6027\u80fd\u529b\u5347\u7ea7\uff0cAPI \u7f51\u5173 Apache APISIX \u96c6\u6210 OpenTelemetry",permalink:"/zh/blog/2022/02/28/apisix-integration-opentelemetry-plugin"}},l={authorsImageUrls:[void 0,void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX ",(0,a.kt)("inlineCode",{parentName:"p"},"public-api")," \u63d2\u4ef6\u7684\u539f\u7406\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002")))}s.isMDXComponent=!0}}]);