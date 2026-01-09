<template>
  <el-popover class="ml-linkViewer" placement="bottom" width="286" :trigger="trigger">
      <el-input :model-value="url" disabled size="small" style="width:200px;" />
      <el-button
        v-copyText="url" 
        v-copyText:callback="clipboardSuccess"
        size="small"
        type="primary"
      >复制</el-button>
      <template #reference>
        <slot></slot>
      </template>
      <div style="text-align: center;padding:10px;">
        <qrcode :width="200" :height="200" :text='url'></qrcode>
      </div>
    </el-popover>
</template>

<script>
import { getCurrentInstance } from 'vue'
import qrcode from '../qrcode'
import copyText from '../utils/copyText'

export default {
  name: 'MlLinkViewer',
  components: { qrcode },
  directives: { copyText },
  props: {
    url: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: 'click'
    }
  },
  setup() {
    const instance = getCurrentInstance()

    const clipboardSuccess = () => {
      instance.appContext.config.globalProperties.$message({ 
        message: '复制成功', 
        type: 'success', 
        duration: 1500 
      })
    }

    return {
      clipboardSuccess
    }
  }
}
</script>