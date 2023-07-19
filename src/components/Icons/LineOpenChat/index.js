import React from 'react';

export default function renderIcon({
  width = 35,
  height = 35,
  color = 'white',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 21.3295C0 19.5474 0.227537 17.7726 0.677092 16.0482C2.50359 9.04202 7.82054 3.47695 14.7362 1.33303L15.9129 0.968228C17.9833 0.326402 20.1385 0 22.306 0H38.4096C50.3337 0 60 9.66634 60 21.5904V54.2169C60 57.4108 57.4108 60 54.2169 60C50.6237 60 47.7108 57.0872 47.7108 53.494V19.1785C47.7108 18.8287 47.623 18.4845 47.4554 18.1775C45.6594 14.8883 42.3301 12.7225 38.5953 12.4138L35.9036 12.1912H21.3214C17.2434 12.1912 13.6441 14.8553 12.4527 18.7554C12.1845 19.6334 12.0482 20.5463 12.0482 21.4644V37.8459C12.0482 41.855 14.4512 45.4735 18.1464 47.0287C19.3698 47.5435 20.6837 47.8088 22.0111 47.8088H30.0442C33.5052 47.8088 36.2718 50.6869 36.1351 54.1452C36.0058 57.4154 33.317 60 30.0442 60H20.6823C18.0214 60 15.4034 59.3294 13.0701 58.0503L10.1612 56.4555C8.37789 55.4779 6.75788 54.2282 5.35953 52.7515C1.91801 49.1171 0 44.3021 0 39.2969V21.3295Z"
        fill={color}
      />
    </svg>
  );
}