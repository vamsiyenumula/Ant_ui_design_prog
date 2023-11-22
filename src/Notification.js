import React from 'react';
import { Button, notification, Space } from 'antd';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const App = () => {
  const [api, contextHolder] = notification.useNotification();

  const colors = [ 'success', 'warning','error', 'info'];

  const openNotification = (color) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Destroy All
        </Button>
        <Button type={color} size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );

    api[color]({
      message: 'Notification Title',
      description: `This is a ${color} notification.`,
      btn,
      key,
      onClose: close,
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      {contextHolder}
      {colors.map((color, index) => (
        <Button key={index} type={color} onClick={() => openNotification(color)}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default App;
