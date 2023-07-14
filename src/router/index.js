import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/'
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

export default router
