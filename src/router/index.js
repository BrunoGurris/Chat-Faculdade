import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from '../views/Chat'
import Login from '../views/Login'
import Register from '../views/Register'
import middleware from '../services/middleware'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Chat',
        component: Chat,
        beforeEnter: middleware.auth,
        
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
