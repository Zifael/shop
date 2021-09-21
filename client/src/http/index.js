import axios from 'axios'

const  $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const  $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authIntereceptor = config => {      //  $authHost === each request has its own token
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authIntereceptor)


export {
    $host,
    $authHost
}