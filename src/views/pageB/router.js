import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/views/pageB/pageB',
        component: require('src/views/pageB/components/content.vue'),
        children: [
            {
                path: 'article',
                component: require('src/views/pageB/components/article.vue')
            },
            {
                path: 'video',
                component: require('src/views/pageB/components/video.vue')
            },
            {
                path: 'novel',
                component: require('src/views/pageB/components/novel.vue')
            },
            {
                path: 'car',
                component: require('src/views/pageB/components/car.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/views/pageB/pageB'
    }
]


Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
