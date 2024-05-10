import { label } from "./lib/label.js";

export class GeocamViewerLabel extends HTMLElement {
  static get observedAttributes() {
    return ["caption"];
  }

  constructor() {
    super();
    this.plugin = null;
    // this.yaw = this.getAttribute('yaw') || 0;
    console.log("label init");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed", name, newValue);
    const that = this;

    const debouceAttrChange = function (name, val) {
         const viewer = that.parentNode.viewer
      if (viewer && viewer["label"]) {
          viewer.stores["label"](val);
      } else {
        setTimeout(() => debouceAttrChange(name, val), 100);
      }
    };

    debouceAttrChange(name, newValue);
  }

  connectedCallback() {
    console.log("label connected");
    const node = this;
    this.plugin = new label();
    const parent = this.parentNode;
    this.viewer = parent.viewer;
    if ( this.viewer &&  this.viewer.plugin) {
      // Call a method on the parent
        this.viewer.plugin(this.plugin);
    } else {
      console.error("GeocamViewerLabel must be a child of GeocamViewer");
    }
  }

  disconnectedCallback() {
    this.plugin = null;
    this.viewer = null;
    console.log("labe disconnected");
    // Clean up the viewer
  }
}

window.customElements.define("geocam-viewer-label", GeocamViewerLabel);
