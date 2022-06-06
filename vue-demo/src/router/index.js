import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Draggable from '@/pages/DraggableDemo.vue'
import VantDemo from '@/pages/VantDemo.vue'
import VueDirectiveDemo from '@/pages/VueDirectiveDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/vueDirectiveDemo',
    },
    {
      path: '/vueDirectiveDemo',
      name: 'vueDirectiveDemo',
      component: VueDirectiveDemo
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/draggableDemo',
      name: 'draggableDemo',
      component: Draggable
    },
    {
      path: '/vantDemo',
      name: 'vantDemo',
      component: VantDemo
    }
  ]
})
