import getLocal from '../helper/Auth'
import axios from 'axios'
import { baseUrl } from './Api'

const fetchApplicationsApi = async (jobId, userRole) => {


    try {
        const token = getLocal();
        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const response = await axios.get(`${baseUrl}/application/?job=${jobId}&role=${userRole}`, { headers });
            return response.data
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export { fetchApplicationsApi };