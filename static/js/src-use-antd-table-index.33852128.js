(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"../../react-use/esm/useUpdateEffect.js":function(e,t,n){"use strict";var a=n("react");t.a=function(e,t){var n=Object(a.useRef)(!0);Object(a.useEffect)(function(){if(!n.current)return e();n.current=!1},t)}},"./src/useAntdTable/index.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),r=n("./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/slicedToArray.js"),l=(n("./node_modules/_antd@3.21.4@antd/es/table/style/index.js"),n("./node_modules/_antd@3.21.4@antd/es/table/index.js")),A=(n("./node_modules/_antd@3.21.4@antd/es/select/style/index.js"),n("./node_modules/_antd@3.21.4@antd/es/select/index.js")),i=(n("./node_modules/_antd@3.21.4@antd/es/row/style/index.js"),n("./node_modules/_antd@3.21.4@antd/es/row/index.js")),s=(n("./node_modules/_antd@3.21.4@antd/es/input/style/index.js"),n("./node_modules/_antd@3.21.4@antd/es/input/index.js")),c=(n("./node_modules/_antd@3.21.4@antd/es/form/style/index.js"),n("./node_modules/_antd@3.21.4@antd/es/form/index.js")),b=(n("./node_modules/_antd@3.21.4@antd/es/col/style/index.js"),n("./node_modules/_antd@3.21.4@antd/es/col/index.js")),o=(n("./node_modules/_antd@3.21.4@antd/es/button/style/index.js"),n("./node_modules/_antd@3.21.4@antd/es/button/index.js")),g=n("./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=n("react"),u=n.n(d),m=n("./node_modules/_@mdx-js_react@1.3.0@@mdx-js/react/dist/index.es.js"),p=n("./node_modules/_docz@1.2.0@docz/dist/index.esm.js"),j=n("./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/defineProperty.js"),O=n("./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/classCallCheck.js"),B=n("../../react-use/esm/useUpdateEffect.js");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}"undefined"!==typeof ReturnValue&&ReturnValue&&ReturnValue===Object(ReturnValue)&&Object.isExtensible(ReturnValue)&&Object.defineProperty(ReturnValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReturnValue",filename:"src/useAntdTable/index.ts"}}),"undefined"!==typeof Options&&Options&&Options===Object(Options)&&Object.isExtensible(Options)&&Object.defineProperty(Options,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Options",filename:"src/useAntdTable/index.ts"}}),"undefined"!==typeof FnParams&&FnParams&&FnParams===Object(FnParams)&&Object.isExtensible(FnParams)&&Object.defineProperty(FnParams,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FnParams",filename:"src/useAntdTable/index.ts"}});var w=new function e(){Object(O.a)(this,e),this.searchType="simple",this.loading=!1,this.current=1,this.pageSize=10,this.total=0,this.formData={simple:{},advance:{}},this.data=null,this.count=0},D={},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateState":return h({},e,{},t.payload);case"updateFormData":return h({},e,{formData:h({},e.formData,{},t.payload)});default:throw new Error}};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.defaultPageSize,l=void 0===a?10:a,A=n.id,i=n.form,s=n.formatResult,c=Object(d.useReducer)(E,h({},w,{pageSize:l})),b=Object(r.a)(c,2),o=b[0],g=b[1],u=Object(d.useRef)({}),m=Object(d.useRef)(0);u.current=o;var p=function(){g({type:"updateState",payload:{current:1,count:o.count+1}})};Object(d.useEffect)(function(){if(A){if(D[A]){var e=D[A];if(g({type:"updateState",payload:{current:e.current,pageSize:e.pageSize,searchType:e.searchType,formData:e.formData,count:o.count+1}}),i){var t=e.formData[e.searchType];i.setFieldsValue(t)}}else g({type:"updateState",payload:{count:o.count+1}});return function(){D[A]=u.current}}return g({type:"updateState",payload:{count:o.count+1}}),function(){}},[]),Object(B.a)(function(){p()},t),Object(B.a)(function(){m.current+=1;var t=m.current;g({type:"updateState",payload:{loading:!0}});var n=i?o.formData[o.searchType]:{};e(h({current:o.current,pageSize:o.pageSize},n)).then(function(e){if(t===m.current){var n=e;s&&(n=s(e)),g({type:"updateState",payload:h({loading:!1},n)})}})},[o.current,o.pageSize,o.count]);var O={table:{dataSource:o.data,loading:o.loading,onChange:function(e){g({type:"updateState",payload:{current:e.current,pageSize:e.pageSize}})},pagination:{current:o.current,pageSize:o.pageSize,total:o.total}},refresh:function(){g({type:"updateState",payload:{count:o.count+1}})}};return i&&(O.search={submit:function(e){if(i){e&&e.preventDefault&&e.preventDefault();var t=i.getFieldsValue(),n={};Object.keys(t).forEach(function(e){i.getFieldInstance&&i.getFieldInstance(e)&&(n[e]=t[e])}),g({type:"updateFormData",payload:Object(j.a)({},o.searchType,n)}),p()}},type:o.searchType,changeType:function(){if(i){i.resetFields();var e="simple"===o.searchType?"advance":"simple";g({type:"updateState",payload:{searchType:e}});var t=o.formData[e];i.setFieldsValue(t),p()}}}),O}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useAntdTable",filename:"src/useAntdTable/index.ts"}});var Q=function(e){var t=e.current,n=e.pageSize,a=Object(g.a)(e,["current","pageSize"]);return console.log(t,n,a),fetch("https://randomuser.me/api?results=55&page=".concat(t,"&size=").concat(n)).then(function(e){return e.json()}).then(function(e){return{page:e.info.page,total:e.info.results,data:e.results}})},I=c.a.create()(function(e){var t=e.form.getFieldDecorator,n=f(Q,[],{defaultPageSize:5,form:e.form,id:"tableId"}),a=n.table,r=n.search,A=r.type,g=r.changeType,d=r.submit,m=u.a.createElement("div",null,u.a.createElement(c.a,null,u.a.createElement(i.a,{gutter:24},u.a.createElement(b.a,{span:8},u.a.createElement(c.a.Item,{label:"name"},t("name",{})(u.a.createElement(s.a,{placeholder:"name"})))),u.a.createElement(b.a,{span:8},u.a.createElement(c.a.Item,{label:"email"},t("email",{})(u.a.createElement(s.a,{placeholder:"email"})))),u.a.createElement(b.a,{span:8},u.a.createElement(c.a.Item,{label:"phone"},t("phone",{})(u.a.createElement(s.a,{placeholder:"phone"}))))),u.a.createElement(i.a,null,u.a.createElement(c.a.Item,{style:{display:"flex",justifyContent:"flex-end"}},u.a.createElement(o.a,{type:"primary",onClick:d},"\u641c\u7d22"),u.a.createElement(o.a,{onClick:function(){return e.form.resetFields()},style:{marginLeft:16}},"\u6e05\u7a7a"),u.a.createElement(o.a,{type:"link",onClick:g},"\u7b80\u6613\u641c\u7d22"))))),p=u.a.createElement("div",{style:{marginBottom:16}},u.a.createElement(c.a,{style:{display:"flex",justifyContent:"flex-end"}},t("name",{})(u.a.createElement(s.a,{placeholder:"enter name",style:{width:240,marginRight:16}})),u.a.createElement(o.a,{type:"primary",onClick:d},"\u641c\u7d22"),u.a.createElement(o.a,{type:"link",onClick:g},"\u9ad8\u7ea7\u641c\u7d22")));return u.a.createElement("div",null,"simple"===A?p:m,u.a.createElement(l.a,Object.assign({columns:[{title:"name",dataIndex:"name",key:"name",width:100,render:function(e,t){return t.name.title}},{title:"email",dataIndex:"email",key:"email",width:350},{title:"phone",dataIndex:"phone",key:"phone"},{title:"gender",key:"gender",width:200,dataIndex:"gender"}]},a,{pagination:S({showSizeChanger:!0,showQuickJumper:!0},a.pagination)})))}),N=function(){var e=Object(d.useState)(!0),t=Object(r.a)(e,2),n=t[0],a=t[1];return u.a.createElement("div",null,u.a.createElement(o.a,{type:"danger",onClick:function(){a(!n)}},n?"\u70b9\u51fb\u9500\u6bc1":"\u70b9\u51fb\u6062\u590d"),n&&u.a.createElement(I,null))},F=N;N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Demo",filename:"src/useAntdTable/Demo.js"}}),n.d(t,"default",function(){return k});M="Option";var M,U={},Y="wrapper";function k(e){var t=e.components,n=Object(g.a)(e,["components"]);return Object(m.b)(Y,Object.assign({},U,n,{components:t,mdxType:"MDXLayout"}),Object(m.b)("h1",{id:"useantdtable"},"useAntdTable"),Object(m.b)("p",null,"\u4e00\u4e2a\u9002\u7528\u4e8e\u5e38\u89c1\u7684\u57fa\u4e8e Antd Table \u7684\u5217\u8868\u9875 Hook\uff0c\u5305\u542b\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a"),Object(m.b)("ol",null,Object(m.b)("li",{parentName:"ol"},"\u8868\u683c\u7684\u5206\u9875\u5904\u7406\uff1b"),Object(m.b)("li",{parentName:"ol"},"\u641c\u7d22\u8868\u5355\u4e0e\u8868\u683c\u8054\u52a8\uff1b"),Object(m.b)("li",{parentName:"ol"},"\u652f\u6301\u7b80\u5355\u3001\u590d\u6742 2 \u79cd\u641c\u7d22\u6a21\u5f0f\u5207\u6362\uff0c\u5e76\u4e14\u5728\u5207\u6362\u6a21\u5f0f\u65f6\uff0c\u80fd\u81ea\u52a8\u586b\u5145\u4e0a\u4e00\u6b21\u7684\u6570\u636e\uff1b"),Object(m.b)("li",{parentName:"ol"},"\u652f\u6301\u6570\u636e\u7f13\u5b58\uff0c\u7ec4\u4ef6\u9500\u6bc1\u91cd\u5efa\u65f6\u80fd\u81ea\u52a8\u8fd8\u539f\u4e0a\u4e00\u6b21\u7684\u8868\u5355\u6570\u636e\uff0c\u5206\u9875\u72b6\u6001\u7b49\uff1b")),Object(m.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(m.b)("h3",{id:"\u57fa\u672c\u7684\u5217\u8868\u9875"},"\u57fa\u672c\u7684\u5217\u8868\u9875"),Object(m.b)(p.c,{__position:0,__code:"() => {\n  const { Option } = Select\n  const Demo = () => {\n    const [gender, setGender] = useState()\n\n    const getTableData = ({ current, pageSize }) => {\n      console.log(current, pageSize)\n      return fetch(\n        `https://randomuser.me/api?results=55&page=${current}&size=${pageSize}&gender=${gender}`,\n      )\n        .then(res => {\n          return res.json()\n        })\n        .then(res => ({\n          page: res.info.page,\n          total: res.info.results,\n          data: res.results,\n        }))\n    }\n\n    const { table } = useAntdTable(getTableData, [gender], {\n      defaultPageSize: 5,\n    })\n\n    const columns = [\n      {\n        title: 'name',\n        dataIndex: 'name',\n        key: 'name',\n        width: 100,\n        render({}, record) {\n          return record.name.title\n        },\n      },\n      {\n        title: 'email',\n        dataIndex: 'email',\n        key: 'email',\n        width: 350,\n      },\n      {\n        title: 'phone',\n        dataIndex: 'phone',\n        key: 'phone',\n      },\n      {\n        title: 'gender',\n        key: 'gender',\n        width: 200,\n        dataIndex: 'gender',\n      },\n    ]\n\n    return (\n      <>\n        <Select\n          style={{ width: 180, marginBottom: 24 }}\n          onChange={setGender}\n          placeholder=\"\u6027\u522b\u7b5b\u9009\"\n          allowClear\n        >\n          <Option value=\"male\">male</Option>\n          <Option value=\"female\">female</Option>\n        </Select>\n        <Table columns={columns} rowKey=\"email\" {...table} />\n      </>\n    )\n  }\n\n  return <Demo />\n}",__scope:{props:this?this.props:n,Playground:p.c,Button:o.a,Col:b.a,Form:c.a,Input:s.a,Row:i.a,Select:A.a,Table:l.a,useState:d.useState,Demo:F,useAntdTable:f},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2GvcIIlQJZHCgJYADEhSIJYGlQGZwiWEVRiWZx5y2AglksVwPFgVD0Nldp3AIdBcIg9goLyGBnAILIBKNITTUVFVUDw9V2C1GAiGHRT3UkOABHISRpIAQRodAeL4mBJC0nTxPw3I4BgczRKs_i9PaD1DOMsyLPcmAHI0wNJUEk1NXaMFUF0FFjlOLDZMSLF2G4ST1iiARnlQK52gABnYJMZiwdo92rGYOxYGccoAFiK9gADYipK9YwGAyjvWgRIcv4ZxDgRB1MBgoR-CWHTUEoOByoRZrq1amhnAgLDLnYABGarSvkKKYqmUy5hS9gIyg8gbCgdAw1QjkUrEA7oxkdgUSSmBuGAbDEqxeQtxrYBjugM7ggAMn-8ZEnmShmh-07zu4aG5TAZDJQGVB2nYAB-DZfrDCNLquCG_tQTbqykGQqzfMwYQ0zAwDCKApixq6bsJ3bl2rCxgDp7hruAFcLG2yT2B1GZu3MNDUvY2BJW5wtUFiuzh1S9nOclnnqFigBtNJwwEJZnIIABxOgpwAXX26TZKyLGoprK2pdi08Aq1aJXH2w6ej6MMuL7Vw0gWpaLvprmWet5XpcoWAcCgSgUgjXoBHd0kvZkxaYDfIOra6Ag-nMMBR2OqNA9T9hikIW57keTIMEiaSBBwI9JFmCAUa6ekabgbgAFY2_-8q0m4AASb63f0eR_vyJa--AbvE6W4eNancfZ4yeRilKguLBT1eLBwCY6AjJv_aV1P08zid4H_OBqAt_PU_kdeN63zZUF3-B6cOg-g8nq4m5wNBWpwSeV43jWCIckoCf1Pj_SgoZ4ChBbgAwBxxHZgLgFA5uBA4BwNXjfW-1sCYH15lBOS1kBKpT8m5XisAIx23ITAB2ckljqwNhkQ2SwA4b0ptTAg0EE4-2Wm3DBVsb6W1TrzKgUBQhEGlvtVWb80pXyDjEAgsAcqoG9IFfhqd0CO3omoZRqiZrwO2DALqcoVFHn0YAnE6AJhXBWrlXK6ig6TkjMAJQJ8qACHQJdVh8CT4ZwEOYLo7j0A4FMX-BRsAZEWCUDI6JcivqRPGC8JRcptKuGgOYthWjwxYByqk9JDjraGOMe0PJUAMmr0sdYgqbd7ExIKazBJ4TlrtBmMMZ05SC6aLkto7AOVWnUDUQkopfS2mDLiVE-psj4FNJygvAQHTU7DLlHMhZQdKl4CuAAJjsZMiwXTXA9Jycsxh8zJmxILobIRjjRzHzzhvRgn17li04gkiwD1YDPSgusmxAAOex7AMpZWvCICIRAtnVVQgTHxexUD2D8DOJ6wAdb601lCnxZIJQwGGKdDIfAQCAHIDQA1EqAG1vQAkAn8FeSEBIox7DkgEAkx5gDGACyFuwVg8QGR4qiBEkAYhuUwCkCyxGjL7lCuZOysRT1-DZ35eIGV8QBWSDFagEVqcpDPMlKqoOjAAqFjERI1u31Q7iOlmhIQIwADSRi8WlP4JJHADrCGwDQpuGRUgtXsGwVEq5NYj7-NrLLdgrrA7yDRVIJmJMzBfhAD5EyzlXKWWobZbSkCALaF0CBAwYF1L2igkRG41AyKhyojROiDEmLsBYiMbi1CFJumEhZIK9oQoeyks5M2tA60YWUi-VSOapikMTUQzyOA_RmF5lQ6ytCnbyyOoPGg8dvZJyWA6lBUwb772rDFUOf4I5RxjnHT2S6lpLCbgQD86w_VZxzngCMRcbh3AeJIcuVoq41xsvXRu0CW7t07pPceB6h4jyTuPSePCl7YPvjvPeHMT7IM0BfDkkHt6Pxg9dV-V8P5we_qgX-_9JbAPiEgnDv8m4wLQeo_ZxGyOwJXFg1S8hVLjpVjtOYAAZWwUxUr9koIOWD3j8EjgIJRCA850BaXcdEIUxC-wDmQa1AQRAmNbpY1MoB1CMHOVcEZDZfMCAgxgEsY67g0iWAM9rN4RBxznJk4OgKlDRz20dvQ5ham9kwCpuRrhx7eEYIU2C2TvH5OlpXFwHKTqYD3nMTfZTwdYqiJNXYVK0jA7eKtjMkxejKNZJ0Zlsx6ilntFCQs75q0dmSycQICMAB9U9WwhSeLc9bK9biGshNUVvJJMBVJBxsxMlcaWgFddyVEfJkt9mHJG2kspBWjFTbG1fUrSYakYL601iwGWWmjIWRN7JIyBkLMK_09pq2MGDY28N45mtDtzau1OErXAqnbNqVfXbuX2grNO-sQ2sWbZTA7Oy6KMlxQ6eoop52K4YyyElowMHRAPWMCrakYiuLgCbOqh9N15F7rlVQM9H5mPxk1lhzRHATZtLsDgoEKAeLQniEpcAU8ImxMSaFFJqrRWsuSRvhGRg9FGJTAxQibFc9-B05AEGsQHI0X3MkHDsntB4duskORD1CZseTXcPjwn8CSeKYVxTqn84bWjagPTonVtGejmZ6dVnmQIgc9KSVbnHJef8_CH2OCwvQ6i5ALaiXm5pcJKkPL8nSuidSFV1j0OOOtfAAJ2r4nofFeU94sb_gx3GS8oZ0z0Ttv6v26FI-TPzuXGu75-WwXXusU-9xRn0ZdrA8y9XiH0nYfE-R9DgjyQVaEe97dcnin7zEVQRYJNOCxSwCwGKksdQeQYhgESI4PQNAcpT-wOaA2yNQ2J4TPmkiwN5h4v7PybTiQ7XUFpbEbYz16QeCswQHXPjAA4JoAIl9g-SH39QXftYv_mEv1ANfs9ArIFncDgP5igtbnnugHAFjGhMPp8gCtpllGxh5gQDYvVJCj_hYIAKB2gAXl4f5_4_6MB_6H5SogCAGoDbAX6wqAE7DPTGYIpmbzBP7wKAAB3oAMhmb-hBxE3-yug-4eBcUg_eV8reimjKRMsY6wF6_oKm0sUwWmoObo8skOd0CBwAUEgKaAwKBaAWK0mBO-MOcO90-mHyGhxwtgGKk-0-zuc-KIEAi-y-maa-0-m-GA2-rB1sVuwm0Bdu7Oj4xWLCPObq7uVemKIudefuegRw4uJhj0iBpW6O_yWhqAIoEAKQhAGBkKkuBSQecSJBvB5g-mR-Ge_QGU5-EuABQBSKlmLwnhQc3B-Rn-hRCOpBxR5BlB1BlRtB1RjBpmBm9R1sgAG1mADlfo0UIc0QWiqjDnLjRBITuNDtWDIZejcv6ncsTsTJLMAO0SlDDO0PkL-MjGjIocdJRG6FcADu4AiOxNpqcTRM3gmAFHgsagagwS8aagfMAKuhFg8TWN3GgNEIjJ8jInAMMCMDwnCiZhkFcKiAyJMqCaMAAIqhDX4ABS4isIMJaIhmMi3x1Cf8XsAJQsBSoakswaVskhixa8DGymvMTMHGKIuqqU8u5ApotAWMEY9JnGyx0Uqmga8sl0_G6wvMqsCJ1a90o4zgYJxsJC7ack7JsJycv2LW6xCYmxohf-B87ReKmiCK9KIAB8VR9BbMgpisROOsUpowEYAAhGKTIQXKSVfB6kimCajHKIAJ0OgA34qAAAqYAIPWyMOUXpgARgaACwmu0L8VIEQVsWKewIDLWFyYybWpuM3pSZ9DIYxlFOTPaOwuRppCmqpNGrGnZkmqoNgFvFoBQMBPoAwP2nzAAOqZBzDZBw4ACqMQUAdgaEnkIk6AkggBHgkg_msximTaBE3mRJiMy-kAs4XZ9aPZfZEAA5_xKiQso5fMWk8w4Y0UiQDJHs0kZ4YA2ckoSw0kYo6AoQCIWsTkMAYozQs53aEUfaEkbaMALZMwXSMAB5R566YU8oZo5o0kY6ak0RVM_ULZzkAUrZ7Zdg2AIEMB7ADZsw8w6AUF0Adg3iueYm9EKIVxMAKMVwEYoSVwKI04KQpp3ODGmZWAjkaAtAAgoF3QYofiqAAAahygKpYGaRttQlcINvsr1H0AiFcJYD1jWBHB2AUFcF4Duu4KJRYJfvCmkARctOOSuZOdQNOeRawJQFwHJUehOdQLxZLIBqvuwKgOIoEAIHpRYGBknFcOZUQJZdZUOCAvZRZRkHpRmdWF5RYF0NKPALpiAdpbpesCcXgPhU1u0TlAcWSIFOwAAD5yiXFA5-hWx9EwDMHLRBU6XoB6V34P4EVaU5WiVeW4LOjUUaS0UZAMX8yCyIxwA6pcXHAeYcLeZTx4VuWOUeXrBcARUkUFCiX-YRXgUZXUKoUdmDU0TRBiioIRWqlwbkbCUALkWDYmUEARUOVOUri2VLQbXuVWUriEagJmX7V6VUYhCoCJCqw_brClVUU0UgWYrsCUSoBcKZBEDoXCnzroEnVdUHVlTcJ2W_VbXViqxLL9UziGwXGXWUWyFVX0VPUNAAASnGQoiQ06amYNt2ENKQUNuQVB40IwqAsN5AcEcAdgI1AU9ELwHa3Q3ijw7Ab-gA3j6ADR6oADD_bBgAqsqACADKMaFSDsdJldFXhL6AlUlegIDtNPtPsSLYFL9gzYAA6mgAdsaAAFSoAL7xgAbU6ACABusOJZVCkFJcIOSOYKlFTB2d1kIgzYAMr6gAskqACuGYAIAeX1sc-gnVll-0K08tkg7AgAYEp22ADkmoAPA66wO1y0m1GQHtuUXt7AgA3AZ20K3rBHVu0R2pRR2W3e2AAWEZzcrS1DRNOrxfdLLVcMjajQIOjY7EqCEBLbhcXSjSiGjRjSLHzDFcki4ksMlUJdzqhNHYALDmgAhUqAD3XoACvxgAe2qAAhbjndWOdchNsITSbSdQkNHYAIXRCtgAFmrCltCmXh1HCp2w1mAM2AC4SoANOagAPArMbyGcBqQEC037TOhjCU3ULU3X3ykwBYzKYM2ADI_oABra598WEomw-dfMWNxiONeND91kT9N9TdLitJqmXQ55l5zsOFnaqUaANNL97dCMhlemBmxFqIA1nsSUlAHYEVLifsQp1YcA-Yx0B0ZoiMW8BmXiK4cQzkcooQ75WQtN7QiAFWqx5gUEq6yDhm7Aq6dD1ABJRDHY3dzDFIbDHDtAcO063DvDzFfMgjGDhoediCajDqQj4BWjdCIjDqYjqAEjetAkPlNYOZNMPDV8Ew5qZlMAYwZ4scRe9pqEZgXlZMFV2ZLVuZcM0UrKxZ1kjV6xYA2UB05U719wz1r12m3ocA5F0EMo1IjASIYgACmAj6eZm5mA25u5UizCTIdVKsVwyqDVnF-0bdZgHIVwTFmcbFkqjVamgm1jnCgNvsqUtiSwXASw_mfTU1BAM1uZTdvGQscAolIpQjSwY-5UBAx0Mp15Z5F5kY8DKzV5AjDqaDz9WQi67VVwbTbVPCF0kzqmQjt5Jszkt5jA4DsAkDL9DYh0aE_g-Ns9ow74IQFNEFj9V9tNPJFgxg7AgA5caABsSoAED6gAptaADv0YAEI2gAb6aADxeuwDyBvRfWiLCpvVxksx5hGLlP8yYVkLeR8N9ftEI79rzF0OYwKZulbLM9ELnOdmQTlOwx-Vw-ouVJI-gEZXEmtTYgUlQMhD9XowK5mAANSrTqJrYxa3W_b7mHmcQRggGDaAuACQ5t_WzaGci7yIHA4QdFwEw1fLq9HP_TQo7KrFwIbAawXCIia_tHEMdKa3JOa-gDdXEnS_M7eoy-lrg3I6yy_asn8fBHrdy_AgzYAJymgAG8quwu00Dc2h3sCABY8oALOJgADabq2T3wK8urAOvEsxtcQJKh04wmsEk-a7ISm3F4BC3ZubA4BhWZVlv-aAP2s1uNvOYJIM2avNvdCABwKuwIAFz6ILgA7EopsJIitCsv0fCYvsDisrRnIknuNByAuABBmoADnmKrmj4OiggAG_GAD5yhu7KMrVqwfEa_5la6vDaw64o47Ha8W6206127WwLZWwZq6xvBATrDbjAY0wyMa5ewY64AuzgpLGhPOKw16xYZrh6xhhvFFb65w_65Mhy8G3zGO3g1kJO4K9O6tKhPO85WVYu0YOwKu-u1wGzYABTqfpcL39h7KLV8KpK1eCJr06zriz5zHmub7seHnlPqgLgAhTZqtf1s2ws0fau0uWH0uesEY-vtAsvwdZALJIfENcsoeYtoe0AYdivYdSuAf0f-yWOuLXX4uAtZN2ARuABoyt22zUm4AHb-GdgAPBZHvVjSRvkflfkKtKsriUtKdv23UzMwB3D4vOfyOfnyuSiKsMeBzouOCCsccuiitdN6UiLfXReZipRReYuxc0C_Z7LidQeMuwcyfBdsuSyKcdgF162SXjDYk4d0b4txZTAACODIZdb1CT-0_mbpejd7rgopE7dbL77AvFXjgc4T0H1sWbwr317LHTy0ejod6iq6TXGQiQrXH1q2HIUGqGz8FDQcRra1KXUw1pMM6XMXa1Z71yzFeHPqFgsAUogzGNaX8AzlJ7gzwzNM531s_m0QD3-70136BAT8iTV3shQc7rDLWp0nsntAxXcSpXynUEFXVUho8QzkK6DqX32o17a2USgH0r3l9Ck3eb2sE783BL6nY7lr0d9ngA3_522ovxaKWjVELywqWElqWX4aXpERdieQfg92OQ9FcIcldBtKchvCLfVXB_hrUFKFvQglvtWSvrclVU-c3jF_bls6bOC1FYvzUdUmGkVi0to4B6iDCfmsD6CMBI2WB6hsYXjaT6DXSJVG9WqJBeDaboBnjm80CW_W9sahF29XgEAZPSE0s1hGvWmnvra-KZzccg9h_NARjdBxmJ-fOVqajG-m-e8W9W828B8O8bf9gwBe_ah-PvdR8p8vNG8m_7nF8--5-Xj59_xdDF9aSeY0w-chrMOqaQCwDoAdnfvdCm2k6YWnRwAD8d9pXd_QB0Uia99j_sW12l3l1yRVOWMWA6geDqCcQ4BFKwE9_ZD9_sUbcKZnj_2Kvg34Mzjc_Wwvf64j_oDYVyRA6xlAwQH3-P-4URhFJIZR8WA98z_QBsg8_SVMA0Wb78--wAhkKAOB4CI6uQab2oAF35L-rbSzpj1AAFK6AB2I0ADJ8YAFNFDNlY1y5895EAvD8lezkgKcReZXX_uwF67od-u8wPGv_wyCz8gBA_RXrV2y4nw9aE_aRnHwZqABwJUABGxszRZr08pg6VG4jpkyrOxr-FgcPpH0ZZXpY-VsCAk3CgJiZYCgHXmHJEyiSkn20g1KHo3oGD89iLdOKmjGEjV0Uqg3OUGYNSoEDeeknfnvMGZaC95O03TlmLyDjGCYSyBPQRW3rbAcleXfC-mtTIEzoyef4brqrB0GnhJBgtF9npXfbqDR-4_MIf-x07zhvO7jYbvVxPj-VQSMg0Pjl0cFjdvWLguDtDyF6YZKB8PZ4oKzU5S8p2M7dgSGhyHks4G_3OpnwwH7NNUog2CLF4KsaOwBKRkWbhO32Sp9LA6iRHgbUiHhwlOBQdRApShI4xGeAUabllEBLYNwOE3CdtLwPiy85uM3ApEnXmFHVWhAiDBH5Sbh4AAEljW_kQA-40YCAj7CtlU0lj5UXgxFJ9lr3vwvB1EsHIwfoPMzGV1hPrCQSCPmCrYSqQiFrC8NhrRopo2wBOGfGoCAQM01ZMCN4jFyqJ-AVwfgD8GLDVAMgm-LAN6FiojR1g_Ac3gIHyDUB8R7AfgLlBwAsjcoVI6sPwHKCskIAJTf0EgCZEgBTIhdX8NCHJGiismEcRILmDyAFAT4_5IkX8FLAciLA_AUbPyIJEqBskZ8FUYKKyaMJooomOAIyMGz8AeyjI_gAAD0kwOAbZDgBWi6jVRggTUBaJACWj9COAH5DgHqiOjBRPaACs5FdHuiWR9UW0b6P4D-irQQYj0V6J9EGlvKnjQskqNwC6BpyaI1ABiKrKgQQAXMEAIrgxS0B8RhItkjAHND-ikK_AeQAoFDRAA",mdxType:"Playground"},function(){var e=A.a.Option;return Object(m.b)(function(){var t=Object(d.useState)(),n=Object(r.a)(t,2),i=n[0],s=n[1],c=f(function(e){var t=e.current,n=e.pageSize;return console.log(t,n),fetch("https://randomuser.me/api?results=55&page=".concat(t,"&size=").concat(n,"&gender=").concat(i)).then(function(e){return e.json()}).then(function(e){return{page:e.info.page,total:e.info.results,data:e.results}})},[i],{defaultPageSize:5}).table,b=[{title:"name",dataIndex:"name",key:"name",width:100,render:function(e,t){return Object(a.a)(e),t.name.title}},{title:"email",dataIndex:"email",key:"email",width:350},{title:"phone",dataIndex:"phone",key:"phone"},{title:"gender",key:"gender",width:200,dataIndex:"gender"}];return Object(m.b)(u.a.Fragment,null,Object(m.b)(A.a,{style:{width:180,marginBottom:24},onChange:s,placeholder:"\u6027\u522b\u7b5b\u9009",allowClear:!0,mdxType:"Select"},Object(m.b)(e,{value:"male",mdxType:"Option"},"male"),Object(m.b)(e,{value:"female",mdxType:"Option"},"female")),Object(m.b)(l.a,Object.assign({columns:b,rowKey:"email"},c,{mdxType:"Table"})))},{mdxType:"Demo"})}),Object(m.b)("h3",{id:"\u641c\u7d22\u8868\u5355\u4e0e\u5217\u8868\u8054\u52a8\uff0c\u6570\u636e\u7f13\u5b58"},"\u641c\u7d22\u8868\u5355\u4e0e\u5217\u8868\u8054\u52a8\uff0c\u6570\u636e\u7f13\u5b58"),Object(m.b)(p.c,{__position:1,__code:"<>\n  <Demo />\n  ---\n  \u4ee3\u7801\u89c1\uff1ahttps://github.com/umijs/hooks/blob/master/src/useAntdTable/Demo.js\n</>",__scope:{props:this?this.props:n,Playground:p.c,Button:o.a,Col:b.a,Form:c.a,Input:s.a,Row:i.a,Select:A.a,Table:l.a,useState:d.useState,Demo:F,useAntdTable:f},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2GvcIIlQJZHCgJYADEhSIJYGlQGZwiWEVRiWZx5y2AglksVwPFgVD0Nldp3AIdBcIg9goLyGBnAILIBKNITTUVFVUDw9V2C1GAiGHRT3UkOABHISRpIAQRodAeL4mBJC0nTxPw3I4BgczRKs_i9PaD1DOMsyLPcmAHI0wNJUEk1NXaMFUF0FFjlOLDZMSLF2G4ST1iiARnlQK52gABnYJMZiwdo92rGYOxYGccoAFiK9gADYipK9YwGAyjvWgRIcv4ZxDgRB1MBgoR-CWHTUEoOByoRZrq1amhnAgLDLnYABGarSvkKKYqmUy5hS9gIyg8gbCgdAw1QjkUrEA7oxkdgUSSmBuGAbDEqxeQtxrYBjugM7ggAMn-8ZEnmShmh-07zu4aG5TAZDJQGVB2nYAB-DZfrDCNLquCG_tQTbqykGQqzfMwYQ0zAwDCKApixq6bsJ3bl2rBMQoIHBKMyFIrwIT6a1rPn-drOzh03Fd-fNSXxZrQBjuUAQA9AEHIwAsf8IW57keZ5XneT4TKICBNEkYZKG2OBJD4ygPEkKIUQyAyjJM5zXMs3jYFs7TKH_OBpakQWpDZjmuZ5z6pCZkmzC_EAfIdlz_JdmyRc9wDdBAgwwPU-0oKIm5qDIygKPYaiBFoxoGKY9gWJGbi44Ut1hIsoL7TZpYpOc2T5LQzzlJfVT06mPy3OrzycD9MxtpHAgAq1aJXH2w6ej6MMuL7Vw0gWpalhwTeuli-RLu4a7gHWGK87_KBKBSCNegERfSRXmTFpgJZt4ID91i6Ag-nMMBR2OiNilVu4DxJCZAwJEaSAgcBHkkLMCAKNt6hBpnAbgABWZB_1yppG4AAEm-gvfQ8h_r5CWtg4AGD75LXkMUN8_McATDoBGbe9Nt6e2oFjahNZaGbFQAw-A9NDrSzIVcZhaBWo4DIaVIWQ45JQCEfAHAIiPbwMQRIoW6Bp6yLgKGeACCCBwBURYXer98aqVHtQWKTMAAytgpipX7JQQc-80rVjHlBU8lEIDznQFpKgmQIhHDQrYgcmjWpFxMc4sxkEVxyWsvo-64ojJ4CuFBAgINH4bHcGkSwqSlj0g8HrKYSh1gBKcjHAe1kIynkntPJYABtAAus3FclNqYEGgnfNey1kGxJCUQK4di7g4B6bErgOVomwHvDNAxRij4RMLFAUIRBUB2FSjUlch8WY1hiAQWAOVUDekCrEiwai5L0TULs_ZkyhbbBgF1OUeyjyXP5jidAEwrgrVyrlQ5E46BTgjAAfSflsIU6BLrrMkRYd-n9vk-PQDge5f4tmwFUpIwpGzUX8zBULRFy12jaVcNAR5NZjmuFOdgHKeKCVfOubc3FURKXS2ea8gqyDPkrnRV9aW2KcozGGM6QlRzp6kqwNy3lBzpbUpFdQMVaLYmYv5lyuUaRwwCH5ewCViqfkZFVYyxJ7AABMHyvnEqFTlJVU5CXsrqWEiwY8OysHcAidirgEmF1lKlKMGyYyyG9q6wW_NGAV1SMRDIz09XVQ-tLf15F7rlVQM9AAHBGjZ4LayupwE2bS7A4KBCgHwEA8LxCRvBcANxHjTreKFNEIUj54UlUkrvCMjB6KMSmGSCUMBhinRDfwAtIB2Cbg5ATFN_rJBpozUQP1QspDkUnVGvOMb3AJqTcOmsjAx20FlNm-ceaKVQELcm4dJbRzuM8RW3x1baX4qgHW4ADam2l1bXBBEnapw7rpXuvtA6h0rtrKOmi6aN2ztXZIGdRaEzRsmou4AiagP-vXZmrdub-A8qlfun9X1S2nqBeegQj4UN8ubne5t4Q-xPo7XnV9yHRX8H7WIQdYHgPwYnQx6decgN-1GOxiusHU3_vHfdFJsBnpQRYJNOCNKwCwGKksdQeQYhgESI4PQNAcqSewOaH5yN5DLp_YwLOJFgbzDzf2fkzrEg0eoPYKAsRtjPVyfknT6HAA4JoAIl8GPbn09QHjCZPPmEs9ZnYz06aOP6cE_929j1lvQHALGaEHpCeAFBDKWULEwDAAQN59VUKOZ_YAUDtABeXu539vnvO1l84Zp6_BrOoG2BZ1AVmbPPWOhkmAWT5g5ZXYAAO9ADIZq5orUgSssb_UXAD2l2OSG497YbzHPU7m9dWaZ4SllTGcs646nNjTupXF6gTj1hPsGS2ga8IgIi9NWll7Tk6100V2wlkTtg20Sak3W2TKIIAKaUynVTUmNMYC0x1jDkWsM-Krbh9otbCMcg9Su-9LbSPtpfd2kA-gMjsF7bdp6iW8xcCZWGz5B3nVZRFBAFIhBMvZdo18iw9GD0-eIsyFJRnkP9AyuZvt_nGvAHsy8AH_M-u0-K_T1A7HyuM8qyAartX2f1YC7Z76fgZytdSbzmsgANrMAOV-_OU0DaF1d6bvs5ufUWxC0cULoeruJtLYAYuUow3aPkX8yM0arZdW6K4dqHUyXietmi37_UBSLVQeZiykHfTzgspZfuhbAE3rQuOUf-YYLQNERGwmGNwGGCMDp9gFdpDLOMNEj90-Z4AIqhBswAKQWbCK4qIGRU44ZvMZf4k97O7KRIt2npZi1m5bhbql5BhLHpY6xAV9ppvIKaWgWMIwj5RItseItZ57wPjM5b7AakZ9YnEggzhM91P2tJNu0-68wGN98j-AhzDm4TH3yRemhdFrF3mtRiuBD8CLRzwLwBgur4FxYZyXfTPCMAAQi3xGCMRTS7wPSAy50z1RjlEAE6HQAb8VAAAVMAEHrZGHKFAwAIwNABYTXaAT0F2zmFyt3APYEBlrDnwnmrk3CjyJljHWCMUHyinJntGaR0U0ndlUgjijn7mdmskkFUGwFoS0AoGAn0AYF7kknYAAHVMg5hshXUABVGIKAOwDuWuESdASQazS2HpabBuAiNpLKFPSzagSAWcTQjCbQ3QiAS2VvMwpGHuCSKCLSeYcMaKRIKxFEJYaSM8MAb-SUPw5yMUdAUIBEAQEImAMUZoawpSCKFwxyFuGAZQmYY5GAAIoIgpMKeUM0c0aSEeNSPQAQKmfqZQ5yAKFQtQuwbAECaLOQhQ-YdAao6AOwTFTDU6eiFET3FGK4CMeFK4FEacFIFfetAfVgrARyNAWgUo9tcuU3K_AANXiAZEYEsD_wsGbySSaWnl6j6ARCuEsGRRrDPg7AKCuC8BPncBOIsEs1z2WgjGWhMOT3byU0sLGNYEoC4FuOXlMPbx2IPSvkXiuFQAWUCAEF-IsDIQ6VBPBIyChKkXiDhKIAhN-JYOrAxJN2lHgF1V_3YC-J-PWBd2Oj6KcXlVSRygdzJECnYAAB85QPdopApfjmtFc2tHjPjvj0BfjucMsDouSiTMSJj_RnQpiNIZiMgyjugdQZh284B1jNjjg0sWkTDyEYAySwTUSET1guAyThiCgTiekySKjWs45Wj1CjSaJogxR6QaYySb9vk7T-TLAVExi5V55r59BNT4TISVwYSH4fTtS_SNkIhpEUS0Tdi5J3dUBEh6kTiMSCYyZxT7RJS5j-pKJUA2lMgiB2ij48EVM0dfSTiAyloIydTqwal1UDSZw6kYzEgRS-QSjpTGgAAJaxIURIKeOSckjfas1EAoOs3IGrcaEYVAEU8gOCOAOwU0gKeiF4Y_boTFR4dgVzQAbx9ABo9UABh_zrQAVWVABABg12JO9zwA5KpLwl9HpMZPQHtWZORlSntwvJZKigsBXMAAdTQAO2NAACpUAF94wANqdABAA3WDOMqhSEuOEHJHMFSipnUJgGtX7UkHYEAGV9QAWSVABXDLlnzK9MLK1IhP2hWngpXMADAlNCwAck1AB4HXWFLOWlwtR1SneUIsQsAG4DNCt89YMM5Eos4M_aXKRi9gQACwjdzPyWoaJuzXAkl7onyrgGh2yUROyxKlQQgbzPdpLZK_Euzp4BJUooJqSdl60lgmTDj61UI-LABYc0AEKlQAe69AAV-MAD21QAELdhLqxiUrhkJthRyoKiyEg-LABC6LfMAAs1GZZCfk2io4VKXiswJM1AFcwAXCVABpzUAB4FUxdfNABcuSWgfaZ0MYWcuOec3fdKmALGMJFcwAZH9AANbWStijiGOhgDEokqrJuSGIHNrKuByusjysXK0vGK2lmS6HCMiNnh6IytSlSvyqyAMoRmoAkrFyapGMUvKiSkoA7DJNvQunpkxTgHzGOgOjNERloVSVBRXDiGcjlFCHSKyEXPaEQGlkhSvxkNjyGrSVj12uoDEXghApMqOopFOvOtoFdTEqupusWPMCggeoKqWB6Tqvus3kesGVEuqXYGesmtQDesWo7AEixKJRVJ0WuoPQmCEDGCyvYDPGvmrUgNQkirCTYKmA4JpkNHhnbxKSdgCkVPNzAGygOnKhzPuALizOdW9DgDGOghlGpEYCRDEBUUwEAS4I8MwC8J8JsQ3waSZDlMRh5tlPlMVP2lvVKg5CuDFEv1QBWPmRgC1sxRcWVKph0TVI6Xwvxy4AhpokdqLhtO0TpuKXsXlJOLHk33BuOAe2iGOgP1SmkjCIiMjD6vDqiOhvkTUjGtoFvlXgfiuFptaXaQfgum9tmUetiMP1CLS0YDavGTjsXIbEOjQn8GHPctGHfBCBnMqNypLoKvP2MHYEAHLjQANiVAAgfUAFNrQAd-jAAhG0ADfTQAeL12AeQ19Yo0R6s2hMwQ786wAIxcpz8c60sPgCzFbHr4Kx4ugPr3V3SmkA6CBf4PStjKSfqMjLqvkFqQLASU1gT9A3kG8qBgqmqsgPhZ6pgABqVaL5dlKZBM-C_wwIziCMfEj01uwASHNyqtz8Dx7eQNl3sDouBDqD0kHL4JRNgxKakuA6lUH77ZlqrNh9oiHarp4cH0ArUi1RNypj68B-F_8KscozrL6CrVVE93qlr0A76f0VzABOU0AA3lT0xefc6i9gQALHlABZxMAAbTX8py9DB-ws0h9e7CriIrainGTBlvdO9eIrEk088-5R_RjkhvfmSG9RVYGquGouMS0xmsFcuB0h9gQAOBV2BAAufQ7sAHYlaRorF-ws2Gvx7-3-hjf-oWXeRE18owdgQAIM1AAc80gcNBu0UEAA34wAfOVEmi52BPz4Gi10Gel8Hh0x5SH_rNLUplHzG5IakjGTyOSqHGGekcBACT1To4BjaGQMGaqSm5JyaUVpY0J5wTrT6iUj6T6GMZqL6Lq2G7Gb6uGJLAm37aAP7gr2Af6VpUIG9wm-mXyhZW64mEmuAtzAAKdQwKHvKuyYnoPVuuvwPoF1Iewdwf2lXrABUcXkRMxoMW2cifYEAEKbaBsqrcwe85hB_mGhwO-hoZ8Z9oFhyZrIVVGZjsOZz-hZv8QJlZ1adZtlHpi_M3d0zGpQJWluqJqWuwARwANGVnGtzJHAA7f34sAB4LHJ6saSNIjIrI0B8BlcXerhoqopJYYl8_Jl36zIkByUMBm5_maexwYKl5l0L--i1kwhjeyVueicZCJV9mRRggeCo5EZ8Fzlc-qFwVq-gRThhFmQkCi4gvBkDFtFc_G1WZAARwZAEESGzIFv2h6QQNhoqdcF9vfuMdSQPySQxJXHZoYckQ1eRelZoGvp0eWlhuoq-Vj0dYyBdf5tzNiV3k4XoUYUcSGfQY1bVfYBAJhglc_qjZfl7MkSubec-dONHAyaiG1FKadMRLyetIIFtJ0QKckR6WiDEvdfbc7Zph4UFprdFMkVBbobDfBUhehdoCNYF3he4bNa4YtZgucg3k3l7abZ7NCYAcxYTNqQCY3pyQKreqTvXgE3fsCbwb4rpcAG__NCyeqYNkzJaud1Z4leV4xGd4knMV4ZyDKdiF_VudmSKZ41tG5doZm1Deq4FFk9otDR6Ec99Uv-jN8m4N6sFcwSrXQsdffR5wN4fJWeFcDU2agoK8_2PUQYTI1gfQRgVsywPUCxC8bSfQa6Bk_2AAaRuS8GdXQDPDo5oAY6Y4sWI3PEvHY7dPWpXHQZAPycrZrGrbZVrfQe6EoKeLroWLNBwGo_8KE4IBE-Y9Y6Dg5DES6AM60itppm7ZrE08rqo5o8E_o8Y-M8k5oDo3M5gEs-xuHaxajzHkgFgHQHULae6Ggv_U6OizC-5Y2UC-gFmPcWC9adWOWhko7Odf7e0vefYB1A8HUE4hwGpRiyC-yFC9S7M5CTPEwbAf7JGP_f5jbZGyi-6LkmZIoKBgaZa-W09wjGpQ5Fs7MYS4yCS-yBS5NoasSGDsNGgDK_G4ZEm7qd6Zta1YQvYEAF35Mq1CwS-ywACldAB2I0AGT4wAU0V5GAPaHRm8aQPBWunXA4WTWoOi1fXFn_X5ghygvEvZvovUu0OD3a3OWOxYuDE-LABwJUACNjdcjc599JRXJ1BJDk5fGTxB5oUAhToZ5TtFEN8LeAIHFpoHmsMeOSTKUcOH46BH1KWG178Lu3XS2ktGYSZSu89gc8x3X4ydy7yRWdw18Dg9JdnhyRKn2vQnEnmp7JPp9D-V9fDV27x5s971mpIn08Ungxt734hpppqLebwq6X-G7p34gHh8DD7e3qtLbePEfepHkFnV6dik-YZh7n2FmNyD_noWeZq9xZ1F1Z37lbopY39fJRfkg2z-MLrW7SqJOOF3gVOSfYoyONs94lLT106Wc1qqd30-VdmcL5e4lrHGB4gKGN_4xGSPgn2DtP8thvJD-N2NhvDimRMv2v73_mUJroHEjPFRTGprogWzgPxpk87W6WPkoYk8wjvJF4L5cZyn0X-YL5V9pXO3mH1eKfovNFBM7Zq5p0nREUiOKabYO-FhVAJOCQ0CEATFHtfZfgK4fgH4YsaoDIDTLAb0GkkadYfgOjgQfIagC_9gfgXKHAX_3KZ_tWH4DlBJ8EAVWp_yQDf8QApkSSr-GhAP84BUtM-IkFzB5AKOXcc0Nfz-ClhABFgfgHSn9CQD-AwhDQF7BAAqJgBMAWWvCA8RkCXe_AbQl_34AAA9JMDgANQ4AVouAmsPwC7hMCQAzAlaPVBwDxocA9UbgXgMECagCizkfgYIN_7CC9UEgqARgKtByChBIgsQR_kxKRVeC2A3ALoEsL79D-ymVOCf34Abo20tAC_lfynwwBzQGA2YDMH4DyAFA2mIAA",mdxType:"Playground"},Object(m.b)(u.a.Fragment,null,Object(m.b)(F,{mdxType:"Demo"}),"--- \u4ee3\u7801\u89c1\uff1ahttps://github.com/umijs/hooks/blob/master/src/useAntdTable/Demo.js")),Object(m.b)("h2",{id:"api"},"API"),Object(m.b)("pre",null,Object(m.b)("code",Object.assign({parentName:"pre"},{}),"const {\n  table:{\n    dataSource: any[],\n    loading: boolean,\n    onChange: (e: PaginationConfig) => void,\n    pagination:{\n      current: number,\n      pageSize: number,\n      total: number\n    }\n  },\n  refresh: () => void,\n  search?: {\n    type: 'simple' | 'advance',\n    changeType: () => void,\n    submit: () => void\n  }\n} = useAntdTable(params);\n\nparams:(\n  service: ({\n    current: number,\n    pageSize: number,\n    [key: string]: any,\n  }) => Promise<Result>,\n  deps?: DependencyList = [],\n  options?: {\n    defaultPageSize?: number,\n    id?: string,\n    form?: UseTableFormUtils,\n    formatResult?: ( x: Result ) => ({\n     current?: number;\n     pageSize?: number;\n     total: number;\n     data: Item[];\n    });\n  }\n)\n")),Object(m.b)("h3",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),Object(m.b)("table",null,Object(m.b)("thead",{parentName:"table"},Object(m.b)("tr",{parentName:"thead"},Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(m.b)("tbody",{parentName:"table"},Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"table.loading"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u6b63\u5728\u52a0\u8f7d"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"table.dataSource"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"table \u9700\u8981\u4f7f\u7528\u7684\u6570\u636e"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"array"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"table.onChange"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"antd Table \u7ec4\u4ef6\u7684 onChange \u51fd\u6570"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"(e: PaginationConfig) => void"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"table.pagination.current"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5f53\u524d\u9875\u6570"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"1")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"table.pagination.pageSize"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6bcf\u9875\u6570\u636e\u91cf"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"10")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"table.pagination.total"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6570\u636e\u603b\u91cf"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"0")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"refresh"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5237\u65b0\u5f53\u524d\u6570\u636e"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => void"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"search.type"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u641c\u7d22\u7c7b\u578b"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"'simple' ","|"," 'advance'"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"'simple'")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"search.changeType"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u89e6\u53d1\u641c\u7d22\u7c7b\u578b\u5207\u6362"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => void"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"search.submit"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u89e6\u53d1\u641c\u7d22"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => void"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),Object(m.b)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(m.b)("table",null,Object(m.b)("thead",{parentName:"table"},Object(m.b)("tr",{parentName:"thead"},Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(m.b)("tbody",{parentName:"table"},Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"service"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u6570\u636e\u7684\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a current, pageSize\uff0c\u53ca\u5f53\u524d\u641c\u7d22\u8868\u5355\u6570\u636e\uff0c\u8fd4\u56de\u6570\u636e\u671f\u671b\u540c options.formatResult\u3002\u5f53\u7136\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f20\u8fc7\u4f20 options.formatResult \u53c2\u6570\uff0c\u540e\u7f6e\u683c\u5f0f\u5316\u8fd4\u56de\u7ed3\u679c"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"(Params)=> Promise"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"deps"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u4f9d\u8d56\u6570\u7ec4\uff0c\u5982\u679c deps \u53d8\u5316\uff0c\u4f1a\u89e6\u53d1 reload"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"any[]"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"[]")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"options"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u53ef\u9009\u914d\u7f6e\u9879\uff0c\u89c1 Options"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),Object(m.b)("h3",{id:"options"},"Options"),Object(m.b)("table",null,Object(m.b)("thead",{parentName:"table"},Object(m.b)("tr",{parentName:"thead"},Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(m.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(m.b)("tbody",{parentName:"table"},Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"defaultPageSize"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u7684\u6bcf\u9875\u6570\u636e\u91cf"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"10")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"id"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8868\u683c\u552f\u4e00 id\uff0c\u5982\u679c\u6709 id\uff0c\u5219\u4f1a\u81ea\u52a8\u7f13\u5b58\u5e76\u6062\u590d\u6570\u636e"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"form"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"antd form \u5b9e\u4f8b\uff0c\u5982\u679c\u6709 form \u5b9e\u4f8b\uff0c\u5219\u8fd4\u56de\u7ed3\u679c\u4e2d\u4f1a\u6709 search \u5bf9\u8c61"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")),Object(m.b)("tr",{parentName:"tbody"},Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"formatResult"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5bf9 service \u8fd4\u56de\u6570\u636e\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u5982\u679c service \u8fd4\u56de\u6570\u636e\u7b26\u5408\u8981\u6c42\uff0c\u5219\u4e0d\u9700\u8981\u8be5\u53c2\u6570"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-"),Object(m.b)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/useAntdTable/index.mdx"}}),k.isMDXComponent=!0}}]);