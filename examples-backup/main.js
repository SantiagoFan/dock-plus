import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import demoBlock from './components/demo-block.vue'
import JUI from '~/index'
import '~/theme-chalk/src/index.scss'
/* svg icon 引入文件 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
const reqIcon = require.context('@/icons', false, /\.svg$/)
requireAll(reqIcon)


// 组件应用 demo集合  检索examples/demos 全部
const Demos = []
function importDemos(r) {
  r.keys().forEach(key => {
    Demos.push(r(key).default)
  })
}
importDemos(require.context('@/demos', true, /\.vue$/))
// Demos.map(component => Vue.component(component.name, component))

const app = createApp(App)

// 注册demo组件
Demos.forEach(component => {
  app.component(component.name, component)
})

app.component('demo-block', demoBlock)
app.use(ElementPlus)
app.use(JUI)
app.use(router)

app.mount('#app')