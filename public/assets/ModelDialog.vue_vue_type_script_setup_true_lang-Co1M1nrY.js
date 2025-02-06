import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang-BGhfBuO8.js";import{b as r}from"./forwardRefs-CcWh9j_v.js";import{e as $,c as R,d as g}from"./VCard-8SKc-RUn.js";import{V as L}from"./VContainer-DedLrPnz.js";import{a as T,V as F}from"./VToolbar-C-ZZL4Ql.js";import{V as S}from"./VGrid-CotsPpqa.js";import{i as D,L as k,M as q,q as n,v as l,n as a,f as s,N as V,X as i,x as f,y as h,D as M,A as u,G as C,a1 as N,a6 as z}from"./index-DyMutD2Y.js";import{V as U}from"./VSpacer-DYhkkHs4.js";import{V as G}from"./VDialog-DGwyOJ0n.js";const X={key:0,style:{"font-size":"0.8rem","line-height":"1rem",opacity:"0.8"}},E=D({__name:"EmbedModelDialog",props:k({color:{default:"primary"},emitDeleteEvent:{type:Boolean,default:!1},emitResetEvent:{type:Boolean,default:!1},emitSaveEvent:{type:Boolean,default:!1},title:{default:""},subTitle:{default:""},cardClass:{default:""},cardStyle:{default:""},showCloseAction:{type:Boolean,default:!1},showResetAction:{type:Boolean,default:!1},showDeleteAction:{type:Boolean,default:!1},showSaveAction:{type:Boolean,default:!1},saveButtonLabel:{default:"Save"},closeActionLabel:{default:"Close"},embed:{type:Boolean,default:!1}},{modelValue:{type:Boolean,required:!1},modelModifiers:{}}),emits:k(["close","delete","reset","save"],["update:modelValue"]),setup(t,{emit:A}){const d=A,c=q(t,"modelValue"),m=()=>{d("close"),t.embed||(c.value=!1)},v=({callback:e})=>{d("delete",e)},b=()=>{d("reset")},y=({callback:e})=>{d("save",e)};return(e,o)=>(a(),n($,null,{default:l(()=>[s(F,{color:e.color},V({default:l(()=>[s(T,null,{default:l(()=>[f(h(e.title)+" ",1),e.subTitle?(a(),M("p",X,h(e.subTitle),1)):u("",!0)]),_:1}),i(e.$slots,"toolbarButtons"),e.emitResetEvent?(a(),n(r,{key:0},{default:l(()=>[s(S,{"prepend-icon":"mdi:mdi-restore",onClick:b},{default:l(()=>o[0]||(o[0]=[C("template",{class:"d-none d-sm-inline"},[f("Reset")],-1)])),_:1})]),_:1})):u("",!0),e.emitDeleteEvent?(a(),n(r,{key:1},{default:l(()=>[s(B,{"prepend-icon":"mdi:mdi-delete",color:"white",onClick:v},{default:l(()=>o[1]||(o[1]=[C("template",{class:"d-none d-sm-inline"},[f("Delete")],-1)])),_:1})]),_:1})):u("",!0),e.emitSaveEvent?(a(),n(r,{key:2},{default:l(()=>[s(B,{"prepend-icon":"mdi:mdi-content-save-outline",color:"white",onClick:y},{default:l(()=>[f(h(e.saveButtonLabel),1)]),_:1})]),_:1})):u("",!0),e.embed?u("",!0):(a(),n(r,{key:3},{default:l(()=>[s(S,{icon:"mdi:mdi-window-close",onClick:m})]),_:1}))]),_:2},[e.$slots.extension?{name:"extension",fn:l(()=>[s(L,{fluid:!0},{default:l(()=>[i(e.$slots,"extension")]),_:3})]),key:"0"}:void 0]),1032,["color"]),s(R,{class:N(e.cardClass),style:z(e.cardStyle)},{default:l(()=>[i(e.$slots,"default")]),_:3},8,["class","style"]),e.$slots.actions||e.showCloseAction||e.showResetAction||e.showDeleteAction||e.showSaveAction?(a(),n(g,{key:0},{default:l(()=>[e.showCloseAction&&!e.embed?(a(),n(r,{key:0},{default:l(()=>[s(S,{color:"blue-darken-1",variant:"text",onClick:m},{default:l(()=>[f(h(e.closeActionLabel),1)]),_:1})]),_:1})):u("",!0),e.showResetAction?(a(),n(r,{key:1},{default:l(()=>[s(S,{color:"blue-darken-1",variant:"text",onClick:b},{default:l(()=>o[2]||(o[2]=[f(" Reset ")])),_:1})]),_:1})):u("",!0),e.showDeleteAction?(a(),n(r,{key:2},{default:l(()=>[s(B,{color:"red-darken-1",variant:"text",onClick:v},{default:l(()=>o[3]||(o[3]=[f(" Delete ")])),_:1})]),_:1})):u("",!0),e.showCloseAction||e.showDeleteAction||e.showResetAction?(a(),n(U,{key:3})):u("",!0),i(e.$slots,"actions"),e.showSaveAction?(a(),n(r,{key:4},{default:l(()=>[s(B,{color:"green-darken-1",variant:"text",onClick:y},{default:l(()=>[f(h(e.saveButtonLabel),1)]),_:1})]),_:1})):u("",!0)]),_:3})):u("",!0)]),_:3}))}}),Y=D({__name:"ModelDialog",props:k({color:{type:String,required:!1,default:"primary"},fullscreen:{type:Boolean,required:!1,default:!1},hideExtension:{type:Boolean,required:!1,default:!1},onDelete:{type:Function,required:!1,default:void 0},onReset:{type:Function,required:!1,default:void 0},onSave:{type:Function,required:!1,default:void 0},title:{type:String,required:!1,default:""},subtitle:{type:String,required:!1,default:""},cardClass:{type:String,required:!1,default:""},cardStyle:{type:String,required:!1,default:""},showCloseAction:{type:Boolean,required:!1,default:!1},showDeleteAction:{type:Boolean,required:!1,default:!1},showResetAction:{type:Boolean,required:!1,default:!1},showSaveAction:{type:Boolean,required:!1,default:!1},saveButtonLabel:{type:String,required:!1,default:"Save"},closeActionLabel:{type:String,required:!1,default:"Cancel"},persistent:{type:Boolean,required:!1,default:!1},retainFocus:{type:Boolean,required:!1,default:!0},scrollable:{type:Boolean,required:!1,default:!1},embed:{type:Boolean,required:!1,default:!1}},{modelValue:{type:Boolean,required:!1},modelModifiers:{}}),emits:k(["close","delete","reset","save"],["update:modelValue"]),setup(t,{emit:A}){const d=q(t,"modelValue"),c=A,m=()=>{c("close")},v=e=>{c("delete",e)},b=()=>{c("reset")},y=e=>{c("save",e)};return(e,o)=>t.embed?(a(),n(E,{key:0,modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=w=>d.value=w),color:t.color,fullscreen:t.fullscreen,"hide-extension":t.hideExtension,emitDeleteEvent:!!t.onDelete,emitResetEvent:!!t.onReset,emitSaveEvent:!!t.onSave,onClose:m,onDelete:v,onReset:b,onSave:y,title:t.title,"sub-title":t.subtitle,"card-class":t.cardClass,"card-style":t.cardStyle,"show-close-action":t.showCloseAction,"show-delete-action":t.showDeleteAction,"show-save-action":t.showSaveAction,"show-reset-action":t.showResetAction,"save-button-label":t.saveButtonLabel,"close-action-label":t.closeActionLabel,persistent:t.persistent,"retain-focus":t.retainFocus,scrollable:t.scrollable,embed:t.embed},V({default:l(()=>[i(e.$slots,"default")]),_:2},[e.$slots.toolbarButtons?{name:"toolbarButtons",fn:l(()=>[i(e.$slots,"toolbarButtons")]),key:"0"}:void 0,e.$slots.actions?{name:"actions",fn:l(()=>[i(e.$slots,"actions")]),key:"1"}:void 0,e.$slots.extension?{name:"extension",fn:l(()=>[i(e.$slots,"extension")]),key:"2"}:void 0]),1032,["modelValue","color","fullscreen","hide-extension","emitDeleteEvent","emitResetEvent","emitSaveEvent","title","sub-title","card-class","card-style","show-close-action","show-delete-action","show-save-action","show-reset-action","save-button-label","close-action-label","persistent","retain-focus","scrollable","embed"])):(a(),n(G,{key:1,modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=w=>d.value=w),scrollable:t.scrollable,"retain-focus":t.retainFocus,persistent:t.persistent,fullscreen:t.fullscreen},{default:l(()=>[s(E,{modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=w=>d.value=w),color:t.color,fullscreen:t.fullscreen,"hide-extension":t.hideExtension,emitDeleteEvent:!!t.onDelete,emitResetEvent:!!t.onReset,emitSaveEvent:!!t.onSave,onClose:m,onDelete:v,onReset:b,onSave:y,title:t.title,"sub-title":t.subtitle,"card-class":t.cardClass,"card-style":t.cardStyle,"show-close-action":t.showCloseAction,"show-delete-action":t.showDeleteAction,"show-save-action":t.showSaveAction,"show-reset-action":t.showResetAction,"save-button-label":t.saveButtonLabel,"close-action-label":t.closeActionLabel,persistent:t.persistent,"retain-focus":t.retainFocus,scrollable:t.scrollable,embed:t.embed},V({default:l(()=>[i(e.$slots,"default")]),_:2},[e.$slots.toolbarButtons?{name:"toolbarButtons",fn:l(()=>[i(e.$slots,"toolbarButtons")]),key:"0"}:void 0,e.$slots.actions?{name:"actions",fn:l(()=>[i(e.$slots,"actions")]),key:"1"}:void 0,e.$slots.extension?{name:"extension",fn:l(()=>[i(e.$slots,"extension")]),key:"2"}:void 0]),1032,["modelValue","color","fullscreen","hide-extension","emitDeleteEvent","emitResetEvent","emitSaveEvent","title","sub-title","card-class","card-style","show-close-action","show-delete-action","show-save-action","show-reset-action","save-button-label","close-action-label","persistent","retain-focus","scrollable","embed"])]),_:3},8,["modelValue","scrollable","retain-focus","persistent","fullscreen"]))}});export{Y as _};
