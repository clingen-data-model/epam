"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[109,782],{3970:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a=t(6252);function u(e,n,t,u,r,i){const p=(0,a.up)("annual-update-form");return(0,a.wg)(),(0,a.iD)("div",null,[r.annualReview.expert_panel.group.uuid?((0,a.wg)(),(0,a.j4)(p,{key:0,uuid:r.annualReview.expert_panel.group.uuid},null,8,["uuid"])):(0,a.kq)("",!0)])}var r=t(9028),i=t(630),p={name:"AnnualUpdateDetail",components:{AnnualUpdateForm:i["default"]},props:{id:{required:!0,type:String}},data(){return{annualReview:{data:{},submitter:{},expert_panel:{group:{members:[]}},window:{}},errors:{}}},computed:{expertPanel(){return this.annualReview.expert_panel||{}},window(){return this.annualReview.window||{}},submitter(){return this.submitter?this.submitter.person:{}}},methods:{async getAnnualUpdate(){this.annualReview=await r.hi.get(`/api/annual-updates/${this.id}`).then((e=>e.data))}},async mounted(){await this.getAnnualUpdate()}},d=t(3744);const s=(0,d.Z)(p,[["render",u]]);var l=s}}]);
//# sourceMappingURL=109.a17ea77d.js.map