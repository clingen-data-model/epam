(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["application-detail"],{"12ac":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n["createElementVNode"])("strong",null,"Warning!!",-1),a=Object(n["createTextVNode"])(" There are currently no contacts connected to this application! "),r={class:"flex space-x-2"},i=Object(n["createTextVNode"])("Add Next Action"),l=Object(n["createTextVNode"])("Add Log Entry"),d={class:"md:flex md:space-x-4"},s={class:"flex-1 space-y-2 md:border-l md:px-4 md:py-2"},u=Object(n["createElementVNode"])("h2",{class:"block-title"},"Advanced actions and controls",-1),p=Object(n["createTextVNode"])(" Delete Application and all associated information. ");function b(e,t,o,b,m,j){var O=Object(n["resolveComponent"])("static-alert"),f=Object(n["resolveComponent"])("router-link"),h=Object(n["resolveComponent"])("basic-info-data"),C=Object(n["resolveComponent"])("next-actions"),x=Object(n["resolveComponent"])("progress-chart"),g=Object(n["resolveComponent"])("step-tabs"),N=Object(n["resolveComponent"])("tab-item"),w=Object(n["resolveComponent"])("application-log"),V=Object(n["resolveComponent"])("tabs-container"),v=Object(n["resolveComponent"])("card"),k=Object(n["resolveComponent"])("router-view"),_=Object(n["resolveComponent"])("modal-dialog"),y=Object(n["resolveComponent"])("note");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[e.group.hasContacts?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,variant:"danger",class:"mb-4"},{default:Object(n["withCtx"])((function(){return[c,a]})),_:1})),e.group.uuid?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:1,class:"note",to:{name:"GroupDetail",params:{uuid:e.group.uuid}}},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.group.displayName),1)]})),_:1},8,["to"])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(v,null,{title:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("h2",null,Object(n["toDisplayString"])(j.application.full_name)+" - Current Step: "+Object(n["toDisplayString"])(j.application.current_step),1)]})),"header-right":Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(f,{to:{name:"NextAction"},class:"btn btn-sm"},{default:Object(n["withCtx"])((function(){return[i]})),_:1}),Object(n["createVNode"])(f,{to:{name:"LogEntry"},class:"btn btn-sm"},{default:Object(n["withCtx"])((function(){return[l]})),_:1})])]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(h),Object(n["createElementVNode"])("div",s,[j.application.next_actions?(Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:0,"next-actions":j.application.next_actions},null,8,["next-actions"])):Object(n["createCommentVNode"])("",!0)])]),Object(n["createVNode"])(x,{application:j.application,class:"py-4 border-t border-b border-gray-300 my-6"},null,8,["application"]),Object(n["createVNode"])(V,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{label:"Application"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{application:j.application,onUpdated:j.getGroup},null,8,["application","onUpdated"])]})),_:1}),Object(n["createVNode"])(N,{label:"Application Log"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{uuid:j.application.uuid},null,8,["uuid"])]})),_:1}),Object(n["createVNode"])(N,{label:"Advanced"},{default:Object(n["withCtx"])((function(){return[u,Object(n["createVNode"])(f,{to:{name:"ConfirmDeleteApplication"},class:"btn red"},{default:Object(n["withCtx"])((function(){return[p]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(_,{modelValue:m.showModal,"onUpdate:modelValue":t[0]||(t[0]=function(e){return m.showModal=e}),onClosed:j.handleModalClosed,title:e.$route.meta.title},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{ref:"modalView",onSaved:j.hideModal,onCanceled:j.hideModal},null,8,["onSaved","onCanceled"])]})),_:1},8,["modelValue","onClosed","title"])])),Object(n["createVNode"])(y,null,{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(j.application.id),1)]})),_:1})])}var m=o("1da1"),j=o("5530"),O=(o("96cf"),o("ac1f"),o("5319"),o("5502")),f=o("5832"),h=(o("b0c0"),{class:"text-sm"}),C={class:"flex justify-between"},x=Object(n["createElementVNode"])("h3",null,"Next Actions",-1),g=Object(n["createTextVNode"])(" Show completed "),N=["innerHTML"],w={class:"flex"},V={key:0},v={class:"flex space-x-1"},k={key:1,class:"well bg-gray-200 rounded border px-4 py-2 border-gray-300"},_=Object(n["createTextVNode"])(" There are no pending "),y={key:0},B=Object(n["createTextVNode"])(" next actions. ");function A(e,t,o,c,a,r){var i=Object(n["resolveComponent"])("edit-icon-button"),l=Object(n["resolveComponent"])("trash-icon-button"),d=Object(n["resolveComponent"])("icon-checkmark"),s=Object(n["resolveComponent"])("checkmark-button"),u=Object(n["resolveComponent"])("data-table"),p=Object(n["resolveComponent"])("complete-next-action-form"),b=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",h,[Object(n["createElementVNode"])("div",C,[x,Object(n["createElementVNode"])("label",null,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.showCompleted=e})},null,512),[[n["vModelCheckbox"],a.showCompleted]]),g])]),r.filteredNextActions.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,fields:a.fields,data:r.filteredNextActions,sort:a.tableSort,"onUpdate:sort":t[1]||(t[1]=function(e){return a.tableSort=e})},{"cell-entry":Object(n["withCtx"])((function(e){var t=e.item;return[Object(n["createElementVNode"])("div",{innerHTML:t.entry},null,8,N)]})),"cell-assigned_to":Object(n["withCtx"])((function(e){var t=e.item;return[Object(n["createElementVNode"])("div",w,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.assignee?t.assignee.name:"??")+"  ",1),t.assigned_to_name?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",V," - "+Object(n["toDisplayString"])(t.assigned_to_name),1)):Object(n["createCommentVNode"])("",!0)])]})),"cell-action":Object(n["withCtx"])((function(t){var o=t.item;return[Object(n["createElementVNode"])("div",v,[Object(n["createVNode"])(i,{onClick:function(t){return e.$router.push({name:"EditNextAction",params:{uuid:r.application.uuid,id:o.id}})}},null,8,["onClick"]),Object(n["createVNode"])(l,{onClick:function(e){return r.initiateDelete(o)}},null,8,["onClick"]),Boolean(o.date_completed)?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:0,width:"20",height:"20",class:Object(n["normalizeClass"])({"text-green-500":Boolean(o.date_completed),"text-gray-300":!Boolean(o.date_completed)})},null,8,["class"])):(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:1,onClick:Object(n["withModifiers"])((function(e){return r.startCompleting(o)}),["prevent"]),title:"Mark complete"},null,8,["onClick"]))])]})),_:1},8,["fields","data","sort"])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",k,[_,a.showCompleted?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",y,"or completed")):Object(n["createCommentVNode"])("",!0),B])),Object(n["createVNode"])(b,{modelValue:a.showCreateModal,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.showCreateModal=e}),title:"Complete next action"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{"next-action":a.selectedNextAction,onCanceled:t[2]||(t[2]=function(e){return a.showCreateModal=!1}),onCompleted:r.handleCompleted},null,8,["next-action","onCompleted"])]})),_:1},8,["modelValue"])])}o("4de4"),o("d3b7");var E=["innerHTML"];function D(e,t,o,c,a,r){var i=Object(n["resolveComponent"])("dictionary-row"),l=Object(n["resolveComponent"])("object-dictionary"),d=Object(n["resolveComponent"])("input-row"),s=Object(n["resolveComponent"])("button-row");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(i,{label:"Action"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",{innerHTML:o.nextAction.entry},null,8,E)]})),_:1}),Object(n["createVNode"])(l,{obj:o.nextAction,show:["date_created","step","target_date"],dates:["target_date","date_created"]},null,8,["obj"]),Object(n["createVNode"])(d,{label:"Date Completed",modelValue:a.dateCompleted,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.dateCompleted=e}),type:"date",errors:a.errors.date_completed},null,8,["modelValue","errors"]),Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("button",{class:"btn white",onClick:t[1]||(t[1]=function(){return r.cancel&&r.cancel.apply(r,arguments)})},"Cancel"),Object(n["createElementVNode"])("button",{class:"btn blue",onClick:t[2]||(t[2]=function(){return r.markComplete&&r.markComplete.apply(r,arguments)})},"Mark Complete")]})),_:1})])}var M=o("033d"),S={name:"ComponentName",props:{nextAction:{type:Object,required:!0}},data:function(){return{errors:[],dateCompleted:null}},computed:Object(j["a"])(Object(j["a"])({},Object(O["b"])({group:"groups/currentItemOrNew"})),{},{application:function(){return this.group.expert_panel}}),methods:{markComplete:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("applications/completeNextAction",{application:e.application,nextAction:e.nextAction,dateCompleted:e.dateCompleted});case 3:e.clearForm(),e.$emit("completed"),e.showModal=!1,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),Object(M["a"])(t.t0)&&(e.errors=t.t0.response.data.errors);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},clearForm:function(){this.dateCompleted=null},cancel:function(){this.clearForm(),this.$emit("canceled")}}},T=o("6b0d"),$=o.n(T);const I=$()(S,[["render",D]]);var F=I,L=o("ec0f"),U=o("5e32"),G={name:"NextActions",components:{CompleteNextActionForm:F,CheckmarkButton:L["default"],TrashIconButton:U["default"]},props:{nextActions:{type:Array,required:!0}},data:function(){return{tableSort:{field:"target_date",desc:!1},showCompleted:!1,showDeleteConfirmation:!1,selectedNextAction:{},errors:{},showCreateModal:!1,fields:[{name:"entry",label:"Next Action",type:String},{name:"assigned_to",label:"Assigned to",sortable:!0,resolveValue:function(e){var t=e.assigned_to;return e.assigned_to_name&&(t+="- ".concat(e.assigned_to_name)),t}},{name:"target_date",label:"Due Date",type:Date,sortable:!0},{name:"action",label:"",sortable:!1}]}},computed:Object(j["a"])(Object(j["a"])({},Object(O["b"])({group:"groups/currentItemOrNew"})),{},{application:function(){return this.group.expert_panel},filteredNextActions:function(){return this.nextActions?this.showCompleted?this.nextActions:this.nextActions.filter((function(e){return!e.date_completed})):[]}}),methods:{startCompleting:function(e){this.selectedNextAction=e,this.showCreateModal=!0},handleCompleted:function(){this.$emit("completed"),this.showCreateModal=!1},initiateDelete:function(e){this.$router.push({name:"ConfirmDeleteNextAction",params:{applicationUuid:this.application.uuid,id:e.id}})}}};const R=$()(G,[["render",A]]);var H=R,q=o("2242"),W=o("f8c8"),z=(o("a15b"),o("d81d"),{class:"flex justify-between border-b pb-2 min-w-fit"}),J=Object(n["createElementVNode"])("h3",null,"Base Information",-1),P=["href"],K={key:1};function Q(e,t,o,c,a,r){var i=Object(n["resolveComponent"])("dictionary-row"),l=Object(n["resolveComponent"])("group-form"),d=Object(n["resolveComponent"])("submission-wrapper"),s=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",z,[J,Object(n["createElementVNode"])("button",{class:"btn btn-xs",onClick:t[0]||(t[0]=function(e){return a.showInfoEdit=!0})},"Edit")]),Object(n["createVNode"])(i,{label:"Long Base Name"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.application.long_base_name),1)]})),_:1}),Object(n["createVNode"])(i,{label:"Short Base Name"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.application.short_base_name),1)]})),_:1}),Object(n["createVNode"])(i,{label:"Affiliation ID"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.application.affiliation_id),1)]})),_:1}),Object(n["createVNode"])(i,{label:"CDWG"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.group.parent?r.group.parent.name:null),1)]})),_:1}),Object(n["createVNode"])(i,{label:"Chair(s)"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.group.chairs.map((function(e){return e.person.name})).join(", ")),1)]})),_:1}),Object(n["createVNode"])(i,{label:"Coordinator(s)"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.group.coordinators.map((function(e){return e.person.name})).join(", ")),1)]})),_:1}),Object(n["createVNode"])(i,{label:"Website URL"},{default:Object(n["withCtx"])((function(){return[r.application.stepIsApproved(1)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:0,href:"https://clinicalgenome.org/affiliation/".concat(r.application.affiliation_id),target:"ep-website"}," https://clinicalgenome.org/affiliation/"+Object(n["toDisplayString"])(r.application.affiliation_id),9,P)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",K,"https://clinicalgenome.org/affiliation/"+Object(n["toDisplayString"])(r.application.affiliation_id),1))]})),_:1}),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(s,{modelValue:a.showInfoEdit,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.showInfoEdit=e}),onClosed:t[6]||(t[6]=function(e){return a.showInfoEdit=!1}),title:"Edit Group Info",size:"md"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{onSubmitted:t[3]||(t[3]=function(t){return e.$refs.infoForm.save()}),onCanceled:t[4]||(t[4]=function(t){return e.$refs.infoForm.cancel()})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{ref:"infoForm",onCanceled:t[1]||(t[1]=function(e){return a.showInfoEdit=!1}),onSaved:t[2]||(t[2]=function(e){return a.showInfoEdit=!1})},null,512)]})),_:1})]})),_:1},8,["modelValue"])]))])}var X=o("268c"),Y={name:"BasicInfoData",components:{GroupForm:X["a"]},data:function(){return{showInfoEdit:!1}},computed:{group:function(){return this.$store.getters["groups/currentItemOrNew"]},application:function(){return this.group.expert_panel}},methods:{}};const Z=$()(Y,[["render",Q]]);var ee=Z,te={name:"ApplicationDetail",components:{ApplicationLog:f["a"],NextActions:H,ProgressChart:q["a"],StepTabs:W["a"],BasicInfoData:ee},props:{uuid:{type:String,required:!0}},data:function(){return{showModal:!1}},watch:{$route:function(){this.showModal=!!this.$route.meta.showModal&&Boolean(this.$route.meta.showModal)}},computed:Object(j["a"])(Object(j["a"])({},Object(O["b"])({group:"groups/currentItemOrNew"})),{},{application:function(){return this.group.expert_panel},hasPendingNextAction:function(){return"undefined"!=typeof this.application&&this.application.latest_pending_next_action}}),methods:{hideModal:function(){this.$router.replace({name:"ApplicationDetail",params:{uuid:this.uuid}})},handleModalClosed:function(e){this.clearModalForm(e),this.$router.push({name:"ApplicationDetail",params:{uuid:this.uuid}})},clearModalForm:function(){"function"===typeof this.$refs.modalView.clearForm&&this.$refs.modalView.clearForm()},getGroup:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("groups/findAndSetCurrent",e.uuid);case 2:e.$store.dispatch("groups/getDocuments",e.group),e.$store.dispatch("groups/getNextActions",e.group),e.$store.dispatch("groups/getSubmissions",e.group);case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getGroup(),this.showModal=Boolean(this.$route.meta.showModal)}};const oe=$()(te,[["render",b]]);t["default"]=oe}}]);
//# sourceMappingURL=application-detail.7f2089d4.js.map