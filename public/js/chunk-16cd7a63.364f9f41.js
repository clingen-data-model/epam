(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16cd7a63"],{"24df":function(e,t,r){"use strict";r("dc7d")},5257:function(e,t,r){"use strict";r("4de4"),r("caad"),r("b64b"),r("ac1f"),r("2532"),r("5319");var c=r("5530"),n=r("6c02"),a=r("7a23");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(n["d"])(),r=Object(n["c"])();e=e||{field:"name",desc:!1};var l=Object(a["computed"])({immediate:!0,get:function(){return Object.keys(r.query).includes("sort-field")?{field:r.query["sort-field"],desc:Boolean(parseInt(r.query["sort-desc"]))}:e},set:function(e){var n={"sort-field":e.field,"sort-desc":e.desc?1:0},a=Object(c["a"])(Object(c["a"])({},r.query),n);t.replace({path:r.path,query:a})}}),o=Object(a["computed"])({set:function(e){var n=r.query,a=r.path,l=Object(c["a"])({},n);e?l=Object(c["a"])(Object(c["a"])({},n),{filter:e}):delete l.filter,t.replace({path:a,query:l})},get:function(){return r.query.filter},immediate:!0});return{sort:l,filter:o}}},dc7d:function(e,t,r){},df40:function(e,t,r){"use strict";r.r(t);r("4de4");var c=r("7a23"),n=Object(c["createVNode"])("h1",null,"Mail Log",-1),a=Object(c["createTextVNode"])(" Filter: ");function l(e,t,r,l,o,i){var u=Object(c["resolveComponent"])("data-table"),b=Object(c["resolveComponent"])("dictionary-row"),d=Object(c["resolveComponent"])("modal-dialog");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[n,a,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.filter=e})},null,512),[[c["vModelText"],l.filter]]),Object(c["createVNode"])(u,{fields:o.fields,data:o.data,"filter-term":l.filter,"row-class":"cursor-pointer","row-click-handler":i.showMailDetail,sort:l.sort,"onUpdate:sort":t[2]||(t[2]=function(e){return l.sort=e})},{"cell-to":Object(c["withCtx"])((function(e){var t=e.item;return[Object(c["createVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(t.to,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:t},Object(c["toDisplayString"])(t),1)})),128))])]})),_:1},8,["fields","data","filter-term","row-click-handler","sort"]),Object(c["createVNode"])(d,{modelValue:o.showDetail,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.showDetail=e})},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{label:"To","label-class":"font-bold",class:"mb-1 border-b"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.currentEmail.to,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t},Object(c["toDisplayString"])(t),1)})),128))]})),_:1}),Object(c["createVNode"])(b,{label:"From","label-class":"font-bold",class:"mb-1 border-b"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.currentEmail.from,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t},Object(c["toDisplayString"])(t),1)})),128))]})),_:1}),Object(c["createVNode"])(b,{label:"Cc","label-class":"font-bold",class:"mb-1 border-b"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.currentEmail.cc,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:t},Object(c["toDisplayString"])(t),1)})),128))])]})),_:1}),Object(c["createVNode"])(b,{label:"Subject","label-class":"font-bold",class:"mb-1 border-b"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(o.currentEmail.subject),1)]})),_:1}),Object(c["createVNode"])(b,{label:"Body","label-class":"font-bold",class:"mb-1"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("div",{innerHTML:o.currentEmail.body,class:"email-body w-3/4"},null,8,["innerHTML"])]})),_:1})]})),_:1},8,["modelValue"])])}r("a15b"),r("b64b"),r("96cf");var o=r("1da1"),i=r("f96b"),u=r("e328"),b=r("5257"),d={props:{},setup:function(){var e=Object(b["a"])({field:"created_at",desc:!0}),t=e.sort,r=e.filter;return{sort:t,filter:r}},data:function(){return{showDetail:!1,fields:[{name:"to",sortable:!0,type:Array,resolveValue:function(e){var t=Object.keys(e.to);return 0==t.length?"":1==t.length?t[0]:t.join("; ")}},{name:"subject",sortable:!0,type:String},{name:"created_at",label:"Sent at",sortable:!0,resolveValue:function(e){return Object(u["b"])(e.created_at)},resolveSort:function(e){return e.created_at},type:String}],data:[],currentEmail:{}}},computed:{},methods:{getMailLog:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i["a"].get("/api/mail-log").then((function(t){e.data=t.data}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),alert(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},showMailDetail:function(e){this.currentEmail=e,this.showDetail=!0}},mounted:function(){this.getMailLog()}};r("24df");d.render=l;t["default"]=d}}]);
//# sourceMappingURL=chunk-16cd7a63.364f9f41.js.map