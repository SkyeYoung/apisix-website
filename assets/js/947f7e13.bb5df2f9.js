"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[18559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72740:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Developing for Apache APISIX Ingress Controller"},i=void 0,l={unversionedId:"contribute",id:"version-1.5.0/contribute",isDocsHomePage:!1,title:"Developing for Apache APISIX Ingress Controller",description:"This document explains how to get started with developing for Apache APISIX Ingress controller.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.5.0/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/docs/ingress-controller/contribute",editUrl:null,tags:[],version:"1.5.0",frontMatter:{title:"Developing for Apache APISIX Ingress Controller"},sidebar:"version-1.5.0/docs",previous:{title:"Ingress Controller",permalink:"/docs/ingress-controller/design"},next:{title:"FAQ",permalink:"/docs/ingress-controller/FAQ"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Fork and Clone",id:"fork-and-clone",children:[]},{value:"Build",id:"build",children:[]},{value:"How to add a new feature or change an existing one",id:"how-to-add-a-new-feature-or-change-an-existing-one",children:[]},{value:"Test",id:"test",children:[{value:"Run unit test cases",id:"run-unit-test-cases",children:[]},{value:"Run e2e test cases",id:"run-e2e-test-cases",children:[]},{value:"Build docker image",id:"build-docker-image",children:[]}]},{value:"Run apisix-ingress-controller locally",id:"run-apisix-ingress-controller-locally",children:[]},{value:"Pre-commit todo",id:"pre-commit-todo",children:[]}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document explains how to get started with developing for Apache APISIX Ingress controller."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Go 1.13")," or later, and we use go module to manage the go package dependencies."),(0,a.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"KIND"),"."),(0,a.kt)("li",{parentName:"ul"},"Install Apache APISIX in Kubernetes by ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart"),".")),(0,a.kt)("h2",{id:"fork-and-clone"},"Fork and Clone"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fork the repository from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller"},"apache/apisix-ingress-controller")," to your own GitHub account."),(0,a.kt)("li",{parentName:"ul"},"Clone the fork repository to your workstation."),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"go mod download")," to download modules to local cache. By the way, if you are a developer in China, we suggest you setting ",(0,a.kt)("inlineCode",{parentName:"li"},"GOPROXY")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"https://goproxy.cn")," to speed up the downloading.")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake build\n./apisix-ingress-controller version\n")),(0,a.kt)("h2",{id:"how-to-add-a-new-feature-or-change-an-existing-one"},"How to add a new feature or change an existing one"),(0,a.kt)("p",null,"Before making any significant changes, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"open an issue"),". Discussing your proposed changes ahead of time will make the contribution process smooth for everyone."),(0,a.kt)("p",null,"Once we've discussed your changes and you've got your code ready, make sure that tests are passing and open your pull request. Your PR is most likely to be accepted if it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update the README.md with details of changes to the interface."),(0,a.kt)("li",{parentName:"ul"},"Includes tests for new functionality."),(0,a.kt)("li",{parentName:"ul"},'References the original issue in the description, e.g. "Resolves #123".'),(0,a.kt)("li",{parentName:"ul"},"Has a ",(0,a.kt)("a",{parentName:"li",href:"http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html"},"good commit message"),".")),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("h3",{id:"run-unit-test-cases"},"Run unit test cases"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake unit-test\n")),(0,a.kt)("h3",{id:"run-e2e-test-cases"},"Run e2e test cases"),(0,a.kt)("p",null,"We using ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"KIND")," for running e2e test cases. Please ensure ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," CLI has been installed.\nCurrently we using KIND latest version v0.11.1 and using Kubernetes v1.21.1 for testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake e2e-test-local\n")),(0,a.kt)("p",null,"Note the running of e2e cases is somewhat slow, so please be patient."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/#focused-specs"},"here")," to learn\nhow to just run partial e2e cases.")),(0,a.kt)("h3",{id:"build-docker-image"},"Build docker image"),(0,a.kt)("p",null,"Suppose our image tag is ",(0,a.kt)("inlineCode",{parentName:"p"},"a.b.c"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\nmake build-image IMAGE_TAG=a.b.c\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The Dockerfile in this repository is only for development, not for release.")),(0,a.kt)("p",null,"If you're coding for apisix-ingress-controller and adding some e2e test cases to verify your changes,\nyou should push the images to the image registry that your Kubernetes cluster can access, if you're using Kind, just run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make push-images IMAGE_TAG=a.b.c\n")),(0,a.kt)("h2",{id:"run-apisix-ingress-controller-locally"},"Run apisix-ingress-controller locally"),(0,a.kt)("p",null,"We assume all prerequisites above mentioned are met, what's more, since we want to run apisix-ingress-controller in bare-metal environment, please make sure both the proxy service and admin api service of Apache APISIX are exposed outside of the Kubernetes cluster, e.g. configuring them as ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort")," services."),(0,a.kt)("p",null,"Also, we can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"port-forward")," to expose the Admin API port of Apache APISIX Pod. The default port of Apache APISIX Admin API is 9180, next I'll expose the local port ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9180"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} 9180:9180\n")),(0,a.kt)("p",null,"Run apisix-ingress-controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-ingress-controller\n./apisix-ingress-controller ingress \\\n    --kubeconfig /path/to/kubeconfig \\\n    --http-listen :8080 \\\n    --log-output stderr \\\n    --default-apisix-cluster-base-url http://127.0.0.1:9180/apisix/admin \\\n    --default-apisix-cluster-admin-key edd1c9f034335f136f87ad84b625c8f1\n")),(0,a.kt)("p",null,"Something you need to pay attention to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"configuring of ",(0,a.kt)("inlineCode",{parentName:"li"},"--kubeconfig"),", if you are using Minikube, the file path should be ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),"."),(0,a.kt)("li",{parentName:"ul"},"configuring of ",(0,a.kt)("inlineCode",{parentName:"li"},"--default-apisix-cluster-admin-key"),", if you have changed the admin key in Apache APISIX, also changing it here. If you have disabled the authentication in Apache APISIX, just removing this option.")),(0,a.kt)("h2",{id:"pre-commit-todo"},"Pre-commit todo"),(0,a.kt)("p",null,"When everything is ready, before submitting the code, please make sure that the license, code style, and document format are consistent with the project specification."),(0,a.kt)("p",null,"We provide commands to implement it, just run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make update-codegen\nmake update-license\nmake update-gofmt\nmake update-mdlint\n")),(0,a.kt)("p",null,"or just run one command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make update-all\n")))}u.isMDXComponent=!0}}]);