import { useState, useEffect, useCallback } from "react";
import { getNote } from "../services/realm/API";

const useFetchNote = (user, bookID, noteID) => {
  const [hasFetchedNote, setHasFetchedNote] = useState(false);
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);

  const fetchNote = useCallback(async () => {
    if (user) {
      try {
        let result = await getNote(user.email, bookID, noteID);
        setNote(result);
        setHasFetchedNote(true);
      } catch (error) {
        setError(error.message);
      }
    }
  }, [bookID, noteID, user]);

  useEffect(() => {
    fetchNote();
  }, [fetchNote]);

  return { note, hasFetchedNote, error };
};

export default useFetchNote;
