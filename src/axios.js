import axios from 'axios';

const instance  = axios.create({
    baseURL:'./point.json'

});


export default instance;
