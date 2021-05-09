import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import BookList from './components/BookList'
import { SingleBook } from './pages/SingleBook'
import { Sandemoserien } from 'pages/Sandemoserien'
import { Haxmastaren } from 'pages/Haxmastaren'
import { Trollrunor } from 'pages/Trollrunor'
import { Blaljus } from 'pages/Blaljus'
import { Fristaende } from 'pages/Fristaende'
import { Isfolket } from 'pages/Isfolket'
import { LjusetsRike } from 'pages/LjusetsRike'
import { Riddarna } from 'pages/Riddarna'
import { Kiara } from 'pages/Kiara'
import { Documentation } from 'pages/Documentation'
import Footer from 'components/Footer'

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
        <Route path='/Sandemoserien'>
          <Sandemoserien />
          </Route>
          <Route path='/Haxmastaren'>
          <Haxmastaren />
          </Route>
          <Route path='/Trollrunor'>
          <Trollrunor />
          </Route>
          <Route path='/Blaljus'>
          <Blaljus />
          </Route>
          <Route path='/Fristaende'>
          <Fristaende />
          </Route>
          <Route path='/Isfolket'>
          <Isfolket />
          </Route>
          <Route path='/LjusetsRike'>
          <LjusetsRike />
          </Route>
          <Route path='/Riddarna'>
          <Riddarna />
          </Route>
          <Route path='/Kiara'>
          <Kiara />
          </Route>
          <Route path='/Documentation'>
          <Documentation />
          </Route>
          
        
      </Switch>
      </BrowserRouter>
      <Footer />
      </div>
    </div>
  )
}
