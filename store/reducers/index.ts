import { combineReducers } from 'redux'
import { dashboardReducer } from './dashboard'
import { loginReducer } from './login'
import { profileReducer } from './profile'

export default combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
  profile: profileReducer,
})
