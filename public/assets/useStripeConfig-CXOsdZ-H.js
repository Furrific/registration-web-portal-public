import{P as s}from"./index-CBLLpUz9.js";const o="payment_processors_stripe",i=new Map,a=()=>({private_key:"",public_key:"",webhook_id:"",webhook_secret:"",support_email:"",payment_information_html:""}),c=async e=>{const r=s();try{const t=i.get(e);if(!t||t.timestamp<Date.now()-1e3*60*5)try{const n=await r.getConventionConfig(e,o);return i.set(e,{timestamp:Date.now(),value:n.Setting}),n.Setting}catch{return a()}return t.value}catch{return a()}},p=async(e,r)=>{try{await s().saveConventionConfig(e,o,r)}catch(t){console.error(t)}};function f(){return{getStripeConfig:c,saveStripeConfig:p,stripeConfigKey:o}}export{f as u};
