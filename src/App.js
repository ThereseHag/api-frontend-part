import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import BookList from './components/BookList'
import { SingleBook } from './pages/SingleBook'

export const App = () => {
  return (
    <div>
      <Header />
      <div className="main-box">
      <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <BookList />
        </Route>
        <Route path='/books/:bookID'>
          <SingleBook />
        </Route>
        
      </Switch>
      </BrowserRouter>
      </div>
    </div>
  )
}
