// extra configuration needed for Enzyme, this changes with every major React version
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';

import { MyCallbackComponent, MyComponent, MyCompositeComponent } from '../my-component';

describe('Enzyme - MyComponent', () => {
	it('renders my name', () => {
		const wrapper = shallow(<MyComponent name="Chris"/>);
		const textContainer = wrapper.find('h1');
		expect(textContainer.text()).toEqual('Hello Chris!');
	});
});

describe('Enzyme - MyCallbackComponent', () => {
	it('invokes a provided callback when clicked', () => {
		const mockFn = jest.fn();

		const wrapper = shallow(<MyCallbackComponent callback={mockFn}/>);
		const button = wrapper.find('button');

		expect(mockFn).not.toHaveBeenCalled();
		button.simulate('click');
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});

describe('Enzyme - MyCompositeComponent', () => {
	it('invokes a provided callback when clicked', () => {
		const mockFn = jest.fn();

		// Notice the mount - shallow will not render children components. This can be a massive PITA
		const wrapper = mount(<MyCompositeComponent callback={mockFn}/>);
		const button = wrapper.find('button');

		expect(mockFn).not.toHaveBeenCalled();
		button.simulate('click');
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});
