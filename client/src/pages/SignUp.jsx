import React from 'react'
import {Link} from 'react-router-dom'
function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold my-7'>Sing Up</h1>
      <form className='flex flex-col gap-3'>
        <input type="text" placeholder='Username' id="username" className='bg-slate-100 p-3 rounded-xl'/>
        <input type="email" placeholder='Email' id="email" className='bg-slate-100 p-3 rounded-xl'/>
        <input type="password" placeholder='Password' id="password" className='bg-slate-100 p-3 rounded-xl'/>
        <button type="submit" className='bg-gray-700 font-semibold text-xl py-2 rounded-xl text-white uppercase hover:opacity-70 disabled:opacity-80 active:bg-pink-300'>Sign up</button>
      </form>
      <div className='flex gap-4 mt-2'>
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className='text-blue-500'>sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp