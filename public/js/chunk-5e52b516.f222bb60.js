(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e52b516","chunk-ce03ae04"],{1298:function(e,t,n){"use strict";n("95bb")},4848:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),o={key:0},i=Object(r["createTextVNode"])(" We can't see to find your membership id. Please try refreshing. "),c={key:0},a={key:0},l={key:1,class:"relative"},s=["onUpdate:modelValue","name"],u={key:1},d=["value","name","onUpdate:modelValue"],p=["onUpdate:modelValue","name"],m=Object(r["createTextVNode"])(" Saving... ");function b(e,t,n,b,f,v){var h=Object(r["resolveComponent"])("card"),O=Object(r["resolveComponent"])("input-row"),j=Object(r["resolveComponent"])("button-row"),y=Object(r["resolveComponent"])("note");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[v.codeIsValid?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(h,{key:0,title:f.verifying?"Loading COI Form":"COI Form not found"},{default:Object(r["withCtx"])((function(){return[f.verifying?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,"We couldn't find this COI."))]})),_:1},8,["title"])),v.groupMemberId?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(h,{key:1,title:"There's a problem"},{default:Object(r["withCtx"])((function(){return[i]})),_:1})),v.codeIsValid?(Object(r["openBlock"])(),Object(r["createBlock"])(h,{key:2,title:v.coiTitle,class:"max-w-xl mx-auto relative"},{default:Object(r["withCtx"])((function(){return[f.saved?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createTextVNode"])(" Thanks for completing the conflict of interest form for "+Object(r["toDisplayString"])(f.epName)+"! ",1),e.$store.getters.isAuthed?(Object(r["openBlock"])(),Object(r["createElementBlock"])("small",a,[Object(r["createElementVNode"])("p",null,"You'll be redirected back in "+Object(r["toDisplayString"])(f.redirectCountdown)+" seconds.",1),Object(r["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)}),class:"text-blue-500"},"Go back")])):Object(r["createCommentVNode"])("",!0)])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",l,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(f.survey.questions,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e.name,class:Object(r["normalizeClass"])(e.class)},[Object(r["createVNode"])(r["Transition"],{name:"slide-fade-down"},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createVNode"])(O,{label:e.question_text,errors:f.errors[e.name],vertical:!0},{default:Object(r["withCtx"])((function(){return["text"==e.type?Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("textarea",{key:0,class:"w-full h-24","onUpdate:modelValue":function(t){return f.response[e.name]=t},name:e.name},null,8,s)),[[r["vModelText"],f.response[e.name]]]):Object(r["createCommentVNode"])("",!0),"multiple-choice"==e.type?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.options,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("label",{key:t.value,class:"mb-1"},[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"radio",value:t.value,name:e.name,"onUpdate:modelValue":function(t){return f.response[e.name]=t}},null,8,d),[[r["vModelRadio"],f.response[e.name]]]),Object(r["createElementVNode"])("div",null,Object(r["toDisplayString"])(t.label),1)])})),128))])):Object(r["createCommentVNode"])("",!0),"string"==e.type?Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("input",{key:2,type:"text","onUpdate:modelValue":function(t){return f.response[e.name]=t},name:e.name},null,8,p)),[[r["vModelText"],f.response[e.name]]]):Object(r["createCommentVNode"])("",!0)]})),_:2},1032,["label","errors"]),[[r["vShow"],v.showQuestion(e)]])]})),_:2},1024)],2)})),128)),Object(r["createVNode"])(j,{"show-cancel":!1,onSubmitClicked:t[1]||(t[1]=function(e){return v.storeResponse()})},{default:Object(r["withCtx"])((function(){return[f.saving?Object(r["renderSlot"])(e.$slots,"default",{key:0},(function(){return[m]})):Object(r["createCommentVNode"])("",!0)]})),_:3})]))]})),_:3},8,["title"])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(y,{class:"container"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])("GroupMemberId: "+Object(r["toDisplayString"])(v.groupMemberId),1)]})),_:1})])}var f=n("1da1"),v=(n("96cf"),n("7db0"),n("f0d7")),h=n("bee2"),O=n("262e"),j=n("2caf"),y=n("d4ec"),k=(n("d81d"),n("159b"),function e(t){Object(y["a"])(this,e),this.question_text=t.question,this.name=t.name,this.options=t.options,this.validationRules=t.validation,this.type=t.type,this.show=t.show,this.class=t.class}),g=function(e){Object(O["a"])(n,e);var t=Object(j["a"])(n);function n(e){var r;return Object(y["a"])(this,n),r=t.call(this,e),r.type="multiple-choice",r.options=[{label:"Yes",value:1},{label:"No",value:0}],r}return n}(k);function w(e){return"yes-no"==e.type?new g(e):new k(e)}var x=function(){function e(t){Object(y["a"])(this,e),this._name=t.name,this._questions=t.questions.map((function(e){return w(e)}))}return Object(h["a"])(e,[{key:"name",get:function(){return this._name}},{key:"questions",get:function(){return this._questions}},{key:"responseIsValid",value:function(e){return!0}},{key:"getResponseTemplate",value:function(){var e={};return this.questions.forEach((function(t){e[t.name]=null})),e}}]),e}(),V=x,C=n("f96b"),N=n("033d"),_=new V(v),E={props:{code:{required:!0,type:String}},data:function(){return{coiDef:v,survey:_,response:_.getResponseTemplate(),errors:{},epName:null,verifying:!1,saved:!1,saving:!1,redirectCountdown:5}},computed:{codeIsValid:function(){return null!==this.epName},coiTitle:function(){return _.name+" for "+this.epName},groupMemberId:function(){var e=this,t=this.$store.getters.currentUser.person.memberships.find((function(t){return t.group.expert_panel&&t.group.expert_panel.coi_code===e.code}));return t?t.id:null}},methods:{showQuestion:function(e){return!e.show||(Array.isArray(e.show.value)?e.show.value.indexOf(this.response[e.show.name])>-1:this.response[e.show.name]==e.show.value)},verifyCode:function(){var e=this;this.verifying=!0,C["a"].get("/api/coi/".concat(this.code,"/application")).then((function(t){e.epName=t.data.name})).then((function(){e.verifying=!1}))},storeResponse:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.saving=!0,t.prev=1,t.next=4,e.$store.dispatch("storeCoi",{code:e.code,groupMemberId:e.groupMemberId,coiData:e.response});case 4:e.saved=!0,e.$store.dispatch("forceGetCurrentUser"),e.$store.getters.isAuthed&&e.countDownToRedirect(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),Object(N["a"])(t.t0)?e.errors=t.t0.response.data.errors:e.$store.commit("pushError","You can not complete a COI for ".concat(e.epName," because you are not a member."));case 12:e.saving=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},countDownToRedirect:function(){var e=this;setInterval((function(){e.redirectCountdown--}),1e3),setTimeout((function(){e.$router.go(-1)}),5e3)}},mounted:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.verifyCode(),t.next=3,e.$store.dispatch("getCurrentUser");case 3:case"end":return t.stop()}}),t)})))()}};E.render=b;t["default"]=E},"48e8":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));n("159b"),n("b64b"),n("d81d"),n("b0c0");var r=n("7a23"),o=n("f96b"),i=n("025e"),c=Object(r["ref"])({institutions:[],countries:[],timezones:[],primaryOccupations:[],races:[],ethnicities:[],genders:[]}),a=Object(r["computed"])((function(){return[{name:"first_name"},{name:"last_name"},{name:"email"},{name:"institution_id",label:"Institution",type:"select",options:c.value.institutions},{name:"credentials",type:"textarea"},{name:"biography",type:"textarea"},{name:"phone"},{name:"timezone",label:"Timezone",type:"select",options:c.value.timezones}]})),l=Object(r["computed"])((function(){return[{name:"country_id",label:"Country",type:"select",options:c.value.countries},{name:"primary_occupation_id",label:"Primary Occupation",type:"select",options:c.value.primaryOccupations},{name:"primary_occupation_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.primary_occupation_id}},{name:"race_id",label:"Race",type:"select",options:c.value.races},{name:"race_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.race_id}},{name:"ethnicity_id",label:"Ethnicity",type:"select",options:c.value.ethnicities},{name:"enthnicity_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.enthnicity_id}},{name:"gender_id",label:"Gender",type:"select",options:c.value.genders},{name:"gender_other",label:" ",type:"text",placeholder:"Details",show:function(e){return 100==e.gender_id}}]})),s=function(){Object.keys(c.value).forEach((function(e){"timezones"!=e?o["a"].get("/api/people/lookups/".concat(Object(i["c"])(e))).then((function(t){c.value[e]=t.data.data.map((function(e){return{value:e.id,label:e.name}}))})).catch((function(e){return console.error(e)})):o["a"].get("/api/people/lookups/timezones").then((function(e){c.value.timezones=e.data.data.map((function(e){return{value:e,label:e}}))}))}))}},"8d23":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),o=function(e){return Object(r["pushScopeId"])("data-v-a7da407c"),e=e(),Object(r["popScopeId"])(),e},i={class:"flex justify-center"},c=o((function(){return Object(r["createElementVNode"])("p",null," It looks like you've alreay redeemed your invite. ",-1)})),a=o((function(){return Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("a",{href:"/"},"Return to your dashboard"),Object(r["createTextVNode"])(" to see a list of your groups, pending COIs and more. ")],-1)})),l={key:1},s=Object(r["createTextVNode"])("< Log In");function u(e,t,n,o,u,d){var p=this,m=Object(r["resolveComponent"])("static-alert"),b=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("pre",null,Object(r["toDisplayString"])(),1),Object(r["createElementVNode"])("div",i,[d.canContinue?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",l,[Object(r["createElementVNode"])("div",{class:"onboarding-container",style:Object(r["normalizeStyle"])("width: ".concat(d.currentStepWidth))},[(Object(r["openBlock"])(),Object(r["createBlock"])(r["KeepAlive"],null,[Object(r["createVNode"])(r["Transition"],{name:u.animationDirection,mode:"out-in"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(d.currentStepComponent),{invite:u.invite,person:u.invite.person,code:u.invite.coi_code,ref:"stepForm",onCodeverified:d.handleCodeVerified,onOk:d.goForward,onSaved:d.goForward,onBack:d.goBack},null,8,["invite","person","code","onCodeverified","onOk","onSaved","onBack"]))]})),_:1},8,["name"])],1024))],4),Object(r["createElementVNode"])("p",null,[Object(r["createVNode"])(b,{class:"block link pt-2",to:{name:"login"}},{default:Object(r["withCtx"])((function(){return[s]})),_:1})])])):(Object(r["openBlock"])(),Object(r["createBlock"])(m,{key:0,variant:"info",class:"lg:w-1/4 md:w-1/2"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("p",null,"Hi, "+Object(r["toDisplayString"])(p.$store.state.user.name)+".",1),c,a]})),_:1}))])])}var d={class:"text-lg text-center font-bold"},p=Object(r["createElementVNode"])("br",null,null,-1),m=Object(r["createTextVNode"])(" You've been invited to join ClinGen"),b={key:0},f={key:1},v=Object(r["createElementVNode"])("p",null,"There are just a few steps to get you set up:",-1),h={class:"list-decimal pl-8"},O=Object(r["createElementVNode"])("li",null,"Create an account.",-1),j=Object(r["createElementVNode"])("li",null,"Fill out your profile.",-1),y=Object(r["createElementVNode"])("li",null,"Share some demographic information.",-1),k={key:0};function g(e,t,n,o,i,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("p",d,[Object(r["createTextVNode"])(" Hi "+Object(r["toDisplayString"])(n.invite.first_name)+". ",1),p,m,n.invite.inviter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",b," as part of the "+Object(r["toDisplayString"])(n.invite.inviter.name)+" "+Object(r["toDisplayString"])(n.invite.inviter.type.name.toUpperCase())+".",1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",f,"."))]),v,Object(r["createElementVNode"])("ol",h,[O,j,y,n.invite.inviter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("li",k,"Complete a Conflict of Interest Survey.")):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("button",{class:"btn btn-lg blue w-full mt-4",onClick:t[0]||(t[0]=function(t){return e.$emit("ok")})}," Get Started ")])])}var w={name:"OnboardingSteps",props:{invite:{type:Object,required:!0}},emits:["ok"],data:function(){return{}},computed:{},methods:{}};w.render=g;var x=w,V={class:"w-64 mx-auto"},C=Object(r["createElementVNode"])("label",{for:"invite-code-input",class:"text-lg block"}," Enter your registration code: ",-1);function N(e,t,n,o,i,c){var a=Object(r["resolveComponent"])("input-errors");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",V,[C,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",id:"invite-code-input","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.inviteCode=e}),placeholder:"XXXXXXXXXX",class:"w-full"},null,512),[[r["vModelText"],o.inviteCode]]),Object(r["createVNode"])(a,{errors:o.errors},null,8,["errors"]),Object(r["createElementVNode"])("button",{class:"btn blue btn-lg block mt-2 w-full",onClick:t[1]||(t[1]=function(){return o.checkInvite&&o.checkInvite.apply(o,arguments)})}," Submit ")])}var _=n("1da1"),E=(n("96cf"),n("f96b")),B=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E["a"].get("/api/people/invites/".concat(t)).then((function(e){return e.data.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t,n,r,o){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E["a"].put("/api/people/invites/".concat(t.code),{email:n,password:r,password_confirmation:o}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}(),I=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",E["a"].put("/api/people/existing-user/invites/".concat(t.code)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=n("c20e"),D=n("033d"),R={name:"InviteRedemptionCode",components:{InputErrors:q["default"]},props:{code:{required:!1},invite:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{}},setup:function(e,t){var n=Object(r["toRefs"])(e),o=n.invite,i=Object(r["ref"])(null),c=Object(r["ref"])([]),a=function(){i.value=e.invite.code};Object(r["watch"])(o,(function(){a()}),{deep:!0}),Object(r["watch"])(i,(function(){c.value=[]}));var l=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(i.value);case 3:n=e.sent,t.emit("codeverified",n),e.next=13;break;case 7:if(e.prev=7,e.t0=e["catch"](0),404!=e.t0.response.status){e.next=12;break}return c.value=["The code you entered is not valid"],e.abrupt("return");case 12:Object(D["a"])(e.t0)&&(c.value=e.t0.response.data.errors.code);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return{inviteCode:i,errors:c,checkInvite:l,syncCode:a}},computed:{},methods:{},mounted:function(){this.syncCode()}};R.render=N;var T=R,$=Object(r["createElementVNode"])("pre",null,null,-1),F={key:0},U={key:1},P=Object(r["createElementVNode"])("p",{class:"text-lg"},"Create your account",-1),A={class:"flex flex-row-reverse"};function z(e,t,n,o,i,c){var a=Object(r["resolveComponent"])("login-form"),l=Object(r["resolveComponent"])("input-row");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[$,n.invite.person.user_id?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",F,[Object(r["createVNode"])(a,{onAuthenticated:o.redeemForExistingUser},null,8,["onAuthenticated"])])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",U,[P,Object(r["createVNode"])(l,{label:"Email",modelValue:o.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e}),errors:o.errors.email,"label-width-class":"w-24"},null,8,["modelValue","errors"]),Object(r["createVNode"])(l,{label:"Password",modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e}),type:"password",errors:o.errors.password,"label-width-class":"w-24"},null,8,["modelValue","errors"]),Object(r["createVNode"])(l,{label:"Confirm Password",modelValue:o.password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.password_confirmation=e}),type:"password",errors:o.errors.password_confirmation,"label-width-class":"w-24"},null,8,["modelValue","errors"]),Object(r["createElementVNode"])("div",A,[Object(r["createElementVNode"])("button",{class:"btn blue",onClick:t[3]||(t[3]=function(){return o.createAccount&&o.createAccount.apply(o,arguments)})},"Next")])]))])}var M=n("5502"),X=n("61b1"),G={name:"AccountCreationForm",components:{LoginForm:X["default"]},props:{invite:{type:Object,required:!0}},setup:function(e,t){var n=Object(M["d"])(),o=Object(r["ref"])({}),i=Object(r["ref"])(null),c=Object(r["ref"])(null),a=Object(r["ref"])(null),l=function(){var r=Object(_["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,S(e.invite,i.value,c.value,a.value);case 3:return r.next=5,n.dispatch("login",{email:i.value,password:c.value});case 5:t.emit("saved"),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),Object(D["a"])(r.t0)&&(o.value=r.t0.response.data);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var n=Object(_["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I(e.invite);case 3:t.emit("saved"),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),Object(D["a"])(n.t0)&&(o.value=n.t0.response.data);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),u=function(){i.value=e.invite.person.email};return Object(r["onMounted"])((function(){return u()})),{errors:o,email:i,password:c,password_confirmation:a,createAccount:l,redeemForExistingUser:s}}};G.render=z;var L=G,Y={class:"text-lg font-bold"},W={class:"flex flex-row-reverse justify-between"};function H(e,t,n,o,i,c){var a=Object(r["resolveComponent"])("data-form"),l=Object(r["resolveComponent"])("collapsible"),s=Object(r["resolveComponent"])("dev-component");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("p",Y,Object(r["toDisplayString"])(c.title),1),Object(r["createVNode"])(a,{fields:c.fields,modelValue:i.profile,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.profile=e}),errors:i.errors},null,8,["fields","modelValue","errors"]),Object(r["createElementVNode"])("div",W,[Object(r["createElementVNode"])("button",{class:"btn blue",onClick:t[1]||(t[1]=function(){return c.goToNext&&c.goToNext.apply(c,arguments)})},"Next >"),"demographics"==i.page?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,class:"link",onClick:t[2]||(t[2]=function(e){return i.page="profile"})},"< Back to profile")):Object(r["createCommentVNode"])("",!0)]),Object(r["createVNode"])(s,{class:"mt-4"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,null,{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(n.person),1)]})),_:1})]})),_:1})])}var J=n("5530"),Q=n("48e8"),K={name:"ProfileForm",props:{person:{type:Object,required:!0}},data:function(){return{errors:{},profile:{},page:"profile"}},computed:{fields:function(){return"profile"==this.page?this.profileFields:this.demographicFields},title:function(){return"profile"==this.page?"Please fill out your profile":"Please share your demographic information."}},methods:{initProfile:function(){this.profile=Object(J["a"])({},this.$store.getters["people/currentItem"].attributes)},save:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("people/updateProfile",{uuid:e.person.uuid,attributes:e.profile}).then((function(){e.$store.dispatch("getCurrentUser",{force:!0})}));case 3:e.$emit("saved"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),Object(D["a"])(t.t0)&&(e.errors=t.t0.response.data.errors);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},goToNext:function(){if("profile"!=this.page)this.save();else{if(!this.validateProfile())return;this.page="demographics"}},validateProfile:function(){this.errors={};var e=!0;return this.profile.institution_id||(this.errors.institution_id=["This field is required."],e=!1),this.profile.timezone||(this.errors.timezone=["This field is required"],e=!1),e}},setup:function(){return Object(r["onMounted"])((function(){return Object(Q["b"])()})),{profileFields:Q["c"],demographicFields:Q["a"],getLookups:Q["b"]}},mounted:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("people/getPerson",{uuid:e.person.uuid});case 2:e.initProfile();case 3:case"end":return t.stop()}}),t)})))()}};K.render=H;var Z=K,ee=n("da07"),te=n("4848"),ne=[T,x,L,Z],re=["20rem","20rem","20rem","40rem","40rem"],oe={name:"OverviewWizard",components:{InviteRedemptionForm:T,OnboardingSteps:x,AccountCreationForm:L,ProfileForm:Z},props:{code:{required:!1}},data:function(){return{animationDirection:"forward",currentStepIdx:0,invite:{person:new ee["a"]({})}}},computed:{currentStepComponent:function(){return ne[this.currentStepIdx]},currentStepWidth:function(){return re[this.currentStepIdx]},canContinue:function(){return!this.$store.getters.isAuthed||this.$store.getters.isAuthed&&!this.$store.getters.currentUser.person.timezone}},watch:{invite:{deep:!0,handler:function(e){e.inviter&&ne.push(te["default"])}},code:{immediate:!0,handler:function(e){this.invite.code=e}}},methods:{handleCodeVerified:function(e){this.invite=e,this.goForward()},goBack:function(){this.animationDirection="fade",0!=this.currentStepIdx&&(this.currentStepIdx-=1)},goForward:function(){this.animationDirection="fade",this.currentStepIdx!=ne.length-1?this.currentStepIdx+=1:this.$router.push({name:"Dashboard"})},selectStep:function(){if(!this.invite.id)return this.currentStepIdx=0,void(this.$route.query.code&&(this.invite.code=this.$route.query.code));this.invite.id&&this.$store.state.user.id&&(this.currentStepIndex=3)}},mounted:function(){}};n("1298");oe.render=u,oe.__scopeId="data-v-a7da407c";t["default"]=oe},"95bb":function(e,t,n){},f0d7:function(e){e.exports=JSON.parse('{"name":"Conflict of Interest Survey","questions":[{"name":"work_fee_lab","question":"Do you work for a laboratory that offers fee-for-service testing related to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_gd_in_ep","question":"Have you made substantial contributions to the literature implicating a gene:disease relationship that relates to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_genes","question":"Please list the genes:","type":"text","validation":"required_if:contributions_to_gd_in_ep,1","show":{"name":"contributions_to_gd_in_ep","value":1},"class":"ml-4"},{"name":"independent_efforts","question":"Do you have any other existing or planned independent efforts that will potentially overlap with the scope of your ClinGen work?","type":"multiple-choice","options":[{"label":"Yes","value":1},{"label":"No","value":0},{"label":"Unsure","value":2}],"validation":"required"},{"name":"independent_efforts_details","question":"Please describe and also send an email describing the project(s) to the co-chairs and coordinator:","type":"text","valiation":"required_if:independent_efforts,1","show":{"name":"independent_efforts","value":[1,2]},"class":"ml-4"},{"name":"coi","question":"Do you have any other potential conflicts of interest to disclose (e.g. patents, intellectual property ownership, or paid consultancies related to any variants or genes associated with the work of your Expert Panel):","type":"multiple-choice","options":[{"label":"Yes","value":1},{"label":"No","value":0},{"label":"Unsure","value":2}],"validation":"required"},{"name":"coi_details","question":"Please describe:","type":"text","valiation":"required_if:coi,1","show":{"name":"coi","value":[1,2]},"class":"ml-4"}]}')}}]);
//# sourceMappingURL=chunk-5e52b516.f222bb60.js.map