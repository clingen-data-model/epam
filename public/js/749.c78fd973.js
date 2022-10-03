"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[749],{289:function(e,a,n){n.d(a,{i:function(){return u}});const t={approve:"green","approve-after-revisions":"blue","request-revisions":"yellow"},u=e=>e.decision?t[e.decision]:"gray"},6412:function(e,a,n){n.d(a,{Z:function(){return h}});var t=n(6252),u=n(3577);const s={class:"flex space-x-2 items-center mb-3"},i={key:0},r=(0,t.Uk)(" has"),l={key:1},o=(0,t.Uk)(" an "),p=(0,t.Uk)(" due on "),d=(0,t.Uk)(". "),c=(0,t.Uk)(" Complete the Annual Update ");function m(e,a,n,m,f,w){const g=(0,t.up)("icon-review"),v=(0,t.up)("router-link"),h=(0,t.up)("static-alert");return w.isPending&&f.annualReview.id?((0,t.wg)(),(0,t.j4)(h,{key:0,variant:w.variant},{default:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t.Wm)(g,{height:"30",width:"30"}),(0,t._)("div",null,[(0,t._)("p",null,[n.showGroupName?((0,t.wg)(),(0,t.iD)("span",i,[(0,t._)("strong",null,(0,u.zw)(n.group.displayName),1),r])):((0,t.wg)(),(0,t.iD)("span",l,"You have")),o,(0,t._)("strong",null,"annual update for "+(0,u.zw)(w.window.for_year),1),p,(0,t._)("strong",null,(0,u.zw)(e.formatDate(w.window.end)),1),d]),n.group.uuid?((0,t.wg)(),(0,t.j4)(v,{key:0,class:"btn font-bold",to:{name:"AnnualUpdate",params:{uuid:n.group.uuid}}},{default:(0,t.w5)((()=>[c])),_:1},8,["to"])):(0,t.kq)("",!0)])])])),_:1},8,["variant"])):(0,t.kq)("",!0)}var f=n(9028),w={name:"AnnualUpdateAlert",props:{group:{type:Object,required:!0},showGroupName:{type:Boolean,default:!1}},data(){return{annualReview:{},loading:!1}},computed:{window(){return this.annualReview.window?this.annualReview.window:{}},isPending(){return this.annualReview&&!this.annualReview.completed_at},variant(){const e=new Date;if(!this.window.end)return"warning";const a=new Date(Date.parse(this.window.end));return e>this.addDays(a,-7)?"danger":"warning"}},watch:{group:{immediate:!0,handler(){this.getAnnualUpdate()}}},methods:{getAnnualUpdate(){this.group.uuid&&this.group.expert_panel.definition_is_approved&&(this.loading=!0,f.hi.get(`/api/groups/${this.group.uuid}/expert-panel/annual-updates`,{headers:{"X-Ignore-Missing":1}}).then((e=>{this.annualReview=e.data})),this.loading=!1)}}},g=n(3744);const v=(0,g.Z)(w,[["render",m]]);var h=v},4102:function(e,a,n){n.r(a),n.d(a,{default:function(){return ba}});var t=n(6252),u=n(3577),s=n(2262),i=n(3907),r=n(2119);function l(e,a,n,t){var u=-1,s=null==e?0:e.length;t&&s&&(n=e[++u]);while(++u<s)n=a(n,e[u],u,e);return n}var o=l;function p(e){return function(a){return null==e?void 0:e[a]}}var d=p,c={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},m=d(c),f=m,w=n(7685);function g(e,a){var n=-1,t=null==e?0:e.length,u=Array(t);while(++n<t)u[n]=a(e[n],n,e);return u}var v=g,h=Array.isArray,b=h,_=n(8470),y=1/0,x=w.Z?w.Z.prototype:void 0,U=x?x.toString:void 0;function k(e){if("string"==typeof e)return e;if(b(e))return v(e,k)+"";if((0,_.Z)(e))return U?U.call(e):"";var a=e+"";return"0"==a&&1/e==-y?"-0":a}var D=k;function A(e){return null==e?"":D(e)}var S=A,j=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,z="\\u0300-\\u036f",R="\\ufe20-\\ufe2f",Z="\\u20d0-\\u20ff",I=z+R+Z,C="["+I+"]",W=RegExp(C,"g");function E(e){return e=S(e),e&&e.replace(j,f).replace(W,"")}var N=E,O=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Y(e){return e.match(O)||[]}var G=Y,H=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function q(e){return H.test(e)}var F=q,T="\\ud800-\\udfff",L="\\u0300-\\u036f",P="\\ufe20-\\ufe2f",K="\\u20d0-\\u20ff",M=L+P+K,V="\\u2700-\\u27bf",$="a-z\\xdf-\\xf6\\xf8-\\xff",J="\\xac\\xb1\\xd7\\xf7",B="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",X="\\u2000-\\u206f",Q=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ee="A-Z\\xc0-\\xd6\\xd8-\\xde",ae="\\ufe0e\\ufe0f",ne=J+B+X+Q,te="['’]",ue="["+ne+"]",se="["+M+"]",ie="\\d+",re="["+V+"]",le="["+$+"]",oe="[^"+T+ne+ie+V+$+ee+"]",pe="\\ud83c[\\udffb-\\udfff]",de="(?:"+se+"|"+pe+")",ce="[^"+T+"]",me="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",we="["+ee+"]",ge="\\u200d",ve="(?:"+le+"|"+oe+")",he="(?:"+we+"|"+oe+")",be="(?:"+te+"(?:d|ll|m|re|s|t|ve))?",_e="(?:"+te+"(?:D|LL|M|RE|S|T|VE))?",ye=de+"?",xe="["+ae+"]?",Ue="(?:"+ge+"(?:"+[ce,me,fe].join("|")+")"+xe+ye+")*",ke="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",De="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ae=xe+ye+Ue,Se="(?:"+[re,me,fe].join("|")+")"+Ae,je=RegExp([we+"?"+le+"+"+be+"(?="+[ue,we,"$"].join("|")+")",he+"+"+_e+"(?="+[ue,we+ve,"$"].join("|")+")",we+"?"+ve+"+"+be,we+"+"+_e,De,ke,ie,Se].join("|"),"g");function ze(e){return e.match(je)||[]}var Re=ze;function Ze(e,a,n){return e=S(e),a=n?void 0:a,void 0===a?F(e)?Re(e):G(e):e.match(a)||[]}var Ie=Ze,Ce="['’]",We=RegExp(Ce,"g");function Ee(e){return function(a){return o(Ie(N(a).replace(We,"")),e,"")}}var Ne=Ee,Oe=Ne((function(e,a,n){return e+(n?" ":"")+a.toUpperCase()})),Ye=Oe,Ge=n(1971),He=n(7201),qe=n(284),Fe=n(7506),Te=n(3823),Le=n(289),Pe=n(9028),Ke=n(865),Me=n(8661);const Ve=e=>((0,t.dD)("data-v-65327068"),e=e(),(0,t.Cn)(),e),$e=Ve((()=>(0,t._)("h2",null,"Application activity",-1))),Je={class:"flex space-x-2"},Be={key:0},Xe=Ve((()=>(0,t._)("h3",{class:"mb-2"},"Your Decision",-1))),Qe={key:0,class:"mt-2",style:{"max-width":"300px"}},ea=Ve((()=>(0,t._)("strong",null,"Notes:",-1))),aa=Ve((()=>(0,t._)("hr",null,null,-1))),na=(0,t.Uk)((0,u.zw)("Review")),ta=Ve((()=>(0,t._)("h3",null,"Decisions:",-1))),ua={style:{"max-width":"350px"},class:"text-sm"};var sa={__name:"ApplicationActivity",props:{user:{type:Object,required:!0}},setup(e){const a=e,n=(0,r.tv)(),i=[{name:"name",label:"Group",sortable:!0},{name:"submission.type.name",label:"Submitted Step",sortable:!0},{name:"submission.status.name",label:"Status",sortable:!0},{name:"last_submission_date",label:"Date",sortable:!0,type:Date},{name:"actions",label:"",sortable:!1}],l=(0,s.iH)({field:"name",desc:!1}),o=(0,s.iH)([]),p=async()=>{o.value=await Pe.hi.get("/api/groups/applications").then((e=>e.data.data))},d=e=>{n.push({name:"ApplicationDetail",params:{uuid:e.uuid}})},c=e=>e.submission.judgements&&e.submission.judgements.some((e=>e.person_id==a.user.person.id)),m=e=>e.submission.judgements?e.submission.judgements.find((e=>e.person_id==a.user.person.id)):{};return(0,t.bv)((()=>{p()})),(e,a)=>{const n=(0,t.up)("icon-checkmark"),r=(0,t.up)("badge"),p=(0,t.up)("router-link"),f=(0,t.up)("popper"),w=(0,t.up)("data-table");return(0,t.wg)(),(0,t.iD)("div",null,[$e,(0,t.Wm)(w,{data:o.value,fields:i,sort:l.value,"onUpdate:sort":a[0]||(a[0]=e=>l.value=e),class:"text-sm",onRowClick:d,"row-class":"cursor-pointer"},{"cell-actions":(0,t.w5)((({item:e})=>[(0,t._)("div",Je,[c(e)?((0,t.wg)(),(0,t.iD)("div",Be,[(0,t.Wm)(f,{hover:"",arrow:"",placement:"right"},{content:(0,t.w5)((()=>[(0,t._)("div",null,[Xe,(0,t.Wm)(r,{class:"inline-block",color:(0,s.SU)(Le.i)(m(e)),size:"xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(m(e).decision),1)])),_:2},1032,["color"])]),m(e).notes?((0,t.wg)(),(0,t.iD)("div",Qe,[ea,(0,t.Uk)(" "+(0,u.zw)(m(e).notes),1)])):(0,t.kq)("",!0),aa,(0,t.Wm)(p,{to:{name:"ApplicationDetail",params:{uuid:e.uuid}},class:(0,u.C_)({"btn btn-xs":(0,s.SU)(Ke.Fs)("ep-applications-approve")})},{default:(0,t.w5)((()=>[na])),_:2},1032,["to","class"])])),default:(0,t.w5)((()=>[(0,t.Wm)(r,{color:(0,s.SU)(Le.i)(e)},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{class:"text-white inline-block",width:"12",height:"12"})])),_:2},1032,["color"])])),_:2},1024)])):((0,t.wg)(),(0,t.j4)(p,{key:1,to:{name:"ApplicationDetail",params:{uuid:e.uuid}},class:"btn btn-xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,s.SU)(Ke.Fs)("ep-applications-manage")?"View":"Review"),1)])),_:2},1032,["to"])),(0,t._)("div",null,[(0,s.SU)(Me.ft)("chair-review")?((0,t.wg)(),(0,t.j4)(f,{key:0,hover:"",arrow:""},{content:(0,t.w5)((()=>[ta,(0,t._)("table",ua,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.submission.judgements,(e=>((0,t.wg)(),(0,t.iD)("tr",{key:e.id},[(0,t._)("th",null,(0,u.zw)(e.person.name)+":",1),(0,t._)("td",null,[(0,t.Wm)(r,{class:"inline-block",color:(0,s.SU)(Le.i)(e)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.decision),1)])),_:2},1032,["color"])])])))),128))])])),default:(0,t.w5)((()=>[(0,s.SU)(Ke.Fs)("ep-applications-manage")&&"Under Chair Review"==e.submission.status.name?((0,t.wg)(),(0,t.j4)(r,{key:0,color:3==e.submission.judgements.length?"green":"gray"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.submission.judgements.length)+"/3 ",1)])),_:2},1032,["color"])):(0,t.kq)("",!0)])),_:2},1024)):(0,t.kq)("",!0)])])])),_:1},8,["data","sort"])])}}},ia=n(3744);const ra=(0,ia.Z)(sa,[["__scopeId","data-v-65327068"]]);var la=ra,oa=n(6412),pa={__name:"DashboardAlerts",props:{user:{type:Object,required:!0}},setup(e){const a=e,n=(0,s.iH)([]),u=async()=>{if(0==i.value.length)return;const e={with:["assignee"],where:{task_type_id:1,assignee_type:"App\\Modules\\Group\\Models\\Group",assignee_id:[...new Set(i.value.map((e=>e.id)))],pending:1}},a=(0,Pe.nZ)(e),t=`/api/tasks${a}`;n.value=await Pe.hi.get(t).then((e=>{const a={};return e.data.forEach((e=>{a[e.assignee_id]=e})),a})),console.log(n.value)},i=(0,t.Fl)((()=>a.user.memberships.filter((e=>e.hasPermission("annual-update-manage"))).map((e=>e.group)).filter((e=>null!==e)).map((e=>new Fe.Z(e)))));return(0,t.bv)((()=>{u()})),(a,u)=>{const r=(0,t.up)("sustained-curation-review-alert"),l=(0,t.up)("coi-alert");return(0,t.wg)(),(0,t.iD)("div",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.value,(e=>((0,t.wg)(),(0,t.j4)(r,{key:e.id,group:e.assignee,class:"mb-2"},null,8,["group"])))),128)),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,s.SU)(i),(e=>((0,t.wg)(),(0,t.j4)(oa.Z,{key:e.id,group:e,"show-group-name":!0,class:"mb-2"},null,8,["group"])))),128)),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.user.person.membershipsWithPendingCois,(e=>((0,t.wg)(),(0,t.j4)(l,{key:e.id,membership:e,class:"mb-2"},null,8,["membership"])))),128))])}}};const da=pa;var ca=da,ma=n(6553);const fa=(0,t.Uk)(" Dashboard "),wa={class:"note font-normal"},ga={key:0,class:"well"};var va={__name:"Dashboard",setup(e){const a=(0,i.oR)(),n=(0,r.tv)(),l=(0,t.Fl)((()=>a.getters["currentUser"])),o=(0,t.Fl)((()=>a.getters["people/currentItem"]||new qe.Z)),p=()=>{l.value.id&&l.value.person&&l.value.person.id&&(a.commit("people/addItem",l.value.person),a.commit("people/setCurrentItemIndex",l.value.person))};(0,t.YP)((()=>l),(()=>{p()})),(0,t.bv)((()=>{p()}));const d=(0,t.Fl)((()=>l.value.memberships.map((e=>e.group)).filter((e=>null!==e)).map((e=>new Fe.Z(e))))),c=(0,s.iH)([{name:"displayName",sortable:!0,type:String},{name:"status.name",label:"Status",sortable:!0,resolveValue:e=>e.status.id==Te.groups.statuses.applying.id?e.status.name+" - "+e.expert_panel.currentStepName:e.status.name,type:String},{name:"type.name",label:"Type",sortable:!0,resolveValue:e=>Ye(e.type.name)}]),m=(0,s.iH)({field:"displayName",desc:!1}),f=e=>{const a={Active:"green",Applying:"blue",Retired:"yellow",Removed:"red"};return a[e]||"blue"},w=(0,t.Fl)((()=>(0,Ke.Fs)("ep-applications-manage")||(0,Me.ft)("chair_review")&&(0,Ke._N)(["ep-applications-comment","ep-applications-approve"])));(0,t.bv)((async()=>{await a.dispatch("forceGetCurrentUser")}));const g=e=>{n.push({name:"GroupDetail",params:{uuid:e.uuid}})};return(e,a)=>{const n=(0,t.up)("badge"),i=(0,t.up)("data-table"),r=(0,t.up)("tab-item"),p=(0,t.up)("tabs-container");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("h1",null,[fa,(0,t._)("div",wa," User ID: "+(0,u.zw)((0,s.SU)(l).id)+" | Person ID: "+(0,u.zw)((0,s.SU)(l).person?(0,s.SU)(l).person.id:"no person!!"),1)]),(0,t.Wm)(ma["default"],{user:(0,s.SU)(l)},null,8,["user"]),(0,t.Wm)(ca,{user:(0,s.SU)(l)},null,8,["user"]),(0,s.SU)(w)?((0,t.wg)(),(0,t.j4)(la,{key:0,user:(0,s.SU)(l),class:"screen-block"},null,8,["user"])):(0,t.kq)("",!0),(0,t.Wm)(p,{class:"mt-8"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{label:"Your Groups"},{default:(0,t.w5)((()=>[(0,s.SU)(d).length?((0,t.wg)(),(0,t.j4)(i,{key:1,data:(0,s.SU)(d),fields:c.value,sort:m.value,"onUpdate:sort":a[0]||(a[0]=e=>m.value=e),onRowClick:g,"row-class":"cursor-pointer"},{"cell-status_name":(0,t.w5)((({value:e})=>[(0,t.Wm)(n,{color:f(e)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e),1)])),_:2},1032,["color"])])),"cell-displayName":(0,t.w5)((({item:e})=>[(0,t.Uk)((0,u.zw)(e.name)+" "+(0,u.zw)(e.type.name.toUpperCase()),1)])),_:1},8,["data","fields","sort"])):((0,t.wg)(),(0,t.iD)("div",ga,"You are not assigned to any groups."))])),_:1}),(0,t.Wm)(r,{label:"Your Info"},{default:(0,t.w5)((()=>[(0,t.Wm)(He.Z,{person:(0,s.SU)(o)},null,8,["person"])])),_:1}),(0,t.Wm)(r,{label:"COIs"},{default:(0,t.w5)((()=>[(0,t.Wm)(Ge.Z,{person:(0,s.SU)(l).person},null,8,["person"])])),_:1})])),_:1})])}}};const ha=va;var ba=ha}}]);
//# sourceMappingURL=749.c78fd973.js.map