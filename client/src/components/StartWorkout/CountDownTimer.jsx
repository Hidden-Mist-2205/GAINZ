import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function CountDownTimer() {
  const formatRemainingTime = time => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds}`;
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }

    return (
      <div className="timer">
        <div className="text">Remaining time</div>
        <div className="value">{formatRemainingTime(remainingTime)}</div>
      </div>
    );
  };

  return (
    <div>
      <h1>
        CountdownCircleTimer
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={390}
          colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
