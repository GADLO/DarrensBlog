import{_ as C,b as A,s as S,r as D,d as o,e as E,o as c,f,w as e,H,g as t,h as l,c as T,i as V,F as w,j as B,k as L,t as M}from"./index-c097a7c7.js";import{m as h}from"./marked.esm-14d91642.js";const N={name:"Essay",components:{},setup(){const r=A(),{articles:a}=S(r);let _=!1,n=D("");console.log(a.githubData);function d(u){h.setOptions({highlight:function(i){return H.highlightAuto(i).value}}),n.value=h(u.node.body),console.log(n.value)}return{articles:a,isCollapse:_,openArticle:d,curArticle:n}}},F=["innerHTML"];function J(r,a,_,n,d,u){const i=o("el-menu-item"),g=o("el-menu-item-group"),s=o("el-sub-menu"),v=o("el-menu"),x=o("el-aside"),b=o("el-main"),m=o("el-container"),y=E("highlight");return c(),f(m,{style:{height:"100%",border:"1px solid #eee"}},{default:e(()=>[t(x,{width:"200px",style:{"background-color":"rgb(238, 241, 246)"}},{default:e(()=>[t(v,{collapse:n.isCollapse,"default-active":"1"},{default:e(()=>[t(s,{index:"1"},{title:e(()=>[l("Vanilla JS")]),default:e(()=>[t(g,{title:"原型"},{default:e(()=>[(c(!0),T(w,null,V(n.articles.githubData,(p,k)=>(c(),f(i,{index:`1-${k}`,onClick:$=>n.openArticle(p)},{default:e(()=>[l(M(p.node.title),1)]),_:2},1032,["index","onClick"]))),256))]),_:1})]),_:1}),t(s,{index:"2"},{title:e(()=>[l("CSS")]),_:1}),t(s,{index:"3"},{title:e(()=>[l("HTML")]),_:1}),t(s,{index:"4"},{title:e(()=>[l("VUE")]),_:1})]),_:1},8,["collapse"])]),_:1}),t(m,null,{default:e(()=>[t(b,{class:"content"},{default:e(()=>[B(L("div",{innerHTML:n.curArticle},null,8,F),[[y]])]),_:1})]),_:1})]),_:1})}const O=C(N,[["render",J],["__scopeId","data-v-ea3dfc6d"]]);export{O as default};