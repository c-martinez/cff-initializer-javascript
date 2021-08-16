"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[594],{1364:(e,t,a)=>{a.d(t,{n:()=>u});var s=a(1959),l=a(3673),o=a(2883),r=a.n(o);const n=(0,s.iH)({"cff-version":"1.2.0",type:"software"});function u(){return{abstract:(0,l.Fl)((()=>n.value.abstract)),asYAML:(0,l.Fl)((()=>r().dump(n.value))),cff:(0,l.Fl)((()=>n.value)),commit:(0,l.Fl)((()=>n.value.commit)),date_released:(0,l.Fl)((()=>n.value.date_released)),identifiers:(0,l.Fl)((()=>n.value.identifiers)),keywords:(0,l.Fl)((()=>n.value.keywords)),license:(0,l.Fl)((()=>n.value.license)),message:(0,l.Fl)((()=>n.value.message)),repository:(0,l.Fl)((()=>n.value.repository)),repository_artifact:(0,l.Fl)((()=>n.value.repository_artifact)),repository_code:(0,l.Fl)((()=>n.value.repository_code)),title:(0,l.Fl)((()=>n.value.title)),type:(0,l.Fl)((()=>n.value.type)),url:(0,l.Fl)((()=>n.value.url)),version:(0,l.Fl)((()=>n.value.version)),setAbstract:e=>{n.value.abstract=e},setCommit:e=>{n.value.commit=e},setDateReleased:e=>{n.value.date_released=e},setIdentifiers:e=>{n.value.identifiers=e},setKeywords:e=>{n.value.keywords=e},setLicense:e=>{n.value.license=e},setMessage:e=>{n.value.message=e},setRepository:e=>{n.value.repository=e},setRepositoryArtifact:e=>{n.value.repository_artifact=e},setRepositoryCode:e=>{n.value.repository_code=e},setTitle:e=>{n.value.title=e},setType:e=>{n.value.type=e},setUrl:e=>{n.value.url=e},setVersion:e=>{n.value.version=e}}}},8150:(e,t,a)=>{a.d(t,{g:()=>r});var s=a(1959),l=a(3673);const o=(0,s.iH)(1);function r(){return{step:(0,l.Fl)((()=>o.value)),next:()=>{o.value=o.value+1},previous:()=>{o.value=o.value-1},goto:e=>{o.value=e}}}},6281:(e,t,a)=>{a.d(t,{Z:()=>f});var s=a(3673);const l={class:"row action-buttons"},o={class:"col"},r={class:"col q-mr-lg",align:"right"};function n(e,t,a,n,u,i){const c=(0,s.up)("q-btn"),v=(0,s.up)("q-btn-group");return(0,s.wg)(),(0,s.j4)("div",l,[(0,s.Wm)("div",o,[(0,s.Wm)(c,{color:"",flat:"",label:"Back","no-caps":"",onClick:e.navigatePrevious},null,8,["onClick"])]),(0,s.Wm)("div",r,[(0,s.Wm)(v,{flat:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{color:"",flat:"",label:"Finish","no-caps":"",to:"/finish"}),(0,s.Wm)(c,{color:"grey-6",label:"Next","no-caps":"",onClick:e.navigateNext},null,8,["onClick"])])),_:1})])])}var u=a(9582),i=a(8150);const c=(0,s.aZ)({name:"StepperActions",setup(){const e=(0,i.g)(),t=(0,u.tv)(),a=()=>{e.next();const a=`/${e.step.value}`;return t.push({path:a})},s=()=>{e.previous();const a=`/${e.step.value}`;return t.push({path:a})},l=a=>{e.goto(a);const s=`/${e.step.value}`;return t.push({path:s})};return{step:e,navigateNext:a,navigatePrevious:s,navigateTo:l}}});var v=a(8240),p=a(6375),d=a(7518),m=a.n(d);c.render=n;const f=c;m()(c,"components",{QBtn:v.Z,QBtnGroup:p.Z})},4594:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(3673);const l=(0,s.HX)("data-v-3a77190c");(0,s.dD)("data-v-3a77190c");const o={class:"q-pa-md col-flex"},r={class:"q-gutter-md title-field text-dark"},n=(0,s.Wm)("p",{class:"q-mt-xl page-title"}," Abstract ",-1),u=(0,s.Wm)("p",{class:"question"}," What is the abstract of the work? ",-1);(0,s.Cn)();const i=l(((e,t,a,l,i,c)=>{const v=(0,s.up)("q-input"),p=(0,s.up)("StepperActions");return(0,s.wg)(),(0,s.j4)(s.HY,null,[(0,s.Wm)("div",o,[(0,s.Wm)("div",r,[n,u,(0,s.Wm)(v,{"bg-color":"white",label:"abstract",outlined:"",standout:"",type:"textarea","model-value":e.abstract,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setAbstract},null,8,["model-value","rules","onUpdate:modelValue"])])]),(0,s.Wm)(p)],64)}));var c=a(6281),v=a(1364);const p=(0,s.aZ)({name:"PageTitle",components:{StepperActions:c.Z},setup(){const e=(0,v.n)();return{abstract:e.abstract,setAbstract:e.setAbstract}}});var d=a(8908),m=a(7518),f=a.n(m);p.render=i,p.__scopeId="data-v-3a77190c";const g=p;f()(p,"components",{QInput:d.Z})}}]);