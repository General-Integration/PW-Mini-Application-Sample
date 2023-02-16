import { ROUTE_NAME } from '@/utils/constants'
import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, AllEventView, DetailEventView, OrderServiceView, SuccessPaymentView } from '@/views'

const routes = [
  {
    path: '/',
    name: ROUTE_NAME.home,
    component: HomeView,
    meta: { layout: 'Default'}
  },
  {
    path: '/event',
    children: [
      { 
        path: '', 
        name: ROUTE_NAME.eventAll, 
        component: AllEventView,
        meta: { layout: 'Default'} 
      },
      { 
        path: 'detail/:handler', 
        name: ROUTE_NAME.eventDetail, 
        component: DetailEventView,
        meta: { layout: 'Child'}
      },
    ]
  },
  {
    path: '/order/:id',
    name: ROUTE_NAME.order,
    component: OrderServiceView,
    meta: { layout: 'Child'},
    props: true
  },
  {
    path: '/success',
    name: ROUTE_NAME.success,
    component: SuccessPaymentView,
    meta: { layout: 'Child'}
  },
]

const router = createRouter({
  history: createWebHistory('/#/'),
  // base: 'pw-merchant-sample/',
  routes
})

export default router
