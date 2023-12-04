import axios from 'axios'
import { getBackend } from '../../globalvar/globalVar'

export const shipContainerBackEndService = async (
  from: string | null | undefined,
  containerId: number,
  toApprove: string
) => {
  //return axios.post(`${process.env.BASE_URL}/containers/approve`, {
  return axios.post(`${getBackend()}/containers/approve`, {
    from,
    containerId,
    toApprove,
  })
}

export const updateTransferHash = async (id: string, body: any) => {
  //return axios.patch(`${process.env.BASE_URL}/containers/transfer-hash/${id}`, body )
  return axios.patch(`${getBackend()}/containers/transfer-hash/${id}`, body)
}

export const getLastTranferateTransferHash = async (id: string) => {
  //return axios.get(`${process.env.BASE_URL}/containers/last-tranfer/${id}`)
  return axios.get(`${getBackend()}/containers/last-tranfer/${id}`)
}

export const getContainerHistory = async (id: string) => {
  //return axios.get(`${process.env.BASE_URL}/containers/timeline/${id}`)
  return axios.get(`${getBackend()}/containers/timeline/${id}`)
}

export const getPreApprovalImage = async (id: string) => {
  //return axios.get(`${process.env.BASE_URL}/containers/pre-approval/${id}`, {responseType: 'blob', })
  return axios.get(`${getBackend()}/containers/pre-approval/${id}`, {
    responseType: 'blob',
  })
}

export const preApprovalService = async (formData: any) => {
  //formData.containerId = formData.containerId.toString()
  const body = new FormData()
  body.append('file', formData.file)
  body.append('to', String(formData.to))
  body.append('from', String(formData.from))
  body.append('containerId', String(formData.containerId))
  body.append('note', String(formData.note))
  //return axios.post(`${process.env.BASE_URL}/containers/pre-approval`, body)
  return axios.post(`${getBackend()}/containers/pre-approval`, body)
}
