import { LOGIN } from '../types'

export const loadLogin = login => {

    return {
        type: LOGIN,
        payload: login
    }
}