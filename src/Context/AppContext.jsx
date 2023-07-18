"use client"
import { createContext, useState} from "react"

const appContext = createContext();

export const AppProvider = ({children}) =>{
const [dataUser,setDataUser] = useState([])
const [isLoading, setIsLoading] = useState(false)
const[isDark,setIsDark] = useState(true)

	return( 
		<appContext.Provider value={{isLoading,setIsLoading,dataUser,setDataUser,setIsDark,isDark}}> 
				{children}          
		</appContext.Provider>	
)
}

export default appContext;

