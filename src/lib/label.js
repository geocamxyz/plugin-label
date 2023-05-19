const node = (name, attrs = {}, content = "") => {
  const node = document.createElement(name);
  for (let i in attrs) {
    node.setAttribute(i, attrs[i]);
  }
  node.innerHTML = content;
  return node;
};

const injectStyle = (id, rules) => {
  if (!document.getElementById(id)) {
  document
    .getElementsByTagName("head")[0]
    .prepend(node("STYLE", { type: "text/css" }, rules));
  }
  return true;
};

export const label = function (config = {}) {
  let viewer,
  unsub,
  label,
  labelEl;

  const STYLES = `
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
  `

  injectStyle('geocam-compass-label',STYLES);

  this.init = function (geocamViewer) {
    viewer = geocamViewer;
    labelEl = node("DIV",{class: 'geocam-label'});
    viewer.addControl(labelEl, "top");
    label = viewer.store('label')
    unsub = label((l) => {
      if (l) {
         labelEl.innerHTML = l;
         labelEl.classList.remove('geocam-label-empty')
      } else {
        labelEl.innerHTML = '';
        labelEl.classList.add('geocam-label-empty')
      }
    })
  };

  this.destroy = function() {
    unsub();
    viewer.wrapper.removeChild(label);
  }


};