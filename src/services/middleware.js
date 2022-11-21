import api from './axios'

export default {
    async auth(to, from, next) {
        await api.get('/me').then(() => {
            next() 
        })
        .catch(() => {
            next({
                path: '/login'
            })
        })
    }
}