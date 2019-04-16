import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dinner from './views/Dinner.vue'
import ProductDetail from './components/product/ProductDetail.vue'
import Ticket from './views/Ticket.vue'
import TicketDetail from './components/ticket/TicketDetail.vue'
import Tour from './views/Tour.vue'
import TourDetail from './components/tour/TourDetail.vue'
import Dollar from './views/Dollar.vue'
import SimCard from './views/SimCard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dinner',
      name: 'Dinner',
      component: Dinner
    },
    {
      path: '/dinner/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/ticket/:id',
      name: 'TicketDetail',
      component: TicketDetail
    },
    {
      path: '/tour',
      name: 'Tour',
      component: Tour
    },
    {
      path: '/tour/:id',
      name: 'TourDetail',
      component: TourDetail
    },
    {
      path: '/dollar',
      name: 'Dollar',
      component: Dollar
    },
    {
      path: '/sim',
      name: 'SimCard',
      component: SimCard
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
