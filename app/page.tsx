'use client'

import Image from "next/image";
import ChatIcon, { ChatType } from "./components/ChatIcon";
import { useState } from "react";
import Song, { songType } from "./components/Song";

export default function Home() {
  const [selectedChatId, setSelectedChatId] = useState<string|null>(null)
  
  const handleChatSelect = (chatId:string) => {
    setSelectedChatId(chatId)
  }
  
  let dummyChat:ChatType = {
    chatID: "B7pq6f7R2KoiC3PXUO32",
    createdAt: "",
    SenderID: "31jmro3kvy56tabdviyqs5hc3ncu",
    SenderName: "Lumen Umbra",
    SenderPfpUrl: "https://i.scdn.co/image/ab6775700000ee856a7012904a326176e367d3d2", 
    RecieverID: "xvj0a46uog6yt7jtqf76ved9q",
    RecieverName: "Trullycool",
    RecieverPfpUrl: "https://i.scdn.co/image/ab6775700000ee858452d6e47f08b8f4981129be",
    CaughtUp: false
  }

  let dummyChat2:ChatType = {
    chatID: "3vEsEo5t0mUIfxyShokm",
    createdAt: "",
    SenderID: "31jmro3kvy56tabdviyqs5hc3ncu",
    SenderName: "Lumen Umbra",
    SenderPfpUrl: "https://i.scdn.co/image/ab6775700000ee858452d6e47f08b8f4981129be",
    RecieverID: "xvj0a46uog6yt7jtqf76ved9q",
    RecieverName: "Trullycool",
    RecieverPfpUrl: "https://i.scdn.co/image/ab6775700000ee856a7012904a326176e367d3d2", 
    CaughtUp: false
  }
  
  let chats = [dummyChat, dummyChat2]

  let dummysong:songType = {
    trackID: "2lJDPzwiJvHKJiPhEtxsxb",
    trackName: "Ugly Elvis",
    trackAuthor: "Saint Blonde",
    trackImage: "https://i.scdn.co/image/ab67616d0000b273cccf8a3b188cb5bf5db760a5",
    timeAdded: "",
    timeRated: "",
    rated: true,
    rating: 1,
    comment: ""
  }

  let dummysong2:songType = {
    trackID: "4im3ChukelYoNOW4ZjJOVM",
    trackName: "Right?",
    trackAuthor: "flipturn",
    trackImage: "https://i.scdn.co/image/ab67616d00001e02dbce5fb8b86ce78cc8e8d541",
    timeAdded: "",
    timeRated: "",
    rated: false,
    rating: 0,
    comment: ""
  }

  let songs = [dummysong, dummysong2]
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[4px] row-start-2 items-center w-[500px] h-full sm:items-start">
        <div className="flex flex-row items-end h-24 ">
          {chats.map((chat) => (
            <ChatIcon key={chat.chatID} chat={chat} selected={chat.chatID == selectedChatId} onClick={() => handleChatSelect(chat.chatID)} />
          ))}
          <button className="w-20 h-20 m-2 rounded-xl bg-gray-800 hover:scale-110">new chat</button>
        </div>
        <div className="w-full bg-amber-50 h-[1px] bg-gradient-to-r from-[#0a0a0a] via-gray-50 to-[#0a0a0a]"></div>
        <div>
          {songs.map((song) => (
            <Song song={song} key={song.trackID}/> //lol this is bad
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
