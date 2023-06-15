import axios from 'axios'
export const baseUrl = "http://45.90.217.37"

export const publicAxios = axios.create({
    baseURL: baseUrl
})