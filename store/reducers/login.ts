import * as types from '../types'
const initialState = {
  request: false,
  error: null,
  login: {},
}

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.POST_LOGIN:
      return {
        ...state,
        login: action.payload,
        request: false,
        error: null,
      }
    case types.REQUEST_LOGIN:
      return {
        ...state,
        login: {},
        request: true,
        error: null,
      }
    case types.ERROR_LOGIN:
      return {
        ...state,
        login: {},
        request: false,
        error: action.payload,
      }
    default:
      return initialState
  }
}
