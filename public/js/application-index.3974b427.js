(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["application-index","create-application-form"],{"0049":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),i=Object(a["P"])("data-v-2dfc689c");Object(a["v"])("data-v-2dfc689c");var r={class:"home"},c={class:"mb-2 mt-4"},l={class:"tabs"},o=Object(a["h"])("VCEPS"),s=Object(a["h"])("GCEPS"),u={class:"p-4 border rounded-tr-lg rounded-b-lg bg-white"};Object(a["t"])();var p=i((function(e,t,n,p,d,b){var f=Object(a["A"])("router-link"),m=Object(a["A"])("router-view"),h=Object(a["A"])("create-application-form"),j=Object(a["A"])("modal-dialog");return Object(a["s"])(),Object(a["f"])("div",r,[Object(a["i"])("button",{onClick:t[1]||(t[1]=function(e){return d.showModal=!0}),class:"btn blue"},"Initiate Application"),Object(a["i"])("div",c,[Object(a["i"])("div",l,[Object(a["i"])(f,{to:{name:"vceps"},class:"tab"},{default:i((function(){return[o]})),_:1}),Object(a["i"])(f,{to:{name:"gceps"},class:"tab"},{default:i((function(){return[s]})),_:1})]),Object(a["i"])("div",u,[Object(a["i"])(m)])]),Object(a["i"])(j,{modelValue:d.showModal,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.showModal=e}),size:"md",onClosed:t[5]||(t[5]=function(t){return e.$refs.initiateform.initForm()})},{default:i((function(){return[Object(a["i"])(h,{name:"modal",onCanceled:t[2]||(t[2]=function(e){return d.showModal=!1}),onSaved:t[3]||(t[3]=function(e){return d.showModal=!1}),ref:"initiateform"},null,512)]})),_:1},8,["modelValue"])])})),d=n("3f17"),b={name:"ApplicationsIndex",components:{CreateApplicationForm:d["default"]},data:function(){return{showModal:!1}},computed:{}};n("afcf");b.render=p,b.__scopeId="data-v-2dfc689c";t["default"]=b},"0cb2":function(e,t,n){var a=n("7b0b"),i=Math.floor,r="".replace,c=/\$([$&'`]|\d\d?|<[^>]*>)/g,l=/\$([$&'`]|\d\d?)/g;e.exports=function(e,t,n,o,s,u){var p=n+e.length,d=o.length,b=l;return void 0!==s&&(s=a(s),b=c),r.call(u,b,(function(a,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(p);case"<":c=s[r.slice(1,-1)];break;default:var l=+r;if(0===l)return a;if(l>d){var u=i(l/10);return 0===u?a:u<=d?void 0===o[u-1]?r.charAt(1):o[u-1]+r.charAt(1):a}c=o[l-1]}return void 0===c?"":c}))}},1902:function(e,t,n){},"2b61":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function i(e,t,n,i,r,c){var l=Object(a["A"])("applications-table");return Object(a["s"])(),Object(a["f"])("div",null,[Object(a["i"])(l,{"ep-type-id":1})])}var r=n("eb82"),c={components:{ApplicationsTable:r["a"]},props:{},data:function(){return{}}};c.render=i;t["default"]=c},"3f17":function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),i=Object(a["i"])("h4",{class:"text-xl font-semibold pb-2 border-b mb-4"},"Initiate Application",-1),r=Object(a["i"])("option",{value:null},"Select...",-1),c=Object(a["h"])("   "),l=Object(a["h"])("   "),o=Object(a["i"])("label",{for:"show-initiation-checkbox"},"Backdate this initiation",-1);function s(e,t,n,s,u,p){var d=this,b=Object(a["A"])("input-row"),f=Object(a["A"])("button-row");return Object(a["s"])(),Object(a["f"])("div",null,[i,Object(a["i"])(b,{label:"Working Name",errors:u.errors.working_name,type:"text",modelValue:this.app.working_name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.app.working_name=e}),placeholder:"A recognizable name"},null,8,["errors","modelValue"]),Object(a["i"])(b,{label:"CDWG",errors:u.errors.cdwg_id},{default:Object(a["L"])((function(){return[Object(a["M"])(Object(a["i"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return u.app.cdwg_id=e})},[r,(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(e.cdwgs,(function(e){return Object(a["s"])(),Object(a["f"])("option",{key:e.id,value:e.id},Object(a["D"])(e.name),9,["value"])})),128))],512),[[a["H"],u.app.cdwg_id]])]})),_:1},8,["errors"]),Object(a["i"])(b,{label:"EP Type",errors:u.errors.ep_type_id},{default:Object(a["L"])((function(){return[Object(a["i"])("div",null,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(u.epTypes,(function(e){return Object(a["s"])(),Object(a["f"])("div",{key:e.id},[Object(a["M"])(Object(a["i"])("input",{type:"radio",value:e.id,"onUpdate:modelValue":t[3]||(t[3]=function(e){return u.app.ep_type_id=e}),id:"ep-".concat(e.id,"-radio")},null,8,["value","id"]),[[a["G"],u.app.ep_type_id]]),c,Object(a["i"])("label",{for:"ep-".concat(e.id,"-radio")},Object(a["D"])(e.name),9,["for"])])})),128))])]})),_:1},8,["errors"]),Object(a["i"])(b,{errors:u.errors.date_initiated},{default:Object(a["L"])((function(){return[Object(a["i"])("div",null,[Object(a["i"])("div",null,[Object(a["M"])(Object(a["i"])("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return u.showInitiationDate=e}),id:"show-initiation-checkbox"},null,512),[[a["F"],u.showInitiationDate]]),l,o]),Object(a["M"])(Object(a["i"])(b,{type:"date",label:"Initiation Date",modelValue:u.app.date_initiated,"onUpdate:modelValue":t[5]||(t[5]=function(e){return u.app.date_initiated=e})},null,8,["modelValue"]),[[a["J"],u.showInitiationDate]])])]})),_:1},8,["errors"]),Object(a["i"])(f,null,{default:Object(a["L"])((function(){return[Object(a["i"])("button",{class:"btn",onClick:t[6]||(t[6]=function(){return p.cancel&&p.cancel.apply(p,arguments)})},"Cancel"),Object(a["i"])("button",{class:"btn blue",onClick:t[7]||(t[7]=function(){return p.save&&p.save.apply(p,arguments)})},"Initiate Application")]})),_:1})])}n("b64b"),n("96cf");var u=n("1da1"),p=n("5530"),d=n("5502"),b=n("e328"),f={name:"CreateApplicationForm",props:{},emits:["canceled","saved"],data:function(){return{visible:!1,showInitiationDate:!1,app:{working_name:null,cdwg_id:null,ep_type_id:null,date_initiated:Object(b["a"])(new Date)},epTypes:[{name:"GCEP",id:1},{name:"VCEP",id:2}],errors:{}}},computed:Object(p["a"])(Object(p["a"])({},Object(d["b"])({cdwgs:"cdwgs/all"})),{},{hasErrors:function(){return Object.keys(this.errors).length>0}}),watch:{"app.working_name":function(){this.clearErrors("working_name")},"app.cdwg_id":function(){this.clearErrors("cdwg_id")},"app.ep_type_id":function(){this.clearErrors("ep_type_id")}},methods:{cancel:function(){this.initForm(),this.$emit("canceled")},save:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("applications/initiateApplication",e.app);case 3:e.$emit("saved"),t.next=12;break;case 6:if(t.prev=6,t.t0=t["catch"](0),!t.t0.response||422!=t.t0.response.status||!t.t0.response.data.errors){t.next=11;break}return e.errors=t.t0.response.data.errors,t.abrupt("return");case 11:throw t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,6]])})))()},initForm:function(){this.initErrors(),this.initAppData()},initAppData:function(){this.app={working_name:null,cdwg_id:null,ep_type_id:null,date_initiated:Object(b["a"])(new Date)}},clearErrors:function(e){e?delete this.errors[e]:this.initErrors()},initErrors:function(){this.errors={}}}};f.render=s;t["default"]=f},5257:function(e,t,n){"use strict";n("4de4"),n("caad"),n("b64b"),n("ac1f"),n("2532"),n("5319");var a=n("5530"),i=n("6c02"),r=n("7a23");t["a"]=function(){var e=Object(i["d"])(),t=Object(i["c"])(),n=Object(r["d"])({immediate:!0,get:function(){return Object.keys(t.query).includes("sort-field")?{field:t.query["sort-field"],desc:Boolean(parseInt(t.query["sort-desc"]))}:{field:"name",desc:!1}},set:function(n){var i={"sort-field":n.field,"sort-desc":n.desc?1:0},r=Object(a["a"])(Object(a["a"])({},t.query),i);e.replace({path:t.path,query:r})}}),c=Object(r["d"])({set:function(n){var i=t.query,r=t.path,c=Object(a["a"])({},i);n?c=Object(a["a"])(Object(a["a"])({},i),{filter:n}):delete c.filter,e.replace({path:r,query:c})},get:function(){return t.query.filter},immediate:!0});return{sort:n,filter:c}}},5319:function(e,t,n){"use strict";var a=n("d784"),i=n("825a"),r=n("50c4"),c=n("a691"),l=n("1d80"),o=n("8aa5"),s=n("0cb2"),u=n("14c3"),p=Math.max,d=Math.min,b=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,n,a){var f=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,h=f?"$":"$0";return[function(n,a){var i=l(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i,a):t.call(String(i),n,a)},function(e,a){if(!f&&m||"string"===typeof a&&-1===a.indexOf(h)){var l=n(t,e,this,a);if(l.done)return l.value}var j=i(e),O=String(this),v="function"===typeof a;v||(a=String(a));var w=j.global;if(w){var y=j.unicode;j.lastIndex=0}var _=[];while(1){var g=u(j,O);if(null===g)break;if(_.push(g),!w)break;var A=String(g[0]);""===A&&(j.lastIndex=o(O,r(j.lastIndex),y))}for(var I="",k=0,x=0;x<_.length;x++){g=_[x];for(var S=String(g[0]),D=p(d(c(g.index),O.length),0),C=[],E=1;E<g.length;E++)C.push(b(g[E]));var $=g.groups;if(v){var T=[S].concat(C,D,O);void 0!==$&&T.push($);var V=String(a.apply(void 0,T))}else V=s(S,O,D,C,$,a);D>=k&&(I+=O.slice(k,D)+V,k=D+S.length)}return I+O.slice(k)}]}))},afcf:function(e,t,n){"use strict";n("1902")},d659:function(e,t,n){"use strict";n.r(t);var a=n("7a23");function i(e,t,n,i,r,c){var l=Object(a["A"])("applications-table");return Object(a["s"])(),Object(a["f"])("div",null,[Object(a["i"])(l,{"ep-type-id":2})])}var r=n("eb82"),c={components:{ApplicationsTable:r["a"]}};c.render=i;t["default"]=c},eb82:function(e,t,n){"use strict";n("4de4"),n("b0c0");var a=n("7a23"),i={class:"flex justify-between"},r={class:"mb-1 flex space-x-2"},c=Object(a["h"])("Filter: "),l=Object(a["h"])(" Show completed ");function o(e,t,n,o,s,u){var p=Object(a["A"])("data-table");return Object(a["s"])(),Object(a["f"])("div",null,[Object(a["i"])("div",i,[Object(a["i"])("div",r,[Object(a["i"])("label",null,[c,Object(a["M"])(Object(a["i"])("input",{type:"text",class:"sm","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.filter=e}),placeholder:"filter"},null,512),[[a["I"],o.filter]])]),Object(a["i"])("label",null,[Object(a["M"])(Object(a["i"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.showCompleted=e})},null,512),[[a["F"],u.showCompleted]]),l])]),Object(a["i"])("div",null,[Object(a["i"])("button",{class:["btn btn-xs",{blue:0==u.showAllInfo}],onClick:t[3]||(t[3]=function(e){return u.showAllInfo=0})},"Summary",2),Object(a["i"])("button",{class:["btn btn-xs",{blue:1==u.showAllInfo}],onClick:t[4]||(t[4]=function(e){return u.showAllInfo=1})},"All Info",2)])]),Object(a["i"])(p,{data:u.filteredData,fields:u.selectedFields,"filter-term":o.filter,"row-click-handler":u.goToApplication,"row-class":"cursor-pointer",sort:o.sort,"onUpdate:sort":t[5]||(t[5]=function(e){return o.sort=e}),style:u.remainingHeight,class:"overflow-auto",ref:"table"},{"cell-contacts":Object(a["L"])((function(e){var t=e.item;return[Object(a["i"])("ul",null,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(t.contacts,(function(e){return Object(a["s"])(),Object(a["f"])("li",{key:e.id},[Object(a["i"])("small",null,[Object(a["i"])("a",{href:"mailto:".concat(e.email),class:"text-blue-500"},Object(a["D"])(e.name),9,["href"])])])})),128))])]})),_:1},8,["data","fields","filter-term","row-click-handler","sort","style"])])}n("99af"),n("caad"),n("a9e3"),n("b64b"),n("ac1f"),n("2532"),n("5319");var s=n("2909"),u=n("5530"),p=n("5502"),d=n("e328"),b=n("5257"),f={components:{},props:{epTypeId:{type:Number,default:null}},data:function(){return{fields:[{name:"id",label:"ID",type:Number,sortable:!0},{name:"name",label:"Name",type:String,sortable:!0},{name:"cdwg.name",label:"CDWG",type:String,sortable:!0},{name:"current_step",label:"Current Step",type:Number,sortable:!0},{name:"latest_log_entry.created_at",label:"Last Activity",type:String,sortable:!0,resolveValue:function(e){return e&&e.latest_log_entry?Object(d["a"])(e.latest_log_entry.created_at):null},colspan:2,headerClass:["max-w-sm"],class:["min-w-28"]},{name:"latest_log_entry.description",label:"Last Activity",type:String,hideHeader:!0,class:["max-w-48","truncate"]},{name:"latest_pending_next_action.entry",label:"Next Action",type:String,sortable:!1,class:["min-w-28","max-w-xs","truncate"]}],allInfoFields:[{name:"contacts",label:"Contacts",type:Array,sortable:!1,class:["min-w-40"],step:1},{name:"first_scope_document.date_received",label:2==this.epTypeId?"Step 1 Received":"Application Received",type:Date,sortable:!1,class:["min-w-28"],step:1},{name:"approval_dates.step 1",label:2==this.epTypeId?"Step 1 Approved":"Application Approved",type:Date,sortable:!1,class:["min-w-28"],step:1},{name:"approval_dates.step 2",label:"Step 2 Approved",type:Date,sortable:!1,class:["min-w-28"],step:2},{name:"approval_dates.step 3",label:"Step 3 Approved",type:Date,sortable:!1,class:["min-w-28"],step:3},{name:"first_final_document.date_received",label:"Step 4 Received",type:Date,sortable:!1,class:["min-w-28"],step:4},{name:"approval_dates.step 4",label:"Step 4 Approved",type:Date,sortable:!1,class:["min-w-28"],step:4}]}},computed:Object(u["a"])(Object(u["a"])({},Object(p["b"])({applications:"applications/all"})),{},{filteredData:function(){var e=this;return this.applications.filter((function(t){return!e.epTypeId||t.ep_type_id==e.epTypeId})).filter((function(t){return!!e.showCompleted||null==t.date_completed}))},showCompleted:{set:function(e){var t=this.$route.query,n=this.$route.path,a=Object(u["a"])({},t);e?a=Object(u["a"])(Object(u["a"])({},t),{"show-completed":1}):delete a["show-completed"],this.$router.replace({path:n,query:a})},get:function(){return Boolean(parseInt(this.$route.query["show-completed"]))},immediate:!0},selectedFields:function(){if(1==this.showAllInfo){var e=2==this.epTypeId?[1,2,3,4]:[1],t=this.allInfoFields.filter((function(t){return e.includes(t.step)}));return[].concat(Object(s["a"])(this.fields),Object(s["a"])(t))}return this.fields},showAllInfo:{immediate:!0,get:function(){return Object.keys(this.$route.query).includes("showAllInfo")?this.$route.query.showAllInfo:0},set:function(e){var t=Object(u["a"])({},this.$route.query);t.showAllInfo=e,this.$router.replace({path:this.$route.path,query:t})}},remainingHeight:function(){return{height:"calc(100vh - 220px)"}}}),methods:{getApplications:function(){var e={with:["latestLogEntry","latestPendingNextAction","type","contacts","firstScopeDocument","firstFinalDocument"]},t={};Object.keys(t).length>0&&(e.where=t),this.$store.dispatch("applications/getApplications",e)},goToApplication:function(e){this.$router.push({name:"ApplicationDetail",params:{uuid:e.uuid}})}},mounted:function(){this.getApplications()},setup:function(){var e=Object(b["a"])(),t=e.sort,n=e.filter;return{sort:t,filter:n}}};f.render=o;t["a"]=f}}]);
//# sourceMappingURL=application-index.3974b427.js.map