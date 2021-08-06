import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const useFetchMongoField = (id, fetchFunction, isAuthenticated) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      setHasFetched(false);
      setLoading(true);
      try {
        let result = await fetchFunction(user.email, id);
        setData(result);
        setHasFetched(true);        
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
      fetchData();
    }
  }, [fetchFunction, id, isAuthenticated, user?.email]);

  return { data, hasFetched, error, loading };
};

export default useFetchMongoField;
