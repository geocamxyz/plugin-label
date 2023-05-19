(function(o,l){typeof exports=="object"&&typeof module<"u"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(o=typeof globalThis<"u"?globalThis:o||self,l(o.label={}))})(this,function(o){"use strict";const l=(i,e={},a="")=>{const n=document.createElement(i);for(let t in e)n.setAttribute(t,e[t]);return n.innerHTML=a,n},s=(i,e)=>(document.getElementById(i)||document.getElementsByTagName("head")[0].prepend(l("STYLE",{type:"text/css"},e)),!0),r=function(i={}){let e,a,n,t;s("geocam-compass-label",`
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
  `),this.init=function(d){e=d,t=l("DIV",{class:"geocam-label"}),e.addControl(t,"top"),n=e.store("label"),a=n(c=>{c?(t.innerHTML=c,t.classList.remove("geocam-label-empty")):(t.innerHTML="",t.classList.add("geocam-label-empty"))})},this.destroy=function(){a(),e.wrapper.removeChild(n)}};o.label=r,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
