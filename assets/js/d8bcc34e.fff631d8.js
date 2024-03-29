"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85030],{58943:(e,t,n)=>{n.d(t,{x:()=>m});var r=n(86010),o=n(67294),a=n(73808),s=n(96319),i=n(79526);const l=({horizontalSize:e,onMouseDown:t})=>o.createElement("div",{className:(0,r.Z)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=e=>{var t;return"nextjs"===(null===(t=e)||void 0===t?void 0:t.template)?o.createElement(b,e):o.createElement(h,e)},h=e=>{var t,n,c,m,h,b,f,g,k,v,y,w,x,C,N,O,{startRoute:P,showNavigator:A,showLineNumbers:R,showOpenInCodeSandbox:E,initialPercentage:z=50,dependencies:D,showReadOnly:j,options:S={showTabs:!0,initMode:"lazy",classes:{"sp-bridge-frame":"!hidden","sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,r.Z)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-file-explorer":"border-r !border-r-gray-300 dark:!border-r-gray-700","sp-console":(0,r.Z)("not-prose","!border-t-0 !border !border-solid !border-t-none","!border-gray-300 dark:!border-gray-700","!rounded-bl-lg !rounded-br-lg","!bg-refine-react-light-code","dark:!bg-refine-react-dark-code"),"sp-console-header":(0,r.Z)("!bg-gray-0 dark:!bg-gray-800","border-b border-solid !border-b-gray-300 dark:!border-b-gray-700","!h-[32px] !min-h-[32px]"),"sp-console-header-actions":(0,r.Z)("h-full","!gap-0"),"sp-console-header-button":(0,r.Z)("!bg-transparent","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link","h-full","!text-gray-800 dark:!text-gray-100","!rounded-none","-ml-px"),"sp-console-list":(0,r.Z)("!bg-refine-react-light-code","dark:!bg-refine-react-dark-code","[&>code]:!bg-transparent"),"sp-tab-button":(0,r.Z)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:T="react-ts",customSetup:I,files:U,previewOnly:L,layout:M,height:B=420,wrapperClassName:F,className:Z,showFiles:W=!1,showConsole:H=!1,hidePreview:$=!1}=e,q=p(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[G,X]=o.useState(!1);o.useEffect((()=>{X(!0)}),[]);const{colorMode:_}=(0,i.I)();var K,V;null!=S||(S={}),null!==(K=(N=S).resizablePanels)&&void 0!==K||(N.resizablePanels=!0),null!==(V=(O=S).editorWidthPercentage)&&void 0!==V||(O.editorWidthPercentage=null!=z?z:50);const Y={showTabs:S.showTabs,showLineNumbers:S.showLineNumbers,showInlineErrors:S.showInlineErrors,wrapContent:S.wrapContent,closableTabs:S.closableTabs,initMode:S.initMode,extensions:null===(t=S.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=S.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:S.readOnly,showReadOnly:null!=j?j:S.showReadOnly,additionalLanguages:null===(c=S.codeEditor)||void 0===c?void 0:c.additionalLanguages},J={activeFile:S.activeFile,visibleFiles:S.visibleFiles,recompileMode:S.recompileMode,recompileDelay:S.recompileDelay,autorun:S.autorun,autoReload:S.autoReload,bundlerURL:S.bundlerURL,startRoute:S.startRoute,skipEval:S.skipEval,fileResolver:S.fileResolver,initMode:S.initMode,initModeObserverOptions:S.initModeObserverOptions,externalResources:S.externalResources,logLevel:S.logLevel,classes:S.classes},[Q,ee]=o.useState(!1),{onHandleMouseDown:te,horizontalSize:ne}=(({initialSize:e=50})=>{const[t,n]=o.useState(e),r=o.useRef(null),a=e=>{if(!r.current)return;const t=r.current.parentElement;if(!t)return;const{left:o,width:a}=t.getBoundingClientRect(),s=(e.clientX-o)/a*100,i=Math.min(Math.max(s,25),75);n(i),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},s=()=>{var e;const t=null===(e=r.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),r.current=null)};return o.useEffect((()=>(document.body.addEventListener("mousemove",a),document.body.addEventListener("mouseup",s),()=>{document.body.removeEventListener("mousemove",a),document.body.removeEventListener("mouseup",s)})),[]),{horizontalSize:t,onHandleMouseDown:o.useCallback((e=>{r.current=e.target}),[])}})({initialSize:S.editorWidthPercentage}),re=!L&&!(null===(h=M)||void 0===h||null===(m=h.includes)||void 0===m?void 0:m.call(h,"col"));var oe,ae,se,ie,le;return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,r.Z)("pb-6",F)},o.createElement("div",{className:(0,r.Z)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",Z)},o.createElement(s.oT,d({key:`${T}-${_}-${G}`,customSetup:d({dependencies:D},I),files:U,options:u(d({},J),{classes:u(d({},J.classes),{"sp-layout":(0,r.Z)(null===(b=J.classes)||void 0===b?void 0:b["sp-layout"],H&&"!rounded-bl-none !rounded-br-none")})}),template:T,theme:"light"===_?u(d({},a.FM),{colors:u(d({},a.FM.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):u(d({},a.I2),{colors:u(d({},a.I2.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,r.Z)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},q),o.createElement(s.sp,{className:(0,r.Z)("col"===M&&"!flex-col","col-reverse"===M&&"!flex-col-reverse")},W&&o.createElement(s.Lj,{autoHiddenFiles:!0,style:{height:null!==(oe=S.editorHeight)&&void 0!==oe?oe:B}}),!L&&o.createElement(s._V,u(d({},Y),{showLineNumbers:R,closableTabs:W,initMode:"lazy",style:u(d({height:null!==(ae=S.editorHeight)&&void 0!==ae?ae:B},(null===(g=M)||void 0===g||null===(f=g.includes)||void 0===f?void 0:f.call(g,"col"))?{flex:"initial"}:{flexGrow:ne,flexShrink:ne,flexBasis:0}),{overflow:"hidden"})})),re?o.createElement(l,{onMouseDown:te,horizontalSize:ne}):null,$?null:o.createElement(o.Fragment,null,o.createElement(s.Gj,{showOpenInCodeSandbox:E,startRoute:P,showNavigator:null!=A?A:S.showNavigator,showRefreshButton:S.showRefreshButton,style:u(d({display:$?"none":"flex"},(null===(v=M)||void 0===v||null===(k=v.includes)||void 0===k?void 0:k.call(v,"col"))?{flex:"initial",width:"100%"}:{flexGrow:100-ne,flexShrink:100-ne,flexBasis:0,width:L?"100%":100-ne+"%"}),{gap:0,height:null!==(se=S.editorHeight)&&void 0!==se?se:B})},o.createElement("div",{className:"sp-custom-loading"},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,r.Z)("w-12","h-12","rounded-full")}))))),H?o.createElement(s.Tq,{style:u(d({height:200},(null===(w=M)||void 0===w||null===(y=w.includes)||void 0===y?void 0:y.call(w,"col"))?{flex:"initial"}:{flexGrow:ne,flexShrink:ne,flexBasis:0}),{overflow:"hidden"})}):null)),o.createElement("div",{className:(0,r.Z)(""),style:{height:Number(null!==(ie=S.editorHeight)&&void 0!==ie?ie:B)+2}}),o.createElement("div",{className:(0,r.Z)((null===(C=M)||void 0===C||null===(x=C.includes)||void 0===x?void 0:x.call(C,"col"))?"block":"block md:hidden"),style:{height:Number(null!==(le=S.editorHeight)&&void 0!==le?le:B)+2}}),o.createElement("div",{className:(0,r.Z)(H?"block":"hidden","h-[200px]")})),o.createElement("section",{className:"hidden max-w-0 max-h-0"},o.createElement("p",null,`Dependencies: ${Object.keys(null!=D?D:{}).map((e=>`${e}@${D[e]}`))}`),o.createElement("h3",null,"Code Files"),Object.keys(null!=U?U:{}).map((e=>o.createElement("div",{key:e},o.createElement("div",null,`File: ${e}`),o.createElement("div",null,`Content: ${"code"in U[e]?U[e].code:U[e]}`))))))},b=e=>{const t={hidePreview:!0,showConsole:!1};return o.createElement(h,u(d({},t,e),{template:"react-ts"}))}},99542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>x,frontMatter:()=>h,metadata:()=>f,toc:()=>k});var r=n(67294),o=n(3905),a=n(58943);function s(){return r.createElement(a.x,{showNavigator:!0,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@refinedev/react-router-v6":"latest","react-router-dom":"latest","react-router":"latest"},startRoute:"/payments/1",files:{"/App.tsx":{code:l,hidden:!0},"/style.css":{code:c,hidden:!0},"/access-control.ts":{code:i,active:!0},"/show.tsx":{code:d}}})}const i='\nimport { AccessControlProvider } from "@refinedev/core";\n\nconst role = "editor";\n// Uncomment this line and refresh to see difference.\n// const role = "admin";\n\nexport const accessControlProvider: AccessControlProvider = {\n  can: async ({ action, resource, params }) => {\n    console.log(action, resource, params);\n\n    if (\n      role === "admin" &&\n      ["field", "refund", "approve"].includes(action)\n    ) {\n      return {\n        can: true,\n      };\n    }\n\n    return {\n      can: false,\n      reason: "Unauthorized",\n    };\n  },\n};\n'.trim(),l='\nimport React from "react";\n\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nimport "./style.css";\n\nimport { accessControlProvider } from "./access-control.ts";\nimport { PaymentShow } from "./show.tsx";\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Refine\n      accessControlProvider={accessControlProvider}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        resources={[\n          {\n            name: "payments",\n            show: "/payments/:id",\n          },\n        ]}\n      >\n        <Routes>\n          <Route path="/payments/:id" element={<PaymentShow />} />\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n}\n'.trim(),c="\nhtml {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 0;\n    padding: 12px;\n}\n* {\n    box-sizing: border-box;\n}\nbody {\n    font-family: sans-serif;\n}\nform label, form input, form button {\n    display: block;\n    width: 100%;\n    margin-bottom: 6px;\n}\nspan + button {\n    margin-left: 6px;\n}\nul > li {\n    margin-bottom: 6px;\n}\n".trim(),d='\nimport { CanAccess, useCan } from "@refinedev/core";\n\nexport const PaymentShow: React.FC = () => {\n  const { data } = useCan({\n    resource: "payments",\n    action: "refund",\n    params: { id: 1 },\n  });\n\n  return (\n    <>\n      <h1>Payment Details</h1>\n      <p>\n        <b>ID</b>: <span>1</span>\n      </p>\n      <p>\n        <b>Amount</b>: <span>$100</span>\n      </p>\n      <p>\n        <b>Transaction ID</b>:\n        <span>\n          <CanAccess\n            resource="payments"\n            action="field"\n            params={{ field: "transactionId" }}\n            fallback={<>This field is only visible to admin users.</>}\n          >\n            <span>123456789</span>\n          </CanAccess>\n        </span>\n      </p>\n      <button disabled={!data?.can}>\n        {data?.can ? "Refund" : data?.reason}\n      </button>\n    </>\n  );\n};\n'.trim();function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const h={title:"Authorization"},b=void 0,f={unversionedId:"guides-concepts/authorization/index",id:"guides-concepts/authorization/index",title:"Authorization",description:"Authorization is a key aspect of security and user experience in web applications. Whether you are building a complex enterprise-level application or a simple CRUD interface, Refine's authorization system provides the necessary infrastructure to protect your resources and ensure that users interact with your application in a secure and controlled manner.",source:"@site/docs/guides-concepts/authorization/index.md",sourceDirName:"guides-concepts/authorization",slug:"/guides-concepts/authorization/",permalink:"/docs/guides-concepts/authorization/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/authorization/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1711702532,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{title:"Authorization"},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/docs/guides-concepts/authentication/"},next:{title:"UI Libraries",permalink:"/docs/guides-concepts/ui-libraries/"}},g={},k=[{value:"Access Control Provider",id:"access-control-provider",level:2},{value:"CanAccess Component",id:"canaccess-component",level:2},{value:"Router Integrations",id:"router-integrations",level:3},{value:"useCan Hook",id:"usecan-hook",level:2},{value:"Handling Authorization",id:"handling-authorization",level:2},{value:"UI Integrations",id:"ui-integrations",level:2},{value:"Sider",id:"sider",level:3},{value:"Buttons",id:"buttons",level:3}],v=(y="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var y;const w={toc:k};function x(e){var{components:t}=e,n=m(e,["components"]);return(0,o.kt)("wrapper",p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},w,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Authorization is a key aspect of security and user experience in web applications. Whether you are building a complex ",(0,o.kt)("strong",{parentName:"p"},"enterprise-level")," application or a simple CRUD interface, Refine's authorization system provides the necessary infrastructure to protect your resources and ensure that users interact with your application in a secure and controlled manner."),(0,o.kt)("p",null,"Refine's ",(0,o.kt)("strong",{parentName:"p"},"flexible architecture")," allows you to easily implement various authorization strategies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Role-Based Access Control (",(0,o.kt)("strong",{parentName:"li"},"RBAC"),")"),(0,o.kt)("li",{parentName:"ul"},"Attribute-Based Access Control (",(0,o.kt)("strong",{parentName:"li"},"ABAC"),")"),(0,o.kt)("li",{parentName:"ul"},"Access Control List (",(0,o.kt)("strong",{parentName:"li"},"ACL"),")")),(0,o.kt)("p",null,"With ",(0,o.kt)("strong",{parentName:"p"},"any")," authorization solution. (i.e. ",(0,o.kt)("a",{parentName:"p",href:"https://help.okta.com/wf/en-us/content/topics/workflows/connector-reference/okta/overviews/authorization.htm"},"Okta"),", ",(0,o.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,o.kt)("a",{parentName:"p",href:"https://cerbos.dev"},"Cerbos"),", or more)"),(0,o.kt)("p",null,"Refine offers several features to help you implement authorization in your application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<CanAccess />")," component: Conditionally renders child components based on the user's access to a resource."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useCan")," hook: Returns a value indicating whether the user has access to a resource based on the given parameters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UI Integrations"),": Conditionally renders UI elements such as ",(0,o.kt)("strong",{parentName:"li"},"buttons"),", ",(0,o.kt)("strong",{parentName:"li"},"menu items"),", etc. based on the user's access to a resource.")),(0,o.kt)("p",null,"In order to enable these features, Refine uses the ",(0,o.kt)("strong",{parentName:"p"},"Access Control Provider")," as an interface to connect your application with your authorization solution and provides necessary parameters to make access control decisions."),(0,o.kt)("h2",{id:"access-control-provider"},"Access Control Provider"),(0,o.kt)(v,{id:"access-control-provider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider")," is an object that contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method. This method is called by Refine to understand if the user can see a certain resource or perform an action."),(0,o.kt)("p",null,"A basic ",(0,o.kt)("strong",{parentName:"p"},"Access Control Provider")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="access-control-provider.ts"',title:'"access-control-provider.ts"'},'import { AccessControlProvider } from "@refinedev/core";\n\nexport const accessControlProvider: AccessControlProvider = {\n  can: async ({ resource, action, params }) => {\n    console.log(resource); // products, orders, etc.\n    console.log(action); // list, edit, delete, etc.\n    console.log(params); // { id: 1 }, { id: 2 }, etc.\n\n    if (meetSomeCondition) {\n      return { can: true };\n    }\n\n    return {\n      can: false,\n      reason: "Unauthorized",\n    };\n  },\n};\n')),(0,o.kt)("p",null,"And can be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine />")," component's ",(0,o.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport { accessControlProvider } from "./access-control-provider";\n\nexport const App = () => {\n  return (\n    <Refine\n      // highlight-next-line\n      accessControlProvider={accessControlProvider}\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"To learn more about the ",(0,o.kt)("inlineCode",{parentName:"a"},"Access Control Provider"),", check out the reference page."))),(0,o.kt)("h2",{id:"canaccess-component"},"CanAccess Component"),(0,o.kt)(v,{id:"canaccess-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CanAccess")," component can be used to wrap your ",(0,o.kt)("strong",{parentName:"p"},"pages")," or ",(0,o.kt)("strong",{parentName:"p"},"components")," to hide them from unauthorized users."),(0,o.kt)("p",null,"It calls ",(0,o.kt)("strong",{parentName:"p"},"Access Control Provider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method and conditionally renders its children based on the result."),(0,o.kt)("p",null,"Here's a basic example of how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CanAccess")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="list-page.tsx"',title:'"list-page.tsx"'},'import { CanAccess } from "@refinedev/core";\n\nexport const ListPage = () => {\n  return (\n    <CanAccess\n      resource="products"\n      action="list"\n      fallback={<h1>You are not authorized to see this page.</h1>}\n    >\n      <>\n        <h1>Products</h1>\n        <CanAccess resource="products" action="show" params={{ id: 1 }}>\n          <Button>See Details</Button>\n        </CanAccess>\n      </>\n    </CanAccess>\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/components/can-access"},"To learn more about the ",(0,o.kt)("inlineCode",{parentName:"a"},"CanAccess")," component, check out the reference page."))),(0,o.kt)("h3",{id:"router-integrations"},"Router Integrations"),(0,o.kt)(v,{id:"router-integrations",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"Refine's router integrations can infer ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"action"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"params.id")," props from the current route and pass them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," component."),(0,o.kt)("p",null,"This means you can wrap all of your routes with a single ",(0,o.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," component, instead of wrapping each page individually."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"React Router"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Next.js"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Remix")," integration pages for more information.")),(0,o.kt)("h2",{id:"usecan-hook"},"useCan Hook"),(0,o.kt)(v,{id:"usecan-hook",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," hook can be used to check if the user has access to a resource or action."),(0,o.kt)("p",null,"It calls ",(0,o.kt)("strong",{parentName:"p"},"Access Control Provider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method and returns a value indicating whether the user has access to the resource or action."),(0,o.kt)("p",null,"Here's a basic example of how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="list-page.tsx"',title:'"list-page.tsx"'},'import { useCan } from "@refinedev/core";\n\nexport const ListPage = () => {\n  const { data } = useCan({\n    resource: "products",\n    action: "show",\n    params: { id: 1 },\n  });\n\n  return (\n    <>\n      <h1>Products</h1>\n      {data?.can && <Button>See Details</Button>}\n    </>\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},"To learn more about the ",(0,o.kt)("inlineCode",{parentName:"a"},"useCan")," hook, check out the reference page."))),(0,o.kt)("h2",{id:"handling-authorization"},"Handling Authorization"),(0,o.kt)(v,{id:"handling-authorization",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)(s,{mdxType:"AccessControlExample"})),(0,o.kt)("h2",{id:"ui-integrations"},"UI Integrations"),(0,o.kt)(v,{id:"ui-integrations",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"When Access Control Provider is provided, Refine's UI Integrations automatically manages the ",(0,o.kt)("strong",{parentName:"p"},"visibility")," of their components like ",(0,o.kt)("strong",{parentName:"p"},"buttons")," and ",(0,o.kt)("strong",{parentName:"p"},"menu items"),", simplifying the management of UI."),(0,o.kt)("p",null,"These UI Integrations uses the Access Control Provider to check if a user has the necessary permissions. This check is performed without requiring manual implementation for each component, streamlining the development process.")),(0,o.kt)("h3",{id:"sider"},"Sider"),(0,o.kt)(v,{id:"sider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"Sider component's ",(0,o.kt)("strong",{parentName:"p"},"menu items")," will ",(0,o.kt)("strong",{parentName:"p"},"automatically hidden")," if user don't have access."),(0,o.kt)("p",null,"Let's assume we have ",(0,o.kt)("strong",{parentName:"p"},"products")," resource."),(0,o.kt)("p",null,"Menu item of this resource will call ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method with following parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ resource: "products", action: "list" }\n')),(0,o.kt)("p",null,"And if user isn't allowed to ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," products, menu item will be hidden.")),(0,o.kt)("h3",{id:"buttons"},"Buttons"),(0,o.kt)(v,{id:"buttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.kt)("p",null,"If you are using one of our buttons from our UI Integrations in your application, you don't need to wrap it with ",(0,o.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," or use ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," every time. These buttons will automatically be shown or hidden."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=button-example.ts",title:"button-example.ts"},'// Following buttons call `can` method with commented parameters.\nimport {\n  CreateButton, //  { resource: "products", action: "create", params: { resource }}\n  ListButton, //    { resource: "products", action: "list" , params: { resource }}\n  EditButton, //    { resource: "products", action: "edit", params: { id: 1, resource } }\n  ShowButton, //    { resource: "products", action: "show", params: { id: 1, resource } }\n  DeleteButton, //  { resource: "products", action: "delete", params: { id: 1, resource } }\n  CloneButton, //   { resource: "products", action: "clone", params: { id: 1, resource } }\n} from "@refinedev/antd"; // or @refinedev/chakra-ui, @refinedev/mui, @refinedev/mantine\n'))))}x.isMDXComponent=!0}}]);