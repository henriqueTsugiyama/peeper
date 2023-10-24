import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import MyHello from './components/MyHello.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/hello',
        name: 'hello',
        component: HelloWorld,
        redirect: ''
    },
    {
        path: '/myhello',
        name: 'my-hello',
        component: MyHello,
        redirect: ''
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router