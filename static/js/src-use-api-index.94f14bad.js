(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/useAPI/index.mdx":function(e,n,A){"use strict";A.r(n);var t,r=A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/helpers/esm/slicedToArray.js"),o=(A("./node_modules/_antd@3.23.4@antd/es/spin/style/index.js"),A("./node_modules/_antd@3.23.4@antd/es/spin/index.js")),a=(A("./node_modules/_antd@3.23.4@antd/es/button/style/index.js"),A("./node_modules/_antd@3.23.4@antd/es/button/index.js")),i=A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=A("react"),u=A.n(s),c=A("./node_modules/_@mdx-js_react@1.5.0@@mdx-js/react/dist/index.es.js"),l=A("./node_modules/_docz@1.2.0@docz/dist/index.esm.js"),g=(A("./node_modules/_antd@3.23.4@antd/es/select/style/index.js"),A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/regenerator/index.js")),m=A.n(g),B=A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/helpers/esm/asyncToGenerator.js"),d=A("./src/useAsync/index.ts"),p=function(e){t=e};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"configRequest",filename:"src/useAPI/index.ts"}});var C=function(e){var n=e.method||t||fetch;return Object(d.a)(Object(B.a)(m.a.mark((function A(){return m.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",new Promise((function(A,t){n(e.url,e.options).then(function(){var e=Object(B.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(n.json&&"function"===typeof n.json?n.json():n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){t(e)}))})));case 1:case"end":return A.stop()}}),A)}))),[JSON.stringify(e)],{manual:e.manual,pollingInterval:e.pollingInterval,onError:e.onError,onSuccess:e.onSuccess})},j=C;C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useAPI",filename:"src/useAPI/index.ts"}}),A.d(n,"default",(function(){return E}));I="Demo";var I,b={},O="wrapper";function E(e){var n=e.components,A=Object(i.a)(e,["components"]);return Object(c.b)(O,Object.assign({},b,A,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"useapi"},"useAPI"),Object(c.b)("p",null,"\u4e00\u4e2a\u5185\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},"umi-request"),"\uff0c\u5e2e\u4f60\u7ba1\u7406\u7f51\u7edc\u8bf7\u6c42\u7684 Hook\uff0c\u652f\u6301\u7acb\u5373\u6267\u884c\uff0c\u624b\u52a8\u89e6\u53d1\u6267\u884c\uff0c\u8f6e\u8be2\u3002"),Object(c.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(c.b)("h3",{id:"\u7acb\u5373\u6267\u884c"},"\u7acb\u5373\u6267\u884c"),Object(c.b)(l.c,{__position:0,__code:"() => {\n  function Demo() {\n    const [state, set] = useState(0)\n    const { data, loading, cancel, run } = useAPI({\n      url: `https://randomuser.me/api?id=${state}`,\n    })\n    const email = useMemo(\n      () => (((data || {}).results || [])[0] || {}).email,\n      [data],\n    )\n    return (\n      <>\n        <Spin spinning={loading}>\n          <div>id: {state}</div> <div>email: {email}</div>\n        </Spin>\n        <Button.Group style={{ marginTop: 16 }}>\n          <Button onClick={run}>reload</Button>\n          <Button onClick={cancel}>cancel</Button>\n          <Button onClick={() => set(c => c + 1)}>increase id</Button>\n        </Button.Group>\n      </>\n    )\n  }\n  return <Demo />\n}",__scope:{props:this?this.props:A,Playground:l.c,useState:s.useState,useMemo:s.useMemo,Button:a.a,Spin:o.a,useAPI:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSDcjgGBnAILIljyGA9RgIhhzQo1ZXlM1cIg9goOvcIIlQJZnBmNBUPQhj3AIdBmPwuUhPQT04EkIjYElGSCESX0VVQPD1UImAAEFoIaAT3RkgRyEkCjtIaSRVGwUT1MDSU9MYxUwVQXQUWOU4sJIpT4HYbhWPWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ2CgAWSL2AANki6L1jAYCADFvWgRJgv4ZxDgRB1MBgoR-CWGjUEoOA4oRLLqxymhnAgLDLnYABGJKYvkRznKmTS5m89gIyg8gbCgdAw1QjlvLECboxkdgUU87hgGwjysXkLca2AaboDm4IADIzvGRJ5koZpjtm-buCeuUwGQyUBlQdp2AAfg2E6wwjRarnu07UEG6spBkKs3zMGF1MwMAwigKZAaWlaIdG5dqwsYBUe4ZbgBXCxXqc7tzC1ajKFRwnsZrCxhvYABtFEyPW0cAF1xookisgjEK3zpumGag9BolcJYoEoDsCiWOInPnJY0XMNCfJMnTJqJwW-igK5ikIW57keTIMEiCiBBwI9JFmCBvq4bgABJgBZ2h5GKGLBZreQBY9wtUBc6jXGgLmiKomio1pj28eWiMY9F0j2AAHwT1ivdDeBQmRuwk6Z9mOUZkLOez4BU4D6B3Z9ixGbj1x2fLj3vY9roCD6cxw4rhMDvb2seL4xq0FUmctsl6WZ32zWK5jWQuCuJ3SJdyHY1rKHS511iV_kBfZHHwWpB71BO_bxh2JuagcAAcSQmZ1sU2Atqg_zAssSgZiuHq0tQseI8P4_OL2VB7CgLEbYW0lb7S6MPdAUgf7UAPl3I-HFmTUAAUAracsERQH2mg-cUCEH723h7eBJ9zBIMATsLaUc2YEAjOQNGNCADUvUOT7TQOQU0RFOCQMkNAvBX8CFcNwefS-sCd6bm3g3T2msm4t1rBTGi7BRG03kODbcmNoZmC_CAOAhljJEVMuZcMuACBaAoMBfQDA1L2hMnARITk7I4A9FYmx5A_R8j0AIRG5UGjQQHHARglgCbrG1lcFE04UgqQsM_MmcBvpXDFAARwZCiBoqkCDhPYFEVAoR4gxPYF4Sg5JUBpMFAkAoyTaACFYNkq4mSiCBAEGko8EwnA5IjEE6-oSliRI-tE2JMAEnwAIMkl4i18ZVUiNSPxYg0nUGcKEcgCI4A9ImugK4lgRnLVYJQLg0zUBngEEIAQLTup7IOes9gmztlmHBmYWAUxMSUA8PEKiTSVkTTaSEmWewZhRJyfExJgyUlnO8eMoijAkRTMcnDe0DNdCQBSH8gZ40IyNOGK8ihSIzk0wsPcx5UBnmovGiipwKl5AqTMAzNWukfJ-PGuCiMkSrheJ8ZMzF6wGZdH6SifFThxqRItqOAl2ccVPIFTy7OYBRzTTSVIgQ5hHFOUmW3Gs_gnETXWZrZ0YxgVEAmf4mOXQ4D5NYDARWMB1BbAIKy3hE4-n_O5Q-Pl2tOnfJwF06gcBxEexwBMOgEYVW2INWjLFXcbWGqgMaiMBr_yGvMBdK6N1mhRs0MyJ6Pl2gk3etQL6v0k0xtRlcA1H58ELWLR8aI00IzdFGcGruXRzWSkrUW61FgvZpLpl7OuTMABSzgdQADkcAfJnBAMAiR6XfI5LXFcNaawZKyavPlc74idosMUwBM4ykZEqQul1a7SluO3Suv-JyhRXD5dQE9Agj0zLmQs-4XyCCutQLM-Z8A4CdqUOsJtpLIVYDEgjJGUxKUqQ0Vooy8qjIWUMcYoCehQLgTElBCm8xwxOUSAAGVsAQciRF7DxCgI8nYOHiJzxNRpMUYBiNnjABK2ydE3T2RfGSpycFFlWH5BkSZvlYr9EqbQG1UQ0AFHGiFZjq7eNZGOPOeCImxN9gk_x8gHgrgx3sTgVwAV71IkZrnNG2rdWJ1yOGSAzp0BiEWsnTJCRxpWagHJ_sbBJMs3tD5UTjlxOOf4zEI8Ah7xXCRLJ9zvsQlzIiAIahym1V6ZlAZ5OyEEZoGyGIJYmA4JFXYDUupi0Z0TFsGnQTA9Zw-VS_BNt-I8sleSMV6TiQyu5bgIO0iLmpNpbqwSb1HHfM5Gq61lc9WPgeHGkptJ1zqwomfkiq1QtyQCEsBx_YEZ-veYyPeJtdMludfvIF2m_WugFeEz5frlWRv2bCOwnyFCZ3kBm3No8C2Ns-dW21vLe3A6FfYOaHyWosg4HqiMVG5pysNec6k9YP7_TVgNaEI8SK1MaZSFp1AiQdMciuPp0F_jDPxZgCZ3M1a-vtZB-Nb7tBfujEBmV674pZvzfCIt9ry2utrZrCOia_WlPZckaOaRmqxk6oxw2A1Rqq0BOtQ9lb3XKG3ZgAt_1NDLvFtZ_TvLHPuMhqBwNiMam_WacTsnFHzOu6PFDdD7ogAr5UAGeRgBF5UAFnagA300ABZqgAAfUANOagBC6Lt4AGH_ACFNoASHNAAr8YAPbVADLfoAHPNi0WCF-GmASr1ftD7cOKPxrznxAZHmTY5g90boPb2WwlDSTknYRRP-L673sEuhe_ZQpOB-1oB2L6_gQhI6PfXMrHtlE-yUBr17QmZyG89v3jvkfueyqMwl0zJ2rm_rEmgcpHjug6m-d0rjwal1QByXkgpSp5GSHYIAejNABkKoAXCUXeADRlQA5kaABkI9YWeUiboqVUjL0O6nb-N4AO3jABH0YAELdAAvqYAFLTABr60ACXPJkZ9W9N9FpV5NZNGC5dAV_XfQABCNAB8pUD0AGAY0Ay9I5K4S9M5WA-A9gQARk1ABSWLQKnwh0UnmAy2ECvguzh0038yRxRxgK2TgPJXdSmHqmfmqWoMmyDXBzMAoO6H7BBRgDFGbllS41oPsXh0R2R101GXRxgBpTi2M0SzMxUgZmEP51EJHyCnkxELEJbjBSR2Wh8jlyi1GVsxCDsCRGYyhTHDcXn3YEMNlQADVU8lDMdg0IECgrhN9xRCl1gMgDkclL00lq4clLA0ksFV5OCZhpVkIrgtDqQXDUBlCx8cc1CIVqxGcZ4VxxsX4qDn4ysocjxuDiiVw4oKJyj4iwcSVp94YcdANDQ3oyYNJNJrEFUxR6RkZaUTClUwA9CtdpD6Cm85CgUYtQVuiM4CBkt1hMA7grhkM6BMA0NMMXIfIdNy43U_YrhF8olGBpjkZTCU4YpUdnDdD3CoAGRDj05ji1dgsphmZSMlgiICBOZVYiIeZaBbjxDUAribijjZiGwZ0fDEpDR4giJO0YiajO0lYkjJidC_jO1ciHi6YCjYSud6Qyj9DtDUij0qiiJMTFFy5W02V2DxhOtg4dCwA_FOtbiejZisdVDTMGxsdcd0BmcYU2hMxPiaS-YuSKShMpg-SKNFs0QYAm1AkiJqNaMqEFdaYqBkJH1eh9kXQ6EfIeoythSPg-gwwRTxgJSSjdCLDRcPYlSaBdS1TMwNTeoytwcW0UsYA7gpTqx2VkJqS8MEhCNthVMRiEcGDxi0dESGSZjmTx8ksg0VxjdAA7D0AF35QAWDlAAseSD0AGqIwANeVAAI2y_zDxXHdP_h5INItJVL1P0DKzeIjDsFGUmnYDU3fXYDBJSCuFRDTy9n7xlXMEGOGPU0009VrJ9VQAjGrijOtSVyVkcGVO8memLKtP1M52bU4GaHHSiSfVLzfXnPVx2IaxvVfUWSHLFn73b0VyXPHMLKnJ8hnNVLnLRPbgrKrOjigjrJSzFglilgSibIhKgHYTbLb0FiHz_O3g7OODFl_K9k1jLQIArWCOr3x1HJPOQgnN5OnMLNnP0A3PbiVy3KfRwJvIriwsrwOUrSrwEEPIAoXLHIQrPNTULGVNQpoHQq7jvLRhrKfOhGItfJHg_MRi_O6B_OLX_PbUApNOgvqU1jJOrC7wWI9TkwZgKM9Pwx9JjimxrEvNLJtM1LK2N0AFA7QAEzSPcHcVwldGc6LLVcLKSfMTLGtn4KcVx_ymLqzHz7F6yRLqkYAxhL1HwCj5gRIOQOL3yrhuLvyORmcu8UcZKKTCSq0NIvSCMJRfSFShYUKrz1SNLozd9AAgs0AB0FfSwypc4y5K-isy_KtSx9SKmyxRfI0cSs5ixywdJYFyjLNy9gDy9oSKnyvy3wz8oKkKpYMKoLdldOGHPkmKxSlccw7smQwMlHYMkQ0M3olQiMszEcj2Y3QAIwNABYTRyq_iMs6xMoYsFiAuKutMfVKJj21xkL1xzmCtAq5z-IyI5PtM7UZiVinWrFdPpgpKJ2GoUritj2sNVQmtGO01zhmu0LmqmAWsyNZOWsFmNyv0ADc9J3QAehUtqPZXARhA4pglZuydcEdLqDdfygLTqcaLrs4CbbKnqXry53rHia9ylt0OjVVvrvTfqxrOj5c6CAyximDYLzSKTTzJyLykqSrfzbkbUCBelGTwyobshfylcABCLCtfS6-WnUgq0ymdOmJuWlDG8cbG863XMm3OUigSxciaVS4688icSi5U_aumY3M3E_U_e3B3T3BM13D3beI6_UmzJq6XAQcGhsYtChWfLdeIRmpyQGhHXy4tLC2_e_bdawp_WpDIFvdgUiiwY3QAIM1Q9AA-6MADt_QAMLl0l3B51PdABMJUAA28wAEuj3b3c7dt4lc1aSry8K8l93ULZS74g7bYbd90bMbrbByDa8ajbrrFcUkTLxpAqYBfyW1oQeKzL7bd8PaG6FztazDdaphvbjxibh6s59djbZ7UIxLbrpEm5HqVxGY478l1078c8oBnUVy19FZkJXqLAaaBqIF5KWadg_qo7ZDpq-cJkgTpaOTTCzTe72BAAmNMACNrQAKDlABCa0AAdTQAO2Mg9NYLafbbStTNZML26_YcB4776e6LAFalau6oASGaxs7Q9fc-wb6ChPctLAAwF0Qa_1RtvIiBmHKorlNuHzutDofygAjvIH_pNs1mN0ABe3QAUuNAAF-Ovy_iJuQhJsNoPrHpJMvqVkfu6UIYYez3pviDfvTvCtr1WHligG_tit_oSpUuFstuwc0t3wmCEDGHcDYoOUqqoXvImlqucuItcvcuIsfBiOyFfA6vBOnoWh6qurkwollItT_s5oAfkIgbpjwZXKIYMcocXrprDuEfZp4b_PnvYTIfwYazXyoakekcAB4FBRiufW-xXG_eq68RiHRuE0mxvm2i9W9gBx7eAowp9tC-2mK-spzuzJZdB9HRzJvJl-riXJoRkRoxmmoC0Et8zq52P8RsztBqzZnAESztauYJUjHAauaE9wdBOExIqZju5WuNa-kpfRvJn6a-DTKYAtecN8lEzrPIr-Aoo9U6gks7E1CmuosgjRJqbYVwNIaNagQCXQECAwMCYNfgVAb0RkJAdgfgH4YsaoDIc0H8MkDF8ufgY1AQfIagfgK4fgEKHAWlkKGqdYfgcoVhCAfBqlrFkATSdaPCWAaELAb0IlqTMkSgRIXMPIYTU0SUc0HFv4UsRl6sfgArDl_gKDaNBViwZl50lY-ECAeADlmdfgKV0QTF_gAAPTfhwAAA4cA0oNWax-AJIVWQAzWkwcAAAmWlnqe1zVwQTUS0SIZ1i1tKa121_gMHK5UDOV3AWFCAFIWF1AeF0xeDQmEAWgH0LIKl7F00Wgc0Y180WYGYfgeQBQJRIAA",mdxType:"Playground"},(function(){return Object(c.b)((function(){var e=Object(s.useState)(0),n=Object(r.a)(e,2),A=n[0],t=n[1],i=j({url:"https://randomuser.me/api?id=".concat(A)}),l=i.data,g=i.loading,m=i.cancel,B=i.run,d=Object(s.useMemo)((function(){return(((l||{}).results||[])[0]||{}).email}),[l]);return Object(c.b)(u.a.Fragment,null,Object(c.b)(o.a,{spinning:g,mdxType:"Spin"},Object(c.b)("div",null,"id: ",A)," ",Object(c.b)("div",null,"email: ",d)),Object(c.b)(a.a.Group,{style:{marginTop:16}},Object(c.b)(a.a,{onClick:B,mdxType:"Button"},"reload"),Object(c.b)(a.a,{onClick:m,mdxType:"Button"},"cancel"),Object(c.b)(a.a,{onClick:function(){return t((function(e){return e+1}))},mdxType:"Button"},"increase id")))}),{mdxType:"Demo"})})),Object(c.b)("h3",{id:"\u624b\u52a8\u89e6\u53d1\u6267\u884c"},"\u624b\u52a8\u89e6\u53d1\u6267\u884c"),Object(c.b)(l.c,{__position:1,__code:"() => {\n  function Demo() {\n    const { data, loading, cancel, run } = useAPI({\n      url: `https://randomuser.me/api`,\n      manual: true,\n    })\n    const email = useMemo(\n      () => (((data || {}).results || [])[0] || {}).email,\n      [data],\n    )\n    return (\n      <>\n        <Spin spinning={loading}>email: {email}</Spin>\n        <Button onClick={run} style={{ marginTop: 16 }}>\n          fetch\n        </Button>\n      </>\n    )\n  }\n  return <Demo />\n}",__scope:{props:this?this.props:A,Playground:l.c,useState:s.useState,useMemo:s.useMemo,Button:a.a,Spin:o.a,useAPI:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSDcjgGBnAILIljyGA9RgIhhzQo1ZXlM1cIg9goOvcIIlQJZnBmNBUPQhj3AIdBmPwuUhPQT04EkIjYElGSCESX0VVQPD1UImAAEFoIaAT3RkgRyEkCjtIaSRVGwUT1MDSU9MYxUwVQXQUWOU4sJIpT4HYbhWPWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ2CgAWSL2AANki6L1jAYCADFvWgRJgv4ZxDgRB1MBgoR-CWGjUEoOA4oRLLqxymhnAgLDLnYABGJKYvkRznKmTS5m89gIyg8gbCgdAw1QjlvLECboxkdgUU87hgGwjysXkLca2AaboDm4IADIzvGRJ5koZpjtm-buCeuUwGQyUBlQdp2AAfg2E6wwjRarnu07UEG6spBkKs3zMGF1MwMAwigKZAaWlaIdG5dqwsYBUe4ZbgBXCxXqc7tzC1ajKFRwnsZrCxhtY45olcJYoEoDsCiWOInPnJY0XMNCfJMnTJqJuncgEKArmKQhbnuR5MgwSIKIEHAj0kWYIGKGLxfFqJUFCeIrlRBkdd1haxfp6gXOo1xoHGiiqJoqNad1vHlojT30GZ9gAB9fdY-QOVDeBQmRux_fYABtABdDko5CmO_YD4Ag5wW3oDN83o-90iY6z8W32zroCD6cwXezhMDsr2seL4xq0FUmctrZjmZ32jOpdYzv5CkOvUGryvGHYm5mWoewoFibYtv5tCNtgLaoP8wLLEoGYrh6tLUP2y3zbAUdpt3umpBHzjB91qRz5rIvxfB3WS7L2sKZo9hNxXeQ79rSRMehswvxAOAhljJEVMuZcMuACBaAoMBfQDA1L2hMnARITk7I4A9Ig5B5A_R8j0AIRG5UGjQQHHARglgCbrD6F3FE04UgqQsGvMmcBvpXDFAARwZCiBoqkCB0PYPrQ2UBmHsC8JQckqBeGCgSAULhtABCsHiEIg2RBAgCF4UeCYTghERkoVcahnM9gzEYUIthHCCBcJeItfGVVIjUlIWIXh1BnChHIAiOATCrgRnQFcSwljlqsEoFwBxqAzwCCEAILR3UQlhN8ewfxgSzDgzMLAKYmJKAeHiFRDRXiJo6PWqifRDCPruPYCY-AZjuExKITYoijAkT2McnDe0DNdCQBSKUlyPkIzqOGNk92IRUCJBiTTCwqT0lQEyT08a3SnAqXkCpMwDNha6R8qQ8adSIwMKuIQ4hdihnrAZl0dhZSJlOHGgwtWo5JmR1GRky5pzI77wINNXhD8BDmAwU5OxFcaz-EwRNXxYtnRjCqUQWxZDPZdDgKI1gMA-YwHUFsAgezXY1kOaYk5D5zmUKWOcwp1sb7ZxwBMOgEZfkoMhWjYZNcJzwGhTACMkL_xQvMBdK6N1miMs0MyJ6Pl2gk3etQL6v1OXMtRlcSFH4j4WxRXTD40RpoRm6FYqlNcugIslIqyVMqaxB14XTIOBco4AClnA6gAHI4D0TOCAYBEgbMMRyfOK4VU1n4UbAxBA1buAEQXCwkjJ4zhkRkeRXdzn-ukbgkNvq9jBNCUKK4uLY1hOjY45xrj7gepwKmlx8A4AFyUOsLVcyGlYDEgjJGUwlkqX_oAoyHyjIWQgVAoCehQLgTElBCm8xwxOUSAAGVsAQciRF7DxCgOknYw7iKkVoFOsUYAp1njAPvWydE3T2RfPMpycE3FWH5BkOxvlYr9HkbQGlUQ0AFHGiFLdfqT1ZGOPOeC17b19nvWe8gHgPERjQTgVwAUM1IljpUmUYK_a5HDJAZ06AxCLQDgbBI40ENQFff2NgD6UT_qmD5G9jk73obPTEI8Ah7xXCRC-vDhZUDUOcREAQEZP0eJA9UmAqyA7IQRmgbIYgliYDgkVdgSiVGLRdRMWwIcL1N1nD5Pj8E9X4nE7J5IMmn2JHk2JuAlrSL2hU_x9TBIiX7pIzkXTcmVwaY-B4can7eGJOrCiNe40-kuvIOSAQlh937AjBZojGR7xarpj5oz94KO0ws10STV6fIWaU7Z1DYQiJOeRXTVz4p3OefCN5gzvnjMBZrOFjOUn2Dmh8lqLIOB6ojFRuaBTmnMPCji5RyFoQjxOd_f-lIgGBnAauCCsFy12OQa4yZ8hYWDP1ew-wMrtAKujEBvJ1L_6PNHi80F4j_n5M2omhZz9ImxavPMEC6xoKangshXSylu81t-ZM-tUcy2YBebJeQf5l3tUWC21l8Tu2j3Utq5Zn9aDSUAeTtHOOeWa6PBpfSVrgAr5UAGeRgBF5UAFnagA300ABZqgAAfUANOagBC6NR4AGH_ACFNoASHNAAr8YAPbVADLfoAHPMpUWHO1AGF3y_vtDNcORnMLYnxAZHmTY5hw2Bsjb2Wwd2h19nJIliiManE5t3ZdagUShScGo7QDsX1_D9MSNG3WEPzaf11kof7EW7ZSb1xYXV78VwHYg5x6DjWwYlrEmgWR-Dug6kMUUw9VK3WCKuCIsRSpX6SHYIAejNABkKoAXCVseADRlQA5kaABkI9YguUhBrkQoq4QmMhB6h4AO3jABH0YAELdAAvqYAFLTADX1oAJc8mSoFl-mrR2SfFoziegHPIfAAIRoAfKUKeAGAYmvSvwkeMiXGgQMSW9t_YIARk1ACksb3hJjlFLzEE8IGYbW0Eda64kYDzeAmt4WdbKY9U16Z5X0lylxb_Q0Gut0fsLGxSlzeYezp7WANke63HNGfXTvgY4zAKD3GVIGZb8TsYB78y4rhgDqQwDH86k1kkEUE-lkMQg7AkQt1GkxxcE3cSlRwy4AA1HnVjMhX7dgVuBKFIf3YQQPdYDIMJIRAfXhXOVwIRSwXhbmBELuI_GYF5ZCCA0DIiaA1ANjW3P_YbepasHLK4F1BzdeZfNeeTZrI8E_OQlcOKCiJQrg9YC_OzdAx9RGMOKUN6MmDSTSeA8gRgMUekZGNZAZBsbKIKCaF_TrN_LfD_KxL_VjCw_QnjdYTAO4K4LtOgTAXtAdDpMHM2PFajK4D3Rhcw0OZGZaHyVOGKDkFhHAt5fAqABkWIywggUbK2VXaOTDWdMXJOIWIiEiLIWIh_VADIrIzw-IhsF1UggoK4RGKAIiAuNg-cdQgufmXgu_NIriczIzSQsWaQno_bUORQt9AY6o6NVQoiCY2mAtasS3asBmHLB2fgv_UhIzbIrwn_IbaDBsX_f_dAPLZpNoTMMo0Av_CMEKC4g_FXccG4-dbzNEGALVChIiJdFdAgT2ZLGsKgZCT1XoUJF0AAah8h6k224Q-D6DDEmxNhgHkMGNe2VTFmBJoHhPBMzChN6nkwvwt14xgDuC-PWKeP5i2JgFHQSAnW2E9kcM3x62O1sXqKmEGzt24zezpih0ADsPQAXflABYOUACx5SnQAaojAA15UAAjbQvWnFcA5ZCRwEE6zK40EhE_QeTIif4uwKxSadgX9PNEg9mMg42D4haPXG3MAVAQHP9ADAlGsIlfnTxH2DE7VT7fmZU6456LE9U3EpFYg7OT7CIzTbNdNPbd7GsEMrNWvNNXNF00ic3W-KVD0pUtU7yH0tUnExEiMv7bUiMXUj2KCQ03jZmVmE0low0eIRLIOJM_VXeA3cWG3Rg-TC3B0iwOVJ5PARVEfHk82VM1AL07DTMkE7M_QXMyuYMz3a2GMgfCcmuaMxXEfHs6JVs5MyMgcocjMnyX0scmgecyufMwsiaYstBI0mgoUcstucgqs9o7oWstc-s7VRsumG3C81RMWNY4kx9Mk19BmaQ6k2k8dCUBk5zBUrMsExE9gfEmElcKHQAUDtAATNPx3RxXE-xyz3IDJdQsAwsguPGkPmyt1piPLRn1JLOhBH0zxgDGAH0fGkPmBEg5CvNNNvJrI5DyyN2Az_KeIWKVQ0iAvpIBL7KtlHLwrxOhPkyh0ACCzQAHQUUK0LmhvMjNMKDycLlKxLPVeLCLliVwSK9TTzLUlh3yqKaLlz2heLGLmLKy2i2KOKlguLKMDkpi-KKIBKQKWdkC_lbSN9nCWT3D9irDOSRDjjhKawodAAjA0AFhNeSlFdC9SjU_cwMpstE3ChKz1BQ-lX9YHTrUHYDJMl8mlao4Qs4wkw1fmJ1asck_IlyCbQCsdQSlcZ7Bw9fV_LXPyvgjwuIjk4q0Q0KiwKHRPQANz1MdAB6FRit1lcBGDtimH5ltOyojgDjyrXJtwyrmo31yvB1KpXCjnKrNiqqoxchd2DXiBML-RuLcp2A8qau8taqA1cLyPFkVMHPTJ3IgrSrXOSUKtSJyMOK5L31isUoAEJozfdQdAbL0_ScykrXzRw1kprxxZqsr1rI4lrPyxZPtdyNLtyJw0yQTVKwqQ9Ydo8Y80d0cCchScd8crt4r_SkNqK91iMArciPK3YYkjr08oBTqnIbrOsmKpVoyU808Q1kDBMWsVEdd2A6zg92BAAgzRp0AD7owAO39AAwuT4W9XiAJ0AEwlQADbzAAS6Iprx1R13k-whswvYFZRBvVqgHxt5JD0mumpxptKRpBxRs2pTLhKxp8hspRIbOhDvOhvFih0pqNsjJLjhodtSv9JDhh0yqB2RsWrdufLRpRRWtHC2tpijgFtEQDVT2FygBxWnOoy9QNniD5mQgqosH2qctILqrpPcpXB5uZLjl6w6qZt-uCu5LdN1ih0ACY0wAI2tAAoOUAEJrQAB1NAA7Y0p0xLetppgrXKnMYRwEFrzpts4CBstpLutoDtttlppxJz7GzoKAJ3gsADAXYewvcaw8iIGYbS7OAqhnNE9mkNLm8gRu_KsWKHQAF7dABS40AAX4pPFOtExGuOl2hO9i9OumHa5CAuhepe2RENCuyW7igoroqAWu4Cy6sC2mTGtK6CiSuCkPCYIQMYdwCisJXS0cAs0igy88yiwTem2i9oFB7IV8KyxKVi-8sBzQ-yuOV9CiX4xFDyxu3y-6gO-eopReg-oXOB-IFex-k60wm-2-P2xLT7YGwuzTX3Fez-r-wAHgV_7i5kI1qQGwdOGUU7N740TMHs5sGZ68HtUCL8rwGaxM71Hi6fUPVxHYHjr87Halg5HObTCEH9qbcmiKy2Gii_xmiZwC5jK8lyt3yC5GDdEZ0_xGDOj3B2DeieCPGZzQaLbXGvGOafo4n7RxV5wTSC4JCA7pDo0Mr5iEtYV34zYtC_4lAQAmpthXA0gmVqBAJdAQIDAwIqV-BUBvRGQkB2B-AfhixqgMhzQfwyRxmzZ-AYUBB8hqB-Arh-AQocAdmQoap1h-ByhyB-hC7NnJmQBNJ1o8JYBoQsBvRFmfy2ZEhcw8gr1TRJRzRpm_hSwDnqx-BJNzn-BG0mU_mLAjnSTAj4QIB4BzmXV-APnRAJn-AAA9TeHAAADhwDSjBZrH4AkiBZABRaTBwAACYdmepcXwXBBNRLRIhCW0W0pMXsX-BNCEka0fncAWkIAUgenUA-mYE21CYQBaAfQshNmpnTRaBzREXzRZgZh-B5AFAP4gA",mdxType:"Playground"},(function(){return Object(c.b)((function(){var e=j({url:"https://randomuser.me/api",manual:!0}),n=e.data,A=e.loading,t=(e.cancel,e.run),r=Object(s.useMemo)((function(){return(((n||{}).results||[])[0]||{}).email}),[n]);return Object(c.b)(u.a.Fragment,null,Object(c.b)(o.a,{spinning:A,mdxType:"Spin"},"email: ",r),Object(c.b)(a.a,{onClick:t,style:{marginTop:16},mdxType:"Button"},"fetch"))}),{mdxType:"Demo"})})),Object(c.b)("h3",{id:"\u8f6e\u8be2"},"\u8f6e\u8be2"),Object(c.b)(l.c,{__position:2,__code:"() => {\n  function Demo() {\n    const { data, loading, timer } = useAPI({\n      url: `https://randomuser.me/api`,\n      pollingInterval: 3000,\n    })\n    const email = useMemo(\n      () => (((data || {}).results || [])[0] || {}).email,\n      [data],\n    )\n    return (\n      <>\n        <Spin spinning={loading}>email: {email}</Spin>\n        <Button.Group style={{ marginTop: 16 }}>\n          <Button onClick={timer.pause}>pause</Button>\n          <Button onClick={timer.stop}>stop</Button>\n          <Button onClick={timer.resume}>resume</Button>\n        </Button.Group>\n      </>\n    )\n  }\n  return <Demo />\n}",__scope:{props:this?this.props:A,Playground:l.c,useState:s.useState,useMemo:s.useMemo,Button:a.a,Spin:o.a,useAPI:j},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSDcjgGBnAILIljyGA9RgIhhzQo1ZXlM1cIg9goOvcIIlQJZnBmNBUPQhj3AIdBmPwuUhPQT04EkIjYElGSCESX0VVQPD1UImAAEFoIaAT3RkgRyEkCjtIaSRVGwUT1MDSU9MYxUwVQXQUWOU4sJIpT4HYbhWPWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ2CgAWSL2AANki6L1jAYCADFvWgRJgv4ZxDgRB1MBgoR-CWGjUEoOA4oRLLqxymhnAgLDLnYABGJKYvkRznKmTS5m89gIyg8gbCgdAw1QjlvLECboxkdgUU87hgGwjysXkLca2AaboDm4IADIzvGRJ5koZpjtm-buCeuUwGQyUBlQdp2AAfg2E6wwjRarnu07UEG6spBkKs3zMGF1MwMAwigKZAaWlaIdG5dqwsYBUe4ZbgBXCxXqc7tzC1ajKFRwnsZrCxhtY45olcJYoEoDsCiWGIjyONCfJMnTJqJuncgEKArmKQhbnuR5MgwSIKIEHAj0kWYIGKGKRZFwUEgKBo9AEVh4iuJMQrNzWtYW4X6eoFzqNcaBxooqiaKjWmtbx5aI299BmfYAAff3WPkDlQ3gUJkbsQP2AAbQAXQ5GOQrjgOg-AEOcHt6ALct2PfdIuOc5Ft9c66Ag-nMN3c4TA7q9rHi-MatBVJnLa2Y5md9qz8XWO7-QpAb1Ba-rxh2JuagcAAcSQmZ1sU2Atqg_zAssSgZiuHq0tQ_brct0eOOZah7CgWJti27mMhwOKKP26-iKkMfOOHuv9_H8wj5PnZz_5S-UTX_a_4zAfgfIeu8tav04nsVAx9T7fx5mHekR59pdEQTAYBb9n570kI_Ce082hYxfpuXeJcRbgy1mXCutYKY0XYEQ2m8gyG1kkJjaGZgvwgDgIZYyRFTLmXDLgAgWgKDAX0AwNS9oTJwESE5OyOAPSSOkeQP0fIDaI3Kg0aCA44CMEsATdYfQe4omnCkFSFg15kzgN9K4YoACODIUT6xeKY9gURUChHiFY9gXhKDklQM4nWJ8Zz61oIbDxVw3FEECAIZxR4JhOE8RGAxVwjGcz2DMCxnjbH2III4ggi18ZVUiNSHRYhnHUGcKEcgCI4CWKuBGdAVxLD5OWqwSgXAymoDPAIIQAgEndS6T05p7BWntLMODMwsApiYkoB4eIVE4kNImkkuexiljmI-rU9gWT4A5NUnktGmiin3yRKUxycN7QM10JAFI2yXI-QjLE4YizPYhFQIkIZNMLDTNmVAeZTzxqPKcCpeQKkzAMwFrpHyOjxonIjOYq4GitElI-esBmXQ7E7L-U4ca5jlajn-dHb5cz8XYujmAUc01nEUIEOYBRTkSlVxrP4RRE1mnC2dGMQ5RBim6O9ignxrAYBLC6OoLY-yCmfMtui7JWKHy4oMWs9JOB1m2xIbnHAEw6ARmZTIlBaNJV135VAQVEYUH_jgMyC6V0brNDNZoZkT0fLtBJu9agX1fp2otagVGVwUEfjAVbd2IsPjRGmhGboEqA0WBFWK8N_qg10xDs4xNHIi4xwAFLOB1AAORwCkmcEAwCJDhekjkhcVwGprK49xPdcXVviEXCwAS9YGyNrWpVzagmtobcLagAyhRXFxX27pQpG1QIqVU-A9w0kEGVagCd1S4BFyUOseNIKzlYDEgjJGUwIUqXYZwoydKjIWQEUIoCehQLgTElBCm8xwxOUSAAGVsAQciRF7DxCgLMnY77iKkVoH-sUYA_1njAOS2ydE3T2RfKCpycEalWB_gIEpvlYr9CNrQCcWcW6zh8iFODTaMNZGOPOeC40COOSI2wEj5APB1IjHInArgArTqRPHIZXKeUB1yOGSAzp0BiEWkHNxCRxqiagIRvsxGsMohY1MfDUn-w0awxfAQ94rhIgo1J4aaJJRCgjHRupnGZTcaDshBGaBshiCWJgOCRV2ARKiYtStExbBhyiGgAo407PwWTfidzvnkg-SC_5tzcA82kXtCFsjiQwsEg1ch-8PnYvxfc3R8adHnHjOrIA8aLzK3kHJAISwP99gRnC4lnm954100q2p5LimVyVa6J53D41KuhfWOu_0sUwhEXyyi2mRXxQlbK-ECrCWGvoFqzWFrOHvPmh8lqLIOB6ojFRuaALEW5PCmy1JlBoQjz5aYyxlIbG3kcauFx--uieMWZgPx3MkbaaVd2wp9gK3aBrdGIDfzI2WOlaPOV-rSWZv-cLRNSrdGXPC2peYDlhTuW3YbEawV-rd6g-qzkHyRECBA5gOVnV5BWUY4TTWSHk30seFh-TurCW6OMbkdq1jqdY4J1m3XR42HUHsEAFfKgAzyMAIvKgAs7UAG-mgALNUAAD6gBpzUAIXRYvAAw_4AQptACQ5oAFfjAB7aoAZb9AA55lGnnAqYCMrrhYdo2bhxo-6G2hkeZNjmE7SkYJGQ22cEJKOUk5IBsUXHZUxd7BLrDp6ZwVAKJxQiRCHYJEY6tac8towrWShtseYdrhuPFgk0rgT9h8uNLeOWYE_tsZG6xJoBCWo7oOp0kbNQ5K-tUBPHeN8UqWhkh2CAHozQAZCqAFwlGXgA0ZUAOZGgAZCPWI753oSG_hKO1Elv3PAB28YAI-jAAhboAF9TAApaYAa-tABLnkyedfup0JMWU0tGIz0Cz7b4ABCNAD5SprwAwDG7_7b0up_SR0CCGaf8_7BACMmoAUli7_F960UnmEc2EFnnuVO1Y000uwThPzaTPzBVtimHqjXnCVAMG31R6zMCAO6H7CORgDFFz1QFQ3ALkTOwu0SA4wOVM1u3uz4ys0ExUgZlwOR3wNHAriuGYOpAIIrkYBORhSkRkReQk0j1eTixL3UjLwyAry2TYJpQADV4gGRa91h24EoUgrgm9xQ_F1gMgelPFH9nF85XBPFLBnE4gnJ5xUC14qVkIODqDWDCDoVzM6CBNTlqw1MrhK1AErCZh_NDsjwfD_M75upkDfDutgVxD7Rt0I4pQ3oyYNJNIBDyBGAxR6RkYYU3kGxsogoJoIDzsoCKCYCCkbs0FUiYibN1hMA7grg706BMBH0X07l2cLYVVQ8rgq8LEUjw5kZlofJ04YoORrFZDUAFCoAlCyiei0MbZQ8pgY45NAN1pRwU5-YiISIsgujCDRjxjuiCAxAGxK1VCCgrhEYoAiIi5zCEQe5Qii40QcjOCiJuCaUi4PCpiRZvCQC14x1_Dup7iHCK4x1gifDl0LZM9qwGY1MnYHjHsdFkMui0jdjaCC9rNEkXDshZtLk2hMwVjWCwAIwQp0TECQ9xxsTgMKs0QYB419EiIwMIMCBvYhs6YqBkJZ1ehukXQABqHyHqCHPZD4PoMMD7VEBkPw4Y0nF7LWJkmgPktkzMTk3qfzHrDPWzGAO4SksEwk24yEmAT9BIH9bYb2PI8gq7JHYpCYqYZwpEwTMnOmbnQAOw9ABd-UAFg5QALHktdABqiMADXlQACNsl89cVw0VkJHBmTMtMSWT-T9B_M8cIw7AClJp2AmMl12BDjEpxhySFo494dDRvVDS1UawNV7d6k_ZxTLZKdbigysTnpJSwyZT9lK0tZKdWiItyl98aladTcZ0Nk50F0p1CzSJ09SEA1SzAzQzvJKzQzpSBS2zTcoyYyvYoIEzbNmZWZ2Y1Djj4gBsQ5-zE1d5s86ZMyjD_MM9cyLAQ0CAw1dChRrSSzmhTVhzgzHVCxmSJz9Apzc4Gzq9bY51H9Xzq5GyvzX9w1X8tyaxdyRYhzoERyHyqznyaAfzc4Zy0Y4yFzoRX9lyO51DDR1zuhNzDyBzydQLo1RSLzolhZQSlTSNVSdNCS8tsSdTv0JR9SCt_TxzWSBT2A5TuSVxudABQO0ABM0hXCXFcSnNTGC2s4WES1i48QBP7LPFcBC2M-cuRRM4i8JGAMYR_R8QBeYESVNJMlco4zC047CjkWbJPDjKimYvsfrCNDSOivU-kq8m2J8yS2Urk_zbnQAILNAAdBQEqEpvIkvDNgteLq2Q1EqvmspkvoTktHGjMQsUrzSWBUsczUvYA0vaGCJ0rQtXMMo3JMuyyWHMqo0LEsu-K1LsoYpN0jxZSZ2Y0gNEONJKLhJiMRMe3oN6L0SDW50ACMDQAWE1fKg1hLQqXKxLydMyAqayEEjtjcmMWdzs2cON-zQLMyHsnt4D6E01bjy1qw1TpiXJ3syqv17KVxidcjSC6r2ME5rt7Cmr0iLTWrXDHKaxudh9AA3PSl0AHoVfqrWVwEYB2KYW4mq2aqOIOBa3CzM74wGsg-ajnBUja5CLaiwHa4qlySQifRIllWiw6iq46pI062q_I-qoojqiUjUu8rEx8qU4a3CyZHPIY-Elq1a3CynAAQj_PrzZ2Zq82rMnOCpFjLhhV-vHABpmqhujlBtIuFkp2guGtHJ8jLNDLgqerbz517z73Fwl0V0dNlwV0xyGsCo-0RwJxQzNKyLpzFOWlRrbXRqchqrINTQDT_LH27SgBEKcwyBj3YGAu50ACDNXXQAPujAA7f0ADC5FxdwGtRXQATCVAANvMABLorW-XMXXeSnLm0SgPQPD80PZWMO-IRWm0tvH6v6icZCSG1nMWmGwc3kmWnyE4oiXCjPaEIy3mrWbnbWxOs2_mnyAu8ccagUyao8EuuasuvKnciWoNcG0cWGlcGOR2nxQJJ3Z2xVCxLOtxBtIu1ABGz2iylyLoVQg63U7G2mW2866AwYk0--M0hmtqx6iwbnQAJjTAAja0ACg5QAQmtAAHU0ADtjLXYWaW_W9ityyWm8me3WLtEJNtXOzgG81mjOiLevcBm-tvX21XPsWegoRXbiwAMBcX6l8vrq5pLgKCKc9KFLb4hrbyAj7ztFrhZudAAXt0AFLjQABfiR8x7RThbmdRaQby71qp7bjF7OynbQH4gN6kbLl3BLi976KdgHLiynLKbf6OL3K28JghAxh3AUKeloq6TZyJp4rlLX9VL1KAL2gLj5xshXwsqDKa7jLTKCqE4pMKIaTY0VxyGjSiam6IGJogG57x8wG3GLBiGoBSHIrE8G6BsWa2bs6oBwGaHaHAAeBSYdLmLpFtLo4eHqDRy3IVFKYvJx_prL_vlN3jwdwsVJArTXCZXqgF4c_P4Zd1Xp4ZDwEYCaSKEYO1FIOP0pTPmL_GTJSCLiSs6czlQpXCMOSQAz_CMPONEfnBuNsI7M_PZqtU8ZbQaZ-jnnk3YF9XnBXOeOQ08OFkAS-PDiPABOsuBPCIAPYSam2FcDSHNWoEAl0BAgMDAklX4FQG9EZCQHYH4B-GLGqAyHNB_DJA-Ytn4EFQEHyGoH4CuH4BChwFhZChqnWH4HKHIH6Azqha-ZAE0nWjwlgGhCwG9CBYorZkSFzDyG81NElHNB-b-FLERerH4Dawxf4FPXNXpYsGRZVLqPhAgHgAxcrX4EpdEE-f4AAD1N4cAAAOHANKdlmsfgCSZlkAUVpMHAAAJlhZ6jlY5cEE1EtEiCVfFbSilZlf4G6zGQPVpdwCuQgBSFudQHuZESvUJhAFoB9CyChe-dNFoHNCFfNFmBmH4HkAUAYSAA",mdxType:"Playground"},(function(){return Object(c.b)((function(){var e=j({url:"https://randomuser.me/api",pollingInterval:3e3}),n=e.data,A=e.loading,t=e.timer,r=Object(s.useMemo)((function(){return(((n||{}).results||[])[0]||{}).email}),[n]);return Object(c.b)(u.a.Fragment,null,Object(c.b)(o.a,{spinning:A,mdxType:"Spin"},"email: ",r),Object(c.b)(a.a.Group,{style:{marginTop:16}},Object(c.b)(a.a,{onClick:t.pause,mdxType:"Button"},"pause"),Object(c.b)(a.a,{onClick:t.stop,mdxType:"Button"},"stop"),Object(c.b)(a.a,{onClick:t.resume,mdxType:"Button"},"resume")))}),{mdxType:"Demo"})})),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{}),"// \u4ec5\u9700\u914d\u7f6e\u4e00\u6b21\uff0c\u8bbe\u7f6e\u53d1\u9001\u8bf7\u6c42\u6240\u4f7f\u7528\u7684\u65b9\u6cd5\nconfigRequest(requestMethod);\n\nconst { // \u8fd4\u56de\u6570\u636e\u540c useAsync\n  loading: boolean;\n  error?: Error;\n  data?: T;\n  cancel: () => void;\n  run: () => Promise<T>;\n  timer: {\n    stop: () => void;\n    resume: () => void;\n    pause: () => void;\n  };\n} = useAPI(params)\n\nparams: {\n  url: string;\n  options?: RequestInit;\n  manual?: boolean;\n  pollingInterval?: number;\n  onSuccess?: (d: T) => void;\n  onError?: (e: Error) => void;\n  fetch?: (url: string, options?: RequestInit) => Promise<T>;\n}\n")))}E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/useAPI/index.mdx"}}),E.isMDXComponent=!0},"./src/useAsync/index.ts":function(e,n,A){"use strict";A.d(n,"a",(function(){return p}));var t=A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/helpers/esm/defineProperty.js"),r=A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/helpers/esm/slicedToArray.js"),o=A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/regenerator/index.js"),a=A.n(o),i=A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/helpers/esm/toConsumableArray.js"),s=A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/helpers/esm/asyncToGenerator.js"),u=A("./node_modules/_@babel_runtime@7.6.2@@babel/runtime/helpers/esm/classCallCheck.js"),c=A("react");function l(e,n){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),A.push.apply(A,t)}return A}function g(e){for(var n=1;n<arguments.length;n++){var A=null!=arguments[n]?arguments[n]:{};n%2?l(A,!0).forEach((function(n){Object(t.a)(e,n,A[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):l(A).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(A,n))}))}return e}var m=function e(n,A){var t=this;Object(u.a)(this,e),this.remaining=0,this.delay=0,this.cb=null,this.start=0,this.timerId=0,this.stop=function(){clearTimeout(t.timerId),t.timerId=0,t.remaining=t.delay},this.pause=function(){clearTimeout(t.timerId),t.remaining-=Date.now()-t.start},this.resume=function(){for(var e=arguments.length,n=new Array(e),A=0;A<e;A++)n[A]=arguments[A];if(t.start=Date.now(),clearTimeout(t.timerId),t.cb)return new Promise((function(e){t.timerId=setTimeout(Object(s.a)(a.a.mark((function A(){return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:t.cb&&(t.cb.apply(t,Object(i.a)(n||[])),e("No resolve value when pollingInterval is set, please use onSuccess & onError instead"));case 1:case"end":return A.stop()}}),A)}))),t.remaining)}))},this.remaining=A,this.delay=A,this.start=A,this.timerId=A,this.cb=n};"undefined"!==typeof Options&&Options&&Options===Object(Options)&&Object.isExtensible(Options)&&Object.defineProperty(Options,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Options",filename:"src/useAsync/index.ts"}});var B=function(){},d=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=Object(c.useState)({loading:!1,cancel:B,run:d,timer:{stop:B,resume:d,pause:B}}),o=Object(r.a)(t,2),u=o[0],l=o[1],p=Object(c.useRef)(void 0),C=Object(c.useRef)(0),j=Object(c.useRef)(!0);Object(c.useEffect)((function(){return C.current+=1,j.current=!0,function(){C.current+=1}}),n);var I=Object(c.useCallback)((function(){var n=C.current;return l((function(e){return g({},e,{loading:!0})})),e.apply(void 0,arguments).then((function(e){return n===C.current&&(A.onSuccess&&A.onSuccess(e),n===C.current&&l((function(n){return g({},n,{data:e,loading:!1})}))),e})).catch((function(e){return n===C.current&&(A.onError&&A.onError(e),n===C.current&&l((function(n){return g({},n,{error:e,loading:!1})}))),e}))}),n),b=Object(c.useCallback)((function(){C.current+=1,p.current&&p.current.stop(),l((function(e){return g({},e,{error:new Error("stopped"),loading:!1})}))}),[]),O=Object(c.useCallback)((function(){C.current+=1,p.current&&p.current.pause(),l((function(e){return g({},e,{error:new Error("paused"),loading:!1})}))}),[]),E=Object(c.useCallback)(Object(s.a)(a.a.mark((function e(){var n,A,t,r,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.current){e.next=3;break}for(A=o.length,t=new Array(A),r=0;r<A;r++)t[r]=o[r];return e.abrupt("return",(n=p.current).resume.apply(n,Object(i.a)(t||[])));case 3:return e.abrupt("return",void 0);case 4:case"end":return e.stop()}}),e)}))),[I]),y=Object(c.useCallback)(Object(s.a)(a.a.mark((function e(){var n,A,t,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=r.length,A=new Array(n),t=0;t<n;t++)A[t]=r[t];return e.next=3,I.apply(void 0,Object(i.a)(A||[]));case 3:return e.abrupt("return",E.apply(void 0,Object(i.a)(A||[])));case 4:case"end":return e.stop()}}),e)}))),[I]),M=Object(c.useCallback)(Object(s.a)(a.a.mark((function e(){var n,t,r,o,s,u,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=c.length,t=new Array(n),r=0;r<n;r++)t[r]=c[r];if(o=C.current,A.manual&&j.current){e.next=6;break}return e.next=5,I.apply(void 0,Object(i.a)(t||[]));case 5:s=e.sent;case 6:if(C.current!==o){e.next=15;break}if(p.current=new m((function(){return M.apply(void 0,t)}),A.pollingInterval),!j.current||!A.manual){e.next=12;break}j.current=!1,e.next=15;break;case 12:return e.next=14,(u=p.current).resume.apply(u,Object(i.a)(t||[]));case 14:s=e.sent;case 15:return e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)}))),[A.pollingInterval,A.manual,I]),Q=Object(c.useCallback)((function(){C.current+=1;for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return A.pollingInterval?(A.manual||b(),M.apply(void 0,n)):I.apply(void 0,Object(i.a)(n||[]))}),[I,A.pollingInterval]),w=Object(c.useCallback)((function(){C.current+=1,l((function(e){return g({},e,{error:new Error("canceled"),loading:!1})}))}),[]);return Object(c.useEffect)((function(){if(A.pollingInterval)M();else if(!A.manual){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];I.apply(void 0,Object(i.a)(n||[]))}return function(){C.current+=1,b()}}),[A.manual,A.pollingInterval,I,M]),{loading:u.loading,error:u.error,data:u.data,cancel:w,run:A.manual&&A.pollingInterval?y:Q,timer:{stop:b,resume:E,pause:O}}}"undefined"!==typeof ReturnValue&&ReturnValue&&ReturnValue===Object(ReturnValue)&&Object.isExtensible(ReturnValue)&&Object.defineProperty(ReturnValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReturnValue",filename:"src/useAsync/index.ts"}}),p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useAsync",filename:"src/useAsync/index.ts"}})}}]);