import { PROFILE_DETAILS } from './Types'


const profileAction = (profileDetails) => {
    return {
        type: PROFILE_DETAILS,
        payload: profileDetails,
    }
}

export default profileAction;