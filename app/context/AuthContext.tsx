"use client"

import { SessionProvider } from "next-auth/react"
import { FC, ReactNode } from "react"

interface IAuthContext {
  children: ReactNode
}

const AuthContext: FC<IAuthContext> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthContext
