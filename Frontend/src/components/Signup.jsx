import React from 'react'
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast';
const Signup = () => {
  const location=useLocation()
  const navigate = useNavigate()
  const from=location.state?.form?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo ={
      fullname: data.fullname,
      email: data.email,
      password: data.password,

    }
   await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        // alert("Signup successfull")
        toast.success('Signup successfull');
      navigate(from, {replace:true})
      }
      localStorage.setItem("Users", JSON.stringify( res.data.user))
    }).catch((err) => {
     if(err.response){
      console.log(err)
      // alert("Error: "+ err.response.data.message)
      toast.error("Error: "+ err.response.data.message);
     }

    })
  }
  return (
    <>
      <div className='flex h-screen items-center justify-center '>
      <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-md">
  <div className="">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
   
    <h3 className="font-bold text-lg">Signup</h3>
    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
    <div className='mt-4 space-y-2'>
        <span>Name</span><br/>
        <input type="Text" placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("fullname", { required: true })} /><br/>
        {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span><br/>
        <input type="Email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })} /><br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span><br/>
        <input type="Text" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("password", { required: true })} /><br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Button */}
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
        <p>Have Account? <Link to="/" className='underline text-blue-500 cursor-pointer'>Login</Link> </p>
    </div>
    </form>
  </div>
</div>
      </div>
    </>
  )
}

export default Signup
