(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce03ae04"],{4848:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),r={key:0},a=Object(o["createTextVNode"])(" We can't see to find your membership id. Please try refreshing. "),i={key:0},c={key:0},s={key:1,class:"relative"},l=["onUpdate:modelValue","name"],u={key:1},d=["value","name","onUpdate:modelValue"],p=["onUpdate:modelValue","name"],m=Object(o["createTextVNode"])(" Saving... ");function b(e,t,n,b,f,h){var v=Object(o["resolveComponent"])("card"),O=Object(o["resolveComponent"])("input-row"),j=Object(o["resolveComponent"])("button-row");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[h.codeIsValid?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:0,title:f.verifying?"Loading COI Form":"COI Form not found"},{default:Object(o["withCtx"])((function(){return[f.verifying?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,"We couldn't find this COI."))]})),_:1},8,["title"])),h.groupMemberId?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:1,title:"There's a problem"},{default:Object(o["withCtx"])((function(){return[a]})),_:1})),h.codeIsValid?(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:2,title:h.coiTitle,class:"max-w-xl mx-auto relative"},{default:Object(o["withCtx"])((function(){return[f.saved?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createTextVNode"])(" Thanks for completing the conflict of interest form for "+Object(o["toDisplayString"])(f.epName)+"! ",1),e.$store.getters.isAuthed?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",c,[Object(o["createElementVNode"])("p",null,"You'll be redirected back in "+Object(o["toDisplayString"])(f.redirectCountdown)+" seconds.",1),Object(o["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)}),class:"text-blue-500"},"Go back")])):Object(o["createCommentVNode"])("",!0)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",s,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(f.survey.questions,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:e.name,class:Object(o["normalizeClass"])(e.class)},[Object(o["createVNode"])(o["Transition"],{name:"slide-fade-down"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createVNode"])(O,{label:e.question_text,errors:f.errors[e.name],vertical:!0},{default:Object(o["withCtx"])((function(){return["text"==e.type?Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("textarea",{key:0,class:"w-full h-24","onUpdate:modelValue":function(t){return f.response[e.name]=t},name:e.name},null,8,l)),[[o["vModelText"],f.response[e.name]]]):Object(o["createCommentVNode"])("",!0),"multiple-choice"==e.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",u,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.options,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("label",{key:t.value,class:"mb-1"},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"radio",value:t.value,name:e.name,"onUpdate:modelValue":function(t){return f.response[e.name]=t}},null,8,d),[[o["vModelRadio"],f.response[e.name]]]),Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(t.label),1)])})),128))])):Object(o["createCommentVNode"])("",!0),"string"==e.type?Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("input",{key:2,type:"text","onUpdate:modelValue":function(t){return f.response[e.name]=t},name:e.name},null,8,p)),[[o["vModelText"],f.response[e.name]]]):Object(o["createCommentVNode"])("",!0)]})),_:2},1032,["label","errors"]),[[o["vShow"],h.showQuestion(e)]])]})),_:2},1024)],2)})),128)),Object(o["createVNode"])(j,{"show-cancel":!1,onSubmitClicked:t[1]||(t[1]=function(e){return h.storeResponse()})},{default:Object(o["withCtx"])((function(){return[f.saving?Object(o["renderSlot"])(e.$slots,"default",{key:0},(function(){return[m]})):Object(o["createCommentVNode"])("",!0)]})),_:3})]))]})),_:3},8,["title"])):Object(o["createCommentVNode"])("",!0)])}var f=n("1da1"),h=(n("96cf"),n("7db0"),n("f0d7")),v=n("bee2"),O=n("262e"),j=n("2caf"),y=n("d4ec"),k=(n("d81d"),n("159b"),function e(t){Object(y["a"])(this,e),this.question_text=t.question,this.name=t.name,this.options=t.options,this.validationRules=t.validation,this.type=t.type,this.show=t.show,this.class=t.class}),w=function(e){Object(O["a"])(n,e);var t=Object(j["a"])(n);function n(e){var o;return Object(y["a"])(this,n),o=t.call(this,e),o.type="multiple-choice",o.options=[{label:"Yes",value:1},{label:"No",value:0}],o}return n}(k);function g(e){return"yes-no"==e.type?new w(e):new k(e)}var _=function(){function e(t){Object(y["a"])(this,e),this._name=t.name,this._questions=t.questions.map((function(e){return g(e)}))}return Object(v["a"])(e,[{key:"name",get:function(){return this._name}},{key:"questions",get:function(){return this._questions}},{key:"responseIsValid",value:function(e){return!0}},{key:"getResponseTemplate",value:function(){var e={};return this.questions.forEach((function(t){e[t.name]=null})),e}}]),e}(),x=_,C=n("f96b"),B=n("033d"),N=new x(h),V={props:{code:{required:!0,type:String}},data:function(){return{coiDef:h,survey:N,response:N.getResponseTemplate(),errors:{},epName:null,verifying:!1,saved:!1,saving:!1,redirectCountdown:5}},computed:{codeIsValid:function(){return null!==this.epName},coiTitle:function(){return N.name+" for "+this.epName},groupMemberId:function(){var e=this,t=this.$store.getters.currentUser.person.memberships.find((function(t){return t.group.expert_panel&&t.group.expert_panel.coi_code===e.code}));return t?t.id:null}},methods:{showQuestion:function(e){return!e.show||(Array.isArray(e.show.value)?e.show.value.indexOf(this.response[e.show.name])>-1:this.response[e.show.name]==e.show.value)},verifyCode:function(){var e=this;this.verifying=!0,C["a"].get("/api/coi/".concat(this.code,"/application")).then((function(t){e.epName=t.data.name})).then((function(){e.verifying=!1}))},storeResponse:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.saving=!0,t.prev=1,t.next=4,e.$store.dispatch("storeCoi",{code:e.code,groupMemberId:e.groupMemberId,coiData:e.response});case 4:e.saved=!0,e.$store.dispatch("forceGetCurrentUser"),e.$store.getters.isAuthed&&e.countDownToRedirect(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),Object(B["a"])(t.t0)?e.errors=t.t0.response.data.errors:e.$store.commit("pushError","You can not complete a COI for ".concat(e.epName," because you are not a member."));case 12:e.saving=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},countDownToRedirect:function(){var e=this;setInterval((function(){e.redirectCountdown--}),1e3),setTimeout((function(){e.$router.go(-1)}),5e3)}},mounted:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.verifyCode(),t.next=3,e.$store.dispatch("getCurrentUser");case 3:case"end":return t.stop()}}),t)})))()}};V.render=b;t["default"]=V},f0d7:function(e){e.exports=JSON.parse('{"name":"Conflict of Interest Survey","questions":[{"name":"work_fee_lab","question":"Do you work for a laboratory that offers fee-for-service testing related to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_gd_in_ep","question":"Have you made substantial contributions to the literature implicating a gene:disease relationship that relates to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_genes","question":"Please list the genes:","type":"text","validation":"required_if:contributions_to_gd_in_ep,1","show":{"name":"contributions_to_gd_in_ep","value":1},"class":"ml-4"},{"name":"independent_efforts","question":"Do you have any other existing or planned independent efforts that will potentially overlap with the scope of your ClinGen work?","type":"multiple-choice","options":[{"label":"Yes","value":1},{"label":"No","value":0},{"label":"Unsure","value":2}],"validation":"required"},{"name":"independent_efforts_details","question":"Please describe and also send an email describing the project(s) to the co-chairs and coordinator:","type":"text","valiation":"required_if:independent_efforts,1","show":{"name":"independent_efforts","value":[1,2]},"class":"ml-4"},{"name":"coi","question":"Do you have any other potential conflicts of interest to disclose (e.g. patents, intellectual property ownership, or paid consultancies related to any variants or genes associated with the work of your Expert Panel):","type":"multiple-choice","options":[{"label":"Yes","value":1},{"label":"No","value":0},{"label":"Unsure","value":2}],"validation":"required"},{"name":"coi_details","question":"Please describe:","type":"text","valiation":"required_if:coi,1","show":{"name":"coi","value":[1,2]},"class":"ml-4"}]}')}}]);
//# sourceMappingURL=chunk-ce03ae04.34656222.js.map