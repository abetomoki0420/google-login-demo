const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

export const useEnv = () => {
  return {
    googleClientId,
  }
}
