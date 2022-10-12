"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[206],{7206:function(e,t,s){s.r(t),s.d(t,{default:function(){return U}});var i=s(6252),n=s(3577),o=s(9963);const a={key:0},r=(0,i.Uk)(" We can't seem to find your membership id. Please try refreshing. "),l=(0,i.Uk)(" Review ClinGen’s "),u={class:"relative"},p=["onUpdate:modelValue","name"],d={key:1},c=["value","name","onUpdate:modelValue"],h=["onUpdate:modelValue","name"],m=(0,i.Uk)(" Saving... ");function y(e,t,s,y,w,v){const f=(0,i.up)("card"),g=(0,i.up)("coi-policy-link"),_=(0,i.up)("input-row"),b=(0,i.up)("button-row"),k=(0,i.up)("note");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("pre",null,(0,n.zw)(e.lastCoiResponse),1),v.codeIsValid?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(f,{key:0,title:w.verifying?"Loading COI Form":"COI Form not found"},{default:(0,i.w5)((()=>[w.verifying?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",a,"We couldn't find this COI."))])),_:1},8,["title"])),v.groupMemberId?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(f,{key:1,title:"There's a problem"},{default:(0,i.w5)((()=>[r])),_:1})),v.codeIsValid?((0,i.wg)(),(0,i.j4)(f,{key:2,title:v.coiTitle,class:"max-w-xl mx-auto relative"},{default:(0,i.w5)((()=>[(0,i._)("p",null,[l,(0,i.Wm)(g)]),(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(w.survey.questions,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.name,class:(0,n.C_)(e.class)},[(0,i.Wm)(o.uT,{name:"slide-fade-down"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(_,{label:e.question_text,errors:w.errors[e.name],vertical:!0},{default:(0,i.w5)((()=>["text"==e.type?(0,i.wy)(((0,i.wg)(),(0,i.iD)("textarea",{key:0,class:"w-full h-24","onUpdate:modelValue":t=>w.response[e.name]=t,name:e.name},null,8,p)),[[o.nr,w.response[e.name]]]):(0,i.kq)("",!0),"multiple-choice"==e.type?((0,i.wg)(),(0,i.iD)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.options,(t=>((0,i.wg)(),(0,i.iD)("label",{key:t.value,class:"mb-1"},[(0,i.wy)((0,i._)("input",{type:"radio",value:t.value,name:e.name,"onUpdate:modelValue":t=>w.response[e.name]=t},null,8,c),[[o.G2,w.response[e.name]]]),(0,i._)("div",null,(0,n.zw)(t.label),1)])))),128))])):(0,i.kq)("",!0),"string"==e.type?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:2,type:"text","onUpdate:modelValue":t=>w.response[e.name]=t,name:e.name},null,8,h)),[[o.nr,w.response[e.name]]]):(0,i.kq)("",!0)])),_:2},1032,["label","errors"]),[[o.F8,v.showQuestion(e)]])])),_:2},1024)],2)))),128)),(0,i.Wm)(b,{"show-cancel":!1,onSubmitClicked:t[0]||(t[0]=e=>v.storeResponse())},{default:(0,i.w5)((()=>[w.saving?(0,i.WI)(e.$slots,"default",{key:0},(()=>[m])):(0,i.kq)("",!0)])),_:3})])])),_:3},8,["title"])):(0,i.kq)("",!0),(0,i.Wm)(k,{class:"container"},{default:(0,i.w5)((()=>[(0,i.Uk)("GroupMemberId: "+(0,n.zw)(v.groupMemberId),1)])),_:1})])}var w=JSON.parse('{"name":"Conflict of Interest Survey","questions":[{"name":"work_fee_lab","question":"Do you work for a laboratory that offers fee-for-service testing related to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_gd_in_ep","question":"Have you made substantial contributions to the literature implicating a gene:disease relationship that relates to the work of your Expert Panel?","validation":"required","type":"yes-no"},{"name":"contributions_to_genes","question":"Please list the genes:","type":"text","validation":"required_if:contributions_to_gd_in_ep,1","show":{"name":"contributions_to_gd_in_ep","value":1},"class":"ml-4"},{"name":"independent_efforts","question":"Do you have any other existing or planned independent efforts that will potentially overlap with the scope of your ClinGen work?","type":"multiple-choice","options":[{"label":"Yes","value":1},{"label":"No","value":0},{"label":"Unsure","value":2}],"validation":"required"},{"name":"independent_efforts_details","question":"Please describe and also send an email describing the project(s) to the co-chairs and coordinator:","type":"text","valiation":"required_if:independent_efforts,1","show":{"name":"independent_efforts","value":[1,2]},"class":"ml-4"},{"name":"coi","question":"Do you have any other potential conflicts of interest to disclose (e.g. patents, intellectual property ownership, or paid consultancies related to any variants or genes associated with the work of your Expert Panel):","type":"multiple-choice","options":[{"label":"Yes","value":1},{"label":"No","value":0},{"label":"Unsure","value":2}],"validation":"required"},{"name":"coi_details","question":"Please describe:","type":"text","valiation":"required_if:coi,1","show":{"name":"coi","value":[1,2]},"class":"ml-4"}]}');class v{constructor(e){this.question_text=e.question,this.name=e.name,this.options=e.options,this.validationRules=e.validation,this.type=e.type,this.show=e.show,this.class=e.class}}class f extends v{constructor(e){super(e),this.type="multiple-choice",this.options=[{label:"Yes",value:1},{label:"No",value:0}]}}function g(e){return"yes-no"==e.type?new f(e):new v(e)}class _{constructor(e){this._name=e.name,this._questions=e.questions.map((e=>g(e)))}get name(){return this._name}get questions(){return this._questions}responseIsValid(e){return!0}getResponseTemplate(){const e={};return this.questions.forEach((t=>{e[t.name]=null})),e}}var b=_,k=s(812),q=s(9700);const x=new b(w);var C={name:"Coi",props:{code:{required:!0,type:String}},data(){return{coiDef:w,survey:x,response:x.getResponseTemplate(),errors:{},epName:null,verifying:!1,saved:!1,saving:!1,redirectCountdown:5}},computed:{codeIsValid(){return null!==this.epName},coiTitle(){return x.name+" for "+this.epName},membership(){return this.$store.getters.currentUser.person.memberships.find((e=>e.group.expert_panel&&e.group.expert_panel.coi_code===this.code))},groupMemberId(){return this.membership?this.membership.id:null}},watch:{code:{immediate:!0,handler(){this.initResponseValues()}}},methods:{initResponseValues(){return this.membership&&this.membership.cois.length>0&&(this.response={...this.membership.cois[this.membership.cois.length-1].data}),{}},showQuestion(e){return!e.show||(Array.isArray(e.show.value)?e.show.value.indexOf(this.response[e.show.name])>-1:this.response[e.show.name]==e.show.value)},verifyCode(){this.verifying=!0,k.Z.get(`/api/coi/${this.code}/application`).then((e=>{this.epName=e.data.display_name})).then((()=>{this.verifying=!1}))},async storeResponse(){this.saving=!0;try{await this.$store.dispatch("storeCoi",{code:this.code,groupMemberId:this.groupMemberId,coiData:this.response}),this.saved=!0,await this.$store.dispatch("forceGetCurrentUser"),this.$router.push({name:"Dashboard"})}catch(e){(0,q.Z)(e)?this.errors=e.response.data.errors:this.$store.commit("pushError",`You can not complete a COI for ${this.epName} because you are not a member.`)}this.saving=!1}},async mounted(){this.verifyCode(),await this.$store.dispatch("getCurrentUser")}},I=s(3744);const D=(0,I.Z)(C,[["render",y]]);var U=D}}]);
//# sourceMappingURL=206.eb6a1118.js.map