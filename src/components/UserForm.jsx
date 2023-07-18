"use client"

import {AiOutlineSearch} from "react-icons/ai"
import { useContext, useEffect, useRef, useState } from "react"
import appContext from "@/Context/AppContext"
import ErrorUser from "./ErrorUser"


function UserForm() {
const userRef= useRef()
const [error,setError] = useState(false)
const {isDark} = useContext(appContext)

const {setDataUser,setIsLoading} = useContext(appContext)

//Iniciamos la pagina con el perfil "octocat"
useEffect(()=>{
    fetchGitHub("octocat") 
    setTimeout(()=>{
        setIsLoading(true)  
    },300)  
    setIsLoading(false)
},[])

//Hacemos la peticion a la API usando el user que se ingreso en el input
const fetchGitHub  = async (userName) =>{
    const response = await fetch(`https://api.github.com/users/${userName}`)
    //verificamos si la respuesta es diferente a 200 para mostrar un mensaje de error. 
    if(response.status != 200 ) {
        setError(true)      
        return
    }else{
        setError(false)  
        const data = await response.json()
        setDataUser(data)
      }   
}

const handleSubmit = (e) =>{
    e.preventDefault()
    const userName = userRef.current.value
    if(!userName) {
        return
    }
    fetchGitHub(userName) 
}


  return (
    <>
    <form
    onSubmit={handleSubmit}
    className= {isDark ? 'flex items-center justify-between  gap-3  mb-2 grid-rows-2  w-11/12  md:w-[750px] p-2 text-zinc-300 bg-zinc-800 rounded-xl shadow-xl' : 'flex items-center justify-between  gap-3  mb-2 grid-rows-2  w-11/12  md:w-[750px] p-2 text-zinc-800 bg-white rounded-xl shadow-xl' }>
        <div className='flex items-center w-full gap-2 ml-2'>
            <AiOutlineSearch size={30}/>
            <input
            ref={userRef}
            className={isDark ? 'w-full p-1 text-sm outline-none text-zinc-300 md:text-xl rounded-xl bg-zinc-800': 'w-full p-1 text-sm text-black outline-none md:text-xl rounded-xl bg-white' } 
            type="text"
            placeholder='Search GitHub username...' 
            />
        </div>
        <button 
        className={isDark ? 'w-24 p-2 text-lg font-bold text-black bg-white md:text-xl hover:bg-zinc-300 rounded-xl' : "w-24 p-2 text-lg font-bold text-white bg-zinc-800 md:text-xl hover:bg-zinc-600 rounded-xl"}
        >Search
        </button>
    </form>
    {
      error && <ErrorUser/>
    }
    
    
    </>
    
  )
}

export default UserForm