import React, { useState } from 'react';
import { Steps } from 'antd';

const Step = () => {
  const [current, setCurrent] = useState(1);

  const topics = [
    'Reconnaissance',
    'Scanning',
    'Exploitation',
  ];

  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <>
      <Steps
        size="small"
        current={current}
        onChange={onChange}
        items={topics.map((topic, index) => ({ title: topic, description: `This is a description for ${topic}.` }))}
      />
    </>
  );
};

export default Step;
