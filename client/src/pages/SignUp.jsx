import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function SignUp() {
  const [formData,setFormData]=useState({})
  const [loading,setLoading] = useState(false)
  const [error,setError]=useState(false)
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]: e.target.value })
  }
  console.log(formData)
  const handleSubmit=async (e)=>{
      e.preventDefault();
      setLoading(true)
      await axios.post('http://localhost:8555/api/user/signup',formData)
      .then((res)=>{
        console.log("success full")
        setError(false)
      })
      .catch((err)=>{
        // alert('enter valid email or username')
        setError(true)
        console.log(err)
      })
      setLoading(false)
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sing Up</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-xl"
          onChange={handleChange}
          />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-xl"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-xl"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-gray-700 font-semibold text-xl py-2 rounded-xl text-white uppercase hover:opacity-70 disabled:opacity-80"
        >
          {loading?"Loading....":"Sign UP"}
        </button>
      </form>
      <div className="flex gap-4 mt-2">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">sign in</span>
        </Link>
      </div>
      <p className="text-red-800 font-semibold ">{error&&"Something is Wrong"}</p>
    </div>
  );
}

export default SignUp;
