import React from "react";

import {
  Tabs,
  List,
  Button,
  Popover,
  Steps,
  PageHeader,
  Icon,
  Tooltip
} from "antd";

const { TabPane } = Tabs;
const { Step } = Steps;
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} /> {text}
  </span>
);
const Destinataires = ["SABCI", "SAGPH"];

export default class DemandeList extends React.Component {
  handleClick = e => {
    console.log(this, e);
    this.setState({
      current: e.key
    });
  };
  handleDelete = e => {
    console.log(e);
  };

  render() {
    return (
      <List
        locale={{ emptyText: "Aucun enregitrement." }}
        dataSource={this.props.dataSource}
        loading={this.props.loading}
        pagination={{
          pageSize: 3,
          position: "both"
        }}
        renderItem={item => (
          <List.Item id={item._id} key={item._id}>
            <PageHeader
              title={item.title}
              subTitle="12/02/2020 17:30"
              description="12/02/2020 17:30"
              extra={[
                <Tooltip
                  placement="topRight"
                  title="Imprimer"
                  style={{ backgroundColor: "red" }}
                >
                  <Button
                    type="default"
                    shape="circle"
                    icon="printer"
                    onClick={() => {
                      console.log(this);
                    }}
                  />
                </Tooltip>,
                <Tooltip placement="topRight" title="Editer">
                  <Button
                    type="primary"
                    shape="circle"
                    icon="edit"
                    onClick={() => {
                      console.log(this);
                    }}
                  />
                </Tooltip>

                /*<Popconfirm title="Are you sureï¼" okText="Yes" cancelText="No">
                  <Button type="danger" shape="circle" icon="delete" />
                </Popconfirm>*/
              ]}
            />
            {item.content}
            {/* <List
               itemLayout="horizontal"
                size="small"
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
              />*/}

            <div id="content">
              <Tabs defaultActiveKey="1" animated={false}>
                <TabPane tab="Commande" key="1">
                  <Button size="small">
                    <Icon type="clock-circle" style={{ color: "orange" }} />
                    &nbsp;SABCI
                  </Button>
                  &nbsp;
                  <Button size="small">
                    <Icon type="check" style={{ color: "#35ae77" }} />
                    &nbsp;RH
                  </Button>
                  <br />
                  <br />
                  <Steps size="small" current={2} status="wait">
                    <Step
                      title="Commande initiÃ©e"
                      /*subTitle="12:05"*/
                      description="G.Mignotte Ã  12:05"
                    />
                    <Step
                      title="Commande executÃ©e"
                      description="G.Mignotte Ã  16:04"
                    />
                    <Step title="Commande acceptÃ©e" />
                  </Steps>
                </TabPane>
                <TabPane tab="Installation" key="2">
                  <Steps size="small" current={2} status="error">
                    <Step
                      title="Installation initiÃ©e"
                      /*subTitle="12:05"*/
                      description="G.Mignotte Ã  12:05"
                    />
                    <Step
                      title="Installation executÃ©e"
                      description="G.Mignotte Ã  16:04"
                    />
                    <Step title="Installation refusÃ©" />
                  </Steps>
                </TabPane>
                <TabPane tab="Remarques" key="3">
                  Remarques Remarques Remarques Remarques Remarques Remarques
                </TabPane>
              </Tabs>
            </div>
          </List.Item>
        )}
      />
    );
  }
}
