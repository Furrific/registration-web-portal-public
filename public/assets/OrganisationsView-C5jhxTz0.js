import{i as R,M as P,N as $,r as d,k as W,n as V,q as w,v as a,f as e,x as v,y as k,F as p,A as S,B as Z,_ as M,Q as J,l as X,V as ee,D as G,P as ae,H as E}from"./index-DNBeotG3.js";import{s as x}from"./index-BYlZ_NAX.js";import{u as h}from"./useStoreAPI-CpcjG88J.js";import{_ as te}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-ClMQvftb.js";import{e as A,c as le,V as oe,a as ne,b as ie,d as se}from"./VCard-SGkMbqRk.js";import{V as re,a as ue}from"./VToolbar-DOgftO5D.js";import{V as me}from"./scopeId-BPObRBOj.js";import{V as de}from"./VToolbarItems-lDH2xiVO.js";import{V as U,d as fe,e as B}from"./VContainer-CM9UiuYN.js";import{V as g,a as f}from"./VRow-VzRHcCvq.js";import{V as q}from"./forwardRefs-CZWDVZ94.js";import{V as T}from"./VTextField-EYweSwzG.js";import{V as F}from"./VForm-B248r1jl.js";import{V as ge}from"./VFileInput-CdaS1nPL.js";import{V as pe}from"./VTextarea-hKDwWNiY.js";import{G as z}from"./userData-XZepIG_J.js";import{V as ve}from"./VDialog-06y-Mkzu.js";import{C as Ve}from"./canEditOrganisation-rgH0NLbg.js";import{G as ce}from"./group-Dg_peWef.js";import{C as _e}from"./canDo-BkkV9rsW.js";import{v as Ce}from"./v4-CQkTLCs1.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-VJoI7nmZ.js";import"./VOverlay-BJ8f55u7.js";import"./layout-C6Tz2jM6.js";import"./createSimpleFunctional-sHKoRSOj.js";import"./form-MJTAegWK.js";import"./VChip-YMuwXVim.js";const Ie=(c,_)=>{if(c===void 0)return!1;const i=_e(c,ce.GROUP_TYPE_ORGANISATION,_.OrganisationUUID);return i.EditOrganisation||i.EditConvention||i.ManageViews||i.ViewRegistration||i.EditRegistration||i.ManageUsers},De=R({__name:"EditOrganisation",props:{modelValue:{required:!0},modelModifiers:{}},emits:P(["change","close","delete"],["update:modelValue"]),setup(c,{emit:_}){const i=_,r=Z(),y=h(),C=$(c,"modelValue"),o=d(W(C.value)),I=d(`${y.GetOrganisationLogoURL(o.value.OrganisationUUID)}?${new Date().getTime()}`),D=d(),s=d(),t=d(!1),O=d(""),u=d(),b=async()=>{var l;const n=new FormData((l=s.value)==null?void 0:l.$el);if(n.get("Image")&&n.get("Image").size>0)return n.set("OrganisationUUID",o.value.OrganisationUUID),await y.SaveOrganisationLogo(n)},Y=()=>{var n;b(),(n=u.value)==null||n.validate().then(l=>{l&&r.saveOrganisation(o.value).then(m=>{m&&(C.value=m,i("change"),i("close"))})})},L=d({available:n=>!0,min:n=>n.length>=4||"Minimum 4 characters",required:n=>!!n||"Required.",valid:n=>!/[^0-9a-z_-]/.test(n)||"Only lower-case letters, numbers, hyphens and underscores permitted"}),N=()=>{t.value=!1},j=()=>{t.value=!0},K=d(`
<p class="mb-2">
  Are you sure you wish to delete this organisation? All data relating to it will be
  removed including all conventions their respective registrations and payment information.
  This action can not be undone.
</p>
<p class="mb-2">
  We are talking some Thanos level shit right here, if you proceed a team of super-powered
  beings with Daddy issues will hunt you down through time, space and a social media
  platform formerly known as twitter.
</p>
<p>
  To confirm type "I CLICK MY FINGERS" in the box below.
</p>
`),H=n=>{O.value="",r.deleteOrganisation(o.value.OrganisationUUID).then(l=>{l?n&&n("Organisation Deleted"):n&&n("Failed to Delete Organisation"),setTimeout(()=>{N(),i("delete")},2e3)}).catch(()=>{n&&(n("Failed to Delete Organisation"),setTimeout(N,2e3))})},Q=()=>{I.value=URL.createObjectURL(D.value.files[0])};return(n,l)=>(V(),w(F,{"fast-fail":"",ref_key:"form",ref:u},{default:a(()=>[e(A,null,{default:a(()=>[e(re,{dark:"",color:"primary"},{default:a(()=>[e(ue,null,{default:a(()=>[v(k(o.value.Name),1)]),_:1}),e(me),e(de,null,{default:a(()=>[e(U,{variant:"text",onClick:j},{default:a(()=>l[6]||(l[6]=[v(" Delete ")])),_:1}),e(U,{variant:"text",onClick:Y},{default:a(()=>l[7]||(l[7]=[v(" Save ")])),_:1}),e(U,{icon:"",dark:"",onClick:l[0]||(l[0]=m=>i("close"))},{default:a(()=>[e(fe,null,{default:a(()=>l[8]||(l[8]=[v("mdi:mdi-close")])),_:1})]),_:1})]),_:1})]),_:1}),e(le,null,{default:a(()=>[e(B,{fluid:!0},{default:a(()=>[e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(q,{class:"imgLogo mx-auto",src:I.value||""},null,8,["src"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(T,{label:p(x).formLabelName,type:"text",variant:"outlined",modelValue:o.value.Name,"onUpdate:modelValue":l[1]||(l[1]=m=>o.value.Name=m)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(T,{label:p(x).formLabelSlug,pattern:"[a-zA-Z0-9_\\-]{6,25}",rules:[L.value.available,L.value.min,L.value.required,L.value.valid],type:"text",variant:"outlined",modelValue:o.value.Slug,"onUpdate:modelValue":l[2]||(l[2]=m=>o.value.Slug=m)},null,8,["label","rules","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(T,{label:p(x).formLabelDomain,type:"text",variant:"outlined",modelValue:o.value.Domain,"onUpdate:modelValue":l[3]||(l[3]=m=>o.value.Domain=m)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,null,{default:a(()=>[e(F,{ref_key:"organisationImageForm",ref:s,enctype:"multipart/form-data"},{default:a(()=>[e(ge,{label:p(x).formLabelLogo,name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:D,accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp","hide-details":"",onChange:Q},null,8,["label"])]),_:1},512)]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(pe,{label:p(x).formLabelCSS,type:"text",variant:"outlined",modelValue:o.value.CSS,"onUpdate:modelValue":l[4]||(l[4]=m=>o.value.CSS=m)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t.value?(V(),w(te,{key:0,modelValue:t.value,"onUpdate:modelValue":l[5]||(l[5]=m=>t.value=m),title:`Delete ${o.value.Name}`,subtitle:"Your will be done",message:K.value,"confirmation-text":"I CLICK MY FINGERS",onDelete:H},null,8,["modelValue","title","message"])):S("",!0)]),_:1},512))}}),Oe=M(De,[["__scopeId","data-v-fc387945"]]),we=R({__name:"OrganisationCard",props:{modelValue:{required:!0},modelModifiers:{}},emits:P(["delete"],["update:modelValue"]),setup(c,{emit:_}){const i=z();(!i||!i.Groups.find(s=>s.Permission.EditConvention)&&!i.Groups.find(s=>s.Permission.EditOrganisation)&&!i.Groups.find(s=>s.Permission.EditRegistration)&&!i.Groups.find(s=>s.Permission.ManageViews)&&!i.Groups.find(s=>s.Permission.ViewRegistration))&&J().push("/");const r=$(c,"modelValue"),y=_,C=h(),o=d(!1),I=d(""),D=()=>{I.value=`${C.GetOrganisationLogoURL(r.value.OrganisationUUID)}?${new Date().getTime()}`};return D(),(s,t)=>{const O=X("RouterLink");return V(),w(A,null,{default:a(()=>[e(oe,{class:"flex-1-1 align-content-start"},{default:a(()=>[e(q,{class:"imgLogo mx-auto",src:I.value||""},null,8,["src"]),e(ne,null,{default:a(()=>[v(k(r.value.Name),1)]),_:1}),e(ie,null,{default:a(()=>[v(k(r.value.Slug),1)]),_:1})]),_:1}),e(se,null,{default:a(()=>[e(g,{"no-gutters":""},{default:a(()=>[e(f,{class:"ma-1"},{default:a(()=>[e(U,{variant:"tonal",color:"primary",onClick:t[0]||(t[0]=u=>o.value=!0),width:"100%"},{default:a(()=>t[5]||(t[5]=[v("Edit")])),_:1})]),_:1}),S("",!0),e(f,{class:"ma-1"},{default:a(()=>[e(O,{to:`/admin/organisations/${r.value.Slug?r.value.Slug:r.value.OrganisationUUID}`},{default:a(()=>[e(U,{variant:"tonal",color:"green",width:"100%"},{default:a(()=>t[7]||(t[7]=[v("Convention Manager")])),_:1})]),_:1},8,["to"])]),_:1})]),_:1})]),_:1}),e(ve,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=u=>o.value=u),scrollable:!0,fullscreen:!0,persistent:!0},{default:a(()=>[e(Oe,{onClose:t[1]||(t[1]=u=>o.value=!1),modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=u=>r.value=u),onDelete:t[3]||(t[3]=u=>{o.value=!1,y("delete")}),onChange:D},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})}}}),Ue=M(we,[["__scopeId","data-v-13dc9387"]]),Je=R({__name:"OrganisationsView",emits:["pageTitle"],setup(c,{emit:_}){const i=ee.getInstance(),r=d([]);_("pageTitle","Organisations");const C=z(),o=()=>{const s={ID:0,OrganisationUUID:Ce(),Name:"New Organisation",Slug:"",Logo:"",Domain:"",CSS:""};i.saveOrganisation(s).then(t=>{t&&r.value.push(t)})},I=s=>{r.value.splice(s,1)};return(()=>{i.getOrganisations().then(s=>{r.value=s})})(),(s,t)=>(V(),w(B,null,{default:a(()=>[e(g,null,{default:a(()=>[(V(!0),G(E,null,ae(r.value,(O,u)=>(V(),G(E,{key:O.ID},[p(Ie)(p(C),O)?(V(),w(f,{key:0,cols:"12",sm:"6",md:"4",lg:"3",class:"d-flex flex-column"},{default:a(()=>[e(Ue,{modelValue:r.value[u],"onUpdate:modelValue":b=>r.value[u]=b,class:"elevation-5 flex-1-0 d-flex flex-column",onDelete:b=>I(u)},null,8,["modelValue","onUpdate:modelValue","onDelete"])]),_:2},1024)):S("",!0)],64))),128))]),_:1}),e(g,null,{default:a(()=>[p(Ve)(p(C))?(V(),w(f,{key:0,class:"text-right"},{default:a(()=>[e(U,{color:"primary",onClick:o},{default:a(()=>t[0]||(t[0]=[v("New")])),_:1})]),_:1})):S("",!0)]),_:1})]),_:1}))}});export{Je as default};