(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reset-password"],{"0813":function(e,o,t){"use strict";t.r(o);var s=t("7a23"),r={key:0,class:"p-2 rounded border border-green-300 bg-green-100 text-green-700"},n={key:1};function a(e,o,t,a,c,i){var l=Object(s["resolveComponent"])("input-row"),u=Object(s["resolveComponent"])("button-row"),d=Object(s["resolveComponent"])("card");return Object(s["openBlock"])(),Object(s["createBlock"])(d,{title:"Reset Your Password",class:"w-2/3 mx-auto"},{default:Object(s["withCtx"])((function(){return[c.successMessage?(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",r,Object(s["toDisplayString"])(c.successMessage),1)):(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",n,[Object(s["createVNode"])(l,{modelValue:c.email,"onUpdate:modelValue":o[0]||(o[0]=function(e){return c.email=e}),type:"text",label:"Email",errors:c.errors.email},null,8,["modelValue","errors"]),i.hasToken?(Object(s["openBlock"])(),Object(s["createBlock"])(l,{key:0,modelValue:c.password,"onUpdate:modelValue":o[1]||(o[1]=function(e){return c.password=e}),type:"password",label:"New password",errors:c.errors.password},null,8,["modelValue","errors"])):Object(s["createCommentVNode"])("",!0),i.hasToken?(Object(s["openBlock"])(),Object(s["createBlock"])(l,{key:1,modelValue:c.password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=function(e){return c.password_confirmation=e}),type:"password",label:"Confirm password",errors:c.errors.password_confirmation},null,8,["modelValue","errors"])):Object(s["createCommentVNode"])("",!0),Object(s["createVNode"])(u,{"show-cancel":!1,"submit-text":"Send Password Reset Link",onSubmitClicked:i.submitReset},null,8,["onSubmitClicked"])]))]})),_:1})}t("ac1f"),t("5319");var c=t("f96b"),i=t("033d"),l={props:{},data:function(){return{email:null,errors:{},password:null,password_confirmation:null,successMessage:null}},computed:{hasToken:function(){return Boolean(this.$route.query.token)}},methods:{getResetLink:function(){var e=this;c["a"].post("/api/send-reset-password-link",{email:this.email}).then((function(o){e.successMessage=o.data.status})).catch((function(o){Object(i["a"])(o)&&(e.errors=o.response.data.errors)}))},submitNewPassword:function(){var e=this,o={token:this.$route.query.token,email:this.email,password:this.password,password_confirmation:this.password_confirmation};c["a"].post("/api/reset-password",o).then((function(){e.$store.dispatch("login",{email:e.email,password:e.password}).then((function(){e.$store.dispatch("getCurrentUser"),e.$router.replace("/")}))})).catch((function(o){Object(i["a"])(o)&&(e.errors=o.response.data.errors)}))},submitReset:function(){this.hasToken?this.submitNewPassword():this.getResetLink()}}},u=t("6b0d"),d=t.n(u);const p=d()(l,[["render",a]]);o["default"]=p}}]);
//# sourceMappingURL=reset-password.ed8d5483.js.map