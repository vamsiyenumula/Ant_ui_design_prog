import React from 'react';
import { Checkbox, Divider } from 'antd';

const Check = () => {
  const handleCheckboxChange = (question, option) => {
    console.log(`Question: ${question}, Option: ${option}`);
  };

  return (
    <div>
      <h2>Cybersecurity Quiz</h2>

      <Divider />

      <div>
        <h3>Question 1: What is phishing?</h3>
        <Checkbox onChange={() => handleCheckboxChange(1, 'A')}>A. Sending unsolicited emails</Checkbox>
        <Checkbox onChange={() => handleCheckboxChange(1, 'B')}>B. Stealing sensitive information through deceptive emails</Checkbox>
        <Checkbox onChange={() => handleCheckboxChange(1, 'C')}>C. Creating computer viruses</Checkbox>
      </div>

      <Divider />

      <div>
        <h3>Question 2: What is two-factor authentication (2FA)?</h3>
        <Checkbox onChange={() => handleCheckboxChange(2, 'A')}>A. Using two different devices for authentication</Checkbox>
        <Checkbox onChange={() => handleCheckboxChange(2, 'B')}>B. Verifying identity with two authentication factors</Checkbox>
        <Checkbox onChange={() => handleCheckboxChange(2, 'C')}>C. Having two separate accounts</Checkbox>
      </div>

      <Divider />

      <div>
        <h3>Question 3: What is a firewall?</h3>
        <Checkbox onChange={() => handleCheckboxChange(3, 'A')}>A. A physical barrier to prevent unauthorized access</Checkbox>
        <Checkbox onChange={() => handleCheckboxChange(3, 'B')}>B. A software or hardware device that filters network traffic</Checkbox>
        <Checkbox onChange={() => handleCheckboxChange(3, 'C')}>C. A protective shield for the computer screen</Checkbox>
      </div>
    </div>
  );
};

export default Check;
