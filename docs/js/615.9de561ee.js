"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[615],{1364:(e,t,s)=>{s.d(t,{n:()=>n});var a=s(1959),l=s(3673),r=s(2883),o=s.n(r);const i=(0,a.iH)({"cff-version":"1.2.0",type:"software"});function n(){return{abstract:(0,l.Fl)((()=>i.value.abstract)),asYAML:(0,l.Fl)((()=>o().dump(i.value))),cff:(0,l.Fl)((()=>i.value)),commit:(0,l.Fl)((()=>i.value.commit)),date_released:(0,l.Fl)((()=>i.value.date_released)),identifiers:(0,l.Fl)((()=>i.value.identifiers)),keywords:(0,l.Fl)((()=>i.value.keywords)),license:(0,l.Fl)((()=>i.value.license)),message:(0,l.Fl)((()=>i.value.message)),repository:(0,l.Fl)((()=>i.value.repository)),repository_artifact:(0,l.Fl)((()=>i.value.repository_artifact)),repository_code:(0,l.Fl)((()=>i.value.repository_code)),title:(0,l.Fl)((()=>i.value.title)),type:(0,l.Fl)((()=>i.value.type)),url:(0,l.Fl)((()=>i.value.url)),version:(0,l.Fl)((()=>i.value.version)),setAbstract:e=>{i.value.abstract=e},setCommit:e=>{i.value.commit=e},setDateReleased:e=>{i.value.date_released=e},setIdentifiers:e=>{i.value.identifiers=e},setKeywords:e=>{i.value.keywords=e},setLicense:e=>{i.value.license=e},setMessage:e=>{i.value.message=e},setRepository:e=>{i.value.repository=e},setRepositoryArtifact:e=>{i.value.repository_artifact=e},setRepositoryCode:e=>{i.value.repository_code=e},setTitle:e=>{i.value.title=e},setType:e=>{i.value.type=e},setUrl:e=>{i.value.url=e},setVersion:e=>{i.value.version=e}}}},8150:(e,t,s)=>{s.d(t,{g:()=>o});var a=s(1959),l=s(3673);const r=(0,a.iH)(1);function o(){return{step:(0,l.Fl)((()=>r.value)),next:()=>{r.value=r.value+1},previous:()=>{r.value=r.value-1},goto:e=>{r.value=e}}}},6281:(e,t,s)=>{s.d(t,{Z:()=>m});var a=s(3673);const l={class:"row action-buttons"},r={class:"col"},o={class:"col q-mr-lg",align:"right"};function i(e,t,s,i,n,u){const c=(0,a.up)("q-btn"),v=(0,a.up)("q-btn-group");return(0,a.wg)(),(0,a.j4)("div",l,[(0,a.Wm)("div",r,[(0,a.Wm)(c,{color:"",flat:"",label:"Back","no-caps":"",onClick:e.navigatePrevious},null,8,["onClick"])]),(0,a.Wm)("div",o,[(0,a.Wm)(v,{flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{color:"",flat:"",label:"Finish","no-caps":"",to:"/finish"}),(0,a.Wm)(c,{color:"grey-6",label:"Next","no-caps":"",onClick:e.navigateNext},null,8,["onClick"])])),_:1})])])}var n=s(9582),u=s(8150);const c=(0,a.aZ)({name:"StepperActions",setup(){const e=(0,u.g)(),t=(0,n.tv)(),s=()=>{e.next();const s=`/${e.step.value}`;return t.push({path:s})},a=()=>{e.previous();const s=`/${e.step.value}`;return t.push({path:s})},l=s=>{e.goto(s);const a=`/${e.step.value}`;return t.push({path:a})};return{step:e,navigateNext:s,navigatePrevious:a,navigateTo:l}}});var v=s(8240),p=s(6375),d=s(7518),f=s.n(d);c.render=i;const m=c;f()(c,"components",{QBtn:v.Z,QBtnGroup:p.Z})},7615:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(3673);const l=(0,a.HX)("data-v-1bbf1830");(0,a.dD)("data-v-1bbf1830");const r=(0,a.Wm)("div",{class:"q-pa-md col-flex"},[(0,a.Wm)("div",{class:"q-gutter-md title-field text-dark"},[(0,a.Wm)("p",{class:"page-title"}," Identifiers ")])],-1);(0,a.Cn)();const o=l(((e,t,s,l,o,i)=>{const n=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)(a.HY,null,[r,(0,a.Wm)(n)],64)}));var i=s(6281),n=s(1364);const u=(0,a.aZ)({name:"PageIdentifiers",components:{StepperActions:i.Z},setup(){const e=(0,n.n)();return{identifiers:e.identifiers,setIdentifiers:e.setIdentifiers}}});u.render=o,u.__scopeId="data-v-1bbf1830";const c=u}}]);