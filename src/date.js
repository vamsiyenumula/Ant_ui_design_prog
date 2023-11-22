import React, { useState } from 'react';
import { DatePicker, Space, Button } from 'antd';
const { RangePicker } = DatePicker;

const Date = () => {
  const [dateRange, setDateRange] = useState([]);
  const [timeDifference, setTimeDifference] = useState(null);

  const onChange = function (value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    setDateRange(value);
  };

  const onOk = function (value) {
    console.log('onOk: ', value);
  };

  const calculateTimeDifference = () => {
    if (dateRange.length === 2) {
      const diffInMilliseconds = Math.abs(dateRange[1] - dateRange[0]);
      const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
      setTimeDifference(diffInDays);
    }
  };

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
        onOk={onOk}
      />
      <Button type="primary" onClick={calculateTimeDifference}>
        Calculate Time Difference
      </Button>
      {timeDifference !== null && (
        <h1>Time Difference: {timeDifference} days</h1>
      )}
    </Space>
  );
};

export default Date;
