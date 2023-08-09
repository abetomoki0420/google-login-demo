import { useMemo } from "react"
import { useAuth } from "../hooks/useAuth"
import { Text, Card, Avatar, Inset, Flex, Box } from "@radix-ui/themes"

export const UserProfile = () => {
  const { auth } = useAuth()

  const profile = useMemo(() => {
    try {
      if (!auth) {
        return null
      }

      // header.payload.signature という形式の文字列を分割して、payload部分を取り出す
      const payload = auth.split(".")[1]

      // payload部分をbase64デコードして、JSON.parseでオブジェクトに変換する
      const decodedPaylaod = atob(payload) // base64 decode

      // JSON.parseでオブジェクトに変換する
      const payloadObj = JSON.parse(decodedPaylaod)
      return payloadObj
    } catch (e) {
      console.error(e)
      return null
    }
  }, [auth])

  return (
    <Box>
      {profile && (
        <Card size="2" style={{ maxWidth: "320px" }}>
          <Flex>
            <Inset side="left">
              <Flex justify="center" align="center" height="100%" px="2">
                <Avatar src={profile.picture} fallback="G" size="4" />
              </Flex>
            </Inset>
            <Box>
              <Text size="6" as="p" weight="bold">
                {profile.name}
              </Text>
              <Text size="2" color="gray" as="p">
                {profile.email}
              </Text>
            </Box>
          </Flex>
        </Card>
      )}
    </Box>
  )
}
