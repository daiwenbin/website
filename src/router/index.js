import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import sytem from '@/components/sytem/sytem'
import union from '@/components/union/union'
import about from '@/components/about/about'
import helpcj from '@/components/help-center/help-center'
import activ from '@/components/activity/activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/sytem',
      name: 'sytem',
      component: sytem
    },
    {
      path: '/union',
      name: 'union',
      component: union
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/activ',
      name: 'activ',
      component: activ
    },
    {
      path: '/helpcj',
      name: 'activ',
      component: helpcj
    }
  ]
})
