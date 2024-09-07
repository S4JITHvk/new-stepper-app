import axios from "axios"
const Hostname="http://localhost:5000"
const baseURL =Hostname+'/api'

const Stepperapi = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default Stepperapi;
