import{p as R,r as f,s as w,c as p,a as ce,w as U,o as ve,b as de,d as B,u as me,e as Q,t as E,f as l,m as G,h as X,i as F,j as ge,k as j,l as H,n as y,q as _,v as i,x as Z,y as z,z as fe,A as L,E as ee,B as pe,C as he,D as ye,F as A,G as q,H as Ve,I as ae,J as te,K as _e,L as ke,T as Se,S as be}from"./index-Drc01tpV.js";import{G as Ce,R as O,a as Te}from"./userData-DbuSD3r0.js";import{u as Ie}from"./useAvatar-Cy393I_4.js";import{C as Pe}from"./canEditOrganisation-Chvi37aO.js";import{G as x}from"./group-Dg_peWef.js";import{C as D}from"./canDo-B7AtGCBE.js";import{C as we}from"./canViewOperations-DMTjyaiR.js";import{m as Re,V as J,a as Le}from"./VToolbar-R3JhZpYq.js";import{V as Be}from"./scopeId-CLTfZgTK.js";import{V as Ne}from"./VTextField-BeptCofv.js";import{u as N,m as Ue,V as le,a as Y,b as Ee,c as Ae,d as xe,e as K,f as De,g as Oe,h as He,i as ze,j as Me,k as Ge,l as Fe,n as Ye,o as $e}from"./VContainer-BrTJyE9h.js";import{m as oe,u as se,a as ne,c as re}from"./layout-BY6BSOO-.js";import{u as je,V as W,a as T,b as qe}from"./VList-D6Xgt1QJ.js";import{V as M,a as Je}from"./forwardRefs-DiNsudo7.js";import{V as Ke}from"./VDivider-rexNvCGO.js";import{V as We,a as ue}from"./VNavigationDrawer-BxrJTrKF.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as Qe}from"./index-fwfMqYug.js";import"./useStoreAPI-DKgZ7-ro.js";import"./createSimpleFunctional-CRP4sHjJ.js";import"./form-Ig5h2KDs.js";const Xe=(e,s=void 0)=>e===void 0?!1:s===void 0?D(e,x.GROUP_TYPE_CONVENTION).ManageUsers:D(e,x.GROUP_TYPE_CONVENTION,s.ConventionUUID,s).ManageUsers,Ze=(e,s=void 0)=>{let t;return e===void 0?!1:(s===void 0?t=D(e,x.GROUP_TYPE_CONVENTION):t=D(e,x.GROUP_TYPE_CONVENTION,s.ConventionUUID,s),t.EditConvention||t.ManageViews||t.ViewRegistration||t.EditRegistration)},ea=R({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function aa(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=s;let n=0,u=0;const a=f(null),o=w(0),c=w(0),m=w(0),v=w(!1),d=w(!1),h=p(()=>Number(e.scrollThreshold)),S=p(()=>ce((h.value-o.value)/h.value||0)),V=()=>{const g=a.value;if(!g||t&&!t.value)return;n=o.value,o.value="window"in g?g.pageYOffset:g.scrollTop;const k=g instanceof Window?document.documentElement.scrollHeight:g.scrollHeight;if(u!==k){u=k;return}d.value=o.value<n,m.value=Math.abs(o.value-h.value)};return U(d,()=>{c.value=c.value||o.value}),U(v,()=>{c.value=0}),ve(()=>{U(()=>e.scrollTarget,g=>{var b;const k=g?document.querySelector(g):window;k&&k!==a.value&&((b=a.value)==null||b.removeEventListener("scroll",V),a.value=k,a.value.addEventListener("scroll",V,{passive:!0}))},{immediate:!0})}),de(()=>{var g;(g=a.value)==null||g.removeEventListener("scroll",V)}),t&&U(t,V,{immediate:!0}),{scrollThreshold:h,currentScroll:o,currentThreshold:m,isScrollActive:v,scrollRatio:S,isScrollingUp:d,savedScroll:c}}const ta=R({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Re(),...oe(),...ea(),height:{type:[Number,String],default:64}},"VAppBar"),la=B()({name:"VAppBar",props:ta(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const n=f(),u=me(e,"modelValue"),a=p(()=>{var P;const r=new Set(((P=e.scrollBehavior)==null?void 0:P.split(" "))??[]);return{hide:r.has("hide"),fullyHide:r.has("fully-hide"),inverted:r.has("inverted"),collapse:r.has("collapse"),elevate:r.has("elevate"),fadeImage:r.has("fade-image")}}),o=p(()=>{const r=a.value;return r.hide||r.fullyHide||r.inverted||r.collapse||r.elevate||r.fadeImage||!u.value}),{currentScroll:c,scrollThreshold:m,isScrollingUp:v,scrollRatio:d}=aa(e,{canScroll:o}),h=p(()=>a.value.hide||a.value.fullyHide),S=p(()=>e.collapse||a.value.collapse&&(a.value.inverted?d.value>0:d.value===0)),V=p(()=>e.flat||a.value.fullyHide&&!u.value||a.value.elevate&&(a.value.inverted?c.value>0:c.value===0)),g=p(()=>a.value.fadeImage?a.value.inverted?1-d.value:d.value:void 0),k=p(()=>{var C,$;if(a.value.hide&&a.value.inverted)return 0;const r=((C=n.value)==null?void 0:C.contentHeight)??0,P=(($=n.value)==null?void 0:$.extensionHeight)??0;return h.value?c.value<m.value||a.value.fullyHide?r+P:r:r+P});Q(p(()=>!!e.scrollBehavior),()=>{X(()=>{h.value?a.value.inverted?u.value=c.value>m.value:u.value=v.value||c.value<m.value:u.value=!0})});const{ssrBootStyles:b}=je(),{layoutItemStyles:I}=se({id:e.name,order:p(()=>parseInt(e.order,10)),position:E(e,"location"),layoutSize:k,elementSize:w(void 0),active:u,absolute:E(e,"absolute")});return N(()=>{const r=J.filterProps(e);return l(J,G({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...I.value,"--v-toolbar-image-opacity":g.value,height:void 0,...b.value},e.style]},r,{collapse:S.value,flat:V.value}),t)}),{}}}),oa=R({...Ue({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),sa=B()({name:"VAppBarNavIcon",props:oa(),setup(e,s){let{slots:t}=s;return N(()=>l(le,G(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),na=R({...Y(),...Ee(),...ne()},"VLayout"),ra=B()({name:"VLayout",props:na(),setup(e,s){let{slots:t}=s;const{layoutClasses:n,layoutStyles:u,getLayoutItem:a,items:o,layoutRef:c}=re(e),{dimensionStyles:m}=Ae(e);return N(()=>{var v;return l("div",{ref:c,class:[n.value,e.class],style:[m.value,u.value,e.style]},[(v=t.default)==null?void 0:v.call(t)])}),{getLayoutItem:a,items:o}}}),ua=F({__name:"DashboardLayout",props:{user:{}},setup(e){const s=Ie(),t=ge(),n=f(!1),u=f("Default Title"),a=f(""),o=f(j(e.user)),c=f(s(o.value.UserUUID));ee.getInstance().on("user.profile.saved",b=>{o.value=j(b)});const v=f(localStorage.getItem("theme")||"light");t.global.name.value=v.value;const d=()=>{v.value=="light"?v.value="dark":v.value="light",t.global.name.value=v.value,localStorage.setItem("theme",v.value)},h=b=>{u.value=b},S=f(Ze(e.user)),V=f(we(e.user)),g=f(Pe(e.user)),k=f(Xe(e.user));return(b,I)=>{const r=H("RouterLink"),P=H("RouterView");return y(),_(ra,{class:"h-100"},{default:i(()=>[l(la,{color:"blue-darken-3"},{default:i(()=>[l(Le,null,{default:i(()=>[Z(z(u.value),1)]),_:1}),l(Be),l(Ne,{modelValue:a.value,"onUpdate:modelValue":I[0]||(I[0]=C=>a.value=C),"prepend-inner-icon":"mdi:mdi-magnify",label:"Search",variant:"underlined","hide-details":"",clearable:!0,class:"d-none"},null,8,["modelValue"]),l(sa,{variant:"text",onClick:I[1]||(I[1]=fe(C=>n.value=!n.value,["stop"]))})]),_:1}),l(We,{modelValue:n.value,"onUpdate:modelValue":I[2]||(I[2]=C=>n.value=C),location:"right",temporary:!0},{default:i(()=>[l(W,null,{default:i(()=>[l(r,{to:{name:"Profile"}},{default:i(()=>[l(T,{title:o.value.DisplayName},{prepend:i(()=>[c.value?(y(),_(M,{key:0,src:c.value,class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])):(y(),_(xe,{key:1,icon:"mdi:mdi-account-circle",size:"x-large"}))]),_:1},8,["title"])]),_:1})]),_:1}),l(Ke),l(P,{name:"navigation"},{default:i(()=>[l(W,null,{default:i(()=>[l(r,{to:"/"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-view-dashboard-outline",title:"Home",value:"home"})]),_:1}),S.value||g.value||k.value?(y(),_(qe,{key:0,value:"Admin"},{activator:i(({props:C})=>[l(T,G(C,{"prepend-icon":"mdi:mdi-security",title:"Admin"}),null,16)]),default:i(()=>[S.value||V.value?(y(),_(r,{key:0,to:"/admin/conventions"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-domain",title:"Conventions",value:"Conventions"})]),_:1})):L("",!0),g.value?(y(),_(r,{key:1,to:"/admin/organisations"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-store",title:"Organisations",value:"Organisations"})]),_:1})):L("",!0),k.value?(y(),_(r,{key:2,to:"/admin/groups"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-key-chain-variant",title:"Permissions",value:"Permissions"})]),_:1})):L("",!0)]),_:1})):L("",!0),l(r,{to:{name:"Profile"}},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-account-circle",title:"Manage Account"})]),_:1}),l(T,{"prepend-icon":"mdi:mdi-theme-light-dark",onClick:d,title:`${v.value=="light"?"Dark":"Light"} Mode`},null,8,["title"]),l(r,{to:"/logout"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-logout",title:"Logout",value:"Logout"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(ue,null,{default:i(()=>[l(P,{onPageTitle:h,"logged-in":!0})]),_:1})]),_:1})}}}),ia=ie(ua,[["__scopeId","data-v-3dd3a779"]]),ca="/assets/graze-logo-R84bxePu.svg",va=F({__name:"LoginLayout",async setup(e){let s,t;const n=f();return n.value=([s,t]=pe(()=>he()),s=await s,t(),s),(u,a)=>{const o=H("RouterView");return y(),ye(Ve,null,[l(K,{class:"logo-container text-center"},{default:i(()=>{var c;return[n.value&&n.value.Logo?(y(),_(M,{key:0,src:n.value.Logo,class:"graze-logo ma-auto"},null,8,["src"])):(y(),_(M,{key:1,src:A(ca),class:"graze-logo ma-auto"},null,8,["src"])),q("h1",null,z(((c=n.value)==null?void 0:c.Name)||"Graze")+" Registration System",1)]}),_:1}),l(K,{class:"login-container text-center mb-0 rounded rounded-lg mb-md-10"},{default:i(()=>[l(Je,null,{default:i(()=>[l(le,{class:"ma-2",color:"indigo",icon:"mdi:mdi-lock-outline"})]),_:1}),q("h2",null,z(A(Qe).headingSignIn),1),l(o,{"logged-in":!1})]),_:1})],64)}}}),da=ie(va,[["__scopeId","data-v-a2e80a73"]]),ma=R({...Y(),...ne({fullHeight:!0}),...ae()},"VApp"),ga=B()({name:"VApp",props:ma(),setup(e,s){let{slots:t}=s;const n=te(e),{layoutClasses:u,getLayoutItem:a,items:o,layoutRef:c}=re(e),{rtlClasses:m}=_e();return N(()=>{var v;return l("div",{ref:c,class:["v-application",n.themeClasses.value,u.value,m.value,e.class],style:[e.style]},[l("div",{class:"v-application__wrap"},[(v=t.default)==null?void 0:v.call(t)])])}),{getLayoutItem:a,items:o,theme:n}}}),fa=R({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...De(),...Y(),...Oe(),...oe(),...He(),...ze({tag:"footer"}),...ae()},"VFooter"),pa=B()({name:"VFooter",props:fa(),setup(e,s){let{slots:t}=s;const n=f(),{themeClasses:u}=te(e),{backgroundColorClasses:a,backgroundColorStyles:o}=Me(E(e,"color")),{borderClasses:c}=Ge(e),{elevationClasses:m}=Fe(e),{roundedClasses:v}=Ye(e),d=w(32),{resizeRef:h}=$e(V=>{V.length&&(d.value=V[0].target.clientHeight)}),S=p(()=>e.height==="auto"?d.value:parseInt(e.height,10));return Q(()=>e.app,()=>{const V=se({id:e.name,order:p(()=>parseInt(e.order,10)),position:p(()=>"bottom"),layoutSize:S,elementSize:p(()=>e.height==="auto"?void 0:S.value),active:p(()=>e.app),absolute:E(e,"absolute")});X(()=>{n.value=V.layoutItemStyles.value})}),N(()=>l(e.tag,{ref:h,class:["v-footer",u.value,a.value,c.value,m.value,v.value,e.class],style:[o.value,e.app?n.value:{height:ke(e.height)},e.style]},t)),{}}}),Oa=F({__name:"Default",emits:["pageTitle"],setup(e,{emit:s}){let t=Ce();const n=Se.getInstance(),u=n.getTokenByService("GrazeAPI"),a=f(!1),o=f(!1),c=s,m=ee.getInstance();m.on("login",d=>{t=d,a.value=!0}),m.on("logout",()=>{t=void 0,a.value=!1}),m.on("tokenManager.tokenUpdated",()=>{a.value=!0,o.value=!0}),m.on("tokenManager.sessionExpired",()=>{a.value=!1,o.value=!1,O(),location.reload()}),u?t?u.AccessExpires<=Date.now()&&u.RefreshExpires>Date.now()?n.refreshToken(u):u.AccessExpires>Date.now()?(O(),a.value=!1,o.value=!0):(a.value=!0,o.value=!0):Te().then(d=>{t=d,a.value=!0,o.value=!0}).catch(()=>{a.value=!1,o.value=!0}):(O(),a.value=!1,o.value=!0);const v=d=>{c("pageTitle",d)};return(d,h)=>(y(),_(be,null,{default:i(()=>[l(ga,{class:"bg-image"},{default:i(()=>[o.value?(y(),_(ue,{key:0},{default:i(()=>[a.value&&A(t)?(y(),_(ia,{key:0,user:A(t),onPageTitle:v},null,8,["user"])):(y(),_(da,{key:1}))]),_:1})):L("",!0),l(pa,null,{default:i(()=>h[0]||(h[0]=[Z(" Powered by Graze ")])),_:1})]),_:1})]),_:1}))}});export{Oa as default};