import React from 'react';
import { shallow } from 'enzyme';
import {Customer} from './Customer.jsx';

describe("Tests for Customer", ()=> {

    it('Renders correctly', () => {
        const wrapper = shallow(<Customer  />);
        expect(wrapper).toMatchSnapshot();
      });
})

   
   

