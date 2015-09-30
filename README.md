# `ng-haraway`

```js
import Haraway from 'npm:ng-haraway';
angular.module('app', [Haraway]);
```

```html
<button
  haraway-chooser
  ng-model="files"
  profile="images"
  multiple
  auto-upload
  />Choose Some files</button>

<div ng-repeat="file in files">

  <haraway-preview
    ng-model="file"
    width="150"
    height="150"
    ></haraway-preview>

</div>
```
