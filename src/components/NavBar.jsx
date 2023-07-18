"use client"
import appContext from '@/Context/AppContext'
import React, { useContext} from 'react'


function NavBar() {
const {isDark,setIsDark} = useContext(appContext)

const handleClick = () =>{
    if(isDark){
        setIsDark(false)
        //Agregamos una clase al html dark o ligth
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("ligth")
    }else{
        setIsDark(true)
        document.documentElement.classList.remove("ligth")
        document.documentElement.classList.add("dark")
    }
}
  return (
    <nav className=' px-2 my-8 flex items-center justify-between  w-11/12 md:w-[750px]'>
        <h1 
        className={isDark ? 'text-3xl text-white font-bold md:text-4xl ' : ' text-3xl font-bold text-black md:text-4xl '}
        >DevFinder_
        </h1>
        <button className={isDark? ' text-md  md:text-xl text-white font-bold hover:text-zinc-300':' text-md md:text-xl font-bold hover:text-zinc-900'} onClick={handleClick}>
          {!isDark ? "DARK 🌑" : "LIGTH ☀️" }
        </button>
    </nav>
  )
}

export default NavBar