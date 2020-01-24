import React from "react";
import { Layout, Icon, Menu, Breadcrumb } from "antd";
import { Input } from "antd";

const { Header, Sider, Content, Footer } = Layout;

const { Search } = Input;

export default class TopMenu extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>

            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
          <Footer
            style={{
              position: "fixed",
              bottom: 0
            }}
          >
            <img
              alt="logo"
              width="40"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <div>
              <div>AmÃ©nagement des personnes</div>
              <div> SIRENS Â©2020 </div>
            </div>
          </Footer>
        </Sider>
        <Layout id="layoutRight">
          {/*<Header style={{ padding: 0 }}>
            <div
              className="certain-category-search-wrapper"
              style={{ width: 250 }}
            >
              <Search
                placeholder="Recherche d'une demande"
                onSearch={value => console.log(value)}
                style={{ margin:20,width: 500 }}
              />
            </div>
          </Header>*/}
          <Content>{this.props.content}</Content>
        </Layout>
      </Layout>
    );
  }
}
