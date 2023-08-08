import { LoginButton, LogoutButton } from "./components/LoginButton"
import { useAuth } from "./hooks/useAuth"

export const App = () => {
  const { auth } = useAuth()

  return (
    <div>
      <h1>Google Login Demo</h1>
      { auth ? (
        <div>
          <p>Success!!</p>
          <LogoutButton/>
        </div>
      ): (
        <div>
          <h2>Please Login</h2>
          <LoginButton/>
        </div>
      )}
    </div>
  )
}