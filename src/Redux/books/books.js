import Books from "../../components/Books"
import React from "react"

const initialState = [{title:'', author:'', id:index+1}]
const addBook = ()=>{
    return {
        type:'Book_Added'
    }
}

const deleteBook = ()=>{
    return{
        type:'Book_Deleted'
    }
}

const bookReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Book_Added':
            return [...state,newState]
        case 'Book_Deleted':
            return 
            state.filter((book)=>{
                return book.id ! = id
            })        
    }
    return state;
}

export {addBook,deleteBook}
export default bookReducer;

