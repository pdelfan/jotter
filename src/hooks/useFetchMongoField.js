import { useState, useEffect } from "react";

const useFetchMongoField = (user, id, fetchFunction) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          let result = await fetchFunction(user.email, id);
          setData(result);
          setHasFetched(true);
        } catch (error) {
          console.log(error.message);
          setError(error.message);
        }
      }
    };
    fetchData();
  }, [data, user, id, fetchFunction]);

  return { data, hasFetched, error };
};

export default useFetchMongoField;
