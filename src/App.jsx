import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { loginWithRedirect, logout, user } = useAuth0()
  
  console.log(user)

  return (
    <>
    {/* navbar goes here */}
    <button onClick={() => loginWithRedirect()}>Login / Sign up</button>
    <button onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173" } })}>
      Log Out
    </button>
      <h1>Credit Rabbit</h1>
      {user && <h2>Welcome {user.name}</h2>}
    </>
  )
}

export default App
