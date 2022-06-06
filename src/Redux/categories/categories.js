import React from "react"

const initialState = []
const checkStatus = ()=>{
    return {
        type:'Status_Checked'
    }
}

const statusReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Status_Checked':
            return "Under Construction"   
    }
    return state;
}

export {checkStatus}
export default statusReducer;

