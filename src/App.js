import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* import all components */
import PageNotFound from './page/PageNotFound.js';
import Password from './page/Password.js';
import Profile from './page/Profile.js';
import Recovery from './page/Recovery.js';
import Register from './page/Register.js';
import Reset from './page/Reset.js';


/* auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth.js';
import Dashboard from './page/dashboard.js';
import Email from './page/Email.js';
import Home from './page/Home.js';


/* root routes */
const router = createBrowserRouter([
    {
       path : '/',
       element : <Home></Home>
    },
    {
       path : '/login',
       element : <Email></Email>
    },
    {
       path : '/register',
       element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute> <Password /> </ProtectRoute> 
    },
    {
        path : '/profile',
        element : <AuthorizeUser> <Profile /> </AuthorizeUser> 
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/dashboard',
        element : <Dashboard></Dashboard>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    }
]);


export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    );
}

