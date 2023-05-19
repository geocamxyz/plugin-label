const c = (n, e = {}, l = "") => {
  const o = document.createElement(n);
  for (let t in e)
    o.setAttribute(t, e[t]);
  return o.innerHTML = l, o;
}, s = (n, e) => (document.getElementById(n) || document.getElementsByTagName("head")[0].prepend(c("STYLE", { type: "text/css" }, e)), !0), m = function(n = {}) {
  let e, l, o, t;
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
  `), this.init = function(r) {
    e = r, t = c("DIV", { class: "geocam-label" }), e.addControl(t, "top"), o = e.store("label"), l = o((a) => {
      a ? (t.innerHTML = a, t.classList.remove("geocam-label-empty")) : (t.innerHTML = "", t.classList.add("geocam-label-empty"));
    });
  }, this.destroy = function() {
    l(), e.wrapper.removeChild(o);
  };
};
export {
  m as label
};
