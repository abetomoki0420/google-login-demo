import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { AuthProvider } from "./hooks/useAuth"
import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Theme accentColor="indigo" grayColor="sand" radius="large">
        <App />
      </Theme>
      {/* <Theme
        accentColor="crimson"
        grayColor="sand"
        radius="full"
        hasBackground
        appearance="dark"
        panelBackground="solid"
        scaling="110%"
      >
        <App />
      </Theme> */}
    </AuthProvider>
  </React.StrictMode>
)
