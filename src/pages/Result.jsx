import React from 'react'
import {useLocation} from 'react-router-dom'
import Failure from '../components/Failure'
import Success from '../components/Success'

const Result = () => {
    const location=useLocation()
    console.log(location.state)
    
  return (
    <>
        {location.state.loan.loan_status ? <Success loan={location.state.loan}/> : <Failure/>}
    </>
  )
}

export default Result