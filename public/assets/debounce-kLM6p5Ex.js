import{m as Z,b as $,c as ee,d as ae,e as te,f as oe,g as le,u as re,p as se,h as ue,i as de,j as ne,k as ie,l as ce,n as me,o as B,q as I,r as k}from"./VDataTable-ufy79kmN.js";import{p as ve,d as ge,a7 as pe,c as b,t as r,a8 as be,a9 as fe,f as o,H as R,m as f}from"./index-BRPHBt69.js";import{V as F}from"./VTable-CIbFxTz5.js";import{V as Pe}from"./VDivider-BFC5a0N8.js";import{u as ye}from"./VContainer-zOtn4Jz4.js";const he=ve({itemsLength:{type:[Number,String],required:!0},...Z(),...$(),...ee()},"VDataTableServer"),we=ge()({name:"VDataTableServer",props:he(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,c){let{attrs:d,slots:a}=c;const{groupBy:l}=ae(e),{sortBy:s,multiSort:m,mustSort:v}=te(e),{page:n,itemsPerPage:g}=oe(e),{disableSort:G}=pe(e),H=b(()=>parseInt(e.itemsLength,10)),{columns:P,headers:E}=le(e,{groupBy:l,showSelect:r(e,"showSelect"),showExpand:r(e,"showExpand")}),{items:i}=re(e,P),{toggleSort:y}=se({sortBy:s,multiSort:m,mustSort:v,page:n}),{opened:N,isGroupOpen:_,toggleGroup:C,extractRows:L}=ue({groupBy:l,sortBy:s,disableSort:G}),{pageCount:q,setItemsPerPage:O}=de({page:n,itemsPerPage:g,itemsLength:H}),{flatItems:h}=ne(i,l,N),{isSelected:j,select:A,selectAll:W,toggleSelect:z,someSelected:J,allSelected:K}=ie(e,{allItems:i,currentPage:i}),{isExpanded:M,toggleExpand:Q}=ce(e),D=b(()=>L(i.value));me({page:n,itemsPerPage:g,sortBy:s,groupBy:l,search:r(e,"search")}),be("v-data-table",{toggleSort:y,sortBy:s}),fe({VDataTableRows:{hideNoData:r(e,"hideNoData"),noDataText:r(e,"noDataText"),loading:r(e,"loading"),loadingText:r(e,"loadingText")}});const t=b(()=>({page:n.value,itemsPerPage:g.value,sortBy:s.value,pageCount:q.value,toggleSort:y,setItemsPerPage:O,someSelected:J.value,allSelected:K.value,isSelected:j,select:A,selectAll:W,toggleSelect:z,isExpanded:M,toggleExpand:Q,isGroupOpen:_,toggleGroup:C,items:D.value.map(p=>p.raw),internalItems:D.value,groupedItems:h.value,columns:P.value,headers:E.value}));ye(()=>{const p=B.filterProps(e),U=I.filterProps(e),X=k.filterProps(e),Y=F.filterProps(e);return o(F,f({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},Y),{top:()=>{var u;return(u=a.top)==null?void 0:u.call(a,t.value)},default:()=>{var u,T,S,x,V,w;return a.default?a.default(t.value):o(R,null,[(u=a.colgroup)==null?void 0:u.call(a,t.value),!e.hideDefaultHeader&&o("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[o(I,f(U,{sticky:e.fixedHeader}),a)]),(T=a.thead)==null?void 0:T.call(a,t.value),!e.hideDefaultBody&&o("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(S=a["body.prepend"])==null?void 0:S.call(a,t.value),a.body?a.body(t.value):o(k,f(d,X,{items:h.value}),a),(x=a["body.append"])==null?void 0:x.call(a,t.value)]),(V=a.tbody)==null?void 0:V.call(a,t.value),(w=a.tfoot)==null?void 0:w.call(a,t.value)])},bottom:()=>a.bottom?a.bottom(t.value):!e.hideDefaultFooter&&o(R,null,[o(Pe,null,null),o(B,p,{prepend:a["footer.prepend"]})])})})}}),Be=(e,c=500,d=!1)=>{let a;return(...l)=>{const m=function(){a=void 0,d||e.apply(void 0,l)},v=d&&!a;clearTimeout(a),a=setTimeout(m,c),v&&e.apply(void 0,l)}};export{we as V,Be as u};
