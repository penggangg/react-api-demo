import { lazy } from 'react'

import { Redirect } from 'react-router-dom'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to="/login" />
    },
    {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: lazy(() => import('../pages/login/Login'))
    },
    {
        path: '/home',
        meta: {
            title: '首页'
        },
        component: lazy(() => import('../pages/home/Home'))
    },
    {
        path: '/my',
        meta: {
            title: '我的'
        },
        component: lazy(() => import('../pages/my/My'))
    },
    {
        path: '/cart',
        meta: {
            title: '购物车'
        },
        component: lazy(() => import('../pages/cart/Cart'))
    }
]


export default routes