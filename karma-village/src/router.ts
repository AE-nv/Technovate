import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Quest from './views/Quest.vue';
import ChairQuest from './components/Quest/ChairQuest.vue';
import Confirmation from './views/Confirmation.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/quest/chair',
            name: 'chair-quest',
            component: ChairQuest,
        },
        {
            path: '/quest/seat',
            name: 'seat-quest',
            component: Quest,
        },
        {
            path: '/quest/car',
            name: 'car-quest',
            component: Quest,
        },
        {
            path: '/confirmation',
            name: 'confirmation',
            component: Confirmation,
        },
    ],
});
