import React from 'react';
import FooterShortCore from "../components/FooterShortCore";
import NINVerify from '../components/forms/NinVerify';

export default function Dashboard() {
    return (
        <div>
            <div className='h-60 bg-[#0c1e29] text-center mx-5 rounded-md'>
                <div className='text-white font-thin text-4xl pt-20'>Welcome Maxzeno!</div>
                <div className='text-white font-thin text-lg pt-7'>Wallet Balance: ₦ 0</div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 gap-5 pt-5'>
                <NINVerify/>
                <NINVerify/>
                <NINVerify/>

            </div>

            <FooterShortCore />
        </div>
    );
}
