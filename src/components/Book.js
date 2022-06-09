import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, BookDeleted } from '../Redux/books/books';

function Book() {
	const showBook = useSelector((state) => state.books);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBooks());
	}, []);

	const deleteHandler = (id) => {
		dispatch(BookDeleted(id));
	};

	return (
		<li className='bookList'>
			<div className='bookContainer'>
				<div>
					{showBook.map((book) => (
						<div key={book.id} className='eachbook'>
							<div>
								<h3 className='bookCategory'>{book.category}</h3>
								<h1 className='bookTitle'>{book.title}</h1>
								<h2>{book.author}</h2>
								<div>
									<span>Comments</span>
									<span>
										<button
											type='button'
											className='delete'
											onClick={() => {
												deleteHandler(book.id);
											}}
										>
											Delete
										</button>
									</span>
									<span>Edit</span>
								</div>
							</div>
							<div>
								<span></span>
								<span>64%</span>
							</div>
							<div>
								<h2>CURRENT CHAPTER</h2>
								<h2>CHAPTER 17</h2>
								<button type='button'>UPDATE PROGRESS</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</li>
	);
}

export default Book;
