import{P as d}from"./index-CBLLpUz9.js";let t,n;const l=d(),f=()=>{localStorage.removeItem("user"),t=void 0},o=e=>{const s={User:e,UpdatedAt:new Date().getTime()};localStorage.setItem("user",JSON.stringify(s)),t?(t.Additional=e.Additional,t.Credentials=e.Credentials,t.Data=e.Data,t.DisplayName=e.DisplayName,t.Groups=e.Groups,t.Handle=e.Handle,t.Tags=e.Tags):t=e,n=s.UpdatedAt},i=()=>{if(t&&n)return n<Date.now()-60*1e3&&c().then(()=>{}).catch(()=>{}),t;try{const e=JSON.parse(localStorage.getItem("user")||"");if(typeof e=="object")return t=e.User,n=e.UpdatedAt,t}catch{}},u=e=>{const s=i();if(s){if(!s.Groups)s.Groups=[e];else{const a=s.Groups.findIndex(r=>r.GroupUUID===e.GroupUUID);a>=0?s.Groups[a]=e:s.Groups.push(e)}o(s)}},c=()=>new Promise((e,s)=>{l.whoAmI().then(a=>{if(a){o(a);const r=i();r?e(r):s()}else s()}).catch(()=>{s()})});export{u as A,i as G,f as R,o as S,c as a};
