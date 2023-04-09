"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Introduction",engine:"knitr",sidebar_position:1,slug:"/"},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"introduction}",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/querying-with-prql/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",engine:"knitr",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Selecting and Filtering",permalink:"/querying-with-prql/indexing"}},u={},l=[],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This document is an attempt to do some typical table data manipulation\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://prql-lang.org/"},"PRQL")," and ",(0,o.kt)("a",{parentName:"p",href:"https://duckdb.org/"},"DuckDB"),"."),(0,o.kt)("p",null,"The content of each data manipulation is based on the awesome ",(0,o.kt)("a",{parentName:"p",href:"https://kevinheavey.github.io/modern-polars/"},"Modern\nPolars")," book by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kevinheavey"},"Kevin\nHeavey"),". And furthermore its origin is\n",(0,o.kt)("a",{parentName:"p",href:"https://tomaugspurger.github.io/posts/modern-1-intro/"},"Modern Pandas"),"\nby ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TomAugspurger"},"Tom Augsburger"),"."),(0,o.kt)("p",null,"Each query is side-by-side with that of the original Polars one and the\nequivalent operations in PRQL, DuckDB SQL, and\n",(0,o.kt)("a",{parentName:"p",href:"https://dplyr.tidyverse.org/"},"dplyr")," (R)."),(0,o.kt)("p",null,"Since this document focuses on the differences between the grammars of\nthe different languages and does not go into detail about the processing\ndetails, I suggest that you also check out the original excellent\nartcles and book."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"An unreleased version of DuckDB is used at this time and queries may\ncontain features that are not available in the released version. The\nversions we are currently using are as follows:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"PRQL: 0.6.1"),(0,o.kt)("li",{parentName:"ul"},"DuckDB: 0.7.2-dev1625"))))}d.isMDXComponent=!0}}]);