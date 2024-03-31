import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { generateOTP, verifyOTP } from '../../helper/helper.js';
import { useAuthStore } from '../../store/store.js';

import styles from '../../styles/Main.module.css';


export default function Recovery() {

    const { email } = useAuthStore(state => state.auth);

    const [ OTP, setOTP ] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        generateOTP(email).then((OTP) => {
            console.log(OTP);
            if(OTP) {
                return toast.success('OTP has been sent to yout email!');
            }
            return toast.error('Problem while generating OTP!');
        })
    }, [ email ]);

    async function onSubmit(e) {
        e.preventDefault();
 
        try {
            const { status } = await verifyOTP( { email, code: OTP } );

            if( status === 201 ) {
                toast.success('Verify Successfully!');
                return navigate('/reset');
            }
        } catch (error) {
            return toast.error(error.error);
        }
    }

    // handler function of resend OTP
    function resendOTP() {

        const sendIt =  generateOTP(email);
        
        toast.promise(sendIt, {
            loading: 'Sending...!',
            success: <b>OTP has been send to your email!</b>,
            error: (error) => <b>{error.error}</b>
        });
    }

    // rendering recovery component
    return (
        <div className="my-5">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="flex flex-col justify-center items-center">
                <div className={styles.glass}>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Recovery</h4>
                        <span className="py-4 text-xl text-center text-gray-500">
                            Enter OTP sent to your email
                        </span>
                    </div>

                    <form className="pt-2" onSubmit={onSubmit}>
                        <div className="textbox flex flex-col items-center gap-6">

                            <div className="input text-center">
                                {/* <div className='py-4 text-sm text-left text-gray-500 text-center'>
                                    Enter 6 digit OTP sent to your email address
                                </div> */}
                                <input onChange={(e) => setOTP(e.target.value)} className={styles.textbox} type="text" placeholder='OTP'/>
                            </div>

                            <button className={styles.btn} type="submit">Recover</button>
                        </div>
                    </form>

                    <div className="text-center py-4">
                        <span className="text-gray-500">Can't get OTP? <button onClick={resendOTP} className="text-red-500"> Resend</button></span>
                    </div>

                </div>
            </div>
        </div>
    );

}

