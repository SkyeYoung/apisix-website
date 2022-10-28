"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[52514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30909:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"ApisixRoute"},o=void 0,s={unversionedId:"concepts/apisix_route",id:"version-1.5.0/concepts/apisix_route",isDocsHomePage:!1,title:"ApisixRoute",description:"ApisixRoute is a CRD resource which focus on how to route traffic to\nexpected backend, it exposes many features supported by Apache APISIX.\nCompared to Ingress,\nfunctions are implemented in a more native way, with stronger semantics.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.5.0/concepts/apisix_route.md",sourceDirName:"concepts",slug:"/concepts/apisix_route",permalink:"/zh/docs/ingress-controller/concepts/apisix_route",editUrl:null,tags:[],version:"1.5.0",frontMatter:{title:"ApisixRoute"},sidebar:"version-1.5.0/docs",previous:{title:"ApisixPluginConfig/v2beta3 Reference",permalink:"/zh/docs/ingress-controller/references/apisix_pluginconfig_v2beta3"},next:{title:"ApisixUpstream",permalink:"/zh/docs/ingress-controller/concepts/apisix_upstream"}},p=[{value:"Path based route rules",id:"path-based-route-rules",children:[]},{value:"Advanced route features",id:"advanced-route-features",children:[]},{value:"Service Resolution Granularity",id:"service-resolution-granularity",children:[]},{value:"Weight Based Traffic Split",id:"weight-based-traffic-split",children:[]},{value:"Plugins",id:"plugins",children:[]},{value:"Websocket Proxy",id:"websocket-proxy",children:[]},{value:"TCP Route",id:"tcp-route",children:[]},{value:"UDP Route",id:"udp-route",children:[]}],c={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," is a CRD resource which focus on how to route traffic to\nexpected backend, it exposes many features supported by Apache APISIX.\nCompared to ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),",\nfunctions are implemented in a more native way, with stronger semantics."),(0,r.kt)("h2",{id:"path-based-route-rules"},"Path based route rules"),(0,r.kt)("p",null,"URI path are always used to split traffic, for instance, requests with host ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.com")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"/foo")," prefix should be routed to service ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," while requests which path is ",(0,r.kt)("inlineCode",{parentName:"p"},"/bar"),"\nshould be routed to service ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),", in the manner of ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute"),", the configuration\nshould be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: foo-bar-route\nspec:\n  http:\n  - name: foo\n    match:\n      hosts:\n      - foo.com\n      paths:\n      - "/foo*"\n    backends:\n    - serviceName: foo\n      servicePort: 80\n  - name: bar\n    match:\n      paths:\n        - "/bar"\n    backends:\n    - serviceName: bar\n      servicePort: 80\n')),(0,r.kt)("p",null,"There are two path types can be used, ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exact"),", default is ",(0,r.kt)("inlineCode",{parentName:"p"},"exact"),",\nwhile if ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," is desired, just append a ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),", for instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"/id/*")," matches\nall paths with the prefix of ",(0,r.kt)("inlineCode",{parentName:"p"},"/id/"),"."),(0,r.kt)("h2",{id:"advanced-route-features"},"Advanced route features"),(0,r.kt)("p",null,"Path based route are most common, but if it's not enough, try\nother route features in ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"methods"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"exprs"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"methods")," splits traffic according to the HTTP method, the following configurations routes requests\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," method to ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," service (a Kubernetes Service)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n        - /\n        methods:\n        - GET\n      backends:\n      - serviceName: foo\n        servicePort: 80\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"exprs")," allows user to configure match conditions with arbitrary predicates in HTTP, such as queries, HTTP headers, Cookie.\nIt's composed by several expressions, which in turn composed by subject, operator and value/set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n          - /\n        exprs:\n          - subject:\n              scope: Query\n              name: id\n            op: Equal\n            value: "2143"\n      backends:\n      - serviceName: foo\n        servicePort: 80\n')),(0,r.kt)("p",null,"The above configuration configures an extra route match condition, which asks the\nquery ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," must be equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"2143"),"."),(0,r.kt)("h2",{id:"service-resolution-granularity"},"Service Resolution Granularity"),(0,r.kt)("p",null,"By default a referenced Service will be watched, so\nit's newest endpoints list can be updated to Apache APISIX.\napisix-ingress-controller provides another mechanism that just use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP")," of this service, if that's what you want, just set\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"resolveGranularity")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," (default is ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n          - /*\n        methods:\n          - GET\n      backends:\n      - serviceName: foo\n        servicePort: 80\n        resolveGranularity: service\n")),(0,r.kt)("h2",{id:"weight-based-traffic-split"},"Weight Based Traffic Split"),(0,r.kt)("p",null,"There can more than one backend specified in one route rule,\nwhen multiple backends co-exist there, the traffic split based on weights\nwill be applied (which actually uses the ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/traffic-split/"},"traffic-split")," plugin in Apache APISIX).\nYou can specify weight for each backend, the default weight is ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n          - /*\n        methods:\n          - GET\n        exprs:\n          - subject:\n              scope: Header\n              name: User-Agent\n            op: RegexMatch\n            value: ".*Chrome.*"\n      backends:\n      - serviceName: foo\n        servicePort: 80\n        weight: 100\n      - serviceName: bar\n        servicePort: 81\n        weight: 50\n')),(0,r.kt)("p",null,"The above ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," has one route rule, which contains two backends ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),", the weight ratio is ",(0,r.kt)("inlineCode",{parentName:"p"},"100:50"),",\nwhich means ",(0,r.kt)("inlineCode",{parentName:"p"},"2/3")," requests (with ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," method and ",(0,r.kt)("inlineCode",{parentName:"p"},"User-Agent")," matching regex pattern ",(0,r.kt)("inlineCode",{parentName:"p"},".*Chrome.*"),") will be sent to service ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1/3")," requests\nwill be proxied to service ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),"."),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"Apache APISIX provides more than 70 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/docs/en/latest/plugins"},"plugins"),", which can be used\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute"),". All configuration items are named same to the one in APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n    - name: httpbin\n      match:\n        hosts:\n        - local.httpbin.org\n        paths:\n          - /*\n      backends:\n      - serviceName: foo\n        servicePort: 80\n      plugins:\n        - name: cors\n          enable: true\n")),(0,r.kt)("p",null,"The above configuration enables ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/cors.md"},"Cors")," plugin for requests\nwhich host is ",(0,r.kt)("inlineCode",{parentName:"p"},"local.httpbin.org"),"."),(0,r.kt)("h2",{id:"websocket-proxy"},"Websocket Proxy"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket#:~:text=WebSocket%20is%20a%20computer%20communications,WebSocket%20is%20distinct%20from%20HTTP."},"Websocket")," service can be proxied\nby creating a route with specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: ws-route\nspec:\n  http:\n    - name: websocket\n      match:\n        hosts:\n          - ws.foo.org\n        paths:\n          - /*\n      backends:\n      - serviceName: websocket-server\n        servicePort: 8080\n      websocket: true\n")),(0,r.kt)("h2",{id:"tcp-route"},"TCP Route"),(0,r.kt)("p",null,"apisix-ingress-controller supports the port-based tcp route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: tcp-route\nspec:\n  stream:\n    - name: tcp-route-rule1\n      protocol: TCP\n      match:\n        ingressPort: 9100\n      backend:\n        serviceName: tcp-server\n        servicePort: 8080\n")),(0,r.kt)("p",null,"The above yaml configuration guides TCP traffic entered to the Ingress proxy server (i.e. ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"APISIX"),") port ",(0,r.kt)("inlineCode",{parentName:"p"},"9100")," should be routed to the backend service ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp-server"),"."),(0,r.kt)("p",null,"Note since APISIX doesn't support dynamic listening, so here the ",(0,r.kt)("inlineCode",{parentName:"p"},"9100")," port should be pre-defined in APISIX ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml#L101"},"configuration"),"."),(0,r.kt)("h2",{id:"udp-route"},"UDP Route"),(0,r.kt)("p",null,"apisix-ingress-controller supports the port-based udp route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: udp-route\nspec:\n  stream:\n    - name: udp-route-rule1\n      protocol: UDP\n      match:\n        ingressPort: 9200\n      backend:\n        serviceName: udp-server\n        servicePort: 53\n")),(0,r.kt)("p",null,"The above yaml configuration guides UDP traffic entered to the Ingress proxy server (i.e. ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"APISIX"),") port ",(0,r.kt)("inlineCode",{parentName:"p"},"9200")," should be routed to the backend service ",(0,r.kt)("inlineCode",{parentName:"p"},"udp-server"),"."),(0,r.kt)("p",null,"Note since APISIX doesn't support dynamic listening, so here the ",(0,r.kt)("inlineCode",{parentName:"p"},"9200")," port should be pre-defined in APISIX ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml#L105"},"configuration"),"."))}l.isMDXComponent=!0}}]);