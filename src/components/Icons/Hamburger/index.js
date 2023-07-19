import React from 'react';

export default function renderIcon({
  width = 58,
  height = 22,
  color = 'black',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 148 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.38501"
        y1="103.531"
        x2="147.006"
        y2="103.531"
        stroke={color}
        strokeWidth="16.0241"
      />
      <line
        x1="0.38501"
        y1="56.2599"
        x2="147.006"
        y2="56.2599"
        stroke={color}
        strokeWidth="16.0241"
      />
      <line
        x1="0.384766"
        y1="8.18716"
        x2="147.005"
        y2="8.18716"
        stroke={color}
        strokeWidth="16.0241"
      />
    </svg>
  );
}
