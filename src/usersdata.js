// AdminPanel.jsx
import React, { useState } from 'react';
import { Table, Button, Space, Popconfirm, message } from 'antd';
import { faker } from '@faker-js/faker';

const generateUsers = () => {
  const users = [];
  for (let i = 1; i <= 60; i++) {
    const id = faker.number.int({ min: 11111, max: 99999 });
    const role = i <= 5 ? 'Admin' : i <= 15 ? 'Manager' : 'User';
    users.push({
      key: id,
      id,
      name: faker.internet.userName(),
      email: faker.internet.email(),
      role,
    });
  }
  return users;
};

const Usersdata = () => {
  const [dataSource, setDataSource] = useState(generateUsers());

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {record.role === 'User' && (
            <Popconfirm
              title="Are you sure you want to delete this user?"
              onConfirm={() => handleDelete(record.key)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="link" danger>
                Delete
              </Button>
            </Popconfirm>
          )}
        </Space>
      ),
    },
  ];

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    message.success('User deleted successfully');
  };

  return (
    <div>
      <h1>User Management</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Usersdata;
