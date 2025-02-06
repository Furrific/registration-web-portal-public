import{b as re}from"./FormRenderer.vue_vue_type_style_index_0_lang-DTstXxbo.js";import{i as ie,R as le,Q as se,r as d,c as ue,n as l,D as k,H as C,q as c,v as o,f as n,x as i,G as y,P as K,y as z,A as E,O as de,E as me}from"./index-DyMutD2Y.js";import{F as fe}from"./form-Cqw16b_M.js";import{T as pe}from"./ticket-DqurB3v3.js";import{G as ve}from"./userData-DKxNCVtc.js";import{p as ge}from"./performLoginCheck-DED7rT9z.js";import{s as ce}from"./sortSubmissions-BLiX_qgz.js";import{c as ye}from"./canEditForm-Dp_Ku7OM.js";import{l as Ie}from"./SaveButton.vue_vue_type_script_setup_true_lang-BGhfBuO8.js";import{e as x,V as F,a as A,b as G,c as L,d as _}from"./VCard-8SKc-RUn.js";import{V as b}from"./VSpacer-DYhkkHs4.js";import{V as j}from"./VGrid-CotsPpqa.js";import{V as H}from"./VContainer-DedLrPnz.js";import{V as Q,a as W,c as X}from"./VList-BWjQ4Zbb.js";const Te={class:"formView"},Ge=ie({__name:"FormView",props:{formType:{default:"REGISTRATION"}},emits:["pageTitle"],setup(N,{emit:Z}){const P=Z,ee=le(),h=se(),m=de(),I=me.getInstance(),v=d(),s=d(),q=d(),g=d(),B=d(),te=ue(()=>{var r;if(s.value!==void 0){const e=s.value;return ye([e],((r=B.value)==null?void 0:r.Submissions)||[],e.Type)}return!1}),V=d(!1),T=ve(),U=d(!0),O=d(""),u=d(),w=d(!0),J=(r,e=!1)=>{const t=()=>{const a=sessionStorage.getItem("ajt_attempt");let f=Ie.parseInt(a||"0");f<2?(sessionStorage.setItem("ajt_attempt",(f+1).toString()),setTimeout(()=>{location.reload()},1e3)):(w.value=!1,sessionStorage.removeItem("ajt_attempt"),localStorage.removeItem("ajt_token"),O.value="Invalid Token")};m.validateRegistrationInviteToken(D,e).then(a=>{a?(u.value=a,w.value=!1,sessionStorage.removeItem("ajt_attempt"),localStorage.removeItem("ajt_token")):t()}).catch(()=>{t()})},D=new URL(location.href).searchParams.get("token")||"";D!==""?(localStorage.setItem("ajt_token",location.href),J()):(w.value=!1,U.value=!1);const oe=()=>{J(D,!0)},ne=()=>{I.emit("registration.group.join")},ae=()=>{h.push("/")},M=r=>r.Type===pe.TICKET_TYPE_TICKET?r.RequiresAccommodation?"mdi:mdi-home":"mdi:mdi-ticket":r.RequiresAccommodation?"mdi:mdi-home-plus":"mdi:mdi-ticket-confirmation";ge(h);const R=r=>new Promise((e,t)=>{m.getConventionRegistrationGroup(r).then(a=>{a?(g.value=a,e(a)):t()}).catch(()=>{t()}),m.getRegistrationByConvention(r).then(a=>{a.Submissions.forEach((f,p)=>{var S;f.Form||(a.Submissions[p].Form=((S=s.value)==null?void 0:S.FormUUID)===f.FormUUID?f.Form:void 0)}),ce(a.Submissions),B.value=a})}),Y=()=>new Promise((r,e)=>{m.getConvention(ee.params.convention.toString()).then(t=>{t?(v.value=t,R(t.ConventionUUID),m.getAvailableConventionExtras(t.ConventionUUID||"",!0).then(a=>(v.value||{Extras:[]}).Extras=a),m.getAvailableConventionForms(t.ConventionUUID||"",!0).then(a=>{var f;s.value=a.find(p=>p.Type===N.formType.toUpperCase()),!s.value&&N.formType.toUpperCase()=="ADDITIONAL"&&(s.value=a.find(p=>p.Type===fe.FORM_TYPE_ADDITIONAL)),s.value?(T!=null&&T.UserUUID&&t.ConventionUUID&&m.getUserConventionSubmissions((T==null?void 0:T.UserUUID)||"",t.ConventionUUID||"").then(p=>{p&&(q.value=p.find(S=>{var $;return S.FormUUID===(($=s.value)==null?void 0:$.FormUUID)})),V.value=!0}).catch(()=>{V.value=!0}),P("pageTitle",`Convention Registration - ${((f=v.value)==null?void 0:f.Name)||"New Convention"}`)):D||h.push("/")}),r(t)):e()}).catch(()=>{e()})});return Y(),P("pageTitle","Convention Registration"),I.on("registration.group.leave",()=>{var r;m.leaveRegistrationGroup(((r=g.value)==null?void 0:r.Registration.RegistrationUUID)||"").then(e=>{var t;e&&R(((t=g.value)==null?void 0:t.Registration.ConventionUUID)||"").then(a=>{I.emit("registration.group.left",a)})})}),I.on("registration.group.join",()=>{var r;R(((r=v.value)==null?void 0:r.ConventionUUID)||"").then(()=>{Y().then(()=>{U.value=!1,(!V.value||!s.value||!v.value||!g.value)&&h.push("/")})})}),I.on("registration.group.remove.member",r=>{m.leaveRegistrationGroup(r).then(e=>{var t;e&&R(((t=g.value)==null?void 0:t.Registration.ConventionUUID)||"").then(a=>{I.emit("registration.group.left",a)})})}),(r,e)=>(l(),k("div",Te,[w.value?(l(),k(C,{key:0},[],64)):O.value?(l(),c(H,{key:1},{default:o(()=>[n(x,null,{default:o(()=>[n(F,null,{default:o(()=>[n(A,null,{default:o(()=>e[2]||(e[2]=[i(" Failed to join group ")])),_:1}),n(G,{class:"text-wrap"},{default:o(()=>e[3]||(e[3]=[i(" You have not been able to join the group. ")])),_:1})]),_:1}),n(L,null,{default:o(()=>e[4]||(e[4]=[i(" The link may have expired or already been used, request a new link from your group's leader. ")])),_:1}),n(_,null,{default:o(()=>[n(b),n(j,{color:"error",variant:"elevated",onClick:ae},{default:o(()=>e[5]||(e[5]=[i("Okay")])),_:1}),n(b)]),_:1})]),_:1})]),_:1})):U.value&&u.value?(l(),c(H,{key:2},{default:o(()=>[u.value.Match?(l(),c(x,{key:0},{default:o(()=>[n(F,null,{default:o(()=>[n(A,null,{default:o(()=>e[6]||(e[6]=[i(" Joined Group ")])),_:1}),n(G,{class:"text-wrap"},{default:o(()=>e[7]||(e[7]=[i(" You have successfully linked your registration. The leader of your group will be responsible for deciding on your accommodation and days you're attending. If you are not happy with this you can leave the group and ask them to join you. Alternatively, if you're unable to agree on options you will need to find a different partner. ")])),_:1})]),_:1}),n(L,null,{default:o(()=>e[8]||(e[8]=[i(" Your accommodation and ticket options that require accommodation will now be controlled by your group leader. ")])),_:1}),n(_,null,{default:o(()=>[n(b),n(j,{color:"error",variant:"elevated",onClick:ne},{default:o(()=>e[9]||(e[9]=[i("Okay")])),_:1}),n(b)]),_:1})]),_:1})):(l(),c(x,{key:1},{default:o(()=>[n(F,null,{default:o(()=>[n(A,null,{default:o(()=>e[10]||(e[10]=[i(" Join Group - Warning ")])),_:1}),n(G,{class:"text-wrap"},{default:o(()=>e[11]||(e[11]=[i(" The leader of the sharing group you're joining has selected different ticket options for the accommodation. ")])),_:1})]),_:1}),n(L,null,{default:o(()=>[u.value&&u.value.MemberTickets.length?(l(),k(C,{key:0},[e[12]||(e[12]=y("strong",null,"These ticket options will be removed",-1)),e[13]||(e[13]=y("br",null,null,-1)),n(Q,null,{default:o(()=>[(l(!0),k(C,null,K(u.value.MemberTickets,t=>(l(),c(W,{key:t.TicketUUID,"prepend-icon":M(t)},{default:o(()=>[n(X,null,{default:o(()=>[i(z(t.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):E("",!0),u.value&&u.value.LeaderTickets.length?(l(),k(C,{key:1},[e[14]||(e[14]=y("strong",null,"These ticket options will be added",-1)),n(Q,null,{default:o(()=>[(l(!0),k(C,null,K(u.value.LeaderTickets,t=>(l(),c(W,{key:t.TicketUUID,"prepend-icon":M(t)},{default:o(()=>[n(X,null,{default:o(()=>[i(z(t.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):E("",!0),e[15]||(e[15]=y("p",null,[i(" If you do not wish to attend for the same days please "),y("span",{class:"text-red-darken-1 font-weight-bold"},"reject"),i(" this join request. ")],-1)),e[16]||(e[16]=y("p",null,[i(" If you wish to adjust your choices to match the group leader's please "),y("span",{class:"text-green font-weight-bold"},"accept"),i(" this join request. ")],-1))]),_:1}),n(_,null,{default:o(()=>[n(j,{color:"error",variant:"elevated",onClick:e[0]||(e[0]=t=>U.value=!1)},{default:o(()=>e[17]||(e[17]=[i("Reject")])),_:1}),n(b),n(j,{color:"success",variant:"elevated",onClick:oe},{default:o(()=>e[18]||(e[18]=[i("Accept")])),_:1})]),_:1})]),_:1}))]),_:1})):(!U.value||!u.value)&&V.value&&s.value&&v.value&&g.value?(l(),c(re,{key:3,modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t),convention:v.value,data:q.value,editable:te.value,"registration-group":g.value},null,8,["modelValue","convention","data","editable","registration-group"])):E("",!0)]))}});export{Ge as _};
