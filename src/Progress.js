import React from 'react';
import { Progress, Card } from 'antd';

const attackData = [
  { Attack: 'Phishing', SuccessRate: '93%' },
  { Attack: 'Credential brute force', SuccessRate: '89%' },
  { Attack: 'Exploiting known software vulnerabilities', SuccessRate: '87%' },
  { Attack: 'Social engineering', SuccessRate: '73%' },
  { Attack: 'Web application attacks', SuccessRate: '68%' },
  { Attack: 'Spear-phishing', SuccessRate: '59%' },
  { Attack: 'Password spraying', SuccessRate: '57%' },
  { Attack: 'Watering hole attacks', SuccessRate: '55%' },
  { Attack: 'Man-in-the-middle attacks', SuccessRate: '52%' },
  { Attack: 'Denial-of-service attacks', SuccessRate: '49%' },
];

const ProgressBars = () => {
  return (
    <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center', gap: '16px' }}>
      {attackData.map((attack, index) => (
        <Card key={index} title={attack.Attack} style={{ width: 500 }}>
          <p>Success Rate: {attack.SuccessRate}</p>
          <Progress percent={parseInt(attack.SuccessRate, 10)} size="small" />
        </Card>
      ))}
    </div>
  );
};

export default ProgressBars;
