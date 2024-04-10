import{i as w}from"./index-CziqjtLO.js";import{a as f,_ as p}from"./axios-p9E6UbiB.js";import{_ as y,r,i as S,o as l,c,a as e,n as u,t as o,j as k,k as T,d as C,b as D,w as q,e as x,F as v,f as P,g as A}from"./index-DUFCv0zT.js";const O="/images/down-blue-arrow.svg",B={name:"AccordionDiscrepancy",props:{id:String,name:String,view_more:String,licensePlate_title:String,licensePlate:String,description_title:String,description:String,time_title:String,time:String,collaborator_title:String,collaborator:String,quit_title:String,quit_id:String,transition_ms:{type:Number,default:1e3}},emits:["quitVehicle"],setup(d){const s=r(!1),t=r(null);let i=r(0);const _=S(()=>({[`transition-all duration-${d.transition_ms} ease-in-out`]:s,[`transition-height duration-${d.transition_ms} ease-in-out`]:!s}));return{accordionRef:t,accordionHeight:i,accordionClasses:_,isOpen:s,toggleAccordion:()=>{s.value=!s.value,T(()=>{s.value?i.value=t.value.scrollHeight:i.value=0})}}}},V={class:"w-full flex flex-col px-5 bg-white border"},j={class:"text-[#020C41]"},z={class:"bg-white flex gap-7"},E={class:"text-xs uppercase bg-white"},G={class:"text-xs uppercase bg-white"},H={class:"flex gap-2 items-center justify-center text-xs text-blue-600 select-none bg-white"},N={class:"no-underline bg-white"},R={class:"grid grid-cols-[1fr_3fr] border-b pb-5 gap-x-2 pt-5 items-center bg-white"},F={class:"text-amTextGray bg-white"},I={class:"bg-white"},L={class:"grid grid-cols-[1fr_3fr] border-b pb-5 gap-x-2 pt-5 items-center bg-white"},M={class:"text-amTextGray bg-white"},Q={class:"bg-white"},U={class:"grid grid-cols-[1fr_3fr] border-b pb-5 gap-x-2 pt-5 items-center bg-white"},X={class:"text-amTextGray bg-white"},J={class:"bg-white"},K={class:"grid grid-cols-[1fr_3fr] border-b pb-5 gap-x-2 pt-5 items-center bg-white"},W={class:"text-amTextGray bg-white"},Y={class:"bg-white"},Z={class:"text-center bg-white"};function $(d,s,t,i,_,m){return l(),c("div",V,[e("section",j,[e("div",{class:u(["flex items-center py-5 justify-between border-[#D9D9D7] cursor-pointer bg-white",{"border-b ":i.isOpen}]),onClick:s[0]||(s[0]=(...g)=>i.toggleAccordion&&i.toggleAccordion(...g))},[e("div",z,[e("span",E,o(t.id),1),e("span",G,o(t.name),1)]),e("div",H,[e("a",N,o(t.view_more),1),e("img",{src:O,class:u([" select-none bg bg-white",{[`rotate-180 transition-all duration-${t.transition_ms}`]:i.isOpen,[`transition-all duration-${t.transition_ms}`]:!i.isOpen}])},null,2)])],2),e("div",{class:u(["text-xs text-left items-center justify-center bg-white overflow-hidden",i.accordionClasses]),style:k({height:i.isOpen?i.accordionHeight+"px":"0"}),ref:"accordionRef"},[e("div",R,[e("p",F,o(t.licensePlate_title),1),e("p",I,o(t.licensePlate),1)]),e("div",L,[e("p",M,o(t.description_title),1),e("p",Q,o(t.description),1)]),e("div",U,[e("p",X,o(t.time_title),1),e("p",J,o(t.time),1)]),e("div",K,[e("p",W,o(t.collaborator_title),1),e("p",Y,o(t.collaborator),1)]),e("div",Z,[e("a",{onClick:s[1]||(s[1]=g=>d.$emit("quitVehicle",t.quit_id)),class:"text-amBlueInnovation my-5 mx-auto inline-block bg-red-400 rounded p-2 text-white"},o(t.quit_title),1)])],6)])])}const ee=y(B,[["render",$]]),te={class:"px-5 mt-10"},ie={key:0,class:"flex flex-col m-auto min-w-[271px] w-3/4 pb-[20px] md:hidden"},se={class:"w-full"},oe={key:1,class:"text-center text-2xl font-bold text-white"},re=C({__name:"TicketControl",setup(d){const s=r("https://park-safe-api.onrender.com/api"),t=r({email:"",id:"",label:"",name:"",password:"",passwordConfirm:""});A();const i=r(),_=async()=>{try{const n=(await f.get(`${s.value}/ticket/?active=true`)).data;i.value=n,console.log(i.value)}catch(n){console.error("Error al obtener los tickets activos:",n)}},m=()=>{w.success("Se le dió salida al vehículo",{theme:"colored",autoClose:2e3,position:"bottom-center"})},g=async n=>{const h=(await f.patch(`${s.value}/ticket/${n}`,{},{headers:{"X-Timezone-Offset":new Date().getTimezoneOffset()}})).data;console.log(h),m(),await _()};return D(async()=>{await _()}),q(t.value,n=>{},{deep:!0}),(n,h)=>{var b;return l(),c(v,null,[x(p,{title:"Control Tickets"}),e("section",te,[(b=i.value)!=null&&b.length?(l(),c("div",ie,[(l(!0),c(v,null,P(i.value,(a,ae)=>(l(),c("div",se,[x(ee,{id:String(a.user.id),name:a.user.name,view_more:"ver mas",licensePlate_title:"Placa Vehículo:",licensePlate:a.vehicle.licensePlate,description_title:"Descripción:",description:a.vehicle.description,time_title:"Hora de entrada:",time:a.checkInFormatted,collaborator_title:"Empleado:",collaborator:a.collaborators[0].name,quit_title:"Dar Salida",quit_id:a.id,onQuitVehicle:g,class:u([" border-t-0",{"rounded-tr-lg rounded-tl-lg border-t  ":a===i.value[0],"rounded-br-lg rounded-bl-lg ":a===i.value[i.value.length-1]}])},null,8,["id","name","licensePlate","description","time","collaborator","quit_id","class"])]))),256))])):(l(),c("h1",oe," No hay vehículos en este momento en el estacionamiento "))])],64)}}});export{re as default};