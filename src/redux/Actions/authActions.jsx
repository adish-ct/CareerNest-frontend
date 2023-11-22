import { AUTHENTICATION, LOADING } from './types'

export const toggleAuthentication = () => {
    return {
        type: AUTHENTICATION,
    }
}


export const toggleLoading = () => {
    return {
        type: LOADING,
    }
}

