import React from "react";
import Layout from "../components/Page/Layout";
import { RedirectHome } from "../components/Routing";
import { convertFromRaw } from "draft-js";
import TextEditor from "../components/Editor/TextEditor";
import { useAuth0 } from "../services/auth";

const Note = () => {
  const { user } = useAuth0();
  const username = user.email;
  const bookID = localStorage.getItem("bookID");
  const content = localStorage.getItem("content");
  const noteID = localStorage.getItem("noteID");
  const title = localStorage.getItem("title");

  const current = convertFromRaw(JSON.parse(content));

  if (bookID === null) {
    return <RedirectHome />;
  } else {
    return (
      <Layout>
        <TextEditor
          username={username}
          bookID={bookID}
          noteID={noteID}
          editMode={true}
          initialContent={current}
          noteTitle={title}
        />
      </Layout>
    );
  }
};

export default Note;
