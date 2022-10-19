"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[720],{799:function(e,t,a){a.r(t),a.d(t,{default:function(){return it}});var l=a(6252),o=a(2262),n=a(9963),i=a(3907),s=a(865),r=a(3577);const u=(0,l._)("strong",null,"Warning!!",-1),d=(0,l.Uk)(" There are currently no contacts connected to this application! "),p={class:"flex space-x-2"},c=(0,l.Uk)("Add Next Action"),m=(0,l.Uk)("Add Log Entry"),g={class:"md:flex md:space-x-4"},w=(0,l._)("h2",{class:"block-title"},"Advanced actions and controls",-1),h=(0,l.Uk)(" Delete Application and all associated information. ");function v(e,t,a,o,n,i){const s=(0,l.up)("static-alert"),v=(0,l.up)("note"),b=(0,l.up)("router-link"),f=(0,l.up)("basic-info-data"),_=(0,l.up)("next-actions"),k=(0,l.up)("progress-chart"),y=(0,l.up)("step-tabs"),x=(0,l.up)("tab-item"),C=(0,l.up)("application-log"),U=(0,l.up)("tabs-container"),D=(0,l.up)("ScreenTemplate"),A=(0,l.up)("router-view"),W=(0,l.up)("modal-dialog");return(0,l.wg)(),(0,l.iD)("div",null,[a.loading||e.group.hasContacts?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(s,{key:0,variant:"danger",class:"mb-4"},{default:(0,l.w5)((()=>[u,d])),_:1})),(0,l.Wm)(D,{title:e.group.displayName,breadcrumbs:i.breadcrumbs},{"header-dev":(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Group ID: "+(0,r.zw)(e.group.id)+" | Expert Panel ID: "+(0,r.zw)(e.group.expert_panel.id),1)])),_:1})])),"header-right":(0,l.w5)((()=>[(0,l._)("div",p,[(0,l.Wm)(b,{to:{name:"NextAction"},class:"btn btn-sm"},{default:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(b,{to:{name:"LogEntry"},class:"btn btn-sm"},{default:(0,l.w5)((()=>[m])),_:1})])])),default:(0,l.w5)((()=>[(0,l._)("div",g,[(0,l.Wm)(f,{class:"w-1/2 screen-block"}),i.application.next_actions?((0,l.wg)(),(0,l.j4)(_,{key:0,"next-actions":i.application.next_actions,class:"w-1/2 space-y-2 md:px-4 md:py-2 bg-white border-b border-gray-200"},null,8,["next-actions"])):(0,l.kq)("",!0)]),(0,l.Wm)(k,{application:i.application,class:"py-4 screen-block"},null,8,["application"]),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,{label:"Application"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{application:i.application,onUpdated:t[0]||(t[0]=t=>e.$emit("updated")),onApproved:t[1]||(t[1]=t=>e.$emit("updated"))},null,8,["application"])])),_:1}),(0,l.Wm)(x,{label:"Application Log"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{uuid:i.application.uuid},null,8,["uuid"])])),_:1}),(0,l.Wm)(x,{label:"Advanced"},{default:(0,l.w5)((()=>[w,(0,l.Wm)(b,{to:{name:"ConfirmDeleteApplication"},class:"btn red"},{default:(0,l.w5)((()=>[h])),_:1})])),_:1})])),_:1})])),_:1},8,["title","breadcrumbs"]),((0,l.wg)(),(0,l.j4)(l.lR,{to:"body"},[(0,l.Wm)(W,{modelValue:n.showModal,"onUpdate:modelValue":t[2]||(t[2]=e=>n.showModal=e),onClosed:i.handleModalClosed,title:e.$route.meta.title},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{ref:"modalView",onSaved:i.hideModal,onCanceled:i.hideModal},null,8,["onSaved","onCanceled"])])),_:1},8,["modelValue","onClosed","title"])]))])}var b=a(3170);const f={class:"text-sm"},_={class:"flex justify-between"},k=(0,l._)("h3",null,"Next Actions",-1),y=(0,l.Uk)(" Show completed "),x=["innerHTML"],C={class:"flex"},U={key:0},D={class:"flex space-x-1"},A={key:1,class:"well bg-gray-200 rounded border px-4 py-2 border-gray-300"},W=(0,l.Uk)(" There are no pending "),S={key:0},V=(0,l.Uk)(" next actions. ");function N(e,t,a,o,i,s){const u=(0,l.up)("edit-icon-button"),d=(0,l.up)("trash-icon-button"),p=(0,l.up)("icon-checkmark"),c=(0,l.up)("checkmark-button"),m=(0,l.up)("data-table"),g=(0,l.up)("complete-next-action-form"),w=(0,l.up)("modal-dialog");return(0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("div",_,[k,(0,l._)("label",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>i.showCompleted=e)},null,512),[[n.e8,i.showCompleted]]),y])]),s.filteredNextActions.length>0?((0,l.wg)(),(0,l.j4)(m,{key:0,fields:i.fields,data:s.filteredNextActions,sort:i.tableSort,"onUpdate:sort":t[1]||(t[1]=e=>i.tableSort=e)},{"cell-entry":(0,l.w5)((({item:e})=>[(0,l._)("div",{innerHTML:e.entry},null,8,x)])),"cell-assigned_to":(0,l.w5)((({item:e})=>[(0,l._)("div",C,[(0,l.Uk)((0,r.zw)(e.assignee?e.assignee.name:"??")+"  ",1),e.assigned_to_name?((0,l.wg)(),(0,l.iD)("span",U," - "+(0,r.zw)(e.assigned_to_name),1)):(0,l.kq)("",!0)])])),"cell-action":(0,l.w5)((({item:t})=>[(0,l._)("div",D,[(0,l.Wm)(u,{onClick:a=>e.$router.push({name:"EditNextAction",params:{uuid:s.application.uuid,id:t.id}})},null,8,["onClick"]),(0,l.Wm)(d,{onClick:e=>s.initiateDelete(t)},null,8,["onClick"]),Boolean(t.date_completed)?((0,l.wg)(),(0,l.j4)(p,{key:0,width:"20",height:"20",class:(0,r.C_)({"text-green-500":Boolean(t.date_completed),"text-gray-300":!Boolean(t.date_completed)})},null,8,["class"])):((0,l.wg)(),(0,l.j4)(c,{key:1,onClick:(0,n.iM)((e=>s.startCompleting(t)),["prevent"]),title:"Mark complete"},null,8,["onClick"]))])])),_:1},8,["fields","data","sort"])):((0,l.wg)(),(0,l.iD)("div",A,[W,i.showCompleted?((0,l.wg)(),(0,l.iD)("span",S,"or completed")):(0,l.kq)("",!0),V])),(0,l.Wm)(w,{modelValue:i.showCreateModal,"onUpdate:modelValue":t[3]||(t[3]=e=>i.showCreateModal=e),title:"Complete next action"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{"next-action":i.selectedNextAction,onCanceled:t[2]||(t[2]=e=>i.showCreateModal=!1),onCompleted:s.handleCompleted},null,8,["next-action","onCompleted"])])),_:1},8,["modelValue"])])}const M=["innerHTML"];function F(e,t,a,o,n,i){const s=(0,l.up)("dictionary-row"),r=(0,l.up)("object-dictionary"),u=(0,l.up)("input-row"),d=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s,{label:"Action"},{default:(0,l.w5)((()=>[(0,l._)("div",{innerHTML:a.nextAction.entry},null,8,M)])),_:1}),(0,l.Wm)(r,{obj:a.nextAction,show:["date_created","step","target_date"],dates:["target_date","date_created"]},null,8,["obj"]),(0,l.Wm)(u,{label:"Date Completed",modelValue:n.dateCompleted,"onUpdate:modelValue":t[0]||(t[0]=e=>n.dateCompleted=e),type:"date",errors:n.errors.date_completed},null,8,["modelValue","errors"]),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l._)("button",{class:"btn white",onClick:t[1]||(t[1]=(...e)=>i.cancel&&i.cancel(...e))},"Cancel"),(0,l._)("button",{class:"btn blue",onClick:t[2]||(t[2]=(...e)=>i.markComplete&&i.markComplete(...e))},"Mark Complete")])),_:1})])}var j=a(9700),$={name:"ComponentName",props:{nextAction:{type:Object,required:!0}},data(){return{errors:[],dateCompleted:null}},computed:{...(0,i.Se)({group:"groups/currentItemOrNew"}),application(){return this.group.expert_panel}},methods:{async markComplete(){try{await this.$store.dispatch("applications/completeNextAction",{application:this.application,nextAction:this.nextAction,dateCompleted:this.dateCompleted}),this.clearForm(),this.$emit("completed"),this.showModal=!1}catch(e){(0,j.Z)(e)&&(this.errors=e.response.data.errors)}},clearForm(){this.dateCompleted=null},cancel(){this.clearForm(),this.$emit("canceled")}}},I=a(3744);const q=(0,I.Z)($,[["render",F]]);var z=q,E=a(429),H=a(1682),Z={name:"NextActions",components:{CompleteNextActionForm:z,CheckmarkButton:E["default"],TrashIconButton:H["default"]},props:{nextActions:{type:Array,required:!0}},data(){return{tableSort:{field:"target_date",desc:!1},showCompleted:!1,showDeleteConfirmation:!1,selectedNextAction:{},errors:{},showCreateModal:!1,fields:[{name:"entry",label:"Next Action",type:String},{name:"assigned_to",label:"Assigned to",sortable:!0,resolveValue(e){let t=e.assigned_to;return e.assigned_to_name&&(t+=`- ${e.assigned_to_name}`),t}},{name:"target_date",label:"Due Date",type:Date,sortable:!0},{name:"action",label:"",sortable:!1}]}},computed:{...(0,i.Se)({group:"groups/currentItemOrNew"}),application(){return this.group.expert_panel},filteredNextActions(){return this.nextActions?this.showCompleted?this.nextActions:this.nextActions.filter((e=>!e.date_completed)):[]}},methods:{startCompleting(e){this.selectedNextAction=e,this.showCreateModal=!0},handleCompleted(){this.$emit("completed"),this.showCreateModal=!1},initiateDelete(e){this.$router.push({name:"ConfirmDeleteNextAction",params:{applicationUuid:this.application.uuid,id:e.id}})}}};const L=(0,I.Z)(Z,[["render",N]]);var B=L,G=a(7954),O=a(4599);const R={class:"flex justify-between border-b pb-2 min-w-fit"},T=(0,l._)("h3",null,"Base Information",-1),Y={key:0},J={key:0},P=["href"],K={key:1};function Q(e,t,a,o,n,i){const s=(0,l.up)("dictionary-row"),u=(0,l.up)("router-link"),d=(0,l.up)("group-form"),p=(0,l.up)("submission-wrapper"),c=(0,l.up)("modal-dialog");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",R,[T,(0,l._)("button",{class:"btn btn-xs",onClick:t[0]||(t[0]=e=>n.showInfoEdit=!0)},"Edit")]),(0,l.Wm)(s,{"label-class":"font-bold w-40",label:"Long Base Name"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(i.application.long_base_name||"--"),1)])),_:1}),(0,l.Wm)(s,{"label-class":"font-bold w-40",label:"Short Base Name"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(i.application.short_base_name||"--"),1)])),_:1}),(0,l.Wm)(s,{"label-class":"font-bold w-40",label:"Affiliation ID"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(i.application.affiliation_id||"--"),1)])),_:1}),(0,l.Wm)(s,{"label-class":"font-bold w-40",label:"CDWG"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(i.group.parent?i.group.parent.name:"--"),1)])),_:1}),(0,l.Wm)(s,{"label-class":"font-bold w-40",label:"Chair(s)"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.group.chairs,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{key:e.id},[(0,l.Wm)(u,{to:{name:"PersonDetail",params:{id:e.id}}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.person.name),1)])),_:2},1032,["to"]),t<i.group.chairs.length-1?((0,l.wg)(),(0,l.iD)("span",Y,", ")):(0,l.kq)("",!0)])))),128))])),_:1}),(0,l.Wm)(s,{"label-class":"font-bold w-40",label:"Coordinator(s)"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.group.coordinators,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{key:e.id},[(0,l.Wm)(u,{to:{name:"PersonDetail",params:{id:e.id}}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.person.name),1)])),_:2},1032,["to"]),t<i.group.coordinators.length-1?((0,l.wg)(),(0,l.iD)("span",J,", ")):(0,l.kq)("",!0)])))),128))])),_:1}),(0,l.Wm)(s,{"label-class":"font-bold w-40",label:"Website URL"},{default:(0,l.w5)((()=>[i.application.stepIsApproved(1)?((0,l.wg)(),(0,l.iD)("a",{key:0,href:`https://clinicalgenome.org/affiliation/${i.application.affiliation_id}`,target:"ep-website"}," https://clinicalgenome.org/affiliation/"+(0,r.zw)(i.application.affiliation_id),9,P)):((0,l.wg)(),(0,l.iD)("span",K,"https://clinicalgenome.org/affiliation/"+(0,r.zw)(i.application.affiliation_id||"--"),1))])),_:1}),((0,l.wg)(),(0,l.j4)(l.lR,{to:"body"},[(0,l.Wm)(c,{modelValue:n.showInfoEdit,"onUpdate:modelValue":t[5]||(t[5]=e=>n.showInfoEdit=e),onClosed:t[6]||(t[6]=e=>n.showInfoEdit=!1),title:"Edit Group Info",size:"md"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{onSubmitted:t[3]||(t[3]=t=>e.$refs.infoForm.save()),onCanceled:t[4]||(t[4]=t=>e.$refs.infoForm.cancel())},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{ref:"infoForm",onCanceled:t[1]||(t[1]=e=>n.showInfoEdit=!1),onSaved:t[2]||(t[2]=e=>n.showInfoEdit=!1)},null,512)])),_:1})])),_:1},8,["modelValue"])]))])}var X=a(1211),ee={name:"BasicInfoData",components:{GroupForm:X.Z},data(){return{showInfoEdit:!1}},computed:{group(){return this.$store.getters["groups/currentItemOrNew"]},application(){return this.group.expert_panel}},methods:{}};const te=(0,I.Z)(ee,[["render",Q]]);var ae=te,le={name:"ApplicationDetail",components:{ApplicationLog:b.Z,NextActions:B,ProgressChart:G.Z,StepTabs:O.Z,BasicInfoData:ae},props:{loading:{type:Boolean,default:!1}},emits:["updated"],data(){return{showModal:!1}},watch:{$route(){this.showModal=!!this.$route.meta.showModal&&Boolean(this.$route.meta.showModal)}},computed:{...(0,i.Se)({group:"groups/currentItemOrNew"}),application(){return this.group.expert_panel},hasPendingNextAction(){return"undefined"!=typeof this.application&&this.application.latest_pending_next_action},breadcrumbs(){return this.group.uuid?[{label:this.group.displayName,route:{name:"GroupDetail",params:{uuid:this.group.uuid}}}]:[]}},methods:{hideModal(){this.$router.replace({name:"ApplicationDetail",params:{uuid:this.group.uuid}})},handleModalClosed(e){this.clearModalForm(e),this.$router.push({name:"ApplicationDetail",params:{uuid:this.group.uuid}})},clearModalForm(){"function"===typeof this.$refs.modalView.clearForm&&this.$refs.modalView.clearForm()}},mounted(){this.showModal=Boolean(this.$route.meta.showModal)}};const oe=(0,I.Z)(le,[["render",v]]);var ne=oe,ie=a(9592),se=a(7411),re=a(2156),ue=a(9028);const de={key:0,class:"mt-2"},pe=(0,l._)("h3",null,"The following comments will be sent to the expert panel:",-1),ce=(0,l._)("hr",null,null,-1),me=(0,l._)("h3",null,"How should we proceed?",-1),ge={class:"flex px-4 space-x-4 items-center p-2 bg-gray-100 rounded-lg"},we=(0,l._)("div",null," Reply to or create comments, suggestions, and required revisions in the comments section on the main screen. ",-1);var he={__name:"JudgementForm",props:{modelValue:{type:Object,default:()=>({decision:null,notes:null})}},emits:["saved","canceled","update:modelValue"],setup(e,{emit:t}){const a=e,n=(0,l.f3)("commentManager"),s=(0,i.oR)(),r=(0,l.Fl)((()=>s.getters["groups/currentItemOrNew"])),u=["request-revisions","approve-after-revisions","approve"],d=(0,o.iH)({}),p=(0,o.iH)({judgement:null,notes:null}),c=e=>{p.value=e};(0,l.YP)((()=>a.modelValue),(e=>{e&&c(e)}),{immediate:!0});const m=async()=>ue.hi.post(`/api/groups/${r.value.uuid}/application/judgements`,{decision:p.value.decision,notes:p.value.notes}).then((e=>(t("saved",e.data),v(),e.data))),g=async()=>{const e=`/api/groups/${r.value.uuid}/application/judgements/${p.value.id}`;return ue.hi.put(e,p.value).then((e=>(t("saved",e.data),e.data)))},w=async()=>{try{return p.value.id?await g():await m()}catch(e){(0,ue.z1)(e)&&(d.value=e.response.data.errors)}},h=()=>{v(),t("canceled")},v=()=>{a.modelValue?c(a.modelValue):p.value={}};return(e,t)=>{const a=(0,l.up)("radio-button-group"),i=(0,l.up)("input-row"),s=(0,l.up)("icon-exclamation"),r=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[(0,o.SU)(n).commentsForEp.length>0?((0,l.wg)(),(0,l.iD)("div",de,[pe,(0,l.Wm)(re.Z,{comments:(0,o.SU)(n).commentsForEp},null,8,["comments"])])):(0,l.kq)("",!0),ce,(0,l.Wm)(i,{errors:d.value.decision,vertical:""},{label:(0,l.w5)((()=>[me])),default:(0,l.w5)((()=>[(0,l.Wm)(a,{modelValue:p.value.decision,"onUpdate:modelValue":t[0]||(t[0]=e=>p.value.decision=e),options:u,labelAttribute:"label",size:"lg",vertical:""},null,8,["modelValue"])])),_:1},8,["errors"]),(0,l.Wm)(i,{modelValue:p.value.notes,"onUpdate:modelValue":t[1]||(t[1]=e=>p.value.notes=e),label:"Other notes for the expert panel",type:"large-text",errors:d.value.notes,vertical:""},null,8,["modelValue","errors"]),(0,l._)("div",ge,[(0,l.Wm)(s,{class:"text-blue-600 flex-shrink-0",width:"30",height:"30"}),we]),(0,l.Wm)(r,{onSubmitted:w,onCanceled:h})])}}};const ve=he;var be=ve,fe=a(4417),_e=a(289);const ke={key:0},ye=(0,l.Uk)(" Your Decision: "),xe={key:0,class:"mt-2"},Ce=(0,l._)("strong",null,"Notes: ",-1),Ue=(0,l.Uk)(" You are about to delete your decision for this applicaiton. This cannot be undone. Are you sure you want to continue? ");var De={__name:"JudgementDetail",emits:["deleted"],setup(e,{emit:t}){const a=(0,i.oR)(),n=(0,l.f3)("latestSubmission"),s=(0,l.Fl)((()=>a.getters["groups/currentItemOrNew"])),u=(0,l.Fl)((()=>a.getters.currentUser)),d=(0,l.Fl)({get(){return n.value&&n.value.judgements?n.value.judgements.find((e=>e.person_id==u.value.person.id)):null}}),p=(0,l.Fl)((()=>(0,_e.i)(d.value.decision))),c=(0,o.iH)(!1),m=()=>{c.value=!0},g=(0,o.iH)(!1),w=()=>{g.value=!0},h=async()=>{await ue.hi["delete"](`/api/groups/${s.value.uuid}/application/judgements/${d.value.id}`),g.value=!1,t("deleted")};return(e,t)=>{const a=(0,l.up)("badge"),n=(0,l.up)("modal-dialog"),i=(0,l.up)("button-row");return(0,o.SU)(d)?((0,l.wg)(),(0,l.iD)("div",ke,[(0,l._)("h3",null,[ye,(0,l.Wm)(a,{color:(0,o.SU)(p),size:"lg"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)((0,o.SU)(fe.Qs)((0,o.SU)(d).decision)),1)])),_:1},8,["color"])]),(0,o.SU)(d).notes?((0,l.wg)(),(0,l.iD)("div",xe,[(0,l._)("p",null,[Ce,(0,l.Uk)((0,r.zw)((0,o.SU)(d).notes),1)])])):(0,l.kq)("",!0),(0,l._)("div",{class:"flex space-x-2"},[(0,l._)("button",{class:"btn btn-xs",onClick:m},"Change Decision"),(0,l._)("button",{class:"btn btn-xs",onClick:w},"Cancel Decision")]),((0,l.wg)(),(0,l.j4)(l.lR,{to:"body"},[(0,l.Wm)(n,{modelValue:c.value,"onUpdate:modelValue":t[3]||(t[3]=e=>c.value=e),title:"Update Your Decision"},{default:(0,l.w5)((()=>[(0,l.Wm)(be,{modelValue:(0,o.SU)(d),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,o.dq)(d)?d.value=e:null),onSaved:t[1]||(t[1]=e=>c.value=!1),onCanceled:t[2]||(t[2]=e=>c.value=!1)},null,8,["modelValue"])])),_:1},8,["modelValue"]),(0,l.Wm)(n,{modelValue:g.value,"onUpdate:modelValue":t[5]||(t[5]=e=>g.value=e),title:"Delete your decision for this applicaiton"},{footer:(0,l.w5)((()=>[(0,l.Wm)(i,{"submit-text":"Yes, Delete",onSubmitted:h,onCanceled:t[4]||(t[4]=e=>g.value=!1)})])),default:(0,l.w5)((()=>[Ue])),_:1},8,["modelValue"])]))])):(0,l.kq)("",!0)}}};const Ae=De;var We=Ae;const Se=e=>((0,l.dD)("data-v-6dce958f"),e=e(),(0,l.Cn)(),e),Ve={class:"flex flex-col space-y-2 screen-block"},Ne={class:"xl:w-3/4 flex flex-col space-y-2 border-between-children"},Me=Se((()=>(0,l._)("h3",null,"Comments for the Expert Panel",-1))),Fe={class:"mb-2"},je={key:1,class:"note"},$e=Se((()=>(0,l._)("h3",null,"Internal Comments",-1))),Ie={class:"mb-2"},qe={key:1,class:"note"},ze={key:0},Ee=Se((()=>(0,l._)("h3",null,"Other notes from the Core Group",-1))),He={key:1},Ze=Se((()=>(0,l._)("h3",null,"Other Approver's Judgements:",-1))),Le={class:"text-lg"},Be={key:0,class:"ml-2 text-sm"},Ge=Se((()=>(0,l._)("strong",null,"Notes for EP: ",-1))),Oe=Se((()=>(0,l._)("hr",null,null,-1))),Re={class:"pt-2 lg:flex lg:space-x-2 space-y-2 lg:space-y-0 items-start"},Te={class:"lg:w-3/5"},Ye={class:"flex space-x-2 items-center p-2 bg-gray-100 rounded-lg lg:w-2/5"},Je=Se((()=>(0,l._)("div",null,"Reply to or create comments, suggestions, and required revisions in the comments sections below.",-1)));var Pe={__name:"ChairApproverControls",emits:["deleted","saved"],setup(e,{emit:t}){const a=(0,l.f3)("commentManager"),n=(0,l.f3)("latestSubmission"),s=(0,i.oR)(),u=(0,o.iH)(!1),d=()=>{u.value=!0},p=(0,l.Fl)((()=>n.value.judgements&&n.value.judgements.length>0&&n.value.judgements.filter((e=>e.person_id==s.getters.currentUser.person.id)).length>0)),c=(0,l.Fl)((()=>n.value&&n.value.judgements?n.value.judgements.filter((e=>e.person_id!==s.getters.currentUser.person.id)):[])),m=(0,l.Fl)((()=>a.value.commentsForEp.length>0)),g=(0,l.Fl)((()=>a.value.openInternal.length>0)),w=e=>{u.value=!1,t("saved",e)};return(e,i)=>{const s=(0,l.up)("badge"),h=(0,l.up)("icon-arrow-down"),v=(0,l.up)("modal-dialog");return(0,l.wg)(),(0,l.iD)("div",Ve,[(0,l._)("div",Ne,[(0,l._)("div",null,[Me,(0,l._)("div",Fe,[(0,o.SU)(m)?((0,l.wg)(),(0,l.j4)(re.Z,{key:0,comments:(0,o.SU)(a).commentsForEp},null,8,["comments"])):((0,l.wg)(),(0,l.iD)("div",je,"None"))])]),(0,l._)("div",null,[$e,(0,l._)("div",Ie,[(0,o.SU)(g)?((0,l.wg)(),(0,l.j4)(re.Z,{key:0,comments:(0,o.SU)(a).openInternal},null,8,["comments"])):((0,l.wg)(),(0,l.iD)("div",qe,"None"))])]),(0,o.SU)(n).notes_for_chairs?((0,l.wg)(),(0,l.iD)("div",ze,[Ee,(0,l._)("p",null,(0,r.zw)((0,o.SU)(n).notes_for_chairs),1)])):(0,l.kq)("",!0),(0,o.SU)(c).length>0?((0,l.wg)(),(0,l.iD)("div",He,[Ze,(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,o.SU)(c),(t=>((0,l.wg)(),(0,l.iD)("li",{key:t.id,class:"mt-2 ml-2"},[(0,l._)("div",Le,[(0,l.Uk)((0,r.zw)(t.person.name)+": ",1),(0,l.Wm)(s,{color:(0,o.SU)(_e.i)(t)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.titleCase(t.decision)),1)])),_:2},1032,["color"])]),t.notes?((0,l.wg)(),(0,l.iD)("p",Be,[Ge,(0,l.Uk)((0,r.zw)(t.notes),1)])):(0,l.kq)("",!0)])))),128))])])):(0,l.kq)("",!0)]),Oe,(0,l._)("div",Re,[(0,l._)("div",Te,[(0,o.SU)(p)?((0,l.wg)(),(0,l.j4)(We,{key:1,onDeleted:i[0]||(i[0]=e=>t("deleted")),onSaved:i[1]||(i[1]=e=>t("saved"))})):((0,l.wg)(),(0,l.iD)("button",{key:0,class:"block btn btn-lg blue",onClick:d}," Approve or request revisions "))]),(0,l._)("div",Ye,[(0,l.Wm)(h,{class:"text-blue-600 flex-shrink-0",width:"30",height:"30"}),Je,(0,l.Wm)(h,{class:"text-blue-600 flex-shrink-0",width:"30",height:"30"})])]),((0,l.wg)(),(0,l.j4)(l.lR,{to:"body"},[(0,l.Wm)(v,{modelValue:u.value,"onUpdate:modelValue":i[3]||(i[3]=e=>u.value=e),title:"Approve or request revisions"},{default:(0,l.w5)((()=>[(0,l.Wm)(be,{onSaved:w,onCanceled:i[2]||(i[2]=e=>u.value=!1)})])),_:1},8,["modelValue"])]))])}}};const Ke=(0,I.Z)(Pe,[["__scopeId","data-v-6dce958f"]]);var Qe=Ke,Xe=a(3496),et={__name:"ApplicationReview",emits:["deleted","saved"],setup(e,{emit:t}){const a=(0,i.oR)(),n=(0,l.Fl)((()=>a.getters["groups/currentItemOrNew"])),r=(0,l.Fl)((()=>n.value.expert_panel)),u=(0,l.Fl)((()=>n.value.uuid?[{label:n.value.displayName,route:{name:"GroupDetail",params:{uuid:n.value.uuid}}}]:[])),d=(0,l.Fl)((()=>4==n.value.expert_panel.current_step?Xe.Z:1==r.value.current_step?se.Z:null)),p=(0,l.Fl)((()=>n.value.isGcep()?n.value.displayName:`${n.value.displayName} - ${n.value.expert_panel.currentStepName}`));return(e,a)=>((0,l.wg)(),(0,l.j4)(ie["default"],{title:(0,o.SU)(p),breadcrumbs:(0,o.SU)(u)},{default:(0,l.w5)((()=>[(0,o.SU)(s.Fs)("ep-applications-approve")?((0,l.wg)(),(0,l.j4)(Qe,{key:0,onDeleted:a[0]||(a[0]=e=>t("deleted")),onSaved:a[1]||(a[1]=e=>t("deleted"))})):(0,l.kq)("",!0),((0,l.wg)(),(0,l.j4)((0,l.LL)((0,o.SU)(d))))])),_:1},8,["title","breadcrumbs"]))}};const tt=et;var at=tt,lt=a(417),ot={__name:"ApplicationDetail",props:{uuid:{type:String,requird:!0}},setup(e){const t=e,a=(0,o.iH)((0,lt.Z)("App\\Modules\\Group\\Models\\Group",0));(0,l.JJ)("commentManager",a);const r=(0,i.oR)(),u=(0,o.iH)(!1),d=(0,l.Fl)((()=>r.getters["groups/currentItemOrNew"]));(0,l.JJ)("group",d);const p=(0,o.XI)(at),c=(0,o.iH)({});(0,l.JJ)("latestSubmission",c);const m=()=>{ue.hi.get(`/api/groups/${d.value.uuid}/application/latest-submission`).then((e=>c.value=e.data)).catch((e=>console.log(e)))},g=async()=>{u.value=!0,await r.dispatch("groups/findAndSetCurrent",t.uuid),r.dispatch("groups/getDocuments",d.value),r.dispatch("groups/getNextActions",d.value),r.dispatch("groups/getSubmissions",d.value),m(),r.dispatch("groups/getMembers",d.value),r.dispatch("groups/getGenes",d.value),u.value=!1};return(0,l.YP)((()=>t.uuid),(async(e,t)=>{!e||t&&e==t||(await g(),a.value=(0,lt.Z)("App\\Modules\\Group\\Models\\Group",d.value.id),a.value.getComments())}),{immediate:!0}),(0,l.bv)((async()=>{(0,s.Fs)("ep-applications-comment")&&(p.value=at),(0,s.Fs)("ep-applications-manage")&&(p.value=ne)})),(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[((0,l.wg)(),(0,l.j4)((0,l.LL)((0,o.SU)(p)),{loading:u.value,onUpdated:g,onSaved:m,onDeleted:m},null,40,["loading"])),(0,l.wy)((0,l._)("div",null,"Loading…",512),[[n.F8,u.value]])],64))}};const nt=ot;var it=nt}}]);
//# sourceMappingURL=application-detail.7eb71271.js.map