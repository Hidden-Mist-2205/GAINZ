import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleStop, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import GS from '../styles/GeneralStyles';
import SI from '../styles/StartWorkout_style/SI';
import CDT from '../styles/StartWorkout_style/CDT';

export default function CountDownTimer({ currStep, setCurrStep, totalSteps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [countDownTime, setCountDownTime] = useState(90);

  const formatRemainingTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds}`;
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      setIsPlaying(false);
      return <CDT.Timer>GOOD JOB! 👍</CDT.Timer>;
    }

    return (
      <CDT.Timer>
        <CDT.TimerText>Remaining time</CDT.TimerText>
        <CDT.TimerValue>{formatRemainingTime(remainingTime)}</CDT.TimerValue>
      </CDT.Timer>
    );
  };

  const OnClickNextStep = () => {
    if (currStep < totalSteps) {
      setCurrStep(currStep + 1);
    }
  };

  return (
    <>
      <SI.Header>
        <SI.H4> Countdown Timer /</SI.H4>
        <SI.H4 style={{ paddingRight: '20%' }}> Timer</SI.H4>
        <CDT.ButtonRow>
          <GS.Button
            onClick={OnClickNextStep}
            style={{ height: '35px', width: '80px', color: '#ffffff' }}
          >
            Next
          </GS.Button>
        </CDT.ButtonRow>
      </SI.Header>
      <CDT.TimerContainer>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={countDownTime}
          colors={[['#772c00', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </CDT.TimerContainer>

      <CDT.Setup>

        <CDT.FlexRow>
          <CDT.TextDiv>Count Down</CDT.TextDiv>
          <CDT.TimeInput placeholder="#" onChange={(e) => setCountDownTime(e.target.value)} />
          <CDT.TextDiv>Seconds</CDT.TextDiv>
        </CDT.FlexRow>

        <CDT.FlexRow>
          <CDT.Controller>
            <FontAwesomeIcon
              onClick={() => setIsPlaying(false)}
              icon={faCirclePause}
            />
          </CDT.Controller>
          <CDT.Controller>
            <FontAwesomeIcon
              onClick={() => setIsPlaying(true)}
              icon={faPlay}
            />
          </CDT.Controller>
          <CDT.Controller>
            <FontAwesomeIcon
              onClick={() => {
                setIsPlaying(false);
                setCountDownTime(countDownTime);
              }}
              icon={faCircleStop}
            />
          </CDT.Controller>
        </CDT.FlexRow>
      </CDT.Setup>
    </>
  );
}
