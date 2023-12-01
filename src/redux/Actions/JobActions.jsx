import { SET_JOB_DETAILS } from './Types';

const setJobDetails = (job) => {
    return {
        type: SET_JOB_DETAILS,
        payload: job,
    };
};

export default setJobDetails;