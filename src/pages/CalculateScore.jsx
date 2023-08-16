import React from 'react';
import {useState} from 'react'
import UserLoan from '../../models/user_loan'
import { useAuth0 } from "@auth0/auth0-react"


function CalculateScore() {
  const { user } = useAuth0()

  const [formData, setFormData]=useState({})
  // add state for loan status to conditionally render results page
  const [error, setError]=useState('')
  
  const calculate=(formData)=>{
    console.log(formData)
    let userEmail = user.email
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
      person_age=parseInt(formData.loan_amnt)
      loan_amnt=parseInt(formData.loan_amnt)
      person_emp_length=parseInt(formData.person_emp_length)
      other_payments=parseInt(formData.other_payments)
      cb_person_cred_hist_length=parseInt(formData.cb_person_cred_hist_length)
      
      // setting it to the form data
      formData.person_income = person_income
      formData.person_age = person_age
      formData.loan_amnt = loan_amnt
      formData.person_emp_length = person_emp_length
      formData.other_payments = other_payments
      formData.cb_person_cred_hist_length = cb_person_cred_hist_length
    }
    catch(err){
      console.log(err)
      setError('Invalid input')
      return
    }
    let percentage=loan_amnt/(person_income-other_payments)
    formData.percent_of_income = percentage
    console.log(percentage)
    // percentage is referenced as percent_of_income in the notes
    if (percentage<=.20){
      formData.loan_status = true
      return
    }
    if ((percentage<=0.5 && percentage>0.2) && cb_person_cred_hist_length>=2 && person_emp_length>=3 && person_age>=25){
      formData.loan_status = true
      return
    }
    if ((percentage<=0.7 && percentage>0.5) && cb_person_cred_hist_length>=5 && person_emp_length>=5 && person_age>=28 && formData.defaultStatus==='no'){
      formData.loan_status = true
      return
    }
    if ((percentage<1 && percentage>.7) && cb_person_cred_hist_length>=10 && person_emp_length>=10 && person_age>=30 && formData.defaultStatus==='no'){
      formData.loan_status = true
      return
    }
    else{
      formData.loan_status = false
      return
    }
    


  }
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData({...formData, [name] : value})
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    calculate(formData)
    if (formData.defaultStatus == 'True') {
      formData.cb_person_default_on_file = true
    } else {
      formData.cb_person_default_on_file = false
    }
    saveFormData(formData)
  }

  const saveFormData(formData) {
  }
  
  return <div>
    Calculate Your Score Page
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Full Name' onChange={handleChange} />
        <input type='text' name='person_age' placeholder='Age' onChange={handleChange}/>
        <input type='text' name='loan_amnt' placeholder='Loan Amount' onChange={handleChange}/>
        <input type='text' name='other_payments' placeholder='Other Expenses' onChange={handleChange}/>
        <input type='text' name='person_emp_length' placeholder='Employment' onChange={handleChange}/>
        <input type='text' name='person_income' placeholder='Income' onChange={handleChange}/>
        <input type='text' name='cb_person_cred_hist_length' placeholder='Credit History Length' onChange={handleChange}/>
        <select name='defaultStatus' onChange={handleChange}>
          <option>Have you ever defaulted? </option>
          <option value='True'>Yes</option>
          <option value='False'>No</option>
        </select>
        <input type='submit' value='Confirm'/>
      </form>
    </div>;
}

export default CalculateScore;
