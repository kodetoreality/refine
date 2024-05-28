"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11163],{58860:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,g=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"useCustomMutation",source:"packages/core/src/hooks/data/useCustomMutation.ts"},l=void 0,u={unversionedId:"data/hooks/use-custom-mutation/index",id:"data/hooks/use-custom-mutation/index",title:"useCustomMutation",description:"useCustomMutation is used when sending custom mutation requests using the TanStack Query advantages. It is an extended version of TanStack Query's useMutation and not only supports all features of the mutation but also adds some extra features.",source:"@site/docs/data/hooks/use-custom-mutation/index.md",sourceDirName:"data/hooks/use-custom-mutation",slug:"/data/hooks/use-custom-mutation/",permalink:"/docs/data/hooks/use-custom-mutation/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-custom-mutation/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716901039,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{title:"useCustomMutation",source:"packages/core/src/hooks/data/useCustomMutation.ts"},sidebar:"mainSidebar",previous:{title:"useCustom",permalink:"/docs/data/hooks/use-custom/"},next:{title:"useDataProvider",permalink:"/docs/data/hooks/use-data-provider/"}},p={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"mutationOptions",id:"mutationoptions",level:3},{value:"Mutation Parameters",id:"mutation-parameters",level:2},{value:"url <PropTag required />",id:"url-",level:3},{value:"method <PropTag required />",id:"method-",level:3},{value:"values <PropTag required />",id:"values-",level:3},{value:"config.headers",id:"configheaders",level:3},{value:"successNotification",id:"successnotification",level:3},{value:"errorNotification",id:"errornotification",level:3},{value:"meta",id:"meta",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"overtimeOptions",id:"overtimeoptions",level:3},{value:"Return Values",id:"return-values",level:2},{value:"Additional Values",id:"additional-values",level:3},{value:"overtime",id:"overtime",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Mutation Parameters",id:"mutation-parameters-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},c=m("DocThumbsUpDownFeedbackWidget"),g=m("PropTag"),y={toc:d},h="wrapper";function f(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},y,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," is used when sending custom mutation requests using the TanStack Query advantages. It is an extended version of TanStack Query's ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"useMutation"))," and not only supports all features of the mutation but also adds some extra features."),(0,n.yg)("p",null,"It uses the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method as the ",(0,n.yg)("strong",{parentName:"p"},"mutation function")," from the ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.yg)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,n.yg)("admonition",{title:"Use Cases",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," should ",(0,n.yg)("strong",{parentName:"p"},"not")," be used when creating, updating, or deleting a resource. Following hooks should be used for these instead: ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-create"},"useCreate"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-update"},"useUpdate")," or ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},"useDelete"),"."),(0,n.yg)("p",{parentName:"admonition"},"This is because ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation"),", unlike other data hooks, does not ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/query-invalidation"},"invalidate queries")," and therefore will not update the application state either."),(0,n.yg)("p",{parentName:"admonition"},"If you need to custom query request, use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-custom"},"useCustom")," hook.")),(0,n.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.yg)(c,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," hook returns many useful properties and methods. One of them is the ",(0,n.yg)("inlineCode",{parentName:"p"},"mutate")," method which expects ",(0,n.yg)("inlineCode",{parentName:"p"},"values"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"method"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"url")," as parameters. These parameters will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useCustomMutation, useApiUrl } from "@refinedev/core";\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\nconst apiUrl = useApiUrl();\n\nconst { mutate } = useCustomMutation<ICategory>();\n\nmutate({\n  url: `${API_URL}/categories`,\n  method: "post",\n  values: {\n    title: "New Category",\n  },\n});\n'))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"mutationoptions"},"mutationOptions"),(0,n.yg)(c,{id:"mutationoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"mutationOptions")," is used to pass options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," hook. It is useful when you want to pass additional options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," hook."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation ","\u2192"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"useCustomMutation({\n  mutationOptions: {\n    retry: 3,\n  },\n});\n")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"mutationOptions")," does not support ",(0,n.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"onError")," props because they override the default ",(0,n.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"onError")," functions. If you want to use these props, you can pass them to mutate functions like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate(\n  {\n    url: `${API_URL}/categories`,\n    method: "post",\n    values: {\n      title: "New Category",\n    },\n  },\n  {\n    onError: (error, variables, context) => {\n      // An error occurred!\n    },\n    onSuccess: (data, variables, context) => {\n      // Let\'s celebrate!\n    },\n  },\n);\n'))),(0,n.yg)("h2",{id:"mutation-parameters"},"Mutation Parameters"),(0,n.yg)("h3",{id:"url-"},"url ",(0,n.yg)(g,{required:!0,mdxType:"PropTag"})),(0,n.yg)(c,{id:"url-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the endpoint of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  url: "www.example.com/api/update-products",\n});\n'))),(0,n.yg)("h3",{id:"method-"},"method ",(0,n.yg)(g,{required:!0,mdxType:"PropTag"})),(0,n.yg)(c,{id:"method-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the HTTP method of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  method: "post",\n});\n'))),(0,n.yg)("h3",{id:"values-"},"values ",(0,n.yg)(g,{required:!0,mdxType:"PropTag"})),(0,n.yg)(c,{id:"values-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as the data to be sent with the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  values: {\n    name: "New Category",\n    description: "New Category Description",\n  },\n});\n'))),(0,n.yg)("h3",{id:"configheaders"},"config.headers"),(0,n.yg)(c,{id:"configheaders",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the headers of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  config: {\n    headers: {\n      "x-custom-header": "foo-bar",\n    },\n  },\n});\n'))),(0,n.yg)("h3",{id:"successnotification"},"successNotification"),(0,n.yg)(c,{id:"successnotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"This prop allows you to customize the success notification that shows up when the data is fetched successfully and ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," calls the ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  successNotification: (data, values) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n'))),(0,n.yg)("h3",{id:"errornotification"},"errorNotification"),(0,n.yg)(c,{id:"errornotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"After data fetching is failed, ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustomMutation")," will call ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  errorNotification: (data, values) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,n.yg)("h3",{id:"meta"},"meta"),(0,n.yg)(c,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,n.yg)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,n.yg)("p",null,"In the following example, ",(0,n.yg)("inlineCode",{parentName:"p"},"meta")," is passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  meta: {\n    foo: "bar",\n  },\n});\n\nconst myDataProvider = {\n  //...\n  custom: async ({\n    url,\n    method,\n    sort,\n    filters,\n    payload,\n    query,\n    headers,\n    meta,\n  }) => {\n    const foo = meta?.foo;\n\n    console.log(foo); // "bar"\n\n    //...\n  },\n  //...\n};\n')),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/guides-concepts/general-concepts/#meta-concept"},(0,n.yg)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation","\u2192")))),(0,n.yg)("h3",{id:"dataprovidername"},"dataProviderName"),(0,n.yg)(c,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useCustomMutation();\n\nmutate({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,n.yg)("h3",{id:"overtimeoptions"},"overtimeOptions"),(0,n.yg)(c,{id:"overtimeoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you want loading overtime for the request, you can pass the ",(0,n.yg)("inlineCode",{parentName:"p"},"overtimeOptions")," prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.\n",(0,n.yg)("inlineCode",{parentName:"p"},"interval")," is the time interval in milliseconds. ",(0,n.yg)("inlineCode",{parentName:"p"},"onInterval")," is the function that will be called on each interval."),(0,n.yg)("p",null,"Return ",(0,n.yg)("inlineCode",{parentName:"p"},"overtime")," object from this hook. ",(0,n.yg)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useCustomMutation({\n  //...\n  overtimeOptions: {\n    interval: 1000,\n    onInterval(elapsedInterval) {\n      console.log(elapsedInterval);\n    },\n  },\n});\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n\n// You can use it like this:\n{\n  elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>;\n}\n"))),(0,n.yg)("h2",{id:"return-values"},"Return Values"),(0,n.yg)(c,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Returns an object with TanStack Query's ",(0,n.yg)("inlineCode",{parentName:"p"},"useMutation")," return values."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192"))),(0,n.yg)("h3",{id:"additional-values"},"Additional Values"),(0,n.yg)("h4",{id:"overtime"},"overtime"),(0,n.yg)(c,{id:"overtime",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"overtime")," object is returned from this hook. ",(0,n.yg)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useCustomMutation();\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n"))),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"mutation-parameters-1"},"Mutation Parameters"),(0,n.yg)(c,{id:"mutation-parameters-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"url ",(0,n.yg)(g,{asterisk:!0,mdxType:"PropTag"})),(0,n.yg)("td",{parentName:"tr",align:null},"URL"),(0,n.yg)("td",{parentName:"tr",align:null},"string")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"method ",(0,n.yg)(g,{asterisk:!0,mdxType:"PropTag"})),(0,n.yg)("td",{parentName:"tr",align:null},"Method"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"post"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"put"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"patch"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"delete"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"values ",(0,n.yg)(g,{asterisk:!0,mdxType:"PropTag"})),(0,n.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"TVariables"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"config"),(0,n.yg)("td",{parentName:"tr",align:null},"The config of your request. You can send ",(0,n.yg)("inlineCode",{parentName:"td"},"headers")," using this field."),(0,n.yg)("td",{parentName:"tr",align:null},"{ headers?: {}; }")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"successNotification"),(0,n.yg)("td",{parentName:"tr",align:null},"Successful mutation notification"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#successerrornotification"},(0,n.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"errorNotification"),(0,n.yg)("td",{parentName:"tr",align:null},"Unsuccessful mutation notification"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#successerrornotification"},(0,n.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"meta"),(0,n.yg)("td",{parentName:"tr",align:null},"Meta data query for ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProvider")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#metaquery"},(0,n.yg)("inlineCode",{parentName:"a"},"MetaDataQuery")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.yg)("td",{parentName:"tr",align:null},"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,n.yg)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")))))),(0,n.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.yg)(c,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TData"),(0,n.yg)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TError"),(0,n.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TQuery"),(0,n.yg)("td",{parentName:"tr",align:null},"Values for query params."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"TQuery")),(0,n.yg)("td",{parentName:"tr",align:null},"unknown")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TPayload"),(0,n.yg)("td",{parentName:"tr",align:null},"Values for params."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"TPayload")),(0,n.yg)("td",{parentName:"tr",align:null},"unknown"))))),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(c,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useMutation"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,n.yg)("inlineCode",{parentName:"a"},"UseMutationResult<{ data: TData }, TError, { resource: string; values: TVariables; }, unknown>")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"overtime"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"{ elapsedTime?: number }")))))))}f.isMDXComponent=!0}}]);