import React from 'react'
import './header.scss';

const Header = ({activeChannel}) => {
    return (
        <div className="chat__header" data-testid="header">
            <h2>{activeChannel}</h2>
        </div>
    )
}

export default Header
