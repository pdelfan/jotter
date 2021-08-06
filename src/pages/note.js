import React from "react";
import Layout from "../components/Page/Layout";
import { RedirectHome } from "../components/Routing";
import { convertFromRaw } from "draft-js";
import TextEditor from "../components/Editor/TextEditor";
import * as queryString from "query-string";
import { useAuth0 } from "@auth0/auth0-react";
import useFetchNote from "../hooks/useFetchNote";
import { Wrapper, Loading } from "../components/Notification & Error/Loading";
import LoadingIcon from "../assets/loading.svg";

const Note = ({ location }) => {
  const { user, isAuthenticated } = useAuth0();
  const bookID = queryString.parse(location.search).book;
  const noteID = queryString.parse(location.search).note;
  const { note, hasFetchedNote, loading } = useFetchNote(
    bookID,
    noteID,
    isAuthenticated
  );

  if (bookID === null) {
    return <RedirectHome />;
  } else {
    return (
      <Layout title="Note">
        {hasFetchedNote && (
          <TextEditor
            username={user.email}
            bookID={bookID}
            noteID={noteID}
            initialContent={convertFromRaw(JSON.parse(note.content))}
            noteTitle={note.noteTitle}
            existingNote={true}
            editMode={false}
          />
        )}
        {loading && (
          <Wrapper minHeight="100vh">
            <Loading
              minHeight="50vh"
              src={LoadingIcon}
              alt="Loading icon"
              className="rotating"
            />
          </Wrapper>
        )}
      </Layout>
    );
  }
};

export default Note;
