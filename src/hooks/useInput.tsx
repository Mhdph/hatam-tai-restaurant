import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [suggestion, setSuggestion] = useState([]);

  const handleChange = async (event: any) => {
    setValue(event.target.value);
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoibWRocGgiLCJhIjoiY2xjdWl2YTlpMHZnODNvczF3MjJvMmhleSJ9.jmlbzAmRD4BE0qsLyYVdXA&autocomplate=true`;
      const response = await fetch(endpoint);
      const results = await response.json();
      setSuggestion(results?.features);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    value,
    onChange: handleChange,
    setValue,
    suggestion,
    setSuggestion,
  };
};

export default useInput;
