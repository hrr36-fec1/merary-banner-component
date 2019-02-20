import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/components/App.jsx';

describe('App', function() {
  const wrapper = shallow(<App/>);

  it('Should be rendering Hello World', function() {
    expect(wrapper.find('div').html()).to.equal('<h1>Hello World</h1>');
  });
});


