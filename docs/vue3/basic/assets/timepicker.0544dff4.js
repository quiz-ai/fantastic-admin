
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as b}from"./index.54bd0297.js";import{_ as V}from"./index.c69ca106.js";import v from"./alert.c3425144.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{r as u,b as x,F as T,g as t,f as p}from"./vendor.2f16a3e8.js";const o=(s,e)=>{const r=[];for(let d=s;d<=e;d++)r.push(d);return r},k={components:{Alert:v},data(){return{value:"",value1:new Date(2016,9,10,18,40),startTime:"",endTime:""}},methods:{disabledHours(){return o(0,16).concat(o(19,23))},disabledMinutes(s){if(s===17)return o(0,29);if(s===18)return o(31,59)},disabledSeconds(s,e){if(s===18&&e===30)return o(1,59)}}};function j(s,e,r,d,l,i){const c=u("Alert"),_=V,m=u("el-time-select"),a=b,f=u("el-time-picker");return x(),T("div",null,[t(c),t(_,{title:"\u65F6\u95F4\u9009\u62E9\u5668"}),t(a,{title:"\u56FA\u5B9A\u65F6\u95F4\u70B9",class:"demo"},{default:p(()=>[t(m,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value=n),start:"08:30",step:"00:15",end:"18:30",placeholder:"\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),t(a,{title:"\u4EFB\u610F\u65F6\u95F4\u70B9",class:"demo"},{default:p(()=>[t(f,{modelValue:l.value1,"onUpdate:modelValue":e[1]||(e[1]=n=>l.value1=n),"disabled-hours":i.disabledHours,"disabled-minutes":i.disabledMinutes,"disabled-seconds":i.disabledSeconds,placeholder:"\u4EFB\u610F\u65F6\u95F4\u70B9"},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])]),_:1}),t(a,{title:"\u56FA\u5B9A\u65F6\u95F4\u8303\u56F4",class:"demo"},{default:p(()=>[t(m,{modelValue:l.startTime,"onUpdate:modelValue":e[2]||(e[2]=n=>l.startTime=n),placeholder:"\u8D77\u59CB\u65F6\u95F4",start:"08:30",step:"00:15",end:"18:30",style:{"margin-right":"10px"}},null,8,["modelValue"]),t(m,{modelValue:l.endTime,"onUpdate:modelValue":e[3]||(e[3]=n=>l.endTime=n),placeholder:"\u7ED3\u675F\u65F6\u95F4",start:"08:30",step:"00:15",end:"18:30","min-time":l.startTime},null,8,["modelValue","min-time"])]),_:1})])}var C=g(k,[["render",j]]);export{C as default};
