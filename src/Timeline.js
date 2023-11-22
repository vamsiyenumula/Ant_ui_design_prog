import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const cyberAttacksTimeline = [
  {
    children: 'SolarWinds Supply Chain Attack (2020)',
    description: 'Widespread supply chain attack compromising numerous organizations and government agencies.',
  },
  {
    children: 'Colonial Pipeline Ransomware Attack (2021)',
    color: 'green',
    description: 'Ransomware attack on Colonial Pipeline causing disruptions to fuel supplies on the East Coast.',
  },
  {
    dot: (
      <ClockCircleOutlined
        style={{
          fontSize: '16px',
        }}
      />
    ),
    children: 'Log4j Vulnerability Exploitation (2021)',
    description:
      'Exploitation of the Log4j vulnerability, leading to widespread security concerns and patching efforts.',
  },
  {
    color: 'red',
    children: 'Kaseya Supply Chain Ransomware Attack (2021)',
    description: 'Ransomware attack targeting managed service providers using Kaseya software.',
  },
  {
    children: 'Microsoft Exchange Server Vulnerabilities (2021)',
    description: 'Nation-state actors exploiting vulnerabilities in Microsoft Exchange Server, leading to data breaches.',
  },
  {
    dot: (
      <ClockCircleOutlined
        style={{
          fontSize: '16px',
        }}
      />
    ),
    children: 'JBS Foods Ransomware Attack (2021)',
    description: 'Ransomware attack on JBS Foods, one of the world’s largest meat processors, impacting global supply chains.',
  },
];

const Timelines = () => (
    <>
    <h1>All the attacks that were done between 2020 to 2023 in timeline</h1>
  <Timeline mode="alternate" items={cyberAttacksTimeline} />
  </>
);

export default Timelines;
