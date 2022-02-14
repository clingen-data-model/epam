(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a9e53f7"],{"4f50":function(e,t,n){"use strict";var r=n("7a23"),o={class:"flex space-x-2 items-center mb-3"},a={key:0},c=Object(r["createTextVNode"])(" has"),i={key:1},u=Object(r["createTextVNode"])(" an "),l=Object(r["createTextVNode"])(" due on "),s=Object(r["createTextVNode"])(". "),p=Object(r["createTextVNode"])(" Complete the Annual Update ");function d(e,t,n,d,b,m){var f=Object(r["resolveComponent"])("icon-review"),O=Object(r["resolveComponent"])("router-link"),j=Object(r["resolveComponent"])("static-alert");return m.isPending&&b.annualReview.id?(Object(r["openBlock"])(),Object(r["createBlock"])(j,{key:0,variant:m.variant},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(f,{height:"30",width:"30"}),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("p",null,[n.showGroupName?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",a,[Object(r["createElementVNode"])("strong",null,Object(r["toDisplayString"])(n.group.displayName),1),c])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",i,"You have")),u,Object(r["createElementVNode"])("strong",null,"annual update for "+Object(r["toDisplayString"])(m.window.for_year),1),l,Object(r["createElementVNode"])("strong",null,Object(r["toDisplayString"])(e.formatDate(m.window.end)),1),s]),n.group.uuid?(Object(r["openBlock"])(),Object(r["createBlock"])(O,{key:0,class:"btn font-bold",to:{name:"AnnualUpdate",params:{uuid:n.group.uuid}}},{default:Object(r["withCtx"])((function(){return[p]})),_:1},8,["to"])):Object(r["createCommentVNode"])("",!0)])])]})),_:1},8,["variant"])):Object(r["createCommentVNode"])("",!0)}var b=n("db04"),m={name:"AnnualUpdateAlert",props:{group:{type:Object,required:!0},showGroupName:{type:Boolean,default:!1}},data:function(){return{annualReview:{},loading:!1}},computed:{window:function(){return this.annualReview.window?this.annualReview.window:{}},isPending:function(){return!this.annualReview.completed_at},variant:function(){var e=new Date;if(!this.window.end)return console.log("no window.end"),"warning";var t=new Date(Date.parse(this.window.end));return e>this.addDays(t,-7)?"danger":"warning"}},watch:{group:{immediate:!0,handler:function(){this.getAnnualUpdate()}}},methods:{getAnnualUpdate:function(){var e=this;this.group.uuid&&this.group.expert_panel.definition_is_approved&&(this.loading=!0,b["a"].get("/api/groups/".concat(this.group.uuid,"/expert-panel/annual-updates"),{headers:{"X-Ignore-Missing":1}}).then((function(t){e.annualReview=t.data})),this.loading=!1)}}},f=n("6b0d"),O=n.n(f);const j=O()(m,[["render",d]]);t["a"]=j},7277:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),o=Object(r["createTextVNode"])(" Dashboard "),a={class:"note font-normal"},c={key:0,class:"well"};function i(e,t,n,i,u,l){var s=Object(r["resolveComponent"])("notification-item"),p=Object(r["resolveComponent"])("sustained-curation-review-alert"),d=Object(r["resolveComponent"])("annual-update-alert"),b=Object(r["resolveComponent"])("coi-alert"),m=Object(r["resolveComponent"])("badge"),f=Object(r["resolveComponent"])("data-table"),O=Object(r["resolveComponent"])("tab-item"),j=Object(r["resolveComponent"])("person-profile"),g=Object(r["resolveComponent"])("coi-list"),v=Object(r["resolveComponent"])("tabs-container");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("h1",null,[o,Object(r["createElementVNode"])("div",a," User ID: "+Object(r["toDisplayString"])(i.user.id)+" | Person ID: "+Object(r["toDisplayString"])(i.user.person?i.user.person.id:"no person!!"),1)]),Object(r["createVNode"])(r["TransitionGroup"],{tag:"div",name:"slide-fade-down"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(i.notifications,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:e.id,notification:e,class:"mb-2",onRemoved:function(t){return i.removeNotification(e)}},null,8,["notification","onRemoved"])})),128))]})),_:1}),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(i.sustainedCurationReviews,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(p,{key:e.id,group:e.assignee,class:"mb-2"},null,8,["group"])})),128)),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(i.coordinatingGroups,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:e.id,group:e,"show-group-name":!0,class:"mb-2"},null,8,["group"])})),128)),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(i.user.person.membershipsWithPendingCois,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:e.id,membership:e,class:"mb-2"},null,8,["membership"])})),128)),Object(r["createVNode"])(v,{class:"mt-8"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{label:"Your Groups"},{default:Object(r["withCtx"])((function(){return[i.groups.length?(Object(r["openBlock"])(),Object(r["createBlock"])(f,{key:1,data:i.groups,fields:i.groupFields,sort:i.groupSort,"onUpdate:sort":t[0]||(t[0]=function(e){return i.groupSort=e}),onRowClick:i.navigateToGroup,"row-class":"cursor-pointer"},{"cell-status_name":Object(r["withCtx"])((function(e){var t=e.value;return[Object(r["createVNode"])(m,{color:i.groupBadgeColor(t)},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t),1)]})),_:2},1032,["color"])]})),"cell-displayName":Object(r["withCtx"])((function(e){var t=e.item;return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.name)+" "+Object(r["toDisplayString"])(t.type.name.toUpperCase()),1)]})),_:1},8,["data","fields","sort","onRowClick"])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,"You are not assigned to any groups."))]})),_:1}),Object(r["createVNode"])(O,{label:"Your Info"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{person:i.personFromStore},null,8,["person"])]})),_:1}),Object(r["createVNode"])(O,{label:"COIs"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{person:i.user.person},null,8,["person"])]})),_:1})]})),_:1})])}var u=n("2909"),l=n("1da1"),s=(n("c740"),n("a434"),n("d81d"),n("4de4"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("159b"),n("96cf"),n("5502")),p=n("6c02"),d=n("db04"),b=n("4f50"),m=n("c53a"),f=n("6a6b"),O=n("c226"),j=n("da07"),g=n("ae23"),v=n("4a91"),w={name:"Dashboard",components:{CoiList:f["a"],NotificationItem:m["default"],PersonProfile:O["a"],AnnualUpdateAlert:b["a"]},data:function(){return{testInst:null}},props:{},setup:function(){var e=Object(s["d"])(),t=Object(p["d"])(),n=Object(r["computed"])((function(){return e.getters["currentUser"]})),o=Object(r["computed"])((function(){return e.getters["people/currentItem"]||new j["a"]})),a=function(){n.value.id&&n.value.person&&n.value.person.id&&(e.commit("people/addItem",n.value.person),e.commit("people/setCurrentItemIndex",n.value.person))};Object(r["watch"])((function(){return n}),(function(){a()})),Object(r["onMounted"])((function(){a()}));var c=Object(r["ref"])(!1),i=Object(r["ref"])([]),b=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.value=!0,e.next=3,d["a"].get("/api/people/".concat(n.value.person.uuid,"/notifications/unread")).then((function(e){return e.data}));case 3:i.value=e.sent,c.value=!1;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(e){var t=i.value.findIndex((function(t){return t.id==e.id}));t>-1&&i.value.splice(t,1)},f=Object(r["computed"])((function(){return n.value.memberships.map((function(e){return e.group})).filter((function(e){return null!==e})).map((function(e){return new g["a"](e)}))})),O=Object(r["computed"])((function(){return n.value.memberships.filter((function(e){return e.hasPermission("annual-update-manage")})).map((function(e){return e.group})).filter((function(e){return null!==e})).map((function(e){return new g["a"](e)}))})),w=Object(r["ref"])([{name:"displayName",sortable:!0,type:String},{name:"status.name",label:"Status",sortable:!0,resolveValue:function(e){return e.status.id==v.groups.statuses["applying"].id?e.status.name+" - "+e.expert_panel.currentStepName:e.status.name},type:String}]),h=Object(r["ref"])({field:"displayName",desc:!1}),k=function(e){var t={Active:"green",Applying:"blue",Retired:"yellow",Removed:"red"};return t[e]||"blue"},N=Object(r["ref"])([]),C=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={with:["assignee"],where:{task_type_id:1,assignee_type:"App\\Modules\\Group\\Models\\Group",assignee_id:Object(u["a"])(new Set(O.value.map((function(e){return e.id})))),pending:1}},n=Object(d["c"])(t),r="/api/tasks".concat(n),e.next=5,d["a"].get(r).then((function(e){var t={};return e.data.forEach((function(e){t[e.assignee_id]=e})),t}));case 5:N.value=e.sent;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["onMounted"])(Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return b(),t.next=3,e.dispatch("forceGetCurrentUser");case 3:return t.next=5,C();case 5:case"end":return t.stop()}}),t)})))),{user:n,sustainedCurationReviews:N,personFromStore:o,loadingNotifications:c,notifications:i,groups:f,coordinatingGroups:O,groupSort:h,groupFields:w,groupBadgeColor:k,getNotifications:b,removeNotification:m,navigateToGroup:function(e){t.push({name:"GroupDetail",params:{uuid:e.uuid}})}}}},h=n("6b0d"),k=n.n(h);const N=k()(w,[["render",i]]);t["default"]=N}}]);
//# sourceMappingURL=chunk-6a9e53f7.78224abd.js.map