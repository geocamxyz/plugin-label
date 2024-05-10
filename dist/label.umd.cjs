(function(o,l){typeof exports=="object"&&typeof module<"u"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(o=typeof globalThis<"u"?globalThis:o||self,l(o.label={}))})(this,function(o){"use strict";const l=(i,e={},s="")=>{const n=document.createElement(i);for(let t in e)n.setAttribute(t,e[t]);return n.innerHTML=s,n},b=(i,e)=>(document.getElementById(i)||document.getElementsByTagName("head")[0].prepend(l("STYLE",{type:"text/css"},e)),!0),m=function(i={}){let e,s,n,t;b("geocam-compass-label",`
  .geocam-label {
    background-color: rgba(255,255,255,0.5);
    padding: 0.25em 0.5em;
    border-radius: 4px;
    color: black;
    text-shadow: 0px 0px 2px white;
    font-size: 0.875rem;
  }
  .geocam-label-empty {
    background-color: rgba(255,255,255,0);
  }
  `),this.init=function(r){e=r,t=l("DIV",{class:"geocam-label"}),e.addControl(t,"top"),n=e.store("label"),s=n(c=>{c?(t.innerHTML=c,t.classList.remove("geocam-label-empty")):(t.innerHTML="",t.classList.add("geocam-label-empty"))})},this.destroy=function(){s(),e.wrapper.removeChild(n)}};class u extends HTMLElement{static get observedAttributes(){return["caption"]}constructor(){super(),this.plugin=null,console.log("label init")}attributeChangedCallback(e,s,n){console.log("attribute changed",e,n);const t=this,a=function(r,c){const d=t.parentNode.viewer;d&&d.label?d.stores.label(c):setTimeout(()=>a(r,c),100)};a(e,n)}connectedCallback(){console.log("label connected"),this.plugin=new m;const e=this.parentNode;this.viewer=e.viewer,this.viewer&&this.viewer.plugin?this.viewer.plugin(this.plugin):console.error("GeocamViewerLabel must be a child of GeocamViewer")}disconnectedCallback(){this.plugin=null,this.viewer=null,console.log("labe disconnected")}}window.customElements.define("geocam-viewer-label",u),o.GeocamViewerLabel=u,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
