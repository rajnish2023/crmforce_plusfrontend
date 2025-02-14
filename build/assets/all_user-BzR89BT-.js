import{r as n,j as e}from"./index-CNDwPbcK.js";import{n as Z,o as $,p as G}from"./api-B9qGc84N.js";import{C as c,a as o}from"./CRow-C_mFcwcj.js";import{a as m}from"./CContainer-CCuO_NJc.js";import{C as W}from"./CInputGroup-BUs0JMgv.js";import{C as d,a as i,b as h}from"./CFormInput-D4b8rLgv.js";import{C as J,a as K,b as v,c as x,d as O,e as C}from"./CTable-DMjTmETu.js";import{C as E,a as F,b as U,c as S,d as T}from"./CModalTitle-hn51-tnD.js";import{C as Q}from"./CForm-CIYK7ixP.js";import{C as X}from"./CFormSelect-x_UCku4i.js";import{C as Y}from"./CFormTextarea-pLeFGw-9.js";import"./DefaultLayout-Bapu6jUF.js";import"./index.esm-Dsfv9R7D.js";import"./cil-user-Dlmw-Gem.js";const pe=()=>{const[D,u]=n.useState(!1),[f,L]=n.useState(""),[k,j]=n.useState([]),[r,w]=n.useState({name:"",email:"",password:"",confirmPassword:"",profilePic:"",aboutus:"Hey there",linkedin:"",status:"Pending",role:"content-writer"}),[l,A]=n.useState({name:"",email:"",password:"",confirmPassword:"",profilePic:"",linkedin:""}),[R,P]=n.useState(!1),[b,g]=n.useState(null),N=async()=>{try{const s=await Z();Array.isArray(s.data.users)?j(s.data.users):j([])}catch(s){console.error("Error fetching users:",s),j([])}};n.useEffect(()=>{N()},[]);const M=s=>{L(s.target.value)},t=s=>{const{name:a,value:p}=s.target;w(B=>({...B,[a]:p}))},I=s=>{const a=s.target.files[0];a&&w(p=>({...p,profilePic:a}))},H=()=>{const s={};let a=!0;r.name||(s.name="Name is required.",a=!1);const p=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;return(!r.email||!p.test(r.email))&&(s.email="Please enter a valid email address.",a=!1),r.password||(s.password="Password is required.",a=!1),r.password!==r.confirmPassword&&(s.confirmPassword="Passwords do not match.",a=!1),r.profilePic||(s.profilePic="Profile picture is required.",a=!1),r.linkedin&&!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(r.linkedin)&&(s.linkedin="Please enter a valid LinkedIn URL.",a=!1),A(s),a},V=async()=>{if(H())try{const s=new FormData;s.append("name",r.name),s.append("email",r.email),s.append("password",r.password),s.append("confirmPassword",r.confirmPassword),s.append("aboutus",r.aboutus),s.append("linkedin",r.linkedin),s.append("status",r.status),s.append("role",r.role),r.profilePic&&s.append("profilePic",r.profilePic);const a=await $(s);N(),w({name:"",email:"",password:"",confirmPassword:"",profilePic:"",aboutus:"Hey there",linkedin:"",status:"Pending",role:"user"}),u(!1)}catch(s){console.error("Error creating user:",s)}},_=s=>{g(s),P(!0)},z=async()=>{if(b)try{await G(b._id),j(k.filter(s=>s._id!==b._id))}catch(s){console.error("Error deleting user:",s)}P(!1),g(null)},y=()=>{P(!1),g(null)},q=k.filter(s=>(s.name?s.name.toLowerCase():"").includes(f.toLowerCase())||(s.email?s.email.toLowerCase():"").includes(f.toLowerCase())||(s.role?s.role.toLowerCase():"").includes(f.toLowerCase()));return e.jsxs(c,{children:[e.jsx(o,{xs:6,className:"d-flex justify-content-start",children:e.jsx(m,{color:"primary",onClick:()=>u(!0),children:"Create User"})}),e.jsx(o,{xs:6,className:"d-flex justify-content-end",children:e.jsx(W,{children:e.jsx(d,{placeholder:"Search user...",value:f,onChange:M})})}),e.jsx(o,{xs:12,className:"mt-4",children:e.jsxs(J,{striped:!0,hover:!0,children:[e.jsx(K,{children:e.jsxs(v,{children:[e.jsx(x,{scope:"col",children:"#"}),e.jsx(x,{scope:"col",children:"Name"}),e.jsx(x,{scope:"col",children:"Email"}),e.jsx(x,{scope:"col",children:"Role"}),e.jsx(x,{scope:"col",children:"Actions"})]})}),e.jsx(O,{children:q.map((s,a)=>e.jsxs(v,{children:[e.jsx(x,{scope:"row",children:a+1}),e.jsx(C,{children:s.name}),e.jsx(C,{children:s.email}),e.jsx(C,{children:s.role}),e.jsx(C,{children:e.jsx(m,{color:"danger",onClick:()=>_(s),children:"Delete"})})]},s._id))})]})}),e.jsxs(E,{visible:R,onClose:y,children:[e.jsx(F,{children:e.jsx(U,{children:"Confirm Deletion"})}),e.jsx(S,{children:e.jsx("p",{children:"Are you sure you want to delete this user?"})}),e.jsxs(T,{children:[e.jsx(m,{color:"secondary",onClick:y,children:"Cancel"}),e.jsx(m,{color:"danger",onClick:z,children:"Delete"})]})]}),e.jsxs(E,{visible:D,onClose:()=>u(!1),size:"lg",children:[e.jsx(F,{children:e.jsx(U,{children:"Create New User"})}),e.jsx(S,{children:e.jsxs(Q,{children:[e.jsxs(c,{children:[e.jsxs(o,{xs:6,className:"mb-3",children:[e.jsx(i,{htmlFor:"userName",children:"User Name"}),e.jsx(d,{id:"userName",name:"name",placeholder:"Enter user name",value:r.name,onChange:t}),l.name&&e.jsx(h,{className:"text-danger",children:l.name})]}),e.jsxs(o,{xs:6,className:"mb-3",children:[e.jsx(i,{htmlFor:"userEmail",children:"Email"}),e.jsx(d,{id:"userEmail",name:"email",placeholder:"Enter email address",value:r.email,onChange:t}),l.email&&e.jsx(h,{className:"text-danger",children:l.email})]})]}),e.jsxs(c,{children:[e.jsxs(o,{xs:6,className:"mb-3",children:[e.jsx(i,{htmlFor:"userPassword",children:"Password"}),e.jsx(d,{id:"userPassword",name:"password",type:"password",placeholder:"Enter password",value:r.password,onChange:t}),l.password&&e.jsx(h,{className:"text-danger",children:l.password})]}),e.jsxs(o,{xs:6,className:"mb-3",children:[e.jsx(i,{htmlFor:"userConfirmPassword",children:"Confirm Password"}),e.jsx(d,{id:"userConfirmPassword",name:"confirmPassword",type:"password",placeholder:"Confirm password",value:r.confirmPassword,onChange:t}),l.confirmPassword&&e.jsx(h,{className:"text-danger",children:l.confirmPassword})]})]}),e.jsxs(c,{children:[e.jsxs(o,{xs:6,className:"mb-3",children:[e.jsx(i,{htmlFor:"profilePic",children:"Profile Picture"}),e.jsx(d,{id:"profilePic",name:"profilePic",type:"file",onChange:I}),l.profilePic&&e.jsx(h,{className:"text-danger",children:l.profilePic})]}),e.jsxs(o,{xs:6,className:"mb-3",children:[e.jsx(i,{htmlFor:"userRole",children:"Role"}),e.jsxs(X,{id:"userRole",name:"role",value:r.role,onChange:t,children:[e.jsx("option",{value:"content-writer",children:"Content Writer"}),e.jsx("option",{value:"seo-expert",children:"Seo Expert"}),e.jsx("option",{value:"superAdmin",children:"Super Admin"})]})]})]}),e.jsx(c,{children:e.jsxs(o,{xs:12,className:"mb-3",children:[e.jsx(i,{htmlFor:"linkedin",children:"LinkedIn"}),e.jsx(d,{id:"linkedin",name:"linkedin",placeholder:"Enter LinkedIn URL",value:r.linkedin,onChange:t}),l.linkedin&&e.jsx(h,{className:"text-danger",children:l.linkedin})]})}),e.jsx(c,{children:e.jsxs(o,{xs:12,className:"mb-3",children:[e.jsx(i,{htmlFor:"aboutus",children:"About Us"}),e.jsx(Y,{id:"aboutus",name:"aboutus",rows:"3",value:r.aboutus,onChange:t})]})})]})}),e.jsxs(T,{children:[e.jsx(m,{color:"secondary",onClick:()=>u(!1),children:"Cancel"}),e.jsx(m,{color:"primary",onClick:V,children:"Create"})]})]})]})};export{pe as default};
