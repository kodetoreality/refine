"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"useModal",source:"packages/core/src/hooks/modal/useModal/index.tsx"},s=void 0,p={unversionedId:"core/hooks/utilities/use-modal/index",id:"core/hooks/utilities/use-modal/index",title:"useModal",description:"useModal hook allows you to manage a modal. Since it is designed as headless, it returns the show and close functions and the visible state. It expects you to handle the UI.",source:"@site/docs/core/hooks/utilities/use-modal/index.md",sourceDirName:"core/hooks/utilities/use-modal",slug:"/core/hooks/utilities/use-modal/",permalink:"/docs/core/hooks/utilities/use-modal/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/utilities/use-modal/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1707226578,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"useModal",source:"packages/core/src/hooks/modal/useModal/index.tsx"},sidebar:"mainSidebar",previous:{title:"Inferencer",permalink:"/docs/core/components/inferencer/"},next:{title:"useMenu",permalink:"/docs/core/hooks/utilities/use-menu/"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"defaultVisible",id:"defaultvisible",level:3},{value:"Return Values",id:"return-values",level:2},{value:"visible",id:"visible",level:3},{value:"show",id:"show",level:3},{value:"close",id:"close",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("PropsTable"),h=c("CodeSandboxExample"),f={toc:d};function b(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModal")," hook allows you to manage a modal. Since it is designed as headless, it returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," functions and the ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," state. It expects you to handle the UI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { show, close, visible } = useModal();\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," state to show or hide the modal. The ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," functions' only use is changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," state. You can use this hook anywhere."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's see an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n  // highlight-next-line\n  useModal,\n} from "@refinedev/core";\n\nexport const PostList: React.FC = () => {\n  // highlight-next-line\n  const { visible, show, close } = useModal();\n\n  return (\n    <>\n      // highlight-start\n      <button onClick={show}>Show Modal</button>\n      {visible && (\n        <YourModalComponent>\n          <p>Dummy Modal Content</p>\n          <button onClick={close}>Close Modal</button>\n        </YourModalComponent>\n      )}\n      // highlight-end\n    </>\n  );\n};\n')),(0,r.kt)("p",null,"Here, we show a button somewhere on the page and use ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," on its ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," callback to trigger the opening of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<YourModalComponent>"),". When the user clicks on the button, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<YourModalComponent>")," appears."),(0,r.kt)("p",null,"To demonstrate the ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," function, we created a ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," that uses it in its ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," property to close ",(0,r.kt)("inlineCode",{parentName:"p"},"<YourModalComponent>")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"defaultvisible"},"defaultVisible"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"defaultVisible")," is a boolean value that determines whether the modal is visible by default. By default, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useModal({\n  defaultVisible: true,\n});\n")),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("h3",{id:"visible"},"visible"),(0,r.kt)("p",null,"Visible state of the modal."),(0,r.kt)("h3",{id:"show"},"show"),(0,r.kt)("p",null,"A function that can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," state to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"close"},"close"),(0,r.kt)("p",null,"A function that can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," state to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(m,{module:"@refinedev/core/useModal",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visible"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the ",(0,r.kt)("inlineCode",{parentName:"td"},"visible")," state of the modal."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that can open the modal."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that can close the modal."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(h,{path:"core-use-modal",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);