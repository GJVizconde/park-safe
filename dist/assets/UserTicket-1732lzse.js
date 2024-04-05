import{_ as m}from"./ParkSafeLayout.vue_vue_type_script_setup_true_lang-CJwUG999.js";import{a as h}from"./axios-Cm0UX6qg.js";import{d as b,r as l,b as k,w as f,c as o,e as B,a as t,u as _,F as p,f as v,i as x,o as a,t as c}from"./index-CzGRbwFy.js";const y={class:"flex flex-col gap-8 items-center justify-center mt-7 px-11"},w={key:0},N=t("p",{class:"bg-ticketBg font-bold"},"Cliente:",-1),S={class:"bg-ticketBg"},E=t("p",{class:"bg-ticketBg font-bold"},"Empleado:",-1),U={class:"bg-ticketBg"},D=t("p",{class:"bg-ticketBg font-bold"},"Vehiculo:",-1),F={class:"bg-ticketBg"},P=t("p",{class:"bg-ticketBg font-bold"},"Puesto:",-1),T={class:"bg-ticketBg"},V=t("p",{class:"bg-ticketBg font-bold"},"Fecha:",-1),$={class:"bg-ticketBg"},j={key:1,class:"text-white text-2xl mt-20 uppercase"},A=b({__name:"UserTicket",setup(C){const g=l("https://park-safe-api.onrender.com/api");x();let r=l([{name:"",collaborator:"",vehicle_id:"",place:"",current_date:""}]);const n=l({name:"",id:"",email:"",role:"",token:""}),d=async s=>{var i;try{const e=(await h.get(`${g.value}/ticket/userTicket?id=${s}`)).data;console.log(e),r.value=[{name:e.user.name,collaborator:(i=e==null?void 0:e.collaborators[0])==null?void 0:i.name,vehicle_id:e.vehicle.licensePlate,place:e.parkingPlace,current_date:e.checkIn}]}catch(e){console.error("Error al obtener el ticket:",e)}};return k(async()=>{const s=localStorage.getItem("userSession");n.value=s?JSON.parse(s):{name:"",id:"",email:"",role:"",token:""},console.log("User session:",n.value),await d(Number(n.value.id))}),f(n.value,async s=>{await d(Number(s.id))},{deep:!0}),(s,i)=>(a(),o(p,null,[B(m,{title:"User Ticket"}),t("section",y,[_(r)[0].name!==""?(a(),o("div",w,[(a(!0),o(p,null,v(_(r),(e,u)=>(a(),o("div",{class:"grid grid-cols-2 gap-y-5 bg-ticketBg w-full p-7 rounded-2xl items-center justify-center",key:u},[N,t("p",S,c(e.name),1),E,t("p",U,c(e.collaborator),1),D,t("p",F,c(e.vehicle_id),1),P,t("p",T,c(e.place),1),V,t("p",$,c(e.current_date),1)]))),128))])):(a(),o("h1",j,"No tienes ticket registrado"))])],64))}});export{A as default};
