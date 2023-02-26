import React from 'react'
import '../styles/sidebar.css'
import {Avatar} from '@material-ui/core'

function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <Avatar />
        </div>
        <div className="sidebar_search"></div>
        <div className="sidebar_chats"></div>
    </div>
  );
}

export default sidebar 