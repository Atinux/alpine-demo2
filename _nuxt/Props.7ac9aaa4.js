import V from"./ProseTh.6d58d263.js";import B from"./ProseTr.e4c9e087.js";import g from"./ProseThead.ac68265f.js";import C from"./ProseCodeInline.e73b04e0.js";import N from"./ProseTd.cc6beb62.js";import R from"./ProseTbody.264674d3.js";import b from"./ProseTable.d2aa7ea7.js";import"./app.config.400c2c73.js";import{u as S}from"./asyncData.f353c3e1.js";import{k as A}from"./index.fcdf0b90.js";import{_ as F}from"./_plugin-vue_export-helper.c27b6911.js";import{F as I,G as c,N as o,$ as l,W as e,V as r,X as d,a0 as s,O as Y,U as p,T as E,Y as m}from"./runtime-core.esm-bundler.60e7e71f.js";import"./entry.5833b75e.js";import"./Icon.2571d11f.js";const G=I({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const k=`/api/component-meta/${A(t.of)}`,{data:h}=await S(t.of,()=>$fetch(k),"$MASIKrDASR"),i=c(()=>h.value.props.filter(a=>{var n;return!((n=a.tags)!=null&&n.ignore.includes(a))})),w=c(()=>{var a;return t.required!==void 0?t.required:(a=i.value)==null?void 0:a.find(n=>n.required!==void 0)}),q=c(()=>{var a;return t.values!==void 0?t.values:(a=i.value)==null?void 0:a.find(n=>n.values)}),f=c(()=>{var a;return t.description!==void 0?t.description:(a=i.value)==null?void 0:a.find(n=>n.description)}),y=c(()=>{var a;return t.default!==void 0?t.default:(a=i.value)==null?void 0:a.find(n=>n.default)});return{meta:h,properties:i,showRequired:w,showValues:q,showDescription:f,showDefault:y}}});function K(t,k,h,i,w,q){var v,D,P;const f=V,y=B,a=g,n=C,_=N,T=R,$=b;return t.meta&&((v=t.meta)!=null&&v.props)&&((P=(D=t.meta)==null?void 0:D.props)!=null&&P.length)?(o(),l($,{key:0},{default:e(()=>[r(a,null,{default:e(()=>[r(y,null,{default:e(()=>[r(f,null,{default:e(()=>[d("Prop")]),_:1}),r(f,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(o(),l(f,{key:0},{default:e(()=>[d(" Required ")]),_:1})):s("",!0),t.showDefault?(o(),l(f,{key:1},{default:e(()=>[d(" Default ")]),_:1})):s("",!0),t.showValues?(o(),l(f,{key:2},{default:e(()=>[d(" Values ")]),_:1})):s("",!0),t.showDescription?(o(),l(f,{key:3},{default:e(()=>[d(" Description ")]),_:1})):s("",!0)]),_:1})]),_:1}),r(T,null,{default:e(()=>[(o(!0),Y(E,null,p(t.properties,u=>(o(),l(y,{key:u.name},{default:e(()=>[r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(o(),l(_,{key:0},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):s("",!0),t.showDefault?(o(),l(_,{key:1},{default:e(()=>[u.default?(o(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):s("",!0)]),_:2},1024)):s("",!0),t.showValues?(o(),l(_,{key:2},{default:e(()=>[u.values?(o(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(o(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):s("",!0),t.showDescription?(o(),l(_,{key:3},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.description),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):s("",!0)}const te=F(G,[["render",K]]);export{te as default};
