"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[635],{2738:function(e,t,n){n.d(t,{Z:function(){return W}});var a=n(6252),r=n(9963),s=n(3577);const i={key:0},o={class:"text-lg pr-4"},l={key:1,class:"well text-center"},u={class:"text-lg pr-4"};function d(e,t,n,d,m,c){const p=(0,a.up)("evidence-summary"),y=(0,a.up)("evidence-summary-form");return(0,a.wg)(),(0,a.iD)("div",null,[m.summaries.length>0?((0,a.wg)(),(0,a.iD)("ul",i,[(0,a.Wm)(r.W3,{name:"slide-fade-down"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.group.expert_panel.evidence_summaries,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{class:"my-4 flex",key:t},[(0,a._)("div",o,(0,s.zw)(t+1),1),(0,a.Wm)(p,{summary:e,group:c.group,onSaved:c.handleSavedSummary,onDeleted:c.handleDeleted,class:"flex-1",readonly:n.readonly},null,8,["summary","group","onSaved","onDeleted","readonly"])])))),128))])),_:1})])):m.loading?((0,a.wg)(),(0,a.iD)("div",l,"Loading...")):((0,a.wg)(),(0,a.iD)("div",{key:2,class:(0,s.C_)(["well text-center",{"cursor-pointer":!n.readonly}]),onClick:t[0]||(t[0]=(...e)=>c.startNewSummary&&c.startNewSummary(...e))},"No example evidence summaries have been added.",2)),(0,a.wy)((0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(m.newSummaries,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{class:"my-4 flex",key:t},[(0,a._)("div",u,(0,s.zw)(t+1+m.summaries.length),1),(0,a.Wm)(y,{class:"flex-1",group:c.group,summary:e,onSaved:c.handleSavedSummary,onCanceled:c.cancelAdd},null,8,["group","summary","onSaved","onCanceled"])])))),128))],512),[[r.F8,c.adding]]),(0,a.wy)((0,a._)("div",null,[(0,a.wy)((0,a._)("button",{class:"btn btn-xs",onClick:t[1]||(t[1]=(...e)=>c.startNewSummary&&c.startNewSummary(...e))},"Add Summary",512),[[r.F8,!c.adding]])],512),[[r.F8,!c.adding&&c.canEdit]])])}const m={key:0,class:"p-2 border rounded"},c={class:"flex justify-between"},p=(0,a._)("button",{class:"btn btn-xs"},"…",-1),y=(0,a.Uk)("Edit"),h=(0,a.Uk)("Delete"),g=["href"];function w(e,t,n,i,o,l){const u=(0,a.up)("dropdown-item"),d=(0,a.up)("dropdown-menu"),w=(0,a.up)("evidence-summary-form"),f=(0,a.up)("button-row"),v=(0,a.up)("modal-dialog");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r.uT,{mode:"out-in",name:"fade"},{default:(0,a.w5)((()=>[o.editing?((0,a.wg)(),(0,a.j4)(w,{key:1,summary:n.summary,group:n.group,onSaved:l.handleSaved,onCanceled:l.cancelEdit},null,8,["summary","group","onSaved","onCanceled"])):((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("header",c,[(0,a._)("h4",null,(0,s.zw)(n.summary.gene.gene_symbol)+" - "+(0,s.zw)(n.summary.variant),1),l.canEdit?((0,a.wg)(),(0,a.j4)(d,{key:0,"hide-cheveron":!0,class:"relative"},{label:(0,a.w5)((()=>[p])),default:(0,a.w5)((()=>[(0,a.Wm)(u,{onClick:t[0]||(t[0]=e=>l.edit())},{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)(u,{onClick:t[1]||(t[1]=e=>l.confirmDelete())},{default:(0,a.w5)((()=>[h])),_:1})])),_:1})):(0,a.kq)("",!0)]),(0,a._)("p",null,(0,s.zw)(n.summary.summary),1),n.summary.vci_url?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"link",href:n.summary.vci_url,target:"_blank"}," View in the VCI ",8,g)):(0,a.kq)("",!0)]))])),_:1}),((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(v,{modelValue:o.showDeleteConfirm,"onUpdate:modelValue":t[2]||(t[2]=e=>o.showDeleteConfirm=e),title:"You are about to delete an example evidence summary."},{default:(0,a.w5)((()=>[(0,a.Uk)(" You are about to delete an evidence summary for "+(0,s.zw)(n.summary.gene.gene_symbol)+" - "+(0,s.zw)(n.summary.variant)+". Are you sure you want to continue? ",1),(0,a.Wm)(f,{onSubmit:l.deleteSummary,onCancel:l.cancelDelete,"submit-text":"Delete Summary"},null,8,["onSubmit","onCancel"])])),_:1},8,["modelValue"])]))])}var f=n(812);const v={class:"flex space-x-2"},_=(0,a._)("option",{value:null},"Select...",-1),D=["value"];function b(e,t,n,i,o,l){const u=(0,a.up)("input-row"),d=(0,a.up)("button-row");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",v,[(0,a.Wm)(u,{class:"mt-0 mb-0",vertical:!0,label:"Gene",errors:o.errors.gene_id},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.summaryClone.gene_id=e)},[_,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.groupGenes,(e=>((0,a.wg)(),(0,a.iD)("option",{value:e.id,key:e.id},(0,s.zw)(e.gene_symbol),9,D)))),128))],512),[[r.bM,o.summaryClone.gene_id]])])),_:1},8,["errors"]),(0,a.Wm)(u,{class:"mt-0 mb-0",modelValue:o.summaryClone.variant,"onUpdate:modelValue":t[1]||(t[1]=e=>o.summaryClone.variant=e),vertical:!0,label:"Variant",errors:o.errors.variant},null,8,["modelValue","errors"])]),(0,a.Wm)(u,{class:"mt-0 mb-0",label:"Summary",vertical:!0,errors:o.errors.summary},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("textarea",{rows:"5",class:"w-full","onUpdate:modelValue":t[2]||(t[2]=e=>o.summaryClone.summary=e)},null,512),[[r.nr,o.summaryClone.summary]])])),_:1},8,["errors"]),(0,a.Wm)(u,{class:"mt-0",modelValue:o.summaryClone.vci_url,"onUpdate:modelValue":t[3]||(t[3]=e=>o.summaryClone.vci_url=e),label:"VCI URL",vertical:!0,"input-class":"w-full",errors:o.errors.vci_url},null,8,["modelValue","errors"]),(0,a.Wm)(d,{"submit-text":"save",onSubmit:l.save,onCancel:l.cancel},null,8,["onSubmit","onCancel"])])}var S=n(9700),k={name:"EvidenceSummaryForm",props:{group:{required:!0,type:Object},summary:{required:!0,type:Object}},emits:["saved","canceled"],data(){return{groupGenes:[],summaryClone:{gene:{}},errors:{}}},computed:{},watch:{group:{immediate:!0,handler:function(){this.group&&this.group.id&&this.getGroupGenes()}},summary:{immediate:!0,handler:function(){this.summaryClone={...this.summary}}}},methods:{async save(){try{let e=`/api/groups/${this.group.uuid}/expert-panel/evidence-summaries`,t="post";this.summaryClone.id&&(e+=`/${this.summaryClone.id}`,t="put");const n=await(0,f.Z)({method:t,url:e,data:this.summaryClone}).then((e=>e.data.data));this.$emit("saved",n),this.$store.commit("pushSuccess","Saved example evidence summary"),this.editing=!1}catch(e){(0,S.Z)(e)&&(this.errors=e.response.data.errors)}},cancel(){this.initSummaryClone(),this.$emit("canceled")},edit(e){e.editing=!0},async getGroupGenes(){this.groupGenes=await f.Z.get(`/api/groups/${this.group.uuid}/expert-panel/genes`).then((e=>e.data))},initSummaryClone(){this.summaryClone={gene:{}}}}},C=n(3744);const I=(0,C.Z)(k,[["render",b]]);var x=I,$={components:{EvidenceSummaryForm:x},name:"EvidenceSummary",props:{summary:{required:!0,type:Object},group:{required:!0,type:Object},readonly:{type:Boolean,required:!1,default:!1}},emits:["edit","saved","deleted"],data(){return{editing:!1,showDeleteConfirm:!1}},computed:{canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},methods:{handleSaved(e){this.$emit("saved",e),this.editing=!1},edit(){this.editing=!0},cancelEdit(){this.editing=!1},confirmDelete(){this.showDeleteConfirm=!0},async deleteSummary(){try{await f.Z["delete"](`/api/groups/${this.group.uuid}/application/evidence-summaries/${this.summary.id}`),this.$emit("deleted",this.summary)}catch(e){console.error(e)}this.showDeleteConfirm=!1},cancelDelete(){this.showDeleteConfirm=!1}}};const E=(0,C.Z)($,[["render",w]]);var A=E,T={name:"EvidenceSummaryList",components:{EvidenceSummary:A,EvidenceSummaryForm:x},emits:["summaries-added"],props:{readonly:{type:Boolean,required:!1,default:!1}},data(){return{newSummaries:[],errors:{},summaries:[],showDeleteConfirm:!1,selectedSummary:{gene:{}},loading:!1}},computed:{group:{get(){return this.$store.getters["groups/currentItemOrNew"]},set(e){this.$store.commit("groups/addItem",e)}},meetsRequirements(){return this.summaries.length>4},adding(){return this.newSummaries.length>0},canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},watch:{group:{immediate:!0,handler:function(){this.group&&this.group.id&&this.getEvidenceSummaries()}}},methods:{async getEvidenceSummaries(){this.loading=!0;try{this.summaries=await this.$store.dispatch("groups/getEvidenceSummaries",this.group)}catch(e){console.log(e)}this.loading=!1},startNewSummary(){this.readonly||this.newSummaries.push({gene:null,variant:null,summary:null})},clearNewSummaries(){this.newSummaries=[]},handleSavedSummary(){this.getEvidenceSummaries(),this.clearNewSummaries(),this.$emit("summaries-added")},handleDeleted(e){const t=this.summaries.findIndex((t=>t.id==e.id));t>-1&&this.summaries.splice(t,1),this.getEvidenceSummaries()},cancelAdd(){this.clearNewSummaries()},mergeSummary(e){const t=this.summaries.findIndex((t=>t.id==e.id));t>-1?this.summaries.splice(t,1,e):this.summaries.push(e)}}};const q=(0,C.Z)(T,[["render",d]]);var W=q},7851:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(6252);const r=(0,a._)("h3",null,"Legacy document-based specifications",-1);function s(e,t,n,s,i,o){const l=(0,a.up)("cspec-summary"),u=(0,a.up)("application-upload-form"),d=(0,a.up)("collapsible");return(0,a.wg)(),(0,a.iD)("div",null,[o.cspecSummaryEnabled?((0,a.wg)(),(0,a.j4)(l,{key:0,readonly:n.readonly},null,8,["readonly"])):(0,a.kq)("",!0),(0,a.Wm)(d,{class:"mt-4"},{title:(0,a.w5)((()=>[r])),default:(0,a.w5)((()=>[o.specificationUpload?((0,a.wg)(),(0,a.j4)(u,{key:0,"document-type-id":n.docTypeId,"show-notes":!1,readonly:n.readonly},null,8,["document-type-id","readonly"])):(0,a.kq)("",!0)])),_:1})])}var i=n(3577);const o={key:0,class:"well mb-2"},l={key:1},u={class:"mb-2"},d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Specification Name"),(0,a._)("th",null,"Status"),(0,a._)("th",null,"Last Updated"),(0,a._)("th",null," ")])],-1),m=["href"],c=["disabled"],p=(0,a.Uk)(" Go to the CSpec Registry "),y=(0,a.Uk)("It may take up to an hour for the latest updates in the CSPEC Registry to display here.");function h(e,t,n,r,s,h){const g=(0,a.up)("icon-arrow-right"),w=(0,a.up)("note");return(0,a.wg)(),(0,a.iD)("div",null,[h.hasSpecifications?((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("table",u,[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.specifications,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,i.zw)(t.name),1),(0,a._)("td",null,(0,i.zw)(t.status),1),(0,a._)("td",null,(0,i.zw)(e.formatDate(t.updated_at)),1),(0,a._)("td",null,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",{target:"cspec_edit",href:`https://cspec.genome.network/cspec/ed/svi/doc/${t.cspec_id}`},"Edit",8,m)])])])])))),128))])])])):((0,a.wg)(),(0,a.iD)("div",o," No specifications on record in the CSPEC Registry. ")),(0,a._)("a",{class:"btn btn-lg blue",target:"cspec-editor",disabled:n.readonly,href:"https://cspec.genome.network/"},[p,(0,a.Wm)(g,{class:"inline"})],8,c),(0,a.Wm)(w,{class:"mt-2"},{default:(0,a.w5)((()=>[y])),_:1})])}var g={name:"CspecSummary",props:{readonly:{type:Boolean,default:!1}},data(){return{sort:{field:"id",desc:!1},specFields:[{name:"name",type:String,sortable:!0},{name:"status",label:"Status",type:String,sortable:!0},{name:"updated_at",label:"Last Updated",type:Date,sortable:!0}]}},computed:{group(){return this.$store.getters["groups/currentItemOrNew"]},hasSpecifications(){return this.group.expert_panel.specifications&&this.group.expert_panel.specifications.length>0},specifications(){return this.group.expert_panel.specifications}},watch:{group(e){this.$store.dispatch("groups/getSpecifications",e)}},methods:{goToCspec(){window.location="https://cspec.genome.network/"}},mounted(){this.$store.dispatch("groups/getSpecifications",this.group)}},w=n(3744);const f=(0,w.Z)(g,[["render",h]]);var v=f;const _={key:0,class:"table"},D=(0,a._)("th",null,"File",-1),b={key:0},S=(0,a._)("th",null,"uploaded",-1),k=(0,a._)("th",null,null,-1),C=["href"],I={class:"note"},x={key:0},$=(0,a._)("button",{class:"btn btn-xs"},"…",-1),E=(0,a.Uk)("Download"),A=(0,a.Uk)("Delete"),T={key:1},q={type:"file",ref:"fileInput"},W={key:0},U={key:0,class:"mb-3"},V=(0,a._)("p",null,"Are you sure you want to continue?",-1);function N(e,t,n,r,s,o){const l=(0,a.up)("dropdown-item"),u=(0,a.up)("dropdown-menu"),d=(0,a.up)("input-row"),m=(0,a.up)("button-row"),c=(0,a.up)("modal-dialog");return(0,a.wg)(),(0,a.iD)("div",null,[o.documents.length>0?((0,a.wg)(),(0,a.iD)("table",_,[(0,a._)("thead",null,[(0,a._)("tr",null,[D,o.docTypeIsArray?((0,a.wg)(),(0,a.iD)("th",b,"Type")):(0,a.kq)("",!0),S,k])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.documents,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id,class:"p-1 border"},[(0,a._)("td",null,[(0,a._)("a",{href:t.download_url},(0,i.zw)(t.filename),9,C),(0,a._)("span",I," (v. "+(0,i.zw)(t.version)+")",1)]),o.docTypeIsArray?((0,a.wg)(),(0,a.iD)("td",x,(0,i.zw)(t.type.long_name),1)):(0,a.kq)("",!0),(0,a._)("td",null,(0,i.zw)(e.formatDate(t.created_at)),1),(0,a._)("td",null,[(0,a.Wm)(u,{hideCheveron:""},{label:(0,a.w5)((()=>[$])),default:(0,a.w5)((()=>[(0,a.Wm)(l,{onClick:e=>o.initDownload(t)},{default:(0,a.w5)((()=>[E])),_:2},1032,["onClick"]),e.hasAnyPermission(["ep-applications-manage",["application-edit",o.group]])?((0,a.wg)(),(0,a.j4)(l,{key:0,onClick:e=>o.initDelete(t)},{default:(0,a.w5)((()=>[A])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])),_:2},1024)])])))),128))])])):(0,a.kq)("",!0),n.readonly?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",T,[o.docTypeIsArray?((0,a.wg)(),(0,a.j4)(d,{key:0,label:"Document type",type:"select",options:o.filteredTypes,modelValue:s.newDocument.document_type_id,"onUpdate:modelValue":t[0]||(t[0]=e=>s.newDocument.document_type_id=e)},null,8,["options","modelValue"])):(0,a.kq)("",!0),(0,a.Wm)(d,{label:"Document",errors:s.errors.file},{default:(0,a.w5)((()=>[(0,a._)("input",q,null,512)])),_:1},8,["errors"]),(0,a._)("button",{class:"btn blue",onClick:t[1]||(t[1]=(...e)=>o.save&&o.save(...e))},"Upload")])),((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(c,{modelValue:s.showDeleteConfirmation,"onUpdate:modelValue":t[2]||(t[2]=e=>s.showDeleteConfirmation=e),title:`You are about to delete ${s.activeDocument.filename}`},{default:(0,a.w5)((()=>[s.activeDocument?((0,a.wg)(),(0,a.iD)("div",W,[s.activeDocument.is_final?((0,a.wg)(),(0,a.iD)("p",U," This version has been tagged as the final version of the document. ")):(0,a.kq)("",!0),V,(0,a.Wm)(m,{"submit-text":"Delete Document",onCanceled:o.cancelDelete,onSubmitted:o.commitDelete},null,8,["onCanceled","onSubmitted"])])):(0,a.kq)("",!0)])),_:1},8,["modelValue","title"])]))])}n(6699);var z=n(5699),j=n(9028),F=n(3823);const Z=F.documentsTypes;var O={props:{documentTypeId:{type:[Number,Array],required:!0},step:{type:Number,required:!1,default:null},showNotes:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},emits:["saved"],data(){return{newDocument:{file:null,date_received:(new Date).toISOString(),step:this.step},errors:{},activeDocument:{},showDeleteConfirmation:!1}},computed:{group(){return this.$store.getters["groups/currentItemOrNew"]},documents(){return this.group.documents.filter((e=>this.docTypeIsArray?this.documentTypeId.includes(e.document_type_id):e.document_type_id==this.documentTypeId))},docTypeIsArray(){return Array.isArray(this.documentTypeId)},filteredTypes(){return this.docTypeIsArray?Object.values(Z).filter((e=>this.documentTypeId.includes(e.id))).map((e=>({label:e.long_name,value:e.id}))):[]},document_type_id(){return this.docTypeIsArray?null:this.documentTypeId}},methods:{async save(){try{let e=new FormData;Object.keys(this.newDocument).forEach((t=>{const n=this.newDocument[t];null!=n&&e.append(t,n)})),e.append("file",this.$refs.fileInput.files[0]),e.append("document_type_id",this.documentTypeId),e.forEach((e=>console.log(e))),await this.$store.dispatch("groups/addApplicationDocument",{group:this.group,data:e}),this.clearForm(),this.$emit("saved")}catch(e){if((0,j.z1)(e))return void(this.errors=e.response.data.errors)}},cancel(){this.clearForm(),this.$emit("canceled")},clearForm(){this.initNewDocument(),this.clearErrors()},initNewDocument(){this.$refs.fileInput.value=null,this.newDocument={file:null,date_received:(0,z.p6)(new Date),date_reviewed:null,step:this.step,document_type_id:this.documentTypeId,notes:null}},clearErrors(){this.errors={}},initDownload(e){window.location=e.download_url},initDelete(e){this.activeDocument=e,this.showDeleteConfirmation=!0},cancelDelete(){this.showDeleteConfirmation=!1,this.resetActiveDocument()},async commitDelete(){await this.$store.dispatch("groups/deleteDocument",{group:this.group,document:this.activeDocument}),this.showDeleteConfirmation=!1,this.resetActiveDocument()},resetActiveDocument(){this.activeDocument={type:{}}}},mounted(){this.$store.dispatch("groups/getDocuments",this.group)}};const G=(0,w.Z)(O,[["render",N]]);var Y=G,R={name:"SpecificationsSection",props:{docTypeId:{required:!0,type:[Number,Array]},readonly:{type:Boolean,default:!1}},components:{CspecSummary:v,ApplicationUploadForm:Y},data(){return{}},computed:{cspecSummaryEnabled(){return this.$store.state.systemInfo.app.features.cspec_summary},specificationUpload(){return this.$store.state.systemInfo.app.features.specification_upload}},methods:{}};const B=(0,w.Z)(R,[["render",s]]);var L=B}}]);
//# sourceMappingURL=635.1cf72a03.js.map