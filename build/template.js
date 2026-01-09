module.exports = {
    vueTemplate: (input_name,compoenntName) => {
        // eg:Tatile-bar => titleBar
        // compoenntName = compoenntName.charAt(0).toLowerCase() + compoenntName.slice(1)
        return `<template>

  <div class="ml-${input_name}">

    ${compoenntName}

  </div>
</template>

<script>
export default {
  name: 'Ml${compoenntName}', 

  data () {

    return {
    }

  }, 

  props: {

  }, 

  methods: {}
}
</script>

<style lang="scss" scope>
.ml-${input_name}{}
</style>
`
    },
    entryTemplate: compoenntName => {

        return `import ${compoenntName} from './${compoenntName}.vue'

${compoenntName}.install = function (Vue) {
  Vue.component(${compoenntName}.name, ${compoenntName})
}

export default ${compoenntName}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(${compoenntName}.name, ${compoenntName})
}
`
    },
    mdDocs: (title) => {

        return `# ` + title + `

---

## 基础用法

\`\`\`vue
<template>
  <div>
    <!-- 组件使用示例 -->
  </div>
</template>

<script>
import { ` + title.replace(' 组件', '') + ` } from 'dock-plus'

export default {
  components: { ` + title.replace(' 组件', '') + ` }
}
</script>
\`\`\`

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| - | - | - | - | - |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| - | - | - |

`}
}