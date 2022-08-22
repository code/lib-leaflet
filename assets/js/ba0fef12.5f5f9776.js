"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4975],{876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=c(t),m=o,f=y["".concat(a,".").concat(m)]||y[m]||u[m]||l;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=y;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=t(7896),o=(t(2784),t(876));const l={title:"Vector layers"},i=void 0,p={unversionedId:"example-vector-layers",id:"example-vector-layers",title:"Vector layers",description:"",source:"@site/docs/example-vector-layers.md",sourceDirName:".",slug:"/example-vector-layers",permalink:"/docs/example-vector-layers",draft:!1,tags:[],version:"current",frontMatter:{title:"Vector layers"},sidebar:"docs",previous:{title:"Events",permalink:"/docs/example-events"},next:{title:"SVG Overlay",permalink:"/docs/example-svg-overlay"}},a={},c=[],s={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const center = [51.505, -0.09]\n\nconst polyline = [\n  [51.505, -0.09],\n  [51.51, -0.1],\n  [51.51, -0.12],\n]\n\nconst multiPolyline = [\n  [\n    [51.5, -0.1],\n    [51.5, -0.12],\n    [51.52, -0.12],\n  ],\n  [\n    [51.5, -0.05],\n    [51.5, -0.06],\n    [51.52, -0.06],\n  ],\n]\n\nconst polygon = [\n  [51.515, -0.09],\n  [51.52, -0.1],\n  [51.52, -0.12],\n]\n\nconst multiPolygon = [\n  [\n    [51.51, -0.12],\n    [51.51, -0.13],\n    [51.53, -0.13],\n  ],\n  [\n    [51.51, -0.05],\n    [51.51, -0.07],\n    [51.53, -0.07],\n  ],\n]\n\nconst rectangle = [\n  [51.49, -0.08],\n  [51.5, -0.06],\n]\n\nconst fillBlueOptions = { fillColor: 'blue' }\nconst blackOptions = { color: 'black' }\nconst limeOptions = { color: 'lime' }\nconst purpleOptions = { color: 'purple' }\nconst redOptions = { color: 'red' }\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n      url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    />\n    <Circle center={center} pathOptions={fillBlueOptions} radius={200} />\n    <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>\n      <Popup>Popup in CircleMarker</Popup>\n    </CircleMarker>\n    <Polyline pathOptions={limeOptions} positions={polyline} />\n    <Polyline pathOptions={limeOptions} positions={multiPolyline} />\n    <Polygon pathOptions={purpleOptions} positions={polygon} />\n    <Polygon pathOptions={purpleOptions} positions={multiPolygon} />\n    <Rectangle bounds={rectangle} pathOptions={blackOptions} />\n  </MapContainer>,\n)\n")))}u.isMDXComponent=!0}}]);