"use client"
import appContext from '@/Context/AppContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import {MdLocationOn} from "react-icons/md"
import {BsLink45Deg} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsFillBuildingsFill} from "react-icons/bs"


function UserInfo() {
const {dataUser,isLoading,isDark} = useContext(appContext)

const validateLink =  (url) =>{
    // verificamos si el usuario tiene pagina , si es asi retornamos el valor para poder usarlo en href
    if(/^https:\/\//i.test(url) || /^http:\/\//i.test(url)){
        return url
    } 
}


  return ( 
    
    <article 
    className={isDark ? "grid-rows-2 text-sm md:text-md mt-2  w-11/12  md:w-[750px] p-8 text-zinc-300 bg-zinc-800 shadow-xl rounded-xl"  :  " grid-rows-2 mt-2 text-sm md:text-md  w-11/12  md:w-[750px] p-8 text-zinc-600 bg-white shadow-xl rounded-xl" }>
            <section className='flex items-center justify-start gap-3'>
                        
                    <Image 
                    className='p-2 rounded-full w-[90px] md:w-[160px] ' 
                    width={160} height={160} 
                    src={dataUser.avatar_url} 
                    alt={`${dataUser.login} avatar`}/>
                    <div className='grid w-full sm:grid-cols-2 '>
                            <div
                            className='grid'>
                                    <h1 
                                    className={isDark ? 'text-lg font-bold text-white md:text-3xl': 'text-lg font-bold text-black md:text-3xl'}>
                                    {dataUser.name}                 
                                    </h1>
                                    <a href={`https://github.com/${dataUser.login}`} className='text-blue-400'>
                                    @{dataUser.login}
                                    </a>                                        
                            </div>  
                            < div className='flex justify-start w-full md:justify-end'>
                                    <p className='mt-2'>
                                    {new Date (dataUser.created_at || "").toLocaleDateString('es',{
                                    year:"numeric",
                                    month:"long",
                                    day:"numeric"
                                    })}
                                    </p>
                            </div> 
                    </div> 
                    
            </section>  
            <div className='flex justify-end w-full mt-6 md:mt-0 text-md'>
                    <p className=' w-full md:w-[514px]'>{dataUser.bio === null ? "This Profile has no bio": dataUser.bio}</p>
            </div>
            <section className='flex justify-end w-full my-6 text-sm '>
                    <div className={isDark ? 'flex w-full md:w-[514px] justify-between p-2 px-4  rounded-xl bg-zinc-700' : 'flex w-full md:w-[514px] justify-between p-2 px-4   rounded-xl bg-zinc-200' }> 
                            <div>
                                <p >
                                    Repos
                                </p>
                                <p className={isDark ? "text-white font-bold text-xl" : "text-black font-bold text-xl   "}>
                                    {dataUser.public_repos}
                                </p>
                            </div>

                            <div>
                                <p>
                                    Followers
                                </p>
                                <p className={isDark ? "text-white font-bold text-xl" : "text-black font-bold text-xl   "}>
                                    {dataUser.followers}
                                </p>
                            </div>
                            <div>
                                <p>
                                    Folowing
                                </p>
                                <p className={isDark ? "text-white font-bold text-xl" : "text-black font-bold text-xl   "}>
                                    {dataUser.following}
                                </p>
                            </div>  
                    </div>                    
            </section>
            <section className='flex justify-end w-full mb-4 text-xs '>
                    <div className='w-full md:w-[514px] flex flex-col md:grid  md:grid-cols-2 gap-5'>
                            <div className={dataUser.location === null ? "text-zinc-400 flex items-center" : " flex items-center"}>
                                    <MdLocationOn className='w-6 h-6 mr-1'  size={25}/><p>{dataUser.location === null ? "Not Available" : dataUser.location }</p> 
                            </div>
                            <div className={dataUser.twitter_username === null ? "text-zinc-400 flex items-center" : " flex items-center"}>   
                                    <AiOutlineTwitter className='w-6 h-6 mr-1' />
                                    <a href={`https://twitter.com/${dataUser.twitter_username}`}>{dataUser.twitter_username === null ? "Not Available" : dataUser.twitter_username}</a>
                            </div>
                            <div className={dataUser.blog=== "" ? "text-zinc-400 flex items-center" : " flex items-center"}>
                                    <BsLink45Deg className='w-6 h-6 mr-1'/>
                                    <a className='w-full' href={validateLink(dataUser.blog)}>{dataUser.blog === "" ? "Not Available" : dataUser.blog }</a>
                            </div>
                            <div className={dataUser.company === null ? "text-zinc-400 flex items-center" : " flex items-center"}>   
                                    <BsFillBuildingsFill className='w-5 h-5 mr-1 ' />
                                    <p>{dataUser.company === null ? "Not Available" : dataUser.company}</p>
                            </div>
                    </div>      
            </section>      
    </article> 
    )
}

export default UserInfo