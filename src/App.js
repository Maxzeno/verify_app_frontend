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
import { AuthorizeUser, ProtectRoute, ToDashboardIfAuth } from './middleware/auth.js';
import Dashboard from './page/core/Dashboard.js';
import FundWallet from './page/core/fundWallet.jsx';
import NINService from './page/core/ninService.jsx';
import PaymentHistory from './page/core/paymentHistory.jsx';
import About from './page/main/About.jsx';
import Email from './page/main/Email.js';
import Home from './page/main/Home.js';
import Services from './page/main/Services.jsx';


/* root routes */
const router = createBrowserRouter([
    {
       path : '/',
       element : <ToDashboardIfAuth><Home></Home></ToDashboardIfAuth>
    },
    {
       path : '/about',
       element : <ToDashboardIfAuth><About></About></ToDashboardIfAuth>
    },
        {
       path : '/services',
       element : <ToDashboardIfAuth><Services></Services></ToDashboardIfAuth>
    },
    {
       path : '/login',
       element : <ToDashboardIfAuth><Email></Email></ToDashboardIfAuth>
    },
    {
       path : '/register',
       element : <ToDashboardIfAuth><Register></Register></ToDashboardIfAuth>
    },
    {
        path : '/password',
        element : <ToDashboardIfAuth><ProtectRoute> <Password /> </ProtectRoute> </ToDashboardIfAuth>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><NavbarCore headerName='Profile'> <Profile /> </NavbarCore></AuthorizeUser> 
    },
    {
        path : '/recovery',
        element : <ToDashboardIfAuth><Recovery></Recovery></ToDashboardIfAuth>
    },
    {
        path : '/reset',
        element : <ToDashboardIfAuth><Reset></Reset></ToDashboardIfAuth>
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
        path : '/payment-history',
        element : <AuthorizeUser><NavbarCore headerName='Payment History'><PaymentHistory></PaymentHistory> </NavbarCore></AuthorizeUser> 
    },
        {
        path : '/nin-service',
        element : <AuthorizeUser><NavbarCore headerName='NIN Service'><NINService></NINService> </NavbarCore></AuthorizeUser> 
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

