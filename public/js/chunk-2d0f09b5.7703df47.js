(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f09b5"],{"9ca6":function(e,r,n){"use strict";n.r(r);n("b0c0");var t=n("7a23"),o={class:"text-lg border-b py-2"};function a(e,r,n,a,l,s){var i=Object(t["z"])("input-row"),u=Object(t["z"])("button-row");return Object(t["r"])(),Object(t["e"])("div",null,[Object(t["h"])("h3",o,"Edit - "+Object(t["C"])(e.person.name),1),Object(t["h"])(i,{label:"First Name",errors:l.errors.first_name,modelValue:l.workingPerson.first_name,"onUpdate:modelValue":r[1]||(r[1]=function(e){return l.workingPerson.first_name=e})},null,8,["errors","modelValue"]),Object(t["h"])(i,{label:"Last Name",errors:l.errors.last_name,modelValue:l.workingPerson.last_name,"onUpdate:modelValue":r[2]||(r[2]=function(e){return l.workingPerson.last_name=e})},null,8,["errors","modelValue"]),Object(t["h"])(i,{label:"Email",errors:l.errors.email,modelValue:l.workingPerson.email,"onUpdate:modelValue":r[3]||(r[3]=function(e){return l.workingPerson.email=e})},null,8,["errors","modelValue"]),Object(t["h"])(i,{label:"Phone",errors:l.errors.phone,modelValue:l.workingPerson.phone,"onUpdate:modelValue":r[4]||(r[4]=function(e){return l.workingPerson.phone=e})},null,8,["errors","modelValue"]),Object(t["h"])(u,{onCancelClicked:s.handleCancel,onSubmitClicked:s.handleSaved,submitText:"Save"},null,8,["onCancelClicked","onSubmitClicked"])])}n("96cf");var l=n("1da1"),s=n("5530"),i=n("5502"),u=n("033d"),c={props:{},data:function(){return{workingPerson:{first_name:null,last_name:null,email:null,phone:null},errors:{}}},computed:Object(s["a"])({},Object(i["b"])({person:"people/currentItem"})),watch:{person:{deep:!0,immediate:!0,handler:function(){this.syncWorkingPerson()}}},methods:{syncWorkingPerson:function(){this.workingPerson=this.person.attributes},backToDetail:function(){this.$router.push({name:"person-detail",params:{uuid:this.person.uuid}})},handleCancel:function(){this.syncWorkingPerson(),this.backToDetail()},handleSaved:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$store.dispatch("people/updateAttributes",{uuid:e.person.uuid,attributes:e.workingPerson});case 3:e.backToDetail(),r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),Object(u["a"])(r.t0)&&(e.errors=r.t0.response.data.errors);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()}},mounted:function(){}};c.render=a;r["default"]=c}}]);
//# sourceMappingURL=chunk-2d0f09b5.7703df47.js.map