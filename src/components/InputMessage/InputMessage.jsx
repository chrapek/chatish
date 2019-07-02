import React, {useState} from 'react';
import './inputMessage.scss';
import { Button, InputBase } from '@material-ui/core';

const InputMessage = () => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        const {value} = e.target;

        setValue(value);
    }
    return (
        <div className="input-message" data-testid="input-message">
            <InputBase 
                value={value}
                onChange={handleChange}
                fullWidth 
                className="input-message__input"
                placeholder="Write a message!"
            />
            <Button variant="contained" className="input-message__button" color="primary">Send</Button>
        </div>
    )
}

export default InputMessage
