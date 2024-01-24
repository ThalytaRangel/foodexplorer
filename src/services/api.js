import axios from "axios";  

export const api = axios.create({
  baseURL: 'https://thalyta-foodexplorer-api.onrender.com'
});