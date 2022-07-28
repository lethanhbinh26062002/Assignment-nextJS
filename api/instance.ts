import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:2606/api'
})
export default instance