import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({

    // add 'endpoint' for token to baseURL
    baseURL: 'https://med-cabinet-server.herokuapp.com',
    headers: {
        Authorization: localStorage.getItem('token')
    }
});
};
