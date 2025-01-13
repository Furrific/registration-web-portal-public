import{i as j,M as Ie,N as Ee,j as _e,r as C,C as Ae,w as ae,n as t,q as i,v as n,f as u,O as ve,x as s,G as p,z as De,y as U,A as y,P as le,k as fe,D as r,H as v,Q as L,F as d,c as z,l as oe,m as Ce}from"./index-CBLLpUz9.js";import{G as se}from"./userData-nh_vnEMC.js";import{_ as we}from"./LoginView.vue_vue_type_script_setup_true_lang-DT2YP4xt.js";import{s as te}from"./index-fwfMqYug.js";import{F as E}from"./form-Cqw16b_M.js";import{S as V,a as be}from"./submission-DAi9v6uc.js";import{u as ge}from"./useStoreAPI-DIKF_PY7.js";import{c as J}from"./canEditForm-d-Vg02La.js";import{s as Oe}from"./sortSubmissions-BLiX_qgz.js";import{P as Q,a as Pe,u as Re}from"./useDisplayTransactions--LRmXaiJ.js";import{l as Fe}from"./stripe.esm-v5H38J3X.js";import{_ as Ve}from"./ModelDialog.vue_vue_type_script_setup_true_lang-BoMHv9_6.js";import{u as Ne}from"./useStripeConfig-CXOsdZ-H.js";import{e as ee,V as f,p as Me}from"./VContainer-B8rCAnu7.js";import{V as he}from"./VAlert-DFZ_e4wC.js";import{V as Le}from"./VForm-DeEbDkTJ.js";import{V as B,a as $}from"./VRow-Dua_LBqL.js";import{V as ye}from"./scopeId-BrXlor02.js";import{V as $e}from"./SaveButton.vue_vue_type_script_setup_true_lang-W2LxZMAA.js";import{f as Ye,h as ce}from"./date-DgbCHIwC.js";import{V as Se,a as Z,b as pe,c as ne,d as xe,e as Te}from"./VCard-Y9mUxmlm.js";import{V as ke}from"./forwardRefs-D2qfTUv9.js";import{V as ze}from"./VTooltip-BafPXn_B.js";import{V as Be,a as Ge,c as He,d as qe}from"./VList-CblLDVXr.js";import{_ as Ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./emailFormVariant-DbFKH7n9.js";import"./LoginButton-BnrY784j.js";import"./VToolbar-BM5-SCo4.js";import"./VDialog-C024KNjo.js";import"./VOverlay-D_-l4zJw.js";import"./createSimpleFunctional-B2WXtTo3.js";import"./form-AVbvne_u.js";import"./layout-CGgVoJGL.js";import"./VDivider-CGDLo0GR.js";const je=["innerHTML"],Ke=j({__name:"StripePayment",props:Ie({paymentTransactions:{},registration:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],async setup(T){let _,R;const b=Ee(T,"modelValue"),g=le(),l=se(),I=_e(),k=C(),S=C((l==null?void 0:l.Additional.Email)||""),N=C(!1),Y=C("");let h;const x=C(!1),{getStripeConfig:K}=Ne(),G=C();T.registration&&(G.value=([_,R]=Ae(()=>K(T.registration.ConventionUUID)),_=await _,R(),_)),ae(b,O=>{O&&T.registration&&g.stripePublicKey(T.registration.ConventionUUID).then(async c=>{c&&(k.value=await Fe(c),await X(k.value))})});const H=O=>{Y.value=O,N.value=!0};async function X(O){var A;if(!O)return;const c=await g.stripePaymentIntent(((A=T.registration)==null?void 0:A.RegistrationUUID)||""),o={theme:"stripe"};I.current.value.dark&&(o.theme="night"),h=O.elements({clientSecret:c,appearance:o});const e=h.create("linkAuthentication",{defaultValues:{email:S.value}});e.mount("#link-authentication-element"),e.on("change",w=>{S.value=w.value.email});const m={layout:"tabs"};h.create("payment",m).mount("#payment-element")}async function W(O,c){var m;if(!c)return;O.preventDefault(),x.value=!0;const o=new URL(location.href);o.pathname+=`payment/stripe/processing/${(m=T.registration)==null?void 0:m.ConventionUUID}`;const{error:e}=await c.confirmPayment({elements:h,confirmParams:{return_url:o.toString(),receipt_email:S.value}});e.type==="card_error"||e.type==="validation_error"?H(e.message):H("An unexpected error occurred."),x.value=!1}return(O,c)=>(t(),i(Ve,{modelValue:b.value,"onUpdate:modelValue":c[4]||(c[4]=o=>b.value=o),title:"Make a Payment",color:"blue-darken-4",fullscreen:"",persistent:""},{default:n(()=>[u(ee,{class:"pa-0"},{default:n(()=>[u(he,{class:"mb-2 stripe-payment-information",closable:!0},ve({title:n(()=>[c[5]||(c[5]=s(" Payment Information "))]),_:2},[G.value?{name:"text",fn:n(()=>[p("div",{innerHTML:G.value.payment_information_html},null,8,je)]),key:"0"}:void 0]),1024),u(Le,{ref:"paymentForm",id:"payment-form",onSubmit:c[1]||(c[1]=De(o=>W(o,k.value),["prevent"]))},{default:n(()=>[u(B,null,{default:n(()=>[u($,null,{default:n(()=>c[6]||(c[6]=[p("div",{id:"link-authentication-element"},null,-1)])),_:1})]),_:1}),u(B,null,{default:n(()=>[u($,null,{default:n(()=>c[7]||(c[7]=[p("div",{id:"payment-element"},null,-1)])),_:1})]),_:1}),u(B,null,{default:n(()=>[O.registration?(t(),i($,{key:0,class:"font-weight-bold text-right"},{default:n(()=>[s(" Payment Amount: £"+U(O.registration.Total-O.registration.Paid),1)]),_:1})):y("",!0)]),_:1}),u(B,null,{default:n(()=>[u($,{class:"text-right",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:n(()=>[u(f,{color:"error",class:"w-100",onClick:c[0]||(c[0]=o=>b.value=!1)},{default:n(()=>c[8]||(c[8]=[s("Cancel")])),_:1})]),_:1}),u(ye),u($,{class:"text-left",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:n(()=>[u(f,{type:"submit",color:"success",class:"w-100"},ve({default:n(()=>[c[9]||(c[9]=s(" Pay Now "))]),_:2},[x.value?{name:"prepend",fn:n(()=>[u(Me,{size:"20",indeterminate:""})]),key:"0"}:void 0]),1024)]),_:1})]),_:1})]),_:1})]),_:1}),u($e,{modelValue:N.value,"onUpdate:modelValue":c[3]||(c[3]=o=>N.value=o)},{actions:n(()=>[u(f,{variant:"text",onClick:c[2]||(c[2]=o=>N.value=!1)},{default:n(()=>c[10]||(c[10]=[s(" Close ")])),_:1})]),default:n(()=>[s(U(Y.value)+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]))}}),We={key:0},Je={key:1,class:"v-row"},Qe={key:0,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},Xe={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},Ze={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},et={key:1,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},tt={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},nt={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},ot={class:"v-col v-col-2 align-self-end text-right py-1 text-no-wrap"},at={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},lt={class:"v-col v-col-3 align-self-end text-right py-1 text-no-wrap"},st={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},it=j({__name:"AttendeeTransactionList",props:{paymentTransactions:{},registration:{}},setup(T){const _=T,R=C(fe(_.paymentTransactions));ae(_,()=>{R.value=fe(_.paymentTransactions)});const b=(g,l)=>g.Type===Q.PAYMENT_TRANSACTION_TYPE_CHARGE&&l.Type!==Q.PAYMENT_TRANSACTION_TYPE_CHARGE?-1:g.Type!==Q.PAYMENT_TRANSACTION_TYPE_CHARGE&&l.Type===Q.PAYMENT_TRANSACTION_TYPE_CHARGE||(g.UpdatedAt||0)>(l.UpdatedAt||0)?1:g.UpdatedAt===l.UpdatedAt?0:-1;return(g,l)=>g.paymentTransactions.length==0&&g.registration.Total==0?(t(),r("p",We," Your registration is currently being processed, payment information will appear here when ready. ")):(t(),r("dl",Je,[(t(!0),r(v,null,L(R.value.sort(b),I=>{var k;return t(),r(v,{key:I.PaymentTransactionUUID},[I.Type===d(Q).PAYMENT_TRANSACTION_TYPE_CHARGE?(t(),r("dt",Qe,[p("div",Xe,U(I.Description.split(":")[0]),1),p("div",Ze,U(I.Description.split(":")[1]),1)])):(t(),r("dt",et,[p("div",tt,U((k=d(Pe).find(S=>S.value===I.Type))==null?void 0:k.title),1),p("div",nt," [ "+U(d(Ye)(I.UpdatedAt||""))+" ] "+U(I.Description),1)])),p("dd",ot," £"+U(I.Amount),1)],64)}),128)),l[0]||(l[0]=p("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Total Charges ",-1)),p("dd",at," £"+U(g.registration.Total),1),l[1]||(l[1]=p("dt",{class:"v-col v-col-9 py-1 font-weight-bold"}," Current Payments ",-1)),p("dd",lt," £"+U(g.registration.Paid),1),l[2]||(l[2]=p("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Balance Due ",-1)),p("dd",st," £"+U(g.registration.Total-g.registration.Paid),1)]))}}),rt=["innerHTML"],ut={key:0},dt={key:0,class:"font-weight-bold float-left pt-1 w-50"},mt={key:1,class:"pa-1"},vt={class:"font-weight-bold float-left pt-1 w-50 pt-3",style:{clear:"both"}},ft={class:"pt-2"},ct={key:0,class:"font-weight-bold float-left pt-1 w-50",style:{clear:"both"}},pt={key:1},gt={class:"font-weight-bold float-left pt-1 w-50",style:{clear:"both"}},yt={class:"text-red-darken-4"},St={key:1,class:"text-red-darken-4 mt-4"},Tt=j({__name:"OpenConvention",props:{convention:{},forms:{default:()=>[]}},setup(T){const _=ge(),R=le(),{getPaymentTransactions:b}=Re(),g=C(_.GetConventionLogoURL(T.convention.ConventionUUID)),l=C(),I=C([]),k=C([]),S=C([]),N=C(!1),Y=C([]),h=z(()=>{var o;return J(T.forms,((o=l.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_REGISTRATION)}),x=z(()=>{var o;return J(T.forms,((o=l.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_DEALER)}),K=z(()=>{var o;return J(T.forms,((o=l.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_BADGE)}),G=z(()=>{var o;return J(T.forms,((o=l.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_ACCOMMODATION)}),H=z(()=>{var o;return J(T.forms,((o=l.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_ADDITIONAL)}),X=z(()=>l.value?T.forms.filter(o=>{var e;return o.State.Independent?(e=l.value)!=null&&e.Submissions?o.State.New?!l.value.Submissions.find(m=>{var P;return((P=m.Form)==null?void 0:P.FormUUID)===o.FormUUID}):!1:o.State.New:!1}):T.forms),W=z(()=>{var o,e;return l.value&&((o=l.value)!=null&&o.Submissions)?!!((e=l.value)!=null&&e.Submissions.find(m=>{var P;return((P=m.Form)==null?void 0:P.Type)==E.FORM_TYPE_REGISTRATION&&(m.Status==V.SUBMISSION_STATUS_ACCEPTED||m.Status==V.SUBMISSION_STATUS_COMPLETED)})):!1}),O=async()=>{l.value&&"RegistrationUUID"in l.value&&R.getRegistrationAllocationPeriods(l.value.RegistrationUUID).then(o=>{o&&(k.value=[],I.value=o,I.value.sort((e,m)=>e.DateStart>m.DateStart?1:-1).forEach(e=>{var P;const m=k.value.find(A=>{var w;return A.name===((w=e.Accommodation)==null?void 0:w.Name)});if(m){const A=m.periods.find(F=>F.start===e.DateEnd),w=m.periods.find(F=>F.end===e.DateStart);A?A.start=e.DateStart:w?w.end=e.DateEnd:m.periods.push({start:e.DateStart,end:e.DateEnd})}else k.value.push({name:((P=e.Accommodation)==null?void 0:P.Name)||"",periods:[{start:e.DateStart,end:e.DateEnd}]})}))}).catch(()=>{})},c=()=>{R.getRegistrationByConvention(T.convention.ConventionUUID).then(o=>{var e;o&&(o.Submissions?(o.Submissions.forEach((m,P)=>{m.Form||(o.Submissions[P].Form=T.forms.find(A=>A.FormUUID===m.FormUUID))}),Oe(o.Submissions)):o.Submissions=[],l.value=o,O(),W.value&&b(((e=l.value)==null?void 0:e.RegistrationUUID)||"").then(m=>{S.value=m}))})};return ae(()=>T.forms,()=>{c()}),c(),(o,e)=>{const m=oe("router-link"),P=oe("RouterLink");return t(),i(Te,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:n(()=>[u(Se,{class:"flex-1-1 align-content-start"},{default:n(()=>[g.value?(t(),i(ke,{key:0,src:g.value,title:o.convention.Name,class:"logo text-center"},null,8,["src","title"])):y("",!0),o.convention.Name?(t(),i(Z,{key:1,class:"text-center"},{default:n(()=>[s(U(o.convention.Name),1)]),_:1})):y("",!0),o.convention.Description?(t(),i(pe,{key:2,class:"text-wrap subtitle"},{default:n(()=>[p("div",{innerHTML:o.convention.Description},null,8,rt)]),_:1})):y("",!0)]),_:1}),u(ne,null,{default:n(()=>{var A,w,F;return[l.value?(t(),r("dl",ut,[l.value.Reference?(t(),r("dt",dt," Badge No: ")):y("",!0),l.value.Reference?(t(),r("dd",mt," #"+U(l.value.Reference),1)):y("",!0),X.value.length>0?(t(),r(v,{key:2},[e[2]||(e[2]=p("dt",null,[p("h3",null,"Forms Available")],-1)),e[3]||(e[3]=p("dd",{class:"mb-2"}," The following forms are currently available for completion. ",-1))],64)):y("",!0),(t(!0),r(v,null,L(X.value,(a,M)=>(t(),r(v,{key:a.FormUUID},[p("dt",vt,U(a.Heading),1),p("dd",ft,[(a==null?void 0:a.Type)===d(E).FORM_TYPE_DEALER?(t(),i(m,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:n(()=>[a!=null&&a.State.Edit&&x.value?(t(),i(f,{key:0,size:"small",variant:"flat",color:"success",class:"ml-2"},{default:n(()=>e[4]||(e[4]=[s(" Open form ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[5]||(e[5]=[s("View")])),_:1}))]),_:2},1032,["to"])):(a==null?void 0:a.Type)===d(E).FORM_TYPE_BADGE?(t(),i(m,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/badge`},{default:n(()=>[a!=null&&a.State.Edit&&K.value?(t(),i(f,{key:0,size:"small",variant:"flat",color:"success",class:"ml-2"},{default:n(()=>e[6]||(e[6]=[s(" Open form ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[7]||(e[7]=[s("View")])),_:1}))]),_:2},1032,["to"])):(a==null?void 0:a.Type)===d(E).FORM_TYPE_ADDITIONAL?(t(),i(m,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:n(()=>[a!=null&&a.State.Edit&&H.value?(t(),i(f,{key:0,size:"small",variant:"flat",color:"success",class:"ml-2"},{default:n(()=>e[8]||(e[8]=[s(" Open form ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[9]||(e[9]=[s("View")])),_:1}))]),_:2},1032,["to"])):y("",!0)])],64))),128)),((A=l.value)==null?void 0:A.Submissions.length)>0?(t(),r(v,{key:3},[e[10]||(e[10]=p("dt",{class:"mt-3"},[p("h3",null,"Received Forms")],-1)),e[11]||(e[11]=p("dd",{class:"mb-2"}," The following forms have been received from you. ",-1))],64)):y("",!0),(t(!0),r(v,null,L((w=l.value)==null?void 0:w.Submissions,(a,M)=>{var q,ie,re,ue,de,me;return t(),r(v,{key:a.SubmissionUUID},[a.Form?(t(),r(v,{key:0},[a.Form?(t(),r("dt",ct,U(a.Form.Heading),1)):y("",!0),a.Form?(t(),r("dd",pt,[u(ze,{modelValue:Y.value[M],"onUpdate:modelValue":D=>Y.value[M]=D},{activator:n(({props:D})=>[u(f,Ce({ref_for:!0},D,{color:"blue-darken-2",icon:"mdi:mdi-information",variant:"text",size:"xs",onClick:Dt=>Y.value[M]=!Y.value[M]}),null,16,["onClick"])]),default:n(()=>[a.Status===d(V).SUBMISSION_STATUS_NULL?(t(),r(v,{key:0},[s(" There is an error with your submission, please contact the registration team for support. ")],64)):a.Status===d(V).SUBMISSION_STATUS_INCOMPLETE?(t(),r(v,{key:1},[s(" Something is missing on your submission which requires completing to be able to process your request. Please contact the registration team for further advice. ")],64)):a.Status===d(V).SUBMISSION_STATUS_OPEN?(t(),r(v,{key:2},[s(" Your submission has been received by our system but you may still make changes before the registration team begins processing it. ")],64)):a.Status===d(V).SUBMISSION_STATUS_OPEN_2?(t(),r(v,{key:3},[s(" Your submission has been received by our system but you may still make changes before the registration team begins processing it. ")],64)):a.Status===d(V).SUBMISSION_STATUS_LOCKED?(t(),r(v,{key:4},[s(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):a.Status===d(V).SUBMISSION_STATUS_LOCKED_2?(t(),r(v,{key:5},[s(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):a.Status===d(V).SUBMISSION_STATUS_ACCEPTED?(t(),r(v,{key:6},[s(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):a.Status===d(V).SUBMISSION_STATUS_COMPLETED?(t(),r(v,{key:7},[s(" Congratulations everything is complete. If you need to make changes please get in touch. ")],64)):a.Status===d(V).SUBMISSION_STATUS_REJECTED?(t(),r(v,{key:8},[s(" Your request has been unsuccessful. Contact the convention team for assistance. ")],64)):a.Status===d(V).SUBMISSION_STATUS_INVALID?(t(),r(v,{key:9},[s(" Your request has been identified as having errors or being incomplete. Please contact the registration team for additional support. ")],64)):a.Status===d(V).SUBMISSION_STATUS_CANCELLED?(t(),r(v,{key:10},[s(" Your submission has been cancelled. This may be at your request or another reason. The registration team will be able to provide further details. ")],64)):(t(),r(v,{key:11},[s(" Please contact the registration team for support. ")],64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),s(" "+U(d(be)(a.Status,(q=a.Form)==null?void 0:q.Type))+" ",1),((ie=a.Form)==null?void 0:ie.Type)===d(E).FORM_TYPE_REGISTRATION?(t(),i(m,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&h.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[12]||(e[12]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[13]||(e[13]=[s("View")])),_:1}))]}),_:2},1032,["to"])):((re=a.Form)==null?void 0:re.Type)===d(E).FORM_TYPE_ACCOMMODATION?(t(),i(m,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&G.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[14]||(e[14]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[15]||(e[15]=[s("View")])),_:1}))]}),_:2},1032,["to"])):((ue=a.Form)==null?void 0:ue.Type)===d(E).FORM_TYPE_DEALER?(t(),i(m,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&x.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[16]||(e[16]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[17]||(e[17]=[s("View")])),_:1}))]}),_:2},1032,["to"])):((de=a.Form)==null?void 0:de.Type)===d(E).FORM_TYPE_BADGE?(t(),i(m,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/badge`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&K.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[18]||(e[18]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[19]||(e[19]=[s("View")])),_:1}))]}),_:2},1032,["to"])):((me=a.Form)==null?void 0:me.Type)===d(E).FORM_TYPE_ADDITIONAL?(t(),i(m,{key:4,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:n(()=>{var D;return[(D=a.Form)!=null&&D.State.Edit&&H.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[20]||(e[20]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[21]||(e[21]=[s("View")])),_:1}))]}),_:2},1032,["to"])):y("",!0)])):y("",!0)],64)):y("",!0)],64)}),128)),((F=l.value)==null?void 0:F.Submissions.length)>=1?(t(!0),r(v,{key:4},L(o.forms,a=>{var M;return t(),r(v,{key:a.FormUUID},[!((M=l.value)!=null&&M.Submissions.find(q=>q.FormUUID===a.FormUUID))&&!a.State.Independent?(t(),r(v,{key:0},[p("dt",gt,U(a.Heading),1),p("dd",yt,[e[32]||(e[32]=s(" Requires Completion ")),a.Type===d(E).FORM_TYPE_REGISTRATION?(t(),i(m,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:n(()=>[a.State.Edit&&h.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[22]||(e[22]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[23]||(e[23]=[s("View")])),_:1}))]),_:2},1032,["to"])):a.Type===d(E).FORM_TYPE_ACCOMMODATION?(t(),i(m,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:n(()=>[a.State.Edit&&G.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[24]||(e[24]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[25]||(e[25]=[s("View")])),_:1}))]),_:2},1032,["to"])):a.Type===d(E).FORM_TYPE_DEALER?(t(),i(m,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:n(()=>[a.State.Edit&&x.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[26]||(e[26]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[27]||(e[27]=[s("View")])),_:1}))]),_:2},1032,["to"])):a.Type===d(E).FORM_TYPE_BADGE?(t(),i(m,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/badge`},{default:n(()=>[a.State.Edit&&K.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[28]||(e[28]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[29]||(e[29]=[s("View")])),_:1}))]),_:2},1032,["to"])):a.Type===d(E).FORM_TYPE_ADDITIONAL?(t(),i(m,{key:4,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:n(()=>[a.State.Edit&&H.value?(t(),i(f,{key:0,size:"small",variant:"text",color:"success"},{default:n(()=>e[30]||(e[30]=[s(" Edit ")])),_:1})):(t(),i(f,{key:1,size:"small",variant:"text",color:"warning"},{default:n(()=>e[31]||(e[31]=[s("View")])),_:1}))]),_:2},1032,["to"])):y("",!0)])],64)):y("",!0)],64)}),128)):y("",!0)])):y("",!0),l.value&&l.value.Submissions.length>=1&&o.forms.filter(a=>{var M;return!a.State.Independent&&!((M=l.value)!=null&&M.Submissions.find(q=>q.FormUUID==a.FormUUID))}).length>0?(t(),r("div",St,e[33]||(e[33]=[p("strong",null,"There are forms above that require completion, please edit and save them.",-1)]))):y("",!0)]}),_:1}),k.value.length>0?(t(),r(v,{key:0},[u(Z,{class:"pb-0"},{default:n(()=>e[34]||(e[34]=[s("Allocated Accommodation")])),_:1}),u(pe,{class:"text-wrap"},{default:n(()=>e[35]||(e[35]=[s("The following accommodation has been allocated to your registration. In some cases this may not have been your first choice.")])),_:1}),u(ne,null,{default:n(()=>[u(Be,{density:"compact"},{default:n(()=>[(t(!0),r(v,null,L(k.value,A=>(t(),i(Ge,{key:A.name},{default:n(()=>[u(He,null,{default:n(()=>[s(U(A.name),1)]),_:2},1024),(t(!0),r(v,null,L(A.periods,w=>(t(),i(qe,{key:w.start},{default:n(()=>[s(" ("+U(d(ce)(w.start))+" - "+U(d(ce)(w.end))+")",1),e[36]||(e[36]=p("br",null,null,-1))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1})],64)):y("",!0),W.value&&l.value?(t(),r(v,{key:1},[u(Z,{class:"pb-4"},{default:n(()=>e[37]||(e[37]=[s("Payment Information")])),_:1}),u(ne,null,{default:n(()=>[u(it,{"payment-transactions":S.value,registration:l.value},null,8,["payment-transactions","registration"])]),_:1})],64)):y("",!0),u(xe,null,{default:n(()=>{var A,w;return[o.convention.DetailLink?(t(),i(f,{key:0,color:"warning",href:o.convention.DetailLink,variant:"flat"},{default:n(()=>[s(U(d(te).buttonDetails),1)]),_:1},8,["href"])):y("",!0),u(ye),h.value?(t(),r(v,{key:1},[(A=l.value)!=null&&A.Submissions.find(F=>{var a;return((a=F.Form)==null?void 0:a.Type)===d(E).FORM_TYPE_REGISTRATION})?(t(),i(P,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:n(()=>[u(f,{color:"primary",variant:"flat"},{default:n(()=>[s(U(d(te).buttonViewRegistration),1)]),_:1})]),_:1},8,["to"])):(t(),r(v,{key:0},[(w=o.forms.find(F=>F.Type===d(E).FORM_TYPE_REGISTRATION))!=null&&w.State.New?(t(),i(P,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:n(()=>[u(f,{color:"success",variant:"flat"},{default:n(()=>[s(U(d(te).buttonRegister),1)]),_:1})]),_:1},8,["to"])):y("",!0)],64))],64)):W.value&&l.value&&l.value.Total>l.value.Paid?(t(),r(v,{key:2},[u(f,{color:"success",variant:"elevated",onClick:e[0]||(e[0]=F=>N.value=!0)},{default:n(()=>e[38]||(e[38]=[s(" Make Payment ")])),_:1}),l.value?(t(),i(Ke,{key:0,"payment-transactions":S.value,registration:l.value,modelValue:N.value,"onUpdate:modelValue":e[1]||(e[1]=F=>N.value=F)},null,8,["payment-transactions","registration","modelValue"])):y("",!0)],64)):y("",!0)]}),_:1})]),_:1})}}}),kt=Ue(Tt,[["__scopeId","data-v-1f68fd74"]]),Ut=j({__name:"Conventions",setup(T){const _=le(),R=ge(),b=C([]),g=C([]),l=C([]);return _.getOpenConventionsList().then(I=>{I&&(g.value=[...g.value,...I],_.getAvailableConventionForms(g.value.map(k=>k.ConventionUUID)).then(k=>{l.value=[...l.value,...k]}).catch(k=>{console.error(k)}),_.getAttendedConventions().then(k=>{b.value=k}))}),(I,k)=>(t(),r(v,null,[u(ee,null,{default:n(()=>[u(B,{class:"justify-center"},{default:n(()=>[(t(!0),r(v,null,L(g.value,S=>(t(),i($,{key:S.ConventionUUID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:n(()=>[u(kt,{convention:S,forms:l.value.filter(N=>N.ConventionUUID===S.ConventionUUID)},null,8,["convention","forms"])]),_:2},1024))),128))]),_:1})]),_:1}),b.value.length>0?(t(),i(ee,{key:0,fluid:"",class:"px-0"},{default:n(()=>[u(B,{class:"bg-blue-darken-4"},{default:n(()=>[u($,null,{default:n(()=>k[0]||(k[0]=[p("h3",{class:"font-weight-regular px-4"}," Convention Sticker Collection ",-1)])),_:1})]),_:1}),u(B,{class:"justify-center"},{default:n(()=>[(t(!0),r(v,null,L(b.value,S=>(t(),i($,{key:S.ConventionUUID,cols:"8",sm:"6",md:"4",lg:"3",xl:"2"},{default:n(()=>[u(Te,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:n(()=>[u(Se,{class:"flex-1-1 align-content-start"},{default:n(()=>[u(ke,{src:d(R).GetConventionLogoURL(S.ConventionUUID),title:S.Name,class:"logo text-center"},null,8,["src","title"]),S.Name?(t(),i(Z,{key:0,class:"text-center text-wrap"},{default:n(()=>[s(U(S.Name),1)]),_:2},1024)):y("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):y("",!0)],64))}}),It={};function Et(T,_){return t(),r("div")}const _t=Ue(It,[["render",Et]]),At=j({__name:"MainView",emits:["pageTitle"],setup(T,{emit:_}){_("pageTitle","Upcoming Conventions"),sessionStorage.getItem("reload")==="true"&&(sessionStorage.removeItem("reload"),setTimeout(()=>{location.reload()},500));const g=localStorage.getItem("gjt_token"),l=localStorage.getItem("ajt_token");g?(localStorage.removeItem("gjt_token"),location.href=g):l&&(localStorage.removeItem("ajt_token"),location.href=l);const I=C(se());return(k,S)=>{const N=oe("router-link");return t(),r(v,null,[I.value&&(!I.value.Additional||!I.value.Additional.Email)?(t(),i(ee,{key:0,class:"bg-red-darken-4 text-center",fluid:!0},{default:n(()=>[S[1]||(S[1]=s(" Please enter a Contact Email on the ")),u(N,{to:"/profile",class:"text-white font-weight-bold"},{default:n(()=>S[0]||(S[0]=[s("manage account page")])),_:1}),S[2]||(S[2]=s(" to ensure we can contact you. "))]),_:1})):y("",!0),u(Ut),u(_t)],64)}}}),rn=j({__name:"Home",props:{loggedIn:{type:Boolean}},emits:["pageTitle"],setup(T,{emit:_}){const R=se(),b=_;return b("pageTitle","Login"),(g,l)=>(t(),r("div",null,[g.loggedIn&&d(R)?(t(),i(At,{key:0,onPageTitle:l[0]||(l[0]=I=>b("pageTitle",I))})):(t(),i(we,{key:1}))]))}});export{rn as default};
