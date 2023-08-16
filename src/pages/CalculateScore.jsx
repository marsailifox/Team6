import React from 'react';
import {useState} from 'react'

function CalculateScore() {
  const [formData, setFormData]=useState({})
  const [error, setError]=useState('')
  
  const calculate=(formData)=>{
    console.log(formData)
    let income
    let age
    let loanAmount
    let employmentHistory
    let creditHistoryLength
    let otherPayments
    
    //Changing inputs to numbers
    try {
      income=parseInt(formData.income)
      if (isNaN(income)){
        throw new Error('Income must be a number')
      }
      age=parseInt(formData.loanAmount)
      if (isNaN(age)){
        throw new Error('Age must be a number')
      }
      loanAmount=parseInt(formData.loanAmount)
      if (isNaN(loanAmount)){
        throw new Error('Loan amount must be a number(no dollar signs)')
      }
      employmentHistory=parseInt(formData.employmentHistory)
      is (isNan(employmentHistory)){
        throw new Error('Employment history must be a number in years')
      }
      otherPayments=parseInt(formData.otherPayments)


      creditHistoryLength=parseInt(formData.creditHistoryLength)
    }
    catch(err){
      console.log(err)
      setError(err)
      return
    }
    let percentage=loanAmount/(income-otherPayments)
    console.log(percentage)
    if (percentage<=.20){
      console.log(true)
      return
    }
    if ((percentage<=0.5 && percentage>0.2) && creditHistoryLength>=2 && employmentHistory>=3 && age>=25){
      console.log(true)
      return
    }
    if ((percentage<=0.7 && percentage>0.5) && creditHistoryLength>=5 && employmentHistory>=5 && age>=28 && formData.defaultStatus==='no'){
      console.log(true)
      return
    }
    if ((percentage<1 && percentage>.7) && creditHistoryLength>=10 && employmentHistory>=10 && age>=30 && formData.defaultStatus==='no'){
      console.log(true)
      return
    }
    else{
      console.log(false)
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
  }
  return <div>
    Calculate Your Score Page
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Full Name' onChange={handleChange} />
        <input type='text' name='age' placeholder='Age' onChange={handleChange}/>
        <input type='text' name='loanAmount' placeholder='Loan Amount' onChange={handleChange}/>
        <input type='text' name='otherPayments' placeholder='Other Expenses' onChange={handleChange}/>
        <input type='text' name='employmentHistory' placeholder='Employment History Length' onChange={handleChange}/>
        <input type='text' name='income' placeholder='Income' onChange={handleChange}/>
        <input type='text' name='creditHistoryLength' placeholder='Credit History Length' onChange={handleChange}/>
        <select name='defaultStatus' onChange={handleChange}>
          <option>Have you ever defaulted? </option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
        <input type='submit' value='Confirm'/>
      </form>
    </div>;
}

export default CalculateScore;
