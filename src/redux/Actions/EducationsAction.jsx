import { EDUCATIONS } from "./Types"

const educationAction = (educationDetails) => {
    return {
        type: EDUCATIONS,
        payload: educationDetails,
    }
}

export default educationAction;