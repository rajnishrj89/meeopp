import React from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './components/Loader';
import {
  Profile
} from './containers';

const Routes = ({ user }) => (
  <Router>
    <div>
      <Loader />
      <div className="GlobalData_Center">
        <Route exact path="/" component={Profile} />
      </div>
    </div>
  </Router>
);

Routes.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = ({ userStore }) => userStore;

export default connect(mapStateToProps)(Routes);
