import { render, cleanup, fireEvent } from '@testing-library/react';
import InputMessage from './InputMessage';
import React from 'react';

const setup = () => {
    const utils = render(<InputMessage/>);
    const input = utils.getAllByTestId('input-message');

    return {input, ...utils}
};

afterEach(cleanup); 

describe("Input Message", () => {
    test('It should has empty value as default', () => {
        const {getByPlaceholderText} = setup();

        expect(getByPlaceholderText('Write a message!').value).toBe("");
    });

    test('It should render send button', () => {
        const {getByText} = setup();

        expect(getByText(/Send/)).toBeInTheDocument();
    });

    test('It properly changes value of the input', () => {
        const {getByPlaceholderText} = setup();
        const input = getByPlaceholderText('Write a message!');

        expect(input.value).toBe("");
        
        fireEvent.change(input, {target: {value: "changed value"}});

        expect(input.value).toBe("changed value");
    })
});



