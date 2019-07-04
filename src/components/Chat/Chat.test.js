import {render, within, cleanup, act} from '@testing-library/react';
import React from 'react';
import Chat from './Chat';
import {MemoryRouter, Route} from "react-router-dom";

const setup = () => {
    const utils = render(
        <MemoryRouter initialEntries={[`/general`]}>
            <Route path="/:channel" component={Chat}/>
        </MemoryRouter>
    );

    const chat = utils.getByTestId('chat');

    return {chat, ...utils}
};


afterEach(cleanup);

describe("Chat", () => {
    test('It should render Input Message', () => {
        const {chat} = setup()
        const inputMessage = within(chat).getByTestId('input-message');
        
        expect(inputMessage).toBeInTheDocument();
    })
    
    test('It should render Message Container', () => {
        const {chat} =  setup()
        
        const chatHistory = within(chat).getByTestId('chat-history');
        expect(chatHistory).toBeInTheDocument();
    })
})

