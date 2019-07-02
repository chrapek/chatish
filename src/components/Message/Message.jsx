import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

const Message = ({username, avatar, message}) => {
    return (
        <ListItem data-testid="message">
            <ListItemAvatar>
                <Avatar alt={`${username} avatar`} src={avatar}/>
            </ListItemAvatar>
            <ListItemText 
                primary={<strong>{username}</strong>} 
                secondary={message}
            />
        </ListItem>
    )
}

export default Message
