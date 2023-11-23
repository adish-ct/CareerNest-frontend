import { SET_USER_DETAILS } from "./Types"

const setUserDetails = (userDetails) => {
    console.log("working action");
    return {
        type: SET_USER_DETAILS,
        payload: userDetails,
    }
}

export default setUserDetails;