(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b23f"],{bf05:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["createTextVNode"])("Admin"),i=Object(r["createElementVNode"])("h1",null,"Invites",-1),o=["onClick"],c=Object(r["createElementVNode"])("p",null,"This cannot be undone.",-1),s=Object(r["createElementVNode"])("p",null,"Do you want to reset the invite?",-1);function l(e,t,n,l,u,d){var b=Object(r["resolveComponent"])("note"),m=Object(r["resolveComponent"])("data-table"),p=Object(r["resolveComponent"])("button-row"),f=Object(r["resolveComponent"])("modal-dialog"),v=Object(r["resolveDirective"])("remaining-height");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createVNode"])(b,null,{default:Object(r["withCtx"])((function(){return[a]})),_:1}),i,Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createBlock"])(m,{data:d.itemProvider,fields:u.fields,sort:u.tableSort,"onUpdate:sort":t[1]||(t[1]=function(e){return u.tableSort=e}),class:"text-sm",paginated:"",ref:"dataTable"},{header:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return u.searchTerm=e}),placeholder:"filter by name or email",class:"mb-2"},null,512),[[r["vModelText"],u.searchTerm]])]})),"cell-reset":Object(r["withCtx"])((function(e){var t=e.item;return[t.redeemed_at?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,class:"btn btn-xs",onClick:function(e){return d.confirmReset(t)}}," Reset ",8,o)):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["data","fields","sort"])),[[v]]),(Object(r["openBlock"])(),Object(r["createBlock"])(r["Teleport"],{to:"body"},[Object(r["createVNode"])(f,{title:"Reset Invite",modelValue:u.showConfirmation,"onUpdate:modelValue":t[3]||(t[3]=function(e){return u.showConfirmation=e})},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("p",null,"You are about to reset the invite for "+Object(r["toDisplayString"])(u.resettingInvite.first_name)+" "+Object(r["toDisplayString"])(u.resettingInvite.last_name)+".",1),c,s,Object(r["createVNode"])(p,{"submit-text":"Reset Invite",onSubmitted:t[2]||(t[2]=function(e){return d.resetInvite(u.resettingInvite)})})]})),_:1},8,["modelValue"])]))])}var u=n("1da1"),d=(n("96cf"),n("a9e3"),n("b0c0"),n("c740"),n("db04")),b=n("85b1"),m={name:"InviteAdmin",props:{},data:function(){return{resettingInvite:{},tableSort:{field:"id",desc:!1},invites:[],showConfirmation:!1,searchTerm:null,fields:[{name:"id",sortable:!0,type:Number},{name:"person.name",label:"Name",sortable:!0,type:String},{name:"person.email",label:"Email",sortable:!0,type:String},{name:"redeemed_at",sortable:!0,type:Date},{name:"inviter",sortable:!0,type:String,resolveValue:function(e){return e.inviter?e.inviter.name:null}},{name:"code",sortable:!1,type:String},{name:"reset",sortable:!1,type:String}]}},watch:{searchTerm:function(){this.triggerSearch()}},methods:{itemProvider:function(e,t,n,r){var a=this;return Object(u["a"])(regeneratorRuntime.mark((function i(){var o,c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return o={page:e,page_size:t,"sort[field]":n.field.name,"sort[dir]":n.desc?"DESC":"ASC","where[keyword]":a.searchTerm},i.next=3,d["a"].get("/api/people/invites",{params:o}).then((function(e){return e.data}));case 3:return c=i.sent,r(c.meta.total),i.abrupt("return",c.data);case 6:case"end":return i.stop()}}),i)})))()},resetInvite:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d["a"].put("/api/people/invites/".concat(e.code,"/reset"));case 3:r=n.sent,a=t.invites.findIndex((function(t){return t.id==e.id})),-1==a&&alert("what??"),t.invites[a]=r.data,n.next=14;break;case 9:if(n.prev=9,n.t0=n["catch"](0),!Object(d["b"])(n.t0)){n.next=14;break}return alert("Problem resetting invite!"),n.abrupt("return");case 14:t.showConfirmation=!1;case 15:case"end":return n.stop()}}),n,null,[[0,9]])})))()},confirmReset:function(e){this.resettingInvite=e,this.showConfirmation=!0}},mounted:function(){var e=this;this.triggerSearch=Object(b["a"])((function(){return e.$refs.dataTable.getItems()}),500)}},p=n("6b0d"),f=n.n(p);const v=f()(m,[["render",l]]);t["default"]=v}}]);
//# sourceMappingURL=chunk-2d21b23f.3c83b2b7.js.map