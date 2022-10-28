"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[55321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1910:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"response-rewrite",keywords:["APISIX","Plugin","Response Rewrite","response-rewrite"],description:"This document contains information about the Apache APISIX response-rewrite Plugin."},i=void 0,o={unversionedId:"plugins/response-rewrite",id:"plugins/response-rewrite",isDocsHomePage:!1,title:"response-rewrite",description:"This document contains information about the Apache APISIX response-rewrite Plugin.",source:"@site/docs/apisix/plugins/response-rewrite.md",sourceDirName:"plugins",slug:"/plugins/response-rewrite",permalink:"/docs/apisix/next/plugins/response-rewrite",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/response-rewrite.md",tags:[],version:"current",frontMatter:{title:"response-rewrite",keywords:["APISIX","Plugin","Response Rewrite","response-rewrite"],description:"This document contains information about the Apache APISIX response-rewrite Plugin."},sidebar:"docs",previous:{title:"ext-plugin-post-resp",permalink:"/docs/apisix/next/plugins/ext-plugin-post-resp"},next:{title:"proxy-rewrite",permalink:"/docs/apisix/next/plugins/proxy-rewrite"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," Plugin rewrites the content returned by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/upstream"},"Upstream")," and APISIX."),(0,r.kt)("p",null,"This Plugin can be useful in these scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To set ",(0,r.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-*")," field for supporting ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS"),"."),(0,r.kt)("li",{parentName:"ul"},"To set custom ",(0,r.kt)("inlineCode",{parentName:"li"},"status_code")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Location")," fields in the header to redirect.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/plugins/redirect"},"redirect")," Plugin to setup redirects."))),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 598]"),(0,r.kt)("td",{parentName:"tr",align:null},"New HTTP status code in the response. If unset, falls back to the original status code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"New body of the response. The content-length would also be reset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body_base64"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set, the body of the request will be decoded before writing to the client.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers.add"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Append the new headers to the response. The format is ",(0,r.kt)("inlineCode",{parentName:"td"},'["name: value", ...]'),". The values in the header can contain Nginx variables like ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"$balancer_ip"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers.set"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Rewriting the headers. The format is ",(0,r.kt)("inlineCode",{parentName:"td"},'{"name": "value", ...}'),". The values in the header can contain Nginx variables like ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"$balancer_ip"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers.remove"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Remove the headers. The format is ",(0,r.kt)("inlineCode",{parentName:"td"},'["name", ...]'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vars"),(0,r.kt)("td",{parentName:"tr",align:null},"array[]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr")," for a list of available operators."),(0,r.kt)("td",{parentName:"tr",align:null},"Nginx variable expressions to conditionally execute the rewrite. The Plugin will be executed unconditionally if this value is empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters"),(0,r.kt)("td",{parentName:"tr",align:null},"array[]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of filters that modify the response body by replacing one specified string with another.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters.regex"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Regex pattern to match on the response body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters.scope"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"once"'),(0,r.kt)("td",{parentName:"tr",align:null},'"once","global"'),(0,r.kt)("td",{parentName:"tr",align:null},"Range to substitute. ",(0,r.kt)("inlineCode",{parentName:"td"},"once")," substitutes the first match of ",(0,r.kt)("inlineCode",{parentName:"td"},"filters.regex")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"global")," does global substitution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters.replace"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Content to substitute with.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters.options"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"jo"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Regex options. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#ngxrematch"},"ngx.re.match"),".")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only one of ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," can be configured."))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"The example below enables the ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {\n        "response-rewrite": {\n            "body": "{\\"code\\":\\"ok\\",\\"message\\":\\"new json body\\"}",\n            "headers": {\n                "set": {\n                    "X-Server-id": 3,\n                    "X-Server-status": "on",\n                    "X-Server-balancer_addr": "$balancer_ip:$balancer_port"\n                }\n            },\n            "vars":[\n                [ "status","==",200 ]\n            ]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Here, ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," is configured to run the Plugin only on responses with a 200 status code."),(0,r.kt)("p",null,"Besides ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," operation, you can also ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," response header like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"headers": {\n    "add": [\n        "X-Server-balancer_addr: $balancer_ip:$balancer_port"\n    ],\n    "remove": [\n        "X-TO-BE-REMOVED"\n    ]\n}\n')),(0,r.kt)("p",null,"The execution order among those operations are ",'["add", "set", "remove"]',"."),(0,r.kt)("p",null,"If you are using the deprecated ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," configuration which puts the headers directly under ",(0,r.kt)("inlineCode",{parentName:"p"},"headers"),",\nyou need to move them to ",(0,r.kt)("inlineCode",{parentName:"p"},"headers.set"),"."),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Once you have enabled the Plugin as shown above, you can make a request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET -i  http://127.0.0.1:9080/test/index.html\n")),(0,r.kt)("p",null,"The response will be as shown below no matter what the response is from the Upstream:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nDate: Sat, 16 Nov 2019 09:15:12 GMT\nTransfer-Encoding: chunked\nConnection: keep-alive\nX-Server-id: 3\nX-Server-status: on\nX-Server-balancer_addr: 127.0.0.1:80\n\n{"code":"ok","message":"new json body"}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://openresty-reference.readthedocs.io/en/latest/Lua_Nginx_API/#ngxexit"},"ngx.exit")," will interrupt the execution of a request and returns its status code to Nginx."),(0,r.kt)("p",{parentName:"div"},"However, if ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx.exit")," is executed during an access phase, it will only interrupt the request processing phase and the response phase will still continue to run."),(0,r.kt)("p",{parentName:"div"},"So, if you have configured the ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," Plugin, it do a force overwrite of the response."),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Phase"),(0,r.kt)("th",{parentName:"tr",align:null},"rewrite"),(0,r.kt)("th",{parentName:"tr",align:null},"access"),(0,r.kt)("th",{parentName:"tr",align:null},"header_filter"),(0,r.kt)("th",{parentName:"tr",align:null},"body_filter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rewrite"),(0,r.kt)("td",{parentName:"tr",align:null},"ngx.exit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null},"ngx.exit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header_filter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"ngx.exit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body_filter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null},"ngx.exit")))))),(0,r.kt)("p",null,"The example below shows how you can replace a key in the response body. Here, the key X-Amzn-Trace-Id is replaced with X-Amzn-Trace-Id-Replace by configuring the filters attribute using regex:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "plugins":{\n    "response-rewrite":{\n      "headers":{\n        "set": {\n            "X-Server-id":3,\n            "X-Server-status":"on",\n            "X-Server-balancer_addr":"$balancer_ip:$balancer_port"\n        }\n      },\n      "filters":[\n        {\n          "regex":"X-Amzn-Trace-Id",\n          "scope":"global",\n          "replace":"X-Amzn-Trace-Id-Replace"\n        }\n      ],\n      "vars":[\n        [\n          "status",\n          "==",\n          200\n        ]\n      ]\n    }\n  },\n  "upstream":{\n    "type":"roundrobin",\n    "scheme":"https",\n    "nodes":{\n      "httpbin.org:443":1\n    }\n  },\n  "uri":"/*"\n}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET -i  http://127.0.0.1:9080/get\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nTransfer-Encoding: chunked\nX-Server-status: on\nX-Server-balancer-addr: 34.206.80.189:443\nX-Server-id: 3\n\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "127.0.0.1",\n    "User-Agent": "curl/7.29.0",\n    "X-Amzn-Trace-Id-Replace": "Root=1-629e0b89-1e274fdd7c23ca6e64145aa2",\n    "X-Forwarded-Host": "127.0.0.1"\n  },\n  "origin": "127.0.0.1, 117.136.46.203",\n  "url": "https://127.0.0.1/get"\n}\n\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);