// import authReducer from './authReducer'
import jobReducer from './jobReducer'


import { combineReducers } from 'redux'
// subject to change, just some boilerplate from another project
const rootReducer = combineReducers({
  // auth: authReducer,
  jobs: jobReducer
});

export default rootReducer