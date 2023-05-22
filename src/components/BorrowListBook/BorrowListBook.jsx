import { Divider, Radio, Table } from "antd";
import { useState } from "react";
const columns = [
  {
    title: "Tên sách",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tác giả",
    dataIndex: "age",
  },
  {
    title: "Ngày mượn",
    dataIndex: "address",
  },
  {
    title: "Ngày trả",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "Trạng Quỳnh",
    age: "Nguyễn Du",
    address: "11/06/2023",
  },
  {
    key: "2",
    name: "Trạng Quỳnh",
    age: "Nguyễn Du",
    address: "11/06/2023",
  },
  {
    key: "3",
    name: "Trạng Quỳnh",
    age: "Nguyễn Du",
    address: "11/06/2023",
  },
  {
    key: "4",
    name: "Trạng Quỳnh",
    age: "Nguyễn Du",
    address: "11/06/2023",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const BorrowListBook = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default BorrowListBook;
