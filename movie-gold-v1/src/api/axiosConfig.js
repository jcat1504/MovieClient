import axios from 'axios';

export default axios.create({
    // baseURL:'http://localhost:8080',
    baseURL: 'http://ec2-35-173-131-206.compute-1.amazonaws.com:8080/api/v1/movies',
});


