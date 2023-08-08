import { useEffect, useRef } from "react"
import { useEnv } from "../hooks/useEnv"
import { useAuth } from "../hooks/useAuth"

export const LoginButton = () => {
  const { googleClientId } = useEnv()
  const { setAuth } = useAuth()

  useEffect( () => {
    if(!google){
      return;
    }

    google.accounts.id.initialize({
      client_id: googleClientId,
      auto_select: true,
      callback: (res) => {
        if(res.credential){
          setAuth(res.credential)
        }
      }
    })
  },[google])

  const loginButtonRef = useRef<HTMLDivElement>(null);

  useEffect( () => {
    if(loginButtonRef.current){
      google.accounts.id.renderButton(loginButtonRef.current, {theme: "filled_blue", type: "standard", width: 120});
      google.accounts.id.prompt();
    }
  },[loginButtonRef])

  return (
    <div 
      ref={loginButtonRef}
    />
  )
}

export const LogoutButton = () => {
  const { setAuth } = useAuth();

  return (
    <button
      onClick={() => {
        google.accounts.id.disableAutoSelect();
        setAuth(null);
      }}
      >
      Logout
    </button>
  )
}