import { getDashboard, orderMenuService } from '../services/dashboard'
import * as types from '../types'

//WS service
export const fetchDasboard = () => async (dispatch: any) => {
  const payload = await getDashboard()
  console.log('payload en action', payload)
  if (payload) dispatch({ type: types.GET_DASHBOARD, payload })
}

//WS service
export const orderMenu =
  (id: number, quantity: number) => async (dispatch: any) => {
    const request = {
      dish_code: id,
      quantity: quantity,
    }
    console.log('orderMenu', id, quantity, request)
    const payload = await orderMenuService(request)
    console.log('payload en action', payload)
    if (payload) dispatch({ type: types.POST_ORDER, payload })
  }

/*****MOCK in memory */
/*
export const fetchDasboard = () => async (dispatch: any) => {
  const menus: any = [
    {
      cod: 1,
      description: 'Menu 1',
      available: true,
      orders: 10,
      createdAt: '2022-02-14 20:08:42',
      updatedAt: '2022-02-14 20:08:42',
    },
    {
      cod: 2,
      description: 'Menu 2',
      available: false,
      orders: 1,
      createdAt: '2022-02-14 20:08:42',
      updatedAt: '2022-02-14 20:08:42',
    },
  ]
  const ingredients: any = [
    {
      cod: 1,
      description: 'Ingrediente 1',
      stock: 10,
      createdAt: '2022-02-14 20:08:42',
      updatedAt: '2022-02-14 20:08:42',
    },
    {
      cod: 2,
      description: 'Ingrediente 2',
      stock: 15,
      createdAt: '2022-02-14 20:08:42',
      updatedAt: '2022-02-14 20:08:42',
    },
    {
      cod: 3,
      description: 'Ingrediente 3',
      stock: 100,
      createdAt: '2022-02-14 20:08:42',
      updatedAt: '2022-02-14 20:08:42',
    },
    {
      cod: 4,
      description: 'Ingrediente 4',
      stock: 310,
      createdAt: '2022-02-14 20:08:42',
      updatedAt: '2022-02-14 20:08:42',
    },
  ]
  const waitingsResponse: any = []
  dispatch({
    type: types.REQUEST_DASHBOARD,
  })
  dispatch({
    type: types.GET_DASHBOARD,
    payload: {
      menus: menus,
      ingredients: ingredients,
      waitings: waitingsResponse,
    },
  })
}*/
