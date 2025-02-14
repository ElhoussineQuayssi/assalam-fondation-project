import React from 'react';
import { Table, Button } from 'antd';


// Export the promise-based query function
const NewsTable = ({ newsItems, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button onClick={() => onEdit(record.key)}>Edit</Button>
          <Button onClick={() => onDelete(record.key)} style={{ marginLeft: 8 }}>Delete</Button>
        </span>
      ),
    },
  ];

  return <Table dataSource={newsItems} columns={columns} rowKey="key" />;
};

export default NewsTable;
