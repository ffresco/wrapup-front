import axios from 'axios'
import Router from 'next/router'
import * as types from '../types'
/*
export const fetchLogin = (formData: any) => async (dispatch: any) => {
  if (!formData.username || !formData.password) {
    dispatch({
      type: types.ERROR_LOGIN,
      payload: 'Error',
    })
  } else {
    const res = await axios.post(`${process.env.BASE_URL}/auth`, formData)
    dispatch({
      type: types.REQUEST_LOGIN,
    })
    if (res && res.data && res.data.token) {
      dispatch({
        type: types.POST_LOGIN,
        payload: res.data,
      })
      Router.push('/dashboard')
    } else {
      dispatch({
        type: types.ERROR_LOGIN,
        payload: 'Error',
      })
    }
  }
}*/

export const fetchLogin = (formData: any) => async (dispatch: any) => {
  Router.push('/dashboard')
}
