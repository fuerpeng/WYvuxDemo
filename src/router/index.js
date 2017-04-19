import Vue from 'vue'
import Router from 'vue-router'
import AskLeave from '@/components/askLeave'
import history from '@/components/history'
import Sure from '@/components/Sure'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: history
    },
    {
      path: '/askLeave',
      component: AskLeave
    },
    {
      path: '/history',
      component: history
    },
    {
      path: '/sure',
      component: Sure
    }
  ]
})
