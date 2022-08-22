"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4219],{876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=i(t),m=a,y=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(7896),a=(t(2784),t(876));const o={title:"Panes"},l=void 0,c={unversionedId:"example-panes",id:"version-3.x/example-panes",title:"Panes",description:"",source:"@site/versioned_docs/version-3.x/example-panes.md",sourceDirName:".",slug:"/example-panes",permalink:"/docs/v3/example-panes",draft:!1,tags:[],version:"3.x",frontMatter:{title:"Panes"},sidebar:"docs",previous:{title:"Layers control",permalink:"/docs/v3/example-layers-control"},next:{title:"Draggable Marker",permalink:"/docs/v3/example-draggable-marker"}},p={},i=[],s={toc:i};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect, useRef, useState } from 'react'\nimport { MapContainer, Pane, Rectangle, TileLayer } from 'react-leaflet'\n\nconst outer = [\n  [50.505, -29.09],\n  [52.505, 29.09],\n]\nconst inner = [\n  [49.505, -2.09],\n  [53.505, 2.09],\n]\n\nfunction BlinkingPane() {\n  const [render, setRender] = useState(true)\n  const timerRef = useRef()\n  useEffect(() => {\n    timerRef.current = setInterval(() => {\n      setRender((r) => !r)\n    }, 5000)\n    return () => {\n      clearInterval(timerRef.current)\n    }\n  }, [])\n\n  return render ? (\n    <Pane name=\"cyan-rectangle\" style={{ zIndex: 500 }}>\n      <Rectangle bounds={outer} pathOptions={{ color: 'cyan' }} />\n    </Pane>\n  ) : null\n}\n\nfunction PanesExample() {\n  return (\n    <MapContainer bounds={outer}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <BlinkingPane />\n      <Pane name=\"yellow-rectangle\" style={{ zIndex: 499 }}>\n        <Rectangle bounds={inner} pathOptions={{ color: 'yellow' }} />\n        <Pane name=\"purple-rectangle\">\n          <Rectangle bounds={outer} pathOptions={{ color: 'purple' }} />\n        </Pane>\n      </Pane>\n    </MapContainer>\n  )\n}\n")))}u.isMDXComponent=!0}}]);