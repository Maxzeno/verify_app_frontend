import { useFormik } from 'formik';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { resetPassword } from '../../helper/helper.js';
import { resetPasswordValidate } from '../../helper/validate.js';
import useFetch from '../../hooks/fetch.hook.js';
import { useAuthStore } from '../../store/store.js';

import styles from '../../styles/Main.module.css';

export default function Reset() {

    const { email } = useAuthStore(state => state.auth);

    const navigate = useNavigate();

    const [ { isLoading, status, serverError } ] = useFetch('createResetSession');

    const formik = useFormik({
        initialValues : {
            password : '',
            confirm_pwd : ''
        },
        validate : resetPasswordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {

            const sendIt =  resetPassword( { email, password: values.password } );
            
            toast.promise(sendIt, {
                loading: 'Loading...!',
                success: <b>Reset Successfully...!</b>,
                error: (error) => <b>{error.error}</b>
            });

            sendIt.then((result) => {
                navigate('/password');
                
            }).catch((err) => {
                console.log(err)
            });  
        }
    });

    if( isLoading ) {
        return (<h1 className='text-2xl font-bold'>Loading...</h1>);
    }

    if (serverError) {
        toast.error('Request recovery of email before reset!');
         return <Navigate to={'/login'} replace={true}></Navigate>;
    }

    if( status && status !== 201 ) {
        return <Navigate to={'/password'} replace={true}></Navigate>;
    }

    // rendering the reset component
    return (
        <div className="my-5">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="flex flex-col justify-center items-center">
                <div className={styles.glass}>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Reset</h4>
                        <span className="py-4 text-xl text-center text-gray-500">
                            Enter new Password
                        </span>
                    </div>

                    <form className="py-2" onSubmit={formik.handleSubmit}>
                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='New Password'></input>
                            <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="password" placeholder='Repeat Password'></input>
                            <button className={styles.btn} type="submit">Reset</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );

}

