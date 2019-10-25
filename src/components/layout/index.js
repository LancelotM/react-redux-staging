import React from 'react';
import './index.scss';

import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

/**
 * 导航栏
 */
class AdLayout extends React.Component {
  render() {
    //自行根据服务端路径定义
    const links = {
      'demo1': '#/demo1',
      'demo2': '#/demo2',
      'demo3': '#/demo3'
    }
    return(
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <a href={links.demo1}>
                <Icon type="user" />
                <span className="nav-text">demo 1</span>
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href={links.demo2}>
                <Icon type="video-camera" />
                <span className="nav-text">demo 2</span>
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href={links.demo3}>
                <Icon type="upload" />
                <span className="nav-text">demo 3</span>
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default AdLayout;