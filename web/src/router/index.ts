import {createRouter, createWebHashHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'

import Demo1 from "../pages/demo1/Demo1.vue";
import App from "../App.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: 'demo1',
                component: Demo1,
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
