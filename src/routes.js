import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom'
import React from 'react'
import Main from './pages/Main'
import SignUp from './pages/SignUp'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<Main />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Switch>
    </Router>
  )
}

export default Routes
