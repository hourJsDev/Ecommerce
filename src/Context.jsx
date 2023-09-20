import React, { createContext, useContext ,useEffect,useState} from 'react'
const url = "https://fakestoreapi.com/products"
import useFetchApi from './Components/useFetchApi'
const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)
const Context = ({children}) => {
  const {getData} = useFetchApi(url)
  const [data,setData] = useState(getData)
  useEffect(()=>{
    setData(getData)
  },[getData])
  const [filter,setFilter] = useState("")
  return (
   <GlobalContext.Provider value={{getData,data,setData,filter,setFilter}}>
    {children}
   </GlobalContext.Provider>   
  )
}
export default Context
