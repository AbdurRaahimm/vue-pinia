import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import TodoView from '@/views/TodoView.vue'
import APICRUD from '@/views/APICRUD.vue'
import UpdateData from '@/views/UpdateData.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/todo',
      component: TodoView
    },
    {
      path: "/apicrud",
      children: [
        { path: "", component: APICRUD },
        // { path: ":id", component: SinglePost, props: true },
        { path: ":id/update", component: UpdateData, props: true }
      ],
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router
