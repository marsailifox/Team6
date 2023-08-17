import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import {useEffect} from 'react'

function HomePage() {
  const { loginWithRedirect, logout, user } = useAuth0()
  useEffect(()=>{
    loginWithRedirect()
  },[])
  return (
    <div></div>
  )
}

export default HomePage