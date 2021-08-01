"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[395],{876:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(t),u=r,k=s["".concat(l,".").concat(u)]||s[u]||d[u]||o;return t?a.createElement(k,p(p({ref:n},c),{},{components:t})):a.createElement(k,p({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<o;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9497:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var a=t(7560),r=t(8283),o=(t(2784),t(876)),p=["components"],i={title:"Map creation and interactions"},l=void 0,m={unversionedId:"api-map",id:"api-map",isDocsHomePage:!1,title:"Map creation and interactions",description:"MapContainer",source:"@site/docs/api-map.md",sourceDirName:".",slug:"/api-map",permalink:"/docs/api-map",version:"current",frontMatter:{title:"Map creation and interactions"},sidebar:"docs",previous:{title:"Map placeholder",permalink:"/docs/example-map-placeholder"},next:{title:"Child components",permalink:"/docs/api-components"}},c=[{value:"MapContainer",id:"mapcontainer",children:[]},{value:"Hooks",id:"hooks",children:[{value:"useMap",id:"usemap",children:[]},{value:"useMapEvents",id:"usemapevents",children:[]},{value:"useMapEvent",id:"usemapevent",children:[]}]},{value:"MapConsumer",id:"mapconsumer",children:[]}],d={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"mapcontainer"},"MapContainer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MapContainer")," component is responsible for creating the ",(0,o.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference-1.7.1.html#map"},"Leaflet Map")," instance and providing it to its ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-components"},"child components"),", using a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context"),"."),(0,o.kt)("p",null,"When creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"MapContainer")," element, its props are used as options to ",(0,o.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference-1.7.1.html#map-l-map"},"create the Map instance"),"."),(0,o.kt)("p",null,"The following additional props are supported:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Prop"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"bounds")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LatLngBoundsExpression"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boundsOptions")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"FitBoundsOptions"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"children")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"className")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"style")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CSSProperties"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"whenCreated")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(map: Leaflet.Map) => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"whenReady")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,o.kt)("p",null,"Except for its ",(0,o.kt)("inlineCode",{parentName:"p"},"children"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MapContainer")," props are ",(0,o.kt)("strong",{parentName:"p"},"immutable"),": changing them after they have been set a first time will have no effect on the Map instance or its container.",(0,o.kt)("br",{parentName:"p"}),"\n","The Leaflet ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," instance created by the ",(0,o.kt)("inlineCode",{parentName:"p"},"MapContainer")," element can be accessed by ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-components"},"child components")," using one of ",(0,o.kt)("a",{parentName:"p",href:"#hooks"},"the provided hooks")," or the ",(0,o.kt)("a",{parentName:"p",href:"#mapconsumer"},(0,o.kt)("inlineCode",{parentName:"a"},"MapConsumer")," component"),"."),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("h3",{id:"usemap"},"useMap"),(0,o.kt)("p",null,"Hook providing the Leaflet ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," instance in any descendant of a ",(0,o.kt)("a",{parentName:"p",href:"#mapcontainer"},(0,o.kt)("inlineCode",{parentName:"a"},"MapContainer")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyComponent() {\n  const map = useMap()\n  console.log('map center:', map.getCenter())\n  return null\n}\n\nfunction MyMapComponent() {\n  return (\n    <MapContainer center={[50.5, 30.5]} zoom={13}>\n      <MyComponent />\n    </MapContainer>\n  )\n}\n")),(0,o.kt)("h3",{id:"usemapevents"},"useMapEvents"),(0,o.kt)("p",null,"Hook attaching the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"LeafletEventHandlerFnMap")," event handlers to the map instance and returning the instance in any descendant of a ",(0,o.kt)("a",{parentName:"p",href:"#mapcontainer"},(0,o.kt)("inlineCode",{parentName:"a"},"MapContainer")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyComponent() {\n  const map = useMapEvents({\n    click: () => {\n      map.locate()\n    },\n    locationfound: (location) => {\n      console.log('location found:', location)\n    },\n  })\n  return null\n}\n\nfunction MyMapComponent() {\n  return (\n    <MapContainer center={[50.5, 30.5]} zoom={13}>\n      <MyComponent />\n    </MapContainer>\n  )\n}\n")),(0,o.kt)("h3",{id:"usemapevent"},"useMapEvent"),(0,o.kt)("p",null,"Hook attaching a single event handler to the map instance and returning the instance in any descendant of a ",(0,o.kt)("a",{parentName:"p",href:"#mapcontainer"},(0,o.kt)("inlineCode",{parentName:"a"},"MapContainer")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyComponent() {\n  const map = useMapEvent('click', () => {\n    map.setCenter([50.5, 30.5])\n  })\n  return null\n}\n\nfunction MyMapComponent() {\n  return (\n    <MapContainer center={[50.5, 30.5]} zoom={13}>\n      <MyComponent />\n    </MapContainer>\n  )\n}\n")),(0,o.kt)("h2",{id:"mapconsumer"},"MapConsumer"),(0,o.kt)("p",null,"Component using the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/render-props.html"},"render prop")," technique to provide the Leaflet ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," instance in any descendant of a ",(0,o.kt)("a",{parentName:"p",href:"#mapcontainer"},(0,o.kt)("inlineCode",{parentName:"a"},"MapContainer")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyMapComponent() {\n  return (\n    <MapContainer center={[50.5, 30.5]} zoom={13}>\n      <MapConsumer>\n        {(map) => {\n          console.log('map center:', map.getCenter())\n          return null\n        }}\n      </MapConsumer>\n    </MapContainer>\n  )\n}\n")))}s.isMDXComponent=!0}}]);