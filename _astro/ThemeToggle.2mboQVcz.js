import{j as i}from"./jsx-runtime.D_zvdyIk.js";import{u as f,B as w}from"./PosthogProvider.DHrDBjp9.js";import{r as c}from"./index._4BMK3ry.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase()),d=t=>{const e=y(t);return e.charAt(0).toUpperCase()+e.slice(1)},h=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim(),C=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=c.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:a="",children:s,iconNode:n,...m},p)=>c.createElement("svg",{ref:p,...x,width:e,height:e,stroke:t,strokeWidth:r?Number(o)*24/Number(e):o,className:h("lucide",a),...!s&&!C(m)&&{"aria-hidden":"true"},...m},[...n.map(([u,k])=>c.createElement(u,k)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(t,e)=>{const o=c.forwardRef(({className:r,...a},s)=>c.createElement(j,{ref:s,iconNode:e,className:h(`lucide-${g(d(t))}`,`lucide-${t}`,r),...a}));return o.displayName=d(t),o};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],A=l("moon",v);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],b=l("sun",M);function $({iconOnly:t=!1,variant:e="ghost",size:o="md",...r}){const{mode:a,toggle:s}=f(),n=a==="dark"||a==="system"&&typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches;return i.jsxs(w,{variant:e,size:o,onClick:s,title:n?"Switch to light mode":"Switch to dark mode",...r,children:[n?i.jsx(b,{size:o==="sm"?16:o==="lg"?20:18}):i.jsx(A,{size:o==="sm"?16:o==="lg"?20:18}),!t&&i.jsx("span",{children:n?"Light":"Dark"})]})}export{$ as T,l as c};
