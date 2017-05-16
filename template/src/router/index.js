/**
 * Created by linjianhui on 2017/1/4.
 */
export default [
    { path: '/', component: () => import('../views/login') },
    { path: '*', component: { template: '<h2>404</h2>' }}
]
