import React from 'react';
import {useState, useEffect} from 'react'
// import UserLoan from '../../models/user_loan'
import { useAuth0 } from "@auth0/auth0-react"
import {useNavigate} from 'react-router-dom'


function CalculateScore() {
  const { user, logout } = useAuth0()
  const navigate=useNavigate()
  const [formData, setFormData]=useState({})
  const [loan, setLoan]=useState({})
  // add state for loan status to conditionally render results page
  const [error, setError]=useState('')
  const [calculated, setCalculated]=useState(false)
  
  const calculate=(formData)=>{
    
    let userEmail = user?.email
    let person_income
    let person_age
    let loan_amnt
    let person_emp_length
    let cb_person_cred_hist_length
    let cb_person_default_on_file
    let percent_of_income
    let other_payments
    let loan_status
    
    //Changing inputs to numbers
    try {
      person_income=parseInt(formData.person_income)
      person_age=parseInt(formData.person_age)
      loan_amnt=parseInt(formData.loan_amnt)
      person_emp_length=parseInt(formData.person_emp_length)
      other_payments=parseInt(formData.other_payments)
      cb_person_cred_hist_length=parseInt(formData.cb_person_cred_hist_length)
      // setting it to the form data
      
      // formData.person_income = person_income
      // formData.person_age = person_age
      // formData.loan_amnt = loan_amnt
      // formData.person_emp_length = person_emp_length
      // formData.other_payments = other_payments
      // formData.cb_person_cred_hist_length = cb_person_cred_hist_length
    }
    catch(err){
      console.log(err)
      setError(err)
      return
    }
    let percentage=loan_amnt/(person_income-other_payments)
    setFormData({...formData, percent_of_income: percentage})
    // formData.percent_of_income = percentage
    console.log(percentage)
    // percentage is referenced as percent_of_income in the notes
    console.log(percentage<=.2)
    if (percentage<=.20 && percentage>0){
      console.log('here')
      loan_status=true
      // formData.loan_status = true
      // return
    }
    else if ((percentage<=0.5 && percentage>0.2) && cb_person_cred_hist_length>=2 && person_emp_length>=3 && person_age>=25){
      loan_status=true
      // formData.loan_status = true
      // return
    }
    else if ((percentage<=0.7 && percentage>0.5) && cb_person_cred_hist_length>=5 && person_emp_length>=5 && person_age>=28 && formData.defaultStatus==='no'){
      loan_status=true
      // formData.loan_status = true
      // return
    }
    else if ((percentage<1 && percentage>.7) && cb_person_cred_hist_length>=10 && person_emp_length>=10 && person_age>=30 && formData.defaultStatus==='no'){
      loan_status=true
      // formData.loan_status = true
      // return
    }
    else{
      loan_status=false
      // formData.loan_status = false
      // return
    }
    console.log(loan_status)
    if (formData.defaultStatus == 'True') {
      cb_person_default_on_file = true
    } else {
      cb_person_default_on_file = false
    }
    setLoan(current=>{
      return{...formData, 
        person_income: person_income,
        person_age: person_age,
        loan_amnt: loan_amnt,
        person_emp_length: person_emp_length,
        other_payments: other_payments,
        cb_person_cred_hist_length: cb_person_cred_hist_length,
        loan_status: loan_status,
        percent_of_income: percentage,
        cb_person_default_on_file: cb_person_default_on_file
      }})
      setCalculated(true)

  }
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData({...formData, [name] : value})
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    calculate(formData)
    console.log(formData)
    // saveFormData(formData)
  }
  useEffect(()=>{
    if (calculated){
      navigate('/results',
              {state: {
                loan: loan
              },
              replace: false})
      }
  }, [loan])

  // const saveFormData(formData) {
  // }
  
  return <div class="relative">
    
    <div class="flex justify-end">
    <img class="absolute top-0 left-0 mt-10 z-10 " style={{ height: '10rem', marginTop: '0.5rem', position: 'absolute', top:'0', left:'1rem' }} src="./Logo.jpg" alt="" />
    <img class="absolute top-0 left-0 mt-10 z-10 " style={{ height: '28rem', marginTop: '13rem',position: 'absolute', top:'0', left:'5rem'}} src="./form.jpg" alt="" />
    <div class=" bg-white w-3/5 h-screen" style={{ borderRadius: '2rem'}}>
      <div id="form-container" class="pt-20 pl-16">
      <h1 class="text-custom_orange text-4xl">Calculate Your Approval Score</h1>
      <form class="mt-10" onSubmit={handleSubmit}>
      <div class="max-w-2xl mx-auto">
        <input class="w-full h-12 text-xl border-b border-black mb-2 focus:outline-none focus:border-blue-500" required type='text' name='person_name' placeholder='Full Name' onChange={handleChange} />
        <input class="w-full h-12 text-xl border-b border-black mb-2 focus:outline-none focus:border-blue-500" required type='number' name='person_age' placeholder='Age' onChange={handleChange}/>
        <input class="w-full h-12 text-xl border-b border-black mb-2 focus:outline-none focus:border-blue-500" required type='number' name='person_income' placeholder='Income' onChange={handleChange}/>
        <input class="w-full h-12 text-xl border-b border-black mb-2 focus:outline-none focus:border-blue-500" required type='number' name='person_emp_length' placeholder='Length of Employment' onChange={handleChange}/>
        <input class="w-full h-12 text-xl border-b border-black mb-2 focus:outline-none focus:border-blue-500" required type='number' name='loan_amnt' placeholder='Loan Amount' onChange={handleChange}/>
        <input class="w-full h-12 text-xl border-b border-black mb-2 focus:outline-none focus:border-blue-500" required type='number' name='cb_person_cred_hist_length' placeholder='Credit History Length' onChange={handleChange}/>
        <input class="w-full h-12 text-xl border-b border-black mb-2 focus:outline-none focus:border-blue-500" required type='number' name='other_payments' placeholder='Other Current Payments' onChange={handleChange}/>
        <select class="w-full h-12 text-xl text-gray-400 focus:outline-none focus:border-blue-500" required name='defaultStatus' onChange={handleChange}>
          <option>Have you ever defaulted? </option>
          <option value='True'>Yes</option>
          <option value='False'>No</option>
        </select>
        <input class=" w-full h-12 mt-6 text-white bg-custom_orange text-xl rounded-lg" type='submit' value='Confirm'/>
        </div>
      </form>
      </div>
    </div>
    </div>
    </div>
}

export default CalculateScore;
