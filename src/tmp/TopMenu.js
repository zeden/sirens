import React from "react";
import { Button, Row, PageHeader, Typography } from "antd";
const { Paragraph } = Typography;

const IconLink = ({ src, text }) => (
  <a
    style={{
      marginRight: 16,
      display: "flex",
      alignItems: "center"
    }}
  >
    <img
      style={{
        marginRight: 8
      }}
      src={src}
      alt="start"
    />
    {text}
  </a>
);
const content = (
  <div className="content">
    <Row className="contentLink" type="flex">
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      />
    </Row>
  </div>
);
export default class TopMenu extends React.Component {
  render() {
    return <div className="content"> {this.props.content} </div>;
  }
}
