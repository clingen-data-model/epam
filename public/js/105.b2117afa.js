"use strict";(self["webpackChunkepam"]=self["webpackChunkepam"]||[]).push([[105],{417:function(e,t,n){var a=n(2262),l=n(6252),o=n(3600);const r={internal:1,suggestion:2,requirement:3};t["Z"]=(e,t)=>{const n=(0,a.iH)([]),s=(0,l.Fl)((()=>n.value.filter((e=>!e.is_resolved)))),i=(0,l.Fl)((()=>s.value.filter((e=>e.comment_type_id==r.requirement)))),u=(0,l.Fl)((()=>s.value.filter((e=>e.comment_type_id==r.suggestion)))),m=(0,l.Fl)((()=>[...i.value,...u.value])),c=(0,l.Fl)((()=>s.value.filter((e=>e.comment_type_id==r.internal)))),d=e=>n.value.findIndex((t=>t.id==e.id)),p=async()=>{n.value=await o.Z.query({where:{subject_type:e,subject_id:t}})},v=e=>n.value.push(e),w=e=>n.value.splice(d(e),1),_=e=>n.value[d(e)]=e;return{subject:{type:e,id:t},comments:n,openComments:s,openRequirements:i,openSuggestions:u,openInternal:c,getComments:p,addComment:v,removeComment:w,updateComment:_,commentsForEp:m}}},2794:function(e,t,n){n.d(t,{ZP:function(){return w}});var a=n(2262),l=n(9028);class o{constructor(e,t){this.fields=e,this.repo=t,this.currentItem=(0,a.iH)({}),this.originalItem=(0,a.iH)({}),this.errors=(0,a.iH)({})}async find(e){return await this.repo.find(e).then((e=>(this.currentItem.value=e,this.originalItem.value=e,e)))}async save(e){this.clearErrors();try{const t=await this.repo.save(e);return this.clearCurrentItem(),t}catch(t){throw(0,l.z1)(t)&&(this.errors.value=t.response.data.errors),t}}async update(e){this.clearErrors();try{return this.currentItem.value=this.repo.update(e),this.currentItem.value}catch(t){throw(0,l.z1)(t)&&(this.errors.value=t.response.data.errors),t}}async destroy(e){this.repo.destroy(e)}cancel(){this.clearErrors(),this.currentItem.value.id||this.clearCurrentItem()}clearCurrentItem(){this.currentItem.value={}}clearErrors(){this.errors.value={}}}var r=o,s=n(3600),i=(n(1703),n(6381));class u extends i.Z{constructor(e,t={}){super(e,t),this.cachedList=null}query(e){if(!this.cachedList){const t=super.query(e);this.cachedList=t}return this.cachedList}find(e){throw Error("CommentTypeRepository.find not implemented")}save(e){throw Error("CommentTypeRepository.save not implemented")}update(e){throw Error("CommentTypeRepository.update not implemented")}destroy(e){throw Error("CommentTypeRepository.destroy not implemented")}}const m=new u("/api/comment-types");var c=m;const d=(0,a.iH)([]),p=async()=>await c.query().then((e=>(d.value=e.map((e=>({label:e.name,value:e.id}))),d.value))),v=(0,a.iH)([{name:"comment_type_id",label:"Type",type:"select",options:d,required:!0},{name:"content",label:"Comment",type:"large-text",required:!0}]);var w=()=>(p(),new r(v,s.Z))},6381:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9028);class l{constructor(e,t={}){this.baseUrl=e,this.options=t}query(e){const t=(0,a.nZ)(e);return a.hi.get(this.baseUrl+t).then((e=>this.transformToEntity(e.data)))}find(e){return a.hi.get(`${this.baseUrl}/${e}`).then((e=>this.transformToEntity(e.data)))}save(e){return a.hi.post(this.baseUrl,e).then((e=>this.transformToEntity(e.data)))}update(e){return a.hi.put(`${this.baseUrl}/${e.id}`,e).then((e=>this.transformToEntity(e.data)))}destroy(e){return a.hi["delete"](`${this.baseUrl}/${e.id}`)}transformToEntity(e){return this.options.entityClass&&Array.isArray(e)?e.map((e=>new this.options.entityClass(e))):e}}},3600:function(e,t,n){var a=n(6381),l=n(9028);const o=new a.Z("/api/comments");o.resolve=e=>l.hi.post(`/api/comments/${e}/resolved`).then((e=>e.data)),o.unresolve=e=>l.hi.post(`/api/comments/${e}/unresolved`).then((e=>e.data)),t["Z"]=o},7411:function(e,t,n){n.d(t,{Z:function(){return R}});var a=n(6252),l=n(2262),o=n(3577),r=n(3907),s=n(6501),i=(n(6699),n(9669)),u=n.n(i),m=n(865);const c={colspan:"6",class:"bg-white border-0 pl-0 pb-1 pt-3"},d={class:"text-lg"},p=(0,a.Uk)("   "),v={class:"text-sm"},w=(0,a._)("th",null,"Publications",-1),_={class:"text-sm"},b={key:0},g=["href"],y=["onClick"];var h={__name:"ReviewMembership",props:{members:{required:!0,type:Array}},setup(e){const t=e,n=(0,a.Fl)((()=>(0,m.Fs)("ep-applications-approve"))),r=(0,l.iH)(["name","credentials","expertise","institution"]);(0,m.Fs)("ep-applications-manage")&&r.value.push("coi_completed");const s=(0,l.iH)([]),i=(0,a.Fl)((()=>s.value.filter((e=>e.roles.includes("chair"))))),h=(0,a.Fl)((()=>s.value.filter((e=>e.roles.includes("expert"))))),f=(0,a.Fl)((()=>[{title:"Leadership",members:i.value},{title:"Coordination",members:s.value.filter((e=>e.roles.includes("coordinator")))},{title:"Biocuration",members:s.value.filter((e=>e.roles.includes("biocurator")))},{title:"Expertise",members:h.value}])),k=(e=1e3)=>new Promise((t=>setTimeout(t,e))),U=async e=>{const t="https://eutils.ncbi.nlm.nih.gov/entrez/eutils",n=`${t}/esearch.fcgi?db=pubmed&term=${e.last_name},+${e.first_name}[author]&retmode=json&retmax=0`;return u().get(n).then((t=>{e.pubCount=t.data.esearchresult.count})).catch((async t=>{console.log(t),429==t.response.status&&(console.log("wait and try again"),await k(),U(e))}))};return(0,a.YP)((()=>t.members),(async e=>{if(e){s.value=[...e],s.value.sort(((e,t)=>e.roles.includes("chair")&&!t.roles.includes("chair")?-1:!e.roles.includes("chair")&&t.roles.includes("chair")?1:e.roles.includes("expert")&&!t.roles.includes("expert")?-1:!e.roles.includes("expert")&&t.roles.includes("expert")?1:0));for(let e in s.value.filter((e=>e.roles.includes("chair")||e.roles.includes("expert"))))n.value&&(U(s.value[e]),await k(500))}}),{immediate:!0}),(e,t)=>{const n=(0,a.up)("badge"),s=(0,a.up)("popper");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("table",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(f),(e=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e.title},[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",c,[(0,a._)("span",d,(0,o.zw)(e.title),1),p,(0,a.Wm)(n,{size:"xxs"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.members.length),1)])),_:2},1024)])]),(0,a._)("tr",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.value,(e=>((0,a.wg)(),(0,a.iD)("th",{key:e},(0,o.zw)(e),1)))),128)),w])]),(0,a._)("tbody",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.members,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.value,(t=>((0,a.wg)(),(0,a.iD)("td",{key:t},(0,o.zw)(e[t]),1)))),128)),(0,a._)("td",null,[e.pubCount?((0,a.wg)(),(0,a.iD)("div",b,[e.pubCount>0?((0,a.wg)(),(0,a.j4)(s,{key:0,content:"Go to PubMed results.",hover:"",arrow:"",placement:"left"},{default:(0,a.w5)((()=>[(0,a._)("a",{href:`https://pubmed.ncbi.nlm.nih.gov/?term=${e.last_name},+${e.first_name}%5BAuthor%5D`,target:"pubmed"},[(0,a.Wm)(n,{size:"xxs"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.pubCount),1)])),_:2},1024)],8,g)])),_:2},1024)):((0,a.wg)(),(0,a.j4)(n,{key:1,size:"xxs"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.pubCount),1)])),_:2},1024))])):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"btn btn-xs",onClick:t=>U(e)},"Get",8,y))])])))),128))])],64)))),128))])])}}};const f=h;var k=f,U=n(5699);const C={class:"space-y-4"},S={key:0,class:"mt-6"},x=(0,a._)("h4",null,"Expertise of VCEP members",-1),W=(0,a._)("h3",null,"Genes",-1),j={class:"mb-6"},D={key:0},z=(0,a._)("h3",null,"Description of scope",-1),q={class:"flex-none"},I={key:0,class:"mt-1"},M=(0,a._)("em",null,"Details:",-1);var F={__name:"DefinitionReview",setup(e){const t=(0,r.oR)(),n=(0,a.Fl)((()=>t.getters["groups/currentItemOrNew"])),i=(0,a.Fl)((()=>n.value.expert_panel)),u=(0,a.Fl)((()=>n.value?n.value.members.map((e=>{const t={id:e.id,first_name:e.person.first_name,last_name:e.person.last_name,name:e.person.name,institution:e.person.institution?e.person.institution.name:null,credentials:e.person.credentials,expertise:e.expertise,roles:e.roles.map((e=>e.name)).join(", ")};return(0,m.Fs)("ep-applications-manage")&&(t.coi_completed=(0,U.p6)(e.coi_last_completed)),t})):[])),c=(0,a.Fl)((()=>({type:n.value.type.name?n.value.type.name.toUpperCase():"",long_base_name:i.value.long_base_name,short_base_name:i.value.short_base_name})));return(e,t)=>{const r=(0,a.up)("object-dictionary"),m=(0,a.up)("dictionary-row"),d=(0,a.up)("markdown-block"),p=(0,a.up)("simple-table");return(0,a.wg)(),(0,a.iD)("div",C,[(0,a.Wm)(s.Z,{title:"Basic Information",name:"basic-info"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{obj:(0,l.SU)(c),"label-class":"w-40 font-bold"},null,8,["obj"]),(0,a.Wm)(m,{label:"CDWG","label-class":"w-40 font-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(n).parent?(0,l.SU)(n).parent.name:"--"),1)])),_:1})])),_:1}),(0,a.Wm)(s.Z,{title:"Membership",name:"membership"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{members:(0,l.SU)(u)},null,8,["members"]),(0,l.SU)(n).isVcep()?((0,a.wg)(),(0,a.iD)("div",S,[x,(0,a._)("blockquote",null,[(0,a.Wm)(d,{markdown:(0,l.SU)(i).membership_description},null,8,["markdown"])])])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(s.Z,{title:"Scope",name:"scope"},{default:(0,a.w5)((()=>[W,(0,a._)("div",j,[(0,l.SU)(n).isGcep()?((0,a.wg)(),(0,a.iD)("p",D,(0,o.zw)((0,l.SU)(i).genes.map((e=>e.gene_symbol)).join(", ")),1)):(0,a.kq)("",!0),(0,l.SU)(n).isVcep()?((0,a.wg)(),(0,a.j4)(p,{key:1,data:(0,l.SU)(i).genes.map((e=>({id:e.id,gene:e.gene_symbol,disease:e.disease_name}))),"key-by":"id","hide-columns":["id"]},null,8,["data"])):(0,a.kq)("",!0)]),z,(0,a._)("blockquote",null,[(0,a.Wm)(d,{markdown:(0,l.SU)(i).scope_description},null,8,["markdown"])])])),_:1}),(0,l.SU)(n).isGcep()?((0,a.wg)(),(0,a.j4)(s.Z,{key:0,title:"Plans",name:"plans"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"Selected protocol","label-class":"w-48 font-bold"},{default:(0,a.w5)((()=>[(0,a._)("div",q,[(0,a.Uk)((0,o.zw)((0,l.SU)(i).curation_review_protocol?e.titleCase((0,l.SU)(i).curation_review_protocol.full_name):null)+" ",1),100==(0,l.SU)(i).curation_review_protocol_id?((0,a.wg)(),(0,a.iD)("p",I,[M,(0,a.Uk)(" "+(0,o.zw)((0,l.SU)(i).curation_review_protocol_other),1)])):(0,a.kq)("",!0)])])),_:1})])),_:1})):(0,a.kq)("",!0),(0,l.SU)(n).isGcep()?((0,a.wg)(),(0,a.j4)(s.Z,{key:1,title:"Attestations",name:"attestations"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"GCEP Attestation Signed","label-class":"w-52 font-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(U.p6)((0,l.SU)(i).gcep_attestation_date)),1)])),_:1}),(0,a.Wm)(m,{label:"GCI Training Date","label-class":"w-52 font-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(U.p6)((0,l.SU)(i).gci_training_date)),1)])),_:1}),(0,a.Wm)(m,{label:"NHGRI Attestation Signed","label-class":"w-52 font-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(U.p6)((0,l.SU)(i).nhgri_attestation_date)),1)])),_:1})])),_:1})):(0,a.kq)("",!0),(0,l.SU)(n).isVcep()?((0,a.wg)(),(0,a.j4)(s.Z,{key:2,title:"Attestations",name:"attestations"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"Reanalysis and Discrepancy Resolution Attestation Signed","label-class":"w-52 font-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(U.p6)((0,l.SU)(i).reanalysis_attestation_date)),1)])),_:1}),(0,a.Wm)(m,{label:"NHGRI Attestation Signed","label-class":"w-60 font-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(U.p6)((0,l.SU)(i).nhgri_attestation_date)),1)])),_:1})])),_:1})):(0,a.kq)("",!0)])}}};const Z=F;var R=Z},209:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(6252),l=n(2262),o=n(2794),r={__name:"ReviewCommentForm",props:{commentManager:{type:Object,required:!0},section:{type:[String,null],default:null},subjectType:{type:String,default:"App\\Modules\\Group\\Models\\Group"},subjectId:{type:Number,required:!1},comment:{type:Object},onlyInternal:{type:Boolean,default:!1}},emits:["saved","canceled"],setup(e,{emit:t}){const n=e,r=(0,a.f3)("group");(0,a.bv)((()=>{n.comment&&(s.currentItem.value=n.comment)}));const s=(0,o.ZP)(),i=(0,a.Fl)((()=>{const e=[...s.fields.value];if(n.onlyInternal){const t=e.findIndex((e=>"comment_type_id"==e.name));e.splice(t,1)}return e})),u=(0,a.Fl)((()=>s.errors.value)),m=(0,a.Fl)({get(){return s.currentItem.value},set(e){s.currentItem.value=e}}),c=()=>{s.clearCurrentItem(),s.clearErrors(),t("canceled")},d=()=>{m.value.subject_type=n.subjectType,m.value.subject_id=n.subjectId||r.value.id,m.value.metadata={section:n.section},n.onlyInternal&&(m.value.comment_type_id=1),s.save(m.value).then((e=>{n.commentManager.addComment(e),t("saved",e)}))},p=()=>{n.onlyInternal&&(m.value.comment_type_id=1),s.update(m.value).then((e=>{n.commentManager.updateComment(e),t("saved",e)}))},v=()=>{m.value.id?p():d()};return(e,t)=>{const n=(0,a.up)("data-form"),o=(0,a.up)("button-row");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(n,{fields:(0,l.SU)(i),modelValue:(0,l.SU)(m),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,l.dq)(m)?m.value=e:null),errors:(0,l.SU)(u)},null,8,["fields","modelValue","errors"]),(0,a.Wm)(o,{size:"xs","submit-text":"Save",onSubmitted:v,onCanceled:c})])}}};const s=r;var i=s},6501:function(e,t,n){n.d(t,{Z:function(){return G}});var a=n(6252),l=n(3577),o=n(2262),r=n(9963),s=n(3907),i=n(209),u=n(2794),m=n(3600),c=n(2839),d=n(417),p=n(865);const v={class:"my-2"},w={class:"comment-container"},_={key:0,class:"relative"},b={class:"flex justify-between items-start mb-1 rounded"},g={class:"flex space-x-2 items-end"},y={class:"block"},h={class:"flex space-x-2"},f=(0,a.Uk)("Edit"),k=(0,a.Uk)("Delete"),U=(0,a.Uk)("Reply"),C=(0,a.Uk)(" Continue with delete? "),S={class:"replies ml-1"},x={key:0},W={class:"border-l-2 mt-2 px-2 py-1 bg-gray-100 bg-opacity-50"},j=(0,a._)("strong",null,"Your Reply",-1);var D={__name:"ReviewComment",props:{comment:{type:Object,required:!0},commentManager:{type:Object,required:!0}},emits:["created","updated","resolved","unresolved","deleted"],setup(e,{emit:t}){const n=e,D=(0,s.oR)(),z=(0,u.ZP)(),q=(0,o.iH)((0,d.Z)("App\\Models\\Comment",n.comment.id)),I=(0,o.iH)(!1),M=(0,o.iH)(!1),F=e=>{if(!e.type)return"gray";switch(e.type.name){case"required revision":return"yellow";case"suggestion":return"blue";case"internal comment":return"gray";default:break}},Z=()=>{M.value=!0},R=()=>{z.destroy(n.comment).then((()=>{M.value=!1,n.commentManager.removeComment(n.comment),t("deleted",n.comment)}))},H=async()=>{if(n.comment.is_resolved){const e=await m.Z.unresolve(n.comment.id);return n.commentManager.updateComment(e),t("updated"),void t("resolved")}const e=await m.Z.resolve(n.comment.id);n.commentManager.updateComment(e),t("updated"),t("unresolved")},E=(0,o.iH)(!1),T=async()=>{E.value||A(),E.value=!E.value},A=()=>{q.value.getComments().then((e=>(E.value=!0,e)))},$=(0,o.iH)(!1),G=()=>$.value=!0,P=e=>{const t={...n.comment};t.comments_count+=1,n.commentManager.updateComment(t),E.value=!0,$.value=!1},Y=e=>{const t={...n.comment};t.comments_count-=1,n.commentManager.updateComment(t)};(0,a.bv)((()=>{q.value.getComments()}));const B=(0,a.Fl)((()=>(0,p.Fs)("comments-manage")||D.getters.currentUser.person.id==n.comment.creator_id));return(t,n)=>{const s=(0,a.up)("badge"),u=(0,a.up)("icon-checkmark"),m=(0,a.up)("popper"),d=(0,a.up)("dropdown-menu"),p=(0,a.up)("markdown-block"),D=(0,a.up)("icon-reply"),z=(0,a.up)("button-row"),A=(0,a.up)("static-alert"),V=(0,a.up)("ReviewComment",!0);return(0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("div",w,[I.value?((0,a.wg)(),(0,a.j4)(i.Z,{key:1,onCanceled:n[2]||(n[2]=e=>I.value=!1),onSaved:n[3]||(n[3]=e=>I.value=!1),comment:e.comment,commentManager:e.commentManager},null,8,["comment","commentManager"])):((0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("div",b,[(0,a._)("div",g,[(0,a._)("strong",y,(0,l.zw)(e.comment.creator&&e.comment.creator.name),1),(0,a.Wm)(s,{class:"block",color:F(e.comment),size:"xxs"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.comment.type&&t.titleCase(e.comment.type.name)),1)])),_:1},8,["color"]),e.comment.is_resolved?((0,a.wg)(),(0,a.j4)(m,{key:0,hover:"",arrow:"",content:"Resolved"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"text-green-500",title:"Resolved"})])),_:1})):(0,a.kq)("",!0)]),(0,a._)("div",h,[(0,o.SU)(B)?((0,a.wg)(),(0,a.j4)(d,{key:0,hideCheveron:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c["default"],{onClick:n[0]||(n[0]=e=>I.value=!0)},{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(c["default"],{onClick:H},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.comment.is_resolved?"Mark unresolved":"Resolve"),1)])),_:1}),(0,a.Wm)(c["default"],{onClick:Z},{default:(0,a.w5)((()=>[k])),_:1})])),_:1})):(0,a.kq)("",!0)])]),(0,a.Wm)(p,{markdown:e.comment.content,class:"text-sm"},null,8,["markdown"]),(0,a._)("button",{class:"link",onClick:G},[(0,a.Wm)(D,{class:"inline-block"}),U]),(0,a.wy)((0,a.Wm)(A,{variant:"danger",class:""},{default:(0,a.w5)((()=>[C,(0,a.Wm)(z,{size:"xs","submit-text":"Yes, delete",onSubmitted:R,onCanceled:n[1]||(n[1]=e=>M.value=!1),submitVariant:"red"})])),_:1},512),[[r.F8,M.value]])]))]),(0,a._)("div",S,[E.value?((0,a.wg)(),(0,a.iD)("ul",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(q.value.comments,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id,class:"border-l-2 mt-2 px-2 py-1 bg-gray-100 bg-opacity-50"},[(0,a.Wm)(V,{comment:e,commentManager:q.value,onDeleted:Y},null,8,["comment","commentManager"])])))),128))])):(0,a.kq)("",!0),e.comment.comments_count>0?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"link text-sm",onClick:T},(0,l.zw)(E.value?"Hide":"Show")+" "+(0,l.zw)(e.comment.comments_count)+" "+(0,l.zw)(e.comment.comments_count>1?"replies":"reply"),1)):(0,a.kq)("",!0),(0,a.wy)((0,a._)("div",W,[j,(0,a.Wm)(i.Z,{subjectType:"App\\Models\\Comment",subjectId:e.comment.id,onlyInternal:!0,commentManager:q.value,onSaved:P,onCanceled:n[4]||(n[4]=e=>$.value=!1)},null,8,["subjectId","commentManager"])],512),[[r.F8,$.value]])])])}}};const z=D;var q=z;const I={class:"lg:flex lg:space-x-4 screen-block"},M={class:"flex justify-between items-start space-x-4"},F={key:0,class:"flex justify-between items-center lg:w-2/5 px-2 py-1 pb-0 bg-gray-100 rounded-lg"},Z=(0,a.Uk)(" Comments "),R={class:"lg:w-2/5 p-2 bg-gray-100 rounded-lg mb-2"},H={class:"flex justify-between items-center"},E=(0,a.Uk)(" Comments "),T={class:"bg-white mt-2 p-2"};var A={__name:"ReviewSection",props:{title:{type:String||null,default:null},name:{type:String||null,default:null}},setup(e){const t=e,n=(0,a.f3)("commentManager"),s=(0,o.iH)(!1),u=(0,o.iH)(!0),m=(0,a.Fl)((()=>n?n.value.comments.filter((e=>!!e.metadata&&e.metadata.section==t.name)):[])),c=(0,a.Fl)((()=>n?m.value.find((e=>"required revision"==e.type.name))?"yellow":m.value.find((e=>"suggestion"==e.type.name))?"blue":"gray":null));return(t,d)=>{const p=(0,a.up)("icon-cheveron-right"),v=(0,a.up)("badge"),w=(0,a.up)("icon-cheveron-down");return(0,a.wg)(),(0,a.iD)("section",I,[(0,a._)("div",{class:(0,l.C_)(["overflow-x-auto flex-grow",{"lg:w-3/5":u.value}])},[(0,a._)("header",M,[(0,a._)("h2",{class:(0,l.C_)(["flex-grow",{"lg:w-3/5":!u.value}])},(0,l.zw)(e.title),3),(0,o.SU)(n)?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("h3",null,[(0,a.Wm)(p,{class:"inline cursor-pointer",onClick:d[0]||(d[0]=e=>u.value=!0)}),Z,(0,a.Wm)(v,{color:(0,o.SU)(c)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)((0,o.SU)(m).length),1)])),_:1},8,["color"])])],512)),[[r.F8,!u.value]]):(0,a.kq)("",!0)]),(0,a._)("div",null,[(0,a._)("div",null,[(0,a.WI)(t.$slots,"default")])])],2),(0,a.wy)((0,a._)("div",R,[(0,a._)("div",H,[(0,a._)("h3",null,[(0,a.Wm)(w,{class:"inline cursor-pointer",onClick:d[1]||(d[1]=e=>u.value=!1)}),E])]),(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(m),(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id,class:"bg-white p-2"},[(0,a.Wm)(q,{comment:e,commentManager:(0,o.SU)(n)},null,8,["comment","commentManager"])])))),128))]),(0,a._)("div",T,[s.value?((0,a.wg)(),(0,a.j4)(i.Z,{key:0,section:e.name,commentManager:(0,o.SU)(n),onSaved:d[2]||(d[2]=e=>s.value=!1),onCanceled:d[3]||(d[3]=e=>s.value=!1)},null,8,["section","commentManager"])):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"btn btn-xs block",onClick:d[4]||(d[4]=e=>s.value=!0)},"Add comment"))])],512),[[r.F8,u.value&&(0,o.SU)(n)]])])}}};const $=A;var G=$},3496:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(6252),l=n(2262),o=n(3577),r=n(2738),s=n(3907),i=n(6501);const u={class:"application-review p-2 bg-gray-100"},m={class:"w-full"},c={key:0,class:"mt-1"},d=(0,a._)("em",null,"Details:",-1);var p={__name:"SustainedCurationReview",setup(e){const t=(0,s.oR)(),n=(0,a.Fl)((()=>t.getters["groups/currentItemOrNew"])),p=(0,a.Fl)((()=>n.value.expert_panel));return(0,a.YP)((()=>n.value),((e,a)=>{!e.id||a&&e.id==a.id||t.dispatch("groups/getEvidenceSummaries",n.value)})),(e,t)=>{const s=(0,a.up)("dictionary-row"),v=(0,a.up)("markdown-block");return(0,a.wg)(),(0,a.iD)("div",u,[(0,l.SU)(p).has_approved_pilot?((0,a.wg)(),(0,a.j4)(i.Z,{key:0,title:"Plans for Ongoing Review and Discrepancy Resolution",name:"discrepency-review"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"Selected protocol",labelWidthClass:"w-48 font-bold"},{default:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a.Uk)((0,o.zw)((0,l.SU)(p).curation_review_protocol?e.titleCase((0,l.SU)(p).curation_review_protocol.full_name):null)+" ",1),100==(0,l.SU)(p).curation_review_protocol_id?((0,a.wg)(),(0,a.iD)("p",c,[d,(0,a.Uk)(" "+(0,o.zw)((0,l.SU)(p).curation_review_protocol_other),1)])):(0,a.kq)("",!0)])])),_:1}),(0,a.Wm)(s,{label:"Notes",labelWidthClass:"w-48 font-bold"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{markdown:(0,l.SU)(p).curation_review_process_notes},null,8,["markdown"])])),_:1})])),_:1})):(0,a.kq)("",!0),(0,l.SU)(p).has_approved_pilot?((0,a.wg)(),(0,a.j4)(i.Z,{key:1,title:"Evidence Summaries",name:"evidence-summaries"},{default:(0,a.w5)((()=>[(0,a.Wm)(r.Z,{readonly:!0})])),_:1})):(0,a.kq)("",!0),(0,l.SU)(p).has_approved_pilot?((0,a.wg)(),(0,a.j4)(i.Z,{key:2,title:"Core Approval Member, Trained Biocurator, and Biocurator Trainer Designation",name:"member-designation"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"Core Approval Members",labelWidthClass:"w-48 font-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(n).coreApprovalMembers.map((e=>e.person.name)).join(", ")),1)])),_:1}),(0,a.Wm)(s,{label:"Biocurator Trainers",labelWidthClass:"w-48 font-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(n).biocuratorTrainers.map((e=>e.person.name)).join(", ")),1)])),_:1}),(0,a.Wm)(s,{label:"Trained Biocurators",labelWidthClass:"w-48 font-bold"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(n).trainedBiocurators.map((e=>e.person.name)).join(", ")),1)])),_:1})])),_:1})):(0,a.kq)("",!0)])}}};const v=p;var w=v}}]);
//# sourceMappingURL=105.b2117afa.js.map