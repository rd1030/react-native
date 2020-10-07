import { createStore, combineReducers } from 'redux'
import { loginReducer } from './reducers/login'

const rootReducer = combineReducers({
    login: loginReducer
})

export default  createStore(rootReducer)