# 高级查询

用于构建复杂查询条件的组件。

## 基础用法

```vue
<template>
  <div>
    <j-advanced-query v-model="queryData" :fields="fields" @change="handleQuery" />
    <div style="margin-top: 20px;">
      <pre>{{ JSON.stringify(queryData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const queryData = ref({})
    
    const fields = ref([
      { 
        name: 'name', 
        label: '姓名', 
        type: 'text',
        placeholder: '请输入姓名'
      },
      { 
        name: 'age', 
        label: '年龄', 
        type: 'number',
        min: 0,
        max: 120
      },
      { 
        name: 'status', 
        label: '状态', 
        type: 'select',
        options: [
          { label: '启用', value: 'enabled' },
          { label: '禁用', value: 'disabled' }
        ]
      }
    ])
    
    const handleQuery = () => {
      console.log('查询条件:', queryData.value)
    }
    
    return {
      queryData,
      fields,
      handleQuery
    }
  }
}
</script>
```

## Attributes

| 参数 | 说明 | 类型 | 可值 | 默认值 |
|------|------|------|------|--------|
| modelValue | 绑定值 | object | - | {} |
| fields | 查询字段配置 | array | - | [] |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|---------|
| change | 查询条件变化时触发 | - |
| update:modelValue | 绑定值变化时触发 | 新的查询条件 |