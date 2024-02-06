"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[700],{2790:function(e,t,o){o.d(t,{Z:function(){return n}});o(6699);var l=o(2119),i=o(6252);function n(e=null){const t=(0,l.tv)(),o=(0,l.yj)();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});const n=(0,i.Fl)({immediate:!0,get(){return Object.keys(o.query).includes("sort-field")?{field:o.query["sort-field"],desc:Boolean(parseInt(o.query["sort-desc"]))}:e},set(e){const l={"sort-field":e.field,"sort-desc":e.desc?1:0},i={...o.query,...l};t.replace({path:o.path,query:i})}}),r=(0,i.Fl)({set(e){let l=o.query,i=o.path,n={...l};e?n={...l,filter:e}:delete n.filter,t.replace({path:i,query:n})},get(){return o.query.filter},immediate:!0});return{sort:n,filter:r}}},5054:function(e,t,o){o.r(t),o.d(t,{default:function(){return R}});var l=o(6252),i=o(9963),n=o(3577);const r=(0,l._)("h1",null,"Credentials",-1),a=(0,l.Uk)(" Filter: "),s=(0,l._)("button",{class:"btn btn-xs"},"…",-1),d=(0,l.Uk)("Edit"),u=(0,l.Uk)("Approve"),m=(0,l.Uk)("Merge into another"),c=(0,l.Uk)("Delete"),h={key:0},p=(0,l._)("p",null,"You cannot delete an credential people are using.",-1),w=(0,l._)("p",null,"Either edit this this credential or merge it into another.",-1),b=[p,w],g={key:1};function v(e,t,o,p,w,v){const f=(0,l.up)("dropdown-item"),I=(0,l.up)("dropdown-menu"),y=(0,l.up)("data-table"),C=(0,l.up)("CredentialsApprovalForm"),V=(0,l.up)("modal-dialog"),k=(0,l.up)("CredentialUpdateForm"),D=(0,l.up)("CredentialMergeForm"),U=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[r,(0,l.Wm)(y,{paginated:"",data:v.filteredItems,fields:w.fields,sort:p.sort,"onUpdate:sort":t[1]||(t[1]=e=>p.sort=e),"reset-page-on-data-change":!1},{header:(0,l.w5)((()=>[(0,l._)("label",null,[a,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>p.filter=e)},null,512),[[i.nr,p.filter]])])])),"cell-actions":(0,l.w5)((({item:e})=>[(0,l.Wm)(I,{"hide-cheveron":""},{label:(0,l.w5)((()=>[s])),default:(0,l.w5)((()=>[(0,l.Wm)(f,{onClick:t=>v.edit(e)},{default:(0,l.w5)((()=>[d])),_:2},1032,["onClick"]),e.approved?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(f,{key:0,onClick:t=>v.initApprove(e)},{default:(0,l.w5)((()=>[u])),_:2},1032,["onClick"])),(0,l.Wm)(f,{onClick:t=>v.initMerge(e)},{default:(0,l.w5)((()=>[m])),_:2},1032,["onClick"]),(0,l.Wm)(f,{onClick:t=>v.initDelete(e)},{default:(0,l.w5)((()=>[c])),_:2},1032,["onClick"])])),_:2},1024)])),_:1},8,["data","fields","sort"]),((0,l.wg)(),(0,l.j4)(l.lR,{to:"body"},[(0,l.Wm)(V,{modelValue:w.showApproveDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>w.showApproveDialog=e),title:`Approve ${w.currentItem.name}`},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{modelValue:w.currentItem,"onUpdate:modelValue":t[2]||(t[2]=e=>w.currentItem=e),onSaved:v.handleSaved,onCanceled:v.handleCancel},null,8,["modelValue","onSaved","onCanceled"])])),_:1},8,["modelValue","title"]),(0,l.Wm)(V,{modelValue:w.showEditDialog,"onUpdate:modelValue":t[5]||(t[5]=e=>w.showEditDialog=e),title:`Edit ${w.currentItem.name}`},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{modelValue:w.currentItem,"onUpdate:modelValue":t[4]||(t[4]=e=>w.currentItem=e),onSaved:v.handleSaved,onCanceled:v.handleCancel},null,8,["modelValue","onSaved","onCanceled"])])),_:1},8,["modelValue","title"]),(0,l.Wm)(V,{modelValue:w.showMergeDialog,"onUpdate:modelValue":t[7]||(t[7]=e=>w.showMergeDialog=e),title:"Merge Credentials"},{default:(0,l.w5)((()=>[w.currentItem.id?((0,l.wg)(),(0,l.j4)(D,{key:0,obsoletes:w.currentItem,credentials:v.items,onSaved:v.handleMerge,onCanceled:t[6]||(t[6]=e=>w.showMergeDialog=!1)},null,8,["obsoletes","credentials","onSaved"])):(0,l.kq)("",!0)])),_:1},8,["modelValue"]),(0,l.Wm)(V,{modelValue:w.showDeleteConfirmation,"onUpdate:modelValue":t[9]||(t[9]=e=>w.showDeleteConfirmation=e),title:"Delete Credential",size:"sm"},{default:(0,l.w5)((()=>[w.currentItem.people_count>0?((0,l.wg)(),(0,l.iD)("div",h,b)):((0,l.wg)(),(0,l.iD)("div",g,[(0,l.Uk)(" You are about to delete the "+(0,n.zw)(w.currentItem.name)+" ",1),(0,l.Wm)(U,{"submit-text":"Delete",onSubmitted:v.deleteItem,onCanceled:t[8]||(t[8]=e=>w.showDeleteConfirmation=!1)},null,8,["onSubmitted"])]))])),_:1},8,["modelValue"])]))])}var f=o(2790);function I(e,t,o,i,n,r){const a=(0,l.up)("input-row"),s=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(a,{label:"Name",modelValue:i.workingCopy.name,"onUpdate:modelValue":t[0]||(t[0]=e=>i.workingCopy.name=e),errors:n.errors.name},null,8,["modelValue","errors"]),(0,l.Wm)(s,{"submit-text":"Save",onSubmitted:r.save,onCancel:r.cancel},null,8,["onSubmitted","onCancel"])])}var y=o(1076),C=o(9028),V={name:"InstitutionCreateForm",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","saved","canceled"],data(){return{errors:{}}},methods:{async save(){try{this.initErrors(),console.log("save!");const e=await this.$store.dispatch("credentials/update",this.workingCopy).then((e=>e.data));console.log(e),this.$emit("update:modelValue",e),this.$emit("saved",e)}catch(e){(0,C.z1)(e)&&(this.errors=e.response.data.errors)}},cancel(){this.$emit("canceled"),this.initInstitution()},initErrors(){this.errors={}}},setup(e,t){const{workingCopy:o}=(0,y.kM)(e,t);return{workingCopy:o}}},k=o(3744);const D=(0,k.Z)(V,[["render",I]]);var U=D;const _=(0,l.Uk)(" Are you sure you want to approve this institution? ");function W(e,t,o,i,r,a){const s=(0,l.up)("dictionary-row"),d=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[_,(0,l.Wm)(s,{label:"Name"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(o.modelValue.name),1)])),_:1}),(0,l.Wm)(d,{"submit-text":"Approve",onSubmitted:a.approve,onCancel:a.cancelApproval},null,8,["onSubmitted","onCancel"])])}var S={name:"ComponentName",props:{modelValue:{type:Object,required:!0}},emits:["saved","canceled","update:modelValue"],methods:{async approve(){const e=await C.hi.put(`/api/credentials/${this.modelValue.id}`,{name:this.modelValue.name,approved:1}).then((e=>e.data));this.$emit("update:modelValue",e),this.$emit("saved",e)},cancelApproval(){this.$emit("canceled")}}};const M=(0,k.Z)(S,[["render",W]]);var A=M;const $=(0,l._)("p",{class:"mb-8"},[(0,l.Uk)(" Merging credentials will do the following: "),(0,l._)("ol",{class:"list-decimal ml-6"},[(0,l._)("li",null,"Transfer all people with the obsolete credential to the authoritiative credential."),(0,l._)("li",null,"Delete the obsolete credential.")])],-1),x=(0,l.Uk)(" Merge "),E=(0,l.Uk)("(Obsolete credential that will be deleted)"),O=(0,l.Uk)("Into "),F=(0,l.Uk)("(Authoritative credential)");function q(e,t,o,i,n,r){const a=(0,l.up)("note"),s=(0,l.up)("SearchSelect"),d=(0,l.up)("input-row"),u=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[$,(0,l.Wm)(d,{label:"Merge",vertical:""},{label:(0,l.w5)((()=>[x,(0,l.Wm)(a,{class:"inline-block"},{default:(0,l.w5)((()=>[E])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:n.selectedObsolete,"onUpdate:modelValue":t[0]||(t[0]=e=>n.selectedObsolete=e),options:o.credentials,showOptionsOnFocus:!0,keyBy:"id"},null,8,["modelValue","options"])])),_:1}),(0,l.Wm)(d,{label:"Into",errors:n.errors.authority_id,vertical:""},{label:(0,l.w5)((()=>[O,(0,l.Wm)(a,{class:"inline"},{default:(0,l.w5)((()=>[F])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:n.selectedAuthority,"onUpdate:modelValue":t[1]||(t[1]=e=>n.selectedAuthority=e),options:o.credentials,showOptionsOnFocus:!0,keyBy:"id"},null,8,["modelValue","options"])])),_:1},8,["errors"]),(0,l.Wm)(u,{"submit-text":"Merge",onSubmitted:r.commitMerge,onCanceled:r.cancelMerge},null,8,["onSubmitted","onCanceled"])])}var z=o(8612),j={name:"CredentialMergeForm",components:{SearchSelect:z["default"]},props:{obsoletes:{type:Array,default:()=>[]},credentials:{type:Array,default:()=>[]}},emits:["saved","canceled"],data(){return{selectedAuthority:null,selectedObsolete:null,errors:{}}},watch:{authority:{immediate:!0,handler(e){e&&(this.authorityId=e.id)}},obsoletes:{immediate:!0,deep:!0,handler(e){this.handleObsoleteUpdate(e)}}},methods:{handleObsoleteUpdate(e){this.selectedObsolete=e},async commitMerge(){if(console.log("committing merge",this.selectedAuthority,this.selectedObsolete),this.selectedAuthority&&this.selectedObsolete)try{this.errors={},await this.$store.dispatch("credentials/merge",{authority:this.selectedAuthority,obsolete:this.selectedObsolete}),this.selectedAuthority=null,this.selectedObsolete=null,this.$emit("saved")}catch(e){(0,C.z1)(e)&&(this.errors=e.response.data.errors)}},cancelMerge(){this.authorityId=null,this.obsoleteIds=[],this.$emit("canceled")}}};const Z=(0,k.Z)(j,[["render",q]]);var N=Z,Y={name:"CredentialList",components:{CredentialUpdateForm:U,CredentialsApprovalForm:A,CredentialMergeForm:N},data(){return{fields:[{name:"id",label:"ID",type:Number,sortable:!0,class:"w-12"},{name:"name",type:String,sortable:!0},{name:"people_count",label:"# People",type:Number,sortable:!0},{name:"approved",type:Boolean,sortable:!0,resolveValue(e){return e.approved?"Approved":null},resolveSort(e){return e.approved}},{name:"actions",label:"",sortable:!1}],currentItem:{},showApproveDialog:!1,showEditDialog:!1,showMergeDialog:!1,showDeleteConfirmation:!1}},computed:{items(){return this.$store.getters["credentials/items"]},filteredItems(){if(!this.filter)return this.items;const e=new RegExp(`.*${this.filter}.*`,"i");return this.items.filter((t=>t.name.match(e)||t.abbreviation&&t.abbreviation.match(e)||t.country&&t.country.name.match(e)))},currentIndex(){return this.items.findIndex((e=>e.id==this.currentItem.id))}},methods:{edit(e){this.showEditDialog=!0,this.currentItem=e},initApprove(e){this.showApproveDialog=!0,this.currentItem=e},initMerge(e){this.currentItem=e,this.showMergeDialog=!0},handleSaved(){this.showApproveDialog=!1,this.showEditDialog=!1,this.updateItem(),this.$store.commit("pushSuccess","Credential saved.")},handleCancel(){this.showApproveDialog=!1,this.showEditDialog=!1,this.updateItem(),this.currentItem={country:{}}},handleMerge(){this.items.splice(this.currentIndex,1),this.showMergeDialog=!1,this.$store.commit("pushSuccess","Credential merged."),this.currentItem={}},updateItem(){this.currentItem.id&&this.currentIndex>-1&&(this.items[this.currentIndex]={...this.currentItem})},initDelete(e){this.showDeleteConfirmation=!0,this.currentItem=e},async deleteItem(){this.currentItem.id&&(this.currentItem.people_count>0&&alert("You cannot delete an credential because it is in use.  Please edit the credential or merge it into another."),await this.$store.dispatch("credentials/delete",this.currentItem),this.showDeleteConfirmation=!1,this.$store.commit("pushSuccess",`${this.currentItem.name} deleted.`))}},setup(){const{sort:e,filter:t}=(0,f.Z)({field:"name",desc:!1});return{sort:e,filter:t}},mounted(){this.$store.dispatch("credentials/getItems")}};const P=(0,k.Z)(Y,[["render",v]]);var R=P},9250:function(e,t,o){o.r(t),o.d(t,{default:function(){return R}});var l=o(6252),i=o(9963),n=o(3577);const r=(0,l._)("h1",null,"Institutions",-1),a=(0,l.Uk)(" Filter: "),s=(0,l._)("button",{class:"btn btn-xs"},"…",-1),d=(0,l.Uk)("Edit"),u=(0,l.Uk)("Approve"),m=(0,l.Uk)("Merge into another"),c=(0,l.Uk)("Delete"),h={key:0},p=(0,l._)("p",null,"You cannot delete an institution people are using.",-1),w=(0,l._)("p",null,"Either edit this this institution or merge it into another.",-1),b=[p,w],g={key:1};function v(e,t,o,p,w,v){const f=(0,l.up)("dropdown-item"),I=(0,l.up)("dropdown-menu"),y=(0,l.up)("data-table"),C=(0,l.up)("institution-approval-form"),V=(0,l.up)("modal-dialog"),k=(0,l.up)("institution-update-form"),D=(0,l.up)("institution-merge-form"),U=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[r,(0,l.Wm)(y,{paginated:"",data:v.filteredItems,fields:w.fields,sort:p.sort,"onUpdate:sort":t[1]||(t[1]=e=>p.sort=e),"reset-page-on-data-change":!1},{header:(0,l.w5)((()=>[(0,l._)("label",null,[a,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>p.filter=e)},null,512),[[i.nr,p.filter]])])])),"cell-actions":(0,l.w5)((({item:e})=>[(0,l.Wm)(I,{"hide-cheveron":""},{label:(0,l.w5)((()=>[s])),default:(0,l.w5)((()=>[(0,l.Wm)(f,{onClick:t=>v.edit(e)},{default:(0,l.w5)((()=>[d])),_:2},1032,["onClick"]),(0,l.Wm)(f,{onClick:t=>v.initApprove(e)},{default:(0,l.w5)((()=>[u])),_:2},1032,["onClick"]),(0,l.Wm)(f,{onClick:t=>v.initMerge(e)},{default:(0,l.w5)((()=>[m])),_:2},1032,["onClick"]),(0,l.Wm)(f,{onClick:t=>v.initDelete(e)},{default:(0,l.w5)((()=>[c])),_:2},1032,["onClick"])])),_:2},1024)])),_:1},8,["data","fields","sort"]),((0,l.wg)(),(0,l.j4)(l.lR,{to:"body"},[(0,l.Wm)(V,{modelValue:w.showApproveDialog,"onUpdate:modelValue":t[3]||(t[3]=e=>w.showApproveDialog=e),title:`Approve ${w.currentItem.name}`},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{modelValue:w.currentItem,"onUpdate:modelValue":t[2]||(t[2]=e=>w.currentItem=e),onSaved:v.handleSaved,onCanceled:v.handleCancel},null,8,["modelValue","onSaved","onCanceled"])])),_:1},8,["modelValue","title"]),(0,l.Wm)(V,{modelValue:w.showEditDialog,"onUpdate:modelValue":t[5]||(t[5]=e=>w.showEditDialog=e),title:`Edit ${w.currentItem.name}`},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{modelValue:w.currentItem,"onUpdate:modelValue":t[4]||(t[4]=e=>w.currentItem=e),onSaved:v.handleSaved,onCanceled:v.handleCancel},null,8,["modelValue","onSaved","onCanceled"])])),_:1},8,["modelValue","title"]),(0,l.Wm)(V,{modelValue:w.showMergeDialog,"onUpdate:modelValue":t[7]||(t[7]=e=>w.showMergeDialog=e),title:"Merge Institutions"},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{obsoletes:[w.currentItem],onSaved:v.handleMerge,onCanceled:t[6]||(t[6]=e=>w.showMergeDialog=!1)},null,8,["obsoletes","onSaved"])])),_:1},8,["modelValue"]),(0,l.Wm)(V,{modelValue:w.showDeleteConfirmation,"onUpdate:modelValue":t[9]||(t[9]=e=>w.showDeleteConfirmation=e),title:"Delete Institution",size:"sm"},{default:(0,l.w5)((()=>[w.currentItem.people_count>0?((0,l.wg)(),(0,l.iD)("div",h,b)):((0,l.wg)(),(0,l.iD)("div",g,[(0,l.Uk)(" You are about to delete the "+(0,n.zw)(w.currentItem.name)+" ",1),(0,l.Wm)(U,{"submit-text":"Delete",onSubmitted:v.deleteItem,onCanceled:t[8]||(t[8]=e=>w.showDeleteConfirmation=!1)},null,8,["onSubmitted"])]))])),_:1},8,["modelValue"])]))])}var f=o(2790),I=o(8171);const y=(0,l.Uk)(" Are you sure you want to approve this institution? ");function C(e,t,o,i,r,a){const s=(0,l.up)("dictionary-row"),d=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[y,(0,l.Wm)(s,{label:"Name"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(o.modelValue.name),1)])),_:1}),(0,l.Wm)(s,{label:"Abbreviation"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(o.modelValue.abbreviation||"--"),1)])),_:1}),(0,l.Wm)(s,{label:"URL"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(o.modelValue.url||"--"),1)])),_:1}),(0,l.Wm)(s,{label:"Country"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(o.modelValue.country?o.modelValue.country.name:"--"),1)])),_:1}),(0,l.Wm)(s,{label:"Reportable"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(o.modelValue.reportable?"Yes":"No"),1)])),_:1}),(0,l.Wm)(d,{"submit-text":"Approve",onSubmitted:a.approve,onCancel:a.cancelApproval},null,8,["onSubmitted","onCancel"])])}var V={name:"ComponentName",props:{modelValue:{type:Object,required:!0}},emits:["saved","canceled","update:modelValue"],methods:{async approve(){const e=await(0,I.xp)(this.modelValue);this.$emit("update:modelValue",e),this.$emit("saved",e)},cancelApproval(){this.$emit("canceled")}}},k=o(3744);const D=(0,k.Z)(V,[["render",C]]);var U=D;function _(e,t,o,i,n,r){const a=(0,l.up)("data-form"),s=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(a,{fields:i.fields,errors:n.errors,modelValue:i.workingCopy,"onUpdate:modelValue":t[0]||(t[0]=e=>i.workingCopy=e)},null,8,["fields","errors","modelValue"]),(0,l.Wm)(s,{"submit-text":"Save",onSubmitted:r.save,onCancel:r.cancel},null,8,["onSubmitted","onCancel"])])}var W=o(1076),S=o(9028),M={name:"InstitutionCreateForm",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","saved","canceled"],data(){return{errors:{}}},methods:{async save(){try{this.initErrors();const e=await this.updateInstitution(this.workingCopy);this.$emit("update:modelValue",e),this.$emit("saved",e)}catch(e){(0,S.z1)(e)&&(this.errors=e.response.data.errors)}},cancel(){this.$emit("canceled"),this.initInstitution()},initErrors(){this.errors={}}},setup(e,t){const{workingCopy:o}=(0,W.kM)(e,t);return{fields:I.XU,getCountries:I.ox,countries:I.hW,updateInstitution:I.TK,workingCopy:o}},mounted(){this.getCountries()}};const A=(0,k.Z)(M,[["render",_]]);var $=A;const x=(0,l._)("p",{class:"mb-8"},[(0,l.Uk)(" Merging institutions will do the following: "),(0,l._)("ol",{class:"list-decimal ml-6"},[(0,l._)("li",null,"Transfer all people with the obsolete institution to the authoritiative institution."),(0,l._)("li",null,"Delete the obsolete institution.")])],-1),E=(0,l.Uk)(" Merge "),O=(0,l.Uk)("(Obsolete institution that will be deleted)"),F=(0,l.Uk)("Into "),q=(0,l.Uk)("(Authoritative institution)");function z(e,t,o,i,n,r){const a=(0,l.up)("note"),s=(0,l.up)("institution-search-select"),d=(0,l.up)("input-row"),u=(0,l.up)("button-row");return(0,l.wg)(),(0,l.iD)("div",null,[x,(0,l.Wm)(d,{label:"Merge",vertical:""},{label:(0,l.w5)((()=>[E,(0,l.Wm)(a,{class:"inline-block"},{default:(0,l.w5)((()=>[O])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(s,{"model-value":n.obsoleteIds,"onUpdate:modelValue":r.handleObsoleteUpdate,"allow-add":!1},null,8,["model-value","onUpdate:modelValue"])])),_:1}),(0,l.Wm)(d,{label:"Into",errors:n.errors.authority_id,vertical:""},{label:(0,l.w5)((()=>[F,(0,l.Wm)(a,{class:"inline"},{default:(0,l.w5)((()=>[q])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:n.authorityId,"onUpdate:modelValue":t[0]||(t[0]=e=>n.authorityId=e),"allow-add":!1},null,8,["modelValue"])])),_:1},8,["errors"]),(0,l.Wm)(u,{"submit-text":"Merge",onSubmitted:r.commitMerge,onCanceled:r.cancelMerge},null,8,["onSubmitted","onCanceled"])])}var j={name:"InstitutionMergeForm",props:{authority:{type:Object,required:!1},obsoletes:{type:Array,default:()=>[]}},emits:["saved","canceled"],data(){return{authorityId:null,obsoleteIds:[],errors:{}}},watch:{authority:{immediate:!0,handler(e){e&&(this.authorityId=e.id)}},obsoletes:{immediate:!0,deep:!0,handler(e){this.obsoleteIds=e.map((e=>e.id))}}},methods:{handleObsoleteUpdate(e){this.obsoleteIds=e?[e]:[]},async commitMerge(){try{this.errors={},await(0,I.EP)(this.authorityId,this.obsoleteIds),this.authorityId=null,this.obsoleteIds=[],this.$emit("saved")}catch(e){(0,S.z1)(e)&&(this.errors=e.response.data.errors)}},cancelMerge(){this.authorityId=null,this.obsoleteIds=[],this.$emit("canceled")}}};const Z=(0,k.Z)(j,[["render",z]]);var N=Z,Y={name:"InstitutionList",components:{InstitutionUpdateForm:$,InstitutionApprovalForm:U,InstitutionMergeForm:N},data(){return{items:[],fields:[{name:"id",label:"ID",type:Number,sortable:!0},{name:"name",type:String,sortable:!0},{name:"abbreviation",type:String,sortable:!0},{name:"country.name",label:"Country",type:String,sortable:!0},{name:"people_count",label:"# People",type:Number,sortable:!0},{name:"approved",type:Boolean,sortable:!0,resolveValue(e){return e.approved?"Approved":null},resolveSort(e){return e.approved}},{name:"actions",label:"",sortable:!1}],currentItem:{country:{}},showApproveDialog:!1,showEditDialog:!1,showMergeDialog:!1,showDeleteConfirmation:!1}},computed:{filteredItems(){if(!this.filter)return this.items;const e=new RegExp(`.*${this.filter}.*`,"i");return this.items.filter((t=>t.name.match(e)||t.abbreviation&&t.abbreviation.match(e)||t.country&&t.country.name.match(e)))},currentIndex(){return this.items.findIndex((e=>e.id==this.currentItem.id))}},methods:{edit(e){this.showEditDialog=!0,this.currentItem=e},initApprove(e){this.showApproveDialog=!0,this.currentItem=e},initMerge(e){this.currentItem=e,this.showMergeDialog=!0},async getInstitutions(){this.items=await(0,I.iE)()},handleSaved(){this.showApproveDialog=!1,this.showEditDialog=!1,this.updateItem(),this.currentItem={country:{}},this.$store.commit("pushSuccess","Institution saved.")},handleCancel(){this.showApproveDialog=!1,this.showEditDialog=!1,this.updateItem(),this.currentItem={country:{}}},handleMerge(){this.items.splice(this.currentIndex,1),this.showMergeDialog=!1,this.$store.commit("pushSuccess","Institution merged.")},updateItem(){this.currentItem.id&&this.currentIndex>-1&&(this.items[this.currentIndex]={...this.currentItem})},initDelete(e){this.showDeleteConfirmation=!0,this.currentItem=e},async deleteItem(){this.currentItem.id&&(this.currentItem.people_count>0&&alert("You cannot delete an institution because it is in use.  Pelaes edit the institution or merge it into another."),await(0,I.m4)(this.currentItem),this.items.splice(this.currentIndex,1),this.showDeleteConfirmation=!1,this.$store.commit("pushSuccess",`${this.currentItem.name} deleted.`))}},setup(){const{sort:e,filter:t}=(0,f.Z)({field:"name",desc:!1});return{sort:e,filter:t}},mounted(){this.getInstitutions()}};const P=(0,k.Z)(Y,[["render",v]]);var R=P}}]);
//# sourceMappingURL=institution-list.83a30972.js.map