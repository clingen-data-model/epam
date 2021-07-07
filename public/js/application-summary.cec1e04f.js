(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["application-summary"],{5257:function(e,t,a){"use strict";a("4de4"),a("caad"),a("b64b"),a("ac1f"),a("2532"),a("5319");var r=a("5530"),n=a("6c02"),c=a("7a23");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(n["d"])(),a=Object(n["c"])();e=e||{field:"name",desc:!1};var l=Object(c["computed"])({immediate:!0,get:function(){return Object.keys(a.query).includes("sort-field")?{field:a.query["sort-field"],desc:Boolean(parseInt(a.query["sort-desc"]))}:e},set:function(e){var n={"sort-field":e.field,"sort-desc":e.desc?1:0},c=Object(r["a"])(Object(r["a"])({},a.query),n);t.replace({path:a.path,query:c})}}),o=Object(c["computed"])({set:function(e){var n=a.query,c=a.path,l=Object(r["a"])({},n);e?l=Object(r["a"])(Object(r["a"])({},n),{filter:e}):delete l.filter,t.replace({path:c,query:l})},get:function(){return a.query.filter},immediate:!0});return{sort:l,filter:o}}},"63a8":function(e,t,a){"use strict";a.r(t);var r=a("7a23");function n(e,t,a,n,c,l){var o=Object(r["resolveComponent"])("applications-summary-table");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])(o,{"ep-type-id":1})])}var c=a("dc65"),l={name:"GcepsSummary",components:{ApplicationsSummaryTable:c["a"]}};l.render=n;t["default"]=l},be02:function(e,t,a){"use strict";a.r(t);var r=a("7a23");function n(e,t,a,n,c,l){var o=Object(r["resolveComponent"])("applications-summary-table");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])(o,{"ep-type-id":2})])}var c=a("dc65"),l={name:"GcepsSummary",components:{ApplicationsSummaryTable:c["a"]}};l.render=n;t["default"]=l},dc65:function(e,t,a){"use strict";a("4de4"),a("b0c0");var r=a("7a23"),n={class:"flex justify-between"},c={class:"mb-1 flex space-x-2"},l=Object(r["createTextVNode"])("Filter: "),o=Object(r["createTextVNode"])(" Show completed ");function i(e,t,a,i,s,p){var u=Object(r["resolveComponent"])("data-table");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("div",n,[Object(r["createVNode"])("div",c,[Object(r["createVNode"])("label",null,[l,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",class:"sm","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.filter=e}),placeholder:"filter"},null,512),[[r["vModelText"],i.filter]])]),Object(r["createVNode"])("label",null,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return p.showCompleted=e})},null,512),[[r["vModelCheckbox"],p.showCompleted]]),o])])]),Object(r["createVNode"])(u,{data:p.filteredData,fields:p.selectedFields,"filter-term":i.filter,"row-click-handler":p.goToApplication,"row-class":"cursor-pointer",sort:i.sort,"onUpdate:sort":t[3]||(t[3]=function(e){return i.sort=e}),style:p.remainingHeight,class:"overflow-auto text-xs",ref:"table"},{"cell-contacts":Object(r["withCtx"])((function(e){var t=e.item;return[Object(r["createVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(t.contacts,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:e.id},[Object(r["createVNode"])("small",null,[Object(r["createVNode"])("a",{href:"mailto:".concat(e.email),class:"text-blue-500"},Object(r["toDisplayString"])(e.name),9,["href"])])])})),128))])]})),"cell-latest_log_entry_description":Object(r["withCtx"])((function(e){var t=e.value;return[Object(r["createVNode"])("div",{innerHTML:t},null,8,["innerHTML"])]})),"cell-latest_pending_next_action_entry":Object(r["withCtx"])((function(e){var t=e.value;return[Object(r["createVNode"])("div",{innerHTML:t},null,8,["innerHTML"])]})),_:1},8,["data","fields","filter-term","row-click-handler","sort","style"])])}a("caad"),a("a9e3"),a("b64b"),a("ac1f"),a("2532"),a("5319");var s=a("5530"),p=a("5502"),u=a("5257"),d={name:"SummaryVceps",components:{},props:{epTypeId:{type:Number,default:null}},data:function(){return{fields:[{name:"name",label:"Name",type:String,sortable:!0},{name:"cdwg.name",label:"CDWG",type:String,sortable:!0,resolveValue:function(e){return e.cdwg?e.cdwg.name:""}},{name:"current_step",label:"Step",type:Number,sortable:!0,resolveValue:function(e){return e.isCompleted?"Completed":e.current_step},resolveSort:function(e){return e.isCompleted?5:e.current_step}},{name:"contacts",label:"Contacts",type:Array,sortable:!1,class:["min-w-40"],step:1},{name:"first_scope_document.date_received",label:2==this.epTypeId?"Step 1 Received":"Application Received",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"approval_dates.step 1",label:2==this.epTypeId?"Step 1 Approved":"Application Approved",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"approval_dates.step 2",label:"Step 2 Approved",type:Date,sortable:!0,class:["min-w-28"],step:2},{name:"approval_dates.step 3",label:"Step 3 Approved",type:Date,sortable:!0,class:["min-w-28"],step:3},{name:"first_final_document.date_received",label:"Step 4 Received",type:Date,sortable:!0,class:["min-w-28"],step:4},{name:"approval_dates.step 4",label:"Step 4 Approved",type:Date,sortable:!0,class:["min-w-28"],step:4}]}},computed:Object(s["a"])(Object(s["a"])({},Object(p["b"])({applications:"applications/all"})),{},{filteredData:function(){var e=this;return this.applications.filter((function(t){return!e.epTypeId||t.ep_type_id==e.epTypeId})).filter((function(t){return!!e.showCompleted||null==t.date_completed}))},showCompleted:{set:function(e){var t=this.$route.query,a=this.$route.path,r=Object(s["a"])({},t);e?r=Object(s["a"])(Object(s["a"])({},t),{"show-completed":1}):delete r["show-completed"],this.$router.replace({path:a,query:r})},get:function(){return Boolean(parseInt(this.$route.query["show-completed"]))},immediate:!0},selectedFields:function(){var e=2==this.epTypeId?[1,2,3,4]:[1];return this.fields.filter((function(t){return!t.step||e.includes(t.step)}))},showAllInfo:{immediate:!0,get:function(){return Object.keys(this.$route.query).includes("showAllInfo")?this.$route.query.showAllInfo:0},set:function(e){var t=Object(s["a"])({},this.$route.query);t.showAllInfo=e,this.$router.replace({path:this.$route.path,query:t})}},remainingHeight:function(){return{height:"calc(100vh - 220px)"}}}),methods:{getApplications:function(){var e={with:["latestLogEntry","latestPendingNextAction","type","contacts","firstScopeDocument","firstFinalDocument"]},t={};Object.keys(t).length>0&&(e.where=t),this.$store.dispatch("applications/getApplications",e)},goToApplication:function(e){this.$router.push({name:"ApplicationDetail",params:{uuid:e.uuid}})}},mounted:function(){this.getApplications()},setup:function(){var e=Object(u["a"])(),t=e.sort,a=e.filter;return{sort:t,filter:a}}};d.render=i;t["a"]=d}}]);
//# sourceMappingURL=application-summary.cec1e04f.js.map