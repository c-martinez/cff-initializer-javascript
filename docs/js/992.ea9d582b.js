"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[992],{9827:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var o=n(3673);const i=(0,o.HX)("data-v-0691a3b6");(0,o.dD)("data-v-0691a3b6");const a={id:"app"},r=(0,o.Wm)("span",{class:"spacer"},null,-1),s={id:"header-outer"},c={id:"header-inner"},d={id:"middle"},l={id:"preview"},u={id:"preview-content"},p={id:"preview-button-bar"},v={id:"footer-outer"},m={id:"footer-inner"},f=(0,o.Wm)("span",{class:"spacer"},null,-1);(0,o.Cn)();const w=i(((e,t,n,i,w,h)=>{const W=(0,o.up)("Header"),y=(0,o.up)("router-view"),b=(0,o.up)("Preview"),k=(0,o.up)("DownloadButton"),C=(0,o.up)("Footer");return(0,o.wg)(),(0,o.j4)("div",a,[r,(0,o.Wm)("div",s,[(0,o.Wm)("div",c,[(0,o.Wm)(W)])]),(0,o.Wm)("div",d,[(0,o.Wm)(y),(0,o.Wm)("div",l,[(0,o.Wm)("div",u,[(0,o.Wm)(b)]),(0,o.Wm)("div",p,[e.isNotFinish?((0,o.wg)(),(0,o.j4)(k,{key:0})):(0,o.kq)("",!0)])])]),(0,o.Wm)("div",v,[(0,o.Wm)("div",m,[(0,o.Wm)(C)])]),f])}));var h=n(4356),W=n(2323);const y=(0,o.HX)("data-v-6d87171a");(0,o.dD)("data-v-6d87171a");const b={style:{position:"relative"}},k=(0,o.Uk)(" Copy to clipboard "),C=(0,o.Uk)(" Copied "),g={class:"validation-msg"};(0,o.Cn)();const T=y(((e,t,n,i,a,r)=>{const s=(0,o.up)("q-tooltip"),c=(0,o.up)("q-icon"),d=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)("div",b,[(0,o.Wm)(d,{class:"copy-button",color:"primary","hover-color":"negative",flat:"",icon:"content_copy",ripple:!1,onClick:e.copyToClipboard},{default:y((()=>[(0,o.Wm)(s,{class:"bg-primary text-subtitle2"},{default:y((()=>[k])),_:1}),(0,o.Wm)(s,{anchor:"center left",self:"center right",offset:[10,10],"no-parent-event":"","model-value":e.showTooltip,class:"text-subtitle2"},{default:y((()=>[C,(0,o.Wm)(c,{size:"md",name:"check",class:"text-green"})])),_:1},8,["model-value"])])),_:1},8,["onClick"])]),(0,o.Wm)("textarea",{class:"cffstr",readonly:"true",value:e.cffstr,wrap:"hard"},null,8,["value"]),(0,o.Wm)("div",g,[(0,o.Wm)("p",null," Your CITATION.cff is "+(0,W.zw)(e.isValid?"valid":"not valid"),1)])],64)}));var Z=n(1959),_=n(6037),x=n(3351),F=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function r(e){try{c(o.next(e))}catch(t){a(t)}}function s(e){try{c(o["throw"](e))}catch(t){a(t)}}function c(e){e.done?n(e.value):i(e.value).then(r,s)}c((o=o.apply(e,t||[])).next())}))};const H=(0,o.aZ)({name:"Preview",components:{},setup(){const{cffstr:e}=(0,_.Y)(),t=(0,Z.iH)(!1),n=()=>F(this,void 0,void 0,(function*(){yield navigator.clipboard.writeText(e.value),t.value=!0,yield new Promise((e=>setTimeout(e,3e3))),t.value=!1})),i=(0,o.Fl)(x.ml);return{cffstr:e,copyToClipboard:n,isValid:i,showTooltip:t}}});var I=n(8240),P=n(8870),j=n(4554),q=n(7518),D=n.n(q);H.render=T,H.__scopeId="data-v-6d87171a";const B=H;D()(H,"components",{QBtn:I.Z,QTooltip:P.Z,QIcon:j.Z});var N=n(6686),Q=n(95),Y=n(9582);const z=(0,o.aZ)({name:"StepperLayout",components:{Header:h.Z,Preview:B,DownloadButton:N.Z,Footer:Q.Z},setup(){return{isNotFinish:(0,o.Fl)((()=>{const e=(0,Y.yj)().path;return"/finish-minimum"!==e&&"/finish-advanced"!==e}))}}});z.render=w,z.__scopeId="data-v-0691a3b6";const U=z}}]);