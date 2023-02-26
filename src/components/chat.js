import React from 'react'
import '../styles/Chat.css'
import { Avatar, IconButton } from '@mui/material'

function Chat() {
  return (
    <div className='Chat'>
        <div className="chat_header">
            <Avatar />
        </div>
        <div className="chat_body"></div>
        <div className="chat_footer"></div>
    </div>
  )
}

export default Chat