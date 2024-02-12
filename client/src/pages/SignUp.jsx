import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold my-7' >Sign UP</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' id='username' className='bg-slate-200 p-3 rounded-lg'/>
        <input type="email" placeholder='email'  id='email' className='bg-slate-200 p-3 rounded-lg'/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-200 p-3 rounded-lg'/>
      <button className='bg-slate-700 p-3 rounded-lg uppercase text-white 
      font-semibold hover:opacity-90'>Sign Up</button>
      </form>
      <div className='flex gap-3 mt-3'>
        <p className=' font-medium'>Have an account?</p>
        <Link to='/signin'>
        <span className='text-blue-500 font-medium'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
