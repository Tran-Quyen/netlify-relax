import React, { useEffect, useRef, useState } from 'react';
import './control-volumn.scss';

const ControlVolumn = ({ audioRef }) => {
  const inputVolumeRef = useRef(null);
  const [volume, setVolume] = useState(80);
  const [mute, setMute] = useState(false);
  const timeoutRef = useRef(null);
  const handleOnChangeVolume = (e) => {
    // debounce
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const volume = e.target.value;
    setVolume(volume);
    timeoutRef.current = setTimeout(() => {
      audioRef.current.setVolume(volume / 100);
    }, 300);
  };

  const handleClickToVolume = () => {
    setMute(!mute);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.setMute(mute);
  }, [mute, audioRef]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.setVolume(volume / 100);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="control-volumn">
      <span onClick={handleClickToVolume} className="control-volumn__icon">
        <i
          className={`${
            mute
              ? 'bx bx-volume-mute'
              : volume === '100'
              ? 'bx bx-volume-full'
              : 'bx bx-volume-low'
          }`}
        ></i>
      </span>
      <input
        ref={inputVolumeRef}
        onChange={handleOnChangeVolume}
        type="range"
        value={volume}
        min="0"
        max="100"
      />
      <span className="control-volumn__current">{volume}</span>
    </div>
  );
};

export default ControlVolumn;
