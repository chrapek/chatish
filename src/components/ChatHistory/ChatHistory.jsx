import React from 'react'
import Message from '../Message/Message';
import { List } from '@material-ui/core';
import './chatHistory.scss';
import Header from './components/Header/Header';

const messages = [
    {
        user: {
            name: 'User1'
        },
        content: 'Lorem ipsum dolor sit ament'
    },
    {
        user: {
            name: 'User2',
        },
        content: 'Lraksnqut jsuejgk i uydjfl'
    },
    {
        user: {
            name: 'User3',
        },
        content: 'Lorem 25jd8dkdj asl'
    }
]

const ChatHistory = () => {
    return (
        <div className="chat" data-testid="chat-history">
            <Header/>

            <List cols={2}>
                {messages.map((message, index) => (
                    <Message 
                        key={index} 
                        username={message.user.name} 
                        message={message.content}
                        avatar={`https://avatars.dicebear.com/v2/male/${message.user.name}.svg?options[mood][]=happy`}
                    />
                ))}
            </List>
        </div>
    )
}

export default ChatHistory
