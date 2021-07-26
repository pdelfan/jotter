import React from "react";
import Layout from "../components/Page/Layout";
import { RedirectHome } from "../components/Routing";
import { convertFromRaw } from "draft-js";
import TextEditor from "../components/Editor/TextEditor";

const Note = ({ location }) => {
  const username = location ? location.state.user.email : "";
  const bookID = location ? location.state.bookID : "";
  const content = location ? location.state.content : "";  
  const noteID = location ? location.state.noteID : "";

  const current = convertFromRaw(JSON.parse(content));

  if (location.state === null) {
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
          location={location}
        />
      </Layout>
    );
  }
};

export default Note;
