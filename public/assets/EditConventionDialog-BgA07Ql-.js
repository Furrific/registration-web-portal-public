import{i as N,M as D,N as I,r as C,k as V,w as B,$ as L,n as T,q as k,v as a,f as e,B as i,P as A}from"./index-o_XI9ZuN.js";import{_ as P}from"./ModelDialog.vue_vue_type_script_setup_true_lang-DH0kB1OA.js";import{s}from"./index-fwfMqYug.js";import{u as q}from"./useStoreAPI-CUgMYxn9.js";import{e as E}from"./VContainer-CVBTExRs.js";import{V as u,a as m}from"./VRow-DvKWgYQH.js";import{V as G}from"./forwardRefs-Ba1V96E7.js";import{V as g}from"./VTextField-CaWJQF-Q.js";import{V as j}from"./VTextarea-BkjhUu-N.js";import{V as z}from"./VCheckbox-CcjVFqHR.js";import{V as h}from"./VForm-cmaHsON5.js";import{V as O}from"./VFileInput-DlUVyLcm.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const J=N({__name:"EditConventionDialog",props:D({embed:{type:Boolean},title:{}},{modelValue:{type:Boolean,required:!1},modelModifiers:{},convention:{required:!0},conventionModifiers:{}}),emits:D(["update:convention","delete","save"],["update:modelValue","update:convention"]),setup(d,{emit:U}){const _=d,w=A(),v=q(),{title:F=""}=_,c=U,b=I(d,"modelValue"),r=I(d,"convention"),o=C(V(r.value));B(r,()=>{o.value=V(r.value),f.value=`${v.GetConventionLogoURL(o.value.ConventionUUID)}?${new Date().getTime()}`});const f=C(`${v.GetConventionLogoURL(o.value.ConventionUUID)}?${new Date().getTime()}`),p=L("imageFileInput"),R=L("conventionImageForm"),S=()=>{p.value&&p.value.files&&(f.value=URL.createObjectURL(p.value.files[0]))},x=()=>{c("delete")},y=()=>{o.value=V(r.value)},$=async()=>{var l;const t=new FormData((l=R.value)==null?void 0:l.$el);if(t.get("Image")&&t.get("Image").size>0)return t.set("ConventionUUID",o.value.ConventionUUID),await v.SaveConventionLogo(t)},M=t=>{$(),w.saveConvention(o.value).then(l=>{l?t&&t("Convention Data Saved").then(()=>{r.value=l,c("save",l)}):t&&t("Failed to save")}).catch(()=>{t("Failed to save")})};return(t,l)=>(T(),k(P,{modelValue:b.value,"onUpdate:modelValue":l[5]||(l[5]=n=>b.value=n),onDelete:x,onReset:y,onSave:M,title:i(F),color:"primary","show-close-action":!0,"show-delete-action":!0,"show-reset-action":!0,"show-save-action":!0,fullscreen:!0,persistent:!0,embed:t.embed},{default:a(()=>[e(E,{class:"pa-0",fluid:!0},{default:a(()=>[e(u,null,{default:a(()=>[e(m,null,{default:a(()=>[e(G,{class:"imgLogo mx-auto",src:f.value||""},null,8,["src"])]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(m,null,{default:a(()=>[e(g,{label:i(s).formLabelName,name:"Name",variant:"outlined",modelValue:o.value.Name,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value.Name=n)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(m,null,{default:a(()=>[e(j,{label:i(s).formLabelDescription,name:"Description",variant:"outlined",multiline:"true",modelValue:o.value.Description,"onUpdate:modelValue":l[1]||(l[1]=n=>o.value.Description=n)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(m,null,{default:a(()=>[e(g,{label:i(s).formLabelDetailLink,name:"DetailLink",variant:"outlined",multiline:"true",modelValue:o.value.DetailLink,"onUpdate:modelValue":l[2]||(l[2]=n=>o.value.DetailLink=n)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(m,null,{default:a(()=>[e(g,{label:i(s).formLabelSlug,name:"Slug",variant:"outlined",multiline:"true",modelValue:o.value.Slug,"onUpdate:modelValue":l[3]||(l[3]=n=>o.value.Slug=n)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(m,null,{default:a(()=>[e(z,{label:i(s).formConventionVisible,name:"Visible",modelValue:o.value.Visible,"onUpdate:modelValue":l[4]||(l[4]=n=>o.value.Visible=n)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(u,null,{default:a(()=>[e(m,null,{default:a(()=>[e(h,{ref:"conventionImageForm",enctype:"multipart/form-data"},{default:a(()=>[e(O,{label:i(s).formLabelLogo,name:"Image",variant:"outlined",ref:"imageFileInput",accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp","hide-details":"",onChange:S},null,8,["label"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title","embed"]))}}),ue=H(J,[["__scopeId","data-v-163b878c"]]);export{ue as E};
