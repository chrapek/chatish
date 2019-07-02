
import {render, cleanup, within} from '@testing-library/react';
import React from 'react';
import Message from './Message';


const setup = () => {
    const utils = render(<Message 
        username="user1" 
        avatar="https://avatars.dicebear.com/v2/male/john.svg?options[mood][]=happy"
        message="lorem ipsum dolorek"
    />);
    const message = utils.getByTestId('message');

    return {message, ...utils}
}

afterEach(cleanup); 

describe("Message", () => {
    test('It should render an avatar', () => {
        const {message} = setup();
        const avatar = within(message).getByAltText('user1 avatar')
        expect(avatar).toBeInTheDocument();
    })

    test('It should render username with proper value', () => {
        const {message} = setup();
        expect(message).toHaveTextContent(/user1/);
    })

    test('It should render message with proper value', () => {
        const {message} = setup();
        expect(message).toHaveTextContent(/lorem ipsum dolorek/);
    })
})