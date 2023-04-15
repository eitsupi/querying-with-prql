"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[671],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,o(o({ref:e},d),{},{components:n})):a.createElement(h,o({ref:e},d))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9746:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>d,quartoRawHtml:()=>m,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={toc:[]},o="wrapper";function i(t){let{components:e,...n}=t;return(0,r.kt)(o,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"An unreleased version of DuckDB is used at this time and queries may\ncontain features that are not available in the released version. The\nversions we are currently using are as follows:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"PRQL: 0.8.0"),(0,r.kt)("li",{parentName:"ul"},"DuckDB: 0.7.2-dev1867"))))}i.isMDXComponent=!0;const p={title:"Introduction",jupyter:"python3",sidebar_position:1,slug:"/"},s=void 0,d={unversionedId:"intro",id:"intro",title:"Introduction",description:"introduction}",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/querying-with-prql/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",jupyter:"python3",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Selecting and Filtering",permalink:"/querying-with-prql/indexing"}},u={},m=["<div><style>\n.dataframe > thead > tr > th,\n.dataframe > tbody > tr > td {\n  text-align: right;\n}\n</style>\n<small>shape: (3, 2)</small>","</div>","<div><style>\n.dataframe > thead > tr > th,\n.dataframe > tbody > tr > td {\n  text-align: right;\n}\n</style>\n<small>shape: (3, 2)</small>","</div>","<div><style>\n.dataframe > thead > tr > th,\n.dataframe > tbody > tr > td {\n  text-align: right;\n}\n</style>\n<small>shape: (3, 2)</small>","</div>"],c=[{value:"Motivation",id:"motivation",level:2},{value:"Content and Credit",id:"content-and-credit",level:2},{value:"Running the Code on IPython",id:"running-the-code-on-ipython",level:2},{value:"Setup",id:"setup",level:3},{value:"Combine DuckDB and Polars",id:"combine-duckdb-and-polars",level:3},{value:"License",id:"license",level:2}],h={quartoRawHtml:m,toc:c},k="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This document is an attempt to do some typical table data manipulation\nusing ",(0,r.kt)("a",{parentName:"p",href:"https://prql-lang.org/"},"PRQL")," and ",(0,r.kt)("a",{parentName:"p",href:"https://duckdb.org/"},"DuckDB"),"."),(0,r.kt)("p",null,"PRQL is a in development modern language for data manipulation, and can\nbe compiled to SQL. DuckDB is a modern in-memory SQL OLAP (",(0,r.kt)("a",{parentName:"p",href:"https://duckdblabs.github.io/db-benchmark/"},"very\nfast"),") database management\nsystem."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"CLI, JavaScript, Python, R, etc., we can combine PRQL compiler and\nDuckDB in various places to manipulate data with PRQL."),(0,r.kt)("p",null,"At the same time, new features are being added to DuckDB\u2019s SQL on a\nconstant basis, and the syntax is becoming more friendly."),(0,r.kt)("p",null,"So, I thought that by comparing PRQL and the latest DuckDB SQL (and\nother query libraries), we could clarify the missing features of the\nPRQL and highlight the latest features of DuckDB."),(0,r.kt)("h2",{id:"content-and-credit"},"Content and Credit"),(0,r.kt)("p",null,"The content of each data manipulation is based on the awesome ",(0,r.kt)("a",{parentName:"p",href:"https://kevinheavey.github.io/modern-polars/"},"Modern\nPolars")," book by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kevinheavey"},"Kevin\nHeavey"),". And furthermore its origin is\n",(0,r.kt)("a",{parentName:"p",href:"https://tomaugspurger.github.io/posts/modern-1-intro/"},"Modern Pandas"),"\nby ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TomAugspurger"},"Tom Augsburger"),"."),(0,r.kt)("p",null,"Each query is side-by-side with that of the original ",(0,r.kt)("a",{parentName:"p",href:"https://pola-rs.github.io/polars/py-polars/html/reference/"},"Python\nPolars")," one\nand the equivalent operations in PRQL, DuckDB SQL, and\n",(0,r.kt)("a",{parentName:"p",href:"https://dplyr.tidyverse.org/"},"dplyr")," (R)."),(0,r.kt)("p",null,"Since this document focuses on the differences between the grammars of\nthe different languages and does not go into detail about the processing\ndetails, I suggest that you also check out the original excellent\nartcles and book."),(0,r.kt)(i,{mdxType:"VesionInfo"}),(0,r.kt)("h2",{id:"running-the-code-on-ipython"},"Running the Code on IPython"),(0,r.kt)("p",null,"As mentioned above, PRQL and DuckDB can run on a variety of languages.\nThis section describes, as an example, the use of IPython for easy\ninteractive execution of PRQL, SQL, and Polars."),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"This command installs the necessary Python packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"python -m pip install pyprql polars[pyarrow]\n")),(0,r.kt)("p",null,"Then, we can start ",(0,r.kt)("inlineCode",{parentName:"p"},"ipython"),"."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"load_ext")," magic to activate PRQL magic (from\n",(0,r.kt)("a",{parentName:"p",href:"https://pyprql.readthedocs.io/"},"pyprql"),") and SQL magic (from\n",(0,r.kt)("a",{parentName:"p",href:"https://jupysql.ploomber.io/"},"jupysql"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%load_ext pyprql.magic\n%load_ext sql\n")),(0,r.kt)("p",null,"Use SQL magic connects to DuckDB in-memory database. Note that PRQL\nmagic shares the connection with SQL magic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%sql duckdb://\n")),(0,r.kt)("h3",{id:"combine-duckdb-and-polars"},"Combine DuckDB and Polars"),(0,r.kt)("p",null,"By setting ",(0,r.kt)("inlineCode",{parentName:"p"},"autopolars")," config, the results of PRQL and SQL executions\ncan be converted to polars.DataFrame."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%config PrqlMagic.autopolars = True\n%config SqlMagic.autopolars = True\n")),(0,r.kt)("p",null,"Also, since DuckDB can execute queries against polars.DataFrame and\npolars.LazyFrame etc., these can be referenced directly from PRQL or\nSQL, as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import polars as pl\n\nlf = pl.LazyFrame({"a": list(range(1, 6))})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%prql\nfrom lf\nderive b = a * 5\ntake 3\n")),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:m[0]}}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"a"),(0,r.kt)("th",{parentName:"tr",align:null},"b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i64"),(0,r.kt)("td",{parentName:"tr",align:null},"i64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"15")))),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:m[1]}}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%sql\nSELECT\n  a,\n  a * 5 AS b\nFROM lf\nLIMIT 3\n")),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:m[2]}}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"a"),(0,r.kt)("th",{parentName:"tr",align:null},"b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i64"),(0,r.kt)("td",{parentName:"tr",align:null},"i64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"15")))),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:m[3]}}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'lf.with_columns(b=pl.col("a") * 5).head(3).collect()\n')),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:m[4]}}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"a"),(0,r.kt)("th",{parentName:"tr",align:null},"b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i64"),(0,r.kt)("td",{parentName:"tr",align:null},"i64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"15")))),(0,r.kt)("div",{dangerouslySetInnerHTML:{__html:m[5]}}),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"This website\u2019s content is licensed under the MIT license."))}g.isMDXComponent=!0}}]);