import React, { useState, useEffect } from 'react'

import BookCard from 'components/BookCard'

const BookList = () => {
const [books, setBooks] = useState([])

useEffect(() => {
    fetch('https://express-deployment-therese.herokuapp.com/books')
      .then((response) => response.json())
      .then((json) => setBooks(json))
  }, [])



    return (
        <>
        <div className="book-card-container">
        {books && books.map(book => (
          <BookCard {...book} key={book.bookID} />
        ))}
      </div>
      </>
    )
}


export default BookList
