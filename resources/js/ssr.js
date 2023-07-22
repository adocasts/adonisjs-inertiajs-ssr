import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/vue3'
import Layout from './Layouts/App.vue'

export default function render(page) {
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const page = require(`./Pages/${name}`)
      page.default.layout = page.default.layout || Layout
      return page
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin)
    }
  })
}