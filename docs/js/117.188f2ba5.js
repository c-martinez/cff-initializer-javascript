"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[117],{1364:(e,t,s)=>{s.d(t,{n:()=>i});var a=s(1959),l=s(3673),o=s(2883),n=s.n(o);const r=(0,a.iH)({"cff-version":"1.2.0",type:"software"});function i(){return{abstract:(0,l.Fl)((()=>r.value.abstract)),asYAML:(0,l.Fl)((()=>n().dump(r.value))),cff:(0,l.Fl)((()=>r.value)),commit:(0,l.Fl)((()=>r.value.commit)),date_released:(0,l.Fl)((()=>r.value.date_released)),identifiers:(0,l.Fl)((()=>r.value.identifiers)),keywords:(0,l.Fl)((()=>r.value.keywords)),license:(0,l.Fl)((()=>r.value.license)),message:(0,l.Fl)((()=>r.value.message)),repository:(0,l.Fl)((()=>r.value.repository)),repository_artifact:(0,l.Fl)((()=>r.value.repository_artifact)),repository_code:(0,l.Fl)((()=>r.value.repository_code)),title:(0,l.Fl)((()=>r.value.title)),type:(0,l.Fl)((()=>r.value.type)),url:(0,l.Fl)((()=>r.value.url)),version:(0,l.Fl)((()=>r.value.version)),setAbstract:e=>{r.value.abstract=e},setCommit:e=>{r.value.commit=e},setDateReleased:e=>{r.value.date_released=e},setIdentifiers:e=>{r.value.identifiers=e},setKeywords:e=>{r.value.keywords=e},setLicense:e=>{r.value.license=e},setMessage:e=>{r.value.message=e},setRepository:e=>{r.value.repository=e},setRepositoryArtifact:e=>{r.value.repository_artifact=e},setRepositoryCode:e=>{r.value.repository_code=e},setTitle:e=>{r.value.title=e},setType:e=>{r.value.type=e},setUrl:e=>{r.value.url=e},setVersion:e=>{r.value.version=e}}}},8150:(e,t,s)=>{s.d(t,{g:()=>n});var a=s(1959),l=s(3673);const o=(0,a.iH)(1);function n(){return{step:(0,l.Fl)((()=>o.value)),next:()=>{o.value=o.value+1},previous:()=>{o.value=o.value-1},goto:e=>{o.value=e}}}},6281:(e,t,s)=>{s.d(t,{Z:()=>f});var a=s(3673);const l={class:"row action-buttons"},o={class:"col"},n={class:"col q-mr-lg",align:"right"};function r(e,t,s,r,i,u){const c=(0,a.up)("q-btn"),v=(0,a.up)("q-btn-group");return(0,a.wg)(),(0,a.j4)("div",l,[(0,a.Wm)("div",o,[(0,a.Wm)(c,{color:"",flat:"",label:"Back","no-caps":"",onClick:e.navigatePrevious},null,8,["onClick"])]),(0,a.Wm)("div",n,[(0,a.Wm)(v,{flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{color:"",flat:"",label:"Finish","no-caps":"",to:"/finish"}),(0,a.Wm)(c,{color:"grey-6",label:"Next","no-caps":"",onClick:e.navigateNext},null,8,["onClick"])])),_:1})])])}var i=s(9582),u=s(8150);const c=(0,a.aZ)({name:"StepperActions",setup(){const e=(0,u.g)(),t=(0,i.tv)(),s=()=>{e.next();const s=`/${e.step.value}`;return t.push({path:s})},a=()=>{e.previous();const s=`/${e.step.value}`;return t.push({path:s})},l=s=>{e.goto(s);const a=`/${e.step.value}`;return t.push({path:a})};return{step:e,navigateNext:s,navigatePrevious:a,navigateTo:l}}});var v=s(8240),p=s(6375),d=s(7518),m=s.n(d);c.render=r;const f=c;m()(c,"components",{QBtn:v.Z,QBtnGroup:p.Z})},6117:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(3673);const l=(0,a.HX)("data-v-4e1acf60");(0,a.dD)("data-v-4e1acf60");const o={class:"q-pa-md col-flex"},n={class:"q-gutter-md title-field text-dark"},r=(0,a.Wm)("p",{class:"page-title"}," License ",-1),i=(0,a.Wm)("p",{class:"question"}," What is the license of the work? ",-1);(0,a.Cn)();const u=l(((e,t,s,l,u,c)=>{const v=(0,a.up)("q-input"),p=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("div",o,[(0,a.Wm)("div",n,[r,i,(0,a.Wm)(v,{"bg-color":"white",label:"license",outlined:"",standout:"","model-value":e.license,rules:[e=>e&&e.length>3||"Please use minimum 3 characters"],"onUpdate:modelValue":e.setLicense},null,8,["model-value","rules","onUpdate:modelValue"])])]),(0,a.Wm)(p)],64)}));var c=s(6281),v=s(1364);const p=(0,a.aZ)({name:"License",components:{StepperActions:c.Z},setup(){const e=(0,v.n)();return{license:e.license,setLicense:e.setLicense}}});var d=s(8908),m=s(7518),f=s.n(m);p.render=u,p.__scopeId="data-v-4e1acf60";const g=p;f()(p,"components",{QInput:d.Z})}}]);