(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43472d1e"],{5313:function(e,t,n){"use strict";n.d(t,"b",(function(){return i["a"]})),n.d(t,"d",(function(){return A})),n.d(t,"a",(function(){return M})),n.d(t,"c",(function(){return B}));var i=n("ae23"),r=(n("da07"),n("86ed"),n("2125"),n("d4ec")),o=n("bee2"),s=(n("4de4"),n("d81d"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),function(){function e(t,n){Object(r["a"])(this,e),this.label=t,this.evaluator=n}return Object(o["a"])(e,[{key:"isMet",value:function(e){return this.evaluator(e)}}]),e}()),a=new s("Long Base Name",(function(e){return Boolean(e.expert_panel.long_base_name)})),u=new s("Short Base Name",(function(e){return Boolean(e.expert_panel.short_base_name)})),c=new s("1+ Co-chairs",(function(e){return e.chairs.length>0})),f=new s("1+ Coordinator",(function(e){return e.coordinators.length>0})),p=new s("All members completed COI",(function(e){return 0==e.members.filter((function(e){return e.needsCoi})).length})),l=new s("3+ institutions represented",(function(e){var t=e.members.filter((function(e){return null!=e.person.institution_id})).map((function(e){return e.person.institution_id}));return new Set(t).size>2})),d=new s("Description of expertise",(function(e){return Boolean(e.expert_panel.membership_description)})),m=new s("1+ genes in scope",(function(e){return e.expert_panel.genes.length>0})),v=new s("Description of scope",(function(e){return Boolean(e.expert_panel.scope_description)})),h=new s("Plans for sustained curation",(function(e){return Boolean(e.expert_panel.curation_review_protocol_id)})),b=new s("Meeting frequency",(function(e){return Boolean(e.expert_panel.meeting_frequency)})),g=new s("NHGRI Attestation",(function(e){return Boolean(e.expert_panel.nhgri_attestation_date)})),x=new s("GCEP processes Attestation",(function(e){return Boolean(e.expert_panel.gcep_attestation_date)})),y=new s("Reanalysis & discrepany resolution",(function(e){return Boolean(e.expert_panel.reanalysis_attestation_date)})),w=new s("5+ Example Evidence Summaries",(function(e){return e.expert_panel.evidence_summaries.length>4})),_=new s("1+ Approved piloted, specifications document.",(function(e){return e.expert_panel.approvedDraftSpecifications.length>0})),S=new s("1+ Approved piloted, specifications document.",(function(e){return e.expert_panel.approvedPilotedSpecifications.length>0})),q=new s("3+ trained biocurators.",(function(e){return e.biocurators.filter((function(e){return e.training_level_1&&e.training_level_2})).length>2})),k=new s("1+ biocurator trainers.",(function(e){return e.biocuratorTrainers.length>0})),O=new s("1+ core approval members",(function(e){return e.coreApprovalMembers.length>0})),A={longName:a,shortName:u,chairs:c,coordinators:f,coisComplete:p,institutions:l,expertiseDescription:d,genes:m,scopeDescription:v,curationProcess:h,meetingFrequency:b,nhgri:g,gcepAttestation:x,reanalysisAttestation:y,exampleSummaries:w,draftApprovedSpecifications:_,pilotedApprovedSpecifications:S,minimumBiocurators:q,biocuratorTrainers:k,coreApprovalMembers:O},j=n("257e"),D=n("262e"),I=n("2caf"),E=(n("b0c0"),n("159b"),n("7db0"),n("0481"),n("b64b"),function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"hasRequirements",get:function(){return this.requirements.length>0}},{key:"evaluateRequirements",value:function(e){return this.requirements.map((function(t){return{label:t.label,isMet:t.isMet(e)}}))}},{key:"meetsRequirements",value:function(e){return this.requirements.every((function(t){return t.isMet(e)}))}},{key:"metRequirements",value:function(e){return this.requirements.filter((function(t){return t.isMet(e)}))}},{key:"unmetRequirements",value:function(e){return this.requirements.filter((function(t){return!t.isMet(e)}))}}]),e}()),R=function(e){Object(D["a"])(n,e);var t=Object(I["a"])(n);function n(e,i,o,s){var a;return Object(r["a"])(this,n),a=t.call(this),a.name=e,a.title=i,a.requirements=o,a.components=s,a}return n}(E),C=function(e){Object(D["a"])(n,e);var t=Object(I["a"])(n);function n(e,i,o,s,a){var u;return Object(r["a"])(this,n),u=t.call(this),u.name=e,u.sections=i,u.title=o,u.completeFunction=s,u.disabledFunction=a,u.sections.forEach((function(e){Object.defineProperty(Object(j["a"])(u),e.name,{get:function(){return u.sections.find((function(t){return t.name==e.name}))}})})),u}return Object(o["a"])(n,[{key:"requirements",get:function(){return this.sections.map((function(e){return e.requirements})).flat()}},{key:"isComplete",value:function(e){return!!this.completeFunction&&this.completeFunction(e)}},{key:"isDisabled",value:function(e){return!!this.disabledFunction&&this.disabledFunction(e)}}]),n}(E),N=function(e){Object(D["a"])(n,e);var t=Object(I["a"])(n);function n(e){var i;return Object(r["a"])(this,n),i=t.call(this),i.steps=e,i.steps.forEach((function(e){Object.defineProperty(Object(j["a"])(i),e.name,{get:function(){return i.steps.find((function(t){return t.name==e.name}))}})})),i}return Object(o["a"])(n,[{key:"sections",get:function(){return this.steps.map((function(e){return e.sections})).flat()}},{key:"requirements",get:function(){return this.sections.map((function(e){return e.requirements})).flat()}},{key:"getStep",value:function(e){if(isNaN(e)){var t=this.steps.find((function(t){return t.name==e}));if(!t)throw Error("Step with name ".concat(e," not found."));return t}return this.steps[e-1]}},{key:"getSection",value:function(e){return this.sections.find((function(t){return t.name==e}))}},{key:"getCurrentStep",value:function(e){return this.getStep(e.expert_panel.current_step)}}]),n}(E),P=function(e){var t=Object.keys(e.steps).map((function(t){var n=e.steps[t],i=Object.keys(n.sections).map((function(e){var t=n.sections[e];return new R(e,t.name,t.requirements,t.components)}));return new C(t,i,n.name,n.completed,n.disabled)}));return new N(t)},B=P({steps:{definition:{name:"Group Definition",sections:{basicInfo:{name:"Basic Information",requirements:[A.longName,A.shortName]},membership:{name:"Membership",requirements:[A.chairs,A.coordinators,A.coisComplete,A.institutions,A.expertiseDescription]},scope:{name:"Scope of Work",requirements:[A.genes,A.scopeDescription]},reanalysis:{name:"Reanalysis & Discrepency Resolution",requirements:[A.reanalysisAttestation]},nhgri:{name:"NHGRI Data Availability",requirements:[A.nhgri]}},completed:function(e){return e.expert_panel.defIsApproved},disabled:function(){return!1}},"draft-specifications":{name:"Draft Specifications",sections:{draftSpecs:{name:"Draft Specfications",title:null,requirements:[A.draftApprovedSpecifications]}},completed:function(e){return e.expert_panel.draftSpecificationsIsApproved},disabled:function(e){return!e.expert_panel.defIsApproved}},"pilot-specifications":{name:"Specifications Pilot",sections:{pilotSpecs:{name:"Pilot Specifications",requirements:[A.pilotedApprovedSpecifications]}},completed:function(e){return e.expert_panel.pilotSpecificationsIsApproved},disabled:function(e){return!e.expert_panel.draftSpecificationsIsApproved}},"sustained-curation":{name:"Sustained Curation",sections:{curationReviewProcess:{name:"Curation and Review Process",requirements:[A.meetingFrequency,A.curationProcess]},evidenceSummaries:{name:"Example Evidence Summaries",requirements:[A.exampleSummaries]},designations:{name:"Member Designation",requirements:[A.minimumBiocurators,A.biocuratorTrainers,A.coreApprovalMembers]}},completed:function(e){return e.expert_panel.sustainedCurationIsApproved},disabled:function(e){return!e.expert_panel.pilotSpecificationsIsApproved}}}}),M=P({steps:{definition:{title:"Group Definition",sections:{basicInfo:{name:"Basic Information",requirements:[A.longName,A.shortName]},membership:{name:"Membership",requirements:[A.chairs,A.coisComplete,A.coordinators,A.institutions]},scope:{name:"Scope of Work",requirements:[A.genes,A.scopeDescription]},attestations:{name:"Attestations",requirements:[A.gcepAttestation]},curationReviewProcess:{name:"Curation and Review Process",requirements:[A.curationProcess]},nhgri:{name:"NHGRI Data Availability",requirements:[A.nhgri]}}}}})},6062:function(e,t,n){"use strict";var i=n("6d61"),r=n("6566");e.exports=i("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(e,t,n){"use strict";var i=n("9bf2").f,r=n("7c73"),o=n("e2cc"),s=n("0366"),a=n("19aa"),u=n("2266"),c=n("7dd0"),f=n("2626"),p=n("83ab"),l=n("f1839").fastKey,d=n("69f3"),m=d.set,v=d.getterFor;e.exports={getConstructor:function(e,t,n,c){var f=e((function(e,i){a(e,f,t),m(e,{type:t,index:r(null),first:void 0,last:void 0,size:0}),p||(e.size=0),void 0!=i&&u(i,e[c],{that:e,AS_ENTRIES:n})})),d=v(t),h=function(e,t,n){var i,r,o=d(e),s=b(e,t);return s?s.value=n:(o.last=s={index:r=l(t,!0),key:t,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=s),i&&(i.next=s),p?o.size++:e.size++,"F"!==r&&(o.index[r]=s)),e},b=function(e,t){var n,i=d(e),r=l(t);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==t)return n};return o(f.prototype,{clear:function(){var e=this,t=d(e),n=t.index,i=t.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;t.first=t.last=void 0,p?t.size=0:e.size=0},delete:function(e){var t=this,n=d(t),i=b(t,e);if(i){var r=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==i&&(n.first=r),n.last==i&&(n.last=o),p?n.size--:t.size--}return!!i},forEach:function(e){var t,n=d(this),i=s(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:n.first){i(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),o(f.prototype,n?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return h(this,0===e?0:e,t)}}:{add:function(e){return h(this,e=0===e?0:e,e)}}),p&&i(f.prototype,"size",{get:function(){return d(this).size}}),f},setStrong:function(e,t,n){var i=t+" Iterator",r=v(t),o=v(i);c(e,t,(function(e,t){m(this,{type:i,target:e,state:r(e),kind:t,last:void 0})}),(function(){var e=o(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(t)}}},"6d61":function(e,t,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("f1839"),u=n("2266"),c=n("19aa"),f=n("861d"),p=n("d039"),l=n("1c7e"),d=n("d44e"),m=n("7156");e.exports=function(e,t,n){var v=-1!==e.indexOf("Map"),h=-1!==e.indexOf("Weak"),b=v?"set":"add",g=r[e],x=g&&g.prototype,y=g,w={},_=function(e){var t=x[e];s(x,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(h&&!f(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return h&&!f(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(h&&!f(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})},S=o(e,"function"!=typeof g||!(h||x.forEach&&!p((function(){(new g).entries().next()}))));if(S)y=n.getConstructor(t,e,v,b),a.enable();else if(o(e,!0)){var q=new y,k=q[b](h?{}:-0,1)!=q,O=p((function(){q.has(1)})),A=l((function(e){new g(e)})),j=!h&&p((function(){var e=new g,t=5;while(t--)e[b](t,t);return!e.has(-0)}));A||(y=t((function(t,n){c(t,y,e);var i=m(new g,t,y);return void 0!=n&&u(n,i[b],{that:i,AS_ENTRIES:v}),i})),y.prototype=x,x.constructor=y),(O||j)&&(_("delete"),_("has"),v&&_("get")),(j||k)&&_(b),h&&x.clear&&delete x.clear}return w[e]=y,i({global:!0,forced:y!=g},w),d(y,e),h||n.setStrong(y,e,v),y}},bb2f:function(e,t,n){var i=n("d039");e.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},f1839:function(e,t,n){var i=n("23e7"),r=n("d012"),o=n("861d"),s=n("5135"),a=n("9bf2").f,u=n("241c"),c=n("057f"),f=n("90e3"),p=n("bb2f"),l=!1,d=f("meta"),m=0,v=Object.isExtensible||function(){return!0},h=function(e){a(e,d,{value:{objectID:"O"+m++,weakData:{}}})},b=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!s(e,d)){if(!v(e))return"F";if(!t)return"E";h(e)}return e[d].objectID},g=function(e,t){if(!s(e,d)){if(!v(e))return!0;if(!t)return!1;h(e)}return e[d].weakData},x=function(e){return p&&l&&v(e)&&!s(e,d)&&h(e),e},y=function(){w.enable=function(){},l=!0;var e=u.f,t=[].splice,n={};n[d]=1,e(n).length&&(u.f=function(n){for(var i=e(n),r=0,o=i.length;r<o;r++)if(i[r]===d){t.call(i,r,1);break}return i},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:c.f}))},w=e.exports={enable:y,fastKey:b,getWeakData:g,onFreeze:x};r[d]=!0}}]);
//# sourceMappingURL=chunk-43472d1e.af760ab1.js.map