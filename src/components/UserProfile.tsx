import { useMemo } from "react";
import { useAuth } from "../hooks/useAuth";

export const UserProfile = () => {
  const { auth } = useAuth();

  const email = useMemo( () => {
    if(!auth){
      return ""
    }

    const payload = auth.split(".")[1];
    const decodedPaylaod = atob(payload); // base64 decode

    const { email } = JSON.parse(decodedPaylaod);

    return email;

  }, [auth])

  return (
    <div>
      Email: {email}
    </div>
  )
}