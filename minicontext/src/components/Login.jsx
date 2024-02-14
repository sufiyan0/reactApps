import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext.js'


function Login() {
    const {setUser} = useContext(UserContext);

    const [Username , setUserName] = useState('')
    const [password , setPassword] = useState('')

    const updateuser = (e) =>{
        e.preventDefault();      
        setUser(Username) 
        setUserName('')
        setPassword('') 
    }
  return (
    <>
        <div className="flex ">
            <form action="" className='flex-col bg-slate-300 rounded items-center justify-center flex font-semibold '>
                <h1 className="p-3 m-3 text-3xl " >Login</h1>
                <div className="flex flex-col p-3 m-3">
                    <label htmlFor="">Name</label>
                    <input type="text" className='border border-gray-500 outline-none rounded text-2xl p-0.5'  value={Username} onChange={(e) => setUserName(e.target.value)} />
                </div>
                
                <div className="flex flex-col p-3 m-3">
                    <label htmlFor="">Password</label>
                    <input type="password" className='border border-gray-500 outline-none rounded text-2xl p-0.5'  value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button onClick={updateuser} className='bg-slate-600 p-2 m-2 rounded text-white font-semibold hover:font-bold'>Submit</button>
                

            </form>

        </div>
    
    
    
    </>
  )
}

export default Login