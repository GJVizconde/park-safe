import{_ as P,B as D}from"./ButtonForm-B6klmzdg.js";import{_ as F,a as i}from"./axios-D2GUZa20.js";import{d as O,r,w as p,b as m,c as w,e as f,a as v,F as h,f as U,u as V,g as A,o as c,h as E}from"./index-6MqYbaQx.js";import{i as b}from"./index-B3FQeee9.js";const L={id:{label:"Cédula",placeholder:"Número de cédula",type:"number"},name:{label:"Nombre",placeholder:"Ingresar nombre",type:"text"},email:{label:"Email",placeholder:"Ingresar correo eléctronico",type:"email"},password:{label:"Password",placeholder:"Ingresar Password",type:"password",eyeIcon:"true"},passwordConfirm:{label:"Confirmar Password",placeholder:"Confirmar Password",type:"password",eyeIcon:"true"}},$={class:"px-5"},R={class:"flex justify-center items-center mt-[50px]"},H=O({__name:"UserRegister",setup(J){const l=r("https://park-safe-api.onrender.com/api"),a=r({email:"",id:"",label:"",name:"",password:"",passwordConfirm:""}),t=r({name:"",id:"",email:"",role:"",hasTicket:!1,token:""});let d=r("password"),u=r("password");const g=(e,o)=>{o==="Password"?d.value=e:u.value=e},C=(e,o)=>e==="Password"?d.value:e==="Confirmar Password"?u.value:o,_=A(),y=()=>{_.push({path:"/"})},k=()=>{b.success("Inicio de Sesion, exitoso !",{theme:"colored",autoClose:2e3,onClose:y,position:"bottom-center"})},S=()=>{b.success("Registro de empleado, exitoso !",{theme:"colored",autoClose:2e3,position:"bottom-center"})},T=async()=>{const e=(await i.post(`${l.value}/auth/login`,{id:a.value.id,password:a.value.password})).data,o=e.user,s=e.token;t.value={id:o.id,name:o.name,email:o.email,role:o.role,hasTicket:o.hasTicket,token:s},k()},I=async()=>{try{const e=(await i.post(`${l.value}/auth/register`,a.value)).data;await T()}catch(e){console.log("Error registrando al nuevo usuario:",e)}},x=async()=>{try{const e=(await i.post(`${l.value}/collaborator/register`,{email:a.value.email,id:a.value.id,name:a.value.name,password:a.value.password,role:"COLLABORATOR"})).data}catch(e){console.log("Error registrando un nuevo empleado: ",e)}},B=()=>{t.value.role==="ADMIN"?(x(),S(),a.value.email="",a.value.id="",a.value.name="",a.value.password="",a.value.passwordConfirm=""):I()};return p(a.value,e=>{},{deep:!0}),p(t,e=>{window.localStorage.setItem("userSession",JSON.stringify(e))},{deep:!0}),m(()=>{const e=localStorage.getItem("userSession");t.value=e?JSON.parse(e):{name:"",id:"",email:"",role:"",hasTicket:!1,token:""}}),m(()=>{}),(e,o)=>(c(),w(h,null,[f(F,{title:"Registro"}),v("section",$,[(c(!0),w(h,null,U(V(L),(s,n)=>(c(),E(P,{modelValue:a.value[n],"onUpdate:modelValue":N=>a.value[n]=N,key:n,id:s.label,name:s.label,label:s.label,placeholder:s.placeholder,type:C(s.label,s.type),labelFor:s.label,icon:!!s.label.toUpperCase().includes("PASSWORD"),onChangeType:g},null,8,["modelValue","onUpdate:modelValue","id","name","label","placeholder","type","labelFor","icon"]))),128))]),v("div",R,[f(D,{label:"Registrar",buttonType:"inputForm",size:"standard-form",onClick:B})])],64))}});export{H as default};