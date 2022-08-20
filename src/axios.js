import axios from 'axios'
const instance = axios.create({
    baseURL:'http://localhost:5001/clone-80044/us-central1/api' // api (cloud funct )url
});
export default instance;