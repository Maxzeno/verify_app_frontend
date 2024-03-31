import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* import all components */
import Profile from './page/core/Profile.js';
import VerificationDetail from './page/core/verificationDetail.jsx';
import VerificationHistory from './page/core/verificationHistory.jsx';
import PageNotFound from './page/main/PageNotFound.js';
import Password from './page/main/Password.js';
import Recovery from './page/main/Recovery.js';
import Register from './page/main/Register.js';
import Reset from './page/main/Reset.js';


/* auth middleware */
import NavbarCore from './components/NavDash.jsx';
import { AuthorizeUser, ProtectRoute } from './middleware/auth.js';
import Dashboard from './page/core/Dashboard.js';
import FundWallet from './page/core/fundWallet.jsx';
import About from './page/main/About.jsx';
import Email from './page/main/Email.js';
import Home from './page/main/Home.js';
import Services from './page/main/Services.jsx';


/* root routes */
const router = createBrowserRouter([
    {
       path : '/',
       element : <Home></Home>
    },
    {
       path : '/about',
       element : <About></About>
    },
        {
       path : '/services',
       element : <Services></Services>
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
        element : <AuthorizeUser><NavbarCore headerName='Profile'> <Profile /> </NavbarCore></AuthorizeUser> 
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
        element : <AuthorizeUser><NavbarCore><Dashboard></Dashboard> </NavbarCore></AuthorizeUser> 
    },
    {
        path : '/fund-wallet',
        element : <AuthorizeUser><NavbarCore headerName='Fund Wallet'><FundWallet></FundWallet> </NavbarCore></AuthorizeUser> 
    },
    {
        path : '/verification-history',
        element : <AuthorizeUser><NavbarCore headerName='Verification History'><VerificationHistory></VerificationHistory> </NavbarCore></AuthorizeUser> 
    },
    {
        path : '/detail/:id',
        element : <AuthorizeUser><NavbarCore headerName='Detail'><VerificationDetail></VerificationDetail> </NavbarCore></AuthorizeUser> 
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

