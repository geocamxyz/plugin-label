import { label } from "./lib/label.js";

export class GeocamViewerLabel extends HTMLElement {
  static get observedAttributes() {
    return ["caption"];
  }

  constructor() {
    super();
    this.plugin = null;
    this.viewer = null;
    // this.yaw = this.getAttribute('yaw') || 0;
    console.log("label init");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed", name, newValue);
    const that = this;

    const debouceAttrChange = function (name, val) {
      const host = that.closest("geocam-viewer");
      if (!host) return;
      const viewer = host.viewer;
      if (viewer && viewer.stores && typeof viewer.stores.label === "function") {
        viewer.stores.label(val);
      } else {
        setTimeout(() => debouceAttrChange(name, val), 100);
      }
    };

    debouceAttrChange(name, newValue);
  }

  connectedCallback() {
    console.log("label connected");
    const host = this.closest("geocam-viewer");
    if (!host) {
      console.error("GeocamViewerLabel must be a child of GeocamViewer");
      return;
    }

    const attach = () => {
      const viewer = host.viewer;
      if (viewer && typeof viewer.plugin === "function") {
        if (this.plugin) return;
        this.viewer = viewer;
        this.plugin = new label();
        this.viewer.plugin(this.plugin);
      } else {
        setTimeout(attach, 50);
      }
    };

    attach();
  }

  disconnectedCallback() {
    if (this.plugin && typeof this.plugin.destroy === "function") {
      this.plugin.destroy();
    }
    this.plugin = null;
    this.viewer = null;
    console.log("labe disconnected");
    // Clean up the viewer
  }
}

window.customElements.define("geocam-viewer-label", GeocamViewerLabel);
