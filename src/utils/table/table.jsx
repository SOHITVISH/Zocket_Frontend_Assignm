import React from "react";
import { Table } from "antd";

import Columns from "./columns";

const CampaignTable = ({ dataSource, handleDeleteCampaign }) => {
  const getTableColumns = Columns({ handleDeleteCampaign });

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={getTableColumns}
        pagination={true}
        className="custom-table"
      />
    </div>
  );
};

export default CampaignTable;