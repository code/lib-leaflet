"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29],{876:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,y=f["".concat(a,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9245:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=t(7896),o=t(1461),i=(t(2784),t(876)),l=["components"],c={title:"Tooltips"},a=void 0,p={unversionedId:"example-tooltips",id:"example-tooltips",isDocsHomePage:!1,title:"Tooltips",description:"",source:"@site/docs/example-tooltips.md",sourceDirName:".",slug:"/example-tooltips",permalink:"/docs/example-tooltips",tags:[],version:"current",frontMatter:{title:"Tooltips"},sidebar:"docs",previous:{title:"Other layers",permalink:"/docs/example-other-layers"},next:{title:"Layers control",permalink:"/docs/example-layers-control"}},s=[],u={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const center = [51.505, -0.09]\n\nconst multiPolygon = [\n  [\n    [51.51, -0.12],\n    [51.51, -0.13],\n    [51.53, -0.13],\n  ],\n  [\n    [51.51, -0.05],\n    [51.51, -0.07],\n    [51.53, -0.07],\n  ],\n]\n\nconst rectangle = [\n  [51.49, -0.08],\n  [51.5, -0.06],\n]\n\nfunction TooltipCircle() {\n  const [clickedCount, setClickedCount] = useState(0)\n  const eventHandlers = useMemo(\n    () => ({\n      click() {\n        setClickedCount((count) => count + 1)\n      },\n    }),\n    [],\n  )\n\n  const clickedText =\n    clickedCount === 0\n      ? 'Click this Circle to change the Tooltip text'\n      : `Circle click: ${clickedCount}`\n\n  return (\n    <Circle\n      center={center}\n      eventHandlers={eventHandlers}\n      pathOptions={{ fillColor: 'blue' }}\n      radius={200}>\n      <Tooltip>{clickedText}</Tooltip>\n    </Circle>\n  )\n}\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n      url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    />\n    <TooltipCircle />\n    <CircleMarker\n      center={[51.51, -0.12]}\n      pathOptions={{ color: 'red' }}\n      radius={20}>\n      <Tooltip>Tooltip for CircleMarker</Tooltip>\n    </CircleMarker>\n    <Marker position={[51.51, -0.09]}>\n      <Popup>Popup for Marker</Popup>\n      <Tooltip>Tooltip for Marker</Tooltip>\n    </Marker>\n    <Polygon pathOptions={{ color: 'purple' }} positions={multiPolygon}>\n      <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>\n    </Polygon>\n    <Rectangle bounds={rectangle} pathOptions={{ color: 'black' }}>\n      <Tooltip direction=\"bottom\" offset={[0, 20]} opacity={1} permanent>\n        permanent Tooltip for Rectangle\n      </Tooltip>\n    </Rectangle>\n  </MapContainer>,\n)\n")))}f.isMDXComponent=!0}}]);