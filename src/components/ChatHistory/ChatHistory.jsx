import React from 'react'
import Message from '../Message/Message';
import { List } from '@material-ui/core';
import './chatHistory.scss';
import Header from './components/Header/Header';

const ChatHistory = ({messages}) => {
    return (
        <div className="chat" data-testid="chat-history">
            <Header/>

            <List cols={2}>
                {messages.map(msg => (
                    <Message 
                        key={msg.timetoken} 
                        username={msg.content.user.name} 
                        message={msg.content.message}
                        avatar={`https://avatars.dicebear.com/v2/male/${msg.content.user.name}.svg?options[mood][]=happy`}
                    />
                ))}
            </List>
        </div>
    )
}

export default ChatHistory
