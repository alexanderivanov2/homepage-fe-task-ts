import { useEffect, useState } from "react";

export function useJsonData<T = any>(fileName: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/data/${fileName}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${fileName}.json`);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fileName]);

  return { data, loading, error };
}