(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f42b0e"],{"0d3b":function(e,t,r){var n=r("d039"),a=r("b622"),i=r("c430"),s=a("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t["delete"]("b"),r+=n+e})),i&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[s]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},1606:function(e,t,r){},"2b3d":function(e,t,r){"use strict";r("3ca3");var n,a=r("23e7"),i=r("83ab"),s=r("0d3b"),o=r("da84"),c=r("0366"),l=r("e330"),u=r("37e8").f,h=r("6eeb"),f=r("19aa"),p=r("1a2d"),d=r("60da"),m=r("4df4"),b=r("4dae"),g=r("6547").codeAt,v=r("5fb2"),w=r("577e"),y=r("d44e"),O=r("d6d6"),j=r("9861"),k=r("69f3"),U=k.set,R=k.getterFor("URL"),P=j.URLSearchParams,S=j.getState,x=o.URL,L=o.TypeError,B=o.parseInt,q=Math.floor,E=Math.pow,_=l("".charAt),C=l(/./.exec),H=l([].join),A=l(1..toString),V=l([].pop),N=l([].push),I=l("".replace),D=l([].shift),F=l("".split),W=l("".slice),z=l("".toLowerCase),T=l([].unshift),$="Invalid authority",J="Invalid scheme",M="Invalid host",Y="Invalid port",Q=/[a-z]/i,G=/[\d+-.a-z]/i,K=/\d/,X=/^0x/i,Z=/^[0-7]+$/,ee=/^\d+$/,te=/^[\da-f]+$/i,re=/[\0\t\n\r #%/:<>?@[\\\]^|]/,ne=/[\0\t\n\r #/:<>?@[\\\]^|]/,ae=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,ie=/[\t\n\r]/g,se=function(e){var t,r,n,a,i,s,o,c=F(e,".");if(c.length&&""==c[c.length-1]&&c.length--,t=c.length,t>4)return e;for(r=[],n=0;n<t;n++){if(a=c[n],""==a)return e;if(i=10,a.length>1&&"0"==_(a,0)&&(i=C(X,a)?16:8,a=W(a,8==i?1:2)),""===a)s=0;else{if(!C(10==i?ee:8==i?Z:te,a))return e;s=B(a,i)}N(r,s)}for(n=0;n<t;n++)if(s=r[n],n==t-1){if(s>=E(256,5-t))return null}else if(s>255)return null;for(o=V(r),n=0;n<r.length;n++)o+=r[n]*E(256,3-n);return o},oe=function(e){var t,r,n,a,i,s,o,c=[0,0,0,0,0,0,0,0],l=0,u=null,h=0,f=function(){return _(e,h)};if(":"==f()){if(":"!=_(e,1))return;h+=2,l++,u=l}while(f()){if(8==l)return;if(":"!=f()){t=r=0;while(r<4&&C(te,f()))t=16*t+B(f(),16),h++,r++;if("."==f()){if(0==r)return;if(h-=r,l>6)return;n=0;while(f()){if(a=null,n>0){if(!("."==f()&&n<4))return;h++}if(!C(K,f()))return;while(C(K,f())){if(i=B(f(),10),null===a)a=i;else{if(0==a)return;a=10*a+i}if(a>255)return;h++}c[l]=256*c[l]+a,n++,2!=n&&4!=n||l++}if(4!=n)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;c[l++]=t}else{if(null!==u)return;h++,l++,u=l}}if(null!==u){s=l-u,l=7;while(0!=l&&s>0)o=c[l],c[l--]=c[u+s-1],c[u+--s]=o}else if(8!=l)return;return c},ce=function(e){for(var t=null,r=1,n=null,a=0,i=0;i<8;i++)0!==e[i]?(a>r&&(t=n,r=a),n=null,a=0):(null===n&&(n=i),++a);return a>r&&(t=n,r=a),t},le=function(e){var t,r,n,a;if("number"==typeof e){for(t=[],r=0;r<4;r++)T(t,e%256),e=q(e/256);return H(t,".")}if("object"==typeof e){for(t="",n=ce(e),r=0;r<8;r++)a&&0===e[r]||(a&&(a=!1),n===r?(t+=r?":":"::",a=!0):(t+=A(e[r],16),r<7&&(t+=":")));return"["+t+"]"}return e},ue={},he=d({},ue,{" ":1,'"':1,"<":1,">":1,"`":1}),fe=d({},he,{"#":1,"?":1,"{":1,"}":1}),pe=d({},fe,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),de=function(e,t){var r=g(e,0);return r>32&&r<127&&!p(t,e)?e:encodeURIComponent(e)},me={ftp:21,file:null,http:80,https:443,ws:80,wss:443},be=function(e,t){var r;return 2==e.length&&C(Q,_(e,0))&&(":"==(r=_(e,1))||!t&&"|"==r)},ge=function(e){var t;return e.length>1&&be(W(e,0,2))&&(2==e.length||"/"===(t=_(e,2))||"\\"===t||"?"===t||"#"===t)},ve=function(e){return"."===e||"%2e"===z(e)},we=function(e){return e=z(e),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},ye={},Oe={},je={},ke={},Ue={},Re={},Pe={},Se={},xe={},Le={},Be={},qe={},Ee={},_e={},Ce={},He={},Ae={},Ve={},Ne={},Ie={},De={},Fe=function(e,t,r){var n,a,i,s=w(e);if(t){if(a=this.parse(s),a)throw L(a);this.searchParams=null}else{if(void 0!==r&&(n=new Fe(r,!0)),a=this.parse(s,null,n),a)throw L(a);i=S(new P),i.bindURL(this),this.searchParams=i}};Fe.prototype={type:"URL",parse:function(e,t,r){var a,i,s,o,c=this,l=t||ye,u=0,h="",f=!1,d=!1,g=!1;e=w(e),t||(c.scheme="",c.username="",c.password="",c.host=null,c.port=null,c.path=[],c.query=null,c.fragment=null,c.cannotBeABaseURL=!1,e=I(e,ae,"")),e=I(e,ie,""),a=m(e);while(u<=a.length){switch(i=a[u],l){case ye:if(!i||!C(Q,i)){if(t)return J;l=je;continue}h+=z(i),l=Oe;break;case Oe:if(i&&(C(G,i)||"+"==i||"-"==i||"."==i))h+=z(i);else{if(":"!=i){if(t)return J;h="",l=je,u=0;continue}if(t&&(c.isSpecial()!=p(me,h)||"file"==h&&(c.includesCredentials()||null!==c.port)||"file"==c.scheme&&!c.host))return;if(c.scheme=h,t)return void(c.isSpecial()&&me[c.scheme]==c.port&&(c.port=null));h="","file"==c.scheme?l=_e:c.isSpecial()&&r&&r.scheme==c.scheme?l=ke:c.isSpecial()?l=Se:"/"==a[u+1]?(l=Ue,u++):(c.cannotBeABaseURL=!0,N(c.path,""),l=Ne)}break;case je:if(!r||r.cannotBeABaseURL&&"#"!=i)return J;if(r.cannotBeABaseURL&&"#"==i){c.scheme=r.scheme,c.path=b(r.path),c.query=r.query,c.fragment="",c.cannotBeABaseURL=!0,l=De;break}l="file"==r.scheme?_e:Re;continue;case ke:if("/"!=i||"/"!=a[u+1]){l=Re;continue}l=xe,u++;break;case Ue:if("/"==i){l=Le;break}l=Ve;continue;case Re:if(c.scheme=r.scheme,i==n)c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,c.path=b(r.path),c.query=r.query;else if("/"==i||"\\"==i&&c.isSpecial())l=Pe;else if("?"==i)c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,c.path=b(r.path),c.query="",l=Ie;else{if("#"!=i){c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,c.path=b(r.path),c.path.length--,l=Ve;continue}c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,c.path=b(r.path),c.query=r.query,c.fragment="",l=De}break;case Pe:if(!c.isSpecial()||"/"!=i&&"\\"!=i){if("/"!=i){c.username=r.username,c.password=r.password,c.host=r.host,c.port=r.port,l=Ve;continue}l=Le}else l=xe;break;case Se:if(l=xe,"/"!=i||"/"!=_(h,u+1))continue;u++;break;case xe:if("/"!=i&&"\\"!=i){l=Le;continue}break;case Le:if("@"==i){f&&(h="%40"+h),f=!0,s=m(h);for(var v=0;v<s.length;v++){var y=s[v];if(":"!=y||g){var O=de(y,pe);g?c.password+=O:c.username+=O}else g=!0}h=""}else if(i==n||"/"==i||"?"==i||"#"==i||"\\"==i&&c.isSpecial()){if(f&&""==h)return $;u-=m(h).length+1,h="",l=Be}else h+=i;break;case Be:case qe:if(t&&"file"==c.scheme){l=He;continue}if(":"!=i||d){if(i==n||"/"==i||"?"==i||"#"==i||"\\"==i&&c.isSpecial()){if(c.isSpecial()&&""==h)return M;if(t&&""==h&&(c.includesCredentials()||null!==c.port))return;if(o=c.parseHost(h),o)return o;if(h="",l=Ae,t)return;continue}"["==i?d=!0:"]"==i&&(d=!1),h+=i}else{if(""==h)return M;if(o=c.parseHost(h),o)return o;if(h="",l=Ee,t==qe)return}break;case Ee:if(!C(K,i)){if(i==n||"/"==i||"?"==i||"#"==i||"\\"==i&&c.isSpecial()||t){if(""!=h){var j=B(h,10);if(j>65535)return Y;c.port=c.isSpecial()&&j===me[c.scheme]?null:j,h=""}if(t)return;l=Ae;continue}return Y}h+=i;break;case _e:if(c.scheme="file","/"==i||"\\"==i)l=Ce;else{if(!r||"file"!=r.scheme){l=Ve;continue}if(i==n)c.host=r.host,c.path=b(r.path),c.query=r.query;else if("?"==i)c.host=r.host,c.path=b(r.path),c.query="",l=Ie;else{if("#"!=i){ge(H(b(a,u),""))||(c.host=r.host,c.path=b(r.path),c.shortenPath()),l=Ve;continue}c.host=r.host,c.path=b(r.path),c.query=r.query,c.fragment="",l=De}}break;case Ce:if("/"==i||"\\"==i){l=He;break}r&&"file"==r.scheme&&!ge(H(b(a,u),""))&&(be(r.path[0],!0)?N(c.path,r.path[0]):c.host=r.host),l=Ve;continue;case He:if(i==n||"/"==i||"\\"==i||"?"==i||"#"==i){if(!t&&be(h))l=Ve;else if(""==h){if(c.host="",t)return;l=Ae}else{if(o=c.parseHost(h),o)return o;if("localhost"==c.host&&(c.host=""),t)return;h="",l=Ae}continue}h+=i;break;case Ae:if(c.isSpecial()){if(l=Ve,"/"!=i&&"\\"!=i)continue}else if(t||"?"!=i)if(t||"#"!=i){if(i!=n&&(l=Ve,"/"!=i))continue}else c.fragment="",l=De;else c.query="",l=Ie;break;case Ve:if(i==n||"/"==i||"\\"==i&&c.isSpecial()||!t&&("?"==i||"#"==i)){if(we(h)?(c.shortenPath(),"/"==i||"\\"==i&&c.isSpecial()||N(c.path,"")):ve(h)?"/"==i||"\\"==i&&c.isSpecial()||N(c.path,""):("file"==c.scheme&&!c.path.length&&be(h)&&(c.host&&(c.host=""),h=_(h,0)+":"),N(c.path,h)),h="","file"==c.scheme&&(i==n||"?"==i||"#"==i))while(c.path.length>1&&""===c.path[0])D(c.path);"?"==i?(c.query="",l=Ie):"#"==i&&(c.fragment="",l=De)}else h+=de(i,fe);break;case Ne:"?"==i?(c.query="",l=Ie):"#"==i?(c.fragment="",l=De):i!=n&&(c.path[0]+=de(i,ue));break;case Ie:t||"#"!=i?i!=n&&("'"==i&&c.isSpecial()?c.query+="%27":c.query+="#"==i?"%23":de(i,ue)):(c.fragment="",l=De);break;case De:i!=n&&(c.fragment+=de(i,he));break}u++}},parseHost:function(e){var t,r,n;if("["==_(e,0)){if("]"!=_(e,e.length-1))return M;if(t=oe(W(e,1,-1)),!t)return M;this.host=t}else if(this.isSpecial()){if(e=v(e),C(re,e))return M;if(t=se(e),null===t)return M;this.host=t}else{if(C(ne,e))return M;for(t="",r=m(e),n=0;n<r.length;n++)t+=de(r[n],ue);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return p(me,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"==this.scheme&&1==t&&be(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,r=e.username,n=e.password,a=e.host,i=e.port,s=e.path,o=e.query,c=e.fragment,l=t+":";return null!==a?(l+="//",e.includesCredentials()&&(l+=r+(n?":"+n:"")+"@"),l+=le(a),null!==i&&(l+=":"+i)):"file"==t&&(l+="//"),l+=e.cannotBeABaseURL?s[0]:s.length?"/"+H(s,"/"):"",null!==o&&(l+="?"+o),null!==c&&(l+="#"+c),l},setHref:function(e){var t=this.parse(e);if(t)throw L(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"==e)try{return new We(e.path[0]).origin}catch(r){return"null"}return"file"!=e&&this.isSpecial()?e+"://"+le(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(w(e)+":",ye)},getUsername:function(){return this.username},setUsername:function(e){var t=m(w(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<t.length;r++)this.username+=de(t[r],pe)}},getPassword:function(){return this.password},setPassword:function(e){var t=m(w(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<t.length;r++)this.password+=de(t[r],pe)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?le(e):le(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,Be)},getHostname:function(){var e=this.host;return null===e?"":le(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,qe)},getPort:function(){var e=this.port;return null===e?"":w(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(e=w(e),""==e?this.port=null:this.parse(e,Ee))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+H(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,Ae))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){e=w(e),""==e?this.query=null:("?"==_(e,0)&&(e=W(e,1)),this.query="",this.parse(e,Ie)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){e=w(e),""!=e?("#"==_(e,0)&&(e=W(e,1)),this.fragment="",this.parse(e,De)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var We=function(e){var t=f(this,ze),r=O(arguments.length,1)>1?arguments[1]:void 0,n=U(t,new Fe(e,!1,r));i||(t.href=n.serialize(),t.origin=n.getOrigin(),t.protocol=n.getProtocol(),t.username=n.getUsername(),t.password=n.getPassword(),t.host=n.getHost(),t.hostname=n.getHostname(),t.port=n.getPort(),t.pathname=n.getPathname(),t.search=n.getSearch(),t.searchParams=n.getSearchParams(),t.hash=n.getHash())},ze=We.prototype,Te=function(e,t){return{get:function(){return R(this)[e]()},set:t&&function(e){return R(this)[t](e)},configurable:!0,enumerable:!0}};if(i&&u(ze,{href:Te("serialize","setHref"),origin:Te("getOrigin"),protocol:Te("getProtocol","setProtocol"),username:Te("getUsername","setUsername"),password:Te("getPassword","setPassword"),host:Te("getHost","setHost"),hostname:Te("getHostname","setHostname"),port:Te("getPort","setPort"),pathname:Te("getPathname","setPathname"),search:Te("getSearch","setSearch"),searchParams:Te("getSearchParams"),hash:Te("getHash","setHash")}),h(ze,"toJSON",(function(){return R(this).serialize()}),{enumerable:!0}),h(ze,"toString",(function(){return R(this).serialize()}),{enumerable:!0}),x){var $e=x.createObjectURL,Je=x.revokeObjectURL;$e&&h(We,"createObjectURL",c($e,x)),Je&&h(We,"revokeObjectURL",c(Je,x))}y(We,"URL"),a({global:!0,forced:!s,sham:!i},{URL:We})},"48b0":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"flex justify-between items-center border-b mb-4"},i={class:"border-0 mb-0"},s=["value"],o={key:0},c={key:0};function l(e,t,r,l,u,h){var f=Object(n["resolveComponent"])("annual-update-table"),p=Object(n["resolveComponent"])("tab-item"),d=Object(n["resolveComponent"])("tabs-container");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("header",a,[Object(n["createElementVNode"])("h1",i," Annual Updates for "+Object(n["toDisplayString"])(h.latestWindow.for_year),1),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.formatDate(h.latestWindow.start))+" - "+Object(n["toDisplayString"])(e.formatDate(h.latestWindow.end))+" ",1),u.windows.length>1?Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createElementBlock"])("select",{key:0,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.selectedYear=e}),class:"font-normal text-md"},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(h.sortedWindows,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{value:e.for_year,key:e.id},Object(n["toDisplayString"])(e.for_year),9,s)})),128))],512)),[[n["vModelSelect"],u.selectedYear]]):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{label:"VCEPS"},{default:Object(n["withCtx"])((function(){return[u.loading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,"Loading…")):(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:1,items:h.vcepReviews},null,8,["items"]))]})),_:1}),Object(n["createVNode"])(p,{label:"GCEPS"},{default:Object(n["withCtx"])((function(){return[u.loading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,"Loading…")):(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:1,items:h.gcepReviews},null,8,["items"]))]})),_:1})]})),_:1})])}var u=r("1da1"),h=(r("96cf"),r("4de4"),r("d3b7"),r("db04")),f=r("2ef0"),p=(r("4e82"),{class:"flex mb-2 items-end justify-between"}),d={class:"flex space-x-4 items-end"},m=Object(n["createElementVNode"])("option",{value:null},"Any",-1),b=Object(n["createElementVNode"])("option",{value:2},"Only Pending",-1),g=Object(n["createElementVNode"])("option",{value:1},"Only Completed",-1),v=[m,b,g],w=Object(n["createTextVNode"])(" view ");function y(e,t,r,a,i,s){var o=Object(n["resolveComponent"])("router-link"),c=Object(n["resolveComponent"])("data-table");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",p,[Object(n["createElementVNode"])("div",d,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.filter=e}),placeholder:"EP name, submitter name",class:"w-60"},null,512),[[n["vModelText"],a.filter]]),Object(n["withDirectives"])(Object(n["createElementVNode"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.completedFilter=e}),class:"flex radio-group"},v,512),[[n["vModelSelect"],s.completedFilter]])]),Object(n["createElementVNode"])("button",{class:"btn btn-xs",onClick:t[2]||(t[2]=function(){return s.exportData&&s.exportData.apply(s,arguments)})},"Export Data")]),Object(n["createVNode"])(c,{data:s.filteredItems,fields:i.fields,sort:a.sort,"onUpdate:sort":t[3]||(t[3]=function(e){return a.sort=e})},{"cell-action":Object(n["withCtx"])((function(e){var t=e.item;return[Object(n["createVNode"])(o,{to:{name:"AnnualUpdateDetail",params:{id:t.id}}},{default:Object(n["withCtx"])((function(){return[w]})),_:2},1032,["to"])]})),_:1},8,["data","fields","sort"])])}var O=r("5530"),j=(r("ac1f"),r("5319"),r("e9c4"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("466d"),r("b0c0"),r("d81d"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("5257")),k={name:"AnnualUpdateTeable",props:{items:{type:Array,required:!0}},data:function(){var e=this;return{fields:[{name:"id",sortable:!0,label:"ID"},{name:"expert_panel.display_name",label:"Expert Panel",sortable:!0},{name:"submitter.person.name",label:"Submitter",sortable:!0},{name:"completed_at",label:"Completed",sortable:!0,resolveValue:function(t){return t.completed_at?e.formatDate(t.completed_at):null}},{name:"action",label:"",sortable:!1}]}},computed:{completedFilter:{get:function(){return this.$route.query.completed||null},set:function(e){var t=this.$route.query,r=this.$route.path,n=Object(O["a"])({},t);e?n=Object(O["a"])(Object(O["a"])({},t),{completed:e}):delete n.completed,this.$router.replace({path:r,query:n})}},filteredItems:function(){var e=this,t=JSON.parse(JSON.stringify(this.items));if(null!=this.filter){var r=new RegExp(".*".concat(this.filter,".*"),"i");t=this.items.filter((function(e){return e.expert_panel.display_name.match(r)||e.submitter&&e.submitter.person&&e.submitter.person.name.match(r)}))}return null!=this.completedFilter&&(t=t.filter((function(t){return 1==e.completedFilter?null!==t.completed_at:null==t.completed_at}))),t}},methods:{exportData:function(){var e=this.filteredItems.map((function(e){return e.id}));h["a"].post("/api/annual-updates/export",{annual_update_ids:e}).then((function(e){var t=document.createElement("a");t.style.display="none",document.body.appendChild(t),t.href=window.URL.createObjectURL(new Blob([e.data,{type:"text/csv"}])),t.setAttribute("download","annual_updates.csv"),t.click(),document.body.removeChild(t)}))}},setup:function(){var e=Object(j["a"])({field:"expert_panel.display_name",desc:!1}),t=e.sort,r=e.filter;return{sort:t,filter:r}}},U=r("6b0d"),R=r.n(U);const P=R()(k,[["render",y]]);var S=P,x={name:"AnnualUpdatesList",components:{AnnualUpdateTable:S},data:function(){return{selectedYear:null,windows:[],items:[],loading:!1}},computed:{sortedWindows:function(){return Object(f["orderBy"])(this.windows,"for_year","desc")},latestWindow:function(){return this.sortedWindows[0]||{}},gcepReviews:function(){return this.items.filter((function(e){return 1==e.expert_panel.expert_panel_type_id}))},vcepReviews:function(){return this.items.filter((function(e){return 2==e.expert_panel.expert_panel_type_id}))}},methods:{getWindows:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].get("/api/annual-updates/windows").then((function(e){return e.data}));case 2:e.windows=t.sent,e.selectedYear=e.latestWindow.for_year;case 4:case"end":return t.stop()}}),t)})))()},getItems:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,h["a"].get("/api/annual-updates").then((function(e){return e.data}));case 3:e.items=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getWindows(),this.getItems()}};r("69ca");const L=R()(x,[["render",l],["__scopeId","data-v-51093e4a"]]);t["default"]=L},5257:function(e,t,r){"use strict";var n=r("5530"),a=(r("caad"),r("2532"),r("b64b"),r("ac1f"),r("5319"),r("4de4"),r("d3b7"),r("6c02")),i=r("7a23");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(a["d"])(),r=Object(a["c"])();e||(console.log('Warning: defaultSort is deprecated.  Please provide a sort object: {field: "fieldname", desc: boolean}'),e=e||{field:"name",desc:!1});var s=Object(i["computed"])({immediate:!0,get:function(){return Object.keys(r.query).includes("sort-field")?{field:r.query["sort-field"],desc:Boolean(parseInt(r.query["sort-desc"]))}:e},set:function(e){var a={"sort-field":e.field,"sort-desc":e.desc?1:0},i=Object(n["a"])(Object(n["a"])({},r.query),a);t.replace({path:r.path,query:i})}}),o=Object(i["computed"])({set:function(e){var a=r.query,i=r.path,s=Object(n["a"])({},a);e?s=Object(n["a"])(Object(n["a"])({},a),{filter:e}):delete s.filter,t.replace({path:i,query:s})},get:function(){return r.query.filter},immediate:!0});return{sort:s,filter:o}}},"5fb2":function(e,t,r){"use strict";var n=r("da84"),a=r("e330"),i=2147483647,s=36,o=1,c=26,l=38,u=700,h=72,f=128,p="-",d=/[^\0-\u007E]/,m=/[.\u3002\uFF0E\uFF61]/g,b="Overflow: input needs wider integers to process",g=s-o,v=n.RangeError,w=a(m.exec),y=Math.floor,O=String.fromCharCode,j=a("".charCodeAt),k=a([].join),U=a([].push),R=a("".replace),P=a("".split),S=a("".toLowerCase),x=function(e){var t=[],r=0,n=e.length;while(r<n){var a=j(e,r++);if(a>=55296&&a<=56319&&r<n){var i=j(e,r++);56320==(64512&i)?U(t,((1023&a)<<10)+(1023&i)+65536):(U(t,a),r--)}else U(t,a)}return t},L=function(e){return e+22+75*(e<26)},B=function(e,t,r){var n=0;e=r?y(e/u):e>>1,e+=y(e/t);while(e>g*c>>1)e=y(e/g),n+=s;return y(n+(g+1)*e/(e+l))},q=function(e){var t=[];e=x(e);var r,n,a=e.length,l=f,u=0,d=h;for(r=0;r<e.length;r++)n=e[r],n<128&&U(t,O(n));var m=t.length,g=m;m&&U(t,p);while(g<a){var w=i;for(r=0;r<e.length;r++)n=e[r],n>=l&&n<w&&(w=n);var j=g+1;if(w-l>y((i-u)/j))throw v(b);for(u+=(w-l)*j,l=w,r=0;r<e.length;r++){if(n=e[r],n<l&&++u>i)throw v(b);if(n==l){var R=u,P=s;while(1){var S=P<=d?o:P>=d+c?c:P-d;if(R<S)break;var q=R-S,E=s-S;U(t,O(L(S+q%E))),R=y(q/E),P+=s}U(t,O(L(R))),d=B(u,j,g==m),u=0,g++}}u++,l++}return k(t,"")};e.exports=function(e){var t,r,n=[],a=P(R(S(e),m,"."),".");for(t=0;t<a.length;t++)r=a[t],U(n,w(d,r)?"xn--"+q(r):r);return k(n,".")}},"69ca":function(e,t,r){"use strict";r("1606")},9861:function(e,t,r){"use strict";r("e260");var n=r("23e7"),a=r("da84"),i=r("d066"),s=r("c65b"),o=r("e330"),c=r("0d3b"),l=r("6eeb"),u=r("e2cc"),h=r("d44e"),f=r("9ed3"),p=r("69f3"),d=r("19aa"),m=r("1626"),b=r("1a2d"),g=r("0366"),v=r("f5df"),w=r("825a"),y=r("861d"),O=r("577e"),j=r("7c73"),k=r("5c6c"),U=r("9a1f"),R=r("35a1"),P=r("d6d6"),S=r("b622"),x=r("addb"),L=S("iterator"),B="URLSearchParams",q=B+"Iterator",E=p.set,_=p.getterFor(B),C=p.getterFor(q),H=i("fetch"),A=i("Request"),V=i("Headers"),N=A&&A.prototype,I=V&&V.prototype,D=a.RegExp,F=a.TypeError,W=a.decodeURIComponent,z=a.encodeURIComponent,T=o("".charAt),$=o([].join),J=o([].push),M=o("".replace),Y=o([].shift),Q=o([].splice),G=o("".split),K=o("".slice),X=/\+/g,Z=Array(4),ee=function(e){return Z[e-1]||(Z[e-1]=D("((?:%[\\da-f]{2}){"+e+"})","gi"))},te=function(e){try{return W(e)}catch(t){return e}},re=function(e){var t=M(e,X," "),r=4;try{return W(t)}catch(n){while(r)t=M(t,ee(r--),te);return t}},ne=/[!'()~]|%20/g,ae={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ie=function(e){return ae[e]},se=function(e){return M(z(e),ne,ie)},oe=f((function(e,t){E(this,{type:q,iterator:U(_(e).entries),kind:t})}),"Iterator",(function(){var e=C(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r}),!0),ce=function(e){this.entries=[],this.url=null,void 0!==e&&(y(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===T(e,0)?K(e,1):e:O(e)))};ce.prototype={type:B,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,a,i,o,c,l=R(e);if(l){t=U(e,l),r=t.next;while(!(n=s(r,t)).done){if(a=U(w(n.value)),i=a.next,(o=s(i,a)).done||(c=s(i,a)).done||!s(i,a).done)throw F("Expected sequence with length 2");J(this.entries,{key:O(o.value),value:O(c.value)})}}else for(var u in e)b(e,u)&&J(this.entries,{key:u,value:O(e[u])})},parseQuery:function(e){if(e){var t,r,n=G(e,"&"),a=0;while(a<n.length)t=n[a++],t.length&&(r=G(t,"="),J(this.entries,{key:re(Y(r)),value:re($(r,"="))}))}},serialize:function(){var e,t=this.entries,r=[],n=0;while(n<t.length)e=t[n++],J(r,se(e.key)+"="+se(e.value));return $(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var le=function(){d(this,ue);var e=arguments.length>0?arguments[0]:void 0;E(this,new ce(e))},ue=le.prototype;if(u(ue,{append:function(e,t){P(arguments.length,2);var r=_(this);J(r.entries,{key:O(e),value:O(t)}),r.updateURL()},delete:function(e){P(arguments.length,1);var t=_(this),r=t.entries,n=O(e),a=0;while(a<r.length)r[a].key===n?Q(r,a,1):a++;t.updateURL()},get:function(e){P(arguments.length,1);for(var t=_(this).entries,r=O(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){P(arguments.length,1);for(var t=_(this).entries,r=O(e),n=[],a=0;a<t.length;a++)t[a].key===r&&J(n,t[a].value);return n},has:function(e){P(arguments.length,1);var t=_(this).entries,r=O(e),n=0;while(n<t.length)if(t[n++].key===r)return!0;return!1},set:function(e,t){P(arguments.length,1);for(var r,n=_(this),a=n.entries,i=!1,s=O(e),o=O(t),c=0;c<a.length;c++)r=a[c],r.key===s&&(i?Q(a,c--,1):(i=!0,r.value=o));i||J(a,{key:s,value:o}),n.updateURL()},sort:function(){var e=_(this);x(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,r=_(this).entries,n=g(e,arguments.length>1?arguments[1]:void 0),a=0;while(a<r.length)t=r[a++],n(t.value,t.key,this)},keys:function(){return new oe(this,"keys")},values:function(){return new oe(this,"values")},entries:function(){return new oe(this,"entries")}},{enumerable:!0}),l(ue,L,ue.entries,{name:"entries"}),l(ue,"toString",(function(){return _(this).serialize()}),{enumerable:!0}),h(le,B),n({global:!0,forced:!c},{URLSearchParams:le}),!c&&m(V)){var he=o(I.has),fe=o(I.set),pe=function(e){if(y(e)){var t,r=e.body;if(v(r)===B)return t=e.headers?new V(e.headers):new V,he(t,"content-type")||fe(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),j(e,{body:k(0,O(r)),headers:k(0,t)})}return e};if(m(H)&&n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return H(e,arguments.length>1?pe(arguments[1]):{})}}),m(A)){var de=function(e){return d(this,N),new A(e,arguments.length>1?pe(arguments[1]):{})};N.constructor=de,de.prototype=N,n({global:!0,forced:!0},{Request:de})}}e.exports={URLSearchParams:le,getState:_}}}]);
//# sourceMappingURL=chunk-08f42b0e.1f4a772b.js.map