import{i as b}from"./index-DWCbAADA.js";import{_ as c,B as y}from"./ButtonForm-CIEi1dc3.js";import{a as u,_ as k}from"./axios-B3LoHbWx.js";import{_ as x,g as B}from"./goTo-DzhNaypG.js";import{d as C,r,l as P,b as U,w as d,c as D,e as s,a as m,F as R,g as w,o as $}from"./index-C1YjjrHM.js";const E={class:"px-5"},F={class:"flex justify-center items-center mt-[50px]"},S=C({__name:"VehicleRegister",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(p){const n=r("https://park-safe-api.onrender.com/api"),o=r({user_id:"",licensePlate:"",description:""}),f=w(),i=r([""]),l=P(p,"modelValue"),V=async()=>{try{const e=(await u.get(`${n.value}/user`)).data;i.value=e}catch(e){console.error("Error al obtener el ticket:",e)}},g=()=>{b.success("Vehículo registrado con exito!",{theme:"colored",autoClose:2e3,onClose:()=>{B(f,"ticket-generate")},position:"bottom-center"})},_=async e=>{try{const a=(await u.post(`${n.value}/vehicle`,e)).data;g()}catch(a){console.error("Error al obtener el ticket:",a)}},v=()=>{_(o.value)},h=()=>{};return U(async()=>{await V()}),d(o.value,e=>{},{deep:!0}),d(l,e=>{o.value.user_id=e.id},{deep:!0}),(e,a)=>($(),D(R,null,[s(k,{title:"Registrar Vehiculo"}),m("section",E,[s(x,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=t=>l.value=t),onChange:h,label:"Usuario","data-options":i.value,typeData:"user"},null,8,["modelValue","data-options"]),s(c,{modelValue:o.value.licensePlate,"onUpdate:modelValue":a[1]||(a[1]=t=>o.value.licensePlate=t),id:"Placa",name:"Placa",label:"Placa",placeholder:"Ingresar Placa",type:"text"},null,8,["modelValue"]),s(c,{modelValue:o.value.description,"onUpdate:modelValue":a[2]||(a[2]=t=>o.value.description=t),id:"Description",name:"Description",label:"Description",placeholder:"Ingresar Descripción, marca, modelo, color"},null,8,["modelValue"])]),m("div",F,[s(y,{label:"Registrar",buttonType:"inputForm",size:"standard-form",onClick:v})])],64))}});export{S as default};
