import React from 'react'


const BookCard = ({ title, release_year, series, bookID, series_order, main_characters, img }) => {
    return (
      <>
          <div className="book-details">
            <img src={img} alt="book cover" />
            <h2>{title}</h2>
            <p><b>Released:</b> {release_year}</p>
            <p><b>Belongs to serie:</b> {series}</p>
            <p><b>Order in serie:</b> {series_order}</p>
            <p><b>Main characters:</b> {main_characters}</p>
          </div>

          </>
    )
}

export default BookCard