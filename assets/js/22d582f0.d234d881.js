"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[67981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(n),h=r,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97367:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Configuring Mutual Authentication via ApisixTls"},l=void 0,s={unversionedId:"practices/mtls",id:"version-1.0.0/practices/mtls",isDocsHomePage:!1,title:"Configuring Mutual Authentication via ApisixTls",description:"In this practice, we will use mTLS to protect our exposed ingress APIs.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.0.0/practices/mtls.md",sourceDirName:"practices",slug:"/practices/mtls",permalink:"/docs/ingress-controller/1.0.0/practices/mtls",editUrl:null,tags:[],version:"1.0.0",frontMatter:{title:"Configuring Mutual Authentication via ApisixTls"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy httpbin service",id:"deploy-httpbin-service",children:[]},{value:"Route the traffic",id:"route-the-traffic",children:[]},{value:"Certificates",id:"certificates",children:[]},{value:"Protect the route using SSL",id:"protect-the-route-using-ssl",children:[]},{value:"Mutual Authentication",id:"mutual-authentication",children:[]}],o={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this practice, we will use mTLS to protect our exposed ingress APIs."),(0,r.kt)("p",null,"To learn more about mTLS, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mutual_authentication"},"Mutual authentication")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an available Kubernetes cluster"),(0,r.kt)("li",{parentName:"ul"},"an available APISIX and APISIX Ingress Controller installation")),(0,r.kt)("p",null,"In this guide, we assume that your APISIX is installed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix")," namespace and ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl")," is enabled, which is not enabled by default in the Helm Chart. To enable it, you need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"gateway.tls.enabled=true")," during installation."),(0,r.kt)("p",null,"Assuming the SSL port is ",(0,r.kt)("inlineCode",{parentName:"p"},"9443"),"."),(0,r.kt)("h2",{id:"deploy-httpbin-service"},"Deploy httpbin service"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," as the service image, See its overview page for details."),(0,r.kt)("p",null,"Deploy it to the default namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),(0,r.kt)("h2",{id:"route-the-traffic"},"Route the traffic"),(0,r.kt)("p",null,"Since SSL is not configured in ApisixRoute, we can use the config similar to the one in practice ",(0,r.kt)("a",{parentName:"p",href:"/docs/ingress-controller/1.0.0/practices/proxy-the-httpbin-service"},"Proxy the httpbin service"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# route.yaml\napiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\nspec:\n  http:\n    - name: httpbin\n      match:\n        hosts:\n          - mtls.httpbin.local\n        paths:\n          - "/*"\n      backend:\n        serviceName: httpbin\n        servicePort: 80\n')),(0,r.kt)("p",null,"Please remember the host field is ",(0,r.kt)("inlineCode",{parentName:"p"},"mtls.httpbin.local"),". It will be the domain we are going to use."),(0,r.kt)("p",null,"Test it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n apisix exec -it <APISIX_POD_NAME> -- curl "http://127.0.0.1:9080/ip" -H "Host: mtls.httpbin.local"\n')),(0,r.kt)("p",null,"It should output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "origin": "127.0.0.1"\n}\n')),(0,r.kt)("h2",{id:"certificates"},"Certificates"),(0,r.kt)("p",null,"Before configuring SSL, we must have certificates. Certificates often authorized by certificate provider, which also known as Certification Authority (CA)."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Openssl"},"OpenSSL")," to generate self-signed certificates for testing purposes. Some pre-generated certificates for this guide are ",(0,r.kt)("a",{parentName:"p",href:"./mtls"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ca.pem"),": The root CA."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server.pem")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"server.key"),": Server certificate used to enable SSL (https). Contains correct ",(0,r.kt)("inlineCode",{parentName:"li"},"subjectAltName")," matches domain ",(0,r.kt)("inlineCode",{parentName:"li"},"mtls.httpbin.local"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user.pem")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"user.key"),": Client certificate.")),(0,r.kt)("p",null,"To verify them, use commands below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl verify -CAfile ./ca.pem ./server.pem\nopenssl verify -CAfile ./ca.pem ./user.pem\n")),(0,r.kt)("h2",{id:"protect-the-route-using-ssl"},"Protect the route using SSL"),(0,r.kt)("p",null,"In APISIX Ingress Controller, we use ",(0,r.kt)("a",{parentName:"p",href:"/docs/ingress-controller/1.0.0/concepts/apisix_tls"},"ApisixTls")," resource to protect our routes."),(0,r.kt)("p",null,"ApisixTls requires a secret which field ",(0,r.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," contains the certificate and private key."),(0,r.kt)("p",null,"A secret yaml containing the certificate mentioned above ",(0,r.kt)("a",{target:"_blank",href:n(92772).Z},"is here"),". In this guide, we use this as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./mtls/server-secret.yaml -n default\n")),(0,r.kt)("p",null,"The secret name is ",(0,r.kt)("inlineCode",{parentName:"p"},"server-secret"),", we created it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespace. We will reference this secret in ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixTls"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# tls.yaml\napiVersion: apisix.apache.org/v1\nkind: ApisixTls\nmetadata:\n  name: sample-tls\nspec:\n  hosts:\n    - mtls.httpbin.local\n  secret:\n    name: server-secret\n    namespace: default\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," field contains the secret reference."),(0,r.kt)("p",null,"Please note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts")," field matches our domain ",(0,r.kt)("inlineCode",{parentName:"p"},"mtls.httpbin.local"),"."),(0,r.kt)("p",null,"Apply this yaml, APISIX Ingress Controller will use our certificate to protect the route. Let's test it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it <APISIX_POD_NAME> -- curl --resolve 'mtls.httpbin.local:9443:127.0.0.1' \"https://mtls.httpbin.local:9443/ip\" -k\n")),(0,r.kt)("p",null,"Some major changes here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"--resolve")," parameter to resolve our domain.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No ",(0,r.kt)("inlineCode",{parentName:"li"},"Host")," header set explicit."))),(0,r.kt)("li",{parentName:"ul"},"We are using ",(0,r.kt)("inlineCode",{parentName:"li"},"https")," and SSL port ",(0,r.kt)("inlineCode",{parentName:"li"},"9443"),"."),(0,r.kt)("li",{parentName:"ul"},"Parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"-k")," to allow insecure connections when using SSL. Because our self-signed certificate is not trusted.")),(0,r.kt)("p",null,"Without the domain ",(0,r.kt)("inlineCode",{parentName:"p"},"mtls.httpbin.local"),", the request won't succeed."),(0,r.kt)("p",null,"You can add parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," to log the handshake process."),(0,r.kt)("p",null,"Now, we configured SSL successfully."),(0,r.kt)("h2",{id:"mutual-authentication"},"Mutual Authentication"),(0,r.kt)("p",null,"Like ",(0,r.kt)("inlineCode",{parentName:"p"},"server-secret"),", we will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"client-ca-secret")," to store the CA that verify the certificate client presents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./mtls/client-ca-secret.yaml -n default\n")),(0,r.kt)("p",null,"Then, change our ApisixTls and apply it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# mtls.yaml\napiVersion: apisix.apache.org/v1\nkind: ApisixTls\nmetadata:\n  name: sample-tls\nspec:\n  hosts:\n    - mtls.httpbin.local\n  secret:\n    name: server-secret\n    namespace: default\n  client:\n    caSecret:\n      name: client-ca-secret\n      namespace: default\n    depth: 10\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," field references the secret, ",(0,r.kt)("inlineCode",{parentName:"p"},"depth")," indicates the max certificate chain length."),(0,r.kt)("p",null,"Let's try to connect the route without any chanegs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it <APISIX_POD_NAME> -- curl --resolve 'mtls.httpbin.local:9443:127.0.0.1' \"https://mtls.httpbin.local:9443/ip\" -k\n")),(0,r.kt)("p",null,"If everything works properly, it will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"400 Bad Request"),"."),(0,r.kt)("p",null,"From APISIX access log, we could find logs like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'2021/05/27 17:20:54 [error] 43#43: *106132 [lua] init.lua:293: http_access_phase(): client certificate was not present, client: 127.0.0.1, server: _, request: "GET /ip HTTP/2.0", host: "mtls.httpbin.local:9443"\n127.0.0.1 - - [27/May/2021:17:20:54 +0000] mtls.httpbin.local:9443 "GET /ip HTTP/2.0" 400 154 0.000 "-" "curl/7.76.1" - - - "http://mtls.httpbin.local:9443"\n')),(0,r.kt)("p",null,"That means our mutual authentication has been enabled successfully."),(0,r.kt)("p",null,"Now, we need to transfer our client cert to the APISIX container to verify the mTLS functionality."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Transfer client certificate\nkubectl -n apisix cp ./user.key <APISIX_POD_NAME>:/tmp/user.key\nkubectl -n apisix cp ./user.pem <APISIX_POD_NAME>:/tmp/user.pem\n\n# Test\nkubectl -n apisix exec -it <APISIX_POD_NAME> -- curl --resolve 'mtls.httpbin.local:9443:127.0.0.1' \"https://mtls.httpbin.local:9443/ip\" -k --cert /tmp/user.pem --key /tmp/user.key\n")),(0,r.kt)("p",null,"Parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--cert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--key")," indicates our certificate and key path."),(0,r.kt)("p",null,"It should output normally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "origin": "127.0.0.1"\n}\n')))}c.isMDXComponent=!0},92772:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/server-secret-b6e186f162ed247c320c42de1e1e43f4.yaml"}}]);