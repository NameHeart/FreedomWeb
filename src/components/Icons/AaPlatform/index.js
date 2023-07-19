import React from 'react';

export default function renderIcon({
  width = 21,
  height = 21,
  color = '#9ca2b8',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 21 21"
    >
      <g
        id="Group_714"
        data-name="Group 714"
        transform="translate(-607.91 1302.423)"
      >
        <path
          id="Path_4002"
          data-name="Path 4002"
          d="M610.494-1281.423a2.575,2.575,0,0,1-1.827-.757,2.583,2.583,0,0,1,0-3.654l15.833-15.833a2.584,2.584,0,0,1,3.654,0,2.583,2.583,0,0,1,0,3.654l-15.833,15.833A2.576,2.576,0,0,1,610.494-1281.423Z"
          fill={color}
        />
        <path
          id="Path_4003"
          data-name="Path 4003"
          d="M626.326-1281.423a2.575,2.575,0,0,1-1.827-.757l-15.833-15.833a2.583,2.583,0,0,1,0-3.654,2.584,2.584,0,0,1,3.654,0l15.833,15.833a2.583,2.583,0,0,1,0,3.654A2.575,2.575,0,0,1,626.326-1281.423Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
