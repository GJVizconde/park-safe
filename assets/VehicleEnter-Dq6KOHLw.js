import{_ as n,B as c}from"./ButtonForm-qw2FRp-D.js";import{_ as p}from"./ParkSafeLayout.vue_vue_type_script_setup_true_lang-C6suQ6ug.js";import{_ as u,u as r}from"./usersData-rQbUQMEd.js";import{d as f,r as V,w as g,c as v,b as o,a as i,u as d,F as _,o as b}from"./index-B0bTgFeB.js";const h={class:"px-5"},P={class:"flex justify-center items-center mt-[50px]"},U=f({__name:"VehicleEnter",setup(x){const e=V({id:"",licensePlates:"",place:"",time:"34242423424"}),m=()=>{console.log("Me hicierón click")},t=()=>{console.log("Se ha cambiado la opcion del Select")};return g(e.value,s=>{console.log(s)},{deep:!0}),(s,a)=>(b(),v(_,null,[o(p,{title:"Ingresar Vehículo"}),i("section",h,[o(u,{modelValue:e.value.id,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.id=l),onChange:t,label:"Usuario","data-options":d(r).users},null,8,["modelValue","data-options"]),o(u,{modelValue:e.value.licensePlates,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.licensePlates=l),onChange:t,label:"Placa","data-options":d(r).users},null,8,["modelValue","data-options"]),o(n,{modelValue:e.value.place,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.place=l),id:"Place",name:"Place",label:"Lugar",placeholder:"Ingresar Lugar",type:"text"},null,8,["modelValue"]),o(n,{class:"select-none",modelValue:e.value.time,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.time=l),id:"Place",name:"Place",label:"Fecha",placeholder:"Ingresar Fecha",type:"text",value:e.value.time,disabled:""},null,8,["modelValue","value"])]),i("div",P,[o(c,{label:"Ingresar",buttonType:"inputForm",size:"standard-form",onClick:m})])],64))}});export{U as default};