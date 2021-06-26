import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Page/Layout";
import styled from "styled-components";

const NotFound = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFound>
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>
          Sorry, we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/">Go home</Link>
        </p>
      </NotFound>
    </Layout>
  );
};

export default NotFoundPage;
