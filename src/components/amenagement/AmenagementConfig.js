import React from "react";
import { Button } from "antd";

const config = {
  columns: [
    {
      fixed: "left",
      title: "Agent",
      dataIndex: "name",
      width: 200,
      sorter: (a, b) => a.name.localeCompare(b.name),

      render: (text, record, index) => (
        <Button type="link">{record.name}</Button>
      )
    },
    {
      title: "email",
      dataIndex: "email"
    },
    {
      title: "Créésss le",
      dataIndex: "registered",
      render: (text, record, index) =>
        new Date(record.registered).toLocaleString("fr-FR", {
          timeZone: "UTC"
        })
    },

    {
      title: "guid",
      dataIndex: "guid"
    }
    /* {
      title: "phone",
      dataIndex: "phone"
    },
    {
      title: "Address",
      dataIndex: "address"
    }
    */
  ]
};
export default config;
