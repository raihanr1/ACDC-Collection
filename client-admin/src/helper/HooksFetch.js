import { useState, useEffect } from "react";
import baseUrl from "../BaseUrlConfig";
export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}${url}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setLoading(false);
        setData(data);
        console.log(data, ">>> masuk data");
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return [data, isLoading, isError];
}
