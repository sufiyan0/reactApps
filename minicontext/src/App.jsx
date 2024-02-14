import react ,{ useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Welcome from './components/Welcome'

function App() {
  
  return (
   <UserContextProvider>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Minicontext</h1>
      <Login/>
      
      <Welcome/>
      
    </div>
   </UserContextProvider>
  )
}

export default App
