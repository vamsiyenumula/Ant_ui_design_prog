import React, { useState } from 'react';
import { TimePicker, Button } from 'antd';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Time = () => {
  const [duration, setDuration] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleTimeChange = (_, timeString) => {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setDuration(totalSeconds);
  };

  const handleStart = () => {
    setIsTimerRunning(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <TimePicker format="HH:mm:ss" onChange={handleTimeChange} />
      <Button type="primary" onClick={handleStart} style={{ margin: '16px' }}>
        Start Timer
      </Button>
      {duration > 0 && (
        <CountdownCircleTimer
          isPlaying={isTimerRunning}
          duration={duration}
          colors={[['#ff0000', 0.33], ['#ffa500', 0.33], ['#008000', 0.33]]}
          onComplete={() => {
            setIsTimerRunning(false);
            return [true, 1000];
          }}
        >
          {({ remainingTime }) => <div>{formatTime(remainingTime)}</div>}
        </CountdownCircleTimer>
      )}
    </div>
  );
};

export default Time;
