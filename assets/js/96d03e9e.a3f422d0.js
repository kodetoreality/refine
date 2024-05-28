"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81956],{58860:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var t=r(37953);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),m=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var m=2;m<o;m++)a[m]=r[m];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80095:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>R,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var t=r(37953),i=r(58860);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={title:"Inferencer"},m=void 0,u={unversionedId:"ui-integrations/material-ui/components/inferencer/index",id:"ui-integrations/material-ui/components/inferencer/index",title:"Inferencer",description:"You can automatically generate views for your resources using @refinedev/inferencer. Inferencer exports MuiListInferencer, MuiShowInferencer, MuiEditInferencer, MuiCreateInferencer components and finally the MuiInferencer component, which combines all in one place.",source:"@site/docs/ui-integrations/material-ui/components/inferencer/index.md",sourceDirName:"ui-integrations/material-ui/components/inferencer",slug:"/ui-integrations/material-ui/components/inferencer/",permalink:"/docs/ui-integrations/material-ui/components/inferencer/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/material-ui/components/inferencer/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716901039,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{title:"Inferencer"},sidebar:"mainSidebar",previous:{title:"<AutoSaveIndicator />",permalink:"/docs/ui-integrations/material-ui/components/auto-save-indicator/"},next:{title:"Create",permalink:"/docs/ui-integrations/material-ui/components/basic-views/create/"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"List",id:"list",level:3},{value:"Show",id:"show",level:3},{value:"Create",id:"create",level:3},{value:"Edit",id:"edit",level:3},{value:"Example",id:"example",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",n)},f=d("DocThumbsUpDownFeedbackWidget"),h=d("Tabs"),g=d("TabItem"),y=d("CodeSandboxExample"),v={toc:c},b="wrapper";function R(e){var{components:n}=e,r=s(e,["components"]);return(0,i.yg)(b,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},v,r),{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"You can automatically generate views for your resources using ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer"),". Inferencer exports ",(0,i.yg)("inlineCode",{parentName:"p"},"MuiListInferencer"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"MuiShowInferencer"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"MuiEditInferencer"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"MuiCreateInferencer")," components and finally the ",(0,i.yg)("inlineCode",{parentName:"p"},"MuiInferencer")," component, which combines all in one place."),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Inferencer components can be imported from ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer/mui"),". You can directly use the components in your routes without passing any props. If you use a ",(0,i.yg)("inlineCode",{parentName:"p"},"routerProvider"),", it will infer the ",(0,i.yg)("inlineCode",{parentName:"p"},"resource"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"action")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," from the current route."),(0,i.yg)(h,{defaultValue:"resources",values:[{label:(0,i.yg)(t.Fragment,null,"In",(0,i.yg)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,i.yg)(g,{value:"resources",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  ThemedLayoutV2,\n  RefineThemes,\n  RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles } from "@mui/material";\nimport { ThemeProvider } from "@mui/material/styles";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <ThemeProvider theme={RefineThemes.Blue}>\n        <CssBaseline />\n        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n        <RefineSnackbarProvider>\n          <Refine\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n              {\n                name: "samples",\n                list: "/samples",\n              },\n            ]}\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                {/* highlight-next-line */}\n                <Route path="/samples" element={<MuiInferencer />} />\n              </Route>\n            </Routes>\n          </Refine>\n        </RefineSnackbarProvider>\n      </ThemeProvider>\n    </BrowserRouter>\n  );\n};\n'))),(0,i.yg)(g,{value:"custom",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst SampleList = () => {\n  return (\n    // highlight-next-line\n    <MuiInferencer resource="samples" action="list" />\n  );\n};\n\nconst SampleShow = () => {\n  return (\n    // highlight-next-line\n    <MuiInferencer resource="samples" action="show" id="1" />\n  );\n};\n\nconst SampleCreate = () => {\n  return (\n    // highlight-next-line\n    <MuiInferencer resource="samples" action="create" />\n  );\n};\n\nconst SampleEdit = () => {\n  return (\n    // highlight-next-line\n    <MuiInferencer resource="samples" action="edit" id="1" />\n  );\n};\n')))),(0,i.yg)("p",null,"To learn more about ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package, please check out ",(0,i.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Docs"))),(0,i.yg)("h2",{id:"views"},"Views"),(0,i.yg)("h3",{id:"list"},"List"),(0,i.yg)(f,{id:"list",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Generates a sample list view for your resources according to the API response. It uses the ",(0,i.yg)("inlineCode",{parentName:"p"},"List")," component and ",(0,i.yg)("inlineCode",{parentName:"p"},"useDatagrid")," hook from ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/mui"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\n\nimport {\n  ThemedLayoutV2,\n  RefineThemes,\n  RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles } from "@mui/material";\nimport { ThemeProvider } from "@mui/material/styles";\n\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport dataProvider from "@refinedev/simple-rest";\n\n// highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ThemeProvider theme={RefineThemes.Blue}>\n        <CssBaseline />\n        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n        <RefineSnackbarProvider>\n          <Refine\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n              {\n                name: "samples",\n                list: "/samples",\n              },\n            ]}\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                {/* highlight-next-line */}\n                <Route path="/samples" element={<MuiInferencer />} />\n              </Route>\n            </Routes>\n          </Refine>\n        </RefineSnackbarProvider>\n      </ThemeProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,i.yg)("h3",{id:"show"},"Show"),(0,i.yg)(f,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,i.yg)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/mui")," with ",(0,i.yg)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/core"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\n\nimport {\n  ThemedLayoutV2,\n  RefineThemes,\n  RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles } from "@mui/material";\nimport { ThemeProvider } from "@mui/material/styles";\n\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport dataProvider from "@refinedev/simple-rest";\n\n// highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ThemeProvider theme={RefineThemes.Blue}>\n        <CssBaseline />\n        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n        <RefineSnackbarProvider>\n          <Refine\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n              {\n                name: "samples",\n                show: "/samples/show/:id",\n              },\n            ]}\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                {/* highlight-next-line */}\n                <Route path="/samples/show/:id" element={<MuiInferencer />} />\n              </Route>\n            </Routes>\n          </Refine>\n        </RefineSnackbarProvider>\n      </ThemeProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,i.yg)("h3",{id:"create"},"Create"),(0,i.yg)(f,{id:"create",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses the ",(0,i.yg)("inlineCode",{parentName:"p"},"Create")," component from ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/mui")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\n\nimport {\n  ThemedLayoutV2,\n  RefineThemes,\n  RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles } from "@mui/material";\nimport { ThemeProvider } from "@mui/material/styles";\n\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport dataProvider from "@refinedev/simple-rest";\n\n// highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ThemeProvider theme={RefineThemes.Blue}>\n        <CssBaseline />\n        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n        <RefineSnackbarProvider>\n          <Refine\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n              {\n                name: "samples",\n                create: "/samples/create",\n              },\n            ]}\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                {/* highlight-next-line */}\n                <Route path="/samples/create" element={<MuiInferencer />} />\n              </Route>\n            </Routes>\n          </Refine>\n        </RefineSnackbarProvider>\n      </ThemeProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,i.yg)("h3",{id:"edit"},"Edit"),(0,i.yg)(f,{id:"edit",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,i.yg)("inlineCode",{parentName:"p"},"Edit")," component from ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/mui")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\n\nimport {\n  ThemedLayoutV2,\n  RefineThemes,\n  RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles } from "@mui/material";\nimport { ThemeProvider } from "@mui/material/styles";\n\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport dataProvider from "@refinedev/simple-rest";\n\n// highlight-next-line\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ThemeProvider theme={RefineThemes.Blue}>\n        <CssBaseline />\n        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n        <RefineSnackbarProvider>\n          <Refine\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n              {\n                name: "samples",\n                edit: "/samples/edit/:id",\n              },\n            ]}\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                {/* highlight-next-line */}\n                <Route path="/samples/edit/:id" element={<MuiInferencer />} />\n              </Route>\n            </Routes>\n          </Refine>\n        </RefineSnackbarProvider>\n      </ThemeProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)(f,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,i.yg)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer/mui")," components."),(0,i.yg)(y,{path:"inferencer-material-ui",mdxType:"CodeSandboxExample"})))}R.isMDXComponent=!0}}]);