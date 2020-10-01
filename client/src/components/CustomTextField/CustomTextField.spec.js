import React from 'react';
import { shallow } from 'enzyme';
import {CustomTextField} from './CustomTextField.jsx';

describe("Tests for CustomTextField ", ()=> {
    const mockField = {
            name: "dob",
            label: "Birthday",
            type: "date",
            defaultValue: "2017-05-24",
        };
    it('Renders correctly', () => {
        const wrapper = shallow(<CustomTextField field={mockField} />);
        expect(wrapper).toMatchSnapshot();
      });
})

   
   

