
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as M}from"./index.7acc1829.js";import{_ as h}from"./index.4e39c82e.js";import{r as b,y as C,A as S,a0 as w,B as V,o as v,l as y,F as _,D as k,m as d,Y as m,G as $,k as B,q as N}from"./vendor.db0e6471.js";const T={class:"map"},j={class:"search-name"},E=["title"],F={props:{v:{type:String,default:"1.4.15"},appkey:{type:String,default:""},height:{type:[Number,String],default:500},lnglat:{type:Array,default:()=>[]}},emits:["update:lnglat"],setup(g,{emit:s}){const a=g,p=b("");let t="",l="",r="";const i=C(()=>typeof a.height=="string"?a.height:`${a.height}px`);S(()=>{if(typeof AMap=="undefined"){let e=document.createElement("script");e.charset="UTF-8",e.src=`https://webapi.amap.com/maps?v=${a.v}&key=${a.appkey}&plugin=AMap.Autocomplete`,document.head.appendChild(e),e.onload=()=>{c()}}else w(()=>{c()})});function c(){t=new AMap.Map("amap",{zoom:12}),AMap.plugin("AMap.ToolBar",()=>{let e=new AMap.ToolBar;t.addControl(e)}),l=new AMap.Marker({draggable:!0,cursor:"move"}),l.on("dragend",e=>{s("update:lnglat",[e.lnglat.lng,e.lnglat.lat])}),r=new AMap.Autocomplete,t.on("click",e=>{u(e.lnglat.getLng(),e.lnglat.getLat())}),a.lnglat.length==2&&u(a.lnglat[0],a.lnglat[1])}function u(e,o){t.remove(l),l.setPosition([e,o]),t.add(l),t.setFitView(),s("update:lnglat",[e,o])}function x(e,o){r.search(e,(f,n)=>{o(n.tips)})}function A(e){p.value=e.name,e.location?u(e.location.lng,e.location.lat):t.setCity(e.adcode)}return(e,o)=>{const f=V("el-autocomplete");return v(),y("div",T,[_(f,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=n=>p.value=n),class:"search","fetch-suggestions":x,"trigger-on-focus":!1,clearable:"","prefix-icon":"el-icon-location-information",placeholder:"\u8BF7\u8F93\u5165\u5730\u5740\u5173\u952E\u5B57",onSelect:A},{default:k(({item:n})=>[d("div",j,m(n.name),1),d("span",{class:"search-address",title:n.district+n.address},m(n.district+n.address),9,E)]),_:1},8,["modelValue"]),d("div",{id:"amap",style:$(`height:${B(i)};`)},null,4)])}}};var U=h(F,[["__scopeId","data-v-6ebfa04b"]]);const z={name:"ComponentExampleAmap",props:{},data(){return{lnglat:[120.068384,30.290939]}},created(){},mounted(){},methods:{}};function D(g,s,a,p,t,l){const r=U,i=M;return v(),y("div",null,[_(i,null,{default:k(()=>[d("div",null,"\u7ECF\u7EAC\u5EA6\uFF1A"+m(t.lnglat),1),N(" \u6CE8\u610F\u8FD9\u91CC\u66FF\u6362\u9AD8\u5FB7\u5730\u56FE\u7684appkey "),_(r,{lnglat:t.lnglat,"onUpdate:lnglat":s[0]||(s[0]=c=>t.lnglat=c),appkey:"8f7844cc502e17bb549c04c9aaadaf94",height:600},null,8,["lnglat"])]),_:1})])}var G=h(z,[["render",D],["__scopeId","data-v-3c373116"]]);export{G as default};
