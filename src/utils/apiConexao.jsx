import axios from 'axios'

export const apiConexao = axios.create({
    baseURL: 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products',
    headers: {"Content-type": "application/json"}
})
