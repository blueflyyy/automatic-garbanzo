import React from 'react';
import { Redirect } from "react-router-dom";

import JJHome from "../pages/home";
import JJBoiling from "../pages/boiling";
import JJCourse from "../pages/course";
import JJBroadcast from "../pages/broadcast";
import JJActivity from "../pages/activity";
import JJComprehensive from "../pages/home/nav/comprehensive";
import JJFollow from "../pages/home/nav/follow";
import JJRecommend from "../pages/home/nav/comprehensive/contents/recommend";
import JJLatest from "../pages/home/nav/comprehensive/contents/hotlist";
import JJHotlist from "../pages/home/nav/comprehensive/contents/hotlist";


const routes = [{
    path: "/",
    exact: true,
    render: () => (<Redirect to="/home" />
    )
},
{
    path: "/home",
    component: JJHome,
    routes: [{
        path: "/home",
        exact: true,
        render: () => {
            <Redirect to="/home/comprehensive" />
        }
    },
    {
        path: "/home/comprehensive",
        component: JJComprehensive,
        routes: [{
            path: "/home/comprehensive",
            exact: true,
            render: () => {
                <Redirect to="/home/comprehensive/recommend"></Redirect>
            }
        },
        {
            path: "/home/comprehensive/recommend",
            component: JJRecommend
        },
        {
            path: "/home/comprehensive/hotlist",
            component: JJHotlist
        },
        {
            path: "/home/comprehensive/latest",
            component: JJLatest
        }
        ]
    },
    {
        path: "/home/follow",
        component: JJFollow
    }
    ]
},

{
    path: "/boiling",
    component: JJBoiling
},
{
    path: "/course",
    component: JJCourse
},
{
    path: "/broadcast",
    component: JJBroadcast
},
{
    path: "/activity",
    component: JJActivity
}
];

export default routes;