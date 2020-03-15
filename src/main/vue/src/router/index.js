import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BoardList from '@/components/board/list/BoardList';
import BoardDetail from "@/components/board/detail/BoardDetail";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/html/boards',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/html/boards/:id',
      name: 'BoardDetail',
      component: BoardDetail,
      props: true
    }
  ]
})
