import axios, {type CreateAxiosDefaults} from 'axios';

const options:CreateAxiosDefaults = {
  baseURL: "https://task-managment-app-henna.vercel.app/api",
  headers: {
    "Content-Type" : 'application/json'
  }
}

const axiosInstance = axios.create(options)

export {axiosInstance}


