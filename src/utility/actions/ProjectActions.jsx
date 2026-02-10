import axios from "axios"; 
import { projectsRequest, projectsSuccess, projectfailure } from "../slices/projectslices";

export const getprojects = () => async (dispatch) => {
    dispatch(projectsRequest());
    try{
        const {data} = await axios.get("/api/project/projectDetail");
        dispatch(projectsSuccess(data));
    }catch(error){
        const err = error.response && error.response.data ? error.response.data.message : error.message;
        dispatch(projectfailure(err));  
    }







}