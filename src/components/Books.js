import React, { useState } from 'react';
import AddBook from './addBook';
import Book from './Book';

function Books() {
  const [book, setBook] = useState({
    title: 'The Well Watered Woman',
    author: 'Gretchen Saffles',
  });

  return (
    <div>
      <Book bookProps={book} />
      <AddBook />
    </div>
  );
}

export default Books;
