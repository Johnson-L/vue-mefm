import Vue from 'vue';

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppHome from '@pages/home/app-home';
import AppChannel from '@pages/channel/app-channel';
import AppDetail from '@pages/detail/app-detail';
import AppList from '@pages/list/app-list';
import AppLiveshow from '@pages/liveshow/app-liveshow';
import AppRank from '@pages/rank/app-rank';
import AppWallet from '@pages/wallet/app-wallet';
import AppHomeSuggest from '@pages/home/app-home-suggest';
import AppHomeMusiclist from '@pages/home/app-home-musiclist';
import AppHomeCategory from '@pages/home/app-home-category';
import AppNotFound from '@pages/not-found'
const routes = [
    {
        path: '/',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: AppHome,
        redirect: { name: 'suggest' },
        children: [
            {
                path: 'suggest',
                name: 'suggest',
                component: AppHomeSuggest
            },
            {
                path: 'musiclist',
                name: 'musiclist',
                component: AppHomeMusiclist
            },
            {
                path: 'category',
                name: 'category',
                component: AppHomeCategory
            }
        ]
    },
    {
        path: '/channel',
        name: 'channel',
        component: AppChannel
    },
    {
        path: '/list',
        name: 'list',
        component: AppList
    },
    {
        path: '/detail',
        name: 'detail',
        component: AppDetail
    },
    {
        path: '/liveshow',
        name: 'liveshow',
        component: AppLiveshow
    },
    {
        path: '/rank',
        name: 'rank',
        component: AppRank
    },
    {
        path: '/wallet',
        name: 'wallet',
        component: AppWallet
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: AppNotFound
    },
    {
        path: '**',
        redirect: '/not-found'
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;


