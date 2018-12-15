import { connect } from 'react-redux';
import { createUser } from '../../store/user';
import Profile from './Profile';

const mapStateToProps = state => state;

const mapDispatchToProps = {
  profile: data => createUser(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
