import Vue, { VNode } from "vue"
import App from "@/App.vue"

new Vue({
  render: (h): VNode => h(App)
}).$mount("#app")