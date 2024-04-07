import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { confirmEmail, generateOTP } from '../../helper/helper.js';
import { useAuthStore } from '../../store/store.js';

import styles from '../../styles/Main.module.css';


export default function ConfirmEmail() {

    const { email } = useAuthStore(state => state.auth);

    const [ OTP, setOTP ] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        generateOTP(email, '/api/sendConfirmEmail').then((data) => {
            console.log(data);
            if(data) {
                return toast.success('Confirmation code has been sent to yout email!', {
                 duration: 3000,

                });
            }
            return toast.error('Problem while generating OTP!');
        })
    }, [ email ]);

    async function onSubmit(e) {
        e.preventDefault();
 
        try {
            const { status } = await confirmEmail( { email, code: OTP } );

            if (status === 200) {
                toast.success('Verify Successfully!');
                return navigate('/password');
            }
        } catch (error) {
            return toast.error(error.error, {
                 duration: 3000,

            });
        }
    }

    // handler function of resend OTP
    function resendOTP() {

        const sendIt =  generateOTP(email, '/api/sendConfirmEmail');
        
        toast.promise(sendIt, {
            loading: 'Sending...!',
            success: <b>Email confirmation code has been sent to your email!</b>,
            error: (error) => <b>{error.error}</b>,
            duration: 3000,
        });
    }

    // rendering recovery component
    return (
        <div className="my-5">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="flex flex-col justify-center items-center">
                <div className={styles.glass}>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Email Confirmation</h4>
                        <span className="py-4 text-xl text-center text-gray-500">
                            Enter Confirmation code sent to your email
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

                            <button className={styles.btn} type="submit">Confirm</button>
                        </div>
                    </form>

                    <div className="text-center py-4">
                        <span className="text-gray-500">Didn't get it? <button onClick={resendOTP} className="text-red-500"> Resend</button></span>
                    </div>

                </div>
            </div>
        </div>
    );

}

