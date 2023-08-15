import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { loginWithRedirect } = useAuth0()
  const { logout } = useAuth0()

  return (
    <>
    {/* navbar goes here */}
    <button onClick={() => loginWithRedirect()}>Login / Sign up</button>
      <h1>Credit Rabbit</h1>
    </>
  )
}

export default App
