
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,b as h,e as I,f as r,G as $,H as i,g as n,K as k,L as q,M as D,Q as R,B as N,F as G,W as H,X as J,n as S,I as z,J as O,T as V}from"./vendor.42421442.js";import{_ as P}from"./index.453bc986.js";import{_ as Q}from"./index.a753595f.js";import{_ as W}from"./index.23b07b48.js";import{_ as X}from"./index.086e4e4f.js";const Y=e=>(q("data-v-5b9249bd"),e=e(),D(),e),Z={class:"slot"},ee=Y(()=>i("div",{class:"el-upload__text"},[R("\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),i("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),te={key:0,class:"el-upload__tip"},ne={style:{display:"inline-block"}},ae={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:o}){const c=e,{proxy:v}=N();function a(p){const u=p.name.split("."),x=u[u.length-1],f=c.ext.indexOf(x)>=0,d=p.size/1024/1024<c.size;return f||v.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u53EA\u652F\u6301 ${c.ext.join(" / ")} \u683C\u5F0F\uFF01`),d||v.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${c.size}MB\uFF01`),f&&d}function y(){v.$message.warning("\u6587\u4EF6\u4E0A\u4F20\u8D85\u8FC7\u9650\u5236")}function b(p,u){o("on-success",p,u)}return(p,u)=>{const x=l("el-icon-upload-filled"),f=l("el-icon"),d=l("el-alert"),t=l("el-upload");return h(),I(t,{action:e.action,data:e.data,name:e.name,"before-upload":a,"on-exceed":y,"on-success":b,"file-list":e.files,limit:e.max,drag:""},{tip:r(()=>[e.notip?k("v-if",!0):(h(),$("div",te,[i("div",ne,[n(d,{title:`\u4E0A\u4F20\u6587\u4EF6\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u4E14\u6587\u4EF6\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u4E2A`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))]),default:r(()=>[i("div",Z,[n(f,{class:"el-icon--upload"},{default:r(()=>[n(x)]),_:1}),ee])]),_:1},8,["action","data","name","file-list","limit"])}}};var le=C(ae,[["__scopeId","data-v-5b9249bd"]]);const se={class:"upload-container"},ie={class:"mask"},oe={class:"actions"},ce=["onClick"],ue=["onClick"],re=["onClick"],de=["onClick"],pe={key:0,class:"el-upload__tip"},me={style:{display:"inline-block"}},he={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:o}){const c=e,{proxy:v}=N(),a=G({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function y(t){a.value.dialogImageIndex=t,a.value.imageViewerVisible=!0}function b(){a.value.imageViewerVisible=!1}function p(t){let m=c.url;m.splice(t,1),o("update:url",m)}function u(t,m){let s=c.url;m=="left"&&t!=0&&(s[t]=s.splice(t-1,1,s[t])[0]),m=="right"&&t!=s.length-1&&(s[t]=s.splice(t+1,1,s[t])[0]),o("update:url",s)}function x(t){const m=t.name.split("."),s=m[m.length-1],w=c.ext.indexOf(s)>=0,g=t.size/1024/1024<c.size;return w||v.$message.error(`\u4E0A\u4F20\u56FE\u7247\u53EA\u652F\u6301 ${c.ext.join(" / ")} \u683C\u5F0F\uFF01`),g||v.$message.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${c.size}MB\uFF01`),w&&g&&(a.value.progress.preview=URL.createObjectURL(t)),w&&g}function f(t){a.value.progress.percent=~~t.percent}function d(t){a.value.progress.preview="",a.value.progress.percent=0,o("on-success",t)}return(t,m)=>{const s=l("el-image"),w=l("el-icon-zoom-in"),g=l("el-icon"),B=l("el-icon-delete"),U=l("el-icon-back"),T=l("el-icon-right"),E=P,M=l("el-progress"),A=l("el-upload"),K=l("el-alert"),L=l("el-image-viewer");return h(),$("div",se,[(h(!0),$(H,null,J(e.url,(F,_)=>(h(),$("div",{key:_,class:"images"},[_<e.max?(h(),I(s,{key:0,src:F,style:S(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):k("v-if",!0),i("div",ie,[i("div",oe,[i("span",{title:"\u9884\u89C8",onClick:j=>y(_)},[n(g,null,{default:r(()=>[n(w)]),_:1})],8,ce),i("span",{title:"\u79FB\u9664",onClick:j=>p(_)},[n(g,null,{default:r(()=>[n(B)]),_:1})],8,ue),z(i("span",{title:"\u5DE6\u79FB",class:V({disabled:_==0}),onClick:j=>u(_,"left")},[n(g,null,{default:r(()=>[n(U)]),_:1})],10,re),[[O,e.url.length>1]]),z(i("span",{title:"\u53F3\u79FB",class:V({disabled:_==e.url.length-1}),onClick:j=>u(_,"right")},[n(g,null,{default:r(()=>[n(T)]),_:1})],10,de),[[O,e.url.length>1]])])])]))),128)),z(n(A,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":x,"on-progress":f,"on-success":d,drag:"",class:"images-upload"},{default:r(()=>[i("div",{class:"image-slot",style:S(`width:${e.width}px;height:${e.height}px;`)},[n(E,{name:"el-icon-plus"})],4),z(i("div",{class:"progress",style:S(`width:${e.width}px;height:${e.height}px;`)},[n(s,{src:a.value.progress.preview,style:S(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),n(M,{type:"circle",width:Math.min(e.width,e.height)*.8,percentage:a.value.progress.percent},null,8,["width","percentage"])],4),[[O,a.value.progress.percent]])]),_:1},8,["headers","action","data","name"]),[[O,e.url.length<e.max]]),e.notip?k("v-if",!0):(h(),$("div",pe,[i("div",me,[n(K,{title:`\u4E0A\u4F20\u56FE\u7247\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u5F20\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A ${e.width}*${e.height}\uFF0C\u4E14\u56FE\u7247\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u5F20`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),a.value.imageViewerVisible?(h(),I(L,{key:1,"url-list":e.url,"initial-index":a.value.dialogImageIndex,onClose:b},null,8,["url-list","initial-index"])):k("v-if",!0)])}}};var fe=C(he,[["__scopeId","data-v-41a69f6c"]]);const ge={data(){return{image:"",images:[],files:[{name:"\u6D4B\u8BD5\u6587\u4EF6.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}},mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){e.error==""?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){e.error==""?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,o){this.files.push({name:o.name,url:e.error==""?e.data.path:""}),this.$nextTick(()=>{e.error!=""&&(this.$message.warning(e.error),this.files.pop())})}}};function _e(e,o,c,v,a,y){const b=X,p=W,u=Q,x=fe,f=le;return h(),$("div",null,[n(b,{title:"\u4E0A\u4F20",content:"ImageUpload / ImagesUpload / FileUpload"}),n(u,{title:"\u5355\u56FE\u4E0A\u4F20"},{default:r(()=>[n(p,{url:a.image,"onUpdate:url":o[0]||(o[0]=d=>a.image=d),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess1},null,8,["url","onOnSuccess"])]),_:1}),n(u,{title:"\u591A\u56FE\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u5F20\uFF09"},{default:r(()=>[n(x,{url:a.images,"onUpdate:url":o[1]||(o[1]=d=>a.images=d),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess2},null,8,["url","onOnSuccess"])]),_:1}),n(u,{title:"\u6587\u4EF6\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u4E2A\uFF09"},{default:r(()=>[n(f,{files:a.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess3},null,8,["files","onOnSuccess"])]),_:1})])}var ke=C(ge,[["render",_e]]);export{ke as default};
