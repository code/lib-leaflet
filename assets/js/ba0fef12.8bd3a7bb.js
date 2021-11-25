"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[975],{876:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),a=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=a(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=a(t),f=o,m=y["".concat(c,".").concat(f)]||y[f]||u[f]||i;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=y;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var a=2;a<i;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},544:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return s},default:function(){return y}});var r=t(7896),o=t(1461),i=(t(2784),t(876)),l=["components"],p={title:"Vector layers"},c=void 0,a={unversionedId:"example-vector-layers",id:"example-vector-layers",isDocsHomePage:!1,title:"Vector layers",description:"",source:"@site/docs/example-vector-layers.md",sourceDirName:".",slug:"/example-vector-layers",permalink:"/docs/example-vector-layers",tags:[],version:"current",frontMatter:{title:"Vector layers"},sidebar:"docs",previous:{title:"Events",permalink:"/docs/example-events"},next:{title:"SVG Overlay",permalink:"/docs/example-svg-overlay"}},s=[],u={toc:s};function y(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const center = [51.505, -0.09]\n\nconst polyline = [\n  [51.505, -0.09],\n  [51.51, -0.1],\n  [51.51, -0.12],\n]\n\nconst multiPolyline = [\n  [\n    [51.5, -0.1],\n    [51.5, -0.12],\n    [51.52, -0.12],\n  ],\n  [\n    [51.5, -0.05],\n    [51.5, -0.06],\n    [51.52, -0.06],\n  ],\n]\n\nconst polygon = [\n  [51.515, -0.09],\n  [51.52, -0.1],\n  [51.52, -0.12],\n]\n\nconst multiPolygon = [\n  [\n    [51.51, -0.12],\n    [51.51, -0.13],\n    [51.53, -0.13],\n  ],\n  [\n    [51.51, -0.05],\n    [51.51, -0.07],\n    [51.53, -0.07],\n  ],\n]\n\nconst rectangle = [\n  [51.49, -0.08],\n  [51.5, -0.06],\n]\n\nconst fillBlueOptions = { fillColor: 'blue' }\nconst blackOptions = { color: 'black' }\nconst limeOptions = { color: 'lime' }\nconst purpleOptions = { color: 'purple' }\nconst redOptions = { color: 'red' }\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n      url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    />\n    <Circle center={center} pathOptions={fillBlueOptions} radius={200} />\n    <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>\n      <Popup>Popup in CircleMarker</Popup>\n    </CircleMarker>\n    <Polyline pathOptions={limeOptions} positions={polyline} />\n    <Polyline pathOptions={limeOptions} positions={multiPolyline} />\n    <Polygon pathOptions={purpleOptions} positions={polygon} />\n    <Polygon pathOptions={purpleOptions} positions={multiPolygon} />\n    <Rectangle bounds={rectangle} pathOptions={blackOptions} />\n  </MapContainer>,\n)\n")))}y.isMDXComponent=!0}}]);