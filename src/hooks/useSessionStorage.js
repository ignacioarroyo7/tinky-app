import React, {useState, useEffect} from "react";

function useSessionStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      const storedValue = sessionStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });
  
    useEffect(() => {
      sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    function updateValue(newValue) {
      setValue(newValue);
      sessionStorage.setItem(key, JSON.stringify(newValue));
    }
  
    return [value, updateValue];
  }

export default useSessionStorage;