import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as Switch,
} from 'react-router-dom'
import React, { useContext } from 'react'
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import Checkout from './pages/Checkout'
import Admin from './pages/Admin'
import { UserContext } from './contexts/userContext'

function ProtectedRoutes({ children }) {
  const { user } = useContext(UserContext)
  return user?.role === 'admin' ? children : <Navigate to="/" />
}

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<Main />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          }
        />
      </Switch>
    </Router>
  )
}

export default Routes
