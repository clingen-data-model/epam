(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e3fdeff"],{"033d":function(e,t,n){"use strict";t["a"]=function(e){return e.response&&422==e.response.status&&e.response.data.errors}},4848:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),i={key:0},a={key:0},s={key:0},r={key:1,class:"relative"},c={key:1},u=Object(o["h"])(" Saving... ");function l(e,t,n,l,d,f){var p=Object(o["A"])("card"),b=Object(o["A"])("input-row"),m=Object(o["A"])("button-row");return Object(o["s"])(),Object(o["f"])("div",null,[f.codeIsValid?Object(o["g"])("",!0):(Object(o["s"])(),Object(o["f"])(p,{key:0,title:d.verifying?"Loading COI Form":"COI Form not found"},{default:Object(o["L"])((function(){return[d.verifying?Object(o["g"])("",!0):(Object(o["s"])(),Object(o["f"])("div",i,"We couldn't find this COI."))]})),_:1},8,["title"])),f.codeIsValid?(Object(o["s"])(),Object(o["f"])(p,{key:1,title:f.coiTitle,class:"w-3/4 mx-auto relative"},{default:Object(o["L"])((function(){return[d.saved?(Object(o["s"])(),Object(o["f"])("div",a,[Object(o["h"])(" Thanks for completing the conflict of interest form for "+Object(o["D"])(d.epName)+"! ",1),e.$store.getters.isAuthed?(Object(o["s"])(),Object(o["f"])("small",s,[Object(o["i"])("p",null,"You'll be redirected back in "+Object(o["D"])(d.redirectCountdown)+" seconds.",1),Object(o["i"])("button",{onClick:t[1]||(t[1]=function(t){return e.$router.go(-1)}),class:"text-blue-500"},"Go back")])):Object(o["g"])("",!0)])):(Object(o["s"])(),Object(o["f"])("div",r,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(d.survey.questions,(function(e){return Object(o["s"])(),Object(o["f"])("div",{key:e.name,class:e.class},[Object(o["i"])(o["b"],{name:"slide-fade-down"},{default:Object(o["L"])((function(){return[Object(o["M"])(Object(o["i"])(b,{label:e.question_text,errors:d.errors[e.name],vertical:!0},{default:Object(o["L"])((function(){return["text"==e.type?Object(o["M"])((Object(o["s"])(),Object(o["f"])("textarea",{key:0,class:"w-full h-24","onUpdate:modelValue":function(t){return d.response[e.name]=t},name:e.name},null,8,["onUpdate:modelValue","name"])),[[o["I"],d.response[e.name]]]):Object(o["g"])("",!0),"multiple-choice"==e.type?(Object(o["s"])(),Object(o["f"])("div",c,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(e.options,(function(t){return Object(o["s"])(),Object(o["f"])("label",{key:t.value,class:"block"},[Object(o["M"])(Object(o["i"])("input",{type:"radio",value:t.value,name:e.name,"onUpdate:modelValue":function(t){return d.response[e.name]=t}},null,8,["value","name","onUpdate:modelValue"]),[[o["G"],d.response[e.name]]]),Object(o["h"])(" "+Object(o["D"])(t.label),1)])})),128))])):Object(o["g"])("",!0),"string"==e.type?Object(o["M"])((Object(o["s"])(),Object(o["f"])("input",{key:2,type:"text","onUpdate:modelValue":function(t){return d.response[e.name]=t},name:e.name},null,8,["onUpdate:modelValue","name"])),[[o["I"],d.response[e.name]]]):Object(o["g"])("",!0)]})),_:2},1032,["label","errors"]),[[o["J"],f.showQuestion(e)]])]})),_:2},1024)],2)})),128)),Object(o["i"])(m,{"show-cancel":!1,onSubmitClicked:t[2]||(t[2]=function(e){return f.storeResponse()})},{default:Object(o["L"])((function(){return[d.saving?Object(o["z"])(e.$slots,"default",{key:0},(function(){return[u]})):Object(o["g"])("",!0)]})),_:1})]))]})),_:1},8,["title"])):Object(o["g"])("",!0)])}n("c975"),n("96cf");var d=n("1da1"),f=n("f0d7"),p=(n("4160"),n("d81d"),n("159b"),n("bee2")),b=n("262e"),m=n("2caf"),h=n("d4ec"),v=function e(t){Object(h["a"])(this,e),this.question_text=t.question,this.name=t.name,this.options=t.options,this.validationRules=t.validation,this.type=t.type,this.show=t.show,this.class=t.class},O=function(e){Object(b["a"])(n,e);var t=Object(m["a"])(n);function n(e){var o;return Object(h["a"])(this,n),o=t.call(this,e),o.type="multiple-choice",o.options=[{label:"Yes",value:1},{label:"No",value:0}],o}return n}(v);function j(e){return"yes-no"==e.type?new O(e):new v(e)}var y=function(){function e(t){Object(h["a"])(this,e),this._name=t.name,this._questions=t.questions.map((function(e){return j(e)}))}return Object(p["a"])(e,[{key:"responseIsValid",value:function(e){return!0}},{key:"getResponseTemplate",value:function(){var e={};return this.questions.forEach((function(t){e[t.name]=null})),e}},{key:"name",get:function(){return this._name}},{key:"questions",get:function(){return this._questions}}]),e}(),g=y,w=n("f96b"),_=n("033d"),k=new g(f),q={props:{code:{required:!0,type:String}},data:function(){return{coiDef:f,survey:k,response:k.getResponseTemplate(),errors:{},epName:null,verifying:!1,saved:!1,saving:!1,redirectCountdown:5}},computed:{codeIsValid:function(){return null!==this.epName},coiTitle:function(){return k.name+" for "+this.epName}},methods:{showQuestion:function(e){return!e.show||(Array.isArray(e.show.value)?(console.log(e.show.value),e.show.value.indexOf(this.response[e.show.name])>-1):this.response[e.show.name]==e.show.value)},verifyCode:function(){var e=this;this.verifying=!0,w["a"].get("/api/coi/".concat(this.code,"/application")).then((function(t){e.epName=t.data.name})).then((function(){e.verifying=!1}))},storeResponse:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.saving=!0,t.prev=1,t.next=4,e.$store.dispatch("storeCoi",{code:e.code,coiData:e.response});case 4:e.saved=!0,e.$store.getters.isAuthed&&(setInterval((function(){e.redirectCountdown--}),1e3),setTimeout((function(){e.$router.go(-1)}),5e3)),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),Object(_["a"])(t.t0)&&(e.errors=t.t0.response.data.errors);case 11:e.saving=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},mounted:function(){this.verifyCode()}};q.render=l;t["default"]=q},f0d7:function(e){e.exports=JSON.parse('{"name":"Conflict of Interest Survey","questions":[{"name":"first_name","question":"First Name","type":"string","validation":"required|max:255|min:2","placeholder":"First"},{"name":"last_name","question":"Last Name","type":"string","validation":"required|max:255|min:2","placeholder":"Last"},{"name":"email","question":"Email address","type":"string","validation":"required|email","placeholder":"email@example.com"},{"name":"work_fee_lab","question":"Do you work for a laboratory that offers fee-for-service testing related to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_gd_in_ep","question":"Have you made substantial contributions to the literature implicating a gene:disease relationship that relates to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_genes","question":"Please list the genes:","type":"text","validation":"required_if:contributions_to_gd_in_ep,1","show":{"name":"contributions_to_gd_in_ep","value":1},"class":"ml-4"},{"name":"independent_efforts","question":"Do you have any other existing or planned independent efforts that will potentially overlap with the scope of your ClinGen work?","type":"multiple-choice","options":[{"label":"Yes","value":1},{"label":"No","value":0},{"label":"Unsure","value":2}],"validation":"required"},{"name":"independent_efforts_details","question":"Please describe and also send an email describing the project(s) to the co-chairs and coordinator:","type":"text","valiation":"required_if:independent_efforts,1","show":{"name":"independent_efforts","value":[1,2]},"class":"ml-4"},{"name":"coi","question":"Do you have any other potential conflicts of interest to disclose (e.g. patents, intellectual property ownership, or paid consultancies related to any variants or genes associated with the work of your Expert Panel):","type":"multiple-choice","options":[{"label":"Yes","value":1},{"label":"No","value":0},{"label":"Unsure","value":2}],"validation":"required"},{"name":"coi_details","question":"Please describe:","type":"text","valiation":"required_if:coi,1","show":{"name":"coi","value":[1,2]},"class":"ml-4"}]}')}}]);
//# sourceMappingURL=chunk-0e3fdeff.66fc8467.js.map