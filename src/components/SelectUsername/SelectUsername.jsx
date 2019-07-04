import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import {Button} from "@material-ui/core";
import './selectUsername.scss';
import history from '../../history';

const SelectUsername = () => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        const {value} = e.target;

        setValue(value);
    };

    const handleSubmit = () => {
        if (!value) {
            return
        }

        localStorage.setItem('username', value);

        history.push('/general')
    };

    return (
        <div className="select-username" >
            <p className="select-username__label">Pick a username</p>
            <Paper className="select-username__paper" data-testid="select-username">
                <InputBase
                    placeholder="What is your username?"
                    className="select-username__paper__input"
                    value={value}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className="select-username__paper__button"
                    onClick={handleSubmit}
                >
                    Join
                </Button>
            </Paper>
        </div>
    );
};

export default SelectUsername;