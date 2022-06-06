import React from 'react';
import bookReducer from './Redux/books/books.js'

const Addbook = ({dispatch}) => {

  const inputBook=(e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(bookReducer(input.value))
    input.value = ''
  }}
  return (
    <div className="formContainer">
      <span className="addBook">ADD NEW BOOK</span>
      <form className="form" onSubmit={addbook}>
        <input className="formTitle" type="text"  placeholder="Book Title" />
        <input className="formAuthor" type="text" placeholder="Author" />
        <button type="button" className="input-submit">
          Add book
        </button>
      </form>
    </div>
  );
}

export default Addbook;
