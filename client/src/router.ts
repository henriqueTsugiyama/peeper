import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import MyHello from './components/MyHello.vue'
import Posts from './components/Posts.vue'

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
    {
        path: '/posts',
        name: 'posts',
        component: Posts,
        redirect: ''
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router