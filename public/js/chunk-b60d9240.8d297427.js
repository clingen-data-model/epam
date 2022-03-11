(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b60d9240"],{"0251":function(e,t,n){},"0d3f":function(e,t,n){},1340:function(e,t,n){"use strict";n("0d3f")},"73ff":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),o={class:"pb-4"},a=Object(r["createTextVNode"])("People"),c={class:"flex justify-between items-center"},l=Object(r["createElementVNode"])("strong",null,"Email:",-1),i=Object(r["createElementVNode"])("strong",null,"Institution:",-1),u={key:0,class:"well"},s=["innerHTML"],d=["onClick"],b={class:"border my-4 p-4 bg-red-100 border-red-200 rounded"},p=Object(r["createElementVNode"])("h2",{class:"mb-4 text-red-800"}," Here be dragons. Proceed with caution. ",-1),m=Object(r["createElementVNode"])("p",null,"You are about to delete this person. All related data will also be deleted including:",-1),f=Object(r["createElementVNode"])("ul",{class:"list-disc pl-6"},[Object(r["createElementVNode"])("li",null,"User record, system roles, and system permissions (if account is activated)"),Object(r["createElementVNode"])("li",null,"Invite"),Object(r["createElementVNode"])("li",null,"Group Memberships and group roles (if any)")],-1),j=Object(r["createElementVNode"])("div",{class:"border my-4 px-2 py-1 font-bold bg-red-100 border-red-200 rounded text-red-800"}," This cannot be undone. ",-1);function O(e,t,n,O,h,g){var v=Object(r["resolveComponent"])("router-link"),y=Object(r["resolveComponent"])("note"),w=Object(r["resolveComponent"])("icon-edit"),V=Object(r["resolveComponent"])("dictionary-row"),C=Object(r["resolveComponent"])("membership-list"),E=Object(r["resolveComponent"])("tab-item"),N=Object(r["resolveComponent"])("person-profile"),x=Object(r["resolveComponent"])("coi-list"),k=Object(r["resolveComponent"])("activity-log"),D=Object(r["resolveComponent"])("tabs-container"),_=Object(r["resolveComponent"])("router-view"),M=Object(r["resolveComponent"])("modal-dialog"),S=Object(r["resolveComponent"])("custom-email-form"),B=Object(r["resolveComponent"])("button-row"),L=Object(r["resolveComponent"])("person-merge-form");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("header",o,[Object(r["createVNode"])(v,{class:"note",to:"/people"},{default:Object(r["withCtx"])((function(){return[a]})),_:1}),Object(r["createElementVNode"])("h1",c,[Object(r["createElementVNode"])("div",null,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.person.name)+" ",1),Object(r["createVNode"])(y,null,{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])("ID: "+Object(r["toDisplayString"])(e.person.id),1)]})),_:1})]),e.hasPermission("people-manage")||e.userIsPerson(e.person)?(Object(r["openBlock"])(),Object(r["createBlock"])(v,{key:0,to:"/people/".concat(n.uuid,"/edit"),class:"btn btn-xs flex-grow-0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{width:"16",heigh:"16"})]})),_:1},8,["to"])):Object(r["createCommentVNode"])("",!0)]),Object(r["createVNode"])(V,{label:"Email"},{label:Object(r["withCtx"])((function(){return[l]})),default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.person.email),1)]})),_:1}),Object(r["createVNode"])(V,{label:"Institution"},{label:Object(r["withCtx"])((function(){return[i]})),default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.person.institution?e.person.institution.name:null),1)]})),_:1})]),Object(r["createVNode"])(D,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{label:"groups"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{person:e.person},null,8,["person"])]})),_:1}),Object(r["createVNode"])(E,{label:"Info"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(N,{person:e.person},null,8,["person"])]})),_:1}),Object(r["createVNode"])(E,{label:"Conflict of Interest"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,{person:e.person},null,8,["person"])]})),_:1}),Object(r["createVNode"])(E,{label:"Email Log",visible:e.hasPermission("people-manage")||e.userIsPerson(e.person)},{default:Object(r["withCtx"])((function(){return[0==g.sortedMailLog.length?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u,Object(r["toDisplayString"])(e.person.first_name)+" has not received any mail via the GPM. ",1)):Object(r["createCommentVNode"])("",!0),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(g.sortedMailLog,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"w-3/4 my-4 p-4 border",key:t.id},[Object(r["createVNode"])(V,{label:"Date/Time"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(O.formatDate(t.created_at)),1)]})),_:2},1024),Object(r["createVNode"])(V,{label:"Subject"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.subject),1)]})),_:2},1024),Object(r["createVNode"])(V,{label:"Body"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",{innerHTML:t.body},null,8,s)]})),_:2},1024),e.hasPermission("people-manage")?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,class:"btn btn-xs",onClick:Object(r["withModifiers"])((function(e){return g.initResend(t)}),["stop"])},"Resend",8,d)):Object(r["createCommentVNode"])("",!0)])})),128))]})),_:1},8,["visible"]),Object(r["createVNode"])(E,{label:"Log",visible:e.hasPermission("people-manage")},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{"log-entries":O.logEntries,"api-url":"/api/people/".concat(e.person.uuid,"/activity-logs"),"log-updated":O.getLogEntries},null,8,["log-entries","api-url","log-updated"]),Object(r["createElementVNode"])("button",{class:"btn btn-xs mt-1",onClick:t[0]||(t[0]=function(){return O.getLogEntries&&O.getLogEntries.apply(O,arguments)})},"Refresh")]})),_:1},8,["visible"]),Object(r["createVNode"])(E,{label:"Admin",visible:e.hasPermission("people-manage")},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("section",b,[p,Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("button",{class:"btn btn red",onClick:t[1]||(t[1]=function(){return g.initMerge&&g.initMerge.apply(g,arguments)})},"Merge Person into another")]),Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("button",{class:"btn btn red",onClick:t[2]||(t[2]=function(){return g.initDelete&&g.initDelete.apply(g,arguments)})},"Delete Person")])])]})),_:1},8,["visible"])]})),_:1}),(Object(r["openBlock"])(),Object(r["createBlock"])(r["Teleport"],{to:"body"},[Object(r["createVNode"])(M,{modelValue:g.showModal,"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.showModal=e}),title:e.$route.meta.title},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{name:"modal"})]})),_:1},8,["modelValue","title"]),Object(r["createVNode"])(M,{title:"Resend Email",modelValue:h.showResendDialog,"onUpdate:modelValue":t[4]||(t[4]=function(e){return h.showResendDialog=e})},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(S,{"mail-data":h.currentEmail,onSent:g.cleanupResend,onCanceled:g.cleanupResend},null,8,["mail-data","onSent","onCanceled"])]})),_:1},8,["modelValue"]),Object(r["createVNode"])(M,{title:"You are about to delete ".concat(e.person.name),modelValue:h.showDeleteConfirmation,"onUpdate:modelValue":t[5]||(t[5]=function(e){return h.showDeleteConfirmation=e})},{default:Object(r["withCtx"])((function(){return[m,f,j,Object(r["createVNode"])(B,{"submit-text":"Delete ".concat(e.person.name),onSubmitted:g.commitDelete,onCanceled:g.cancelDelete,"submit-variant":"red"},null,8,["submit-text","onSubmitted","onCanceled"])]})),_:1},8,["title","modelValue"]),Object(r["createVNode"])(M,{title:"Merge ".concat(e.person.name," into another person"),modelValue:h.showMergeForm,"onUpdate:modelValue":t[6]||(t[6]=function(e){return h.showMergeForm=e})},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(L,{obsolete:e.person,onSaved:g.handleMerged,onCanceled:g.handleMergeCanceled},null,8,["obsolete","onSaved","onCanceled"])]})),_:1},8,["title","modelValue"])]))])}var h=n("1da1"),g=n("2909"),v=n("5530"),y=(n("96cf"),n("4e82"),n("5502")),w=n("e328"),V=n("831e"),C=n("b442");function E(e,t,n,o,a,c){var l=Object(r["resolveComponent"])("data-table");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createVNode"])(l,{fields:a.fields,data:c.memberships,sort:a.sort,"onUpdate:sort":t[0]||(t[0]=function(e){return a.sort=e}),rowClickHandler:c.goToGroup,"row-class":function(){return"cursor-pointer"}},null,8,["fields","data","sort","rowClickHandler","row-class"])])}n("a15b"),n("d81d");var N=n("5313"),x={name:"MembershipList",props:{person:{type:Object,required:!0}},data:function(){return{sort:{field:"group.displayName",desc:!1},fields:[{name:"group.displayName",type:String,sortable:!0,label:"Name"},{name:"group.type.name",type:String,sortable:!0,label:"Type"},{name:"roles",type:String,sortable:!1,label:"Roles",resolveValue:function(e){return e.roles.map((function(e){return e.name})).join(", ")}},{name:"permissions",type:String,sortable:!1,label:"Permissions",resolveValue:function(e){return e.permissions.map((function(e){return e.name})).join(", ")}},{name:"start_date",type:Date,sortable:!0,label:"Started"},{name:"end_date",type:Date,sortable:!0,label:"Ended"}]}},computed:{memberships:function(){return this.person.memberships?this.person.memberships.map((function(e){return e.group&&(e.group=new N["b"](e.group)),e})):[]}},methods:{goToGroup:function(e){this.$router.push({name:"GroupDetail",params:{uuid:e.group.uuid}})}}},k=n("6b0d"),D=n.n(k);const _=D()(x,[["render",E]]);var M=_,S=n("c226"),B=Object(r["createElementVNode"])("p",{class:"mb-8"},[Object(r["createTextVNode"])(" Merging peple will do the following: "),Object(r["createElementVNode"])("ol",{class:"list-decimal ml-6"},[Object(r["createElementVNode"])("li",null,"Add the authoritative person to all groups of which the obsolete person is a member."),Object(r["createElementVNode"])("li",null,"Delete the obsolete person, their memberships, their invite, and their user account (if activated).")])],-1),L=Object(r["createTextVNode"])(" Merge "),R=Object(r["createTextVNode"])("(Obsolete person that will be deleted)"),T=Object(r["createTextVNode"])("Into "),P=Object(r["createTextVNode"])("(Authoritative person)");function U(e,t,n,o,a,c){var l=Object(r["resolveComponent"])("note"),i=Object(r["resolveComponent"])("person-search-select"),u=Object(r["resolveComponent"])("input-row"),s=Object(r["resolveComponent"])("button-row");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[B,Object(r["createVNode"])(u,{label:"Merge",vertical:""},{label:Object(r["withCtx"])((function(){return[L,Object(r["createVNode"])(l,{class:"inline-block"},{default:Object(r["withCtx"])((function(){return[R]})),_:1})]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:a.obsoleteCopy,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.obsoleteCopy=e}),"allow-add":!1},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(u,{label:"Into",errors:a.errors.authority_id,vertical:""},{label:Object(r["withCtx"])((function(){return[T,Object(r["createVNode"])(l,{class:"inline"},{default:Object(r["withCtx"])((function(){return[P]})),_:1})]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:a.authorityCopy,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.authorityCopy=e}),"allow-add":!1},null,8,["modelValue"])]})),_:1},8,["errors"]),Object(r["createVNode"])(s,{"submit-text":"Merge",onSubmitted:c.commitMerge,onCanceled:c.cancelMerge},null,8,["onSubmitted","onCanceled"])])}var I=n("db04"),$={name:"PersonMergeForm",props:{authority:{type:Object,required:!1},obsolete:{type:Object,default:function(){return{}}}},emits:["saved","canceled"],data:function(){return{authorityCopy:null,obsoleteCopy:null,errors:{}}},watch:{authority:{immediate:!0,handler:function(e){e&&(this.authorityCopy=Object(v["a"])({},e.attributes))}},obsolete:{immediate:!0,handler:function(e){e&&(this.obsoleteCopy=Object(v["a"])({},e.attributes))}}},methods:{commitMerge:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.errors={},t.next=4,e.$store.dispatch("people/mergePeople",{authority:e.authorityCopy,obsolete:e.obsoleteCopy});case 4:e.authorityId=null,e.obsoleteIds=null,e.$emit("saved"),t.next=14;break;case 9:if(t.prev=9,t.t0=t["catch"](0),!Object(I["b"])(t.t0)){t.next=14;break}return e.errors=t.t0.response.data.errors,t.abrupt("return");case 14:case"end":return t.stop()}}),t,null,[[0,9]])})))()},cancelMerge:function(){this.authorityId=null,this.obsoleteId=null,this.$emit("canceled")}}};const F=D()($,[["render",U]]);var q=F,H=n("6a6b"),A=n("ffb2"),G={name:"PersonDetail",components:{TabsContainer:C["default"],MembershipList:M,PersonProfile:S["a"],PersonMergeForm:q,CoiList:H["a"],ActivityLog:A["a"]},props:{uuid:{required:!0,type:String}},data:function(){return{emails:[],currentEmail:{},showResendDialog:null,showDeleteConfirmation:!1,showMergeForm:!1}},watch:{uuid:{immediate:!0,handler:function(){this.$store.dispatch("people/getPerson",{uuid:this.uuid}),this.getLogEntries()}}},computed:Object(v["a"])(Object(v["a"])({},Object(y["b"])({person:"people/currentItem"})),{},{showModal:{get:function(){return this.$route.meta.showModal},set:function(e){e&&this.$router.push({name:"PersonEdit",params:{uuid:this.person.uuid}}),this.$router.push({name:"PersonDetail",params:{uuid:this.person.uuid}})}},sortedMailLog:function(){return Object(g["a"])(this.person.mailLog).sort((function(e,t){return e.created_at==t.created_at?0:Date.parse(e.created_at)>Date.parse(t.created_at)?-1:1}))}}),methods:{initResend:function(e){this.currentEmail=Object(v["a"])({},e),this.showResendDialog=!0},cleanupResend:function(){this.currentEmail={},this.showResendDialog=!1,this.$store.dispatch("people/getMail",this.person)},initDelete:function(){this.showDeleteConfirmation=!0},commitDelete:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("people/deletePerson",e.person);case 2:e.showDeleteConfirmation=!1,e.$router.go(-1);case 4:case"end":return t.stop()}}),t)})))()},cancelDelete:function(){this.showDeleteConfirmation=!1},initMerge:function(){this.showMergeForm=!0},handleMerged:function(){this.showMergeForm=!1,this.$router.go(-1)},handleMergeCanceled:function(){this.showMergeForm=!1}},setup:function(e){var t=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(V["b"])("/api/people/".concat(e.uuid,"/activity-logs"));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{formatDate:w["c"],logEntries:V["c"],getLogEntries:t}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("people/getPerson",{uuid:e.uuid});case 2:e.$store.dispatch("people/getMail",e.person);case 3:case"end":return t.stop()}}),t)})))()}};const Y=D()(G,[["render",O]]);t["default"]=Y},"831e":function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return d}));var r=n("1da1"),o=(n("c740"),n("99af"),n("a434"),n("96cf"),n("7a23")),a=n("f96b"),c=Object(o["ref"])([]),l=Object(o["computed"])((function(){return c.value})),i=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get(t).then((function(e){return e.data.data}));case 2:c.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post(t,n).then((function(e){return c.value.push(e.data),e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].put(t,n).then((function(e){var t=c.value.findIndex((function(t){return t.id==e.data.id}));return c.value[t]=e.data,e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].delete("".concat(t,"/").concat(n)).then((function(e){var t=c.value.findIndex((function(e){return e.id==n}));return c.value.splice(t,1),e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},"8c58":function(e,t,n){"use strict";n("0251")},ffb2:function(e,t,n){"use strict";n("4e82"),n("a4d3"),n("e01a");var r=n("7a23"),o={key:0,class:"px-3 py-2 rounded border border-gray-300 text-gray-500 bg-gray-200"},a={key:0,class:"flex space-x-1"},c=["onClick"],l=["onClick"],i=["innerHTML"];function u(e,t,n,u,s,d){var b=Object(r["resolveComponent"])("icon-edit"),p=Object(r["resolveComponent"])("icon-trash"),m=Object(r["resolveComponent"])("data-table"),f=Object(r["resolveComponent"])("log-entry-form"),j=Object(r["resolveComponent"])("modal-dialog"),O=Object(r["resolveComponent"])("activity-log-delete-confirmation");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[u.hasLogEntries?(Object(r["openBlock"])(),Object(r["createBlock"])(m,{key:1,fields:u.fields,data:n.logEntries,sort:u.sort,"onUpdate:sort":t[0]||(t[0]=function(e){return u.sort=e})},{"cell-id":Object(r["withCtx"])((function(t){var n=t.item;return[e.hasPermission("groups-manage")?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("button",{class:"btn btn-xs inline-block",onClick:function(e){return u.editLogEntry(n)}},[Object(r["createVNode"])(b,{width:"12"})],8,c),null===n.activity_type?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,onClick:function(e){return u.confirmDelete(n)},class:"btn btn-xs inline-block"},[Object(r["createVNode"])(p,{width:"12"})],8,l)):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0)]})),"cell-description":Object(r["withCtx"])((function(e){var t=e.item;return[Object(r["createElementVNode"])("div",{innerHTML:t.description,class:"links-blue"},null,8,i)]})),_:1},8,["fields","data","sort"])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o," No log entries to display ")),Object(r["createVNode"])(j,{modelValue:u.editingEntry,"onUpdate:modelValue":t[1]||(t[1]=function(e){return u.editingEntry=e}),title:"Edit log entry"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{"log-entry":u.selectedEntry,"api-url":n.apiUrl,onSaved:u.closeEntryForm,onCanceled:u.closeEntryForm},null,8,["log-entry","api-url","onSaved","onCanceled"])]})),_:1},8,["modelValue"]),Object(r["createVNode"])(j,{modelValue:u.showDeleteConfirmation,"onUpdate:modelValue":t[2]||(t[2]=function(e){return u.showDeleteConfirmation=e}),title:"Delete this log entry?"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{logEntry:u.selectedEntry,"api-url":n.apiUrl,onCanceled:u.closeDeleteConfirmation,onDeleted:u.closeDeleteConfirmation},null,8,["logEntry","api-url","onCanceled","onDeleted"])]})),_:1},8,["modelValue"])])}var s=Object(r["createElementVNode"])("hr",null,null,-1);function d(e,t,n,o,a,c){var l=Object(r["resolveComponent"])("input-row"),i=Object(r["resolveComponent"])("rich-text-editor"),u=Object(r["resolveComponent"])("button-row"),d=Object(r["resolveComponent"])("form-container");return Object(r["openBlock"])(),Object(r["createBlock"])(d,{class:"log-entry-form",ref:"form-container"},{default:Object(r["withCtx"])((function(){return[s,Object(r["createVNode"])(l,{label:"Log Date",modelValue:o.newEntry.log_date,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.newEntry.log_date=e}),errors:o.errors.log_date,type:"date",ref:"logdate"},null,8,["modelValue","errors"]),Object(r["createVNode"])(l,{label:"Entry",errors:o.errors.entry},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:o.newEntry.entry,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newEntry.entry=e})},null,8,["modelValue"])]})),_:1},8,["errors"]),Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("button",{class:"btn",onClick:t[2]||(t[2]=function(){return o.cancel&&o.cancel.apply(o,arguments)})},"Cancel"),Object(r["createElementVNode"])("button",{class:"btn blue",onClick:t[3]||(t[3]=function(){return o.save&&o.save.apply(o,arguments)})},"Save")]})),_:1})]})),_:1},512)}var b=n("1da1"),p=(n("96cf"),n("99af"),n("85fe")),m=n("831e"),f={name:"LogEntryForm",components:{RichTextEditor:p["default"]},props:{logEntry:{required:!1,default:function(){return{log_date:(new Date).toISOString(),step:null,entry:""}}},apiUrl:{required:!0,type:String}},emits:["saved"],setup:function(e,t){var n=Object(r["ref"])({log_date:(new Date).toISOString(),step:null,entry:""}),o=Object(r["ref"])({}),a=function(e){e&&e.created_at&&(n.value={id:e.id,log_date:new Date(Date.parse(e.created_at)).toISOString(),step:e.properties?e.properties.step:null,entry:e.description})},c=function(){n.value={log_date:(new Date).toISOString(),step:null,entry:""}},l=function(){var r=Object(b["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,!n.value.id){r.next=6;break}return r.next=4,Object(m["e"])("".concat(e.apiUrl,"/").concat(n.value.id),n.value);case 4:r.next=8;break;case 6:return r.next=8,Object(m["d"])(e.apiUrl,n.value);case 8:return r.next=10,Object(m["b"])(e.apiUrl);case 10:c(),t.emit("saved",n.value),r.next=19;break;case 14:if(r.prev=14,r.t0=r["catch"](0),!r.t0.response||422!=r.t0.response.status||!r.t0.response.data.errors){r.next=19;break}return o.value=r.t0.response.data.errors,r.abrupt("return");case 19:case"end":return r.stop()}}),r,null,[[0,14]])})));return function(){return r.apply(this,arguments)}}(),i=function(){c(),t.emit("canceled")};return Object(r["watch"])((function(){return e.logEntry}),(function(e){a(e)}),{immediate:!0}),{newEntry:n,errors:o,syncEntry:a,initNewEntry:c,save:l,cancel:i}},mounted:function(){}},j=n("6b0d"),O=n.n(j);const h=O()(f,[["render",d]]);var g=h,v=(n("b0c0"),Object(r["createElementVNode"])("p",null,"You are about to delete the following log entry:",-1)),y={class:"border-y py-2"},w=["innerHTML"],V={key:0,class:"ml-4 mt-2 mb-4 text-gray-700 text-sm"},C=Object(r["createElementVNode"])("div",null,"This can not be undone. Are you sure you want to continue?",-1),E={key:0,class:"bg-red-200 text-red-900 rounded p-2 my-2"};function N(e,t,n,o,a,c){var l=Object(r["resolveComponent"])("button-row");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[v,Object(r["createElementVNode"])("div",y,[Object(r["createElementVNode"])("blockquote",null,[Object(r["createElementVNode"])("div",{innerHTML:n.logEntry.description},null,8,w)]),n.logEntry.causer?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",V,"Logged by "+Object(r["toDisplayString"])(n.logEntry.causer.name)+", "+Object(r["toDisplayString"])(o.logDate),1)):Object(r["createCommentVNode"])("",!0)]),C,o.flattenedErrors.length>0?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",E,[Object(r["createElementVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.flattenedErrors,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t},Object(r["toDisplayString"])(e),1)})),128))])])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(l,{onCanceled:t[0]||(t[0]=function(t){return e.$emit("canceled")}),onSubmitted:o.deleteLogEntry,submitText:"Delete Log Entry"},null,8,["onSubmitted"])])}n("0481"),n("4069"),n("07ac");var x=n("e328"),k=n("033d"),D={name:"ConfirmDeleteLogEntry",props:{logEntry:{required:!0,type:Object},apiUrl:{required:!0,type:String}},emits:["deleted","canceled"],setup:function(e,t){var n=Object(r["ref"])({}),o=Object(r["computed"])((function(){return Object(x["b"])(e.logEntry.properties.log_date)})),a=Object(r["computed"])((function(){return Object.values(n.value).flat()})),c=function(){var r=Object(b["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(m["a"])(e.apiUrl,e.logEntry.id);case 3:return t.emit("deleted"),r.next=6,Object(m["b"])(e.apiUrl);case 6:r.next=14;break;case 8:if(r.prev=8,r.t0=r["catch"](0),!Object(k["a"])(r.t0)){r.next=13;break}return n.value=r.t0.response.data.errors,r.abrupt("return");case 13:n.value={a:r.t0.message};case 14:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();return{errors:n,logDate:o,flattenedErrors:a,deleteLogEntry:c}}};n("8c58");const _=O()(D,[["render",N]]);var M=_,S=[{name:"created_at",label:"Date & Time",sortName:"created_at",sortable:!0,resolveValue:function(e){var t=e.created_at;return t?Object(x["b"])(t):null},type:Date,colspan:2,class:"w-16"},{name:"created_at",label:"Time",sortName:"created_at",sortable:!1,resolveValue:function(e){var t=e.created_at;return t?Object(x["d"])(t):null},class:"w-28",type:Date},{name:"description",label:"Entry",sortable:!0,type:String},{name:"causer.name",label:"User",sortable:!0},{name:"id",label:"",sortable:!1}],B={components:{LogEntryForm:g,ActivityLogDeleteConfirmation:M},props:{logEntries:{required:!0,type:Array},apiUrl:{required:!0,type:String}},setup:function(e){var t=Object(r["ref"])({field:"created_at",desc:!0}),n=Object(r["ref"])({}),o=Object(r["ref"])(!1),a=Object(r["computed"])((function(){return e.logEntries.length>0})),c=function(e){o.value=!0,n.value=e},l=function(){o.value=!1,n.value={}},i=Object(r["ref"])(!1),u=function(e){n.value=e,i.value=!0},s=function(){i.value=!1,n.value={}};return{fields:Object(r["ref"])(S),sort:t,selectedEntry:n,editingEntry:o,hasLogEntries:a,editLogEntry:c,closeEntryForm:l,showDeleteConfirmation:i,confirmDelete:u,closeDeleteConfirmation:s}}};n("1340");const L=O()(B,[["render",u]]);t["a"]=L}}]);
//# sourceMappingURL=chunk-b60d9240.8d297427.js.map