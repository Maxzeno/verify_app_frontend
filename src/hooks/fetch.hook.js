import axios from 'axios';
import { useEffect, useState } from 'react';
import { getEmail } from '../helper/helper.js';


axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;


/* custom hook */
export default function useFetch(query, others={}) {

    const [ getData, setData ] = useState( { isLoading: false, apiData: undefined, status: null, serverError: null } );

    useEffect(() => {
       
        const fetchData = async () => {
            try {
                setData(prev => ({ ...prev, isLoading: true }));

                const { email } = !query ? await getEmail() : '';

                const { data, status } = !query ? await axios.get(`api/user/${email}`) : await axios.get(`/api/${query}`, others);

                if( status.toString().startsWith('2') ) {
                    setData(prev => ({ ...prev, isLoading: false}));
                    setData(prev => ({ ...prev, apiData: data, status: status }));
                }

                setData(prev => ({ ...prev, isLoading: false }));
            } catch (error) {
                setData(prev => ({ ...prev, isLoading: false, serverError: error }));
            }
        };
        
        fetchData();

    }, [query]);

    return [ getData, setData ];
}

