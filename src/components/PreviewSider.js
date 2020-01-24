import React from "react";
import { Layout, Button, Icon, Tooltip } from "antd";
import "./PreviewSider.css";
const { Sider } = Layout;

/**
 *
 */
const log = o => {
  console.log(o);
};
export default class PreviewSider extends React.Component {
  VISIBILITY = { true: "block", false: "none" };
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ visible: nextProps.visible });
  }
  render() {
    return (
      <Sider
        className="PreviewSider"
        style={{
          display: this.VISIBILITY[this.state.visible],
          backgroundColor: "#fff",
          boxShadow: "0 0.25rem 1rem rgba(48,55,66,.15)",
          zIndex: 2,
          theme: "light",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          top: 0,
          right: 0
        }}
      >
        <div className="header">
          <div>
            <Tooltip placement="right" title="Fermer">
              <Button
                type="link"
                size="large"
                onClick={() => this.setState({ visible: false })}
              >
                <Icon type="arrow-left" />
              </Button>
            </Tooltip>
          </div>

          <div>{this.props.title}</div>
          <div>
            <Tooltip placement="left" title="Ãditer">
              <Button key="1" type="primary" shape="circle" size="large" ghost>
                <Icon type="edit" />
              </Button>
            </Tooltip>
          </div>
        </div>

        <div style={{ padding: "20px" }}>{this.props.content}</div>
      </Sider>
    );
  }
}
