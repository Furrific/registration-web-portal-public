import{P as u}from"./permission-Ba-8wP-4.js";import{T as i}from"./targetType-BYfQr9gB.js";import{P as l}from"./index-DjVAorxC.js";const P=1e3*60,E=new Map;function N(){const o=l(),r=async n=>{let e=E.get(n);if(!e||e.timestamp<Date.now()-P){const{Conventions:O,Organisations:t}=await o.getPermissionAccessList(n);e={conventions:O,organisations:t,timestamp:Date.now()},E.set(n,e)}const s=e.conventions,T=e.organisations;return{Conventions:s,Organisations:T}};return{getConventionsWithPermission:async n=>{const{Conventions:e}=await r(n);return e},getOrganisationsWithPermission:async n=>{const{Organisations:e}=await r(n);return e}}}const _=1e3*30,a={templates:[],timestamp:0};function A(){const o=l(),{getConventionsWithPermission:r}=N();return{getEmailTemplateList:async(c,n,e)=>{let s=a.templates;a.timestamp<Date.now()-_&&(s=await o.getEmailTemplates(),a.templates=s,a.timestamp=Date.now());const T=await r(u.PERMISSION_TYPE_EDIT_CONVENTION);return(()=>{switch(c){case i.TARGET_TYPE_SYSTEM:return s.filter(t=>t.OwnerType===i.TARGET_TYPE_SYSTEM);case i.TARGET_TYPE_ORGANISATION:return n?s.filter(t=>t.OwnerType===i.TARGET_TYPE_ORGANISATION&&t.OwnerUUID===n):s.filter(t=>t.OwnerType===i.TARGET_TYPE_ORGANISATION);case i.TARGET_TYPE_CONVENTION:return e?s.filter(t=>t.OwnerType===i.TARGET_TYPE_CONVENTION&&t.OwnerUUID===e):n?s.filter(t=>t.OwnerType===i.TARGET_TYPE_CONVENTION&&!!T.find(m=>m.OrganisationUUID===n)):s.filter(t=>t.OwnerType===i.TARGET_TYPE_CONVENTION)}return[]})().sort((t,m)=>t.Title.localeCompare(m.Title))}}}export{A as u};
