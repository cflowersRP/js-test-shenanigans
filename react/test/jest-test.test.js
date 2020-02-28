import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

// extended syntax for `toBeInTheDocument` selectors
import '@testing-library/jest-dom/extend-expect';

import { MyCallbackComponent, MyComponent, MyCompositeComponent } from '../my-component';

// Cleanup js-dom after tests
afterEach(cleanup);

describe('RTL - MyComponent', () => {
	it('renders my name', () => {
		const { queryByText } = render(<MyComponent name="Chris"/>);
		expect(queryByText('Hello Chris!')).toBeInTheDocument();
		expect(queryByText('Hello Chris!').tagName).toEqual('H1');
	});
});

describe('RTL - MyCallbackComponent', () => {
	it('invokes a provided callback when clicked', () => {
		const mockFn = jest.fn();
		const { getByText } = render(<MyCallbackComponent callback={mockFn}/>);
		const button = getByText('Click Me');

		expect(mockFn).not.toHaveBeenCalled();
		fireEvent.click(button);
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});

describe('RTL - MyCompositeComponent', () => {
	it('invokes a provided callback when clicked', () => {
		const mockFn = jest.fn();
		const { getByText } = render(<MyCompositeComponent callback={mockFn}/>);
		const button = getByText('Click Me');

		expect(mockFn).not.toHaveBeenCalled();
		fireEvent.click(button);
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});
