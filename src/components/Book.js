/* eslint-disable react/prop-types */
import React from 'react';

function Book(props) {
  
  return (
    <li className="bookList">
      <div className="bookContainer">
        <span>
          
        </span>
        <button type="button" className="delete">
          Delete
        </button>
      </div>
    </li>
  );
}

export default Book;
