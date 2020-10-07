import { LOGIN } from "../types" 

const initialState = {
    login: ""
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: 
        return {
            ...state,
            login: action.payload
        }
        default: return state
    }
}