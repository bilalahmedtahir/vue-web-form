import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SignupView from '../views/SignupView.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import JobsView from '../views/Jobs/Jobs.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  { path: "/",component: SignupView },
  { path: "/home", component: HomeView },
  { path: "/about", component: AboutView },
  {
    path: "/jobs",
    name: "JobsView",
    component: JobsView,
  },
  {
    path: "/job-details/:id",
    name: "JobDetails",
    component: JobDetails,
  },
  {
    path: '/:catchAll(.*)',
    name: "notFound",
    component: NotFound,
  }
];

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes,
})

export default router;