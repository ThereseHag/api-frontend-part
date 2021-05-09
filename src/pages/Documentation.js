import React from 'react'
import { Link } from 'react-router-dom'

export const Documentation = () => {
    return (
        <>
        <Link to="/" className="button-back">
            <span className="arrow-box">&#x2B05; </span>
            <span className="back-link-text"> Tillbaka till boksamlingen</span>
          </Link>
        <div className="info-part">
            <h1>Sandemo Collection API</h1>
            <p className="info-text">This dataset contains information about books written by the Nordic author Margit Sandemo</p>
            <p className="info-text">This is a REST API and at the moment it only support GET requests.</p>
            <h2>Structure</h2>
            <h3>MainPage URL</h3>
        <a className="info-text" href="https://express-deployment-therese.herokuapp.com/">
        https://express-deployment-therese.herokuapp.com/
      </a>
        <p className="info-text">The main URL returns a list presenting all available endpoints</p>
        <h3>Endpoints</h3>
        <a className="text-info" href="https://express-deployment-therese.herokuapp.com/books">
          GET /books
      </a>
        <p className="text-info">This endpoint returns a JSON containing all available books from the dataset</p>
        <a className="text-info" href="https://express-deployment-therese.herokuapp.com/books/:id">
          GET /books/:id
      </a>
        <p>This endpoint returns a JSON displaying one specific book with the id selected.</p>
        <a className="text-info" href="https://express-deployment-therese.herokuapp.com/title/:title">
          GET /title/:title
      </a>
        <p className="text-info">This endpoint returns a JSON displaying one specific book with the selected title.</p>
        <a className="text-info" href="https://express-deployment-therese.herokuapp.com/release/:release">
          GET /release/:release
      </a>
        <p className="text-info">This endpoint returns a JSON containing all books from the dataset which was released the year specified in the URL.</p>
        <a className="text-info" href="https://express-deployment-therese.herokuapp.com/series/:series">
          GET /series/:series
      </a>
        <p className="text-info">This endpoint returns a JSON presenting all books from the book series specified in the URL</p>
        <h3>Query parameters</h3>
        <p className="text-info">The query parameters can be applied to /books to filter data if you want to get books where one specific character is in the book</p>
        <p className="text-info">This can be achieved by using the following (adding the character name after =):
           <p className="text-info"> <a href="https://express-deployment-therese.herokuapp.com/books?character=Tengel">GET / books?character= </a> </p>

        </p>
        </div>
        </>
    )
}