
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as y}from"./index.7b29bb33.js";import{_ as j}from"./index.f14483a3.js";import{_ as C}from"./index.341e7229.js";import{j as P,t as q,V as R,r as _,A as r,k as U,D as e,C as s,o as E,a0 as S,G as $}from"./vendor.ab59999c.js";import{a as B}from"./index.6da96519.js";const N=S("\u63D0\u4EA4"),z=P({name:"PersonalEditPassword"}),F=Object.assign(z,{setup(A){const c=q(),i=R(),{proxy:p}=$(),m=B(),f=(n,t,a)=>{t!==o.value.newpassword?a(new Error("\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801")):a()},o=_({password:"",newpassword:"",checkpassword:""}),w=_({password:[{required:!0,message:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801",trigger:"blur"}],newpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}],checkpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{validator:f}]});function g(){p.$refs.formRef.validate(n=>{n&&m.editPassword(o.value).then(()=>{p.$message({type:"success",message:"\u6A21\u62DF\u4FEE\u6539\u6210\u529F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"}),m.logout().then(()=>{i.push({name:"login",query:{redirect:c.fullPath}})})}).catch(()=>{})})}return(n,t)=>{const a=C,u=r("el-input"),d=r("el-form-item"),b=r("el-form"),v=r("el-col"),h=r("el-row"),x=j,V=r("el-button"),k=y;return E(),U("div",null,[e(a,{title:"\u4FEE\u6539\u5BC6\u7801",content:"\u5B9A\u671F\u4FEE\u6539\u5BC6\u7801\u53EF\u4EE5\u63D0\u9AD8\u5E10\u53F7\u5B89\u5168\u6027\u5662~"}),e(x,null,{default:s(()=>[e(h,null,{default:s(()=>[e(v,{md:24,lg:12},{default:s(()=>[e(b,{ref:"formRef",model:o.value,rules:w.value,"label-width":"120px"},{default:s(()=>[e(d,{label:"\u539F\u5BC6\u7801",prop:"password"},{default:s(()=>[e(u,{modelValue:o.value.password,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value.password=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u65B0\u5BC6\u7801",prop:"newpassword"},{default:s(()=>[e(u,{modelValue:o.value.newpassword,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value.newpassword=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u786E\u8BA4\u65B0\u5BC6\u7801",prop:"checkpassword"},{default:s(()=>[e(u,{modelValue:o.value.checkpassword,"onUpdate:modelValue":t[2]||(t[2]=l=>o.value.checkpassword=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1}),e(k,null,{default:s(()=>[e(V,{type:"primary",size:"large",onClick:g},{default:s(()=>[N]),_:1})]),_:1})])}}});export{F as default};
