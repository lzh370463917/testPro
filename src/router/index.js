import Vue from 'vue';
import Router from 'vue-router';
const Dashboard = () => import ('../container/index');
const My = () => import ('../container/my');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Dashboard,
            redirect: '/',
            children: [
                {
                    path: '/my',
                    name: 'My',
                    component: My
                }
            ]
        }
    ]
});
