(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["confirm-delete-log-entry"],{"0ffe":function(e,t,n){},"33d8":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a"),n("b0c0");var r=n("7a23"),c=Object(r["createElementVNode"])("h2",null,"You are about to delete the following log entry:",-1),o={class:"border-y py-2"},a=["innerHTML"],i={key:0,class:"ml-4 mt-2 mb-4 text-gray-700 text-sm"},u=Object(r["createElementVNode"])("div",null,"This can not be undone. Are you sure you want to continue?",-1),l={key:0,class:"bg-red-200 text-red-900 rounded p-2 my-2"};function s(e,t,n,s,d,b){var m=Object(r["resolveComponent"])("button-row");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[c,Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("blockquote",null,[Object(r["createElementVNode"])("div",{innerHTML:b.logEntry.description},null,8,a)]),b.logEntry.causer?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",i,"Logged by "+Object(r["toDisplayString"])(b.logEntry.causer.name)+", "+Object(r["toDisplayString"])(b.logDate),1)):Object(r["createCommentVNode"])("",!0)]),u,b.flattenedErrors.length>0?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",l,[Object(r["createElementVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(b.flattenedErrors,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t},Object(r["toDisplayString"])(e),1)})),128))])])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(m,{onCanceled:t[0]||(t[0]=function(t){return e.$router.go(-1)}),onSubmitted:b.deleteEntry,submitText:"Delete Log Entry"},null,8,["onSubmitted"])])}var d=n("1da1"),b=n("5530"),m=(n("96cf"),n("7db0"),n("d3b7"),n("0481"),n("4069"),n("07ac"),n("5502")),p=n("db04"),f=n("831e"),O={name:"ConfirmDeleteLogEntry",props:{id:{required:!0,type:String}},data:function(){return{errors:{}}},computed:Object(b["a"])(Object(b["a"])({},Object(m["b"])({group:"groups/currentItemOrNew"})),{},{application:function(){return this.group.expert_panel},logEntry:function(){var e=this,t=this.logEntries.find((function(t){return t.id==e.id}));return t||{}},logDate:function(){return this.formatDate(this.logEntry.properties.log_date)},flattenedErrors:function(){return Object.values(this.errors).flat()}}),watch:{logEntry:{immediate:!0,handler:function(){this.logEntry.id||this.$router.go(-1)}}},methods:{deleteEntry:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f["a"])("/api/groups/".concat(e.group.uuid,"/activity-logs"),e.id);case 3:e.$router.go(-1),t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),Object(p["b"])(t.t0)&&(e.errors=t.t0.response.data.errors),e.errors={a:t.t0.message};case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},setup:function(){return{logEntries:f["c"]}}},g=(n("a5f4"),n("6b0d")),j=n.n(g);const h=j()(O,[["render",s]]);t["default"]=h},"521e":function(e,t,n){},"831e":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return d}));var r=n("1da1"),c=(n("c740"),n("99af"),n("a434"),n("96cf"),n("7a23")),o=n("f96b"),a=Object(c["ref"])([]),i=Object(c["computed"])((function(){return a.value})),u=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].get(t).then((function(e){return e.data.data}));case 2:a.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].post(t,n).then((function(e){return a.value.push(e.data),e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].put(t,n).then((function(e){var t=a.value.findIndex((function(t){return t.id==e.data.id}));return a.value[t]=e.data,e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].delete("".concat(t,"/").concat(n)).then((function(e){var t=a.value.findIndex((function(e){return e.id==n}));return a.value.splice(t,1),e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},"9ce5":function(e,t,n){"use strict";n("0ffe")},a5f4:function(e,t,n){"use strict";n("521e")},d80c:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),c=Object(r["createElementVNode"])("h2",null,"You are about to delete the following next action:",-1),o={key:0,class:"border-y py-2"},a={class:"ml-4 my-3 text-sm"},i=Object(r["createTextVNode"])(" Created on: "),u={class:"mb-4"},l=["innerHTML"],s={key:0,class:"ml-4 my-1 text-sm"},d=Object(r["createTextVNode"])(" Assigned to: "),b={key:0},m={key:1,class:"ml-4 mt-1 mb-4 text-sm"},p=Object(r["createTextVNode"])(" Target Date: "),f=Object(r["createElementVNode"])("div",null,"This can not be undone. Are you sure you want to continue?",-1);function O(e,t,n,O,g,j){var h=Object(r["resolveComponent"])("button-row");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[c,j.nextAction?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",a,[i,Object(r["createElementVNode"])("strong",null,Object(r["toDisplayString"])(j.formatDate(j.nextAction.created_at)),1)]),Object(r["createElementVNode"])("blockquote",u,[Object(r["createElementVNode"])("div",{innerHTML:j.nextAction.entry},null,8,l)]),j.nextAction.assignee?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,[d,Object(r["createElementVNode"])("strong",null,[j.nextAction.assigned_to_name?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",b,Object(r["toDisplayString"])(j.nextAction.assigned_to_name)+" in ",1)):Object(r["createCommentVNode"])("",!0),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(j.nextAction.assignee.name),1)])])):Object(r["createCommentVNode"])("",!0),j.nextAction.target_date?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",m,[p,Object(r["createElementVNode"])("strong",null,Object(r["toDisplayString"])(j.formatDate(j.nextAction.target_date)),1)])):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0),f,Object(r["createVNode"])(h,{onCanceled:t[0]||(t[0]=function(t){return e.$router.go(-1)}),onSubmitted:j.commitDelete,submitText:"Delete Log Entry"},null,8,["onSubmitted"])])}var g=n("1da1"),j=n("5530"),h=(n("96cf"),n("7db0"),n("d3b7"),n("0481"),n("4069"),n("07ac"),n("5502")),v=n("e328"),x=n("033d"),y={name:"ConfirmDeleteNextAction",props:{uuid:{required:!0,type:String},id:{required:!0,type:String}},data:function(){return{errors:{}}},computed:Object(j["a"])(Object(j["a"])({},Object(h["b"])({group:"groups/currentItemOrNew"})),{},{application:function(){return this.group.expert_panel},nextAction:function(){var e=this;if(!this.application.next_actions)return{};var t=this.application.next_actions.find((function(t){return t.id==e.id}));return t||{}},flattenedErrors:function(){return Object.values(this.errors).flat()},targetDate:function(){return Object(v["b"])(this.nextAction.targetDate)}}),watch:{nextAction:{immediate:!0,handler:function(){this.nextAction.id||this.$router.go(-1)}}},methods:{formatDate:function(e){return Object(v["b"])(e)},commitDelete:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("applications/deleteNextAction",{application:e.application,nextAction:e.nextAction});case 3:e.$router.go(-1),t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),Object(x["a"])(t.t0)&&(e.errors=t.t0.response.data.errors),e.errors={a:t.t0.message};case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},E=(n("9ce5"),n("6b0d")),k=n.n(E);const w=k()(y,[["render",O]]);t["default"]=w}}]);
//# sourceMappingURL=confirm-delete-log-entry.6a29b803.js.map