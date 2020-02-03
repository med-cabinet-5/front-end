import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({

    // add 'endpoint' for token to baseURL (previously ) 
    baseURL: ' ',
    headers: {
        Authorization: localStorage.getItem('token')
    }
});
};
