/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../Redux/books/books';

function Book() {
	const showBook = useSelector((state) => state);
	const dispatch = useDispatch();
	return (
		<li className='bookList'>
			<div className='bookContainer'>
				<span>
					{showBook.map((book) => (
						<span>{book}</span>
					))}
				</span>
				<button
					type='button'
					className='delete'
					onClick={() => {
						dispatch(deleteBook(id));
					}}
				>
					Delete
				</button>
			</div>
		</li>
	);
}

export default Book;
