import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsWithAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(initialUrl);
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend: ${errorMessage}`);
    }
  };
  // const handleUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    data,
    setUrl,
    loading,
    errorMessage,
  };
}
