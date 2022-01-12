
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as N}from"./index.f14483a3.js";import{m as T,n as U,u as z,a as E}from"./index.6da96519.js";import{o as r,k as a,a5 as f,A as d,az as x,D as s,C as e,u as b,l,Z as G,X as g,a0 as o,G as I}from"./vendor.ab59999c.js";import{_ as P}from"./index.341e7229.js";const X={props:{value:{type:Array,default:()=>[]}},setup(m){const t=m;function c(){return T(t.value)}return(n,v)=>(r(),a("div",null,[c()?f(n.$slots,"default",{key:0}):f(n.$slots,"no-auth",{key:1})]))}},Z={props:{value:{type:[String,Array],default:""}},setup(m){const t=m;function c(){return U(t.value)}return(n,v)=>(r(),a("div",null,[c()?f(n.$slots,"default",{key:0}):f(n.$slots,"no-auth",{key:1})]))}},q={key:0},F={key:1},H=l("h3",null,"\u5207\u6362\u5E10\u53F7",-1),J=l("h3",null,"\u5E10\u53F7\u6743\u9650",-1),K=l("h3",null,"\u9274\u6743\u7EC4\u4EF6\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),L=o("\u4F60\u6709 permission.browse \u6743\u9650"),M=o("\u4F60\u6CA1\u6709 permission.browse \u6743\u9650"),O=o("\u4F60\u6709 permission.create \u6743\u9650"),Q=o("\u4F60\u6CA1\u6709 permission.create \u6743\u9650"),R=o("\u4F60\u6709 permission.browse \u6216 permission.create \u6743\u9650"),W=o("\u4F60\u6CA1\u6709 permission.browse \u6216 permission.create \u6743\u9650"),Y=o("\u4F60\u6709 permission.browse \u548C permission.create \u6743\u9650"),ee=o("\u4F60\u6CA1\u6709 permission.browse \u548C permission.create \u6743\u9650"),se=l("h3",null,"\u9274\u6743\u6307\u4EE4\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),oe=o(" \u5982\u679C\u4F60\u6709 permission.browse \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),te=[oe],ne=o(" \u5982\u679C\u4F60\u6709 permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),ie=[ne],re=o(" \u5982\u679C\u4F60\u6709 permission.browse \u6216 permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),ae=[re],le=o(" \u5982\u679C\u4F60\u6709 permission.browse \u548C permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),ue=[le],_e=l("h3",null,"\u9274\u6743\u51FD\u6570\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),ce=o("\u6821\u9A8C permission.browse \u6743\u9650"),pe=o("\u6821\u9A8C permission.create \u6743\u9650"),de=o("\u6821\u9A8C permission.browse \u6216 permission.create \u6743\u9650"),me=o("\u6821\u9A8C permission.browse \u548C permission.create \u6743\u9650"),ve={setup(m){const{proxy:t}=I(),c=z(),n=E();function v(_){t.$loading({lock:!0,text:"\u5E10\u53F7\u5207\u6362\u4E2D",background:"rgba(0, 0, 0, 0.7)"}),n.login({account:_,password:""}).then(()=>{setTimeout(()=>{location.reload()},1e3)})}function w(_){t.$auth(_)?t.$message.success("\u6821\u9A8C\u901A\u8FC7"):t.$message.error("\u6821\u9A8C\u4E0D\u901A\u8FC7")}function S(_){t.$authAll(_)?t.$message.success("\u6821\u9A8C\u901A\u8FC7"):t.$message.error("\u6821\u9A8C\u4E0D\u901A\u8FC7")}return(_,i)=>{const V=P,$=d("el-radio-button"),j=d("el-radio-group"),u=d("el-tag"),y=Z,A=X,h=d("el-button"),C=d("el-button-group"),D=N,k=x("auth"),B=x("auth-all");return r(),a("div",null,[s(V,{title:"\u6743\u9650\u9A8C\u8BC1"}),s(D,null,{default:e(()=>[b(c).enablePermission?(r(),a("div",F,[H,s(j,{modelValue:b(n).account,"onUpdate:modelValue":i[0]||(i[0]=p=>b(n).account=p),onChange:v},{default:e(()=>[s($,{label:"admin"}),s($,{label:"test"})]),_:1},8,["modelValue"]),J,l("div",null,G(b(n).permissions),1),K,l("div",null,[s(y,{value:"permission.browse",style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(u,{type:"danger"},{default:e(()=>[M]),_:1})]),default:e(()=>[s(u,null,{default:e(()=>[L]),_:1})]),_:1}),s(y,{value:"permission.create",style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(u,{type:"danger"},{default:e(()=>[Q]),_:1})]),default:e(()=>[s(u,null,{default:e(()=>[O]),_:1})]),_:1}),s(y,{value:["permission.browse","permission.create"],style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(u,{type:"danger"},{default:e(()=>[W]),_:1})]),default:e(()=>[s(u,null,{default:e(()=>[R]),_:1})]),_:1},8,["value"]),s(A,{value:["permission.browse","permission.create"]},{"no-auth":e(()=>[s(u,{type:"danger"},{default:e(()=>[ee]),_:1})]),default:e(()=>[s(u,null,{default:e(()=>[Y]),_:1})]),_:1},8,["value"])]),se,l("div",null,[g((r(),a("div",null,te)),[[k,"permission.browse"]]),g((r(),a("div",null,ie)),[[k,"permission.create"]]),g((r(),a("div",null,ae)),[[k,["permission.browse","permission.create"]]]),g((r(),a("div",null,ue)),[[B,["permission.browse","permission.create"]]])]),_e,l("div",null,[s(C,{style:{display:"block","margin-bottom":"10px"}},{default:e(()=>[s(h,{onClick:i[1]||(i[1]=p=>w("permission.browse"))},{default:e(()=>[ce]),_:1}),s(h,{onClick:i[2]||(i[2]=p=>w("permission.create"))},{default:e(()=>[pe]),_:1})]),_:1}),s(C,null,{default:e(()=>[s(h,{onClick:i[3]||(i[3]=p=>w(["permission.browse","permission.create"]))},{default:e(()=>[de]),_:1}),s(h,{onClick:i[4]||(i[4]=p=>S(["permission.browse","permission.create"]))},{default:e(()=>[me]),_:1})]),_:1})])])):(r(),a("div",q,"\u8BF7\u5230 seeting.js \u91CC\u6253\u5F00\u6743\u9650\u529F\u80FD\uFF0C\u518D\u8FDB\u5165\u8BE5\u9875\u9762\u67E5\u770B\u6F14\u793A"))]),_:1})])}}};export{ve as default};
