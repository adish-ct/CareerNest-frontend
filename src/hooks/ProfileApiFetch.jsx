import axios from "axios";
import { baseUrl } from "../api/Api";

const fetchProfile = async () => {
    const response = await axios.get(`${baseUrl}/recruiter-update/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        },
        credentials: 'include',
    });
    const data = await response.data;
    return data;
}


export default fetchProfile;