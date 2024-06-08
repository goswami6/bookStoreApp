import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
    const handlLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem("Users")
            toast.success('Logout Successfully');
            setTimeout(() =>{
                window.location.reload()
                localStorage.setItem("Users", JSON.stringify( res.data.user))
              },1000)
            // window.location.reload()
        } catch (error) {
            toast.error("Error: " + error.message)
            setTimeout(()=>{

            },1000)
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handlLogout}>Logout</button>
    </div>
  )
}

export default Logout
