import React from 'react'
import {Link} from 'react-router-dom'

const Success = () => {
  return (
    <div>
        <img class="absolute top-0 left-0 mt-10 z-10 " style={{ height: '10rem', marginTop: '0.5rem', position: 'absolute', top:'0', left:'1rem' }} src="./Logo.jpg" alt="" />
            <h2>Congratulations!</h2>
            <h3>This Borrower's history is confirmed and qualified for the credit and loan.</h3>
            <p>Be ready for the next step with accessing the found</p>
        <div>
            
        </div>
        <Link to="#">Below is the detailed of Borrower's Fincancial History</Link>
    </div>
  )
}

export default Success