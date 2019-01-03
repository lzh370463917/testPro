import Vue from 'vue';
import Router from 'vue-router';
const Dashboard = () => import ('../container/dashboard');
const My = () => import ('../container/my');
const Home = () => import ('../container/home');
const Classify = () => import ('../container/classify');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Dashboard,
            redirect: '/home',
            children: [
                {
                    path: '/my',
                    name: 'my',
                    component: My
                },
                {
                    path: '/classify',
                    name: 'classify',
                    component: Classify
                },
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                }
            ]
        }
    ]
});
