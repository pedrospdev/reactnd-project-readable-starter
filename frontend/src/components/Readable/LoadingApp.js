import React, { Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

// Antd
import { Spin } from 'antd';

class LoadingApp extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="loading-app">
          <LoadingBar scope="app" style={{ backgroundColor: '#1890ff', height: '2px', margin: -18 }} />
          <Spin tip="Loading Readable..." />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps ({ loadingBar }) {
  return {
    loadingBar
  }
}

export default connect(mapStateToProps)(LoadingApp);
