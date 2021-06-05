import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import AccountView from "../components/Account"
import PrivateRoute from "../components/Routing"

const Account = () => (
  <Layout>
    <Router>
    <PrivateRoute path="/account" component={AccountView} />
    </Router>
  </Layout>
)

export default Account