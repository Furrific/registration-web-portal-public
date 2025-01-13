import{i as H,M as z,r as d,N as Y,c as re,n as o,q as C,P as j,V as B,k as te,v as e,f as n,G as O,y as A,A as U,F as y,m as Ee,$ as De,x as k,D as N,Q as fe,H as h,z as ne,U as Me,R as he}from"./index-CBLLpUz9.js";import{V as Re,u as _e}from"./debounce-G780W8Om.js";import{G as ye}from"./group-Dg_peWef.js";import{C as Ve}from"./canDo-BgLTIlvB.js";import{G as Te}from"./userData-nh_vnEMC.js";import{_ as Z}from"./ModelDialog.vue_vue_type_script_setup_true_lang-BoMHv9_6.js";import{_ as K}from"./UserSelect.vue_vue_type_script_setup_true_lang-BL4EwRhW.js";import{V as Be}from"./VAutocomplete-Its23xqJ.js";import{u as de}from"./useStoreAPI-DIKF_PY7.js";import{V as q,a as g}from"./VRow-Dua_LBqL.js";import{V as ue}from"./VTextField-DzG2RcF6.js";import{V as ie}from"./VTextarea-B-2_JoAJ.js";import{V as ke}from"./VForm-DeEbDkTJ.js";import{V as Ge}from"./VFileInput-DMANgYsU.js";import{V as me}from"./forwardRefs-D2qfTUv9.js";import{e as ee,V as x,d as Ne}from"./VContainer-B8rCAnu7.js";import{a as le,b as oe,c as ae,V as ve}from"./VExpansionPanels-DbWyvN6M.js";import{V as Ue,a as Ce,c as Ie,d as ge}from"./VList-CblLDVXr.js";import{V as se}from"./scopeId-BrXlor02.js";import{h as we}from"./date-DgbCHIwC.js";import{a as $e}from"./VTable-CR87L6jZ.js";import{a as xe,d as Pe,e as Ye}from"./VTabs-BSl8kYN6.js";import{V as qe}from"./VToolbar-BM5-SCo4.js";import{e as Oe}from"./VCard-Y9mUxmlm.js";import"./VDataTable-BNh2xrur.js";import"./filter-BIEPd0Rr.js";import"./form-AVbvne_u.js";import"./VOverlay-D_-l4zJw.js";import"./VCheckboxBtn-BHNAyBiz.js";import"./VChip-BqZGdnTV.js";import"./VDivider-CGDLo0GR.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-W2LxZMAA.js";import"./layout-CGgVoJGL.js";import"./VDialog-C024KNjo.js";import"./createSimpleFunctional-B2WXtTo3.js";var L=(i=>(i.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE="GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE",i.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE="GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE",i.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS="GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS",i))(L||{});const J=[{title:"Costume Prop Clearance",value:"GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE"},{title:"Costume Prop Type",value:"GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE"},{title:"Lost and Found Status",value:"GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS"}],Fe=(i,P)=>i===void 0?!1:Ve(i,ye.GROUP_TYPE_CONVENTION,P.ConventionUUID,P).EditProps,be=(i,P)=>i===void 0?!1:Ve(i,ye.GROUP_TYPE_CONVENTION,P.ConventionUUID,P).ConfigureProps,Ae=H({__name:"GenericEnumSelect",props:z({category:{},convention:{},label:{default:""},variant:{default:"filled"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const P=j(),p=d([]),t=Y(i,"modelValue");P.getConventionGenericEnums(i.convention.ConventionUUID,i.category).then(f=>{f&&(p.value=f)});const m=re(()=>{const f=p.value.map(E=>E).sort((E,G)=>E.Title>G.Title?1:E.Title==G.Title?0:-1);return f.unshift({ID:0,GenericEnumUUID:B,ConventionID:0,ConventionUUID:B,Category:i.category,Name:"",Title:`- Select ${i.label} -`,Description:""}),f});return(f,E)=>(o(),C(Be,{label:f.label,items:m.value,"item-title":"Title","item-value":"GenericEnumUUID",variant:f.variant,"hide-details":"",modelValue:t.value,"onUpdate:modelValue":E[0]||(E[0]=G=>t.value=G)},null,8,["label","items","variant","modelValue"]))}}),ze=["innerHTML"],He=["innerHTML"],je=H({__name:"EditCostumeProp",props:z({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},costumeProp:{required:!0},costumePropModifiers:{}}),emits:z(["new","update:costumeProp"],["update:modelValue","update:costumeProp"]),setup(i,{emit:P}){const p=Y(i,"modelValue"),t=Y(i,"costumeProp"),m=j(),f=de(),E=P,G=d(te(t.value)),F=d(`${f.GetCostumePropImageURL(t.value.CostumePropUUID)}?${new Date().getTime()}`),R=d(),D=d(),a=d([]),r=d([]);m.getConventionGenericEnums(i.convention.ConventionUUID,L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(b=>{b&&(a.value=b)}),m.getConventionGenericEnums(i.convention.ConventionUUID,L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(b=>{b&&(r.value=b)});const u=()=>{},v=()=>{t.value=te(G.value)},T=b=>{m.saveCostumeProp(t.value).then(w=>{w?(b&&b("Saved Costume Prop"),t.value.CostumePropUUID!=w.CostumePropUUID&&E("new",w),t.value=w,E("update:costumeProp",w),F.value?c(w.CostumePropUUID).then(()=>{setTimeout(()=>{p.value=!1},1e3)}).catch(()=>{b("Failed to Save Image")}):setTimeout(()=>{p.value=!1},1e3)):b&&b("Failed to Save Costume Prop")}).catch(()=>{b&&b("Failed to Save Costume Prop")})},$=re(()=>!1),_=()=>{F.value=URL.createObjectURL(R.value.files[0])},c=async b=>{var S;const w=new FormData((S=D.value)==null?void 0:S.$el);if(w.get("Image")&&w.get("Image").size>0)return w.set("ConventionUUID",i.convention.ConventionUUID),w.set("CostumePropUUID",b),await f.SaveCostumePropImage(w)},V=b=>{if(!b)return"";let w=b;return w=w.replaceAll(`
`,"<br>"),w=w.replaceAll(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),w=w.replaceAll(/\[i](.*?)\[\/i]/g,"<em>$1</em>"),w};return(b,w)=>(o(),C(Z,Ee({modelValue:p.value,"onUpdate:modelValue":w[5]||(w[5]=S=>p.value=S),title:"Add Costume Prop","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0,onReset:v,onSave:T},{[De($.value&&"delete")]:u}),{default:e(()=>[n(ee,null,{default:e(()=>[n(q,null,{default:e(()=>[t.value.AddedBy?(o(),C(g,{key:0,cols:"12"},{default:e(()=>[O("strong",null,"Added By: "+A(t.value.AddedBy.DisplayName),1)]),_:1})):U("",!0),n(g,{cols:"12"},{default:e(()=>[n(K,{modelValue:t.value.OwnerUUID,"onUpdate:modelValue":w[0]||(w[0]=S=>t.value.OwnerUUID=S),convention:b.convention,label:"Owner",variant:"outlined","aria-required":"true",clearable:!0},null,8,["modelValue","convention"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(Ae,{modelValue:t.value.TypeUUID,"onUpdate:modelValue":w[1]||(w[1]=S=>t.value.TypeUUID=S),category:y(L).GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE,convention:b.convention,label:"Type",variant:"outlined"},null,8,["modelValue","category","convention"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(ue,{modelValue:t.value.Description,"onUpdate:modelValue":w[2]||(w[2]=S=>t.value.Description=S),label:"Description",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(Ae,{modelValue:t.value.ClearanceUUID,"onUpdate:modelValue":w[3]||(w[3]=S=>t.value.ClearanceUUID=S),category:y(L).GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE,convention:b.convention,label:"Clearance",variant:"outlined"},null,8,["modelValue","category","convention"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(ie,{modelValue:t.value.Remarks,"onUpdate:modelValue":w[4]||(w[4]=S=>t.value.Remarks=S),label:"Remarks / Information",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(ke,{ref:"propImageForm",enctype:"multipart/form-data"},{default:e(()=>[n(Ge,{label:"Photograph",name:"Image",variant:"outlined",ref:"imageFileInput","prepend-icon":"mdi:mdi-camera",capture:"environment",accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp",onChange:_})]),_:1}),F.value?(o(),C(me,{key:0,src:F.value,class:"border profileImage my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])):U("",!0)]),_:1}),t.value.ClearanceUUID!==""&&t.value.ClearanceUUID!==y(B)?(o(),C(g,{key:1,cols:"12"},{default:e(()=>{var S,Q;return[O("div",null,[O("strong",null,A((S=a.value.find(X=>X.GenericEnumUUID===t.value.ClearanceUUID))==null?void 0:S.Title),1)]),O("div",{innerHTML:V((Q=a.value.find(X=>X.GenericEnumUUID===t.value.ClearanceUUID))==null?void 0:Q.Description)},null,8,ze)]}),_:1})):U("",!0),t.value.TypeUUID!==""&&t.value.TypeUUID!==y(B)?(o(),C(g,{key:2,cols:"12"},{default:e(()=>{var S;return[O("div",{innerHTML:V((S=r.value.find(Q=>Q.GenericEnumUUID===t.value.TypeUUID))==null?void 0:S.Description)},null,8,He)]}),_:1})):U("",!0)]),_:1})]),_:1})]),_:1},16,["modelValue"]))}}),Se=H({__name:"EditGenericEnum",props:z({convention:{},title:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},genericEnum:{required:!0},genericEnumModifiers:{}}),emits:z(["delete:genericEnum","new","update:genericEnum"],["update:modelValue","update:genericEnum"]),setup(i,{emit:P}){const p=Y(i,"modelValue"),t=Y(i,"genericEnum"),m=d(te(t.value)),f=j(),E=P,G=d([]),F=d([]),R=u=>{f.deleteGenericEnum(m.value.GenericEnumUUID).then(v=>{var T,$;v?(u&&u(`Deleted ${(T=J.find(_=>_.value==m.value.Category))==null?void 0:T.title}`),E("delete:genericEnum",m.value),setTimeout(()=>{p.value=!1},1e3)):u&&u(`Failed to Delete ${($=J.find(_=>_.value==m.value.Category))==null?void 0:$.title}`)}).catch(()=>{var v;u&&u(`Failed to Delete ${(v=J.find(T=>T.value==m.value.Category))==null?void 0:v.title}`)})},D=re(()=>m.value.GenericEnumUUID!=B),a=u=>{f.saveGenericEnum(m.value).then(v=>{var T,$;v?(u&&u(`Saved ${(T=J.find(_=>_.value==m.value.Category))==null?void 0:T.title}`),E("update:genericEnum",v),setTimeout(()=>{p.value=!1},1e3)):u&&u(`Failed to Save ${($=J.find(_=>_.value==m.value.Category))==null?void 0:$.title}`)}).catch(()=>{var v;u&&u(`Failed to Save ${(v=J.find(T=>T.value==m.value.Category))==null?void 0:v.title}`)})},r=()=>{m.value=te(t.value)};return f.getConventionGenericEnums(i.convention.ConventionUUID,L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(u=>{u&&(G.value=u)}).catch(()=>{}),f.getConventionGenericEnums(i.convention.ConventionUUID,L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(u=>{u&&(F.value=u)}).catch(()=>{}),(u,v)=>(o(),C(Z,Ee({modelValue:p.value,"onUpdate:modelValue":v[3]||(v[3]=T=>p.value=T),title:u.title,"show-reset-action":!1,"show-save-action":!0,"show-delete-action":!1,"show-close-action":!0,"hide-extension":!0,fullscreen:!1,persistent:!0,scrollable:!0,onReset:r,onSave:a},{[De(D.value&&"delete")]:R}),{default:e(()=>[n(ee,null,{default:e(()=>[n(q,null,{default:e(()=>[n(g,{cols:"12"},{default:e(()=>[n(ue,{modelValue:m.value.Name,"onUpdate:modelValue":v[0]||(v[0]=T=>m.value.Name=T),label:"Internal Name",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(ue,{modelValue:m.value.Title,"onUpdate:modelValue":v[1]||(v[1]=T=>m.value.Title=T),label:"Display Title",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(ie,{modelValue:m.value.Description,"onUpdate:modelValue":v[2]||(v[2]=T=>m.value.Description=T),label:"Description",variant:"outlined"},null,8,["modelValue"]),v[4]||(v[4]=O("br",null,null,-1)),v[5]||(v[5]=O("p",null,[O("strong",null,"Description Formatting Guidance")],-1)),v[6]||(v[6]=O("dl",null,[O("dt",{class:"float-left mr-2"}," ** "),O("dd",null,[k(" Surround text with double asterisk to make text bold. E.g. **this is bold** = "),O("strong",null,"this is bold")]),O("dt",{class:"float-left mr-2"}," [i] "),O("dd",null,[k(" Surround text with [i] and [/i] to make text italic. E.g. [i]italic emphasis[/i] = "),O("em",null,"italic emphasis")])],-1))]),_:1})]),_:1})]),_:1})]),_:1},16,["modelValue","title"]))}}),We=H({__name:"ConfigCostumeProps",props:z({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const P=Y(i,"modelValue"),p=j(),t=d(),m=d([]),f=d(!1),E=d([]),G=a=>{const r=()=>({ID:0,GenericEnumUUID:B,ConventionID:i.convention.ID,ConventionUUID:i.convention.ConventionUUID,Category:a,Name:"",Title:"",Description:""});t.value=r(),f.value=!0},F=a=>{t.value=a,f.value=!0},R=a=>{let r;switch(a.Category){case L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE:r=m.value.findIndex(u=>u.GenericEnumUUID==a.GenericEnumUUID),r>=0&&m.value.splice(r,1);break;case L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE:r=E.value.findIndex(u=>u.GenericEnumUUID==a.GenericEnumUUID),r>=0&&E.value.splice(r,1);break}},D=a=>{let r;switch(a.Category){case L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE:r=m.value.findIndex(u=>u.GenericEnumUUID==a.GenericEnumUUID),r>=0?m.value.splice(r,1,a):m.value.push(t.value);break;case L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE:r=E.value.findIndex(u=>u.GenericEnumUUID==a.GenericEnumUUID),r>=0?E.value.splice(r,1,a):E.value.push(t.value);break}};return p.getConventionGenericEnums(i.convention.ConventionUUID,L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(a=>{a&&(m.value=a)}),p.getConventionGenericEnums(i.convention.ConventionUUID,L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(a=>{a&&(E.value=a)}),(a,r)=>(o(),C(Z,{modelValue:P.value,"onUpdate:modelValue":r[4]||(r[4]=u=>P.value=u),title:"Configure Costume Props","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!0,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0},{default:e(()=>{var u;return[n(ve,null,{default:e(()=>[n(le,null,{default:e(()=>[n(oe,{color:"primary"},{default:e(()=>r[5]||(r[5]=[k(" Clearance Options ")])),_:1}),n(ae,null,{default:e(()=>[n(Ue,null,{default:e(()=>[(o(!0),N(h,null,fe(m.value,v=>(o(),C(Ce,{key:v.GenericEnumUUID},{append:e(()=>[n(x,{icon:"mdi:mdi-pencil-outline",color:"warning",size:"x-small",onClick:T=>F(v)},null,8,["onClick"])]),default:e(()=>[n(Ie,null,{default:e(()=>[O("strong",null,A(v.Name)+" - "+A(v.Title),1)]),_:2},1024),n(ge,null,{default:e(()=>[k(A(v.Description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),n(q,null,{default:e(()=>[n(g,{class:"text-right"},{default:e(()=>[n(x,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:r[0]||(r[0]=v=>G(y(L).GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE))},{default:e(()=>r[6]||(r[6]=[k(" Add Item ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(le,null,{default:e(()=>[n(oe,{color:"primary"},{default:e(()=>r[7]||(r[7]=[k(" Item Types ")])),_:1}),n(ae,null,{default:e(()=>[n(Ue,null,{default:e(()=>[(o(!0),N(h,null,fe(E.value,v=>(o(),C(Ce,{key:v.GenericEnumUUID},{append:e(()=>[n(x,{icon:"mdi:mdi-pencil-outline",color:"warning",size:"x-small",onClick:T=>F(v)},null,8,["onClick"])]),default:e(()=>[n(Ie,null,{default:e(()=>[O("strong",null,A(v.Name)+" - "+A(v.Title),1)]),_:2},1024),n(ge,null,{default:e(()=>[k(A(v.Description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),n(q,null,{default:e(()=>[n(g,{class:"text-right"},{default:e(()=>[n(x,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:r[1]||(r[1]=v=>G(y(L).GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE))},{default:e(()=>r[8]||(r[8]=[k(" Add Item ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),f.value&&t.value?(o(),C(Se,{key:0,convention:a.convention,title:`Edit ${(u=y(J).find(v=>{var T;return v.value==((T=t.value)==null?void 0:T.Category)}))==null?void 0:u.title}`,modelValue:f.value,"onUpdate:modelValue":r[2]||(r[2]=v=>f.value=v),"generic-enum":t.value,"onUpdate:genericEnum":[r[3]||(r[3]=v=>t.value=v),D],"onDelete:genericEnum":R},null,8,["convention","title","modelValue","generic-enum"])):U("",!0)]}),_:1},8,["modelValue"]))}}),Ke=["href"],Qe=["innerHTML"],Je=["innerHTML"],Xe=H({__name:"ViewCostumeProp",props:z({convention:{},title:{default:"View Costume Prop"}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},costumeProp:{required:!0},costumePropModifiers:{}}),emits:["update:modelValue","update:costumeProp"],setup(i){const P=Y(i,"modelValue"),p=Y(i,"costumeProp"),t=j(),m=de(),f=d(`${m.GetCostumePropImageURL(p.value.CostumePropUUID)}?${new Date().getTime()}`),E=d([]),G=d([]);t.getConventionGenericEnums(i.convention.ConventionUUID,L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(R=>{R&&(E.value=R)}),t.getConventionGenericEnums(i.convention.ConventionUUID,L.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(R=>{R&&(G.value=R)});const F=R=>{if(!R)return"";let D=R;return D=D.replaceAll(`
`,"<br>"),D=D.replaceAll(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),D=D.replaceAll(/\[i](.*?)\[\/i]/g,"<em>$1</em>"),D};return(R,D)=>(o(),C(Z,{modelValue:P.value,"onUpdate:modelValue":D[0]||(D[0]=a=>P.value=a),title:R.title,"show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!1,persistent:!1,scrollable:!0},{default:e(()=>[n(ee,null,{default:e(()=>[n(q,null,{default:e(()=>[n(g,{cols:"12"},{default:e(()=>[f.value?(o(),N("a",{key:0,href:f.value,target:"_blank",style:{cursor:"zoom-in"}},[n(me,{src:f.value,class:"border my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])],8,Ke)):U("",!0)]),_:1}),n(g,{cols:"12"},{default:e(()=>[k(A(p.value.Remarks),1)]),_:1}),p.value.AddedBy?(o(),C(g,{key:0,class:"text-right",cols:"12"},{default:e(()=>[O("small",null,"Added By: "+A(p.value.AddedBy.DisplayName),1)]),_:1})):U("",!0),p.value.ClearanceUUID!==""&&p.value.ClearanceUUID!==y(B)?(o(),C(g,{key:1,cols:"12"},{default:e(()=>{var a,r;return[O("div",null,[O("strong",null,A((a=E.value.find(u=>u.GenericEnumUUID===p.value.ClearanceUUID))==null?void 0:a.Title),1)]),O("div",{innerHTML:F((r=E.value.find(u=>u.GenericEnumUUID===p.value.ClearanceUUID))==null?void 0:r.Description)},null,8,Qe)]}),_:1})):U("",!0),p.value.TypeUUID!==""&&p.value.TypeUUID!==y(B)?(o(),C(g,{key:2,cols:"12"},{default:e(()=>{var a;return[O("div",{innerHTML:F((a=G.value.find(r=>r.GenericEnumUUID===p.value.TypeUUID))==null?void 0:a.Description)},null,8,Je)]}),_:1})):U("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),Le=(i,P)=>i===void 0?!1:Ve(i,ye.GROUP_TYPE_CONVENTION,P.ConventionUUID,P).ViewProps,Ze=H({__name:"CostumePropsView",props:{convention:{}},setup(i){const P=j(),p=Te(),t=d(),m=d([]),f=d(1),E=d([]),G=d(!0),F=d(10),R=d(0),D=d([]),a=d(""),r=d(Le(p,i.convention)),u=d(Fe(p,i.convention)),v=d(be(p,i.convention)),T=d(!1),$=d(!1),_=d(!1),c=d({}),V=_e(()=>{a.value=Date.now().toString()}),b=()=>{t.value={ID:0,CostumePropUUID:B,ConventionID:i.convention.ID,ConventionUUID:i.convention.ConventionUUID,Description:"",HasPhoto:!1,Remarks:""},T.value=!0},w=s=>{t.value=s,T.value=!0},S=s=>{t.value=s,_.value=!0},Q=()=>{$.value=!0},X=d([{key:"owner",title:"Attendee",sortable:!1},{key:"type",title:"Type",sortable:!1},{key:"Clearance.Title",title:"Clearance",sortable:!1},{key:"actions",title:"",sortable:!1}]),ce=({page:s,itemsPerPage:l,sortBy:I})=>{G.value=!0,f.value=s,E.value=I;try{c.value.Limit=l,c.value.Offset=(s-1)*l;const W=a.value;P.searchConventionCostumeProps(i.convention.ConventionUUID,c.value).then(pe=>{pe&&W===a.value&&(R.value=pe.Total,m.value=pe.CostumeProps,G.value=!1)})}catch(W){console.error(W)}},M=s=>{const l=m.value.findIndex(I=>s.CostumePropUUID==I.CostumePropUUID);l>=0&&m.value.splice(l,1,s)};return(s,l)=>s.convention?(o(),N(h,{key:0},[n(ee,{fluid:!0,class:"px-1"},{default:e(()=>[u.value||v.value?(o(),C(q,{key:0},{default:e(()=>[v.value?(o(),C(g,{key:0,class:"flex-shrink-1 flex-grow-0"},{default:e(()=>[n(x,{color:"primary","prepend-icon":"mdi:mdi-cog",onClick:Q},{default:e(()=>l[12]||(l[12]=[k(" Config ")])),_:1})]),_:1})):U("",!0),n(se),u.value?(o(),C(g,{key:1,class:"flex-shrink-1 flex-grow-0"},{default:e(()=>[n(x,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:b},{default:e(()=>l[13]||(l[13]=[k(" Record New Item ")])),_:1})]),_:1})):U("",!0)]),_:1})):U("",!0)]),_:1}),r.value||u.value?(o(),C(Re,{key:0,page:f.value,"onUpdate:page":l[4]||(l[4]=I=>f.value=I),"items-per-page":F.value,"onUpdate:itemsPerPage":l[5]||(l[5]=I=>F.value=I),"sort-by":D.value,"onUpdate:sortBy":l[6]||(l[6]=I=>D.value=I),headers:X.value,"items-length":R.value,items:m.value,"item-value":"key",loading:G.value,search:a.value,"onUpdate:options":ce},{top:e(()=>[n(ve,{class:"mb-3"},{default:e(()=>[n(le,null,{default:e(()=>[n(oe,{color:"secondary",class:"font-weight-bold pb-0 pt-0"},{default:e(()=>[n(g,{class:"pa-0"},{default:e(()=>[l[14]||(l[14]=k(" Search Criteria ")),n(Ne,{class:"pl-5",icon:"mdi:mdi-credit-card-search-outline"})]),_:1}),n(g,{class:"d-none d-sm-block pa-0",cols:"0"},{default:e(()=>[n(K,{convention:s.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"plain",modelValue:c.value.OwnerUUID,"onUpdate:modelValue":[l[0]||(l[0]=I=>c.value.OwnerUUID=I),y(V)],onClick:l[1]||(l[1]=ne(()=>{},["stop"])),"onClick:clear":y(V),onInput:y(V)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),n(se),n(g,{class:"d-none d-md-block pa-0"})]),_:1}),n(ae,{class:"pt-2"},{default:e(()=>[n(q,null,{default:e(()=>[n(g,{cols:"12",lg:"6"},{default:e(()=>[n(K,{convention:s.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"outlined",modelValue:c.value.OwnerUUID,"onUpdate:modelValue":[l[2]||(l[2]=I=>c.value.OwnerUUID=I),y(V)],onClick:l[3]||(l[3]=ne(()=>{},["stop"])),"onClick:clear":y(V),onInput:y(V)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),"item.owner":e(({item:I})=>[I.Owner?(o(),N(h,{key:0},[I.Owner.Registrations&&I.Owner.Registrations.length>0?(o(),N(h,{key:0},[k(" #"+A(I.Owner.Registrations[0].Reference),1)],64)):U("",!0),I.Owner.Generated&&I.Owner.Generated.badge_name?(o(),N(h,{key:1},[k("  "+A(I.Owner.Generated.badge_name),1)],64)):(o(),N(h,{key:2},[k("  "+A(I.Owner.DisplayName),1)],64))],64)):U("",!0)]),"item.type":e(({item:I})=>[I.Type?(o(),N(h,{key:0},[k(A(I.Type.Title)+" ",1),l[15]||(l[15]=O("br",null,null,-1))],64)):U("",!0),O("small",null,A(I.Description),1)]),"item.actions":e(({item:I})=>[r.value?(o(),C(x,{key:0,icon:"mdi:mdi-magnify",size:"x-small",color:"success",onClick:W=>S(I),class:"mr-2"},null,8,["onClick"])):U("",!0),u.value?(o(),C(x,{key:1,icon:"mdi:mdi-pencil",size:"x-small",color:"warning",onClick:W=>w(I)},null,8,["onClick"])):U("",!0)]),_:1},8,["page","items-per-page","sort-by","headers","items-length","items","loading","search"])):U("",!0),T.value&&t.value?(o(),C(je,{key:1,convention:s.convention,modelValue:T.value,"onUpdate:modelValue":l[7]||(l[7]=I=>T.value=I),"costume-prop":t.value,"onUpdate:costumeProp":[l[8]||(l[8]=I=>t.value=I),M],onNew:y(V)},null,8,["convention","modelValue","costume-prop","onNew"])):U("",!0),_.value&&t.value?(o(),C(Xe,{key:2,convention:s.convention,title:t.value.Description,modelValue:_.value,"onUpdate:modelValue":l[9]||(l[9]=I=>_.value=I),"costume-prop":t.value,"onUpdate:costumeProp":l[10]||(l[10]=I=>t.value=I)},null,8,["convention","title","modelValue","costume-prop"])):U("",!0),$.value?(o(),C(We,{key:3,convention:s.convention,modelValue:$.value,"onUpdate:modelValue":l[11]||(l[11]=I=>$.value=I)},null,8,["convention","modelValue"])):U("",!0)],64)):U("",!0)}}),en={key:0,class:"text-success"},nn={key:1,class:"text-warning"},tn={key:2,class:"text-error"},ln={key:3,class:"text-error"},on=H({__name:"EditLostAndFound",props:z({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},lostAndFound:{required:!0},lostAndFoundModifiers:{}}),emits:z(["new","update:lostAndFound"],["update:modelValue","update:lostAndFound"]),setup(i,{emit:P}){const p=Y(i,"modelValue"),t=Y(i,"lostAndFound"),m=j(),f=de(),E=P,G=d(te(t.value)),F=d(`${f.GetLostAndFoundImageURL(t.value.LostAndFoundUUID)}?${new Date().getTime()}`),R=d(),D=d(),a=()=>{},r=()=>{t.value=te(G.value)},u=_=>{m.saveLostAndFound(t.value).then(c=>{c?(_&&_("Saved Costume Prop"),t.value.LostAndFoundUUID!=c.LostAndFoundUUID&&E("new",c),t.value=c,E("update:lostAndFound",c),F.value?$(c.LostAndFoundUUID).then(()=>{setTimeout(()=>{p.value=!1},1e3)}).catch(()=>{_("Failed to Save Image")}):setTimeout(()=>{p.value=!1},1e3)):_&&_("Failed to Save Costume Prop")}).catch(()=>{_&&_("Failed to Save Costume Prop")})},v=re(()=>!1),T=()=>{F.value=URL.createObjectURL(R.value.files[0])},$=async _=>{var V;const c=new FormData((V=D.value)==null?void 0:V.$el);if(c.get("Image")&&c.get("Image").size>0)return c.set("ConventionUUID",i.convention.ConventionUUID),c.set("LostAndFoundUUID",_),await f.SaveLostAndFoundImage(c)};return(_,c)=>(o(),C(Z,Ee({modelValue:p.value,"onUpdate:modelValue":c[5]||(c[5]=V=>p.value=V),title:"Report Lost & Found","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0,onReset:r,onSave:u},{[De(v.value&&"delete")]:a}),{default:e(()=>[n(ee,null,{default:e(()=>[n(q,null,{default:e(()=>[t.value.AddedBy?(o(),C(g,{key:0,cols:"12"},{default:e(()=>[c[6]||(c[6]=O("strong",null,"Added By:",-1)),k(" "+A(t.value.AddedBy.DisplayName),1)]),_:1})):U("",!0),t.value.AddedBy?(o(),C(g,{key:1,cols:"12"},{default:e(()=>[c[7]||(c[7]=O("strong",null,"Status:",-1)),t.value.FoundByUUID&&t.value.OwnerUUID&&t.value.FoundByUUID!==y(B)&&t.value.OwnerUUID!==y(B)?(o(),N("span",en," Returned ")):t.value.FoundByUUID&&t.value.FoundByUUID!==y(B)?(o(),N("span",nn," Found ")):t.value.OwnerUUID&&t.value.OwnerUUID!==y(B)?(o(),N("span",tn," Lost ")):(o(),N("span",ln," Unknown "))]),_:1})):U("",!0),n(g,{cols:"12"},{default:e(()=>[n(K,{modelValue:t.value.FoundByUUID,"onUpdate:modelValue":c[0]||(c[0]=V=>t.value.FoundByUUID=V),convention:_.convention,label:"Found By",variant:"outlined","persistent-hint":!0,hint:"If unknown enter yourself",clearable:!0},null,8,["modelValue","convention"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(K,{modelValue:t.value.OwnerUUID,"onUpdate:modelValue":c[1]||(c[1]=V=>t.value.OwnerUUID=V),convention:_.convention,label:"Claimant (Owner)",variant:"outlined","persistent-hint":!0,hint:"The person either reporting item missing or claiming it",clearable:!0},null,8,["modelValue","convention"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(ue,{modelValue:t.value.Title,"onUpdate:modelValue":c[2]||(c[2]=V=>t.value.Title=V),label:"Title",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(ie,{modelValue:t.value.Description,"onUpdate:modelValue":c[3]||(c[3]=V=>t.value.Description=V),label:"Description",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(ie,{modelValue:t.value.Comments,"onUpdate:modelValue":c[4]||(c[4]=V=>t.value.Comments=V),label:"Comments",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),n(g,{cols:"12"},{default:e(()=>[n(ke,{ref:"propImageForm",enctype:"multipart/form-data"},{default:e(()=>[n(Ge,{label:"Photograph",name:"Image",variant:"outlined",ref:"imageFileInput","prepend-icon":"mdi:mdi-camera",capture:"environment",accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp",onChange:T})]),_:1}),F.value?(o(),C(me,{key:0,src:F.value,class:"border profileImage my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])):U("",!0)]),_:1})]),_:1})]),_:1})]),_:1},16,["modelValue"]))}}),an=H({__name:"ConfigLostAndFound",props:z({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const P=Y(i,"modelValue"),p=j(),t=d(),m=d([]),f=d(!1),E=D=>{const a=()=>({ID:0,GenericEnumUUID:B,ConventionID:i.convention.ID,ConventionUUID:i.convention.ConventionUUID,Category:D,Name:"",Title:"",Description:""});t.value=a(),f.value=!0},G=D=>{t.value=D,f.value=!0},F=D=>{let a;switch(D.Category){case L.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS:a=m.value.findIndex(r=>r.GenericEnumUUID==D.GenericEnumUUID),a>=0&&m.value.splice(a,1);break}},R=D=>{let a;switch(D.Category){case L.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS:a=m.value.findIndex(r=>r.GenericEnumUUID==D.GenericEnumUUID),a>=0?m.value.splice(a,1,D):m.value.push(t.value);break}};return p.getConventionGenericEnums(i.convention.ConventionUUID,L.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS).then(D=>{D&&(m.value=D)}),(D,a)=>(o(),C(Z,{modelValue:P.value,"onUpdate:modelValue":a[3]||(a[3]=r=>P.value=r),title:"Configure Costume Props","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!0,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0},{default:e(()=>{var r;return[n(ve,null,{default:e(()=>[n(le,null,{default:e(()=>[n(oe,{color:"primary"},{default:e(()=>a[4]||(a[4]=[k(" Item Status ")])),_:1}),n(ae,null,{default:e(()=>[n(Ue,null,{default:e(()=>[(o(!0),N(h,null,fe(m.value,u=>(o(),C(Ce,{key:u.GenericEnumUUID},{append:e(()=>[n(x,{icon:"mdi:mdi-pencil-outline",color:"warning",size:"x-small",onClick:v=>G(u)},null,8,["onClick"])]),default:e(()=>[n(Ie,null,{default:e(()=>[O("strong",null,A(u.Name)+" - "+A(u.Title),1)]),_:2},1024),n(ge,null,{default:e(()=>[k(A(u.Description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),n(q,null,{default:e(()=>[n(g,{class:"text-right"},{default:e(()=>[n(x,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:a[0]||(a[0]=u=>E(y(L).GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS))},{default:e(()=>a[5]||(a[5]=[k(" Add Item ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),f.value&&t.value?(o(),C(Se,{key:0,convention:D.convention,title:`Edit ${(r=y(J).find(u=>{var v;return u.value==((v=t.value)==null?void 0:v.Category)}))==null?void 0:r.title}`,modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=u=>f.value=u),"generic-enum":t.value,"onUpdate:genericEnum":[a[2]||(a[2]=u=>t.value=u),R],"onDelete:genericEnum":F},null,8,["convention","title","modelValue","generic-enum"])):U("",!0)]}),_:1},8,["modelValue"]))}}),un=["href"],sn=H({__name:"ViewLostAndFound",props:z({title:{default:"View Costume Prop"}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},lostAndFound:{required:!0},lostAndFoundModifiers:{}}),emits:["update:modelValue","update:lostAndFound"],setup(i){const P=Y(i,"modelValue"),p=Y(i,"lostAndFound"),t=de(),m=d(`${t.GetLostAndFoundImageURL(p.value.LostAndFoundUUID)}?${new Date().getTime()}`);return(f,E)=>(o(),C(Z,{modelValue:P.value,"onUpdate:modelValue":E[0]||(E[0]=G=>P.value=G),title:f.title,"show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!1,persistent:!1,scrollable:!0},{default:e(()=>[n(ee,null,{default:e(()=>[n(q,null,{default:e(()=>[n(g,{cols:"12"},{default:e(()=>[m.value?(o(),N("a",{key:0,href:m.value,target:"_blank",style:{cursor:"zoom-in"}},[n(me,{src:m.value,class:"border my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])],8,un)):U("",!0)]),_:1}),n(g,{cols:"12"},{default:e(()=>[k(A(p.value.Description),1)]),_:1}),n(g,{cols:"12"},{default:e(()=>[k(A(p.value.Comments),1)]),_:1}),p.value.AddedBy?(o(),C(g,{key:0,class:"text-right",cols:"12"},{default:e(()=>[O("small",null,"Added By: "+A(p.value.AddedBy.DisplayName),1)]),_:1})):U("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),rn={key:0,class:"text-success"},dn={key:1,class:"text-warning"},mn={key:2,class:"text-error"},vn={key:3,class:"text-error"},cn=H({__name:"LostAndFoundView",props:{convention:{}},setup(i){const P=j(),p=Te(),t=d(),m=d([]),f=d(1),E=d([]),G=d(!0),F=d(10),R=d(0),D=d([]),a=d(""),r=d(Le(p,i.convention)),u=d(Fe(p,i.convention)),v=d(be(p,i.convention)),T=d(!1),$=d(!1),_=d(!1),c=d({}),V=_e(()=>{a.value=Date.now().toString()}),b=()=>{t.value={ID:0,LostAndFoundUUID:B,ConventionID:i.convention.ID,ConventionUUID:i.convention.ConventionUUID,Title:"",Description:"",HasPhoto:!1,Comments:""},T.value=!0},w=M=>{t.value=M,T.value=!0},S=M=>{t.value=M,_.value=!0},Q=d([{key:"owner",title:"Owner",sortable:!1},{key:"finder",title:"Found By",sortable:!1},{key:"title",title:"Title",sortable:!1},{key:"status",title:"Status",sortable:!1},{key:"timestamps",title:"Date",sortable:!1},{key:"actions",title:"",sortable:!1}]),X=({page:M,itemsPerPage:s,sortBy:l})=>{G.value=!0,f.value=M,E.value=l;try{c.value.Limit=s,c.value.Offset=(M-1)*s;const I=a.value;P.searchConventionLostAndFound(i.convention.ConventionUUID,c.value).then(W=>{W&&I===a.value&&(R.value=W.Total,m.value=W.LostAndFound,G.value=!1)})}catch(I){console.error(I)}},ce=M=>{const s=m.value.findIndex(l=>M.LostAndFoundUUID==l.LostAndFoundUUID);s>=0&&m.value.splice(s,1,M)};return(M,s)=>M.convention?(o(),N(h,{key:0},[n(ee,{fluid:!0,class:"px-1"},{default:e(()=>[u.value||v.value?(o(),C(q,{key:0},{default:e(()=>[n(se),u.value?(o(),C(g,{key:0,class:"flex-shrink-1 flex-grow-0"},{default:e(()=>[n(x,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:b},{default:e(()=>s[16]||(s[16]=[k(" Record New Item ")])),_:1})]),_:1})):U("",!0)]),_:1})):U("",!0)]),_:1}),r.value||u.value?(o(),C(Re,{key:0,page:f.value,"onUpdate:page":s[8]||(s[8]=l=>f.value=l),"items-per-page":F.value,"onUpdate:itemsPerPage":s[9]||(s[9]=l=>F.value=l),"sort-by":D.value,"onUpdate:sortBy":s[10]||(s[10]=l=>D.value=l),headers:Q.value,"items-length":R.value,items:m.value,"item-value":"key",loading:G.value,search:a.value,"onUpdate:options":X},{top:e(()=>[n(ve,{class:"mb-3"},{default:e(()=>[n(le,null,{default:e(()=>[n(oe,{color:"secondary",class:"font-weight-bold pb-0 pt-0"},{default:e(()=>[n(g,{class:"pa-0"},{default:e(()=>[s[17]||(s[17]=k(" Search Criteria ")),n(Ne,{class:"pl-5",icon:"mdi:mdi-credit-card-search-outline"})]),_:1}),n(g,{class:"d-none d-sm-block pa-0 pr-4",cols:"0"},{default:e(()=>[n(K,{convention:M.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"plain",modelValue:c.value.OwnerUUID,"onUpdate:modelValue":[s[0]||(s[0]=l=>c.value.OwnerUUID=l),y(V)],onClick:s[1]||(s[1]=ne(()=>{},["stop"])),"onClick:clear":y(V),onInput:y(V)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),n(g,{class:"d-none d-sm-block pa-0 pr-4",cols:"0"},{default:e(()=>[n(K,{convention:M.convention,label:"Finder",clearable:!0,"hide-details":"",variant:"plain",modelValue:c.value.FoundByUUID,"onUpdate:modelValue":[s[2]||(s[2]=l=>c.value.FoundByUUID=l),y(V)],onClick:s[3]||(s[3]=ne(()=>{},["stop"])),"onClick:clear":y(V),onInput:y(V)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),n(se),n(g,{class:"d-none d-md-block pa-0"})]),_:1}),n(ae,{class:"pt-2"},{default:e(()=>[n(q,null,{default:e(()=>[n(g,{cols:"12",lg:"6"},{default:e(()=>[n(K,{convention:M.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"outlined",modelValue:c.value.OwnerUUID,"onUpdate:modelValue":[s[4]||(s[4]=l=>c.value.OwnerUUID=l),y(V)],onClick:s[5]||(s[5]=ne(()=>{},["stop"])),"onClick:clear":y(V),onInput:y(V)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),n(g,{cols:"12",lg:"6"},{default:e(()=>[n(K,{convention:M.convention,label:"Finder",clearable:!0,"hide-details":"",variant:"outlined",modelValue:c.value.FoundByUUID,"onUpdate:modelValue":[s[6]||(s[6]=l=>c.value.FoundByUUID=l),y(V)],onClick:s[7]||(s[7]=ne(()=>{},["stop"])),"onClick:clear":y(V),onInput:y(V)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),"item.finder":e(({item:l})=>[l.FoundBy?(o(),N(h,{key:0},[l.FoundBy.Registrations&&l.FoundBy.Registrations.length>0?(o(),N(h,{key:0},[k(" #"+A(l.FoundBy.Registrations[0].Reference),1)],64)):U("",!0),l.FoundBy.Generated&&l.FoundBy.Generated.badge_name?(o(),N(h,{key:1},[k("  "+A(l.FoundBy.Generated.badge_name),1)],64)):(o(),N(h,{key:2},[k("  "+A(l.FoundBy.DisplayName),1)],64))],64)):U("",!0)]),"item.owner":e(({item:l})=>[l.Owner?(o(),N(h,{key:0},[l.Owner.Registrations&&l.Owner.Registrations.length>0?(o(),N(h,{key:0},[k(" #"+A(l.Owner.Registrations[0].Reference),1)],64)):U("",!0),l.Owner.Generated&&l.Owner.Generated.badge_name?(o(),N(h,{key:1},[k("  "+A(l.Owner.Generated.badge_name),1)],64)):(o(),N(h,{key:2},[k("  "+A(l.Owner.DisplayName),1)],64))],64)):U("",!0)]),"item.timestamps":e(({item:l})=>[s[20]||(s[20]=O("strong",null,"Reported:",-1)),k(" "+A(y(we)(l.CreatedAt,{withTime:!0,withYear:!0}))+" ",1),l.UpdatedAt!=l.CreatedAt?(o(),N(h,{key:0},[s[18]||(s[18]=O("br",null,null,-1)),s[19]||(s[19]=O("strong",null,"Updated:",-1)),k(" "+A(y(we)(l.UpdatedAt,{withTime:!0,withYear:!0})),1)],64)):U("",!0)]),"item.title":e(({item:l})=>[O("strong",null,A(l.Title),1),s[21]||(s[21]=O("br",null,null,-1)),O("small",null,A(l.Description),1)]),"item.status":e(({item:l})=>[l.FoundByUUID&&l.OwnerUUID&&l.FoundByUUID!==y(B)&&l.OwnerUUID!==y(B)?(o(),N("span",rn," Returned ")):l.FoundByUUID&&l.FoundByUUID!==y(B)?(o(),N("span",dn," Found ")):l.OwnerUUID&&l.OwnerUUID!==y(B)?(o(),N("span",mn," Lost ")):(o(),N("span",vn," Unknown "))]),"item.actions":e(({item:l})=>[r.value?(o(),C(x,{key:0,icon:"mdi:mdi-magnify",size:"x-small",color:"success",onClick:I=>S(l),class:"mr-2"},null,8,["onClick"])):U("",!0),u.value?(o(),C(x,{key:1,icon:"mdi:mdi-pencil",size:"x-small",color:"warning",onClick:I=>w(l)},null,8,["onClick"])):U("",!0)]),_:1},8,["page","items-per-page","sort-by","headers","items-length","items","loading","search"])):U("",!0),T.value&&t.value?(o(),C(on,{key:1,convention:M.convention,modelValue:T.value,"onUpdate:modelValue":s[11]||(s[11]=l=>T.value=l),"lost-and-found":t.value,"onUpdate:lostAndFound":[s[12]||(s[12]=l=>t.value=l),ce],onNew:y(V)},null,8,["convention","modelValue","lost-and-found","onNew"])):U("",!0),_.value&&t.value?(o(),C(sn,{key:2,title:t.value.Title,modelValue:_.value,"onUpdate:modelValue":s[13]||(s[13]=l=>_.value=l),"lost-and-found":t.value,"onUpdate:lostAndFound":s[14]||(s[14]=l=>t.value=l)},null,8,["title","modelValue","lost-and-found"])):U("",!0),$.value?(o(),C(an,{key:3,convention:M.convention,modelValue:$.value,"onUpdate:modelValue":s[15]||(s[15]=l=>$.value=l)},null,8,["convention","modelValue"])):U("",!0)],64)):U("",!0)}}),Kn=H({__name:"OperationsView",emits:["pageTitle"],setup(i,{emit:P}){var D;const p=j(),t=P,m=Me(),f=he();Te(),t("pageTitle","Operations");const E=d(),G=d(["Costume Props","Lost and Found"]);let F=((D=m.params.convention)==null?void 0:D.toString())||"";const R=d();return F?p.getConvention(F).then(a=>{a&&(R.value=a)}).catch(()=>{f.push("/")}):f.push("/"),(a,r)=>(o(),C($e,null,{default:e(()=>[n(qe,{color:"blue-darken-4"},{default:e(()=>[n(xe,{modelValue:E.value,"onUpdate:modelValue":r[0]||(r[0]=u=>E.value=u),items:G.value,"show-arrows":""},null,8,["modelValue","items"])]),_:1}),n(Ye,{modelValue:E.value,"onUpdate:modelValue":r[1]||(r[1]=u=>E.value=u),disabled:!0,touch:!1},{default:e(()=>[n(Pe,{value:"Costume Props"},{default:e(()=>[E.value=="Costume Props"?(o(),C(Oe,{key:0,class:"pa-2"},{default:e(()=>[R.value?(o(),C(Ze,{key:0,convention:R.value},null,8,["convention"])):U("",!0)]),_:1})):U("",!0)]),_:1}),n(Pe,{value:"Lost and Found"},{default:e(()=>[E.value=="Lost and Found"?(o(),C(Oe,{key:0,class:"pa-2"},{default:e(()=>[R.value?(o(),C(cn,{key:0,convention:R.value},null,8,["convention"])):U("",!0)]),_:1})):U("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{Kn as default};
