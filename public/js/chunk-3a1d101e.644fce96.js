(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a1d101e"],{"033d":function(e,r,n){"use strict";r["a"]=function(e){return e.response&&422==e.response.status&&e.response.data.errors}},"9ca6":function(e,r,n){"use strict";n.r(r);n("b0c0");var t=n("7a23"),o={class:"text-lg border-b py-2"};function a(e,r,n,a,s,i){var l=Object(t["A"])("input-row"),u=Object(t["A"])("button-row");return Object(t["s"])(),Object(t["f"])("div",null,[Object(t["i"])("h3",o,"Edit - "+Object(t["D"])(e.person.name),1),Object(t["i"])(l,{label:"First Name",errors:s.errors.first_name,modelValue:s.workingPerson.first_name,"onUpdate:modelValue":r[1]||(r[1]=function(e){return s.workingPerson.first_name=e})},null,8,["errors","modelValue"]),Object(t["i"])(l,{label:"Last Name",errors:s.errors.last_name,modelValue:s.workingPerson.last_name,"onUpdate:modelValue":r[2]||(r[2]=function(e){return s.workingPerson.last_name=e})},null,8,["errors","modelValue"]),Object(t["i"])(l,{label:"Email",errors:s.errors.email,modelValue:s.workingPerson.email,"onUpdate:modelValue":r[3]||(r[3]=function(e){return s.workingPerson.email=e})},null,8,["errors","modelValue"]),Object(t["i"])(l,{label:"Phone",errors:s.errors.phone,modelValue:s.workingPerson.phone,"onUpdate:modelValue":r[4]||(r[4]=function(e){return s.workingPerson.phone=e})},null,8,["errors","modelValue"]),Object(t["i"])(u,{onCancelClicked:i.handleCancel,onSubmitClicked:i.handleSaved,submitText:"Save"},null,8,["onCancelClicked","onSubmitClicked"])])}n("96cf");var s=n("1da1"),i=n("5530"),l=n("5502"),u=n("033d"),c={props:{},data:function(){return{workingPerson:{first_name:null,last_name:null,email:null,phone:null},errors:{}}},computed:Object(i["a"])({},Object(l["b"])({person:"people/currentItem"})),watch:{person:{deep:!0,immediate:!0,handler:function(){this.syncWorkingPerson()}}},methods:{syncWorkingPerson:function(){this.workingPerson=this.person.attributes},backToDetail:function(){this.$router.push({name:"person-detail",params:{uuid:this.person.uuid}})},handleCancel:function(){this.syncWorkingPerson(),this.backToDetail()},handleSaved:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$store.dispatch("people/updateAttributes",{uuid:e.person.uuid,attributes:e.workingPerson});case 3:e.backToDetail(),r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),Object(u["a"])(r.t0)&&(e.errors=r.t0.response.data.errors);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()}},mounted:function(){}};c.render=a;r["default"]=c}}]);
//# sourceMappingURL=chunk-3a1d101e.644fce96.js.map