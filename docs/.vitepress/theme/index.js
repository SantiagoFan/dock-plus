import DefaultTheme from 'vitepress/theme'
import DockPlus from '../../../packages/index.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './styles/vars.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 使用组件库的 install 方法注册所有组件
    app.use(DockPlus)

    // 使用element-plus
    app.use(ElementPlus)
  }
}