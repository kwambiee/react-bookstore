import React from 'react';

function Book(props) {
  return (
    <li className="bookList">
      <div className="bookContainer">
        <span>
          {props.bookProps.title} by {props.bookProps.author}
        </span>
        <button className="delete">Delete</button>
      </div>
    </li>
  );
}

export default Book;
