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
        const response = await axiosInstance.get(`${baseUrl}/employer/application/?job=${jobId}&role=${userRole}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


const updateApplicationApi = async (applicationId, values) => {
    try {
        const response = await axiosInstance.put(`${baseUrl}/employer/application/${applicationId}/`, values)
        return response.data
    } catch (error) {
        console.error('Error updating application:', error);
    }
};

// change api from application/ to employer/application/

const applyJobApplicationApi = async (formData) => {
    try {
        const token = getLocal()
        if (token) {
            const response = await axiosInstance.post(`${baseUrl}/application/`, formData)
            return response
        }
    } catch (error) {

    }
}

export { fetchApplicationsApi, updateApplicationApi, applyJobApplicationApi };
