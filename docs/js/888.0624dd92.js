"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[888],{9605:(e,i,n)=>{n.r(i),n.d(i,{default:()=>T});var t=n(3673);const o=(0,t.HX)("data-v-6a45fe45");(0,t.dD)("data-v-6a45fe45");const d={id:"metroline"},l={id:"form"},a=(0,t.Wm)("div",{id:"form-title"},[(0,t.Wm)("h1",{class:"page-title"}," Identifiers ")],-1),r={id:"form-content"},s=(0,t.Wm)("p",{class:"question"},[(0,t.Uk)(" What persistent identifiers are available for the work? See "),(0,t.Wm)("a",{href:"https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md#definitionsidentifier",target:"_blank"}," schema guide "),(0,t.Uk)(" for examples. ")],-1),u={class:"scroll-to-bottom-container"},c=(0,t.Wm)("span",{class:"bottom"},null,-1),v=(0,t.Uk)(" Add identifier "),m={id:"form-button-bar"};(0,t.Cn)();const p=o(((e,i,n,p,f,b)=>{const w=(0,t.up)("Stepper"),g=(0,t.up)("IdentifierCardViewing"),y=(0,t.up)("IdentifierCardEditing"),I=(0,t.up)("q-btn"),W=(0,t.up)("StepperActions");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("div",d,[(0,t.Wm)(w)]),(0,t.Wm)("div",l,[a,(0,t.Wm)("div",r,[s,(0,t.Wm)("div",u,[c,(0,t.Wm)("div",null,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(e.identifiers,((n,o)=>((0,t.wg)(),(0,t.j4)("div",{class:"q-mb-md q-mr-lg",key:o},[e.editingId!==o?((0,t.wg)(),(0,t.j4)(g,{key:0,index:o,identifier:n,"num-identifiers":e.identifiers.length,onEditPressed:()=>e.editingId=o,onMoveDown:i=>e.moveIdentifierDown(o),onMoveUp:i=>e.moveIdentifierUp(o)},null,8,["index","identifier","num-identifiers","onEditPressed","onMoveDown","onMoveUp"])):((0,t.wg)(),(0,t.j4)(y,(0,t.dG)({key:1,index:o},n,{"num-identifiers":e.identifiers.length,onUpdateType:e.setIdentifierTypeField,onUpdateValue:e.setIdentifierValueField,onUpdateDescription:e.setIdentifierDescriptionField,onClosePressed:i[1]||(i[1]=()=>e.editingId=-1),onRemovePressed:e.removeIdentifier,onMoveDown:i=>e.moveIdentifierDown(o),onMoveUp:i=>e.moveIdentifierUp(o)}),null,16,["index","num-identifiers","onUpdateType","onUpdateValue","onUpdateDescription","onRemovePressed","onMoveDown","onMoveUp"]))])))),128))])]),(0,t.Wm)(I,{class:"q-mt-md q-mb-md",color:"primary","no-caps":"",onClick:e.addIdentifier},{default:o((()=>[v])),_:1},8,["onClick"])]),(0,t.Wm)("div",m,[(0,t.Wm)(W)])])],64)}));var f=n(1959),b=n(6785),w=n(5132);n(246);const g={class:"row items-center no-wrap"},y={class:"q-gutter-md items-center no-wrap"},I={class:"q-gutter-md items-center no-wrap"};function W(e,i,n,o,d,l){const a=(0,t.up)("q-option-group"),r=(0,t.up)("q-input"),s=(0,t.up)("q-card-section"),u=(0,t.up)("q-btn"),c=(0,t.up)("q-card-actions"),v=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(v,{flat:"",bordered:"",class:"bg-formcard"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)("div",g,[(0,t.Wm)(a,{inline:"",type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":i[1]||(i[1]=i=>e.$emit("updateType","type",i))},null,8,["model-value","options"])]),(0,t.Wm)("div",y,[(0,t.Wm)(r,{"bg-color":"white",label:"Value",outlined:"",standout:"",dense:"","model-value":e.value,"onUpdate:modelValue":i[2]||(i[2]=i=>e.$emit("updateValue","value",i))},null,8,["model-value"])]),(0,t.Wm)("div",I,[(0,t.Wm)(r,{"bg-color":"white",label:"Description",outlined:"",standout:"",dense:"","model-value":e.description,"onUpdate:modelValue":i[3]||(i[3]=i=>e.$emit("updateDescription","description",i))},null,8,["model-value"])])])),_:1}),(0,t.Wm)(c,{align:"right"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{dense:"",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:i[4]||(i[4]=i=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(u,{dense:"",color:"blue",disable:e.index>=e.numIdentifiers-1,icon:"ion-arrow-down",tabindex:"-1",onClick:i[5]||(i[5]=i=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(u,{color:"negative",dense:"",icon:"delete",label:"Remove",onClick:i[6]||(i[6]=i=>e.$emit("removePressed"))}),(0,t.Wm)(u,{dense:"",icon:"done",label:"Done",onClick:i[7]||(i[7]=i=>e.$emit("closePressed"))})])),_:1})])),_:1})}const h=(0,t.aZ)({name:"IdentifierCardEditing",props:{index:{type:Number,required:!0},type:{type:String,default:""},value:{type:String,default:""},description:{type:String,default:""},numIdentifiers:{type:Number,default:0}},setup(){return{typeOptions:[{label:"DOI",value:"doi"},{label:"URL",value:"url"},{label:"Software Heritage",value:"swh"},{label:"Other",value:"other"}]}},emits:["closePressed","removePressed","updateType","updateValue","updateDescription","moveUp","moveDown"]});var C=n(151),U=n(5589),D=n(4140),k=n(4842),x=n(9367),q=n(2165),Z=n(7518),V=n.n(Z);h.render=W;const P=h;V()(h,"components",{QCard:C.Z,QCardSection:U.Z,QOptionGroup:D.Z,QInput:k.Z,QCardActions:x.Z,QBtn:q.Z});var j=n(2323);const S=(0,t.HX)("data-v-21cfe54c");(0,t.dD)("data-v-21cfe54c");const O={style:{"flex-grow":"1.0"}};(0,t.Cn)();const $=S(((e,i,n,o,d,l)=>{const a=(0,t.up)("q-btn"),r=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(r,{bordered:"",class:"bg-formcard",flat:"",style:{display:"flex","flex-direction":"row"}},{default:S((()=>[(0,t.Wm)("div",O,[(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,(0,j.zw)(e.identifier.description),1),(0,t.Wm)("li",null,(0,j.zw)(e.identifier.type)+": "+(0,j.zw)(e.identifier.value),1)])]),(0,t.Wm)("div",null,[(0,t.Wm)(a,{class:"identifier-button",color:"blue",disable:0==e.index,icon:"ion-arrow-up",tabindex:"-1",onClick:i[1]||(i[1]=i=>e.$emit("moveUp"))},null,8,["disable"]),(0,t.Wm)(a,{class:"identifier-button",color:"blue",disable:e.index>=e.numIdentifiers-1,icon:"ion-arrow-down",tabindex:"-1",onClick:i[2]||(i[2]=i=>e.$emit("moveDown"))},null,8,["disable"]),(0,t.Wm)(a,{class:"identifier-button",color:"primary",flat:"","hover-color":"negative",icon:"edit",title:"Edit",onClick:i[3]||(i[3]=i=>e.$emit("editPressed"))})])])),_:1})})),_=(0,t.aZ)({name:"IdentifierCardViewing",props:{index:{type:Number,required:!0},identifier:{type:Object,required:!0},numIdentifiers:{type:Number,default:0}},emits:["editPressed","moveDown","moveUp"]});_.render=$,_.__scopeId="data-v-21cfe54c";const Q=_;V()(_,"components",{QCard:C.Z,QBtn:q.Z});var M=n(1364),A=n(4009),E=n(2064),F=function(e,i,n,t){function o(e){return e instanceof n?e:new n((function(i){i(e)}))}return new(n||(n=Promise))((function(n,d){function l(e){try{r(t.next(e))}catch(i){d(i)}}function a(e){try{r(t["throw"](e))}catch(i){d(i)}}function r(e){e.done?n(e.value):o(e.value).then(l,a)}r((t=t.apply(e,i||[])).next())}))};const H=(0,t.aZ)({name:"ScreenIdentifiers",components:{Stepper:b.Z,StepperActions:w.Z,IdentifierCardEditing:P,IdentifierCardViewing:Q},setup(){const{identifiers:e,setIdentifiers:i}=(0,M.Y)(),n=(0,f.iH)(-1),o=()=>F(this,void 0,void 0,(function*(){let o;const d={type:"doi",value:"",description:void 0};o=void 0===e.value?[d]:[...e.value,d],i(o),n.value=o.length-1,yield(0,t.Y3)(),(0,A.O)()})),d=()=>{if(void 0!==e.value){const t=[...e.value];t.splice(n.value,1),i(t),n.value=-1,Array.isArray(t)&&0===t.length&&i(void 0)}},l=(t,o)=>{if(void 0!==e.value){const t=Object.assign({},e.value[n.value]);t.description=""===o?void 0:o,e.value[n.value]=t,i(e.value)}},a=(t,o)=>{if(void 0!==e.value){const t=Object.assign({},e.value[n.value]);t.type=o,e.value[n.value]=t,i(e.value)}},r=(t,o)=>{if(void 0!==e.value){const t=Object.assign({},e.value[n.value]);t.value=o,e.value[n.value]=t,i(e.value)}},s=t=>{void 0!==e.value&&((0,E.A)(t,e.value,i),n.value===t&&t>0?n.value=n.value-1:n.value===t-1&&(n.value=n.value+1))},u=t=>{void 0!==e.value&&((0,E.v)(t,e.value,i),n.value===t&&t<e.value.length-1?n.value=n.value+1:n.value===t+1&&(n.value=n.value-1))};return{addIdentifier:o,editingId:n,identifiers:e,moveIdentifierUp:s,moveIdentifierDown:u,removeIdentifier:d,setIdentifierDescriptionField:l,setIdentifierTypeField:a,setIdentifierValueField:r}}});H.render=p,H.__scopeId="data-v-6a45fe45";const T=H;V()(H,"components",{QBtn:q.Z})}}]);