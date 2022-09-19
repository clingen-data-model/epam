"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[859],{1202:function(e,o,t){t.d(o,{Rc:function(){return u},bA:function(){return d},oo:function(){return c},tV:function(){return m}});var s=t(2262),i=t(6252),l=t(812),n=t(8661),r=t(9298),a=t(4569),p=t(1350);const d=(0,s.iH)({countries:[],primaryOccupations:[],races:[],ethnicities:[],genders:[]}),c=(0,i.Fl)((()=>[{name:"first_name"},{name:"last_name"},{name:"email"},{name:"institution_id",label:"Institution",type:"component",component:{component:a["default"]}},{name:"credentials",type:"large-text",notes:"Include degrees and certifications such as PhD, MD, CGC, etc. Please include professional roles and associations in your biography."},{name:"biography",type:"large-text"},{name:"*",type:"component",label:"Address",component:{component:p["default"]}},{name:"country_id",label:"Country",type:"select",options:d.value.countries},{name:"phone"},{name:"timezone",label:"Timezone",type:"component",component:{component:r["default"]}}])),u=(0,i.Fl)((()=>[{name:"primary_occupation_id",label:"Primary Occupation",type:"select",options:d.value.primaryOccupations},{name:"primary_occupation_other",label:" ",type:"text",placeholder:"Details",show:e=>100==e.primary_occupation_id},{name:"race_id",label:"Race",type:"select",options:d.value.races},{name:"race_other",label:" ",type:"text",placeholder:"Details",show:e=>100==e.race_id},{name:"ethnicity_id",label:"Ethnicity",type:"select",options:d.value.ethnicities},{name:"enthnicity_other",label:" ",type:"text",placeholder:"Details",show:e=>100==e.enthnicity_id},{name:"gender_id",label:"Gender",type:"select",options:d.value.genders},{name:"gender_other",label:" ",type:"text",placeholder:"Details",show:e=>100==e.gender_id}])),m=()=>{Object.keys(d.value).forEach((e=>{l.Z.get(`/api/people/lookups/${(0,n.GL)(e)}`).then((o=>{d.value[e]=o.data.data.map((e=>({value:e.id,label:e.name})))})).catch((e=>console.error(e)))}))}},8397:function(e,o,t){t.d(o,{Z:function(){return w}});var s=t(6252),i=t(3577);const l={key:0},n={class:"block-title"},r=(0,s.Uk)(" COI response for "),a={key:0},p={class:"text-sm response-data"},d={class:"flex-0"},c=(0,s._)("p",{class:"mb-2"},"This is a legacy response.",-1),u={key:1,class:"response-data"};function m(e,o,t,m,h,f){const b=(0,s.up)("dictionary-row");return f.response?((0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("h2",n,[r,t.coi.data.first_name?((0,s.wg)(),(0,s.iD)("span",a,(0,i.zw)(e.titleCase(`${t.coi.data.first_name} ${t.coi.data.last_name}`))+" in ",1)):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,i.zw)(t.group.name),1)]),(0,s._)("div",p,[(0,s.Wm)(b,{label:"Name","label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.coi.data.first_name)+" "+(0,i.zw)(t.coi.data.last_name),1)])),_:1}),(0,s.Wm)(b,{label:"Email","label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.coi.data.email),1)])),_:1}),f.response.document_uuid?((0,s.wg)(),(0,s.j4)(b,{key:0,label:"COI File","label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s._)("div",d,[c,(0,s._)("button",{class:"btn btn-xs",onClick:o[0]||(o[0]=e=>f.downloadDocument(f.response.download_url.response))}," Download the COI. ")])])),_:1})):(0,s.kq)("",!0),f.response.document_uuid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",u,[(0,s.Wm)(b,{label:f.response.work_fee_lab.question,vertical:!0,"label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(f.getQuestionValue(f.response.work_fee_lab.response)),1)])),_:1},8,["label"]),(0,s.Wm)(b,{label:f.response.contributions_to_gd_in_ep.question,vertical:!0,"label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(f.getQuestionValue(f.response.contributions_to_gd_in_ep.response))+" ",1),1==f.response.contributions_to_gd_in_ep.response?((0,s.wg)(),(0,s.j4)(b,{key:0,label:f.response.contributions_to_genes.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(f.getQuestionValue(f.response.contributions_to_genes.response)),1)])),_:1},8,["label"])):(0,s.kq)("",!0)])),_:1},8,["label"]),(0,s.Wm)(b,{label:f.response.independent_efforts.question,vertical:!0,"label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(f.getQuestionValue(f.response.independent_efforts.response))+" ",1),[1,2].indexOf(f.response.independent_efforts.response)>-1?((0,s.wg)(),(0,s.j4)(b,{key:0,label:f.response.independent_efforts_details.question,vertical:!0,class:"pb-1 mb-1 ml-4 border-none","label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(f.getQuestionValue(f.response.independent_efforts_details.response)),1)])),_:1},8,["label"])):(0,s.kq)("",!0)])),_:1},8,["label"]),(0,s.Wm)(b,{label:f.response.coi.question,vertical:!0,class:"pb-1 mb-1","label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(f.getQuestionValue(f.response.coi.response))+" ",1),[1,2].indexOf(f.response.coi.response)>-1?((0,s.wg)(),(0,s.j4)(b,{key:0,label:f.response.coi_details.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(f.getQuestionValue(f.response.coi_details.response)),1)])),_:1},8,["label"])):(0,s.kq)("",!0)])),_:1},8,["label"])]))])])):(0,s.kq)("",!0)}var h={props:{coi:{type:Object,required:!0},group:{type:Object,required:!0}},data(){return{}},computed:{isLegacy(){return!1},response(){return this.coi.response_document}},methods:{getQuestionValue(e){return 1===e?"Yes":0===e?"No":2===e?"Unsure":e},downloadDocument(e){window.location=e}}},f=t(3744);const b=(0,f.Z)(h,[["render",m]]);var w=b},1971:function(e,o,t){t.d(o,{Z:function(){return Z}});var s=t(6252),i=t(3577);const l={key:0},n={key:0,class:"mb-4"},r={key:0},a=(0,s._)("h3",null,"You must complete a Conflict of Interest Disclosure for the following memberships:",-1),p={class:"my-2"},d={key:1},c=(0,s._)("h3",null,"Outstanding COI disclosures:",-1),u={key:1},m=(0,s._)("h3",null,"Completed & Current COI Disclosures",-1),h={key:0},f=["onClick"],b=(0,s.Uk)("   "),w=(0,s.Uk)("Update COI"),g={key:2},_=(0,s._)("h3",null,"Past COI Disclosures",-1),k={key:0},y=["onClick"],v=(0,s.Uk)("   "),C=(0,s.Uk)("Update COI"),P={key:3,class:"well"},D={key:1,class:"well"};function U(e,o,t,U,I,q){const z=(0,s.up)("router-link"),x=(0,s.up)("data-table"),W=(0,s.up)("coi-detail"),F=(0,s.up)("modal-dialog");return(0,s.wg)(),(0,s.iD)("div",null,[t.person.membershipsWithCoiRequirement.length>0?((0,s.wg)(),(0,s.iD)("div",l,[t.person.hasPendingCois?((0,s.wg)(),(0,s.iD)("div",n,[e.userIsPerson(t.person)?((0,s.wg)(),(0,s.iD)("div",r,[a,(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.person.membershipsWithPendingCois,(e=>((0,s.wg)(),(0,s.j4)(z,{key:e.id,class:"block my-0 font-bold p-2 border border-gray-300 first:rounded-t-lg last:rounded-b-lg cursor-pointer hover:bg-blue-50 link",to:U.getCoiRoute(e)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.group.expert_panel.display_name),1)])),_:2},1032,["to"])))),128))])])):((0,s.wg)(),(0,s.iD)("div",d,[c,(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.person.membershipsWithPendingCois,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"list-disc ml-6",key:e.id},(0,i.zw)(e.group.expert_panel.display_name),1)))),128))])]))])):(0,s.kq)("",!0),t.person.hasCompletedCois?((0,s.wg)(),(0,s.iD)("section",u,[m,(0,s.Wm)(x,{fields:U.fields,data:t.person.membershipsWithCompletedCois,sort:U.coiSort,"onUpdate:sort":o[0]||(o[0]=e=>U.coiSort=e),class:"my-2"},{"cell-actions":(0,s.w5)((({item:o})=>[o.coi_last_completed?((0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("button",{class:"btn btn-xs",onClick:e=>U.showCoiResponse(o)}," View response ",8,f),b,e.userIsPerson(t.person)?((0,s.wg)(),(0,s.j4)(z,{key:0,to:{name:"alt-coi",params:{code:o.group.expert_panel.coi_code,name:this.kebabCase(o.group.name)}},class:"btn btn-xs"},{default:(0,s.w5)((()=>[w])),_:2},1032,["to"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])),_:1},8,["fields","data","sort"])])):(0,s.kq)("",!0),t.person.hasOutdatedCois?((0,s.wg)(),(0,s.iD)("section",g,[_,(0,s.Wm)(x,{fields:U.fields,data:t.person.membershipsWithOutdatedCois,sort:U.coiSort,"onUpdate:sort":o[1]||(o[1]=e=>U.coiSort=e),class:"my-2"},{"cell-actions":(0,s.w5)((({item:o})=>[o.coi_last_completed?((0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("button",{class:"btn btn-xs",onClick:e=>U.showCoiResponse(o)},"View response",8,y),v,e.userIsPerson(t.person)?((0,s.wg)(),(0,s.j4)(z,{key:0,to:{name:"alt-coi",params:{code:o.group.expert_panel.coi_code,name:this.kebabCase(o.group.name)}},class:"btn btn-xs"},{default:(0,s.w5)((()=>[C])),_:2},1032,["to"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])),_:1},8,["fields","data","sort"])])):(0,s.kq)("",!0),t.person.hasPending||t.person.completedCois?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",P," None of your memberships require a conflict of interest disclosure "))])):((0,s.wg)(),(0,s.iD)("div",D,"You are not required to complete conflict of interest disclsoures.")),((0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s.Wm)(F,{modelValue:U.showResponseDialog,"onUpdate:modelValue":o[2]||(o[2]=e=>U.showResponseDialog=e),size:"xl"},{default:(0,s.w5)((()=>[U.currentCoi?((0,s.wg)(),(0,s.j4)(W,{key:0,coi:U.currentCoi,group:U.currentGroup},null,8,["coi","group"])):(0,s.kq)("",!0)])),_:1},8,["modelValue"])]))])}var I=t(2262),q=t(8397),z=t(284),x=t(8661),W=t(865),F={name:"CoiList",components:{CoiDetail:q.Z},props:{person:{type:z.Z,required:!0}},setup(e){const o=(0,s.Fl)((()=>e.person.membershipsWithCompletedCois.map((e=>e.cois.map((o=>(o.group=e.group,o))))).filter((e=>null!==e.completed_at)).flat())),t=(0,s.Fl)((()=>!!e.person.memberships&&e.person.memberships.filter((e=>!(null!==e.cois&&0!==e.cois.length||!e.group.expert_panel))))),i=[{name:"group.name",label:"Group",type:String,sortable:!0},{name:"coi_last_completed",label:"Completed",sortable:!1,type:Date}],l=(0,s.Fl)((()=>{const o={name:"actions",sortable:!1},t={name:"latest_coi.id",label:"ID",sortable:!0};let s=[...i];return(0,W.Fs)("people-manage")?[t,...s,o]:(0,W.eS)(e.person)?[...s,o]:i})),n=(0,I.iH)({field:"group.name",desc:!1}),r=e=>({name:"alt-coi",params:{name:(0,x.GL)(e.group.name),code:e.group.expert_panel.coi_code}}),a=(0,I.iH)(null),p=(0,I.iH)(null),d=(0,I.iH)(!1),c=e=>{const o=e.cois[e.cois.length-1];a.value=o,p.value=e.group,d.value=!0};return{needsCoi:t,cois:o,coiFields:i,coiSort:n,currentCoi:a,currentGroup:p,showResponseDialog:d,showCoiResponse:c,getCoiRoute:r,fields:l}}},j=t(3744);const V=(0,j.Z)(F,[["render",U]]);var Z=V},7201:function(e,o,t){t.d(o,{Z:function(){return z}});var s=t(6252),i=t(3577);const l=(0,s.Uk)(" Edit Info "),n={class:"flex space-x-4"},r={class:"mt-4 border-t pt-4"},a=(0,s._)("h3",null,"Profile",-1),p={class:"mt-4 border-t pt-4"},d={key:0},c={key:1},u={key:0},m=(0,s.Uk)(),h={key:1},f=(0,s.Uk)(),b={key:2},w={key:0,class:"mt-4 border-t pt-4"},g=(0,s._)("h3",null,"Metadata",-1),_={key:0},k={key:1,class:"pt-4 border-t mt-4"};function y(e,o,t,y,v,C){const P=(0,s.up)("edit-icon-button"),D=(0,s.up)("dictionary-row"),U=(0,s.up)("profile-form"),I=(0,s.up)("modal-dialog");return(0,s.wg)(),(0,s.iD)("div",null,[e.userIsPerson(t.person)||e.hasPermission("people-manage")?((0,s.wg)(),(0,s.j4)(P,{key:0,class:"btn btn-sm float-right",onClick:C.editPerson},{default:(0,s.w5)((()=>[l])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s._)("div",n,[(0,s._)("div",null,[((0,s.wg)(),(0,s.j4)((0,s.LL)(C.profilePhotoComponent),{person:t.person,style:{width:"120px"}},null,8,["person"]))]),(0,s._)("div",null,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(["name","email"],(o=>(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",key:o,label:e.titleCase(o)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person[o]),1)])),_:2},1032,["label"]))),64)),(0,s._)("section",r,[a,(0,s._)("div",null,[(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",label:"Institution"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.institutionName),1)])),_:1}),(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",label:"Credentials"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.credentials),1)])),_:1}),(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",label:"Biography"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.biography),1)])),_:1})])]),(0,s._)("section",p,[(0,s.Wm)(D,{class:"pb-2",label:"Timezone"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.timezone),1)])),_:1}),(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",label:"Address"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[t.person.street1?((0,s.wg)(),(0,s.iD)("div",d,(0,i.zw)(t.person.street1),1)):(0,s.kq)("",!0),t.person.street2?((0,s.wg)(),(0,s.iD)("div",c,(0,i.zw)(t.person.street2),1)):(0,s.kq)("",!0),(0,s._)("div",null,[t.person.city?((0,s.wg)(),(0,s.iD)("span",u,(0,i.zw)(t.person.city)+",",1)):(0,s.kq)("",!0),m,t.person.state?((0,s.wg)(),(0,s.iD)("span",h,(0,i.zw)(t.person.state),1)):(0,s.kq)("",!0),f,t.person.zip?((0,s.wg)(),(0,s.iD)("span",b,(0,i.zw)(t.person.zip),1)):(0,s.kq)("",!0)])])])),_:1}),(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",label:"Country"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.country?t.person.country.name:""),1)])),_:1}),(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",label:"Phone"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.phone),1)])),_:1})]),e.hasPermission("people-manage")?((0,s.wg)(),(0,s.iD)("section",w,[g,(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",label:"Uuid"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.uuid),1)])),_:1}),(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",label:"Numeric ID"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.id),1)])),_:1}),(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",label:"User ID"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.user_id||"Account not activated."),1)])),_:1}),t.person.invite?((0,s.wg)(),(0,s.j4)(D,{key:0,class:"pb-2","label-class":"w-40",label:"Invite Code"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.person.invite.code)+"   ",1),t.person.invite.redeemed_at?((0,s.wg)(),(0,s.iD)("span",_," redeemed on "+(0,i.zw)(e.formatDate(t.person.invite.redeemed_at)),1)):(0,s.kq)("",!0)])),_:1})):(0,s.kq)("",!0),((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(["created_at","updated_at"],(o=>(0,s.Wm)(D,{class:"pb-2","label-class":"w-40",key:o,label:o},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.formatDate(t.person[o])),1)])),_:2},1032,["label"]))),64)),e.hasPermission("people-manage")||e.userIsPerson(t.person)?((0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("button",{class:"btn btn-sm",onClick:o[0]||(o[0]=(...e)=>C.editPerson&&C.editPerson(...e))}," Edit Info ")])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])]),((0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s.Wm)(I,{modelValue:v.showEditForm,"onUpdate:modelValue":o[1]||(o[1]=e=>v.showEditForm=e),title:C.formDialogTitle},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{person:t.person,onSaved:C.hideEditForm,onCanceled:C.hideEditForm},null,8,["person","onSaved","onCanceled"])])),_:1},8,["modelValue","title"])]))])}var v=t(284),C=t(6465),P=t(6570),D=t(2998),U={name:"PersonProfile",components:{ProfileForm:C.Z,ProfilePicture:P.Z,ProfilePhotoForm:D.Z},props:{person:{type:v.Z,required:!0}},data(){return{showEditForm:!1}},computed:{formDialogTitle(){const e=this.userIsPerson(this.person)?"your":`${this.person.name}'s`;return`Edit ${e} information.`},profilePhotoComponent(){return this.hasPermission("people-manage")||this.userIsPerson(this.person)?D.Z:P.Z}},methods:{editPerson(){this.$store.commit("people/setCurrentItemIndex",this.person),this.showEditForm=!0},hideEditForm(){this.showEditForm=!1}}},I=t(3744);const q=(0,I.Z)(U,[["render",y]]);var z=q},6465:function(e,o,t){t.d(o,{Z:function(){return h}});var s=t(6252);const i=(0,s._)("h3",null,"Profile",-1),l={key:0,class:"float-right"},n=(0,s._)("hr",{class:"my-4"},null,-1);function r(e,o,t,r,a,p){const d=(0,s.up)("profile-photo-form"),c=(0,s.up)("data-form"),u=(0,s.up)("button-row");return(0,s.wg)(),(0,s.iD)("div",null,[i,e.hasPermission("people-manage")||e.userIsPerson(t.person)?((0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(d,{person:t.person,style:{width:"100px",height:"100px"}},null,8,["person"])])):(0,s.kq)("",!0),(0,s.Wm)(c,{fields:p.fields,modelValue:a.profile,"onUpdate:modelValue":o[0]||(o[0]=e=>a.profile=e),errors:a.errors},null,8,["fields","modelValue","errors"]),n,(0,s.Wm)(u,{onSubmitted:p.save,onCanceled:o[1]||(o[1]=e=>p.cancel()),"submit-text":"Save"},null,8,["onSubmitted"])])}t(6699);var a=t(9700),p=t(1202),d=t(2998),c={name:"ProfileForm",components:{ProfilePhotoForm:d.Z},props:{person:{type:Object,required:!0}},emits:["saved","canceled"],data(){return{errors:{},profile:{},page:"profile",institutionId:null,timezone:null}},computed:{fields(){let e=[...this.profileFields];return this.hasPermission("people-manage")||this.userIsPerson(this.person)||(e=e.filter((e=>["first_name","last_name","email","credentials"].includes(e.name)))),e},title(){return"profile"==this.page?"Please fill out your profile":"Please share your demographic information."}},watch:{person(){this.initProfile()}},methods:{initProfile(){this.profile={...this.person.attributes}},async save(){try{await this.$store.dispatch("people/updateProfile",{uuid:this.person.uuid,attributes:this.profile}).then((()=>{this.$store.dispatch("getCurrentUser",{force:!0}),this.$store.commit("pushSuccess","Your profile has been updated.")})),this.errors={},this.$emit("saved")}catch(e){(0,a.Z)(e)&&(this.errors=e.response.data.errors)}},cancel(){this.initProfile(),this.errors={},this.$emit("canceled")}},setup(){return(0,s.bv)((()=>(0,p.tV)())),{profileFields:p.oo,demographicFields:p.Rc,getLookups:p.tV,lookups:p.bA}},async mounted(){this.initProfile()}},u=t(3744);const m=(0,u.Z)(c,[["render",r]]);var h=m},2998:function(e,o,t){t.d(o,{Z:function(){return h}});var s=t(6252),i=t(3577);const l={class:"border border-gray-200 rounded-lg"},n=["src","alt"],r={key:1};function a(e,o,t,a,p,d){const c=(0,s.up)("ImageCropper"),u=(0,s.up)("input-row"),m=(0,s.up)("button-row"),h=(0,s.up)("modal-dialog");return(0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)({"cursor-wait":p.saving})},[(0,s._)("div",l,[(0,s._)("img",{src:d.srcPath,alt:d.altText,class:"rounded-t-lg w-full",onClick:o[0]||(o[0]=(...e)=>d.initUpload&&d.initUpload(...e))},null,8,n),(0,s._)("button",{onClick:o[1]||(o[1]=(...e)=>d.initUpload&&d.initUpload(...e)),class:"border border-t-0 bg-gray-200 block w-full"}," Edit ")]),((0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s.Wm)(h,{modelValue:p.showForm,"onUpdate:modelValue":o[3]||(o[3]=e=>p.showForm=e),title:"Upload a new profile photo"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{"image-src":d.srcPath,onCropped:d.setCroppedImageBlob},null,8,["image-src","onCropped"]),(0,s.Wm)(u,{hideLabel:"",errors:p.errors.profile_photo},{default:(0,s.w5)((()=>[(0,s._)("input",{type:"file",onChange:o[2]||(o[2]=(...e)=>d.setFile&&d.setFile(...e)),ref:"fileInput"},null,544)])),_:1},8,["errors"]),p.saving?((0,s.wg)(),(0,s.iD)("div",r,"Saving...")):((0,s.wg)(),(0,s.j4)(m,{key:0,"submit-text":"Save",onSubmitted:d.saveCropped,onCanceled:d.cancelCropped},null,8,["onSubmitted","onCanceled"]))])),_:1},8,["modelValue"])]))],2)}var p=t(6058),d=t(9028),c={name:"ProfilePhotoForm",components:{ImageCropper:p["default"]},props:{person:{type:Object,required:!0}},data(){return{showForm:!1,file:null,croppedImageBlob:null,errors:{},saving:!1}},watch:{person:{immediate:!0,deep:!0,handler(e){e.profile_photo&&this.fetchProfileImage()}}},computed:{srcPath(){return this.file?(console.log("create from this.file"),URL.createObjectURL(this.file)):this.person.profile_photo?`/profile-photos/${this.person.profile_photo}`:"/images/default_profile.jpg"},profilePhoto(){return this.person.profile_photo?`/profile-photos/${this.person.profile_photo}`:"/images/default_profile.jpg"},altText(){return this.person.profile_photo_path?`${this.person.name} profile photo.`:"Default profile image"}},methods:{initUpload(){this.showForm=!0,this.$nextTick((()=>{window.dispatchEvent(new Event("resize"))}))},setFile(){this.file=this.$refs.fileInput.files[0]},setCroppedImageBlob(e){this.croppedImageBlob=e},async fetchProfileImage(){const e=`/api/people/${this.person.uuid}/profile-photo`,o={Accept:"application/octet-stream",timeout:3e4,responseType:"blob"};this.file=await d.hi.get(e,o).then((e=>{if(e.data instanceof Blob)return new Blob([e.data])}))},saveCropped(){if(this.croppedImageBlob.size>2e6){const e=400,o=new Image;return o.src=URL.createObjectURL(this.croppedImageBlob),void o.addEventListener("load",(()=>{var t=document.createElement("canvas"),s=t.getContext("2d"),i=document.createElement("canvas"),l=i.getContext("2d");t.width=e,t.height=t.width*o.height/o.width;var n={width:Math.floor(.5*o.width),height:Math.floor(.5*o.height)};i.width=n.width,i.height=n.height,l.drawImage(o,0,0,n.width,n.height);while(.5*n.width>e)n={width:Math.floor(.5*n.width),height:Math.floor(.5*n.height)},l.drawImage(i,0,0,2*n.width,2*n.height,0,0,n.width,n.height);s.drawImage(i,0,0,n.width,n.height,0,0,t.width,t.height),t.toBlob((e=>{console.log(e.size/1e3/1e3),this.storeImage(e)}),null,.5)}))}this.storeImage(this.croppedImageBlob)},storeImage(e){this.saving=!0;const o=new FormData;o.append("profile_photo",e),d.hi.post(`/api/people/${this.person.uuid}/profile-photo`,o).then((()=>{this.$store.dispatch("people/getPerson",{uuid:this.person.uuid}),this.showForm=!1,this.file=null,this.saving=!1})).catch((e=>{if((0,d.z1)(e))return this.errors=e.response.data.errors,void(this.saving=!1);throw this.saving=!1,e}))},cancelCropped(){this.showForm=!1,this.file=null}}},u=t(3744);const m=(0,u.Z)(c,[["render",a]]);var h=m},6570:function(e,o,t){t.d(o,{Z:function(){return c}});var s=t(6252);const i={class:"border border-gray-300 bg-white overflow-hidden"},l=["src"];function n(e,o,t,n,r,a){return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("img",{src:a.photoUrl,class:"w-full"},null,8,l)])}var r=t(284),a={name:"ProfilePicture",props:{person:{required:!0,type:r.Z}},data(){return{}},computed:{hasProfilePhoto(){return null!==this.person.profile_photo},photoUrl(){return this.hasProfilePhoto?`/profile-photos/${this.person.profile_photo}`:"/images/default_profile.jpg"}},methods:{}},p=t(3744);const d=(0,p.Z)(a,[["render",n]]);var c=d}}]);
//# sourceMappingURL=859.247e3c2d.js.map