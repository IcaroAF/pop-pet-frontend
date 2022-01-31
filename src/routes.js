import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom'
import React from 'react'
import Main from './pages/Main'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<Main />} />
      </Switch>
    </Router>
  )
}

export default Routes
