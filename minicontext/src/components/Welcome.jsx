import React,{useContext} from 'react'
import UserContext from '../context/UserContext.js'

const welcome = () => {
    const {user} = useContext(UserContext)
  return (
    <div className='text-3xl my-4 bg-blue-500 p-6 font-semibold text-white  rounded '>Welcome {user.toUpperCase()}</div>
  )
}

export default welcome