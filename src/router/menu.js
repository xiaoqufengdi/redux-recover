import { LaptopOutlined, NotificationOutlined, UserOutlined, AreaChartOutlined, AliwangwangFilled } from '@ant-design/icons';
import React from "react";

const menuList = [
    {
        label: '基础',
        key: 'base',
        icon: React.createElement(LaptopOutlined),
        children: [
            {
                label: 'useContext',
                key: "/base/demo0",
                path: "/base/demo0",
            },
            {
                label: 'no-redux-demo',
                key: "/base/demo1",
                path: "/base/demo1",
            },
            {
                label: 'redux原理',
                key: "/base/demo2",
                path: "/base/demo2",
            },

            {
                label: 'redux-demo',
                key: "/base/demo3",
                path: "/base/demo3",
            }
        ],
    }
    ,{
        label: 'advance',
        key: 'advance',
        icon: React.createElement(NotificationOutlined),
        children: [
            {
                label: 'useSyncExternalStore',
                key: "/advance/0",
                path: "/advance/0",
            }, {
                label: 'useSyncExternalStore2',
                key: "/advance/1",
                path: "/advance/1",
            }
        ]

    }
]

export default menuList;