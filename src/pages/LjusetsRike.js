import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import BookCard from "components/BookCard"

export const LjusetsRike = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("https://express-deployment-therese.herokuapp.com/series/Legendenomljusetsrike")
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
          De här böckerna tillhör alla Legenden om Ljusets Rike. I de här böckerna får du åter stifta bekantskap med några av de mest kända och framträdande karaktärerna från serierna Sagan om Isfolket och Häxmästaren.</p>
          <p className="info-text">Det kan vara en fördel att ha läst de två serierna innan du tar itu med Legenden om Ljusets Rike, men det är naturligtvis inget måste.</p>        
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