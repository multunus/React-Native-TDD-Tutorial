import React, { Component, PropTypes } from 'react-native';
import RegisterComponent from './../components/registerComponent';
import { connect } from 'react-redux';
import { registerUserRequest } from './../../../modules/auth/actions';

const mapStateToProps = (state) => {
  return {
    isRegistering: state.auth.get('isRegistering'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (credentials) => {
      dispatch(registerUserRequest(credentials));
    },
  };
};

class Auth extends Component {
  render() {
    return (
      <RegisterComponent buttonText="Register"
        isRegistering={this.props.isRegistering}
        onRegister={this.props.onRegister}
      />
    );
  }
}

Auth.propTypes = {
  isRegistering: PropTypes.bool,
  onRegister: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
