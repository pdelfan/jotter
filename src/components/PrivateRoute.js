import React, { useEffect } from "react"
import { useAuth0 } from "../services/auth"
import { navigate } from 'gatsby';


const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0()

  useEffect(() => {
    if (loading || isAuthenticated) {
      return
    }
    navigate('/');

  }, [loading, isAuthenticated, loginWithRedirect, path])

  return isAuthenticated === true ? <Component {...rest} /> : null
}

export default PrivateRoute