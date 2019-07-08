import React from 'react'
import Message from '../Message/Message';
import { List } from '@material-ui/core';
import './chatHistory.scss';
import Header from './components/Header/Header';

const ChatHistory = ({messages, activeChannel}) => {
    return (
        <div className="chat" data-testid="chat-history">
            <Header activeChannel={activeChannel}/>

            <List cols={2} className="chat__list">
                {messages.map(msg => {
                    const user = msg.content.user;
                    return <Message
                        key={msg.timetoken}
                        username={user ? user.name : ''}
                        message={msg.content.message}
                        avatar={`https://avatars.dicebear.com/v2/male/${user ? user.name : ''}.svg?options[mood][]=happy`}
                    />
                })}
            </List>
        </div>
    )
}

export default ChatHistory
