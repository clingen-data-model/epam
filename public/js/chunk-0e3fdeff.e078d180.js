(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e3fdeff"],{"033d":function(e,t,n){"use strict";t["a"]=function(e){return e.response&&422==e.response.status&&e.response.data.errors}},4848:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),i={key:0},a={key:0},s={key:1},r={key:1},c={key:2,class:"absolute top-0 left-0 right-0 bottom-0"};function u(e,t,n,u,l,d){var f=Object(o["A"])("card"),p=Object(o["A"])("input-row"),b=Object(o["A"])("button-row");return Object(o["s"])(),Object(o["f"])("div",null,[d.codeIsValid?Object(o["g"])("",!0):(Object(o["s"])(),Object(o["f"])(f,{key:0,title:l.verifying?"Loading COI Form":"COI Form not found"},{default:Object(o["L"])((function(){return[l.verifying?Object(o["g"])("",!0):(Object(o["s"])(),Object(o["f"])("div",i,"We couldn't find this COI."))]})),_:1},8,["title"])),d.codeIsValid?(Object(o["s"])(),Object(o["f"])(f,{key:1,title:d.coiTitle,class:"w-3/4 mx-auto relative"},{default:Object(o["L"])((function(){return[l.saved?(Object(o["s"])(),Object(o["f"])("div",a," Thanks for completing the conflict of interest form for "+Object(o["D"])(e.application.name)+"! ",1)):(Object(o["s"])(),Object(o["f"])("div",s,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(l.survey.questions,(function(e){return Object(o["s"])(),Object(o["f"])("div",{key:e.name},[Object(o["i"])(o["b"],{name:"slide-fade-down"},{default:Object(o["L"])((function(){return[Object(o["M"])(Object(o["i"])(p,{label:e.question_text,errors:l.errors[e.name],vertical:!0},{default:Object(o["L"])((function(){return["text"==e.type?Object(o["M"])((Object(o["s"])(),Object(o["f"])("textarea",{key:0,class:"w-full h-24","onUpdate:modelValue":function(t){return l.response[e.name]=t},name:e.name},null,8,["onUpdate:modelValue","name"])),[[o["I"],l.response[e.name]]]):Object(o["g"])("",!0),"multiple-choice"==e.type?(Object(o["s"])(),Object(o["f"])("div",r,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(e.options,(function(t){return Object(o["s"])(),Object(o["f"])("label",{key:t.value,class:"block"},[Object(o["M"])(Object(o["i"])("input",{type:"radio",value:t.value,name:e.name,"onUpdate:modelValue":function(t){return l.response[e.name]=t}},null,8,["value","name","onUpdate:modelValue"]),[[o["G"],l.response[e.name]]]),Object(o["h"])(" "+Object(o["D"])(t.label),1)])})),128))])):Object(o["g"])("",!0),"string"==e.type?Object(o["M"])((Object(o["s"])(),Object(o["f"])("input",{key:2,type:"text","onUpdate:modelValue":function(t){return l.response[e.name]=t},name:e.name},null,8,["onUpdate:modelValue","name"])),[[o["I"],l.response[e.name]]]):Object(o["g"])("",!0)]})),_:2},1032,["label","errors"]),[[o["J"],!e.show||l.response[e.show.name]==e.show.value]])]})),_:2},1024)])})),128))])),l.saving?(Object(o["s"])(),Object(o["f"])("div",c," Saving your response... ")):Object(o["g"])("",!0),Object(o["i"])(b,{"show-cancel":!1,onSubmitClicked:t[1]||(t[1]=function(e){return d.storeResponse()})})]})),_:1},8,["title"])):Object(o["g"])("",!0)])}var l=n("f0d7"),d=(n("4160"),n("d81d"),n("159b"),n("bee2")),f=n("262e"),p=n("2caf"),b=n("d4ec"),m=function e(t){Object(b["a"])(this,e),this.question_text=t.question,this.name=t.name,this.options=t.options,this.validationRules=t.validation,this.type=t.type,this.show=t.show},h=function(e){Object(f["a"])(n,e);var t=Object(p["a"])(n);function n(e){var o;return Object(b["a"])(this,n),o=t.call(this,e),o.type="multiple-choice",o.options=[{label:"Yes",value:1},{label:"No",value:0}],o}return n}(m);function O(e){return"yes-no"==e.type?new h(e):new m(e)}var j=function(){function e(t){Object(b["a"])(this,e),this._name=t.name,this._questions=t.questions.map((function(e){return O(e)}))}return Object(d["a"])(e,[{key:"responseIsValid",value:function(e){return!0}},{key:"getResponseTemplate",value:function(){var e={};return this.questions.forEach((function(t){e[t.name]=null})),e}},{key:"name",get:function(){return this._name}},{key:"questions",get:function(){return this._questions}}]),e}(),v=j,y=n("f96b"),g=n("033d"),w=new v(l),_={props:{code:{required:!0,type:String}},data:function(){return{coiDef:l,survey:w,response:w.getResponseTemplate(),errors:{},epName:null,verifying:!1,saved:!1,saving:!1}},computed:{codeIsValid:function(){return null!==this.epName},coiTitle:function(){return w.name+" for "+this.epName}},methods:{verifyCode:function(){var e=this;this.verifying=!0,y["a"].get("/api/coi/".concat(this.code,"/application")).then((function(t){e.epName=t.data.name})).then((function(){e.verifying=!1}))},storeResponse:function(){var e=this;this.saving=!0,y["a"].post("/api/coi/".concat(this.code),this.response).then((function(){e.saved=!0,setTimeout((function(){return e.$router.push({name:"home"})}),3e3)})).catch((function(t){Object(g["a"])(t)&&(e.errors=t.response.data.errors)})).then((function(){e.saving=!1}))}},mounted:function(){this.verifyCode()}};_.render=u;t["default"]=_},f0d7:function(e){e.exports=JSON.parse('{"name":"Conflict of Interest Survey","questions":[{"name":"email","question":"Email address","type":"string","validation":"required|email","placeholder":"email@example.com"},{"name":"first_name","question":"First Name","type":"string","validation":"required|max:255|min:2","placeholder":"First"},{"name":"last_name","question":"Last Name","type":"string","validation":"required|max:255|min:2","placeholder":"Last"},{"name":"work_fee_lab","question":"Do you work for a laboratory that offers fee-for-service testing related to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_gd_in_ep","question":"Have you made substantial contributions to the literature implicating a gene:disease relationship that relates to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_genes","question":"Please list the genes:","type":"text","validation":"required_if:contributions_to_gd_in_ep,1","show":{"name":"contributions_to_gd_in_ep","value":1}},{"name":"independent_efforts","question":"Do you have any other existing or planned independent efforts that will potentially overlap with the scope of your ClinGen work? If so, please describe and also send an email describing the project(s) to the co-chairs and coordinator:","type":"text","validation":"required"},{"name":"coi","question":"Please disclose any other relevant conflicts of interest (e.g. patents, intellectual property ownership, or paid consultancies related to any variants or genes associated with the work of your Expert Panel):","type":"text","validation":"required"}]}')}}]);
//# sourceMappingURL=chunk-0e3fdeff.e078d180.js.map