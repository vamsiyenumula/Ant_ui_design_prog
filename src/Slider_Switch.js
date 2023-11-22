import React, { useState } from 'react';
import { Slider, Switch, Button, Space } from 'antd';

const Slide = () => {
  const [disabled, setDisabled] = useState(false);
  const [categories, setCategories] = useState({
    food: 0,
    clothes: 0,
    entertainment: 0,
    electronics: 0,
    health: 0,
    other: 0,
  });

  const maxValues = {
    food: 100,
    clothes: 100,
    entertainment: 100,
    electronics: 100,
    health: 100,
    other: 100,
  };

  const onSliderChange = (value, category) => {
    setCategories({ ...categories, [category]: value });
  };

  const calculateTotal = () => {
    return Object.values(categories).reduce((total, value) => total + value, 0);
  };

  const onChangeSwitch = (checked) => {
    setDisabled(checked);
  };

  return (
    <Space direction="vertical" size="large" style={{width:'300px', paddingLeft:'40px'}}>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <span>{category}</span>
          <Slider
            defaultValue={0}
            disabled={disabled}
            onChange={(value) => onSliderChange(value, category)}
            max={maxValues[category]}
          />
        </div>
      ))}
      <div>Total Amount: {calculateTotal()}</div>
      <div>
        Disabled: <Switch  style={{width:'10px'}}size="small" checked={disabled} onChange={onChangeSwitch} />
      </div>
      <Button type="primary" onClick={() => alert(`Total Amount: ${calculateTotal()}`)}>
        Calculate Total
      </Button>
    </Space>
  );
};

export default Slide;
