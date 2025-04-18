import { MouseEventHandler } from "react"

interface ChatType {
    chatID: string
    createdAt: string,
    SenderID: string,
    SenderName: string,
    SenderPfpUrl: string, 
    RecieverID: string,
    RecieverName: string,
    RecieverPfpUrl: string,
    CaughtUp: boolean
}

type chatIconInput = {
    chat: ChatType
    selected: boolean
    onClick: MouseEventHandler<HTMLDivElement>
}
export default function ChatIcon({chat, selected, onClick}: chatIconInput) {
    //eventually add notificaitons if any are unread

    return (
        <div onClick={onClick} className="m-2">
            <img className={`${selected ? 'w-24 h-24': 'w-20 h-20' } rounded-xl hover:scale-110 duration-200 object-cover`} src={chat.SenderPfpUrl} alt={`${chat.SenderName}'s pfp`}/>
        </div>
    )
}

export type {ChatType}