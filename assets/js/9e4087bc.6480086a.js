"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3608,5061],{85855:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(25773),r=a(27378),n=a(9559),o=a(31142),s=a(98374),c=a(5423),i=a(5565),m=a(45519),h=a(77645),u=a(39861);const p={container:"container_N-4m",linksRow:"linksRow_U0oR",linksCol:"linksCol_R6VE",copyright:"copyright_Bdi1"},g={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:c.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:m.Z,label:"Slack",to:"/docs/general/join/#join-the-slack-channel",target:"_parent"},{icon:i.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:h.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-2022 The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},d=e=>{let{to:t,icon:a,href:c,label:i,prependBaseUrlToHref:m,...h}=e;const u=(0,o.Z)(t),p=(0,o.Z)(c,{forcePrependBaseUrl:!0}),g=c?{href:m?p:c}:{to:u};return r.createElement(n.Z,(0,l.Z)({},g,h),r.createElement(s.JO,{icon:a}),r.createElement("span",null,i))},f=()=>{const{copyright:e,links:t,logo:a}=g;return g?r.createElement("footer",{className:p.container},t&&t.length>0&&r.createElement("div",{className:p.linksRow},t.map((e=>{let{title:t,items:a}=e;return r.createElement("div",{key:t,className:p.linksCol},r.createElement("div",null,t),r.createElement("ul",null,a.map((e=>r.createElement("li",{key:e.to,className:"footer__item"},r.createElement(d,e))))))}))),r.createElement("div",{className:p.copyright},r.createElement(n.Z,{href:a.href},r.createElement(u.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),r.createElement("div",{className:p.text},e))):null}},57365:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(25773),r=a(27378),n=a(9559),o=a(69300),s=a(31142),c=a(15638),i=a(1957);const m=e=>{const{siteConfig:{title:t}}=(0,c.Z)(),{navbar:{title:a,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:h,titleClassName:u,...p}=e,g=(0,s.Z)(m.href||"/"),d={light:(0,s.Z)(m.src),dark:(0,s.Z)(m.srcDark||m.src)};return r.createElement(n.Z,(0,l.Z)({target:"_parent",to:g},p),m.src&&r.createElement(o.Z,{className:h,sources:d,alt:m.alt||a||t}),null!=a&&r.createElement("b",{className:u},a))}},6324:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(25773),r=a(27378),n=a(98886),o=a(76952),s=a(15638),c=a(1957),i=a(69635),m=a(546),h=a(9559);const u="iconLanguage_5RFn",p=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:p,...g}=e,{i18n:{currentLocale:d,locales:f,localeConfigs:b}}=(0,s.Z)(),E=(0,c.l5)(),{pathname:w}=(0,i.TH)();if("mobile"!==(0,m.Z)()){if(w.startsWith("/zh/blog"))return r.createElement(h.Z,{autoAddBaseUrl:!1,to:"pathname:///blog",target:"_parent"},"English Blog");if(w.startsWith("/blog"))return r.createElement(h.Z,{autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_parent"},"\u4e2d\u6587\u535a\u5ba2")}function k(e){return b[e].label}const v=[...a,...f.map((e=>{const t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:k(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...p],Z=t?"Languages":k(d);return r.createElement(n.Z,(0,l.Z)({},g,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(o.Z,{className:u}),r.createElement("span",null,Z)),items:v}))}},53927:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(25773),r=a(27378),n=a(31542),o=a(15638),s=a(31142),c=a(9559),i=a(94142),m=a(69744),h=a(59495),u=a(62492),p=a(10183),g=a(40639);const d="searchBox_SGhp";let f=null;function b(e){let{hit:t,children:a}=e;return r.createElement("a",{href:t.url,target:"_parent"},a)}function E(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:l}=(0,m.Z)();return r.createElement(c.Z,{to:l(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function w(e){var t,c;let{contextualSearch:m,...w}=e;const{siteMetadata:k}=(0,o.Z)(),v=(0,p.Z)(),Z=null!=(t=null==(c=w.searchParameters)?void 0:c.facetFilters)?t:[],C=m?[...v,...Z]:Z,y={...w.searchParameters,facetFilters:C},{withBaseUrl:_}=(0,s.C)(),A=(0,r.useRef)(null),S=(0,r.useRef)(null),[N,I]=(0,r.useState)(!1),[P,B]=(0,r.useState)(null),R=(0,r.useCallback)((()=>f?Promise.resolve():Promise.all([a.e(6295).then(a.bind(a,96295)),Promise.all([a.e(532),a.e(9127)]).then(a.bind(a,89127)),Promise.all([a.e(532),a.e(7246)]).then(a.bind(a,67246))]).then((e=>{let[{DocSearchModal:t}]=e;f=t}))),[]),F=(0,r.useCallback)((()=>{R().then((()=>{A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),I(!0)}))}),[R,I]),T=(0,r.useCallback)((()=>{I(!1),A.current.remove()}),[I]),U=(0,r.useCallback)((e=>{R().then((()=>{I(!0),B(e.key)}))}),[R,I,B]),L=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,x=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:_(""+t.pathname+t.hash)}})))).current,M=(0,r.useMemo)((()=>e=>r.createElement(E,(0,l.Z)({},e,{onClose:T}))),[T]),O=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e)),[k.docusaurusVersion]);(0,h.D)({isOpen:N,onOpen:F,onClose:T,onInput:U,searchButtonRef:S});const D=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(i.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+w.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement("div",{className:d},r.createElement(u.a,{onTouchStart:R,onFocus:R,onMouseOver:R,onClick:F,ref:S,translations:{buttonText:D,buttonAriaLabel:D}})),N&&(0,n.createPortal)(r.createElement(f,(0,l.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:P,navigator:L,transformItems:x,hitComponent:b,resultsFooterComponent:M,transformSearchClient:O},w,{searchParameters:y})),A.current))}const k=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(w,e.themeConfig.algolia)}},59257:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(27378),r=a(64208),n=a(9559),o=a(40639);function s(e){let{year:t,posts:a}=e;return l.createElement(l.Fragment,null,l.createElement("h3",null,t),l.createElement("ul",null,a.map((e=>l.createElement("li",{key:e.metadata.date},l.createElement(n.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function c(e){let{years:t}=e;return l.createElement("section",{className:"margin-vert--lg"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},t.map(((e,t)=>l.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},l.createElement(s,e)))))))}function i(e){let{archive:t}=e;const a=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),n=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0],l=e.get(a)||[];return e.set(a,[t,...l])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return l.createElement(r.Z,{title:a,description:n},l.createElement("header",{className:"hero hero--primary"},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},a),l.createElement("p",{className:"hero__subtitle"},n))),l.createElement("main",null,s.length>0&&l.createElement(c,{years:s})))}}}]);