import{_ as h,B as w}from"./ButtonForm-Cwmx2fdd.js";import{_ as C}from"./ParkSafeLayout.vue_vue_type_script_setup_true_lang-xjHvjoF1.js";import{u as v}from"./userRegisterData-9PWQlLnu.js";import{d as B,r as n,w as k,c as d,e as i,a as p,F as m,f as y,u as F,o as s,h as T}from"./index-BP6hUVtC.js";const V={class:"px-5"},P={class:"h-screen flex justify-center items-center"},$=B({__name:"TicketControl",setup(x){const o=n({email:"",id:"",label:"",name:"",password:"",passwordConfirm:""});let r=n("password"),c=n("password");const u=(e,l)=>{l==="Password"?r.value=e:c.value=e},f=(e,l)=>e==="Password"?r.value:e==="Confirmar Password"?c.value:l,_=()=>{console.log("Me hicierón click")};return k(o.value,e=>{console.log(e)},{deep:!0}),(e,l)=>(s(),d(m,null,[i(C,{title:"Control Tickets"}),p("section",V,[(s(!0),d(m,null,y(F(v),(a,t)=>(s(),T(h,{modelValue:o.value[t],"onUpdate:modelValue":b=>o.value[t]=b,id:a.label,name:a.label,key:t,label:a.label,placeholder:a.placeholder,type:f(a.label,a.type),labelFor:a.label,icon:!!a.label.toUpperCase().includes("PASSWORD"),onChangeType:u},null,8,["modelValue","onUpdate:modelValue","id","name","label","placeholder","type","labelFor","icon"]))),128))]),p("div",P,[i(w,{label:"Registrar",buttonType:"inputForm",size:"standard-form",onClick:_})])],64))}});export{$ as default};
