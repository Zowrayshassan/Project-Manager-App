import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')
  const submitHandler = (e) =>{
      e.preventDefault()
      handleLogin(email,password)
      setemail('')
      setpassword('') 
  }
  return (
    <div className = "flex w-screen h-screen items-center justify-center bg-black">
      <div className="border-2 border-cyan-600 rounded-xl py-18 px-10">
        <form className="flex flex-col gap-5"
        onSubmit={submitHandler}>
            <input required className = "text-white border-2 border-cyan-500 rounded-full px-5 py-3 placeholder:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"type="email"  placeholder='Entre your name' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input required className=" text-white border-2 border-cyan-500 rounded-full px-5 py-3 placeholder:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500" type="password" placeholder='Entre your Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            <button className="text-white bg-transparent-600 border border-white px-4 py-2 rounded-full hover:bg-cyan-500 mt-5">Login</button>

        </form> 
      </div>
    </div>
  )
}

export default Login
