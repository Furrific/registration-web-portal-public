const u=t=>(typeof t=="string"&&(t=new Date(t)),`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`),S=t=>(typeof t=="string"&&(t=new Date(t)),`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`),c=(t,e={withDay:!0,withYear:!1,withTime:!1})=>{if(typeof t>"u")return"";typeof t=="string"&&(t=new Date(t));const a=t.toLocaleString("default",{weekday:"long",timeZone:"UTC"}),r=`${t.getDate()}${s(t.getDate())}`,n=t.toLocaleString("default",{month:"long",timeZone:"UTC"}),o=t.toLocaleString("default",{year:"numeric",timeZone:"UTC"}),i=String(t.getHours()).padStart(2,"0"),g=String(t.getMinutes()).padStart(2,"0");return`${e.withDay?a:""} ${r} ${n} ${e.withYear?o:""}${e.withTime?` ${i}:${g}`:""}`},s=t=>{if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};export{u as a,S as f,c as h};
