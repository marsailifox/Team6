import React from 'react'
import {useLocation} from 'react-router-dom'

const Result = () => {
    const location=useLocation()
    console.log(location.state)
    console.log("no")
  return (
    <div>Result</div>
  )
}

export default Result