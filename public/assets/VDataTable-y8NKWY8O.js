import{at as ct,r as G,au as ft,p as C,ar as L,G as vt,d as j,u as H,ac as X,I as gt,H as mt,ak as ne,s as bt,a9 as de,c as I,av as Z,t as T,f as o,m as F,aw as Pe,V as Se,w as fe,a8 as q,ax as Be,af as K,a as ue,ay as ht,J as O,h as yt,az as pt,aA as xt,aB as Ae,aC as oe,aD as ae,aE as ee,ap as ve,F as W,x as we,aF as ie,z as ke,y as Pt,aG as te,a7 as St}from"./index-C2be9rQA.js";import{f as wt,a as kt,v as It,g as Vt,h as Dt,C as Tt,i as _t,x as Ft,o as Ct,u as U,V as M,D as Bt,E as At,j as Lt,L as $t,d as Ie}from"./VContainer-DsKJp95U.js";import{V as Le,a as Rt,u as Ot}from"./filter-Bz78l_1S.js";import{V as ge}from"./VCheckboxBtn-CGu7Yi9g.js";import{a as Nt}from"./VChip-CazsfLh8.js";import{m as Et,V as Ve}from"./VTable-BnBZ3hv-.js";import{V as Gt}from"./VDivider-CVpoQYAf.js";function De(e,l,a){return Object.keys(e).filter(t=>ct(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}function Mt(){const e=G([]);ft(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const Ht=C({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:L,default:"$first"},prevIcon:{type:L,default:"$prev"},nextIcon:{type:L,default:"$next"},lastIcon:{type:L,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...wt(),...kt(),...It(),...Vt(),...Dt(),...Tt(),..._t({tag:"nav"}),...vt(),...Ft({variant:"text"})},"VPagination"),Te=j()({name:"VPagination",props:Ht(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=H(e,"modelValue"),{t:r,n:u}=X(),{isRtl:s}=gt(),{themeClasses:c}=mt(e),{width:f}=ne(),g=bt(-1);de(void 0,{scoped:!0});const{resizeRef:y}=Ct(h=>{if(!h.length)return;const{target:i,contentRect:S}=h[0],w=i.querySelector(".v-pagination__list > *");if(!w)return;const V=S.width,_=w.offsetWidth+parseFloat(getComputedStyle(w).marginRight)*2;g.value=P(V,_)}),v=I(()=>parseInt(e.length,10)),x=I(()=>parseInt(e.start,10)),b=I(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):g.value>=0?g.value:P(f.value,58));function P(h,i){const S=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((h-i*S)/i).toFixed(2)))}const m=I(()=>{if(v.value<=0||isNaN(v.value)||v.value>Number.MAX_SAFE_INTEGER)return[];if(b.value<=0)return[];if(b.value===1)return[n.value];if(v.value<=b.value)return Z(v.value,x.value);const h=b.value%2===0,i=h?b.value/2:Math.floor(b.value/2),S=h?i:i+1,w=v.value-i;if(S-n.value>=0)return[...Z(Math.max(1,b.value-1),x.value),e.ellipsis,v.value];if(n.value-w>=(h?1:0)){const V=b.value-1,_=v.value-V+x.value;return[x.value,e.ellipsis,...Z(V,_)]}else{const V=Math.max(1,b.value-3),_=V===1?n.value:n.value-Math.ceil(V/2)+x.value;return[x.value,e.ellipsis,...Z(V,_),e.ellipsis,v.value]}});function p(h,i,S){h.preventDefault(),n.value=i,S&&t(S,i)}const{refs:d,updateRef:D}=Mt();de({VPaginationBtn:{color:T(e,"color"),border:T(e,"border"),density:T(e,"density"),size:T(e,"size"),variant:T(e,"variant"),rounded:T(e,"rounded"),elevation:T(e,"elevation")}});const B=I(()=>m.value.map((h,i)=>{const S=w=>D(w,i);if(typeof h=="string")return{isActive:!1,key:`ellipsis-${i}`,page:h,props:{ref:S,ellipsis:!0,icon:!0,disabled:!0}};{const w=h===n.value;return{isActive:w,key:h,page:u(h),props:{ref:S,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:w?e.activeColor:e.color,"aria-current":w,"aria-label":r(w?e.currentPageAriaLabel:e.pageAriaLabel,h),onClick:V=>p(V,h)}}}})),k=I(()=>{const h=!!e.disabled||n.value<=x.value,i=!!e.disabled||n.value>=x.value+v.value-1;return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:S=>p(S,x.value,"first"),disabled:h,"aria-label":r(e.firstAriaLabel),"aria-disabled":h}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:S=>p(S,n.value-1,"prev"),disabled:h,"aria-label":r(e.previousAriaLabel),"aria-disabled":h},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:S=>p(S,n.value+1,"next"),disabled:i,"aria-label":r(e.nextAriaLabel),"aria-disabled":i},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:S=>p(S,x.value+v.value-1,"last"),disabled:i,"aria-label":r(e.lastAriaLabel),"aria-disabled":i}:void 0}});function $(){var i;const h=n.value-x.value;(i=d.value[h])==null||i.$el.focus()}function N(h){h.key===Pe.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,Se($)):h.key===Pe.right&&!e.disabled&&n.value<x.value+v.value-1&&(n.value=n.value+1,Se($))}return U(()=>o(e.tag,{ref:y,class:["v-pagination",c.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:N,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(k.value.first):o(M,F({_as:"VPaginationBtn"},k.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(k.value.prev):o(M,F({_as:"VPaginationBtn"},k.value.prev),null)]),B.value.map((h,i)=>o("li",{key:h.key,class:["v-pagination__item",{"v-pagination__item--is-active":h.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(h):o(M,F({_as:"VPaginationBtn"},h.props),{default:()=>[h.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(k.value.next):o(M,F({_as:"VPaginationBtn"},k.value.next),null)]),e.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(k.value.last):o(M,F({_as:"VPaginationBtn"},k.value.last),null)])])]})),{}}}),jt=C({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),$e=Symbol.for("vuetify:data-table-pagination");function zt(e){const l=H(e,"page",void 0,t=>+(t??1)),a=H(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function Wt(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=I(()=>a.value===-1?0:a.value*(l.value-1)),r=I(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),u=I(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));fe([l,u],()=>{l.value>u.value&&(l.value=u.value)});function s(v){a.value=v,l.value=1}function c(){l.value=ue(l.value+1,1,u.value)}function f(){l.value=ue(l.value-1,1,u.value)}function g(v){l.value=ue(v,1,u.value)}const y={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:u,itemsLength:t,nextPage:c,prevPage:f,setPage:g,setItemsPerPage:s};return q($e,y),y}function qt(){const e=K($e);if(!e)throw new Error("Missing pagination!");return e}function Kt(e){const l=Be("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,u=I(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return fe(u,s=>{l.emit("update:currentItems",s)}),{paginatedItems:u}}const Re=C({prevIcon:{type:L,default:"$prev"},nextIcon:{type:L,default:"$next"},firstIcon:{type:L,default:"$first"},lastIcon:{type:L,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),_e=j()({name:"VDataTableFooter",props:Re(),setup(e,l){let{slots:a}=l;const{t}=X(),{page:n,pageCount:r,startIndex:u,stopIndex:s,itemsLength:c,itemsPerPage:f,setItemsPerPage:g}=qt(),y=I(()=>e.itemsPerPageOptions.map(v=>typeof v=="number"?{value:v,title:v===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(v)}:{...v,title:isNaN(Number(v.title))?t(v.title):v.title}));return U(()=>{var x;const v=Te.filterProps(e);return o("div",{class:"v-data-table-footer"},[(x=a.prepend)==null?void 0:x.call(a),o("div",{class:"v-data-table-footer__items-per-page"},[o("span",null,[t(e.itemsPerPageText)]),o(Le,{items:y.value,modelValue:f.value,"onUpdate:modelValue":b=>g(Number(b)),density:"compact",variant:"outlined","hide-details":!0},null)]),o("div",{class:"v-data-table-footer__info"},[o("div",null,[t(e.pageText,c.value?u.value+1:0,s.value,c.value)])]),o("div",{class:"v-data-table-footer__pagination"},[o(Te,F({modelValue:n.value,"onUpdate:modelValue":b=>n.value=b,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},v),null)])])}),{}}}),le=ht({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return o(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:O(e.height),width:O(e.width),maxWidth:O(e.maxWidth),left:O(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),Ut=C({headers:Array},"DataTable-header"),Oe=Symbol.for("vuetify:data-table-headers"),Ne={title:"",sortable:!1},Jt={...Ne,width:48};function Qt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function ce(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)ce(a,l);return l}function Ee(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&Ee(a.children,l);return l}function Xt(e){if(e.key){if(e.key==="data-table-group")return Ne;if(["data-table-expand","data-table-select"].includes(e.key))return Jt}}function me(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>me(a,l+1))):l}function Yt(e){let l=!1;function a(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(u&&(r.fixed=!0),r.fixed)if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s],!0);else l?isNaN(+r.width)&&xt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return u;if(r.children){r.fixedOffset=u;for(const s of r.children)u=t(s,u)}else r.fixed&&(r.fixedOffset=u,u+=parseFloat(r.width||"0")||0);return u}let n=0;for(const r of e)n=t(r,n)}function Zt(e,l){const a=[];let t=0;const n=Qt(e);for(;n.size()>0;){let u=n.count();const s=[];let c=1;for(;u>0;){const{element:f,priority:g}=n.dequeue(),y=l-t-me(f);if(s.push({...f,rowspan:y??1,colspan:f.children?ce(f).length:1}),f.children)for(const v of f.children){const x=g%1+c/Math.pow(10,t+2);n.enqueue(v,t+y+x)}c+=1,u-=1}t+=1,a.push(s)}return{columns:e.map(u=>ce(u)).flat(),headers:a}}function Ge(e){const l=[];for(const a of e){const t={...Xt(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,u={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?Ge(t.children):void 0};l.push(u)}return l}function ea(e,l){const a=G([]),t=G([]),n=G({}),r=G({}),u=G({});yt(()=>{var P,m,p;const f=(e.headers||Object.keys(e.items[0]??{}).map(d=>({key:d,title:pt(d)}))).slice(),g=Ee(f);(P=l==null?void 0:l.groupBy)!=null&&P.value.length&&!g.has("data-table-group")&&f.unshift({key:"data-table-group",title:"Group"}),(m=l==null?void 0:l.showSelect)!=null&&m.value&&!g.has("data-table-select")&&f.unshift({key:"data-table-select"}),(p=l==null?void 0:l.showExpand)!=null&&p.value&&!g.has("data-table-expand")&&f.push({key:"data-table-expand"});const y=Ge(f);Yt(y);const v=Math.max(...y.map(d=>me(d)))+1,x=Zt(y,v);a.value=x.headers,t.value=x.columns;const b=x.headers.flat(1);for(const d of b)d.key&&(d.sortable&&(d.sort&&(n.value[d.key]=d.sort),d.sortRaw&&(r.value[d.key]=d.sortRaw)),d.filter&&(u.value[d.key]=d.filter))});const s={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:u};return q(Oe,s),s}function re(){const e=K(Oe);if(!e)throw new Error("Missing headers!");return e}const ta={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Me={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Me.select({items:a,value:l,selected:t})}},He={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return He.select({items:a,value:l,selected:t})}},aa=C({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Ae}},"DataTable-select"),je=Symbol.for("vuetify:data-table-selection");function la(e,l){let{allItems:a,currentPage:t}=l;const n=H(e,"modelValue",e.modelValue,p=>new Set(oe(p).map(d=>{var D;return((D=a.value.find(B=>e.valueComparator(d,B.value)))==null?void 0:D.value)??d})),p=>[...p.values()]),r=I(()=>a.value.filter(p=>p.selectable)),u=I(()=>t.value.filter(p=>p.selectable)),s=I(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ta;case"all":return He;case"page":default:return Me}});function c(p){return oe(p).every(d=>n.value.has(d.value))}function f(p){return oe(p).some(d=>n.value.has(d.value))}function g(p,d){const D=s.value.select({items:p,value:d,selected:new Set(n.value)});n.value=D}function y(p){g([p],!c([p]))}function v(p){const d=s.value.selectAll({value:p,allItems:r.value,currentPage:u.value,selected:new Set(n.value)});n.value=d}const x=I(()=>n.value.size>0),b=I(()=>{const p=s.value.allSelected({allItems:r.value,currentPage:u.value});return!!p.length&&c(p)}),P=I(()=>s.value.showSelectAll),m={toggleSelect:y,select:g,selectAll:v,isSelected:c,isSomeSelected:f,someSelected:x,allSelected:b,showSelectAll:P};return q(je,m),m}function se(){const e=K(je);if(!e)throw new Error("Missing selection!");return e}const na=C({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),ze=Symbol.for("vuetify:data-table-sort");function ra(e){const l=H(e,"sortBy"),a=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function sa(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=c=>{if(c.key==null)return;let f=l.value.map(y=>({...y}))??[];const g=f.find(y=>y.key===c.key);g?g.order==="desc"?a.value?g.order="asc":f=f.filter(y=>y.key!==c.key):g.order="desc":t.value?f=[...f,{key:c.key,order:"asc"}]:f=[{key:c.key,order:"asc"}],l.value=f,n&&(n.value=1)};function u(c){return!!l.value.find(f=>f.key===c.key)}const s={sortBy:l,toggleSort:r,isSorted:u};return q(ze,s),s}function We(){const e=K(ze);if(!e)throw new Error("Missing sort!");return e}function ua(e,l,a,t){const n=X();return{sortedItems:I(()=>{var u,s;return a.value.length?oa(l.value,a.value,n.current.value,{transform:t==null?void 0:t.transform,sortFunctions:{...e.customKeySort,...(u=t==null?void 0:t.sortFunctions)==null?void 0:u.value},sortRawFunctions:(s=t==null?void 0:t.sortRawFunctions)==null?void 0:s.value}):l.value})}}function oa(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return e.map(u=>[u,t!=null&&t.transform?t.transform(u):u]).sort((u,s)=>{var c,f;for(let g=0;g<l.length;g++){let y=!1;const v=l[g].key,x=l[g].order??"asc";if(x===!1)continue;let b=ae(u[1],v),P=ae(s[1],v),m=u[0].raw,p=s[0].raw;if(x==="desc"&&([b,P]=[P,b],[m,p]=[p,m]),(c=t==null?void 0:t.sortRawFunctions)!=null&&c[v]){const d=t.sortRawFunctions[v](m,p);if(d==null)continue;if(y=!0,d)return d}if((f=t==null?void 0:t.sortFunctions)!=null&&f[v]){const d=t.sortFunctions[v](b,P);if(d==null)continue;if(y=!0,d)return d}if(!y){if(b instanceof Date&&P instanceof Date)return b.getTime()-P.getTime();if([b,P]=[b,P].map(d=>d!=null?d.toString().toLocaleLowerCase():d),b!==P)return ee(b)&&ee(P)?0:ee(b)?-1:ee(P)?1:!isNaN(b)&&!isNaN(P)?Number(b)-Number(P):n.compare(b,P)}}return 0}).map(u=>{let[s]=u;return s})}const qe=C({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:L,default:"$sortAsc"},sortDescIcon:{type:L,default:"$sortDesc"},headerProps:{type:Object},...ve(),...Bt()},"VDataTableHeaders"),Fe=j()({name:"VDataTableHeaders",props:qe(),setup(e,l){let{slots:a}=l;const{t}=X(),{toggleSort:n,sortBy:r,isSorted:u}=We(),{someSelected:s,allSelected:c,selectAll:f,showSelectAll:g}=se(),{columns:y,headers:v}=re(),{loaderClasses:x}=At(e);function b(h,i){if(!(!e.sticky&&!h.fixed))return{position:"sticky",left:h.fixed?O(h.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${i})`:void 0}}function P(h){const i=r.value.find(S=>S.key===h.key);return i?i.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:m,backgroundColorStyles:p}=Lt(e,"color"),{displayClasses:d,mobile:D}=ne(e),B=I(()=>({headers:v.value,columns:y.value,toggleSort:n,isSorted:u,sortBy:r.value,someSelected:s.value,allSelected:c.value,selectAll:f,getSortIcon:P})),k=I(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},d.value,x.value]),$=h=>{let{column:i,x:S,y:w}=h;const V=i.key==="data-table-select"||i.key==="data-table-expand",_=F(e.headerProps??{},i.headerProps??{});return o(le,F({tag:"th",align:i.align,class:[{"v-data-table__th--sortable":i.sortable&&!e.disableSort,"v-data-table__th--sorted":u(i),"v-data-table__th--fixed":i.fixed},...k.value],style:{width:O(i.width),minWidth:O(i.minWidth),maxWidth:O(i.maxWidth),...b(i,w)},colspan:i.colspan,rowspan:i.rowspan,onClick:i.sortable?()=>n(i):void 0,fixed:i.fixed,nowrap:i.nowrap,lastFixed:i.lastFixed,noPadding:V},_),{default:()=>{var z;const E=`header.${i.key}`,Y={column:i,selectAll:f,isSorted:u,toggleSort:n,sortBy:r.value,someSelected:s.value,allSelected:c.value,getSortIcon:P};return a[E]?a[E](Y):i.key==="data-table-select"?((z=a["header.data-table-select"])==null?void 0:z.call(a,Y))??(g.value&&o(ge,{modelValue:c.value,indeterminate:s.value&&!c.value,"onUpdate:modelValue":f},null)):o("div",{class:"v-data-table-header__content"},[o("span",null,[i.title]),i.sortable&&!e.disableSort&&o(Ie,{key:"icon",class:"v-data-table-header__sort-icon",icon:P(i)},null),e.multiSort&&u(i)&&o("div",{key:"badge",class:["v-data-table-header__sort-badge",...m.value],style:p.value},[r.value.findIndex(J=>J.key===i.key)+1])])}})},N=()=>{const h=F(e.headerProps??{}??{}),i=I(()=>y.value.filter(w=>(w==null?void 0:w.sortable)&&!e.disableSort)),S=I(()=>{if(y.value.find(V=>V.key==="data-table-select")!=null)return c.value?"$checkboxOn":s.value?"$checkboxIndeterminate":"$checkboxOff"});return o(le,F({tag:"th",class:[...k.value],colspan:v.value.length+1},h),{default:()=>[o("div",{class:"v-data-table-header__content"},[o(Le,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:i.value,label:t("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:S.value,"onClick:append":()=>f(!c.value)},{...a,chip:w=>{var V;return o(Nt,{onClick:(V=w.item.raw)!=null&&V.sortable?()=>n(w.item.raw):void 0,onMousedown:_=>{_.preventDefault(),_.stopPropagation()}},{default:()=>[w.item.title,o(Ie,{class:["v-data-table__td-sort-icon",u(w.item.raw)&&"v-data-table__td-sort-icon-active"],icon:P(w.item.raw),size:"small"},null)]})}})])]})};U(()=>D.value?o("tr",null,[o(N,null,null)]):o(W,null,[a.headers?a.headers(B.value):v.value.map((h,i)=>o("tr",null,[h.map((S,w)=>o($,{column:S,x:w,y:i},null))])),e.loading&&o("tr",{class:"v-data-table-progress"},[o("th",{colspan:y.value.length},[o($t,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),ia=C({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Ke=Symbol.for("vuetify:data-table-group");function da(e){return{groupBy:H(e,"groupBy")}}function ca(e){const{disableSort:l,groupBy:a,sortBy:t}=e,n=G(new Set),r=I(()=>a.value.map(g=>({...g,order:g.order??!1})).concat(l!=null&&l.value?[]:t.value));function u(g){return n.value.has(g.id)}function s(g){const y=new Set(n.value);u(g)?y.delete(g.id):y.add(g.id),n.value=y}function c(g){function y(v){const x=[];for(const b of v.items)"type"in b&&b.type==="group"?x.push(...y(b)):x.push(b);return x}return y({type:"group",items:g,id:"dummy",key:"dummy",value:"dummy",depth:0})}const f={sortByWithGroups:r,toggleGroup:s,opened:n,groupBy:a,extractRows:c,isGroupOpen:u};return q(Ke,f),f}function Ue(){const e=K(Ke);if(!e)throw new Error("Missing group!");return e}function fa(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=ae(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function Je(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=fa(e,l[0]),r=[],u=l.slice(1);return n.forEach((s,c)=>{const f=l[0],g=`${t}_${f}_${c}`;r.push({depth:a,id:g,key:f,value:c,items:u.length?Je(s,u,a+1,g):s,type:"group"})}),r}function Qe(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...Qe(t.items,l))):a.push(t);return a}function va(e,l,a){return{flatItems:I(()=>{if(!l.value.length)return e.value;const n=Je(e.value,l.value.map(r=>r.key));return Qe(n,a.value)})}}const ga=C({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ma=j()({name:"VDataTableGroupHeaderRow",props:ga(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=Ue(),{isSelected:u,isSomeSelected:s,select:c}=se(),{columns:f}=re(),g=I(()=>r([e.item]));return()=>o("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[f.value.map(y=>{var v,x;if(y.key==="data-table-group"){const b=t(e.item)?"$expand":"$next",P=()=>n(e.item);return((v=a["data-table-group"])==null?void 0:v.call(a,{item:e.item,count:g.value.length,props:{icon:b,onClick:P}}))??o(le,{class:"v-data-table-group-header-row__column"},{default:()=>[o(M,{size:"small",variant:"text",icon:b,onClick:P},null),o("span",null,[e.item.value]),o("span",null,[we("("),g.value.length,we(")")])]})}if(y.key==="data-table-select"){const b=u(g.value),P=s(g.value)&&!b,m=p=>c(g.value,p);return((x=a["data-table-select"])==null?void 0:x.call(a,{props:{modelValue:b,indeterminate:P,"onUpdate:modelValue":m}}))??o("td",null,[o(ge,{modelValue:b,indeterminate:P,"onUpdate:modelValue":m},null)])}return o("td",null,null)})])}}),ba=C({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Xe=Symbol.for("vuetify:datatable:expanded");function ha(e){const l=T(e,"expandOnClick"),a=H(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function t(s,c){const f=new Set(a.value);c?f.add(s.value):f.delete(s.value),a.value=f}function n(s){return a.value.has(s.value)}function r(s){t(s,!n(s))}const u={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return q(Xe,u),u}function Ye(){const e=K(Xe);if(!e)throw new Error("foo");return e}const ya=C({index:Number,item:Object,cellProps:[Object,Function],onClick:ie(),onContextmenu:ie(),onDblclick:ie(),...ve()},"VDataTableRow"),pa=j()({name:"VDataTableRow",props:ya(),setup(e,l){let{slots:a}=l;const{displayClasses:t,mobile:n}=ne(e,"v-data-table__tr"),{isSelected:r,toggleSelect:u,someSelected:s,allSelected:c,selectAll:f}=se(),{isExpanded:g,toggleExpand:y}=Ye(),{toggleSort:v,sortBy:x,isSorted:b}=We(),{columns:P}=re();U(()=>o("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},t.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&P.value.map((m,p)=>{const d=e.item,D=`item.${m.key}`,B=`header.${m.key}`,k={index:e.index,item:d.raw,internalItem:d,value:ae(d.columns,m.key),column:m,isSelected:r,toggleSelect:u,isExpanded:g,toggleExpand:y},$={column:m,selectAll:f,isSorted:b,toggleSort:v,sortBy:x.value,someSelected:s.value,allSelected:c.value,getSortIcon:()=>""},N=typeof e.cellProps=="function"?e.cellProps({index:k.index,item:k.item,internalItem:k.internalItem,value:k.value,column:m}):e.cellProps,h=typeof m.cellProps=="function"?m.cellProps({index:k.index,item:k.item,internalItem:k.internalItem,value:k.value}):m.cellProps;return o(le,F({align:m.align,class:{"v-data-table__td--expanded-row":m.key==="data-table-expand","v-data-table__td--select-row":m.key==="data-table-select"},fixed:m.fixed,fixedOffset:m.fixedOffset,lastFixed:m.lastFixed,maxWidth:n.value?void 0:m.maxWidth,noPadding:m.key==="data-table-select"||m.key==="data-table-expand",nowrap:m.nowrap,width:n.value?void 0:m.width},N,h),{default:()=>{var S,w,V,_,E;if(a[D]&&!n.value)return(S=a[D])==null?void 0:S.call(a,k);if(m.key==="data-table-select")return((w=a["item.data-table-select"])==null?void 0:w.call(a,k))??o(ge,{disabled:!d.selectable,modelValue:r([d]),onClick:ke(()=>u(d),["stop"])},null);if(m.key==="data-table-expand")return((V=a["item.data-table-expand"])==null?void 0:V.call(a,k))??o(M,{icon:g(d)?"$collapse":"$expand",size:"small",variant:"text",onClick:ke(()=>y(d),["stop"])},null);const i=Pt(k.value);return n.value?o(W,null,[o("div",{class:"v-data-table__td-title"},[((_=a[B])==null?void 0:_.call(a,$))??m.title]),o("div",{class:"v-data-table__td-value"},[((E=a[D])==null?void 0:E.call(a,k))??i])]):i}})})]))}}),Ze=C({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...ve()},"VDataTableRows"),Ce=j()({name:"VDataTableRows",inheritAttrs:!1,props:Ze(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=re(),{expandOnClick:r,toggleExpand:u,isExpanded:s}=Ye(),{isSelected:c,toggleSelect:f}=se(),{toggleGroup:g,isGroupOpen:y}=Ue(),{t:v}=X(),{mobile:x}=ne(e);return U(()=>{var b,P;return e.loading&&(!e.items.length||t.loading)?o("tr",{class:"v-data-table-rows-loading",key:"loading"},[o("td",{colspan:n.value.length},[((b=t.loading)==null?void 0:b.call(t))??v(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?o("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[o("td",{colspan:n.value.length},[((P=t["no-data"])==null?void 0:P.call(t))??v(e.noDataText)])]):o(W,null,[e.items.map((m,p)=>{var B;if(m.type==="group"){const k={index:p,item:m,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:c,toggleSelect:f,toggleGroup:g,isGroupOpen:y};return t["group-header"]?t["group-header"](k):o(ma,F({key:`group-header_${m.id}`,item:m},De(a,":group-header",()=>k)),t)}const d={index:p,item:m.raw,internalItem:m,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:c,toggleSelect:f},D={...d,props:F({key:`item_${m.key??m.index}`,onClick:r.value?()=>{u(m)}:void 0,index:p,item:m,cellProps:e.cellProps,mobile:x.value},De(a,":row",()=>d),typeof e.rowProps=="function"?e.rowProps({item:d.item,index:d.index,internalItem:d.internalItem}):e.rowProps)};return o(W,{key:D.props.key},[t.item?t.item(D):o(pa,D.props,t),s(m)&&((B=t["expanded-row"])==null?void 0:B.call(t,d))])})])}),{}}}),xa=C({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Pa(e,l,a,t){const n=e.returnObject?l:te(l,e.itemValue),r=te(l,e.itemSelectable,!0),u=t.reduce((s,c)=>(c.key!=null&&(s[c.key]=te(l,c.value)),s),{});return{type:"item",key:e.returnObject?te(l,e.itemValue):n,index:a,value:n,selectable:r,columns:u,raw:l}}function Sa(e,l,a){return l.map((t,n)=>Pa(e,t,n,a))}function wa(e,l){return{items:I(()=>Sa(e,e.items,l.value))}}function ka(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const u=Be("VDataTable"),s=I(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let c=null;fe(s,()=>{Ae(c,s.value)||(c&&c.search!==s.value.search&&(l.value=1),u.emit("update:options",s.value),c=s.value)},{deep:!0,immediate:!0})}const Ia=C({...Ze(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...ba(),...ia(),...Ut(),...xa(),...aa(),...na(),...qe(),...Et()},"DataTable"),Va=C({...jt(),...Ia(),...Rt(),...Re()},"VDataTable"),La=j()({name:"VDataTable",props:Va(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=da(e),{sortBy:r,multiSort:u,mustSort:s}=ra(e),{page:c,itemsPerPage:f}=zt(e),{disableSort:g}=St(e),{columns:y,headers:v,sortFunctions:x,sortRawFunctions:b,filterFunctions:P}=ea(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:m}=wa(e,y),p=T(e,"search"),{filteredItems:d}=Ot(e,m,p,{transform:R=>R.columns,customKeyFilter:P}),{toggleSort:D}=sa({sortBy:r,multiSort:u,mustSort:s,page:c}),{sortByWithGroups:B,opened:k,extractRows:$,isGroupOpen:N,toggleGroup:h}=ca({groupBy:n,sortBy:r,disableSort:g}),{sortedItems:i}=ua(e,d,B,{transform:R=>({...R.raw,...R.columns}),sortFunctions:x,sortRawFunctions:b}),{flatItems:S}=va(i,n,k),w=I(()=>S.value.length),{startIndex:V,stopIndex:_,pageCount:E,setItemsPerPage:Y}=Wt({page:c,itemsPerPage:f,itemsLength:w}),{paginatedItems:z}=Kt({items:S,startIndex:V,stopIndex:_,itemsPerPage:f}),J=I(()=>$(z.value)),{isSelected:et,select:tt,selectAll:at,toggleSelect:lt,someSelected:nt,allSelected:rt}=la(e,{allItems:m,currentPage:J}),{isExpanded:st,toggleExpand:ut}=ha(e);ka({page:c,itemsPerPage:f,sortBy:r,groupBy:n,search:p}),de({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const A=I(()=>({page:c.value,itemsPerPage:f.value,sortBy:r.value,pageCount:E.value,toggleSort:D,setItemsPerPage:Y,someSelected:nt.value,allSelected:rt.value,isSelected:et,select:tt,selectAll:at,toggleSelect:lt,isExpanded:st,toggleExpand:ut,isGroupOpen:N,toggleGroup:h,items:J.value.map(R=>R.raw),internalItems:J.value,groupedItems:z.value,columns:y.value,headers:v.value}));return U(()=>{const R=_e.filterProps(e),ot=Fe.filterProps(e),it=Ce.filterProps(e),dt=Ve.filterProps(e);return o(Ve,F({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},dt),{top:()=>{var Q;return(Q=t.top)==null?void 0:Q.call(t,A.value)},default:()=>{var Q,be,he,ye,pe,xe;return t.default?t.default(A.value):o(W,null,[(Q=t.colgroup)==null?void 0:Q.call(t,A.value),!e.hideDefaultHeader&&o("thead",{key:"thead"},[o(Fe,ot,t)]),(be=t.thead)==null?void 0:be.call(t,A.value),!e.hideDefaultBody&&o("tbody",null,[(he=t["body.prepend"])==null?void 0:he.call(t,A.value),t.body?t.body(A.value):o(Ce,F(a,it,{items:z.value}),t),(ye=t["body.append"])==null?void 0:ye.call(t,A.value)]),(pe=t.tbody)==null?void 0:pe.call(t,A.value),(xe=t.tfoot)==null?void 0:xe.call(t,A.value)])},bottom:()=>t.bottom?t.bottom(A.value):!e.hideDefaultFooter&&o(W,null,[o(Gt,null,null),o(_e,R,{prepend:t["footer.prepend"]})])})}),{}}});export{La as V,Te as a,Ia as b,Re as c,da as d,ra as e,zt as f,ea as g,ca as h,Wt as i,va as j,la as k,ha as l,jt as m,ka as n,_e as o,sa as p,Fe as q,Ce as r,ia as s,ua as t,wa as u,pa as v};
