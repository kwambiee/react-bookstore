/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

function Book() {
	const showBook = useSelector((state) => [state]);
	return (
		<li className='bookList'>
			<div className='bookContainer'>
				<span>{showBook}</span>
				<button type='button' className='delete'>
					Delete
				</button>
			</div>
		</li>
	);
}

export default Book;
