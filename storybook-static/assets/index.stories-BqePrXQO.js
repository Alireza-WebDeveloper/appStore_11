import{j as r}from"./jsx-runtime-CcwWnNjF.js";import{t as f}from"./bundle-mjs-CVCfOWck.js";import{c as S}from"./clsx-B-dksMZM.js";import{fn as x}from"./index-BgJgh-x_.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";const y=(...e)=>f(S(e.filter(Boolean))),t=({value:e,onChangeValue:z,selectSize:h="md"})=>{const v={sm:"px-2 py-1",md:"px-3 py-1.5",lg:"px-4 py-2",xl:"px-5 py-2.5"};return r.jsx("input",{className:y("rounded-lg bg-gray-300",v[h]),value:e})};t.__docgenInfo={description:"",methods:[],displayName:"InputContainer",props:{value:{required:!0,tsType:{name:"string"},description:""},selectSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const _={title:"Components/input",component:t,argTypes:{value:{control:"text",description:"مقدار پیش‌فرض ورودی که نمایش داده می‌شود و قابل تغییر است."},onChangeValue:{action:"changed",description:"یک تابع که مقدار جدید ورودی را هنگام تغییر دریافت می‌کند."},selectSize:{control:"select",options:["sm","md","lg","xl"],description:"اندازه ورودی که می‌تواند یکی از مقادیر sm، md، lg، xl باشد."}},decorators:[e=>r.jsxs("div",{className:"bg-gray-200 p-2 rounded-lg capitalize",children:[r.jsx("h1",{className:"text-center font-bold text-xl",children:"input examples"}),r.jsx(e,{})]})],parameters:{docs:{description:{component:"این یک ورودی است که قابلیت انتخاب سایز دارد."}}}},a={args:{value:"",selectSize:"lg",onChangeValue:x()}},n={render:e=>r.jsx(t,{...e}),args:{selectSize:"sm",value:"asdasdasdad"}},s={args:{value:"",selectSize:"lg",onChangeValue:x()},parameters:{themes:{themeOverride:"dark"}}};var o,l,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    value: '',
    selectSize: 'lg',
    onChangeValue: fn()
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,c,i;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <InputContainer {...args} />;
  },
  args: {
    selectSize: 'sm',
    value: 'asdasdasdad'
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: '',
    selectSize: 'lg',
    onChangeValue: fn()
  },
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const b=["Story","Input","InpuTheme"];export{s as InpuTheme,n as Input,a as Story,b as __namedExportsOrder,_ as default};
