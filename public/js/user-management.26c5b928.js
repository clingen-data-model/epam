(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user-management"],{5257:function(e,t,r){"use strict";var n=r("5530"),s=(r("caad"),r("2532"),r("b64b"),r("ac1f"),r("5319"),r("4de4"),r("d3b7"),r("6c02")),o=r("7a23");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(s["d"])(),r=Object(s["c"])();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});var i=Object(o["computed"])({immediate:!0,get:function(){return Object.keys(r.query).includes("sort-field")?{field:r.query["sort-field"],desc:Boolean(parseInt(r.query["sort-desc"]))}:e},set:function(e){var s={"sort-field":e.field,"sort-desc":e.desc?1:0},o=Object(n["a"])(Object(n["a"])({},r.query),s);t.replace({path:r.path,query:o})}}),a=Object(o["computed"])({set:function(e){var s=r.query,o=r.path,i=Object(n["a"])({},s);e?i=Object(n["a"])(Object(n["a"])({},s),{filter:e}):delete i.filter,t.replace({path:o,query:i})},get:function(){return r.query.filter},immediate:!0});return{sort:i,filter:a}}},"6c2d":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("caad"),r("2532");var n=r("7a23"),s=Object(n["createElementVNode"])("h2",{class:"mt-8 mb-2"},"Memberships",-1),o=Object(n["createElementVNode"])("h3",{class:"border-b mb-1"},"Roles",-1),i={class:"flex flex-wrap"},a=Object(n["createElementVNode"])("h3",{class:"border-b mb-1"},"Permissions",-1),c={class:"flex flex-wrap"},l={class:"px-2 py-1 mb-2 mt-4 bg-gray-100 border relative text-xs"},u={class:"flex space-x-2"},d=Object(n["createElementVNode"])("strong",null,"Legend: ",-1),m=Object(n["createElementVNode"])("div",{class:"absolute top-0 left-0 w-full h-full bg-pink-500 opacity-0"}," ",-1);function b(e,t,r,b,p,f){var h=Object(n["resolveComponent"])("object-dictionary"),j=Object(n["resolveComponent"])("data-table"),O=Object(n["resolveComponent"])("checkbox"),v=Object(n["resolveComponent"])("button-row"),k=Object(n["resolveComponent"])("modal-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("h1",null,Object(n["toDisplayString"])(p.user.person.name||"loading..."),1),Object(n["createVNode"])(h,{obj:f.userInfo},null,8,["obj"]),f.canEditUser?(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:0,class:"btn btn-xs",onClick:t[0]||(t[0]=function(){return f.initEdit&&f.initEdit.apply(f,arguments)})},"Edit system roles & permissions")):Object(n["createCommentVNode"])("",!0),s,Object(n["createVNode"])(j,{fields:p.membershipFields,data:f.membershipInfo},null,8,["fields","data"]),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(k,{modelValue:p.showEditForm,"onUpdate:modelValue":t[3]||(t[3]=function(e){return p.showEditForm=e}),title:"Edit System Roles & Permissions"},{default:Object(n["withCtx"])((function(){return[o,Object(n["createElementVNode"])("ul",i,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(f.availableSystemRoles,(function(r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:r.id,class:"w-1/3 h-12"},[Object(n["createVNode"])(O,{modelValue:p.checkedRoles,"onUpdate:modelValue":t[1]||(t[1]=function(e){return p.checkedRoles=e}),label:e.titleCase(r.display_name),value:r.id},null,8,["modelValue","label","value"])])})),128))]),a,Object(n["createElementVNode"])("ul",c,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(f.availableSystemPermissions,(function(r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:r.id,class:"w-1/3 h-12"},[f.checkedRolePermissionIds.includes(r.id)?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0,modelValue:!0,disabled:!0,label:r.display_name},null,8,["label"])):(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:1,modelValue:p.checkedPermissions,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.checkedPermissions=e}),label:e.titleCase(r.display_name),value:r.id},null,8,["modelValue","label","value"]))])})),128))]),Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",u,[d,Object(n["createVNode"])(O,{label:"Not granted"}),Object(n["createVNode"])(O,{value:1,modelValue:!0,label:"Granted"}),Object(n["createVNode"])(O,{value:2,modelValue:!0,disabled:"",label:"Granted w/ role"})]),m]),Object(n["createVNode"])(v,{"submit-text":"Save",onSubmitted:f.saveRolesAndPermissions,onCanceled:f.closeEditForm},null,8,["onSubmitted","onCanceled"])]})),_:1},8,["modelValue"])]))])}var p=r("1da1"),f=r("2909"),h=(r("96cf"),r("07ac"),r("a15b"),r("d81d"),r("0481"),r("4069"),r("4de4"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("2125")),j=r("db04"),O=r("4a91"),v={name:"UserDetail",props:{id:{require:!0}},data:function(){return{user:new h["a"],membershipFields:[{name:"id"},{name:"group"},{name:"roles"},{name:"extra_permissions"}],showEditForm:!1,systemRoles:[],systemPermissions:Object.values(O.system.permissions),configs:O,checkedRoles:[],checkedPermissions:[]}},computed:{userInfo:function(){return{name:this.user.person.name,email:this.user.person.email,roles:this.user.roles.map((function(e){return e.name})).join(", "),additional_permissions:this.user.permissions.map((function(e){return e.name})).join(", "),registered:this.formatDate(this.user.created_at)}},membershipInfo:function(){return this.user.person.memberships.map((function(e){return{id:e.id,group:e.group.expert_panel.display_name,roles:e.roles.map((function(e){return e.name})).join(", "),extra_permissions:e.permissions.map((function(e){return e.name})).join(", ")||"",is_contact:e.is_contact?"Yes":"No"}}))},checkedRolePermissionIds:function(){var e=this;if(!this.systemRoles)return[];var t=this.systemRoles.filter((function(t){return e.checkedRoles.includes(t.id)})).map((function(e){return e.permissions})).flat().map((function(e){return e.id}));return Object(f["a"])(new Set(t))},availableSystemRoles:function(){var e=this;return this.systemRoles.filter((function(t){return!!e.hasRole("super-user")||!!e.hasRole("super-admin")&&"super-user"!==t.name}))},availableSystemPermissions:function(){var e=this;return this.systemPermissions.filter((function(t){return!!e.hasRole("super-user")||!!e.hasRole("super-admin")&&"logs-view"!==t.name}))},canEditUser:function(){var e=this.$store.getters.currentUser;return!!this.hasPermission("users-manage")&&(!!this.currentUserIsUser||(!!e.hasRole("super-user")||!(!e.hasRole("super-admin")||!this.user.hasRole("admin"))))},currentUserIsUser:function(){return this.$store.getters.currentUser.id==this.user.id}},watch:{id:{immediate:!0,handler:function(){this.getUser()}}},methods:{getUser:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j["a"].get("/api/users/".concat(e.id)).then((function(e){return new h["a"](e.data)}));case 2:e.user=t.sent,e.resetCheckedRolesAndPermissions();case 4:case"end":return t.stop()}}),t)})))()},resetCheckedRolesAndPermissions:function(){this.checkedRoles=this.user.roles.map((function(e){return e.id})),this.checkedPermissions=this.user.permissions.map((function(e){return e.id}))},getSystemRoles:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j["a"].get("/api/roles").then((function(e){return e.data}));case 2:e.systemRoles=t.sent;case 3:case"end":return t.stop()}}),t)})))()},initEdit:function(){this.showEditForm=!0},saveRolesAndPermissions:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={role_ids:e.checkedRoles,permission_ids:e.checkedPermissions},t.next=3,j["a"].put("/api/users/".concat(e.user.id,"/roles-and-permissions"),r);case 3:e.showEditForm=!1,e.getUser();case 5:case"end":return t.stop()}}),t)})))()},closeEditForm:function(){this.resetCheckedRolesAndPermissions(),this.showEditForm=!1}},mounted:function(){this.getSystemRoles()}},k=r("6b0d"),g=r.n(k);const y=g()(v,[["render",b]]);t["default"]=y},a71d:function(e,t,r){"use strict";r.r(t);r("4e82"),r("4de4"),r("d3b7");var n=r("7a23"),s=Object(n["createElementVNode"])("h1",null,"Users",-1),o=Object(n["createTextVNode"])("Filter:  ");function i(e,t,r,i,a,c){var l=Object(n["resolveComponent"])("data-table");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[s,Object(n["createVNode"])(l,{fields:a.fields,data:c.filteredUsers,sort:i.sort,"onUpdate:sort":t[1]||(t[1]=function(e){return i.sort=e}),onRowClick:c.goToUser,"row-class":"cursor-pointer",paginated:""},{header:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[o,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.filter=e}),placeholder:"name, email"},null,512),[[n["vModelText"],i.filter]])])]})),_:1},8,["fields","data","sort","onRowClick"])])}var a=r("1da1"),c=(r("96cf"),r("a9e3"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("466d"),r("b0c0"),r("db04")),l=r("5257"),u={name:"ComponentName",props:{},data:function(){return{users:[],fields:[{name:"id",type:Number,sortable:!0},{name:"person.name",label:"Name",type:String,sortable:!0},{name:"person.email",label:"Email",type:String,sortable:!0},{name:"actions",sortable:!1,label:""}]}},computed:{filteredUsers:function(){if(!this.filter)return this.users;var e=new RegExp(".*".concat(this.filter,".*"),"i");return this.users.filter((function(t){return t.person.name.match(e)||t.person.email.match(e)}))}},watch:{filter:{immediate:!0,handler:function(){this.currentPage=0}},sort:{immediate:!0,handler:function(){this.currentPage=0}}},methods:{getUsers:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].get("/api/users").then((function(e){return e.data}));case 2:e.users=t.sent;case 3:case"end":return t.stop()}}),t)})))()},goToUser:function(e){this.$router.push({name:"UserDetail",params:{id:e.id}})}},setup:function(){var e=Object(l["a"])({field:"person.name",desc:!1}),t=e.sort,r=e.filter;return{sort:t,filter:r}},mounted:function(){this.getUsers()}},d=r("6b0d"),m=r.n(d);const b=m()(u,[["render",i]]);t["default"]=b}}]);
//# sourceMappingURL=user-management.26c5b928.js.map