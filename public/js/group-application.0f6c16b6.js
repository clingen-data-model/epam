"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[99],{3774:function(e,t,i){i.d(t,{R0:function(){return s}});var o=i(2262),a=i(9700),r=i(812);const s=(0,o.iH)({}),n=(0,o.iH)(!1),p=()=>{n.value=!1,s.value={}},l=async({method:e,url:t,data:i})=>{try{return await(0,r.Z)({method:e,url:t,data:i}).then((e=>e.data.data))}catch(o){(0,a.Z)(o)&&(s.value={...s,...o.response.data.errors})}},u=()=>{s.value={}};t["ZP"]=()=>({errors:s,editing:n,hideForm:p,submitFormData:l,resetErrors:u})},8017:function(e,t,i){i.d(t,{Z:function(){return A}});var o=i(6252);const a=e=>((0,o.dD)("data-v-66e2eae8"),e=e(),(0,o.Cn)(),e),r={class:"text-sm"},s=a((()=>(0,o._)("tr",null,[(0,o._)("th",{colspan:"2"}," "),(0,o._)("th",{colspan:"1",colgroup:"biocurator"}," "),(0,o._)("th",{colspan:"2",colgroup:"biocurator",class:"text-center"},"Training"),(0,o._)("th",{colspan:"2"}," ")],-1))),n=a((()=>(0,o._)("th",null,"First Name",-1))),p=a((()=>(0,o._)("th",null,"Last Name",-1))),l=a((()=>(0,o._)("th",{colgroup:"biocurator",class:"w-24"},"Biocurator",-1))),u=a((()=>(0,o._)("th",{colgroup:"biocurator",class:"w-20"},"Level 1",-1))),d=a((()=>(0,o._)("th",{colgroup:"biocurator",class:"w-20"},"Level 2",-1))),c=a((()=>(0,o._)("th",null,"Biocurator Trainer",-1))),m=(0,o.Uk)(" Core Approval Member ");function h(e,t,i,a,h,g){const b=(0,o.up)("icon-info"),_=(0,o.up)("popover"),w=(0,o.up)("member-designation-row");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("table",r,[(0,o._)("thead",null,[s,(0,o._)("tr",null,[n,p,l,u,d,c,(0,o._)("th",null,[m,(0,o.Wm)(_,{arrow:"",content:"Core approval members are responsible for ongoing final approval of variant classifications.",hover:""},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"inline-block cursor-pointer",width:16,height:16})])),_:1})])])]),(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.group.members,(e=>((0,o.wg)(),(0,o.j4)(w,{member:e,key:e.id,ref_for:!0,ref:`memberRow${e.id}`,readonly:i.readonly,onUpdated:g.handleMemberUpdate},null,8,["member","readonly","onUpdated"])))),128))])])])}var g=i(3577),b=i(9963);const _={colgroup:"biocurator"},w=["disabled"],f={colgroup:"biocurator"},v=["disabled"],y={colgroup:"biocurator"},k=["disabled"],U=["disabled"],D=["disabled"];function S(e,t,i,a,r,s){return(0,o.wg)(),(0,o.iD)("tr",null,[(0,o._)("td",null,(0,g.zw)(r.workingCopy.person.first_name),1),(0,o._)("td",null,(0,g.zw)(r.workingCopy.person.last_name),1),(0,o._)("td",_,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>s.biocurator=e),disabled:!s.canEdit,onInput:t[1]||(t[1]=(...t)=>e.debounceSave&&e.debounceSave(...t))},null,40,w),[[b.e8,s.biocurator]])]),(0,o._)("td",f,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>r.workingCopy.training_level_1=e),disabled:!s.canEdit,onInput:t[3]||(t[3]=(...t)=>e.debounceSave&&e.debounceSave(...t))},null,40,v),[[b.e8,r.workingCopy.training_level_1]])]),(0,o._)("td",y,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>r.workingCopy.training_level_2=e),disabled:!s.canEdit,onInput:t[5]||(t[5]=(...t)=>e.debounceSave&&e.debounceSave(...t))},null,40,k),[[b.e8,r.workingCopy.training_level_2]])]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=e=>s.biocuratorTrainer=e),disabled:!s.canEdit,onInput:t[7]||(t[7]=(...t)=>e.debounceSave&&e.debounceSave(...t))},null,40,U),[[b.e8,s.biocuratorTrainer]])]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=e=>s.coreApprovalMember=e),disabled:!s.canEdit,onInput:t[9]||(t[9]=(...t)=>e.debounceSave&&e.debounceSave(...t))},null,40,D),[[b.e8,s.coreApprovalMember]])])])}var C=i(1378),x=i(6486),W={name:"ComponentName",props:{member:{type:C.Z,required:!0},readonly:{type:Boolean,required:!1,default:!1}},emits:["updated"],data(){return{workingCopy:new C.Z}},computed:{group(){return this.$store.getters["groups/currentItemOrNew"]},biocurator:{get(){return this.workingCopy.hasRole("biocurator")},set(e){this.toggleRole(e,"biocurator")}},biocuratorTrainer:{get(){return this.workingCopy.hasRole("biocurator-trainer")},set(e){this.toggleRole(e,"biocurator-trainer")}},coreApprovalMember:{get(){return this.workingCopy.hasRole("core-approval-member")},set(e){this.toggleRole(e,"core-approval-member")}},canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},watch:{member:{immediate:!0,handler(e){this.syncWorkingCopy(e)}}},methods:{initWorkingCopy(){this.workingCopy=new C.Z},syncWorkingCopy(e){e.id&&(this.workingCopy=e.clone())},toggleRole(e,t){e?this.workingCopy.addRole(t):this.workingCopy.removeRole(t)},save(){const e=[];return e.push(this.updateTrainingInfo()),e.push(this.syncRoles()),e},updateTrainingInfo(){if(this.workingCopy.isDirty("training_level_1")||this.workingCopy.isDirty("training_level_2"))return this.$store.dispatch("groups/memberUpdate",{groupUuid:this.group.uuid,memberId:this.workingCopy.id,data:{training_level_1:this.workingCopy.training_level_1,training_level_2:this.workingCopy.training_level_2}})},syncRoles(){if(this.workingCopy.isDirty("roles"))return this.$store.dispatch("groups/memberSyncRoles",{group:this.group,member:this.workingCopy})},emitUpdated(){this.$emit("updated",this.workingCopy)}},created(){this.debounceSave=(0,x.debounce)((()=>{this.save()}),1e3)}},$=i(3744);const q=(0,$.Z)(W,[["render",S],["__scopeId","data-v-42410892"]]);var I=q,R={name:"MemberDesignationForm",components:{MemberDesignationRow:I},props:{readonly:{type:Boolean,required:!1,default:!1}},computed:{group:{get(){return this.$store.getters["groups/currentItemOrNew"]}},canEdit(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}},watch:{group:{immediate:!0,async handler(e,t){!e.id||t&&e.id==t.id||this.$store.dispatch("groups/getMembers",this.group)}}},methods:{getMembers(){this.$store.dispatch("groups/getMembers",{group:this.group})},handleMemberUpdate(){this.$emit("updated")}}};const V=(0,$.Z)(R,[["render",h],["__scopeId","data-v-66e2eae8"]]);var A=V},3234:function(e,t,i){i.d(t,{Z:function(){return x}});var o=i(6252),a=i(3577),r=i(9963);const s={key:0},n={key:0},p=(0,o.Uk)(" Affiliation ID "),l=(0,o.Uk)("admin-only"),u={key:0},d={key:1,class:"text-gray-400"},c={key:1},m={key:2},h=(0,o.Uk)(" Status: "),g=(0,o.Uk)("admin-only"),b=(0,o.Uk)(" Parent group: "),_=(0,o.Uk)("admin-only");function w(e,t,i,w,f,v){const y=(0,o.up)("input-row"),k=(0,o.up)("dictionary-row"),U=(0,o.up)("note");return(0,o.wg)(),(0,o.iD)("div",null,[v.canSetType?((0,o.wg)(),(0,o.j4)(y,{key:0,modelValue:v.group.group_type_id,"onUpdate:modelValue":t[0]||(t[0]=e=>v.group.group_type_id=e),errors:w.errors.group_type_id,type:"select",options:v.typeOptions,label:"Type"},null,8,["modelValue","errors","options"])):((0,o.wg)(),(0,o.j4)(k,{key:1,label:"Type"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(v.typeDisplayName),1)])),_:1})),(0,o.Wm)(r.uT,{name:"slide-fade-down",mode:"out-in"},{default:(0,o.w5)((()=>[v.group.group_type_id>2&&v.group.expert_panel?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(y,{label:"Long Base Name",modelValue:v.group.expert_panel.long_base_name,"onUpdate:modelValue":[t[1]||(t[1]=e=>v.group.expert_panel.long_base_name=e),v.emitUpdate],placeholder:"Long base name",errors:w.errors.long_base_name,"input-class":"w-full"},null,8,["modelValue","onUpdate:modelValue","errors"]),(0,o.Wm)(y,{label:"Short Base Name",modelValue:v.group.expert_panel.short_base_name,"onUpdate:modelValue":[t[2]||(t[2]=e=>v.group.expert_panel.short_base_name=e),v.emitUpdate],placeholder:"Short base name",errors:w.errors.short_base_name,"input-class":"w-full"},null,8,["modelValue","onUpdate:modelValue","errors"]),e.hasAnyPermission(["groups-manage"])?((0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(y,{label:"Affiliation ID",modelValue:v.group.expert_panel.affiliation_id,"onUpdate:modelValue":[t[3]||(t[3]=e=>v.group.expert_panel.affiliation_id=e),v.emitUpdate],placeholder:v.affiliationIdPlaceholder,errors:w.errors.affiliation_id,"input-class":"w-full"},{label:(0,o.w5)((()=>[p,(0,o.Wm)(U,null,{default:(0,o.w5)((()=>[l])),_:1})])),_:1},8,["modelValue","placeholder","errors","onUpdate:modelValue"])])):((0,o.wg)(),(0,o.j4)(k,{key:1,label:"Affiliation ID"},{default:(0,o.w5)((()=>[v.group.expert_panel.affiliation_id?((0,o.wg)(),(0,o.iD)("span",u,(0,a.zw)(v.group.expert_panel.affiliation_id),1)):((0,o.wg)(),(0,o.iD)("span",d,(0,a.zw)("Not yet assigend")))])),_:1}))])):((0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(y,{modelValue:v.group.name,"onUpdate:modelValue":[t[4]||(t[4]=e=>v.group.name=e),v.emitUpdate],placeholder:"Name",label:"Name","input-class":"w-full",errors:w.errors.name},null,8,["modelValue","errors","onUpdate:modelValue"])]))])),_:1}),e.hasPermission("groups-manage")?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(y,{modelValue:v.group.group_status_id,"onUpdate:modelValue":[t[5]||(t[5]=e=>v.group.group_status_id=e),v.emitUpdate],type:"select",options:v.statusOptions,errors:w.errors.group_status_id},{label:(0,o.w5)((()=>[h,(0,o.Wm)(U,null,{default:(0,o.w5)((()=>[g])),_:1})])),_:1},8,["modelValue","options","errors","onUpdate:modelValue"]),(0,o.Wm)(y,{modelValue:v.group.parent_id,"onUpdate:modelValue":[t[6]||(t[6]=e=>v.group.parent_id=e),v.emitUpdate],type:"select",options:v.parentOptions,errors:w.errors.parent_id},{label:(0,o.w5)((()=>[b,(0,o.Wm)(U,null,{default:(0,o.w5)((()=>[_])),_:1})])),_:1},8,["modelValue","options","errors","onUpdate:modelValue"])])):(0,o.kq)("",!0)])}var f=i(6486),v=i(9028),y=i(7506),k=i(3823),U=i(3774),D={name:"GroupForm",emits:["canceled","saved","update"],data(){return{groupTypes:[{id:1,fullname:"Working Group"},{id:2,fullname:"Clinical Domain Working Group"},{id:3,fullname:"GCEP"},{id:4,fullname:"VCEP"}],groupStatuses:k.groups.statuses,newGroup:new y.Z,parents:[]}},computed:{group:{get(){const e=this.$store.getters["groups/currentItem"];return e||this.newGroup},set(e){try{this.$store.commit("groups/addItem",e)}catch(t){this.newGroup=e}}},statusOptions(){return Object.values(this.groupStatuses).map((e=>({value:e.id,label:this.titleCase(e.name)})))},typeOptions(){return this.groupTypes.map((e=>({value:e.id,label:e.fullname})))},canSetType(){return this.hasPermission("groups-manage")&&!this.group.id},typeDisplayName(){return this.group.type?this.group.type.name?this.group.type.id<3?this.group.type.name.toUpperCase():this.group.expert_panel.type.name.toUpperCase():null:"🐇🥚"},affiliationIdPlaceholder(){return 5e4},cdwgs(){return this.$store.getters["cdwgs/all"]},namesDirty(){return this.group.expert_panel.isDirty("long_base_name")||this.group.expert_panel.isDirty("short_base_name")},affiliationIdDirty(){return console.log({new:this.group.expert_panel.attributes.affiliation_id,original:this.group.expert_panel.original.affiliation_id}),this.group.expert_panel.isDirty("affiliation_id")},parentOptions(){const e=[{value:0,label:"None"}];return this.parents.filter((e=>e.type.can_be_parent)).forEach((t=>{e.push({value:t.id,label:t.displayName})})),(0,f.sortBy)(e,"label")}},methods:{async save(){this.resetErrors();try{if(this.group.id)return await this.updateGroup(),void this.$emit("saved");const e=await this.createGroup().then((e=>e.data.data));this.$emit("saved"),this.$store.commit("pushSuccess","Group created."),this.$router.push({name:"AddMember",params:{uuid:e.uuid}})}catch(e){throw(0,v.z1)(e)&&(this.errors=e.response.data.errors),e}},createGroup(){let{name:e,parent_id:t,group_type_id:i,group_status_id:o}=this.group.attributes;const{short_base_name:a}=this.group.expert_panel;return null===e&&this.group.expert_panel&&(e=this.group.expert_panel.long_base_name),this.$store.dispatch("groups/create",{name:e,parent_id:t,group_type_id:i,group_status_id:o,short_base_name:a})},updateGroup(){const e=[];return e.push(this.saveGroupData()),this.group.expert_panel&&e.push(this.saveEpData()),Promise.all(e)},saveGroupData(){const e=[];return this.group.isDirty("parent_id")&&e.push(this.saveParent()),this.group.isDirty("name")&&e.push(this.saveName()),this.group.isDirty("group_status_id")&&e.push(this.saveStatus()),Promise.all(e)},async saveEpData(){const e=[];if(this.namesDirty){const{long_base_name:t,short_base_name:i}=this.group.expert_panel;e.push(this.submitFormData({method:"put",url:`/api/groups/${this.group.uuid}/expert-panel/name`,data:{long_base_name:t,short_base_name:i}}))}return this.affiliationIdDirty&&e.push(this.submitFormData({method:"put",url:`/api/groups/${this.group.uuid}/expert-panel/affiliation-id`,data:{affiliation_id:this.group.expert_panel.affiliation_id}})),await Promise.all(e)},isDirty(e){return this.group[e]!=this.group[e]},saveParent(){return this.submitFormData({method:"put",url:`/api/groups/${this.group.uuid}/parent`,data:{parent_id:this.group.parent_id}})},saveName(){return this.submitFormData({method:"put",url:`/api/groups/${this.group.uuid}/name`,data:{name:this.group.name}})},saveStatus(){return this.submitFormData({method:"put",url:`/api/groups/${this.group.uuid}/status`,data:{status_id:this.group.group_status_id}})},resetData(){this.group.uuid&&this.$store.dispatch("groups/find",this.group.uuid)},cancel(){this.group.uuid&&this.resetData(),this.$emit("canceled")},async getParentOptions(){const e={"where[group_type_id]":[1,2],without:["coordinators","expertPanel"]};this.parents=await v.hi.get("/api/groups",{params:e}).then((e=>e.data.filter((e=>e.id!=this.group.id)).map((e=>new y.Z(e)))))},emitUpdate(){this.$emit("update")}},beforeMount(){this.getParentOptions(),this.$store.dispatch("cdwgs/getAll")},setup(e,t){const{errors:i,submitFormData:o,resetErrors:a}=(0,U.ZP)(e,t);return{errors:i,submitFormData:o,resetErrors:a}}},S=i(3744);const C=(0,S.Z)(D,[["render",w]]);var x=C},1564:function(e,t,i){i.r(t),i.d(t,{default:function(){return lt}});var o=i(6252),a=i(3577);const r=e=>((0,o.dD)("data-v-6c06cdc4"),e=e(),(0,o.Cn)(),e),s={class:"flex items-center pb-2 border-b z-20"},n={class:"flex-1"},p={class:"border-b-0 flex justify-between items-start mb-0"},l={key:0},u=r((()=>(0,o._)("span",{class:"note"}," | ",-1))),d={class:"md:flex"},c={class:"my-4 p-4 text-sm flex items-start space-x-4 bg-gray-200 rounded-lg"},m=r((()=>(0,o._)("h3",{style:{"line-height":"1"}},"Have Questions?",-1))),h={style:{"font-size":"1rem","line-height":"2"}},g=(0,o.Uk)(" Read the "),b={class:"text-sm bottom-0"},_={key:0},w={key:1},f={class:"flex-1"},v={id:"body",class:"px-4"},y={class:"text-lg"},k=r((()=>(0,o._)("p",null,"You cannot update your application while waiting approval.",-1))),U=r((()=>(0,o._)("p",null,"The approval committee will respond soon.",-1))),D=r((()=>(0,o._)("p",null,[(0,o.Uk)(" Please contact "),(0,o._)("a",{href:"mailto:cdwg_oversightcommittee@clinicalgenome.org"}," the ClinGen CDWG Oversight Committee "),(0,o.Uk)(" if you have any questions. ")],-1)));function S(e,t,i,r,S,C){const x=(0,o.up)("group-breadcrumbs"),W=(0,o.up)("note"),$=(0,o.up)("icon-question"),q=(0,o.up)("gcep-quick-guide-link"),I=(0,o.up)("vcep-protocol-link"),R=(0,o.up)("application-menu"),V=(0,o.up)("static-alert"),A=(0,o.up)("router-view"),P=(0,o.up)("modal-dialog"),M=(0,o.Q2)("remaining-height");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("header",s,[(0,o._)("div",n,[(0,o.Wm)(x,{group:C.group},null,8,["group"]),(0,o._)("h1",p,[(0,o._)("div",null,[(0,o.Uk)((0,a.zw)(C.group.displayName)+" - Application ",1),e.hasPermission("groups-manage")?((0,o.wg)(),(0,o.iD)("span",l,[(0,o.Wm)(W,{class:"inline"},{default:(0,o.w5)((()=>[(0,o.Uk)("group: "+(0,a.zw)(C.group.id),1)])),_:1}),u,(0,o.Wm)(W,{class:"inline"},{default:(0,o.w5)((()=>[(0,o.Uk)("expert_panel: "+(0,a.zw)(C.group.expert_panel.id),1)])),_:1})])):(0,o.kq)("",!0)]),C.group.expert_panel.hasPendingSubmission?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[0]||(t[0]=(...t)=>e.$refs.application.save&&e.$refs.application.save(...t)),class:"btn btn-sm"},"Save"))])])]),(0,o._)("div",d,[(0,o.Wm)(R,{class:"mt-4",application:C.application,"is-collapsed":!S.showApplicationToc},{footer:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.Wm)($,{height:"48",width:"48",class:"text-blue-700"}),(0,o._)("div",null,[m,(0,o._)("div",h,[g,3==C.group.group_type_id?((0,o.wg)(),(0,o.j4)(q,{key:0})):(0,o.kq)("",!0),4==C.group.group_type_id?((0,o.wg)(),(0,o.j4)(I,{key:1})):(0,o.kq)("",!0)])])]),(0,o._)("div",b,[S.saving?((0,o.wg)(),(0,o.iD)("div",_,"Saving...")):((0,o.wg)(),(0,o.iD)("div",w,"Last saved at "+(0,a.zw)(e.formatTime(S.lastSavedAt)),1))])])),_:1},8,["application","is-collapsed"]),(0,o._)("div",f,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("section",v,[C.group.expert_panel.hasPendingSubmission?((0,o.wg)(),(0,o.j4)(V,{key:0,class:"relative mt-4 px-4 z-50",variant:"success"},{default:(0,o.w5)((()=>[(0,o._)("p",y,"Your application was submitted on "+(0,a.zw)(e.formatDate(C.group.expert_panel.pendingSubmission.created_at))+".",1),k,U,D])),_:1})):(0,o.kq)("",!0),((0,o.wg)(),(0,o.j4)((0,o.LL)(C.applicationComponent),{ref:"application",onSaved:C.updateLastSavedAt,onSaving:t[1]||(t[1]=e=>S.saving=!0)},null,40,["onSaved"]))])),[[M]])])]),((0,o.wg)(),(0,o.j4)(o.lR,{to:"body"},[(0,o.Wm)(P,{modelValue:S.showModal,"onUpdate:modelValue":t[2]||(t[2]=e=>S.showModal=e),onClosed:C.handleModalClosed,title:this.$route.meta.title},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{ref:"modalView",onSaved:C.hideModal,onCanceled:C.hideModal},null,8,["onSaved","onCanceled"])])),_:1},8,["modelValue","onClosed","title"])]))])}const C={class:"relative"},x=(0,o._)("p",null," Expert Panels are expected to represent the diversity of expertise in the field, including all major areas of expertise (clinical, diagnostic laboratory, and basic research). Membership should include representation from three or more institutions and will encompass disease/gene expert members as well as biocurators. Biocurators do not have to be gene/disease experts and will be primarily responsible for assembling the available evidence for subsequent expert member review. For role, suggested examples include: primary biocurator, expert reviewer, etc. ",-1),W=(0,o.Uk)(" It is expected that the expert panel will utilize "),$=(0,o.Uk)(" during pre-curation and should use the "),q=(0,o.Uk)(" to enter their precuration information. Focus should be on the canonical disease, and splitting into multiple phenotypes should be avoided. The precurations will be published to "),I=(0,o.Uk)(". "),R=(0,o._)("hr",null,null,-1);function V(e,t,i,a,r,s){const n=(0,o.up)("group-form"),p=(0,o.up)("app-section"),l=(0,o.up)("member-list"),u=(0,o.up)("lumping-and-splitting-link"),d=(0,o.up)("gene-tracker-link"),c=(0,o.up)("website-link"),m=(0,o.up)("gcep-gene-list"),h=(0,o.up)("scope-description-form"),g=(0,o.up)("attestation-gcep"),b=(0,o.up)("gcep-ongoing-plans-form"),_=(0,o.up)("attestation-nhgri"),w=(0,o.up)("application-step");return(0,o.wg)(),(0,o.iD)("div",C,[(0,o.Wm)(w,{id:"definition",disabled:s.group.expert_panel.hasPendingSubmission},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{title:"Basic Information",id:"basicInfo"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{group:s.group,ref:"groupForm",onUpdate:s.handleUpdate},null,8,["group","onUpdate"])])),_:1}),s.group?((0,o.wg)(),(0,o.j4)(p,{key:0,title:"Membership",id:"membership"},{default:(0,o.w5)((()=>[x,(0,o.Wm)(l,{group:s.group},null,8,["group"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(p,{title:"Scope of Work",id:"scope"},{default:(0,o.w5)((()=>[(0,o._)("p",null,[W,(0,o.Wm)(u),$,(0,o.Wm)(d),q,(0,o.Wm)(c),I]),(0,o.Wm)(m,{group:s.group,ref:"geneList",onGeneschanged:t[0]||(t[0]=e=>r.genesChanged=!0),onUpdate:s.handleUpdate},null,8,["group","onUpdate"]),R,(0,o.Wm)(h,{onUpdate:s.handleUpdate},null,8,["onUpdate"])])),_:1}),(0,o.Wm)(p,{title:"Attestations",id:"attestations"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{onUpdate:s.handleUpdate},null,8,["onUpdate"])])),_:1}),(0,o.Wm)(p,{id:"curationReviewProcess",title:"Plans for Ongoing Gene Review and Reanalysis and Discrepancy Resolution"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{onUpdate:s.handleUpdate},null,8,["onUpdate"])])),_:1}),(0,o.Wm)(p,{title:"NHGRI Data Availability",id:"nhgri"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{onUpdate:s.handleUpdate},null,8,["onUpdate"])])),_:1})])),_:1},8,["disabled"])])}var A=i(6486),P=i(3774),M=i(9028),Z=i(2694);const G=e=>((0,o.dD)("data-v-12b150bb"),e=e(),(0,o.Cn)(),e),F=["id"],j={key:0,class:"header flex justify-between items-center"},N={key:0,class:"inline"},O=["innerHTML"],T={key:0,class:"inline"},E=(0,o.Uk)(" Make changes from the "),B=(0,o.Uk)("group's detail screen"),z=G((()=>(0,o._)("br",null,null,-1))),L=G((()=>(0,o._)("small",null,"Changes may require re-approval.",-1))),H=(0,o.Uk)("Approved"),Y=(0,o.Uk)("Under Review"),K={class:"relative"},Q={class:"step-contents"},X={key:1,class:"z-20 absolute top-0 bottom-0 left-0 right-0 bg-white bg-opacity-50"};function J(e,t,i,r,s,n){const p=(0,o.up)("icon-lock"),l=(0,o.up)("popover"),u=(0,o.up)("router-link"),d=(0,o.up)("badge"),c=(0,o.up)("application-submit-button");return(0,o.wg)(),(0,o.iD)("div",{class:"application-step",id:i.id},[i.title?((0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("h2",{class:(0,a.C_)({"text-gray-400":i.disabled})},[(0,o.Uk)((0,a.zw)(i.title)+" ",1),i.disabled?((0,o.wg)(),(0,o.iD)("div",N,[(0,o.Wm)(l,{arrow:"",hover:""},{content:(0,o.w5)((()=>[(0,o._)("small",{class:"text-sm",innerHTML:n.lockedContent},null,8,O)])),default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"inline"})])),_:1})])):(0,o.kq)("",!0)],2),n.approved?((0,o.wg)(),(0,o.iD)("div",T,[(0,o.Wm)(l,{hover:"",arrow:""},{content:(0,o.w5)((()=>[E,(0,o.Wm)(u,{to:{name:"GroupDetail",parmas:{uuid:n.group.uuid}}},{default:(0,o.w5)((()=>[B])),_:1},8,["to"]),z,L])),default:(0,o.w5)((()=>[(0,o.Wm)(d,{color:"green"},{default:(0,o.w5)((()=>[H])),_:1})])),_:1})])):(0,o.kq)("",!0),n.underReview?((0,o.wg)(),(0,o.j4)(d,{key:1,color:"yellow"},{default:(0,o.w5)((()=>[Y])),_:1})):(0,o.kq)("",!0)])):(0,o.kq)("",!0),(0,o._)("div",K,[(0,o._)("div",Q,[(0,o.WI)(e.$slots,"default",{},void 0,!0)]),n.showSubmitButton?((0,o.wg)(),(0,o.j4)(c,{key:0,class:"border-t",step:n.step},null,8,["step"])):(0,o.kq)("",!0),i.disabled||n.approved?((0,o.wg)(),(0,o.iD)("div",X)):(0,o.kq)("",!0)])],8,F)}var ee=i(9963);const te={key:0,class:"p-4"},ie={class:"relative"},oe={key:0,class:"bg-white opacity-50 absolute top-0 bottom-0 left-0 right-0"},ae={class:"text-lg"},re=(0,o.Uk)(" Before submitting, please note: "),se=(0,o._)("ol",{class:"list-decimal pl-6"},[(0,o._)("li",null," Typical response times are between one and two weeks. "),(0,o._)("li",null," Questions, revisions, and other comments will be conveyed via email. "),(0,o._)("li",null," Once submitted you will not be able to update your application until the submission has been processed. ")],-1),ne=(0,o._)("div",{class:"mt-4 text-lg"},"Optional notes for reviewers:",-1);function pe(e,t,i,r,s,n){const p=(0,o.up)("requirements-item"),l=(0,o.up)("dev-component"),u=(0,o.up)("popover"),d=(0,o.up)("static-alert"),c=(0,o.up)("input-row"),m=(0,o.up)("button-row"),h=(0,o.up)("modal-dialog");return(0,o.wg)(),(0,o.iD)("div",null,[n.group.expert_panel.hasPendingSubmission?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",te,[(0,o.Wm)(u,{hover:"",arrow:""},{content:(0,o.w5)((()=>[(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.evaledRequirements,((e,t)=>((0,o.wg)(),(0,o.j4)(p,{key:t,requirement:e},null,8,["requirement"])))),128))])])),default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("div",ie,[(0,o._)("button",{class:"btn btn-xl",onClick:t[0]||(t[0]=(...e)=>n.initSubmission&&n.initSubmission(...e))}," Submit for Approval "),n.meetsRequirements?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",oe))]),e.hasRole("super-user")?((0,o.wg)(),(0,o.j4)(l,{key:0},{default:(0,o.w5)((()=>[(0,o._)("button",{onClick:t[1]||(t[1]=(...e)=>n.bypassRequirements&&n.bypassRequirements(...e))},"Bypass Requirements")])),_:1})):(0,o.kq)("",!0)])])),_:1})])),((0,o.wg)(),(0,o.j4)(o.lR,{to:"body"},[(0,o.Wm)(ee.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{modelValue:s.showSubmissionConfirmation,"onUpdate:modelValue":t[3]||(t[3]=e=>s.showSubmissionConfirmation=e),title:"Submit your application"},{default:(0,o.w5)((()=>[(0,o._)("p",ae," You are about to submit your "+(0,a.zw)(n.submissionName)+" application. ",1),(0,o.Wm)(d,{class:"text-md",variant:"info"},{default:(0,o.w5)((()=>[re,se])),_:1}),ne,(0,o.Wm)(c,{label:"",errors:s.errors.notes,vertical:""},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.notes=e),rows:"5",class:"w-full"},null,512),[[ee.nr,s.notes]])])),_:1},8,["errors"]),(0,o.Wm)(m,{onSubmitted:n.confirmSubmission,onCancelled:n.cancelSubmission},null,8,["onSubmitted","onCancelled"])])),_:1},8,["modelValue"])])),_:1})]))])}var le=i(3870),ue=i(3823);const{submissions:de}=ue;var ce={name:"ApplicationSubmitButton",components:{RequirementsItem:le.Z},props:{disabled:{type:Boolean,required:!1,default:!1},sections:{type:Array,required:!1,default:()=>[]},step:{type:Object,required:!0}},emits:["submitted","canceled"],data(){return{showSubmissionConfirmation:!1,notes:null,errors:{},bypassReqs:!1}},computed:{group(){return this.$store.getters["groups/currentItemOrNew"]},meetsRequirements(){return!!this.bypassReqs||this.step.meetsRequirements(this.group)},requirementsUnmet(){return!this.step.meetsRequirements(this.group)},evaledRequirements(){return this.step.evaluateRequirements(this.group)},submissionName(){if("gcep"==this.group.expert_panel.type.name)return"GCEP";switch(this.group.expert_panel.current_step){case 1:return"VCEP Group Definition";case 4:return"VCEP Sustained Curation Plans";default:break}return de.types.applications}},methods:{bypassRequirements(){this.bypassReqs=!0},initSubmission(){this.showSubmissionConfirmation=!0,this.notes=null},async confirmSubmission(){try{await this.$store.dispatch("groups/submitApplicationStep",{group:this.group,notes:this.notes}),this.$store.commit("pushSuccess","Your application has been submitted for approval."),this.showSubmissionConfirmation=!1,this.$emit("submitted")}catch(e){if((0,M.z1)(e)){const t=e.response.data.errors;return void this.$store.commit("pushError",t.group.join(","))}throw e}},cancelSubmission(){this.showSubmissionConfirmation=!1,this.notes=null,this.$emit("cancelled")}}},me=i(3744);const he=(0,me.Z)(ce,[["render",pe]]);var ge=he,be=i(8979),_e={name:"ApplicationStep",components:{ApplicationSubmitButton:ge},props:{title:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},id:{type:String,required:!0},noSubmit:{type:Boolean,required:!1,default:!1}},computed:{group(){return this.$store.getters["groups/currentItemOrNew"]},application(){return this.group.isVcep()?be.k7:be.UX},step(){return this.application.getStep(this.id)},showSubmitButton(){return!this.noSubmit},lockedContent(){return this.underReview?"Applications pending review cannot be upated.":this.step.isComplete(this.group)?`This step is approved.<br> Make changes from the <a href="/groups/${this.group.uuid}">group's detail screen</a><br><small>Changes may require re-approval.</small>`:"This step is not yet available."},approved(){return this.step.isComplete(this.group)},underReview(){return this.group.expert_panel.hasPendingSubmissionForStep(this.titleCase(this.id))}}};const we=(0,me.Z)(_e,[["render",J],["__scopeId","data-v-12b150bb"]]);var fe=we,ve=i(8012),ye=i(6820),ke=i(640),Ue=i(3234),De=i(2680),Se=i(4679),Ce=i(4358),xe={name:"ApplicationGcep",components:{"app-section":Z.Z,ApplicationStep:fe,AttestationGcep:ve.Z,AttestationNhgri:ye.Z,GcepGeneList:ke.Z,GroupForm:Ue.Z,GcepOngoingPlansForm:Ce.Z,MemberList:De.Z,ScopeDescriptionForm:Se.Z},emits:["autosaved","saved","saving"],data(){return{genesChanged:!1,saving:!1}},computed:{group:{get:function(){return this.$store.getters["groups/currentItemOrNew"]},set:function(e){this.$store.commit("groups/addItem",e)}}},methods:{async save(){this.$emit("saving");const e=Object.keys(this.$refs).map((e=>{if(this.$refs[e]&&this.$refs[e].save)return this.$refs[e].save()}));e.push(this.saveUpdates());try{await Promise.all(e),this.$emit("saved"),this.genesChanged=!1}catch(t){if((0,M.z1)(t))return void(this.errors=t.response.data.errors);throw t}},saveUpdates(){if(this.applicationIsDirty())return this.$store.dispatch("groups/saveApplicationData",this.group).then((()=>{this.$emit("saved")}))},async autosave(){if(console.log("autosave..."),this.applicationIsDirty())return await this.save(),void this.$emit("autosaved")},applicationIsDirty(){return this.group.expert_panel.isDirty()||this.group.isDirty()||this.genesChanged},handleUpdate(){this.debounceAutoSave()}},setup(){return{errors:P.R0}},created(){this.debounceAutoSave=(0,A.debounce)(this.autosave,2e3)}};const We=(0,me.Z)(xe,[["render",V]]);var $e=We;const qe=(0,o.Uk)(" Expert Panels are expected to represent the diversity of expertise and backgrounds in the field and should refer to "),Ie=(0,o.Uk)("Section 2.1 of the VCEP Protocol"),Re=(0,o.Uk)(" and the "),Ve=(0,o.Uk)(" for guidance to complete the Member List below. Please list the VCEP Chair(s) and Coordinator(s) first. "),Ae=(0,o._)("hr",null,null,-1),Pe=(0,o._)("hr",null,null,-1);function Me(e,t,i,a,r,s){const n=(0,o.up)("group-form"),p=(0,o.up)("app-section"),l=(0,o.up)("vcep-protocol-link"),u=(0,o.up)("nih-diversity-toolkit-link"),d=(0,o.up)("member-list"),c=(0,o.up)("membership-description-form"),m=(0,o.up)("vcep-gene-list"),h=(0,o.up)("scope-description-form"),g=(0,o.up)("attestation-reanalysis"),b=(0,o.up)("attestation-nhgri"),_=(0,o.up)("application-step"),w=(0,o.up)("specifications-section"),f=(0,o.up)("vcep-ongoing-plans-form"),v=(0,o.up)("evidence-summary-list"),y=(0,o.up)("member-designation-form");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(_,{id:"definition",title:"Group Definition",disabled:s.group.expert_panel.hasPendingSubmission},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{title:"Basic Information",id:"basicInfo"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{group:s.group,ref:"groupForm",onUpdate:s.handleUpdate},null,8,["group","onUpdate"])])),_:1}),s.group?((0,o.wg)(),(0,o.j4)(p,{key:0,title:"Membership",id:"membership"},{default:(0,o.w5)((()=>[(0,o._)("p",null,[qe,(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[Ie])),_:1}),Re,(0,o.Wm)(u),Ve]),(0,o.Wm)(d,{group:s.group},null,8,["group"]),Ae,(0,o.Wm)(c,{editing:!0,onUpdate:s.handleUpdate},null,8,["onUpdate"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(p,{title:"Scope of Work",id:"scope"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{group:s.group,ref:"geneList",onUpdate:s.handleUpdate},null,8,["group","onUpdate"]),Pe,(0,o.Wm)(h,{onUpdate:s.handleUpdate},null,8,["onUpdate"])])),_:1}),(0,o.Wm)(p,{title:"Reanalysis & Discrepancy Resolution",id:"reanalysis"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{onUpdate:s.handleUpdate},null,8,["onUpdate"])])),_:1}),(0,o.Wm)(p,{title:"NHGRI Data Availability",id:"nhgri"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{onUpdate:s.handleUpdate},null,8,["onUpdate"])])),_:1})])),_:1},8,["disabled"]),(0,o.Wm)(_,{id:"draft-specifications",title:"Draft Specifications",disabled:s.group.expert_panel.current_step<2||s.group.expert_panel.hasPendingSubmission,"no-submit":!0},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{"doc-type-id":2,step:2})])),_:1})])),_:1},8,["disabled"]),(0,o.Wm)(_,{id:"pilot-specifications",title:"Pilot Specifications",disabled:s.group.expert_panel.current_step<3||s.group.expert_panel.hasPendingSubmission,"no-submit":!0},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{"doc-type-id":[3,4,7],step:3})])),_:1})])),_:1},8,["disabled"]),(0,o.Wm)(_,{id:"sustained-curation",title:"Sustained Curation",disabled:s.group.expert_panel.current_step<4||s.group.expert_panel.hasPendingSubmission},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{title:"Plans for Ongoing Review and Reanalysis and Discrepancy Resolution",id:"curationReviewProcess"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{onUpdate:s.handleUpdate},null,8,["onUpdate"])])),_:1}),(0,o.Wm)(p,{title:"Example Evidence Summaries",id:"evidenceSummaries"},{default:(0,o.w5)((()=>[(0,o.Wm)(v)])),_:1}),(0,o.Wm)(p,{title:"Member Designation",id:"designations"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{ref:"designationForm"},null,512)])),_:1})])),_:1},8,["disabled"])])}var Ze=i(4561),Ge=i(7851),Fe=i(2738),je=i(8017),Ne=i(7750),Oe=i(906),Te=i(4006),Ee={name:"ApplicationVcep",components:{"app-section":Z.Z,ApplicationStep:fe,AttestationNhgri:ye.Z,AttestationReanalysis:Ze.Z,SpecificationsSection:Ge.Z,EvidenceSummaryList:Fe.Z,GroupForm:Ue.Z,MemberDesignationForm:je.Z,MemberList:De.Z,MembershipDescriptionForm:Ne.Z,ScopeDescriptionForm:Se.Z,VcepGeneList:Oe.Z,VcepOngoingPlansForm:Te.Z},emits:["autosaved","saved","saving"],data(){return{genesChanged:!1,saving:!1}},computed:{group:{get:function(){return this.$store.getters["groups/currentItemOrNew"]},set:function(e){this.$store.commit("groups/addItem",e)}}},methods:{async save(){this.$emit("saving");const e=Object.keys(this.$refs).map((e=>{if(this.$refs[e]&&this.$refs[e].save)return this.$refs[e].save()}));e.push(this.saveUpdates());try{await Promise.all(e),this.$emit("saved"),this.genesChanged=!1}catch(t){if((0,M.z1)(t))return void(this.errors=t.response.data.errors);throw t}},saveUpdates(){if(this.applicationIsDirty())return this.$store.dispatch("groups/saveApplicationData",this.group).then((()=>{this.$emit("saved")}))},async autosave(){if(console.log("autosave..."),this.applicationIsDirty())return await this.save(),void this.$emit("autosaved")},applicationIsDirty(){return this.group.expert_panel.isDirty()||this.group.isDirty()||this.genesChanged},handleUpdate(){this.debounceAutoSave()}},setup(){return{errors:P.R0}},created(){this.debounceAutoSave=(0,A.debounce)(this.autosave,2e3)}};const Be=(0,me.Z)(Ee,[["render",Me]]);var ze=Be;const Le={class:"menu-items"},He={class:""};function Ye(e,t,i,r,s,n){const p=(0,o.up)("menu-item");return(0,o.wg)(),(0,o.iD)("div",{class:(0,a.C_)([{collapsed:i.isCollapsed},"app-menu overflow-y-auto relative"])},[(0,o._)("ul",Le,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.application.steps,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},[(0,o.Wm)(p,{item:e,class:"block","is-current-step":n.isCurrentStep(e)},null,8,["item","is-current-step"])])))),128))]),(0,o._)("div",He,[(0,o.WI)(e.$slots,"footer",{},void 0,!0)])],2)}const Ke={class:"item"},Qe={key:0},Xe={class:"font-bold"};function Je(e,t,i,r,s,n){const p=(0,o.up)("icon-cheveron-right"),l=(0,o.up)("icon-checkmark"),u=(0,o.up)("badge"),d=(0,o.up)("menu-item",!0);return(0,o.wg)(),(0,o.iD)("div",Ke,[n.isStep?((0,o.wg)(),(0,o.iD)("div",Qe,[i.item.title?((0,o.wg)(),(0,o.iD)("header",{key:0,class:(0,a.C_)(["flex justify-between label",{open:!s.collapsed,"current-step":i.isCurrentStep}]),onClick:t[0]||(t[0]=(...e)=>n.toggleContents&&n.toggleContents(...e))},[(0,o._)("div",Xe,[(0,o.Uk)((0,a.zw)(i.item.title)+" ",1),n.hasManySections?((0,o.wg)(),(0,o.j4)(p,{key:0,class:"cheveron inline -mt-1"})):(0,o.kq)("",!0)]),i.item.isComplete(n.group)?((0,o.wg)(),(0,o.j4)(u,{key:0,color:"green"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{width:"12",height:"12"})])),_:1})):(0,o.kq)("",!0)],2)):(0,o.kq)("",!0),(0,o.Wm)(ee.uT,{name:"slide-fade-down"},{default:(0,o.w5)((()=>[this.item.sections&&n.hasManySections?(0,o.wy)(((0,o.wg)(),(0,o.iD)("ul",{key:0,class:(0,a.C_)({"ml-4 text-smaller":i.item.title})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.item.sections,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},[(0,o.Wm)(d,{item:e},null,8,["item"])])))),128))],2)),[[ee.F8,!s.collapsed]]):(0,o.kq)("",!0)])),_:1})])):((0,o.wg)(),(0,o.iD)("div",{key:1,class:"label",onClick:t[1]||(t[1]=e=>n.goToItem())},(0,a.zw)(i.item.title),1))])}var et={name:"MenuItem",props:{item:{required:!0,type:Object},collapsible:{type:Boolean,required:!1,default:!0},isCurrentStep:{type:Boolean,required:!1,default:!1}},data(){return{collapsed:!0}},computed:{label(){return this.item.label},contents(){return this.item.contents},route(){return this.item.route},group(){return this.$store.getters["groups/currentItemOrNew"]},isStep(){return this.item.sections},hasManySections(){return this.item.sections.length>0}},watch:{isCurrentStep:{immediate:!0,handler:function(e){this.collapsible&&(this.collapsed=!0),e&&(this.collapsed=!1)}}},methods:{collapse(){this.collapsed=!0},expand(){this.collapsed=!1},toggleContents(){this.collapsed=!this.collapsed,this.goToItem()},goToItem(){location.href="#",location.href=`#${this.item.name}`}}};const tt=(0,me.Z)(et,[["render",Je],["__scopeId","data-v-4e81ba11"]]);var it=tt,ot={components:{MenuItem:it},props:{application:{required:!0,type:Object},isCollapsed:{required:!1,type:Boolean,default:!1}},data(){return{}},computed:{group(){return this.$store.getters["groups/currentItemOrNew"]}},methods:{isCurrentStep(e){return e.name==this.application.getCurrentStep(this.group).name}}};const at=(0,me.Z)(ot,[["render",Ye],["__scopeId","data-v-4515a926"]]);var rt=at,st=i(7506),nt={name:"GroupApplication",components:{ApplicationGcep:$e,ApplicationVcep:ze,ApplicationMenu:rt},props:{uuid:{type:String,required:!0}},data(){return{showDocumentation:!1,showModal:!1,showApplicationToc:!0,lastSavedAt:new Date,saving:!1}},watch:{$route:function(){this.showModal=!!this.$route.meta.showModal&&Boolean(this.$route.meta.showModal)},uuid:{immediate:!0,handler:async function(e){await this.$store.dispatch("groups/find",e).then((()=>{this.$store.commit("groups/setCurrentItemIndexByUuid",this.uuid)})),await this.$store.dispatch("groups/getSubmissions",this.group)}}},computed:{applicationComponent(){return this.group&&this.group.isVcep()?ze:this.group&&this.group.isGcep()?$e:null},group(){const e=this.$store.getters["groups/currentItem"]||new st.Z;return e||new st.Z},application(){return this.group.isVcep()?be.k7:be.UX}},methods:{hideModal(){this.$router.replace({name:"GroupApplication",params:{uuid:this.uuid}})},handleModalClosed(e){this.clearModalForm(e),this.$router.push({name:"GroupApplication",params:{uuid:this.uuid}})},clearModalForm(){"function"===typeof this.$refs.modalView.clearForm&&this.$refs.modalView.clearForm()},updateLastSavedAt(){this.saving=!1,this.lastSavedAt=new Date}},beforeUnmount(){this.$store.commit("groups/clearCurrentItem")},beforeRouteLeave(){if(this.$refs.application.applicationIsDirty()){const e=window.confirm("You have unsaved changes. If you continue your changes may be lost.");if(!e)return!1}}};const pt=(0,me.Z)(nt,[["render",S],["__scopeId","data-v-6c06cdc4"]]);var lt=pt}}]);
//# sourceMappingURL=group-application.0f6c16b6.js.map