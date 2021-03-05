(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reset-password"],{"033d":function(e,r,t){"use strict";r["a"]=function(e){return e.response&&422==e.response.status&&e.response.data.errors}},"0813":function(e,r,t){"use strict";t.r(r);var s=t("7a23"),n={key:0,class:"p-2 rounded border border-green-300 bg-green-100 text-green-700"},a={key:1};function o(e,r,t,o,i,c){var u=Object(s["z"])("input-row"),l=Object(s["z"])("button-row"),d=Object(s["z"])("card");return Object(s["r"])(),Object(s["e"])(d,{title:"Reset Your Password",class:"w-2/3 mx-auto"},{default:Object(s["K"])((function(){return[i.successMessage?(Object(s["r"])(),Object(s["e"])("div",n,Object(s["C"])(i.successMessage),1)):(Object(s["r"])(),Object(s["e"])("div",a,[Object(s["h"])(u,{modelValue:i.email,"onUpdate:modelValue":r[1]||(r[1]=function(e){return i.email=e}),type:"text",label:"Email",errors:i.errors.email},null,8,["modelValue","errors"]),c.hasToken?(Object(s["r"])(),Object(s["e"])(u,{key:0,modelValue:i.password,"onUpdate:modelValue":r[2]||(r[2]=function(e){return i.password=e}),type:"password",label:"New password",errors:i.errors.password},null,8,["modelValue","errors"])):Object(s["f"])("",!0),c.hasToken?(Object(s["r"])(),Object(s["e"])(u,{key:1,modelValue:i.password_confirmation,"onUpdate:modelValue":r[3]||(r[3]=function(e){return i.password_confirmation=e}),type:"password",label:"Confirm password",errors:i.errors.password_confirmation},null,8,["modelValue","errors"])):Object(s["f"])("",!0),Object(s["h"])(l,{"show-cancel":!1,"submit-text":"Send Password Reset Link",onSubmitClicked:c.submitReset},null,8,["onSubmitClicked"])]))]})),_:1})}t("ac1f"),t("5319");var i=t("f96b"),c=t("033d"),u={props:{},data:function(){return{email:null,errors:{},password:null,password_confirmation:null,successMessage:null}},computed:{hasToken:function(){return Boolean(this.$route.query.token)}},methods:{getResetLink:function(){var e=this;i["a"].post("/api/send-reset-password-link",{email:this.email}).then((function(r){e.successMessage=r.data.status})).catch((function(r){Object(c["a"])(r)&&(e.errors=r.response.data.errors)}))},submitNewPassword:function(){var e=this,r={token:this.$route.query.token,email:this.email,password:this.password,password_confirmation:this.password_confirmation};i["a"].post("/api/reset-password",r).then((function(){e.$store.dispatch("login",{email:e.email,password:e.password}).then((function(){e.$store.dispatch("getCurrentUser"),e.$router.replace("/")}))})).catch((function(r){Object(c["a"])(r)&&(e.errors=r.response.data.errors)}))},submitReset:function(){this.hasToken?this.submitNewPassword():this.getResetLink()}}};u.render=o;r["default"]=u},"0cb2":function(e,r,t){var s=t("7b0b"),n=Math.floor,a="".replace,o=/\$([$&'`]|\d\d?|<[^>]*>)/g,i=/\$([$&'`]|\d\d?)/g;e.exports=function(e,r,t,c,u,l){var d=t+e.length,p=c.length,f=i;return void 0!==u&&(u=s(u),f=o),a.call(l,f,(function(s,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,t);case"'":return r.slice(d);case"<":o=u[a.slice(1,-1)];break;default:var i=+a;if(0===i)return s;if(i>p){var l=n(i/10);return 0===l?s:l<=p?void 0===c[l-1]?a.charAt(1):c[l-1]+a.charAt(1):s}o=c[i-1]}return void 0===o?"":o}))}},5319:function(e,r,t){"use strict";var s=t("d784"),n=t("825a"),a=t("50c4"),o=t("a691"),i=t("1d80"),c=t("8aa5"),u=t("0cb2"),l=t("14c3"),d=Math.max,p=Math.min,f=function(e){return void 0===e?e:String(e)};s("replace",2,(function(e,r,t,s){var h=s.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=s.REPLACE_KEEPS_$0,w=h?"$":"$0";return[function(t,s){var n=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n,s):r.call(String(n),t,s)},function(e,s){if(!h&&b||"string"===typeof s&&-1===s.indexOf(w)){var i=t(r,e,this,s);if(i.done)return i.value}var m=n(e),v=String(this),g="function"===typeof s;g||(s=String(s));var k=m.global;if(k){var O=m.unicode;m.lastIndex=0}var j=[];while(1){var S=l(m,v);if(null===S)break;if(j.push(S),!k)break;var $=String(S[0]);""===$&&(m.lastIndex=c(v,a(m.lastIndex),O))}for(var E="",_=0,y=0;y<j.length;y++){S=j[y];for(var x=String(S[0]),R=d(p(o(S.index),v.length),0),P=[],V=1;V<S.length;V++)P.push(f(S[V]));var C=S.groups;if(g){var T=[x].concat(P,R,v);void 0!==C&&T.push(C);var U=String(s.apply(void 0,T))}else U=u(x,v,R,P,C,s);R>=_&&(E+=v.slice(_,R)+U,_=R+x.length)}return E+v.slice(_)}]}))}}]);
//# sourceMappingURL=reset-password.f4ba3c4b.js.map