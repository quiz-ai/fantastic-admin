
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var j=Object.defineProperty,F=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(t,e,o)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))I.call(e,o)&&k(t,o,e[o]);if(V)for(var o of V(e))S.call(e,o)&&k(t,o,e[o]);return t},x=(t,e)=>F(t,D(e));import p from"./index.0df38d95.js";import{_ as U}from"./index.4e39c82e.js";import{y as C,B as _,l as $,C as b,D as a,k as c,ag as w,q,o as f,F as s,af as B,m as E,$ as u,H}from"./vendor.db0e6471.js";const M=u("\u53D6 \u6D88"),P=u("\u786E \u5B9A"),R={class:"buttons"},T=u("\u53D6 \u6D88"),A=u("\u786E \u5B9A"),G={props:x(v({},p.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:e}){const o=t,{proxy:z}=H();let l=C({get:function(){return o.modelValue},set:function(r){e("update:modelValue",r)}});const y=C(()=>o.id==""?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8");function g(){z.$refs.form.submit(()=>{e("success"),m()})}function m(){l.value=!1}return(r,n)=>{const i=_("el-button"),h=_("el-dialog"),N=_("el-drawer");return f(),$("div",null,[o.mode==="dialog"?(f(),b(h,{key:0,modelValue:c(l),"onUpdate:modelValue":n[0]||(n[0]=d=>w(l)?l.value=d:l=d),title:c(y),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:a(()=>[s(i,{size:"large",onClick:m},{default:a(()=>[M]),_:1}),s(i,{type:"primary",size:"large",onClick:g},{default:a(()=>[P]),_:1})]),default:a(()=>[s(p,B({ref:"form"},r.$props),null,16)]),_:1},8,["modelValue","title"])):o.mode==="drawer"?(f(),b(N,{key:1,modelValue:c(l),"onUpdate:modelValue":n[1]||(n[1]=d=>w(l)?l.value=d:l=d),title:c(y),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:a(()=>[s(p,B({ref:"form"},r.$props,{class:"form-container"}),null,16),E("div",R,[s(i,{size:"large",onClick:m},{default:a(()=>[T]),_:1}),s(i,{type:"primary",size:"large",onClick:g},{default:a(()=>[A]),_:1})])]),_:1},8,["modelValue","title"])):q("v-if",!0)])}}};var Q=U(G,[["__scopeId","data-v-2623c5d2"]]);export{Q as default};
