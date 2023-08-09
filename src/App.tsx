import { Box, Heading, Section } from "@radix-ui/themes"
import { LoginButton, LogoutButton } from "./components/LoginButton"
import { UserProfile } from "./components/UserProfile"
import { useAuth } from "./hooks/useAuth"

export const App = () => {
  const { auth } = useAuth()

  return (
    <Box>
      <Heading as="h1" size="8">
        Google Login Demo
      </Heading>
      {auth ? (
        <Box>
          <Box mt="2">
            <UserProfile />
          </Box>
          <Box mt="2">
            <LogoutButton />
          </Box>
        </Box>
      ) : (
        <Box>
          <Box mt="2">
            <LoginButton />
          </Box>
        </Box>
      )}
    </Box>
  )
}
