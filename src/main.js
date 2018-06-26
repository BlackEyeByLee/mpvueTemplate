import Vue from 'vue'
import store from '@/store'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)

// 引入 WeUI.css文件
import '@/styles/weui/weui.css'

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    pages: ['pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
    // tabBar: {}
  }
}
