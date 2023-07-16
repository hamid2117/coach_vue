import { createRouter, createWebHistory } from 'vue-router'
import CoachesListPage from '../pages/coaches/CoachesList.vue'
import CoachesDetailPage from '../pages/coaches/CoachDetail.vue'
import CoachesRegistrationPage from '../pages/coaches/CoachRegistration.vue'
import ContactCoachPage from '../pages/requests/ContactCoach.vue'
import RequestPage from '../pages/requests/RequestsReceived.vue'
import NotFoundPage from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachesListPage
    },
    {
      path: '/coaches/:id',
      component: CoachesDetailPage,
      props: true,
      //>  /coaches/something/contact
      children: [{ path: 'contact', component: ContactCoachPage }]
    },
    {
      path: '/register',
      component: CoachesRegistrationPage
    },
    {
      path: '/requests',
      component: RequestPage
    },
    {
      path: '/:notFound(.*)',
      component: NotFoundPage
    }
  ]
})

export default router
