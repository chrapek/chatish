import {render, cleanup} from '@testing-library/react';
import React from 'react';
import Header from './Header';

const setup = () => {
    const utils = render(<Header activeChannel="best active channel ever"/>);
    const header = utils.getByTestId('header');

    return {header, ...utils}
}

afterEach(cleanup); 

describe("Header", () => {
    const {header} = setup();
    test('It should render a title', () => {
        expect(header).toHaveTextContent(/best active channel ever/);
    })
})