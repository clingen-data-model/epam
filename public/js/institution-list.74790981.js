(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["institution-list"],{5257:function(e,t,n){"use strict";var o=n("5530"),r=(n("caad"),n("2532"),n("b64b"),n("ac1f"),n("5319"),n("4de4"),n("d3b7"),n("6c02")),a=n("7a23");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(r["d"])(),n=Object(r["c"])();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});var i=Object(a["computed"])({immediate:!0,get:function(){return Object.keys(n.query).includes("sort-field")?{field:n.query["sort-field"],desc:Boolean(parseInt(n.query["sort-desc"]))}:e},set:function(e){var r={"sort-field":e.field,"sort-desc":e.desc?1:0},a=Object(o["a"])(Object(o["a"])({},n.query),r);t.replace({path:n.path,query:a})}}),c=Object(a["computed"])({set:function(e){var r=n.query,a=n.path,i=Object(o["a"])({},r);e?i=Object(o["a"])(Object(o["a"])({},r),{filter:e}):delete i.filter,t.replace({path:a,query:i})},get:function(){return n.query.filter},immediate:!0});return{sort:i,filter:c}}},d360:function(e,t,n){"use strict";n.r(t);n("4e82"),n("4de4"),n("d3b7"),n("b0c0");var o=n("7a23"),r=Object(o["createElementVNode"])("h1",null,"Institutions",-1),a=Object(o["createTextVNode"])(" Filter: "),i=Object(o["createElementVNode"])("button",{class:"btn btn-xs"},"…",-1),c=Object(o["createTextVNode"])("Edit"),l=Object(o["createTextVNode"])("Approve"),u=Object(o["createTextVNode"])("Merge into another");function d(e,t,n,d,s,b){var m=Object(o["resolveComponent"])("dropdown-item"),p=Object(o["resolveComponent"])("dropdown-menu"),f=Object(o["resolveComponent"])("data-table"),h=Object(o["resolveComponent"])("institution-approval-form"),O=Object(o["resolveComponent"])("modal-dialog"),j=Object(o["resolveComponent"])("institution-update-form"),v=Object(o["resolveComponent"])("institution-merge-form");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[r,Object(o["createVNode"])(f,{paginated:"",data:b.filteredItems,fields:s.fields,sort:d.sort,"onUpdate:sort":t[1]||(t[1]=function(e){return d.sort=e})},{header:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("label",null,[a,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return d.filter=e})},null,512),[[o["vModelText"],d.filter]])])]})),"cell-actions":Object(o["withCtx"])((function(e){var t=e.item;return[Object(o["createVNode"])(p,{"hide-cheveron":""},{label:Object(o["withCtx"])((function(){return[i]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(m,{onClick:function(e){return b.edit(t)}},{default:Object(o["withCtx"])((function(){return[c]})),_:2},1032,["onClick"]),Object(o["createVNode"])(m,{onClick:function(e){return b.initApprove(t)}},{default:Object(o["withCtx"])((function(){return[l]})),_:2},1032,["onClick"]),Object(o["createVNode"])(m,{onClick:function(e){return b.initMerge(t)}},{default:Object(o["withCtx"])((function(){return[u]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:1},8,["data","fields","sort"]),(Object(o["openBlock"])(),Object(o["createBlock"])(o["Teleport"],{to:"body"},[Object(o["createVNode"])(O,{modelValue:s.showApproveDialog,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.showApproveDialog=e}),title:"Approve ".concat(s.currentItem.name)},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,{modelValue:s.currentItem,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.currentItem=e}),onSaved:b.handleSaved,onCanceled:b.handleCancel},null,8,["modelValue","onSaved","onCanceled"])]})),_:1},8,["modelValue","title"]),Object(o["createVNode"])(O,{modelValue:s.showEditDialog,"onUpdate:modelValue":t[5]||(t[5]=function(e){return s.showEditDialog=e}),title:"Edit ".concat(s.currentItem.name)},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{modelValue:s.currentItem,"onUpdate:modelValue":t[4]||(t[4]=function(e){return s.currentItem=e}),onSaved:b.handleSaved,onCanceled:b.handleCancel},null,8,["modelValue","onSaved","onCanceled"])]})),_:1},8,["modelValue","title"]),Object(o["createVNode"])(O,{modelValue:s.showMergeDialog,"onUpdate:modelValue":t[7]||(t[7]=function(e){return s.showMergeDialog=e}),title:"Merge Institutions"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(v,{obsoletes:[s.currentItem],onSaved:b.handleMerge,onCanceled:t[6]||(t[6]=function(e){return s.showMergeDialog=!1})},null,8,["obsoletes","onSaved"])]})),_:1},8,["modelValue"])]))])}var s=n("5530"),b=n("1da1"),m=(n("96cf"),n("a9e3"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("466d"),n("c740"),n("5257")),p=n("ba66"),f=Object(o["createTextVNode"])(" Are you sure you want to approve this institution? ");function h(e,t,n,r,a,i){var c=Object(o["resolveComponent"])("dictionary-row"),l=Object(o["resolveComponent"])("button-row");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[f,Object(o["createVNode"])(c,{label:"Name"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.modelValue.name),1)]})),_:1}),Object(o["createVNode"])(c,{label:"Abbreviation"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.modelValue.abbreviation||"--"),1)]})),_:1}),Object(o["createVNode"])(c,{label:"URL"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.modelValue.url||"--"),1)]})),_:1}),Object(o["createVNode"])(c,{label:"Country"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.modelValue.country?n.modelValue.country.name:"--"),1)]})),_:1}),Object(o["createVNode"])(l,{"submit-text":"Approve",onSubmitted:i.approve,onCancel:i.cancelApproval},null,8,["onSubmitted","onCancel"])])}var O={name:"ComponentName",props:{modelValue:{type:Object,required:!0}},emits:["saved","canceled","update:modelValue"],methods:{approve:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["f"])(e.modelValue);case 2:n=t.sent,e.$emit("update:modelValue",n),e.$emit("saved",n);case 5:case"end":return t.stop()}}),t)})))()},cancelApproval:function(){this.$emit("canceled")}}},j=n("6b0d"),v=n.n(j);const V=v()(O,[["render",h]]);var w=V;function g(e,t,n,r,a,i){var c=Object(o["resolveComponent"])("data-form"),l=Object(o["resolveComponent"])("button-row");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(c,{fields:r.fields,errors:a.errors,modelValue:r.workingCopy,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.workingCopy=e})},null,8,["fields","errors","modelValue"]),Object(o["createVNode"])(l,{"submit-text":"Save",onSubmitted:i.save,onCancel:i.cancel},null,8,["onSubmitted","onCancel"])])}var C=n("502e"),y=n("db04"),I={name:"InstitutionCreateForm",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","saved","canceled"],data:function(){return{errors:{}}},methods:{save:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.initErrors(),t.next=4,e.updateInstitution(e.workingCopy);case 4:n=t.sent,e.$emit("update:modelValue",n),e.$emit("saved",n),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),Object(y["b"])(t.t0)&&(e.errors=t.t0.response.data.errors);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},cancel:function(){this.$emit("canceled"),this.initInstitution()},initErrors:function(){this.errors={}}},setup:function(e,t){var n=Object(C["b"])(e,t),o=n.workingCopy;return{fields:p["c"],getCountries:p["e"],countries:p["a"],updateInstitution:p["h"],workingCopy:o}},mounted:function(){this.getCountries()}};const x=v()(I,[["render",g]]);var N=x,k=Object(o["createElementVNode"])("p",{class:"mb-8"},[Object(o["createTextVNode"])(" Merging institutions will do the following: "),Object(o["createElementVNode"])("ol",{class:"list-decimal ml-6"},[Object(o["createElementVNode"])("li",null,"Transfer all people with the obsolete institution to the authoritiative institution."),Object(o["createElementVNode"])("li",null,"Delete the obsolete institution.")])],-1),D=Object(o["createTextVNode"])(" Merge "),S=Object(o["createTextVNode"])("(Obsolete institution that will be deleted)"),E=Object(o["createTextVNode"])("Into "),M=Object(o["createTextVNode"])("(Authoritative institution)");function A(e,t,n,r,a,i){var c=Object(o["resolveComponent"])("note"),l=Object(o["resolveComponent"])("institution-search-select"),u=Object(o["resolveComponent"])("input-row"),d=Object(o["resolveComponent"])("button-row");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[k,Object(o["createVNode"])(u,{label:"Merge",vertical:""},{label:Object(o["withCtx"])((function(){return[D,Object(o["createVNode"])(c,{class:"inline-block"},{default:Object(o["withCtx"])((function(){return[S]})),_:1})]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{"model-value":a.obsoleteIds,"onUpdate:modelValue":i.handleObsoleteUpdate,"allow-add":!1},null,8,["model-value","onUpdate:modelValue"])]})),_:1}),Object(o["createVNode"])(u,{label:"Into",errors:a.errors.authority_id,vertical:""},{label:Object(o["withCtx"])((function(){return[E,Object(o["createVNode"])(c,{class:"inline"},{default:Object(o["withCtx"])((function(){return[M]})),_:1})]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{modelValue:a.authorityId,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.authorityId=e}),"allow-add":!1},null,8,["modelValue"])]})),_:1},8,["errors"]),Object(o["createVNode"])(d,{"submit-text":"Merge",onSubmitted:i.commitMerge,onCanceled:i.cancelMerge},null,8,["onSubmitted","onCanceled"])])}n("d81d");var _={name:"InstitutionMergeForm",props:{authority:{type:Object,required:!1},obsoletes:{type:Array,default:function(){return[]}}},emits:["saved","canceled"],data:function(){return{authorityId:null,obsoleteIds:[],errors:{}}},watch:{authority:{immediate:!0,handler:function(e){e&&(this.authorityId=e.id)}},obsoletes:{immediate:!0,deep:!0,handler:function(e){this.obsoleteIds=e.map((function(e){return e.id}))}}},methods:{handleObsoleteUpdate:function(e){this.obsoleteIds=e?[e]:[]},commitMerge:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.errors={},t.next=4,Object(p["g"])(e.authorityId,e.obsoleteIds);case 4:e.authorityId=null,e.obsoleteIds=[],e.$emit("saved"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),Object(y["b"])(t.t0)&&(e.errors=t.t0.response.data.errors);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},cancelMerge:function(){this.authorityId=null,this.obsoleteIds=[],this.$emit("canceled")}}};const T=v()(_,[["render",A]]);var U=T,B={name:"InstitutionList",components:{InstitutionUpdateForm:N,InstitutionApprovalForm:w,InstitutionMergeForm:U},data:function(){return{items:[],fields:[{name:"id",label:"ID",type:Number,sortable:!0},{name:"name",type:String,sortable:!0},{name:"abbreviation",type:String,sortable:!0},{name:"country.name",label:"Country",type:String,sortable:!0},{name:"people_count",label:"# People",type:Number,sortable:!0},{name:"approved",type:Boolean,sortable:!0,resolveValue:function(e){return e.approved?"Approved":null},resolveSort:function(e){return e.approved}},{name:"actions",label:"",sortable:!1}],currentItem:{country:{}},showApproveDialog:!1,showEditDialog:!1,showMergeDialog:!1}},computed:{filteredItems:function(){if(!this.filter)return this.items;var e=new RegExp(".*".concat(this.filter,".*"),"i");return this.items.filter((function(t){return t.name.match(e)||t.abbreviation&&t.abbreviation.match(e)||t.country&&t.country.name.match(e)}))}},methods:{edit:function(e){this.showEditDialog=!0,this.currentItem=e},initApprove:function(e){this.showApproveDialog=!0,this.currentItem=e},initMerge:function(e){this.currentItem=e,this.showMergeDialog=!0},getInstitutions:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["d"])();case 2:e.items=t.sent;case 3:case"end":return t.stop()}}),t)})))()},handleSaved:function(){this.showApproveDialog=!1,this.showEditDialog=!1,this.updateItem(),this.currentItem={country:{}}},handleCancel:function(){this.showApproveDialog=!1,this.showEditDialog=!1,this.updateItem(),this.currentItem={country:{}}},handleMerge:function(){this.getInstitutions(),this.showMergeDialog=!1},updateItem:function(){var e=this;if(this.currentItem.id){var t=this.items.findIndex((function(t){return t.id==e.currentItem.id}));t>-1&&(this.items[t]=Object(s["a"])({},this.currentItem))}}},setup:function(){var e=Object(m["a"])({field:"name",desc:!1}),t=e.sort,n=e.filter;return{sort:t,filter:n}},mounted:function(){this.getInstitutions()}};const q=v()(B,[["render",d]]);t["default"]=q}}]);
//# sourceMappingURL=institution-list.74790981.js.map