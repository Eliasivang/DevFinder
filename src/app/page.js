"use client"
import appContext from '@/Context/AppContext'
import UserForm from '@/components/UserForm'
import UserInfo from '@/components/UserInfo'
import { useContext } from 'react'
  

export default function Home() {

const {isLoading} = useContext(appContext)
  return (
    <>
    <UserForm/>
      {
        isLoading &&  <UserInfo/>  
      }s 
    </>
  )
}
