import React, {useEffect, useState, useRef} from 'react'
import InputMessage from '../InputMessage/InputMessage';
import ChatHistory from '../ChatHistory/ChatHistory';
import PubNub from 'pubnub';
import normalizeHistoryMessages from '../../normalizers/normalizeHistoryMessages';

const Chat = ({ match: { params: { channel }} }) => {
    const [messages, setMessages] = useState([]);
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
            channels: [channel]
        });

        pubnub.history({
            channel: channel
        }, (status, response) => {
            const historyMessages = normalizeHistoryMessages(response.messages);
            setMessages([...messages, ...historyMessages]);
        })

    }, []);

    useEffect(() => {
        messageCallbackRef.current = (msg) => {
            setMessages([...messages, {content: msg.message, timetoken: msg.timetoken}]);
        }

        window.scrollTo(0, document.body.scrollHeight);
    }, [messages]);

    const handleMessageSend = (message) => {

        if (message === '') {
            return
        }

        pubnub.publish({
            channel: channel,
            message: {
                user: {
                    name: localStorage.username
                },
                message
            }
        })
    };

    const deleteMessages = () => {
        pubnub.deleteMessages({
            channel: channel
        });

        setMessages([]);
    };

    return (
        <div data-testid="chat">
            <button onClick={deleteMessages}>Clear</button>
            <ChatHistory messages={messages} activeChannel={channel}/>
            <InputMessage handleMessageSend={handleMessageSend}/>
        </div>
    )
};

export default Chat;