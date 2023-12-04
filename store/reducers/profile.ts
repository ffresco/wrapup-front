const initialState = {
  name: 'Admin',
  email: 'ffresco@encora.com',
}

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'EDIT_PROFILE':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      }

    default:
      return initialState
  }
}
