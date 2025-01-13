import{m as $,u as F,A as J,_ as G}from"./runner-CutLe06p.js";import{i as N,r as n,T as q,b as z,D as x,q as R,A as V,v as a,H as j,P as H,E as K,U as Y,R as Q,n as f,f as o,x as m,y as W,F as X}from"./index-CBLLpUz9.js";import{a as Z}from"./SaveButton.vue_vue_type_script_setup_true_lang-W2LxZMAA.js";import{e as A,V as I,p as h}from"./VContainer-B8rCAnu7.js";import{V as E,a as w,b as L,c as M,d as ee,e as O}from"./VCard-Y9mUxmlm.js";import{a as te,V as ae}from"./VRow-Dua_LBqL.js";import{a as oe}from"./VTable-CR87L6jZ.js";import"./useModel-BA--I4rp.js";import"./ModelDialog.vue_vue_type_script_setup_true_lang-BoMHv9_6.js";import"./forwardRefs-D2qfTUv9.js";import"./VToolbar-BM5-SCo4.js";import"./scopeId-BrXlor02.js";import"./createSimpleFunctional-B2WXtTo3.js";import"./VDialog-C024KNjo.js";import"./VOverlay-D_-l4zJw.js";import"./date-DgbCHIwC.js";import"./VList-CblLDVXr.js";import"./VDivider-CGDLo0GR.js";import"./filter-BIEPd0Rr.js";import"./VTextField-DzG2RcF6.js";import"./form-AVbvne_u.js";import"./VCheckboxBtn-BHNAyBiz.js";import"./VChip-BqZGdnTV.js";import"./userData-nh_vnEMC.js";import"./canEditRegistrations-B3Kc_ewU.js";import"./group-Dg_peWef.js";import"./canDo-BgLTIlvB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ticket-DqurB3v3.js";import"./useStoreAPI-DIKF_PY7.js";import"./form-Cqw16b_M.js";import"./submission-DAi9v6uc.js";import"./v4-CtRu48qb.js";import"./VAutocomplete-Its23xqJ.js";import"./VExpansionPanels-DbWyvN6M.js";import"./VDataTable-BNh2xrur.js";import"./DeleteDialog.vue_vue_type_script_setup_true_lang-CoSkbzC1.js";import"./SelectGroups.vue_vue_type_script_setup_true_lang-DjbIA7wf.js";import"./VTextarea-B-2_JoAJ.js";import"./useDisplayTransactions--LRmXaiJ.js";import"./VForm-DeEbDkTJ.js";import"./VNavigationDrawer-B3xgGCPh.js";import"./layout-CGgVoJGL.js";const ne=N({__name:"RunnerSocket",emits:["data","ready","updating","updated"],setup(P,{emit:T}){const S=H(),k=K.getInstance(),y=Y(),g=Q(),u=T,C=n(),d=n(),p=n(),v=n(!1),_=n(!1),l=n(""),U=n(!1),s=$({mode:"host",wsUri:S.getRunnerSocketURL()}),i=q.getInstance();k.on("badge_serial_update",t=>{const e={Command:"BADGE_SERIAL_UPDATE",Params:new Map,Data:JSON.stringify(t)};s.JSON(e)}),s.on("authenticated",()=>{r()}),s.on("auth_failed",()=>{v.value=!1}),s.on("convention_data",t=>{if(!t)return;const e=t;C.value=e.Convention,u("updated",e),u("ready")}),s.on("error",t=>{const e=t;l.value=`Error: ${F(e.Message)}`,U.value=!0,v.value||(_.value=!0)}),s.on("joined",()=>{v.value=!0;const t={Command:"GET_CURRENT_REGISTRATION",Params:new Map,Data:""};s.JSON(t),u("ready")}),s.on("kicked",()=>{g.push("/")}),s.on("open",()=>{const t=i.getTokenByService("GrazeAPI");s.send(`AUTH ${t==null?void 0:t.AccessToken}`)}),s.on("runner_data",t=>{if(!t)return;const e=t;if(!(!e.RunnerLayout||!e.Registration)){if(u("data",e),d.value=e.RunnerLayout,p.value=e.Registration,!C.value||e.RunnerLayout.ConventionUUID!==C.value.ConventionUUID){u("updating"),c(e.RunnerLayout.ConventionUUID);return}u("ready")}});const r=()=>{const t={Key:y.params.session||"",Mode:"runner",UserUUID:y.params.user||""},e={Command:"SET_MODE",Params:new Map,Data:JSON.stringify(t)};s.JSON(e)},c=t=>{const D={Command:"GET_CONVENTION_DATA",Params:new Map,Data:JSON.stringify({ConventionUUID:t})};s.JSON(D)};z(()=>{s.destroy()});const b=()=>{g.push("/")},B=()=>{location.reload()};return(t,e)=>(f(),x(j,null,[U.value?(f(),R(Z,{key:0,modelValue:U.value,"onUpdate:modelValue":e[0]||(e[0]=D=>U.value=D),message:l.value,timeout:1e4},null,8,["modelValue","message"])):V("",!0),_.value?(f(),R(A,{key:1},{default:a(()=>[o(O,{"max-width":"620",class:"mx-auto",elevation:"10"},{default:a(()=>[o(E,{class:"bg-red-darken-4"},{default:a(()=>[o(w,null,{default:a(()=>e[2]||(e[2]=[m(" Connection Failure ")])),_:1}),o(L,{style:{opacity:"0.8"}},{default:a(()=>e[3]||(e[3]=[m(" Failed to establish connection to host ")])),_:1})]),_:1}),o(M,{class:"mt-4"},{default:a(()=>[m(W(l.value),1)]),_:1}),o(ee,{class:"justify-space-between"},{default:a(()=>[o(I,{"prepend-icon":"mdi:mdi-home",variant:"flat",color:"primary",onClick:e[1]||(e[1]=D=>X(g).push("/"))},{default:a(()=>e[4]||(e[4]=[m(" Dashboard ")])),_:1}),o(I,{"prepend-icon":"mdi:mdi-reload",variant:"flat",color:"success",onClick:B},{default:a(()=>e[5]||(e[5]=[m(" Retry ")])),_:1})]),_:1})]),_:1})]),_:1})):V("",!0),v.value?(f(),R(A,{key:2,fluid:!0},{default:a(()=>[o(ae,null,{default:a(()=>[o(te,{class:"text-center"},{default:a(()=>[o(I,{"prepend-icon":"mdi:mdi-link-variant-remove",variant:"flat",color:"error",onClick:b,elevation:"10"},{default:a(()=>e[6]||(e[6]=[m(" Disconnect ")])),_:1})]),_:1})]),_:1})]),_:1})):V("",!0)],64))}}),Ye=N({__name:"RunnerView",emits:["pageTitle"],setup(P,{emit:T}){T("pageTitle","Registration Runner");const k=n([]),y=n(),g=n([]),u=n([]),C=n([]),d=n({ID:0,AdminLayoutUUID:"",ConventionID:0,ConventionUUID:"",Name:"",RunnerLayoutUUID:"",Type:J.ADMIN_LAYOUT_PANELS,Panels:[]}),p=n(),v=n([]),_=n([]),l=n(!1),U=i=>{p.value=void 0,setTimeout(()=>{d.value=i.RunnerLayout,p.value=i.Registration},200)},s=i=>{k.value=i.Accommodations,y.value=i.Convention,g.value=i.Extras,u.value=i.Forms,C.value=i.Interests,v.value=i.Tickets,_.value=i.Venues,d.value&&(l.value=!0)};return(i,r)=>(f(),x("div",null,[l.value&&d.value&&y.value&&p.value?(f(),R(oe,{key:0},{default:a(()=>[o(G,{convention:y.value,tickets:v.value,accommodations:k.value,extras:g.value,venues:_.value,interests:C.value,forms:u.value,layout:d.value,"onUpdate:layout":r[0]||(r[0]=c=>d.value=c),modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=c=>p.value=c)},null,8,["convention","tickets","accommodations","extras","venues","interests","forms","layout","modelValue"])]),_:1})):l.value?(f(),R(A,{key:1},{default:a(()=>[o(O,{"max-width":"620",class:"mx-auto",elevation:"10"},{default:a(()=>[o(E,{class:"bg-orange-darken-3"},{default:a(()=>[o(w,null,{default:a(()=>r[4]||(r[4]=[m(" Awaiting Data ")])),_:1}),o(L,{style:{opacity:"0.9"}},{default:a(()=>r[5]||(r[5]=[m(" Display will update as soon as host provides registration details ")])),_:1})]),_:1}),o(M,{class:"mt-4 text-center"},{default:a(()=>[o(h,{indeterminate:!0,size:60,width:"8",color:"orange"})]),_:1})]),_:1})]),_:1})):V("",!0),o(ne,{onData:U,onReady:r[2]||(r[2]=c=>l.value=!0),onUpdating:r[3]||(r[3]=c=>l.value=!1),onUpdated:s})]))}});export{Ye as default};