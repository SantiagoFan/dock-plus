/*
  本文件由build/build-entry.js脚本自动生成，切勿修改
*/
import MlAdvancedQuery from './advanced-query'
import MlBgSelector from './bg-selector'
import MlLinkViewer from './link-viewer'
import MlPositionSelector from './position-selector'
import MlQrcode from './qrcode'
import MlSkuSpec from './sku-spec'
import MlSkuTable from './sku-table'
import MlSvgIcon from './svg-icon'
import MlTitleBar from './title-bar'

const version = '0.3.5'

// 存储组件列表
const components = [
  MlAdvancedQuery,
  MlBgSelector,
  MlLinkViewer,
  MlPositionSelector,
  MlQrcode,
  MlSkuSpec,
  MlSkuTable,
  MlSvgIcon,
  MlTitleBar
]

// 定义 install 方法，接收 app 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = app => {
  // 判断是否安装
  if (install.installed) return false
  // 遍历注册全局组件
  components.forEach(Component => {
    if (Component.install) {
      app.use(Component)
    } else if (Component.name) {
      app.component(Component.name, Component)
    }
  })
};

/* istanbul ignore if */
// 判断是否是直接script引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version,
  MlAdvancedQuery,
  MlBgSelector,
  MlLinkViewer,
  MlPositionSelector,
  MlQrcode,
  MlSkuSpec,
  MlSkuTable,
  MlSvgIcon,
  MlTitleBar
}
