"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[18574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72643:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"jwt-auth"},l=void 0,o={unversionedId:"plugins/jwt-auth",id:"version-2.13/plugins/jwt-auth",isDocsHomePage:!1,title:"jwt-auth",description:"jwt-auth is an authentication plugin that need to work with consumer. Add JWT Authentication to a service or route.",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/jwt-auth.md",sourceDirName:"plugins",slug:"/plugins/jwt-auth",permalink:"/docs/apisix/2.13/plugins/jwt-auth",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"jwt-auth"},sidebar:"version-2.13/docs",previous:{title:"key-auth",permalink:"/docs/apisix/2.13/plugins/key-auth"},next:{title:"basic-auth",permalink:"/docs/apisix/2.13/plugins/basic-auth"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"Enable jwt-auth with Vault Compatibility",id:"enable-jwt-auth-with-vault-compatibility",children:[]}]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," is an authentication plugin that need to work with ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer"),". Add JWT Authentication to a ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"route"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer")," then adds its key to the query string parameter, request header, or ",(0,r.kt)("inlineCode",{parentName:"p"},"cookie")," to verify its request."),(0,r.kt)("p",null,"For more information on JWT, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," for more information."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin can be integrated with HashiCorp Vault for storing and fetching secrets, RSA key pairs from its encrypted kv engine. See the ",(0,r.kt)("a",{parentName:"p",href:"#enable-jwt-auth-with-vault-compatibility"},"examples")," below to have an overview of how things work."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"For consumer side:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Valid"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"required"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"different ",(0,r.kt)("inlineCode",{parentName:"td"},"consumer")," have different value, it's unique. different ",(0,r.kt)("inlineCode",{parentName:"td"},"consumer")," use the same ",(0,r.kt)("inlineCode",{parentName:"td"},"key"),", and there will be a request matching exception.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"encryption key. if you do not specify, the value is auto-generated in the background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"public_key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"RSA public key, required when ",(0,r.kt)("inlineCode",{parentName:"td"},"algorithm")," attribute selects ",(0,r.kt)("inlineCode",{parentName:"td"},"RS256")," algorithm.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"private_key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"RSA private key, required when ",(0,r.kt)("inlineCode",{parentName:"td"},"algorithm")," attribute selects ",(0,r.kt)("inlineCode",{parentName:"td"},"RS256")," algorithm.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"algorithm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"HS256"'),(0,r.kt)("td",{parentName:"tr",align:"left"},'["HS256", "HS512", "RS256"]'),(0,r.kt)("td",{parentName:"tr",align:"left"},"encryption algorithm.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"exp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"86400"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token's expire time, in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"base64_secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"whether secret is base64 encoded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vault"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"whether vault to be used for secret (secret for HS256/HS512  or public_key and private_key for RS256) storage and retrieval. The plugin by default uses the vault path as ",(0,r.kt)("inlineCode",{parentName:"td"},"kv/apisix/consumer/<consumer name>/jwt-auth")," for secret retrieval.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": To enable vault integration, first visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/conf/config.yaml"},"config.yaml")," update it with your vault server configuration, host address and access token. You can take a look of what APISIX expects from the config.yaml at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml"},"config-default.yaml")," under the vault attributes."),(0,r.kt)("p",null,"For route side:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"authorization"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"the header we get the token from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"jwt"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"the query string we get the token from, which priority is lower than ",(0,r.kt)("inlineCode",{parentName:"td"},"header"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cookie"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"jwt"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"the cookie we get the token from, which priority is lower than ",(0,r.kt)("inlineCode",{parentName:"td"},"query"))))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"This plugin will add ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," to sign.\nYou may need to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugins/public-api"},"public-api")," plugin to expose it."),(0,r.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"set a consumer and config the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"jwt-auth")," option")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "jwt-auth": {\n            "key": "user-key",\n            "secret": "my-secret-key"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"HS256")," algorithm by default, and if you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"RS256")," algorithm, you need to specify the algorithm and configure the public key and private key, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "kerouac",\n    "plugins": {\n        "jwt-auth": {\n            "key": "user-key",\n            "public_key": "-----BEGIN PUBLIC KEY-----\\n\u2026\u2026\\n-----END PUBLIC KEY-----",\n            "private_key": "-----BEGIN RSA PRIVATE KEY-----\\n\u2026\u2026\\n-----END RSA PRIVATE KEY-----",\n            "algorithm": "RS256"\n        }\n    }\n}\'\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"add a Route or add a Service, and enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"jwt-auth")," plugin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "jwt-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"enable-jwt-auth-with-vault-compatibility"},"Enable jwt-auth with Vault Compatibility"),(0,r.kt)("p",null,"Sometimes, it's quite natural in production to have a centralized key management solution like ",(0,r.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"HashiCorp Vault")," where you don't have to update the APISIX consumer each time some part of your organization changes the signing secret key (secret for HS256/HS512 or public_key and private_key for RS256) and/or for privacy concerns you don't want to use the key through APISIX admin APIs. APISIX got you covered here. The ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," is capable of referencing keys from vault."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": For early version of this integration support, the plugin expects the key name of secrets stored into the vault path is among ","[ ",(0,r.kt)("inlineCode",{parentName:"p"},"secret"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"private_key")," ]"," to successfully use the key. In future releases, we are going to add the support of referencing custom named keys."),(0,r.kt)("p",null,"To enable vault compatibility, just add the empty vault object inside the jwt-auth plugin."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You have stored HS256 signing secret inside vault and you want to use it for jwt signing and verification.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "jwt-auth": {\n            "key": "key-1",\n            "vault": {}\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Here the plugin looks up for key ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," inside vault path (",(0,r.kt)("inlineCode",{parentName:"p"},"<vault.prefix from conf.yaml>/consumer/jack/jwt-auth"),") for consumer username ",(0,r.kt)("inlineCode",{parentName:"p"},"jack")," mentioned in the consumer config and uses it for subsequent signing and jwt verification. If the key is not found in the same path, the plugin logs error and fails to perform jwt authentication."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"RS256 rsa key pairs, both public and private keys are stored into vault.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "kowalski",\n    "plugins": {\n        "jwt-auth": {\n            "key": "rsa-keypair",\n            "algorithm": "RS256",\n            "vault": {}\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"The plugin looks up for ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"private_key")," keys inside vault kv path (",(0,r.kt)("inlineCode",{parentName:"p"},"<vault.prefix from conf.yaml>/consumer/kowalski/jwt-auth"),") for username ",(0,r.kt)("inlineCode",{parentName:"p"},"kowalski")," mentioned inside plugin vault configuration. If not found, authentication fails."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"public key in consumer configuration, while the private key is in vault.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "rico",\n    "plugins": {\n        "jwt-auth": {\n            "key": "user-key",\n            "algorithm": "RS256",\n            "public_key": "-----BEGIN PUBLIC KEY-----\\n\u2026\u2026\\n-----END PUBLIC KEY-----"\n            "vault": {}\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"This plugin uses rsa public key from consumer configuration and uses the private key directly fetched from vault."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard")," to complete the above operations through the web console."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a Consumer through the web console:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/plugin/jwt-auth-1.png",alt:"create a consumer"})),(0,r.kt)("p",null,"then add jwt-auth plugin in the Consumer page:\n",(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/plugin/jwt-auth-2.png",alt:"enable jwt plugin"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a Route or Service object and enable the jwt-auth plugin:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/plugin/jwt-auth-3.png",alt:"enable jwt from route or service"})),(0,r.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,r.kt)("h4",{id:"get-the-token-in-jwt-auth-plugin"},"Get the Token in ",(0,r.kt)("inlineCode",{parentName:"h4"},"jwt-auth")," Plugin:"),(0,r.kt)("p",null,"First, you need to set up the route for the API that signs the token, which will use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugins/public-api"},"public-api")," plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/jas -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/plugin/jwt/sign",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,r.kt)("p",null,"Let's get a token."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"without extension payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key -i\nHTTP/1.1 200 OK\nDate: Wed, 24 Jul 2019 10:33:31 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"with extension payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -G --data-urlencode \'payload={"uid":10000,"uname":"test"}\' http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key -i\nHTTP/1.1 200 OK\nDate: Wed, 21 Apr 2021 06:43:59 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.4\n\neyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmFtZSI6InRlc3QiLCJ1aWQiOjEwMDAwLCJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTYxOTA3MzgzOX0.jI9-Rpz1gc3u8Y6lZy8I43RXyCu0nSHANCvfn0YZUCY\n')),(0,r.kt)("h4",{id:"try-request-with-token"},"Try Request with Token"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"without token:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/index.html -i\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing JWT token in request"}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request header with token:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI' -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang=\"cn\">\n...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request params with token:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/index.html?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n...\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request cookie with token:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/index.html --cookie jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n...\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"When you want to disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);