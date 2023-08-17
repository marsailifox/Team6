import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"
const { loginWithRedirect, logout, user } = useAuth0()


const Failure = () => {
  return (
    <div className='flex'>
        <div>
            <img src="Logo.jpg" width='100'/>
            <button class='absolute top-0 right-0 mr-8 mt-4 rounded-lg bg-custom_orange w-32 h-10 text-white' onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173" } })}>Log Out</button>
            <div className='mt-8 ml-12 w-[525px]'> 
              <h2 className='text-3xl font-extrabold'>Something went wrong!</h2>
              <h3 className='text-2xl font-bold'>This Borrower's history can't be qualified for the credit or loan.</h3>
              <p className='mt-4 mb-10'>Please try again with different inputs</p>
            </div>
            <Link to="/calculate" className='ml-12 font-extrabold'>Go back to the Borrower's look up page.</Link>
         </div>
         <div className='translate-y-48 -translate-x-20 w-[400px]'>
          <img src='Image used for Error Page.jpg' alt='failure image' width='400'></img>
         </div>
    </div>
  )
}

export default Failure