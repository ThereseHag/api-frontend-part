import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

 export const SingleBook = () => {
  const { bookID } = useParams()
  const [bookDetails, setBookDetails] = useState({})

  useEffect(() => {
    fetch(
      `https://express-deployment-therese.herokuapp.com/books/${bookID}`
    )
      .then((response) => response.json())
      .then((json) => setBookDetails(json))
  }, [bookID])

  return (
    <>
      <div className="main-wrapper">
        <div
          className="the-background"
        >
          <Link to="/" className="button-back">
            <span className="arrow-box">&#x2B05; </span>
            <span className="back-link-text"> Tillbaka till boksamlingen</span>
          </Link>

          <div className="information">
            <img
              className="info-image"
              src={bookDetails.img}
              alt={bookDetails.title}
            />
            <div className="book-info">
              <h1 className="book-details-title">
                {bookDetails.title}
              </h1>
              <p>Den här boken gavs ut {bookDetails.release_year}. Det hände dock att Margit skrev vissa av sina böcker flera årtionden innan de så småningom publicerades.</p>
              <p className="summary">{bookDetails.summary}</p>
              <p>Huvudpersonerna i boken är {bookDetails.main_characters}.</p>
              <p> <a href={bookDetails.url}>Gå hit för att läsa/lyssna på boken <span role="img" aria-label="books"> 📚 </span></a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
