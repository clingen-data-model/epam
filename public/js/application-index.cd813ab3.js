"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[140,471],{2790:function(e,t,l){l.d(t,{Z:function(){return i}});l(6699);var a=l(2119),n=l(6252);function i(e=null){const t=(0,a.tv)(),l=(0,a.yj)();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});const i=(0,n.Fl)({immediate:!0,get(){return Object.keys(l.query).includes("sort-field")?{field:l.query["sort-field"],desc:Boolean(parseInt(l.query["sort-desc"]))}:e},set(e){const a={"sort-field":e.field,"sort-desc":e.desc?1:0},n={...l.query,...a};t.replace({path:l.path,query:n})}}),s=(0,n.Fl)({set(e){let a=l.query,n=l.path,i={...a};e?i={...a,filter:e}:delete i.filter,t.replace({path:n,query:i})},get(){return l.query.filter},immediate:!0});return{sort:i,filter:s}}},8712:function(e,t,l){l.d(t,{Z:function(){return x}});var a=l(6252),n=l(9963),i=l(3577);const s={class:"sm:flex justify-between"},r={class:"mb-1 sm:flex space-x-2"},o={class:"block"},p=(0,a.Uk)(" Filter: "),d={class:"block"},u=(0,a.Uk)(" Waiting on: "),c=(0,a._)("option",{value:null},"Any",-1),m=["value"],_=["href"],h=["innerHTML"],w={class:"list-disc pl-6 text-sm"},g=["innerHTML"];function b(e,t,l,b,f,y){const v=(0,a.up)("checkbox"),A=(0,a.up)("popper"),D=(0,a.up)("data-table");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",s,[(0,a._)("div",r,[(0,a._)("label",o,[p,(0,a.wy)((0,a._)("input",{type:"text",class:"sm","onUpdate:modelValue":t[0]||(t[0]=e=>b.filter=e),placeholder:"filter"},null,512),[[n.nr,b.filter]])]),(0,a._)("label",d,[u,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>f.waitingOn=e),class:"sm"},[c,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.assignees,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.id,value:e.id},(0,i.zw)(e.name),9,m)))),128))],512),[[n.bM,f.waitingOn]])]),(0,a.Wm)(v,{modelValue:y.showCompleted,"onUpdate:modelValue":t[2]||(t[2]=e=>y.showCompleted=e),label:"Show completed"},null,8,["modelValue"])]),(0,a._)("div",null,[(0,a._)("button",{class:(0,i.C_)(["btn btn-xs",{blue:0==y.showAllInfo}]),onClick:t[3]||(t[3]=e=>y.showAllInfo=0)},"Summary",2),(0,a._)("button",{class:(0,i.C_)(["btn btn-xs",{blue:1==y.showAllInfo}]),onClick:t[4]||(t[4]=e=>y.showAllInfo=1)},"All Info",2)])]),(0,a.Wm)(D,{data:y.filteredData,fields:y.selectedFields,"filter-term":b.filter,"row-click-handler":y.goToApplication,"row-class":"cursor-pointer",sort:b.sort,"onUpdate:sort":t[5]||(t[5]=e=>b.sort=e),style:(0,i.j5)(y.remainingHeight),class:"overflow-auto",ref:"table"},{"cell-contacts":(0,a.w5)((({item:e})=>[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.group.members,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id},[(0,a._)("small",null,[(0,a._)("a",{href:`mailto:${e.person.email}`,class:"text-blue-500"},(0,i.zw)(e.person.name),9,_)])])))),128))])])),"cell-latest_log_entry":(0,a.w5)((({item:t})=>[(0,a.Wm)(A,{hover:"",arrow:"",placement:"right"},{content:(0,a.w5)((()=>[(0,a._)("div",{innerHTML:t.group.latest_log_entry.description},null,8,h)])),default:(0,a.w5)((()=>[(0,a.Uk)(" "+(0,i.zw)(e.formatDate(t.group.latest_log_entry.created_at)),1)])),_:2},1024)])),"cell-next_actions":(0,a.w5)((({item:e})=>[(0,a.Wm)(A,{hover:"",arrow:"",placement:"left"},{content:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.assignees.filter((t=>e.pendingActionsByAssignee[t.id].length>0)),(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id,class:"whitespace-normal max-w-80"},[(0,a._)("h4",null,(0,i.zw)(t.short_name)+":",1),(0,a._)("ul",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pendingActionsByAssignee[t.id],(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id,innerHTML:e.entry,class:"w-76 whitespace-normal"},null,8,g)))),128))])])))),128))])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.assignees.filter((t=>e.pendingActionsByAssignee[t.id].length>0)),(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id},[(0,a._)("span",null,[(0,a.Uk)((0,i.zw)(t.short_name)+": ",1),(0,a._)("strong",null,(0,i.zw)(e.pendingActionsByAssignee[t.id].length),1)])])))),128))])),_:2},1024)])),_:1},8,["data","fields","filter-term","row-click-handler","sort","style"])])}l(6699);var f=l(3907),y=l(5699),v=l(2790),A=l(3823),D={components:{},props:{epTypeId:{type:Number,default:null}},data(){return{fields:[{name:"id",label:"ID",type:Number,sortable:!0},{name:"full_name",label:"Name",type:String,sortable:!0},{name:"group.parent.name",label:"CDWG",type:String,sortable:!0,resolveValue(e){return e.group&&e.group.parent?e.group.parent.name:""}},{name:"current_step",label:"Current Step",type:Number,sortable:!0,resolveValue(e){return e.isCompleted?"Completed":e.current_step},resolveSort(e){return e.isCompleted?5:e.current_step}},{name:"latest_submission_date",label:"Last Submitted",type:Date,sortable:!0,resolveValue(e){return e.group.latest_submission?(0,y.p6)(e.group.latest_submission.created_at):null}},{name:"latest_submision.status",label:"Submission Status",type:String,sortable:!0,resolveValue(e){return e.group.latest_submission?e.group.latest_submission.status.name:null}},{name:"latest_log_entry",label:"Last Activity",type:Date,sortable:!0,resolveSort(e){return e&&e.group&&e.group.latest_log_entry?(0,y.p6)(e.group.latest_log_entry.created_at):null}},{name:"next_actions",label:"Next Actions",type:String,sortable:!1,class:["min-w-28","max-w-xs","truncate"]}],allInfoFields:[{name:"contacts",label:"Contacts",type:Array,sortable:!1,class:["min-w-40"],step:1},{name:"step_1_received_date",label:2==this.epTypeId?"Step 1 Received":"Application Received",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"step_1_approval_date",label:2==this.epTypeId?"Step 1 Approved":"Application Approved",type:Date,sortable:!0,class:["min-w-28"],step:1},{name:"step_2_approval_date",label:"Step 2 Approved",type:Date,sortable:!0,class:["min-w-28"],step:2},{name:"step_3_approval_date",label:"Step 3 Approved",type:Date,sortable:!0,class:["min-w-28"],step:3},{name:"step_4_received_date",label:"Step 4 Received",type:Date,sortable:!0,class:["min-w-28"],step:4},{name:"step_4_approval_date",label:"Step 4 Approved",type:Date,sortable:!0,class:["min-w-28"],step:4}],waitingOn:null,showDeleted:!1}},computed:{...(0,f.Se)({applications:"applications/all"}),filteredData(){let e=this.applications.filter((e=>!this.epTypeId||e.expert_panel_type_id==this.epTypeId)).filter((e=>!!this.showCompleted||null==e.date_completed));return this.waitingOn&&(e=e.filter((e=>e.pendingActionsByAssignee[this.waitingOn].length>0))),this.showDeleted||(e=e.filter((e=>null===e.deleted_at))),e},showCompleted:{set(e){let t=this.$route.query,l=this.$route.path,a={...t};e?a={...t,"show-completed":1}:delete a["show-completed"],this.$router.replace({path:l,query:a})},get(){return Boolean(parseInt(this.$route.query["show-completed"]))},immediate:!0},selectedFields(){if(1==this.showAllInfo){const e=2==this.epTypeId?[1,2,3,4]:[1],t=this.allInfoFields.filter((t=>e.includes(t.step)));return[...this.fields,...t]}return this.fields},showAllInfo:{immediate:!0,get(){return Object.keys(this.$route.query).includes("showAllInfo")?this.$route.query.showAllInfo:0},set(e){const t={...this.$route.query};t.showAllInfo=e,this.$router.replace({path:this.$route.path,query:t})}},remainingHeight(){return{height:"calc(100vh - 220px)"}},assignees(){return Object.values(A.nextActions.assignees)}},methods:{getApplications(){const e={},t={expert_panel_type_id:this.epTypeId};Object.keys(t).length>0&&(e.where=t),this.showDeleted&&(e.showDeleted=1),this.$store.dispatch("applications/getApplications",e)},goToApplication(e){e.deleted_at?alert("The application for "+e.name+" has been deleted.  Details cannot be viewed."):this.$router.push({name:"ApplicationDetail",params:{uuid:e.group.uuid}})}},mounted(){this.getApplications()},setup(){const{sort:e,filter:t}=(0,v.Z)({field:"full_name",desc:!1});return{sort:e,filter:t}}},k=l(3744);const I=(0,k.Z)(D,[["render",b]]);var x=I},4611:function(e,t,l){l.r(t),l.d(t,{default:function(){return g}});var a=l(6252),n=l(9963),i=l(3577);const s=(0,a._)("h2",{class:"pb-2 border-b mb-4"},"Initiate Application",-1),r=(0,a._)("option",{value:null},"Select...",-1),o=["value"],p=["for"],d=["value","id"];function u(e,t,l,u,c,m){const _=(0,a.up)("input-row"),h=(0,a.up)("checkbox"),w=(0,a.up)("button-row"),g=(0,a.up)("form-container");return(0,a.wg)(),(0,a.j4)(g,{onKeydown:(0,n.D2)(m.save,["enter"])},{default:(0,a.w5)((()=>[s,(0,a.Wm)(_,{label:"Working Name",errors:c.errors.working_name,type:"text",modelValue:this.app.working_name,"onUpdate:modelValue":t[0]||(t[0]=e=>this.app.working_name=e),placeholder:"A recognizable name"},null,8,["errors","modelValue"]),(0,a.Wm)(_,{label:"CDWG",errors:c.errors.cdwg_id},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>c.app.cdwg_id=e)},[r,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cdwgs,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.id,value:e.id},(0,i.zw)(e.name),9,o)))),128))],512),[[n.bM,c.app.cdwg_id]])])),_:1},8,["errors"]),(0,a.Wm)(_,{label:"EP Type",errors:c.errors.expert_panel_type_id},{default:(0,a.w5)((()=>[(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.epTypes,(e=>((0,a.wg)(),(0,a.iD)("label",{for:`ep-${e.id}-radio`,key:e.id},[(0,a.wy)((0,a._)("input",{type:"radio",value:e.id,"onUpdate:modelValue":t[2]||(t[2]=e=>c.app.expert_panel_type_id=e),id:`ep-${e.id}-radio`},null,8,d),[[n.G2,c.app.expert_panel_type_id]]),(0,a._)("div",null,(0,i.zw)(e.name),1)],8,p)))),128))])])),_:1},8,["errors"]),(0,a.Wm)(_,{errors:c.errors.date_initiated},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("div",null,[(0,a.Wm)(h,{modelValue:c.showInitiationDate,"onUpdate:modelValue":t[3]||(t[3]=e=>c.showInitiationDate=e),id:"show-initiation-checkbox",label:"Backdate this initiation"},null,8,["modelValue"])]),(0,a.wy)((0,a.Wm)(_,{type:"date",label:"Initiation Date",modelValue:c.app.date_initiated,"onUpdate:modelValue":t[4]||(t[4]=e=>c.app.date_initiated=e)},null,8,["modelValue"]),[[n.F8,c.showInitiationDate]])])])),_:1},8,["errors"]),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a._)("button",{class:"btn",onClick:t[5]||(t[5]=(...e)=>m.cancel&&m.cancel(...e))},"Cancel"),(0,a._)("button",{class:"btn blue",onClick:t[6]||(t[6]=(...e)=>m.save&&m.save(...e))},"Initiate Application")])),_:1})])),_:1},8,["onKeydown"])}var c=l(3907),m=l(5699),_={name:"CreateApplicationForm",props:{},emits:["canceled","saved"],data(){return{visible:!1,showInitiationDate:!1,app:{working_name:null,cdwg_id:null,expert_panel_type_id:null,date_initiated:(0,m.p6)(new Date)},epTypes:[{name:"GCEP",id:1},{name:"VCEP",id:2}],errors:{}}},computed:{...(0,c.Se)({cdwgs:"cdwgs/all"}),hasErrors(){return Object.keys(this.errors).length>0}},watch:{"app.working_name":function(){this.clearErrors("working_name")},"app.cdwg_id":function(){this.clearErrors("cdwg_id")},"app.expert_panel_type_id":function(){this.clearErrors("expert_panel_type_id")}},methods:{cancel(){this.initForm(),this.$emit("canceled")},async save(){try{await this.$store.dispatch("applications/initiateApplication",this.app),this.$emit("saved",this.app)}catch(e){if(e.response&&422==e.response.status&&e.response.data.errors)return void(this.errors=e.response.data.errors);throw e}},initForm(){this.initErrors(),this.initAppData()},initAppData(){this.app={working_name:null,cdwg_id:null,expert_panel_type_id:null,date_initiated:(0,m.p6)(new Date)}},clearErrors(e){e?delete this.errors[e]:this.initErrors()},initErrors(){this.errors={}}}},h=l(3744);const w=(0,h.Z)(_,[["render",u]]);var g=w},469:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var a=l(6252);const n={class:"home"},i={class:"mb-2 mt-4"},s={class:"tabs"},r=(0,a.Uk)("VCEPS"),o=(0,a.Uk)("GCEPS"),p={class:"p-4 border rounded-tr-lg rounded-b-lg bg-white"};function d(e,t,l,d,u,c){const m=(0,a.up)("router-link"),_=(0,a.up)("router-view"),h=(0,a.up)("create-application-form"),w=(0,a.up)("modal-dialog");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("button",{onClick:t[0]||(t[0]=e=>u.showModal=!0),class:"btn blue"},"Initiate Application"),(0,a._)("div",i,[(0,a._)("div",s,[(0,a.Wm)(m,{to:{name:"vceps"},class:"tab"},{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(m,{to:{name:"gceps"},class:"tab"},{default:(0,a.w5)((()=>[o])),_:1})]),(0,a._)("div",p,[(0,a.Wm)(_)])]),(0,a.Wm)(w,{modelValue:u.showModal,"onUpdate:modelValue":t[2]||(t[2]=e=>u.showModal=e),size:"md",onClosed:t[3]||(t[3]=t=>e.$refs.initiateform.initForm())},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{name:"modal",onCanceled:t[1]||(t[1]=e=>u.showModal=!1),onSaved:c.handleApplicationInitiated,ref:"initiateform"},null,8,["onSaved"])])),_:1},8,["modelValue"])])}var u=l(4611),c={name:"ApplicationsIndex",components:{CreateApplicationForm:u["default"]},data(){return{showModal:!1}},computed:{},methods:{handleApplicationInitiated(e){this.showModal=!1,this.$router.push({name:"AddMemberToApplication",params:{uuid:e.uuid}})}}},m=l(3744);const _=(0,m.Z)(c,[["render",d],["__scopeId","data-v-2ac81c59"]]);var h=_},9873:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var a=l(6252);function n(e,t,l,n,i,s){const r=(0,a.up)("applications-table");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{"ep-type-id":1})])}var i=l(8712),s={components:{ApplicationsTable:i.Z},props:{},data(){return{}}},r=l(3744);const o=(0,r.Z)(s,[["render",n]]);var p=o},7355:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var a=l(6252);function n(e,t,l,n,i,s){const r=(0,a.up)("applications-table");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{"ep-type-id":2})])}var i=l(8712),s={components:{ApplicationsTable:i.Z}},r=l(3744);const o=(0,r.Z)(s,[["render",n]]);var p=o}}]);
//# sourceMappingURL=application-index.cd813ab3.js.map