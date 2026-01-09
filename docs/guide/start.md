# 快速上手
本节将介绍如何在项目中安装和使用 dock-next。
<demo></demo>


## 安装

使用 npm 安装：

```bash
npm install dock-next
```

或使用 yarn：

```bash
yarn add dock-next
```

## 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import JoinUI from 'dock-next'
import 'dock-next/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(JoinUI)
app.mount('#app')
```

## 按需引入

借助插件可以实现按需加载：

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Button, Input } from 'dock-next'

const app = createApp(App)
app.use(Button)
app.use(Input)
app.mount('#app')
```

## 使用组件

安装并引入组件库后，就可以在项目中使用组件了：

```vue
<template>
  <div>
    <j-advanced-query v-model="queryData" :fields="fields" @change="handleQuery" />
    <j-bg-selector v-model="bgColor" />
    <j-position-selector v-model:lng="lng" v-model:lat="lat" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const queryData = ref({})
    const bgColor = ref('')
    const lng = ref(116.397502)
    const lat = ref(39.908802)
    
    const fields = ref([
      { name: 'name', label: '姓名', type: 'text' },
      { name: 'age', label: '年龄', type: 'number' }
    ])
    
    const handleQuery = () => {
      console.log('Query changed:', queryData.value)
    }
    
    return {
      queryData,
      bgColor,
      lng,
      lat,
      fields,
      handleQuery
    }
  }
}
</script>
```