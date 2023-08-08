import { createContext, useContext, useMemo, useState } from "react"

type AuthContextType = {
  auth: any;
  setAuth: (auth: any) => void;
}

const AuthContext = createContext<AuthContextType|null>(null)

export const AuthProvider = ({ children} : { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthContextType|null>(null) 

  const isLoggedIn = useMemo( () => {
    return auth
  },[auth])

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if(!context){
    throw new Error("useAuth must be used within AuthProvider")
  }

  return context
}