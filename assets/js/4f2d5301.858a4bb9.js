"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"useCustom",source:"packages/core/src/hooks/data/useCustom.ts"},l=void 0,p={unversionedId:"data/hooks/use-custom/index",id:"data/hooks/use-custom/index",title:"useCustom",description:"useCustom is used to send custom query requests using the Tanstack Query advantages. It is an extended version of TanStack Query's useQuery and not only supports all features of the mutation but also adds some extra features.",source:"@site/docs/data/hooks/use-custom/index.md",sourceDirName:"data/hooks/use-custom",slug:"/data/hooks/use-custom/",permalink:"/docs/data/hooks/use-custom/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-custom/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1707226578,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"useCustom",source:"packages/core/src/hooks/data/useCustom.ts"},sidebar:"mainSidebar",previous:{title:"useDeleteMany",permalink:"/docs/data/hooks/use-delete-many/"},next:{title:"useCustomMutation",permalink:"/docs/data/hooks/use-custom-mutation/"}},u={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"url <PropTag required />",id:"url-",level:3},{value:"method <PropTag required />",id:"method-",level:3},{value:"config.headers",id:"configheaders",level:3},{value:"config.query",id:"configquery",level:3},{value:"config.payload",id:"configpayload",level:3},{value:"config.sorters",id:"configsorters",level:3},{value:"config.filters",id:"configfilters",level:3},{value:"<del><code>config.sort</code></del> <PropTag deprecated />",id:"configsort-",level:3},{value:"queryOptions",id:"queryoptions",level:3},{value:"meta",id:"meta",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"successNotification",id:"successnotification",level:3},{value:"errorNotification",id:"errornotification",level:3},{value:"overtimeOptions",id:"overtimeoptions",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to invalidate the custom query?",id:"how-to-invalidate-the-custom-query",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("PropTag"),k=c("PropsTable"),h={toc:d};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useCustom")," is used to send custom query requests using the Tanstack Query advantages. It is an extended version of TanStack Query's ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"useQuery"))," and not only supports all features of the mutation but also adds some extra features."),(0,a.kt)("p",null,"It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method as the ",(0,a.kt)("strong",{parentName:"p"},"query function")," from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,a.kt)("admonition",{title:"Use Cases",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useCustom")," should ",(0,a.kt)("strong",{parentName:"p"},"not")," be used when creating, updating, or deleting a resource. Following hooks should be used for these instead: ",(0,a.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-create"},"useCreate"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-update"},"useUpdate")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},"useDelete")),(0,a.kt)("p",{parentName:"admonition"},"This is because ",(0,a.kt)("inlineCode",{parentName:"p"},"useCustom"),", unlike other data hooks, does not ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/query-invalidation"},"invalidate queries")," and therefore will not update the application state either."),(0,a.kt)("p",{parentName:"admonition"},"If you need to customize the mutation request, use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-custom"},"useCustomMutation")," hook instead.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useCustom")," hook expects the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," properties, which will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,a.kt)("p",null,"When properties are changed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCustom")," hook will trigger a new request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCustom, useApiUrl } from "@refinedev/core";\n\ninterface PostUniqueCheckResponse {\n  isAvailable: boolean;\n}\n\nconst apiUrl = useApiUrl();\n\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n  url: `${apiUrl}/posts-unique-check`,\n  method: "get",\n  config: {\n    headers: {\n      "x-custom-header": "foo-bar",\n    },\n    query: {\n      title: "Foo bar",\n    },\n  },\n});\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"url-"},"url ",(0,a.kt)(m,{required:!0,mdxType:"PropTag"})),(0,a.kt)("p",null,"This prop will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the endpoint of the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  url: "www.example.com/api/get-products",\n});\n')),(0,a.kt)("h3",{id:"method-"},"method ",(0,a.kt)(m,{required:!0,mdxType:"PropTag"})),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the HTTP method of the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  method: "get",\n});\n')),(0,a.kt)("h3",{id:"configheaders"},"config.headers"),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the headers of the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    headers: {\n      "x-custom-header": "foo-bar",\n    },\n  },\n});\n')),(0,a.kt)("h3",{id:"configquery"},"config.query"),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the query parameters of the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    query: {\n      title: "Foo bar",\n    },\n  },\n});\n')),(0,a.kt)("h3",{id:"configpayload"},"config.payload"),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the payload of the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    payload: {\n      title: "Foo bar",\n    },\n  },\n});\n')),(0,a.kt)("h3",{id:"configsorters"},"config.sorters"),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to send the sort query parameters of the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    sorters: [\n      {\n        field: "title",\n        order: "asc",\n      },\n    ],\n  },\n});\n')),(0,a.kt)("h3",{id:"configfilters"},"config.filters"),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to send the filter query parameters of the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    filters: [\n      {\n        field: "title",\n        operator: "contains",\n        value: "Foo",\n      },\n    ],\n  },\n});\n')),(0,a.kt)("h3",{id:"configsort-"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"config.sort"))," ",(0,a.kt)(m,{deprecated:!0,mdxType:"PropTag"})),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"config.sorters")," instead."),(0,a.kt)("h3",{id:"queryoptions"},"queryOptions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation ","\u2192"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useCustom({\n  queryOptions: {\n    retry: 3,\n    enabled: false,\n  },\n});\n")),(0,a.kt)("h3",{id:"meta"},"meta"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,a.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,a.kt)("p",null,"In the following example, ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," is passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  meta: {\n    foo: "bar",\n  },\n});\n\nconst myDataProvider = {\n  //...\n  custom: async ({ url, method, sort, filters, payload, query, headers, meta }) => {\n    const foo = meta?.foo;\n\n    console.log(foo); // "bar"\n\n    //...\n  },\n  //...\n};\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides-concepts/general-concepts/#meta-concept"},(0,a.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation","\u2192"))),(0,a.kt)("h3",{id:"dataprovidername"},"dataProviderName"),(0,a.kt)("p",null,"This prop allows you to specify which ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," if you have more than one. Just pass it like in the example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  dataProviderName: "second-data-provider",\n});\n')),(0,a.kt)("h3",{id:"successnotification"},"successNotification"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"This prop allows you to customize the success notification that shows up when the data is fetched successfully and ",(0,a.kt)("inlineCode",{parentName:"p"},"useCustom")," calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationProvider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  successNotification: (data, values) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n')),(0,a.kt)("h3",{id:"errornotification"},"errorNotification"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"This prop allows you to customize the error notification that shows up when the data fetching fails and the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCustom")," calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationProvider")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  errorNotification: (data, values) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n')),(0,a.kt)("h3",{id:"overtimeoptions"},"overtimeOptions"),(0,a.kt)("p",null,"If you want loading overtime for the request, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"overtimeOptions")," prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.\n",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," is the time interval in milliseconds. ",(0,a.kt)("inlineCode",{parentName:"p"},"onInterval")," is the function that will be called on each interval."),(0,a.kt)("p",null,"Return ",(0,a.kt)("inlineCode",{parentName:"p"},"overtime")," object from this hook. ",(0,a.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useCustom({\n  //...\n  overtimeOptions: {\n    interval: 1000,\n    onInterval(elapsedInterval) {\n      console.log(elapsedInterval);\n    },\n  },\n});\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n\n// You can use it like this:\n{\n  elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>;\n}\n")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-invalidate-the-custom-query"},"How to invalidate the custom query?"),(0,a.kt)("p",null,"To invalidate a query, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"invalidateQueries")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useQueryClient")," hook provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query")," library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useQueryClient } from "@tanstack/react-query";\n\nconst queryClient = useQueryClient();\n\nqueryClient.invalidateQueries(["custom-key"]);\n')),(0,a.kt)("p",null,"Note that you'll need to know the query key to invalidate the query. If you don't know the query key, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"queryOptions")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCustom")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCustom } from "@refinedev/core";\n\nuseCustom({\n  queryOptions: {\n    queryKey: ["custom-key"],\n  },\n});\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(k,{module:"@refinedev/core/useCustom",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TQueryFnData"),(0,a.kt)("td",{parentName:"tr",align:null},"Result data returned by the query function. Extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TError"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TQuery"),(0,a.kt)("td",{parentName:"tr",align:null},"Values for query params."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TQuery")),(0,a.kt)("td",{parentName:"tr",align:null},"unknown")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TPayload"),(0,a.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TPayload")),(0,a.kt)("td",{parentName:"tr",align:null},"unknown")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TData"),(0,a.kt)("td",{parentName:"tr",align:null},"Result data returned by the ",(0,a.kt)("inlineCode",{parentName:"td"},"select")," function. Extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord")),". If not specified, the value of ",(0,a.kt)("inlineCode",{parentName:"td"},"TQueryFnData")," will be used as the default value."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TQueryFnData"))))),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useQuery"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<CustomResponse<TData>, TError>")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"overtime"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ elapsedTime?: number }"))))))}f.isMDXComponent=!0}}]);