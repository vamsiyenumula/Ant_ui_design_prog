import React, { useState } from 'react';
import { Button, Dropdown, Menu, Divider } from 'antd';

const statesData = {
  'Andhra Pradesh': {
    description: 'Andhra Pradesh is known for its rich cultural heritage and historical significance.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Andhra_Pradesh_districts_map.svg/2716px-Andhra_Pradesh_districts_map.svg.png' , // Replace with the actual image URL
  },
  'Maharashtra': {
    description: 'Maharashtra is home to the financial capital of India, Mumbai, and offers a diverse cultural experience.',
    image: 'https://th.bing.com/th/id/OIP.7FAeEnr4wP01cxm25gtg-wHaFz?rs=1&pid=ImgDetMain', // Replace with the actual image URL
  },
  'Karnataka': {
    description: 'Karnataka is a blend of modernity and tradition, hosting the tech hub Bengaluru and historical sites like Hampi.',
    image: 'https://i0.wp.com/www.bragitoff.com/wp-content/uploads/2015/12/karnataka.png?fit=3099%2C4300&ssl=1', // Replace with the actual image URL
  },
  'Tamil Nadu': {
    description: 'Tamil Nadu is famous for its temples, classical dance forms, and unique cuisine.',
    image: 'https://www.mapsofindia.com/maps/tamilnadu/tamilnadu-map-2021.jpg?v:1.0', // Replace with the actual image URL
  },
  'Rajasthan': {
    description: 'Rajasthan is known for its royal heritage, vibrant culture, and the Thar Desert.',
    image: 'https://www.mapsofindia.com/maps/rajasthan/rajasthan-map.jpg', // Replace with the actual image URL
  },
};

const DropDownButton = () => {
  const [selectedState, setSelectedState] = useState('Andhra Pradesh');

  const handleChange = (e) => {
    setSelectedState(e.key);
  };

  const menu = (
    <Menu onClick={handleChange}>
      {Object.keys(statesData).map((state) => (
        <Menu.Item key={state}>{state}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <Dropdown overlay={menu}>
        <Button>{selectedState}</Button>
      </Dropdown>
      <Divider />
      <div>
        <h2>{selectedState}</h2>
        <img
          src={statesData[selectedState].image}
          alt={`${selectedState} Image`}
          style={{ maxWidth: '100%', maxHeight: '300px', margin: '0 auto' }}
        />
        <p>{statesData[selectedState].description}</p>
      </div>
    </div>
  );
};

export default DropDownButton;
