(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["application-summary"],{5257:function(e,t,r){"use strict";var a=r("5530"),n=(r("caad"),r("2532"),r("b64b"),r("ac1f"),r("5319"),r("4de4"),r("d3b7"),r("6c02")),l=r("7a23");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(n["d"])(),r=Object(n["c"])();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});var o=Object(l["computed"])({immediate:!0,get:function(){return Object.keys(r.query).includes("sort-field")?{field:r.query["sort-field"],desc:Boolean(parseInt(r.query["sort-desc"]))}:e},set:function(e){var n={"sort-field":e.field,"sort-desc":e.desc?1:0},l=Object(a["a"])(Object(a["a"])({},r.query),n);t.replace({path:r.path,query:l})}}),c=Object(l["computed"])({set:function(e){var n=r.query,l=r.path,o=Object(a["a"])({},n);e?o=Object(a["a"])(Object(a["a"])({},n),{filter:e}):delete o.filter,t.replace({path:l,query:o})},get:function(){return r.query.filter},immediate:!0});return{sort:o,filter:c}}},"63a8":function(e,t,r){"use strict";r.r(t);var a=r("7a23");function n(e,t,r,n,l,o){var c=Object(a["resolveComponent"])("applications-summary-table");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(c,{"ep-type-id":1})])}var l=r("dc65"),o={name:"GcepsSummary",components:{ApplicationsSummaryTable:l["a"]}},c=r("6b0d"),i=r.n(c);const s=i()(o,[["render",n]]);t["default"]=s},be02:function(e,t,r){"use strict";r.r(t);var a=r("7a23");function n(e,t,r,n,l,o){var c=Object(a["resolveComponent"])("applications-summary-table");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(c,{"ep-type-id":2})])}var l=r("dc65"),o={name:"GcepsSummary",components:{ApplicationsSummaryTable:l["a"]}},c=r("6b0d"),i=r.n(c);const s=i()(o,[["render",n]]);t["default"]=s},dc65:function(e,t,r){"use strict";r("4de4"),r("d3b7"),r("4e82"),r("b0c0");var a=r("7a23"),n={class:"flex justify-between"},l={class:"mb-1 flex space-x-2"},o=Object(a["createTextVNode"])("Filter: "),c=["href"],i=["innerHTML"],s=["innerHTML"];function p(e,t,r,p,u,d){var m=Object(a["resolveComponent"])("checkbox"),b=Object(a["resolveComponent"])("data-table");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("label",null,[o,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",class:"sm","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.filter=e}),placeholder:"filter"},null,512),[[a["vModelText"],p.filter]])]),Object(a["createVNode"])(m,{modelValue:d.showCompleted,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.showCompleted=e}),label:"Show completed"},null,8,["modelValue"])])]),Object(a["createVNode"])(b,{data:d.filteredData,fields:d.selectedFields,"filter-term":p.filter,"row-click-handler":d.goToApplication,"row-class":"cursor-pointer",sort:p.sort,"onUpdate:sort":t[2]||(t[2]=function(e){return p.sort=e}),style:Object(a["normalizeStyle"])(d.remainingHeight),class:"overflow-auto text-xs",ref:"table"},{"cell-contacts":Object(a["withCtx"])((function(e){var t=e.item;return[Object(a["createElementVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(t.group.contacts,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:e.id},[Object(a["createElementVNode"])("small",null,[Object(a["createElementVNode"])("a",{href:"mailto:".concat(e.person.email),class:"text-blue-500"},Object(a["toDisplayString"])(e.person.name),9,c)])])})),128))])]})),"cell-latest_log_entry_description":Object(a["withCtx"])((function(e){var t=e.value;return[Object(a["createElementVNode"])("div",{innerHTML:t},null,8,i)]})),"cell-latest_pending_next_action_entry":Object(a["withCtx"])((function(e){var t=e.value;return[Object(a["createElementVNode"])("div",{innerHTML:t},null,8,s)]})),_:1},8,["data","fields","filter-term","row-click-handler","sort","style"])])}var u=r("5530"),d=(r("a9e3"),r("ac1f"),r("5319"),r("caad"),r("2532"),r("b64b"),r("5502")),m=r("5257"),b={name:"SummaryVceps",components:{},props:{expert_panel_type_id:{type:Number,default:null}},data:function(){return{fields:[{name:"name",label:"Name",type:String,sortable:!0},{name:"group.parent.name",label:"CDWG",type:String,sortable:!0,resolveValue:function(e){return e.group&&e.group.parent?e.group.parent.name:""}},{name:"current_step",label:"Step",type:Number,sortable:!0,resolveValue:function(e){return e.isCompleted?"Completed":e.current_step},resolveSort:function(e){return e.isCompleted?5:e.current_step}},{name:"contacts",label:"Contacts",type:Array,sortable:!1,class:["min-w-40"],step:1},{name:"step_1_received_date",label:2==this.expert_panel_type_id?"Step 1 Received":"Application Received",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"step_1_approval_date",label:2==this.expert_panel_type_id?"Step 1 Approved":"Application Approved",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"step_2_approval_date",label:"Step 2 Approved",type:Date,sortable:!0,class:["min-w-28"],step:2},{name:"step_3_approval_date",label:"Step 3 Approved",type:Date,sortable:!0,class:["min-w-28"],step:3},{name:"step_4_received_date",label:"Step 4 Received",type:Date,sortable:!0,class:["min-w-28"],step:4},{name:"step_4_approval_date",label:"Step 4 Approved",type:Date,sortable:!0,class:["min-w-28"],step:4}]}},computed:Object(u["a"])(Object(u["a"])({},Object(d["b"])({applications:"applications/all"})),{},{filteredData:function(){var e=this;return this.applications.filter((function(t){return!e.expert_panel_type_id||t.expert_panel_type_id==e.expert_panel_type_id})).filter((function(t){return!!e.showCompleted||null==t.date_completed}))},showCompleted:{set:function(e){var t=this.$route.query,r=this.$route.path,a=Object(u["a"])({},t);e?a=Object(u["a"])(Object(u["a"])({},t),{"show-completed":1}):delete a["show-completed"],this.$router.replace({path:r,query:a})},get:function(){return Boolean(parseInt(this.$route.query["show-completed"]))},immediate:!0},selectedFields:function(){var e=2==this.expert_panel_type_id?[1,2,3,4]:[1];return this.fields.filter((function(t){return!t.step||e.includes(t.step)}))},showAllInfo:{immediate:!0,get:function(){return Object.keys(this.$route.query).includes("showAllInfo")?this.$route.query.showAllInfo:0},set:function(e){var t=Object(u["a"])({},this.$route.query);t.showAllInfo=e,this.$router.replace({path:this.$route.path,query:t})}},remainingHeight:function(){return{height:"calc(100vh - 220px)"}}}),methods:{getApplications:function(){var e={with:["group","group.parent","group.latestLogEntry","latestPendingNextAction","type","group.contacts","group.contacts.person"]},t={};Object.keys(t).length>0&&(e.where=t),this.$store.dispatch("applications/getApplications",e)},goToApplication:function(e){this.$router.push({name:"ApplicationDetail",params:{uuid:e.uuid}})}},mounted:function(){this.getApplications()},setup:function(){var e=Object(m["a"])(),t=e.sort,r=e.filter;return{sort:t,filter:r}}},f=r("6b0d"),h=r.n(f);const v=h()(b,[["render",p]]);t["a"]=v}}]);
//# sourceMappingURL=application-summary.a07f6ee1.js.map