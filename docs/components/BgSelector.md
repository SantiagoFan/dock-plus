# 背景颜色选择器

用于选择背景颜色的组件。

## 基础用法

```vue
<template>
  <div>
    <j-bg-selector v-model="bgColor" />
    <div :style="{ backgroundColor: bgColor, width: '200px', height: '100px', marginTop: '10px' }">
      选中的背景色
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const bgColor = ref('#ffffff')
    
    return {
      bgColor
    }
  }
}
</script>
```

## Attributes

| 参数 | 说明 | 类型 | 可值 | 默认值 |
|------|------|------|------|--------|
| modelValue | 绑定值 | string | - | - |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|---------|
| update:modelValue | 绑定值变化时触发 | 选中的颜色值 |