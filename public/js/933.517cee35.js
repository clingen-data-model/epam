"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[933,782],{8899:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(6252);function u(e,n,t,u,i,r){const d=(0,a.up)("AnnualUpdateForm");return(0,a.wg)(),(0,a.iD)("div",null,[i.annualReview.expert_panel.group.uuid?((0,a.wg)(),(0,a.j4)(d,{key:0,uuid:i.annualReview.expert_panel.group.uuid,id:t.id},null,8,["uuid","id"])):(0,a.kq)("",!0)])}var i=t(9028),r=t(1045),d={name:"AnnualUpdateDetail",components:{AnnualUpdateForm:r["default"]},props:{id:{required:!0,type:String}},data(){return{annualReview:{data:{},submitter:{},expert_panel:{group:{members:[]}},window:{}},errors:{}}},computed:{expertPanel(){return this.annualReview.expert_panel||{}},window(){return this.annualReview.window||{}},submitter(){return this.submitter?this.submitter.person:{}}},methods:{async getAnnualUpdate(){console.log(`AnnualUpdateDetail.getAnnualUpdate: ${this.id}`),this.annualReview=await i.hi.get(`/api/annual-updates/${this.id}`).then((e=>e.data))}},async mounted(){await this.getAnnualUpdate()}},p=t(3744);const l=(0,p.Z)(d,[["render",u]]);var s=l}}]);
//# sourceMappingURL=933.517cee35.js.map