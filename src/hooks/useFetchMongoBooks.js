import { useState, useEffect } from "react";

const useFetchMongoBooks = ({user, from}) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          setHasFetched(false);
          let result = await from(user.nickname);
          setData(result);
          setHasFetched(true);          
        } catch (error) {
          console.log(error.message);
          setError(error.message);
        }
      }
    };
    fetchData();
  }, [user, from]);

  return { data, hasFetched, error };
};

export default useFetchMongoBooks;