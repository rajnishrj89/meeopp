import React from 'react';

import { shallow } from 'enzyme';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Profile from '../containers/Profile';
import store from '../store/main';

it('Globe Load', () => {
  shallow(<Router><Profile store={store} /></Router>).dive();
});
