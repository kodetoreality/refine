"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52072],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},75326:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of Refine series will be structured.",slug:"refine-pixels-1",authors:"abdullah_numan",tags:["refine-week","Refine","supabase","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/refine-pixels-1",source:"@site/blog/2023-02-14-refine-pixels-1.md",title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of Refine series will be structured.",date:"2023-02-14T00:00:00.000Z",formattedDate:"February 14, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"Refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:10.66,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of Refine series will be structured.",slug:"refine-pixels-1",authors:"abdullah_numan",tags:["refine-week","Refine","supabase","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/social.png",hide_table_of_contents:!1},prevItem:{title:"Setting Up the Client App",permalink:"/blog/refine-pixels-2"},nextItem:{title:"Comparing the best headless CMS solutions",permalink:"/blog/best-headless-cms"},relatedPosts:[{title:"Dynamic Forms with React Hook Form",description:"How to build dynamic forms with React hook form in React CRUD apps.",permalink:"/blog/dynamic-forms-in-react-hook-form",formattedDate:"December 23, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.955,date:"2022-12-23T00:00:00.000Z"},{title:"Creating an Admin Dashboard with Refine",description:"We'll be building a admin backend app for the Pixels client app.",permalink:"/blog/refine-pixels-5",formattedDate:"February 18, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:18.76,date:"2023-02-18T00:00:00.000Z"},{title:"Building React admin panel with NextUI and Refine",description:"We will see how  to build a React admin panel using Refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.85,date:"2023-09-20T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Array Splice",description:"This post is about various uses of the splice() method in JavaScript.",permalink:"/blog/javascript-splice-method",formattedDate:"October 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.03,date:"2023-10-20T00:00:00.000Z"},{title:"Creating an Admin Dashboard with Refine",description:"We'll be building a admin backend app for the Pixels client app.",permalink:"/blog/refine-pixels-5",formattedDate:"February 18, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:18.76,date:"2023-02-18T00:00:00.000Z"},{title:"A Definitive guide on JavaScript every Method",description:"We expound with examples what the JavaScript every method is, how it works and when to use it.",permalink:"/blog/javascript-every-method",formattedDate:"February 7, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.06,date:"2024-02-07T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},u=[{value:"RefineWeek series",id:"refineweek-series",level:3},{value:"Pixels Client",id:"pixels-client",level:3},{value:"Pixels Admin",id:"pixels-admin",level:3},{value:"What is <strong>Refine</strong> ?",id:"what-is-refine-",level:2},{value:"Refine Architecture",id:"refine-architecture",level:2},{value:"Providers and Hooks",id:"providers-and-hooks",level:2},{value:"Support Packages",id:"support-packages",level:2},{value:"What is Supabase?",id:"what-is-supabase",level:2},{value:"A week of Refine ft. Supabase",id:"a-week-of-refine-ft-supabase",level:2},{value:"Day One - On RefineWeek",id:"day-one---on-refineweek",level:3},{value:"Day Two - Setting Up the Client App",id:"day-two---setting-up-the-client-app",level:3},{value:"Day Three - Adding CRUD Actions &amp; Authentication",id:"day-three---adding-crud-actions--authentication",level:3},{value:"Day Four - Adding Realtime Collaboration",id:"day-four---adding-realtime-collaboration",level:3},{value:"Day Five - Initialize and Build Pixels Admin App",id:"day-five---initialize-and-build-pixels-admin-app",level:3},{value:"Day Six - Add Role Based Authorization",id:"day-six---add-role-based-authorization",level:3},{value:"Day Seven - Add Audit Log to Client App and Admin App",id:"day-seven---add-audit-log-to-client-app-and-admin-app",level:3},{value:"Summary",id:"summary",level:2}],c={toc:u};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/refine_supabase.png",alt:"refine banner"}),(0,n.kt)("h3",{id:"refineweek-series"},"RefineWeek series"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Day 1 - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-1/"},"Pilot & Refine architecture")),(0,n.kt)("li",{parentName:"ul"},"Day 2 - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-2/"},"Setting Up the Client App")),(0,n.kt)("li",{parentName:"ul"},"Day 3 - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-3/"},"Adding CRUD Actions and Authentication")),(0,n.kt)("li",{parentName:"ul"},"Day 4 - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-4/"},"Adding Realtime Collaboration")),(0,n.kt)("li",{parentName:"ul"},"Day 5 - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-5/"},"Creating an Admin Dashboard with Refine")),(0,n.kt)("li",{parentName:"ul"},"Day 6 - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-6/"},"Implementing Role Based Access Control")),(0,n.kt)("li",{parentName:"ul"},"Day 7 - ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-7/"},"Audit Log With Refine"))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"This post provides an introduction to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,n.kt)("strong",{parentName:"a"},"Refine")),", a React framework used to rapidly build data heavy CRUD apps like dashboards, admin panels and e-commerce storefronts."),(0,n.kt)("p",null,"It also presents the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-supabase/"},"RefineWeek")," series - which is a seven part quickfire guide that aims to help developers learn the ins-and-outs of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,n.kt)("strong",{parentName:"a"},"Refine"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/"},(0,n.kt)("strong",{parentName:"a"},"Supabase"))," powerful capabilities and get going with ",(0,n.kt)("strong",{parentName:"p"},"Refine")," within a week."),(0,n.kt)("p",null,"At the end of this series, you'll be able to build a fully functional CRUD app named \"",(0,n.kt)("strong",{parentName:"p"},"Pixels"),'" with ',(0,n.kt)("strong",{parentName:"p"},"Refine")," and ",(0,n.kt)("strong",{parentName:"p"},"Supabase"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pixels.refine.dev/"},"The live version of the app is be available here.")),(0,n.kt)("p",null,"The final apps source codes are available on GitHub:"),(0,n.kt)("h3",{id:"pixels-client"},"Pixels Client"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/pixels"},"Source Code on GitHub")),(0,n.kt)("p",null,"To get completed client source code simply run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," npm create refine-app@latest -- --example pixels\n")),(0,n.kt)("h3",{id:"pixels-admin"},"Pixels Admin"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/pixels-admin"},"Source Code on GitHub")),(0,n.kt)("p",null,"To get completed admin source code simply run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," npm create refine-app@latest -- --example pixels-admin\n")),(0,n.kt)("h2",{id:"what-is-refine-"},"What is ",(0,n.kt)("strong",{parentName:"h2"},"Refine")," ?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Refine")," is a highly customizable ",(0,n.kt)("strong",{parentName:"p"},"React"),' based framework for building CRUD apps that comes with a headless core package and supplementary "pick-and-plug" modules for the UI, backend API clients and Internationalization support.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Refine"),"'s (intentionally decapitalized) core is strongly opinionated about RESTful conventions, HTTPS networking, state management, authentication and authorization. It is, however, unopinionated about the UI and render logic. This makes it customizable according to one's choice of UI library and frameworks."),(0,n.kt)("p",null,"In a nutshell, you can build rock-solid CRUD apps easily using Refine\u2728."),(0,n.kt)("h2",{id:"refine-architecture"},"Refine Architecture"),(0,n.kt)("p",null,"Everything in ",(0,n.kt)("strong",{parentName:"p"},"Refine")," is centered around the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/components/refine-config/"},(0,n.kt)("inlineCode",{parentName:"a"},"<Refine />"))," component, which is configured via a set of provider props that each requires a provider object to be passed in. A typical application of providers on the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," component looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/react-router-v6";\nimport { liveProvider } from "@refinedev/supabase";\nimport authProvider from "./authProvider";\n\n<Refine\n    dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n    routerProvider={routerProvider}\n    liveProvider={liveProvider(supabaseClient)}\n    authProvider={authProvider}\n    resources={[]}\n    ...\n/>;\n')),(0,n.kt)("p",null,"The above snippet lists a few of the props and their objects."),(0,n.kt)("p",null,"However, rather than precisely being a component, ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," is largely a monolith of provider configurations backed by a context for each. Hence, inside ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/data-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider")),", we have a standard set of methods for making API requests; inside ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/auth-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider")),", we have methods for dealing with authentication and authorization; inside ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/router-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"routerProvider")),", we have ",(0,n.kt)("em",{parentName:"p"},"exact")," definitions of routes and the components to render for that route, etc. And each provider comes with its own set of conventions and type definitions."),(0,n.kt)("p",null,"For example, a ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," object has the following signature to which any definition of a data provider conform:"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show data provider code"),(0,n.kt)("p",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="dataProvider.ts"',title:'"dataProvider.ts"'},'const dataProvider = {\n  create: ({ resource, variables, metaData }) => Promise,\n  createMany: ({ resource, variables, metaData }) => Promise,\n  deleteOne: ({ resource, id, variables, metaData }) => Promise,\n  deleteMany: ({ resource, ids, variables, metaData }) => Promise,\n  //highlight-start\n  getList: ({ resource, pagination, pagination, sort, filters, meta }) => Promise,\n  //highlight-end\n  getMany: ({ resource, ids, metaData }) => Promise,\n  getOne: ({ resource, id, metaData }) => Promise,\n  update: ({ resource, id, variables, metaData }) => Promise,\n  updateMany: ({ resource, ids, variables, metaData }) => Promise,\n  custom: ({ url, method, sort, filters, payload, query, headers, metaData }) => Promise,\n  getApiUrl: () => "",\n};\n')))),(0,n.kt)("p",null,"The underlying architecture involves any presentational component passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," to be able to consume these configured methods via corresponding hooks. Each method in a provider has a corresponding hook via which a consumer component is able to fetch data from the backend, i.e. the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useList/"},(0,n.kt)("inlineCode",{parentName:"a"},"useList()"))," hook is the corresponding function accessing the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider.getList()")," provider method."),(0,n.kt)("p",null,"An example hook usage looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Inside a UI component"',title:'"Inside',a:!0,UI:!0,'component"':!0},'const { data } = useList<Canvas>({\n  resource: "canvases",\n  pagination: {\n    mode: "off",\n  },\n  sorters: {\n    initial: [\n      {\n        field: "created_at",\n        order: "desc",\n      },\n    ],\n  },\n});\n')),(0,n.kt)("p",null,"The hooks, in turn, leverage ",(0,n.kt)("a",{parentName:"p",href:"https://react-query-v3.tanstack.com/"},(0,n.kt)("strong",{parentName:"a"},"React Query"))," hooks in order to make API calls asked by the provider methods. Here's an early sneak peek into the action under the hood:"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show Refine `useList` hook code"),(0,n.kt)("p",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const queryResponse = useQuery<GetListResponse<TData>, TError>(\n  queryKey.list(config),\n  ({ queryKey, pagination, signal }) => {\n    const { pagination, meta, ...restConfig } = config || {};\n    return getList<TData>({\n      resource,\n      ...restConfig,\n      pagination,\n      meta: {\n        ...meta,\n        queryContext: {\n          queryKey,\n          pageParam,\n          signal,\n        },\n      },\n    });\n  },\n  {\n    ...queryOptions,\n    onSuccess: (data) => {\n      queryOptions?.onSuccess?.(data);\n\n      const notificationConfig =\n        typeof successNotification === "function"\n          ? successNotification(data, { metaData, config }, resource)\n          : successNotification;\n\n      handleNotification(notificationConfig);\n    },\n    onError: (err: TError) => {\n      checkError(err);\n      queryOptions?.onError?.(err);\n\n      const notificationConfig =\n        typeof errorNotification === "function"\n          ? errorNotification(err, { metaData, config }, resource)\n          : errorNotification;\n\n      handleNotification(notificationConfig, {\n        key: `${resource}-useList-notification`,\n        message: translate(\n          "common:notifications.error",\n          { statusCode: err.statusCode },\n          `Error (status code: ${err.statusCode})`,\n        ),\n        description: err.message,\n        type: "error",\n      });\n    },\n  },\n);\n')))),(0,n.kt)("p",null,"We'll be visiting code like this often, but if you examine closely you can see that ",(0,n.kt)("strong",{parentName:"p"},"Refine")," uses ",(0,n.kt)("strong",{parentName:"p"},"React Query")," to handle caching, state management as well as errors out-of-the-box."),(0,n.kt)("p",null,"The following diagram illustrates the interactions:"),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/refine-flow.png",alt:"refine banner"}),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"providers-and-hooks"},"Providers and Hooks"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Refine"),"'s power lies in the abstraction of various app component logic such as authentication, authorization, routing and data fetching - inside individual providers and their corresponding hooks."),(0,n.kt)("p",null,"Common providers include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/auth-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," - for authentication and authorization."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/data-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," - for CRUD operations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/router-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"routerProvider"))," - for defining routes, RESTful and non-RESTful."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider"))," - for implementing real time features."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/accessControl-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," - for access control management."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/audit-log-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"auditLogProvider"))," - for logging appwide activities.")),(0,n.kt)("p",null,"For an exhaustive list of providers, please visit the ",(0,n.kt)("strong",{parentName:"p"},"Refine")," providers documentation from ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/"},"here"),"."),(0,n.kt)("p",null,"Each method in these providers comes with its corresponding hook to be used from inside UI components and pages. For more details, please refer to the ",(0,n.kt)("strong",{parentName:"p"},"Refine")," hooks documentation starting ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/accessControl/useCan/"},"here"),"."),(0,n.kt)("h2",{id:"support-packages"},"Support Packages"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Refine")," is inherently headless in its core API and deliberately agnostic about the UI and backend layers. Being so, it is able to provide fantastic support for major UI libraries and frameworks as well as popular backend frameworks and services. To name a few, ",(0,n.kt)("strong",{parentName:"p"},"Refine"),"'s UI support packages include ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/"},(0,n.kt)("strong",{parentName:"a"},"Ant Design")),", ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mui/"},(0,n.kt)("strong",{parentName:"a"},"Material UI")),", ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/chakra-ui/"},(0,n.kt)("strong",{parentName:"a"},"Chakra UI"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mantine/"},(0,n.kt)("strong",{parentName:"a"},"Mantine")),". Backend supplementary modules include ",(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/"},(0,n.kt)("strong",{parentName:"a"},"Supabase")),", ",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/"},(0,n.kt)("strong",{parentName:"a"},"GraphQL")),", and ",(0,n.kt)("a",{parentName:"p",href:"https://nestjs.com/"},(0,n.kt)("strong",{parentName:"a"},"NestJS"))),(0,n.kt)("p",null,"For a complete list of all these modules, check out ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/list-of-packages/"},"this page"),"."),(0,n.kt)("h2",{id:"what-is-supabase"},"What is Supabase?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/"},(0,n.kt)("strong",{parentName:"a"},"Supabase"))," is an open source alternative to Firebase. It is a hosted backend that provides a realtime database, authentication, storage, and API services."),(0,n.kt)("p",null,"Refine has a built-in data provider support for Supabase. You can find the advanced tutorial ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/data-providers/supabase/"},"here"),"."),(0,n.kt)("p",null,"We'll be using ",(0,n.kt)("strong",{parentName:"p"},"Supabase")," to build our backend for ",(0,n.kt)("strong",{parentName:"p"},"Pixels")," app."),(0,n.kt)("h2",{id:"a-week-of-refine-ft-supabase"},"A week of Refine ft. Supabase"),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/pixel-logo-background.png",alt:"refine banner"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"In this tutorial series, we will be going through most of the core features of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,n.kt)("strong",{parentName:"a"},"Refine"))," by building two apps related to drawing pixels on a canvas. This section is intended to provide an overview."),(0,n.kt)("p",null,"The first one, the client app - ",(0,n.kt)("strong",{parentName:"p"},"Pixels"),', allows a logged in user to create a canvas and draw on it together with other users. It also displays a public gallery of all canvases and a "Featured Canvases" page.'),(0,n.kt)("p",null,"The second app, ",(0,n.kt)("strong",{parentName:"p"},"Pixels Admin")," is an admin dashboard that allows authorized users like ",(0,n.kt)("inlineCode",{parentName:"p"},"editor"),"s and ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),"s to view the list of users registered with ",(0,n.kt)("strong",{parentName:"p"},"Pixels")," app and manage user drawn canvases, with actions like promoting, unpromoting and deleting a canvas."),(0,n.kt)("p",null,"We will be building these two apps day-by-day over a period of 7 days. And while doing so, we will dive deep into the details of related providers, hooks, UI components and how ",(0,n.kt)("strong",{parentName:"p"},"Refine")," works behind the scenes."),(0,n.kt)("p",null,"As far as our features and functionalities go, we will cover most of the providers and some of the related hooks. For the UI side, we will be using the optional ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/"},(0,n.kt)("strong",{parentName:"a"},"Ant Design"))," package supported by ",(0,n.kt)("strong",{parentName:"p"},"Refine"),". For the backend, we will use a PostgreSQL database hosted on the ",(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/"},(0,n.kt)("strong",{parentName:"a"},"Supabase"))," cloud."),(0,n.kt)("br",null),(0,n.kt)("p",null,"Here are the detailed outlines split per day:"),(0,n.kt)("h3",{id:"day-one---on-refineweek"},"Day One - On RefineWeek"),(0,n.kt)("p",null,"This post. Hello! \ud83d\udc4b \ud83d\udc4b ",(0,n.kt)("strong",{parentName:"p"},"Refine")," welcomes you! We are here \ud83d\ude04 \ud83d\ude04"),(0,n.kt)("h3",{id:"day-two---setting-up-the-client-app"},"Day Two - Setting Up the Client App"),(0,n.kt)("p",null,"We start with setting up the ",(0,n.kt)("strong",{parentName:"p"},"Pixels")," client app using ",(0,n.kt)("inlineCode",{parentName:"p"},"create refine-app"),". We choose ",(0,n.kt)("strong",{parentName:"p"},"Refine"),"'s optional ",(0,n.kt)("strong",{parentName:"p"},"Ant Design")," and ",(0,n.kt)("strong",{parentName:"p"},"Supabase")," modules as our support packages. After initialization, we explore the boilerplate code created by ",(0,n.kt)("inlineCode",{parentName:"p"},"create refine-app")," and look into the details of the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," objects and briefly discuss their mechanisms."),(0,n.kt)("h3",{id:"day-three---adding-crud-actions--authentication"},"Day Three - Adding CRUD Actions & Authentication"),(0,n.kt)("p",null,"On Day Three, we start adding features to our app. We activate the ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," prop for ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," and using the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," prop, we implement how to create a canvas, show a canvas and draw pixels on a canvas. We add a public gallery to show all canvases in a page and featured canvases in another. We also implement user authentication so that only signed in users can create and draw on a canvas - and while doing so we delve into the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," object."),(0,n.kt)("p",null,"Here is a quick sum up of specifications we cover on Day Three:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"Pixels")," app has a public gallery."),(0,n.kt)("li",{parentName:"ol"},"The public gallery has a home page of featured canvases."),(0,n.kt)("li",{parentName:"ol"},"The public gallery contains a section for all the canvases."),(0,n.kt)("li",{parentName:"ol"},"All users can view the public gallery."),(0,n.kt)("li",{parentName:"ol"},"All users can view a canvas."),(0,n.kt)("li",{parentName:"ol"},"Only logged in users can create a canvas."),(0,n.kt)("li",{parentName:"ol"},"Only logged in users can draw pixels on a canvas."),(0,n.kt)("li",{parentName:"ol"},"A user can sign up to the app using email, Google and GitHub."),(0,n.kt)("li",{parentName:"ol"},"A user can log in to the app using email, Google and GitHub.")),(0,n.kt)("h3",{id:"day-four---adding-realtime-collaboration"},"Day Four - Adding Realtime Collaboration"),(0,n.kt)("p",null,"On Day Four, we add ",(0,n.kt)("strong",{parentName:"p"},"real time")," features to our app using the ",(0,n.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop on ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />"),". Real time updates on a canvas will facilitate multiple users to collaborate on it at the same time."),(0,n.kt)("p",null,"We are going to use ",(0,n.kt)("strong",{parentName:"p"},"Supabase"),"'s ",(0,n.kt)("strong",{parentName:"p"},"Realtime")," ",(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime/postgres-cdc"},"PostgreSQL CDC")," in order to perform row level updates on the PostgreSQL database in real time."),(0,n.kt)("h3",{id:"day-five---initialize-and-build-pixels-admin-app"},"Day Five - Initialize and Build Pixels Admin App"),(0,n.kt)("p",null,"Basing on the learning from the client app, we quickly implement an admin dashboard app and explore how ",(0,n.kt)("strong",{parentName:"p"},"Refine"),"'s ",(0,n.kt)("strong",{parentName:"p"},"Ant Design")," support module is geared to rapidly build CRUD pages for a ",(0,n.kt)("strong",{parentName:"p"},"Refine")," app."),(0,n.kt)("p",null,"Here are the requirements for ",(0,n.kt)("strong",{parentName:"p"},"Pixels Admin"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Allow a user to sign up to the app using email, Google and GitHub."),(0,n.kt)("li",{parentName:"ol"},"Allow a user to log in to the app using email, Google and GitHub."),(0,n.kt)("li",{parentName:"ol"},"Build a dashboard that lists ",(0,n.kt)("inlineCode",{parentName:"li"},"users")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"canvases"),"."),(0,n.kt)("li",{parentName:"ol"},"The dashboard shows a list of all users at ",(0,n.kt)("inlineCode",{parentName:"li"},"/users")," endpoint."),(0,n.kt)("li",{parentName:"ol"},"The dashboard shows a list of all canvases at ",(0,n.kt)("inlineCode",{parentName:"li"},"/canvases")," endpoint.")),(0,n.kt)("h3",{id:"day-six---add-role-based-authorization"},"Day Six - Add Role Based Authorization"),(0,n.kt)("p",null,"On Day Six, we implement user role based authorization to our admin app. While doing so, we analyze the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider.getPermissions()")," method from the standpoint of implementing authorization and customize according to our needs. We use ",(0,n.kt)("strong",{parentName:"p"},"Casbin")," for implementing a Role Based Access Control model and use it to define the ",(0,n.kt)("inlineCode",{parentName:"p"},"can")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," provider."),(0,n.kt)("p",null,"Here are the features we implement on Day Six:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"There are two authorized roles for admin dashboard: ",(0,n.kt)("inlineCode",{parentName:"li"},"editor")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"admin"),"."),(0,n.kt)("li",{parentName:"ol"},'An editor is able to promote a canvas to "featured" status and demote it back.'),(0,n.kt)("li",{parentName:"ol"},'An admin is able to promote a canvas to "featured" status and demote it back.'),(0,n.kt)("li",{parentName:"ol"},"An admin is able to delete a canvas.")),(0,n.kt)("h3",{id:"day-seven---add-audit-log-to-client-app-and-admin-app"},"Day Seven - Add Audit Log to Client App and Admin App"),(0,n.kt)("p",null,"On the last day, with the ",(0,n.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," prop, we implement a log of all pixel drawing activities.Mutations for drawing pixels will be logged and saved in a ",(0,n.kt)("inlineCode",{parentName:"p"},"logs")," table in our ",(0,n.kt)("strong",{parentName:"p"},"Supabase")," database."),(0,n.kt)("p",null,"We will display these logs inside a modal for each canvas both in the client ",(0,n.kt)("strong",{parentName:"p"},"Pixels")," app and in the ",(0,n.kt)("strong",{parentName:"p"},"Pixels Admin")," dashboard app. So, we will implement audit logging on both our apps."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"In this post, we introduced the ",(0,n.kt)("strong",{parentName:"p"},"Refine")," framework and the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/week-of-refine/"},"RefineWeek")," series itself. We talked about ",(0,n.kt)("strong",{parentName:"p"},"Refine"),"'s underlying architecture which consists of providers, hooks and components that help rapidly build internal tools."),(0,n.kt)("p",null,"We laid out the plans for building a ",(0,n.kt)("strong",{parentName:"p"},"Pixels")," client app and an admin dashboard app in considerable depth."),(0,n.kt)("p",null,"Tomorrow, on ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/blog/refine-pixels-2/"},"Day Two"),', we are ready to start "Setting Up the Client App". See you soon!'),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/blog/refine-pixels-2/"},'Click here to read "Setting Up the Client App" article. ',"\u2192")))}m.isMDXComponent=!0}}]);