import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { requestErrorResolver, requestErrorResolverResponse } from './utils';


axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;


/* Make API Requests */

/* to get email from Token */
export async function getEmail() {
    const token = localStorage.getItem('token');

    if(!token) {
        return Promise.reject("Cannot find Token");
    }

    const decode = jwt_decode(token);
    // console.log(decode);
    return decode;
}

/* to get username from Token */
export async function getUsername() {
    const token = localStorage.getItem('token');

    if(!token) {
        return Promise.reject("Cannot find Token");
    }

    const decode = jwt_decode(token);
    // console.log(decode);
    return decode;
}


/* authenticate function */
export async function authenticate(email) {
    try {
        return await axios.post('/api/authenticate', {email});
    } catch (error) {
        return { error: "Username doesn't exist...!"};
    }
}

/* function to get User details */
export async function getUser( {username} ) {
    try {
        const { data } = await axios.get(`/api/user/${username}`);
        return { data };
    } catch (error) {
        return requestErrorResolver(error)
    }
}

/* register user function */
export async function registerUser(credentials) {
    try {
        const { data: {msg}, status } = await axios.post('/api/register', credentials);

        const { username, email } = credentials;

        /* send email */
        if(status === 201) {
            await axios.post('/api/registerMail', { username, userEmail : email, text : msg } );
        }

        return Promise.resolve(msg);
    } catch (error) {
        return requestErrorResolver(error)
    }
}

/* login function */
export async function verifyPassword({ email, password }) {
  try {
    if (email) {
        const { data, status } = await axios.post('/api/login', { email, password });
        // console.log(data, status )
      return Promise.resolve({ data, status });
    } else {
      return Promise.reject({ error: "Email is required" });
    }
  } catch (error) {
      console.log(error, 'requestErrorResolver')
        return requestErrorResolverResponse(error)
  }
}

/* update user profile function */
export async function updateUser(response) {
    try {
        const token = await localStorage.getItem('token');

        const data = await axios.put('/api/updateuser', response, { headers : { "Authorization" : `Bearer ${token}`} });

        return Promise.resolve( {data} );
    } catch (error) {
        return requestErrorResolver(error)
    }
}

/* generate OTP */
export async function generateOTP(email, url='/api/forgotPassword') {
    try {
        const { data, status} = await axios.post(url, { email } );

        return Promise.resolve(data);
    } catch (error) {
        return requestErrorResolver(error)
    }
}

/* verify OTP */
export async function verifyOTP( { email, code } ) {
    try {
        const { data, status } = await axios.post('/api/verifyOTP',  { email, otp: code });

        return { data, status };
    } catch (error) {
        return requestErrorResolver(error)
    }
}

export async function confirmEmail( { email, code } ) {
    try {
        const { data, status } = await axios.post('/api/confirmEmail',  { email, otp: code });

        return { data, status };
    } catch (error) {
        return requestErrorResolver(error)
    }
}

/* reset password */
export async function resetPassword( { email, password, otp } ) {
    try {
        const { data, status } = await axios.post('/api/resetPassword', { email, newPassword: password, otp } );
        
        return Promise.resolve( { data, status } );
    } catch (error) {
        return requestErrorResolver(error)
    }
}

