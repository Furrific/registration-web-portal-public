import{a as i}from"./VContainer-3o5ltKUa.js";import{d as l,az as s,bi as g,a4 as c}from"./index-DEwWpWLI.js";function d(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",m=arguments.length>2?arguments[2]:void 0;return l()({name:m??s(g(a.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...i()},setup(e,u){let{slots:t}=u;return()=>{var n;return c(e.tag,{class:[a,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}})}export{d as c};