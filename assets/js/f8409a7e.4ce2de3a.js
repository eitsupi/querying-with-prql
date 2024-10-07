"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[903],{6045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,quartoRawHtml:()=>p,toc:()=>m});var a=t(4848),r=t(8453),s=t(1470),l=t(9365);function o(e){const n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(n.admonition,{type:"important",children:[(0,a.jsx)(n.p,{children:"The versions we are currently using are as follows:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"PRQL: 0.13.0"}),"\n",(0,a.jsx)(n.li,{children:"DuckDB: v1.1.0"}),"\n"]})]})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}const d={title:"Introduction",jupyter:"python3",sidebar_position:1,slug:"/"},c=void 0,u={id:"intro",title:"Introduction",description:"This document is an attempt to do some typical table data manipulation",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/querying-with-prql/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",jupyter:"python3",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Selecting and Filtering",permalink:"/querying-with-prql/indexing"}},h={},p=["<div><style>\n.dataframe > thead > tr,\n.dataframe > tbody > tr {\n  text-align: right;\n  white-space: pre-wrap;\n}\n</style>\n<small>shape: (3, 2)</small>",'\n<table class="dataframe" data-quarto-postprocess="true" data-border="1">\n<thead>\n<tr class="header">\n<th data-quarto-table-cell-role="th">a</th>\n<th data-quarto-table-cell-role="th">b</th>\n</tr>\n<tr class="odd">\n<th>i64</th>\n<th>i64</th>\n</tr>\n</thead>\n<tbody>\n<tr class="odd">\n<td>1</td>\n<td>5</td>\n</tr>\n<tr class="even">\n<td>2</td>\n<td>10</td>\n</tr>\n<tr class="odd">\n<td>3</td>\n<td>15</td>\n</tr>\n</tbody>\n</table>\n',"</div>","<div><style>\n.dataframe > thead > tr,\n.dataframe > tbody > tr {\n  text-align: right;\n  white-space: pre-wrap;\n}\n</style>\n<small>shape: (3, 2)</small>",'\n<table class="dataframe" data-quarto-postprocess="true" data-border="1">\n<thead>\n<tr class="header">\n<th data-quarto-table-cell-role="th">a</th>\n<th data-quarto-table-cell-role="th">b</th>\n</tr>\n<tr class="odd">\n<th>i64</th>\n<th>i64</th>\n</tr>\n</thead>\n<tbody>\n<tr class="odd">\n<td>1</td>\n<td>5</td>\n</tr>\n<tr class="even">\n<td>2</td>\n<td>10</td>\n</tr>\n<tr class="odd">\n<td>3</td>\n<td>15</td>\n</tr>\n</tbody>\n</table>\n',"</div>","<div><style>\n.dataframe > thead > tr,\n.dataframe > tbody > tr {\n  text-align: right;\n  white-space: pre-wrap;\n}\n</style>\n<small>shape: (3, 2)</small>",'\n<table class="dataframe" data-quarto-postprocess="true" data-border="1">\n<thead>\n<tr class="header">\n<th data-quarto-table-cell-role="th">a</th>\n<th data-quarto-table-cell-role="th">b</th>\n</tr>\n<tr class="odd">\n<th>i64</th>\n<th>i64</th>\n</tr>\n</thead>\n<tbody>\n<tr class="odd">\n<td>1</td>\n<td>5</td>\n</tr>\n<tr class="even">\n<td>2</td>\n<td>10</td>\n</tr>\n<tr class="odd">\n<td>3</td>\n<td>15</td>\n</tr>\n</tbody>\n</table>\n',"</div>"],m=[{value:"Motivation",id:"motivation",level:2},{value:"Content and Credit",id:"content-and-credit",level:2},{value:"Running the Code on IPython",id:"running-the-code-on-ipython",level:2},{value:"Setup",id:"setup",level:3},{value:"Combine DuckDB and Polars",id:"combine-duckdb-and-polars",level:3},{value:"License",id:"license",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This document is an attempt to do some typical table data manipulation\nusing ",(0,a.jsx)(n.a,{href:"https://prql-lang.org/",children:"PRQL"})," and ",(0,a.jsx)(n.a,{href:"https://duckdb.org/",children:"DuckDB"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["PRQL is a in development modern language for data manipulation, and can\nbe compiled to SQL. DuckDB is a modern in-memory SQL OLAP (",(0,a.jsx)(n.a,{href:"https://duckdblabs.github.io/db-benchmark/",children:"very\nfast"}),") database management\nsystem."]}),"\n",(0,a.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,a.jsx)(n.p,{children:"CLI, JavaScript, Python, R, etc., we can combine PRQL compiler and\nDuckDB in various places to manipulate data with PRQL."}),"\n",(0,a.jsx)(n.p,{children:"At the same time, new features are being added to DuckDB\u2019s SQL on a\nconstant basis, and the syntax is becoming more friendly."}),"\n",(0,a.jsx)(n.p,{children:"So, I thought that by comparing PRQL and the latest DuckDB SQL (and\nother query libraries), we could clarify the missing features of the\nPRQL and highlight the latest features of DuckDB."}),"\n",(0,a.jsx)(n.h2,{id:"content-and-credit",children:"Content and Credit"}),"\n",(0,a.jsxs)(n.p,{children:["The content of each data manipulation is based on the awesome ",(0,a.jsx)(n.a,{href:"https://kevinheavey.github.io/modern-polars/",children:"Modern\nPolars"})," book by ",(0,a.jsx)(n.a,{href:"https://github.com/kevinheavey",children:"Kevin\nHeavey"}),". And furthermore its origin is\n",(0,a.jsx)(n.a,{href:"https://tomaugspurger.github.io/posts/modern-1-intro/",children:"Modern Pandas"}),"\nby ",(0,a.jsx)(n.a,{href:"https://github.com/TomAugspurger",children:"Tom Augsburger"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Each query is side-by-side with that of the original ",(0,a.jsx)(n.a,{href:"https://pola-rs.github.io/polars/py-polars/html/reference/",children:"Python\nPolars"})," one\nand the equivalent operations in PRQL, DuckDB SQL, and\n",(0,a.jsx)(n.a,{href:"https://dplyr.tidyverse.org/",children:"dplyr"})," (R)."]}),"\n",(0,a.jsx)(n.p,{children:"Since this document focuses on the differences between the grammars of\nthe different languages and does not go into detail about the processing\ndetails, I suggest that you also check out the original excellent\nartcles and book."}),"\n","\n",(0,a.jsx)(i,{}),"\n",(0,a.jsx)(n.h2,{id:"running-the-code-on-ipython",children:"Running the Code on IPython"}),"\n",(0,a.jsx)(n.p,{children:"As mentioned above, PRQL and DuckDB can run on a variety of languages.\nThis section describes, as an example, the use of IPython for easy\ninteractive execution of PRQL, SQL, and Polars."}),"\n",(0,a.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.p,{children:"This command installs the necessary Python packages."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'showLineNumbers title="Terminal"',children:"python -m pip install pyprql polars[pyarrow]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, we can start ",(0,a.jsx)(n.code,{children:"ipython"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.code,{children:"load_ext"})," magic to activate PRQL magic (from\n",(0,a.jsx)(n.a,{href:"https://pyprql.readthedocs.io/",children:"pyprql"}),") and SQL magic (from\n",(0,a.jsx)(n.a,{href:"https://jupysql.ploomber.io/",children:"jupysql"}),")."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:"%load_ext pyprql.magic\n%load_ext sql\n"})}),"\n",(0,a.jsx)(n.p,{children:"Use SQL magic connects to DuckDB in-memory database. Note that PRQL\nmagic shares the connection with SQL magic."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:"%sql duckdb://\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To fix the SQL dialect used inside PRQL magic, we need to set the target\nwith config magic. By setting ",(0,a.jsx)(n.code,{children:'"sql.duckdb"'})," here, we can specify to the\nPRQL compiler that it should generate optimized SQL for DuckDB."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:'%config PrqlMagic.target = "sql.duckdb"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["All available targets can be found in the ",(0,a.jsx)(n.code,{children:"prqlc.get_targets"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:"import prqlc\n\nprint(prqlc.get_targets())\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"['sql.any', 'sql.ansi', 'sql.bigquery', 'sql.clickhouse', 'sql.duckdb', 'sql.generic', 'sql.glaredb', 'sql.mssql', 'sql.mysql', 'sql.postgres', 'sql.sqlite', 'sql.snowflake']\n"})}),"\n",(0,a.jsx)(n.h3,{id:"combine-duckdb-and-polars",children:"Combine DuckDB and Polars"}),"\n",(0,a.jsxs)(n.p,{children:["By setting ",(0,a.jsx)(n.code,{children:"autopolars"})," config, the results of PRQL and SQL executions\ncan be converted to polars.DataFrame."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:"%config PrqlMagic.autopolars = True\n%config SqlMagic.autopolars = True\n"})}),"\n",(0,a.jsx)(n.p,{children:"Also, since DuckDB can execute queries against polars.DataFrame and\npolars.LazyFrame etc., these can be referenced directly from PRQL or\nSQL, as shown below."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:'import polars as pl\n\nlf = pl.LazyFrame({"a": list(range(1, 6))})\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"important",children:[(0,a.jsx)(n.p,{children:"With JupySQL 0.10.14 and DuckDB 1.1, the following setting is needed to\nscan all frames in Python."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:"%%sql\nset python_scan_all_frames=true\n"})})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsxs)(l.A,{value:"PRQL DuckDB",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:"%%prql\nfrom lf\nderive b = a * 5\ntake 3\n"})}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:p[0]}}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:p[1]}}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:p[2]}})]}),(0,a.jsxs)(l.A,{value:"SQL DuckDB",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:"%%sql\nSELECT\n  a,\n  a * 5 AS b\nFROM lf\nLIMIT 3\n"})}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:p[3]}}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:p[4]}}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:p[5]}})]}),(0,a.jsxs)(l.A,{value:"Python Polars",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'showLineNumbers title="IPython"',children:'lf.with_columns(b=pl.col("a") * 5).head(3).collect()\n'})}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:p[6]}}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:p[7]}}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:p[8]}})]})]}),"\n",(0,a.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,a.jsx)(n.p,{children:"This website\u2019s content is licensed under the MIT license."})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>q});var a=t(6540),r=t(4164),s=t(3104),l=t(6347),o=t(205),i=t(7485),d=t(1682),c=t(679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,u]=m({queryString:t,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=d??g;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(d(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,y.jsx)(x,{...n,...e}),(0,y.jsx)(v,{...n,...e})]})}function q(e){const n=(0,b.A)();return(0,y.jsx)(j,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);