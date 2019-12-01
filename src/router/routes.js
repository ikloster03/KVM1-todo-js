import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/lists',
    name: 'lists',
    component: () =>
      import(/* webpackChunkName: "lists" */ '@/views/Lists.vue'),
  },
]
