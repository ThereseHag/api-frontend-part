import React from 'react'
import { Link } from 'react-router-dom'


const BookCard = ({ title, release_year, series, bookID, series_order, main_characters, img, summary, url }) => {
    return (
      <> 
      <Link to={`/books/${bookID}`}>
          <div className="book-details">
            
            <img className="cover-img" src={img} alt="book cover" />
            <h2>{title}</h2>
            <p><b>Publicerad:</b> {release_year}</p>
            <p><b>Hör till serie:</b> {series}</p>
            <p><b>Boken har plats i serien:</b> {series_order}</p>
            <p><b>Huvudpersoner:</b> {main_characters}</p>
          </div>
          </Link>

          </>
    )
}

export default BookCard