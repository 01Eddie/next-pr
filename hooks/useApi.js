import { useState } from "react";

function useApi(apiFunc, defaultValue = []) {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (...args) => {
    setLoading(true);

    return apiFunc(...args)
      .then((res) => {
        setError(null);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        const isBlob = err.response.data instanceof Blob;

        if (isBlob) {
          err.response.data.text().then((text) => {
            setError(
              err.response
                ? JSON.parse(text)
                : { Title: "", Message: "El servidor no responde" }
            );
          });
        } else {
          setError(
            err.response
              ? err.response.data
              : { Title: "", Message: "El servidor no responde" }
          );
        }

        setLoading(false);
      });
  };

  return { data, loading, error, request };
}

export default useApi;
