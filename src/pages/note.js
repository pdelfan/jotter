import React, { useState } from "react";
import Layout from "../components/Page/Layout";
import { RedirectHome } from "../components/Routing";
import { convertFromRaw } from "draft-js";
import TextEditor from "../components/Editor/TextEditor";


const Note = ({ location }) => {  
  const username = location.state ? location.state.user.email : "";
  const bookID = location.state ? location.state.bookID : "";
  const content = location.state ? location.state.content : "";
  const title = location.state ? location.state.title : "";
  const noteID = location.state ? location.state.noteID: "";
  const [input, setInput] = useState(title);

  const handleType = (e) => {
    setInput(e.target.value);
  };

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
          placeholder={"Title..."}
          handleType={handleType}
          noteTitle={input !== "" ? input : "Untitled"}
          input={input}
          editMode={true}
          initialContent={current}
        />
      </Layout>
    );
  }
};

export default Note;
