import {render, cleanup, fireEvent} from '@testing-library/react';
import React from 'react';
import SelectUsername from "./SelectUsername";

const setup = () => {
    const utils = render(<SelectUsername/>);
    const chat = utils.getByTestId('select-username');

    return {chat, ...utils}
};

afterEach(cleanup);

describe("Select Username", () => {
    test('It should has empty value as default', () => {
        const {getByPlaceholderText} = setup();

        expect(getByPlaceholderText('What is your username?').value).toBe("");
    });

    test('It should render send button', () => {
        const {getByText} = setup();

        expect(getByText(/Join/)).toBeInTheDocument();
    });

    test('It properly changes value of the input', () => {
        const {getByPlaceholderText} = setup();
        const input = getByPlaceholderText('What is your username?');

        expect(input.value).toBe("");

        fireEvent.change(input, {target: {value: "changed"}});

        expect(input.value).toBe("changed");
    })
});

