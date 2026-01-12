import{c as s,f as U,e as V,h as Z,l as X,G as Y,F as j,n as w,m as q,R as H,V as J,X as K,Y as G,Z as Q,o as ee,L as te,$ as ae,T as re}from"./ui-vendor-CJhJIQXl.js";import{p as ie}from"./chunk-4BX2VUAB-wFh8MI1a.js";import{p as se}from"./treemap-KMMF4GRG-ooGkByc-.js";import"./react-vendor-B-dYggyD.js";import"./core-vendor-BwuuzO-r.js";import"./_baseUniq-LKnmH7ds.js";import"./_basePickBy-DtVcDLzT.js";import"./clone-RfHDRj_C.js";var oe=re.pie,D={sections:new Map,showData:!1},g=D.sections,C=D.showData,le=structuredClone(oe),ne=s(()=>structuredClone(le),"getConfig"),ce=s(()=>{g=new Map,C=D.showData,te()},"clear"),pe=s(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),de=s(()=>g,"getSections"),ge=s(e=>{C=e},"setShowData"),ue=s(()=>C,"getShowData"),R={getConfig:ne,clear:ce,setDiagramTitle:j,getDiagramTitle:Y,setAccTitle:X,getAccTitle:Z,setAccDescription:V,getAccDescription:U,addSection:pe,getSections:de,setShowData:ge,getShowData:ue},fe=s((e,a)=>{ie(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),he={parse:s(async e=>{const a=await se("pie",e);w.debug(a),fe(a,R)},"parse")},me=s(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ve=me,Se=s(e=>{const a=[...e.values()].reduce((r,o)=>r+o,0),$=[...e.entries()].map(([r,o])=>({label:r,value:o})).filter(r=>r.value/a*100>=1).sort((r,o)=>o.value-r.value);return ae().value(r=>r.value)($)},"createPieArcs"),xe=s((e,a,$,y)=>{w.debug(`rendering pie chart
`+e);const r=y.db,o=q(),T=H(r.getConfig(),o.pie),A=40,l=18,p=4,c=450,u=c,f=J(a),n=f.append("g");n.attr("transform","translate("+u/2+","+c/2+")");const{themeVariables:i}=o;let[b]=K(i.pieOuterStrokeWidth);b??=2;const E=T.textPosition,d=Math.min(u,c)/2-A,W=G().innerRadius(0).outerRadius(d),L=G().innerRadius(d*E).outerRadius(d*E);n.append("circle").attr("cx",0).attr("cy",0).attr("r",d+b/2).attr("class","pieOuterCircle");const h=r.getSections(),M=Se(h),O=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(t=>{m+=t});const _=M.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),v=Q(O);n.selectAll("mySlices").data(_).enter().append("path").attr("d",W).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(_).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+L.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const k=[...h.entries()].map(([t,x])=>({label:t,value:x})),S=n.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,x)=>{const z=l+p,I=z*k.length/2,N=12*l,B=x*z-I;return"translate("+N+","+B+")"});S.append("rect").attr("width",l).attr("height",l).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),S.append("text").attr("x",l+p).attr("y",l-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const P=Math.max(...S.selectAll("text").nodes().map(t=>t?.getBoundingClientRect().width??0)),F=u+A+l+p+P;f.attr("viewBox",`0 0 ${F} ${c}`),ee(f,c,F,T.useMaxWidth)},"draw"),we={draw:xe},_e={parser:he,db:R,renderer:we,styles:ve};export{_e as diagram};
