import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"


const Success = ({loan}) => {

    console.log(loan)
    const { loginWithRedirect, logout, user } = useAuth0()


  return (
    <div className='flex'>
        <div class='ml-4'>
            <img src="Logo.jpg" width='100'/>
            <button class='absolute top-0 right-0 mr-8 mt-4 rounded-lg bg-custom_orange w-32 h-10 text-white' onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173" } })}>Log Out</button>
            <div className='mt-8 ml-12 w-[525px]'> 
              <h2 className='text-4xl font-extrabold'>Congratulations!</h2>
              <h3 className='text-2xl font-bold'>Your history is confirmed and you are qualified for the credit and loan.</h3>
              <p className='mt-4 mb-10'>Below are the details of your Financial History.</p>

            {/* <Link to="/calculate" className='ml-12 font-extrabold'>Go back to the Borrower's look up page.</Link> */}
              <div id='grid-container' class='grid gap-16 grid-cols-3 grid-rows-3'>
              <div class='font-extrabold w-[200px]'>
                Full Name
                <div class='font-light'>{loan.person_name}</div>
              </div>
              <div class='font-extrabold w-[200px]'>
                Credit Default
                <div class='font-light'>{`${loan.cb_person_default_on_file}`}</div>
              </div>
              <div class='font-extrabold w-[200px]'>
                Age
                <div class='font-light'>{loan.person_age}</div>
              </div>
              <div class='font-extrabold w-[200px]'>
                Income
                <div class='font-light'>${loan.person_income}</div>
              </div>
              <div class='font-extrabold w-[200px]'>
                Length of Employment
                <div class='font-light'>{loan.person_emp_length} years</div>
              </div>
              <div class='font-extrabold w-[200px]'>
                Loan Amount
                <div class='font-light'>${loan.loan_amnt}</div>
              </div>
              <div class='font-extrabold w-[200px]'>
                Credit History Length
                <div class='font-light'>{loan.cb_person_cred_hist_length} years</div>
                </div>
              <div class='font-extrabold w-[200px]'>
                Other Current Payments
                <div class='font-light'>${loan.other_payments}</div>
                </div>
              </div>
            </div>
         </div>
          <img class='mt-36 ml-64' src='Image used for Confirmation Page.jpg' alt='success image' width='400'></img>
    </div>
  )
}
 
export default Success