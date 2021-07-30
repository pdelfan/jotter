import { useState, useEffect, useCallback } from "react";

const useFetchMongoField = (user, id, fetchFunction) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (user) {
      try {        
        let result = await fetchFunction(user.email, id);
        setData(result);
        setHasFetched(true);
      } catch (error) {
        setError(error.message);
      }
    }
  }, [fetchFunction, id, user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, hasFetched, error };
};

export default useFetchMongoField;
