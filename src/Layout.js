import React from 'react';
import { Layout } from 'antd';
import './css/layout.css';

const Layouts = () => {
  return (
    <Layout>
      <Layout.Header style={{ backgroundColor: '#252525', height: '150px', display: 'flex', alignItems: 'center' }}>
        <h1 className="header-title" style={{ color: 'white' }}>Facebook Overview</h1>
      </Layout.Header>

      <Layout.Content style={{ backgroundColor: '#252525', flex: 1 }}>
        <div className="content-container">
          <h2 style={{ color: 'white' }}>About Facebook</h2>
          <p style={{ color: 'white' }}>
            Facebook is a social networking platform founded by Mark Zuckerberg in 2004. It allows users to connect with friends, family, and colleagues, share photos and updates, and discover content from around the world. With billions of active users, Facebook has become a prominent part of online communication.
          </p>
          <p style={{ color: 'white' }}>
            Over the years, Facebook has expanded its features, including the introduction of Facebook Pages, Groups, and the acquisition of Instagram and WhatsApp. The platform has played a significant role in shaping online social interactions and has become a powerful tool for businesses and individuals to reach a global audience.
          </p>
        </div>
      </Layout.Content>

      <Layout.Footer style={{ backgroundColor: '#252525', height: '60px', display: 'flex', alignItems: 'center' }}>
        <p className="footer-text" style={{ color: 'white' }}>Copyright © 2023 Facebook</p>
      </Layout.Footer>
    </Layout>
  );
};

export default Layouts;
