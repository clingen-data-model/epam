(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d92"],{"73ff":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r=Object(n["createTextVNode"])(" Edit ");function c(e,t,o,c,u,a){var i=Object(n["resolveComponent"])("router-link"),d=Object(n["resolveComponent"])("dictionary-row"),l=Object(n["resolveComponent"])("card"),s=Object(n["resolveComponent"])("router-view"),p=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(l,{title:a.cardTitle},{"header-right":Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{to:"/people/".concat(o.uuid,"/edit"),class:"btn btn-xs"},{default:Object(n["withCtx"])((function(){return[r]})),_:1},8,["to"])]})),default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(["name","email","phone"],(function(t){return Object(n["createVNode"])(d,{key:t,label:t},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.person[t]),1)]})),_:2},1032,["label"])})),64)),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(["created_at","updated_at"],(function(t){return Object(n["createVNode"])(d,{key:t,label:t},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(c.formatDate(e.person[t])),1)]})),_:2},1032,["label"])})),64))]})),_:1},8,["title"]),Object(n["createVNode"])(p,{modelValue:a.showModal,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.showModal=e})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{name:"modal"})]})),_:1},8,["modelValue"])])}o("b0c0");var u=o("5530"),a=o("5502"),i=o("e328"),d={props:{uuid:{required:!0,type:String}},data:function(){return{}},watch:{uuid:{immediate:!0,handler:function(){this.$store.dispatch("people/getPerson",{uuid:this.uuid})}}},computed:Object(u["a"])(Object(u["a"])({},Object(a["b"])({person:"people/currentItem"})),{},{cardTitle:function(){return"Person: "+this.person.name},showModal:{get:function(){return this.$route.meta.showModal},set:function(e){e&&this.$router.push({name:"person-edit",params:{uuid:this.person.uuid}}),this.$router.push({name:"person-detail",params:{uuid:this.person.uuid}})}}}),methods:{},setup:function(){return{formatDate:i["b"]}},mounted:function(){this.$store.dispatch("people/getPerson",{uuid:this.uuid})}};d.render=c;t["default"]=d}}]);
//# sourceMappingURL=chunk-2d0d6d92.9edb0ffb.js.map