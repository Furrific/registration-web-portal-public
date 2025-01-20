import{u as se}from"./useTitleSetter-bey5aMhQ.js";import{P as ue}from"./permission-Ba-8wP-4.js";import{E as re,T as o,a as me}from"./Editor-BlEI-HBO.js";import{G as de}from"./group-Dg_peWef.js";import{C as Te}from"./canDo-DiQiqvDU.js";import{i as X,N as ve,$ as Z,n as c,q as C,B as v,D as q,r as f,w as k,c as pe,F as B,f as l,v as a,A as g,k as z,H as J,x as U,y as V,m as K,G as E,P as fe,V as Ee}from"./index-BN3B5MVK.js";import{G as ce}from"./userData-CMXWM4Bz.js";import{_ as Ie}from"./ModelDialog.vue_vue_type_script_setup_true_lang-CREuDO1U.js";import{b as Ne}from"./sorted-PYsDa1V2.js";import{u as Oe}from"./useConventionForms-CGGNeTlb.js";import{V as _e}from"./VSheet-B-eelWKX.js";import{e as $,V as P,d as Q}from"./VContainer-BYBjdGRN.js";import{V as A,a as m}from"./VRow-BlwCwlxD.js";import{V as y}from"./VSelect-Cc7lbyps.js";import{V as Ue,a as W}from"./VList-tdQLOc4N.js";import{V as Y}from"./VTextField-BqHafo3U.js";import{v as Ve}from"./v4-CtRu48qb.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-kQmCqNLh.js";import"./VOverlay-D1Daaytx.js";import"./forwardRefs-Cg-X1shU.js";import"./scopeId-BrM1bD9f.js";import"./createSimpleFunctional-BsqlBF8-.js";import"./layout-BQj4fCqK.js";import"./VCard-DcpMu45Q.js";import"./VToolbar-DBZeMsdi.js";import"./VDialog-DNoQCF7_.js";import"./form-DztwDfXd.js";import"./VCheckboxBtn-DQ6hhPH1.js";import"./VChip-DJDJK8S0.js";import"./VDivider-oh4Jujwc.js";const Ae=S=>S===void 0?!1:Te(S,de.GROUP_TYPE_SYSTEM).EditOrganisation,Se=X({__name:"HTMLEditor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(S,{expose:p}){const I={license_key:"gpl",content_style:"body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }"},N=ve(S,"modelValue"),b=Z("editBox");return p({insertText:O=>{b.value&&b.value.getEditor().execCommand("mceInsertContent",!1,O)}}),(O,i)=>(c(),C(v(re),{modelValue:N.value,"onUpdate:modelValue":i[0]||(i[0]=u=>N.value=u),"license-key":"gpl",plugins:"advlist code emoticons link lists table",init:I,ref:"editBox"},null,8,["modelValue"]))}}),lt=X({__name:"TemplatesView",props:{loggedIn:{type:Boolean}},async setup(S){let p,I;se("Email Templates");const N=fe(),b=ce(),{Conventions:R,Organisations:O}=([p,I]=q(()=>N.getPermissionAccessList(ue.PERMISSION_TYPE_EDIT_CONVENTION)),p=await p,I(),p),i=f(),u=f(),D=f(!1),r=f(),T=f(([p,I]=q(()=>N.getEmailTemplates()),p=await p,I(),p)),d=f("SYSTEM"),x=f([]),G=f(),ee=f([{title:"Account Display Name",subtitle:"The users current profile name",value:"ACCOUNT_DISPLAY_NAME"},{title:"Email Login Recovery URL",subtitle:"One use URL for a user to access their account.",value:"ACCOUNT_RECOVERY_URL"},{title:"Convention Name",subtitle:"The convention's name",value:"CONVENTION_NAME"},{title:"Email Verification URL",subtitle:"URL used to confirm a users email address",value:"EMAIL_VERIFICATION_URL"},{title:"Organisation Name",subtitle:"The organisation's name",value:"ORGANISATION_NAME"},{title:"Form Name",subtitle:"Name of the form that triggered this email",value:"SUBMISSION_FORM_NAME"},{title:"Registration Reference",subtitle:"Unique reference for this registration. E.g. Badge number",value:"REGISTRATION_REFERENCE"},{title:"Submission Details",subtitle:"Auto-generated details of ticket, accommodation, cost etc.",value:"SUBMISSION_DETAILS"}]),F=f(),w=[],M=Z("editor");Ae(b)&&w.push({title:"System",value:o.TARGET_TYPE_SYSTEM}),O.length>0&&w.push({title:"Organisational",value:o.TARGET_TYPE_ORGANISATION}),R.length>0&&w.push({title:"Convention",value:o.TARGET_TYPE_CONVENTION}),k(d,()=>{d.value==o.TARGET_TYPE_SYSTEM?(u.value=void 0,r.value=void 0):d.value==o.TARGET_TYPE_ORGANISATION&&(u.value=void 0)}),k(r,()=>{r.value&&u.value&&r.value.OrganisationUUID!==u.value.OrganisationUUID&&(u.value=void 0)}),k(u,()=>{ie()});const H=()=>{var n;return{ID:0,EmailTemplateUUID:Ve(),Name:"",Title:"",OwnerUUID:d.value===o.TARGET_TYPE_SYSTEM?Ee:d.value===o.TARGET_TYPE_ORGANISATION?r.value.OrganisationUUID:u.value.ConventionUUID,OwnerType:((n=me.find(t=>t.value===d.value))==null?void 0:n.value)||o.TARGET_TYPE_SYSTEM,From:"",FromName:"",Subject:"",HTML:"",AutoText:!0,Text:""}},te=pe(()=>(()=>{switch(d.value){case o.TARGET_TYPE_SYSTEM:return T.value.filter(t=>t.OwnerType===o.TARGET_TYPE_SYSTEM);case o.TARGET_TYPE_ORGANISATION:return!r.value||!r.value.OrganisationUUID?T.value.filter(t=>t.OwnerType===o.TARGET_TYPE_ORGANISATION):T.value.filter(t=>t.OwnerType===o.TARGET_TYPE_ORGANISATION&&t.OwnerUUID===r.value.OrganisationUUID);case o.TARGET_TYPE_CONVENTION:return!u.value||!u.value.ConventionUUID?!r.value||!r.value.OrganisationUUID?T.value.filter(t=>t.OwnerType===o.TARGET_TYPE_CONVENTION):T.value.filter(t=>t.OwnerType===o.TARGET_TYPE_CONVENTION&&!!R.find(e=>e.OrganisationUUID===r.value.OrganisationUUID)):T.value.filter(t=>t.OwnerType===o.TARGET_TYPE_CONVENTION&&t.OwnerUUID===u.value.ConventionUUID)}return[]})().sort((t,e)=>t.Title.localeCompare(e.Title))),le=()=>{const n=T.value.findIndex(t=>i.value&&t.EmailTemplateUUID===i.value.EmailTemplateUUID);n===-1?i.value=H():i.value=z(T.value[n])},j=(n=void 0)=>{n===void 0?i.value=H():i.value=z(n),D.value=!0},ae=async n=>{if(i.value)try{const t=await N.saveEmailTemplate(i.value);if(t){const e=T.value.findIndex(s=>s.EmailTemplateUUID===t.EmailTemplateUUID);e===-1?T.value.push(t):T.value.splice(e,1,t),await n("Template Saved"),setTimeout(()=>{i.value=void 0,D.value=!1},500)}else await n("Failed to Save")}catch{await n("Failed to Save")}},h=n=>{M.value&&M.value.insertText(n)},ie=async()=>{if(!u.value)return;const n=await Oe(u.value.ConventionUUID);n&&(n.forEach(t=>t.Sections.forEach(e=>e.Fields&&x.value.push(...e.Fields.map(s=>{var _;return{subtitle:`${t.Name} - ${e.Name}`,title:`${(_=s.Field)==null?void 0:_.Name}`,value:s.SectionFieldUUID,object:s}})))),x.value.sort(Ne("title")))},oe=()=>{h(`[%FORM_${G.value.title}_${G.value.value}%]`)},ne=()=>{h(`[%${F.value.value}%]`)};return(n,t)=>(c(),B("div",null,[l(_e,null,{default:a(()=>[l($,{class:"bg-secondary",fluid:""},{default:a(()=>[l(A,null,{default:a(()=>[l(m,{cols:"12",sm:"5",md:"3",xl:"2",class:"pa-0"},{default:a(()=>[l(y,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),label:"Level",items:w,"hide-details":""},null,8,["modelValue"])]),_:1}),d.value===v(o).TARGET_TYPE_ORGANISATION||d.value===v(o).TARGET_TYPE_CONVENTION?(c(),C(m,{key:0,cols:"12",sm:"7",md:"4",lg:"3",xl:"2",class:"pa-0"},{default:a(()=>[l(y,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),label:"Organisation",items:v(O).sort((e,s)=>e.Name.localeCompare(s.Name)),"item-title":"Name","item-value":e=>e,clearable:"","hide-details":""},null,8,["modelValue","items","item-value"])]),_:1})):g("",!0),d.value===v(o).TARGET_TYPE_CONVENTION?(c(),C(m,{key:1,cols:"12",md:"5",lg:"6",xl:"4",class:"pa-0"},{default:a(()=>[l(y,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=e=>u.value=e),label:"Convention",items:v(R).filter(e=>!r.value||e.OrganisationUUID===r.value.OrganisationUUID).sort((e,s)=>e.Name.localeCompare(s.Name)),"item-title":"Name","item-value":e=>e,clearable:"","hide-details":""},null,8,["modelValue","items","item-value"])]),_:1})):g("",!0)]),_:1})]),_:1}),l($,{fluid:""},{default:a(()=>[l(Ue,{items:te.value,"item-value":e=>e,"item-title":"Title"},{subtitle:a(({item:e})=>{var s,L;return[e.OwnerType==v(o).TARGET_TYPE_ORGANISATION?(c(),B(J,{key:0},[U(V((s=v(O).find(_=>_.OrganisationUUID===e.OwnerUUID))==null?void 0:s.Name),1)],64)):e.OwnerType==v(o).TARGET_TYPE_CONVENTION?(c(),B(J,{key:1},[U(V((L=v(R).find(_=>_.ConventionUUID===e.OwnerUUID))==null?void 0:L.Name),1)],64)):g("",!0)]}),append:a(({item:e})=>[l(P,{color:"primary","prepend-icon":"mdi:mdi-pencil",onClick:s=>j(e)},{default:a(()=>t[12]||(t[12]=[U(" Edit ")])),_:2},1032,["onClick"])]),_:1},8,["items","item-value"]),l(A,{class:"pr-4"},{default:a(()=>[l(m,{class:"text-right"},{default:a(()=>[l(P,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:t[3]||(t[3]=e=>j())},{default:a(()=>t[13]||(t[13]=[U(" Add New Template ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i.value?(c(),C(Ie,{key:0,modelValue:D.value,"onUpdate:modelValue":t[11]||(t[11]=e=>D.value=e),title:`Edit Template${i.value.Title?` - ${i.value.Title}`:""}`,onSave:ae,onReset:le,fullscreen:!0,scrollable:!0,"card-class":"pa-0 pa-sm-6","retain-focus":!1},{default:a(()=>[l($,{fluid:""},{default:a(()=>[l(A,null,{default:a(()=>[l(m,{cols:"12"},{default:a(()=>[l(Y,{label:"Template Title",variant:"outlined",modelValue:i.value.Title,"onUpdate:modelValue":t[4]||(t[4]=e=>i.value.Title=e),"hide-details":""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12"},{default:a(()=>[l(Y,{label:"Default Sender Email Address",variant:"outlined",modelValue:i.value.From,"onUpdate:modelValue":t[5]||(t[5]=e=>i.value.From=e),"hide-details":""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12"},{default:a(()=>[l(Y,{label:"Default Sender Name",variant:"outlined",modelValue:i.value.FromName,"onUpdate:modelValue":t[6]||(t[6]=e=>i.value.FromName=e),"hide-details":""},null,8,["modelValue"])]),_:1}),l(m,{cols:"12"},{default:a(()=>[l(Y,{label:"Default Email Subject",variant:"outlined",modelValue:i.value.Subject,"onUpdate:modelValue":t[7]||(t[7]=e=>i.value.Subject=e),"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(A,null,{default:a(()=>[l(m,{cols:"12"},{default:a(()=>[l(Se,{modelValue:i.value.HTML,"onUpdate:modelValue":t[8]||(t[8]=e=>i.value.HTML=e),ref_key:"editor",ref:M},null,8,["modelValue"])]),_:1})]),_:1}),l(A,null,{default:a(()=>[l(m,{cols:"9",sm:"9"},{default:a(()=>[l(y,{modelValue:F.value,"onUpdate:modelValue":t[9]||(t[9]=e=>F.value=e),label:"Other Data",items:ee.value,"item-title":"title","item-value":e=>e,variant:"outlined","hide-details":"",density:"compact",clearable:""},{item:a(({props:e,item:s})=>[l(W,K(e,{subtitle:s.raw.subtitle}),null,16,["subtitle"])]),selection:a(({item:e,index:s})=>[E("div",null,[U(V(e.title)+" ",1),t[14]||(t[14]=E("br",null,null,-1)),E("small",null,V(e.raw.subtitle),1)])]),_:1},8,["modelValue","items","item-value"])]),_:1}),l(m,{cols:"3",sm:"3",class:"text-right"},{default:a(()=>[l(P,{color:"primary",style:{"min-width":"40px"},onClick:ne},{default:a(()=>[l(Q,{icon:"mdi:mdi-plus",class:"d-sm-none"}),t[15]||(t[15]=E("span",{class:"d-none d-sm-inline"},"Add Item",-1))]),_:1})]),_:1})]),_:1}),i.value.OwnerType===v(o).TARGET_TYPE_CONVENTION?(c(),C(A,{key:0},{default:a(()=>[l(m,{cols:"9",sm:"9"},{default:a(()=>[l(y,{modelValue:G.value,"onUpdate:modelValue":t[10]||(t[10]=e=>G.value=e),label:"Form Data",items:x.value,"item-title":"title","item-value":e=>e,variant:"outlined","hide-details":"",density:"compact",clearable:""},{item:a(({props:e,item:s})=>[l(W,K(e,{subtitle:s.raw.subtitle}),null,16,["subtitle"])]),selection:a(({item:e,index:s})=>[E("div",null,[U(V(e.title)+" ",1),t[16]||(t[16]=E("br",null,null,-1)),E("small",null,V(e.raw.subtitle),1)])]),_:1},8,["modelValue","items","item-value"])]),_:1}),l(m,{cols:"3",sm:"3",class:"text-right"},{default:a(()=>[l(P,{color:"primary",style:{"min-width":"40px"},onClick:oe},{default:a(()=>[l(Q,{icon:"mdi:mdi-plus",class:"d-sm-none"}),t[17]||(t[17]=E("span",{class:"d-none d-sm-inline"},"Add Field",-1))]),_:1})]),_:1})]),_:1})):g("",!0)]),_:1})]),_:1},8,["modelValue","title"])):g("",!0)]))}});export{lt as default};
