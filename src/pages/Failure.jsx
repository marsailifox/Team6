import React from 'react'
import {Link} from 'react-router-dom'

const Failure = () => {
  return (
    <div>
        <heading>
            <h2>Something went wrong</h2>
            <h3>This Borrower's history can't be qualified for the credit or loan.</h3>
            <p>Please try again with different inputs</p>
        </heading>
        <Link to="#">Go back to the Borrower's look up page.</Link>
    </div>
  )
}

export default Failure