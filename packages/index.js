/*
  本文件由build/build-entry.js脚本自动生成，切勿修改
*/
import AdvancedQuery from './advanced-query'
import BgSelector from './bg-selector'
import LinkViewer from './link-viewer'
import PositionSelector from './position-selector'
import Qrcode from './qrcode'
import SkuSpec from './sku-spec'
import SkuTable from './sku-table'
import TitleBar from './title-bar'

const version = '0.3.5'

// 存储组件列表
const components = [
  AdvancedQuery,
  BgSelector,
  LinkViewer,
  PositionSelector,
  Qrcode,
  SkuSpec,
  SkuTable,
  TitleBar
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
  AdvancedQuery,
  BgSelector,
  LinkViewer,
  PositionSelector,
  Qrcode,
  SkuSpec,
  SkuTable,
  TitleBar
}
