"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54783],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"strapi-v4",title:"Strapi-v4"},l=void 0,p={unversionedId:"advanced-tutorials/multi-tenancy/strapi-v4",id:"version-3.xx.xx/advanced-tutorials/multi-tenancy/strapi-v4",title:"Strapi-v4",description:"What is Multitenancy?",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/multi-tenancy/strapi.md",sourceDirName:"advanced-tutorials/multi-tenancy",slug:"/advanced-tutorials/multi-tenancy/strapi-v4",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-tenancy/strapi-v4",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/multi-tenancy/strapi.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716901039,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"strapi-v4",title:"Strapi-v4"},sidebar:"someSidebar",previous:{title:"Appwrite",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-tenancy/appwrite"},next:{title:"Mutation Mode",permalink:"/docs/3.xx.xx/advanced-tutorials/mutation-mode"}},c={},d=[{value:"What is Multitenancy?",id:"what-is-multitenancy",level:2},{value:"Introduction\u200b",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"AuthProvider",id:"authprovider",level:3},{value:"Create Collections",id:"create-collections",level:2},{value:"Store Context",id:"store-context",level:2},{value:"Shop Select to Sider Component",id:"shop-select-to-sider-component",level:2},{value:"Product List Page",id:"product-list-page",level:2},{value:"Product Create Page",id:"product-create-page",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},m=u("DocThumbsUpDownFeedbackWidget"),g=u("InstallPackagesCommand"),y=u("CodeSandboxExample"),h={toc:d},f="wrapper";function v(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"what-is-multitenancy"},"What is Multitenancy?"),(0,r.yg)(m,{id:"what-is-multitenancy",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Multitenancy refers to a kind of architecture where a single instance of software runs on a server and serves multiple customers. In a multi-tenant environment, separate customers tap into the same hardware and data storage, creating a dedicated instance for each customer. Each tenant\u2019s data is isolated and remains invisible to others, but is running on the same server.")),(0,r.yg)("h2",{id:"introduction"},"Introduction\u200b"),(0,r.yg)(m,{id:"introduction",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"In this guide, we will create an application with you in the logic of Multi Tenant(Multitenancy). We can say multi tenant application is separate and manage multiple contents independently from each other in a single application."),(0,r.yg)("p",null,"We will make a Cake House application using ",(0,r.yg)("strong",{parentName:"p"},"refine")," and ",(0,r.yg)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html"},"Strapi-v4"),". Our Cake House will consist of two separate stores and there will be special products for these stores. We will explain step by step how to manage these stores, products, and orders separately."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"This guide has been prepared to assume you know the basics of ",(0,r.yg)("strong",{parentName:"p"},"refine"),". If you haven't learned these basics yet, we recommend reading the ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorial"),"."))),(0,r.yg)("h2",{id:"setup"},"Setup"),(0,r.yg)(m,{id:"setup",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(g,{args:"@pankod/refine-strapi-v4",mdxType:"InstallPackagesCommand"}),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,r.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/refine-antd"},(0,r.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package."))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"authprovider"},"AuthProvider"),(0,r.yg)(m,{id:"authprovider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("details",null,(0,r.yg)("summary",null,"Show Code"),(0,r.yg)("p",null,(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@pankod/refine-core";\nimport { AuthHelper } from "@pankod/refine-strapi-v4";\nimport axios from "axios";\n\nexport const axiosInstance = axios.create();\n\nconst API_URL = "YOUR_API_URL";\nconst TOKEN_KEY = "strapi-jwt-token";\nconst strapiAuthHelper = AuthHelper(API_URL + "/api");\n\nexport const authProvider: AuthProvider = {\n    login: async ({ username, password }) => {\n        const { data, status } = await strapiAuthHelper.login(\n            username,\n            password,\n        );\n        if (status === 200) {\n            localStorage.setItem(TOKEN_KEY, data.jwt);\n\n            // set header axios instance\n            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;\n            return Promise.resolve();\n        }\n        return Promise.reject();\n    },\n    logout: () => {\n        localStorage.removeItem(TOKEN_KEY);\n        return Promise.resolve();\n    },\n    checkError: () => Promise.resolve(),\n    checkAuth: () => {\n        const token = localStorage.getItem(TOKEN_KEY);\n        if (token) {\n            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`,\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    getPermissions: () => Promise.resolve(),\n    getUserIdentity: async () => {\n        const token = localStorage.getItem(TOKEN_KEY);\n        if (!token) {\n            return Promise.reject();\n        }\n\n        const { data, status } = await strapiAuthHelper.me(token);\n        if (status === 200) {\n            const { id, username, email } = data;\n            return Promise.resolve({\n                id,\n                username,\n                email,\n            });\n        }\n\n        return Promise.reject();\n    },\n};\n'))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you need the population for the ",(0,r.yg)("inlineCode",{parentName:"p"},"/me")," request, you can use it like this in your ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const strapiAuthHelper = AuthHelper(API_URL + "/api");\n\nstrapiAuthHelper.me("token", {\n  metaData: {\n    populate: ["role"],\n  },\n});\n')))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport { DataProvider } from "@pankod/refine-strapi-v4";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\n// highlight-next-line\nimport { authProvider, axiosInstance } from "./authProvider";\n\nconst API_URL = "YOUR_API_URL";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      //highlight-start\n      authProvider={authProvider}\n      dataProvider={DataProvider(API_URL + "/api", axiosInstance)}\n      //highlight-end\n      routerProvider={routerProvider}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n    />\n  );\n};\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"You can find detailed usage information and the source code ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/examples/multi-tenancy-strapi"},"here"),"."))),(0,r.yg)("h2",{id:"create-collections"},"Create Collections"),(0,r.yg)(m,{id:"create-collections",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We created three collections on Strapi as store, product, and order and added a relation between them. For detailed information on how to create a collection, you can check ",(0,r.yg)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html"},"here"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Stores")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Title: Text"),(0,r.yg)("li",{parentName:"ul"},"Relation with Products"),(0,r.yg)("li",{parentName:"ul"},"Relation with Orders")),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/stores.png",alt:"stores"}),(0,r.yg)("br",null),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Products")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Title: Text"),(0,r.yg)("li",{parentName:"ul"},"Description: Text"),(0,r.yg)("li",{parentName:"ul"},"Image: Media"),(0,r.yg)("li",{parentName:"ul"},"Relation with Stores"),(0,r.yg)("li",{parentName:"ul"},"Relation with Orders")),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/products.png",alt:"products"}),(0,r.yg)("br",null),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Orders")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Status: Text"),(0,r.yg)("li",{parentName:"ul"},"Customer Name: Text"),(0,r.yg)("li",{parentName:"ul"},"Customer Address: Text"),(0,r.yg)("li",{parentName:"ul"},"Quantity: Number"),(0,r.yg)("li",{parentName:"ul"},"Relation with Stores"),(0,r.yg)("li",{parentName:"ul"},"Relation with Product")),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/orders.png",alt:"orders"}),(0,r.yg)("br",null),(0,r.yg)("p",null,"Now that we have completed the setup and our collections, we can now log in with the ",(0,r.yg)("strong",{parentName:"p"},"refine")," and start the listing processes.")),(0,r.yg)("h2",{id:"store-context"},"Store Context"),(0,r.yg)(m,{id:"store-context",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"To view the products and orders of two different stores separately, we need to filter by ",(0,r.yg)("inlineCode",{parentName:"p"},"storeId"),". We will use the ",(0,r.yg)("inlineCode",{parentName:"p"},"storeId")," information in more than one place. For example, when creating a store-specific order."),(0,r.yg)("p",null,"For this reason, we will create a ",(0,r.yg)("a",{parentName:"p",href:"https://en.reactjs.org/docs/context.html"},"React Context")," and keep the ",(0,r.yg)("inlineCode",{parentName:"p"},"storeId")," state information in it and send it to the relevant ",(0,r.yg)("strong",{parentName:"p"},"refine")," components."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/contexts/StoreContext.tsx"',title:'"src/contexts/StoreContext.tsx"'},'import { createContext, useState } from "react";\n\nexport const StoreContext = createContext<any[]>([]);\n\nexport const StoreProvider = (props: any) => {\n  const [store, setStore] = useState(1);\n\n  return <StoreContext.Provider value={[store, setStore]} {...props} />;\n};\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport { DataProvider } from "@pankod/refine-strapi-v4";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\n// highlight-next-line\nimport { StoreProvider } from "context/store";\nimport { authProvider, axiosInstance } from "./authProvider";\n\nconst API_URL = "YOUR_API_URL";\n\nconst App: React.FC = () => {\n  return (\n    //highlight-next-line\n    <StoreProvider>\n      <Refine\n        authProvider={authProvider}\n        dataProvider={DataProvider(API_URL + "/api", axiosInstance)}\n        routerProvider={routerProvider}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        notificationProvider={useNotificationProvider}\n        catchAll={<ErrorComponent />}\n      />\n      //highlight-next-line\n    </StoreProvider>\n  );\n};\n'))),(0,r.yg)("h2",{id:"shop-select-to-sider-component"},"Shop Select to Sider Component"),(0,r.yg)(m,{id:"shop-select-to-sider-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will create a select component in the Sider Menu where the user will select the stores. Let's create our select component first, then let's see how we can define it in the ",(0,r.yg)("strong",{parentName:"p"},"refine")," Sider."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="scr/components/select/StoreSelect.tsx"',title:'"scr/components/select/StoreSelect.tsx"'},'import { useContext } from "react";\nimport { Select, useSelect } from "@pankod/refine-antd";\n\nimport { StoreContext } from "context/store";\nimport { IStore } from "interfaces";\n\ntype SelectProps = {\n  onSelect: () => void;\n};\n\nexport const StoreSelect: React.FC<SelectProps> = ({ onSelect }) => {\n  const [store, setStore] = useContext(StoreContext);\n\n  const { selectProps: storeSelectProps } = useSelect<IStore>({\n    resource: "stores",\n    optionLabel: "title",\n    optionValue: "id",\n  });\n\n  const handleChange = (selectedValue: string) => {\n    setStore(selectedValue);\n  };\n\n  return (\n    <Select\n      defaultValue={store}\n      style={{ width: 130 }}\n      onChange={handleChange}\n      onSelect={onSelect}\n    >\n      {storeSelectProps.options?.map(({ value, label }) => (\n        <Select.Option key={value} value={value}>\n          {label}\n        </Select.Option>\n      ))}\n    </Select>\n  );\n};\n')),(0,r.yg)("p",null,"Here we have created a select component. Then we fetch the store id and title we created in the Strapi database with ",(0,r.yg)("inlineCode",{parentName:"p"},"useSelect"),". Now we can place the store information we have in the state we created in the Store Context."),(0,r.yg)("p",null,"Let's define the select component in the ",(0,r.yg)("strong",{parentName:"p"},"refine")," Sider Menu. First, we need to customize the default Sider."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/docs/examples/customization/customSider/"},"Check out how you can customize Sider Menu \u2192")),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Show Code"),(0,r.yg)("p",null,(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/sider/CustomSider.tsx"',title:'"src/components/sider/CustomSider.tsx"'},'import React, { useState } from "react";\nimport {\n  useTitle,\n  useMenu,\n  useLogout,\n  CanAccess,\n  ITreeMenu,\n  useRouterContext,\n} from "@pankod/refine-core";\nimport { AntdLayout, Menu, Grid, Icons } from "@pankod/refine-antd";\n\nimport { StoreSelect } from "components/select";\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nexport const CustomSider: React.FC = () => {\n  const [collapsed, setCollapsed] = useState<boolean>(false);\n  const { mutate: logout } = useLogout();\n  const { Link } = useRouterContext();\n  const Title = useTitle();\n  const { menuItems, selectedKey } = useMenu();\n  const breakpoint = Grid.useBreakpoint();\n\n  const isMobile =\n    typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n    return tree.map((item: ITreeMenu) => {\n      const { icon, label, route, name, children, parentName } = item;\n\n      if (children.length > 0) {\n        return (\n          <SubMenu\n            key={route}\n            icon={icon ?? <Icons.UnorderedListOutlined />}\n            title={label}\n          >\n            {renderTreeView(children, selectedKey)}\n          </SubMenu>\n        );\n      }\n      const isSelected = route === selectedKey;\n      const isRoute = !(parentName !== undefined && children.length === 0);\n      return (\n        <CanAccess key={route} resource={name.toLowerCase()} action="list">\n          <Menu.Item\n            key={route}\n            style={{\n              fontWeight: isSelected ? "bold" : "normal",\n            }}\n            icon={icon ?? (isRoute && <Icons.UnorderedListOutlined />)}\n          >\n            <Link to={route}>{label}</Link>\n            {!collapsed && isSelected && (\n              <div className="ant-menu-tree-arrow" />\n            )}\n          </Menu.Item>\n        </CanAccess>\n      );\n    });\n  };\n\n  return (\n    <AntdLayout.Sider\n      collapsible\n      collapsedWidth={isMobile ? 0 : 80}\n      collapsed={collapsed}\n      breakpoint="lg"\n      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n      style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n    >\n      {Title && <Title collapsed={collapsed} />}\n      <Menu\n        selectedKeys={[selectedKey]}\n        mode="inline"\n        onClick={() => {\n          if (!breakpoint.lg) {\n            setCollapsed(true);\n          }\n        }}\n      >\n        <Menu.Item key={route} icon={<Icons.AppstoreAddOutlined />}>\n          <StoreSelect\n            onSelect={() => {\n              setCollapsed(true);\n            }}\n          />\n        </Menu.Item>\n        {renderTreeView(menuItems, selectedKey)}\n        <Menu.Item\n          key="logout"\n          onClick={() => logout()}\n          icon={<Icons.LoginOutlined />}\n        >\n          Logout\n        </Menu.Item>\n      </Menu>\n    </AntdLayout.Sider>\n  );\n};\n')))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/sider.png",alt:"sider"})))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("em",{parentName:"td"},"As you can see, you can now choose the store you want and create products and orders specifically for the store we have chosen according to the ",(0,r.yg)("inlineCode",{parentName:"em"},"storeId")," information.")))))),(0,r.yg)("h2",{id:"product-list-page"},"Product List Page"),(0,r.yg)(m,{id:"product-list-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Now we can list the products of the selected store according to the ",(0,r.yg)("inlineCode",{parentName:"p"},"storeId")," information by filtering it. We can do this filtering by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"permanetFilter")," property within the ",(0,r.yg)("strong",{parentName:"p"},"refine"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"useSimpleList")," hook."),(0,r.yg)("p",null,"We separate the products of different stores by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"permanentFilter")," with the ",(0,r.yg)("inlineCode",{parentName:"p"},"storeId")," we get from the Store Context. So we can control more than single content in one application."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'//highlight-start\nconst [store] = useContext(StoreContext);\n//highlight-end\nconst { listProps } = useSimpleList<IProduct>({\n  //highlight-start\n  permanentFilter: [{ field: "stores][id]", operator: "eq", value: store }],\n  //highlight-end\n});\n')),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Show Code"),(0,r.yg)("p",null,(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/pages/ProductList.tsx",title:"src/pages/ProductList.tsx"},'import { useContext } from "react";\nimport { IResourceComponentsProps, HttpError } from "@pankod/refine-core";\nimport {\n  useSimpleList,\n  AntdList,\n  useModalForm,\n  useDrawerForm,\n  CreateButton,\n  List,\n} from "@pankod/refine-antd";\n\nimport { IProduct } from "interfaces";\n\nimport { ProductItem } from "components/product";\nimport { StoreContext } from "context/store";\n\nexport const ProductList: React.FC<IResourceComponentsProps> = () => {\n  //highlight-start\n  const [store] = useContext(StoreContext);\n  const { listProps } = useSimpleList<IProduct>({\n    permanentFilter: [{ field: "stores][id]", operator: "eq", value: store }],\n    metaData: { populate: ["image"] },\n  });\n  //highlight-end\n\n  return (\n    <List\n      headerProps={{\n        extra: <CreateButton onClick={() => createShow()} />,\n      }}\n    >\n      <AntdList\n        grid={{ gutter: 16, xs: 1 }}\n        style={{\n          justifyContent: "center",\n        }}\n        {...listProps}\n        renderItem={(item) => (\n          <AntdList.Item>\n            <ProductItem item={item} editShow={editShow} />\n          </AntdList.Item>\n        )}\n      />\n    </List>\n  );\n};\n')))),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/store-filter.gif",alt:"Store Filter"}),(0,r.yg)("br",null)),(0,r.yg)("h2",{id:"product-create-page"},"Product Create Page"),(0,r.yg)(m,{id:"product-create-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Now let's see how we can create store-specific products. Which store we choose in Sider, the product we will create will automatically be the product of the selected store."),(0,r.yg)("p",null,"By overriding the ",(0,r.yg)("inlineCode",{parentName:"p"},"onFinish")," method of the ",(0,r.yg)("inlineCode",{parentName:"p"},"form")," and sending the selected store information, we specify which store it will be the product of."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"//highlight-start\nconst [store, setStore] = useContext(StoreContext);\n//highlight-end\n\n<Form\n    {...formProps}\n    ...\n     //highlight-start\n    onFinish={(values) => {\n        return (\n            formProps.onFinish?.({\n                ...values,\n                stores: store,\n            })\n        );\n    }}\n    //highlight-end\n>\n")),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Show Code"),(0,r.yg)("p",null,(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CreateProduct"',title:'"CreateProduct"'},'import { useContext } from "react";\nimport { useApiUrl } from "@pankod/refine-core";\nimport {\n  Create,\n  Drawer,\n  DrawerProps,\n  Form,\n  FormProps,\n  Input,\n  ButtonProps,\n  Upload,\n  Grid,\n} from "@pankod/refine-antd";\n\nimport { StoreContext } from "context/store";\n\nimport {\n  useStrapiUpload,\n  mediaUploadMapper,\n  getValueProps,\n} from "@pankod/refine-strapi-v4";\n\nimport { TOKEN_KEY } from "../../constants";\n\ntype CreateProductProps = {\n  drawerProps: DrawerProps;\n  formProps: FormProps;\n  saveButtonProps: ButtonProps;\n};\n\nexport const CreateProduct: React.FC<CreateProductProps> = ({\n  drawerProps,\n  formProps,\n  saveButtonProps,\n}) => {\n  const API_URL = useApiUrl();\n  //highlight-start\n  const [store, setStore] = useContext(StoreContext);\n  //highlight-end\n\n  const breakpoint = Grid.useBreakpoint();\n\n  const { ...uploadProps } = useStrapiUpload({\n    maxCount: 1,\n  });\n\n  return (\n    <Drawer\n      {...drawerProps}\n      width={breakpoint.sm ? "500px" : "100%"}\n      bodyStyle={{ padding: 0 }}\n    >\n      <Create saveButtonProps={saveButtonProps}>\n        <Form\n          {...formProps}\n          layout="vertical"\n          initialValues={{\n            isActive: true,\n          }}\n          //highlight-start\n          onFinish={(values) => {\n            return formProps.onFinish?.({\n              ...mediaUploadMapper(values),\n              stores: store,\n            });\n          }}\n          //highlight-end\n        >\n          <Form.Item\n            label="Title"\n            name="title"\n            rules={[\n              {\n                required: true,\n              },\n            ]}\n          >\n            <Input />\n          </Form.Item>\n          <Form.Item label="Description" name="description">\n            <Input />\n          </Form.Item>\n          <Form.Item label="Image">\n            <Form.Item\n              name="image"\n              valuePropName="fileList"\n              getValueProps={(data) => getValueProps(data, API_URL)}\n              noStyle\n              rules={[\n                {\n                  required: true,\n                },\n              ]}\n            >\n              <Upload.Dragger\n                name="files"\n                action={`${API_URL}/upload`}\n                headers={{\n                  Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,\n                }}\n                listType="picture"\n                multiple\n                {...uploadProps}\n              >\n                <p className="ant-upload-text">\n                  Drag & drop a file in this area\n                </p>\n              </Upload.Dragger>\n            </Form.Item>\n          </Form.Item>\n        </Form>\n      </Create>\n    </Drawer>\n  );\n};\n')))),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/strapi/create.gif",alt:"Create Product"}),(0,r.yg)("br",null)),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)(m,{id:"conclusion",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"In this guide and our example app, we talked about how we can build Multitenancy apps with ",(0,r.yg)("strong",{parentName:"p"},"refine"),". Developing a Multitenancy application with ",(0,r.yg)("strong",{parentName:"p"},"refine")," is quite simple. By creating a context and with the hooks that ",(0,r.yg)("strong",{parentName:"p"},"refine")," provides, you can quickly and easily produce similar applications in this logic.")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("admonition",{title:"Demo Credentials",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Email: ",(0,r.yg)("inlineCode",{parentName:"p"},"demo@refine.dev")),(0,r.yg)("p",{parentName:"admonition"},"Password: ",(0,r.yg)("inlineCode",{parentName:"p"},"demodemo"))),(0,r.yg)(y,{path:"multi-tenancy-strapi",mdxType:"CodeSandboxExample"})))}v.isMDXComponent=!0}}]);