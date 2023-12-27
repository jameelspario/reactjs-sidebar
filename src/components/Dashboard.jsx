import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='text-red-500'>
        <p>dash board</p>
        <Link to="/products">
            to to products
        </Link>
    </div>
  )
}

export default Dashboard