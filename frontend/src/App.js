import React from 'react';

// Redux
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

import Readable from './components/Readable';

import { handleInitialData } from './actions/shared';

import 'antd/dist/antd.css';
import './index.css';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render () {
    return (
      <Readable />
    );
  }
}

function mapStateToProps ({ app, loadingBar }) {
  return {
    carregandoApp: loadingBar.app,
    mainMenuCollapsed: app.mainMenuCollapsed
  }
}

export default connect(mapStateToProps)(App);
