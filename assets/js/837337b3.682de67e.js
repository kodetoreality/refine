"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31589],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(n),d=i,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>g});n(37953);var r=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"useRegister",description:"useRegister data hook from Refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useRegister/index.ts"},l=void 0,u={unversionedId:"authentication/hooks/use-register/index",id:"authentication/hooks/use-register/index",title:"useRegister",description:"useRegister data hook from Refine is a modified version of react-query's useMutation for registration.",source:"@site/docs/authentication/hooks/use-register/index.md",sourceDirName:"authentication/hooks/use-register",slug:"/authentication/hooks/use-register/",permalink:"/docs/authentication/hooks/use-register/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/hooks/use-register/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718373934,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{title:"useRegister",description:"useRegister data hook from Refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useRegister/index.ts"},sidebar:"mainSidebar",previous:{title:"usePermissions",permalink:"/docs/authentication/hooks/use-permissions/"},next:{title:"useForgotPassword",permalink:"/docs/authentication/hooks/use-forgot-password/"}},c={},g=[{value:"Usage",id:"usage",level:2},{value:"Logged In after successful registration",id:"logged-in-after-successful-registration",level:2},{value:"Redirection after register",id:"redirection-after-register",level:2},{value:"Error handling",id:"error-handling",level:2}],p=(d="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var d;const m={toc:g},y="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.yg)(y,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useRegister")," calls ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," method from ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.yg)("p",null,"It returns the result of ",(0,r.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being isSuccess and isError."),(0,r.yg)("p",null,"Data that is resolved from ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," will be returned as the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type SuccessNotificationResponse = {\n  message: string;\n  description?: string;\n};\n\ntype AuthActionResponse = {\n  success: boolean;\n  redirectTo?: string;\n  error?: Error;\n  [key: string]: unknown;\n  successNotification?: SuccessNotificationResponse;\n};\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,r.yg)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"When an ",(0,r.yg)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values: ",(0,r.yg)("inlineCode",{parentName:"li"},'{ name: "Register Error", message: "Error while registering" }'),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"successNotification"),": If provided, a success notification will be shown. The structure is as follows:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type SuccessNotificationResponse = {\n  message: string;\n  description?: string;\n};\n")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(p,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Refine provides a default registration page, page which handles the registration flow manually.\nIf you want to use a custom registration page however, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useRegister")," hook like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister } from "@refinedev/core";\n\ntype RegisterVariables = {\n  email: string;\n  password: string;\n};\n\nexport const RegisterPage = () => {\n  const { mutate: register } = useRegister<RegisterVariables>();\n\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n\n    const values = {\n      email: e.currentTarget.email.value,\n      password: e.currentTarget.password.value,\n    };\n\n    register(values);\n  };\n\n  return (\n    <form onSubmit={onSubmit}>\n      <label>Email</label>\n      <input name="email" value="test@refine.com" />\n      <label>Password</label>\n      <input name="password" value="refine" />\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"mutate")," acquired from the ",(0,r.yg)("inlineCode",{parentName:"p"},"useRegister")," hook can accept any kind of object for values since the ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," method from ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.\nA type parameter for the values can be provided to ",(0,r.yg)("inlineCode",{parentName:"p"},"useRegister"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: register } = useRegister<{ email: string; password: string }>();\n"))),(0,r.yg)("h2",{id:"logged-in-after-successful-registration"},"Logged In after successful registration"),(0,r.yg)(p,{id:"logged-in-after-successful-registration",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you want to log in to the user after successful registration, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"useLogin")," hook after the ",(0,r.yg)("inlineCode",{parentName:"p"},"useRegister")," hook's ",(0,r.yg)("inlineCode",{parentName:"p"},"onSuccess")," callback:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister, useLogin } from "@refinedev/core";\n\ntype FormVariables = {\n  email: string;\n  password: string;\n};\n\nexport const RegisterPage = () => {\n  const { mutate: register } = useRegister<FormVariables>();\n  const { mutate: login } = useLogin<FormVariables>();\n\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n\n    const values = {\n      email: e.currentTarget.email.value,\n      password: e.currentTarget.password.value,\n    };\n\n    register(values, {\n      //highlight-start\n      onSuccess: () => {\n        login(values);\n      },\n      //highlight-end\n    });\n  };\n\n  return (\n    <form onSubmit={onSubmit}>\n      <label>Email</label>\n      <input name="email" value="test@refine.com" />\n      <label>Password</label>\n      <input name="password" value="refine" />\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n'))),(0,r.yg)("h2",{id:"redirection-after-register"},"Redirection after register"),(0,r.yg)(p,{id:"redirection-after-register",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"A custom URL can be given to mutate the function from the ",(0,r.yg)("inlineCode",{parentName:"p"},"useRegister")," hook if you want to redirect yourself to a certain URL:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useRegister } from "@refinedev/core";\n\nconst { mutate: register } = useRegister();\n\nregister({ redirectPath: "/custom-url" });\n')),(0,r.yg)("p",null,"Then, you can handle this URL in your ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," method of the ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  // ...\n  register: ({ redirectPath }) => {\n    // ...\n    return {\n      success: true,\n      redirectTo: redirectPath,\n      successNotification: {\n        message: "Registration Successful",\n        description: "You have successfully registered.",\n      },\n    };\n  },\n};\n'))),(0,r.yg)("h2",{id:"error-handling"},"Error handling"),(0,r.yg)(p,{id:"error-handling",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Since the methods of ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"success")," value in the response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useRegister } from "@refinedev/core";\n\nconst { mutate: register } = useRegister();\n\nregister(\n  {\n    email: "refine@example.com",\n    password: "refine",\n  },\n  {\n    onSuccess: (data) => {\n      if (!data.success) {\n        // handle error\n      }\n\n      // handle success\n    },\n  },\n);\n')),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,r.yg)("inlineCode",{parentName:"p"},"useRegister")," hook will not be called if ",(0,r.yg)("inlineCode",{parentName:"p"},"success")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),". This is because the ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise, and the callback is only triggered when the promise is rejected."))))}f.isMDXComponent=!0}}]);