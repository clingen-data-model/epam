"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[218],{2790:function(e,s,t){t.d(s,{Z:function(){return a}});t(6699);var i=t(2119),r=t(6252);function a(e=null){const s=(0,i.tv)(),t=(0,i.yj)();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});const a=(0,r.Fl)({immediate:!0,get(){return Object.keys(t.query).includes("sort-field")?{field:t.query["sort-field"],desc:Boolean(parseInt(t.query["sort-desc"]))}:e},set(e){const i={"sort-field":e.field,"sort-desc":e.desc?1:0},r={...t.query,...i};s.replace({path:t.path,query:r})}}),l=(0,r.Fl)({set(e){let i=t.query,r=t.path,a={...i};e?a={...i,filter:e}:delete a.filter,s.replace({path:r,query:a})},get(){return t.query.filter},immediate:!0});return{sort:a,filter:l}}},9843:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});t(6699);var i=t(6252),r=t(3577);const a=(0,i._)("h2",{class:"mt-8 mb-2"},"Memberships",-1),l=(0,i._)("h3",{class:"border-b mb-1"},"Roles",-1),o={class:"flex flex-wrap"},n=(0,i._)("h3",{class:"border-b mb-1"},"Permissions",-1),d={class:"flex flex-wrap"},m={class:"px-2 py-1 mb-2 mt-4 bg-gray-100 border relative text-xs"},u={class:"flex space-x-2"},c=(0,i._)("strong",null,"Legend: ",-1),h=(0,i._)("div",{class:"absolute top-0 left-0 w-full h-full bg-pink-500 opacity-0"}," ",-1);function p(e,s,t,p,f,g){const b=(0,i.up)("object-dictionary"),y=(0,i.up)("data-table"),w=(0,i.up)("checkbox"),R=(0,i.up)("button-row"),k=(0,i.up)("modal-dialog");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("h1",null,(0,r.zw)(f.user.person.name||"loading..."),1),(0,i.Wm)(b,{obj:g.userInfo},null,8,["obj"]),g.canEditUser?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"btn btn-xs",onClick:s[0]||(s[0]=(...e)=>g.initEdit&&g.initEdit(...e))},"Edit system roles & permissions")):(0,i.kq)("",!0),a,(0,i.Wm)(y,{fields:f.membershipFields,data:g.membershipInfo},null,8,["fields","data"]),((0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.Wm)(k,{modelValue:f.showEditForm,"onUpdate:modelValue":s[3]||(s[3]=e=>f.showEditForm=e),title:"Edit System Roles & Permissions"},{default:(0,i.w5)((()=>[l,(0,i._)("ul",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.availableSystemRoles,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.id,class:"w-1/3 h-12"},[(0,i.Wm)(w,{modelValue:f.checkedRoles,"onUpdate:modelValue":s[1]||(s[1]=e=>f.checkedRoles=e),label:e.titleCase(t.display_name),value:t.id},null,8,["modelValue","label","value"])])))),128))]),n,(0,i._)("ul",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.availableSystemPermissions,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.id,class:"w-1/3 h-12"},[g.checkedRolePermissionIds.includes(t.id)?((0,i.wg)(),(0,i.j4)(w,{key:0,modelValue:!0,disabled:!0,label:t.display_name},null,8,["label"])):((0,i.wg)(),(0,i.j4)(w,{key:1,modelValue:f.checkedPermissions,"onUpdate:modelValue":s[2]||(s[2]=e=>f.checkedPermissions=e),label:e.titleCase(t.display_name),value:t.id},null,8,["modelValue","label","value"]))])))),128))]),(0,i._)("div",m,[(0,i._)("div",u,[c,(0,i.Wm)(w,{label:"Not granted"}),(0,i.Wm)(w,{value:1,modelValue:!0,label:"Granted"}),(0,i.Wm)(w,{value:2,modelValue:!0,disabled:"",label:"Granted w/ role"})]),h]),(0,i.Wm)(R,{"submit-text":"Save",onSubmitted:g.saveRolesAndPermissions,onCanceled:g.closeEditForm},null,8,["onSubmitted","onCanceled"])])),_:1},8,["modelValue"])]))])}var f=t(6212),g=t(9028),b=t(3823),y={name:"UserDetail",props:{id:{require:!0}},data(){return{user:new f.Z,membershipFields:[{name:"id"},{name:"group"},{name:"roles"},{name:"extra_permissions"}],showEditForm:!1,systemRoles:[],systemPermissions:Object.values(b.system.permissions),configs:b,checkedRoles:[],checkedPermissions:[]}},computed:{userInfo(){return{name:this.user.person.name,email:this.user.person.email,roles:this.user.roles.map((e=>e.name)).join(", "),additional_permissions:this.user.permissions.map((e=>e.name)).join(", "),registered:this.formatDate(this.user.created_at)}},membershipInfo(){return this.user.person.memberships.map((e=>({id:e.id,group:e.group.expert_panel?e.group.expert_panel.display_name:e.group.name,roles:e.roles.map((e=>e.name)).join(", "),extra_permissions:e.permissions.map((e=>e.name)).join(", ")||"",is_contact:e.is_contact?"Yes":"No"})))},checkedRolePermissionIds(){if(!this.systemRoles)return[];const e=this.systemRoles.filter((e=>this.checkedRoles.includes(e.id))).map((e=>e.permissions)).flat().map((e=>e.id));return[...new Set(e)]},availableSystemRoles(){return this.systemRoles.filter((e=>!!this.hasRole("super-user")||!!this.hasRole("super-admin")&&"super-user"!==e.name))},availableSystemPermissions(){return this.systemPermissions.filter((e=>!!this.hasRole("super-user")||!!this.hasRole("super-admin")&&"logs-view"!==e.name))},canEditUser(){const e=this.$store.getters.currentUser;return!!this.hasPermission("users-manage")&&(!!this.currentUserIsUser||(!!e.hasRole("super-user")||!(!e.hasRole("super-admin")||!this.user.hasRole("admin")&&!this.user.hasNoRole())))},currentUserIsUser(){return this.$store.getters.currentUser.id==this.user.id}},watch:{id:{immediate:!0,handler(){this.getUser()}}},methods:{async getUser(){this.user=await g.hi.get(`/api/users/${this.id}`).then((e=>new f.Z(e.data))),this.resetCheckedRolesAndPermissions()},resetCheckedRolesAndPermissions(){this.checkedRoles=this.user.roles.map((e=>e.id)),this.checkedPermissions=this.user.permissions.map((e=>e.id))},async getSystemRoles(){this.systemRoles=await g.hi.get("/api/roles").then((e=>e.data))},initEdit(){this.showEditForm=!0},async saveRolesAndPermissions(){const e={role_ids:this.checkedRoles,permission_ids:this.checkedPermissions};await g.hi.put(`/api/users/${this.user.id}/roles-and-permissions`,e),this.showEditForm=!1,this.getUser()},closeEditForm(){this.resetCheckedRolesAndPermissions(),this.showEditForm=!1}},mounted(){this.getSystemRoles()}},w=t(3744);const R=(0,w.Z)(y,[["render",p]]);var k=R},7112:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var i=t(6252),r=t(9963);const a=(0,i._)("h1",null,"Users",-1),l=(0,i.Uk)("Filter:  ");function o(e,s,t,o,n,d){const m=(0,i.up)("data-table");return(0,i.wg)(),(0,i.iD)("div",null,[a,(0,i.Wm)(m,{fields:n.fields,data:d.getUsers,sort:o.sort,"onUpdate:sort":s[1]||(s[1]=e=>o.sort=e),onRowClick:d.goToUser,"row-class":"cursor-pointer",ref:"dataTable",paginated:""},{header:(0,i.w5)((()=>[(0,i._)("div",null,[l,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>o.filter=e),placeholder:"name, email"},null,512),[[r.nr,o.filter]])])])),_:1},8,["fields","data","sort","onRowClick"])])}var n=t(9028),d=t(9183),m=t(2790),u={name:"ComponentName",props:{},data(){return{users:[],fields:[{name:"id",type:Number,sortable:!0},{name:"person.name",label:"Name",type:String,sortable:!0},{name:"person.email",label:"Email",type:String,sortable:!0},{name:"roles",label:"System Roles",type:String,sortable:!1,resolveValue(e){return e.roles.map((e=>e.display_name)).join(", ")}},{name:"permissions",label:"+ Permissions",type:String,sortable:!1,resolveValue(e){return e.permissions.map((e=>e.display_name)).join(", ")},class:"text-xs"}]}},computed:{filteredUsers(){if(!this.filter)return this.users;const e=new RegExp(`.*${this.filter}.*`,"i");return this.users.filter((s=>s.person.name.match(e)||s.person.email.match(e)))}},watch:{filter:{immediate:!0,handler(){this.triggerSearch&&this.triggerSearch()}},sort:{immediate:!0,handler(){this.triggerSearch&&this.triggerSearch()}}},methods:{async getUsers(e,s,t,i){const r={page:e,page_size:s,"sort[field]":t.field.name,"sort[dir]":t.desc?"DESC":"ASC","where[filterString]":this.filter,with:["roles","permissions"],paginated:!0};console.log({params:r});const a=await n.hi.get("/api/users",{params:r}).then((e=>e.data));return i(a.meta.total),a.data},goToUser(e){this.$router.push({name:"UserDetail",params:{id:e.id}})}},setup(){const{sort:e,filter:s}=(0,m.Z)({field:"person.name",desc:!1});return{sort:e,filter:s}},created(){this.triggerSearch=(0,d.Z)((()=>this.$refs.dataTable.getItems()),500)}},c=t(3744);const h=(0,c.Z)(u,[["render",o]]);var p=h}}]);
//# sourceMappingURL=user-management.c18013dd.js.map