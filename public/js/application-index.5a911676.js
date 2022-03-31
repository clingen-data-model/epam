(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["application-index","create-application-form"],{"0049":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"home"},a={class:"mb-2 mt-4"},l={class:"tabs"},c=Object(r["createTextVNode"])("VCEPS"),i=Object(r["createTextVNode"])("GCEPS"),s={class:"p-4 border rounded-tr-lg rounded-b-lg bg-white"};function d(e,t,n,d,p,u){var b=Object(r["resolveComponent"])("router-link"),m=Object(r["resolveComponent"])("router-view"),f=Object(r["resolveComponent"])("create-application-form"),O=Object(r["resolveComponent"])("modal-dialog");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(e){return p.showModal=!0}),class:"btn blue"},"Initiate Application"),Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(b,{to:{name:"vceps"},class:"tab"},{default:Object(r["withCtx"])((function(){return[c]})),_:1}),Object(r["createVNode"])(b,{to:{name:"gceps"},class:"tab"},{default:Object(r["withCtx"])((function(){return[i]})),_:1})]),Object(r["createElementVNode"])("div",s,[Object(r["createVNode"])(m)])]),Object(r["createVNode"])(O,{modelValue:p.showModal,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.showModal=e}),size:"md",onClosed:t[3]||(t[3]=function(t){return e.$refs.initiateform.initForm()})},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{name:"modal",onCanceled:t[1]||(t[1]=function(e){return p.showModal=!1}),onSaved:u.handleApplicationInitiated,ref:"initiateform"},null,8,["onSaved"])]})),_:1},8,["modelValue"])])}var p=n("3f17"),u={name:"ApplicationsIndex",components:{CreateApplicationForm:p["default"]},data:function(){return{showModal:!1}},computed:{},methods:{handleApplicationInitiated:function(e){this.showModal=!1,this.$router.push({name:"AddMemberToApplication",params:{uuid:e.uuid}})}}},b=(n("bf6d"),n("6b0d")),m=n.n(b);const f=m()(u,[["render",d],["__scopeId","data-v-6e867e71"]]);t["default"]=f},"2b61":function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,a,l){var c=Object(r["resolveComponent"])("applications-table");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createVNode"])(c,{"ep-type-id":1})])}var a=n("eb82"),l={components:{ApplicationsTable:a["a"]},props:{},data:function(){return{}}},c=n("6b0d"),i=n.n(c);const s=i()(l,[["render",o]]);t["default"]=s},"3f17":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),o=Object(r["createElementVNode"])("h2",{class:"pb-2 border-b mb-4"},"Initiate Application",-1),a=Object(r["createElementVNode"])("option",{value:null},"Select...",-1),l=["value"],c=["for"],i=["value","id"];function s(e,t,n,s,d,p){var u=this,b=Object(r["resolveComponent"])("input-row"),m=Object(r["resolveComponent"])("checkbox"),f=Object(r["resolveComponent"])("button-row"),O=Object(r["resolveComponent"])("form-container");return Object(r["openBlock"])(),Object(r["createBlock"])(O,{onKeydown:Object(r["withKeys"])(p.save,["enter"])},{default:Object(r["withCtx"])((function(){return[o,Object(r["createVNode"])(b,{label:"Working Name",errors:d.errors.working_name,type:"text",modelValue:u.app.working_name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.app.working_name=e}),placeholder:"A recognizable name"},null,8,["errors","modelValue"]),Object(r["createVNode"])(b,{label:"CDWG",errors:d.errors.cdwg_id},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.app.cdwg_id=e})},[a,(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.cdwgs,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("option",{key:e.id,value:e.id},Object(r["toDisplayString"])(e.name),9,l)})),128))],512),[[r["vModelSelect"],d.app.cdwg_id]])]})),_:1},8,["errors"]),Object(r["createVNode"])(b,{label:"EP Type",errors:d.errors.expert_panel_type_id},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(d.epTypes,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("label",{for:"ep-".concat(e.id,"-radio"),key:e.id},[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"radio",value:e.id,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.app.expert_panel_type_id=e}),id:"ep-".concat(e.id,"-radio")},null,8,i),[[r["vModelRadio"],d.app.expert_panel_type_id]]),Object(r["createElementVNode"])("div",null,Object(r["toDisplayString"])(e.name),1)],8,c)})),128))])]})),_:1},8,["errors"]),Object(r["createVNode"])(b,{errors:d.errors.date_initiated},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(m,{modelValue:d.showInitiationDate,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.showInitiationDate=e}),id:"show-initiation-checkbox",label:"Backdate this initiation"},null,8,["modelValue"])]),Object(r["withDirectives"])(Object(r["createVNode"])(b,{type:"date",label:"Initiation Date",modelValue:d.app.date_initiated,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.app.date_initiated=e})},null,8,["modelValue"]),[[r["vShow"],d.showInitiationDate]])])]})),_:1},8,["errors"]),Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("button",{class:"btn",onClick:t[5]||(t[5]=function(){return p.cancel&&p.cancel.apply(p,arguments)})},"Cancel"),Object(r["createElementVNode"])("button",{class:"btn blue",onClick:t[6]||(t[6]=function(){return p.save&&p.save.apply(p,arguments)})},"Initiate Application")]})),_:1})]})),_:1},8,["onKeydown"])}var d=n("1da1"),p=n("5530"),u=(n("96cf"),n("b64b"),n("5502")),b=n("e328"),m={name:"CreateApplicationForm",props:{},emits:["canceled","saved"],data:function(){return{visible:!1,showInitiationDate:!1,app:{working_name:null,cdwg_id:null,expert_panel_type_id:null,date_initiated:Object(b["b"])(new Date)},epTypes:[{name:"GCEP",id:1},{name:"VCEP",id:2}],errors:{}}},computed:Object(p["a"])(Object(p["a"])({},Object(u["b"])({cdwgs:"cdwgs/all"})),{},{hasErrors:function(){return Object.keys(this.errors).length>0}}),watch:{"app.working_name":function(){this.clearErrors("working_name")},"app.cdwg_id":function(){this.clearErrors("cdwg_id")},"app.expert_panel_type_id":function(){this.clearErrors("expert_panel_type_id")}},methods:{cancel:function(){this.initForm(),this.$emit("canceled")},save:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("applications/initiateApplication",e.app);case 3:e.$emit("saved",e.app),t.next=12;break;case 6:if(t.prev=6,t.t0=t["catch"](0),!t.t0.response||422!=t.t0.response.status||!t.t0.response.data.errors){t.next=11;break}return e.errors=t.t0.response.data.errors,t.abrupt("return");case 11:throw t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,6]])})))()},initForm:function(){this.initErrors(),this.initAppData()},initAppData:function(){this.app={working_name:null,cdwg_id:null,expert_panel_type_id:null,date_initiated:Object(b["b"])(new Date)}},clearErrors:function(e){e?delete this.errors[e]:this.initErrors()},initErrors:function(){this.errors={}}}},f=n("6b0d"),O=n.n(f);const j=O()(m,[["render",s]]);t["default"]=j},5257:function(e,t,n){"use strict";var r=n("5530"),o=(n("caad"),n("2532"),n("b64b"),n("ac1f"),n("5319"),n("4de4"),n("d3b7"),n("6c02")),a=n("7a23");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(o["d"])(),n=Object(o["c"])();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});var l=Object(a["computed"])({immediate:!0,get:function(){return Object.keys(n.query).includes("sort-field")?{field:n.query["sort-field"],desc:Boolean(parseInt(n.query["sort-desc"]))}:e},set:function(e){var o={"sort-field":e.field,"sort-desc":e.desc?1:0},a=Object(r["a"])(Object(r["a"])({},n.query),o);t.replace({path:n.path,query:a})}}),c=Object(a["computed"])({set:function(e){var o=n.query,a=n.path,l=Object(r["a"])({},o);e?l=Object(r["a"])(Object(r["a"])({},o),{filter:e}):delete l.filter,t.replace({path:a,query:l})},get:function(){return n.query.filter},immediate:!0});return{sort:l,filter:c}}},bf6d:function(e,t,n){"use strict";n("f274")},d659:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,a,l){var c=Object(r["resolveComponent"])("applications-table");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createVNode"])(c,{"ep-type-id":2})])}var a=n("eb82"),l={components:{ApplicationsTable:a["a"]}},c=n("6b0d"),i=n.n(c);const s=i()(l,[["render",o]]);t["default"]=s},eb82:function(e,t,n){"use strict";n("4de4"),n("d3b7"),n("b0c0"),n("4e82"),n("a4d3"),n("e01a");var r=n("7a23"),o={class:"sm:flex justify-between"},a={class:"mb-1 sm:flex space-x-2"},l={class:"block"},c=Object(r["createTextVNode"])(" Filter: "),i={class:"block"},s=Object(r["createTextVNode"])(" Waiting on: "),d=Object(r["createElementVNode"])("option",{value:null},"Any",-1),p=["value"],u=["href"],b=["innerHTML"],m={class:"list-disc pl-6 text-sm"},f=["innerHTML"];function O(e,t,n,O,j,h){var v=Object(r["resolveComponent"])("checkbox"),w=Object(r["resolveComponent"])("popper"),g=Object(r["resolveComponent"])("data-table");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("label",l,[c,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"sm","onUpdate:modelValue":t[0]||(t[0]=function(e){return O.filter=e}),placeholder:"filter"},null,512),[[r["vModelText"],O.filter]])]),Object(r["createElementVNode"])("label",i,[s,Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.waitingOn=e}),class:"sm"},[d,(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(h.assignees,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("option",{key:e.id,value:e.id},Object(r["toDisplayString"])(e.name),9,p)})),128))],512),[[r["vModelSelect"],j.waitingOn]])]),Object(r["createVNode"])(v,{modelValue:h.showCompleted,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.showCompleted=e}),label:"Show completed"},null,8,["modelValue"])]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("button",{class:Object(r["normalizeClass"])(["btn btn-xs",{blue:0==h.showAllInfo}]),onClick:t[3]||(t[3]=function(e){return h.showAllInfo=0})},"Summary",2),Object(r["createElementVNode"])("button",{class:Object(r["normalizeClass"])(["btn btn-xs",{blue:1==h.showAllInfo}]),onClick:t[4]||(t[4]=function(e){return h.showAllInfo=1})},"All Info",2)])]),Object(r["createVNode"])(g,{data:h.filteredData,fields:h.selectedFields,"filter-term":O.filter,"row-click-handler":h.goToApplication,"row-class":"cursor-pointer",sort:O.sort,"onUpdate:sort":t[5]||(t[5]=function(e){return O.sort=e}),style:Object(r["normalizeStyle"])(h.remainingHeight),class:"overflow-auto",ref:"table"},{"cell-contacts":Object(r["withCtx"])((function(e){var t=e.item;return[Object(r["createElementVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(t.group.members,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.id},[Object(r["createElementVNode"])("small",null,[Object(r["createElementVNode"])("a",{href:"mailto:".concat(e.person.email),class:"text-blue-500"},Object(r["toDisplayString"])(e.person.name),9,u)])])})),128))])]})),"cell-latest_log_entry":Object(r["withCtx"])((function(t){var n=t.item;return[Object(r["createVNode"])(w,{hover:"",arrow:"",placement:"right"},{content:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",{innerHTML:n.group.latest_log_entry.description},null,8,b)]})),default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.formatDate(n.group.latest_log_entry.created_at)),1)]})),_:2},1024)]})),"cell-next_actions":Object(r["withCtx"])((function(e){var t=e.item;return[Object(r["createVNode"])(w,{hover:"",arrow:"",placement:"left"},{content:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(h.assignees.filter((function(e){return t.pendingActionsByAssignee[e.id].length>0})),(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e.id,class:"whitespace-normal max-w-80"},[Object(r["createElementVNode"])("h4",null,Object(r["toDisplayString"])(e.short_name)+":",1),Object(r["createElementVNode"])("ul",m,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(t.pendingActionsByAssignee[e.id],(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.id,innerHTML:e.entry,class:"w-76 whitespace-normal"},null,8,f)})),128))])])})),128))]})),default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(h.assignees.filter((function(e){return t.pendingActionsByAssignee[e.id].length>0})),(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e.id},[Object(r["createElementVNode"])("span",null,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.short_name)+": ",1),Object(r["createElementVNode"])("strong",null,Object(r["toDisplayString"])(t.pendingActionsByAssignee[e.id].length),1)])])})),128))]})),_:2},1024)]})),_:1},8,["data","fields","filter-term","row-click-handler","sort","style"])])}var j=n("2909"),h=n("5530"),v=(n("a9e3"),n("ac1f"),n("5319"),n("caad"),n("2532"),n("99af"),n("b64b"),n("07ac"),n("5502")),w=n("e328"),g=n("5257"),_=n("4a91"),y={components:{},props:{epTypeId:{type:Number,default:null}},data:function(){return{fields:[{name:"id",label:"ID",type:Number,sortable:!0},{name:"full_name",label:"Name",type:String,sortable:!0},{name:"group.parent.name",label:"CDWG",type:String,sortable:!0,resolveValue:function(e){return e.group&&e.group.parent?e.group.parent.name:""}},{name:"current_step",label:"Current Step",type:Number,sortable:!0,resolveValue:function(e){return e.isCompleted?"Completed":e.current_step},resolveSort:function(e){return e.isCompleted?5:e.current_step}},{name:"latest_log_entry",label:"Last Activity",type:Date,sortable:!0,resolveSortValue:function(e){return e&&e.group&&e.group.latest_log_entry?Object(w["b"])(e.group.latest_log_entry.created_at):null}},{name:"next_actions",label:"Next Actions",type:String,sortable:!1,class:["min-w-28","max-w-xs","truncate"]}],allInfoFields:[{name:"contacts",label:"Contacts",type:Array,sortable:!1,class:["min-w-40"],step:1},{name:"step_1_received_date",label:2==this.epTypeId?"Step 1 Received":"Application Received",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"step_1_approval_date",label:2==this.epTypeId?"Step 1 Approved":"Application Approved",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"step_2_approval_date",label:"Step 2 Approved",type:Date,sortable:!0,class:["min-w-28"],step:2},{name:"step_3_approval_date",label:"Step 3 Approved",type:Date,sortable:!0,class:["min-w-28"],step:3},{name:"step_4_received_date",label:"Step 4 Received",type:Date,sortable:!0,class:["min-w-28"],step:4},{name:"step_4_approval_date",label:"Step 4 Approved",type:Date,sortable:!0,class:["min-w-28"],step:4}],waitingOn:null,showDeleted:!1}},computed:Object(h["a"])(Object(h["a"])({},Object(v["b"])({applications:"applications/all"})),{},{filteredData:function(){var e=this,t=this.applications.filter((function(t){return!e.epTypeId||t.expert_panel_type_id==e.epTypeId})).filter((function(t){return!!e.showCompleted||null==t.date_completed}));return this.waitingOn&&(t=t.filter((function(t){return t.pendingActionsByAssignee[e.waitingOn].length>0}))),this.showDeleted||(t=t.filter((function(e){return null===e.deleted_at}))),t},showCompleted:{set:function(e){var t=this.$route.query,n=this.$route.path,r=Object(h["a"])({},t);e?r=Object(h["a"])(Object(h["a"])({},t),{"show-completed":1}):delete r["show-completed"],this.$router.replace({path:n,query:r})},get:function(){return Boolean(parseInt(this.$route.query["show-completed"]))},immediate:!0},selectedFields:function(){if(1==this.showAllInfo){var e=2==this.epTypeId?[1,2,3,4]:[1],t=this.allInfoFields.filter((function(t){return e.includes(t.step)}));return[].concat(Object(j["a"])(this.fields),Object(j["a"])(t))}return this.fields},showAllInfo:{immediate:!0,get:function(){return Object.keys(this.$route.query).includes("showAllInfo")?this.$route.query.showAllInfo:0},set:function(e){var t=Object(h["a"])({},this.$route.query);t.showAllInfo=e,this.$router.replace({path:this.$route.path,query:t})}},remainingHeight:function(){return{height:"calc(100vh - 220px)"}},assignees:function(){return Object.values(_.nextActions.assignees)}}),methods:{getApplications:function(){var e={},t={expert_panel_type_id:this.epTypeId};Object.keys(t).length>0&&(e.where=t),this.showDeleted&&(e.showDeleted=1),this.$store.dispatch("applications/getApplications",e)},goToApplication:function(e){e.deleted_at?alert("The application for "+e.name+" has been deleted.  Details cannot be viewed."):this.$router.push({name:"ApplicationDetail",params:{uuid:e.group.uuid}})}},mounted:function(){this.getApplications()},setup:function(){var e=Object(g["a"])({field:"full_name",desc:!1}),t=e.sort,n=e.filter;return{sort:t,filter:n}}},V=n("6b0d"),k=n.n(V);const E=k()(y,[["render",O]]);t["a"]=E},f274:function(e,t,n){}}]);
//# sourceMappingURL=application-index.5a911676.js.map