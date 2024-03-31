import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import avatar from '../../assets/profile.png';
import { updateUser } from '../../helper/helper.js';
import { profileValidate } from '../../helper/validate.js';
import useFetch from '../../hooks/fetch.hook.js';

import FooterShortCore from "../../components/FooterShortCore.jsx";
import styles from '../../styles/Main.module.css';
import extend from '../../styles/Profile.module.css';


export default function Profile() {

    const [file, setFile] = useState();

    const [ {isLoading, apiData, serverError} ] = useFetch();

    // const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: apiData?.firstName || '',
            lastName: apiData?.lastName || '',
            businessId: apiData?.businessId || '',
            mobile: apiData?.mobile || '',
            address: apiData?.address || ''
        },
        enableReinitialize: true,
        validate: profileValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile: file || apiData?.profile || '' });
        
            const updatePromise = updateUser(values);

            toast.promise(updatePromise, {
                loading: 'Updating...!',
                success: <b>Updated Successfully...!</b>,
                error: (error) => <b>{error.error}</b>
            });


        }
    });

    /* formik doesn't support file upload so we need to create this handler */
    // const onUpload = async e => {
    //     const base64 = await convertToBase64(e.target.files[0]);
    //     setFile(base64);
    // }


    if( isLoading ) {
        return (<h1 className='text-2xl font-bold'>Loading...</h1>);
    }

    if(serverError) {
        return (<h1 className='text-xl text-red-500'>{serverError.message}</h1>);
    }

    // rendering the profile component
    return (
        <div className="my-5">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="flex flex-col justify-center items-center">
                <div className={`${styles.glass_profile} ${extend.glass}`}>

                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Profile</h4>
                        <span className="py-4 text-xl text-center text-gray-500">
                            You can update the details
                        </span>
                    </div>

                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <label htmlFor="profile">
                                <img src={apiData?.profile || file || avatar} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar"></img>
                            </label>

                            {/* <input onChange={onUpload} type="file" id='profile' name='profile'/> */}
                        </div>

                        <div className="textbox flex flex-col items-center gap-5">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <input {...formik.getFieldProps('firstName')} className={`${styles.textbox_full} w-full`} type="text" placeholder='First Name'/>
                                <input {...formik.getFieldProps('lastName')} className={`${styles.textbox_full} w-full`} type="text" placeholder='Last Name'/>
                                <input {...formik.getFieldProps('mobile')} className={`${styles.textbox_full} w-full`} type="text" placeholder='Mobile No.'/>
                                <input {...formik.getFieldProps('businessId')} className={`${styles.textbox_full} w-full`} type="text" placeholder='Business Id'/>
                            </div>
                            <div className="grid grid-cols-1 gap-5">

                            <input {...formik.getFieldProps('address')} className={`${styles.textbox_full} col-span-1`} type="text" placeholder='Address'/>
                            </div>
                            <button className={styles.btn} type="submit">Update</button>

                        </div>

                        
                    </form>

                </div>
            </div>
                        <FooterShortCore/>

        </div>
    );

}

