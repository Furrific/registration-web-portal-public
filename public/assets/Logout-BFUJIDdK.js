import{T as o,E as n,i as s,R as r,D as a,n as c}from"./index-Ch5xtL6l.js";import{R as m}from"./userData-DjbiriXK.js";const u=()=>{o.getInstance().removeTokensByService("GrazeAPI"),m(),n.getInstance().emit("logout")},g=s({__name:"Logout",setup(e){return u(),r().push("/"),(t,i)=>(c(),a("h1",null,"Logout..."))}});export{g as default};