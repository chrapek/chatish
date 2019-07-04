import React, {useEffect, useState, useRef} from 'react'
import InputMessage from '../InputMessage/InputMessage';
import ChatHistory from '../ChatHistory/ChatHistory';
import PubNub from 'pubnub';
import normalizeHistoryMessages from '../../normalizers/normalizeHistoryMessages';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [activeChannel] = useState('generalTest');
    const messageCallbackRef = useRef();

    const pubnub = new PubNub({
        subscribeKey: process.env.REACT_APP_SUBSCRIBE_KEY,
        publishKey: process.env.REACT_APP_PUBLISH_KEY
    });
    
    useEffect(() => {
        pubnub.addListener({
            message: (msg) => messageCallbackRef.current(msg)
        });
        
        pubnub.subscribe({
            channels: [activeChannel] 
        });

        pubnub.history({
            channel: activeChannel
        }, (status, response) => {
            const historyMessages = normalizeHistoryMessages(response.messages);
            setMessages(messages => [...messages, ...historyMessages]);
        })    

    }, [activeChannel]);

    useEffect(() => {
        messageCallbackRef.current = (msg) => {
            setMessages([...messages, {content: msg.message, timetoken: msg.timetoken}]);
        }
    }, [messages])

    const handleMessageSend = (message) => {
        pubnub.publish({
            channel: activeChannel,
            message: {
                user: {
                    name: 'User1'
                },
                message
            }
        })
    };

    const deleteMessages = () => {
        pubnub.deleteMessages({
            channel: activeChannel
        });

        setMessages([]);
    };

    return (
        <div data-testid="chat">
            <button onClick={deleteMessages}>Clear</button>
            <ChatHistory messages={messages}/>
            <InputMessage handleMessageSend={handleMessageSend}/>
        </div>
    )
};

export default Chat;