import React, { Fragment } from 'react';

// Router
import { Route, Switch } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

// Antd
import { Layout } from 'antd';

import ListOfPosts from '../Posts/ListOfPosts';
import LoadingApp from './LoadingApp';
import MainMenu from './MainMenu';

const { Content } = Layout;

class Readable extends React.Component {
  render () {
    const { loadingApp, mainMenuCollapsed } = this.props;

    return (
      <Fragment>
        { loadingApp === 1 ? <LoadingApp />
          :
        (
          <Layout>
            <LoadingBar scope="dados" style={{ backgroundColor: '#1890ff', height: '5px', zIndex: 999, bottom: 0, position: 'absolute' }} />
            <MainMenu />
            <Layout style={{ marginLeft: mainMenuCollapsed ? 200 : 80 }}>
              <Content
                style={{
                  margin: '20px 16px',
                  padding: 16,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                <Switch>
                  <Route 
                    key='CAT' 
                    path='/:category' 
                    render={(props) => <ListOfPosts category={props.match.params.category} />}
                  />
                  <Route 
                    key='DEF' 
                    path='/' 
                    render={() => <ListOfPosts />}
                  />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        )}
      </Fragment>
    )
  }
}

function mapStateToProps ({ app, loadingBar }) {
  return {
    loadingApp: loadingBar.app,
    mainMenuCollapsed: app.mainMenuCollapsed
  }
}

export default connect(mapStateToProps)(Readable);
