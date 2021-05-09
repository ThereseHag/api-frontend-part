import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import BookCard from "components/BookCard"

export const Haxmastaren = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("https://express-deployment-therese.herokuapp.com/series/Häxmästaren")
      .then((response) => response.json())
      .then((json) => setBooks(json))
  }, [])

  return (
    <>
    <Link to="/" className="button-back">
            <span className="arrow-box">&#x2B05; </span>
            <span className="back-link-text"> Tillbaka till boksamlingen</span>
          </Link>
      <div className="info-part">
        <p className="info-text">
          De här böckerna tillhör alla serien Häxmästaren. De handlar om häxmästaren Mori - ursprungligen från Island, och om de i hans närhet. 
        </p>
        
        <p className="info-text">
          Klicka på respektive kort för att läsa en kort sammanfattning om boken.
        </p>
        <p className="info-text">
          Inne på respektive boksida hittar du även en länk till Storytel där du
          kan läsa/lyssna på boken. Naturligtvis går böckerna även att hitta på
          gott om andra platser
        </p>
      </div>

      <div className="book-card-container">
        {books && books.map((book) => <BookCard {...book} key={book.bookID} />)}
      </div>
    </>
  )
}
