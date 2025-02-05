import{p,d as ee,u as te,c as y,r as v,s as ae,h as ne,o as le,w as m,b as oe,aP as ue,f as l,m as k,H as R,a7 as _,ah as ie,b1 as re,W as S,b2 as se,K as ce,a as de}from"./index-CcX3oOgl.js";import{m as fe,d as ve,u as me,a as G,f as xe,e as ge,g as he}from"./VTextField-DZF3AdeZ.js";import{I as we,f as Ve}from"./forwardRefs-qlPhaDnG.js";import{u as ye}from"./VBtn-C2ccAPPX.js";const Fe=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...fe(),...ve()},"VTextarea"),ke=ee()({name:"VTextarea",directives:{Intersect:we},inheritAttrs:!1,props:Fe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:F,emit:H,slots:i}=D;const o=te(e,"modelValue"),{isFocused:f,focus:E,blur:U}=me(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const M=v(),x=v(),B=ae(""),g=v(),K=y(()=>e.persistentPlaceholder||f.value||e.active);function P(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function W(t){P(),H("click:control",t)}function q(t){H("mousedown:control",t)}function J(t){t.stopPropagation(),P(),S(()=>{o.value="",se(e["onClick:clear"],t)})}function L(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),C=y(()=>["plain","underlined"].includes(e.variant));ne(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),I=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),b=parseFloat(e.maxRows)*w+a||1/0,s=de(u??0,I,b);h.value=Math.floor((s-a)/w),B.value=ce(s)})}le(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),oe(()=>{r==null||r.disconnect()}),ye(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=ue(F),{modelValue:w,...I}=G.filterProps(e),b=xe(e);return l(G,k({ref:M,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":C.value},e.class],style:e.style},a,I,{centerAffix:h.value===1&&!C.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:N,isDirty:z,isReadonly:Q,isValid:X}=s;return l(ge,k({ref:x,style:{"--v-textarea-control-height":B.value},onClick:W,onMousedown:q,"onClick:clear":J,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},b,{id:V.value,active:K.value||z.value,centerAffix:h.value===1&&!C.value,dirty:z.value||e.dirty,disabled:N.value,focused:f.value,error:X.value===!1}),{...i,default:Y=>{let{props:{class:A,...T}}=Y;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),_(l("textarea",k({ref:g,class:A,value:o.value,onInput:L,autofocus:e.autofocus,readonly:Q.value,disabled:N.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:P,onBlur:U},T,u),null),[[ie("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&_(l("textarea",{class:[A,"v-textarea__sizer"],id:`${T.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[re,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(R,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(R,null,[l("span",null,null),l(he,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},i.counter)])])}:void 0})}),Ve({},M,x,g)}});export{ke as V};
