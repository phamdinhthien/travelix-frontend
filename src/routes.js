import React, { Component } from 'react';
import Home from './view/Home/Home';
import About from './view/About/About';
import Offers from './view/Offers/Offers';
import News from './view/News/News';
import Contact from './view/Contact/Contact.js';
import Detail from './view/Detail/Detail';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: false,
        component: About
    },
    {
        path: '/offers',
        exact: false,
        component: Offers
    },
    {
        path: '/news',
        exact: false,
        component: News
    },
    {
        path: '/contact',
        exact: false,
        component: Contact
    },
    {
        path: '/detail',
        exact: false,
        component: Detail
    }
    // , {
    //     path: '',
    //     exact: false,
    //     component: () => <NotFound />
    // }
]

export default routes;