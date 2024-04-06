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
import NavDash from './components/NavDash.js';
import { AuthorizeUser, ProtectRoute, ToDashboardIfAuth } from './middleware/auth.js';
import BVNService from './page/core/bvnService.jsx';
import Dashboard from './page/core/Dashboard.js';
import FundWallet from './page/core/fundWallet.jsx';
import NINService from './page/core/ninService.jsx';
import PaymentHistory from './page/core/paymentHistory.jsx';
import ConfirmEmail from './page/main/ConfirmEmail.js';
import Email from './page/main/Email.js';
import Home from './page/main/Home.js';


/* root routes */
const router = createBrowserRouter([
    {
       path : '/',
       element : <ToDashboardIfAuth><Home></Home></ToDashboardIfAuth>
    },
    // {
    //    path : '/about',
    //    element : <ToDashboardIfAuth><About></About></ToDashboardIfAuth>
    // },
        {
       path : '/confirm-email',
       element : <ToDashboardIfAuth><ConfirmEmail></ConfirmEmail></ToDashboardIfAuth>
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
        element : <AuthorizeUser><NavDash headerName='Profile'> <Profile /> </NavDash></AuthorizeUser> 
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
        element : <AuthorizeUser><NavDash><Dashboard></Dashboard> </NavDash></AuthorizeUser> 
    },
    {
        path : '/fund-wallet',
        element : <AuthorizeUser><NavDash headerName='Fund Wallet'><FundWallet></FundWallet> </NavDash></AuthorizeUser> 
    },
    {
        path : '/verification-history',
        element : <AuthorizeUser><NavDash headerName='Verification History'><VerificationHistory></VerificationHistory> </NavDash></AuthorizeUser> 
    },
    {
        path : '/payment-history',
        element : <AuthorizeUser><NavDash headerName='Payment History'><PaymentHistory></PaymentHistory> </NavDash></AuthorizeUser> 
    },
    {
        path : '/nin-service',
        element : <AuthorizeUser><NavDash headerName='NIN Service'><NINService></NINService> </NavDash></AuthorizeUser> 
    },
    {
        path : '/bvn-service',
        element : <AuthorizeUser><NavDash headerName='BVN Service'><BVNService></BVNService> </NavDash></AuthorizeUser> 
    },
    {
        path : '/detail/:id',
        element : <AuthorizeUser><NavDash headerName='Detail'><VerificationDetail></VerificationDetail> </NavDash></AuthorizeUser> 
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

