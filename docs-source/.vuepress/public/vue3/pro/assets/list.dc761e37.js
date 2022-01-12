
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as H}from"./index.7acc1829.js";import{_ as O}from"./index.6e45f9d2.js";import{_ as T}from"./index.7255c22f.js";import{_ as Z}from"./index.f0514fa3.js";import{j as J,U as Q,r as W,A as X,ae as Y,B as s,aA as ee,l as te,F as t,D as a,C as g,q as h,H as oe,o as c,Z as ae,V as le,k as p,s as ne,t as se,$ as i,m as ie}from"./vendor.db0e6471.js";import{u as re}from"./pagination.fdbe7ec8.js";import de from"./index.618fe6d9.js";import{_ as ue}from"./index.4e39c82e.js";import"./index.fcce090b.js";const _e=m=>(ne("data-v-7c42672e"),m=m(),se(),m),ce=_e(()=>ie("p",null,"\u6807\u51C6\u6A21\u5757\u7684\u4F18\u52BF\u4E4B\u4E00\u5C31\u662F\uFF0C\u53EF\u6839\u636E\u8868\u5355\u5185\u5BB9\u91CF\u4E0E\u5173\u8054\u6027\uFF0C\u5FEB\u901F\u5207\u6362\u8868\u5355\u5C55\u793A\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E09\u79CD\u5E38\u89C1\u6A21\u5F0F",-1)),pe=i("\u8DEF\u7531\u8DF3\u8F6C"),me=i("\u5BF9\u8BDD\u6846"),fe=i("\u62BD\u5C49"),ge=i("\u65B0\u589E"),ve=i("\u7B5B \u9009"),be=i("\u5355\u4E2A\u6279\u91CF\u64CD\u4F5C\u6309\u94AE"),he=i("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC41"),Ce=i("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC42"),Me=i("\u7F16\u8F91"),xe=i("\u5220\u9664"),ye=J({name:"PagesExampleFormModeList"}),ke=Object.assign(ye,{setup(m){const{pagination:u,getParams:x,onSizeChange:y,onCurrentChange:k,onSortChange:$}=re(),{proxy:_}=oe(),C=Q(),e=W({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});X(()=>{r(),e.value.formMode==="router"&&_.$eventBus.on("get-data-list",()=>{r()})}),Y(()=>{e.value.formMode==="router"&&_.$eventBus.off("get-data-list")});function r(){e.value.loading=!0;let l=x();e.value.search.title&&(l.title=e.value.search.title),_.$api.get("pages_example/form_mode/list",{baseURL:"/mock/",params:l}).then(o=>{e.value.loading=!1,e.value.dataList=o.data.list,u.value.total=o.data.total})}function z(l){y(l).then(()=>r())}function f(l=1){k(l).then(()=>r())}function V(l,o){$(l,o).then(()=>r())}function w(){e.value.formMode==="router"?C.push({name:"pagesExampleGeneralFormModeCreate"}):(e.value.formModeProps.id="",e.value.formModeProps.visible=!0)}function j(l){e.value.formMode==="router"?C.push({name:"pagesExampleGeneralFormModeEdit",params:{id:l.id}}):(e.value.formModeProps.id=l.id,e.value.formModeProps.visible=!0)}function L(l){_.$confirm(`\u786E\u8BA4\u5220\u9664\u300C${l.title}\u300D\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{_.$api.post("pages_example/form_mode/delete",{id:l.id},{baseURL:"/mock/"}).then(()=>{r(),_.$message.success({message:"\u6A21\u62DF\u5220\u9664\u6210\u529F",center:!0})})}).catch(()=>{})}return(l,o)=>{const v=s("el-radio-button"),P=s("el-radio-group"),S=Z,d=s("el-button"),B=s("el-input"),M=s("el-form-item"),D=s("el-col"),U=s("el-row"),E=s("el-form"),F=T,I=s("el-button-group"),N=O,b=s("el-table-column"),A=s("el-table"),R=s("el-pagination"),G=H,K=ee("loading");return c(),te("div",null,[t(S,{title:"\u8868\u5355\u5C55\u793A\u6A21\u5F0F"},{content:a(()=>[ce,t(P,{modelValue:e.value.formMode,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value.formMode=n),size:"default"},{default:a(()=>[t(v,{label:"router"},{default:a(()=>[pe]),_:1}),t(v,{label:"dialog"},{default:a(()=>[me]),_:1}),t(v,{label:"drawer"},{default:a(()=>[fe]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(G,null,{default:a(()=>[t(d,{type:"primary",size:"large",icon:"el-icon-plus",onClick:w},{default:a(()=>[ge]),_:1}),t(F,null,{default:a(()=>[t(E,{model:e.value.search,size:"default","label-width":"100px","label-suffix":"\uFF1A"},{default:a(()=>[t(U,null,{default:a(()=>[t(D,{span:12},{default:a(()=>[t(M,{label:"\u6807\u9898"},{default:a(()=>[t(B,{modelValue:e.value.search.title,"onUpdate:modelValue":o[1]||(o[1]=n=>e.value.search.title=n),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:o[2]||(o[2]=ae(n=>f(),["enter"])),onClear:o[3]||(o[3]=n=>f())},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(M,null,{default:a(()=>[t(d,{type:"primary",icon:"el-icon-search",onClick:o[4]||(o[4]=n=>f())},{default:a(()=>[ve]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e.value.batch.enable?(c(),g(N,{key:0,data:e.value.dataList,"selection-data":e.value.batch.selectionDataList,onCheckAll:o[5]||(o[5]=n=>l.$refs.table.toggleAllSelection()),onCheckNull:o[6]||(o[6]=n=>l.$refs.table.clearSelection())},{default:a(()=>[t(d,{size:"default"},{default:a(()=>[be]),_:1}),t(I,null,{default:a(()=>[t(d,{size:"default"},{default:a(()=>[he]),_:1}),t(d,{size:"default"},{default:a(()=>[Ce]),_:1})]),_:1})]),_:1},8,["data","selection-data"])):h("v-if",!0),le((c(),g(A,{ref:"table",class:"list-table",data:e.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:V,onSelectionChange:o[7]||(o[7]=n=>e.value.batch.selectionDataList=n)},{default:a(()=>[e.value.batch.enable?(c(),g(b,{key:0,type:"selection",align:"center",fixed:""})):h("v-if",!0),t(b,{prop:"title",label:"\u6807\u9898"}),t(b,{label:"\u64CD\u4F5C",width:"250",align:"center",fixed:"right"},{default:a(n=>[t(d,{type:"primary",size:"small",plain:"",onClick:q=>j(n.row)},{default:a(()=>[Me]),_:2},1032,["onClick"]),t(d,{type:"danger",size:"small",plain:"",onClick:q=>L(n.row)},{default:a(()=>[xe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[K,e.value.loading]]),t(R,{"current-page":p(u).page,total:p(u).total,"page-size":p(u).size,"page-sizes":p(u).sizes,layout:p(u).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:z,onCurrentChange:f},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),["dialog","drawer"].includes(e.value.formMode)?(c(),g(de,{key:0,id:e.value.formModeProps.id,modelValue:e.value.formModeProps.visible,"onUpdate:modelValue":o[8]||(o[8]=n=>e.value.formModeProps.visible=n),mode:e.value.formMode,onSuccess:r},null,8,["id","modelValue","mode"])):h("v-if",!0)])}}});var De=ue(ke,[["__scopeId","data-v-7c42672e"]]);export{De as default};
