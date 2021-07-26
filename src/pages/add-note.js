import React, { useState } from "react";
import Layout from "../components/Page/Layout";
import TextEditor from "../components/Editor/TextEditor";

const AddNote = ({ location }) => {
  const isbn = location.state ? location.state.isbn : "";
  const username = location.state ? location.state.user.email : "";

  const [input, setInput] = useState("");

  const handleType = (e) => {
    setInput(e.target.value);
  };

  return (
    <Layout>
      <TextEditor
        username={username}
        bookID={isbn}
        placeholder="Title..."
        handleType={handleType}
        noteTitle={input !== "" ? input : "Untitled"}        
      />
    </Layout>
  );
};

export default AddNote;
