import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"


const Failure = () => {
  const { loginWithRedirect, logout, user } = useAuth0()

  return (
    <div className='flex'>
        <div class='ml-4'>
            <img src="Logo.jpg" width='100'/>
            <button class='absolute top-0 right-0 mr-8 mt-4 rounded-lg bg-custom_orange w-32 h-10 text-white' onClick={() => logout({ logoutParams: { returnTo: "http://credit-rabbit.vercel.app" } })}>Log Out</button>
            <div className='mt-8 ml-12 w-[525px]'> 
              <h2 className='text-3xl font-extrabold'>You may need to improve your credit.</h2>
              <h3 className='text-2xl font-bold mt-4'>Your history can't be qualified for the credit or loan.</h3>
              <p className='mt-4 mb-10'>After careful consideration of your application, we regret to inform you that we are unable to approve your loan request at this time. Our lending decisions are based on a thorough evaluation of various factors, including credit history and income, and unfortunately, your current financial situation does not meet our lending criteria.</p>
            </div>
            <Link to="/calculate" className='ml-12 text-lg font-extrabold'>Go back to the calculation page.</Link>
         </div>
          <img class='mt-36 ml-64' src='Image used for Error Page.jpg' alt='failure image' width='400'></img>
    </div>
  )
}

export default Failure