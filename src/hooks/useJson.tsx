import { useEffect, useState } from "react";

export function useJsonData<T = any>(fileName: string) {
  const [data, setData] = useState<T | null>(null);

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
        console.log(err.message);
      })
  }, [fileName]);

  return { data };
}