(function(i,l){typeof exports=="object"&&typeof module<"u"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(i=typeof globalThis<"u"?globalThis:i||self,l(i.label={}))})(this,(function(i){"use strict";const l=(s,e={},n="")=>{const t=document.createElement(s);for(let o in e)t.setAttribute(o,e[o]);return t.innerHTML=n,t},g=(s,e)=>(document.getElementById(s)||document.getElementsByTagName("head")[0].prepend(l("STYLE",{type:"text/css"},e)),!0),m=function(s={}){let e,n,t,o;g("geocam-compass-label",`
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
  `),this.init=function(u){e=u,o=l("DIV",{class:"geocam-label"}),e.addControl(o,"top"),t=e.store("label"),n=t(c=>{c?(o.innerHTML=c,o.classList.remove("geocam-label-empty")):(o.innerHTML="",o.classList.add("geocam-label-empty"))})},this.destroy=function(){n(),e.wrapper.removeChild(t)}};class d extends HTMLElement{static get observedAttributes(){return["caption"]}constructor(){super(),this.plugin=null,this.viewer=null,console.log("label init")}attributeChangedCallback(e,n,t){console.log("attribute changed",e,t);const o=this,a=function(u,c){const b=o.closest("geocam-viewer");if(!b)return;const r=b.viewer;r&&r.stores&&typeof r.stores.label=="function"?r.stores.label(c):setTimeout(()=>a(u,c),100)};a(e,t)}connectedCallback(){console.log("label connected");const e=this.closest("geocam-viewer");if(!e){console.error("GeocamViewerLabel must be a child of GeocamViewer");return}const n=()=>{const t=e.viewer;if(t&&typeof t.plugin=="function"){if(this.plugin)return;this.viewer=t,this.plugin=new m,this.viewer.plugin(this.plugin)}else setTimeout(n,50)};n()}disconnectedCallback(){this.plugin&&typeof this.plugin.destroy=="function"&&this.plugin.destroy(),this.plugin=null,this.viewer=null,console.log("labe disconnected")}}window.customElements.define("geocam-viewer-label",d),i.GeocamViewerLabel=d,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));
