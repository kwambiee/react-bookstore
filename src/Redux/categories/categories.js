const STATUS_CHECKED ='./react-bookstore/bookreducer/STATUS_CHECKED'


export const checkStatus = ()=>{
    return {
        type:STATUS_CHECKED
    }
}

const statusReducer = (state=[], action) => {
    switch(action.type){
        case STATUS_CHECKED:
            return "Under Construction" 
        default:
            return state  
    }
}

export default statusReducer;

