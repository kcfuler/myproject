import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Demo1Vue from '../pages/demo1/Demo1.vue';
import demo2Vue from '../pages/demo2/demo2.vue';
import MainVue from '../Layouts/Main.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: MainVue,
        children: [
            {
                path: 'demo1',
                component: Demo1Vue,
            },
            {
                path: 'demo2',
                component: demo2Vue,
            }
        ]
    },
]

export const router = createRouter(
    {
        history: createWebHashHistory(),
        routes,
    }
);
