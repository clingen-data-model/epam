(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-list"],{"268c":function(e,t,r){"use strict";r("b0c0");var n=r("7a23"),a={key:0},o={key:0},u=Object(n["createTextVNode"])(" Affiliation ID "),i=Object(n["createTextVNode"])("admin-only"),s={key:0},c={key:1,class:"text-gray-400"},l={key:1},p={key:2},d=Object(n["createTextVNode"])(" Status: "),m=Object(n["createTextVNode"])("admin-only"),b=Object(n["createTextVNode"])(" Parent group: "),f=Object(n["createTextVNode"])("admin-only");function g(e,t,r,g,h,O){var j=Object(n["resolveComponent"])("input-row"),_=Object(n["resolveComponent"])("dictionary-row"),v=Object(n["resolveComponent"])("note");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[O.canSetType?(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:0,modelValue:O.group.group_type_id,"onUpdate:modelValue":t[0]||(t[0]=function(e){return O.group.group_type_id=e}),errors:g.errors.group_type_id,type:"select",options:O.typeOptions,label:"Type"},null,8,["modelValue","errors","options"])):(Object(n["openBlock"])(),Object(n["createBlock"])(_,{key:1,label:"Type"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(O.typeDisplayName),1)]})),_:1})),Object(n["createVNode"])(n["Transition"],{name:"slide-fade-down",mode:"out-in"},{default:Object(n["withCtx"])((function(){return[O.group.group_type_id>2&&O.group.expert_panel?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createVNode"])(j,{label:"Long Base Name",modelValue:O.group.expert_panel.long_base_name,"onUpdate:modelValue":[t[1]||(t[1]=function(e){return O.group.expert_panel.long_base_name=e}),O.emitUpdate],placeholder:"Long base name",errors:g.errors.long_base_name,"input-class":"w-full"},null,8,["modelValue","onUpdate:modelValue","errors"]),Object(n["createVNode"])(j,{label:"Short Base Name",modelValue:O.group.expert_panel.short_base_name,"onUpdate:modelValue":[t[2]||(t[2]=function(e){return O.group.expert_panel.short_base_name=e}),O.emitUpdate],placeholder:"Short base name",errors:g.errors.short_base_name,"input-class":"w-full"},null,8,["modelValue","onUpdate:modelValue","errors"]),e.hasAnyPermission(["groups-manage"])?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(j,{label:"Affiliation ID",modelValue:O.group.expert_panel.affiliation_id,"onUpdate:modelValue":[t[3]||(t[3]=function(e){return O.group.expert_panel.affiliation_id=e}),O.emitUpdate],placeholder:O.affiliationIdPlaceholder,errors:g.errors.affiliation_id,"input-class":"w-full"},{label:Object(n["withCtx"])((function(){return[u,Object(n["createVNode"])(v,null,{default:Object(n["withCtx"])((function(){return[i]})),_:1})]})),_:1},8,["modelValue","placeholder","errors","onUpdate:modelValue"])])):(Object(n["openBlock"])(),Object(n["createBlock"])(_,{key:1,label:"Affiliation ID"},{default:Object(n["withCtx"])((function(){return[O.group.expert_panel.affiliation_id?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",s,Object(n["toDisplayString"])(O.group.expert_panel.affiliation_id),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",c,Object(n["toDisplayString"])("Not yet assigend")))]})),_:1}))])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createVNode"])(j,{modelValue:O.group.name,"onUpdate:modelValue":[t[4]||(t[4]=function(e){return O.group.name=e}),O.emitUpdate],placeholder:"Name",label:"Name","input-class":"w-full",errors:g.errors.name},null,8,["modelValue","errors","onUpdate:modelValue"])]))]})),_:1}),e.hasPermission("groups-manage")?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p,[Object(n["createVNode"])(j,{modelValue:O.group.group_status_id,"onUpdate:modelValue":[t[5]||(t[5]=function(e){return O.group.group_status_id=e}),O.emitUpdate],type:"select",options:O.statusOptions,errors:g.errors.group_status_id},{label:Object(n["withCtx"])((function(){return[d,Object(n["createVNode"])(v,null,{default:Object(n["withCtx"])((function(){return[m]})),_:1})]})),_:1},8,["modelValue","options","errors","onUpdate:modelValue"]),Object(n["createVNode"])(j,{modelValue:O.group.parent_id,"onUpdate:modelValue":[t[6]||(t[6]=function(e){return O.group.parent_id=e}),O.emitUpdate],type:"select",options:O.parentOptions,errors:g.errors.parent_id},{label:Object(n["withCtx"])((function(){return[b,Object(n["createVNode"])(v,null,{default:Object(n["withCtx"])((function(){return[f]})),_:1})]})),_:1},8,["modelValue","options","errors","onUpdate:modelValue"])])):Object(n["createCommentVNode"])("",!0)])}var h=r("1da1"),O=(r("96cf"),r("d81d"),r("07ac"),r("d3b7"),r("159b"),r("4de4"),r("3ca3"),r("ddb0"),r("2ef0")),j=r("db04"),_=r("ae23"),v=r("4a91"),y=r("a75a"),x={name:"GroupForm",emits:["canceled","saved","update"],data:function(){return{groupTypes:[{id:1,fullname:"Working Group"},{id:2,fullname:"Clinical Domain Working Group"},{id:3,fullname:"GCEP"},{id:4,fullname:"VCEP"}],groupStatuses:v.groups.statuses,newGroup:new _["a"],parents:[]}},computed:{group:{get:function(){var e=this.$store.getters["groups/currentItem"];return e||this.newGroup},set:function(e){try{this.$store.commit("groups/addItem",e)}catch(t){this.newGroup=e}}},statusOptions:function(){var e=this;return Object.values(this.groupStatuses).map((function(t){return{value:t.id,label:e.titleCase(t.name)}}))},typeOptions:function(){return this.groupTypes.map((function(e){return{value:e.id,label:e.fullname}}))},canSetType:function(){return this.hasPermission("groups-manage")&&!this.group.id},typeDisplayName:function(){return this.group.type?this.group.type.name?this.group.type.id<3?this.group.type.name.toUpperCase():this.group.expert_panel.type.name.toUpperCase():null:"🐇🥚"},affiliationIdPlaceholder:function(){return 5e4},cdwgs:function(){return this.$store.getters["cdwgs/all"]},namesDirty:function(){return this.group.expert_panel.isDirty("long_base_name")||this.group.expert_panel.isDirty("short_base_name")},affiliationIdDirty:function(){return console.log({new:this.group.expert_panel.attributes.affiliation_id,original:this.group.expert_panel.original.affiliation_id}),this.group.expert_panel.isDirty("affiliation_id")},parentOptions:function(){var e=[{value:0,label:"None"}];return this.parents.filter((function(e){return e.type.can_be_parent})).forEach((function(t){e.push({value:t.id,label:t.displayName})})),Object(O["sortBy"])(e,"label")}},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.resetErrors(),t.prev=1,!e.group.id){t.next=7;break}return t.next=5,e.updateGroup();case 5:return e.$emit("saved"),t.abrupt("return");case 7:return t.next=9,e.createGroup().then((function(e){return e.data.data}));case 9:r=t.sent,e.$emit("saved"),e.$store.commit("pushSuccess","Group created."),e.$router.push({name:"AddMember",params:{uuid:r.uuid}}),t.next=19;break;case 15:throw t.prev=15,t.t0=t["catch"](1),Object(j["b"])(t.t0)&&(e.errors=t.t0.response.data.errors),t.t0;case 19:case"end":return t.stop()}}),t,null,[[1,15]])})))()},createGroup:function(){var e=this.group.attributes,t=e.name,r=e.parent_id,n=e.group_type_id,a=e.group_status_id,o=this.group.expert_panel.short_base_name;return null===t&&this.group.expert_panel&&(t=this.group.expert_panel.long_base_name),this.$store.dispatch("groups/create",{name:t,parent_id:r,group_type_id:n,group_status_id:a,short_base_name:o})},updateGroup:function(){var e=[];return e.push(this.saveGroupData()),this.group.expert_panel&&e.push(this.saveEpData()),Promise.all(e)},saveGroupData:function(){var e=[];return this.group.isDirty("parent_id")&&e.push(this.saveParent()),this.group.isDirty("name")&&e.push(this.saveName()),this.group.isDirty("group_status_id")&&e.push(this.saveStatus()),Promise.all(e)},saveEpData:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[],e.namesDirty&&(n=e.group.expert_panel,a=n.long_base_name,o=n.short_base_name,r.push(e.submitFormData({method:"put",url:"/api/groups/".concat(e.group.uuid,"/expert-panel/name"),data:{long_base_name:a,short_base_name:o}}))),e.affiliationIdDirty&&r.push(e.submitFormData({method:"put",url:"/api/groups/".concat(e.group.uuid,"/expert-panel/affiliation-id"),data:{affiliation_id:e.group.expert_panel.affiliation_id}})),t.next=5,Promise.all(r);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},isDirty:function(e){return this.group[e]!=this.group[e]},saveParent:function(){return this.submitFormData({method:"put",url:"/api/groups/".concat(this.group.uuid,"/parent"),data:{parent_id:this.group.parent_id}})},saveName:function(){return this.submitFormData({method:"put",url:"/api/groups/".concat(this.group.uuid,"/name"),data:{name:this.group.name}})},saveStatus:function(){return this.submitFormData({method:"put",url:"/api/groups/".concat(this.group.uuid,"/status"),data:{status_id:this.group.group_status_id}})},resetData:function(){this.group.uuid&&this.$store.dispatch("groups/find",this.group.uuid)},cancel:function(){this.group.uuid&&this.resetData(),this.$emit("canceled")},getParentOptions:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j["a"].get("/api/groups").then((function(t){return t.data.filter((function(t){return t.id!=e.group.id})).map((function(e){return new _["a"](e)}))}));case 2:e.parents=t.sent;case 3:case"end":return t.stop()}}),t)})))()},emitUpdate:function(){this.$emit("update")}},beforeMount:function(){this.getParentOptions(),this.$store.dispatch("cdwgs/getAll")},setup:function(e,t){var r=Object(y["a"])(e,t),n=r.errors,a=r.submitFormData,o=r.resetErrors;return{errors:n,submitFormData:a,resetErrors:o}}},k=r("6b0d"),w=r.n(k);const V=w()(x,[["render",g]]);t["a"]=V},"7ca5":function(e,t,r){"use strict";r.r(t);r("4de4"),r("d3b7"),r("4e82"),r("b0c0");var n=r("7a23"),a={class:"flex justify-between items-center"},o=Object(n["createTextVNode"])(" Groups "),u={key:0,class:"text-center w-full"},i={key:1},s={class:"mb-2"},c=Object(n["createTextVNode"])(" Filter: "),l={key:0},p={key:0},d={key:0};function m(e,t,r,m,b,f){var g=Object(n["resolveComponent"])("badge"),h=Object(n["resolveComponent"])("router-link"),O=Object(n["resolveComponent"])("data-table"),j=Object(n["resolveComponent"])("tab-item"),_=Object(n["resolveComponent"])("tabs-container"),v=Object(n["resolveComponent"])("group-form"),y=Object(n["resolveComponent"])("submission-wrapper"),x=Object(n["resolveComponent"])("modal-dialog"),k=Object(n["resolveDirective"])("remaining-height");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("h1",a,[o,e.hasPermission("groups-manage")?(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:0,class:"btn btn-xs",onClick:t[0]||(t[0]=function(){return f.startCreateGroup&&f.startCreateGroup.apply(f,arguments)})},"Create a group")):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])(_,{onTabChanged:f.getGroupsForType},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(m.tabDefinitions,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(j,{label:e.label,key:e.label},{default:Object(n["withCtx"])((function(){return[b.loading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",u,"Loading...")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createElementVNode"])("div",s,[c,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return m.filterString=e}),placeholder:"name,id,status,coordinator name"},null,512),[[n["vModelText"],m.filterString]])]),Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createBlock"])(O,{data:m.filteredGroups.filter(e.filter),fields:b.fields,sort:b.sort,"onUpdate:sort":t[3]||(t[3]=function(e){return b.sort=e}),"row-click-handler":m.goToGroup,"row-class":"cursor-pointer active:bg-blue-100"},{"cell-displayStatus":Object(n["withCtx"])((function(e){var t=e.item;return[Object(n["createVNode"])(g,{class:"text-xs",color:t.statusColor},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.displayStatus),1),1==t.status.id&&t.isEp()?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",l," - "+Object(n["toDisplayString"])(t.expert_panel.currentStepAbbr),1)):Object(n["createCommentVNode"])("",!0)]})),_:2},1032,["color"])]})),"cell-coordinators":Object(n["withCtx"])((function(e){var r=e.value;return[0==r.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p)):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r,(function(e,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:e.id},[r>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",d,", ")):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(h,{to:{name:"PersonDetail",params:{uuid:e.person.uuid}},class:"link",onClick:t[2]||(t[2]=Object(n["withModifiers"])((function(){}),["stop"]))},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.person.name),1)]})),_:2},1032,["to"])])})),128))]})),_:2},1032,["data","fields","sort","row-click-handler"])),[[k]])]))]})),_:2},1032,["label"])})),128))]})),_:1},8,["onTabChanged"]),Object(n["createVNode"])(x,{modelValue:b.showCreateForm,"onUpdate:modelValue":t[8]||(t[8]=function(e){return b.showCreateForm=e}),title:"Create a New Group",size:"sm"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{onSubmitted:t[6]||(t[6]=function(t){return e.$refs.groupForm.save()}),onCanceled:t[7]||(t[7]=function(t){return e.$refs.groupForm.cancel()})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(v,{ref:"groupForm",onCanceled:t[4]||(t[4]=function(e){return b.showCreateForm=!1}),onSaved:t[5]||(t[5]=function(e){return b.showCreateForm=!1})},null,512)]})),_:1})]})),_:1},8,["modelValue"])])}var b=r("1da1"),f=(r("96cf"),r("7db0"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("466d"),r("5502")),g=r("6c02"),h=r("268c"),O=r("feb0"),j=r("1874"),_={name:"ComponentName",components:{GroupForm:h["a"],SubmissionWrapper:O["a"]},props:{},data:function(){return{loading:!1,showCreateForm:!1,loadedFor:{VCEPs:!1,GCEPs:!1,CDWGs:!1,WGs:!1},sort:{field:"id",desc:!1},fields:[{name:"id",label:"ID",sortable:!0},{name:"name",label:"Name",sortable:!0,resolveValue:function(e){return e.displayName}},{name:"coordinators",sortable:!1},{name:"displayStatus",sortable:!0,label:"status"}]}},methods:{startCreateGroup:function(){this.showCreateForm=!0},getGroupsForType:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t.tabDefinitions.find((function(t){return t.label===e})),!t.loadedFor[e]){r.next=3;break}return r.abrupt("return");case 3:return t.loading=!0,r.next=6,t.$store.dispatch("groups/getItems",{where:{group_type_id:n.typeId}});case 6:t.loadedFor[e]=!0,t.loading=!1;case 8:case"end":return r.stop()}}),r)})))()}},setup:function(){var e=Object(f["d"])(),t=Object(g["d"])(),r=Object(n["computed"])((function(){var t=[{label:"VCEPs",typeId:4,filter:function(e){return e.isVcep()}},{label:"GCEPs",typeId:3,filter:function(e){return e.isGcep()}}];return(e.state.systemInfo.app.features.show_cdwgs||Object(j["b"])(["groups-manage"]))&&t.push({label:"CDWGs",typeId:2,filter:function(e){return e.isCdwg()}}),(e.state.systemInfo.app.features.show_wgs||Object(j["b"])(["groups-manage"]))&&t.push({label:"WGs",typeId:1,filter:function(e){return e.isWg()}}),t})),a=Object(n["ref"])(null),o=Object(n["computed"])((function(){return e.getters["groups/all"]})),u=Object(n["computed"])((function(){return o.value.filter((function(e){if(!a.value)return!0;var t=new RegExp(".*".concat(a.value,".*"),"i");return e.name&&e.name.match(t)||e.displayName&&e.displayName.match(t)||e.expert_panel&&e.expert_panel.full_short_base_name&&e.expert_panel.full_short_base_name.match(t)||e.id==a.value||e.status.name.match(t)||e.expert_panel&&e.expert_panel.currentStepName&&e.expert_panel.currentStepName.match(t)||e.coordinators.filter((function(e){return e.person.name.match(t)})).length>0}))})),i=function(e){t.push({name:"GroupDetail",params:{uuid:e.uuid}})};return{filterString:a,groups:o,filteredGroups:u,tabDefinitions:r,goToItem:i,goToGroup:i}}},v=r("6b0d"),y=r.n(v);const x=y()(_,[["render",m]]);t["default"]=x},a75a:function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var n=r("5530"),a=r("1da1"),o=(r("96cf"),r("7a23")),u=r("033d"),i=r("f96b"),s=Object(o["ref"])({}),c=Object(o["ref"])(!1),l=function(){c.value=!1,s.value={}},p=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.method,a=t.url,o=t.data,e.prev=1,e.next=4,Object(i["a"])({method:r,url:a,data:o}).then((function(e){return e.data.data}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e["catch"](1),Object(u["a"])(e.t0)&&(s.value=Object(n["a"])(Object(n["a"])({},s),e.t0.response.data.errors));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){s.value={}};t["a"]=function(){return{errors:s,editing:c,hideForm:l,submitFormData:p,resetErrors:d}}}}]);
//# sourceMappingURL=group-list.2653bd8a.js.map