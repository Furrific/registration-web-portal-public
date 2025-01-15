import{s as G}from"./index-fwfMqYug.js";import{i as P,r as D,V as L,n as V,q as b,v as n,f as l,x as N,F as E,P as Y,M as A,N as j,c as ae,w as le,D as R,H as K,A as w,y as F,Q as te,z as J,Y as x}from"./index-CTNPV0x_.js";import{v as ne}from"./v4-CtRu48qb.js";import{V as p,d as S,e as oe}from"./VContainer-CZN_Sn5S.js";import{a as q,V as H}from"./VToolbar-NbpKL4YR.js";import{V as Q}from"./scopeId-NJFn0-Zt.js";import{V as X}from"./VToolbarItems-CKhFHlK6.js";import{V as ie,a as M}from"./VRow-BLfORGJ8.js";import{V as z}from"./VTextField-C_8itqSc.js";import{c as Z,e as _}from"./VCard-YVij60-R.js";import{a as se}from"./VList-BYmbYEiB.js";import{V as ue}from"./VDivider-BB5qJdGQ.js";import{V as re}from"./VAutocomplete-8IBkgYt4.js";import{V as de}from"./VDialog-DwnxlpNt.js";import{s as W,a as ve,m as me}from"./FormRenderer.vue_vue_type_style_index_0_lang-CP11Fkru.js";import{V as fe,a as ce,b as ge,c as Ue}from"./VExpansionPanels-BjuPMXcr.js";import{u as ee}from"./VAlert-C3WOuW6f.js";var v=(e=>(e[e.UNKNOWN=0]="UNKNOWN",e[e.JSON=1]="JSON",e[e.TAG=2]="TAG",e[e.STRING=3]="STRING",e[e.UUID_ARRAY=4]="UUID_ARRAY",e))(v||{});const Te=P({__name:"AddTag",props:{convention:{},organisation:{}},emits:["save","close"],setup(e,{emit:y}){const u=D(""),i=D("");typeof e.convention=="object"?(u.value=e.convention.ConventionUUID,i.value=e.convention.OrganisationUUID):u.value=e.convention||"",typeof e.organisation=="object"?i.value=e.organisation.OrganisationUUID:i.value.length===0&&(i.value=e.organisation||"");const d=y,g=D({ID:0,TagUUID:ne(),ConventionID:0,ConventionUUID:u.value||L,OrganisationID:0,OrganisationUUID:i.value||L,Title:"",Key:""}),U=Y(),T=()=>{U.saveTag(g.value).then(c=>{c&&(g.value=c,d("save",c),d("close"))})};return(c,s)=>(V(),b(_,null,{default:n(()=>[l(H,{dark:"",color:"primary"},{default:n(()=>[l(p,{icon:"",dark:"",onClick:s[0]||(s[0]=a=>d("close"))},{default:n(()=>[l(S,null,{default:n(()=>s[3]||(s[3]=[N("mdi:mdi-close")])),_:1})]),_:1}),l(q,null,{default:n(()=>s[4]||(s[4]=[N("Add Tag")])),_:1}),l(Q),l(X,null,{default:n(()=>[l(p,{variant:"text",onClick:T},{default:n(()=>s[5]||(s[5]=[N(" Save ")])),_:1})]),_:1})]),_:1}),l(Z,null,{default:n(()=>[l(oe,{fluid:!0},{default:n(()=>[l(ie,null,{default:n(()=>[l(M,{cols:"12"},{default:n(()=>[l(z,{label:E(G).formLabelDisplayName,type:"text",variant:"outlined",modelValue:g.value.Title,"onUpdate:modelValue":s[1]||(s[1]=a=>g.value.Title=a)},null,8,["label","modelValue"])]),_:1}),l(M,{cols:"12"},{default:n(()=>[l(z,{label:E(G).formLabelTagKey,type:"text",variant:"outlined",modelValue:g.value.Key,"onUpdate:modelValue":s[2]||(s[2]=a=>g.value.Key=a)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Le=P({__name:"SelectTags",props:A({convention:{},organisation:{},chips:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},hint:{default:""},label:{},variant:{},showKey:{type:Boolean,default:!1},showUuid:{type:Boolean,default:!1},inputType:{default:()=>v.UNKNOWN}},{modelValue:{required:!0},modelModifiers:{}}),emits:A(["change"],["update:modelValue"]),setup(e,{emit:y}){const u=j(e,"modelValue"),i=y,d=D([]),g=Y(),U=D([]),T=D([]),c=D(""),s=D(""),a=D(v.UNKNOWN),m=ae(()=>[...U.value,...T.value].map(r=>({title:`${r.Title}${e.showKey?` [ ${r.Key} ]`:""}${e.showUuid?` (${r.TagUUID})`:""}`,value:d.value.find(t=>t&&t.TagUUID&&t.TagUUID===r.TagUUID)||r})));typeof e.convention=="object"?(c.value=e.convention.ConventionUUID,s.value=e.convention.OrganisationUUID):c.value=e.convention||"",typeof e.organisation=="object"?s.value=e.organisation.OrganisationUUID:s.value.length===0&&(s.value=e.organisation||""),(async()=>{const o=[];c.value&&o.push(g.getConventionTags(c.value)),s.value&&o.push(g.getOrganisationTags(s.value));const r=await Promise.all(o);if(c.value&&s.value?(T.value=r[0].sort((t,f)=>t.Title.localeCompare(f.Title)),U.value=r[1].sort((t,f)=>t.Title.localeCompare(f.Title))):c.value&&r.length==1?T.value=r[0].sort((t,f)=>t.Title.localeCompare(f.Title)):s.value&&r.length==1&&(U.value=r[0].sort((t,f)=>t.Title.localeCompare(f.Title))),e.inputType===v.TAG||e.inputType===v.UNKNOWN&&Array.isArray(u.value))a.value=v.TAG,m.value.forEach(t=>{Array.isArray(u.value)&&u.value.find(C=>C.TagUUID===t.value.TagUUID)&&d.value.push(t.value)});else if(e.inputType===v.JSON||e.inputType===v.UNKNOWN&&typeof u.value=="string"){a.value=v.JSON;try{const t=JSON.parse(u.value);m.value.forEach(f=>{t.find(h=>h.TagUUID===f.value.TagUUID)&&d.value.push(f.value)})}catch{}}else if(e.inputType===v.UUID_ARRAY){a.value=v.UUID_ARRAY;try{const t=u.value,f=[...U.value,...T.value];d.value=t.map(C=>f.find(h=>h.TagUUID==C))}catch{}}else if(e.inputType===v.STRING){a.value=v.STRING;try{if(typeof u.value!="string")return;const t=JSON.parse(u.value),f=[...U.value,...T.value];d.value=t.map(C=>f.find(h=>h.TagUUID==C))}catch{}}})();const I=D(!1),k=()=>{I.value=!0},O=o=>{o.ConventionUUID.length>0?T.value.push(o):o.OrganisationUUID.length>0&&U.value.push(o),d.value.push(o),$()},$=()=>{switch(a.value){default:case v.TAG:{u.value=d.value,i("change");break}case v.JSON:{u.value=JSON.stringify(d.value),i("change");break}case v.STRING:{u.value=JSON.stringify(d.value.map(o=>o&&o.TagUUID?o.TagUUID:"")),i("change");break}case v.UUID_ARRAY:{u.value=d.value.map(o=>o&&o.TagUUID?o.TagUUID:""),i("change");break}}};return le(d,$),(o,r)=>(V(),R(K,null,[l(re,{modelValue:d.value,"onUpdate:modelValue":r[1]||(r[1]=t=>d.value=t),chips:o.chips,multiple:"",label:o.label||"Tags",variant:o.variant||"solo",hint:o.hint,"persistent-hint":!0,clearable:o.clearable,items:m.value,"item-title":"title","item-value":"value"},{"prepend-item":n(()=>[l(se,{title:"New Tag",onClick:r[0]||(r[0]=t=>k())},{prepend:n(()=>[l(S,{icon:"mdi:mdi-plus"})]),_:1}),l(ue,{class:"mt-2"})]),_:1},8,["modelValue","chips","label","variant","hint","clearable","items"]),l(de,{modelValue:I.value,"onUpdate:modelValue":r[3]||(r[3]=t=>I.value=t),scrollable:!0},{default:n(()=>[l(Te,{convention:o.convention,organisation:o.organisation,onClose:r[2]||(r[2]=t=>I.value=!1),onSave:O},null,8,["convention","organisation"])]),_:1},8,["modelValue"])],64))}}),Ee=P({__name:"EditOrderedItems",props:A({closeable:{type:Boolean,default:!1},showDelete:{type:Boolean,default:!0},hasOrder:{type:Boolean,default:!0},newItem:{type:[Function,Boolean]},label:{default:"Name"},labelParent:{default:""},title:{default:"Edit Ordered Items"},showSave:{type:Boolean,default:!1},slotNamePrefix:{default:"item"}},{modelValue:{required:!0},modelModifiers:{}}),emits:A(["add","save","close"],["update:modelValue"]),setup(e,{emit:y}){const u=y,i=j(e,"modelValue"),d=()=>{u("save"),u("close")},g=()=>{if(e.newItem){let a;e.hasOrder?(a=e.newItem(),a.Order=i.value.length+1):a=e.newItem(),i.value.push(a)}else e.hasOrder?i.value.push({ID:0,Order:i.value.length+1}):i.value.push({ID:0})},U=a=>{i.value.splice(a,1)},T=a=>{ve(a,i.value)},c=a=>{me(a,i.value)},s=a=>e.labelParent&&a[e.labelParent]?a[e.labelParent][e.label]:a[e.label];return i.value.find(a=>a.Order===0)&&W(i.value),i.value.find(a=>i.value.find(m=>m.Order===a.Order&&m!==a))&&W(i.value),(a,m)=>(V(),b(_,null,{default:n(()=>[l(H,{dark:"",color:"primary"},{default:n(()=>[a.closeable?(V(),b(p,{key:0,icon:"",dark:"",onClick:m[0]||(m[0]=I=>u("close"))},{default:n(()=>[l(S,null,{default:n(()=>m[1]||(m[1]=[N("mdi:mdi-close")])),_:1})]),_:1})):w("",!0),l(q,null,{default:n(()=>[N(F(a.title),1)]),_:1}),l(Q),l(X,null,{default:n(()=>[a.newItem!==void 0?(V(),b(p,{key:0,variant:"text",onClick:g},{default:n(()=>m[2]||(m[2]=[N(" Add ")])),_:1})):w("",!0),a.showSave?(V(),b(p,{key:1,variant:"text",onClick:d},{default:n(()=>m[3]||(m[3]=[N(" Save ")])),_:1})):w("",!0)]),_:1})]),_:1}),l(Z,{class:"pa-0"},{default:n(()=>[l(fe,null,{default:n(()=>[(V(!0),R(K,null,te(i.value,(I,k)=>(V(),b(ce,{key:I.ID,class:"mt-0"},{default:n(()=>[l(ge,null,{actions:n(({expanded:O})=>[a.showDelete?(V(),b(p,{key:0,icon:"mdi:mdi-close",size:"x-small",color:"red",class:"mr-1",onClick:$=>U(k)},null,8,["onClick"])):w("",!0),l(S,{class:"align-self-center text-h5",icon:O?"mdi:mdi-chevron-up":"mdi:mdi-chevron-down",variant:"flat",size:"x-small"},null,8,["icon"])]),default:n(()=>[a.hasOrder?(V(),R(K,{key:0},[l(p,{icon:"mdi:mdi-menu-up",size:"x-small",color:"primary",class:"mr-1",onClick:J(O=>c(I),["stop"])},null,8,["onClick"]),l(p,{icon:"mdi:mdi-menu-down",size:"x-small",color:"secondary",class:"mr-4",onClick:J(O=>T(I),["stop"])},null,8,["onClick"])],64)):w("",!0),x(a.$slots,`${a.slotNamePrefix}_${k}_title`,{},()=>[N(F(s(I)),1)])]),_:2},1024),l(Ue,{class:"px-0"},{default:n(()=>[x(a.$slots,`${a.slotNamePrefix}_${k}`)]),_:2},1024)]),_:2},1024))),128))]),_:3})]),_:3})]),_:3}))}}),B="linked_fields",Ie=()=>({badge_name:"",forename:"",surname:"",dob:""}),Ve=async e=>{const{getConventionConfig:y}=ee();return await y(e,B)||Ie()},De=async(e,y)=>{const{saveConventionConfig:u}=ee();return await u(e,B,y)};function Fe(){return{getLinkedFields:Ve,saveLinkedFields:De,linkedFieldsKey:B}}export{v as I,Le as _,Ee as a,Fe as u};