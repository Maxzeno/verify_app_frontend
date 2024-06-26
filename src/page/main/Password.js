import { useFormik } from 'formik';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/profile.png';
import { verifyPassword } from '../../helper/helper.js';
import { passwordValidate } from '../../helper/validate.js';
import useFetch from '../../hooks/fetch.hook.js';
import { useAuthStore } from '../../store/store.js';

import styles from '../../styles/Main.module.css';


export default function Password() {

    const navigate = useNavigate();

    const { email } = useAuthStore(state => state.auth);

    const [ {isLoading, apiData, serverError} ] = useFetch(`/user/${email}`);

    const formik = useFormik({
        initialValues : {
            password : ''
        },
        validate : passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            const sendIt = verifyPassword({ email, password: values.password });
            
            toast.promise(sendIt, {
                loading: 'Loading...!',
                success: <b>Login Successfully...!</b>,
                error: (error) => <b>{error.error}</b>,
                 duration: 3000,
            });

            sendIt.then((result) => {
                console.log(result)
                const { token } = result.data;
                localStorage.setItem('token', token);
                navigate('/dashboard');
                
            }).catch((err) => {
                if (err.status === 450) {
                    navigate('/confirm-email');
                }
            }); 
        }
    });


    if(serverError) {
        return (<h1 className='text-xl text-red-500'>{serverError.message}</h1>);
    }

    // rendering the password component
    return (
        <div className="my-5">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="flex flex-col justify-center items-center">
                <div className={styles.glass}>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-4xl font-bold">Hello {apiData?.firstName || apiData?.username}</h4>
                        <span className="py-4 text-xl text-center text-gray-500">
                            Please fill in your password.
                        </span>
                    </div>

                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img src={apiData?.profile || avatar} className={styles.profile_img} alt="avatar"></img>
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password'/>
                            <button className={styles.btn} type="submit" disabled={isLoading}>Sign in</button>
                        </div>

                        <div className="text-center py-4">
                            <span className="text-gray-500">Forgot Password? <Link className="text-red-500" to="/recovery"> Recover Now</Link></span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );

}

