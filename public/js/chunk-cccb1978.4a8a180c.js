(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cccb1978"],{"04e9":function(e,t,o){},"0945":function(e,t,o){"use strict";o("a15b"),o("b0c0"),o("4e82"),o("d81d");var r=o("7a23"),n={class:"flex justify-between items-end"},c={class:"flex space-x-2 items-center"},i=Object(r["createElementVNode"])("h2",null,"Members",-1),l={class:"flex space-x-2 items-center pb-0.5"},a={key:0},s={key:1,class:"flex space-x-2 items-center"},u=["href"],d={class:"btn btn-icon"},b=Object(r["createTextVNode"])("Downloads:"),m=["href"],p=Object(r["createTextVNode"])(" (PDF)"),f=["href"],O=Object(r["createTextVNode"])(" (CSV)"),j={key:1},h={class:"flex justify-between px-2 space-x-2 bg-blue-200 rounded-lg"},v={class:"flex-1"},w=Object(r["createElementVNode"])("option",{value:null},"Select…",-1),g=["value"],V={class:"flex-1 py-2"},_={class:"flex-1 py-2"},C={class:"mt-3 py-2 w-full overflow-x-auto"},x=["onClick"],N={class:"flex space-x-2"},k={key:0},y=["onClick"],E={class:"flex space-x-2 items-center"},B=Object(r["createElementVNode"])("button",{class:"btn btn-xs"},"…",-1),D=["onClick"],M=["onClick"],R=["onClick"],S=["onClick"],P={key:1,class:"well"},T={class:"text-lg"},U={class:"text-lg"},I={class:"text-lg"},q=Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("strong",null,"This cannot be undone.")],-1);function A(e,t,o,A,F,$){var G=Object(r["resolveComponent"])("icon-filter"),z=Object(r["resolveComponent"])("icon-add"),Q=Object(r["resolveComponent"])("router-link"),L=Object(r["resolveComponent"])("popper"),W=Object(r["resolveComponent"])("icon-envelope"),Y=Object(r["resolveComponent"])("icon-download"),J=Object(r["resolveComponent"])("dropdown-item"),K=Object(r["resolveComponent"])("note"),H=Object(r["resolveComponent"])("dropdown-menu"),X=Object(r["resolveComponent"])("input-row"),Z=Object(r["resolveComponent"])("checkbox"),ee=Object(r["resolveComponent"])("icon-cheveron-right"),te=Object(r["resolveComponent"])("icon-cheveron-down"),oe=Object(r["resolveComponent"])("icon-view"),re=Object(r["resolveComponent"])("icon-exclamation"),ne=Object(r["resolveComponent"])("icon-notification"),ce=Object(r["resolveComponent"])("popover"),ie=Object(r["resolveComponent"])("member-preview"),le=Object(r["resolveComponent"])("data-table"),ae=Object(r["resolveComponent"])("button-row"),se=Object(r["resolveComponent"])("modal-dialog"),ue=Object(r["resolveComponent"])("coi-detail");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("head",n,[Object(r["createElementVNode"])("div",c,[i,$.group.members.length>0?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,ref:"filterToggleButton",class:Object(r["normalizeClass"])(["px-3 py-2 rounded-t transition-color",{"rounded-b":!F.showFilter,"bg-blue-200":F.showFilter}]),onClick:t[0]||(t[0]=function(){return $.toggleFilter&&$.toggleFilter.apply($,arguments)})},[Object(r["createVNode"])(G,{width:"16",height:"16"})],2)):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",l,[$.showAddMemberButton?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createVNode"])(L,{content:"Add a member",hover:"",arrow:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(Q,{class:"btn btn-icon",to:e.append(e.$route.path,"members/add")},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(z,{class:"inline-block"})]})),_:1},8,["to"])]})),_:1})])):Object(r["createCommentVNode"])("",!0),$.showCoordinatorActions?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,[$.features.email_from_member_list?(Object(r["openBlock"])(),Object(r["createBlock"])(L,{key:0,content:"Email ".concat($.filteredMembers.length," listed members"),hover:"",arrow:""},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("a",{href:"mailto:".concat($.filteredEmails.join(", ")),class:"btn btn-icon",onClick:t[1]||(t[1]=function(){return e.initEmailWithFiltered&&e.initEmailWithFiltered.apply(e,arguments)})},[Object(r["createVNode"])(W,{class:"inline-block",width:"16",height:"16"})],8,u)]})),_:1},8,["content"])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(H,{"hide-cheveron":"",orientation:"right"},{label:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("button",d,[Object(r["createVNode"])(Y,{width:"16",height:"16"})])]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(J,{class:"text-right font-bold"},{default:Object(r["withCtx"])((function(){return[b]})),_:1}),Object(r["createVNode"])(J,{class:"text-right"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("a",{href:"/report/groups/".concat($.group.uuid,"/coi-report")},"COI Report",8,m),Object(r["createVNode"])(K,{class:"inline"},{default:Object(r["withCtx"])((function(){return[p]})),_:1})]})),_:1}),$.showMemberReportButton?(Object(r["openBlock"])(),Object(r["createBlock"])(J,{key:0,class:"text-right"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(L,{class:"text-center text-sm p-1",content:"Export will include ".concat($.filteredMembers.length," members currently listed."),hover:"",arrow:""},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("a",{href:$.exportUrl},"Member Export",8,f),Object(r["createVNode"])(K,{class:"inline"},{default:Object(r["withCtx"])((function(){return[O]})),_:1})]})),_:1},8,["content"])]})),_:1})):Object(r["createCommentVNode"])("",!0)]})),_:1}),$.group.isEp()&&$.showCoordinatorActions?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",j)):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0)])]),Object(r["createVNode"])(r["Transition"],{name:"slide-fade-down"},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createElementVNode"])("div",h,[Object(r["createElementVNode"])("div",v,[Object(r["createVNode"])(X,{label:"Keyword",type:"text",modelValue:F.filters.keyword,"onUpdate:modelValue":t[2]||(t[2]=function(e){return F.filters.keyword=e}),"label-width-class":"w-20"},null,8,["modelValue"]),Object(r["createVNode"])(X,{label:"Role","label-width-class":"w-20"},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return F.filters.roleId=e})},[w,(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])($.roles,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("option",{key:e.id,value:e.id},Object(r["toDisplayString"])(e.name),9,g)})),128))],512),[[r["vModelSelect"],F.filters.roleId]])]})),_:1})]),Object(r["createElementVNode"])("div",V,[Object(r["createVNode"])(Z,{class:"block",label:"Needs COI",modelValue:F.filters.needsCoi,"onUpdate:modelValue":t[4]||(t[4]=function(e){return F.filters.needsCoi=e})},null,8,["modelValue"])]),Object(r["createElementVNode"])("div",_,[Object(r["createVNode"])(Z,{class:"block",label:"Hide Retired/Alumni",modelValue:F.filters.hideAlumns,"onUpdate:modelValue":t[5]||(t[5]=function(e){return F.filters.hideAlumns=e})},null,8,["modelValue"])])],512),[[r["vShow"],F.showFilter]])]})),_:1}),Object(r["createElementVNode"])("div",C,[$.group.members.length>0?(Object(r["openBlock"])(),Object(r["createBlock"])(le,{key:0,fields:$.fieldsForGroupType,data:$.filteredMembers,sort:A.sort,"onUpdate:sort":t[7]||(t[7]=function(e){return A.sort=e}),detailRows:!0,"row-class":function(e){return"cursor-pointer"+(e.isRetired?" retired-member":"")},onRowClick:$.goToMember},{"cell-id":Object(r["withCtx"])((function(e){var t=e.item;return[Object(r["createElementVNode"])("button",{onClick:Object(r["withModifiers"])((function(e){return $.toggleItemDetails(t)}),["stop"]),class:"w-9 align-center block -mx-3"},[t.showDetails?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(ee,{key:0,class:"m-auto cursor-pointer"})),t.showDetails?(Object(r["openBlock"])(),Object(r["createBlock"])(te,{key:1,class:"m-auto cursor-pointer"})):Object(r["createCommentVNode"])("",!0)],8,x)]})),"cell-roles":Object(r["withCtx"])((function(t){var o=t.value;return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.titleCase(o.map((function(e){return e.name})).join(", "))),1)]})),"cell-coi_last_completed":Object(r["withCtx"])((function(t){var o=t.item;return[Object(r["createElementVNode"])("div",N,[o.coi_last_completed?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",k,Object(r["toDisplayString"])(e.formatDate(o.coi_last_completed)),1)):Object(r["createCommentVNode"])("",!0),o.latest_coi_id?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:1,class:"link cursor-pointer",onClick:Object(r["withModifiers"])((function(e){return $.viewCoi(o.latest_coi_id)}),["stop"])},[Object(r["createVNode"])(oe)],8,y)):Object(r["createCommentVNode"])("",!0),null===!o.coi_last_completed||o.coi_last_completed<e.yearAgo()?(Object(r["openBlock"])(),Object(r["createBlock"])(re,{key:2,class:Object(r["normalizeClass"])($.getCoiDateStyle(o))},null,8,["class"])):Object(r["createCommentVNode"])("",!0)])]})),"cell-actions":Object(r["withCtx"])((function(n){var c=n.item;return[Object(r["createElementVNode"])("div",E,[$.hasAnyMemberPermission()&&!o.readonly?(Object(r["openBlock"])(),Object(r["createBlock"])(H,{key:0,"hide-cheveron":!0,class:"relative block"},{label:Object(r["withCtx"])((function(){return[B]})),default:Object(r["withCtx"])((function(){return[e.hasAnyPermission([["members-update",$.group],"groups-manage"])?(Object(r["openBlock"])(),Object(r["createBlock"])(J,{key:0},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",{onClick:function(e){return $.editMember(c)}},"Update membership",8,D)]})),_:2},1024)):Object(r["createCommentVNode"])("",!0),Object(r["withDirectives"])(Object(r["createVNode"])(J,null,{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",{onClick:function(e){return $.confirmRetireMember(c)}},"Retire from group",8,M)]})),_:2},1536),[[r["vShow"],!c.isRetired&&e.hasAnyPermission([["members-retire",$.group],"groups-manage"])]]),Object(r["withDirectives"])(Object(r["createVNode"])(J,null,{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",{onClick:function(e){return $.confirmUnretire(c)}},"Unretire from group",8,R)]})),_:2},1536),[[r["vShow"],c.isRetired&&e.hasAnyPermission([["members-remove",$.group],"groups-manage"])]]),Object(r["createVNode"])(J,null,{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",{onClick:function(e){return $.confirmRemoveMember(c)}},"Remove from group",8,S)]})),_:2},1024)]})),_:2},1024)):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(ce,{hover:"",arrow:"",content:"Receives notifications about this group.",placement:"top"},{default:Object(r["withCtx"])((function(){return[c.is_contact?(Object(r["openBlock"])(),Object(r["createBlock"])(ne,{key:0,width:12,height:12,"icon-name":"Is a group contact",onClick:t[6]||(t[6]=Object(r["withModifiers"])((function(){}),["stop"]))})):Object(r["createCommentVNode"])("",!0)]})),_:2},1024)])])]})),detail:Object(r["withCtx"])((function(e){var t=e.item;return[Object(r["createVNode"])(ie,{member:t,group:$.group},null,8,["member","group"])]})),_:1},8,["fields","data","sort","row-class","onRowClick"])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",P," This group does not yet have any members. "))]),(Object(r["openBlock"])(),Object(r["createBlock"])(r["Teleport"],{to:"body"},[Object(r["createVNode"])(se,{modelValue:F.showConfirmRetire,"onUpdate:modelValue":t[8]||(t[8]=function(e){return F.showConfirmRetire=e}),size:"xs",title:"Retire ".concat($.selectedMemberName,"?")},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("p",T," Are you sure you want to retire "+Object(r["toDisplayString"])($.selectedMemberName)+" from this group? ",1),Object(r["createVNode"])(ae,{onSubmit:$.retireMember,onCancel:$.cancelRetire,"submit-text":"Retire Member"},null,8,["onSubmit","onCancel"])]})),_:1},8,["modelValue","title"]),Object(r["createVNode"])(se,{modelValue:F.showConfirmUnretire,"onUpdate:modelValue":t[9]||(t[9]=function(e){return F.showConfirmUnretire=e}),size:"xs",title:"Retire ".concat($.selectedMemberName,"?")},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("p",U," Are you sure you want to un-retire "+Object(r["toDisplayString"])($.selectedMemberName)+"? ",1),Object(r["createVNode"])(ae,{onSubmit:$.unretireMember,onCancel:$.cancelUnretire,"submit-text":"Un-retire Member"},null,8,["onSubmit","onCancel"])]})),_:1},8,["modelValue","title"]),Object(r["createVNode"])(se,{modelValue:F.showConfirmRemove,"onUpdate:modelValue":t[10]||(t[10]=function(e){return F.showConfirmRemove=e}),size:"xs",title:"Remove ".concat($.selectedMemberName,"?")},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("p",I," Are you sure you want to remove "+Object(r["toDisplayString"])($.selectedMemberName)+" from this group?",1),q,Object(r["createVNode"])(ae,{onSubmit:$.removeMember,onCancel:$.cancelRemove,"submit-text":"Remove Member"},null,8,["onSubmit","onCancel"])]})),_:1},8,["modelValue","title"]),Object(r["createVNode"])(se,{modelValue:F.showCoiDetail,"onUpdate:modelValue":t[11]||(t[11]=function(e){return F.showCoiDetail=e}),size:"xl"},{default:Object(r["withCtx"])((function(){return[F.coi?(Object(r["openBlock"])(),Object(r["createBlock"])(ue,{key:0,coi:F.coi,group:$.group},null,8,["coi","group"])):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["modelValue"])]))])}var F=o("1da1"),$=o("2909"),G=(o("96cf"),o("a9e3"),o("4de4"),o("d3b7"),o("99af"),o("a434"),o("c740"),o("db04")),z=o("5257"),Q={class:"px-8 py-4 inset"},L=Object(r["createTextVNode"])(" RETIRED "),W={class:"md:flex flex-wrap space-x-4 text-sm"},Y={class:"flex-1 md:flex flex-wrap"},J={class:"flex-1 mr-8"},K={class:"flex-1 mr-4"},H={class:"mt-2"},X=Object(r["createElementVNode"])("h4",null,"Roles:",-1),Z={class:"ml-2"},ee={key:0},te=Object(r["createElementVNode"])("h4",null,"Biocurator Training:",-1),oe={class:"ml-2"},re={class:"mt-2"},ne=Object(r["createElementVNode"])("h4",null,"Extra Permissions:",-1),ce={class:"ml-2"},ie=Object(r["createElementVNode"])("div",null,null,-1),le=Object(r["createTextVNode"])(" View profile ");function ae(e,t,o,n,c,i){var l=Object(r["resolveComponent"])("static-alert"),a=Object(r["resolveComponent"])("profile-picture"),s=Object(r["resolveComponent"])("note"),u=Object(r["resolveComponent"])("dictionary-row"),d=Object(r["resolveComponent"])("object-dictionary"),b=Object(r["resolveComponent"])("icon-checkmark"),m=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Q,[o.member.isRetired?(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:0,variant:"warning",class:"mb-3 float-right"},{default:Object(r["withCtx"])((function(){return[L]})),_:1})):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",W,[Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(a,{person:o.member.person},null,8,["person"]),Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])("member id: "+Object(r["toDisplayString"])(o.member.id),1)]})),_:1})]),Object(r["createElementVNode"])("div",Y,[Object(r["createElementVNode"])("div",J,[Object(r["createVNode"])(u,{label:"Email"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.member.person.email),1)]})),_:1}),Object(r["createVNode"])(u,{label:"Institution"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.member.person.institution?o.member.person.institution.name:"--"),1)]})),_:1}),Object(r["createVNode"])(u,{label:"Credentials"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.member.person.credentials),1)]})),_:1}),Object(r["createVNode"])(d,{obj:o.member,only:["expertise","notes"]},null,8,["obj"]),Object(r["createVNode"])(u,{label:"Start - End"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(n.formatDate(o.member.start_date))+" - "+Object(r["toDisplayString"])(n.formatDate(o.member.end_date)||"present"),1)]})),_:1})]),Object(r["createElementVNode"])("div",K,[Object(r["createElementVNode"])("div",H,[X,Object(r["createElementVNode"])("div",Z,Object(r["toDisplayString"])(o.member.roles.length>0?o.member.roles.map((function(t){return e.titleCase(t.name)})).join(", "):"--"),1)]),o.member.hasRole("biocurator")?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",ee,[te,Object(r["createElementVNode"])("div",oe,[Object(r["createVNode"])(u,{label:"Level 1 training"},{default:Object(r["withCtx"])((function(){return[o.member.training_level_1?(Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:0,class:"text-green-700"})):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createVNode"])(u,{label:"Level 2 training"},{default:Object(r["withCtx"])((function(){return[o.member.training_level_2?(Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:0,class:"text-green-700"})):Object(r["createCommentVNode"])("",!0)]})),_:1})])])):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",re,[ne,Object(r["createElementVNode"])("div",ce,Object(r["toDisplayString"])(o.member.permissions.length>0?o.member.permissions.map((function(e){return e.name})).join(", "):"--"),1)])])]),ie]),Object(r["createVNode"])(m,{class:"link",to:{name:"PersonDetail",params:{uuid:this.member.person.uuid}}},{default:Object(r["withCtx"])((function(){return[le]})),_:1},8,["to"])])}var se=o("86ed"),ue=o("ae23"),de={class:"w-24 border border-gray-300 bg-white"},be=["src"];function me(e,t,o,n,c,i){var l=Object(r["resolveComponent"])("icon-user");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",de,[o.person.profile_photo_path?(Object(r["openBlock"])(),Object(r["createElementBlock"])("img",{key:0,src:o.person.profile_photo_path},null,8,be)):(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:1,height:"96",width:"96","icon-color":"#888"}))])}var pe=o("da07"),fe={name:"ProfilePicture",props:{person:{required:!0,type:pe["a"]}},data:function(){return{}},computed:{hasProfilePhoto:function(){return null!==this.person.profile_photo_path}},methods:{}},Oe=o("6b0d"),je=o.n(Oe);const he=je()(fe,[["render",me]]);var ve=he,we=o("e328"),ge={name:"MemberPreview",components:{ProfilePicture:ve},props:{member:{type:se["a"],required:!0},group:{type:ue["a"],required:!0}},emits:["edit"],setup:function(){return{formatDate:we["b"]}}};const Ve=je()(ge,[["render",ae]]);var _e=Ve,Ce=o("8c98"),xe=o("4a91"),Ne={name:"MemberList",components:{MemberPreview:_e,CoiDetail:Ce["a"]},props:{readonly:{type:Boolean,default:!1}},data:function(){return{showFilter:!1,showConfirmRetire:!1,showConfirmUnretire:!1,showConfirmRemove:!1,filters:{keyword:null,roleId:null,needsCoi:null,needsTraining:null,hideAlumns:!0},tableFields:[{name:"id",label:"",type:Number,sortable:!1},{name:"person.first_name",label:"First",type:String,sortable:!0},{name:"person.last_name",label:"Last",type:String,sortable:!0},{name:"person.timezone",label:"Closest City (for timezone)",type:String,sortable:!0},{name:"roles",label:"Roles",sortable:!1},{name:"coi_last_completed",label:"COI Completed",type:Date,sortable:!0},{name:"actions",label:"",type:Object,sortable:!1}],selectedMember:null,members:[],showCoiDetail:!1,coi:null}},computed:{roles:function(){return xe.groups.roles},group:function(){return this.$store.getters["groups/currentItemOrNew"]},filteredMembers:function(){var e=this;return this.group.members?this.group.members.filter((function(t){return e.matchesFilters(t)})).filter((function(t){return e.filters.hideAlumns?null===t.end_date:t})):[]},filteredEmails:function(){return this.filteredMembers.map((function(e){return"".concat(e.person.name," <").concat(e.person.email,">")}))},fieldsForGroupType:function(){var e=Object($["a"])(this.tableFields);return this.group.isEp()||e.splice(e.findIndex((function(e){return"coi_last_completed"==e.name})),1),e},coiCuttoff:function(){var e=new Date;return e.setFullYear(e.getFullYear()-1),e},selectedMemberName:function(){return this.selectedMember?this.selectedMember.person.name:null},showCoordinatorActions:function(){return this.hasAnyMemberPermission(["groups-manage",["info-edit",this.group]])},showAddMemberButton:function(){return this.hasAnyPermission([["members-invite",this.group],"groups-manage","ep-applications-manage","annual-updates-manage"])&&!this.readonly},showMemberReportButton:function(){return this.hasAnyPermission([["members-invite",this.group],"groups-manage","ep-applications-manage","annual-updates-manage"])&&this.$store.state.systemInfo.app.features.member_export},exportUrl:function(){var e="?member_ids=".concat(this.filteredMembers.map((function(e){return e.id})).join(","));return"/report/groups/".concat(this.group.uuid,"/member-export").concat(e)},features:function(){return this.$store.state.systemInfo.app.features}},watch:{group:{immediate:!0,handler:function(e,t){!e.id||t&&e.id==t.id||this.$store.dispatch("groups/getMembers",this.group)}}},setup:function(){var e=Object(z["a"])({field:"person.last_name",desc:!1}),t=e.sort,o=e.filter;return{sort:t,filter:o}},methods:{toggleFilter:function(){this.showFilter=!this.showFilter},matchesFilters:function(e){return!(this.filters.keyword&&!e.matchesKeyword(this.filters.keyword))&&(!(this.filters.roleId&&!e.hasRole(this.filters.roleId))&&((!this.filters.needsCoi||!e.coiUpToDate())&&(!this.filters.needsTraining||!e.trainingComplete())))},toggleItemDetails:function(e){e.showDetails=!e.showDetails},editMember:function(e){this.$router.push(this.append(this.$route.path,"members/".concat(e.id)))},confirmRetireMember:function(e){this.showConfirmRetire=!0,this.selectedMember=e},retireMember:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("groups/memberRetire",{uuid:e.group.uuid,memberId:e.selectedMember.id,startDate:e.selectedMember.start_date,endDate:(new Date).toISOString()});case 3:e.cancelRetire(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},cancelRetire:function(){this.selectedMember=null,this.showConfirmRetire=!1},unretireMember:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("groups/memberUnretire",{uuid:e.group.uuid,memberId:e.selectedMember.id});case 3:e.cancelUnretire(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},cancelUnretire:function(){this.selectedMember=null,this.showConfirmUnretire=!1},confirmRemoveMember:function(e){this.showConfirmRemove=!0,this.selectedMember=e},removeMember:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("groups/memberRemove",{uuid:e.group.uuid,memberId:e.selectedMember.id,startDate:e.selectedMember.start_date,endDate:(new Date).toISOString()});case 3:e.cancelRemove(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},cancelRemove:function(){this.selectedMember=null,this.showConfirmRemove=!1},goToMember:function(e){this.$router.push({name:"PersonDetail",params:{uuid:e.person.uuid}})},hasAnyMemberPermission:function(){var e=this.hasAnyPermission([["members-update",this.group],["members-retire",this.group],["members-remove",this.group],"groups-manage"]);return e},getCoiDateStyle:function(e){return null===e.coi_last_completed?"text-red-700":"text-yellow-500"},viewCoi:function(e){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t.showCoiDetail=!0,o.next=3,G["a"].get("/api/cois/".concat(e)).then((function(e){return e.data}));case 3:t.coi=o.sent;case 4:case"end":return o.stop()}}),o)})))()},downloadCoiReport:function(){var e="/report/".concat(this.group.expert_panel.coi_code);window.location=e},confirmUnretire:function(e){console.log(e),this.showConfirmUnretire=!0,this.selectedMember=e}}};o("77fb");const ke=je()(Ne,[["render",A]]);t["a"]=ke},"1d7f":function(e,t,o){"use strict";var r=o("7a23"),n={class:"mb-4"},c=Object(r["createElementVNode"])("p",{class:"text-sm mb-0"},"For all variants approved by either of the processes described above, a summary of approved variants should be sent to ensure that any members absent from a call have an opportunity to review each variant. The summary should be emailed to the full VCEP after the call and should summarize decisions that were made and invite feedback within a week.",-1),i={key:1};function l(e,t,o,l,a,s){var u=Object(r["resolveComponent"])("input-row");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("div",n,[Object(r["createVNode"])(u,{modelValue:s.group.expert_panel.meeting_frequency,"onUpdate:modelValue":[t[0]||(t[0]=function(e){return s.group.expert_panel.meeting_frequency=e}),t[1]||(t[1]=function(t){return e.$emit("update")})],label:"Meeting/call frequency",errors:o.errors.meeting_frequency,placeholder:"Once per week","label-width-class":"w-44",disabled:!s.canEdit},null,8,["modelValue","errors","disabled"]),Object(r["createVNode"])(u,{modelValue:s.group.expert_panel.curation_review_protocol_id,"onUpdate:modelValue":[t[2]||(t[2]=function(e){return s.group.expert_panel.curation_review_protocol_id=e}),t[3]||(t[3]=function(t){return e.$emit("update")})],options:[{value:1,label:"Process #1: Biocurator review followed by VCEP discussion"},{value:2,label:"Process #2: Paired biocurator/expert review followed by expedited VCEP approval"}],type:"radio-group",errors:o.errors.curation_review_protocol_id,disabeld:!s.canEdit,label:"VCEP Standardized Review Process",vertical:""},null,8,["modelValue","errors","disabeld"])]),c,s.canEdit?(Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:0,modelValue:s.group.expert_panel.curation_review_process_notes,"onUpdate:modelValue":[t[4]||(t[4]=function(e){return s.group.expert_panel.curation_review_process_notes=e}),t[5]||(t[5]=function(t){return e.$emit("update")})],type:"large-text",label:"Curation and Review Process Notes",vertical:!0,"label-class":"font-bold"},null,8,["modelValue"])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("blockquote",i,Object(r["toDisplayString"])(s.group.expert_panel.curation_review_process_notes),1))])}var a={name:"VcepOngoingPlansForm",props:{errors:{type:Object,required:!1,default:function(){return{}}},editing:{type:Boolean,required:!1,default:!0},readonly:{type:Boolean,required:!1,default:!1}},emits:["update"],computed:{group:{get:function(){return this.$store.getters["groups/currentItemOrNew"]},set:function(e){this.$store.commit("groups/addItem",e)}},canEdit:function(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}}},s=o("6b0d"),u=o.n(s);const d=u()(a,[["render",l]]);t["a"]=d},5257:function(e,t,o){"use strict";var r=o("5530"),n=(o("caad"),o("2532"),o("b64b"),o("ac1f"),o("5319"),o("4de4"),o("d3b7"),o("6c02")),c=o("7a23");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(n["d"])(),o=Object(n["c"])();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});var i=Object(c["computed"])({immediate:!0,get:function(){return Object.keys(o.query).includes("sort-field")?{field:o.query["sort-field"],desc:Boolean(parseInt(o.query["sort-desc"]))}:e},set:function(e){var n={"sort-field":e.field,"sort-desc":e.desc?1:0},c=Object(r["a"])(Object(r["a"])({},o.query),n);t.replace({path:o.path,query:c})}}),l=Object(c["computed"])({set:function(e){var n=o.query,c=o.path,i=Object(r["a"])({},n);e?i=Object(r["a"])(Object(r["a"])({},n),{filter:e}):delete i.filter,t.replace({path:c,query:i})},get:function(){return o.query.filter},immediate:!0});return{sort:i,filter:l}}},6786:function(e,t,o){"use strict";o("04e9")},"6ca3":function(e,t,o){"use strict";var r=o("7a23"),n=Object(r["createElementVNode"])("p",null,"Three examples of ClinGen-approved curation and review protocols are below (additional details may be requested from the CDWG Oversight Committee). Check or describe the curation and review protocol that this Expert Panel will use.",-1),c={class:"mb-4"},i={class:"mt-2"},l=["disabled"],a=Object(r["createElementVNode"])("div",null,"Single biocurator curation with comprehensive GCEP review (presentation of all data on calls with GCEP votes). Note: definitive genes may be expedited with brief summaries.",-1),s={class:"mt-2 items-top"},u=["disabled"],d=Object(r["createElementVNode"])("p",null,"Paired review (biocurator & domain expert) with expedited GCEP review. Expert works closely with a curator on the initial summation of the information for expedited GCEP review (brief summary on a call with GCEP voting and/or electronic voting by GCEP). Definitive genes can move directly from biocurator to expedited GCEP review.",-1),b={class:"mt-2"},m=["disabled"],p=Object(r["createElementVNode"])("p",null,"Dual biocurator review with expedited GCEP review for concordant genes and full review for discordant genes.",-1),f={class:"flex space-x-2 items-start mt-3"},O=["disabled"],j=Object(r["createElementVNode"])("p",null,"Other",-1);function h(e,t,o,h,v,w){var g=Object(r["resolveComponent"])("input-row");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[n,Object(r["createElementVNode"])("div",c,[Object(r["createVNode"])(g,{label:"",errors:o.errors.curation_review_protocol_id,vertical:""},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("label",i,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=function(e){return w.group.expert_panel.curation_review_protocol_id=e}),value:"1",disabled:!w.canEdit,onInput:t[1]||(t[1]=function(t){return e.$emit("update")})},null,40,l),[[r["vModelRadio"],w.group.expert_panel.curation_review_protocol_id]]),a]),Object(r["createElementVNode"])("label",s,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=function(e){return w.group.expert_panel.curation_review_protocol_id=e}),value:"2",disabled:!w.canEdit,onInput:t[3]||(t[3]=function(t){return e.$emit("update")})},null,40,u),[[r["vModelRadio"],w.group.expert_panel.curation_review_protocol_id]]),d]),Object(r["createElementVNode"])("label",b,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=function(e){return w.group.expert_panel.curation_review_protocol_id=e}),value:"3",disabled:!w.canEdit,onInput:t[5]||(t[5]=function(t){return e.$emit("update")})},null,40,m),[[r["vModelRadio"],w.group.expert_panel.curation_review_protocol_id]]),p]),Object(r["createElementVNode"])("div",f,[Object(r["createElementVNode"])("label",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=function(e){return w.group.expert_panel.curation_review_protocol_id=e}),value:"100",disabled:!w.canEdit,onInput:t[7]||(t[7]=function(t){return e.$emit("update")})},null,40,O),[[r["vModelRadio"],w.group.expert_panel.curation_review_protocol_id]]),j]),Object(r["createVNode"])(r["Transition"],{name:"slide-fade-down"},{default:Object(r["withCtx"])((function(){return[100==w.group.expert_panel.curation_review_protocol_id?(Object(r["openBlock"])(),Object(r["createBlock"])(g,{key:0,class:"flex-1 mt-0","label-width-class":"w-0",modelValue:w.group.expert_panel.curation_review_protocol_other,"onUpdate:modelValue":[t[8]||(t[8]=function(e){return w.group.expert_panel.curation_review_protocol_other=e}),t[9]||(t[9]=function(t){return e.$emit("update")})],errors:o.errors.curation_review_protocol_other,type:"large-text"},null,8,["modelValue","errors"])):Object(r["createCommentVNode"])("",!0)]})),_:1})])])]})),_:1},8,["errors"])])])}var v={name:"GcepOngoingPlansForm",props:{errors:{type:Object,required:!1,default:function(){return{}}},readonly:{type:Boolean,required:!1,default:!1}},computed:{group:{get:function(){return this.$store.getters["groups/currentItemOrNew"]},set:function(e){this.$store.commit("groups/addItem",e)}},canEdit:function(){return this.hasAnyPermission(["ep-applications-manage",["application-edit",this.group]])&&!this.readonly}}},w=o("6b0d"),g=o.n(w);const V=g()(v,[["render",h]]);t["a"]=V},"72c7":function(e,t,o){},"77fb":function(e,t,o){"use strict";o("72c7")},"8c98":function(e,t,o){"use strict";o("99af"),o("b0c0");var r=o("7a23"),n={key:0},c={class:"block-title"},i=Object(r["createTextVNode"])(" COI response for "),l={key:0},a={class:"text-sm response-data"},s={class:"flex-0"},u=Object(r["createElementVNode"])("p",{class:"mb-2"},"This is a legacy response.",-1),d={key:1,class:"response-data"};function b(e,t,o,b,m,p){var f=Object(r["resolveComponent"])("dictionary-row");return p.response?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n,[Object(r["createElementVNode"])("h2",c,[i,o.coi.data.first_name?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",l,Object(r["toDisplayString"])(e.titleCase("".concat(o.coi.data.first_name," ").concat(o.coi.data.last_name)))+" in ",1)):Object(r["createCommentVNode"])("",!0),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(o.group.name),1)]),Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(f,{label:"Name","label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.coi.data.first_name)+" "+Object(r["toDisplayString"])(o.coi.data.last_name),1)]})),_:1}),Object(r["createVNode"])(f,{label:"Email","label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(o.coi.data.email),1)]})),_:1}),p.response.document_uuid?(Object(r["openBlock"])(),Object(r["createBlock"])(f,{key:0,label:"COI File","label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",s,[u,Object(r["createElementVNode"])("button",{class:"btn btn-xs",onClick:t[0]||(t[0]=function(e){return p.downloadDocument(p.response.download_url.response)})}," Download the COI. ")])]})),_:1})):Object(r["createCommentVNode"])("",!0),p.response.document_uuid?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",d,[Object(r["createVNode"])(f,{label:p.response.work_fee_lab.question,vertical:!0,"label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(p.getQuestionValue(p.response.work_fee_lab.response)),1)]})),_:1},8,["label"]),Object(r["createVNode"])(f,{label:p.response.contributions_to_gd_in_ep.question,vertical:!0,"label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(p.getQuestionValue(p.response.contributions_to_gd_in_ep.response))+" ",1),1==p.response.contributions_to_gd_in_ep.response?(Object(r["openBlock"])(),Object(r["createBlock"])(f,{key:0,label:p.response.contributions_to_genes.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(p.getQuestionValue(p.response.contributions_to_genes.response)),1)]})),_:1},8,["label"])):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["label"]),Object(r["createVNode"])(f,{label:p.response.independent_efforts.question,vertical:!0,"label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(p.getQuestionValue(p.response.independent_efforts.response))+" ",1),[1,2].indexOf(p.response.independent_efforts.response)>-1?(Object(r["openBlock"])(),Object(r["createBlock"])(f,{key:0,label:p.response.independent_efforts_details.question,vertical:!0,class:"pb-1 mb-1 ml-4 border-none","label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(p.getQuestionValue(p.response.independent_efforts_details.response)),1)]})),_:1},8,["label"])):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["label"]),Object(r["createVNode"])(f,{label:p.response.coi.question,vertical:!0,class:"pb-1 mb-1","label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(p.getQuestionValue(p.response.coi.response))+" ",1),[1,2].indexOf(p.response.coi.response)>-1?(Object(r["openBlock"])(),Object(r["createBlock"])(f,{key:0,label:p.response.coi_details.question,vertical:!0,class:"pb-1 mb-1 ml-4","label-class":"font-bold"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(p.getQuestionValue(p.response.coi_details.response)),1)]})),_:1},8,["label"])):Object(r["createCommentVNode"])("",!0)]})),_:1},8,["label"])]))])])):Object(r["createCommentVNode"])("",!0)}var m={props:{coi:{type:Object,required:!0},group:{type:Object,required:!0}},data:function(){return{}},computed:{isLegacy:function(){return!1},response:function(){return this.coi.response_document}},methods:{getQuestionValue:function(e){return 1===e?"Yes":0===e?"No":2===e?"Unsure":e},downloadDocument:function(e){window.location=e}}},p=(o("6786"),o("6b0d")),f=o.n(p);const O=f()(m,[["render",b]]);t["a"]=O}}]);
//# sourceMappingURL=chunk-cccb1978.4a8a180c.js.map