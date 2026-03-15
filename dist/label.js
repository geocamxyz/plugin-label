const u = (l, e = {}, n = "") => {
  const t = document.createElement(l);
  for (let o in e)
    t.setAttribute(o, e[o]);
  return t.innerHTML = n, t;
}, d = (l, e) => (document.getElementById(l) || document.getElementsByTagName("head")[0].prepend(u("STYLE", { type: "text/css" }, e)), !0), g = function(l = {}) {
  let e, n, t, o;
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
  `), this.init = function(r) {
    e = r, o = u("DIV", { class: "geocam-label" }), e.addControl(o, "top"), t = e.store("label"), n = t((i) => {
      i ? (o.innerHTML = i, o.classList.remove("geocam-label-empty")) : (o.innerHTML = "", o.classList.add("geocam-label-empty"));
    });
  }, this.destroy = function() {
    n(), e.wrapper.removeChild(t);
  };
};
class b extends HTMLElement {
  static get observedAttributes() {
    return ["caption"];
  }
  constructor() {
    super(), this.plugin = null, this.viewer = null, console.log("label init");
  }
  attributeChangedCallback(e, n, t) {
    console.log("attribute changed", e, t);
    const o = this, c = function(r, i) {
      const a = o.closest("geocam-viewer");
      if (!a) return;
      const s = a.viewer;
      s && s.stores && typeof s.stores.label == "function" ? s.stores.label(i) : setTimeout(() => c(r, i), 100);
    };
    c(e, t);
  }
  connectedCallback() {
    console.log("label connected");
    const e = this.closest("geocam-viewer");
    if (!e) {
      console.error("GeocamViewerLabel must be a child of GeocamViewer");
      return;
    }
    const n = () => {
      const t = e.viewer;
      if (t && typeof t.plugin == "function") {
        if (this.plugin) return;
        this.viewer = t, this.plugin = new g(), this.viewer.plugin(this.plugin);
      } else
        setTimeout(n, 50);
    };
    n();
  }
  disconnectedCallback() {
    this.plugin && typeof this.plugin.destroy == "function" && this.plugin.destroy(), this.plugin = null, this.viewer = null, console.log("labe disconnected");
  }
}
window.customElements.define("geocam-viewer-label", b);
export {
  b as GeocamViewerLabel
};
