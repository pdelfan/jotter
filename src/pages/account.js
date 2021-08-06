import React from "react";
import Layout from "../components/Page/Layout";
import AccountView from "../components/Account";
import Header from "../components/Page/Headings";

const Account = () => {
  return (
    <Layout title="Account">
      <Header header="Your profile" subheader="Welcome back" />
      <AccountView />      
    </Layout>
  );
};
export default Account;
