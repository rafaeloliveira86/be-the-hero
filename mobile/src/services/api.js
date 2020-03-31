import axios from 'axios';

const api = axios.create({
    /**
     * Mobile: Informar o IP do computador e não o endereço localhost
     */
    baseURL: 'http://192.168.0.7:3333'
});

export default api;