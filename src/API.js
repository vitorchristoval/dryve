
import * as axios from 'axios';



let api = axios.create({
    baseURL: 'http://www.mocky.io/v2/',
    responseType: "json"
});


export default api
