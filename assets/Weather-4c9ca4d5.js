import{_ as D,d as I,r as n,e as c,o as w,f as x,w as s,g as o,h,b as a,t,p as V,i as S}from"./index-814311f6.js";const W={name:"Weather",setup(){I(()=>{d()});const l=n("广州"),r=n(""),i=n(""),e=n("暂无数据"),p=n({}),m=n([]);function d(){`${l}`}return{city:l,weatherData:r,todayData:i,plc:e,realtime:p,futureData:m}}},g=l=>(V("data-v-45478ebb"),l=l(),S(),l),k={class:"today"},q={class:"real"},B={class:"temp"},N={class:"realInfo"},C={class:"realInfo"},M={class:"realInfo"},T={class:"real"},U={class:"realInfo"},j={class:"realInfo"},z={class:"future"},A=g(()=>a("div",{class:"header"},"5日天气预报",-1));function E(l,r,i,e,p,m){const d=c("el-input"),f=c("el-header"),_=c("el-table-column"),b=c("el-table"),u=c("el-main"),y=c("el-container");return w(),x(y,{class:"container"},{default:s(()=>[o(f,null,{default:s(()=>[o(d,{placeholder:"请输入",class:"input",modelValue:e.city,"onUpdate:modelValue":r[0]||(r[0]=v=>e.city=v)},{prepend:s(()=>[h("城市：")]),_:1},8,["modelValue"])]),_:1}),o(u,{class:"main"},{default:s(()=>[a("div",k,[h(" 今天： "),a("span",null,t(e.todayData.weather??e.plc)+" "+t(e.todayData.temperature??e.plc),1),a("span",null,t(e.todayData.direct??e.plc),1),a("span",null,t(e.todayData.date),1)]),a("div",q,[a("span",B,t(e.realtime.temperature??e.plc),1),a("span",N,t(e.realtime.info??e.plc),1),a("span",C,t(e.realtime.direct??e.plc),1),a("span",M,t(e.realtime.power??e.plc),1)]),a("div",T,[a("span",U,"空气质量："+t(e.realtime.aqi??e.plc),1),a("span",j,"湿度："+t(e.realtime.humidity??e.plc),1)]),a("div",z,[A,o(b,{data:e.futureData},{default:s(()=>[o(_,{prop:"date",label:"日期"}),o(_,{prop:"temperature",label:"温度"}),o(_,{prop:"weather",label:"天气"}),o(_,{prop:"direct",label:"风向"})]),_:1},8,["data"])])]),_:1})]),_:1})}const G=D(W,[["render",E],["__scopeId","data-v-45478ebb"]]);export{G as default};