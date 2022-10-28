"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[21911],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);const i=function(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},55064:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),i=a(79443);const l=function(){const e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=a(86010);const r="tabItem_vU9c",s="tabItemActive_cw6a";const p=function(e){var t;const{lazy:a,block:i,defaultValue:p,values:d,groupId:c,className:u}=e,m=n.Children.toArray(e.children),h=null!=d?d:m.map((e=>({value:e.props.value,label:e.props.label}))),g=null!=p?p:null==(t=m.find((e=>e.props.default)))?void 0:t.props.value,{tabGroupChoices:f,setTabGroupChoices:k}=l(),[y,v]=(0,n.useState)(g),I=[];if(null!=c){const e=f[c];null!=e&&e!==y&&h.some((t=>t.value===e))&&v(e)}const N=e=>{const t=e.currentTarget,a=I.indexOf(t),n=h[a].value;v(n),null!=c&&(k(c,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:i}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:o}=window;return t>=0&&i<=o&&n<=l&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.target)+1;a=I[t]||I[0];break}case"ArrowLeft":{const t=I.indexOf(e.target)-1;a=I[t]||I[I.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},u)},h.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":y===t}),key:t,ref:e=>I.push(e),onKeyDown:x,onFocus:N,onClick:N},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},79443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=(0,a(67294).createContext)(void 0)},12917:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),l=a(55064),o=a(58215);const r={title:"Installation",keywords:["APISIX","Installation"],description:"This document walks you through the different Apache APISIX installation methods."},s=void 0,p={unversionedId:"installation-guide",id:"installation-guide",isDocsHomePage:!1,title:"Installation",description:"This document walks you through the different Apache APISIX installation methods.",source:"@site/docs/apisix/installation-guide.md",sourceDirName:".",slug:"/installation-guide",permalink:"/docs/apisix/next/installation-guide",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/installation-guide.md",tags:[],version:"current",frontMatter:{title:"Installation",keywords:["APISIX","Installation"],description:"This document walks you through the different Apache APISIX installation methods."},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/apisix/next/getting-started"},next:{title:"Architecture",permalink:"/docs/apisix/next/architecture-design/apisix"}},d=[{value:"Installing APISIX",id:"installing-apisix",children:[{value:"Installation via RPM repository",id:"installation-via-rpm-repository",children:[]},{value:"Installation via RPM offline package",id:"installation-via-rpm-offline-package",children:[]},{value:"Managing APISIX server",id:"managing-apisix-server",children:[]}]},{value:"Installing etcd",id:"installing-etcd",children:[]},{value:"Next steps",id:"next-steps",children:[{value:"Configuring APISIX",id:"configuring-apisix",children:[]},{value:"APISIX deployment modes",id:"apisix-deployment-modes",children:[]},{value:"Updating Admin API key",id:"updating-admin-api-key",children:[]},{value:"Adding APISIX systemd unit file",id:"adding-apisix-systemd-unit-file",children:[]}]}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide walks you through how you can install and run Apache APISIX in your environment."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/getting-started"},"Getting Started")," guide for a quick walk-through on running Apache APISIX."),(0,i.kt)("h2",{id:"installing-apisix"},"Installing APISIX"),(0,i.kt)("p",null,"APISIX can be installed by the different methods listed below:"),(0,i.kt)(l.Z,{groupId:"install-method",defaultValue:"docker",values:[{label:"Docker",value:"docker"},{label:"Helm",value:"helm"},{label:"RPM",value:"rpm"},{label:"Source Code",value:"source code"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,i.kt)("p",null,"First clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker"},"apisix-docker")," repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/apisix-docker.git\ncd apisix-docker/example\n")),(0,i.kt)("p",null,"Now, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," to start APISIX."),(0,i.kt)(l.Z,{groupId:"cpu-arch",defaultValue:"x86",values:[{label:"x86",value:"x86"},{label:"ARM/M1",value:"arm"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"x86",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -p docker-apisix up -d\n"))),(0,i.kt)(o.Z,{value:"arm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -p docker-apisix -f docker-compose-arm64.yml up -d\n"))))),(0,i.kt)(o.Z,{value:"helm",mdxType:"TabItem"},(0,i.kt)("p",null,"To install APISIX via Helm, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\nhelm install apisix apisix/apisix --create-namespace  --namespace apisix\n")),(0,i.kt)("p",null,"You can find other Helm charts on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"apisix-helm-chart")," repository.")),(0,i.kt)(o.Z,{value:"rpm",mdxType:"TabItem"},(0,i.kt)("p",null,"This installation method is suitable for CentOS 7 and Centos 8. If you choose this method to install APISIX, you need to install etcd first. For the specific installation method, please refer to ",(0,i.kt)("a",{parentName:"p",href:"#installing-etcd"},"Installing etcd"),"."),(0,i.kt)("h3",{id:"installation-via-rpm-repository"},"Installation via RPM repository"),(0,i.kt)("p",null,"If OpenResty is ",(0,i.kt)("strong",{parentName:"p"},"not")," installed, you can run the command below to install both OpenResty and APISIX repositories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://repos.apiseven.com/packages/centos/apache-apisix-repo-1.0-1.noarch.rpm\n")),(0,i.kt)("p",null,"If OpenResty is installed, the command below will install the APISIX repositories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum-config-manager --add-repo https://repos.apiseven.com/packages/centos/apache-apisix.repo\n")),(0,i.kt)("p",null,"Then, to install APISIX, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install apisix\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also install a specific version of APISIX by specifying it:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install apisix-2.13.1\n")))),(0,i.kt)("h3",{id:"installation-via-rpm-offline-package"},"Installation via RPM offline package"),(0,i.kt)("p",null,"First, download APISIX RPM offline package to an ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p apisix\nsudo yum install -y https://repos.apiseven.com/packages/centos/apache-apisix-repo-1.0-1.noarch.rpm\nsudo yum clean all && yum makecache\nsudo yum install -y --downloadonly --downloaddir=./apisix apisix\n")),(0,i.kt)("p",null,"Then copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," folder to the target host and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install ./apisix/*.rpm\n")),(0,i.kt)("h3",{id:"managing-apisix-server"},"Managing APISIX server"),(0,i.kt)("p",null,"Once APISIX is installed, you can initialize the configuration file and etcd by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\n")),(0,i.kt)("p",null,"To start APISIX server, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix start\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix help")," to get a list of all available operations.")))),(0,i.kt)(o.Z,{value:"source code",mdxType:"TabItem"},(0,i.kt)("p",null,"If you want to build APISIX from source, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/building-apisix"},"Building APISIX from source"),"."))),(0,i.kt)("h2",{id:"installing-etcd"},"Installing etcd"),(0,i.kt)("p",null,"APISIX uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd"},"etcd")," to save and synchronize configuration. Before installing APISIX, you need to install etcd on your machine."),(0,i.kt)("p",null,"It would be installed automatically if you choose the Docker or Helm install method while installing APISIX. If you choose a different method or you need to install it manually, follow the steps shown below:"),(0,i.kt)(l.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ETCD_VERSION='3.5.4'\nwget https://github.com/etcd-io/etcd/releases/download/v${ETCD_VERSION}/etcd-v${ETCD_VERSION}-linux-amd64.tar.gz\ntar -xvf etcd-v${ETCD_VERSION}-linux-amd64.tar.gz && \\\n  cd etcd-v${ETCD_VERSION}-linux-amd64 && \\\n  sudo cp -a etcd etcdctl /usr/bin/\nnohup etcd >/tmp/etcd.log 2>&1 &\n"))),(0,i.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew install etcd\nbrew services start etcd\n")))),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("h3",{id:"configuring-apisix"},"Configuring APISIX"),(0,i.kt)("p",null,"You can configure your APISIX deployment in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By directly changing your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," flag to pass the path to your configuration file while starting APISIX."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix start -c <path to config file>\n")))),(0,i.kt)("p",null,"APISIX will use the configurations added in this configuration file and will fall back to the default configuration if anything is not configured."),(0,i.kt)("p",null,"For example, to configure the default listening port to be ",(0,i.kt)("inlineCode",{parentName:"p"},"8000")," without changing other configurations, your configuration file could look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"apisix:\n  node_listen: 8000\n")),(0,i.kt)("p",null,"Now, if you decide you want to change the etcd address to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://foo:2379"),", you can add it to your configuration file. This will not change other configurations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'apisix:\n  node_listen: 8000\n\ndeployment:\n  role: traditional\n  role_traditional:\n    config_provider: etcd\n  etcd:\n    host:\n      - "http://foo:2379"\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"APISIX's default configuration can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," file and it should not be modified. It is bound to the source code and the configuration should only be changed by the methods mentioned above."))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," file is automatically generated and should not be modified."))),(0,i.kt)("h3",{id:"apisix-deployment-modes"},"APISIX deployment modes"),(0,i.kt)("p",null,"APISIX has three different deployment modes for different use cases. To learn more and configure deployment modes, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/deployment-modes"},"documentation"),"."),(0,i.kt)("h3",{id:"updating-admin-api-key"},"Updating Admin API key"),(0,i.kt)("p",null,"It is recommended to modify the Admin API key to ensure security."),(0,i.kt)("p",null,"You can update your configuration file as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'deployment:\n  admin:\n    admin_key\n      -\n        name: "admin"\n        key: newsupersecurekey\n        role: admin\n')),(0,i.kt)("p",null,"Now, to access the Admin API, you can use the new key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/routes?api_key=newsupersecurekey -i\n")),(0,i.kt)("h3",{id:"adding-apisix-systemd-unit-file"},"Adding APISIX systemd unit file"),(0,i.kt)("p",null,"If you installed APISIX via RPM, the APISIX unit file will already be configured and you can start APISIX by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start apisix\nsystemctl stop apisix\n")),(0,i.kt)("p",null,"If you installed APISIX through other methods, you can create ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/apisix.service")," and add the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools/blob/master/usr/lib/systemd/system/apisix.service"},"configuration from the template"),"."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/getting-started"},"Getting Started")," guide for a quick walk-through of using APISIX."))}u.isMDXComponent=!0},86010:(e,t,a)=>{function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:()=>i});const i=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}}}]);