"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[715],{9272:function(e,t,n){n.d(t,{Q3:function(){return o},ld:function(){return d},pE:function(){return l},pO:function(){return p},q1:function(){return u}});var r=n(2262),a=n(6252),i=n(812);const s=(0,r.iH)([]),o=(0,a.Fl)((()=>s.value)),l=async e=>{s.value=await i.Z.get(e).then((e=>e.data.data))},u=async(e,t)=>await i.Z.post(e,t).then((e=>(s.value.push(e.data),e.data))),d=async(e,t)=>await i.Z.put(e,t).then((e=>{const t=s.value.findIndex((t=>t.id==e.data.id));return s.value[t]=e.data,e.data})),p=async(e,t)=>await i.Z["delete"](`${e}/${t}`).then((e=>{const n=s.value.findIndex((e=>e.id==t));return s.value.splice(n,1),e}))},8887:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(6252);function a(e,t,n,a,i,s){const o=(0,r.up)("input-row"),l=(0,r.up)("step-input"),u=(0,r.up)("rich-text-editor"),d=(0,r.up)("button-row"),p=(0,r.up)("form-container");return(0,r.wg)(),(0,r.j4)(p,{class:"log-entry-form",ref:"form-container"},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{label:"Log Date",modelValue:i.newEntry.log_date,"onUpdate:modelValue":t[0]||(t[0]=e=>i.newEntry.log_date=e),errors:i.errors.log_date,type:"date",ref:"logdate"},null,8,["modelValue","errors"]),2==s.application.expert_panel_type_id?((0,r.wg)(),(0,r.j4)(l,{key:0,modelValue:i.newEntry.step,"onUpdate:modelValue":t[1]||(t[1]=e=>i.newEntry.step=e),errors:i.errors.step},null,8,["modelValue","errors"])):(0,r.kq)("",!0),(0,r.Wm)(o,{label:"Entry",errors:i.errors.entry},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:i.newEntry.entry,"onUpdate:modelValue":t[2]||(t[2]=e=>i.newEntry.entry=e)},null,8,["modelValue"])])),_:1},8,["errors"]),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r._)("button",{class:"btn",onClick:t[3]||(t[3]=(...e)=>s.cancel&&s.cancel(...e))},"Cancel"),(0,r._)("button",{class:"btn blue",onClick:t[4]||(t[4]=(...e)=>s.save&&s.save(...e))},"Save")])),_:1})])),_:1},512)}var i=n(3907),s=n(5699),o=n(703),l=n(2584),u=n(9272),d={name:"LogEntryForm",components:{StepInput:o["default"],RichTextEditor:l["default"]},props:{id:{required:!1,default:null}},data(){return{newEntry:{log_date:new Date,step:null,entry:""},errors:{}}},computed:{...(0,i.Se)({group:"groups/currentItemOrNew"}),application(){return this.group.expert_panel}},watch:{id:{immediate:!0,handler:function(){const e=this.findEntry();e&&this.syncEntry(e)}},application:{immediate:!0,handler:function(){const e=this.findEntry();e&&this.syncEntry(e)}}},methods:{findEntry(){return null===this.id?null:this.logEntries?this.logEntries.find((e=>e.id==this.id)):void 0},initNewEntry(){this.newEntry={log_date:(0,s.p6)(new Date),step:null,entry:""}},syncEntry(e){e&&(this.newEntry={id:e.id,log_date:(0,s.p6)(new Date(Date.parse(e.created_at))),step:parseInt(e.step),entry:e.description})},cancel(){this.initNewEntry(),this.$emit("canceled")},async save(){try{this.newEntry.id?(0,u.ld)(`/api/groups/${this.group.uuid}/activity-logs/${this.newEntry.id}`,this.newEntry):(0,u.q1)(`/api/groups/${this.group.uuid}/activity-logs`,this.newEntry),this.initNewEntry(),this.$emit("saved")}catch(e){if(e.response&&422==e.response.status&&e.response.data.errors)return void(this.errors=e.response.data.errors)}}},mounted(){this.$el.querySelectorAll("input")[0].focus()},setup(){return{logEntries:u.Q3}}},p=n(3744);const c=(0,p.Z)(d,[["render",a]]);var y=c}}]);
//# sourceMappingURL=log-entry-form.229aa806.js.map