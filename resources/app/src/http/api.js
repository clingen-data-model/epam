import axios from 'axios'
import store from '@/store'

const api = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        common: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    },

});

api.interceptors.response.use(response => response, error => {
        if (error.response.status == 401) {
            store.commit('setAuthenticated', false)
        }
        return Promise.reject(error);
});

export default api