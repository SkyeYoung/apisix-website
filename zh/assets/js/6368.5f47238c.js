"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6368,5061],{66792:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(25773),r=n(27378),l=n(9559),o=n(31142),i=n(98374),c=n(5423),s=n(5565),u=n(45519),m=n(77645),h=n(39861);const p={container:"container_f2sD",linksRow:"linksRow_znki",linksCol:"linksCol_JEh6",copyright:"copyright_wR9d"},f={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:c.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:u.Z,label:"Slack",to:"/docs/general/join/#join-the-slack-channel",target:"_parent"},{icon:s.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:m.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-2022 The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},d=e=>{let{to:t,icon:n,href:c,label:s,prependBaseUrlToHref:u,...m}=e;const h=(0,o.Z)(t),p=(0,o.Z)(c,{forcePrependBaseUrl:!0}),f=c?{href:u?p:c}:{to:h};return r.createElement(l.Z,(0,a.Z)({},f,m),r.createElement(i.JO,{icon:n}),r.createElement("span",null,s))},g=()=>{const{copyright:e,links:t,logo:n}=f;return f?r.createElement("footer",{className:p.container},t&&t.length>0&&r.createElement("div",{className:p.linksRow},t.map((e=>{let{title:t,items:n}=e;return r.createElement("div",{key:t,className:p.linksCol},r.createElement("div",null,t),r.createElement("ul",null,n.map((e=>r.createElement("li",{key:e.to,className:"footer__item"},r.createElement(d,e))))))}))),r.createElement("div",{className:p.copyright},r.createElement(l.Z,{href:n.href},r.createElement(h.LazyLoadImage,{alt:n.alt,src:n.src,height:"40px",width:"231.25px"})),r.createElement("div",{className:p.text},e))):null}},24389:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(25773),r=n(27378),l=n(9559),o=n(69300),i=n(31142),c=n(15638),s=n(1957);const u=e=>{const{siteConfig:{title:t}}=(0,c.Z)(),{navbar:{title:n,logo:u={src:""}}}=(0,s.LU)(),{imageClassName:m,titleClassName:h,...p}=e,f=(0,i.Z)(u.href||"/"),d={light:(0,i.Z)(u.src),dark:(0,i.Z)(u.srcDark||u.src)};return r.createElement(l.Z,(0,a.Z)({target:"_parent",to:f},p),u.src&&r.createElement(o.Z,{className:m,sources:d,alt:u.alt||n||t}),null!=n&&r.createElement("b",{className:h},n))}},97661:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(25773),r=n(27378),l=n(98886),o=n(76952),i=n(15638),c=n(1957),s=n(69635),u=n(546),m=n(9559);const h="iconLanguage_R8ky",p=e=>{const{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:p,...f}=e,{i18n:{currentLocale:d,locales:g,localeConfigs:b}}=(0,i.Z)(),w=(0,c.l5)(),{pathname:v}=(0,s.TH)();if("mobile"!==(0,u.Z)()){if(v.startsWith("/zh/blog"))return r.createElement(m.Z,{autoAddBaseUrl:!1,to:"pathname:///blog",target:"_parent"},"English Blog");if(v.startsWith("/blog"))return r.createElement(m.Z,{autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_parent"},"\u4e2d\u6587\u535a\u5ba2")}function y(e){return b[e].label}const E=[...n,...g.map((e=>{const t="pathname://"+w.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:y(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...p],S=t?"Languages":y(d);return r.createElement(l.Z,(0,a.Z)({},f,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(o.Z,{className:h}),r.createElement("span",null,S)),items:E}))}},80528:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(27378),r=n(64208),l=n(40639),o=n(9559);const i="container_d2DC";var c=n(25773);const s=function(e){if(e){var t=function(e){return[].slice.call(e)},n=3,a=[],r=null,l="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(r),r=e.requestAnimationFrame((function(){return i(a.filter((function(e){return e.dirty&&e.active})))}))}:function(){},o=function(e){return function(){a.forEach((function(t){return t.dirty=e})),l()}},i=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=m(e)})),e.filter(h).forEach(p);var t=e.filter(u);t.forEach(s),t.forEach((function(e){p(e),c(e)})),t.forEach(f)},c=function(e){return e.dirty=0},s=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap"},u=function(e){return 2!==e.dirty||2===e.dirty&&e.element.parentNode.clientWidth!==e.availableWidth},m=function(t){var n=e.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(n.getPropertyValue("font-size")),t.display=n.getPropertyValue("display"),t.whiteSpace=n.getPropertyValue("white-space"),!0},h=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},p=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px"},f=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},d=function(e,t){return function(){e.dirty=t,e.active&&l()}},g=function(e){return function(){a=a.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},b=function(e){return function(){e.active||(e.active=!0,l())}},w=function(e){return function(){return e.active=!1}},v=function(e){e.observeMutations&&(e.observer=new MutationObserver(d(e,1)),e.observer.observe(e.element,e.observeMutations))},y={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},E=null,S=function(){e.clearTimeout(E),E=e.setTimeout(o(2),C.observeWindowDelay)},k=["resize","orientationchange"];return Object.defineProperty(C,"observeWindow",{set:function(t){var n="".concat(t?"add":"remove","EventListener");k.forEach((function(t){e[n](t,S)}))}}),C.observeWindow=!0,C.observeWindowDelay=100,C.fitAll=o(n),C}function Z(e,t){var r=Object.assign({},y,t),o=e.map((function(e){var t=Object.assign({},r,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},v(e),e.newbie=!0,e.dirty=!0,a.push(e)}(t),{element:e,fit:d(t,n),unfreeze:b(t),freeze:w(t),unsubscribe:g(t)}}));return l(),o}function C(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e?Z(t(document.querySelectorAll(e)),n):Z([e],n)[0]}}("undefined"==typeof window?null:window);var u=n(38944);const m=(e,t)=>{const{tagName:n,children:r,wrapText:l=!1,className:o,...i}=e,m=n,h=a.useRef(null),p=t||h;return a.useLayoutEffect((()=>{const e=t||h,n=s(null==e?void 0:e.current,{minSize:10,maxSize:512,multiLine:l,observeMutations:{subtree:!0,childList:!0,characterData:!0,attributeFilter:["class"]}});return requestAnimationFrame((()=>{n.fit()})),()=>{s(e.current).unsubscribe()}}),[]),a.createElement(m,{className:(0,u.Z)("fit-wrapper",o)},a.createElement("span",(0,c.Z)({className:"fit",ref:p},i),r))},h=(0,a.forwardRef)(m),p=()=>a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:i},a.createElement("section",null,a.createElement(h,{tagName:"h1",contentEditable:!0},"404"),a.createElement(h,{tagName:"h2"},"Page Not Found")),a.createElement("p",null,"We could not find what you were looking for."),a.createElement("p",null,"If you think this link should not be broken, please"," ",a.createElement(o.Z,{href:"https://github.com/apache/apisix-website/issues/new/choose",target:"_blank",rel:"noreferrer"},"submit an Issue"),"."),a.createElement("p",null,"You can also return to"," ",a.createElement(o.Z,{href:"/"},"the home page"),". Or, return to"," ",a.createElement("a",{role:"button",href:"#",onClick:()=>{var e;null==(e=window)||e.history.back()}},"the source page"),".")))},77658:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(25773),r=n(27378),l=n(31542),o=n(15638),i=n(31142),c=n(9559),s=n(94142),u=n(69744),m=n(59495),h=n(62492),p=n(10183),f=n(40639);const d="searchBox_wNuE";let g=null;function b(e){let{hit:t,children:n}=e;return r.createElement("a",{href:t.url,target:"_parent"},n)}function w(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:a}=(0,u.Z)();return r.createElement(c.Z,{to:a(t.query),onClick:n,target:"_blank"},"See all ",t.context.nbHits," results")}function v(e){var t,c;let{contextualSearch:u,...v}=e;const{siteMetadata:y}=(0,o.Z)(),E=(0,p.Z)(),S=null!=(t=null==(c=v.searchParameters)?void 0:c.facetFilters)?t:[],k=u?[...E,...S]:S,Z={...v.searchParameters,facetFilters:k},{withBaseUrl:C}=(0,i.C)(),z=(0,r.useRef)(null),F=(0,r.useRef)(null),[A,N]=(0,r.useState)(!1),[_,P]=(0,r.useState)(null),I=(0,r.useCallback)((()=>g?Promise.resolve():Promise.all([n.e(6295).then(n.bind(n,96295)),Promise.all([n.e(532),n.e(9127)]).then(n.bind(n,89127)),Promise.all([n.e(532),n.e(3005)]).then(n.bind(n,63005))]).then((e=>{let[{DocSearchModal:t}]=e;g=t}))),[]),L=(0,r.useCallback)((()=>{I().then((()=>{z.current=document.createElement("div"),document.body.insertBefore(z.current,document.body.firstChild),N(!0)}))}),[I,N]),x=(0,r.useCallback)((()=>{N(!1),z.current.remove()}),[N]),M=(0,r.useCallback)((e=>{I().then((()=>{N(!0),P(e.key)}))}),[I,N,P]),T=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,W=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:C(""+t.pathname+t.hash)}})))).current,B=(0,r.useMemo)((()=>e=>r.createElement(w,(0,a.Z)({},e,{onClose:x}))),[x]),R=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",y.docusaurusVersion),e)),[y.docusaurusVersion]);(0,m.D)({isOpen:A,onOpen:L,onClose:x,onInput:M,searchButtonRef:F});const O=(0,f.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+v.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement("div",{className:d},r.createElement(h.a,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:L,ref:F,translations:{buttonText:O,buttonAriaLabel:O}})),A&&(0,l.createPortal)(r.createElement(g,(0,a.Z)({onClose:x,initialScrollY:window.scrollY,initialQuery:_,navigator:T,transformItems:W,hitComponent:b,resultsFooterComponent:B,transformSearchClient:R},v,{searchParameters:Z})),z.current))}const y=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(v,e.themeConfig.algolia)}}}]);