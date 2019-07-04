import { render, cleanup, within } from '@testing-library/react';
import React from 'react';
import ChatHistory from './ChatHistory';

const fakeMessages = [
    {
        timetoken: 12342536478,
        content: {
            user: {
                name: "user1"
            },
            message: "This is an example"
        }
    },
    {
        timetoken: 22342536478,
        content: {
            user: {
                name: "user2"
            },
            message: "This is different message"
        }
    },
]

const setup = () => {
    const utils = render(<ChatHistory messages={fakeMessages} activeChannel="General"/>);
    const chatHistory = utils.getByTestId('chat-history');

    return {chatHistory, ...utils}
}

afterEach(cleanup); 

describe("Chat History", () => {
    test('It should render Header', () => {
        const {chatHistory} = setup();
        expect(chatHistory).toHaveTextContent(/General/);

        const header = within(chatHistory).getByTestId('header');
        expect(header).toBeInTheDocument();
    })

    test('It should render messagess', () => {
        const {chatHistory} = setup();

        const messages = within(chatHistory).getAllByTestId('message');

        expect(messages).not.toBe(undefined);
        expect(messages).toHaveLength(2);

    })
})