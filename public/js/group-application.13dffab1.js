(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-application"],{"11ac":function(e,t,o){"use strict";o("68f4")},2773:function(e,t,o){},"3b02":function(e,t,o){},"3f28":function(e,t,o){},"650e":function(e,t,o){},"68f4":function(e,t,o){},7332:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-64df88b4"),e=e(),Object(n["popScopeId"])(),e},c={class:"flex items-center pb-2 border-b z-20"},i={class:"flex-1"},a={class:"border-b-0 flex justify-between items-start mb-0"},s={key:0},l=r((function(){return Object(n["createElementVNode"])("span",{class:"note"}," | ",-1)})),u={class:"md:flex"},p={class:"flex-1"},d={id:"body",class:"px-4"},b={class:"text-lg"},m=r((function(){return Object(n["createElementVNode"])("p",null,"You cannot update your application while waiting approval.",-1)})),O=r((function(){return Object(n["createElementVNode"])("p",null,"The approval committee will respond soon.",-1)})),h=r((function(){return Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" Please contact "),Object(n["createElementVNode"])("a",{href:"mailto:cdwg_oversightcommittee@clinicalgenome.org"}," the ClinGen CDWG Oversight Committee "),Object(n["createTextVNode"])(" if you have any questions. ")],-1)}));function j(e,t,o,r,j,f){var g=Object(n["resolveComponent"])("router-link"),v=Object(n["resolveComponent"])("note"),C=Object(n["resolveComponent"])("application-menu"),V=Object(n["resolveComponent"])("static-alert"),N=Object(n["resolveComponent"])("router-view"),w=Object(n["resolveComponent"])("modal-dialog"),k=Object(n["resolveDirective"])("remaining-height");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("header",c,[Object(n["createElementVNode"])("div",i,[f.group.uuid?(Object(n["openBlock"])(),Object(n["createBlock"])(g,{key:0,class:"note",to:{name:"GroupDetail",params:{uuid:f.group.uuid}}},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(f.group.displayName),1)]})),_:1},8,["to"])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("h1",a,[Object(n["createElementVNode"])("div",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(f.group.displayName)+" - Application ",1),e.hasPermission("groups-manage")?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",s,[Object(n["createVNode"])(v,{class:"inline"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])("group: "+Object(n["toDisplayString"])(f.group.id),1)]})),_:1}),l,Object(n["createVNode"])(v,{class:"inline"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])("expert_panel: "+Object(n["toDisplayString"])(f.group.expert_panel.id),1)]})),_:1})])):Object(n["createCommentVNode"])("",!0)]),f.group.expert_panel.hasPendingSubmission?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:0,onClick:t[0]||(t[0]=function(){var t;return e.$refs.application.save&&(t=e.$refs.application).save.apply(t,arguments)}),class:"btn btn-sm"},"Save"))])])]),Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(C,{class:"mt-4",application:f.application,"is-collapsed":!j.showApplicationToc},null,8,["application","is-collapsed"]),Object(n["createElementVNode"])("div",p,[Object(n["withDirectives"])(Object(n["createElementVNode"])("section",d,[f.group.expert_panel.hasPendingSubmission?(Object(n["openBlock"])(),Object(n["createBlock"])(V,{key:0,class:"relative mt-4 px-4 z-50",variant:"success"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("p",b,"Your application was submitted on "+Object(n["toDisplayString"])(e.formatDate(f.group.expert_panel.pendingSubmission.created_at))+".",1),m,O,h]})),_:1})):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(f.applicationComponent),{ref:"application"},null,512))],512),[[k]])])]),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(w,{modelValue:j.showModal,"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.showModal=e}),onClosed:f.handleModalClosed,title:this.$route.meta.title},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{ref:"modalView",onSaved:f.hideModal,onCanceled:f.hideModal},null,8,["onSaved","onCanceled"])]})),_:1},8,["modelValue","onClosed","title"])]))])}var f=o("1da1"),g=(o("ac1f"),o("5319"),o("96cf"),{class:"relative"}),v=Object(n["createElementVNode"])("p",null," Expert Panels are expected to represent the diversity of expertise in the field, including all major areas of expertise (clinical, diagnostic laboratory, and basic research). Membership should include representation from three or more institutions and will encompass disease/gene expert members as well as biocurators. Biocurators do not have to be gene/disease experts and will be primarily responsible for assembling the available evidence for subsequent expert member review. For role, suggested examples include: primary biocurator, expert reviewer, etc. ",-1),C=Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" It is expected that the expert panel will utilize "),Object(n["createElementVNode"])("a",{target:"lumping-splitting-guidelines",href:"https://clinicalgenome.org/working-groups/lumping-and-splitting/"},"ClinGen Lumping and Splitting guidance"),Object(n["createTextVNode"])(" during pre-curation and should use the "),Object(n["createElementVNode"])("a",{target:"gene-tracker",href:"https://gene-tracker.clinicalgenome.org/"},"Gene Tracker"),Object(n["createTextVNode"])(" to enter their precuration information. Focus should be on the canonical disease, and splitting into multiple phenotypes should be avoided. The precurations will be published to "),Object(n["createElementVNode"])("a",{href:"https://clinicalgenome.org"},"clinicalgenome.org"),Object(n["createTextVNode"])(". ")],-1),V=Object(n["createElementVNode"])("hr",null,null,-1);function N(e,t,o,r,c,i){var a=Object(n["resolveComponent"])("group-form"),s=Object(n["resolveComponent"])("app-section"),l=Object(n["resolveComponent"])("member-list"),u=Object(n["resolveComponent"])("gcep-gene-list"),p=Object(n["resolveComponent"])("scope-description-form"),d=Object(n["resolveComponent"])("attestation-gcep"),b=Object(n["resolveComponent"])("gcep-ongoing-plans-form"),m=Object(n["resolveComponent"])("attestation-nhgri"),O=Object(n["resolveComponent"])("application-step");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",g,[Object(n["createVNode"])(O,{id:"definition",disabled:i.group.expert_panel.hasPendingSubmission},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{title:"Basic Information",id:"basicInfo"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(a,{group:i.group,ref:"groupForm"},null,8,["group"])]})),_:1}),i.group?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0,title:"Membership",id:"membership"},{default:Object(n["withCtx"])((function(){return[v,Object(n["createVNode"])(l,{group:i.group},null,8,["group"])]})),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(s,{title:"Scope of Work",id:"scope"},{default:Object(n["withCtx"])((function(){return[C,Object(n["createVNode"])(u,{group:i.group,ref:"geneList"},null,8,["group"]),V,Object(n["createVNode"])(p)]})),_:1}),Object(n["createVNode"])(s,{title:"Attestations",id:"attestations"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d)]})),_:1}),Object(n["createVNode"])(s,{id:"curationReviewProcess",title:"Plans for Ongoing Gene Review and Reanalysis and Discrepancy Resolution"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b)]})),_:1}),Object(n["createVNode"])(s,{title:"NHGRI Data Availability",id:"nhgri"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m)]})),_:1})]})),_:1},8,["disabled"])])}o("d81d"),o("b64b"),o("d3b7"),o("3ca3"),o("ddb0");var w=o("a75a"),k=o("db04"),y=o("8ed1"),x=function(e){return Object(n["pushScopeId"])("data-v-75c78533"),e=e(),Object(n["popScopeId"])(),e},E=["id"],_={key:0,class:"header flex justify-between items-center"},B={key:0,class:"inline"},S=["innerHTML"],R={key:0,class:"inline"},D=Object(n["createTextVNode"])(" Make changes from the the "),T=Object(n["createTextVNode"])("group's detail screen"),$=x((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),M=x((function(){return Object(n["createElementVNode"])("small",null,"Changes may require re-approval.",-1)})),I=Object(n["createTextVNode"])("Approved"),q=Object(n["createTextVNode"])("Under Review"),A={class:"relative"},P={class:"step-contents"},F={key:1,class:"z-20 absolute top-0 bottom-0 left-0 right-0 bg-white bg-opacity-50"};function G(e,t,o,r,c,i){var a=Object(n["resolveComponent"])("icon-lock"),s=Object(n["resolveComponent"])("popper"),l=Object(n["resolveComponent"])("router-link"),u=Object(n["resolveComponent"])("badge"),p=Object(n["resolveComponent"])("application-submit-button");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"application-step",id:o.id},[o.title?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",_,[Object(n["createElementVNode"])("h2",{class:Object(n["normalizeClass"])({"text-gray-400":o.disabled})},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.title)+" ",1),o.disabled?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",B,[Object(n["createVNode"])(s,{arrow:"",hover:""},{content:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("small",{class:"text-sm",innerHTML:i.lockedContent},null,8,S)]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(a,{class:"inline"})]})),_:1})])):Object(n["createCommentVNode"])("",!0)],2),i.approved?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",R,[Object(n["createVNode"])(s,{hover:"",arrow:""},{content:Object(n["withCtx"])((function(){return[D,Object(n["createVNode"])(l,{to:{name:"GroupDetail",parmas:{uuid:i.group.uuid}}},{default:Object(n["withCtx"])((function(){return[T]})),_:1},8,["to"]),$,M]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{color:"green"},{default:Object(n["withCtx"])((function(){return[I]})),_:1})]})),_:1})])):Object(n["createCommentVNode"])("",!0),i.underReview?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:1,color:"yellow"},{default:Object(n["withCtx"])((function(){return[q]})),_:1})):Object(n["createCommentVNode"])("",!0)])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",A,[Object(n["createElementVNode"])("div",P,[Object(n["renderSlot"])(e.$slots,"default",{},void 0,!0)]),i.showSubmitButton?(Object(n["openBlock"])(),Object(n["createBlock"])(p,{key:0,class:"border-t",step:i.step},null,8,["step"])):Object(n["createCommentVNode"])("",!0),o.disabled||i.approved?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",F)):Object(n["createCommentVNode"])("",!0)])],8,E)}var L={key:0,class:"p-4"},U={class:"relative"},W={key:0,class:"bg-white opacity-50 absolute top-0 bottom-0 left-0 right-0"},z={class:"text-lg"},H=Object(n["createTextVNode"])(" Before submitting, please note: "),Y=Object(n["createElementVNode"])("ol",{class:"list-decimal pl-6"},[Object(n["createElementVNode"])("li",null," Typical response times are between one and two weeks. "),Object(n["createElementVNode"])("li",null," Questions, revisions, and other comments will be conveyed via email. "),Object(n["createElementVNode"])("li",null," Once submitted you will not be able to update your application until the submission has been processed. ")],-1),J=Object(n["createElementVNode"])("div",{class:"mt-4 text-lg"},"Optional notes for reviewers:",-1);function Q(e,t,o,r,c,i){var a=Object(n["resolveComponent"])("requirements-item"),s=Object(n["resolveComponent"])("dev-component"),l=Object(n["resolveComponent"])("popper"),u=Object(n["resolveComponent"])("static-alert"),p=Object(n["resolveComponent"])("input-row"),d=Object(n["resolveComponent"])("button-row"),b=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[i.group.expert_panel.hasPendingSubmission?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",L,[Object(n["createVNode"])(l,{hover:"",arrow:""},{content:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(i.evaledRequirements,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(a,{key:t,requirement:e},null,8,["requirement"])})),128))])]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",U,[Object(n["createElementVNode"])("button",{class:"btn btn-xl",onClick:t[0]||(t[0]=function(){return i.initSubmission&&i.initSubmission.apply(i,arguments)})}," Submit for Approval "),i.meetsRequirements?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",W))]),e.hasRole("super-user")?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(){return i.bypassRequirements&&i.bypassRequirements.apply(i,arguments)})},"Bypass Requirements")]})),_:1})):Object(n["createCommentVNode"])("",!0)]})),_:1})])),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{modelValue:c.showSubmissionConfirmation,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.showSubmissionConfirmation=e}),title:"Submit your application"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("p",z," You are about to submit your "+Object(n["toDisplayString"])(i.submissionName)+" application. ",1),Object(n["createVNode"])(u,{class:"text-md",variant:"info"},{default:Object(n["withCtx"])((function(){return[H,Y]})),_:1}),J,Object(n["createVNode"])(p,{label:"",errors:c.errors.notes,vertical:""},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.notes=e}),rows:"5",class:"w-full"},null,512),[[n["vModelText"],c.notes]])]})),_:1},8,["errors"]),Object(n["createVNode"])(d,{onSubmitted:i.confirmSubmission,onCancelled:i.cancelSubmission},null,8,["onSubmitted","onCancelled"])]})),_:1},8,["modelValue"])]})),_:1})]))])}o("b0c0"),o("a15b");var K=o("284a"),X=o("4a91"),Z=X.submissions,ee={name:"ApplicationSubmitButton",components:{RequirementsItem:K["a"]},props:{disabled:{type:Boolean,required:!1,default:!1},sections:{type:Array,required:!1,default:function(){return[]}},step:{type:Object,required:!0}},emits:["submitted","canceled"],data:function(){return{showSubmissionConfirmation:!1,notes:null,errors:{},bypassReqs:!1}},computed:{group:function(){return this.$store.getters["groups/currentItemOrNew"]},meetsRequirements:function(){return!!this.bypassReqs||this.step.meetsRequirements(this.group)},requirementsUnmet:function(){return!this.step.meetsRequirements(this.group)},evaledRequirements:function(){return this.step.evaluateRequirements(this.group)},submissionName:function(){if("gcep"==this.group.expert_panel.type.name)return"GCEP";switch(this.group.expert_panel.current_step){case 1:return"VCEP Group Definition";case 4:return"VCEP Sustained Curation Plans";default:break}return Z.types.applications}},methods:{bypassRequirements:function(){this.bypassReqs=!0},initSubmission:function(){this.showSubmissionConfirmation=!0,this.notes=null},confirmSubmission:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("groups/submitApplicationStep",{group:e.group,notes:e.notes});case 3:e.$store.commit("pushSuccess","Your application has been submitted for approval."),e.showSubmissionConfirmation=!1,e.$emit("submitted"),t.next=15;break;case 8:if(t.prev=8,t.t0=t["catch"](0),!Object(k["c"])(t.t0)){t.next=14;break}return o=t.t0.response.data.errors,e.$store.commit("pushError",o.group.join(",")),t.abrupt("return");case 14:throw t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,8]])})))()},cancelSubmission:function(){this.showSubmissionConfirmation=!1,this.notes=null,this.$emit("cancelled")}}};ee.render=Q;var te=ee,oe=o("5313"),ne={name:"ApplicationStep",components:{ApplicationSubmitButton:te},props:{title:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},noSubmit:{type:Boolean,required:!1,default:!1}},computed:{group:function(){return this.$store.getters["groups/currentItemOrNew"]},application:function(){return this.group.isVcep()?oe["c"]:oe["a"]},step:function(){return this.application.getStep(this.id)},showSubmitButton:function(){return!this.noSubmit},lockedContent:function(){return this.underReview?"Applications pending review cannot be upated.":this.step.isComplete(this.group)?'This step is approved.<br> Make changes from the the <a href="/groups/'.concat(this.group.uuid,"\">group's detail screen</a><br><small>Changes may require re-approval.</small>"):"This step is not yet available."},approved:function(){return this.step.isComplete(this.group)},underReview:function(){return this.group.expert_panel.hasPendingSubmissionForStep(this.titleCase(this.id))}}};o("769d");ne.render=G,ne.__scopeId="data-v-75c78533";var re=ne,ce=o("8fec"),ie=o("3926"),ae=o("206f"),se=o("268c"),le=o("0945"),ue=o("a8af"),pe=o("6ca3"),de={name:"ApplicationGcep",components:{"app-section":y["a"],ApplicationStep:re,AttestationGcep:ce["a"],AttestationNhgri:ie["a"],GcepGeneList:ae["a"],GroupForm:se["a"],GcepOngoingPlansForm:pe["a"],MemberList:le["a"],ScopeDescriptionForm:ue["a"]},computed:{group:{get:function(){return this.$store.getters["groups/currentItemOrNew"]},set:function(e){this.$store.commit("groups/addItem",e)}}},methods:{save:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=Object.keys(e.$refs).map((function(t){return e.$refs[t].save()})),o.push(e.saveUpdates()),t.prev=2,t.next=5,Promise.all(o);case 5:t.next=13;break;case 7:if(t.prev=7,t.t0=t["catch"](2),!Object(k["c"])(t.t0)){t.next=12;break}return e.errors=t.t0.response.data.errors,t.abrupt("return");case 12:throw t.t0;case 13:case"end":return t.stop()}}),t,null,[[2,7]])})))()},saveUpdates:function(){var e=this;if(this.group.expert_panel.isDirty())return this.$store.dispatch("groups/saveApplicationData",this.group).then((function(){return e.$store.commit("pushSuccess","Application updated")}))}},setup:function(){return{errors:w["b"],resetErrors:w["c"],submitFormData:w["d"]}}};de.render=N;var be=de,me=Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" Expert Panels are expected to represent the diversity of expertise and backgrounds in the field and should refer to "),Object(n["createElementVNode"])("a",{href:"https://clinicalgenome.org/site/assets/files/3635/variant_curation_expert_panel_vcep_protocol_version_9-2.pdf",target:"vcep-protocol"},"Section 2.1 of the VCEP Protocol"),Object(n["createTextVNode"])(" and the "),Object(n["createElementVNode"])("a",{href:"https://diversity.nih.gov/sites/coswd/files/images/SWD_Toolkit_Interactive-updated_508.pdf",target:"nih-workforce-diversity"},"NIH Scientific Workforce Diversity Toolkit"),Object(n["createTextVNode"])(" for guidance to complete the Member List below. Please list the VCEP Chair(s) and Coordinator(s) first. ")],-1),Oe=Object(n["createElementVNode"])("hr",null,null,-1),he=Object(n["createElementVNode"])("hr",null,null,-1);function je(e,t,o,r,c,i){var a=Object(n["resolveComponent"])("group-form"),s=Object(n["resolveComponent"])("app-section"),l=Object(n["resolveComponent"])("member-list"),u=Object(n["resolveComponent"])("membership-description-form"),p=Object(n["resolveComponent"])("vcep-gene-list"),d=Object(n["resolveComponent"])("scope-description-form"),b=Object(n["resolveComponent"])("attestation-reanalysis"),m=Object(n["resolveComponent"])("attestation-nhgri"),O=Object(n["resolveComponent"])("application-step"),h=Object(n["resolveComponent"])("cspec-summary"),j=Object(n["resolveComponent"])("vcep-ongoing-plans-form"),f=Object(n["resolveComponent"])("evidence-summary-list"),g=Object(n["resolveComponent"])("member-designation-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(O,{id:"definition",title:"Group Definition",disabled:i.group.expert_panel.hasPendingSubmission},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{title:"Basic Information",id:"basicInfo"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(a,{group:i.group,ref:"groupForm"},null,8,["group"])]})),_:1}),i.group?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0,title:"Membership",id:"membership"},{default:Object(n["withCtx"])((function(){return[me,Object(n["createVNode"])(l,{group:i.group},null,8,["group"]),Oe,Object(n["createVNode"])(u,{editing:!0})]})),_:1})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(s,{title:"Scope of Work",id:"scope"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{group:i.group,ref:"geneList"},null,8,["group"]),he,Object(n["createVNode"])(d)]})),_:1}),Object(n["createVNode"])(s,{title:"Reanalysis & Discrepancy Resolution",id:"reanalysis"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b)]})),_:1}),Object(n["createVNode"])(s,{title:"NHGRI Data Availability",id:"nhgri"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m)]})),_:1})]})),_:1},8,["disabled"]),Object(n["createVNode"])(O,{id:"draft-specifications",title:"Draft Specifications",disabled:i.group.expert_panel.current_step<2||i.group.expert_panel.hasPendingSubmission,"no-submit":!0},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(h)]})),_:1})]})),_:1},8,["disabled"]),Object(n["createVNode"])(O,{id:"pilot-specifications",title:"Pilot Specifications",disabled:i.group.expert_panel.current_step<3||i.group.expert_panel.hasPendingSubmission,"no-submit":!0},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(h)]})),_:1})]})),_:1},8,["disabled"]),Object(n["createVNode"])(O,{id:"sustained-curation",title:"Sustained Curation",disabled:i.group.expert_panel.current_step<4||i.group.expert_panel.hasPendingSubmission},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{title:"Plans for Ongoing Review and Reanalysis and Discrepancy Resolution",id:"curationReviewProcess"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j)]})),_:1}),Object(n["createVNode"])(s,{title:"Example Evidence Summaries",id:"evidenceSummaries"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f)]})),_:1}),Object(n["createVNode"])(s,{title:"Designation of Biocurators, Biocurator Trainer(s) and Core Approval Members",id:"designations"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{ref:"designationForm"},null,512)]})),_:1})]})),_:1},8,["disabled"])])}var fe=o("a266"),ge=o("abba"),ve=o("324b"),Ce=o("ec0d"),Ve=o("4d1a"),Ne=o("62a2"),we=o("1d7f"),ke={name:"ApplicationVcep",components:{"app-section":y["a"],ApplicationStep:re,AttestationNhgri:ie["a"],AttestationReanalysis:fe["a"],CspecSummary:ge["a"],EvidenceSummaryList:ve["a"],GroupForm:se["a"],MemberDesignationForm:Ce["a"],MemberList:le["a"],MembershipDescriptionForm:Ve["a"],ScopeDescriptionForm:ue["a"],VcepGeneList:Ne["a"],VcepOngoingPlansForm:we["a"]},data:function(){return{application:oe["c"]}},computed:{group:{get:function(){return this.$store.getters["groups/currentItemOrNew"]},set:function(e){this.$store.commit("groups/addItem",e)}},currentStep:function(){return this.group.expert_panel.current_step}},methods:{save:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=Object.keys(e.$refs).map((function(t){return e.$refs[t].save()})),o.push(e.saveUpdates()),t.prev=2,t.next=5,Promise.all(o);case 5:t.next=13;break;case 7:if(t.prev=7,t.t0=t["catch"](2),!Object(k["c"])(t.t0)){t.next=12;break}return e.errors=t.t0.response.data.errors,t.abrupt("return");case 12:throw t.t0;case 13:case"end":return t.stop()}}),t,null,[[2,7]])})))()},saveUpdates:function(){var e=this;if(this.group.expert_panel.isDirty())return this.$store.dispatch("groups/saveApplicationData",this.group).then((function(){return e.$store.commit("pushSuccess","Application updated")}))}}};ke.render=je;var ye=ke,xe={class:"menu-items"};function Ee(e,t,o,r,c,i){var a=Object(n["resolveComponent"])("menu-item");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:Object(n["normalizeClass"])([{collapsed:o.isCollapsed},"app-menu overflow-y-auto"])},[Object(n["createElementVNode"])("ul",xe,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.application.steps,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t},[Object(n["createVNode"])(a,{item:e,class:"block","is-current-step":i.isCurrentStep(e)},null,8,["item","is-current-step"])])})),128))])],2)}var _e={class:"item"},Be={key:0},Se={key:0,class:"ml-4 text-smaller"};function Re(e,t,o,r,c,i){var a=this,s=Object(n["resolveComponent"])("icon-cheveron-right"),l=Object(n["resolveComponent"])("icon-checkmark"),u=Object(n["resolveComponent"])("badge"),p=Object(n["resolveComponent"])("menu-item",!0);return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",_e,[i.isStep?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Be,[Object(n["createElementVNode"])("header",{class:Object(n["normalizeClass"])(["flex justify-between label",{open:!c.collapsed,"current-step":o.isCurrentStep}]),onClick:t[0]||(t[0]=function(){return i.toggleContents&&i.toggleContents.apply(i,arguments)})},[Object(n["createElementVNode"])("div",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.item.title)+" ",1),i.hasManySections?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0,class:"cheveron inline -mt-1"})):Object(n["createCommentVNode"])("",!0)]),o.item.isComplete(i.group)?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,color:"green"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{width:"12",height:"12"})]})),_:1})):Object(n["createCommentVNode"])("",!0)],2),Object(n["createVNode"])(n["Transition"],{name:"slide-fade-down"},{default:Object(n["withCtx"])((function(){return[a.item.sections&&i.hasManySections?Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",Se,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.item.sections,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t},[Object(n["createVNode"])(p,{item:e},null,8,["item"])])})),128))],512)),[[n["vShow"],!c.collapsed]]):Object(n["createCommentVNode"])("",!0)]})),_:1})])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:1,class:"label",onClick:t[1]||(t[1]=function(e){return i.goToItem()})},Object(n["toDisplayString"])(o.item.title),1))])}var De={name:"MenuItem",props:{item:{required:!0,type:Object},collapsible:{type:Boolean,required:!1,default:!0},isCurrentStep:{type:Boolean,required:!1,default:!1}},data:function(){return{collapsed:!0}},computed:{label:function(){return this.item.label},contents:function(){return this.item.contents},route:function(){return this.item.route},group:function(){return this.$store.getters["groups/currentItemOrNew"]},isStep:function(){return this.item.sections},hasManySections:function(){return this.item.sections.length>0}},watch:{isCurrentStep:{immediate:!0,handler:function(e){this.collapsible&&(this.collapsed=!0),e&&(this.collapsed=!1)}}},methods:{collapse:function(){this.collapsed=!0},expand:function(){this.collapsed=!1},toggleContents:function(){this.collapsed=!this.collapsed,this.goToItem()},goToItem:function(){location.href="#",location.href="#".concat(this.item.name)}}};o("ed3e");De.render=Re,De.__scopeId="data-v-07b77618";var Te=De,$e={components:{MenuItem:Te},props:{application:{required:!0,type:Object},isCollapsed:{required:!1,type:Boolean,default:!1}},data:function(){return{}},computed:{group:function(){return this.$store.getters["groups/currentItemOrNew"]}},methods:{isCurrentStep:function(e){return e.name==this.application.getCurrentStep(this.group).name}}};o("11ac");$e.render=Ee,$e.__scopeId="data-v-ce1ae008";var Me=$e,Ie=o("ae23"),qe={name:"GroupApplication",components:{ApplicationGcep:be,ApplicationVcep:ye,ApplicationMenu:Me},props:{uuid:{type:String,required:!0}},data:function(){return{showDocumentation:!1,showModal:!1,showApplicationToc:!0}},watch:{$route:function(){this.showModal=!!this.$route.meta.showModal&&Boolean(this.$route.meta.showModal)},uuid:{immediate:!0,handler:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("groups/find",t).then((function(){o.$store.commit("groups/setCurrentItemIndexByUuid",o.uuid)}));case 2:return e.next=4,this.$store.dispatch("groups/getSubmissions",this.group);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},computed:{applicationComponent:function(){return this.group&&this.group.isVcep()?ye:this.group&&this.group.isGcep()?be:null},group:function(){var e=this.$store.getters["groups/currentItem"]||new Ie["a"];return e||new Ie["a"]},application:function(){return this.group.isVcep()?oe["c"]:oe["a"]}},methods:{hideModal:function(){this.$router.replace({name:"GroupApplication",params:{uuid:this.uuid}})},handleModalClosed:function(e){this.clearModalForm(e),this.$router.push({name:"GroupApplication",params:{uuid:this.uuid}})},clearModalForm:function(){"function"===typeof this.$refs.modalView.clearForm&&this.$refs.modalView.clearForm()}},beforeUnmount:function(){this.$store.commit("groups/clearCurrentItem")}};o("dc78");qe.render=j,qe.__scopeId="data-v-64df88b4";t["default"]=qe},"769d":function(e,t,o){"use strict";o("3f28")},"7bcf":function(e,t,o){"use strict";o("650e")},"7f74":function(e,t,o){"use strict";o("2773")},8972:function(e,t,o){},"8ed1":function(e,t,o){"use strict";var n=o("7a23"),r=["id"],c={class:"application-section"},i={class:"mb-2 flex justify-between"};function a(e,t,o,a,s,l){var u=Object(n["resolveComponent"])("requirements-badge");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{id:o.id,class:"section-wrapper"},[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("header",i,[Object(n["renderSlot"])(e.$slots,"title",{},(function(){return[Object(n["createElementVNode"])("h2",null,Object(n["toDisplayString"])(o.title),1)]}),!0),o.id?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,section:l.section,group:l.group},null,8,["section","group"])):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",null,[Object(n["renderSlot"])(e.$slots,"default",{},void 0,!0)])])],8,r)}var s=o("3a9d"),l=o("5313"),u={name:"ApplicationSection",components:{RequirementsBadge:s["a"]},props:{title:{type:String,required:!1},id:{type:String,required:!1}},computed:{group:{get:function(){return this.$store.getters["groups/currentItemOrNew"]}},application:function(){return this.group.isVcep()?l["c"]:l["a"]},section:function(){return this.application.getSection(this.id)}}};o("7f74");u.render=a,u.__scopeId="data-v-279f0c58";t["a"]=u},"909b":function(e,t,o){},9371:function(e,t,o){"use strict";o("3b02")},dc78:function(e,t,o){"use strict";o("909b")},ec0d:function(e,t,o){"use strict";var n=o("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-66b73290"),e=e(),Object(n["popScopeId"])(),e},c={class:"text-sm"},i=r((function(){return Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",{colspan:"2"}," "),Object(n["createElementVNode"])("th",{colspan:"1",colgroup:"biocurator"}," "),Object(n["createElementVNode"])("th",{colspan:"2",colgroup:"biocurator",class:"text-center"},"Training"),Object(n["createElementVNode"])("th",{colspan:"2"}," ")],-1)})),a=r((function(){return Object(n["createElementVNode"])("th",null,"First Name",-1)})),s=r((function(){return Object(n["createElementVNode"])("th",null,"Last Name",-1)})),l=r((function(){return Object(n["createElementVNode"])("th",{colgroup:"biocurator",class:"w-24"},"Biocurator",-1)})),u=r((function(){return Object(n["createElementVNode"])("th",{colgroup:"biocurator",class:"w-20"},"Level 1",-1)})),p=r((function(){return Object(n["createElementVNode"])("th",{colgroup:"biocurator",class:"w-20"},"Level 2",-1)})),d=r((function(){return Object(n["createElementVNode"])("th",null,"Biocurator Trainer",-1)})),b=Object(n["createTextVNode"])(" Core Approval Member ");function m(e,t,o,r,m,O){var h=Object(n["resolveComponent"])("icon-info"),j=Object(n["resolveComponent"])("popper"),f=Object(n["resolveComponent"])("member-designation-row");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("table",c,[Object(n["createElementVNode"])("thead",null,[i,Object(n["createElementVNode"])("tr",null,[a,s,l,u,p,d,Object(n["createElementVNode"])("th",null,[b,Object(n["createVNode"])(j,{arrow:"",content:"Core approval members are responsible for ongoing final approval of variant classifications.",hover:""},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(h,{class:"inline-block cursor-pointer",width:16,height:16})]})),_:1})])])]),Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(O.group.members,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(f,{member:e,key:e.id,ref:"memberRow".concat(e.id),readonly:o.readonly},null,8,["member","readonly"])})),128))])])])}var O=o("1da1"),h=(o("b0c0"),o("d81d"),o("b64b"),o("96cf"),{colgroup:"biocurator"}),j=["disabled"],f={colgroup:"biocurator"},g=["disabled"],v={colgroup:"biocurator"},C=["disabled"],V=["disabled"],N=["disabled"];function w(e,t,o,r,c,i){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",null,[Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(c.workingCopy.person.first_name),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(c.workingCopy.person.last_name),1),Object(n["createElementVNode"])("td",h,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.biocurator=e}),disabled:!i.canEdit},null,8,j),[[n["vModelCheckbox"],i.biocurator]])]),Object(n["createElementVNode"])("td",f,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.workingCopy.training_level_1=e}),disabled:!i.canEdit},null,8,g),[[n["vModelCheckbox"],c.workingCopy.training_level_1]])]),Object(n["createElementVNode"])("td",v,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.workingCopy.training_level_2=e}),disabled:!i.canEdit},null,8,C),[[n["vModelCheckbox"],c.workingCopy.training_level_2]])]),Object(n["createElementVNode"])("td",null,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.biocuratorTrainer=e}),disabled:!i.canEdit},null,8,V),[[n["vModelCheckbox"],i.biocuratorTrainer]])]),Object(n["createElementVNode"])("td",null,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.coreApprovalMember=e}),disabled:!i.canEdit},null,8,N),[[n["vModelCheckbox"],i.coreApprovalMember]])])])}var k=o("86ed"),y={name:"ComponentName",props:{member:{type:k["a"],required:!0},readonly:{type:Boolean,required:!1,default:!1}},data:function(){return{workingCopy:new k["a"]}},computed:{group:function(){return this.$store.getters["groups/currentItemOrNew"]},biocurator:{get:function(){return this.workingCopy.hasRole("biocurator")},set:function(e){this.toggleRole(e,"biocurator")}},biocuratorTrainer:{get:function(){return this.workingCopy.hasRole("biocurator-trainer")},set:function(e){this.toggleRole(e,"biocurator-trainer")}},coreApprovalMember:{get:function(){return this.workingCopy.hasRole("core-approval-member")},set:function(e){this.toggleRole(e,"core-approval-member")}},canEdit:function(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},watch:{member:{immediate:!0,handler:function(e){this.syncWorkingCopy(e)}}},methods:{initWorkingCopy:function(){this.workingCopy=new k["a"]},syncWorkingCopy:function(e){e.id&&(this.workingCopy=e.clone())},toggleRole:function(e,t){if(console.log({hasRole:e,roleName:t}),e)return console.log("adding role..."),void this.workingCopy.addRole(t);this.workingCopy.removeRole(t)},save:function(){var e=[];return e.push(this.updateTrainingInfo()),e.push(this.syncRoles()),e},updateTrainingInfo:function(){if(this.workingCopy.isDirty("training_level_1")||this.workingCopy.isDirty("training_level_2"))return this.$store.dispatch("groups/memberUpdate",{groupUuid:this.group.uuid,memberId:this.workingCopy.id,data:{training_level_1:this.workingCopy.training_level_1,training_level_2:this.workingCopy.training_level_2}})},syncRoles:function(){if(this.workingCopy.isDirty("roles"))return this.$store.dispatch("groups/memberSyncRoles",{group:this.group,member:this.workingCopy})}}};o("7bcf");y.render=w,y.__scopeId="data-v-5c39af22";var x=y,E={name:"MemberDesignationForm",components:{MemberDesignationRow:x},props:{readonly:{type:Boolean,required:!1,default:!1}},computed:{group:{get:function(){return this.$store.getters["groups/currentItemOrNew"]}},canEdit:function(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},watch:{group:{immediate:!0,handler:function(e,t){var o=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:!e.id||t&&e.id==t.id||o.$store.dispatch("groups/getMembers",o.group);case 1:case"end":return n.stop()}}),n)})))()}}},methods:{getMembers:function(){this.$store.dispatch("groups/getMembers",{group:this.group})},save:function(){var e=this;return console.log(this.$options.name+".save"),Object.keys(this.$refs).map((function(t){return e.$refs[t].save()}))}}};o("9371");E.render=m,E.__scopeId="data-v-66b73290";t["a"]=E},ed3e:function(e,t,o){"use strict";o("8972")}}]);
//# sourceMappingURL=group-application.13dffab1.js.map