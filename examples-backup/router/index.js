import { createRouter, createWebHistory } from 'vue-router'
import navConf from '@/nav.config.json'

let routes = []

Object.keys(navConf).forEach(header => {
  routes = routes.concat(navConf[header])
})

let addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.name === 'site-index') {
        route.component = () => import(`../docs/introduce.md`)
      } else {
        route.component = () => import(`../docs/${route.name}.md`)
      }
    }
  })
}
addComponent(routes)
let availableRoutes = routes.filter(item => item.path)

// 添加默认路由重定向
availableRoutes.push({
  path: '/',
  redirect: '/introduce'
})

export default createRouter({
  history: createWebHistory(),
  routes: availableRoutes
})