import{_ as p,B as U}from"./ButtonForm-BkOVlIJc.js";import{_ as x}from"./ParkSafeLayout.vue_vue_type_script_setup_true_lang-D-1ndf6p.js";import{_ as v}from"./SelectForm.vue_vue_type_script_setup_true_lang-6WchlQyd.js";import{a as g}from"./axios-Cm0UX6qg.js";import{d as E,r as t,j as S,b as h,w as k,c as B,e as r,a as V,F as C,o as w}from"./index-DnV5PFEW.js";const P={class:"px-5"},D={class:"flex justify-center items-center mt-[50px]"},G=E({__name:"GenerateTicket",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(b){const d=t("http://localhost:3001/api"),s=t({name:"",id:"",email:"",role:"",token:""}),o=t({userId:"",vehicleId:"",parkingPlace:"",collaboratorId:""}),n=t([{id:0,name:"",email:"",password:"",role:"USER",vehicles:[]}]),c=S(b,"modelValue");t();const i=t(),f=t(),y=()=>{console.log("Me hicierón click"),I(o.value)},_=async()=>{try{const e=(await g.get(`${d.value}/user`)).data;console.log(e),n.value=e,console.log("users => ",n.value)}catch(e){console.error("Error al obtener el ticket:",e)}},I=async e=>{try{const a=(await g.post(`${d.value}/ticket/`,e)).data;console.log(a),f.value=a}catch(a){console.error("Error al generar el ticket: ",a)}},u=()=>{console.log("Se hizo un cambioo")};return h(async()=>{await _()}),h(()=>{const e=localStorage.getItem("userSession");s.value=e?JSON.parse(e):{name:"",id:"",email:"",role:"",token:""}}),k(o.value,e=>{console.log("FormData has changed",e)},{deep:!0}),k(c,e=>{console.log("NUEVO valor de model ==>>",e),console.log("NUEVO valor de value.vehicles ==>>",e.vehicles),o.value.userId=e.id,i.value=e.vehicles,o.value.collaboratorId=s.value.id},{deep:!0}),(e,a)=>{var m;return w(),B(C,null,[r(x,{title:"Generar Ticket"}),V("section",P,[r(v,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=l=>c.value=l),onChange:u,label:"Usuario","data-options":n.value,typeData:"user"},null,8,["modelValue","data-options"]),r(v,{modelValue:o.value.vehicleId,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value.vehicleId=l),onChange:u,label:"Placa","data-options":i.value,typeData:"vehicle"},null,8,["modelValue","data-options"]),r(p,{modelValue:o.value.parkingPlace,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value.parkingPlace=l),id:"Place",name:"Place",label:"Lugar",placeholder:"Ingresar Lugar",type:"text"},null,8,["modelValue"]),r(p,{modelValue:o.value.collaboratorId,"onUpdate:modelValue":a[3]||(a[3]=l=>o.value.collaboratorId=l),id:"collaborator",name:"collaborator",label:"Empleado",placeholder:"Colaborador",value:(m=s.value)==null?void 0:m.name,type:"text",disabled:"",class:"text-gray-500"},null,8,["modelValue","value"])]),V("div",D,[r(U,{label:"Generar ticket",buttonType:"inputForm",size:"standard-form",onClick:y})])],64)}}});export{G as default};