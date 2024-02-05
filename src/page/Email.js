// eslint-disable-next-line
import { useFormik } from 'formik';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { emailValidate } from '../helper/validate.js';
import { useAuthStore } from '../store/store.js';

import styles from '../styles/Main.module.css';

export default function Email() {

    // useAuthStore(state => console.log(state));
    // useAuthStore(state => console.log(state.auth.email));

    const setEmail = useAuthStore(state => state.setEmail);
    // const email = useAuthStore(state => state.auth.email);

    // useEffect(() => {
    //     console.log(email);
    // });

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
            email : ''
        },
        validate : emailValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
            setEmail(values.email);
            navigate('/password');
        }
    });

    // rendering email component 
    return (
        <div className="my-5">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="flex flex-col justify-center items-center">
                <div className={styles.glass}>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Hello Again!</h4>
                        <span className="py-4 text-xl text-center text-gray-500">
                            Please fill in your email.
                        </span>
                    </div>

                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img src={avatar} className={styles.profile_img} alt="avatar"></img>
                        </div>


                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email'></input>
                            <button className={styles.btn} type="submit">Let's Go!</button>
                        </div>
                    

                        <div className="text-center py-4">
                            <span className="text-gray-500">Not a Member? <Link className="text-red-500" to="/register"> Register Now</Link></span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );

}

