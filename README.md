# Label
A web component plugin for the [geocamxyz/geocam-viewer](https://github.com/geocamxyz/geocam-viewer) to display a label at the top center of the viewer
### NPM Installation:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-label/src?v2.0.3'
```
or for a particual commit version:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-labelsrc?46bd942'
```
### Import Map (External Loading):
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-label@v2.0.3/dist/label.js
```
or for a particual commit version:
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-label@46bd942/dist/label.js
```
### Usage:
The .js file can be imported into your .html file using the below code (This can be ignored if your using the NPM package).
```
 <script type="module" src="https://cdn.jsdelivr.net/gh/geocamxyz/plugin-label@v2.0.3/dist/label.js"></script>
 ```

 Or with an importmap
 ```
<script type="importmap">
  {
    "imports": {
      "label": "https://cdn.jsdelivr.net/gh/geocamxyz/plugin-label@v2.0.3/dist/label.js"
    }
  }
</script>
```
The plugin can then be imported via a module script or using the npm package and using the below import statement.
```
import "label"
```
### Setup:
The plugin can then be added to the viewer by making the custom element a child of the viewer parent element.  
```
<geocam-viewer>
  <geocam-viewer-label caption="A geocam shot"></geocam-viewer-label>
</geocam-viewer>
```

There is a single attribute setting:
- caption *The text to display in the label.  Updating the attribute will update the label*

NB: Some other plugins eg [geocamxyz/connector-arcgis-map](https://github.com/geocamxyz/connector-arcgis-map) can commandeer the label and override the text set in caption.  In this case you can just include the &lt;geocam-viewer-label> with no caption attribute.
