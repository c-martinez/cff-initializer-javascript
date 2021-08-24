(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var r=t(8880),o=t(2424),a=t(3673);function i(e,n,t,r,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l={name:"App"};l.render=i;const d=l;var s=t(7083),c=t(9582);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(64),t.e(329)]).then(t.bind(t,7768)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(415)]).then(t.bind(t,4415))}]},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(64),t.e(329)]).then(t.bind(t,7768)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(415)]).then(t.bind(t,4415))}]},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(291)]).then(t.bind(t,8185)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(655)]).then(t.bind(t,2389))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(291)]).then(t.bind(t,8185)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(12)]).then(t.bind(t,4751))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(329)]).then(t.bind(t,7768)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(389)]).then(t.bind(t,2759))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(291)]).then(t.bind(t,8185)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(261)]).then(t.bind(t,1512))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(291)]).then(t.bind(t,8185)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(394)]).then(t.bind(t,2350))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(291)]).then(t.bind(t,8185)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(53)]).then(t.bind(t,3770))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(291)]).then(t.bind(t,8185)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(975)]).then(t.bind(t,9209))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(291)]).then(t.bind(t,8185)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(353)]).then(t.bind(t,7287))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(291)]).then(t.bind(t,8185)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(231)]).then(t.bind(t,8560))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(329)]).then(t.bind(t,7768)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(969)]).then(t.bind(t,9671))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(562)]).then(t.bind(t,1562))}],u=h;var p=t(9999);const f=(0,s.BC)((function(){const e=c.r5,n=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:u,history:e("/cffinit/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,p.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,r=e(d);return r.use(o.Z,n),{app:r,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(r.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>p});var r=t(1959),o=t(3673),a=t(9582),i=function(e,n,t,r){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{d(r.next(e))}catch(n){a(n)}}function l(e){try{d(r["throw"](e))}catch(n){a(n)}}function d(e){e.done?t(e.value):o(e.value).then(i,l)}d((r=r.apply(e,n||[])).next())}))};const l=(0,r.iH)({showAdvanced:!1,stepIndex:0}),d=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],s=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),c=0,h=(0,o.Fl)((()=>l.value.showAdvanced?d.indexOf("finish-advanced"):d.indexOf("finish-minimum"))),u=(0,o.Fl)((()=>d[l.value.stepIndex]));function p(){const e=(0,a.tv)();return{cannotGoBack:(0,o.Fl)((()=>l.value.stepIndex===c)),cannotGoForward:(0,o.Fl)((()=>l.value.stepIndex===h.value)),lastStepIndex:h,showAdvanced:(0,o.Fl)((()=>l.value.showAdvanced)),stepName:u,navigateDirect:e=>{d.includes(e)&&(s.has(e)&&(l.value.showAdvanced=!0),l.value.stepIndex=d.indexOf(e))},setStepName:n=>i(this,void 0,void 0,(function*(){l.value.stepIndex=d.indexOf(n),yield e.push({path:`/${u.value}`})})),navigateNext:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"authors"===u.value&&l.value.stepIndex++,l.value.stepIndex<h.value&&(l.value.stepIndex++,yield e.push({path:`/${u.value}`}))})),navigatePrevious:()=>i(this,void 0,void 0,(function*(){!0===l.value.showAdvanced&&"identifiers"===u.value&&l.value.stepIndex--,l.value.stepIndex>c&&(l.value.stepIndex--,yield e.push({path:`/${u.value}`}))})),setShowAdvanced:e=>{l.value.showAdvanced=e}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,r,o,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],l=!0,d=0;d<r.length;d++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](r[d])))?r.splice(d--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{12:"cd80b613",53:"744573d4",64:"260fbd8b",231:"6db3284f",261:"76ab9628",291:"1354432b",329:"94c3213b",353:"84b87377",389:"45025c5f",394:"e601a650",415:"56fe2f50",562:"11d08f79",655:"83d61719",969:"be4724f9",975:"8f120017"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{12:"43bd434a",53:"886a0c0a",231:"e5e2bb5c",261:"825fbfed",291:"3094c229",329:"7f5ae0b6",353:"b1094ebf",389:"35b62cf7",394:"7e4ea162",415:"4d57ebd4",655:"360328c8",736:"540f306d",969:"b1c4cdf2",975:"448dab53"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var l,d;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var h=s[c];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==n+a){l=h;break}}l||(d=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+a),l.src=r),e[r]=[o];var u=(n,t)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),d&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/cffinit/"})(),(()=>{var e=(e,n,t,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||n,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,o.parentNode.removeChild(o),r(d)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=r=>new Promise(((o,a)=>{var i=t.miniCssF(r),l=t.p+i;if(n(i,l))return o();e(r,l,o,a)})),o={143:0};t.f.miniCss=(e,n)=>{var t={12:1,53:1,231:1,261:1,291:1,329:1,353:1,389:1,394:1,415:1,655:1,969:1,975:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((()=>{o[e]=0}),(n=>{throw delete o[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((t,r)=>o=e[n]=[t,r]));r.push(o[2]=a);var i=t.p+t.u(n),l=new Error,d=r=>{if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};t.l(i,d,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var o,a,[i,l,d]=r,s=0;for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(d)var c=d(t);for(n&&n(r);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return t.O(c)},r=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(7122)));r=t.O(r)})();