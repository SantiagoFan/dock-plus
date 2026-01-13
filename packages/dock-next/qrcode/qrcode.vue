<template>
  <div>
    <canvas ref="canvasRef" class="qrcode-container"></canvas>
  </div>
</template>
<script setup>
import{ ref, watch,nextTick}  from "vue"
defineOptions({
  name: 'MlQrcode'
})

import QRCode from "qrcode";

const props =  defineProps({
    text: {
      type: String,
      default: ' '
    },
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    level: {
      type: String,
      default: 'L'
    },
    colorDark: {
      type: String,
      default: '#000000'
    },
    colorLight: {
      type: String,
      default: '#ffffff'
    }
})

const canvasRef = ref(null)
const error = ref(null)

const updateQR = async () => {
  nextTick(()=>{
    try {
    error.value = null
    QRCode.toCanvas(canvasRef.value, props.text, {
        width: props.width,
        height: props.height,
        errorCorrectionLevel: props.level,
        color: {
          light: props.colorLight,
          dark: props.colorDark,
        },
        margin: 1
      })
    } catch (err) {
      console.error('二维码生成失败:', err)
      error.value = err.message
    }
  })

  
  
 


  //  this.qrcode = QRCode. QRCode(this.$refs.qrCodeDiv, {

  //       colorDark: this.colorDark,
  //       colorLight: this.colorLight,
  //     })
}
// 初始渲染
// onMounted(updateQR)

// // 响应 value 或尺寸变化
watch(() => [props.text, props.width, props.height], updateQR, { deep: true, immediate: true })
 
</script>

