import React, {useState} from 'react';
import './inputMessage.scss';
import { Button, InputBase } from '@material-ui/core';

const InputMessage = ({handleMessageSend}) => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        const {value} = e.target;

        setValue(value);
    };

    const handleSubmit = () => {
        handleMessageSend(value);

        setValue('');
    };

    return (
        <div className="input-message" data-testid="input-message">
            <InputBase 
                value={value}
                onChange={handleChange}
                fullWidth 
                className="input-message__input"
                placeholder="Write a message!"
            />
            <Button 
                variant="contained" 
                className="input-message__button" 
                color="primary"
                onClick={handleSubmit}
            >
                Send
            </Button>
        </div>
    )
}

export default InputMessage
