import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: {'X-Client': 'Shop Frontend'}
});

const fetcher = ([url, params]) => {
  console.log('fetcher', params)
  return instance.get(url, {
    params: params
  }).then(res => res.data)
}

export default fetcher