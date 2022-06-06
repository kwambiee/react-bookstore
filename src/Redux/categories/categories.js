/*eslint linebreak-style: ["error", "windows"]*/
const STATUS_CHECKED ='./react-bookstore/bookreducer/STATUS_CHECKED'


export const checkStatus = ()=>{
    return {
        type:STATUS_CHECKED
    }
}

export default function statusReducer (state=[], action) {
    switch(action.type){
        case STATUS_CHECKED:
            return "Under Construction"  
    }
    return state
}



