

const initialState = []

const addBook = ()=>{
    return {
        type:'Book_Added',
        title,
        author
    }
}

const deleteBook = (id)=>{
    return{
        type:'Book_Deleted',
        id
    }
}

const bookReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Book_Added':
            return [...state,{
                title:action.title,
                author:action.author
            }]
        case 'Book_Deleted':
            return 
            state.filter((book)=>{
                return book.id != id
            })        
    }
    return state;
}

export {addBook,deleteBook}
export default bookReducer;

