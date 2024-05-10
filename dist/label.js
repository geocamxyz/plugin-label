const r = (o, e = {}, n = "") => {
  const l = document.createElement(o);
  for (let t in e)
    l.setAttribute(t, e[t]);
  return l.innerHTML = n, l;
}, d = (o, e) => (document.getElementById(o) || document.getElementsByTagName("head")[0].prepend(r("STYLE", { type: "text/css" }, e)), !0), b = function(o = {}) {
  let e, n, l, t;
  d("geocam-compass-label", `
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
  `), this.init = function(s) {
    e = s, t = r("DIV", { class: "geocam-label" }), e.addControl(t, "top"), l = e.store("label"), n = l((i) => {
      i ? (t.innerHTML = i, t.classList.remove("geocam-label-empty")) : (t.innerHTML = "", t.classList.add("geocam-label-empty"));
    });
  }, this.destroy = function() {
    n(), e.wrapper.removeChild(l);
  };
};
class u extends HTMLElement {
  static get observedAttributes() {
    return ["caption"];
  }
  constructor() {
    super(), this.plugin = null, console.log("label init");
  }
  attributeChangedCallback(e, n, l) {
    console.log("attribute changed", e, l);
    const t = this, c = function(s, i) {
      const a = t.parentNode.viewer;
      a && a.label ? a.stores.label(i) : setTimeout(() => c(s, i), 100);
    };
    c(e, l);
  }
  connectedCallback() {
    console.log("label connected"), this.plugin = new b();
    const e = this.parentNode;
    this.viewer = e.viewer, this.viewer && this.viewer.plugin ? this.viewer.plugin(this.plugin) : console.error("GeocamViewerLabel must be a child of GeocamViewer");
  }
  disconnectedCallback() {
    this.plugin = null, this.viewer = null, console.log("labe disconnected");
  }
}
window.customElements.define("geocam-viewer-label", u);
export {
  u as GeocamViewerLabel
};
