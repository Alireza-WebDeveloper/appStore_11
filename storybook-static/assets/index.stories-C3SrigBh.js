import{j as t}from"./jsx-runtime-CcwWnNjF.js";import{c as b}from"./index-Dp3B9jqt.js";import{c as x}from"./clsx-B-dksMZM.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";const f=b("px-4 py-2 rounded",{variants:{size:{small:"text-sm py-1 px-2",large:"text-lg py-3 px-6"},color:{blue:"bg-blue-800 text-white dark:bg-blue-200 dark:text-black",red:"bg-red-800 text-white dark:bg-red-400 dark:text-black"}},defaultVariants:{size:"small",color:"blue"}}),p=({children:o,size:m,color:u,isDisabled:a=!1,onClick:g})=>t.jsx("button",{onClick:g,className:x(f({size:m,color:u}),a&&"opacity-50 cursor-not-allowed"),disabled:a,children:o});p.__docgenInfo={description:"",methods:[],displayName:"ButtonContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const j={title:"Components/ButtonContainer",component:p,decorators:[o=>t.jsx("div",{className:"flex justify-center items-center",children:t.jsx(o,{})})],argTypes:{size:{control:"select",options:["small","large"],description:"اندازه دکمه که می‌تواند کوچک (small) یا بزرگ (large) باشد."},color:{control:"select",options:["blue","red"],description:"رنگ دکمه که می‌تواند آبی (blue) یا قرمز (red) باشد."},onClick:{action:"clicked",description:"تابعی که در هنگام کلیک دکمه فراخوانی می‌شود."}}},e={args:{size:"large",color:"blue",children:"Click Me"}},r={args:{size:"large",color:"red",children:"Click Me"}};var s,c,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'blue',
    children: 'Click Me'
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'red',
    children: 'Click Me'
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const N=["Primary","Secondary"];export{e as Primary,r as Secondary,N as __namedExportsOrder,j as default};
