import axios from "axios"; 
import { projectsRequest, projectsSuccess, projectfailure } from "../slices/projectslices";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const getprojects = () => async (dispatch) => {
    dispatch(projectsRequest());
    try{
        const {data} = await axios.get(`${API_BASE_URL}/api/project/projectDetail`);
        console.log('API response:', data);
        console.log('Projects array:', data?.data);
        dispatch(projectsSuccess(data));
    }catch(error){
        const err = error.response && error.response.data ? error.response.data.message : error.message;
        console.error('API error:', error.response?.status, err);
        dispatch(projectfailure(err));  
    }








}