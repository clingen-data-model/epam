"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[677],{2790:function(e,t,r){r.d(t,{Z:function(){return l}});r(6699);var o=r(2119),i=r(6252);function l(e=null){const t=(0,o.tv)(),r=(0,o.yj)();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});const l=(0,i.Fl)({immediate:!0,get(){return Object.keys(r.query).includes("sort-field")?{field:r.query["sort-field"],desc:Boolean(parseInt(r.query["sort-desc"]))}:e},set(e){const o={"sort-field":e.field,"sort-desc":e.desc?1:0},i={...r.query,...o};t.replace({path:r.path,query:i})}}),s=(0,i.Fl)({set(e){let o=r.query,i=r.path,l={...o};e?l={...o,filter:e}:delete l.filter,t.replace({path:i,query:l})},get(){return r.query.filter},immediate:!0});return{sort:l,filter:s}}},6517:function(e,t,r){r.d(t,{Z:function(){return _}});var o=r(6252),i=r(3577);const l={key:0},s={class:"block-title"},n=(0,o.Uk)(" COI response for "),a={key:0},u={class:"text-sm response-data"},d={class:"flex-0"},m=(0,o._)("p",{class:"mb-2"},"This is a legacy response.",-1),p={key:1,class:"response-data"};function c(e,t,r,c,b,w){const h=(0,o.up)("dictionary-row");return w.response?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("h2",s,[n,r.coi.data.first_name?((0,o.wg)(),(0,o.iD)("span",a,(0,i.zw)(e.titleCase(`${r.coi.data.first_name} ${r.coi.data.last_name}`))+" in ",1)):(0,o.kq)("",!0),(0,o.Uk)(" "+(0,i.zw)(r.group.name)+" (v. "+(0,i.zw)(r.coi.version)+") ",1)]),(0,o._)("div",u,[(0,o.Wm)(h,{label:"Name","label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(r.coi.data.first_name)+" "+(0,i.zw)(r.coi.data.last_name),1)])),_:1}),(0,o.Wm)(h,{label:"Email","label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(r.coi.data.email),1)])),_:1}),w.response.document_uuid?((0,o.wg)(),(0,o.j4)(h,{key:0,label:"COI File","label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o._)("div",d,[m,(0,o._)("button",{class:"btn btn-xs",onClick:t[0]||(t[0]=e=>w.downloadDocument(w.response.download_url.response))}," Download the COI. ")])])),_:1})):(0,o.kq)("",!0),w.response.document_uuid?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(h,{label:w.response.work_fee_lab.question,vertical:!0,"label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(w.getQuestionValue(w.response.work_fee_lab.response)),1)])),_:1},8,["label"]),"1.0.0"==w.version?((0,o.wg)(),(0,o.j4)(h,{key:0,label:w.response.contributions_to_gd_in_ep.question,vertical:!0,"label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(w.getQuestionValue(w.response.contributions_to_gd_in_ep.response))+" ",1),1==w.response.contributions_to_gd_in_ep.response?((0,o.wg)(),(0,o.j4)(h,{key:0,label:w.response.contributions_to_genes.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(w.getQuestionValue(w.response.contributions_to_genes.response)),1)])),_:1},8,["label"])):(0,o.kq)("",!0)])),_:1},8,["label"])):(0,o.kq)("",!0),"2.0.0"==w.version?((0,o.wg)(),(0,o.j4)(h,{key:1,label:w.response.contributions_to_gd_in_group.question,vertical:!0,"label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(w.getQuestionValue(w.response.contributions_to_gd_in_group.response))+" ",1),1==w.response.contributions_to_gd_in_group.response?((0,o.wg)(),(0,o.j4)(h,{key:0,label:w.response.contributions_to_genes.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(w.getQuestionValue(w.response.contributions_to_genes.response)),1)])),_:1},8,["label"])):(0,o.kq)("",!0)])),_:1},8,["label"])):(0,o.kq)("",!0),"1.0.0"==w.version?((0,o.wg)(),(0,o.j4)(h,{key:2,label:w.response.independent_efforts.question,vertical:!0,"label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(w.getQuestionValue(w.response.independent_efforts.response))+" ",1),[1,2].indexOf(w.response.independent_efforts.response)>-1?((0,o.wg)(),(0,o.j4)(h,{key:0,label:w.response.independent_efforts_details.question,vertical:!0,class:"pb-1 mb-1 ml-4 border-none","label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(w.getQuestionValue(w.response.independent_efforts_details.response)),1)])),_:1},8,["label"])):(0,o.kq)("",!0)])),_:1},8,["label"])):(0,o.kq)("",!0),(0,o.Wm)(h,{label:w.response.coi.question,vertical:!0,class:"pb-1 mb-1","label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(w.getQuestionValue(w.response.coi.response))+" ",1),[1,2].indexOf(w.response.coi.response)>-1?((0,o.wg)(),(0,o.j4)(h,{key:0,label:w.response.coi_details.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(w.getQuestionValue(w.response.coi_details.response)),1)])),_:1},8,["label"])):(0,o.kq)("",!0)])),_:1},8,["label"])]))])])):(0,o.kq)("",!0)}var b={props:{coi:{type:Object,required:!0},group:{type:Object,required:!0}},data(){return{}},computed:{isLegacy(){return!1},response(){return this.coi.response_document},version(){return this.coi.version}},methods:{getQuestionValue(e){return 1===e?"Yes":0===e?"No":2===e?"Unsure":e},downloadDocument(e){window.location=e}}},w=r(3744);const h=(0,w.Z)(b,[["render",c]]);var _=h},4358:function(e,t,r){r.d(t,{Z:function(){return x}});var o=r(6252),i=r(9963);const l=(0,o._)("p",null,"Three examples of ClinGen-approved curation and review protocols are below (additional details may be requested from the CDWG Oversight Committee). Check or describe the curation and review protocol that this Expert Panel will use.",-1),s={class:"mb-4"},n={class:"mt-2"},a=["disabled"],u=(0,o._)("div",null,"Single biocurator curation with comprehensive GCEP review (presentation of all data on calls with GCEP votes). Note: definitive genes may be expedited with brief summaries.",-1),d={class:"mt-2 items-top"},m=["disabled"],p=(0,o._)("p",null,"Paired review (biocurator & domain expert) with expedited GCEP review. Expert works closely with a curator on the initial summation of the information for expedited GCEP review (brief summary on a call with GCEP voting and/or electronic voting by GCEP). Definitive genes can move directly from biocurator to expedited GCEP review.",-1),c={class:"mt-2"},b=["disabled"],w=(0,o._)("p",null,"Dual biocurator review with expedited GCEP review for concordant genes and full review for discordant genes.",-1),h={class:"flex space-x-2 items-start mt-3"},_=["disabled"],g=(0,o._)("p",null,"Other",-1);function f(e,t,r,f,v,y){const k=(0,o.up)("input-row");return(0,o.wg)(),(0,o.iD)("div",null,[l,(0,o._)("div",s,[(0,o.Wm)(k,{label:"",errors:r.errors.curation_review_protocol_id,vertical:""},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("label",n,[(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>y.group.expert_panel.curation_review_protocol_id=e),value:"1",disabled:!y.canEdit,onInput:t[1]||(t[1]=t=>e.$emit("update"))},null,40,a),[[i.G2,y.group.expert_panel.curation_review_protocol_id]]),u]),(0,o._)("label",d,[(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>y.group.expert_panel.curation_review_protocol_id=e),value:"2",disabled:!y.canEdit,onInput:t[3]||(t[3]=t=>e.$emit("update"))},null,40,m),[[i.G2,y.group.expert_panel.curation_review_protocol_id]]),p]),(0,o._)("label",c,[(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=e=>y.group.expert_panel.curation_review_protocol_id=e),value:"3",disabled:!y.canEdit,onInput:t[5]||(t[5]=t=>e.$emit("update"))},null,40,b),[[i.G2,y.group.expert_panel.curation_review_protocol_id]]),w]),(0,o._)("div",h,[(0,o._)("label",null,[(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=e=>y.group.expert_panel.curation_review_protocol_id=e),value:"100",disabled:!y.canEdit,onInput:t[7]||(t[7]=t=>e.$emit("update"))},null,40,_),[[i.G2,y.group.expert_panel.curation_review_protocol_id]]),g]),(0,o.Wm)(i.uT,{name:"slide-fade-down"},{default:(0,o.w5)((()=>[100==y.group.expert_panel.curation_review_protocol_id?((0,o.wg)(),(0,o.j4)(k,{key:0,class:"flex-1 mt-0","label-width-class":"w-0",modelValue:y.group.expert_panel.curation_review_protocol_other,"onUpdate:modelValue":[t[8]||(t[8]=e=>y.group.expert_panel.curation_review_protocol_other=e),t[9]||(t[9]=t=>e.$emit("update"))],errors:r.errors.curation_review_protocol_other,type:"large-text"},null,8,["modelValue","errors"])):(0,o.kq)("",!0)])),_:1})])])])),_:1},8,["errors"])])])}var v={name:"GcepOngoingPlansForm",props:{errors:{type:Object,required:!1,default:()=>({})},readonly:{type:Boolean,required:!1,default:!1}},computed:{group:{get(){return this.$store.getters["groups/currentItemOrNew"]},set(e){this.$store.commit("groups/addItem",e)}},canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}}},y=r(3744);const k=(0,y.Z)(v,[["render",f]]);var x=k},4006:function(e,t,r){r.d(t,{Z:function(){return p}});var o=r(6252),i=r(3577);const l={class:"mb-4"},s=(0,o._)("p",{class:"text-sm mb-0"},"For all variants approved by either of the processes described above, a summary of approved variants should be sent to ensure that any members absent from a call have an opportunity to review each variant. The summary should be emailed to the full VCEP after the call and should summarize decisions that were made and invite feedback within a week.",-1),n={key:1};function a(e,t,r,a,u,d){const m=(0,o.up)("input-row");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",l,[(0,o.Wm)(m,{modelValue:d.group.expert_panel.meeting_frequency,"onUpdate:modelValue":[t[0]||(t[0]=e=>d.group.expert_panel.meeting_frequency=e),t[1]||(t[1]=t=>e.$emit("update"))],label:"Meeting/call frequency",errors:r.errors.meeting_frequency,placeholder:"Once per week","label-width-class":"w-44",disabled:!d.canEdit},null,8,["modelValue","errors","disabled"]),(0,o.Wm)(m,{modelValue:d.group.expert_panel.curation_review_protocol_id,"onUpdate:modelValue":[t[2]||(t[2]=e=>d.group.expert_panel.curation_review_protocol_id=e),t[3]||(t[3]=t=>e.$emit("update"))],options:[{value:1,label:"Process #1: Biocurator review followed by VCEP discussion"},{value:2,label:"Process #2: Paired biocurator/expert review followed by expedited VCEP approval"}],type:"radio-group",errors:r.errors.curation_review_protocol_id,disabeld:!d.canEdit,label:"VCEP Standardized Review Process",vertical:""},null,8,["modelValue","errors","disabeld"])]),s,d.canEdit?((0,o.wg)(),(0,o.j4)(m,{key:0,modelValue:d.group.expert_panel.curation_review_process_notes,"onUpdate:modelValue":[t[4]||(t[4]=e=>d.group.expert_panel.curation_review_process_notes=e),t[5]||(t[5]=t=>e.$emit("update"))],type:"large-text",label:"Curation and Review Process Notes",vertical:!0,"label-class":"font-bold"},null,8,["modelValue"])):((0,o.wg)(),(0,o.iD)("blockquote",n,(0,i.zw)(d.group.expert_panel.curation_review_process_notes),1))])}var u={name:"VcepOngoingPlansForm",props:{errors:{type:Object,required:!1,default:()=>({})},editing:{type:Boolean,required:!1,default:!0},readonly:{type:Boolean,required:!1,default:!1}},emits:["update"],computed:{group:{get(){return this.$store.getters["groups/currentItemOrNew"]},set(e){this.$store.commit("groups/addItem",e)}},canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}}},d=r(3744);const m=(0,d.Z)(u,[["render",a]]);var p=m},5812:function(e,t,r){r.d(t,{Z:function(){return xe}});var o=r(6252),i=r(3577),l=r(9963);const s={class:"flex justify-between items-end"},n={class:"flex space-x-2 items-center"},a=(0,o._)("h2",null,"Members",-1),u={class:"flex space-x-2 items-center pb-0.5"},d={key:0},m={key:1,class:"flex space-x-2 items-center"},p=["href"],c={class:"btn btn-icon"},b=(0,o.Uk)("Downloads:"),w=["href"],h=(0,o.Uk)(" (PDF)"),_=["href"],g=(0,o.Uk)(" (CSV)"),f={key:0},v={class:"flex justify-between px-2 space-x-2 bg-blue-200 rounded-lg"},y={class:"flex-1"},k=(0,o._)("option",{value:null},"Select…",-1),x=["value"],C={class:"flex-1 py-2"},q={class:"flex-1 py-2"},M={class:"mt-3 py-2 w-full overflow-x-auto"},U=["onClick"],V={class:"flex space-x-2"},D={key:0},W=["onClick"],R={class:"flex space-x-2 items-center"},j=(0,o._)("button",{class:"btn btn-xs"},"…",-1),E=["onClick"],P=["onClick"],$=["onClick"],z=["onClick"],I={key:1,class:"well"},F={class:"text-lg"},A={class:"text-lg"},O={class:"text-lg"},S=(0,o._)("p",null,[(0,o._)("strong",null,"This cannot be undone.")],-1);function Z(e,t,r,Z,G,T){const N=(0,o.up)("icon-filter"),B=(0,o.up)("icon-add"),Q=(0,o.up)("router-link"),L=(0,o.up)("popper"),Y=(0,o.up)("icon-envelope"),K=(0,o.up)("icon-download"),H=(0,o.up)("dropdown-item"),J=(0,o.up)("note"),X=(0,o.up)("dropdown-menu"),ee=(0,o.up)("input-row"),te=(0,o.up)("checkbox"),re=(0,o.up)("icon-cheveron-right"),oe=(0,o.up)("icon-cheveron-down"),ie=(0,o.up)("icon-view"),le=(0,o.up)("icon-exclamation"),se=(0,o.up)("icon-notification"),ne=(0,o.up)("popover"),ae=(0,o.up)("icon-checkmark"),ue=(0,o.up)("member-preview"),de=(0,o.up)("data-table"),me=(0,o.up)("button-row"),pe=(0,o.up)("modal-dialog"),ce=(0,o.up)("coi-detail");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("head",s,[(0,o._)("div",n,[a,T.group.members.length>0?((0,o.wg)(),(0,o.iD)("button",{key:0,ref:"filterToggleButton",class:(0,i.C_)(["px-3 py-2 rounded-t transition-color",{"rounded-b":!G.showFilter,"bg-blue-200":G.showFilter}]),onClick:t[0]||(t[0]=(...e)=>T.toggleFilter&&T.toggleFilter(...e))},[(0,o.Wm)(N,{width:"16",height:"16"})],2)):(0,o.kq)("",!0)]),(0,o._)("div",u,[T.showAddMemberButton?((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(L,{content:"Add a member",hover:"",arrow:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{class:"btn btn-icon",to:e.append(e.$route.path,"members/add")},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{class:"inline-block"})])),_:1},8,["to"])])),_:1})])):(0,o.kq)("",!0),T.showCoordinatorActions?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(L,{content:`Email ${T.filteredMembers.length} listed members`,hover:"",arrow:""},{default:(0,o.w5)((()=>[(0,o._)("a",{href:`mailto:${T.filteredEmails.join(", ")}`,class:"btn btn-icon",onClick:t[1]||(t[1]=(...t)=>e.initEmailWithFiltered&&e.initEmailWithFiltered(...t))},[(0,o.Wm)(Y,{class:"inline-block",width:"16",height:"16"})],8,p)])),_:1},8,["content"]),(0,o.Wm)(X,{"hide-cheveron":"",orientation:"right"},{label:(0,o.w5)((()=>[(0,o._)("button",c,[(0,o.Wm)(K,{width:"16",height:"16"})])])),default:(0,o.w5)((()=>[(0,o.Wm)(H,{class:"text-right font-bold"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(H,{class:"text-right"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:`/api/report/groups/${T.group.uuid}/coi-report`},"COI Report",8,w),(0,o.Wm)(J,{class:"inline"},{default:(0,o.w5)((()=>[h])),_:1})])),_:1}),T.showMemberReportButton?((0,o.wg)(),(0,o.j4)(H,{key:0,class:"text-right"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{class:"text-center text-sm p-1",content:`Export will include ${T.filteredMembers.length} members currently listed.`,hover:"",arrow:""},{default:(0,o.w5)((()=>[(0,o._)("a",{href:T.exportUrl},"Member Export",8,_),(0,o.Wm)(J,{class:"inline"},{default:(0,o.w5)((()=>[g])),_:1})])),_:1},8,["content"])])),_:1})):(0,o.kq)("",!0)])),_:1}),T.group.isEp()&&T.showCoordinatorActions?((0,o.wg)(),(0,o.iD)("div",f)):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])]),(0,o.Wm)(l.uT,{name:"slide-fade-down"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",v,[(0,o._)("div",y,[(0,o.Wm)(ee,{label:"Keyword",type:"text",modelValue:G.filters.keyword,"onUpdate:modelValue":t[2]||(t[2]=e=>G.filters.keyword=e),"label-width-class":"w-20"},null,8,["modelValue"]),(0,o.Wm)(ee,{label:"Role","label-width-class":"w-20"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>G.filters.roleId=e)},[k,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(T.roles,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e.id},(0,i.zw)(e.name),9,x)))),128))],512),[[l.bM,G.filters.roleId]])])),_:1})]),(0,o._)("div",C,[(0,o.Wm)(te,{class:"block",label:"Needs COI",modelValue:G.filters.needsCoi,"onUpdate:modelValue":t[4]||(t[4]=e=>G.filters.needsCoi=e)},null,8,["modelValue"])]),(0,o._)("div",q,[(0,o.Wm)(te,{class:"block",label:"Hide Retired/Alumni",modelValue:G.filters.hideAlumns,"onUpdate:modelValue":t[5]||(t[5]=e=>G.filters.hideAlumns=e)},null,8,["modelValue"])])],512),[[l.F8,G.showFilter]])])),_:1}),(0,o._)("div",M,[T.group.members.length>0?((0,o.wg)(),(0,o.j4)(de,{key:0,fields:T.fieldsForGroupType,data:T.filteredMembers,sort:Z.sort,"onUpdate:sort":t[7]||(t[7]=e=>Z.sort=e),detailRows:!0,"row-class":e=>"cursor-pointer"+(e.isRetired?" retired-member":""),onRowClick:T.goToMember},{"cell-id":(0,o.w5)((({item:e})=>[(0,o._)("button",{onClick:(0,l.iM)((t=>T.toggleItemDetails(e)),["stop"]),class:"w-9 align-center block -mx-3"},[e.showDetails?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(re,{key:0,class:"m-auto cursor-pointer"})),e.showDetails?((0,o.wg)(),(0,o.j4)(oe,{key:1,class:"m-auto cursor-pointer"})):(0,o.kq)("",!0)],8,U)])),"cell-roles":(0,o.w5)((({value:t})=>[(0,o.Uk)((0,i.zw)(e.titleCase(t.map((e=>e.name)).join(", "))),1)])),"cell-coi_last_completed":(0,o.w5)((({item:t})=>[(0,o._)("div",V,[t.coi_last_completed?((0,o.wg)(),(0,o.iD)("span",D,(0,i.zw)(e.formatDate(t.coi_last_completed)),1)):(0,o.kq)("",!0),t.latest_coi_id?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"link cursor-pointer",onClick:(0,l.iM)((e=>T.viewCoi(t.latest_coi_id)),["stop"])},[(0,o.Wm)(ie)],8,W)):(0,o.kq)("",!0),null===!t.coi_last_completed||t.coi_last_completed<e.yearAgo()?((0,o.wg)(),(0,o.j4)(le,{key:2,class:(0,i.C_)(T.getCoiDateStyle(t))},null,8,["class"])):(0,o.kq)("",!0)])])),"cell-actions":(0,o.w5)((({item:i})=>[(0,o._)("div",R,[T.hasAnyMemberPermission()&&!r.readonly?((0,o.wg)(),(0,o.j4)(X,{key:0,"hide-cheveron":!0,class:"relative block"},{label:(0,o.w5)((()=>[j])),default:(0,o.w5)((()=>[e.hasAnyPermission([["members-update",T.group],"groups-manage"])?((0,o.wg)(),(0,o.j4)(H,{key:0},{default:(0,o.w5)((()=>[(0,o._)("div",{onClick:e=>T.editMember(i)},"Update membership",8,E)])),_:2},1024)):(0,o.kq)("",!0),(0,o.wy)((0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o._)("div",{onClick:e=>T.confirmRetireMember(i)},"Retire from group",8,P)])),_:2},1536),[[l.F8,!i.isRetired&&e.hasAnyPermission([["members-retire",T.group],"groups-manage"])]]),(0,o.wy)((0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o._)("div",{onClick:e=>T.confirmUnretire(i)},"Unretire from group",8,$)])),_:2},1536),[[l.F8,i.isRetired&&e.hasAnyPermission([["members-remove",T.group],"groups-manage"])]]),(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o._)("div",{onClick:e=>T.confirmRemoveMember(i)},"Remove from group",8,z)])),_:2},1024)])),_:2},1024)):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o.Wm)(ne,{hover:"",arrow:"",content:"Receives notifications about this group.",placement:"top"},{default:(0,o.w5)((()=>[i.is_contact?((0,o.wg)(),(0,o.j4)(se,{key:0,width:12,height:12,"icon-name":"Is a group contact",onClick:t[6]||(t[6]=(0,l.iM)((()=>{}),["stop"]))})):(0,o.kq)("",!0)])),_:2},1024)])])])),"cell-requirements":(0,o.w5)((({item:e})=>[(0,o.Wm)(ne,{hover:"",arrow:"",placement:"top"},{content:(0,o.w5)((()=>[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(T.getRequirements(e),((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},[e.met?((0,o.wg)(),(0,o.j4)(ae,{key:0,width:12,height:12,class:"inline-block text-green-600"})):((0,o.wg)(),(0,o.j4)(le,{key:1,width:12,height:12,class:"inline-block text-red-700"})),(0,o.Uk)(" "+(0,i.zw)(e.label),1)])))),128))])])),default:(0,o.w5)((()=>[T.requirementsMet(e)?((0,o.wg)(),(0,o.j4)(ae,{key:0,width:12,height:12,class:"text-green-600"})):((0,o.wg)(),(0,o.j4)(le,{key:1,width:12,height:12,class:"text-red-700"}))])),_:2},1024)])),detail:(0,o.w5)((({item:e})=>[(0,o.Wm)(ue,{member:e,group:T.group},null,8,["member","group"])])),_:1},8,["fields","data","sort","row-class","onRowClick"])):((0,o.wg)(),(0,o.iD)("div",I," This group does not yet have any members. "))]),((0,o.wg)(),(0,o.j4)(o.lR,{to:"body"},[(0,o.Wm)(pe,{modelValue:G.showConfirmRetire,"onUpdate:modelValue":t[8]||(t[8]=e=>G.showConfirmRetire=e),size:"xs",title:`Retire ${T.selectedMemberName}?`},{default:(0,o.w5)((()=>[(0,o._)("p",F," Are you sure you want to retire "+(0,i.zw)(T.selectedMemberName)+" from this group? ",1),(0,o.Wm)(me,{onSubmit:T.retireMember,onCancel:T.cancelRetire,"submit-text":"Retire Member"},null,8,["onSubmit","onCancel"])])),_:1},8,["modelValue","title"]),(0,o.Wm)(pe,{modelValue:G.showConfirmUnretire,"onUpdate:modelValue":t[9]||(t[9]=e=>G.showConfirmUnretire=e),size:"xs",title:`Retire ${T.selectedMemberName}?`},{default:(0,o.w5)((()=>[(0,o._)("p",A," Are you sure you want to un-retire "+(0,i.zw)(T.selectedMemberName)+"? ",1),(0,o.Wm)(me,{onSubmit:T.unretireMember,onCancel:T.cancelUnretire,"submit-text":"Un-retire Member"},null,8,["onSubmit","onCancel"])])),_:1},8,["modelValue","title"]),(0,o.Wm)(pe,{modelValue:G.showConfirmRemove,"onUpdate:modelValue":t[10]||(t[10]=e=>G.showConfirmRemove=e),size:"xs",title:`Remove ${T.selectedMemberName}?`},{default:(0,o.w5)((()=>[(0,o._)("p",O," Are you sure you want to remove "+(0,i.zw)(T.selectedMemberName)+" from this group?",1),S,(0,o.Wm)(me,{onSubmit:T.removeMember,onCancel:T.cancelRemove,"submit-text":"Remove Member"},null,8,["onSubmit","onCancel"])])),_:1},8,["modelValue","title"]),(0,o.Wm)(pe,{modelValue:G.showCoiDetail,"onUpdate:modelValue":t[11]||(t[11]=e=>G.showCoiDetail=e),size:"xl"},{default:(0,o.w5)((()=>[G.coi?((0,o.wg)(),(0,o.j4)(ce,{key:0,coi:G.coi,group:T.group},null,8,["coi","group"])):(0,o.kq)("",!0)])),_:1},8,["modelValue"])]))])}var G=r(9028),T=r(2790);const N={class:"px-8 py-4 inset"},B=(0,o.Uk)(" RETIRED "),Q={class:"md:flex flex-wrap space-x-4 text-sm"},L={class:"flex-1 md:flex flex-wrap"},Y={class:"flex-1 mr-8"},K={class:"flex-1 mr-4"},H={class:"mt-2"},J=(0,o._)("h4",null,"Roles:",-1),X={class:"ml-2"},ee={key:0},te=(0,o._)("h4",null,"Biocurator Training:",-1),re={class:"ml-2"},oe={class:"mt-2"},ie=(0,o._)("h4",null,"Extra Permissions:",-1),le={class:"ml-2"},se=(0,o._)("div",null,null,-1),ne=(0,o.Uk)(" View profile ");function ae(e,t,r,l,s,n){const a=(0,o.up)("static-alert"),u=(0,o.up)("profile-picture"),d=(0,o.up)("note"),m=(0,o.up)("dictionary-row"),p=(0,o.up)("CredentialsView"),c=(0,o.up)("ExpertisesView"),b=(0,o.up)("object-dictionary"),w=(0,o.up)("icon-checkmark"),h=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",N,[r.member.isRetired?((0,o.wg)(),(0,o.j4)(a,{key:0,variant:"warning",class:"mb-3 float-right"},{default:(0,o.w5)((()=>[B])),_:1})):(0,o.kq)("",!0),(0,o._)("div",Q,[(0,o._)("div",null,[(0,o.Wm)(u,{person:r.member.person,style:{width:"100px",height:"100px"},class:"rounded"},null,8,["person"]),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)("member id: "+(0,i.zw)(r.member.id),1)])),_:1})]),(0,o._)("div",L,[(0,o._)("div",Y,[(0,o.Wm)(m,{label:"Email"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(r.member.person.email),1)])),_:1}),(0,o.Wm)(m,{label:"Institution"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(r.member.person.institution?r.member.person.institution.name:"--"),1)])),_:1}),(0,o.Wm)(m,{label:"Credentials"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{person:r.member.person},null,8,["person"])])),_:1}),(0,o.Wm)(m,{label:"Expertise"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{person:r.member.person,legacyExpertise:r.member.legacy_expertise},null,8,["person","legacyExpertise"])])),_:1}),(0,o.Wm)(b,{obj:r.member,only:["notes"]},null,8,["obj"]),(0,o.Wm)(m,{label:"Start - End"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(l.formatDate(r.member.start_date))+" - "+(0,i.zw)(l.formatDate(r.member.end_date)||"present"),1)])),_:1})]),(0,o._)("div",K,[(0,o._)("div",H,[J,(0,o._)("div",X,(0,i.zw)(r.member.roles.length>0?r.member.roles.map((t=>e.titleCase(t.name))).join(", "):"--"),1)]),r.member.hasRole("biocurator")?((0,o.wg)(),(0,o.iD)("div",ee,[te,(0,o._)("div",re,[(0,o.Wm)(m,{label:"Level 1 training"},{default:(0,o.w5)((()=>[r.member.training_level_1?((0,o.wg)(),(0,o.j4)(w,{key:0,class:"text-green-700"})):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(m,{label:"Level 2 training"},{default:(0,o.w5)((()=>[r.member.training_level_2?((0,o.wg)(),(0,o.j4)(w,{key:0,class:"text-green-700"})):(0,o.kq)("",!0)])),_:1})])])):(0,o.kq)("",!0),(0,o._)("div",oe,[ie,(0,o._)("div",le,(0,i.zw)(r.member.permissions.length>0?r.member.permissions.map((e=>e.name)).join(", "):"--"),1)])])]),se]),(0,o.Wm)(h,{class:"link",to:{name:"PersonDetail",params:{uuid:this.member.person.uuid}}},{default:(0,o.w5)((()=>[ne])),_:1},8,["to"])])}var ue=r(1378),de=r(7506),me=r(6570),pe=r(6350),ce=r(4643),be=r(5699),we={name:"MemberPreview",components:{ProfilePicture:me.Z,CredentialsView:pe.Z,ExpertisesView:ce.Z},props:{member:{type:ue.Z,required:!0},group:{type:de.Z,required:!0}},emits:["edit"],setup(){return{formatDate:be.p6}}},he=r(3744);const _e=(0,he.Z)(we,[["render",ae]]);var ge=_e,fe=r(6517),ve=r(3823),ye={name:"MemberList",components:{MemberPreview:ge,CoiDetail:fe.Z},props:{readonly:{type:Boolean,default:!1}},data(){return{showFilter:!1,showConfirmRetire:!1,showConfirmUnretire:!1,showConfirmRemove:!1,filters:{keyword:null,roleId:null,needsCoi:null,needsTraining:null,hideAlumns:!0},tableFields:[{name:"id",label:"",type:Number,sortable:!1},{name:"person.first_name",label:"First",type:String,sortable:!0},{name:"person.last_name",label:"Last",type:String,sortable:!0},{name:"person.timezone",label:"Closest City (for timezone)",type:String,sortable:!0},{name:"roles",label:"Roles",sortable:!0,sortFunction(e,t){const r=e.roles.map((e=>e.name)).join(","),o=t.roles.map((e=>e.name)).join(",");return r==o?0:r>o?1:-1}},{name:"coi_last_completed",label:"COI Completed",type:Date,sortable:!0},{name:"requirements",label:"Reqs",type:String,sortable:!1},{name:"actions",label:"",type:Object,sortable:!1}],selectedMember:null,members:[],showCoiDetail:!1,coi:null}},computed:{roles(){return ve.groups.roles},group(){return this.$store.getters["groups/currentItemOrNew"]},filteredMembers(){return this.group.members?this.group.members.filter((e=>this.matchesFilters(e))).filter((e=>this.filters.hideAlumns?null===e.end_date:e)):[]},filteredEmails(){return this.filteredMembers.map((e=>`${e.person.name} <${e.person.email}>`))},fieldsForGroupType(){const e=[...this.tableFields];return this.group.has_coi_requirement||e.splice(e.findIndex((e=>"coi_last_completed"==e.name)),1),this.group.isEp()||e.splice(e.findIndex((e=>"requirements"==e.name)),1),e},coiCuttoff(){const e=new Date;return e.setFullYear(e.getFullYear()-1),e},selectedMemberName(){return this.selectedMember?this.selectedMember.person.name:null},showCoordinatorActions(){return this.hasAnyMemberPermission(["groups-manage",["info-edit",this.group]])},showAddMemberButton(){return this.hasAnyPermission([["members-invite",this.group],"groups-manage","ep-applications-manage","annual-updates-manage"])&&!this.readonly},showMemberReportButton(){return this.hasAnyPermission([["members-invite",this.group],"groups-manage","ep-applications-manage","annual-updates-manage"])},exportUrl(){const e=`?member_ids=${this.filteredMembers.map((e=>e.id)).join(",")}`;return`/api/report/groups/${this.group.uuid}/member-export${e}`},features(){return this.$store.state.systemInfo.app.features}},watch:{group:{immediate:!0,handler(e,t){!e.id||t&&e.id==t.id||this.$store.dispatch("groups/getMembers",this.group)}}},setup(){const{sort:e,filter:t}=(0,T.Z)({field:"person.last_name",desc:!1});return{sort:e,filter:t}},methods:{toggleFilter(){this.showFilter=!this.showFilter},matchesFilters(e){return!(this.filters.keyword&&!e.matchesKeyword(this.filters.keyword))&&(!(this.filters.roleId&&!e.hasRole(this.filters.roleId))&&((!this.filters.needsCoi||!e.coiUpToDate())&&(!this.filters.needsTraining||!e.trainingComplete())))},toggleItemDetails(e){e.showDetails=!e.showDetails},editMember(e){this.$router.push(this.append(this.$route.path,`members/${e.id}`))},confirmRetireMember(e){this.showConfirmRetire=!0,this.selectedMember=e},async retireMember(){try{await this.$store.dispatch("groups/memberRetire",{uuid:this.group.uuid,memberId:this.selectedMember.id,startDate:this.selectedMember.start_date,endDate:(new Date).toISOString()}),this.cancelRetire()}catch(e){console.error(e)}},cancelRetire(){this.selectedMember=null,this.showConfirmRetire=!1},async unretireMember(){try{await this.$store.dispatch("groups/memberUnretire",{uuid:this.group.uuid,memberId:this.selectedMember.id}),this.cancelUnretire()}catch(e){console.error(e)}},cancelUnretire(){this.selectedMember=null,this.showConfirmUnretire=!1},confirmRemoveMember(e){this.showConfirmRemove=!0,this.selectedMember=e},async removeMember(){try{await this.$store.dispatch("groups/memberRemove",{uuid:this.group.uuid,memberId:this.selectedMember.id,startDate:this.selectedMember.start_date,endDate:(new Date).toISOString()}),this.cancelRemove()}catch(e){console.error(e)}},cancelRemove(){this.selectedMember=null,this.showConfirmRemove=!1},goToMember(e){this.$router.push({name:"PersonDetail",params:{uuid:e.person.uuid}})},hasAnyMemberPermission(){const e=this.hasAnyPermission([["members-update",this.group],["members-retire",this.group],["members-remove",this.group],"groups-manage"]);return e},getCoiDateStyle(e){return null===e.coi_last_completed?"text-red-700":"text-yellow-500"},async viewCoi(e){this.showCoiDetail=!0,this.coi=await G.hi.get(`/api/cois/${e}`).then((e=>e.data))},downloadCoiReport(){const e=`/api/report/${this.group.coi_code}`;window.location=e},confirmUnretire(e){this.showConfirmUnretire=!0,this.selectedMember=e},requirementsMet(e){return(!this.group.has_coi_requirement||!e.needsCoi)&&!(this.group.isEp()&&!e.hasAnyExpertise)},getRequirements(e){const t={};return this.group.has_coi_requirement&&(t.coi={label:"COI is up to date",met:!e.needsCoi}),this.group.isEp()&&(t.expertise={label:"Expertise provided",met:e.hasAnyExpertise}),t}}};const ke=(0,he.Z)(ye,[["render",Z]]);var xe=ke},6570:function(e,t,r){r.d(t,{Z:function(){return m}});var o=r(6252);const i={class:"border border-gray-300 bg-white overflow-hidden"},l=["src"];function s(e,t,r,s,n,a){return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("img",{src:a.photoUrl,class:"w-full"},null,8,l)])}var n=r(284),a={name:"ProfilePicture",props:{person:{required:!0,type:n.Z}},data(){return{}},computed:{hasProfilePhoto(){return null!==this.person.profile_photo},photoUrl(){return this.hasProfilePhoto?`/profile-photos/${this.person.profile_photo}`:"/images/default_profile.jpg"}},methods:{}},u=r(3744);const d=(0,u.Z)(a,[["render",s]]);var m=d}}]);
//# sourceMappingURL=677.b93e03f1.js.map