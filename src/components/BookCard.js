import React from 'react'


const BookCard = ({ title, release_year, series, bookID, series_order, main_characters }) => {
    return (
      <>
          <div className="book-details">
            <h2>{title}</h2>
            <p>Released: {release_year}</p>
            <p>Belongs to serie: {series}</p>
            <p>Order in serie: {series_order}</p>
            <p>Main characters: {main_characters}</p>
          </div>

          </>
    )
}

export default BookCard