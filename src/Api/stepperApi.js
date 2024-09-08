import axios from "axios"
const Hostname="https://stepper-backend-5.onrender.com"
const baseURL =Hostname+'/api'

const Stepperapi = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default Stepperapi;
