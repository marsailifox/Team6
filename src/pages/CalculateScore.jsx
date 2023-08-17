import React from 'react';
import {useState} from 'react'
// import UserLoan from '../../models/user_loan'
import { useAuth0 } from "@auth0/auth0-react"


function CalculateScore() {
  const { user } = useAuth0()

  const [formData, setFormData]=useState({})
  // add state for loan status to conditionally render results page
  const [error, setError]=useState('')
  
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
    if (percentage<=.20){
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
    setFormData(
      {...formData, 
        person_income: person_income,
        person_age: person_age,
        loan_amnt: loan_amnt,
        person_emp_length: person_emp_length,
        other_payments: other_payments,
        cb_person_cred_hist_length: cb_person_cred_hist_length,
        loan_status: loan_status,
        percent_of_income: percentage,
        cb_person_default_on_file: cb_person_default_on_file
      })


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

  // const saveFormData(formData) {
  // }
  
  return <div>
    Calculate Your Score Page
      <form onSubmit={handleSubmit}>
        <input required type='text' name='person_name' placeholder='Full Name' onChange={handleChange} />
        <input required type='number' name='person_age' placeholder='Age' onChange={handleChange}/>
        <input required type='number' name='loan_amnt' placeholder='Loan Amount' onChange={handleChange}/>
        <input required type='number' name='other_payments' placeholder='Other Current Payments' onChange={handleChange}/>
        <input required type='number' name='person_emp_length' placeholder='Length of Employment' onChange={handleChange}/>
        <input required type='number' name='person_income' placeholder='Income' onChange={handleChange}/>
        <input required type='number' name='cb_person_cred_hist_length' placeholder='Credit History Length' onChange={handleChange}/>
        <select required name='defaultStatus' onChange={handleChange}>
          <option>Have you ever defaulted? </option>
          <option value='True'>Yes</option>
          <option value='False'>No</option>
        </select>
        <input type='submit' value='Confirm'/>
      </form>
    </div>
}

export default CalculateScore;
