import axios from 'axios';

export default axios.create({
    // baseURL:'http://localhost:8080',
    baseURL: 'https://movie-gold-v2.onrender.com',
});
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://movie-gold-v2.onrender.com/';

