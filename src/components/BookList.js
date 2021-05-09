import React, { useState, useEffect } from "react";

import BookCard from "components/BookCard";
import Buttons from 'components/Buttons'

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://express-deployment-therese.herokuapp.com/books")
      .then((response) => response.json())
      .then((json) => setBooks(json));
  }, []);

  return (
    <>
      <div className="info-part">
        <p className="info-text">
          Margit Sandemo var en svensk/norsk författare som mellan åren 1964 och
          2018 skrev 185 böcker.
        </p>
        <p className="info-text">
          Hon är må hända mest känd för serien Sagan om Isfolket, men hon har
          även skrivit flera andra omtyckta och välkända serier samt ett flertal
          fristående titlar.
        </p>
        <p className="info-text">
          Några andra kända serier är Legenden om Ljusets Rike, Häxmästaren,
          Trollrunor och Sandemoserien.
        </p>
        <p className="info-text">
          Nedan hittar du så gott som alla böcker som Margit har skrivit. Klicka
          på respektive kort för att läsa en kort sammanfattning om boken.
        </p>
        <p className="info-text">
          Inne på respektive boksida hittar du även en länk till Storytel där du
          kan läsa/lyssna på boken. Naturligtvis går böckerna även att hitta på
          gott om andra platser
        </p>
      </div>
      <Buttons />

      <div className="book-card-container">
        {books && books.map((book) => <BookCard {...book} key={book.bookID} />)}
      </div>
    </>
  );
};

export default BookList;
