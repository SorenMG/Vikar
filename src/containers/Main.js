import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../components/Main';

class MainContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      error: null,
      loading: false,
    };
  }

  // componentDidMount = () => this.fetchData();

  fetchData = async () => {
    const { fetchData } = this.props;

    this.setState({ loading: true, error: null });

    try {
      await fetchData();
    } catch (err) {
      this.setState({ loading: false, error: err.message });
    }
  };

  /**
   * Render
   */
  render = () => {
    const { loading, error } = this.state;

    return <Layout loading={loading} error={error} />;
  };
}

MainContainer.propTypes = {};

MainContainer.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
