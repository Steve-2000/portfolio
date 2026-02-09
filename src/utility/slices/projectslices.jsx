import { createSlice } from "@reduxjs/toolkit";

const projectslices=createSlice({
    name:'projects',
    initialState:{
        loading:false,
        projects:[],
        error:null
    },
    reducers:{
        projectsRequest(state){
            state.loading=true;

        },
        projectsSuccess(state,action){
            state.loading=false;
            state.projects=action.payload.data || action.payload;
            state.error=null;


    },
    projectfailure(state,action){  
        state.loading=false;
    
        state.error=action.payload; 
    }

}
})
const{reducer,actions}=projectslices;    


export const { projectsRequest, projectsSuccess, projectfailure } = actions;

export default reducer;
