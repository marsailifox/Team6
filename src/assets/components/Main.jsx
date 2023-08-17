import React from 'react'
import {Route, Routes} from 'react-router-dom'
import CalculateScore from '../../pages/CalculateScore'
import Result from '../../pages/Result'
import HomePage from '../../pages/HomePage'

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/calculate" element={<CalculateScore/>}/>
            <Route path="/results" element={<Result/>}/>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </main>
  )
}

export default Main