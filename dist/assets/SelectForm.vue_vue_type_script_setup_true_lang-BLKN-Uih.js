import{d as p,m as u,j as m,c as o,a as t,t as s,k as b,v as f,l as g,F as v,f as h,o as a}from"./index-BP6hUVtC.js";const _={class:"mt-[30px]"},k=["for"],x=["id"],B={class:"bg-ticketBg",value:"",disabled:"",default:"",selected:""},V=["value"],S=p({__name:"SelectForm",props:u({label:{default:"Select"},dataOptions:{},placeholder:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const i=d,n=m(d,"modelValue");return(l,r)=>(a(),o("div",_,[t("label",{for:l.label,class:"block text-left mb-[7px] text-white"},s(i.label),9,k),t("div",null,[b(t("select",g({class:"block w-full h-[42px] text-lg py-[3px] px-[10px] border rounded-md focus:outline-none bg-ticketBg"},l.$attrs,{"onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e),id:l.label}),[t("option",B,s(i.placeholder),1),(a(!0),o(v,null,h(l.dataOptions,(e,c)=>(a(),o("option",{key:c,class:"bg-ticketBg",value:e.id},s(`${e.id+" "+e.name}`),9,V))),128))],16,x),[[f,n.value]])])]))}});export{S as _};