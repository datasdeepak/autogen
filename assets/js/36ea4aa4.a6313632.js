"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||g[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1033:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"llava_agent",title:"agentchat.contrib.llava_agent"},o=void 0,i={unversionedId:"reference/agentchat/contrib/llava_agent",id:"reference/agentchat/contrib/llava_agent",isDocsHomePage:!1,title:"agentchat.contrib.llava_agent",description:"LLaVAAgent Objects",source:"@site/docs/reference/agentchat/contrib/llava_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/llava_agent",permalink:"/autogen/docs/reference/agentchat/contrib/llava_agent",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/llava_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"llava_agent",title:"agentchat.contrib.llava_agent"},sidebar:"referenceSideBar",previous:{title:"compressible_agent",permalink:"/autogen/docs/reference/agentchat/contrib/compressible_agent"},next:{title:"math_user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/contrib/math_user_proxy_agent"}},c=[{value:"LLaVAAgent Objects",id:"llavaagent-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"llava_call",id:"llava_call",children:[],level:4}],level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"llavaagent-objects"},"LLaVAAgent Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class LLaVAAgent(MultimodalConversableAgent)\n")),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(name: str,\n             system_message: Optional[Tuple[str,\n                                            List]] = DEFAULT_LLAVA_SYS_MSG,\n             *args,\n             **kwargs)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ",(0,r.kt)("em",{parentName:"li"},"str")," - agent name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"system_message")," ",(0,r.kt)("em",{parentName:"li"},"str")," - system message for the ChatCompletion inference.\nPlease override this attribute if you want to reprogram the agent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," ",(0,r.kt)("em",{parentName:"li"},"dict")," - Please refer to other kwargs in\n",(0,r.kt)("a",{parentName:"li",href:"../conversable_agent#__init__"},"ConversableAgent"),".")),(0,r.kt)("h4",{id:"llava_call"},"llava","_","call"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def llava_call(prompt: str, llm_config: dict) -> str\n")),(0,r.kt)("p",null,"Makes a call to the LLaVA service to generate text based on a given prompt"))}p.isMDXComponent=!0}}]);