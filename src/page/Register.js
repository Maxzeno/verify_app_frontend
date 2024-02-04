import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import convertToBase64 from '../helper/convert.js';
import { registerUser } from '../helper/helper.js';
import { registerValidate } from '../helper/validate.js';

import styles from '../styles/Main.module.css';


export default function Register() {

    const navigate = useNavigate();

    const [ file, setFile ] = useState();

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: ''
        },
        validate: registerValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile : file || '' });
            console.log(values);

            const registerPromise = registerUser(values);

            toast.promise(registerPromise, {
                loading: 'Creating...',
                success: <b>Register Successfully...!</b>,
                error: <b>Could not Register..!</b>
            });

            registerPromise.then(() => {
                console.log('Registration successful! Navigating to the login page.');
                navigate('/login');
            }).catch(error => {
                console.error('Error during registration:', error);
            });
        }
    });

    /* formik doesn't support file upload so we need to create this handler */
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }

    // rendering the register component
    return (
        <div className="container mx-auto">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="flex flex-col justify-center items-center h-screen">
                <div className={styles.glass} style={{width: "40%",height: "100%", paddingTop: '3em'}}>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Register</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Happy to join you!
                        </span>
                    </div>

                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <label htmlFor="profile">
                                <img src={file || avatar} className={styles.profile_img} alt="avatar"></img>
                            </label>

                            {/* <input onChange={onUpload} type="file" id='profile' name='profile'></input> */}
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='Email*'></input>
                            <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*'></input>
                            <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password*'></input>
                            <button className={styles.btn} type="submit">Register</button>
                        </div>

                        <div className="text-center py-4">
                            <span className="text-gray-500">Already Registered? <Link className="text-red-500" to="/login"> Login Now</Link></span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );

}

