import axios from 'axios';

const URL = 'https://6501c2e1736d26322f5c3dad.mockapi.io/api/stockproducts';


export const  axiosInstance = axios.create({
    baseURL: URL
})