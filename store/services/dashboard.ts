import axios, { AxiosResponse } from 'axios'
import { getBackend } from '../../globalvar/globalVar'

export const testWs = async (id: number) => {
  console.log('testWs', id)
  const response = await axios
    .get(`${getBackend()}/menu/${id}`)
    .then((response: AxiosResponse) => response.data)
    .catch((error) => error.response?.data)
  return response
}

export const getDashboard = async () => {
  const response = await axios
    .get(`${getBackend()}/menu/dashboard`)
    .then((response: AxiosResponse) => response.data)
    .catch((error) => error.response?.data)
  console.log('response in service', response)
  return response
}

export const orderMenuService = async (request: any) => {
  const response = await axios
    .post(`${getBackend()}/menu`, request)
    .then((response: AxiosResponse) => response.data)
    .catch((error) => error.response?.data)
  console.log('response in service', response)
  return response
}
