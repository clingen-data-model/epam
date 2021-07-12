(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["confirm-delete-log-entry"],{"033d":function(e,t,r){"use strict";t["a"]=function(e){return e.response&&422==e.response.status&&e.response.data.errors}},"0481":function(e,t,r){"use strict";var n=r("23e7"),o=r("a2bf"),c=r("7b0b"),a=r("50c4"),i=r("a691"),l=r("65f0");n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=c(this),r=a(t.length),n=l(t,0);return n.length=o(n,t,t,r,0,void 0===e?1:i(e)),n}})},"33d8":function(e,t,r){"use strict";r.r(t);r("a4d3"),r("e01a"),r("b0c0");var n=r("7a23"),o=Object(n["createVNode"])("h2",null,"You are about to delete the following log entry:",-1),c={class:"border-y py-2"},a={key:0,class:"ml-4 mt-2 mb-4 text-gray-700 text-sm"},i=Object(n["createVNode"])("div",null,"This can not be undone. Are you sure you want to continue?",-1),l={key:0,class:"bg-red-200 text-red-900 rounded p-2 my-2"};function s(e,t,r,s,u,d){var b=Object(n["resolveComponent"])("button-row");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[o,Object(n["createVNode"])("div",c,[Object(n["createVNode"])("blockquote",null,[Object(n["createVNode"])("div",{innerHTML:d.logEntry.description},null,8,["innerHTML"])]),d.logEntry.causer?(Object(n["openBlock"])(),Object(n["createBlock"])("div",a,"Logged by "+Object(n["toDisplayString"])(d.logEntry.causer.name)+", "+Object(n["toDisplayString"])(d.logDate),1)):Object(n["createCommentVNode"])("",!0)]),i,d.flattenedErrors.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])("div",l,[Object(n["createVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(d.flattenedErrors,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{key:t},Object(n["toDisplayString"])(e),1)})),128))])])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(b,{onCanceled:t[1]||(t[1]=function(t){return e.$router.go(-1)}),onSubmitted:d.deleteEntry,submitText:"Delete Log Entry"},null,8,["onSubmitted"])])}r("7db0"),r("0481"),r("4069"),r("07ac"),r("96cf");var u=r("1da1"),d=r("5530"),b=r("5502"),p=r("e328"),g=r("033d"),f={name:"ConfirmDeleteLogEntry",props:{id:{required:!0,type:String}},data:function(){return{errors:{}}},computed:Object(d["a"])(Object(d["a"])({},Object(b["b"])({application:"applications/currentItem"})),{},{logEntry:function(){var e=this,t=this.application.log_entries.find((function(t){return t.id==e.id}));return t||{}},logDate:function(){return Object(p["a"])(this.logEntry.properties.log_date)},flattenedErrors:function(){return Object.values(this.errors).flat()}}),watch:{logEntry:{immediate:!0,handler:function(){console.info("logEntry watch handler",this.logEntry.id),this.logEntry.id||this.$router.go(-1)}}},methods:{deleteEntry:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("applications/deleteLogEntry",{application:e.application,logEntry:e.logEntry});case 3:e.$router.go(-1),t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),Object(g["a"])(t.t0)&&(e.errors=t.t0.response.data.errors),e.errors={a:t.t0.message};case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}};r("9b6b");f.render=s;t["default"]=f},4069:function(e,t,r){var n=r("44d2");n("flat")},"9b6b":function(e,t,r){"use strict";r("a5cd")},a2bf:function(e,t,r){"use strict";var n=r("e8b5"),o=r("50c4"),c=r("0366"),a=function(e,t,r,i,l,s,u,d){var b,p=l,g=0,f=!!u&&c(u,d,3);while(g<i){if(g in r){if(b=f?f(r[g],g,t):r[g],s>0&&n(b))p=a(e,t,b,o(b.length),p,s-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[p]=b}p++}g++}return p};e.exports=a},a5cd:function(e,t,r){}}]);
//# sourceMappingURL=confirm-delete-log-entry.f5dad62c.js.map