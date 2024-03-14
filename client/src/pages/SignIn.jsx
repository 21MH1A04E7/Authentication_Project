import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";
function SignIn() {
  const [formData,setFormData]=useState({})
  const [loading,setLoading] = useState(false)
  const [error,setError]=useState(false)
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]: e.target.value })
  }
  const navigate=useNavigate()
  // console.log(formData)
  const handleSubmit=async (e)=>{
      e.preventDefault();
      setLoading(true)
      await axios.post('http://localhost:8555/api/user/signin',formData)
      .then((res)=>{
        console.log("success full")
        navigate('/')
        setError(false)
      })
      .catch((err)=>{
        setError(true)
      })
      setLoading(false)
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sing In</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
          {loading?"Loading....":"Sign In"}
        </button>
      </form>
      <div className="flex gap-4 mt-2">
        <p>Dont Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">sign up</span>
        </Link>
      </div>
      <p className="text-red-800 font-semibold ">{error&&"Something is Wrong"}</p>
    </div>
  );
}

export default SignIn;
