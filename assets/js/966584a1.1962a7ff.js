"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80607],{58860:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(37953);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=o,m=c["".concat(u,".").concat(d)]||c[d]||g[d]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81642:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>c});t(37953);var n=t(58860);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"useRegister",title:"useRegister",siderbar_label:"useRegister",description:"useRegister data hook from refine is a modified version of react-query's useMutation for registration."},u=void 0,l={unversionedId:"api-reference/core/hooks/auth/useRegister",id:"version-3.xx.xx/api-reference/core/hooks/auth/useRegister",title:"useRegister",description:"useRegister data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useRegister.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useRegister",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useRegister",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useRegister.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716901039,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"useRegister",title:"useRegister",siderbar_label:"useRegister",description:"useRegister data hook from refine is a modified version of react-query's useMutation for registration."},sidebar:"someSidebar",previous:{title:"usePermissions",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/usePermissions"},next:{title:"useForgotPassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useForgotPassword"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Logged In after successful registration",id:"logged-in-after-successful-registration",level:2},{value:"Redirection after register",id:"redirection-after-register",level:2}],g=(d="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var d;const m={toc:c},f="wrapper";function y(e){var{components:r}=e,t=a(e,["components"]);return(0,n.yg)(f,i(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},m,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useRegister")," calls ",(0,n.yg)("inlineCode",{parentName:"p"},"register")," method from ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. It registers the app if ",(0,n.yg)("inlineCode",{parentName:"p"},"register")," method from ",(0,n.yg)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification."),(0,n.yg)("p",null,"It returns the result of ",(0,n.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,n.yg)("p",null,"Data that is resolved from ",(0,n.yg)("inlineCode",{parentName:"p"},"register")," will be returned as the ",(0,n.yg)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(g,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Normally refine provides a default register page. If you prefer to use this default register page, there is no need to handle register flow manually.",(0,n.yg)("br",{parentName:"p"}),"\n","If we want to build a custom register page instead of the default one that comes with ",(0,n.yg)("strong",{parentName:"p"},"refine"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"useRegister")," can be used like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister } from "@pankod/refine-core";\n\ntype RegisterVariables = {\n    email: string;\n    password: string;\n};\n\nexport const RegisterPage = () => {\n    const { mutate: register } = useRegister<RegisterVariables>();\n\n    const onSubmit = (values: RegisterVariables) => {\n        register(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Email</label>\n            <input name="email" value="test@refine.com" />\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,n.yg)("inlineCode",{parentName:"p"},"useRegister")," can accept any kind of object for values since ",(0,n.yg)("inlineCode",{parentName:"p"},"register")," method from ",(0,n.yg)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,n.yg)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,n.yg)("inlineCode",{parentName:"p"},"useRegister"),"."),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: register } = useRegister<{ email: string; password: string }>();\n")))),(0,n.yg)("h2",{id:"logged-in-after-successful-registration"},"Logged In after successful registration"),(0,n.yg)(g,{id:"logged-in-after-successful-registration",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you want to log in the user after successful registration, you can use ",(0,n.yg)("inlineCode",{parentName:"p"},"useLogin")," hook after ",(0,n.yg)("inlineCode",{parentName:"p"},"useRegister")," hook ",(0,n.yg)("inlineCode",{parentName:"p"},"onSuccess")," callback."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister, useLogin } from "@pankod/refine-core";\n\ntype FormVariables = {\n    email: string;\n    password: string;\n};\n\nexport const RegisterPage = () => {\n    const { mutate: register } = useRegister<FormVariables>();\n    const { mutate: login } = useLogin<FormVariables>();\n\n    const onSubmit = (values: FormVariables) => {\n        register(values, {\n            //highlight-start\n            onSuccess: () => {\n                login(values);\n            },\n            //highlight-end\n        });\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Email</label>\n            <input name="email" value="test@refine.com" />\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n'))),(0,n.yg)("h2",{id:"redirection-after-register"},"Redirection after register"),(0,n.yg)(g,{id:"redirection-after-register",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"We have 2 options for redirecting the app after registering successfully ."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A custom url can be resolved from the promise returned from the ",(0,n.yg)("inlineCode",{parentName:"li"},"register")," method of the ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    register: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,n.yg)("p",null,"A custom url can be given to mutate the function from the ",(0,n.yg)("inlineCode",{parentName:"p"},"useRegister")," hook if you want to redirect yourself to a certain url."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useRegister } from "@pankod/refine-core";\n\nconst { mutate: register } = useRegister();\n\nregister({ redirectPath: "/custom-url" });\n')),(0,n.yg)("p",null,"Then, you can handle this url in your ",(0,n.yg)("inlineCode",{parentName:"p"},"register")," method of the ",(0,n.yg)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    register: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If the promise returned from the ",(0,n.yg)("inlineCode",{parentName:"li"},"register")," method of the ",(0,n.yg)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,n.yg)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    register: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"If the promise returned from ",(0,n.yg)("inlineCode",{parentName:"p"},"register")," is resolved with nothing, app will be redirected to the ",(0,n.yg)("inlineCode",{parentName:"p"},"/")," route by default.")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.yg)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}y.isMDXComponent=!0}}]);