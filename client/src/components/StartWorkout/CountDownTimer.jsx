import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleStop, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import GS from '../styles/GeneralStyles';
import SI from '../styles/StartWorkout_style/SI';
import CDT from '../styles/StartWorkout_style/CDT';

export default function CountDownTimer({
  currStepIndex,
  setCurrStep,
  steps,
  setOpenModal,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [countDownTime, setCountDownTime] = useState(90);
  const [key, setKey] = useState(0);
  const [autoModeOn, setAutoModeOn] = useState(false);

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
    setIsPlaying(false);
    setCountDownTime(countDownTime);
    setKey(prevKey => prevKey + 1);

    const totalSteps = steps.length;
    if (currStepIndex + 1 < totalSteps) {
      setCurrStep(steps[currStepIndex + 1]);
      if (autoModeOn) {
        setIsPlaying(true);
      }
    } else {
      setOpenModal(true);
      setTimeout(() => setIsPlaying(false), 5100);
    }
  };

  return (
    <>
      <SI.Header marginBottom="5px">
        <SI.H4>Countdown Timer</SI.H4>
        <CDT.ButtonRow>
          <GS.Button
            onClick={OnClickNextStep}
            style={{ height: '35px', width: '80px', color: '#ffffff' }}
          >
            Next
          </GS.Button>
        </CDT.ButtonRow>
      </SI.Header>

      <SI.Header marginBottom="15px">
        <SI.H4 onClick={() => setAutoModeOn(!autoModeOn)}>
          AUTO MODE ☞ &nbsp;
          {autoModeOn ? 'ON' : 'OFF'}
        </SI.H4>
      </SI.Header>

      <CDT.TimerContainer>
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={countDownTime}
          colors={['#AE3139', '#3976e7', '#F7B801']}
          colorsTime={[10, 5, 0]}
          onComplete={() => {
            const reset = () => {
              setKey(prevKey => prevKey + 1);
              if (autoModeOn === true) {
                OnClickNextStep();
              }
            };
            setTimeout(() => reset(), 5000);
            setIsPlaying(false);
            return { shouldRepeat: true, delay: 5 };
          }}
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
              icon={faCirclePause}
              onClick={() => setIsPlaying(false)}
            />
          </CDT.Controller>
          <CDT.Controller>
            <FontAwesomeIcon
              icon={faPlay}
              onClick={() => setIsPlaying(true)}
            />
          </CDT.Controller>
          <CDT.Controller>
            <FontAwesomeIcon
              icon={faCircleStop}
              onClick={() => {
                setIsPlaying(false);
                setCountDownTime(countDownTime);
                setKey(prevKey => prevKey + 1);
              }}
            />
          </CDT.Controller>
        </CDT.FlexRow>

      </CDT.Setup>
    </>
  );
}
