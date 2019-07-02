import { render, cleanup, within } from '@testing-library/react';
import React from 'react';
import ChatHistory from './ChatHistory';


const setup = () => {
    const utils = render(<ChatHistory/>);
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
})