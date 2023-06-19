import { ReactNode } from "react"
import Sidebar from "../components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"
import getConversations from "../actions/getConversations"
import getUsers from "../actions/getUsers"

export default async function ConversationsLayout({
  children,
}: {
  children: ReactNode
}) {
  const conversation = await getConversations()
  const users = await getUsers()

  return (
    <Sidebar>
      <ConversationList initialItems={conversation} users={users} />
      <div className="h-full">{children}</div>
    </Sidebar>
  )
}
