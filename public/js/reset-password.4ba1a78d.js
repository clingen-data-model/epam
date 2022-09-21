"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[564],{5219:function(e,s,r){r.r(s),r.d(s,{default:function(){return w}});var t=r(6252),o=r(3577);const a={key:0,class:"p-2 rounded border border-green-300 bg-green-100 text-green-700"},i={key:1};function n(e,s,r,n,l,u){const d=(0,t.up)("input-row"),p=(0,t.up)("button-row"),m=(0,t.up)("card");return(0,t.wg)(),(0,t.j4)(m,{title:"Reset Your Password",class:"w-2/3 mx-auto"},{default:(0,t.w5)((()=>[l.successMessage?((0,t.wg)(),(0,t.iD)("div",a,(0,o.zw)(l.successMessage),1)):((0,t.wg)(),(0,t.iD)("div",i,[(0,t.Wm)(d,{modelValue:l.email,"onUpdate:modelValue":s[0]||(s[0]=e=>l.email=e),type:"text",label:"Email",errors:l.errors.email},null,8,["modelValue","errors"]),u.hasToken?((0,t.wg)(),(0,t.j4)(d,{key:0,modelValue:l.password,"onUpdate:modelValue":s[1]||(s[1]=e=>l.password=e),type:"password",label:"New password",errors:l.errors.password},null,8,["modelValue","errors"])):(0,t.kq)("",!0),u.hasToken?((0,t.wg)(),(0,t.j4)(d,{key:1,modelValue:l.password_confirmation,"onUpdate:modelValue":s[2]||(s[2]=e=>l.password_confirmation=e),type:"password",label:"Confirm password",errors:l.errors.password_confirmation},null,8,["modelValue","errors"])):(0,t.kq)("",!0),(0,t.Wm)(p,{"show-cancel":!1,"submit-text":u.submitText,onSubmitClicked:u.submitReset},null,8,["submit-text","onSubmitClicked"])]))])),_:1})}var l=r(812),u=r(9700),d={props:{},data(){return{email:null,errors:{},password:null,password_confirmation:null,successMessage:null}},computed:{hasToken(){return Boolean(this.$route.query.token)},submitText(){return this.hasToken?"Reset Password":"Send Password Reset Link"}},methods:{getResetLink(){l.Z.post("/api/send-reset-password-link",{email:this.email}).then((e=>{this.successMessage=e.data.status})).catch((e=>{(0,u.Z)(e)&&(this.errors=e.response.data.errors)}))},submitNewPassword(){const e={token:this.$route.query.token,email:this.email,password:this.password,password_confirmation:this.password_confirmation};l.Z.post("/api/reset-password",e).then((()=>{this.$store.dispatch("login",{email:this.email,password:this.password}).then((()=>{this.$store.dispatch("getCurrentUser"),this.$router.replace("/")}))})).catch((e=>{(0,u.Z)(e)&&(this.errors=e.response.data.errors)}))},submitReset(){this.hasToken?this.submitNewPassword():this.getResetLink()}}},p=r(3744);const m=(0,p.Z)(d,[["render",n]]);var w=m}}]);
//# sourceMappingURL=reset-password.4ba1a78d.js.map