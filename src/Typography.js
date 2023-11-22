import React, { useState, useEffect } from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph, Text } = Typography;


const Typographys = () => {
    const code = 'Hello This is text code inside the Typographys '
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
        
      const response = await fetch(
        'http://localhost:3000/api'
      );

      if (!response.ok) {
        console.error('Failed to fetch weather data:', response.statusText);
        return;
      }

      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <Card>
        <Title level={2}>Real-time Weather in Hyderabad, India</Title>
        <Paragraph>
          Current temperature: {weatherData.id} °C
        </Paragraph>
        <Paragraph>
          Humidity: {weatherData.title} %
        </Paragraph>
      </Card>
      <Text keyboard>{code}</Text>
    </div>
  );
};

export default Typographys;
