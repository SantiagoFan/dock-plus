# 二维码

用于生成和展示二维码的组件。

## 基础用法

```vue
<template>
  <div>
    <qrcode text="https://www.example.com" :width="200" :height="200" />
  </div>
</template>
```

## Attributes

| 参数 | 说明 | 类型 | 可值 | 默认值 |
|------|------|------|------|--------|
| text | 二维码内容 | string | - | - |
| width | 二维码宽度 | number | - | 200 |
| height | 二维码高度 | number | - | 200 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|---------|
| - | - | - |