import { useMemo } from "react";
import { useAuth } from "../hooks/useAuth";

export const UserProfile = () => {
  const { auth } = useAuth();

  const profile = useMemo( () => {
    if(!auth){
      return null;
    }

    // header.payload.signature という形式の文字列を分割して、payload部分を取り出す
    const payload = auth.split(".")[1];

    // payload部分をbase64デコードして、JSON.parseでオブジェクトに変換する
    const decodedPaylaod = atob(payload); // base64 decode

    // JSON.parseでオブジェクトに変換する
    const payloadObj = JSON.parse(decodedPaylaod);
    return payloadObj

  }, [auth])

  return (
    <div>
      { profile && (
        <>
          <p>
            Email: {profile.email}
          </p>
          <p>
            Name: {profile.name}
          </p>
          <p>
            Picture: <img src={profile.picture} alt="profile"/>
          </p>
        </>
      )}
    </div>
  )
}