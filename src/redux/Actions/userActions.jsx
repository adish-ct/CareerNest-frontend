import { SET_USER_DETAILS } from "./types"

const setUserDetails = (userDetails) => {
    return {
        type: SET_USER_DETAILS,
        payload: userDetails,
    }
}

export default setUserDetails;