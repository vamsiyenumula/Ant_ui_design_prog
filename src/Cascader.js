import React, { useState } from 'react';
import { Cascader, Divider } from 'antd';

const options = [
  {
    value: 'usa',
    label: 'United States',
    children: [
      {
        value: 'california',
        label: 'California',
        children: [
          {
            value: 'losangeles',
            label: 'Los Angeles',
            info:'You selected Los Angeles'

          },
          {
            value: 'sanfrancisco',
            label: 'San Francisco',
            info:'You selected San Fransisco'
          },
        ],
      },
      {
        value: 'newyork',
        label: 'New York',
        children: [
          {
            value: 'manhattan',
            label: 'Manhattan',
            info:'You selected Manhattan'
          },
          {
            value: 'brooklyn',
            label: 'Brooklyn',
            info:'You selected Brooklyn'
          },
        ],
      },
    ],
  },
  {
    value: 'india',
    label: 'India',
    children: [
      {
        value: 'maharashtra',
        label: 'Maharashtra',
        children: [
          {
            value: 'mumbai',
            label: 'Mumbai',
            info:'You selected Mumbai'
          },
          {
            value: 'pune',
            label: 'Pune',
            info:'You selected San Pune'
          },
        ],
      },
      {
        value: 'karnataka',
        label: 'Karnataka',
        children: [
          {
            value: 'bangalore',
            label: 'Bangalore',
            info:'You selected Banglore'
          },
          {
            value: 'mysuru',
            label: 'Mysuru',
            info:'You selected Mysuru'
          },
        ],
      },
    ],
  },
];

const DisplaySelected = ({ selected }) => (
  <div
    style={{
      width: '300px',
      height: '300px',
      backgroundColor: '#252525',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff',
    }}
  >
    <h2>{selected.label}</h2>
    <Divider style={{ backgroundColor: '#ffffff' }} />
    <p>{selected.info}</p>
  </div>
);

const Cascade = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onChange = (value, selectedOptions) => {
    const selected = selectedOptions[selectedOptions.length - 1];
    setSelectedOption(selected);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection:'column' }}>
      <Cascader options={options} onChange={onChange} placeholder="Please select" style={{ width: '300px' }} />
      {selectedOption && <DisplaySelected selected={selectedOption} />}
    </div>
  );
};

export default Cascade;
