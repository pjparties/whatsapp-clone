import React, { useEffect, useState } from 'react'
import '../styles/Chat.css'
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVert from '@mui/icons-material/MoreVert';
import InsertEmoticon from '@mui/icons-material/InsertEmoticonOutlined';
import MicButton from '@mui/icons-material/MicOutlined';
import SendIcon from '@mui/icons-material/Send';

function Chat() {

  const[seed, setSeed] = useState('');
  
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className='Chat'>
        <div className="chat_header">
          <Avatar src = { `https://api.dicebear.com/5.x/avataaars/svg?seed=${seed}`} />

          <div className="chat_headerInfo">
            <h3>Ronaldo</h3>  
            <p>Last seen in Saudi League</p>
          </div>

          <div className="chat_headerRight">
            <IconButton>
             <SearchOutlinedIcon />
            </IconButton>
            <IconButton>
              <AttachFileOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="chat_body">

        <div className="datebubble">
          <div className="date">
            28 FEBRUARY 2023
          </div>

        </div>
        <p className="chat_message 
          chat_receiver">
            <span className='chat_name'></span>
            Hey bruh
            <span className='chat_timestamp'>{new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span>
          </p>

          <p className="chat_message">
            <span className='chat_name'>Ronaldo</span>
            SIIUUUUU
            <span className='chat_timestamp'>{new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span>
          </p>
        </div>
        <div className="chat_footer">
          <IconButton>
            <InsertEmoticon />
          </IconButton>
          <form>
            <input type="text" placeholder='Type a message' />
            <IconButton id= "Send"><SendIcon/> </IconButton>
          </form>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MicButton />
          </IconButton>
        </div>
    </div>
  )
}

export default Chat