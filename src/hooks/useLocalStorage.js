import {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {

const [storedValues, setStoredValues] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });


  const setValue = value => {
      window.localStorage.setItem(key, value);
      setStoredValues(value) 
    }


    return [storedValues, setValue];
};


