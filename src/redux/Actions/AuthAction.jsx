import { AUTHENTICATION, LOADING } from './Types'

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
