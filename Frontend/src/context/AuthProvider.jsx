import React,{createContext, useContext, useState} from 'react'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const intialAuthUserc=localStorage.getItem('Users')
  const [authUser,setAuthUser]=useState(
    intialAuthUserc? JSON.parse(intialAuthUserc) : undefined
  )
  return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuth =() => useContext(AuthContext);

export default AuthProvider
