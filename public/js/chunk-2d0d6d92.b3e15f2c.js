(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d92"],{"73ff":function(e,t,n){"use strict";n.r(t);var u=n("7a23"),r=Object(u["h"])(" Edit ");function o(e,t,n,o,i,c){var a=Object(u["A"])("router-link"),d=Object(u["A"])("dictionary-row"),s=Object(u["A"])("card"),l=Object(u["A"])("router-view"),b=Object(u["A"])("modal-dialog");return Object(u["s"])(),Object(u["f"])("div",null,[Object(u["i"])(s,{title:c.cardTitle},{"header-right":Object(u["L"])((function(){return[Object(u["i"])(a,{to:"/people/".concat(n.uuid,"/edit"),class:"btn btn-xs"},{default:Object(u["L"])((function(){return[r]})),_:1},8,["to"])]})),default:Object(u["L"])((function(){return[(Object(u["s"])(),Object(u["f"])(u["a"],null,Object(u["y"])(["name","email","phone"],(function(t){return Object(u["i"])(d,{key:t,label:t},{default:Object(u["L"])((function(){return[Object(u["h"])(Object(u["D"])(e.person[t]),1)]})),_:2},1032,["label"])})),64)),(Object(u["s"])(),Object(u["f"])(u["a"],null,Object(u["y"])(["created_at","updated_at"],(function(t){return Object(u["i"])(d,{key:t,label:t},{default:Object(u["L"])((function(){return[Object(u["h"])(Object(u["D"])(o.formatDate(e.person[t])),1)]})),_:2},1032,["label"])})),64))]})),_:1},8,["title"]),Object(u["i"])(b,{modelValue:c.showModal,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.showModal=e})},{default:Object(u["L"])((function(){return[Object(u["i"])(l,{name:"modal"})]})),_:1},8,["modelValue"])])}n("b0c0");var i=n("5530"),c=n("5502"),a=n("e328"),d={props:{uuid:{required:!0,type:String}},data:function(){return{}},watch:{uuid:{immediate:!0,handler:function(){this.$store.dispatch("people/getPerson",{uuid:this.uuid})}}},computed:Object(i["a"])(Object(i["a"])({},Object(c["b"])({person:"people/currentItem"})),{},{cardTitle:function(){return"Person: "+this.person.name},showModal:{get:function(){return this.$route.meta.showModal},set:function(e){e&&this.$router.push({name:"person-edit",params:{uuid:this.person.uuid}}),this.$router.push({name:"person-detail",params:{uuid:this.person.uuid}})}}}),methods:{},setup:function(){return{formatDate:a["b"]}},mounted:function(){this.$store.dispatch("people/getPerson",{uuid:this.uuid})}};d.render=o;t["default"]=d}}]);
//# sourceMappingURL=chunk-2d0d6d92.b3e15f2c.js.map