(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a633b7d2"],{"04e9":function(e,t,o){},"1f2d":function(e,t,o){"use strict";var n=o("7a23"),r={class:"border border-gray-200 rounded-lg"},c=["src","alt"],a={key:1};function l(e,t,o,l,i,s){var p=Object(n["resolveComponent"])("ImageCropper"),d=Object(n["resolveComponent"])("input-row"),u=Object(n["resolveComponent"])("button-row"),b=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:Object(n["normalizeClass"])({"cursor-wait":i.saving})},[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("img",{src:s.srcPath,alt:s.altText,class:"rounded-t-lg w-full",onClick:t[0]||(t[0]=function(){return s.initUpload&&s.initUpload.apply(s,arguments)})},null,8,c),Object(n["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(){return s.initUpload&&s.initUpload.apply(s,arguments)}),class:"border border-t-0 bg-gray-200 block w-full"}," Edit ")]),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(b,{modelValue:i.showForm,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.showForm=e}),title:"Upload a new profile photo"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{"image-src":s.srcPath,onCropped:s.setCroppedImageBlob},null,8,["image-src","onCropped"]),Object(n["createVNode"])(d,{hideLabel:"",errors:i.errors.profile_photo},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("input",{type:"file",onChange:t[2]||(t[2]=function(){return s.setFile&&s.setFile.apply(s,arguments)}),ref:"fileInput"},null,544)]})),_:1},8,["errors"]),i.saving?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,"Saving...")):(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,"submit-text":"Save",onSubmitted:s.saveCropped,onCanceled:s.cancelCropped},null,8,["onSubmitted","onCanceled"]))]})),_:1},8,["modelValue"])]))],2)}var i=o("1da1"),s=(o("96cf"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("9861"),o("b0c0"),o("450c")),p=o("db04"),d={name:"ProfilePhotoForm",components:{ImageCropper:s["default"]},props:{person:{type:Object,required:!0}},data:function(){return{showForm:!1,file:null,croppedImageBlob:null,errors:{},saving:!1}},watch:{person:{immediate:!0,deep:!0,handler:function(e){e.profile_photo&&this.fetchProfileImage()}}},computed:{srcPath:function(){return this.file?(console.log("create from this.file"),URL.createObjectURL(this.file)):this.person.profile_photo?"/profile-photos/".concat(this.person.profile_photo):"/images/default_profile.jpg"},profilePhoto:function(){return this.person.profile_photo?"/profile-photos/".concat(this.person.profile_photo):"/images/default_profile.jpg"},altText:function(){return this.person.profile_photo_path?"".concat(this.person.name," profile photo."):"Default profile image"}},methods:{initUpload:function(){this.showForm=!0,this.$nextTick((function(){window.dispatchEvent(new Event("resize"))}))},setFile:function(){this.file=this.$refs.fileInput.files[0]},setCroppedImageBlob:function(e){this.croppedImageBlob=e},fetchProfileImage:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o="/api/people/".concat(e.person.uuid,"/profile-photo"),n={Accept:"application/octet-stream",timeout:3e4,responseType:"blob"},t.next=4,p["a"].get(o,n).then((function(e){if(e.data instanceof Blob)return new Blob([e.data])}));case 4:e.file=t.sent;case 5:case"end":return t.stop()}}),t)})))()},saveCropped:function(){var e=this;if(this.croppedImageBlob.size>2e6){var t=400,o=new Image;return o.src=URL.createObjectURL(this.croppedImageBlob),void o.addEventListener("load",(function(){var n=document.createElement("canvas"),r=n.getContext("2d"),c=document.createElement("canvas"),a=c.getContext("2d");n.width=t,n.height=n.width*o.height/o.width;var l={width:Math.floor(.5*o.width),height:Math.floor(.5*o.height)};c.width=l.width,c.height=l.height,a.drawImage(o,0,0,l.width,l.height);while(.5*l.width>t)l={width:Math.floor(.5*l.width),height:Math.floor(.5*l.height)},a.drawImage(c,0,0,2*l.width,2*l.height,0,0,l.width,l.height);r.drawImage(c,0,0,l.width,l.height,0,0,n.width,n.height),n.toBlob((function(t){console.log(t.size/1e3/1e3),e.storeImage(t)}),null,.5)}))}this.storeImage(this.croppedImageBlob)},storeImage:function(e){var t=this;this.saving=!0;var o=new FormData;o.append("profile_photo",e),p["a"].post("/api/people/".concat(this.person.uuid,"/profile-photo"),o).then((function(){t.$store.dispatch("people/getPerson",{uuid:t.person.uuid}),t.showForm=!1,t.file=null,t.saving=!1})).catch((function(e){if(Object(p["b"])(e))return t.errors=e.response.data.errors,void(t.saving=!1);throw t.saving=!1,e}))},cancelCropped:function(){this.showForm=!1,this.file=null}}},u=o("6b0d"),b=o.n(u);const m=b()(d,[["render",l]]);t["a"]=m},"48e8":function(e,t,o){"use strict";o.d(t,"c",(function(){return s})),o.d(t,"d",(function(){return p})),o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return u}));o("d3b7"),o("159b"),o("b64b"),o("d81d"),o("b0c0");var n=o("7a23"),r=o("f96b"),c=o("025e"),a=o("2297"),l=o("05b6"),i=o("526b"),s=Object(n["ref"])({countries:[],primaryOccupations:[],races:[],ethnicities:[],genders:[]}),p=Object(n["computed"])((function(){return[{name:"first_name"},{name:"last_name"},{name:"email"},{name:"institution_id",label:"Institution",type:"component",component:l["default"]},{name:"credentials",type:"large-text"},{name:"biography",type:"large-text"},{name:"*",type:"component",label:"Address",component:i["default"]},{name:"country_id",label:"Country",type:"select",options:s.value.countries},{name:"phone"},{name:"timezone",label:"Timezone",type:"component",component:a["default"]}]})),d=Object(n["computed"])((function(){return[{name:"primary_occupation_id",label:"Primary Occupation",type:"select",options:s.value.primaryOccupations},{name:"primary_occupation_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.primary_occupation_id}},{name:"race_id",label:"Race",type:"select",options:s.value.races},{name:"race_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.race_id}},{name:"ethnicity_id",label:"Ethnicity",type:"select",options:s.value.ethnicities},{name:"enthnicity_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.enthnicity_id}},{name:"gender_id",label:"Gender",type:"select",options:s.value.genders},{name:"gender_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.gender_id}}]})),u=function(){Object.keys(s.value).forEach((function(e){r["a"].get("/api/people/lookups/".concat(Object(c["c"])(e))).then((function(t){s.value[e]=t.data.data.map((function(e){return{value:e.id,label:e.name}}))})).catch((function(e){return console.error(e)}))}))}},"5f08":function(e,t,o){"use strict";var n=o("7a23"),r=Object(n["createElementVNode"])("h3",null,"Profile",-1),c={class:"float-right"},a=Object(n["createElementVNode"])("hr",{class:"my-4"},null,-1);function l(e,t,o,l,i,s){var p=Object(n["resolveComponent"])("profile-photo-form"),d=Object(n["resolveComponent"])("data-form"),u=Object(n["resolveComponent"])("button-row");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[r,Object(n["createElementVNode"])("div",c,[Object(n["createVNode"])(p,{person:o.person,style:{width:"100px",height:"100px"}},null,8,["person"])]),Object(n["createVNode"])(d,{fields:s.fields,modelValue:i.profile,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.profile=e}),errors:i.errors},null,8,["fields","modelValue","errors"]),a,Object(n["createVNode"])(u,{onSubmitted:s.save,onCanceled:t[1]||(t[1]=function(e){return s.cancel()}),"submit-text":"Save"},null,8,["onSubmitted"])])}var i=o("1da1"),s=o("5530"),p=o("2909"),d=(o("96cf"),o("4de4"),o("d3b7"),o("caad"),o("b0c0"),o("033d")),u=o("48e8"),b=o("1f2d"),m={name:"ProfileForm",components:{ProfilePhotoForm:b["a"]},props:{person:{type:Object,required:!0}},emits:["saved","canceled"],data:function(){return{errors:{},profile:{},page:"profile",institutionId:null,timezone:null}},computed:{fields:function(){var e=Object(p["a"])(this.profileFields);return this.hasPermission("people-manage")||this.userIsPerson(this.person)||(e=e.filter((function(e){return["first_name","last_name","email"].includes(e.name)}))),e},title:function(){return"profile"==this.page?"Please fill out your profile":"Please share your demographic information."}},watch:{person:function(){this.initProfile()}},methods:{initProfile:function(){this.profile=Object(s["a"])({},this.person.attributes)},save:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("people/updateProfile",{uuid:e.person.uuid,attributes:e.profile}).then((function(){e.$store.dispatch("getCurrentUser",{force:!0}),e.$store.commit("pushSuccess","Your profile has been updated.")}));case 3:e.errors={},e.$emit("saved"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(d["a"])(t.t0)&&(e.errors=t.t0.response.data.errors);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},cancel:function(){this.initProfile(),this.errors={},this.$emit("canceled")}},setup:function(){return Object(n["onMounted"])((function(){return Object(u["b"])()})),{profileFields:u["d"],demographicFields:u["a"],getLookups:u["b"],lookups:u["c"]}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.initProfile();case 1:case"end":return t.stop()}}),t)})))()}},f=o("6b0d"),O=o.n(f);const j=O()(m,[["render",l]]);t["a"]=j},6786:function(e,t,o){"use strict";o("04e9")},"6a6b":function(e,t,o){"use strict";o("b0c0");var n=o("7a23"),r={key:0},c={key:0,class:"mb-4"},a={key:0},l=Object(n["createElementVNode"])("h3",null,"You must complete a Conflict of Interest Disclosure for the following memberships:",-1),i={class:"my-2"},s={key:1},p=Object(n["createElementVNode"])("h3",null,"Outstanding COI disclosures:",-1),d={key:1},u=Object(n["createElementVNode"])("h3",null,"Completed & Current COI Disclosures",-1),b={key:0},m=["onClick"],f=Object(n["createTextVNode"])("   "),O=Object(n["createTextVNode"])("Update COI"),j={key:2},h=Object(n["createElementVNode"])("h3",null,"Past COI Disclosures",-1),g={key:0},k=["onClick"],C=Object(n["createTextVNode"])("   "),y=Object(n["createTextVNode"])("Update COI"),V={key:3,class:"well"},v={key:1,class:"well"};function w(e,t,o,w,_,N){var x=this,B=Object(n["resolveComponent"])("router-link"),E=Object(n["resolveComponent"])("data-table"),P=Object(n["resolveComponent"])("coi-detail"),D=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[o.person.memberships.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[o.person.hasPendingCois?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[e.userIsPerson(o.person)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[l,Object(n["createElementVNode"])("div",i,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.person.membershipsWithPendingCois,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(B,{key:e.id,class:"block my-0 font-bold p-2 border border-gray-300 first:rounded-t-lg last:rounded-b-lg cursor-pointer hover:bg-blue-50 link",to:w.getCoiRoute(e)},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.group.expert_panel.display_name),1)]})),_:2},1032,["to"])})),128))])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[p,Object(n["createElementVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.person.membershipsWithPendingCois,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:"list-disc ml-6",key:e.id},Object(n["toDisplayString"])(e.group.expert_panel.display_name),1)})),128))])]))])):Object(n["createCommentVNode"])("",!0),o.person.hasCompletedCois?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",d,[u,Object(n["createVNode"])(E,{fields:w.fields,data:o.person.membershipsWithCompletedCois,sort:w.coiSort,"onUpdate:sort":t[0]||(t[0]=function(e){return w.coiSort=e}),class:"my-2"},{"cell-actions":Object(n["withCtx"])((function(t){var r=t.item;return[r.coi_last_completed?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",b,[Object(n["createElementVNode"])("button",{class:"btn btn-xs",onClick:function(e){return w.showCoiResponse(r)}}," View response ",8,m),f,e.userIsPerson(o.person)?(Object(n["openBlock"])(),Object(n["createBlock"])(B,{key:0,to:{name:"alt-coi",params:{code:r.group.expert_panel.coi_code,name:x.kebabCase(r.group.name)}},class:"btn btn-xs"},{default:Object(n["withCtx"])((function(){return[O]})),_:2},1032,["to"])):Object(n["createCommentVNode"])("",!0)])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["fields","data","sort"])])):Object(n["createCommentVNode"])("",!0),o.person.hasOutdatedCois?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",j,[h,Object(n["createVNode"])(E,{fields:w.fields,data:o.person.membershipsWithOutdatedCois,sort:w.coiSort,"onUpdate:sort":t[1]||(t[1]=function(e){return w.coiSort=e}),class:"my-2"},{"cell-actions":Object(n["withCtx"])((function(t){var r=t.item;return[r.coi_last_completed?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",g,[Object(n["createElementVNode"])("button",{class:"btn btn-xs",onClick:function(e){return w.showCoiResponse(r)}},"View response",8,k),C,e.userIsPerson(o.person)?(Object(n["openBlock"])(),Object(n["createBlock"])(B,{key:0,to:{name:"alt-coi",params:{code:r.group.expert_panel.coi_code,name:x.kebabCase(r.group.name)}},class:"btn btn-xs"},{default:Object(n["withCtx"])((function(){return[y]})),_:2},1032,["to"])):Object(n["createCommentVNode"])("",!0)])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["fields","data","sort"])])):Object(n["createCommentVNode"])("",!0),o.person.hasPending||o.person.completedCois?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",V," None of your memberships require a conflict of interest disclosure "))])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",v,"You are not required to complete conflict of interest disclsoure")),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(D,{modelValue:w.showResponseDialog,"onUpdate:modelValue":t[2]||(t[2]=function(e){return w.showResponseDialog=e}),size:"xl"},{default:Object(n["withCtx"])((function(){return[w.currentCoi?(Object(n["openBlock"])(),Object(n["createBlock"])(P,{key:0,coi:w.currentCoi,group:w.currentGroup},null,8,["coi","group"])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["modelValue"])]))])}var _=o("2909"),N=(o("0481"),o("4069"),o("4de4"),o("d3b7"),o("d81d"),o("99af"),o("8c98")),x=o("da07"),B=o("025e"),E=o("1874"),P={name:"CoiList",components:{CoiDetail:N["a"]},props:{person:{type:x["a"],required:!0}},setup:function(e){var t=Object(n["computed"])((function(){return e.person.membershipsWithCompletedCois.map((function(e){return e.cois.map((function(t){return t.group=e.group,t}))})).filter((function(e){return null!==e.completed_at})).flat()})),o=Object(n["computed"])((function(){return!!e.person.memberships&&e.person.memberships.filter((function(e){return!(null!==e.cois&&0!==e.cois.length||!e.group.expert_panel)}))})),r=[{name:"group.name",label:"Group",type:String,sortable:!0},{name:"coi_last_completed",label:"Completed",sortable:!1,type:Date}],c=Object(n["computed"])((function(){var t={name:"actions",sortable:!1},o={name:"latest_coi.id",label:"ID",sortable:!0},n=[].concat(r);return Object(E["c"])("people-manage")?[o].concat(Object(_["a"])(n),[t]):Object(E["g"])(e.person)?[].concat(Object(_["a"])(n),[t]):r})),a=Object(n["ref"])({field:"group.name",desc:!1}),l=function(e){return{name:"alt-coi",params:{name:Object(B["c"])(e.group.name),code:e.group.expert_panel.coi_code}}},i=Object(n["ref"])(null),s=Object(n["ref"])(null),p=Object(n["ref"])(!1),d=function(e){var t=e.cois[e.cois.length-1];i.value=t,s.value=e.group,p.value=!0};return{needsCoi:o,cois:t,coiFields:r,coiSort:a,currentCoi:i,currentGroup:s,showResponseDialog:p,showCoiResponse:d,getCoiRoute:l,fields:c}}},D=o("6b0d"),I=o.n(D);const S=I()(P,[["render",w]]);t["a"]=S},"8c98":function(e,t,o){"use strict";o("99af"),o("b0c0");var n=o("7a23"),r={key:0},c={class:"block-title"},a=Object(n["createTextVNode"])(" COI response for "),l={key:0},i={class:"text-sm response-data"},s={class:"flex-0"},p=Object(n["createElementVNode"])("p",{class:"mb-2"},"This is a legacy response.",-1),d={key:1,class:"response-data"};function u(e,t,o,u,b,m){var f=Object(n["resolveComponent"])("dictionary-row");return m.response?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createElementVNode"])("h2",c,[a,o.coi.data.first_name?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",l,Object(n["toDisplayString"])(e.titleCase("".concat(o.coi.data.first_name," ").concat(o.coi.data.last_name)))+" in ",1)):Object(n["createCommentVNode"])("",!0),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(o.group.name),1)]),Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(f,{label:"Name","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.coi.data.first_name)+" "+Object(n["toDisplayString"])(o.coi.data.last_name),1)]})),_:1}),Object(n["createVNode"])(f,{label:"Email","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.coi.data.email),1)]})),_:1}),m.response.document_uuid?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0,label:"COI File","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",s,[p,Object(n["createElementVNode"])("button",{class:"btn btn-xs",onClick:t[0]||(t[0]=function(e){return m.downloadDocument(m.response.download_url.response)})}," Download the COI. ")])]})),_:1})):Object(n["createCommentVNode"])("",!0),m.response.document_uuid?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",d,[Object(n["createVNode"])(f,{label:m.response.work_fee_lab.question,vertical:!0,"label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.work_fee_lab.response)),1)]})),_:1},8,["label"]),Object(n["createVNode"])(f,{label:m.response.contributions_to_gd_in_ep.question,vertical:!0,"label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.contributions_to_gd_in_ep.response))+" ",1),1==m.response.contributions_to_gd_in_ep.response?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0,label:m.response.contributions_to_genes.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.contributions_to_genes.response)),1)]})),_:1},8,["label"])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["label"]),Object(n["createVNode"])(f,{label:m.response.independent_efforts.question,vertical:!0,"label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.independent_efforts.response))+" ",1),[1,2].indexOf(m.response.independent_efforts.response)>-1?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0,label:m.response.independent_efforts_details.question,vertical:!0,class:"pb-1 mb-1 ml-4 border-none","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.independent_efforts_details.response)),1)]})),_:1},8,["label"])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["label"]),Object(n["createVNode"])(f,{label:m.response.coi.question,vertical:!0,class:"pb-1 mb-1","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.coi.response))+" ",1),[1,2].indexOf(m.response.coi.response)>-1?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0,label:m.response.coi_details.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.getQuestionValue(m.response.coi_details.response)),1)]})),_:1},8,["label"])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["label"])]))])])):Object(n["createCommentVNode"])("",!0)}var b={props:{coi:{type:Object,required:!0},group:{type:Object,required:!0}},data:function(){return{}},computed:{isLegacy:function(){return!1},response:function(){return this.coi.response_document}},methods:{getQuestionValue:function(e){return 1===e?"Yes":0===e?"No":2===e?"Unsure":e},downloadDocument:function(e){window.location=e}}},m=(o("6786"),o("6b0d")),f=o.n(m);const O=f()(b,[["render",u]]);t["a"]=O},c226:function(e,t,o){"use strict";o("b0c0");var n=o("7a23"),r=Object(n["createTextVNode"])(" Edit Info "),c={class:"flex space-x-4"},a={class:"mt-4 border-t pt-4"},l=Object(n["createElementVNode"])("h3",null,"Profile",-1),i={class:"mt-4 border-t pt-4"},s={key:0},p={key:1},d={key:0},u=Object(n["createTextVNode"])(),b={key:1},m=Object(n["createTextVNode"])(),f={key:2},O={key:0,class:"mt-4 border-t pt-4"},j=Object(n["createElementVNode"])("h3",null,"Metadata",-1),h={key:0},g={key:1,class:"pt-4 border-t mt-4"};function k(e,t,o,k,C,y){var V=Object(n["resolveComponent"])("edit-icon-button"),v=Object(n["resolveComponent"])("dictionary-row"),w=Object(n["resolveComponent"])("profile-form"),_=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[e.userIsPerson(o.person)||e.hasPermission("people-manage")?(Object(n["openBlock"])(),Object(n["createBlock"])(V,{key:0,class:"btn btn-sm float-right",onClick:y.editPerson},{default:Object(n["withCtx"])((function(){return[r]})),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",null,[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(y.profilePhotoComponent),{person:o.person,style:{width:"120px"}},null,8,["person"]))]),Object(n["createElementVNode"])("div",null,[(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(["name","email"],(function(t){return Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",key:t,label:e.titleCase(t)},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person[t]),1)]})),_:2},1032,["label"])})),64)),Object(n["createElementVNode"])("section",a,[l,Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",label:"Institution"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.institutionName),1)]})),_:1}),Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",label:"Credentials"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.credentials),1)]})),_:1}),Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",label:"Biography"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.biography),1)]})),_:1})])]),Object(n["createElementVNode"])("section",i,[Object(n["createVNode"])(v,{class:"pb-2",label:"Timezone"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.timezone),1)]})),_:1}),Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",label:"Address"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[o.person.street1?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,Object(n["toDisplayString"])(o.person.street1),1)):Object(n["createCommentVNode"])("",!0),o.person.street2?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p,Object(n["toDisplayString"])(o.person.street2),1)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",null,[o.person.city?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",d,Object(n["toDisplayString"])(o.person.city)+",",1)):Object(n["createCommentVNode"])("",!0),u,o.person.state?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",b,Object(n["toDisplayString"])(o.person.state),1)):Object(n["createCommentVNode"])("",!0),m,o.person.zip?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",f,Object(n["toDisplayString"])(o.person.zip),1)):Object(n["createCommentVNode"])("",!0)])])]})),_:1}),Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",label:"Country"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.country?o.person.country.name:""),1)]})),_:1}),Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",label:"Phone"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.phone),1)]})),_:1})]),e.hasPermission("people-manage")?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",O,[j,Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",label:"Uuid"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.uuid),1)]})),_:1}),Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",label:"Numeric ID"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.id),1)]})),_:1}),Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",label:"User ID"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.user_id||"Account not activated."),1)]})),_:1}),o.person.invite?(Object(n["openBlock"])(),Object(n["createBlock"])(v,{key:0,class:"pb-2","label-class":"w-40",label:"Invite Code"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.person.invite.code)+"   ",1),o.person.invite.redeemed_at?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",h," redeemed on "+Object(n["toDisplayString"])(e.formatDate(o.person.invite.redeemed_at)),1)):Object(n["createCommentVNode"])("",!0)]})),_:1})):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(["created_at","updated_at"],(function(t){return Object(n["createVNode"])(v,{class:"pb-2","label-class":"w-40",key:t,label:t},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formatDate(o.person[t])),1)]})),_:2},1032,["label"])})),64)),e.hasPermission("people-manage")||e.userIsPerson(o.person)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",g,[Object(n["createElementVNode"])("button",{class:"btn btn-sm",onClick:t[0]||(t[0]=function(){return y.editPerson&&y.editPerson.apply(y,arguments)})}," Edit Info ")])):Object(n["createCommentVNode"])("",!0)])):Object(n["createCommentVNode"])("",!0)])]),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(_,{modelValue:C.showEditForm,"onUpdate:modelValue":t[1]||(t[1]=function(e){return C.showEditForm=e}),title:y.formDialogTitle},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{person:o.person,onSaved:y.hideEditForm,onCanceled:y.hideEditForm},null,8,["person","onSaved","onCanceled"])]})),_:1},8,["modelValue","title"])]))])}var C=o("da07"),y=o("5f08"),V=o("ef43"),v=o("1f2d"),w={name:"PersonProfile",components:{ProfileForm:y["a"],ProfilePicture:V["a"],ProfilePhotoForm:v["a"]},props:{person:{type:C["a"],required:!0}},data:function(){return{showEditForm:!1}},computed:{formDialogTitle:function(){var e=this.userIsPerson(this.person)?"your":"".concat(this.person.name,"'s");return"Edit ".concat(e," information.")},profilePhotoComponent:function(){return this.hasPermission("people-manage")||this.userIsPerson(this.person)?v["a"]:V["a"]}},methods:{editPerson:function(){this.$store.commit("people/setCurrentItemIndex",this.person),this.showEditForm=!0},hideEditForm:function(){this.showEditForm=!1}}},_=o("6b0d"),N=o.n(_);const x=N()(w,[["render",k]]);t["a"]=x},ef43:function(e,t,o){"use strict";var n=o("7a23"),r={class:"border border-gray-300 bg-white overflow-hidden"},c=["src"];function a(e,t,o,a,l,i){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createElementVNode"])("img",{src:i.photoUrl,class:"w-full"},null,8,c)])}var l=o("da07"),i={name:"ProfilePicture",props:{person:{required:!0,type:l["a"]}},data:function(){return{}},computed:{hasProfilePhoto:function(){return null!==this.person.profile_photo},photoUrl:function(){return this.hasProfilePhoto?"/profile-photos/".concat(this.person.profile_photo):"/images/default_profile.jpg"}},methods:{}},s=o("6b0d"),p=o.n(s);const d=p()(i,[["render",a]]);t["a"]=d}}]);
//# sourceMappingURL=chunk-a633b7d2.e5445569.js.map