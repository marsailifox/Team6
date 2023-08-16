import React from 'react';
import {useState} from 'react'

function CalculateScore() {
  const [formData, setFormData]=useState({})
  
  const calculate=(formData)=>{
    console.log(formData)
    console.log("Calculating")
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
        <input type='text' name='employmentHistory' placeholder='Employment' onChange={handleChange}/>
        <input type='text' name='income' placeholder='Income' onChange={handleChange}/>
        <input type='text' name='creditHistoryLength' placeholder='Credit History Length' onChange={handleChange}/>
        <input type='submit' value='Confirm'/>
      </form>
    </div>;
}

export default CalculateScore;
