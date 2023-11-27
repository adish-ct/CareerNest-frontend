import { EMPLOYER_DETAILS } from './Types'

const employerAction = (employerDetails) => {
    return {
        type: EMPLOYER_DETAILS,
        payload: employerDetails,
    }
}

export default employerAction;