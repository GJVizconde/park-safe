import{a as m,_ as h}from"./axios-cMcX0P3F.js";import{d as b,r,b as k,w as f,c as o,e as B,a as t,u as _,F as g,f as v,o as a,t as c}from"./index-C60wjN5s.js";const x={class:"flex flex-col gap-8 items-center justify-center mt-10 px-11"},y={key:0},w=t("p",{class:"bg-ticketBg font-bold"},"Cliente:",-1),N={class:"bg-ticketBg"},S=t("p",{class:"bg-ticketBg font-bold"},"Empleado:",-1),E={class:"bg-ticketBg"},U=t("p",{class:"bg-ticketBg font-bold"},"Vehiculo:",-1),D={class:"bg-ticketBg"},F=t("p",{class:"bg-ticketBg font-bold"},"Puesto:",-1),I={class:"bg-ticketBg"},T=t("p",{class:"bg-ticketBg font-bold"},"Fecha:",-1),V={class:"bg-ticketBg"},$={key:1,class:"text-center text-2xl font-bold text-white"},P=b({__name:"UserTicket",setup(j){const p=r("https://park-safe-api.onrender.com/api");let l=r([{name:"",collaborator:"",vehicle_id:"",place:"",current_date:""}]);const n=r({name:"",id:"",email:"",role:"",token:""}),d=async s=>{var i;try{const e=(await m.get(`${p.value}/ticket/userTicket?id=${s}`)).data;console.log(e),l.value=[{name:e.user.name,collaborator:(i=e==null?void 0:e.collaborators[0])==null?void 0:i.name,vehicle_id:e.vehicle.licensePlate,place:e.parkingId,current_date:e.checkIn}]}catch(e){console.error("Error al obtener el ticket:",e)}};return k(async()=>{const s=localStorage.getItem("userSession");n.value=s?JSON.parse(s):{name:"",id:"",email:"",role:"",token:""},console.log("User session:",n.value),await d(Number(n.value.id))}),f(n.value,async s=>{await d(Number(s.id))},{deep:!0}),(s,i)=>(a(),o(g,null,[B(h,{title:"User Ticket"}),t("section",x,[_(l)[0].name!==""?(a(),o("div",y,[(a(!0),o(g,null,v(_(l),(e,u)=>(a(),o("div",{class:"grid grid-cols-2 gap-y-5 bg-ticketBg w-full p-7 rounded-2xl items-center justify-center",key:u},[w,t("p",N,c(e.name),1),S,t("p",E,c(e.collaborator),1),U,t("p",D,c(e.vehicle_id),1),F,t("p",I,c(e.place),1),T,t("p",V,c(e.current_date),1)]))),128))])):(a(),o("h1",$," No tienes ningún vehículo en el estacionamiento "))])],64))}});export{P as default};
