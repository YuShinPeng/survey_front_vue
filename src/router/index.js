import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/HomeView.vue";
import SurveyView from "../views/Survey.vue";
import StaticsView from "../views/Statics.vue";
import ConfirmView from "../views/Confirm.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component:HomeView
    },
    {
      path:"/survey",
      name:"survey",
      component:SurveyView
    },
    {
      path:"/statics",
      name:"statics",
      component:StaticsView
    },
    {
      path:"/confirm",
      name:"confirm",
      component:ConfirmView
    }
  ]
})

export default router
