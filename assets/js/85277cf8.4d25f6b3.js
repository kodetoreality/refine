"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",slug:"next-js-api-routes",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-05-next-api-routes/social.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/blog/next-js-api-routes",source:"@site/blog/2022-10-05-next-api-routes.md",title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:8.795,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",slug:"next-js-api-routes",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-05-next-api-routes/social.png",hide_table_of_contents:!1},prevItem:{title:"Creating a Responsive React Navbar with Tailwind CSS",permalink:"/blog/react-navbar-responsive-tailwind"},nextItem:{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine"},relatedPosts:[{title:"How to Fetch Data in React with useSWR",description:"Introduction to SWR and useSwr for Client-Side Data Fetching",permalink:"/blog/data-fetching-next-js-useswr",formattedDate:"January 3, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:13.22,date:"2023-01-03T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.07,date:"2022-11-13T00:00:00.000Z"},{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",permalink:"/blog/nextauth-google-github-authentication-nextjs",formattedDate:"August 18, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:12.535,date:"2022-08-18T00:00:00.000Z"}],authorPosts:[{title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.17,date:"2022-09-04T00:00:00.000Z"},{title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",permalink:"/blog/next-js-environment-variables",formattedDate:"September 7, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.465,date:"2022-09-07T00:00:00.000Z"},{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:7.225,date:"2022-09-12T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What are Next.js API Routes?",id:"what-are-nextjs-api-routes",level:2},{value:"How to create API Routes in Next.js",id:"how-to-create-api-routes-in-nextjs",level:2},{value:"Dynamic API Routes",id:"dynamic-api-routes",level:2},{value:"API Routes custom configuration",id:"api-routes-custom-configuration",level:2},{value:"Typing API Routes with TypeScript",id:"typing-api-routes-with-typescript",level:2},{value:"Typing <code>request</code> and <code>response</code> objects",id:"typing-request-and-response-objects",level:4},{value:"Typing response data",id:"typing-response-data",level:4},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Next.js is a React framework and platform for building production-grade, static and server-side rendered applications, with a lot of useful built-in features and the ability to fully customize your page requests."),(0,a.kt)("p",null,"Next.js has a page-based routing system, and an API route feature which allows you to create APIs endpoints in a pages directory as though you're writing backend code. ",(0,a.kt)("strong",{parentName:"p"},"Next.js API Routes")," let you combine backend code along with your frontend code, thereby eliminating the need for extra codebases. With Next.js, building your RESTful or GraphQL APIs has never been easier!"),(0,a.kt)("p",null,"In this article, you'll learn how to set up Next.js API Routes and we'll explain some of their core features and how you can leverage them in your applications along the way. You'll also learn how to submit form data to an API route.  "),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-are-nextjs-api-routes"},"What are Next.js API Routes?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-create-api-routes-in-nextjs"},"How to create API Routes in Next.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#dynamic-api-routes"},"Dynamic API Routes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#api-routes-custom-configuration"},"API Routes custom configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typing-api-routes-with-typescript"},"Typing API Routes with TypeScript"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typing-request-and-response-objects"},"Typing ",(0,a.kt)("inlineCode",{parentName:"a"},"request")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"response")," objects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#typing-response-data"},"Typing response data"))))),(0,a.kt)("h2",{id:"what-are-nextjs-api-routes"},"What are Next.js API Routes?"),(0,a.kt)("p",null,"Before you dive into ",(0,a.kt)("strong",{parentName:"p"},"Next.js API Routes")," let's provide a little background first. "),(0,a.kt)("p",null,"An Application Programming Interface (API) defines how two application or services communicate with each other using HTTP requests and responses. This communication usually involves the two applications exchanging data. For example a client-side web application requesting from a server application a list of users stored in a database. "),(0,a.kt)("p",null,"There are different methods of creating an API based on your requirements and use-cases. The most popular method around the web today is the Representational State Transfer (REST) method. The REST or ",(0,a.kt)("em",{parentName:"p"},"RESTful")," method typically involves a client application sending a request - a request can either be for sending data (GET request), submitting data (PUT request), or updating data (UPDATE request) to a server. Some other methods of creating APIs include Simple Object Access Protocol (SOAP), GraphQL, and so on."),(0,a.kt)("p",null,"To build an application in which you need data and resources provided and stored by an external source, you'll need an API to request for those resources. Basically, you need two different applications that communicate with each other for exchange of data. In modern web development, this is typically done by creating two different applications (assuming you own the application that stores the data), a client-side application that runs in the browser and a server-side application that runs on the server."),(0,a.kt)("p",null,"In essence, ",(0,a.kt)("strong",{parentName:"p"},"Next.js API Routes")," eliminate the need for creating an additional backend server in your full-stack web applications. With ",(0,a.kt)("strong",{parentName:"p"},"Next.js API Routes"),", you can access or store data in your database like you would if you were using a separate backend application. We will discuss how you can begin using this straightforward approach Next.js provides developers in the next section."),(0,a.kt)("h2",{id:"how-to-create-api-routes-in-nextjs"},"How to create API Routes in Next.js"),(0,a.kt)("p",null,"Creating API Routes in Next.js is similar to how you'd create a page route in Next.js. The only difference being that these API Routes are created in the ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," folder found in the pages folder of your application and any file found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/api")," folder will be treated as an API endpoint. That is, if you have a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"example.js")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/api"),", you can access the API route in your code by making a request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/example"),"."),(0,a.kt)("p",null,"Let's go through an example:"),(0,a.kt)("p",null,"If you open the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," folder in your project root directory, you should see an ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," folder in it (assuming your project was bootstrapped with ",(0,a.kt)("inlineCode",{parentName:"p"},"create-next-app"),". If not, you'll need to create this folder yourself). The ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," folder contains an example API route named ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.js")," with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/hello.js"',title:'"pages/api/hello.js"'},"export default function handler(req, res) {\n  res.status(200).json({ name: 'John Doe' })\n}\n")),(0,a.kt)("p",null,"Navigating to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000/api/hello")," in the browser or making a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request to it returns the following JSON response:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-05-next-api-routes/response.png",alt:"response"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here's an explanation for the above code sample."),(0,a.kt)("p",null,"Every API route or endpoint must export a default function that handles the requests made to that endpoint. The function receives two parameters:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"req"),": An instance of ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpincomingmessage"},"http.IncomingMessage")," which also includes some built-in helpers - or middlewares - such as ",(0,a.kt)("inlineCode",{parentName:"p"},"req.body"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"req.query"),", and so on, for parsing the incoming request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"res"),": An instance of ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpserverresponse"},"http.ServerResponse")," which includes some Express.js-like helper methods such as ",(0,a.kt)("inlineCode",{parentName:"p"},"res.send"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"res.body"),", and so on"),(0,a.kt)("p",null,"These methods should be familiar if you've worked with Node.js and Express.js before."),(0,a.kt)("p",null,"In our example, we're exporting a default function named ",(0,a.kt)("inlineCode",{parentName:"p"},"handler")," - of course this can be named anything you like - and then we're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," server response object to return an HTTP status code and JSON data.  "),(0,a.kt)("p",null,"By default, every HTTP request to the endpoint using any of the HTTP request methods (GET, PUT, DELETE, and so on) will return the same response. To handle different methods in an API route we can write the handler function with ",(0,a.kt)("inlineCode",{parentName:"p"},"switch")," statement (you can also use methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"if/else"),"- whichever works for you, no hard rules!), like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/hello.js"',title:'"pages/api/hello.js"'},"export default function handler(req, res) {\n  const requestMethod = req.method;\n  const body = JSON.parse(req.body);\n  switch (requestMethod) {\n    case 'POST':\n      res.status(200).json({ message: `You submitted the following data: ${body}` })\n      \n    // handle other HTTP methods\n    default:\n      res.status(200).json({ message: 'Welcome to API Routes!'})\n  }\n}\n")),(0,a.kt)("p",null,"Here's another example showing how you can submit data from a form in your application and send it to an API route using a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request method to save in a database."),(0,a.kt)("p",null,"The form in ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/post.js")," below sends a post data to an API route ",(0,a.kt)("inlineCode",{parentName:"p"},"api/post"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/post.js"',title:'"pages/post.js"'},'import { useState } from "react";\n\nconst Post = () => {\n  const [title, setTitle] = useState("");\n  const [post, setPost] = useState("");\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    const postData = async () => {\n      const data = {\n        title: title,\n        post: post,\n      };\n\n      const response = await fetch("/api/post", {\n        method: "POST",\n        body: JSON.stringify(data),\n      });\n      return response.json();\n    };\n    postData().then((data) => {\n      alert(data.message);\n    });\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <label htmlFor="Title">Title</label>\n        <input\n          id="title"\n          type="text"\n          value={title}\n          onChange={(e) => setTitle(e.target.value)}\n        />\n      </div>\n      <div>\n        <label htmlFor="post">Post</label>\n        <input\n          id="post"\n          type="text"\n          value={post}\n          onChange={(e) => setPost(e.target.value)}\n        />\n      </div>\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n\nexport default Post;\n')),(0,a.kt)("p",null,"With the following code in ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/api/post.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/post.js"',title:'"pages/api/post.js"'},'export default function handler(req, res) {\n  const { title, post } = JSON.parse(req.body);\n\n  // Then save the post data to a database\n  res.status(200).json({ message: "Post created successfully" });\n}\n')),(0,a.kt)("h2",{id:"dynamic-api-routes"},"Dynamic API Routes"),(0,a.kt)("p",null,"API Routes in Next.js can also be dynamic. This is similar to how regular dynamic pages work in Next.js. You can read more about dynamic routes ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/routing/dynamic-routes"},"here")," to understand their syntax.\nDynamic API Routes let us send response for different queries to an API endpoint. Let's go through an example."),(0,a.kt)("p",null,"Create a folder named ",(0,a.kt)("inlineCode",{parentName:"p"},"trivia")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/pages/api")," folder of your application. Then in the ",(0,a.kt)("inlineCode",{parentName:"p"},"trivia")," folder create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"[number].js"),". Your folder structure looks like : ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/api/trivia/[number].js"),". "),(0,a.kt)("p",null,"In this example, we're going to return a random fact from an external API (",(0,a.kt)("a",{parentName:"p",href:"http://numbersapi.com/"},"http://numbersapi.com/"),") about every number query we receive on the API endpoint. We'll use ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/superagent"},"superagent")," as the HTTP client for making requests to the external API in our API route."),(0,a.kt)("p",null,"You can install it with the following command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install superagent\n")),(0,a.kt)("p",null,"Next, add the following code to ",(0,a.kt)("inlineCode",{parentName:"p"},"[number].js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/trivia/[number].js"',title:'"pages/api/trivia/[number].js"'},'const superagent = require("superagent");\n\nexport default function handler(req, res) {\n    const number = Number(req.query.number);\n\n  if (isNaN(number) || typeof number !== "number") {\n    res.status(400).send("Invalid request!!");\n  }\n  superagent.get(`http://numbersapi.com/${number}`).then((response) => {\n    res.status(200).send(response.text);\n  });\n}\n')),(0,a.kt)("p",null,"Now if you navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/trivia/34")," or any other random number at the end of the URL a random trivia should be generated for that number and a ",(0,a.kt)("inlineCode",{parentName:"p"},"400")," Bad Request will be returned if an invalid number is used. "),(0,a.kt)("p",null,"Here's a GIF showing an example:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-05-next-api-routes/dynamic-routes.gif",alt:"dynamic API routes"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"api-routes-custom-configuration"},"API Routes custom configuration"),(0,a.kt)("p",null,"In addition to the powerful features of API Routes, Next.js also allows for customization of their default configuration. The default configuration in every API route in Next.js can be customized by exporting a ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," object in the same file. ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," object contains all configuration options that are specific to every API route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/hello.js"',title:'"pages/api/hello.js"'},"export default function handler(req, res) {\n  res.status(200).json({ name: 'John Doe' })\n}\n\nexport const config = {\n  api: {\n    bodyParser: false, // Defaults to true. Setting this to false disables body parsing and allows you to consume the request body as stream or raw-body.\n    responseLimit: false, // Determines how much data should be sent from the response body. It is automatically enabled and defaults to 4mb.\n    externalResolver: true, // Disables warnings for unresolved requests if the route is being handled by an external resolver like Express.js or Connect. Defaults to false.\n  },\n}\n")),(0,a.kt)("p",null,"You can read more about other available configuration options ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/request-helpers#custom-config"},"here"),"."),(0,a.kt)("h2",{id:"typing-api-routes-with-typescript"},"Typing API Routes with TypeScript"),(0,a.kt)("p",null,"Next.js provides automatic types to ensure your API Routes are type-safe and involves zero configuration to set up. "),(0,a.kt)("p",null,"NOTE: You need to have integrated TypeScript in your Next.js project before using these features. Learn how to add TypeScript to your Next.js project ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/typescript"},"here"),"."),(0,a.kt)("h4",{id:"typing-request-and-response-objects"},"Typing ",(0,a.kt)("inlineCode",{parentName:"h4"},"request")," and ",(0,a.kt)("inlineCode",{parentName:"h4"},"response")," objects"),(0,a.kt)("p",null,"Here's how to provide types for the request and response objects with ",(0,a.kt)("inlineCode",{parentName:"p"},"NextApiRequest")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NextApiResponse")," respectively:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/api/hello.ts",title:"pages/api/hello.ts"},"import type { NextApiRequest, NextApiResponse } from 'next'\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n  res.status(200).json({ name: 'John Doe' })\n}\n")),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h4",{id:"typing-response-data"},"Typing response data"),(0,a.kt)("p",null,"We can also type the response data returned from an API endpoint by adding types to ",(0,a.kt)("inlineCode",{parentName:"p"},"res: NextApiResponse"),"."),(0,a.kt)("p",null,"Using the example from dynamic routes section above, we can add types to the response from the API endpoint like below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/trivia/[number].ts"',title:'"pages/api/trivia/[number].ts"'},'import type { NextApiRequest, NextApiResponse } from \'next\'\nconst superagent = require("superagent");\n\ntype ResponseData = string;\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {\n  const number = Number(req.query.number);\n\n  if (isNaN(number) || typeof number !== "number") {\n    res.status(400).send("Invalid request!!");\n  }\n  superagent.get(`http://numbersapi.com/${number}`).then((response) => {\n    res.status(200).send(response.text);\n  });\n}\n')),(0,a.kt)("p",null,"You can learn more about extending the ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," objects with TypeScript ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/request-helpers#extending-the-reqres-objects-with-typescript"},"here"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article we introduced you to ",(0,a.kt)("strong",{parentName:"p"},"API Routes in Next.js")," and how to use them to create API endpoints for your application. You learned how to add custom configurations to API Routes and also how to include typings among other things. Ready to get started with ",(0,a.kt)("strong",{parentName:"p"},"API Routes")," in your next project? Let's know what you build and feel free to reach out if you have any questions. Happy coding!"))}m.isMDXComponent=!0}}]);