import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='bg-slate-300 '>
        <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
            <Link to='/'><h1 className='font-semibold'>Auth</h1></Link>
            <ul className='flex gap-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/sign-in">SignIn</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header