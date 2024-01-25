"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75015],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?i.createElement(h,r(r({ref:n},c),{},{components:t})):i.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});t(67294);var i=t(3905);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",slug:"react-conditional-rendering",authors:"deborah_emeni",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/react-conditional-rendering",source:"@site/blog/2022-12-14-conditional-rendering.md",title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:10.1,hasTruncateMarker:!1,authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],frontMatter:{title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",slug:"react-conditional-rendering",authors:"deborah_emeni",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component"},nextItem:{title:"Unexpected token in JSON at position 0 error",permalink:"/blog/unexpected-token-in-json-at-position-0-error"},relatedPosts:[{title:"Next.js vs React - A Beginner's Guide",description:"We will be looking at the core differences between React and Next.js, using rendering, routing, and configuration as our basis for comparison.",permalink:"/blog/next-js-vs-react",formattedDate:"October 10, 2023",authors:[{name:"Marvel Ken",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"marvel_ken"}],readingTime:13.87,date:"2023-10-10T00:00:00.000Z"},{title:"An Intro to server components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",permalink:"/blog/react-server-components",formattedDate:"July 9, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.405,date:"2023-07-09T00:00:00.000Z"},{title:"A Guide to Using the useLayoutEffect Hook in React",description:"We'll explore the useLayoutEffect hook in-depth, how it differs from useEffect and learn how to properly leverage its capabilities to enhance the user experience.",permalink:"/blog/uselayouteffect-vs-useeffect",formattedDate:"June 2, 2023",authors:[{name:"Wisdom Ekpotu",title:"Software Engineer",imageURL:"https://github.com/wisdomekpotu.png",key:"wisdom_ekpotu"}],readingTime:10.285,date:"2023-06-02T00:00:00.000Z"}],authorPosts:[{title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",permalink:"/blog/grpc-vs-rest",formattedDate:"January 22, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:15.055,date:"2024-01-22T00:00:00.000Z"},{title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",permalink:"/blog/uri-vs-url",formattedDate:"January 17, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:11.985,date:"2024-01-17T00:00:00.000Z"},{title:"React Slick Examples - Creating a carousel",description:"We'll see how to use React Slick in your React projects through a step-by-step guide and hands-on demo.",permalink:"/blog/react-slick",formattedDate:"October 29, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:18.165,date:"2023-10-29T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Conditional Rendering in React?",id:"what-is-conditional-rendering-in-react",level:2},{value:"Demo: Methods of Conditional Rendering in React",id:"demo-methods-of-conditional-rendering-in-react",level:2},{value:"Using If-else",id:"using-if-else",level:2},{value:"Rendering nothing with null",id:"rendering-nothing-with-null",level:2},{value:"Conditional rendering with switch statements",id:"conditional-rendering-with-switch-statements",level:2},{value:"Using ternary operators",id:"using-ternary-operators",level:2},{value:"Using Logical AND (&amp;&amp;) and OR (||) operators (Short Circuit Evaluation)",id:"using-logical-and--and-or--operators-short-circuit-evaluation",level:2},{value:"Using IIFEs (Immediately Invoked Function Expressions)",id:"using-iifes-immediately-invoked-function-expressions",level:2},{value:"Use cases of conditional rendering",id:"use-cases-of-conditional-rendering",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function m(e){var{components:n}=e,t=r(e,["components"]);return(0,i.kt)("wrapper",o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){a(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'One of the essential features in modern React applications is the dynamic rendering of User Interface (UI) components with JSX based on user interactions, which cause certain events to be triggered and specific actions to be performed. These events are typically defined in functional components while building the application and are carried out by "',(0,i.kt)("strong",{parentName:"p"},"Conditional Rendering"),'."'),(0,i.kt)("p",null,"Developers can use React to define a number of distinct functional components that are only rendered when a specific condition is passed. This is a useful feature that has provided several benefits in a variety of areas, including user personalization, defining authentication roles, and implementing Authorization."),(0,i.kt)("p",null,"In this article, you'll learn about Conditional Rendering in React and the various ways to use it in your React applications."),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-conditional-rendering-in-react"},"What is Conditional Rendering in React?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#demo-methods-of-conditional-rendering-in-react"},"Demo: Methods of Conditional Rendering in React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-if-else"},"Using If-else")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rendering-nothing-with-null"},"Rendering nothing with null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#conditional-rendering-with-switch-statements"},"Conditional rendering with switch statements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-ternary-operators"},"Using ternary operators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-logical-and--and-or--operators-short-circuit-evaluation"},"Using Logical AND (\\&\\&) and OR (||) operators (Short Circuit Evaluation)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-iifes-immediately-invoked-function-expressions"},"Using IIFEs (Immediately Invoked Function Expressions)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#use-cases-of-conditional-rendering"},"Use cases of conditional rendering"))),(0,i.kt)("h2",{id:"what-is-conditional-rendering-in-react"},"What is Conditional Rendering in React?"),(0,i.kt)("p",null,"When developing applications, you must consider the experience of your application's users. You may want to show or deliver certain functionalities to your users based on their interaction with your application. In other words, depending on the state of your application, you may want your users to have access to specific content or functionalities built into your app. All of these are made possible by conditional rendering."),(0,i.kt)("p",null,"In React, creating and rendering functional components in JSX is the order of the day, hence conditional rendering is the most feasible way of providing an easy user flow or customer experience based on certain events in your application."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Next, you\u2019ll learn various common and useful methods of conditional rendering.")),(0,i.kt)("h2",{id:"demo-methods-of-conditional-rendering-in-react"},"Demo: Methods of Conditional Rendering in React"),(0,i.kt)("p",null,"React provides users with a much more functional approach to development, along with the advantages of using only Javascript. This section will demonstrate how to perform conditional rendering in React in a variety of ways. You'll be writing and testing code in the ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/"},"codesandbox")," environment."),(0,i.kt)("p",null,"To begin, create a new React application on your ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/"},"codesandbox"),"."),(0,i.kt)("h2",{id:"using-if-else"},"Using If-else"),(0,i.kt)("p",null,"Conditional rendering in React works similarly to the if-else statement in JavaScript, and each functional component returns a JSX value (which stands for JavaScript XML) that is rendered.\nThe following example shows how to render JSX conditionally using the ",(0,i.kt)("inlineCode",{parentName:"p"},"if-else")," syntax. You can accomplish this by using a variable or encapsulating the changing JSX in a wrapping function that is added to the return statement."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The code example is available on")," ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/using-if-else-for-conditional-rendering-6506hl"},(0,i.kt)("em",{parentName:"a"},"codesandbox")),(0,i.kt)("em",{parentName:"p"},".")),(0,i.kt)("p",null,"First, you'll create two components: a ",(0,i.kt)("strong",{parentName:"p"},"HeaderComponent.js")," file that contains the JSX that will be rendered when the user logs in, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export default function HeaderComponent(props) {\n  return (\n    <>\n      <h1> Welcome {props.username}! </h1>\n      <h1>Hello CodeSandbox</h1>\n      <h2>Start editing to see some magic happen!</h2>\n    </>\n  );\n}\n")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("strong",{parentName:"p"},"NotLoggedIn.js")," file to house the JSX that will be rendered when the user is not logged in, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"    export default function NotLoggedIn(props) {\n     return <h2> No User Found </h2>;\n    }\n")),(0,i.kt)("p",null,"Then, import the two components into the ",(0,i.kt)("strong",{parentName:"p"},"app.js")," file and add an ",(0,i.kt)("inlineCode",{parentName:"p"},"if-else")," condition before the ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement that will assign either of the components to the ",(0,i.kt)("inlineCode",{parentName:"p"},"{template}")," depending on whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoggedIn")," state is ",(0,i.kt)("strong",{parentName:"p"},"true")," or ",(0,i.kt)("strong",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import HeaderComponent from "./HeaderComponent";\nimport NotLoggedIn from "./NotLoggedIn";\nimport React from "react";\n\nimport "./styles.css";\n\nexport default function App() {\n  const [isloggedIn, setIsLoggedIn] = React.useState(false);\n  let template;\n  if (isloggedIn) {\n    template = <HeaderComponent username="Debby" />;\n  } else {\n    template = <NotLoggedIn />;\n  }\n  return <div className="App">{template}</div>;\n}\n')),(0,i.kt)("p",null,"When a user logs in, the state is set to ",(0,i.kt)("strong",{parentName:"p"},"true"),", and the ",(0,i.kt)("strong",{parentName:"p"},"welcome message")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"HeaderComponent")," is displayed to the user as follows:"),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-1.png",alt:"conditional rendering react"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"If the user is not logged in, the state is set to ",(0,i.kt)("strong",{parentName:"p"},"false"),", and the following ",(0,i.kt)("strong",{parentName:"p"},"message")," is displayed from the ",(0,i.kt)("inlineCode",{parentName:"p"},"NotloggedIn")," component:"),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-2.png",alt:"conditional rendering react"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"rendering-nothing-with-null"},"Rendering nothing with null"),(0,i.kt)("p",null,"On occasion, you may want to limit the contents or pages that are rendered to your users based on their preferences, time, location, demography, and other interests in order to improve your application's user experience or personalization. In such a case, you would not want to bore or stress your users with irrelevant content."),(0,i.kt)("p",null,"When rendering JSX, conditional rendering in React gives you the option of not rendering a specific piece of content or anything to your users. A good example is the ",(0,i.kt)("a",{parentName:"p",href:"https://www.paypal.com/us/business"},"Paypal business site"),", where users are unable to access certain PayPal businesses because the template is not being rendered."),(0,i.kt)("p",null,"To implement such functionality in React, use 'null' as the rendered template. Using 'null' will result in nothing being rendered and will also prevent errors due to no template being returned.\nAs an example, suppose you have a \"food ordering\" application that only renders a page to edit orders for specific users with permission rights, while users with none are rendered nothing."),(0,i.kt)("p",null,"Create another react application on codesandbox or clone the code example ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/rendering-nothing-with-nulll-bg5ks9?file=/src/App.js"},"here"),"."),(0,i.kt)("p",null,"Then, create an ",(0,i.kt)("strong",{parentName:"p"},"EditComponent.js")," file that will contain a welcome message and a button interface for editing food orders:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'export default function HeaderComponent(props) {\n  return (\n    <>\n      <h1> Welcome {props.username}! </h1>\n      <button style={{ padding: "10px", background: "green", color: "white" }}>\n        {" "}\n        Edit{" "}\n      </button>\n    </>\n  );\n}\n')),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"EditComponent")," into the ",(0,i.kt)("strong",{parentName:"p"},"App.js")," file and add a state ",(0,i.kt)("inlineCode",{parentName:"p"},"isHasPermission")," to check if the user has the permission to edit. Then, add a condition that checks if the user has editing permission and returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"EditComponent")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," depending on whether the state is ",(0,i.kt)("strong",{parentName:"p"},"true")," or ",(0,i.kt)("strong",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import EditComponent from "./EditComponent";\nimport React from "react";\n\nimport "./styles.css";\n\nexport default function App() {\n  const [isHasPermission, setIsHasPermission] = React.useState(true);\n  let template;\n  if (isHasPermission) {\n    template = <EditComponent username="Debby" />;\n  } else {\n    template = null;\n  }\n  return (\n    <div className="App">\n      <div>\n        <ul>\n          <li> Food </li>\n          <li> Rice </li>\n          <li> Goat </li>\n          <li> Food </li>\n        </ul>\n      </div>\n      {template}\n    </div>\n  );\n}\n')),(0,i.kt)("p",null," If the user has permission, the state is set to ",(0,i.kt)("strong",{parentName:"p"},"true")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"EditComponent")," is rendered as follows:"),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-3.png",alt:"conditional rendering react"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"If the user has no permission, the state is set to ",(0,i.kt)("strong",{parentName:"p"},"false")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," is rendered as the ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),":"),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-4.png",alt:"conditional rendering react"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"conditional-rendering-with-switch-statements"},"Conditional rendering with switch statements"),(0,i.kt)("p",null,"There are times when you may want to show a different UI to users based on the state of the application, such as the user's value. The ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"},"JavaScript Switch statement")," is ideal for this functionality."),(0,i.kt)("p",null,"Switch statements are not part of the JSX syntax, and so they cannot be used directly within React. You can, however, use the Switch statements in a subcomponent before using the component in the main component."),(0,i.kt)("p",null,"In the following example, you will use Switch statements to render different content based on a specific case. You will create an input that takes the user's value and renders the components the user requests."),(0,i.kt)("p",null,"What is rendered to the user is determined by what the user enters as the case. Type the following code into your ",(0,i.kt)("strong",{parentName:"p"},"app.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import "./styles.css";\nimport { useState } from "react";\n\nfunction SwitchComponent(props) {\n  switch (props.route) {\n    case "home":\n      return <h1> You are Home </h1>;\n    case "about-us":\n      return <h1> Check Us Out </h1>;\n    case "learn":\n      return <h1> Come and Learn the mind blowing stuffs </h1>;\n    default:\n      return null;\n  }\n}\n\nexport default function App() {\n  const [path, setPath] = useState("");\n  return (\n    <div className="App">\n      <input onChange={(e) => setPath(e.target.value)} />\n      <h1>Hello CodeSandbox</h1>\n      <SwitchComponent route={path} />\n    </div>\n  );\n}\n')),(0,i.kt)("p",null,"The component will render based on what the users enter as follows:"),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-5.png",alt:"conditional rendering react"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"using-ternary-operators"},"Using ternary operators"),(0,i.kt)("p",null,"The ternary operator is synonymous with the 'if-else' operator. The only difference between the ternary operator and the 'if-else' statement is in the implementation, as JSX supports the use of ternary operators. That is, ternary operators can be easily added to the template to be rendered\nYou can use the ternary operators to seamlessly render your components within the JSX syntax based on a specific condition."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The sample code can be found")," ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/using-ternary-operators-for-conditional-rendering-qqfn3l?file=/src/App.js"},(0,i.kt)("em",{parentName:"a"},"here")),(0,i.kt)("em",{parentName:"p"},".")),(0,i.kt)("p",null,"Consider the following example, which renders different content based on the client's existence or state in the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import "./styles.css";\n\nexport default function App() {\n  const isExistingClient = false;\n  return (\n    <div className="App">\n      {isExistingClient ? (\n        <>\n          <h1>Hello CodeSandbox</h1>\n          <h2>Start editing to see some magic happen!</h2>\n        </>\n      ) : (\n        <>\n          <h1> Hi!, New User </h1>\n          <h3> Welcome to our palace </h3>\n        </>\n      )}\n    </div>\n  );\n}\n')),(0,i.kt)("h2",{id:"using-logical-and--and-or--operators-short-circuit-evaluation"},"Using Logical AND (&&) and OR (||) operators (Short Circuit Evaluation)"),(0,i.kt)("p",null,"Short-circuiting is how JavaScript handles logical expression evaluation, but the logical && and || operators work slightly differently in React. When the left-hand expression returns ",(0,i.kt)("strong",{parentName:"p"},"false"),", the right-hand expression is evaluated and returns ",(0,i.kt)("strong",{parentName:"p"},"true"),". If the left-hand expression is false, the evaluation of the second expression will be returned."),(0,i.kt)("p",null,"For example, suppose you have a store application; when the store is open, it should return true and render a specific message to users; when the store is closed, it should return false and render nothing. Also, when the AND (&&) operator is true or open, the right-hand-side expression is evaluated or rendered; if it is not true, it is rendered null."),(0,i.kt)("p",null,"See the code example ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/using-logical-and-and-or-for-conditional-rendering-kuseun"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import "./styles.css";\n\nexport default function App() {\n  const isOpen = true;\n  const isAvailable = false;\n  return (\n    <div className="App">\n      {isOpen && (\n        <>\n          <h1>Hello CodeSandbox</h1>\n          <h2>Start editing to see some magic happen!</h2>\n        </>\n      )}\n\n      {isAvailable || (\n        <>\n          <h2> Sorry I am not available </h2>\n          <button> Make Available </button>\n        </>\n      )}\n    </div>\n  );\n}\n')),(0,i.kt)("h2",{id:"using-iifes-immediately-invoked-function-expressions"},"Using IIFEs (Immediately Invoked Function Expressions)"),(0,i.kt)("p",null,"IIFEs are self-invoking functions (functions that call themselves immediately after they have been created). They allow you to use your ",(0,i.kt)("inlineCode",{parentName:"p"},"if...else")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"switch")," statements within the JSX you are returning. This opens up the possibility of using the previously mentioned ",(0,i.kt)("inlineCode",{parentName:"p"},"switch")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"if-else")," method in the JSX."),(0,i.kt)("p",null,"In the following example, you have a state called ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoggedIn,")," and the content is rendered based on whether the user is logged in or not. In addition, based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoggedIn")," state, an input field is rendered or a welcome user message is displayed.\nThe code example can be found on ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/using-iifes-s4bm0n?file=/src/App.js"},"codesanbox"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import "./styles.css";\n\nexport default function App() {\n  const isLoggedIn = false;\n  const user = "Debby";\n\n  return (\n    <div className="App">\n      <h1>Hello CodeSandbox</h1>\n      <h2>Start editing to see some magic happen!</h2>\n\n      {(() => {\n        if (isLoggedIn) {\n          return <h1> Welcome {user} </h1>;\n        } else {\n          return (\n            <>\n              <label style={{ textAlign: "left !important" }}>Username: </label>\n              <br />\n              <input />\n            </>\n          );\n        }\n      })()}\n    </div>\n  );\n}\n')),(0,i.kt)("p",null,"The result is shown below:"),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-14-conditional-rendering/screen-6.png",alt:"conditional rendering react"}),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Next, you\u2019ll see some use cases of conditional rendering.")),(0,i.kt)("h2",{id:"use-cases-of-conditional-rendering"},"Use cases of conditional rendering"),(0,i.kt)("p",null,"Conditional rendering has so many use cases. To list a few:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authentication"),": Typically, authentication usually requires access to a user's view of a specific resource. You can derive from the understanding of conditional rendering and previous examples in this article that it can be used to authenticate users for your application.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Personalization"),": Giving customers a personalized experience is what personalization entails. To accomplish this, many templates must be customized based on the personalization conditions specified.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authorization"),": When developing applications, you may need to hide certain actions or information from the user. This is possible by using the null method, as previously mentioned. Depending on the user's role, you can hide or render certain features.")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, you covered what Conditional Rendering is in React, as well as several methods of Conditional Rendering in React, such as using ",(0,i.kt)("inlineCode",{parentName:"p"},"if...else"),", rendering nothing with ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", conditional rendering with ",(0,i.kt)("inlineCode",{parentName:"p"},"switch")," statements, using ternary operators, using logical AND (&&) and OR (||) operators (Short Circuit Evaluation), and Using IIFEs. You also learned about some conditional rendering use cases."))}m.isMDXComponent=!0}}]);