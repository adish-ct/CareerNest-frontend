import getLocal from '../helper/Auth';
import axios from 'axios';
import { baseUrl } from './Api';

const axiosInstance = axios.create();

// Add a request interceptor to set the authorization token before each request
axiosInstance.interceptors.request.use((config) => {
    const token = getLocal();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // Make sure to return the config object
});

const fetchApplicationsApi = async (jobId, userRole) => {
    try {
        const response = await axiosInstance.get(`${baseUrl}/application/?job=${jobId}&role=${userRole}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const updateApplicationApi = async (applicationId, values) => {
    try {
        const token = getLocal();
        console.log(values);
        const response = await axiosInstance.put(`${baseUrl}/application/${applicationId}/`, values)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error('Error updating application:', error);
    }
};

export { fetchApplicationsApi, updateApplicationApi };
