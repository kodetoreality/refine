"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81787],{58860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"useModal",title:"useModal",description:"useModal example of @pankod/refine-core","example-title":"Refine's useModal hook","example-tags":["headless","refine-hooks"]},c=void 0,s={unversionedId:"examples/core/useModal",id:"version-3.xx.xx/examples/core/useModal",title:"useModal",description:"useModal example of @pankod/refine-core",source:"@site/versioned_docs/version-3.xx.xx/examples/core/useModal.md",sourceDirName:"examples/core",slug:"/examples/core/useModal",permalink:"/docs/3.xx.xx/examples/core/useModal",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/core/useModal.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718373934,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{id:"useModal",title:"useModal",description:"useModal example of @pankod/refine-core","example-title":"Refine's useModal hook","example-tags":["headless","refine-hooks"]},sidebar:"someSidebar",previous:{title:"useImport",permalink:"/docs/3.xx.xx/examples/core/useImport"},next:{title:"useSelect",permalink:"/docs/3.xx.xx/examples/core/useSelect"}},p={},u=[],d=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var f;const m={toc:u},y="wrapper";function x(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(y,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Using the ",(0,n.yg)("inlineCode",{parentName:"p"},"useModal")," hook that comes with the ",(0,n.yg)("strong",{parentName:"p"},"headless")," version of ",(0,n.yg)("strong",{parentName:"p"},"refine"),", you may manage a modal. This hook is UI-independent and only includes show and close operations. You can create your UI as you like, and control it with the ",(0,n.yg)("inlineCode",{parentName:"p"},"useModal")," hook."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/ui/useModal/"},"Refer to the ",(0,n.yg)("strong",{parentName:"a"},"refine")," useModal hook documentation for more information. \u2192")),(0,n.yg)(d,{path:"core-use-modal",mdxType:"CodeSandboxExample"}))}x.isMDXComponent=!0}}]);