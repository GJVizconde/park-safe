import{_ as w,B as h}from"./ButtonForm-uw1s-4NO.js";import{_ as y}from"./ParkSafeLayout.vue_vue_type_script_setup_true_lang-B6wNj9ht.js";import{d as C,r as t,w as v,c as d,b as p,a as u,F as m,e as B,u as P,o as r,f as F}from"./index-DBsbsmYZ.js";const V={id:{label:"Cédula",placeholder:"Número de cédula",type:"number"},password:{label:"Password",placeholder:"Ingresar Password",type:"password",eyeIcon:"true"}},x={class:"px-5"},k={class:"flex justify-center items-center mt-[50px]"},I=C({__name:"UserLogin",setup(T){const o=t({email:"",id:"",label:"",username:"",password:"",passwordConfirm:""});let n=t("password"),c=t("password");const i=(e,l)=>{l==="Password"?n.value=e:c.value=e},f=(e,l)=>e==="Password"?n.value:e==="Confirmar Password"?c.value:l,_=()=>{console.log("Me hicierón click")};return v(o.value,e=>{console.log(e)},{deep:!0}),(e,l)=>(r(),d(m,null,[p(y,{title:"Acceso"}),u("section",x,[(r(!0),d(m,null,B(P(V),(a,s)=>(r(),F(w,{modelValue:o.value[s],"onUpdate:modelValue":b=>o.value[s]=b,id:a.label,name:a.label,key:s,label:a.label,placeholder:a.placeholder,type:f(a.label,a.type),labelFor:a.label,icon:!!a.label.toUpperCase().includes("PASSWORD"),onChangeType:i},null,8,["modelValue","onUpdate:modelValue","id","name","label","placeholder","type","labelFor","icon"]))),128))]),u("div",k,[p(h,{label:"Acceder",buttonType:"inputForm",size:"standard-form",onClick:_})])],64))}});export{I as default};
