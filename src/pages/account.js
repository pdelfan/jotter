import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Page/Layout";
import AccountView from "../components/Account";
import PrivateRoute from "../components/Routing";
// import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
  // const { loading, user } = useAuth0();
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/account" component={AccountView} />
      </Router>
    </Layout>
  );
};
export default Account;
