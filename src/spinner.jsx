// Spinner.jsx
import React from 'react';
import { Spin } from 'antd';

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
