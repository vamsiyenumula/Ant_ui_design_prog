// Breadcrumbs.js
import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const Breadcrumbs = ({ selectedKey }) => {
  const breadcrumbNameMap = {
    '1': 'Sign In',
    '2': 'Sign Up',
    '3': 'Typography',
    '4': 'Buttons',
    '5': 'Date Picker',
    '6': 'Divider',
    '7': 'Grids',
    '8': 'Table',
    '9': 'Layout',
    '10':'Drop Down',
    '11':'Autocomplete',
    '12':'Cascades',
    '13':'Steps',
    '14':'Checkbox',
    '16':"Slider",
    '17':'TimePicker',
    '20':'Uploads',
    '21':'Avatars',
    '22':'Badges',
    '29':"Timelines",
    '30':'ToolTip',
    '31':'Tour',
    '32':'Notififications',
    '33':'ProgressBars',
    '34':'Results',
    '35':'Spins'
  };

  const pathSnippets = selectedKey.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `${pathSnippets.slice(0, index + 1)}`;
    console.log(url)
    return (
      <Breadcrumb.Item key={url}>
        {index === 0 ? null:null}
        <span>{breadcrumbNameMap[url]}</span>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <HomeOutlined />
      <span>Home</span>
    </Breadcrumb.Item>,
    ...extraBreadcrumbItems,
  ];

  return (
    <div style={{ margin: '16px 0' }}>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
