import React from 'react';
import { Divider } from 'antd';

const Dividers = () => {
  return (
    <div className="Divider" style={{ background: '#252525', color: '#ffffff', padding: '20px' }}>
      <h1> Dividers </h1>

      {/* Standard Divider */}
      <Divider  style={{ borderColor: 'blue' }} />

      <p>This is a paragraph of text after the standard divider.</p>

      {/* Dashed Divider */}
      <Divider type="dashed" style={{ borderColor: '#ffffff' }} />

      <p>This is another paragraph of text after the dashed divider.</p>

      {/* Vertical Divider */}
      <Divider orientation="vertical" style={{ borderColor: '#ffffff' }} />

      <p>This paragraph is separated from the previous one by a vertical divider.</p>

      {/* Customized Divider */}
      <Divider style={{ borderColor: 'red', borderWidth: '2px', borderStyle: 'solid' }} />

      <p>This is a customized divider with a red border.</p>
    </div>
  );
};

export default Dividers;
