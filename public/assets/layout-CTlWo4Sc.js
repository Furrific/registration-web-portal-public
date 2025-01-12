import{o as oe}from"./VContainer-DsKJp95U.js";import{p as Z,af as E,aL as ne,ax as k,a8 as D,s as X,aj as ae,ai as se,c as s,b as ue,r as le,b9 as $,J as R,o as ie,ba as re}from"./index-C2be9rQA.js";const M=Symbol.for("vuetify:layout"),q=Symbol.for("vuetify:layout-item"),U=1e3,ye=Z({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),pe=Z({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function me(){const u=E(M);if(!u)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:u.getLayoutItem,mainRect:u.mainRect,mainStyles:u.mainStyles}}function ge(u){const l=E(M);if(!l)throw new Error("[Vuetify] Could not find injected layout");const d=u.id??`layout-item-${ne()}`,r=k("useLayoutItem");D(q,{id:d});const n=X(!1);ae(()=>n.value=!0),se(()=>n.value=!1);const{layoutItemStyles:c,layoutItemScrimStyles:v}=l.register(r,{...u,active:s(()=>n.value?!1:u.active.value),id:d});return ue(()=>l.unregister(d)),{layoutItemStyles:c,layoutRect:l.layoutRect,layoutItemScrimStyles:v}}const ce=(u,l,d,r)=>{let n={top:0,left:0,right:0,bottom:0};const c=[{id:"",layer:{...n}}];for(const v of u){const m=l.get(v),g=d.get(v),z=r.get(v);if(!m||!g||!z)continue;const h={...n,[m.value]:parseInt(n[m.value],10)+(z.value?parseInt(g.value,10):0)};c.push({id:v,layer:h}),n=h}return c};function he(u){const l=E(M,null),d=s(()=>l?l.rootZIndex.value-100:U),r=le([]),n=$(new Map),c=$(new Map),v=$(new Map),m=$(new Map),g=$(new Map),{resizeRef:z,contentRect:h}=oe(),F=s(()=>{const t=new Map,i=u.overlaps??[];for(const e of i.filter(a=>a.includes(":"))){const[a,o]=e.split(":");if(!r.value.includes(a)||!r.value.includes(o))continue;const f=n.get(a),p=n.get(o),S=c.get(a),w=c.get(o);!f||!p||!S||!w||(t.set(o,{position:f.value,amount:parseInt(S.value,10)}),t.set(a,{position:p.value,amount:-parseInt(w.value,10)}))}return t}),b=s(()=>{const t=[...new Set([...v.values()].map(e=>e.value))].sort((e,a)=>e-a),i=[];for(const e of t){const a=r.value.filter(o=>{var f;return((f=v.get(o))==null?void 0:f.value)===e});i.push(...a)}return ce(i,n,c,m)}),j=s(()=>!Array.from(g.values()).some(t=>t.value)),I=s(()=>b.value[b.value.length-1].layer),J=s(()=>({"--v-layout-left":R(I.value.left),"--v-layout-right":R(I.value.right),"--v-layout-top":R(I.value.top),"--v-layout-bottom":R(I.value.bottom),...j.value?void 0:{transition:"none"}})),x=s(()=>b.value.slice(1).map((t,i)=>{let{id:e}=t;const{layer:a}=b.value[i],o=c.get(e),f=n.get(e);return{id:e,...a,size:Number(o.value),position:f.value}})),H=t=>x.value.find(i=>i.id===t),O=k("createLayout"),T=X(!1);ie(()=>{T.value=!0}),D(M,{register:(t,i)=>{let{id:e,order:a,position:o,layoutSize:f,elementSize:p,active:S,disableTransitions:w,absolute:_}=i;v.set(e,a),n.set(e,o),c.set(e,f),m.set(e,S),w&&g.set(e,w);const B=re(q,O==null?void 0:O.vnode).indexOf(t);B>-1?r.value.splice(B,0,e):r.value.push(e);const K=s(()=>x.value.findIndex(L=>L.id===e)),A=s(()=>d.value+b.value.length*2-K.value*2),G=s(()=>{const L=o.value==="left"||o.value==="right",C=o.value==="right",ee=o.value==="bottom",P=p.value??f.value,te=P===0?"%":"px",N={[o.value]:0,zIndex:A.value,transform:`translate${L?"X":"Y"}(${(S.value?0:-(P===0?100:P))*(C||ee?-1:1)}${te})`,position:_.value||d.value!==U?"absolute":"fixed",...j.value?void 0:{transition:"none"}};if(!T.value)return N;const y=x.value[K.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const V=F.value.get(e);return V&&(y[V.position]+=V.amount),{...N,height:L?`calc(100% - ${y.top}px - ${y.bottom}px)`:p.value?`${p.value}px`:void 0,left:C?void 0:`${y.left}px`,right:C?`${y.right}px`:void 0,top:o.value!=="bottom"?`${y.top}px`:void 0,bottom:o.value!=="top"?`${y.bottom}px`:void 0,width:L?p.value?`${p.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),Q=s(()=>({zIndex:A.value-1}));return{layoutItemStyles:G,layoutItemScrimStyles:Q,zIndex:A}},unregister:t=>{v.delete(t),n.delete(t),c.delete(t),m.delete(t),g.delete(t),r.value=r.value.filter(i=>i!==t)},mainRect:I,mainStyles:J,getLayoutItem:H,items:x,layoutRect:h,rootZIndex:d});const W=s(()=>["v-layout",{"v-layout--full-height":u.fullHeight}]),Y=s(()=>({zIndex:l?d.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:W,layoutStyles:Y,getLayoutItem:H,items:x,layoutRect:h,layoutRef:z}}export{M as V,ye as a,me as b,he as c,pe as m,ge as u};
