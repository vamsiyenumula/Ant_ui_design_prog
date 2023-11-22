import React from 'react';
import { Table, Badge, Button } from 'antd';


const data = [
  {
    type: 'Primary',
    description: 'A high-level button used for important actions.',
    component: <Button type="primary">Primary Button</Button>,
  },
  {
    type: 'Default',
    description: 'A medium-level button used for general actions.',
    component: <Button>Default Button</Button>,
  },
  {
    type: 'Dashed',
    description: 'A low-level button used for less important actions.',
    component: <Button type="dashed">Dashed Button</Button>,
  },
  {
    type: 'Link',
    description: 'A button that opens a link in a new tab.',
    component: <Button type="link">Link Button</Button>,
  },
  {
    type: 'Ghost',
    description: 'A button with a transparent background that is used for actions that are not crucial.',
    component: <Button ghost>Ghost Button</Button>,
  },
  {
    type: 'Danger',
    description: 'A red button used for actions that could be dangerous.',
    component: <Button type="danger">Danger Button</Button>,
  },
  {
    type: 'Disabled',
    description: 'A button that is grayed out and cannot be clicked.',
    component: <Button disabled>Disabled Button</Button>,
  },
  {
    type: 'Loading',
    description: 'A button that shows a spinning indicator while the action is being processed.',
    component: <Button loading>Loading Button</Button>,
  },
  {
    type: 'Outline',
    description: 'A button with a border and no background.',
    component: <Button type="outline">Outline Button</Button>,
  },
  {
    type: 'Text',
    description: 'A button with only text and no border or background.',
    component: <Button>Text Button</Button>,
  },
//   {
//     type: 'Icon',
//     description: 'A button with an icon instead of text.',
//     component: <Button icon={<UserOutlined />} />,
//   },
];

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Component',
    dataIndex: 'component',
    key: 'component',
  },
];

const Buttons = () => {
  return (
    <Table dataSource={data} columns={columns} pagination={false} bordered />
  );
};

export default Buttons;
