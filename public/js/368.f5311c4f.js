"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[368],{2738:function(e,r,t){t.d(r,{Z:function(){return I}});var a=t(6252),o=t(9963),n=t(3577);const i={key:0},s={class:"text-lg pr-4"},l={key:1,class:"well text-center"},u={class:"text-lg pr-4"};function d(e,r,t,d,m,c){const p=(0,a.up)("evidence-summary"),g=(0,a.up)("evidence-summary-form");return(0,a.wg)(),(0,a.iD)("div",null,[m.summaries.length>0?((0,a.wg)(),(0,a.iD)("ul",i,[(0,a.Wm)(o.W3,{name:"slide-fade-down"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.group.expert_panel.evidence_summaries,((e,r)=>((0,a.wg)(),(0,a.iD)("li",{class:"my-4 flex",key:r},[(0,a._)("div",s,(0,n.zw)(r+1),1),(0,a.Wm)(p,{summary:e,group:c.group,onSaved:c.handleSavedSummary,onDeleted:c.handleDeleted,class:"flex-1",readonly:t.readonly},null,8,["summary","group","onSaved","onDeleted","readonly"])])))),128))])),_:1})])):m.loading?((0,a.wg)(),(0,a.iD)("div",l,"Loading...")):((0,a.wg)(),(0,a.iD)("div",{key:2,class:(0,n.C_)(["well text-center",{"cursor-pointer":!t.readonly}]),onClick:r[0]||(r[0]=(...e)=>c.startNewSummary&&c.startNewSummary(...e))},"No example evidence summaries have been added.",2)),(0,a.wy)((0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(m.newSummaries,((e,r)=>((0,a.wg)(),(0,a.iD)("li",{class:"my-4 flex",key:r},[(0,a._)("div",u,(0,n.zw)(r+1+m.summaries.length),1),(0,a.Wm)(g,{class:"flex-1",group:c.group,summary:e,onSaved:c.handleSavedSummary,onCanceled:c.cancelAdd},null,8,["group","summary","onSaved","onCanceled"])])))),128))],512),[[o.F8,c.adding]]),(0,a.wy)((0,a._)("div",null,[(0,a.wy)((0,a._)("button",{class:"btn btn-xs",onClick:r[1]||(r[1]=(...e)=>c.startNewSummary&&c.startNewSummary(...e))},"Add Summary",512),[[o.F8,!c.adding]])],512),[[o.F8,!c.adding&&c.canEdit]])])}const m={key:0,class:"p-2 border rounded"},c={class:"flex justify-between"},p=(0,a._)("button",{class:"btn btn-xs"},"…",-1),g=(0,a.Uk)("Edit"),h=(0,a.Uk)("Delete"),y=["href"];function v(e,r,t,i,s,l){const u=(0,a.up)("dropdown-item"),d=(0,a.up)("dropdown-menu"),v=(0,a.up)("evidence-summary-form"),w=(0,a.up)("button-row"),b=(0,a.up)("modal-dialog");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o.uT,{mode:"out-in",name:"fade"},{default:(0,a.w5)((()=>[s.editing?((0,a.wg)(),(0,a.j4)(v,{key:1,summary:t.summary,group:t.group,onSaved:l.handleSaved,onCanceled:l.cancelEdit},null,8,["summary","group","onSaved","onCanceled"])):((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("header",c,[(0,a._)("h4",null,(0,n.zw)(t.summary.gene.gene_symbol)+" - "+(0,n.zw)(t.summary.variant),1),l.canEdit?((0,a.wg)(),(0,a.j4)(d,{key:0,"hide-cheveron":!0,class:"relative"},{label:(0,a.w5)((()=>[p])),default:(0,a.w5)((()=>[(0,a.Wm)(u,{onClick:r[0]||(r[0]=e=>l.edit())},{default:(0,a.w5)((()=>[g])),_:1}),(0,a.Wm)(u,{onClick:r[1]||(r[1]=e=>l.confirmDelete())},{default:(0,a.w5)((()=>[h])),_:1})])),_:1})):(0,a.kq)("",!0)]),(0,a._)("p",null,(0,n.zw)(t.summary.summary),1),t.summary.vci_url?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"link",href:t.summary.vci_url,target:"_blank"}," View in the VCI ",8,y)):(0,a.kq)("",!0)]))])),_:1}),((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(b,{modelValue:s.showDeleteConfirm,"onUpdate:modelValue":r[2]||(r[2]=e=>s.showDeleteConfirm=e),title:"You are about to delete an example evidence summary."},{default:(0,a.w5)((()=>[(0,a.Uk)(" You are about to delete an evidence summary for "+(0,n.zw)(t.summary.gene.gene_symbol)+" - "+(0,n.zw)(t.summary.variant)+". Are you sure you want to continue? ",1),(0,a.Wm)(w,{onSubmit:l.deleteSummary,onCancel:l.cancelDelete,"submit-text":"Delete Summary"},null,8,["onSubmit","onCancel"])])),_:1},8,["modelValue"])]))])}var w=t(812);const b={class:"flex space-x-2"},_=(0,a._)("option",{value:null},"Select...",-1),f=["value"];function C(e,r,t,i,s,l){const u=(0,a.up)("input-row"),d=(0,a.up)("button-row");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",b,[(0,a.Wm)(u,{class:"mt-0 mb-0",vertical:!0,label:"Gene",errors:s.errors.gene_id},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":r[0]||(r[0]=e=>s.summaryClone.gene_id=e)},[_,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.groupGenes,(e=>((0,a.wg)(),(0,a.iD)("option",{value:e.id,key:e.id},(0,n.zw)(e.gene_symbol),9,f)))),128))],512),[[o.bM,s.summaryClone.gene_id]])])),_:1},8,["errors"]),(0,a.Wm)(u,{class:"mt-0 mb-0",modelValue:s.summaryClone.variant,"onUpdate:modelValue":r[1]||(r[1]=e=>s.summaryClone.variant=e),vertical:!0,label:"Variant",errors:s.errors.variant},null,8,["modelValue","errors"])]),(0,a.Wm)(u,{class:"mt-0 mb-0",label:"Summary",vertical:!0,errors:s.errors.summary},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("textarea",{rows:"5",class:"w-full","onUpdate:modelValue":r[2]||(r[2]=e=>s.summaryClone.summary=e)},null,512),[[o.nr,s.summaryClone.summary]])])),_:1},8,["errors"]),(0,a.Wm)(u,{class:"mt-0",modelValue:s.summaryClone.vci_url,"onUpdate:modelValue":r[3]||(r[3]=e=>s.summaryClone.vci_url=e),label:"VCI URL",vertical:!0,"input-class":"w-full",errors:s.errors.vci_url},null,8,["modelValue","errors"]),(0,a.Wm)(d,{"submit-text":"save",onSubmit:l.save,onCancel:l.cancel},null,8,["onSubmit","onCancel"])])}var S=t(9700),k={name:"EvidenceSummaryForm",props:{group:{required:!0,type:Object},summary:{required:!0,type:Object}},emits:["saved","canceled"],data(){return{groupGenes:[],summaryClone:{gene:{}},errors:{}}},computed:{},watch:{group:{immediate:!0,handler:function(){this.group&&this.group.id&&this.getGroupGenes()}},summary:{immediate:!0,handler:function(){this.summaryClone={...this.summary}}}},methods:{async save(){try{let e=`/api/groups/${this.group.uuid}/expert-panel/evidence-summaries`,r="post";this.summaryClone.id&&(e+=`/${this.summaryClone.id}`,r="put");const t=await(0,w.Z)({method:r,url:e,data:this.summaryClone}).then((e=>e.data.data));this.$emit("saved",t),this.$store.commit("pushSuccess","Saved example evidence summary"),this.editing=!1}catch(e){(0,S.Z)(e)&&(this.errors=e.response.data.errors)}},cancel(){this.initSummaryClone(),this.$emit("canceled")},edit(e){e.editing=!0},async getGroupGenes(){this.groupGenes=await w.Z.get(`/api/groups/${this.group.uuid}/expert-panel/genes`).then((e=>e.data))},initSummaryClone(){this.summaryClone={gene:{}}}}},x=t(3744);const D=(0,x.Z)(k,[["render",C]]);var E=D,V={components:{EvidenceSummaryForm:E},name:"EvidenceSummary",props:{summary:{required:!0,type:Object},group:{required:!0,type:Object},readonly:{type:Boolean,required:!1,default:!1}},emits:["edit","saved","deleted"],data(){return{editing:!1,showDeleteConfirm:!1}},computed:{canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},methods:{handleSaved(e){this.$emit("saved",e),this.editing=!1},edit(){this.editing=!0},cancelEdit(){this.editing=!1},confirmDelete(){this.showDeleteConfirm=!0},async deleteSummary(){try{await w.Z["delete"](`/api/groups/${this.group.uuid}/application/evidence-summaries/${this.summary.id}`),this.$emit("deleted",this.summary)}catch(e){console.error(e)}this.showDeleteConfirm=!1},cancelDelete(){this.showDeleteConfirm=!1}}};const $=(0,x.Z)(V,[["render",v]]);var R=$,U={name:"EvidenceSummaryList",components:{EvidenceSummary:R,EvidenceSummaryForm:E},emits:["summaries-added"],props:{readonly:{type:Boolean,required:!1,default:!1}},data(){return{newSummaries:[],errors:{},summaries:[],showDeleteConfirm:!1,selectedSummary:{gene:{}},loading:!1}},computed:{group:{get(){return this.$store.getters["groups/currentItemOrNew"]},set(e){this.$store.commit("groups/addItem",e)}},meetsRequirements(){return this.summaries.length>4},adding(){return this.newSummaries.length>0},canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},watch:{group:{immediate:!0,handler:function(){this.group&&this.group.id&&this.getEvidenceSummaries()}}},methods:{async getEvidenceSummaries(){this.loading=!0;try{this.summaries=await this.$store.dispatch("groups/getEvidenceSummaries",this.group)}catch(e){console.log(e)}this.loading=!1},startNewSummary(){this.readonly||this.newSummaries.push({gene:null,variant:null,summary:null})},clearNewSummaries(){this.newSummaries=[]},handleSavedSummary(){this.getEvidenceSummaries(),this.clearNewSummaries(),this.$emit("summaries-added")},handleDeleted(e){const r=this.summaries.findIndex((r=>r.id==e.id));r>-1&&this.summaries.splice(r,1),this.getEvidenceSummaries()},cancelAdd(){this.clearNewSummaries()},mergeSummary(e){const r=this.summaries.findIndex((r=>r.id==e.id));r>-1?this.summaries.splice(r,1,e):this.summaries.push(e)}}};const W=(0,x.Z)(U,[["render",d]]);var I=W},8017:function(e,r,t){t.d(r,{Z:function(){return P}});var a=t(6252);const o=e=>((0,a.dD)("data-v-66e2eae8"),e=e(),(0,a.Cn)(),e),n={class:"text-sm"},i=o((()=>(0,a._)("tr",null,[(0,a._)("th",{colspan:"2"}," "),(0,a._)("th",{colspan:"1",colgroup:"biocurator"}," "),(0,a._)("th",{colspan:"2",colgroup:"biocurator",class:"text-center"},"Training"),(0,a._)("th",{colspan:"2"}," ")],-1))),s=o((()=>(0,a._)("th",null,"First Name",-1))),l=o((()=>(0,a._)("th",null,"Last Name",-1))),u=o((()=>(0,a._)("th",{colgroup:"biocurator",class:"w-24"},"Biocurator",-1))),d=o((()=>(0,a._)("th",{colgroup:"biocurator",class:"w-20"},"Level 1",-1))),m=o((()=>(0,a._)("th",{colgroup:"biocurator",class:"w-20"},"Level 2",-1))),c=o((()=>(0,a._)("th",null,"Biocurator Trainer",-1))),p=(0,a.Uk)(" Core Approval Member ");function g(e,r,t,o,g,h){const y=(0,a.up)("icon-info"),v=(0,a.up)("popover"),w=(0,a.up)("member-designation-row");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("table",n,[(0,a._)("thead",null,[i,(0,a._)("tr",null,[s,l,u,d,m,c,(0,a._)("th",null,[p,(0,a.Wm)(v,{arrow:"",content:"Core approval members are responsible for ongoing final approval of variant classifications.",hover:""},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{class:"inline-block cursor-pointer",width:16,height:16})])),_:1})])])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.group.members,(e=>((0,a.wg)(),(0,a.j4)(w,{member:e,key:e.id,ref_for:!0,ref:`memberRow${e.id}`,readonly:t.readonly,onUpdated:h.handleMemberUpdate},null,8,["member","readonly","onUpdated"])))),128))])])])}var h=t(3577),y=t(9963);const v={colgroup:"biocurator"},w=["disabled"],b={colgroup:"biocurator"},_=["disabled"],f={colgroup:"biocurator"},C=["disabled"],S=["disabled"],k=["disabled"];function x(e,r,t,o,n,i){return(0,a.wg)(),(0,a.iD)("tr",null,[(0,a._)("td",null,(0,h.zw)(n.workingCopy.person.first_name),1),(0,a._)("td",null,(0,h.zw)(n.workingCopy.person.last_name),1),(0,a._)("td",v,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":r[0]||(r[0]=e=>i.biocurator=e),disabled:!i.canEdit,onInput:r[1]||(r[1]=(...r)=>e.debounceSave&&e.debounceSave(...r))},null,40,w),[[y.e8,i.biocurator]])]),(0,a._)("td",b,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":r[2]||(r[2]=e=>n.workingCopy.training_level_1=e),disabled:!i.canEdit,onInput:r[3]||(r[3]=(...r)=>e.debounceSave&&e.debounceSave(...r))},null,40,_),[[y.e8,n.workingCopy.training_level_1]])]),(0,a._)("td",f,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=e=>n.workingCopy.training_level_2=e),disabled:!i.canEdit,onInput:r[5]||(r[5]=(...r)=>e.debounceSave&&e.debounceSave(...r))},null,40,C),[[y.e8,n.workingCopy.training_level_2]])]),(0,a._)("td",null,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":r[6]||(r[6]=e=>i.biocuratorTrainer=e),disabled:!i.canEdit,onInput:r[7]||(r[7]=(...r)=>e.debounceSave&&e.debounceSave(...r))},null,40,S),[[y.e8,i.biocuratorTrainer]])]),(0,a._)("td",null,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":r[8]||(r[8]=e=>i.coreApprovalMember=e),disabled:!i.canEdit,onInput:r[9]||(r[9]=(...r)=>e.debounceSave&&e.debounceSave(...r))},null,40,k),[[y.e8,i.coreApprovalMember]])])])}var D=t(1378),E=t(6486),V={name:"ComponentName",props:{member:{type:D.Z,required:!0},readonly:{type:Boolean,required:!1,default:!1}},emits:["updated"],data(){return{workingCopy:new D.Z}},computed:{group(){return this.$store.getters["groups/currentItemOrNew"]},biocurator:{get(){return this.workingCopy.hasRole("biocurator")},set(e){this.toggleRole(e,"biocurator")}},biocuratorTrainer:{get(){return this.workingCopy.hasRole("biocurator-trainer")},set(e){this.toggleRole(e,"biocurator-trainer")}},coreApprovalMember:{get(){return this.workingCopy.hasRole("core-approval-member")},set(e){this.toggleRole(e,"core-approval-member")}},canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},watch:{member:{immediate:!0,handler(e){this.syncWorkingCopy(e)}}},methods:{initWorkingCopy(){this.workingCopy=new D.Z},syncWorkingCopy(e){e.id&&(this.workingCopy=e.clone())},toggleRole(e,r){e?this.workingCopy.addRole(r):this.workingCopy.removeRole(r)},save(){const e=[];return e.push(this.updateTrainingInfo()),e.push(this.syncRoles()),e},updateTrainingInfo(){if(this.workingCopy.isDirty("training_level_1")||this.workingCopy.isDirty("training_level_2"))return this.$store.dispatch("groups/memberUpdate",{groupUuid:this.group.uuid,memberId:this.workingCopy.id,data:{training_level_1:this.workingCopy.training_level_1,training_level_2:this.workingCopy.training_level_2}})},syncRoles(){if(this.workingCopy.isDirty("roles"))return this.$store.dispatch("groups/memberSyncRoles",{group:this.group,member:this.workingCopy})},emitUpdated(){this.$emit("updated",this.workingCopy)}},created(){this.debounceSave=(0,E.debounce)((()=>{this.save()}),1e3)}},$=t(3744);const R=(0,$.Z)(V,[["render",x],["__scopeId","data-v-42410892"]]);var U=R,W={name:"MemberDesignationForm",components:{MemberDesignationRow:U},props:{readonly:{type:Boolean,required:!1,default:!1}},computed:{group:{get(){return this.$store.getters["groups/currentItemOrNew"]}},canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},watch:{group:{immediate:!0,async handler(e,r){!e.id||r&&e.id==r.id||this.$store.dispatch("groups/getMembers",this.group)}}},methods:{getMembers(){this.$store.dispatch("groups/getMembers",{group:this.group})},handleMemberUpdate(){this.$emit("updated")}}};const I=(0,$.Z)(W,[["render",g],["__scopeId","data-v-66e2eae8"]]);var P=I},4006:function(e,r,t){t.d(r,{Z:function(){return c}});var a=t(6252),o=t(3577);const n={class:"mb-4"},i=(0,a._)("p",{class:"text-sm mb-0"},"For all variants approved by either of the processes described above, a summary of approved variants should be sent to ensure that any members absent from a call have an opportunity to review each variant. The summary should be emailed to the full VCEP after the call and should summarize decisions that were made and invite feedback within a week.",-1),s={key:1};function l(e,r,t,l,u,d){const m=(0,a.up)("input-row");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",n,[(0,a.Wm)(m,{modelValue:d.group.expert_panel.meeting_frequency,"onUpdate:modelValue":[r[0]||(r[0]=e=>d.group.expert_panel.meeting_frequency=e),r[1]||(r[1]=r=>e.$emit("update"))],label:"Meeting/call frequency",errors:t.errors.meeting_frequency,placeholder:"Once per week","label-width-class":"w-44",disabled:!d.canEdit},null,8,["modelValue","errors","disabled"]),(0,a.Wm)(m,{modelValue:d.group.expert_panel.curation_review_protocol_id,"onUpdate:modelValue":[r[2]||(r[2]=e=>d.group.expert_panel.curation_review_protocol_id=e),r[3]||(r[3]=r=>e.$emit("update"))],options:[{value:1,label:"Process #1: Biocurator review followed by VCEP discussion"},{value:2,label:"Process #2: Paired biocurator/expert review followed by expedited VCEP approval"}],type:"radio-group",errors:t.errors.curation_review_protocol_id,disabeld:!d.canEdit,label:"VCEP Standardized Review Process",vertical:""},null,8,["modelValue","errors","disabeld"])]),i,d.canEdit?((0,a.wg)(),(0,a.j4)(m,{key:0,modelValue:d.group.expert_panel.curation_review_process_notes,"onUpdate:modelValue":[r[4]||(r[4]=e=>d.group.expert_panel.curation_review_process_notes=e),r[5]||(r[5]=r=>e.$emit("update"))],type:"large-text",label:"Curation and Review Process Notes",vertical:!0,"label-class":"font-bold"},null,8,["modelValue"])):((0,a.wg)(),(0,a.iD)("blockquote",s,(0,o.zw)(d.group.expert_panel.curation_review_process_notes),1))])}var u={name:"VcepOngoingPlansForm",props:{errors:{type:Object,required:!1,default:()=>({})},editing:{type:Boolean,required:!1,default:!0},readonly:{type:Boolean,required:!1,default:!1}},emits:["update"],computed:{group:{get(){return this.$store.getters["groups/currentItemOrNew"]},set(e){this.$store.commit("groups/addItem",e)}},canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}}},d=t(3744);const m=(0,d.Z)(u,[["render",l]]);var c=m},9368:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var a=t(6252),o=t(3577);const n=e=>((0,a.dD)("data-v-9206947e"),e=e(),(0,a.Cn)(),e),i={class:"mb-8"},s=n((()=>(0,a._)("p",{class:"text-md-lg"},"Each time a new ACMG Guidelines Specification is approved we ask that your review your sustained curation information and make sure it's up to date and accurate.",-1))),l=n((()=>(0,a._)("header",null,[(0,a._)("h3",null,"Plans for Ongoing Review and Reanalysis and Discrepancy Resolution")],-1))),u=n((()=>(0,a._)("header",null,[(0,a._)("h3",null,"Example Evidence Summaries")],-1))),d=n((()=>(0,a._)("header",null,[(0,a._)("h3",null,"Example Evidence Summaries")],-1))),m=n((()=>(0,a._)("header",null,[(0,a._)("h3",null,"Attestion of Accuracy")],-1))),c=["disabled"];function p(e,r,t,n,p,g){const h=(0,a.up)("group-breadcrumbs"),y=(0,a.up)("vcep-ongoing-plans-form"),v=(0,a.up)("evidence-summaries"),w=(0,a.up)("member-designation-form"),b=(0,a.up)("checkbox");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(h,{group:g.group},null,8,["group"]),(0,a._)("h1",null,"Review Sustained Curation Details for "+(0,o.zw)(g.group.displayName),1),s,(0,a._)("section",null,[l,(0,a.Wm)(y,{onUpdate:e.saveOngoingPlans,errors:p.errors},null,8,["onUpdate","errors"])]),(0,a._)("section",null,[u,(0,a.Wm)(v,{group:g.group,class:"pb-2 mb-4 border-b"},null,8,["group"])]),(0,a._)("section",null,[d,(0,a.Wm)(w,{class:"pb-2 mb-4 border-b"})]),(0,a._)("section",null,[m,(0,a.Wm)(b,{label:"I confirm that all of the information is is accurate and up to date.",modelValue:p.attestation,"onUpdate:modelValue":r[0]||(r[0]=e=>p.attestation=e),class:"text-md-lg"},null,8,["modelValue"]),(0,a._)("button",{onClick:r[1]||(r[1]=(...e)=>g.submitReview&&g.submitReview(...e)),disabled:g.canSubmit,class:"btn btn-lg blue"}," Submit ",8,c)])])}var g=t(4006),h=t(2738),y=t(8017),v=t(6486),w={name:"SustainedCurationReview",components:{VcepOngoingPlansForm:g.Z,EvidenceSummaries:h.Z,MemberDesignationForm:y.Z},props:{uuid:{type:String,required:!0}},data(){return{errors:{},attestation:!1}},computed:{group(){return this.$store.getters["groups/currentItemOrNew"]},expertPanel(){return this.group.expert_panel},canSubmit(){return!this.attestation}},watch:{uuid:{immediate:!0,handler(){this.getGroup()}}},methods:{getGroup(){this.$store.dispatch("groups/findAndSetCurrent",this.uuid)},async submitReview(){await this.$store.dispatch("groups/completeSustainedCurationReview",this.group),this.$router.go(-1)}},created(){this.saveOngoingPlans=(0,v.debounce)((()=>{const{uuid:e,expert_panel:r}=this.group;return this.$store.dispatch("groups/curationReviewProtocolUpdate",{uuid:e,expertPanel:r})}),2e3)}},b=t(3744);const _=(0,b.Z)(w,[["render",p],["__scopeId","data-v-9206947e"]]);var f=_}}]);
//# sourceMappingURL=368.f5311c4f.js.map