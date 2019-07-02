import React from 'react'
import InputMessage from '../InputMessage/InputMessage';
import ChatHistory from '../ChatHistory/ChatHistory';
import PubNub from 'pubnub';

const Chat = () => {
    return (
        <div data-testid="chat">
            <ChatHistory/>
            <InputMessage/>
        </div>
    )
}

export default Chat

