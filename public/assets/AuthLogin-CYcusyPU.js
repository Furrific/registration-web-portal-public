import{i as f,r as h,D as g,G as r,y as d,az as A,H as D,R as E,B,Q as L,n as R}from"./index-BRPHBt69.js";import{G as _}from"./userData-BcAt6zh6.js";import{S as k}from"./setupLogin-OsOkDgvT.js";import{E as v}from"./emailFormVariant-DbFKH7n9.js";const N=f({__name:"AuthLogin",props:{variant:{default:()=>v.COMBINED}},setup(n){const u=E(),a=h(u.params.method),i=B(),t=new URL(location.href),s=L(),c=t.searchParams.get("code")||"",m=t.searchParams.get("token")||"",l=t.searchParams.get("state")||"";return i.oAuthLogin(a.value,c,m,l).then(({created:o,tokens:e,user:p})=>{k(e,p,s,o)}),_()&&n.variant!=="ADD_CREDENTIAL"&&s.push("/"),(o,e)=>(R(),g(D,null,[r("p",null,d(A(a.value)),1),e[0]||(e[0]=r("p",null,"Authorising...",-1))],64))}});export{N as default};
