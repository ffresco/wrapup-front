import * as types from '../types'
const initialState = {
  request: false,
  error: null,
  data: { menus: [], ingredients: [], order: {} },
}

export const dashboardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DASHBOARD:
      return {
        ...state,
        data: action.payload,
        request: false,
        error: null,
      }
    case types.REQUEST_DASHBOARD:
      //Aca estoy modificando el estado de la app (base de dotos redux)
      return {
        ...state,
        data: { ...state.data, order: action.payload },
        request: true,
        error: null,
      }
    case types.ERROR_DASHBOARD:
      return {
        ...state,
        data: {},
        request: false,
        error: action.payload,
      }
    case types.POST_ORDER:
      return {
        ...state,
        data: { ...state.data, order: action.payload },
        request: true,
        error: null,
      }

    default:
      return state
  }
}
