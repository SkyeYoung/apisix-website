(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,2139],{2963:e=>{e.exports={versions:["2.12","2.13","2.14","2.15"],LTSVersions:["2.13"],archivedVersions:[{label:"2.11",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.10",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/2.10/getting-started/"},{label:"2.9",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.8",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.8/getting-started/"},{label:"2.7",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.7/getting-started/"},{label:"2.6",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.6/getting-started/"},{label:"2.5",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.5/getting-started/"},{label:"2.4",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.4/getting-started/"}]}},2886:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>G});var n=a(5773),r=a(7378),l=a(5318),o=a(6028),s=a(8539),i=a(8944),c=a(5013),d=a(8245),u=a(5135),m=a(4454),p=a(7011),h=a(1787),b=a(694),g=a(8259),f=a(2963);const E="sidebar_LIo8",I="sidebarWithHideableNavbar_CMI-",w="sidebarHidden_4BoQ",C="sidebarLogo_P87M",v="menu_oAhv",S="menuWithAnnouncementBar_IVfW",k="collapseSidebarButton_EBxv",Z="collapseSidebarButtonIcon_AF9Q",A="sidebarVersionSwitch_0QIZ";const _=e=>{let{onClick:t}=e;return r.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",k),onClick:t},r.createElement(p.Z,{className:Z}))},y=e=>{const{docsPluginId:t}=e;return r.createElement("div",{className:A},"Version:",r.createElement(g.Z,{docsPluginId:t,dropdownItemsBefore:[],dropdownItemsAfter:"docs-apisix"===t?f.archivedVersions:[],items:[]}))},P=r.memo(y),x=e=>{let{toggleSidebar:t,sidebar:a,path:n,docsPluginId:l}=e;return r.createElement(r.Fragment,null,r.createElement(P,{docsPluginId:l}),r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(b.O,{items:a,activePath:n,onItemClick:()=>t()})))},N=e=>r.createElement(c.Cv,{component:x,props:e}),B=e=>{let{path:t,sidebar:a,onCollapse:n,isHidden:l,docsPluginId:o}=e;const s=function(){const{isClosed:e}=(0,c.nT)(),[t,a]=(0,r.useState)(!e);return(0,u.Z)((t=>{let{scrollY:n}=t;e||a(0===n)})),t}(),{navbar:{hideOnScroll:d},hideableSidebar:p}=(0,c.LU)(),{isClosed:h}=(0,c.nT)();return r.createElement("div",{className:(0,i.Z)(E,{[I]:d,[w]:l})},d&&r.createElement(m.Z,{tabIndex:-1,className:C}),r.createElement(P,{docsPluginId:o}),r.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",v,{[S]:!h&&s})},r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(b.O,{items:a,activePath:t}))),p&&r.createElement(_,{onClick:n}))},M=r.memo(N),L=r.memo(B),T=e=>{const t=(0,d.Z)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return r.createElement(r.Fragment,null,a&&r.createElement(L,e),n&&r.createElement(M,e))};var F=a(8873),R=a(9207),D=a(409),H=a(9635),X=a(5361),O=a(2221),W=a(9861);const U={docPage:"docPage_GMj9",docMainContainer:"docMainContainer_Q970",docSidebarContainer:"docSidebarContainer_k0Pq",docMainContainerEnhanced:"docMainContainerEnhanced_ipQ4",docSidebarContainerHidden:"docSidebarContainerHidden_05py",collapsedDocSidebar:"collapsedDocSidebar_3Col",expandSidebarButtonIcon:"expandSidebarButtonIcon_Dhhx",docItemWrapperEnhanced:"docItemWrapperEnhanced_JuqB"},V={general:"General",apisix:"Apache APISIX\xae",dashboard:"Apache APISIX\xae Dashboard","ingress-controller":"Apache APISIX\xae Ingress Controller","helm-chart":"Apache APISIX\xae Helm Chart",docker:"Apache APISIX\xae Docker","java-plugin-runner":"Apache APISIX\xae Java Plugin Runner","go-plugin-runner":"Apache APISIX\xae Go Plugin Runner","python-plugin-runner":"Apache APISIX\xae Python Plugin Runner"},z=Object.keys(V),Q={...F.Z,img:e=>r.createElement(W.LazyLoadComponent,null,r.createElement(O.Z,(0,n.Z)({},e,{preview:{mask:"Click to Preview"}})))},q=e=>{let{currentDocRoute:t,versionMetadata:a,children:n}=e;const{pluginId:o,version:d}=a,u=t.sidebar,m=u?a.docsSidebars[u]:void 0,[b,g]=(0,r.useState)(!1),[f,E]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=document.querySelector(".navbar__items--right").childElementCount,a=document.querySelector(".navbar__items--right").childNodes[e-2];a.style.display=window.innerWidth>745?"block":"none";const n=t.path.split("/").slice(2,4).reduce(((e,t)=>z.includes(t)?t:e),"");return document.querySelectorAll(".navbar__link")[0].innerText=V[n],()=>{a.style.display="none"}}),[]);const I=(0,r.useCallback)((()=>{f&&E(!1),g(!b)}),[f]);return r.createElement(s.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:d,tag:(0,c.os)(o,d)}},r.createElement("div",{className:U.docPage},r.createElement(D.Z,null),m&&r.createElement("aside",{className:(0,i.Z)(U.docSidebarContainer,{[U.docSidebarContainerHidden]:b}),onTransitionEnd:e=>{e.currentTarget.classList.contains(U.docSidebarContainer)&&b&&E(!0)}},r.createElement(T,{key:u,sidebar:m,path:t.path,onCollapse:I,isHidden:f,docsPluginId:o}),f&&r.createElement("div",{className:U.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},r.createElement(p.Z,{className:U.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,i.Z)(U.docMainContainer,{[U.docMainContainerEnhanced]:b||!m})},r.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",U.docItemWrapper,{[U.docItemWrapperEnhanced]:b})},r.createElement(l.Zo,{components:Q},n)))))},G=e=>{const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>(0,H.LX)(n.pathname,e)));return l?r.createElement(r.Fragment,null,r.createElement(X.Z,null,r.createElement("html",{className:a.className})),r.createElement(q,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a}))):r.createElement(R.default,e)}},6459:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(5773),r=a(7378),l=a(4142),o=a(8948),s=a(8374),i=a(5423),c=a(5565),d=a(5519),u=a(7645),m=a(9861);const p={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"},h={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:i.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:d.Z,label:"Slack",to:"/docs/general/join"},{icon:c.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:u.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-2022 The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},b=e=>{let{to:t,icon:a,href:i,label:c,prependBaseUrlToHref:d,...u}=e;const m=(0,o.Z)(t),p=(0,o.Z)(i,{forcePrependBaseUrl:!0}),h=i?{href:d?p:i}:{to:m};return r.createElement(l.Z,(0,n.Z)({},h,u),r.createElement(s.JO,{icon:a}),r.createElement("span",null,c))},g=()=>{const{copyright:e,links:t,logo:a}=h;return h?r.createElement("footer",{className:p.container},t&&t.length>0&&r.createElement("div",{className:p.linksRow},t.map((e=>{let{title:t,items:a}=e;return r.createElement("div",{key:t,className:p.linksCol},r.createElement("div",null,t),r.createElement("ul",null,a.map((e=>r.createElement("li",{key:e.to,className:"footer__item"},r.createElement(b,e))))))}))),r.createElement("div",{className:p.copyright},r.createElement(l.Z,{href:a.href},r.createElement(m.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),r.createElement("div",{className:p.text},e))):null}},4867:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(5773),r=a(7378),l=a(3727),o=a(6281),s=a(353),i=a(5013),c=a(9635),d=a(4142);const u="iconLanguage_zID8",m=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:m,...p}=e,{i18n:{currentLocale:h,locales:b,localeConfigs:g}}=(0,s.Z)(),f=(0,i.l5)(),{pathname:E}=(0,c.TH)();if(E.startsWith("/zh/blog"))return r.createElement(d.Z,{isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(E.startsWith("/blog"))return r.createElement(d.Z,{isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function I(e){return g[e].label}const w=[...a,...b.map((e=>{const t="pathname://"+f.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:I(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...m],C=t?"Languages":I(h);return r.createElement(l.Z,(0,n.Z)({},p,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(o.Z,{className:u}),r.createElement("span",null,C)),items:w}))}},9207:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var n=a(7378),r=a(8539),l=a(1787),o=a(4142);const s="container_RGNa";var i=a(5773),c=a(8055),d=a(8944);const u=(e,t)=>{const{tagName:a,children:r,wrapText:l=!1,className:o,...s}=e,u=a,m=n.useRef(null),p=t||m;return n.useLayoutEffect((()=>{const e=t||m,a=(0,c.Z)(null==e?void 0:e.current,{minSize:10,maxSize:512,multiLine:l,observeMutations:{subtree:!0,childList:!0,characterData:!0,attributeFilter:["class"]}});return requestAnimationFrame((()=>{a.fit()})),()=>{(0,c.Z)(e.current).unsubscribe()}}),[]),n.createElement(u,{className:(0,d.Z)("fit-wrapper",o)},n.createElement("span",(0,i.Z)({className:"fit",ref:p},s),r))},m=(0,n.forwardRef)(u),p=()=>n.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:s},n.createElement("section",null,n.createElement(m,{tagName:"h1",contentEditable:!0},"404"),n.createElement(m,{tagName:"h2"},"Page Not Found")),n.createElement("p",null,"We could not find what you were looking for."),n.createElement("p",null,"If you think this link should not be broken, please"," ",n.createElement(o.Z,{href:"https://github.com/apache/apisix-website/issues/new/choose",target:"_blank",rel:"noreferrer"},"submit an Issue"),"."),n.createElement("p",null,"You can also return to"," ",n.createElement(o.Z,{href:"/"},"the home page"),". Or, return to"," ",n.createElement("a",{role:"button",href:"#",onClick:()=>{var e;null==(e=window)||e.history.back()}},"the source page"),".")))},5403:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var n=a(5773),r=a(7378),l=a(1542),o=a(353),s=a(8948),i=a(4142),c=a(5361),d=a(9033),u=a(9495),m=a(2492),p=a(7489),h=a(1787);const b="searchBox_fBfG";let g=null;function f(e){let{hit:t,children:a}=e;return r.createElement("a",{href:t.url,target:"_parent"},a)}function E(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:n}=(0,d.Z)();return r.createElement(i.Z,{to:n(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function I(e){var t,i;let{contextualSearch:d,...I}=e;const{siteMetadata:w}=(0,o.Z)(),C=(0,p.Z)(),v=null!=(t=null==(i=I.searchParameters)?void 0:i.facetFilters)?t:[],S=d?[...C,...v]:v,k={...I.searchParameters,facetFilters:S},{withBaseUrl:Z}=(0,s.C)(),A=(0,r.useRef)(null),_=(0,r.useRef)(null),[y,P]=(0,r.useState)(!1),[x,N]=(0,r.useState)(null),B=(0,r.useCallback)((()=>g?Promise.resolve():Promise.all([a.e(6295).then(a.bind(a,6295)),Promise.all([a.e(532),a.e(9127)]).then(a.bind(a,9127)),Promise.all([a.e(532),a.e(160)]).then(a.bind(a,160))]).then((e=>{let[{DocSearchModal:t}]=e;g=t}))),[]),M=(0,r.useCallback)((()=>{B().then((()=>{A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),P(!0)}))}),[B,P]),L=(0,r.useCallback)((()=>{P(!1),A.current.remove()}),[P]),T=(0,r.useCallback)((e=>{B().then((()=>{P(!0),N(e.key)}))}),[B,P,N]),F=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,R=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:Z(""+t.pathname+t.hash)}})))).current,D=(0,r.useMemo)((()=>e=>r.createElement(E,(0,n.Z)({},e,{onClose:L}))),[L]),H=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",w.docusaurusVersion),e)),[w.docusaurusVersion]);(0,u.D)({isOpen:y,onOpen:M,onClose:L,onInput:T,searchButtonRef:_});const X=(0,h.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(c.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+I.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement("div",{className:b},r.createElement(m.a,{onTouchStart:B,onFocus:B,onMouseOver:B,onClick:M,ref:_,translations:{buttonText:X,buttonAriaLabel:X}})),y&&(0,l.createPortal)(r.createElement(g,(0,n.Z)({onClose:L,initialScrollY:window.scrollY,initialQuery:x,navigator:F,transformItems:R,hitComponent:f,resultsFooterComponent:D,transformSearchClient:H},I,{searchParameters:k})),A.current))}const w=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(I,e.themeConfig.algolia)}}}]);