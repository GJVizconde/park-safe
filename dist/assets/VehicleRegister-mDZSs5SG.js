import{_ as i,B as c}from"./ButtonForm-qw2FRp-D.js";import{_ as u}from"./ParkSafeLayout.vue_vue_type_script_setup_true_lang-C6suQ6ug.js";import{_ as m,u as d}from"./usersData-rQbUQMEd.js";import{d as p,r as _,w as f,c as g,b as l,a as s,u as V,F as h,o as P}from"./index-B0bTgFeB.js";const b={class:"px-5"},v={class:"flex justify-center items-center mt-[50px]"},y=p({__name:"VehicleRegister",setup(x){const e=_({id:"",licensePlates:""}),n=()=>{console.log("Me hicierón click")},r=()=>{console.log("Se ha cambiado la opcion del Select")};return f(e.value,t=>{console.log(t)},{deep:!0}),(t,a)=>(P(),g(h,null,[l(u,{title:"Registrar Vehiculo"}),s("section",b,[l(m,{modelValue:e.value.id,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value.id=o),onChange:r,label:"Usuario","data-options":V(d).users},null,8,["modelValue","data-options"]),l(i,{modelValue:e.value.licensePlates,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value.licensePlates=o),id:"Placa",name:"Placa",label:"Placa",placeholder:"Ingresar Placa",type:"text"},null,8,["modelValue"])]),s("div",v,[l(c,{label:"Registrar",buttonType:"inputForm",size:"standard-form",onClick:n})])],64))}});export{y as default};