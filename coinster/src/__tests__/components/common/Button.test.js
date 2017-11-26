import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Button from '../../../react/components/common/Button';


configure({ adapter: new Adapter() });

describe('Button', () => {

	it('Renders button without props', () => {
	    const button = shallow(<Button />);

	    expect(button.find('.coinster-button')).toHaveLength(1);
	});

	it('Can trigger click action events', () => {
	    const onButtonClick = sinon.spy();
	    const wrapper = shallow(<Button action={onButtonClick} />);

	    wrapper.find('input').simulate('click');
	    
	    expect(onButtonClick).toHaveProperty('callCount', 1);
	});

	it('Allows us to set value as props', () => {
	    const button = mount(<Button value="Add" />);
	    
	    expect(button.props().value).toBe('Add');
	    
	    button.setProps({ value: 'Refresh' });
	    
	    expect(button.props().value).toBe('Refresh');
	});

});
