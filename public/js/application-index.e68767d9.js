(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["application-index","create-application-form"],{"0049":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"home"},o={class:"mb-2 mt-4"},l={class:"tabs"},c=Object(a["createTextVNode"])("VCEPS"),i=Object(a["createTextVNode"])("GCEPS"),s={class:"p-4 border rounded-tr-lg rounded-b-lg bg-white"};function d(e,t,n,d,p,u){var b=Object(a["resolveComponent"])("router-link"),m=Object(a["resolveComponent"])("router-view"),f=Object(a["resolveComponent"])("create-application-form"),O=Object(a["resolveComponent"])("modal-dialog");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(e){return p.showModal=!0}),class:"btn blue"},"Initiate Application"),Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(b,{to:{name:"vceps"},class:"tab"},{default:Object(a["withCtx"])((function(){return[c]})),_:1}),Object(a["createVNode"])(b,{to:{name:"gceps"},class:"tab"},{default:Object(a["withCtx"])((function(){return[i]})),_:1})]),Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(m)])]),Object(a["createVNode"])(O,{modelValue:p.showModal,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.showModal=e}),size:"md",onClosed:t[3]||(t[3]=function(t){return e.$refs.initiateform.initForm()})},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(f,{name:"modal",onCanceled:t[1]||(t[1]=function(e){return p.showModal=!1}),onSaved:u.handleApplicationInitiated,ref:"initiateform"},null,8,["onSaved"])]})),_:1},8,["modelValue"])])}var p=n("3f17"),u={name:"ApplicationsIndex",components:{CreateApplicationForm:p["default"]},data:function(){return{showModal:!1}},computed:{},methods:{handleApplicationInitiated:function(e){this.showModal=!1,this.$router.push({name:"AddMemberToApplication",params:{uuid:e.uuid}})}}};n("bf6d");u.render=d,u.__scopeId="data-v-6e867e71";t["default"]=u},"2b61":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function r(e,t,n,r,o,l){var c=Object(a["resolveComponent"])("applications-table");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(c,{"ep-type-id":1})])}var o=n("eb82"),l={components:{ApplicationsTable:o["a"]},props:{},data:function(){return{}}};l.render=r;t["default"]=l},"3f17":function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),r=Object(a["createElementVNode"])("h2",{class:"pb-2 border-b mb-4"},"Initiate Application",-1),o=Object(a["createElementVNode"])("option",{value:null},"Select...",-1),l=["value"],c=["for"],i=["value","id"];function s(e,t,n,s,d,p){var u=this,b=Object(a["resolveComponent"])("input-row"),m=Object(a["resolveComponent"])("checkbox"),f=Object(a["resolveComponent"])("button-row"),O=Object(a["resolveComponent"])("form-container");return Object(a["openBlock"])(),Object(a["createBlock"])(O,{onKeydown:Object(a["withKeys"])(p.save,["enter"])},{default:Object(a["withCtx"])((function(){return[r,Object(a["createVNode"])(b,{label:"Working Name",errors:d.errors.working_name,type:"text",modelValue:u.app.working_name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.app.working_name=e}),placeholder:"A recognizable name"},null,8,["errors","modelValue"]),Object(a["createVNode"])(b,{label:"CDWG",errors:d.errors.cdwg_id},{default:Object(a["withCtx"])((function(){return[Object(a["withDirectives"])(Object(a["createElementVNode"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.app.cdwg_id=e})},[o,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.cdwgs,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("option",{key:e.id,value:e.id},Object(a["toDisplayString"])(e.name),9,l)})),128))],512),[[a["vModelSelect"],d.app.cdwg_id]])]})),_:1},8,["errors"]),Object(a["createVNode"])(b,{label:"EP Type",errors:d.errors.expert_panel_type_id},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(d.epTypes,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("label",{for:"ep-".concat(e.id,"-radio"),key:e.id},[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"radio",value:e.id,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.app.expert_panel_type_id=e}),id:"ep-".concat(e.id,"-radio")},null,8,i),[[a["vModelRadio"],d.app.expert_panel_type_id]]),Object(a["createElementVNode"])("div",null,Object(a["toDisplayString"])(e.name),1)],8,c)})),128))])]})),_:1},8,["errors"]),Object(a["createVNode"])(b,{errors:d.errors.date_initiated},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(m,{modelValue:d.showInitiationDate,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.showInitiationDate=e}),id:"show-initiation-checkbox",label:"Backdate this initiation"},null,8,["modelValue"])]),Object(a["withDirectives"])(Object(a["createVNode"])(b,{type:"date",label:"Initiation Date",modelValue:d.app.date_initiated,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.app.date_initiated=e})},null,8,["modelValue"]),[[a["vShow"],d.showInitiationDate]])])]})),_:1},8,["errors"]),Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("button",{class:"btn",onClick:t[5]||(t[5]=function(){return p.cancel&&p.cancel.apply(p,arguments)})},"Cancel"),Object(a["createElementVNode"])("button",{class:"btn blue",onClick:t[6]||(t[6]=function(){return p.save&&p.save.apply(p,arguments)})},"Initiate Application")]})),_:1})]})),_:1},8,["onKeydown"])}var d=n("1da1"),p=n("5530"),u=(n("96cf"),n("b64b"),n("5502")),b=n("e328"),m={name:"CreateApplicationForm",props:{},emits:["canceled","saved"],data:function(){return{visible:!1,showInitiationDate:!1,app:{working_name:null,cdwg_id:null,expert_panel_type_id:null,date_initiated:Object(b["a"])(new Date)},epTypes:[{name:"GCEP",id:1},{name:"VCEP",id:2}],errors:{}}},computed:Object(p["a"])(Object(p["a"])({},Object(u["b"])({cdwgs:"cdwgs/all"})),{},{hasErrors:function(){return Object.keys(this.errors).length>0}}),watch:{"app.working_name":function(){this.clearErrors("working_name")},"app.cdwg_id":function(){this.clearErrors("cdwg_id")},"app.expert_panel_type_id":function(){this.clearErrors("expert_panel_type_id")}},methods:{cancel:function(){this.initForm(),this.$emit("canceled")},save:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("applications/initiateApplication",e.app);case 3:e.$emit("saved",e.app),t.next=12;break;case 6:if(t.prev=6,t.t0=t["catch"](0),!t.t0.response||422!=t.t0.response.status||!t.t0.response.data.errors){t.next=11;break}return e.errors=t.t0.response.data.errors,t.abrupt("return");case 11:throw t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,6]])})))()},initForm:function(){this.initErrors(),this.initAppData()},initAppData:function(){this.app={working_name:null,cdwg_id:null,expert_panel_type_id:null,date_initiated:Object(b["a"])(new Date)}},clearErrors:function(e){e?delete this.errors[e]:this.initErrors()},initErrors:function(){this.errors={}}}};m.render=s;t["default"]=m},5257:function(e,t,n){"use strict";var a=n("5530"),r=(n("caad"),n("2532"),n("b64b"),n("ac1f"),n("5319"),n("4de4"),n("6c02")),o=n("7a23");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(r["d"])(),n=Object(r["c"])();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});var l=Object(o["computed"])({immediate:!0,get:function(){return Object.keys(n.query).includes("sort-field")?{field:n.query["sort-field"],desc:Boolean(parseInt(n.query["sort-desc"]))}:e},set:function(e){var r={"sort-field":e.field,"sort-desc":e.desc?1:0},o=Object(a["a"])(Object(a["a"])({},n.query),r);t.replace({path:n.path,query:o})}}),c=Object(o["computed"])({set:function(e){var r=n.query,o=n.path,l=Object(a["a"])({},r);e?l=Object(a["a"])(Object(a["a"])({},r),{filter:e}):delete l.filter,t.replace({path:o,query:l})},get:function(){return n.query.filter},immediate:!0});return{sort:l,filter:c}}},bf6d:function(e,t,n){"use strict";n("f274")},d659:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function r(e,t,n,r,o,l){var c=Object(a["resolveComponent"])("applications-table");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(c,{"ep-type-id":2})])}var o=n("eb82"),l={components:{ApplicationsTable:o["a"]}};l.render=r;t["default"]=l},eb82:function(e,t,n){"use strict";n("4de4"),n("b0c0"),n("4e82");var a=n("7a23"),r={class:"sm:flex justify-between"},o={class:"mb-1 sm:flex space-x-2"},l={class:"block"},c=Object(a["createTextVNode"])(" Filter: "),i={class:"block"},s=Object(a["createTextVNode"])(" Waiting on: "),d=Object(a["createElementVNode"])("option",{value:null},"Any",-1),p=["value"],u=["href"],b=["innerHTML"];function m(e,t,n,m,f,O){var j=Object(a["resolveComponent"])("checkbox"),h=Object(a["resolveComponent"])("data-table");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("label",l,[c,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",class:"sm","onUpdate:modelValue":t[0]||(t[0]=function(e){return m.filter=e}),placeholder:"filter"},null,512),[[a["vModelText"],m.filter]])]),Object(a["createElementVNode"])("label",i,[s,Object(a["withDirectives"])(Object(a["createElementVNode"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.waitingOn=e}),class:"sm"},[d,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(O.assignees,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("option",{key:e.id,value:e.id},Object(a["toDisplayString"])(e.name),9,p)})),128))],512),[[a["vModelSelect"],f.waitingOn]])]),Object(a["createVNode"])(j,{modelValue:O.showCompleted,"onUpdate:modelValue":t[2]||(t[2]=function(e){return O.showCompleted=e}),label:"Show completed"},null,8,["modelValue"])]),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["btn btn-xs",{blue:0==O.showAllInfo}]),onClick:t[3]||(t[3]=function(e){return O.showAllInfo=0})},"Summary",2),Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["btn btn-xs",{blue:1==O.showAllInfo}]),onClick:t[4]||(t[4]=function(e){return O.showAllInfo=1})},"All Info",2)])]),Object(a["createVNode"])(h,{data:O.filteredData,fields:O.selectedFields,"filter-term":m.filter,"row-click-handler":O.goToApplication,"row-class":"cursor-pointer",sort:m.sort,"onUpdate:sort":t[5]||(t[5]=function(e){return m.sort=e}),style:Object(a["normalizeStyle"])(O.remainingHeight),class:"overflow-auto",ref:"table"},{"cell-contacts":Object(a["withCtx"])((function(e){var t=e.item;return[Object(a["createElementVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(t.contacts,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:e.id},[Object(a["createElementVNode"])("small",null,[Object(a["createElementVNode"])("a",{href:"mailto:".concat(e.email),class:"text-blue-500"},Object(a["toDisplayString"])(e.name),9,u)])])})),128))])]})),"cell-latest_log_entry_description":Object(a["withCtx"])((function(e){var t=e.value;return[Object(a["createElementVNode"])("div",{innerHTML:t},null,8,b)]})),"cell-next_actions":Object(a["withCtx"])((function(e){var t=e.item;return[Object(a["createElementVNode"])("div",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(O.assignees.filter((function(e){return t.pendingActionsByAssignee[e.id].length>0})),(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:e.id},[Object(a["createElementVNode"])("span",null,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.short_name)+": ",1),Object(a["createElementVNode"])("strong",null,Object(a["toDisplayString"])(t.pendingActionsByAssignee[e.id].length),1)])])})),128))])]})),_:1},8,["data","fields","filter-term","row-click-handler","sort","style"])])}var f=n("2909"),O=n("5530"),j=(n("a9e3"),n("ac1f"),n("5319"),n("caad"),n("2532"),n("99af"),n("b64b"),n("07ac"),n("5502")),h=n("e328"),v=n("5257"),w=n("4a91"),_={components:{},props:{epTypeId:{type:Number,default:null}},data:function(){return{fields:[{name:"id",label:"ID",type:Number,sortable:!0},{name:"full_name",label:"Name",type:String,sortable:!0},{name:"group.parent.name",label:"CDWG",type:String,sortable:!0,resolveValue:function(e){return e.group&&e.group.parent?e.group.parent.name:""}},{name:"current_step",label:"Current Step",type:Number,sortable:!0,resolveValue:function(e){return e.isCompleted?"Completed":e.current_step},resolveSort:function(e){return e.isCompleted?5:e.current_step}},{name:"latest_log_entry.created_at",label:"Last Activity",type:String,sortable:!0,resolveValue:function(e){return e&&e.latest_log_entry?Object(h["a"])(e.latest_log_entry.created_at):null},colspan:2,headerClass:["max-w-sm"],class:["min-w-28"]},{name:"latest_log_entry.description",label:"Last Activity",type:String,hideHeader:!0,class:["max-w-48","truncate"]},{name:"next_actions",label:"Next Actions",type:String,sortable:!1,class:["min-w-28","max-w-xs","truncate"]}],allInfoFields:[{name:"contacts",label:"Contacts",type:Array,sortable:!1,class:["min-w-40"],step:1},{name:"step_1_received_date",label:2==this.epTypeId?"Step 1 Received":"Application Received",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"step_1_approval_date",label:2==this.epTypeId?"Step 1 Approved":"Application Approved",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"step_2_approval_date",label:"Step 2 Approved",type:Date,sortable:!0,class:["min-w-28"],step:2},{name:"step_3_approval_date",label:"Step 3 Approved",type:Date,sortable:!0,class:["min-w-28"],step:3},{name:"step_4_received_date",label:"Step 4 Received",type:Date,sortable:!0,class:["min-w-28"],step:4},{name:"step_4_approval_date",label:"Step 4 Approved",type:Date,sortable:!0,class:["min-w-28"],step:4}],waitingOn:null,showDeleted:!1}},computed:Object(O["a"])(Object(O["a"])({},Object(j["b"])({applications:"applications/all"})),{},{filteredData:function(){var e=this,t=this.applications.filter((function(t){return!e.epTypeId||t.expert_panel_type_id==e.epTypeId})).filter((function(t){return!!e.showCompleted||null==t.date_completed}));return this.waitingOn&&(t=t.filter((function(t){return t.pendingActionsByAssignee[e.waitingOn].length>0}))),this.showDeleted||(t=t.filter((function(e){return null===e.deleted_at}))),t},showCompleted:{set:function(e){var t=this.$route.query,n=this.$route.path,a=Object(O["a"])({},t);e?a=Object(O["a"])(Object(O["a"])({},t),{"show-completed":1}):delete a["show-completed"],this.$router.replace({path:n,query:a})},get:function(){return Boolean(parseInt(this.$route.query["show-completed"]))},immediate:!0},selectedFields:function(){if(1==this.showAllInfo){var e=2==this.epTypeId?[1,2,3,4]:[1],t=this.allInfoFields.filter((function(t){return e.includes(t.step)}));return[].concat(Object(f["a"])(this.fields),Object(f["a"])(t))}return this.fields},showAllInfo:{immediate:!0,get:function(){return Object.keys(this.$route.query).includes("showAllInfo")?this.$route.query.showAllInfo:0},set:function(e){var t=Object(O["a"])({},this.$route.query);t.showAllInfo=e,this.$router.replace({path:this.$route.path,query:t})}},remainingHeight:function(){return{height:"calc(100vh - 220px)"}},assignees:function(){return Object.values(w.nextActions.assignees)}}),methods:{getApplications:function(){var e={with:["latestLogEntry","nextActions","type","contacts"]},t={};Object.keys(t).length>0&&(e.where=t),this.showDeleted&&(e.showDeleted=1),this.$store.dispatch("applications/getApplications",e)},goToApplication:function(e){e.deleted_at?alert("The application for "+e.name+" has been deleted.  Details cannot be viewed."):this.$router.push({name:"ApplicationDetail",params:{uuid:e.uuid}})}},mounted:function(){this.getApplications()},setup:function(){var e=Object(v["a"])({field:"full_name",desc:!1}),t=e.sort,n=e.filter;return{sort:t,filter:n}}};_.render=m;t["a"]=_},f274:function(e,t,n){}}]);
//# sourceMappingURL=application-index.e68767d9.js.map