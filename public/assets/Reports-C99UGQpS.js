import{p as _e,d as Ae,ab as He,t as N,c as _,s as re,ad as Le,f as t,L as j,m as Y,i as $,R as X,r as f,C as Be,a0 as Fe,n as U,D as M,v as l,x as b,q as G,G as C,y as J,A as W,H as Z,P as ee,M as Ge,N as K,w as Me,V as We,Q as Oe}from"./index-DjVAorxC.js";import{u as te}from"./useConventionSlug-DbjIwoqE.js";import{V as O,a as S}from"./VRow-U7-6ws22.js";import{m as $e,u as Qe,a as qe,V as pe}from"./VSelect-CcNZQOdk.js";import{V as fe}from"./scopeId-DkeNRcRh.js";import{u as ze,V as P,e as ie,p as ge}from"./VContainer-reUGPYsu.js";import{b as je,s as Ye,d as Ke,e as Je,g as Xe,u as Ze,p as et,h as tt,t as at,j as lt,k as ot,l as st,n as nt,q as ue,r as me,v as rt,V as it}from"./VDataTable-qCkkGNBU.js";import{m as ut,u as mt}from"./filter-CICgp-u9.js";import{V as de}from"./VTable-DxP1O4eS.js";import{e as ae,V as dt,a as ct,c as vt}from"./VCard-BwGbT0CB.js";import{T as pt}from"./targetType-BYfQr9gB.js";import{u as ft}from"./useEmailTemplates-B-t-XU9Z.js";import{_ as gt}from"./ModelDialog.vue_vue_type_script_setup_true_lang-D8RqaiCK.js";import{b as ce,V as yt}from"./forwardRefs-coWmDQRj.js";import{b as Vt}from"./SaveButton.vue_vue_type_script_setup_true_lang-DwwthZRf.js";import{V as Tt}from"./VList-CPPXMyHI.js";import{V as bt}from"./VSheet-vQY5JGRd.js";import{a as xt,b as ve,c as kt,V as ht}from"./VTabs-CkUApiqr.js";import{V as wt}from"./VToolbar-Btr4zjb_.js";import"./VTextField-B9A1tsDH.js";import"./form-DxKZ7tk2.js";import"./VChip-CPAKnHT8.js";import"./createSimpleFunctional-D4c0x6KF.js";import"./VDivider-BU0vVXyg.js";import"./permission-Ba-8wP-4.js";import"./VDialog-BASTHP6l.js";const Dt=_e({...je(),...Ye(),...$e(),...ut()},"VDataTableVirtual"),Ut=Ae()({name:"VDataTableVirtual",props:Dt(),emits:{"update:modelValue":o=>!0,"update:sortBy":o=>!0,"update:options":o=>!0,"update:groupBy":o=>!0,"update:expanded":o=>!0},setup(o,x){let{attrs:k,slots:s}=x;const{groupBy:m}=Ke(o),{sortBy:d,multiSort:v,mustSort:i}=Je(o),{disableSort:y}=He(o),{columns:g,headers:w,filterFunctions:V,sortFunctions:c,sortRawFunctions:n}=Xe(o,{groupBy:m,showSelect:N(o,"showSelect"),showExpand:N(o,"showExpand")}),{items:u}=Ze(o,g),D=N(o,"search"),{filteredItems:H}=mt(o,u,D,{transform:h=>h.columns,customKeyFilter:V}),{toggleSort:L}=et({sortBy:d,multiSort:v,mustSort:i}),{sortByWithGroups:p,opened:a,extractRows:e,isGroupOpen:r,toggleGroup:T}=tt({groupBy:m,sortBy:d,disableSort:y}),{sortedItems:Q}=at(o,H,p,{transform:h=>({...h.raw,...h.columns}),sortFunctions:c,sortRawFunctions:n}),{flatItems:E}=lt(Q,m,a),R=_(()=>e(E.value)),{isSelected:B,select:q,selectAll:ye,toggleSelect:Ve,someSelected:Te,allSelected:be}=ot(o,{allItems:R,currentPage:R}),{isExpanded:xe,toggleExpand:ke}=st(o),{containerRef:he,markerRef:we,paddingTop:De,paddingBottom:Ue,computedItems:Re,handleItemResize:Ie,handleScroll:Ce,handleScrollend:Ee}=Qe(o,E),Ne=_(()=>Re.value.map(h=>h.raw));nt({sortBy:d,page:re(1),itemsPerPage:re(-1),groupBy:m,search:D}),Le({VDataTableRows:{hideNoData:N(o,"hideNoData"),noDataText:N(o,"noDataText"),loading:N(o,"loading"),loadingText:N(o,"loadingText")}});const F=_(()=>({sortBy:d.value,toggleSort:L,someSelected:Te.value,allSelected:be.value,isSelected:B,select:q,selectAll:ye,toggleSelect:Ve,isExpanded:xe,toggleExpand:ke,isGroupOpen:r,toggleGroup:T,items:R.value.map(h=>h.raw),internalItems:R.value,groupedItems:E.value,columns:g.value,headers:w.value}));ze(()=>{const h=ue.filterProps(o),Se=me.filterProps(o),Pe=de.filterProps(o);return t(de,Y({class:["v-data-table",{"v-data-table--loading":o.loading},o.class],style:o.style},Pe,{fixedHeader:o.fixedHeader||o.sticky}),{top:()=>{var I;return(I=s.top)==null?void 0:I.call(s,F.value)},wrapper:()=>{var I,le,oe;return t("div",{ref:he,onScrollPassive:Ce,onScrollend:Ee,class:"v-table__wrapper",style:{height:j(o.height)}},[t("table",null,[(I=s.colgroup)==null?void 0:I.call(s,F.value),!o.hideDefaultHeader&&t("thead",{key:"thead"},[t(ue,h,s)]),!o.hideDefaultBody&&t("tbody",null,[t("tr",{ref:we,style:{height:j(De.value),border:0}},[t("td",{colspan:g.value.length,style:{height:0,border:0}},null)]),(le=s["body.prepend"])==null?void 0:le.call(s,F.value),t(me,Y(k,Se,{items:Ne.value}),{...s,item:A=>t(qe,{key:A.internalItem.index,renderless:!0,"onUpdate:height":z=>Ie(A.internalItem.index,z)},{default:z=>{var ne;let{itemRef:se}=z;return((ne=s.item)==null?void 0:ne.call(s,{...A,itemRef:se}))??t(rt,Y(A.props,{ref:se,key:A.internalItem.index,index:A.internalItem.index}),s)}})}),(oe=s["body.append"])==null?void 0:oe.call(s,F.value),t("tr",{style:{height:j(Ue.value),border:0}},[t("td",{colspan:g.value.length,style:{height:0,border:0}},null)])])])])},bottom:()=>{var I;return(I=s.bottom)==null?void 0:I.call(s,F.value)}})})}}),Rt=$({__name:"HotelReport",emits:["pageTitle"],async setup(o,{emit:x}){let k,s;x("pageTitle","Reports");const d=ee(),v=X(),i=f([]),y=f(),g=f([]);try{const p=([k,s]=Be(()=>te()),k=await k,s(),k);p&&(d.getHotelReport(p.ConventionUUID).then(a=>{i.value=a}),d.getConventionVenues(p.ConventionUUID).then(a=>{g.value=a}))}catch{v.push("/")}const w=_(()=>[{title:"First Name",align:"start",key:"FirstName"},{title:"Last Name",align:"start",key:"LastName"},{title:"Address",align:"start",key:"Address"},{title:"Room Partners",align:"start",key:"Guests"},{title:"Venue",align:"start",key:"Venue"},{title:"Room Type",align:"start",key:"RoomType"},{title:"Arrival",align:"start",key:"ArrivalDay"},{title:"Departure",align:"start",key:"DepartureDay"}]),V=_(()=>{const p=[];return i.value.forEach(a=>{y.value&&a.Venue!=y.value||a.Guests.forEach((e,r)=>{const T={FirstName:"",LastName:"",Guests:"",Address:"",Venue:"",Accommodation:"",RoomType:"",ArrivalDay:"",DepartureDay:""};T.FirstName=e.FirstName,T.LastName=e.LastName,T.Address=e.Address;const Q=a.Guests.filter((B,q)=>q!==r);let E="";Q.forEach(B=>{E+=B.FirstName+" "+B.LastName+","}),T.Guests=E.substring(0,E.length-1),T.Venue=a.Venue;const R=a.Accommodation.match(/\((.*?)\)/);R&&R.length>=1&&(T.Accommodation=R[1]),T.RoomType=a.RoomType,T.ArrivalDay=a.Days[0],T.DepartureDay=a.Days[a.Days.length-1],p.push(T)})}),p}),c=Fe("reportTable"),n="data:application/vnd.ms-excel;base64,",u='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><?xml version="1.0" encoding="UTF-8" standalone="yes"?><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',D=function(p){return btoa(unescape(encodeURIComponent(p)))},H=function(p,a){return p.replace(/{(\w+)}/g,function(e,r){return a[r]})},L=p=>{var e;const a=(e=c.value)==null?void 0:e.getElementsByTagName("table")[0];if(a){const r={worksheet:p,table:a.innerHTML};window.location.href=n+D(H(u,r))}};return(p,a)=>i.value.length>0&&g.value.length>0?(U(),M(Z,{key:0},[t(ie,{fluid:""},{default:l(()=>[t(O,null,{default:l(()=>[t(S,{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:l(()=>[t(pe,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),label:"Venue",items:g.value,"item-value":"Name","item-title":"Name",clearable:"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1}),t(fe),t(S,{cols:"12",sm:"5",md:"3",lg:"2",xl:"2",class:"text-right"},{default:l(()=>[t(P,{onClick:a[1]||(a[1]=e=>L("Hotel Report")),color:"primary","prepend-icon":"mdi:mdi-table",class:"w-100 w-sm-auto"},{default:l(()=>a[2]||(a[2]=[b(" Download Excel ")])),_:1})]),_:1})]),_:1})]),_:1}),V.value?(U(),G(ae,{key:0,class:"pa-2"},{default:l(()=>[C("div",{ref_key:"reportTable",ref:c},[t(Ut,{headers:w.value,items:V.value,"items-length":V.value.length},{"item.RoomType":l(({item:e})=>[b(J(e.RoomType)+" ",1),a[3]||(a[3]=C("br",null,null,-1)),b(" ("+J(e.Accommodation)+") ",1)]),_:2},1032,["headers","items","items-length"])],512)]),_:1})):W("",!0)],64)):(U(),G(ie,{key:1},{default:l(()=>[t(O,null,{default:l(()=>[t(S,{class:"text-center"},{default:l(()=>[t(ge,{indeterminate:"",color:"primary",size:"100",width:"10"},{default:l(()=>a[4]||(a[4]=[b(" Loading ")])),_:1})]),_:1})]),_:1})]),_:1}))}}),It={class:"d-flex align-center justify-center",style:{width:"calc(100vw - 25px)",height:"100vh"}},Ct=["innerHTML"],Et=$({__name:"EmailControl",props:Ge({modelType:{default:"user"}},{modelValue:{default:[]},modelModifiers:{},convention:{required:!1,default:async()=>await te()},conventionModifiers:{},organisation:{required:!1,default:void 0},organisationModifiers:{}}),emits:["update:modelValue","update:convention","update:organisation"],setup(o){const x=ee(),{getEmailTemplateList:k}=ft(),s=f([]),m=f(),d=K(o,"modelValue"),v=K(o,"convention"),i=K(o,"organisation"),y=f(0),g=f([]),w=f(!1),V=f(!1),c=f(0),n=f(0),u=()=>{var a,e;k(pt.TARGET_TYPE_CONVENTION,((a=i.value)==null?void 0:a.OrganisationUUID)||null,((e=v.value)==null?void 0:e.ConventionUUID)||null).then(r=>{s.value=r})};Me(v,()=>{u()}),u();const D=a=>{var r;const e={};return o.modelType=="registration"?e.RegistrationUUID=a:o.modelType=="submission"?e.SubmissionUUID=a:e.UserUUID=a,v.value&&(e.ConventionUUID=v.value.ConventionUUID),i.value&&(e.OrganisationUUID=i.value.OrganisationUUID),m.value&&(m.value.IsDefault?e.TemplateName=m.value.Name:((r=m.value)==null?void 0:r.EmailTemplateUUID)!==We?e.TemplateUUID=m.value.EmailTemplateUUID:e.Template=m.value),e},H=()=>{g.value=[],d.value.forEach(a=>{const e=D(a);x.previewEmailTemplate(e).then(r=>{g.value.push(r)})}),w.value=!0};function L(a){return new Promise(e=>setTimeout(e,a))}const p=async()=>{V.value=!0,c.value=0,n.value=0;for(const a of d.value){const e=D(a);await x.sendEmailTemplate(e),await L(50),c.value+=1,n.value=c.value/d.value.length*100}V.value=!1};return(a,e)=>d.value.length>0?(U(),M(Z,{key:0},[t(O,null,{default:l(()=>[t(S,null,{default:l(()=>e[6]||(e[6]=[C("h2",null,"E-Mail",-1),C("p",null," Select an e-mail template to send bulk e-mails to selected registrations. You may preview what is sent before queuing it. ",-1)])),_:1})]),_:1}),t(O,null,{default:l(()=>[t(S,{cols:"12",sm:"7"},{default:l(()=>[t(pe,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=r=>m.value=r),items:s.value,"item-value":r=>r,"item-title":"Title","hide-details":"",clearable:""},null,8,["modelValue","items","item-value"])]),_:1}),t(S,{cols:"6",sm:"3"},{default:l(()=>[t(P,{color:"primary",disabled:!m.value,onClick:H,class:"w-100"},{default:l(()=>e[7]||(e[7]=[b(" Preview ")])),_:1},8,["disabled"])]),_:1}),t(S,{cols:"6",sm:"2",class:"text-right text-sm-left"},{default:l(()=>[t(P,{color:"success",disabled:!m.value,onClick:p,class:"w-100"},{default:l(()=>e[8]||(e[8]=[b(" Send ")])),_:1},8,["disabled"])]),_:1})]),_:1}),t(Vt,{modelValue:V.value,"onUpdate:modelValue":e[2]||(e[2]=r=>V.value=r),"scroll-strategy":"block","location-strategy":"static","close-on-content-click":!1},{default:l(()=>[C("div",It,[e[11]||(e[11]=b(" > ")),t(ae,{class:"ma-0",bordered:""},{default:l(()=>[t(dt,null,{default:l(()=>[t(ct,{class:"text-center"},{default:l(()=>e[9]||(e[9]=[C("small",null,"Sending Emails",-1)])),_:1})]),_:1}),t(vt,{class:"text-center"},{default:l(()=>[t(ge,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=r=>n.value=r),color:"error",size:"60",width:"8"},null,8,["modelValue"]),e[10]||(e[10]=C("p",{class:"my-4"}," Navigating away will prevent emails from sending. ",-1))]),_:1})]),_:1})])]),_:1},8,["modelValue"]),t(gt,{modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=r=>w.value=r),fullscreen:!1,"hide-details":!0,title:"Email Preview",scrollable:!0},{actions:l(()=>[t(ce,null,{default:l(()=>[t(P,{color:"primary",disabled:y.value==0,onClick:e[3]||(e[3]=r=>y.value-=1)},{default:l(()=>e[12]||(e[12]=[b(" Previous ")])),_:1},8,["disabled"])]),_:1}),t(fe),t(ce,null,{default:l(()=>[t(P,{color:"primary",disabled:y.value==g.value.length-1,onClick:e[4]||(e[4]=r=>y.value+=1)},{default:l(()=>e[13]||(e[13]=[b(" Next ")])),_:1},8,["disabled"])]),_:1})]),default:l(()=>[g.value.length>0?(U(),M("div",{key:0,innerHTML:g.value[y.value].HTML},null,8,Ct)):W("",!0)]),_:1},8,["modelValue"])],64)):W("",!0)}}),Nt={class:"flex-grow-1"},St=$({__name:"TicketReport",emits:["pageTitle"],setup(o,{emit:x}){x("pageTitle","Reports");const s=ee(),m=X(),d=f(),v=f([]),i=f([]),y=f(!0),g=()=>{try{te().then(c=>{c&&(d.value=c,s.getTicketReport(d.value.ConventionUUID).then(n=>{v.value=n,y.value=!1}))})}catch{m.push("/")}},w=_(()=>[{title:"",align:"start",key:"checkbox"},{title:"Reference",align:"start",key:"Reference"},{title:"Name",align:"start",key:"Name"},{title:"Ticket",align:"start",key:"Ticket"},{title:"QR Code",align:"start",key:"QRCode"}]),V=_(()=>v.value?v.value.map(c=>({RegistrationUUID:c.RegistrationUUID,Reference:c.Reference,Name:c.Name,Ticket:c.Ticket.map(u=>u.Name),QRCode:c.QRCode})):[]);return g(),(c,n)=>d.value&&v.value?(U(),G(ae,{key:0,class:"pa-2"},{default:l(()=>[t(it,{modelValue:i.value,"onUpdate:modelValue":n[2]||(n[2]=u=>i.value=u),headers:w.value,items:V.value,"item-value":"RegistrationUUID","show-select":"",loading:y.value},{"item.Ticket":l(({item:u})=>[t(Tt,{items:u.Ticket},null,8,["items"])]),"item.QRCode":l(({item:u})=>[t(yt,{src:u.QRCode,alt:u.Reference},null,8,["src","alt"])]),"footer.prepend":l(()=>[C("div",Nt,[t(P,{variant:"text",color:"primary",onClick:n[0]||(n[0]=u=>i.value=V.value.map(D=>D.RegistrationUUID))},{default:l(()=>n[5]||(n[5]=[b(" (Select all on every page) ")])),_:1}),t(P,{variant:"text",color:"primary",onClick:n[1]||(n[1]=u=>i.value=[])},{default:l(()=>n[6]||(n[6]=[b(" (Unselect all on every page) ")])),_:1})])]),_:2},1032,["modelValue","headers","items","loading"]),t(Et,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=u=>i.value=u),"model-type":"registration",convention:d.value,"onUpdate:convention":n[4]||(n[4]=u=>d.value=u)},null,8,["modelValue","convention"])]),_:1})):W("",!0)}}),sa=$({__name:"Reports",emits:["pageTitle"],setup(o,{emit:x}){x("pageTitle","Reports"),X();const s=f("Hotel"),m=f(["Hotel","Tickets"]);return(d,v)=>(U(),G(bt,null,{default:l(()=>[t(wt,{color:"blue-darken-4"},{default:l(()=>[t(xt,{modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=i=>s.value=i),"show-arrows":""},{default:l(()=>[(U(!0),M(Z,null,Oe(m.value,i=>(U(),G(ht,null,{default:l(()=>[b(J(i),1)]),_:2},1024))),256))]),_:1},8,["modelValue"])]),_:1}),t(kt,{modelValue:s.value,"onUpdate:modelValue":v[1]||(v[1]=i=>s.value=i)},{default:l(()=>[t(ve,{value:"Hotel"},{default:l(()=>[t(Rt)]),_:1}),t(ve,{value:"Tickets"},{default:l(()=>[t(St)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{sa as default};
