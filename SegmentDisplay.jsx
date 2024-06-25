import React from 'react';
import './SegmentDisplay.css';

const SegmentDisplay = ({ segments }) => {
  return (
    <div className="seven-segment">
      <div className={`segment ${segments[0] ? 'on' : 'off'} a`}></div>
      <div className={`segment ${segments[1] ? 'on' : 'off'} b`}></div>
      <div className={`segment ${segments[2] ? 'on' : 'off'} c`}></div>
      <div className={`segment ${segments[3] ? 'on' : 'off'} d`}></div>
      <div className={`segment ${segments[4] ? 'on' : 'off'} e`}></div>
      <div className={`segment ${segments[5] ? 'on' : 'off'} f`}></div>
      <div className={`segment ${segments[6] ? 'on' : 'off'} g`}></div>
    </div>
  );
};

export default SegmentDisplay;