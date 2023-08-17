import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import {useEffect, useState} from 'react'
import Loading from '../components/Loading'

function HomePage() {
  const { loginWithRedirect, logout, user } = useAuth0()
  useEffect(()=>{
    setTimeout(loginWithRedirect(), 3000)
  },[])
  return (
    <div>
      <Loading/>
    </div>
  )
}

export default HomePage