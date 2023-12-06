import { EXPERIENCE, EXPERIENCE_DETAILS } from "./Types"


const experienceAction = (experienceDetails) => {
    return {
        type: EXPERIENCE,
        payload: experienceDetails,
    }
}

export const experienceDetailsAction = (experience) => {
    return {
        type: EXPERIENCE_DETAILS,
        payload: experience,
    }
}

export default experienceAction;