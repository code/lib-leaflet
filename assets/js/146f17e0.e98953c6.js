"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4156],{876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2009:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(2784),r=a(6277);const l="tabItem_OMyP";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},1112:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7896),r=a(2784),l=a(6277),o=a(9741),s=a(2244),i=a(8963),u=a(4126);const p="tabList_M0Dn",c="tabItem_ysIP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:m,values:f,groupId:y,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,i.U)(),[w,O]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=y){const e=T[y];null!=e&&e!==w&&h.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,a=x.indexOf(t),n=h[a].value;n!==w&&(j(t),O(n),null!=y&&N(y,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},6298:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(7896),r=(a(2784),a(876)),l=a(1112),o=a(2009);const s={title:"Installation"},i=void 0,u={unversionedId:"start-installation",id:"version-3.x/start-installation",title:"Installation",description:"React prerequisites",source:"@site/versioned_docs/version-3.x/start-installation.mdx",sourceDirName:".",slug:"/start-installation",permalink:"/docs/v3/start-installation",draft:!1,tags:[],version:"3.x",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/v3/start-introduction"},next:{title:"Setup",permalink:"/docs/v3/start-setup"}},p={},c=[{value:"React prerequisites",id:"react-prerequisites",level:2},{value:"Leaflet prerequisites",id:"leaflet-prerequisites",level:2},{value:"Adding React Leaflet",id:"adding-react-leaflet",level:2},{value:"Using TypeScript",id:"using-typescript",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"react-prerequisites"},"React prerequisites"),(0,r.kt)("p",null,"This documentation assumes you are already familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," and have a project setup. If it is not the case, you should read ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/getting-started.html"},"React's Getting Started documentation")," first."),(0,r.kt)("h2",{id:"leaflet-prerequisites"},"Leaflet prerequisites"),(0,r.kt)("p",null,"This documentation assumes you are already familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://leafletjs.com/"},"Leaflet"),". React Leaflet ",(0,r.kt)("strong",{parentName:"p"},"does not replace Leaflet"),", it only provides bindings between React and Leaflet."),(0,r.kt)("p",null,"This documentation ",(0,r.kt)("strong",{parentName:"p"},"is not a replacement")," for ",(0,r.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference.html"},"Leaflet's documentation"),", it only focuses on aspects specific to React Leaflet."),(0,r.kt)("admonition",{title:"Read this before going further",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Before using React Leaflet, you must setup your project following ",(0,r.kt)("a",{parentName:"p",href:"https://leafletjs.com/examples/quick-start/"},"Leaflet's Quick Start Guide"),".")),(0,r.kt)("h2",{id:"adding-react-leaflet"},"Adding React Leaflet"),(0,r.kt)("p",null,"React, React DOM and Leaflet are required peer dependencies. You must add them to your project if they are not already installed:"),(0,r.kt)(l.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react@17 react-dom@17 leaflet\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react@17 react-dom@17 leaflet\n")))),(0,r.kt)("p",null,"Note that React Leaflet v3 only supports React v17, ",(0,r.kt)("strong",{parentName:"p"},"v18 is not supported"),"."),(0,r.kt)("p",null,"Then you can install React Leaflet:"),(0,r.kt)(l.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-leaflet\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-leaflet\n")))),(0,r.kt)("p",null,"Finally, you can import the necessary components. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'\n")),(0,r.kt)("h2",{id:"using-typescript"},"Using TypeScript"),(0,r.kt)("p",null,"React Leaflet provides TypeScript definitions in the installed packages, but needs Leaflet's definitions to be present. If you have not installed them yet, you will need to add them:"),(0,r.kt)(l.Z,{defaultValue:"npm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @types/leaflet\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @types/leaflet\n")))))}m.isMDXComponent=!0}}]);