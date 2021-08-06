import { useState, useEffect } from "react";
import { getNote } from "../services/realm/API";
import { useAuth0 } from "@auth0/auth0-react";

const useFetchNote = (bookID, noteID, isAuthenticated) => {
  const [hasFetchedNote, setHasFetchedNote] = useState(false);
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();

  useEffect(() => {
    const fetchNote = async () => {
      setHasFetchedNote(false);
      setLoading(true);
      try {
        let result = await getNote(user.email, bookID, noteID);
        setNote(result);
        setHasFetchedNote(true);        
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    if (!isAuthenticated) {
      setLoading(true);
      return;
    }

    if (user?.email) {
      fetchNote();
    }
  }, [isAuthenticated, user?.email, bookID, noteID]);

  return { note, hasFetchedNote, error, loading };
};

export default useFetchNote;
