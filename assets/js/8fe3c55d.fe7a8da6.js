"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38378],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),g=a,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},32249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>u});t(37953);var r=t(58860);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={id:"ethereum-signin",title:"Sign in with Ethereum Web3 Wallet"},l=void 0,d={unversionedId:"advanced-tutorials/web3/ethereum-signin",id:"advanced-tutorials/web3/ethereum-signin",title:"Sign in with Ethereum Web3 Wallet",description:"Introduction",source:"@site/docs/advanced-tutorials/web3/ethereum-signin.md",sourceDirName:"advanced-tutorials/web3",slug:"/advanced-tutorials/web3/ethereum-signin",permalink:"/docs/advanced-tutorials/web3/ethereum-signin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/web3/ethereum-signin.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716216871,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"ethereum-signin",title:"Sign in with Ethereum Web3 Wallet"},sidebar:"mainSidebar",previous:{title:"Multipart Upload",permalink:"/docs/advanced-tutorials/upload/multipart-upload"},next:{title:"Development",permalink:"/docs/guides-concepts/development/"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Configure Refine Auth provider",id:"configure-refine-auth-provider",level:2},{value:"Override Login page\u200b",id:"override-login-page",level:3},{value:"Create Dashboard",id:"create-dashboard",level:2},{value:"Send Test Ethereum with Refine Dashboard",id:"send-test-ethereum-with-refine-dashboard",level:2},{value:"Example",id:"example",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},g=p("DocThumbsUpDownFeedbackWidget"),m=p("InstallPackagesCommand"),y=p("CodeSandboxExample"),h={toc:u},f="wrapper";function b(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(f,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)(g,{id:"introduction",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"In this guide, you will examine what a web3 wallet is, how to sign in to your wallet, and how to use the popular wallet ",(0,r.yg)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),". We will learn to log in to your Metamask wallet using ",(0,r.yg)("strong",{parentName:"p"},"Refine")," and ",(0,r.yg)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.5.2/"},"Web3"),"."),(0,r.yg)("p",null,"A web3 wallet is a software that allows you to send, receive, or store cryptocurrency securely without the need for a 3rd party. Web3 wallet is your key to accessing your cryptocurrency. If you want to send cryptocurrency or receive it you will need a wallet."),(0,r.yg)("p",null,"We will show you how to log in to your Metamask wallet with ",(0,r.yg)("strong",{parentName:"p"},"Refine"),".")),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)(g,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will need ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ChainSafe/web3.js"},"web3")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/web3modal/web3modal"},"web3-modal")," packages in our project. Let's start by downloading these packages."),(0,r.yg)(m,{args:"web3 web3modal",mdxType:"InstallPackagesCommand"}),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package."))),(0,r.yg)("h2",{id:"configure-refine-auth-provider"},"Configure Refine Auth provider"),(0,r.yg)(g,{id:"configure-refine-auth-provider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"First, we need to define a web3modal and create a provider. We can get information about the wallet by connecting this provider that we have created to web3."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"In this example, we will show the login with Metamask Wallet. If you want, you can connect to other wallets using web3modal's providers.")),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Show Code"),(0,r.yg)("p",null,(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/authprovider.ts"',title:'"/src/authprovider.ts"'},'import { AuthProvider } from "@refinedev/core";\nimport Web3 from "web3";\nimport Web3Modal from "web3modal";\n\nimport { getBalance } from "./utility";\n\nexport const TOKEN_KEY = "refine-auth";\n\nconst providerOptions = {};\nconst web3Modal = new Web3Modal({\n  cacheProvider: true,\n  providerOptions,\n});\n\nlet provider: any | null = null;\n\nexport const authProvider: AuthProvider = {\n  login: async () => {\n    if (window.ethereum) {\n      provider = await web3Modal.connect();\n      const web3 = new Web3(provider);\n      const accounts = await web3.eth.getAccounts();\n      localStorage.setItem(TOKEN_KEY, accounts[0]);\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    } else {\n      return {\n        success: false,\n        error: new Error(\n          "Not set ethereum wallet or invalid. You need to install Metamask",\n        ),\n      };\n    }\n  },\n  logout: async () => {\n    localStorage.removeItem(TOKEN_KEY);\n    if (provider && provider.close) {\n      await provider.close;\n\n      provider = null;\n      await web3Modal.clearCachedProvider();\n    }\n    return {\n      success: true,\n      redirectTo: "/login",\n    };\n  },\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  check: async () => {\n    const token = localStorage.getItem(TOKEN_KEY);\n    if (token) {\n      return {\n        authenticated: true,\n      };\n    }\n\n    return {\n      authenticated: false,\n      redirectTo: "/login",\n      logout: true,\n    };\n  },\n  getPermissions: async () => null,\n  getIdentity: async () => {\n    const address = localStorage.getItem(TOKEN_KEY);\n    if (!address) {\n      return null;\n    }\n\n    const balance = await getBalance(address);\n\n    return {\n      address,\n      balance,\n    };\n  },\n};\n')))),(0,r.yg)("p",null,"We use web3's ",(0,r.yg)("inlineCode",{parentName:"p"},"getBalance()")," function to find out the ethereum amount of the account logged in."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/utility.ts"',title:'"src/utility.ts"'},'const web3 = new Web3(window.ethereum);\n\nexport const getBalance = async (account: string): Promise<string> => {\n  return new Promise((resolve, reject) => {\n    web3.eth.getBalance(account, (err: any, result: any) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(web3.utils.fromWei(result, "ether"));\n      }\n    });\n  });\n};\n'))),(0,r.yg)("h3",{id:"override-login-page"},"Override Login page\u200b"),(0,r.yg)(g,{id:"override-login-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We need to override the Refine login page. In this way, we will redirect it to the Metamask Wallet login page. We create a ",(0,r.yg)("inlineCode",{parentName:"p"},"login.tsx")," file in the /pages folder."),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Show Code"),(0,r.yg)("p",null,(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/page/login.tsx"',title:'"/src/page/login.tsx"'},'import { Layout, Button, Space, Typography } from "antd";\nimport { ThemedTitleV2 } from "@refinedev/antd";\n// highlight-next-line\nimport { useLogin } from "@refinedev/core";\n\nexport const Login: React.FC = () => {\n  // highlight-next-line\n  const { mutate: login, isLoading } = useLogin();\n\n  return (\n    <Layout\n      style={{\n        height: "100vh",\n        justifyContent: "center",\n        alignItems: "center",\n      }}\n    >\n      <Space direction="vertical" align="center" size="large">\n        <ThemedTitleV2\n          collapsed={false}\n          wrapperStyles={{\n            fontSize: "22px",\n          }}\n        />\n        <Button\n          type="primary"\n          size="middle"\n          loading={isLoading}\n          onClick={() => login({})}\n        >\n          Sign in with Ethereum\n        </Button>\n        <Typography.Text type="secondary">Powered by Auth0</Typography.Text>\n      </Space>\n    </Layout>\n  );\n};\n')))),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/web3/login-min.gif",alt:"ethereum-login",className:"border border-gray-200 rounded"})),(0,r.yg)("h2",{id:"create-dashboard"},"Create Dashboard"),(0,r.yg)(g,{id:"create-dashboard",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"After connecting with our account, we can now retrieve account information. We will display this information on the dashboard of the ",(0,r.yg)("strong",{parentName:"p"},"Refine"),"."),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Show Code"),(0,r.yg)("p",null,(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/dashboard.tsx"',title:'"src/pages/dashboard.tsx"'},'import React from "react";\nimport { useGetIdentity } from "@refinedev/core";\nimport { useModal } from "@refinedev/antd";\nimport {\n  Row,\n  Col,\n  Card,\n  Typography,\n  Space,\n  Button,\n  Modal,\n  Form,\n  Input,\n} from "antd";\n\nconst { Text } = Typography;\n\nexport const DashboardPage: React.FC = () => {\n  const { data, isLoading } = useGetIdentity<{\n    address: string;\n    balance: string;\n  }>();\n\n  return (\n    <Row gutter={24}>\n      <Col span={12}>\n        <Card\n          title="Ethereum Public ID"\n          style={{ height: "150px", borderRadius: "15px" }}\n          headStyle={{ textAlign: "center" }}\n        >\n          <Space align="center" direction="horizontal">\n            <Text>{isLoading ? "loading" : data?.address}</Text>\n          </Space>\n        </Card>\n      </Col>\n      <Col span={8}>\n        <Card\n          title="Account Balance"\n          style={{ height: "150px", borderRadius: "15px" }}\n          headStyle={{ textAlign: "center" }}\n        >\n          <Text>{`${isLoading ? "loading" : data?.balance} Ether`}</Text>\n        </Card>\n      </Col>\n    </Row>\n  );\n};\n')))),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/web3/dashboard.jpg",alt:"refine-dashboard",className:"border border-gray-200 rounded"}),(0,r.yg)("p",null,"Now lets customize ",(0,r.yg)("strong",{parentName:"p"},"Refine")," dashboard. Send your test ethereum via ",(0,r.yg)("strong",{parentName:"p"},"Refine")," dashboard and Metamask.")),(0,r.yg)("h2",{id:"send-test-ethereum-with-refine-dashboard"},"Send Test Ethereum with Refine Dashboard"),(0,r.yg)(g,{id:"send-test-ethereum-with-refine-dashboard",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Here we use the ",(0,r.yg)("inlineCode",{parentName:"p"},"sendTransaction")," function to send ethereum with your browser-enabled web3 wallet."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/utility.ts"',title:'"src/utility.ts"'},'export const sendEthereum = async (\n  sender: string,\n  receiver: string,\n  amount: string,\n) => {\n  try {\n    const params = {\n      from: sender,\n      to: receiver,\n      value: web3.utils.toHex(web3.utils.toWei(amount, "ether")),\n      gas: 39000,\n    };\n    await window.ethereum.enable();\n    return await web3.eth.sendTransaction(params);\n  } catch (error) {\n    new Error("Something went wrong!");\n  }\n};\n')),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Show Code"),(0,r.yg)("p",null,(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/dashboard.tsx"',title:'"src/pages/dashboard.tsx"'},'import React, { useState } from "react";\nimport { useGetIdentity } from "@refinedev/core";\nimport { useModal } from "@refinedev/antd";\nimport {\n  Row,\n  Col,\n  Card,\n  Typography,\n  Space,\n  Button,\n  Modal,\n  Form,\n  Input,\n  notification,\n} from "antd";\n\nimport { sendEthereum } from "../utility";\n\nconst { Text } = Typography;\n\nexport const DashboardPage: React.FC = () => {\n  const { data, isLoading } = useGetIdentity<{\n    address: string;\n    balance: string;\n  }>();\n  const { modalProps, show, close } = useModal();\n  const [form] = Form.useForm();\n  const [loading, setLoading] = useState(false);\n\n  const handleModal = async (values: any) => {\n    setLoading(true);\n    const tx: any | undefined = await sendEthereum(\n      data?.address!!,\n      values.receiver,\n      values.amount,\n    );\n    const status = tx ? tx.status : undefined;\n    setLoading(false);\n\n    if (status) {\n      close();\n      notification["success"]({\n        message: "Transaction Success",\n        description: "Transaction successful you can check on Etherscan.io",\n      });\n    } else {\n      notification["warning"]({\n        message: "Transaction Failed",\n        description: "Transaction failed try again",\n      });\n    }\n  };\n\n  return (\n    <>\n      <Row gutter={24}>\n        <Col span={12}>\n          <Card\n            title="Ethereum Public ID"\n            style={{ height: "150px", borderRadius: "15px" }}\n            headStyle={{ textAlign: "center" }}\n          >\n            <Space align="center" direction="horizontal">\n              <Text>{isLoading ? "loading" : data?.address}</Text>\n            </Space>\n          </Card>\n        </Col>\n        <Col span={8}>\n          <Card\n            title="Account Balance"\n            style={{ height: "150px", borderRadius: "15px" }}\n            headStyle={{ textAlign: "center" }}\n          >\n            <Text>{`${isLoading ? "loading" : data?.balance} Ether`}</Text>\n          </Card>\n        </Col>\n        <Col span={12}>\n          <Button\n            style={{ maxWidth: 300, marginTop: 24 }}\n            type="primary"\n            size="large"\n            onClick={() => show()}\n          >\n            Send Ethereum\n          </Button>\n          <Button\n            style={{ maxWidth: 300, marginTop: 24, marginLeft: 12 }}\n            type="primary"\n            size="large"\n            href={`https://ropsten.etherscan.io/address/${data?.address}`}\n          >\n            View on Etherscan\n          </Button>\n        </Col>\n      </Row>\n      <Modal\n        {...modalProps}\n        okText={"Send"}\n        title={"Send Test Ethereum via Ropsten Chain"}\n        onOk={form.submit}\n        okButtonProps={{ loading: loading }}\n      >\n        <Form layout="vertical" onFinish={handleModal} form={form}>\n          <Form.Item name="receiver" label="Receiver Public Address">\n            <Input />\n          </Form.Item>\n          <Form.Item name="amount" label="Amaount Ether">\n            <Input />\n          </Form.Item>\n        </Form>\n      </Modal>\n    </>\n  );\n};\n')))),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/web3/customize.jpg",alt:"refine-customize",className:"border border-gray-200 rounded"}),(0,r.yg)("p",null,"We can now request to send ethereum through our ",(0,r.yg)("strong",{parentName:"p"},"Refine")," dashboard and also view your account details on ",(0,r.yg)("a",{parentName:"p",href:"https://ropsten.etherscan.io/"},"Etherscan Ropsten Test Network")),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/web3/overview-min.gif",alt:"refine-overview",className:"border border-gray-200 rounded"})),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(g,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(y,{path:"with-web3",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);