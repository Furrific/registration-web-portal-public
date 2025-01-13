import{i as K,M as Ie,N as Ue,j as Ee,r as A,w as ae,n as e,q as i,v as n,f as u,x as l,G as c,z as _e,y as I,A as g,O as De,P as le,k as ve,D as r,H as v,Q as Y,F as d,c as G,l as oe,m as Ae}from"./index-Drc01tpV.js";import{G as se}from"./userData-DbuSD3r0.js";import{_ as we}from"./LoginView.vue_vue_type_script_setup_true_lang-1_LSM2_z.js";import{s as te}from"./index-fwfMqYug.js";import{F as E}from"./form-Cqw16b_M.js";import{S as N,a as be}from"./submission-DAi9v6uc.js";import{u as pe}from"./useStoreAPI-DKgZ7-ro.js";import{c as J}from"./canEditForm-DYPU9LM6.js";import{s as Ce}from"./sortSubmissions-BLiX_qgz.js";import{P as Q,a as Pe,u as Oe}from"./useDisplayTransactions-Drg84V1Z.js";import{l as Re}from"./stripe.esm-C9RHaPzS.js";import{_ as Fe}from"./ModelDialog.vue_vue_type_script_setup_true_lang-B0h-2zKp.js";import{e as ee,V as f,p as Ve}from"./VContainer-BrTJyE9h.js";import{V as Ne}from"./VAlert-CdMypBwr.js";import{V as he}from"./VForm-BZVkU6Hg.js";import{V as H,a as x}from"./VRow-CucF70af.js";import{V as ye}from"./scopeId-CLTfZgTK.js";import{V as Me}from"./SaveButton.vue_vue_type_script_setup_true_lang-BpUpkngg.js";import{f as Le,h as fe}from"./date-DgbCHIwC.js";import{V as ge,a as Z,b as ce,c as ne,d as $e,e as Se}from"./VCard-r0xlsVIK.js";import{V as Te}from"./forwardRefs-DiNsudo7.js";import{V as Ye}from"./VTooltip-CojnnMyo.js";import{V as xe,a as ze,c as Be,d as Ge}from"./VList-D6Xgt1QJ.js";import{_ as ke}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./emailFormVariant-DbFKH7n9.js";import"./LoginButton-BFp_Qt_J.js";import"./VToolbar-R3JhZpYq.js";import"./VDialog-FfzIFHEX.js";import"./VOverlay-7xpFCsTE.js";import"./createSimpleFunctional-CRP4sHjJ.js";import"./form-Ig5h2KDs.js";import"./layout-BY6BSOO-.js";import"./VDivider-rexNvCGO.js";const He=K({__name:"StripePayment",props:Ie({paymentTransactions:{},registration:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(U){const _=Ue(U,"modelValue"),R=le(),P=se(),S=Ee(),s=A(),T=A(),k=A((P==null?void 0:P.Additional.Email)||""),y=A(!1),M=A("");let L;const z=A(!1);ae(_,b=>{b&&U.registration&&R.stripePublicKey(U.registration.ConventionUUID).then(async m=>{m&&(T.value=await Re(m),await W(T.value))})});const q=b=>{M.value=b,y.value=!0};async function W(b){var t;if(!b)return;const m=await R.stripePaymentIntent(((t=U.registration)==null?void 0:t.RegistrationUUID)||""),w={theme:"stripe"};S.current.value.dark&&(w.theme="night"),L=b.elements({clientSecret:m,appearance:w});const $=L.create("linkAuthentication",{defaultValues:{email:k.value}});$.mount("#link-authentication-element"),$.on("change",p=>{k.value=p.value.email});const B={layout:"tabs"};L.create("payment",B).mount("#payment-element")}async function X(b,m){var B;if(!m)return;b.preventDefault(),z.value=!0;const w=new URL(location.href);w.pathname+=`payment/stripe/processing/${(B=U.registration)==null?void 0:B.ConventionUUID}`;const{error:$}=await m.confirmPayment({elements:L,confirmParams:{return_url:w.toString(),receipt_email:k.value}});$.type==="card_error"||$.type==="validation_error"?q($.message):q("An unexpected error occurred."),z.value=!1}return(b,m)=>(e(),i(Fe,{modelValue:_.value,"onUpdate:modelValue":m[4]||(m[4]=w=>_.value=w),title:"Make a Payment",color:"blue-darken-4",fullscreen:"",persistent:""},{default:n(()=>[u(ee,{class:"pa-0"},{default:n(()=>[u(Ne,{class:"mb-2",closable:!0},{title:n(()=>m[5]||(m[5]=[l(" Payment Information ")])),text:n(()=>m[6]||(m[6]=[c("p",{class:"my-4"},[l(" Payments are non-refundable, please check our "),c("a",{target:"_blank",href:"https://www.scotiacon.org.uk/about/policies"},"policies"),l(" for further information. ")],-1),c("p",{class:"my-4"}," You must be over 18 to attend the convention and be able to produce valid ID matching the details on your registration. ",-1),c("p",{class:"my-4"}," If you are unable to provide valid ID when asked at the convention you will not be issued your attendee badge. ",-1),c("p",{class:"my-4"}," Payments should be made by the authorised card holder only. ",-1),c("p",{class:"my-4"},[l(" Please contact "),c("a",{href:"mailto:registration@scotiacon.org.uk"},"registration@scotiacon.org.uk"),l(" if you need any further assistance. ")],-1)])),_:1}),u(he,{ref_key:"paymentForm",ref:s,id:"payment-form",onSubmit:m[1]||(m[1]=_e(w=>X(w,T.value),["prevent"]))},{default:n(()=>[u(H,null,{default:n(()=>[u(x,null,{default:n(()=>m[7]||(m[7]=[c("div",{id:"link-authentication-element"},null,-1)])),_:1})]),_:1}),u(H,null,{default:n(()=>[u(x,null,{default:n(()=>m[8]||(m[8]=[c("div",{id:"payment-element"},null,-1)])),_:1})]),_:1}),u(H,null,{default:n(()=>[b.registration?(e(),i(x,{key:0,class:"font-weight-bold text-right"},{default:n(()=>[l(" Payment Amount: £"+I(b.registration.Total-b.registration.Paid),1)]),_:1})):g("",!0)]),_:1}),u(H,null,{default:n(()=>[u(x,{class:"text-right",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:n(()=>[u(f,{color:"error",class:"w-100",onClick:m[0]||(m[0]=w=>_.value=!1)},{default:n(()=>m[9]||(m[9]=[l("Cancel")])),_:1})]),_:1}),u(ye),u(x,{class:"text-left",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:n(()=>[u(f,{type:"submit",color:"success",class:"w-100"},De({default:n(()=>[m[10]||(m[10]=l(" Pay Now "))]),_:2},[z.value?{name:"prepend",fn:n(()=>[u(Ve,{size:"20",indeterminate:""})]),key:"0"}:void 0]),1024)]),_:1})]),_:1})]),_:1},512)]),_:1}),u(Me,{modelValue:y.value,"onUpdate:modelValue":m[3]||(m[3]=w=>y.value=w)},{actions:n(()=>[u(f,{variant:"text",onClick:m[2]||(m[2]=w=>y.value=!1)},{default:n(()=>m[11]||(m[11]=[l(" Close ")])),_:1})]),default:n(()=>[l(I(M.value)+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]))}}),qe={key:0},je={key:1,class:"v-row"},Ke={key:0,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},We={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},Je={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},Qe={key:1,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},Xe={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},Ze={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},et={class:"v-col v-col-2 align-self-end text-right py-1 text-no-wrap"},tt={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},nt={class:"v-col v-col-3 align-self-end text-right py-1 text-no-wrap"},ot={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},at=K({__name:"AttendeeTransactionList",props:{paymentTransactions:{},registration:{}},setup(U){const _=U,R=A(ve(_.paymentTransactions));ae(_,()=>{R.value=ve(_.paymentTransactions)});const P=(S,s)=>S.Type===Q.PAYMENT_TRANSACTION_TYPE_CHARGE&&s.Type!==Q.PAYMENT_TRANSACTION_TYPE_CHARGE?-1:S.Type!==Q.PAYMENT_TRANSACTION_TYPE_CHARGE&&s.Type===Q.PAYMENT_TRANSACTION_TYPE_CHARGE||(S.UpdatedAt||0)>(s.UpdatedAt||0)?1:S.UpdatedAt===s.UpdatedAt?0:-1;return(S,s)=>S.paymentTransactions.length==0&&S.registration.Total==0?(e(),r("p",qe," Your registration is currently being processed, payment information will appear here when ready. ")):(e(),r("dl",je,[(e(!0),r(v,null,Y(R.value.sort(P),T=>{var k;return e(),r(v,{key:T.PaymentTransactionUUID},[T.Type===d(Q).PAYMENT_TRANSACTION_TYPE_CHARGE?(e(),r("dt",Ke,[c("div",We,I(T.Description.split(":")[0]),1),c("div",Je,I(T.Description.split(":")[1]),1)])):(e(),r("dt",Qe,[c("div",Xe,I((k=d(Pe).find(y=>y.value===T.Type))==null?void 0:k.title),1),c("div",Ze," [ "+I(d(Le)(T.UpdatedAt||""))+" ] "+I(T.Description),1)])),c("dd",et," £"+I(T.Amount),1)],64)}),128)),s[0]||(s[0]=c("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Total Charges ",-1)),c("dd",tt," £"+I(S.registration.Total),1),s[1]||(s[1]=c("dt",{class:"v-col v-col-9 py-1 font-weight-bold"}," Current Payments ",-1)),c("dd",nt," £"+I(S.registration.Paid),1),s[2]||(s[2]=c("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Balance Due ",-1)),c("dd",ot," £"+I(S.registration.Total-S.registration.Paid),1)]))}}),lt=["innerHTML"],st={key:0},it={key:0,class:"font-weight-bold float-left pt-1 w-50"},rt={key:1,class:"pa-1"},ut={class:"font-weight-bold float-left pt-1 w-50 pt-3",style:{clear:"both"}},dt={class:"pt-2"},mt={key:0,class:"font-weight-bold float-left pt-1 w-50",style:{clear:"both"}},vt={key:1},ft={class:"font-weight-bold float-left pt-1 w-50",style:{clear:"both"}},ct={class:"text-red-darken-4"},pt={key:1,class:"text-red-darken-4 mt-4"},yt=K({__name:"OpenConvention",props:{convention:{},forms:{default:()=>[]}},setup(U){const _=pe(),R=le(),{getPaymentTransactions:P}=Oe(),S=A(_.GetConventionLogoURL(U.convention.ConventionUUID)),s=A(),T=A([]),k=A([]),y=A([]),M=A(!1),L=A([]),z=G(()=>{var o;return J(U.forms,((o=s.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_REGISTRATION)}),q=G(()=>{var o;return J(U.forms,((o=s.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_DEALER)}),W=G(()=>{var o;return J(U.forms,((o=s.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_BADGE)}),X=G(()=>{var o;return J(U.forms,((o=s.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_ACCOMMODATION)}),b=G(()=>{var o;return J(U.forms,((o=s.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_ADDITIONAL)}),m=G(()=>s.value?U.forms.filter(o=>{var t;return o.State.Independent?(t=s.value)!=null&&t.Submissions?o.State.New?!s.value.Submissions.find(p=>{var F;return((F=p.Form)==null?void 0:F.FormUUID)===o.FormUUID}):!1:o.State.New:!1}):U.forms),w=G(()=>{var o,t;return s.value&&((o=s.value)!=null&&o.Submissions)?!!((t=s.value)!=null&&t.Submissions.find(p=>{var F;return((F=p.Form)==null?void 0:F.Type)==E.FORM_TYPE_REGISTRATION&&(p.Status==N.SUBMISSION_STATUS_ACCEPTED||p.Status==N.SUBMISSION_STATUS_COMPLETED)})):!1}),$=async()=>{s.value&&"RegistrationUUID"in s.value&&R.getRegistrationAllocationPeriods(s.value.RegistrationUUID).then(o=>{o&&(k.value=[],T.value=o,T.value.sort((t,p)=>t.DateStart>p.DateStart?1:-1).forEach(t=>{var F;const p=k.value.find(C=>{var O;return C.name===((O=t.Accommodation)==null?void 0:O.Name)});if(p){const C=p.periods.find(V=>V.start===t.DateEnd),O=p.periods.find(V=>V.end===t.DateStart);C?C.start=t.DateStart:O?O.end=t.DateEnd:p.periods.push({start:t.DateStart,end:t.DateEnd})}else k.value.push({name:((F=t.Accommodation)==null?void 0:F.Name)||"",periods:[{start:t.DateStart,end:t.DateEnd}]})}))}).catch(()=>{})},B=()=>{R.getRegistrationByConvention(U.convention.ConventionUUID).then(o=>{var t;o&&(o.Submissions?(o.Submissions.forEach((p,F)=>{p.Form||(o.Submissions[F].Form=U.forms.find(C=>C.FormUUID===p.FormUUID))}),Ce(o.Submissions)):o.Submissions=[],s.value=o,$(),w.value&&P(((t=s.value)==null?void 0:t.RegistrationUUID)||"").then(p=>{y.value=p}))})};return ae(()=>U.forms,()=>{B()}),B(),(o,t)=>{const p=oe("router-link"),F=oe("RouterLink");return e(),i(Se,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:n(()=>[u(ge,{class:"flex-1-1 align-content-start"},{default:n(()=>[S.value?(e(),i(Te,{key:0,src:S.value,title:o.convention.Name,class:"logo text-center"},null,8,["src","title"])):g("",!0),o.convention.Name?(e(),i(Z,{key:1,class:"text-center"},{default:n(()=>[l(I(o.convention.Name),1)]),_:1})):g("",!0),o.convention.Description?(e(),i(ce,{key:2,class:"text-wrap subtitle"},{default:n(()=>[c("div",{innerHTML:o.convention.Description},null,8,lt)]),_:1})):g("",!0)]),_:1}),u(ne,null,{default:n(()=>{var C,O,V;return[s.value?(e(),r("dl",st,[s.value.Reference?(e(),r("dt",it," Badge No: ")):g("",!0),s.value.Reference?(e(),r("dd",rt," #"+I(s.value.Reference),1)):g("",!0),m.value.length>0?(e(),r(v,{key:2},[t[2]||(t[2]=c("dt",null,[c("h3",null,"Forms Available")],-1)),t[3]||(t[3]=c("dd",{class:"mb-2"}," The following forms are currently available for completion. ",-1))],64)):g("",!0),(e(!0),r(v,null,Y(m.value,(a,h)=>(e(),r(v,{key:a.FormUUID},[c("dt",ut,I(a.Heading),1),c("dd",dt,[(a==null?void 0:a.Type)===d(E).FORM_TYPE_DEALER?(e(),i(p,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:n(()=>[a!=null&&a.State.Edit&&q.value?(e(),i(f,{key:0,size:"small",variant:"flat",color:"success",class:"ml-2"},{default:n(()=>t[4]||(t[4]=[l(" Open form ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[5]||(t[5]=[l("View")])),_:1}))]),_:2},1032,["to"])):(a==null?void 0:a.Type)===d(E).FORM_TYPE_BADGE?(e(),i(p,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/badge`},{default:n(()=>[a!=null&&a.State.Edit&&W.value?(e(),i(f,{key:0,size:"small",variant:"flat",color:"success",class:"ml-2"},{default:n(()=>t[6]||(t[6]=[l(" Open form ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[7]||(t[7]=[l("View")])),_:1}))]),_:2},1032,["to"])):(a==null?void 0:a.Type)===d(E).FORM_TYPE_ADDITIONAL?(e(),i(p,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:n(()=>[a!=null&&a.State.Edit&&b.value?(e(),i(f,{key:0,size:"small",variant:"flat",color:"success",class:"ml-2"},{default:n(()=>t[8]||(t[8]=[l(" Open form ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[9]||(t[9]=[l("View")])),_:1}))]),_:2},1032,["to"])):g("",!0)])],64))),128)),((C=s.value)==null?void 0:C.Submissions.length)>0?(e(),r(v,{key:3},[t[10]||(t[10]=c("dt",{class:"mt-3"},[c("h3",null,"Received Forms")],-1)),t[11]||(t[11]=c("dd",{class:"mb-2"}," The following forms have been received from you. ",-1))],64)):g("",!0),(e(!0),r(v,null,Y((O=s.value)==null?void 0:O.Submissions,(a,h)=>{var j,ie,re,ue,de,me;return e(),r(v,{key:a.SubmissionUUID},[a.Form?(e(),r(v,{key:0},[a.Form?(e(),r("dt",mt,I(a.Form.Heading),1)):g("",!0),a.Form?(e(),r("dd",vt,[u(Ye,{modelValue:L.value[h],"onUpdate:modelValue":D=>L.value[h]=D},{activator:n(({props:D})=>[u(f,Ae({ref_for:!0},D,{color:"blue-darken-2",icon:"mdi:mdi-information",variant:"text",size:"xs",onClick:Et=>L.value[h]=!L.value[h]}),null,16,["onClick"])]),default:n(()=>[a.Status===d(N).SUBMISSION_STATUS_NULL?(e(),r(v,{key:0},[l(" There is an error with your submission, please contact the registration team for support. ")],64)):a.Status===d(N).SUBMISSION_STATUS_INCOMPLETE?(e(),r(v,{key:1},[l(" Something is missing on your submission which requires completing to be able to process your request. Please contact the registration team for further advice. ")],64)):a.Status===d(N).SUBMISSION_STATUS_OPEN?(e(),r(v,{key:2},[l(" Your submission has been received by our system but you may still make changes before the registration team begins processing it. ")],64)):a.Status===d(N).SUBMISSION_STATUS_OPEN_2?(e(),r(v,{key:3},[l(" Your submission has been received by our system but you may still make changes before the registration team begins processing it. ")],64)):a.Status===d(N).SUBMISSION_STATUS_LOCKED?(e(),r(v,{key:4},[l(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):a.Status===d(N).SUBMISSION_STATUS_LOCKED_2?(e(),r(v,{key:5},[l(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):a.Status===d(N).SUBMISSION_STATUS_ACCEPTED?(e(),r(v,{key:6},[l(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):a.Status===d(N).SUBMISSION_STATUS_COMPLETED?(e(),r(v,{key:7},[l(" Congratulations everything is complete. If you need to make changes please get in touch. ")],64)):a.Status===d(N).SUBMISSION_STATUS_REJECTED?(e(),r(v,{key:8},[l(" Your request has been unsuccessful. Contact the convention team for assistance. ")],64)):a.Status===d(N).SUBMISSION_STATUS_INVALID?(e(),r(v,{key:9},[l(" Your request has been identified as having errors or being incomplete. Please contact the registration team for additional support. ")],64)):a.Status===d(N).SUBMISSION_STATUS_CANCELLED?(e(),r(v,{key:10},[l(" Your submission has been cancelled. This may be at your request or another reason. The registration team will be able to provide further details. ")],64)):(e(),r(v,{key:11},[l(" Please contact the registration team for support. ")],64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),l(" "+I(d(be)(a.Status,(j=a.Form)==null?void 0:j.Type))+" ",1),((ie=a.Form)==null?void 0:ie.Type)===d(E).FORM_TYPE_REGISTRATION?(e(),i(p,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&z.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[12]||(t[12]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[13]||(t[13]=[l("View")])),_:1}))]}),_:2},1032,["to"])):((re=a.Form)==null?void 0:re.Type)===d(E).FORM_TYPE_ACCOMMODATION?(e(),i(p,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&X.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[14]||(t[14]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[15]||(t[15]=[l("View")])),_:1}))]}),_:2},1032,["to"])):((ue=a.Form)==null?void 0:ue.Type)===d(E).FORM_TYPE_DEALER?(e(),i(p,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&q.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[16]||(t[16]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[17]||(t[17]=[l("View")])),_:1}))]}),_:2},1032,["to"])):((de=a.Form)==null?void 0:de.Type)===d(E).FORM_TYPE_BADGE?(e(),i(p,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/badge`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&W.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[18]||(t[18]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[19]||(t[19]=[l("View")])),_:1}))]}),_:2},1032,["to"])):((me=a.Form)==null?void 0:me.Type)===d(E).FORM_TYPE_ADDITIONAL?(e(),i(p,{key:4,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&b.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[20]||(t[20]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[21]||(t[21]=[l("View")])),_:1}))]}),_:2},1032,["to"])):g("",!0)])):g("",!0)],64)):g("",!0)],64)}),128)),((V=s.value)==null?void 0:V.Submissions.length)>=1?(e(!0),r(v,{key:4},Y(o.forms,a=>{var h;return e(),r(v,{key:a.FormUUID},[!((h=s.value)!=null&&h.Submissions.find(j=>j.FormUUID===a.FormUUID))&&!a.State.Independent?(e(),r(v,{key:0},[c("dt",ft,I(a.Heading),1),c("dd",ct,[t[32]||(t[32]=l(" Requires Completion ")),a.Type===d(E).FORM_TYPE_REGISTRATION?(e(),i(p,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:n(()=>[a.State.Edit&&z.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[22]||(t[22]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[23]||(t[23]=[l("View")])),_:1}))]),_:2},1032,["to"])):a.Type===d(E).FORM_TYPE_ACCOMMODATION?(e(),i(p,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:n(()=>[a.State.Edit&&X.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[24]||(t[24]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[25]||(t[25]=[l("View")])),_:1}))]),_:2},1032,["to"])):a.Type===d(E).FORM_TYPE_DEALER?(e(),i(p,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:n(()=>[a.State.Edit&&q.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[26]||(t[26]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[27]||(t[27]=[l("View")])),_:1}))]),_:2},1032,["to"])):a.Type===d(E).FORM_TYPE_BADGE?(e(),i(p,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/badge`},{default:n(()=>[a.State.Edit&&W.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[28]||(t[28]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[29]||(t[29]=[l("View")])),_:1}))]),_:2},1032,["to"])):a.Type===d(E).FORM_TYPE_ADDITIONAL?(e(),i(p,{key:4,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:n(()=>[a.State.Edit&&b.value?(e(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>t[30]||(t[30]=[l(" Edit ")])),_:1})):(e(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>t[31]||(t[31]=[l("View")])),_:1}))]),_:2},1032,["to"])):g("",!0)])],64)):g("",!0)],64)}),128)):g("",!0)])):g("",!0),s.value&&s.value.Submissions.length>=1&&o.forms.filter(a=>{var h;return!a.State.Independent&&!((h=s.value)!=null&&h.Submissions.find(j=>j.FormUUID==a.FormUUID))}).length>0?(e(),r("div",pt,t[33]||(t[33]=[c("strong",null,"There are forms above that require completion, please edit and save them.",-1)]))):g("",!0)]}),_:1}),k.value.length>0?(e(),r(v,{key:0},[u(Z,{class:"pb-0"},{default:n(()=>t[34]||(t[34]=[l("Allocated Accommodation")])),_:1}),u(ce,{class:"text-wrap"},{default:n(()=>t[35]||(t[35]=[l("The following accommodation has been allocated to your registration. In some cases this may not have been your first choice.")])),_:1}),u(ne,null,{default:n(()=>[u(xe,{density:"compact"},{default:n(()=>[(e(!0),r(v,null,Y(k.value,C=>(e(),i(ze,{key:C.name},{default:n(()=>[u(Be,null,{default:n(()=>[l(I(C.name),1)]),_:2},1024),(e(!0),r(v,null,Y(C.periods,O=>(e(),i(Ge,{key:O.start},{default:n(()=>[l(" ("+I(d(fe)(O.start))+" - "+I(d(fe)(O.end))+")",1),t[36]||(t[36]=c("br",null,null,-1))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1})],64)):g("",!0),w.value&&s.value?(e(),r(v,{key:1},[u(Z,{class:"pb-4"},{default:n(()=>t[37]||(t[37]=[l("Payment Information")])),_:1}),u(ne,null,{default:n(()=>[u(at,{"payment-transactions":y.value,registration:s.value},null,8,["payment-transactions","registration"])]),_:1})],64)):g("",!0),u($e,null,{default:n(()=>{var C,O;return[o.convention.DetailLink?(e(),i(f,{key:0,color:"warning",href:o.convention.DetailLink,variant:"flat"},{default:n(()=>[l(I(d(te).buttonDetails),1)]),_:1},8,["href"])):g("",!0),u(ye),z.value?(e(),r(v,{key:1},[(C=s.value)!=null&&C.Submissions.find(V=>{var a;return((a=V.Form)==null?void 0:a.Type)===d(E).FORM_TYPE_REGISTRATION})?(e(),i(F,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:n(()=>[u(f,{color:"primary",variant:"flat"},{default:n(()=>[l(I(d(te).buttonViewRegistration),1)]),_:1})]),_:1},8,["to"])):(e(),r(v,{key:0},[(O=o.forms.find(V=>V.Type===d(E).FORM_TYPE_REGISTRATION))!=null&&O.State.New?(e(),i(F,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:n(()=>[u(f,{color:"success",variant:"flat"},{default:n(()=>[l(I(d(te).buttonRegister),1)]),_:1})]),_:1},8,["to"])):g("",!0)],64))],64)):w.value&&s.value&&s.value.Total>s.value.Paid?(e(),r(v,{key:2},[u(f,{color:"success",variant:"elevated",onClick:t[0]||(t[0]=V=>M.value=!0)},{default:n(()=>t[38]||(t[38]=[l(" Make Payment ")])),_:1}),s.value?(e(),i(He,{key:0,"payment-transactions":y.value,registration:s.value,modelValue:M.value,"onUpdate:modelValue":t[1]||(t[1]=V=>M.value=V)},null,8,["payment-transactions","registration","modelValue"])):g("",!0)],64)):g("",!0)]}),_:1})]),_:1})}}}),gt=ke(yt,[["__scopeId","data-v-1f68fd74"]]),St=K({__name:"Conventions",setup(U){const _=le(),R=pe(),P=A([]),S=A([]),s=A([]);return _.getOpenConventionsList().then(T=>{T&&(S.value=[...S.value,...T],_.getAvailableConventionForms(S.value.map(k=>k.ConventionUUID)).then(k=>{s.value=[...s.value,...k]}).catch(k=>{console.error(k)}),_.getAttendedConventions().then(k=>{P.value=k}))}),(T,k)=>(e(),r(v,null,[u(ee,null,{default:n(()=>[u(H,{class:"justify-center"},{default:n(()=>[(e(!0),r(v,null,Y(S.value,y=>(e(),i(x,{key:y.ConventionUUID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:n(()=>[u(gt,{convention:y,forms:s.value.filter(M=>M.ConventionUUID===y.ConventionUUID)},null,8,["convention","forms"])]),_:2},1024))),128))]),_:1})]),_:1}),P.value.length>0?(e(),i(ee,{key:0,fluid:"",class:"px-0"},{default:n(()=>[u(H,{class:"bg-blue-darken-4"},{default:n(()=>[u(x,null,{default:n(()=>k[0]||(k[0]=[c("h3",{class:"font-weight-regular px-4"}," Convention Sticker Collection ",-1)])),_:1})]),_:1}),u(H,{class:"justify-center"},{default:n(()=>[(e(!0),r(v,null,Y(P.value,y=>(e(),i(x,{key:y.ConventionUUID,cols:"8",sm:"6",md:"4",lg:"3",xl:"2"},{default:n(()=>[u(Se,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:n(()=>[u(ge,{class:"flex-1-1 align-content-start"},{default:n(()=>[u(Te,{src:d(R).GetConventionLogoURL(y.ConventionUUID),title:y.Name,class:"logo text-center"},null,8,["src","title"]),y.Name?(e(),i(Z,{key:0,class:"text-center text-wrap"},{default:n(()=>[l(I(y.Name),1)]),_:2},1024)):g("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):g("",!0)],64))}}),Tt={};function kt(U,_){return e(),r("div")}const It=ke(Tt,[["render",kt]]),Ut=K({__name:"MainView",emits:["pageTitle"],setup(U,{emit:_}){_("pageTitle","Scotiacon Registration System"),sessionStorage.getItem("reload")==="true"&&(sessionStorage.removeItem("reload"),setTimeout(()=>{location.reload()},500));const S=localStorage.getItem("gjt_token"),s=localStorage.getItem("ajt_token");S?(localStorage.removeItem("gjt_token"),location.href=S):s&&(localStorage.removeItem("ajt_token"),location.href=s);const T=A(se());return(k,y)=>{const M=oe("router-link");return e(),r(v,null,[T.value&&(!T.value.Additional||!T.value.Additional.Email)?(e(),i(ee,{key:0,class:"bg-red-darken-4 text-center",fluid:!0},{default:n(()=>[y[1]||(y[1]=l(" Please enter a Contact Email on the ")),u(M,{to:"/profile",class:"text-white font-weight-bold"},{default:n(()=>y[0]||(y[0]=[l("manage account page")])),_:1}),y[2]||(y[2]=l(" to ensure we can contact you. "))]),_:1})):g("",!0),u(St),u(It)],64)}}}),on=K({__name:"Home",props:{loggedIn:{type:Boolean}},emits:["pageTitle"],setup(U,{emit:_}){const R=se(),P=_;return P("pageTitle","Telegram Login"),(S,s)=>(e(),r("div",null,[S.loggedIn&&d(R)?(e(),i(Ut,{key:0,onPageTitle:s[0]||(s[0]=T=>P("pageTitle",T))})):(e(),i(we,{key:1}))]))}});export{on as default};
