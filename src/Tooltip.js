import React from 'react';
import { Button, Divider, Space, Tooltip } from 'antd';

const cyberSecurityTools = [
  { name: 'Nmap', usage: 'Network scanning and discovery' },
  { name: 'Metasploit', usage: 'Penetration testing framework' },
  { name: 'Wireshark', usage: 'Network protocol analyzer' },
  { name: 'Burp Suite', usage: 'Web application security testing' },
  { name: 'Snort', usage: 'Intrusion detection and prevention system' },
  { name: 'Aircrack-ng', usage: 'Wireless network security' },
  { name: 'John the Ripper', usage: 'Password cracking' },
  { name: 'Wireshark', usage: 'Network protocol analyzer' },
  { name: 'Hydra', usage: 'Password cracking and brute-force attacks' },
  { name: 'Maltego', usage: 'Open-source intelligence and forensics' },
];

const ToolTips = () => (
  <>
    <Divider orientation="left">Cyber Security Tools</Divider>
    <Space wrap>
      {cyberSecurityTools.map((tool) => (
        <Tooltip title={tool.usage} key={tool.name}>
          <Button>{tool.name}</Button>
        </Tooltip>
      ))}
    </Space>
  </>
);

export default ToolTips;
