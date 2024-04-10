import{i as x}from"./index-S2YoHpAx.js";import{a as u,_ as E}from"./axios-Wgd9b8gU.js";import{_ as S,B}from"./ButtonForm-BWVzb7UI.js";import{_ as m,g as D}from"./goTo-C0qsdiOp.js";import{d as $,r as t,l as F,b,w as f,c as P,e as s,a as h,F as R,g as z,o as G}from"./index-BRqVk4mY.js";const M={class:"px-5"},N={class:"flex justify-center items-center mt-[50px]"},X=$({__name:"GenerateTicket",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(V){const r=t("https://park-safe-api.onrender.com/api"),n=t({name:"",id:"",email:"",role:"",hasTicket:"",token:""}),o=t({userId:"",vehicleId:"",parkingId:"",collaboratorId:""}),p=t([{id:0,name:"",email:"",password:"",role:"USER",vehicles:[]}]),y=z(),i=F(V,"modelValue"),v=t(),I=t(),c=t(!0),g=t([""]),_=()=>{w(o.value)},T=()=>{x.success("El vehículo ha ingresado al estacionamiento!",{theme:"colored",autoClose:2e3,onClose:()=>{D(y,"ticket-control")},position:"bottom-center"})},C=async()=>{try{const e=(await u.get(`${r.value}/user?ticket=false&hasVehicle=true`)).data;p.value=e}catch(e){console.error("Error al obtener el ticket:",e)}},w=async e=>{try{const a=(await u.post(`${r.value}/ticket/`,e,{headers:{"X-Timezone-Offset":new Date().getTimezoneOffset()}})).data;console.log(a),I.value=a,T()}catch(a){console.error("Error al generar el ticket: ",a)}},U=async()=>{try{const e=(await u.get(`${r.value}/parking?available=true`)).data;g.value=e}catch(e){console.log("Error al obtener el ticket: ",e)}},d=()=>{};return b(async()=>{await C(),await U()}),b(()=>{const e=localStorage.getItem("userSession");n.value=e?JSON.parse(e):{name:"",id:"",email:"",role:"",hasTicket:!1,token:""}}),f(o.value,e=>{},{deep:!0}),f(i,e=>{var a;o.value.userId=e.id,v.value=e.vehicles,o.value.collaboratorId=n.value.id,c.value=!((a=e==null?void 0:e.vehicles[0])!=null&&a.id)},{deep:!0}),(e,a)=>{var k;return G(),P(R,null,[s(E,{title:"Generar Ticket"}),h("section",M,[s(m,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l),onChange:d,label:"Usuario:","data-options":p.value,typeData:"user"},null,8,["modelValue","data-options"]),s(m,{modelValue:o.value.vehicleId,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value.vehicleId=l),onChange:d,label:"Placa:","data-options":v.value,typeData:"vehicle",disabled:c.value},null,8,["modelValue","data-options","disabled"]),s(m,{modelValue:o.value.parkingId,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value.parkingId=l),onChange:d,label:"Lugar de estacionamiento:","data-options":g.value,typeData:"parking",disabled:c.value},null,8,["modelValue","data-options","disabled"]),s(S,{modelValue:o.value.collaboratorId,"onUpdate:modelValue":a[3]||(a[3]=l=>o.value.collaboratorId=l),id:"collaborator",name:"collaborator",label:"Empleado",placeholder:"Colaborador",value:(k=n.value)==null?void 0:k.name,type:"text",disabled:"",class:"text-gray-500"},null,8,["modelValue","value"])]),h("div",N,[s(B,{label:"Generar ticket",buttonType:"inputForm",size:"standard-form",onClick:_})])],64)}}});export{X as default};
