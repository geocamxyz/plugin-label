(function(t,l){typeof exports=="object"&&typeof module<"u"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(t=typeof globalThis<"u"?globalThis:t||self,l(t.label={}))})(this,function(t){"use strict";const l=(i,e={},c="")=>{const o=document.createElement(i);for(let n in e)o.setAttribute(n,e[n]);return o.innerHTML=c,o},r=(i,e)=>(document.getElementById(i)||document.getElementsByTagName("head")[0].prepend(l("STYLE",{type:"text/css"},e)),!0),d=function(i={}){let e,c,o,n;r("geocam-compass-label",`
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
  `),this.init=function(u){e=u,n=l("DIV",{class:"geocam-label"}),e.addControl(n,"top"),o=e.store("label"),c=o(s=>{s?(n.innerHTML=s,n.classList.remove("geocam-label-empty")):(n.innerHTML="",n.classList.add("geocam-label-empty"))})},this.destroy=function(){c(),e.wrapper.removeChild(o)}};class a extends HTMLElement{constructor(){super(),this.plugin=null,console.log("label init")}connectedCallback(){console.log("label connected");const e=this.parentNode;e.viewer&&e.viewer.plugin?(this.plugin=new d,e.viewer.plugin(this.plugin)):console.error("GeocamViewerLabel must be a child of GeocamViewer")}disconnectedCallback(){this.plugin=null,console.log("labe disconnected")}}window.customElements.define("geocam-viewer-label",a),t.GeocamViewerLabel=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
