import React, { useEffect, useRef, useState } from 'react';
import './progress.scss';
import formatTime from '../../../../ultis/formatTime';
import sleepAsync from '../../../../ultis/sleepAsync';

const Progress = ({ audioRef }) => {
  const inputRef = useRef(null);
  const timeoutThrotRef = useRef(null);
  const timeoutDeboundRef = useRef(null);
  const durationRef = useRef(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [value, setValue] = useState(0);
  const handleOnChange = (e) => {
    audioRef.current.pause();
    // using debound when user seek
    const percent = e.target.value;
    setValue(percent);
    if (timeoutDeboundRef.current) clearTimeout(timeoutDeboundRef.current);
    timeoutDeboundRef.current = setTimeout(() => {
      const timeSeek = (percent * duration) / 100;
      audioRef.current.setCurrentTime(timeSeek);
      sleepAsync(50, () => {
        audioRef.current.play();
      });
    }, 300);
  };

  useEffect(() => {
    audioRef.current &&
      audioRef.current.onLoadedMetadata(() => {
        setDuration(audioRef.current?.getDuration());
      });
    durationRef.current = duration;
  }, [audioRef, duration]);

  useEffect(() => {
    let isThrotting = false;
    audioRef.current.onTimeupdate(() => {
      if (isThrotting) return;
      isThrotting = true;
      timeoutThrotRef.current = setTimeout(() => {
        const currentTime = audioRef.current?.getCurrentTime();
        setCurrentTime(currentTime);
        setValue((currentTime * 100) / durationRef.current);
        isThrotting = false;
      }, 1000);
    });

    return () => {
      clearTimeout(timeoutThrotRef.current);
    };
  }, [audioRef]);

  useEffect(() => {
    let newValue =
      ((value - inputRef.current.min) /
        (inputRef.current.max - inputRef.current.min)) *
      100;
    inputRef.current.style.background =
      'linear-gradient(to right, rgb(221, 170, 255) 0%, rgb(221, 170, 255) ' +
      newValue +
      '%, #fff ' +
      newValue +
      '%, white 100%)';
  }, [value]);
  return (
    <div className="progress">
      <span>{formatTime(currentTime)}</span>
      <input
        ref={inputRef}
        onChange={handleOnChange}
        type="range"
        value={value}
        step={0.5}
        min="0"
        max="100"
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default Progress;
