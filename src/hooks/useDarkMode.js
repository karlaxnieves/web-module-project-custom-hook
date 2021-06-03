import {useLocalStorage} from '../hooks/useLocalStorage'

export const useDarkMode = (initialValue) =>{
const [value, setValue] = useLocalStorage("darkmode", initialValue)

return [value, setValue];
}

