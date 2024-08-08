const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        title: '首页',
        component: () => import('@/components/HelloWorld.vue'), 
    },
    {
        path: '/One',
        name: 'One',
        component: () => import('@/views/one.vue')
    },
    {
        path: '/Two',
        name: 'Two',
        component: () => import('@/views/two.vue')
    },
    {
        path: '/San',
        name: 'San',
        component: () => import('@/views/San.vue')
    }
]
export default routes