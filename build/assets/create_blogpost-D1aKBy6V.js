import{r as m,k as U,j as e,C as _}from"./index-CNDwPbcK.js";import{E as z}from"./blogstyle-CPnEMUf1.js";import{b as K,d as H}from"./api-B9qGc84N.js";import{C as O}from"./CForm-CIYK7ixP.js";import{C as V,a as v}from"./CRow-C_mFcwcj.js";import{C as w}from"./CCard-B7_pa8np.js";import{C as F}from"./CCardHeader-BSbw5zxO.js";import{C as E}from"./CCardBody-ChFyFuQj.js";import{a as l,C as g,b as d}from"./CFormInput-D4b8rLgv.js";import{C as k}from"./CFormTextarea-pLeFGw-9.js";import{C as D}from"./CFormSelect-x_UCku4i.js";import{a as Y}from"./CContainer-CCuO_NJc.js";const le=()=>{const[a,x]=m.useState({title:"",slug:"",excerpt:"",content:"",category:"",author:"",metaTitle:"",metaDescription:"",metakeywords:"",status:"Draft"}),[S,f]=m.useState([]),[o,j]=m.useState({}),[i,p]=m.useState({}),[C,P]=m.useState(null),[b,T]=m.useState(null),[B,N]=m.useState(!1),I=localStorage.getItem("token"),M=U(),q=async()=>{try{const s=await K();Array.isArray(s.data)?f(s.data):f([])}catch(s){console.error("Error fetching categories:",s)}};m.useEffect(()=>{q()},[]);const c=s=>{const{name:t,value:r}=s.target;x(n=>({...n,[t]:r})),j(n=>({...n,[t]:""}))},y=s=>{const{name:t,files:r}=s.target,n=r[0];if(x(h=>({...h,[t]:n})),n){const h=URL.createObjectURL(n);t==="banner"?P(h):t==="metaimage"&&T(h)}},R=s=>{x(t=>({...t,content:s}))},A=()=>{const s={};let t=!0;return a.title||(s.title="Title is required",t=!1),a.slug||(s.slug="Slug is required",t=!1),a.excerpt||(s.excerpt="Excerpt is required",t=!1),a.content||(s.content="Content is required",t=!1),j(s),t},L=async s=>{if(N(!0),s.preventDefault(),p({}),!A())return;const t=new FormData;t.append("title",a.title),t.append("slug",a.slug),t.append("excerpt",a.excerpt),t.append("content",a.content),t.append("category",a.category),t.append("metaTitle",a.metaTitle),t.append("metaDescription",a.metaDescription),t.append("metakeywords",a.metakeywords),t.append("status",a.status),a.banner&&t.append("banner",a.banner),a.metaimage&&t.append("metaimage",a.metaimage);try{const r=await H(I,t);console.log(r.status==201),r&&(N(!1),M("/all-blogs"))}catch(r){if(r.response&&r.response.data){const n=r.response.data.error||"An error occurred while creating the blog post",h=r.response.data.details||{};h.code===11e3&&h.keyPattern.slug?p(u=>({...u,slug:"This slug is already taken.",general:n})):p(u=>({...u,general:n}))}else p({general:"An unexpected error occurred"})}};return e.jsxs(e.Fragment,{children:[B&&e.jsx("div",{className:"loading-overlay",children:e.jsxs("div",{className:"loading-content",children:[e.jsx(_,{color:"primary",size:"lg"}),e.jsx("p",{children:"Please wait, Your request is processing..."})]})}),e.jsx(O,{onSubmit:L,children:e.jsxs(V,{className:"form-container",style:{padding:"20px"},children:[e.jsx(v,{xs:12,md:8,className:"mb-4",children:e.jsxs(w,{children:[e.jsx(F,{className:"bg-primary text-white",children:e.jsx("strong",{children:"Blog Details"})}),e.jsxs(E,{children:[e.jsx(l,{htmlFor:"title",className:"form-label",children:"Title"}),e.jsx(g,{id:"title",name:"title",value:a.title,onChange:c,placeholder:"Enter blog post title",className:"form-input"}),o.title&&e.jsx(d,{className:"text-danger",children:o.title}),i.title&&e.jsx(d,{className:"text-danger",children:i.title}),e.jsx(l,{htmlFor:"slug",className:"form-label",children:"Slug"}),e.jsx(g,{id:"slug",name:"slug",value:a.slug,onChange:c,placeholder:"Enter slug",className:"form-input"}),o.slug&&e.jsx(d,{className:"text-danger",children:o.slug}),i.slug&&e.jsx(d,{className:"text-danger",children:i.slug}),e.jsx(l,{htmlFor:"excerpt",className:"form-label",children:"Excerpt"}),e.jsx(k,{id:"excerpt",name:"excerpt",value:a.excerpt,onChange:c,placeholder:"Enter blog post excerpt",className:"form-textarea"}),o.excerpt&&e.jsx(d,{className:"text-danger",children:o.excerpt}),i.excerpt&&e.jsx(d,{className:"text-danger",children:i.excerpt}),e.jsx(l,{htmlFor:"banner",className:"form-label",children:"Banner"}),e.jsx(g,{id:"banner",name:"banner",type:"file",onChange:y,className:"form-file mb-2"}),C&&e.jsx("div",{className:"image-preview",style:{marginTop:"10px"},children:e.jsx("img",{src:C,alt:"Banner Preview",style:{width:"10%",height:"auto",borderRadius:"8px"}})}),e.jsx(l,{htmlFor:"category",className:"form-label",children:"Category"}),e.jsxs(D,{id:"category",name:"category",value:a.category,onChange:c,className:"form-select",children:[e.jsx("option",{value:"",children:"Select Category"}),S.map(s=>e.jsx("option",{value:s._id,children:s.title},s._id))]}),e.jsx(l,{htmlFor:"content",className:"form-label",children:"Content"}),e.jsx(z,{apiKey:"swwi0ejh09qkjnay90r9f3n6dfuu54hxtzn3k3a27qrbb1d4",value:a.content,onEditorChange:R,init:{height:500,menubar:!0,plugins:["image","link","code","lists","table","fullscreen"],toolbar:"undo redo | bold italic | alignleft aligncenter alignright | image | link | h1 h2 h3 h4 h5 h6 | code | fullscreen",content_style:"h1,h2,h3,h4,h5,h6 { color: #000; }"}}),o.content&&e.jsx(d,{className:"text-danger",children:o.content}),i.content&&e.jsx(d,{className:"text-danger",children:i.content})]})]})}),e.jsx(v,{xs:12,md:4,className:"mb-4",children:e.jsxs(w,{children:[e.jsx(F,{className:"bg-secondary text-white",children:e.jsx("strong",{children:"Meta Information"})}),e.jsxs(E,{children:[e.jsx(l,{htmlFor:"metaTitle",className:"form-label",children:"Meta Title"}),e.jsx(g,{id:"metaTitle",name:"metaTitle",value:a.metaTitle,onChange:c,placeholder:"Enter meta title",className:"form-input"}),e.jsx(l,{htmlFor:"metakeywords",className:"form-label",children:"Meta Keywords"}),e.jsx(g,{id:"metakeywords",name:"metakeywords",value:a.metakeywords,onChange:c,placeholder:"Enter meta keywords",className:"form-input"}),e.jsx(l,{htmlFor:"metaDescription",className:"form-label",children:"Meta Description"}),e.jsx(k,{id:"metaDescription",name:"metaDescription",value:a.metaDescription,onChange:c,placeholder:"Enter meta description",className:"form-textarea"}),e.jsx(l,{htmlFor:"metaimage",className:"form-label",children:"Meta Image"}),e.jsx(g,{id:"metaimage",name:"metaimage",onChange:y,className:"form-file mb-2",type:"file"}),b&&e.jsx("div",{className:"image-preview",style:{marginTop:"10px"},children:e.jsx("img",{src:b,alt:"Meta Image Preview",style:{width:"10%",height:"auto"}})}),e.jsx(l,{htmlFor:"status",className:"form-label",children:"Status"}),e.jsxs(D,{id:"status",name:"status",value:a.status,onChange:c,className:"form-select",children:[e.jsx("option",{value:"Draft",children:"Draft"}),e.jsx("option",{value:"Published",children:"Published"})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx(Y,{color:"primary",type:"submit",className:"submit-btn",children:"Create Blog Post"})})]})]})})]})})]})};export{le as default};
