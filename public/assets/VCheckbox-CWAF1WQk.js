import{g as A,b as t}from"./VSelect-u9urapHN.js";import{m as F,u as I,a as l}from"./VTextField-DJuJ3wdj.js";import{p as B,ad as U,d as R,u as D,aO as M,c as N,aP as O,f as u,m as r}from"./index-DyMutD2Y.js";import{u as $}from"./VGrid-CotsPpqa.js";const j=B({...F(),...U(A(),["inline"])},"VCheckbox"),G=R()({name:"VCheckbox",inheritAttrs:!1,props:j(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:c,slots:a}=d;const s=D(e,"modelValue"),{isFocused:n,focus:i,blur:m}=I(e),p=M(),V=N(()=>e.id||`checkbox-${p}`);return $(()=>{const[b,f]=O(c),v=l.filterProps(e),k=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},b,v,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:V.value,focused:n.value,style:e.style}),{...a,default:o=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=o;return u(t,r(k,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},f,{error:y.value===!1,modelValue:s.value,"onUpdate:modelValue":g=>s.value=g,onFocus:i,onBlur:m}),a)}})}),{}}});export{G as V};
