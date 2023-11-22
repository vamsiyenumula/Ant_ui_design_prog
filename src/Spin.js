import React, { useState } from 'react';
import { Spin, Space, Divider, Button } from 'antd';

const SpinExample = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulating an asynchronous operation, like fetching data from a server
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', background: '#f0f2f5', minHeight: '200px' }}>
      <h2>Spin Examples</h2>
      <Divider />

      {/* Example 1: Basic Spins */}
      <Space size="large">
        <Spin spinning={true} size="small" tip="Loading small spinner">
          Small Spinner
        </Spin>

        <Spin spinning={true} size="default" tip="Loading default spinner">
          Default Spinner
        </Spin>

        <Spin spinning={true} size="large" tip="Loading large spinner">
          Large Spinner
        </Spin>
      </Space>

      <Divider />

      {/* Example 2: Customized Spins */}
      <Space size="large">
        <Spin spinning={true} size="default" tip="Customized color" style={{ color: 'red' }} />
        <Spin spinning={true} size="default" tip="Customized background" style={{ background: 'rgba(0, 0, 0, 0.1)' }} />
        <Spin spinning={true} size="default" tip="Customized size" style={{ fontSize: '24px' }} />
      </Space>

      <Divider />

      {/* Example 3: Nested Spin */}
      <Space size="large">
        <Spin spinning={true} size="default" tip="Nested Spin inside Space" />
        <Space size="middle">
          <Spin spinning={true} size="default" />
        </Space>
      </Space>

      <Divider />

      {/* Example 4: Button Click Spin */}
      <Space size="large">
        <Button type="primary" onClick={handleClick}>
          Click me to start async operation
        </Button>
        <Spin spinning={loading} size="default" tip="Loading...">
          Content loaded after async operation
        </Spin>
      </Space>
    </div>
  );
};

export default SpinExample;
