import React from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Button,
  Table,
  Select,
  Menu,
  Icon,
  Dropdown,
  Tooltip
} from "antd";
import "antd/dist/antd.css";

/**
 *
 */
import dataSource from "./users.js";
import config from "./AmenagementConfig.js";
import PreviewSider from "./../PreviewSider.js";
import AmenagementPreviewContent from "./AmenagementPreviewContent.js";

const { Option } = Select;
/**
 *
 */
const ROUTE_AMENAGEMENT_NEW = "/amenagement/new";
/*
//const { SubMenu } = Menu;
//const { Content, Sider } = Layout;

dataSource.map(record => {
  record.path = ROUTE_PATH_PREVIEW + "/" + record._id;
  return record;
});
*/

/*
const PreviewSider = props => {
  let content = [];
  let currentRecord = props.currentRecord || {};
  for (var field in currentRecord) {
    content.push(field + " : " + currentRecord[field]);
  }

  return (<div style={{ padding: "50px",border:"1px solid red" }}>{content.join("<br/>")}</div>);
};
*/
const menu = (
  <Menu /*onClick={handleMenuClick}*/>
    <Menu.Item key="1">
      <Link type="button" to={ROUTE_AMENAGEMENT_NEW}>
        {" "}
        <Icon type="edit" />
        &nbsp;&nbsp;Ajouter un aménagement
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="printer" />
      Imprimer
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="download" />
      Exporter
    </Menu.Item>
  </Menu>
);
const log = o => {
  console.log(o);
};
export default class AmenagementList extends React.Component {
  constructor(props) {
    super(props); ////
    this.state = {
      currentRecord: {},
      previewContent: "",
      title: "",
      visible: false,
      rowSelection: undefined
    };
  }
  preview(currentRecord) {
    this.setState({
      visible: true,
      title: currentRecord.name,
      previewContent: AmenagementPreviewContent(currentRecord)
    });
  }
  //test
  showHideSelectionColum = enable => {
    let rowSelection = undefined;
    if (this.state.rowSelection === undefined) {
      rowSelection = {};
    } else {
      rowSelection = undefined;
    }
    this.setState({ rowSelection: rowSelection });
  };

  render() {
    return (
      <div>
        <Layout>
          <PreviewSider
            visible={this.state.visible}
            title={this.state.title}
            content={this.state.previewContent}
          />
        </Layout>
        <div className="table-dashboard">
          {/* <Button type="primary" >
        <Icon type="setting" />  Ajouter un aménagement
            </Button>
          <Link type="button" to={ROUTE_AMENAGEMENT_NEW}>
            <Button type="primary" ghost>
              Ajouter un aménagement
            </Button>
          </Link>

         <Select placeholder="sc" style={{ width: 200 }}>
            <Option value="print">
              <Link type="button" to={ROUTE_AMENAGEMENT_NEW}>
                Ajouter un aménagement
              </Link>
            </Option>
            <Option value="print">Imprimer</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          */}

          <Dropdown placement="bottomRight" trigger={["click"]} overlay={menu}>
            <Button type="primary" shape="circle" size="large" ghost>
              <Icon type="setting" />
            </Button>
          </Dropdown>
        </div>
        <Table
          rowKey="_id"
          columns={config.columns}
          dataSource={dataSource}
          loading={false}
          size="small"
          rowSelection={this.state.rowSelection}
          rowClassName="noWrap"
          locale={{ emptyText: "Aucun enregitrement." }}
          pagination={false}
          scroll={{ x: window.innerWidth, y: window.innerHeight - 200 }}
          onCell={record => {
            return {
              onClick: event => {
                // console.log(rowIndex)
                log(record);

                //   console.log(this.offsetTop);
              }
            };
          }}
          onHeaderRow={column => {
            return {
              onClick: () => {
                log(column);
              } // click header row
            };
          }}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                // console.log(rowIndex)
                this.preview(record);

                //   console.log(this.offsetTop);
              }, // click row
              onDoubleClick: event => {}, // double click row
              onContextMenu: event => {}, // right button click row
              onMouseEnter: event => {}, // mouse enter row
              onMouseLeave: event => {} // mouse leave row
            };
          }}
        />
      </div>
    );
  }
}
