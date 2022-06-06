const BOOK_ADDED = './react-bookstore/bookreducer/BOOK_ADDED'
const BOOK_DELETED = './react-bookstore/bookreducer/BOOK_DELETED'

export const bookAdded = ()=>{
    return {
        type:BOOK_ADDED,
        title,
        author
    }
}

export const deleteBook = ()=>{
    return{
        type:BOOK_DELETED,
        id:null
    }
}

const bookReducer = (state=[], action) => {
    switch(action.type){
        case BOOK_ADDED:
            return [...state,{
                title:action.title,
                author:action.author
            }]
        case BOOK_DELETED:
            return state.filter((action)=>{
                return action.id != id
            }) 
        default:
            return state       
    }
}


export default bookReducer;

