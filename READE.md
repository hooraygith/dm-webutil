# DM-UI

## Install
```shell
npm install --registry=https://registry.npm.taobao.org git+ssh://git@git.dianmi365.com:18122/yuwen/dm-ui.git -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import dmUi from 'dm-ui'

Vue.use(dmUi)

// or
import {
  Select,
  Button
  // ...
} from 'dm-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

## Browser Support
Modern browsers and Internet Explorer 10+.

## LICENSE
MIT
