import React from "react";
import Layout from "../components/Page/Layout";
import TextEditor from "../components/Editor/TextEditor";

const AddNote = ({ location }) => {
  const isbn = location.state ? location.state.isbn : "";
  const username = location.state ? location.state.user.email : "";

  return (
    <Layout>
      <TextEditor username={username} bookID={isbn} />
    </Layout>
  );
};

export default AddNote;
