"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84335],{58860:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(37953);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?t.createElement(f,a(a({ref:n},p),{},{components:r})):t.createElement(f,a({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78867:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>w,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var t=r(37953),o=r(58860);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Inferencer"},d=void 0,p={unversionedId:"ui-integrations/ant-design/components/inferencer/index",id:"ui-integrations/ant-design/components/inferencer/index",title:"Inferencer",description:"You can automatically generate views for your resources using @refinedev/inferencer. Inferencer exports the AntdListInferencer, AntdShowInferencer, AntdEditInferencer, AntdCreateInferencer components and finally the AntdInferencer component, which combines all in one place.",source:"@site/docs/ui-integrations/ant-design/components/inferencer/index.md",sourceDirName:"ui-integrations/ant-design/components/inferencer",slug:"/ui-integrations/ant-design/components/inferencer/",permalink:"/docs/ui-integrations/ant-design/components/inferencer/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/inferencer/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716216871,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{title:"Inferencer"},sidebar:"mainSidebar",previous:{title:"<AutoSaveIndicator />",permalink:"/docs/ui-integrations/ant-design/components/auto-save-indicator/"},next:{title:"Create",permalink:"/docs/ui-integrations/ant-design/components/basic-views/create/"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"List",id:"list",level:3},{value:"Show",id:"show",level:3},{value:"Create",id:"create",level:3},{value:"Edit",id:"edit",level:3},{value:"Example",id:"example",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",n)},f=m("DocThumbsUpDownFeedbackWidget"),g=m("Tabs"),h=m("TabItem"),v=m("CodeSandboxExample"),y={toc:u},b="wrapper";function w(e){var{components:n}=e,r=s(e,["components"]);return(0,o.yg)(b,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){i(e,n,r[n])}))}return e}({},y,r),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"You can automatically generate views for your resources using ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer"),". Inferencer exports the ",(0,o.yg)("inlineCode",{parentName:"p"},"AntdListInferencer"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"AntdShowInferencer"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"AntdEditInferencer"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"AntdCreateInferencer")," components and finally the ",(0,o.yg)("inlineCode",{parentName:"p"},"AntdInferencer")," component, which combines all in one place."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Inferencer components can be imported from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer/antd"),". You can directly use the components in your routes without passing any props. If you use a ",(0,o.yg)("inlineCode",{parentName:"p"},"routerProvider"),", it will infer the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"action")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," from the current route."),(0,o.yg)(g,{defaultValue:"resources",values:[{label:(0,o.yg)(t.Fragment,null,"In",(0,o.yg)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,o.yg)(h,{value:"resources",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter } from "react-router-dom";\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        routerProvider={routerProvider}\n        resources={[\n          {\n            name: "samples",\n            list: "/samples",\n          },\n        ]}\n      >\n        <Routes>\n          {/* highlight-next-line */}\n          <Route path="/samples" element={<AntdInferencer />} />\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n'))),(0,o.yg)(h,{value:"custom",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst SampleList = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="list" />\n  );\n};\n\nconst SampleShow = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="show" id="1" />\n  );\n};\n\nconst SampleCreate = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="create" />\n  );\n};\n\nconst SampleEdit = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="edit" id="1" />\n  );\n};\n')))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Inferencer documentation")))),(0,o.yg)("h2",{id:"views"},"Views"),(0,o.yg)("h3",{id:"list"},"List"),(0,o.yg)(f,{id:"list",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Generates a sample list view for your resources according to the API response. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"List")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Table")," components with the ",(0,o.yg)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/antd"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              list: "/samples",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples" element={<AntdInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.yg)("h3",{id:"show"},"Show"),(0,o.yg)(f,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Generates a sample show view for your resources according to the API response. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/antd")," with the ",(0,o.yg)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/core"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { RefineThemes, ThemedLayoutV2 } from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              show: "/samples/show/:id",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples/show/:id" element={<AntdInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.yg)("h3",{id:"create"},"Create"),(0,o.yg)(f,{id:"create",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"Create")," component and the ",(0,o.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/antd"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              create: "/samples/create",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples/create" element={<AntdInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.yg)("h3",{id:"edit"},"Edit"),(0,o.yg)(f,{id:"edit",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Generates a sample edit view for your resources according to the API response. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"Edit")," component and the ",(0,o.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/antd"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              edit: "/samples/edit/:id",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples/edit/:id" element={<AntdInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)(f,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup Refine app with the ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer/antd")," components."),(0,o.yg)(v,{path:"inferencer-antd",mdxType:"CodeSandboxExample"})))}w.isMDXComponent=!0}}]);