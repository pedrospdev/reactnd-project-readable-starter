import React from 'react';
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux';

// Antd
import { Icon, Layout, Menu } from 'antd';

import { toggleMenuVisibility } from '../../actions/app';

const { Sider } = Layout;

class MainMenu extends React.Component {
  render() {
    const { dispatch } = this.props;
    const { collapsed } = this.props;
    const categories = this.props.categories || {};

    return (
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        style={{
          overflowX: 'hidden',
          overflowY: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }
      }>
        <div className="logo">
          <p>Readable</p>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['0']}>
          <Menu.Item key="home">
            <Link to="/">
              <Icon type="home" style={{ fontSize: '20px' }} theme="outlined" />
              <span>All</span>
            </Link>
          </Menu.Item>
          { Object.keys(categories).map((idx) => (
            <Menu.Item key={idx}>
              <Link to={`/${categories[idx].path}`}>
                <Icon type="read" style={{ fontSize: '20px' }} theme="outlined" />
                <span>{categories[idx].name}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <div className="menu-bottom-area">
          <Icon
            className="trigger"
            type={collapsed ? 'right-circle' : 'left-circle'}
            onClick={() => { dispatch(toggleMenuVisibility()) }}
            style={{ fontSize: '20px', color: '#b3d9f3ff' }}
            theme="outlined"
          />
        </div>
      </Sider>
    );
  }
}

function mapStateToProps ({ app, categories }) {
  return {
    collapsed: !app.mainMenuCollapsed,
    categories
  }
}

export default connect(mapStateToProps)(MainMenu);
