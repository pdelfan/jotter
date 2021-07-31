import React from "react";
import Layout from "../components/Page/Layout";
import { RedirectHome } from "../components/Routing";
import { convertFromRaw } from "draft-js";
import TextEditor from "../components/Editor/TextEditor";

const Note = () => {
  const user = localStorage.getItem("user");
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
          username={user}
          bookID={bookID}
          noteID={noteID}
          initialContent={current}
          noteTitle={title}
          existingNote={true}
          editMode={false}
        />
      </Layout>
    );
  }
};

export default Note;
