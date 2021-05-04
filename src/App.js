import React from 'react'

import Header from './components/Header'
import MainPage from './components/MainPage'
import BookList from './components/BookList'

export const App = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <BookList />
    </div>
  )
}
