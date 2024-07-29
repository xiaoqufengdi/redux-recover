import React, { Suspense, lazy } from 'react';
import { Navigate   } from 'react-router-dom';

// 使用 React.lazy 动态导入组件
// const Demo0 = lazy(()=>import('../base/demo0'));

const ContextDemo = lazy(()=>import('../base/context'));
const ContextDemo1 = lazy(()=>import('../base/demo1'));
const ContextDemo2 = lazy(()=>import('../base/demo2'));
const ContextDemo3 = lazy(()=>import('../base/demo3'));
const Advance1 = lazy(()=>import('../advance/demo1'));

// 注意v6版本router重定向的写法
const routes = [
    {
        path: "/",
        element: <Navigate  to="/base/demo0" />
    },{
        path: "/base/demo0",
        exact: true,
        element: <ContextDemo/>
    },{
        path: "/base/demo1",
        exact: true,
        element: <ContextDemo1/>
    },{
        path: "/base/demo2",
        exact: true,
        element: <ContextDemo2/>
    },{
        path: "/base/demo3",
        exact: true,
        element: <ContextDemo3/>
    },{
        path: "/advance/1",
        exact: true,
        element: <Advance1/>
    }
];


export default routes;