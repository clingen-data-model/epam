(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c22d8"],{"48ca":function(t,e,r){"use strict";r.r(e);var c=r("7a23");function i(t,e,r,i,n,u){var o=Object(c["z"])("login-form"),d=Object(c["z"])("card");return Object(c["r"])(),Object(c["e"])(d,{title:"Login",class:"w-1/2 mx-auto"},{default:Object(c["K"])((function(){return[Object(c["h"])(o,{onAuthenticated:u.redirect},null,8,["onAuthenticated"])]})),_:1})}var n=r("5530"),u=r("61b1"),o=r("5502"),d={name:"LoginPage",components:{LoginForm:u["a"]},computed:Object(n["a"])({},Object(o["b"])(["isAuthed"])),watch:{isAuthed:function(){this.redirectIfAuthed()}},methods:{redirect:function(){var t="home";this.$route.query&&this.$route.query.redirect&&(t=this.$route.query.redirect),this.$router.push({name:t})},redirectIfAuthed:function(){this.isAuthed&&this.redirect()}},mounted:function(){this.redirectIfAuthed()}};d.render=i;e["default"]=d}}]);
//# sourceMappingURL=chunk-2d0c22d8.d4e98dbd.js.map