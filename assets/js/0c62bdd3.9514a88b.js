"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36817],{58860:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>h});var t=r(37953);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),d=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return r?t.createElement(h,i(i({ref:n},l),{},{components:r})):t.createElement(h,i({ref:n},l))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81367:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>c});r(37953);var t=r(58860);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"list",title:"List",swizzle:!0},p=void 0,d={unversionedId:"api-reference/chakra-ui/components/basic-views/list",id:"version-3.xx.xx/api-reference/chakra-ui/components/basic-views/list",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/basic-views/list.md",sourceDirName:"api-reference/chakra-ui/components/basic-views",slug:"/api-reference/chakra-ui/components/basic-views/list",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/list",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/basic-views/list.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716216871,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"list",title:"List",swizzle:!0},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/edit"},next:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/show"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),h=u("PropsTable"),g={toc:c},f="wrapper";function y(e){var{components:n}=e,r=i(e,["components"]);return(0,t.yg)(f,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},g,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <RefineChakra.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </RefineChakra.ChakraProvider>\n  );\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n}\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles."),(0,t.yg)("p",null,"We will show what ",(0,t.yg)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport {\n  List,\n  DateField,\n  TableContainer,\n  Table,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n} from "@pankod/refine-chakra-ui";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n      {\n        id: "status",\n        header: "Status",\n        accessorKey: "status",\n      },\n      {\n        id: "createdAt",\n        header: "Created At",\n        accessorKey: "createdAt",\n        cell: function render({ getValue }) {\n          return <DateField value={getValue() as string} format="LLL" />;\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    refineCore: { setCurrent, pageCount, current },\n  } = useTable({\n    columns,\n  });\n\n  return (\n    <List>\n      <TableContainer>\n        <Table variant="simple" whiteSpace="pre-line">\n          <Thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <Tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => {\n                  return (\n                    <Th key={header.id}>\n                      {!header.isPlaceholder &&\n                        flexRender(\n                          header.column.columnDef.header,\n                          header.getContext(),\n                        )}\n                    </Th>\n                  );\n                })}\n              </Tr>\n            ))}\n          </Thead>\n          <Tbody>\n            {getRowModel().rows.map((row) => {\n              return (\n                <Tr key={row.id}>\n                  {row.getVisibleCells().map((cell) => {\n                    return (\n                      <Td key={cell.id}>\n                        {flexRender(\n                          cell.column.columnDef.cell,\n                          cell.getContext(),\n                        )}\n                      </Td>\n                    );\n                  })}\n                </Tr>\n              );\n            })}\n          </Tbody>\n        </Table>\n      </TableContainer>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      notificationProvider={RefineChakra.notificationProvider()}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,t.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,t.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,t.yg)("strong",{parentName:"a"},"refine CLI")))),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"title"},(0,t.yg)("inlineCode",{parentName:"h3"},"title")),(0,t.yg)(m,{id:"title",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"It allows adding a title for the ",(0,t.yg)("inlineCode",{parentName:"p"},"<List>")," component. if you don't pass title props, it uses plural form of resource name by default."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List, Heading } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <List title={<Heading size="lg">Custom Title</Heading>}>\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"resource"},(0,t.yg)("inlineCode",{parentName:"h3"},"resource")),(0,t.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,t.yg)("inlineCode",{parentName:"p"},"<List>")," component in a custom page, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," prop."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/custom previewHeight=280px",live:!0,url:"http://localhost:3000/custom",previewHeight:"280px"},'setInitialRoutes(["/custom"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { List, Layout } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst CustomPage: React.FC = () => {\n  return (\n    /* highlight-next-line */\n    <List resource="categories">\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={{\n        ...routerProvider,\n        // highlight-start\n        routes: [\n          {\n            element: <CustomPage />,\n            path: "/custom",\n          },\n        ],\n        // highlight-end\n      }}\n      Layout={Layout}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"cancreate-and-createbuttonprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,t.yg)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,t.yg)(m,{id:"cancreate-and-createbuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,t.yg)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,t.yg)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,t.yg)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List } from "@pankod/refine-chakra-ui";\nimport { usePermissions } from "@pankod/refine-core";\n\nconst PostList: React.FC = () => {\n  const { data: permissionsData } = usePermissions();\n  return (\n    <List\n      /* highlight-start */\n      canCreate={permissionsData?.includes("admin")}\n      createButtonProps={{ colorScheme: "red", variant: "solid" }}\n      /* highlight-end */\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  const simpleRestDataProvider = dataProvider(\n    "https://api.fake-rest.refine.dev",\n  );\n\n  const customDataProvider = {\n    ...simpleRestDataProvider,\n    deleteOne: async ({ resource, id, variables }) => {\n      return {\n        data: {},\n      };\n    },\n  };\n\n  const authProvider = {\n    login: () => Promise.resolve(),\n    logout: () => Promise.resolve(),\n    checkAuth: () => Promise.resolve(),\n    checkError: () => Promise.resolve(),\n    getPermissions: () => Promise.resolve("admin"),\n    getUserIdentity: () => Promise.resolve(),\n  };\n\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={customDataProvider}\n      authProvider={authProvider}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"breadcrumb"},(0,t.yg)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,t.yg)(m,{id:"breadcrumb",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," package."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/breadcrumb"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List, Box } from "@pankod/refine-chakra-ui";\n\nconst CustomBreadcrumb: React.FC = () => {\n  return (\n    <Box borderColor="blue" borderStyle="dashed" borderWidth="2px" p="2">\n      My Custom Breadcrumb\n    </Box>\n  );\n};\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      breadcrumb={<CustomBreadcrumb />}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"wrapperprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,t.yg)(m,{id:"wrapperprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you want to customize the wrapper of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"wrapperProps")," property. For ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," wrapper element is ",(0,t.yg)("inlineCode",{parentName:"p"},"<Box>"),"s and ",(0,t.yg)("inlineCode",{parentName:"p"},"wrapperProps")," can get every attribute that ",(0,t.yg)("inlineCode",{parentName:"p"},"<Box>")," can get."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      wrapperProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n        p: "2",\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"headerprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"headerProps")),(0,t.yg)(m,{id:"headerprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you want to customize the header of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n        p: "2",\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"contentprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"contentProps")),(0,t.yg)(m,{id:"contentprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you want to customize the content of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      contentProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n        padding: 2,\n      }}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"headerbuttons"},(0,t.yg)("inlineCode",{parentName:"h3"},"headerButtons")),(0,t.yg)(m,{id:"headerbuttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"You can customize the buttons at the header by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,t.yg)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,t.yg)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List, Button } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerButtons={({ defaultButtons }) => (\n        <>\n          {defaultButtons}\n          <Button colorScheme="red" variant="solid">\n            Custom Button\n          </Button>\n        </>\n      )}\n      // highlight-end\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h3",{id:"headerbuttonprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,t.yg)(m,{id:"headerbuttonprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,t.yg)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List, Button } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n  return (\n    <List\n      // highlight-start\n      headerButtonProps={{\n        borderColor: "blue",\n        borderStyle: "dashed",\n        borderWidth: "2px",\n        p: "2",\n      }}\n      // highlight-end\n      headerButtons={\n        <Button colorScheme="red" variant="solid">\n          Custom Button\n        </Button>\n      }\n    >\n      <p>Rest of your page here</p>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"props"},"Props"),(0,t.yg)(m,{id:"props",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)(h,{module:"@pankod/refine-chakra-ui/List","title-default":"`<Title order={3}>{resource.name}</Title>`",mdxType:"PropsTable"})))}y.isMDXComponent=!0}}]);