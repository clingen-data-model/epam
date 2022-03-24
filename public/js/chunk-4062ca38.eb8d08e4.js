(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4062ca38"],{"04e9":function(e,t,o){},"48e8":function(e,t,o){"use strict";o.d(t,"c",(function(){return i})),o.d(t,"d",(function(){return b})),o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return d}));o("d3b7"),o("159b"),o("b64b"),o("d81d"),o("b0c0");var n=o("7a23"),c=o("f96b"),r=o("025e"),a=o("2297"),l=o("05b6"),s=o("526b"),i=Object(n["ref"])({countries:[],primaryOccupations:[],races:[],ethnicities:[],genders:[]}),b=Object(n["computed"])((function(){return[{name:"first_name"},{name:"last_name"},{name:"email"},{name:"institution_id",label:"Institution",type:"component",component:l["default"]},{name:"credentials",type:"large-text"},{name:"biography",type:"large-text"},{name:"*",type:"component",label:"Address",component:s["default"]},{name:"country_id",label:"Country",type:"select",options:i.value.countries},{name:"phone"},{name:"timezone",label:"Timezone",type:"component",component:a["default"]}]})),u=Object(n["computed"])((function(){return[{name:"primary_occupation_id",label:"Primary Occupation",type:"select",options:i.value.primaryOccupations},{name:"primary_occupation_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.primary_occupation_id}},{name:"race_id",label:"Race",type:"select",options:i.value.races},{name:"race_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.race_id}},{name:"ethnicity_id",label:"Ethnicity",type:"select",options:i.value.ethnicities},{name:"enthnicity_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.enthnicity_id}},{name:"gender_id",label:"Gender",type:"select",options:i.value.genders},{name:"gender_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.gender_id}}]})),d=function(){Object.keys(i.value).forEach((function(e){c["a"].get("/api/people/lookups/".concat(Object(r["c"])(e))).then((function(t){i.value[e]=t.data.data.map((function(e){return{value:e.id,label:e.name}}))})).catch((function(e){return console.error(e)}))}))}},"5f08":function(e,t,o){"use strict";var n=o("7a23"),c=Object(n["createElementVNode"])("h3",null,"Profile",-1),r=Object(n["createElementVNode"])("hr",{class:"my-4"},null,-1);function a(e,t,o,a,l,s){var i=Object(n["resolveComponent"])("data-form"),b=Object(n["resolveComponent"])("button-row");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[c,Object(n["createVNode"])(i,{fields:s.fields,modelValue:l.profile,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.profile=e}),errors:l.errors},null,8,["fields","modelValue","errors"]),r,Object(n["createVNode"])(b,{onSubmitted:s.save,onCanceled:t[1]||(t[1]=function(e){return s.cancel()}),"submit-text":"Save"},null,8,["onSubmitted"])])}var l=o("1da1"),s=o("5530"),i=o("2909"),b=(o("96cf"),o("4de4"),o("d3b7"),o("caad"),o("b0c0"),o("033d")),u=o("48e8"),d={name:"ProfileForm",props:{person:{type:Object,required:!0}},emits:["saved","canceled"],data:function(){return{errors:{},profile:{},page:"profile",institutionId:null,timezone:null}},computed:{fields:function(){var e=Object(i["a"])(this.profileFields);return this.hasPermission("people-manage")||this.userIsPerson(this.person)||(e=e.filter((function(e){return["first_name","last_name","email"].includes(e.name)}))),e},title:function(){return"profile"==this.page?"Please fill out your profile":"Please share your demographic information."}},watch:{person:function(){this.initProfile()}},methods:{initProfile:function(){this.profile=Object(s["a"])({},this.person.attributes)},save:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("people/updateProfile",{uuid:e.person.uuid,attributes:e.profile}).then((function(){e.$store.dispatch("getCurrentUser",{force:!0}),e.$store.commit("pushSuccess","Your profile has been updated.")}));case 3:e.errors={},e.$emit("saved"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(b["a"])(t.t0)&&(e.errors=t.t0.response.data.errors);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},cancel:function(){this.initProfile(),this.errors={},this.$emit("canceled")}},setup:function(){return Object(n["onMounted"])((function(){return Object(u["b"])()})),{profileFields:u["d"],demographicFields:u["a"],getLookups:u["b"],lookups:u["c"]}},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.initProfile();case 1:case"end":return t.stop()}}),t)})))()}},p=o("6b0d"),m=o.n(p);const O=m()(d,[["render",a]]);t["a"]=O},6786:function(e,t,o){"use strict";o("04e9")},"6a6b":function(e,t,o){"use strict";o("b0c0");var n=o("7a23"),c={key:0},r={key:0,class:"mb-4"},a={key:0},l=Object(n["createElementVNode"])("h3",null,"You must complete a Conflict of Interest Disclosure for the following memberships:",-1),s={class:"my-2"},i={key:1},b=Object(n["createElementVNode"])("h3",null,"Outstanding COI disclosures:",-1),u={key:1},d=Object(n["createElementVNode"])("h3",null,"Completed & Current COI Disclosures",-1),p={key:0},m=["onClick"],O=Object(n["createTextVNode"])("   "),j=Object(n["createTextVNode"])("Update COI"),f={key:2},h=Object(n["createElementVNode"])("h3",null,"Past COI Disclosures",-1),k={key:0},y=["onClick"],C=Object(n["createTextVNode"])("   "),V=Object(n["createTextVNode"])("Update COI"),g={key:3,class:"well"},_={key:1,class:"well"};function N(e,t,o,N,v,x){var w=this,B=Object(n["resolveComponent"])("router-link"),E=Object(n["resolveComponent"])("data-table"),D=Object(n["resolveComponent"])("coi-detail"),S=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[o.person.memberships.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[o.person.hasPendingCois?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[e.userIsPerson(o.person)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[l,Object(n["createElementVNode"])("div",s,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.person.membershipsWithPendingCois,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(B,{key:e.id,class:"block my-0 font-bold p-2 border border-gray-300 first:rounded-t-lg last:rounded-b-lg cursor-pointer hover:bg-blue-50 link",to:N.getCoiRoute(e)},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.group.expert_panel.display_name),1)]})),_:2},1032,["to"])})),128))])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[b,Object(n["createElementVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.person.membershipsWithPendingCois,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:"list-disc ml-6",key:e.id},Object(n["toDisplayString"])(e.group.expert_panel.display_name),1)})),128))])]))])):Object(n["createCommentVNode"])("",!0),o.person.hasCompletedCois?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",u,[d,Object(n["createVNode"])(E,{fields:N.fields,data:o.person.membershipsWithCompletedCois,sort:N.coiSort,"onUpdate:sort":t[0]||(t[0]=function(e){return N.coiSort=e}),class:"my-2"},{"cell-actions":Object(n["withCtx"])((function(t){var c=t.item;return[c.coi_last_completed?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p,[Object(n["createElementVNode"])("button",{class:"btn btn-xs",onClick:function(e){return N.showCoiResponse(c)}}," View response ",8,m),O,e.userIsPerson(o.person)?(Object(n["openBlock"])(),Object(n["createBlock"])(B,{key:0,to:{name:"alt-coi",params:{code:c.group.expert_panel.coi_code,name:w.kebabCase(c.group.name)}},class:"btn btn-xs"},{default:Object(n["withCtx"])((function(){return[j]})),_:2},1032,["to"])):Object(n["createCommentVNode"])("",!0)])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["fields","data","sort"])])):Object(n["createCommentVNode"])("",!0),o.person.hasOutdatedCois?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",f,[h,Object(n["createVNode"])(E,{fields:N.fields,data:o.person.membershipsWithOutdatedCois,sort:N.coiSort,"onUpdate:sort":t[1]||(t[1]=function(e){return N.coiSort=e}),class:"my-2"},{"cell-actions":Object(n["withCtx"])((function(t){var c=t.item;return[c.coi_last_completed?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",k,[Object(n["createElementVNode"])("button",{class:"btn btn-xs",onClick:function(e){return N.showCoiResponse(c)}},"View response",8,y),C,e.userIsPerson(o.person)?(Object(n["openBlock"])(),Object(n["createBlock"])(B,{key:0,to:{name:"alt-coi",params:{code:c.group.expert_panel.coi_code,name:w.kebabCase(c.group.name)}},class:"btn btn-xs"},{default:Object(n["withCtx"])((function(){return[V]})),_:2},1032,["to"])):Object(n["createCommentVNode"])("",!0)])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["fields","data","sort"])])):Object(n["createCommentVNode"])("",!0),o.person.hasPending||o.person.completedCois?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",g," None of your memberships require a conflict of interest disclosure "))])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",_,"You are not required to complete conflict of interest disclsoure")),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(S,{modelValue:N.showResponseDialog,"onUpdate:modelValue":t[2]||(t[2]=function(e){return N.showResponseDialog=e}),size:"xl"},{default:Object(n["withCtx"])((function(){return[N.currentCoi?(Object(n["openBlock"])(),Object(n["createBlock"])(D,{key:0,coi:N.currentCoi,group:N.currentGroup},null,8,["coi","group"])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["modelValue"])]))])}var v=o("2909"),x=(o("0481"),o("4069"),o("4de4"),o("d3b7"),o("d81d"),o("99af"),o("8c98")),w=o("da07"),B=o("025e"),E=o("1874"),D={name:"CoiList",components:{CoiDetail:x["a"]},props:{person:{type:w["a"],required:!0}},setup:function(e){var t=Object(n["computed"])((function(){return e.person.membershipsWithCompletedCois.map((function(e){return e.cois.map((function(t){return t.group=e.group,t}))})).filter((function(e){return null!==e.completed_at})).flat()})),o=Object(n["computed"])((function(){return!!e.person.memberships&&e.person.memberships.filter((function(e){return!(null!==e.cois&&0!==e.cois.length||!e.group.expert_panel)}))})),c=[{name:"group.name",label:"Group",type:String,sortable:!0},{name:"coi_last_completed",label:"Completed",sortable:!1,type:Date}],r=Object(n["computed"])((function(){var t={name:"actions",sortable:!1},o={name:"latest_coi.id",label:"ID",sortable:!0},n=[].concat(c);return Object(E["c"])("people-manage")?[o].concat(Object(v["a"])(n),[t]):Object(E["g"])(e.person)?[].concat(Object(v["a"])(n),[t]):c})),a=Object(n["ref"])({field:"group.name",desc:!1}),l=function(e){return{name:"alt-coi",params:{name:Object(B["c"])(e.group.name),code:e.group.expert_panel.coi_code}}},s=Object(n["ref"])(null),i=Object(n["ref"])(null),b=Object(n["ref"])(!1),u=function(e){var t=e.cois[e.cois.length-1];s.value=t,i.value=e.group,b.value=!0};return{needsCoi:o,cois:t,coiFields:c,coiSort:a,currentCoi:s,currentGroup:i,showResponseDialog:b,showCoiResponse:u,getCoiRoute:l,fields:r}}},S=o("6b0d"),T=o.n(S);const P=T()(D,[["render",N]]);t["a"]=P},"8c98":function(e,t,o){"use strict";o("99af"),o("b0c0");var n=o("7a23"),c={key:0},r={class:"block-title"},a=Object(n["createTextVNode"])(" COI response for "),l={key:0},s={class:"text-sm response-data"},i={class:"flex-0"},b=Object(n["createElementVNode"])("p",{class:"mb-2"},"This is a legacy response.",-1),u={key:1,class:"response-data"};function d(e,t,o,d,p,m){var O=Object(n["resolveComponent"])("dictionary-row");return m.response?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createElementVNode"])("h2",r,[a,o.coi.data.first_name?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",l,Object(n["toDisplayString"])(e.titleCase("".concat(o.coi.data.first_name," ").concat(o.coi.data.last_name)))+" in ",1)):Object(n["createCommentVNode"])("",!0),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(o.group.name),1)]),Object(n["createElementVNode"])("div",s,[Object(n["createVNode"])(O,{label:"Name","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.coi.data.first_name)+" "+Object(n["toDisplayString"])(o.coi.data.last_name),1)]})),_:1}),Object(n["createVNode"])(O,{label:"Email","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.coi.data.email),1)]})),_:1}),m.response.document_uuid?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,label:"COI File","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",i,[b,Object(n["createElementVNode"])("button",{class:"btn btn-xs",onClick:t[0]||(t[0]=function(e){return m.downloadDocument(m.response.download_url.response)})}," Download the COI. ")])]})),_:1})):Object(n["createCommentVNode"])("",!0),m.response.document_uuid?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",u,[Object(n["createVNode"])(O,{label:m.response.work_fee_lab.question,vertical:!0,"label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.work_fee_lab.response)),1)]})),_:1},8,["label"]),Object(n["createVNode"])(O,{label:m.response.contributions_to_gd_in_ep.question,vertical:!0,"label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.contributions_to_gd_in_ep.response))+" ",1),1==m.response.contributions_to_gd_in_ep.response?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,label:m.response.contributions_to_genes.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.contributions_to_genes.response)),1)]})),_:1},8,["label"])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["label"]),Object(n["createVNode"])(O,{label:m.response.independent_efforts.question,vertical:!0,"label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.independent_efforts.response))+" ",1),[1,2].indexOf(m.response.independent_efforts.response)>-1?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,label:m.response.independent_efforts_details.question,vertical:!0,class:"pb-1 mb-1 ml-4 border-none","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.independent_efforts_details.response)),1)]})),_:1},8,["label"])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["label"]),Object(n["createVNode"])(O,{label:m.response.coi.question,vertical:!0,class:"pb-1 mb-1","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.coi.response))+" ",1),[1,2].indexOf(m.response.coi.response)>-1?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,label:m.response.coi_details.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.coi_details.response)),1)]})),_:1},8,["label"])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["label"])]))])])):Object(n["createCommentVNode"])("",!0)}var p={props:{coi:{type:Object,required:!0},group:{type:Object,required:!0}},data:function(){return{}},computed:{isLegacy:function(){return!1},response:function(){return this.coi.response_document}},methods:{getQuestionValue:function(e){return 1===e?"Yes":0===e?"No":2===e?"Unsure":e},downloadDocument:function(e){window.location=e}}},m=(o("6786"),o("6b0d")),O=o.n(m);const j=O()(p,[["render",d]]);t["a"]=j},c226:function(e,t,o){"use strict";o("b0c0");var n=o("7a23"),c=Object(n["createTextVNode"])(" Edit Info "),r={class:"mt-4 border-t pt-4"},a=Object(n["createElementVNode"])("h3",null,"Profile",-1),l={class:"mt-4 border-t pt-4"},s={key:0},i={key:1},b={key:0},u=Object(n["createTextVNode"])(),d={key:1},p=Object(n["createTextVNode"])(),m={key:2},O={key:1,class:"mt-4 border-t pt-4"},j=Object(n["createElementVNode"])("h3",null,"Metadata",-1),f={key:0},h={key:1,class:"pt-4 border-t mt-4"};function k(e,t,o,k,y,C){var V=Object(n["resolveComponent"])("edit-icon-button"),g=Object(n["resolveComponent"])("dictionary-row"),_=Object(n["resolveComponent"])("profile-form"),N=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[e.userIsPerson(o.person)||e.hasPermission("people-manage")?(Object(n["openBlock"])(),Object(n["createBlock"])(V,{key:0,class:"btn btn-sm float-right",onClick:C.editPerson},{default:Object(n["withCtx"])((function(){return[c]})),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(["name","email"],(function(t){return Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",key:t,label:e.titleCase(t)},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person[t]),1)]})),_:2},1032,["label"])})),64)),Object(n["createElementVNode"])("section",r,[a,Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",label:"Institution"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.institutionName),1)]})),_:1}),Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",label:"Credentials"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.credentials),1)]})),_:1}),Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",label:"Biography"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.biography),1)]})),_:1})]),Object(n["createElementVNode"])("section",l,[Object(n["createVNode"])(g,{class:"pb-2",label:"Timezone"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.timezone),1)]})),_:1}),Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",label:"Address"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[o.person.street1?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,Object(n["toDisplayString"])(o.person.street1),1)):Object(n["createCommentVNode"])("",!0),o.person.street2?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,Object(n["toDisplayString"])(o.person.street2),1)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",null,[o.person.city?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",b,Object(n["toDisplayString"])(o.person.city)+",",1)):Object(n["createCommentVNode"])("",!0),u,o.person.state?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",d,Object(n["toDisplayString"])(o.person.state),1)):Object(n["createCommentVNode"])("",!0),p,o.person.zip?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",m,Object(n["toDisplayString"])(o.person.zip),1)):Object(n["createCommentVNode"])("",!0)])])]})),_:1}),Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",label:"Country"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.country?o.person.country.name:""),1)]})),_:1}),Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",label:"Phone"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.phone),1)]})),_:1})]),e.hasPermission("people-manage")?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",O,[j,Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",label:"Uuid"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.uuid),1)]})),_:1}),Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",label:"Numeric ID"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.id),1)]})),_:1}),Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",label:"User ID"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.user_id||"Account not activated."),1)]})),_:1}),o.person.invite?(Object(n["openBlock"])(),Object(n["createBlock"])(g,{key:0,class:"pb-2","label-class":"w-40",label:"Invite Code"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.invite.code)+"   ",1),o.person.invite.redeemed_at?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",f," redeemed on "+Object(n["toDisplayString"])(e.formatDate(o.person.invite.redeemed_at)),1)):Object(n["createCommentVNode"])("",!0)]})),_:1})):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(["created_at","updated_at"],(function(t){return Object(n["createVNode"])(g,{class:"pb-2","label-class":"w-40",key:t,label:t},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formatDate(o.person[t])),1)]})),_:2},1032,["label"])})),64)),e.hasPermission("people-manage")||e.userIsPerson(o.person)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",h,[Object(n["createElementVNode"])("button",{class:"btn btn-sm",onClick:t[0]||(t[0]=function(){return C.editPerson&&C.editPerson.apply(C,arguments)})}," Edit Info ")])):Object(n["createCommentVNode"])("",!0)])):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(N,{modelValue:y.showEditForm,"onUpdate:modelValue":t[1]||(t[1]=function(e){return y.showEditForm=e}),title:C.formDialogTitle},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(_,{person:o.person,onSaved:C.hideEditForm,onCanceled:C.hideEditForm},null,8,["person","onSaved","onCanceled"])]})),_:1},8,["modelValue","title"])]))])}var y=o("da07"),C=o("5f08"),V={name:"PersonProfile",components:{ProfileForm:C["a"]},props:{person:{type:y["a"],required:!0}},data:function(){return{showEditForm:!1}},computed:{formDialogTitle:function(){var e=this.userIsPerson(this.person)?"your":"".concat(this.person.name,"'s");return"Edit ".concat(e," information.")}},methods:{editPerson:function(){this.$store.commit("people/setCurrentItemIndex",this.person),this.showEditForm=!0},hideEditForm:function(){this.showEditForm=!1}}},g=o("6b0d"),_=o.n(g);const N=_()(V,[["render",k]]);t["a"]=N}}]);
//# sourceMappingURL=chunk-4062ca38.eb8d08e4.js.map