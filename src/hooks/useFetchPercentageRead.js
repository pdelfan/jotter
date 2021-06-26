import { useState, useEffect } from "react";
import { getPercentageRead } from "../services/realm/API";

const useFetchPercentageRead = (user, id) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          setHasFetched(false);
          let result = await getPercentageRead(user.nickname, id);
          setData(result);
          setHasFetched(true);
        } catch (error) {
          console.log(error.message);
          setError(error.message);
        }
      }
    };
    fetchData();
  }, [user, id, data]);

  return { data, hasFetched, error };
};

export default useFetchPercentageRead;
