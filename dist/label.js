const a = (o, e = {}, t = "") => {
  const n = document.createElement(o);
  for (let l in e)
    n.setAttribute(l, e[l]);
  return n.innerHTML = t, n;
}, s = (o, e) => (document.getElementById(o) || document.getElementsByTagName("head")[0].prepend(a("STYLE", { type: "text/css" }, e)), !0), r = function(o = {}) {
  let e, t, n, l;
  s("geocam-compass-label", `
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
  `), this.init = function(i) {
    e = i, l = a("DIV", { class: "geocam-label" }), e.addControl(l, "top"), n = e.store("label"), t = n((c) => {
      c ? (l.innerHTML = c, l.classList.remove("geocam-label-empty")) : (l.innerHTML = "", l.classList.add("geocam-label-empty"));
    });
  }, this.destroy = function() {
    t(), e.wrapper.removeChild(n);
  };
};
class d extends HTMLElement {
  constructor() {
    super(), this.plugin = null, console.log("label init");
  }
  connectedCallback() {
    console.log("label connected");
    const e = this.parentNode;
    e.viewer && e.viewer.plugin ? (this.plugin = new r(), e.viewer.plugin(this.plugin)) : console.error(
      "GeocamViewerLabel must be a child of GeocamViewer"
    );
  }
  disconnectedCallback() {
    this.plugin = null, console.log("labe disconnected");
  }
}
window.customElements.define(
  "geocam-viewer-label",
  d
);
export {
  d as GeocamViewerLabel
};
