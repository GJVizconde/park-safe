import{_ as d,B as _}from"./ButtonForm-B4QR9w-m.js";import{_ as b}from"./ParkSafeLayout.vue_vue_type_script_setup_true_lang-DqYQy0ac.js";import{_ as y}from"./SelectForm.vue_vue_type_script_setup_true_lang-hE7VN4zC.js";import{a as u}from"./axios-Cm0UX6qg.js";import{d as U,r as c,i as k,b as x,w as m,c as B,e as t,a as p,F as E,g as P,o as D}from"./index-DTjtBmHr.js";const R=(r,s)=>{r.push({path:`/${s}`})},S={class:"px-5"},$={class:"flex justify-center items-center mt-[50px]"},T=U({__name:"VehicleRegister",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(r){const s=c("http://localhost:3001/api"),a=c({user_id:"",licensePlate:"",description:""}),g=P(),i=c([""]),n=k(r,"modelValue"),V=async()=>{try{const e=(await u.get(`${s.value}/user`)).data;console.log(e),i.value=e}catch(e){console.error("Error al obtener el ticket:",e)}},v=async e=>{try{const o=(await u.post(`${s.value}/vehicle`,e)).data;console.log(o),R(g,"ticket-generate"),console.log("YA ESTA LISTO")}catch(o){console.error("Error al obtener el ticket:",o)}},f=()=>{v(a.value)},h=()=>{console.log("Se ha cambiado la opcion del Select")};return x(async()=>{await V()}),m(a.value,e=>{console.log(e)},{deep:!0}),m(n,e=>{console.log("NUEVO valor de model ==>>",e),console.log("NUEVO valor de value.vehicles ==>>",e.vehicles),a.value.user_id=e.id},{deep:!0}),(e,o)=>(D(),B(E,null,[t(b,{title:"Registrar Vehiculo"}),p("section",S,[t(y,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),onChange:h,label:"Usuario","data-options":i.value,typeData:"user"},null,8,["modelValue","data-options"]),t(d,{modelValue:a.value.licensePlate,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value.licensePlate=l),id:"Placa",name:"Placa",label:"Placa",placeholder:"Ingresar Placa",type:"text"},null,8,["modelValue"]),t(d,{modelValue:a.value.description,"onUpdate:modelValue":o[2]||(o[2]=l=>a.value.description=l),id:"Description",name:"Description",label:"Description",placeholder:"Ingresar Descripción, marca, modelo, color"},null,8,["modelValue"])]),p("div",$,[t(_,{label:"Registrar",buttonType:"inputForm",size:"standard-form",onClick:f})])],64))}});export{T as default};