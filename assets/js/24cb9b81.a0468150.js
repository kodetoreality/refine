"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"useNavigation",title:"useNavigation"},p=void 0,s={unversionedId:"api-reference/core/hooks/navigation/useNavigation",id:"version-3.xx.xx/api-reference/core/hooks/navigation/useNavigation",title:"useNavigation",description:"useNavigation is a hook that provides methods to navigate the app.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/navigation/useNavigation.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useNavigation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/navigation/useNavigation.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Omer Aplak",lastUpdatedAt:1706164606,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{id:"useNavigation",title:"useNavigation"},sidebar:"someSidebar",previous:{title:"useSubscription",permalink:"/docs/3.xx.xx/api-reference/core/hooks/live/useSubscription"},next:{title:"useNotification",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/"}},c={},d=[{value:"Return Values",id:"return-values",level:2},{value:"<code>list</code>",id:"list",level:3},{value:"<code>create</code>",id:"create",level:3},{value:"<code>edit</code>",id:"edit",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>clone</code>",id:"clone",level:3},{value:"<code>push</code>",id:"push",level:3},{value:"<code>replace</code>",id:"replace",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"<code>listUrl</code>",id:"listurl",level:3},{value:"<code>createUrl</code>",id:"createurl",level:3},{value:"<code>editUrl</code>",id:"editurl",level:3},{value:"<code>showUrl</code>",id:"showurl",level:3},{value:"<code>cloneUrl</code>",id:"cloneurl",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return values",id:"return-values-1",level:3},{value:"Interface",id:"interface",level:4}],u={toc:d};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," is a hook that provides methods to navigate the app."),(0,r.kt)("p",null,"Internally, it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst {\n    list,\n    create,\n    edit,\n    show,\n    clone,\n    push,\n    replace,\n    goBack,\n    listUrl,\n    createUrl,\n    editUrl,\n    showUrl,\n    cloneUrl,\n} = useNavigation();\n')),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("h3",{id:"list"},(0,r.kt)("inlineCode",{parentName:"h3"},"list")),(0,r.kt)("p",null,"It is a method that navigates to the list page of the given resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { list } = useNavigation();\n\nlist("posts"); // It navigates to the `/posts` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a second parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," method."),(0,r.kt)("h3",{id:"create"},(0,r.kt)("inlineCode",{parentName:"h3"},"create")),(0,r.kt)("p",null,"It is a method that navigates to the create page of the given resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { create } = useNavigation();\n\ncreate("posts"); // It navigates to the `/posts/create` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a second parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,r.kt)("h3",{id:"edit"},(0,r.kt)("inlineCode",{parentName:"h3"},"edit")),(0,r.kt)("p",null,"It is a method that navigates to the edit page of the given resource and id. When you use this method, you need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the record you want to edit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { edit } = useNavigation();\n\nedit("posts", "1"); // It navigates to the `/posts/edit/1` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a third parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," method."),(0,r.kt)("h3",{id:"show"},(0,r.kt)("inlineCode",{parentName:"h3"},"show")),(0,r.kt)("p",null,"It is a method that navigates to the show page of the given resource and id. When you use this method, you need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the record you want to show."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { show } = useNavigation();\n\nshow("posts", "1"); // It navigates to the `/posts/show/1` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a third parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," method."),(0,r.kt)("h3",{id:"clone"},(0,r.kt)("inlineCode",{parentName:"h3"},"clone")),(0,r.kt)("p",null,"It is a method that navigates to the clone page of the given resource and id. When you use this method, you need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the record you want to clone."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { clone } = useNavigation();\n\nclone("posts", "1"); // It navigates to the `/posts/clone/1` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a third parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method."),(0,r.kt)("h3",{id:"push"},(0,r.kt)("inlineCode",{parentName:"h3"},"push")),(0,r.kt)("p",null,"It is a method that pushes a new entry onto the history stack. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { push } = useNavigation();\n\npush("custom-page"); // It navigates to the `/custom-page` page\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"push")," method parameters are dependent on your router provider."),(0,r.kt)("h3",{id:"replace"},(0,r.kt)("inlineCode",{parentName:"h3"},"replace")),(0,r.kt)("p",null,"It is a method that replaces the current entry on the history stack. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { replace } = useNavigation();\n\nreplace("custom-page"); // It navigates to the `/custom-page` page\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"replace")," method parameters are dependent on your router provider."),(0,r.kt)("h3",{id:"goback"},(0,r.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,r.kt)("p",null,"It is a method that navigates to the previous page. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { goBack } = useNavigation();\n\ngoBack(); // It navigates to the previous page\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," method parameters are dependent on your router provider."),(0,r.kt)("h3",{id:"listurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"listUrl")),(0,r.kt)("p",null,"It is a method that returns the list page URL of the given resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { listUrl } = useNavigation();\n\nlistUrl("posts"); // It returns the `/posts` URL\n')),(0,r.kt)("h3",{id:"createurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"createUrl")),(0,r.kt)("p",null,"It is a method that returns the create page URL of the given resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { createUrl } = useNavigation();\n\ncreateUrl("posts"); // It returns the `/posts/create` URL\n')),(0,r.kt)("h3",{id:"editurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"editUrl")),(0,r.kt)("p",null,"It is a method that returns the edit page URL of the given resource and id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { editUrl } = useNavigation();\n\neditUrl("posts", "1"); // It returns the `/posts/edit/1` URL\n')),(0,r.kt)("h3",{id:"showurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"showUrl")),(0,r.kt)("p",null,"It is a method that returns the show page URL of the given resource and id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { showUrl } = useNavigation();\n\nshowUrl("posts", "1"); // It returns the `/posts/show/1` URL\n')),(0,r.kt)("h3",{id:"cloneurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"cloneUrl")),(0,r.kt)("p",null,"It is a method that returns the clone page URL of the given resource and id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine-core";\n\nconst { cloneUrl } = useNavigation();\n\ncloneUrl("posts", "1"); // It returns the `/posts/clone/1` URL\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"return-values-1"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the list page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the create page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edit"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the edit page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the show page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clone"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the clone page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"push"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that pushes the given path to the history stack"),(0,r.kt)("td",{parentName:"tr",align:null},"( path: string, ...rest: unknown[] ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that replaces the current entry on the history stack"),(0,r.kt)("td",{parentName:"tr",align:null},"( path: string, ...rest: unknown[] ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"goBack"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the previous page"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the list page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string ) => string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the create page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string ) => string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the edit page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},"BaseKey")," ) => string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the show page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},"BaseKey")," ) => string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloneUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the clone page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},"BaseKey")," ) => string")))),(0,r.kt)("h4",{id:"interface"},"Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="History Type"',title:'"History','Type"':!0},'export type HistoryType = "push" | "replace";\n')))}h.isMDXComponent=!0}}]);