import React from "react";
import { Descriptions } from "antd";
import { Steps, Button, Icon } from "antd";

const { Step } = Steps;

const content = Record => (
  <div>
    <Descriptions>
      <Descriptions.Item label="Crée Le">{Record.registered}</Descriptions.Item>
    </Descriptions>
    <Descriptions>
      <Descriptions.Item label="Affecté à">{Record.address}</Descriptions.Item>
    </Descriptions>

    <Steps direction="vertical" size="small" current={1}>
      <Step
        title="Commande initiée"
        /*subTitle="12:05"*/
        description={
          <div>
            {" "}
            <div>G.Mignotte à 12:05</div>
            <Button size="small" type="primary" ghost>
              <Icon type="clock-circle" />
              &nbsp;SABCI
            </Button>
            &nbsp;
            <Button size="small" type="primary" ghost>
              <Icon type="check" />
              &nbsp;RH
            </Button>
          </div>
        }
      />
      <Step title="Commande executée" description="G.Mignotte à 12:05" />
      <Step title="Commande acceptée" description="N.Zetoutou à 13:05" />
    </Steps>
    <Steps direction="vertical" size="small" current={2} status="error">
      <Step
        title="Installation initiée"
        /*subTitle="12:05"*/
        description={
          <div>
            <Button size="small" type="primary" ghost>
              <Icon type="check" />
              &nbsp;SABCI
            </Button>
            &nbsp;
            <Button size="small" type="primary" ghost>
              <Icon type="clock-circle" />
              &nbsp;RH
            </Button>
          </div>
        }
      />
      <Step title="Installation executée" description="G.Mignotte à 16:04" />
      <Step title="Installation refusé" />
    </Steps>
    <Descriptions>
      <Descriptions.Item label="Remarques">{Record.about}</Descriptions.Item>
    </Descriptions>
  </div>
);

export default content;
