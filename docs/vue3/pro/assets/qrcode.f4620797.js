
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as m}from"./index.f14483a3.js";import{_ as p}from"./index.341e7229.js";import{_ as h}from"./index.6da96519.js";import{A as l,k as f,D as e,C as o,o as g,l as a,a0 as v}from"./vendor.ab59999c.js";const x={data(){return{url1:"",url2:"",url3:""}},mounted(){this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01").then(t=>{this.url1=t}).catch(t=>{console.log(t)}),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin \u771F\u68D2\uFF01").then(()=>{console.log("success")}).catch(t=>{console.log(t)}),this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then(t=>{this.url2=t}).catch(t=>{console.log(t)}),this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{width:100}).then(t=>{this.url3=t}).catch(t=>{console.log(t)})},methods:{open(t){window.open(t,"top")}}},q=v("node-qrcode \u5B98\u7F51"),y=["src"],$={ref:"canvas"},k=["src"],w=["src"];function E(t,r,b,C,c,_){const i=l("el-button"),d=p,n=m,s=l("el-col"),u=l("el-row");return g(),f("div",null,[e(d,{title:"\u4E8C\u7EF4\u7801"},{default:o(()=>[e(i,{icon:"el-icon-link",onClick:r[0]||(r[0]=j=>_.open("https://github.com/soldair/node-qrcode"))},{default:o(()=>[q]),_:1})]),_:1}),e(u,{gutter:20,style:{margin:"0 10px"}},{default:o(()=>[e(s,{sm:6},{default:o(()=>[e(n,{title:"\u6E32\u67D3\u6210 img \u6807\u7B7E",style:{margin:"0"}},{default:o(()=>[a("img",{src:c.url1},null,8,y)]),_:1})]),_:1}),e(s,{sm:6},{default:o(()=>[e(n,{title:"\u6E32\u67D3\u6210 canvas \u6807\u7B7E",style:{margin:"0"}},{default:o(()=>[a("canvas",$,null,512)]),_:1})]),_:1}),e(s,{sm:6},{default:o(()=>[e(n,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",style:{margin:"0"}},{default:o(()=>[a("img",{src:c.url2},null,8,k)]),_:1})]),_:1}),e(s,{sm:6},{default:o(()=>[e(n,{title:"\u6307\u5B9A\u5BBD\u5EA6",style:{margin:"0"}},{default:o(()=>[a("img",{src:c.url3},null,8,w)]),_:1})]),_:1})]),_:1})])}var N=h(x,[["render",E],["__scopeId","data-v-39b21edc"]]);export{N as default};
