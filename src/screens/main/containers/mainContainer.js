import React, { Component, PropTypes } from 'react-native';
import MainComponent from './../components/mainComponent';
import { connect } from 'react-redux';
import { fetchDataRequest } from './../../../modules/main/actions';

const mapStateToProps = (state) => {
  return {
    isFetching: state.main.get('isFetching'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => {
      dispatch(fetchDataRequest());
    },
  };
};

class Main extends Component {
  render() {
    return (
      <MainComponent isFetching={this.props.isFetching}
        onFetch={this.props.onFetch}
      />
    );
  }
}

Main.propTypes = {
  isFetching: PropTypes.bool,
  onFetch: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
