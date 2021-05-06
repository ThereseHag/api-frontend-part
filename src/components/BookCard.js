import React from 'react'
import { Link } from 'react-router-dom'


const BookCard = ({ title, release_year, series, bookID, series_order, main_characters, img, summary, url }) => {
    return (
      <> 
      <Link to={`/books/${bookID}`}>
          <div className="book-details">
            
            <img className="cover-img" src={img} alt="book cover" />
            <h2>{title}</h2>
            <p><b>Released:</b> {release_year}</p>
            <p><b>Belongs to serie:</b> {series}</p>
            <p><b>Order in serie:</b> {series_order}</p>
            <p><b>Main characters:</b> {main_characters}</p>
          </div>
          </Link>

          </>
    )
}

export default BookCard