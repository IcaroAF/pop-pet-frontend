import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom'
import React from 'react'
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import Checkout from './pages/Checkout'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<Main />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
      </Switch>
    </Router>
  )
}

export default Routes
