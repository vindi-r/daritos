(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{2836:(e,l,s)=>{Promise.resolve().then(s.bind(s,6535))},6535:(e,l,s)=>{"use strict";s.d(l,{EmblaChoice:()=>t});var a=s(5878),c=s(3446),r=s(6837);let n=e=>{let{selected:l,index:s,onClick:c}=e;return(0,a.jsx)("div",{className:"embla-thumbs__slide".concat(l?" embla-thumbs__slide--selected":""),children:(0,a.jsx)("button",{onClick:c,type:"button",className:"embla-thumbs__slide__number",children:s+1})})},t=e=>{let{slides:l,options:s}={options:{},slides:Array.from(Array(10).keys())},[t,i]=(0,c.useState)(0),[d,m]=(0,r.A)(s),[b,o]=(0,r.A)({containScroll:"keepSnaps",dragFree:!0}),_=(0,c.useCallback)(e=>{m&&o&&m.scrollTo(e)},[m,o]),u=(0,c.useCallback)(()=>{m&&o&&(i(m.selectedScrollSnap()),o.scrollTo(m.selectedScrollSnap()))},[m,o,i]);(0,c.useEffect)(()=>{m&&(u(),m.on("select",u).on("reInit",u))},[m,u]);let h=(0,c.useCallback)(()=>{alert("Выбрана картинка: "+(t+1))},[t]);return(0,a.jsxs)("div",{className:"embla",children:[(0,a.jsx)("div",{className:"embla__viewport",ref:d,children:(0,a.jsx)("div",{className:"embla__container",children:l.map(e=>(0,a.jsx)("div",{className:"embla__slide",children:(0,a.jsx)("div",{className:"embla__slide__number",children:e+1})},e))})}),(0,a.jsx)("div",{className:"embla-thumbs",children:(0,a.jsx)("div",{className:"embla-thumbs__viewport",ref:b,children:(0,a.jsx)("div",{className:"embla-thumbs__container",children:l.map(e=>(0,a.jsx)(n,{onClick:()=>_(e),selected:e===t,index:e},e))})})}),(0,a.jsx)("button",{onClick:h,className:"rounded bg-green-200 text-xl p-4 w-full mt-8 active:bg-green-600",children:"OK ВЫБРАТЬ"})]})}}},e=>{var l=l=>e(e.s=l);e.O(0,[837,707,955,358],()=>l(2836)),_N_E=e.O()}]);