// SignInPage.js
import React, { useRef } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './css/SignInPage.css'

const SignInPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className='container' style={{ textAlign: 'center', marginTop: '50px' , width:'50vw'}}>
    <Form 
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default SignInPage;
