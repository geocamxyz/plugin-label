import { label } from './lib/label.js';

export class GeocamViewerLabel extends HTMLElement {
  constructor() {
    super();
    this.plugin = null;
    // this.yaw = this.getAttribute('yaw') || 0;
    console.log("label init");
  }

  connectedCallback() {
    console.log("label connected");
    const node = this;
    const parent = this.parentNode;
    if (parent.viewer && parent.viewer.plugin) {
      // Call a method on the parent
        this.plugin = new label();
  parent.viewer.plugin(this.plugin);
    } else {
      console.error(
        "GeocamViewerLabel must be a child of GeocamViewer"
      );
    }
  }

  disconnectedCallback() {
    this.plugin = null;
    console.log("labe disconnected");
    // Clean up the viewer
  }
}

window.customElements.define(
  "geocam-viewer-label",
  GeocamViewerLabel
);
